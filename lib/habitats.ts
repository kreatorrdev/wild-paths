import type { StaticImageData } from "next/image";
import cloudrestRidge from "@/design/assets/cloudrest-ridge.webp";
import mossveilForest from "@/design/assets/mossveil-forest.webp";
import stillwaterMere from "@/design/assets/stillwater-mere.webp";
import { getPublishedPlacesByHabitat } from "@/lib/places";
import type { HabitatSlug } from "@/lib/places/types";

export type HabitatContent = {
  slug: HabitatSlug;
  number: string;
  name: string;
  collectionLabel: string;
  lines: [string, string];
  heroImage: StaticImageData;
  heroAlt: string;
  heroImageClassName?: string;
  intro: {
    kicker: string;
    title: [string, string];
    paragraphs: readonly string[];
  };
  footer: {
    disclosure: string;
    provenance: string;
    signOff: string;
  };
};

const allHabitats: HabitatContent[] = [
  {
    slug: "forests",
    number: "01",
    name: "Forests",
    collectionLabel: "The forest collection",
    lines: ["Beneath", "the canopy"],
    heroImage: mossveilForest,
    heroAlt: "Mossy forest with ferns and silver mist between the trees",
    intro: {
      kicker: "Forest places",
      title: ["Slow down.", "Look closer."],
      paragraphs: [
        "These are the sheltered landscapes — filtered light, layered green, and paths that ask for patience rather than speed.",
        "Each destination here is imagined. Start with a place page, or step directly into the forest chapter of Into the Quiet.",
      ],
    },
    footer: {
      disclosure: "Forest destinations in Wild Paths are imagined places.",
      provenance: "Generated landscape imagery for this design concept.",
      signOff: "Leave with a little more wonder.",
    },
  },
  {
    slug: "waters",
    number: "02",
    name: "Waters",
    collectionLabel: "The water collection",
    lines: ["Along", "still water"],
    heroImage: stillwaterMere,
    heroAlt: "A quiet lake reflecting pine forests and misty mountain ridges",
    heroImageClassName: "object-[62%_center]",
    intro: {
      kicker: "Water places",
      title: ["Hold still.", "Let the surface speak."],
      paragraphs: [
        "Open water changes the rhythm of a journey. The horizon widens, reflections gather detail, and the air feels a little cooler.",
        "Published water destinations have their own pages. You can also meet Stillwater Mere inside Into the Quiet.",
      ],
    },
    footer: {
      disclosure: "Water destinations in Wild Paths are imagined places.",
      provenance: "Generated landscape imagery for this design concept.",
      signOff: "Leave with a little more wonder.",
    },
  },
  {
    slug: "mountains",
    number: "03",
    name: "Mountains",
    collectionLabel: "The mountain collection",
    lines: ["Above", "the clouds"],
    heroImage: cloudrestRidge,
    heroAlt: "Layered mountain ridges above a cloud-filled valley",
    heroImageClassName: "object-[72%_center]",
    intro: {
      kicker: "Mountain places",
      title: ["Climb a little.", "See further."],
      paragraphs: [
        "Higher ground offers distance — valleys below, weather moving through, and room to breathe above the treeline.",
        "Each mountain destination stands on its own page. Cloudrest Ridge also closes the arc of Into the Quiet.",
      ],
    },
    footer: {
      disclosure: "Mountain destinations in Wild Paths are imagined places.",
      provenance: "Generated landscape imagery for this design concept.",
      signOff: "Leave with a little more wonder.",
    },
  },
];

export function getHabitatBySlug(slug: string) {
  return allHabitats.find((habitat) => habitat.slug === slug) ?? null;
}

export function getPublishedHabitats() {
  return allHabitats.filter((habitat) => getPublishedPlacesByHabitat(habitat.slug).length > 0);
}

export function habitatRoute(slug: HabitatSlug) {
  return `/habitats/${slug}`;
}

export const publishedHabitatSlugs = allHabitats
  .filter((habitat) => getPublishedPlacesByHabitat(habitat.slug).length > 0)
  .map((habitat) => habitat.slug);

export function isPublishedHabitatSlug(slug: string): slug is HabitatSlug {
  return publishedHabitatSlugs.includes(slug as HabitatSlug);
}

export function getHomeHabitatPreviews() {
  return getPublishedHabitats().map((habitat) => ({
    number: habitat.number,
    name: habitat.name,
    lines: habitat.lines,
    href: habitatRoute(habitat.slug),
    image: habitat.heroImage,
  }));
}
