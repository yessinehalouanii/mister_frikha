"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gauge, Cpu, Wrench, ShieldCheck } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";

const EQUIPMENT = [
  {
    key: "cnc1",
    image: "/zar.png", // ✅ put your real photo in /public
    specs: ["Up to 450T", "Servo drive", "24/7 production"],
  },
  {
    key: "cnc2",
    image: "/zaaaa.png",
    specs: ["Dimensional checks", "Sampling plan", "Traceability"],
  },
];

export default function Equipment() {
  const { t } = useI18n();
  const equipment = t("equipment");

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black text-brand-500 uppercase">
            {equipment.badge}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-steel-900">
            {equipment.title}
          </h2>
          <p className="mt-2 text-steel-500 max-w-2xl">
            {equipment.desc}
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {EQUIPMENT.map((e, i) => {
          const name =
            e.key === "cnc1"
              ? equipment.items.cnc1_name
              : equipment.items.cnc2_name;

          const subtitle =
            e.key === "cnc1"
              ? equipment.items.cnc1_sub
              : equipment.items.cnc2_sub;

          return (
            <motion.div
              key={e.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-steel-100 bg-white shadow-sm"
            >
              <div className="relative h-92 w-full">
                <Image
                  src={e.image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/55 via-steel-900/10 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-extrabold text-steel-900">
                      {name}
                    </div>
                    <div className="mt-1 text-sm text-steel-500">
                      {subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
