import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/content";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";
import { trailFor } from "@/lib/page";
import { JsonLd } from "@/components/JsonLd";
import { DatasheetStrip, DimensionedPhoto, PageHero, T0Band } from "@/components/sections";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "about");
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = getDict(locale);
  const p = d.about;
  const trail = trailFor(locale, "about");

  return (
    <>
      <PageHero
        d={d}
        h1={p.h1}
        lead={p.lead}
        trail={trail}
        media={<DimensionedPhoto k="cncPro800" alt={p.heroAlt} aspect="aspect-[4/3]" priority />}
      />
      <DatasheetStrip items={d.strip} label={d.specs.title} />

      <section className="on-paper bg-paper text-graphite">
        <div className="grid gap-10 px-[var(--m)] py-24 lg:grid-cols-12 lg:py-32">
          <h2 className="title reveal text-h2 lg:col-span-5">{p.story.title}</h2>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            {p.story.paragraphs.map((t, i) => (
              <p key={i} className={`reveal ${i ? "reveal-2" : ""} max-w-[56ch] text-lead`}>
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="px-[var(--m)] py-24 lg:py-32">
          <h2 className="title reveal text-h2">{p.values.title}</h2>
          <ul className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {p.values.items.map((v, i) => (
              <li key={v.name} className={`reveal ${i ? `reveal-${i + 1}` : ""} pt-5 shadow-[0_-1px_0_var(--line-strong)]`}>
                <h3 className="title text-h3">{v.name}</h3>
                <p className="mt-3 max-w-[40ch] text-muted">{v.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-24 grid gap-6 bg-steel p-8 lg:grid-cols-12 lg:p-12">
            <h2 className="title reveal text-h2 lg:col-span-5">{p.export.title}</h2>
            <p className="reveal reveal-2 max-w-[52ch] text-lead lg:col-span-6 lg:col-start-7">{p.export.text}</p>
          </div>
        </div>
      </section>

      <T0Band d={d} />

      <JsonLd data={breadcrumbLd(locale, trail)} />
    </>
  );
}
