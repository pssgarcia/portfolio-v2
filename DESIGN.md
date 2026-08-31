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
  code:
    fontFamily: "Spline Sans Mono Variable, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.95
    letterSpacing: "normal"
  lead:
    fontFamily: "Newsreader Variable, Georgia, Times New Roman, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Newsreader Variable, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  caption:
    fontFamily: "Newsreader Variable, Georgia, Times New Roman, serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
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
accounted for, nothing is decorated. Structure is carried by type and by 1px
hairline rules, no cards, no panels, no shadows. The reading column is a
single left-anchored measure; the eye always knows where the next line begins. Where a
generic developer portfolio reaches for glow, glass, floating shapes, and a purple
accent, this one refuses all of it and lets the content, real production work, a dated
job history, ranked projects, do the talking.

The one place the ledger opens up is the **hero**, which reads as a code editor: a mono
role line (`FULL STACK DEVELOPER`), the name at display scale, and the positioning
statement set as a short block of code that types itself in under a softly pulsing
caret, over a faint, slow-drifting service-architecture graph. It is the single expressive surface;
every section below it returns to the quiet ledger.

The world is warm, not clinical: a brown-black ground (`#1B1815`), bone text, and a
single flat antique-brass accent (`#C99B57`) used only where it means something. A light
theme (`[data-theme="light"]`) swaps the same structure onto warm stone paper with a
deep drafting-ink blue accent; it is the same ledger, printed light.

This is a deliberate replacement of the project's former "dark tech minimalist" look
(near-black `#0A0A0F`, violet neon, animated gradient orbs, glassmorphism, emoji skill
chips). That look is the anti-reference; none of its devices return.

**Key Characteristics:**
- Warm-dark ground, one brass accent, zero second hue.
- Hairline rules and type, never boxes, carry structure.
- One left-anchored reading measure; section headings sit directly on that edge, no index line.
- Grotesque display + serif body (Newsreader) + mono for data and the hero code. No system fonts, no display Inter.
- Flat. No shadow anywhere except a functional blur on the scrolled nav.
- Motion: the hero types itself in once over a slow-drifting background graph, and the
  code caret keeps blinking; every section below is a single 0.6s reveal. Under
  `prefers-reduced-motion` everything stops except the caret, which keeps its plain
  blink (it is a text cursor, not decoration).

## Colors

A warm monochrome, brown-black through bone, with exactly one accent.

### Primary
- **Antique Brass** (`#C99B57`): the only accent. The hero role line, the strings and
  caret in the hero code and its one highlighted token, every link, the contact channel
  icons, the Experience rail and nodes, and the one emphasized word in the closing
  contact line. On the light theme this role is **Drafting Blue** (`#1D4664`). Outside
  the hero's one highlighted token and the contact icons' hover fill it is never a
  background fill, and never joined by a second hue.

### Neutral
- **Warm Stock** (`#1B1815`): the page ground. Brown undertone, never a cool near-black.
- **Raised Stock** (`#221E19`): the one recessed surface, the spec/footer band only.
- **Bone** (`#E7E0D2`): primary text, display type.
- **Soft Bone** (`#B4AB98`): secondary text, body paragraphs inside a section, list items.
- **Mute Bone** (`#968D79`): tertiary, mono labels, dates, indices, captions. Sits at
  ~5.3:1 on the ground; do not darken it further.
- **Rule** (`#332F28`): every hairline separator and border.
- **Rule Bold** (`#464036`): the heavier top border on the Experience section, input
  underlines, and the hero's background graph (edges, node rings).

### Semantic
- **Error** (`#D98B6A` dark / `#A3462A` light): the contact form's error message only.
  A muted terracotta, never the accent, never a saturated alert red.

### Light theme
`[data-theme="light"]` redefines the same token names: ground `#EFECE4` (warm stone),
ink `#181613`, ink-mute `#615D50`, accent `#1D4664`, rule `#D7D3C7` / `#B7B2A3`.

### Named Rules
**The One Accent Rule.** Outside the hero, the accent appears on links, the Experience
rail and nodes, the contact channel icons, and one bold word in the contact line. The
hero adds three more, all confined to it: the role line, the code strings and caret, and
one highlighted token. A second colour anywhere, or a brass fill on ordinary content,
breaks the rule.

**The Warm-Ground Rule.** The ground is always warm (brown-black or stone paper). A
cool near-black or blue-grey slate is the AI-portfolio default this design exists to refuse.

## Typography

**Display Font:** Bricolage Grotesque Variable (fallback: Helvetica Neue, Arial)
**Body Font:** Newsreader Variable (fallback: Georgia, Times New Roman)
**Label / Mono Font:** Spline Sans Mono Variable (fallback: ui-monospace, SF Mono, Menlo)

All three are self-hosted via `@fontsource`, no third-party font request.

**Character:** A characterful grotesque set heavy and tight for names and headings,
against a screen-first serif for reading, with a monospace for anything enumerated or
literal. The grotesque gives the page a builder's confidence; the serif keeps the
long-form bio comfortable; the mono makes dates, stack lists, and the hero's terminal
code read as data, not decoration.

### Hierarchy
- **Display** (Bricolage 800, `clamp(3.25rem, 2rem + 5vw, 4.75rem)`, line-height 0.96,
  tracking −0.03em): the hero name only.
- **Headline** (Bricolage 700, 2.05rem, line-height 1.08, tracking −0.018em): section
  `<h2>`. Capped at 22ch, `text-wrap: balance`.
- **Pull** (Bricolage 500, `clamp(1.5rem, 1rem + 1.8vw, 2.15rem)`): the closing contact
  line, with one bold accent word.
- **Code** (Spline Sans Mono 400, 1.0625rem, line-height 1.95): the hero positioning
  statement, set as three lines of code (a `//` comment, a `const focus = [...]` array
  with strings in accent, and a `build(...)` call with one accent-filled token) closed
  by a 2px caret in `--color-text` that hard-blinks like a real text cursor. Hero only.
- **Title** (Bricolage 700, 1.55rem): job titles. **Title-sm** (1.3rem): project titles
  and the mobile-menu links.
- **Lead** (Newsreader 400, 1.25rem, line-height 1.5): the first paragraph of About. One
  per section, full-ink.
- **Body** (Newsreader 400, 1.0625rem, line-height 1.62): running prose and list items.
  Measure ~60ch (`max-width: 42rem` on the prose block).
- **Caption** (Newsreader 400, 0.95rem): project descriptions, organisation lines, form
  status notes.
- **Label / Label-sm** (Spline Sans Mono 400/500, 0.72 / 0.68rem, uppercase, tracking
  0.08–0.20em): dates, stack lists, field labels, nav items, the hero role line.

### Named Rules
**The Mono-for-Data Rule.** Spline Sans Mono is for measured, enumerated, or literal
things: dates, labels, stack lists, the hero role line, and the hero's code block (which
is literal by design). Never body copy, never a headline, and never a "technical"
costume on decorative text elsewhere on the page.

**The One Lead Rule.** Each section has at most one lead-size paragraph; everything
after it drops to body size and soft-bone colour. The step down is the hierarchy.

## Layout

A single left-anchored reading column. The `.wrap` is `max-width: 1060px`, centred,
with `padding-inline: clamp(1.5rem, 5vw, 3.5rem)`. Content is capped tighter than the
wrap (prose 42rem); on wide screens the right margin is deliberate quiet, not an empty
grid.

Sections are separated by a 1px `--color-rule` top border and vertical padding of
`3.75rem 0 3.25rem`, more above a heading than below it. The Experience section takes a
heavier `--color-rule-bold` top border and `4.25rem` top padding (`.section--star`) to
read as the anchor of the page.

Three internal structures:
- **Hero:** a `min-height: clamp(32rem, 86vh, 46rem)` band, content vertically centred on
  the left edge (role line, name, code block). A full-bleed SVG service graph sits behind it at
  ~0.34 opacity in `--color-rule-bold`, masked on a `105deg` gradient so it fades out
  under the text and reads only to the right. No section rule above the hero.
- **Experience:** a vertical timeline, a 1px accent rail down a `1.75rem` node column,
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
a functional legibility treatment for the sticky bar, not a decorative glass effect.

The hero's background graph is the one layered element: hairline SVG edges and node
rings on the same `--color-rule-bold` as everything else, held far back by low opacity
and a fade mask. It is depth by recession and transparency, not by shadow.

### Named Rules
**The Flat Rule.** Surfaces are flat. If a component needs to feel separated, it gets a
hairline or a change in type, never a shadow, never a raised card.

## Shapes

Square. `border-radius` is `0` on every element, including the submit button and form
fields. Borders are always 1px hairlines. Form fields are a single bottom border; there
is no field box. Two exceptions, both geometry rather than rounded containers: the
**timeline node** (an 11px circle on the Experience rail) and the **hero graph nodes**
(6px SVG rings). Skill badges are square-cornered outlined chips (client-pinned; see
Components).

## Components

### Navigation
- Fixed, `4.25rem` tall, transparent at rest. After 24px of scroll it takes a
  `--color-bg-blur` background (90% ground), an 8px blur, and a `--color-rule` bottom border.
- **Reading-progress bar** seated on the nav's bottom edge: a 2px `--color-accent` line,
  `transform: scaleX(scrollY / maxScroll)`, `transform-origin: left`, ~0.12s ease-out
  (no transition under `prefers-reduced-motion`). Empty at the top, full at the page end.
- Left: **"P"** — a single mono initial at 1.05rem / 500, the clickable back-to-top mark
  (`aria-label` carries the full name). Right: four mono nav links, then two square
  `2.25rem` `--color-rule-bold` boxes (brass border + content on hover, `aria-label`
  naming the action):
  - **Language toggle** — a small drawn BR / US flag (`FlagIcon`, ~1.3rem, no emoji)
    showing the *current* language; click switches PT ⇄ EN and persists. `title` +
    `aria-label` say what the click does.
  - **Theme toggle** (client-pinned) — a stroke sun in dark mode, a stroke moon in light.
  On mobile a two-line hamburger opens a full-screen overlay carrying larger copies of
  both toggles.
- Nav links: soft-bone default, full-ink on hover, **accent with a 1px accent underline
  when active**. The active section is tracked by a deterministic scroll position check
  (`useActiveSection`), so nav, DOM, and highlight always agree.

### Hero (signature)
Reads as a code editor, left-anchored on the reading edge:
1. **Role line** — `FULL STACK DEVELOPER` in mono, uppercase, tracked, accent. Sits
   where a kicker would; the one kicker-shaped element in the design.
2. **Name** — "Pedro Soares" at Display scale (Bricolage 800).
3. **Code** — three mono lines: a `//` comment carrying the longer role phrase, a
   `const focus = [...]` array with the strings in accent, and
   `build(focus, { impact: "real_world" })` with `"real_world"` as the one brass-filled
   token, closed by a **2px `--color-text` caret** that hard-blinks (opacity 1 / 0,
   ~1.06s, no fade) like a real text cursor. The block types itself in once via an
   animated `clip-path` (~1.9s, `steps()`), then the caret takes over.

Behind it, a full-bleed SVG **service graph** (client, api, auth, router, queue, worker,
db, cache, s3, and more) in `--color-rule-bold` hairlines at ~0.34 opacity, drifting
~18px over 20s, masked so it only reads to the right of the text. Under
`prefers-reduced-motion` the type-in and drift stop and the code shows fully drawn; the
caret keeps its same blink (deliberate override of the global reduced-motion guard, for
this one element, because a text cursor is not decorative motion).

### Experience Timeline (signature, client-pinned)
Kept from the previous design at the client's request and re-skinned into this palette.
A vertical accent rail runs down a `1.75rem` node column; each role is a node dot on the
rail, a hollow brass ring for **work**, a filled brass dot for **education**, beside a
content block: date range (mono, accent), title (Bricolage 700), organisation
(soft-bone), accomplishments as a bullet list (each marker a 0.55rem × 1px accent
hairline), and a small outlined **type chip** with an emoji, `💼 Work` / `🎓 Education`.
The rail and chips are the only decorative-leaning elements in the system and are
confined to this section.

### Skill Badges (client-pinned)
Kept from the previous design at the client's request. A flat wrapped cloud of outlined
chips under the "What I work with" mark, ordered backend-first. Each chip: 1px
`--color-rule-bold` border (square corners), an emoji glyph, and the name in mono
uppercase `--t-label-sm`, soft-bone; brass border and full-ink text on hover. These
emoji and the timeline chips' are the only *emoji* in the system; drawn SVG icons appear
on the theme toggle, the language flag, the contact channel buttons, and the project
tech tags (`TechIcon`, simple-icons).

### Project Entry
Numbered mono index, Bricolage 700 title, one-line description at ~46ch, a wrapped row
of **tech tags** (mono `--t-label-sm` uppercase, each with a small coloured brand glyph
from simple-icons; tags with no brand mark get a 1px hairline dash), then mono links:
"GitHub" in accent, "Live demo" in full ink. Hairline top border on every entry.

The three lead projects (**Tayro**, **Barbearia do Davi**, **Readvice**) are
`grid-column: 1 / -1` full-width and open with a **screenshot** stacked above the text:
the live landing, cropped at source to the same ~2.17:1 ratio so every shot renders at
an identical size (`aspect-ratio: 2.17`, `object-fit: cover`, `max-width: 46rem`), in a
`0.45rem` `--color-surface` mat with a `--color-rule-bold` border (a plate in the
ledger, no shadow). Dark shots are brightness-lifted so they still read on the dark
ground.

The remaining (image-less) entries are **collapsed** behind a left-aligned mono
`+ VER MAIS` / `– VER MENOS` toggle (its own hairline-topped ledger row, the `+`/`–` in
accent); expanded, they fill the 2-up text ledger. No section subhead under the heading.

The coloured tech glyphs and the flag toggle are the only colour outside the accent;
both are functional (identifying a stack, switching a language), confined to their
components, and drawn (not emoji).

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

### Contact Channels
A horizontal row of three square `2.5rem` icon buttons (GitHub, LinkedIn, email), each a
1px accent border around an accent glyph (filled brand marks for GitHub / LinkedIn, a
drawn envelope for email). Hover fills the square with accent and flips the glyph to
`--color-on-accent`. The URL / handle rides on each button's `aria-label`.

### Footer
A single mono line, copyright + city, and a "Back to top" text button. It does not
repeat the contact channels that appear directly above it.

## Internationalisation

The site is bilingual, **PT-BR by default**, EN via the navbar flag toggle. The choice
persists (`localStorage["portfolio-language"]`) and drives `<html lang>` (`pt-BR` / `en`)
and `<title>`. Editorial copy lives as `{ en, pt }` trees in `src/data/*.js`; UI chrome
strings in `src/i18n/ui.js` with `{placeholder}` interpolation via `t()`.

Layout must survive the switch: PT runs ~15–25% longer than EN. Everything is flex/grid
with `gap` and `ch`/`rem` measures, never fixed widths on text; headings use
`text-wrap: balance`, the contact pull line `text-wrap: balance` at `22ch`. Mono rows
that join strings (the timeline date range) use flex `gap`, not source whitespace, so a
language swap can't collapse the space.

## Do's and Don'ts

### Do:
- **Do** carry structure with hairline `--color-rule` borders and the type scale.
- **Do** keep the accent to links, the Experience rail, the contact icons, one bold
  contact word, and the hero's confined uses (role line, code strings, caret, one token).
- **Do** set dates, labels, stack lists, and the hero code in Spline Sans Mono.
- **Do** give every section one lead paragraph, then drop to body size + soft-bone.
- **Do** keep the ground warm and stop all motion under `prefers-reduced-motion` (the
  hero code caret is the one allowed exception, reduced to a slow opacity fade).
- **Do** left-align every heading and column to the same edge as the hero name.

### Don't:
- **Don't** add cards, panels, filled containers, or any `box-shadow`.
- **Don't** introduce a second accent colour, or move the accent onto a content fill
  outside the hero's one highlighted token. The navbar's BR / US flag toggle is the one
  multi-colour element; it is a drawn functional control, not decoration, and nothing
  else earns colour from it.
- **Don't** round a corner, `border-radius` is `0` everywhere (the timeline node and the
  hero graph rings are geometry, not containers).
- **Don't** use a gradient as decoration, glow, or blur (allowed: the timeline rail's
  fade, the hero graph's fade mask, the functional scrolled-nav blur).
- **Don't** add a decorative floating shape. The hero service graph is the one permitted
  background layer, and it is structural (real service names) and confined to the hero.
- **Don't** use Spline Sans Mono for prose or a heading, or a system/`Inter` display face.
- **Don't** bring the hero's terminal treatment (code type, caret, background graph) into
  any other section; below the hero the ledger stays quiet.
- **Don't** revive the former dark-violet look (near-black `#0A0A0F`, neon violet, orbs,
  glassmorphism, glow shadows).

### Client-pinned exceptions
The client asked to keep three devices from the previous design; they override the rules
above **only where named** and stay confined to their components:
- **Emoji glyphs** on skill badges and the timeline `💼 / 🎓` chips. Nowhere else;
  headings and nav stay glyph-free.
- **Outlined chips** for skill badges (square corners, so not a true pill).
- **An icon** (sun/moon) for the theme toggle instead of a text label.
