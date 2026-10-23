import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getPlaceFooter, isPublishedPlaceSlug } from "@/lib/places";

export default async function PlaceSlugLayout({
  children,
  params,
}: LayoutProps<"/places/[slug]">) {
  const { slug } = await params;

  if (!isPublishedPlaceSlug(slug)) {
    notFound();
  }

  return (
    <SiteShell tone="hero" footer={getPlaceFooter(slug)}>
      {children}
    </SiteShell>
  );
}
