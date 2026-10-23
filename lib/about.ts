import { routes } from "@/lib/site";

export const aboutContent = {
  kicker: "About Wild Paths",
  title: ["An imagined", "wilderness."],
  lead:
    "Wild Paths is a public portfolio demo: a fictional region told through photography-shaped scenes, destination pages, and one interactive journey.",
  sections: [
    {
      heading: "Why the places are imagined",
      paragraphs: [
        "Mossveil Forest, Stillwater Mere, Cloudrest Ridge, and the paths between them do not exist on any map you could hike. Names, habitats, and story chapters are invented so the experience can focus on art direction, responsive layout, and quiet navigation rather than real-world trail data.",
        "That fiction is stated on every page footer and on destination and editorial content. A direct link to a place still opens with the same disclosure — the world is a design concept, not a travel guide.",
      ],
    },
    {
      heading: "What this demo includes",
      paragraphs: [
        "You can explore published destinations, read habitat introductions, follow Into the Quiet through three chapters, browse field notes, and use the illustrated map alongside an equivalent list.",
        "There are no accounts, saved places, private journal, or admin authoring in this release. Content lives in the repository as typed records and is edited like source code.",
      ],
    },
    {
      heading: "Images and honesty",
      paragraphs: [
        "Landscape scenes were generated for this concept. They should be read as designed illustrations with a photographic treatment — not as records of actual locations.",
        "For file names, generation method, and where each asset appears on the site, see the credits page.",
      ],
    },
  ],
  creditsLink: {
    label: "Read image credits",
    href: routes.credits,
  },
} as const;
