// app/api/send/route.ts
import { Resend } from "resend";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey) {
      return Response.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }
    if (!toEmail) {
      return Response.json({ error: "Missing CONTACT_TO_EMAIL" }, { status: 500 });
    }
    if (!fromEmail) {
      return Response.json({ error: "Missing CONTACT_FROM_EMAIL" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    const cleanName = (name ?? "").toString().trim();
    const cleanEmail = (email ?? "").toString().trim();
    const cleanMessage = (message ?? "").toString().trim();

    if (!cleanMessage) {
      return Response.json({ error: "Message is required." }, { status: 400 });
    }

    const replyTo = isValidEmail(cleanEmail)
      ? (cleanName ? `${cleanName} <${cleanEmail}>` : cleanEmail)
      : undefined;

    const { data, error } = await resend.emails.send({
      from: `SIM Mechanical <${fromEmail}>`,
      to: [toEmail], // ✅ must be your allowed testing email
      subject: `Contact — SIM Mechanical (${cleanName || "Visitor"})`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${cleanName || "Visitor"}</p>
        <p><b>Email:</b> ${cleanEmail || "Not provided"}</p>
        <p><b>Message:</b></p>
        <pre style="white-space:pre-wrap">${cleanMessage}</pre>
      `,
      ...(replyTo ? { replyTo } : {}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ ok: true, data });
  } catch (e: any) {
    return Response.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
