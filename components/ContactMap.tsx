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

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-3xl font-extrabold">{c.title}</h2>
      <p className="mt-2 text-steel-500 max-w-2xl">{c.desc}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 items-start">
        <div className="rounded-2xl bg-white p-6 shadow">
          {/* ✅ Center all contact rows */}
          <div className="space-y-3 text-sm text-center">
            {/* ✅ Clickable map row (icon + address opens Google Maps) */}
            <a
              href={MAP_OPEN_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg p-1 -m-1 hover:bg-black/5 transition"
              title="Open location in Google Maps"
            >
              <MapPin className="text-brand-500" size={18} />
              <span className="hover:underline">{c.address}</span>
            </a>

            <div className="flex items-center justify-center gap-2">
              <Phone className="text-brand-500" size={18} />
              <span>+216 24731500 | 24731700 | 28831700</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Mail className="text-brand-500" size={18} />
              <span>contact@simfrikha.com</span>
            </div>
          </div>

          <form
            className="mt-6 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder={c.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />

            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder={c.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              inputMode="email"
            />

            <textarea
              className="w-full rounded-xl border px-4 py-3"
              rows={5}
              placeholder={c.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-brand-500 px-4 py-3 text-white hover:bg-brand-900 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? c.sending : c.send}
            </button>

            {status && (
              <p
                className={`text-sm ${
                  status.type === "ok" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
