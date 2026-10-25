import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getDict } from "@/content";
import { breadcrumbLd, buildMetadata, faqLd, serviceLd } from "@/lib/seo";
import { trailFor } from "@/lib/page";
import { JsonLd } from "@/components/JsonLd";
import { DimensionedPhoto, Faq, PageHero, Photo, Process } from "@/components/sections";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "design");
}

const fileTags = [".step .iges .stl", ".dwg .pdf", "", ""];

export default async function DesignPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = getDict(locale);
  const p = d.design;
  const trail = trailFor(locale, "design");

  return (
    <>
      <PageHero
        d={d}
        h1={p.h1}
        lead={p.lead}
        trail={trail}
        media={<DimensionedPhoto k="cavities" alt={p.heroAlt} priority />}
      />

      <section>
        <div className="px-[var(--m)] py-24 lg:py-32">
          <h2 className="title reveal text-h2">{p.inputs.title}</h2>
          <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
            {p.inputs.items.map((it, i) => (
              <li key={it.name} className={`reveal ${i % 2 ? "reveal-2" : ""} pt-5 shadow-[0_-1px_0_var(--line-strong)]`}>
                <h3 className="title text-h3">{it.name}</h3>
                {fileTags[i] && <p className="figure mt-2 text-small text-blue-hi">{fileTags[i]}</p>}
                <p className="mt-3 max-w-[40ch]">{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process d={d} />
      <section className="bg-steel">
        <div className="grid gap-12 px-[var(--m)] py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
          <div className="lg:col-span-6">
            <h2 className="title reveal text-h2">{p.dfm.title}</h2>
            <p className="reveal reveal-2 mt-8 max-w-[34ch] text-h3 leading-[1.35]">{p.dfm.text}</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h3 className="text-small font-semibold text-muted">{p.software.title}</h3>
            <table className="mt-4 w-full border-collapse text-start">
              <tbody>
                {p.software.items.map((s) => (
                  <tr key={s.name} className="shadow-[0_1px_0_var(--line)]">
                    <th scope="row" className="py-4 pe-6 text-start align-top text-h3 font-semibold">
                      {s.name}
                    </th>
                    <td className="py-4 align-top text-muted">{s.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <figure className="reveal mt-10">
              <div className="aspect-[4/3] overflow-hidden bg-paper-2">
                <Photo k="cncTool" alt={d.machines.tools.imageAlt} sizes="(min-width: 1024px) 34vw, 100vw" className="object-[50%_35%]" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <Faq title={p.faq.title} items={p.faq.items} />

      <JsonLd
        data={[breadcrumbLd(locale, trail), serviceLd(locale, p.h1, p.lead, "/bureau-etudes"), faqLd(p.faq.items)]}
      />
    </>
  );
}
