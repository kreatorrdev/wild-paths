import Link from "next/link";
import { routes } from "@/lib/site";

export function UnavailablePath() {
  return (
    <article className="px-[6%] py-16 md:py-24">
      <p className="kicker">Destination unavailable</p>
      <h1 className="section-title mt-4">
        This path is not <em>published.</em>
      </h1>
      <p className="mt-5 max-w-md text-sm leading-[1.9] text-muted">
        That place, habitat, or note is not part of this demo. The published landscapes are still open.
      </p>
      <p className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
        <Link href={routes.explore} className="text-action">
          Browse destinations
          <span aria-hidden="true"> →</span>
        </Link>
        <Link
          href={routes.home}
          className="inline-flex min-h-11 items-center text-xs tracking-[0.02em] text-muted underline-offset-4 hover:underline"
        >
          Return home
          <span aria-hidden="true"> ↗</span>
        </Link>
        <Link
          href={routes.journey}
          className="inline-flex min-h-11 items-center text-xs tracking-[0.02em] text-muted underline-offset-4 hover:underline"
        >
          Walk Into the Quiet
          <span aria-hidden="true"> ↗</span>
        </Link>
      </p>
    </article>
  );
}
