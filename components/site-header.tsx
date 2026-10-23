import { Suspense } from "react";
import { CurrentHeader } from "@/components/current-header";
import { HeaderBar, type HeaderTone } from "@/components/header-bar";

export type { HeaderTone };

type SiteHeaderProps = {
  tone?: HeaderTone;
};

export function SiteHeader({ tone = "paper" }: SiteHeaderProps) {
  return (
    <Suspense fallback={<HeaderBar tone={tone} pathname={null} />}>
      <CurrentHeader tone={tone} />
    </Suspense>
  );
}
