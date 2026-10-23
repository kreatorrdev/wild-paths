import Link from "next/link";
import { SceneImage } from "@/components/scene-image";
import type { HabitatContent } from "@/lib/habitats";
import type { PlaceContent } from "@/lib/places/types";
import { placeRoute } from "@/lib/places";
import { routes } from "@/lib/site";

type HabitatPageProps = {
  habitat: HabitatContent;
  places: PlaceContent[];
};

export function HabitatPage({ habitat, places }: HabitatPageProps) {
  const heroImageClassName = habitat.heroImageClassName
    ? `object-cover ${habitat.heroImageClassName}`
    : "object-cover object-center";

  return (
    <article>
      <section
        aria-labelledby={`${habitat.slug}-title`}
        className="on-hero relative isolate min-h-[520px] text-cream md:min-h-[560px]"
      >
        <div className="absolute inset-0">
          <SceneImage
            src={habitat.heroImage}
            alt={habitat.heroAlt}
            presentation="hero"
            unavailableHref={routes.explore}
            unavailableLabel="Browse destinations"
            fill
            priority
            sizes="100vw"
            className={heroImageClassName}
          />
          <div className="hero-shade absolute inset-0" />
        </div>
        <div className="relative z-10 px-[6%] pt-36 pb-24 md:pt-32 md:pb-20">
          <p>
            <Link
              href={routes.home}
              className="inline-flex min-h-11 items-center py-1.5 text-[0.6875rem] tracking-[0.02em] text-cream"
            >
              <span aria-hidden="true">←</span>
              Wild Paths home
            </Link>
          </p>
          <p className="kicker mt-8">
            {habitat.collectionLabel} / {habitat.number}
          </p>
          <h1 id={`${habitat.slug}-title`} className="display-title mt-4 max-w-3xl text-cream">
            {habitat.name}
          </h1>
          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed">{habitat.intro.paragraphs[0]}</p>
        </div>
      </section>

      <section
        aria-labelledby={`${habitat.slug}-intro-title`}
        className="grid gap-8 px-[6%] py-12 md:grid-cols-[1.1fr_1fr] md:gap-[7%] md:py-16"
      >
        <div>
          <p className="kicker">{habitat.intro.kicker}</p>
          <h2 id={`${habitat.slug}-intro-title`} className="section-title mt-4">
            {habitat.intro.title[0]}
            <br />
            <em>{habitat.intro.title[1]}</em>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-[1.9] text-muted">{habitat.intro.paragraphs[1]}</p>
      </section>

      <section aria-labelledby={`${habitat.slug}-destinations-title`} className="px-[6%] pb-16 md:pb-20">
        <h2 id={`${habitat.slug}-destinations-title`} className="kicker">
          Published destinations
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2 md:gap-7">
          {places.map((place) => (
            <li key={place.slug}>
              <article className="grid h-full gap-0 overflow-hidden border border-line bg-paper md:grid-cols-[1.05fr_1fr]">
                <Link
                  href={placeRoute(place.slug)}
                  className="group relative block min-h-[220px] md:min-h-full"
                >
                  <SceneImage
                    src={place.hero.image}
                    alt=""
                    presentation="card"
                    fill
                    sizes="(min-width: 768px) 28vw, 88vw"
                    className={`object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03] ${place.hero.imageClassName ?? "object-[57%_center]"}`}
                  />
                  <span className="habitat-shade absolute inset-0" />
                  <span className="absolute inset-x-5 bottom-5 font-serif text-[1.75rem] leading-[1.12] tracking-[-0.03em] text-cream">
                    {place.hero.title[0]}
                    <br />
                    <em>{place.hero.title[1]}</em>
                  </span>
                </Link>
                <div className="flex flex-col justify-between gap-6 p-6 md:p-7">
                  <div>
                    <p className="text-sm leading-[1.9] text-muted">{place.hero.lead}</p>
                    <dl className="mt-5 flex flex-wrap gap-5 text-[0.5rem] tracking-[0.1em] uppercase">
                      <div>
                        <dt>Story chapter</dt>
                        <dd className="mt-1.5 text-xs normal-case tracking-normal text-ink">
                          {place.story.chapter}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Link href={placeRoute(place.slug)} className="text-action">
                      Open {place.hero.title[0]}
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href={place.hero.ctaHref}
                      className="inline-flex min-h-11 items-center text-xs tracking-[0.02em] text-muted underline-offset-4 hover:underline"
                    >
                      {place.hero.cta} in Into the Quiet
                      <span aria-hidden="true"> ↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm leading-[1.9] text-muted">
          More {habitat.name.toLowerCase()} destinations will appear here once their pages are complete.{" "}
          <Link href={routes.journey} className="text-ink underline-offset-4 hover:underline">
            Walk Into the Quiet
          </Link>{" "}
          to move through the flagship journey now.
        </p>
      </section>
    </article>
  );
}
