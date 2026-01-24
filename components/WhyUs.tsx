"use client";

import { Award, Clock, Wrench } from "lucide-react";

export default function WhyUs() {
  const points = [
    { icon: Award, title: "Quality First", desc: "Repeatable process with inspections." },
    { icon: Clock, title: "On-Time Delivery", desc: "Clear planning + reliable production." },
    { icon: Wrench, title: "Full Support", desc: "From design to mold and mass production." },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-3xl font-extrabold">Why Choose Us</h2>
      <p className="mt-2 text-steel-500 max-w-2xl">
        Build trust quickly with short, strong points.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {points.map((p) => (
          <div key={p.title} className="rounded-2xl bg-white p-6 shadow">
            <p.icon className="text-brand-500" />
            <div className="mt-3 font-bold">{p.title}</div>
            <div className="mt-1 text-sm text-steel-500">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
