export const site = {
  name: "Wild Paths",
  tagline: "An imagined wilderness",
  disclosure: "An imagined wilderness. Places and paths are fictional.",
  provenance: "Landscape imagery generated for this design concept.",
  signOff: "Take the long way home.",
} as const;

export const routes = {
  home: "/",
  explore: "/explore",
  habitats: "/#habitats",
  forests: "/habitats/forests",
  waters: "/habitats/waters",
  mountains: "/habitats/mountains",
  fieldNotes: "/field-notes",
  mossveilForest: "/places/mossveil-forest",
  stillwaterMere: "/places/stillwater-mere",
  cloudrestRidge: "/places/cloudrest-ridge",
  journey: "/journeys/into-the-quiet",
  about: "/about",
  caseStudy: "/case-study",
  credits: "/credits",
  beneathTheCanopy: "/journeys/into-the-quiet#beneath-the-canopy",
  stillwaterMereChapter: "/journeys/into-the-quiet#stillwater-mere",
  cloudrestRidgeChapter: "/journeys/into-the-quiet#cloudrest-ridge",
} as const;

export const mainNavigation = [
  { label: "Explore", href: routes.explore },
  { label: "Journeys", href: routes.journey },
  { label: "Field notes", href: routes.fieldNotes },
] as const;

export const journeyChapters = [
  {
    id: "beneath-the-canopy",
    number: "01",
    label: "Beneath the canopy",
    place: "Mossveil Forest",
  },
  {
    id: "stillwater-mere",
    number: "02",
    label: "Along still water",
    place: "Stillwater Mere",
  },
  {
    id: "cloudrest-ridge",
    number: "03",
    label: "Above the clouds",
    place: "Cloudrest Ridge",
  },
] as const;

export function isCurrentPath(href: string, pathname: string | null) {
  if (!pathname || href.includes("#")) {
    return false;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
