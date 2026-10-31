# Codex build 125

## B03 and B04

Source authored in `src/explainer/lessons/bio-m8-b03/` and `src/explainer/lessons/bio-m8-b04/`: common, assets, parts, s1 to s3, scenes and config. B04 also has diagrams.tsx. Root added the registry imports and entries.

Both builds use the shared explainer kit and Module 8 diagrams. Painted plate pairs cross-fade uniformly in one position. Glucose hexagons and water dots move through vessels or membranes. Gauges and graphs change on measured narration cues. The two question cards in each lesson retain the question and conditions during their countdowns. Feedback underlines the givens in the original card.

Asset contact sheets inspected: `out/explainer/tools/b03-assets.jpg`, `out/explainer/tools/b04-assets.jpg`. Alpha bounds were read from each real PNG. This confirmed the intended organs, islets, transporters, glycogen, urine cups, nephron, osmoreceptors and collecting duct pairs.

### Checks and remaining work

- B03 scoped TypeScript check passed under the render lock. The loaded config resolves all scene cue sets.
- Lightweight source cue scan found all 81 B03 and 79 B04 cue phrases in the exact measured captions.
- B04/P02 scoped TypeScript check passed under the render lock. An earlier attempt during the existing skills render exited without diagnostics; the check was repeated successfully.
- B03 and B04 still inspection is complete and both v1 previews are built. Final scoped checks and direct config loads pass. Playback-speed motion, independent learner review and human listening remain pending.

### Timing and design decisions

- Both measured notes scenes last 759 frames. The designs request about 60 seconds. Each config therefore holds the unchanged notes scene for 1800 frames, preserving its recorded lead-in and alignment.
- The shared five-slot loop, strip graph and plate-pair process remain the visual system. Some repeated small loop thumbnails are omitted during large plate close-ups to preserve room for the process and labels. The complete loops return in their explanation and comparison scenes. This is a departure from the detailed thumbnail schedule and remains for Claude's preview review.
- B03 uses continuous hexagon flow along a vessel and visible uptake or release paths; its separate storage chain is an abstract symbol beside the painted cell pair.
- B04 shows the posterior pituitary within the sagittal brain plate with a leader line, rather than overlaying the detached pituitary plate.
- B03's definition cards are stable word-and-symbol lines that move lower when the strip arrives. They do not use the design's bordered cards or split-colour word endings. The three similar terms and their different meanings remain visible.
- Whole-to-cell changes use plate fade/scale changes and fixed close-up panels rather than the specified camera journey or circular magnifier. B03's road analogy uses a moving marker and written brake/accelerator labels rather than pedal icons. The marker changes speed at those cues.
- The coded loop slots use numbers with short adjacent labels. Repeated organ crops are kept in the main process panel rather than inside the ring. B04's reverse scene shows the current pale-urine result instead of pulsing both cup thumbnails together. These choices keep the current mechanism and its reading area separate; they remain design departures for Claude's preview review.

### Source repairs before stills

Gridded plate inspection corrected the B03 alpha-cell leader onto an amber cell and the insulin receptor leader onto the painted Y receptor. The glucose uptake path now crosses an actual transporter from the vessel into the muscle cell. Islet signal dots enter the painted capillary. The B04 glomerulus and pituitary leaders use the real structures, and a cue-driven line traces the coiled tubule. Matched state pairs share union crops. Repeated feedback lines dim when the next reasoning stage arrives, and bottom loop labels have separate width limits.

Root's source review found that B04's slow water setting changed dot spacing without reducing throughput. Water now emits at the actual interval, giving only one or two crossing dots after ADH drops while the down-duct flow stays much larger. The same emission correction makes the B03 brain supply a genuine slow trickle. Root also found an insulin unit ambiguity in B03's compact graph. It now uses a separate right-hand mU/L scale with teaching-curve labels.

### Outputs

B03: 59 planned frames, three or more per scene plus process cue picks and both mid-countdowns. Round 1 exposed close-ups against the strip axis, an islet gloss against axis labels and a mistake chip against a loop label. Reduced and lowered those close-ups, separated the gloss and top loop labels, moved the mistake to the right column, and placed the glucose definition's single hexagon and CGM screen readout. Round 2 rendered all 59 frames cleanly; a final three-frame hook round separated the clock from the moon. All 10 sheets were inspected, and changed sheets/critical frames were inspected again after repair. No remaining overlap, clipping, missing or stretched plate was seen.

B03 stills: `out/explainer/Explainer-bio-m8-b03/stills/`. Contact sheets: `out/explainer/Explainer-bio-m8-b03/contact/m8b03-00.jpg` through `m8b03-09.jpg`. Preview: `out/prototypes/Explainer-bio-m8-b03-preview-v1/index.html` (14553 frames). A final 27-frame refresh checked separately anchored noon/time/next-noon labels and the amber alpha-cell leader. The v1 bundle was rebuilt from those final inputs. Its previous unapproved index and bundle remain in `out/explainer/Explainer-bio-m8-b03/preview-before-refresh/`. Exact config lesson: `out/explainer/Explainer-bio-m8-b03/playback-lesson.json`.

B04: 59 planned frames, three or more per scene plus process cue picks and both mid-countdowns. All 10 initial contact sheets were inspected. Root independently found a leader crossing the adrenal label and the urine-graph legend touching the x-axis title. The same review found other left-side leaders crossing their labels. Leaders now end above, below or outside the rendered label bounds, measured only inside the component. The graph legend sits 54 px below the axis title. Moved two lower duct statements clear of the plate, separated the osmosis label from particles and stopped the aldosterone flow line at the blood edge before its label. Round 2 rendered all 59 frames without runtime errors. Changed native frames and sheets were inspected again, with no remaining clipping, overlap or stretched-plate finding. Both complete question cards and countdowns fit. Root independently inspected repaired frame 11482 and the loop/reverse sheet.

B04 stills: `out/explainer/Explainer-bio-m8-b04/stills/`. Contact sheets: `out/explainer/Explainer-bio-m8-b04/contact/m8b04-00.jpg` through `m8b04-09.jpg`. Preview: `out/prototypes/Explainer-bio-m8-b04-preview-v1/index.html` (14725 frames, 29 media/font files). Exact config lesson: `out/explainer/Explainer-bio-m8-b04/playback-lesson.json`. The quiet notes hold and both question holds are present; narration and measured files were not changed.

Frame/contact tools: `out/explainer/tools/frames-build125126.mjs`, `sheet-build125126.py`, `tsconfig-m8b03.json`, `tsconfig-m8b04p02.json`, `finish-build125.ps1`. The catalogue-wide tooling exhausted Windows committed memory. The fallback `scoped-build125126.mjs` imports one config, reuses one browser and builds the same ExplainerVideo/shared preview UI; shared tooling was not changed. All work used the shared render lease, with sequential heavy processes. No full MP4, paid speech, commit or new persistent server was made.

## B05

Created `src/explainer/lessons/bio-m8-b05/`: `common.ts`, `assets.ts`, `parts.tsx`, `s1.tsx`, `s2.tsx`, `s3.tsx`, `scenes.tsx` and `config.ts`. Added the registry import and entry. All 16 measured scene IDs have components. The scoped TypeScript check passed and config loading resolved every word cue.

Inspected the eight real plates in `out/explainer/b05-assets-contact.png`. Alpha bounds were measured from those files. Upright/wilted plant, open/closed stoma and ordinary/xerophyte leaf pairs share union crop boxes, preserving the natural image alignment and aspect ratio. Leaf points name the vein, stoma, cuticle and hairy pit. Moving vapour, K⁺ ions, water arrows, ABA pulses, the water budget and the dual-axis teaching graph carry the mechanisms. Both exam questions retain the full stem, data and demands during their ten-second countdowns; feedback underlines the original question text.

Design decisions: the notes scene lasts 1800 frames in the config, extending its silent tail from the measured 759 frames to match the requested 60 seconds. Measured JSON, speech and alignment remain unchanged. The ring uses numbered slots with adjacent mechanism labels; large repeated plant crops are kept outside the ring. The balloon comparison uses two capsule outlines with thick inner edges. The grooved-leaf inset is open and shallow, rather than an enclosed tube. Exact voiced motion and learner review remain for Claude and the owner.

The trade-off uses the matched surface-view stoma pair for its open/closed contrast, rather than retaining the cross-section crop. This view prepares the guard-cell mechanism in the next scene. The Australian example retains the painted hanging leaves and a temporary grey flat-leaf/sun comparison.

Frame picks and contact-sheet tool: `out/explainer/tools/frames-m8b05.py`; scoped config: `out/explainer/tools/tsconfig-m8b05.json`. The final still rounds and v1 preview were completed on 1 November after the shared render queue released its lock. Playback and listening review remain pending.

Independent B05 source review found misplaced pore, xylem and ion paths, early comparison cells, a clipped xerophyte pit and a speed calculation that could move vapour backwards while slowing. These were repaired before the first still round. Leaf and pit flux, callouts and guard-cell ion paths now use the painted plates' native coordinates through the same crop transform. The feedback stoma and ions share their exact centre and scale. Comparison columns use separate spoken cues. Integrated flow distance stays forward during the slower transition. The final xerophyte view fits above the lower edge. The review also confirmed complete question conditions, two 300-frame countdowns and all 98 cue occurrences. This was a source review; stills and playback remain separate.


### B05 final stills and preview (1 November)

The final scoped TypeScript check passed. Config loading resolved all 16 scene cue sets, including all 98 literal cue occurrences checked independently. The config-adjusted duration is 15,419 frames at 30 fps (513.97 seconds).

Round 1 rendered all 66 selected frames, covering every scene, both mid-countdowns and the notes hold. The independent reviewer inspected all four contact sheets and native mechanism, question and feedback frames. Findings: the notes title was duplicated, its memory box was clipped, several Where and Xero labels lay over detailed leaf artwork, the water budget touched the leaf, and the ABA mistake explanation crossed the stoma image.

Round 2 rendered all 66 frames after removing the extra notes heading, raising the memory box to aidTop 780, moving explanation text and labels into clear margins, slightly reducing the leaf close-ups with their mapped anchors retained, and raising the ABA stoma and ion paths together while placing its mistake below the image. Round 3 refreshed the four Where frames after moving the budget without scaling its text. The independent reviewer rechecked all four updated contact sheets and affected native frames. No remaining concrete overlap, clipping or anchor blocker was found in the sampled states. Root separately inspected Where, ABA, Australian examples and notes frames. The moved captions, smaller close-ups and notes-box position are layout departures made to preserve readability; narration and mechanisms remain unchanged.

Stills: `out/explainer/Explainer-bio-m8-b05/stills/`. Contact sheets: `contact-1.jpg` through `contact-4.jpg` in that folder. Preview: `out/prototypes/Explainer-bio-m8-b05-preview-v1/index.html`, with 27 required public files. Exact config lesson: `out/explainer/Explainer-bio-m8-b05/playback-lesson.json`. The scoped builder uses the shared ExplainerVideo and Player UI as described above. No full MP4, paid speech, commit or server was produced. Continuous motion, listening, caption fit during playback and human learning/owner review remain pending.
