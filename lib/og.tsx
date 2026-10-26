import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { isLocale } from "@/i18n/routing";
import { getDict } from "@/content";
import { SIM_LETTERS } from "./logo-paths";

export const ogSize = { width: 1200, height: 630 };

const asset = (...parts: string[]) => readFile(join(process.cwd(), "assets", ...parts));

const mark = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 748 748"><circle cx="374" cy="374" r="370" fill="#fff"/><circle cx="374" cy="374" r="362.5" fill="none" stroke="#475EA4" stroke-width="8"/><circle cx="374" cy="374" r="315" fill="none" stroke="#2F67BA" stroke-width="42"/><path d="M174 200.1A265 265 0 0 1 574 200.1M174 547.9A265 265 0 0 0 574 547.9" fill="none" stroke="#475EA4" stroke-width="15"/><path d="${SIM_LETTERS}" fill="#2F67BA"/></svg>`,
)}`;

/** Branded share image: graphite drawing grid, the mark, the page's promise, the datasheet figures. */
export async function renderOg(rawLocale: string) {
  const locale = isLocale(rawLocale) ? rawLocale : "fr";

  // next/og cannot shape and order Arabic text, so the Arabic card is pre-rendered
  // in a browser from scripts/og-ar.html.
  if (locale === "ar") {
    return new Response(new Uint8Array(await asset("og", "og-ar.png")), {
      headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" },
    });
  }

  const d = getDict(locale);
  const [condensed, medium] = await Promise.all([
    asset("fonts", "Archivo-Condensed-ExtraBold.woff"),
    asset("fonts", "Archivo-Medium.woff"),
  ]);
  const figures = d.strip.filter((_, i) => [0, 1, 3].includes(i));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#121519",
          backgroundImage:
            "linear-gradient(rgba(214,222,232,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(214,222,232,0.10) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#EEF1F4",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={84} height={84} alt="" />
          <div style={{ fontSize: 40, fontFamily: "ArchivoCondensed" }}>SIM</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "ArchivoCondensed",
              fontSize: 88,
              lineHeight: 0.92,
              textTransform: "uppercase",
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            {d.home.h1}
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#8AB0EA" }}>{d.home.t0Strong}</div>
        </div>
        <div style={{ display: "flex", gap: 56 }}>
          {figures.map((f) => (
            <div key={f.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: "ArchivoCondensed", fontSize: 44 }}>{f.value}</div>
              <div style={{ fontSize: 22, color: "#A3ACB8" }}>{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "ArchivoCondensed", data: condensed, weight: 800 },
        { name: "Archivo", data: medium, weight: 500 },
      ],
    },
  );
}
