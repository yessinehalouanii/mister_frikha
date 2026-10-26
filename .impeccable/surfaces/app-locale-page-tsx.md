---
version: 1
slug: "app-locale-page-tsx"
primary_target: "app/[locale]/page.tsx"
related_targets: []
---

# Home & marketing pages — simfrikha.com

Scope: all public pages (home, service pages, machines, projects, about, contact) in fr/en/ar. Visitor mode: Persuade.
Audience: plastics plants and brand owners in Tunisia, equal weight. Job: find a capable mold maker and request a quote. Action: "Demander un devis" (form) or WhatsApp.
Proof on hand: the facts in PRODUCT.md only; 18 retouched real photos in public/images; "100+ clients" with no names.

## Direction contract

THESIS: SIM is presented as its own technical datasheet: a standard-components-catalogue grammar (reference codes per mold type, spec tables, numbered callouts on drawings, dimension lines) applied to a toolmaker. It refuses the category default of a stock factory-photo hero over three icon cards.

OWN-WORLD: Graphite ground (#121519) with a steel panel step (#1B2026), steel ink (#EEF1F4), and SIM blue (#2F67BA) as the one accent, on actions and the T0 offer. Fine 48px drawing grid only in the hero and the datasheet bands. Dimension lines in muted steel. Archivo (semi-condensed for display, uppercase headlines), JetBrains Mono for spec figures only, IBM Plex Sans Arabic for ar. Square corners and flat fills, no shadows.

STORY: The visitor sees the company name "Société Industrielle Mécanique" over "Fabricant de moules … à Sfax", believes it from the measured photo and the figures, learns the T0 trial is free, then follows the process (plan → CAO → usinage → montage/polissage → essai T0 → livraison) to a quote.

FIRST VIEWPORT: Left 5/12: two- or three-line uppercase H1, lead sentence, T0 line in blue, primary button plus WhatsApp. Right 7/12: the unscrewing-mold photo framed by max-size dimension lines. Bottom: a full-width datasheet strip of six mono figures.

FORM: assigned candidate 5 of 7 (standard-components catalogue), seed f615cbcd. Raise from Taste's "sentence-as-layout" (the user chose "A with B's frame"): the mold → part inline frame was the signature of the process section; the owner later asked for it to be removed (2026-10-26), so the heading is plain type.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Cited adaptations (after the finish review)

- Owner request (2026-10-26): home H1 is the company name "Société Industrielle Mécanique" (three lines in fr), the keyword moves to the lead and the <title>.

- Home first viewport is a 6/12 + 6/12 split (not 5/12): at 5 columns the H1 wrapped to three lines; 6 keeps it on two (Taste house rule, a builder decision) while the photo, its callouts and the six-figure strip stay inside 1440x900.

- Pending the user's confirmation (asked in the handover): paper bands (#EEF1F4 ground, graphite ink) on the process, parts gallery and some FAQ sections: taken from the Taste sentence-as-layout sheet the user merged in ("A, with B's frame"); they give the long pages a light/dark rhythm. Graphite stays the page ground.
- Two-tier headings: uppercase condensed display for the page title, the T0 band and the footer close; sentence-case condensed titles for section headings, so long technical headings stay readable.
- Pending the user's confirmation: footer close with the name cropped at full width: the Taste footer blueprint ("invitation over a cropped name"), drawn as SVG.
- Numbered callouts with a keyed legend on the home hero photo (motor, chain drive, cooling circuit, plates).
