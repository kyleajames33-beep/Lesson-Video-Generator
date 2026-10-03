# Production Memory

This file records what the system learns while producing HSCScience videos. Update it when a lesson reveals a repeatable improvement, common failure, or reusable pattern.

## Best Ideas To Keep

- Use scene-level voiceover files with text hashes so changed scenes can be regenerated without redoing the full narration.
- Keep captions short; use voiceover for the full explanation.
- Use `callout` for the key student insight in concept scenes.
- Use `coachNote` to make worked examples feel taught, not just displayed.
- Use `pausePrompt` before quick-check answers so students actively decide before reveal.
- Use `unitCancel` whenever the unit proves the method.
- Use `mistakeTag` to make common traps visible and memorable.
- Export transcripts from the same timeline used by the video.
- Treat the website lesson page as part of the video product, not a separate afterthought.

## Mistakes To Avoid

- Do not generate ElevenLabs audio until voiceover timing warnings are resolved or deliberately accepted.
- Do not use one long narration file for a lesson that is still visually changing.
- Do not put videos into the website JavaScript bundle.
- Do not preload videos on course, module, or search pages.
- Do not add decorative doodles unless they focus attention or prevent a mistake.
- Do not satisfy the "no dead frames" rule with obvious decoration. Use subtle ambient glow/breath/border motion only after the main teaching object has landed.
- Do not animate readable text during hold frames. The text can reveal, then it must lock; otherwise it creates a shimmer/vibration illusion in video playback.
- Do not use word-by-word reveal on large reading text. Use stable block/phrase reveals for hooks, concepts, definitions, quick checks, and summaries; reserve per-word movement for tiny non-primary labels only.
- Do not make chemistry videos feel childish with unnecessary mascot characters.
- Do not let formulas appear fully formed without a visual build.
- Do not end lessons with generic encouragement instead of a usable decision rule.

## Reusable Patterns

### Hook Pattern

Open with a concrete learner problem:

```text
How can a tiny mass represent billions of particles?
```

Then reveal the concept as the shortcut.

### Worked Example Pattern

```text
Known -> Find -> Formula -> Substitute -> Answer -> Unit check
```

### Misconception Pattern

```text
Wrong instinct -> why it fails -> corrected rule
```

### Summary Pattern

```text
When you see X, ask Y, then choose Z.
```

## Build Notes

- Phase 2 P0 features built and integrated 2026-05-02: `LeaderLineCallout`, `HighlightWipe`, `NumberTicker`, `MarginNote`, `DataChart`. All pass `npm run check:all`.
- Phase 2 primitive stills render-validated 2026-05-02 for Lesson 2 definition (`HighlightWipe` area) and concept (`DataChart` + `MarginNote`). Both read correctly at full scale.
- Added `scripts/generate-elevenlabs-audio.mjs` for batch ElevenLabs generation from a manifest. Usage: `ELEVENLABS_API_KEY=... node scripts/generate-elevenlabs-audio.mjs out/voiceover/Chemistry-Y11-M2-L2.manifest.json --voice-id=<id>`. Supports `--dry-run` to preview missing files.

## Current Known Issues

- ~~Lesson 1 has several tight voiceover scenes. Fix timing or script before final ElevenLabs generation.~~ FIXED 2026-05-02: Auto-extended 10 tight scenes using `apply-voiceover-timing-fix.mjs --max-extra-frames=250`. Total added: 946 frames (~31.5s). Lesson 1 now validates clean (`ok`).
- Lesson 1 now has an updated gold-standard half-scale proxy render at `out/checks/phase1/lesson1-gold-standard-proxy-v3.mp4` after fixing definition-circle/summary-underline placement and adding subtle ambient hold-state motion.
- Lesson 2 now has an updated gold-standard half-scale proxy render at `out/checks/phase1/lesson2-gold-standard-proxy-v4.mp4` after slowing ambient motion and locking readable text during holds.
- ~~Lesson 2 has tight voiceover scenes in `definition`, `misconception`, and `summary`.~~ FIXED 2026-05-02: Lesson 2 voiceover timing is clean (0 tight scenes).
- The production gate currently passes at 9/10; Lesson 1 is excluded as a reference lesson and Lesson 2 is production-gated.
- Use `npm run voiceover:timing` before ElevenLabs work to get exact word-cut and duration-extension options.
- Lesson 1 should remain a long reference lesson unless a shorter production variant is created.
- Lesson 1 is marked `productionRole: reference`; it should not block the normal production gate.
- Lesson 2 is marked `productionRole: production` and currently passes the production gate.
- Lesson 2 voiceover timing report is clean (`Tight scenes: 0`) as of 2026-05-02 after the gold-standard visual pass.
- Site manifest and Lesson 2 transcript exports were refreshed on 2026-05-02: `out/site-video-manifest.json`, `out/transcripts/Chemistry-Y11-M2-L2.json`, and `out/transcripts/Chemistry-Y11-M2-L2.vtt`.
- Lesson 2 still checks refreshed on 2026-05-02 at `out/checks/Chemistry-Y11-M2-L2/` (7 scenes at 0.25× scale).
- Lesson 2 retrospective created at `out/retrospectives/Chemistry-Y11-M2-L2.md`.
- Full end-to-end video review should happen after final voiceover and render.
- Lesson 2 is one step away from full production-ready status: generate ElevenLabs audio, run `npm run voiceover:sync -- src/data/chemistry-y11-m2-l2-molar-mass.json`, then render full MP4.
- Phase 4 `marginalia` scene type built 2026-05-02: concept card + handwritten margin notes + ScribbleArrow connectors. Used in Lesson 2 scene `marginalia-molar-mass`. Still validated at `out/checks/phase4/marginalia-slide-v2.png`.
- Phase 4 `labFootage` scene type built 2026-05-02: visual stage + asset image + corner annotations with ScribbleArrow. Used in Lesson 2 scene `lab-footage`. Still validated at `out/checks/phase4/lab-footage-slide.png`.
- Poster render script built 2026-05-02: `scripts/render-lesson-posters.mjs` renders one JPEG per lesson from the hook scene at full scale. Bulk mode `--all` available. Posters at `out/posters/Chemistry-Y11-M2-L1.jpg` and `Chemistry-Y11-M2-L2.jpg`.

## System review — 2026-10-02

- Reviewed the current light editorial design system, shared slide shell,
  diagram/diorama conventions, narration scripts, captions and release tooling.
  Half-scale samples of Biology Y11 M1 L1 (nucleus comparison) and Chemistry
  Y11 M2 L13 (definition and worked example) rendered successfully under
  `out/checks/system-review/`. These are still checks, not motion/audio approval.
- The physical media preflight found **4 of 308 lessons** ready under its checks:
  Chemistry Y11 M2 L1A, L1B, L2 and L3. Across the catalogue: 2,152 narrated
  scenes without wired audio; 594 without captions; 224 missing alignment
  sidecars; 232 missing image/media references; one stale audio hash (Chemistry
  Y12 M6 L9, hook). Counts are occurrences, not distinct files, and overlap.
- No lessons pass the old editorial gate. Its 60–210 second preferred duration
  and 145 wpm estimates were written for a much smaller catalogue. Current
  compositions span about 4–12 minutes. Decide short explainer versus full
  lesson formats, then revise the rubric by format; do not trim the entire
  catalogue merely to improve an automated score. Recorded timing should
  replace estimates wherever valid alignment exists.
- Fixed still/poster frame selection omitting the 270-frame intro; shared
  timing constants now drive the renderer and the affected export scripts.
  Captions now honour narration startFrame and actual fps. Combined captions
  retain the existing first-intro-only convention; `--combined-intros=all`
  includes every intro when joining complete MP4s. Lesson compositions honour lesson.fps.
- Updated review prompts to the light theme. Visual changes require still
  verification; animation changes require clips. Required font load failures
  now stop renders instead of silently permitting fallback fonts.
- Added `release:preflight` and seven production-workflow regression tests in
  CI. Physical readiness is separate from editorial scores and final review.
- ElevenLabs now documents **Eleven v4**, available via Text to Dialogue,
  with stability/similarity controls and no legacy style/speed sliders or SSML.
  Test it on dense chemistry, an explanatory Biology passage and a learner
  question before adopting it for a module. The main generator now supports
  v4 single-narrator timestamp requests, isolated comparison directories and
  model/voice provenance. API execution and listening tests remain outstanding:
  this session has no configured ElevenLabs API key.
- Flash v2.5 replaces the deprecated Turbo default for new narration, intro,
  chunked and tagged-dialogue generation. Existing audio is preserved.
- **Before bulk production:** finish one pilot (recommend Chemistry Y11 M2 L2),
  compare voices, sync narration/reveals, fit durations, rebuild captions, run
  preflight, then watch the full MP4 at desktop and phone size. Inspect scientific
  labels, equation pronunciation, transitions, pauses and integrated loudness.
- **Highest-value design work:** test a shorter or teaching-first opening
  against the nine-second syllabus stinger; increase diagram label legibility
  where it fails at phone size; maintain a small consistent scene vocabulary;
  use short preview clips to check hold-state motion rather than adding more
  animation by default. Create purpose-designed YouTube thumbnails rather than
  relying entirely on sampled slide posters.
- **Next pipeline work:** align old score heuristics with recorded timing;
  migrate multi-speaker conversations to native timestamped Dialogue only after
  pilot testing; replace raw MP3 byte concatenation with decoded concatenation
  so offsets reflect real audio duration; add loudness/true-peak measurement and
  a render/review record tied to content and media versions. Back up ignored
  media off-machine before regenerating or starting bulk renders.
- The legacy image-generation helper still hard-codes `gpt-image-1`. Benchmark
  a current image model on text-free painted props before changing the catalogue
  art direction. Keep all scientific labels and equations in the code layer.

Official sources checked during this review:

- [ElevenLabs models and Turbo deprecation](https://elevenlabs.io/docs/overview/models)
- [Eleven v4 controls and migration guidance](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/eleven-v4)
- [Timestamped Dialogue API and request limits](https://elevenlabs.io/docs/api-reference/text-to-dialogue/convert-with-timestamps)

## Prototype review — 2026-10-02

- Built three isolated 24-second design studies on the same limiting-reagent
  example: editorial diorama, hand-drawn and generated painted laboratory.
  See `docs/design-prototypes-plan.md` for content, comparison criteria and the
  saved image prompt. Outputs and comparison page live in `out/prototypes/`.
- Initial portrait-phone review exposed small calculation values. Increased
  formula/value type sizes and shortened explanation copy in all three studies.
- Parallel video renders timed out loading fonts; sequential renders completed.
  All three MP4s are 1280×720, 30fps, with the same duration. TypeScript and the
  seven production workflow tests passed. Review stills cover all three beats.
- Preliminary art-direction judgement: editorial is the default candidate;
  hand-drawn needs a mechanism test; painted glassware adds atmosphere but little
  teaching value to this calculation. No direction is approved for bulk use.

## Direction and animation planning, 2026-10-02

- User prefers the hand-drawn and painted studies and supports a mixture with
  existing designs. Preserve usable assets rather than restyling the catalogue.
- No em dashes (U+2014) in new or revised copy or responses. Check the selected
  lesson before voice generation and publication. Narration edits require
  regenerated audio, alignment and captions for the affected scenes.
- Supersede the earlier editorial-default proposal and constant-motion rule.
  Reading and thinking holds are valid; motion must serve the teaching task.
- Use docs/animation-planning.md to map each pilot beat to its teaching goal,
  existing component, narration cue, meaningful movement and review status.
  This planning and review are required before bulk production. The narrated
  pilot described below has now rendered; full-lesson review remains outstanding.

## Narrated molar mass pilot, 2026-10-02

- Reused three existing Chemistry Y11 M2 L2 voice files and two illustrations
  in an isolated 73-second pilot. Original lesson data and media are preserved.
- Reveals use saved word cues; coded unit cancellation follows narration.
  The source balance image's unlabelled number is covered by a coded unit label.
- Existing narration was very quiet. Export normalization produces -18.15 LUFS
  and -1.76 dBTP. The pilot does not compare newer voices; listening review of
  pronunciation and delivery remains necessary.
- Long renders stalled on fonts twice. Short exact frame ranges rendered;
  decoded audio is trimmed before joining. Final video has 2188 frames at
  30 fps, and audio and video duration both match 72.933 seconds.
- Use the range-capable local review server for working seek controls. Phone
  review flags small formula variable definitions for the next iteration.
- The full lesson contains an outdated carbon-12 explanation outside this
  excerpt. Correct it and rebuild affected narration before publication.
- See docs/molar-mass-pilot-plan.md for the scene audit and remaining reviews.

## Capability comparisons, 2026-10-02

- User authorised the actual native hand-drawn mechanism, painted/diorama
  comparison and newer ElevenLabs voice comparison. Preserve existing assets.
- New isolated compositions reuse HdDnaReplication and MolarMassScaleDiagram.
  Plain and painted molar-mass clips have identical diagram motion and timing.
- DNA baseFontSize is now an optional prop. The existing 22px default is
  preserved; the full-frame test uses 32px letters and large stable labels.
- This simplified mechanism shows helicase, base pairing and original/new
  strands. It omits primers, polymerase, ligase and proofreading. Do not use
  it alone to teach all enzyme roles or primer removal.
- The same-script voice comparison uses the old formula recording as baseline
  and prepares four candidate slots: Flash, Multilingual v2, v3 and v4.
  Review copies are normalized, with raw recordings and measurements saved.
  The old recording's model/voice provenance remains unknown.
- Account access is unavailable: no environment or local dotenv credentials,
  and the ElevenLabs browser opens at sign-in. New model audio is pending.
  Do not describe this as a completed listening comparison. The user has
  been asked to provide local configuration; the sign-in tab is also open.
- See docs/capability-tests-plan.md for reproducible commands and limits.

## Update Rule

After each completed lesson, add:

- one pattern worth reusing
- one mistake to avoid
- one timing or engagement issue found
- whether the issue should become a validator rule

Use `docs/lesson-retrospective-template.md` for the review, then copy durable lessons into this memory file.

## Measured playback and dependency records, 3 October 2026

- The renderer, captions, transcripts, site duration, chapters and frame tools
  now share `src/lesson/timeline.mjs`. Existing intro/transition frame defaults
  remain; separate drafts can explicitly omit the intro.
- Assemble selected recordings after decoding. Pad by less than a frame as
  needed, insert exact PCM silence, then offset alignment/captions from sample
  counts. Do not derive offsets from the last character or concatenate MP3 bytes.
- An explicit answer boundary and measured response interval keep the new
  quick-check fade outside the hold. Worked-example solution cues are delayed.
  Old lessons retain their legacy midpoint behaviour pending selected review.
- Assembly sidecars bind text, decoded output, selected takes, alignment and
  generation provenance. Changed request settings prevent generator cache reuse.
  Unknown legacy voice/settings provenance is not automatically approved.
- `render:release` checks dependency stability across a render and saves matching
  captions, hashes and invocation details. Review evidence is attached to the
  exact package. Source, export or evidence changes invalidate the record.
- Verified a 15-second tone fixture with a five-second silent interval and
  hidden solution before the measured boundary. This is technical timing
  evidence, not a narrated pilot or listening approval.
- All 13 final v3 molar mass recording paths remain missing. Revised narration
  requires its own selected recordings/alignment before the production handoff.
- Usage and limitations: `docs/production/playback-and-release.md`.
