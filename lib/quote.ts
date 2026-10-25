import { z } from "zod";
import { locales } from "@/i18n/routing";

// Attachments stay under 4 MB in total so the email relay accepts them.
export const MAX_FILES_BYTES = 4 * 1024 * 1024;
export const MAX_FILES = 6;
export const ACCEPTED_EXTENSIONS = [
  "step", "stp", "iges", "igs", "stl", "pdf", "dwg", "dxf",
  "png", "jpg", "jpeg", "webp", "heic",
] as const;
export const ACCEPT_ATTR = ACCEPTED_EXTENSIONS.map((e) => `.${e}`).join(",");

export const moldTypeValues = [
  "injection-slides",
  "injection-unscrewing",
  "injection-cylinders",
  "blow",
  "unknown",
] as const;

/** Error messages are keys of `contact.errors` in the dictionaries. */
export type QuoteErrorCode = "name" | "phone" | "email" | "message" | "fileType" | "fileSize" | "rate" | "server";

const optionalText = (max: number) => z.string().trim().max(max).optional().default("");

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "name").max(120, "name"),
  company: optionalText(160),
  phone: z.string().trim().regex(/^\+?[\d\s().-]{8,20}$/, "phone"),
  email: z.union([z.literal(""), z.email("email").max(160, "email")]).optional().default(""),
  moldType: z.enum(moldTypeValues).optional(),
  material: optionalText(120),
  volume: optionalText(120),
  message: z.string().trim().min(10, "message").max(5000, "message"),
  locale: z.enum(locales),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
export type QuoteField = keyof QuoteInput;

/** Field → error code, from a failed parse. */
export function fieldErrors(error: z.ZodError): Partial<Record<QuoteField, QuoteErrorCode>> {
  const out: Partial<Record<QuoteField, QuoteErrorCode>> = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as QuoteField;
    if (!out[field]) out[field] = (issue.message as QuoteErrorCode) ?? "server";
  }
  return out;
}

export function checkFiles(files: { name: string; size: number }[]): QuoteErrorCode | null {
  if (files.length > MAX_FILES) return "fileSize";
  for (const f of files) {
    const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
    if (!(ACCEPTED_EXTENSIONS as readonly string[]).includes(ext)) return "fileType";
  }
  const total = files.reduce((sum, f) => sum + f.size, 0);
  return total > MAX_FILES_BYTES ? "fileSize" : null;
}
