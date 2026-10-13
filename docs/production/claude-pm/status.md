# Status board (Claude-directed production)

Updated by Claude. Codex appends hand-ins at the bottom.

## Now

| Task | Owner | State |
| --- | --- | --- |
| Mould owner preview v4 (handwriting clip fixed): http://127.0.0.1:8778/Explainer-bio-m5-mould-preview-v4/ | Owner | Approved in principle ("its good") |
| Brief 03 fact check on mould | Codex | Done: 1 screen finding ("branches" label cut off), fixed. Preview v5: http://127.0.0.1:8778/Explainer-bio-m5-mould-preview-v5/ |
| Library inventory | Claude Haiku agent | Done: docs/production/claude-pm/library-inventory.md |
| Brief 01 artwork (7 images) | Codex | Images reviewed by Claude and accepted (transparent, aligned bottle pair, correct subjects); waiting for Codex provenance hand-in |
| C1 and B1 scripts | Claude | Final: Codex fact check + independent learning review (revision 2 pass) applied; recording gate passed |
| C1 and B1 narration | Claude | Recorded (Simon, eleven_v4, about 11,400 characters); measured: C1 7:00, B1 7:54 |
| C1 and B1 scene builds | Sonnet agents (stopped at session limit) + Claude finished both | Done; Claude reviewed about 40 stills and fixed 9 layout and cue issues |
| C1 owner preview v2: http://127.0.0.1:8778/Explainer-chem-m5-c01-preview-v2/ | Owner | Owner: "outstanding". Fixed the towns-scene overlaps (surface/car labels, ticks) |
| B1 owner preview v2: http://127.0.0.1:8778/Explainer-bio-m5-b01-preview-v2/ | Owner | Owner: "outstanding". Fixed the label wrap; cards now titled Runners / Binary fission / Budding |
| Brief 05 artwork: painted binary fission and budding sequences | Codex + Claude | Done: accepted, swapped in as three-stage crossfades. B1 preview v3: http://127.0.0.1:8778/Explainer-bio-m5-b01-preview-v3/ |
| Brief 04 artwork (12 images) | Codex | Done; reviewed and accepted by Claude |
| Real past HSC questions: needs written NESA permission (copyright@nesa.nsw.edu.au); use original HSC-style questions meanwhile | Owner | Decision pending |
| Mould line re-recorded (take02: "In the route we have followed"), 1 scene, about 420 characters; late animations now keyed to word cues | Claude | Done |
| Final renders: Mould, C1, B1 (owner approved 11 Oct) | Claude | Mould done (3:56); C1 then B1 rendering |
| Brief 06: YouTube upload of the three videos | Codex | Prompt given to owner (after renders finish) |
| Brief 07: Module 5 syllabus coverage ledger | Codex | Prompt given to owner |
| Next wave: C2 and B2a designs | Sonnet drafts + Claude review 1 | Done (chem-m5-c02.md, bio-m5-b02a.md) |
| C2 and B2a independent learning review | Sonnet reviewers (not the authors) | Done: review 1 (2 blockers each), revision 2, fresh re-review (C2 pass; B2a 2 blockers), revision 3 applied. C2 7.8 min, B2a 8.6 min |
| Brief 09: C2/B2a fact checks, then artwork | Codex | Done: C2 1 and B2a 6 science findings, resolved (revision 4); 13 images accepted except lizard clutch |
| Brief 10: lizard clutch retake | Codex | Prompt given to owner |
| C2 and B2a narration | Claude | Recorded (Simon, eleven_v4, about 14,400 characters); measured C2 8:42, B2a 10:11 |
| C2 and B2a scene builds | Sonnet agents + Claude review | Done. Previews: http://127.0.0.1:8778/Explainer-chem-m5-c02-preview-v1/ and http://127.0.0.1:8778/Explainer-bio-m5-b02a-preview-v1/ ; owner signed off 12 Oct (B2a "before they can breed" fixed: 2 scenes re-recorded as take02) |
| Brief 08: site extracts, M5 lessons 5 to 8 (both subjects) | Codex | Prompt given to owner |

## Done

- Shared explainer engine `src/explainer/` (Sonnet port of the mould kit), with `scripts/build-explainer-preview.mjs`, `scripts/explainer-stills.mjs` and `scripts/render-explainer.mjs --confirm` (slim public folder, chunked, cleans up). Mould runs on it; hook card overlap and bread alpha haze fixed; paper grain is a static tile for smooth live preview.

- Mould experiment rendered: `out/experiments/mould-claude/mould-claude-v1.mp4` (owner preferred it to the Codex build).

## Codex hand-ins

### Brief 27: painted icon pack (14 October 2026)

Created all 69 requested transparent PNG plates in `public/assets/biology/` and `public/assets/chemistry/`. The exact file paths, prompts, retakes, model, hashes, checks, aligned sets and parts are in `docs/production/claude-pm/assets/art-icons-27-provenance.json`. Full-size and 200 px checkerboard and cream reviews, plus aligned-set overlays, are in `docs/production/claude-pm/assets/art-icons-27-qa/`.

Checked every file against its recorded hash, canvas size, alpha channel and at least 8% fully transparent margin. Reviewed the plates at 200 px and retook the animal-dispersal scene, parachute seed, padlock, B4 figures and cars, and barn where needed. The shared stigma, cutting, soil, potato, milk gland, test, straw and vial plates were checked with overlays. All requested files are complete. No science error found in the asset descriptions.

Question for Claude: the new `public/assets/chemistry/c4a-plunger-part-v1.png` follows the brief with its seal on the left and rod on the right, but the existing `c4a-syringe-barrel-v1.png` opens on the left. Should the code flip the new part to fit the existing barrel? No scene code, narration, speech, renders, commits or pushes were changed.

### Brief 26: YouTube dotpoints and chemistry plates (14 October 2026)

Verified after reload that B1 `44FFfv7RGck` kept its prepared syllabus block. Saved the prepared descriptions for mould `w7edKqGAUwA`, B2a `0P33z4D2q0E` and B2c `kG-KexGgCzc` in YouTube Studio, then reloaded each and confirmed the exact text persisted. Updated `docs/production/claude-pm/youtube/wave1-uploads.json`, `wave2-uploads.json` and `wave3-uploads.json` with the verified descriptions and states.

Created `public/assets/chemistry/c6-no2-vessel-colourless-v1.png`, `c6-no2-vessel-brown-v1.png`, `c7-haber-converter-v1.png` and `c8-pressure-vessel-v1.png`. The C6 design uses an aligned colourless and pale brown pair. Saved exact prompts, hashes and checks in `docs/production/claude-pm/assets/brief26-provenance.json`; checkerboard and 200 px views are in `docs/production/claude-pm/assets/brief26-qa/`. All four are 1280 x 1920 transparent PNGs with at least 8% clear margin. The C6 alpha channels match exactly. The owner site notes from the C6 to C8 asset briefs remain in `assets/c5-c8-provenance.json` from Brief 19.

Nothing could not be completed. Question for Claude: which of these plates should replace the coded stand-ins after visual review? No narration, scene code, speech, renders, commits or pushes were changed.

### Brief 25: C9 and B6a checks and artwork (13 October 2026)

Created `docs/production/claude-pm/checks/c9-check.md` and `b6a-check.md`. C9 has no findings after recalculating the N2O4 mixtures and checking NIST-JANAF and Bodenstein measurements. B6a has two: the spoken claim that Greek `eu` means "true", and a review note attributing a later E. coli genome length to the 1997 paper. No stills exist, so screen checks were skipped.

Created eight transparent plates: `public/assets/chemistry/c9-no2-tube-pale-v1.png`, `c9-no2-tube-brown-v1.png`, and `public/assets/biology/b6a-bacterium-v1.png`, `b6a-animal-cell-v1.png`, `b6a-plant-cell-v1.png`, `b6a-mitochondrion-v1.png`, `b6a-chloroplast-v1.png`, `b6a-sewing-spool-v1.png`. The C9 pair has the same canvas, alpha and apparatus pixels outside the gas. All eight have at least 1600 px on the long side, real alpha, 8% clear margin and 200 px checkerboard checks. Saved prompts, hashes, retakes and three existing-file checks in `docs/production/claude-pm/assets/c9-b6a-provenance.json`; QA views are in `docs/production/claude-pm/assets/c9-b6a-qa/`. The optional tennis ball was skipped because the design permits a coded circle. The existing B1 fission plate contains an orange DNA loop, so it should not replace the blank second bacterium in B6a scene 5.

Nothing required remains unfinished. Question for Claude: will you correct the B6a Greek-root line before recording? No speech, renders, commits or pushes.

### Brief 22: Module 6 site extracts (13 October 2026)

Created `docs/production/claude-pm/site-extracts/chem-m6-l01.md` through `chem-m6-l19.md`, `bio-m6-l01.md` through `bio-m6-l19.md`, and `m6-index.md`. Created `docs/production/claude-pm/site-corrections-m6.md` with 17 clear site-page errors and source links. All 38 extracts have the nine required headings, are about 600 words or less, and contain no em dashes. The index has 19 rows per subject. No site pages, lesson scripts, narration or scene code changed. Nothing in Brief 22 remains unfinished. Questions for Claude: none.

### Brief 24: YouTube thumbnail concepts (13 October 2026)

Created six 1280 x 720 PNGs in `docs/production/claude-pm/thumbnails/concepts/`: `c3-A.png`, `c3-B.png`, `c3-C.png`, `b2c-A.png`, `b2c-B.png` and `b2c-C.png`, plus `index.html` and `provenance.json`. A uses a warm paper background, painted plates and a hand-lettered question. B puts two states side by side with large labels. C uses a Chemistry green or Biology blue band with plate cutouts and a short title. Checked all six at 320 px, dimensions, spelling and source artwork. Nothing could not be completed. Question for Claude: which style should be developed for the channel? No YouTube changes were made.

### Brief 21 retry: YouTube syllabus dotpoints (13 October 2026)

No description was changed in this retry. The YouTube Studio tab was listed, but binding to it timed out twice, including after resetting browser control. Stopped under Brief 21's disconnection instruction. Earlier records still show C1 `zaC5iXuovKg`, C2 `vd9Ory9-flE` and C3 `w0GzgApQhQY` saved and verified; B1 `44FFfv7RGck` accepted Save but needs a reload check; mould `w7edKqGAUwA`, B2a `0P33z4D2q0E` and B2c `kG-KexGgCzc` remain unsaved. The three `docs/production/claude-pm/youtube/wave*-uploads.json` files already contain the exact dotpoint text and proposed descriptions. Could not complete the four Biology descriptions because browser control disconnected. Question for Claude: can browser control be restored for the remaining checks and saves?

### Brief 21 continuation: YouTube syllabus dotpoints (13 October 2026)

Saved and verified the syllabus blocks after reload for C1 `zaC5iXuovKg`, C2 `vd9Ory9-flE` and C3 `w0GzgApQhQY`. YouTube Studio accepted Save for B1 `44FFfv7RGck`, but browser control closed during the reload, so persistence is unverified. Stopped browser edits as the brief requires. Mould `w7edKqGAUwA`, B2a `0P33z4D2q0E` and B2c `kG-KexGgCzc` were not edited.

Updated `docs/production/claude-pm/youtube/wave1-uploads.json`, `wave2-uploads.json` and `wave3-uploads.json` with the observed states. The `description` fields changed only for the three verified Chemistry videos. Their saved blocks sit directly after the course line; the earlier proposals had an extra blank line before the block. No titles, captions, playlists, visibility or video files changed. Question for Claude: can browser control be restored so B1 can be checked and the remaining three descriptions saved?

### Brief 21: YouTube syllabus dotpoints (13 October 2026, not saved)

Added `syllabusDotpoints` and a clearly marked pending `syllabusDotpointUpdate` to the seven video entries in `docs/production/claude-pm/youtube/wave1-uploads.json`, `wave2-uploads.json` and `wave3-uploads.json`. Each pending entry contains the proposed description, with only the requested block inserted before the official course link. Existing recorded descriptions remain unchanged. Checked Chemistry p1057, p1062, p1067 and p1071 against the cached official wording. Biology p1025, p1026, p1028, p1029 and p1030 match the DOCX downloaded from the official NSW course page word for word. All proposed descriptions are under 5,000 characters and have no em dashes.

No YouTube description was saved: browser control failed to initialise twice, including after a reset. Stopped under Brief 21's disconnection instruction. All seven remain pending: C1 zaC5iXuovKg, C2 vd9Ory9-flE, C3 w0GzgApQhQY, B1 44FFfv7RGck, mould w7edKqGAUwA, B2a 0P33z4D2q0E and B2c kG-KexGgCzc. No titles, captions, playlists, visibility or videos were changed. No new file, render, commit or push.

Question for Claude: can the owner restore browser control so these seven prepared descriptions can be saved?


### Brief 03: C1 and B1 fact checks (11 October 2026)

Created `docs/production/claude-pm/checks/c1-check.md` and `docs/production/claude-pm/checks/b1-check.md`. Checked the draft narration, Visual notes and key notes against each site's extract and science references. C1 has 2 science findings. B1 has 2 science findings and 1 finding about terms used before teaching their meanings. No copy problems found. Screen checks skipped as requested because there are no stills yet. Questions for Claude: none.

### Brief 01: wave 1 artwork (11 October 2026)

Created with the built-in imagegen tool:

- `public/assets/chemistry/c1-sparkling-bottle-sealed-v1.png`
- `public/assets/chemistry/c1-sparkling-bottle-open-v1.png`
- `public/assets/chemistry/c1-book-on-table-v1.png`
- `public/assets/biology/b1-prize-strawberry-plant-v1.png`
- `public/assets/biology/b1-varied-seedlings-v1.png`
- `public/assets/biology/b1-clone-row-disease-v1.png`
- `public/assets/biology/b1-dry-soil-trays-v1.png`
- `docs/production/claude-pm/assets/wave1-provenance.json`

Opened both style references and all seven final PNGs. Checked subjects, plant counts, varied seedlings, matching diseased plants, no text or labels, clean alpha edges on light and dark backgrounds, at least 1600 pixels on the long side and at least 8% empty margins. One retake per asset. Cleared invisible background residue and added transparent canvas space where needed, without resampling. All seven SHA256 hashes match the provenance.

The bottle images share the same canvas, position, scale and water height. Their contours have small redraw differences of 1 to 7 pixels at sampled body edges; Claude should check the crossfade at its display size. No other unfinished work. Questions for Claude: none.


- 11 October 2026, Brief 02 complete. Created `docs/production/claude-pm/site-extracts/chem-m5-l01.md`, `docs/production/claude-pm/site-extracts/chem-m5-l02.md`, `docs/production/claude-pm/site-extracts/chem-m5-l03.md`, `docs/production/claude-pm/site-extracts/chem-m5-l04.md`, `docs/production/claude-pm/site-extracts/bio-m5-l01.md`, `docs/production/claude-pm/site-extracts/bio-m5-l02.md`, `docs/production/claude-pm/site-extracts/bio-m5-l03.md` and `docs/production/claude-pm/site-extracts/bio-m5-l04.md`. Read all eight lesson bodies and compared the four named voiceover scripts. Independent review found no remaining errors after corrections. Each extract has the nine requested headings, at most 600 words and no em dashes. Nothing could not be completed. Questions for Claude: none.
- 11 October 2026, Brief 04 complete. Created:
  - `public/assets/chemistry/c1-campfire-burning-v1.png`
  - `public/assets/chemistry/c1-campfire-ash-v1.png`
  - `public/assets/chemistry/c1-sealed-flask-iodine-v1.png`
  - `public/assets/chemistry/c1-evaporating-beaker-v1.png`
  - `public/assets/chemistry/c1-salt-jar-crystals-v1.png`
  - `public/assets/chemistry/c1-hot-coffee-v1.png`
  - `public/assets/chemistry/c1-burned-magnesium-v1.png`
  - `public/assets/biology/b1-cavendish-bunch-v1.png`
  - `public/assets/biology/b1-banana-plantation-tr4-v1.png`
  - `public/assets/biology/b1-stable-pond-v1.png`
  - `public/assets/biology/b1-lone-island-plant-v1.png`
  - `public/assets/biology/b1-diseased-crop-field-v1.png`
  - `docs/production/claude-pm/assets/wave1b-provenance.json`

All twelve PNGs inspected on checkerboard: transparent alpha, no text, clean edges, matching subjects, at least 1600 px long side and at least 8% empty margins. Generated with built-in imagegen. Burning campfire retaken once, ash twice, flask once for even violet colour. The campfire pair has the same canvas and position; original visible foreground and side stones preserved in the ash image. Independent native overlay found no remaining visible errors after a mask-seam repair. Prompts, tools, hashes, retakes and adjustments are recorded in the provenance. Nothing unfinished. Questions for Claude: none.

### Brief 03: mould fact and screen check (11 October 2026)

Created `docs/production/claude-pm/checks/mould-check.md`. Checked all nine narration fields, on-screen text and all 21 stills against the fungi extract and reproduction definitions. Found one screen problem: the germination scene's "branches" label and leader are clipped by the image panel. No science, syllabus or copy errors found after excluding the known phrase as requested. Nothing could not be completed. Questions for Claude: none.

### Brief 05: B1 binary fission and budding artwork (11 October 2026)

Created:

- `public/assets/biology/b1-fission-1-v1.png`
- `public/assets/biology/b1-fission-2-v1.png`
- `public/assets/biology/b1-fission-3-v1.png`
- `public/assets/biology/b1-budding-1-v1.png`
- `public/assets/biology/b1-budding-2-v1.png`
- `public/assets/biology/b1-budding-3-v1.png`
- `docs/production/claude-pm/assets/b1-fission-budding-provenance.json`
- Checkerboard, light, dark and overlay views in `docs/production/claude-pm/assets/b1-fission-budding-qa/`.

Generated with built-in imagegen after opening both botanical references. All six final PNGs checked on checkerboard and light and dark backgrounds: real alpha transparency, no text or halo, correct subjects, 1800 x 1200 canvases and at least 8% empty margins. Both sets checked on overlays. The yeast parent stays fixed outside the changing attachment site; its lower body is pixel-identical in all three frames. Fission stages 2 and 3 share outer endpoints and cell height; stage 3 repeats one daughter drawing so both daughters are identical. First fission frame retaken once for haze; final budding frame retaken once for daughter size. Transparency cleanup, alignment and parent reuse are recorded with exact prompts and SHA256 hashes in the provenance. Nothing unfinished. Questions for Claude: none.

### Brief 07: Module 5 coverage ledger (11 October 2026)

Created `docs/production/claude-pm/coverage-ledger.md`. Tracks only the 2017 Year 12 Module 5 syllabus: 19 Chemistry rows and 26 Biology rows, including required child points, plus 23 Chemistry and 29 Biology video records in route order. Applied the teaching ownership reset and checked the finished C1, B1 and mould designs. Every required content point has a planned home; practical work and learner modelling remain open. Planned memory aids and numerical examples are marked pending. Checked route membership, local links, table columns and no em dashes.

C1 and B1 remain in production because their complete MP4s are not present yet; mould is rendered. No Brief 06 upload record exists, so none is marked released. This is the only unfinished state update. Questions for Claude: none.


### Brief 08: Module 5 lessons 5 to 8 site extracts (11 October 2026)

Created:

- `docs/production/claude-pm/site-extracts/chem-m5-l05.md`
- `docs/production/claude-pm/site-extracts/chem-m5-l06.md`
- `docs/production/claude-pm/site-extracts/chem-m5-l07.md`
- `docs/production/claude-pm/site-extracts/chem-m5-l08.md`
- `docs/production/claude-pm/site-extracts/bio-m5-l05.md`
- `docs/production/claude-pm/site-extracts/bio-m5-l06.md`
- `docs/production/claude-pm/site-extracts/bio-m5-l07.md`
- `docs/production/claude-pm/site-extracts/bio-m5-l08.md`

Read all eight full lesson pages and their coherence signoffs. Quoted the 2017 syllabus points. Compared Chemistry L05/L06 with the current C3, pressure and catalyst voiceover scripts; no current topic-matching script found for Chemistry L07/L08 or Biology L05-L08. Independent review found no remaining errors after corrections. All files have the nine requested headings, 526 to 600 words and no em dashes. Nothing could not be completed. Questions for Claude: none.

### Brief 09: C2 and B2a fact checks and artwork (11 October 2026)

Checked the current revision 3 designs, which supersede the revision 2 named in the prompt. Created `docs/production/claude-pm/checks/c2-check.md` (1 science finding) and `docs/production/claude-pm/checks/b2a-check.md` (6 science findings). No syllabus or copy findings. Screen checks skipped because there are no stills. The C2 rate arithmetic and products-only start agree after rounding; the real all-gas flask conditions need correction. B2a findings cover coral spawning, fish fertilisation, recovery arithmetic, bearded dragon clutch size and seal care.

Created:

- `public/assets/chemistry/c2-flask-start-v1.png`
- `public/assets/chemistry/c2-flask-equilibrium-v1.png`
- `public/assets/biology/common-frog-pond-b2-v1-alpha.png`
- `public/assets/biology/hen-reproductive-location-b2-v1-alpha.png`
- `public/assets/biology/hen-nest-b2-v1-alpha.png`
- `public/assets/biology/b2-coral-spawning-v1.png`
- `public/assets/biology/b2-coral-spawn-cloud-v1.png`
- `public/assets/biology/b2-salmon-spawning-v1.png`
- `public/assets/biology/b2-seal-and-pup-v1.png`
- `public/assets/biology/b2-desert-lizard-v1.png`
- `public/assets/biology/b2-sea-turtle-nest-v1.png`
- `public/assets/biology/b2-oyster-bed-v1.png`
- `public/assets/biology/b2-dugong-and-calf-v1.png`
- `docs/production/claude-pm/assets/c2-provenance.json`
- `docs/production/claude-pm/assets/b2-provenance.json`
- Checkerboard, light/dark and overlay checks, processing scripts and records in `docs/production/claude-pm/assets/c2-qa/`, `b2-cutout-qa/` and `b2-new-qa/`.

Generated new plates with built-in imagegen after opening both botanical references and the existing frog and hen plates. Opened final checkerboard views and inspected anatomy. All 13 PNGs have real alpha, no text or surrounding halo, at least 1600 px on the long side and at least 8% margins. All final hashes match provenance. Flask hardware and alpha are pixel-identical; only the gas cavity changes. Coral/cloud layers share the same canvas and translation, checked together. Cut-outs preserve the original RGB pixels, with only alpha and transparent padding added. New images were not resampled. The lizard shows six visible eggs at the front of a partly hidden larger clutch, following the science finding. Coral releases bundles; breakup belongs in the animation. Oyster retaken once to narrow the shell openings; start flask retaken once to remove liquid-like shading. Optional lizard internal cut-away skipped as allowed; use the coded overlay. The Brief 09 provenance names take precedence over the older wave1b name in the C2 design, so wave1b-provenance.json was not changed.

Could not fully verify intact PCl5 vapour colour, Chinook's exact 4,000 lower egg-count limit, or millions of eggs for every cod female. Sources and limits are recorded in the checks. All requested required artwork completed. Question for Claude: resolve the science findings and these three verification gaps before recording. No narration, lesson source, scene code or design files changed; no speech, renders, commits or pushes.


### Brief 06: public YouTube uploads, wave 1 (11 October 2026)

Created `docs/production/claude-pm/youtube/wave1-uploads.json` with file SHA256 hashes, exact metadata, caption paths, frame thumbnails, playlist positions and upload dates. Published all three approved MP4s to HSCScience:

- Chemistry C1: https://youtu.be/zaC5iXuovKg
- Biology B1: https://youtu.be/44FFfv7RGck
- Biology bread mould: https://youtu.be/w7edKqGAUwA

All are Public, not made for kids, Education, English (Australia), with timed English (Australia) captions published and clear frames from the videos as thumbnails. Created the missing public Year 12 Module 5 playlists with 2017 syllabus labels. Public playlist pages confirm Chemistry C1 at position 1 and Biology B1 before mould at positions 1 and 2. Both playlists use manual sorting so intervening lessons can be inserted later. No duplicate upload, video edit, render or speech generation.

The official course URLs are in the descriptions, but Studio says external links need the channel's one-off verification before they become clickable. Account verification is outside this brief. Nothing else unfinished. Questions for Claude: none.

### Brief 13: B2b artwork follow-up (12 October 2026)

Created `public/assets/biology/b2b-paintbrush-pollination-v1.png`. Corrected `public/assets/biology/b2b-pollen-grain-closeup-v1.png` to leave a plain interior for animated cells and `public/assets/biology/b2b-bagged-flower-v1.png` to remove the left flower's anthers, matching the current attempt. Earlier PNGs are preserved in `docs/production/claude-pm/assets/b2b-qa/`. Kept the bean seed, bean seedling and nine other matching plates unchanged.

Created `docs/production/claude-pm/assets/b2b-provenance.json` with exact prompts, tools, retakes and matching hashes for all 14 PNGs. Checks and final light/dark/checkerboard views are in `docs/production/claude-pm/assets/b2b-qa/followup-*`; `followup-review.md` records the result. All 14 pass alpha, size and margin checks. Pea pair alpha and outer pixels match exactly. No text or exterior halo visible.

No pollen-tube overlay delivered because exact generated alignment is not assured; use the coded path allowed by asset brief item 5. The existing bee's far legs remain hidden, so six separately countable legs could not be verified. Question for Claude: none. No narration, lesson source, scene code, speech, renders, commits or pushes.

### Brief 11: public YouTube uploads, wave 2 (12 October 2026)

Created `docs/production/claude-pm/youtube/wave2-uploads.json` with exact metadata, MP4 SHA256 hashes, captions, frame thumbnails, playlist positions and upload dates. Published both approved files at the requested paths:

- Chemistry C2: https://youtu.be/vd9Ory9-flE
- Biology B2a: https://youtu.be/0P33z4D2q0E

Both are Public, not made for kids, Education and English (Australia), with timed English (Australia) SRT captions published and AI use disclosed. HD processing completed with no copyright issues. Inspected the video frames and retained Chemistry frame 2; chose Biology frame 1. Public playlists confirm C1 then C2 at positions 1 and 2, and B1, B2a, bread mould at positions 1, 2 and 3. No duplicate playlists or videos were created. Browser control timed out during Biology upload; resumed its saved draft and completed it without uploading again. No video edits, renders, speech, commits or pushes.

Studio still says external description links need one-off channel verification before they become clickable. The official 2017 course URLs are present as text; account verification is outside this brief. Nothing else unfinished. Questions for Claude: none.

### Brief 14: C3 and B2c checks and artwork (12 October 2026)

Checked revision 4 of both designs before generating artwork. Created `docs/production/claude-pm/checks/c3-check.md` (2 findings: label rounded rates and add fixed-size container to the gas aid) and `docs/production/claude-pm/checks/b2c-check.md` (3 findings: Acineta internal brood pouch, its lorica, and the explanation of answer 6). Official NSW 2017 syllabuses checked. No syllabus or copy errors found. Screen checks skipped because there are no stills.

Created with built-in imagegen:

- `public/assets/chemistry/c3-iron-tube-start-v1.png`
- `public/assets/chemistry/c3-iron-tube-deep-v1.png`
- `public/assets/chemistry/c3-cobalt-tube-pink-v1.png`
- `public/assets/chemistry/c3-cobalt-tube-purple-v1.png`
- `public/assets/chemistry/c3-cobalt-tube-blue-v1.png`
- `public/assets/biology/b2c-amoeba-fission-1-v1.png`
- `public/assets/biology/b2c-amoeba-fission-2-v1.png`
- `public/assets/biology/b2c-amoeba-fission-3-v1.png`
- `public/assets/biology/b2c-paramecium-v1.png`
- `public/assets/biology/b2c-acineta-bud-v1.png`
- `public/assets/biology/b2c-milk-glass-bench-v1.png`
- `docs/production/claude-pm/assets/c3-provenance.json`
- `docs/production/claude-pm/assets/b2c-provenance.json`
- Prompts, raw paths, checkerboards, processing scripts and checks in `docs/production/claude-pm/assets/c3-qa/` and `docs/production/claude-pm/assets/b2c-qa/`.

All 11 PNGs have real alpha, no text or visible halo, and at least 1600 pixels on the long side. Opened every checkerboard and checked final hashes. Chemistry sets retain identical hardware and alpha; only liquid pixels change. Independent review requested a paler iron start, retaken and rechecked. Amoeba nuclei align within 0.5 pixel after one registration resample of plate 3; other Biology plates were padded without resampling. Acineta follows the science findings: lorica and internal ciliated bud in a cutaway. The animator must conceal the original painted bud when its cutout leaves. Dedicated C3 provenance follows Brief 14 rather than the older wave1b path in the design.

Nothing unfinished in this brief. Question for Claude: resolve the five science findings before recording, and account for the Acineta bud concealment when animating. No narration, designs, lesson source or scene code changed. No speech, video renders, commits or pushes.

### Brief 20: Biology B3b, B4, B5a and B5b checks and artwork (13 October 2026)

Created or completed `docs/production/claude-pm/checks/b3b-check.md`, `b4-check.md`, `b5a-check.md` and `b5b-check.md`. Checked B3b Revision 4, B4 Revision 4, B5a Revision 4 and B5b Revision 3, including the owner pause change, with exact source hashes. B3b has 3 science findings, B4 has 4 science findings, B5a has 1 science finding, and B5b has 4 science findings and 1 copy finding. These cover heat timing, harmful alleles, proven bulls, DNA template reuse and mutation inheritance, the strand answer, the human offspring icon, chromosome counts, meiosis timing, DNA strands and the colour key. No stills or audio were checked. Source links and short corrections are in each report. Lesson designs were not changed.

Saved `public/assets/biology/b3b-dairy-bull-cow-v1.png`, `b3b-wheat-ear-floret-v1.png` and `b3b-wheat-rust-leaf-v1.png`. Recovered the built-in imagegen originals and exact prompts from the unfinished earlier session, preserved their RGBA pixels and added transparent margins without resampling. All three pass anatomy, half-size readability, real alpha, no text and no visible halo checks. Opened the reuse plates on checkerboards. No painted plate needs changing because of the fact-check findings.

Created `docs/production/claude-pm/assets/b3b-b5b-provenance.json`, `b3b-provenance.json`, `b4-provenance.json`, `b5a-provenance.json` and `b5b-provenance.json`. Completed the technical checks, recovered prompts, inspection views and processing record in `docs/production/claude-pm/assets/b3b-b5b-qa/`. B4 reuses the amoeba: its crisp round nucleus centre is at width fraction 0.50235 and height fraction 0.50850. B5a's existing bacterium reads at 220 px. Found `public/assets/biology/b2b-pod-seeds-v1.png`, a pea pod with clean alpha that reads at 400 px; no suitable brothers or family plate found. B4's conditional plate is unnecessary; B5a and B5b optional paintings were not requested.

Nothing in Brief 20 remains unfinished. Question for Claude: will you resolve the 13 findings before recording these designs? No speech, renders, commits or pushes.

### Brief 18: C3 and B2c YouTube uploads (13 October 2026)

Created `docs/production/claude-pm/youtube/wave3-uploads.json`. Published both approved MP4s: C3 https://youtu.be/w0GzgApQhQY (9:43) and B2c https://youtu.be/kG-KexGgCzc (9:45). Checked all 17 existing Studio entries first and preserved the older private C3. Both new videos are Public, not made for kids, Education, English (Australia), with AI disclosure. Both timed SRT tracks show Published. HD processing completed and YouTube found no copyright issues. Inspected the three frame thumbnails for each and retained frame 2: cobalt temperature tubes for C3, amoeba and paramecium division for B2c.

Public playlist pages confirm Manual sorting. Chemistry currently has C1, C2, C3 (position 3). Biology has B1, B2a, bread mould, B2c (position 4). YouTube numbers existing videos consecutively, so literal empty slots cannot be left. Insert G01 before C3 and flowering-plants B2b before B2c when uploaded. Browser interruptions were recovered and no duplicate video was created. Official course links are present as text but still need the channel's one-off verification to become clickable. No MP4 substitution, video edits, renders, commits or pushes.

Nothing remains from this upload job apart from the existing account verification limitation and future insertion of the missing videos. No question for Claude.


### Brief 23: painted art upgrades (13 October 2026)

Created ten transparent PNG plates: `public/assets/biology/b3b-dairy-cow-side-v1.png`, `b3b-dairy-bull-side-v1.png`, `b3b-calf-side-v1.png`, `b3b-merino-sheep-side-v1.png`, `b3a2-ovary-closeup-v1.png`, `b3a2-ovary-no-ripening-v1.png`, `b5a-skin-graze-v1.png`, `b5b-brothers-v1.png`, plus `public/assets/chemistry/c5-copper-tube-pale-v1.png` and `c5-copper-tube-deep-v1.png`. Created `docs/production/claude-pm/assets/art-upgrade-23-provenance.json`; exact prompts and inspection images are in `docs/production/claude-pm/assets/art-upgrade-23-qa/`.

All ten pass the 1600 px long-side minimum, real alpha, 8% empty margin, checkerboard and 200 px checks. The cow and bull have equal height and a shared hoof line; the calf is half their height. The tube pair and ovary pair have pixel-identical alpha silhouettes and matching canvas sizes. The B5 pictures are chromosome-free. B5a and B5b each took one image retake; the other eight took none. No narration, lesson files, scene code, speech, renders, commits or pushes were changed.

Nothing could not be done. Question for Claude: which of these plates should replace the coded stand-ins after visual review?

## 12 October

| Task | Owner | State |
| --- | --- | --- |
| C2 render | Claude | Done: out/explainer/Explainer-chem-m5-c02/Explainer-chem-m5-c02-v1.mp4 (8:50) |
| B2a render | Claude | Done: out/explainer/Explainer-bio-m5-b02a/Explainer-bio-m5-b02a-v1.mp4 (10:19) |
| Brief 11: YouTube upload C2 + B2a | Codex | Ready to send (in owner-queue.md); Claude's browser tool cannot upload files over 10 MB |
| Commit | Claude | Pushed branch video/claude-directed-m5-wave1 (5303e06), not merged |
| G01 and B2b (flowering plants; B2c = microbes and protists later) designs | Sonnet drafts, Claude reviews | Revision 5: two learning reviews and Codex fact check resolved; narration recorded 12 Oct (G01 9:52, B2b 9:36; B2b gate caught Codex re-check R1/R2 first, fixed) | G01 scene build running; B2b build waits for Codex art (briefs 12/13) |
| Brief 13: B2b art follow-up (bean seed, bean seedling, any missing plates) | Codex | After brief 12 hand-in |
- 12 October 2026, Brief 10 complete: created public/assets/biology/b2-desert-lizard-v2.png with about 18 eggs, real alpha and the original 1856 x 1344 canvas; preserved v1, checked light/dark edges, and updated docs/production/claude-pm/assets/b2-provenance.json with the built-in imagegen prompt, retake and hash. Nothing unfinished. Questions for Claude: none.
| C3 (disturbing equilibrium) and B2c (single-celled organisms) designs | Sonnet drafts, Claude review, 2 learning reviews | Revision 4, pass; awaiting Codex fact check (brief 14 in owner-queue.md). C3 9.6 min, B2c 8.4 min |
| G01 preview | Claude | Built: http://127.0.0.1:8778/Explainer-chem-m5-g01-preview-v1/ (10:02); owner to watch |
| C2 and B2a | Claude | Both rendered; YouTube upload is brief 11 (browser tool cannot upload over 10 MB) |
| B2b preview | Claude | Built: http://127.0.0.1:8778/Explainer-bio-m5-b02b-preview-v1/ (9:47); paintbrush is a coded stand-in |
| C4a (pressure/volume) and B3a part 1 (fertilisation to keeping a pregnancy) designs | Sonnet drafts, Claude review, learning review + re-review | Pass; C4a revision 3 (9.3 min), B3a revision 4 (8.9 min); awaiting Codex fact check (brief 15) |
| C4b (catalysts) and B3a part 2 (feedback hormones, birth, lactation; file bio-m5-b03a2.md) designs | Sonnet drafts, Claude review, learning review + re-review | Pass; revision 3 each (about 9.0 and 9.3 min); awaiting Codex fact check (brief 16) |


### Brief 17: Module 5 coverage ledger update (12 October 2026)

Updated `docs/production/claude-pm/coverage-ledger.md`. Read all ten new designs and updated both subject tables: terms with plain meanings, memory aids, worked examples and numbers, and earlier ideas recalled. Kept all 19 Chemistry and 26 Biology 2017 content rows. There are now 23 Chemistry and 28 Biology video records: B2b flowering plants, B2c single-celled organisms, separate mould and planned runner, and B3a parts 1 and 2. B3b still owns agriculture. Updated C1/B1/mould to released from `youtube/wave1-uploads.json`, C2/B2a to rendered, and the other new designs to in production. No route file or lesson design changed.

Finding: B2b scene 8 re-teaches B1's conditions/variation comparison (B1 scenes 5, 7 item 3 and 8): stable conditions favour clones, shared alleles give shared disease weakness, and varied seedlings may survive change. B2b attempt 10 item 3 tests that comparison again with potatoes. This is a full explanation scene rather than a short recall. No other new design repeats an earlier owned explanation beyond recall or applying it to its new mechanism.

No required 2017 Module 5 content point has no home. The separate runner growth mechanism remains planned; B2b only recalls the runner. Practical investigations and learner modelling remain open. C3, C4a, C4b, B2c and both B3a parts still list fact checks as pending; those gates are recorded, not marked passed. Route naming and pending uploads are also flagged for Claude.

Checked unchanged syllabus rows, all ten design records, route order around the B3a split, unique table rows, column counts, local links and no em dashes. No files created. Nothing in Brief 17 could not be completed. Question for Claude: should B2b scene 8 be shortened to a recall of B1?

### Brief 19: Chemistry C5 to C8 checks and assets (13 October 2026)

Created `docs/production/claude-pm/checks/c5-check.md`, `c6-check.md`, `c7-check.md`, `c8-check.md` and `docs/production/claude-pm/assets/c5-c8-provenance.json`. Checked C5 Revision 4, C6 Revision 3, C7 Revision 4 and C8 Revision 4, with exact source hashes. Recomputed the numbers and compared the designs with the site extracts, corrections and NSW 2017 syllabus. C5 has two science findings: its universal K-size bands do not prove almost complete conversion, and the K = 4 attempt needs starting proportions to support its answer. C6, C7 and C8 have no findings. No stills or audio were checked.

All four artwork items are optional and explicitly allow coded fallbacks. Skipped them under Brief 19 and recorded each decision, plus the requested owner site notes, in the provenance file. No mandatory artwork remained. The l09 extract already exists and was read. Checked report hashes, valid provenance JSON and no em dashes in the new files. No narration, lesson designs, scene code, speech, renders, commits or pushes.

Nothing could not be completed within Brief 19. Question for Claude: will you replace the universal composition bands and give the invented K = 4 attempt equal starting reactant concentrations with no products before recording C5?

Revalidated for the repeated Brief 19 request on 13 October 2026. All four lesson hashes still match the original checks. Refreshed calculation and source evidence in `checks/c5-check.md`, `c6-check.md`, `c7-check.md` and `c8-check.md`; findings remain two in C5 and none in C6 to C8. Updated `assets/c5-c8-provenance.json` with the refreshed report hashes. All four designs explicitly permit the coded fallback, including the C7 tower with pipes. No new artwork was required. No stills, audio or playback checked. The two C5 corrections remain for Claude before recording.

### Brief 27: painted icon pack (14 October 2026)

Created 69 transparent PNG plates in `public/assets/biology/` and `public/assets/chemistry/`. The exact file list, prompts, source paths, models, retakes, sets, part relationships and hashes are in `docs/production/claude-pm/assets/art-icons-27-provenance.json`. QA images at full size and 200 px, aligned-set overlays and the audit script are in `docs/production/claude-pm/assets/art-icons-27-qa/`. The audit found no missing files, hash mismatches or margin failures. The tree now has a thin soil cross-section behind visible roots. No video code was changed.

Science question for Claude: the requested `b3a-egg-open-v1.png` shows a pre-existing gap in the zona where sperm enters. Human sperm normally penetrates the zona rather than entering through a gap that opens beforehand. Please check whether the animation could teach the wrong mechanism.

## Safe point 13 Oct (before compaction)

- Rendered and ready to upload: C3 (9:43), B2c (9:45). Upload via brief 18.
- Previews: G01 v2, B2b v2 (fixed after voiced review), C4a v1, C4b v1, B3a v1.
- Next after compaction: fix C4a memory-aid icon overlap and C4b item-one feedback text overlap; build B3a part 2 (voiced, not built); voiced review of C4a, C4b, B3a; apply Codex brief 16, 19, 20 results when they land; then voice the eight ready designs with owner OK.
- Ready to voice (owner OK needed): C5, C6, C7, C8, B3b, B4, B5a, B5b.

