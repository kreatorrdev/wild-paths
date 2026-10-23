import type { PublishedAssetRecord } from "@/lib/assets/types";

/** Matches docs/ASSET_REGISTER.md and the assets shipped on public pages. */
export const publishedAssets: PublishedAssetRecord[] = [
  {
    id: "stillwater-mere",
    title: "Stillwater Mere",
    fictionalSubject: "Quiet lake, pine forest, and misty ridges (imagined water habitat)",
    originalFile: "design/assets/stillwater-mere.png",
    webpFile: "design/assets/stillwater-mere.webp",
    generationMethod: "Built-in image generation tool for this portfolio demo",
    accessibilityIntent:
      "Mobile hero centers toward the right bank; describe lake, pines, and misty ridges",
    publishedOn: [
      "Home hero",
      "Stillwater Mere place page",
      "Into the Quiet — Along still water",
      "Waters habitat",
      "Explore list and map",
    ],
  },
  {
    id: "mossveil-forest",
    title: "Mossveil Forest",
    fictionalSubject: "Mossy old-growth forest with ferns and silver mist (imagined forest habitat)",
    originalFile: "design/assets/mossveil-forest.png",
    webpFile: "design/assets/mossveil-forest.webp",
    generationMethod: "Built-in image generation tool for this portfolio demo",
    accessibilityIntent:
      "Preserve the opening between trunks; detail crops on place and field-note pages are labeled explicitly",
    publishedOn: [
      "Home habitats and field-note excerpt",
      "Mossveil Forest place page (wide and detail crop)",
      "Into the Quiet — Beneath the canopy",
      "Forests habitat",
      "Field note — Looking closer",
      "Explore list and map",
    ],
  },
  {
    id: "cloudrest-ridge",
    title: "Cloudrest Ridge",
    fictionalSubject: "Open ridge above cloud-filled valley (imagined mountain habitat)",
    originalFile: "design/assets/cloudrest-ridge.png",
    webpFile: "design/assets/cloudrest-ridge.webp",
    generationMethod: "Built-in image generation tool for this portfolio demo",
    accessibilityIntent: "Preserve the right ridge and cloud-filled valley",
    publishedOn: [
      "Cloudrest Ridge place page",
      "Into the Quiet — Above the clouds",
      "Mountains habitat",
      "Explore list and map",
    ],
  },
  {
    id: "forest-foreground",
    title: "Forest foreground",
    fictionalSubject: "Decorative near layer for the forest journey scene (imagined, non-documentary)",
    originalFile: "design/assets/forest-foreground.png",
    webpFile: "design/assets/forest-foreground.webp",
    generationMethod: "Built-in image generation tool for this portfolio demo",
    accessibilityIntent:
      "True alpha transparency; decorative depth layer with no separate spoken description",
    publishedOn: ["Into the Quiet — forest chapter depth layer"],
  },
];

export const creditsIntro = {
  kicker: "Image provenance",
  title: ["Where the", "pictures come from."],
  lead:
    "Every landscape on this demo was generated for Wild Paths. The locations named in the stories are fictional; the files below are the sources actually published on the site.",
} as const;

export const creditsMapNote =
  "The illustrated map on Explore is drawn in SVG in the application. It is not a satellite or geographic tile layer and does not represent real coordinates." as const;
