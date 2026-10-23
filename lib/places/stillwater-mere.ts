import cloudrestRidge from "@/design/assets/cloudrest-ridge.webp";
import stillwaterMere from "@/design/assets/stillwater-mere.webp";
import type { PlaceContent } from "@/lib/places/types";
import { routes } from "@/lib/site";

export const stillwaterMerePlace: PlaceContent = {
  slug: "stillwater-mere",
  habitatSlug: "waters",
  mapPosition: { x: 52, y: 56 },
  hero: {
    image: stillwaterMere,
    alt: "Generated image of Stillwater Mere with a quiet lake, pine forests, and misty ridges",
    imageClassName: "object-cover object-[62%_center] md:object-[center_55%]",
    kicker: "The water collection / 01",
    title: ["Stillwater", "Mere."],
    lead: "Where the forest steps back and the sky learns to see itself again.",
    tags: ["Lake · Pines · Misty ridges", "A fictional place"],
    cta: "Along still water",
    ctaHref: routes.stillwaterMereChapter,
  },
  story: {
    kicker: "A place to pause",
    titleLine1: "Nothing to rush.",
    titleLine2BeforeEm: "Everything to ",
    titleLine2Em: "reflect.",
    paragraphs: [
      "The trees fall away at Stillwater, and the horizon widens. Pine needles give way to open water, and distant ridges hold their shape in the haze.",
      "This is a pause in the journey — not an empty one. Watch how the surface repeats the sky, how the shore softens every edge, and how stillness makes room for the next step.",
    ],
    habitat: "Still lake and shoreline",
    chapter: "Along still water",
  },
  gallery: {
    wide: {
      alt: "Wide view across Stillwater Mere toward misty ridges",
      caption: "01 — The lake holds the light.",
      imageClassName: "object-cover object-center",
    },
    crop: {
      alt: "Detail crop of the same lake scene, showing the shoreline and reflection",
      caption: "02 — Where water meets the quiet shore. Detail crop.",
      imageClassName: "origin-[72%_60%] scale-[2.1] object-cover object-[72%_60%]",
    },
  },
  quote: {
    kicker: "A moment at Stillwater",
    line1: "Let the surface",
    line2BeforeEm: "hold the ",
    line2Em: "horizon.",
    attribution: "From the Wild Paths field notes",
  },
  next: {
    image: cloudrestRidge,
    imageAlt: "Cloudrest Ridge, the next fictional destination",
    kicker: "The story continues",
    titleLine1: "Follow the ridge",
    titleLine2Prefix: "above",
    titleLine2Em: "the clouds.",
    lead: "Stillwater is only the middle of the passage. The path keeps climbing toward a wider view.",
    cta: "Discover Cloudrest Ridge",
    href: routes.cloudrestRidge,
  },
  footer: {
    disclosure: "Stillwater Mere is an imagined place.",
    provenance: "Generated landscape imagery, including detail crops.",
    signOff: "Leave with a little more wonder.",
  },
};
