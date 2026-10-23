import type { Metadata } from "next";
import { Suspense } from "react";
import {
  ExploreFilteredContent,
  ExploreFilteredContentFallback,
} from "@/components/explore/explore-filtered-content";
import { exploreIntro } from "@/lib/explore";
import { site } from "@/lib/site";

type ExplorePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Explore",
  description: "Browse published destinations across the imagined Wild Paths region.",
};

export default function ExplorePage({ searchParams }: ExplorePageProps) {
  return (
    <article className="px-[6%] py-12 md:py-16">
      <header className="max-w-2xl">
        <p className="kicker">{exploreIntro.kicker}</p>
        <h1 className="section-title mt-4">
          {exploreIntro.title[0]}
          <br />
          <em>{exploreIntro.title[1]}</em>
        </h1>
        <p className="mt-6 text-sm leading-[1.9] text-muted">{exploreIntro.lead}</p>
        <p className="mt-4 text-[0.625rem] tracking-[0.12em] uppercase text-muted">
          {site.disclosure}
        </p>
      </header>

      <Suspense fallback={<ExploreFilteredContentFallback />}>
        <ExploreFilteredContent searchParams={searchParams} />
      </Suspense>
    </article>
  );
}
