import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
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

export default function PublishedFieldNotePage({ params }: FieldNoteRouteProps) {
  return (
    <Suspense
      fallback={
        <p className="px-[6%] py-24 text-sm text-muted" role="status">
          Opening this field note…
        </p>
      }
    >
      <PublishedFieldNoteContent params={params} />
    </Suspense>
  );
}

async function PublishedFieldNoteContent({ params }: FieldNoteRouteProps) {
  const { slug } = await params;
  const note = getPublishedFieldNote(slug);

  if (!note) {
    notFound();
  }

  return <FieldNotePage note={note} />;
}
