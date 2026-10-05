# First shared technical changes

Prepared 2 October 2026. Status: implementation specification, not completed renderer work. Scope is the [first pilot package](pilots/molar-mass/README.md), designed to support later library tasks. Preserve current lesson rendering and approved assets.

Implementation update, 3 October: [timeline implementation](timeline-implementation.md) records the completed local fixture path, caption/answer changes, compatibility checks and remaining real-media review. The specification below retains the original requirements rather than claiming every release gate is closed.

## T1: exact response gap with existing scene audio

Start with new assembled audio per scene rather than immediately extending every lesson to a segmented schema. The current `src/audio/SceneVoiceover.tsx` already accepts a single asset and playback window. Store the new raw segments, measured durations and gap offsets in a manifest. Never infer gap length from punctuation or voice tags.

For the pilot, the five unique fresh speech segments feed two assemblies. Build a resolved timeline from measured selected audio endpoints. Add 180 frames of silence after prompt audio ends at 30 fps, then feedback. A lossless assembled asset avoids timing assumptions from MP3 encoder delay, but requires checking media/sidecar tooling against its extension. Choose the supported format after inspecting those scripts rather than hard-coding an untested WAV path. Verify the gap in the final decoded export as well as the planned timeline.

No final frame durations can be approved until fresh selected audio exists. A dry-run timeline fixture can validate offsets beforehand. If later tasks require independent overlapping audio events or assembly proves awkward, introduce segmented playback with an explicit migration path; that is a demonstrated capability decision, not a prerequisite to drafting every lesson.

**Acceptance:** six-second response interval, no answer audio during it, correct speech order, no clipped endpoints, and compatibility with the unmodified original lesson path.

## T2: earliest visual answer boundary

`src/slides/QuickCheckSlide.tsx` currently interpolates the answer from `answerStart - 24` to `answerStart + 24`. The planned hold ends at the first answer exposure. For the pilot path, fade must start at that boundary, not before it. Inspect other answer-bearing elements and transition overlap too.

Prefer an explicit opt-in boundary where existing lessons depend on midpoint timing. New pilot content must use the first-exposure semantics. Document any legacy interpretation rather than changing every old quick check's duration unintentionally.

**Acceptance:** representative frames immediately before, at and after the boundary establish no prior answer visibility; audio/captions follow the same boundary. Test the actual component behaviour, not just a new timing constant.

## T3: resolved timeline and caption offsets

Use segment-local speech/alignment plus cumulative resolved offsets. Do not send the silence annotation to speech generation or pretend old alignment covers an assembly. Prefer aligning the actual assembled final asset when the supported provider/local method permits; otherwise combine segment alignment with verified offsets and record the method. Check actual words/numbers by listening separately.

Use the same resolved timeline for reveals, faithful caption tokens, final exports and chapters. Include intro and transition offsets in complete production lessons. The isolated comparison has no stinger, which is an experiment control, not a global renderer change.

**Acceptance:** prompt captions finish without answer text; feedback captions begin after the gap; accumulated offsets match media; final cue bounds fit the export. Test frame rounding and scene overlap cases.

## T4: accessible caption coverage

`scripts/export-captions-srt.mjs` currently iterates scene captions. Inspect how intro narration is represented and add coverage to the selected full-lesson path. Keep `scene.caption` as concise teaching text; it must not become a substitute for speech captions.

Check assembly/token provenance, scientific notation, phrase grouping, relevant sounds and player placement. A token array's presence cannot verify fidelity. Inspect adjacent exporters so one format does not quietly use a different timeline.

**Acceptance:** selected complete lesson contains every spoken segment including any narrated intro, no duplicate transition cues and no fabricated answer text during holds. SRT/VTT and descriptive transcript link to the same selected final audio version.

## T5: dependencies and release manifest

Extend selected release tracking with script hash, displayed-text version, voice/model/endpoint/settings/dictionary, raw selected takes, assembled audio hash, gap offsets, alignment/caption hashes, assets/provenance and render configuration. Existing filename text hashes remain useful but cannot cover all these inputs.

Record statuses such as prepared, recorded, assembled, aligned, rendered, human-reviewed and released separately. A missing reviewer or unresolved scientific issue keeps release status pending even if generation/rendering succeeds. Do not reinterpret the current numerical readiness gate as release approval.

**Acceptance:** changing text, take, voice settings or gap layout invalidates the correct downstream artefacts; unaffected original media remain available; selected package can be reproduced and restored.

## Order and verification

Inspect assembly and caption consumers first, implement T1/T3 fixtures, then T2 visibility and T4 coverage, then attach T5 dependencies. Keep edits small and backward compatible. Run TypeScript and relevant existing production tests only when implementation changes justify them. Render difficult boundaries locally where supported; full playback/listening and device review remain human tasks.

Before paid recording, the reviewable package should state exact scripts, generation character cap, supported settings, expected outputs and remaining review work. Current planning count is five unique segments and 1,343 source characters per take. No calls to generation services have been made.
