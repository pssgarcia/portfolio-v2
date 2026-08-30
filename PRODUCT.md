# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Recruiters, hiring managers, and technical leads evaluating Pedro Soares for full-stack / backend developer roles. They scan quickly, on desktop or phone, and need to grasp his level, stack, and real production experience in under a minute.

**Secondary (governing on conflict):** PUC Minas instructors grading this portfolio against the Engenharia de Software sprint rubric. When rubric requirements and recruiter appeal conflict, the rubric wins (user decision).

**Also:** Professional network and peers reached via GitHub and LinkedIn.

## Product Purpose

A personal professional portfolio for **Pedro Soares** — a full-stack developer with a backend focus, based in Belo Horizonte, Brazil. It presents his story, skills, projects, work history, and contact channels.

It serves two purposes at once:
1. A professional showcase that supports career opportunities and gives his network a single canonical link.
2. An academic deliverable for PUC Minas software-engineering sprints, graded against a rubric.

Success: a hiring reader quickly understands what Pedro can do and how to reach him — and the submission satisfies every sprint requirement.

## Positioning

The through-line is **backend and systems substance over interface polish**: "designing APIs, managing data flow, and building systems that are reliable, efficient, and built to scale — not just interfaces that look good."

What a generic junior portfolio could not truthfully copy: real production work at Construsite Brasil in a multi-tenant Laravel 10 CRM — an OpenAI-powered deal-summary feature, an AWS S3 storage integration on a legacy PHP 7.4 system (~70% disk reduction), a full WhatsApp template module with granular permissions, and a resolved cross-database authentication bug spanning 13+ companies. Plus international training (Vancouver / Tamwood International College).

## Operating Context

- **Rubric governs.** The specific PUC sprint rubric document is **not yet on hand** — future work should request it before assuming requirements are complete.
- **Known rubric-derived requirements** (from README.md, to be confirmed against the real rubric):
  - Four content areas: About (Sobre Mim), Projects (Projetos), Experience (Experiências), Contact (Contato).
  - Layout with fixed header, content area, and footer.
  - Bilingual PT/EN with the chosen language persisted.
  - Responsive across desktop, tablet, and mobile.
  - Contact form with real-time / inline validation.
- **Current structure:** single-page app — all sections render on `/` with hash-anchor navigation and scroll-spy. README describes a multi-route structure; either is acceptable as long as the four areas are clearly present.
- **Deploy:** Netlify (`netlify.toml`: build `npm run build`, publish `dist`, SPA redirect to `/index.html`, Node 22). Dev server: `npm run dev` (Vite, default port 5173 — README's `8080` is stale).
- **Contact form:** Netlify Forms — a hidden static form in `index.html` plus a JS `fetch` POST from `ContactSection.vue`. No application backend; backend features (real email, DB) are noted in README as future sprints, not current scope.
- **Academic authorship:** the PUC submission credits three authors — Pedro Soares de Souza Garcia, Daniel Vieira Verissimo, Pedro Henrique Carvalho Pereira. The portfolio's *content* is about Pedro Soares as its single subject.
- **README.md is stale.** It describes a React 19 / TypeScript / TanStack Router stack and localhost:8080; the actual implementation is Vue 3 / Vite / vue-router / Tailwind 3. Trust the code, not the README, for stack facts.

## Capabilities and Constraints

- **Stack:** Vue 3 (`<script setup>`), Vite 6, vue-router 4, Tailwind CSS 3 with PostCSS. `@` path alias → `src/`.
- **Design tokens:** CSS custom properties in `src/assets/styles/main.css`, surfaced to Tailwind via `tailwind.config.js` theme extension.
- **Theming:** dark-first with a light-mode toggle; choice persisted to `localStorage` key `portfolio-theme`; applied as `.dark` class + `data-theme` attribute on `<html>` via `useColorMode`. Contrast must hold in both themes.
- **Sections:** Hero, About (bio + skill badges), Experience (vertical timeline, work + education), Projects (card grid from data), Contact (info + Netlify form). Navbar has scroll-spy active state, a mobile overlay menu, and the theme toggle. Footer has social links.
- **Composables:** `useActiveSection` (scroll-spy), `useColorMode` (theme), `useIntersectionObserver` (scroll-reveal animations — many fade/translate transitions throughout).
- **Content is data-driven:** `src/data/projects.js`, `experience.js`, `skills.js`. Copy elsewhere is inline in components.
- **Bilingual PT/EN with persistence is REQUIRED (user-confirmed) but NOT yet implemented.** There is no i18n layer. Future work must add one and preserve it; no surface may ship English-only strings. `<html lang>` must track the active language (currently hardcoded `en`).
- **Inline contact-form validation is a rubric requirement but not yet built** — the current form relies on native `required` plus submit-state handling only.
- **"Open to work" status:** Pedro is **not** currently seeking new opportunities. The "currently looking for new opportunities" copy in `ContactSection.vue` (and any similar framing) should be removed or softened to a neutral "get in touch" invitation.

## Brand Commitments

- **Name:** "Pedro Soares" for display; full name Pedro Soares de Souza Garcia.
- **Role line:** "Full-Stack Developer" with an explicit backend emphasis.
- **Voice:** first person, direct, plainspoken, quietly confident, no hype. Substance over surface. Stated personal values: consistency, taking on challenges, continuous growth. Outside interests: fitness, music, fashion.
- **Place identity:** based in Belo Horizonte, Brazil; origin story runs through Vancouver, Canada (Tamwood International College).
- **Monogram:** a gradient "P" square mark used as the nav logo.
- **Incumbent visual world** (self-described "dark tech minimalist"; not yet recorded in DESIGN.md): near-black background (`#0a0a0f`), violet/purple accent (`#9333ea` family), Inter typeface, glassmorphism cards, animated blurred gradient "orbs", faint grid overlay, glow shadows, and fade-in-up scroll reveals. This is incumbent design authority for refinement work; run `/impeccable document` to record it independently.

## Evidence on Hand

- **Projects** with real GitHub repos and some live demos — `src/data/projects.js`: Readvice (book recs), Expense Tracker, Employee Management System, Movie Search Gallery, Products Invoice System, Street Kicks (sneaker store). Project images in `src/assets/img/`.
- **Work history** — `src/data/experience.js`: Construsite Brasil, Belo Horizonte — Web Development Intern (Aug 2024) → Junior Developer I (Apr 2025) → Junior Developer II (Oct 2025–present), with specific, concrete accomplishments.
- **Education:** PUC Minas, B.Sc. Software Engineering (Feb 2024–present); Tamwood International College Web Development Program (2023).
- **Photo:** `src/assets/img/my-pic.jpg`.
- **Contact (user-confirmed correct):** email `pedrossgarcia88@gmail.com`; GitHub `github.com/pssgarcia`; LinkedIn `linkedin.com/in/pedro-soares-b996a5263/`; location Belo Horizonte, Brazil.
- **Not on hand — must not be fabricated:** testimonials, references, client quotes, performance metrics beyond those already in `experience.js`, a downloadable CV/resume, additional project screenshots, and the actual PUC sprint rubric document.

## Product Principles

1. **Rubric first, recruiter always.** Every surface must meet the PUC sprint requirements; within that constraint, optimize for how fast a hiring reader understands Pedro.
2. **Backend substance is the story.** Lead with systems, APIs, scale, and real production work — not visual flash.
3. **Bilingual by construction.** PT and EN are equal, first-class languages with a persisted choice. No surface ships a hardcoded English-only string.
4. **Real evidence only.** Every project, role, and claim traces to a real repository, job, or artifact. No invented proof, metrics, or testimonials.
5. **Content-driven and maintainable.** Content lives in data files and design lives in tokens, so copy can be updated without touching component internals.

## Accessibility & Inclusion

- Responsive across desktop, tablet, and mobile is a rubric requirement.
- Both light and dark themes are supported; color contrast must pass in both.
- Bilingual PT/EN; `<html lang>` must reflect the active language.
- No formal WCAG target has been set. Keep semantic landmarks, visible focus states, and `prefers-reduced-motion` handling as working defaults given the volume of scroll and float animations.
