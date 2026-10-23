import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HabitatPage } from "@/components/habitat-page";
import { getHabitatBySlug, isPublishedHabitatSlug, publishedHabitatSlugs } from "@/lib/habitats";
import { getPublishedPlacesByHabitat } from "@/lib/places";

type HabitatRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedHabitatSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: HabitatRouteProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isPublishedHabitatSlug(slug)) {
    return {};
  }

  const habitat = getHabitatBySlug(slug);

  if (!habitat) {
    return {};
  }

  return {
    title: habitat.name,
    description: `${habitat.footer.disclosure} ${habitat.footer.provenance}`,
  };
}

export default async function PublishedHabitatPage({ params }: HabitatRouteProps) {
  const { slug } = await params;

  if (!isPublishedHabitatSlug(slug)) {
    notFound();
  }

  const habitat = getHabitatBySlug(slug);

  if (!habitat) {
    notFound();
  }

  const places = getPublishedPlacesByHabitat(habitat.slug);

  return <HabitatPage habitat={habitat} places={places} />;
}
