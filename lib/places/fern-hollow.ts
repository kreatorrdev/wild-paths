import fernHollow from "@/design/assets/fern-hollow.webp";
import mossveilForest from "@/design/assets/mossveil-forest.webp";
import type { PlaceContent } from "@/lib/places/types";
import { routes } from "@/lib/site";

export const fernHollowPlace: PlaceContent = {
  slug: "fern-hollow",
  habitatSlug: "forests",
  mapPosition: { x: 14, y: 82 },
  hero: {
    image: fernHollow,
    alt: "Generated image of Fern Hollow, with dense ferns, mossy banks, and filtered light in a sheltered forest clearing",
    imageClassName: "object-cover object-[center_62%]",
    kicker: "The forest collection / 02",
    title: ["Fern", "Hollow."],
    lead: "A sheltered clearing, where the ferns keep a weather of their own.",
    tags: ["Ferns · Moss · Filtered light", "A fictional place"],
    cta: "Join the forest chapter",
    ctaHref: routes.beneathTheCanopy,
  },
  story: {
    kicker: "A place to pause",
    titleLine1: "Nothing louder",
    titleLine2BeforeEm: "than the ",
    titleLine2Em: "leaves.",
    paragraphs: [
      "Fern Hollow sits lower than the tall corridors of Mossveil. Mossy banks rise around a fallen trunk, and unfurling ferns cover the floor.",
      "Light arrives here as a pale opening between the trunks, not as a view. This is a place for looking down, and for staying with one small weather of green.",
    ],
    habitat: "Sheltered fern clearing",
    chapter: "Beside the forest path",
  },
  gallery: {
    wide: {
      alt: "Wide view of the fern-filled hollow and the misty opening between the trees",
      caption: "01 — Ferns fill the floor of the hollow.",
      imageClassName: "object-cover object-center",
    },
    crop: {
      alt: "Detail crop of the same hollow, showing fern fronds and moss in the foreground",
      caption: "02 — Fronds and moss in the foreground. Detail crop.",
      imageClassName: "origin-[42%_82%] scale-[2.1] object-cover object-[42%_82%]",
    },
  },
  quote: {
    kicker: "A moment in Fern Hollow",
    line1: "Let the ferns",
    line2BeforeEm: "set the ",
    line2Em: "pace.",
    attribution: "From the Wild Paths field notes",
  },
  next: {
    image: mossveilForest,
    imageAlt: "Mossveil Forest, the taller canopy beyond the hollow",
    kicker: "The same forest, further in",
    titleLine1: "Walk on",
    titleLine2Prefix: "toward",
    titleLine2Em: "Mossveil.",
    lead: "The hollow is one room of the forest. The taller canopy, and the opening chapter of Into the Quiet, wait a little further along.",
    cta: "Discover Mossveil Forest",
    href: routes.mossveilForest,
  },
  footer: {
    disclosure: "Fern Hollow is an imagined place.",
    provenance: "Generated landscape imagery, including detail crops.",
    signOff: "Leave with a little more wonder.",
  },
};
