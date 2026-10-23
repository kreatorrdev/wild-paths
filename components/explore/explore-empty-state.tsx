import Link from "next/link";
import { buildExploreUrl, type ExploreView } from "@/lib/explore";
import { routes } from "@/lib/site";

type ExploreEmptyStateProps = {
  invalidFilter?: boolean;
  view?: ExploreView;
  place?: string | null;
};

export function ExploreEmptyState({
  invalidFilter = false,
  view = "list",
  place = null,
}: ExploreEmptyStateProps) {
  return (
    <div className="border border-line bg-mist px-6 py-10 md:px-8 md:py-12">
      <p className="kicker">No destinations match</p>
      <h2 className="section-title mt-4">
        {invalidFilter ? (
          <>
            That filter is not <em>available.</em>
          </>
        ) : (
          <>
            Nothing here <em>yet.</em>
          </>
        )}
      </h2>
      <p className="mt-5 max-w-md text-sm leading-[1.9] text-muted">
        {invalidFilter
          ? "Try another habitat filter, or view every published destination in the region."
          : "This habitat filter does not match any published place pages right now."}
      </p>
      <p className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
        <Link href={buildExploreUrl({ habitat: "all", view, place })} className="text-action">
          Show all destinations
          <span aria-hidden="true"> →</span>
        </Link>
        <Link
          href={routes.journey}
          className="inline-flex min-h-11 items-center text-xs tracking-[0.02em] text-muted underline-offset-4 hover:underline"
        >
          Walk Into the Quiet instead
          <span aria-hidden="true"> ↗</span>
        </Link>
      </p>
    </div>
  );
}
