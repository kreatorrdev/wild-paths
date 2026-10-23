import { SiteShell } from "@/components/site-shell";

export default function FieldNotesLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell tone="paper">{children}</SiteShell>;
}
