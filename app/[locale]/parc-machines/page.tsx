import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { trailFor } from "@/lib/page";
import { JsonLd } from "@/components/JsonLd";
import { CatalogueRows, DimensionedPhoto, PageHero, Photo, SectionHead, SpecSheet, SteelTable } from "@/components/sections";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "machines");
}

export default async function MachinesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = getDict(locale);
  const p = d.machines;
  const trail = trailFor(locale, "machines");

  return (
    <>
      <PageHero
        d={d}
        h1={p.h1}
        lead={p.lead}
        trail={trail}
        media={<DimensionedPhoto k="workshopSpindle" alt={p.heroAlt} priority />}
      />

      <section>
        <div className="px-[var(--m)] py-24 lg:py-32">
          <SectionHead title={p.fleet.title} />
          <CatalogueRows
            d={d}
            items={p.fleet.items.map((m) => ({ name: m.name, text: m.text, uses: m.kind, mold: m.image, moldAlt: m.alt }))}
          />
          <ul className="mt-6 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {p.fleet.more.map((m, i) => (
              <li key={m.name} className={`reveal ${i ? `reveal-${i + 1}` : ""} pt-5 shadow-[0_-1px_0_var(--line-strong)]`}>
                <h3 className="title text-h3">{m.name}</h3>
                <p className="mt-3 max-w-[40ch] text-muted">{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-paper bg-paper text-graphite">
        <div className="grid gap-12 px-[var(--m)] py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <figure className="reveal lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-paper-2">
              <Photo k="cncTool" alt={p.tools.imageAlt} sizes="(min-width: 1024px) 38vw, 100vw" />
            </div>
          </figure>
          <div className="self-center lg:col-span-6 lg:col-start-7">
            <h2 className="title reveal text-h2">{p.tools.title}</h2>
            <p className="reveal reveal-2 mt-8 max-w-[34ch] text-h3 leading-[1.35]">{p.tools.text}</p>
          </div>
        </div>
      </section>

      <SpecSheet d={d} image="cavities" imageAlt={d.design.heroAlt} />
      <SteelTable d={d} />

      <JsonLd data={breadcrumbLd(locale, trail)} />
    </>
  );
}
