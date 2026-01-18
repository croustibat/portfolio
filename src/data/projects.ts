import type { I18nText } from "../i18n";

export type Project = {
  slug: string;
  name: I18nText;
  type: "SaaS" | "Client" | "Open-source" | "Experiment" | "Legacy" | "Company";
  status: "Live" | "In progress" | "Experimental" | "Shipped";
  oneLiner: I18nText;
  year?: string;
  tags: string[];
  links?: { label: I18nText; href: string }[];
  highlights: { fr: string[]; en: string[] };
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "paperboy",
    name: {
      fr: "Paperboy",
      en: "Paperboy",
    },
    type: "SaaS",
    status: "In progress",
    oneLiner: {
      fr: "Un SaaS léger pour aider les agences à partager leur expertise via des digests curatés.",
      en: "A lightweight SaaS to help agencies share expert knowledge through curated digests.",
    },
    tags: ["Laravel", "Livewire", "Tailwind", "Alpine", "Product"],
    highlights: {
      fr: [
        "Produit end-to-end : vision → architecture MVP → itération",
        "Focus sur les workflows de partage de connaissances pour agences",
        "Livraison rapide avec une base TALL propre",
      ],
      en: [
        "End-to-end product: vision → MVP architecture → iteration",
        "Focus on knowledge sharing workflows for agencies",
        "Fast shipping with a clean TALL stack foundation",
      ],
    },
  },
  {
    slug: "tolery",
    name: {
      fr: "Tolery.io",
      en: "Tolery.io",
    },
    type: "Client",
    status: "Live",
    oneLiner: {
      fr: "Mission client : construire et livrer des fonctionnalités réelles en production.",
      en: "Client work: building and shipping real features in a production product.",
    },
    tags: ["Laravel", "Product", "Delivery", "Collaboration"],
    highlights: {
      fr: [
        "Livraison robuste en production",
        "Architecture pragmatique et maintenable",
        "Collaboration rapprochée avec les parties prenantes",
      ],
      en: [
        "Production-grade delivery",
        "Pragmatic architecture & maintainability",
        "Close collaboration with stakeholders",
      ],
    },
  },
  {
    slug: "filament-job-monitor",
    name: {
      fr: "Filament Job Monitor",
      en: "Filament Job Monitor",
    },
    type: "Open-source",
    status: "Shipped",
    oneLiner: {
      fr: "UI de monitoring des jobs pour Filament — package open source maintenu dans l'écosystème Laravel.",
      en: "Jobs monitoring UI for Filament — open-source package maintained in the Laravel ecosystem.",
    },
    tags: ["Laravel", "Filament", "Open-source", "DX"],
    highlights: {
      fr: [
        "API claire et intégration UI",
        "Maintenance et itération guidées par la communauté",
        "Preuve de craft : UX + qualité du code + docs",
      ],
      en: [
        "Clear API + UI integration",
        "Community-driven maintenance and iteration",
        "Proves craft: UX + code quality + docs",
      ],
    },
  },
  {
    slug: "deezer-flow",
    name: {
      fr: "Deezer — Recommendation Engine & Flow",
      en: "Deezer — Recommendation Engine & Flow",
    },
    type: "Legacy",
    status: "Shipped",
    oneLiner: {
      fr: "Travail sur des systèmes de recommandation à grande échelle : ranking, personnalisation et features data-driven.",
      en: "Large-scale recommendation systems work: ranking, personalization, and data-driven product features.",
    },
    tags: ["Scale", "Data", "Systems", "Personalization"],
    highlights: {
      fr: [
        "Systèmes à grande échelle avec des contraintes réelles",
        "Profondeur technique : fiabilité, performance, itération",
        "Surface produit impactante : expérience de personnalisation",
      ],
      en: [
        "Work on large-scale systems with real-world constraints",
        "Technical depth: reliability, performance, iteration",
        "Impactful product surface: personalization experience",
      ],
    },
  },
  {
    slug: "matiere-noire",
    name: {
      fr: "Matière Noire",
      en: "Matière Noire",
    },
    type: "Company",
    status: "Shipped",
    oneLiner: {
      fr: "Co-fondé et développé une agence digitale (25 personnes), puis revendue.",
      en: "Co-founded and grew a digital agency (25 employees), then sold the company.",
    },
    tags: ["Leadership", "Delivery", "Strategy", "Operations"],
    highlights: {
      fr: [
        "Leadership et scaling d'une organisation",
        "Culture de livraison et delivery client à l'échelle",
        "Cycle de vie : construire → grandir → revendre",
      ],
      en: [
        "Leadership and scaling an organization",
        "Shipping culture + client delivery at scale",
        "Company lifecycle: build → grow → sell",
      ],
    },
  },
  {
    slug: "notchhub",
    name: {
      fr: "NotchHub",
      en: "NotchHub",
    },
    type: "Experiment",
    status: "In progress",
    oneLiner: {
      fr: "Un hub de notifications pour le notch macOS — expérimentation indie autour d'une UX desktop soignée.",
      en: "A macOS notch notification hub — indie experiment exploring delightful desktop UX.",
    },
    tags: ["macOS", "UX", "Indie", "Experiment"],
    highlights: {
      fr: [
        "Exploration de patterns desktop et micro-interactions",
        "Approche maker : prototype rapide, itération, livraison",
        "Ingénierie créative avec des résultats concrets",
      ],
      en: [
        "Exploration of desktop patterns and micro-interactions",
        "Maker mindset: fast prototypes, iterate, ship",
        "Creative engineering with practical outcomes",
      ],
    },
  },
];
