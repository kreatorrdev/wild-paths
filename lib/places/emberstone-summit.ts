import cloudrestRidge from "@/design/assets/cloudrest-ridge.webp";
import emberstoneSummit from "@/design/assets/emberstone-summit.webp";
import type { PlaceContent } from "@/lib/places/types";
import { routes } from "@/lib/site";

export const emberstoneSummitPlace: PlaceContent = {
  slug: "emberstone-summit",
  habitatSlug: "mountains",
  mapPosition: { x: 88, y: 16 },
  hero: {
    image: emberstoneSummit,
    alt: "Generated image of Emberstone Summit, with weathered rock in the last evening light above hazy mountain ridges",
    imageClassName: "object-cover object-[65%_center]",
    kicker: "The mountain collection / 02",
    title: ["Emberstone", "Summit."],
    lead: "Warm stone in the last light, above a haze of farther ridges.",
    tags: ["Summit · Evening light · Dry grass", "A fictional place"],
    cta: "Join the mountain chapter",
    ctaHref: routes.cloudrestRidgeChapter,
  },
  story: {
    kicker: "A place to pause",
    titleLine1: "Nothing to conquer.",
    titleLine2BeforeEm: "Everything to ",
    titleLine2Em: "let cool.",
    paragraphs: [
      "The path arrives over broken granite and sparse grass. A crest catches the last amber light, and the valleys below have already gone blue.",
      "Emberstone is the quiet after the climb. Cloudrest still holds the cloud line of the journey. This summit holds the evening, and the long view home.",
    ],
    habitat: "Warm summit shoulder",
    chapter: "After the ridge",
  },
  gallery: {
    wide: {
      alt: "Wide view along Emberstone Summit toward layered ridges in evening light",
      caption: "01 — The crest holds the last light.",
      imageClassName: "object-cover object-[62%_center]",
    },
    crop: {
      alt: "Detail crop of the same summit, showing lichen-flecked rock in evening light",
      caption: "02 — Lichen and warm stone. Detail crop.",
      imageClassName: "origin-[72%_62%] scale-[2.1] object-cover object-[72%_62%]",
    },
  },
  quote: {
    kicker: "A moment on Emberstone",
    line1: "Stay for the",
    line2BeforeEm: "last of the ",
    line2Em: "light.",
    attribution: "From the Wild Paths field notes",
  },
  next: {
    image: cloudrestRidge,
    imageAlt: "Cloudrest Ridge, the high chapter of Into the Quiet",
    kicker: "The ridge beside the evening",
    titleLine1: "Return along",
    titleLine2Prefix: "the",
    titleLine2Em: "ridge.",
    lead: "Cloudrest Ridge is the journey's high chapter. Emberstone is the evening beside it, on its own stone and its own light.",
    cta: "Discover Cloudrest Ridge",
    href: routes.cloudrestRidge,
  },
  footer: {
    disclosure: "Emberstone Summit is an imagined place.",
    provenance: "Generated landscape imagery, including detail crops.",
    signOff: "Leave with a little more wonder.",
  },
};
