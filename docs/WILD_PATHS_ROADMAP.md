# Wild Paths — Revised Project Roadmap

Version: 0.2 proposal  
Date: 2026-10-19  
Status: A responsive visual prototype now demonstrates Home, Mossveil Forest, and a journey with photographic depth effects. The production application has not been implemented. See [WILD_PATHS_EXPERIENCE_SPEC.md](WILD_PATHS_EXPERIENCE_SPEC.md).

## 1. Product vision

Create a cinematic, photographic journey through an imagined wilderness. Visitors discover fictional habitats, explore a custom world map, read curated journeys and field notes, and eventually save destinations and maintain a private journal.

The owner selected a photographic, cinematic style with large landscapes and a clean interface, and permitted fictional settings. All project documentation is written in English. English interface copy is the provisional default.

The portfolio should demonstrate art direction, responsive design, accessible storytelling, interactive cartography, structured content, and, in the complete release, authenticated personal data and protected authoring.

## 2. Experience rules

1. Establish the visual identity with actual sample images and copy before expanding the application.
2. Keep navigation and reading usable without animation or audio.
3. Give each page a clear purpose and one primary next action.
4. Use a consistent photographic treatment across the fictional world.
5. Provide a list equivalent for every destination shown on the map.
6. Identify fictional places and paths clearly, including on direct-entry detail pages.
7. Design mobile layouts deliberately, including image crops and map alternatives.
8. Maintain a record of asset licenses, attribution, and provenance.

## 3. Scope and release boundaries

### Visual prototype

Build the homepage, one complete habitat journey, one destination detail, and an Explore composition with a simple illustrated map. Use structured local sample content. Validate desktop, mobile, reduced motion, and the core navigation flow.

This is a design milestone, not the complete product MVP.

### Public experience preview

Proposed content target:

- Three habitats: forest, water, and mountain.
- Six fictional destinations, with two per habitat.
- One flagship journey connecting the habitats in three chapters.
- Three short field notes tied to destinations.
- A fictional map and equivalent list with habitat filters.
- Complete about, credits, empty, loading, and error states.

The numbers are quality-focused planning targets and can be adjusted during discovery. Every published destination must have a complete detail page and a coherent asset set.

### Complete portfolio release

Add signed-in saved destinations, a private journal with create/read/update/delete operations, protected destination and article authoring, persistent storage, and a case study with evidence from the finished product.

Private journal entries and public field notes are distinct content types. Personal content is private by default and is not automatically published as editorial content.

### Later expansion

Optional ambient sound, additional journeys, seasonal asset sets, richer wildlife stories, and additional map layers can follow. Real-world route planning, public community features, offline navigation, and 3D terrain require a separate scope decision.

## 4. Information architecture

| Route | Purpose | Release |
|---|---|---|
| `/` | Introduce the world and lead into exploration | Preview |
| `/explore` | Destination list and illustrated map with shared filters | Preview |
| `/places/[slug]` | Fictional destination story, imagery, highlights, and related content | Preview |
| `/habitats/[slug]` | Forest, water, or mountain introduction and related destinations | Preview |
| `/journeys` | Curated journeys; use an editorial feature layout while only one exists | Preview |
| `/journeys/[slug]` | Chapter-based narrative | Preview |
| `/field-notes` | Public editorial stories | Preview |
| `/field-notes/[slug]` | Photo essay or nature story | Preview |
| `/about` | Creator perspective and explanation of the fictional world | Preview |
| `/credits` | Image credits and asset information | Preview |
| `/my-adventures` | Saved destinations and private journal | Complete release |
| `/admin` | Protected content authoring | Complete release |

Primary navigation: Explore, Journeys, Field Notes. About and Credits belong in the footer. My Adventures becomes a secondary navigation entry when implemented. Habitats are discovered through the homepage and explorer.

The separate trails index and wildlife encyclopedia from v0.1 are deferred. Paths can appear as narrative links on the fictional map without becoming a real-world hiking product.

## 5. Story and visual system

The initial journey follows a simple arc: arrival in a forest, a transition toward water, and an ascent into the mountains. These are narrative settings; final names and geography are still to be developed.

Each chapter contains an establishing image, a concise passage, a destination or detail to explore, and a clear continuation. Keep chapter navigation available without making visitors wait for an animation.

Build a reusable design system for colors, typography, spacing, image ratios, buttons, focus states, destination cards, editorial sections, chapter navigation, and map markers. The proposed palette, compositions, and motion rules are documented in [ROADMAP_REVIEW.md](ROADMAP_REVIEW.md).

## 6. Technical direction

These are architecture proposals inherited from or adapted from v0.1. Exact versions, provider capabilities, pricing, and deployment compatibility must be checked when implementation begins.

| Area | Initial approach | Expansion trigger |
|---|---|---|
| Application | Next.js, React, TypeScript | Retain unless a concrete requirement suggests a change |
| Styling | Tailwind CSS and shared design tokens | Add abstractions only after repeated patterns emerge |
| Content | Typed local records with stable IDs and slugs | Move persistent authoring to the database for the complete release |
| Motion | CSS transitions and one isolated story experiment | Evaluate one motion library if the experiment requires it |
| Map | Custom SVG world illustration with internal coordinates | Adopt a map engine only for an actual capability requirement |
| Database | PostgreSQL and Drizzle for persistent content and user data | Introduce during the persistence milestone |
| Authentication | Evaluate a maintained solution at the persistence milestone | Select after checking hosting, account flows, and authorization needs |
| Media | Optimized responsive images and an asset register | Add object storage when protected uploads are introduced |
| Quality | Type checking, linting, targeted behavior tests, browser flow checks, visual review | Broaden tests around accounts, permissions, and authoring |
| Hosting | Choose after the prototype's runtime and asset requirements are known | Verify deployment and storage compatibility before launch |

Do not add geographic tile services, PostGIS, a 3D engine, or two animation libraries by default. The fictional map stores illustration positions, not real latitude and longitude.

## 7. Content and data model

Initial content domains: habitats, places, journeys, journey chapters, articles, and photo assets. A chapter can reference places; a place has a primary habitat and can link to related articles.

Core place fields: ID, slug, title, habitat, summary, story, hero asset, gallery assets, highlights, map position, related content, fictional-content label, and publication status.

Asset fields: ID, source, creator, license or generation provenance, attribution, dimensions, focal point, crop variants, and alt-text intent. Public copy should distinguish actual image provenance from the imagined location.

Complete-release domains: users, saved places, adventure entries, and authorization roles. Saved places connect a user and a place; each journal entry belongs to a user and may reference a place. Private reads and writes must enforce ownership on the server.

Add further entities only when an implemented feature needs them. Do not seed empty wildlife, trail, or region tables merely because they appeared in the original domain list.

## 8. Revised milestones

| Phase | Deliverable | Exit criteria |
|---|---|---|
| N0 — Creative discovery | World premise, sample names, content outline, asset contact sheet | One coherent visual direction and a usable sample asset set; sources recorded |
| N1 — Art direction and storyboards | Desktop/mobile compositions for home, Explore, a destination, and a journey | Hierarchy, typography, crops, and static reading order reviewed |
| N2 — Functional visual prototype | Minimal application, shared components, one connected visitor journey, initial map | Home → Explore → destination → journey works on desktop and mobile; reduced motion works |
| N3 — Content expansion | Three habitats, six destinations, flagship journey, three field notes | Complete copy and imagery; consistent templates; no dead-end links or filler pages |
| N4 — Explorer and preview polish | Filters, list/map synchronization, keyboard behavior, responsive states | Filters persist across view changes; map failure leaves the list usable; preview quality gates pass |
| N5 — Persistence and personal adventures | Database, migrations, authentication, saved places, private journal | Data persists; users cannot read or modify another user's private content |
| N6 — Protected authoring | Destination/article editor, media uploads, publication workflow | Server-enforced permissions, validated uploads, and draft/published behavior verified |
| N7 — Full release verification | Responsive and accessibility checks, media optimization, deployment | Core guest, account, journal, and editor flows pass; asset credits and fiction labels complete |
| N8 — Portfolio case study | Walkthrough, implementation explanation, measured outcomes | Claims match shipped features; visual and performance evidence included |

Visual quality is reviewed at every phase. N4 may be published as an experience preview; the complete portfolio release requires N5–N7 as well.

## 9. Acceptance criteria

### Visual and editorial

- [ ] Hero imagery, mobile crops, typography, and spacing form a consistent identity.
- [ ] Each published destination has distinct imagery and complete copy.
- [ ] Page composition alternates cinematic and quiet reading sections deliberately.
- [ ] Fictional-world context and image provenance are clear.
- [ ] There are no placeholder destinations, broken images, or unfinished public pages.

### Navigation and interaction

- [ ] A guest can reach a destination and continue to related narrative content without signing in.
- [ ] Map and list expose the same destinations and filters.
- [ ] Selected, loading, empty, error, and unavailable states are understandable.
- [ ] Keyboard users can complete the same discovery flow as pointer users.
- [ ] Reduced motion preserves all information and actions; optional audio starts off.

### Responsive quality and performance

- [ ] Representative phone, tablet, and desktop layouts have been reviewed with actual content.
- [ ] Small-screen reflow and enlarged text do not hide content or controls.
- [ ] Hero delivery, image dimensions, deferred galleries, and map loading have been measured.
- [ ] Lab results are documented with device/network conditions; field targets are assessed when sufficient traffic exists.
- [ ] The quality targets and checks in ROADMAP_REVIEW.md are satisfied or any remaining limitations are explicitly recorded.

### Complete-release functionality

- [ ] Signed-in users can save and remove destinations.
- [ ] Users can create, edit, view, and delete their private journal entries.
- [ ] Ownership and editor permissions are enforced by the server.
- [ ] Authoring and upload flows validate input and respect publication status.
- [ ] The app can be reproduced from documented setup, environment configuration, migrations, and seed data.

## 10. Next deliverable

Create `WILD_PATHS_EXPERIENCE_SPEC.md` after selecting the sample asset set. It should lock the first journey storyboard, sample destination names, image direction, page compositions, responsive behavior, component inventory, and interaction states. It should record decisions reached through the prototype rather than restating an untested feature wishlist.
