"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/components/LanguageProvider";

const PRODUCTS = [
  {
    key: "p1",
    mold: "/4.png",
    product: "/fff.png",
  },
  {
    key: "p2",
    mold: "/333.png",
    product: "/gg.png",
  },
  {
    key: "p3",
    mold: "/yeiyy.png",
    product: "/yei.png",
  },
  {
    key: "p4",
    mold: "/compress.png",
    product: "/howi.png",
  },
] as const;

export default function Products() {
  const { t } = useI18n();
  const products = t("products");

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold">{products.title}</h2>
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        {PRODUCTS.map((p, i) => {
          const name = products.items[p.key];

          return (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-3xl bg-white p-6 shadow-sm border border-steel-100"
            >
              <div className="text-lg font-bold">{name}</div>

              {/* ✅ FIXED: each column is wrapped in its own <div> so grid stays 2 columns */}
              {/* ✅ FIXED: both images use the same 1536×1024 ratio (3:2) */}
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {/* Mold column */}
                <div>
                  <div className="text-xs text-steel-500 mb-2">{products.mold}</div>
                  <div className="overflow-hidden rounded-xl bg-steel-50">
                    <div className="relative w-full aspect-[3/2]">
                      <Image
                        src={p.mold}
                        alt={`${name} mold`}
                        fill
                        className="object-contain"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </div>

                {/* Product column */}
                <div>
                  <div className="text-xs text-steel-500 mb-2">{products.product}</div>
                  <div className="overflow-hidden rounded-xl bg-steel-50">
                    <div className="relative w-full aspect-[3/2]">
                      <Image
                        src={p.product}
                        alt={`${name} product`}
                        fill
                        className="object-contain"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority={i === 0}
                      />
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
