# CLAUDE.md

Personal portfolio site for **Pedro Soares**, a software engineer with a backend and
systems focus, based in Belo Horizonte. It's also an academic deliverable for PUC Minas
software-engineering sprints (the rubric governs when it conflicts with recruiter
appeal). Single-page, content-driven. Bilingual PT/EN (PT-BR default) with a persisted
language toggle.

Product truth lives in **`PRODUCT.md`**. The visual system lives in **`DESIGN.md`** plus
`.impeccable/design.json`; treat both as authoritative and read them before changing UI.
This file is the fast orientation.

## Stack & commands

- **Vue 3** (`<script setup>`) · **Vite 6** · **Vue Router 4** · **Tailwind CSS 3** (utilities are rare; most styling is scoped CSS on design tokens)
- **simple-icons** (data package, tree-shaken) for the coloured project tech glyphs in `TechIcon.vue`
- Fonts self-hosted via `@fontsource` (Bricolage Grotesque, Newsreader, Spline Sans Mono), imported in `src/main.js`, no third-party font request
- `@` path alias resolves to `src/`
- Deploy: Netlify (`netlify.toml`: build `npm run build`, publish `dist`, SPA redirect, Node 22). Contact form uses Netlify Forms (hidden static form in `index.html` plus a JS POST).

```bash
npm install
npm run dev       # Vite dev server, http://localhost:5173
npm run build     # -> dist/
npm run preview
```

There is no test suite and no linter configured.

## Layout of the code

```
index.html                     entry + Netlify form + the direction contract (HTML comment in <body>)
src/
  main.js                      app bootstrap + @fontsource imports + global CSS
  App.vue                      TheNavbar + <router-view> + TheFooter
  router/index.js              single route "/" -> HomeView; smooth-scroll behavior
  views/HomeView.vue           composes the 4 sections in order: Hero, About, Experience, Projects, Contact
  assets/styles/main.css       ALL design tokens (:root + [data-theme="light"]) + shared component classes
  components/
    HeroSection / AboutSection / ExperienceSection / ProjectsSection / ContactSection
    TimelineItem               one Experience entry (rail node + content + Work/Education chip)
    SkillBadge                 one emoji + name chip
    FlagIcon                   drawn BR / US flag SVG for the language toggle
    TechIcon                   coloured brand glyph + label for a project tech tag (simple-icons)
    TheNavbar / TheFooter
  i18n/
    ui.js                      { en, pt } dictionary of UI chrome strings (nav, headings, form, errors); {placeholders} filled by t()
  composables/
    useColorMode               theme state, persisted to localStorage "portfolio-theme"
    useLanguage                lang state (default "pt"), persisted to localStorage "portfolio-language"; sets <html lang> + <title>; exposes t(key, vars)
    useContent                 computed { profile, experience, projects, skills } for the active language
    useActiveSection            scroll-position scroll-spy (deterministic; nav and DOM order must agree)
    useIntersectionObserver     one 0.6s reveal per section; inert under prefers-reduced-motion
  data/
    profile.js                 profileContent { en, pt }: name, hero (role/comment/focus), About prose, contact channels
    experience.js              experienceContent { en, pt }: roles + education (dateFrom/dateTo/title/org/type/points[])
    projects.js                projectsContent { en, pt }: shared title/techs/urls, translated description; Tayro + Barbearia are lead entries with an `image` (landing screenshot shown at natural ratio)
    skills.js                  skillsContent { en, pt }: { name, icon }, ordered backend-first
```

**Content is data-driven and bilingual. Edit `src/data/*.js` (both `en` and `pt` trees),
not component templates, to change editorial copy; edit `src/i18n/ui.js` for UI chrome
strings.** `src/data/*` was last synced to Pedro's CV on 2026-08-30.

## Design system, the short version (DESIGN.md is authoritative)

"The Engineer's Ledger": a warm-dark editorial world. Two committed looks off one token
set, flipped by the navbar's sun/moon toggle. The navbar also carries a BR/US flag
language toggle.

- **Direction C (dark, default):** ground `#1B1815`, bone text, one flat brass accent `#C99B57`.
- **Direction A (light):** warm paper `#EFECE4`, ink `#181613`, drafting-blue accent `#1D4664`.

Rules that matter:
- Structure is carried by **1px `--color-rule` hairlines** and the **type scale**, never by cards, panels, shadows, or gradients (the Experience rail's fade and the hero graph's fade mask are the exceptions).
- **The accent** appears only on: links, one bold word in the contact line, the Experience rail/nodes, the contact icons, and the hero's confined uses (role line, code strings, caret, one token). Never a content fill elsewhere, never a second hue. The flag toggle is the one multi-colour element (drawn SVG, not emoji).
- The **hero** is a code-editor scene (mono role line, name, self-typing code block, pulsing caret) over a faint drifting service graph. It is the one expressive surface; every section below stays quiet ledger.
- **`border-radius: 0`** everywhere (the timeline node circle is geometry).
- **Spline Sans Mono** is for data and the hero code: dates, labels, stack lists, the hero role line + code block. Never prose or `<h*>` headings. Never `Inter` or a system display face.
- Body font is **Newsreader** (serif). Display is **Bricolage Grotesque**.
- All font sizes come from `--t-*` tokens in `main.css`; don't hard-code a literal `font-size`.
- No em-dashes in copy, per the client. Use commas, colons, parentheses, or separate sentences.
- Respect `prefers-reduced-motion`; keep contrast at or above 4.5:1 in both themes.

**Client-pinned exceptions** (kept from the old design, confined to their components):
emoji glyphs on `SkillBadge` and the `💼/🎓` timeline chips, and the sun/moon icon theme
toggle. Nowhere else does a glyph icon appear.

The former look (near-black `#0A0A0F`, neon violet, gradient orbs, glassmorphism, glow
shadows) is the **anti-reference**. Do not revive any of it.

## Impeccable

This repo is set up with the `impeccable` design skill (`.claude/skills/impeccable`).
A PostToolUse/Stop hook runs the design detector after UI edits; findings surface as
system reminders. Triage them (fix real ones, `hook-admin.mjs ignore-value` for
sanctioned exceptions). `.impeccable/config.json` holds `buildPath: "comp"` and the
detector ignore list (the decision-comp fixture at `.impeccable/mocks/decision/` is
excluded). `.impeccable/review/` and `.impeccable/critique/` hold prior-pass artifacts.

## Current state (2026-08-30)

- Base branch is **`main`** (renamed from `master`). It still holds the **old
  dark-violet** portfolio; the redesign is **not merged**.
- All current work is on **`redesign-editorial-dark`**: the Direction C rebuild,
  finish-review fixes, DESIGN.md, the CV content sync, the client-pinned icons, the
  em-dash cleanup, the Live-Terminal hero rework, and the harden pass. `93484f8` is the
  pre-redesign baseline.
- **Harden pass done:** full PT/EN i18n (PT-BR default) with a persisted BR/US flag
  toggle in the navbar, `<html lang>` + `<title>` bound to the active language, and
  inline contact-form validation (blur + submit, translated error messages). All three
  were rubric requirements.
- `.impeccable/design.json` (the DESIGN.md sidecar) is behind DESIGN.md; run
  `/impeccable document` to reconcile it.
