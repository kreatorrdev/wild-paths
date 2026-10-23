import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getHabitatBySlug, isPublishedHabitatSlug } from "@/lib/habitats";

export default async function HabitatSlugLayout({
  children,
  params,
}: LayoutProps<"/habitats/[slug]">) {
  const { slug } = await params;

  if (!isPublishedHabitatSlug(slug)) {
    notFound();
  }

  const habitat = getHabitatBySlug(slug);

  if (!habitat) {
    notFound();
  }

  return <SiteShell tone="hero" footer={habitat.footer}>{children}</SiteShell>;
}
