"use client";

import { useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/routing";
import type { Dict } from "@/content";
import { site } from "@/lib/site";
import {
  ACCEPT_ATTR,
  checkFiles,
  fieldErrors,
  quoteSchema,
  type QuoteErrorCode,
  type QuoteField,
} from "@/lib/quote";

type Copy = Dict["contact"];
type Errors = Partial<Record<QuoteField | "files", QuoteErrorCode>>;

const formatSize = (bytes: number) =>
  bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;

const inputCls =
  "mt-2 block w-full bg-steel px-4 py-3 text-ink shadow-[inset_0_0_0_1px_var(--line-strong)] placeholder:text-muted/80 transition-shadow hover:shadow-[inset_0_0_0_1px_var(--color-muted)] focus:shadow-[inset_0_0_0_2px_var(--color-blue-hi)] focus:outline-none aria-[invalid=true]:shadow-[inset_0_0_0_2px_#f08a8a]";

export function QuoteForm({ c, locale }: { c: Copy; locale: Locale }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<QuoteErrorCode | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const err = (field: keyof Errors) => (errors[field] ? c.errors[errors[field]!] : null);

  function focusFirstError(e: Errors) {
    const first = Object.keys(e).find((k) => e[k as keyof Errors]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (k: string) => String(data.get(k) ?? "").trim() || undefined;

    const parsed = quoteSchema.safeParse({
      name: value("name") ?? "",
      company: value("company"),
      phone: value("phone") ?? "",
      email: value("email") ?? "",
      moldType: value("moldType"),
      material: value("material"),
      volume: value("volume"),
      message: value("message") ?? "",
      locale,
    });
    const next: Errors = parsed.success ? {} : fieldErrors(parsed.error);
    const fileError = checkFiles(files);
    if (fileError) next.files = fileError;
    setErrors(next);
    setFormError(null);
    if (Object.keys(next).length) {
      focusFirstError(next);
      return;
    }

    // FormSubmit turns these fields into the email sent to contact@simfrikha.com.
    const q = parsed.data!;
    const moldLabel = c.moldTypes.find((t) => t.value === q.moldType)?.label ?? "";
    const mail = new FormData();
    mail.set("_subject", `Demande de devis – ${q.name}${q.company ? ` (${q.company})` : ""}`);
    mail.set("_template", "table");
    mail.set("_captcha", "false");
    mail.set("_honey", String(data.get("_honey") ?? ""));
    if (q.email) mail.set("_replyto", q.email);
    const rows: [string, string | undefined][] = [
      ["Nom", q.name],
      ["Société", q.company],
      ["Téléphone", q.phone],
      ["E-mail", q.email],
      ["Type de moule", moldLabel],
      ["Matière", q.material],
      ["Volume annuel", q.volume],
      ["Projet", q.message],
      ["Langue du site", locale],
    ];
    rows.forEach(([k, v]) => v && mail.set(k, v));
    files.forEach((f) => mail.append("attachment", f, f.name));

    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: mail,
      });
      const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
      if (res.ok && String(json.success) === "true") {
        setStatus("ok");
        form.reset();
        setFiles([]);
        return;
      }
      if (json.message) console.warn("Quote form:", json.message);
      setFormError(res.status === 429 ? "rate" : "server");
      setStatus("error");
    } catch {
      setFormError("server");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div role="status" className="bg-blue p-8 text-white lg:p-10">
        <p className="title text-h3">{c.success}</p>
      </div>
    );
  }

  const totalSize = files.reduce((s, f) => s + f.size, 0);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2" aria-busy={status === "sending"}>
      {/* Honeypot: hidden from people and assistive tech; bots fill it. */}
      <div aria-hidden="true" className="absolute -start-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field label={c.labels.name} required requiredLabel={c.labels.required} error={err("name")} id="q-name">
        <input id="q-name" name="name" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} aria-describedby={errors.name ? "q-name-err" : undefined} />
      </Field>
      <Field label={c.labels.company} optionalLabel={c.labels.optional} id="q-company">
        <input id="q-company" name="company" autoComplete="organization" className={inputCls} />
      </Field>
      <Field label={c.labels.phone} required requiredLabel={c.labels.required} error={err("phone")} id="q-phone">
        <input id="q-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" placeholder="+216" className={`${inputCls} text-start rtl:text-end`} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "q-phone-err" : undefined} />
      </Field>
      <Field label={c.labels.email} optionalLabel={c.labels.optional} error={err("email")} id="q-email">
        <input id="q-email" name="email" type="email" autoComplete="email" dir="ltr" className={`${inputCls} rtl:text-end`} aria-invalid={!!errors.email} aria-describedby={errors.email ? "q-email-err" : undefined} />
      </Field>
      <Field label={c.labels.moldType} optionalLabel={c.labels.optional} id="q-type" wide>
        <select id="q-type" name="moldType" defaultValue="" className={`${inputCls} appearance-none`}>
          <option value="">—</option>
          {c.moldTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label={c.labels.material} optionalLabel={c.labels.optional} id="q-material">
        <input id="q-material" name="material" placeholder={c.placeholders.material} className={inputCls} />
      </Field>
      <Field label={c.labels.volume} optionalLabel={c.labels.optional} id="q-volume">
        <input id="q-volume" name="volume" placeholder={c.placeholders.volume} className={inputCls} />
      </Field>
      <Field label={c.labels.message} required requiredLabel={c.labels.required} error={err("message")} id="q-message" wide>
        <textarea id="q-message" name="message" rows={6} placeholder={c.placeholders.message} className={`${inputCls} resize-y`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "q-message-err" : undefined} />
      </Field>

      <div className="sm:col-span-2">
        <p className="text-small font-semibold">
          {c.labels.files} <span className="font-normal text-muted">({c.labels.optional})</span>
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-4 bg-steel p-3 shadow-[inset_0_0_0_1px_var(--line-strong)] focus-within:shadow-[inset_0_0_0_2px_var(--color-blue-hi)]">
          <input
            id="q-files"
            name="files"
            type="file"
            multiple
            accept={ACCEPT_ATTR}
            onChange={(e) => {
              setFiles(Array.from(e.target.files ?? []));
              setErrors((prev) => ({ ...prev, files: undefined }));
            }}
            aria-invalid={!!errors.files}
            aria-describedby={`q-files-hint${errors.files ? " q-files-err" : ""}`}
            className="peer sr-only"
          />
          <label htmlFor="q-files" className="btn cursor-pointer bg-steel-2 text-ink hover:bg-blue">
            {c.chooseFiles}
          </label>
          <span className="text-small text-muted" aria-hidden="true">
            {files.length ? files.map((f) => f.name).join(", ") : c.noFiles}
          </span>
        </div>
        <p id="q-files-hint" className="mt-2 text-small text-muted">
          {c.filesHint}. {c.filesLarge}
        </p>
        {files.length > 0 && (
          <ul className="mt-3 space-y-1 text-small">
            {files.map((f) => (
              <li key={f.name + f.size} className="flex justify-between gap-4">
                <span className="truncate" dir="ltr">{f.name}</span>
                <span className="figure shrink-0 text-muted">{formatSize(f.size)}</span>
              </li>
            ))}
            <li className="flex justify-between gap-4 pt-1 font-semibold">
              <span>Total</span>
              <span className={`figure ${totalSize > 4 * 1024 * 1024 ? "text-[#f08a8a]" : ""}`}>{formatSize(totalSize)} / 4 MB</span>
            </li>
          </ul>
        )}
        {errors.files && (
          <p id="q-files-err" className="mt-2 text-small text-[#f08a8a]">
            {c.errors[errors.files]}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        {formError && status === "error" && (
          <p role="alert" className="mb-5 bg-steel-2 p-4 text-[#f5b0b0]">
            {c.errors[formError]}
          </p>
        )}
        <button type="submit" className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? c.sending : c.submit}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  requiredLabel,
  optionalLabel,
  error,
  wide,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  requiredLabel?: string;
  optionalLabel?: string;
  error?: string | null;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="text-small font-semibold">
        {label}{" "}
        <span className={required ? "font-normal text-blue-hi" : "font-normal text-muted"}>
          ({required ? requiredLabel : optionalLabel})
        </span>
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-2 text-small text-[#f08a8a]">
          {error}
        </p>
      )}
    </div>
  );
}
