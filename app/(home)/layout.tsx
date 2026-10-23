import { SiteShell } from "@/components/site-shell";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell tone="hero">{children}</SiteShell>;
}
