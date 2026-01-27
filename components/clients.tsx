"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Factory } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";

/**
 * 👉 Replace logos with REAL client logos when available.
 * Put files in /public/clients/
 */
const CLIENT_LOGOS = [
  { key: "c1", logo: "/sopal.png" },
  { key: "c2", logo: "/sofpince.jpg" },
  { key: "c3", logo: "/va.png" },
  { key: "c4", logo: "/ami.png" },
  { key: "c5", logo: "/cho.png" },
  { key: "c6", logo: "/lp.png" },
] as const;

const TRUST_POINTS = [
  {
    icon: Factory,
    title: "Industrial Partners",
    desc: "OEMs, subcontractors & manufacturers",
  },
  {
    icon: Globe,
    title: "Local & Export",
    desc: "Tunisia, Europe & international markets",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Trust",
    desc: "Repeat clients & stable cooperation",
  },
];

export default function Clients() {
  const { t } = useI18n();
  const clients = t("clients");

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-black text-brand-500 uppercase">
          {clients.badge}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-steel-900">
          {clients.title}
        </h2>
        <p className="mt-2 text-steel-500">{clients.desc}</p>
      </div>

      {/* Logos grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {CLIENT_LOGOS.map((c, i) => {
          const name = clients.logos[c.key];

          return (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="
                flex items-center justify-center
                rounded-2xl border border-steel-100 bg-white
                p-6 shadow-sm
                transition hover:grayscale-0 hover:opacity-100
              "
            >
              <Image
                src={c.logo}
                alt={name}
                width={160}
                height={80}
                className="h-10 w-auto object-contain"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
