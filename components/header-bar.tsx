import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { isCurrentPath, mainNavigation, routes } from "@/lib/site";

export type HeaderTone = "hero" | "paper";

type HeaderBarProps = {
  pathname: string | null;
  tone: HeaderTone;
};

export function HeaderBar({ pathname, tone }: HeaderBarProps) {
  const onHero = tone === "hero";
  const homeCurrent = pathname === routes.home;

  return (
    <header
      className={
        onHero
          ? "on-hero absolute inset-x-0 top-0 z-20 bg-transparent px-[6%] py-6 text-cream md:py-7"
          : "border-b border-line px-[6%] py-6 md:py-7"
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <Link
          href={routes.home}
          aria-current={homeCurrent ? "page" : undefined}
          className="shrink-0"
        >
          <Wordmark tagline />
        </Link>
        <nav aria-label="Main" className="ml-auto max-w-full">
          <ul className="flex flex-wrap justify-end gap-x-7 gap-y-1 text-xs">
            {mainNavigation.map((item) => {
              const current = isCurrentPath(item.href, pathname);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className="inline-flex min-h-11 items-center border-b border-transparent whitespace-nowrap hover:border-current aria-current:border-current"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
