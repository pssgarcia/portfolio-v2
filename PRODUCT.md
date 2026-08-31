# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Recruiters, hiring managers, and technical leads evaluating Pedro Soares for software / backend engineering roles. They scan quickly, on desktop or phone, and need to grasp his level, stack, and real production experience in under a minute.

**Secondary (governing on conflict):** PUC Minas instructors grading this portfolio against the Engenharia de Software sprint rubric. When rubric requirements and recruiter appeal conflict, the rubric wins (user decision).

**Also:** Professional network and peers reached via GitHub and LinkedIn.

## Product Purpose

A personal professional portfolio for **Pedro Soares**, a software engineer with a backend and systems focus, based in Belo Horizonte, Brazil. It presents his story, skills, projects, work history, and contact channels.

It serves two purposes at once:
1. A professional showcase that supports career opportunities and gives his network a single canonical link.
2. An academic deliverable for PUC Minas software-engineering sprints, graded against a rubric.

Success: a hiring reader quickly understands what Pedro can do and how to reach him, and the submission satisfies every sprint requirement.

## Positioning

The through-line is **backend and systems substance over interface polish**: "designing APIs, managing data flow, and building systems that are reliable, efficient, and built to scale, not just interfaces that look good."

What a generic junior portfolio could not truthfully copy: two years of real production work at Construsite Brasil, intern → Junior Developer III. His work there spans a multi-tenant SaaS CRM (Laravel/PHP) **plus e-commerce platforms, institutional sites, internal systems, and APIs** — not the CRM alone. He architected and shipped a rule-based lead-distribution engine (concurrent round-robin queues, configurable rules, standalone rule-evaluation service + management UI), an event-driven notification system on the Observer pattern, an AI-powered deal-summary feature on the OpenAI API, an AWS S3 integration on a legacy PHP 7.4 ERP, and payment/shipping integrations (REDE OAuth 2.0, Mercado Pago, Melhor Envio); he resolved a cross-database tenant-isolation authentication issue affecting multiple companies; and he has taken on technical leadership, coordinating team demands, reviewing and approving code, and setting the team's engineering guidelines. Outside work he built and shipped **Tayro** (tayro.app.br), a two-sided SaaS marketplace on NestJS/TypeScript/Prisma with Clean Architecture, a CI pipeline of 339 tests, and Railway/Vercel deploys. Plus international training (Vancouver / Tamwood International College, Star Student Recognition).

## Operating Context

- **Rubric governs.** The PUC Lab01 rubric is now on hand (provided 2026-08-31). Key requirements:
  - Menu-navigated sections: **Sobre Mim** (PT + EN: formação, área de atuação, interesses, objetivos profissionais), **Projetos**, **Experiências**, **Contato**.
  - **Projetos = a project timeline.** The rubric text says oldest-to-newest; the user chose **newest-to-oldest** (2026-08-31). Each project: name + description, technologies, GitHub repo link, and an image or GIF of it running. (Gaps: Tayro and Barbearia repos are private, so no GitHub link; CPU Sim and Movie Search have no image yet.)
  - **Contato:** clickable icons for e-mail, WhatsApp, LinkedIn (GitHub is extra), plus a name/email/message form that sends by e-mail.
  - Bilingual PT/EN, language persisted; responsive; fixed header + content + footer.
  - README: technologies, dependency/framework list, directory tree, local install/run steps, published cloud link.
  - Lab01S01 also wanted Figma mid-fidelity wireframes (a separate deliverable, not in this repo).
- **Current structure:** single-page app, all sections render on `/` with hash-anchor navigation and scroll-spy. Order: About, Projects, Experience, Contact.
- **Deploy:** Vercel (`vercel.json`: SPA rewrite to `/index.html`; Vite framework preset, build `npm run build`, output `dist`). Dev server: `npm run dev` (Vite, port 5173).
- **Contact form:** `ContactSection.vue` POSTs JSON to `/api/contact`, a Vercel serverless function (`api/contact.js`). The function re-validates name/email/message, silently drops honeypot submissions, and sends the message to Pedro through **Resend** (`resend` SDK) with the visitor's address as `reply-to`. Requires env vars `RESEND_API_KEY` and `CONTACT_FROM` (an address on a Resend-verified domain); `.env.example` documents them. On any failure the client shows the "email me directly" note. No database; message persistence is still out of scope.
- **Academic authorship:** the `README.md` now credits **Pedro Soares de Souza Garcia only** (user decision, 2026-08-30; earlier drafts listed two other names). The portfolio's *content* is about Pedro Soares as its single subject.
- **README.md** was rewritten 2026-08-30 to match the real Vue 3 / Vite / vue-router / Tailwind 3 stack, the shipped features (i18n, inline validation, themes), and the current file layout. It carries section screenshots in `docs/*.jpg`. Keep it in sync when the structure or feature set changes.

## Capabilities and Constraints

- **Stack:** Vue 3 (`<script setup>`), Vite 6, vue-router 4, Tailwind CSS 3 with PostCSS. `@` path alias → `src/`.
- **Design tokens & system:** CSS custom properties in `src/assets/styles/main.css`; the full visual system is recorded in `DESIGN.md` + `.impeccable/design.json`.
- **Theming:** two committed looks off one token set, Direction C (warm-dark, default) and Direction A (light warm-paper), flipped by the navbar toggle; choice persisted to `localStorage` key `portfolio-theme` via `useColorMode`. Contrast passes WCAG AA in both.
- **Sections (post-redesign), in order:** Hero (code-editor scene: mono role line, name, the `build(focus, ...)` line typed out char-by-char with an advancing text caret, faint drifting service graph), About (bio prose + grouped skill lists), Projects (a vertical timeline: accent rail + node dots + year + techs + repo/demo links + a landing screenshot for the recent ones; newest first, 3 shown then a "show older" toggle), Experience (dated timeline, work + education, `.section--star` anchor), Contact (pull line + e-mail/WhatsApp/LinkedIn/GitHub icon buttons + form with inline validation). Navbar has a deterministic scroll-spy, a mobile overlay menu, a sun/moon theme toggle, and a BR/US flag language toggle. Footer is one mono line + "Back to top".
- **Composables:** `useActiveSection` (scroll-position scroll-spy), `useColorMode` (theme), `useLanguage` (PT/EN, persisted, drives `<html lang>` + `<title>` + `t()`), `useContent` (per-language content trees), `useIntersectionObserver` (one 0.6s scroll reveal per section, inert under `prefers-reduced-motion`).
- **Content is data-driven and bilingual:** `src/data/*.js` each export `{ en, pt }`; UI chrome strings live in `src/i18n/ui.js`. Keep copy there, components should not need editing to update it.
- **Fonts:** Bricolage Grotesque (display) / Newsreader (body) / Spline Sans Mono (data + hero code), self-hosted via `@fontsource` (no third-party font request).
- **Bilingual PT/EN is implemented.** PT-BR is the default (`<html lang="pt-BR">`); the navbar flag toggle switches and persists to `localStorage["portfolio-language"]`, and updates `<html lang>` + `<title>`. All editorial copy and UI strings exist in both languages; no hardcoded English string ships.
- **Inline contact-form validation is implemented:** JS validation on blur and on submit (name required, email required + format, message required + min length), translated error messages inline under each field, `aria-invalid` / `aria-describedby` wired, submit blocked and first invalid field focused on failure. `novalidate` on the form; native `required` kept as a semantic hint.
- **"Open to work" status:** Pedro is **not** actively seeking; the contact copy is a neutral "open to talking about systems…" invitation, no "looking for opportunities" framing.

## Brand Commitments

- **Name:** "Pedro Soares" for display; full name Pedro Soares de Souza Garcia.
- **Role line:** "Software Engineer" with an explicit backend and systems emphasis.
- **Voice:** first person, direct, plainspoken, quietly confident, no hype. Substance over surface. Stated personal values: consistency, taking on challenges, continuous growth. Outside interests: fitness, music, fashion.
- **Place identity:** based in Belo Horizonte, Brazil; origin story runs through Vancouver, Canada (Tamwood International College).
- **Visual world:** recorded in `DESIGN.md`, "The Engineer's Ledger": warm-dark editorial (`#1B1815`), one brass accent, Bricolage Grotesque + Spectral + Spline Sans Mono, hairline rules, no cards. `[data-theme="light"]` carries a warm-paper light variant. The former "dark tech minimalist" look (near-black `#0A0A0F`, violet neon, orbs, glass, emoji chips) is now the anti-reference.

Content is data-driven, `src/data/experience.js`, `projects.js`, `skills.js`, `profile.js`, updated 2026-08-30 from Pedro's current CV.

- **Work history**, Construsite Brasil, Belo Horizonte: Web Development Intern (Aug 2024) → Junior Developer I (Apr 2025) → Junior Developer II (Oct 2025) → **Junior Developer III (Jun 2026–present)**. Each role carries specific, concrete accomplishments (lead-distribution engine, notification system, N+1 performance initiative, tenant-isolation auth fix, AWS S3 integration, OpenAI deal-summary, payment/shipping integrations, technical leadership, engineering guidelines).
- **Projects**, `src/data/projects.js` (`{ en, pt }`), 6 entries with a `year`, ordered **newest to oldest**: **Tayro** (2026; tayro.app.br, live; NestJS/TypeScript/Prisma SaaS platform, private repo, `tayro.jpg`), **Barbearia do Davi** (2026; barbearia-do-davi.vercel.app, live; a real-client barbershop landing page, private repo, `barbearia-do-davi.jpg`), **CPU Scheduling Simulator** (2025; Java; FCFS/SRTF/Round-Robin/MLQ, Strategy pattern; a PUC Minas Operating Systems assignment, GitHub only, PT title "Simulador de Escalonamento de CPU"), **Readvice** (2023; `readvice.jpg`; a book-discovery team project from Pedro's Web Development program in Vancouver, GitHub only), **Expense Tracker** (2023; Vue, GitHub + live demo, `expense-tracker.png`), **Movie Search Gallery** (2023; React, GitHub only). The 3 newest show by default; the rest are behind a "show older" toggle. Tech tags render as coloured brand icons via `TechIcon` (simple-icons). **Barbearia's tech stack (Next.js / React / Tailwind) is an inference; project years were given by Pedro (2026-08-31).** Employee Management System, Products Invoice System, and Street Kicks were dropped (user, 2026-08-30). Older project images also in `src/assets/img/`.
- **Education:** PUC Minas, B.Sc. Software Engineering (Feb 2024–present); Tamwood International College Web Development Program (2023), Star Student Recognition. Also Tamwood: Web Development Program and English Language Program certificates.
- **Languages:** English, fluent (lived and studied in Canada); Portuguese, native.
- **Photo:** `src/assets/img/my-pic.jpg`.
- **Contact (user-confirmed correct):** email `pedrossgarcia88@gmail.com`; GitHub `github.com/pssgarcia`; LinkedIn `linkedin.com/in/pedro-soares-b996a5263/`; location Belo Horizonte, Brazil.
- **Not on hand, must not be fabricated:** testimonials, references, client quotes, performance metrics beyond those in the CV/`experience.js`, a downloadable CV file on the site, screenshots for projects other than Tayro and Barbearia, and the actual PUC sprint rubric document.

## Product Principles

1. **Rubric first, recruiter always.** Every surface must meet the PUC sprint requirements; within that constraint, optimize for how fast a hiring reader understands Pedro.
2. **Backend substance is the story.** Lead with systems, APIs, scale, and real production work, not visual flash.
3. **Bilingual by construction.** PT and EN are equal, first-class languages with a persisted choice. No surface ships a hardcoded English-only string.
4. **Real evidence only.** Every project, role, and claim traces to a real repository, job, or artifact. No invented proof, metrics, or testimonials.
5. **Content-driven and maintainable.** Content lives in data files and design lives in tokens, so copy can be updated without touching component internals.

## Accessibility & Inclusion

- Responsive across desktop, tablet, and mobile is a rubric requirement.
- Both light and dark themes are supported; color contrast must pass in both.
- Bilingual PT/EN; `<html lang>` must reflect the active language.
- No formal WCAG target has been set. Keep semantic landmarks, visible focus states, and `prefers-reduced-motion` handling as working defaults given the volume of scroll and float animations.
