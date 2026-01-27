"use client";

import { Award, Clock, Wrench } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";

export default function WhyUs() {
  const { t } = useI18n();
  const why = t("why");

  const points = [
    { icon: Award, title: why.q1_t, desc: why.q1_d },
    { icon: Clock, title: why.q2_t, desc: why.q2_d },
    { icon: Wrench, title: why.q3_t, desc: why.q3_d },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-3xl font-extrabold">{why.title}</h2>
      <p className="mt-2 text-steel-500 max-w-2xl">{why.desc}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {points.map((p) => (
          <div key={p.title} className="rounded-2xl bg-white p-6 shadow">
            <p.icon className="mx-auto block h-7 w-7 text-brand-500" />
            <div className="mt-3 text-center font-bold">{p.title}</div>
            <div className="mt-1 text-center text-sm text-steel-500">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
