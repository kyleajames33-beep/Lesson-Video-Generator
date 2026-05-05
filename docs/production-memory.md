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

## Update Rule

After each completed lesson, add:

- one pattern worth reusing
- one mistake to avoid
- one timing or engagement issue found
- whether the issue should become a validator rule

Use `docs/lesson-retrospective-template.md` for the review, then copy durable lessons into this memory file.
