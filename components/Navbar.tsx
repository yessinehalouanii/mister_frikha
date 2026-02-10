// components/Navbar.tsx
"use client";

import Image from "next/image";
import { useI18n } from "@/components/LanguageProvider";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const nav = t("nav");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-steel-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/SIM.jpg"
            alt="SIM Group"
            width={40}
            height={40}
            className="rounded-md object-contain"
          />
          <span className="font-extrabold tracking-tight text-steel-900">
            {nav.brand}
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex text-sm font-semibold">
          {[
            [nav.about, "#about"],
            [nav.equipment, "#equipment"], // ✅ NEW
            [nav.products, "#products"],
            [nav.why, "#why"], // ✅ NEW
            [nav.contact, "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-steel-700 hover:text-brand-500 transition"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side: language + CTA */}
        <div className="flex items-center gap-3">
          {/* ✅ Language switch (flag) */}
            <button
          type="button"
          onClick={() => setLang(lang === "en" ? "fr" : "en")}
          className="h-10 w-10 rounded-xl border border-steel-200 bg-white hover:bg-steel-50 transition flex items-center justify-center"
          aria-label={lang === "en" ? "Switch to French" : "Switch to English"}
          title={lang === "en" ? "Français" : "English"}
        >
          <Image
            src={lang === "en" ? "/fr.svg" : "/uk.svg"}
            alt={lang === "en" ? "French" : "English"}
            width={22}
            height={22}
            className="rounded-[4px]"
          />
        </button>


          {/* CTA */}
          <a
            href="#contact"
            className="hidden rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-900 transition md:inline-flex"
          >
            {nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
