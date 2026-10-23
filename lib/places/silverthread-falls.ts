import silverthreadFalls from "@/design/assets/silverthread-falls.webp";
import stillwaterMere from "@/design/assets/stillwater-mere.webp";
import type { PlaceContent } from "@/lib/places/types";
import { routes } from "@/lib/site";

export const silverthreadFallsPlace: PlaceContent = {
  slug: "silverthread-falls",
  habitatSlug: "waters",
  mapPosition: { x: 38, y: 36 },
  hero: {
    image: silverthreadFalls,
    alt: "Generated image of Silverthread Falls, a narrow waterfall descending over dark mossy rock into a forest pool",
    imageClassName: "object-cover object-[65%_center]",
    kicker: "The water collection / 02",
    title: ["Silverthread", "Falls."],
    lead: "A narrow fall, a dark cliff, and a pool that keeps the sound close.",
    tags: ["Waterfall · Stone · Forest pool", "A fictional place"],
    cta: "Join the water chapter",
    ctaHref: routes.stillwaterMereChapter,
  },
  story: {
    kicker: "A place to pause",
    titleLine1: "Nothing to widen.",
    titleLine2BeforeEm: "Everything to ",
    titleLine2Em: "follow.",
    paragraphs: [
      "The water arrives as a single silver thread, then breaks across dark ledges before it reaches the pool. Moss holds the damp stone. Ferns gather on the near bank.",
      "Silverthread is the movement Stillwater refuses. Spray softens the upper gorge. Below, the pool keeps a deeper green. Both belong to the same imagined watershed.",
    ],
    habitat: "Forest gorge and pool",
    chapter: "Upstream of still water",
  },
  gallery: {
    wide: {
      alt: "Wide view of Silverthread Falls and the pool at the foot of the cliff",
      caption: "01 — The fall meets the pool.",
      imageClassName: "object-cover object-[60%_center]",
    },
    crop: {
      alt: "Detail crop of the same fall, showing white water against dark rock",
      caption: "02 — White water on dark stone. Detail crop.",
      imageClassName: "origin-[68%_32%] scale-[2.05] object-cover object-[68%_32%]",
    },
  },
  quote: {
    kicker: "A moment at Silverthread",
    line1: "Listen for the",
    line2BeforeEm: "thread of ",
    line2Em: "water.",
    attribution: "From the Wild Paths field notes",
  },
  next: {
    image: stillwaterMere,
    imageAlt: "Stillwater Mere, where the water opens into a quiet lake",
    kicker: "Downstream",
    titleLine1: "Follow the water",
    titleLine2Prefix: "to the",
    titleLine2Em: "mere.",
    lead: "The fall does not end at the pool. Downstream, the story opens onto Stillwater Mere and the water chapter of Into the Quiet.",
    cta: "Discover Stillwater Mere",
    href: routes.stillwaterMere,
  },
  footer: {
    disclosure: "Silverthread Falls is an imagined place.",
    provenance: "Generated landscape imagery, including detail crops.",
    signOff: "Leave with a little more wonder.",
  },
};
