import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/content";
import { buildMetadata, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import {
  CatalogueRows,
  DatasheetStrip,
  DimensionedPhoto,
  Faq,
  PageHero,
  PartsGallery,
  Process,
  SectionHead,
  SpecSheet,
  T0Band,
} from "@/components/sections";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "home");
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = getDict(locale);
  const h = d.home;

  return (
    <>
      <PageHero
        d={d}
        h1={h.h1}
        lead={h.lead}
        split
        media={
          <DimensionedPhoto
            k="moldUnscrewing"
            alt={h.heroAlt}
            caption={h.heroCaption}
            dims={{ h: d.common.maxSize, v: d.common.maxSizeShort }}
            callouts={{
              labels: h.heroCallouts,
              legend: h.heroCalloutsLabel,
              points: [
                { x: 70, y: 26, bx: 90, by: 9 },
                { x: 42, y: 33, bx: 22, by: 14 },
                { x: 63, y: 46, bx: 89, by: 56 },
                { x: 50, y: 78, bx: 18, by: 88 },
              ],
            }}
            sizes="(min-width: 1024px) 46vw, 100vw"
            priority
          />
        }
      >
        <p className="mt-6 max-w-[40ch] text-muted">
          <strong className="font-semibold text-blue-hi">{h.t0Strong}</strong> {h.t0Rest}
        </p>
      </PageHero>
      <DatasheetStrip items={d.strip} label={d.specs.title} />

      <section>
        <div className="px-[var(--m)] py-24 lg:py-32">
          <SectionHead title={h.families.title} intro={h.families.intro} />
          <CatalogueRows
            d={d}
            items={h.families.items.map((it) => ({
              ...it,
              partFit: it.part === "partBottles" ? ("cover" as const) : undefined,
            }))}
          />
        </div>
      </section>

      <T0Band d={d} />
      <Process d={d} />
      <SpecSheet d={d} image="cncPro1000" imageAlt={h.capacity.imageAlt} />

      <PartsGallery
        title={h.projects.title}
        text={h.projects.text}
        link={{ label: d.common.seeAll, href: "/realisations" }}
        items={[
          { k: "partCaps", name: d.projects.pairs[0].name, alt: d.projects.pairs[0].partAlt },
          { k: "partPump", name: d.projects.pairs[1].name, alt: d.projects.pairs[1].partAlt },
          { k: "partTube", name: d.projects.pairs[2].name, alt: d.projects.pairs[2].partAlt },
          { k: "partBottles", name: d.projects.pairs[3].name, alt: d.projects.pairs[3].partAlt, fit: "cover" },
          { k: "partValve", name: d.projects.parts[0].name, alt: d.projects.parts[0].alt, fit: "cover" },
          { k: "partSprinkler", name: d.projects.parts[1].name, alt: d.projects.parts[1].alt, fit: "cover" },
        ]}
      />

      <Faq title={h.faq.title} items={h.faq.items} paper={false} />
      <JsonLd data={faqLd(h.faq.items)} />
    </>
  );
}
