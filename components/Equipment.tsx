"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gauge, Cpu, Wrench, ShieldCheck } from "lucide-react";

const EQUIPMENT = [
  {
    name: "CNC Machine",
    subtitle: "High precision / stable cycles",
    image: "/za.png", // ✅ put your real photo in /public
    specs: ["Up to 450T", "Servo drive", "24/7 production"],
  },
  {
    name: "CNC Machine (LG-800)",
    subtitle: "Repeatable inspections",
    image: "/zaaaa.png",
    specs: ["Dimensional checks", "Sampling plan", "Traceability"],
  },
  
];

export default function Equipment() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-brand-500 uppercase">
            Equipment & Machinery
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-steel-900">
            Modern Capacity for Tooling & Production
          </h2>
          <p className="mt-2 text-steel-500 max-w-2xl">
            From mold fabrication to injection production and quality control —
            everything is organized for precision, speed, and reliability.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {EQUIPMENT.map((e, i) => {
          return (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-steel-100 bg-white shadow-sm"
            >
              <div className="relative h-92 w-full">
                <Image
                  src={e.image}
                  alt={e.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/55 via-steel-900/10 to-transparent" />               
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-extrabold text-steel-900">
                      {e.name}
                    </div>
                    <div className="mt-1 text-sm text-steel-500">
                      {e.subtitle}
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
