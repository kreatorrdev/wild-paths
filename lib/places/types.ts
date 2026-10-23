import type { StaticImageData } from "next/image";
import type { SiteFooterContent } from "@/components/site-footer";

export type HabitatSlug = "forests" | "waters" | "mountains";

/** Illustration coordinates on the fictional region map (0–100, not geographic). */
export type MapPosition = {
  x: number;
  y: number;
};

export type PlaceContent = {
  slug: string;
  habitatSlug: HabitatSlug;
  mapPosition: MapPosition;
  hero: {
    image: StaticImageData;
    alt: string;
    imageClassName?: string;
    kicker: string;
    title: [string, string];
    lead: string;
    tags: [string, string];
    cta: string;
    ctaHref: string;
  };
  story: {
    kicker: string;
    titleLine1: string;
    titleLine2BeforeEm: string;
    titleLine2Em: string;
    paragraphs: readonly string[];
    habitat: string;
    chapter: string;
  };
  gallery: {
    wide: {
      alt: string;
      caption: string;
      imageClassName?: string;
    };
    crop: {
      alt: string;
      caption: string;
      imageClassName: string;
    };
  };
  quote: {
    kicker: string;
    line1: string;
    line2BeforeEm: string;
    line2Em: string;
    attribution: string;
  };
  next: {
    image: StaticImageData;
    imageAlt: string;
    kicker: string;
    titleLine1: string;
    titleLine2Prefix: string;
    titleLine2Em: string;
    lead: string;
    cta: string;
    href: string;
  };
  footer: SiteFooterContent;
};
