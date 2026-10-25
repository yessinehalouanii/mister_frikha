import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];

// Internal pathnames are the French slugs; en and ar share English slugs
// (Arabic-script slugs get percent-encoded and break when shared).
export const routing = defineRouting({
  locales,
  defaultLocale: "fr",
  localePrefix: "as-needed",
  // "/" always serves French to crawlers and visitors alike.
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/moules-injection": { fr: "/moules-injection", en: "/injection-molds", ar: "/injection-molds" },
    "/moules-soufflage": { fr: "/moules-soufflage", en: "/blow-molds", ar: "/blow-molds" },
    "/bureau-etudes": { fr: "/bureau-etudes", en: "/design-office", ar: "/design-office" },
    "/parc-machines": { fr: "/parc-machines", en: "/machine-shop", ar: "/machine-shop" },
    "/realisations": { fr: "/realisations", en: "/projects", ar: "/projects" },
    "/a-propos": { fr: "/a-propos", en: "/about", ar: "/about" },
    "/contact": { fr: "/contact", en: "/contact", ar: "/contact" },
  },
});

export type AppPathname = keyof typeof routing.pathnames;
export const appPathnames = Object.keys(routing.pathnames) as AppPathname[];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const dirOf = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");
