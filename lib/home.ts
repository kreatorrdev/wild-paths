import mossveilForest from "@/design/assets/mossveil-forest.webp";
import stillwaterMere from "@/design/assets/stillwater-mere.webp";
import { getHomeHabitatPreviews } from "@/lib/habitats";

export const heroImage = {
  src: stillwaterMere,
  alt: "Generated image of a quiet lake, pine forests, and misty mountain ridges",
} as const;

export const forestImage = {
  src: mossveilForest,
  alt: "Tall trees recede into the mist at Mossveil Forest",
  cropAlt: "A closer crop of the moss and ferns in the generated forest image",
} as const;

export const homeHabitats = getHomeHabitatPreviews();
