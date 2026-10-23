import { SiteShell } from "@/components/site-shell";

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell tone="paper">{children}</SiteShell>;
}
