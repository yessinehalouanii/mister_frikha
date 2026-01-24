import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIM Group • Industrial Manufacturing",
  description:
    "Design, mold & plastic injection — from idea to final part.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
