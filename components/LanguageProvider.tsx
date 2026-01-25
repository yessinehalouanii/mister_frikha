"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Lang, type I18nKey, type I18nShape } from "@/components/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <K extends I18nKey>(key: K) => I18nShape[K];
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("lang") as Lang | null)
        : null;
    if (saved === "en" || saved === "fr") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(() => {
    return {
      lang,
      setLang,
      t: (key) => translations[lang][key] as I18nShape[typeof key],
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider />");
  return ctx;
}
