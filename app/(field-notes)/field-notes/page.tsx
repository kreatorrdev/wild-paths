import type { Metadata } from "next";
import { FieldNoteList } from "@/components/field-notes/field-note-list";
import { fieldNotesIntro, publishedFieldNotes } from "@/lib/field-notes";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Field notes",
  description: "Public editorial stories from the imagined Wild Paths wilderness.",
};

export default function FieldNotesIndexPage() {
  return (
    <article className="px-[6%] py-12 md:py-16">
      <header className="max-w-2xl">
        <p className="kicker">{fieldNotesIntro.kicker}</p>
        <h1 className="section-title mt-4">
          {fieldNotesIntro.title[0]}
          <br />
          <em>{fieldNotesIntro.title[1]}</em>
        </h1>
        <p className="mt-6 text-sm leading-[1.9] text-muted">{fieldNotesIntro.lead}</p>
        <p className="mt-4 text-[0.625rem] tracking-[0.12em] uppercase text-muted">
          {site.disclosure}
        </p>
      </header>

      <section aria-labelledby="field-notes-list-title" className="mt-10 md:mt-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="field-notes-list-title" className="kicker">
            Published notes
          </h2>
          <p className="text-xs text-muted">
            {publishedFieldNotes.length}{" "}
            {publishedFieldNotes.length === 1 ? "note" : "notes"} available
          </p>
        </div>
        <div className="mt-8">
          <FieldNoteList notes={publishedFieldNotes} />
        </div>
      </section>
    </article>
  );
}
