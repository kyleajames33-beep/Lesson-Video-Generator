# C3 beginner selected draft

Additive silent integration of the accepted beginner C3 preparation, 10 October 2026. This directory is the complete portable draft package. It does not alter the catalogue source, shared renderer, historical C2 sources, audio or earlier preparation.

`lesson.json` and `remotion-props.json` contain all 1,184 accepted spoken words in order. The title is silent. `narration-plan.json` retains twelve separately hashed speech segments, including separate prompt/feedback segments for each of the two independent attempts. No old audio, music, captions or measured `responseHold` is attached. Proposed twelve-second response intervals are recorded as estimates, with independent answer gates in the silent draft.

The schema-v2 `production-brief.json` binds the exact selected lesson, progression boundaries and every scene decision. The earlier Markdown review is linked under `preparationReview`; selected JSON `scriptReview` remains pending. This avoids using a preparation pass as an exact-source or recording approval.

Current supported treatments use meaningful HookSlide comparison cards, concise full-width ConceptSlide text and focused QuickCheck evidence boards. These make the isolated JSON loadable without an unsupported kind or a flawed legacy graph. They do not complete the six accepted staged model/reference treatments. `visual-implementation-proposal.json` names those blocked scenes and the exact bounded interface and root hooks needed. In particular, addition/removal must show an imposed one-species step and separate later response; temperature K must follow temperature, not conversion. Root must choose and independently review the corrected isolated visual before recording readiness. No appearance, readability or native clearance pass is supplied by this text-only integration.

`traceability.json` maps every preparation scene and cue, records no spoken cuts, and declares timing units. `BulletReveal.at` is seconds; reveal delays, focused contexts, stages and line cues are local frames. Durations and reveals are estimated using 140 words per minute for planning, not a proposed voice-speed setting or a measured pace. Fresh selected audio and alignment must replace them. Keep complete prompts, conditions and both task demands visible during each attempt; no answer-bearing state is allowed in its eventual measured silence.

Run from the repository root:

```powershell
node docs/production/drafts/module5-c3-beginner-selected-2026-10-10/check-author-package.mjs
node scripts/check-production-brief.mjs docs/production/drafts/module5-c3-beginner-selected-2026-10-10/production-brief.json --stage=draft
```

The package check verifies exact accepted speech and hashes, portable props, model limiting references, complete separate attempts, response/line gates using actual React server markup at synthetic frames, and the existing lesson validator. It expects the draft brief check to pass and the recording check to remain blocked by pending selected-source review. Its SSR check does not measure text bounds or audio timing. No native still, paid speech, pilot or full export is generated.

`prepare-selected.mjs` is the deterministic authoring source. Do not rerun it over a later independently reviewed correction. Preserve this initial candidate and use additive revisions if source, visual integration or measured cues change. Root owns independent selected-source review, shared wiring, paid media, exports and publication. Practical/coverage, actual listening and release approval remain separate gates.
