# C2 and B2 recording preparation

Prepared 10 October 2026 by Sol 6.1. The frozen selected sources and their briefs were read only. Both recording-stage brief checks passed, with exact voiced preview and human listening still pending. The independent selected visual still review also passed at `docs/production/module5-c2-b2-selected-visual-review-2026-10-10.md`, SHA-256 `d4acff80686ddaca583de3dafd9bd83243c80ff10b45f27849621f2db447b194`. This is source and sampled still evidence; root owns new paid recording. This folder supplies new-take manifests, request settings, assembly plans and cue inventories; it does not supply recordings or media approval.

| Package | Frozen source SHA-256 | Separate recordings | Planned response gap |
| --- | --- | --- | --- |
| Chemistry C2 | `ce66abda591b0dbf8bff7371cb87d43fb0f6fce5bd0c819e80d21796248dac90` | 9 | 10 seconds, 300 frames |
| Biology B2 | `a9caaa09366537f56d1ea60cee0184313a62a421b9b64e76b023ae5c112ca8af` | 11 | 12 seconds, 360 frames |

Every segment retains its accepted text exactly. The manifests and `preparation-record.json` record the full SHA-256 of every text, the source segment-plan hashes, source-brief hashes and proposed raw MP3/alignment/generation sidecar paths. Audio hashes remain null because no media exists yet. C2's longest segment is 813 characters and B2's is 704, within the local v4 request builder's 2,000-character limit. Each transfer prompt and feedback is a distinct request. Silent title scenes stay silent.

Manifest SHA-256 values: Chemistry `602ed4fdda71ac4e272556d5e40c4e3bf06c907dcbb5b0c396ad6b13baf52c89`; Biology `98e4e6b4a4987fefe94904de2b8a0f08ce4cca52ccb09f1eb97d0a1351e9044b`.

## Voice and dry-run evidence

Use the established Simon Australian male voice `cOEV2DrZBBGNLpE74kQu`, model `eleven_v4`, stability `0.35` and similarity `0.75`. Settings match the existing conversational limiting and mole-ratios request-option files. The repository's current request builder uses the timestamped single-narrator dialogue endpoint and `settings.similarity`. It does not support v4 speed, style, speaker boost or SSML. No unsupported control, pronunciation dictionary or seed was added. Accent is selected through the voice. This preserves a production choice; it does not approve any future take's delivery.

The two existing generator dry runs passed. Their output is saved in `chemistry-c2.dry-run.txt` and `biology-b2.dry-run.txt`. All 20 proposed take paths were missing, so this preparation selected no historical audio and generated none. The bounded assembly-plan validations also passed, saved in the two `*.plan-validation.txt` files. There are currently 60 missing raw media/sidecars across the plans, as expected before generation. Syntax validation of the wrapper passed.

Run from the repository root:

```powershell
node scripts/generate-elevenlabs-audio.mjs docs/production/module5-c2-b2-recording-preparation-2026-10-10/chemistry-c2.voice-manifest.json --voice-id=cOEV2DrZBBGNLpE74kQu --model=eleven_v4 --request-options=docs/production/module5-c2-b2-recording-preparation-2026-10-10/request-options.json --dry-run
node scripts/generate-elevenlabs-audio.mjs docs/production/module5-c2-b2-recording-preparation-2026-10-10/biology-b2.voice-manifest.json --voice-id=cOEV2DrZBBGNLpE74kQu --model=eleven_v4 --request-options=docs/production/module5-c2-b2-recording-preparation-2026-10-10/request-options.json --dry-run
node docs/production/module5-c2-b2-recording-preparation-2026-10-10/assemble-selected.mjs docs/production/module5-c2-b2-recording-preparation-2026-10-10/chemistry-c2.assembly-config.json --validate-plan
node docs/production/module5-c2-b2-recording-preparation-2026-10-10/assemble-selected.mjs docs/production/module5-c2-b2-recording-preparation-2026-10-10/biology-b2.assembly-config.json --validate-plan
```

Explicit voice/model arguments prevent environment defaults from selecting a different model. Root's proposed paid commands are the two generator commands above with `--dry-run` removed, after the current passed visual review and source/plan validation. Only root runs those paid commands. Existing private credential loading is retained; no credential is included in this folder or these logs. Use a separate new-take path and manifest if replacing a take or changing request settings. Do not overwrite raw audio or attach a take with different request provenance.

## Assembly after new recordings

The generic assembly CLI expects every source scene to be narrated. Both selected sources have an unvoiced title, so direct use with their complete scene lists fails that contract. The bounded `assemble-selected.mjs` wrapper validates source, manifest and plan hashes, passes only narrated scenes to the existing `resolvePlayback`, then restores the untouched silent title and original scene order. It uses the shared lossless PCM, alignment and provenance handling. It introduces no replacement audio implementation and does not invent title speech.

After new raw recordings and sidecars exist, use the same config commands with `--dry-run` instead of `--validate-plan`. This performs actual decoded-media assembly validation without writing WAVs or candidates. Then root can run the commands with `--assemble` to create new additive `out/prototypes/module5-c2-voiced-2026-10-10/` and `module5-b2-voiced-2026-10-10/` assembly candidates. Existing output candidates are refused. No assembly was run in this preparation because the required new recordings do not exist.

The shared resolver inserts the frame-exact planned silence between the decoded prompt and feedback files, including frame padding. Root must inspect the actual end of spoken prompt and any provider trailing quiet. The inserted ten/twelve seconds is sample-exact, but the total quiet time since the last spoken word may also include that tail. Inspect first feedback sound and caption exposure against the actual hold, rather than calling a text estimate measured silence.

The separate `assembleTimelineNarration` aligned-PCM fallback currently requires audio in every scene, including the retained silent title. The wrapper deliberately leaves that title unvoiced. Normal Remotion scene playback supports this. If root later selects the aligned-PCM fallback, it needs a bounded explicit silent-title treatment before using that fallback; this is not a blocker to generating these accepted speech segments.

## Measured cue reconciliation and remaining gates

Each `*.cue-reconciliation.json` saves all current estimated durations, bullet seconds, reveal frames, diagram props and stage line cues. Root must resolve those estimates on a new additive voiced candidate after actual audio exists. Assembly alone changes the audio window and response hold; it does not safely replace every authored display cue. Old stage and line estimates can otherwise collapse at the new first-answer boundary.

For C2, measure reverse-arrow onset, the initially zero reverse-rate board, forward/reverse curve reveals, the separately labelled equilibrium limit, rate-versus-concentration explanation, catalyst graph onset, early comparison marker and its removal. Resolve transfer feedback stages separately, especially the net-four line and final-D line. For B2, measure chromosome-set combination, budding growth/development/detachment, fusion-location and moist-condition cues, bird fusion-before-laying, worked-case stages and the changed-current feedback. Preserve stable reading holds and all useful labels.

Keep the complete stimulus, conditions and supplied rates/current comparison answer-free through the actual response hold. Check narration, diagram/working, coach notes, transitions, recap overlays and first accessible answer caption. Rebuild accessible captions from the selected alignment and the assembled timeline; regenerate props after cue reconciliation. Bind a new schema-v2 brief to the actual voiced candidate and carry the exact-source review evidence forward with its true scope.

Listen to letters and chemical names in C2, and haploid, diploid, zygote, gametes, hydra and fertilisation in B2. These are pronunciation review targets, not findings about ungenerated speech. Difficult explanations need measured phrasing and an actual listener; unsupported v4 speed controls cannot supply a gentler pace.

Root then plays the exact voiced revision or a measured short pilot, checks captions and small-player layout, resolves findings and freezes inputs before the export-stage gate. Actual human listening, full-package review and publication remain separate pending gates. No paid request, audio copy, audio assembly, export or approval was performed by this task. The preparation script writes new files only and refuses existing targets; it is not a routine refresh after integration.
