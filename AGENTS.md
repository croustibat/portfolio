# AGENTS.md

## Project overview

This repository contains a **static personal portfolio website** for **Baptiste Bouillot**.

The site showcases:
- Selected professional projects (SaaS, client work, open-source, experiments)
- Short but high-quality case studies
- A clear product / engineering positioning

The site is **fully static**, built with **Astro + Tailwind CSS**, and deployed on **Vercel**.

There is **no backend**, **no database**, and **no CMS**.

---

## Goals

- Present a **clean, modern, professional portfolio**
- Highlight:
  - Product thinking
  - Technical expertise (Laravel / TALL stack background)
  - Open-source credibility
  - Creative / experimental mindset
- Be easy to share as a single URL
- Be fast, lightweight, and long-term maintainable

---

## Tech stack

- **Astro** (static site generator)
- **Tailwind CSS** (utility-first styling)
- **TypeScript** (optional, minimal usage)
- **Vercel** for deployment

### Explicit constraints
- Static generation only
- No server-side rendering
- No runtime data fetching
- No external UI frameworks
- No heavy JavaScript libraries

---

## Design direction

**Hybrid A + B**
> Clean product design + subtle creative engineer touches

### Visual principles
- Light mode by default
- Large margins, clear hierarchy
- Subtle creative details (micro-glow, texture, soft hover effects)
- No visual noise
- No over-animations

### Colors
- Background: very light gray / white
- Text: near-black
- Muted text: neutral gray
- **Accent color**: violet `#7C3AED`  
  → Use sparingly (highlights, dots, subtle glows, active states)

### Typography
- Headings: modern grotesk / geometric sans (e.g. Geist, Satoshi, Space Grotesk)
- Body: clean sans-serif (Inter / system-ui)
- Optional mono font for tags or metadata

---

## Content structure

### Pages
- `/` → Home (hero + selected projects)
- `/work/[slug]` → Case study pages (static)
- Optional future pages:
  - `/now`
  - `/about`

### Data-driven content
- Projects are defined in `src/data/projects.ts`
- Pages are generated from this data
- No hardcoded content duplication

---

## Case studies guidelines

Each project case study should:
- Be concise (this is a portfolio, not documentation)
- Focus on:
  - Context / problem
  - Role & responsibilities
  - Key technical or product challenges
  - What was learned / why it matters
- Avoid marketing buzzwords
- Avoid unnecessary metrics unless meaningful

Tone:
> Calm, confident, pragmatic, builder-oriented

---

## UI & components rules

- Prefer **simple, reusable components**
- Tailwind utilities over custom CSS
- Extract components only when it improves clarity
- Animations:
  - subtle only (opacity, translate, glow)
  - no parallax
  - no scroll-jacking
- Accessibility matters:
  - semantic HTML
  - readable contrast
  - focus states

---

## What Codex should do well

Codex is encouraged to:
- Improve layout hierarchy and spacing
- Refine micro-interactions
- Improve accessibility
- Improve SEO (meta tags, OpenGraph, sitemap)
- Refactor Tailwind usage for clarity
- Extend case studies using existing data
- Add optional pages following the same design system

---

## What Codex should NOT do

Codex should NOT:
- Add backend logic
- Add a CMS or database
- Add authentication
- Add complex state management
- Introduce heavy JS frameworks
- Redesign the site radically
- Change the agreed design direction
- Add unnecessary dependencies

If a feature increases complexity without clear value, **do not implement it**.

---

## Deployment

- Platform: **Vercel**
- Output: static (`dist`)
- Build command: `astro build`

Everything must remain compatible with static deployment.

---

## Guiding principle

> **This portfolio should feel like it was built by someone who enjoys building things.**

Clean.
Thoughtful.
Useful.
Shipped.