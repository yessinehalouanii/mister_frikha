import Image from "next/image";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/routing";
import type { Dict } from "@/content";
import { images, type ImageKey } from "@/lib/images";
import { whatsappWithText } from "@/lib/site";
import { ArrowIcon, ChevronIcon, WhatsAppIcon } from "./icons";

// ── Pictures ──────────────────────────────────────────────────────────────

export function Photo({
  k,
  alt,
  sizes,
  priority = false,
  className = "",
  fit = "cover",
}: {
  k: ImageKey;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  fit?: "cover" | "contain";
}) {
  const img = images[k];
  return (
    <Image
      src={img.src}
      width={img.width}
      height={img.height}
      alt={alt}
      sizes={sizes}
      priority={priority}
      fetchPriority={priority ? "high" : undefined}
      className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} ${className}`}
    />
  );
}

/** A photo framed by dimension lines, like a part on a drawing. */
export function DimensionedPhoto({
  k,
  alt,
  caption,
  dims,
  priority,
  sizes = "(min-width: 1024px) 56vw, 100vw",
  aspect = "aspect-[3/2]",
  callouts,
}: {
  k: ImageKey;
  alt: string;
  caption?: string;
  dims?: { h: string; v: string };
  priority?: boolean;
  sizes?: string;
  aspect?: string;
  /** Numbered balloons on the photo (x/y in % of the frame), keyed to a legend. */
  callouts?: { labels: string[]; legend: string; points: { x: number; y: number }[] };
}) {
  return (
    <figure className={dims ? "relative ms-[34px] mt-[34px]" : "relative"}>
      {dims && (
        <>
          <div className="dim dim-h font-mono tabular-nums" aria-hidden="true">
            <span>{dims.h}</span>
          </div>
          <div className="dim dim-v font-mono tabular-nums" aria-hidden="true">
            <span>{dims.v}</span>
          </div>
        </>
      )}
      <div className={`relative ${aspect} overflow-hidden bg-paper-2`}>
        <Photo k={k} alt={alt} sizes={sizes} priority={priority} />
        {callouts?.points.map((pt, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="figure absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-graphite text-small text-ink ring-1 ring-white/70"
            style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
          >
            {i + 1}
          </span>
        ))}
      </div>
      {(caption || callouts) && (
        <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-small text-muted">
          {caption && <span>{caption}</span>}
          {callouts && (
            <ol aria-label={callouts.legend} className="flex flex-wrap gap-x-4 gap-y-1">
              {callouts.labels.map((l, i) => (
                <li key={l} className="flex items-baseline gap-1.5">
                  <span className="figure text-ink">{i + 1}</span> {l}
                </li>
              ))}
            </ol>
          )}
        </figcaption>
      )}
    </figure>
  );
}

// ── Page furniture ────────────────────────────────────────────────────────

export function Breadcrumbs({ label, trail }: { label: string; trail: { name: string; href: AppPathname }[] }) {
  return (
    <nav aria-label={label}>
      <ol className="flex flex-wrap items-center gap-x-2 text-small text-muted">
        {trail.map((t, i) => (
          <li key={t.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < trail.length - 1 ? (
              <Link href={t.href} className="hover:text-ink">
                {t.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {t.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function QuoteActions({ d, light = false }: { d: Dict; light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/contact" className={`btn ${light ? "btn-light" : "btn-primary"}`}>
        {d.common.quote} <ArrowIcon className="arrow-flip h-5 w-5" />
      </Link>
      <a href={whatsappWithText(d.common.whatsappPrefill)} target="_blank" rel="noopener" className="btn btn-quiet">
        <WhatsAppIcon className="h-5 w-5" />
        <span>
          {d.common.whatsapp} <span dir="ltr">24 731 010</span>
        </span>
      </a>
    </div>
  );
}

export function PageHero({
  d,
  h1,
  lead,
  trail,
  media,
  children,
}: {
  d: Dict;
  h1: string;
  lead: string;
  trail?: { name: string; href: AppPathname }[];
  media?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="drawing-grid">
      <div className="px-[var(--m)] pb-16 pt-10 lg:pb-24 lg:pt-14">
        {trail && <Breadcrumbs label={d.nav.breadcrumb} trail={trail} />}
        <h1 className={`display max-w-[22ch] text-display ${trail ? "mt-6" : ""}`}>{h1}</h1>
        <div className={`mt-10 grid gap-12 lg:mt-14 lg:gap-10 ${media ? "lg:grid-cols-12" : ""}`}>
          <div className={media ? "lg:col-span-5" : "max-w-3xl"}>
            <p className="max-w-[38ch] text-lead">{lead}</p>
            {children}
            <div className="mt-9">
              <QuoteActions d={d} />
            </div>
          </div>
          {media && <div className="lg:col-span-7">{media}</div>}
        </div>
      </div>
    </section>
  );
}

export function DatasheetStrip({ items, label }: { items: { value: string; label: string }[]; label: string }) {
  return (
    <section aria-label={label} className="bg-steel">
      <dl className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex flex-col-reverse justify-end gap-1 px-[var(--m)] py-6 shadow-[inset_-1px_-1px_0_var(--line)] rtl:shadow-[inset_1px_-1px_0_var(--line)]"
          >
            <dt className="text-small text-muted">{it.label}</dt>
            <dd className="figure text-h3 leading-none">{it.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function SectionHead({ title, intro, className = "" }: { title: string; intro?: string; className?: string }) {
  return (
    <div className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
      <h2 className="title reveal text-h2 lg:col-span-6">{title}</h2>
      {intro && <p className="reveal reveal-2 max-w-[48ch] lg:col-span-5 lg:col-start-8">{intro}</p>}
    </div>
  );
}

// ── Catalogue rows: reference, name, text, mold → part ────────────────────

type CatalogueItem = {
  ref?: string;
  name: string;
  text: string;
  href?: AppPathname;
  uses?: string;
  mold: ImageKey;
  moldAlt: string;
  part?: ImageKey;
  partAlt?: string;
  partFit?: "cover" | "contain";
};

export function CatalogueRows({ items, d, headingLevel = 3 }: { items: CatalogueItem[]; d: Dict; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="mt-14 lg:mt-20">
      {items.map((it) => (
        <li key={it.name} className="group grid gap-6 py-10 shadow-[0_-1px_0_var(--line)] lg:grid-cols-12 lg:gap-8 lg:py-12">
          {it.ref && <p className="figure hidden pt-1 text-small text-muted lg:col-span-1 lg:block">{it.ref}</p>}
          <div className={it.ref ? "lg:col-span-4" : "lg:col-span-5"}>
            <H className="title reveal text-h3">
              {it.name}
              {it.ref && <span className="figure ms-3 align-middle text-small font-normal text-muted lg:hidden">{it.ref}</span>}
            </H>
            <p className="reveal reveal-2 mt-3 max-w-[46ch]">{it.text}</p>
            {it.uses && <p className="reveal reveal-2 mt-4 text-small text-muted">{it.uses}</p>}
            {it.href && (
              <Link href={it.href} className="reveal reveal-3 mt-5 inline-flex items-center gap-2 font-semibold text-blue-hi hover:text-ink">
                {d.common.more}
                <span className="sr-only">: {it.name}</span>
                <ArrowIcon className="arrow-flip h-4 w-4" />
              </Link>
            )}
          </div>
          <div className={`grid gap-3 lg:col-span-7 ${it.part ? "grid-cols-2" : ""}`}>
            <figure className="reveal">
              <div className="aspect-[3/2] overflow-hidden bg-paper-2">
                <Photo k={it.mold} alt={it.moldAlt} sizes="(min-width: 1024px) 28vw, 50vw" className="zoom-img" />
              </div>
              {it.part && <figcaption className="mt-2 text-small text-muted">{d.common.mold}</figcaption>}
            </figure>
            {it.part && (
              <figure className="reveal reveal-2">
                <div className="aspect-[3/2] overflow-hidden bg-white">
                  <Photo k={it.part} alt={it.partAlt ?? ""} sizes="(min-width: 1024px) 28vw, 50vw" fit={it.partFit ?? "contain"} className="zoom-img" />
                </div>
                <figcaption className="mt-2 text-small text-muted">{d.common.part}</figcaption>
              </figure>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

// ── The free T0 trial, on a field of SIM blue ─────────────────────────────

export function T0Band({ d }: { d: Dict }) {
  const t = d.home.t0;
  return (
    <section className="bg-blue text-white">
      <div className="px-[var(--m)] py-24 lg:py-32">
        <h2 className="display reveal max-w-[22ch] text-display">{t.title}</h2>
        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="reveal reveal-2 max-w-[52ch] text-lead">{t.text}</p>
          <ul className="reveal reveal-3 mt-8 space-y-3">
            {t.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.55em] h-2 w-2 shrink-0 bg-white" />
                {p}
              </li>
            ))}
          </ul>
          <div className="reveal reveal-3 mt-10">
            <QuoteActions d={d} light />
          </div>
        </div>
        <figure className="reveal self-end lg:col-span-6">
          <div className="aspect-[3/2] overflow-hidden bg-blue-deep">
            <Photo k="press" alt={t.pressAlt} sizes="(min-width: 1024px) 48vw, 100vw" />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-small">
            <span>{t.caption}</span>
            <span className="figure text-h3">180 t</span>
          </figcaption>
        </figure>
        </div>
      </div>
    </section>
  );
}

// ── From drawing to part: the process, with the mold → part frame ─────────

export function Process({ d }: { d: Dict }) {
  const p = d.home.process;
  return (
    <section className="on-paper bg-paper text-graphite">
      <div className="px-[var(--m)] py-24 lg:py-36">
        <h2 className="display reveal text-display">
          {p.titleStart}{" "}
          <span className="swap" aria-hidden="true">
            <Photo k="moldUnscrewing" alt="" sizes="160px" />
            <Photo k="partCaps" alt="" sizes="160px" fit="contain" className="bg-white" />
          </span>{" "}
          {p.titleEnd}
        </h2>
        <p className="reveal reveal-2 mt-8 max-w-[52ch] text-lead text-slate">{p.intro}</p>
        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:grid-cols-6">
          {p.steps.map((s, i) => {
            const isTrial = i === 4;
            return (
              <li key={s.name} className={`reveal pt-5 ${isTrial ? "border-t-4 border-blue" : "border-t-2 border-graphite/15"}`}>
                <p className={`figure text-small ${isTrial ? "text-blue" : "text-slate"}`}>{i === 4 ? "T0" : String(i + 1).padStart(2, "0")}</p>
                <h3 className={`title mt-3 text-h3 ${isTrial ? "text-blue" : ""}`}>{s.name}</h3>
                <p className="mt-2 text-slate">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

// ── Datasheet table ───────────────────────────────────────────────────────

export function SpecSheet({ d, image, imageAlt }: { d: Dict; image: ImageKey; imageAlt: string }) {
  const s = d.specs;
  return (
    <section className="drawing-grid">
      <div className="grid gap-12 px-[var(--m)] py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="lg:col-span-5">
          <h2 className="title reveal text-h2">{s.title}</h2>
          <p className="reveal reveal-2 mt-5 max-w-[40ch] text-muted">{s.intro}</p>
          <figure className="reveal mt-10">
            <div className="aspect-[3/2] overflow-hidden bg-paper-2">
              <Photo k={image} alt={imageAlt} sizes="(min-width: 1024px) 38vw, 100vw" />
            </div>
          </figure>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <table className="w-full border-collapse bg-graphite text-start">
            <caption className="sr-only">{s.title}</caption>
            <tbody>
              {s.rows.map((r) => (
                <tr key={r.label} className="shadow-[0_1px_0_var(--line)]">
                  <th scope="row" className="w-[42%] py-4 pe-4 text-start align-top text-small font-normal text-muted">
                    {r.label}
                  </th>
                  <td className="py-4 align-top">
                    {"unit" in r && r.unit ? (
                      <span className="flex items-baseline gap-2">
                        <span className="figure text-h3 leading-none">{r.value}</span>
                        <span className="text-small text-muted">{r.unit}</span>
                      </span>
                    ) : (
                      <span className="font-medium" dir="auto">{r.value}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function SteelTable({ d }: { d: Dict }) {
  const s = d.injection.steels;
  return (
    <section>
      <div className="px-[var(--m)] py-24 lg:py-32">
        <SectionHead title={s.title} intro={s.intro} />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-start">
            <thead>
              <tr className="shadow-[0_1px_0_var(--line-strong)]">
                {s.head.map((h) => (
                  <th key={h} scope="col" className="pb-3 pe-6 text-start text-small font-normal text-muted">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.rows.map(([grade, eq, use]) => (
                <tr key={grade} className="shadow-[0_1px_0_var(--line)]">
                  <th scope="row" className="py-5 pe-6 text-start align-top">
                    <span className="figure text-h3">{grade}</span>
                  </th>
                  <td className="py-5 pe-6 align-top">
                    <span className="figure text-muted">{eq}</span>
                  </td>
                  <td className="py-5 align-top">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────

export function Faq({ title, items, paper = true }: { title: string; items: { q: string; a: string }[]; paper?: boolean }) {
  return (
    <section className={paper ? "on-paper bg-paper text-graphite" : ""}>
      <div className="faq px-[var(--m)] py-24 lg:py-32">
        <h2 className="title reveal text-h2">{title}</h2>
        <div className="mt-12 lg:ms-[33.333%] lg:mt-16">
          {items.map((it) => (
            <details key={it.q} className={`group ${paper ? "shadow-[0_-1px_0_var(--line-paper)]" : "shadow-[0_-1px_0_var(--line)]"}`}>
              <summary className="flex items-start justify-between gap-6 py-6 text-lead font-medium">
                {it.q}
                <ChevronIcon className="chev mt-1 h-6 w-6 shrink-0" />
              </summary>
              <p className={`max-w-[60ch] pb-8 ${paper ? "text-slate" : "text-muted"}`}>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Parts strip ───────────────────────────────────────────────────────────

export function PartsGallery({
  title,
  text,
  link,
  items,
}: {
  title: string;
  text?: string;
  link?: { label: string; href: AppPathname };
  items: { k: ImageKey; name: string; alt: string; fit?: "cover" | "contain" }[];
}) {
  return (
    <section className="on-paper bg-paper text-graphite">
      <div className="px-[var(--m)] py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="title reveal text-h2 lg:col-span-6">{title}</h2>
          <div className="lg:col-span-5 lg:col-start-8">
            {text && <p className="reveal reveal-2 text-slate">{text}</p>}
            {link && (
              <Link href={link.href} className="reveal reveal-3 mt-4 inline-flex items-center gap-2 font-semibold text-blue hover:text-graphite">
                {link.label} <ArrowIcon className="arrow-flip h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
        <ul className={`mt-14 grid grid-cols-2 gap-x-3 gap-y-8 ${items.length % 3 === 0 ? "md:grid-cols-3 xl:grid-cols-6" : "md:grid-cols-4"}`}>
          {items.map((it, i) => (
            <li key={it.name} className={`reveal ${i % 3 === 1 ? "reveal-2" : i % 3 === 2 ? "reveal-3" : ""}`}>
              <figure className="group">
                <div className="aspect-[4/5] overflow-hidden bg-white">
                  <Photo
                    k={it.k}
                    alt={it.alt}
                    sizes="(min-width: 1280px) 16vw, (min-width: 768px) 33vw, 50vw"
                    fit={it.fit ?? "contain"}
                    className={`zoom-img ${it.fit === "cover" ? "" : "p-3"}`}
                  />
                </div>
                <figcaption className="mt-3 font-medium">{it.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
