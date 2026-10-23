import mossveilForest from "@/design/assets/mossveil-forest.webp";
import stillwaterMere from "@/design/assets/stillwater-mere.webp";
import type { PlaceContent } from "@/lib/places/types";
import { routes } from "@/lib/site";

export const mossveilForestPlace: PlaceContent = {
  slug: "mossveil-forest",
  habitatSlug: "forests",
  mapPosition: { x: 26, y: 68 },
  hero: {
    image: mossveilForest,
    alt: "Generated image of Mossveil Forest with mossy roots, ferns and silver mist",
    kicker: "The forest collection / 01",
    title: ["Mossveil", "Forest."],
    lead: "Where the world grows quiet, and the small things come into focus.",
    tags: ["Ferns · Mist · Old-growth trees", "A fictional place"],
    cta: "Step into the forest",
    ctaHref: routes.beneathTheCanopy,
  },
  story: {
    kicker: "A place to pause",
    titleLine1: "Nothing to chase.",
    titleLine2BeforeEm: "Everything to ",
    titleLine2Em: "notice.",
    paragraphs: [
      "Morning arrives slowly in Mossveil. It settles between the trunks, gathers on the ferns, and traces the edges of a path almost reclaimed by green.",
      "Look past the tallest trees. The story is in the roots, the textures, the quiet spaces between. This is where our imagined journey begins.",
    ],
    habitat: "Temperate forest",
    chapter: "Beneath the canopy",
  },
  gallery: {
    wide: {
      alt: "Wide view through the forest canopy",
      caption: "01 — A thousand shades of green.",
    },
    crop: {
      alt: "Detail crop of the same forest scene, showing ferns and moss",
      caption: "02 — The world beneath your feet. Detail crop.",
      imageClassName: "origin-[5%_95%] scale-[2.3] object-cover object-[5%_95%]",
    },
  },
  quote: {
    kicker: "A moment in Mossveil",
    line1: "Stay long enough",
    line2BeforeEm: "to see the ",
    line2Em: "small things.",
    attribution: "From the Wild Paths field notes",
  },
  next: {
    image: stillwaterMere,
    imageAlt: "Stillwater Mere, the next fictional destination",
    kicker: "The story continues",
    titleLine1: "Follow the light",
    titleLine2Prefix: "to",
    titleLine2Em: "still water.",
    lead: "Beyond the canopy, the landscape opens. Meet the next chapter of Into the Quiet.",
    cta: "Discover Stillwater Mere",
    href: routes.stillwaterMere,
  },
  footer: {
    disclosure: "Mossveil Forest is an imagined place.",
    provenance: "Generated landscape imagery, including detail crops.",
    signOff: "Leave with a little more wonder.",
  },
};

/** @deprecated Use mossveilForestPlace.footer */
export const mossveilForestFooter = mossveilForestPlace.footer;
