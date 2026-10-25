"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { getPathname, Link, usePathname } from "@/i18n/navigation";
import { locales, type AppPathname, type Locale } from "@/i18n/routing";
import { site, whatsappWithText } from "@/lib/site";
import { LogoMark } from "./Logo";
import { PhoneIcon, WhatsAppIcon } from "./icons";

type NavLink = { href: AppPathname; label: string };

type Props = {
  primary: NavLink[];
  secondary: NavLink[];
  labels: { quote: string; menu: string; close: string; languages: string; whatsapp: string; prefill: string };
};

const localeNames: Record<Locale, string> = { fr: "FR", en: "EN", ar: "عربي" };
const localeLong: Record<Locale, string> = { fr: "Français", en: "English", ar: "العربية" };

function LanguageSwitcher({ label, className = "" }: { label: string; className?: string }) {
  const pathname = usePathname();
  const current = useLocale();
  return (
    <nav aria-label={label} className={`flex items-center gap-1 ${className}`}>
      {locales.map((l) => (
        // A plain link to the clean localized URL (no /fr prefix, no redirect hop);
        // switching language reloads the page so <html lang/dir> update.
        <a
          key={l}
          href={getPathname({ locale: l, href: pathname as AppPathname })}
          hrefLang={l}
          lang={l}
          aria-current={l === current ? "true" : undefined}
          title={localeLong[l]}
          className={`px-2 py-2 text-small transition-colors ${
            l === current ? "font-semibold text-ink" : "text-muted hover:text-ink"
          }`}
        >
          {localeNames[l]}
        </a>
      ))}
    </nav>
  );
}

export function SiteHeader({ primary, secondary, labels }: Props) {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on: navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean | ((o: boolean) => boolean)) =>
    setOpenOn((typeof next === "function" ? next(open) : next) ? pathname : null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: AppPathname) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-graphite/95 shadow-[0_1px_0_var(--line)]">
      <div className="flex h-[72px] items-center gap-6 px-[var(--m)]">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="SIM">
          <LogoMark className="h-10 w-10" />
          <span className="text-lg font-bold tracking-wide">SIM</span>
        </Link>

        <nav aria-label="Navigation" className="ms-auto hidden xl:block">
          <ul className="flex items-center gap-7">
            {primary.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`text-small transition-colors ${
                    isActive(l.href) ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitcher label={labels.languages} className="ms-auto hidden xl:ms-0 lg:flex" />

        <span className="hidden sm:block">
          <Link href="/contact" className="btn btn-primary">
            {labels.quote}
          </Link>
        </span>

        <button
          type="button"
          className="ms-auto min-h-11 font-semibold sm:ms-0 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? labels.close : labels.menu}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-graphite px-[var(--m)] pb-10 pt-6 xl:hidden"
      >
        <ul className="flex flex-col">
          {[...primary, ...secondary].map((l) => (
            <li key={l.href} className="shadow-[0_1px_0_var(--line)]">
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`title block py-4 text-h3 ${isActive(l.href) ? "text-blue-hi" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher label={labels.languages} className="-ms-2 mt-6" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-primary">
            {labels.quote}
          </Link>
          <a href={whatsappWithText(labels.prefill)} className="btn btn-quiet" target="_blank" rel="noopener">
            <WhatsAppIcon className="h-5 w-5" /> {labels.whatsapp}
          </a>
          <a href={site.phoneHref} className="btn btn-quiet">
            <PhoneIcon className="h-5 w-5" /> <span dir="ltr">{site.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
