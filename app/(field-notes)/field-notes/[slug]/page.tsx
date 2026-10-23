import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FieldNotePage } from "@/components/field-note-page";
import { getPublishedFieldNote, publishedFieldNoteSlugs } from "@/lib/field-notes";

type FieldNoteRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedFieldNoteSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: FieldNoteRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getPublishedFieldNote(slug);

  if (!note) {
    return {};
  }

  const title = `${note.article.titleLine1} ${note.article.titleLine2BeforeEm}${note.article.titleLine2Em.replace(/\.$/, "")}`;

  return {
    title,
    description: `${note.index.excerpt} ${note.footer.disclosure}`,
  };
}

export default async function PublishedFieldNotePage({ params }: FieldNoteRouteProps) {
  const { slug } = await params;
  const note = getPublishedFieldNote(slug);

  if (!note) {
    notFound();
  }

  return <FieldNotePage note={note} />;
}
