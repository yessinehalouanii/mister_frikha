# simfrikha.com — SIM, mold maker in Sfax

Website of **SIM (Société Industrielle Mécanique)**: plastic injection and blow molds, Sfax, Tunisia.
Next.js 16 (App Router), React 19, Tailwind CSS 4, next-intl, FormSubmit for the quote form. Deployed on Vercel: **a push to `main` goes live.**

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are prerendered)
npm run lint
```

## Environment variables

| Variable | Required | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | no | The `content` value of the Google Search Console HTML-tag verification. Adds `<meta name="google-site-verification">`. |

The quote form needs no keys: see "Quote form" below.

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
| Quote form validation and the FormSubmit address | `lib/quote.ts`, `lib/site.ts` |
| Share images | `lib/og.tsx`; the Arabic card is pre-rendered from `scripts/og-ar.html` into `assets/og/og-ar.png` |
| Logo | `public/logo-sim.svg`, `components/Logo.tsx`, `app/icon.svg`; original in `assets/brand/` |

## Quote form

- Requests are sent from the browser to [FormSubmit](https://formsubmit.co), which emails them to **contact@simfrikha.com** (the address is `site.formEndpoint` in `lib/site.ts`).
- **One-time activation:** the first submission makes FormSubmit send an "Activate form" email to contact@simfrikha.com. Click the link once. Until then, submissions are not delivered.
- Validation runs with zod before anything is sent (`lib/quote.ts`), with localized errors in fr/en/ar. FormSubmit's honeypot (`_honey`) and spam filter handle bots, and replying to the email answers the visitor (`_replyto`).
- Attachments: STEP, IGES, STL, DWG, DXF, PDF or images, **4 MB in total**. The form points visitors to WhatsApp or email for larger files.

## Adding photos

1. Export a WebP no wider than its display size (2560 px for a full-width hero, about 1536 px otherwise).
2. Give it a descriptive French filename (e.g. `moule-injection-tiroirs-sim-sfax.webp`) and put it in `public/images/`.
3. Register it in `lib/images.ts` with its width and height.
4. Write alt text in each language file.
