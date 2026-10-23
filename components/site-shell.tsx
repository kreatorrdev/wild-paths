import { SiteFooter, type SiteFooterContent } from "@/components/site-footer";
import type { HeaderTone } from "@/components/header-bar";
import { SiteHeader } from "@/components/site-header";

type SiteShellProps = {
  tone: HeaderTone;
  children: React.ReactNode;
  footer?: SiteFooterContent;
};

export function SiteShell({ tone, children, footer }: SiteShellProps) {
  return (
    <>
      <SiteHeader tone={tone} />
      <main id="content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <SiteFooter content={footer} />
    </>
  );
}
