import Link from "next/link";
import { SceneImage } from "@/components/scene-image";
import { fieldNoteRoute } from "@/lib/field-notes";
import type { FieldNoteContent } from "@/lib/field-notes/types";

type FieldNoteListProps = {
  notes: FieldNoteContent[];
};

export function FieldNoteList({ notes }: FieldNoteListProps) {
  return (
    <ul className="grid gap-6 md:gap-7">
      {notes.map((note) => (
        <li key={note.slug}>
          <article className="grid gap-0 overflow-hidden border border-line bg-paper md:grid-cols-[1.05fr_1fr]">
            <Link
              href={fieldNoteRoute(note.slug)}
              className="group relative block min-h-[220px] md:min-h-[280px]"
            >
              <SceneImage
                src={note.index.listImage}
                alt=""
                presentation="card"
                fill
                sizes="(min-width: 768px) 38vw, 88vw"
                className={`motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03] ${note.index.listImageClassName}`}
              />
              <span className="habitat-shade absolute inset-0" />
              <span className="absolute inset-x-5 bottom-5 font-serif text-[1.75rem] leading-[1.12] tracking-[-0.03em] text-cream">
                {note.index.titleLine1}
                <br />
                {note.index.titleLine2BeforeEm}
                <em>{note.index.titleLine2Em}</em>
              </span>
            </Link>
            <div className="flex flex-col justify-between gap-6 p-6 md:p-7">
              <div>
                <p className="kicker">{note.index.kicker}</p>
                <p className="mt-3 text-sm leading-[1.9] text-muted">{note.index.excerpt}</p>
                <dl className="mt-5 text-[0.5rem] tracking-[0.1em] uppercase">
                  <div>
                    <dt>Related place</dt>
                    <dd className="mt-1.5 text-xs normal-case tracking-normal text-ink">
                      {note.relatedPlace.name}
                    </dd>
                  </div>
                </dl>
              </div>
              <Link href={fieldNoteRoute(note.slug)} className="text-action">
                Read the field note
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
