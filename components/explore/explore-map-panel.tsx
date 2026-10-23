"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Component, type ReactNode } from "react";
import type { ExploreDestinationRecord, ExploreHabitatFilter, ExploreSearchState } from "@/lib/explore";
import { buildExploreUrl } from "@/lib/explore";
import { ExploreDestinationPreview } from "@/components/explore/explore-destination-preview";

const IllustratedMap = dynamic(() => import("@/components/explore/illustrated-map"), {
  loading: () => (
    <div
      className="flex min-h-[280px] items-center justify-center border border-line bg-mist text-sm text-muted"
      role="status"
    >
      Loading illustrated map…
    </div>
  ),
  ssr: false,
});

type ExploreMapPanelProps = {
  destinations: ExploreDestinationRecord[];
  selectedSlug: string | null;
  habitat: ExploreHabitatFilter;
  simulateMapFailure: boolean;
  onSelect: (slug: string) => void;
};

type MapErrorBoundaryProps = {
  children: ReactNode;
  habitat: ExploreHabitatFilter;
  selectedSlug: string | null;
};

type MapErrorBoundaryState = {
  hasError: boolean;
};

class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
  state: MapErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      const listUrl = buildExploreUrl({
        habitat: this.props.habitat,
        view: "list",
        place: this.props.selectedSlug,
      } satisfies Partial<ExploreSearchState>);

      return (
        <div className="border border-line bg-mist px-5 py-8 md:px-7 md:py-10" role="alert">
          <p className="kicker">Map unavailable</p>
          <h3 className="section-title mt-3 text-[clamp(1.75rem,3vw,2.25rem)]">
            The illustrated map did not <em>load.</em>
          </h3>
          <p className="mt-4 max-w-md text-sm leading-[1.9] text-muted">
            The destination list is still complete. You can open every published place from there while
            the map is unavailable.
          </p>
          <p className="mt-6">
            <Link href={listUrl} className="text-action">
              Use the destination list
              <span aria-hidden="true"> →</span>
            </Link>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ExploreMapPanel({
  destinations,
  selectedSlug,
  habitat,
  simulateMapFailure,
  onSelect,
}: ExploreMapPanelProps) {
  const selected =
    destinations.find((destination) => destination.slug === selectedSlug) ?? destinations[0] ?? null;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-8">
      <MapErrorBoundary habitat={habitat} selectedSlug={selectedSlug}>
        <IllustratedMap
          destinations={destinations}
          selectedSlug={selected?.slug ?? null}
          onSelect={onSelect}
          simulateFailure={simulateMapFailure}
        />
      </MapErrorBoundary>

      <div aria-live="polite">
        {selected ? (
          <ExploreDestinationPreview destination={selected} />
        ) : (
          <p className="border border-line bg-mist px-5 py-8 text-sm leading-[1.9] text-muted">
            Select a marker to read a short preview and open its destination page.
          </p>
        )}
      </div>
    </div>
  );
}
