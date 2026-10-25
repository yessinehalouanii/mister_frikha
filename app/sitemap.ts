import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { alternates, pageKeys } from "@/lib/seo";

const priority: Partial<Record<keyof typeof pageKeys, number>> = {
  home: 1,
  injection: 0.9,
  blow: 0.9,
  contact: 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return (Object.keys(pageKeys) as (keyof typeof pageKeys)[]).flatMap((key) => {
    const languages = alternates(pageKeys[key]);
    return locales.map((locale) => ({
      url: languages[locale],
      lastModified,
      changeFrequency: "monthly" as const,
      priority: priority[key] ?? 0.7,
      alternates: { languages },
    }));
  });
}
