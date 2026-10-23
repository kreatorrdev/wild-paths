import { SiteShell } from "@/components/site-shell";

export default function FrameLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell tone="hero">{children}</SiteShell>;
}
