import type { I18nText } from "../i18n";

export type Project = {
  slug: string;
  name: I18nText;
  type: "SaaS" | "Client" | "Open-source" | "Experiment" | "Legacy" | "Company" | "Game";
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
    slug: "pinpoint",
    name: {
      fr: "Pinpoint",
      en: "Pinpoint",
    },
    type: "Open-source",
    status: "Live",
    year: "2026",
    oneLiner: {
      fr: "App macOS en barre de menu qui capture l'écran, laisse poser des marqueurs numérotés sur ce qui compte, et copie un prompt prêt à coller pour ton agent IA.",
      en: "macOS menu-bar app that captures your screen, lets you drop numbered markers on what matters, and copies a ready-to-paste prompt for your AI agent.",
    },
    tags: ["Swift", "SwiftUI", "macOS", "AI Agents", "Open-source"],
    cover: "/images/projects/pinpoint.webp",
    links: [
      { label: { fr: "Site web", en: "Website" }, href: "https://pinpoint-ashy.vercel.app" },
      { label: { fr: "GitHub", en: "GitHub" }, href: "https://github.com/croustibat/Pinpoint" },
      {
        label: { fr: "Télécharger", en: "Download" },
        href: "https://github.com/croustibat/Pinpoint/releases/latest",
      },
    ],
    highlights: {
      fr: [
        "Capture de région (⌘⇧1, rebindable) — résolution native, multi-écrans et Retina",
        "Marqueurs numérotés en 3 styles, avec notes, flèches et rectangles pour pointer précisément",
        "⌘C copie l'image annotée + un prompt structuré (position des marqueurs en %) lisible par Claude Code, Codex & co",
        "Légende intégrée en option — un seul collage transporte l'image et les instructions",
        "The Shelf : bibliothèque intégrée de captures (favoris, tri, Quick Look, réouverture annotée)",
        "100% natif SwiftUI + ScreenCaptureKit, en barre de menu — vos captures ne quittent jamais le Mac",
      ],
      en: [
        "Region capture (⌘⇧1, rebindable) — native resolution, multi-display and Retina aware",
        "Numbered markers in 3 styles, with notes, arrows and rectangles to point precisely",
        "⌘C copies the annotated image + a structured prompt (marker positions in %) that Claude Code, Codex & co parse cleanly",
        "Optional baked-in legend — a single paste carries the image and the instructions",
        "The Shelf: built-in capture library (favorite, sort, Quick Look, reopen with annotations)",
        "100% native SwiftUI + ScreenCaptureKit, menu-bar app — your captures never leave your Mac",
      ],
    },
  },
  {
    slug: "tinywind",
    name: {
      fr: "Tinywind",
      en: "Tinywind",
    },
    type: "Game",
    status: "In progress",
    year: "2026",
    oneLiner: {
      fr: "Petit jeu de voile en HTML5 — tiens la barre avec le vent, règle ta voile et canonne tes cibles au ralenti.",
      en: "A tiny HTML5 sailing game — hold the tiller with the wind, trim your sail, and cannon your targets in slow-motion.",
    },
    tags: ["Game", "HTML5 Canvas", "JavaScript", "Indie", "Astro"],
    // cover: "/images/projects/tinywind.png", // TODO: ajouter le PNG dans public/images/projects/ puis décommenter
    links: [
      { label: { fr: "Jouer", en: "Play" }, href: "https://tinywind-alpha.vercel.app/" },
    ],
    highlights: {
      fr: [
        "Navigation à la voile : gère le cap à la barre et l'allure selon le vent",
        "Tir au canon avec visée au ralenti (bullet-time) pour ajuster ses tirs",
        "Ambiance minimaliste, rendu canvas HTML5 et contrôles 100% clavier",
        "Système de score et progression entre les îles",
        "Prototype jouable directement dans le navigateur, en développement actif (alpha)",
      ],
      en: [
        "Sailing at its core: set your heading with the tiller and trim to the wind",
        "Cannon fire with slow-motion (bullet-time) aiming to line up your shots",
        "Minimalist mood, HTML5 canvas rendering and fully keyboard-driven controls",
        "Scoring system and progression across the islands",
        "Playable prototype right in the browser, in active development (alpha)",
      ],
    },
  },
  {
    slug: "hive-desktop",
    name: {
      fr: "Hive Desktop",
      en: "Hive Desktop",
    },
    type: "Experiment",
    status: "In progress",
    year: "2026",
    oneLiner: {
      fr: "App d'orchestration d'agents IA — un backlog local de tickets distribués à des sous-agents parallèles, chacun isolé dans son propre worktree git.",
      en: "AI agent orchestration app — a local ticket backlog dispatched to parallel sub-agents, each isolated in its own git worktree.",
    },
    tags: ["macOS", "AI Agents", "Orchestration", "DX", "Indie"],
    cover: "/images/projects/hive-desktop.png",
    links: [
      { label: { fr: "Site web", en: "Website" }, href: "https://hive-desktop.vercel.app" },
    ],
    highlights: {
      fr: [
        "Backlog local de tickets pour piloter des agents IA de code",
        "Exécution parallèle : chaque ticket dans un worktree git isolé",
        "Distribution automatique des tâches aux sous-agents",
        "Suivi en temps réel de l'avancement des agents",
        "Pensé pour Claude Code, Codex et autres agents CLI",
      ],
      en: [
        "Local ticket backlog to drive AI coding agents",
        "Parallel execution: each ticket in its own isolated git worktree",
        "Automatic task dispatch to sub-agents",
        "Real-time tracking of agent progress",
        "Built for Claude Code, Codex and other CLI agents",
      ],
    },
  },
  {
    slug: "stackly",
    name: {
      fr: "Stackly",
      en: "Stackly",
    },
    type: "Experiment",
    status: "Live",
    year: "2026",
    oneLiner: {
      fr: "App macOS pour organiser ses onglets Safari en stacks thématiques — basculez d'un projet à l'autre en un clic.",
      en: "macOS app to organize Safari tabs into themed stacks — switch between projects in one click.",
    },
    tags: ["Swift", "SwiftUI", "macOS", "Safari", "Productivité"],
    cover: "/images/projects/stackly.png",
    links: [
      {
        label: { fr: "App Store", en: "App Store" },
        href: "https://apps.apple.com/fr/app/stackly/id6759226108",
      },
    ],
    highlights: {
      fr: [
        "Stacks illimités avec icônes emoji, couleurs et dossiers hiérarchiques",
        "Basculement instantané entre projets avec sauvegarde automatique",
        "Synchronisation temps réel des onglets (badges ouvert / fermé)",
        "Auto-suspension des onglets pour économiser la RAM",
        "Import / export JSON et historique des onglets fermés (7 jours)",
        "100% local, sans télémétrie ni compte — open-source",
      ],
      en: [
        "Unlimited stacks with emoji icons, colors and hierarchical folders",
        "Instant switching between projects with automatic saving",
        "Real-time tab sync (open / closed badges)",
        "Tab auto-suspension to save RAM",
        "JSON import / export and closed-tab history (7 days)",
        "100% local, no telemetry or account — open-source",
      ],
    },
  },
  {
    slug: "dart-matter",
    name: {
      fr: "Dart Matter",
      en: "Dart Matter",
    },
    type: "Experiment",
    status: "Live",
    year: "2025",
    oneLiner: {
      fr: "App iOS de comptage de points de fléchettes — interface rapide, modes Cricket et X01.",
      en: "iOS dart scoring app — fast interface, Cricket and X01 game modes.",
    },
    tags: ["Swift", "SwiftUI", "iOS", "Mobile"],
    cover: "/images/projects/dart-matter.png",
    links: [
      {
        label: { fr: "App Store", en: "App Store" },
        href: "https://apps.apple.com/us/app/dart-matter/id6760351495",
      },
    ],
    highlights: {
      fr: [
        "Interface rapide et claire avec clavier dédié",
        "Modes de jeu Cricket et X01/501",
        "Support 2 à 4 joueurs",
        "Historique des parties avec fonction annuler",
        "Design pensé pour une utilisation à une main",
        "Modes sombre et clair",
      ],
      en: [
        "Fast and clear interface with dedicated keyboard",
        "Cricket and X01/501 game modes",
        "Support for 2 to 4 players",
        "Game history with undo capability",
        "Designed for single-hand operation",
        "Dark and light modes",
      ],
    },
  },
  {
    slug: "paperboy",
    name: {
      fr: "Paperboy",
      en: "Paperboy",
    },
    type: "SaaS",
    status: "In progress",
    year: "2024",
    oneLiner: {
      fr: "Plateforme de curation de contenu et de distribution de newsletters pour les agences et créateurs.",
      en: "Content curation and newsletter distribution platform for agencies and creators.",
    },
    tags: ["Laravel 12", "Livewire 3", "Tailwind CSS", "SQLite", "Product"],
    cover: "/images/projects/paperboy.png",
    links: [
      { label: { fr: "Voir le projet", en: "View project" }, href: "https://paperboy.app" },
    ],
    highlights: {
      fr: [
        "Curation d'articles et liens avec extraction automatique de métadonnées",
        "Création de digests thématiques avec publication publique",
        "Distribution multi-canal : LinkedIn, Twitter, partage par URL",
        "Dashboard complet avec gestion des tags et analytics",
        "Stack TALL moderne : Laravel 12, Livewire 3, Alpine.js, Tailwind CSS 4",
      ],
      en: [
        "Article and link curation with automatic metadata extraction",
        "Themed digest creation with public publishing",
        "Multi-channel distribution: LinkedIn, Twitter, URL sharing",
        "Complete dashboard with tag management and analytics",
        "Modern TALL stack: Laravel 12, Livewire 3, Alpine.js, Tailwind CSS 4",
      ],
    },
  },
  {
    slug: "tolery",
    name: {
      fr: "Tolery.io",
      en: "Tolery.io",
    },
    type: "SaaS",
    status: "Live",
    year: "2024",
    oneLiner: {
      fr: "SaaS de génération de fichiers CAO par IA — décrivez votre pièce, obtenez un fichier STEP en 2 minutes.",
      en: "AI-powered CAD file generation SaaS — describe your part, get a STEP file in 2 minutes.",
    },
    tags: ["Laravel 12", "Filament 4", "Stripe", "Three.js", "AI/CAD"],
    cover: "/images/projects/tolery.png",
    links: [
      { label: { fr: "Visiter Tolery", en: "Visit Tolery" }, href: "https://tolery.io" },
    ],
    highlights: {
      fr: [
        "Génération de fichiers CAO (STEP, OBJ, PDF) via langage naturel",
        "Visualisation 3D interactive avec Three.js",
        "Système d'abonnement complet avec Stripe Cashier",
        "Architecture multi-tenant avec gestion d'équipes",
        "Admin panel Filament 4 pour la gestion des utilisateurs et revenus",
      ],
      en: [
        "CAD file generation (STEP, OBJ, PDF) via natural language",
        "Interactive 3D visualization with Three.js",
        "Complete subscription system with Stripe Cashier",
        "Multi-tenant architecture with team management",
        "Filament 4 admin panel for user and revenue management",
      ],
    },
  },
  {
    slug: "pennywize",
    name: {
      fr: "Pennywize",
      en: "Pennywize",
    },
    type: "SaaS",
    status: "Live",
    year: "2025",
    oneLiner: {
      fr: "Copilote financier IA pour freelances — décrivez votre situation, obtenez un budget clair sans formulaire.",
      en: "AI financial copilot for freelancers — describe your situation, get a clear budget without any forms.",
    },
    tags: ["Laravel 12", "Livewire 3", "OpenAI", "Tailwind CSS", "Product"],
    cover: "/images/projects/pennywize.png",
    links: [
      { label: { fr: "Voir le projet", en: "View project" }, href: "https://askpennywize.com" },
    ],
    highlights: {
      fr: [
        "Interface conversationnelle IA — décrivez vos finances comme à un ami",
        "Calendrier budgétaire quotidien avec code couleur (vert/orange/rouge)",
        "Réponses instantanées : « Est-ce que je peux me permettre ce resto ce soir ? »",
        "Import CSV et saisie rapide en plus du chat",
        "Données chiffrées, hébergées en France, conformité RGPD",
      ],
      en: [
        "Conversational AI interface — describe your finances like talking to a friend",
        "Daily budget calendar with color coding (green/orange/red)",
        "Instant answers: 'Can I afford that restaurant tonight?'",
        "CSV import and quick input alongside chat",
        "Encrypted data, hosted in France, GDPR compliant",
      ],
    },
  },
  {
    slug: "filament-job-monitor",
    name: {
      fr: "Filament Jobs Monitor",
      en: "Filament Jobs Monitor",
    },
    type: "Open-source",
    status: "Shipped",
    year: "2023",
    oneLiner: {
      fr: "Package Laravel pour monitorer les jobs en arrière-plan — compatible tous drivers, alternative légère à Horizon.",
      en: "Laravel package to monitor background jobs — works with all drivers, lightweight Horizon alternative.",
    },
    tags: ["Laravel", "Filament", "Open-source", "Package", "DX"],
    cover: "/images/projects/filament-jobs-monitor-1.png",
    links: [
      { label: { fr: "GitHub", en: "GitHub" }, href: "https://github.com/ultraviolettes/filament-jobs-monitor" },
      { label: { fr: "Packagist", en: "Packagist" }, href: "https://packagist.org/packages/croustibat/filament-jobs-monitor" },
    ],
    highlights: {
      fr: [
        "245+ stars GitHub — package maintenu activement",
        "Compatible tous drivers Laravel (Redis, SQS, Database, RabbitMQ)",
        "Dashboard avec stats, graphiques 7 jours et retry en un clic",
        "Support Filament v4 avec rétrocompatibilité v2/v3",
        "Pruning automatique configurable et gestion des quotas",
      ],
      en: [
        "245+ GitHub stars — actively maintained package",
        "Works with all Laravel drivers (Redis, SQS, Database, RabbitMQ)",
        "Dashboard with stats, 7-day charts and one-click retry",
        "Filament v4 support with v2/v3 backward compatibility",
        "Configurable auto-pruning and quota management",
      ],
    },
  },
  {
    slug: "deezer-rnd",
    name: {
      fr: "Deezer — Cellule R&D",
      en: "Deezer — R&D Unit",
    },
    type: "Legacy",
    status: "Shipped",
    year: "2012-2013",
    oneLiner: {
      fr: "Création et pilotage d'une cellule R&D à Berlin — recommandation musicale, partenariats académiques et industriels.",
      en: "Creation and management of an R&D unit in Berlin — music recommendation, academic and industry partnerships.",
    },
    tags: ["R&D", "Data", "C/C++", "Partenariats", "Recrutement"],
    cover: "/images/projects/deezer.jpeg",
    highlights: {
      fr: [
        "Création de la cellule R&D Deezer à Berlin",
        "Partenariats : Echonest, Gracenote, Orange Labs, LIP6 (Jussieu)",
        "Développement d'un serveur d'empreintes digitales audio (Echoprint)",
        "Lecteur C/C++ sécurisé et enrichissement de métadonnées",
        "Recrutement de profils Data Analyst et Data Scientist",
      ],
      en: [
        "Creation of Deezer's R&D unit in Berlin",
        "Partnerships: Echonest, Gracenote, Orange Labs, LIP6 (Jussieu)",
        "Development of audio fingerprint server (Echoprint)",
        "Secure C/C++ player and metadata enrichment",
        "Recruitment of Data Analyst and Data Scientist profiles",
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
    year: "2016-2021",
    oneLiner: {
      fr: "Co-fondateur et CTO d'une agence digitale — de 0 à 25 personnes, puis cession de l'entreprise.",
      en: "Co-founder and CTO of a digital agency — from 0 to 25 employees, then company sale.",
    },
    tags: ["Entrepreneuriat", "Leadership", "CTO", "Agency", "Exit"],
    cover: "/images/projects/matierenoire.png",
    highlights: {
      fr: [
        "5 ans de croissance : de la création à la cession",
        "Scaling de l'équipe tech et mise en place des process",
        "Bureau d'étude et studio de développement à Nantes",
        "Delivery client à l'échelle : sites, apps, plateformes",
        "Culture produit et excellence technique comme différenciateurs",
      ],
      en: [
        "5 years of growth: from creation to exit",
        "Tech team scaling and process implementation",
        "Design and development studio based in Nantes",
        "Client delivery at scale: websites, apps, platforms",
        "Product culture and technical excellence as differentiators",
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
    year: "2024",
    oneLiner: {
      fr: "Utilitaire macOS qui transforme le notch en hub de notifications et statut système unifié.",
      en: "macOS utility that transforms the notch into a unified notification and system status hub.",
    },
    tags: ["Swift", "SwiftUI", "macOS", "Indie", "UX"],
    cover: "/images/projects/notchhub.png",
    links: [
      { label: { fr: "GitHub", en: "GitHub" }, href: "https://github.com/croustibat/notchhub" },
    ],
    highlights: {
      fr: [
        "Interface native SwiftUI avec animations fluides",
        "Monitoring en temps réel des agents IA (Claude Code, Codex, OpenCode)",
        "Serveur OTLP intégré pour recevoir la télémétrie des outils de dev",
        "Centre de notifications unifié avec badges et groupement par app",
        "Intégration calendrier, batterie et timer système",
      ],
      en: [
        "Native SwiftUI interface with smooth animations",
        "Real-time AI agent monitoring (Claude Code, Codex, OpenCode)",
        "Built-in OTLP server to receive dev tools telemetry",
        "Unified notification center with badges and app grouping",
        "Calendar, battery and system timer integration",
      ],
    },
  },
];
