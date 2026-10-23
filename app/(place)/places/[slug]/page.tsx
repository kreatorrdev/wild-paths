import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

export default async function PublishedPlacePage({ params }: PlaceRouteProps) {
  const { slug } = await params;
  const place = getPublishedPlace(slug);

  if (!place) {
    notFound();
  }

  return <PlacePage place={place} />;
}
