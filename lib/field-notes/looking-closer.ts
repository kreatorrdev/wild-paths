import mossveilForest from "@/design/assets/mossveil-forest.webp";
import type { FieldNoteContent } from "@/lib/field-notes/types";
import { placeRoute } from "@/lib/places";

const forestCropClassName = "origin-[10%_92%] scale-[2.1] object-cover object-[10%_92%]";

export const lookingCloserNote: FieldNoteContent = {
  slug: "looking-closer",
  featuredOnHome: true,
  index: {
    kicker: "Field note / Mossveil Forest",
    titleLine1: "The art of",
    titleLine2BeforeEm: "looking ",
    titleLine2Em: "closer.",
    excerpt:
      "At the foot of an old tree, a smaller world unfolds. Ferns catch the light. Moss softens every edge. For a moment, there is nowhere else to be.",
    listImage: mossveilForest,
    listImageAlt: "A closer crop of the moss and ferns in the generated forest image",
    listImageClassName: forestCropClassName,
  },
  article: {
    kicker: "Field note / an imagined moment",
    titleLine1: "The art of",
    titleLine2BeforeEm: "looking ",
    titleLine2Em: "closer.",
    lead: "Public editorial writing from the Wild Paths world. This is not a private journal entry.",
    paragraphs: [
      "At the foot of an old tree, a smaller world unfolds. Ferns catch the light. Moss softens every edge. For a moment, there is nowhere else to be.",
      "In Mossveil Forest, scale is deceptive. The trunks draw the eye upward, but the story gathers closer to the ground: lichen on bark, a bead of water on a frond, the way mist turns distance into suggestion rather than fact.",
      "These places are imagined, and the photographs are generated for this design concept. Even so, the invitation is familiar: stay long enough to notice what the first glance leaves out.",
      "A field note is a pause in the larger journey — a chance to read slowly before stepping back into the landscape.",
    ],
    leadFigure: {
      image: mossveilForest,
      alt: "A closer crop of the moss and ferns in the generated forest image",
      imageClassName: forestCropClassName,
      caption: "01 — Detail crop from the Mossveil Forest establishing image.",
    },
    figures: [
      {
        image: mossveilForest,
        alt: "Wide view through the forest canopy at Mossveil Forest",
        imageClassName: "object-cover object-center",
        caption: "02 — The same imagined forest, seen whole. Generated landscape imagery.",
      },
    ],
  },
  relatedPlace: {
    slug: "mossveil-forest",
    name: "Mossveil Forest",
    href: placeRoute("mossveil-forest"),
    lead: "Read the destination story, imagery, and the first chapter of Into the Quiet.",
    cta: "Discover Mossveil Forest",
    image: mossveilForest,
    imageAlt: "Generated image of Mossveil Forest with mossy roots, ferns and silver mist",
    imageClassName: "object-cover object-[57%_center]",
  },
  footer: {
    disclosure: "This field note describes an imagined place.",
    provenance: "Generated landscape imagery, including detail crops.",
    signOff: "Leave with a little more wonder.",
  },
};

/** @deprecated Use lookingCloserNote.footer */
export const lookingCloserFooter = lookingCloserNote.footer;
