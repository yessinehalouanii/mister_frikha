import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/content";
import { breadcrumbLd, buildMetadata, faqLd, serviceLd } from "@/lib/seo";
import { trailFor } from "@/lib/page";
import { JsonLd } from "@/components/JsonLd";
import { DimensionedPhoto, Faq, PageHero, Photo, SpecSheet } from "@/components/sections";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "blow");
}

export default async function BlowPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = getDict(locale);
  const p = d.blow;
  const trail = trailFor(locale, "blow");

  return (
    <>
      <PageHero
        d={d}
        h1={p.h1}
        lead={p.lead}
        trail={trail}
        media={<DimensionedPhoto k="partBottles" alt={p.how.partsAlt} aspect="aspect-[2/1]" priority />}
      />

      <section>
        <div className="grid gap-12 px-[var(--m)] py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="lg:col-span-4">
            <h2 className="title reveal text-h2">{p.materials.title}</h2>
            <figure className="reveal reveal-2 mt-10 max-w-[420px]">
              <div className="aspect-square overflow-hidden bg-paper-2">
                <Photo k="moldBlowPet" alt={p.heroAlt} sizes="(min-width: 1024px) 30vw, 100vw" />
              </div>
            </figure>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {p.materials.items.map((m) => (
              <li key={m.name} className="reveal grid gap-4 py-10 shadow-[0_-1px_0_var(--line)] sm:grid-cols-[minmax(8rem,1fr)_3fr] sm:gap-8">
                <h3 className="figure text-h2 leading-none text-blue-hi">{m.name}</h3>
                <p className="max-w-[52ch] text-body">{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-paper bg-paper text-graphite">
        <div className="grid gap-10 px-[var(--m)] py-24 lg:grid-cols-12 lg:py-32">
          <h2 className="title reveal text-h2 lg:col-span-5">{p.how.title}</h2>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            {p.how.paragraphs.map((t, i) => (
              <p key={i} className={`reveal ${i ? "reveal-2" : ""} max-w-[56ch] text-lead`}>
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      <SpecSheet d={d} image="cncPro1000" imageAlt={d.home.capacity.imageAlt} />
      <Faq title={p.faq.title} items={p.faq.items} />

      <JsonLd
        data={[breadcrumbLd(locale, trail), serviceLd(locale, p.h1, p.lead, "/moules-soufflage"), faqLd(p.faq.items)]}
      />
    </>
  );
}
