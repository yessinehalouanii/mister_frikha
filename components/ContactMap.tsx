"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";

export default function ContactMap() {
  const { t } = useI18n();
  const c = t("contact");

  // ✅ Your location (free embed + clickable open-in-maps link)
  const MAP_LAT = 34.807943;
  const MAP_LNG = 10.694936;
  const MAP_ZOOM = 17;

  const MAP_OPEN_URL = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=${MAP_ZOOM}`;
  const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=${MAP_ZOOM}&output=embed`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "err"; msg: string }>(null);

  async function sendMessage() {
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const json = await res.json();

      if (!res.ok) {
        const msg = json?.error?.message || json?.error || c.fail;
        setStatus({ type: "err", msg });
        return;
      }

      setStatus({ type: "ok", msg: c.ok });
      setName("");
      setEmail("");
      setMessage("");
    } catch (e: any) {
      setStatus({ type: "err", msg: e?.message || c.net });
    } finally {
      setLoading(false);
    }
  }

  // ✅ Contact info data structure
  const contactInfo = [
    {
      icon: MapPin,
      title: c.location || 'Location',
      content: 'Gremda Km 10, Sfax, Tunisia',
      link: MAP_OPEN_URL
    },
    {
      icon: Phone,
      title: c.phone || 'Phone',
      content: '+216 74 123 456',
      link: 'tel:+21674123456'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+216 28 831 700',
      link: 'https://wa.me/21628831700'
    },
    {
      icon: Mail,
      title: c.email || 'Email',
      content: 'contact@simfrikha.com',
      link: 'https://mail.google.com/mail/?view=cm&to=contact@simfrikha.com'
    }
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-xl font-black text-brand-500 uppercase">{c.title}</h2>
      <p className="mt-2 text-2xl font-extrabold text-steel-900">{c.desc}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 items-start">
        {/* ✅ Contact Info Card - Simple & Elegant */}
        <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white p-8 shadow-lg border border-brand-100">
          <div className="space-y-6">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-300">
                    <Icon className="text-brand-500 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-steel-600 uppercase tracking-wide mb-1">
                      {item.title}
                    </h3>
                    <a
                      href={item.link}
                      target={item.icon === MapPin || item.icon === Mail ? "_blank" : undefined}
                      rel={item.icon === MapPin || item.icon === Mail ? "noreferrer" : undefined}
                      className="text-steel-900 hover:text-brand-500 transition-colors duration-200 text-base leading-relaxed whitespace-pre-line"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Decorative separator */}
            <div className="pt-4 border-t border-brand-200/50">
              <p className="text-sm text-steel-500 italic text-center">
                {c.subtitle || "We're here to help you succeed"}
              </p>
            </div>
          </div>
        </div>

        
        <div className="overflow-hidden rounded-2xl bg-white shadow">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
