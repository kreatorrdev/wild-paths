import { routes } from "@/lib/site";

export const caseStudyContent = {
  kicker: "Portfolio case study",
  title: ["A walk through", "the shipped demo."],
  lead: "Wild Paths is a public portfolio piece: one fictional region, told with generated landscape scenes, destination pages, and a single interactive journey. This page describes only what the site actually does.",
  walkthrough: [
    {
      step: "01",
      title: "Open the world",
      text: "Home opens on Stillwater Mere, with one primary action, Begin the journey. Forests, Waters, and Mountains are the next scan. The featured journey and the field-note excerpt sit below.",
      href: routes.home,
      label: "Go to Home",
    },
    {
      step: "02",
      title: "Choose a landscape",
      text: "Explore lists six published places and can filter them by forest, water, or mountain. The same places appear as markers on an illustrated map. The map is a drawing with designed positions, not a geographic map.",
      href: routes.explore,
      label: "Open Explore",
    },
    {
      step: "03",
      title: "Read a place",
      text: "Six places each have a story, a habitat, a wide view, and a labeled detail crop of their own generated scene. Mossveil Forest, Stillwater Mere, and Cloudrest Ridge are also the three chapters of Into the Quiet. Fern Hollow, Silverthread Falls, and Emberstone Summit continue into the related chapter and into a neighboring place.",
      href: routes.mossveilForest,
      label: "Read Mossveil Forest",
    },
    {
      step: "04",
      title: "Walk the journey",
      text: "Into the Quiet moves through Mossveil Forest, Stillwater Mere, and Cloudrest Ridge. Playback starts only after Walk forward. A slider can move forward or back. Chapter buttons jump to a place. Pointer or touch can shift the viewpoint while the page still scrolls. Reduced motion advances one chapter at a time and removes that spatial movement. There is no audio and no camera move on load.",
      href: routes.journey,
      label: "Begin Into the Quiet",
    },
    {
      step: "05",
      title: "Read the note",
      text: "The art of looking closer is the one published field note. It is public editorial writing, with a lead image and a continuation to Mossveil Forest. It is not a private journal.",
      href: "/field-notes/looking-closer",
      label: "Read the field note",
    },
  ],
  present: [
    "Shared header and footer, with the fiction disclosure and image provenance on every page.",
    "Home, three habitat introductions, six destination pages, Explore with list and illustrated map, one field note, and Into the Quiet.",
    "About and Credits, linked from the footer. Credits describe generated scenes, not documentary photographs.",
    "Quiet states for an empty or unknown habitat filter, a map that does not load, a scene image that fails, and a path that is not published.",
    "Keyboard access to the same destinations, visible focus, and a reduced-motion journey that still reaches every chapter.",
  ],
  absent: [
    "Accounts, sign-in, saved places, and a private journal.",
    "Admin authoring, a database, and a content-management system. Copy and images live in the repository as typed records.",
    "Real trails, geographic tiles, or latitude and longitude.",
    "Ambient audio.",
    "Fern Hollow, Silverthread Falls, and Emberstone Summit. They stay unpublished until each has its own imagery and complete copy.",
  ],
  quietStates: [
    {
      title: "Empty filter",
      text: "An unknown habitat filter explains that the filter is not available and links back to every published destination, or into the journey.",
    },
    {
      title: "Map unavailable",
      text: "If the illustrated map fails, the destination list remains the way through. A query on the Explore page can show that state directly.",
    },
    {
      title: "Missing image",
      text: "When a scene fails to load, the frame says so and offers the next published page. Cards keep their place name and link. The journey keeps its chapter controls.",
    },
    {
      title: "Unpublished path",
      text: "A place, habitat, or note that is not in the demo shows one explanation and links to Explore, Home, and Into the Quiet.",
    },
  ],
} as const;

export const caseStudyLab = {
  recorded: "23 October 2026",
  environment:
    "Local Next.js 16.4.2 development server on Windows, viewed in an embedded browser at localhost. This is a lab check, not field traffic.",
  viewports: [
    "390px wide: no horizontal overflow. Habitat cards stack. The header, title, and Begin the journey are present, and the footer links to About, this case study, and Credits.",
    "768px wide: the three habitat cards share one row, and the featured journey splits into image and text. No horizontal overflow.",
    "1280px wide: the three habitat cards stay in one row. No horizontal overflow.",
  ],
  checks: [
    "Text size: with the root font at 150 percent on the desktop width, Home does not scroll sideways. The title and Begin the journey remain, and the footer is still in the page.",
    "Reduced motion: Into the Quiet offers Next chapter instead of continuous playback, page scrolling is instant, and the header stays available.",
    "Direct chapters: the Stillwater Mere and Cloudrest Ridge hashes open those chapters.",
    "Quiet states: an unknown habitat filter, a map that fails, a scene image that fails, and an unpublished path each show an explanation and a next link.",
  ],
  limits: [
    "The timings below are one warm load of the local development server after the route had already compiled. They are not a production Lighthouse run and do not represent a visitor network.",
    "Scripted focus in this embedded browser does not paint the focus ring, because the page is not the operating-system focus. The focus style is in the stylesheet. Skip link, header, primary actions, and footer links are real links in the page.",
    "The illustrated map is loaded in the browser after the page, not in the first HTML. Its failure state appears once that script runs.",
    "Only one field note is published. The journey still has three chapters; the other three places join that passage from their own pages.",
  ],
  measurements: [
    "On that Home load: first byte about 177 ms, first contentful paint about 292 ms, DOMContentLoaded about 259 ms, and the load event about 434 ms.",
    "The largest Stillwater Mere response in that same load was about 89 KB. A Mossveil Forest response in the same load was about 69 KB. The hero image is requested with eager loading.",
  ],
} as const;
