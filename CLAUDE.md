# CLAUDE.md

Personal portfolio site for **Pedro Soares** — a software engineer with a backend and
systems focus, based in Belo Horizonte. It's also an academic deliverable for PUC Minas
software-engineering sprints (the rubric governs when it conflicts with recruiter
appeal). Single-page, content-driven, bilingual PT/EN is a requirement (not yet built).

Product truth lives in **`PRODUCT.md`**. The visual system lives in **`DESIGN.md`** +
`.impeccable/design.json` — treat both as authoritative and read them before changing
UI. This file is the fast orientation.

## Stack & commands

- **Vue 3** (`<script setup>`) · **Vite 6** · **Vue Router 4** · **Tailwind CSS 3** (utilities are rare — most styling is scoped CSS on design tokens)
- Fonts self-hosted via `@fontsource` (Bricolage Grotesque, Spectral, Spline Sans Mono) — imported in `src/main.js`, no third-party font request
- `@` path alias → `src/`
- Deploy: Netlify (`netlify.toml` — build `npm run build`, publish `dist`, SPA redirect, Node 22). Contact form uses Netlify Forms (hidden static form in `index.html` + JS POST).

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
    SectionMark                the "01 · ABOUT" running index above each heading
    TimelineItem               one Experience entry (rail node + content + Work/Education chip)
    SkillBadge                 one emoji + name chip
    TheNavbar / TheFooter
  composables/
    useColorMode               theme state, persisted to localStorage "portfolio-theme"
    useActiveSection            scroll-position scroll-spy (deterministic — nav/DOM order must agree)
    useIntersectionObserver     one 0.6s reveal per section; inert under prefers-reduced-motion
  data/
    profile.js                 name, kicker, hero meta, About prose, contact channels
    experience.js              roles + education (dateFrom/dateTo/title/org/type/points[])
    projects.js                projects (title/description/techs/github/demo, optional repoPrivate)
    skills.js                  flat skill array { name, icon } ordered backend-first
```

**Content is data-driven — edit `src/data/*.js`, not component templates, to change copy.**
`src/data/*` was last synced to Pedro's CV on 2026-08-30.

## Design system — the short version (DESIGN.md is authoritative)

"The Engineer's Ledger" — a warm-dark editorial world. Two committed looks off one token
set, flipped by the navbar's sun/moon toggle:

- **Direction C (dark, default):** ground `#1B1815`, bone text, one flat brass accent `#C99B57`.
- **Direction A (light):** warm paper `#EFECE4`, ink `#181613`, drafting-blue accent `#1D4664`.

Rules that matter:
- Structure is carried by **1px `--color-rule` hairlines** and the **type scale** — never cards, panels, shadows, or gradients (the Experience rail's fade is the one gradient).
- **The accent** appears only on: section numerals, the hero kicker, links, one bold word in the contact line, and the Experience rail/nodes/ticks. Never a content fill, never a second hue.
- **`border-radius: 0`** everywhere (the timeline node circle is geometry).
- **Spline Sans Mono** is for data only — dates, indices, labels, stack lists. Never prose or headings. Never `Inter` / a system display face.
- All font sizes come from `--t-*` tokens in `main.css`; don't hard-code a literal `font-size`.
- Respect `prefers-reduced-motion`; keep contrast ≥ 4.5:1 in both themes.

**Client-pinned exceptions** (kept from the old design, confined to their components):
emoji glyphs on `SkillBadge` and the `💼/🎓` timeline chips; the sun/moon icon theme
toggle. Nowhere else does a glyph icon appear.

The former look — near-black `#0A0A0F`, neon violet, gradient orbs, glassmorphism, glow
shadows — is the **anti-reference**. Do not revive any of it.

## Impeccable

This repo is set up with the `impeccable` design skill (`.claude/skills/impeccable`).
A PostToolUse/Stop hook runs the design detector after UI edits — findings surface as
system reminders; triage them (fix real ones, `hook-admin.mjs ignore-value` for
sanctioned exceptions). `.impeccable/config.json` holds `buildPath: "comp"` and the
detector ignore list (the decision-comp fixture at `.impeccable/mocks/decision/` is
excluded). `.impeccable/review/` and `.impeccable/critique/` hold prior-pass artifacts.

## Current state (2026-08-30)

- Base branch is **`main`** (renamed from `master`). It still holds the **old
  dark-violet** portfolio — the redesign is **not merged**.
- All current work is on **`redesign-editorial-dark`**: the Direction C rebuild,
  finish-review fixes, DESIGN.md, the CV content sync, and the client-pinned icons.
  `93484f8` is the pre-redesign baseline.
- **Still owed** (a `/impeccable harden` pass): PT/EN i18n with a persisted language
  choice, inline contact-form validation, and binding `<html lang>` to the active
  language. All three are rubric requirements.
