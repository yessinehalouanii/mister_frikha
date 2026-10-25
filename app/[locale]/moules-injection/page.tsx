import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/content";
import { breadcrumbLd, buildMetadata, faqLd, serviceLd } from "@/lib/seo";
import { trailFor } from "@/lib/page";
import { JsonLd } from "@/components/JsonLd";
import { CatalogueRows, DimensionedPhoto, Faq, PageHero, SectionHead, SpecSheet, SteelTable, T0Band } from "@/components/sections";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "injection");
}

export default async function InjectionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = getDict(locale);
  const p = d.injection;
  const trail = trailFor(locale, "injection");

  return (
    <>
      <PageHero
        d={d}
        h1={p.h1}
        lead={p.lead}
        trail={trail}
        media={
          <DimensionedPhoto
            k="moldSlides"
            alt={p.heroAlt}
            dims={{ h: d.common.maxSize, v: d.common.maxSizeShort }}
            priority
          />
        }
      >
        <p className="mt-6 max-w-[40ch] text-muted">
          <strong className="font-semibold text-blue-hi">{d.home.t0Strong}</strong> {d.home.t0Rest}
        </p>
      </PageHero>

      <section>
        <div className="px-[var(--m)] py-24 lg:py-32">
          <SectionHead title={p.types.title} />
          <CatalogueRows
            d={d}
            headingLevel={3}
            items={p.types.items.map((t) => ({ ref: t.ref, name: t.name, text: t.text, uses: t.uses, mold: t.image, moldAlt: t.alt }))}
          />
        </div>
      </section>

      <T0Band d={d} />
      <SteelTable d={d} />
      <SpecSheet d={d} image="cncLg800" imageAlt={d.machines.fleet.items[2].alt} />
      <Faq title={p.faq.title} items={p.faq.items} />

      <JsonLd
        data={[
          breadcrumbLd(locale, trail),
          ...p.types.items.map((t) => serviceLd(locale, t.name, t.text, "/moules-injection")),
          faqLd(p.faq.items),
        ]}
      />
    </>
  );
}
