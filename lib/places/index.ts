import { cloudrestRidgePlace } from "@/lib/places/cloudrest-ridge";
import { mossveilForestPlace } from "@/lib/places/mossveil-forest";
import { stillwaterMerePlace } from "@/lib/places/stillwater-mere";
import type { HabitatSlug, PlaceContent } from "@/lib/places/types";

export const publishedPlaces: PlaceContent[] = [
  mossveilForestPlace,
  stillwaterMerePlace,
  cloudrestRidgePlace,
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
