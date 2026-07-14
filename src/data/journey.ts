import type { I18nText } from "../i18n";

export type JourneyRoleType = "education" | "job" | "project" | "milestone";

export type JourneyRole = {
  org: string;
  title: I18nText;
  period: string;
  type: JourneyRoleType;
  description: I18nText;
};

export type JourneyStop = {
  id: string;
  city: string;
  country: I18nText;
  flag: string;
  /** Real GPS coordinates — projected onto the map by scripts/generate-map.mjs (keep in sync). */
  coords: { lat: number; lng: number };
  period: string;
  roles: JourneyRole[];
};

// Chronological journey — the order defines the drawn route on the map.
export const journey: JourneyStop[] = [
  {
    id: "dijon",
    city: "Dijon",
    country: { fr: "France", en: "France" },
    flag: "🇫🇷",
    coords: { lat: 47.322, lng: 5.041 },
    period: "2002 – 2004",
    roles: [
      {
        org: "ISAIP",
        title: {
          fr: "Chef de projet international en informatique & réseaux",
          en: "International project manager in IT & networks",
        },
        period: "2002 – 2004",
        type: "education",
        description: {
          fr: "Cursus d'ingénierie informatique et réseaux, orienté gestion de projet à l'international.",
          en: "Computer engineering & networks degree with an international project-management focus.",
        },
      },
    ],
  },
  {
    id: "liverpool",
    city: "Liverpool",
    country: { fr: "Royaume-Uni", en: "United Kingdom" },
    flag: "🇬🇧",
    coords: { lat: 53.408, lng: -2.992 },
    period: "2003",
    roles: [
      {
        org: "Liverpool Hope University",
        title: { fr: "Erasmus — un semestre", en: "Erasmus — one semester" },
        period: "2003",
        type: "education",
        description: {
          fr: "Semestre d'échange à Liverpool Hope University.",
          en: "Exchange semester at Liverpool Hope University.",
        },
      },
    ],
  },
  {
    id: "barcelona",
    city: "Barcelone",
    country: { fr: "Espagne", en: "Spain" },
    flag: "🇪🇸",
    coords: { lat: 41.39, lng: 2.17 },
    period: "2004",
    roles: [
      {
        org: "Universitat de Barcelona",
        title: { fr: "Erasmus — un semestre", en: "Erasmus — one semester" },
        period: "2004",
        type: "education",
        description: {
          fr: "Semestre d'échange à Barcelone.",
          en: "Exchange semester in Barcelona.",
        },
      },
    ],
  },
  {
    id: "strasbourg",
    city: "Strasbourg",
    country: { fr: "France", en: "France" },
    flag: "🇫🇷",
    coords: { lat: 48.573, lng: 7.752 },
    period: "2004 – 2005",
    roles: [
      {
        org: "Université de Strasbourg",
        title: { fr: "Master — Ingénierie informatique", en: "MSc — Computer Engineering" },
        period: "2004 – 2005",
        type: "education",
        description: {
          fr: "Master en ingénierie informatique.",
          en: "Master's degree in computer engineering.",
        },
      },
    ],
  },
  {
    id: "paris",
    city: "Paris",
    country: { fr: "France", en: "France" },
    flag: "🇫🇷",
    coords: { lat: 48.857, lng: 2.352 },
    period: "2005 – 2011",
    roles: [
      {
        org: "IRCAM",
        title: { fr: "Développeur", en: "Developer" },
        period: "2005 – 2006",
        type: "job",
        description: {
          fr: "Site de ressources sur la création musicale contemporaine et moteur de recherche fédérée de la médiathèque (OAI-PMH, XML/SDX, 4D/Oracle/MySQL).",
          en: "Online resource site on contemporary music creation and a federated search engine over the media library (OAI-PMH, XML/SDX, 4D/Oracle/MySQL).",
        },
      },
      {
        org: "IRI — Centre Pompidou",
        title: { fr: "Développeur R&D", en: "R&D Developer" },
        period: "2007 – 2008",
        type: "job",
        description: {
          fr: "Développement de « Lignes de temps », outil d'annotation et d'analyse de films (ActionScript 3 / Flash), et d'outils de publication communautaire.",
          en: "Built “Lignes de temps”, a film annotation and analysis tool (ActionScript 3 / Flash), plus community publishing tools.",
        },
      },
      {
        org: "MagicRPM",
        title: { fr: "Développeur web", en: "Web developer" },
        period: "2008 – 2011",
        type: "job",
        description: {
          fr: "Gestion et développement du site en ligne du magazine musical, prolongement web de l'édition papier.",
          en: "Ran and built the online edition of the music magazine — the web extension of the print publication.",
        },
      },
    ],
  },
  {
    id: "berlin",
    city: "Berlin",
    country: { fr: "Allemagne", en: "Germany" },
    flag: "🇩🇪",
    coords: { lat: 52.52, lng: 13.405 },
    period: "2012 – 2013",
    roles: [
      {
        org: "Deezer",
        title: { fr: "Senior Software Engineering — R&D", en: "Senior Software Engineering — R&D" },
        period: "2012 – 2013",
        type: "job",
        description: {
          fr: "Création de la cellule R&D de Deezer à Berlin : fingerprinting audio (serveur d'empreintes Echoprint / Echonest), lecteur C/C++ sécurisé, enrichissement de métadonnées. Partenariats Echonest, Gracenote, Orange Labs, LIP6.",
          en: "Built Deezer's R&D unit in Berlin: audio fingerprinting (Echoprint / Echonest print server), secure C/C++ player, metadata enrichment. Partnerships with Echonest, Gracenote, Orange Labs, LIP6.",
        },
      },
    ],
  },
  {
    id: "nantes",
    city: "Nantes",
    country: { fr: "France", en: "France" },
    flag: "🇫🇷",
    coords: { lat: 47.218, lng: -1.554 },
    period: "2016 → aujourd'hui",
    roles: [
      {
        org: "Matière Noire",
        title: { fr: "CTO Innovation / Co-fondateur", en: "CTO Innovation / Co-founder" },
        period: "2016 – 2021",
        type: "milestone",
        description: {
          fr: "Co-fondateur & CTO d'un bureau d'études et studio de développement — de 0 à 25 personnes, puis cession.",
          en: "Co-founder & CTO of a design & development studio — from 0 to 25 people, then exit.",
        },
      },
      {
        org: "Dernier Cri",
        title: { fr: "Directeur technique", en: "Chief Technology Officer" },
        period: "2021 – 2024",
        type: "job",
        description: {
          fr: "Direction technique d'une agence tech & produit.",
          en: "Technical direction of a tech & product agency.",
        },
      },
      {
        org: "Collectif Ultraviolette",
        title: {
          fr: "Indépendant — Open-source & SaaS Builder",
          en: "Independent — Open-source & SaaS Builder",
        },
        period: "2024 → aujourd'hui",
        type: "project",
        description: {
          fr: "Conception et lancement de produits : Pinpoint, Tinywind, Hive Desktop, Stackly, Paperboy, Pennywize…",
          en: "Building and shipping products: Pinpoint, Tinywind, Hive Desktop, Stackly, Paperboy, Pennywize…",
        },
      },
    ],
  },
];
