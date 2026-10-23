import type { Metadata } from "next";
import Link from "next/link";
import { aboutContent } from "@/lib/about";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.disclosure} ${aboutContent.lead}`,
};

export default function AboutPage() {
  return (
    <article className="px-[6%] py-12 md:py-16">
      <header className="max-w-2xl">
        <p className="kicker">{aboutContent.kicker}</p>
        <h1 className="section-title mt-4">
          {aboutContent.title[0]}
          <br />
          <em>{aboutContent.title[1]}</em>
        </h1>
        <p className="mt-6 text-sm leading-[1.9] text-muted">{aboutContent.lead}</p>
        <p className="mt-4 text-[0.625rem] tracking-[0.12em] uppercase text-muted">{site.disclosure}</p>
      </header>

      <div className="mt-10 max-w-2xl space-y-10 md:mt-12">
        {aboutContent.sections.map((section) => (
          <section key={section.heading} aria-labelledby={section.heading.replace(/\s+/g, "-").toLowerCase()}>
            <h2
              id={section.heading.replace(/\s+/g, "-").toLowerCase()}
              className="font-serif text-xl tracking-[-0.03em] text-ink md:text-2xl"
            >
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-sm leading-[1.9] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12">
        <Link href={aboutContent.creditsLink.href} className="text-action">
          {aboutContent.creditsLink.label}
          <span aria-hidden="true">↗</span>
        </Link>
      </p>
    </article>
  );
}
