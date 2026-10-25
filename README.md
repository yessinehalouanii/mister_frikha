# simfrikha.com — SIM, mold maker in Sfax

Website of **SIM (Société Industrielle Mécanique)**: plastic injection and blow molds, Sfax, Tunisia.
Next.js 16 (App Router), React 19, Tailwind CSS 4, next-intl, Resend. Deployed on Vercel: **a push to `main` goes live.**

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are prerendered)
npm run lint
```

## Environment variables

Set them in Vercel → Project → Settings → Environment Variables (and in `.env.local` for local work).

| Variable | Required | What it does |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | API key from resend.com, used by the quote form (`app/api/quote/route.ts`). |
| `CONTACT_TO_EMAIL` | yes | Where quote requests are delivered, e.g. `contact@simfrikha.com`. |
| `CONTACT_FROM_EMAIL` | yes | Sender address on a domain verified in Resend, e.g. `devis@simfrikha.com`. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | no | The `content` value of the Google Search Console HTML-tag verification. Adds `<meta name="google-site-verification">`. |

Without the three Resend variables the form still validates, but sending shows a localized error that invites the visitor to call or use WhatsApp.

## Languages and URLs

| Page | fr (default, no prefix) | en | ar (RTL) |
| --- | --- | --- | --- |
| Home | `/` | `/en` | `/ar` |
| Injection molds | `/moules-injection` | `/en/injection-molds` | `/ar/injection-molds` |
| Blow molds | `/moules-soufflage` | `/en/blow-molds` | `/ar/blow-molds` |
| Design office | `/bureau-etudes` | `/en/design-office` | `/ar/design-office` |
| Machine shop | `/parc-machines` | `/en/machine-shop` | `/ar/machine-shop` |
| Projects | `/realisations` | `/en/projects` | `/ar/projects` |
| About | `/a-propos` | `/en/about` | `/ar/about` |
| Quote / contact | `/contact` | `/en/contact` | `/ar/contact` |

- Routing: `i18n/routing.ts` (localized slugs) and `proxy.ts`. `/` always serves French; there is no automatic language redirect.
- Every page has a self-referencing canonical and `hreflang` alternates for fr, en, ar and `x-default` (fr). `app/sitemap.ts` lists all 24 URLs with their alternates.

## Where things live

| What | File |
| --- | --- |
| Company facts (phone, address, figures) | `lib/site.ts` — the single source of truth |
| Page copy, per language | `content/fr.ts`, `content/en.ts`, `content/ar.ts` |
| Photos | `public/images/*.webp` and the map in `lib/images.ts` |
| SEO helpers and JSON-LD | `lib/seo.ts` |
| Quote form validation (client and server) | `lib/quote.ts` |
| Share images | `lib/og.tsx`; the Arabic card is pre-rendered from `scripts/og-ar.html` into `assets/og/og-ar.png` |
| Logo | `public/logo-sim.svg`, `components/Logo.tsx`, `app/icon.svg`; original in `assets/brand/` |

## Quote form

- Fields are validated with zod on both the client and the server, and all user input is HTML-escaped in the email.
- A honeypot field catches bots, and there's a rate limit of 5 requests per IP per 10 minutes, per server instance.
- Attachments: STEP, IGES, STL, DWG, DXF, PDF or images, **4 MB in total**. Vercel functions reject request bodies over 4.5 MB, so larger files go by WhatsApp or email; the form says so.

## Adding photos

1. Export a WebP no wider than its display size (2560 px for a full-width hero, about 1536 px otherwise).
2. Give it a descriptive French filename (e.g. `moule-injection-tiroirs-sim-sfax.webp`) and put it in `public/images/`.
3. Register it in `lib/images.ts` with its width and height.
4. Write alt text in each language file.
