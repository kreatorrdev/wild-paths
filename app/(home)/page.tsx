import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedFieldNoteForHome, fieldNoteRoute } from "@/lib/field-notes";
import { forestImage, heroImage, homeHabitats } from "@/lib/home";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "An imagined wilderness of quiet forests, still waters, and distant peaks.",
};

export default function HomePage() {
  const featuredFieldNote = getFeaturedFieldNoteForHome();

  return (
    <>
      <section aria-labelledby="home-title" className="on-hero relative isolate min-h-[640px] text-cream md:min-h-[620px]">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-[62%_center] md:object-[center_55%]"
          />
          <div className="hero-shade absolute inset-0" />
        </div>
        <div className="relative px-[6%] pt-56 pb-28 md:pt-44 md:pb-24">
          <p className="kicker">Less noise. More wonder.</p>
          <h1 id="home-title" className="display-title mt-4 max-w-3xl text-cream">
            Somewhere beyond
            <br />
            the <em>familiar.</em>
          </h1>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed">
            Quiet forests. Still waters. Distant peaks.
            <br />
            A little further from the everyday.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-7">
            <Link
              href={routes.journey}
              className="inline-flex min-h-11 items-center gap-7 rounded-lg bg-paper px-5 py-3.5 text-xs tracking-[0.02em] text-pine hover:bg-cream"
            >
              Begin the journey
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href={routes.explore}
              className="inline-flex min-h-11 items-center gap-3.5 border-b border-white/40 py-2 text-xs text-cream"
            >
              Explore the landscapes
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <p className="pointer-events-none absolute inset-x-[6%] bottom-6 flex items-end justify-between gap-5 text-[0.6875rem] tracking-[0.14em] uppercase">
          <span>01 / Stillwater Mere</span>
          <span className="max-w-[9rem] text-right md:max-w-none">
            A world made for wandering <span aria-hidden="true">↓</span>
          </span>
        </p>
      </section>

      <section id="habitats" aria-labelledby="habitats-title" className="scroll-mt-8">
        <div className="grid items-end gap-8 px-[6%] pt-16 pb-8 md:grid-cols-[1.1fr_1fr] md:gap-10 md:pt-[4.5rem] md:pb-10">
          <div>
            <p className="kicker">Follow your curiosity</p>
            <h2 id="habitats-title" className="section-title mt-4">
              Find your kind of <em>elsewhere.</em>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-[1.9] text-muted">
            Some places invite you to slow down.
            <br />
            Others ask you to look a little closer.
            <br />
            Choose a landscape. See where it takes you.
          </p>
        </div>
        <ul className="grid gap-4 px-[6%] pb-12 md:grid-cols-3 md:gap-5 md:pb-[4.5rem]">
          {homeHabitats.map((habitat) => (
            <li key={habitat.href}>
              <Link
                href={habitat.href}
                className="group relative block min-h-[290px] text-cream md:min-h-[325px]"
              >
                <span className="absolute inset-0 overflow-hidden">
                  <Image
                    src={habitat.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 30vw, 88vw"
                    className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.04]"
                  />
                  <span className="habitat-shade absolute inset-0" />
                </span>
                <span className="absolute top-5 left-5 text-[0.6875rem] tracking-[0.14em] uppercase">
                  {habitat.number} / {habitat.name}
                </span>
                <span className="absolute inset-x-5 bottom-6 flex items-end justify-between gap-4">
                  <span className="font-serif text-[2rem] leading-[1.13] tracking-[-0.03em] md:text-[2.15rem]">
                    {habitat.lines[0]}
                    <br />
                    {habitat.lines[1]}
                  </span>
                  <span aria-hidden="true" className="font-sans text-2xl">
                    ↗
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="journey-title" className="grid bg-pine text-paper md:grid-cols-[1.1fr_1fr]">
        <div className="relative min-h-[310px] md:min-h-[470px]">
          <Image
            src={forestImage.src}
            alt={forestImage.alt}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="self-center px-[7%] py-12 md:px-[13%] md:py-16">
          <p className="kicker">The first journey / three chapters</p>
          <h2 id="journey-title" className="mt-4 font-serif text-[3.375rem] leading-[1.05] tracking-[-0.045em] md:text-[4rem]">
            Into
            <br />
            the <em>quiet.</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-[1.9] text-paper/80">
            From the hush beneath the trees to the open air above them. A journey through a world that moves at its own pace.
          </p>
          <p className="mt-6">
            <Link
              href={routes.journey}
              className="inline-flex min-h-11 items-center gap-3.5 border-b border-white/40 py-2 text-xs text-paper"
            >
              Step inside the story
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      <section
        id="field-notes"
        aria-labelledby="field-notes-title"
        className="grid scroll-mt-8 items-center gap-8 px-[6%] py-16 md:grid-cols-2 md:gap-[10%] md:py-20"
      >
        <div>
          <p className="kicker">
            {featuredFieldNote?.index.kicker ?? "Field note / an imagined moment"}
          </p>
          <h2 id="field-notes-title" className="section-title mt-4">
            {featuredFieldNote ? (
              <>
                {featuredFieldNote.index.titleLine1}{" "}
                <em>
                  {featuredFieldNote.index.titleLine2BeforeEm}
                  {featuredFieldNote.index.titleLine2Em}
                </em>
              </>
            ) : (
              <>
                The art of <em>looking closer.</em>
              </>
            )}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-[1.9] text-muted">
            {featuredFieldNote?.index.excerpt ??
              "At the foot of an old tree, a smaller world unfolds. Ferns catch the light. Moss softens every edge. For a moment, there is nowhere else to be."}
          </p>
          <p className="mt-6 flex flex-col items-start gap-3">
            {featuredFieldNote ? (
              <Link href={fieldNoteRoute(featuredFieldNote.slug)} className="text-action">
                Read the field note
                <span aria-hidden="true"> →</span>
              </Link>
            ) : null}
            <Link href={routes.mossveilForest} className="text-action">
              Discover Mossveil Forest
              <span aria-hidden="true">↗</span>
            </Link>
          </p>
        </div>
        <div className="relative h-[300px] overflow-hidden md:h-[370px]">
          <Image
            src={forestImage.src}
            alt={forestImage.cropAlt}
            fill
            sizes="(min-width: 768px) 42vw, 88vw"
            className="origin-[10%_92%] scale-[2.1] object-cover object-[10%_92%]"
          />
        </div>
      </section>
    </>
  );
}
