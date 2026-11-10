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

### Brief 129: calculus kit and silent pilot (1 November 2026)

Completed the shared maths calculus kit, preserving the original square graph and tangent pilot. Source: `src/explainer/math/kit.tsx`, `graphs.tsx`, `algebra.tsx`, `calculus-examples.ts`, `calculus-pilot.tsx`, `calculus-pilot-entry.tsx`, `tsconfig.calculus.json` and the updated README. The shared QuestionCard and colour map now support Maths Advanced. Renderer: `scripts/render-maths-calculus-pilot.mjs`.

Hand-in: [checks/codex-build-129.md](checks/codex-build-129.md). It documents every component's props, examples and limits. Outputs: `out/explainer/maths-calculus-kit-pilot/`, containing the silent 60-second MP4, 12 desktop stills, 12 phone-landscape stills, maths/media checks and a hashed input manifest. Scoped strict typecheck passed; 2,774 plotted values and 11,398 numeric assertions passed. The MP4 has 1,800 frames at 30 fps, no audio stream and passes full decoding. Shared lock released, temporary bundle removed, render browsers closed.

No requested component omitted. Claude still needs to watch the exact pilot at playback speed. No lesson designs, narration, speech, uploads or commits.

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

### Brief 106: plates, error check and site log (27 October 2026)

Completed eight 2000 px RGBA plates in `public/assets/chemistry/` and `public/assets/biology/`. The blue strip uses the existing red tile's exact alpha and outline. The long-tail rat retake replaces the short-tail candidate. Sources, native outputs, transformations, hashes and QA are in `assets/brief106-generation.json`, `assets/brief106-provenance.json` and `assets/brief106-qa/`. Native imagegen canvases were 1254 px; final sizing and alpha cleanup were explicitly authorised by the owner. Final cleanup protects opaque painted interiors. All cream, checker and dark views and the litmus overlay were inspected by the processing author and root.

`checks/codex-check-106.md` reports five errors. C09 has no confirmed finding. C10 incorrectly groups heat with the catalyst as changing rate only; B13 confuses diseases with their pathogens, mixes point and period prevalence, and misdates the proposed Qdenga efficacy figures; B14 puts the beginning of water treatment after germ theory. The log now includes 49 new rows and extends the existing Yogyakarta finding to L18, with the correct Utarini publication link. B13's rejected item 11 and the already logged litmus item were omitted.

An APY-specific outcome is published in [Nganampa Health Council's 2020-21 annual report, printed p 8](https://www.nganampahealth.com.au/phocadownload/AnnualReports/2021/NHC%20Annual%20Report%202020-2021-web.pdf): no COVID cases across the Lands during that reporting year. That period includes July to December 2020; no separate January to June 2020 outcome was verified. It does not isolate the closure's effect. The requested national figure and legal dates were checked separately. The exact city count behind B13's “dozens of cities” remains unverified: [Fiotec reported more than 20 cities in 2021](https://www.fiotec.fiocruz.br/en/news/wolbachia-method-reaches-new-municipalities-in-brazil); a current exact total was not established.

Local archive: `out/archives/brief106-plates-2026-10-27.zip`. Current checkpoint: `assets/brief106-media-checkpoint.json`, SHA-256 `6a53c2546260b5a97b4cffd067d6ede61e103cb9964626ed64f2a1eea17b953f`, 51 members. Earlier cleanup digests are superseded. CRC and all local/archive member hashes pass. Not uploaded.

### Brief 107: plates, error check and site log (27 October 2026)

Completed 13 cleaned 2000 px RGBA plates. The four tube states share master apparatus pixels; the cup pair preserves its level and meniscus; the 8 by 4 well plate has the exact 15-well pink pattern; UV retains the existing handle's exact alpha. All five aligned pairs have 50% overlays and identical alpha. Colour changes stay within recorded masks. All 39 background views and five overlays were inspected again after restricting alpha cleanup to protect painted interiors. The audit verifies 5,285,153 opaque native interior pixels unchanged. Fish and spinifex retakes and original generations are preserved. Botanical references, teacher-added indicator result and transformation details are in `assets/brief107-provenance.json`; prompts are in `assets/brief107-generation.json`; QA and audit are in `assets/brief107-qa/`.

`checks/codex-check-107.md` reports four errors: B15's completed NCI licence claim, patent chronology and partnership chronology; P01's unqualified finished-mixture hazard codes. C11 and C12 have no confirmed finding. Twenty actual correction rows were added to the site log. B15's correct Nagoya status and extract count remain owner check notes rather than site errors. The withdrawn and already logged items were omitted.

P01 pink plates were commissioned after the safety check. The design already makes the teacher add the indicator. Public NSW CSIS material supports controlled school demonstrations, but its current chemical-specific entry needs staff authentication. Student handling permission and the school's risk assessment remain unverified. Current PL101 section 2 classifications are recorded in the error report, separately from ingredient hazards. John Watson's living status on 27 October 2026 remains unverified. No approved smoke bush or mudjala product was found; this was not an exhaustive worldwide regulatory audit. Cultural decisions remain with the owner's reviewer.

Local archive: `out/archives/brief107-plates-2026-10-27.zip`. Current checkpoint: `assets/brief107-media-checkpoint.json`, SHA-256 `027ac3d49ee6637e9cad24f0c92ca059c6cd90b9fc6629a148354ed4d71a6363`, 93 members. The earlier global-mask archive is preserved separately and is not the current selection. CRC and all local/archive member hashes pass. Not uploaded.

### Brief 108: plates, error check and site log (27 October 2026)

Completed the five matched Chemistry objects and four Biology plates, all 2000 px RGBA. Chemistry objects use 20% minimum clear margins; Biology uses 12.5%. All cream, checker and dark views and G01's actual 220 px dark views were inspected by the processing author and root. Cleanup protects painted interiors, including the sandwich lettuce. Sources, prompts, native originals, hashes and QA are in `assets/brief108-generation.json`, `assets/brief108-provenance.json` and `assets/brief108-qa/`. G02's neutral leaf was not painted and remains held for the cultural reviewer.

`checks/codex-check-108.md` reports one error: G02's “without repeat cost” claim omits monitoring and staff costs. C13, C14 and G01 have no confirmed finding. Eighteen new rows were added to the site log; the additional L21 monomer-recovery occurrences extend its existing row. Sweden is logged once with all three occurrences, and gene-drive resistance is an addition. Target Malaria's March 2026 statement confirms no wild gene-drive release; searches through 27 October found no later release announcement. This date-sensitive statement needs its recording-date check. Cultural review remains pending.

Local archive: `out/archives/brief108-plates-2026-10-27.zip`. Checkpoint: `assets/brief108-media-checkpoint.json`, SHA-256 `2b09b1126274c57f5f50bace31b1dccc094ea8508b72ab54675663ff52d4f7a9`, 65 members. CRC and all local/archive member hashes pass. Not uploaded.

### Briefs 106 to 108: final integration

Root inspected all 90 final background views, six aligned overlays and G01 at 220 px after the cleanup repairs. `checks/brief106-108-final-validation.json` independently verifies all 30 current plates, three archive digests, all 209 archive members, 2000 px RGBA, at least 10% clear margins and pair alpha equality. `checks/brief106-108-site-log-verification.json` and the independent `checks/brief106-108-integration-review.md` verify 87 new rows, two existing-row extensions, 113 original-text quotations and the 15 read-only site-file hashes.

All quoted syllabus points were checked directly against official NESA 2017 DOCX files. The original practice demands and calculations were checked; targeted comparison found no copied question, but this was not an exhaustive comparison with every NESA paper. All twelve lesson designs contain no em dashes. Lesson designs, narration, scene code, audio, site HTML and releases were not edited. No speech, video render, upload, commit or push was performed. Owner artwork/scene acceptance, factual repairs in the lesson designs, cultural review and later production gates remain separate. Question for Claude: resolve the ten reported findings and the documented verification limits before voicing.

### Briefs 28x and 28y: browser timeout on resume (27 October 2026)

Chrome initially connected to the signed-in HSCScience Studio tab. Reverified all four 28x MP4 and caption SHA-256 hashes. Chose the verified P06 MP4 through the upload picker. Studio showed the Details dialog, correct filename and Uploading 1%; no video ID had appeared. Approved title and description fill calls returned, then the audience radio operation timed out waiting for browser input. Saved metadata, completed upload and publication are unverified. No public link is claimed.

Stopped both upload briefs as instructed. No captions were replaced, playlists changed or 28y uploads started. Existing caption approval remains valid. Resume by inspecting the existing P06 draft before uploading the file again, then finish 28x and its caption replacements before 28y. Machine-readable progress: `youtube/brief28x-preflight.json`. The 41 confirmed upload records remain unchanged. Continuing to verify the existing 106 to 108 hand-ins in order.

### Brief 106: resume verification (27 October 2026)

The completed hand-in is present. Rechecked all eight plate files and all 51 archive members against checkpoint hashes, ZIP CRC, RGBA size and clear margins. The three-background contact sheet was inspected again. The existing error report and integrated site-log section are present. No regeneration or design edits were needed. Five reported corrections and the documented source-access/cultural limits remain for Claude before voicing. Continuing to 107.

### Brief 107: resume verification (27 October 2026)

The completed hand-in is present. Rechecked 13 plate files and all 93 archive members against checkpoint hashes and ZIP CRC, plus RGBA size, margins and five aligned alpha pairs. Inspected the three-background contact sheet. The existing four-error report and integrated site-log section are present. The teacher-added indicator, staff-only CSIS verification limit and cultural review holds remain documented. No regeneration or lesson edits were needed. Continuing to 108.

### Brief 108: resume verification and handoff (27 October 2026)

The completed hand-in is present. Rechecked nine plates and all 65 archive members against checkpoint hashes and ZIP CRC, RGBA size and margins. Inspected all three three-background QA pages. The held neutral leaf remains absent. The existing one-error report and integrated site-log section are present. The combined site log and all 15 read-only site-file hashes match the earlier reviewed checkpoint.

Briefs 106, 107 and 108 were verified in that order after the browser timeout. Their 30 plates, 209 archive members, reports, provenance and site-log additions remain intact. This resume check did not repeat the earlier full science/syllabus research. Ten reported corrections remain for Claude, along with artwork acceptance, cultural review and the documented external verification limits. No new images, narration, lesson edits, site edits, renders, commits or pushes were needed. Upload briefs remain paused at the P06 draft; no new public video or caption replacement was confirmed.

### Brief 28x: resumed publication (28 October 2026)

Chemistry P06 is public: https://youtu.be/sFHG5r3csDY. Studio confirmed the saved title and description, Education, AI disclosure Yes, not made for kids, English (Australia) captions published from the hash-verified SRT, and no copyright or Community Guidelines issues. Added it to the Chemistry Module 6 playlist; route positioning and playlist readback remain pending. Continue with G01, G02 and Biology P01, then caption replacements.

### Brief 28x: two public, two drafts, browser timeout (28 October 2026)

P06 https://youtu.be/sFHG5r3csDY and G01 https://youtu.be/mrmgK98F3-U are public. Their verified English (Australia) SRT tracks were published; Studio showed Education, AI disclosure Yes, not made for kids, completed checks without issues. Both are in the Chemistry Module 6 playlist, but route ordering and final readback remain pending. G01 used the visually inspected auto-generated frame 2. P06 has the existing generated frame 2; a separate thumbnail visual review was not performed.

G02 https://youtu.be/Jif3hku49lY and Biology P01 https://youtu.be/0U64-GcUlwM are uploaded saved drafts with approved titles and descriptions, not made for kids, Education, AI disclosure Yes, English (Australia) timed captions published in Studio, and their respective Module 6 playlist assignments. G02 and P01 were still being checked when last observed. Their thumbnail visual selection, checks and publication are pending. The attempt to reopen G02 timed out on browser input; its outcome is unverified. Inspect the existing drafts before uploading anything again.

Stopped upload briefs after the browser timeout as instructed. No existing public caption tracks were replaced; 28y has not started. Resume 28x with G02 and Biology P01, read back both playlist orders, then perform authorised caption replacements before 28y. See `youtube/brief28x-preflight.json` and `youtube/wave5-uploads.json`.

### Brief 28x: four videos public (28 October 2026)

G02 https://youtu.be/Jif3hku49lY and Biology P01 https://youtu.be/0U64-GcUlwM are now public. Both had processing complete, no copyright or Community Guidelines issues, English (Australia) captions saved and their respective Module 6 playlist assignments. Visually inspected the existing automatic thumbnail 2 for each. Together with P06 https://youtu.be/sFHG5r3csDY and G01 https://youtu.be/mrmgK98F3-U, all four are public. Route ordering and playlist readbacks and authorised caption replacement remain pending.

Both Module 6 playlists are manually ordered and read back after reload. Chemistry: G01 follows strong-acid calculations, G02 follows Ka, P06 follows titration calculations. Biology: P01 follows mutagens and precedes point mutations. Full available-video ID readbacks are in `youtube/brief28x-preflight.json`. Biology retains its existing unavailable item. Caption replacements remain pending.

Caption repair: replaced chem-m6-c01 (HOcAqIXXbGk) after downloading the prior live track. Downloaded the saved result and verified all 196 cue texts and starts against the corrected SRT. Six cue ends differ by 21 to 301 ms after Studio import. First feedback cue starts at 7:14.200, matching the corrected file whose exporter validates the response hold. Old and new live hashes and evidence are in `youtube/caption-replacement-2026-10.json`.

### Brief 28x: caption repair interrupted (28 October 2026)

Four videos public and both Module 6 playlists ordered and read back. One existing public caption track, Chemistry C01 HOcAqIXXbGk, was replaced and its saved track downloaded and checked. The second, Biology B01 BLD9Zu9sPQ0, has its old track captured at `out/checks/caption-live-provenance-2026-10-25/bio-m6-b01-2026-10-28.sbv`. Its 177 cue texts and start times match the reference; eight ends differ by 21 to 221 ms. Opening the file chooser for the corrected SRT timed out; whether an import dialog remains open is unverified, and no B01 publication is confirmed. Inspect the editor before continuing.

Stopped the upload briefs at the browser timeout as requested. The remainder of the caption queue and brief 28y remain pending. Evidence and hashes are in `youtube/caption-replacement-2026-10.json` and `youtube/brief28x-live-captions-2026-10-28.json`.

### Brief 28x: caption repair resumed (28 October 2026)

Twenty-two public tracks have been replaced and their saved tracks downloaded and checked. The queue and per-track hashes and feedback timing are in `youtube/caption-replacement-2026-10.json`. Text and cue starts matched the corrected files; Studio adjusted some cue ends. Continue with skills-s04 (dZQvSUxFY8A). Brief 28x remains in progress; 28y has not started. Earlier interruption entries above are superseded by this update.

### Brief 28x: Studio connection stopped (28 October 2026)

Thirty-seven public caption tracks have been replaced and checked against downloaded saved tracks. The next item is chem-m6-p04, VFu_7xIIBH0. Its prior live track was downloaded to `out/checks/caption-live-provenance-2026-10-25/chem-m6-p04-2026-10-28.sbv` and compared with its reference: 178 texts and starts match, one end differs by 101 ms. No replacement was uploaded for this item. Studio stopped responding after the download, so inspect the editor before resuming. Brief 28x remains incomplete and 28y has not started. The caption ledger and comparison reports in `youtube/` contain per-track evidence. Briefs 106 to 108 were previously completed and verified, as recorded below and in their hand-ins.

### Brief 28x: resume attempt (28 October 2026)

Chrome could not attach to a fresh Studio tab. Stopped upload work as instructed. No additional caption replacement or video upload was made. The next item remains chem-m6-p04 (VFu_7xIIBH0), whose prior live caption track is captured and compared. Thirty-seven replacements remain completed; brief 28y has not started. Briefs 106 to 108 were previously completed and verified.

### Brief 28x: Chrome unavailable on resume (28 October 2026)

The browser inventory returned no connected browsers on this resume attempt. Stopped the upload briefs as instructed; no further public changes were made. Thirty-seven caption replacements are completed and checked. The next item remains chem-m6-p04 (VFu_7xIIBH0); its prior track has been captured and compared. Brief 28y remains unstarted. Briefs 106 to 108 were already completed and verified.

### Brief 28x completed and 28y started (28 October 2026)

All 85 eligible public caption tracks were replaced and their saved tracks downloaded and checked. Six tracks with baked-in captions were skipped: bio-m5-b02a, bio-m5-b02b, bio-m5-b02c, bio-m5-b03a, chem-m5-c03 and chem-m5-c04a. The per-track hashes and readbacks are in `youtube/caption-replacement-2026-10.json` and comparison reports. The four 28x videos and both Module 6 playlist readbacks were completed earlier.

Brief 28y: all 20 specified MP4 hashes match and cumulative caption files exist. Chemistry M7 C01 is public at https://youtu.be/y-galt8f4ow, with English (Australia) captions and the new public manually sorted Chemistry Module 7 playlist. Biology M7 B01 is uploaded as a private draft at https://youtu.be/SfHlZFpl5c4, with captions published and the new public manually sorted Biology Module 7 playlist. Its checks and thumbnail were still processing at this point. Nineteen videos remain to publish and both new playlist orders require final readback.

## 28 October 2026: 28y paused after browser connection dropped

Brief 28x is complete, including the four public Module 6 videos and replacement of 85 eligible public caption tracks. The six baked-in exceptions remain unchanged. See `youtube/caption-replacement-2026-10.json` and the 28x readback evidence.

Brief 28y has five confirmed public videos: chem-m7-c01 `y-galt8f4ow`, bio-m7-b01 `SfHlZFpl5c4`, chem-m7-c02 `ZWPnKycf4bg`, bio-m7-b02 `lh7xCoEFpkI`, and chem-m7-c03 `G3nQPPbvO7I`. Both new Module 7 playlists have been created public with manual sorting. Their final IDs, ordering and readbacks remain pending.

Three more videos are private drafts with timed English (Australia) captions published: bio-m7-b03 `UbgSznvRHtk`, chem-m7-p01 `hJ3m9qswFqI`, and bio-m7-p02 `sGl2I3C9TyY`. Checks were still running. B03 thumbnail 1 and chem practical thumbnail 2 were visually inspected; bio practical thumbnail remains to inspect. Publish in the brief's priority order after checks clear and prerequisites are available.

Chem-m7-c04a `3sb8EukMr5g` was uploading as a private draft with title, description, audience, AI disclosure, language and Chemistry playlist selected. The caption editor was open when the Chrome connection timed out twice. Its upload completion, captions, thumbnail and checks are unconfirmed. Resume that existing draft and avoid duplicate uploads. Eleven subsequent videos remain to upload. Full per-video state and hashes are in `youtube/wave5-uploads.json`; prepared descriptions are in `youtube/wave5-metadata-draft.json`.

Per the owner's instruction, uploads stopped on the browser drop. Briefs 106, 107 and 108 were already carried out and their findings and outstanding review gates are recorded in the earlier status entries. No daily upload limit was observed.

### Browser retry

A subsequent retry could not obtain the Chrome state: two connection attempts timed out. No upload or publication changes were made during this retry. Resume 28y from the existing drafts and remaining queue recorded above when Chrome control is available.

Chrome connection was retried again and timed out before a browser state could be obtained. No upload changes were made; the existing 28y resume point above remains current.

### Brief 28y: uploads complete, browser stopped (28 October 2026)

All 20 specified files have been uploaded. Eighteen are confirmed public, including Chemistry M6 P07 https://youtu.be/6l_m2vN2X5g and G03 https://youtu.be/Rl7RUILbyHY. Studio showed no initial check issues for G03 and confirmed publication. Timed English (Australia) captions were published on all 20.

Chemistry M6 G04 https://youtu.be/oj-Cp4KMZUY and skills S05 https://youtu.be/4uehJ1QBp2o remain private drafts. Inspect their generated thumbnails and checks, then publish in that order. Do not upload duplicates. The two public Module 7 playlists were created, but their IDs and final ordering still need readback. Sort and read back the affected Chemistry M6 and skills playlists as well. Per-video details and prepared metadata are in `youtube/wave5-uploads.json` and `youtube/wave5-metadata-draft.json`.

Chrome stopped responding when opening the next saved draft. Upload work stopped as instructed. Brief 28x is complete and briefs 106 to 108 were previously carried out, with findings and remaining review gates recorded in their hand-ins. No daily upload limit was observed. Earlier 28y interruption counts above are superseded by this entry.

### Brief 28y complete: drafts published and playlists read back (28 October 2026)

Published the existing G04 draft https://youtu.be/oj-Cp4KMZUY and S05 draft https://youtu.be/4uehJ1QBp2o, in that order. Studio confirmed publication, processing complete and no copyright or Community Guidelines issues. Visually inspected and kept automatic thumbnail 2 for both. All 20 brief videos are now public. No files were uploaded in this resume and no duplicates were created.

Public Manual playlist readbacks: Chemistry M7 https://www.youtube.com/playlist?list=PLZn7qgJ_Eg2E has C01, C02, C03, P01, C04a, C04b, G01. Biology M7 https://www.youtube.com/playlist?list=PLF46LOS0IuCo has B01, B02, B03, P02, B04, B05, B06, B07. Skills https://www.youtube.com/playlist?list=PLD-Lwfjq3gW0 has S01, S02, S03, S04, S05. These already matched the required order. Reordered Chemistry M6 https://www.youtube.com/playlist?list=PLWBoqjMWeZi0: G03 follows P06, P01 follows C13, G04 follows C15, and P07 follows C16. Added existing S05 before G01 as required by the route review. All 31 Chemistry M6 positions were read back after reload. A reorder call timed out, but control recovered and final order was verified. Full lesson IDs, video IDs and positions are in `youtube/brief28y-final-readback.json` and `youtube/wave5-uploads.json`. Board updated. Question for Claude: none.

### Brief 28z: prepared, first draft uploaded, browser timeout (28 October 2026)

Prerequisites 28x and 28y are complete. All fifteen MP4 SHA-256 values match the brief and every cumulative caption file is present. Prepared titles, site links, syllabus quotations and chapters using cumulative scene starts in `youtube/brief28z-preflight.json` and `youtube/wave5-metadata-draft.json`. No title needed shortening.

Chemistry C05 is an existing private draft at https://youtu.be/1qF_486TVQE. Studio confirmed its title, description, not made for kids setting and Chemistry Module 7 playlist. Copyright showed no issues; Community Guidelines checks were at 18%. The advanced settings click timed out. Upload work stopped under the inherited 28x timeout rule. Resume this draft without uploading a duplicate. Advanced settings, captions, thumbnail inspection, completed checks and publication remain pending. The other fourteen files remain unuploaded. The playlist membership changed but final playlist readback remains pending. Per-video state is in `youtube/wave5-uploads.json`.

### Brief 110: reviews, plates and site log complete (28 October 2026)

Ten independent review files in checks/ use the requested filenames and leave Resolution empty. Counts are separate by review and overlap; they are not unique defect totals.

- G03: learning 0 blockers, 2 should fix; science 0 blockers, 3 should fix.
- P04: learning 0 blockers, 3 should fix; science 1 blocker, 3 should fix.
- P05c: learning 2 blockers, 2 should fix; science 2 blockers, 4 should fix.
- P06c: learning 1 blocker, 3 should fix; science 1 blocker, 3 should fix.
- S08: learning 2 blockers, 3 should fix; science 2 blockers, 2 should fix.

Three transparent plate candidates and the aligned water-bath overlay were inspected on cream, checker and dark backgrounds. Exact prompts, native history and hashes: assets/brief110-provenance.json. Local archive out/archives/brief110-plates-2026-10-28.zip has 100 members and passes CRC and member hashes; see assets/brief110-media-checkpoint.json. Eight exact-text site corrections were verified and added to site-corrections-m7.md, with checks/brief109-110-site-log-verification.json. Design findings, current staff-only school chemical permissions and owner artwork acceptance remain pending. Heating mantle retained. No design edits, speech, renders, commits or uploads for this review brief. Question for Claude: resolve the findings before recording.

### Brief 109: reviews, plates and site log complete (28 October 2026)

Eight requested checks in checks/, with empty Resolution sections. Counts are learning then science and overlap across reviews.

- C15: learning 0 blockers, 3 should fix; science 0 blockers, 4 should fix.
- G04: learning 0 blockers, 3 should fix; science 0 blockers, 3 should fix.
- P05 Biology: learning 2 blockers, 2 should fix; science 2 blockers, 3 should fix.
- S06: learning 0 blockers, 3 should fix; science 0 blockers, 4 should fix.

Seven new transparent plates plus the LDPE contrast replacement delivered. Root inspected the contact sheet, before/after and final aligned overlays. LDPE canvas and alpha are byte-identical to its original. Full hand-in: assets/brief109-hand-in.md. Prompts: assets/brief109-provenance.json. Verified local archive: out/archives/brief109-plates-reviews-2026-10-28.zip, see assets/brief109-media-checkpoint.json. Five new confirmed site rows added to site-corrections-m7.md, with the existing L05 safety correction reconciled. L23 needs its stale static key removed because the practice bank randomises questions. Site remains unchanged. Owner art acceptance, school-policy reconciliation and source limits remain pending. No design edits, speech, render or commit. Question for Claude: resolve findings before recording.

### Brief 111: reviews, plates and site log complete (28 October 2026)

Eight independent review files in `checks/`, with empty Resolution sections. Counts are separate by review type and overlap.

- C01: learning 0 blockers, 2 should fix; science 0 blockers, 0 should fix.
- C02: learning 1 blocker, 3 should fix; science 1 blocker, 3 should fix.
- B01: learning 0 blockers, 2 should fix; science 0 blockers, 2 should fix.
- B02: learning 2 blockers, 2 should fix; science 2 blockers, 3 should fix.

Delivered 18 transparent plate candidates. Independent artwork review inspected all 18 plates and nine overlays. Its three findings were repaired: stable balance geometry, stable Mohr flask geometry and visibly milky precipitate. Root reinspected the repairs. Prompts and provenance: `assets/brief111-provenance.json`; geometry proof: `assets/brief111-geometry-repair.json`; archive: `out/archives/brief111-plates-2026-10-28.zip`, with `assets/brief111-media-checkpoint.json`. The archive has 159 ZIP entries, including its manifest, and passes CRC, content hashes and manifest comparison.

The three Mohr flasks and settled-precipitate beaker retain the exact requested legacy framing, with about 8% minimum margin. This specific cross-fade requirement takes priority over the brief's generic 10% clear-margin rule. All other plates meet 10%. No stretching was used. Owner artwork acceptance remains pending.

Fifteen confirmed site rows are in `site-corrections-m8.md`. Root checked every old quotation against the read-only HTML, in `checks/brief111-site-log-verification.json`. Fresh official 2017 DOCX text from brief 110 confirmed all three syllabus groups and examples. B02 proposed repairs are shorter or name explicit cuts. No site, lesson source, narration or scene code was changed. No speech, renders, publication, commit or push for this review brief. Claude resolves the learning/science findings; exact voiced preview and human listening remain later gates.

Combined verification: `checks/brief109-111-final-validation.json` confirms all 26 reviews, 29 plate assets, three local archives, source hashes and the recorded framing exceptions. The logs add 28 confirmed site corrections (13 Module 7 and 15 Module 8). Brief 28z remains stopped at the existing C05 private draft after its browser timeout; all 15 local video/caption input checks passed in `youtube/brief28z-input-check.json`. Question for Claude: resolve the review findings before recording.


### Brief 28z complete: fifteen public uploads and final readbacks (29 October 2026)

All fifteen approved MP4s are public. Resumed the existing C05 draft and uploaded the other fourteen once each. Every saved title and description matches the prepared record after blank-line normalization. All fifteen saved pages show Public, HD complete, not made for kids, AI disclosure, no paid promotion, English (Australia) and Education. Cumulative timed SRT captions were imported and saved; copyright and Community Guidelines checks found no issues. End screens were skipped for the final key notes.

- chem-m7-c05: https://youtu.be/1qF_486TVQE
- bio-m7-b08: https://youtu.be/fGIkZ3nwXZw
- chem-m7-c06: https://youtu.be/-XVSCs8nHnI
- bio-m7-b09: https://youtu.be/IcOyh0y7EjI
- chem-m7-c07: https://youtu.be/7dqWjzokvJU
- bio-m7-g03: https://youtu.be/2Xrb7pKgo6w
- chem-m7-p02: https://youtu.be/8qKRorP_RRk
- bio-m7-b10: https://youtu.be/nwBfq4XGI0w
- chem-m7-p03: https://youtu.be/Od9P6Tuv800
- bio-m7-b11: https://youtu.be/Qg_caOin2x0
- chem-m7-g02: https://youtu.be/PPIwkdv8dC8
- bio-m7-b12: https://youtu.be/9FkW6EQuzrA
- chem-m7-c08a: https://youtu.be/GJVFRMiNDOk
- chem-m7-c08b: https://youtu.be/j2GPr4yGQHc
- skills-s07: https://youtu.be/NT6MvX6VT6g

Public Manual playlists were read back: Chemistry M7 (16 entries) https://www.youtube.com/playlist?list=PLZn7qgJ_Eg2E, Biology M7 (14 entries) https://www.youtube.com/playlist?list=PLF46LOS0IuCo, and skills (6 entries) https://www.youtube.com/playlist?list=PLD-Lwfjq3gW0. Chemistry P02 follows C04b and precedes G01; S07 follows P03 and precedes G02. Skills S07 follows S05, leaving S06 for later. Chemistry persisted after reload.

S07 uses automatic frame 1 (the three-target comparison), because frame 2 showed an empty table. Other uploads retain inspected frame 2. Removed internal practical-link author notes from P02/P03 and corrected G03 lesson11 to the live .sa URL before publication. Evidence: `youtube/brief28z-final-readback.json`, `youtube/brief28z-preflight.json`, `youtube/brief28z-input-check.json` and `youtube/wave5-uploads.json`. Earlier interruption entries above are historical. No daily upload limit, duplicates, paid narration, renders, source changes, commit or push. Briefs 109 to 111 remain delivered as recorded above, with Claude to resolve their review findings. Question for Claude: none for the upload hand-in.


### Brief 28aa complete: nine public Module 7 uploads (29 October 2026)

All nine approved MP4s were uploaded once each in the brief table order and are public. Every MP4 SHA-256 matched. Only the listed cumulative timed SRT files were imported. HD processing and copyright/Community Guidelines checks completed with no issues. Saved titles and descriptions match the prepared metadata after whitespace normalization, including exact syllabus quotations, live .sa links and cumulative chapters. Saved audience, AI disclosure, no paid promotion and English (Australia) settings were checked; Education was checked during upload. Automatic thumbnail frame 2 was visually inspected for every video. End screens were skipped for the final key notes.

- chem-m7-c09: https://youtu.be/hk9wDdhbTLA
- bio-m7-b13: https://youtu.be/HEm9ud4b7iI
- chem-m7-c10: https://youtu.be/_y2Ow9e-0sI
- bio-m7-p01: https://youtu.be/PzrqjRdWUjY
- chem-m7-c11: https://youtu.be/vxG4x229SeE
- bio-m7-g01: https://youtu.be/SYgIWk0__bk
- chem-m7-c12: https://youtu.be/Cms4sZ-Sly0
- chem-m7-c13: https://youtu.be/aGWfHHCxzrU
- chem-m7-c14: https://youtu.be/Mv1CG4fzbaM

Both Public Manual playlists were read back after reload: Chemistry M7 (22 entries) https://www.youtube.com/playlist?list=PLZn7qgJ_Eg2E and Biology M7 (17 entries) https://www.youtube.com/playlist?list=PLF46LOS0IuCo. Chemistry C09 to C14 follow C08b. Biology P01 is fourth, after B03 and before P02; B13 and G01 follow B12. Future lesson gaps remain.

Evidence: `youtube/brief28aa-preflight.json`, `youtube/brief28aa-final-readback.json`, `youtube/wave5-uploads.json` and the production board. No daily upload limit or duplicates. No paid narration, rendering, lesson source edits, commit or push. Question for Claude: none for this upload hand-in.


### Brief 113: Year 12 coverage audit (30 October 2026)

Created `checks/coverage-audit-2026-10-30.md` and `checks/coverage-audit-2026-10-30.json`. The JSON includes all route rows, retired IDs, 127 syllabus points, Year 11 inventories and live channel/playlist readbacks.

| Module | Subject | Active | Public | Built, not uploaded | Designed | Held | Not started | Dropped/merged |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 5 | Chemistry | 26 | 24 | 0 | 2 | 0 | 0 | 4 |
| 5 | Biology | 28 | 27 | 0 | 0 | 0 | 1 | 0 |
| 6 | Chemistry | 27 | 26 | 1 | 0 | 0 | 0 | 0 |
| 6 | Biology | 20 | 19 | 0 | 0 | 0 | 1 | 4 |
| 7 | Chemistry | 27 | 21 | 0 | 6 | 0 | 0 | 3 |
| 7 | Biology | 21 | 17 | 0 | 1 | 3 | 0 | 2 |
| 8 | Chemistry | 21 | 0 | 0 | 2 | 0 | 19 | 4 |
| 8 | Biology | 22 | 0 | 0 | 2 | 0 | 20 | 4 |

Read back all 145 public channel videos and nine playlists. All 139 current wave uploads are public and in a playlist; no duplicate upload found. G04 counts as public through the old Year 11 limiting-reactants prerequisite, with the separate M5 production parked. Flagged six burned-in caption videos, the three Biology M7 cultural holds, Chemistry M5 C12 cultural review and 18 missing or partial syllabus groups. The named content checklist has no Year 12 rows, so the audit used the Year 12 syllabus ledger and designs. Year 11 inventory distinguishes Chemistry 2017 M1 to M4 from Biology 2025 three focus areas. No uploads, published edits, design edits, renders or commits. Nothing remains unfinished. Question for Claude: none.


### Brief 112: Revision 2 error-only check (30 October 2026)

Created `checks/codex-check-112.md`, with calculation/review detail in `checks/brief112-chemistry.md` and `checks/brief112-biology-skills.md`. Source hashes/counts: `checks/brief112-input-audit.json`. Site quotation proof: `checks/brief112-site-verification.json`. All 13 designs are Revision 2; none skipped.

- chem-m7-c15: 0 errors.
- chem-m7-g04: 1 error.
- bio-m7-p05: 1 error.
- skills-s06: 0 errors.
- chem-m7-g03: 0 errors.
- chem-m7-p04: 0 errors; current Appendix D permission check unfinished.
- chem-m7-p05: 0 errors.
- chem-m7-p06: 3 errors.
- skills-s08: 0 errors; owner keeps "probably contributed".
- chem-m8-c01: 0 errors.
- chem-m8-c02: 1 error.
- bio-m8-b01: 2 errors.
- bio-m8-b02: 0 errors.

Eight design errors, plus a separate published bio-m7-p02 "tape, don't seal" finding. Added one verified L21 thermoset row to `site-corrections-m7.md`; M8 heat-loss finding was already logged, so no duplicate. All narrations meet the character range and have zero em dashes. Current staff-only school culture permissions and potassium dichromate Appendix D remain unread, so no permission pass is claimed. P06 needs the reported concentration/formulation repair; its original clear-detergent outcome is not established by the literature. No physical pilot requested. No design edits, speech, renders, published edits or commits. Question for Claude: resolve the reported errors and remaining school-permission checks before recording.


### Brief 113: independent verification addendum (30 October 2026)

Preserved the dated audit and existing hand-in that another session wrote while this work was running. Independent review is in `checks/coverage-audit-2026-10-30-review.md` and `.json`, with a repeatable verifier. Fresh requests matched every entry and order in all nine public playlists. Rechecked all 192 active rows, eight summary rows, 139 current upload IDs, 127 syllabus points, design Revisions and Year 11 inventories. Applied one correction to the requested master Markdown/JSON: C8-IQ1-02 already has partial precipitation support from public M5 P03, though the full Module 8 identification suite is missing. Counts are unchanged. Resolved four renderer identities from their final export audits. The five channel-feed pages in the original audit were not independently repeated; their saved IDs match the freshly fetched 145-video playlist union. No uploads, designs, video edits or commits. Question for Claude: none.


### Briefs 112 and 113: repeat-request verification (30 October 2026)

Preserved the existing reports and hand-ins. All 13 design SHA-256 hashes still match `checks/brief112-input-audit.json`. Reran the coverage verifier without overwriting its saved review: fresh reads of all nine public playlists and local checks of 192 route rows, 139 current uploads, 127 syllabus points, design Revisions and Year 11 paths returned no findings. Playlist union remains 145 videos. Brief 112 still reports eight design errors and the separate published P02 memory-line finding; current staff-only culture permissions and potassium dichromate Appendix D remain unfinished. Reports: `checks/codex-check-112.md`, `checks/coverage-audit-2026-10-30.md` and `.json`. No design edits, speech, renders, uploads or commits. Question for Claude: resolve the existing findings and staff-only safety checks before recording.

### Briefs 112, 113 and 114: current hand-in (30 October 2026)

Brief 112: preserved and reverified `checks/codex-check-112.md`. All 13 design hashes and narration counts still match; no em dashes. Existing errors remain: C15 0, G04 1, Biology P05 1, S06 0, G03 0, Chemistry P04 0, P05 0, P06 3, S08 0, M8 C01 0, C02 1, B01 2, B02 0. Eight design errors plus the separate published P02 memory-line finding. Fresh NSW and solubility sources support the existing findings. Staff-only culture permissions and dichromate Appendix D remain unread. No duplicate site row was added.

Brief 113: updated `checks/coverage-audit-2026-10-30.md` and `.json` for the eight new designs. Fresh reads covered all nine playlists and all five channel pages: 145 unique public videos, no public video outside the playlists. Route totals are 134 public, one built, 21 designed, three held and 33 not started. Sixteen syllabus groups remain missing or partial; detailed practical gaps and Year 11 inventory are in the audit.

| Module | Subject | Public | Built | Designed | Held | Not started |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| 5 | Chemistry | 24 | 0 | 2 | 0 | 0 |
| 5 | Biology | 27 | 0 | 0 | 0 | 1 |
| 6 | Chemistry | 26 | 1 | 0 | 0 | 0 |
| 6 | Biology | 19 | 0 | 0 | 0 | 1 |
| 7 | Chemistry | 21 | 0 | 6 | 0 | 0 |
| 7 | Biology | 17 | 0 | 1 | 3 | 0 |
| 8 | Chemistry | 0 | 0 | 6 | 0 | 15 |
| 8 | Biology | 0 | 0 | 6 | 0 | 16 |

Brief 114: wrote all eight `checks/<key>-learning-review.md` and eight `checks/<key>-claude-science-check.md` files for m8p02, m8g01, m8c03a, m8c03b, m8b03, m8b04, m8b05 and m8g03. Each ends with an empty Resolution section. Counts below deduplicate findings repeated across the two reviews.

| Design | Blockers | Should fix |
| --- | ---: | ---: |
| chem-m8-p02 | 2 | 1 |
| chem-m8-g01 | 0 | 1 |
| chem-m8-c03a | 0 | 7 |
| chem-m8-c03b | 0 | 1 |
| bio-m8-b03 | 0 | 3 |
| bio-m8-b04 | 1 | 4 |
| bio-m8-b05 | 0 | 3 |
| bio-m8-g03 | 0 | 1 |

The three blockers include one unresolved staff-only CSIS check, not a finding that barium chloride is prohibited. The other blockers are P02's uncontrolled filtration temperature and B04's claim that conserving water alone restores concentration after added salt without drinking. Four earlier Revision 2 designs also need `.sa.html` metadata links. Added 12 confirmed rows to `site-corrections-m8.md`, after rechecking every exact quotation against the read-only HTML. Notes and unsupported attributions stay separate in `checks/brief114-site-additions.md`; no duplicate B03/G03 rows.

Delivered 29 new plates, five translated flame v2 copies and one alpha-only nephron repair. Built-in imagegen prompts, native originals, hashes, background checks and 50% overlays are in `assets/brief114-provenance.json` and `assets/brief114-qa/`. Owner art acceptance and cross-fade playback remain pending. The three P02 plates are held because its asset brief requires both reviews to pass before generation. No design was edited to remove that condition.

Local archive: `out/archives/brief114-plates-2026-10-30.zip`. Checkpoint: `assets/brief114-media-checkpoint.json`. All 323 members passed ZIP CRC, hashes and isolated restore checks. The archive is not uploaded. No design edits, speech, renders, published-video edits, uploads or commits. For Claude: resolve the findings and school-permission checks before recording; then commission the three held P02 plates.

### Brief 115: Biology M6 B20 reviews, plates and site log (30 October 2026)

Created `checks/m6b20-learning-review.md` and `checks/m6b20-claude-science-check.md`, both with empty Resolution sections. Combined unique findings: **2 blockers and 12 should-fix items**. Learning review: 2 blockers, 5 should-fix. Science review: 1 shared blocker, 7 additional should-fix. The blockers are the wrong field/carrier/allele-frequency model and the anonymous source-reading scene. Repairs are exact proposals for Claude; the design is unchanged.

The science check verifies dates, gene constructs, total carotenoids versus beta-carotene, food versus growing permissions, historical licensing, cotton adoption and resistance, both attempts and the exact 2017 syllabus point. No learner claim about a specific Aboriginal or Torres Strait Islander community was found. The current PhilRice FAQ reports the programme on hold and no later official reversal was found, but a complete court docket through 30 October 2026 was not obtained. Current executed licence terms, worldwide live patents and an exact 2026-season Bt share were not certified. Historical evidence and these limits are recorded in the science report.

The learning-only repair set is 5,800 characters, about 556.59 seconds, against the original 5,988 and 570.73 seconds. Recount the combined science and learning repairs after resolution, retaining the 5,500-character minimum and brief feedback. The existing rice and cotton reuse plates have visible fringe and need a separate edge-cleanup task; they were not changed here.

Delivered `public/assets/biology/m6-rice-plant-panicle-v1.png`, `m6-rice-bowls-white-golden-v1.png` and `m6-eggplant-fruit-v1.png`. The bowls are one side-by-side plate as the design requests. All are 2000-square RGBA, with at least 10% clear margins. Root and an independent reviewer inspected actual content, black/white/dark-board views, 250-pixel subject-height views and the bowl overlay. No material content or edge failures were found. Owner art acceptance remains pending.

Provenance and full prompts: `assets/brief115-provenance.json`. Native generations and QA: `assets/brief115-qa/`. Added six correction passages to `site-corrections-m6.md`, after rechecking seven exact quotations against the read-only HTML. Existing findings were cross-referenced; unsupported claims and the rejected feral-canola correction remain separate in `checks/brief115-site-additions.md`. Quote hashes: `assets/brief115-qa/site-verification.json`.

Local archive: `out/archives/brief115-plates-2026-10-30.zip`; checkpoint: `assets/brief115-media-checkpoint.json`. All 48 members passed ZIP CRC, hashes and an isolated restore. The archive is not uploaded. No design edits, speech, renders, published edits or commits. For Claude: resolve the findings, choose the combined repairs and recount before voicing; arrange the separate reuse-edge cleanup. Nothing else from this brief remains unwritten or unarchived. No question for the owner.

### Briefs 28ab and 116 to 121: hand-in (30 October 2026)

Brief 28ab: local C02 upload preflight and cumulative captions are checked, and the P02 description correction is prepared in `youtube/brief28ab-preflight.json` and `youtube/wave5-metadata-draft.json`. A final connection retry still returned no browser or native-app host. C02 was not uploaded and the published P02 description was not changed. No live URL or readback was invented.

Brief 116: `checks/codex-check-116.md` reports one remaining error: B04 equates no sweating with no water loss. P02, G01, C03a, C03b, B03, B05 and G03 each have zero reported errors. Delivered the three commissioned P02 plates, matched-apparatus QA, `assets/brief116-provenance.json` and its verified local media checkpoint.

Brief 119: `checks/codex-check-119.md` reports two errors: the absolute no-spread claim and Visual cue quotations that no longer match the revised narration. Rice and cotton alpha edges were cleaned without changing RGB, canvas or artwork placement. Original files, small-size background comparisons, provenance and a verified local archive are retained.

Brief 117: both requested reviews are written for every design. Exact reports are `checks/<key>-learning-review.md` and `checks/<key>-claude-science-check.md`; each has an empty Resolution section. Counts below are per review and overlap.

| Design | Learning: blockers / should fix | Science: blockers / should fix |
| --- | --- | --- |
| m8p03 | 1 / 2 | 1 / 3 |
| m8c04 | 1 / 2 | 1 / 2 |
| m8p04 | 0 / 3 | 0 / 2 |
| m8g02 | 1 / 2 | 1 / 2 |
| m8p02b | 1 / 3 | 1 / 3 |
| m8b06 | 1 / 2 | 1 / 2 |
| m8b07 | 0 / 3 | 0 / 4 |
| m8b08 | 1 / 3 | 1 / 3 |

Artwork, QA exceptions, source-check limits and checkpoint details: `assets/brief117-hand-in.md`, `assets/brief117-provenance.json`, `assets/brief117-qa/` and `assets/brief117-media-checkpoint.json`.

Brief 118: both requested reviews are written for every design. Exact reports are `checks/<key>-learning-review.md` and `checks/<key>-claude-science-check.md`; each has an empty Resolution section. Counts below are per review and overlap.

| Design | Learning: blockers / should fix | Science: blockers / should fix |
| --- | --- | --- |
| m8c05 | 0 / 3 | 0 / 3 |
| m8c06 | 0 / 3 | 0 / 5 |
| m8c08 | 1 / 1 | 1 / 2 |
| m8p05c | 1 / 3 | 1 / 4 |
| m8b09 | 3 / 2 | 3 / 3 |
| m8b10 | 1 / 4 | 1 / 4 |
| m8b11 | 0 / 5 | 0 / 6 |
| m8g01b | 0 / 4 | 0 / 4 |

Artwork, QA exceptions, source-check limits and checkpoint details: `assets/brief118-hand-in.md`, `assets/brief118-provenance.json`, `assets/brief118-qa/` and `assets/brief118-media-checkpoint.json`.

Brief 120: both requested reviews are written for every design. Exact reports are `checks/<key>-learning-review.md` and `checks/<key>-claude-science-check.md`; each has an empty Resolution section. Counts below are per review and overlap.

| Design | Learning: blockers / should fix | Science: blockers / should fix |
| --- | --- | --- |
| m8c09 | 1 / 2 | 1 / 3 |
| m8c10 | 0 / 3 | 1 / 5 |
| m8c11a | 0 / 2 | 1 / 2 |
| m8c11b | 0 / 2 | 1 / 2 |
| m8b12 | 2 / 2 | 2 / 3 |
| m8b13 | 0 / 3 | 0 / 3 |
| m8b14 | 1 / 3 | 1 / 4 |
| m8b15 | 0 / 3 | 0 / 3 |

Artwork, QA exceptions, source-check limits and checkpoint details: `assets/brief120-hand-in.md`, `assets/brief120-provenance.json`, `assets/brief120-qa/` and `assets/brief120-media-checkpoint.json`.

Brief 121: both requested reviews are written for every design. Exact reports are `checks/<key>-learning-review.md` and `checks/<key>-claude-science-check.md`; each has an empty Resolution section. Counts below are per review and overlap.

| Design | Learning: blockers / should fix | Science: blockers / should fix |
| --- | --- | --- |
| m8c12 | 0 / 2 | 1 / 1 |
| m8g03c | 0 / 2 | 1 / 1 |
| m8c13 | 0 / 2 | 0 / 3 |
| m8b16 | 0 / 2 | 0 / 2 |
| m8b17 | 0 / 2 | 0 / 2 |
| m8g02b | 1 / 2 | 1 / 2 |

Artwork, QA exceptions, source-check limits and checkpoint details: `assets/brief121-hand-in.md`, `assets/brief121-provenance.json`, `assets/brief121-qa/` and `assets/brief121-media-checkpoint.json`.

Added 59 confirmed site rows in this run: Brief 117 has 24, Brief 118 has 18, Brief 120 has seven and Brief 121 has ten. Exact excerpts were rechecked against the read-only HTML; no site file was edited. Cultural-review flags remain separate.

A final single-pass retry for the seven missing C10 IR compounds returned HTTP 403 for every catalog. No additional measured records were verified. Requests and access limits are saved in `assets/brief120-ir-followup.json`; the three-of-ten measured package remains unchanged.

Task utilities are kept under `assets/brief116-121-tools/`; older scripts/ references describe their original creation location. The review and utility snapshot has its own `assets/brief116-121-hand-in-checkpoint.json`.

Final integrity report: `checks/brief116-121-final-validation.json`. Local ZIPs are checked against their checkpoints, with CRC and member hashes. They have not been uploaded. Source reviews do not supply human listening, motion review or owner artwork acceptance. The exact measured IR/NMR records still missing from the spectroscopy checks remain recording blockers. No lesson design, narration, scene code, speech or video export was changed or produced. No commits or pushes.

For Claude: resolve the reports before recording. Restore the browser connection to finish Brief 28ab. No further owner question.


### Briefs 28ab and 116 to 121: continuation (31 October 2026)

Browser access still fails after the Chrome reset, a fresh control session and a direct Chrome tab attempt. No YouTube change was applied. All four prepared C02 input hashes still match. Seven NIST catalogs are now readable: no additional appropriate neat-liquid transmittance record was certified. The measured package remains three of ten; the two apparent liquid entries record real refractive index. Exact IR/NMR checks remain open. Nineteen author design revisions differ from the 30 October inputs; old reviews and validation remain historical. No design, narration or existing review was changed. Details: `assets/brief116-121-continuation-2026-10-31.md`. Additive ZIP/checkpoint verified; earlier archives preserved.

### Briefs 122 to 124 and 28ab: hand-in (31 October 2026)

Brief 122: `checks/codex-check-122.md` reports six new errors: chem-m8-c04 1, bio-m8-b08 1, bio-m8-b11 1, bio-m8-b14 1, bio-m8-b16 1 and bio-m8-g02 1. The other 24 designs each have zero new errors. Exact per-design counts and sources are in the report. Open items: 18 verified, two corrected, 11 cannot verify across 31 report lines. Exact spectra, calcium-control visibility, the exact NSW panel count, exact unrounded melanoma cases, exact shared male peak year and live-link verification remain open where named. Cultural, listening and release holds remain unchanged. Furnace art, QA and provenance: `assets/brief122-provenance.json`, `brief122-b14-provenance.json`, `brief122-g02b-provenance.json`, `brief122-qa/` and `brief122-media-checkpoint.json`. Local archive `out/archives/brief122-rev2-check-and-plates-2026-10-31.zip` has 21 members, CRC/member-hash checks passed, SHA256 `af3eb8105d7a4c640fb36e6f714d79a1a1586e12639a671a0cd8354975d42a18`. It was not uploaded. Site corrections log updated. No design or narration edits.

Brief 123: `checks/new-voice-programme-inventory-2026-10-31.md` completes all five sections. (1) Four programme tracks inventoried with official syllabus implementation, existing plans, code and plates. (2) Year 12 Maths has 317 source pages across four course choices; exact Extension crosswalk and a separate Standard 1 route remain unverified. (3) Visual gaps ranked against existing kits. (4) Untracked Physics work is 280 files, 40.22 MB; preservation and source/media separation recommended, nothing deleted or committed. (5) Ten opening Advanced candidates supplied, conditional on the owner's course choice. All 130 image-bank lesson hashes and 17 brief79 plate hashes still match.

Brief 124: `checks/google-tts-pilot-2026-10-31.md` completes the sourced facts stage only. `.env.local` has no Google AI Studio key, so the brief requires stopping before samples. Provisional audition: Gemini 3.8 Flash-Lite TTS with Charon, Iapetus and Sulafat. Estimated USD $0.082 for 6,000 characters under a nine-minute/1,500-input-token assumption at the quoted 2026 rates. No voice is listening-approved. Alignment median/p95, adapter, assembled pilot and caption fit are not measured or tested. No speech requests, package installation or lesson changes.

Brief 28ab: all four prepared C02 input hashes still match (`youtube/brief28ab-input-check-current-session.json`). Native inventory now works, but the browser host is unavailable and Chrome has no targetable window. Automatic approval review rejected launching Google Chrome: `Computer Use was not approved to use Google Chrome`. Exact access record: `youtube/brief28ab-access-current-session.json`. C02 was not uploaded; the published P02 description was not changed. No live readback or link was invented. Prepared metadata and correction remain in `youtube/brief28ab-preflight.json`.

Briefs 125 and 126 continue through their still/preview checks. Their source reports distinguish completed checks from the pending jobs behind the existing Skills S08 render lock. No full MP4 or commit is authorised by these build briefs.

### Briefs 125 and 126: first preview hand-in (31 October 2026)

B03 v1 is built at `out/prototypes/Explainer-bio-m8-b03-preview-v1/index.html`. Scoped typecheck and cue checks pass. All 59 planned frames were rendered and ten contact sheets inspected after repairs. P02 v1 is built at `out/prototypes/Explainer-chem-m8-p02-preview-v1/index.html`. Scoped typecheck and cue checks pass. Its repeated 61-frame round and eleven contact sheets pass the listed static checks; the final risk table fits at 24 px with its reading hold. Reports: `checks/codex-build-125.md` and `checks/codex-build-126.md`. These are voiced preview pages for Claude/owner review, not playback-speed or human-listening approval.

G01, B04 and B05 code is written and registered. Their final still/preview work is queued behind a new C03a full export that acquired the shared lock after B03/P02. A single G01 waiter is queued, followed by B04 and B05. No active export or lock has been interrupted. Root has asked the owner whether to leave C03a running or pause it for the remaining preview checks; until an explicit answer, the export continues.

The 8 GB PC exhausted committed memory with the catalogue-wide tooling. The documented direct-config fallback uses the same shared engine and Player, loads one lesson and reuses one browser. P02's exact config-adjusted playback lesson is saved for future caption export. G01 also has two 60-frame reading holds and an exact playback lesson; both must use those adjusted timings for captions. No recorded text or alignment changed. No new full MP4 was rendered by this brief work and no commit was made.

### Brief 122: source follow-up (31 October 2026)

Final open-item totals are 21 verified, two corrected and eight cannot verify across the same 31 rows. The six design errors are unchanged. Government Cancer Australia data verifies B09's exact 17,443 projected 2025 cases. A university 0.1 mol/L calcium chloride wire-loop procedure plus the RSC colour reference resolves P03's source request. Public NIST plots verify C09's substantial m/z 15 fragment (about 47% of base, with 94:100 and 96:94 approximate plot-read heights), and G03's ketone base peak 43 and molecular ion 86 (about 21%). No exact raw heights, uninspected energy condition or missing IR/NMR record is invented. C09's separate SDBS cross-checks and the other named spectrum holds remain.

Updated report: `checks/codex-check-122.md`. Additive evidence/checkpoints: `assets/brief122-source-followup-2026-10-31.json`, `brief122-media-checkpoint-followup1.json`, `brief122-public-plot-followup.json` and `brief122-media-checkpoint-followup2.json`. Follow-up archives: `out/archives/brief122-source-followup-2026-10-31.zip` (SHA256 `6d6bd025dd337156ed57dba314655fe78ab2c5bdaf085885235ea016f2b501ee`) and `out/archives/brief122-public-plots-followup-2026-10-31.zip` (SHA256 `4f4be55405787891db6f1d11e42193749a6f61e42da6fe478876e2607b2f1862`). CRC and every member hash passed. Both earlier archives and their checkpoints are preserved. No remote upload or design edit.


## Briefs 125 and 126: five previews ready (1 November 2026)

B03, B04, B05, P02 and G01 now have v1 browser previews in `out/prototypes/Explainer-<lesson-id>-preview-v1/index.html`. B03's axis-label refresh is included; its earlier unapproved bundle is preserved. Scoped TypeScript and cue checks pass for all five. Several frames per scene and every response countdown were inspected, findings repaired and affected stills checked again. Reports: `checks/codex-build-125.md` and `checks/codex-build-126.md`, including contact sheets, exact preview paths, timing changes and design departures. The scoped one-config fallback was used after catalogue-wide tooling exhausted this 8 GB machine's committed memory; it retains the shared ExplainerVideo engine and Player UI.

These are ready for Claude/owner preview review. Stills do not establish continuous motion, human listening, caption fit during playback or learning/release approval. No full MP4 export or commit was made for these briefs. Use the config-adjusted `playback-lesson.json` when generating future cumulative captions, especially P02 and G01 whose interior reading holds shift later scenes. The final B05 batch retained one owned render lease across repairs and packaging, then released it after its heavy processes exited.

Briefs 122 and 123 are handed in in the reports above. Brief 124 remains at its required facts-stage stop because the Google key is missing. Brief 28ab remains unapplied because the browser host is unavailable and automatic approval review rejected opening Google Chrome. No upload or live YouTube description change occurred.


### Briefs 127, 124 and 28ab: hand-in (1 November 2026)

Brief 127, G02 Revision 5: **0 blockers, 2 unique should fix**. `checks/m5g02-learning-review.md` has 2 should fix; `checks/m5g02-claude-science-check.md` has 1, shared with the learning review. Correct the new "no reaction" line to "no net reaction" and remove the unexplained equal-gas-count learner tag. Numbers, full question givens and all three official syllabus quotes pass. No G02 site error found.

Brief 127, P01 Revision 1: **0 blockers, 6 unique should fix**. `checks/m8p01b-learning-review.md` and `checks/m8p01b-claude-science-check.md` each have 3. Exact repairs and length-neutral cuts are in the reports. Numbers and syllabus wording pass. No stricter public school-science temperature cap was found; detailed NSW CSIS instructions require staff access, and school plumbing outlet limits do not establish a practical preparation limit. The 40-degree fallback is recalculated. `site-corrections-m8.md` adds the verified L02 insulation overclaim and missing-practical coverage note, preserving earlier entries.

The two apparatus plates are `public/assets/biology/m8-flask-bare-v1.png` and `public/assets/biology/m8-flask-wrapped-v1.png`. Built-in imagegen prompts, native files, hashes and processing are recorded in `assets/brief127-provenance.json` and `assets/brief127-qa/`. Both are 2000 px RGBA with at least 10 percent clear margin. Dark/black/white 300 and 600 px views and the 50 percent overlay were inspected. Shared apparatus aligns visually, with small generated texture differences. Claude and owner artwork acceptance remain pending. Local archive `out/archives/brief127-reviews-and-flasks-2026-11-01.zip`: 15 members, 4,588,808 bytes, SHA256 `fb65d34e035d1383654470502f54f2e7da7b7bbbcfa4662691fd7c080e72f2b5`; CRC and every member verified. `assets/brief127-media-checkpoint.json` records it. Not uploaded.

Brief 124: `checks/google-tts-pilot-2026-10-31.md` has a 1 November source/key recheck. Step 1 is complete. No Google AI Studio key is present, so the brief requires stopping before samples. Provisional model is Gemini 3.8 Flash-Lite TTS; Charon, Iapetus and Sulafat are audition candidates, not a listening-approved choice. Estimated cost for a 6,000-character, nine-minute lesson is USD $0.082 under the report's token assumptions. Alignment median/p95 remain unmeasured; adapter, assembled pilot and caption fit remain untested. No speech or installation occurred.

Brief 28ab: MP4, cumulative captions, design and measured lesson hashes still match the prepared metadata. Current evidence is appended to `youtube/brief28ab-input-check-current-session.json` and `youtube/brief28ab-access-current-session.json`. C02 was not uploaded, P02's description was not changed and no playlist readback is claimed. Browser inventory was empty and its host unavailable. Computer Use then stopped because it could not determine Chrome's current URL confidently enough to enforce policy; no UI input followed that stop. Prepared metadata and the correction paragraph remain available in `youtube/brief28ab-preflight.json`.

No selected design, recorded text, scene code, lesson folder, public site HTML or published YouTube item was changed by this work. No speech, render, commit or push. Claude must resolve review findings before recording; exact voiced review and human listening remain pending. Further work on Brief 124 needs the Google key; Brief 28ab needs a working browser connection.

### Briefs 127, 128, 124, 28ab and 28ac: continuation (1 November 2026)

Brief 127 is verified complete and current: both design hashes, all 15 artifact hashes, and archive size/hash/count/CRC pass. G02 has 0 blockers and 2 unique should fix; P01 has 0 blockers and 6 unique should fix. No regeneration or review edits.

Brief 124 remains at its facts-stage stop. The owner confirms no Google AI Studio key is available yet. No speech or alignment work was run.

Briefs 28ab/28ac: C02's four prepared input hashes and all 15 new MP4 hashes pass. The 15 cumulative caption files match the exporter and avoid response holds. Prepared metadata, chapters, source checks and upload requirements are in youtube/wave6-metadata-draft.json and youtube/brief28ac-preflight.json. youtube/wave6-uploads.json explicitly records zero published videos and 15 pending. Browser inventory and the signed-in HSCScience Studio initially worked, then DOM actions repeatedly timed out. A native attempt placed P02's correction in the editor but Save stayed disabled; reload restored its original saved description. No persisted YouTube change or playlist readback is claimed. Memory exhaustion also caused small shell processes to fail. Existing render jobs were preserved.

Brief 128 research and preparation is in progress. Final hand-in follows after validation.

Brief 128 final hand-in: all four sections complete. (1) programme/syllabus/maths-advanced-2024-y12-crosswalk.json and programme/maths-a12-crosswalk.md map all 158 official points across seven focus areas to 59 read-only site lessons: 133 covered, 19 partial, 6 missing. Exact official HTML/MathML and actual CMS IDs are preserved; published content-point codes are absent. (2) programme/maths-a12-route-inputs.json supplies all ten entries, exact source sections, Year11 prerequisites and boundaries. Revise d01 to extend the Year11 exponential rule; d06-d08 extend known rules; use Applications L06 for d09 and L09 for d10. (3) pre-design/maths-a12/math-a12-d01.md through d10.md retain site examples and recalculations, plus 20 original practice questions with worked answers checked by independent numerical/identity/sign tests. site-corrections-maths-a12.md records 20 verified findings. (4) checks/maths-kit-needs-d01-d10.md maps all four programme kit components and names missing capabilities. JSON parsing, distinct IDs, source section references and copy checks pass. No site/design/narration/code edits, speech, renders or commits. Claude owns route/design decisions; research coverage does not approve a future video.

### Brief 28ab retry: complete (1 November 2026)

Published Chemistry M6 C02: https://youtu.be/C12nlyE-8zY. Exact approved MP4 hash rechecked. Title, description, cumulative chapters, Education, not Made for Kids, AI disclosure Yes, English (Australia), published cumulative captions and generated thumbnail 2 verified. Copyright and Community Guidelines checks found no issues. Final notes occupy the end, so no end screen was added. Module6 Chemistry manual playlist readback has 32 videos, with C02 fourth overall after Skills S01, S02 and C01, before C03. Complete readback: youtube/brief28ab-playlist-readback.json. Biology M7 P02 description correction saved and verified present after reload: https://youtu.be/sGl2I3C9TyY. Title, video, captions and playlist preserved. wave5-uploads.json updated for both. Publication screenshot saved in this chat's outputs/c02-published.png. Brief28ac uploads are in progress separately.

### Brief 28ac retry: complete (1 November 2026)

All 15 videos are Public. Exact prepared titles, descriptions, MP4 hashes and caption references match all 15 final records. Cumulative English (Australia) caption tracks are published, audience is not Made for Kids, AI disclosure is Yes, category Education, and YouTube checks found no issues. S08 uses v2 only. Useful generated thumbnails were visually checked; G03 and G04 use frame1 because frame2 showed near-empty response holds. End screens were skipped where final key notes occupy the frame. No daily upload limit was encountered.

- chem-m7-p04: https://youtu.be/JMmrUJxoaQE
- chem-m7-p05: https://youtu.be/WjCfarquFJ8
- chem-m7-p06: https://youtu.be/3gQQ-hasiw8
- chem-m7-g03: https://youtu.be/dMjkM6_NBY4
- chem-m7-c15: https://youtu.be/4ilaHAMeqiU
- chem-m7-g04: https://youtu.be/R5VJ8EsGEp4
- bio-m7-p05: https://youtu.be/ipZfLvpuNBM
- skills-s06: https://youtu.be/fKUEvH4i7O0
- skills-s08: https://youtu.be/xO7HoISN8-k
- chem-m8-c01: https://youtu.be/ahwV_6MQqHU
- chem-m8-c02: https://youtu.be/irU2BTyFdEg
- chem-m8-c03a: https://youtu.be/OUjLwWRUiNM
- chem-m8-c03b: https://youtu.be/JIej-SISftM
- bio-m8-b01: https://youtu.be/JK2yJHP9x2c
- bio-m8-b02: https://youtu.be/D8-LzqJ6ZxY

Manual playlist readbacks: Module7 Chemistry 28 entries, Biology18; Skills8 with S06 sixth/S07 seventh/S08 eighth; new Module8 Chemistry4 ordered C01/C02/C03a/C03b and Biology2 ordered B01/B02. Readback files are linked in youtube/wave6-uploads.json. Existing subject playlist entries are retained. The later Module8 skills interleaving remains for a later brief, as instructed.

Brief28ab was completed above: C02 public and P02 description correction saved/read back. Combined retry totals:16 new public uploads, one description correction and six playlist readbacks. Brief124 remains at its research-stage stop because the owner has no Google AI Studio key. No new speech, renders, commits or pushes.

### Briefs 129 and 130: hand-in (1 November 2026)

Brief 129 complete, including the d01 addendum. `checks/codex-build-129.md` documents the component APIs, mathematical checks and limitations. The reusable kit supports parameter animation and ghost curves, carried squash/slide/stretch/mirror transforms, same-axis gradient dots and labelled tangent triangles alongside the calculus components. Silent pilot: `out/explainer/maths-calculus-kit-pilot/maths-calculus-kit-pilot.mp4`, 72 seconds, 2160 frames at 30 fps, 1920 x 1080, no audio, full decode passed. All 32 desktop/phone-landscape stills and input hashes refreshed. Scoped TypeScript and 11,424 numerical assertions pass. Root independently inspected the transform formulas and a phone mirror still. Shared render lock, temporary bundle and owned browser cleaned up. Claude's exact playback review remains pending; stills and code checks do not establish motion approval.

Brief 130 complete. Reports: `checks/m-a12d01-learning-review.md`, `checks/m-a12d01-claude-science-check.md`, `checks/codex-check-130.md`. Maths has 0 blockers and 3 unique should-fix findings: slide/derivative wording, horizontal-scale scope, and negative-a positivity scope. Learning review reports 2 overlapping should-fix findings. Official 2024 maths source HTML was freshly checked against both codenames. All worked values and answers recalculated; CAS unavailable, hand derivation and numerical checks recorded honestly. Chemistry has one contradictory author-note destination for moved-out content; Biology has one stale hook cue. Neither has a new learner-science error. Site log `site-corrections-maths-a12.md` adds the cooling qualification and notation suggestion without duplicating the existing factorisation finding. Claude owns design repairs. No lesson designs, narration, commits or pushes changed.

### Briefs 28ab and 28ac: expanded twenty-video hand-in (1 November 2026)

Browser connection worked. Brief 28ab was already complete: C02 https://youtu.be/C12nlyE-8zY reverified saved Public, v2, HD complete and no notices. Biology M7 P02 correction reverified saved verbatim. No duplicate upload or unnecessary edit.

Brief 28ac now has all 20 videos Public. Preserved the prior 15 and published the five additions:
- chem-m8-p02: https://youtu.be/6b3_H8Cawfg
- chem-m8-g01: https://youtu.be/RtYZC9fRdVI
- bio-m8-b03: https://youtu.be/KkEiSSPJEDU
- bio-m8-b04: https://youtu.be/N5F5wZIZQXY
- bio-m8-b05: https://youtu.be/kWLPJqEJTvg

All five exact MP4 hashes passed. Title/description and cumulative English (Australia) captions entered; Education, not Made for Kids, AI disclosure Yes, HD complete and notices none verified. Generated thumbnail 2 inspected for each. No end screen because final notes occupy the frame. Root independently checked all five chapter lists against cumulative playback scene starts, total timeline frames and small input hashes. P02 and G01 use the playback timeline including interior quiet holds. Evidence: `youtube/wave6-last5-root-check.json`.

Final Module8 Chemistry Public/Manual playlist has six entries in C01,C02,P02,G01,C03a,C03b order. Biology Public/Manual has five entries B01,B02,B03,B04,B05, reloaded after B05 publication. Prior15 verified through live playlists: Module7 Chemistry28, Biology18, Skills8 with S06 sixth and S08 eighth, and the existing M8 entries. Final readbacks: `youtube/brief28ac-m8-chem-final-readback.json`, `youtube/brief28ac-m8-bio-final-readback.json`, `youtube/brief28ac-existing-playlists-recheck.json`. `youtube/wave6-uploads.json` now has20 distinct Public records and no pending videos. Draft/progress: `youtube/wave6-last5-metadata-draft.json`, `youtube/wave6-last5-progress.json`.

No speech, lesson design edits, commits or pushes. Optional disk cleanup skipped because the user's deletion instruction was cut off.

### Brief 131: lesson-review hand-in (1 November 2026)

D02 Revision 1: `checks/m-a12d02-learning-review.md` and `checks/m-a12d02-claude-science-check.md` report 0 blockers and 3 unique should-fix findings. Two overlap: exact equals signs with rounded constants, and the horizontal-scale memory summary's missing a=1 exception. The third is the attempt2 card revealing the sign before the response hold. Repairs replace existing copy and add no time. Handoff relabelling to ln x is valid and gives no derivative answer. Root decisions retained. Official syllabus source freshly verified; numerical answers pass.

D01 Revision 2: `checks/codex-check-131.md` reports one grouped residual screen-summary error in scene6. The main brief130 repairs are correct, but the strip still says squash/no change without the repaired scope. No stranded cue found. Narration 6349 characters including scene joining spaces, within5500 to6800; estimated about570 seconds, not measured audio. `site-corrections-maths-a12.md` adds confirmed d02 items22 to24 and a teaching note. Claude owns design repairs. No design edits, speech or commits.

Brief 131 kit hand-in: `checks/codex-build-131.md`. Added held secant cues with a safe analytic-tangent endpoint, point-linked readout panels with optional gradient/height ratio, and a controlled numeric dial. Fixed all three `checks/root-review-129.md` issues: remote readout placement, crowded small-panel ticks/caption, and the entering algebra row's lone equals sign. Root's independent code review caught the missing endpoint transition; repaired and checked along with finite hold values. Scoped TypeScript and11447 numerical assertions pass. All32 desktop/phone-landscape stills refreshed serially under the shared lock. `out/explainer/maths-calculus-kit-pilot/brief131-stills-manifest.json` pins current source/stills separately from the earlier129 MP4. Root inspected the phone mirror still: linked panel, ratio, dial and clear ticks/caption visible. No new MP4 requested or made; exact decimal-ratio lesson views and playback approval remain for the lesson build. Browser, temporary bundle and render lock cleaned up. No designs, speech, commits or pushes changed.

### Brief 132: lesson-review hand-in (1 November 2026)

D03 Revision 1: `checks/m-a12d03-learning-review.md` and `checks/m-a12d03-claude-science-check.md` report 0 blockers and 2 unique should-fix findings, shared across the reports: general ln(kx) slide direction must allow down/no shift for 0<k<1/k=1, and scene8's drawing restriction must apply to ln x and its derivative rather than erase the e^x reference. Root decisions retained. Symbolic and numerical checks pass. Official d03 and d02 syllabus source HTML freshly verified. Added exact official Year11 reflection point `ci9eb0125c`, including source HTML, only to d03's entryKnowledge array in `docs/production/maths-a12-video-route.json`; rest of route structurally unchanged.

D02 Revision 2: `checks/codex-check-132.md` reports 2 remaining visual/build errors: scene6's rounded coefficient chip/equality tag, and scene9's old run1 triangle despite the selected run0.5 repair. One stale author note still claims the attempt gives the sign. Main identities, memory exception, card wording and speech cues are repaired. Narration6343 characters including joining spaces, estimated569.9 seconds. D03 about571 seconds remains an estimate, not measured audio. Site log `site-corrections-maths-a12.md` adds items25 to28 and a teaching-proof note. No lesson designs, speech or commits changed. Claude owns repairs and exact voiced review.

Brief 132 kit hand-in: `checks/codex-build-132.md`. Added the equal-unit square `ReflectionLayer`, using one parametric map for curve, point, tangent and coloured triangle legs, with labels swapping at the endpoint. Added custom rows to `ReadoutPanel`. Root independently checked the coordinate/tangent formulas and inspected the final phone still. Generic labels and final readout callbacks avoid hardcoding the exponential identity into other curves. Scoped TypeScript and 12,081 numerical assertions pass. Twelve targeted stills refreshed; separate silent `out/explainer/maths-calculus-kit-pilot/brief132-reflection-pilot.mp4` has 270 frames, 9 seconds, 1920 x 1080, no audio, full decode passed. `brief132-manifest.json` and `brief132-media-check.json` pin current evidence. Earlier 72-second MP4 preserved; the full updated source composition is 81 seconds. Claude must judge the short reflection sample at playback speed; still inspection is not motion approval. Browser, bundle and render lock cleaned up. No speech, lesson design edits or commits.

### Brief 133: complete hand-in (1 November 2026)

Reviews: `checks/m-a12d04-learning-review.md`, `checks/m-a12d04-claude-science-check.md`, `checks/codex-check-133.md`. D04 has 0 blockers and 0 should-fix findings; D03 Revision2 has 0 remaining errors. Fresh official source HTML matches both syllabus codenames. Symbolic and numeric checks pass. D04 about552 seconds, D03 about572 seconds; these are estimates, not exact voiced approval. Site log items29 to31 added without duplicates.

Kit: `checks/codex-build-133.md`. Dial exclusion mark and guarded parameter limits added. Fold controls hide point markers, labels, tangents and readouts near zero and restore them afterwards. Root independently checked the guards and requested endpoint marker gating, now repaired. Scoped TypeScript and12,745 numerical assertions pass. Twelve final stills refreshed. Separate `out/explainer/maths-calculus-kit-pilot/brief133-dial-fold-pilot.mp4`:330 frames,11 seconds,1920 x1080,no audio,full decode pass. `brief133-manifest.json` pins current evidence. Earlier media preserved. Shared render lock,browser,bundle cleaned. Claude playback approval remains pending. No designs,speech or commits. Brief133 finished before brief134 starts.

### Brief134: complete sequential hand-in (1 November2026)

D05: `checks/m-a12d05-learning-review.md` and `checks/m-a12d05-claude-science-check.md`:0 blockers,0 should-fix,0 optional. Narration5664/5679 characters without/with scene joins,about520 seconds. Graph/circle/radian reasoning, worked values and attempts pass. Official outcome MAV-12-04 is valid; the site log distinguishes it from unsupported dotpoint numbering.

D06: `checks/m-a12d06-learning-review.md` and `checks/m-a12d06-claude-science-check.md`:0 blockers,1 unique should-fix,0 optional. Narration5602/5616 characters,about512 seconds with90 seconds holds. Repair the memory sentence that infers positive input from the reciprocal rather than from ln's domain. Root decision5 settled: fresh Advanced trig content has no double-angle identity point; the site's simplification is true but optional, not a derivative error.

D07: `checks/m-a12d07-learning-review.md` and `checks/m-a12d07-claude-science-check.md`:0 blockers,0 should-fix,1 optional author-only precision correction. Narration5679/5693 characters,about525 seconds with97 seconds holds. Product contributions, sign cancellation, chain factors and attempts pass; update the six-decimal rectangle author list if reused.

D08: `checks/m-a12d08-learning-review.md` and `checks/m-a12d08-claude-science-check.md`:0 blockers,2 unique should-fix,0 optional. Narration5576/5589 characters,about517 seconds with97 seconds holds. Scope push/pull to the positive example; reversing numerator terms negates the derivative and leaves zero unchanged. Domains, cancellation and attempt results pass.

D09: `checks/m-a12d09-learning-review.md` and `checks/m-a12d09-claude-science-check.md`:0 blockers,1 should-fix,0 optional. Narration6222/6237 characters,about562 seconds. Maths/sign classifications pass. The opening must use d08's actual number-line handoff rather than the older assumed graph; same approved quotient, no speech change.

D10: `checks/m-a12d10-learning-review.md` and `checks/m-a12d10-claude-science-check.md`:0 blockers,2 unique should-fix,0 optional. Narration5616/5629 characters,about513 seconds with90 seconds holds. Include all interior nondifferentiable candidates, not only sharp corners; replace stale built-still instructions with root's chosen coded motifs. Ceiling/floor and all candidate values/attempts pass. Local/global endpoint convention is clarified rather than logging an unconditional falsehood.

All six reviewed one at a time, no sub-agents. Fresh official source HTML, counts and hashes recorded; symbolic/numeric derivatives checked using existing SymPy. Site log items32-47 and convention/method notes added without repeating existing defects. Each proposed learner repair replaces copy or names its cut. No design edits,speech,renders or commits for134. Actual voiced timing, playback and human listening remain pending. Brief134 complete before135 starts.

### Brief135: complete hand-in (1 November2026)

`checks/codex-build-135.md` records all ten reusable parts, APIs, examples and limits. Added unit-circle inset, shared-shift paired tracer/comparison, radian-degree tick swap, rate-chain strips, positive-input shading, product rectangle, movable exclusion strip, progressive signs/test rows, symbolic/rejected candidate table and ten coded strand motifs. Existing calculus kit APIs/media preserved. No sub-agents used;135 began after134's hand-in.

Scoped TypeScript passes. New772 numerical assertions and invalid-input regressions pass; earlier12,745 assertions and2,774 plotted values still pass. Forty desktop/phone-landscape stills inspected across the parts. Separate `out/explainer/maths-strand-kit-pilot/brief135-motion-sample.mp4`:480frames,16seconds,1920x1080,silent,full decode passed. One sample contains parts2,3,6,8 in motion. `brief135-manifest.json` verifies6 source hashes and41 artifact hashes; `media-check.json` records video verification. Domain-strip layout fixed and final views verified. Shared lock,owned browser and temporary bundle cleaned;no server left. Claude must judge the exact sample at playback speed; no motion,voiced or human-listening approval claimed.

Briefs133,134,135 are finished in the requested order. No lesson designs,speech,commits or pushes changed. Review findings need Claude's repairs; exact voiced timing/listening remain later gates.

### Brief136: complete hand-in (1 November2026)

1. Whole-course outline: `programme/maths-a12-course-outline.json` and `.md` propose67 videos including d01-d10 and optional practice; all 158 fresh official Year12 content points have an owner,none unowned. Strand-order reasons and source gaps are explicit. This is Claude's route input,not a canonical route or teaching approval.
2. Next preparation: `programme/maths-a12-route-inputs-2.json` and14 packs `pre-design/maths-a12/math-a12-d11.md` throughd19 andi01 throughi05,with exact syllabus HTML/IDs,actual source data-step/example IDs and hashes,entry knowledge,boundaries,handoffs,recalculated original site numbers and28 original candidate questions/answers. SymPy derivative checks and numeric/substitution checks pass. Source gaps are explicit. Site log48-50 adds two confirmed source issues and corrects the earlier reciprocal-trig coverage overstatement without changing the historical crosswalk.
3. Kit needs: `checks/maths-kit-needs-next-strands.md` maps every prepared video to existing parts and new needs; later signed-area,accumulation,probability and cash-flow requirements named. Validation in `work/brief136/validation.json` confirms67 unique IDs,158 point owners,14 packs,28 questions and source hashes. No designs,product code,speech,renders or commits. Brief136 complete before137 starts.

### Brief 137: complete hand-in (1 November 2026)

1. Ledger: `programme/syllabus/phys-new-y11.json` records all 168 official Year 11 Physics (2025) points across FA0 to FA3, exact CMS codenames, wording, source HTML/URLs and retrieval date.
2. Map: `programme/phys-y11-video-map.md` and `programme/phys-y11-route-inputs.json` map all 79 site lessons to 101 proposed videos, with every point assigned, source sections/hashes, entry knowledge, boundaries and handoffs; named investigations are separate, and the old kit is drawing reuse only. Claude must finalise WS playlist placement and the route.
3. Packs: `claude-pm/pre-design/phys-y11/phys-y11-fa1-v01.md` to `v12.md` contain exact site examples, recalculations, misconceptions, drawing needs and 24 worked candidate questions; `claude-pm/site-corrections-phys-y11.md` records seven confirmed passages and separate precision notes. Validation: `work/brief137/validation.json`. No designs, product code, speech, renders, commits or subagents. Complete before starting brief 138.

### Brief 138: complete hand-in (1 November 2026)

chem-m5-g02b Revision 1: 0 blockers, 4 unique should fix, 0 optional; 5664 narration characters including scene joins, about 573 s (root accepted). Reports: `checks/m5g02b-learning-review.md` and `checks/m5g02b-claude-science-check.md`. Conditions, graph inference and rounded build data need resolution; G02 Revision 8 part-two wording matches.

bio-y11-fa1-v01 Revision 1: 0 blocker, 4 unique should fix, 0 optional; 5,986 narration characters including scene joins, about 568 s. Reports: `checks/y11b-v01-learning-review.md` and `checks/y11b-v01-science-check.md`. Repairs are replacements or name cuts; no added duration.

bio-y11-fa1-v02 Revision 1: 0 blocker, 2 unique should fix, 0 optional; 5,963 narration characters including scene joins, about 565 s. Reports: `checks/y11b-v02-learning-review.md` and `checks/y11b-v02-science-check.md`. Repairs are replacements or name cuts; no added duration.

bio-y11-fa1-v03 Revision 1: 0 blocker, 3 unique should fix, 0 optional; 5,799 narration characters including scene joins, about 563 s. Reports: `checks/y11b-v03-learning-review.md` and `checks/y11b-v03-science-check.md`. Repairs are replacements or name cuts; no added duration.

bio-y11-fa1-v04 Revision 1: 0 blocker, 3 unique should fix, 0 optional; 5,850 narration characters including scene joins, about 564 s. Reports: `checks/y11b-v04-learning-review.md` and `checks/y11b-v04-science-check.md`. Repairs are replacements or name cuts; no added duration.

bio-y11-fa1-v05 Revision 1: 1 blocker, 1 unique should fix, 0 optional; 5,860 narration characters including scene joins, about 565 s. Reports: `checks/y11b-v05-learning-review.md` and `checks/y11b-v05-science-check.md`. Fresh cheek sampling is held against the public NSW CSIS restriction; use the prepared-slide fallback. Current 2026 staff-only biological-material policy was not accessible.

bio-y11-fa1-v06 Revision 1: 0 blocker, 3 unique should fix, 0 optional; 5,728 narration characters including scene joins, about 552 s. Reports: `checks/y11b-v06-learning-review.md` and `checks/y11b-v06-science-check.md`. Repairs are replacements or name cuts; no added duration.

Site: `site-corrections-bio-y11.md` contains ten verified exact-text rows, a syllabus-method coverage gap and explicit rejected/unverified author suggestions. Fresh official FA1 HTML and numerical/source evidence: `work/brief138/`. All seven designs were reviewed sequentially and are unchanged. No subagents, speech, renders or commits. Complete before starting brief 139.

### Brief 139: candidates prepared, precise cleanup awaiting user choice (1 November 2026)

After brief 138 was handed in, generated all 20 new plate candidates and attempted the two requested alpha repairs, without subagents, designs, speech or commits. `assets/brief139-manifest.json` records prompts, references, native dimensions, alpha and hashes; `assets/brief139-qa/` contains 66 QA composites; `assets/brief139-inspection.md` lists failed conditions. Per-design provenance files are written. Both old assets remain untouched because image-tool repairs changed interiors/geometry. Exact onion/cheek counts, coloured fringe, requested canvas fit, crucible haze and lysosome registration remain. Asked the user whether local pixel editing may be used; no answer yet. Brief 139 is not marked complete.

### Brief 139 complete: final plates and alpha repairs (1 November 2026)

Supersedes the earlier pending-cleanup entry. User authorised local pixel editing. Delivered 20 final plates and two alpha-only repairs; exact 15 onion lengths, eight equivalent cheek widths and ten bacteria are verified. Bubble registration, lysosome alignment, common glass/grid scale, transparent backgrounds, canvases and final hashes pass local QA. Both repaired originals preserve all RGB and interior pixels; original neuron.png is preserved with a new sibling replacement. See assets/brief139-manifest.json, brief139-validation.json, brief139-inspection.md and brief139-qa/final/. All seven provenance files updated. No design edits, speech, renders or commits. Briefs 136, 137, 138 and 139 completed sequentially.

### Brief 140: partial error check (2 November 2026)

In progress. `checks/y11b-v01-error-check.md` records the remaining cheek-sampling instruction as a blocker and an outdated author note. `checks/y11b-v06-error-check.md` records the neuron asset reference, the illustration labelled as a photomicrograph, and the handoff frame issue. The seven narration counts match the Revision 2 per-scene totals, with no em dashes in the designs. The remaining checks and reports are not yet complete. Briefs 141 to 143 remain queued in that order.

### Brief 140: error check hand-in (2 November 2026)

- m5g02b: 0 blockers, 2 should fix.
- y11b-v01: 1 blocker, 2 should fix.
- y11b-v02: 0 blockers, 1 should fix.
- y11b-v03: 0 blockers, 2 should fix.
- y11b-v04: 0 blockers, 2 should fix.
- y11b-v05: 0 blockers, 2 should fix.
- y11b-v06: 0 blockers, 2 should fix.

Reports: `checks/m5g02b-error-check.md` and `checks/y11b-v01-error-check.md` through `checks/y11b-v06-error-check.md`. Root decision 10 and the site correction contain the cheek-tissue restriction. Handoff frames need a final-notes decision; actual playback is not yet available. No design edits, speech, renders or commits.

Correction to brief 140 counts: y11b-v04 has 3 should-fix findings (feedback still presents transfer as established); y11b-v06 has 3 (attempt 2 speech omits the printed-size condition). See the reports.

### Brief 141 complete (2 November 2026)

- phys-y11-fa1-v13: pack written at `pre-design/phys-y11/phys-y11-fa1-v13.md`; route refinement proposed; no new site correction for this source.
- phys-y11-fa1-v14: pack written at `pre-design/phys-y11/phys-y11-fa1-v14.md`; route refinement proposed; no new site correction for this source.
- phys-y11-fa1-v15: pack written at `pre-design/phys-y11/phys-y11-fa1-v15.md`; route refinement proposed; no new site correction for this source.
- phys-y11-fa1-v16: pack written at `pre-design/phys-y11/phys-y11-fa1-v16.md`; route refinement proposed; no new site correction for this source.
- phys-y11-fa1-v17: pack written at `pre-design/phys-y11/phys-y11-fa1-v17.md`; route refinement proposed; site correction added.
- phys-y11-fa1-v18: pack written at `pre-design/phys-y11/phys-y11-fa1-v18.md`; route refinement proposed; no new site correction for this source.
- phys-y11-fa1-v19: pack written at `pre-design/phys-y11/phys-y11-fa1-v19.md`; route refinement proposed; no new site correction for this source.
- phys-y11-fa1-v20: pack written at `pre-design/phys-y11/phys-y11-fa1-v20.md`; route refinement proposed; no new site correction for this source.
- phys-y11-fa1-v21: pack written at `pre-design/phys-y11/phys-y11-fa1-v21.md`; route refinement proposed; no new site correction for this source.
- phys-y11-fa1-v22: pack written at `pre-design/phys-y11/phys-y11-fa1-v22.md`; route refinement proposed; site correction added.
- phys-y11-fa1-v23: pack written at `pre-design/phys-y11/phys-y11-fa1-v23.md`; route refinement proposed; site correction added.
- phys-y11-fa1-v24: pack written at `pre-design/phys-y11/phys-y11-fa1-v24.md`; route refinement proposed; site correction added.

Four corrections in `site-corrections-phys-y11.md`; calculations and validation in `work/brief141/`. Investigation data are illustrative, not observed. No designs, code, speech, renders or commits.

### Brief 142: d11 review in progress (2 November 2026)

`checks/m-a12d11-learning-review.md` and `checks/m-a12d11-claude-science-check.md`: 0 blockers, 2 unique should fix, 0 optional; 5,928 characters, about 538 s. Corrected site log item 50. The remaining thirteen reviews are not yet complete.

Brief 142 d12: `checks/m-a12d12-learning-review.md` and `checks/m-a12d12-claude-science-check.md`: 0 blockers, 3 unique should fix, 0 optional; 5,693 characters, about 516 s. Official Year 11 placement of all co-function identities remains unconfirmed.

Brief 142 d13: `checks/m-a12d13-learning-review.md` and `checks/m-a12d13-claude-science-check.md`: 0 blockers, 3 unique should fix, 0 optional; 5,527 characters, about 506 s. Site corrections added. The root's scene 11 claim appears in d13, not d11.

Brief 142 d14: `checks/m-a12d14-learning-review.md` and `checks/m-a12d14-claude-science-check.md`: 0 blockers, 4 unique should fix, 0 optional; 5,643 characters, about 516 s. No new site correction found in the sections used.

Brief 142 d15: `checks/m-a12d15-learning-review.md` and `checks/m-a12d15-claude-science-check.md`: 0 blockers, 2 unique should fix, 0 optional; 6,070 characters, about 549 s. Site log updated; source already specifies the non-vertical tangent, so the proposed missing-qualifier finding was rejected.

Brief 142 d16: `checks/m-a12d16-learning-review.md` and `checks/m-a12d16-claude-science-check.md`: 0 blockers, 3 unique should fix, 0 optional; 5,643 characters, about 517 s. Site log updated. Root decision 10 confirmed for the stated examples.

Brief 142 d17: `checks/m-a12d17-learning-review.md` and `checks/m-a12d17-claude-science-check.md`: 0 blockers, 3 unique should fix, 0 optional; 6,280 characters, about 567 s. Site findings logged; use the listed cuts in order if speech must grow.

Brief 142 d18: `checks/m-a12d18-learning-review.md` and `checks/m-a12d18-claude-science-check.md`: 0 blockers, 1 unique should fix, 0 optional; 5,651 characters, about 518 s. Site log updated. Root decision 12 confirmed.

Brief 142 d19: `checks/m-a12d19-learning-review.md` and `checks/m-a12d19-claude-science-check.md`: 0 blockers, 2 unique should fix, 0 optional; 6,091 characters, about 551 s. Site corrections logged. Root decision 13 confirmed.

Brief 142 i01: `checks/m-a12i01-learning-review.md` and `checks/m-a12i01-claude-science-check.md`: 0 blockers, 2 unique should fix, 0 optional; 5,589 characters, about 514 s. Site log updated; root decision 14 confirmed.

Brief 142 i02: `checks/m-a12i02-learning-review.md` and `checks/m-a12i02-claude-science-check.md`: 0 blockers, 3 unique should fix, 0 optional; 5,669 characters, about 520 s. Site corrections logged.

Brief 142 i03: `checks/m-a12i03-learning-review.md` and `checks/m-a12i03-claude-science-check.md`: 0 blockers, 3 unique should fix, 0 optional; 5,623 characters, about 519 s. Site log updated; root decision 15 confirmed.

Brief 142 i04: `checks/m-a12i04-learning-review.md` and `checks/m-a12i04-claude-science-check.md`: 0 blockers, 1 unique should fix, 0 optional; 5,845 characters, about 538 s. Site log updated. Root decision 16 is reflected in the current definition and branch sentence.

Brief 142 i05: `checks/m-a12i05-learning-review.md` and `checks/m-a12i05-claude-science-check.md`: 0 blockers, 2 unique should fix, 0 optional; 5,765 characters, about 529 s. The harder matched example is retained pending voiced playback; no new site correction in the cited worked derivatives.

Brief 142 source verification: fresh official pages were checked on 2 November 2026. All 50 route actions across d11 to i05 matched their original expanded official HTML text and codenames; machine evidence is in `work/brief142-syllabus-validation.json`. The Year 11 reciprocal, complementary-angle and Pythagorean identity points confirm root decision 7, as appended to the d12 maths report. Item 50 of the site log was corrected before adding findings. All 28 reviews are now written. No designs, speech, renders or commits.

### Brief 143 partial build checkpoint (2 November 2026)

Work is in progress, not complete. The current graph changes and prototype parts, tests passed, and remaining required APIs, stills, motion sample, full decode and manifest are recorded in `checks/codex-build-143-progress.md`. No lesson designs, speech or commits were changed. Do not treat this checkpoint as motion or production approval.

### Brief 143 verification checkpoint (2 November 2026)

The kit additions, stills and 16-second silent sample are available; the sample passed a full decode. `checks/codex-build-143.md` records the APIs, checks and unresolved detailed contract gaps. The brief remains open, and Claude playback judgment is pending. Source and artifact hashes are in `assets/brief143-manifest.json`.

### Brief 143 resumed repairs (2 November 2026)

Repaired timed concavity reveals, stacked-panel palettes, declared common secant limits and nested constant highlighting in `src/explainer/math/brief143-parts.tsx`. Fixed the pilot sign-chart cropping and added typography and reveal examples. TypeScript, existing numerical suites, new regression checks and 17 SymPy derivatives pass. Re-rendered the main stills and 16-second silent sample, with full decode passed; expanded extra stills are present. Updated `checks/codex-build-143.md` and `assets/brief143-manifest.json`. Detailed per-design pilot coverage remains open; no motion approval claimed. Briefs 144 to 152 have not started.

### Brief 143 completed (2 November 2026)

Final APIs and checks: `checks/codex-build-143.md`; source and artifact hashes: `assets/brief143-manifest.json`. Fixed family clipping, full merged tangent and concavity colours, rechecked TypeScript and both earlier numerical suites, added symbolic and geometry comparisons, and regenerated 68 desktop/phone stills and the silent 16-second sample. Complete decode passed. Claude playback judgment is pending; no motion approval claimed. No lesson designs, speech or commits changed. Proceeding to brief 144.

### Brief 144 completed (2 November 2026)

- m-a12d10 handoff edit: clean.
- m-a12d11: 2 should fix, 0 blockers.
- m-a12d12: 1 should fix, 0 blockers.
- m-a12d13: 1 should fix, 0 blockers.
- m-a12d14: 1 should fix, 0 blockers.
- m-a12d15: 1 should fix, 0 blockers.
- m-a12d16: 1 should fix, 0 blockers.
- m-a12d17: 2 should fix, 0 blockers.
- m-a12d18: clean, ready to voice after the brief 124 pilot.
- m-a12d19: clean, ready to voice after the brief 124 pilot.
- m-a12i01: clean, ready to voice after the brief 124 pilot.
- m-a12i02: clean, ready to voice after the brief 124 pilot.
- m-a12i03: clean, ready to voice after the brief 124 pilot.
- m-a12i04: clean, ready to voice after the brief 124 pilot.
- m-a12i05: clean, ready to voice after the brief 124 pilot.
- y11b-v01: clean, ready to voice after the brief 124 pilot.
- y11b-v02: clean, ready to voice after the brief 124 pilot.
- y11b-v03: clean, ready to voice after the brief 124 pilot.
- y11b-v04: clean, ready to voice after the brief 124 pilot.
- y11b-v05: clean, ready to voice after the brief 124 pilot.
- y11b-v06: clean, ready to voice after the brief 124 pilot.
- m5g02b: 1 should fix, 0 blockers (timing total).

Reports: `checks/m-a12d10-error-check.md` through `m-a12d19-error-check.md`, `checks/m-a12i01-error-check.md` through `m-a12i05-error-check.md`, and Brief 144 confirmation sections in the seven existing chemistry/Biology error checks. Changed calculations and scene counts are in `work/brief144/`. Error-only hand-in: no designs, speech, renders or commits changed.

### Brief 145 completed (2 November 2026)

p-y11-v01: 0 blockers, 0 should fix, 0 optional. 6,308 characters in separate scenes, about 569 s. Reports: `checks/p-y11-v01-learning-review.md` and `checks/p-y11-v01-science-check.md`.

p-y11-v02: 0 blockers, 1 should fix, 0 optional. 5,809 characters in separate scenes, about 532 s. Reports: `checks/p-y11-v02-learning-review.md` and `checks/p-y11-v02-science-check.md`.

p-y11-v03: 0 blockers, 1 should fix, 0 optional. 5,421 characters in separate scenes, about 504 s. Reports: `checks/p-y11-v03-learning-review.md` and `checks/p-y11-v03-science-check.md`.

p-y11-v04: 0 blockers, 0 should fix, 0 optional. 5,955 characters in separate scenes, about 544 s. Reports: `checks/p-y11-v04-learning-review.md` and `checks/p-y11-v04-science-check.md`.

p-y11-v05: 0 blockers, 3 should fix, 0 optional. 6,259 characters in separate scenes, about 566 s. Reports: `checks/p-y11-v05-learning-review.md` and `checks/p-y11-v05-science-check.md`.

p-y11-v06: 0 blockers, 0 should fix, 0 optional. 5,507 characters in separate scenes, about 515 s. Reports: `checks/p-y11-v06-learning-review.md` and `checks/p-y11-v06-science-check.md`.

p-y11-v07: 0 blockers, 1 should fix, 0 optional. 5,393 characters in separate scenes, about 505 s. Reports: `checks/p-y11-v07-learning-review.md` and `checks/p-y11-v07-science-check.md`.

p-y11-v08: 0 blockers, 1 should fix, 0 optional. 5,510 characters in separate scenes, about 516 s. Reports: `checks/p-y11-v08-learning-review.md` and `checks/p-y11-v08-science-check.md`.

p-y11-v09: 0 blockers, 3 should fix, 0 optional. 6,297 characters in separate scenes, about 567 s. Reports: `checks/p-y11-v09-learning-review.md` and `checks/p-y11-v09-science-check.md`.

p-y11-v10: 0 blockers, 4 should fix, 0 optional. 6,319 characters in separate scenes, about 569 s. Reports: `checks/p-y11-v10-learning-review.md` and `checks/p-y11-v10-science-check.md`.

p-y11-v11: 0 blockers, 0 should fix, 0 optional. 4,990 characters in separate scenes, about 469 s. Reports: `checks/p-y11-v11-learning-review.md` and `checks/p-y11-v11-science-check.md`.

p-y11-v12: 0 blockers, 1 should fix, 0 optional. 5,329 characters in separate scenes, about 494 s. Reports: `checks/p-y11-v12-learning-review.md` and `checks/p-y11-v12-science-check.md`.

19 FA1 action instances and nine v10 FA0 actions checked against fresh official page data. Numerical scripts, site comparisons and review records are in `work/brief145/`. Confirmed site findings appended without duplicating the existing L10/L12 items. User requested sub-agents during this brief; v09, v10 and v11/v12 were delegated, with root integration and an independent false-positive audit of v05/v07. No designs, speech, renders or commits changed. Human listening and implemented motion review remain pending. Next: brief 152 under the revised owner order.

### Brief 152 completed (2 November 2026)

- Content map: every FA2/FA3 point is quoted with its local ID and fresh official CMS codename. All 59 match the current official pages. Existing sources: 53 covered, 6 partial, none missing; proposed homes do not erase those gaps.
- Ordered route: 33 FA2 and 32 FA3 videos, using all 71 packs and 50 site lessons. FA2 v01 to v12 retain the provisional IDs and source order unchanged. FA1 v31 opening and FA2 v33 to FA3 v01 handoff match. Named investigations have separate homes.
- Cultural hold: FA3 v05 and v16 remain in sequence with owner decision pending. Navigation and health-access keyword hits are not blanket holds.
- Pack updates: 48 update records identify changed boundaries, practical/source supplements and stale pack pointers. The six partial points need agar conduct, renal/diabetes source comparisons, paired hormone data, resistance sources and protein-sequence evidence.

Deliverables: `docs/production/programme/bio-y11-fa2-fa3-route-inputs.json` and `docs/production/programme/bio-y11-fa2-fa3-video-map.md`. Independent final audit `work/brief152/final-audit.json` passes all 65 videos, 59 actions, 71 packs, source hashes/anchors and the two cultural holds. No designs, site files, speech, renders or commits changed. Claude route approval remains pending; these are the requested research inputs. Next: brief 151, maths part 2 first.

### Brief 151 part 2 (maths) completed before physics (2 November 2026)

- math-a12-t01: route inputs only, current design/source checked; no pack created.
- math-a12-t02: route inputs only, current design/source checked; no pack created.
- math-a12-t03: route inputs only, current design/source checked; no pack created.
- math-a12-t04: route inputs only, current design/source checked; no pack created.
- math-a12-i06: full pack, source examples recalculated, two original candidate cards with worked answers.
- math-a12-i07: full pack, source examples recalculated, two original candidate cards with worked answers.
- math-a12-i08: full pack, source examples recalculated, two original candidate cards with worked answers.
- math-a12-i09: full pack, source examples recalculated, two original candidate cards with worked answers.
- math-a12-i10: full pack, source examples recalculated, two original candidate cards with worked answers.
- math-a12-i11: full pack, source examples recalculated, two original candidate cards with worked answers.
- math-a12-i12: full pack, source examples recalculated, two original candidate cards with worked answers.
- math-a12-i13: full pack, source examples recalculated, two original candidate cards with worked answers.
- math-a12-i14: full pack, source examples recalculated, two original candidate cards with worked answers.

Route inputs: `docs/production/programme/maths-a12-route-inputs-3.json`. Nine integral packs: `claude-pm/pre-design/maths-a12/math-a12-i06.md` to `i14.md`. Existing outline questions retained for i11 to i13; pack refinements are explicit proposals. 32 fresh official actions match. Author numerical suites pass 55 plus 65 checks; independent audit samples all nine packs and validates all source/section/example hashes. Thirteen kit-needs rows added, with the actual six pending trig parts and yShift/domain extensions distinguished from existing APIs. Source corrections 62 to 65 added; existing log-scale/profit/rest-time issues extended or referenced without duplicate entries. No designs, speech, renders or commits changed. Starting brief 151 part 1 physics next.

### Brief 151 completed, physics after maths (2 November 2026)

- phys-y11-fa1-v26: pack written; causal question and boundary changes proposed. How does a force along the motion change an object's kinetic energy?
- phys-y11-fa1-v27: pack written; causal question and boundary changes proposed. How do changes in height and speed change an object's gravitational and kinetic energy?
- phys-y11-fa1-v28: pack written; causal question and boundary changes proposed. Why does mechanical energy stay constant on a smooth track but decrease when friction does work?
- phys-y11-fa1-v29: pack written; causal question and boundary changes proposed. Why does a longer stopping time reduce the average force for the same change in momentum?
- phys-y11-fa1-v30: pack written; causal question and boundary changes proposed. Why can two colliding objects keep the same total momentum while losing kinetic energy?
- phys-y11-fa1-v31: pack written; causal question and boundary changes proposed. Does the measured total momentum survive a collision?

Six physics packs complete in `claude-pm/pre-design/phys-y11/`, v26 to v31. v26 starts after v24 and does not require held v25. v31 includes a full method,18 repeated illustrative trials, conservative uncertainty intervals, graphs, risks and partial FA0 proposals; total-KE interpretation is conditional on rotation/external-work bounds. All14 fresh Physics actions, source hashes, actual sections/examples and numeric checks pass. Confirmed site findings added without duplicating existing entries.

The maths section was completed first:13 route entries,9 integral packs, no trig packs,13 kit-needs rows and source corrections. Combined validation: `work/brief151/validation.json`. Independent audits cover all 15 packs and all19 video inputs. No designs, site files, speech, renders or commits changed. Next: brief147.


### Brief 147: Year 11 Biology FA1 v07 to v12

- v07: 0 blockers, 3 should fix, 0 optional; 5,899 characters, about 572 s (accepted). Reports: `checks/y11b-v07-learning-review.md`, `checks/y11b-v07-science-check.md`.
- v08: 0 blockers, 4 should fix, 0 optional; 5,847 characters, about 564 s. Reports: `checks/y11b-v08-learning-review.md`, `checks/y11b-v08-science-check.md`.
- v09: 0 blockers, 4 should fix, 0 optional; 5,577 characters, about 540 s. Reports: `checks/y11b-v09-learning-review.md`, `checks/y11b-v09-science-check.md`.
- v10: 1 blocker, 4 should fix, 0 optional; 5,927 characters, about 569 s. The open-beaker demonstration does not isolate diffusion; the reports specify a source-backed agar replacement and shorter wording. Reports: `checks/y11b-v10-learning-review.md`, `checks/y11b-v10-science-check.md`.
- v11: 0 blockers, 3 should fix, 0 optional; 5,669 characters, about 549 s. Reports: `checks/y11b-v11-learning-review.md`, `checks/y11b-v11-science-check.md`.
- v12: 0 blockers, 2 should fix, 0 optional; 5,348 characters, about 519 s (accepted). Reports: `checks/y11b-v12-learning-review.md`, `checks/y11b-v12-science-check.md`.

Plates: 21 new plates, including three schematic agar stages replacing the four original beaker requests, with alpha, black/white, phone and paired-state checks in `assets/brief147-qa/`; hashes and prompts in `assets/brief147-manifest.json` and six per-video provenance files. The optional towel and extra-mitochondrion plate were not needed. The source designs remain unchanged; Claude resolves reported findings before voice/build.

Shared diagrams: `src/explainer/biology/fa1/` exports `SizeLadder`, `AssessBalance` and `GapBox`; `checks/brief147-bio-fa1-components.md` records targeted TypeScript, numerical checks and still proofs. Source reviews and still checks are not human listening or continuous playback approval. Site findings are in `site-corrections-bio-y11.md`.


### Brief 153: Physics v26 to v31 and Mathematics t01 to t04 reviews

- v26: complete; 0 blockers, 2 should fix: nonconservative drive and narration count. Reports: `checks/p-y11-v26-learning-review.md`, `checks/p-y11-v26-science-check.md`.
- v27: complete; 0 blockers, 2 should fix: energy change and released-from-rest condition. Reports: `checks/p-y11-v27-learning-review.md`, `checks/p-y11-v27-science-check.md`.
- v28: complete; 0 blockers, 2 should fix: net work and rounding. Reports: `checks/p-y11-v28-learning-review.md`, `checks/p-y11-v28-science-check.md`.
- v29: complete; 0 blockers, 4 should fix: handoff, average force, signed graph and external impulse. Reports: `checks/p-y11-v29-learning-review.md`, `checks/p-y11-v29-science-check.md`.
- v30: complete; 0 blockers, 5 should fix: assumptions, deformation, rotation, algebraic branch and inelastic scope. Reports: `checks/p-y11-v30-learning-review.md`, `checks/p-y11-v30-science-check.md`.
- v31: complete; 3 blockers, 1 should fix: uncertainty, unsupported drag attribution and underdetermined comparison. Reports: `checks/p-y11-v31-learning-review.md`, `checks/p-y11-v31-science-check.md`.
- t01: complete; 0 blockers, 1 should fix: scope the period rule. Reports: `checks/m-a12t01-learning-review.md`, `checks/m-a12t01-claude-science-check.md`.
- t02: complete; 0 blockers, 1 should fix, 1 optional: endpoint and tangent branch counting. Reports: `checks/m-a12t02-learning-review.md`, `checks/m-a12t02-claude-science-check.md`.
- t03: complete; 0 blockers, 3 should fix: model assumptions, handoff and threshold. Reports: `checks/m-a12t03-learning-review.md`, `checks/m-a12t03-claude-science-check.md`.
- t04: complete; 0 blockers, 4 should fix: hearing reference, seismic model, pH and axis wording. Reports: `checks/m-a12t04-learning-review.md`, `checks/m-a12t04-claude-science-check.md`.

Fresh official action evidence and independent calculations are in `work/brief153/`; confirmed site issues were logged without changing site files. Source designs, voice, renders and commits were untouched. Findings are for designer resolution before recording. Next: brief 146.


### Brief 146: Physics FA1 v01 to v12 plates

Completed 22 transparent physics PNGs, including matched plan-view cars and boats, open light gate, card trolley, dynamics trolley, investigation apparatus, sledge and box. Existing side cars, ruler, ball and stopwatch were reviewed for reuse. The v01/v06 drone filename conflict is resolved with one shared 1500 px plate; the v05 car is the shared blue plate rotated to face right. The v10 light gate request was withdrawn. Manifest, source prompts, hashes, reuse decisions and approximate attachment coordinates are in `assets/brief146-manifest.json`; per-video provenance is in `assets/`. Black/white and phone contact sheets and a scale mock are in `assets/brief146-qa/`. Both matched pairs have identical alpha masks; all 22 files pass transparency, dimensions and margin checks. ImageGen masters and local operations remain in `work/brief146/`. The hand-in is plate-only and does not imply voiced or motion approval. Next: brief 148.

Brief 146 filename addendum: root decision 4 canonical `phys-y11-` copies are included for every `y11p-` request, with original spellings kept as matching aliases. Manifest hashes cover both.


### Brief 148: Year 11 Physics kit

Completed the shared physics kit in `src/explainer/physics/y11-kit.tsx`, with the pilot entry and serial renderer. `checks/codex-build-148.md` records the APIs, 841 numeric assertions, TypeScript and 16 desktop/phone stills; `assets/brief148-manifest.json` records hashes. The 16-second silent motion sample is `out/explainer/physics-y11-kit-pilot/brief148-motion-sample.mp4`, with a successful full decode. Claude judges the motion at playback speed; no approval is claimed. No lesson design, speech or commit changed. Next: brief 149.

### Brief 149: Physics FA1 v13 to v24 reviews and plates

- v13: review complete; 0 blockers, 3 should fix, 0 optional; about 524 s. See `checks/p-y11-v13-learning-review.md` and `checks/p-y11-v13-science-check.md`.
- v14: review complete; 0 blockers, 3 should fix, 0 optional; about 516 s. See `checks/p-y11-v14-learning-review.md` and `checks/p-y11-v14-science-check.md`.
- v15: review complete; 3 blockers, 2 should fix, 0 optional; about 559 s. See `checks/p-y11-v15-learning-review.md` and `checks/p-y11-v15-science-check.md`.
- v16: review complete; 0 blockers, 2 should fix, 0 optional; about 524 s. See `checks/p-y11-v16-learning-review.md` and `checks/p-y11-v16-science-check.md`.
- v17: review complete; 1 blocker, 2 should fix, 0 optional; about 567 s. See `checks/p-y11-v17-learning-review.md` and `checks/p-y11-v17-science-check.md`.
- v18: review complete; 1 blocker, 3 should fix, 0 optional; about 526 s. See `checks/p-y11-v18-learning-review.md` and `checks/p-y11-v18-science-check.md`.
- v19: review complete; 0 blockers, 3 should fix, 0 optional; about 508 s. See `checks/p-y11-v19-learning-review.md` and `checks/p-y11-v19-science-check.md`.
- v20: review complete; 0 blockers, 2 should fix, 0 optional; about 547 s. See `checks/p-y11-v20-learning-review.md` and `checks/p-y11-v20-science-check.md`.
- v21: review complete; 2 blockers, 1 should fix, 0 optional; about 567 s. See `checks/p-y11-v21-learning-review.md` and `checks/p-y11-v21-science-check.md`.
- v22: review complete; 0 blockers, 3 should fix, 0 optional; about 532 s. See `checks/p-y11-v22-learning-review.md` and `checks/p-y11-v22-science-check.md`.
- v23: review complete; 1 blocker, 2 should fix, 0 optional; about 538 s. See `checks/p-y11-v23-learning-review.md` and `checks/p-y11-v23-science-check.md`.
- v24: review complete; 3 blockers, 3 should fix, 0 optional; about 568 s. See `checks/p-y11-v24-learning-review.md` and `checks/p-y11-v24-science-check.md`.

Plates: 44 files including variants and animation layers; source, hashes, filename conflicts and reuse are in `assets/brief149-manifest.json`, with visual tests in `assets/brief149-qa/`. Coordinates in sidecars are visually estimated and must be registered in the build; the strips extend to both edges to tile. The pulley-and-string composition is illustrative and needs final rope registration. Review blockers require designer repair before recording; no design edits, speech or commits. Next: brief 150.

### Brief 150 progress: Biology FA1 v13

v13 review complete: 0 blockers, 3 should fix, 0 optional; about 547 s. Reports `checks/y11b-v13-learning-review.md` and `checks/y11b-v13-science-check.md`; two confirmed L10 findings logged. Repairs and playback remain for the designer. Next review: v14.

### Brief 150 progress: Biology FA1 v14

v14 review complete: 0 blockers, 3 should fix, 0 optional; about 549 s. Reports `checks/y11b-v14-learning-review.md` and `checks/y11b-v14-science-check.md`; confirmed L11 issues logged. Next review: v15.

### Brief 150 progress: Biology FA1 v15

v15 review complete: 0 blockers, 5 should fix, 0 optional; about 527 s. Reports `checks/y11b-v15-learning-review.md` and `checks/y11b-v15-science-check.md`; L12 source findings logged. Next review: v16.

### Brief 150 progress: Biology FA1 v16

v16 review complete: 0 blockers, 4 should fix, 0 optional; about 569 s. Reports `checks/y11b-v16-learning-review.md` and `checks/y11b-v16-science-check.md`; balanced atom count and L13 site findings recorded. Next review: v17.

### Brief 150 progress: Biology FA1 v17

v17 review complete: 0 blockers, 4 should fix, 0 optional; about 556 s. Reports `checks/y11b-v17-learning-review.md` and `checks/y11b-v17-science-check.md`; atom counts, willow conversions and confirmed L14 findings recorded. Next review: v18.

### Brief 150 progress: Biology FA1 v18

v18 review complete: 0 blockers, 5 should fix, 0 optional; about 523 s. Reports `checks/y11b-v18-learning-review.md` and `checks/y11b-v18-science-check.md`; L15 findings logged. Next review: v19.

### Brief 150 progress: Biology FA1 v19

v19 review complete: 1 blocker, 3 should fix, 0 optional; about 562 s. Reports `checks/y11b-v19-learning-review.md` and `checks/y11b-v19-science-check.md`; L16 model findings logged. Next review: v20.

### Brief 150 progress: Biology FA1 v20

v20 review complete: 1 blocker, 3 should fix, 0 optional; about 541 s. Reports `checks/y11b-v20-learning-review.md` and `checks/y11b-v20-science-check.md`; L18 graph findings logged. Next review: v21.

### Brief 150 progress: Biology FA1 v21

v21 review complete: 1 blocker, 4 should fix, 0 optional; about 566 s. Reports `checks/y11b-v21-learning-review.md` and `checks/y11b-v21-science-check.md`; calculations and L17 findings logged. NSW public guidance was checked; the exact local chemical category requires the school register and SDS. Next review: v22.

### Brief 150 progress: Biology FA1 v22

v22 review complete: 0 blockers, 3 should fix, 0 optional; about 537 s. Reports `checks/y11b-v22-learning-review.md` and `checks/y11b-v22-science-check.md`; sequence calculations and L19 bond-count correction recorded. Next review: v23.

### Brief 150 progress: Biology FA1 v23

v23 review complete: 2 blockers, 2 should fix, 0 optional; about 567 s. Reports `checks/y11b-v23-learning-review.md` and `checks/y11b-v23-science-check.md`; L20 model findings logged. Next review: v24.

### Brief 150 progress: Biology FA1 v24

v24 review complete: 0 blockers, 4 should fix, 0 optional; about 548 s. Reports `checks/y11b-v24-learning-review.md` and `checks/y11b-v24-science-check.md`; scale and fork calculations recorded. Next review: v25.

### Brief 150 progress: Biology FA1 v25

v25 review complete: 1 blocker, 3 should fix, 0 optional; about 571 s. Reports `checks/y11b-v25-learning-review.md` and `checks/y11b-v25-science-check.md`; DNA scale calculations and L21 findings recorded. Next review: v26.

### Brief 150 progress: Biology FA1 v26

v26 review complete: 1 blocker, 3 should fix, 0 optional; about 570 s. Reports `checks/y11b-v26-learning-review.md` and `checks/y11b-v26-science-check.md`; counts and L22 findings recorded. Next review: v27.

### Brief 150 progress: Biology FA1 v27

v27 review complete: 1 blocker, 3 should fix, 0 optional; about 539 s. Reports `checks/y11b-v27-learning-review.md` and `checks/y11b-v27-science-check.md`; chromosome/DNA counts and L23 findings recorded. Next review: v28.

### Brief 150 progress: Biology FA1 v28

v28 review complete: 0 blockers, 3 should fix, 0 optional; about 530 s. Reports `checks/y11b-v28-learning-review.md` and `checks/y11b-v28-science-check.md`; existing stage plates and chromosome counts inspected. Next review: v29.

### Brief 150 progress: Biology FA1 v29

v29 review complete: 0 blockers, 4 should fix, 0 optional; about 571 s. Reports `checks/y11b-v29-learning-review.md` and `checks/y11b-v29-science-check.md`; meiosis counts and L24 findings recorded. Next review: v30.

### Brief 150 progress: Biology FA1 v30

v30 review complete: 1 blocker, 3 should fix, 0 optional; about 559 s. Reports `checks/y11b-v30-learning-review.md` and `checks/y11b-v30-science-check.md`; combination calculations and L24 findings recorded. Next review: v31.

### Brief 150 progress: Biology FA1 v31

v31 review complete: 2 blockers, 3 should fix, 0 optional; about 518 s. Reports `checks/y11b-v31-learning-review.md` and `checks/y11b-v31-science-check.md`; L25 findings and current Cavendish/TR4 evidence recorded. All v13 to v31 reviews are complete; next: brief 150 plates.
# Brief 150 plate work in progress — early visual checks

The seven membrane candidates and 50% transition strip are in `assets/brief150-qa/membrane-crossfades.png`. Outer membrane sections are registered, but the cargo scale and changing central geometry still need checking against the commission before acceptance. The existing macrophage plates have clean-looking edges on the dark-board strip `assets/brief150-qa/macrophage.png`, but the after plate's cell appears larger than the other stages; do not assume exact registration. The exchange/cell strip `assets/brief150-qa/exchange.png` shows visible muscle-membrane carriers, a separate nephron tubule, and distinct painted mitochondria in both cell illustrations; actual scene-specific cropping and relative layout still need build-time verification. The isolated plates were composited on black and white in `assets/brief150-qa/individual-black.png` and `individual-white.png`: the earlier apparent apparatus glow came from viewing RGB values in transparent pixels, not the composited plate. Brief 150 remains in progress.

The original enzyme has been split into `y11-enzyme-alone-v1.png` and `y11-substrate-alone-v1.png`; recombining the non-overlapping layers reproduces the original with zero pixel mismatches. `assets/brief150-qa/matched-crossfades.png` records further candidate transitions: the liver no-liver and pair-telophase empty edits show a background or registration defect; a local repair to the former still needs another inspection and the latter needs replacement. The other matched sets still require full-resolution acceptance. The chromosome files are candidates, with arm widths, colours, centromeres and bands still to be verified. The helix candidate has correct colour pairings but only eight visible rungs and lacks the requested painted phosphate spheres; it is not accepted. No plate hand-in is complete yet.

Further progress: the helix was replaced by a ten-rung candidate with phosphate spheres; `assets/brief150-qa/helix-400.png` and `helix-inspection.md` show the 400 px and colour-pairing check. The telophase-empty replacement and the local liver repair now appear registered in the updated `matched-crossfades.png`, subject to full-size checks. The v27 still and findings are `assets/brief150-qa/v27-cells-and-stage-strip.png` and `v27-inspection.md`; the v28 still, approximate string path and findings are in `assets/y11fa1v28-qa/`. The small bead Xs and actual stage playback remain build checks. v19 and v20 plates have explicit prerequisites that their reviews pass; both reviews report blockers and the design hashes have not changed. v21 has the same review prerequisite and its review also reports a blocker. Brief 150 remains open.

### Brief 124 hand-in: Google speech alignment pilot

Report `checks/google-tts-pilot-2026-10-31.md`; audio, timing comparison and pilot measured lesson under `out/google-tts-pilot/`; adapter `scripts/google-tts-pilot.mjs`. Gemini 3.8 Flash TTS accepted the owner's saved voice ID. Six original and two supplemental speech probes were generated. Estimated paid cost is US$0.09 per 6,000 characters at current rates, scaled from the three scenes. The 199-word ElevenLabs comparison gave median 34 ms and 95th percentile 113.3 ms, but two scenes used reference-derived sentence windows, so these are not independent benchmark figures. The caption exporter succeeded with 34 cues; actual renderer media serving and playback were not tested. Automated audio observations flag the maths letter `a` as “uh”; an `ay` respelling probe is present. Human listening and a genuinely independent timing check remain open. No key was printed or committed. Brief 150 remains open separately; the user's new requested order continues at brief 154.

### Brief 154 progress

v01: one shared should-fix, conflicting course-wide velocity colours in the two root-decision files. v02: no lesson-specific errors; shared colour issue remains. v03: one should-fix, author note (c) wrongly says all vectors are in the first quadrant although attempt 2 points west of north. Reports `checks/p-y11-v01-error-check.md` through `p-y11-v03-error-check.md`; counts and calculations in `work/brief154/`. Continue with v04; brief 154 is not yet handed in.

### Brief 154 hand-in: Physics FA1 v01-v12 Revision 2 error checks

- v01: 1 shared should-fix, conflicting course-wide velocity-colour decisions; about 570 s.
- v02: no lesson-specific errors; clean for voicing after the brief 124 pilot, subject to its listening and independent timing checks; about 532 s.
- v03: 1 should-fix, blanket first-quadrant author note excludes the west-of-north example; about 503 s.
- v04: no lesson-specific errors; clean for voicing after the brief 124 pilot, subject to its listening and independent timing checks; about 544 s.
- v05: 1 should-fix, the light-gate narration overstates when an interval average can match an instantaneous value; about 561 s.
- v06: no lesson-specific errors; clean for voicing after the brief 124 pilot, subject to its listening and independent timing checks; about 515 s.
- v07: no lesson-specific errors; clean for voicing after the brief 124 pilot, subject to its listening and independent timing checks; about 505 s.
- v08: no lesson-specific errors; clean for voicing after the brief 124 pilot, subject to its listening and independent timing checks; about 517 s.
- v09: 2 should-fix, joined-count headline and an over-general author-note instruction; about 568 s.
- v10: 2 should-fix, certainty of the A2 repeat prediction and joined-count headline; about 570 s.
- v11: no lesson-specific errors; clean for voicing after the brief 124 pilot, subject to its listening and independent timing checks; about 469 s.
- v12: 1 should-fix, screen normal-force labels use N rather than the owner's F_N; about 494 s.

Reports are `checks/p-y11-v01-error-check.md` through `checks/p-y11-v12-error-check.md`; parser outputs and Python calculations are in `work/brief154/`. The shared colour conflict affects later build normalisation. These are source checks; no voiced or rendered playback was inspected. Next in the owner's current order: brief 158.

## Brief 158 hand-in (3 November 2026)

Revision 2 source checks, with counts and evidence in `checks/y11b-v07-error-check.md` through `y11b-v12-error-check.md` and `work/brief158/`. No designs, speech, renders or commits changed. Playback and human listening remain pending.

- y11b-v07: 1 should fix, stale scene 9 cue; accepted approximately 572 seconds.
- y11b-v08: 3 should fix, stale feedback cue, cholesterol comparison and timing header.
- y11b-v09: 1 should fix, ion direction caveat missing from repeated summaries.
- y11b-v10: 2 should fix, conditional mass interpretation and stale timing figures; scene 8 is approximately 46 seconds and needs playback inspection.
- y11b-v11: 2 should fix, hospital-drip generalisation and inconsistent timing figures.
- y11b-v12: 3 should fix, stale graph cue, generic ion condition and inconsistent timing figures.

## Brief 159 hand-in (3 November 2026)

Revision 2 source checks: `checks/p-y11-v13-error-check.md` through `p-y11-v24-error-check.md`, and `p-y11-v26-error-check.md` through `p-y11-v31-error-check.md`; counts and recalculations in `work/brief159/`. All 18 specified designs begin Revision 2; none skipped. v25 remains on cultural hold. No design edits, speech, renders or commits. Audio and built motion remain untested.

- v13: 1 should fix, stale force/speed sequence description.
- v14: clean, ready to voice after the brief 124 pilot.
- v15: 4 should fix, force approximation, uncertainty summaries, v16 opening and stale scene timing figures.
- v16: 2 should fix, v15 opening match and speech-time intermediate.
- v17: 1 should fix, stale opening-frame assumption.
- v18: 1 should fix, unresolved narration placeholders and stale count/timing.
- v19: 2 should fix, unqualified area claim and threshold/trace consistency.
- v20: clean, ready to voice after the brief 124 pilot.
- v21: 3 should fix, opposite closing-arrow descriptions, normal-force symbol and stale opening assumption.
- v22: 2 should fix, normal-force symbol and incomplete angle summary.
- v23: 1 should fix, normal-force symbol.
- v24: 2 should fix, remaining half-range uncertainty claim and inferred-cause wording; about 570 s with named trim.
- v26: 1 should fix, old plate names; about 570 s with named trims.
- v27: 1 should fix, old plate names.
- v28: 1 should fix, old plate names.
- v29: 1 should fix, old plate name retained in a visual.
- v30: 2 should fix, stale rolling note and old plate names; about 570 s with named trims.
- v31: 3 should fix, categorical collision inference, systematic-error and scatter wording, and old plate names; about 570 s with named trim.

## Brief 160 hand-in (3 November 2026)

Revision 2 source checks: `checks/m-a12t01-error-check.md` through `m-a12t04-error-check.md` and `checks/y11b-v13-error-check.md` through `y11b-v31-error-check.md`. Counts, calculations and plate scan are in `work/brief160/`. All 23 specified designs start Revision 2; none skipped. No design edits, speech, renders or commits. The brief 150 manifest explicitly remains in progress: candidate files are not a completed plate hand-in; missing essential plates are identified below. Audio, animation and real student practicals were not inspected.

- m-a12t01: 1 should fix, stale parameter in a heading.
- m-a12t02: clean, ready to voice after the brief 124 pilot.
- m-a12t03: 1 should fix, stale parameter in a heading.
- m-a12t04: clean, ready to voice after the brief 124 pilot.
- y11b-v13: 1 should fix, overgeneralised low-ATP feedback.
- y11b-v14: 2 should fix, glucose absolute in attempt 2 and stale timing table.
- y11b-v15: 2 should fix, water net-flow table and stale timing table.
- y11b-v16: 1 should fix, stale handoff scene count; about 569 s.
- y11b-v17: 2 should fix, missing cue phrase and atom-mapping summary.
- y11b-v18: 2 should fix, peroxide-depletion inference and enzyme-mechanism summaries.
- y11b-v19: 3 should fix, stale cue, mechanism summaries and missing essential induced-fit plates; about 570 s.
- y11b-v20: 3 should fix, timing header, saturation summaries and missing essential enzyme plates.
- y11b-v21: 4 should fix, start-state plate, control and validity claims, and missing essential plunger; about 569 s.
- y11b-v22: 2 should fix, inaccurate proposed site wording and stale opening assumption.
- y11b-v23: 1 should fix, stale primer and copy-accuracy summary.
- y11b-v24: 2 should fix, digital-model summary and origin-timing wording.
- y11b-v25: 2 should fix, unqualified histone references and stale opening assumption.
- y11b-v26: 1 should fix, two stale visual cues; about 570 s.
- y11b-v27: 2 should fix, checkpoint/daughter absolutes and stale timing.
- y11b-v28: 1 should fix, stale centromere and daughter summary.
- y11b-v29: 2 should fix, stale centromere note and overstrong proposed site correction; about 569 s.
- y11b-v30: 1 should fix, stale four-different-cells summary; about 570 s.
- y11b-v31: 3 should fix, universal meiosis verdict, healing wording and stale length header.

## Brief 155 hand-in (3 November 2026)

Nine learning reviews and nine maths checks are in `checks/m-a12i06-learning-review.md` through `m-a12i14-learning-review.md` and the corresponding `m-a12iNN-claude-science-check.md` files. Independent symbolic evidence is in `work/brief130-python/i06.py` through `i14.py` and their JSON output. Reviewed against packs, route, official 2024 syllabus and root decisions 28–38. Site corrections are deduplicated in `site-corrections-maths-a12.md`. No design edits, audio, renders or commits; playback remains untested.

**i06:** 0 blockers, 1 should fix: provide actual learner use of a graphing application. 6,176 characters, about 561 s. GPS elevation error logged as item 72.

**i07:** 1 blocker, 1 should fix: a −2 m rectangle estimate is mislabelled as exact when the integral is −3 m; f≤0 permits zero. 5,711 characters, about 531 s.

**i08:** 0 blockers, 2 should fix: learner use of graphing application and approximation described as equality. 5,599 characters, about 525 s. FTC site wording logged as item 73.

**i09:** 0 blockers, 0 should fix; 5,683 characters, about 522 s. Brackets, splits and reversed limits verified.

**i10:** 0 blockers, 1 should fix: mark included zeros without open circles. 5,644 characters, about 521 s. Profit issue already logged under item 20.

**i11:** 0 blockers, 0 should fix; 5,137 characters, about 480 s, length accepted by root. Reflection, log domains and strips verified.

**i12:** 0 blockers, 2 should fix: learner application use and screen-only erf under root decision 36. 6,224 characters, about 565 s. Item 74 covers site concavity. The exact 2024-syllabus reference sheet remains to be verified before build; the official sheet independently located is a 2020 exam sheet.

**i13:** 0 blockers, 2 should fix: qualify an absolute statement about integrating totals and the solar model continuation. 5,625 characters, about 522 s.

**i14:** 0 blockers, 0 should fix; 5,722 characters, about 531 s. Motion and distance recalculated; item 75 covers site distance and drift wording, with separate unsourced claims flagged for verification.

## Brief 156 work in progress (3 November 2026; not a completed hand-in)

Learning and science checks for FA2 v01–v07 and v09–v12 are saved under `checks/p-y11-fa2-vNN-{learning-review,science-check}.md`; v08 remains on cultural hold. Official actions and calculation evidence are in `work/brief156/`. The plate manifest `assets/brief156-manifest.json` records candidates and remaining work; the painted set, sidecars and QA are incomplete. Several generated candidates have visible halos and must not be treated as approved. No design edits, speech, renders or commits.

## Brief 156 hand-in (3 November 2026)

Reviews and independent checks are in `checks/p-y11-fa2-v01-learning-review.md` through v07 and v09 through v12, with corresponding `-science-check.md` files. v08 remains on cultural hold. Fresh 2025 syllabus validation and arithmetic evidence are in `work/brief156/`. No designs, audio, renders or commits were changed. Counts below combine overlapping learning and science findings rather than counting the same issue twice; timings are design estimates, not voiced measurements.

**v01:** 0 blockers, 1 should fix: limit the particle-oscillation summary to mechanical models. 5,580 characters, about 518 s.

**v02:** 0 blockers, 2 should fix: the stated camera field misses the extra markers, and the near-zero directional component cannot support the claimed ratio at ±1 cm. 6,239 characters, about 569 s; inspect timing closely.

**v03:** 0 blockers, 1 should fix: restrict the crest-to-trough half-wavelength statement to the sinusoidal wave shown. 5,453 characters, about 510 s; root accepted the length.

**v04:** 0 blockers, 1 should fix: qualify the conversational sound-displacement value by its frequency and intensity. 5,882 characters, about 542 s.

**v05:** 0 blockers, 1 should fix: scope constant phase speed and the energy-speed comparison to the illustrated nondispersive cord. 5,865 characters, about 541 s.

**v06:** 0 blockers, 2 should fix: distinguish a position axis from the vertical displacement and scope fastest-at-zero to the sinusoidal motion. 5,781 characters, about 535 s.

**v07:** 0 blockers, 1 should fix: scope zero-crossing compression positions to the illustrated sinusoid. 5,822 characters, about 538 s; handoff skips held v08.

**v09:** 0 blockers, 2 should fix: soft supports reduce rather than eliminate solid sound paths; use air parcels rather than the absolute motion of individual molecules. 5,652 characters, about 525 s.

**v10:** 0 blockers, 2 should fix: the scope displays microphone voltage and a louder verdict across different frequencies needs perceptual evidence; retain the fixed-displacement condition on the energy comparison. 5,853 characters, about 538 s.

**v11:** 0 blockers, 1 should fix: check microphone-channel phase together and retain the reflection limitation. 5,980 characters, about 550 s; illustrative data and safety sources checked.

**v12:** 0 blockers, 1 should fix: a pressure-level meter estimates intensity under the stated wave model and the fixed-displacement test is model-dependent. 5,974 characters, about 549 s; illustrative data and safety sources checked.

**Plates:** 17 separate painted transparent PNGs and sidecars are recorded with hashes and prompts in `assets/brief156-manifest.json`; black/white contact sheets, phone-scale mock, attachment grids and assembled component checks are in `assets/brief156-qa/`. The v09 cutaway has its own filename to avoid colliding with the exterior microphone. Anchors were read from grids and tested in compositions; check final placement during build. The earlier FA1 air-track, glider and blower plates are absent and remain reuse dependencies; they were not represented as existing. All artwork uses built-in imagegen.

### Brief 157 work in progress (3 November 2026)

Fresh official actions verified for v01 to v12. Reviews completed for v01 to v05: `checks/y11b-fa2-v01-learning-review.md` through `checks/y11b-fa2-v05-science-check.md`. Confirmed FA2 L01 to L03 findings appended to `site-corrections-bio-y11.md`. v03 has a school-safety clearance blocker: current NSW student-handling permissions for the specific agar and scalpel were not verified. Next: v06 review, then v07 to v12 and the plate work. This is not a completed hand-in.

### Brief 157 work in progress: reviews complete (3 November 2026)

All twelve learning reviews and science checks are in `checks/y11b-fa2-v01-learning-review.md` through `checks/y11b-fa2-v12-science-check.md`; their findings include blockers for practical safety (v03), net oxygen/bubble measurement (v08), universal phloem loading (v10) and osmotic pressure (v12). Artwork is in progress. Candidate images are under the image-generation session directory; some fail alpha, dimensional accuracy or matched-state registration and have not been accepted. Existing skin and epithelium viewed on dark in `assets/brief157-qa/existing-skin-dark.png`. The brief is not handed in; exact 1:2:3 agar cubes and other matched plates still require QA.

### Brief 157 artwork progress (3 November 2026)

Four inspected native PNGs saved: `public/assets/biology/y11-chlorosis-leaf-v1.png`, `y11-variegated-leaf-v1.png`, `y11-fertiliser-bag-v1.png`, and `y11-stave-barrel-v1.png`; sizes and provenance are recorded in `assets/brief157-manifest.json`. Their native canvases differ from the approximate portrait dimensions in the asset requests. Reused water-plant plate provenance and hashes confirmed in the manifest; some earlier plates still await owner acceptance. The matching and scale-critical assets remain unfinished, including the 1:2:3 agar set. This is not the completed hand-in.

### Brief 157 further artwork check (3 November 2026; not a completed hand-in)

Additional Gonium, egg, greenhouse and cardiac muscle candidates were generated but not accepted: the candidates have visible halos, inaccurate details or missing matched plates. The v03, v07 and v09 to v12 asset briefs require a passed Codex error check before painting; no such checks were found, and the reviews record unresolved blockers. The v03 review also could not establish NSW student handling clearance for the agar and scalpel. The agar images generated so far do not meet the exact measured cube and core requirements; pot and other paired states do not register on the requested canvases. The paper-towel dependency for v03 was not found. No later brief in the queue has been started during this work.

### Brief 157 additional checks (3 November 2026; not a completed hand-in)

`y11-red-cell-lysed-v1.png` exists. `b2c-amoeba-fission-1-v1.png` shows one undivided nucleus, but its existing image has a visible halo on dark and should be checked before use. Further attempts to remove the halos from the Gonium, greenhouse and cardiac candidates did not meet the requested clean-edge standard. No candidates from those attempts were accepted. The required error checks for the gated plates are still absent.

### Brief 157 stoma registration check (3 November 2026; work in progress)

The open and closed stoma PNGs both use a 2000 x 2000 canvas. Their 50% overlay is in `assets/brief157-qa/stoma-overlay.png`; the surrounding cells and centre register closely, while the guard cells change shape around the pore as intended. Four further illustration candidates have not passed the clean-edge or scientific-detail checks and were not saved as plates. Brief 157 remains incomplete.

## Brief 157 hand-in, with open items (3 November 2026)

Twelve learning reviews and twelve science checks are in `checks/y11b-fa2-v01-learning-review.md` through v12 and their corresponding `-science-check.md` files. Confirmed site findings are in `site-corrections-bio-y11.md`. Counts below are from the learning reviews; see both reports for all findings. No design edits, speech or commits.

**v01:** 0 blockers, 4 should fix, about 537 s. Red-cell bursting needs a possibility rather than certainty. The lysed-cell plate exists; the amoeba plate has an undivided nucleus but a visible halo.

**v02:** 0 blockers, 4 should fix, about 506 s. State the equal-demand assumption in the surface-area comparison.

**v03:** 1 blocker, 5 should fix, about 569 s. Student handling of the phenolphthalein agar and scalpel needs the school's current safety assessment; use the teacher-cutting fallback until cleared. The paper-towel dependency was not found.

**v04:** 0 blockers, 4 should fix, about 556 s. Narrow the organelle placing rule. The existing skin and epithelium were inspected on dark.

**v05:** 0 blockers, 5 should fix, about 545 s. Remove the universal claim about roots and photosynthesis. The existing open and closed stoma images use the same canvas and register closely in `assets/brief157-qa/stoma-overlay.png`.

**v06:** 0 blockers, 4 should fix, about 515 s. State the initial limiting condition or present the result as a particular test.

**v07:** 0 blockers, 5 should fix, about 515 s. Use school-approved pondweed and local disposal instructions; school-use permission for named species was not established.

**v08:** 1 blocker, 6 should fix, about 517 s. Bubble counts are not equivalent to net oxygen exchange.

**v09:** 0 blockers, 4 should fix, about 540 s. Correct the universal vessel and stem claims and distinguish illustrations from independent source evidence.

**v10:** 1 blocker, 4 should fix, about 569 s. Active phloem loading is not universal.

**v11:** 0 blockers, 5 should fix, about 540 s. Identify active loading as the example rather than a universal mechanism.

**v12:** 1 blocker, 5 should fix, about 528 s. Separate osmotic pressure from root pressure.

**Plates:** Four inspected PNGs, reused-asset records, candidate provenance and unresolved work are listed in `assets/brief157-manifest.json`; QA is in `assets/brief157-qa/`. Remaining requested plates are open: several candidates have halos, the agar cube set and cores have not met exact measured proportions, and the matched pot and other states do not yet meet registration and canvas requirements. The relevant design asset briefs also call for passed error checks before painting; no such checks were found. Do not treat the outstanding artwork as delivered.

### Brief 165 work in progress (3 November 2026; not a completed hand-in)

An experimental sentence-by-sentence Google generator is in `scripts/generate-google-audio.mjs`; the pronunciation rules and word-to-display mapping are in `scripts/lib/google-pronunciation.mjs`. The independently voiced `math-constant-override` sample was aligned with WhisperX and all 18 mapped word starts and ends agree with their spoken-word alignment endpoints to 0 ms; the detailed rows are `out/google-tts-pilot/math-constant-mapping-check.json`. This verifies mapping only, not true timing accuracy. An existing pilot take was used as a cached fixture; the generator wrote a WAV, alignment, generation metadata and a lesson data file, the caption exporter wrote three cues, and a second run reused the take. No new Google request was made for this fixture; its cost figure is the historical sample usage, not a new charge.

Open before production: pronunciation rules still require review against every lesson, sentence-level voice consistency and text segmentation need listening and full-scene validation, and the generator does not yet assemble or validate all scene cue frames, holds and production durations. The D01 design is present as Markdown but no corresponding Remotion lesson or composition was found; no D01 audio or preview has been generated, no cue timing verified, and no build or pilot render run. Therefore Part 2 has not passed and Part 3 must not start. Human listening remains required. No key was printed or logged, no design edited and no commit made.

### Brief 165 d01 voicing progress and quota hold (3 November 2026; not a completed hand-in)

The revised brief's voice-first sequence is in use. `lessons/math-a12-d01/voice-manifest.json` and `lesson.json` contain the 16 extracted narration scenes, with two 10-second countdown holds and a 60-second notes hold. Eleven scenes, `scene-01` through `scene-11`, have saved Google WAV takes, WhisperX alignment and generation sidecars under `public/audio/math-a12-d01/`. Their saved metadata records 5,172 characters, 1,370 input tokens, 9,867 output tokens and an estimated US$0.089488 at the stated rates. These totals exclude any incomplete sentence cache and are estimates, not an account invoice. The already saved takes were reused on restart.

Google returned HTTP 429 at scene 12: the Tier 1 model limit is 100 requests per day, with the response estimating 20 hours 36 minutes 55 seconds until retry. Retrying over several minutes did not clear it. Scenes 12 to 16 and the measured lesson file are not complete; alignment and caption export for the whole lesson, hold validation, and human listening remain outstanding. Do not start the remaining Part 3 lessons until d01 passes. Sentence-by-sentence requests used the quota quickly; a future run should reduce request count while retaining independent alignment and never replace unchanged takes. Brief 166 also needs the completed measured d01 input. No key was printed or logged and no design or commit was made.

### Brief 165 quota recheck and partial validation (3 November 2026)

Google still returns HTTP 429 for d01 scene 12, reporting the Tier 1 daily limit and about 20 hours 25 minutes until retry. The 11 saved scenes were reused. `work/brief165/partial-validation.json` records checks of each saved alignment's text, ordered timestamps, media bounds and generation metadata. This does not assess spoken-word accuracy or replace listening. Scenes 12 to 16, the complete measured lesson, caption export, and briefs 166 and 161 to 164 remain outstanding.

### Brief 165 additional d01 progress (3 November 2026)

A retry reused scenes 01 to 11 and saved and aligned the first two sentences of scene 12 in the sentence cache. The third request hit HTTP 429 again; Google reported approximately 20 hours 13 minutes until the daily limit resets. The scene 12 take and measured lesson are not yet complete; the cached sentences will be reused on the next retry.

### Brief 165 d01 continuation (3 November 2026)

Scenes 12 and 13 are now generated and aligned; the first sentence of scene 14 is cached. The partial structural and media-bound validation was rerun for all 13 completed scenes. Google returned HTTP 429 on scene 14 sentence 2, with a stated retry estimate of 19 hours 58 minutes. Scenes 14 to 16 and final measured lesson validation remain open; saved takes and cached sentences will be reused.

### Brief 165 partial caption check (3 November 2026)

A retry reused the 13 finished scenes but the next Google request was still rejected with HTTP 429; Google estimated 19 hours 41 minutes until the daily reset. A temporary measured lesson containing just those 13 saved scenes successfully exported 201 caption cues to `work/brief165/partial-captions`. This is a partial check only; the full d01 caption export still needs all 16 scenes.

### Brief 165 speech quota check (4 November 2026)

A retry saved and aligned one more sentence of d01 scene 14 before Google again returned HTTP 429. Google reported the Tier 1 daily limit and estimated 12 hours 20 minutes until retry. The scene remains incomplete; cached sentences and completed takes are preserved.

### Brief 165 request-budget preparation (4 November 2026)

The 4 November update requires one Google request per scene. The current `scripts/generate-google-audio.mjs` still requests one sentence at a time and must be changed before further generation. `work/brief165-pause-test.mjs` tests a simple nearest-silence method on the 13 existing d01 scene takes against their saved alignments: the worst sentence-boundary differences per scene range from 0.32 to 1.83 seconds. Those takes were assembled from sentence recordings, so they are useful a preliminary test but are not proof for whole-scene output. The naive method is not accurate enough to accept without refinement and validation. Scenes 01 to 13 and the first two cached scene 14 sentences remain unchanged. The speech quota has not been spent on these tests.

### Brief 161 work in progress (4 November 2026; not a completed hand-in)

Source learning reviews and independent maths checks for f01 to f11 are saved as `checks/m-a12fNN-learning-review.md` and `checks/m-a12fNN-claude-science-check.md`, with independent calculations in `work/brief161/`. Confirmed site findings are recorded as items 76 to 92 in `site-corrections-maths-a12.md`. f11 has two blockers: the exact repayment total needs a consistent final-payment convention, and its summary incorrectly sets the balance to zero for the intermediate amount-owing calculation. f12 to f15 and g01 to g03 remain to be reviewed; this is not the completed brief 161 hand-in.

## Brief 161 hand-in (4 November 2026)

Learning reviews and maths checks for f01 to f15 and g01 to g03 are under `checks/m-a12fNN-learning-review.md`, `checks/m-a12fNN-claude-science-check.md`, and the corresponding `m-a12gNN` files. Independent SymPy and recurrence evidence is in `work/brief161/`; confirmed site findings are in `site-corrections-maths-a12.md` items 76 to 101. The 2024 syllabus pages were refreshed; the exact 2024 reference-sheet version is still unverified. No design edits, audio, renders or commits. Counts below refer to learning reviews; f13's maths check also reports one author-note correction. Times are design estimates.

**f01:** 0 blockers, 1 should fix; 5,637 joined characters, about 524 s. Use a dummy index that does not also name the upper limit.

**f02:** 0 blockers, 1 should fix; 5,680 characters, about 527 s. Distinguish testing a finite list from proving the difference for an infinite sequence.

**f03:** 0 blockers, 1 should fix; 5,733 characters, about 531 s. Arithmetic sequences guarantee equal end-pairs; they are not the only sequences with that property.

**f04:** 0 blockers, 2 should fix; 5,722 characters, about 530 s. Scope the time-index and growing-percentage claims to the illustrated models.

**f05:** 0 blockers, 3 should fix; 5,972 characters, about 549 s. Scope the negative-start and even-gap cases and state the nonzero-term condition for ratio division.

**f06:** 0 blockers, 1 should fix; 5,648 characters, about 525 s. The numerator's sign also depends on the first term.

**f07:** 0 blockers, 2 should fix; 5,157 characters, about 488 s, accepted by root. Scope the negative-ratio comparison and explain the zero-tail x = 0 case separately.

**f08:** 0 blockers, 2 should fix; 6,124 characters, about 560 s. Keep the bacteria crossing to the first whole hour unless a continuous model is specified; scope the time-zero summary.

**f09:** 0 blockers, 2 should fix; 6,184 characters, about 565 s. State the zero-interest case and scope the loan-curve claim.

**f10:** 0 blockers, 2 should fix; 5,691 characters, about 530 s. The first repayment change is $352.71, not $500; distinguish the smooth term curve from whole-payment counts.

**f11:** 2 blockers, 1 should fix; 6,040 characters, about 555 s. Reconcile the actual final payment with the stated total; do not set an intermediate outstanding balance to zero. Distinguish a zero denominator from a negative ratio.

**f12:** 0 blockers, 2 should fix; 5,584 characters, about 515 s. Specify the nominal-rate conversion and the smaller final withdrawal.

**f13:** 0 blockers, 3 should fix in learning review; 5,609 characters, about 519 s. State the zero-rate case, distinguish exact from rounded balance and scope the memory aid. The maths check also corrects an unrounded author-note value.

**f14:** 0 blockers, 3 should fix; 5,554 characters, about 513 s. Give learners a digital exploration and scope the rate/time and rounding claims.

**f15:** 0 blockers, 2 should fix; 5,539 characters, about 510 s. Scope the final summary to the contribution model and include the zero-rate case.

**g01:** 0 blockers, 2 should fix; 5,697 characters, about 528 s. Name the division by two and scope the one-equation claim to the linear example.

**g02:** 0 blockers, 1 should fix; 5,421 characters, about 515 s, accepted by root. A rate can have an integral even when readings do not determine its exact value.

**g03:** 1 blocker, 2 should fix; 5,832 characters, about 538 s. Separate the unbounded normal model from the bounded uniform givens; explain maximum-loan rounding from the unrounded value and include zero-rate cases.

### Brief 165 handover voicing progress (4 November 2026)

For handover, the remaining four sentences of d01 scene 14 were saved as one Google request in the scene 14 cache, preserving its two earlier aligned sentence takes. Whole-scene Google takes for scenes 15 and 16 were also saved in their respective `work/google-tts-cache/scene-15-*` and `scene-16-*` folders, one request each. These three new takes have not yet been segmented or aligned, and no measured lesson, complete captions, cue-timing check, human listening or render has been produced. The production generator still needs the 4 November request-budget changes before use on additional lessons. No key was printed or logged.

### Brief 165 local continuation (4 November 2026)

All 16 d01 scenes are now assembled from the preserved takes, with no new Google requests and no regeneration. Scene 14 retains its first two sentence takes and appends the saved suffix; scenes 15 and 16 use the saved whole recordings. `work/brief165-align-saved.py` locates sentence gaps using forced alignment of these short clips, chooses minimum-energy cuts in those gaps, and force-aligns each sentence separately. The sentence boundaries and word scores are preserved alongside the raw cache takes. `work/brief165-assemble-saved.mjs` checks cached pronunciation text before assembling the missing scene files and measured lesson.

Outputs: `lessons/math-a12-d01/measured/lesson.json`, `measured/validation.json`, and `measured/captions/` (222 cues). `node work/brief165-validate.mjs` passes all 16 scenes for display identity, ordered finite timings, audio bounds, frame durations, two 10-second countdowns and the 60-second notes hold. Speech totals 482.72 seconds; generation metadata totals an estimated US$0.10947 in historical saved usage. This continuation spent US$0 on speech.

Alignment quality remains open: the scene 14 suffix gives the mathematical word `e` a zero forced-alignment score at 2.527 to 2.547 seconds into that suffix. Other low-score words are recorded in its cached alignment. This is not proof that `e` is missing or wrong, but the exact recording needs listening before accepting its timing. Do not call this a passed pronunciation or exact-cue check. The production generator still uses sentence requests and must be repaired before Part 3; no additional lessons were voiced. No render, commit or push was made.

### Brief 162 source-review continuation (4 November 2026)

Source learning reviews and maths checks now exist for all twelve available s01 to s12 designs, in `checks/m-a12sNN-learning-review.md` and `checks/m-a12sNN-claude-science-check.md`. s01 is the earlier hand-in; this continuation added s02 to s12. Exact SymPy, enumeration, seeded-simulation and inverse-normal evidence is under `work/brief162/`. Confirmed local-site findings were added as items 102 to 105, without editing the site or designs. The official random-variables page was refreshed, but its public glossary placeholders and the unverified new reference-table provenance remain open; the reports do not claim those checks are complete. Additional proposed site findings in the designs still need a dedicated source reconciliation. No speech or renders were made for this brief.

s02: 0 blockers, 3 should fix; 5,359 joined characters. Clarify equal-chance selection and independent dice, and apply the accepted feedback trim. About 506 s by the design.

s03: 0 blockers, 2 should fix; 5,677 characters. Correct the author-only direction of 1.7 relative to 1.5, and state the averaging condition for the policy example. The stored 2,000-roll checkpoints reproduce. About 529 s by the design.

s04: 0 blockers, 3 should fix; 6,430 characters. Separate exact continuous times from rounded repeated readings, scope the CDF reaching 1 to bounded support, and identify example data. About 567 s by the design.

s05: 0 blockers, 2 should fix; 5,707 characters. Remove the invisible metadata character and reconcile the official interval form in the CDF quote. Probability and density calculations agree. About 520 s by the design.

s06: 0 blockers, 2 should fix; 5,599 characters. Scope the fixed-window argument to its symmetric hump and replace the universal right-end claim about F. Retaining s04's CDF in the new quartile task is justified.

s07: 0 blockers, 2 should fix; 5,604 characters. State uniform arrival phase for the bus model and keep moving windows wholly inside the support. Preserve the accepted rounding-error example and character floor.

s08: 0 blockers, 1 should fix; 5,586 characters. Replace the unsupported exam-marking assertion. The half-sine and cosine application calculations agree; preserve decision 58 and the character floor.

s09: 0 blockers, 2 should fix; 5,641 characters. Identify simulated fills and avoid treating the shape checklist as sufficient evidence of normal fit. Seeded histogram and peg-board counts reproduce, including 924 of 4,096 central paths.

s10: 0 blockers, 2 should fix; 6,048 characters. Distinguish the 194 cm threshold from the smaller tail above 196 cm, and apply the accepted feedback trim. PDF derivatives and empirical areas agree.

s11: 0 blockers, 1 should fix; 5,568 characters. The displayed positive-z cumulative table is mathematically consistent, but its official new-syllabus reference-sheet provenance is not yet established. Keep exact and rounded bolt probabilities distinct.

s12: 1 blocker, 3 should fix; 5,366 characters. At sigma=2, mean 380.15 gives an underweight tail about 0.005012, exceeding the stated 0.5% limit; a cent-based setting requires 380.16. Also correct the universal 508.64 threshold statement, distinguish the table-based 1006.15 from the two-decimal inverse-normal answer 1006.16, and apply the named feedback trim. Preserve the accepted short length.

### Brief 163 first source review (4 November 2026; brief remains in progress)

FA2 v13 learning and science reports are `checks/y11b-fa2-v13-learning-review.md` and `checks/y11b-fa2-v13-science-check.md`: 0 blockers, 3 should fix. They retain the two-control explanation and water-stress response, and ask for the usual-plant scope, the water-supply condition on summary chips, and a conditional wind comparison in feedback. The official syllabus page and direct wind/stomatal research were consulted. Asset provenance, alpha, registration, near-match exam search and further site reconciliation remain open. No plate was painted and no narration changed. The expanded brief covers FA2 v13 to v33 plus 30 existing FA3 designs (v05 and v16 held), rather than only the three FA3 designs in its title.

### Brief 165 generator update (4 November 2026; listening and further lessons remain open)

`scripts/generate-google-audio.mjs` now sends a whole scene in one Google request, caches the returned whole take, preserves completed unchanged scenes and refuses to replace an incomplete legacy sentence cache. It counts required scene requests before a lesson, uses `GOOGLE_TTS_REQUEST_BUDGET` (0 to 90; default 0 permits cache-only work), and enforces a 90-attempt rolling local cap from `work/google-tts-requests.jsonl`. That ledger covers this updated generator only, not historical calls or requests from another client. Do not treat it as an authoritative account quota reading. A 429 is not retried in a request loop. Historical cached usage is kept separate from new run cost. No new Google request was made while implementing or verifying this change.

`scripts/align-google-scene.py` bounds Wav2Vec2 transformer inference to overlapping blocks on its exact 20 ms frame grid. A forced-alignment guide locates inter-sentence gaps; minimum-energy cuts are then used for separate sentence alignments. It writes word scores and keeps human listening pending. The 45.56-second saved d01 scene 03 completed: 116 word starts differed from its prior independent-sentence assembly by median 4 ms, 95th percentile 14 ms and maximum 19 ms. This measures agreement with earlier alignment, not human ground truth; several low-score mathematical letters remain listening flags.

Verification: syntax passes; all 16 d01 takes reused with zero requests and an unchanged measured lesson; a saved whole-scene fixture assembled into a new output with zero requests; an insufficient whole-lesson budget was rejected before any speech or output. Evidence: `work/brief165/generator-verification.json`, `long-alignment-check.json`, the fixture files, and `work/brief165-check-generator.mjs`. The 18-word pronunciation mapping check still reports 0 ms mapping differences. Part 3 has not started: pronunciation and alignment quality for the exact d01 recording remain unapproved, and each later lesson still needs its per-lesson pronunciation check. Brief 166 now has its measured input but its build and preview are outstanding. No commit, push or full export.


### Brief 163 FA2 v14 source review (4 November 2026)

Reports: `checks/y11b-fa2-v14-learning-review.md` and `checks/y11b-fa2-v14-science-check.md`. 1 blockers, 2 should fix; 5,585 joined characters. Scene 8 assumes the uptake-minus-loss bias is equal with and without the fan. No storage or metabolism measurements establish that. Keep the measured uptake conclusion and describe transpiration as an inference; replace the equal-bias assertion. Quote, route, image and practical clearances remain open. No design or speech changed.


### Brief 163 FA2 v15 source review (4 November 2026)

Reports: `checks/y11b-fa2-v15-learning-review.md` and `checks/y11b-fa2-v15-science-check.md`. 0 blockers, 2 should fix; 5,777 joined characters. Scene 6 infers sugar transport because phloem is unstained. That dye result does not establish what phloem carries. Recall the earlier established phloem function instead of calling this a necessary inference. Quote, route, image and practical clearances remain open. No design or speech changed.


### Brief 163 FA2 v16 source review (4 November 2026)

Reports: `checks/y11b-fa2-v16-learning-review.md` and `checks/y11b-fa2-v16-science-check.md`. 1 blockers, 1 should fix; 5,954 joined characters. Scene 2 says an amoeba meets all four needs by diffusion. Food is engulfed by phagocytosis and excess water is handled by a contractile vacuole. Replace with the explicit gas/waste diffusion and food-engulfment distinction; cut the repeated surface-distance phrase to fund it. Quote, route, image and practical clearances remain open. No design or speech changed.


### Brief 163 FA2 v17 source review (4 November 2026)

Reports: `checks/y11b-fa2-v17-learning-review.md` and `checks/y11b-fa2-v17-science-check.md`. 0 blockers, 2 should fix; 5,957 joined characters. Scene 8 calls all products soluble after naming fatty acids. Long-chain fatty acids have low water solubility. Replace the final phrase with "small enough for the next absorption steps". Quote, route, image and practical clearances remain open. No design or speech changed.


### Brief 163 FA2 v18 source review (4 November 2026)

Reports: `checks/y11b-fa2-v18-learning-review.md` and `checks/y11b-fa2-v18-science-check.md`. 1 blockers, 2 should fix; 5,567 joined characters. Feedback 10b says digestion is intact in untreated coeliac disease. The source facts acknowledge loss of brush-border enzymes. Replace the absolute statement with "Even when nutrients have been digested, damaged villi absorb less"; retain surface area as the central reason. Quote, route, image and practical clearances remain open. No design or speech changed.


### Brief 163 y11b-fa2-v19 source review (4 November 2026)

`checks/y11b-fa2-v19-learning-review.md` and `checks/y11b-fa2-v19-science-check.md`: 0 blockers, 2 should fix; 6,004 joined characters. Calculate the capillary enlargement tag from the final drawn size and biological dimensions. The source notes its own proposed 50-fold tag is inconsistent with 4 mm versus 8 micrometres. Keep this as an artwork hold until measured, rather than reproducing the draft label. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v20 source review (4 November 2026)

`checks/y11b-fa2-v20-learning-review.md` and `checks/y11b-fa2-v20-science-check.md`: 0 blockers, 2 should fix; 5,846 joined characters. Specify mature mammalian red cells before the nucleus and mitochondria claims. Many other vertebrate red cells retain nuclei. Add 'mature mammalian' by shortening the repeated haemoglobin-space sentence, retaining the cause. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v21 source review (4 November 2026)

`checks/y11b-fa2-v21-learning-review.md` and `checks/y11b-fa2-v21-science-check.md`: 0 blockers, 3 should fix; 5,537 joined characters. Replace 'four hours later, your last meal is long absorbed' in teaching and attempt 1 with 'between meals, after absorption has ended'. Mixed-meal absorption does not necessarily end at four hours. The replacement states the actual condition and is shorter. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v22 source review (4 November 2026)

`checks/y11b-fa2-v22-learning-review.md` and `checks/y11b-fa2-v22-science-check.md`: 0 blockers, 3 should fix; 5,889 joined characters. Scene 6 equates blood holding as much oxygen as air with equilibrium. Total oxygen content includes haemoglobin binding and is not the diffusion driver. Replace with 'the oxygen partial pressures would approach equilibrium', briefly glossed as the oxygen pressure on each side. Fund it by cutting the repeated no-difference sentence. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v23 source review (4 November 2026)

`checks/y11b-fa2-v23-learning-review.md` and `checks/y11b-fa2-v23-science-check.md`: 0 blockers, 2 should fix; 5,713 joined characters. Scope the outlet-narrowing prediction to modest efferent constriction with maintained incoming flow. Strong constriction can lower renal flow enough to reduce filtration. Replace 'even more' with 'a little more' and state the maintained-flow condition on the model. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v24 source review (4 November 2026)

`checks/y11b-fa2-v24-learning-review.md` and `checks/y11b-fa2-v24-science-check.md`: 1 blockers, 1 should fix; 5,879 joined characters. Scene 6 says the tubule has no carriers taking urea back and that the same urea remains while water leaves. Urea is substantially reabsorbed and recycled, including by transporters. Replace with 'Some urea is reabsorbed, but proportionally more water returns, so the remaining urea becomes concentrated'. Apply the repair to feedback 12b and the notes; cut the etymology sentence to fund it. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v25 source review (4 November 2026)

`checks/y11b-fa2-v25-learning-review.md` and `checks/y11b-fa2-v25-science-check.md`: 0 blockers, 2 should fix; 5,874 joined characters. Scene 6 says the machine never lets glucose go because there is no gradient. Individual molecules can cross both ways; only net transfer is zero in the ideal matched case. Replace with 'has no net glucose loss in this matched example'. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v26 source review (4 November 2026)

`checks/y11b-fa2-v26-learning-review.md` and `checks/y11b-fa2-v26-science-check.md`: 0 blockers, 2 should fix; 5,355 joined characters. Scene 9 says 'the brain detects the cold' mixes up two parts, although scene 3 correctly places temperature receptors in the brain. The defect is lack of specific roles, not that the brain cannot detect temperature. Replace with 'Name the temperature receptors and the integrating hypothalamic cells, even when they occupy the same region'. Fund it by cutting the repeated final detect/decide line. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v27 source review (4 November 2026)

`checks/y11b-fa2-v27-learning-review.md` and `checks/y11b-fa2-v27-science-check.md`: 0 blockers, 3 should fix; 5,426 joined characters. Scene 7 says the loop only acts after a change, but the preceding skin-cooling example includes anticipatory peripheral input before core temperature falls. Say 'Feedback corrections take time, so small departures can occur' rather than claiming every response waits for the controlled variable to change. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v28 source review (4 November 2026)

`checks/y11b-fa2-v28-learning-review.md` and `checks/y11b-fa2-v28-science-check.md`: 0 blockers, 3 should fix; 5,746 joined characters. Apply root decision 27: replace the last handoff's 'takes no orders at all' with 'isn't run by the pituitary'. The source still contains the rejected absolute wording. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v29 source review (4 November 2026)

`checks/y11b-fa2-v29-learning-review.md` and `checks/y11b-fa2-v29-science-check.md`: 0 blockers, 3 should fix; 5,659 joined characters. Apply the upstream pancreatic handoff repair consistently: 'takes no orders from the pituitary' should become 'isn't run by the pituitary'. The gland still receives neural and hormonal influences. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v30 source review (4 November 2026)

`checks/y11b-fa2-v30-learning-review.md` and `checks/y11b-fa2-v30-science-check.md`: 0 blockers, 3 should fix; 5,675 joined characters. Apply root decision 27's hook fallback 'and your blood glucose climbs' rather than guaranteeing it climbs above the usual range. This is shorter. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v31 source review (4 November 2026)

`checks/y11b-fa2-v31-learning-review.md` and `checks/y11b-fa2-v31-science-check.md`: 1 blockers, 1 should fix; 5,539 joined characters. Hold the named Leone dataset and its plotted 'real measured mean' labels until the paper's tables, plotted values, sample size and insulin units can be checked against accessible full text. Preserve the cached references and do not substitute invented measurements. Record the access failures as the blocker and move on. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v32 source review (4 November 2026)

`checks/y11b-fa2-v32-learning-review.md` and `checks/y11b-fa2-v32-science-check.md`: 0 blockers, 3 should fix; 5,934 joined characters. The general statement that cells cannot get glucose despite high blood glucose should be scoped to impaired insulin-dependent uptake in muscle and fat. Many cells, including brain cells, have insulin-independent transport. Replace 'cells' with the named tissues and cut the repeated fuel-shortage phrase. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa2-v33 source review (4 November 2026)

`checks/y11b-fa2-v33-learning-review.md` and `checks/y11b-fa2-v33-science-check.md`: 0 blockers, 2 should fix; 5,742 joined characters. The last adaptation sentence follows heat acclimatisation with 'some of those differences are inherited'. Separate acquired acclimatisation from inherited variation explicitly, so the viewer does not infer inherited sweating changes from exercise. Replace with 'Acclimatisation is acquired; some other differences in tolerance are inherited'. Fund it by cutting the repeated individual-differences list. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v01 source review (4 November 2026)

`checks/y11b-fa3-v01-learning-review.md` and `checks/y11b-fa3-v01-science-check.md`: 0 blockers, 3 should fix; 5,905 joined characters. Scene 6 turns pale-beetle counts directly into pale-allele frequencies without defining dominance or genotypes. Say 'the inherited pale form becomes more common' instead. This is shorter and keeps the intended evolution claim. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v02 source review (4 November 2026)

`checks/y11b-fa3-v02-learning-review.md` and `checks/y11b-fa3-v02-science-check.md`: 0 blockers, 2 should fix; 5,377 joined characters. The drought/root-depth attempt assumes deeper soil still contains accessible water. Add that condition to the stem or make the conclusion conditional on it; otherwise greater root depth is not guaranteed to be favoured. Replace the generic grassland opening phrase to keep the length neutral. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v03 source review (4 November 2026)

`checks/y11b-fa3-v03-learning-review.md` and `checks/y11b-fa3-v03-science-check.md`: 0 blockers, 3 should fix; 5,514 joined characters. The 'today in most of Britain' moth statement and below-one-in-ten tag require current representative surveys; the cited 1990s/2000s studies do not establish 2026 prevalence. Use a dated decline statement and remove the unsupported current tag, or retain it as a verification hold. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v04 source review (4 November 2026)

`checks/y11b-fa3-v04-learning-review.md` and `checks/y11b-fa3-v04-science-check.md`: 0 blockers, 4 should fix; 5,701 joined characters. Replace 'around fifteen' with the approved 'more than a dozen' until the current classification and geographical scope are sourced. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v06 source review (4 November 2026)

`checks/y11b-fa3-v06-learning-review.md` and `checks/y11b-fa3-v06-science-check.md`: 0 blockers, 3 should fix; 5,681 joined characters. Scope the opening 'marsupials fill most roles' to the native terrestrial examples and historical period being discussed. Native placental bats and rodents are diverse, and modern introductions change the present-day comparison. Replace the general clause with a specific contrast. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v07 source review (4 November 2026)

`checks/y11b-fa3-v07-learning-review.md` and `checks/y11b-fa3-v07-science-check.md`: 0 blockers, 2 should fix; 5,650 joined characters. The white-sheet control is treated as proving the predator did not prefer red and that camouflage caused the shift. Comparable visibility and a small number of trials cannot prove that. Replace 'shows' with 'supports' and say the control makes a simple colour preference less likely. Replace the existing certainty clause without adding a scene. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v08 source review (4 November 2026)

`checks/y11b-fa3-v08-learning-review.md` and `checks/y11b-fa3-v08-science-check.md`: 0 blockers, 3 should fix; 5,547 joined characters. Do not present missing mutation as a wrong reason for the observed standing-variation shift. It limits claims about the origin of new variation, not the selection mechanism already modelled. Replace the scene 3 contrast with this claim-specific distinction. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v09 source review (4 November 2026)

`checks/y11b-fa3-v09-learning-review.md` and `checks/y11b-fa3-v09-science-check.md`: 0 blockers, 2 should fix; 5,607 joined characters. Replace the claim that both wolf and thylacine hunted large prey with the approved 'hunted other animals'. Preserve convergence in feeding morphology without making the disputed prey-size claim. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v10 source review (4 November 2026)

`checks/y11b-fa3-v10-learning-review.md` and `checks/y11b-fa3-v10-science-check.md`: 0 blockers, 2 should fix; 5,299 joined characters. The generic rule 'Name it and you get half ... so that ... get the mark' asserts a marking scheme for every question. Replace with 'Name the feature, explain its mechanism, then link it to survival'. This is shorter and preserves the useful answer structure. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v11 source review (4 November 2026)

`checks/y11b-fa3-v11-learning-review.md` and `checks/y11b-fa3-v11-science-check.md`: 0 blockers, 3 should fix; 5,673 joined characters. Use decision 20's fallback 'costs little gas exchange' rather than 'costs the least'. The latter compares unspecified costs across traits without supporting measurements. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v12 source review (4 November 2026)

`checks/y11b-fa3-v12-learning-review.md` and `checks/y11b-fa3-v12-science-check.md`: 0 blockers, 3 should fix; 5,841 joined characters. Attempt 1 and its feedback conclude the Banksia has more effective structures from percentage mass loss alone, contradicting scene 11's limit. Conclude only that it lost a smaller fraction of fresh mass under these conditions; keep observed structures as a consistent explanation, not proof. Replace the categorical conclusion. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v13 source review (4 November 2026)

`checks/y11b-fa3-v13-learning-review.md` and `checks/y11b-fa3-v13-science-check.md`: 0 blockers, 2 should fix; 5,523 joined characters. The dunnart feedback says an ectotherm cannot make internal heat. All metabolising animals make heat, and some primarily ectothermic animals use episodic thermogenesis. Say the dunnart uses substantial regulated metabolic heat to rewarm; replace the absolute comparison. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v14 source review (4 November 2026)

`checks/y11b-fa3-v14-learning-review.md` and `checks/y11b-fa3-v14-science-check.md`: 0 blockers, 2 should fix; 5,605 joined characters. Scene 8 says an endotherm reading of five degrees must be an error. Some hibernating endotherms reach such low temperatures. Replace with 'would need checking against its state and conditions', retaining the lesson's own torpor exception. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v15 source review (4 November 2026)

`checks/y11b-fa3-v15-learning-review.md` and `checks/y11b-fa3-v15-science-check.md`: 0 blockers, 2 should fix; 5,310 joined characters. Use all relevant dissolved particles, rather than salt alone, in the osmosis definition. Otherwise the shark's retained urea cannot explain its later osmotic comparison. Replace the repeated more-water/fewer-salts phrasing with the existing FA1 water-potential meaning at this level. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v17 source review (4 November 2026)

`checks/y11b-fa3-v17-learning-review.md` and `checks/y11b-fa3-v17-science-check.md`: 0 blockers, 2 should fix; 5,650 joined characters. The description says both tempo models run on natural selection as though that is the sole evolutionary process. Both are compatible with selection and drift; tempo alone does not identify the mechanism. Replace with 'Both describe evolutionary tempo; neither requires a different inheritance mechanism'. Cut the repeated ramp/staircase sentence if needed. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v18 source review (4 November 2026)

`checks/y11b-fa3-v18-learning-review.md` and `checks/y11b-fa3-v18-science-check.md`: 1 blockers, 2 should fix; 5,896 joined characters. Hold the four named dataset charts until their original reports, sample denominators, resistance definitions and Table 3 district values are inspected. The design records inaccessible and inconsistent evidence. Do not turn its summaries into a passed independent check. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v19 source review (4 November 2026)

`checks/y11b-fa3-v19-learning-review.md` and `checks/y11b-fa3-v19-science-check.md`: 0 blockers, 2 should fix; 5,774 joined characters. Scope 'a fossil ... takes that layer's age' to an unreworked fossil deposited with its layer. A reworked fossil is older than its containing bed. Replace the absolute sentence with the condition, cutting the repeated reading-up-the-cliff phrase to fund it. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v20 source review (4 November 2026)

`checks/y11b-fa3-v20-learning-review.md` and `checks/y11b-fa3-v20-science-check.md`: 0 blockers, 3 should fix; 5,366 joined characters. Do not infer from the younger known Tiktaalik fossils alone that the species or lineage cannot include ancestors of earlier tetrapods. Say the tracks show tetrapods existed earlier than the known Tiktaalik fossils and reinforce that transitional form does not prove direct ancestry. Replace the categorical ancestry sentence. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v21 source review (4 November 2026)

`checks/y11b-fa3-v21-learning-review.md` and `checks/y11b-fa3-v21-science-check.md`: 0 blockers, 3 should fix; 5,875 joined characters. Replace 'both new lineages start with the same copy' with 'both inherit homologous copies from their ancestral population'. This avoids teaching that ancestral variation vanishes at speciation. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v22 source review (4 November 2026)

`checks/y11b-fa3-v22-learning-review.md` and `checks/y11b-fa3-v22-science-check.md`: 0 blockers, 2 should fix; 5,664 joined characters. The theory description says natural selection caused the changes along each branch as though all change is selective. Replace with 'natural selection explains adaptive changes, alongside other evolutionary processes'. Cut the repeated two-parts label to fund it. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v23 source review (4 November 2026)

`checks/y11b-fa3-v23-learning-review.md` and `checks/y11b-fa3-v23-science-check.md`: 0 blockers, 3 should fix; 5,843 joined characters. Scene 7 rules pH out because its zone means are nearly equal. Say 'the measured pH difference does not explain this contrast' rather than 'pH can't explain'. This is a shorter, evidence-matched conclusion. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v24 source review (4 November 2026)

`checks/y11b-fa3-v24-learning-review.md` and `checks/y11b-fa3-v24-science-check.md`: 0 blockers, 2 should fix; 5,965 joined characters. Apply decision 24 in speech, sorter and notes: salinity is measured mainly in water; salty soils use different methods. The current 'only in water' statement is not repaired by leaving the land cell blank. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v25 source review (4 November 2026)

`checks/y11b-fa3-v25-learning-review.md` and `checks/y11b-fa3-v25-science-check.md`: 0 blockers, 2 should fix; 5,698 joined characters. Call the count of species 'species richness, one measure of diversity'. Then the disease example can correctly say richness stays unchanged, rather than claiming every measure of diversity is unchanged. Replace the existing definition and repeated no-species-lost line. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v26 source review (4 November 2026)

`checks/y11b-fa3-v26-learning-review.md` and `checks/y11b-fa3-v26-science-check.md`: 0 blockers, 2 should fix; 5,861 joined characters. Feedback explains why quadrupling quadrat area does not multiply the expected abundance estimate, but that is not the same as precision staying unchanged. Larger quadrats can improve precision under some spatial patterns. Replace the quality verdict with 'It does not guarantee four times the precision; size, placement, number and patchiness matter'. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v27 source review (4 November 2026)

`checks/y11b-fa3-v27-learning-review.md` and `checks/y11b-fa3-v27-science-check.md`: 0 blockers, 3 should fix; 5,563 joined characters. Apply root decision 30 to the line-transect speech and visual: dandelions occur through twelve metres. Current speech says never past ten metres. Replace ten with twelve without adding a scene. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v28 source review (4 November 2026)

`checks/y11b-fa3-v28-learning-review.md` and `checks/y11b-fa3-v28-science-check.md`: 0 blockers, 4 should fix; 5,575 joined characters. For mark loss in the bead model, replace red beads with unmarked beads one for one. Taking marked beads out changes the population as well as recognition and confounds the intended test. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v29 source review (4 November 2026)

`checks/y11b-fa3-v29-learning-review.md` and `checks/y11b-fa3-v29-science-check.md`: 0 blockers, 2 should fix; 5,009 joined characters. A bare patch beneath a eucalypt does not establish allelopathy: shade, water and litter effects also fit. Replace the causal verdict with the controlled germination comparison already proposed; retain slow or stop rather than universal prevention. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v30 source review (4 November 2026)

`checks/y11b-fa3-v30-learning-review.md` and `checks/y11b-fa3-v30-science-check.md`: 0 blockers, 3 should fix; 5,352 joined characters. Eleven versus six suggests an interaction but does not by itself establish that hungry hares are easier to catch. Replace that mechanistic certainty with the supported conclusion that food and predation jointly affect density. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v31 source review (4 November 2026)

`checks/y11b-fa3-v31-learning-review.md` and `checks/y11b-fa3-v31-science-check.md`: 0 blockers, 4 should fix; 5,134 joined characters. Correct the 24 percent provenance and geographic/time scope. Use the design fallback fell heavily for western NSW unless a matching regional source is produced; do not label the Australia-wide estimate as western NSW evidence. Quote, route, image and practical checks remain open.


### Brief 163 y11b-fa3-v32 source review (4 November 2026)

`checks/y11b-fa3-v32-learning-review.md` and `checks/y11b-fa3-v32-science-check.md`: 0 blockers, 3 should fix; 5,596 joined characters. Non-overlapping ranges from three repeats do not prove that a change is real; sample ranges are not confidence intervals. Replace real with evidence supporting a change, while retaining the same-method and season requirements. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v13 source review (4 November 2026)

`checks/p-y11-fa2-v13-learning-review.md` and `checks/p-y11-fa2-v13-science-check.md`: 0 blockers, 2 should fix; 6,101 joined characters. The repeated no particles claim conflicts with the photon account in v14. Replace it with no material medium or no electrons cross between aerials. Retain the classical field diagram. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v14 source review (4 November 2026)

`checks/p-y11-fa2-v14-learning-review.md` and `checks/p-y11-fa2-v14-science-check.md`: 0 blockers, 2 should fix; 6,098 joined characters. Only ultraviolet and higher photons can damage living molecules is false: visible light can drive photochemical damage and lower-frequency radiation can heat. Replace that sentence with the specific ionisation or UV DNA-damage comparison intended, without declaring lower bands harmless. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v15 source review (4 November 2026)

`checks/p-y11-fa2-v15-learning-review.md` and `checks/p-y11-fa2-v15-science-check.md`: 0 blockers, 4 should fix; 6,168 joined characters. Radio photons are too weak to damage anything and therefore city-wide exposure is safe is an invalid inference. Replace with non-ionising at these frequencies; do not infer exposure safety from photon energy alone. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v16 source review (4 November 2026)

`checks/p-y11-fa2-v16-learning-review.md` and `checks/p-y11-fa2-v16-science-check.md`: 0 blockers, 1 should fix; 5,939 joined characters. Clear air does absorb and scatter some light. Replace none is lost with negligible loss over this modelled path, using the already stated unobstructed-source condition. No new caveat scene is needed. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v17 source review (4 November 2026)

`checks/p-y11-fa2-v17-learning-review.md` and `checks/p-y11-fa2-v17-science-check.md`: 0 blockers, 2 should fix; 6,227 joined characters. A fitted intercept of 0.4 lux is not literally a line through the origin. Replace passes through the origin with consistent with the origin within the stated uncertainty. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v18 source review (4 November 2026)

`checks/p-y11-fa2-v18-learning-review.md` and `checks/p-y11-fa2-v18-science-check.md`: 0 blockers, 1 should fix; 6,044 joined characters. Wet-road reflection is not generally a perfectly level, smooth mirror. Replace normals all point the same way with water smooths some small surface irregularities; retain the specular-versus-diffuse comparison. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v19 source review (4 November 2026)

`checks/p-y11-fa2-v19-learning-review.md` and `checks/p-y11-fa2-v19-science-check.md`: 0 blockers, 1 should fix; 6,287 joined characters. The universal n never less than one claim is not valid for every frequency and medium. State the scope as the ordinary transparent materials and visible-light model being used, replacing the universal sentence rather than adding an advanced exception. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v20 source review (4 November 2026)

`checks/p-y11-fa2-v20-learning-review.md` and `checks/p-y11-fa2-v20-science-check.md`: 0 blockers, 2 should fix; 6,284 joined characters. At zero incidence the refracted angle equals zero, so the table does not show an angle that is always smaller. Replace always smaller with smaller at oblique incidence. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v21 source review (4 November 2026)

`checks/p-y11-fa2-v21-learning-review.md` and `checks/p-y11-fa2-v21-science-check.md`: 0 blockers, 1 should fix; 6,250 joined characters. A little light always reflects is not universal, for example index matching or a suitable polarisation at Brewster angle. Replace always with some light also reflects in this demonstration. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v22 source review (4 November 2026)

`checks/p-y11-fa2-v22-learning-review.md` and `checks/p-y11-fa2-v22-science-check.md`: 0 blockers, 1 should fix; 6,297 joined characters. The opening puzzle is a45-degree internal ray with sine1.06, but the later explanation switches to50 degrees without distinguishing the example. Refer to the original45-degree ray in the answer, or explicitly identify50 as a second case; no added scene. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v23 source review (4 November 2026)

`checks/p-y11-fa2-v23-learning-review.md` and `checks/p-y11-fa2-v23-science-check.md`: 0 blockers, 2 should fix; 5,711 joined characters. Do not round n to1.53 before calculating percentage error. Use the unrounded1.532089 to obtain2.14 percent, about2.1 percent at two significant figures, instead of2.0 percent. Replace the working and feedback line. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v24 source review (4 November 2026)

`checks/p-y11-fa2-v24-learning-review.md` and `checks/p-y11-fa2-v24-science-check.md`: 0 blockers, 3 should fix; 6,211 joined characters. A narrow slit does not keep light the same colour; it changes beam width. Replace that control with the same lamp and colour filter, if a filter is specified, or the same source spectrum. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v25 source review (4 November 2026)

`checks/p-y11-fa2-v25-learning-review.md` and `checks/p-y11-fa2-v25-science-check.md`: 0 blockers, 2 should fix; 6,218 joined characters. Distant clarity with near blur does not uniquely identify hyperopia; presbyopia can do the same. Specify the intended model has insufficient relaxed optical power or a short eyeball in the attempt, replacing an equal-length part of its description. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v26 source review (4 November 2026)

`checks/p-y11-fa2-v26-learning-review.md` and `checks/p-y11-fa2-v26-science-check.md`: 0 blockers, 2 should fix; 6,241 joined characters. A target inside the range of three readings supports correction within the observed resolution; it does not prove exact focus on the mark. Replace corrects the model with consistent with correction within the measured spread. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v27 source review (4 November 2026)

`checks/p-y11-fa2-v27-learning-review.md` and `checks/p-y11-fa2-v27-science-check.md`: 0 blockers, 2 should fix; 5,803 joined characters. Ripple-tank wave speed can depend on frequency as well as depth. State the shallow-water constant-speed assumption for the frequency-doubling calculation; replace the blanket depth-only rule. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v28 source review (4 November 2026)

`checks/p-y11-fa2-v28-learning-review.md` and `checks/p-y11-fa2-v28-science-check.md`: 0 blockers, 3 should fix; 6,319 joined characters. Five crests contain four crest-to-crest intervals. Divide the first-to-fifth distance by four, or measure six crests and divide by five. Repair the ruler illustration, normal method and anomalous-photo calculation together. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v29 source review (4 November 2026)

`checks/p-y11-fa2-v29-learning-review.md` and `checks/p-y11-fa2-v29-science-check.md`: 0 blockers, 2 should fix; 5,855 joined characters. Real headphones do not reduce all noise almost to silence. Replace with reduce some noise, especially steady low-frequency noise; retain the local opposite-phase mechanism. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v30 source review (4 November 2026)

`checks/p-y11-fa2-v30-learning-review.md` and `checks/p-y11-fa2-v30-science-check.md`: 0 blockers, 2 should fix; 5,462 joined characters. The strong-line/calm-line binary cannot justify the claimed spatial average by simply averaging four and zero. Keep the conclusion that interference redistributes intensity but remove that averaging step unless the actual continuous pattern is integrated. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v31 source review (4 November 2026)

`checks/p-y11-fa2-v31-learning-review.md` and `checks/p-y11-fa2-v31-science-check.md`: 0 blockers, 2 should fix; 5,666 joined characters. The closing summary says nodes and antinodes are half a wavelength apart. Adjacent node to antinode is a quarter wavelength; neighbouring nodes or neighbouring antinodes are half. Replace the summary with those correct pairings. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v32 source review (4 November 2026)

`checks/p-y11-fa2-v32-learning-review.md` and `checks/p-y11-fa2-v32-science-check.md`: 0 blockers, 1 should fix; 5,639 joined characters. A forced string can respond at frequencies between resonances. Replace only frequencies the string can make and nothing steady in between with the natural resonance frequencies of the ideal fixed string; retain the harmonic calculation. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v33 source review (4 November 2026)

`checks/p-y11-fa2-v33-learning-review.md` and `checks/p-y11-fa2-v33-science-check.md`: 0 blockers, 3 should fix; 5,784 joined characters. A car passing beside a microphone has a changing radial velocity, so the pitch generally changes continuously around closest approach. High and low constant plateaux apply to ideal directly towards/away motion. Make the model geometry explicit and remove the universal steady-pitch pass-by claim. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v01 source review (4 November 2026)

`checks/p-y11-fa3-v01-learning-review.md` and `checks/p-y11-fa3-v01-science-check.md`: 0 blockers, 0 should fix; 5,653 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v02 source review (4 November 2026)

`checks/p-y11-fa3-v02-learning-review.md` and `checks/p-y11-fa3-v02-science-check.md`: 0 blockers, 1 should fix; 6,211 joined characters. Friction needs rubbing is too restrictive: contact and separation can charge the same materials without sliding. Replace needs rubbing with the rubbing method transfers electrons through repeated contact. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v03 source review (4 November 2026)

`checks/p-y11-fa3-v03-learning-review.md` and `checks/p-y11-fa3-v03-science-check.md`: 0 blockers, 2 should fix; 6,042 joined characters. The halfway neutral point requires equal like charges. State equal on the pair diagram and in its givens if not already explicit; unequal positive charges cancel at a different point between them. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v04 source review (4 November 2026)

`checks/p-y11-fa3-v04-learning-review.md` and `checks/p-y11-fa3-v04-science-check.md`: 0 blockers, 0 should fix; 5,942 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v05 source review (4 November 2026)

`checks/p-y11-fa3-v05-learning-review.md` and `checks/p-y11-fa3-v05-science-check.md`: 0 blockers, 1 should fix; 5,406 joined characters. Final feedback says mg is upward. Weight mg points downward; the balancing electric force is upward. Replace the direction attached to mg and retain the positive charge and four-electrons-lost result. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v06 source review (4 November 2026)

`checks/p-y11-fa3-v06-learning-review.md` and `checks/p-y11-fa3-v06-science-check.md`: 0 blockers, 0 should fix; 5,492 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v07 source review (4 November 2026)

`checks/p-y11-fa3-v07-learning-review.md` and `checks/p-y11-fa3-v07-science-check.md`: 0 blockers, 2 should fix; 6,270 joined characters. The1.7mm breakdown estimate is not a safe working clearance for a5kV supply: breakdown depends on edges and conditions. Replace the how-close safety instruction with a theoretical order-of-magnitude example; require approved insulated/current-limited apparatus for the teacher demonstration. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v08 source review (4 November 2026)

`checks/p-y11-fa3-v08-learning-review.md` and `checks/p-y11-fa3-v08-science-check.md`: 0 blockers, 0 should fix; 6,222 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v09 source review (4 November 2026)

`checks/p-y11-fa3-v09-learning-review.md` and `checks/p-y11-fa3-v09-science-check.md`: 0 blockers, 1 should fix; 6,153 joined characters. Distinguish work done by the field from external work. Across a potential drop the field work is -q deltaV and deltaU=q deltaV. The current qV magnitude shortcut for electrons must explicitly use charge magnitude and voltage drop; otherwise a negative electron produces the wrong energy sign. Replace the existing equation explanation rather than adding a new section. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v10 source review (4 November 2026)

`checks/p-y11-fa3-v10-learning-review.md` and `checks/p-y11-fa3-v10-science-check.md`: 0 blockers, 1 should fix; 5,644 joined characters. Make the signed potential difference explicit as destination minus start in deltaU=q deltaV. Root decision16 defines W as external work here, whereas v09 used field work; retain distinct labels so the two W=qV statements are not contradictory. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v11 source review (4 November 2026)

`checks/p-y11-fa3-v11-learning-review.md` and `checks/p-y11-fa3-v11-science-check.md`: 0 blockers, 0 should fix; 5,583 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v12 source review (4 November 2026)

`checks/p-y11-fa3-v12-learning-review.md` and `checks/p-y11-fa3-v12-science-check.md`: 0 blockers, 3 should fix; 5,579 joined characters. DC need not have a steady magnitude; it is unidirectional and may vary. Replace with steady DC is flat and remove steady size from the general DC definition. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v13 source review (4 November 2026)

`checks/p-y11-fa3-v13-learning-review.md` and `checks/p-y11-fa3-v13-science-check.md`: 0 blockers, 1 should fix; 6,221 joined characters. A sixty-fold nichrome/copper ratio depends on alloy and temperature. Attach a named material-grade reference to the fixed number or replace it with much larger resistance, leaving the qualitative alloy-scattering explanation unchanged. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v14 source review (4 November 2026)

`checks/p-y11-fa3-v14-learning-review.md` and `checks/p-y11-fa3-v14-science-check.md`: 0 blockers, 1 should fix; 5,464 joined characters. That is how a dimmer works implies common mains dimmers operate as rheostats. Replace with a simple resistance control changes this circuit current; retain the stated low-voltage example. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v15 source review (4 November 2026)

`checks/p-y11-fa3-v15-learning-review.md` and `checks/p-y11-fa3-v15-science-check.md`: 0 blockers, 3 should fix; 6,225 joined characters. V/I is not exactly five at every point in the illustrative table. Replace with approximately five within the measurement uncertainty, and draw a fitted line rather than asserting every noisy point has the same exact ratio. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v16 source review (4 November 2026)

`checks/p-y11-fa3-v16-learning-review.md` and `checks/p-y11-fa3-v16-science-check.md`: 0 blockers, 0 should fix; 6,225 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v17 source review (4 November 2026)

`checks/p-y11-fa3-v17-learning-review.md` and `checks/p-y11-fa3-v17-science-check.md`: 0 blockers, 1 should fix; 5,510 joined characters. The final question says fifty megawatts supplied to the city but treats50MW as sending-end input. Replace with power station sends50MW into the lines so the specified current and loss calculation match the givens. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v18 source review (4 November 2026)

`checks/p-y11-fa3-v18-learning-review.md` and `checks/p-y11-fa3-v18-science-check.md`: 0 blockers, 1 should fix; 5,379 joined characters. Charge cannot pile up anywhere and stops at once are too absolute: brief surface-charge changes establish a new steady state. Replace with no continuing accumulation in steady state and current rapidly stops after opening. The circuit rules remain unchanged. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v19 source review (4 November 2026)

`checks/p-y11-fa3-v19-learning-review.md` and `checks/p-y11-fa3-v19-science-check.md`: 0 blockers, 1 should fix; 5,405 joined characters. Apply root decision30: use a resistor for the quantitative12ohm example in scenes3to7. The current design still calls it a lit lamp with fixed resistance. Retain the lamp only in lighting/darkness demonstrations. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v20 source review (4 November 2026)

`checks/p-y11-fa3-v20-learning-review.md` and `checks/p-y11-fa3-v20-science-check.md`: 0 blockers, 1 should fix; 5,150 joined characters. The zero-leftover-energy analogy should compare potential differences around the closed loop, not imply a coulomb has an absolute energy of zero at the battery return. Replace with net energy change around a complete loop is zero. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v21 source review (4 November 2026)

`checks/p-y11-fa3-v21-learning-review.md` and `checks/p-y11-fa3-v21-science-check.md`: 0 blockers, 1 should fix; 5,126 joined characters. Remove the spoken production phrase and the next scene shows why. Replace it with the actual causal transition about an added path, without adding learner text. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v22 source review (4 November 2026)

`checks/p-y11-fa3-v22-learning-review.md` and `checks/p-y11-fa3-v22-science-check.md`: 0 blockers, 1 should fix; 5,899 joined characters. Any mix of series and parallel can be reduced by this method only when the network is actually series-parallel reducible. Replace any mix with these series-parallel networks; do not imply the method covers a bridge network. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v23 source review (4 November 2026)

`checks/p-y11-fa3-v23-learning-review.md` and `checks/p-y11-fa3-v23-science-check.md`: 0 blockers, 3 should fix; 6,243 joined characters. The first attempt measures in a30ohm branch, whose ideal current is.10A, but compares.19A against the.20A main current and calls it5percent low. Either move the meter to the main15ohm resistor or use a.095A branch reading compared with.10A. Repair card and feedback together. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v24 source review (4 November 2026)

`checks/p-y11-fa3-v24-learning-review.md` and `checks/p-y11-fa3-v24-science-check.md`: 0 blockers, 1 should fix; 5,860 joined characters. The field of a single loop is approximately uniform only near its centre, not throughout its entire inside. Replace inside strong and nearly uniform with near the centre, fields add and vary slowly. Do not imply the centre is stronger than positions arbitrarily near the wire. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v25 source review (4 November 2026)

`checks/p-y11-fa3-v25-learning-review.md` and `checks/p-y11-fa3-v25-science-check.md`: 0 blockers, 1 should fix; 5,954 joined characters. Mu0 is measured in the current SI, so4pi*1e-7 is an excellent approximation, not exact. Replace exactly with approximately in the shortcut; retain the syllabus numerical value and all rounded answers. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v26 source review (4 November 2026)

`checks/p-y11-fa3-v26-learning-review.md` and `checks/p-y11-fa3-v26-science-check.md`: 0 blockers, 0 should fix; 5,659 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v27 source review (4 November 2026)

`checks/p-y11-fa3-v27-learning-review.md` and `checks/p-y11-fa3-v27-science-check.md`: 0 blockers, 1 should fix; 6,164 joined characters. Width independence is the long-solenoid approximation away from ends. Keep that condition next to the opening wider-coil verdict and final rule, replacing the absolute width makes no difference wording rather than adding an advanced exception. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v28 source review (4 November 2026)

`checks/p-y11-fa3-v28-learning-review.md` and `checks/p-y11-fa3-v28-science-check.md`: 0 blockers, 2 should fix; 5,620 joined characters. Steel is not always ferromagnetic; some stainless grades are not. Replace their alloys like steel with ferromagnetic alloys such as ordinary carbon steel, consistent with v29 material distinctions. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v29 source review (4 November 2026)

`checks/p-y11-fa3-v29-learning-review.md` and `checks/p-y11-fa3-v29-science-check.md`: 0 blockers, 3 should fix; 5,722 joined characters. Low coercivity does not itself mean low remanent magnetism. Coercivity is the reverse field needed to erase magnetisation; remanence is what remains at zero applied field. Correct the repeated inference and use actual release/remanence evidence for the switchable-core recommendation. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v30 source review (4 November 2026)

`checks/p-y11-fa3-v30-learning-review.md` and `checks/p-y11-fa3-v30-science-check.md`: 0 blockers, 3 should fix; 6,191 joined characters. Removing retained clips does not demagnetise the nail. Keep magnetic history consistent by using an appropriate soft core and a defined reset procedure; clearing clips alone does not remove the cause of the high reading. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v13 source review (4 November 2026)

`checks/p-y11-fa2-v13-learning-review.md` and `checks/p-y11-fa2-v13-science-check.md`: 0 blockers, 0 should fix; 6,101 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v14 source review (4 November 2026)

`checks/p-y11-fa2-v14-learning-review.md` and `checks/p-y11-fa2-v14-science-check.md`: 0 blockers, 2 should fix; 6,098 joined characters. Only ultraviolet and higher photons can damage living molecules is false: visible light can drive photochemical damage and lower-frequency radiation can heat. Replace that sentence with the specific ionisation or UV DNA-damage comparison intended, without declaring lower bands harmless. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v15 source review (4 November 2026)

`checks/p-y11-fa2-v15-learning-review.md` and `checks/p-y11-fa2-v15-science-check.md`: 0 blockers, 4 should fix; 6,168 joined characters. Radio photons are too weak to damage anything and therefore city-wide exposure is safe is an invalid inference. Replace with non-ionising at these frequencies; do not infer exposure safety from photon energy alone. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v16 source review (4 November 2026)

`checks/p-y11-fa2-v16-learning-review.md` and `checks/p-y11-fa2-v16-science-check.md`: 0 blockers, 1 should fix; 5,939 joined characters. Clear air does absorb and scatter some light. Replace none is lost with negligible loss over this modelled path, using the already stated unobstructed-source condition. No new caveat scene is needed. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v17 source review (4 November 2026)

`checks/p-y11-fa2-v17-learning-review.md` and `checks/p-y11-fa2-v17-science-check.md`: 0 blockers, 2 should fix; 6,227 joined characters. A fitted intercept of 0.4 lux is not literally a line through the origin. Replace passes through the origin with consistent with the origin within the stated uncertainty. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v18 source review (4 November 2026)

`checks/p-y11-fa2-v18-learning-review.md` and `checks/p-y11-fa2-v18-science-check.md`: 0 blockers, 0 should fix; 6,044 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v19 source review (4 November 2026)

`checks/p-y11-fa2-v19-learning-review.md` and `checks/p-y11-fa2-v19-science-check.md`: 0 blockers, 0 should fix; 6,287 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v20 source review (4 November 2026)

`checks/p-y11-fa2-v20-learning-review.md` and `checks/p-y11-fa2-v20-science-check.md`: 0 blockers, 2 should fix; 6,284 joined characters. At zero incidence the refracted angle equals zero, so the table does not show an angle that is always smaller. Replace always smaller with smaller at oblique incidence. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v21 source review (4 November 2026)

`checks/p-y11-fa2-v21-learning-review.md` and `checks/p-y11-fa2-v21-science-check.md`: 0 blockers, 0 should fix; 6,250 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v22 source review (4 November 2026)

`checks/p-y11-fa2-v22-learning-review.md` and `checks/p-y11-fa2-v22-science-check.md`: 0 blockers, 0 should fix; 6,297 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v23 source review (4 November 2026)

`checks/p-y11-fa2-v23-learning-review.md` and `checks/p-y11-fa2-v23-science-check.md`: 0 blockers, 2 should fix; 5,711 joined characters. Do not round n to1.53 before calculating percentage error. Use the unrounded1.532089 to obtain2.14 percent, about2.1 percent at two significant figures, instead of2.0 percent. Replace the working and feedback line. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v24 source review (4 November 2026)

`checks/p-y11-fa2-v24-learning-review.md` and `checks/p-y11-fa2-v24-science-check.md`: 0 blockers, 2 should fix; 6,211 joined characters. A narrow slit does not keep light the same colour; it changes beam width. Replace that control with the same lamp and colour filter, if a filter is specified, or the same source spectrum. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v25 source review (4 November 2026)

`checks/p-y11-fa2-v25-learning-review.md` and `checks/p-y11-fa2-v25-science-check.md`: 0 blockers, 2 should fix; 6,218 joined characters. Distant clarity with near blur does not uniquely identify hyperopia; presbyopia can do the same. Specify the intended model has insufficient relaxed optical power or a short eyeball in the attempt, replacing an equal-length part of its description. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v26 source review (4 November 2026)

`checks/p-y11-fa2-v26-learning-review.md` and `checks/p-y11-fa2-v26-science-check.md`: 0 blockers, 1 should fix; 6,241 joined characters. A target inside the range of three readings supports correction within the observed resolution; it does not prove exact focus on the mark. Replace corrects the model with consistent with correction within the measured spread. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v27 source review (4 November 2026)

`checks/p-y11-fa2-v27-learning-review.md` and `checks/p-y11-fa2-v27-science-check.md`: 0 blockers, 2 should fix; 5,803 joined characters. Ripple-tank wave speed can depend on frequency as well as depth. State the shallow-water constant-speed assumption for the frequency-doubling calculation; replace the blanket depth-only rule. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v28 source review (4 November 2026)

`checks/p-y11-fa2-v28-learning-review.md` and `checks/p-y11-fa2-v28-science-check.md`: 1 blockers, 2 should fix; 6,319 joined characters. Five crests contain four crest-to-crest intervals. Divide the first-to-fifth distance by four, or measure six crests and divide by five. Repair the ruler illustration, normal method and anomalous-photo calculation together. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v29 source review (4 November 2026)

`checks/p-y11-fa2-v29-learning-review.md` and `checks/p-y11-fa2-v29-science-check.md`: 0 blockers, 2 should fix; 5,855 joined characters. Real headphones do not reduce all noise almost to silence. Replace with reduce some noise, especially steady low-frequency noise; retain the local opposite-phase mechanism. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v30 source review (4 November 2026)

`checks/p-y11-fa2-v30-learning-review.md` and `checks/p-y11-fa2-v30-science-check.md`: 0 blockers, 2 should fix; 5,462 joined characters. The strong-line/calm-line binary cannot justify the claimed spatial average by simply averaging four and zero. Keep the conclusion that interference redistributes intensity but remove that averaging step unless the actual continuous pattern is integrated. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v31 source review (4 November 2026)

`checks/p-y11-fa2-v31-learning-review.md` and `checks/p-y11-fa2-v31-science-check.md`: 0 blockers, 2 should fix; 5,666 joined characters. The closing summary says nodes and antinodes are half a wavelength apart. Adjacent node to antinode is a quarter wavelength; neighbouring nodes or neighbouring antinodes are half. Replace the summary with those correct pairings. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v32 source review (4 November 2026)

`checks/p-y11-fa2-v32-learning-review.md` and `checks/p-y11-fa2-v32-science-check.md`: 0 blockers, 1 should fix; 5,639 joined characters. A forced string can respond at frequencies between resonances. Replace only frequencies the string can make and nothing steady in between with the natural resonance frequencies of the ideal fixed string; retain the harmonic calculation. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa2-v33 source review (4 November 2026)

`checks/p-y11-fa2-v33-learning-review.md` and `checks/p-y11-fa2-v33-science-check.md`: 0 blockers, 3 should fix; 5,784 joined characters. A car passing beside a microphone has a changing radial velocity, so the pitch generally changes continuously around closest approach. High and low constant plateaux apply to ideal directly towards/away motion. Make the model geometry explicit and remove the universal steady-pitch pass-by claim. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v01 source review (4 November 2026)

`checks/p-y11-fa3-v01-learning-review.md` and `checks/p-y11-fa3-v01-science-check.md`: 0 blockers, 0 should fix; 5,653 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v02 source review (4 November 2026)

`checks/p-y11-fa3-v02-learning-review.md` and `checks/p-y11-fa3-v02-science-check.md`: 0 blockers, 1 should fix; 6,211 joined characters. Friction needs rubbing is too restrictive: contact and separation can charge the same materials without sliding. Replace needs rubbing with the rubbing method transfers electrons through repeated contact. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v03 source review (4 November 2026)

`checks/p-y11-fa3-v03-learning-review.md` and `checks/p-y11-fa3-v03-science-check.md`: 0 blockers, 2 should fix; 6,042 joined characters. The halfway neutral point requires equal like charges. State equal on the pair diagram and in its givens if not already explicit; unequal positive charges cancel at a different point between them. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v04 source review (4 November 2026)

`checks/p-y11-fa3-v04-learning-review.md` and `checks/p-y11-fa3-v04-science-check.md`: 0 blockers, 0 should fix; 5,942 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v05 source review (4 November 2026)

`checks/p-y11-fa3-v05-learning-review.md` and `checks/p-y11-fa3-v05-science-check.md`: 0 blockers, 1 should fix; 5,406 joined characters. Final feedback says mg is upward. Weight mg points downward; the balancing electric force is upward. Replace the direction attached to mg and retain the positive charge and four-electrons-lost result. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v06 source review (4 November 2026)

`checks/p-y11-fa3-v06-learning-review.md` and `checks/p-y11-fa3-v06-science-check.md`: 0 blockers, 0 should fix; 5,492 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v07 source review (4 November 2026)

`checks/p-y11-fa3-v07-learning-review.md` and `checks/p-y11-fa3-v07-science-check.md`: 0 blockers, 2 should fix; 6,270 joined characters. The1.7mm breakdown estimate is not a safe working clearance for a5kV supply: breakdown depends on edges and conditions. Replace the how-close safety instruction with a theoretical order-of-magnitude example; require approved insulated/current-limited apparatus for the teacher demonstration. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v08 source review (4 November 2026)

`checks/p-y11-fa3-v08-learning-review.md` and `checks/p-y11-fa3-v08-science-check.md`: 0 blockers, 0 should fix; 6,222 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v09 source review (4 November 2026)

`checks/p-y11-fa3-v09-learning-review.md` and `checks/p-y11-fa3-v09-science-check.md`: 0 blockers, 1 should fix; 6,153 joined characters. Distinguish work done by the field from external work. Across a potential drop the field work is -q deltaV and deltaU=q deltaV. The current qV magnitude shortcut for electrons must explicitly use charge magnitude and voltage drop; otherwise a negative electron produces the wrong energy sign. Replace the existing equation explanation rather than adding a new section. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v10 source review (4 November 2026)

`checks/p-y11-fa3-v10-learning-review.md` and `checks/p-y11-fa3-v10-science-check.md`: 0 blockers, 1 should fix; 5,644 joined characters. Make the signed potential difference explicit as destination minus start in deltaU=q deltaV. Root decision16 defines W as external work here, whereas v09 used field work; retain distinct labels so the two W=qV statements are not contradictory. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v11 source review (4 November 2026)

`checks/p-y11-fa3-v11-learning-review.md` and `checks/p-y11-fa3-v11-science-check.md`: 0 blockers, 0 should fix; 5,583 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v12 source review (4 November 2026)

`checks/p-y11-fa3-v12-learning-review.md` and `checks/p-y11-fa3-v12-science-check.md`: 0 blockers, 3 should fix; 5,579 joined characters. DC need not have a steady magnitude; it is unidirectional and may vary. Replace with steady DC is flat and remove steady size from the general DC definition. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v13 source review (4 November 2026)

`checks/p-y11-fa3-v13-learning-review.md` and `checks/p-y11-fa3-v13-science-check.md`: 0 blockers, 1 should fix; 6,221 joined characters. A sixty-fold nichrome/copper ratio depends on alloy and temperature. Attach a named material-grade reference to the fixed number or replace it with much larger resistance, leaving the qualitative alloy-scattering explanation unchanged. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v14 source review (4 November 2026)

`checks/p-y11-fa3-v14-learning-review.md` and `checks/p-y11-fa3-v14-science-check.md`: 0 blockers, 1 should fix; 5,464 joined characters. That is how a dimmer works implies common mains dimmers operate as rheostats. Replace with a simple resistance control changes this circuit current; retain the stated low-voltage example. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v15 source review (4 November 2026)

`checks/p-y11-fa3-v15-learning-review.md` and `checks/p-y11-fa3-v15-science-check.md`: 0 blockers, 3 should fix; 6,225 joined characters. V/I is not exactly five at every point in the illustrative table. Replace with approximately five within the measurement uncertainty, and draw a fitted line rather than asserting every noisy point has the same exact ratio. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v16 source review (4 November 2026)

`checks/p-y11-fa3-v16-learning-review.md` and `checks/p-y11-fa3-v16-science-check.md`: 0 blockers, 0 should fix; 6,225 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v17 source review (4 November 2026)

`checks/p-y11-fa3-v17-learning-review.md` and `checks/p-y11-fa3-v17-science-check.md`: 0 blockers, 1 should fix; 5,510 joined characters. The final question says fifty megawatts supplied to the city but treats50MW as sending-end input. Replace with power station sends50MW into the lines so the specified current and loss calculation match the givens. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v18 source review (4 November 2026)

`checks/p-y11-fa3-v18-learning-review.md` and `checks/p-y11-fa3-v18-science-check.md`: 0 blockers, 1 should fix; 5,379 joined characters. Charge cannot pile up anywhere and stops at once are too absolute: brief surface-charge changes establish a new steady state. Replace with no continuing accumulation in steady state and current rapidly stops after opening. The circuit rules remain unchanged. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v19 source review (4 November 2026)

`checks/p-y11-fa3-v19-learning-review.md` and `checks/p-y11-fa3-v19-science-check.md`: 0 blockers, 1 should fix; 5,405 joined characters. Apply root decision30: use a resistor for the quantitative12ohm example in scenes3to7. The current design still calls it a lit lamp with fixed resistance. Retain the lamp only in lighting/darkness demonstrations. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v20 source review (4 November 2026)

`checks/p-y11-fa3-v20-learning-review.md` and `checks/p-y11-fa3-v20-science-check.md`: 0 blockers, 1 should fix; 5,150 joined characters. The zero-leftover-energy analogy should compare potential differences around the closed loop, not imply a coulomb has an absolute energy of zero at the battery return. Replace with net energy change around a complete loop is zero. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v21 source review (4 November 2026)

`checks/p-y11-fa3-v21-learning-review.md` and `checks/p-y11-fa3-v21-science-check.md`: 0 blockers, 1 should fix; 5,126 joined characters. Remove the spoken production phrase and the next scene shows why. Replace it with the actual causal transition about an added path, without adding learner text. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v22 source review (4 November 2026)

`checks/p-y11-fa3-v22-learning-review.md` and `checks/p-y11-fa3-v22-science-check.md`: 0 blockers, 1 should fix; 5,899 joined characters. Any mix of series and parallel can be reduced by this method only when the network is actually series-parallel reducible. Replace any mix with these series-parallel networks; do not imply the method covers a bridge network. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v23 source review (4 November 2026)

`checks/p-y11-fa3-v23-learning-review.md` and `checks/p-y11-fa3-v23-science-check.md`: 1 blockers, 2 should fix; 6,243 joined characters. The first attempt measures in a30ohm branch, whose ideal current is.10A, but compares.19A against the.20A main current and calls it5percent low. Either move the meter to the main15ohm resistor or use a.095A branch reading compared with.10A. Repair card and feedback together. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v24 source review (4 November 2026)

`checks/p-y11-fa3-v24-learning-review.md` and `checks/p-y11-fa3-v24-science-check.md`: 0 blockers, 1 should fix; 5,860 joined characters. The field of a single loop is approximately uniform only near its centre, not throughout its entire inside. Replace inside strong and nearly uniform with near the centre, fields add and vary slowly. Do not imply the centre is stronger than positions arbitrarily near the wire. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v25 source review (4 November 2026)

`checks/p-y11-fa3-v25-learning-review.md` and `checks/p-y11-fa3-v25-science-check.md`: 0 blockers, 1 should fix; 5,954 joined characters. Mu0 is measured in the current SI, so4pi*1e-7 is an excellent approximation, not exact. Replace exactly with approximately in the shortcut; retain the syllabus numerical value and all rounded answers. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v26 source review (4 November 2026)

`checks/p-y11-fa3-v26-learning-review.md` and `checks/p-y11-fa3-v26-science-check.md`: 0 blockers, 0 should fix; 5,659 joined characters. No new source finding. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v27 source review (4 November 2026)

`checks/p-y11-fa3-v27-learning-review.md` and `checks/p-y11-fa3-v27-science-check.md`: 0 blockers, 1 should fix; 6,164 joined characters. Width independence is the long-solenoid approximation away from ends. Keep that condition next to the opening wider-coil verdict and final rule, replacing the absolute width makes no difference wording rather than adding an advanced exception. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v28 source review (4 November 2026)

`checks/p-y11-fa3-v28-learning-review.md` and `checks/p-y11-fa3-v28-science-check.md`: 0 blockers, 2 should fix; 5,620 joined characters. Steel is not always ferromagnetic; some stainless grades are not. Replace their alloys like steel with ferromagnetic alloys such as ordinary carbon steel, consistent with v29 material distinctions. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v29 source review (4 November 2026)

`checks/p-y11-fa3-v29-learning-review.md` and `checks/p-y11-fa3-v29-science-check.md`: 2 blockers, 1 should fix; 5,722 joined characters. Low coercivity does not itself mean low remanent magnetism. Coercivity is the reverse field needed to erase magnetisation; remanence is what remains at zero applied field. Correct the repeated inference and use actual release/remanence evidence for the switchable-core recommendation. Quote, route, image and practical checks remain open.


### Brief 164 p-y11-fa3-v30 source review (4 November 2026)

`checks/p-y11-fa3-v30-learning-review.md` and `checks/p-y11-fa3-v30-science-check.md`: 0 blockers, 3 should fix; 6,191 joined characters. Removing retained clips does not demagnetise the nail. Keep magnetic history consistent by using an appropriate soft core and a defined reset procedure; clearing clips alone does not remove the cause of the high reading. Quote, route, image and practical checks remain open.


### Brief 163 FA2 v31 source access update (4 November 2026)

The full-text access blocker is resolved through Europe PMC XML. All nine reconstructed points recalculate correctly. Figure 1 and Table 4 print U/l while the design labels the same values mU/L; that factor1000 discrepancy remains a blocker. Model-estimate and individual-peak labels need the recorded repairs. Evidence: `work/brief163/leone-verification.json`.


### Briefs161/162 official reference checks resolved (4 November2026)

All39 syllabus citations across the12 probability reviews now have fresh official CMS text and MathML evidence. The official sample exam printed page33 confirms the positive-z four-decimal cumulative normal table; all 330 entries recalculate correctly. The current2027 reference sheet has neither that table nor an annuity formula, resolving the f14 reference question too. `work/brief162/official-quote-audit.json` and `reference-table-verification.json`. s11 table-form finding is closed; s12 numerical blocker remains.


### Brief 166 local review build (4 November 2026)

All 16 d01 scenes are registered; typecheck and preview v3 build passed. The 60-second pilot includes scene 10 and the scene 11 countdown, with original measured audio, and decoded successfully. Contact sheets (118 frames), 84 cue-anchor timings and source hashes are in checks/math-a12-d01-build166/. Full report: checks/codex-build-166.md. Human listening and Claude motion/design approval remain pending. The report explicitly records the remaining fine emphasis details; no exact-design pass or full export is claimed.



### Briefs 163, 164 and 166 follow-up (4 November 2026)

All 102 Biology/Physics handoff pairs were compared at source level. Physics FA3 v14 adds unprovided ghost readings; v25 retains a superseded assumed frame. Both need the recorded visual repairs. The two-window house reuse conflict in FA3 v17/v18 is also recorded. Biology cultural holds are preserved using root decisions 7 and 14. No rendered science-frame pass is claimed. Maths d01 now has preview v4, final pilot v3, 118 inspected stills and 86 cue anchors. The readout behaviour during an edge-on reflection is held for the designer decision recorded in checks/codex-build-166.md, alongside human listening and motion approval. Artwork continues independently.


### Brief 165 continuation (5 November 2026)

math-a12-d02 Revision 3 repairs now checked clean in checks/m-a12d02-error-check.md. Lesson request preflight: 16 new whole-scene requests, 0 local requests today, conservative limit 90. Matching takes will be reused. New pronunciation contexts cover the base a and natural log of a while preserving a half. One alignment process at a time.

Brief 165 serial continuation: resuming saved d02 takes; request ceiling 99 of the owner-stated daily 100. No automatic request retry.

math-a12-d02: request preflight 4 already used in the last 24 hours; 95 requests available before the reserved final request. Clean review: checks/m-a12d02-error-check.md.

math-a12-d02: blocked, generator exited 1; 1 new requests. Saved takes preserved; no alignment or caption pass claimed.

math-a12-d03: request preflight 5 already used in the last 24 hours; 94 requests available before the reserved final request. Clean review: checks/codex-check-133.md.

math-a12-d03: blocked, generator exited 1; 1 new requests. Saved takes preserved; no alignment or caption pass claimed.

math-a12-d04: request preflight 6 already used in the last 24 hours; 93 requests available before the reserved final request. Clean review: checks/m-a12d04-claude-science-check.md.

math-a12-d04: blocked, generator exited 1; 1 new requests. Saved takes preserved; no alignment or caption pass claimed.

math-a12-d05: request preflight 7 already used in the last 24 hours; 92 requests available before the reserved final request. Clean review: checks/m-a12d05-claude-science-check.md.

Brief 165 continuation: persistent worker reverted after memory/native failures. Isolated alignment now uses 200-frame inference windows. All saved takes remain reusable. Speech capture and alignment are separate phases, each serial.

math-a12-d02: capture preflight 9 requests used in last 24 hours; maximum 90 additional requests, with complete-lesson reservation checked by the generator.

math-a12-d02: speech capture complete, 10 new requests. No unchanged saved take was requested again. Alignment and measured data next.

math-a12-d03: capture preflight 19 requests used in last 24 hours; maximum 80 additional requests, with complete-lesson reservation checked by the generator.

math-a12-d03: speech capture complete, 16 new requests. No unchanged saved take was requested again. Alignment and measured data next.

math-a12-d04: capture preflight 35 requests used in last 24 hours; maximum 64 additional requests, with complete-lesson reservation checked by the generator.

math-a12-d04: speech capture complete, 14 new requests. No unchanged saved take was requested again. Alignment and measured data next.

math-a12-d05: capture preflight 49 requests used in last 24 hours; maximum 50 additional requests, with complete-lesson reservation checked by the generator.

math-a12-d05: speech capture complete, 13 new requests. No unchanged saved take was requested again. Alignment and measured data next.

math-a12-d06: capture preflight 62 requests used in last 24 hours; maximum 37 additional requests, with complete-lesson reservation checked by the generator.

math-a12-d06: speech capture complete, 15 new requests. No unchanged saved take was requested again. Alignment and measured data next.

math-a12-d07: capture preflight 77 requests used in last 24 hours; maximum 22 additional requests, with complete-lesson reservation checked by the generator.

math-a12-d07: speech capture complete, 14 new requests. No unchanged saved take was requested again. Alignment and measured data next.

Speech capture wave finished with 91 requests recorded. The later d08 to d17, i01 to i05 and Biology FA1 v01 to v06 queue remains open. No more requests will be sent in this wave.

math-a12-d02: aligning saved takes, request budget zero. One isolated alignment process at a time.

math-a12-d02: measured/lesson.json and captions complete. 6328 characters; 451.76 speech seconds; 537.93 lesson seconds; $0.10244 estimated cost represented by the takes. Alignment bounds, captions and quiet holds pass. Built cue timing, pronunciation and voice/volume consistency at joins require human listening.

math-a12-d03: aligning saved takes, request budget zero. One isolated alignment process at a time.

math-a12-d03: measured/lesson.json and captions complete. 6355 characters; 457.56 speech seconds; 543.80 lesson seconds; $0.10375 estimated cost represented by the takes. Alignment bounds, captions and quiet holds pass. Built cue timing, pronunciation and voice/volume consistency at joins require human listening.

math-a12-d04: aligning saved takes, request budget zero. One isolated alignment process at a time.

Brief 165 allowance stop: 91 of 100 daily requests recorded, all with saved usage metadata. d08 requires 14 new requests; only 9 remain (8 before the 99-request ceiling), so it was not started. d08 to d17, i01 to i05 and Biology FA1 v01 to v06 are deferred until the next allowance, 7 pm Sydney on 5 November. No scene was left half-requested. Full request/count inventory: work/brief165-batch/preflight.json.

math-a12-d02: 15 new whole-scene requests; estimated speech cost $0.10156. Alignment and measured results are recorded separately below.

math-a12-d03: 17 new whole-scene requests; estimated speech cost $0.10375. Alignment and measured results are recorded separately below.

math-a12-d04: 15 new whole-scene requests; estimated speech cost $0.09646. Alignment and measured results are recorded separately below.

math-a12-d05: 15 new whole-scene requests; estimated speech cost $0.09292. Alignment and measured results are recorded separately below.

math-a12-d06: 15 new whole-scene requests; estimated speech cost $0.09524. Alignment and measured results are recorded separately below.

math-a12-d07: 14 new whole-scene requests; estimated speech cost $0.09263. Alignment and measured results are recorded separately below.

Total estimated cost of this wave: $0.58257, from 8940 input and 64233 audio output tokens. All 91 request usage records exist. See work/brief165-batch/request-and-cost-summary.json. Human listening, including pronunciation and scene-join voice/volume changes, remains pending.

math-a12-d04: measured/lesson.json and captions complete. 6086 characters; 429.24 speech seconds; 515.47 lesson seconds; $0.09734 estimated cost represented by the takes. Alignment bounds, captions and quiet holds pass. Built cue timing, pronunciation and voice/volume consistency at joins require human listening.

math-a12-d05: aligning saved takes, request budget zero. One isolated alignment process at a time.

math-a12-d05: measured/lesson.json and captions complete. 5664 characters; 413.76 speech seconds; 499.97 lesson seconds; $0.09381 estimated cost represented by the takes. Alignment bounds, captions and quiet holds pass. Built cue timing, pronunciation and voice/volume consistency at joins require human listening.

math-a12-d06: aligning saved takes, request budget zero. One isolated alignment process at a time.

math-a12-d06: alignment or caption export blocked (exit 1). Takes preserved. No complete measured lesson pass. Continue to the next captured lesson.

math-a12-d07: aligning saved takes, request budget zero. One isolated alignment process at a time.

Brief 165 d06 caption blocker repaired: the last interpolated character of First ended at 0.44700000000000006 while the following space used 0.447. google-pronunciation.mjs now uses each word's exact start/end at its endpoints. The strict caption regression passes. scene-06.alignment.json was rebuilt from its saved word timings; the original is in work/brief165-batch/floatingpoint-scene06.original-alignment.json. Audio unchanged. Reassemble d06 from cache after the current serial alignment pass.


Brief 165 d06 blocker closed: cache-only reassembly, strict alignment validation and caption export all pass. 5,585 characters, 420.16 speech seconds, 506.33 lesson seconds, 190 caption cues, estimated new speech cost USD 0.0952445, 15 original requests and zero retry requests. measured/lesson.json and measured/captions are saved. Human listening and built cue timing remain pending.


math-a12-d07: measured/lesson.json and captions complete. 5679 characters; 412.68 speech seconds; 498.87 lesson seconds; $0.09361 estimated cost represented by the takes. Alignment bounds, captions and quiet holds pass. Built cue timing, pronunciation and voice/volume consistency at joins require human listening.

Brief 165 wave finished. Continue to brief 172. Remaining voice queue and any alignment blockers remain open; no listening approval claimed.

### Brief 165 final wave hand-in (5 November 2026)

All six lessons d02 to d07 now pass alignment bounds, explicit hold validation and caption export. Earlier memory and floating-point blockers are resolved. There are no outstanding alignment blockers for this wave. All measured lesson.json files and captions are under each lesson folder. Full figures and exact paths: work/brief165-batch/request-and-cost-summary.json.

math-a12-d02: 6328 characters; 451.76 speech seconds; 537.93 lesson seconds; 15 requests; USD 0.10156 new estimated cost; 223 caption cues. Measured cue data is ready for a build, with no rendered cue-timing pass claimed.

math-a12-d03: 6355 characters; 457.56 speech seconds; 543.80 lesson seconds; 17 requests; USD 0.10375 new estimated cost; 225 caption cues. Measured cue data is ready for a build, with no rendered cue-timing pass claimed.

math-a12-d04: 6086 characters; 429.24 speech seconds; 515.47 lesson seconds; 15 requests; USD 0.09646 new estimated cost; 204 caption cues. Measured cue data is ready for a build, with no rendered cue-timing pass claimed.

math-a12-d05: 5664 characters; 413.76 speech seconds; 499.97 lesson seconds; 15 requests; USD 0.09292 new estimated cost; 190 caption cues. Measured cue data is ready for a build, with no rendered cue-timing pass claimed.

math-a12-d06: 5585 characters; 420.16 speech seconds; 506.33 lesson seconds; 15 requests; USD 0.09524 new estimated cost; 190 caption cues. Measured cue data is ready for a build, with no rendered cue-timing pass claimed.

math-a12-d07: 5679 characters; 412.68 speech seconds; 498.87 lesson seconds; 14 requests; USD 0.09263 new estimated cost; 196 caption cues. Measured cue data is ready for a build, with no rendered cue-timing pass claimed.

91 new whole-scene requests, estimated USD 0.582567 in total. No unchanged take re-voiced. d08 needs 14 requests and only 9 of 100 remain, so d08 to d17, i01 to i05 and Biology FA1 v01 to v06 are deferred to the next allowance at 7 pm Sydney. All lessons still require human listening for pronunciation and scene-join voice/volume consistency.

### Brief 172 hand-in (5 November 2026)

All requested source fixes are implemented. Scoped TypeScript passes. Preview v5 rebuilt; all 13 replacement stills inspected. Exact before/after index: work/brief172/stills.json. Static observations only; no playback-speed or listening approval.

Fold: numeric readout and tangent hidden during reflection, restored to gradient -5.44 at height 2.72. Before: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\stills-v5\scene-04-543.png. After: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\brief172-stills\scene-04-543.png.

Earlier AlignedAlgebra rows now retain 65 percent opacity. Before: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\stills-v4\scene-09-1392.png. After: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\brief172-stills\scene-09-1392.png.

Strike stays level and inside crossed text. Before: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\stills-v3\scene-12-698.png. After: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\brief172-stills\scene-12-698.png.

Emphasis rings fit the marked words. Before: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\stills-v3\scene-06-847.png. After: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\brief172-stills\scene-06-847.png.

Scene 12 substitutes into the power before stating the result, on the same cue. Before: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\stills-v3\scene-12-698.png. After: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\brief172-stills\scene-12-698.png.

Scene 5 readouts are side by side and clear the bottom 12 percent. Before: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\stills-v3\scene-05-1222.png. After: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\brief172-stills\scene-05-1222.png.

Measured lesson and narration unchanged (deep comparison with the saved d01 cache check passes). Lesson duration is 568.93 seconds.

Full render attempted through scripts/render-release.mjs using work/brief172/full-render-config.json. Blocked before bundling: the script accepts only the legacy Lesson-release entry, not the Explainer composition. The separate export-stage gate also fails because the d01 production-brief.json is missing (BRIEF_INPUT_INVALID). No full MP4 exists, and no gate was bypassed. The initial all-registry still bundle was stopped for excessive memory; the direct d01 entry produced all 13 stills. Partial first-bundle diagnostics remain preserved. Moving to brief 170 as instructed.

### Continuation checkpoint after interruption and status request

Brief 172 still inspection and both full-render blockers are now recorded above. Brief 170 has a mechanical narration-count and Revision 1/2 change inventory in work/brief170/; no completed error-check reports or clean passes are claimed. Briefs 171, 169, 167 and 168 have not started. No alignment or rendering process remains active.

### Brief 170 hand-in (5 November 2026)

Twelve Revision 2 error checks saved at checks/y11b-fa2-vNN-error-check.md. Narration counts, source comparisons and recalculations are in work/brief170/. All estimates remain below about 570 seconds. No designs, speech or commits changed.

y11b-fa2-v01: clean.

y11b-fa2-v02: 1 should fix: Scene 6 still triggers the unit cube on "uses supplies and makes waste", absent from the revised narration. Scene 10b triggers the comparison on "three times as much membrane", but now says "three times the membrane". Point these two visual cues at the existing phrases "If demand per cubic centimetre stays the same" and "three times the membrane". No narration or duration change is needed.

y11b-fa2-v03: clean.

y11b-fa2-v04: clean.

y11b-fa2-v05: clean.

y11b-fa2-v06: clean.

y11b-fa2-v07: 1 should fix: The scene 10 handoff card still says "Measure: oxygen in a set time (bubbles or gas volume)". Scene 3 and key note 2 correctly say neither counts nor unanalysed gas volume measure oxygen itself. Change this screen line to bubbles or gas volume in a set time, and preserve the same corrected card in v08's opening. No added speech.

y11b-fa2-v08: 2 should fix: Scene 8 cues the extra distances on "more distances near the bend", which is absent from its revised narration ("add distances near the bend"). Use the existing "add distances near the bend" cue. No extra speech. Feedback 9b says the readings are ten degrees apart, but the question includes 40 and 45 degrees. The ten-degree spacing applies around the observed 30-degree peak. Scope the sentence to those neighbouring readings; cutting "real" and "somewhere" in the following sentence pays for the replacement.

y11b-fa2-v09: 1 should fix: Scene 10 still uses the cue "when they agree" after narration changed to "when real sources agree". Trigger the bracket on that existing revised phrase. No narration or timing addition.

y11b-fa2-v10: 1 should fix: The potato/active-loader tag is specified for scenes 3 and 7, but the unqualified "Phloem's load costs fuel" returns in scenes 8 and 13. Keep the existing active-loading example tag with those memory and handoff lines too. This preserves the approved wording while preventing a new universal claim after the passive-loader counterexample. No added narration.

y11b-fa2-v11: 1 should fix: Scene 10 still cues the tracer chip on "radioactive form of carbon", which was removed. The current narration says "carbon dioxide containing radioactive carbon". Use its existing "radioactive carbon" phrase. No added narration.

y11b-fa2-v12: 1 should fix: Feedback 10b explicitly predicts flow falls sharply, not to zero, and retains a faint transpiration wisp. Its animation then says the beads stop. Slow the beads substantially instead of stopping them, so the visual agrees with the repaired prediction. No narration change.

New v09/v10 reference pages checked; the JIC PDF is locally retrieved and read. Primary-source pages support the referenced anatomy and potato active-loading example. No rendered or listening pass claimed. Moving to brief 171.

## Brief 171 hand-in, 5 November 2026

- math-a12-s01: clean in this source error check. Report: checks/m-a12s01-error-check.md.

- math-a12-s02: clean in this source error check. Report: checks/m-a12s02-error-check.md.

- math-a12-s03: clean in this source error check. Report: checks/m-a12s03-error-check.md.

- math-a12-s04: 3 should fix: Scene 2 still says enough decimal places guarantee no two recorded times are the same. Scene 9 still says F reaches one beyond every possible value as a general rule. Scene 2 still presents reaction times of two hundred students with no study source or illustrative label. Report: checks/m-a12s04-error-check.md.

- math-a12-s05: clean in this source error check. Report: checks/m-a12s05-error-check.md.

- math-a12-s06: clean in this source error check. Report: checks/m-a12s06-error-check.md.

- math-a12-s07: clean in this source error check. Report: checks/m-a12s07-error-check.md.

- math-a12-s08: 2 should fix: Scene 7 still displays "the marks are in the set-up" after that unsupported marking claim was removed from speech. The scene 13 handoff presents "a thousand bottle fills from one filling machine" and its histogram without the simulated label that s09 adds at its opening. Report: checks/m-a12s08-error-check.md.

- math-a12-s09: 1 should fix: Scene 14 again says a normal model fits data that bunch symmetrically around one peak. Report: checks/m-a12s09-error-check.md.

- math-a12-s10: 2 should fix: The Numbers used heights row still groups 194 and 196 under approximately 0.15%. Scene 9 changes graphs on "Now the underfilled", absent from its narration, which says "Now underfilled bottles". Report: checks/m-a12s10-error-check.md.

- math-a12-s11: clean in this source error check. Report: checks/m-a12s11-error-check.md.

- math-a12-s12: 1 should fix: Scene 5 and the Numbers used table call the rounded app value 508.61 the exact boundary, and the tailTarget check uses that endpoint for a target of 0.01. Report: checks/m-a12s12-error-check.md.

- math-a12-i06: clean in this source error check. Report: checks/m-a12i06-error-check.md.

- math-a12-i07: clean in this source error check. Report: checks/m-a12i07-error-check.md.

- math-a12-i08: 1 should fix: Scene 9 pulses all ticks on "agree", which no longer occurs in the shortened narration. Report: checks/m-a12i08-error-check.md.

## Brief 169 reviews, 5 November 2026

phys-y11-fa0-v01: 0 blocker, 3 should fix, 0 optional; 5,733 characters, estimated 532.0 s. Both reports at checks/p-y11-fa0-v01-learning-review.md and -science-check.md. Scene 7 teaches that "Gravity pulls on everything" cannot be contradicted by any observation. Feedback 1 says "The trolley will go faster" names nothing measurable. Author note c assigns the feather a mass of about 0.03 g.

phys-y11-fa0-v02: 0 blocker, 2 should fix, 0 optional; 6,245 characters, estimated 566.0 s. Both reports at checks/p-y11-fa0-v02-learning-review.md and -science-check.md. Scene 4 defines reliable as readings agreeing when repeated, while v05 reserves that wording for precision and defines reliability through repeating the whole experiment. Scenes 3 and 7 imply that changing cone width isolates facing area alone.

phys-y11-fa0-v03: 0 blocker, 1 should fix, 0 optional; 5,863 characters, estimated 541.0 s. Both reports at checks/p-y11-fa0-v03-learning-review.md and -science-check.md. Scene 5 counts "240 frames" between a timer at 0.000 and 1.000 s.

phys-y11-fa0-v04: 0 blocker, 2 should fix, 0 optional; 5,614 characters, estimated 526.2 s. Both reports at checks/p-y11-fa0-v04-learning-review.md and -science-check.md. Scene 1 and the Opening frame paragraph still assume a data-logger screen from v03. The coverage request cannot be marked complete: ciabfb4d1f remains on cultural hold, and the design itself marks ci6364656f and cief805888 partial.

phys-y11-fa0-v05: 1 blocker, 1 should fix, 0 optional; 6,207 characters, estimated 566.5 s. Both reports at checks/p-y11-fa0-v05-learning-review.md and -science-check.md. Scenes 7 and 8 call set A the times before subtracting the release delay, and set B the corrected times, but their standard deviations are 0.707 ms and 2.915 ms. Feedback 2 says more repeats "bring its mean closer" to the accepted value.

phys-y11-fa0-v06: 0 blocker, 1 should fix, 0 optional; 6,069 characters, estimated 556.0 s. Both reports at checks/p-y11-fa0-v06-learning-review.md and -science-check.md. Scene 8 rules out a faulty light gate because the same card at the same launcher setting again gives 20.0 ms.

phys-y11-fa0-v07: 0 blocker, 1 should fix, 0 optional; 5,924 characters, estimated 546.0 s. Both reports at checks/p-y11-fa0-v07-learning-review.md and -science-check.md. The Numbers used gradient row labels 0.93 to 1.1 kg as steepest and shallowest values.

Brief 169 plates: 12 painted PNG layers with sidecars, prompts, hashes and black/white and phone QA in assets/brief169-manifest.json and assets/brief169-qa/. Seven paper/Moon/scissors layers pass object and alpha QA. Five cone layers are held: the 10 cm cone still fails constant-slant geometry after a targeted image-tool edit; set registration is provisional. Cricket ball, air track, air glider, flag and glider mass are missing at requested paths. Recorded blockers and moved to brief 167. No speech or renders run.

## Brief 167 hand-in, 5 November 2026

- Ledger/crosswalk: programme/syllabus/chem-2017-y11.json and chem-2017-y11-crosswalk.json; 52 parent actions with nested requirements, seven WS outcomes/19 actions, and exact depth/practical requirements. Fresh official DOCX retained and hashed. Summary: programme/chem-y11-crosswalk.md. Site teaching coverage: 43 covered, nine partial; cultural provenance remains held.
- Route inputs: programme/chem-y11-route-inputs.json; 83 proposed videos, comprising 76 core/practical/cultural entries and seven integrated WS support entries. All parent actions have a proposed home; one cultural video remains held. Exact source lesson/section IDs, boundaries, prerequisites, practicals and next handoffs recorded. This is research for Claude, not designs or approved coverage.
- Starter packs: ten files in pre-design/chem-y11/, with unchanged source givens, independent arithmetic, twenty original questions/answers, inspected asset reuse proposals and memory-bank notes. No source mixture-mass dataset was invented; its absence is explicit.
- Corrections: site-corrections-chem-y11.md contains twelve exact old-text/correction/reason records. Read-only site hashes are unchanged. Evidence: work/brief167/validation.json and first-ten-calculations.json. No speech, source-code changes, renders or commits. Continuing to brief 168.

## Brief 168 hand-in, 5 November 2026

- Ledger/crosswalk: programme/syllabus/phys-2017-y12.json and phys-2017-y12-crosswalk.json contain 69 exact parent actions with nested requirements, seven WS outcomes/19 actions and depth/practical requirements. Fresh official 2017 DOCX, mathematical XML, hashes and source evidence retained. Summary: programme/phys-y12-crosswalk.md. Site teaching source: 61 covered, eight partial (seven practical evidence gaps and one constituent/scattering evidence gap). This does not certify science or student practical completion.
- Route inputs: programme/phys-y12-route-inputs.json proposes 81 videos: Module 5 has 23, Module 6 has 20, Module 7 has 16 and Module 8 has 22. Every action has a proposed home, with exact selected source sections, boundaries, prerequisites, practicals and next handoffs. Research for Claude, not designs or a final route.
- Starter packs: ten files in pre-design/phys-y12/, with unchanged source givens, independent arithmetic, twenty original questions/answers and inspected visual reuse proposals. The 54-family kit and all 70 physics-plan.json entries are compared in work/brief168/kit-comparison.json; all planned/current source hashes match. CircuitDiagram and LoopFlow were not found under src, so no exports were invented.
- Corrections: site-corrections-phys-y12.md has four exact old-text records for three errors: speed scaling, premature wall-clearance rounding and a torque-angle label. Evidence: work/brief168/validation.json and first-ten-calculations.json. All 70 site files remain unchanged. No app-code changes, speech, renders or commits for this brief.

## Ordered queue state after brief 168

Completed the requested sequence through brief 168, moving past recorded blockers. Brief 165 has math-a12-d02 to d07 voiced, aligned and measured; d08 needs 14 new requests and cannot fit the remaining allowance. Resume preflight after 19:00 Sydney on 5 November 2026, reusing unchanged cached takes. The i01 to i05 and Biology FA1 v01 to v06 queue remains behind d08 to d17. Human listening is pending.

Brief 172's five d01 fixes are implemented and checked in stills; full rendering remains blocked by the missing d01 production brief and the legacy-only release-render entry gate. No full d01 MP4 was produced. Briefs 170 and 171 reports and briefs 167 and 168 research hand-ins are complete. Brief 169's review reports are complete, but cone geometry and the missing requested plates remain recorded art blockers. Source findings need designer resolution before recording. Only one heavy job ran at a time; no alignment or render job is running now.

## Ordered continuation, 5 November 2026, 08:58 Sydney

Brief 165: quota preflight confirms 91 requests used; d08 needs 14 new requests, so no speech request was made. Next quota preflight is after 19:00 Sydney. Existing d02 to d07 takes and measured data retained. Brief 172: d01 production-brief.json is still missing; full export remains blocked. Claude is running, so no render was started. Briefs 170 and 171 hand-ins retained; brief 169 review/art blockers retained. Moving to brief 173 Revision 2 error checks, then revisiting 167 and 168 hand-ins.

## Brief 173 hand-in, 5 November 2026

95 Revision 2 error-check reports: 67 clean, one blocker and 29 should-fix findings across 28 designs. Checked current source against brief 163/164 findings and root decisions, recalculated changed quantities, checked cues and their order, and compared 95 source opening/final-frame pairs. Reports are checks/y11b-fa2-vNN-error-check.md, y11b-fa3-vNN-error-check.md, p-y11-fa2-vNN-error-check.md and p-y11-fa3-vNN-error-check.md. Source hashes were rechecked before hand-in. Evidence: work/brief173/validation.json, audit.json, opening-pairs.json, recalculation.json and source-checks.md. No design edits, painting, speech, alignment or renders.

- bio-y11-fa2-v13: clean at error check Report: checks/y11b-fa2-v13-error-check.md.
- bio-y11-fa2-v14: clean at error check Report: checks/y11b-fa2-v14-error-check.md.
- bio-y11-fa2-v15: clean at error check Report: checks/y11b-fa2-v15-error-check.md.
- bio-y11-fa2-v16: 0 blocker, 1 should fix: The written event order differs from the speech at 6. gases: the respiratory system: "Fish do the same job". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/y11b-fa2-v16-error-check.md.
- bio-y11-fa2-v17: clean at error check Report: checks/y11b-fa2-v17-error-check.md.
- bio-y11-fa2-v18: clean at error check Report: checks/y11b-fa2-v18-error-check.md.
- bio-y11-fa2-v19: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 5. capillaries: one cell thick, and a prediction: "the answer to the opening question"; 7. veins: wide, thin, and valves: "little resistance"; 9b. feedback, item one: "The hose is an artery". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. The written event order differs from the speech at 2. direction defines the vessel, and a prediction: "Quick prediction". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/y11b-fa2-v19-error-check.md.
- bio-y11-fa2-v20: clean at error check Report: checks/y11b-fa2-v20-error-check.md.
- bio-y11-fa2-v21: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 6. the liver between meals, and urea: "urea always rises". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/y11b-fa2-v21-error-check.md.
- bio-y11-fa2-v22: clean at error check Report: checks/y11b-fa2-v22-error-check.md.
- bio-y11-fa2-v23: clean at error check Report: checks/y11b-fa2-v23-error-check.md.
- bio-y11-fa2-v24: clean at error check Report: checks/y11b-fa2-v24-error-check.md.
- bio-y11-fa2-v25: 0 blocker, 1 should fix: The full NEJM review now confirms diffusion, ultrafiltration and dialysate composition. Its Table 1 lists erythropoietin and vitamin D analogues as additional medication, but an explicit statement that dialysis does not replace endocrine functions was not found. The source notes still attribute that exact statement to S3. Give it a checked direct source or describe the table inference accurately. The written fallback has not been substituted. See work/brief173/source-checks.md. Report: checks/y11b-fa2-v25-error-check.md.
- bio-y11-fa2-v26: clean at error check Report: checks/y11b-fa2-v26-error-check.md.
- bio-y11-fa2-v27: clean at error check Report: checks/y11b-fa2-v27-error-check.md.
- bio-y11-fa2-v28: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 1. who controls the master gland (opening): "who controls the pituitary". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/y11b-fa2-v28-error-check.md.
- bio-y11-fa2-v29: 0 blocker, 1 should fix: The written event order differs from the speech at 12b. feedback, item one: "classic mistake". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/y11b-fa2-v29-error-check.md.
- bio-y11-fa2-v30: 0 blocker, 1 should fix: The written event order differs from the speech at 3. one gland, two glands inside: "look inside". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/y11b-fa2-v30-error-check.md.
- bio-y11-fa2-v31: clean at error check Report: checks/y11b-fa2-v31-error-check.md.
- bio-y11-fa2-v32: clean at error check Report: checks/y11b-fa2-v32-error-check.md.
- bio-y11-fa2-v33: clean at error check Report: checks/y11b-fa2-v33-error-check.md.
- bio-y11-fa3-v01: clean at error check Report: checks/y11b-fa3-v01-error-check.md.
- bio-y11-fa3-v02: 0 blocker, 1 should fix: The written event order differs from the speech at 7. a wet year, and a prediction: "Prediction"; 11. a pressure is not a punch: "doesn't have to kill". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/y11b-fa3-v02-error-check.md.
- bio-y11-fa3-v03: clean at error check Report: checks/y11b-fa3-v03-error-check.md.
- bio-y11-fa3-v04: clean at error check Report: checks/y11b-fa3-v04-error-check.md.
- bio-y11-fa3-v06: clean at error check Report: checks/y11b-fa3-v06-error-check.md.
- bio-y11-fa3-v07: clean at error check Report: checks/y11b-fa3-v07-error-check.md.
- bio-y11-fa3-v08: clean at error check Report: checks/y11b-fa3-v08-error-check.md.
- bio-y11-fa3-v09: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 3. convergent evolution: "some individuals had a little more loose skin". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/y11b-fa3-v09-error-check.md.
- bio-y11-fa3-v10: clean at error check Report: checks/y11b-fa3-v10-error-check.md.
- bio-y11-fa3-v11: clean at error check Report: checks/y11b-fa3-v11-error-check.md.
- bio-y11-fa3-v12: clean at error check Report: checks/y11b-fa3-v12-error-check.md.
- bio-y11-fa3-v13: clean at error check Report: checks/y11b-fa3-v13-error-check.md.
- bio-y11-fa3-v14: clean at error check Report: checks/y11b-fa3-v14-error-check.md.
- bio-y11-fa3-v15: clean at error check Report: checks/y11b-fa3-v15-error-check.md.
- bio-y11-fa3-v17: clean at error check Report: checks/y11b-fa3-v17-error-check.md.
- bio-y11-fa3-v18: 1 blocker, 0 should fix: The community-onset AGAR comparison still lacks the requested community-subset denominators and participating hospitals for 2013 and 2016. The February 2018 PDF returned a browser-verification page. The readable June 2017 report has different figures: its page 18 lists 4,025 total E. coli ceftriaxone tests and 11.1% community resistance. Do not substitute those totals, rounded onset shares or that cohort for the 7.0% to11.4% chart. Apply the written fallback or verify the exact source quantities. The existing voicing hold remains. Report: checks/y11b-fa3-v18-error-check.md.
- bio-y11-fa3-v19: clean at error check Report: checks/y11b-fa3-v19-error-check.md.
- bio-y11-fa3-v20: 0 blocker, 2 should fix: Feedback 11b still says fossils need hard parts and quick burial. Hard parts increase preservation probability but are not required, as the lesson itself shows with soft-bodied fossils. Replace the necessary-condition wording with a preservation-favours-hard-parts statement, retaining the brief answer and the corrected gap inference. The written event order differs from the speech at 12. decision rule and handoff: "a mix of old and new features". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/y11b-fa3-v20-error-check.md.
- bio-y11-fa3-v21: clean at error check Report: checks/y11b-fa3-v21-error-check.md.
- bio-y11-fa3-v22: clean at error check Report: checks/y11b-fa3-v22-error-check.md.
- bio-y11-fa3-v23: clean at error check Report: checks/y11b-fa3-v23-error-check.md.
- bio-y11-fa3-v24: 0 blocker, 1 should fix: The written event order differs from the speech at 5. oxygen, a water-only problem, and a prediction: "Prediction". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/y11b-fa3-v24-error-check.md.
- bio-y11-fa3-v25: 0 blocker, 1 should fix: The written event order differs from the speech at 6. living interactions: "just as strongly". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/y11b-fa3-v25-error-check.md.
- bio-y11-fa3-v26: 0 blocker, 1 should fix: Feedback 12b still concludes that a larger quadrat will not be four times as precise. The preceding cancellation of area in the abundance estimate does not establish a precision ratio. Use the accepted lack-of-guarantee conclusion: size, placement, number and patchiness affect precision. The new wording still makes a categorical denial where the original finding asked for no guaranteed ratio. Report: checks/y11b-fa3-v26-error-check.md.
- bio-y11-fa3-v27: clean at error check Report: checks/y11b-fa3-v27-error-check.md.
- bio-y11-fa3-v28: clean at error check Report: checks/y11b-fa3-v28-error-check.md.
- bio-y11-fa3-v29: clean at error check Report: checks/y11b-fa3-v29-error-check.md.
- bio-y11-fa3-v30: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 6. the fence-and-food experiment: "they work together". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/y11b-fa3-v30-error-check.md.
- bio-y11-fa3-v31: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 4. the ceiling moves, and a prediction: "whatever is limiting the population right now". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. The written event order differs from the speech at 10d. feedback, item two: "cut the population to about six hundred". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/y11b-fa3-v31-error-check.md.
- bio-y11-fa3-v32: clean at error check Report: checks/y11b-fa3-v32-error-check.md.
- phys-y11-fa2-v13: clean at error check Report: checks/p-y11-fa2-v13-error-check.md.
- phys-y11-fa2-v14: clean at error check Report: checks/p-y11-fa2-v14-error-check.md.
- phys-y11-fa2-v15: clean at error check Report: checks/p-y11-fa2-v15-error-check.md.
- phys-y11-fa2-v16: clean at error check Report: checks/p-y11-fa2-v16-error-check.md.
- phys-y11-fa2-v17: clean at error check Report: checks/p-y11-fa2-v17-error-check.md.
- phys-y11-fa2-v18: clean at error check Report: checks/p-y11-fa2-v18-error-check.md.
- phys-y11-fa2-v19: clean at error check Report: checks/p-y11-fa2-v19-error-check.md.
- phys-y11-fa2-v20: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 11. frequency stays, wavelength shortens: "every crest". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/p-y11-fa2-v20-error-check.md.
- phys-y11-fa2-v21: clean at error check Report: checks/p-y11-fa2-v21-error-check.md.
- phys-y11-fa2-v22: clean at error check Report: checks/p-y11-fa2-v22-error-check.md.
- phys-y11-fa2-v23: clean at error check Report: checks/p-y11-fa2-v23-error-check.md.
- phys-y11-fa2-v24: 0 blocker, 1 should fix: The written event order differs from the speech at 4. a better method, and repeats: "three times". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/p-y11-fa2-v24-error-check.md.
- phys-y11-fa2-v25: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 3. converging lens: focal point and focal length: "bend down"; 3. converging lens: focal point and focal length: "bend up"; 4. diverging lens: a virtual focal point: "spread apart"; 17. handoff: "test it". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/p-y11-fa2-v25-error-check.md.
- phys-y11-fa2-v26: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 2. the model eye: "diverging lens instead"; 11. how spectacles assist, and where the model differs: "never makes the image". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/p-y11-fa2-v26-error-check.md.
- phys-y11-fa2-v27: clean at error check Report: checks/p-y11-fa2-v27-error-check.md.
- phys-y11-fa2-v28: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 3. measuring the spread: "photographs"; 7. run two: lengthening the wave: "frequency drops"; 10. why level matters: "slow down"; 11. one graph for both runs: "same curve"; 11. one graph for both runs: "agree within their spread"; 12. obstacles: "long block". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/p-y11-fa2-v28-error-check.md.
- phys-y11-fa2-v29: clean at error check Report: checks/p-y11-fa2-v29-error-check.md.
- phys-y11-fa2-v30: 0 blocker, 1 should fix: The written event order differs from the speech at 7. both arrive, and the energy moves: "four times". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/p-y11-fa2-v30-error-check.md.
- phys-y11-fa2-v31: clean at error check Report: checks/p-y11-fa2-v31-error-check.md.
- phys-y11-fa2-v32: clean at error check Report: checks/p-y11-fa2-v32-error-check.md.
- phys-y11-fa2-v33: clean at error check Report: checks/p-y11-fa2-v33-error-check.md.
- phys-y11-fa3-v02: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 9. induction with earthing: a lasting charge: "Get the order wrong". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/p-y11-fa3-v02-error-check.md.
- phys-y11-fa3-v03: clean at error check Report: checks/p-y11-fa3-v03-error-check.md.
- phys-y11-fa3-v05: clean at error check Report: checks/p-y11-fa3-v05-error-check.md.
- phys-y11-fa3-v07: 0 blocker, 1 should fix: The written event order differs from the speech at 3. drawing the field lines: "from plus to minus". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/p-y11-fa3-v07-error-check.md.
- phys-y11-fa3-v09: clean at error check Report: checks/p-y11-fa3-v09-error-check.md.
- phys-y11-fa3-v10: clean at error check Report: checks/p-y11-fa3-v10-error-check.md.
- phys-y11-fa3-v12: clean at error check Report: checks/p-y11-fa3-v12-error-check.md.
- phys-y11-fa3-v13: clean at error check Report: checks/p-y11-fa3-v13-error-check.md.
- phys-y11-fa3-v14: clean at error check Report: checks/p-y11-fa3-v14-error-check.md.
- phys-y11-fa3-v15: clean at error check Report: checks/p-y11-fa3-v15-error-check.md.
- phys-y11-fa3-v17: clean at error check Report: checks/p-y11-fa3-v17-error-check.md.
- phys-y11-fa3-v18: clean at error check Report: checks/p-y11-fa3-v18-error-check.md.
- phys-y11-fa3-v19: 0 blocker, 1 should fix: These written cue phrases do not occur verbatim in their scene narration: 8. swap 1: the ammeter across the lamp: "across the lamp". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/p-y11-fa3-v19-error-check.md.
- phys-y11-fa3-v20: clean at error check Report: checks/p-y11-fa3-v20-error-check.md.
- phys-y11-fa3-v21: clean at error check Report: checks/p-y11-fa3-v21-error-check.md.
- phys-y11-fa3-v22: clean at error check Report: checks/p-y11-fa3-v22-error-check.md.
- phys-y11-fa3-v23: clean at error check Report: checks/p-y11-fa3-v23-error-check.md.
- phys-y11-fa3-v24: 0 blocker, 1 should fix: The written event order differs from the speech at 8. a current's field: circles: "switch on". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/p-y11-fa3-v24-error-check.md.
- phys-y11-fa3-v25: clean at error check Report: checks/p-y11-fa3-v25-error-check.md.
- phys-y11-fa3-v27: 0 blocker, 1 should fix: The written event order differs from the speech at 2. measure it: "slides into the middle". Reorder the event instructions to follow the spoken sequence. The saved audit includes the complete cue list and speech for comparison. Report: checks/p-y11-fa3-v27-error-check.md.
- phys-y11-fa3-v28: clean at error check Report: checks/p-y11-fa3-v28-error-check.md.
- phys-y11-fa3-v29: 0 blocker, 2 should fix: Feedback 1 still infers that material P releases when power is cut from its low coercivity alone. The question supplies permeability and coercivity, not remanence, core geometry or a release measurement. Low coercivity means a small reverse field can erase magnetisation; it does not alone establish the remaining field at zero current or instant release. Add the needed release/remanence evidence to the existing table or limit the conclusion to what these two properties support. The feedback row repeats the inference. This part of the original finding remains unresolved. These written cue phrases do not occur verbatim in their scene narration: 1. the question, and a secondary-source investigation: "published data". Retie each event to existing speech; do not add narration just to preserve an obsolete cue. Report: checks/p-y11-fa3-v29-error-check.md.
- phys-y11-fa3-v30: clean at error check Report: checks/p-y11-fa3-v30-error-check.md.

Biology FA3 v05 and v16 remain on cultural hold and were skipped. Physics FA3 v01, v04, v06, v08, v11, v16 and v26 remain Revision 1 with no earlier findings and required no new error check. No repaired design was left at Revision 1. The requested house-front plate is recorded for the next plate brief, not painted here.

Source follow-ups: the full Himmelfarb/Ikizler review was read; transport/composition claims are verified, while the exact endocrine attribution needs a direct source. Leone still prints U/l and no correction was verified; the approved printed-unit fallback is used. AGAR community-subset denominators and hospitals are unresolved, so Biology FA3 v18 must not be voiced. Knapp2005 dispersal was confirmed. Holden and Mutze2002 supplies the named Flinders Ranges rabbit-disease case. The western NSW drought fallback is used without the unsupported percentage. Physics FA3 v29 steel numbers are explicitly illustrative, but its release inference remains a should-fix finding.

After brief 173: briefs 167 and 168 hand-in artifact hashes were rechecked against their validation records and remain unchanged. Their research is complete. Brief 165 still waits for the 19:00 Sydney reset: 91 requests used, d08 needs 14. Brief 172 full d01 render remains blocked by its missing production brief and the release-render gate; no render was started while Claude was running. Brief 169 art blockers remain recorded. No heavy job is running.

Brief 165 next-lesson approval preflight: math-a12-d08.md says Revision 2 repairs are applied and ready after the pilot, but no dedicated checks/m-a12d08-error-check.md was found (the learning review and Claude science-check files exist). Before any d08 speech, confirm the independent repair/error-check evidence for this exact revision. A ready-to-voice status alone is not being counted as a passed error check. No request was made.


## Codex hand-in: brief 175 step 1, 5 November 2026

Pulled first: already up to date. Eight repair confirmations written to checks/m-a12d08-error-check.md, checks/m-a12d09-error-check.md and checks/y11b-fa1-v01-error-check.md to v06. Biology v01 skipped for remaining compartment wording and a stale cue. Whole-scene capture only; no retry, no unchanged re-voicing.

math-a12-d08: captured, 14 new requests, 5517 characters, about 201.99 speech seconds, US$0.09123 estimated cost.

math-a12-d09: captured, 15 new requests, 6222 characters, about 223.23 speech seconds, US$0.10075 estimated cost.

math-a12-d10: captured, 13 new requests, 5672 characters, about 205.89 speech seconds, US$0.09294 estimated cost.

math-a12-d11: captured, 13 new requests, 5928 characters, about 215.53 speech seconds, US$0.09734 estimated cost.

math-a12-d12: captured, 13 new requests, 5684 characters, about 223.11 speech seconds, US$0.10076 estimated cost.

math-a12-d13: captured, 13 new requests, 5534 characters, about 195.96 speech seconds, US$0.08849 estimated cost.

math-a12-d14: captured, 13 new requests, 5643 characters, about 208.59 speech seconds, US$0.09419 estimated cost.

math-a12-d15: deferred-budget.

math-a12-d16: deferred.

math-a12-d17: deferred.

math-a12-i01: deferred.

math-a12-i02: deferred.

math-a12-i03: deferred.

math-a12-i04: deferred.

math-a12-i05: deferred.

bio-y11-fa1-v01: skipped-unresolved-repair.

bio-y11-fa1-v02: deferred.

bio-y11-fa1-v03: deferred.

bio-y11-fa1-v04: deferred.

bio-y11-fa1-v05: deferred.

bio-y11-fa1-v06: deferred.

Details: work/brief175/google-capture.json. Alignment and human listening pending.


## Codex hand-in: brief 175 step 2 / brief 174, 5 November 2026

Initial balance: unavailable credits. Final checked balance: unavailable. Balance check HTTP 401

Wave: stopped.

Details and recording/dry-run checks: work/brief174/results.json and work/brief174/*.log. No design edits or commits. Human listening pending.

Brief 175 step 1 billed-usage total: 94 new requests, US$0.66078 estimated new speech cost, 0 requests missing usage metadata. Per-lesson capture figures above include reusable takes; this total counts only requests made in this run. work/brief175/google-usage.json records tokens and new cost per lesson.

Brief 174 balance failure saved without credentials to work/brief174/balance.json (HTTP 401). No ElevenLabs generation was attempted. The configured key needs to be corrected before resuming Cycle 1.

Brief 175 step 1 duration correction: the earlier capture-only estimates assumed 48 kHz, but Google saved the source WAVs at 24 kHz. Corrected durations now use each WAV header. The alignment generator independently decodes to 48 kHz before measuring, so its lesson timing is unaffected. Correct capture speech seconds: math-a12-d08 402.20; math-a12-d09 444.44; math-a12-d10 410.00; math-a12-d11 429.28; math-a12-d12 444.44; math-a12-d13 390.28; math-a12-d14 415.40.


## Codex hand-in: brief 175 step 3, 5 November 2026

Google alignment ran serially with a zero-request budget, preserving every take.

math-a12-d08: measured-and-captioned, 5517 characters, 402.20 speech seconds, 488.37 lesson seconds, US$0.09123 estimated cost. Alignment bounds, text, quiet holds and caption export passed. Report: docs/production/claude-pm/lessons/math-a12-d08/measured/validation.json.

math-a12-d09: measured-and-captioned, 6222 characters, 444.44 speech seconds, 530.73 lesson seconds, US$0.10075 estimated cost. Alignment bounds, text, quiet holds and caption export passed. Report: docs/production/claude-pm/lessons/math-a12-d09/measured/validation.json.

math-a12-d10: measured-and-captioned, 5672 characters, 410.00 speech seconds, 496.13 lesson seconds, US$0.09294 estimated cost. Alignment bounds, text, quiet holds and caption export passed. Report: docs/production/claude-pm/lessons/math-a12-d10/measured/validation.json.

math-a12-d11: measured-and-captioned, 5928 characters, 429.28 speech seconds, 515.47 lesson seconds, US$0.09734 estimated cost. Alignment bounds, text, quiet holds and caption export passed. Report: docs/production/claude-pm/lessons/math-a12-d11/measured/validation.json.

math-a12-d12: measured-and-captioned, 5684 characters, 444.44 speech seconds, 530.67 lesson seconds, US$0.10076 estimated cost. Alignment bounds, text, quiet holds and caption export passed. Report: docs/production/claude-pm/lessons/math-a12-d12/measured/validation.json.

math-a12-d13: measured-and-captioned, 5534 characters, 390.28 speech seconds, 476.40 lesson seconds, US$0.08849 estimated cost. Alignment bounds, text, quiet holds and caption export passed. Report: docs/production/claude-pm/lessons/math-a12-d13/measured/validation.json.

math-a12-d14: measured-and-captioned, 5643 characters, 415.40 speech seconds, 501.63 lesson seconds, US$0.09419 estimated cost. Alignment bounds, text, quiet holds and caption export passed. Report: docs/production/claude-pm/lessons/math-a12-d14/measured/validation.json.

Exact built cue timing, pronunciation, scene joins and human listening remain pending.

Brief 175 step 3 verification: all 7 design hashes still match their manifests; all 99 scene text hashes, model and voice records match; each caption export is bound to its measured lesson. Explicit terminal holds checked against the designs in work/brief175/hold-audit.json. Summary: work/brief175/google-final-verification.json. This is source and timing verification, not built playback or human listening.


## Codex hand-in: brief 175 step 4, 5 November 2026

Ran scripts/render-explainer.mjs Explainer-math-a12-d01 --confirm --revision=v1 with RENDER_CONCURRENCY=2 after alignment ended. Exit 0.

Output: C:\lesson-video-generator\out\explainer\Explainer-math-a12-d01\Explainer-math-a12-d01-v1.mp4

Duration: 568.933 s (17068 frames)

Loudness: input -17.56 LUFS, normalised to -14 LUFS

Failed chunks: none recorded. Caption exporter exit: 0. Captions use the exact playback snapshot docs/production/claude-pm/lessons/math-a12-d01/measured/lesson.playback.json. Playback unchanged through render: true. Details: work/brief175/d01-render-report.json and d01-render.log. Human listening and release approval remain pending. No publication or commits.

Brief 175 final media verification: d01 is 1920 x 1080, 30 fps, 17065 frames, 568.933000 seconds, with aac audio. The video stream has 17065 frames against 17068 planned (-3 frames); video duration is 568.833333 seconds while audio and container run 568.933000 seconds. This timing difference is recorded for review. SHA256 8b253589d6260ab0804d3672b25a6fc1cfda6414a93e285012afcc1d6826dc30. 222 caption cues exported to out/explainer/Explainer-math-a12-d01/captions-v1; SRT/VTT hashes and the playback source binding pass. Source/timing and media metadata checks only. Human listening and release approval remain pending. Report: work/brief175/d01-media-verification.json.


## Codex hand-in: brief 176, 5 November 2026

Error-only check of all 48 requested revisions. 45 clean, 0 blockers, 3 should-fix findings. No source edits, speech, sub-agents or commits. Previous reports are unchanged.

- bio-y11-fa2-v02: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v02-rev3-error-check.md.
- bio-y11-fa2-v07: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v07-rev3-error-check.md.
- bio-y11-fa2-v08: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v08-rev3-error-check.md.
- bio-y11-fa2-v09: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v09-rev3-error-check.md.
- bio-y11-fa2-v10: Should fix: Scene 7 writes the tiny-channels event before the micrograph ring on "joined to the sieve tube", but the narration says "joined to the sieve tube" before "tiny channels". Put the ring event before the channel event, using the same speech. The active-loader tag repair itself passes.. Report: docs/production/claude-pm/checks/y11b-fa2-v10-rev3-error-check.md.
- bio-y11-fa2-v11: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v11-rev3-error-check.md.
- bio-y11-fa2-v12: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v12-rev3-error-check.md.
- bio-y11-fa2-v16: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v16-rev3-error-check.md.
- bio-y11-fa2-v19: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v19-rev3-error-check.md.
- bio-y11-fa2-v21: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v21-rev3-error-check.md.
- bio-y11-fa2-v25: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v25-rev3-error-check.md.
- bio-y11-fa2-v28: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v28-rev3-error-check.md.
- bio-y11-fa2-v29: Should fix: Scene 6 writes the return-arrow event on "negative feedback" before the thinning-stream event on "release less insulin". The narration releases less insulin first, then names negative feedback. Reorder these two event instructions to follow the speech. The feedback 12b repair itself passes.. Report: docs/production/claude-pm/checks/y11b-fa2-v29-rev3-error-check.md.
- bio-y11-fa2-v30: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa2-v30-rev3-error-check.md.
- bio-y11-fa3-v02: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa3-v02-rev3-error-check.md.
- bio-y11-fa3-v09: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa3-v09-rev3-error-check.md.
- bio-y11-fa3-v18: clean at error check; voicing hold retained under brief 176. Report: docs/production/claude-pm/checks/y11b-fa3-v18-rev3-error-check.md.
- bio-y11-fa3-v20: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa3-v20-rev3-error-check.md.
- bio-y11-fa3-v24: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa3-v24-rev3-error-check.md.
- bio-y11-fa3-v25: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa3-v25-rev3-error-check.md.
- bio-y11-fa3-v26: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa3-v26-rev3-error-check.md.
- bio-y11-fa3-v30: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa3-v30-rev3-error-check.md.
- bio-y11-fa3-v31: clean at error check. Report: docs/production/claude-pm/checks/y11b-fa3-v31-rev3-error-check.md.
- phys-y11-fa2-v20: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa2-v20-rev3-error-check.md.
- phys-y11-fa2-v24: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa2-v24-rev3-error-check.md.
- phys-y11-fa2-v25: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa2-v25-rev3-error-check.md.
- phys-y11-fa2-v26: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa2-v26-rev3-error-check.md.
- phys-y11-fa2-v28: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa2-v28-rev3-error-check.md.
- phys-y11-fa2-v30: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa2-v30-rev3-error-check.md.
- phys-y11-fa3-v02: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa3-v02-rev3-error-check.md.
- phys-y11-fa3-v07: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa3-v07-rev3-error-check.md.
- phys-y11-fa3-v19: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa3-v19-rev3-error-check.md.
- phys-y11-fa3-v24: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa3-v24-rev3-error-check.md.
- phys-y11-fa3-v27: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa3-v27-rev3-error-check.md.
- phys-y11-fa3-v29: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa3-v29-rev3-error-check.md.
- phys-y11-fa0-v01: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa0-v01-error-check.md.
- phys-y11-fa0-v02: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa0-v02-error-check.md.
- phys-y11-fa0-v03: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa0-v03-error-check.md.
- phys-y11-fa0-v04: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa0-v04-error-check.md.
- phys-y11-fa0-v05: Should fix: Scene 4 triggers the two end-dot glow on "only two readings", which is absent from the narration. It says "only the highest and lowest readings". Retie that event to the existing phrase, with no added speech. The separate-run and repeat-uncertainty repairs pass.. Report: docs/production/claude-pm/checks/p-y11-fa0-v05-error-check.md.
- phys-y11-fa0-v06: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa0-v06-error-check.md.
- phys-y11-fa0-v07: clean at error check. Report: docs/production/claude-pm/checks/p-y11-fa0-v07-error-check.md.
- math-a12-s04: clean at error check. Report: docs/production/claude-pm/checks/m-a12s04-rev3-error-check.md.
- math-a12-s08: clean at error check. Report: docs/production/claude-pm/checks/m-a12s08-rev3-error-check.md.
- math-a12-s09: clean at error check. Report: docs/production/claude-pm/checks/m-a12s09-rev3-error-check.md.
- math-a12-s10: clean at error check. Report: docs/production/claude-pm/checks/m-a12s10-rev3-error-check.md.
- math-a12-s12: clean at error check. Report: docs/production/claude-pm/checks/m-a12s12-rev3-error-check.md.
- math-a12-i08: clean at error check. Report: docs/production/claude-pm/checks/m-a12i08-rev3-error-check.md.

All narration recounts match; s08 is 5,526 characters. FA0 v02 is about 569.5 seconds and v05 about 569.9 seconds using the original headline and repair delta, with unchanged holds. Named handoffs pass at source level. No U+2014 or U+2061 found. Calculations, cue audit, handoff pairs and validation: work/brief176/.

AGAR follow-up: the full primary publisher report text opened through its indexed PDF entry and confirms 7.0% (2013) and 11.4% (2016) on printed pages v and 57. Direct PDF/page screenshots still returned access errors, so no visual page inspection is claimed. The comparison-year denominators and hospitals remain unverified, and v18 stays on voicing hold regardless of this result. See work/brief176/source-checks.md and agar-primary-check.json. Clean designs may proceed to plates and then Google voicing, except the held v18. Listening, built cue timing and image/apparatus review remain pending.


## Codex hand-in: brief 178 prerequisite check, 5 November 2026

Brief 178 has not started its reviews or plates. It says "Run after brief 177", but this checkout has none of the twenty c-y11-m1-v01 to v10 learning/science reports, no assets/brief177-manifest.json and no brief 177 hand-in. All ten brief 178 designs exist. Input hashes and asset path checks are in checks/brief178-prerequisite-check.json. Missing asset references include the earlier crucible and balance requests; no artwork has been inspected or approved by this inventory. The owner has been asked whether to complete 177 first or proceed directly with 178. No design edits, speech, sub-agents or commits. The ten design reviews, site corrections, build-item list and plates remain pending.


## Codex hand-in: brief 177, 5 November 2026

**c-y11-m1-v01:** 0 blockers, 1 should fix, 0 optional; 6,302 characters, about 564 s. Scene 5 moves coded iron filings away from a painted iron-and-sulfur heap, but the requested mixed plate already contains the iron. Specify a removable iron layer or a matched sulfur-only residue state so painted iron does not remain after the magnet lifts it. This needs no speech addition; retain the existing magnet demonstration. Reports: `checks/c-y11-m1-v01-learning-review.md` and `checks/c-y11-m1-v01-science-check.md`.

**c-y11-m1-v02:** 0 blockers, 1 should fix, 0 optional; 6,356 characters, about 565 s. Scene 10 says "it takes two properties to be sure" after scene 7 correctly says the identification is not certain. A beginner will remember the mnemonic as a guarantee. Replace that phrase with "check another property" in the speech and matching handwriting. This is shorter and preserves the intended evidence test. Reports: `checks/c-y11-m1-v02-learning-review.md` and `checks/c-y11-m1-v02-science-check.md`.

**c-y11-m1-v03:** 0 blockers, 1 should fix, 0 optional; 5,897 characters, about 531 s. Scenes 11 and 15 say "no filter can catch it" and "no filter catches dissolved ions". The lesson establishes ordinary filter paper, while selective membranes can remove dissolved species. Use "filter paper cannot catch it" and "filter paper misses dissolved ions". Fund any extra characters by dropping "Here’s the rule" in scene 11; no new scene or caveat needed. Reports: `checks/c-y11-m1-v03-learning-review.md` and `checks/c-y11-m1-v03-science-check.md`.

**c-y11-m1-v04:** 0 blockers, 2 should fix, 0 optional; 6,216 characters, about 556 s. Attempt 2/feedback 2 infers that vapour is only slightly richer in P from 68 and 72 degrees C alone. The same answer correctly says pure boiling points do not establish azeotrope behaviour. State in the question that the first vapour is only slightly richer in P, or replace this pair with the already quantified ethanol-water case. Fund the added condition by cutting "Then state whether these boiling points guarantee that pure P can be collected" from speech and retaining that demand on the full card. The reused fallback m7-school-distillation-setup-v1.png has a stoppered receiver and its thermometer bulb is below the side-arm opening in the inspected image. It cannot serve as the safety diagram in scenes 2 and 3 without repair. Use the requested new open-receiver plate and verify the bulb position. No speech addition. Reports: `checks/c-y11-m1-v04-learning-review.md` and `checks/c-y11-m1-v04-science-check.md`.

**c-y11-m1-v05:** 0 blockers, 1 should fix, 0 optional; 5,970 characters, about 539 s. Scene 5 writes 0 < Rf < 1 and scene 10 says always less than one. A component that remains on the baseline has Rf = 0; an unresolved component can move with the front. Change the limit tag to 0 ≤ Rf ≤ 1 and "always less than 1" to "cannot exceed 1". Replace the corresponding sentence with "The spot cannot pass the front". These repairs are shorter. Reports: `checks/c-y11-m1-v05-learning-review.md` and `checks/c-y11-m1-v05-science-check.md`.

**c-y11-m1-v06:** 0 blockers, 0 should fix, 0 optional; 6,056 characters, about 542 s. No material source finding. Reports: `checks/c-y11-m1-v06-learning-review.md` and `checks/c-y11-m1-v06-science-check.md`.

**c-y11-m1-v07:** 0 blockers, 1 should fix, 0 optional; 6,108 characters, about 547 s. Scene 8 has 749 narration characters and introduces hydrate notation, water group mass, whole formula mass and division. Keep only H2O/5H2O while computing 90.0, then clear that working except 90.0 when building 249.6, then dim the formula-mass expansion when dividing. Split its visual directions at those existing cues; no extra speech or duration. Do not leave all four rows bright together. Reports: `checks/c-y11-m1-v07-learning-review.md` and `checks/c-y11-m1-v07-science-check.md`.

**c-y11-m1-v08:** 0 blockers, 1 should fix, 0 optional; 5,900 characters, about 530 s. Scene 10 has 759 characters after a lesson about reading nuclide labels. Keep the three carbon examples, then replace them with the enlarged nucleus, then replace it with the N/Z sketch. Do not retain three mechanisms simultaneously. If the build cannot stage this at the existing cues, cut the spoken lead example, which is already a reserve cut, and keep its labelled point silent. Reports: `checks/c-y11-m1-v08-learning-review.md` and `checks/c-y11-m1-v08-science-check.md`.

**c-y11-m1-v09:** 0 blockers, 1 should fix, 0 optional; 6,202 characters, about 552 s. Scene 4 rounds the contributions before adding: 35 × 0.7577 = 26.5195 and 37 × 0.2423 = 8.9651, total 35.4846, which rounds to 35.48, not 35.49. Keep guard digits in working and change the spoken result to thirty-five point four eight. The spoken replacement is length-neutral. Update the matching row and Numbers used, retaining 35.5 at three significant figures. Reports: `checks/c-y11-m1-v09-learning-review.md` and `checks/c-y11-m1-v09-science-check.md`.

**c-y11-m1-v10:** 0 blockers, 1 should fix, 0 optional; 5,645 characters, about 511 s. Scene 1 says lines draw left to right by wavelength, scene 2 points from red towards violet for increasing energy, and scene 6 fixes ultraviolet to the left edge. Lock one orientation explicitly: either wavelength increases left to right with violet at left and red at right, or energy increases left to right with red at left and violet at right. Put ultraviolet beyond violet in that orientation. No speech addition. This prevents opposite interpretations when the strip is built. Reports: `checks/c-y11-m1-v10-learning-review.md` and `checks/c-y11-m1-v10-science-check.md`.

Plates: 22 requested candidates and 2 corrective candidates painted; manifest `assets/brief177-manifest.json`, native/phone composites, overlays and strip test in `assets/brief177-qa/`. All remain on margin/edge QA hold; three-way crucible canvas match fails and exact registration is not passed. All reused plate filenames exist; the two remaining inventory references are the coded glass rod. Per-design provenance saved. No plate approval. No design edits, speech, sub-agents or commits.



## Codex hand-in: brief 178, 5 November 2026

**c-y11-ws-v01:** 0 blockers, 3 should fix, 0 optional; 6,333 characters, about 568.1 s. Scenes 5 and 6 define specific as "which way, or by how much", then reject "lose some mass" because it gives no amount. That statement already gives a direction. Make the criterion "specific enough to answer the inquiry question", which asks for a percentage, and judge it against that question. Fund added words by deleting "With four checks" and "So almost any result would fit it"; keep the no-reason finding separate. Scene 8 relies on Group C having reached steady mass, but scene 7 only says roaring flame, black powder and 47.2% loss before the prediction. Put "heated to steady mass" on Group C’s EvidenceCard before its countdown. No extra speech needed. Otherwise the student cannot distinguish the stated condition from the method fault. The headline count 6,319 omits the 14 spaces joining scenes. The same parser convention used in brief 177 gives 6,333. Update the count and estimate, without changing speech. With the same holds, add 1.05 s to the headline estimate. Reports: `checks/c-y11-ws-v01-learning-review.md` and `checks/c-y11-ws-v01-science-check.md`.

**c-y11-ws-v02:** 0 blockers, 2 should fix, 0 optional; 6,360 characters, about 569.1 s. Scene 2 is 726 narration characters and adds four controls, a validity definition and decomposition. Show the current control beside the apparatus, dim it as the next is named, then assemble the short PlanBoard recap after the causes. Keep the current case and mass visible. No speech or duration added. The headline count 6,345 omits the 15 spaces joining scenes. The same parser convention used in brief 177 gives 6,360. Update the count and estimate, without changing speech. With the same holds, add 1.13 s to the headline estimate. Reports: `checks/c-y11-ws-v02-learning-review.md` and `checks/c-y11-ws-v02-science-check.md`.

**c-y11-ws-v03:** 0 blockers, 4 should fix, 0 optional; 6,331 characters, about 565.1 s. Scene 3 says turn the flame down after powder darkens. Darkening means decomposition has already contaminated the water-loss measurement. Stop heating and do not use that run to measure water content; restart with gentle heating after teacher review. Fund this by cutting "Managing risk isn’t a form you fill in once" and keeping its positive check-and-fix sentence. Scene 10 links an in-text data-sheet citation to a copper-sulfate SDS reference. Match the in-text claim and the reference entry to the same document, then show a separate SDS example if wanted. Do this on screen without extra speech. Feedback 1 says Q is "about four percent too high", while the graphic correctly says percentage points. Change speech to "about four percentage points high". Fund it by removing "Only" and "every time" from that feedback; do not change the data. The headline count 6,316 omits the 15 spaces joining scenes. The same parser convention used in brief 177 gives 6,331. Update the count and estimate, without changing speech. With the same holds, add 1.13 s to the headline estimate. Reports: `checks/c-y11-ws-v03-learning-review.md` and `checks/c-y11-ws-v03-science-check.md`.

**c-y11-m1-v11:** 0 blockers, 1 should fix, 0 optional; 5,830 characters, about 529.4 s. The headline count 5,812 omits the 18 spaces joining scenes. The same parser convention used in brief 177 gives 5,830. Update the count and estimate, without changing speech. With the same holds, add 1.35 s to the headline estimate. Reports: `checks/c-y11-m1-v11-learning-review.md` and `checks/c-y11-m1-v11-science-check.md`.

**c-y11-m1-v12:** 0 blockers, 2 should fix, 0 optional; 6,271 characters, about 562.2 s. Scenes 4 and 7 apply group 18 minus 10 and full outer s and p subshells to helium, despite showing He 1s2. Add the spoken exception "Helium has two" and use "full outer shell" for noble gases. Fund it by cutting the hook’s "So the table was sorting electrons all along" sentence. The main-group rule should not produce eight electrons for the displayed helium atom. The headline count 6,255 omits the 16 spaces joining scenes. The same parser convention used in brief 177 gives 6,271. Update the count and estimate, without changing speech. With the same holds, add 1.20 s to the headline estimate. Reports: `checks/c-y11-m1-v12-learning-review.md` and `checks/c-y11-m1-v12-science-check.md`.

**c-y11-m1-v13:** 0 blockers, 2 should fix, 0 optional; 5,621 characters, about 510.0 s. Scene 2 defines radius by halving the distance between any two bonded atoms. Specify two identical bonded atoms for this introductory construction, and label 204 pm as the model distance from 2 × 102, not a measured Cl2 bond. Replace "two bonded atoms" with "two identical atoms bonded together" and cut "First, what are we measuring?" to fund it. Scene 3 replaces the nucleus label 11+ with +1, making sodium appear to lose protons, and then names that estimate effective nuclear charge. Keep 11+ on the nucleus; put +1 beside the screened outer-electron arrow labelled "core-charge estimate". In scene 7 replace "same net pull" with "same core charge". This is length-neutral and keeps root decision 15’s countable estimate without equating it to exact effective charge. Reports: `checks/c-y11-m1-v13-learning-review.md` and `checks/c-y11-m1-v13-science-check.md`.

**c-y11-m1-v14:** 1 blockers, 0 should fix, 0 optional; 5,612 characters, about 509.0 s. Scene 2 introduces a mole and kJ/mol before the course has explained that term. Give a short plain meaning, for example a mole is a fixed large number of atoms, while retaining gaseous atoms and energy per mole. Fund this by cutting the second sentence of scene 10, which repeats the top-right/bottom-left examples. A learner should be able to say what the quoted energy is for. Reports: `checks/c-y11-m1-v14-learning-review.md` and `checks/c-y11-m1-v14-science-check.md`.

**c-y11-m1-v15:** 2 blockers, 0 should fix, 0 optional; 5,608 characters, about 512.0 s. Scene 7 animates one Li atom and one water molecule producing Li+, OH- and H2. That creates a third hydrogen atom. Animate two metal atoms and two waters producing two metal ions, two hydroxides and one hydrogen molecule; use the same counts for Na and K. No extra speech. The written equations already use the correct counts. Root decision 17 requires current NSW school chemical-safety verification. The public NSW page links the chemical-specific rules to a staff login. Exact permissions, metal size, distances, screen requirements and indicator conditions could not be verified. Keep this demonstration wording on hold until the teacher/PM checks the current CSIS entries, or use the already offered approved-video route. No outside-school demonstration establishes NSW clearance. Reports: `checks/c-y11-m1-v15-learning-review.md` and `checks/c-y11-m1-v15-science-check.md`.

**c-y11-m1-v16:** 1 blockers, 1 should fix, 0 optional; 5,625 characters, about 513.0 s. The required current NSW check of approved chloride solutions and dilute HCl loop cleaning could not be completed because the chemical-specific CSIS page requires staff access. The general public guidance supports risk assessment, but does not establish the named chemical concentrations or approval. Keep the practical wording on hold until the teacher/PM checks those exact entries. The blank-first method and no-flame-colour loop check are useful and should remain. Scene 1 says "Nothing is burning" while a Bunsen flame is burning fuel. Replace it with "The sample isn’t burning" and change the matching tag to "sample colours the flame". Fund the extra characters by removing "that same" before lilac. Reports: `checks/c-y11-m1-v16-learning-review.md` and `checks/c-y11-m1-v16-science-check.md`.

**c-y11-m1-v17:** 0 blockers, 3 should fix, 0 optional; 6,249 characters, about 559.0 s. Scene 1 says the smoke alarm on the learner’s ceiling contains americium. That applies to ionisation alarms, not every smoke alarm. Replace "The smoke alarm on your ceiling" with "An ionisation smoke alarm" and label the painted alarm accordingly. This is shorter and preserves the alpha application. Scene 9 says technetium-99 M without explaining M, then scene 10 implies proton/neutron balance alone decides the radiation. Briefly explain that M marks a nucleus holding extra energy, and include nuclear energy in the origin comparison. Fund it by cutting scene 9’s generic first two sentences on human-made production; keep the explicit Co-59 neutron example and Lucas Heights link. Scene 11 says a six-hour half-life means Tc-99m is "soon gone". Replace that clause with "its activity falls quickly" and retain the stated definition that half the nuclei decay. This is shorter and avoids suggesting that one half-life removes the isotope. Reports: `checks/c-y11-m1-v17-learning-review.md` and `checks/c-y11-m1-v17-science-check.md`.

Plates: 27 painted candidates (including the optional empty lidded crucible) and 2 translation-only K/Sr flame copies saved. Manifest `assets/brief178-manifest.json`, per-design provenance and native/phone composites, state overlays, colour/sample contacts and placement studies in `assets/brief178-qa/`. All new paintings remain on edge/margin QA hold; crucible, sample and trough canvases do not match the requested common canvases, lithium does not register with the shared burner, and the screen is too hazy. Translation pixels are unchanged, but existing burner outline differences remain. Every reused painted filename resolves; the suffix-only inventory hit resolves to the existing blue-lit crucible. Shared components are in `assets/brief178-build-items.md`. No plate approval. Exact voiced playback, listening and v15/v16 NSW staff-only safety checks remain pending. No design edits, speech, sub-agents or commits.



## Codex hand-in: brief 194 / brief 174, 6 November 2026

Plan allowance: 120000 credits. Plan allowance less cumulative billed characters: 120000. bio-m8-g03: generation stopped on q1-question. No retry.

Wave: stopped.

bio-m8-g03: partial-stopped.

Details and recording/dry-run checks: work/brief174/results.json and work/brief174/*.log. No design edits or commits. Human listening pending.


## Codex hand-in: brief 194 / brief 174, 6 November 2026

Plan allowance: 120000 credits. Plan allowance less cumulative billed characters: 117945. chem-m5-g02: dry-run character count differs from the design

bio-m8-g03: measured, 5532 characters, 2055 credits used, 11 scenes generated, 4 reused, 458.23 seconds. Report: docs/production/claude-pm/lessons/m8g03/measured/measured-report.json.

bio-m8-p01: skipped-recording-check.

Wave: stopped.

Details and recording/dry-run checks: work/brief174/results.json and work/brief174/*.log. No design edits or commits. Human listening pending.


## Owner queue change, 6 November 2026

194, then 185 (axis-label fix only, no render), 186, 180 to 184, then 187 to 193 after 179. Brief 194 is running serially. No d01 v2 render has started. Further Maths Google requests under brief 165 are paused; preserve existing takes and measured data. Use the post-19:00 Sydney Google allowance for ready Year 11 Biology and Physics designs instead. Exact lesson eligibility and request counts must pass before speech.


## Codex hand-in: brief 194 / brief 174, 6 November 2026

Plan allowance: 117945 credits. Plan allowance less cumulative billed characters: 73549. Cycle complete.

bio-m8-g03: already-measured.

bio-m8-p01: skipped-recording-check.

chem-m5-g02: skipped-character-count-mismatch.

bio-m8-p02: skipped-recording-check.

chem-m8-p03: measured, 6277 characters, 8818 credits used, 16 scenes generated, 1 reused, 510.80 seconds. Report: docs/production/claude-pm/lessons/m8p03/measured/measured-report.json.

bio-m8-b06: skipped-recording-check.

chem-m8-c04: measured, 6288 characters, 6213 credits used, 18 scenes generated, 1 reused, 508.80 seconds. Report: docs/production/claude-pm/lessons/m8c04/measured/measured-report.json.

bio-m8-b07: skipped-recording-check.

chem-m8-p04: measured, 5806 characters, 5731 credits used, 17 scenes generated, 1 reused, 457.77 seconds. Report: docs/production/claude-pm/lessons/m8p04/measured/measured-report.json.

bio-m8-b08: skipped-recording-check.

chem-m8-g02: skipped-character-count-mismatch.

bio-m8-b09: skipped-recording-check.

chem-m8-c05: measured, 5865 characters, 5790 credits used, 17 scenes generated, 1 reused, 475.20 seconds. Report: docs/production/claude-pm/lessons/m8c05/measured/measured-report.json.

bio-m8-b10: skipped-recording-check.

chem-m8-c06: measured, 6269 characters, 6194 credits used, 20 scenes generated, 1 reused, 531.20 seconds. Report: docs/production/claude-pm/lessons/m8c06/measured/measured-report.json.

bio-m8-b11: skipped-recording-check.

chem-m8-c08: measured, 6002 characters, 5927 credits used, 16 scenes generated, 1 reused, 490.67 seconds. Report: docs/production/claude-pm/lessons/m8c08/measured/measured-report.json.

bio-m8-g01: measured, 5798 characters, 5723 credits used, 14 scenes generated, 1 reused, 485.20 seconds. Report: docs/production/claude-pm/lessons/m8g01b/measured/measured-report.json.

chem-m8-p05: skipped-build-error.

Details and recording/dry-run checks: work/brief174/results.json and work/brief174/*.log. No design edits or commits. Human listening pending.


## Codex hand-in: brief 194 / brief 174, 6 November 2026

Plan allowance: 73549 credits. Plan allowance less cumulative billed characters: 67389. Cycle complete.

chem-m8-p05: measured, 6235 characters, 6160 credits used, 17 scenes generated, 1 reused, 502.63 seconds. Report: docs/production/claude-pm/lessons/m8p05/measured/measured-report.json.

Details and recording/dry-run checks: work/brief174/results.json and work/brief174/*.log. No design edits or commits. Human listening pending.


## Codex hand-in: brief 194 final tally, 6 November 2026

bio-m8-g03: measured; 5532 narration characters; 4671 billed-character tally; 2055 reported credit cost; 11 scenes generated, 4 reused; 458.23 seconds; report: docs/production/claude-pm/lessons/m8g03/measured/measured-report.json.

bio-m8-p01: skipped-recording-check; 5811 narration characters; 0 billed-character tally; 0 reported credit cost; 0 scenes generated; Recording-stage check failed. See the per-lesson recording-check.log..

chem-m5-g02: skipped-character-count-mismatch; 5968 narration characters; 0 billed-character tally; 0 reported credit cost; 0 scenes generated; Narration recount 5968; declared 5960, 5950..

bio-m8-p02: skipped-recording-check; 5880 narration characters; 0 billed-character tally; 0 reported credit cost; 0 scenes generated; Recording-stage check failed. See the per-lesson recording-check.log..

chem-m8-p03: measured; 6277 narration characters; 6202 billed-character tally; 2729 reported credit cost; 16 scenes generated, 1 reused; 510.80 seconds; report: docs/production/claude-pm/lessons/m8p03/measured/measured-report.json.

bio-m8-b06: skipped-recording-check; 5669 narration characters; 0 billed-character tally; 0 reported credit cost; 0 scenes generated; Recording-stage check failed. See the per-lesson recording-check.log..

chem-m8-c04: measured; 6288 narration characters; 6213 billed-character tally; 2736 reported credit cost; 18 scenes generated, 1 reused; 508.80 seconds; report: docs/production/claude-pm/lessons/m8c04/measured/measured-report.json.

bio-m8-b07: skipped-recording-check; 5711 narration characters; 0 billed-character tally; 0 reported credit cost; 0 scenes generated; Recording-stage check failed. See the per-lesson recording-check.log..

chem-m8-p04: measured; 5806 narration characters; 5731 billed-character tally; 2520 reported credit cost; 17 scenes generated, 1 reused; 457.77 seconds; report: docs/production/claude-pm/lessons/m8p04/measured/measured-report.json.

bio-m8-b08: skipped-recording-check; 5737 narration characters; 0 billed-character tally; 0 reported credit cost; 0 scenes generated; Recording-stage check failed. See the per-lesson recording-check.log..

chem-m8-g02: skipped-character-count-mismatch; 5794 narration characters; 0 billed-character tally; 0 reported credit cost; 0 scenes generated; Narration recount 5794; declared 5785..

bio-m8-b09: skipped-recording-check; 5929 narration characters; 0 billed-character tally; 0 reported credit cost; 0 scenes generated; Recording-stage check failed. See the per-lesson recording-check.log..

chem-m8-c05: measured; 5865 narration characters; 5790 billed-character tally; 2546 reported credit cost; 17 scenes generated, 1 reused; 475.20 seconds; report: docs/production/claude-pm/lessons/m8c05/measured/measured-report.json.

bio-m8-b10: skipped-recording-check; 5655 narration characters; 0 billed-character tally; 0 reported credit cost; 0 scenes generated; Recording-stage check failed. See the per-lesson recording-check.log..

chem-m8-c06: measured; 6269 narration characters; 6194 billed-character tally; 2725 reported credit cost; 20 scenes generated, 1 reused; 531.20 seconds; report: docs/production/claude-pm/lessons/m8c06/measured/measured-report.json.

bio-m8-b11: skipped-recording-check; 5912 narration characters; 0 billed-character tally; 0 reported credit cost; 0 scenes generated; Recording-stage check failed. See the per-lesson recording-check.log..

chem-m8-c08: measured; 6002 narration characters; 5927 billed-character tally; 2606 reported credit cost; 16 scenes generated, 1 reused; 490.67 seconds; report: docs/production/claude-pm/lessons/m8c08/measured/measured-report.json.

bio-m8-g01: measured; 5798 narration characters; 5723 billed-character tally; 2520 reported credit cost; 14 scenes generated, 1 reused; 485.20 seconds; report: docs/production/claude-pm/lessons/m8g01b/measured/measured-report.json.

chem-m8-p05: measured; 6235 narration characters; 6160 billed-character tally; 2710 reported credit cost; 17 scenes generated, 1 reused; 502.63 seconds; report: docs/production/claude-pm/lessons/m8p05/measured/measured-report.json.

Cumulative billed-character tally: 52611 of the 115,000 cap. No balance read. The earlier 2,055 G03 figure was the character-cost header, not the character count. G03 has 4,671 newly sent characters. The corrected tally uses character-count headers or sent characters; provider credit cost is kept separately. Cycle 1 checked through the last listed lesson. Human listening pending. Details: work/brief174/final194.json and spend.json. No design edits, full exports, sub-agents or commits.


## Codex hand-in: brief 185, 6 November 2026

Axis tick fix only, following the owner's no-render change. src/explainer/math/graphs.tsx now chooses round steps from 1, 2, 2.5 or 5 times powers of ten, starts at a step multiple, includes zero in range and removes floating-point label noise. Explicit xTicks/yTicks are unchanged. All 17,068 frames in the 16 scenes of the one registered maths lesson were checked for graph windows. Only d01 scenes 08 and 09 change: scene 08 x labels are -1.5, -1, -0.5, 0, 0.5; scene 09 labels run -4.5 to -2 by 0.5. Before/after sets: work/brief185/ticks-before-after.json. Six regression ranges, 1,000 random windows and four invalid-range checks pass: work/brief185/tick-checks.json.

No stills, v2 render or new captions exported. The measured lesson and v1 MP4 hashes are unchanged. The saved v1 media check records 17,065 video frames against 17,068 planned, a 3-frame (0.1 s) difference; video 568.833333 s, audio 568.933 s. Whether v2 repeats it is untested because rendering was cancelled. Review: work/brief185/review.json. No narration or design edits, sub-agents or commits.

Brief 185 type check: d01 and its shared imports pass with work/brief166/tsconfig.json. The full-project TypeScript attempt reached the default Node heap limit; no full-project pass is claimed.


## Codex hand-in: brief 186, 6 November 2026

23 revisions checked: 21 clean, 0 blockers, 2 should-fix cue findings. No source edits, speech, sub-agents or commits. Earlier reports are unchanged.

- chem-y11-m1-v01: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v01-rev2-error-check.md.
- chem-y11-m1-v02: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v02-rev2-error-check.md.
- chem-y11-m1-v03: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v03-rev2-error-check.md.
- chem-y11-m1-v04: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v04-rev2-error-check.md.
- chem-y11-m1-v05: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v05-rev2-error-check.md.
- chem-y11-m1-v07: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v07-rev2-error-check.md.
- chem-y11-m1-v08: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v08-rev2-error-check.md.
- chem-y11-m1-v09: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v09-rev2-error-check.md.
- chem-y11-m1-v10: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v10-rev2-error-check.md.
- chem-y11-m1-v11: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v11-rev2-error-check.md.
- chem-y11-m1-v12: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v12-rev2-error-check.md.
- chem-y11-m1-v13: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v13-rev2-error-check.md.
- chem-y11-m1-v14: Scene 2 still says the sodium equation and departing electron appear on the third sentence. The added mole explanation makes the third sentence the gaseous-atoms definition; the sodium example is now the fourth. Retie this change to the existing phrase "For sodium". No added speech or time.. Report: docs/production/claude-pm/checks/c-y11-m1-v14-rev2-error-check.md.
- chem-y11-m1-v15: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v15-rev2-error-check.md.
- chem-y11-m1-v16: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v16-rev2-error-check.md.
- chem-y11-m1-v17: clean. Report: docs/production/claude-pm/checks/c-y11-m1-v17-rev2-error-check.md.
- chem-y11-ws-v01: Scene 6 lists the crosses on "specific" and "reasoned" before the number-line action on "gives no amount", but the amount phrase comes first in the speech. "Reasoned" is no longer spoken there. Shade the number line on "gives no amount", cross the specific check on "isn't specific enough", then cross the reasoned check on "no reason". Keep the ticks and final hypothesis test. No added speech or time.. Report: docs/production/claude-pm/checks/c-y11-ws-v01-rev2-error-check.md.
- chem-y11-ws-v02: clean. Report: docs/production/claude-pm/checks/c-y11-ws-v02-rev2-error-check.md.
- chem-y11-ws-v03: clean. Report: docs/production/claude-pm/checks/c-y11-ws-v03-rev2-error-check.md.
- bio-y11-fa2-v10: clean. Report: docs/production/claude-pm/checks/y11b-fa2-v10-rev4-error-check.md.
- bio-y11-fa2-v29: clean. Report: docs/production/claude-pm/checks/y11b-fa2-v29-rev4-error-check.md.
- phys-y11-fa0-v05: clean. Report: docs/production/claude-pm/checks/p-y11-fa0-v05-rev3-error-check.md.
- bio-y11-fa1-v01: clean. Report: docs/production/claude-pm/checks/y11b-fa1-v01-rev3-error-check.md.

The chlorine result recalculates to 35.4846, then 35.48. Counts and estimates agree; all estimates stay below 570 seconds. Root decision 33's safety fallbacks are present; no new chemical-specific school approval is claimed. The phloem micrograph entry and ring order pass at source, with its short measured interval still to check in the voiced build. Biology FA1 v01 joins the Google queue after reset. Source-clean Biology FA2 and Physics FA0 may proceed to plates and Google voicing. Source-clean Chemistry proceeds to plates; course reviews precede voicing. Existing art QA holds and human listening remain. Evidence: work/brief186/audit.json, recalculation.json, opening-pairs.json and validation.json.


## Brief 179: source reviews (6 November 2026)

**c-y11-m1-v18:** 0 blockers, 3 should fix, 0 optional; 5,976 characters, about 536 s. One trap costs marks every year is an unsupported recurring exam-outcome claim. Replace that opener with Here is the trap. This is shorter and keeps the actual contrast. The balance-check sentence cues are stale. In scene 4 the sixth sentence asks which element has ninety protons, before thorium is identified; the spoken check starts on Check both rows. In scene 14 the third sentence identifies neptunium; the spoken check is the next sentence. Retie the band checks to Check both rows and Check, with no speech change. Root decision 26 chooses gamma as gamma alone, but the source still prints 0/0 gamma and leaves the choice open. Apply the accepted notation throughout. Keep zeros in the balance rows if useful; no speech change. Reports: `checks/c-y11-m1-v18-learning-review.md` and `checks/c-y11-m1-v18-science-check.md`. Physical-reference access gaps are stated in the science report; no recorded approval claimed.

**c-y11-m1-v19:** 0 blockers, 3 should fix, 0 optional; 6,377 characters, about 566 s. The real rusted nail is labelled rust: Fe2O3 and scene 9 asks for the formula of rust. Rust is hydrated iron oxide/oxyhydroxide, not a pure anhydrous Fe2O3 sample with one fixed formula. Retain the nail as context but make Fe2O3 the iron(III) oxide example, not the formula of rust. Scope the task and spoken labels consistently, funded by shortening the hook transition. Noble gases do not form ions at all contradicts v14's ionisation-energy teaching and known noble-gas ions. Use noble gases usually stay neutral and the same screen tag. This is shorter and does not add a new objective. On the fifth sentence writes Al2O3 while that sentence is still finding the common charge of six. The two-Al/three-oxide count comes in sentence six and the formula in sentence seven. Reveal the formula on The formula is, after the ion counts, with no speech change. Reports: `checks/c-y11-m1-v19-learning-review.md` and `checks/c-y11-m1-v19-science-check.md`. Physical-reference access gaps are stated in the science report; no recorded approval claimed.

**c-y11-m1-v20:** 1 blockers, 1 should fix, 0 optional; 5,649 characters, about 512 s. The lesson calls compositional prefixes on ionic compounds incorrect IUPAC names and asks students to correct copper dichloride. IUPAC explicitly accepts iron dichloride/iron trichloride alongside the Stock names; the blanket rule and this error task reject a valid naming system. Frame the taught route as Stock naming for these ionic examples. Change the copper mistake to copper(I) chloride for CuCl2, so the correction tests the actual +2 charge. Remove the blanket crosses on valid alternative names and match the memory aid. Cut scene 11's unsupported most-common-mistake sentence to fund the framing. Source: https://iupac.qmul.ac.uk/BriefGuide/inorganic.html The rust nail is again equated with Fe2O3. Apply v19's correction here: name the iron(III) oxide example without giving real rust one pure anhydrous formula. Reports: `checks/c-y11-m1-v20-learning-review.md` and `checks/c-y11-m1-v20-science-check.md`. Physical-reference access gaps are stated in the science report; no recorded approval claimed.

**c-y11-m1-v21:** 0 blockers, 0 should fix, 0 optional; 6,330 characters, about 563 s. No material source finding. Reports: `checks/c-y11-m1-v21-learning-review.md` and `checks/c-y11-m1-v21-science-check.md`. Physical-reference access gaps are stated in the science report; no recorded approval claimed.

**c-y11-m1-v22:** 1 blockers, 1 should fix, 0 optional; 5,885 characters, about 530 s. The chosen halite crystal is said to be hard and not easily scratched. Halite has Mohs hardness about 2 to 2.5 and is a soft mineral. Keep it for cleavage/brittleness, but remove the scratch-resistance claim and explain resistance to moving ions without claiming every ionic crystal is scratch-hard. The exam-trap opener can be cut to fund any short contrast. Sources: https://commonminerals.esci.umn.edu/minerals-g-m/halite and https://mineralseducationcoalition.org/minerals-database/salthalite/ The design calls the dilute NaCl/DC carbon-electrode test safe for students, but the requested chemical-specific NSW school check is not established by the public general safety page or the saved CSIS curriculum-support text. Keep that practical wording on hold until teacher/PM confirmation of the exact school method, or use an approved-demonstration/secondary-source framing. The public NSW page requires risk assessment but does not approve this exact setup. Remove the unqualified safe claim; cut the scene 5 marks opener to fund a teacher-method condition. Source: https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance Reports: `checks/c-y11-m1-v22-learning-review.md` and `checks/c-y11-m1-v22-science-check.md`. Physical-reference access gaps are stated in the science report; no recorded approval claimed.

**c-y11-m1-v23:** 0 blockers, 2 should fix, 0 optional; 5,951 characters, about 529 s. Four groups cannot fit flat gives the wrong reason for tetrahedral geometry: four directions can lie in a plane, but spreading them in three dimensions reduces repulsion further. Say Four groups get furthest apart in three dimensions. This is shorter and matches the repulsion cause taught in scene 4. Every electron is held in a bond or lone pair omits core electrons. H2O has ten total electrons but eight valence electrons in its two bonds/two lone pairs. Scope the sentence and the matching handoff tag to outer electrons, and carry that tag into v24. Cut That is one reason to fund the short wording change. Reports: `checks/c-y11-m1-v23-learning-review.md` and `checks/c-y11-m1-v23-science-check.md`. Physical-reference access gaps are stated in the science report; no recorded approval claimed.

**c-y11-m1-v24:** 0 blockers, 2 should fix, 0 optional; 5,614 characters, about 502 s. The opening already contains the bent wire from v23, and only connects its leads; it does not show the narrated bending action. Say This copper wire has been bent into a loop, treating it as the current case. This is shorter and preserves the handoff and plate; the later layer slide still explains bending. Carry v23's outer-electron wording into the opening tag and the molecular comparison. Core electrons are not bonding or lone-pair valence electrons. The source should not call every molecular electron a bond/lone-pair electron; use outer electrons without adding a caveat or a new scene. Reports: `checks/c-y11-m1-v24-learning-review.md` and `checks/c-y11-m1-v24-science-check.md`. Physical-reference access gaps are stated in the science report; no recorded approval claimed.

**c-y11-m1-v25:** 0 blockers, 4 should fix, 0 optional; 5,770 characters, about 515 s. The general network definition and scratch rule require a 3D network through the whole crystal, then graphite is taught as a layered covalent network whose sheets slide without breaking the in-sheet bonds. Define networks as extended bonding in layers or in 3D, and scope the scratch-hardness explanation to 3D networks. The shorter definition funds the qualifier. Every outer electron in SiO2 is said to be held in a bond. Each two-bonded oxygen also has two lone pairs. Say the outer electrons are not free to move through the crystal; this is shorter and gives the required conduction reason without a false bonding count. The table is headed melting and gives diamond/graphite very high (above 3500 C), despite the author note that they do not melt at normal pressure. Follow root decision 29 without calling this a melting point: label the carbon cells does not melt at normal pressure; carbon network survives to extreme heat, and keep any above-3500 figure explicitly about graphite sublimation/heating behaviour. Fund the short condition by cutting the scene 5 trap opener and like diamond. Do not imply that diamond itself remains diamond to that temperature. The SiC practice treats its ordinary thermal behaviour as melting, but SiC sublimes/decomposes near 2700 C at normal pressure. Ask why it is very hard and heat-resistant, and explain the strong network bonds, rather than inventing a normal-pressure melting point. This wording is shorter. Source: https://www.inchem.org/documents/icsc/icsc/eics1061.htm Reports: `checks/c-y11-m1-v25-learning-review.md` and `checks/c-y11-m1-v25-science-check.md`. Physical-reference access gaps are stated in the science report; no recorded approval claimed.

**c-y11-m1-v26:** 0 blockers, 3 should fix, 0 optional; 5,799 characters, about 516 s. Methane has no polar bonds at all contradicts v23's slightly polar C-H bonds. The molecule is non-polar because the bond dipoles cancel. Use methane is non-polar; this is shorter and retains dispersion-only intermolecular forces. Equal electron counts do not establish that dispersion forces are matched: atom identity, cloud polarizability and shape also differ. Keep the three 18-electron examples and the 26-electron task, but call them comparisons rather than a fair test that isolates each extra force. Remove the therefore-similar-dispersion causal claim and With the same electrons, the extra forces decide. The existing total-attraction explanation still answers the question; the edits are shorter. One of the most common exam mistakes is an unsupported prevalence claim. State the actual correction, for example The O-H bonds stay intact, and retie the crossed-chip cue to intact. This is shorter. Reports: `checks/c-y11-m1-v26-learning-review.md` and `checks/c-y11-m1-v26-science-check.md`. Physical-reference access gaps are stated in the science report; no recorded approval claimed.

**c-y11-m1-v27:** 0 blockers, 2 should fix, 0 optional; 5,576 characters, about 500 s. The energy trade is used as a general test for whether a substance dissolves, while mixing itself is only a little grey tag. Dissolution can be driven by mixing even when it absorbs energy. Present the attraction comparison as a first prediction rather than the deciding test; remove little from the mixing tag. Keep the energy/entropy terms in author notes and cut the repeated scene 10 trade sentence to fund a short statement that mixing also helps particles spread. Source: https://openstax.org/books/chemistry-2e/pages/11-1-the-dissolution-process An ion can polarise a non-polar hexane molecule; the attraction is not only dispersion. Show its charge distorting the nearby cloud and say these attractions are too weak to pull NaCl ions apart. No extra force name is needed. Cut the final conductivity recall to fund the short explanation; it was already taught in v22. Reports: `checks/c-y11-m1-v27-learning-review.md` and `checks/c-y11-m1-v27-science-check.md`. Physical-reference access gaps are stated in the science report; no recorded approval claimed.

**Plates:** 13 new plate requests remain pending the designs’ stated review-pass condition. `assets/brief179-manifest.json`, `assets/brief179-qa/README.md` and per-design provenance record every request and reuse finding. No new image, speech, design edit, render or commit. Coverage: `checks/brief179-module1-coverage.md`; arithmetic, cue/order, source hashes and site evidence under `work/brief179/`. Fourteen confirmed, deduplicated local-HTML corrections appended to `site-corrections-chem-y11.md`.


## Brief 180: source reviews (6 November 2026)

**c-y11-m2-v01:** 1 blockers, 1 should fix, 0 optional; 5,993 characters, about 530.0 s. Root decision 3 requires a verified safe small-quantity method for the capped vessel. No exact quantities, headspace or current NSW approval are established by this design; small quantities alone does not establish a safe pressure rise. Use the root-approved no-gas-reaction fallback unless the teacher/PM verifies the exact method. Do not paint the pressurised bottle pair as an approved school method. Replace this beat within its present length. The visual says on O, the last word of the fourth sentence, but sentence four ends match; the spoken balanced equation ending O is sentence five. Retie the balanced-equation glow to the end of Two magnesium plus O two makes two M g O. No speech change. Reports: `checks/c-y11-m2-v01-learning-review.md` and `checks/c-y11-m2-v01-science-check.md`. Exact voiced review and human listening remain pending.

**c-y11-m2-v02:** 0 blockers, 1 should fix, 0 optional; 5,596 characters, about 500.0 s. The numbers table indexes A1 to scenes 13/14 and A2 to 15/16, but the actual question/feedback pairs are 14/15 and 16/17. It also places the opening ribbon in 17 rather than handoff 18. Update the scene references; no speech or timing change. The memory-aid check describes its line as scene 13 correctly. Reports: `checks/c-y11-m2-v02-learning-review.md` and `checks/c-y11-m2-v02-science-check.md`. Exact voiced review and human listening remain pending.

**c-y11-m2-v03:** 0 blockers, 1 should fix, 0 optional; 5,699 characters, about 506.0 s. The rule one mole of any element has mass equal to its relative atomic mass must specify atoms. One mole of O2 is 32.00 g, as scene 5 correctly teaches, not oxygen Ar = 16.00 g. Say one mole of atoms of an element and match the rule card. Fund the few added words by cutting Here is the key fact. Keep the molecular-element example. Reports: `checks/c-y11-m2-v03-learning-review.md` and `checks/c-y11-m2-v03-science-check.md`. Exact voiced review and human listening remain pending.

**c-y11-m2-v04:** 0 blockers, 3 should fix, 0 optional; 6,349 characters, about 555.0 s. The burette contains hydrogen plus water vapour, but 42.2 mL is presented as pure hydrogen at the room pressure. The author note knows the uncorrected wet gas biases MM low by about 3%. Make the approximation visible beside the result (uncorrected gas collected over water), or provide consistently corrected hydrogen data. Do not silently move measured wet-gas readings into a dry-H2 calculation. No partial-pressure derivation is needed here and an on-screen tag adds no speech. The liquid-column pressure also means room pressure alone is not automatically the collected gas pressure; equalise levels or identify that approximation in the method. 0.272 divided by the printed rounded 4.58e-3 is 59.39, which rounds to 59.4, while the unrounded n = 0.140/30.6 gives 59.4514, hence 59.5. Carry the unrounded value and make that explicit, as v03 already does, or retain sufficient guard digits in the divisor. No speech change. On the third sentence pulses the n tag while sentence three still says the mass is easy. Pulse it on The hard part is the moles (sentence four), with no speech change. Reports: `checks/c-y11-m2-v04-learning-review.md` and `checks/c-y11-m2-v04-science-check.md`. Exact voiced review and human listening remain pending.

**c-y11-ws-v04:** 0 blockers, 3 should fix, 0 optional; 5,863 characters, about 520.0 s. The stated first three columns are mass, start and end. With A=mass, B=start, C=end, volume must be D=B2-C2, moles E=D2/24790 and molar mass F=A2/E2. The printed C2-D2, E2/24790 and A2/F2 use a different, unexplained column map and would reference the wrong cells (including a self-reference). Lock one explicit map and correct the three formula bars. No speech change. The origin is called a real point, but no zero-mass blank was measured in the five-run table. Call it the model-predicted origin, and state that the line is constrained through zero on that physical assumption. Do not invent an observed blank. No extra speech needed. 40.4 divided by 0.040 is 1010, not the displayed 1009. The spreadsheet gradient is 1009.1 from all four good runs; distinguish that fit from the rounded reading-off triangle, or show sufficient guard digits (40.364 at 0.040). Both give MM about 24.6, so no speech change. Reports: `checks/c-y11-ws-v04-learning-review.md` and `checks/c-y11-ws-v04-science-check.md`. Exact voiced review and human listening remain pending.

**c-y11-ws-v05:** 0 blockers, 3 should fix, 0 optional; 6,433 characters, about 571.2 s. Class 2 lost 0.860 g for a 2.50 g sample, so with the stated per-difference 0.02 g limits its conservative relative uncertainty is 0.02/0.86 + 0.02/2.50 = 3.13%, not class 1's 3.02%. Its interval is about 33.3 to 35.5%, not 33.4 to 35.4. The verdict still holds: it does not reach 36.1. Use the actual class-2 loss; about three percent narration can remain. The author range check also treats the shared initial gross reading as independent in the two differences. The summed interval may be retained as a conservative bound, but is not the attainable exact range from the three raw readings. The estimate here covers the stated balance-reading limits, not every source of measurement uncertainty. A gap beyond those limits is a reason to investigate method bias or missing uncertainty, not proof of systematic error by itself. Keep the known uncovered-cooling evidence and the one-short-heating evidence as reasons for those diagnoses. Scope the verdicts to the stated limits; the root-approved cut is the approximately 150-character add-percentage-uncertainties rule if any speech is added. Mark one-last-digit as the stated school estimate, not a universal instrument specification. The joined-scene narration count is 6,433, not the headline 6,417; the difference is 16 inter-scene spaces. Update the count and add 1.20 s to the same-holds estimate. No speech change. This puts the same-holds estimate near 571.2 s. Use root decision 5's named cut (the add-percentage-uncertainties rule, about 150 characters) if measured timing or another repair would exceed the cap. Reports: `checks/c-y11-ws-v05-learning-review.md` and `checks/c-y11-ws-v05-science-check.md`. Exact voiced review and human listening remain pending.

**c-y11-m2-v05:** 0 blockers, 2 should fix, 0 optional; 5,769 characters, about 524.1 s. The printed 0.0500 divided by 0.0100 equals 5.00, not 4.99. The unrounded copper-sulfate amount 1.60/159.6 gives 4.9875, which correctly rounds to the spoken 4.99. Carry that value and show enough guard digits or explicitly mark the displayed amounts as rounded. No speech change. The joined-scene narration count is 5,769, not the headline 5,754; the difference is 15 inter-scene spaces. Update the count and add 1.13 s to the same-holds estimate. No speech change. Reports: `checks/c-y11-m2-v05-learning-review.md` and `checks/c-y11-m2-v05-science-check.md`. Exact voiced review and human listening remain pending.

**c-y11-m2-v06:** 0 blockers, 3 should fix, 0 optional; 5,687 characters, about 517.2 s. The printed 3.00 times 2.016 equals 6.048, hence 6.05 g to three significant figures, while the unrounded route gives the intended 6.044 g, hence 6.04. Keep the unrounded amount through the final multiplication and identify rounded display values, without changing speech. Coefficient counts molecules is too narrow for the general rule: aluminium coefficients count atoms and ionic products count formula units. Use particles (molecules, atoms or formula units), consistent with m2-v01 and the other examples. No speech addition. The joined-scene narration count is 5,687, not the headline 5,671; the difference is 16 inter-scene spaces. Update the count and add 1.20 s to the same-holds estimate. No speech change. Reports: `checks/c-y11-m2-v06-learning-review.md` and `checks/c-y11-m2-v06-science-check.md`. Exact voiced review and human listening remain pending.

**c-y11-ws-v06:** 0 blockers, 4 should fix, 0 optional; 5,640 characters, about 513.1 s. Constant mass plus white colour supports dehydration under the chosen conditions; it does not prove that all water left or uniquely identify copper sulfate. White copper-sulfate monohydrate is also reported by the cited primary database. Replace ruled-out crosses and categorical identity/completion conclusions with evidence supporting or weakening each explanation. A non-integer average alone also does not prove a mixture. Keep the known hydrate/source evidence, crust and fresh-sample prediction as the support for the proposed mixture; do not teach a generic non-integer-means-mixture rule. Replace the existing assertions within their current length. The printed 0.0499 divided by 0.0100 equals 4.99, not 4.97. The correct fresh calculation carries 0.8975 g water and 1.6025 g residue, giving 4.96583. Show those guard digits or state that later rows use the unrounded amounts. Rounding both masses upward to 0.898 and 1.603 also makes the displayed total 2.501 g. The spoken 4.97 is correct and can stay. These class results are an illustrative story in the author notes, not a cited set of measurements by an identified class. Mark the old/fresh data as illustrative on screen so primary-versus-secondary evidence teaching does not pass invented results off as collected primary data. No speech addition. The joined-scene narration count is 5,640, not the headline 5,625; the difference is 15 inter-scene spaces. Update the count and add 1.13 s to the same-holds estimate. No speech change. Reports: `checks/c-y11-ws-v06-learning-review.md` and `checks/c-y11-ws-v06-science-check.md`. Exact voiced review and human listening remain pending.

**c-y11-m2-v07:** 0 blockers, 2 should fix, 0 optional; 5,699 characters, about 518.1 s. 0.206 times 32.00 equals 6.592, which rounds to 6.59 g, not the printed 6.58. The unrounded 0.20568 mol gives the intended 6.582 g and conservation total 16.582 g. Keep the unrounded amount through the multiplication, with guard digits or a rounded-display tag. No speech change; the spoken 6.58 is correct. The joined-scene narration count is 5,699, not the headline 5,684; the difference is 15 inter-scene spaces. Update the count and add 1.13 s to the same-holds estimate. No speech change. Reports: `checks/c-y11-m2-v07-learning-review.md` and `checks/c-y11-m2-v07-science-check.md`. Exact voiced review and human listening remain pending.

**Plates:** 15 new request records pending the exact designs’ review-pass condition. `assets/brief180-manifest.json`, `assets/brief180-qa/README.md` and per-design provenance preserve requests and reuse paths. New painting, speech, design edits, renders and commits: none. Independent arithmetic and official data-sheet screenshots are in `work/brief180/`. Site corrections added: 7; exact-text checks that did not match are explicitly not logged.

## Codex hand-in: brief 195 Revision 5 review, 6 November 2026

Reports: `checks/m-a12d01-rev5-learning-review.md` and `checks/m-a12d01-rev5-maths-check.md`. Independent SymPy and numerical checks: `work/brief195/calculations.json`; source, counts and cue checks: `work/brief195/audit.json` and `mechanical-audit.json`. Result: 0 blockers, 4 should fix, 1 optional. The memory summary must distinguish the moved tangent from the slope at the same x; the negative-a key note needs its positive-k scope; scene 5 silently resets one half to two before the mirror; review fields still point to old generic reports. The title annotation is 82 characters but the title is 81. All derivatives, numerical answers and bold-cue ordering pass. Source remains unchanged. Root's wider scene-5 window and dimmed mirror readouts were applied in the review, so those are not reported as open faults.

Plates: root dropped both new flasks. Reuse the existing Biology straight-neck clear/cloudy pair. Only the field and two rod-cell sprites remain requested. `assets/ma12-d01-provenance.json` records those three as pending, with no generated-image or QA pass claim: the design's asset brief requires the learning and maths reviews to pass before painting, and these findings remain open. References and existing placeholders were inspected in `work/brief195/reference-sheet.png`. No design edits, new speech, maths-kit build, d01 render, sub-agents or commits.


## Brief 180 count-method correction, 6 November 2026

I withdrew the five count-only findings: the headlines use the sum of scene strings, while I had added inter-scene spaces. That was a review error. No extra timing is required for those separators. The corrected total is 1 blocker and 18 should fix, replacing the earlier total of 23 should fix. Other science and cue findings stand. The reports and results are corrected, with before-copies in `work/brief180/count-correction-before/` and the correction record in `work/brief180/count-correction.json`. The ws-v05 source estimate is 570 s, not 571.2 s. Measured timing is still pending.

- c-y11-ws-v05: 6,417 scene-sum characters; 6,433 joined characters; about 570 s; 2 should fix remain.
- c-y11-m2-v05: 5,754 scene-sum characters; 5,769 joined characters; about 523 s; 1 should fix remain.
- c-y11-m2-v06: 5,671 scene-sum characters; 5,687 joined characters; about 516 s; 2 should fix remain.
- c-y11-ws-v06: 5,625 scene-sum characters; 5,640 joined characters; about 512 s; 3 should fix remain.
- c-y11-m2-v07: 5,684 scene-sum characters; 5,699 joined characters; about 517 s; 1 should fix remain.

The m2-v06 design has changed since its original review; the corrected report retains the original reviewed hash and does not approve the changed source.


## Brief 196: b06 local repair checked, expanded work in progress (6 November 2026)

B06 v2: `out/explainer/Explainer-bio-m7-b06/Explainer-bio-m7-b06-v2.mp4`, 471.033 s container/audio, 14,129 encoded video frames versus 14,131 planned. The video stream ends 67 ms before the audio during static notes; exact packet-length cause is untraced, and no narration/caption is cut. Sheet: `work/brief196/v2-sheet.jpg`; 120 encoded samples have zero icon/blank flags and all four boards show house fonts and complete images. All 30 frozen inputs, including v1, match. Captions exported (157 cues). Zero missing disk paths; the old font loader allowed errors/timeouts to release rendering. New asset/font preflight and per-frame decoding fail on load errors; direct lesson bundles and a memory gate resolved reproduced memory pressure. See `work/brief196/repair-notes.md` for cause limits and tests. B06b: verified actual uploaded v3 has no black ending, no re-render.

The updated brief adds b10 and both original sessions. B10 has zero missing paths, 16 decoded resources, frozen original inputs, 162 exported caption cues, and v2 is rendering with concurrency 2. Other-session scans remain. Browser/Windows initialization both fail with the kernel-assets path error, including after reset, so authorized YouTube unlisting, upload, publishing and playlist readback are pending access. No live change claimed.


## Brief 181: source reviews and asset inspection (6 November 2026)

**c-y11-m2-v08:** 0 blockers, 1 should fix, 1 optional; 6,307 characters, about 563 s. The v07 excess-oxygen result becomes a useful question: which reagent runs out when both are limited? The recipe analogy explains complete reaction runs before the moles-over-coefficient rule is named. The magnesium case retains both initial masses, separates used and leftover magnesium, and closes with a mass-conservation check. Sodium/chlorine makes raw mole comparison fail; aluminium/sulfur and methane test two different wrong shortcuts. Retaining the equation and atomic masses on each question card supports transfer. The runs meter should represent stoichiometric capacity, not a literal count of microscopic batches. The memory aid follows its explanation. Keep the root-approved 4.0 g oxygen handoff and its display precision convention. Reports: `checks/c-y11-m2-v08-learning-review.md`, `checks/c-y11-m2-v08-science-check.md`. Source findings are in those reports; listening remains pending.

**c-y11-m2-v09:** 1 blockers, 5 should fix, 0 optional; 6,174 characters, about 555 s. The opening is the previous flask and unresolved escaping-gas question. A boundary around the balance gives the mass-loss measurement meaning before prediction and observation are compared. Repeated readouts and a mass-time graph show why the class waits before recording. The headspace lens can explain a plausible shortfall, but must distinguish a possible mechanism from a measured cause. The spray example tests an opposite bias and the acid-limited example transfers the earlier limiting-reagent rule. All supplied conditions stay available in the attempts. The existing capped-reaction fallback is required, and the plug must not be taught as a vapour trap. Reports: `checks/c-y11-m2-v09-learning-review.md`, `checks/c-y11-m2-v09-science-check.md`. Source findings are in those reports; listening remains pending.

**c-y11-ws-v07:** 0 blockers, 4 should fix, 0 optional; 6,266 characters, about 560 s. The preceding mass table and unfinished conclusion supply a concrete communication task. Claim, evidence and reasoning acquire meanings through the worked comparison rather than a detached writing acronym. Method limits are linked to improvements, and a second dataset makes students choose evidence rather than copy the first conclusion. Validity, reliability, accuracy and precision retain the established course definitions. The prediction/observation contrast and two brief feedback sequences support application. The water-loss case should retain probably, not make the size of a discrepancy alone prove a cause. Reports: `checks/c-y11-ws-v07-learning-review.md`, `checks/c-y11-ws-v07-science-check.md`. Source findings are in those reports; listening remains pending.

**c-y11-m2-v10:** 0 blockers, 0 should fix, 0 optional; 5,672 characters, about 517 s. The roughly 50 mL calcium-chloride solution from the previous handoff motivates how much solute a portion carries. Identical sample windows explain concentration before c=n/V. Changing portion size at fixed concentration is explicitly contrasted with dilution, and the beaker-to-volumetric-flask comparison explains final solution volume. The three worked directions use units and retained intermediate quantities; both practice tasks include the needed masses or volumes. Formula-unit dots are explicitly counting representations. No source learning blocker or required copy change found. Keep the approximate-volume tag and build the new clear-liquid plate at native aspect. Reports: `checks/c-y11-m2-v10-learning-review.md`, `checks/c-y11-m2-v10-science-check.md`. Source findings are in those reports; listening remains pending.

**c-y11-m2-v11:** 0 blockers, 3 should fix, 1 optional; 5,710 characters, about 520 s. The same concentration is expressed in units students will meet on labels, with each conversion explained through its numerator and denominator. The percent w/v example states its 100 mL basis, and the copper/nitrate examples apply mass concentration to ions using the correct molar masses. The evaporation case explains why a dissolved-solids residue measures total dissolved material rather than one ion. Practice changes the species and direction. The concluding generalisation must leave room for the separately defined mass-based ppm. A dry final residue needs an actually dry visual state. Reports: `checks/c-y11-m2-v11-learning-review.md`, `checks/c-y11-m2-v11-science-check.md`. Source findings are in those reports; listening remains pending.

**c-y11-m2-v12:** 0 blockers, 3 should fix, 0 optional; 6,230 characters, about 555 s. The reconciled 250 mL flask with unknown mass turns c=n/V backwards into a preparation task. Choosing a stable known solid precedes the calculated mass, then actual 2.657 g and actual concentration replace a fictitious perfect target. Transfer, rinsing, meniscus and mixing each receive a reason. The error board is earned as its cards accumulate, and the wet-solid practice traces water mass to fewer carbonate moles. The long quantitative-transfer scene stays one causal operation, with narration cues for rinses and a film lens; exact playback still has to confirm reading load. Keep the approved v11 to v12 opening and root decision 16 actual-mass calculation. Reports: `checks/c-y11-m2-v12-learning-review.md`, `checks/c-y11-m2-v12-science-check.md`. Source findings are in those reports; listening remains pending.

**c-y11-m2-v13:** 0 blockers, 5 should fix, 0 optional; 5,616 characters, about 507 s. The fixed number of representative solute dots explains dilution before algebra. Two equivalent routes, preserved amount and c1V1=c2V2, make the rearrangement intelligible. Stock rinse and a wet receiving flask are contrasted by whether they change transferred solute. The acid example stays a calculation with a technician/teacher strip and acid-to-water reason, not an instruction for a student to pour strong acid into a volumetric flask. Practice tests final volume and an unknown stock aliquot. Correct the crossed example and the dot label; preserve the aid and the condition that solute is unchanged. Reports: `checks/c-y11-m2-v13-learning-review.md`, `checks/c-y11-m2-v13-science-check.md`. Source findings are in those reports; listening remains pending.

**c-y11-m2-v14:** 0 blockers, 0 should fix, 0 optional; 5,659 characters, about 510 s. The prepared carbonate solution now determines an unknown acid through a measured reaction volume. Methyl-orange states, a nearly finished reaction and a final drop explain the observable endpoint without importing Year 12 pH curves. Rough versus concordant runs have distinct jobs. The carbonate-to-acid 1:2 bridge is staged before the mean titre quotient. The rinse-error comparison keeps actual unknown-bottle concentration distinct from the diluted burette contents, while water in the receiving flask changes no reacting moles. The sulfuric-acid practice tests a fresh 1:2 direction. Net ionic symbols in the handoff are read as named ions in the next lesson. No required source correction found. Reports: `checks/c-y11-m2-v14-learning-review.md`, `checks/c-y11-m2-v14-science-check.md`. Source findings are in those reports; listening remains pending.

**c-y11-m2-v15:** 0 blockers, 4 should fix, 0 optional; 5,571 characters, about 504 s. The bore-water question makes weighing a precipitate useful. One silver ion and one chloride ion forming each solid unit supplies enough meaning for the ionic equation before Module 3; formal spectator-ion cancellation is not required. The leftover-ion prediction explains excess, and transfer, washing and drying each protect the measured amount for a different reason. Constant-mass readings precede the calculation. Scene 8 changes from amount concentration to mass concentration in consecutive stages with one case retained, using v11 knowledge; build must reveal one result at a time. The MgCl2 attempt requires the taught ratio rather than a new method. Preserve the illustrative numbers, but repair method conditions below. Reports: `checks/c-y11-m2-v15-learning-review.md`, `checks/c-y11-m2-v15-science-check.md`. Source findings are in those reports; listening remains pending.

**c-y11-m2-v16:** 0 blockers, 1 should fix, 0 optional; 5,573 characters, about 504 s. The three equal-volume jars make mass independence surprising. The liquid/gas cube comparison removes particle size as the main cause, then wall hits introduce pressure. For the same volume, temperature fixes the average kinetic contribution per particle, so equal pressure requires equal count. The quarter-push/four-times-hit comparison is followable when separate per-hit and time-average meters remain visible; it is not an assertion of unequal average kinetic energy. Keep the source grey same-energy tag and pause between comparisons. Use push per hit rather than energy per hit, and do not require students to derive the square-root ratio. The numerical fallback is unnecessary at source stage, subject to exact playback. Conditions remain visible through molar-volume selection and gases-only practice. Repair the rigid-boundary explanation below. Reports: `checks/c-y11-m2-v16-learning-review.md`, `checks/c-y11-m2-v16-science-check.md`. Source findings are in those reports; listening remains pending.

**Plates:** six new assets queued after urgent 196; none generated yet. V10 and v14 pass source review. The remaining art requests are geometrically unaffected by reported copy/calculation findings; use the loose-plug fallback. Manifest: `assets/brief181-manifest.json`; reuse/assembly inspection: `assets/brief181-qa/README.md`. Site log: 12 confirmed additions, two duplicates preserved. No design edits, speech, renders or commits for this brief.


## Brief 165: 7 pm Biology/Physics continuation scheduled (6 November 2026)

Windows task `LessonVideo-Brief165-BioPhysics-20261106-1900` is Ready for 19:00 Sydney, 6 November (`2026-11-06T19:00:00+11:00`), hidden and with start-when-available. It runs `work/brief165-bio-physics/worker.mjs`: Bio FA1 v01, Physics FA1 v01, Bio v02, Physics v02, Bio v03, then Bio v04 if the complete lesson fits. All six exact-source recording gates pass. There are 101 scenes but 96 unique uncached requests after the shared notes take is reused. The worker rechecks the current quota and reserves each full lesson below the 99-request cap, waits for other production work and memory, stops at the first generation/alignment/caption failure, and never retries a request. Preparation sent zero requests.

Maths is paused. No prior maths worker or scheduled task was running; the old maths runners now stop on the pause marker. Saved maths takes are untouched. The shared Google timing adapter now separates a 10-second response countdown from the Biology design's additional two-second scene padding; local contract checks pass, with the old countdown behaviour retained. Physics reveals do not acquire a prediction countdown. Evidence: `work/brief165-bio-physics/worker-preflight.json`, `timing-check.json`, `schedule-readback.json` and the six source-check files. No source narration was edited. Actual generated timing, caption export, pronunciation, scene joins, built cue playback and human listening remain pending. The task uses the current logged-in Windows account and cannot run while the machine is off; its window expires before the next quota reset.


## Brief 195: three painted assets delivered (6 November 2026)

`public/assets/maths/ma12-microscope-field-v1.png`, `ma12-rod-cell-v1.png` and `ma12-rod-cell-dividing-v1.png` are generated. The field is empty; warm darker rods read against it at small size, and division has a connected central pinch. QA: `assets/ma12-d01-qa/`; provenance: `assets/ma12-d01-provenance.json`. Native canvases are 1254x1254, 1774x887 and 1983x793; no PNG was stretched or resampled. Sidecars give visible bounds and division scaling. Minor near-transparent alpha noise remains, so absolute zero-alpha margins are not claimed. The visible artwork has at least 14 percent margin, and no visible halo in inspected composites. The earlier blanket painting hold is superseded by the asset-specific clearance, `work/brief195/asset-clearance.md`: the four graph/copy/cue/evidence findings do not alter these sprites and remain open for Claude. Two new flasks remain dropped. No kit/scene edits, d01 render, speech or commits.


## Brief 196: both local repairs checked (6 November 2026)

B10 v2 is complete: `out/explainer/Explainer-bio-m7-b10/Explainer-bio-m7-b10-v2.mp4`, 480.766667 seconds, all 14,423 planned video frames. Sheet: `work/brief196/b10-v2-sheet.jpg`. All 120 samples and four boards inspected, no broken images or fallback serif seen; the 120-frame font probe reports zero flags. One sparse-frame flag is the existing header-only lead-in before its 3.040-second body cue. Source is preserved. All 29 frozen inputs match, and its 162-cue SRT matches the prior upload SHA. B06 remains checked with all 30 inputs unchanged. The old b10-rendering entry above is superseded.

The other 33 videos from the two original queues are being scanned serially; no further re-renders. `work/brief196/replacement-package.json` contains both checked masters, matching captions and historical v1 metadata/settings for the authorized replacements. Browser/Windows tool initialization still blocks live access. Neither v1 has been unlisted, neither v2 uploaded/published, no playlist has changed, and no replacement link/readback exists. Full local details and limitations: `work/brief196/repair-notes.md`.


## Brief 196: additional session defect found, chem-m6-g03 (6 November 2026)

The queue-hash-matched v1 master of Titration Calculation Practice has broken-image icons and fallback serif text in its third-question section. The 120-frame scan flags 37 samples for serif fallback, including 28 with broken-image candidates, from 307.97 to 452.90 seconds. The 16-frame sheet and frame 9480 were visually inspected and confirm the fault. Evidence and full master SHA: `work/brief196/additional-defects.json`; sheet: `work/brief196/session-scans/chem-m6-g03/sheet16.jpg`. Report only, as directed by brief 196. No additional re-render or live change. The remaining session audit continues.


## Brief 181: first three assets delivered (6 November 2026)

The colourless-solution beaker, dry-salt basin and clear sample-bottle crop are saved in `public/assets/chemistry/` under their requested y11c names. Light/dark composites were inspected in `assets/brief181-qa/`. The bottle is an exact RGBA crop, no repaint or resampling: no dipper/pole connected pixels remain and all bottle pixels with alpha above 16 are retained. The dry basin retains its 1402x1122 native canvas, with the wet contents replaced by dry white residue. The beaker edit is native 1254x1254 rather than the requested 2048x2048; its appearance matches at uniform display scale, but pixel-identical outlines are not claimed. Original images are preserved. Provenance and sidecars record these qualifications. Three loose-plug flask states remain. Source findings, playback and listening gates remain as reported.


## Brief 181: six assets handed in (6 November 2026)

The three loose-cotton-plug flask states are now saved under the requested y11c names in `public/assets/chemistry/`, completing all six brief181 assets. The flask trio was inspected on paper/dark/white at 300 px, at600px, in midpoint overlays and on the actual balance. All share a1106x1422 native canvas; visible bounds differ by up to2native pixels, with no visible jump/double outline in the checked300px overlays. Pixel identity and absolute zero-alpha margins are not claimed. Fine fizz is visible at600px and subtle at 300 px; the planned coded motion remains necessary. Manifest/provenance/sidecars and `assets/brief181-qa/` record dimensions, hashes, reuse and qualifications. The first flask candidate was rejected for framing. Earlier beaker, dry-basin and bottle-crop deliveries stand. The20 source reports are complete, with1blocker,26should-fix and2optional findings still for Claude; no narration/design/scene edits, speech, render or commit.


## Brief 182 source reviews, 6 November 2026

**c-y11-m2-v17:** 0 blockers, 3 should fix, 0 optional. The unresolved syringe prediction leads to a particle-wall explanation before inverse proportion and its equation. The data logger gives the investigation a purpose: distinguish an ideal relationship from an illustrative dead-volume model. Worked volume changes retain the fixed conditions, and the final bath rig hands temperature change to v18. The model must stay illustrative rather than diagnosing a real apparatus from one drift pattern. Reports: checks/c-y11-m2-v17-learning-review.md and checks/c-y11-m2-v17-science-check.md.

**c-y11-m2-v18:** 1 blockers, 3 should fix, 0 optional. The same syringe and bath make the changed variable concrete. Kelvin is justified by proportional reasoning, then a rigid vessel contrasts fixed volume with a movable boundary. The published-table substitution is a recording blocker, not a reason to remove secondary-data teaching. Preserve the existing sequence, question holds and final Kelvin application. Its estimated 566 seconds leaves little room for added speech; replace words within the existing scene budget. Reports: checks/c-y11-m2-v18-learning-review.md and checks/c-y11-m2-v18-science-check.md.

**c-y11-m2-v19:** 0 blockers, 1 should fix, 0 optional. The four familiar relationships are recovered from one equation before students select compatible pressure, volume and temperature units. The oxygen and balloon examples stage amount and volume separately; the cooling comparison retains its initial result. Nitrogen then tests solving for amount and mass, while the final pressure task tests rearrangement. All calculations independently agree. No forced cut or additional caveat is needed for the rounded data-sheet molar-volume convention. Reports: checks/c-y11-m2-v19-learning-review.md and checks/c-y11-m2-v19-science-check.md.

**c-y11-m2-v20:** 0 blockers, 5 should fix, 0 optional. Collecting gas answers the earlier mass-loss limitation. Prediction, measured volume-time readings and the final reacted-mass calculation connect observation with a balanced ratio. The supplied acid amount makes excess testable. The progress inset must describe collected gas rather than claim a uniquely measured chemical extent. Plateau, no chips left and excess acid work together as completion evidence. The doubled-charge drawing needs adequate syringe capacity. Reports: checks/c-y11-m2-v20-learning-review.md and checks/c-y11-m2-v20-science-check.md.

**c-y11-m3-v01:** 0 blockers, 3 should fix, 0 optional. Observations motivate the question of whether substances have changed. Atom regrouping and next-scene tallies build conservation rather than treating balancing as a guessing rule. Five element chips are bookkeeping, not a literal aqueous mechanism. Existing staged products and tally cues support the reading load. Feedback must retain the evidential limit of temperature change for an unidentified dissolving solid. Reports: checks/c-y11-m3-v01-learning-review.md and checks/c-y11-m3-v01-science-check.md.

**c-y11-m3-v02:** 0 blockers, 4 should fix, 0 optional. The common-multiple comparison explains why two and three require six before equation practice. Observation, word equation, formulas and coefficients have distinct jobs. The carbonate example needs its family scope, but no extra unrelated example is required. Actual scene 9 correctly treats a catalyst as changing the pathway; repair the contradictory author cue instead of rewriting that narration. Reports: checks/c-y11-m3-v02-learning-review.md and checks/c-y11-m3-v02-science-check.md.

**c-y11-m3-v03:** 0 blockers, 4 should fix, 1 optional. A visible precipitate leads to dissolved ions, spectators and a net ionic equation. The grid asks students to predict and compare rather than merely watch labels. NAGSAG follows its purpose and has a dedicated hold plus later return. The shared card must retain the course exceptions while Year 11 narration can introduce a smaller usable set. The lead-water application needs a valid context; do not claim a trace drinking-water treatment from a concentrated classroom mixture. Reports: checks/c-y11-m3-v03-learning-review.md and checks/c-y11-m3-v03-science-check.md.

**c-y11-m3-v04:** 0 blockers, 5 should fix, 0 optional. Observation comes before the combustion equations. The complete/incomplete contrast and equation ladder establish the product question before pentane practice. A half-molecule drawing is an explicit coefficient-ratio picture and retains 6.5; it need not be removed. Preserve the source scope and task conditions. The cold-dish demonstration still needs an exact approved method or checked footage. Reports: checks/c-y11-m3-v04-learning-review.md and checks/c-y11-m3-v04-science-check.md.

**c-y11-m3-v05:** 0 blockers, 5 should fix, 1 optional. The acid-base comparison introduces the reaction before spectators and the symbolic summary. Scene 3 stages molecule, salt tag and spectator ions rather than showing all at once. Phenolphthalein supplies a qualitative visible endpoint, not an exact titration equivalence claim. The carbonate comparison explains the gas test and does not import held cultural content. Distinguish the insoluble carbonate reaction from an aqueous carbonate-ion equation. Reports: checks/c-y11-m3-v05-learning-review.md and checks/c-y11-m3-v05-science-check.md.

**c-y11-m3-v07:** 0 blockers, 7 should fix, 2 optional. Four observations and rank strips answer one question about relative reactivity. Displacement is independent evidence, and merging strips makes the final order earned. The next lesson owns the deeper mechanism, so passivation and reference conditions belong in concise existing tags/author notes. Preserve the self-contained opening while v06 is held. The common school activity order is useful; do not describe it as an exact ordering of standard reduction potentials. Reports: checks/c-y11-m3-v07-learning-review.md and checks/c-y11-m3-v07-science-check.md.

Module 2 coverage: all nine official stems have concrete draft teaching traces across 24 sources, with 22 example facets and one primary owner each. This is not a release/practical-completion pass. Current m2-v06 Revision 2 differs from the earlier reviewed source. Evidence: work/brief182/module2-coverage.json.

Plates: new assets and detailed reuse-assembly QA remain in progress. No brief 182 plate is handed in yet. The source review is complete with one blocker, 40 should fix and four optional findings.


### Brief 196 session audit complete, 6 November 2026

Both b06/b10 v2 local repairs are checked. The 33 other queue-hash-matched session masters received 3,960 automated samples and 33 inspected sixteen-frame sheets. Confirmed extra defect: chem-m6-g03 Question 3 broken images and serif fallback, report only. All 15 b05 icon candidates are leaf false positives. All 25 sparse candidates were inspected; authored delays/transitions are distinct from asset failures. Full playback/listening is not claimed. Evidence: work/brief196/session-audit-handin.json. YouTube changes remain blocked by the kernel-assets computer-control error; this run has not unlisted or uploaded a video.


### Brief 180 crucible set delivered, 6 November 2026

Three matched copper-carbonate/crucible states saved to public/assets/chemistry: green unlit, green lit and black lit. Native 1024x1536, same portrait aspect as the 1280x1920 reference, no resampling. Paper/dark 300px and 600 px composites and overlays inspected; apparatus visually aligns, not pixel-identical. Faint low-alpha noise beyond the painted bounds is documented. Initial raw-preview halo finding was withdrawn after proper alpha compositing. Evidence: assets/brief180-qa/crucible-trio-metrics.json and assets/chem-y11-m2-v01-provenance.json. Eight other cleared unique plates remain pending; the two capped-bottle plates remain held for the method/fallback decision.


### Brief 179 first four plates, 6 November 2026

Rusty nail, red/black copper-oxide watch glasses and halite crystal delivered to public/assets/chemistry. Native sizes and alpha qualifications are in assets/brief179-manifest.json. Paper/dark/white composites at 400 px and the oxide-pair overlay were inspected. The first nail candidate was replaced because its margin was only 4.1%; the delivered version has 14.6% minimum painted margin. Nine plates remain in progress. Source findings, including practical wording, remain open.


### Brief 179 plates complete, 6 November 2026

All13 requested PNGs are in public/assets/chemistry with sidecars, per-design provenance and assets/brief179-manifest.json. Paper/dark/white400px QA inspected, plus oxide overlay and three-tube comparison. Native dimensions are retained. Conductivity pair is visually close but has up to6px native top variation, so exact-overlay acceptance is not claimed. Source findings remain open; no new speech, source edits or renders. Full qualifications: assets/brief179-qa/README.md.


### Brief 182 burner geometry addendum

The yellow-flame request cannot meet its doubled-height, fixed-burner and square-canvas conditions together. The inspected source leaves about600px usable flame height, while doubling needs about1162px. Reported in work/brief182/burner-canvas-constraint.json and the updated m3-v03 reports. New total: one blocker,41 should fix and four optional findings. Yellow plate remains pending a corrected specification; other plates continue.


### Brief 180 cleared plates delivered, 6 November 2026

All 12 cleared unique PNGs are saved in public/assets/chemistry, including the new Revision 2 water beaker. Native dimensions, alpha and pair-alignment qualifications are in assets/brief180-manifest.json, per-design provenance and assets/brief180-qa/. Burette/bath overlays, bicycle assembly and beaker-on-balance placement were inspected. The two capped gas-producing bottle plates remain held for the method or no-gas fallback. M2-v06 Revision 2 has artwork but still needs its own exact learning/visual review. No lesson source, narration or scene was edited.


### Brief 182 first 11 new plates, 6 November 2026

Eleven new PNG paths are delivered to public/assets/chemistry: sensor, four bung-flask states, two oxygen-test splints, two basin states and two copper-foil states. The acid-only and spent flask are byte-identical as requested. Hashes, native sizes, alpha and alignment qualifications and attachment coordinates are in work/brief182/assets-delivered.json and PNG sidecars. Paper/dark/white composites and matched-state overlays were inspected in assets/brief182-qa/. Prompt specifications are in work/brief182/plates-prompt-set.md. The earlier brief180 burette is now linked in assets/brief182-manifest.json. Eight v07 anchor plates await the coordinated v07/v08/v10 batch required by Module3 root decision16; the yellow burner is held for incompatible canvas/height constraints. No lesson source, narration or scene was edited.


### Brief 183 source reviews, 6 November 2026

chem-y11-m3-v08 (Revision 1): 6160 narration characters, about 548 seconds; two source reports in checks/c-y11-m3-v08-learning-review.md and -science-check.md; 0 blocker, 5 should fix, 0 optional. The measured series poses a cause question before radius and core charge are recalled. The first-ionisation dip is a useful surprise: students must consider the full usual ion, and stacked bars make successive removals visible. Preserve that accepted explanation while keeping its limit consistent. Passivation is explained as a barrier to contact, then the two questions apply a trend and critique an inference from a slow start.

chem-y11-m3-v09 (Revision 1): 5585 narration characters, about 504 seconds; two source reports in checks/c-y11-m3-v09-learning-review.md and -science-check.md; 0 blocker, 2 should fix, 1 optional. The earlier electron-transfer picture earns the agent names before oxidation numbers solve a covalent case. Sulfate is worked before permanganate is predicted. Number badges and the non-redox precipitation contrast help students distinguish bookkeeping from real ionic charge. The two original questions require agent identification and a non-obvious chlorine oxidation number, with brief feedback.

chem-y11-m3-v10 (Revision 2): 6400 narration characters, about 566 seconds; two source reports in checks/c-y11-m3-v10-learning-review.md and -science-check.md; 0 blocker, 1 should fix, 1 optional. Revision 2 starts from the actual aluminium observation and an ion lens. The bank makes the common multiple necessary before its counts become written multipliers. Atom and charge checks are staged, and the vanishing-electron trap explains why atom balance alone fails. Keep the real plates, bank, beam and purposeful stage changes. The demand-versus-received counter label is the main learning repair. Feedback stays short and the notes are separate from new reasoning.

chem-y11-m3-v11 (Revision 1): 6210 narration characters, about 553 seconds; two source reports in checks/c-y11-m3-v11-learning-review.md and -science-check.md; 0 blocker, 2 should fix, 0 optional. The missing ion path motivates the explanation before electrode names are memorised. Electron and ion streams have distinct paths. A relative ladder and sea-level analogy make the reference requirement useful, then a new ranking question tests it. Keep the circuit, charge build-up and reference sequence. Distinguish voltage measurement from a loaded interval before showing visible electrode changes.

chem-y11-m3-v12 (Revision 1): 6096 narration characters, about 542 seconds; two source reports in checks/c-y11-m3-v12-learning-review.md and -science-check.md; 0 blocker, 6 should fix, 0 optional. The empty reference ladder from v11 fills with actual course data. Grouped givens and separate substitution/result lines preserve the calculation stages. Positive and negative as-written cases precede acid and multiplier traps. The final aluminium/zinc comparison separates spontaneity from speed and matches v13 opening. Keep the selected examples and short feedback; repair the overbroad table/acid claims without adding a new objective.

chem-y11-m3-v13 (Revision 1): 6011 narration characters, about 541 seconds; two source reports in checks/c-y11-m3-v13-learning-review.md and -science-check.md; 0 blocker, 3 should fix, 0 optional. The prediction creates a reason to ask why collisions fail. Rate is calculated from two graph intervals before the particle explanation, energy threshold and orientation are introduced separately, and a funnel combines them. The memory line is useful in later factor videos. The excess-acid magnesium application should retain the changing solid surface when explaining the slower rate. Scope the falling-rate note to these curves.

chem-y11-m3-v14 (Revision 1): 6180 narration characters, about 556 seconds; two source reports in checks/c-y11-m3-v14-learning-review.md and -science-check.md; 0 blocker, 6 should fix, 1 optional. The limiting-chip prediction separates rate from yield before a controlled plan and digital logging. Equal thirty-second intervals make comparisons meaningful. Concentration and temperature each have evidence followed by a particle cause, with the shared control reused. The final question reverses which reactant limits, so it tests conditions rather than a slogan. Make the long-time endpoints visible and distinguish a possible cooling bias from the isothermal illustration.

chem-y11-m3-v15 (Revision 1): 6103 narration characters, about 550 seconds; two source reports in checks/c-y11-m3-v15-learning-review.md and -science-check.md; 0 blocker, 2 should fix, 1 optional. The cube model explains exposed area before the powder curve. The catalyst comparison then gives observation, recovery/reuse and an alternative lower-barrier route. Keeping the curve fixed while its threshold moves contrasts directly with the preceding temperature video. The two applications transfer to zinc and a converter surface. Keep the warm-flask handoff, but temperature logging alone cannot isolate its rate contribution.

chem-y11-m4-v01 (Revision 1): 6372 narration characters, about 570 seconds; two source reports in checks/c-y11-m4-v01-learning-review.md and -science-check.md; 0 blocker, 2 should fix, 0 optional. A temperature observation leads to system/surroundings and energy direction before the profile is built. The hill answers why an exothermic fuel needs ignition. The two arrow rules and the enthalpy-versus-temperature trap are purposeful, and a new relative-scale profile tests both differences. The short cold-pack feedback applies the system sign. Preserve this sequence and the named reserve cuts at the duration cap.

chem-y11-m4-v02 (Revision 1): 6336 narration characters, about 567 seconds; two source reports in checks/c-y11-m4-v02-learning-review.md and -science-check.md; 0 blocker, 3 should fix, 0 optional. A doubled-water prediction earns the mass term before specific heat and the formula. Scaling one gram and one degree builds q=mcDeltaT, then two calorimeters distinguish water mass from whole-solution mass. The sign card separates a sample heat from molar enthalpy without teaching the next calculation. Keep the original attempts, grouped quantities and brief feedback. Apply the already chosen rounding convention consistently.

Twenty reports: zero blockers, 32 should fix and four optional findings. Calculations, 47 atom/charge checks, current source hashes and exact cues are saved in work/brief183/. Module3 coverage traces 15 official stems across 14 designs and 28 facets. The remaining official stem is v06 on cultural hold, not completed coverage. Source fixes and exact practical methods remain open. No narration, design or scene was edited. All requested brief 183 plates are now delivered for inspection; the shared v07/v08/v10 batch follows Module 3 root decision 16, with native-size and margin qualifications.

Briefs 182 and 183 plates (6 November): brief 182 has 23 unique requested paths delivered, zero pending and one yellow-flame canvas conflict held. Brief 183 has all 19 new plates delivered, plus shared dependency references, in assets/brief183-manifest.json. All eight galvanic combinations were inspected on paper and dark boards; strip-top and display coordinates are recorded. Native dimensions, up to two pixels of galvanic canvas-width difference, shorter exposed strips and inherited trough side margins are explicitly qualified for designer acceptance. No recording or playback approval is implied.


### Brief 184, 6 November 2026

chem-y11-m4-v03 (Revision 1): 5999 narration characters, about 542 seconds; checks/c-y11-m4-v03-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The carried9.78 kJ result makes the missing-energy question concrete. Moles, sign and reference comparison precede one energy-split bar, and each physical loss attaches to that bar. The cause-to-q-or-n answer frame is useful for the unseen evaporation question. Preserve the heat-loss, incomplete-burning and evaporation sequence and brief feedback. The original and sooty/shielded apparatus visually register in the inspected300px overlays; actual playback still needs review.

chem-y11-m4-v04 (Revision 1): 5968 narration characters, about 540 seconds; checks/c-y11-m4-v04-learning-review.md and -science-check.md. 0 blocker, 2 should fix, 0 optional. The prediction challenges the breaking-releases-energy misconception. An ion/water model earns separation and hydration before the two large bars explain the small net result. The cup calculation keeps solution mass and solid moles distinct, then applies the sign rule and uncertainty comparison. The corrected19.3-degree example is numerically consistent. Repair the confidence wording without adding a second lesson about metrology.

chem-y11-m4-v05 (Revision 1): 5609 narration characters, about 515 seconds; checks/c-y11-m4-v05-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 1 optional. The equal-total-energy prediction and warmer-flask contrast make the unchanged-endpoints claim useful. The surface sequence and lower-pass analogy connect the route to the profile, then the unchanged distribution with a moved threshold explains rate. Original profile-reading and catalyst-classification tasks apply the idea. Keep forward activation arrows and the endothermic comparison; reverse-barrier arithmetic remains outside this boundary.

chem-y11-m4-v06 (Revision 1): 6160 narration characters, about 554 seconds; checks/c-y11-m4-v06-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 1 optional. The strong-nitrogen-bond prediction leads to a conservation argument, then the simple HCl case precedes the more crowded ammonia and methane counts. Structures show each bond before grouped totals are calculated. The average/gas limitations explain the methane comparison and transfer question. The break/make memory line is scientifically sound for reversing the same bond process. Preserve the causal explanation and staged counting.

chem-y11-m4-v07 (Revision 1): 6213 narration characters, about 558 seconds; checks/c-y11-m4-v07-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. The carbon direct/two-step comparison makes Hess law necessary before the state-function name. Reversal and scaling are earned separately, then a pinned target guides cancellation. Sulfur and nitrogen attempts require new equation combinations and short feedback. The altitude analogy correctly separates height change from distance travelled. No new learner blocker was found in the current source.

chem-y11-m4-v08 (Revision 1): 6364 narration characters, about 569 seconds; checks/c-y11-m4-v08-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 1 optional. Reference heights earn products-minus-reactants before the ethanol example. Coefficients and physical states remain visible, and the bond/formation contrast explains the different subtraction orders. The propane and liquid-peroxide tasks carry their needed data. The final ethanol question matches the actual v09 opening, which uses methane to demonstrate the method and returns to ethanol in its first attempt. Keep this accepted join.

chem-y11-m4-v09 (Revision 1): 6367 narration characters, about 570 seconds; checks/c-y11-m4-v09-learning-review.md and -science-check.md. 0 blocker, 2 should fix, 0 optional. Two routes to the same products explain the unknown methane formation value before any shortcut. The wrong-state case shows why the shared finish matters. Per-mole and per-gram bars then support the original fuel comparison. Ethanol in attempt1 answers the preceding lesson handoff. Keep the matched-state cycle and brief feedback; at 570 seconds use the named hydrogen-sentence reserve if extra wording is essential.

chem-y11-m4-v10 (Revision 1): 5555 narration characters, about 509 seconds; checks/c-y11-m4-v10-learning-review.md and -science-check.md. 0 blocker, 2 should fix, 1 optional. The reversed glucose cycle directly earns the photosynthesis sign and same-size enthalpy before scaling to 10g. The formation check and cellular/flame contrast explain why pathways can differ while overall enthalpy agrees. The light-input evaluation is useful, but the solar-efficiency and ATP quantities need the reported repairs. This5555-character source needs length-neutral replacements rather than deleting both paragraphs below the course floor.

chem-y11-m4-v11 (Revision 1): 5923 narration characters, about 536 seconds; checks/c-y11-m4-v11-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The jar allocations make microstate counting accessible before entropy is named. Energy packets extend the idea to heat flow; enthalpy/entropy and system/surroundings comparisons then explain endothermic spontaneity. The two applications test particle arrangements and melting signs. Keep the tally and packet models; the painted jar covers are a real implementation obstacle to the intended opening demonstration.

chem-y11-m4-v12 (Revision 1): 5665 narration characters, about 517 seconds; checks/c-y11-m4-v12-learning-review.md and -science-check.md. 0 blocker, 3 should fix, 0 optional. States and gas counts give a practical first prediction before tabulated values resolve ties. The third-law contrast prevents confusing zero elemental formation enthalpy with zero entropy. Products-minus-reactants and a new sulfur calculation apply the procedure. Keep Count the gas first. A tie? Look it up; repair boiling/reference-temperature language and the inference that a tie itself establishes a small change.

chem-y11-m4-v13 (Revision 1): 5746 narration characters, about 523 seconds; checks/c-y11-m4-v13-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The ammonia heat/arrangement conflict earns Gibbs energy rather than presenting an unmotivated formula. The temperature intuition precedes conversion and substitution, and the slow-ammonia contrast separates direction from rate. Limestone and original water/peroxide questions transfer the method. Preserve the on-screen-only derivation chosen by root; refine the definition so spontaneous endothermic heat transfer is not excluded.

chem-y11-m4-v14 (Revision 1): 5558 narration characters, about 511 seconds; checks/c-y11-m4-v14-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. The descending limestone line turns temperature into a visible competition before the crossover is solved. Checking both sides and using melting/freezing explain the four sign cases without memorising an arbitrary table. The threshold estimate assumption is spoken and shown, and the mnemonic is valid within that model for positive kelvin temperatures. The final four tiles name the correct2017 modules, retain the depth-study handoff and introduce no Year 12 content.

Plates: both new paths delivered with native-size and registration qualifications in assets/brief184-manifest.json; all37 reference images and matched-state QA inspected. Gas-jar cover repair remains open.

Course coverage:82 existing designs (75 module and7 skills) trace51 of52 module stems and all19 Working Scientifically content points across seven outcomes. C3-IQ1-04, m3-v06, remains on cultural hold. One primary owner per facet is recorded in work/brief184/course-coverage.json (107 module facets and19 skills points). This is draft teaching coverage; it does not certify35 practical hours or15 depth-study hours. Current m2-v06 differs from its earlier facet-review hash and still needs its Revision2 visual/learning follow-up. Other source findings, actual methods, recording and listening gates remain open.

Evidence:24 reports,117 calculations,30 balanced-equation checks and11 site calculations in work/brief184/. Zero blockers,13 should fix and four optional findings.34 site log entries and dispositions of all48 numbered design notes are recorded; no website edit. Prioritise the CO2 bond table, cooling-example heat direction and methane entropy-sign fixes. Preserve already-correct ATP/Gibbs and NH4NO3 drill repairs.


### Brief 187, 6 November 2026

phys-y12-m5-v01 (Revision 1): 6323 narration characters (joined speech with one space between scenes), about 569 seconds; checks/p-y12-m5-v01-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. The simultaneous drop-and-launch prediction makes independence visible before equations appear. Equal-height strobes and two shadows earn the shared clock, then force reasoning builds each column. The worked drop time carries into horizontal range, and the faster-launch comparison tests the cause. Preserve the speeding/turning resultant and the sideways-slowing diagnosis. The Moon comparison is useful but remains the named optional cut if the voiced revision exceeds the cap.

phys-y12-m5-v02 (Revision 1): 6147 narration characters (joined speech with one space between scenes), about 555 seconds; checks/p-y12-m5-v02-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. The third-of-an-angle prediction exposes a useful misconception. A right triangle earns sine/cosine before the angle sweep; the Pythagoras check prevents treating components as scalar shares. The frozen-peak prediction distinguishes zero vertical velocity from nonzero horizontal velocity and acceleration. The vertical-reference-angle trap applies the adjacent/opposite reasoning. The final frame explicitly uses25 m/s at 50 degrees, so the next design actual opening is consistent.

phys-y12-m5-v03 (Revision 1): 5674 narration characters (joined speech with one space between scenes), about 519 seconds; checks/p-y12-m5-v03-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. An equation chosen for its missing time earns maximum height, then factoring the vertical displacement equation explains both time roots. The mirror comparison explains equal-level time and landing velocity rather than asking for memorisation. The height/time scaling contrast is correct, and the two tasks apply it. Preserve the equal-level warning; the last complementary-angle overlay motivates the next question without teaching its whole derivation.

phys-y12-m5-v04 (Revision 1): 5859 narration characters (scene sum), about 538 seconds; checks/p-y12-m5-v04-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. Range is built from the two columns before complementary angles swap the factors. This meets root decision5: the physical product explanation precedes the single-sentence double-angle identity. The live graph shows the 45 degree optimum and equal partners, then new tasks compare ranges, times and heights. The cliff handoff makes the shortcut condition necessary. No source learner blocker was found.

phys-y12-m5-v05 (Revision 1): 5711 narration characters (joined speech with one space between scenes), about 522 seconds; checks/p-y12-m5-v05-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. The cliff comparison first shows why the equal-level shortcut fails. Grouped givens lead to a vertical quadratic, explicit rejection of the negative root and a horizontal range. The return-to-launch-level check and optimum scan avoid claiming that the best of three tested angles is the exact optimum. Original horizontal/angled applications transfer the method. Keep the down-negative/time-positive aid within the stated lower-landing boundary.

phys-y12-m5-v06 (Revision 1): 6233 narration characters (joined speech with one space between scenes), about 557 seconds; checks/p-y12-m5-v06-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The obstacle prediction makes the horizontal clock and common height datum useful. The scene order gives one calculation stage at a time, and the sideways contrast shows that an earlier arrival alone does not guarantee clearance. The rounding-trap repair should preserve this strong method. The opening explicitly morphs the real v05 cliff/wall frame into the new15 m case, so the differing numbers are an intentional case change, not a broken join.

phys-y12-m5-v07 (Revision 1): 5719 narration characters (joined speech with one space between scenes), about 520 seconds; checks/p-y12-m5-v07-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. The simultaneous low/high flights create a reason to seek the second inverse-sine answer. The sine graph explains the calculator branch before the component swap explains its physics. The maximum-range case joins algebra to an unreachable target and the minimum-speed task. Keep the same-speed/same-level conditions and both original attempts. The ramp handoff is a new practical question, not a claim of measured data.

phys-y12-m5-v08 (Revision 1): 6392 narration characters (joined speech with one space between scenes), about 568 seconds; checks/p-y12-m5-v08-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 1 optional. The four-height prediction leads to a controlled test, first-contact measurements and sample processing. The whole ramp translates up the stand in the visual, retaining its geometry and release drop; preserve that operation. Linearisation earns the gradient-speed link, then an independent light-gate check prevents a straight line becoming proof. Sample data, illustrative repeats and possible errors are separated well. Repair the option mismatch and preserve the pending actual-practical status.

phys-y12-m5-v09 (Revision 1): 5693 narration characters (joined speech with one space between scenes), about 517 seconds; checks/p-y12-m5-v09-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The same-force/angle comparison motivates torque before the formula. Perpendicular force and moment arm give two explanations of the same factor, and the inward 180 degree case prevents an angle-definition shortcut. The moment-arm label and N m convention are appropriate. Use the listed repair for the rotation reveal while retaining the correct torque comparison; original questions apply both the calculation and line-of-action test.

phys-y12-m5-v10 (Revision 1): 5671 narration characters (joined speech with one space between scenes), about 514 seconds; checks/p-y12-m5-v10-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. The crane comparison earns a signed torque balance before the seesaw. The beam weight and support vanish from torque only because their lines pass through the chosen pivot, and the later force balance makes that distinction explicit. The lighter-child distance check is useful, and the metre-rule question distinguishes position from moment arm. Keep the optional equal/opposite couple if time permits; the final top-view crane gives a coherent circular-motion handoff.

Plates:10 of 12 new paths delivered in assets/brief187-manifest.json. Launcher layers register and were checked at 0, 30, 50 and 90 degrees; ramp tab and exit repaired; spanner/nut checked at one scale; crane corrected to 5:1 from rounded inspected anchors. Two drop-and-launch layers remain held because the painted mechanism does not show simultaneous release. Native sizes, carbon registration/margin, spanner margin, nut-plate proportion and seesaw moving-layer differences need designer acceptance. No design or narration edit.

Evidence: 20 source reports, 46 independent numerical cases, seven additional site-calculation cases and 11 new site log entries in work/brief187. Existing brief168 corrections preserved. Zero source blockers, three should fix and one optional finding; the apparatus hold is separate. All 23 existing reference images inspected. Source hashes unchanged. Exact voiced-preview, human listening, motion and release gates remain open.


### Brief 188, 6 November 2026

phys-y12-m5-v11 (Revision 1): 6266 narration characters (scene sum), about 561 seconds. checks/p-y12-m5-v11-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The crane prediction makes direction matter before any circular-motion equation appears. Copying equal velocity arrows earns acceleration, and the shrinking interval prepares the velocity-circle derivation. Keep that derivation: the synchronised tip supplies a visual cause rather than another formula to memorise. Period, frequency and radians have plain meanings and one car example. The tangent exit tests the force explanation. Keep the uniform-speed condition in the net-force conclusion. Actual shrinking-vector playback and reading load remain preview checks.

phys-y12-m5-v12 (Revision 1): 5795 narration characters (scene sum), about 523 seconds. checks/p-y12-m5-v12-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The rear view makes the vertical balance and inward grip visible. The tangent-path contrast explains why static friction points inwards, then required force is separated from maximum available grip before the speed limit is derived. Both attempts apply that distinction. Repair the force-count/viewing-plane wording, preserving the simple diagram. The wet-road values are clearly illustrative and root-approved; they do not claim a measured tyre coefficient.

phys-y12-m5-v13 (Revision 1): 5654 narration characters (scene sum), about 514 seconds. checks/p-y12-m5-v13-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 1 optional. The horizontal-string prediction is answered by the vertical force balance. The centre is located before the radius is used, and the tension components replace the original arrow rather than becoming extra forces. Keep the period surprise: its height bracket and short derivation explain the second task. Force arrows at the right-hand extreme avoid confusing projection with a changing true force. The one minor numerical note is author-only; learner answers are correct.

phys-y12-m5-v14 (Revision 1): 5582 narration characters (scene sum), about 506 seconds. checks/p-y12-m5-v14-learning-review.md and -science-check.md. 0 blocker, 3 should fix, 0 optional. The icy-road prediction earns design speed, and the comparison with the same car on a flat bend answers how banking saves friction. Separate steady-speed panels correctly avoid teaching an acceleration sequence. Keep the ramp contrast, but repair the crossed-out valid coordinate axes. The signed friction plot must distinguish direction from required grip, and the conversion lines must retain enough digits. The maximum-speed-with-friction derivation remains the root-recorded later-practice gap.

phys-y12-m5-v15 (Revision 1): 5672 narration characters (scene sum), about 517 seconds. checks/p-y12-m5-v15-learning-review.md and -science-check.md. 0 blocker, 3 should fix, 0 optional. The deliberately wrong force-times-lap product is useful here: the per-step perpendicular construction answers it, then kinetic energy gives a second check. The vertical-circle contrast earns why the work condition matters; its short energy calculation and second task can remain at the present length. Preserve the difference between zero net work and constant total mechanical energy on this level circle. The handoff apparatus uses a paper clip whose backdrop needs replacement approval.

phys-y12-m5-v16 (Revision 1): 6213 narration characters (scene sum), about 557 seconds. checks/p-y12-m5-v16-learning-review.md and -science-check.md. 1 blocker, 3 should fix, 0 optional. The sequence from controlled variables through timing, linearisation, gradient, uncertainty and systematic errors is well organised. The illustrative label is clear. However, the physical quantities being tested are misidentified: marker length is not the horizontal circle radius, and total tension is not the inward force when the string droops. The first mass ratio makes that a material error. Resolve the method before voicing. Cut the alternative-test scene if a correct geometry explanation needs room. Keep illustrative processing separate from independent experimental validation.

phys-y12-m5-v17 (Revision 1): 6337 narration characters (joined speech with one space between scenes), about 566 seconds. checks/p-y12-m5-v17-learning-review.md and -science-check.md. 0 blocker, 2 should fix, 0 optional. The two-sphere comparison creates a useful surprise: distance works against Earth, so its mass must explain the much larger force. The force law leads to field strength by dividing out the test mass, and the altitude example earns the centre-to-centre rule. Keep the area-spreading picture explicitly labelled as a picture. Repair the directions of the individual Earth-patch arrows. The reconciled opening is the actual Earth/Moon frame, and the worked constants match the HSC sheet.

phys-y12-m5-v18 (Revision 1): 5606 narration characters (joined speech with one space between scenes), about 514 seconds. checks/p-y12-m5-v18-learning-review.md and -science-check.md. 0 blocker, 3 should fix, 1 optional. The mountain thought experiment connects projectile fall to a turning surface before the force equality is used. Mass cancellation then explains shared free fall, which makes weightlessness purposeful rather than a detour. The period and Moon comparison give a useful second application of the same model. Keep the first-step/local-tangent condition in the falling comparison. Treat the Hubble altitude as an assumed exercise value. The numeric transfer of ideas is sound once those statements and the course colour key are repaired.

phys-y12-m5-v19 (Revision 1): 5628 narration characters (joined speech with one space between scenes), about 515 seconds. checks/p-y12-m5-v19-learning-review.md and -science-check.md. 0 blocker, 4 should fix, 0 optional. The fixed rooftop dish is a strong observation to explain. Matching Earth's period comes first, then plane, direction and circular shape explain why period alone is insufficient. Keep the sidereal sentence: it distinguishes the real condition from the question approximation. Replace the claim that every orbit is a circle with the plane condition. The LEO table needs a period range, while the few-hundred-kilometre spoken example is valid. Himawari and GPS facts are verified from primary agency sources.

phys-y12-m5-v20 (Revision 1): 5679 narration characters (joined speech with one space between scenes), about 519 seconds. checks/p-y12-m5-v20-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 1 optional. Halley earns the contrast between fast near and slow far. Shape, equal swept areas and size/period are taught separately, with a teaching ellipse distinguished from the real comet shape. Thin endpoint triangles earn the inverse speed ratio before the Earth check and original Mars task. The torque sentence links back to v09 without naming an unintroduced angular-momentum formula. Keep energy for v21 and v22. The historic Halley dates are verified values from different passages; the eventual year counter must stay chronological.

phys-y12-m5-v21 (Revision 1): 5681 narration characters (joined speech with one space between scenes), about 518 seconds. checks/p-y12-m5-v21-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 1 optional. The large-height mgh prediction makes the changing gravitational pull necessary. Refining work strips gives a visual reason for a finite separation energy, then the negative well and outward increase support both tasks. Keep the well beside its labelled energy graph so it reads as an energy picture. Name the lifting force in the positive-work area; the later slow-lift line already has the right sign. The h/R estimate uses the model surface g, as its derivation and author note state.

phys-y12-m5-v22 (Revision 1): 5569 narration characters (joined speech with one space between scenes), about 512 seconds. checks/p-y12-m5-v22-learning-review.md and -science-check.md. 0 blocker, 2 should fix, 1 optional. Building kinetic, potential and total energy one at a time resolves the higher-but-slower paradox. The energy-flow strip answers where the supplied energy goes, and the explicit burn-versus-final-circle distinction prevents an instantaneous speed-change misconception. Take root's intermediate-number cut: faster/slower tags explain the transfer without another unearned calculation. Keep the comet energy trade because it completes the non-circular energy facet deferred from v20. The drag question applies the same circular-state relationship.

phys-y12-m5-v23 (Revision 1): 5585 narration characters (joined speech with one space between scenes), about 513 seconds. checks/p-y12-m5-v23-learning-review.md and -science-check.md. 0 blocker, 2 should fix, 0 optional. The finite-versus-infinite prediction follows naturally from the finite energy well. Energy conservation earns the zero threshold, mass cancellation and root-two comparison; assumptions and the collision condition are learner-visible where needed. Repair the 5 km/s hook height before any voicing or trajectory build. The 10 km/s case and escape derivation are correct. The current Module6 opening matches the actual outgoing plate/particle frame. The upright rocket and its nozzle anchor are checked separately as artwork.

Plates: seven new PNGs delivered, with native-coordinate sidecars, per-design provenance, assets/brief188-manifest.json and paper/dark/white QA. Car tilt, clamp/stand and dish/house assemblies inspected. Old paper-clip backdrop reported, use held pending replacement decision. v16 practical method blocker remains independent of empty clamp artwork. No design or narration edits.

Evidence: 26 source reports, 71 independent main calculation cases plus site calculations and1.4842h transfer-coast check, 22 new site-log entries. All14official Module5 stems and38child examples compare verbatim with the cached2017syllabus. Coverage has46explicit/derived facets with one primary owner each, but banked-friction worked coverage, v08 practical evidence and v16 method remain open. One blocker,26should-fix records (six repeat the velocity colour issue and two repeat the paper-clip backdrop), five optional findings. Source hashes unchanged; no preview, listening or release pass.


### Brief 189, 6 November 2026

phys-y12-m6-v01 (Revision 1): 6138 narration characters, about 549 seconds. checks/p-y12-m6-v01-learning-review.md and -science-check.md. 0 blocker, 2 should fix, 0 optional. The three prediction changes give a clear purpose to the voltage-to-field-to-force-to-acceleration chain. The one-coulomb work strip earns E=V/d, then the sign contrast is tested before the electron calculation. Keep the oil drop as a useful case where gravity matters. Name acceleration in the final mass comparison and use charge magnitude in the oil-drop balance. The questions retain all needed constants and plate signs are held back until feedback.

phys-y12-m6-v02 (Revision 1): 6067 narration characters, about 544 seconds. checks/p-y12-m6-v02-learning-review.md and -science-check.md. 0 blocker, 3 should fix, 0 optional. The upside-down projectile comparison builds directly on the previous plate stage. Equal horizontal steps and growing vertical steps show why one clock gives a parabola. Keep the small true-scale main deflection and the labelled rescaled ghost projectile. The collision test is useful and makes the finite gap consequential. Fix the doubled-length visual, approximate-angle caption and unqualified acceleration comparison in the qualitative answer. The energy increase is correctly reserved for the next lesson.

phys-y12-m6-v03 (Revision 1): 5977 narration characters, about 535 seconds. checks/p-y12-m6-v03-learning-review.md and -science-check.md. 0 blocker, 3 should fix, 1 optional. The double-voltage prediction earns the square-root speed law. Keep the signed energy ladder and the return to the previous exit-speed result, which pays off an existing question rather than adding an unrelated calculation. Repair the magnitude/signed convention, the electron displacement direction and the absolute-versus-change U bars. The retarding case explains why initial kinetic energy matters. The short electronvolt conversion and alpha comparison support transfer without extending into relativity.

phys-y12-m6-v04 (Revision 1): 5568 narration characters, about 508 seconds. checks/p-y12-m6-v04-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The still/along/across prediction distinguishes magnetic force from electric force before the sine rule. The rotating 3D box can explain dots and crosses if the camera turn remains readable at playback speed. Keep the axis triad as the authority for direction and the named palm rule as one equivalent memory method. The aurora example needs a targeted causal repair, preserving the useful along-field velocity contrast. Zero work is correctly handed to v05.

phys-y12-m6-v05 (Revision 1): 5640 narration characters, about 512 seconds. checks/p-y12-m6-v05-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The unchanged speed counter and perpendicular steps earn zero work, then the inward force earns the circular path and radius equation. Keep the period derivation: cancellation explains the surprising equal lap times and meets the route. The three-system comparison is manageable as one panel at a time. Repair the shared-start/concentric-circle contradiction. Opposite orbit senses and separate electron/proton scale bars are correct.

phys-y12-m6-v06 (Revision 1): 5597 narration characters, about 507 seconds. checks/p-y12-m6-v06-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. Opposing electric and magnetic arrows make E/B a consequence of balance. The same-speed proton replay explains why sign and mass cancel from the selected speed. Root has approved schematic initial deflections, so do not present the rejected paths as quantitative full trajectories. Keep the short analyser application, but require equal ion charge before saying heavier bends wider. The actual outgoing wire/electron frame matches v07 after reconciliation.

phys-y12-m6-v07 (Revision 1): 6005 narration characters, about 540 seconds. checks/p-y12-m6-v07-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The neutral-wire puzzle has a clear cause chain from individual moving charges to total force. Fixed ions, drifting electrons and slight side accumulation support the plain-language force-transfer explanation. The camera tilt and end-on crosses need exact playback review. Keep the loudspeaker as an application of total active wire length, but correct its end-on current symbols. The demonstrated swing is illustrative and does not establish completion of a measured investigation.

phys-y12-m6-v08 (Revision 1): 6322 narration characters, about 563 seconds. checks/p-y12-m6-v08-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 1 optional. Each wire first makes a field and then sits in the other field, so the attraction is earned with the earlier motor rule. Equal force arrows make the third-law argument visible even when currents differ. Keep the historical/current ampere contrast, verified against BIPM. Keep the illustrative practical at its present scope because it gives the graph quantities physical meaning. Method notes should specify centre separation and account for lead forces; no experimental pass is claimed.

phys-y12-m6-v09 (Revision 1): 5609 narration characters, about 510 seconds. checks/p-y12-m6-v09-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. The rain analogy helps explain projected area before the normal and cosine appear. Keep it, with the explicit rain-to-field transition. Keep the short negative-flux sentence because the next graph has a negative segment and the chosen normal carries the sign. The plane-versus-normal angle task is well prepared and both attempts apply it. The count of drawn lines remains a picture of flux, not its definition.

phys-y12-m6-v10 (Revision 1): 6202 narration characters, about 555 seconds. checks/p-y12-m6-v10-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 0 optional. The slow/fast/still/out sequence makes rate of change, rather than field presence, the explanation. Flux linkage is separated from per-turn flux before the graph, preventing an extra N in the calculation. Keep the graph and sliding rod because they apply the same law to different triggers. Repair the unconditional doubled galvanometer swing. The meter response must be labelled illustrative and the emf result kept distinct from the current it drives.

phys-y12-m6-v11 (Revision 1): 5699 narration characters, about 516 seconds. checks/p-y12-m6-v11-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 1 optional. The counterfactual attraction explains why the direction is constrained by energy conservation. The four-step rail then turns the argument into an answer method, with a stated viewing side. Keep the open-versus-closed push contrast. Keep the dropped-magnet lag only as a clearly labelled illustration, without measured times or a claimed observed effect size. The incoming/leaving upward forces are correct. Repair the handoff claim that all earlier flux changes used moving magnets.

phys-y12-m6-v12 (Revision 1): 5673 narration characters, about 515 seconds. checks/p-y12-m6-v12-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 1 optional. The switch-on/steady/switch-off prediction makes mutual induction causal. The current-to-field-to-flux chain, aligned graphs and one short numerical case reinforce the same relationship. Keep the phase surprise only with its ideal unloaded assumption on the graph; separate it from physical galvanometer motion. Core insertion then explains why a transformer shares flux. The actual outgoing core/source/lamp frame agrees with v13. Turns ratios remain for that next lesson.

Plates: three of four new paths delivered with native-coordinate sidecars, per-design provenance, assets/brief189-manifest.json and background/assembly QA. Meter and needle share a canvas and fit the window at both end ticks. Magnet fits the copper rod. CRT held after three attempts failed native resolution and exact geometry; coded-outline fallback is permitted by the brief. Existing speaker cone requires the documented uniform transform.

Evidence: 24 source reports, 46 numerical cases and 12 direction checks, 15 site-log entries with the two priority transformer repairs first. All 15 official Module 6 parent points and example quotations checked; coverage part 1 traces the current 12 designs and records practical gaps and later-source checks for brief 190. Zero blockers, 15 should fix, four optional. No design, narration, speech, render, HTML or release change. Source hashes unchanged.


### Brief 190, 6 November 2026

phys-y12-m6-v13 (Revision 1): 6041 narration characters, about 541 seconds. checks/p-y12-m6-v13-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 1 optional. The double-turn hook creates a useful power question before the two ratios. Per-turn emf earns the voltage rule and the equal power bars earn the inverse current rule. Keep the load-sets-current scene, as root requests: the added lamp answers how the primary responds, and it is more useful than another ratio drill. Keep AC field-arrow phase consistent. The 230V worked answer repairs the source-site mismatch without altering the design. The response opportunities retain the needed turns and load current.

phys-y12-m6-v14 (Revision 1): 5760 narration characters, about 517 seconds. checks/p-y12-m6-v14-learning-review.md and -science-check.md. 0 blocker, 2 should fix, 0 optional. The missing-watts hook gives each ideal assumption a physical consequence. Keep copper, core and coupling, with each loss paired to its fix. Keep the short hysteresis scene: the flipping domains distinguish it from eddy-current heating, and there is room at the present length. The thin-sheet squared-loss estimate is correctly identified as a simple model at fixed volume, field and frequency. Repair the source scope of 98 percent efficiency and the universal high-current-winding ranking. Cooling is correctly described as carrying heat away.

phys-y12-m6-v15 (Revision 1): 5842 narration characters, about 526 seconds. checks/p-y12-m6-v15-learning-review.md and -science-check.md. 0 blocker, 3 should fix, 1 optional. Keep the two voltages and two powers, which directly answer the classic V squared/R misconception. The inverse-square scaling follows from current, rather than appearing as a memorised rule. Keep the25kV thought experiment because its line-drop contradiction shows why the huge loss is impossible. Repair the simple-circuit voltage definition versus the real three-phase grid labels, use a supported generator range, and remove safe from the domestic-voltage description. The sent/received power ledger must keep P at the sending end.

phys-y12-m6-v16 (Revision 1): 6413 narration characters, about 566 seconds. checks/p-y12-m6-v16-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. The rock-versus-spin prediction gives the split ring a job before naming its parts. The end-on coil makes the force couple and area-normal angle visible, then the dead point gives inertia a purpose. Keep the smoothing scene as root directs, and preserve the plane-angle warning as one alternative-convention sentence. The numeric example and question use the syllabus sine convention consistently. This source explanation is not a learner-conducted motor investigation.

phys-y12-m6-v17 (Revision 1): 6339 narration characters, about 563 seconds. checks/p-y12-m6-v17-learning-review.md and -science-check.md. 1 blocker, 1 should fix, 1 optional. The ammeter observation leads to the generator effect and a voltage-share diagram. The full-speed, half-speed and stall calculations form one useful causal chain; keep them and the no-spin memory aid. The energy proof has a blocker: a connected battery cannot be represented by an empty input bar. The later full power ledger and distinction between converted power and shaft output are correct. Repair the universal larger-mechanical-output claim in the final answer. Exact startup timing is a wording check under the stated resistance-only model.

phys-y12-m6-v18 (Revision 1): 6315 narration characters, about 559 seconds. checks/p-y12-m6-v18-learning-review.md and -science-check.md. 0 blocker, 0 should fix, 0 optional. The hook explicitly changes from the real can motor to the one-coil generator before drawing ideal humps. Keep that distinction. The flux graph, tangent and linked emf graph explain the phase shift before rings are compared. Slip rings preserve the coil connection; split-ring switching at zero emf makes the outside output unidirectional. Keep the power-station comparison, which explains fixed output windings and avoids a literal giant rotating output coil. No extension peak-emf formula is needed under root decision13.

phys-y12-m6-v19 (Revision 1): 6300 narration characters, about 560 seconds. checks/p-y12-m6-v19-learning-review.md and -science-check.md. 0 blocker, 2 should fix, 0 optional. The chasing-light analogy explains how stationary coils make a turning field, and the closed cage loops then connect it to induction. Keep the short tagged slip calculation, because it gives the lag a useful scale. Keep the downwind-boat analogy after repairing the zero-load ideal-limit claim. The diagram must match its four-pole speed case or explicitly separate them. More-load response is correctly limited in author notes to normal small-slip operation. No source-approved motor practical is supplied here.

phys-y12-m6-v20 (Revision 1): 6389 narration characters, about 564 seconds. checks/p-y12-m6-v20-learning-review.md and -science-check.md. 0 blocker, 1 should fix, 1 optional. The solid/slotted contrast gives closed current paths a clear job. Entry and exit swirls both produce a backwards force, then the tube shows how the same energy change gives terminal motion. Keep the coaster calculation as a brief energy application and the regenerative-braking sentence as a useful contrast in where the energy goes. Repair the pendulum energy-bar meaning so it does not erase the gravitational store on each swing. The tube times and damping are illustrative, not measured. Root specifies a coded plastic tube; no separate raster is needed.

Plates:15new native PNGs with transparent margins, sidecars, per-design provenance and assets/brief190-manifest.json. Coded plastic tube per root15. Paired contours and textures are approximate; no seamless-swap or playback pass. Static motor geometry, flywheel, tube/magnet fit and fan/switch registration inspected in QA. Coaster fin extends below wheels and channel ends are open, but integrated car/rail fit remains held for coded scale/depth/mask review.

Coverage: all15official Module6points traced across20designs through33analytic facets with one primary owner each. Wire investigation conduct and motor practical remain gaps; motor energy-proof blocker remains.16reports,31numerical cases,5direction checks and24site-log records, including checked-acceptable dispositions. One blocker,nine should-fix,four optional. No design,narration,speech,render,HTML,commit or release edit.


## Codex night takeover: brief 196 YouTube access, 6 November 2026

The previous kernel-assets error no longer occurs. The cua runtime starts and @oai/sky imports. Two inventories and a direct Chrome selection still fail: "The browser access host is unavailable". Windows inventory returns "Computer Use native pipe is unavailable: failed to connect native pipe: The system cannot find the file specified. (os error 2)". This is a missing tool connection, not evidence that Chrome is closed. No unlisting, upload, publication, playlist change or link replacement occurred.

Preserved the completed b06 and b10 v2 checks. Added both checked masters, old links, copied metadata, captions and saved playlist information to work/youtube-pending.json. b06 has historical position 7; b10 has no saved position and needs live readback. Exact access evidence: work/brief196/youtube-access-night.json. The owner can upload by hand from the pending file.

Brief 213 pre-voice check passes: 17 scenes, 6,563 characters, all bold cues quoted in visual order, no em dashes. Revision 6 resolves 195-1 through 195-5. Preserved v1 state and audio in work/brief213/v1-backup/. Five unchanged scenes are reusable, so twelve new scene requests are needed. Current local quota ledger has 94 requests; the complete lesson cannot fit before the 19:00 reset under the 99-request cap. No speech requested. The scheduled brief 165 task is Ready for 19:00 Sydney and has not run. Run d01 after that task, subject to remaining quota. Pre-voice evidence and prepared inputs: work/brief213/prevoice-check.json, voice-manifest.json and lesson.json.


## Codex hand-in: brief 214, 6 November 2026

Ten repaired designs checked: zero blockers, six should-fix findings, no source or speech edits. The former capped-vessel blocker is resolved by the no-gas fallback. Guard-digit repairs and all new slider values were recalculated.

- chem-y11-m2-v01: 5975 characters, about 530 s; clean. Report: docs/production/claude-pm/checks/c-y11-m2-v01-rev2-error-check.md.
- chem-y11-m2-v02: 5578 characters, about 502 s; 2 should fix. Report: docs/production/claude-pm/checks/c-y11-m2-v02-rev2-error-check.md.
- chem-y11-m2-v03: 5683 characters, about 508 s; 1 should fix. Report: docs/production/claude-pm/checks/c-y11-m2-v03-rev2-error-check.md.
- chem-y11-m2-v04: 6331 characters, about 556 s; 1 should fix. Report: docs/production/claude-pm/checks/c-y11-m2-v04-rev2-error-check.md.
- chem-y11-m2-v05: 5754 characters, about 527 s; clean. Report: docs/production/claude-pm/checks/c-y11-m2-v05-rev2-error-check.md.
- chem-y11-m2-v06: 5769 characters, about 527 s; clean. Report: docs/production/claude-pm/checks/c-y11-m2-v06-rev3-error-check.md.
- chem-y11-m2-v07: 5684 characters, about 521 s; clean. Report: docs/production/claude-pm/checks/c-y11-m2-v07-rev2-error-check.md.
- chem-y11-ws-v04: 5847 characters, about 524 s; 1 should fix. Report: docs/production/claude-pm/checks/c-y11-ws-v04-rev2-error-check.md.
- chem-y11-ws-v05: 6405 characters, about 567 s; 1 should fix. Report: docs/production/claude-pm/checks/c-y11-ws-v05-rev2-error-check.md.
- chem-y11-ws-v06: 5596 characters, about 513 s; clean. Report: docs/production/claude-pm/checks/c-y11-ws-v06-rev2-error-check.md.

Findings: v02 has a stale scene-11 sentence number and an early missing-two cross in scene 17; v03 has early grams occurrences in scene 2; v04 shows 247 where the new simulation gives 247.9; ws-v04 has two stale stage-cut ordinals; ws-v05 retains the withdrawn independent-extremes range clause in author calculations. Each repair needs no new speech.

Plate delivered: public/assets/chemistry/y11c-beaker-white-precipitate-v1.png, native 1254 by 1254 RGBA, generated with built-in image_gen as an edit of the existing beaker. Paper/dark/white 300 px and 600 px QA and the overlay inspected. Vessel geometry is visually aligned; exact pixel-identical edges are not claimed. Alpha difference from the reference averages 0.457/255. Original assets and earlier evidence preserved. Updated assets/brief180-manifest.json and assets/chem-y11-m2-v01-provenance.json; bottle requests marked withdrawn. Prompt: work/brief214/plate-prompt.txt. Evidence: work/brief214/audit.json, calculations.json, results.json and plate-qa.json. No integrated build, motion, voiced-preview or human-listening pass.

## Codex hand-in: brief 199 partial checks, 6 November 2026

chem-m6-g03 and chem-m7-c10 pass fresh asset/font decoding and have inspected 16-frame pre-render sheets beside the g01 reference. Full renders are held by the new build gate: g03 has 34 to 38 px current working and 24 px bridge values; c10 has 23 px key notes and 24 px feedback reading. Reports and comparison sheets: work/brief199/chem-m6-g03/ and work/brief199/chem-m7-c10/. The brief 196 g03 session scan was reused.

chem-m7-p05 passes asset/font decoding but its still bundle failed with ENOSPC. chem-m8-c01 has not started. C: has about 14 MB free. Automatic approval review rejected cleanup of this session's generated copies, including the narrower hash-verified file-only attempt, returning blocked by policy. No files were removed. Later full render briefs 198 and 200 to 212, plus new brief 215, remain queued behind disk space and the per-video build gate. No new checked master was added to the upload queue.

chem-m7-p06's flagged title-only and partial-table samples match source reveal delays, not missing image dependencies. Exact sample-frame markup and scene positions are in work/brief199/p06-source-probe.json and p06-source-05.html to -08.html. No re-render requested from these samples; playback judgement belongs to Claude.

Historical records map NJjEgjilgAE to c05 (The Equilibrium Constant, K: Writing Expressions), position 7, and PL415_P6F6w to c10 (Ka, Kb and Ksp), position 15. Live watch-page and oEmbed reads were throttled, so current titles remain unverified. No link correction, unlisting or upload occurred. Full report: work/brief199/p06-and-link-check.md. Brief 213 waits for the scheduled task and sufficient quota and disk; the 19:00 task remains unchanged.


## Codex continuation: disk and pilot preparation, 6 November 2026

Owner freed C: and authorised normal C: render scratch, one render at a time, with each chunk folder removed only after its v2 master passes checks. Added optional --keep-chunks to scripts/render-explainer.mjs so chunks can survive until those checks; default behaviour is unchanged. Syntax check passes. No chunks removed yet.

Brief 199: chem-m7-p05 still retry now completes and passes asset/font decoding. Its 16-frame sheet fails the build gate: thin frames 4 and 5, empty feedback box in frame 14, 36 px current working, 24/22 px feedback reading and paragraph notes. Full render held. Evidence: work/brief199/chem-m7-p05/pre-render-sheet.jpg, pre-render-comparison.jpg and build-report.md. chem-m8-c01 remains to check. Updated handoff shelves 206 to 212 and 215; those will not run.

Brief 217: phys-y12-m5-v04 Revision 2 error check is clean. Fifteen scenes, 5,859 characters, all bold cues quoted in order, launcher plates inspected. Recalculated all slider stops and changed examples in work/brief217/calculations.json. At 37 degrees the range is correctly 22.1 m in the current source. Report: docs/production/claude-pm/checks/p-y12-m5-v04-rev2-error-check.md. Chemistry Revision 3 remains covered by the clean brief 214 check.

Briefs 213 and 217: prepared exact-source voice inputs and recording gates for all three pilots, each ready. Paths and source hashes: work/brief217/pilot-queue.json. Five unchanged maths takes are reused. Added the central pronunciation rule for mathematical constant a to say ay; targeted checks pass without changing ordinary a. No new speech request yet. The unchanged 19:00 brief 165 task has first use of the reset quota; recheck its result before starting any pilot generation. Human listening and exact voiced preview remain pending.


## Codex hand-in: brief 216, 6 November 2026

Ten repaired designs checked. Zero blockers, two visual-only should-fix findings. No source, narration or speech edits. All repaired working and new slider stops recalculated in work/brief216/calculations.json. Reused brief 181 plate records; no new plate requested.

chem-y11-m2-v08: 6,311 characters, about 563 s; 0 blockers, 0 should fix. docs\production\claude-pm\checks\c-y11-m2-v08-rev2-error-check.md.

chem-y11-m2-v09: 6,295 characters, about 564 s; 0 blockers, 1 should fix. docs\production\claude-pm\checks\c-y11-m2-v09-rev2-error-check.md.

chem-y11-m2-v10: 5,672 characters, about 519 s; 0 blockers, 0 should fix. docs\production\claude-pm\checks\c-y11-m2-v10-rev2-error-check.md.

chem-y11-m2-v11: 5,705 characters, about 521 s; 0 blockers, 1 should fix. docs\production\claude-pm\checks\c-y11-m2-v11-rev2-error-check.md.

chem-y11-m2-v12: 6,291 characters, about 562 s; 0 blockers, 0 should fix. docs\production\claude-pm\checks\c-y11-m2-v12-rev2-error-check.md.

chem-y11-m2-v13: 5,665 characters, about 513 s; 0 blockers, 0 should fix. docs\production\claude-pm\checks\c-y11-m2-v13-rev2-error-check.md.

chem-y11-m2-v14: 5,659 characters, about 512 s; 0 blockers, 0 should fix. docs\production\claude-pm\checks\c-y11-m2-v14-rev2-error-check.md.

chem-y11-m2-v15: 5,567 characters, about 506 s; 0 blockers, 0 should fix. docs\production\claude-pm\checks\c-y11-m2-v15-rev2-error-check.md.

chem-y11-m2-v16: 5,573 characters, about 506 s; 0 blockers, 0 should fix. docs\production\claude-pm\checks\c-y11-m2-v16-rev2-error-check.md.

chem-y11-ws-v07: 6,342 characters, about 567 s; 0 blockers, 0 should fix. docs\production\claude-pm\checks\c-y11-ws-v07-rev2-error-check.md.

New findings: v09 scene 3 has stale first/second grams ordinals, which should be second/third or full result phrases. v11 scene 6 gives 4.5 g/L and 4500 mg/L at 0.5%; correct to 5.0 g/L and 5000 mg/L. Its 0.0856 mol/L is already right. All original brief 181 findings are resolved. Human listening and built playback remain pending.


Brief 199 final pre-render check: chem-m8-c01 now completes 16 stills and asset/font decoding, including burette and flask. Its sheet fails the current gate: thin frames 7 and 11, 42 px worked lines, 38 px feedback working and 25.2 px retained question, plus paragraph notes. Report and comparison: work/brief199/chem-m8-c01/. All four brief 199 full renders are held for Claude scene repairs under the current Grade A gate. The original missing dependencies are restored in the guarded stills; no new v2 master or pending upload added.


Brief 198: bio-m6-b04, bio-m6-b05 held before render. Both current builder notes explicitly grade the fixed stills B+, below the newer Grade A gate in maths-visual-standard.md. Evidence and note hashes: work\brief198\pre-render-gate.json. No v2 render, scan, playback or upload claimed. Scene edits belong to Claude.


Brief 200: bio-m6-b07, bio-m6-b10 held before render. Both current builder notes explicitly grade the fixed stills B+, below the newer Grade A gate in maths-visual-standard.md. Evidence and note hashes: work\brief200\pre-render-gate.json. No v2 render, scan, playback or upload claimed. Scene edits belong to Claude.


Brief 201: bio-m5-g03, bio-m7-b11 held before render. Both current builder notes explicitly grade the fixed stills B+, below the newer Grade A gate in maths-visual-standard.md. Evidence and note hashes: work\brief201\pre-render-gate.json. No v2 render, scan, playback or upload claimed. Scene edits belong to Claude.


Brief 202: chem-m6-c06, chem-m6-c07 held before render. Both current builder notes explicitly grade the fixed stills B+, below the newer Grade A gate in maths-visual-standard.md. Evidence and note hashes: work\brief202\pre-render-gate.json. No v2 render, scan, playback or upload claimed. Scene edits belong to Claude.


Brief 203: bio-m6-b11, chem-m6-c10 held before render. Both current builder notes explicitly grade the fixed stills B+, below the newer Grade A gate in maths-visual-standard.md. Evidence and note hashes: work\brief203\pre-render-gate.json. No v2 render, scan, playback or upload claimed. Scene edits belong to Claude.


Brief 204: bio-m6-b12, bio-m6-b16 held before render. Both current builder notes explicitly grade the fixed stills B+, below the newer Grade A gate in maths-visual-standard.md. Evidence and note hashes: work\brief204\pre-render-gate.json. No v2 render, scan, playback or upload claimed. Scene edits belong to Claude.


Brief 205: bio-m6-b19, bio-m7-b04 held before render. Both current builder notes explicitly grade the fixed stills B+, below the newer Grade A gate in maths-visual-standard.md. Evidence and note hashes: work\brief205\pre-render-gate.json. No v2 render, scan, playback or upload claimed. Scene edits belong to Claude.


Brief165 after-reset worker stopped: bio-y11-fa1-v01: generation/alignment failed; no retry; saved takes retained. Saved takes retained; later lessons not attempted.


Owner override, 6 November 2026: Render the B+ replacements. The 14 entries in briefs 198 and 200 to 205 are authorised at their recorded B+ grade; work/replacement-A-gate-queue.json and each brief gate file are updated. One render at a time on normal C: scratch, keep chunks until v2 checks pass, then delete that render chunk folder. Owner also chose continued cached recording and light reviews while memory is tight. The four brief 199 findings remain separately reported.


Brief 165 scheduled result: stopped on bio-y11-fa1-v01 after 9 requests ($0.0610515 estimated from billed tokens). Alignment failed loading model weights with DefaultCPUAllocator not enough memory (9,437,184-byte allocation). The task stopped without retry and retained its takes. Later lessons were not attempted. Results and spend: work/brief165-bio-physics/results.json and spend.json.

Briefs 213 and 217: all three pilot recordings are now captured in cache, never revoicing unchanged takes. Maths: 12 new, 5 reused, $0.09038 new estimated cost. Chemistry: 16 new, 1 reused, $0.08880 new estimated cost. Physics: 14 new, 1 reused, $0.08740 new estimated cost. Per-scene paths, hashes, tokens and represented take costs are in work/brief213/math-a12-d01-capture-stats.json and work/brief217/*-capture-stats.json. Alignment, measured output, cues and captions are pending memory availability. No measured pass or human listening is claimed.

The lower-memory experiment loaded the same weights but still exhausted memory during inference; one diagnostic PowerShell process also exited out of memory. The original working scripts/align-google-scene.py was restored, and the unsuccessful experiment is isolated in work/brief217/align-google-low-memory-probe.py with logs. Owner selected continued cached recording and light reviews rather than closing apps. Do not re-request these saved takes.

### Brief 213: math-a12-d01 cached voicing and measured data, 6 November 2026

Recording-stage check passed on the exact source SHA256 `64ade7ba77e32f3a01d7d06036f710b819bfcbe2a8a86af206d0c3cdf1d75f2c`. 6,563 characters, 17 scenes, 12 new takes and 5 reused. Measured duration 539.47 s including the design holds. New billed usage: 1345 input and 9968 audio output tokens, USD 0.090384. All represented takes including reuse: 1620 input and 11957 output tokens, USD 0.108423; this is not new spend. Cache-only alignment made zero new speech requests.

Measured data: `docs/production/claude-pm/lessons/math-a12-d01/measured/lesson.json`. All display-text alignments, scene ids, holds and bold-cue timings checked. Worst word gap: 1.168 s in `worked-2`. Captions: `docs/production/claude-pm/lessons/math-a12-d01/measured/captions-rev6/captions.srt` and `.vtt`, 226 cues, monotonic and within the measured timeline. Claude must regenerate from any later playback timeline with added holds.

Machine flags: three-flasks (1 full-scale samples), dial-a (2 full-scale samples), attempt-1 (1 full-scale samples). No quiet blocks of 1.5 s or longer in these speech WAVs. Isolated full-scale samples and low alignment scores are listening flags, not a clipping diagnosis. See `work/brief213/math-a12-d01-validation.json` and `work/brief213/math-a12-d01-hand-in.json` for each scene, pronunciation text, usage and timings. Human listening is pending, including the mathematical letter pronunciation where applicable. No scenes were built or rendered.

### Brief 191: Module7 source reviews, coverage, site log and plates

phys-y12-m7-v01: Revision1 source checked, 6,087 scene-sum characters; 0 blockers, 1 should fix, 1 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v01-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v01-science-check.md`. Resolve findings before recording.

phys-y12-m7-v02: Revision1 source checked, 6,121 scene-sum characters; 0 blockers, 3 should fix, 0 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v02-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v02-science-check.md`. Resolve findings before recording.

phys-y12-m7-v03: Revision1 source checked, 6,181 scene-sum characters; 0 blockers, 3 should fix, 1 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v03-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v03-science-check.md`. Resolve findings before recording.

phys-y12-m7-v04: Revision1 source checked, 6,070 scene-sum characters; 0 blockers, 1 should fix, 0 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v04-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v04-science-check.md`. Resolve findings before recording.

phys-y12-m7-v05: Revision1 source checked, 6,267 scene-sum characters; 0 blockers, 1 should fix, 1 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v05-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v05-science-check.md`. Resolve findings before recording.

phys-y12-m7-v06: Revision1 source checked, 6,253 scene-sum characters; 0 blockers, 1 should fix, 0 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v06-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v06-science-check.md`. Resolve findings before recording.

phys-y12-m7-v07: Revision1 source checked, 6,140 scene-sum characters; 0 blockers, 1 should fix, 1 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v07-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v07-science-check.md`. Resolve findings before recording.

phys-y12-m7-v08: Revision1 source checked, 6,283 scene-sum characters; 0 blockers, 2 should fix, 0 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v08-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v08-science-check.md`. Resolve findings before recording.

phys-y12-m7-v09: Revision1 source checked, 6,430 scene-sum characters; 0 blockers, 2 should fix, 1 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v09-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v09-science-check.md`. Resolve findings before recording.

phys-y12-m7-v10: Revision1 source checked, 6,277 scene-sum characters; 0 blockers, 3 should fix, 1 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v10-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v10-science-check.md`. Resolve findings before recording.

phys-y12-m7-v11: Revision1 source checked, 6,158 scene-sum characters; 0 blockers, 3 should fix, 1 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v11-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v11-science-check.md`. Resolve findings before recording.

phys-y12-m7-v12: Revision1 source checked, 6,218 scene-sum characters; 0 blockers, 3 should fix, 0 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v12-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v12-science-check.md`. Resolve findings before recording.

phys-y12-m7-v13: Revision1 source checked, 6,395 scene-sum characters; 0 blockers, 1 should fix, 0 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v13-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v13-science-check.md`. Resolve findings before recording.

phys-y12-m7-v14: Revision1 source checked, 6,338 scene-sum characters; 0 blockers, 2 should fix, 1 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v14-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v14-science-check.md`. Resolve findings before recording.

phys-y12-m7-v15: Revision1 source checked, 5,962 scene-sum characters; 0 blockers, 2 should fix, 1 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v15-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v15-science-check.md`. Resolve findings before recording.

phys-y12-m7-v16: Revision1 source checked, 5,678 scene-sum characters; 0 blockers, 3 should fix, 2 optional. Reports: `docs/production/claude-pm/checks/p-y12-m7-v16-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m7-v16-science-check.md`. Resolve findings before recording.

Coverage: `checks/phys-y12-m7-coverage-check.md`, with exact official-ledger matching and independent arithmetic under `work/brief191/`. Cosmological time-dilation evidence remains a deferred Module7 gap under root decision7. Written joins match through the current m8-v01 opening; source-only evidence is `work/brief191/joins.json`.

Site:44 deduplicated current-source findings and checked-acceptable dispositions appended to `site-corrections-phys-y12.md`; SHA256 and full paragraph context in `work/brief191/site-log-result.json`. No HTML edited. In particular, the impossible100m/60m observer setup and the flown-clock sign contradiction are confirmed. Several proposed historical/rounding repairs needed qualification; the log distinguishes these.

Plates:18 native unaltered PNGs delivered under `public/assets/physics/`, actual dimensions, approximate pixel anchors, originals and hashes in `assets/brief191-manifest.json`;16 per-design provenance files and paper/dark/white400px QA in `assets/brief191-qa/`. No people, hands, faces, readable text or logos observed. The60 painted wheel teeth were measured. The spacecraft/exhaust same-canvas composite fits the nozzle. One hot-heater candidate is held: image edits did not preserve exact canvas/outline registration for a crossfade. Star variants preserve the existing Sun size and position, including its less-than8% left margin; literal8% on every side cannot also be claimed. Nominal requested canvas sizes differ from native outputs.

Bench fit: uniform base-width scales and common foot baseline recorded in `assets/brief191-qa/bench-fit.json`. This exposes a lower laser aperture than the slide window/screen. Adjust post or raiser geometry before the straight-beam build; do not stretch the artwork. A100px coded filter fits the reported clear window. Existing filament-lamp-v1 has true alpha, so no conditional replacement; optional filter mount was not selected. Static QA supplies no playback, listening, practical-conduct or recording approval. No design, narration or scene code changed.

### Brief 217: chem-y11-m2-v06 cached voicing and measured data, 6 November 2026

Recording-stage check passed on the exact source SHA256 `faed58f0ff934cd6cb0140210182c0f61aa934286e812c3c9863350e913908dd`. 5,769 characters, 17 scenes, 16 new takes and 1 reused. Measured duration 477.93 s including the design holds. New billed usage: 1231 input and 9798 audio output tokens, USD 0.088798. All represented takes including reuse: 1250 input and 9895 output tokens, USD 0.089680; this is not new spend. Cache-only alignment made zero new speech requests.

Measured data: `docs/production/claude-pm/lessons/c-y11-m2-v06/measured/lesson.json`. All display-text alignments, scene ids, holds and bold-cue timings checked. Worst word gap: 1.025 s in `particles-to-moles`. Captions: `docs/production/claude-pm/lessons/c-y11-m2-v06/measured/captions-pilot/captions.srt` and `.vtt`, 175 cues, monotonic and within the measured timeline. Claude must regenerate from any later playback timeline with added holds.

Machine flags: none. No quiet blocks of 1.5 s or longer in these speech WAVs. Isolated full-scale samples and low alignment scores are listening flags, not a clipping diagnosis. See `work/brief217/chem-y11-m2-v06-validation.json` and `work/brief217/chem-y11-m2-v06-hand-in.json` for each scene, pronunciation text, usage and timings. Human listening is pending, including the mathematical letter pronunciation where applicable. No scenes were built or rendered.

### Brief 217: phys-y12-m5-v04 cached voicing and measured data, 6 November 2026

Recording-stage check passed on the exact source SHA256 `5a3d43fdc71e17cee0569047a053a58642b1c8db9c8415a48be0d5fcfce6f6d4`. 5,859 characters, 15 scenes, 14 new takes and 1 reused. Measured duration 473.60 s including the design holds. New billed usage: 1275 input and 9640 audio output tokens, USD 0.087398. All represented takes including reuse: 1294 input and 9737 output tokens, USD 0.088280; this is not new spend. Cache-only alignment made zero new speech requests.

Measured data: `docs/production/claude-pm/lessons/p-y12-m5-v04/measured/lesson.json`. All display-text alignments, scene ids, holds and bold-cue timings checked. Worst word gap: 1.106 s in `attempt-1`. Captions: `docs/production/claude-pm/lessons/p-y12-m5-v04/measured/captions-pilot/captions.srt` and `.vtt`, 174 cues, monotonic and within the measured timeline. Claude must regenerate from any later playback timeline with added holds.

Machine flags: two-traps (2 full-scale samples). No quiet blocks of 1.5 s or longer in these speech WAVs. Isolated full-scale samples and low alignment scores are listening flags, not a clipping diagnosis. See `work/brief217/phys-y12-m5-v04-validation.json` and `work/brief217/phys-y12-m5-v04-hand-in.json` for each scene, pronunciation text, usage and timings. Human listening is pending, including the mathematical letter pronunciation where applicable. No scenes were built or rendered.

### Brief 218: repaired Year11 Chemistry source checks and yellow-flame attempt

chem-y11-m2-v17: Revision2 checked, 5,759 characters, source estimate 522s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m2-v17-rev2-error-check.md`.

chem-y11-m2-v18: Revision2 checked, 6,380 characters, source estimate 570s;0 blockers,1 should fix. `docs/production/claude-pm/checks/c-y11-m2-v18-rev2-error-check.md`.

chem-y11-m2-v19: Revision2 checked, 5,841 characters, source estimate 529s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m2-v19-rev2-error-check.md`.

chem-y11-m2-v20: Revision2 checked, 5,913 characters, source estimate 537s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m2-v20-rev2-error-check.md`.

chem-y11-m3-v01: Revision2 checked, 5,588 characters, source estimate 510s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m3-v01-rev2-error-check.md`.

chem-y11-m3-v02: Revision2 checked, 5,627 characters, source estimate 508s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m3-v02-rev2-error-check.md`.

chem-y11-m3-v03: Revision2 checked, 6,280 characters, source estimate 562s;0 blockers,1 should fix. `docs/production/claude-pm/checks/c-y11-m3-v03-rev2-error-check.md`.

chem-y11-m3-v04: Revision2 checked, 5,582 characters, source estimate 506s;0 blockers,2 should fix. `docs/production/claude-pm/checks/c-y11-m3-v04-rev2-error-check.md`.

chem-y11-m3-v05: Revision2 checked, 5,621 characters, source estimate 508s;0 blockers,1 should fix. `docs/production/claude-pm/checks/c-y11-m3-v05-rev2-error-check.md`.

chem-y11-m3-v07: Revision2 checked, 5,760 characters, source estimate 520s;0 blockers,2 should fix. `docs/production/claude-pm/checks/c-y11-m3-v07-rev2-error-check.md`.

The previous secondary-data blocker is resolved: the six Celsius/pressure pairs exactly match inspected OpenStax Atoms First2e figure8.11. New findings: correct its citation title and identify the two-column subset or include the publisher kelvin column; retie m3-v03 scene4 to sodium rather than potassium; carry the scoped combustion chip through v04/v05/v07; implement root decision19 on screen for the cold dish and calcium demonstrations. All are source/display repairs. Arithmetic, slider stops and66 atom/charge checks are in `work/brief218/`. No source, scene, narration or method was changed or approved.

Plate: revised yellow-flame spec is geometrically possible, but two generated candidates failed exact canvas/outline registration. Held at their original generated-image paths, with paper/dark/white300px QA and overlay in `assets/brief218-qa/`; result `work/brief218/yellow-flame-result.json`. Brief182 manifest and m3-v03 provenance updated without replacing earlier evidence. The production asset path remains absent and the written fallback stands. No stretched or cropped production PNG was created. No other new plate request was confirmed.

### Brief 219: repaired Year11 Chemistry source checks and two plates

chem-y11-m3-v08: Revision2 checked, 6,319 scene-sum characters, source estimate 560s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m3-v08-rev2-error-check.md`.

chem-y11-m3-v09: Revision2 checked, 5,594 scene-sum characters, source estimate 507s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m3-v09-rev2-error-check.md`.

chem-y11-m3-v10: Revision3 checked, 6,400 scene-sum characters, source estimate 566s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m3-v10-rev3-error-check.md`.

chem-y11-m3-v11: Revision2 checked, 6,258 scene-sum characters, source estimate 560s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m3-v11-rev2-error-check.md`.

chem-y11-m3-v12: Revision2 checked, 6,193 scene-sum characters, source estimate 552s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m3-v12-rev2-error-check.md`.

chem-y11-m3-v13: Revision2 checked, 6,140 scene-sum characters, source estimate 552s;0 blockers,1 should fix. `docs/production/claude-pm/checks/c-y11-m3-v13-rev2-error-check.md`.

chem-y11-m3-v14: Revision2 checked, 6,303 scene-sum characters, source estimate 566s;0 blockers,1 should fix. `docs/production/claude-pm/checks/c-y11-m3-v14-rev2-error-check.md`.

chem-y11-m3-v15: Revision2 checked, 6,153 scene-sum characters, source estimate 555s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m3-v15-rev2-error-check.md`.

chem-y11-m4-v01: Revision2 checked, 6,372 scene-sum characters, source estimate 570s;0 blockers,1 should fix. `docs/production/claude-pm/checks/c-y11-m4-v01-rev2-error-check.md`.

chem-y11-m4-v02: Revision2 checked, 6,345 scene-sum characters, source estimate 568s;0 blockers,0 should fix. `docs/production/claude-pm/checks/c-y11-m4-v02-rev2-error-check.md`.

Three findings: m3-v13 newly says acid gets weaker rather than less concentrated (repair before voicing); m3-v14 temperature-control practical and m4-v01 spirit-burner view still need the full root decision19 on-screen method condition and presentation limit. Other original repairs are present. Slider rates0.53,0.40,0.27,0.15,0.067, cell values-0.46,+0.78,+1.10,+2.70V, calorimetry results2.76,9.20,1.66kJ and water-mass stops all recalculate.47 atom/charge cases pass with the4 intentional mistakes correctly unbalanced. Evidence: `work/brief219/`. No design, narration or scene code edits.

CO/NO2 source found: Chang Chemistry14e, McGraw Hill, chapter13 slide56 (PDFpage28). The rendered diagram was inspected and matches the effective C-to-O and two ineffective approaches in the design. Source/hash and local page render: `work/brief219/orientation-source.json` and `chang-orientation-page28.png`. It supports the teaching orientation model, not an experimental overall rate law. The former OpenStax attribution is not reused.

Plates: native unaltered `public/assets/chemistry/y11c-gold-nugget-v1.png` (1671x941) and `y11c-cuso4-beaker-silver-v1.png` (1106x1422) delivered. Brief183 manifest and per-design provenance updated; paper/dark/white300px composites and reference overlays in `assets/brief219-qa/`. Glass and beaker outlines visually register; this is not identical pixel data. Gold canvas is1px narrower than1672px reference, explicitly recorded. All PNGs retain native aspect ratio. Zinc and aluminium acid beakers share one physical scale with level rims at native factors0.15 and0.239234 in the QA view. Actual built motion and human listening remain pending.


### Night queue progress, brief198 and220,6November2026

bio-m6-b04 first render stopped at frame4050 when both font requests returned HTTP404. Font files remained intact. Failed chunks/log preserved; fixed loopback bundle server plus per-chunk font checks passed two independent frame probes. Fresh v2 retry is running, chunks through13799. Master checks and playback still pending; no render chunks deleted. Build report: work/brief198/bio-m6-b04/build-report.md.

Brief220 first10 recording-stage gates pass. Starting shared tally52611/115000 billed characters. Existing194 runner adapted at work/brief220/run220.mjs; no220 paid request yet, waits for active render. Spectra work active under assets/brief220-spectra, including36 compounds queried in NMRShiftDB. Some returned records are predictions or lack solvent/field; not certified. SDBS automated collection not used under its disclaimer. Browser/native access retried and remains unavailable, so no upload action.


### Brief198 bio-m6-b04 v2 master,6November2026

Master completed at out/explainer/Explainer-bio-m6-b04/Explainer-bio-m6-b04-v2.mp4:14918frames,497.266667s,1920x1080,30fps. Asset copies match all18 pre-render references.169 captions exported from the playback snapshot to work/brief198/bio-m6-b04/captions-v2.120 samples and endpoints decode; zero automated blank/broken-icon flags. Four scan boards and16-frame sheet visually inspected and compared with the prior sheet. No missing artwork observed. Build report and limits: work/brief198/bio-m6-b04/build-report.md.

Full-speed playback is pending, including transient gene zoom and moving gamete diagrams. Browser host/native pipe remain unavailable. Chunks retained; no upload-ready claim or live change. Brief220 voicing has now started on bio-m8-b06, within the shared cap.


### Brief220 voicing tally and spectra progress,6November2026

bio-m8-b06: measured; 5,669 source characters; 5,594 new billed-character tally; 2462 reported credit cost; 466.97 seconds; 15 new takes, 1 reused; 156 captions; cue and alignment checks pass. Measured folder: docs/production/claude-pm/lessons/m8b06/measured/

bio-m8-b07: measured; 5,711 source characters; 5,636 new billed-character tally; 2479 reported credit cost; 467.60 seconds; 14 new takes, 1 reused; 155 captions; cue and alignment checks pass. Measured folder: docs/production/claude-pm/lessons/m8b07/measured/

bio-m8-b08: measured; 5,737 source characters; 5,662 new billed-character tally; 2491 reported credit cost; 462.53 seconds; 13 new takes, 1 reused; 152 captions; cue and alignment checks pass. Measured folder: docs/production/claude-pm/lessons/m8b08/measured/

bio-m8-b09: measured; 5,929 source characters; 5,854 new billed-character tally; 2576 reported credit cost; 490.87 seconds; 16 new takes, 1 reused; 170 captions; cue and alignment checks pass. Measured folder: docs/production/claude-pm/lessons/m8b09/measured/

bio-m8-b10: measured; 5,655 source characters; 5,580 new billed-character tally; 2457 reported credit cost; 462.50 seconds; 14 new takes, 1 reused; 156 captions; cue and alignment checks pass. Measured folder: docs/production/claude-pm/lessons/m8b10/measured/

bio-m8-b11: measured; 5,912 source characters; 5,837 new billed-character tally; 2567 reported credit cost; 475.10 seconds; 15 new takes, 1 reused; 157 captions; cue and alignment checks pass. Measured folder: docs/production/claude-pm/lessons/m8b11/measured/

bio-m8-p01: skipped-character-count-mismatch; 5,811 source characters; 0 new billed-character tally; 0 reported credit cost; No paid request. Current scene strings total5811; declared5829/5831. Claude must correct the count before recording.

bio-m8-p02: measured; 5,880 source characters; 5,805 new billed-character tally; 2554 reported credit cost; 476.07 seconds; 17 new takes, 1 reused; 175 captions; cue and alignment checks pass. Measured folder: docs/production/claude-pm/lessons/m8p02b/measured/

chem-m8-g02: measured; 5,794 source characters; 5,719 new billed-character tally; 2515 reported credit cost; 465.93 seconds; 15 new takes, 1 reused; 162 captions; cue and alignment checks pass. Measured folder: docs/production/claude-pm/lessons/m8g02/measured/

chem-m5-g02: measured; 5,968 source characters; 5,893 new billed-character tally; 2593 reported credit cost; 499.13 seconds; 17 new takes, 1 reused; 174 captions; cue and alignment checks pass. Measured folder: docs/production/claude-pm/lessons/m5g02/measured/

bio-m8-b12: skipped-recording-check; 5,969 source characters; 0 new billed-character tally; 0 reported credit cost; No paid request. Hook motionPurpose rejected as prohibition-only; see work/brief220/bio-m8-b12-recording-check.log.

bio-m8-b13: skipped-recording-check; 5,693 source characters; 0 new billed-character tally; 0 reported credit cost; No paid request. Hook motionPurpose rejected as prohibition-only; see work/brief220/bio-m8-b13-recording-check.log.

bio-m8-b14: skipped-recording-check; 5,963 source characters; 0 new billed-character tally; 0 reported credit cost; No paid request. Hook motionPurpose rejected as prohibition-only; see work/brief220/bio-m8-b14-recording-check.log.

bio-m8-b16: skipped-recording-check; 6,010 source characters; 0 new billed-character tally; 0 reported credit cost; No paid request. Hook motionPurpose rejected as prohibition-only; see work/brief220/bio-m8-b16-recording-check.log.

bio-m8-g02: measured; 5,850 source characters; 5,775 new billed-character tally; 2540 reported credit cost; 467.47 seconds; 14 new takes, 1 reused; 163 captions; cue and alignment checks pass. Measured folder: docs/production/claude-pm/lessons/m8g02b/measured/

chem-m8-c13: deferred-credit-reserve; 6,193 source characters; 0 new billed-character tally; 0 reported credit cost; No paid request. Deferred at the cap; no further lesson started after c13 would cross it.

chem-m8-c09: not reached after credit-reserve stop; 6,155 source characters; 0 new billed-character tally; 0 reported credit cost; No paid request. Deferred at the cap; no further lesson started after c13 would cross it.

Cumulative billed-character tally:109,966 of115,000, including57,355 new characters in150 successful requests. There are5,034 characters left to the cap. Reported provider credit-cost headers total25,234 for these new requests; this is a separate value and does not replace the instructed character cap. No account balance read. All ten measured lessons pass independent alignment,text,hash,bold-cue and caption checks in work/brief220/validation.json. Human listening remains pending. Claude must regenerate captions from the playback timeline if a later build adds quiet frames. No full video build or export under220.

Spectra retrieval remains partial:72 NMRShiftDB responses for36 compounds,35 with the required reported conditions,37 not certified because of predictions/program metadata or missing solvent/field. Six NIST JCAMP files saved before HTTP429 stopped downloads. Three recover neat-liquid transmission records already known; the ethanol/isopropanol optical constants and gas propylamine cannot validate liquid-film transmission depths. Confirmed g03 carbonyl difference: CDCl3 record10014252 gives211.4ppm versus212.6 in the design and213 on its card. Full records,source IDs,URLs,hashes and remaining gaps: assets/brief220-spectra/progress.md. SDBS automated collection was not used under its disclaimer. All seven named holds preserved. No narration or design text edited.


Brief220 source follow-up: additional primary measured CDCl3 NMR tables for eight compounds inspected in Gottlieb1997,DOI10.1021/jo971176v, including stated fields300.1/75.5MHz and temperature24+/-1C. The combined UCSB PDF also contains Fulmer2010, so its1997 tables are identified separately. Data and exact page/column references: assets/brief220-spectra/gottlieb1997-cdcl3-measurements.json. Drawn values for these compounds stay within the stated tolerances. Remaining compound and IR holds persist. No further paid requests.

## Codex brief 192: source reviews complete, plates in progress

6 November 2026. No design, narration or scene edits; no speech or commits.

phys-y12-m8-v01: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v01-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v01-science-check.md`. 0 blockers, 3 should fix, 0 optional. Joined narration count 6,434. Repair findings before recording; built visuals, exact voiced preview and listening pending.

phys-y12-m8-v02: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v02-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v02-science-check.md`. 0 blockers, 3 should fix, 1 optional. Joined narration count 6,462. Repair findings before recording; built visuals, exact voiced preview and listening pending.

phys-y12-m8-v03: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v03-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v03-science-check.md`. 0 blockers, 6 should fix, 0 optional. Joined narration count 6,276. Repair findings before recording; built visuals, exact voiced preview and listening pending.

phys-y12-m8-v04: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v04-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v04-science-check.md`. 0 blockers, 2 should fix, 1 optional. Joined narration count 6,083. Repair findings before recording; built visuals, exact voiced preview and listening pending.

phys-y12-m8-v05: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v05-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v05-science-check.md`. 0 blockers, 2 should fix, 0 optional. Joined narration count 6,280. Repair findings before recording; built visuals, exact voiced preview and listening pending.

phys-y12-m8-v06: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v06-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v06-science-check.md`. 0 blockers, 5 should fix, 1 optional. Joined narration count 6,305. Repair findings before recording; built visuals, exact voiced preview and listening pending.

phys-y12-m8-v07: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v07-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v07-science-check.md`. 0 blockers, 3 should fix, 0 optional. Joined narration count 6,019. Repair findings before recording; built visuals, exact voiced preview and listening pending.

phys-y12-m8-v08: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v08-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v08-science-check.md`. 0 blockers, 4 should fix, 1 optional. Joined narration count 5,695. Repair findings before recording; built visuals, exact voiced preview and listening pending.

phys-y12-m8-v09: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v09-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v09-science-check.md`. 0 blockers, 5 should fix, 0 optional. Joined narration count 6,037. Repair findings before recording; built visuals, exact voiced preview and listening pending.

phys-y12-m8-v10: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v10-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v10-science-check.md`. 0 blockers, 3 should fix, 1 optional. Joined narration count 6,037. Repair findings before recording; built visuals, exact voiced preview and listening pending.

phys-y12-m8-v11: independent learning and science reports at `docs/production/claude-pm/checks/p-y12-m8-v11-learning-review.md` and `docs/production/claude-pm/checks/p-y12-m8-v11-science-check.md`. 0 blockers, 2 should fix, 0 optional. Joined narration count 6,018. Repair findings before recording; built visuals, exact voiced preview and listening pending.

Module checks: `work/brief192/results.json`, `checks/brief192-pack-check.md`. Official 2017 quotations and written joins checked; practical conduct is not established. Twenty-eight current published-page notes appended to `site-corrections-phys-y12.md`; the local checkout is absent. Six of eighteen new plate files delivered in `assets/brief192-manifest.json`; apparatus and anchors remain in progress. This is a partial brief hand-in, not a finished artwork or release gate.

## Codex brief 221: twelve repair checks and gas-jar layers

6 November 2026. No design, narration or scene edits; no speech or commits.

chem-y11-m4-v03: `docs/production/claude-pm/checks/c-y11-m4-v03-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,998 scene-sum characters; source estimate 545 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v04: `docs/production/claude-pm/checks/c-y11-m4-v04-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 6,081 scene-sum characters; source estimate 551 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v05: `docs/production/claude-pm/checks/c-y11-m4-v05-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,613 scene-sum characters; source estimate 517 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v06: `docs/production/claude-pm/checks/c-y11-m4-v06-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 6,160 scene-sum characters; source estimate 556 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v07: `docs/production/claude-pm/checks/c-y11-m4-v07-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 6,213 scene-sum characters; source estimate 560 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v08: `docs/production/claude-pm/checks/c-y11-m4-v08-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 6,426 scene-sum characters; source estimate 567 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v09: `docs/production/claude-pm/checks/c-y11-m4-v09-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 6,364 scene-sum characters; source estimate 562 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v10: `docs/production/claude-pm/checks/c-y11-m4-v10-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,549 scene-sum characters; source estimate 510 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v11: `docs/production/claude-pm/checks/c-y11-m4-v11-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,923 scene-sum characters; source estimate 538 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v12: `docs/production/claude-pm/checks/c-y11-m4-v12-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,600 scene-sum characters; source estimate 514 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v13: `docs/production/claude-pm/checks/c-y11-m4-v13-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,746 scene-sum characters; source estimate 525 s. Previous findings resolved or follow the later root practical decision.

chem-y11-m4-v14: `docs/production/claude-pm/checks/c-y11-m4-v14-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,558 scene-sum characters; source estimate 513 s. Previous findings resolved or follow the later root practical decision.

Checks: 117 baseline calculations rerun plus 45 new readout calculations in `work/brief221/changed-readouts.json`; quoted triggers and twelve written joins checked. Exact voiced preview, human listening, actual fit and motion remain pending.

Plates: `public/assets/chemistry/y11c-gas-jar-open-v1.png` and `y11c-gas-jar-cover-slip-v1.png`, native935x1683 and1774x887. Three-background and rim-pair QA in `assets/brief221-qa/`; brief184 manifest updated. Body edges differ from the original by up to5 native pixels, so use two open copies and do not assume an old/new registered dissolve. The initial crop/mask candidate is held and preserved. Build playback must check the cover withdrawal.

## Codex brief 222: nine repair checks complete, artwork in progress

6 November 2026. No design, narration or scene edits; no speech or commits.

phys-y12-m5-v01: `docs/production/claude-pm/checks/p-y12-m5-v01-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 6,314 scene-sum characters; source estimate 561 s. Previous findings resolved.

phys-y12-m5-v02: `docs/production/claude-pm/checks/p-y12-m5-v02-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 6,132 scene-sum characters; source estimate 544 s. Previous findings resolved.

phys-y12-m5-v03: `docs/production/claude-pm/checks/p-y12-m5-v03-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,659 scene-sum characters; source estimate 510 s. Previous findings resolved.

phys-y12-m5-v05: `docs/production/claude-pm/checks/p-y12-m5-v05-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,695 scene-sum characters; source estimate 514 s. Previous findings resolved.

phys-y12-m5-v06: `docs/production/claude-pm/checks/p-y12-m5-v06-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 6,250 scene-sum characters; source estimate 550 s. Previous findings resolved.

phys-y12-m5-v07: `docs/production/claude-pm/checks/p-y12-m5-v07-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,705 scene-sum characters; source estimate 509 s. Previous findings resolved.

phys-y12-m5-v08: `docs/production/claude-pm/checks/p-y12-m5-v08-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 6,376 scene-sum characters; source estimate 558 s. Previous findings resolved.

phys-y12-m5-v09: `docs/production/claude-pm/checks/p-y12-m5-v09-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,706 scene-sum characters; source estimate 509 s. Previous findings resolved.

phys-y12-m5-v10: `docs/production/claude-pm/checks/p-y12-m5-v10-rev2-error-check.md`, 0 blockers, 0 should fix, 0 optional. 5,657 scene-sum characters; source estimate 505 s. Previous findings resolved.

Evidence: 46 baseline physics cases rerun and59 new readout cases, ten written joins including the pilot, quoted narration triggers and count checks under `work/brief222/`. Artwork repairs and new layers remain in progress. Existing 400px composites show no obvious coloured halo; native alpha analysis finds low-alpha fringe pixels, so no repair is claimed yet. Exact voiced preview, listening and playback remain pending.

## Codex brief 225: Maths owner pilot rendered, local master ready

6 November 2026. `out\explainer\Explainer-math-a12-d01\Explainer-math-a12-d01-v2.mp4`,9:00.57,16,217 frames,61,630,105 bytes,SHA256 `3e5128a9bc1952545cc0eb46ae56495f1cba9595e565e55badd76a4d32f77566`. Source/audio and guarded asset hashes unchanged.120 sampled defect frames plus endpoints and16-frame sheet:0 broken/blank flags,0 serif flags. All16 sheet frames match Claude's A sheet.226 caption cues from the playback timeline pass bounds/order checks. Full details and exact playback checkpoints: `work/brief225/math-a12-d01/build-report.md`.

Normal-speed playback, exact voiced student review and human listening remain pending, including a as ay. Two transient numeric reveal states at155.40s and204.93s are listed for playback inspection. Browser retry failed: `failed to write kernel assets: The system cannot find the path specified. (os error 3)`. No upload or unlisted URL; local master and unlisted/no-playlist intent recorded in `work/youtube-pending.json`. Drive mirror master SHA256 verified; remote cloud completion unqueried. V1 and v2 chunks retained. No speech or scene edits, no commits.

### Brief 222 artwork follow-up: seesaw delivered, demonstrator held

Two native2172x724 seesaw layers delivered at `public/assets/physics/y12p-seesaw-plank-v1.png` and `y12p-seesaw-stand-v1.png`; hinge(1086,319). Three-background -8,0,+8 degree static overlays show no gap or floating stand. Generated split is not pixel-identical to the original (alpha128 silhouette overlap0.9549); original preserved. Manifest and provenance updated.

The sliding-shaft base/slider pair is held: support heights and initial contact do not match, so simultaneous release is not proven. Concrete candidates and both-position overlay: `assets/brief222-candidates/`, `assets/brief222-qa/drop-launch-candidate-overlay.jpg`; findings `work/brief222/drop-launch-hold.json`. Required public paths remain absent. Initial image-output moderation rejection was resolved by a clearer school-apparatus request; it was not an approval rejection.

Fringe edits produced candidates, but no original was replaced. The image editor retains exterior fringe pixels; an asynchronous question asks the owner whether deterministic alpha cleanup may be used under the tool rule. Existing400px paper/dark/white composites and native alpha counts are in `assets/brief222-qa/existing-edge-check.jpg` and `work/brief222/edge-analysis.json`. Source reports are complete; artwork is partial.

Brief225 cloud follow-up: connected Google Drive confirms the v2 master exists remotely,61,630,105 bytes. https://drive.google.com/file/d/1LKWulmmvxhkhjmLJtyOC_U5Pfghi2F0B/view?usp=drivesdk. Local Drive-mirror SHA256 matches; connector did not expose the remote checksum. Evidence: `work/brief225/math-a12-d01/drive-cloud-check.json`. Playback and listening remain pending.

## Codex brief 224: thirteen repair checks and shared paper clip

7 November 2026, continuation of the6November night queue. No design,narration,scene or speech edits;no commits.

phys-y12-m5-v11: `docs/production/claude-pm/checks/p-y12-m5-v11-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 6,274 scene-sum characters;source estimate 554s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v12: `docs/production/claude-pm/checks/p-y12-m5-v12-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 5,878 scene-sum characters;source estimate 523s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v13: `docs/production/claude-pm/checks/p-y12-m5-v13-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 5,654 scene-sum characters;source estimate 506s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v14: `docs/production/claude-pm/checks/p-y12-m5-v14-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 5,609 scene-sum characters;source estimate 503s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v15: `docs/production/claude-pm/checks/p-y12-m5-v15-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 5,683 scene-sum characters;source estimate 510s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v16: `docs/production/claude-pm/checks/p-y12-m5-v16-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 6,422 scene-sum characters;source estimate 562s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v17: `docs/production/claude-pm/checks/p-y12-m5-v17-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 6,320 scene-sum characters;source estimate 554s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v18: `docs/production/claude-pm/checks/p-y12-m5-v18-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 5,727 scene-sum characters;source estimate 514s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v19: `docs/production/claude-pm/checks/p-y12-m5-v19-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 5,630 scene-sum characters;source estimate 508s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v20: `docs/production/claude-pm/checks/p-y12-m5-v20-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 5,664 scene-sum characters;source estimate 509s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v21: `docs/production/claude-pm/checks/p-y12-m5-v21-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 5,783 scene-sum characters;source estimate 518s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v22: `docs/production/claude-pm/checks/p-y12-m5-v22-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 5,554 scene-sum characters;source estimate 504s. Previous findings resolved or follow the later root colour decision.

phys-y12-m5-v23: `docs/production/claude-pm/checks/p-y12-m5-v23-rev2-error-check.md`,0 blockers,0 should fix,0 optional. 5,570 scene-sum characters;source estimate 503s. Previous findings resolved or follow the later root colour decision.

Checks:71 baseline cases rerun plus89 current readout cases,all narration deltas,quoted cues and14 written joins including the Module6 bridge. The old v16 proxy dataset is superseded,not reapproved. The corrected conical test gives slope0.0203459kg m and mass0.0254324kg;both plotted lines pass every timing error bar. Full precision must drive threshold stops before displayed rounding.

Plate: `public/assets/physics/y12p-paper-clip-v1.png`,native1254x1254,clear margins and sampled loop alpha0. Anchors top(626.5,178),bottom(626,1076). Three-background QA and sidecar delivered;shared v15/v16 provenance and brief188 manifest updated. The old clip remains. Space station kept after420px painted-width QA: no visible isolated truss flecks. Mass hanger also looks clean in actual400px composites. No motion,voiced-preview,caption-fit or human-listening pass is claimed.

## Codex brief 223: c04 v1 superseded by concurrent key-notes revision

7 November 2026. Master `out\explainer\Explainer-chem-m8-c04\Explainer-chem-m8-c04-v1.mp4` (8:43.50,15,705frames). Technical scan:0 broken/blank flags;120-sample font probe:0 flags. 174 captions pass. All15 public asset hashes match. Source freeze found `s3.tsx` changed during render in commit8c78bb3f. Actual sheet confirms the old six notes at33px, superseded by five at44px. Master is held from upload and needs a fresh render after227. Details: `work/brief223/chem-m8-c04/build-report.md`. Full playback/listening remain pending. Chunks retained, no deletion.

## Codex brief192: all twelve apparatus candidates saved, native resolution hold

7 November2026. All12 apparatus/layer native candidates preserved in `assets/brief192-candidates/`; dimensions, original paths, hashes and holds in `work/brief192/apparatus-candidates.json`. All fall below2400px native long side, so none was delivered at the requested public path. Crookes clear glass, wheel registration and source disc size also require repair; detector/needle pivot registration remains pending. No upscaling or padding. Six astronomy plates remain delivered. Please review `checks/brief192-apparatus-candidate-hold.md` for the method/native-size decision. Top-pan balance true alpha/display confirmed; approximate inset corners in `work/brief192/top-pan-balance-anchors.json`. All22 source reports and28 site entries complete.

## Codex brief193: v12 to v15 source reviews, partial

7 November2026. Eight reports written. Source findings remain open; no design edits or speech.

phys-y12-m8-v12:0 blockers,2 should fix,0 optional. Reports checks/p-y12-m8-v12-learning-review.md and -science-check.md.

phys-y12-m8-v13:0 blockers,1 should fix,0 optional. Reports checks/p-y12-m8-v13-learning-review.md and -science-check.md.

phys-y12-m8-v14:0 blockers,4 should fix,0 optional. Reports checks/p-y12-m8-v14-learning-review.md and -science-check.md.

phys-y12-m8-v15:0 blockers,4 should fix,0 optional. Reports checks/p-y12-m8-v15-learning-review.md and -science-check.md.

Independent numbers: work/brief193/calculations-v12-v13.json and calculations-v14-v15.json, with AME2020 mass hash. All11 design inventories and official2017 syllabus quotation checks prepared. Seven designs, whole-course coverage, current site checks and new art remain. Built motion, voiced review, listening and practical conduct remain pending.

## Codex brief227: Chemistry owner pilot local master

7 November2026. `out\explainer\Explainer-chem-y11-m2-v06\Explainer-chem-y11-m2-v06-v1.mp4`,7:57.93,14,338frames,48,994,629bytes,SHA256 `192c2ac361cb8def8579346bdc6bfdd2cb2691bd60f86fe882ea1fa3d7d52917`. All456 source/audio/tool hashes and11 public assets matched.120-sample defect/font scans:0 flags;all16 sheet frames match Claude A.175 captions from playback timeline pass. First mux omitted two frames; original preserved and same chunks remuxed without shortest, now exact. Report/checkpoints: `work/brief227/chem-y11-m2-v06/build-report.md`. Normal-speed scene10 slider/run-sheet,scene11 seven-point sweep,scene4 balance and full listening remain pending; no motion pass claimed. YouTube unavailable with kernel-assets path error. Local fallback recorded as unlisted owner pilot,no playlist in pending queue. Chunks retained.

Brief227 Chemistry backup follow-up: Drive mirror SHA256 matches the checked48994629-byte master; cloud folder readback confirms file presence and size. https://drive.google.com/file/d/1C_qX97FjgwhSwgF6k1qGygg_hCN_19Cn/view?usp=drivesdk . Remote checksum unavailable. Shared renderer mux now omits shortest after the exact two-frame recovery check; prior renderer preserved. Physics pre-render active.

## Codex brief193: all source reviews and whole-course map

7 November 2026. All 22 source reports complete: 1 blocker, 37 should fix, 0 optional. Findings remain open. No design edits or speech. Aggregate: `work/brief193/results.json`.

phys-y12-m8-v16: 0 blockers, 5 should fix, 0 optional. Reports `checks/p-y12-m8-v16-learning-review.md` and `checks/p-y12-m8-v16-science-check.md`. Independent numbers are in the corresponding `work/brief193/calculations-vNN-vNN.json` files.

phys-y12-m8-v17: 0 blockers, 2 should fix, 0 optional. Reports `checks/p-y12-m8-v17-learning-review.md` and `checks/p-y12-m8-v17-science-check.md`. Independent numbers are in the corresponding `work/brief193/calculations-vNN-vNN.json` files.

phys-y12-m8-v18: 0 blockers, 5 should fix, 0 optional. Reports `checks/p-y12-m8-v18-learning-review.md` and `checks/p-y12-m8-v18-science-check.md`. Independent numbers are in the corresponding `work/brief193/calculations-vNN-vNN.json` files.

phys-y12-m8-v19: 0 blockers, 3 should fix, 0 optional. Reports `checks/p-y12-m8-v19-learning-review.md` and `checks/p-y12-m8-v19-science-check.md`. Independent numbers are in the corresponding `work/brief193/calculations-vNN-vNN.json` files.

phys-y12-m8-v20: 1 blockers, 1 should fix, 0 optional. Reports `checks/p-y12-m8-v20-learning-review.md` and `checks/p-y12-m8-v20-science-check.md`. Independent numbers are in the corresponding `work/brief193/calculations-vNN-vNN.json` files.

phys-y12-m8-v21: 0 blockers, 4 should fix, 0 optional. Reports `checks/p-y12-m8-v21-learning-review.md` and `checks/p-y12-m8-v21-science-check.md`. Independent numbers are in the corresponding `work/brief193/calculations-vNN-vNN.json` files.

phys-y12-m8-v22: 0 blockers, 6 should fix, 0 optional. Reports `checks/p-y12-m8-v22-learning-review.md` and `checks/p-y12-m8-v22-science-check.md`. Independent numbers are in the corresponding `work/brief193/calculations-vNN-vNN.json` files.

Whole-course source map: `checks/phys-y12-whole-course-coverage.md`, covering 81 designs. All 88 parent/Working Scientifically point quotations and 107 child quotations match the official 2017 DOCX. No unallocated route points, but practical conduct and several learner Working Scientifically actions remain unproven. Named gaps include quantitative banked-road friction, DC motor investigation, Balmer practical, electron-diffraction practical and real radioactive counts. Supernova time dilation and metal-plate braking are present in source. This is not a whole-course completion pass. Current site checks and plates remain active. Built playback, exact voiced review and human listening remain pending.

## Codex brief193: current site verification complete

7 November 2026. Seven current Module8 HTML pages checked.22 corrections/clarifications appended to site-corrections-phys-y12.md; exact paragraphs,hashes and dispositions in work/brief193/site-log-193.json. Already-correct Ni62/Fe56 and uncertainty statements are not reopened. Primary history follow-up: checks/brief193-history-follow-up.md;muon1936 remains valid. No site or design edits. Plates active.

## Codex brief193: plates delivered with native-size holds

7 November 2026. Eight native plates delivered: red/yellow counters,OPAL pool,tokamak,linac tunnel,Wilson expansion chamber,LHC dipole and CMS cutaway. Actual cream/navy/white composites inspected;native dimensions,hashes,approximate anchors and primary references in `assets/brief193-manifest.json`. Counters share1254-square canvas,alpha128 silhouette IoU0.991912;not pixel-identical. Six apparatus candidates held below strict2400px native long side;diffraction-tube glass also needs repair. No upsampling,padding or deterministic cleanup. All14 originals preserved. Existing guitar anchors and reusable apparatus inspected;both smoking power-station plates omitted as allowed. Actual scene fit and playback remain pending. All22 source reports,22 site entries and81-design course map complete;1 blocker and37 should-fix source findings remain open.

## Codex brief227: Physics owner pilot local master

7 November 2026. `out\explainer\Explainer-phys-y12-m5-v04\Explainer-phys-y12-m5-v04-v1.mp4`,7:53.60,14,208frames,49,128,371bytes,SHA256 `187f5311dbeaa3a1d1787dd688307d77fd0b8b6926fb11262e9b2dee107032c8`. All45 frozen source/audio/tool files and6 public assets match.120-sample defect/font scans:0 flags;all16 rendered sheet frames match Claude A.174 captions from actual playback timeline pass. Local Drive mirror hash matches. Report and pending playback timestamps: `work/brief227/phys-y12-m5-v04/build-report.md`. Browser kernel-assets path error persists;normal-speed playback,listening,owner approval and unlisted upload pending. Local fallback added to pending queue,no playlist. Chunks retained.

Brief227 Physics cloud follow-up: folder readback confirms49,128,371bytes. https://drive.google.com/file/d/1rxW04wdf530prm-fnVE5z8QjGHpuRDU9/view?usp=drivesdk . Local Drive mirror SHA256 matches;remote checksum unavailable. Playback/listening and unlisted YouTube upload remain pending.

## Codex queued builds: light media and metadata inventory

7 November 2026. All16 new builds in223,226,228,229 and230 have their measured audio files and Claude sheets/notes. All16 titles fit100 characters. All33 quoted syllabus fragments match the retained official Chemistry/Biology2017 DOCX text after typography and whitespace normalisation,including DOCX nonbreaking hyphens. Evidence: work/new-build-queue-inventory.json and work/new-build-queue/metadata-check.json. This is a source inventory,not a fresh guard,contact-sheet,playback or release pass. Current c04v2 remains the only render.

Queued-build inventory follow-up: brief231 added after230. All18 builds now have audio and Claude sheets/notes;all39 quoted syllabus fragments match official2017 text and all18 titles fit100 characters. No extra render started.

Browser recovery recheck,7 November2026: both browser kernel-assets path error3 and native pipe missing error2 persist. TEMP/TMP exist. Chrome remains open;no helper launch or live UI action. Details: work/browser-control-nov07-recheck.json. Continue local checks and Drive backups.

## Codex brief223: chem-m8-c04 v2 current master

7 November2026. `out\explainer\Explainer-chem-m8-c04\Explainer-chem-m8-c04-v2.mp4`,8:43.50,15,705frames,56,417,562bytes,SHA256 `623f36c0fb5005ce64addac853c2d7eed1efa96797da7573fe3bb1c83967ac7a`. All435 frozen inputs and15 public assets match.120-sample defect/font scans:0 flags;rendered sheet and four boards inspected. Frames1-15 match Claude A. Frame16 matches the authorised five44px notes and current fresh pre-render sheet;stale Claude reference still has six smaller notes. No new below-A still finding. 174 captions from playback timeline pass;local Drive mirror hash matches. Playback timestamps and report: `work/brief223/chem-m8-c04/v2/build-report.md`. Normal-speed playback,listening and full release review pending. Added to pending upload queue,route order8;no live publication. Chunks and older master preserved.

Brief223 c04v2 cloud follow-up: https://drive.google.com/file/d/16lYDK_dhWPrKytP3Jd9dsFSC9s-w3Ifx/view?usp=drivesdk .56,417,562bytes read back;local mirror hash matches;remote checksum unavailable. Oldv1 remains preserved and superseded.

## Codex takeover: YouTube access restored, 7 November 2026

Located repository at C:\lesson-video-generator and read the night handoff and recent status. Browser and native inventory now initialise successfully. Chrome opened the signed-in HSCScience YouTube Studio dashboard and the live b06 details page at https://studio.youtube.com/video/iNiVBNVSRvs/edit. Live b06 remains Public; title, description, Module 7 playlist membership, thumbnail 2 and not-made-for-kids setting match the saved pending record. No visibility, upload, playlist or link changes made. Brief 196 replacements remain pending; next action is live settings/playlist reconciliation and the approved replacement workflow. Completed renders and speech were preserved. No commits.


## Codex brief 196: b06 v1 unlisted, upload interrupted, 8 November 2026

Live b06 title, description, playlist membership, thumbnail 2 and not-made-for-kids setting matched the pending record. Changed iNiVBNVSRvs from Public to Unlisted and verified Studio reported All changes saved with Save disabled. Original preserved. Opened replacement upload and Select files. Computer Use then stopped this turn because it could not determine the current browser URL on Windows with enough confidence to enforce policy; no master selected and no new upload or link created. b10 unchanged. Updated work/youtube-pending.json with completed b06 visibility action. Brief 196 remains partial. No renders, speech, source edits or commits. Remaining queue not started in this turn.

## Owner queue update, 8 November 2026

After finishing the current brief 196 replacement workflow, use this order, replacing the older queue order:

1. Render the unfinished Module 8 builds. Preserve completed masters and checks; do not render them again.
2. Brief 235: Maths d02 to d14 review, 22 pictures, and re-voice changed scenes only.
3. Brief 238: Maths d15 to d19 and i01 to i14 review, about 35 pictures, and voicing.
4. Brief 236: Year 11 Chemistry voicing in six waves (72 videos).
5. Interleave brief 237 (Chemistry Module 1 v18 to v27) in the middle of the Chemistry waves, following its brief's placement instructions.
6. C-grade re-renders, then Physics error checks 232 to 234.

Read each exact brief and its current hand-ins before starting. Keep existing gates, holds, voice limits and unchanged takes. Update status.md after each brief. No sub-agents or commits.

Browser recovery follow-up: owner confirmed Allow access to file URLs is already enabled. Browser retry timed out on Runtime.evaluate (3000 ms) and Emulation.setFocusEmulationEnabled (10000 ms), before upload. No further YouTube changes. Asked owner to fully close/reopen Chrome and open YouTube Studio before retrying.
## Codex brief 196: b06 v2 uploaded privately, 8 November 2026

Browser filechooser.setFiles succeeded, avoiding the Windows picker. Uploaded the checked b06 v2 master to https://youtu.be/DL3nipLf7TY (saved privately). Used Reuse details from iNiVBNVSRvs: title, description, Module 7 playlist membership, English (Australia), remix setting and Education category. Set not made for kids and Yes for AI use. Imported work/brief196/captions-v2/captions.srt with timing; Studio confirmed English (Australia) by you. Copyright check passed. Community Guidelines check remained running at last observation. Generated thumbnail options were not ready. No public publication or playlist ordering completed. b10 unchanged. Browser then timed out opening b10 and the refreshed inventory no longer listed Chrome, although the Chrome app remained running. Do not upload b06 again: resume DL3nipLf7TY. Pending queue contains its ID and private state.

## Codex brief 223: c05 recovery prepared, memory hold, 8 November 2026

All 456 files in chem-m8-c05/frozen-before-render.json still match. Existing pre-render sheet inspected; prior grade-A comparison preserved. Ten existing chunks preserved. Recovery script work/brief223/resume-c05.mjs checks all frozen hashes and decodes every existing chunk before allowing reuse, retaining chunks for checks. Render attempt is held by the existing 1536 MiB memory guard (548 to 580 MiB available), before rendering. About 30.7 GB disk free. No new master, source edits, speech or commits. Owner asked to close unused apps. Resume log: work/brief223/c05-resume-nov08.log. No later full render started.
## Codex brief 196: b06 public, b10 uploaded and playlist replaced, 8 November 2026

b06 replacement https://youtu.be/DL3nipLf7TY published; YouTube Copyright and Community Guidelines checks both reported no issues. Current wave5-uploads.json b06 record updated, original release preserved in supersededReleases. b10 original nwBfq4XGI0w unlisted and save verified. Replacement https://youtu.be/KX0HhqCsikY uploaded privately, original metadata/settings copied, AI use Yes, not made for kids, timed English (Australia) captions saved. SD and HD complete; final notices still Checking, so publication remains pending.

Live Manual Module 7 playlist readback: old b06 was position 8 and old b10 position 13. Removed both old entries, preserved all other relative positions, placed new b06 at 8 and new b10 at 13. All 18 live rows read back. Earlier historical position 7 for b06 was stale. b10 stays private until the final check finishes. Do not upload either replacement again.

## Codex brief 223: c05 resumed after memory recovery, 8 November 2026

Owner closed unused apps; memory rose to 6677 MiB. Corrected the recovery-only chunk decode command to specify rawvideo, because the bundled ffmpeg lacks the default null-output encoder. This was a checker invocation error, not evidence of corrupt chunks. All ten saved chunks decoded; frozen hashes and fresh asset guard passed. Reused them and continued rendering at concurrency 2, chunks retained. Log work/brief223/c05-resume-nov08.log. No original renderer or scene edits, no speech or commits.
## Codex hand-in: brief 196 completed replacements, 8 November 2026

b06 v2 public: https://youtu.be/DL3nipLf7TY, Module 7 Manual playlist position 8. b10 v2 public: https://youtu.be/KX0HhqCsikY, position 13. Both originals preserved Unlisted and removed from playlist. All 18 playlist rows read back, preserving every other video's relative order. Both replacements have original titles/descriptions, auto-generated thumbnail 2, Education, English (Australia), not made for kids, AI use Yes and checked timed captions. SD and HD processing complete. b06 YouTube checks passed; b10 Notices cleared before publication. Both public saves verified.

Updated current records in youtube/wave5-uploads.json, retaining originals in supersededReleases; updated work/youtube-pending.json to complete. Live readback: work/brief196/youtube-final-readback-nov08.json. Dated old reviews, briefs and readbacks retain historical IDs. Existing v2 render/check evidence reused; no re-render, narration changes or new speech for 196. No commits. Continuing Module 8 builds, starting the interrupted c05 render.
## Codex brief 223: c05 v1 master rendered and checked, 8 November 2026

out/explainer/Explainer-chem-m8-c05/Explainer-chem-m8-c05-v1.mp4, 8:09.90, 14,697 frames, 57,636,815 bytes, SHA256 1faaca0aa3abd9ba0476286334a0a998afbffb959fc709ae80849d6e24df36e7. All 456 frozen inputs and 18 asset/font paths match. Reused ten decoded saved chunks. 120-sample defect/font scans: zero flags. Actual 16-frame sheet and four boards inspected; scene 5 crash-lake present and sheet matches fresh pre-render. 166 playback-timeline captions pass. Drive mirror SHA256 matches; remote cloud readback pending.

Report and checks: work/brief223/chem-m8-c05/build-report.md. Expanded sampling finds an early title-only state at 251.07 seconds, table present by 255.13; inspect at playback. Normal-speed playback, voiced student review, human listening and full release review remain pending. Added current master to work/youtube-pending.json; no upload. Chunks retained until full checks pass. Completed c04 v2 preserved. No narration or scene edits, new speech or commits.
## Codex brief 235: d02 to d06 source reviews, partial, 8 November 2026

Prepared light source reviews while the single c06 render runs. No pictures, speech, source edits or commits. All calculations include source hashes and scene-string inventories under work/brief235/dNN-calculations.json. Reports: checks/m-a12-dNN-redesign-learning-review.md and -maths-check.md.

d02 Revision 4: 0 blockers, 0 should fix, 0 optional. Savings anchor, readouts and joins checked; 6678 characters, estimate 548s. Plates and changed-scene voicing pending.

d03 Revision 4: 0 blockers, 0 should fix, 0 optional. App/inverse-time anchor and readouts checked; 6770 characters. Rounded scene estimates total 557s against about 556, under the cap. Exact next-thousand time 0.223144 weeks is distinguished from the 0.25 tangent estimate. Plates and changed-scene voicing pending.

d04 Revision 3: 0 blockers, 0 should fix, 0 optional. Music/sound anchor checked against UNSW Acoustics and NIST definitions; 6587 characters. Rounded estimates total 534s against about 533. Existing guitar/meter reuse specified; changed-scene voicing pending.

d05 Revision 3: 0 blockers, 1 should fix, 0 optional. Ferris-wheel rates are in radii per radian as defined in Decisions; all numbers agree; 6060 characters, rounded estimate 510s against about 509. Shared 235-J05: d05 final sin 2x is navy while d06 says both carried curves are ink. Plates and changed-scene voicing pending.

d06 Revision 3: 0 blockers, 2 should fix, 0 optional (includes shared 235-J05; count once). 235-D06-1: scene 1 still names nonexistent ma12-bicycle and ma12-bicycle-crank paths, contrary to the current commissioned frame/wheels/crankset/pedal set. Numbers agree; 5905 characters, 517s. The ratio must be hidden at the zero/zero crossing between stops, as the source already requires. Plates and changed-scene voicing pending.

Unique findings so far: 0 blockers, 2 should fix, 0 optional. All five anchors are everyday and distinct. Source reviews d07 to d14 and the complete anchor comparison remain before any pictures or voicing. Built motion, exact voiced preview and listening are not passed by these source reports.

Brief223 c05 cloud follow-up: connected folder readback confirms the 57,636,815-byte master at https://drive.google.com/file/d/1yyIHxv-Z4TP79YKvnMQfM_4jwNcOel0A/view?usp=drivesdk . Local mirror SHA256 matches; remote checksum unavailable. Evidence: work/brief223/chem-m8-c05/drive-cloud-check.json. Playback and release reviews remain pending.


## Codex brief 235: all source reviews complete, partial hand-in, 8 November 2026

Reports for every d02 to d14 now exist at checks/m-a12-dNN-redesign-learning-review.md and -maths-check.md; calculation tables and source hashes are in work/brief235/dNN-calculations.json. Complete everyday-anchor comparison: checks/brief235-anchor-comparison.md. No pictures or speech started before all 13 source stages completed. No source edits or commits.

d07: 0 blockers, 0 should fix, 0 optional. 6460 characters; rounded scene estimate 548s, under 570. Everyday anchor, new narration, numbers, cues and joins reviewed. Pictures/reused-plate checks, changed takes, actual duration, alignment, cue timing, captions and listening pending.

d08: 0 blockers, 1 should fix: 235-D08-1, normalised speed chip needs its hundred-kilometre unit bridge. 6247 characters; rounded scene estimate 535s, under 570. Everyday anchor, new narration, numbers, cues and joins reviewed. Pictures/reused-plate checks, changed takes, actual duration, alignment, cue timing, captions and listening pending.

d09: 0 blockers, 0 should fix, 0 optional. 6354 characters; rounded scene estimate 520s, under 570. Everyday anchor, new narration, numbers, cues and joins reviewed. Pictures/reused-plate checks, changed takes, actual duration, alignment, cue timing, captions and listening pending.

d10: 0 blockers, 0 should fix, 0 optional. 5966 characters; rounded scene estimate 501s, under 570. Everyday anchor, new narration, numbers, cues and joins reviewed. Pictures/reused-plate checks, changed takes, actual duration, alignment, cue timing, captions and listening pending.

d11: 0 blockers, 1 should fix: 235-D11-1, sec squared 1.3 rounds to 13.98. 6331 characters; rounded scene estimate 529s, under 570. Everyday anchor, new narration, numbers, cues and joins reviewed. Pictures/reused-plate checks, changed takes, actual duration, alignment, cue timing, captions and listening pending.

d12: 0 blockers, 0 should fix, 0 optional. 6153 characters; rounded scene estimate 551s, under 570. Everyday anchor, new narration, numbers, cues and joins reviewed. Pictures/reused-plate checks, changed takes, actual duration, alignment, cue timing, captions and listening pending.

d13: 0 blockers, 0 should fix, 0 optional. 6031 characters; rounded scene estimate 497s, under 570. Everyday anchor, new narration, numbers, cues and joins reviewed. Pictures/reused-plate checks, changed takes, actual duration, alignment, cue timing, captions and listening pending.

d14: 0 blockers, 1 should fix: 235-D14-1, -60 mathematical heading corresponds to +60 SVG/CSS rotation with screen y down. 5898 characters; rounded scene estimate 504s, under 570. Everyday anchor, new narration, numbers, cues and joins reviewed. Pictures/reused-plate checks, changed takes, actual duration, alignment, cue timing, captions and listening pending.

Unique findings across all 13: 0 blockers, 5 should fix, 0 optional (shared colour handoff counted once). All findings are screen/specification issues, not narration changes. No trims applied. Proceeding with the 22 pictures while the single c06 render continues; voicing will wait for local rendering to stop.

Brief235 source audit follow-up: every bold cue in all 13 designs is quoted in order (work/brief235/cue-source-audit.json). Exact text comparison finds only the 25 requested changed/new scenes, with 171 unchanged takes to reuse and no additional narration differences (work/brief235/take-reuse-audit.json). No speech requested.

Brief235 picture progress: generated three d02 candidates and the d03 phone at native size with built-in image_gen. Current manifest assets/brief235-manifest.json, d02 provenance assets/ma12-d02-provenance.json; cream/white/black and size boards in work/brief235. Coin visually reads at 40px. Jar pair is NOT cross-fade approved: visible bounds differ by 1 to 2px and lid/glass pixels change. Low alpha noise outside core also remains. Phone screen rectangle measured, visible bottom padding about 7 percent versus specified 8, so its final pass is pending cleanup. No plate-size inflation or stretching, no narration changes or speech. Stopwatch geometry is being corrected.

Brief235 d03 picture follow-up: five total native candidates now saved (d02 three, d03 two). Stopwatch second pass improves padding but fitted dial axes remain 656.17 by 669.95px, about 2.1 percent unequal, so true-circle gate remains pending. Exact sixty ticks still to verify. Provenance assets/ma12-d03-provenance.json. No final geometry approval claimed.

Brief235 d05 artwork in progress: rim, stand and grey-blue gondola candidates saved natively; marked gondola generating. Root question: asset brief asks gondola pivot at exact top centre of canvas and at least 8 percent clear margin. A painted pivot at y=0 cannot also leave a clear top margin. Current candidate keeps padding; actual pivot will be reported. No design edit. Stand also needs margin/composite check before pass.

Brief235 d05 picture follow-up: all four native candidates saved, total nine of22 candidates. Actual cream composite at300/600px inspected, with eight upright cabins at45degree steps; wheel reads clearly, marked seat distinct and lowest cabin clears base. Uniform QA scales/pivots are in assets/ma12-d05-provenance.json. Final pass pending exact paired-edge check, stand side margin, low-alpha cleanup and root pivot/margin conflict. No scene/source edits.

## Codex brief 226: c06 v1 rendered and technically checked, partial, 8 November 2026

out/explainer/Explainer-chem-m8-c06/Explainer-chem-m8-c06-v1.mp4, 9:05.90, 16,377 frames, 59,246,590 bytes, SHA256 2db7f3bb989dbf99c3d4d714d0f3717ce6248f687c730a7b631222b773a5bf0d. All721 frozen inputs unchanged; all17 image/font paths match. 120 defect samples and120 font samples: zero flags. Actual16-frame sheet and four expanded boards inspected; teaching frames match Claude A sheet, latest five short44px notes match fresh pre-render. 184 playback captions pass. Mirror hash matches; cloud confirms name and59,246,590 bytes at https://drive.google.com/file/d/1cI9Rt7k6KqFSbvnuzxcTXtJzHCAnx99R/view?usp=drivesdk.

Report work/brief226/chem-m8-c06/build-report.md; current master added to work/youtube-pending.json. User resumed Computer Use after Escape. Checked master opens and plays in existing offline VLC. Playback spot checks in progress; complete motion record, exact voiced student review, human listening and full release review remain pending. No public upload, speech, source edits or commits. Chunks retained. c08 still to render; brief226 not complete.

Brief226 c06 playback follow-up: Computer Use works with the pre-existing offline VLC. Targeted normal-speed replays show sampling/fixing states, iodine electron-transfer visuals, yellow/pale-straw/blue/clear titration, five-day bottle/incubator progression, microbe/O2 changes and the8.4to4.9 readout with3.5mg/L result. No new visual defect in observed states. Evidence work/brief226/chem-m8-c06/playback-ui-check.json. Screenshot sampling does not establish every frame or exact spoken-cue timing; human listening and full release review remain pending. Player paused. Continuing c08 local render preparation.

Brief226 c08 pre-render:696 frozen source/audio inputs,14 asset/font paths; source hashes unchanged. Fresh16-frame sheet inspected against Claude A sheet; teaching content/layout match and final five short44px notes apply the explicit hold release. No below-A frame found. Planned15,161 frames,8:25.37. Playback captions exported. More than26GiB free. Export check still declares exact voiced preview/student review and listening pending, preserved for release review; local render preparation explicitly requested by226. Starting v1 at concurrency2, chunks retained for checks.

Brief235 d06 artwork follow-up: native crankset and pedal candidates saved. Cream composites inspected at400/900px and0/45/90degrees on the actual frame; ring175px versus50px shell, ratio3.5. Level pedals follow the two bosses. Provenance assets/ma12-d06-provenance.json records actual pivots and uniform QA scales. Exact canvas centres and crank side margin still differ from the asset brief, so final geometry pass remains pending. No source or speech changes. Perspective timber deck also saved; top view is being corrected to the exact2:1 area ratio.

Brief235 inventory correction for root: the brief says22 plates, but its full enumerated filenames sum to21 (3+2+4+2+2+1+1+2+3+1). Manifest now records both stated22 and enumerated21, with all21 expected names. Currently12 named candidates saved,9 named candidates remain. No unnamed22nd asset invented; root to name it if another plate is intended. User asked about optional local pixel finishing to enforce exact matching, dimensions and seams; image generation continues while that choice is pending.

Brief235 d07 artwork progress: both native candidates saved. First top-view drafts failed ratio. A fresh exact2:1 geometry guide followed by built-in painting gives outer alpha128 box1420x708px, ratio2.00565, relative error0.2825percent, within0.5percent. Final plate was not stretched or resampled. Size/alpha boards and provenance assets/ma12-d07-provenance.json prepared; perspective margin and final visual checks pending. Thirteen of21 named candidates now saved (brief labels the21-name list as22).

Brief235 d07 size/alpha boards inspected, no new visible defect; ratio passes, perspective margin finish pending. D08 native road saved2172x724 and two-copy cream seam inspected at1200/2400px per strip. Road, shoulder and verge align visually and dash rhythm continues; common solid road row384. Provenance assets/ma12-d08-provenance.json and detail work/brief235/road-seam-detail.jpg. Endpoints not claimed byte-identical. Fourteen of21 named candidates saved; original brief count22 is inconsistent. No new speech.

Brief235 d09 valley candidate saved with ledge/creek anchors and15-point approximate trail. Cream1500/750px and trail overlay inspected; flat ledge and low creek read clearly. Provenance assets/ma12-d09-provenance.json, outer margin finish pending. Fifteen of21 named candidates saved. D10 first painted track follows the broad guide but initial outline probe misses the6px rail tolerance, up to53design-pixels at endpoint. Saved only under work/brief235/candidates, not canonical public asset. Overlay/check work/brief235/coaster-rail-guide-overlay-qa.jpg and coaster-rail-check.json. Car generation continues; track needs correction/manual exact rail check before pass.

Brief235 d10 artwork partial hand-in: source review0 blockers/0 should fix/0 optional, everyday coaster anchor retained. Native right-facing two-row empty car public/assets/maths/ma12-coaster-car-v1.png saved1536x1024. Wheel contacts(541.5,705)/(1001.5,705), midpoint(771.5,705), level with no brake fin. Cream composites at1354/700px and black/white alpha boards inspected. Second track work/brief235/candidates/coaster-track-second.png improves fit but outline probe still misses6design-pixel tolerance, maximum27.19 at right endpoint; no canonical track published. Measurements work/brief235/latest-candidate-checks.json and assets/ma12-d10-provenance.json. Alpha finishing and exact rail fit pending. No speech, measured rewrite or source edit.

Brief235 d11 artwork partial hand-in: source review0 blockers/1 should fix/0 optional, lighthouse everyday anchor retained. Three native candidates saved under public/assets/maths/: ma12-lighthouse-v1(1122x1402), ma12-lighthouse-islet-top-v1(1254square), ma12-beach-strip-top-v1(2172x724). Side400/800px, map400/800px and all black/white boards inspected. At800px map, lantern(260,500) is240px from waterlineX500. Plan cap fitted centre(624.63,629.73), diameters202.76/207.43, differs from exact centre/circle; final correction pending. Beach central foam row369. Side margin, low-alpha fringe and exact foam-row finish pending. Provenance assets/ma12-d11-provenance.json. No speech or measured rewrite.

Brief235 d12 artwork partial hand-in: source review0 blockers/0 should fix/0 optional, everyday tower/shadow anchor retained. Native public/assets/maths/ma12-tower-block-v1.png809x1942 saved. Tower/sun pair inspected at240/480px painted tower heights with120px sun, and black/white alpha boards inspected. Flat roof, square corners and straight footing read clearly. Approximate roof-right(604,364), footing endpoints(188,1639)/(620,1639). Exterior low-alpha cleanup remains. Provenance assets/ma12-d12-provenance.json. No speech or measured rewrite.

Brief235 inventory now20 canonical native candidates plus one rejected track candidate under work, covering all21 enumerated names; original brief count22 still needs root clarification. Assets/brief235-manifest.json records candidates and open checks, not final approvals. Source reviews remain0 blockers/5 unique should fix. Picture stage remains open, so changed-scene voicing has not begun. User choice about local pixel finishing remains pending; no alternate image-editing method used.

Brief235 d04 reused-plate partial hand-in: source review0 blockers/0 should fix/0 optional, music/sound anchor retained. Existing physics/phys-y11-guitar-v1.png and phys-y11-sound-level-meter-v1.png inspected; guitar and blank meter fit current revision, no new plate commissioned. Native sizes, hashes and alpha bounds in assets/ma12-d04-provenance.json, originals unchanged. Changed-scene voice and measured rewrite pending.

Brief235 d13 reused-plate partial hand-in: source review0 blockers/0 should fix/0 optional, everyday drone-camera anchor retained. Existing physics/phys-y11-drone-side-v1.png and phys-y11-ground-strip-v1.png inspected; empty drone has front underside camera, level foreground usable. Builder still measures exact camera anchor. Hashes and native geometry in assets/ma12-d13-provenance.json, originals unchanged. Changed-scene voice and measured rewrite pending.

Brief235 d14 reused-plate partial hand-in: source review0 blockers/1 should fix/0 optional, everyday headlight/tangent anchor retained. Existing physics/phys-y11-car-top-v1.png inspected, true overhead, right-facing front lamps, no visible driver. Hash and native geometry in assets/ma12-d14-provenance.json, original unchanged. Screen-heading finding remains as reported; no source edit. Changed-scene voice and measured rewrite pending.

Brief235 rail follow-up: a third built-in painting from a native1745x901 exact code-only guide was measured. It drifts farther on the steep climb, so rejected; second candidate remains the closest. New checks work/brief235/latest-candidate-checks.json, guide coaster-native-rail-guide.png, third candidate candidates/coaster-track-native-guide.png. No final rail published, no geometry pass claimed. Exact finishing method choice remains pending.

Brief226 player housekeeping: C06 offline VLC and completed upload tabs were closed after the documented replay to free memory for C08. Playback evidence remains work/brief226/chem-m8-c06/playback-ui-check.json; its old paused end-state is superseded by this note. No master changes.

## Codex brief226: local renders handed in, release open, 8November2026

C06: out/explainer/Explainer-chem-m8-c06/Explainer-chem-m8-c06-v1.mp4,9:05.90,16,377frames. 120defect/120font samples with0flags. Targeted offline visual replays recorded; fine spoken-cue timing, exact voiced student review and listening pending. Drive verified, no upload; report work/brief226/chem-m8-c06/build-report.md, pending ledger retained.

C08: out/explainer/Explainer-chem-m8-c08/Explainer-chem-m8-c08-v1.mp4,8:25.37,15,161frames,51,523,188bytes,SHA256607c7a45157720da3da4c1f7c439ccf4769bf47c8d0862d9c7824148f66e9f6d. All696 frozen inputs and14assets unchanged. 179playback captions valid. 120defect/120font samples0flags. Actual16sheet and all4expanded boards inspected. Targeted normal-speed VLC replays show bromine fade, milky limewater, orange-to-green, candidate thumbnails and exclusion strikes/no-no-yes sequence. NEW226-C08-OPENING: scene8 at212.67s has only heading and short note, also seen around212/214s in playback. Main molecule appears by215s. This misses scene-opening visual rule despite the16sheet passing later samples. Root/builder repair needed; no scene-code edits authorised here. Details checks/brief226-c08-opening.md. Master/Drive mirror hashes match; cloud name and51,523,188bytes verified at https://drive.google.com/file/d/1II5oK-VQrhdTXCnuVPALj1kTGnGlqcXa/view?usp=drivesdk . Report work/brief226/chem-m8-c08/build-report.md. Added once to work/youtube-pending.json with actual blockers. No upload, no release approval; chunks retained while opening/master review remains open. No new speech, source edit or commit. Local hand-in complete; remaining Module8 render queue continues with228.

Brief235 finishing authorisation: user explicitly chose local pixel edits. Native generated originals preserved under work/brief235/native-before-finishing and in generated_images. Local edits now enforce matching pair geometry, true circular dials/caps, exact deck ratio, transparent padding and periodic road edges. Final QA remains before picture hand-in or any speech.

Brief228 p03 pre-render:471 frozen source/audio inputs and22image/font paths, unchanged. Fresh16frame sheet inspected against Claude A sheet; teaching content/layout and short44px notes match, no below-A sample found. Playback snapshot15,885frames,8:49.50; captions exported from it. C:25.64GiB free. Export-stage exact voiced preview/student review and listening pending preserved; local render preparation explicitly authorised by228. Starting v1 at concurrency2, chunks retained until checks. No speech/source edits.

## Codex brief235: source and picture stages handed in, voicing pending,8November2026

All21 enumerated plates are in public/assets/maths, with native generation sources preserved and user-authorised local finishing. The brief says22 but lists21 names; no extra plate invented. Final21plate manifest assets/brief235-manifest.json; measurements work/brief235/finished-plate-checks.json, circle fits final-circle-fits.json, all requested size/cream/white/black boards under work/brief235/final-qa. Every board was inspected. Source edits0, speech requests0, new voiced characters0, cost0. The25 changed takes and171 unchanged takes remain as previously audited. Heavy Module8 rendering has priority; step4 has not started. No full-video approval.

Brief235 d02: source0blockers/0should fix/0optional (shared d05/d06 colour finding counted once globally); everyday savings jar anchor retained. Plates: ma12-coin-jar-v1.png, ma12-coin-jar-full-v1.png, ma12-coin-v1.png. Jar/lid/glass pixels outside coin-interior mask are exactly identical; coin inspected at40px. Native coin requires uniform0.25 relative scale to match jar coins. Provenance assets/ma12-d02-provenance.json. Voicing0characters/cost0; 14unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d02/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d03: source0blockers/0should fix/0optional (shared d05/d06 colour finding counted once globally); everyday app users and elapsed time anchor retained. Plates: ma12-phone-v1.png, ma12-stopwatch-v1.png. Dial construction centre(543,848),radius328.084px;60ticks. Fit axes differ0.063percent. Provenance assets/ma12-d03-provenance.json. Voicing0characters/cost0; 15unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d03/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d04: source0blockers/0should fix/0optional (shared d05/d06 colour finding counted once globally); everyday music and sound anchor retained. Plates: phys-y11-guitar-v1.png, phys-y11-sound-level-meter-v1.png. Provenance assets/ma12-d04-provenance.json. Voicing0characters/cost0; 14unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d04/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d05: source0blockers/1should fix/0optional (shared d05/d06 colour finding counted once globally); everyday Ferris wheel anchor retained. Plates: ma12-ferris-wheel-rim-v1.png, ma12-ferris-wheel-stand-v1.png, ma12-ferris-gondola-v1.png, ma12-ferris-gondola-marked-v1.png. Original grey-blue cabin recoloured; alpha/geometry exactly match. Root question remains: painted pivot at y=0 contradicts8percent top margin; padded pivot(543,302) retained. Provenance assets/ma12-d05-provenance.json. Voicing0characters/cost0; 14unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d05/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d06: source0blockers/2should fix/0optional (shared d05/d06 colour finding counted once globally); everyday bike crank anchor retained. Plates: ma12-bike-crankset-v1.png, ma12-bike-pedal-v1.png. Centred crank/pedal, frame composites0/45/90degrees inspected;175px ring on50px shell. Existing frame/wheel inspected read-only. Provenance assets/ma12-d06-provenance.json. Voicing0characters/cost0; 13unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d06/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d07: source0blockers/0should fix/0optional (shared d05/d06 colour finding counted once globally); everyday growing timber deck anchor retained. Plates: ma12-timber-deck-v1.png, ma12-timber-deck-top-v1.png. Top deck outer1416x708px, exactly2:1. Provenance assets/ma12-d07-provenance.json. Voicing0characters/cost0; 14unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d07/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d08: source0blockers/1should fix/0optional (shared d05/d06 colour finding counted once globally); everyday trip average anchor retained. Plates: ma12-country-road-v1.png. Road endpoints RGBA-identical,20periodic dashes, two-copy seam inspected. Continuous full-width road cannot also have clear side margins; vertical margins pass. Provenance assets/ma12-d08-provenance.json. Voicing0characters/cost0; 13unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d08/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d09: source0blockers/0should fix/0optional (shared d05/d06 colour finding counted once globally); everyday hiking ledge and creek anchor retained. Plates: ma12-hiking-valley-v1.png. Ledge/creek and15translated trail points retained; six-percent padding passes. Provenance assets/ma12-d09-provenance.json. Voicing0characters/cost0; 15unchanged takes retained, 1changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d09/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d10: source0blockers/0should fix/0optional (shared d05/d06 colour finding counted once globally); everyday roller coaster anchor retained. Plates: ma12-coaster-track-v1.png, ma12-coaster-car-v1.png. All11 rail points now pass6px tolerance, worst3.108design-pixels; car contacts both y705, pivot(771.5,705), final hump/climb composites inspected. Provenance assets/ma12-d10-provenance.json. Voicing0characters/cost0; 12unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d10/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d11: source0blockers/1should fix/0optional (shared d05/d06 colour finding counted once globally); everyday lighthouse spot anchor retained. Plates: ma12-lighthouse-v1.png, ma12-lighthouse-islet-top-v1.png, ma12-beach-strip-top-v1.png. Cap construction centre(750,750),radius101.381px; fit axes differ0.241percent. Straight foam band and800px map with240px lantern-to-waterline spacing inspected. Provenance assets/ma12-d11-provenance.json. Voicing0characters/cost0; 12unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d11/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d12: source0blockers/0should fix/0optional (shared d05/d06 colour finding counted once globally); everyday tower and shadow anchor retained. Plates: ma12-tower-block-v1.png. Tower/sun inspected at240/480px tower heights; flat square roof and level footing. Provenance assets/ma12-d12-provenance.json. Voicing0characters/cost0; 12unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d12/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d13: source0blockers/0should fix/0optional (shared d05/d06 colour finding counted once globally); everyday drone camera tilt anchor retained. Plates: phys-y11-drone-side-v1.png, phys-y11-ground-strip-v1.png. Provenance assets/ma12-d13-provenance.json. Voicing0characters/cost0; 11unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d13/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.

Brief235 d14: source0blockers/1should fix/0optional (shared d05/d06 colour finding counted once globally); everyday headlight tangent anchor retained. Plates: phys-y11-car-top-v1.png. Provenance assets/ma12-d14-provenance.json. Voicing0characters/cost0; 12unchanged takes retained, 2changed/new takes pending. Existing measured path docs/production/claude-pm/lessons/math-a12-d14/measured/lesson.json unchanged; new duration, alignment, cue timings and captions pending.


## Brief223 targeted playback follow-up,8 November2026

C04v2: normal-speed VLC replays record spectrum, concentration/absorbance colour steps, AAS droplets/atoms/beam, A0.045 to0.113, element specificity, dilution into range and feedback2 transition. No new visual defect observed in those states. C05v1: nutrient/source streams, day/night oxygen trace, crash lake, red gauge, table highlights and three lake thumbnails observed. Finding223-C05-OPENING: worked-read opens title-only before table row A appears by252s; builder/root review required under the scene-opening gate. Detailed JSON and build-report follow-ups in work/brief223/<lesson>,C04 under v2. Controls restored; player closed. Both master hashes unchanged; Drive cloud name/size and local mirror hashes already verified. Fine cues/full motion, exact voiced student review, human listening and release gates remain pending; no upload or scene-code edit. Pending ledger updated.

Brief223 close replay follow-up: C05 brake upright at47/48s, rotates off49s, extra algae circles50/51s. C04 notes show all five short bullets and framed memory card unchanged at487/490/494/498s. Playback JSON updated. These observations do not certify human listening or all fine cues. VLC closed.

Brief228 publication preparation: all four design descriptions copied into work/brief228/<lesson>/publication-metadata.json. Official NESA Chemistry and Biology DOCX downloads verify each quoted dotpoint wording. Source URLs and file hashes in official-chemistry-dotpoint-check.json and official-biology-dotpoint-check.json. No upload; pending exact voiced/release reviews retained. p03 caption-based seek guide has35 targets for its playback check.

Brief235 voice-file preparation,8November2026: all13 measured folders and13 audio folders copied to work/brief235/backup and every file hash verified. Prepared work/brief235/voice-inputs/d02 through d14, with exactly25 changed/new scenes;171 unchanged takes retain their existing paths, captions and timing. Key-notes inputs are45s. No speech/alignment run, no canonical measured file rewritten. Source hashes still match the completed reviews. Revoice preparation manifest and later validation helper are under work/brief235. Local renderer remains the sole heavy job.

## Brief228 p03 hand-in,8 November2026

chem-m8-p03 v1: out\explainer\Explainer-chem-m8-p03\Explainer-chem-m8-p03-v1.mp4,8:49.50,15,885frames,SHA256 34dbc3655d442c0d5dc91aa3d81c4d8da15ee3daaa049baf55de8a8484228f3c.471 frozen inputs and22 asset/font paths unchanged.120 defect samples0flags;120 font samples1false positive reviewed,0unresolved.16sheet matches approved A and fresh sheet; all4boards/endpoint inspected.184 captions from actual playback timeline. Normal-speed replays record both cloudy wells, loop/flame path, observation/inference unlocks, risk-row glow/reading hold, feedback rail and notes. Root question228-P03-REFERENCE-TYPE:40px question scaled0.58 gives23.2px reference text; confirm its reading role under26px gate. Renderer browser-close warning recovered; exact master frame count passes. Drive cloud name/size confirmed and local mirror hash matches: https://drive.google.com/file/d/1VC4MH2ThFcc-sV6x5g44wzOPdt8vhv5Y/view?usp=drivesdk. Build report/playback/font/backup records in work/brief228/chem-m8-p03. No upload; fine cues, exact voiced student review, human listening and release review pending. Chunks retained; pending ledger updated. No speech or scene-code changes.

Brief228 p04 pre-render:513 frozen source/audio inputs and22 image/font paths unchanged. Fresh16-frame sheet inspected against Claude A sheet: all16 teaching layouts match, including short44px notes; no below-A sample identified. Actual playback14,294frames,7:56.47. Captions exported from that snapshot. Disk passes3GB minimum. Exact voiced/student review and human listening pending preserved. Starting v1 at concurrency2, chunks retained until full checks. No speech/source edits. Raw Node warning preserved separately from export-stage JSON.

Caption timeline follow-up,8November2026: the exact render playback snapshots for c05,c06,c08,p03 andp04 are now also saved as measured/lesson.playback.json in each lesson folder, as the standing rule requires. Each is byte-identical to the work snapshot used for its existing caption export. C04's existing canonical snapshot already matched. Captions and narration were not regenerated. Hashes and paths: work/brief228/canonical-playback-snapshots.json.

Brief235 backup follow-up: all21 final plate SHA256 hashes match the local Drive mirror after the standard backup. work/brief235/drive-art-backup-check.json. Individual cloud metadata for those plates was not checked.

## Brief228 p04 hand-in,8 November2026

chem-m8-p04 v1: out\explainer\Explainer-chem-m8-p04\Explainer-chem-m8-p04-v1.mp4,7:56.47,14,294frames,SHA256 d153062693349e8b7f8ffa8c858a512c0b37dfc53ceb9ed2d59a8a708d0c8036.513 frozen inputs/22 asset-font paths unchanged.120 defect samples0flags;120 font samples1 false positive reviewed,0 unresolved.16-frame master matches approved A/fresh sheet; all4 scan boards/endpoints inspected.167 captions from actual playback snapshot. Normal1x replays record pours/mixing, wipe/rinse,1.52 to0.845 with solution lightening, fingerprint beam/0.845 to0.910 and final notes. Finding228-P04-DILUTION-OVERLAP: stand bases cover part of the5.00mL+5.00mL quantities; playback and scan5419/5538 evidence saved. Builder/root review required; no scene-code edit. Drive cloud name/size and local mirror hash confirmed: https://drive.google.com/file/d/1uNp9k_Pwp5JSOU5iPygfTytSJjZz-BIc/view?usp=drivesdk. Build report/evidence in work/brief228/chem-m8-p04. No upload; fine cues, exact voiced student review, human listening and release approval pending. Chunks retained; pending ledger updated. Next bio-m8-g01 pre-render running.

Brief228 g01 pre-render:562 frozen inputs and8 image/font paths unchanged. All16 fresh frames match Claude A sheet; compared with Module5 reference, no below-A sampled frame identified. Actual snapshot14,997frames,8:19.90;161 captions exported and canonical playback snapshot saved. Notes have five46px bullets (first on two lines) plus memory card, matching approved sheet; hold40s. Exact voiced/student review and human listening remain pending. Disk passes3GB. Starting v1 at concurrency2 with chunks retained; no speech/source changes.

Brief235 recording preparation follow-up: work/brief235/voice-inputs/d02 through d14 now contain operational changed-scene recording scope copies and recording-stage checks. All13 recording source gates pass for exactly25 changed/new scenes using the completed source review evidence; existing should-fix findings remain open in those reports. No design, canonical lesson or narration edits, speech or alignment. work/brief235/recording-gates.json records the scope. The immediate pre-voice check now also verifies exact reviewed narration and reruns that recording gate; quota still must be checked before paid speech. Built motion, exact voiced review and human listening remain pending.

Brief235 file-check follow-up: all13 strengthened pre-voice file gates executed successfully, verifying647 original/backup file pairs, exact changed narration against the reviewed design and recording scope, and all13 recording-stage checks. No speech or alignment requested. work/brief235/prevoice-file-gates.json. Rerun freshness and quota checks immediately before later paid speech.

Brief228 continuation checkpoint,8November2026: bio-m8-g01 v1 is rendering from its unchanged562-input freeze, log work/brief228/g01-render.log. Its package/120-defect/font checks are queued serially after the renderer exits; visual boards, normal playback, backup and hand-in still pending. bio-m8-g03 remains next:562-input pre-render freeze already exists, so do not recreate it. Its148 captions and87-target seek guide are prepared in work/brief228/bio-m8-g03 from the existing config final-notes hold. caption-preparation.json records the snapshot hash; finish-pre-render.py now asserts the later actual snapshot is byte-identical before allowing these captions. G03 asset guard/fresh stills/full render have not run. Both exact voiced/student reviews and human listening remain pending. No new speech or source edits.

## Brief228 g01 hand-in,8 November2026

bio-m8-g01 v1: out\explainer\Explainer-bio-m8-g01\Explainer-bio-m8-g01-v1.mp4,8:19.90,14,997frames,SHA256 cdc8093b093994c31ed0a6c926e7ff3aa71cf7d24867ceb161b8763551481515.562 frozen inputs/8 asset-font paths unchanged.120 defect and120 font samples both0flags;16-frame master matches A/fresh sheet; all4boards/endpoints inspected.161 captions from actual playback snapshot. Normal1x replays record rate rows/bars, population blocks/age pyramids, graph/TAILS, lesion callout, amber dots, diet-weight-sleep-age cycle, limitation/cohort arrow and notes. Five46px notes bullets (first on two lines), matching A sheet; earlier line-count wording corrected. Finding228-G01-NOTES-OPENING: frame13809 at460.30s (local0.40s) shows only a partial heading; builder/root review required. Browser-close warning recovered; exact frame count passes. Drive cloud name/size and local mirror hash confirmed: https://drive.google.com/file/d/18Rt5LXbAgkKPS8ynJD_CtEQ1nJbxzP17/view?usp=drivesdk. Build report/playback/backup records in work/brief228/bio-m8-g01. No upload; fine cues, exact voiced student review, human listening and release pending. Chunks retained; pending ledger updated. G03 pre-render guard now running. No speech or scene-code edits.

Brief228 g03 pre-render:562 frozen inputs and13 asset/font paths unchanged. All16 fresh frames inspected and match Claude A sheet; no below-A sample identified against Module5 standard. Actual playback14,188frames,7:52.93. Prepared148-cue caption snapshot is byte-identical to actual pre-render snapshot; canonical m8g03/measured/lesson.playback.json saved. Five short48px notes bullets and memory card match A; final scene40s. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2 with chunks retained. No speech or source edits.

Module8 later-batch publication preparation,8November2026: prepared publication-metadata.json for all10 videos in briefs229,230 and231 under work/briefNNN/<lesson>. Every title length matches the design count and fits100 characters; every quoted syllabus line matches the official NESA DOCX already downloaded for228. Verification in each work/briefNNN/official-dotpoint-check.json. Design descriptions and route instructions retained, including a warning that route order is not a current numeric playlist position. No new render, speech or upload from this preparation; g03 remains the current sole render. All10 still require pre-render checks, master, playback, backup and release review in queue order.

Module8 helper preparation: work/brief229,230,231 now each have pre-render.mjs and finish-pre-render.py, plus per-video v1 package/scan/font helpers. Expected frame counts come from each builder's notes and are listed in work/remaining-m8-helper-preparation.json. These helpers have not run; no later source freeze or render was created. Freeze current inputs before each next pre-render, inspect the fresh16-frame sheet against Claude A, preserve exact voiced/human review gates, then continue one heavy job at a time. Current g03 render remains first.

Module8 later-batch caption preparation: all10 videos in229-231 now have work playback snapshots, captions-v1, caption-preparation.json and export-stage checks. Source transforms are copied exactly from current configs without bundling (including p05 risk+120frames); no canonical playback snapshot changed. All export checks retain exact voiced/student reviews as pending, with human listening pending. finish-pre-render.py will require byte-identical actual snapshots before these captions are used. Cue counts and source/config hashes: work/remaining-m8-caption-preparation.json. No later render or speech started; g03 continues alone.

Module8 playback guide preparation: all10 remaining videos in229-231 now have playback-check-plan.json, with scene boundaries and caption-token seek targets from the existing written scene cue objects. work/remaining-m8-playback-plan-preparation.json records counts; no simple cue failed token matching. Guides are seek aids, not playback passes; fine spoken/motion conformance still requires the normal master replay. No later render has started.

Module8 notes-opening check: prompted by the actual G01 finding228-G01-NOTES-OPENING, the11 unfinished scan jobs (current g03 plus229-231) will save one extra notes-opening image at local12frames and notes-opening-check.json for manual review. The normal120-sample defect/font scans stay unchanged. No finished master was rescanned and no scene source was edited.

Brief235 hand-in preparation: validate-revoice.mjs now records billed usage, result hash, request attempts, clipping, long quiet blocks, low-score alignment words and duration flags. hand-in-revoice.mjs is prepared (syntax checked only), for use after each later voice result validates: it verifies backups/source/art hashes, updates canonical measured/status and captions, retains old audio, and appends one design hand-in with machine findings and human listening pending. Neither helper has processed a voice result yet; no speech/alignment or canonical Maths measured write. D07 over62s and any over570s total are reported to root without trimming.

## Brief228 g03 hand-in,8 November2026

8 November2026. Master `out\explainer\Explainer-bio-m8-g03\Explainer-bio-m8-g03-v1.mp4`,7:52.93,14,188frames,61,926,252bytes. SHA256 `a5c75434316c060e57d278822ee126e01d82001fb0837a4d6483389ca162d903`.

562 frozen inputs including399 audio files and13 asset/font paths unchanged. All15 scenes passed frame-by-frame asset guard. Render completed95 chunks at concurrency2. Page.bringToFront Target closed warning between6450-6599 and6600-6749 recovered; exact final frame count passes. Warning and full log retained.

120 defect samples and120 font samples both0flags. All four scan boards,16-frame master sheet and endpoints visually inspected. All16 match Claude A and fresh pre-render sheet. Five one-line48px notes bullets and framed memory card match the approved board. Wider opening check finds228-G03-NOTES-OPENING: frame13000 at433.333s,local0.40s,shows only a partially written heading. Builder/root review pending; no source repair made.

148 ordered in-bounds captions from actual playback snapshot,last437.413s. Canonical m8g03/measured/lesson.playback.json is byte-identical. Targeted normal1x playback records loop impulses, answer progression, cut-link dimming and stopped downstream signals, pressure trace, glucose/insulin peak labels, islet zoom, glucose uptake/release, reading guides, ethylene and banana ripening, final notes. See playback-ui-check.json for observations and limits. Fine timing, exact spoken-cue conformance, exact voiced student review and human listening remain pending.

Drive https://drive.google.com/file/d/1EC3pKwtpNAL6xjDSfaKjUXTLDPzUChLl/view?usp=drivesdk: exact cloud name/size and local mirror SHA256 confirmed; remote checksum unavailable. Metadata preserves the design route after B8-05 before P02 and official syllabus wording. No upload or release approval. Chunks retained.

Brief228 local render hand-ins now cover p03,p04,g01,g03. Findings and release gates remain open as recorded; this is not public-release approval. Continuing Brief229 with chem-m8-p05 pre-render checks. No speech or scene-code changes.

Brief229 p05 pre-render:739 frozen source/audio inputs (531 audio files),22 asset/font paths unchanged. All18 scenes scanned frame by frame; all16 fresh stills match Claude A sheet beside Module5 reference, no below-A sampled frame identified.15,640frames,8:41.33;179 captions from byte-identical actual playback snapshot, canonical m8p05/measured/lesson.playback.json saved. Five46px notes bullets and memory card match A sheet. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2, one heavy job, chunks retained. No speech or scene-code edits.

## Brief229 p05 hand-in,8 November2026

chem-m8-p05 v1: out\explainer\Explainer-chem-m8-p05\Explainer-chem-m8-p05-v1.mp4,8:41.33,15,640frames,SHA256 f5c23c701fc301a3203fb21793c5b4b02ba8324da47275839381a5c192b430cd.739 frozen inputs/22 asset-font paths unchanged.120 defect samples0flags;120 font samples1falsepositive at9579, enlarged risk-table review0unresolved.16-frame master matches A/fresh sheet; all4boards and endpoints inspected.179 captions from actual playback snapshot. Normal1x checks record spatulas, fizz/gas/limewater, droppers/chips/dial/green change, batch change, table locks/ticks/negative-cell glow, risk rows/quiet fill and five46px notes bullets plus card. Finding229-P05-NOTES-OPENING at14452,481.733s,local0.40s: partial heading only; root review required. Drive cloud name/size and local mirror hash confirmed: https://drive.google.com/file/d/10JhHlVK3STha-jRW4mLtFpmsgtLBUkOF/view?usp=drivesdk. Build report/playback/scan/backup records in work/brief229/chem-m8-p05. No upload; fine cues, exact voiced student review, human listening and full release pending. Chunks retained. Pending ledger updated; continuing b06 pre-render. No speech or scene-code edits.

Brief229 b06 pre-render:737 frozen source/audio inputs (529 audio files),20 asset/font paths unchanged. All16 fresh frames match Claude A sheet beside Module5 reference; no below-A sampled frame identified.14,450frames,8:01.67;156 captions from byte-identical actual playback snapshot, canonical m8b06/measured/lesson.playback.json saved. Five46px notes bullets and framed memory card match A. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2, one heavy job, chunks retained. No speech or scene-code edits.

## Brief229 b06 hand-in,9 November2026

bio-m8-b06 v1: out\explainer\Explainer-bio-m8-b06\Explainer-bio-m8-b06-v1.mp4,8:01.67,14,450frames,SHA256 62bf37844c08cd0244ed2ee3d7d6ac5d1ed150394cf320c52cb0677044504572.737 frozen inputs/20 asset-font paths unchanged.120 defect samples0flags;120 font samples1falsepositive3672, enlarged review0unresolved.16-frame master matches A/fresh sheet; all4boards/endpoints inspected.156 captions from actual playback snapshot. Normal1x checks record pathogen travel/fade, CF chloride/water/cilia, dust/scarring, falling iron/O2 bars/dots, dividing-ring/tumour, LDL liver-to-heart and five46px notes bullets/card. Finding229-B06-NOTES-OPENING:13262,442.067s,local0.40s,partial heading only; root review required. Drive cloud name/size and local mirror hash confirmed: https://drive.google.com/file/d/10j036xyveck6apT4rkIrYA4u2R7R8eFe/view?usp=drivesdk. Build/playback/font/backup reports in work/brief229/bio-m8-b06. No upload; fine cues, exact voiced student review, human listening and full release pending. Chunks retained; pending ledger updated. Continuing b07 pre-render. No speech or scene-code edits.

Brief229 b07 pre-render,9November2026:563 frozen inputs (399 audio files),18 asset/font paths unchanged. All16 fresh frames inspected beside final Claude A sheet and Module5 reference; no below-A sampled frame identified. Final root round all16A supersedes earlier A-minus notes.14,469frames,8:02.30;155 captions from byte-identical actual playback snapshot, canonical m8b07/measured/lesson.playback.json saved. Five42px one- or two-line notes bullets and framed card match A. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2, one heavy job, chunks retained. No speech or scene-code edits.

## Brief229 b07 hand-in,9 November2026

9 November2026. Master `out\explainer\Explainer-bio-m8-b07\Explainer-bio-m8-b07-v1.mp4`,8:02.30,14,469frames,67,617,886bytes. SHA256 `edd381b6c5cdfbd5158c93cc1b74135983f8f13e489cba3b871dd1531655ff85`.

563 frozen inputs including399 audio files and18 image/font paths unchanged. All15 scenes passed frame-by-frame asset guard. Render completed97 chunks at concurrency2; full log searched without warnings/errors/Target closed. Exact frame count passes. No speech, narration or scene-code edits.

120 defect samples and120 font samples both0flags. All4scan boards,16-frame master sheet and endpoints visually inspected. All16 match final Claude A and fresh sheet; final root all-A review supersedes older A-minus grades. Five42px notes bullets (second two lines) plus framed memory card match A. Finding229-B07-NOTES-OPENING: frame13281,442.70s,local0.40s,partial heading only; root review pending.

155 ordered in-bounds captions from actual playback snapshot,last446.78s,SHA256 `8d47ebfee467914b3526e6e2e2b137a1cee8918be9a3abf45df587d2b8525f21`. Canonical m8b07/measured/lesson.playback.json already saved byte-identical.

Targeted normal1x visual replay records copying/repair/mutation, growing cell cluster, inflammatory cells/enzymes, enlarged air sacs, mucus/cilia, O2-to-CO labels and heart size variation; pack-years and two ticket deals; pleura outline, extended latency bracket and changing reactive dots; risk modifier needle positions; final notes. Timestamps and limits in playback-ui-check.json. No new visual defect noticed in targeted states. Fine transients (including ticket nucleus entry and heartbeat frequency), exact spoken-cue conformance, exact voiced student review and human listening remain pending.

Drive https://drive.google.com/file/d/1Ht2o4OcujnDTdudRsLQr3CMW37PgTBFe/view?usp=drivesdk: exact cloud name/size and local mirror SHA256 confirmed; remote checksum unavailable. Design metadata and verified official dotpoints prepared; actual route-order playlist readback required at later upload. No upload or release approval. Notes-opening and full package release review pending. Chunks retained.

Continuing b08 pre-render, final local render in Brief229.

Brief229 b08 pre-render,9November2026:598 frozen inputs (428 audio files),25 asset/font paths unchanged. All16 fresh frames inspected beside final Claude A sheet and Module5 reference; no below-A sampled frame identified. Final root all16A supersedes earlier grades.14,317frames,7:57.23;152 captions from byte-identical actual playback snapshot, canonical m8b08/measured/lesson.playback.json saved. Five42px notes bullets and framed memory card match A. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2, one heavy job, chunks retained. No speech or scene-code edits.

## Brief229 b08 hand-in,9 November2026

9 November2026. Master `out\explainer\Explainer-bio-m8-b08\Explainer-bio-m8-b08-v1.mp4`,7:57.23,14,317frames,54,208,239bytes. SHA256 `a0637f0a2a78b13f83e251008a0ea51eafb49b15bb4b355e891b895ca699ee50`.

598 frozen inputs including428 audio files and25 image/font paths unchanged. All14 scenes passed frame-by-frame asset guard. Render completed96 chunks at concurrency2 without reported warnings/errors/Target closed. Exact frame count passes. No speech, narration or scene-code edits.

120 defect samples and120 font samples both0flags. All4scan boards,16-frame master sheet and endpoints inspected. All16 match final Claude A/fresh sheet. Five42px notes bullets, second on two lines, plus framed memory card match A. Root final all16A supersedes older grades. Finding229-B08-NOTES-OPENING:13129,437.633s,local0.40s,partial heading only.

152 ordered in-bounds captions from actual playback snapshot,last441.713s,SHA256 `1d7481bc5b18e828ad3362ebe12533d1483450fbc1e1110cbec7148d2aa74aa8`. Canonical m8b08/measured/lesson.playback.json saved byte-identical.

Targeted normal1x playback records grey/amber gears, four-to-two iron sites with oxygen at occupied sites and falling bars, collagen loosening/fraying, bowed bones, TSH pulses and enlarged thyroid, normal membrane transporters/glucose entry, later faint transporter overlay, liver arrow, years traces and notes. Finding229-B08-TRANSPORTER-READING: internal vesicles remain ghosted beneath faint membrane channels at202/209/211/214s, making fewer transporters visually ambiguous. Scan frame6025,200.833s confirms the same state. Root review required for the explicit fewer-transporters versus rendering-fault check. No source repair made. Fine transients/speed changes/exact spoken-cue conformance, exact voiced student review and human listening pending; detailed limits in playback-ui-check.json.

Drive https://drive.google.com/file/d/1CjZQpKDmV66K2V7M4rzYR_XSBjMu31Va/view?usp=drivesdk: exact cloud name/size and local mirror SHA256 confirmed; remote checksum unavailable. Design metadata and verified official dotpoints prepared; actual route-order playlist readback required at later upload. No upload or release approval. Both findings and full package release review pending. Chunks retained.

Brief229 local render hand-ins now cover p05,b06,b07,b08. Findings and release gates remain pending; this is not public-release approval. Continuing Brief230 with bio-m8-b09 pre-render.

Brief230 b09 pre-render,9November2026:582 frozen inputs (416 audio files),21 asset/font paths unchanged. All16 fresh frames inspected beside final Claude A sheet and Module5 reference; no below-A sampled frame identified.15,167frames,8:25.57;170 captions from byte-identical actual playback snapshot, canonical m8b09/measured/lesson.playback.json saved. Five40px notes bullets and framed memory card match A. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2, one heavy job, chunks retained. No speech or scene-code edits.

## Brief230 b09 hand-in,9 November2026

9 November2026. Master `out\explainer\Explainer-bio-m8-b09\Explainer-bio-m8-b09-v1.mp4`,8:25.57,15,167frames,68,132,844bytes. SHA256 `9f533e0903f6b6348ca85a63248d09eb6f95801001563235d6f5d1da76f1d929`.

582 frozen inputs including416 audio files and21 image/font paths unchanged. All17 scenes passed frame-by-frame asset guard. Render completed102 chunks at concurrency2. Page.bringToFront Target closed warning between12750-12899 and12900-13049 recovered; renderer exited0, exact final frame count passes. Full log and render-warning.json retained. No speech, narration or scene-code edits.

120 defect samples and120 font samples both0flags. All4scan boards,16-frame master sheet and endpoints inspected. All16 match final Claude A/fresh sheet. Five40px notes bullets, fourth/fifth on two lines, plus framed memory card match A. Finding230-B09-NOTES-OPENING:13979,465.967s,local0.40s,partial heading only; root review pending.

170 ordered in-bounds captions from actual playback snapshot,last470.046s,SHA256 `bf4e13c4a0f248f894155fab8475538685e23eb5c99f8b0e9aa1ca179831e79b`. Canonical m8b09/measured/lesson.playback.json saved byte-identical.

Targeted normal1x playback records damage sparks turning grey/ticked and spread arrows, cycle-dot positions and gate order, p53 docking/repair-spark disappearance/apoptosis, accelerator lock and brake-copy loss/greying, basement-membrane trace on junction and invasion gap, five travelling markers fading to one dark survivor, lymph-node change, organ-row to skin/depth-ruler handoff and notes. No new defect noticed in those targeted states. Initial tissue spawn, brief normal brake press, links-snap transient, fine full paths and exact spoken-cue conformance remain pending alongside exact voiced student review and human listening. Detailed timestamps and limits in playback-ui-check.json.

Drive https://drive.google.com/file/d/1x-Fje2qGUNKFPfHKOlfI9f6p7wpE8mr-/view?usp=drivesdk: exact cloud name/size and local mirror SHA256 confirmed; remote checksum unavailable. Design metadata and verified official dotpoints prepared; actual route-order playlist readback required at later upload. No upload or release approval. Notes-opening and full package release review pending. Chunks retained.

Continuing b10 pre-render.

Brief230 b10 pre-render,9November2026:600 frozen inputs (429 audio files),5 asset/font paths unchanged. All16 fresh frames inspected beside final Claude sheet and Module5 reference; current reasoning/type/plate/notes criteria show no concrete failure. Root final14A/2A-minus (frames4/5), explicitly kept unchanged; dot/square supports wait faint for cues while current working/givens stay readable.14,316frames,7:57.20;156 captions from byte-identical actual playback snapshot, canonical m8b10/measured/lesson.playback.json saved. Five40px notes bullets and framed card match sheet. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2, one heavy job, chunks retained. No speech or scene-code edits.

## Brief230 b10 hand-in,9 November2026

9 November2026. Master `out\explainer\Explainer-bio-m8-b10\Explainer-bio-m8-b10-v1.mp4`,7:57.20,14,316frames,48,560,142bytes. SHA256 `281fdc98a16eee3a739c5250d9bb046ca1a90caec5d855bf0875aa457a3ab367`.

600 frozen inputs including429 audio files and5 image/font paths unchanged. All15 scenes passed frame-by-frame asset guard. Render completed96 chunks at concurrency2 without reported warnings/errors/Target closed; full log searched. Exact final frame count passes. No speech, narration or scene-code edits.

120 defect samples and120 font samples both0flags. All4scan boards,16-frame master sheet and endpoints inspected. All16 match final Claude/fresh sheet. Root final14A/2A-minus (frames4/5), explicitly kept unchanged. Fresh current equations/givens remain readable while supporting dot/square graphics wait for cues. Five one-line40px notes bullets plus framed memory card match sheet. Wider review finds230-B10-NOTES-OPENING:13128,437.60s,local0.40s,partial heading only.

156 ordered in-bounds captions from actual playback snapshot,last441.68s,SHA256 `5dbee76f64bb3e52c9759b5c19d4f2d9c21a18f4d0a54c9195d4975f8ef35b15`. Canonical m8b10/measured/lesson.playback.json saved byte-identical.

Targeted normal1x playback records both AIHW lines and dashed projected endpoints, incidence fraction/decimal/200 result and sense dots, prevalence fraction/5.5%/100-square strip, mortality result and population-border pulse, tank drain narrowing/level rising,300per100000 labels, crude line and pyramid morph, readable34px Q2 table and notes. Finding230-B10-PREVALENCE-CLIP: current second prevalence calculation extends off the right edge, clipping result/unit ending at151s. Scan4473,149.10s confirms it. Bottom summary remains readable. Builder/root review required; no source repair. Fine onsets/full morph paths and exact spoken-cue conformance, exact voiced student review and human listening pending. Detailed timestamps and limits in playback-ui-check.json.

Drive https://drive.google.com/file/d/19GTxzdedWR7QMK0KOs9Lcz11Wf_FB3XH/view?usp=drivesdk: exact cloud name/size and local mirror SHA256 confirmed; remote checksum unavailable. Design metadata and verified official dotpoints prepared; actual route-order playlist readback required at later upload. No upload or release approval. Both findings and full package release review pending. Chunks retained.

Continuing b11 pre-render.

Brief230 b11 pre-render,9November2026:581 frozen inputs (415 audio files),13 asset/font paths unchanged. All16 fresh frames inspected beside final Claude A sheet and Module5 reference; no below-A sampled frame identified.14,694frames,8:09.80;157 captions from byte-identical actual playback snapshot, canonical m8b11/measured/lesson.playback.json saved. Five one-line46px notes bullets and framed memory card match A. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2, one heavy job, chunks retained. No speech or scene-code edits.

## Brief230 b11 hand-in,9 November2026

9 November2026. Master `out\explainer\Explainer-bio-m8-b11\Explainer-bio-m8-b11-v1.mp4`,8:09.80,14,694frames,54,106,727bytes,SHA256 `369941ec036a56fd2323a67ffcc744370eeb9211a3799617adb3868731163c6c`.

581 frozen inputs including415 audio files and13 asset/font paths unchanged. All16 scenes passed frame-by-frame asset guard.98 chunks,concurrency2. Page.bringToFront Target closed warning between1200-1349 and1350-1499 recovered; renderer exited0 and exact final frame count passes. Warning retained. No speech,narration or scene-code edits.

120 defect and120 font samples both0flags. All4scan boards,16-frame master sheet,fresh sheet and endpoints inspected. All16 match Claude final A/fresh sheet. Five one-line46px notes bullets and framed memory card match A. Finding230-B11-NOTES-OPENING:13506,450.20s,local0.40s,partial heading only; builder/root review pending.

157 ordered in-bounds captions from actual playback snapshot,last454.28s,SHA256 `8edeef8eaa6a13dd93329a916533ff5733cad6048c39fbe281301cb74d422dd5`. Canonical m8b11/measured/lesson.playback.json saved byte-identical.

Targeted native normal1x visual replay records observational sorting, allocation sweep and grouped dots,balance tags,crossed pack; large/small triangle states,filled cohort field,dose bars; extended2001 timeline and mid-slot strength/limitation text; mechanism panel and three survival curves with readable labels at228s; delay and unequal reach; complete Q1 card and notes. Fine shrink trajectory,ledger-writing/full dot-fill paths,pack entry,rapid panel swaps,line drawing,first gap widening/dot split onsets and exact spoken-cue conformance remain pending. This is not continuous playback or a human listening pass. Details in playback-ui-check.json.

Drive https://drive.google.com/file/d/1hh1AX5N8W191DASfNpQAMpzhBQMa8iPP/view?usp=drivesdk: fresh cloud name/size and local mirror SHA256 confirmed; remote checksum unavailable. Metadata and official dotpoints prepared. No upload or release approval. Exact voiced student review,human listening,notes-opening/full package release review and later upload/route-order readback pending. Chunks retained.

Continuing bio-m8-p02 pre-render, final local render in Brief230.

Brief230 p02 pre-render,9November2026:583 frozen inputs (417 audio files),15 asset/font paths unchanged. All16 fresh frames inspected beside final Claude A sheet and Module5 reference; no below-A sampled frame identified.14,723frames,8:10.77;175 captions from byte-identical actual playback snapshot, canonical m8p02b/measured/lesson.playback.json saved. Five one-line46px notes bullets and framed memory card match A. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2, one heavy job, chunks retained. No speech or scene-code edits.

## Brief230 p02 hand-in,9 November2026

9 November2026. Master `out\explainer\Explainer-bio-m8-p02\Explainer-bio-m8-p02-v1.mp4`,8:10.77,14,723frames,61,942,467bytes,SHA256 `ee637cb72ac9d21cad562a531d29b5da7604bdfad6a6e44f2daef707188f254b`.

583 frozen inputs including417 audio files and15 asset/font paths unchanged. All18 scenes passed frame-by-frame asset guard.99chunks,concurrency2; renderer exited0. Full log searched without warnings/errors/Target closed. Exact final frame count passes. No speech,narration or scene-code edits.

120 defect and120 font samples both0flags. All4scan boards,16-frame master sheet and endpoints inspected; all16 match final Claude A/fresh sheet and Module5 reference review. Five one-line46px notes bullets plus framed memory card match A. Wider checks find230-P02-HOOK-HEADING-OVERLAP: scan184,6.133s confirms plant/stand over heading, also seen normal6/12s; clear14s.230-P02-NOTES-OPENING:13535,451.167s,local0.40s,partial heading only. Builder/root review pending.

175 ordered in-bounds captions from actual playback snapshot,last455.246s,SHA256 `3bfc425d432c45815b1c0adce4fe301156cb4228971f95dfa307b1170354fad0`. Canonical m8p02b/measured/lesson.playback.json saved byte-identical.

Targeted native normal1x replay records camera zoom,bubble movement/fan air lines,reset0mm,cut/seal rings,magnifier/lift-return glyph,settling clock,alternating slots,reading progression to21mm/5min and4.2 result,varnish patch,slide on stage,all20 lower marks/3 upper marks,humid bag pooling and final notes. Native capture timed out during first review; VLC restart alone failed,CUA connection reset restored capture and review continued. No helper processes killed. Fine full paths/onsets and exact spoken-cue conformance,exact voiced student review,human listening/full release pending. Detailed observations/limits in playback-ui-check.json. Magnifier tag text remains readable in enlarged scan92s; border overlap noted without text-clipping finding.

Drive https://drive.google.com/file/d/14Amsc3vSTxhjQq6raVhyAiUM8o3ruVBQ/view?usp=drivesdk: exact cloud name/size and local mirror SHA256 confirmed; remote checksum unavailable. Metadata and official dotpoints prepared. No upload or release approval. Both findings and full package release review pending; chunks retained.

Brief230 local render hand-ins cover b09,b10,b11,bio-p02. Findings and release gates remain pending. Continuing Brief231 chem-m8-g02 pre-render.

Brief231 chem g02 pre-render,9November2026:600 frozen inputs (430 audio files),11 asset/font paths unchanged. All16 fresh frames inspected beside final Claude A sheet and Module5 reference; no below-A sampled frame identified.14,419frames,8:00.63;162 captions from byte-identical actual playback snapshot, canonical m8g02/measured/lesson.playback.json saved. Five one-line46px notes bullets and framed memory card match A. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2, one heavy job, chunks retained. No speech or scene-code edits.

## Brief231 chem-g02 hand-in,9 November2026

9 November2026. Master `out\explainer\Explainer-chem-m8-g02\Explainer-chem-m8-g02-v1.mp4`,8:00.63,14,419frames,59,536,995bytes,SHA256 `3fc3baaabf352542e2884682b2579c16a2a948ebd48f3ae43e26562b2242eabf`.

600 frozen inputs including430 audio files and11 asset/font paths unchanged. All16 scenes passed frame-by-frame asset guard.97chunks,concurrency2. Two Page.bringToFront Target closed warnings after12000-12149 and12150-12299 recovered; following chunks completed,renderer exited0 and exact final frame count passes. Full log searched; both warnings retained. No speech,narration or scene-code edits.

120 defect and120 font samples both0flags. All4scan boards,16-frame master sheet and endpoints inspected. All16 match final Claude A/fresh sheet beside Module5 reference. Five one-line46px notes bullets plus framed two-aid card match A. Wider review finds231-CHEM-G02-SLOPE-LABEL-OVERLAP:2823,94.10s,blue slope label overlaps green standards-range tag; normal playback confirms.231-CHEM-G02-NOTES-OPENING:13231,441.033s,local0.40s,partial heading only. Builder/root review pending.

162 ordered in-bounds captions from actual playback snapshot,last445.113s,SHA256 `4cf501daee43064a50ac187c3bbe059c7dcd31be6e3e416992268ba4d30d38a9`. Canonical m8g02/measured/lesson.playback.json saved byte-identical.

Targeted native normal1x replay records crosses dropping with matching table underlines,ruled line/slope triangle,0.620marker dropping toward0.142,read-off guides,x5.00arrow between pipette/flask,0.032grey reagent shares,0.258iron bar split and1.30result,clustered overnight/moving running-pipe dots,grey average marker sliding to0.007,and final notes. Fine full motion paths/exact spoken-cue onset conformance,exact voiced student review,human listening/full release pending. Detailed timestamps and limits in playback-ui-check.json.

Drive https://drive.google.com/file/d/1hYs4QN_ULvlhBRuATAV58BaYGzfGWcr0/view?usp=drivesdk: fresh cloud name/size and local mirror SHA256 confirmed; remote checksum unavailable. Metadata and official dotpoints prepared. No upload or release approval. Both findings/full package release review and later upload route-order readback pending; chunks retained.

Continuing bio-m8-g02 pre-render, final local Module8 render in this queue.

Brief231 bio g02 pre-render,9November2026:580 frozen inputs (414 audio files),10 asset/font paths unchanged. All16 fresh frames inspected beside final Claude A sheet and Module5 reference; no below-A sampled frame identified.14,465frames,8:02.17;163 captions from byte-identical actual playback snapshot, canonical m8g02b/measured/lesson.playback.json saved. Five one-line46px notes bullets and framed memory card match A. Disk passes3GB. Exact voiced/student review and human listening pending retained. Starting v1 at concurrency2, one heavy job, chunks retained. No speech or scene-code edits.

## Brief231 bio-g02 hand-in,9 November2026

9 November2026. Master `out\explainer\Explainer-bio-m8-g02\Explainer-bio-m8-g02-v1.mp4`,8:02.17,14,465frames,61,348,896bytes,SHA256 `413793530990ba60397f29ab2c87c4c97d72e1288cb216e552bcce17b57535dd`.

580 frozen inputs including414 audio files and10 asset/font paths unchanged. All15 scenes passed asset guard.97chunks at concurrency2; renderer exited0. Full render log searched for errors/warnings/Target closed/Failed: no matches. No speech,narration or scene-code edits.

120 defect and120 font samples both0flags. All4scan boards,16-frame master sheet and endpoints inspected. All16 match final Claude A/fresh sheet beside Module5 reference. Five one-line46px notes bullets plus memory card match A. Known kit countdown behavior confirmed:231-BIO-G02-COUNTDOWN-11,master frames1616/53.867s,5873/195.767s,9767/325.567s all show11 before10. Q2 normal playback confirms11 then10.231-BIO-G02-NOTES-OPENING:13277/442.567s,local0.40s partial heading only. Both findings reported for builder/root review without source fixes.

163 ordered in-bounds captions from actual playback snapshot,last446.646s,SHA256 `80c961c503650e1f18301941d55366ce30368334b53c5525b105fd0aed6574d8`. Canonical m8g02b/measured/lesson.playback.json saved byte-identical.

Targeted native normal1x replay records campaign/comparison bars,vector movement inside retinal zoom,protein dots and somatic check,13of20 treated versus0of10 untreated,quiet/noise bars and limits,average70 and distributed outcomes,course pills changing from Year11-only teal to all five teal,and final notes. Full individual trajectories and exact spoken-cue onsets were not established. Detailed observations and limits in playback-ui-check.json. Exact voiced student review,human listening and full release review pending.

Backup completed; local Drive mirror SHA256 matches. Cloud folder https://drive.google.com/drive/folders/1YMHsafOpRpxAgAJElLbJo_F8P-khuh-8 exists but fresh listing is empty: remote name/size confirmation pending sync. No remote checksum claim. Metadata and official dotpoints prepared. No upload or release approval; chunks retained.

All queued Module8 local renders now handed in. Findings and release checks remain explicitly pending. Continuing Brief235 changed-scene re-voicing; all13 reviews and21 named plates already complete and preserved.

Brief231 bio-g02 backup follow-up,9 November2026: Drive sync finished. Fresh cloud folder listing confirms Explainer-bio-m8-g02-v1.mp4,61,348,896bytes. https://drive.google.com/file/d/1rGhGu7SJeWUcUCuqi2Ov_RfwbeQ-HTyF/view?usp=drivesdk. Local mirror SHA256 already matches; remote checksum unavailable. Pending ledger and build report updated.

## Brief235 d02 voice hand-in

math-a12-d02: docs/production/claude-pm/checks/m-a12-d02-redesign-learning-review.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes.; docs/production/claude-pm/checks/m-a12-d02-redesign-maths-check.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-coin-jar-v1.png, public/assets/maths/ma12-coin-jar-full-v1.png, public/assets/maths/ma12-coin-v1.png. 1314 changed narration characters across2 takes;14 takes reused. Total540.50s, notes45s. Selected changed-take billed usage317 input/2212 output tokens; estimatedUSD0.020067. Measureddocs/production/claude-pm/lessons/math-a12-d02/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.105s in scene-07;229 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d02/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d03 voice hand-in

math-a12-d03: docs/production/claude-pm/checks/m-a12-d03-redesign-learning-review.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes.; docs/production/claude-pm/checks/m-a12-d03-redesign-maths-check.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-phone-v1.png, public/assets/maths/ma12-stopwatch-v1.png. 1366 changed narration characters across2 takes;15 takes reused. Total554.53s, notes45s. Selected changed-take billed usage328 input/2437 output tokens; estimatedUSD0.022097. Measureddocs/production/claude-pm/lessons/math-a12-d03/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.206s in scene-05;239 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d03/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d04 voice hand-in

math-a12-d04: docs/production/claude-pm/checks/m-a12-d04-redesign-learning-review.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes.; docs/production/claude-pm/checks/m-a12-d04-redesign-maths-check.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/physics/phys-y11-guitar-v1.png, public/assets/physics/phys-y11-sound-level-meter-v1.png. 1230 changed narration characters across2 takes;14 takes reused. Total536.27s, notes45s. Selected changed-take billed usage310 input/2288 output tokens; estimatedUSD0.020747. Measureddocs/production/claude-pm/lessons/math-a12-d04/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.084s in scene-03;222 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:1 scenes, details inwork/brief235/voice-results/d04/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d05 voice hand-in

math-a12-d05: docs/production/claude-pm/checks/m-a12-d05-redesign-learning-review.md: 0 blockers, 1 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-d05-redesign-maths-check.md: 0 blockers, 0 mathematical should-fix findings, 0 optional. The shared visual join finding is recorded in the learning report as 235-J05. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-ferris-wheel-rim-v1.png, public/assets/maths/ma12-ferris-wheel-stand-v1.png, public/assets/maths/ma12-ferris-gondola-v1.png, public/assets/maths/ma12-ferris-gondola-marked-v1.png. 1208 changed narration characters across2 takes;14 takes reused. Total508.03s, notes45s. Selected changed-take billed usage296 input/2120 output tokens; estimatedUSD0.019228. Measureddocs/production/claude-pm/lessons/math-a12-d05/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.386s in scene-05;201 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d05/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d06 voice hand-in

math-a12-d06: docs/production/claude-pm/checks/m-a12-d06-redesign-learning-review.md: 0 blockers, 2 should fix, 0 optional. One finding is shared with d05 and counts once in the aggregate.; docs/production/claude-pm/checks/m-a12-d06-redesign-maths-check.md: 0 blockers, 0 mathematical should-fix findings, 0 optional. Two visual-specification findings, one shared with d05, are recorded in the learning report. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-bike-crankset-v1.png, public/assets/maths/ma12-bike-pedal-v1.png. 1125 changed narration characters across2 takes;13 takes reused. Total508.30s, notes45s. Selected changed-take billed usage277 input/2073 output tokens; estimatedUSD0.018795. Measureddocs/production/claude-pm/lessons/math-a12-d06/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.524s in scene-06;199 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d06/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d07 voice hand-in

math-a12-d07: docs/production/claude-pm/checks/m-a12-d07-redesign-learning-review.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes.; docs/production/claude-pm/checks/m-a12-d07-redesign-maths-check.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-timber-deck-v1.png, public/assets/maths/ma12-timber-deck-top-v1.png. 1234 changed narration characters across2 takes;14 takes reused. Total532.30s, notes45s. Selected changed-take billed usage313 input/2088 output tokens; estimatedUSD0.018949. Measureddocs/production/claude-pm/lessons/math-a12-d07/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.106s in scene-06;222 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d07/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d08 voice hand-in

math-a12-d08: docs/production/claude-pm/checks/m-a12-d08-redesign-learning-review.md: 0 blockers, 1 shared should fix, 0 optional. **235-D08-1** is the final chip's unit bridge, detailed in the maths report; count it once.; docs/production/claude-pm/checks/m-a12-d08-redesign-maths-check.md: 0 blockers, 1 should fix, 0 optional. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-country-road-v1.png. 1189 changed narration characters across2 takes;13 takes reused. Total515.27s, notes45s. Selected changed-take billed usage287 input/1932 output tokens; estimatedUSD0.017531. Measureddocs/production/claude-pm/lessons/math-a12-d08/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.025s in scene-01;213 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d08/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d09 voice hand-in

math-a12-d09: docs/production/claude-pm/checks/m-a12-d09-redesign-learning-review.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes.; docs/production/claude-pm/checks/m-a12-d09-redesign-maths-check.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-hiking-valley-v1.png. 521 changed narration characters across1 takes;15 takes reused. Total517.67s, notes45s. Selected changed-take billed usage127 input/878 output tokens; estimatedUSD0.007965. Measureddocs/production/claude-pm/lessons/math-a12-d09/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.005s in scene-02;209 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:1 scenes, details inwork/brief235/voice-results/d09/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d10 voice hand-in

math-a12-d10: docs/production/claude-pm/checks/m-a12-d10-redesign-learning-review.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes.; docs/production/claude-pm/checks/m-a12-d10-redesign-maths-check.md: 0 blockers, 0 should fix, 0 optional in the reviewed changes. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-coaster-track-v1.png, public/assets/maths/ma12-coaster-car-v1.png. 1460 changed narration characters across2 takes;12 takes reused. Total492.17s, notes45s. Selected changed-take billed usage335 input/2503 output tokens; estimatedUSD0.022694. Measureddocs/production/claude-pm/lessons/math-a12-d10/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.124s in scene-12;193 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d10/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d11 voice hand-in

math-a12-d11: docs/production/claude-pm/checks/m-a12-d11-redesign-learning-review.md: 0 blockers, 1 shared should fix, 0 optional. **235-D11-1** is the 1.3-radian screen rounding error detailed in the maths report; count it once.; docs/production/claude-pm/checks/m-a12-d11-redesign-maths-check.md: 0 blockers, 1 should fix, 0 optional. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-lighthouse-v1.png, public/assets/maths/ma12-lighthouse-islet-top-v1.png, public/assets/maths/ma12-beach-strip-top-v1.png. 1426 changed narration characters across2 takes;12 takes reused. Total521.60s, notes45s. Selected changed-take billed usage344 input/2319 output tokens; estimatedUSD0.021043. Measureddocs/production/claude-pm/lessons/math-a12-d11/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.083s in scene-07;217 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d11/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d12 voice hand-in

math-a12-d12: docs/production/claude-pm/checks/m-a12-d12-redesign-learning-review.md: 0 blockers, 0 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-d12-redesign-maths-check.md: 0 blockers, 0 should fix, 0 optional. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-tower-block-v1.png. 1486 changed narration characters across2 takes;12 takes reused. Total545.90s, notes45s. Selected changed-take billed usage365 input/2716 output tokens; estimatedUSD0.024626. Measureddocs/production/claude-pm/lessons/math-a12-d12/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.064s in scene-05;201 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d12/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d13 voice hand-in

math-a12-d13: docs/production/claude-pm/checks/m-a12-d13-redesign-learning-review.md: 0 blockers, 0 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-d13-redesign-maths-check.md: 0 blockers, 0 should fix, 0 optional. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/physics/phys-y11-drone-side-v1.png, public/assets/physics/phys-y11-ground-strip-v1.png. 1836 changed narration characters across2 takes;11 takes reused. Total487.13s, notes45s. Selected changed-take billed usage432 input/3038 output tokens; estimatedUSD0.027558. Measureddocs/production/claude-pm/lessons/math-a12-d13/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.163s in scene-06;192 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d13/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 d14 voice hand-in

math-a12-d14: docs/production/claude-pm/checks/m-a12-d14-redesign-learning-review.md: 0 blockers, 1 shared should fix, 0 optional. **235-D14-1** is the coordinate-convention note in the maths report; count once.; docs/production/claude-pm/checks/m-a12-d14-redesign-maths-check.md: 0 blockers, 1 should fix, 0 optional. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/physics/phys-y11-car-top-v1.png. 1294 changed narration characters across2 takes;12 takes reused. Total497.03s, notes45s. Selected changed-take billed usage304 input/2177 output tokens; estimatedUSD0.019745. Measureddocs/production/claude-pm/lessons/math-a12-d14/measured/lesson.json; original measured/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.325s in scene-10;205 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:2 scenes, details inwork/brief235/voice-results/d14/hand-in.json. Human listening and built preview pending; no scene build or render. 

## Brief235 complete hand-in,9 November2026

All13 designs d02-d14 have per-design review and voice hand-ins above. Reviews:0 blockers,5 should-fix findings retained, no design edits. All21 named plates delivered with provenance and QA; the brief says22 but names21. Reviews, calculations, anchor checks and art were completed earlier and not redone. Changed narration:25 takes/16,689characters;171 takes reused. Estimated billed speech cost USD0.261047. All measured lessons below570s; d07 scene1a46.28s, no trim reserve needed. Every bold cue mapped, alignment bounds checked, captions exported,45s notes enforced. Machine findings (low-score words and any signal flags) remain in each voice-results/dNN/hand-in.json; human listening and built previews pending. No scenes built or rendered. New voice/canonical measured/caption packages backed up to the local Drive mirror with153 matching hashes; individual cloud metadata not checked. Full totals and paths:work/brief235/final-handin.json. Continuing238 full reviews/live-site checks before new plates or speech.

## Brief238 d15 review,9 November2026

Full learning/maths review:0 blockers,1 should fix238-D15-NOTES-FIT (single-line40px notes exceed half-frame beside memory card). Reports:checks/m-a12-d15-redesign-learning-review.md and-maths-check.md. CAS, angle/secant/readout values,15-scene6364-character count and cue order checked in work/brief238/d15-calculations.json. Native live-site3 worked examples match, includinga4/b-4; direct retrieval403 worked around by ordinary browser navigation. Everyday skateboard anchor distinct; d14/d16 joins checked. No design edits. New plate ma12-skateboard-side-v1 still pending. Characters voiced0,cost0,measured path not yet created; estimated561s, notes45s. Continuing full reviews for the other18 designs before art or speech.

## Brief238 d16 review,9 November2026

Full learning/maths review:0 blockers,1 should fix238-D16-NOTES-FIT (40px single-line notes exceed half-frame beside memory card). Reports:checks/m-a12-d16-redesign-learning-review.md and-maths-check.md. CAS/readouts/vase constant-flow identity and11 profile points checked in work/brief238/d16-calculations.json. Native live-site3 worked examples agree; existing site correction54 already covers cubic wording/module identity, no duplicate. Everyday vase/tap anchor distinct; d15 opening and d17 handoff contract checked.5855characters,14scenes,cues in visual/spoken order,no em dashes,estimated520s,notes45s. Plates ma12-barrel-vase-v1 and ma12-kitchen-tap-v1 pending; measure profile later,never warp. Characters voiced0,cost0,measured path not yet created. Continuing remaining17 full reviews before art or speech.

## Brief238 d17 review,9 November2026

Full learning/maths review:0 blockers,2 should fix238-D17-SCENE-REFERENCES (old author/table numbers select wrong graph/window) and238-D17-NOTES-FIT (40px one-line notes exceed half-frame). Reports:checks/m-a12-d17-redesign-learning-review.md and-maths-check.md. CAS/numerical wiggle roots,all curve/readout values and views model peak atday3 checked in work/brief238/d17-calculations.json. Both live-site6-step sketches match numerical answers; known site false discontinuity/marking claims already logged and avoided by design. Everyday video-view anchor accepteddistinct; d16/d18 joins checked.6430characters/18scenes,cues in order,no em dashes,estimated565s,notes45s. Shared ma12-pen-wall-v1 plate pending with d18; characters voiced0,cost0,measured path not created. Continuing remaining16 full reviews before art or speech.

## Brief238 d18 review,9 November2026

Full learning/maths review: 0 blockers, 2 should fix: 238-D18-COLLAPSE-DIRECTION (near x20 pen collapses perpendicular to wall, not against it) and 238-D18-NOTES-FIT. Reports: checks/m-a12-d18-redesign-learning-review.md and-maths-check.md. CAS, all slider/readout values, domains, endpoints and optima checked in work/brief238/d18-calculations.json. Live-site five-step pen and box examples agree. Everyday pen/wall anchor distinct; d17/d19 joins checked. 5677 characters,13 scenes,cues in order,no em dashes,estimated504s,notes45s. New pen-wall,top-down wall and cardboard tile plates pending. Characters voiced0,cost0,measured path not created. Continuing remaining15 full reviews before art or speech.

## Brief238 d19 review,9 November2026

Full learning/maths review: 0 blockers, 3 should fix: 238-D19-ASYMPTOTE-SCOPE (k0 constant case omitted from notes scope), 238-D19-STALE-HOOK-REFERENCES (old savings hook/window references), and238-D19-NOTES-FIT. Reports: checks/m-a12-d19-redesign-learning-review.md and-maths-check.md. CAS/car rate-over-value-0.15,all examples/readouts and exact-k timing in work/brief238/d19-calculations.json. Live-site three worked examples agree; rounded-site-k differences documented. Everyday car-value anchor distinct, d18/i01 join contracts checked. 6352characters/15scenes including3a,cues in order,no em dashes,estimated556s,notes45s. No new plate required. Characters voiced0,cost0,measured path not created. d15-d19 full reviews now handed in; continuing14 integral-design reviews before art or speech.

## Brief238 i01 review,9 November2026

Full learning/maths review: 0 blockers, 2 should fix: 238-I01-ASSET-MARGINS (exact guide bases conflict with8% clear margin) and238-I01-NOTES-FIT. Reports: checks/m-a12-i01-redesign-learning-review.md and-maths-check.md. CAS/primitives,all family/readout values,shelf pixel mapping and C50 checked in work/brief238/i01-calculations.json. Live-site two worked examples agree. Everyday kitchen-garden anchor accepted byroot33; no lift; d19/i02 joins checked. 6128characters/16scenes including8a,cues in order,no em dashes,estimated542s,notes45s. Bookcase-pots and bean-shoot plates pending; characters voiced0,cost0,measured path not created. Continuing remaining13 full reviews before art or speech.

## Brief238 i02 review,9 November2026

Full learning/maths review: 0 blockers, 1 should fix238-I02-NOTES-FIT. Reports: checks/m-a12-i02-redesign-learning-review.md and-maths-check.md. CAS,nine primitive checks,all readouts and starter6cm/6h versus crossed24cm checked in work/brief238/i02-calculations.json. Live-site three power examples agree. Everyday cooking anchor distinct; i01/i03 joins checked. 6081characters/16scenes including5a,cues in order,no em dashes,estimated538s,notes45s. Starter-jar/fill plates pending; characters voiced0,cost0,measured path not created. Continuing remaining12 full reviews before art or speech.

## Brief238 i03 review,9 November2026

Full learning/maths review: 0 blockers,0 should fix,0 optional. Reports: checks/m-a12-i03-redesign-learning-review.md and-maths-check.md. CAS,ten primitive checks,base1 limit and all readouts/phone C100/half-remaining ratio checked in work/brief238/i03-calculations.json. Live-site three worked examples agree; mixed formulas saved for i04 reuse. Everyday battery anchor distinct; i02/i04 joins checked. 6311characters/18scenes including4a/8a,cues in order,no em dashes,estimated555s,notes45s. Phone-dock plate pending; characters voiced0,cost0,measured path not created. Continuing remaining11 full reviews before art or speech.

## Brief238 i04 review,9 November2026

Full learning/maths review: 0 blockers,1 should fix238-I04-TUBE-BULB-CONNECTION (specified shapes leave20px between tube and bulb). Reports: checks/m-a12-i04-redesign-learning-review.md and-maths-check.md. CAS/log branch checks,all readouts and fundraiser1000ln2 per doubling checked in work/brief238/i04-calculations.json. Live-site we1/we2 comparison reuses the exact read saved duringi03,not repeated. Everyday fundraiser anchor distinct; i03/i05 joins checked. 6318characters/17scenes including6a,cues in order,no em dashes,estimated555s,notes45s. Fundraiser-board plate pending; characters voiced0,cost0,measured path not created. Continuing remaining10 full reviews before art or speech.

## Brief238 i05 review,9 November2026

Full learning/maths review: 0 blockers,1 should fix238-I05-NOTES-FIT. Reports: checks/m-a12-i05-redesign-learning-review.md and-maths-check.md. CAS,ten primitive/general checks,all readouts,poles and solar19.1/38.2kWh checked in work/brief238/i05-calculations.json. Live derivative we1(a-c) matches all three reversed examples. Everyday solar anchor distinct; i04/i06 joins checked.6272characters/16scenes including5a,cues in order,no em dashes,estimated551s,notes45s. Solar-panel plate pending; characters voiced0,cost0,measured path not created. Continuing remaining9 full reviews before art or speech.

## Brief238 i06 review,9 November2026

Full learning/maths review: 0 blockers,2 should fix238-I06-STALE-UNITS and238-I06-NOTES-FIT. Reports: checks/m-a12-i06-redesign-learning-review.md and-maths-check.md. All cosine/trolley sums,errors,units and task values checked in work/brief238/i06-calculations.json. Live-site four-step x² trapezoid example agrees. Everyday rain anchor distinct; i05/i07 joins checked.6227characters/15scenes,cues in order,no em dashes,estimated549s,notes45s. Rain-gauge plate pending; characters voiced0,cost0,measured path not created. Continuing remaining8 full reviews before art or speech.

## Brief238 i07 review,9 November2026

Full learning/maths review:1 blocker238-I07-NONPOSITIVE-RULE (zero-function exception lost in copied notes),4 should fix238-I07-SECONDS,238-I07-CUE-COLLISION,238-I07-STRIP-COUNT,238-I07-STALE-UNITS. Reports:checks/m-a12-i07-redesign-learning-review.md and-maths-check.md. All bath/signed sums/geometry/task values checked in work/brief238/i07-calculations.json; live lesson07we3 and lesson02we1 fully read and agree. Everyday bath distinct;i06/i08 joins checked.5775characters/16scenes,no em dashes,estimated518s,notes45s. Skip i07art/speech while blocker unresolved; no design edits. Characters voiced0,cost0,measured path not created. Continuing remaining7 full reviews.

## Brief238 i08 review,9 November2026

Full learning/maths review:0 blockers,0 should fix,0 optional. Reports:checks/m-a12-i08-redesign-learning-review.md and-maths-check.md. CAS,all readouts/chords/midpoint errors/tasks and noon450-car maximum checked in work/brief238/i08-calculations.json. Live FTC/trap03 read and actual accumulator controls confirm maximum/constant shift/unchanged slope. Everyday car-park occupancy distinct;i07/i09 joins checked.6132characters/16scenes,cues in order,no em dashes,estimated548s,notes45s. Entrance plate pending;characters voiced0,cost0,measured path not created. Continuing remaining6 full reviews before art or speech.

## Brief238 i09 review,9 November2026

Full learning/maths review:0 blockers,1 shared should fix238-I09-REVERSE-SUM (six finite reverse rectangles cannot show exact-3 with ordinary endpoint/midpoint rules;no-sum author note conflicts). Reports:checks/m-a12-i09-redesign-learning-review.md and-maths-check.md. CAS/all values/readouts/tasks in work/brief238/i09-calculations.json;live examples/cards/properties confirmed. Everyday thermometer1-(-2)=3 distinct;i08/i10 joins checked.6222characters/14scenes,cues in order,no em dashes,estimated553s,notes45s. Thermometer plate pending;characters voiced0,cost0,measured path not created. Continuing remaining5 full reviews before art or speech.

## Brief238 i10 review,9 November2026

Full learning/maths review:0 blockers,0 should fix,0 optional. Reports:checks/m-a12-i10-redesign-learning-review.md and-maths-check.md. CAS/all split values/readouts/tasks,lift0net/4floors and car32/40 in work/brief238/i10-calculations.json. Live lesson02we2/Q2 confirmed;prior actual we1/lesson07we3 reads reused. Everyday lift reserved toi10;i09/i11 joins checked.5906characters/14scenes,cues in order,no em dashes,estimated528s,notes45s. Shaft plate pending,measure landings/car fit,never warp;characters voiced0,cost0,measured path not created. Continuing remaining4 full reviews before art or speech.

## Brief238 i11 review,9 November2026

Full learning/maths review:1 blocker238-I11-NOTES-SIGNED-AREA (unconditioned copied Area=∫xdy contradicts sign-changing examples),1 should fix238-I11-HEIGHT-LABEL. Reports:checks/m-a12-i11-redesign-learning-review.md and-maths-check.md. CAS/all layer sums/reflection/tasks/profile targets and e-1water/1concrete checked in work/brief238/i11-calculations.json. Actual i10live example evidence reused;other examples original. Everyday pool distinct;i10/i12 joins checked.5545characters/13scenes,cues in order,no em dashes,estimated501s,notes45s. Skip i11art/speech while blocker unresolved;no design edits. Characters voiced0,cost0,measured path not created. Continuing remaining3 full reviews.

## Brief238 i12 review,9 November2026

Full learning/maths review:0 blockers,1 should fix238-I12-NOTES-FIT. Reports:checks/m-a12-i12-redesign-learning-review.md and-maths-check.md. CAS/all symmetry/profile targets/trapezia/tasks,arch2m² and10.5against6.25 checked in work/brief238/i12-calculations.json. Live lesson03we2all3steps matches67/60. Everyday cut-fill/bridge distinct;i11/i13 joins checked.6202characters/16scenes,cues in order,no em dashes,estimated554s,notes45s. Garden/bridge plates pending,never warp;shared airconditioner withi13 pending. Characters voiced0,cost0,measured path not created. Continuing remaining2 full reviews before art or speech.

## Brief238 i13 review,9 November2026

Full learning/maths review:1 blocker238-I13-NOTES-SIGNED-AREA,2 should fix238-I13-TOTAL-UNITS-SCOPE and238-I13-NOTES-FIT. Reports:checks/m-a12-i13-redesign-learning-review.md and-maths-check.md. CAS/all sums/meters/tasks96/πenergyagainst48,sand36against54 in work/brief238/i13-calculations.json. Worked numbers original;prior actual site conceptual evidence reused. Everyday cooling/channel accepted with solar-energy thematic similarity reported for final anchor check;i12/i14 joins checked.5687characters/14scenes,cues in order,no em dashes,estimated515s,notes45s. Skip i13art/speech while blocker unresolved;no design edits. Characters voiced0,cost0,measured path not created. Continuing finali14full review.

## Brief238 i14 review,9 November2026

Full learning/maths review:0 blockers,2 should fix238-I14-REFERENCE-POINT and238-I14-STALE-UNITS. Reports:checks/m-a12-i14-redesign-learning-review.md and-maths-check.md. CAS/all robot/particle/snow/tasks in work/brief238/i14-calculations.json;robot cm/cm/s/cm/s² matchesroot29. Live we1all3steps and actual scrubber2.5readouts agree;hidden36/44 not claimed viewed. Everyday robot/snow distinct;i13/f01 joins checked against current files.5753characters/15scenes,cues in order,no em dashes,estimated520s,notes45s. Robot/floor/snow-post plates pending;characters voiced0,cost0,measured path not created. All19full reviews now handed in;next cross-series anchor check and plate inventory,skippingi07/i11/i13art/speech while blockers remain.

## Brief238 review/anchor/inventory checkpoint,9 November2026

All19full reviews handed in separately above. Three designs have blockers:i07,i11,i13;skip their art/speech,continueother16. Anchor comparison checks/brief238-anchor-comparison.md reports pre-existingd01bacteria exception and thematic overlaps rather than a false blanket uniqueness pass. Current asset briefs name27distinct new plates,not roughly35;22readyforgeneration,5heldbydesignblockers. Inventory work/brief238/asset-brief-inventory.json;initial assets/brief238-manifest.json records native targets and pending actual measurements. Coaster235alreadydone,not repeated. Handoff bath/i06 andairconditioner/i12 dependencies remain held. No design edits,speech or art in this checkpoint. Continuing eligible plates with built-in imagegen and authorised local pixel finishing;no profile warping.

## Brief238 d15 plate hand-in,9 November2026

Delivered public/assets/maths/ma12-skateboard-side-v1.png,2400x800RGBA. Built-in imagegen source2172x724retained;removedalpha<8noise and padded114pxleft/right,38pxtop/bottom,no resizing/stretching. Contacts(677,601)/(1721.5,601),rotation midpoint(1199.25,601),centraldecktop(800,334)to(1600,334).8%clearmargins pass. Paper300/640px andblack/whiteedgeviews inspected;two visible wheels,clean edges,no text/people/shadow. Provenance assets/ma12-d15-provenance.json;manifest assets/brief238-manifest.json;QA work/brief238/d15-skateboard-qa.jpg. Review0blockers/1notes-fitfinding unchanged;6364characters,voice0seconds/cost0,measured not created. Art1of22eligible delivered,5held;continuingd16plates.

## Brief238 d16 plates hand-in,9 November2026

Delivered ma12-barrel-vase-v1.png1400x2000RGBA andma12-kitchen-tap-v1.png1600x1200RGBA inpublic/assets/maths. Built-in imagegen,firstvasecandidate rejected forangularbelly/opaqueinterior,one correction retained. Native pixels cleanedalpha<8and transparently padded only,no resize/stretch/warp. Paper300/620pxtall,black/white,andvasefill/profileoverlay inspected. 238-D16-PLATE-PROFILE:actualinnerheightabout1190v1600target,midinnerhalfwidth352v511target,error159px>10.22pxtolerance.11measuredrows/endpointcaveats inprovenance;builder mustfitcodedcurve/filltomeasuredplateperroot30,neverwarpit. Vaseaxis699.5,base~1590,mouth~400;tapspout(1135,526)±2px.8%margins pass. Provenance assets/ma12-d16-provenance.json;manifest assets/brief238-manifest.json;QA work/brief238/d16-*. Review0blockers/1notes-fitfinding retained;5855characters,voiced0seconds/cost0,measured notcreated.3of22eligibleplates delivered,5held. Continuing shared d17/d18pen/wall/card plates.

## Brief238 d17 shared plate hand-in,9 November2026

Shared public/assets/maths/ma12-pen-wall-v1.png deliveredwithd18,2400x1400RGBA;provenance assets/ma12-d18-provenance.json recordsgenerator/cameracorrection,sourcehash,nativetransparentpadding,alpha/anchorQA. d17scene17usesit;no duplicatepaint. Review0blockers/2shouldfix retained,6430characters,estimated565s,voice0/cost0,measurednotcreated.

## Brief238 d18 plates hand-in,9 November2026

Delivered public/assets/maths/ma12-pen-wall-v1.png2400x1400,ma12-stone-wall-top-v1.png2400x360,andma12-card-texture-v1.png1200square,allRGBA. Penfront-leftview,3sides/tworails,noanimals/gate;paper300/1300pxandblack/whiteinspected. Penmidpointsleft(702,736),front(1394,773),right(1747,577),wall(1065.5,650),sheepground(1200,700),manual±8px. Wall2copycheck,cardfinal2x2checkinspected;oppositeedgeRGBAmaxdifference0,cardfullyopaquealpha255. Initialcardfeatherbandcorrectedusingnative600pxtexturepatchmirroring;noresize/stretch. Walltransparenttop89px/bottom92px,side-marginexemption;cardfour-edgeexemption. Provenance assets/ma12-d18-provenance.json;manifest assets/brief238-manifest.json. Review0blockers/2shouldfix retained,5677characters,estimated504s,voice0/cost0,measurednotcreated.6of22eligibleplatesdelivered,5held;continuingi01plates,d19needsnobrandnewplate.

## Brief238 i01 plates and clearance finding,9 November2026

Delivered public/assets/maths/ma12-bookcase-pots-v1.png1400x2000RGBA andma12-bean-shoot-v1.png600x800RGBA with findings. Authorisedlocalpixelwork:uniformaspect-preservingresampling,translationofintactshelfpatches,woodjoincleanup;no nonuniformstretch/profilewarp. Soil800/1220/1640,visiblecentrelinebounds578..821,centres699.5;floor~1920±2. Beanbase(300,760),tipy60,height700±1. Exactguidesretained;8%bottommarginconflictsremainas238-I01-ASSET-MARGINS. Paper300/880px,black/white,growthprobesandall3at350pxinspected. Newobservedblocker238-I01-GROWTH-CLEARANCE:lower shootscrossshelves/projectintopotaboveatt5;rootphysicalstagingdecisionneeded,do notsilentlychangeCoffsets/pixelscale. Learningreviewaddendumnow1blocker/2shouldfix;holdi01speech. Provenance assets/ma12-i01-provenance.json;manifest assets/brief238-manifest.json;QA work/brief238/i01-final-growth-qa.jpg.6128characters,voice0/cost0,measurednotcreated.8of22initialeligibleplatesdelivered,5held;continuingi02with15designscurrentlyeligibleforvoice.

## Brief238 i02 plates hand-in,9 November2026

Delivered public/assets/maths/ma12-starter-jar-v1.png andma12-starter-fill-v1.png,both1200x1800RGBA. Built-inimagegenplusauthorisedpixelassembly:uniformaspectscale,removalofemptybody/flatbaserows,precisealphaclearanceandmeniscuscleanup;nostretch. Fillisnativecroppedgeneratedstartertexture,notcodepaint. Exactinterior/fillboundsx260/940,y300/1560,1260px=14cmat90px/cm;alphapixelchecksconfirmholeandwallboundaries.5cmreveal top1110,11cmtop570;paper300/560pxtallandblack/whiteinspected.8%margins pass. Provenance assets/ma12-i02-provenance.json;manifest assets/brief238-manifest.json;QA work/brief238/i02-final-overlay-qa.jpg. Review0blockers/1notes-fitfinding retained,6081characters,estimated538s,voice0/cost0,measurednotcreated.10of22initialeligibleplatesdelivered,5held;i01additionalclearanceblockerretained. Continuingphone/fundraiser/solar/rainplates.

## Brief238 i03 plates hand-in,9 November2026

Delivered public\assets\maths\ma12-phone-dock-v1.png (1200x2000,RGBA). Built-in imagegen plus authorised local pixel finishing; operations,hashes and source candidates in docs\production\claude-pm\assets\ma12-i03-provenance.json. Paper300/620px tall,test light text inside exact screen,and black/white edges inspected. Blank face-on screen clear;dock/cable complete,no icons/logos/text in delivered asset.8%margins pass. Phone-tripod metal/outline reference visually compared. No profile deformation or nonuniform stretching. Measurements: [{"screenBox": [330, 330, 870, 1390], "screenCornerRadius": 32, "dockBaseLineApprox": 1540, "dockUncertaintyPx": 2}]. Review:0 blockers,0 should fix,0 optional. 6311characters,estimated555s,notes45s;voice0/cost0,measurednotcreated. Manifest assets/brief238-manifest.json:11platesdelivered,5held,11pending. Continuingremainingeligibleplates.

## Brief238 i04 plates hand-in,9 November2026

Delivered public\assets\maths\ma12-fundraiser-board-v1.png (900x2400,RGBA). Built-in imagegen plus authorised local pixel finishing; operations,hashes and source candidates in docs\production\claude-pm\assets\ma12-i04-provenance.json. Paper300/760px tall,black/white edges and half-height coded red test fill inspected. Exact tube/bulb openings and a24px-wide20px connector preserve stated endpoints.8%margins pass;no text/ticks/red in delivered plate. The earlier20pxgapfinding is bridged physically in this artwork;builder must include neck in coded fill mask. No scene/source edits. Measurements: [{"tubeInsideBox": [390, 260, 510, 1900], "bulbCentre": [450, 2040], "bulbInnerRadius": 120, "neckBox": [438, 1900, 462, 1923], "halfHeightFillY": 1080, "tubeSpan": 1640}]. Review:0 blockers,1 tube/bulb connection finding;art now includes a measured connector,coded build pending. 6318characters,estimated555s,notes45s;voice0/cost0,measurednotcreated. Manifest assets/brief238-manifest.json:12platesdelivered,5held,10pending. Continuingremainingeligibleplates.

## Brief238 i05 plates hand-in,9 November2026

Delivered public\assets\maths\ma12-solar-panels-v1.png (2000x1200,RGBA). Built-in imagegen plus authorised local pixel finishing; operations,hashes and source candidates in docs\production\claude-pm\assets\ma12-i05-provenance.json. Paper300/560pxwide with140pxreusedsun,black/whiteedges inspected. Sixglass-facedpanels clearly countable in2rows/3columns,steellegs/grass present,no people/text/skybackground/shadow.8%margins pass. No image resampling/stretching. Measurements: [{"arrayOuterCornersClockwise": [[408, 244], [1584, 244], [1763, 854], [235, 854]], "grassLineYApprox": 1034, "measurementUncertaintyPx": 4, "panelCount": 6, "arrangement": [2, 3]}]. Review:0 blockers,1 notes-fit should fix retained. 6272characters,estimated551s,notes45s;voice0/cost0,measurednotcreated. Manifest assets/brief238-manifest.json:13platesdelivered,5held,9pending. Continuingremainingeligibleplates.

## Brief238 i06 plates hand-in,9 November2026

Delivered public\assets\maths\ma12-rain-gauge-v1.png (800x2000,RGBA). Built-in imagegen plus authorised local pixel finishing; operations,hashes and source candidates in docs\production\claude-pm\assets\ma12-i06-provenance.json. Paper300/600pxtall beside520pxreusedthundercloud,halfheighttestfill,andblack/whiteedgesinspected. Exactclearcylinder/watermaskaligned,emptyversionhasnofixedwaterline/scales/text.8%margins pass. Handoffbathtubplate remainsheldwithi07;thisdoesnotcompletei06visualpackage. Measurements: [{"innerLeft": 300, "innerRight": 500, "innerTop": 420, "insideFloor": 1500, "innerHeight": 1080, "halfHeightFillY": 960}]. Review:0 blockers,2 should fix retained (stale units,notes fit);bath handoff asset dependency held. 6227characters,estimated549s,notes45s;voice0/cost0,measurednotcreated. Manifest assets/brief238-manifest.json:14platesdelivered,5held,8pending. Continuingremainingeligibleplates.

## Brief238 i08 plates hand-in,9 November2026

Delivered public\assets\maths\ma12-car-park-entry-v1.png (2400x1500,RGBA). Built-in imagegen plus authorised local pixel finishing; operations,hashes and source candidates in docs\production\claude-pm\assets\ma12-i08-provenance.json. Paper420/640pxwide,temporary450counterandblack/whiteedgesinspected. Exactlyfourlevels,parkedcarswithoutdrivers,raisedgate,ticketpillar,blankdark520x180panel;no words/Picons/logos/people in deliveredasset.8%margins pass. Manual lane/angle points are approximate;signcorners exact. Measurements: [{"signFaceCornersClockwise": [[881, 834], [1401, 834], [1401, 1014], [881, 1014]], "signFaceSize": [520, 180], "entryLaneGroundCentre": [1182, 1260], "driveInScreenAngleDegrees": -90, "screenAngleConvention": "degreesfromrightwardhorizontal,+y down,soforwardintobuildingisupward", "groundAndAngleUncertainty": "about10px/5degrees", "levels": 4}]. Review:0 blockers,0 should fix,0 optional. 6132characters,estimated548s,notes45s;voice0/cost0,measurednotcreated. Manifest assets/brief238-manifest.json:15platesdelivered,5held,7pending. Continuingremainingeligibleplates.

## Brief238 i09 plates hand-in,9 November2026

Delivered public\assets\maths\ma12-frost-thermometer-v1.png (1000x2400,RGBA). Built-in imagegen plus authorised local pixel finishing; operations,hashes and source candidates in docs\production\claude-pm\assets\ma12-i09-provenance.json. Inspected paper at 300/520px tall, coded minus2/plus1 test columns and black/white edges. Eleven major marks at exactly97px spacing and four minor marks per gap; blank scale and empty tube in delivered plate. Frost and post remain readable;8% margins pass. Test columns are QA only. Measurements: [{"backingBox": [418, 430, 578, 1670], "bulbCentre": [498, 1577], "bulbInnerRadius": 22, "tubeCentreTop": [498.5, 505], "tubeCentreBottom": [498.5, 1560], "majorTickYs": [532, 629, 726, 823, 920, 1017, 1114, 1211, 1308, 1405, 1502], "majorSpacingPx": 97, "minorTickYs": [551, 571, 590, 610, 648, 668, 687, 707, 745, 765, 784, 804, 842, 862, 881, 901, 939, 959, 978, 998, 1036, 1056, 1075, 1095, 1133, 1153, 1172, 1192, 1230, 1250, 1269, 1289, 1327, 1347, 1366, 1386, 1424, 1444, 1463, 1483], "minorTicksPerInterval": 4, "codedTemperatureMapping": "y=1017-97*T;top+5,bottom-5", "testColumnTops": {"minus2": 1211, "plus1": 920}}]. Review:0 blockers,1 should fix (REVERSE-SUM remains a build instruction finding). 6222characters,estimated553s,notes45s;voice0/cost0,measurednotcreated. Manifest assets/brief238-manifest.json:16platesdelivered,5held,6pending. Continuingremainingeligibleplates.

## Brief238 i10 plates hand-in,9 November2026

Delivered public\assets\maths\ma12-lift-shaft-v1.png (1200x2800,RGBA). Built-in imagegen plus authorised local pixel finishing; operations,hashes and source candidates in docs\production\claude-pm\assets\ma12-i10-provenance.json. Inspected paper360/700px tall with reused car at ground and top, plus black/white edges. Four clear landing doors and empty shaft, no writing. Native profile left unwarped. Measured pitch343/338/355px misses3px tolerance and requested560px pitch; builder must fit to measured geometry. At0.19 source car scale its visible312px height fits shortest338px pitch;380px canvas-width car would be too tall.8% margins pass. Measurements: [{"landingFloorYsTopToBottom": [1056, 1399, 1737, 2092], "measurementUncertaintyPx": 2, "landingPitchPx": [343, 338, 355], "targetPitchPx": 560, "spacingTolerancePx": 3, "profileTolerancePass": false, "shaftInnerWallXs": [374, 827], "carFit": {"sourceNativeSize": [1400, 2000], "scale": 0.19, "canvasSize": [266, 380], "visibleBodyHeightPx": 311.6, "placementX": 470, "canvasTopYFormula": "landingFloorY-345.8", "at380pxCanvasWidth": "visible car body exceeds shortest landing pitch;use0.19scale or builder fit"}}]. Review:0 design blockers,0 design should fix;new plate profile tolerance miss reported. 5906characters,estimated528s,notes45s;voice0/cost0,measurednotcreated. Manifest assets/brief238-manifest.json:17platesdelivered,5held,5pending. Continuingremainingeligibleplates.

## Brief238 i12 plates hand-in,9 November2026

Delivered public\assets\maths\ma12-garden-cut-fill-v1.png, public\assets\maths\ma12-stone-footbridge-v1.png (1600x1000, 1400x900,RGBA). Built-in imagegen plus authorised local pixel finishing; operations,hashes and source candidates in docs\production\claude-pm\assets\ma12-i12-provenance.json. Inspected garden paper600/1200px wide,bridge470/940px wide,black/white edges and red requested-profile overlays. Both native geometries retain visible mismatches,reported with measured points;no deformation. Garden endpoints are hidden by pegs;inward surface samples and6px uncertainty explicitly reported. Bridge opening genuinely transparent.8% margins pass. Shared AC handoff remains held with i13. Measurements: [{"stringEnds": [[250, 467], [1346, 467]], "stringUncertaintyPx": 3, "surfaceSamples": [{"mathX": -1.0, "samplePixel": [280, 661], "endpointOccluded": true, "targetPixel": [200, 824]}, {"mathX": -0.75, "samplePixel": [387, 623], "endpointOccluded": false, "targetPixel": [350, 685.4]}, {"mathX": -0.5, "samplePixel": [524, 532], "endpointOccluded": false, "targetPixel": [500, 566]}, {"mathX": -0.25, "samplePixel": [661, 479], "endpointOccluded": false, "targetPixel": [650, 509]}, {"mathX": 0.0, "samplePixel": [798, 465], "endpointOccluded": false, "targetPixel": [800, 500]}, {"mathX": 0.25, "samplePixel": [935, 457], "endpointOccluded": false, "targetPixel": [950, 491]}, {"mathX": 0.5, "samplePixel": [1072, 417], "endpointOccluded": false, "targetPixel": [1100, 434]}, {"mathX": 0.75, "samplePixel": [1209, 324], "endpointOccluded": false, "targetPixel": [1250, 314.6]}, {"mathX": 1.0, "samplePixel": [1316, 243], "endpointOccluded": true, "targetPixel": [1400, 176]}], "surfaceMeasurementUncertaintyPx": 6, "endpointNote": "Timber pegs obscure endpoints;surface samples are30px inside either peg,not exact endpoint claims. Centre surface overlaps string and is approximate.", "originApprox": [798, 467], "actualHorizontalPxPerMetre": 548, "targetPxPerMetre": 600, "profileTolerancePass": false, "builderFitRequired": true}, {"springingPointsApprox": [[326, 658], [1076, 658]], "crownPoint": [700, 388], "quarterSamples": [[477, 444], [923, 448]], "measurementUncertaintyPx": 4, "targetSpringingPoints": [[229, 700], [1171, 700]], "targetCrown": [700, 400], "targetQuarterPoints": [[464.4, 487.9], [935.6, 487.9]], "actualOpeningWidthApprox": 750, "actualCrownRiseApprox": 270, "targetOpeningWidth": 942, "targetCrownRise": 300, "profileTolerancePx": 4, "profileTolerancePass": false, "builderFitRequired": true, "openingAlphaInteriorSample": 0}]. Review:0 design blockers,1 should fix (NOTES-FIT);two plate profile misses for builder fit. 6202characters,estimated554s,notes45s;voice0/cost0,measurednotcreated. Manifest assets/brief238-manifest.json:19platesdelivered,5held,3pending. Continuingremainingeligibleplates.

## Brief238 i14 plates hand-in,9 November2026

Delivered public\assets\maths\ma12-robot-vacuum-top-v1.png, public\assets\maths\ma12-hallway-floor-v1.png, public\assets\maths\ma12-snow-post-v1.png (800x800, 2400x400, 900x2000,RGBA). Built-in imagegen plus authorised local pixel finishing; operations,hashes and source candidates in docs\production\claude-pm\assets\ma12-i14-provenance.json. Inspected robot150px onpaper,wholefloor repeated twice andblack/whiteedges,post280/560px tall. Floor joins visually continuous withRGBA edge difference0;top skirting intentionally touches top edge,onlylower margin required and62px clear. Post6major ticks234px apart,0cm tick atgroundbase;no digits or snow. Robot andpost8% margins pass. Measurements: [{"centreApprox": [379, 404], "bodyRadiusPxApprox": 249, "radiusUncertaintyPx": 5, "frontDirectionDegrees": 0, "sideBrushAt": "upperright;front points right"}, {"horizontalEdgeMaxRgbaDifference": 0, "centralJoinMaxRgbaDifference": 0, "transparentLowerMarginPx": 62, "skirtingEdge": "top", "boardsDirection": "horizontal"}, {"groundPointAtPostBaseApprox": [446, 1686], "majorTickYsTopToBottom": [516, 750, 984, 1218, 1452, 1686], "majorValuesCmTopToBottom": [250, 200, 150, 100, 50, 0], "majorPitchPx": 234, "tickSpacingMaxErrorPx": 0, "postCentreX": 446, "cmToYMapping": "y=1686-4.68*depthCm", "groundMeasurementUncertaintyPx": 4}]. Review:0 blockers,2 should fix (REFERENCE-POINT and STALE-UNITS retained). 5753characters,estimated520s,notes45s;voice0/cost0,measurednotcreated. Manifest assets/brief238-manifest.json:22platesdelivered,5held,0pending. Continuingremainingeligibleplates.

## Brief238 artwork complete and voice preparation,9 November2026

All19 full source reviews and live-site checks complete.22 eligible new plates delivered,5 held under i07/i11/i13,0 pending generation;rough35 resolved to27 named new assets. i01 also held from voice after observed growth-clearance blocker. Profile misses d16/i10/i12 reported without warping;builder fits actual geometry. Local pixel finishing expressly authorised.22 plate hashes plus provenance/reviews verified in local Drive mirror (work/brief238/drive-art-backup-check.json);cloud metadata not individually checked. Complete prior pack/audio backups verified in work/brief238/backup/verified-backups.json before preparing232 scenes across15 eligible designs. Recording-stage source checks pass;shared bath/AC handoff assets remain held. No design,scene or narration text edited.45s notes;prediction placements/built motion/human listening pending.25 of99 Google requests used this quota day;each whole lesson reserves its actual needed requests before first speech. Continue d15 onward,one voice/alignment job at a time,hand in each design.

## Brief238 d15 voice hand-in

math-a12-d15: docs/production/claude-pm/checks/m-a12-d15-redesign-learning-review.md: 0 blockers, 1 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-d15-redesign-maths-check.md: 0 maths blockers, 0 maths should fix, 0 maths optional. Layout finding238-D15-NOTES-FIT is in the companion learning review. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-skateboard-side-v1.png. 6364 reviewed narration characters across15 takes;1 exact-text takes served from cache;14 new requests. Total531.23s, notes45s. Selected new-request billed usage1577 input/11503 output tokens; estimatedUSD0.104316. Measureddocs/production/claude-pm/lessons/math-a12-d15/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.247s in scene-04;217 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:10 scenes, details inwork/brief238/voice-results/d15/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 d16 voice hand-in

math-a12-d16: docs/production/claude-pm/checks/m-a12-d16-redesign-learning-review.md: 0 blockers, 1 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-d16-redesign-maths-check.md: 0 maths blockers, 0 maths should fix, 0 maths optional. Notes-layout finding238-D16-NOTES-FIT is recorded in the learning review. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-barrel-vase-v1.png, public/assets/maths/ma12-kitchen-tap-v1.png. 5855 reviewed narration characters across14 takes;1 exact-text takes served from cache;13 new requests. Total497.00s, notes45s. Selected new-request billed usage1403 input/10647 output tokens; estimatedUSD0.096525. Measureddocs/production/claude-pm/lessons/math-a12-d16/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.146s in scene-01;191 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:11 scenes, details inwork/brief238/voice-results/d16/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 d17 voice hand-in

math-a12-d17: docs/production/claude-pm/checks/m-a12-d17-redesign-learning-review.md: 0 blockers, 2 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-d17-redesign-maths-check.md: 0 maths blockers, 0 maths should fix, 0 maths optional. The two source/build-fit findings are in the companion learning review. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-pen-wall-v1.png. 6430 reviewed narration characters across18 takes;0 exact-text takes served from cache;18 new requests. Total535.63s, notes45s. Selected new-request billed usage1574 input/11708 output tokens; estimatedUSD0.106159. Measureddocs/production/claude-pm/lessons/math-a12-d17/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.244s in scene-07;218 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:13 scenes, details inwork/brief238/voice-results/d17/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 d18 voice hand-in

math-a12-d18: docs/production/claude-pm/checks/m-a12-d18-redesign-learning-review.md: 0 blockers, 2 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-d18-redesign-maths-check.md: 0 maths blockers, 0 maths should fix, 0 maths optional. The two wording/layout findings are in the learning review. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-pen-wall-v1.png, public/assets/maths/ma12-stone-wall-top-v1.png, public/assets/maths/ma12-card-texture-v1.png. 5677 reviewed narration characters across13 takes;1 exact-text takes served from cache;12 new requests. Total461.10s, notes45s. Selected new-request billed usage1309 input/9749 output tokens; estimatedUSD0.088396. Measureddocs/production/claude-pm/lessons/math-a12-d18/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.551s in scene-05;179 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:10 scenes, details inwork/brief238/voice-results/d18/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 d19 voice hand-in

math-a12-d19: docs/production/claude-pm/checks/m-a12-d19-redesign-learning-review.md: 0 blockers, 2 learning/build should fix, 0 optional. One further maths should-fix finding is in the companion report.; docs/production/claude-pm/checks/m-a12-d19-redesign-maths-check.md: 0 blockers, 1 should fix, 0 optional. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: . 6352 reviewed narration characters across15 takes;1 exact-text takes served from cache;14 new requests. Total517.97s, notes45s. Selected new-request billed usage1487 input/11170 output tokens; estimatedUSD0.101273. Measureddocs/production/claude-pm/lessons/math-a12-d19/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.204s in scene-03;202 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:15 scenes, details inwork/brief238/voice-results/d19/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 five Maths voice hand-ins and quota hold,9 November2026

d15-d19 measured and individually handed in.30,678 reviewed characters,75 takes (71 new requests,4 exact-text cached takes),2542.9333s combined,estimatedUSD0.496668 newly incurred. All five under570s,notes45s each;all bold cues timed and1007 caption cues exported.295 pack/audio/caption/report hashes verified in local Drive mirror;work/brief238/voiced-backup-check.json. Cloud metadata not individually checked. Machine details remain in each hand-in: no repeated requests or quiet signal blocks>=1.5s;low-confidence alignment words flagged. d18 scene02 has8 saturated samples and d19 scene13 has4,all isolated single-sample peaks around0.28-0.30s. See work/brief238/near-full-scale-analysis.json. Possible clipping/audibility needs human listening;no speech or audio edits made after these hand-ins.

96 of99 requests used in quota day2026-11-08 (resets19:00Sydney9November). i02 needs15 requests;whole-lesson preflight stopped before speech. Remaining eligible voice queue:i02,i03,i04,i05,i06,i08,i09,i10,i12,i14. i01/i07/i11/i13 remain held for reported blockers;source edits belong to Claude. All19 full reviews complete;22 eligible plates delivered,5 held. Shared bath/AC handoff plates held and profile misses retained as logged. Canonical measured paths docs/production/claude-pm/lessons/math-a12-d15 throughd19/measured/lesson.json. Human listening and built motion pending. Continue from i02 after reset using current freshness/quota checks;do not revoice d15-d19. No renderer or voicing job active now.

## Brief198 b04 playback recovery,9 November2026

Existing v2 master hash77ede6f2fa5d4009c532766fb9ca78fd3b02c2c7bef77f769e480798fb58315d unchanged;no re-render. Native VLC computer use works,Speed1.00x confirmed. Targeted gene zoom/return and carrier/gamete sections observed at33,39,47,157,163,165,170,175,180s. No missing artwork or unexpected fallback font seen in these observations. New finding198-B04-CARRIER-COPY-LABEL:at163s carrier caption says every gene once,while each letter occurs twice across its four chromosome rows;the later balanced gamete has one of each. Evidence work/brief198/bio-m6-b04/carrier-caption-163s.png,playback-nov09.json;source s2.tsx:193. Replacement held for Claude caption reconciliation and remaining full-package gates. Continuous motion review and human listening pending;not a whole-film playback pass. OwnerB+override remains valid for the14 named replacements;brief199 stays separate. Continuingb05.

## Brief236 Wave1 recording preparation,9 November2026

Wave1 all13 current scripts hashed and mechanically checked:79,443 scene-sum characters,209 scenes,no em dashes. Partial bold-cue matches in v01/v03/v08/v09/ws-v02 manually confirmed inside longer quoted spoken phrases. Existing independent reviews and root readiness decision34 retained,including allowed old-check hash differences after count/status repairs. Canonical recording inputs use each design build key c-y11-m1-v01..v10,c-y11-ws-v01..v03;all13 scripts/check-recording-gate.mjs results ready. Source records,hold plans and readiness rows in work/brief236/wave1/;queue work/brief236/wave1-preparation.json,backups work/brief236/backup/verified-backups.json,official results wave1-official-recording-gates.log. Notes requested45s,explicit3s predictions and10s attempts preserved. No236 speech requested,cost0,measured outputs absent.96of99 Google requests already used,so238i02 remains first after19:00Sydney reset;236wave1 follows238.237 remains scheduled after236wave2. OwnerB+replacement authorisation from6Nov verified at status.md prior hand-in and work/replacement-A-gate-queue.json;using quota wait for the already-authorised replacement queue.

## Brief198 b05 guarded v2 render started,9 November2026

Fresh frame-by-frame asset collection,18 image/font browser decodes and16 stills passed. All16 fresh states visually compared with ClaudeB+sheet;no material difference observed. Original6Nov check files retained. Only renderer script and asset guard had changed since the prior408-file freeze;lesson/scene/audio inputs unchanged. New408-file source/audio freeze and18 public-asset hashes:work/brief198/bio-m6-b05/nov09-pre-render/frozen-before-render.json. Reference and comparison hashes in pre-render-summary.json;fresh pre-render-sheet.jpg/pre-render-comparison.jpg. Owner6Nov B+override applies. Starting v2 at concurrency2 on normalC scratch,retaining chunks. Expected14755frames,491.8333s. Master,scan,captions,playback and replacement publication pending. No design or narration edits.

## Brief199 live C05/C10 link resolution,9 November2026

Outstanding live-title check completed in native in-app browser: NJjEgjilgAE is chem-m5-c05,The Equilibrium Constant,K:Writing Expressions;PL415_P6F6w is chem-m5-c10,Ka,Kb and Ksp:Equilibrium Constants for Acids,Bases and Salts. Current visible headings and document titles agree. C10 row in quality-fixes/fix-plan.md corrected to only its own URL. Evidence work/brief199/live-link-resolution-nov09.json;prior p06-and-link-check.md augmented. youtube-links.json absent from this checkout and prior site-root location. No external changes;215 remains shelved. p06 verdict already finished and not repeated. Four199 render holds remain separately reported;ownerB+exception for198/200-205 does not cover199.

## Brief232 v01 repair check,9 November2026

phys-y12-m6-v01 Revision2:0 blockers,0 should fix,0 optional. Both189 findings resolved (acceleration named;charge magnitude in oil balance). Eight live-control cases and both attempts recalculated;written m5-v23/v01/v02 joins match.6162characters,estimated552s,16scenes,no em dashes. Reused plates exist and source requests uniform scaling. Report checks/p-y12-m6-v01-rev2-error-check.md;calculations/source/plate hashes in work/brief232/v01-calculations.json. Source-only;build/voiced preview/human listening pending. Light check ran beside the sole b05 render;no second heavy job.

## Brief232 v02 repair check,9 November2026

phys-y12-m6-v02 Revision2:0 blockers,0 should fix,0 optional. Three189 findings resolved:collision-constrained doubled length,honest tangent relation and scoped acceleration comparison. All live-control cases,screen drift,hit positions and A1 recalculated.6119characters,estimated551s,16scenes,no em dashes;source cue order and v01/v02/v03 joins match. Report checks/p-y12-m6-v02-rev2-error-check.md;work/brief232/v02-calculations.json. CRT native retry then possible accepted coded fallback still pending. Source-only;build/motion/listening pending. Sole heavy job remainsb05 render.

## Brief232 v03 repair check,9 November2026

phys-y12-m6-v03 Revision2:0 blockers,0 should fix,0 optional. Three189 should-fix findings and optional relativistic comparison resolved. Dial/energy/speed/alpha/retarding readouts recalculated,including4.16323996e7m/s relativistic5kV speed and97.705566eV trajectory work.6013characters,estimated541s,16scenes,no em dashes;cue pushed and written v02/v03/v04 joins match. Report checks/p-y12-m6-v03-rev2-error-check.md;work/brief232/v03-calculations.json. Shared CRT retry still pending. Source-only;build/motion/listening pending. Sole heavy job remainsb05 render.

## Brief232 v04 repair check,9 November2026

phys-y12-m6-v04 Revision2:0 blockers,0 should fix,0 optional. Prior aurora finding resolved and checked against NOAA/NASA primary explanations. Angle/force/component readouts and all direction vectors independently recalculated;written joins match.5641characters,17scenes,estimated516s,no em dashes. Existing horseshoe/solar/Earth plates present;no new request. Report checks/p-y12-m6-v04-rev2-error-check.md;calculations work/brief232/v04-calculations.json. Source-only;integrated motion/listening pending. B05 remains the sole heavy render.

## Brief232 v05 repair check,9 November2026

phys-y12-m6-v05 Revision2:0 blockers,2 should fix,0 optional. Shared-launch protons moving up in B into page require centres left,but revised scene7 puts them right. Assets kit gap5 still requests concentric orbits despite the accepted shared-launch/separate-centre repair. No source edits. All r/T/a slider and worked values recalculated and numerically correct;written joins match.5624characters,17scenes,estimated514s. Report checks/p-y12-m6-v05-rev2-error-check.md;work/brief232/v05-calculations.json. Motion/listening pending. B05 remains the sole heavy render.

## Brief232 v06 repair check,9 November2026

phys-y12-m6-v06 Revision2:0 blockers,0 should fix,0 optional. Prior equal-charge analyser condition repaired in narration and both+e labels. Speed/force/net slider values,80V/2cm field,attempt quotients and direction vectors recalculated;root-approved schematic initial deflections retained.5603characters,16scenes,estimated510s;written v05/v06/v07 joins match. Report checks/p-y12-m6-v06-rev2-error-check.md;work/brief232/v06-calculations.json. Integrated motion/listening pending. B05 remains the sole heavy render.

## Brief232 v07 repair check,9 November2026

phys-y12-m6-v07 Revision2:0 blockers,0 should fix,0 optional. Voice-coil end-on/side-section repair independently checked by six cross products;angle/current/force readouts,coil lengths and worked/attempt values recalculated.5992characters,14scenes,estimated541s;written joins match;seven used plates present with uniform scaling. Report checks/p-y12-m6-v07-rev2-error-check.md;work/brief232/v07-calculations.json. Camera/coil motion and listening pending. B05 remains the sole heavy render.

## Brief232 v08 repair check,9 November2026

phys-y12-m6-v08 Revision2: 0 blockers,0 should fix,0 optional. Prior method optional resolved by centre separation,lead-force control and limitations. Both live controls,dataset/origin fit,worked/attempt and ampere values recalculated.6308characters,15scenes,estimated564s;written joins match. Ten used plates present,uniform scaling specified. Report checks/p-y12-m6-v08-rev2-error-check.md;work/brief232/v08-calculations.json. Source-only;integrated motion/listening pending. B05 remains the sole heavy render.

## Brief232 v09 repair check,9 November2026

phys-y12-m6-v09 Revision2:0 blockers,0 should fix,0 optional. Root opening/inset and retained analogy/negative-flux decisions followed. Six cosine/flux dial stops,worked/attempt and crossed-slip values recalculated;written joins match.5595characters,15scenes,estimated511s. Four used plates present with uniform scaling;meter/needle canvas sizes match. Report checks/p-y12-m6-v09-rev2-error-check.md;work/brief232/v09-calculations.json. Integrated motion/listening pending. B05 remains the sole heavy render.

## Brief232 v10 repair check,9 November2026

phys-y12-m6-v10 Revision2:0 blockers,1 should fix,0 optional. New scene5 gradient readout needs-8Wb/s on falling segment,while |emf| remains8V;new text currently gives both+8. Prior doubled-emf/illustrative-needle repair and changed emf cue are correct. All graph,rod-slider,worked/attempt numbers recalculated.6187characters,14scenes,estimated556s;written joins match. Report checks/p-y12-m6-v10-rev2-error-check.md;work/brief232/v10-calculations.json. No source edits;integrated motion/listening pending. B05 remains the sole heavy render.

## Brief232 v11 repair check,9 November2026

phys-y12-m6-v11 Revision2:0 blockers,0 should fix,0 optional. Prior handoff finding and illustrative-drop optional resolved. Relative speed/current/force1/2/3 and power/heat1/4/9 independently checked under the stated same-position/fixed-R model;all pole/current/force directions agree.5705characters,14scenes,estimated519s;written joins match. Report checks/p-y12-m6-v11-rev2-error-check.md;work/brief232/v11-calculations.json. Integrated motion/listening pending. B05 remains the sole heavy render.

## Brief232 v12 repair check,9 November2026

phys-y12-m6-v12 Revision2:0 blockers,1 should fix,0 optional. AC graph still refers to author note c negative cosine,contradicting the new positive switch-on/right-needle sign convention;reconcile graph instructions. Ideal unloaded assumptions and static/dimmed AC meter repair are correct. Ramp rates/emf/pulse areas,phase magnitudes and worked/site values recalculated.5705characters,16scenes,estimated519s;written joins match. Report checks/p-y12-m6-v12-rev2-error-check.md;work/brief232/v12-calculations.json. No source edits;integrated motion/listening pending. B05 remains the sole heavy render.

## Brief232 v13 repair check,9 November2026

phys-y12-m6-v13 Revision2:0 blockers,0 should fix,0 optional. Prior AC-arrow optional resolved by labelled rising-flux instant and cancelling extra primary field. All four turns-slider stops,load cases,per-turn counter,worked/attempt values independently recalculated;power and ampere-turn checks agree.6349characters,16scenes,estimated552s;written joins match. Report checks/p-y12-m6-v13-rev2-error-check.md;work/brief232/v13-calculations.json. Four used plates present,uniform scaling. Integrated motion/listening pending. B05 remains the sole heavy render.

## Brief232 v14 repair check,9 November2026

phys-y12-m6-v14 Revision2:0 blockers,0 should fix,0 optional. Both prior findings resolved:example-only winding-loss ranking and scoped MEPS tag/broad efficiency wording. Official oil-immersed half-load minima98.28to99.40percent rechecked;dry-type restriction preserved. Current/sheet slider,efficiency and worked/attempt arithmetic agree.5841characters,16scenes,estimated513s;written joins match. Report checks/p-y12-m6-v14-rev2-error-check.md;work/brief232/v14-calculations.json. Five used plates present,uniform scaling. Integrated motion/listening pending. B05 remains the sole heavy render.

## Brief232 v15 repair check,9 November2026

phys-y12-m6-v15 Revision2:0 blockers,0 should fix,0 optional. All three prior findings and author-limit optional resolved:model/real-grid voltage distinction,tens-of-kV generator fallback,nominal230V wording,and separate78.125MW received/312.5MW sent limits. All slider,ledger,worked/attempt values recalculated.5899characters,17scenes,estimated518s;written joins match. Report checks/p-y12-m6-v15-rev2-error-check.md;work/brief232/v15-calculations.json. Eight used plates present,uniform scaling. Integrated motion/listening pending. B05 remains the sole heavy render.

## Brief232 v16 repair check,9 November2026

phys-y12-m6-v16 Revision2:0 blockers,0 should fix,0 optional. No prior finding;root sine/area-normal convention and smoothing keep decisions followed. Angle-drag,torque/force/area,units slip and attempt values recalculated;commutator/direction logic agrees.6398characters,16scenes,estimated550s;written joins match,including root-reconciled v17 entry. Report checks/p-y12-m6-v16-rev2-error-check.md;work/brief232/v16-calculations.json. Two used plates present,uniform scaling. Integrated motion/listening pending. B05 master assembly remains the sole heavy job.

## Brief232 v17 repair check,9 November2026

phys-y12-m6-v17 Revision2:0 blockers,0 should fix,0 optional. Prior blocker,should-fix and startup optional resolved;root-accepted helping-emf proof gives11A,132W supplied,242W heat and110W excess. All speed-slider and power-ledger cases recalculated,including near-stall conversion decrease.6556characters,16scenes,estimated564s;written joins match. Report checks/p-y12-m6-v17-rev2-error-check.md;work/brief232/v17-calculations.json. Ten used plates present,uniform scaling. Integrated motion/listening pending. Sole heavy job is B05 post-render picture scan.

## Brief232 v18 repair check,9 November2026

phys-y12-m6-v18 Revision2:0 blockers,0 should fix,0 optional. No prior finding;qualitative scope and root-approved side-view/coded-end rotor handoff retained. Angle/flux/emf and speed/peak/frequency controls recalculated,including full-cycle output signs and3000rpm two-pole case.6300characters,16scenes,estimated543s;written joins match. Report checks/p-y12-m6-v18-rev2-error-check.md;work/brief232/v18-calculations.json. Six used plates present,uniform scaling. Integrated motion/listening pending. Sole heavy job remains B05 picture scan.

## Brief232 v19 repair check,9 November2026

phys-y12-m6-v19 Revision2:0 blockers,0 should fix,0 optional. Both prior findings resolved:slip scoped to working torque/load,and four-pole stator with explicit two-pole bridge preserves root/site1500/1425rpm. All four slip/grip stops and wrong-denominator slip recalculated.6462characters,16scenes,estimated558s;written joins match. Report checks/p-y12-m6-v19-rev2-error-check.md;work/brief232/v19-calculations.json. Four used plates present,uniform scaling/coded end views. Integrated motion/listening pending. Sole heavy job remains B05 picture scan.

## Brief232 v20 repair check,9 November2026

phys-y12-m6-v20 Revision2:0 blockers,0 should fix,0 optional. Prior pendulum-energy finding resolved by exchanging K/gravitational parts and decreasing total into heat. Coaster critical-speed and integrated fit remain explicit build holds. Four K/heat readouts conserve600000J;free-fall time and force directions agree.6502characters,16scenes,estimated558s;written joins match through m7-v01. Report checks/p-y12-m6-v20-rev2-error-check.md;work/brief232/v20-calculations.json. Seven used plates present,uniform scaling;plastic tube coded. All20 source checks now handed in;required CRT retry/manifests still pending. Sole heavy job remains B05 picture scan.

## Brief232 complete hand-in,9 November2026

All20 Revision2 error-only checks handed in individually. Totals:0 blockers,4 should fix,0 optional. Findings:v05 shared-launch centre direction and stale concentric kit instruction;v10 falling-segment gradient sign;v12 AC sign-reference contradiction. Reports checks/p-y12-m6-v01-rev2-error-check.md throughv20;source hashes,independent calculations,counts and written joins in work/brief232. No design,narration,scene,speech or commit changes.

One prescribed native/exact-geometry CRT retry was submitted to built-in image_gen. Tool rejected output (moderation_blocked,output stage,violence category);no image returned,so no native-resolution or geometry QA can be claimed. No additional attempt made. Root's7Nov accepted coded-outline fallback is now recorded for v02/v03,with50mm plates,20mm gap,200mm after-exit screen spacing at one scale. Evidence/prompt work/brief232/crt-retry-and-fallback.json and crt-retry-prompt.txt. Brief189/190 manifests and v02/v03 provenance updated;originals hash-backed up under work/brief232/manifest-backup. Historical3of4 raster delivery stays explicit;CRT is resolved as coded design,not falsely marked painted/delivered. No scene implementation. Existing practical coverage gaps and coaster fit/critical-speed build hold remain. This hand-in does not approve voicing,integrated motion,listening or publication.

## Brief198 b05 local master hand-in,9 November2026

V2:out/explainer/Explainer-bio-m6-b05/Explainer-bio-m6-b05-v2.mp4,14755frames,491.833333s,1920x1080/30fps,48kHz AAC,48,108,148bytes,SHA256acb09560c6dea20e60ed47ae2f2619eb99d7cfa7b1e1015cfb15b0d37675319d.408source/audio hashes and18public assets match the pre-render freeze.120picture samples:0broken-image flags;one authored opening/header2013 sample at2.033s resolved visually.120font samples:0serif flags. Four boards,16rendered states,endpoints and flagged sample inspected;matches ClaudeB+reference. Sheet work/brief198/bio-m6-b05-v2-sheet.jpg. Targeted native1x playback observed at listed times through470s;no new missing art,fallback font or overlap seen;sampling/human-listening limits explicit. Report work/brief198/bio-m6-b05/nov09-pre-render/build-report.md and playback-nov09.json.174unchanged caption texts exported on exact playback timing;old timestamps lead this v2 timeline progressively,so use captions-v2.176files plus5completed reports hash-verified on mounted Drive mirror. V1/chunks retained. Live metadata/settings/AI/playlist verification,upload/publication/new link/readback still pending;no replacement claim yet.

## Brief198 b05 Studio upload in progress,9 November2026

Computer use/Chrome Studio working. Live v1 metadata/settings read;current visible playlist position9 between ldAXVZXHFuM and _7FscIH2HHI,Manual,one hidden unavailable video preserved. Checked v2 uploaded as private draft XxWrxQQkQWU. Studio Reuse details copied exact title,description/dotpoints,playlist,AU language,remixing and Education category from v1;not-Made-for-Kids and AI Yes set and read back. Thumbnail2still generating;captions,checks/publication,playlist reorder and v1unlisting pending. No public replacement claim. Record work/brief198/b05-live-progress.json.

## Brief198 b05 replacement completed,9 November2026

Published https://youtu.be/XxWrxQQkQWU from checked v2 master out/explainer/Explainer-bio-m6-b05/Explainer-bio-m6-b05-v2.mp4 (14755frames,491.833333s;SHA256 acb09560c6dea20e60ed47ae2f2619eb99d7cfa7b1e1015cfb15b0d37675319d). YouTube HD complete,Public,no notices. Original title/full description/verbatim dotpoints and copied settings preserved;not Made for Kids,not adult-only,AI Yes,English(Australia),Education,thumbnail2. Exact-playback174-cue SRT published as English(Australia) by you;old timing was not reused. Copyright/Community Guidelines checks found no issues. No end screen because final notes fill screen;no cards added.

Playlist PLOXPcalkg-iI reloaded and read back: original available order preserved,new B05 at visible9 between ldAXVZXHFuM and _7FscIH2HHI.23available entries,one unavailable entry retained. Old fyvYjlBBRmk removed from playlist and saved Unlisted,not deleted. Historical upload/audit IDs retained with explicit replacement record;current fix-plan link updated. Record youtube/brief198-b05-replacement-2026-11-09.json and work/brief198/b05-live-progress.json. Previous local-master hand-in covers scans,contact sheet,backup and sampled native1x playback;no new playback findings or A-grade claim. B04 stays held for198-B04-CARRIER-COPY-LABEL;do not repeat its render. Proceed to brief200 B07.

## Brief233 v01 repair check,9 November2026

phys-y12-m7-v01 Revision2:0 blockers,0 should fix,0 optional. Prior denominator grouping and cue findings resolved. All dial/ribbon values and new crossed slips recalculated.6087characters,14scenes,estimated527s;written joins m6-v20/v01/v02 match. Report checks/p-y12-m7-v01-rev2-error-check.md;work/brief233/v01-calculations.json and v01-used-plates.jpg. Four plates exist and were visually inspected;uniform scaling specified. Integrated motion/listening pending. Sole heavy job B07 pre-render comparison.


## Brief200 b07 pre-render passed,9 November2026

406source/audio inputs frozen,24public paths decoded,14123frames. Fresh16states match Claude B+sheet on actual side-by-side inspection;owner named exception applies. No source changes,missing plate or font failure. Work/brief200/bio-m6-b07/nov09-pre-render holds freeze,asset report,playback snapshot and comparison. Starting sole heavy job v2 render,concurrency2,guards unchanged,v1 retained. Post-render scans,captions,native changed-scene playback and YouTube replacement remain.

## Brief233 v02 repair check,9 November2026

phys-y12-m7-v02 Revision2:0 blockers,0 should fix,0 optional. Three prior findings resolved:grouped times,GPS range wording,and full distance cue phrases. Wheel110.229/55.115microseconds,GPS299.792m,and all changed slips/ranging values recalculated.6123characters,14scenes,estimated529s;written joins match. Report checks/p-y12-m7-v02-rev2-error-check.md;work/brief233/v02-calculations.json and v02-used-plates.jpg. Ten used plates present;new unmarked sensor remains required after reviews for v02/v08. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v03 repair check,9 November2026

phys-y12-m7-v03 Revision2:0 blockers,0 should fix,0 optional. Three prior findings and continuum optional resolved:four bright H lines,sodium ground-state absorber,observed-line matching,and mainly-temperature wording. Drop ratios1/1.35/1.512/1.60 recalculated;NIST H/Na lines and sodium levels rechecked9Nov.6291characters,15scenes,estimated542s;written joins match. Report checks/p-y12-m7-v03-rev2-error-check.md;work/brief233/v03-calculations.json and v03-used-plates.jpg. Six used plates present,uniform scaling. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v04 repair check,9 November2026

phys-y12-m7-v04 Revision2:0 blockers,0 should fix,0 optional. Prior rotation viewing-angle finding resolved throughout feedback,board and notes;pole-on case correct. Velocity/spin stops,whole-width crossed slip and both speed examples recalculated.6261characters,15scenes,estimated540s;written joins match. Report checks/p-y12-m7-v04-rev2-error-check.md;work/brief233/v04-calculations.json and v04-used-plates.jpg. Four plates present,white star matches root decision12,uniform scaling. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v05 repair check,9 November2026

phys-y12-m7-v05 Revision2:0 blockers,0 should fix,0 optional. Prior denominator and Newton-history findings resolved. Red13/26/52mm and green10.64/21.28/42.56mm sweeps recalculated;qualitative simulated readouts accepted by root11.6289characters,16scenes,estimated542s;written joins match. Report checks/p-y12-m7-v05-rev2-error-check.md;work/brief233/v05-calculations.json and v05-used-plates.jpg. Five plates present;whole laser raised on block per root10. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v06 repair check,9 November2026

phys-y12-m7-v06 Revision2:0 blockers,0 should fix,0 optional. Small-angle table repaired:0.145degree sin/tan round0.002531;crossed30degree row correct. All five spacing stops and new crossed conversion slip recalculated.6253characters,16scenes,estimated539s;written joins match. Report checks/p-y12-m7-v06-rev2-error-check.md;work/brief233/v06-calculations.json and v06-used-plates.jpg. Six plates present,uniform scaling and whole-laser block retained. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v07 repair check,9 November2026

phys-y12-m7-v07 Revision2:0 blockers,0 should fix,1 optional. Prior denominator and small-tilt findings resolved;new wavelength/peak-width/tilt readouts recalculate. Optional author-only atan(0.268) intermediate is15.002716degrees,not14.999;learner15.0degree/647nm unchanged.6157characters,16scenes,estimated532s;written joins match. Report checks/p-y12-m7-v07-rev2-error-check.md;work/brief233/v07-calculations.json and v07-used-plates.jpg. Six plates present,uniform scaling. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v08 repair check,9 November2026

phys-y12-m7-v08 Revision2:0 blockers,0 should fix,0 optional. Prior ideal-filter and lux-unit findings resolved. New40/20/10/0 slider and34.6 crossed slip correct;illustrative fit approximately480lux with nonzero noisy intercept,not an exact measured law.6283characters,16scenes,estimated541s;v08/v09 written join matches. Report checks/p-y12-m7-v08-rev2-error-check.md;work/brief233/v08-calculations.json and v08-used-plates.jpg. Six existing plates present;new unmarked sensor still required after reviews. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v09 repair check,9 November2026

phys-y12-m7-v09 Revision2:0 blockers,0 should fix,0 optional. Prior n=0,denominator and infrared findings resolved. All five Wien-slider peaks,9993K/6900K answers and author packet checks recalculate;3D counter remains cumulative.6442characters,18scenes,estimated555s;written joins match. Report checks/p-y12-m7-v09-rev2-error-check.md;work/brief233/v09-calculations.json and v09-used-plates.jpg. Six plates present,uniform scaling. Registered glow raster held,coded element overlay accepted by root17;optional retry/rod rectangle after reviews. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v10 repair check,9 November2026

phys-y12-m7-v10 Revision2:0 blockers,1 should fix,0 optional. All prior findings resolved. New scene9 stop289nm is4.293508547eV,rounds4.29,below4.3;design says4.30 and bar exactly level. Correct numeric stop/bar before build;no speech change. Other slider values,delay and potassium cases recalculate.6277characters,18scenes,estimated541s;written joins match. Report checks/p-y12-m7-v10-rev2-error-check.md;work/brief233/v10-calculations.json and v10-used-plates.jpg. Four plates present,uniform scaling. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v11 repair check,9 November2026

phys-y12-m7-v11 Revision2:0 blockers,0 should fix,1 optional. Prior force,main sodium rounding,denominator and plateau findings resolved. Optional displayed guard-factor product is3.644312e-19,not3.645e-19;final3.64e-19 unchanged. Full endpoint chain and new ideal marker recalculated.6158characters,17scenes,estimated529s;written joins match. Report checks/p-y12-m7-v11-rev2-error-check.md;work/brief233/v11-calculations.json and v11-used-plates.jpg. Seven plates present,uniform scaling. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v12 repair check,9 November2026

phys-y12-m7-v12 Revision2:0 blockers,1 should fix,0 optional. Three prior history/measurement findings resolved. Scene3 coasting visual speeds up starfield while ball stays fixed;continuous ship acceleration requires ball drift,so use separate steady-speed cases or fixed scroll until thrust. No speech change. New source-speed transit values recalculate.6351characters,18scenes,estimated549s;written joins match. Report checks/p-y12-m7-v12-rev2-error-check.md;work/brief233/v12-calculations.json and v12-used-plates.jpg. Six plates present,uniform scaling. Integrated motion/listening pending. Sole heavy job B07 v2 render.


## Brief233 v13 repair check,9 November2026

phys-y12-m7-v13 Revision2:0 blockers,1 should fix,0 optional. Prior ideal-muon-model finding resolved. Scene8 new clock slider says ink Earth clock lags/barely moves,opposite its ship:Earth1:gamma ratio;moving teal ship clock must lag in Earth-frame comparison. No speech change. All gamma,muon,pion and trip values recalculated.6395characters,18scenes,estimated552s;written joins match. Report checks/p-y12-m7-v13-rev2-error-check.md;work/brief233/v13-calculations.json and v13-used-plates.jpg. Five plates present,uniform scaling. Integrated motion/listening pending. Sole heavy job B07 v2 render.

## Brief233 v14 repair check, 9 November 2026

phys-y12-m7-v14 Revision 2: 0 blockers, 1 should fix, 0 optional. Actual narration, frame-pairing example and ideal muon label repaired; Boundary/scene-10 heading/teaching shorthand retain the rejected overbroad one-effect-per-frame rule. Align author instructions before build; no speech change. All slider, inverse-length and muon calculations checked. 6423 characters, 17 scenes, estimated 557 s; written joins match. Report checks/p-y12-m7-v14-rev2-error-check.md; work/brief233/v14-calculations.json and v14-used-plates.jpg. Four plates visually inspected, uniform scaling. Integrated motion/listening pending. Sole heavy job B07 v2 render.

## Brief233 v15 repair check, 9 November 2026

phys-y12-m7-v15 Revision 2: 0 blockers, 1 should fix, 0 optional. Prior Earth-time, momentum-partition and LHC-label findings resolved. New constant-force animation calls 0.5/1/2 m0c equal steps; use equal increments per equal beat or proportional continuous timing/intermediate steps, including 3-to-10 jump. No speech change. Probe, proton, electron, historical LHC and site-note numbers recalculate. 6017 characters, 18 scenes, estimated 523 s; written joins match. Report checks/p-y12-m7-v15-rev2-error-check.md; work/brief233/v15-calculations.json and v15-used-plates.jpg. Four plates visually inspected, uniform scaling. Integrated motion/listening pending. Sole heavy job B07 v2 render.

## Brief233 v16 repair check, 9 November 2026

phys-y12-m7-v16 Revision 2: 0 blockers, 2 should fix, 0 optional. All prior findings repaired in learner scenes. Boundary/cause-chain mass-carried-away shorthand and universal any-balance teaching check remain stale; align author instructions with repaired system-rest-mass/ordinary-balance wording. No speech change. Solar, annihilation, combustion, slider and author calculations recalculate. 5750 characters, 17 scenes, estimated 503 s. Written v15 join matches; m8-v01 already includes/fades head-on/equal-energies tag. Report checks/p-y12-m7-v16-rev2-error-check.md; work/brief233/v16-calculations.json and v16-used-plates.jpg. Five plates visually inspected, uniform scaling. All sixteen reviews now recorded: 0 blockers, 7 should fix, 2 optional. Sensor plate and optional registered-glow retry/rectangle remain to finish brief233. Sole heavy job B07 v2 render.

## Brief233 completed, 9 November 2026

All16 Module7 Revision2 repair checks handed in individually:0 blockers,7 should fix,2 optional. Reports checks/p-y12-m7-v01-rev2-error-check.md through v16; source hashes, all calculations, joins and used-plate QA in work/brief233/. No design, narration, scene, speech, site edits or commits.

Delivered public/assets/physics/y12p-light-sensor-v1.png, native1112x1415 RGBA, SHA0672a4141edfddf39d1074c56680382a036429949d7a3a9856ba2cb2a72a125e, built-in image_gen from slide-holder reference. Clean left-facing dark window, cable right, matching grey carrier, no painted guides or plank. Cream/dark/white QA assets/brief191-qa/light-sensor-nov09.jpg. Window centre(431,572), foot baseline1128, carrier width906px, tolerance8px. At204.6px carrier width optical height125.56px versus slide154.76px: align whole objects with coded raisers as needed; no stretching or finished-bench claim. Prompt work/brief233/sensor-prompt.txt.

One approved local colour-only glow retry preserves1586x992 geometry and exact alpha, but visual QA shows rectangular tint/guard artifacts. Held work/brief233/held-bar-heater-glow-local.png, not published; no more retries. Root17 coded overlay remains accepted. Native coil bounds(365,439)-(1290,519); rod including ceramics(276,430)-(1360,541), right/bottom exclusive, tolerance4px. Clip glow to rod shape and keep guard in front. Report work/brief233/art-final-report.json; cold/hot and detail QA retained.

Brief191 manifest and v02/v08/v09 provenance updated with233 repairs/delivery; historical counts/findings retained and originals backed up in work/brief233/manifest-backup. Source repair findings need designer action before building; integrated motion/listening pending. Sole heavy job remains B07v2 render; next light task Brief234.

## Brief234 v01 repair check, 9 November 2026

phys-y12-m8-v01 Revision2:0 blockers,1 should fix,0 optional. All three prior findings repaired in actual scenes. Draft YouTube description/teaching shorthand retain categorical pair-making stops claim; align with rare production and energetic tail. No speech change. All cooling-dial, electron/proton/muon, helium-count and author values recalculate.6504characters,18scenes,estimated558s; written m7-v16/v01/v02 joins match including new grey tag fade. Report checks/p-y12-m8-v01-rev2-error-check.md;work/brief234/v01-calculations.json and v01-used-plates.jpg. Galaxy visually inspected on cream. All22 mechanical counts match; v22silent end hold counted as0, no source edits. Other21 full reviews pending. Sole heavy job B07v2 render.

## Brief234 v02 repair check, 9 November 2026

phys-y12-m8-v02 Revision2:0 blockers,0 should fix,0 optional. Prior guard-digit, cleaned-CMB, least-processed helium and optional Andromeda-arrow findings resolved. Every redshift slider/readout, retained distance calculation, Hubble time, CMB stretch and question value recalculated.6518characters,18scenes,estimated559s; written v01/v02/v03 joins match. Report checks/p-y12-m8-v02-rev2-error-check.md;work/brief234/v02-calculations.json and v02-used-plates.jpg. Three plates visually inspected on cream, uniform scaling. Integrated motion/listening pending. Sole heavy job B07v2 render.

## Brief234 v03 repair check, 9 November 2026

phys-y12-m8-v03 Revision2:0 blockers,0 should fix,0 optional. All six prior lamp-path, sodium-absorber, approximate3500K boundary,100% composition, same-class handoff and denominator findings repaired. All star-thermometer stops, photon energies and question values recalculate.6303characters,17scenes,estimated543s; written v02/v03/v04 joins match. Report checks/p-y12-m8-v03-rev2-error-check.md;work/brief234/v03-calculations.json and v03-used-plates.jpg. Six plates visually inspected on cream, uniform scaling. Integrated motion/listening pending. Sole heavy job B07v2 render.

## Brief234 v04 repair check, 9 November 2026

phys-y12-m8-v04 Revision2:0 blockers,1 should fix,0 optional. Prior arrow, same-class join and dated Sirius-B findings repaired. New scene5 about160px Sun enlarged tenfold requires1600px, exceeding1254px native despite its instruction; reduce starting width to<=125.4px or state schematic scaling. No speech change. HR-marker and radius calculations pass, including separately rounded Sirius marker.6067characters,17scenes,estimated525s; six-stage redesign and written v03/v04/v05 joins checked. Report checks/p-y12-m8-v04-rev2-error-check.md;work/brief234/v04-calculations.json and v04-used-plates.jpg. Five plates visually inspected on cream. Integrated motion/listening pending. Sole heavy job B07v2 render.

## Brief234 v05 repair check, 9 November 2026

phys-y12-m8-v05 Revision2:0 blockers,0 should fix,0 optional. Both prior CNO>about1.3solar-mass and equal-separation sixfold-force findings resolved. New curve-marker values independently recalculated from hash-verified AME2020 table, pp/CNO steps and question masses checked.6313characters,17scenes,estimated544s; written v04/v05/v06 joins match. Report checks/p-y12-m8-v05-rev2-error-check.md;work/brief234/v05-calculations.json and v05-used-plates.jpg. Three plates visually inspected on cream;760px cloud-edge check reserved for plates stage. Integrated motion/listening pending. Sole heavy job B07v2 render.

## Brief234 v06 repair check, 9 November 2026

phys-y12-m8-v06 Revision2:0 blockers,2 should fix,0 optional. Five prior findings and optional merger/identification dates repaired in learner scenes/title. Stale author25solar-mass duration list, ever-shorter clock instructions and universal charge explanation remain; align with15solar-mass table/overall acceleration and helium/carbon-only charge reasoning. No speech change. AME2020 energies, equations, slider and98-character title checked.6361characters,18scenes,estimated547s; written v05/v06/v07 joins match using delivered Maltese-cross tube. Report checks/p-y12-m8-v06-rev2-error-check.md;work/brief234/v06-calculations.json and v06-used-plates.jpg. Seven plates visually inspected on cream; usage-size fringe checks reserved for plates stage. Integrated motion/listening pending. Sole heavy job B07v2 render.

## Brief234 v07 repair check, 9 November 2026

phys-y12-m8-v07 Revision2:0 blockers,0 should fix,0 optional. Three prior signed-drop, denominator and CRT-assignment findings repaired. Root25/brief232 coded Thomson fallback accepted; delivered Maltese tube in opening/shadow scenes. Thomson, signed-charge, new Millikan slider, charge-axis and question values recalculate;600V hold is rounded599.5V balance.6075characters,18scenes,estimated523s; written v06/v07/v08 joins match. Report checks/p-y12-m8-v07-rev2-error-check.md;work/brief234/v07-calculations.json and v07-used-plates.jpg. Eight plates visually inspected on cream, uniform scaling; actual hub/gap registration stays a build check. Integrated motion/listening pending. Sole heavy job B07v2 render.

## Brief234 v08 repair check, 9 November 2026

phys-y12-m8-v08 Revision2:0 blockers,1 should fix,1 optional. Four prior findings and modern-size optional repaired in learner scenes. Stale author ticker/error brief retain10^8 instead of repaired1.1e7; align before build. Optional author light-target retention0.02 should be0.0123457, as Numbers already states0.012. No speech change. Closest approach, all new arm counts, collision and scale values recalculate.5918characters,17scenes,estimated514s; written v07/v08/v09 joins match. Report checks/p-y12-m8-v08-rev2-error-check.md;work/brief234/v08-calculations.json and v08-used-plates.jpg. Two plates visually inspected on cream, uniform scaling. Integrated motion/listening pending. Sole heavy job B07v2 render.

## Brief234 v09 repair check, 9 November 2026

phys-y12-m8-v09 Revision2:0 blockers,1 should fix,0 optional. Five prior findings repaired in learner scenes. Cause-chain/teaching shorthand still says no ionisation; align with repaired no-direct-ionisation tag and charged-recoil trail. No speech change. Speed attribution, historical90MeV distinction, maximum recoil conditions, new target slider and propagated0.911to1.415mass range checked.6159characters,18scenes,estimated529s; written v08/v09/v10 joins match. Report checks/p-y12-m8-v09-rev2-error-check.md;work/brief234/v09-calculations.json and v09-used-plates.jpg. Six plates visually inspected on cream, uniform scaling. Integrated motion/listening pending. B07v2 render still running: late browser-close warning followed by successful chunks13200–13499; final package check required.


## Brief200 B07 render completed, 9 November 2026

V2 render exited successfully: out/explainer/Explainer-bio-m6-b07/Explainer-bio-m6-b07-v2.mp4, 14123 frames, 470.766667 seconds, 1920x1080/30fps, 48kHz AAC, 46,558,946 bytes, SHA256 ea350fb9de952e4557e98718c8b61a9d44669c6adfb01466f56f8a41d777b026. All406 frozen source/audio files and24 public assets match. Late browser-close warning did not interrupt subsequent chunks or final mux.161 unchanged caption texts exported from exact playback timeline;148 cues need corrected times rather than old cumulative SRT. Native playback and120-sample checks in progress. Original live settings read back, Public/HD/not kids/not age-restricted/AI Yes; manual playlist live position11 between _7FscIH2HHI and PdcZY74Gywo. No upload or publication yet. Records work/brief200/bio-m6-b07/nov09-pre-render/master-checks.json, caption-v1-comparison.json and live-v1-preflight.json.

## Brief234 v10 repair check, 9 November 2026

phys-y12-m8-v10 Revision2:0 blockers,0 should fix,0 optional. Three prior findings and optional handoff wording repaired in actual scenes. All classical spiral frequencies/wavelengths, Larmor collapse, ground-state ionisation and Balmer boundary values recalculated.6037characters,21scenes,estimated523s; written v09/v10/v11 joins match. Report checks/p-y12-m8-v10-rev2-error-check.md;work/brief234/v10-calculations.json and v10-used-plates.jpg. Three plates visually inspected on cream, uniform scaling. Integrated motion/listening pending. B07v2 render complete; local playback and replacement checks continue.

## Brief234 v11 repair check, 9 November 2026

phys-y12-m8-v11 Revision2:0 blockers,1 should fix,0 optional. Both prior findings repaired in actual scenes: consistent visible boundary and grouped denominators. Draft description still says all four Balmer lines; qualify bright/prominent before publishing. No speech change. All slider energy/inverse-wavelength/wavelength stops and other calculations recalculate, including397nm visible and379.8nm UV crossing.6034characters,18scenes,estimated520s; written v10/v11/v12 joins match. Report checks/p-y12-m8-v11-rev2-error-check.md;work/brief234/v11-calculations.json and v11-used-plates.jpg. Three plates visually inspected on cream, uniform scaling. Integrated motion/listening pending. B07v2 local playback/replacement checks continue.

## Brief200 B07 local master hand-in, 9 November 2026

V2 out/explainer/Explainer-bio-m6-b07/Explainer-bio-m6-b07-v2.mp4,14123frames,470.766667s,1920x1080/30fps,48kHz AAC,SHA256 ea350fb9de952e4557e98718c8b61a9d44669c6adfb01466f56f8a41d777b026.406source/audio hashes and24asset copies match.120picture samples:0broken-image flags,1authored title reveal at154.933s resolved visually.120font samples:0flags. Four boards,16-frame sheet,endpoints inspected;matches ClaudeB+reference. Native normal-speed sampled playback and targeted seeks complete;known bead placement/sparse feedback retained,no new issue seen. Sampling/human-listening limits explicit.161unchanged caption texts exported from exact playback;148timings corrected.177files plus5completed reports hash-verified on mounted Drive mirror. Report work/brief200/bio-m6-b07/nov09-pre-render/build-report.md. Original live metadata/settings and manual playlist position11 verified. Upload/publication/unlisting/readback pending.

## Brief234 v12 repair check, 9 November 2026

phys-y12-m8-v12 Revision2:0 blockers,1 should fix,0 optional. Both prior findings repaired. New scene9 p=mv within0.3% chip confuses fixed-voltage wavelength approximation with momentum at the same speed; gamma correction is0.59to0.99%. Relabel the chip,no speech change. All tube voltage/speed/wavelength/radius readouts,54V/100V cases and other values recalculate.6268characters,18scenes,estimated535s; written v11/v12/v13 joins match. Report checks/p-y12-m8-v12-rev2-error-check.md;work/brief234/v12-calculations.json and v12-used-plates.jpg. Three plates visually inspected on cream, uniform scaling;root17/18 accepted tube retained. Integrated motion/listening/practical coverage pending. B07v2 private upload caption track published,YouTube release checks ongoing;B10 pre-render guard is sole heavy local job.

## Brief200 b10 pre-render passed,9 November2026

409source/audio inputs frozen,16public paths decoded,14422frames. Fresh16states match Claude B+sheet on actual side-by-side inspection;owner named exception applies. No source changes,missing plate or font failure. Work/brief200/bio-m6-b10/nov09-pre-render holds freeze,asset report,playback snapshot and comparison. Starting sole heavy job v2 render,concurrency2,guards unchanged,v1 retained. Post-render scans,captions,native changed-scene playback and YouTube replacement remain.

## Brief200 B07 replacement completed, 9 November 2026

Published https://youtu.be/PwZNyPBQ3TU from checked out/explainer/Explainer-bio-m6-b07/Explainer-bio-m6-b07-v2.mp4,14123frames,470.766667s,SHA256 ea350fb9de952e4557e98718c8b61a9d44669c6adfb01466f56f8a41d777b026. Public,HD complete,no notices;Copyright and Community Guidelines checks passed. Original title/full description/verbatim dotpoint and settings preserved;not Made for Kids,not adult-only,AI Yes,English(Australia),Education,thumbnail2.161-cue exact-playback SRT published;148old cue timings were corrected without text or speech changes. End screen skipped as original because final notes fill frame;no cards added.

Playlist PLOXPcalkg-iI reloaded:23available entries in original order,new B07 at visible11 between _7FscIH2HHI and PdcZY74Gywo,one unavailable entry retained. Old Z1jPRaPLHYk removed from playlist and saved Unlisted,not deleted. Fix-plan current link updated;historical upload/audit IDs retained with explicit replacement record. Record youtube/brief200-b07-replacement-2026-11-09.json and work/brief200/b07-replacement-package.json. Local checks:120picture samples0broken-image flags,one authored title reveal resolved;120font samples0flags;16-frame sheet and sampled native normal-speed review match accepted B+reference. Existing bead overlap,small clipped combination label and sparse feedback retained;no new encoded difference or A-grade claim.177files plus completed reports hash-backed up to mounted Drive mirror. B10 fresh pre-render passed and sole heavy v2 render is running;do not rerender B07.

## Brief234 v13 repair check, 9 November 2026

phys-y12-m8-v13 Revision2:0 blockers,0 should fix,0 optional. Prior one-electron-scope finding repaired in actual scenes/notes. New probability-probe amplitude/density stops recalculate from underlying36.667/52.9/105.8pm before rounded distance labels. Density slice,radial-probability distinction and many-electron approximation checked.5632characters,18scenes,estimated489s; written v12/v13/v14 joins match. Report checks/p-y12-m8-v13-rev2-error-check.md;work/brief234/v13-calculations.json and v13-used-plates.jpg. Two plates visually inspected on cream,uniform scaling;actual guitar-string overlay remains a build check. Integrated motion/listening pending. B10v2 sole heavy render continues;B07 replacement completed.

## Brief234 v14 repair check, 9 November 2026

phys-y12-m8-v14 Revision2:0 blockers,3 should fix,0 optional. Four prior findings repaired,including Sr90Q0.546MeV and two gamma photons. New notes5 omits photon energy;author F18 rounded-input equation gives0.63249rather than0.634;author alpha-momentum numerator should be1.0292e-19. No speech changes. All full AME2020Q values,selector940/622/88/27,question data,A/Z/chart and field checks recalculated.5620characters,18scenes,estimated490s;written v13/v14/v15 joins match. Report checks/p-y12-m8-v14-rev2-error-check.md;work/brief234/v14-calculations.json and v14-used-plates.jpg. Five plates visually inspected on cream,uniform scaling;root17native acceptance retained. Integrated motion/listening/practical conduct pending. B10v2 sole heavy render continues.

## Brief234 v15 repair check, 9 November 2026

phys-y12-m8-v15 Revision2:0 blockers,3 should fix,0 optional. Four prior findings repaired in actual scenes. New never exactly half tag is false;200fair counters give exactly100with5.63%chance. Stale Decisions still call lambda an exact per-second chance and every decay millions of eV;align with repaired scenes. No speech changes. All new tray/time-slider values,background,P32,conditional probability and binomial readouts recalculate.5636characters,18scenes,estimated490s;written v14/v15/v16 joins match. Report checks/p-y12-m8-v15-rev2-error-check.md;work/brief234/v15-calculations.json and v15-used-plates.jpg. Five plates visually inspected on cream,uniform scaling. Integrated motion/listening/practical conduct pending. B10v2 sole heavy render continues.

## Brief234 v16 repair check, 9 November 2026

phys-y12-m8-v16 Revision2:0 blockers,2 should fix,0 optional. Five prior findings repaired in actual scenes,including39.245/7and rising fission arrows. Author memory assumption wrongly conserves Z/N in every nuclear reaction;limit to fixed-nucleon cases. Assets still requests rejected ghost curve;remove stale item. No speech changes. All mass-balance and curve-cursor values recalculate.5744characters,19scenes,estimated498s;written v15/v16/v17 joins match. Report checks/p-y12-m8-v16-rev2-error-check.md;work/brief234/v16-calculations.json. No plates requested;coded balance labelled mass comparison diagram. Integrated motion/listening pending. B10v2 sole heavy render continues.

## Brief234 v17 repair check, 9 November 2026

phys-y12-m8-v17 Revision2:0 blockers,0 should fix,0 optional. Both prior findings repaired: three-decimal binding bars and separate feedback number cues. All binding energies, K_in slider, thresholds, Q values and attempt sums independently recalculate.5908characters,19scenes,estimated510s;written v16/v17/v18 joins match. Report checks/p-y12-m8-v17-rev2-error-check.md;work/brief234/v17-calculations.json and v17-used-plates.jpg. Po-Be plate inspected on cream,uniform scaling;coded1919 chamber retained. Site notes already logged under193,no duplicate. No speech changes. Integrated motion/listening pending. B10v2 sole heavy render continues.

## Brief234 v18 repair check, 9 November 2026

phys-y12-m8-v18 Revision2:0 blockers,1 should fix,0 optional. Five prior findings repaired in learner scenes. Stale author cause-chain point8 still omits fast-generation/strong-growth conditions;align with repaired scene11. No speech change. U235 mass/dependent sums,binding checks,k slider,moderation and attempt recalculate.6435characters,19scenes,estimated553s;written v17/v18/v19 joins match. Report checks/p-y12-m8-v18-rev2-error-check.md;work/brief234/v18-calculations.json and v18-used-plates.jpg. OPAL facts rechecked against ANSTO,plate inspected on cream;both smoking station plates stay omitted under193. Integrated motion/listening pending. B10v2 sole heavy render continues.

## Brief234 v19 repair check, 9 November 2026

phys-y12-m8-v19 Revision2:0 blockers,2 should fix,0 optional. Three prior findings repaired in main scenes. Stale motion/kit instructions still select hilltop particles and lending ledger;Assets still names field-line rings. Align with repaired tunnelling/kept-energy/helical scenes. No speech change. All force,separation,temperature,energy and attempt readouts recalculate;85-character title.5786characters,18scenes,estimated504s;written v18/v19/v20 joins match. Report checks/p-y12-m8-v19-rev2-error-check.md;work/brief234/v19-calculations.json and v19-used-plates.jpg. Both plates inspected on cream,uniform scaling. ITER temperature/agreement sources verified. Integrated motion/listening pending. B10v2 sole heavy render continues.

## Brief234 v20 repair check, 9 November 2026

phys-y12-m8-v20 Revision2:0 blockers,1 should fix,0 optional. Prior decay-as-proof blocker and antineutrino label repaired in actual scenes,notes and accepted answers. Stale Stops after/Attempts summaries still list three evidence lines and old crossed answer;align with corrected scenes. No speech change. All probe slider wavelengths/ratios and charge sums recalculate.6190characters,20scenes,estimated534s;written v19/v20/v21 joins match. Report checks/p-y12-m8-v20-rev2-error-check.md;work/brief234/v20-calculations.json and v20-used-plates.jpg. Both apparatus plates inspected on cream,uniform scaling;existing primary history follow-up retained. Site step4 correction to append at plates hand-in. Integrated motion/listening pending. B10v2 sole heavy render continues.

## Brief234 v21 repair check, 9 November 2026

phys-y12-m8-v21 Revision2:0 blockers,0 should fix,0 optional. All four prior findings repaired in actual scenes:Higgs/charged-lepton scope,exchanged-mass range,residual-force/confinement distinction,and internal antiparticle labels. All range slider/counter values,charge sums and mass comparisons recalculate.6213characters,19scenes,estimated536s;written v20/v21/v22 joins match. Report checks/p-y12-m8-v21-rev2-error-check.md;work/brief234/v21-calculations.json and v21-used-plates.jpg. Context plates inspected on cream,uniform scaling;table/quarks remain coded. Integrated motion/listening pending. B10v2 sole heavy render continues.

## Brief234 v22 repair check, 9 November 2026

phys-y12-m8-v22 Revision2:0 blockers,1 should fix,0 optional. All six prior findings repaired in actual scenes. Author crossed-slip table labels3e9asGeV;useeVfor3GeV,keeping intentional wrong energy-as-momentum chip. No speech change. All field-ramp,p,B,voltage,beam-sum and attempt values recalculate;80-character title.6432characters,21scenes,estimated557s;v21 join and course-end/silent hold match. Report checks/p-y12-m8-v22-rev2-error-check.md;work/brief234/v22-calculations.json and v22-used-plates.jpg. Three plates inspected on cream,uniform scaling. Practical coverage is not certified by end card. Integrated motion/listening pending. All22reviews handed in;plate manifests/fringe checks/site correction remain. B10v2 sole heavy render continues.

## Brief234 plates and complete hand-in, 9 November 2026

All22Revision2 designs have individual hand-ins above:0 blockers,21 should fix,1 optional. Earlier findings repaired in learner scenes,including v20 decay-as-proof blocker;remaining errors are detailed per report. No design,narration,scene or speech edits,no commits. Summary work/brief234/final-handin.json. Actual built motion,fit,captions,human listening and whole-course practical coverage remain pending.

Updated brief192/193 manifests:all18previously held apparatus entries now delivered by root decision17. All18public PNG hashes/native dimensions match originals;historical holds preserved,prior manifests backed up under work/brief234/manifest-backup. Decision18 cream-glass/actual-hub/gap notes retained. No regeneration,upscaling,padding or pixel changes. Molecular cloud760px,gold ring380px,planetary nebula560px,supernova remnant700px inspected on cream at usage size: no separate coloured fringe visible,so no repaint needed. Inputs/results/composites in work/brief234/plate-edges;manifest verification work/brief234/delivered-manifest-check.json.

Added site-corrections-phys-y12.md entry234.1 for Analyse7marks step4 and combined-answer decay-as-proof claim,using hash-verified retained siteHTML and DOE primary counterexample. No siteHTML changed. Brief234 complete. B10v2 remains the sole heavy render;post-render checks and replacement next.

## Brief236 later-wave source inventory, 9 November 2026

While B10 rendered,mechanically inventoried the59unvoiced designs in waves2to6,350365characters,with source/readiness hashes,scene IDs,scene-sum counts and no-em-dash assertions. Wave2:12designs70326characters217scenes;wave3:12/71567/190;wave4:12/69390/195;wave5:12/73849/220;wave6:11/65233/185. Combined with existing wave1,all72planned designs total429808characters. Pilot m2-v06 excluded;held repairs excluded. Work/brief236/remaining-wave-inventory.json and waveN-source-audit.json. No paid speech,audio,canonical lesson or measured-data changes. This is inventory only;later-wave recording briefs,gates and cue inspection remain pending and waves still voice sequentially. Existing wave1preparation retained;Google quota reset still required before resuming238first. B10 remains sole heavy local job.

## Brief200 B10 live preflight, 9 November 2026

Original71MkKTjXPOUread in Studio:Public/HD/not kids/not adult-only/AI Yes,English Australia,Education,thumbnail2,full original title/description/dotpoints and advanced settings retained. Public manual playlist PLOXPcalkg-iI currently23available+1hidden:B10atvisible14between Vyr0KetDMwo and wYqgEi0J71g. Historical upload row position13is stale;preserve live order and neighbours at replacement. Read-only records work/brief200/bio-m6-b10/nov09-pre-render/live-v1-preflight.json,live-v1-studio-ax.txt,live-playlist-before.json.165original SRT cues hash-verified;new exact-playback export waits for completed master. No upload or old-video changes yet. Render continues after browser-close warnings with successful later chunks;final package still pending.

Brief201next inputs frozen without starting a second render:bio-m5-g03,400source/audio files;bio-m7-b11,476. Existing owner B+exception/gate retained. Work/brief201/<id>/nov09-pre-render/frozen-before-pre-render.json. Fresh still guard and render wait for B10completion.

## Brief200 B10 render completed, 9 November 2026

V2 out/explainer/Explainer-bio-m6-b10/Explainer-bio-m6-b10-v2.mp4,14422frames,480.733333s,1920x1080/30fps,48kHz AAC,48386462bytes,SHA256 3252eb6a32a43db196e149c2a97a662b82c96c366e52c90166eca1772e9fc4f0. Renderer exited0after successful chunks and mux;browser-close warnings did not stop later chunks. All409frozen source/audio files and16asset copies match.165unchanged caption texts exported from exact playback timeline;154timings differ from historical SRT. Records work/brief200/bio-m6-b10/nov09-pre-render/master-checks.json and caption-v1-comparison.json.120-sample picture scan and native normal-speed review in progress;font scan,Drive backup and YouTube replacement remain. Current live playlist position14between Vyr0KetDMwo and wYqgEi0J71g,not historical13. No publication or old-video changes.

## Brief200 B10 local master hand-in, 9 November 2026

V2 out/explainer/Explainer-bio-m6-b10/Explainer-bio-m6-b10-v2.mp4,14422frames,480.733333s,1920x1080/30fps,48kHz AAC,SHA256 3252eb6a32a43db196e149c2a97a662b82c96c366e52c90166eca1772e9fc4f0.409source/audio hashes and16asset copies match.120picture samples:0broken-image flags,0blank heuristic flags.120font samples:0flags. Four boards,16-frame sheet,endpoints inspected;matches ClaudeB+reference. Native normal-speed sampled playback and targeted seeks complete;authored opening/progressive builds retained,no new issue seen. Sampling/human-listening limits explicit.165unchanged caption texts exported from exact playback;154timings corrected.185files plus5completed reports hash-verified on mounted Drive mirror. Report work/brief200/bio-m6-b10/nov09-pre-render/build-report.md. Original live metadata/settings and manual playlist position14 verified. Upload/publication/unlisting/readback pending.

## Brief200 B10 replacement completed, 9 November 2026

Published https://youtu.be/p16QynMURQE from checked out/explainer/Explainer-bio-m6-b10/Explainer-bio-m6-b10-v2.mp4,14422frames,480.733333s,SHA256 3252eb6a32a43db196e149c2a97a662b82c96c366e52c90166eca1772e9fc4f0. Public,HD complete,no notices;Copyright and Community Guidelines checks passed. Original title/full description/verbatim dotpoint and settings preserved;not Made for Kids,not adult-only,AI Yes,English(Australia),Education,thumbnail2.165-cue exact-playback SRT published;154old cue timings were corrected without text or speech changes. End screen skipped as original because final notes fill frame;no cards added.

Playlist PLOXPcalkg-iI reloaded:23available entries in original order,new B10 at visible14 between Vyr0KetDMwo and wYqgEi0J71g,one unavailable entry retained. Old 71MkKTjXPOU removed from playlist and saved Unlisted,not deleted. Fix-plan current link updated;historical upload/audit IDs retained with explicit replacement record. Record youtube/brief200-b10-replacement-2026-11-09.json and work/brief200/b10-replacement-package.json. Local checks:120picture samples0broken-image flags,zero blank heuristic flags;120font samples0flags;16-frame sheet and sampled native normal-speed review match accepted B+reference. Authored opening and progressive sparse builds retained;no new encoded difference or A-grade claim.185files plus completed reports hash-backed up to mounted Drive mirror. Brief200 complete: B05,B07 and B10 replacements published. G03 of Brief201 is next;its fresh pre-render comparison passed. Do not redo completed replacements.

## Brief201 g03 pre-render passed,9 November2026

400source/audio inputs frozen,10public paths decoded,14349frames. Fresh16states match Claude B+sheet on actual side-by-side inspection;owner named exception applies. No source changes,missing plate or font failure. Work/brief201/bio-m5-g03/nov09-pre-render holds freeze,asset report,playback snapshot and comparison. Starting sole heavy job v2 render,concurrency2,guards unchanged,v1 retained. Post-render scans,captions,native changed-scene playback and YouTube replacement remain.

## Brief201 live preflight checkpoint, 9 November 2026

G03 oldOtPe_zLuGGk:original title/full description/dotpoints and settings match historical record;Public/HD/not kids/not adult-only/AI Yes,EnglishAustralia,Education,thumbnail2. Manual Public playlist PLSRtz9v2ybMg has27entries,G03lastat27after n_2i_qz3tMs. B11 oldQg_caOin2x0:same core settings,with paid promotionNo explicitly selected;Public manual playlist PLF46LOS0IuCo has18entries,B11at14between KX0HhqCsikY and ipZfLvpuNBM. Full Studio/language/order evidence and live-v1-preflight.json saved under each work/brief201/<id>/nov09-pre-render. No upload or old-video changes for201. G03 guarded v2 is sole heavy local job;B11 fresh pre-render waits.

## Brief236 source preparation checkpoint, 9 November 2026

Existing wave1retained. Prepared recording inputs/manifests/production briefs and source recording gates for the remaining59designs;all72planned designs now source-ready,429808characters. Readiness decision34 covers older review hashes. Source strings copied unchanged;scene sums and bold-cue order verified;no em dashes. Later-wave cue candidate report retains visual binding/timing as pending. Work/brief236/all-wave-preparation-nov09.json and wave2to6-preparation.json;all prior pack/audio folders were empty and their backup state is retained. No measured data/audio/paid request created. Resumable voice-wave/check/validation/hand-in helpers syntax-checked only,not run;they keep238first,the99request cap,one heavy job,and237between waves2and3. 531preparation/source files hash-backed up to mounted Drive mirror;cloud sync not individually checked. Human listening/built preview pending. G03remains sole heavy render.

## Later replacement preparation checkpoint, 9 November 2026

Briefs202to205:8selected input graphs frozen and original wave5metadata/caption hashes verified;work/replacement-later-preparation-nov09.json. No fresh stills,render or publication started. Current live Chemistry settings/title/full description/dotpoints/captions and manual Public playlist PLWBoqjMWeZi0 read for C06/C07/C10. Live positions11/12/17 respectively,32entries;historical10/11are stale. Each work/brief202or203/<id>/nov09-pre-render holds full Studio/language/order evidence and live-v1-preflight.json. Re-read order at replacement to include earlier new IDs. No old-video changes. G03remains sole heavy render.

## Briefs203to205 Biology live preflight, 9 November 2026

Read original Studio metadata/settings/languages and live playlist order for bio-m6-b11/B12/B16/B19 and bio-m7-b04. Full titles/descriptions/dotpoints match wave5records;all Public/HD/not kids/not adult-only/AI Yes,EnglishAustralia,Education. B6B11 currently uses auto thumbnail1,preserve this live choice;the other4use thumbnail2. No paid-promotion radio selected;other advanced defaults preserved in fullAX and live-v1-preflight.json. Module6visible positions16/17/20/22,23available+1hidden;Module7B04at6of18. Re-read live order at replacement to keep preceding new IDs. Evidence in each work/brief203to205/<id>/nov09-pre-render. No upload or old-video mutation. G03continues as sole heavy render.

## New-chat handoff prepared, 9 November 2026

User requested progress and a handoff to reduce chat size. Saved docs/production/claude-pm/codex-prompts/000-codex-handoff-9-nov-midday.txt and Documents chat outputs/lesson-video-handoff-9-nov.txt;SHA256 3c94e1beac091febbaf8a31d8c4d73f1c4f1a2a1e547828b5a56a92892ac6b91;mounted Drive copy matches. Lists completed work,active G03render,prepared checks,next actions,remaining201to205queue,238quota holds,236source preparation and237interleave,plus exclusions. Existing G03render left running,latest9300/14349chunk frames. New chat must inspect live process/log and monitor existing job before acting;do not duplicate render or pre-render. Brief200complete;201in progress.

## Brief201 G03 render and checks checkpoint, 9 November 2026

Existing render completed: out/explainer/Explainer-bio-m5-g03/Explainer-bio-m5-g03-v2.mp4, 14349 frames, 478.3 seconds, 1920x1080/30fps, 48kHz AAC, 50003362 bytes, SHA256 2cc717d41e880d5a3ce015695fb296de5eb1b98cef6e723a20c3095c7d726722. All 400 frozen source/audio files and 10 public asset copies match. Playback-timeline captions contain 153 unchanged texts, with 141 timings different from the old track. Records in work/brief201/bio-m5-g03/nov09-pre-render.

Picture scan completed 120 samples, with no broken-icon flags and two possible-blank flags at 33.87s and 428.47s. Four boards show both as brief title-only transition states. Font scan: 120 samples, zero flags. The 16-frame master sheet and both endpoints were inspected; the sheet matches Claude's approved B+ reference. This is sampled evidence, not an every-frame review. 182 files backed up and hash verified on the mounted Drive mirror; individual cloud sync was not checked.

A second scan was briefly started after the first process was mistakenly read as finished; it was stopped immediately. The original scan completed successfully and produced the final boards and report. Native VLC playback was sampled at normal speed around the repair protein, cell tint, carrier square, pedigree transition, question-two texture and early feedback. These were intermittent screen observations, not a complete motion review or human listening. Finish changed-scene playback including the remainder of feedback and final notes, record actual findings and complete the local build report before publication. No G03 upload, playlist change or old-video change has been made. Do not rerender or rerun completed checks.

## Brief201 B11 pre-render checkpoint, 9 November 2026

bio-m7-b11 fresh 16-state pre-render checked against Claude's B+ reference by visual comparison. The known cross-fade states and sparse first feedback are retained. All 476 frozen source/audio files match, 20 public assets checked, 14823 planned frames. Work/brief201/bio-m7-b11/nov09-pre-render contains the sheet, comparison, asset report and playback snapshot. Named owner B+ exception applies. Starting the sole heavy v2 render with concurrency 2; no source or narration changes. G03 upload Ac9r8zZ5t0A is private and processing, captions imported, publication and old replacement pending.

## Brief201 G03 replacement completed, 9 November 2026

Published https://youtu.be/Ac9r8zZ5t0A from the checked 14349-frame, 478.3-second v2 master, SHA256 2cc717d41e880d5a3ce015695fb296de5eb1b98cef6e723a20c3095c7d726722. Studio readback: Public, HD complete, no notices; copyright and Community Guidelines checks passed. Original title and full description, not-kids, AI Yes, English Australia, Education and auto thumbnail 2 retained. Paid-promotion radios remain unset. 153 unchanged caption texts were exported from the exact playback timeline, with 141 timings changed; the manual English Australia subtitles were explicitly published after main publication. No end screen was added because notes fill the end, as before.

Public manual playlist PLSRtz9v2ybMg reloaded with 27 entries in original order, new G03 at 27 after n_2i_qz3tMs. Old OtPe_zLuGGk removed from the playlist and saved Unlisted, not deleted. Fix-plan updated and historical wave4 record annotated. Record youtube/brief201-g03-replacement-2026-11-09.json; local report work/brief201/bio-m5-g03/nov09-pre-render/build-report.md. Picture and font scans sampled 120 frames each; two transition flags were visually inspected. Playback observations were intermittent at normal speed, not continuous motion review, every-frame inspection or human listening. Named B+ exception applies. B11 fresh pre-render passed and its sole heavy v2 render is running.

## Brief201 B11 local master checkpoint, 9 November 2026

bio-m7-b11 v2 assembled: 14823 frames, 494.1 seconds, 56980484 bytes, SHA256 bde64fca355b74428d9b6dc47c358082630779b2051527833c56f43fd343bd88. All 476 source/audio hashes and 20 public assets match. 120 picture samples and 120 font samples produced zero flags; boards, endpoints and 16-frame sheet inspected against the approved B+ reference. 168 caption texts and timings match the earlier SRT. Targeted normal-speed VLC playback with intermittent screen observations covered virus entry, antiviral strip, HIV stand-in, sparse first feedback and notes; no new material overlap seen. This is not continuous motion review, every-frame inspection or human listening. 182 files hash-verified on mounted Drive mirror; individual cloud sync not checked. Report work/brief201/bio-m7-b11/nov09-pre-render/build-report.md. Upload and playlist replacement remain pending. C06 pre-render check is running separately while memory is monitored, under the user's 9 November instruction to overlap work where resources allow.

## Brief202 C06 pre-render checkpoint, 9 November 2026

chem-m6-c06 fresh 16-state pre-render visually compared with Claude's B+ reference and matches. All 375 frozen source/audio files unchanged; 8 public assets checked; 14855 planned frames. Work/brief202/chem-m6-c06/nov09-pre-render holds comparison, asset report and playback snapshot. Named B+ exception applies. Starting guarded v2 render with concurrency 2 while B11 upload processes online, under the user's instruction to overlap work where resources permit. No source or narration changes.

## Brief201 B11 replacement completed, 9 November 2026

Published https://youtu.be/SGuxcvK10Vw from checked v2 master, 14823 frames, 494.1 seconds, SHA256 bde64fca355b74428d9b6dc47c358082630779b2051527833c56f43fd343bd88. Studio readback: Public, HD complete, no notices; copyright and Community Guidelines checks passed. Original title and full description, not-kids, paid promotion No, AI Yes, English Australia, Education and auto thumbnail 2 retained. All 168 caption texts and timings match the old track and were exported from playback; manual English Australia subtitles explicitly published after main publication. End screen skipped because notes fill the frame.

Public manual playlist PLF46LOS0IuCo reloaded with 18 entries in original order, new B11 at 14 between KX0HhqCsikY and ipZfLvpuNBM. Old Qg_caOin2x0 removed from playlist and saved Unlisted, not deleted. Fix-plan updated and historical wave5 record annotated. Record youtube/brief201-b11-replacement-2026-11-09.json; local report work/brief201/bio-m7-b11/nov09-pre-render/build-report.md. Picture and font scans sampled 120 frames each with zero flags. Intermittent normal-speed playback observations covered the specified changed scenes; not continuous motion review, every-frame inspection or human listening. Named B+ exception applies. Brief201 complete. C06 of Brief202 is rendering; do not start a duplicate.

## Brief202 C07 pre-render checkpoint, 9 November 2026

Fresh 16-state C07 comparison inspected against the approved B+ reference and matches. 380 frozen source/audio files unchanged, 7 public assets checked, 16207 planned frames. Named B+ exception applies. Starting guarded v2 render at concurrency 2, with no other full render running. C06 checks and publication continue separately as resources permit. No source or narration changes.

## Brief202 C06 local master checkpoint, 9 November 2026

C06 v2 assembled: 14855 frames, 495.1667 seconds, 47458837 bytes, SHA256 34f75650727980894b98dbafb0d61912afae099f6481fa2f1565a997028dc638. All 375 frozen source/audio files and 8 public asset copies match. Of 120 picture samples, one possible blank was inspected as a title-only transition; no broken-icon flags. 120 font samples had zero flags. Four boards, endpoints and 16-frame sheet were inspected against the B+ reference. Intermittent normal-speed playback observations covered the ammonia example, worked example, conjugate strength, proton chain, bicarbonate equations and notes. Brief old/new label overlap resolved by approximately 106 seconds. This is not continuous motion review, every-frame inspection or human listening. 170 caption texts unchanged, 160 timings different from old track. 181 files hash-verified on mounted Drive mirror; cloud sync not individually checked. Report work/brief202/chem-m6-c06/nov09-pre-render/build-report.md. Publication remains pending. C07 guarded render started separately.

## Brief202 C06 replacement completed, 9 November 2026

Published https://youtu.be/xZZt_KZ61Bw from checked v2 master, 14855 frames, 495.1667 seconds, SHA256 34f75650727980894b98dbafb0d61912afae099f6481fa2f1565a997028dc638. Studio readback: Public, HD complete, no notices; copyright and Community Guidelines checks passed. Original title and full description, not-kids, AI Yes, English Australia, Education and auto thumbnail 2 retained; paid promotion remains unset. 170 unchanged caption texts exported from the exact playback timeline, 160 timings changed; manual English Australia subtitles explicitly published. End screen skipped as final notes fill the frame.

Public manual playlist PLWBoqjMWeZi0 reloaded with 32 entries in original order, new C06 at 11 between VFu_7xIIBH0 and BN5RYjZaVzc. Old boYH3_uNQyc removed from playlist and saved Unlisted, not deleted. Fix-plan updated and historical wave5 record annotated. Record docs/production/claude-pm/youtube/brief202-c06-replacement-2026-11-09.json; local report work/brief202/chem-m6-c06/nov09-pre-render/build-report.md. 120 picture and font samples; one transition flag inspected. Intermittent normal-speed playback observations, not continuous motion review, every-frame inspection or human listening. Named B+ exception applies. C07 guarded render is running.

## Brief202 C07 local master checkpoint, 9 November 2026

C07 v2 assembled: 16207 frames, 540.2333 seconds, 53230906 bytes, SHA256 dcca3fa2d914ec1220bd2214b42050dd85077a14aa02ed2643c0b46e90b0597a. All 380 frozen source/audio files and 7 public assets match. 120 picture and 120 font samples produced zero flags. Four boards, endpoints and 16-frame master sheet inspected. Reference content matches, but master sheet frame 15 catches a crossfade from the preceding question into the decision rule; reference sheet shows the settled state. Fresh pre-render frame 15 has the same crossfade, and subsequent samples show the settled rule. This is a reported timing difference in the sampled sheet, not a new encoded change. Intermittent normal-speed observations covered the pH meter, water equilibrium and hydroxide, mixing before and after the pour, countdown zero hold and notes. Not continuous motion review, every-frame inspection or human listening. 173 unchanged caption texts; 165 timings differ from old track. 180 files hash-verified on the mounted Drive mirror; cloud sync not individually checked. Report work/brief202/chem-m6-c07/nov09-pre-render/build-report.md. Publication remains pending. C10 fresh pre-render check running separately.

## Brief203 C10 pre-render checkpoint, 9 November 2026

Fresh 16-state C10 comparison visually inspected against approved B+ reference and matches. 404 frozen source/audio files unchanged, 5 public assets checked, 15510 planned frames. Named B+ exception applies. Pre-render files under work/brief203/chem-m6-c10/nov09-pre-render. C07 replacement remains in progress; C10 full render has not started and follows completion of Brief202. No source or narration changes.

## Brief202 C07 replacement completed, 9 November 2026

Published https://youtu.be/HXmnjl2T9tU from checked v2 master, 16207 frames, 540.2333 seconds, SHA256 dcca3fa2d914ec1220bd2214b42050dd85077a14aa02ed2643c0b46e90b0597a. Studio readback: Public, HD complete, no notices; copyright and Community Guidelines checks passed. Original title and full description, not-kids, AI Yes, English Australia, Education and auto thumbnail 2 retained; paid promotion remains unset. 173 unchanged caption texts exported from exact playback, 165 timings changed; manual English Australia subtitles explicitly published. End screen skipped as final notes fill the frame.

Public manual playlist PLWBoqjMWeZi0 reloaded with 32 entries in original order, new C07 at 12 between xZZt_KZ61Bw and 4uehJ1QBp2o. Old BN5RYjZaVzc removed from playlist and saved Unlisted, not deleted. Fix-plan updated and historical wave5 record annotated. Record docs/production/claude-pm/youtube/brief202-c07-replacement-2026-11-09.json; local report work/brief202/chem-m6-c07/nov09-pre-render/build-report.md. Picture and font scans sampled 120 frames each with zero flags. Master sheet sample 15 catches an authored crossfade also seen in pre-render; the reference sample is settled. Playback observations were intermittent, not continuous motion review, every-frame inspection or human listening. Named B+ exception applies. Brief202 complete. C10 fresh pre-render passed, ready for guarded render.

## Brief203 C10 pre-render checkpoint, 9 November 2026

Fresh 16-state C10 comparison inspected against the approved B+ reference and matches. 404 frozen source/audio files unchanged, 5 public assets checked, 15510 planned frames. Named B+ exception applies. Starting guarded v2 render at concurrency 2, with no other full render running. Brief202 completed before this render. No source or narration changes.

## Brief203 C10 local master checkpoint, 9 November 2026

C10 v2 assembled: 15510 frames, 517 seconds, 50163667 bytes, SHA256 e80573ac9d6b730829c14149ca113744f52a2be7aa39d3b8e2d903552e01bcc1. All 404 frozen source/audio files and 5 public assets match. 120 picture and 120 font samples produced zero flags; boards, endpoints and 16-frame master sheet inspected against approved B+ reference. Two browser-close warnings occurred after chunks ending at frames 4949 and 5999, with subsequent chunks and render successful. Frames 4949/4950 and 5999/6000 decoded and were visually inspected, with no apparent discontinuity. Intermittent normal-speed observations covered worked example, particle view, conjugate-base reactants and products, warning-boundary scenes and notes; not continuous motion review, every-frame inspection or human listening. 185 caption texts unchanged, 173 timings differ. 184 files hash-verified on mounted Drive mirror; cloud sync not individually checked. Report work/brief203/chem-m6-c10/nov09-pre-render/build-report.md. Publication remains pending. Biology M6 B11 pre-render check is running separately.

## Brief203 Biology M6 B11 pre-render checkpoint, 9 November 2026

Fresh 16-state Biology M6 B11 comparison inspected against the approved B+ reference and matches. 412 frozen source/audio files unchanged, 17 public assets checked, 14517 planned frames. Named B+ exception applies. Starting guarded v2 render at concurrency 2, with no other full render running. C10 publication continues online. No source or narration changes.

## Brief203 C10 replacement completed, 9 November 2026

Published https://youtu.be/CQ0KEjzBCFo from checked v2 master, 15510 frames, 517 seconds, SHA256 e80573ac9d6b730829c14149ca113744f52a2be7aa39d3b8e2d903552e01bcc1. Studio readback: Public, HD complete, no notices; copyright and Community Guidelines checks passed. Studio preview displayed unable to play media on readback, despite HD-complete status; public playback has not been separately verified. Original title and full description, not-kids, AI Yes, English Australia, Education and auto thumbnail 2 retained; paid promotion remains unset. 185 unchanged caption texts exported from exact playback, 173 timings changed; manual English Australia subtitles explicitly published. End screen skipped as final notes fill frame.

Public manual playlist PLWBoqjMWeZi0 reloaded with 32 entries in original order, new C10 at 17 between I4cEf51KJ5I and Jif3hku49lY. Old xl-LqpA8IUo removed from playlist and saved Unlisted, not deleted. Fix-plan updated and historical wave5 record annotated. Record docs/production/claude-pm/youtube/brief203-c10-replacement-2026-11-09.json; local report work/brief203/chem-m6-c10/nov09-pre-render/build-report.md. Picture and font scans sampled 120 frames each with zero flags. Two browser-close warnings during render were followed by successful chunks and inspected boundary frames. Playback observations intermittent, not continuous motion review, every-frame inspection or human listening. Named B+ exception applies. Biology M6 B11 guarded render running.

## Brief203 C10 public playback readback, 9 November 2026

The public watch page for https://youtu.be/CQ0KEjzBCFo played through 0:27 and displayed English captions. The earlier Studio embedded preview error was not reproduced on the public page. This is an opening sample, not a full public playback or human listening review.

### 9 November: brief 203 bio-m6-b11 v2 local review

Rendered `out/explainer/Explainer-bio-m6-b11/Explainer-bio-m6-b11-v2.mp4`, 483.9 s, 14,517 frames, SHA256 `6be262ba34f319fe17e6318e644477fd36f139e761c6f31943f577cc184d2f0f`. The approved B+ sheet matches the 16-frame v2 sheet; the named owner exception applies, without an A-grade claim. Frozen sources and assets match. Of 120 picture samples, one possible-blank flag at frame 9496 is an exam question and liver illustration on inspection; no broken-image flags. Font scan: 120 samples, no flags. One renderer cleanup warning followed chunk 11700-11849; frames 11849 and 11850 decode as the same question card with no apparent discontinuity, and render exited successfully. Playback was sampled at normal speed: during the second feedback handoff near 408 s the ladder briefly overlaps the outgoing question/answer card and partly covers the Evaluate line; settled feedback is clear by about 414 s. No continuous-motion or full human-listening review is claimed. 171 caption texts are unchanged, with 161 timing corrections. 183 files copied to the mounted backup and hash-verified. Full detail: `work/brief203/bio-m6-b11/nov09-pre-render/build-report.md`. Publication and playlist readback pending.

### 9 November: brief 204 bio-m6-b12 preparation

Fresh 16-state pre-render comparison was inspected side by side and matches the approved B+ reference. 415 source/audio files and 24 assets frozen, expected 14,178 frames. This was preparation only; full render remains pending after brief 203. `work/brief204/bio-m6-b12/nov09-pre-render/pre-render-summary.json` records the comparison.

## Brief 203 completed: Bio M6 B11 replacement, 9 November 2026

Published https://youtu.be/JaNkGUcr0NE, 483.9 seconds and 14,517 frames, SHA256 6be262ba34f319fe17e6318e644477fd36f139e761c6f31943f577cc184d2f0f. Studio readback: Public and HD complete; copyright and Community Guidelines checks found no issues. Original title and full description, not-kids, AI Yes, English Australia, Education and auto thumbnail 1 retained; paid promotion unset. Manual English Australia captions explicitly published; 171 texts unchanged, 161 playback timing corrections. Playlist PLOXPcalkg-iI was reloaded: 23 visible entries plus one unavailable hidden; replacement at visible position 16 between wYqgEi0J71g and y6vgEQaZel4, other visible order retained. Previous oAVZdpuLnHw removed from playlist and saved Unlisted, not deleted. Fix plan and historical wave5 record updated; full record docs/production/claude-pm/youtube/brief203-b11-replacement-2026-11-09.json. Local review details in work/brief203/bio-m6-b11/nov09-pre-render/build-report.md, including false blank flag, render warning and brief feedback transition overlap. Normal-speed observation was sampled, with no complete listening or continuous-motion claim. Named owner B+ exception applies. Brief 203 is complete.

Starting brief 204 bio-m6-b12 guarded v2 render after brief 203 completion. Frozen inputs rechecked; 14,178 expected frames, 24 assets, approved B+ comparison inspected. One render at concurrency 2. Free physical memory about 1.07 GB and C drive 19.11 GB immediately before start; monitor resources.

### 9 November: brief 204 bio-m6-b12 render checkpoint

V2 master completed successfully at `out/explainer/Explainer-bio-m6-b12/Explainer-bio-m6-b12-v2.mp4`: 14,178 frames, 472.6 s, SHA256 `f2cee3880318d75f25d62627d97f5de0c866b4167c4d90406ad83ef8adaa6a44`. Frozen 415 source/audio files and 24 public assets matched. 161 caption texts unchanged, 148 timings corrected. One Page.bringToFront Target closed cleanup warning followed chunk 13200-13349; render continued successfully and frames 13349/13350 decode as the same decision card without apparent discontinuity. Picture scan is running; font scan, visual and playback review, backup and publication remain pending. Speech quota has reset; brief 238 has priority once the already-running scan finishes, with voice running alone.

## Brief238 i02 voice hand-in

math-a12-i02: docs/production/claude-pm/checks/m-a12-i02-redesign-learning-review.md: 0 blockers, 1 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-i02-redesign-maths-check.md: 0 maths blockers, 0 maths should fix, 0 maths optional. The notes-fit finding is in the companion learning review. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-starter-jar-v1.png, public/assets/maths/ma12-starter-fill-v1.png. 6081 reviewed narration characters across16 takes;1 exact-text takes served from cache;15 new requests. Total514.80s, notes45s. Selected new-request billed usage1493 input/11092 output tokens; estimatedUSD0.100574. Measureddocs/production/claude-pm/lessons/math-a12-i02/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.383s in scene-02;204 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:15 scenes, details inwork/brief238/voice-results/i02/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 i03 voice hand-in

math-a12-i03: docs/production/claude-pm/checks/m-a12-i03-redesign-learning-review.md: 0 blockers, 0 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-i03-redesign-maths-check.md: 0 blockers, 0 should fix, 0 optional. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-phone-dock-v1.png. 6311 reviewed narration characters across18 takes;1 exact-text takes served from cache;17 new requests. Total536.93s, notes45s. Selected new-request billed usage1632 input/11643 output tokens; estimatedUSD0.105603. Measureddocs/production/claude-pm/lessons/math-a12-i03/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.185s in scene-05;224 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:14 scenes, details inwork/brief238/voice-results/i03/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 i04 voice hand-in

math-a12-i04: docs/production/claude-pm/checks/m-a12-i04-redesign-learning-review.md: 0 blockers, 1 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-i04-redesign-maths-check.md: 0 maths blockers, 0 maths should fix, 0 maths optional. The tube/bulb connection finding is in the companion learning review. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-fundraiser-board-v1.png. 6318 reviewed narration characters across17 takes;1 exact-text takes served from cache;16 new requests. Total509.93s, notes45s. Selected new-request billed usage1523 input/10970 output tokens; estimatedUSD0.099491. Measureddocs/production/claude-pm/lessons/math-a12-i04/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.082s in scene-12;213 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:11 scenes, details inwork/brief238/voice-results/i04/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 i05 voice hand-in

math-a12-i05: docs/production/claude-pm/checks/m-a12-i05-redesign-learning-review.md: 0 blockers, 1 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-i05-redesign-maths-check.md: 0 maths blockers, 0 maths should fix, 0 maths optional. Notes-fit finding in the learning review. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-solar-panels-v1.png. 6272 reviewed narration characters across16 takes;1 exact-text takes served from cache;15 new requests. Total539.83s, notes45s. Selected new-request billed usage1530 input/11715 output tokens; estimatedUSD0.106200. Measureddocs/production/claude-pm/lessons/math-a12-i05/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.203s in scene-04;218 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:11 scenes, details inwork/brief238/voice-results/i05/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 i06 voice hand-in

math-a12-i06: docs/production/claude-pm/checks/m-a12-i06-redesign-learning-review.md: 0 blockers, 2 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-i06-redesign-maths-check.md: 0 maths blockers, 0 maths should fix, 0 maths optional. Stale-unit and notes-fit findings are in the learning review. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-rain-gauge-v1.png. 6227 reviewed narration characters across15 takes;1 exact-text takes served from cache;14 new requests. Total495.03s, notes45s. Selected new-request billed usage1423 input/10602 output tokens; estimatedUSD0.096130. Measureddocs/production/claude-pm/lessons/math-a12-i06/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.026s in scene-05;188 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:11 scenes, details inwork/brief238/voice-results/i06/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief 238 voice queue paused by provider quota, 9 November

After quota-day reset the queue handed in i02, i03, i04, i05 and i06, each with its own status block and human listening pending. i08 generated scenes 01 through 12, then its scene-13 request returned HTTP 429: provider reports the 100-per-day model limit reached and a retry after 22h37m59s. The local ledger counted 90 requests in quota day 2026-11-09, so provider and local accounting do not agree. Runner stopped without automatic retry. Preserve i08 partial takes and logs; do not retry speech or start another paid voice request until provider quota has actually reset and accounting is reconciled. i08 is not handed in. Remaining eligible i08, i09, i10, i12, i14; designer-held i01, i07, i11, i13 remain excluded. Resume visual/render work while waiting.

### Brief 204 bio-m6-b12 local review, 9 November

Master `out/explainer/Explainer-bio-m6-b12/Explainer-bio-m6-b12-v2.mp4`, 472.6 s, 14,178 frames, SHA256 `f2cee3880318d75f25d62627d97f5de0c866b4167c4d90406ad83ef8adaa6a44`; 415 source/audio files and 24 assets match. Sixteen-frame master sheet matches approved B+ reference; owner exception applies, no A-grade claim. Picture scan of 120 samples flagged frame 59 at 1.97 s: only the header appears before opening illustration by about 3 s; no broken-image flags. Font scan 120 samples, no flags. Warning-boundary frames 13349/13350 inspected and show the same decision card; render exited successfully. Normal-speed playback sampled intermittently at opening, rhino, memory and question sequences, not continuous motion or full human listening. 161 unchanged caption texts, 148 timing corrections. 183 files hash-verified in local mounted Drive mirror; cloud sync not independently verified. Details `work/brief204/bio-m6-b12/nov09-pre-render/build-report.md`. Publication pending.

### Brief 204 B16 pre-render comparison

Fresh 16-state comparison visually matches the approved B+ reference. 421 frozen source/audio files and 29 assets verified; 14,778 expected frames. Preparation only; render pending after B12 replacement. Details `work/brief204/bio-m6-b16/nov09-pre-render/pre-render-summary.json`.

Partial i08 protection: 36 existing audio, generation and alignment files copied to the local mounted Drive mirror and hash-verified; `work/brief238/i08-partial-backup-2026-11-09.json`. No hand-in or cloud-sync claim.

YouTube Studio requested Google account verification before B12 upload; the verification tab is open for the owner. B12 has not been uploaded. B16 pre-render comparison passed; its full render has not started because physical memory was about 0.37 GB free when last checked.

Starting B16 v2 render while B12 publication awaits owner verification. Fresh reference comparison and input hashes pass. One render at concurrency 2; free physical memory 1.05 GB, committed headroom 4.59 GB and C drive 18.11 GB immediately before start. Monitor resources.

### Brief 204 B16 render checkpoint

Rendered `out/explainer/Explainer-bio-m6-b16/Explainer-bio-m6-b16-v2.mp4`, 14,778 frames, 492.6 s, SHA256 `0a251174582ac02e8c3626d26f91fae5ecd0c14275dd98105f3c3b1284f077af`. Renderer exited successfully, no logged browser warnings; 421 frozen source/audio files and 29 assets match. Picture scan in progress; font scan, visual and playback review, backup and publication pending. B12 publication still awaits owner account verification.

### Brief 204 B16 local scan checkpoint

The 120-picture scan flagged frame 13238 (441.27 s) as possible blank; inspection shows the decision-rule cards and text, so it is not blank. No broken-image flags. Font scan: 120 samples, no flags. Four picture boards, the 16-frame master sheet and both endpoints inspected; the master sheet matches the approved B+ reference. 172 caption texts unchanged with 162 timing corrections. 181 files copied to the local mounted Drive mirror and hash-verified, cloud sync not independently verified. Native normal-speed playback review and publication still pending; B12 and B16 uploads await owner account verification. No continuous motion or human listening claim.

### Brief 204 B16 playback sample

Native playback sampled at normal speed with intermittent screenshots of the reliability grid, health-to-ferret sequence and gene/plasmid diagram. No continuous-motion or complete human-listening review is claimed. Full report `work/brief204/bio-m6-b16/nov09-pre-render/build-report.md`; publication pending.

## Brief 204 B12 replacement completed, 9 November

Published https://youtu.be/FfhbE2XwfwM from checked v2 master, 14,178 frames, 472.6 s, SHA256 f2cee3880318d75f25d62627d97f5de0c866b4167c4d90406ad83ef8adaa6a44. Studio readback Public, HD complete, no notices; copyright and Community Guidelines checks found no issues. Original title, full description, not-kids, AI Yes, English Australia, Education and auto thumbnail 2 retained; paid promotion unset. 161 unchanged caption texts, 148 timing corrections; manual subtitles published. Playlist PLOXPcalkg-iI reloaded with 23 visible entries and one unavailable hidden; new B12 at 17 between JaNkGUcr0NE and KtmFOGNNztg, other visible order retained. Old y6vgEQaZel4 removed from playlist and saved Unlisted, not deleted. Fix plan and historical wave5 annotated. Record docs/production/claude-pm/youtube/brief204-b12-replacement-2026-11-09.json. Local review reports sparse opening flag and cleanup-warning boundary; playback observations intermittent, not continuous-motion or full human listening. Named B+ exception applies.

### 2026-11-09 B16 upload in progress
- Bio M6 B16 replacement has been uploaded as private YouTube draft PBQ_otzC4Gc. Do not create a duplicate. Captions were submitted; publication, playlist replacement and old-video unlisting remain pending.


## Brief 204 B16 replacement completed, 9 November

Published https://youtu.be/PBQ_otzC4Gc from checked v2 master, 14,778 frames, 492.6 s, SHA256 0a251174582ac02e8c3626d26f91fae5ecd0c14275dd98105f3c3b1284f077af. Studio readback Public, HD complete, no notices; copyright and Community Guidelines checks found no issues. Original title, description, not-kids, AI Yes, English Australia, Education and auto thumbnail 2 retained; paid promotion unset. 172 unchanged caption texts, 162 timing corrections; manual subtitles published. Playlist PLOXPcalkg-iI reloaded with 23 visible entries and one unavailable hidden; new B16 at 20 between wX3MUWuRfvY and o3PpNr9qFhY, other visible order retained. Old njVBwGcvD7A removed from playlist and saved Unlisted, not deleted. Fix plan and historical wave5 annotated. Record docs/production/claude-pm/youtube/brief204-b16-replacement-2026-11-09.json. Scan false positive frame 13238 shows decision cards and text. Playback observations intermittent, not continuous-motion or full human listening. Named B+ exception applies. 181 files copied and hash verified to local Drive mirror; cloud sync not independently verified. Brief 204 complete.

### Brief 205 B19 pre-render comparison, 9 November

Fresh 16-state pre-render comparison inspected side by side and matches approved B+ reference. 419 frozen source/audio files and 20 assets verified; expected 14,398 frames. Named owner B+ exception applies. No source or narration changes. Full render remains pending.

Starting brief 205 B19 guarded v2 render after brief 204 completion. Frozen inputs and approved B+ comparison pass. One render at concurrency 2; free physical memory 1.45 GB and C drive 17.53 GB immediately before start. Monitor resources.

### Brief 205 B19 render checkpoint, 9 November

V2 master assembled: 14,398 frames, 479.933 seconds, SHA256 e69fbe3c6a1fcbc947ee8d1e0e58bafa658cadf4b26e508bbe9fb7e88cd0c7c6. Frozen 419 source/audio files and 20 public assets match. Master and captions exported; scan, playback review, backup and publication pending. No duplicate render needed.


### Brief 205 B19 local scan checkpoint, 9 November

Master `out/explainer/Explainer-bio-m6-b19/Explainer-bio-m6-b19-v2.mp4`, 479.933 s, 14,398 frames, SHA256 e69fbe3c6a1fcbc947ee8d1e0e58bafa658cadf4b26e508bbe9fb7e88cd0c7c6. 419 source/audio files and 20 assets match. Sixteen-frame sheet matches approved B+ reference. Picture scan 120 samples: one sparse transition at frame 9058 entering exam question 1, followed by question card; no broken-image flags. Font scan 120 samples, no flags. Intermittent normal-speed samples of farm entrance and exam transition; no continuous-motion or full human-listening claim. 181 caption texts unchanged, 169 timing corrections. 181 files copied and hash-verified to local mounted Drive mirror; cloud sync not independently verified. Details `work/brief205/bio-m6-b19/nov09-pre-render/build-report.md`. Publication pending.

B19 additional normal-speed playback sampled intermittently at insulin, growth hormone, industry and comparison-board scenes. These sampled states appeared intact. This is not a continuous-motion or complete listening review.


### Brief 205 B19 upload in progress

Private YouTube draft dJIzlRJdZTo created for B19 v2. Do not upload a duplicate. Metadata, captions, publication, playlist replacement and unlisting remain pending.


### Brief 205 B04 pre-render comparison, 9 November

Fresh 16-state pre-render comparison inspected side by side and matches approved B+ reference. 435 frozen source/audio files and 23 assets verified; expected 14,538 frames. Named owner B+ exception applies. No source or narration changes. Full render remains pending.

Starting brief 205 B04 guarded v2 render while B19 publication checks run. Frozen inputs and approved B+ comparison pass. One render at concurrency 2; free physical memory 1.70 GB and C drive 17.19 GB immediately before start. Monitor resources.

### Brief 205 B04 render checkpoint, 9 November

V2 master assembled: 14,538 frames, 484.6 seconds, SHA256 b41dea1f9fac661a4dd770d56275ae496e3e03d34e8cf9bc834a2f9fe03475f1. Frozen 435 source/audio files and 23 public assets match. Master and captions exported; scan, playback review, backup and publication pending. No duplicate render needed.


## Brief 205 B04 held for sparse frames, 9 November

Master `out/explainer/Explainer-bio-m7-b04/Explainer-bio-m7-b04-v2.mp4`, 14,538 frames, 484.6 s, SHA256 b41dea1f9fac661a4dd770d56275ae496e3e03d34e8cf9bc834a2f9fe03475f1; 435 frozen sources and 23 assets match. 16-frame sheet matches approved B+ reference, but 120-frame scan identified sparse frames at 26.23, 50.47, 115.07 and 280.63 s. Context inspection shows header-only stretches at least 24.23 to 27.23 s and about 280.63 to 281.63 s; tiny faded cards around 50 s and a faint divider around 115 to 117 s. Font scan 120 samples, no flags; no broken-image flags. 159 caption texts and timings unchanged. 182 files locally mirrored and hash-verified, cloud sync not independently checked. Report and context sheet in `work/brief205/bio-m7-b04/nov09-pre-render/`. Publication held for production correction because blank-frame checks did not pass; v1 remains public and unchanged. No source edit, re-render, complete listening or continuous-motion review claimed.

B04 native normal-speed playback sampled around 00:25 confirms a header-only stretch followed by the disease-triangle graphics around 00:33. This confirms the sparse-frame hold; no full playback or listening is claimed.


### Brief 205 B19 YouTube check delayed

Draft dJIzlRJdZTo is saved privately, HD processing complete, original details and settings copied, manual English Australia captions uploaded as draft. Community Guidelines check found no issues. Copyright check remained running with YouTube reporting it is taking longer than usual, including after reopening the saved draft. Do not duplicate upload or publish until checks finish. After publish, explicitly publish subtitles, replace old FfOK7a6blSw at playlist position 22, verify order, unlist old and update records. B04 is held separately for sparse frames. Speech remains blocked by provider quota as recorded above.


## Brief 239 playlist and pre-render hold, 10 November 2026

Created public YouTube playlist HSC Maths Advanced Year 12, ID `PLMcUYX3DYIeY` (https://www.youtube.com/playlist?list=PLMcUYX3DYIeY). Studio showed 11 existing playlists and no Maths playlist. Studio title search for Differentiating returned no matching upload. Brief 225 records d01 v2 was not uploaded; its normal-speed playback and human listening remain pending. No d01 upload or publication claimed. Master and Drive backup remain as recorded in brief 225.

D02 is held before render: brief 239 lists it as A, but its build notes explicitly grade it A-minus overall and identify frame 5 B+/A borderline, frame 11 B+, and frames 6 and 15 A-minus. The build gate requires every frame A. Claude should reconcile and repair/regrade the sheet before render. No new render, voice or commit made.

### Brief 239 export checks, 10 November

The recording-scope production briefs for d02 through d09 were checked at export stage. Each reports exact voiced preview and independent student learning review pending as blockers, with human listening pending. These are recording-scope records, not proof of an exact built-video review. No full render started. D02 also has the below-A sheet findings above; d08 and d09 build notes report A-minus overall, despite the ready-list A labels. Claude should reconcile the build grades and supply the missing export evidence. The ready list still ended at d09 when re-read. D01 has not been uploaded or published; playback and listening remain open.

### Brief 238 resume, 10 November

The provider's prior retry-after time elapsed at approximately 19:00 Sydney on 10 November. I08 prevoice freshness and quota preflight reports three uncached scenes needed and zero requests in the current local quota day. Resuming only i08; the runner stops on a provider error without retry. Existing scenes 01 to 12 retained. Provider and local accounting previously differed, so a provider 429 remains a stop signal.

## Brief238 i08 voice hand-in

math-a12-i08: docs/production/claude-pm/checks/m-a12-i08-redesign-learning-review.md: 0 blockers, 0 should fix, 0 optional.; docs/production/claude-pm/checks/m-a12-i08-redesign-maths-check.md: 0 maths blockers, 0 maths should fix, 0 maths optional. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-car-park-entry-v1.png. 6132 reviewed narration characters across16 takes;13 exact-text takes served from cache;3 new requests. Total532.90s, notes45s. Selected new-request billed usage165 input/1230 output tokens; estimatedUSD0.011153. Measureddocs/production/claude-pm/lessons/math-a12-i08/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.591s in scene-08;204 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:12 scenes, details inwork/brief238/voice-results/i08/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 i09 voice hand-in

math-a12-i09: docs/production/claude-pm/checks/m-a12-i09-redesign-learning-review.md: 0 blockers,1 should fix,0 optional. Shared maths finding counted once.; docs/production/claude-pm/checks/m-a12-i09-redesign-maths-check.md: 0 maths blockers,1 maths should fix,0 optional.238-I09-REVERSE-SUM shared with learning report,count once. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-frost-thermometer-v1.png. 6222 reviewed narration characters across14 takes;1 exact-text takes served from cache;13 new requests. Total519.07s, notes45s. Selected new-request billed usage1513 input/11122 output tokens; estimatedUSD0.100854. Measureddocs/production/claude-pm/lessons/math-a12-i09/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.431s in scene-11;205 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:13 scenes, details inwork/brief238/voice-results/i09/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 i10 voice hand-in

math-a12-i10: docs/production/claude-pm/checks/m-a12-i10-redesign-learning-review.md: 0 blockers,0 should fix,0 optional.; docs/production/claude-pm/checks/m-a12-i10-redesign-maths-check.md: 0 maths blockers,0 should fix,0 optional. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-lift-shaft-v1.png. 5906 reviewed narration characters across14 takes;1 exact-text takes served from cache;13 new requests. Total474.03s, notes45s. Selected new-request billed usage1388 input/10071 output tokens; estimatedUSD0.091333. Measureddocs/production/claude-pm/lessons/math-a12-i10/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.423s in scene-13;193 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:10 scenes, details inwork/brief238/voice-results/i10/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief238 i12 voice hand-in

math-a12-i12: docs/production/claude-pm/checks/m-a12-i12-redesign-learning-review.md: 0 blockers,1 should fix,0 optional.; docs/production/claude-pm/checks/m-a12-i12-redesign-maths-check.md: 0 maths blockers,0 maths should fix,0 optional. Notes-fit finding is in learning report. Everyday anchor retained; existing full anchor review/provenance unchanged. Plates: public/assets/maths/ma12-garden-cut-fill-v1.png, public/assets/maths/ma12-stone-footbridge-v1.png. 6202 reviewed narration characters across16 takes;1 exact-text takes served from cache;15 new requests. Total517.23s, notes45s. Selected new-request billed usage1480 input/11075 output tokens; estimatedUSD0.100415. Measureddocs/production/claude-pm/lessons/math-a12-i12/measured/lesson.json; original pack/audio backups retained. Alignment and all bold-cue timings validated; worst word gap1.081s in scene-12;204 caption cues exported and canonical caption hashes checked. Machine retry/clipping/silence/low-score findings:12 scenes, details inwork/brief238/voice-results/i12/hand-in.json. Shared held handoff assets and profile tolerance misses remain as logged in the manifest. Human listening and built preview pending; no scene build or render. 

## Brief 238 provider spending-cap hold, 10 November

I08, i09, i10 and i12 completed and were handed in separately above. I14 generated and aligned scenes 01 to 11; scene 12 returned HTTP 429: project monthly spending cap exceeded. The queue stopped on the first error and did not retry. I14 is incomplete; do not hand it in or revoice the 11 unchanged takes. Partial 33 files copied to the local Drive mirror with matching SHA256, `work/brief238/i14-partial-backup-2026-11-10.json`. The completed voice packs were also mirrored and 847 files hash-verified, `work/brief238/voiced-backup-check.json`; cloud sync not independently verified. The daily reset will not by itself resolve a monthly spending cap. Google voice work, including brief 236, remains paused until the provider cap is resolved. Human listening and built previews remain pending.

## Brief 205 B19 replacement completed, 10 November

Published https://youtu.be/dJIzlRJdZTo from the checked v2 master `out/explainer/Explainer-bio-m6-b19/Explainer-bio-m6-b19-v2.mp4`, 14,398 frames, 479.933 s, SHA256 e69fbe3c6a1fcbc947ee8d1e0e58bafa658cadf4b26e508bbe9fb7e88cd0c7c6. YouTube HD complete; copyright and Community Guidelines checks found no issues. Existing title, description and settings retained. English Australia manual subtitles published. Playlist PLOXPcalkg-iI reloaded with 23 visible and one unavailable hidden: new video at 22 between o3PpNr9qFhY and dJSdk30cboo, old FfOK7a6blSw removed and saved Unlisted. Fix plan updated; historical records retained. Record `docs/production/claude-pm/youtube/brief205-b19-replacement-2026-11-10.json`. Prior local hand-in records scans and intermittent playback; no continuous-motion or full human-listening claim. B04 remains held for sparse frames.
