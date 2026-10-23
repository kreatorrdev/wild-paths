import { lookingCloserNote } from "@/lib/field-notes/looking-closer";
import type { FieldNoteContent } from "@/lib/field-notes/types";

export const fieldNotesIntro = {
  kicker: "Public editorial stories",
  title: ["Notes from", "the imagined wild."],
  lead: "Photo essays and quiet observations from fictional habitats. Each note stands on its own and connects to a published destination.",
} as const;

export const publishedFieldNotes: FieldNoteContent[] = [lookingCloserNote];

export const publishedFieldNoteSlugs = publishedFieldNotes.map((note) => note.slug);

const notesBySlug = new Map(publishedFieldNotes.map((note) => [note.slug, note]));

export function isPublishedFieldNoteSlug(slug: string): slug is FieldNoteContent["slug"] {
  return notesBySlug.has(slug);
}

export function getPublishedFieldNote(slug: string): FieldNoteContent | undefined {
  return notesBySlug.get(slug);
}

export function getFieldNoteFooter(slug: string) {
  return getPublishedFieldNote(slug)?.footer;
}

export function fieldNoteRoute(slug: string) {
  return `/field-notes/${slug}`;
}

export function getFeaturedFieldNoteForHome(): FieldNoteContent | undefined {
  return publishedFieldNotes.find((note) => note.featuredOnHome);
}
