"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useI18n();
  const hero = t("hero");

  return (
    <section
      className="
        relative overflow-hidden bg-steel-900 text-white
        h-[640px] md:h-[720px]
      "
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/122.jpg"
          alt="Factory background"
          fill
          priority
          className="object-cover opacity-30"
          style={{ objectPosition: "center 30%" }} // 🔥 crop from bottom (adjust 20-50%)
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-steel-900/70 via-steel-900/60 to-steel-900/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 h-full">
        {/* Make content fill the hero height */}
        <div className="grid items-center gap-10 lg:grid-cols-2 h-full py-14 md:py-16">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm text-white/90 backdrop-blur">
              {hero.badge}
            </p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl leading-[1.05]">
              {hero.title1}
              <span className="block text-brand-500">{hero.title2}</span>
            </h1>

            <p className="mt-6 text-lg text-white/80">{hero.desc}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-900/30 hover:bg-brand-900 transition"
              >
                {hero.contactCta} <ArrowRight size={18} />
              </a>
            </div>

            {/* ✅ Trust strip moved UP (no longer glued to the bottom) */}
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                {hero.trust1}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                {hero.trust2}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                {hero.trust3}
              </div>
            </div>
          </motion.div>

          {/* Right: card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="
              rounded-2xl border border-white/10 bg-white/95 p-6
              text-steel-900 shadow-2xl shadow-black/30 backdrop-blur
              max-w-[520px] justify-self-end w-full
            "
          >
            <div className="flex items-center gap-4">
              <Image
                src="/SIM.jpg"
                alt="SIM Logo"
                width={90}
                height={90}
                className="h-16 w-16 object-contain"
              />
              <div>
                <div className="text-xl font-bold">
                  {hero.cardTitle}
                </div>
                <div className="text-sm text-steel-500">{hero.cardSub}</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-steel-50 p-4">
                <div className="text-2xl font-extrabold text-brand-500">30+</div>
                <div className="text-xs text-steel-500">{hero.yearsLabel}</div>
              </div>
              <div className="rounded-xl bg-steel-50 p-4">
                <div className="text-2xl font-extrabold text-brand-500">
                  {hero.prodValue}
                </div>
                <div className="text-xs text-steel-500">{hero.prodLabel}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
