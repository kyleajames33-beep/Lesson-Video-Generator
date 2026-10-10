# Next supported production integration

The fungal, pressure and catalyst standalone previews need a supported scene path before paid narration or export. `src/dev/release-entry.tsx` renders `LessonVideo`; `scripts/render-release.mjs` restricts full rendering to that entry. Passing candidate JSON to it currently loses the custom scene behavior. Keep the existing render/review gates intact.

Root should assign one bounded implementation owner for shared types, validation and `LessonVideo` dispatch. Separate reviewers can check each resulting lesson and native evidence. Preserve all candidate files and earlier reports as attributed prototype evidence.

## Minimal shared change

Add explicit opt-in scene presentation fields with typed payloads and validated modes/cues. Route only those selected fields to small scene components from `LessonVideo.renderSlide`. Keep ordinary concept, worked-example and summary consumers unchanged. Do not select behavior from lesson IDs, subject names or undocumented properties.

The existing `teachingLayout` field currently sends every value to `MolarMassTeachingSlide`. If extending that field, change dispatch to recognize each family explicitly. A separate typed presentation field is also reasonable. Either choice must reject unknown modes and invalid cue ordering, and retain the existing scene audio, timeline, progress and caption/export contracts. Avoid copying the standalone full `TransitionSeries` shells into production.

## Fungi

Promote the final revision-02 stage data into a supported process-presentation payload: ordered scene-local frames, current node label and essential anchor. A local scene component should select the current stage using `useCurrentFrame`, then reuse `ConceptSlide` and `FlowDiagram` with exactly one node and one anchor. Future stages must remain absent; earlier content should clear. Retain the factual chromosome definition.

The docs wrapper calculates local frames from the whole lesson timeline. The production component already sits inside its scene sequence, so use local frames directly. This avoids maintaining a second timeline. Preserve the accepted phrases and scientific stage meanings. Replace estimated frames from the selected recording alignment later; do not treat word-position estimates as measured cues.

## Pressure

Extract the accepted `PressureScene` geometry from `CandidateConditions.tsx` into a props-driven supported scene component. Explicit modes can cover initial equilibrium, immediate compression and fixed-volume inert addition. Preserve the twelve illustrative reacting molecules during the squeeze, the solid origin reference, persistent fixed-temperature tags and labelled argon. Keep subsequent reaction reasoning on the existing equation board; do not add a new unreviewed relaxation simulation.

Support the stable response and notes board as explicit presentation modes rather than relying on the default JSON renderer. Keep the complete equation, fixed-temperature condition and both response demands visible. Preserve the 24-frame outgoing response protection, then replace its estimated speech boundary with measured prompt audio. Notes need a measured invitation followed by quiet copying time.

## Catalysts

The current `chemistry-catalysts/Candidate.tsx` is another custom full consumer. It contains separate energy-profile, concentration-time and stable text/response/notes scenes. Extract these as explicit props-driven modes using the existing profile/axis primitives. Preserve identical pathway endpoints, the schematic model qualification, matching start/volume/temperature conditions, the early-versus-final distinction and the absence of a universal numerical rate multiplier. Its source/science and exact final native review still need their independent pass; this document supplies neither.

## Verification and frozen runtime boundary

Bind additive selected production JSON and briefs to the supported props. Do not overwrite accepted prototype JSON or recordings. Build the exact release entry and compare affected native frames with the attributed prototype: current mechanism stages, complete prompts at hold start/end, first feedback, late pressure/inert states and notes. Shared `LessonVideo` chooses transitions differently from the pressure/catalyst prototypes, which hard-code shape wipes. Review the resulting transitions rather than carrying forward their boundary screenshots as an exact motion pass.

Run the appropriate type/lesson validation and meaningful checks of opt-in dispatch, stage selection, answer protection and unchanged default rendering. Then check the recording-stage brief. After narration, independently verify measured cues, PCM response silence, caption clearance, notes clearance and the exact production Player. Whole voiced viewing and actual human listening remain distinct gates. Root owns paid generation, freeze, export and publication.

Keep pinned old runtime checkouts and old release snapshots unchanged, including `out/checks/review-batch-byte-preserved-2026-10-09` at `5ff1e4a`. Shared runtime integration must not silently reapprove historical packages against new main. New selected previews and exports need their own dependency snapshots; older packages retain their original runtime and evidence.
