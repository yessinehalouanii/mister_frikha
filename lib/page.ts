import type { AppPathname, Locale } from "@/i18n/routing";
import { getDict } from "@/content";
import { pageKeys, type PageKey } from "./seo";

const navKey: Record<Exclude<PageKey, "home">, keyof ReturnType<typeof getDict>["nav"]> = {
  injection: "injection",
  blow: "blow",
  design: "design",
  machines: "machines",
  projects: "projects",
  about: "about",
  contact: "contact",
};

/** Home → page trail, for the visible breadcrumb and BreadcrumbList. */
export function trailFor(locale: Locale, key: Exclude<PageKey, "home">) {
  const d = getDict(locale);
  return [
    { name: d.nav.home, href: "/" as AppPathname },
    { name: d.nav[navKey[key]], href: pageKeys[key] as AppPathname },
  ];
}
