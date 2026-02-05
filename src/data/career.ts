import type { I18nText } from "../i18n";

export type CareerEvent = {
  year: string;
  title: I18nText;
  company?: string;
  type: "job" | "project" | "milestone" | "education";
  description: I18nText;
  icon?: string;
};

export const careerTimeline: CareerEvent[] = [
  {
    year: "2025",
    title: { fr: "Pennywize", en: "Pennywize" },
    type: "project",
    description: {
      fr: "Lancement d'un copilote financier IA pour freelances",
      en: "Launch of an AI financial copilot for freelancers",
    },
  },
  {
    year: "2024",
    title: { fr: "Tolery.io", en: "Tolery.io" },
    type: "project",
    description: {
      fr: "SaaS de génération de fichiers CAO par IA",
      en: "AI-powered CAD file generation SaaS",
    },
  },
  {
    year: "2024",
    title: { fr: "Paperboy", en: "Paperboy" },
    type: "project",
    description: {
      fr: "Plateforme de curation et distribution de newsletters",
      en: "Content curation and newsletter distribution platform",
    },
  },
  {
    year: "2023",
    title: { fr: "Filament Jobs Monitor", en: "Filament Jobs Monitor" },
    type: "project",
    description: {
      fr: "Package open-source Laravel — 224+ stars GitHub",
      en: "Open-source Laravel package — 224+ GitHub stars",
    },
  },
  {
    year: "2021",
    title: { fr: "Exit Matière Noire", en: "Matière Noire Exit" },
    company: "Matière Noire",
    type: "milestone",
    description: {
      fr: "Cession de l'agence après 5 ans de croissance",
      en: "Agency sale after 5 years of growth",
    },
  },
  {
    year: "2016",
    title: { fr: "Co-fondateur & CTO", en: "Co-founder & CTO" },
    company: "Matière Noire",
    type: "job",
    description: {
      fr: "Création d'une agence digitale à Nantes — 0 à 25 personnes",
      en: "Digital agency creation in Nantes — 0 to 25 employees",
    },
  },
  {
    year: "2013",
    title: { fr: "Lead Developer", en: "Lead Developer" },
    company: "Freelance",
    type: "job",
    description: {
      fr: "Développement web freelance — clients startups et agences",
      en: "Freelance web development — startup and agency clients",
    },
  },
  {
    year: "2012",
    title: { fr: "Responsable R&D", en: "R&D Manager" },
    company: "Deezer",
    type: "job",
    description: {
      fr: "Création de la cellule R&D à Berlin — recommandation musicale",
      en: "R&D unit creation in Berlin — music recommendation",
    },
  },
  {
    year: "2010",
    title: { fr: "Développeur Full-Stack", en: "Full-Stack Developer" },
    company: "Agences parisiennes",
    type: "job",
    description: {
      fr: "Développement web pour agences digitales à Paris",
      en: "Web development for digital agencies in Paris",
    },
  },
  {
    year: "2008",
    title: { fr: "Début de carrière", en: "Career start" },
    type: "milestone",
    description: {
      fr: "Premiers projets web professionnels",
      en: "First professional web projects",
    },
  },
];
