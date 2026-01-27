"use client";

import { useI18n } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useI18n();
  const footer = t("footer");

return (
  <footer className="mt-10 border-t bg-white">
    <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-steel-500 flex justify-center">
      <div className="text-center">
        {footer.rights.replace("{year}", String(new Date().getFullYear()))}
      </div>
    </div>
  </footer>
);
}
