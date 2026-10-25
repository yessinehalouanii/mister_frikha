import type { Locale } from "@/i18n/routing";
import { ar } from "./ar";
import { en } from "./en";
import { fr, type Dict } from "./fr";
import { frenchTypography } from "./shared";

const dictionaries: Record<Locale, Dict> = {
  fr: frenchTypography(fr),
  en,
  ar,
};

export const getDict = (locale: Locale): Dict => dictionaries[locale];
export type { Dict };
