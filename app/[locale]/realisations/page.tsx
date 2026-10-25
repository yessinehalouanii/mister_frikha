import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { trailFor } from "@/lib/page";
import { JsonLd } from "@/components/JsonLd";
import { CatalogueRows, DimensionedPhoto, PageHero, PartsGallery } from "@/components/sections";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "projects");
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = getDict(locale);
  const p = d.projects;
  const trail = trailFor(locale, "projects");

  return (
    <>
      <PageHero
        d={d}
        h1={p.h1}
        lead={p.lead}
        trail={trail}
        media={<DimensionedPhoto k="moldCylinder" alt={p.pairs[2].moldAlt} aspect="aspect-[4/3]" priority />}
      />

      <section>
        <div className="px-[var(--m)] pb-24 lg:pb-32">
          <CatalogueRows
            d={d}
            headingLevel={2}
            items={p.pairs.map((x) => ({
              name: x.name,
              text: x.type,
              mold: x.mold,
              moldAlt: x.moldAlt,
              part: x.part,
              partAlt: x.partAlt,
              partFit: x.part === "partBottles" ? ("cover" as const) : undefined,
            }))}
          />
        </div>
      </section>

      <PartsGallery title={p.partsTitle} items={p.parts.map((x) => ({ k: x.image, name: x.name, alt: x.alt, fit: "cover" as const }))} />

      <JsonLd data={breadcrumbLd(locale, trail)} />
    </>
  );
}
