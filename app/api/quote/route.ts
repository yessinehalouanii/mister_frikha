import { Resend } from "resend";
import { checkFiles, fieldErrors, quoteSchema, type QuoteErrorCode } from "@/lib/quote";

export const runtime = "nodejs";

// Best-effort rate limit: per server instance, 5 requests per IP every 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_REQUESTS;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const fail = (code: QuoteErrorCode, status: number, fields?: object) =>
  Response.json({ ok: false, error: code, fields }, { status });

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return fail("rate", 429);

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return fail("server", 400);
  }

  // Honeypot: real visitors never see or fill this field.
  if (String(form.get("website") ?? "").trim() !== "") return Response.json({ ok: true });

  const raw = Object.fromEntries(
    ["name", "company", "phone", "email", "moldType", "material", "volume", "message", "locale"].map(
      (k) => [k, form.get(k) === null || form.get(k) === "" ? undefined : String(form.get(k))],
    ),
  );
  const parsed = quoteSchema.safeParse({ ...raw, email: raw.email ?? "" });
  if (!parsed.success) return fail("server", 400, fieldErrors(parsed.error));

  const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  const fileError = checkFiles(files);
  if (fileError) return fail(fileError, 400, { files: fileError });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Quote form: RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is missing");
    return fail("server", 500);
  }

  const q = parsed.data;
  const rows: [string, string][] = [
    ["Nom", q.name],
    ["Société", q.company],
    ["Téléphone", q.phone],
    ["E-mail", q.email],
    ["Type de moule", q.moldType ?? ""],
    ["Matière", q.material],
    ["Volume annuel", q.volume],
    ["Langue du site", q.locale],
    ["Fichiers joints", files.map((f) => f.name).join(", ")],
  ];
  const html = `
    <h2 style="font-family:sans-serif">Nouvelle demande de devis</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#555">${k}</td><td style="padding:4px 0"><b>${escapeHtml(v)}</b></td></tr>`,
        )
        .join("")}
    </table>
    <p style="font-family:sans-serif;color:#555;margin-top:16px">Projet :</p>
    <pre style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(q.message)}</pre>`;

  const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").slice(0, 80);
  const attachments = await Promise.all(
    files.map(async (f) => ({ filename: f.name, content: Buffer.from(await f.arrayBuffer()) })),
  );

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `SIM – Site web <${from}>`,
      to: [to],
      subject: `Demande de devis – ${oneLine(q.name)}${q.company ? ` (${oneLine(q.company)})` : ""}`,
      html,
      attachments,
      ...(q.email ? { replyTo: q.email } : {}),
    });
    if (error) {
      console.error("Quote form: Resend error", error);
      return fail("server", 502);
    }
  } catch (e) {
    console.error("Quote form: send failed", e);
    return fail("server", 502);
  }

  return Response.json({ ok: true });
}
