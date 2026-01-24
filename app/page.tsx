// app/page.tsx
import Navbar from "@/components/Navbar";

import AboutGroup from "@/components/AboutGroup";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";

// ✅ NEW
import EquipmentMachinery from "@/components/Equipment";
import Clients from "@/components/clients";

function SectionDivider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-steel-200 to-transparent" />
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* pt-16 pushes below fixed navbar */}
      <main className="pt-16 bg-white">
        {/* anchor for top */}
        <div id="top" />

        <Hero />

        {/* ABOUT (white band) */}
        <SectionDivider />
        <section id="about" className="scroll-mt-24 bg-white">
          <AboutGroup />
        </section>

        {/* ✅ EQUIPMENT / MACHINERY (light band) */}
        <SectionDivider />
        <section id="equipment" className="scroll-mt-24 bg-steel-50">
          <EquipmentMachinery />
        </section>

        {/* PRODUCTS (white band for variety) */}
        <SectionDivider />
        <section id="products" className="scroll-mt-24 bg-white">
          <Products />
        </section>

        {/* ✅ CLIENTS (light band) */}
        <SectionDivider />
        <section id="clients" className="scroll-mt-24 bg-steel-50">
          <Clients />
        </section>

        {/* WHY (white band) */}
        <SectionDivider />
        <section id="why" className="scroll-mt-24 bg-white">
          <WhyUs />
        </section>

        {/* CONTACT (light band) */}
        <SectionDivider />
        <section id="contact" className="scroll-mt-24 bg-steel-50">
          <ContactMap />
        </section>

        <Footer />
      </main>
    </>
  );
}
