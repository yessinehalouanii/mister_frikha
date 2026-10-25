---
name: SIM (simfrikha.com)
description: A Sfax mold maker presented as its own technical datasheet.
colors:
  graphite: "#121519"
  steel: "#1b2026"
  steel-2: "#262c34"
  ink: "#eef1f4"
  muted: "#a3acb8"
  paper: "#eef1f4"
  paper-2: "#e1e5ea"
  slate: "#4a525c"
  blue: "#2f67ba"
  blue-press: "#24528f"
  blue-hi: "#8ab0ea"
  blue-deep: "#102a4d"
  error: "#f08a8a"
typography:
  display:
    fontFamily: "Archivo, IBM Plex Sans Arabic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.1rem + 5.4vw, 6rem)"
    fontWeight: 760
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 78"
  headline:
    fontFamily: "Archivo, IBM Plex Sans Arabic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.25rem + 2.6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 85"
  title:
    fontFamily: "Archivo, IBM Plex Sans Arabic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.7vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 85"
  lead:
    fontFamily: "Archivo, IBM Plex Sans Arabic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, IBM Plex Sans Arabic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, IBM Plex Sans Arabic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  figure:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontWeight: 500
    letterSpacing: "-0.02em"
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
  balloon: "9999px"
spacing:
  page-margin: "clamp(20px, 3.2vw, 48px)"
  grid-cell: "48px"
  gutter: "40px"
  section-y: "96px"
  section-y-lg: "128px"
  header-height: "72px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.blue-press}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "48px"
  button-light:
    backgroundColor: "#ffffff"
    textColor: "{colors.graphite}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.paper-2}"
  input-field:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  datasheet-cell:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.ink}"
    typography: "{typography.figure}"
    padding: "24px clamp(20px, 3.2vw, 48px)"
  t0-band:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    padding: "96px clamp(20px, 3.2vw, 48px)"
  paper-band:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    padding: "96px clamp(20px, 3.2vw, 48px)"
  callout-balloon:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.ink}"
    typography: "{typography.figure}"
    rounded: "{rounded.balloon}"
    size: "28px"
---

# Design System: SIM (simfrikha.com)

## Overview

**Creative North Star: "The Toolmaker's Datasheet"**

SIM speaks the way a standard-components catalogue speaks: reference codes per mold type, spec tables, numbered callouts on a photo, dimension lines around the part, figures in a monospaced face. The site is that catalogue, set on a graphite ground with steel panels, one blue accent and square, flat surfaces. Proof comes from measured photographs and figures, never from decoration.

Density is a working document's density: long pages in a 12-column grid, generous section padding, prose held to a short measure, and figures large enough to read from across a workshop. Long pages alternate graphite and pale steel "paper" bands, so the read has a dark/light rhythm while graphite stays the page ground. Motion is restrained: scroll-driven entrances, a slow mold-to-part crossfade inside one heading, a once-per-session logo draw, all removed under reduced motion.

The system is trilingual (French first, English, Arabic RTL). Every direction-sensitive rule is written with logical properties, and Arabic gets its own type behaviour rather than an imitation of the Latin display.

**Key Characteristics:**
- Graphite ground, steel panel step, steel ink; SIM blue is the only accent.
- Archivo variable width: condensed uppercase for display, condensed sentence case for section titles.
- JetBrains Mono for spec figures and dimensions only.
- Square corners, flat fills, no drop shadows; depth is tonal.
- Drawing grid and dimension lines as the datasheet signature, confined to hero and datasheet bands.
- Logical properties throughout; Arabic in IBM Plex Sans Arabic, never uppercased or condensed.

## Colors

A cold, low-chroma steel palette with one saturated industrial blue that marks what to do next.

### Primary
- **SIM Blue** (`blue`): primary buttons, the full-bleed T0 offer band, the T0 step of the process (thick top rule and label), the skip link, the form's success panel and the file-chooser hover. On paper bands it is also the text colour of action links. Matches the logo ring.
- **Pressed Blue** (`blue-press`): hover/press state of primary buttons only.
- **Signal Blue** (`blue-hi`): the on-dark tint of the accent, used where #2F67BA would be too dark to read on graphite: inline action links ("En savoir plus"), link hover in the footer and contact block, the active item in the mobile menu, the T0 emphasis line in hero leads, and the focus ring.
- **Deep Blue** (`blue-deep`): image-well fill behind the photo inside the T0 band only.

### Neutral
- **Graphite** (`graphite`): page ground, header (at 95% opacity), mobile menu, intro overlay, ink on paper bands, spec table fill.
- **Steel** (`steel`): the panel step: datasheet strip, footer, form field fill.
- **Steel 2** (`steel-2`): the third tonal step: secondary file button, error notice panel, cropped footer wordmark, scrollbar thumb.
- **Steel Ink** (`ink`): primary text on dark.
- **Muted Steel** (`muted`): secondary text, table row labels, captions, dimension lines, inactive nav.
- **Paper** (`paper`): ground of paper bands (process, parts gallery, some FAQs). Same value as ink by design: the light band is the text colour turned into a surface.
- **Paper 2** (`paper-2`): image-well fill behind photos while they load, light-button hover.
- **Slate** (`slate`): secondary text on paper bands.
- **Error Salmon** (`error`): field error stroke and error text on dark (currently written as a literal in the form, with a lighter #f5b0b0 for the form-level alert).
- **Rule lines** (CSS variables, not tokens): `--line` rgb(214 222 232 / 0.13) for hairlines and the drawing grid on dark; `--line-strong` rgb(214 222 232 / 0.28) for table heads, quiet-button and field strokes; `--line-paper` rgb(18 21 25 / 0.14) for the same on paper.

### Named Rules
**The One Blue Rule.** SIM Blue (#2F67BA) appears only on actions, the T0 offer band (and the T0 step that names it) and active/selected states. It never colours a heading, an icon or a decorative figure. Signal Blue is its on-dark reading of the same rule, not a second accent.

**The Graphite Ground Rule.** Every page starts and ends on graphite. Paper bands are interludes inside it; a page never opens on paper.

## Typography

**Display Font:** Archivo, variable width axis (with IBM Plex Sans Arabic for Arabic glyphs, then system sans)
**Body Font:** Archivo (same stack)
**Label/Mono Font:** JetBrains Mono 500, for figures only

**Character:** A grotesque that can be squeezed into an engineering-drawing title block for headlines, and relaxed to normal width for reading; a monospaced figure face that makes every number look measured.

### Hierarchy
- **Display** (760, wdth 78%, uppercase, clamp 2.75rem to 6rem, line-height 0.92, -0.02em, balanced): page H1, the T0 band title, the process heading, the footer close. Max about 22ch.
- **Headline** (700, wdth 85%, sentence case, clamp 2rem to 3.5rem, line-height 1, -0.015em): section headings (H2).
- **Title** (700, wdth 85%, clamp 1.25rem to 1.625rem, line-height 1.2): catalogue row names, process steps, mobile menu items, success message.
- **Lead** (400, clamp 1.125rem to 1.3125rem, line-height 1.55): hero and band lead sentences (38 to 52ch) and FAQ questions (at 500).
- **Body** (400, 1.0625rem, line-height 1.6; 1.8 in Arabic): running text, held to 46 to 62ch.
- **Label** (400 or 600, 0.875rem, line-height 1.45): nav links, captions, table row labels, field labels, breadcrumbs. Never uppercase, never letter-spaced.
- **Figure** (JetBrains Mono 500, tabular, -0.02em, at Title size in strips and tables): spec values, steel grades, reference codes, step numbers, callout numbers, file sizes, dimension labels. Always isolated LTR (`direction: ltr; unicode-bidi: isolate`) so numbers read correctly inside Arabic.

### Named Rules
**The Two-Tier Heading Rule.** Uppercase condensed display is reserved for the page title, the T0 band, the process heading and the footer close. Every other heading is sentence-case condensed title, so long technical headings stay readable.

**The Measured Figure Rule.** Monospace is used only for spec figures and dimensions (sizes, tonnages, grades, codes, counts). Prose, names, buttons and contact details stay in Archivo.

**The Arabic Own-Voice Rule.** In Arabic, display and title lose condensing, uppercase and tracking (`font-stretch: 100%`, `text-transform: none`, `letter-spacing: 0`, weight 700, line-height 1.2), and body line-height rises to 1.8. Arabic is set in IBM Plex Sans Arabic (400/500/700), never in a stretched Latin face.

## Layout

A 12-column grid inside a fluid page margin (clamp 20px to 48px, the `--m` variable) with no max-width container: bands run full bleed, content runs margin to margin. Common splits: home hero 6/6 (title column beside the dimensioned photo, sized so the datasheet strip stays in the first viewport; 6 columns keep the H1 on two lines), inner-page heroes a full-width title row over a 5/7 copy/photo split, section head 6 + 5 offset to column 8, catalogue rows 1 (reference code) / 4 (name and text) / 7 (mold and part photos), spec sheet 5 / 6 offset to column 7. Gutters are 40px (gap-10) at large screens, 48px (gap-12) stacked.

Vertical rhythm: sections pad 96px, 128px from 1024px (the process band 144px). Heroes pad 40/64px top and bottom, 56/96px at large screens. The header is a sticky 72px bar; the full navigation appears from 1280px, below that a text "Menu" button opens a full-height sheet under the header.

Breakpoints are Tailwind defaults (640, 768, 1024, 1280). The datasheet strip steps 2 / 3 / 6 columns; the process steps 1 / 2 / 3 / 6; the parts gallery 2 / 3 or 4 / 6.

### Named Rules
**The Logical Direction Rule.** Every directional value uses logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start`, `end`, `inset-inline`, `inset-block`, `text-start`). Arrows that imply direction mirror in RTL (`scaleX(-1)`); the floating WhatsApp button sits at the bottom end corner. Phone numbers, emails and file names are wrapped `dir="ltr"`. A physical left/right is allowed only where it is centring geometry, not reading direction.

**The Drawing Grid Rule.** The 48px drawing grid (1px lines in `--line`) appears only behind page heroes and datasheet bands (the spec sheet). It is the background of a drawing, not a texture for any surface.

## Elevation & Depth

The system is flat. There are no drop shadows anywhere; `box-shadow` is used only as an inset or 1px offset to draw strokes and rules without affecting layout. Depth is tonal: graphite, steel and steel-2 are three steps of the same cold grey, and the light paper band is the only inversion. The sticky header separates from content by tone and 95% opacity, not by a shadow.

### Named Rules
**The Flat Steel Rule.** Surfaces never lift. If something needs to stand apart, give it the next tonal step (graphite to steel to steel-2) or a 1px stroke.

## Shapes

Square corners everywhere: buttons, fields, panels, image wells, the T0 band, the floating WhatsApp button. The only circles are those native to technical drawings: the numbered callout balloons on photos (28px, graphite with a 1px white ring) and the logo's double ring. Bullets in the T0 list are 8px squares. Photos sit in fixed-ratio wells (3:2 by default, 4:5 for parts, 2:1 or square where a page needs it) with a fill colour behind them, mold shots cropped to cover, product parts contained on white.

### Named Rules
**The Hairline Rule.** 1px rules appear in tables, catalogue and list rows, the FAQ list and as form-field strokes, and as the strokes of dimension lines and the drawing grid. Process steps use heavier top rules (2px at 15% graphite, 4px SIM Blue for T0). Rules are never boxes around content.

## Components

### Buttons
Direct, square, and the same height everywhere.
- **Shape:** square corners (0px), minimum height 48px, padding 0 1.4rem, weight 600 at body size, gap 0.6rem to an icon.
- **Primary:** SIM Blue fill, white text; hover to Pressed Blue. Carries the "Demander un devis" action and an arrow that mirrors in RTL and nudges 3px forward on hover.
- **Quiet:** transparent with a 1px inset stroke in `--line-strong`; hover hardens the stroke to ink. Used for WhatsApp and phone next to the primary. On paper the stroke uses `--line-paper` and graphite.
- **Light:** white fill, graphite text, hover to Paper 2. Only on the SIM Blue T0 band, where a blue button would vanish.
- **Motion:** colour and stroke transitions 160ms ease-out; press moves the button 1px down.
- **Focus:** 2px Signal Blue outline at 3px offset (SIM Blue on paper bands).

### Inputs / Fields
- **Style:** Steel fill, ink text, square corners, 12px 16px padding, 1px inset stroke in `--line-strong`; label above in 0.875rem semibold with a "(requis)" marker or a muted "(facultatif)".
- **Hover / Focus:** stroke goes to muted on hover; focus replaces the outline with a 2px inset Signal Blue stroke.
- **Error:** 2px inset Error Salmon stroke, message below in Error Salmon at label size; first invalid field receives focus.
- **File upload:** a steel well with the same stroke, a steel-2 button that turns SIM Blue on hover, and a mono size list with a 4 MB total.

### Navigation
- **Header:** sticky 72px graphite bar at 95% opacity (the build also draws a hairline below it; that line sits outside the Hairline Rule and is recorded as drift, not as a pattern to reuse); logo mark plus "SIM" at the start, label-size links in muted (ink when current), language switcher FR / EN / عربي, primary quote button.
- **Mobile:** text "Menu"/"Fermer" toggle, full-height graphite sheet with title-size links on hairline rows, the active one in Signal Blue, then language switcher and the three contact buttons. Escape and navigation close it.
- **Breadcrumbs:** label size, muted, slash separators, current page in ink.

### Dimensioned Photo (signature)
A photo framed by dimension lines like a part on a drawing: a horizontal line 34px above and a vertical line 34px on the start side, each with end ticks in muted steel and a mono label sitting on a ground-coloured gap. Optional numbered balloons sit on the photo, keyed to a legend in the caption.

### Datasheet Strip (signature)
A full-width steel band of six figures under the home hero: each cell is a Title-size mono value above a muted label, divided by 1px inset hairlines (end and bottom edges, mirrored in RTL).

### Catalogue Row (signature)
A hairline-topped row per mold family: mono reference code in its own column (inline after the name on small screens), condensed title, short text, uses in muted, a Signal Blue "more" link, and a mold photo beside the part it makes. Photos zoom 3% over 600ms on hover.

### T0 Band
The one full-bleed SIM Blue field: uppercase display title, lead, square white bullets, light and quiet buttons, and the 180-t press photo with its tonnage as a mono figure.

### Process with Mold-to-Part Frame
A paper band whose display heading carries an inline frame (1.9em by 0.78em) that crossfades between the mold and the part it makes every 7s; under reduced motion both images sit side by side. Six steps follow with 2px top rules and mono numbers, the T0 step in SIM Blue with a 4px rule.

### Spec Table and FAQ
Tables are hairline rows, muted row labels at 42% width, mono values at Title size with units in muted. The FAQ is a list of native details elements on hairlines, questions at Lead size, a chevron that turns 180° in 200ms.

### Footer Close
A steel footer: uppercase display invitation with the quote and WhatsApp actions, contact and page lists, then the name "SIM" drawn as SVG at full width in steel-2, cropped by the page edge.

### Motion
Scroll-driven entrances (fade and rise 24px, staggered by `reveal-2` and `reveal-3`) only where `animation-timeline: view()` is supported, so content is visible without it. Standard easing for movement is cubic-bezier(0.2, 0.8, 0.2, 1). The logo intro draws the rings once per browser session in under 1.3s and can be dismissed by click. The floating WhatsApp button fades in after 480px of scroll. Every animation is disabled under `prefers-reduced-motion: reduce`.

## Do's and Don'ts

### Do:
- **Do** keep SIM Blue (#2F67BA) to actions, the T0 offer band and active states; use Signal Blue (#8AB0EA) for the same roles on graphite.
- **Do** set every number that is a measurement, grade, code or count in the mono figure style, isolated LTR.
- **Do** use uppercase condensed display only for the page title, the T0 band, the process heading and the footer close; use sentence-case condensed titles for everything else.
- **Do** write every directional rule with logical properties and mirror directional arrows in RTL.
- **Do** set Arabic in IBM Plex Sans Arabic at 100% width, no uppercase, no tracking, body line-height 1.8.
- **Do** give photos a fixed-ratio well with a fill colour, and contain product parts on white.
- **Do** separate surfaces by tonal step (graphite, steel, steel-2, paper), not by elevation.

### Don't:
- **Don't** round corners on buttons, fields, panels or images; circles are for drawing balloons and the logo only.
- **Don't** add drop shadows or glows; box-shadow is for inset strokes and hairlines only.
- **Don't** use the drawing grid outside page heroes and datasheet bands.
- **Don't** use 1px rules as boxes or decoration; they belong to tables, catalogue and list rows, the FAQ list and form fields.
- **Don't** use monospace for prose, names, buttons or contact details.
- **Don't** add uppercase letter-spaced labels or eyebrow text above headings.
- **Don't** uppercase, condense or track Arabic text.
