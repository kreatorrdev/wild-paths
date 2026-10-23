import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PlacePage } from "@/components/place-page";
import { getPublishedPlace, publishedPlaceSlugs } from "@/lib/places";

type PlaceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedPlaceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PlaceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const place = getPublishedPlace(slug);

  if (!place) {
    return {};
  }

  const title = `${place.hero.title[0]} ${place.hero.title[1].replace(/\.$/, "")}`;

  return {
    title,
    description: `${place.footer.disclosure} ${place.footer.provenance}`,
  };
}

export default function PublishedPlacePage({ params }: PlaceRouteProps) {
  return (
    <Suspense
      fallback={
        <p className="flex min-h-[630px] items-end bg-pine px-[6%] py-16 text-sm text-cream" role="status">
          Opening this place…
        </p>
      }
    >
      <PublishedPlaceContent params={params} />
    </Suspense>
  );
}

async function PublishedPlaceContent({ params }: PlaceRouteProps) {
  const { slug } = await params;
  const place = getPublishedPlace(slug);

  if (!place) {
    notFound();
  }

  return <PlacePage place={place} />;
}
