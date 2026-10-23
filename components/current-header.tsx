"use client";

import { usePathname } from "next/navigation";
import { HeaderBar, type HeaderTone } from "@/components/header-bar";

type CurrentHeaderProps = {
  tone: HeaderTone;
};

export function CurrentHeader({ tone }: CurrentHeaderProps) {
  return <HeaderBar tone={tone} pathname={usePathname()} />;
}
