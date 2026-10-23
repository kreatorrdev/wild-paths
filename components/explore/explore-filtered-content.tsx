import { ExploreWorkspace } from "@/components/explore/explore-workspace";
import { ExploreHabitatFilters } from "@/components/explore/explore-habitat-filters";
import {
  getExploreDestinations,
  getExploreFilterOptions,
  parseExploreSearchParams,
  toExploreDestinationRecord,
} from "@/lib/explore";

type ExploreFilteredContentProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function ExploreFilteredContent({ searchParams }: ExploreFilteredContentProps) {
  const params = await searchParams;
  const allDestinations = getExploreDestinations("all").map(toExploreDestinationRecord);
  const state = parseExploreSearchParams(params, allDestinations);
  const destinations = getExploreDestinations(state.habitat).map(toExploreDestinationRecord);
  const filterOptions = getExploreFilterOptions();

  return (
    <ExploreWorkspace
      destinations={destinations}
      filterOptions={filterOptions}
      habitat={state.habitat}
      view={state.view}
      selectedSlug={state.place}
      filterIsValid={state.filterIsValid}
      simulateMapFailure={state.simulateMapFailure}
    />
  );
}

export function ExploreFilteredContentFallback() {
  const filterOptions = getExploreFilterOptions();

  return (
    <>
      <section aria-labelledby="explore-filters-title" className="mt-10 md:mt-12">
        <h2 id="explore-filters-title" className="kicker">
          Filter by habitat
        </h2>
        <div className="mt-4" aria-busy="true">
          <ExploreHabitatFilters options={filterOptions} active="all" />
        </div>
      </section>

      <section aria-labelledby="explore-results-title" className="mt-10 md:mt-12">
        <h2 id="explore-results-title" className="kicker">
          Destination list
        </h2>
        <p className="mt-8 text-sm text-muted">Loading destinations…</p>
      </section>
    </>
  );
}
