import { cloudrestRidgePlace } from "@/lib/places/cloudrest-ridge";
import { emberstoneSummitPlace } from "@/lib/places/emberstone-summit";
import { fernHollowPlace } from "@/lib/places/fern-hollow";
import { mossveilForestPlace } from "@/lib/places/mossveil-forest";
import { silverthreadFallsPlace } from "@/lib/places/silverthread-falls";
import { stillwaterMerePlace } from "@/lib/places/stillwater-mere";
import type { HabitatSlug, PlaceContent } from "@/lib/places/types";

export const publishedPlaces: PlaceContent[] = [
  mossveilForestPlace,
  fernHollowPlace,
  stillwaterMerePlace,
  silverthreadFallsPlace,
  cloudrestRidgePlace,
  emberstoneSummitPlace,
];

export const publishedPlaceSlugs = publishedPlaces.map((place) => place.slug);

const placesBySlug = new Map(publishedPlaces.map((place) => [place.slug, place]));

export function isPublishedPlaceSlug(slug: string): slug is PlaceContent["slug"] {
  return placesBySlug.has(slug);
}

export function getPublishedPlace(slug: string): PlaceContent | undefined {
  return placesBySlug.get(slug);
}

export function getPlaceFooter(slug: string) {
  return getPublishedPlace(slug)?.footer;
}

export function getPublishedPlacesByHabitat(habitatSlug: HabitatSlug) {
  return publishedPlaces.filter((place) => place.habitatSlug === habitatSlug);
}

export function placeRoute(slug: string) {
  return `/places/${slug}`;
}
