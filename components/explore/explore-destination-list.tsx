import Image from "next/image";
import Link from "next/link";
import type { ExploreDestinationRecord } from "@/lib/explore";

type ExploreDestinationListProps = {
  places: ExploreDestinationRecord[];
  selectedSlug?: string | null;
};

export function ExploreDestinationList({ places, selectedSlug = null }: ExploreDestinationListProps) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 md:gap-7">
      {places.map((place) => {
        const selected = place.slug === selectedSlug;

        return (
          <li key={place.slug}>
            <article
              className={
                selected
                  ? "grid h-full gap-0 overflow-hidden border-2 border-amber bg-paper md:grid-cols-[1.05fr_1fr]"
                  : "grid h-full gap-0 overflow-hidden border border-line bg-paper md:grid-cols-[1.05fr_1fr]"
              }
            >
              <Link
                href={place.href}
                aria-current={selected ? "true" : undefined}
                className="group relative block min-h-[220px] md:min-h-full"
              >
                <Image
                  src={place.imageSrc}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 28vw, 88vw"
                  className="object-cover object-[57%_center] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
                />
                <span className="habitat-shade absolute inset-0" />
                <span className="absolute inset-x-5 bottom-5 font-serif text-[1.75rem] leading-[1.12] tracking-[-0.03em] text-cream">
                  {place.title[0]}
                  <br />
                  <em>{place.title[1]}</em>
                </span>
              </Link>
              <div className="flex flex-col justify-between gap-6 p-6 md:p-7">
                <div>
                  <p className="kicker">{place.habitatName}</p>
                  <p className="mt-3 text-sm leading-[1.9] text-muted">{place.summary}</p>
                  <dl className="mt-5 flex flex-wrap gap-5 text-[0.5rem] tracking-[0.1em] uppercase">
                    <div>
                      <dt>Story chapter</dt>
                      <dd className="mt-1.5 text-xs normal-case tracking-normal text-ink">{place.chapter}</dd>
                    </div>
                    <div>
                      <dt>Habitat detail</dt>
                      <dd className="mt-1.5 text-xs normal-case tracking-normal text-ink">{place.habitatDetail}</dd>
                    </div>
                  </dl>
                </div>
                <Link href={place.href} className="text-action">
                  Open destination
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
