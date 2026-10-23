import Image from "next/image";
import Link from "next/link";
import type { ExploreDestinationRecord } from "@/lib/explore";

type ExploreDestinationPreviewProps = {
  destination: ExploreDestinationRecord;
};

export function ExploreDestinationPreview({ destination }: ExploreDestinationPreviewProps) {
  return (
    <article className="border border-line bg-paper">
      <div className="relative h-40 w-full overflow-hidden md:h-44">
        <Image
          src={destination.imageSrc}
          alt=""
          fill
          sizes="(min-width: 768px) 40vw, 88vw"
          className="object-cover object-center"
        />
        <span className="habitat-shade absolute inset-0" />
        <p className="absolute inset-x-5 bottom-4 font-serif text-[1.5rem] leading-[1.12] tracking-[-0.03em] text-cream">
          {destination.title[0]}
          <br />
          <em>{destination.title[1]}</em>
        </p>
      </div>
      <div className="space-y-4 p-5 md:p-6">
        <p className="kicker">{destination.habitatName}</p>
        <p className="text-sm leading-[1.9] text-muted">{destination.summary}</p>
        <dl className="flex flex-wrap gap-5 text-[0.5rem] tracking-[0.1em] uppercase">
          <div>
            <dt>Story chapter</dt>
            <dd className="mt-1.5 text-xs normal-case tracking-normal text-ink">{destination.chapter}</dd>
          </div>
        </dl>
        <Link href={destination.href} className="text-action">
          Open destination page
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  );
}
