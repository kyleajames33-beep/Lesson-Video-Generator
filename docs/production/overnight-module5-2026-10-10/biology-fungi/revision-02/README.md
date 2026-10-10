# Fungi revision 02

[Full silent Remotion Player](http://127.0.0.1:8778/overnight-biology-fungi-2026-10-10-v2/).

Exact lesson SHA256: `4f147dfc4a44e3822d1f4842b8d1d371c1c6fd1c2b45fd7017e60c2cbaacb3be`.

Additive correction preserves the original source, page and diagnostics. The response screen now explicitly asks students to classify both pathways, give formation evidence and explain why spore alone is insufficient. Both supplied cases remain visible throughout the planned attempt. `invariants.json` verifies that every spoken block and every scene duration is unchanged. The full silent candidate remains 9879 frames, 329.3 seconds. Planned attempt local 785 to 1145; first feedback mounts at 1145 after the separate 24-frame transition tail.

`FlowDiagram` supports nodes, edges and one delay, but no explicit per-node cues. Its catalogue lookup cannot align this docs-owned source. `FungiStagedVideo.tsx` therefore reuses the registered diagram primitive through the exact existing LessonVideo renderer, supplying only one current node and one necessary anchor. It replaces those props at scene-specific semantic phrase estimates. Future-stage labels are absent, and later stages cannot fall back to an early global stagger. The layout and whole-lesson transitions remain those of the existing renderer. These are labelled process models, not anatomical drawings.

`cue-plan.json` stores exact spoken trigger phrases, estimated scene-local frames and the selected label/anchor for each stage. These estimates use word position at hypothetical 140 words/minute. Before fresh voiced production, resolve each phrase against the selected recording alignment, replace its frame and check transitions/response silence in the exact voiced revision. The cue plan is preparation evidence, not measured timing.

Rebuild and verify from repository root:

```powershell
node docs/production/overnight-module5-2026-10-10/biology-fungi/revision-02/build.mjs
node docs/production/overnight-module5-2026-10-10/biology-fungi/revision-02/verify.mjs
node docs/production/overnight-module5-2026-10-10/biology-fungi/revision-02/sample.mjs
node scripts/validate-lesson.mjs docs/production/overnight-module5-2026-10-10/biology-fungi/revision-02/lesson.json
node scripts/check-production-brief.mjs docs/production/overnight-module5-2026-10-10/biology-fungi/revision-02/production-brief.json --stage=draft
```

Draft checks and lesson validation pass. Existing optional validator warnings do not require artificial hook/quickCheck/misconception quotas. Independent exact-source and implementation review, continuous playback, fresh narration, measured cue alignment, exact voiced preview, human listening, captions/devices and all export/release gates remain pending. Do not bind the original review to these changed bytes. No paid voice, shared renderer edit, full export or publication occurred.

Bounded native 480px samples and `native-samples.json` live in `out/prototypes/overnight-biology-fungi-2026-10-10-v2/`. Inspect the mechanism stage samples, complete response prompt and unchanged quiet notes separately from continuous playback/listening.

