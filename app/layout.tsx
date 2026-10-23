import type { Metadata, Viewport } from "next";
import { SkipLink } from "@/components/skip-link";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: `${site.disclosure} ${site.provenance}`,
};

export const viewport: Viewport = {
  themeColor: "#142B24",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="relative flex min-h-dvh flex-col bg-paper font-sans text-ink antialiased">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
