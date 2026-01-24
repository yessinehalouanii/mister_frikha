"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactMap() {
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
        const msg =
          json?.error?.message ||
          json?.error ||
          "Failed to send message. Please try again.";
        setStatus({ type: "err", msg });
        return;
      }

      setStatus({ type: "ok", msg: "Message sent successfully!" });
      setName("");
      setEmail("");
      setMessage("");
    } catch (e: any) {
      setStatus({ type: "err", msg: e?.message || "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-3xl font-extrabold">Contact</h2>
      <p className="mt-2 text-steel-500 max-w-2xl">
        Send a message or find us on the map.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow">
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="text-brand-500" size={18} />
              <span>Gremda Km 10, Sfax, Tunisia</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-brand-500" size={18} />
              <span>+216 24731700 | 28731800 | 24731500</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-brand-500" size={18} />
              <span>sim.ziedfrikha@gmail.com</span>
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
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />

            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              inputMode="email"
            />

            <textarea
              className="w-full rounded-xl border px-4 py-3"
              rows={5}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-brand-500 px-4 py-3 text-white hover:bg-brand-900 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send"}
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
            src="https://www.google.com/maps?q=Gremda%20Km%2010%20Sfax%20Tunisia&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
