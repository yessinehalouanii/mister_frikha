import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { trailFor } from "@/lib/page";
import { site, whatsappWithText } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/sections";
import { QuoteForm } from "@/components/QuoteForm";
import { MapEmbed } from "@/components/MapEmbed";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "contact");
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = getDict(locale);
  const c = d.contact;
  const trail = trailFor(locale, "contact");

  return (
    <>
      <section className="drawing-grid">
        <div className="px-[var(--m)] pb-14 pt-10 lg:pb-20 lg:pt-16">
          <Breadcrumbs label={d.nav.breadcrumb} trail={trail} />
          <h1 className="display mt-6 text-display">{c.h1}</h1>
          <p className="mt-7 max-w-[52ch] text-lead">{c.lead}</p>
        </div>
      </section>

      <section>
        <div className="grid gap-16 px-[var(--m)] py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-7">
            <h2 className="title text-h2">{c.formTitle}</h2>
            <div className="mt-10">
              <QuoteForm c={c} locale={locale} />
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="title text-h2">{c.directTitle}</h2>
            <ul className="mt-10 space-y-8">
              <li>
                <p className="text-small text-muted">{c.phoneLabel}</p>
                <a href={site.phoneHref} className="figure mt-1 inline-flex items-center gap-3 text-h3 hover:text-blue-hi">
                  <PhoneIcon className="h-6 w-6" /> {site.phoneDisplay}
                </a>
                <a
                  href={whatsappWithText(d.common.whatsappPrefill)}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary mt-4 w-full sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" /> {d.common.whatsappLong}
                </a>
              </li>
              <li>
                <p className="text-small text-muted">{c.emailLabel}</p>
                <a href={`mailto:${site.email}`} className="mt-1 inline-flex items-center gap-3 text-body hover:text-blue-hi">
                  <MailIcon className="h-5 w-5" /> {site.email}
                </a>
              </li>
              <li>
                <p className="text-small text-muted">{c.addressLabel}</p>
                <a href={site.mapOpen} target="_blank" rel="noopener" className="mt-1 inline-flex items-start gap-3 text-body hover:text-blue-hi">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0" /> {c.address}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section aria-label={c.mapTitle} className="px-[var(--m)] pb-24 lg:pb-32">
        <MapEmbed src={site.mapEmbed} title={c.mapTitle} openUrl={site.mapOpen} openLabel={c.address} />
      </section>

      <JsonLd data={breadcrumbLd(locale, trail)} />
    </>
  );
}
