import Link from "next/link";
import { SceneImage } from "@/components/scene-image";
import { getHabitatBySlug, habitatRoute } from "@/lib/habitats";
import type { PlaceContent } from "@/lib/places/types";

type PlacePageProps = {
  place: PlaceContent;
};

export function PlacePage({ place }: PlacePageProps) {
  const habitat = getHabitatBySlug(place.habitatSlug);
  const heroImageClassName = place.hero.imageClassName ?? "object-cover object-[57%_center]";
  const wideImageClassName = place.gallery.wide.imageClassName ?? "object-cover object-center";

  return (
    <article>
      <section
        aria-labelledby={`${place.slug}-title`}
        className="on-hero relative isolate min-h-[630px] text-cream md:min-h-[650px]"
      >
        <div className="absolute inset-0">
          <SceneImage
            src={place.hero.image}
            alt={place.hero.alt}
            presentation="hero"
            unavailableHref={place.hero.ctaHref}
            unavailableLabel={place.hero.cta}
            fill
            priority
            sizes="100vw"
            className={heroImageClassName}
          />
          <div className="hero-shade absolute inset-0" />
        </div>
        <div className="relative z-10 px-[6%] pt-36 pb-28 md:pt-32 md:pb-24">
          <p>
            <Link
              href={habitatRoute(place.habitatSlug)}
              className="inline-flex min-h-11 items-center py-1.5 text-[0.6875rem] tracking-[0.02em] text-cream"
            >
              <span aria-hidden="true">←</span>
              {habitat?.name ?? "Landscapes"}
            </Link>
          </p>
          <p className="kicker mt-8">{place.hero.kicker}</p>
          <h1 id={`${place.slug}-title`} className="display-title mt-4 text-cream">
            {place.hero.title[0]}
            <br />
            <em>{place.hero.title[1]}</em>
          </h1>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed">{place.hero.lead}</p>
          <p className="mt-7">
            <Link
              href={place.hero.ctaHref}
              className="inline-flex min-h-11 items-center gap-7 bg-paper px-5 py-3.5 text-xs tracking-[0.02em] text-pine hover:bg-cream"
            >
              {place.hero.cta}
              <span aria-hidden="true">↗</span>
            </Link>
          </p>
        </div>
        <p className="pointer-events-none absolute inset-x-[6%] bottom-6 z-10 flex items-end justify-between gap-5 text-[0.5rem] tracking-[0.15em] uppercase md:text-[0.5rem]">
          <span>{place.hero.tags[0]}</span>
          <span className="max-w-[7rem] text-right md:max-w-none">{place.hero.tags[1]}</span>
        </p>
      </section>

      <section
        aria-labelledby={`${place.slug}-story-title`}
        className="grid gap-6 px-[6%] py-11 md:grid-cols-[1.1fr_1fr] md:gap-[7%] md:py-[4.75rem] md:pb-[3.75rem]"
      >
        <div>
          <p className="kicker">{place.story.kicker}</p>
          <h2 id={`${place.slug}-story-title`} className="section-title mt-4">
            {place.story.titleLine1}
            <br />
            {place.story.titleLine2BeforeEm}
            <em>{place.story.titleLine2Em}</em>
          </h2>
        </div>
        <div>
          {place.story.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-5 text-sm leading-[1.9] text-muted last:mb-0">
              {paragraph}
            </p>
          ))}
          <dl className="mt-8 flex flex-wrap gap-6 border-t border-line pt-5 text-[0.5rem] tracking-[0.1em] uppercase">
            <div>
              <dt>Habitat</dt>
              <dd className="mt-1.5 text-xs normal-case tracking-normal text-ink">{place.story.habitat}</dd>
            </div>
            <div>
              <dt>Story chapter</dt>
              <dd className="mt-1.5 text-xs normal-case tracking-normal text-ink">{place.story.chapter}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section aria-label="Place imagery" className="grid gap-7 px-[6%] pb-10 md:grid-cols-[1.4fr_1fr] md:gap-6 md:pb-16">
        <figure>
          <div className="relative h-[290px] overflow-hidden md:h-[340px]">
            <SceneImage
              src={place.hero.image}
              alt={place.gallery.wide.alt}
              presentation="quiet"
              unavailableHref={place.next.href}
              unavailableLabel={place.next.cta}
              fill
              sizes="(min-width: 768px) 58vw, 88vw"
              className={wideImageClassName}
            />
          </div>
          <figcaption className="mt-3 text-[0.625rem] text-muted">{place.gallery.wide.caption}</figcaption>
        </figure>
        <figure>
          <div className="relative h-[290px] overflow-hidden md:h-[340px]">
            <SceneImage
              src={place.hero.image}
              alt={place.gallery.crop.alt}
              presentation="quiet"
              unavailableHref={place.next.href}
              unavailableLabel={place.next.cta}
              fill
              sizes="(min-width: 768px) 32vw, 88vw"
              className={place.gallery.crop.imageClassName}
            />
          </div>
          <figcaption className="mt-3 text-[0.625rem] text-muted">{place.gallery.crop.caption}</figcaption>
        </figure>
      </section>

      <section aria-label="Editorial quote" className="bg-mist px-[6%] py-11 text-center md:py-16">
        <p className="kicker">{place.quote.kicker}</p>
        <blockquote className="mx-auto mt-5 max-w-2xl font-serif text-[clamp(2.125rem,4.7vw,3.375rem)] leading-[1.22] tracking-[-0.03em]">
          “{place.quote.line1}
          <br />
          {place.quote.line2BeforeEm}
          <em>{place.quote.line2Em}</em>”
        </blockquote>
        <p className="mt-6 text-[0.5rem] tracking-[0.15em] uppercase">{place.quote.attribution}</p>
      </section>

      <section
        aria-labelledby={`${place.slug}-next-title`}
        className="grid items-center gap-8 px-[6%] py-11 md:grid-cols-2 md:gap-[7%] md:py-[4.75rem]"
      >
        <div className="relative h-[260px] overflow-hidden md:h-[310px]">
          <SceneImage
            src={place.next.image}
            alt={place.next.imageAlt}
            presentation="quiet"
            unavailableHref={place.next.href}
            unavailableLabel={place.next.cta}
            fill
            sizes="(min-width: 768px) 42vw, 88vw"
            className="object-cover object-center"
          />
        </div>
        <div>
          <p className="kicker">{place.next.kicker}</p>
          <h2 id={`${place.slug}-next-title`} className="section-title mt-4">
            {place.next.titleLine1}
            <br />
            {place.next.titleLine2Prefix} <em>{place.next.titleLine2Em}</em>
          </h2>
          <p className="mt-5 max-w-md text-[0.8125rem] leading-[1.9] text-muted">{place.next.lead}</p>
          <p className="mt-6">
            <Link href={place.next.href} className="text-action">
              {place.next.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>
    </article>
  );
}
