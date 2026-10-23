import type { Metadata } from "next";
import Link from "next/link";
import {
  creditsIntro,
  creditsMapNote,
  imageGenerationDisclaimer,
  publishedAssets,
} from "@/lib/assets";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Credits",
  description: `${site.provenance} ${imageGenerationDisclaimer}`,
};

export default function CreditsPage() {
  return (
    <article className="px-[6%] py-12 md:py-16">
      <header className="max-w-2xl">
        <p className="kicker">{creditsIntro.kicker}</p>
        <h1 className="section-title mt-4">
          {creditsIntro.title[0]}
          <br />
          <em>{creditsIntro.title[1]}</em>
        </h1>
        <p className="mt-6 text-sm leading-[1.9] text-muted">{creditsIntro.lead}</p>
        <p className="mt-4 text-sm leading-[1.9] text-muted">{imageGenerationDisclaimer}</p>
      </header>

      <section aria-labelledby="published-assets-title" className="mt-10 md:mt-12">
        <h2 id="published-assets-title" className="kicker">
          Published landscape assets
        </h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {publishedAssets.map((asset) => (
            <li key={asset.id} className="py-8 first:pt-8 last:pb-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <h3 className="font-serif text-lg tracking-[-0.02em] text-ink">{asset.title}</h3>
                <p className="text-[0.625rem] tracking-[0.12em] uppercase text-muted">Generated scene</p>
              </div>
              <dl className="mt-4 grid gap-4 text-sm leading-[1.9] text-muted md:grid-cols-[minmax(0,11rem)_1fr] md:gap-x-6">
                <div className="md:contents">
                  <dt className="kicker text-muted">Fictional subject</dt>
                  <dd>{asset.fictionalSubject}</dd>
                </div>
                <div className="md:contents">
                  <dt className="kicker text-muted">Source files</dt>
                  <dd>
                    <code className="text-xs text-ink">{asset.originalFile}</code>
                    <span className="mx-2 text-line">·</span>
                    <code className="text-xs text-ink">{asset.webpFile}</code>
                  </dd>
                </div>
                <div className="md:contents">
                  <dt className="kicker text-muted">Generation</dt>
                  <dd>{asset.generationMethod}</dd>
                </div>
                <div className="md:contents">
                  <dt className="kicker text-muted">Accessibility intent</dt>
                  <dd>{asset.accessibilityIntent}</dd>
                </div>
                <div className="md:contents">
                  <dt className="kicker text-muted">Published on</dt>
                  <dd>
                    <ul className="list-inside list-disc space-y-1">
                      {asset.publishedOn.map((surface) => (
                        <li key={surface}>{surface}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="map-credit-title" className="mt-10 max-w-2xl md:mt-12">
        <h2 id="map-credit-title" className="kicker">
          Illustrated map
        </h2>
        <p className="mt-4 text-sm leading-[1.9] text-muted">{creditsMapNote}</p>
      </section>

      <p className="mt-12">
        <Link href={routes.about} className="text-action">
          About the fictional world
          <span aria-hidden="true">↗</span>
        </Link>
      </p>
    </article>
  );
}
