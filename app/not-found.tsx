import Link from "next/link";

// Fallback for requests that never reach a locale (the proxy normally prevents this).
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body style={{ background: "#121519", color: "#eef1f4", fontFamily: "system-ui, sans-serif", padding: "10vh 6vw" }}>
        <h1>Page introuvable</h1>
        <p>
          <Link href="/" style={{ color: "#8ab0ea" }}>
            Retour à l’accueil
          </Link>
        </p>
      </body>
    </html>
  );
}
