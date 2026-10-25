import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Archivo, IBM_Plex_Sans_Arabic, JetBrains_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { dirOf, routing, type AppPathname } from "@/i18n/routing";
import { getDict } from "@/content";
import { organizationLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { INTRO_HEAD_SCRIPT, LogoIntro } from "@/components/LogoIntro";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd } from "@/components/JsonLd";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#121519",
  colorScheme: "dark",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: "SIM",
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const d = getDict(locale);

  const primary: { href: AppPathname; label: string }[] = [
    { href: "/moules-injection", label: d.nav.injection },
    { href: "/moules-soufflage", label: d.nav.blow },
    { href: "/bureau-etudes", label: d.nav.design },
    { href: "/parc-machines", label: d.nav.machines },
    { href: "/realisations", label: d.nav.projects },
  ];
  const secondary: { href: AppPathname; label: string }[] = [
    { href: "/a-propos", label: d.nav.about },
    { href: "/contact", label: d.nav.contact },
  ];

  return (
    <html
      lang={locale}
      dir={dirOf(locale)}
      className={`${archivo.variable} ${jetbrains.variable} ${plexArabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_HEAD_SCRIPT }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[60] bg-blue px-4 py-3 text-white focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
        >
          {d.nav.skip}
        </a>
        <LogoIntro />
        <NextIntlClientProvider>
          <SiteHeader
            primary={primary}
            secondary={secondary}
            labels={{
              quote: d.nav.quote,
              menu: d.nav.menu,
              close: d.nav.close,
              languages: d.nav.languages,
              whatsapp: d.common.whatsappLong,
              prefill: d.common.whatsappPrefill,
            }}
          />
          <main id="main">{children}</main>
          <SiteFooter d={d} links={[{ href: "/", label: d.nav.home }, ...primary, ...secondary]} />
        </NextIntlClientProvider>
        <WhatsAppFab label={d.common.whatsappLong} prefill={d.common.whatsappPrefill} />
        <JsonLd data={organizationLd(locale)} />
      </body>
    </html>
  );
}
