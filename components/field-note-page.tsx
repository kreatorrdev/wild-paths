import Image from "next/image";
import Link from "next/link";
import type { FieldNoteContent } from "@/lib/field-notes/types";
import { publishedFieldNotes } from "@/lib/field-notes";
import { routes } from "@/lib/site";

type FieldNotePageProps = {
  note: FieldNoteContent;
};

export function FieldNotePage({ note }: FieldNotePageProps) {
  const relatedImageClassName = note.relatedPlace.imageClassName ?? "object-cover object-center";

  return (
    <article>
      <header className="max-w-3xl px-[6%] pt-12 pb-8 md:pt-16 md:pb-10">
        <p>
          <Link
            href={routes.fieldNotes}
            className="inline-flex min-h-11 items-center py-1.5 text-[0.6875rem] tracking-[0.02em] text-muted"
          >
            <span aria-hidden="true">←</span>
            All field notes
          </Link>
        </p>
        <p className="kicker mt-8">{note.article.kicker}</p>
        <h1 className="section-title mt-4">
          {note.article.titleLine1}
          <br />
          {note.article.titleLine2BeforeEm}
          <em>{note.article.titleLine2Em}</em>
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-[1.9] text-muted">{note.article.lead}</p>
      </header>

      <figure className="px-[6%]">
        <div className="relative h-[300px] overflow-hidden md:h-[420px]">
          <Image
            src={note.article.leadFigure.image}
            alt={note.article.leadFigure.alt}
            fill
            priority
            sizes="(min-width: 768px) 88vw, 100vw"
            className={note.article.leadFigure.imageClassName}
          />
        </div>
        <figcaption className="mt-3 max-w-2xl text-[0.625rem] text-muted">
          {note.article.leadFigure.caption}
        </figcaption>
      </figure>

      <div className="mx-auto max-w-2xl px-[6%] py-10 md:py-14">
        {note.article.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mb-5 text-sm leading-[1.9] text-muted last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>

      {note.article.figures.length > 0 ? (
        <section aria-label="Supporting imagery" className="grid gap-7 px-[6%] pb-10 md:pb-14">
          {note.article.figures.map((figure) => (
            <figure key={figure.caption}>
              <div className="relative h-[260px] overflow-hidden md:h-[340px]">
                <Image
                  src={figure.image}
                  alt={figure.alt}
                  fill
                  sizes="(min-width: 768px) 88vw, 100vw"
                  className={figure.imageClassName}
                />
              </div>
              <figcaption className="mt-3 max-w-2xl text-[0.625rem] text-muted">{figure.caption}</figcaption>
            </figure>
          ))}
        </section>
      ) : null}

      <section
        aria-labelledby={`${note.slug}-related-place-title`}
        className="grid items-center gap-8 border-t border-line px-[6%] py-11 md:grid-cols-2 md:gap-[7%] md:py-[4.75rem]"
      >
        <div className="relative h-[260px] overflow-hidden md:h-[310px]">
          <Image
            src={note.relatedPlace.image}
            alt={note.relatedPlace.imageAlt}
            fill
            sizes="(min-width: 768px) 42vw, 88vw"
            className={relatedImageClassName}
          />
        </div>
        <div>
          <p className="kicker">Related place</p>
          <h2 id={`${note.slug}-related-place-title`} className="section-title mt-4">
            Continue to
            <br />
            <em>{note.relatedPlace.name}.</em>
          </h2>
          <p className="mt-5 max-w-md text-[0.8125rem] leading-[1.9] text-muted">{note.relatedPlace.lead}</p>
          <p className="mt-6">
            <Link href={note.relatedPlace.href} className="text-action">
              {note.relatedPlace.cta}
              <span aria-hidden="true"> →</span>
            </Link>
          </p>
        </div>
      </section>

      {publishedFieldNotes.length > 1 ? (
        <p className="border-t border-line px-[6%] py-8 text-center text-sm">
          <Link href={routes.fieldNotes} className="text-action">
            Browse all field notes
            <span aria-hidden="true"> →</span>
          </Link>
        </p>
      ) : null}
    </article>
  );
}
