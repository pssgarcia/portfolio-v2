---
name: Pedro Soares Portfolio
description: A backend engineer's portfolio set as a warm-dark editorial ledger.
colors:
  ground: "#1b1815"
  surface: "#221e19"
  rule: "#332f28"
  rule-bold: "#464036"
  ink: "#e7e0d2"
  ink-soft: "#b4ab98"
  ink-mute: "#968d79"
  accent: "#c99b57"
  error: "#d98b6a"
  ground-light: "#efece4"
  ink-light: "#181613"
  ink-mute-light: "#615d50"
  accent-light: "#1d4664"
  error-light: "#a3462a"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 2rem + 5vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "2.05rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  pull:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1rem + 1.8vw, 2.15rem)"
    fontWeight: 500
    lineHeight: 1.24
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.55rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title-sm:
    fontFamily: "Bricolage Grotesque Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  statement:
    fontFamily: "Spectral, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.3rem, 1.05rem + 0.9vw, 1.65rem)"
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: "normal"
  lead:
    fontFamily: "Spectral, Georgia, Times New Roman, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Spectral, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  caption:
    fontFamily: "Spectral, Georgia, Times New Roman, serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  numeral:
    fontFamily: "Spline Sans Mono Variable, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.98rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.05em"
  label:
    fontFamily: "Spline Sans Mono Variable, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.12em"
  label-sm:
    fontFamily: "Spline Sans Mono Variable, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.12em"
rounded:
  none: "0"
spacing:
  section-y: "3.75rem"
  section-y-star: "4.25rem"
  gutter: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.4rem"
  link:
    textColor: "{colors.accent}"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0"
  nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink-mute}"
    typography: "{typography.label}"
---

# Design System: Pedro Soares Portfolio

## Overview

**Creative North Star: "The Engineer's Ledger"**

The site is set like a well-made technical ledger printed on dark stock: everything is
accounted for, nothing is decorated. Structure is carried entirely by type and by 1px
hairline rules — no cards, no panels, no shadows, no gradients. The reading column is a
single left-anchored measure; the eye always knows where the next line begins. Where a
generic developer portfolio reaches for glow, glass, floating shapes, and a purple
accent, this one refuses all of it and lets the content — real production work, a dated
job history, ranked projects — do the talking.

The world is warm, not clinical: a brown-black ground (`#1B1815`), bone text, and a
single flat antique-brass accent (`#C99B57`) used only where it means something. A light
theme (`[data-theme="light"]`) swaps the same structure onto warm stone paper with a
deep drafting-ink blue accent; it is the same ledger, printed light.

This is a deliberate replacement of the project's former "dark tech minimalist" look
(near-black `#0A0A0F`, violet neon, animated gradient orbs, glassmorphism, emoji skill
chips). That look is the anti-reference; none of its devices return.

**Key Characteristics:**
- Warm-dark ground, one brass accent, zero second hue.
- Hairline rules and type — never boxes — carry structure.
- One left-anchored reading measure; running section index aligned to the page edge.
- Grotesque display + serif body + mono for data. No system fonts, no display Inter.
- Flat. No shadow anywhere except a functional blur on the scrolled nav.
- Motion is a single 0.6s reveal, disabled entirely under `prefers-reduced-motion`.

## Colors

A warm monochrome — brown-black through bone — with exactly one accent.

### Primary
- **Antique Brass** (`#C99B57`): the only accent. Section numerals (`01`–`04`), the hero
  kicker, every link, and the one emphasized word in the closing line. On the light
  theme this role is **Drafting Blue** (`#1D4664`). It is never a background fill on
  content and never joined by a second hue.

### Neutral
- **Warm Stock** (`#1B1815`): the page ground. Brown undertone, never a cool near-black.
- **Raised Stock** (`#221E19`): the one recessed surface — the spec/footer band only.
- **Bone** (`#E7E0D2`): primary text, display type.
- **Soft Bone** (`#B4AB98`): secondary text — body paragraphs inside a section, list items.
- **Mute Bone** (`#968D79`): tertiary — mono labels, dates, indices, captions. Sits at
  ~5.3:1 on the ground; do not darken it further.
- **Rule** (`#332F28`): every hairline separator and border.
- **Rule Bold** (`#464036`): the heavier top border on the Experience section and input
  underlines.

### Semantic
- **Error** (`#D98B6A` dark / `#A3462A` light): the contact form's error message only.
  A muted terracotta — never the accent, never a saturated alert red.

### Light theme
`[data-theme="light"]` redefines the same token names: ground `#EFECE4` (warm stone),
ink `#181613`, ink-mute `#615D50`, accent `#1D4664`, rule `#D7D3C7` / `#B7B2A3`.

### Named Rules
**The One Accent Rule.** The accent appears in four places only: section numerals, the
hero kicker, links, and one bold word in the contact line. If a fifth use appears, or a
second colour, the rule is broken.

**The Warm-Ground Rule.** The ground is always warm (brown-black or stone paper). A
cool near-black or blue-grey slate is the AI-portfolio default this design exists to refuse.

## Typography

**Display Font:** Bricolage Grotesque Variable (fallback: Helvetica Neue, Arial)
**Body Font:** Spectral (fallback: Georgia, Times New Roman)
**Label / Mono Font:** Spline Sans Mono Variable (fallback: ui-monospace, SF Mono, Menlo)

All three are self-hosted via `@fontsource` — no third-party font request.

**Character:** A characterful grotesque set heavy and tight for names and headings,
against a screen-first serif for reading, with a monospace reserved for anything
enumerated. The grotesque gives the page a builder's confidence; the serif keeps the
long-form bio comfortable; the mono makes dates and indices read as data, not decoration.

### Hierarchy
- **Display** (Bricolage 800, `clamp(3.25rem, 2rem + 5vw, 4.75rem)`, line-height 0.96,
  tracking −0.03em): the hero name only.
- **Headline** (Bricolage 700, 2.05rem, line-height 1.08, tracking −0.018em): section
  `<h2>`. Capped at 22ch, `text-wrap: balance`.
- **Pull** (Bricolage 500, `clamp(1.5rem, 1rem + 1.8vw, 2.15rem)`): the closing contact
  line, with one bold accent word.
- **Statement** (Spectral 400, `clamp(1.3rem, 1.05rem + 0.9vw, 1.65rem)`): the hero
  positioning line, with the closing phrase in accent italic.
- **Title** (Bricolage 700, 1.55rem): job titles. **Title-sm** (1.3rem): project titles
  and the mobile-menu links.
- **Lead** (Spectral 400, 1.25rem, line-height 1.5): the first paragraph of About. One
  per section, full-ink.
- **Body** (Spectral 400, 1.0625rem, line-height 1.62): running prose and list items.
  Measure ~60ch (`max-width: 42rem` on the prose block).
- **Caption** (Spectral 400, 0.95rem): project descriptions, organisation lines, form
  status notes.
- **Numeral** (Spline Sans Mono 400, 0.98rem, tracking 0.05em): the accent section index
  digits.
- **Label / Label-sm** (Spline Sans Mono 400/500, 0.72 / 0.68rem, uppercase, tracking
  0.08–0.20em): dates, stack lists, field labels, nav items, meta rows, kicker.

### Named Rules
**The Mono-for-Data Rule.** Spline Sans Mono is for measured or enumerated things —
dates, indices, labels, stack lists. Never body copy, never a headline, never a
"technical" costume on decorative text.

**The One Lead Rule.** Each section has at most one lead-size paragraph; everything
after it drops to body size and soft-bone colour. The step down is the hierarchy.

## Layout

A single left-anchored reading column. The `.wrap` is `max-width: 1060px`, centred,
with `padding-inline: clamp(1.5rem, 5vw, 3.5rem)`. Content is capped tighter than the
wrap (prose 42rem); on wide screens the right margin is deliberate quiet, not an empty
grid.

Sections are separated by a 1px `--color-rule` top border and vertical padding of
`3.75rem 0 3.25rem` — more above a heading than below it. The Experience section takes a
heavier `--color-rule-bold` top border and `4.25rem` top padding (`.section--star`) to
read as the anchor of the page.

Two internal structures:
- **Experience:** a vertical timeline — a 1px accent rail down a `1.75rem` node column,
  a node dot per entry, and the entry content beside it. Client-pinned: the "journey
  with icons" is kept from the previous design, re-skinned into this palette.
- **Projects:** two equal columns (`repeat(2, 1fr)`, `gap: 0 3.25rem`), each row a
  numbered entry with a hairline top border.

**Responsive:** projects collapse to one column below 900px. Below 720px every internal
grid collapses to a single column, the date column stacks above its entry, and the nav
condenses to a hamburger overlay. `--nav-height` is `4.25rem`.

## Elevation & Depth

Flat. There are no shadows anywhere in the system. Depth is conveyed by hairline rules,
by the type hierarchy, and by the single recessed `--color-surface` band at the foot of
the page. The only `backdrop-filter` is an 8px blur on the navigation *after* scroll, as
a functional legibility treatment for the sticky bar — not a decorative glass effect.

### Named Rules
**The Flat Rule.** Surfaces are flat. If a component needs to feel separated, it gets a
hairline or a change in type — never a shadow, never a raised card.

## Shapes

Square. `border-radius` is `0` on every element, including the submit button and form
fields. Borders are always 1px hairlines. Form fields are a single bottom border; there
is no field box. The one exception is the **timeline node**, a 11px circle on the
Experience rail — geometry, not a rounded container. Skill badges are square-cornered
outlined chips (client-pinned; see Components).

## Components

### Navigation
- Fixed, `4.25rem` tall, transparent at rest. After 24px of scroll it takes a
  `--color-bg-blur` background (90% ground), an 8px blur, and a `--color-rule` bottom border.
- Left: "PEDRO SOARES" as a mono wordmark (no monogram). Right: four mono nav links,
  an **icon theme toggle** (client-pinned) — a stroke sun in dark mode, a stroke moon in
  light, in a square `--color-rule-bold` box, brass on hover, with an `aria-label` naming
  the action — and on mobile a two-line hamburger opening a full-screen overlay (which
  carries a larger copy of the same icon toggle).
- Nav links: mute-bone default, bone on hover, **accent with a 1px accent underline when
  active**. The active section is tracked by a deterministic scroll position check
  (`useActiveSection`), so nav, DOM, and highlight always agree.

### Section Mark (signature)
A mono line above every section heading: an accent numeral (`01`) followed by an
uppercase label. Aligned to the same left edge as the hero name and the body column.
The four numbers correspond to the four fixed content areas — this is the only place
numbering is used.

### Experience Timeline (signature, client-pinned)
Kept from the previous design at the client's request and re-skinned into this palette.
A vertical accent rail runs down a `1.75rem` node column; each role is a node dot on the
rail — a hollow brass ring for **work**, a filled brass dot for **education** — beside a
content block: date range (mono, accent), title (Bricolage 700), organisation
(soft-bone), accomplishments as a bullet list (each marker a 0.55rem × 1px accent
hairline), and a small outlined **type chip** with an emoji — `💼 Work` / `🎓 Education`.
The rail and chips are the only decorative-leaning elements in the system and are
confined to this section.

### Skill Badges (client-pinned)
Kept from the previous design at the client's request. A flat wrapped cloud of outlined
chips under the "What I work with" mark, ordered backend-first. Each chip: 1px
`--color-rule-bold` border (square corners), an emoji glyph, and the name in mono
uppercase `--t-label-sm`, soft-bone; brass border and full-ink text on hover. The emoji
are the only glyph icons in the system outside the timeline chips.

### Project Entry
Numbered mono index, Bricolage 700 title, one-line description at ~40ch, mono stack
list (` · ` separated), then mono links: "GitHub" in accent, "Live demo" in full ink.
Hairline top border on every entry.

### Inputs / Fields
- **Style:** transparent background, no box, a single 1px `--color-rule-bold` bottom
  border, mono uppercase label above.
- **Focus:** the bottom border shifts to accent. No glow, no ring beyond the global
  `:focus-visible` outline.

### Buttons
- **Shape:** square (0 radius).
- **Primary (form submit):** flat `--color-accent` fill, `--color-on-accent` text, mono
  uppercase, `0.7rem 1.4rem` padding. Hover drops opacity to 0.88. Disabled at 0.5.
- **Icon toggle (theme):** square `2.25rem` box (`2.75rem` in the mobile overlay), 1px
  `--color-rule-bold` border, a ~17px stroke icon, brass icon + border on hover.
- **Text button (back-to-top):** mono, borderless, colour shift on hover.

### Footer
A single mono line — copyright + city — and a "Back to top" text button. It does not
repeat the contact channels that appear directly above it.

## Do's and Don'ts

### Do:
- **Do** carry structure with hairline `--color-rule` borders and the type scale.
- **Do** keep the accent to section numerals, the kicker, links, and one bold word.
- **Do** set dates, indices, labels, and stack lists in Spline Sans Mono.
- **Do** give every section one lead paragraph, then drop to body size + soft-bone.
- **Do** keep the ground warm and disable reveal motion under `prefers-reduced-motion`.
- **Do** left-align every heading and column to the same edge as the hero name.

### Don't:
- **Don't** add cards, panels, filled containers, or any `box-shadow`.
- **Don't** introduce a second accent colour or move the accent onto a content fill.
- **Don't** round a corner — `border-radius` is `0` everywhere (the timeline node's
  circle is geometry, not a container).
- **Don't** use a gradient (the timeline rail's fade is the one exception), glow, blur
  (except the functional scrolled-nav blur), or a floating decorative shape.
- **Don't** use Spline Sans Mono for prose or a heading, or a system/`Inter` display face.
- **Don't** add a numbered marker to anything that isn't a fixed, ordered set.
- **Don't** revive the former dark-violet look (near-black `#0A0A0F`, neon violet, orbs,
  glassmorphism, glow shadows).

### Client-pinned exceptions
The client asked to keep three devices from the previous design; they override the rules
above **only where named** and stay confined to their components:
- **Emoji glyphs** on skill badges and the timeline `💼 / 🎓` chips. Nowhere else —
  headings, nav, and section marks stay glyph-free.
- **Outlined chips** for skill badges (square corners, so not a true pill).
- **An icon** (sun/moon) for the theme toggle instead of a text label.
