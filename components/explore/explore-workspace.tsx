"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ExploreDestinationList } from "@/components/explore/explore-destination-list";
import { ExploreEmptyState } from "@/components/explore/explore-empty-state";
import { ExploreHabitatFilters } from "@/components/explore/explore-habitat-filters";
import { ExploreMapPanel } from "@/components/explore/explore-map-panel";
import {
  buildExploreUrl,
  type ExploreDestinationRecord,
  type ExploreHabitatFilter,
  type ExploreSearchState,
  type ExploreView,
} from "@/lib/explore";

type FilterOption = {
  slug: ExploreHabitatFilter;
  label: string;
};

type ExploreWorkspaceProps = {
  destinations: ExploreDestinationRecord[];
  filterOptions: FilterOption[];
  habitat: ExploreHabitatFilter;
  view: ExploreView;
  selectedSlug: string | null;
  filterIsValid: boolean;
  simulateMapFailure: boolean;
};

function viewToggleClass(active: boolean) {
  return active
    ? "inline-flex min-h-11 items-center rounded-lg bg-pine px-4 py-2 text-xs tracking-[0.02em] text-paper"
    : "inline-flex min-h-11 items-center rounded-lg border border-line bg-paper px-4 py-2 text-xs tracking-[0.02em] text-ink hover:border-pine/40";
}

export function ExploreWorkspace({
  destinations,
  filterOptions,
  habitat,
  view,
  selectedSlug,
  filterIsValid,
  simulateMapFailure,
}: ExploreWorkspaceProps) {
  const router = useRouter();
  const showEmpty = !filterIsValid || destinations.length === 0;

  function pushState(next: Partial<ExploreSearchState>) {
    const url = buildExploreUrl({
      habitat,
      view,
      place: selectedSlug,
      simulateMapFailure,
      ...next,
    });

    router.replace(url, { scroll: false });
  }

  function handleSelect(slug: string) {
    pushState({ place: slug, view: "map" });
  }

  const listHref = buildExploreUrl({ habitat, view: "list", place: selectedSlug });
  const mapHref = buildExploreUrl({
    habitat,
    view: "map",
    place: selectedSlug ?? destinations[0]?.slug ?? null,
    simulateMapFailure,
  });

  return (
    <>
      <section aria-labelledby="explore-filters-title" className="mt-10 md:mt-12">
        <h2 id="explore-filters-title" className="kicker">
          Filter by habitat
        </h2>
        <div className="mt-4">
          <ExploreHabitatFilters options={filterOptions} active={habitat} view={view} place={selectedSlug} />
        </div>
      </section>

      <section aria-labelledby="explore-results-title" aria-live="polite" className="mt-10 md:mt-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="explore-results-title" className="kicker">
            {view === "map" ? "Illustrated map" : "Destination list"}
          </h2>
          {!showEmpty ? (
            <p className="text-xs text-muted">
              {destinations.length} {destinations.length === 1 ? "place" : "places"}
              {habitat !== "all" ? " in this habitat" : " published"}
            </p>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Choose list or map view">
          <Link href={listHref} aria-current={view === "list" ? "true" : undefined} className={viewToggleClass(view === "list")}>
            List
          </Link>
          <Link href={mapHref} aria-current={view === "map" ? "true" : undefined} className={viewToggleClass(view === "map")}>
            Map
          </Link>
        </div>

        <div className="mt-8">
          {showEmpty ? (
            <ExploreEmptyState invalidFilter={!filterIsValid} view={view} place={selectedSlug} />
          ) : view === "map" ? (
            <ExploreMapPanel
              destinations={destinations}
              selectedSlug={selectedSlug ?? destinations[0]?.slug ?? null}
              habitat={habitat}
              simulateMapFailure={simulateMapFailure}
              onSelect={handleSelect}
            />
          ) : (
            <ExploreDestinationList places={destinations} selectedSlug={selectedSlug} />
          )}
        </div>
      </section>
    </>
  );
}
