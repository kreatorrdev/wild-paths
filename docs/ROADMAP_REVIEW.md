# Wild Paths — Roadmap Review

Date: 2026-10-19  
Status: Review and recommendations; implementation has not started.

## Context and confirmed direction

This review evaluates `03_WILD_PATHS_NATURE_ROADMAP.md` supplied by the project owner. The source is a concept proposal, not an instruction to implement every listed feature. The workspace was empty at review time, so there is no existing application to assess.

The owner confirmed:

- A cinematic, photographic visual direction with large landscapes and a clean interface.
- Fictional landscapes are acceptable.
- All project documentation must be written in English.

The revised roadmap adopts a fictional nature world as its working premise. The visual rules, names, content quantities, and release boundaries below are recommendations, not additional owner-approved requirements.

## Overall assessment

The concept has a strong emotional premise, useful accessibility intentions, and enough application functionality for a portfolio. Its main weakness is sequencing: it specifies a large content platform before proving the visual experience that should make the project distinctive.

The original MVP also spans several products: an immersive publication, trail finder, wildlife encyclopedia, personal journal, and CMS. Three polished habitat experiences plus all those features would create a substantial content and implementation workload. The plan should establish the visual quality with one complete visitor journey, then expand through reusable templates.

## Recommended changes

| Original proposal | Recommended revision | Reason |
|---|---|---|
| Immersion becomes a dedicated phase at N6 | Validate photography, page composition, mobile behavior, and one signature transition before the backend | The defining experience becomes an early acceptance gate |
| Real-world trail explorer and route accuracy | Fictional destination explorer with an explicitly illustrated world map | Matches the owner's chosen flexibility and avoids inventing geographic claims |
| MapLibre and geographic tile infrastructure | Start with a lightweight custom SVG map using internal illustration coordinates | Geographic infrastructure adds little value to a fictional world |
| Three immersive habitats immediately | Build one complete habitat first, then expand to three using a shared chapter structure | Establishes a repeatable quality standard |
| Separate top-level places, trails, journeys, habitats, and wildlife | Use Explore, Journeys, and Field Notes as the main navigation | Gives each primary destination a clear purpose |
| Wildlife guide in early content work | Include small wildlife editorial sections; defer a searchable encyclopedia | Prevents shallow extra pages from diluting the main experience |
| Authentication and CMS in the foundation phase | Begin with structured local content; add persistence and authoring after the visual prototype | Lets the first milestone answer design questions directly |
| GSAP, Motion, and possible Three.js | Begin with CSS transitions; introduce one motion library only for a demonstrated need | Keeps animation behavior and implementation focused |
| Broad acceptance statements | Add visual, content, interaction, and device-specific release checks | Makes quality review concrete |

The original ideas for saved places, private journals, and protected authoring remain part of the complete portfolio release. They follow the visual preview rather than blocking it.

## Art direction

The proposed identity is a photographic nature journal inside an imagined world. Landscapes carry the emotion; typography and controls make exploration easy.

### Composition

- Use a large opening photograph with a clear subject and negative space for the title. On desktop, aim for roughly 85–95% of the viewport height; let the content determine height on small screens.
- Keep navigation compact. Use a wordmark, three primary links, and a secondary saved-places entry once that feature exists.
- Alternate full-width landscapes with contained editorial sections. Avoid making every section another identical card grid.
- Give each page one dominant action. On the homepage, use `Explore the landscapes`; offer `Start a journey` as a quieter alternative.
- Use subtle topographic linework as a recurring brand detail in section transitions and the fictional map. Keep it away from reading surfaces.
- Give page endings a deliberate next step: a related destination, the next chapter, or a field note.

### Proposed visual tokens

| Role | Starting value | Intended use |
|---|---|---|
| Pine | `#142B24` | Primary text, navigation, dark sections |
| Warm paper | `#F3EFE5` | Editorial backgrounds |
| Moss | `#68745A` | Decorative habitat accents |
| Stone | `#D4CEC0` | Dividers and neutral surfaces |
| Amber | `#BE723D` | Small highlights and illustration details |
| Mist | `#E2E9E6` | Water-themed surfaces |

These are palette candidates. Text, buttons, focus indicators, and overlays must be contrast-tested in their actual combinations; accent colors are not automatically suitable for small text.

Use one expressive serif family for major headings and one readable sans-serif family for interface text and paragraphs. Select exact fonts after reviewing them with the hero assets and checking their licenses. Suggested scale: 64–96 px desktop hero titles, 40–56 px mobile hero titles, and 17–19 px body text with comfortable line spacing. Use responsive sizing and verify long titles and text zoom.

Keep paragraphs around 60–70 characters wide. Prefer generous spacing, understated borders, and restrained corner rounding. Avoid ornamental glass panels, oversized pill controls, and decorative effects that compete with the landscapes.

### Photography and asset coherence

Create a contact sheet before building polished screens. Select a coherent group of images with compatible light, season, terrain, and color treatment. Give every image a desktop crop, mobile crop where needed, and a stored focal point.

Each habitat needs an establishing landscape, a medium-distance scene, and a close detail. Each destination needs its own identity; repeating the same hero photograph throughout the site will make the world feel small.

Maintain an asset register with source, creator, license or generation provenance, intended use, crop notes, and alt-text intent. Real photographs may illustrate fictional locations, but credits must distinguish the imagined setting from the actual image source. Generated visuals, if chosen later, should be curated for consistency and should not be described as documentary photography.

### Motion

Use motion to clarify scene changes and interaction feedback. Proposed starting durations are 150–220 ms for small controls and 400–650 ms for editorial reveals. Tune these during the prototype review.

Build one signature moment first: a forest chapter transitions into a water chapter through a brief image crossfade and an updated chapter marker. Normal scrolling remains available throughout. Do not require scrolling through a long pinned sequence to reach content.

For reduced motion, replace spatial movement and parallax with immediate state changes. All chapter content remains present and readable. W3C describes `prefers-reduced-motion` as a technique for suppressing interaction-triggered motion; this is an explicit project requirement, including where the relevant WCAG criterion is Level AAA. See [W3C technique C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html).

Audio is optional later work. It stays off until deliberately enabled and must have a persistent, clearly labeled control.

## Page composition priorities

| Page | Main sequence | Visual purpose |
|---|---|---|
| Home | Hero → three habitats → featured journey → selected destinations → field note → footer | Establish atmosphere and make the next action obvious |
| Explore | Short introduction → habitat filters → list/map toggle → destination results | Support quick browsing without a second cinematic introduction |
| Destination | Landscape hero → short story → highlights → gallery → world location → related chapter | Make a place memorable and connect it to the larger world |
| Journey | Introduction → chapter navigation → alternating scenes and text → ending and related places | Deliver the signature storytelling experience |
| Field note | Title and introduction → lead photo → readable essay → captioned images → related place | Provide a quieter editorial rhythm |

On mobile, show the Explore list first, place filters in an accessible sheet or simple expandable panel, and open the map on demand. Preserve selected filters when switching views. Story pages become a clear vertical reading sequence.

Loading, empty results, image failure, map failure, unavailable destinations, saved confirmation, and form errors all need designed states. These should follow the same visual system as the main screens.

## Fictional world implications

Use a concise disclosure near the first destination introduction and on the map: `An imagined wilderness. Places and paths are fictional.` Repeat relevant context on detail pages so visitors arriving through a direct link understand the premise.

Use a custom map with an internal coordinate system and stable destination IDs. Every map destination must also be reachable through the list. Map selection should update the matching destination preview and expose a normal link to its detail page.

Replace hiking difficulty, distance, travel time, and safety claims with habitat, story themes, chapter count, and estimated reading time. Any later fictional route statistics must be explicitly identified as fictional. Do not supply real-world navigation or fabricate official trail sources.

The portfolio case study should describe this honestly as interactive cartography and storytelling. It should only claim real geospatial engineering if a later feature actually implements it.

## Quality gates

- Review the homepage, one destination, and one journey at representative widths of 360, 390, 768, and 1440 px; also check 320 px reflow and 200% text zoom.
- Approve actual imagery and complete sample copy before judging the visual system. Placeholder photography cannot establish the final art direction.
- Verify keyboard navigation, visible focus, meaningful headings, image descriptions, readable contrast, and controls that do not depend on hover.
- Load the hero image promptly; defer lower-page galleries and load map code only when needed. Reserve media dimensions to avoid layout shifts.
- Target LCP ≤ 2.5 s, INP ≤ 200 ms, and CLS ≤ 0.1 at the 75th percentile of real visits, assessed separately for mobile and desktop. Before launch, use reproducible lab checks and representative interaction tests; do not describe them as field verification. These thresholds and the lab/field distinction follow [Google's Web Vitals guidance](https://web.dev/articles/vitals).
- Make the reduced-motion experience a complete designed version of the site.
- Verify the real image licenses or generation provenance and the fictional-world disclosure before release.

## Remaining choices

No further clarification is required to revise the roadmap. The following decisions can be made during discovery: final world and destination names, exact font families, use of licensed photography versus generated landscape imagery, asset budget, and the scope of the first public preview.

The next concrete design deliverable should be a desktop and mobile homepage composition, one destination composition, and a storyboard for one journey using a coherent sample asset set. The revised implementation sequence is in [WILD_PATHS_ROADMAP.md](WILD_PATHS_ROADMAP.md).
