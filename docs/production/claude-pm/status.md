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

### Brief 43: C7 tug-of-war plates (16 October 2026)

Created `public/assets/chemistry/c7-tug-left-v1.png`, `c7-tug-right-v1.png` and `c7-tug-rope-flag-v1.png` as transparent, separately movable 3000 x 1000 plates. The reference was the existing combined C7 tug scene. Saved prompts, tool, source paths, canvas measurements and SHA-256 hashes in `docs/production/claude-pm/assets/brief43-provenance.json`; checkerboard, cream and 200 px composite views are in `docs/production/claude-pm/assets/brief43-qa/`. I inspected the composite and raised the rope layer to meet both figures' hands. No scene code changed. Nothing remains unfinished. Question for Claude: none.

### Brief 51: website video manifest and embed plan (16 October 2026)

Created `docs/production/programme/site-video-manifest.json` and `docs/production/programme/website-video-plan.md`. Mapped all 19 published videos in upload waves 1 to 4 to existing Year 12 Module 5 site pages and exact section headings. Verified unique video IDs, page existence, heading text and published caption status. The plan records the current static page structure, a click-to-load YouTube embed, and a later self-hosting estimate. The site repository was read-only. No videos lacked a matching site page. The three rendered videos in brief 28j are not in the manifest because they have no published IDs yet. Question for Claude: none.

### Brief 28b: B2b YouTube upload (14 October 2026)

Published flowering plant reproduction B2b at https://youtu.be/j2fxl5xvDwE (9:17). Updated `docs/production/claude-pm/youtube/wave4-uploads.json` with the MP4 and SRT hashes, full description, syllabus quote, Public settings, timed English (Australia) captions, frame 2 thumbnail and playlist position 3. Studio showed HD complete, no notices and no audio warning. The public Biology playlist reloads in manual order B1, B2a, B2b, B2c, mould, B4. The 2017 Biology quote matches the official syllabus extract. Nothing in this brief remains unfinished. Question for Claude: Brief 28b did not request a ledger change, so the B2b row in `coverage-ledger.md` still says pending render.

### Brief 28: wave 4 YouTube uploads and coverage ledger (14 October 2026)

Created `docs/production/claude-pm/youtube/wave4-uploads.json` and updated `docs/production/claude-pm/coverage-ledger.md`. Published G01 https://youtu.be/BdF_sRrt5Yw, C4a https://youtu.be/yk5KVdipGRE and B4 https://youtu.be/P9jyiLiGhZI. The JSON records each MP4 hash, full description, settings, caption hash, thumbnail, playlist position and Studio URL. All three are Public, not made for kids, Education, English (Australia), with AI disclosure and published timed captions. Studio showed complete HD processing, no notices and no audio warning. Biology syllabus quotes in the draft were checked against the 2017 syllabus extract and official NSW source.

The public Chemistry playlist is in manual order C1, C2, G01, C3, C4a. B4 is at the end of the current Biology playlist. B2b could not be uploaded because its MP4 is absent; its URL is pending render. Insert B2b between B2a and B2c when rendered, then insert later Biology lessons before B4. The ledger now records the current C5 to C9, B3b, B4, B5a, B5b and B6a designs, lesson states, existing syllabus owners and the known B2b/B1 teaching overlap. No new ownership change or overlap was found. The channel's one-off verification still limits external links in descriptions to plain text. Question for Claude: send the B2b render when ready for its upload follow-up. No narration, lesson designs, route, speech, render, commit or push was changed.

### Brief 31: painted plates for C7, C8, B5a and B5b (14 October 2026)

Created eight C7 plates in `public/assets/chemistry/`: `c7-reactor-bed-v1.png`, `c7-condenser-cooler-v1.png`, `c7-ammonia-storage-tank-v1.png`, `c7-gas-compressor-pump-v1.png`, `c7-iron-catalyst-pellets-v1.png`, `c7-thick-steel-wall-v1.png`, `c7-flame-energy-v1.png` and `c7-pipe-leak-v1.png`. Created four C8 plates in the same folder: `c8-hot-hi-tube-v1.png`, `c8-thermometer-hot-v1.png`, `c8-stopwatch-v1.png` and `c8-round-flask-v1.png`. Created `public/assets/biology/b5a-epithelium-shedding-v1.png`, `b5a-plant-cell-plate-v1.png` and `b5b-parents-v1.png`.

Prompts, model, hashes, canvas sizes and alpha checks are in `docs/production/claude-pm/assets/brief31-provenance.json`. Checkerboard and cream views, 200 px views and an audit are in `docs/production/claude-pm/assets/brief31-qa/`. All 15 have real alpha, at least 10% transparent margin and a long side over 1600 px. I inspected the 200 px sheet. No retakes were needed.

The optional skin-graze close-up was not made because the voiced review records a later fix that reduced the hook zoom. Question for Claude: the voiced review calls the parents plate `b5b-parents-pair-v1`, while Brief 31 asks for `b5b-parents-v1.png`. I used the Brief 31 filename. No scene code, narration, speech, renders, commits or pushes were changed.

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

### Brief 30: G02 and G03 fact checks and assets (14 October 2026)

Created `docs/production/claude-pm/checks/g02-check.md` and `g03-check.md`. G02 Revision 3 has three findings: the graph-jump key note, the claim that air is free, and a narration typo. G03 Revision 3 has two findings: missing divisor brackets in scene 8b and a comparison of K with a concentration in scene 8a. Recomputed the worked values, shortcuts and named wrong answers. No stills or audio exist for these designs. Spot checks of NESA papers found no copied question.

Created `docs/production/claude-pm/assets/g02-g03-provenance.json` and `docs/production/claude-pm/assets/g02-g03-qa/README.md`. Neither design requests new painted art. Both use coded vessels by default and allow a later approved C8 vessel reuse. No image was generated. No lesson design, narration, scene code, speech, render, commit or push was changed.

Question for Claude: will you resolve the five findings before recording? Nothing in Brief 30 remains unfinished.


### Brief 32: pilot music and sound effects (14 October 2026)

Created 11 trimmed audio files in `public/assets/audio/pilot/` and `docs/production/claude-pm/assets/audio-pilot-provenance.json`. All source pages show the Pixabay Content License and no Content ID Registered label. All files peak below -6 dBFS. Use music only in silent countdown and key-notes holds.

- `countdown-bed-piano-sweet.mp3`: a light piano phrase with a steady pulse and soft end (15 s).
- `countdown-bed-piano-serenity.mp3`: a slower, warm piano option for thinking time (15 s).
- `keynotes-bed-gentle-piano.mp3`: sparse, peaceful piano for copying notes (48 s).
- `keynotes-bed-tranquil-harmony.mp3`: calm piano with a soft ambient feel (48 s).
- `intro-sting-elegant-piano.wav`: short, clean piano signature (2.8 s).
- `intro-sting-soft-piano.wav`: softer piano signature with a fading tail (3 s).
- `sfx-clock-tick-soft.wav`: one quiet countdown tick (0.8 s).
- `sfx-pop-bubble.wav`: small bubble pop for a reveal (0.8 s).
- `sfx-pencil-write.wav`: brief pencil stroke on paper (0.9 s).
- `sfx-page-turn.wav`: light paper turn for a scene change (0.9 s).
- `sfx-answer-ding.wav`: softened correct-answer ding (0.9 s).

Nothing could not be completed. Question for Claude: which bed and sting should lead the pilot after listening? No narration, scene code, speech, renders, commits or pushes were changed.

### Brief 33: B3a2 smooth-muscle cell pair (14 October 2026)

Created `public/assets/biology/b3a2-smooth-muscle-cell-relaxed-v1.png` and `public/assets/biology/b3a2-smooth-muscle-cell-contracted-v1.png`. Both are transparent 2500 x 724 PNGs with aligned central nuclei. Created `docs/production/claude-pm/assets/brief33-provenance.json` and checkerboard, 200 px and pair-overlay images in `docs/production/claude-pm/assets/brief33-qa/`. The alpha, margins and small-size checks passed. Nothing remains unfinished. No question for Claude.
### Brief 28c: B3a part 1 YouTube upload (14 October 2026)

Published B3a part 1 at https://youtu.be/bUPs256KyVY (Studio duration 8:31). Updated `docs/production/claude-pm/youtube/wave4-uploads.json` with the MP4 and SRT hashes, description, syllabus quote, settings, thumbnail and playlist position 6. B2b was already uploaded. Studio confirmed Public visibility, complete HD processing, no notices, no copyright issue and published timed English (Australia) captions. The Biology playlist reloaded in manual order B1, B2a, B2b, B2c, mould, B3a part 1, B4 in the signed-in view. The syllabus wording matches the official NSW 2017 Biology syllabus. No audio warning appeared.

Question for Claude: Studio currently shows B4, C4a and G01 as Private, although `wave4-uploads.json` records them as Public. I left their visibility unchanged. B4 moved to playlist position 7 when B3a was inserted; later Biology videos still need insertion before B4. Nothing else in Brief 28c remains unfinished.


### Brief 28d: YouTube visibility fix (15 October 2026)

Checked for an earlier completion before starting. No Brief 28d hand-in or completion record was present. Updated `docs/production/claude-pm/youtube/wave4-uploads.json` with Studio's before-and-after visibility checks.

- G01, https://youtu.be/BdF_sRrt5Yw: Private before, changed to Public and saved.
- C4a, https://youtu.be/yk5KVdipGRE: Private before, changed to Public and saved.
- B4, https://youtu.be/P9jyiLiGhZI: Private before, changed to Public and saved.
- B2b, https://youtu.be/j2fxl5xvDwE: Studio showed Public; no change.
- B3a part 1, https://youtu.be/bUPs256KyVY: Studio showed Public; no change.

Changed only the three visibility settings. Each save confirmed All changes saved and Public. Titles, descriptions, captions and thumbnails were not edited. The JSON visibility values now match Studio.

Checked both public 2017 Module 5 playlists. Each video appears once and both use Manual sorting. No playlist change was needed. Final Chemistry order: C1, C2, G01, C3, C4a. Final Biology order: B1, B2a, B2b, B2c, mould, B3a part 1, B4. B3a part 2 and B3b can be inserted before B4 later.

Nothing unfinished. Questions for Claude: none.

### Brief 28e: B3a part 2 YouTube upload (15 October 2026)

Published B3a part 2 at https://youtu.be/Mlz5XT5XR7o. Updated `docs/production/claude-pm/youtube/wave4-uploads.json` with the matching MP4 hash, timed SRT hash, metadata and Studio settings. Studio showed Public, published English (Australia) captions and no copyright issue. The Biology playlist shows B3a part 2 once at position 7, directly after B3a part 1 and before B4. The syllabus quote matches the official 2017 Biology extract. Studio showed 9:06. No audio warning appeared. HD processing later completed; Studio showed no notices. Auto-generated frame 2 shows the hormone feedback loop. No question for Claude.

### Brief 28f: C5 YouTube upload (15 October 2026)

Published C5 at https://youtu.be/NJjEgjilgAE. Updated `docs/production/claude-pm/youtube/wave4-uploads.json` with the matching MP4 hash, timed SRT hash, metadata and Studio settings. Studio showed Public, published English (Australia) captions, HD processing complete and no copyright issue. The Chemistry playlist shows C5 once at position 6, after C4a. C4b has not been uploaded. The syllabus quote matches the official 2017 Chemistry extract. Studio showed 7:12, while the brief described the local file as 7:11. Auto-generated frame 2 shows a worked equilibrium expression. No audio warning appeared. No question for Claude.

### Brief 34: C6a, C6b and G03 check and painted plates (15 October 2026)

Created `docs/production/claude-pm/checks/c6ab-g03-codex-check.md` with an error-only check of all three designs. All "Numbers to verify" arithmetic passes. Two findings remain for Claude: the C6b author note mixes iodine Kp and Kc at 800 K, and official NESA wording does not establish the universal claim that an HSC question never needs a quadratic formula. The report cites NIST, JANAF, the 2017 syllabus and NESA exam feedback. No scripts were edited.

Created `public/assets/chemistry/c6b-engine-cylinder-v1.png`, `c6b-hot-iodine-tube-v1.png` and `g03-carbon-vessel-v1.png`. Prompts, source paths, hashes and alpha checks are in `docs/production/claude-pm/assets/brief34-provenance.json`. Checkerboard and 200 px QA views are in `docs/production/claude-pm/assets/brief34-qa/`. All three are transparent 1600 x 2400 PNGs with more than 8 percent empty margin on every side. No video code, speech, renders, commits or pushes were changed. Nothing in the brief remains unfinished. Question for Claude: will you resolve the two fact-check findings before recording?

### Brief 28g: C4b and C8 YouTube upload (15 October 2026)

Both local MP4 SHA-256 hashes match the brief. The C4b and C8 syllabus quotes match the wording in the official 2017 Chemistry document held at `out/research/curriculum/chemistry-2017-syllabus.docx`. The requested C8 description correction is already in `docs/production/claude-pm/youtube/wave4-metadata-draft.json`. Both timed caption files exist and were hashed.

Upload and Studio verification remain unfinished. Browser control repeatedly failed to load its request-header policy, and the Windows computer-use fallback could not connect to its native pipe. A pre-existing Studio tab points to C8 video ID `IWS7_MDw-yc`; YouTube's public oEmbed endpoint identifies that ID with the C8 title and HSCScience channel. Its file, visibility, captions and playlist position are unverified, so no new upload record or URL was added to `wave4-uploads.json`. C4b also remains unverified. Question for Claude: can Studio access be restored so both uploads and playlist order can be checked without creating a duplicate C8 video?

### Brief 35: aligned process clip plate pairs (15 October 2026)

Completed seven plate pairs. New or revised files are `public/assets/biology/b6a-endosymbiosis-outside-v1.png`, `b6a-endosymbiosis-inside-v1.png`, `b5a-skin-healed-v1.png`, `b2b-pollen-tube-start-v1.png`, `b3a2-follicle-small-v1.png`, `b3a2-follicle-ripe-v1.png`, and `public/assets/chemistry/c11-cuso4-beaker-crystal-v1.png`, `c11-cuso4-beaker-dissolved-v1.png`, `c13-pbi2-tube-clear-v1.png`, `c13-pbi2-tube-precipitate-v1.png`, `c7-condenser-collector-empty-v1.png`, `c7-condenser-collector-liquid-v1.png`. The B5a and B2b pairs use their existing start or end plate as specified.

Created `docs/production/claude-pm/assets/brief35-provenance.json` and 63 QA PNGs in `docs/production/claude-pm/assets/brief35-qa/`. All plates have the requested canvas, alpha channel and 8 percent transparent margins. The difference images are local to the described process regions. The B6a difference includes a vesicle partly covered by the bacterium's enclosing membrane and the host membrane closing at entry. The B3a2 start has one small egg-bearing follicle; its surrounding tissue was repainted locally. No pair remains unaligned. Original prompts and model identifiers for some plates that already existed locally could not be recovered and are marked unknown in provenance.

Questions for Claude: please inspect the B3a2 tissue transition at playback speed before making a clip, and confirm the C13 lead(II) iodide example when its lesson design is written. No video clips, lesson designs, code, speech, renders, commits or pushes were made.

### Brief 28g completion: C4b and C8 YouTube verification (15 October 2026)

Studio showed that both videos had already been uploaded. C4b is Public at https://youtu.be/jDkHt4rf6bI (8:37), and C8 is Public at https://youtu.be/IWS7_MDw-yc (8:51). Both filenames match the approved local MP4s. Studio showed HD complete, no notices, AI disclosure Yes, Education, English (Australia), and published timed captions. The public Chemistry playlist showed C4b once after C4a and C8 once after C5, with Manual sorting. Both local MP4 hashes match Brief 28g. Added the two entries to `docs/production/claude-pm/youtube/wave4-uploads.json`. No duplicate upload was made. Nothing in Brief 28g remains unfinished. No question for Claude.

### Brief 36: B6a scale plates (15 October 2026)

Created `public/assets/biology/b6a-tennis-ball-v1.png` (1600 x 1600) and `public/assets/biology/b6a-long-walk-strip-v1.png` (4000 x 800). Both are ink and watercolour RGBA plates. The ball has more than 8 percent clear margin and reads at 200 px. The walk has a connected path, with the house, park, shops, oval, river and bridge, hill and town in order. Created `docs/production/claude-pm/assets/brief36-provenance.json` and seven QA images in `docs/production/claude-pm/assets/brief36-qa/`, including checkerboard views, 200 px views and three 1920 px pan crops. Nothing remains unfinished. Question for Claude: place the coded ball and thread so the small starting house remains visible when that matters to the opening comparison.

### Brief 28h: C6a and C9 YouTube upload (15 October 2026)

Published C6a at https://youtu.be/_NLAkMBNyRY (10:17) and C9 at https://youtu.be/9TxH_y3ZOdU (8:49 in Studio). Both local MP4 SHA-256 hashes matched Brief 28h. Corrected and checked the 2017 Chemistry syllabus quotes in `wave4-metadata-draft.json` before upload. Studio confirmed the approved filenames and descriptions, Public, not Made for Kids, AI disclosure Yes, Education, English (Australia), published timed SRT captions, HD complete and no notices. The copyright checks found no issues. Both use auto-generated frame 2 as their thumbnail. The public Chemistry playlist uses Manual sorting and, after reload, shows C6a once directly after C5 at position 8, C8 at position 9 and C9 once after C8 at position 10. Updated `wave4-uploads.json` with both records and C8's new position. Nothing in Brief 28h remains unfinished. No question for Claude.

### Brief 37: fact-check sweep (16 October 2026)

Created `docs/production/claude-pm/checks/codex-sweep-37.md`. Recomputed the G03a, G03b, G03c, moved G03d, C6b Revision 4, C9 Revision 5 and B6a scale values; checked the cited 2017 syllabus wording and science sources. Found two B6a on-screen science overstatements: chromosomal genes shown as spreading only by division, and plant organelle DNA presented as invariably circular. All requested arithmetic passed. G03d holds the NOCl and NO2/SO2 questions named in the brief after the 16 October split. Nothing remains unchecked. Question for Claude: please resolve the two B6a findings before release.

### Brief 41: pre-design packs (16 October 2026)

Created twelve packs in `docs/production/claude-pm/pre-design/`: `chem-c10-colourimetry.md`, `chem-c11-ka-kb.md`, `chem-c12-dissolution-indigenous.md`, `chem-c13-solubility-rules-precipitation.md`, `chem-c14-ksp.md`, `chem-c15-qsp-common-ion.md`, `bio-b7-transcription.md`, `bio-b8-translation.md`, `bio-b9-proteins-phenotype.md`, `bio-b10-inheritance-patterns.md`, `bio-b11-punnett-pedigrees.md`, and `bio-b12-population-genetics-technologies.md`. Each draws on the raw site lesson and extract, quotes the 2017 syllabus, checks worked values, and records exam traps, real visual subjects, prior teaching and questions for Claude. No narration or site files were changed.

Site findings for Claude: L13 Chemistry's K ≈ 208 does not establish that most initial reactants became product; L14's HF dissociation at 0.100 mol/L is about 7.9%, its HNO₂ Ka depends on the reference, and its Haber K pair needs a valid source; L15's cycasin-as-solid-dissolution model conflicts with hydrolysis and leaching accounts; L16's carbonate choice ignores calcium and magnesium co-precipitation; L17's raw Ca(OH)₂ and Ag₂SO₄ values still need the recorded site corrections; L18's groundwater solubility question ignores existing calcium. Biology L11 needs anticodon direction labels; L12 overstates the Beadle and Tatum conclusion; L15 miscredits discovery of AB and has an unsupported transfusion fatality figure; L16 to L19 retain the Belmont, Pitchfork, UK Biobank and deCODE problems recorded in `site-corrections.md`, plus unsupported case statistics flagged in the B12 pack. The PbSO₄ value 1.6 × 10⁻⁸ is supported by university references; its precipitation example is valid. Brief 38 and 39 `m5x-` plates were not present at the asset check.

Open question for Claude: Brief 41's C10 to C15 and B10 to B12 labels do not match the current canonical route IDs one for one. Which video IDs and focused boundaries should the designs use? Nothing in the requested pack set remains unfinished.

### Brief 40: coded-icon audit and plates (16 October 2026)

Audited C06a, C06b, C09, G03a, G03b and B06a against source and existing stills. Added the "15 Oct audit (brief 40)" table to `docs/production/claude-pm/assets/coded-icon-audit.md`. Created seven plates: `public/assets/chemistry/c9-ice-cube-v1.png`, `c9-colourimeter-v1.png`, `g03a-clear-vessel-v1.png`, and `public/assets/biology/b6a-anonymous-cell-v1.png`, `b6a-magnifier-v1.png`, `b6a-band-loop-v1.png`, `b6a-band-twist-v1.png`. Wrote `docs/production/claude-pm/assets/brief40-provenance.json` and QA views in `docs/production/claude-pm/assets/brief40-qa/`. All seven are transparent PNGs with a visible long side of at least 1600 px and at least 8 percent clear margin. No code, speech or render was changed. Question for Claude: preserve the B6a rubber band's visible twisting movement when choosing whether to use the matched painted endpoints; keep the current morph until then.

### Brief 28i: C6b YouTube upload (16 October 2026)

Published C6b at https://youtu.be/Zs1oO5eCIqc (11:15). The local MP4 SHA-256 matched the brief, and the description's quoted Chemistry dotpoint matched the official 2017 syllabus. Studio confirmed the approved filename and metadata, Public, not Made for Kids, AI disclosure Yes, Education, English (Australia), published timed take03 SRT captions, HD complete and no notices. The copyright check found no issues. The thumbnail is auto-generated frame 3. After a reload, the public Chemistry playlist showed C6b once at position 9 directly after C6a, with Manual sorting. Updated `docs/production/claude-pm/youtube/wave4-uploads.json` with C6b and the shifted C8/C9 positions. Nothing in Brief 28i remains unfinished. No question for Claude.


### Brief 42: YouTube chapters, end screens and audit (16 October 2026)

Added or verified 5 to 9 chapters in the Studio descriptions of all 12 wave 4 videos. The first chapter is 0:00, every chapter lasts at least 10 seconds, and the original description and syllabus block remain in place. C6b's nine chapters were computed from its measured scene starts. The chapters and audit are recorded in `docs/production/claude-pm/youtube/wave4-uploads.json`.

Checked all 19 published Module 5 videos in Studio and both public playlists. Playlist order is correct, with 11 Chemistry and eight Biology videos. Studio shows Public, HD complete, a thumbnail, the syllabus dotpoint and no notices for each. Upload records show published English (Australia) captions and clear copyright checks. No caption or playlist fix was needed.

| Video | Playlist position | Visibility | Captions | Dotpoint | Thumbnail | Warnings | End screen |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [Sexual and Asexual Reproduction: Continuity and Variation](https://youtu.be/44FFfv7RGck) | Bio 1 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [External and Internal Fertilisation: Why Egg Numbers Differ](https://youtu.be/0P33z4D2q0E) | Bio 2 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [bio-m5-b02b](https://youtu.be/j2fxl5xvDwE) | Bio 3 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [How Single-Celled Organisms Reproduce: Fission and Budding](https://youtu.be/kG-KexGgCzc) | Bio 4 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [How Bread Mould Spreads: Spores and New Growth](https://youtu.be/w7edKqGAUwA) | Bio 5 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [bio-m5-b03a](https://youtu.be/bUPs256KyVY) | Bio 6 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [bio-m5-b03a2](https://youtu.be/Mlz5XT5XR7o) | Bio 7 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [bio-m5-b04](https://youtu.be/P9jyiLiGhZI) | Bio 8 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [Static and Dynamic Equilibrium: Equal Rates, Not Equal Amounts](https://youtu.be/zaC5iXuovKg) | Chem 1 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [How Reversible Reactions Approach Equilibrium](https://youtu.be/vd9Ory9-flE) | Chem 2 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [chem-m5-g01](https://youtu.be/BdF_sRrt5Yw) | Chem 3 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [Le Chatelier’s Principle: Concentration and Temperature](https://youtu.be/w0GzgApQhQY) | Chem 4 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [chem-m5-c04a](https://youtu.be/yk5KVdipGRE) | Chem 5 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [chem-m5-c04b](https://youtu.be/jDkHt4rf6bI) | Chem 6 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [chem-m5-c05](https://youtu.be/NJjEgjilgAE) | Chem 7 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [chem-m5-c06a](https://youtu.be/_NLAkMBNyRY) | Chem 8 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [chem-m5-c06b](https://youtu.be/Zs1oO5eCIqc) | Chem 9 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [chem-m5-c08](https://youtu.be/IWS7_MDw-yc) | Chem 10 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |
| [chem-m5-c09](https://youtu.be/9TxH_y3ZOdU) | Chem 11 | Public | EN-AU published | Yes | Set | None shown | Skipped: key notes |

End screens were skipped as the brief permits. The final 15 to 20 seconds show key notes across the placement area. Studio's video plus subscribe template covered the C5 notes during inspection, so the draft was discarded. The other final frames use the same full notes treatment. No end-screen change was saved.


### Brief 39: Biology genetics plates (16 October 2026)

Completed 23 transparent, 2000 x 2000 Biology plates. Six were generated in this pass, and 17 pre-existing files were inspected and retained. Each has at least 8 percent clear margin on every side. The source of the 17 existing plates could not be recovered, so provenance marks it unknown.

Plate | Status
--- | ---
`public/assets/biology/m5x-blood-typing-tile-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-cattle-red-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-cattle-roan-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-cattle-white-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-cell-protein-synthesis-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-cheek-swab-v1.png` | Created and QA checked
`public/assets/biology/m5x-enzyme-substrate-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-fly-red-eye-v1.png` | Created and QA checked
`public/assets/biology/m5x-fly-white-eye-v1.png` | Created and QA checked
`public/assets/biology/m5x-gel-tank-v1.png` | Created and QA checked
`public/assets/biology/m5x-hydrangea-blue-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-hydrangea-pink-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-pea-green-round-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-pea-green-wrinkled-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-pea-short-v1.png` | Created and QA checked
`public/assets/biology/m5x-pea-tall-v1.png` | Created and QA checked
`public/assets/biology/m5x-pea-yellow-round-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-pea-yellow-wrinkled-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-red-blood-cells-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-ribosome-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-snapdragon-pink-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-snapdragon-red-v1.png` | Existing, inspected and QA checked
`public/assets/biology/m5x-snapdragon-white-v1.png` | Existing, inspected and QA checked

Provenance and per-plate QA views: `docs/production/claude-pm/assets/brief39-provenance.json` and `docs/production/claude-pm/assets/brief39-qa/`. The six pair or set views cover plants, seeds, cattle, snapdragons, flies and hydrangeas.

Site match: the four existing seed colour and shape plates cover the round and wrinkled pea examples. The site population lesson uses earlobe samples, so a field quadrat would be unrelated and was not made. The site protein extract does not name hair or muscle as specific examples, so those plates were not made. Fruit flies, cheek swab and gel tank are prepared assets, but the site does not explicitly use those subjects. Confirm their role when designing the lessons.

New image prompts used built-in image generation: tall and short mature garden peas in the same natural-history watercolour style; a matching top-view red-eyed Drosophila and a white-eye edit retaining the pose; a sterile cheek swab beside a sample tube; and a blank gel electrophoresis tank with wells, leads and power supply. All requested no labels or background and a true alpha channel. The fly pair had bright edge artefacts removed in postprocessing.

Nothing else in Brief 39 remains to produce from the site examples. Question for Claude: if the sex-linkage lesson uses only human colour blindness or haemophilia, should the fruit fly pair stay as reserve artwork?



### Brief 38: Chemistry solubility plates (16 October 2026)

Completed 22 painted Chemistry plates on 16 October 2026. Generated with built-in imagegen, then centred on 2000 x 2000 transparent canvases.

Provenance: docs/production/claude-pm/assets/brief38-provenance.json
QA: docs/production/claude-pm/assets/brief38-qa/

## Plates

- public/assets/chemistry/m5x-colourimeter-v1.png: Open school colourimeter showing the sample slot.
- public/assets/chemistry/m5x-cuvette-1-v1.png: Iron thiocyanate coloured solution, palest standard.
- public/assets/chemistry/m5x-cuvette-2-v1.png: Iron thiocyanate coloured solution, second standard.
- public/assets/chemistry/m5x-cuvette-3-v1.png: Iron thiocyanate coloured solution, middle standard.
- public/assets/chemistry/m5x-cuvette-4-v1.png: Iron thiocyanate coloured solution, fourth standard.
- public/assets/chemistry/m5x-cuvette-5-v1.png: Iron thiocyanate coloured solution, deepest standard.
- public/assets/chemistry/m5x-cuvette-unknown-v1.png: Iron thiocyanate coloured solution, unknown middle shade.
- public/assets/chemistry/m5x-strong-acid-mg-v1.png: Magnesium ribbon in clear acid with many gas bubbles.
- public/assets/chemistry/m5x-weak-acid-mg-v1.png: Matching magnesium ribbon in clear acid with few gas bubbles.
- public/assets/chemistry/m5x-vinegar-bottle-v1.png: Plain unlabelled bottle of pale vinegar.
- public/assets/chemistry/m5x-saturated-beaker-v1.png: Clear solution with undissolved salt crystals at the bottom.
- public/assets/chemistry/m5x-unsaturated-beaker-v1.png: Matching clear solution with no solid remaining.
- public/assets/chemistry/m5x-limestone-cave-v1.png: Limestone cave with stalactites and stalagmites.
- public/assets/chemistry/m5x-kidney-stone-v1.png: Layered mineral stone with blank disc for scale.
- public/assets/chemistry/m5x-barium-meal-glass-v1.png: Glass of opaque white barium sulfate suspension.
- public/assets/chemistry/m5x-ppt-agcl-white-v1.png: Tube with white settled silver chloride precipitate.
- public/assets/chemistry/m5x-ppt-pbi2-yellow-v1.png: Tube with yellow settled lead(II) iodide precipitate.
- public/assets/chemistry/m5x-ppt-cuoh2-blue-v1.png: Tube with pale blue settled copper(II) hydroxide precipitate.
- public/assets/chemistry/m5x-ppt-feoh3-brown-v1.png: Tube with brown settled iron(III) hydroxide precipitate.
- public/assets/chemistry/m5x-no-ppt-clear-v1.png: Matching tube with clear colourless liquid and no solid.
- public/assets/chemistry/m5x-cycad-plant-v1.png: Generic Australian Macrozamia cycad with a seed cone.
- public/assets/chemistry/m5x-cycad-leaching-v1.png: Crushed cycad kernels in a plain woven bag in flowing fresh water.

## QA and use notes

All 22 files have real alpha, at least 8% clear margin, and 200 px checkerboard and cream views. Cuvettes, acid beakers, salt beakers and precipitate tubes have side-by-side sheets. The plate sets align by object bounding box; minor hand-painted interior detail differs across imagegen edits.
The cycad plates are generic. The site extract does not identify a Nation or region, and museum research says preparation varied by plant and place. See provenance before narration.
The colourimeter, geology and clinical plates are art for design use, not scientific measurement evidence.



Briefs 38 and 39 local media handoff: `out/archives/brief38-39-plates-2026-10-16.zip` contains all 45 plate PNGs and 101 QA PNGs. ZIP CRC and all member hashes passed. See `docs/production/claude-pm/assets/brief38-39-media-checkpoint.json`. The archive has not been uploaded, so transfer it before reviewing these assets on another computer.

### Brief 44: Module 7 and 8 site-lesson extracts (16 October 2026)

Created 81 lesson extracts: `docs/production/claude-pm/site-extracts/chem-m7-l01.md` to `chem-m7-l23.md`, `chem-m8-l01.md` to `chem-m8-l16.md`, `bio-m7-l01.md` to `bio-m7-l21.md`, and `bio-m8-l01.md` to `bio-m8-l21.md`. Created the subject tables in `site-extracts/m7-index.md` and `site-extracts/m8-index.md`, plus `site-corrections-m7.md` and `site-corrections-m8.md`. Read the requested Chemistry Module 7 and Module 8 inventories. The site repository was read-only. No verified scientific corrections were recorded. All 81 extracts contain the nine requested headings, point to an existing source page, contain no em dash, and are under 600 words. Nothing remains unfinished. Question for Claude: none.

### Brief 28j: B6a, G03c and G03d YouTube uploads (16 October 2026)

Uploaded the three approved MP4s to HSCScience after checking each exact SHA256. All are Public, in the matching Year 12 Module 5 playlist, with Education category, English (Australia), not made for kids, AI disclosure Yes, and timed SRT captions. Studio showed no copyright issues or notices and HD processing completed. The public playlists use Manual sorting: B6a follows B4 at Biology position 9; G03c and G03d follow C9 at Chemistry positions 12 and 13. Seven scene-timed chapters were saved in each description. End screens were skipped after checking the local MP4s 15 seconds before the end; all three show key notes there, which end-screen cards would cover.

- B6a: https://youtu.be/2vsAqgI-1NI (9:36). Corrected its draft syllabus quotation against the 2017 Biology text before upload. Selected an illustrated cell frame as the thumbnail.
- G03c: https://youtu.be/UPoHGWWm9MA (7:03). Selected auto-generated frame 2 with the worked ICE table.
- G03d: https://youtu.be/wSSh97iXkio (8:20). Selected auto-generated frame 1 with the worked problem and vessel.

Full hashes, caption paths and hashes, descriptions, chapter lists, playlist positions and audit notes are in `docs/production/claude-pm/youtube/wave4-uploads.json`. The site video manifest now maps 22 published videos. The external syllabus links in YouTube descriptions remain plain text pending YouTube channel verification.

Brief 43 media handoff: `out/archives/brief43-tug-plates-2026-10-16.zip` contains the three transparent tug layers and four QA images. ZIP CRC passed; SHA256 is `b83a740daa53c9d74cf7a8efc1e8d7729d9ed5a2ea1a232743a49b974c4931ac`. The archive has not been uploaded, so transfer it before reviewing the plates on another computer.

### Brief 53: P02 and C10 apparatus plates (16 October 2026)

Created all seven requested transparent chemistry plates in `public/assets/chemistry/`: blank cuvette, Fe and SCN reagent bottles, graduated pipette with filler, stoppered volumetric flask, empty colourimeter, and ammonia bottle. Each PNG is 2000 x 2000 with a real alpha channel. The visible artwork has at least 8% canvas margin. The cuvette and colourimeter register against their original plates to within a few pixels at full size. Provenance is in `docs/production/claude-pm/assets/brief53-provenance.json`; the contact sheet and original/new overlays are in `docs/production/claude-pm/assets/brief53-qa/`. No remaining item or question for Claude.

### Brief 46: Module 6 pre-design packs (16 October 2026)

Created 32 packs, 16 Chemistry and 16 Biology, plus `docs/production/claude-pm/pre-design/m6-index.md`. They cover the 38 site lessons through adjacent-topic consolidation. All packs have sections 1 to 7, are under 1,500 words, and passed relative-link and em-dash checks. A root spot check caught and resolved shortened syllabus cells in the index and merged numerical bullets. A new Chemistry L17 equivalence-pH error is documented in the affected pack and `docs/production/claude-pm/site-corrections-m6.md`. No remaining pack work or question for Claude.

### Brief 50: HSC question-type banks (16 October 2026)

Created seven banks in `docs/production/claude-pm/research/`: `question-types-chem-m6.md`, `question-types-chem-m7.md`, `question-types-chem-m8.md`, `question-types-bio-m5.md`, `question-types-bio-m6.md`, `question-types-bio-m7.md`, and `question-types-bio-m8.md`. Each ranks recurring Section II types using confirmed 2019 to 2025 NESA question references, gives a method and marker-reported mistakes, and maps site lessons. Counts are explicitly lower bounds because multiple-choice items were not classified. Root spot checked the Chemistry M6 bank. No remaining bank work or question for Claude.

### Brief 45: official NSW syllabus ledgers (16 October 2026)

Created six JSON content-point ledgers in `docs/production/programme/syllabus/`: 2017 Year 12 Biology and Chemistry Modules 5 to 8, plus 2025 Year 11 and Year 12 Biology and Chemistry. Each point has official source URL and exact text. `README.md` explains extraction and counts, `timeline.md` records implementation and HSC dates, and `physics-maths-overview.md` scopes those courses, including verified 2017 Mathematics point counts. `generate_ledgers.py` rebuilds the ledgers. Root spot checked files and timeline. Before public page citation, check 2017 DOCX page markers in Word; 2025 online pages have no page numbers. No question for Claude.

### Brief 54: chromosome and cell-division plates (16 October 2026)

Created all 15 requested Biology plates in `public/assets/biology/`: single and duplicated chromosomes with pink and teal variants, a homologous pair, three empty division-cell states, and the five-step DNA-to-chromosome zoom. The zoom chromosome repeats the duplicated plate so its appearance matches exactly. All PNGs are 2000 x 2000 with real alpha and at least 8% visible margin. `docs/production/claude-pm/assets/brief54-provenance.json` records sources, while `brief54-qa/` has a checkerboard sheet at 200 px plus colour, cell and zoom strips. I visually checked those views. No remaining item or question for Claude.

### Brief 49: Year 11 new-syllabus scoping (16 October 2026)

Wrote `docs/production/programme/year11-scoping.md`, `site-corrections-y11.md`, and the repeatable `build-year11-scoping.py`. The inventory covers 75 Biology 2025, 75 draft Chemistry 2025, and 66 live Chemistry 2017 site lessons. Created 216 matching short extracts in `docs/production/claude-pm/site-extracts/`. Root spot check found truncated sentences and noisy punctuation; the extractor was corrected and all extracts regenerated. They are under 600 words without ellipses or em dashes. Chemistry 2025 FA2 and FA3 lack structured syllabus metadata, so their point links are candidates for a lesson-body audit. No confirmed lesson-body science errors from this scoping pass. No question for Claude.

### Brief 48: Biology Module 6 plates (16 October 2026)

Created 23 transparent 2000 px plates in `public/assets/biology/`, named `m6-*-v1.png`, including two process pairs. Provenance is in `docs/production/claude-pm/assets/brief48-provenance.json`, the complete plate list is in `brief48-hand-in.md`, and visual QA is in `brief48-qa/`. Root inspected the contact sheet. All plates have at least 10% clear margin. Optional cigarette, albinism, flower-colour and GM salmon examples were omitted because the Module 6 site lessons do not use them. The seed-bank vault is concept art; the site specifically mentions Frozen Zoo. No remaining item or question for Claude.

### Brief 47: Chemistry Module 6 plates (16 October 2026)

Created 28 transparent plates in `public/assets/chemistry/`, named `m6-*-v1.png`. Provenance and QA are in `docs/production/claude-pm/assets/brief47-provenance.json` and `brief47-qa/`. All plates passed size, alpha, margin and contact-sheet checks. The three process pairs initially showed glass drift in overlay checks. The end plates were repaired using their generated changed liquid or bubbles within documented masks while retaining exact start pixels elsewhere. Independent RGBA comparison found zero differences outside the allowed masks, and refreshed overlays were inspected by root. Bee/wasp sting was omitted because the site pages do not use it. No remaining item or question for Claude.

Briefs 47, 48, 53 and 54 media handoff: `out/archives/brief47-48-53-54-plates-2026-10-16.zip` contains 213 plate, QA and provenance files. ZIP CRC and member SHA256 checks passed. Archive SHA256 is `6a7f022abff115eee9ecfa9e82a8ec02a4de78d3378902d8f0024e305c915581`; details are in `docs/production/claude-pm/assets/brief47-48-53-54-media-checkpoint.json`. The archive is local and has not been uploaded. Transfer it before reviewing these ignored media files on another computer.

### Brief 52: Physics and Maths video feasibility (16 October 2026)

Wrote `docs/production/programme/physics-maths-feasibility.md`. Counted 701 senior-adventure Physics and Maths pages by year and topic, checked for obvious placeholders, sampled three Physics and three Maths Advanced lessons, mapped existing explainer and read-only legacy capabilities, and checked four public HSC video sources. The report separates page presence from science or syllabus approval and proposes two narrow pilots and the missing shared visual components. No site or scene code changed. No owner decision requested yet.

### Brief 56: P02, C10, B6b and B6c fact check (18 October 2026)

Created `docs/production/claude-pm/checks/codex-check-56.md`. Found two errors: P02 states an approximate standards concentration as an equality (the recipe gives about 97.1% conversion), and C10 omits `(ACSCH098, ACSCH099)` from its quoted 2017 Chemistry syllabus subpoint. The remaining requested arithmetic, constants, sequences, mechanisms and syllabus wording checked out. Nothing could not be checked. Question for Claude: none.

### Brief 28k: G03b and B3b YouTube uploads (18 October 2026)

Uploaded both owner-approved MP4s after exact SHA256 checks. Both are Public, Education, English (Australia), not made for kids, AI use disclosed, with published timed SRT captions. HD processing completed; Studio showed no notices or copyright issues. Their descriptions include the official 2017 syllabus dotpoints and scene-timed chapters. Both end screens were skipped because the final key notes fill the screen. The public Manual playlists show G03b after C9 and before G03c at Chemistry position 12, and B3b after B3a part 2 and before B4 at Biology position 8.

- G03b: https://youtu.be/A0Z2-OLzRCI (Studio displays 6:44). Thumbnail: auto-generated frame 2.
- B3b: https://youtu.be/btrFMU7Yhxc (9:02). Thumbnail: auto-generated frame 2.

Updated `docs/production/claude-pm/youtube/wave4-uploads.json` with both records and the shifted positions. No unfinished upload step or question for Claude.

### Brief 59: B7, B8, C11 and C13 plates (18 October 2026)

Created `public/assets/biology/m5x-rabbit-himalayan-v1.png` and `m5x-rabbit-himalayan-patch-v1.png`, plus `public/assets/chemistry/m5x-thermometer-cold-v1.png`, `m5x-hot-pack-v1.png`, `m5x-cold-pack-v1.png` and `m5x-ppt-baso4-white-v1.png`. Provenance, dimensions, alpha boxes and hashes are in `docs/production/claude-pm/assets/brief59-provenance.json`. Checkerboard, 200 px and pair overlay views are in `docs/production/claude-pm/assets/brief59-qa/`. The rabbit, packs, thermometer and precipitate align with their paired plates in the inspected overlays.

The B8 pod `b2b-pod-seeds-v1.png` already has a clean alpha cutout. Its dark RGB outside the pod has zero alpha, so no v2 was needed. The four pea-seed plates and two fly plates read at 160 px on cream; the runner and seedling read side by side at 300 px. Their views are in the same QA folder. The C11 lesson asset brief specifies a standalone thermometer aligned to `c8-thermometer-hot-v1.png`, while Brief 59 says it is in a beaker. I followed the C11 design. Question for Claude: is a separate beaker composition needed?
### Brief 28l: C7 YouTube upload (18 October 2026)

Uploaded the owner-approved C7 MP4 after its exact SHA256 check. C7 is Public at https://youtu.be/8hZ3MVi7kHU (7:51), Education, English (Australia), not made for kids, with AI use disclosed and the measured timed SRT captions published. Studio showed HD processing complete, no notices and no copyright issues. The description has nine scene-timed chapters and the complete 2017 Chemistry dotpoint wording; I changed the C7 draft's Le Chatelier apostrophe to a plain apostrophe. The public Manual Chemistry playlist shows C7 at position 10, after C6b and before C8, verified after reload. Auto-generated thumbnail frame 2 shows the yield and rate graph. An end screen was skipped because the final key notes fill the screen and elements would cover the text.

Updated `docs/production/claude-pm/youtube/wave4-metadata-draft.json` and `docs/production/claude-pm/youtube/wave4-uploads.json`, including later Chemistry playlist positions. No unfinished upload step or question for Claude.

### Brief 57: Year 12 Modules 7 and 8 pre-design packs (18 October 2026)

Created 67 factual packs in `docs/production/claude-pm/pre-design/`: 18 `chem-m7-*.md`, 16 `bio-m7-*.md`, 14 `chem-m8-*.md` and 19 `bio-m8-*.md`. The complete pack lists, site lesson mapping, 2017 syllabus points, prerequisites and suggested order are in [m7-index.md](pre-design/m7-index.md) and [m8-index.md](pre-design/m8-index.md). Each pack has sections 1 to 7, stays below 1,500 words and lists painted plates needed. The site lessons were read-only. All 67 packs and both indexes passed section, local-link and em-dash checks.

**Site errors found, Chemistry M7:** L06's C4H8 hydration case is underdetermined; L07's retained enol would not produce propan-2-ol; L11's methanol measurements give about -748 kJ/mol and 103%, not -383 kJ/mol and 53%; L18's litmus results contradict its expected compounds and its amide-protonation claim is wrong; L21's monomer recovery, PTFE and 260 °C statements need correction; L22 says nylon melting breaks intrachain amide bonds; L23 calls triglycerides polymers. The affected packs give the source and corrected reasoning.

**Site errors found, Biology M7:** L01 assigns 11 million cases in 188 countries to 11 March 2020 instead of the WHO's over 118,000 cases in 114 countries; L02 places the oomycete Pythium among protozoans; L05 calls 4 CFU/100 mL four times a zero E. coli guideline; L12 conflates initial naive T-cell activation with target-cell recognition; L17 calls Wolbachia genetically modified; L18 calls 390 million four times 247 million and treats Wolbachia as inherently resistance-proof; L21 treats a three-country comparison as causal proof.

**Site errors found, Chemistry M8:** L01 infers Mohr precipitation order from pure-water molar solubility; L04 uses an outdated lead guideline, so its comparison is about 1,400-fold, not 700-fold; L06 overstates coliform and conductivity claims; L08 loses L/kg units and overstates what field ratios and one mercury result prove; L11 conflates acidified permanganate with brown MnO2 conditions and overstates test specificity; L15 treats mass as a unique formula; L16 calls saponification base-catalysed and misstates the Pfizer sertraline change. Chromatography is a site extension, not a named 2017 Module 8 dotpoint.

**Site error found, Biology M8:** L07 says PKU was usually diagnosed at age 2 to 4 before screening. Symptoms of untreated PKU can appear by 3 to 6 months, so the pack removes that unsupported historical age and cites the medical source. The L12 rate table and L13 treatment arithmetic reproduce. The L19 LASIK percentage and Australian price ranges require current source checks before use.

**Could not finish independently:** Several Chemistry M7 property-table values, unspecified amine/amide Kb values, polymer grade figures and average bond-energy values need named reference checks. Chemistry M8 and Biology M8 packs mark other source-dependent claims at point of use. These are open source checks, not approved recording copy. Question for Claude: which of these source-dependent examples will actually enter a video? Check those before design or recording. No narration, lesson JSON, scene code or site page changed.

### Brief 63: published Module 5 thumbnail drafts (18 October 2026)

Created 18 review-only 1280 x 720 PNGs in `docs/production/claude-pm/thumbnails/drafts/<lessonId>.png`, plus `drafts/contact-sheet.png`. Extracted five candidate frames per published video into `drafts/candidates/`, with three candidate sheets. `drafts/frame-choices.json` records each chosen frame, time, crop and hook; `drafts/build_thumbnails.py` rebuilds the set. All 18 MP4s in `wave4-uploads.json` were available. No thumbnail was uploaded.

The template uses an enlarged visual from the actual video on warm paper, a short white hook on a fixed left panel, Chemistry teal or Biology blue, an amber divider, and the HSCScience, Module 5 and lesson tags. Arial Bold was used because the site's Outfit and DM Sans files are WOFF2, not directly usable by Pillow here. Every draft is under 2 MB. G03b has no strong painted focal frame among the five samples, so its ICE table is the best honest choice. C05 is likewise formula-led and uses its K expression. Nothing else was blocked. Question for Claude: none.

### Brief 61: Year 11 Biology pre-design packs (18 October 2026)

Created 105 packs in `docs/production/claude-pm/pre-design/y11-bio/`: 34 `fa1-lNN-*.md`, 35 `fa2-lNN-*.md` and 36 `fa3-lNN-*.md`. [y11-bio-index.md](pre-design/y11-bio/y11-bio-index.md) lists every file, its suggested order, site lesson and 2025 syllabus IDs. All 75 site lessons are covered, an average of 1.4 videos per lesson. The site pages were read-only. Every pack has sections 1 to 7, exact ledger quotation with ID, page material and checks, traps, plate needs and Year 12 Module 5 overlap. All passed section, exact-quote, under-1,500-word, relative-link and no-em-dash checks.

Source findings to resolve before design: FA1 L05 needs the syllabus field-of-view cell-size method in addition to image size divided by magnification; FA1 L24 should distinguish random segregation from independent assortment. FA2 L24 overgeneralises hormone responses; FA2 L25 treats approximate temperature values as hard limits and denaturation as permanent. FA3 L11 applies a mammal temperature range to birds; FA3 L15 calls illustrative resistance data published; FA3 L17 asks for a full branching tree from human-reference distances alone. The affected packs give the corrections and source context. Recomputed examples include cube ratios, potometer and glucose data, quadrat totals and mark-release-recapture estimates. No site page, narration, lesson JSON or scene code changed. Question for Claude: none.

### Brief 64: P01, P03, B11 and B12 plates (18 October 2026)

Created 18 Chemistry PNGs in `public/assets/chemistry/`: the P01 cobalt pink/blue pair, Bunsen unlit/lit pair, magnesium ribbon and oxide ash on matching mats, an additional oxide ash dish plate, clear dropper, faded and diluted iron tubes, stopper, safety glasses, gloves, waste bottle and test tube holder; plus the P03 black-card and white-tile 48-well plates and blank-label dropper bottle. Created `public/assets/biology/m5x-cheek-swab-v2.png` and `m5x-gel-tank-v2.png`. File names, hashes, prompts, source references, dimensions and the well-centre grid are in `docs/production/claude-pm/assets/brief64-provenance.json`. Checkerboard, 200 px, pair and overlay views are in `docs/production/claude-pm/assets/brief64-qa/`.

The gel now has an empty row of wells across the black negative end, and the swab gap is clear at 200 px. The B11 cattle plates remain distinguishable in a 10 by 10 grid at 70 px. The P01 design uses a heatproof mat, while Brief 64 also requests an evaporating dish, so both ash treatments are supplied. The iron and cobalt pairs look aligned in overlay views; check them in the scene before freezing. NSW CSIS categories for cobalt(II) chloride solid and solution, lead(II) nitrate and barium nitrate remain unconfirmed because the official chemical lookup requires staff sign-in. No category was guessed. Question for Claude: can someone with staff CSIS access confirm those four entries?

### Brief 62: 2025 Year 11 Chemistry draft site review (18 October 2026)

Reviewed all 75 draft lesson pages read-only. Wrote `docs/production/claude-pm/site-corrections-y11-chem-new.md` and `docs/production/programme/y11-chem-new-site-review.md`. Recorded 45 lesson-level content correction jobs: FA1 19, FA2 10 and FA3 16. These include 13 wrong-science/calculation findings, 14 misleading findings and 18 lesson-specific incomplete-content findings; shared issues are separate. All 99 FA1 to FA3 syllabus points have topical pages, but required practical and source-investigation work is incomplete. The footer link is broken on all 75 pages, 63 pages lack a subject SVG/image/canvas, and launch comments still say 2027 instead of 2028. All 75 pages loaded locally and mounted Quick Check without page errors. No site files were edited. Question for Claude: will the owner fix the site and complete practical coverage before these pages become video sources?

### Brief 58: Module 7 Chemistry and Biology plates (18 October 2026)

Created 45 transparent 2000 x 2000 PNG plates, with provenance in `docs/production/claude-pm/assets/brief58-provenance.json` and checkerboard, cream, contact sheet and pair overlay views in `docs/production/claude-pm/assets/brief58-qa/`. Every file has real alpha and at least 8% clear margin. I inspected both contact sheets and the five pair overlays at 200 px. The pairs share a canvas, but their painted outlines are not pixel identical. Review the overlays before crossfading. Banana Panama disease was omitted because the site uses Banksia with Phytophthora and myrtle rust. Tapeworm, mosquito and tick are included because the site uses them. No people, formulas or labels were painted. No other item is unfinished. Question for Claude: none.

- `public/assets/chemistry/m7-fractional-distillation-column-v1.png`: painted fractional distillation column plate.
- `public/assets/chemistry/m7-school-distillation-setup-v1.png`: painted school distillation setup plate.
- `public/assets/chemistry/m7-reflux-apparatus-v1.png`: painted reflux apparatus plate.
- `public/assets/chemistry/m7-separating-funnel-clear-v1.png`: painted separating funnel clear plate.
- `public/assets/chemistry/m7-separating-funnel-cloudy-v1.png`: painted separating funnel cloudy plate.
- `public/assets/chemistry/m7-bromine-water-orange-v1.png`: painted bromine water orange plate.
- `public/assets/chemistry/m7-bromine-water-colourless-v1.png`: painted bromine water colourless plate.
- `public/assets/chemistry/m7-oil-gas-rig-v1.png`: painted oil gas rig plate.
- `public/assets/chemistry/m7-crude-oil-barrel-v1.png`: painted crude oil barrel plate.
- `public/assets/chemistry/m7-polymer-objects-v1.png`: painted polymer objects plate.
- `public/assets/chemistry/m7-camping-gas-burner-v1.png`: painted camping gas burner plate.
- `public/assets/chemistry/m7-ethanol-fuel-bottle-v1.png`: painted ethanol fuel bottle plate.
- `public/assets/chemistry/m7-soap-making-v1.png`: painted soap making plate.
- `public/assets/chemistry/m7-ester-fruit-v1.png`: painted ester fruit plate.
- `public/assets/chemistry/m7-perfume-bottle-v1.png`: painted perfume bottle plate.
- `public/assets/chemistry/m7-bromine-water-pair-v1.png`: painted bromine water pair plate.
- `public/assets/biology/m7-bacterium-rod-coccus-v1.png`: painted bacterium rod coccus plate.
- `public/assets/biology/m7-virus-particle-v1.png`: painted virus particle plate.
- `public/assets/biology/m7-fungal-hyphae-v1.png`: painted fungal hyphae plate.
- `public/assets/biology/m7-plasmodium-red-cell-v1.png`: painted plasmodium red cell plate.
- `public/assets/biology/m7-prion-folded-protein-v1.png`: painted prion folded protein plate.
- `public/assets/biology/m7-tapeworm-v1.png`: painted tapeworm plate.
- `public/assets/biology/m7-mosquito-vector-v1.png`: painted mosquito vector plate.
- `public/assets/biology/m7-tick-vector-v1.png`: painted tick vector plate.
- `public/assets/biology/m7-petri-colonies-v1.png`: painted petri colonies plate.
- `public/assets/biology/m7-agar-antibiotic-before-v1.png`: painted agar antibiotic before plate.
- `public/assets/biology/m7-agar-antibiotic-after-v1.png`: painted agar antibiotic after plate.
- `public/assets/biology/m7-microscope-v1.png`: painted microscope plate.
- `public/assets/biology/m7-inoculating-loop-v1.png`: painted inoculating loop plate.
- `public/assets/biology/m7-handwashing-sink-v1.png`: painted handwashing sink plate.
- `public/assets/biology/m7-face-mask-v1.png`: painted face mask plate.
- `public/assets/biology/m7-vaccine-vial-syringe-v1.png`: painted vaccine vial syringe plate.
- `public/assets/biology/m7-quarantine-sign-v1.png`: painted quarantine sign plate.
- `public/assets/biology/m7-healthy-leaf-v1.png`: painted healthy leaf plate.
- `public/assets/biology/m7-infected-leaf-v1.png`: painted infected leaf plate.
- `public/assets/biology/m7-banksia-phytophthora-v1.png`: painted banksia phytophthora plate.
- `public/assets/biology/m7-myrtle-rust-leaf-v1.png`: painted myrtle rust leaf plate.
- `public/assets/biology/m7-macrophage-v1.png`: painted macrophage plate.
- `public/assets/biology/m7-neutrophil-v1.png`: painted neutrophil plate.
- `public/assets/biology/m7-b-cell-v1.png`: painted b cell plate.
- `public/assets/biology/m7-t-cell-v1.png`: painted t cell plate.
- `public/assets/biology/m7-antibody-v1.png`: painted antibody plate.
- `public/assets/biology/m7-mast-cell-v1.png`: painted mast cell plate.
- `public/assets/biology/m7-macrophage-engulf-before-v1.png`: painted macrophage engulf before plate.
- `public/assets/biology/m7-macrophage-engulf-after-v1.png`: painted macrophage engulf after plate.


### Brief 60: Module 8 Chemistry and Biology plates (18 October 2026)

Created 49 transparent 2000 x 2000 ink and watercolour plates, 26 Chemistry and 23 Biology. All pass RGBA, hash and 8% margin checks. The prompt specs, site decisions and retakes are in `docs/production/claude-pm/assets/brief60-provenance.json`. Light, dark, 200 px and pair QA views are in `docs/production/claude-pm/assets/brief60-qa/`.

- `public/assets/chemistry/m8-aas-v1.png`: Atomic absorption spectrometer with hollow cathode lamp.
- `public/assets/chemistry/m8-bromine-water-clear-v1.png`: Bromine water after decolourisation.
- `public/assets/chemistry/m8-bromine-water-orange-v1.png`: Orange bromine water.
- `public/assets/chemistry/m8-dichromate-green-v1.png`: Green acidified dichromate result.
- `public/assets/chemistry/m8-dichromate-orange-v1.png`: Orange acidified dichromate.
- `public/assets/chemistry/m8-flame-ba-pale-green-v1.png`: Barium pale-green flame.
- `public/assets/chemistry/m8-flame-ca-brick-red-v1.png`: Calcium brick-red flame.
- `public/assets/chemistry/m8-flame-cu-blue-green-v1.png`: Copper blue-green flame.
- `public/assets/chemistry/m8-flame-k-lilac-v1.png`: Potassium lilac flame.
- `public/assets/chemistry/m8-flame-na-yellow-v1.png`: Sodium yellow flame.
- `public/assets/chemistry/m8-flame-sr-crimson-v1.png`: Strontium crimson flame.
- `public/assets/chemistry/m8-flame-test-off-v1.png`: Unlit burner for flame-test process clip.
- `public/assets/chemistry/m8-ir-spectrometer-v1.png`: Infrared spectrometer.
- `public/assets/chemistry/m8-mass-spectrometer-v1.png`: Mass spectrometer.
- `public/assets/chemistry/m8-nmr-machine-v1.png`: NMR machine.
- `public/assets/chemistry/m8-permanganate-clear-v1.png`: Colourless acidified permanganate result.
- `public/assets/chemistry/m8-permanganate-purple-v1.png`: Purple acidified permanganate.
- `public/assets/chemistry/m8-ppt-agbr-cream-v1.png`: Cream silver bromide precipitate.
- `public/assets/chemistry/m8-ppt-agi-pale-yellow-v1.png`: Pale-yellow silver iodide precipitate.
- `public/assets/chemistry/m8-ppt-feoh2-green-v1.png`: Green iron(II) hydroxide precipitate.
- `public/assets/chemistry/m8-river-sampling-bottle-v1.png`: River sample bottle with dipper, alternate.
- `public/assets/chemistry/m8-river-sampling-bottle-v2.png`: River sample bottle alone, preferred.
- `public/assets/chemistry/m8-sediment-core-v1.png`: Sediment core.
- `public/assets/chemistry/m8-sewage-treatment-pond-v1.png`: Sewage treatment pond.
- `public/assets/chemistry/m8-uv-visible-spectrophotometer-v1.png`: UV-visible spectrophotometer.
- `public/assets/chemistry/m8-water-testing-kit-v1.png`: Water-testing kit.
- `public/assets/biology/m8-cgm-reader-blank-v1.png`: Continuous glucose monitor reader with blank display, aligned with low and high states.
- `public/assets/biology/m8-cgm-reader-high-v1.png`: Continuous glucose monitor reader, high bar, aligned edit.
- `public/assets/biology/m8-cgm-reader-low-v1.png`: Continuous glucose monitor reader, low bar.
- `public/assets/biology/m8-cochlear-implant-v1.png`: Cochlear implant device only.
- `public/assets/biology/m8-contact-lenses-v1.png`: Contact lenses.
- `public/assets/biology/m8-ear-cutaway-v1.png`: Ear cutaway.
- `public/assets/biology/m8-eye-cutaway-v1.png`: Eye sagittal cutaway.
- `public/assets/biology/m8-glasses-v1.png`: Eyeglasses.
- `public/assets/biology/m8-hearing-aid-v1.png`: Hearing aid device only.
- `public/assets/biology/m8-heart-v1.png`: Heart organ.
- `public/assets/biology/m8-hospital-bed-v1.png`: Empty hospital bed.
- `public/assets/biology/m8-insulin-pen-v1.png`: Plain insulin pen.
- `public/assets/biology/m8-kidney-nephron-v1.png`: Kidney cutaway with adjacent nephron.
- `public/assets/biology/m8-lungs-healthy-v1.png`: Healthy lungs, first matched state.
- `public/assets/biology/m8-lungs-smoker-v1.png`: Smoker lungs, aligned edit of healthy lungs.
- `public/assets/biology/m8-pancreas-v1.png`: Isolated pancreas gland.
- `public/assets/biology/m8-skin-cross-section-v1.png`: Skin anatomy cross-section.
- `public/assets/biology/m8-skin-melanoma-v1.png`: Skin block with melanoma lesion, aligned edit.
- `public/assets/biology/m8-skin-normal-v1.png`: Skin block with an ordinary mole, first matched state.
- `public/assets/biology/m8-sun-v1.png`: Standalone sun.
- `public/assets/biology/m8-sun-protection-v1.png`: Hat and plain sunscreen bottle.
- `public/assets/biology/m8-thermometer-v1.png`: Plain thermometer.
- `public/assets/biology/m8-world-map-v1.png`: Unlabelled world map.

Reused the AgCl, BaSO4, Cu(OH)2, Fe(OH)3 and PbI2 precipitation tubes and the colourimeter. Added cream AgBr, pale-yellow AgI and green Fe(OH)2 from the Module 8 ion-test pack. The six flame colours share one burner. Generated line differences in the flame and reagent process pairs call for cuts or short dissolves.

Cataract and lens-clouding plates were omitted because no Module 8 Biology site lesson uses cataracts. The glucose pair uses the site continuous glucose monitor reader. Strontium flame, sediment core, hospital bed, insulin pen and map are brief-requested context artwork but are not named on the current site pages. The unlabelled map has watercolour-filled continents for legibility at 200 px. No other requested plate remains unfinished. Question for Claude: none.

### Brief 70: B13, G01, G02 and G03 Biology plates (18 October 2026)

Created 14 transparent 2000 x 2000 ink and watercolour plates. Prompt details, source files, hashes and QA results are in `docs/production/claude-pm/assets/brief70-provenance.json`. Dark, cream, greyscale and alignment views are in `docs/production/claude-pm/assets/brief70-qa/`.

- `public/assets/biology/m5x-sample-tube-rack-v1.png`: two-row blood sample rack with blank label strips.
- `public/assets/biology/m5x-anopheles-mosquito-v1.png`: raised-abdomen Anopheles with plain legs, spotted wings and long palps.
- `public/assets/biology/m5x-tasmanian-devil-v1.png`: healthy standing adult.
- `public/assets/biology/m5x-newborn-blood-spot-card-v1.png`: blood-spot card with blank form areas.
- `public/assets/biology/m5x-firefly-glow-v1.png`: glowing Photinus-type firefly.
- `public/assets/biology/m5x-koala-v1.png`: koala in a eucalyptus branch fork.
- `public/assets/biology/m5x-sweetpea-purple-v1.png`: purple sweet pea flowering stem.
- `public/assets/biology/m5x-sweetpea-red-v1.png`: aligned red sweet pea edit.
- `public/assets/biology/m5x-chicken-black-v1.png`: black Andalusian chicken.
- `public/assets/biology/m5x-chicken-blue-v1.png`: aligned blue Andalusian with dark feather lacing.
- `public/assets/biology/m5x-chicken-splash-v1.png`: aligned splash Andalusian.
- `public/assets/biology/m5x-cat-tortoiseshell-v1.png`: tortoiseshell domestic shorthair.
- `public/assets/biology/m5x-cat-orange-v1.png`: aligned orange tabby cat.
- `public/assets/biology/m5x-cat-black-v1.png`: aligned black cat.

All files have real alpha and at least 10.65 per cent clear margin. The paired sets align closely and remain distinguishable in greyscale at 200 px. Nothing remains unfinished. Question for Claude: none.

### Brief 67: P01, P03, B11 and B12 pre-voice fact check (18 October 2026)

Created `docs/production/claude-pm/checks/codex-check-67.md` with error-only findings for all four designs. Checked narration, described on-screen text, scientific claims, calculations and cited 2017 syllabus wording. The B11 genotype and allele counts recompute correctly; the P01 equilibrium colours, equations and shift directions and the P03 net ionic equations check out. No YouTube metadata is present in the four design files, so description quotes could not be checked. NSW school chemical categories for cobalt(II) chloride solid and solution, lead(II) nitrate and barium nitrate remain unconfirmed because the official lookup requires staff access. Question for Claude: please supply the upload metadata when it exists for a separate exact-quote check.


### Brief 65, YouTube site lesson links (18 October 2026)

Created `docs/production/claude-pm/youtube/site-links.md` with 25 published videos and six unpublished draft entries. Checked the matching site files and clean URL redirects. Added the link line to the six unpublished descriptions in `docs/production/claude-pm/youtube/wave4-metadata-draft.json`. Created `docs/production/claude-pm/youtube/description-template.md` and linked it from `docs/production/claude-pm/codex-prompts/28-youtube-upload-c4a-b4-and-ledger.md` for future uploads.

Published videos updated: **0**. No YouTube Data API OAuth credentials or API client are configured in this workspace, so live descriptions could not be changed or fetched again. Three G03 practice videos were also skipped because each spans multiple site lessons and its primary destination needs a decision. Question for Claude: please confirm the destination link(s) for G03b, G03c and G03d and provide an authenticated YouTube Data API path for the live update and read-back.

### Brief 66: C11, C13, C14, C15, B7, B8, B9 and B10 fact check (18 October 2026)

Created `docs/production/claude-pm/checks/codex-check-66.md` with error-only findings for the designs, exact recorded narration, scene text and 2017 syllabus citations. C15 and B9 had no error found. Nothing could not be completed. Question for Claude: none. No narration, lesson JSON or scene code changed.

### Brief 69: Year 12 Module 6 video route draft (18 October 2026)

Created `docs/production/module6-video-route-draft.json` and `docs/production/module6-video-route-draft.md`. The draft has 27 Chemistry videos (16 core, 4 calculation practice, 7 practical) and 20 Biology videos (20 core). All 33 local 2017 Module 6 content points have candidate mappings. Checked unique IDs, site paths and prerequisite links. Nothing in the draft remains unfinished. Question for Claude: please verify the Ka/pKa point quoted by Chemistry site L12 and its pre-design pack, which has no matching ID in the local 2017 syllabus ledger, before assigning direct syllabus coverage.

### Brief 68: draft site fixes for M7, M8 and Year 11 Biology (18 October 2026)

Created `docs/production/claude-pm/site-fixes-draft-m7-m8-y11bio.md`. It lists exact old and new text with sources, grouped by site file, with wrong science before misleading claims. Counts of affected site lessons: Chemistry M7 7, Chemistry M8 7, Biology M7 7, Biology M8 1, Year 11 Biology FA1 2, FA2 2, FA3 3. There are 29 affected lesson files and 82 exact find-and-replace pairs. All old strings were found in the named read-only site files. No site file was edited. Some corrections touch diagrams or repeated long worked answers; the draft identifies those spots for a rendered-page check when the owner applies the changes. Question for Claude: none.

### Brief 28m: B9, C11 and C14 YouTube uploads (18 October 2026)

Published all three owner-approved videos from MP4s whose SHA-256 hashes matched the brief: B9 https://youtu.be/6BhGJlXbKCA (8:20), C11 https://youtu.be/PQ9nuqM4b-Y (9:00), and C14 https://youtu.be/zIYzqE5XbaU (9:26). Updated `docs/production/claude-pm/youtube/wave4-uploads.json` with the exact file and caption hashes, descriptions, nine scene-timed chapters per video, settings, thumbnail choices, public playlist positions and Studio checks. The 2017 syllabus wording was checked against the local official syllabus extracts. Brief 65 was completed during this upload, so each description now begins with its verified HSCScience lesson link. The saved links for B9 and C11 survived a Studio reload; C14's link was present after publication.

All three are Public, not made for kids, Education, English (Australia), with AI use disclosed and measured timed SRT captions published. Studio showed HD processing complete and no copyright issues. The public Manual playlists place B9 at Biology position 11 after B6a, C11 at Chemistry position 16 after G03d, and C14 at position 17 after C11. B9 and C11 use auto-generated thumbnail frame 2; C14 uses frame 1 showing the saturated solution. End screens were skipped because the final key notes fill the screen. No upload step remains unfinished. Question for Claude: none.

### Brief 55: B6b recipe book plates (18 October 2026)

Created two transparent ink and watercolour plates for the recipe book analogy. Both are 2000 px RGBA, have at least 10% clear margin, and read at 200 px on cream. Provenance: `docs/production/claude-pm/assets/brief55-provenance.json`. QA: `docs/production/claude-pm/assets/brief55-qa/`.

- `public/assets/biology/m5x-recipe-book-copy-v1.png`: closed recipe book with a separate copied sheet.
- `public/assets/biology/m5x-recipe-sheet-v1.png`: loose blank recipe sheet.

The current B6b design also describes a chain on the book and a death cap plate. Those are outside Brief 55 and remain a separate design asset request. No narration or render was changed. Question for Claude: none.

### Brief 71: Biology practical plates P01, P02 and P03 (18 October 2026)

Created all 25 requested transparent ink and watercolour plates. Each has real alpha, at least 8% clear margin, and a 200 px dark-board and cream QA view. The five coloured pop beads and two-socket centromere came from one shared canvas and were checked as a chain at 200 px. Provenance: `docs/production/claude-pm/assets/brief71-provenance.json`. QA: `docs/production/claude-pm/assets/brief71-qa/`.

- `public/assets/biology/m5x-card-sheets-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-scissors-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-tape-roll-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-pencil-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-card-pile-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-paper-ribosome-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-trna-card-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-clipboard-sheet-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-popbead-red-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-popbead-gold-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-popbead-green-v1.png`: P01 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-string-loop-v1.png`: P02 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-sticker-sheet-v1.png`: P02 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-index-cards-v1.png`: P02 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-index-card-back-v1.png`: P02 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-die-v1.png`: P02 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-popbead-plum-v1.png`: P02 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-popbead-teal-v1.png`: P02 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-popbead-centromere-v1.png`: P02 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-hand-mirror-v1.png`: P03 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-slip-box-v1.png`: P03 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-slip-blank-v1.png`: P03 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-bead-bag-v1.png`: P03 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-bead-red-v1.png`: P03 plate, verified against its recorded SHA-256 hash.
- `public/assets/biology/m5x-bead-white-v1.png`: P03 plate, verified against its recorded SHA-256 hash.

No narration or render was changed. Question for Claude: none.

### Brief 28n: Biology G01 YouTube upload (18 October 2026)

Published the owner-approved Biology G01 video at https://youtu.be/QcSZ2Wn0CE0. The MP4 SHA-256 matched the brief. The description has four verified 2017 syllabus quotes, links to Biology site lessons 06, 08, 10 and 11, and seven scene-timed chapters, including one for each question. Published the measured English (Australia) SRT captions. Studio confirms Public, not made for kids, Education, AI use disclosed, HD complete and no copyright issues. The public Manual Biology playlist places G01 at position 12, after B9, the latest published video before route order 13. Studio selected auto-generated thumbnail frame 2. I skipped the end screen because the final key notes fill the screen, as checked in the local MP4 at 8:32.

Updated `docs/production/claude-pm/youtube/wave4-uploads.json`. Nothing remains unfinished. Question for Claude: none.

### Brief 73: built-scene fact check (18 October 2026)

Created `docs/production/claude-pm/checks/codex-check-73.md`. Checked on-screen figures, labels, answers and data in all 11 requested lesson folders against their designs and relevant primary sources. Reported 9 errors in B13, G03, P01 and Chemistry P01; the other lesson sections have no findings. No scene code, narration, design, render or media changed. Nothing remains unfinished. Question for Claude: none.
### Brief 72: Chemistry P01 plate repaints (18 October 2026)

Created `public/assets/chemistry/p01-iron-tube-diluted-v2.png`, `public/assets/chemistry/p01-bunsen-unlit-v2.png` and `public/assets/chemistry/p01-bunsen-lit-v2.png`. The diluted tube uses the C3 stock tube geometry, with a slightly higher, paler red-orange liquid. The Bunsen states share identical metalwork; only the blue flame changes. Provenance: `docs/production/claude-pm/assets/brief72-provenance.json`. QA views: `docs/production/claude-pm/assets/brief72-qa/`, including 50% overlays for both comparisons and 200 px cream views. Nothing remains unfinished. Question for Claude: none.

### Brief 28o: C13, P03 and corrected C14 YouTube upload (18 October 2026)

Uploaded three owner-approved MP4s after their SHA-256 hashes matched the brief: C13 https://youtu.be/4IYt7nemcRI, P03 https://youtu.be/cY7hnSTN1uY, and corrected C14 https://youtu.be/UMgrHQaLSH8. All three are Public, HD complete, in the Chemistry Module 5 playlist, with measured English (Australia) captions, Education category and AI disclosure. The C13 and P03 descriptions start with the checked site lesson 16 link and quote the full 2017 syllabus dotpoint with its three example bullets. C14 v2 keeps the old metadata and moves its final chapter to 9:02.

Updated `docs/production/claude-pm/youtube/wave4-metadata-draft.json` and `docs/production/claude-pm/youtube/wave4-uploads.json`. YouTube Studio confirmed permanent deletion of the old C14 (zIYzqE5XbaU). The public Manual playlist now shows C13 at 17, P03 at 18 and corrected C14 at 19. No site or embed record pointed to the old C14 ID. Chemistry P01 remains held for its separate fix. Nothing remains unfinished for brief 28o. Question for Claude: none.

### Brief 75: website embed manifest refresh (18 October 2026)

Created `docs/production/claude-pm/website-embeds/manifest.json`, `README.md`, `build_manifest.py` and 25 lesson-page snippets under `website-embeds/subjects/`. The manifest covers all 31 current Public videos across upload waves 1 to 4, excluding the deleted C14 version. It has 34 placements because Biology G01 fits four site lessons. Each placement was matched to a real heading in the read-only site checkout. The snippets use the site's callout markup, lazy iframes on `youtube-nocookie.com`, a short caption and a direct YouTube link. Checked unique video IDs, page and heading existence, published caption status and no em dashes in the output. No site file was edited. Nothing was blocked. Question for Claude: none.

### Briefs 65, 74 and 81: published channel metadata (18 October 2026)

Prepared clean site links and complete official 2017 syllabus quotations for all 31 current Public records in the four upload ledgers. The Chemistry syllabus ledger now includes the previously omitted Ka/pKa bullet: 69 Chemistry points; Biology remains 58. The official DOCX wording and quoted upload metadata were checked. Studio saved or already had the link and revised quote for all 31 Public videos, each checked after reload. `youtube/channel-audit-2026-10.md` keeps a row per video and distinguishes local preparation from live verification. Chapters, playlist positions and advanced settings still need a full live audit. External links remain plain text until the owner completes YouTube's one-off channel verification.

### Brief 77: Module 5 extra practice (18 October 2026)

Created `practice-bank/m5/index.md` and 31 lesson files with 93 HSC-style questions, criteria and sample answers. Compared against existing site and video prompts, recalculated numeric answers and checked copy. Local authoring is complete. Owner review is pending before site publication.

### Brief 78: published caption QA and replacement (18 October 2026)

Created 31 corrected SRT files and `youtube/captions-qa-2026-10.md`. The 5,589 cues satisfy the stated two-line, 42-character, timing and no em-dash checks; narration and audio were unchanged. Uploaded and published all 31 English (Australia) replacement tracks in YouTube Studio. Studio confirmed each publication; B3B's published date and Biology G01's corrected first cue were separately read back. Full public playback remains a human viewing check.

### Brief 79: Year 11 Biology FA1 plates (18 October 2026)

All 34 FA1 packs and 25 recurring plate groups are resolved in `assets/brief79-handin.md`: 15 new transparent plates plus inspected reuse or code-native diagrams. FA2 continued through L02 with two more plates; 23 groups from L03 onward remain. Provenance and 200 px QA are recorded. The 17 PNGs are Git-ignored local media and need transfer or explicit staging before another-computer production.

### Brief 80: Module 6 route plate gaps (18 October 2026)

Completed `assets/m6-plate-gaps.md` for all 47 route videos and generated 12 transparent Module 6 plates. Provenance, visual QA, exact hashes and the local archive are in `assets/brief80-provenance.json` and `assets/brief80-media-checkpoint.json`. The archive is Git-ignored and needs transfer before another-computer production. Scene authors still need code-drawn mechanism and motion decisions.

### Brief 28p: B7, B8 and B11 publication (18 October 2026)

Verified the three approved MP4 SHA-256 hashes against the brief, checked local captions and site lessons, and prepared their metadata and corrected captions in `youtube/wave4-metadata-draft.json`. The videos are not uploaded. Each has an unpublished prerequisite in the route, so public release awaits the owner's order decision.

### Brief 76: Module 6 site science sweep (18 October 2026)

`site-fixes-draft-m6.md` and the matching pre-design notes are in progress. The draft records exact, sourced old/new fixes from lesson pages and answer keys; the site checkout remains read-only. All 38 lesson pages and their embedded practice and review JSON have been screened, with a statement-by-statement body pass still underway. Do not treat the draft or pages as production approved yet.
Brief 79 media transfer checkpoint: `assets/brief79-media-checkpoint.json` records a verified 19-member archive at `out/archives/brief79-y11-biology-plates-2026-10-18.zip`, SHA-256 `6bbe9327830a78b15b9cfcda2297537d9228cb1531175d969e16fb4691c7772f`.

### Brief 74: live channel audit follow-up (18 October 2026)

Read back all 31 Public titles, descriptions, chapters, playlist memberships, Education category, audience setting and AI disclosure in YouTube Studio. Both public playlist pages follow the relative Module 5 route order among currently published videos. Twenty-four descriptions have chapters with locally valid timing. Seven early videos have no chapters and need owner review. The published caption tracks still need playback and visual checking against the voiced videos. The row-by-row evidence and remaining work are in `youtube/channel-audit-2026-10.md`.

### Brief 76: Module 6 site science sweep hand-in (18 October 2026)

Completed the read-only draft `site-fixes-draft-m6.md` after checking all 38 lesson bodies, worked examples, embedded practice and answers, all 38 matching review files, and both directly linked boss banks. It records 395 exact old/new corrections, 238 Chemistry and 157 Biology, with every old string verified in the named file. Separate worksheets and `bank.json` files were sampled but not fully audited. Owner review and site application remain open.

### Briefs 42 and 74: seven early chapter lists (18 October 2026)

Computed scene-timed chapters for the seven Public videos that lacked them and updated the wave 1 to 3 upload records. Each list has eight or nine chapters, starts at 0:00 and gives every chapter at least 10 seconds. Saved all seven in Studio and read each back after reload. All 31 Public descriptions now have chapter lists. Public playback and caption fit still need review.

### Brief 82: first four Module 6 designs (18 October 2026)

Created 16 transparent 2000 px ink and watercolour plates in `public/assets/chemistry/` and `public/assets/biology/`. `assets/brief82-provenance.json` records generation and hashes; `assets/brief82-qa/` contains cream, checker and aligned-pair views. A verified 54-member Git-ignored transfer archive is recorded in `assets/brief82-media-checkpoint.json`. The independent error-only check `checks/codex-check-82.md` gives eight corrections across the four designs. Added 18 exact, sourced findings to `site-corrections-m6.md`. The design findings need resolution before voicing; the site checkout remains unchanged. The edited plate pairs show slight edge movement, most visible in the limewater rack, for playback review.

### Brief 28q: Chemistry P01 upload attempt (19 October 2026)

The owner confirmed upload under YouTube's submission terms. The approved v2 MP4 hash matches `f52d475a9bd4f26a1022014e70c7cbf7e2de71d859b77db44195f6b48d5c6f70`. The lesson 05 link, two exact syllabus quotations and nine chapters are prepared in `youtube/wave4-metadata-draft.json`; `lessons/p01/measured/captions-fixed.srt` contains the reflowed 186-cue track. Studio accepted the file selection and title and description entry, then showed "Daily upload limit reached" and offered one-time verification or a 24-hour wait. It did not create a video link. The upload is not complete or Public, so no `wave4-uploads.json` video record was added. Resume the v2 upload after the limit clears, then publish captions, set Education, audience and AI disclosure, insert after C4b, and read everything back. The full-screen key notes make an end screen unsuitable.

### Briefs 28o, 28p, 28q and 28r: upload follow-up (19 October 2026)

Brief 28o was already complete: C13 https://youtu.be/4IYt7nemcRI, P03 https://youtu.be/cY7hnSTN1uY and corrected C14 https://youtu.be/UMgrHQaLSH8 are Public, and the superseded C14 was deleted. The published records are in `youtube/wave4-uploads.json`.

Checked the seven remaining MP4s against every SHA-256 in briefs 28p, 28q and 28r. All match. Added B10, B12 and G02 titles, descriptions, exact 2017 syllabus quotations, site links and chapters to `youtube/wave4-metadata-draft.json`. B7, B8, B11 and Chemistry P01 metadata was already prepared. Studio still shows "Daily upload limit reached" in the P01 upload dialog and has created no P01 video link. No new video was uploaded or recorded as Public.

When the limit clears, publish Chemistry P01 v2 and Biology B10 first. Biology G02 follows B10, B11 follows B10, and B12 follows B11. B7 needs unpublished B6c; B8 needs unpublished B5b and B7. These route prerequisites must be available before those two public releases. Add each completed upload to `youtube/wave4-uploads.json` only after Studio read-back. No new URLs are available yet.

### Briefs 28p, 28q and 28r: upload readiness check (19 October 2026)

Checked all seven drafted chapter lists against the measured scenes. Each starts at 0:00, stays at least 22 seconds from the next chapter and falls within one second of its scene start. Checked the measured SRT files: 171 to 192 timed cues per video, no cue overlap or non-positive duration. The captions end before the videos' silent key-notes holds. For Chemistry P01, use `lessons/p01/measured/captions-fixed.srt`, the 186-cue reflowed track already prepared after the first upload attempt.

Extracted a 1920 by 1080 thumbnail frame from each exact MP4: `out/explainer/Explainer-chem-m5-p01/youtube-thumbnail.jpg` at 60 seconds; Biology B7 at 90 seconds, B8 at 120 seconds, B10 at 90 seconds, G02 at 30 seconds, B11 at 60 seconds and B12 at 180 seconds, each under its matching `out/explainer/Explainer-<lesson-id>/youtube-thumbnail.jpg` folder. Each JPEG is under 400 KB. Visual checks at 15 to 20 seconds before the end show key notes across each frame, so an end screen would cover study text; skip it for these seven uploads. No source video, narration or alignment changed.

### Brief 83: HSC exam skills research (19 October 2026)

Created `research/exam-skills/README.md`, `glossary.md`, `verb-frequency.md`, `what-markers-reward.md`, `common-faults.md` and `vra-definitions.md`. The frequency audit covers 10 official Chemistry and Biology Section II papers from 2021 to 2025: 189 explicit glossary-command occurrences, with mark values and question numbers. The marking analysis uses matching 2021 to 2025 guidelines; the fault recurrence audit uses 12 subject-year feedback reports from 2020 to 2025. The NESA glossary and current science definitions are linked, and the difference between current published and 2017 HSC validity wording is recorded. The full glossary definitions could not be copied word for word, so the file gives paraphrases beside the official source link. No lesson script, narration, render or media changed. Question for Claude: none.

### Brief 84: exam skills S01 and S02 error check (19 October 2026)

Created `checks/codex-check-84.md`. Checked both Revision 2 designs against the exam-skills research pack and official NESA papers, marking guidelines and glossary. Reported four corrections: the S01 cobalt worked question closely matches Chemistry 2024 Q23 and its S02 callback repeats it; S02 misstates the two-mark wording of Biology 2024 Q24(b); S02 presents "one name per mark" as a general identify rule. No design, narration or media was changed. Nothing was blocked. Question for Claude: none.

### Briefs 28p to 28s: upload follow-up (19 October 2026)

The daily upload limit had cleared when Studio was checked. Published Chemistry P01 v2 (https://youtu.be/cjoai9O2koA), Biology B10 (https://youtu.be/0RH_T6hOwxY), G02 (https://youtu.be/RHHPbj94tKQ), B11 (https://youtu.be/ehOdeivCarY), P03 (https://youtu.be/jpuYH0YccBc), B12 (https://youtu.be/9qTbxRSOKY4), B13 (https://youtu.be/n_2i_qz3tMs) and G03 (https://youtu.be/OtPe_zLuGGk). Exact MP4 hashes match the approved briefs. Each upload has the prepared description, chapters, playlist, timed English (Australia) SRT captions, Education category, AI disclosure Yes and not Made for Kids. Studio showed HD complete and no notices before public release. The public playlists were manually sorted and checked after reload: Chemistry P01 follows C4b at position 7; Biology B10, G02, B11, P03, B12, B13 and G03 occupy positions 13 through 19 in that order.

Uploaded Biology P01 (https://youtu.be/kU1-fsCE7MA) and P02 (https://youtu.be/kRShwjUyPwI) as Private drafts. Their prerequisite lessons B6c and B8, respectively, are not yet Public. B7 and B8 were not uploaded. On the next attempted upload, Studio again reported its daily upload limit and created no link. B7 also needs B6c; B8 needs B5b and B7 before public release.

Custom thumbnail frames from the exact MP4s were saved and confirmed after Studio reload for Chemistry P01, Biology B10, G02, B11, P03 and B12. B13, G03 and the two Private drafts retain YouTube's second auto-generated thumbnail while Studio reports video verification in review and blocks another custom upload. Frames near the end of all ten videos show full-screen key notes, so end screens were skipped. The per-video evidence and unresolved gates are in `youtube/wave4-uploads.json`. External description links remain plain text until channel verification is complete.

### Brief 85: four Module 6 designs, plates and checks (19 October 2026)

Created five transparent 2000 px plates in `public/assets/chemistry/` and `public/assets/biology/`: the aligned acid and limed wheat soil blocks, acid mine drainage, a metaphase chromosome spread and the aligned Bar-eye fly. The Bar-eye plate was cleaned after overlay review. Provenance and hashes are in `assets/brief85-provenance.json`; cream, checker and pair QA views are in `assets/brief85-qa/`. The Git-ignored media is packed in `out/archives/brief85-m6-plates-2026-10-19.zip`, with its hash and member count in `assets/brief85-media-checkpoint.json`. Transfer that archive before another-computer production. `assets/m6-plate-gaps.md` now retires the hand-containing agricultural-liming plate.

The independent error-only check `checks/codex-check-85.md` found five Biology wording errors across B03 and B04 and no errors in C03 or C04. The five findings need resolution before voicing. Added 14 exact, sourced findings to `site-corrections-m6.md` without changing the read-only site checkout. The paired artwork still needs a playback-speed fit check in the eventual scenes. Question for Claude: none.

### Brief 86: next four Module 6 designs, plates and checks (19 October 2026)

Created three transparent 2000 px Biology plates: a white-facet patch in the left eye of the existing fly, an upright T4 bacteriophage and a blue-roan Belgian Blue bull. The fly keeps the reference image's alpha and every pixel outside the left eye. Provenance and hashes are in `assets/brief86-provenance.json`; overlays and 260 px QA views are in `assets/brief86-qa/`. The Git-ignored plates and QA are packed in `out/archives/brief86-m6-plates-2026-10-19.zip`, with the archive hash in `assets/brief86-media-checkpoint.json`. Transfer it before another-computer production. The optional melanoma repaint remains deferred until the current plate is judged in preview.

The independent error-only check `checks/codex-check-86.md` found five corrections across C05, B05 and G01; C06 had no reported errors. Resolve these before voicing. Added ten new exact, sourced site findings to `site-corrections-m6.md` without editing the read-only site checkout. Question for Claude: none.

### Brief 87: further Module 6 designs, plates and checks (19 October 2026)

Created three transparent 2000 px Biology plates: small seeds against spiny Tribulus fruit segments, and an aligned Florida panther and Texas puma pair with different coat shades and tail shape. Provenance and hashes are in `assets/brief87-provenance.json`, with cream, checker and pair QA views in `assets/brief87-qa/`. The Git-ignored media is packed in `out/archives/brief87-m6-plates-2026-10-19.zip`; `assets/brief87-media-checkpoint.json` records its hash and member count. Transfer the archive before another-computer production.

The independent error-only check `checks/codex-check-87.md` reports four corrections, one in C08 and three in B08. C07 and B07 had no reported errors. The B08 findings include an overstated population heterozygosity change and an unproven kinked-tail allele animation. Resolve them before voicing. Added 21 new exact, sourced findings to `site-corrections-m6.md` without changing the read-only site checkout. Inspect the cat pair at playback speed when it is used in a scene. Question for Claude: none.

### Brief 88: cell division plate series (20 October 2026)

Created 20 painted stage plates and 20 empty variants in `public/assets/biology/`: mitosis, meiosis I, meiosis II, nucleus close-ups, homologous loci and crossing-over. Each is a 2000 × 2000 transparent RGBA PNG. `assets/brief88-anchors.json` records pixel geometry and chromosome positions for all 40 plates. `assets/brief88-provenance.json` and the three group provenance files record sources, method and hashes. `assets/brief88-qa/` contains 50% crossfade strips and review notes. The validator passed all 40 dimensions, alpha channels and hashes; the 50-member transfer archive and verified hash are in `assets/brief88-media-checkpoint.json`. Transfer the Git-ignored archive before another-computer production.

Independent visual review checked chromosome counts and states across the 2n = 4 model. Mitosis metaphase and anaphase, and meiosis I anaphase, were repaired so spindle fibres reach centromeres. Full-size inspection confirmed three aligned locus bands per chromatid, including the reciprocal exchanged segments. The brief 85 `m6-metaphase-spread-v1.png` is present, 2000 × 2000 RGBA and suitable as the uncounted real-chromosome contrast. The fixed canvas makes the final daughter cells smaller than the single parent cell. Meiosis empty/full outlines have 0.990 to 0.997 overlap, with slight edge movement for playback-speed review. The plates await selected-scene teaching, motion and voiced-preview review before B5a or B5b release. Question for Claude: none.

### Brief 89: C09 and C10 error check and site corrections (20 October 2026)

Created `checks/codex-check-89.md`. The two Revision 2 designs had no reported learner-copy errors after independent arithmetic, equation, exam-style and syllabus checks. Added 17 new L10 and L12 rows plus the bank-copy row to `site-corrections-m6.md`, using the read-only site pages for the old wording. Updated `docs/production/module6-memory-aids-2026-10-11.md` to state that a weak acid's ionisation step can absorb or release heat. The site pages and site copy of the bank remain unchanged. Nothing was blocked. Question for Claude: none.

### Brief 90: C11, C12, B09 and B10 plates, checks and site log (20 October 2026)

Created three transparent 2000 px Biology plates in `public/assets/biology/`: `m6-bread-loaf-crumb-v1.png`, `m6-helicoverpa-larva-boll-v1.png` and `m6-dairy-calf-horn-buds-v1.png`. `assets/brief90-provenance.json` records prompts, source paths and hashes. `assets/brief90-qa/` has cream and checker views. `assets/brief90-media-checkpoint.json` records the transfer archive and hash for ignored media. Retired `m6-hand-pollination-v1.png` from use in `assets/m6-plate-gaps.md`; use `b2b-paintbrush-pollination-v1.png`.

The independent error-only check is `checks/codex-check-90.md`. It reports one C11 blood-buffer ratio error and two B10 AquAdvantage wording errors. C12 and B09 had no reported errors. Added 24 new exact, sourced site rows to `site-corrections-m6.md` after checking the read-only site pages. Corrected the C11 and P05 buffer syllabus IDs in `docs/production/module6-video-route-draft.json`, added the Ka action and shifted the later IDs to match the current ledger. The site pages and voiced lesson designs were not changed. These findings need resolution before those lessons are voiced. Question for Claude: none.

### Brief 28t: Module 5 follow-ons and Module 6 openers uploaded (20 October 2026)

Verified the exact SHA-256 hashes for all nine new MP4s against briefs 28t and 28p before upload. Published Biology B6b [Transcription](https://youtu.be/o0hwEiJjqrg), B6c [Translation](https://youtu.be/VKZvh8-y7gI) and B7 [Chain to trait](https://youtu.be/piCi2sSRDQU), and changed the existing [Biology P01](https://youtu.be/kU1-fsCE7MA) draft from Private to Public after B6c. Published Chemistry C10 [Ka, Kb and Ksp](https://youtu.be/PL415_P6F6w), C15 [Qsp versus Ksp](https://youtu.be/KvzXxb7bAyo) and P02 [Colourimetry](https://youtu.be/c1zYHVXYc74). Published the Module 6 openers: Chemistry C01 [acid and base models](https://youtu.be/HOcAqIXXbGk), Biology B01 [new alleles](https://youtu.be/BLD9Zu9sPQ0) and B02 [mutagens](https://youtu.be/eNT4PMSNYV4). All ten videos showed Public and saved in YouTube Studio. All nine new uploads showed HD complete, no notices, published timed English (Australia) SRT captions, Education category, AI use Yes and not made for kids. End screens were skipped because they would cover key notes.

Both public Module 5 playlists were reloaded after Manual sorting. Biology shows B6b at 11, B6c at 12, P01 at 13, G01 at 14 and B7 at 15. Chemistry shows P02 at 14, C10 at 15 and C15 at 23 directly after Ksp. C15's visible position differs from route ordinal 21 because the playlist contains additional HSC calculation practice videos. Public Module 6 playlists were created in the established title and description style. C01 was added first in Chemistry; B01 then B02 were added in Biology. A Chrome control interruption prevented the final public page read-back of the Module 6 playlist IDs and ordering. Complete that read-back when browser control returns. Biology B8 and P02 remain held pending B5b and their route prerequisites. The metadata and upload records are in `youtube/wave4-metadata-draft.json`, `youtube/wave4-uploads.json`, `youtube/wave5-metadata-draft.json` and `youtube/wave5-uploads.json`. Question for Claude: none.

### Brief 28u: upload preparation and Module 6 playlist read-back (21 October 2026)

Verified SHA-256 for all 16 new approved MP4s and Biology B8. All named SRT files exist. Updated `docs/production/claude-pm/youtube/wave4-metadata-draft.json` with the B5a and B5b v8 paths and scene-timed chapters. Added 14 Module 6 and exam skills entries to `docs/production/claude-pm/youtube/wave5-metadata-draft.json`; their syllabus quotations match the 2017 ledger, and their chapters match measured scene starts. Read the public Module 6 playlists: Biology `PLOXPcalkg-iI` has B01 then B02; Chemistry `PLWBoqjMWeZi0` has C01 first. Added the IDs and verified positions to `youtube/wave5-uploads.json` and the metadata draft. No upload or visibility change has been made in this brief yet. YouTube Studio's submission dialog acknowledges its terms, so upload is pending the required at-action confirmation requested from the owner. The existing Chemistry C01 description links to a lesson URL that returns 404; the six new Chemistry descriptions use working `.sa.html` links. Once confirmed, upload in brief 28u order, then record public links and live settings. Question for Claude: none beyond the pending YouTube submission confirmation.

### Brief 28u: final upload hand-in (21 October 2026)

The owner confirmed YouTube submission under its terms at upload time. Published the approved B5a and B5b v8 videos, Biology B8 and 14 Module 6 and skills videos. Changed the existing Biology P02 draft to Public after B8. This completes all 18 actions in brief order.

| Track | Public videos |
| --- | --- |
| Biology Module 5 | [B5b](https://youtu.be/ikfUhS8eK3I), [B5a](https://youtu.be/QorDvCohIYY), [B8](https://youtu.be/QXGUtIoxkgc), [P02](https://youtu.be/kRShwjUyPwI) |
| Biology Module 6 | [B03](https://youtu.be/S30l6JbFoAs), [B04](https://youtu.be/ldAXVZXHFuM), [B05](https://youtu.be/fyvYjlBBRmk), [G01](https://youtu.be/_7FscIH2HHI), [B07](https://youtu.be/Z1jPRaPLHYk), [B08](https://youtu.be/PdcZY74Gywo) |
| Chemistry Module 6 | [C03](https://youtu.be/fJynVZC82Is), [C04](https://youtu.be/dkMhu-koahI), [C05](https://youtu.be/s2Soxz8i5K4), [C06](https://youtu.be/boYH3_uNQyc), [C07](https://youtu.be/BN5RYjZaVzc), [C08](https://youtu.be/rgepYezizZA) |
| Exam skills | [S01](https://youtu.be/-ouJt6UBaBw), [S02](https://youtu.be/ENUgFBDb0pY) |

The new Public [HSC exam skills playlist](https://www.youtube.com/playlist?list=PLD-Lwfjq3gW0) has S01 then S02. Both also lead the Public [Biology Module 6 playlist](https://www.youtube.com/playlist?list=PLOXPcalkg-iI) and [Chemistry Module 6 playlist](https://www.youtube.com/playlist?list=PLWBoqjMWeZi0), ahead of each subject's first lesson. The Biology Module 5 playlist shows B5a at 10, B5b at 11, B8 at 18 and P02 at 19. Final Studio read-back showed all new videos Public, HD complete, no notices, published timed English (Australia) SRT captions, Education category, AI disclosure Yes and not made for kids. End screens were skipped because key notes occupy the final scene. `youtube/wave4-uploads.json` and `youtube/wave5-uploads.json` hold the IDs, settings and public playlist positions. An incomplete B07 draft from a stalled upload was cancelled before the successful B07 upload. No duplicate B07 was published. Question for Claude: none.

### Brief 91: C13, C14, B11, B12, S03 and S04 plates and checks (21 October 2026)

Created five transparent watercolor and ink plates: `public/assets/chemistry/m6-indicator-methyl-red-set-v1.png`, `public/assets/biology/m6-infusion-bag-cells-v1.png`, `m6-mosquito-cage-v1.png`, `m6-banana-wild-vs-cavendish-v1.png` and `m6-chestnut-burr-leaf-v1.png`. The flask set matches the existing 2400 by 1400 canvas; the four Biology plates are 2000 by 2000. `assets/brief91-provenance.json` records sources, prompts, hashes and alpha checks. `assets/brief91-qa/` has cream and checker views. The Git-ignored plates and QA are packed in `out/archives/brief91-m6-plates-2026-10-21.zip`, with its hash in `assets/brief91-media-checkpoint.json`. Transfer that archive before production on another computer.

The independent error-only check `checks/codex-check-91.md` reports five corrections across C13, B12, S03 and S04. C14 and B11 have no reported errors. Resolve the findings before voicing. Added 24 new exact, sourced site corrections to `site-corrections-m6.md` after checking the read-only site pages. The site pages and lesson designs were not changed. Question for Claude: none.

### Brief 28u: live recheck and C01 link correction (21 October 2026)

Reopened the HSCScience YouTube Studio content list after the upload hand-in. All 18 brief actions appear as Public and Published, including the final S01 and S02 uploads. S02's detail page shows SD and HD complete, no notices, and the English (Australia) subtitle editor contains the timed captions. The earlier preparation note saying YouTube submission was pending is superseded by the final hand-in above.

The C01 description's first link, `https://hscscience.com.au/subjects/chemistry/year12/module6/lesson01`, returned the site's 404 page. The live C01 lesson opens at `https://hscscience.com.au/subjects/chemistry/year12/module6/lesson01.sa`. Corrected that URL in the live YouTube description and confirmed Studio showed "All changes saved". Updated `youtube/wave5-uploads.json` and `youtube/wave5-metadata-draft.json` to match. A Biology Module 6 extensionless lesson link was checked and redirected to its live `.sa` page. No upload or processing failure was found.

### Brief 92: C15, C16, B13 and B15 plates, checks and site log (21 October 2026)

Created nine transparent ink and watercolor plates: `public/assets/chemistry/m6-red-wine-vinegar-bottle-v1.png`, `m6-conical-flask-hotplate-v1.png`, `m6-red-wine-glass-v1.png`, `m6-wastewater-outlet-probe-v1.png`, `m6-aspirin-tablets-v1.png`, and `public/assets/biology/m6-aedes-mosquito-v1.png`, `m6-wheat-local-varieties-v1.png`, `m6-maize-hybrid-rows-v1.png`, `m6-tomato-flower-truss-v1.png`. The bottle matches the existing 2048 by 2048 vinegar canvas; the other plates are 2000 by 2000. `assets/brief92-provenance.json` records prompts, generated sources, hashes, dimensions, alpha checks and the two existing-plate checks. `assets/brief92-qa/` has cream and checker views and contact sheets. The Git-ignored plates and QA are packed in `out/archives/brief92-m6-plates-2026-10-21.zip`; `assets/brief92-media-checkpoint.json` records its hash and contents. Transfer the archive before production on another computer.

The wheat floret and forceps plates both showed clean transparency on the checkerboard, so their originals were not changed. The independent error-only check `checks/codex-check-92.md` reports five corrections across all four designs. Resolve them before voicing. Added 36 new exact, sourced site corrections to `site-corrections-m6.md`, including a neutral pituri item for owner cultural review. The site files and lesson designs were not changed. Question for Claude: none.

### Briefs 93 and 94: Module 7 and Module 8 route drafts (21 October 2026)

Created `docs/production/module7-video-route-draft.json`, `.md` and `docs/production/claude-pm/assets/m7-plate-gaps.md`. Module 7 has 25 Chemistry videos (16 core, 3 practice, 6 practical) and 22 Biology videos (15 core, 2 practice, 5 practical). The route includes the requested Module 6 undesigned-work list. Biology Module 6 has no reviewed P-series IDs or methods yet. Chemistry Module 7 L11 has an incorrect methanol combustion example in its pre-design source; correct it before use.

Created `docs/production/module8-video-route-draft.json`, `.md` and `docs/production/claude-pm/assets/m8-plate-gaps.md`. Module 8 has 21 Chemistry videos (13 core, 3 practice, 5 practical) and 25 Biology videos (17 core, 2 practice, 6 practical). All routed core topics have pre-design packs and all routed site lessons have extracts. Sixteen Module 8 practice and practical entries need their exact teaching plans before design. No plates were painted.

Both routes are drafts for Claude's review. Checked all 93 IDs for uniqueness, current ledger mapping, source files, playlist rows and plate-audit rows. Module 8 prerequisites pointing to Module 7 match the new route IDs. The existing Module 7 and Module 8 PNGs were visually inventoried; neither set showed people or hands. Earlier Module 6 hand plates remain retired. Question for Claude: confirm the practical selections and route boundaries before design.

### Brief 95: Module 6 practical and practice teaching plans (21 October 2026)

Created these draft files:

- `docs/production/claude-pm/pre-design/m6-practical-plan-index.md`
- `docs/production/claude-pm/pre-design/chem-m6-p01-practical-plan.md`
- `docs/production/claude-pm/pre-design/chem-m6-p02-practical-plan.md`
- `docs/production/claude-pm/pre-design/chem-m6-p03-practical-plan.md`
- `docs/production/claude-pm/pre-design/chem-m6-p04-practical-plan.md`
- `docs/production/claude-pm/pre-design/chem-m6-p05-practical-plan.md`
- `docs/production/claude-pm/pre-design/chem-m6-p06-practical-plan.md`
- `docs/production/claude-pm/pre-design/chem-m6-p07-practical-plan.md`
- `docs/production/claude-pm/pre-design/bio-m6-p01-practical-plan.md`
- `docs/production/claude-pm/pre-design/bio-m6-p02-practical-plan.md`
- `docs/production/claude-pm/pre-design/chem-m6-g01-practice-plan.md`
- `docs/production/claude-pm/pre-design/chem-m6-g02-practice-plan.md`
- `docs/production/claude-pm/pre-design/bio-m6-g02-practice-plan.md`

Updated `docs/production/module6-video-route-draft.json` with candidate Biology P01 and P02 entries. The Chemistry P IDs stay as drafted. The index quotes the current 2017 ledger wording and records why other investigation actions do not become separate P videos. Biology B16, B18 and B19 already have pre-design packs and site extracts, so none was created for them. The nine P plans include school-scale methods, worked example results, NESA validity/reliability/accuracy, sourced risks and plate inventories. The three G plans contain original worked questions; Chemistry G02 includes amphiprotic Ka against Kb, and Biology G02 practises extended evaluation of biotechnology.

All plans remain drafts for Claude's review. The Module 6 route still has older Biology core and G entries awaiting the separate amendments in Claude's route review. The school must use its own risk assessment and actual reagent SDS before conducting a method. Question for Claude: confirm the two Biology P candidates and the practical methods before design.


### Brief 96: practical, calculation and biotechnology plates and checks (22 October 2026)

Created all 11 requested plates, `assets/brief96-provenance.json`, `assets/brief96-qa/` and `assets/brief96-media-checkpoint.json`. The fermenter has the requested round sight window. The empty colony dish retains the original painted rim and alpha. Its inherited 8% side margins preserve the reference framing. The archive is `out/archives/brief96-plates-2026-10-22.zip`; all 91 members pass CRC and hash checks.

`checks/codex-check-96.md` reports two corrections, for ferret alleles and cDNA wording. Added the new exact, sourced site rows to `site-corrections-m6.md`. Resolve the reported design errors before voicing. Question for Claude: none.

### Brief 97: titration and biotechnology plates and checks (22 October 2026)

Created all 12 requested plates, `assets/brief97-provenance.json`, `assets/brief97-qa/` and `assets/brief97-media-checkpoint.json`. Corrected the burette close-up to an open tube section. All three methyl-orange clips retain the reference glass and alpha, including its inherited 8% vertical margins. The archive is `out/archives/brief97-plates-2026-10-22.zip`; all 96 members pass CRC and hash checks.

`checks/codex-check-97.md` reports two corrections, for a titre bracket and the eGenesis clinical-trial claim. Added this batch's exact site findings to `site-corrections-m6.md`. Resolve the reported design errors before voicing. Question for Claude: none.

### Brief 98: cabbage and yeast practical plates and checks (22 October 2026)

Created all 14 requested plates, `assets/brief98-provenance.json`, `assets/brief98-qa/` and `assets/brief98-media-checkpoint.json`. Independent image checks confirm exactly 144, 97, 61, 24, 5 and 3 colonies. The closed UV cabinet has no visible light. The cabbage clips retain the reference framing and its inherited 8% vertical margins. The archive is `out/archives/brief98-plates-2026-10-22.zip`; all 38 members pass CRC and hash checks.

`checks/codex-check-98.md` reports six corrections. Added the new site findings and corrected C12 correction 6 to the vinegar minimum of 40 g/kg, a mass per mass basis, in `site-corrections-m6.md`. Resolve the reported design errors before voicing. Question for Claude: none.

### Brief 99: first Module 7 plates, checks and source fixes (22 October 2026)

Created all 20 requested plates, `assets/brief99-provenance.json`, `assets/brief99-qa/` and `assets/brief99-media-checkpoint.json`. The TMV, prion and swan-neck flask received targeted corrections. The five flask states share the same bulb and liquid level. All 20 plates meet the 2000 px, alpha and 10% margin checks. The archive is `out/archives/brief99-plates-2026-10-22.zip`; all 157 members pass CRC and hash checks.

`checks/codex-check-99.md` reports eight corrections, including the B7-IQ1-01 practical flag and the Snow author-note count. The ledger was not edited. Created `pre-design/chem-m7-l11-methanol-dataset.md` with two constructed school examples giving 49.9% and 52.7% heat recovery. Added all standing Module 7 site findings and the five earlier route findings to `site-corrections-m7.md`. Across briefs 96 to 99, the site logs gained 58 exact, sourced rows, plus the revised vinegar entry. The read-only site files and lesson designs were not changed.

The combined final audit is `assets/brief96-99-final-audit.md`. All 57 plates and all 382 archive members were checked. It records the inherited framing exceptions and the actual source-access limits, including restricted historical full text and the withheld 2021 Biology stimulus. These checks do not supply artwork, recording or release approval. Resolve the 18 report findings before voicing, and transfer the four archives before using the plates on another computer. Question for Claude: none.

### Brief 28v: twelve public Module 6 and skills uploads (22 October 2026)

All 12 requested videos are Public. Final saved Studio pages match the prepared titles and descriptions and show HD complete, no notices, Education, AI disclosure Yes and not made for kids. Timed English (Australia) SRT captions were saved and published during upload. Useful auto-generated thumbnail frames were visually selected. Key notes occupy the endings, so end screens were skipped. No daily upload limit was reached.

Public video links:

- chem-m6-c09: https://youtu.be/I4cEf51KJ5I
- bio-m6-b09: https://youtu.be/Vyr0KetDMwo
- chem-m6-c10: https://youtu.be/xl-LqpA8IUo
- bio-m6-b10: https://youtu.be/71MkKTjXPOU
- chem-m6-c11: https://youtu.be/5RRF1xvW3lk
- skills-s04: https://youtu.be/dZQvSUxFY8A
- bio-m6-b11: https://youtu.be/oAVZdpuLnHw
- chem-m6-c12: https://youtu.be/WImke8N1jqg
- skills-s03: https://youtu.be/wYqgEi0J71g
- bio-m6-b12: https://youtu.be/y6vgEQaZel4
- chem-m6-c13: https://youtu.be/nyq1jhlmhgs
- chem-m6-c14: https://youtu.be/9-supcAoc8g

Public playlists, all with Manual sorting and final available-video order checked:

- https://www.youtube.com/playlist?list=PLWBoqjMWeZi0 (17 available videos)
- https://www.youtube.com/playlist?list=PLOXPcalkg-iI (16 available videos)
- https://www.youtube.com/playlist?list=PLD-Lwfjq3gW0 (4 available videos)

Biology has one pre-existing unavailable item, which was preserved. S04 follows B03 and S03 follows B10. Chemistry S04 follows C11 and S03 follows C12. Skills are ordered S01 to S04. Positions count available videos.

The six titles over YouTube's 100-character limit were minimally shortened; originals and notes remain in `youtube/wave5-metadata-draft.json`. C09 uses the approved design and file title for weak-acid neutralisation heat, rather than the inconsistent brief table label. Original MP4 hashes match the brief. The 29 upload records and all primary/additional playlist positions are reconciled in `youtube/wave5-uploads.json`; final evidence is `youtube/brief28v-final-readback.json`. Question for Claude: none.

### Brief 100: Module 7 plates, checks and site log (22 October 2026)

Created 46 transparent 2000 x 2000 PNGs in `public/assets/chemistry/` and `public/assets/biology/`. The native imagegen files were 1254 x 1254 and were enlarged for the required canvas, without added native detail. Provenance and QA are in `docs/production/claude-pm/assets/brief100-provenance.json` and `assets/brief100-qa/`; the checkpoint is `assets/brief100-media-checkpoint.json`. The archive is `out/archives/brief100-plates-2026-10-22.zip`; its CRC and all 46 archived PNG hashes match local files. The error-only report is `docs/production/claude-pm/checks/codex-check-100.md`. Added 64 exact, sourced findings to `docs/production/claude-pm/site-corrections-m7.md`; the site checkout was read only.

Open art QA: the B05 healthy and diseased Banksia plates do not align cleanly (alpha silhouette IoU 0.811) and retain colour fringes despite two imagegen re-matte attempts and a healthy-pair retake. Several other B05 cutouts have edge fringe. The C04b faded bromine tube aligns with the existing tubes, but its fume extends into the top clear margin, leaving 5.45% instead of 10%. The report flags script issues to resolve before voicing, including Bio P02's claim that culture is the only way to find microbes and two B05 claims about root defence. No narration, designs, scene code, site files, speech or renders were changed. Question for Claude: commission a clean Banksia pair and review the fume margin before use.

### Brief 101: second Module 7 plates, checks and site log (22 October 2026)

After brief 100 was handed in, created 25 transparent 2000 x 2000 PNGs for Chemistry P01, P02, C05 and C06 and Biology B06 and B07. Native imagegen output was 1254 x 1254 and was enlarged for the required canvas, without added native detail. Provenance and QA are in `docs/production/claude-pm/assets/brief101-provenance.json` and `assets/brief101-qa/`; the checkpoint is `assets/brief101-media-checkpoint.json`. The archive is `out/archives/brief101-plates-2026-10-22.zip`. All 66 archive members pass CRC, and all 25 archived PNG hashes match the local files.

The error-only report is `docs/production/claude-pm/checks/codex-check-101.md`. It has seven findings across five designs; B06 has no error found. Added 53 exact, sourced findings to `docs/production/claude-pm/site-corrections-m7.md`; the site checkout was read only.

Open art QA: three aligned macrophage states have clear margins of 8.9% to 9.8%, below the 10% request. The bacterium appears at two positions in the 50% before-to-after crossfade overlay, so timing needs playback review. The plasma cell is about 1.2 times the bare B cell width on this fixed canvas; showing 1.5 times the width would conflict with the 10% clear margin. Review its scene scale. Chemistry plate margins pass. Resolve the script findings before voicing. No narration, designs, scene code, site files, speech or renders were changed. Question for Claude: review the macrophage transition and plasma cell scale before use.

### Brief 102: B05 Banksia retake and matte cleanup (23 October 2026)

Created `public/assets/biology/m7-banksia-healthy-v2.png` and `public/assets/biology/m7-banksia-phytophthora-v3.png` from one generated healthy shrub drawing. The dying state changes foliage colour, darkens flower spikes and thins upper leaves while the trunk, branches and ground contact retain their exact positions. Both are transparent 2000 x 2000 PNGs with at least 11% clear margin. Alpha silhouette IoU is 0.9804597 at alpha 32, above the 0.97 target. Native imagegen output was 1254 x 1254 and was enlarged, without added native detail.

Rematted the other ten B05 cutouts in place. Their original versions remain in the brief 100 archive. Provenance is `docs/production/claude-pm/assets/brief102-provenance.json`; QA views and the repeatable processing script are in `assets/brief102-qa/`. QA includes cream, checker and dark backgrounds at native 100% and 300% edge zoom, plus a 50% pair overlay. Inspected the overlay and representative dark edge crops. The archive is `out/archives/brief102-plates-2026-10-23.zip`; `assets/brief102-media-checkpoint.json` records that all 123 archive members pass CRC and match local hashes. No lesson source, narration or scene code was changed. Question for Claude: review the new pair in motion before replacing the B05 side-by-side fallback.

### Brief 104: skills S07, Chemistry G02, Biology G03 and B10 (23 October 2026)

Created four transparent 2000 x 2000 Biology plates in `public/assets/biology/`, with provenance in `assets/brief104-provenance.json`, cream, checker and dark 220 px QA views in `assets/brief104-qa/`, and `assets/brief104-media-checkpoint.json`. All four plates have a real alpha channel and at least 10% clear margin. The airport bin follows the yellow lidded receptacle photographed in Melbourne Airport's Environment Management Plan; the cited source is in provenance. The archive is `out/archives/brief104-plates-2026-10-23.zip`; its 17 members pass CRC and the archived plate hashes match local files.

`checks/codex-check-104.md` reports one G03 wording correction and two B10 corrections. `assets/brief104-site-additions.md` contains 26 verified site rows (six G03 and 20 B10); root integrated them into `site-corrections-m7.md`. The read-only site files and design files were not changed. The four plates are ready for design review. No speech or full render was made. The airport bin was retaken after rendering the cited Melbourne Airport photo, adding its orange liner. QA, provenance, archive and checkpoint were updated; hashes and CRC pass. Claude should still review the bin in its scene.

### Brief 103: C07, P03, B08 and B09 plates, checks and site log (23 October 2026)

Created 12 new transparent 2000 x 2000 PNG plates in `public/assets/chemistry/` and `public/assets/biology/`, and rematted the existing bare B cell plate in place. All 13 have at least 10% clear margin. The aligned calorimeter, airway and cell pairs have 50% overlays in `assets/brief103-qa/`; cream, checker and dark QA views were inspected. The sooty apparatus was registered to the base plate, and the killer T-cell granules were added to the exact existing cell plate. Provenance and processing are in `assets/brief103-provenance.json` and `assets/brief103-process.py`. The archive `out/archives/brief103-plates-2026-10-23.zip` and `assets/brief103-media-checkpoint.json` pass CRC and archived plate hash checks.

`checks/codex-check-103.md` reports two Biology script corrections; no C07 or P03 errors were found. The 37 verified site rows in `assets/brief103-site-log-pending.md` were integrated by root into `site-corrections-m7.md`. Source design, narration and site HTML were not changed. Question for Claude: review the aligned transitions in motion before use.

### Brief 28w: Module 6 upload preparation (23 October 2026)

Verified all 12 rendered MP4 SHA256 hashes against brief 28w and checked their measured caption files. Added 12 entries to `youtube/wave5-metadata-draft.json` with shortened titles where needed, live lesson links, scene-timed chapters, syllabus text, caption paths and hashes, and planned playlist positions. An independent readback found shifted Biology chapter labels; those were corrected in both descriptions and chapter arrays. The user confirmed all 12 uploads and the YouTube Terms of Service acknowledgement. All 12 were published as Public with timed English (Australia) captions. Final Studio readback shows Public, HD complete, no notices, and auto-generated thumbnail frame 2 for each. Saved titles match exactly; YouTube normalised one extra blank line after the lesson link in each description, with all other characters matching. The public Chemistry playlist has 23 available videos, with P02, P03, P04, P05, C15 and C16 at positions 5, 8, 9, 16, 22 and 23. The public Biology playlist has 22 available videos, with B13, B15, B16, B18, B19 and G02 at positions 17 to 22. Both are Manual. The existing unavailable Biology item was preserved. Records and final evidence are in `youtube/wave5-uploads.json` and `youtube/brief28w-final-readback.json`.

Public video links: C15 https://youtu.be/KvQ-9Ki6NvI; B13 https://youtu.be/KtmFOGNNztg; C16 https://youtu.be/KZu-uvXVGFw; B15 https://youtu.be/wX3MUWuRfvY; P02 https://youtu.be/8zI6dh7bui4; B16 https://youtu.be/njVBwGcvD7A; P03 https://youtu.be/XrYeYMeSmDw; B18 https://youtu.be/o3PpNr9qFhY; P04 https://youtu.be/VFu_7xIIBH0; B19 https://youtu.be/FfOK7a6blSw; P05 https://youtu.be/WRD5syuSTEo; G02 https://youtu.be/dJSdk30cboo. Question for Claude: none.

### Brief 105: C08a, C08b, B11 and B12 plates, checks and site log (23 October 2026)

Created 15 new plates and rematted the two existing dichromate plates, giving 17 modified or new transparent 2000 x 2000 PNGs in `public/assets/chemistry/` and `public/assets/biology/`. The native generated art was 1254 x 1254 and enlarged for the required canvas, without added native detail. All plates have at least 10% clear margin. The aligned dichromate, Tollens', Fehling's, container, falcon egg and airway pairs have matching alpha silhouettes (IoU 1.000); the aligned bacterium pair has IoU 0.987. Cream, checker, dark and 50% overlay QA views are in `assets/brief105-qa/`. Provenance is `assets/brief105-provenance.json`. The archive `out/archives/brief105-plates-2026-10-23.zip` has 77 members and passes CRC and SHA256 checks against `assets/brief105-media-checkpoint.json`.

`checks/codex-check-105.md` reports two B11 conceptual overstatements and rejects the proposed B12 Decision 18 site correction against the USDA record. It has no C08a or C08b error finding. `assets/brief105-site-log-pending.md` has 47 exact read-only HTML matches, integrated by root into `site-corrections-m7.md`. B11 #11 was already marked not an error, B12 #18 was withdrawn, and B12 #2 was excluded because it concerns operational release quantities. No design, narration, scene code or site HTML was changed. Review the plates in their scenes before voicing or export.

### Owner-authorised interim review: Module 7 (25 October 2026)

Created `checks/codex-interim-findings-closure.md`, `checks/codex-interim-b11-learning-review.md`, `checks/codex-interim-art-review.md`, `checks/codex-interim-art-source.json` and `checks/codex-interim-media-audit.json`. The read-only helper is `scripts/check-interim-art-sources.mjs`. Independent checks confirm all 14 findings in checks 100 and 101 are fixed in current designs; eight findings from 103 to 105 remain in the current files. Brief 102 was an artwork retake and has no missing science-check requirement. The earlier B12 site-log correction was withdrawn from the site log, but its author-only proposal remains in the B12 design. B11 has three additional teaching findings: a flu-specific early-treatment explanation becomes a class-wide rule, the safety row answers with target count, and a one-year death total is used beside a trend claim. These have concrete repairs in the learner review.

The saved B05/B06/B07 v1 previews have 10/1/1 older PNG copies compared with current local artwork. Build fresh numbered previews before judging the cleaned assets. B05 still uses the old Banksia pair side by side; the new retake needs crop, ground-contact and feature measurements before integration. B06 already masks the wrap-to-inside change to avoid two visible bacteria, and B07 already scales the plasma cell to 1.5 times the bare painted cell width. Source checks do not establish playback quality. Actual stills were inspected; continuous playback could not be checked because the computer tool had no enabled browser. Exact playback targets are in the art review.

Archives 102 to 105 pass size, SHA-256 and CRC checks, with 217 recorded hashes matching archives and local files. The repaired macrophage after-v2 is preserved in brief 101; the current bare B cell is preserved in brief 103. The before-v1 macrophage matches brief 58 provenance, but its archive preservation was not checked. Source, narration, artwork and saved previews were not changed. Claude owns the pending author repairs and visual decisions; human listening and release gates remain pending. GCSE work is parked; the owner has separately dispatched the Physics and Maths asset-kit prompts. Question for Claude: none.

### Owner-authorised continuation: caption timing repair (25 October 2026)

The local audit of all 41 wave 5 published records found a systematic caption timing error. Their SRTs exactly reproduce the legacy exporter, which subtracts 24 frames (0.8 seconds) per preceding scene. The explainer picture and narration instead use the full sum of scene durations. All 85 thinking pauses contain early answer captions in the recorded SRTs. For C15, independent PCM comparison confirms feedback-1 starts at 349.10 seconds in the hash-matched rendered MP4, while its first SRT cue starts at 339.50 seconds. This is digital timing evidence, not human listening. `checks/codex-interim-caption-drift-review.md` and `checks/codex-interim-caption-audio-evidence.json` record the finding.

Prepared corrected SRT and VTT files for all 41 videos at `out/caption-repairs/wave5-2026-10-25/`, preserving all 7,012 cue texts. The manifest pins original and corrected hashes and lesson inputs. The corrected audit has zero findings, including no captions in the 85 response holds. A separate reviewer independently checked 531 cues across C15, B13 and C01 against their source word timing. The archive `out/archives/wave5-caption-timing-repair-2026-10-25.zip` has 83 members, all hash-matched to the prepared files; its SHA-256 is `41b7d4428870355f29452343aff7c7204688b530f03e730d074d351d065d9aec`. Transfer it before using these tracks on another computer. The checkpoint is `checks/codex-interim-caption-repair.json`.

Added the dedicated exporter `scripts/export-explainer-captions.mjs` and helper `scripts/lib/explainer-captions.mjs`. Future command: `npm run export:explainer-captions -- <measured-lesson.json> <new-output-directory>`. It rejects unsupported timing, missing words, captions entering thinking pauses, overlapping output and zero-duration cues. Five new tests and 25 existing playback/timeline tests pass. `scripts/prepare-explainer-caption-repair.mjs` repeats the batch preparation into a fresh directory; `scripts/audit-published-video-records.mjs` checks recorded metadata and replacement tracks. The production plan now points explainer exports to the correct command. Existing caption files, narration, rendered videos and public tracks are unchanged. Remaining: playback review, public caption-track replacement and saved-track verification.

The same batch checked 34 unique live lesson links across the 41 descriptions: all returned HTTP 200 with no detected soft 404 or topic mismatch. All 677 recorded chapter starts match scene boundaries within rounding; an independent content review found no wrong labels among the latest 12 videos' 199 chapters. Results are in `checks/codex-interim-published-links.json`, `checks/codex-interim-published-metadata.json`, `checks/codex-interim-corrected-caption-audit.json` and `checks/codex-interim-chapter-review.md`. `checks/codex-interim-fix-list.md` gives exact locations, minimal repairs and acceptance checks for the eleven open author findings. No live descriptions, playlists or site files changed. Question for Claude: none.

### Owner-authorised continuation: earlier captions and actual playback (25 October 2026)

Checked all 50 current Public records in waves 1 to 4; excluded the deleted C14. Prepared 49 tracks at `out/caption-repairs/earlier-waves-2026-10-25-v2/` and B03a separately at `out/caption-repairs/earlier-b03a-2026-10-25-v2/`. C4b and B03a had stale 75-second holds after the videos changed to 10 seconds; their SRTs exactly match historical source in commit e05a3dc. P01's previous fixed SRT only reflowed lines, leaving legacy timing. The new copies preserve original cue text and line breaks. Independent checks verify the two historical cases and P01 against measured word timing. Five early upload records have no recorded caption hash; four original MP4s are locally missing. Those remain explicit candidates with provenance or playback pending.

B03a's MP4 is nine frames shorter than its current source total. Refined PCM comparisons place feedback and key-note audio at the measured starts, so the new captions retain those starts; no 0.3-second adjustment was spread across them. Its final cue ends at 489.6 seconds, before the 510.1-second MP4 end. The shorter tail remains a separate video review item. The current B03a v2 manifest pins the updated audio evidence. Earlier candidate directories remain historical and are not the current selection.

The selected review catalog is `out/caption-repairs/review-catalog-2026-10-25-v2/catalog.json`: 91 candidates, 15,934 cue texts and line breaks preserved, and 163 thinking pauses clear of external captions. All source/track hashes validate. The complete ignored review data is in `out/archives/caption-timing-review-all-waves-2026-10-25.zip`; all 198 members hash-match local files. Restore into `out/caption-repairs`. `checks/codex-interim-earlier-caption-repair.json` pins the archive, selected manifests, scripts and remaining limits.

The local comparison player is running at http://127.0.0.1:8784/ and is left paused on C15 in a deliverable Chrome tab. Root played targeted C15, C4b and B03a boundaries at 1x and sampled caption clearance; C15 also had a 390 px width check. B03a has captions baked into its MP4, so the corrected external track overlaps them during sampled feedback. Keep its presentation pending. Turning both external tracks off confirmed the baked-in layer remains. Exact observations and limits are in `checks/codex-interim-caption-playback-review.md`. This is not a full-video or listening pass.

Added `scripts/serve-caption-review.mjs`, its tests, `scripts/prepare-earlier-explainer-caption-repair.mjs` and `scripts/prepare-caption-review-catalog.mjs`. Thirteen focused exporter/server tests pass. The tool checks hashes and supports original/corrected/off captions, thinking-pause jumps, narrow width and byte-range seeking. `checks/codex-interim-caption-review-tool.md` gives the exact three-manifest restart command. `checks/codex-interim-chapter-fixes.json` contains two description drafts: G03d's two one-second timestamp corrections, and removal of C15's nine-second chapter interval. Public captions, descriptions, videos and lesson source remain unchanged. Question for Claude: none.

### Caption baseline correction completed locally (25 October 2026)

The v2 review catalog above is a historical draft for 31 tracks. Do not publish those candidates: they use the earlier caption text and would undo 213 chemical notation edits and later wrapping improvements documented as published on 18 October. `checks/codex-interim-caption-provenance-review.md` records the exact affected files. Their candidate timestamp arithmetic remains valid, but text preservation against the older originals was insufficient. A new additive package will retain the QA content.

Read-only Studio downloads now capture the five earliest saved English (Australia) tracks. All five exactly retain the QA text and line breaks. B1 also matches QA timestamps; C1, mould, C2 and B2a have eight short cue endings changed by 21 to 141 milliseconds each. The exact raw downloads and differences are pinned in `checks/codex-interim-live-caption-provenance.json`. These are saved editor tracks, not a complete public playback or listening pass. No upload, edit, save or publish action was performed. The missing-video search found no exact local recovery copy for C1, B1, mould or C2; see `checks/codex-interim-missing-video-recovery.json`.

Prepared the additive `out/caption-repairs/qa-preserving-2026-10-25-v1/` package. Independent review verifies all 31 tracks and 5,589 cue bodies against QA and commit 93642fc, retaining all 213 notation edits. Corrected SRT and VTT times match the prior candidates and independently calculated cumulative renderer schedule. All 45 response holds are clear. The review documents a maximum one-millisecond floating-point serialization difference against rational frame arithmetic, with no local-output blocker. All 177 frozen input hashes pass. Five references reproduce captured SBV times, text and line breaks exactly; the remaining 26 saved-track identities stay pending. B03a retains its PCM evidence and tail warning.

The current selection is `out/caption-repairs/review-catalog-2026-10-25-v3/catalog.json`, with 91 unique videos. It replaces only the affected 31 candidates and freezes every selected lesson and reference track. The comparison server validates all entries and displays the five captured references separately from pending identities. The Chrome page at http://127.0.0.1:8784/ is paused on B2a; its saved-reference and MP4 checks pass. This UI check adds no playback or listening approval. Twenty-five focused tests pass.

The local archive is `out/archives/caption-timing-review-qa-preserved-2026-10-25.zip` (6,156,402 bytes, SHA-256 `4f3af52c99ddf13a6a43c50204a2491c0ed9a58f00c1da08744d0f8f749a9317`). All 809 members match local hashes. Restore into `out/caption-repairs` and select v3; historical candidates remain included as provenance. Original MP4s are separate dependencies. `checks/codex-interim-qa-caption-repair.json` pins the package. The retimer is `scripts/prepare-caption-qa-retiming.mjs`; its six fixtures cover content preservation, snapshots and failure guards. Published tracks, videos, lesson source and narration remain unchanged. Remaining work: 26 saved-track captures, four missing MP4s, affected playback and listening, B03a baked-caption presentation, then authorised public replacement.

### Additional interim work: Banksia integration safeguard (25 October 2026)

Later handoff: the owner-requested Physics, Maths and additional caption review is recorded below this section and in the live production board.

Two read-only browser reconnect attempts timed out, so no further Studio tracks or continuous art playback were checked. Continued with local artwork measurement and a separate source audit. The new brief 102 Banksia pair shows a shrub without roots; the original pair includes exposed roots and root damage. A global filename/shared-box swap affects five scenes: hook, water-mould, barriers, firebreak and control. It would remove the root visual used to explain damage and water loss, and leave inherited markers and soil coordinates needing new decisions. The exact consumer/trigger table is appended to `checks/codex-interim-art-review.md`. Keep the new hook pair separate from the existing mechanism plates until each scene has an appropriate root-bearing visual.

Extended `scripts/check-interim-art-sources.mjs` to read PNG pixels and record fit measurements in `checks/codex-interim-art-source.json`. The new shared box at alpha greater than 20 is `[220,256,1780,1744]`. With width 380 and soil y=880, the old y=1380 anchor puts the retake's painted bottom at y=968.67 even after correcting the crop. A hook-only candidate uses the painted trunk bottom y=1744 and centre y=698.77. This is a measured placement candidate, not a botanical root-crown coordinate or teaching/motion approval. The alpha IoU exactly reproduces brief 102's 0.980459728561568 using alpha at least 32. Both retake hashes match provenance; 27 scene-source files still match the read-only inventory. No lesson, scene, image, narration, preview or published track was changed.

### Owner-requested Physics, Maths and further caption checks (25 October 2026)

Independent review of all 54 Physics families is in `checks/codex-interim-physics-kit-review.md`. Scoped TypeScript and seven model suites pass; 47 source hashes match. The reviewer inspected ten contact sheets and five targeted native stills. No new blocking model error was confirmed. Clarify the M8 accelerator's orange connector/field arrow before selected lesson reuse. Existing motion, device and lesson-teaching gates remain pending.

`checks/codex-interim-maths-kit-review.md` verifies the tangent pilot's maths and six desktop/landscape stills. Root fixed a reuse-only error by rejecting the fixed rise/run overlay when `a` is not 2 and documenting the contract. Independent comparison confirms all 450 pilot component states unchanged. Existing pilot and MP4 hashes are unchanged. No new playback pass is supplied.

`checks/codex-interim-physics-maths-assessment-review.md` checks an explicit sample from Physics M5 lessons 1 to 4 and Maths limits/introductory differentiation. It gives independent calculations, prerequisite boundaries and six repair areas: speed scaling, tangent/limit definitions, answer leakage, projectile conditions, minor numerical keys and spatial wording. Repair these before adaptation. Site files were read only. This is not a full question-bank or syllabus review.

The browser retry timed out. The 26 saved-track captures and new continuous motion checks remain pending. Directly decoded one frame from each of nine hash-verified MP4s. Six contain baked caption bands: B2a, B2b, B2c, B03a, C3 and C4a. The three negative frames do not prove whole-video absence; four missing early MP4s remain unsampled. Source commit 46f7b6d8 changed caption burning from unconditional to opt-in on 14 October. The independent reviewer verified all frame classifications, image/video hashes and source history. Evidence: `checks/codex-interim-caption-layer-audit.json` and the addendum in `checks/codex-interim-caption-playback-review.md`.

The current selection is `out/caption-repairs/review-catalog-2026-10-25-v4/catalog.json`. All 91 selected lesson/reference/corrected-track fields and bytes match v3; six entries add presentation warnings. The local server at http://127.0.0.1:8784/ validates 91 entries with zero input issues and six warnings. This is an HTTP/source check, not new browser playback. The addendum archive is `out/archives/caption-layer-review-addendum-2026-10-25.zip`: 14 hash-matched members, 16,598,180 bytes, SHA-256 `38a81b895db525a887d9eb3033dfa4bb95c974985a519f0d464a9f6d34e5a1e7`. Restore it at repository root after restoring the base QA-preserved archive into `out/caption-repairs`. The existing QA checkpoint pins both archives. No speech, video render, site edit, upload or publication was performed. Author and release gates remain pending.

Root final validation: the repaired Maths pilot entry passes a focused strict TypeScript check (`--ignoreConfig --noEmit --jsx react-jsx --module ESNext --target ES2022 --moduleResolution bundler --allowSyntheticDefaultImports --resolveJsonModule --skipLibCheck --strict`). The final browser retry also timed out after the reviewers finished. The remaining browser-dependent gates are unchanged.

### First Physics and Maths lesson packs, owner-authorised (25 October 2026)

Handoff: `drafts/physics-maths-first-packs.md`. Root authored exact replacements for the six assessment repair areas in `drafts/physics-maths-assessment-corrections.md`; an independent reviewer verified the copy and calculations against the actual sources. The final draft explicitly labels SA3 as a revised supplied-case item and distinguishes Q7's rounded threshold from strict clearance. Site application and actual question reveal behaviour remain pending.

Separate authors completed `drafts/physics-horizontal-launch-pack.md` and `drafts/maths-secant-tangent-pack.md`. Both contain full conversational narration, scene-specific visual reuse/adjust/new decisions, a worked case, original practice with a protected countdown and brief feedback, optional quiet notes, entry knowledge and start/stop/next boundaries. Physics uses a shared-clock horizontal launch/drop comparison, a 20 m worked case and a 45 m practice case with explicitly supplied g = 10 m/s². Maths is a Year 11 calculus bridge, not a first Year 12 unit: it earns the limiting slope at (2,4), explains nonzero h from both sides and supplies a new-point transfer question. General rules and tangent equations are deferred.

Different reviewers independently checked the exact packs: `checks/codex-interim-physics-first-pack-review.md` and `checks/codex-interim-maths-first-pack-review.md`. Neither found a source-level science/mathematics or learner-script blocker. The Physics review executed the actual compatible height-aware model and confirmed that the old angled equal-height solver must not be reused unchanged. The Maths review recalculated all signed-h cases and the original practice; a 10-times close-up leaves only about 24.6 source pixels between the closest points, so old large markers would overlap. Smaller nonoverlapping footprints, label leaders or a larger honestly labelled zoom are implementation requirements, with actual phone fit pending.

The reviewed author-pack bytes are unchanged; their initial pending-gate tables remain authoring-time records, with current source-review state in the handoff and board. Claude's direction review, selected source implementation, schema 4 briefs, silent visual checks, recording gates, exact voiced learning review, human listening and release gates remain pending. This task generated no speech, audio, video, preview or artwork and changed no lesson code, site page or released inputs. GCSE remains parked.

### Physics and Maths image-bank brief and queue (25 October 2026)

Completed the first image-planning pass at `assets/physics-maths-image-bank/README.md`: 70 Year 12 Physics pages, 59 Year 12 Maths Advanced pages and one Year 11 calculus bridge. Every row has its current source SHA-256, a teaching/source reason and a coded/raster/reuse decision. The raw art inventory contains 793 Biology/Chemistry PNG files including old versions and variants; it is not an approved-family count. Root directly inspected four cross-subject candidates; the Maths author inspected both car plates, and the independent reviewer inspected the mass-spectrometer exterior. Reuse limits remain explicit.

The plan has 103 coded-only lesson rows and 27 with raster support or a reuse candidate. Eighteen reusable image families have 26 proposed views/states, including reuse candidates, and one controlled base-to-edit pair. This is a planning count before selection/reuse, not an order for 26 fresh images. Thirteen families need references, two need scene selection, two need reuse review and one is a technically specified prompt candidate. Most first-lesson teaching remains coded: the paired falling balls and exact secant/local-view geometry do not require new raster plates.

`lesson-image-map.md` maps all 130 rows; `generation-prompts.md` provides the complete family/state prompts, invariants, references, coded overlays and acceptance checks; `generation-queue.json` pins inputs and supplies priority-sorted jobs. `scripts/build-image-bank-inventory.mjs` reads actual source/art files, while `scripts/check-image-bank-plan.mjs` validates exact source coverage/hashes, family links, edit chains and reuse hashes before rebuilding the queue and readable views. Structural validation passes.

`checks/codex-interim-image-bank-review.md` independently verifies all 130 current source hashes and joins, all 18 families/26 states/one edit dependency, queue/prompt equality and input/reuse hashes. Nine actual source cases were sampled beyond headings. No blocking planning issue was found. This is not a complete source-science or syllabus review. Select the exact apparatus references and scenes before commissioning held families. The first conditional raster calibration is the intact copper tube followed by a controlled full-length-slot edit of that same inspected base. Keep current paths, magnet motion, numerical data and scientific annotations coded. No generated image or lesson use is approved by prompt readiness alone.

No images, videos, speech or new scene code were generated in this task; site and existing artwork remain unchanged. The handoff gives exact first-execution order and evidence requirements for subsequent image batches. Other Maths courses, other Year 11 routes and GCSE remain outside this pass.

### First Physics image generation: copper-tube candidates (25 October 2026)

Used the built-in image tool for seven calls, recorded with exact prompts, reference paths, copied original hashes, native metadata and source hash in `assets/physics-maths-image-bank/eddy-tube-first-batch.json`. All outputs are preserved under `out/checks/physics-eddy-tube-2026-10-25/raw/`. The first transparent outputs had outside copper halos. A cleaner painted white-background base was generated, followed by a controlled slotted edit. A second slot edit restored an erroneous notch in the far rim while retaining the continuous front-wall gap.

Selected raw candidates are `04-intact-white-base.png` and `07-slotted-white-corrected.png`, both 1024 by 1536 RGB images without alpha. `checks/physics-eddy-tube-first-asset-review.md` independently finds plausible intact/slot shapes, a continuous front gap and an unnotched back rim. It also finds substantial texture changes outside the slot, despite nearly matching bounds. Do not approve unchanged-pixel alignment or a seamless crossfade. Static comparison, exact scene-size fit, mechanism overlays and motion remain unreviewed.

The image tool's edit rule requires an explicit user choice before using another editing method. Root asked whether deterministic alpha-mask cleanup may remove the persistent halo while preserving the painted tubes. No response has been received at this checkpoint, and no code-based image edit has been performed. Cleanup and the final transparent asset pair remain pending. No output was added to approved public assets or integrated into a video.

The local candidate archive is `out/archives/physics-eddy-tube-candidates-2026-10-25.zip`: 9,186,418 bytes, SHA-256 `7836eea17229d4797cf2d5512db41de45d753388e0f81daf84e9be1f31173a71`. All nine members hash-match local files. Restore into repository root. `assets/physics-maths-image-bank/eddy-tube-first-batch-checkpoint.json` records the pending candidate status. The reviewed planning queue remains a historical zero-call baseline; the separate execution record and board now record seven actual calls.

### Brief 28x: verified files, live browser unavailable (27 October 2026)

All four MP4 and caption hashes match. Titles are within 100 characters, site links come first in .sa form, and every quoted syllabus point matches the ledger verbatim. Evidence: `youtube/brief28x-preflight.json`. The v4 caption catalog validates all 91 local entries with zero input issues in `youtube/brief28x-caption-local-validation.json`.

The owner said yes in chat to timing-only public caption replacement, preserving text and videos and excluding B2a, B2b, B2c, B03a, C3 and C4a. `youtube/caption-replacement-2026-10.json` records authorisation, the 91-entry queue, six skips and zero replacements. Reference hashes are not claimed as fresh live saved-track captures.

No connected apps or browsers were returned; Chrome and the in-app browser both report unavailable. No uploads, public caption changes or playlist changes occurred. Four new links and both live playlist readbacks remain pending. `youtube/wave5-uploads.json` retains its 41 actual upload records and adds a separate pending-upload pointer. Reconnect the signed-in Studio browser to resume; no new owner approval is needed for the authorised work.
