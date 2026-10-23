import type { StaticImageData } from "next/image";
import type { SiteFooterContent } from "@/components/site-footer";

export type FieldNoteFigure = {
  image: StaticImageData;
  alt: string;
  imageClassName: string;
  caption: string;
};

export type FieldNoteContent = {
  slug: string;
  featuredOnHome?: boolean;
  index: {
    kicker: string;
    titleLine1: string;
    titleLine2BeforeEm: string;
    titleLine2Em: string;
    excerpt: string;
    listImage: StaticImageData;
    listImageAlt: string;
    listImageClassName: string;
  };
  article: {
    kicker: string;
    titleLine1: string;
    titleLine2BeforeEm: string;
    titleLine2Em: string;
    lead: string;
    paragraphs: readonly string[];
    leadFigure: FieldNoteFigure;
    figures: readonly FieldNoteFigure[];
  };
  relatedPlace: {
    slug: string;
    name: string;
    href: string;
    lead: string;
    cta: string;
    image: StaticImageData;
    imageAlt: string;
    imageClassName?: string;
  };
  footer: SiteFooterContent;
};
