import { getHabitatBySlug, getPublishedHabitats, isPublishedHabitatSlug } from "@/lib/habitats";
import { placeRoute, publishedPlaces } from "@/lib/places";
import type { HabitatSlug, MapPosition, PlaceContent } from "@/lib/places/types";

export const exploreHabitatParam = "habitat";
export const exploreViewParam = "view";
export const explorePlaceParam = "place";
export const exploreMapFailParam = "map";

export type ExploreHabitatFilter = HabitatSlug | "all";
export type ExploreView = "list" | "map";

export type ExploreDestinationRecord = {
  slug: string;
  habitatSlug: HabitatSlug;
  habitatName: string;
  title: [string, string];
  summary: string;
  chapter: string;
  habitatDetail: string;
  href: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  mapPosition: MapPosition;
};

export type ExploreSearchState = {
  habitat: ExploreHabitatFilter;
  view: ExploreView;
  place: string | null;
  simulateMapFailure: boolean;
};

export function buildExploreUrl(state: Partial<ExploreSearchState> & { habitat?: ExploreHabitatFilter }) {
  const params = new URLSearchParams();
  const habitat = state.habitat ?? "all";

  if (habitat !== "all") {
    params.set(exploreHabitatParam, habitat);
  }

  if (state.view === "map") {
    params.set(exploreViewParam, "map");
  }

  if (state.place) {
    params.set(explorePlaceParam, state.place);
  }

  if (state.simulateMapFailure) {
    params.set(exploreMapFailParam, "unavailable");
  }

  const query = params.toString();
  return query ? `/explore?${query}` : "/explore";
}

/** @deprecated Use buildExploreUrl */
export function exploreRoute(habitat: ExploreHabitatFilter = "all") {
  return buildExploreUrl({ habitat });
}

export function parseExploreHabitatFilter(
  raw: string | string[] | undefined,
): { filter: ExploreHabitatFilter; isValid: boolean } {
  const value = Array.isArray(raw) ? raw[0] : raw;

  if (!value || value === "all") {
    return { filter: "all", isValid: true };
  }

  if (isPublishedHabitatSlug(value)) {
    return { filter: value, isValid: true };
  }

  return { filter: "all", isValid: false };
}

export function parseExploreView(raw: string | string[] | undefined): ExploreView {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return value === "map" ? "map" : "list";
}

export function parseExplorePlace(
  raw: string | string[] | undefined,
  destinations: ExploreDestinationRecord[],
): string | null {
  const value = Array.isArray(raw) ? raw[0] : raw;

  if (!value) {
    return null;
  }

  return destinations.some((destination) => destination.slug === value) ? value : null;
}

export function parseExploreSearchParams(
  raw: Record<string, string | string[] | undefined>,
  destinations: ExploreDestinationRecord[],
): ExploreSearchState & { filterIsValid: boolean } {
  const { filter, isValid: filterIsValid } = parseExploreHabitatFilter(raw[exploreHabitatParam]);
  const view = parseExploreView(raw[exploreViewParam]);
  const mapRaw = raw[exploreMapFailParam];
  const simulateMapFailure = (Array.isArray(mapRaw) ? mapRaw[0] : mapRaw) === "unavailable";

  return {
    habitat: filter,
    view,
    place: parseExplorePlace(raw[explorePlaceParam], destinations),
    simulateMapFailure,
    filterIsValid,
  };
}

export function getExploreDestinations(habitat: ExploreHabitatFilter) {
  if (habitat === "all") {
    return publishedPlaces;
  }

  return publishedPlaces.filter((place) => place.habitatSlug === habitat);
}

export function toExploreDestinationRecord(place: PlaceContent): ExploreDestinationRecord {
  const habitat = getHabitatBySlug(place.habitatSlug);

  return {
    slug: place.slug,
    habitatSlug: place.habitatSlug,
    habitatName: habitat?.name ?? "Destination",
    title: place.hero.title,
    summary: place.hero.lead,
    chapter: place.story.chapter,
    habitatDetail: place.story.habitat,
    href: placeRoute(place.slug),
    imageSrc: place.hero.image.src,
    imageWidth: place.hero.image.width,
    imageHeight: place.hero.image.height,
    mapPosition: place.mapPosition,
  };
}

export function getExploreFilterOptions() {
  return [
    { slug: "all" as const, label: "All landscapes" },
    ...getPublishedHabitats().map((habitat) => ({
      slug: habitat.slug,
      label: habitat.name,
    })),
  ];
}

export const exploreIntro = {
  kicker: "Explore the region",
  title: ["Every published", "destination."],
  lead:
    "Browse imagined places by habitat. Switch between the destination list and the illustrated map — the same filters and selections apply to both.",
} as const;
