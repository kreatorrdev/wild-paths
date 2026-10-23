import cloudrestRidge from "@/design/assets/cloudrest-ridge.webp";
import mossveilForest from "@/design/assets/mossveil-forest.webp";
import type { PlaceContent } from "@/lib/places/types";
import { routes } from "@/lib/site";

export const cloudrestRidgePlace: PlaceContent = {
  slug: "cloudrest-ridge",
  habitatSlug: "mountains",
  mapPosition: { x: 78, y: 30 },
  hero: {
    image: cloudrestRidge,
    alt: "Generated image of Cloudrest Ridge with layered peaks above low cloud",
    imageClassName: "object-cover object-[68%_center]",
    kicker: "The mountain collection / 01",
    title: ["Cloudrest", "Ridge."],
    lead: "A little further up. A little more room to breathe above the quiet below.",
    tags: ["Ridge · Cloud · Open horizon", "A fictional place"],
    cta: "Above the clouds",
    ctaHref: routes.cloudrestRidgeChapter,
  },
  story: {
    kicker: "A place to pause",
    titleLine1: "Nothing to prove.",
    titleLine2BeforeEm: "Everything to ",
    titleLine2Em: "discover.",
    paragraphs: [
      "Cloudrest opens above the treeline. Valleys disappear into soft cloud, and the ridge line carries the eye toward a horizon that feels newly made.",
      "Scale changes up here — not as spectacle, but as perspective. The forest and the lake still belong to the same story; from this height, you can feel how they connect.",
    ],
    habitat: "High ridge and cloud line",
    chapter: "Above the clouds",
  },
  gallery: {
    wide: {
      alt: "Wide view along Cloudrest Ridge above a cloud-filled valley",
      caption: "01 — Peaks layered in distance and light.",
      imageClassName: "object-cover object-[60%_center]",
    },
    crop: {
      alt: "Detail crop of the same ridge scene, showing the right-hand peak and cloud",
      caption: "02 — The ridge holds the line. Detail crop.",
      imageClassName: "origin-[88%_45%] scale-[2.2] object-cover object-[88%_45%]",
    },
  },
  quote: {
    kicker: "A moment on Cloudrest",
    line1: "Stand long enough",
    line2BeforeEm: "to feel the ",
    line2Em: "scale.",
    attribution: "From the Wild Paths field notes",
  },
  next: {
    image: mossveilForest,
    imageAlt: "Mossveil Forest, opening chapter of Into the Quiet",
    kicker: "Experience the passage",
    titleLine1: "Walk the full",
    titleLine2Prefix: "Into the Quiet",
    titleLine2Em: "journey.",
    lead: "See Mossveil, Stillwater, and Cloudrest as one continuous passage through the imagined region.",
    cta: "Begin Into the Quiet",
    href: routes.journey,
  },
  footer: {
    disclosure: "Cloudrest Ridge is an imagined place.",
    provenance: "Generated landscape imagery, including detail crops.",
    signOff: "Leave with a little more wonder.",
  },
};
