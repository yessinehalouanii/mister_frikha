"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Target, Clock } from "lucide-react";
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

            <h1 className="mt-7 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl leading-tight">
              {hero.title1}
              <span className="block text-brand-500 mt-1">{hero.title2}</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/85 leading-relaxed max-w-lg">{hero.desc}</p>

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
              hidden md:block
              rounded-2xl border border-white/10 bg-gradient-to-br from-white/95 to-steel-50 p-6
              text-steel-900 shadow-2xl shadow-black/30 backdrop-blur
              max-w-[520px] justify-self-end w-full
            "
          >
            {/* Top: logo + title */}
            <div className="flex items-center gap-4">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-white/80 p-2 shadow-inner">
                <Image
                  src="/SIM.jpg"
                  alt="SIM Logo"
                  width={80}
                  height={80}
                  className="object-contain rounded"
                />
                <div className="absolute -right-2 -top-2 rounded-full bg-brand-500 px-2 py-0.5 text-xs font-semibold text-white">SIM</div>
              </div>

              <div className="flex-1">
                <div className="text-lg font-extrabold tracking-tight">{hero.cardTitle}</div>

                {/* Decorative divider */}
                <div className="mt-3 flex items-center gap-3 text-xs text-steel-400">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-brand-500" />
                    <span>Qualité</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4 text-brand-500" />
                    <span>Précision</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-brand-500" />
                    <span>Délais</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-steel-100 bg-white p-4 flex items-center gap-3">
                <div className="rounded-md bg-brand-50 p-2">
                  <div className="text-brand-600 font-extrabold">25+</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">{hero.yearsLabel}</div>
                  <div className="text-xs text-steel-400">Expérience</div>
                </div>
              </div>

              <div className="rounded-xl border border-steel-100 bg-white p-4 flex items-center gap-3">
                <div className="rounded-md bg-brand-50 p-2">
                  <div className="text-brand-600 font-extrabold">{hero.prodValue}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">{hero.prodLabel}</div>
                  <div className="text-xs text-steel-400">Capacité</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-600">
                {hero.contactCta} <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
