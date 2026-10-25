import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/routing";
import type { Dict } from "@/content";
import { site, whatsappWithText } from "@/lib/site";
import { ArrowIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";

export function SiteFooter({ d, links }: { d: Dict; links: { href: AppPathname; label: string }[] }) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-steel">
      <div className="grid gap-14 px-[var(--m)] pb-16 pt-24 lg:grid-cols-12 lg:pt-32">
        <div className="lg:col-span-7">
          <h2 className="display reveal text-display">{d.cta.title}</h2>
          <p className="reveal reveal-2 mt-6 max-w-[46ch] text-lead">{d.cta.text}</p>
          <div className="reveal reveal-3 mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              {d.common.quote} <ArrowIcon className="arrow-flip h-5 w-5" />
            </Link>
            <a href={whatsappWithText(d.common.whatsappPrefill)} className="btn btn-quiet" target="_blank" rel="noopener">
              <WhatsAppIcon className="h-5 w-5" /> {d.common.whatsapp}
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:col-start-8">
          <div>
            <h3 className="text-small font-semibold text-muted">{d.footer.contact}</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href={site.phoneHref} className="flex items-start gap-3 hover:text-blue-hi">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                  <span dir="ltr">{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-blue-hi">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.mapOpen} target="_blank" rel="noopener" className="flex items-start gap-3 hover:text-blue-hi">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                  {d.contact.address}
                </a>
              </li>
            </ul>
          </div>
          <nav aria-label={d.footer.pages}>
            <h3 className="text-small font-semibold text-muted">{d.footer.pages}</h3>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-blue-hi">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-x-8 gap-y-2 px-[var(--m)] pb-4 text-small text-muted">
        <p>
          © {year} SIM, {site.legalName}. {d.footer.rights}
        </p>
        <p className="max-w-[60ch]">{d.footer.tagline}</p>
      </div>

      {/* The name returns at full width, cropped by the page edge. Drawn as SVG: it is decoration, not text. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 250"
        preserveAspectRatio="xMidYMin slice"
        className="pointer-events-none block h-[17vw] w-full select-none px-[var(--m)]"
      >
        <text
          x="0"
          y="330"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          className="fill-steel-2 font-sans font-extrabold"
          style={{ fontSize: 440, fontStretch: "125%" }}
        >
          SIM
        </text>
      </svg>
    </footer>
  );
}
