# Wild Paths — Feature Breakdown

Date: 2026-10-22  
Status: Working list for the portfolio demo. Implementation has not started.  
Related: [WILD_PATHS_ROADMAP.md](WILD_PATHS_ROADMAP.md), [WILD_PATHS_EXPERIENCE_SPEC.md](WILD_PATHS_EXPERIENCE_SPEC.md)

This file is the build order. The roadmap remains the phase plan. Each item below is one visitor-facing feature, small enough to build and check on its own. It does not list components, CSS, or implementation steps.

The interface language is English. The visual source for the first application is the prototype in `design/preview.html`, using the existing generated images.

## Locked decisions

- The site is a public portfolio demo: a fictional wilderness, told through photography, pages, and one interactive journey.
- Accounts, saved places, a private journal, admin authoring, and a database are out of the demo.
- Content lives in the repository as typed local records.
- The first application is three screens: Home, Mossveil Forest, and the Into the Quiet journey.
- Explore, the illustrated map, the remaining destinations, field-note articles, About, and Credits follow after those three screens work.
- The art-direction board stays in `design/` and is not a public page.

## How to read a feature

| Field | Meaning |
|---|---|
| Purpose | Why the feature exists |
| Visitor can | What a person can do when it is finished |
| Depends on | What must already exist |
| Done when | The checks that mark it complete |

Until a later feature has its own page, the first application uses these temporary routes:

| Control | Opens |
|---|---|
| Explore | The habitat section on Home |
| Forests | Mossveil Forest |
| Waters | Into the Quiet, at Stillwater Mere |
| Mountains | Into the Quiet, at Cloudrest Ridge |
| Field notes | The field-note excerpt on Home |
| Stillwater continuation on Mossveil | Into the Quiet, at Stillwater Mere |

A URL can open a journey chapter directly. Waters and Mountains use that URL. They do not pretend to be destination pages that do not exist yet.

## First application

### 1. Site frame

**Purpose.** Give every page the same identity, navigation, and fictional-world disclosure.

**Visitor can.**

- Recognize Wild Paths and the line “An imagined wilderness” on every page.
- Move among Home, Journeys, and the current Explore and Field notes targets from the header.
- Read the fiction disclosure and image provenance in the footer.
- Reach the same destinations with a keyboard as with a pointer.
- Use the site on a phone without losing the header, the primary action, or the footer.

**Depends on.** The approved palette, wordmark, and English copy from the prototype.

**Done when.** Home, Mossveil Forest, and Into the Quiet share one header and footer. Focus is visible. Reduced motion does not remove navigation. There is no account entry, saved-places entry, or admin link.

### 2. Home

**Purpose.** Open the world and offer one obvious next step.

**Visitor can.**

- See the Stillwater Mere hero, the invitation, and the primary action “Begin the journey”.
- Scan three habitats: Forests, Waters, and Mountains.
- Open the featured journey, Into the Quiet.
- Read the field-note excerpt and continue to Mossveil Forest.
- Use the temporary routes in the table above.

**Depends on.** Site frame. The Stillwater Mere, Mossveil Forest, and Cloudrest Ridge images.

**Done when.** The page follows the prototype sequence: hero, habitats, featured journey, field-note excerpt, footer. Forests opens Mossveil Forest. Waters and Mountains open the matching journey chapters. The page is readable at phone and desktop widths.

### 3. Mossveil Forest

**Purpose.** Make the first destination feel specific and connect it to the journey.

**Visitor can.**

- Read the Mossveil Forest story, habitat, and chapter context.
- View the wide forest image and the identified detail crop.
- Read the editorial quote.
- Continue to Stillwater Mere through the journey.
- Return to the landscapes on Home.

**Depends on.** Site frame and Home. The Mossveil Forest image, including its detail crop.

**Done when.** The route is `/places/mossveil-forest`. Copy, crops, and the fictional-place label match the prototype. The continuation opens Into the Quiet at Stillwater Mere. The detail image is labeled as a crop of the establishing image.

### 4. Journey

**Purpose.** Deliver the signature passage through Mossveil Forest, Stillwater Mere, and Cloudrest Ridge.

**Visitor can.**

- Start “Walk forward” and pause at the current position.
- Move with the travel slider, including backward.
- Jump to Beneath the canopy, Along still water, or Above the clouds.
- Shift the viewpoint by moving the pointer, or by touching the scene on a coarse pointer, while normal page scrolling still works.
- Turn on reduced motion and advance one chapter at a time.
- Leave the journey and open the Mossveil Forest story.

**Depends on.** Site frame. All four existing images, including the transparent forest foreground.

**Done when.** The route is `/journeys/into-the-quiet`. Playback starts only after an explicit action and stops when the page is hidden or the scene leaves view. Reduced motion removes spatial movement and continuous playback, and keeps every chapter reachable. A direct link can open the lake chapter and the mountain chapter. There is no audio and no automatic camera movement on load.

## Public world

These features start after the first application is accepted. Each published destination still needs its own imagery and a complete detail page.

### 5. More places

**Purpose.** Give the world more than one destination page.

**Visitor can.**

- Open a complete page for each published place.
- Tell places apart by story, imagery, and habitat.
- Continue from a place into a related chapter or field note.

**Depends on.** Mossveil Forest as the page template. A finished asset set for each new place.

**Done when.** Stillwater Mere and Cloudrest Ridge have their own pages first. Fern Hollow, Silverthread Falls, and Emberstone Summit are added only when each has distinct imagery and complete copy. No page repeats another place’s hero as if it were a new view.

### 6. Habitats

**Purpose.** Introduce forest, water, and mountain as collections of places.

**Visitor can.**

- Open a habitat and see its published destinations.
- Continue into a place or the related journey chapter.

**Depends on.** More places, at least one published place per habitat being introduced.

**Done when.** Each published habitat has an introduction and only lists places that have complete pages. Empty habitats are not linked in public navigation.

### 7. Explore

**Purpose.** Browse every published destination without a second cinematic introduction.

**Visitor can.**

- Filter destinations by habitat.
- Read a list of the same destinations the map will show.
- Open a destination detail page.
- See a clear empty state when a filter matches nothing.

**Depends on.** More places. Site frame, with Explore pointed at this page instead of the Home section.

**Done when.** The route is `/explore`. The list is usable on a phone before any map is opened. Filters survive a refresh of the results. Every list item has a working detail page.

### 8. Illustrated map

**Purpose.** Show the fictional region as a designed drawing and keep it tied to the list.

**Visitor can.**

- See the same published destinations as markers on an illustrated map.
- Select a marker, read a short preview, and open its detail page.
- Apply the same habitat filters as the list.
- Keep using the list if the map cannot load.

**Depends on.** Explore. Stable place ids and illustration coordinates, not real latitude and longitude.

**Done when.** List and map share one set of destinations, filters, and selection. The fiction disclosure is visible on the map. Keyboard users can reach every marker’s destination. The mobile default remains the list, with the map as an explicit choice.

### 9. Field notes

**Purpose.** Publish the quieter editorial stories as real articles.

**Visitor can.**

- Browse public field notes.
- Read a note with its lead image, essay, and captions.
- Continue to the related place.

**Depends on.** At least one complete note and its images. Site frame, with Field notes pointed at this index instead of the Home excerpt.

**Done when.** `/field-notes` lists only finished notes, and each note has its own page. The Home excerpt can remain, and it links to a real note once one exists. Notes stay public editorial content. They are not personal journal entries.

### 10. About and credits

**Purpose.** Explain the fictional world and record where the images come from.

**Visitor can.**

- Read why the places are imagined.
- Read image credits, including generation provenance and the distinction between a real image source and a fictional location.

**Depends on.** The asset register. The public pages that use those assets.

**Done when.** About and Credits are linked from the footer. Credits match the images actually published. Generated scenes are not described as documentary photographs.

## Demo completion

### 11. Quiet states

**Purpose.** Make failure and emptiness understandable in the same visual system as the main pages.

**Visitor can.**

- Understand an empty filter result, a missing image, an unavailable destination, and a map that did not load.
- Continue by another visible route in each case.

**Depends on.** Explore. The map, once that feature exists.

**Done when.** Each of those states has designed copy and a working next step. A broken image or map does not leave a blank page with no list or link.

### 12. Release check

**Purpose.** Confirm the public demo is readable, operable, and honest about what it contains.

**Visitor can.**

- Complete the discovery flow on a phone, a tablet, and a desktop width.
- Enlarge text and still reach the content and controls.
- Use the reduced-motion version as a complete version of the site.

**Depends on.** The features included in the demo release.

**Done when.** Keyboard access, visible focus, headings, image descriptions, and contrast are checked. Hero loading, deferred galleries, and map loading are measured in a reproducible lab check. Any remaining limit is written down. The fiction disclosure and credits match the shipped pages.

### 13. Case study

**Purpose.** Explain the finished demo as a portfolio piece.

**Visitor can.**

- Follow a walkthrough of the shipped experience.
- See which features are actually present.

**Depends on.** Release check.

**Done when.** The case study claims only shipped behavior. It describes interactive illustration and storytelling. It does not claim accounts, a content-management system, or real-world navigation.

## Out of the demo

These stay out of the feature list. They are not postponed items waiting for an empty page.

| Removed | Reason |
|---|---|
| Accounts and sign-in | The demo has no private user |
| Saved places and My Adventures | Nothing is stored for a visitor |
| Private journal | Public field notes are the only editorial form |
| Admin and protected authoring | Content is edited in the repository |
| Database and authentication | Typed local records are enough for the demo |
| Real-world routes, trail data, and geographic tiles | Places and paths are fictional |
| Ambient audio | It was optional later work, and it stays off |
