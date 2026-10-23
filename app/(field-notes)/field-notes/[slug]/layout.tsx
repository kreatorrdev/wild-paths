import { notFound } from "next/navigation";
import { isPublishedFieldNoteSlug } from "@/lib/field-notes";

export default async function FieldNoteSlugLayout({
  children,
  params,
}: LayoutProps<"/field-notes/[slug]">) {
  const { slug } = await params;

  if (!isPublishedFieldNoteSlug(slug)) {
    notFound();
  }

  return children;
}
