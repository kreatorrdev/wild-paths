"use client";

import type { ExploreDestinationRecord } from "@/lib/explore";
import { site } from "@/lib/site";

type IllustratedMapProps = {
  destinations: ExploreDestinationRecord[];
  selectedSlug: string | null;
  onSelect: (slug: string) => void;
  simulateFailure?: boolean;
};

export default function IllustratedMap({
  destinations,
  selectedSlug,
  onSelect,
  simulateFailure = false,
}: IllustratedMapProps) {
  if (simulateFailure) {
    throw new Error("Illustrated map unavailable");
  }

  return (
    <figure className="overflow-hidden border border-line bg-[#e8efe9]">
      <div className="relative aspect-[10/7] w-full">
        <svg
          viewBox="0 0 400 280"
          role="img"
          aria-labelledby="wild-paths-map-title wild-paths-map-desc"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <title id="wild-paths-map-title">Illustrated map of the Wild Paths region</title>
          <desc id="wild-paths-map-desc">
            A fictional map showing forest, water, and mountain destinations as selectable markers.
          </desc>

          <rect width={400} height={280} fill="#e8efe9" />

          <g opacity="0.35" stroke="#68745a" strokeWidth="0.6" fill="none">
            <path d="M20 240 C 80 210, 120 190, 170 170" />
            <path d="M170 170 C 220 150, 260 130, 310 95" />
            <path d="M60 80 C 120 70, 180 75, 250 85" />
            <path d="M30 120 C 90 110, 150 105, 210 100" />
          </g>

          <ellipse cx="105" cy="205" rx="88" ry="52" fill="#68745a" opacity="0.22" />
          <ellipse cx="205" cy="168" rx="72" ry="40" fill="#142b24" opacity="0.12" />
          <path
            d="M255 55 L 330 38 L 385 72 L 360 120 L 285 135 L 240 95 Z"
            fill="#68745a"
            opacity="0.18"
          />

          <path
            d="M118 188 C 150 176, 185 168, 215 162"
            stroke="#be723d"
            strokeWidth="1.2"
            strokeDasharray="4 5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M215 162 C 248 138, 278 108, 302 82"
            stroke="#be723d"
            strokeWidth="1.2"
            strokeDasharray="4 5"
            fill="none"
            opacity="0.7"
          />
        </svg>

        <ul className="absolute inset-0 m-0 list-none p-0" aria-label="Destination markers">
          {destinations.map((destination) => {
            const selected = destination.slug === selectedSlug;
            const label = `${destination.title[0]} ${destination.title[1].replace(/\.$/, "")}`;

            return (
              <li
                key={destination.slug}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${destination.mapPosition.x}%`,
                  top: `${destination.mapPosition.y}%`,
                }}
              >
                <button
                  type="button"
                  onClick={() => onSelect(destination.slug)}
                  aria-pressed={selected}
                  aria-label={`${label}. ${destination.summary}`}
                  className="group flex flex-col items-center gap-2"
                >
                  <span
                    className={
                      selected
                        ? "flex h-7 w-7 items-center justify-center rounded-full bg-amber shadow-sm ring-2 ring-paper"
                        : "flex h-5 w-5 items-center justify-center rounded-full bg-pine shadow-sm ring-2 ring-paper/90"
                    }
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-paper" />
                  </span>
                  <span
                    className={
                      selected
                        ? "max-w-[9rem] rounded-sm border border-amber bg-paper px-2 py-1 text-center text-[0.625rem] leading-snug tracking-[0.04em] text-ink shadow-sm"
                        : "max-w-[9rem] rounded-sm border border-line bg-paper/95 px-2 py-1 text-center text-[0.625rem] leading-snug tracking-[0.04em] text-ink opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                    }
                  >
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <figcaption className="border-t border-line bg-paper px-4 py-3 text-[0.625rem] leading-relaxed text-muted md:px-5">
        {site.disclosure} Map positions are illustration coordinates, not real-world locations.
      </figcaption>
    </figure>
  );
}
