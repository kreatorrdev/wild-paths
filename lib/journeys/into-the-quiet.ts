import type { StaticImageData } from "next/image";
import cloudrestRidge from "@/design/assets/cloudrest-ridge.webp";
import forestForeground from "@/design/assets/forest-foreground.webp";
import mossveilForest from "@/design/assets/mossveil-forest.webp";
import stillwaterMere from "@/design/assets/stillwater-mere.webp";

export const intoTheQuietPlaybackMs = 180_000;

export type IntoTheQuietScene = {
  image: StaticImageData;
  alt: string;
};

export const intoTheQuietScenes: IntoTheQuietScene[] = [
  {
    image: mossveilForest,
    alt: "Mossveil Forest with mossy roots, ferns, and silver mist",
  },
  {
    image: stillwaterMere,
    alt: "Stillwater Mere with quiet lake, pine forests, and misty ridges",
  },
  {
    image: cloudrestRidge,
    alt: "Cloudrest Ridge with open mountain horizon above the clouds",
  },
];

export const intoTheQuietForeground = {
  image: forestForeground,
  alt: "Transparent forest foreground layer for depth",
} as const;

export type IntoTheQuietChapter = {
  id: string;
  anchor: number;
  number: string;
  place: string;
  label: string;
  titleLine: string;
  titleEmphasis: string;
  description: string;
};

export const intoTheQuietChapters: IntoTheQuietChapter[] = [
  {
    id: "beneath-the-canopy",
    anchor: 0,
    number: "01",
    place: "Mossveil Forest",
    label: "Beneath the canopy",
    titleLine: "Beneath",
    titleEmphasis: "canopy.",
    description: "Step softly. There is a whole world in the quiet.",
  },
  {
    id: "stillwater-mere",
    anchor: 50,
    number: "02",
    place: "Stillwater Mere",
    label: "Along still water",
    titleLine: "Along",
    titleEmphasis: "still water.",
    description: "The trees fall away. The sky finds its reflection.",
  },
  {
    id: "cloudrest-ridge",
    anchor: 100,
    number: "03",
    place: "Cloudrest Ridge",
    label: "Above the clouds",
    titleLine: "Above",
    titleEmphasis: "clouds.",
    description: "A little further up. A little more room to breathe.",
  },
];

export function chapterIndexFromProgress(progress: number) {
  return Math.min(2, Math.round(progress / 50));
}

export function chapterFromProgress(progress: number) {
  return intoTheQuietChapters[chapterIndexFromProgress(progress)];
}

export function progressFromChapterId(id: string) {
  return intoTheQuietChapters.find((chapter) => chapter.id === id)?.anchor ?? null;
}
