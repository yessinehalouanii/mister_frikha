// components/Navbar.tsx
"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-steel-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/SIM.jpg"
            alt="SIM Group"
            width={40}
            height={40}
            className="rounded-md object-contain"
          />
          <span className="font-extrabold tracking-tight text-steel-900">
            Mechanical industrial company
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex text-sm font-semibold">
          {[
            ["About", "#about"],
            ["Equipment", "#equipment"], // ✅ NEW
            ["Products", "#products"],
            ["Clients", "#clients"], // ✅ NEW
            ["Why", "#why"], // ✅ NEW (you already have WhyUs section)
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-steel-700 hover:text-brand-500 transition"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-900 transition md:inline-flex"
        >
          Start Cooperation
        </a>
      </div>
    </header>
  );
}
