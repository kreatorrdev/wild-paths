"use client";

import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { useState } from "react";

type SceneImageProps = ImageProps & {
  alt: string;
  presentation: "hero" | "quiet" | "card";
  unavailableHref?: string;
  unavailableLabel?: string;
};

export function SceneImage({
  alt,
  presentation,
  unavailableHref,
  unavailableLabel,
  ...props
}: SceneImageProps) {
  const [failed, setFailed] = useState(false);
  const recovery =
    unavailableHref && unavailableLabel ? (
      <p className="mt-6">
        <Link
          href={unavailableHref}
          className={
            presentation === "hero"
              ? "inline-flex min-h-11 items-center gap-3.5 border-b border-white/40 py-2 text-xs text-cream"
              : "text-action"
          }
        >
          {unavailableLabel}
          <span aria-hidden="true"> →</span>
        </Link>
      </p>
    ) : null;

  if (failed && presentation === "hero") {
    return (
      <div className="absolute inset-0 z-20 flex flex-col justify-end bg-pine px-[6%] py-16 text-cream">
        <p className="kicker">Image unavailable</p>
        <p className="mt-4 max-w-lg font-serif text-[clamp(2.125rem,4vw,3.25rem)] leading-[1.12] tracking-[-0.045em]">
          This scene did not <em>load.</em>
        </p>
        <p className="sr-only">{alt}</p>
        <p className="mt-4 max-w-md text-sm leading-[1.9] text-cream/85">
          The photograph is missing. The rest of this page is still available.
        </p>
        {recovery}
      </div>
    );
  }

  if (failed && presentation === "quiet") {
    return (
      <div className="absolute inset-0 flex flex-col justify-end border border-line bg-mist px-5 py-6 text-ink">
        <p className="kicker">Image unavailable</p>
        <p className="sr-only">{alt}</p>
        <p className="mt-3 max-w-sm text-sm leading-[1.9] text-muted">
          This scene did not load. You can continue without it.
        </p>
        {recovery}
      </div>
    );
  }

  if (failed && presentation === "card") {
    return (
      <>
        <span className="absolute inset-0 bg-pine" />
        <span className="absolute top-5 left-5 z-10 text-[0.6875rem] tracking-[0.14em] text-cream uppercase">
          Scene unavailable
        </span>
        <span className="sr-only">{alt || "This scene did not load."}</span>
      </>
    );
  }

  return <Image {...props} alt={alt} onError={() => setFailed(true)} />;
}
