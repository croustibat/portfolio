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
        "224+ stars GitHub — package maintenu activement",
        "Compatible tous drivers Laravel (Redis, SQS, Database, RabbitMQ)",
        "Dashboard avec stats, graphiques 7 jours et retry en un clic",
        "Support Filament v4 avec rétrocompatibilité v2/v3",
        "Pruning automatique configurable et gestion des quotas",
      ],
      en: [
        "224+ GitHub stars — actively maintained package",
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
