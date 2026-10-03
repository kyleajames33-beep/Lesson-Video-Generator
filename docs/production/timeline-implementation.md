# Pilot timeline and caption implementation

Updated 3 October 2026. Status: local timing implementation verified with synthetic fixtures and rendered stills. This is not a narrated pilot, scientific sign-off or release approval. No paid media was generated and no existing lesson narration was rewritten.

## What works

| Work | Implemented behaviour | Evidence and remaining limitation |
| --- | --- | --- |
| T1 response gap | Selected decoded speech segments can be assembled into mono 48 kHz PCM WAV, with six seconds of zero samples between prompt and feedback | Synthetic gap is 288,000 samples. Actual selected Simon takes, final encoded export and listening remain pending |
| T2 answer exposure | `answerVisibleStart` is the earliest fade boundary; measured `responseHold` can supply it. Countdown uses the actual interval | Rendered frames before/at the boundary contain no answer; after the reveal, setup appears. Legacy midpoint timing stays available |
| T3 cue resolution | Sample offsets resolve segment captions and frame cues together; earliest visual answer rounds forward to the next frame | Non-frame-aligned fixtures preserve the exact sample gap and avoid an early visual answer. Final take durations are unresolved |
| T4 captions | Word grouping stops at long gaps; intro tokens or available intro alignment are included; Unicode scientific notation survives conversion | Intro, delayed narration, transition overlap and combined-intro removal tested. Missing coverage emits warnings; human fidelity/access review still required |
| T5 dependencies | Package, protocol, selected inputs, relevant tool/render source and generated outputs are hashed; settings changes or missing files invalidate the selected manifest | Fixture manifest remains unreviewed and unreleased. Complete artwork provenance, archive/restore and full release evidence remain separate |

The workspace now contains a shared `src/lesson/timeline.mjs` used by renderer timing and caption export. Its integration and explicit intro-duration option were preserved as other changes arrived. An intro duration of zero must not export narration from a stinger that is not rendered.

## Run the local fixture

```powershell
node scripts/resolve-pilot-timeline.mjs --fixture
node scripts/check-response-hold-frames.mjs
node scripts/resolve-pilot-timeline.mjs --verify=out/checks/response-timeline/release-manifest.json
node --test scripts/response-timeline.test.mjs scripts/production-workflow.test.mjs scripts/inventory-library.test.mjs scripts/prepare-molar-mass-pilot-package.test.mjs
npm run check
```

The fixture is synthetic tone, not narration. Its compressed word timings are for offset tests and must not be presented to learners. Both script variants receive the same fresh synthetic common segments. Real recordings are not attached.

Variant A's sample gap runs from 2,611.0625 ms to 8,611.0625 ms. Its first eligible answer frame is 259 at 30 fps. Variant B's gap runs from 3,121.0625 ms to 9,121.0625 ms and its boundary is frame 274. Different synthetic middle lengths change absolute positions while both gaps remain exactly six seconds. Forward frame rounding can delay the visual answer by less than one frame after feedback audio starts; it cannot reveal it before the gap ends.

Review images: [before the answer](../../out/checks/response-timeline/before-answer.png), [at the boundary](../../out/checks/response-timeline/answer-boundary.png), [after the reveal](../../out/checks/response-timeline/after-answer.png). These are 960 × 540 stills, not phone or continuous-playback validation. The check uses the real quick-check component with resolved fixture props. It does not restyle the catalogue or prove an effective lesson.

## Resolve selected recordings later

The fixture creates `out/checks/response-timeline/selected-takes.example.json`. Fill a separate selected-takes file with actual voice/model, supported settings, dictionary version, per-script text hash, audio path and alignment path after authorised recording and selection. An explicitly empty settings object records use of defaults; it must not conceal unknown settings of an existing take.

```powershell
node scripts/resolve-pilot-timeline.mjs --takes=out/pilots/selected-takes.json --output=out/pilots/molar-mass-resolved
```

The resolver makes no provider requests. It rejects a changed protocol/package, missing takes, different voice/model configuration, alignment text that differs from the script and timestamps exceeding decoded audio. It writes a new resolved comparison package with WAV, alignment, caption tracks, timeline, reveal props and dependency manifest. Its alignment method is concatenation of selected segment alignment with measured offsets, not a claim of new provider alignment or verified pronunciation.

Selected takes cannot be replaced by earlier molar-mass audio attached to rewritten text. Source character estimates and budget remain in the [pilot package](pilots/molar-mass/README.md). Real-model quality, curriculum review, scientific explanation, device access and learning outcomes remain unresolved.

## Compatibility and complete-lesson integration

The isolated comparison resolver keeps exact decoded-sample offsets and no stinger. The separate scene-based playback assembler arriving in this workspace works with full lesson/manifests and may pad speech to frame boundaries. Preserve both scopes, use the chosen assembly's own resolved timeline and verify actual quiet intervals; do not mix offsets from one path with media from the other. A future consolidation should follow verified requirements rather than deleting working concurrent changes.

`build-captions.mjs` now handles lossless WAV alignment sidecars and can build intro tokens. `release-preflight.mjs` recognises text-hashed WAV assets. Neither changes original lesson files unless explicitly invoked on them; verification here ran on temporary fixtures. Caption export supports a separate output directory so reviews need not overwrite existing published tracks.

Twenty-five focused tests and TypeScript checking passed for the verified state. The tests include exact zero samples, forward answer rounding, caption gap boundaries, source/take drift, old quick-check semantics, measured-hold compatibility, intro/transition/delay timing, Unicode, combined intro removal, WAV caption building, preflight and a real installed-decoder round trip. The bundled FFmpeg lacks raw PCM output, so the shared decoder uses streamed WAV and removes its metadata header before checking samples.

Next: finalise the approved script/voice settings and recording scope, obtain selected fresh takes, resolve the real timeline and complete the narrated export. Then perform full playback/listening and phone/caption review before learner sessions. Do not infer science or release approval from passing these technical checks.
