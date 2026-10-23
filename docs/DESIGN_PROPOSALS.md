# Wild Paths — Design Proposals

Date: 2026-10-19  
Status: Initial creative proposals, now accompanied by a responsive visual prototype. See [WILD_PATHS_EXPERIENCE_SPEC.md](WILD_PATHS_EXPERIENCE_SPEC.md) for the implemented screens and requested depth effect. Additional destinations and the illustrated map remain proposals.

## Recommended direction: Into the Quiet

Build a cinematic nature experience around misty forests, still water, and distant mountain ridges. Combine atmospheric landscape photography with warm, readable editorial sections. The working title for the first journey is **Into the Quiet**.

This direction follows the owner's preference for large photographic landscapes and a clean interface. All place names below are fictional working names.

## Three treatments to consider

| Treatment | Visual character | Best use | Tradeoff |
|---|---|---|---|
| Into the Quiet — recommended | Soft mist, deep pine, warm paper, restrained amber accents | Overall identity and the first journey | Needs careful image selection so dark landscapes retain detail |
| Golden Wilderness | Late-afternoon light, ochre grasses, warm rock, cream backgrounds | A later mountain collection | Repeated golden-hour images may make different habitats feel too similar |
| The Northern Atlas | Cool lakes, blue-gray ridges, spacious layouts, fine cartographic details | Explorer and map inspiration | Can feel emotionally distant without intimate detail photographs and warmer copy |

Use one coherent treatment for the first release. Borrow the atlas's map clarity without mixing incompatible photographic grades.

## Proposal 1: An opening scene with a clear invitation

Use a wide forest-and-lake landscape with a distant mountain ridge. Place the heading in a quiet part of the composition and keep the central landscape unobstructed.

Suggested interface copy:

- Eyebrow: `WILD PATHS / AN IMAGINED WILDERNESS`
- Heading: `Somewhere beyond the familiar.`
- Supporting line: `Wander through quiet forests, still waters, and distant peaks.`
- Primary action: `Explore the landscapes`
- Secondary action: `Start a journey`

Use a compact header and a subtle indication that more content follows. Keep the title readable immediately, without waiting for an entrance sequence. On mobile, use a deliberately selected portrait crop and let the text determine the section height.

## Proposal 2: A small world with six memorable destinations

| Habitat | Working destination name | Visual anchor | Story role |
|---|---|---|---|
| Forest | Mossveil Forest | Tall trees, soft fog, moss-covered ground | Arrival and slowing down |
| Forest | Fern Hollow | Ferns, filtered light, a sheltered clearing | Intimate observation |
| Water | Stillwater Mere | A lake reflecting a distant ridge | Pause and reflection |
| Water | Silverthread Falls | A narrow waterfall against dark stone | Movement and transition |
| Mountain | Cloudrest Ridge | Layered peaks above low cloud | Discovery and scale |
| Mountain | Emberstone Summit | Warm rock in the last evening light | The journey's ending |

Place these destinations within one internally consistent illustrated region. The map should feel designed for this world, with related terrain and paths. Show the fictional-world disclosure on the map and destination pages.

## Proposal 3: An editorial homepage rhythm

1. Opening landscape and invitation.
2. Three large habitat previews: Forests, Waters, Mountains.
3. A featured journey with one generous image and a short introduction.
4. A restrained selection of destination cards with habitat labels.
5. A field-note excerpt with a close-up nature photograph.
6. A small world-map invitation and a quiet footer.

Alternate immersive images and warm paper backgrounds. Reserve asymmetric compositions for editorial sections; keep browsing results predictable and easy to scan.

## Proposal 4: One signature journey

Use a three-chapter story: **Beneath the Canopy → Along Still Water → Above the Clouds**.

Each chapter combines one establishing scene, a short passage, a close detail, and a related destination link. Add a compact chapter indicator that also works as navigation.

Prototype one brief crossfade between landscape scenes. All content remains in the normal reading flow, with direct chapter links. The reduced-motion version changes scenes immediately and preserves the same navigation.

Estimated reading time can describe the editorial journey. Do not present invented hiking distances, route difficulty, or walking durations as real travel information.

## Proposal 5: A map that rewards exploration

Create an SVG world map with forest clusters, water shapes, ridge lines, and six destination markers. Keep the overall drawing calm enough that selected markers remain obvious.

- Selecting a marker reveals a small destination preview and a link to its detail page.
- Selecting a habitat filters both map markers and list results.
- List and map share the same destination data and selection state.
- Use normal buttons or links for accessible destination selection.
- Default to the list on mobile; offer the map as an explicit view choice.
- Include a clear empty state and a usable list if the map cannot load.

The map represents invented terrain with illustration coordinates. It does not need geographic tiles or real-world navigation tools.

## Proposal 6: A deliberate image collection

Prepare a contact sheet of approximately 12–15 candidate images before polishing the layouts: six destination establishing scenes, several close details, and supporting landscape compositions. Reuse images intentionally between a destination and its related journey, while giving each destination a distinct identity.

Two viable asset paths remain open:

- Licensed photography, selected for compatible weather, light, terrain, and crops. Record source, creator, license, and required attribution.
- Generated photographic-style landscapes, selected for consistent geography and lighting. Record generation provenance and identify them appropriately.

Choose the asset path during creative discovery. Review each candidate at desktop and mobile aspect ratios. Avoid selecting images solely because they look impressive in isolation.

## Suggested next work package

Produce a small, reviewable design package:

1. A contact sheet and final palette candidates.
2. Desktop and mobile homepage compositions.
3. Desktop and mobile compositions for Mossveil Forest.
4. A three-frame storyboard for Into the Quiet.
5. A simple map composition with all six destinations.

Review image coherence, type hierarchy, reading comfort, and clarity of the next action before implementing the wider application. Account, journal, and admin features remain in the later milestones of the [revised roadmap](WILD_PATHS_ROADMAP.md).

## Related documentation

- [Roadmap review and quality gates](ROADMAP_REVIEW.md)
- [Revised roadmap v0.2](WILD_PATHS_ROADMAP.md)
