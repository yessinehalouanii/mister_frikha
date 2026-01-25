"use client";

import { useI18n } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useI18n();
  const footer = t("footer");

  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-steel-500 flex flex-wrap items-center justify-between gap-3">
        <div>
          {footer.rights.replace("{year}", String(new Date().getFullYear()))}
        </div>

        <div className="flex gap-4">
          <a href="#contact" className="hover:text-steel-900">
            {footer.contact}
          </a>
          <a href="/catalog.pdf" target="_blank" className="hover:text-steel-900">
            {footer.catalog}
          </a>
        </div>
      </div>
    </footer>
  );
}
