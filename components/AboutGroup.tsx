"use client";

import { useI18n } from "@/components/LanguageProvider";

export default function AboutGroup() {
  const { t } = useI18n();
  const about = t("about");

  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left image */}
        <div className="mb-10 lg:mb-0">
          <img
            src="/122.jpg"
            alt="Factory manufacturing"
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Right text */}
        <div className="flex flex-col justify-center">
          <p className="text-xl font-black text-brand-500 uppercase">
            {about.badge}
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-steel-900">
            {about.title}
          </h2>

          <p className="mt-4 text-steel-500 max-w-md">
            {about.desc}
          </p>

          {/* Benefits list */}
          <ul className="mt-6 space-y-3 text-steel-700">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              {about.b1}
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              {about.b2}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
