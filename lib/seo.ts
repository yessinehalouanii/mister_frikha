import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { locales, type AppPathname, type Locale } from "@/i18n/routing";
import { getDict } from "@/content";
import { FOUNDING_YEAR, SITE_URL, site } from "./site";

export const pageKeys = {
  home: "/",
  injection: "/moules-injection",
  blow: "/moules-soufflage",
  design: "/bureau-etudes",
  machines: "/parc-machines",
  projects: "/realisations",
  about: "/a-propos",
  contact: "/contact",
} as const satisfies Record<string, AppPathname>;

export type PageKey = keyof typeof pageKeys;

const ogLocale: Record<Locale, string> = { fr: "fr_TN", en: "en_US", ar: "ar_TN" };

export const absoluteUrl = (locale: Locale, href: AppPathname) =>
  SITE_URL + getPathname({ locale, href }).replace(/\/$/, "");

export const homeUrl = (locale: Locale) => absoluteUrl(locale, "/") || SITE_URL;

/** Canonical URL for every locale of one page, plus x-default (French). */
export function alternates(href: AppPathname) {
  const languages = Object.fromEntries(
    locales.map((l) => [l, absoluteUrl(l, href) || SITE_URL]),
  ) as Record<Locale | "x-default", string>;
  languages["x-default"] = languages.fr;
  return languages;
}

export function buildMetadata(locale: Locale, key: PageKey): Metadata {
  const { title, description } = getDict(locale).meta[key];
  const href = pageKeys[key];
  const url = absoluteUrl(locale, href) || SITE_URL;
  // Child pages that set openGraph lose the inherited file-based image, so it is set explicitly.
  const image = {
    url: `${SITE_URL}${locale === "fr" ? "" : `/${locale}`}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: getDict(locale).meta.home.title,
  };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: alternates(href) },
    openGraph: {
      type: "website",
      siteName: site.name,
      url,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

// ── JSON-LD ────────────────────────────────────────────────────────────────

const orgId = `${SITE_URL}/#organization`;

export function organizationLd(locale: Locale) {
  const d = getDict(locale);
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    url: homeUrl(locale),
    logo: `${SITE_URL}/logo-sim.svg`,
    image: `${SITE_URL}/images/moule-injection-devissage-sim-sfax.webp`,
    description: d.footer.tagline,
    telephone: site.phoneDisplay.replace(/\s/g, ""),
    email: site.email,
    foundingDate: String(FOUNDING_YEAR),
    numberOfEmployees: { "@type": "QuantitativeValue", value: site.employees },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapOpen,
    areaServed: { "@type": "Country", name: "Tunisia" },
    knowsLanguage: ["fr", "ar", "en"],
    sameAs: site.sameAs,
  };
}

export function serviceLd(locale: Locale, name: string, description: string, href: AppPathname) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: absoluteUrl(locale, href),
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "Tunisia" },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbLd(locale: Locale, trail: { name: string; href: AppPathname }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(locale, item.href) || SITE_URL,
    })),
  };
}
