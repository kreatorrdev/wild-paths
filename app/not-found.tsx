import { SiteShell } from "@/components/site-shell";
import { UnavailablePath } from "@/components/unavailable-path";

export default function NotFound() {
  return (
    <SiteShell tone="paper">
      <UnavailablePath />
    </SiteShell>
  );
}
