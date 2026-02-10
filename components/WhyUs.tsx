"use client";

import { Award, Clock, Wrench, Globe } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";

export default function WhyUs() {
  const { t } = useI18n();
  const why = t("why");

  const points = [
    { icon: Award, title: why.q1_t, desc: why.q1_d },
    { icon: Clock, title: why.q2_t, desc: why.q2_d },
    { icon: Wrench, title: why.q3_t, desc: why.q3_d },
    { icon: Globe, title: why.q4_t, desc: why.q4_d },

  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-xl font-black text-brand-500 uppercase">{why.title}</h2>
      <p className="mt-2 text-2xl font-extrabold text-steel-900">{why.desc}</p>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl bg-steel-50 p-6 shadow-2xl border border-steel-100 transform-gpu transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
          >
            <p.icon className="mx-auto block h-7 w-7 text-brand-500" />
            <div className="mt-3 text-center font-bold">{p.title}</div>
            <div className="mt-1 text-center text-sm text-steel-500">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
