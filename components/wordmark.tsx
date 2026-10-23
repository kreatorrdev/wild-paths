import { site } from "@/lib/site";

type WordmarkProps = {
  tagline?: boolean;
};

export function Wordmark({ tagline = false }: WordmarkProps) {
  return (
    <span className="block text-[0.95rem] leading-snug font-medium tracking-[0.18em] uppercase md:text-lg md:tracking-[0.2em]">
      <span className="block whitespace-nowrap">{site.name}</span>
      {tagline ? (
        <span className="mt-1.5 block text-[0.625rem] font-normal tracking-[0.22em]">
          {site.tagline}
        </span>
      ) : null}
    </span>
  );
}
