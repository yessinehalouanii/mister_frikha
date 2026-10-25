import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { isLocale } from "@/i18n/routing";
import { getDict } from "@/content";

const copy = {
  fr: { title: "Page introuvable", text: "Cette page n’existe pas ou a été déplacée." },
  en: { title: "Page not found", text: "This page does not exist or has moved." },
  ar: { title: "الصفحة غير موجودة", text: "هذه الصفحة غير موجودة أو تمّ نقلها." },
};

export default async function NotFound() {
  const raw = await getLocale();
  const locale = isLocale(raw) ? raw : "fr";
  const d = getDict(locale);
  return (
    <section className="drawing-grid px-[var(--m)] py-32">
      <p className="figure text-h2 text-muted">404</p>
      <h1 className="display mt-6 text-display">{copy[locale].title}</h1>
      <p className="mt-6 text-lead">{copy[locale].text}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          {d.nav.home}
        </Link>
        <Link href="/contact" className="btn btn-quiet">
          {d.nav.contact}
        </Link>
      </div>
    </section>
  );
}
