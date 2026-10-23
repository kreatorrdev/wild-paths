# Wild Paths — Experience Prototype

Date: 2026-10-19  
Status: Visual and interaction prototype; not a deployed application.

## Confirmed direction

The owner chose a cinematic photographic style, permitted fictional landscapes, approved the first visual design package, and then requested the feeling of moving through the pictures with a 3D effect.

The prototype includes responsive compositions for the homepage and Mossveil Forest, a contact sheet with the chosen palette, and an interactive three-chapter journey. It uses original generated imagery rather than documentary photographs of real places.

## Screen compositions

- **Home:** lake hero, compact navigation, editorial introduction, three habitat previews, a featured journey, a field-note excerpt, and a fiction disclosure.
- **Mossveil Forest:** forest hero, a clear invitation to enter the scene, destination story, habitat and chapter context, wide/detail image pair, an editorial quote, and a continuation to Stillwater Mere.
- **Journey:** an immersive scene, stable readable chapter text, start/pause, a travel slider, direct chapter selection, reduced-motion control, and an exit action.
- **Art direction:** three landscape images, the selected palette, and typography samples.

Desktop and Mobile controls change the preview width. The same layouts also respond automatically to the available width. Mobile is a deliberate stacked layout with different hero framing, not a scaled-down desktop screenshot.

## Depth and movement

The requested 3D feeling is implemented as a layered photographic effect, often called 2.5D. It does not reconstruct a fully navigable 3D environment from the photographs.

The scene has a landscape layer, a subtle atmospheric layer, and a transparent forest foreground. Moving the pointer changes perspective and offsets the layers at different speeds. Advancing through the scene gradually enlarges the background while the foreground moves faster, creating an impression of traveling forward. The forest foreground fades away as the journey reaches the lake.

The travel sequence is Mossveil Forest → Stillwater Mere → Cloudrest Ridge. Neighboring landscapes crossfade as progress changes. Chapter labels update at the midpoint between chapter anchors; direct chapter buttons select the forest, lake, or mountain immediately.

### Controls

| Input | Behavior |
|---|---|
| Walk forward | Starts an approximately 42-second passage through all three scenes |
| Pause journey | Stops at the current position |
| Travel slider | Moves forward or backward; stops automatic playback |
| Chapter button | Jumps to the chosen chapter; stops playback |
| Pointer movement | Applies a modest perspective and parallax effect |
| Touch movement over the scene | Changes the viewpoint while preserving normal vertical page scrolling |
| Reduced motion | Removes spatial motion and continuous playback; the main action advances one chapter at a time |
| Exit or screen change | Stops playback and changes the visible screen |

Playback starts only after an explicit action. It stops when the document is hidden or the scene leaves view. There is no audio, scroll hijacking, gyroscope permission, or automatic camera movement on page load.

The host design controls expose depth intensity when supported. This adjusts the prototype's spatial effect without changing navigation or content.

## Visual system

The fixed creative palette is Pine `#142B24`, Warm Paper `#F3EFE5`, Moss `#68745A`, Amber `#BE723D`, and Mist `#E2E9E6`. The photographic scenes keep a compatible muted grade, soft light, and layered haze. Warm paper sections provide a quieter reading rhythm between landscape images.

The prototype uses Georgia for editorial headings and system sans-serif fonts for controls and body copy. No external font download is required. Major photographic headlines use deliberate dark overlays for readability; the interface remains stable while image layers move.

## Asset record

See [ASSET_REGISTER.md](ASSET_REGISTER.md) for original image paths, derivations, provenance, and the exact generation prompts. The four PNG originals and optimized WebP derivatives are saved in `design/assets/`.

The forest detail image is a crop of the forest establishing image, labeled as such. It is not a separate generated view of the same physical scene. No separate mobile source photograph has been generated; mobile layouts use selected crops of the originals.

## Prototype boundaries

This package demonstrates design and interaction. It does not implement accounts, personal journals, persistence, admin tools, a complete destination explorer, or the six-destination illustrated map. The working map concept and additional destinations remain in the roadmap.

The landscape effect supports forward movement and limited viewpoint offsets. Large lateral movement, walking behind trees, collision detection, and changing the viewing angle of a scene would require actual 3D geometry or a more advanced reconstruction workflow.

The inline preview is the review surface. `design/preview.template.html` is its editable source; `design/preview.html` is a local inspection wrapper. The source, optimized images, and motion logic are ready to inform a later application implementation.

## Review priorities

Evaluate the emotional tone, heading scale, image crops, mobile reading rhythm, and strength of the depth effect. Confirm that the movement feels calm and that chapter changes remain clear. Actual device performance and the comfort of the effect still require review on a physical phone before production release.

## Verification performed

The local preview was checked in a headless Edge browser at viewport widths of 320, 390, 768, and 1440 px. All four screens were exercised at each width, with no product-level horizontal overflow detected. The preview wrapper adds 16 px of space on each side, so the narrowest product width tested was 288 px.

Browser checks passed for forward playback, pause, direct chapter selection, slider navigation, pointer depth response, and reduced-motion behavior. No browser script errors were recorded. Desktop and mobile screenshots were inspected for composition, crops, text placement, and complete page rendering.

The inline preview is approximately 804 KB, including its four embedded optimized images. This is a file-size observation, not a Core Web Vitals or physical-device performance result. Verification details are saved in `design/verification.json`, and review screenshots are in `design/screenshots/`.
