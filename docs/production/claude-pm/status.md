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
