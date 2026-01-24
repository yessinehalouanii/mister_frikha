"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    name: "Unscrewing Mold",
    mold: "/4.png",
    product: "/fff.png",
  },
  {
    name: "Molds with hydraulic or pneumatic cylinder",
    mold: "/333.png",
    product: "/gg.png",
  },
    {
    name: "All types of blow molds : PET / PP / HDPE",
    mold: "/yeiyy.png",
    product: "/yei.png",
  },    {
    name: "other injection mold with slides",
    mold: "/compress.png",
    product: "/howi.png",
  },
];

export default function Products() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold">Products</h2>
          <p className="mt-2 text-steel-500 max-w-2xl">
            Mold → Product (side by side).
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="rounded-3xl bg-white p-6 shadow-sm border border-steel-100"
          >
            <div className="text-lg font-bold">{p.name}</div>

            {/* ✅ FIXED: each column is wrapped in its own <div> so grid stays 2 columns */}
            {/* ✅ FIXED: both images use the same 1536×1024 ratio (3:2) */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {/* Mold column */}
              <div>
                <div className="text-xs text-steel-500 mb-2">Mold</div>
                <div className="overflow-hidden rounded-xl bg-steel-50">
                  <div className="relative w-full aspect-[3/2]">
                    <Image
                      src={p.mold}
                      alt={`${p.name} mold`}
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
                <div className="text-xs text-steel-500 mb-2">Product</div>
                <div className="overflow-hidden rounded-xl bg-steel-50">
                  <div className="relative w-full aspect-[3/2]">
                    <Image
                      src={p.product}
                      alt={`${p.name} product`}
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
        ))}
      </div>
    </section>
  );
}
