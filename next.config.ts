import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  // Inline the (small) stylesheet so it does not block the first paint.
  experimental: { inlineCss: true },
  // Share images read their fonts from disk at request time.
  outputFileTracingIncludes: {
    "/[locale]/opengraph-image": ["./assets/fonts/**", "./assets/og/**"],
  },
};

export default createNextIntlPlugin("./i18n/request.ts")(nextConfig);
