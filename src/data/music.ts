import type { I18nText } from "../i18n";

export type MusicProject = {
  slug: string;
  name: string;
  city?: string;
  genre: string;
  years?: string;
  role?: string;
  description: I18nText;
  links: {
    spotify?: string;
    deezer?: string;
    appleMusic?: string;
    bandcamp?: string;
    soundcloud?: string;
    youtube?: string;
    website?: string;
  };
  featuredEmbeds?: Array<
    | { type: "youtube"; idOrUrl: string }
    | { type: "bandcamp"; idOrUrl: string }
    | { type: "soundcloud"; idOrUrl: string }
  >;
  cover?: string;
  highlight?: boolean;
};

// Global platform links (artist profiles)
export const musicLinks = {
  deezer: "https://www.deezer.com/fr/artist/2700071",
  bandcamp: "https://sheldoncoopersspot.bandcamp.com",
  soundcloud: "https://soundcloud.com/bat-brains",
};

export const musicProjects: MusicProject[] = [
  {
    slug: "vigilante",
    name: "Vigilante",
    city: "Nantes",
    genre: "Punk / Hardcore / Garage",
    years: "2018–présent",
    role: "Guitare",
    description: {
      fr: "Punk hardcore garage nantais. Énergie brute, riffs agressifs, lives explosifs. Le projet actif du moment.",
      en: "Nantes-based punk hardcore garage. Raw energy, aggressive riffs, explosive live shows. Currently active project.",
    },
    links: {
      website: "https://vigilante.band/",
    },
    cover: "/images/music/vigilante.jpg",
    highlight: true,
  },
  {
    slug: "poesie-zero",
    name: "Poésie Zéro",
    city: "Nantes",
    genre: "Punk-rock français",
    years: "2008–2014",
    role: "Guitare, composition",
    description: {
      fr: "Punk-rock en français. 4 albums, textes engagés, énergie scénique. Un projet fondateur qui m'a appris la rigueur du collectif.",
      en: "French punk-rock. 4 albums, committed lyrics, stage energy. A foundational project that taught me the rigor of collective work.",
    },
    links: {
      deezer: "https://www.deezer.com/fr/artist/2700071",
    },
    cover: "/images/music/poesie-zero.jpg",
    highlight: true,
  },
  {
    slug: "sheldon-coopers-spot",
    name: "Sheldon Cooper's Spot",
    city: "Nantes",
    genre: "Pop-punk",
    years: "2009–2011",
    role: "Guitare",
    description: {
      fr: "Pop-punk mélodique et énergique. Riffs catchy, refrains fédérateurs. Un projet fun et sans prise de tête.",
      en: "Melodic and energetic pop-punk. Catchy riffs, anthemic choruses. A fun, no-frills project.",
    },
    links: {
      bandcamp: "https://sheldoncoopersspot.bandcamp.com/",
    },
    cover: "/images/music/sheldon-coopers-spot.jpg",
    highlight: true,
  },
  {
    slug: "experimentations",
    name: "Expérimentations & Démos",
    genre: "Électronique / Ambient / Démos",
    years: "2010–présent",
    role: "Production, composition",
    description: {
      fr: "Sketches électroniques, ambient, démos diverses. Un terrain de jeu personnel pour explorer sans contrainte.",
      en: "Electronic sketches, ambient, various demos. A personal playground for unconstrained exploration.",
    },
    links: {
      soundcloud: "https://soundcloud.com/bat-brains",
    },
    highlight: false,
  },
];
