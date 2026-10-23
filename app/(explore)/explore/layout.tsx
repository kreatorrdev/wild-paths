import { SiteShell } from "@/components/site-shell";

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell tone="paper">{children}</SiteShell>;
}
