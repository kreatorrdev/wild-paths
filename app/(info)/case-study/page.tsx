import type { Metadata } from "next";
import Link from "next/link";
import { caseStudyContent, caseStudyLab } from "@/lib/case-study";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case study",
  description:
    "A walkthrough of the shipped Wild Paths demo: interactive illustration and storytelling, without accounts or a content-management system.",
};

export default function CaseStudyPage() {
  return (
    <article className="px-[6%] py-12 md:py-16">
      <header className="max-w-2xl">
        <p className="kicker">{caseStudyContent.kicker}</p>
        <h1 className="section-title mt-4">
          {caseStudyContent.title[0]}
          <br />
          <em>{caseStudyContent.title[1]}</em>
        </h1>
        <p className="mt-6 text-sm leading-[1.9] text-muted">{caseStudyContent.lead}</p>
        <p className="mt-4 text-[0.625rem] tracking-[0.12em] uppercase text-muted">{site.disclosure}</p>
      </header>

      <section aria-labelledby="walkthrough-title" className="mt-12 max-w-3xl md:mt-16">
        <h2 id="walkthrough-title" className="font-serif text-xl tracking-[-0.03em] md:text-2xl">
          Walkthrough
        </h2>
        <ol className="mt-6 space-y-8">
          {caseStudyContent.walkthrough.map((step) => (
            <li key={step.step} className="border-t border-line pt-6">
              <p className="kicker">{step.step}</p>
              <h3 className="mt-3 font-serif text-2xl tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-[1.9] text-muted">{step.text}</p>
              <p className="mt-4">
                <Link href={step.href} className="text-action">
                  {step.label}
                  <span aria-hidden="true"> →</span>
                </Link>
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-14 grid max-w-5xl gap-12 md:mt-16 md:grid-cols-2 md:gap-16">
        <section aria-labelledby="present-title">
          <h2 id="present-title" className="font-serif text-xl tracking-[-0.03em] md:text-2xl">
            What is present
          </h2>
          <ul className="mt-5 space-y-4">
            {caseStudyContent.present.map((item) => (
              <li key={item} className="text-sm leading-[1.9] text-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="absent-title">
          <h2 id="absent-title" className="font-serif text-xl tracking-[-0.03em] md:text-2xl">
            What this release does not include
          </h2>
          <ul className="mt-5 space-y-4">
            {caseStudyContent.absent.map((item) => (
              <li key={item} className="text-sm leading-[1.9] text-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section aria-labelledby="quiet-states-title" className="mt-14 max-w-3xl md:mt-16">
        <h2 id="quiet-states-title" className="font-serif text-xl tracking-[-0.03em] md:text-2xl">
          Quiet states
        </h2>
        <ul className="mt-6 space-y-6">
          {caseStudyContent.quietStates.map((state) => (
            <li key={state.title}>
              <h3 className="font-serif text-lg tracking-[-0.03em]">{state.title}</h3>
              <p className="mt-2 text-sm leading-[1.9] text-muted">{state.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="release-check-title" className="mt-14 max-w-3xl border-t border-line pt-10 md:mt-16">
        <h2 id="release-check-title" className="font-serif text-xl tracking-[-0.03em] md:text-2xl">
          Release check
        </h2>
        <p className="mt-4 text-sm leading-[1.9] text-muted">
          {caseStudyLab.recorded}. {caseStudyLab.environment}
        </p>
        <ul className="mt-6 space-y-3">
          {caseStudyLab.viewports.map((item) => (
            <li key={item} className="text-sm leading-[1.9] text-muted">
              {item}
            </li>
          ))}
          {caseStudyLab.checks.map((item) => (
            <li key={item} className="text-sm leading-[1.9] text-muted">
              {item}
            </li>
          ))}
        </ul>
        <h3 className="mt-8 font-serif text-lg tracking-[-0.03em]">Limits</h3>
        <ul className="mt-4 space-y-3">
          {caseStudyLab.limits.map((item) => (
            <li key={item} className="text-sm leading-[1.9] text-muted">
              {item}
            </li>
          ))}
          {caseStudyLab.measurements.map((item) => (
            <li key={item} className="text-sm leading-[1.9] text-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
