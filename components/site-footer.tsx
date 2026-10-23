import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { routes, site } from "@/lib/site";

export type SiteFooterContent = {
  disclosure: string;
  provenance: string;
  signOff: string;
};

type SiteFooterProps = {
  content?: SiteFooterContent;
};

export function SiteFooter({ content }: SiteFooterProps) {
  const disclosure = content?.disclosure ?? site.disclosure;
  const provenance = content?.provenance ?? site.provenance;
  const signOff = content?.signOff ?? site.signOff;

  return (
    <footer className="mt-auto border-t border-line px-[6%] py-8">
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between md:gap-7">
        <Link href={routes.home} className="shrink-0">
          <Wordmark />
        </Link>
        <div className="max-w-sm">
          <p className="text-[0.6875rem] leading-relaxed text-muted">
            {disclosure}
            <span className="mt-1 block">{provenance}</span>
          </p>
          <nav aria-label="Site information" className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            <Link
              href={routes.about}
              className="inline-flex min-h-11 items-center py-1 text-[0.6875rem] tracking-[0.06em] text-ink underline decoration-line underline-offset-[0.35em] hover:decoration-pine"
            >
              About
            </Link>
            <Link
              href={routes.caseStudy}
              className="inline-flex min-h-11 items-center py-1 text-[0.6875rem] tracking-[0.06em] text-ink underline decoration-line underline-offset-[0.35em] hover:decoration-pine"
            >
              Case study
            </Link>
            <Link
              href={routes.credits}
              className="inline-flex min-h-11 items-center py-1 text-[0.6875rem] tracking-[0.06em] text-ink underline decoration-line underline-offset-[0.35em] hover:decoration-pine"
            >
              Credits
            </Link>
          </nav>
        </div>
        <p className="text-[0.6875rem] tracking-[0.13em] uppercase">{signOff}</p>
      </div>
    </footer>
  );
}
