import Link from "next/link";
import { buildExploreUrl, type ExploreHabitatFilter, type ExploreView } from "@/lib/explore";

type FilterOption = {
  slug: ExploreHabitatFilter;
  label: string;
};

type ExploreHabitatFiltersProps = {
  options: FilterOption[];
  active: ExploreHabitatFilter;
  view?: ExploreView;
  place?: string | null;
};

export function ExploreHabitatFilters({
  options,
  active,
  view = "list",
  place = null,
}: ExploreHabitatFiltersProps) {
  return (
    <nav aria-label="Filter destinations by habitat">
      <ul className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = option.slug === active;

          return (
            <li key={option.slug}>
              <Link
                href={buildExploreUrl({ habitat: option.slug, view, place })}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "inline-flex min-h-11 items-center rounded-lg bg-pine px-4 py-2 text-xs tracking-[0.02em] text-paper"
                    : "inline-flex min-h-11 items-center rounded-lg border border-line bg-paper px-4 py-2 text-xs tracking-[0.02em] text-ink hover:border-pine/40"
                }
              >
                {option.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
