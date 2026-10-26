# Independent caption drift review

Date: 25 October 2026. Reviewer: independent Codex reviewer.

**Confirmed in all three requested samples: the current SRT is byte-for-byte identical to the legacy overlapping timeline export and is early relative to the explainer's cumulative scene schedule.** This exposes feedback captions during all six sampled response holds. The mismatch grows by 800 ms per preceding scene, rather than being one constant offset.

## Scope and method

Read the current published records for `chem-m6-c15`, `bio-m6-b13` and `chem-m6-c01` in `../youtube/wave5-uploads.json`. For each, used the exact recorded `captionFile` and adjacent measured `lesson.json`.

Compared every current SRT cue, including text, start and end, against both:

1. `toSrt(lessonCaptionCues(lesson).cues)` from `scripts/lib/caption-timeline.mjs`, which imports `src/lesson/timeline.mjs`.
2. `toSrt` applied to the same per-scene `groupCaptionCues(scene.captions)` groups, with each group's times offset by the cumulative duration of preceding scenes, as scheduled by the explainer.

Used the grouping defaults: at most 8 words, 4.5 seconds and a 500 ms inter-token gap. Parsed both generated variants with the same SRT parser and compared every cue in order. Also compared the original SRT bytes directly with the legacy-generated string. No caption file was generated on disk. All samples use 30 fps, an explicit zero intro duration, and zero `voiceover.startFrame` values, so neither an intro nor a local audio offset explains the difference.

Inspected the current explainer registry/config imports, visual scene scheduling, audio component scheduling and the full-render narration mixing/mux source. Did not render, decode, listen to or inspect a video waveform. Did not inspect live YouTube captions. This independently verifies the three samples, not the root audit's full claim of 41 records and 85 holds. No scripts, captions, media, board or status files were changed.

## Every-cue comparison

| Lesson | Current cues | Legacy text/timing mismatches | Legacy byte equality | Cumulative text mismatches | Cumulative timing mismatches | Largest current advance |
| --- | ---: | --- | --- | ---: | ---: | ---: |
| chem-m6-c15 | 173 | 0 / 0 | Exact | 0 | 161 | 12.800 s |
| bio-m6-b13 | 162 | 0 / 0 | Exact | 0 | 151 | 10.400 s |
| chem-m6-c01 | 196 | 0 / 0 | Exact | 0 | 186 | 15.200 s |

All 531 cue texts and group boundaries reproduce from measured scene word captions. The first scene's cues have no accumulated transition difference. Every later scene uses the legacy start rather than the explainer start. The legacy export issued no warnings for these samples.

## Feedback and response-hold evidence

Times below are seconds from the beginning of the lesson. Expected cue starts include the existing `toSrt` upward start rounding; frame-based hold boundaries are shown to three decimal places.

| Lesson / feedback scene | Zero-based scene index | Expected first cue | Current first cue | Early by | Preceding response hold | Current cues overlapping hold | Cumulative simulation overlaps |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: |
| chem-m6-c15 / feedback-1 | 12 | 349.100 | 339.500 | 9.600 s | 338.300 to 348.300 | 4 | 0 |
| chem-m6-c15 / feedback-2 | 14 | 411.367 | 400.167 | 11.200 s | 400.567 to 410.567 | 5 | 0 |
| bio-m6-b13 / feedback-one | 9 | 316.334 | 309.134 | 7.200 s | 305.533 to 315.533 | 3 | 0 |
| bio-m6-b13 / feedback-two | 11 | 382.034 | 373.234 | 8.800 s | 371.233 to 381.233 | 3 | 0 |
| chem-m6-c01 / feedback-1 | 15 | 434.200 | 422.200 | 12.000 s | 423.400 to 433.400 | 5 | 0 |
| chem-m6-c01 / feedback-2 | 17 | 486.867 | 473.267 | 13.600 s | 476.067 to 486.067 | 5 | 0 |

Each of the 25 overlapping cues was traced to its feedback scene by the matching word-caption group. This is not merely a question caption lingering into a hold. For example, C15's first feedback text begins "The tablet used the acid added minus the" at 339.500 s in the current SRT, while the feedback scene and its narration input are scheduled to start at 349.100 s. In C01, some feedback captions start before the response hold and remain visible inside it.

## Source diagnosis

- `src/lesson/timeline.mjs`, lines 18 to 23: after a scene, the legacy cursor subtracts `TRANSITION_FRAMES` before starting the next scene. `src/lesson/timing-constants.json` sets that value to 24. At 30 fps, scene index `i` is therefore `i × 0.8` seconds early relative to cumulative starts.
- `scripts/lib/caption-timeline.mjs`, lines 3, 49 and 62 to 66: `lessonCaptionCues` uses that imported legacy timeline and adds its `audioStartMs` to the per-scene caption groups. `scripts/export-captions-srt.mjs` calls this helper. This path exactly reproduces every current sampled SRT byte. It identifies a matching export mechanism; it is not a historical command execution log.
- `src/explainer/ExplainerVideo.tsx`, lines 110 and 118 to 125: visual and audio sequences use the sum of preceding `durationInFrames`. The 14-frame visual fade extends a scene's visual sequence but does not subtract frames from the next scene start. The local `Audio` starts at that cumulative scene start.
- `scripts/lib/explainer-common.mjs`: `totalFrames` sums scene durations; its generated composition uses `ExplainerVideo` at 30 fps.
- `scripts/render-explainer.mjs`, lines 53 to 65: the narration mix starts with `t = 0`, delays each audio input by `round(t / 30 × 1000)` ms, then increments `t` by the complete scene duration. It does not subtract transition frames. Lines 70 to 74 normalise that narration track and mux it with the concatenated silent video.
- The three lesson configs import the exact measured JSON files inspected below. All three are included in `src/explainer/registry.ts`.

The source schedules agree with each other on cumulative scene timing. The sampled external SRTs use a different timeline. Changing chapter labels or shifting every cue by one constant would not resolve this growing mismatch. Any repair should use the explainer schedule for explainer exports and preserve the frozen legacy engine's separate schedule. The cumulative simulation removes the six sampled hold overlaps without changing word timing, text or grouping. No repair is performed by this report, and no audio playback pass is claimed.

## Exact input hashes

Paths in the first table are relative to `docs/production/claude-pm/lessons/`.

| File | SHA256 |
| --- | --- |
| `m6c15/measured/lesson.json` | `e3d6e32dc666f0aab912960db75dd2f589d28b9a4c29516148ee5017f5a773f0` |
| `m6c15/measured/captions.srt` | `ebef12201c571d5f404a133c9c17bc9d382a9fbea2ee6889469a39384852138c` |
| `m6b13/measured/lesson.json` | `1d6d81d47e555416563284fd49866822aeb3723c01151bf6bb1f2c75575b79a9` |
| `m6b13/measured/captions.srt` | `8a35ddca0619b75b25adbc5e3f9bc5df294d12f081e1aa5d0a5585a76314080b` |
| `m6c01/measured/lesson.json` | `eab426fe8219d49d7a4db5d2c7d5933c9f7cc9549ee1004704be0b7ea9385093` |
| `m6c01/measured/captions.srt` | `d677f538632361be94c99601ac02e0b638fc911365e8a4b44519360b35ffe423` |

| Scheduling/export source | SHA256 |
| --- | --- |
| `src/explainer/ExplainerVideo.tsx` | `2477FCB1235E76EB6C233738DB083950BC978BF30AB6ADEC85FD1A4CBCC322B9` |
| `scripts/render-explainer.mjs` | `BD1A67D6E3157C63251722FB31219297C4747544B19D7E993064266305119ABD` |
| `scripts/lib/explainer-common.mjs` | `F3D568452EE4C29D23A2A74FBC8AC89B0DD939F4A91C5FD82D2389146E5D31F8` |
| `scripts/lib/caption-timeline.mjs` | `1DCB9A9423A5ABB7AFCCAFE98461A7C2C33FFFC9CB15233E1C06CEA1CC4752CC` |
| `src/lesson/timeline.mjs` | `6A397F94D35765D17972ED4519F51D9EEA60AB1385E2A663C48A0E2842851512` |
| `src/lesson/timing-constants.json` | `C34B61A31CADEC788DFEE08495E51E16A40CEDC2A276C9580B48F2C989285B57` |
| `scripts/export-captions-srt.mjs` | `AD8460E59EB61F762FED0BB49441AF1AC6ED96B9A2718496AF22DB193E2F3AC6` |

## Prepared repair review

Additional review on 25 October 2026 of `out/caption-repairs/wave5-2026-10-25/manifest.json` and the new `scripts/lib/explainer-captions.mjs`, `scripts/export-explainer-captions.mjs` and `scripts/prepare-explainer-caption-repair.mjs`. The original diagnosis and original-track hashes above remain unchanged.

**No remaining error found in the reviewed repair path or the three independently checked prepared tracks.** One output-interval guard gap found during review was corrected by the integration owner and independently rechecked below.

### Independent prepared-track verification

Used a separate method that imported none of the new caption library, existing grouping helper or SRT serializer. Parsed the original SRT groups, matched each group's text consecutively to the measured scene's individual word captions, then calculated its endpoints directly from its first and last source words plus the cumulative preceding scene frames. Applied upward rounding to starts and downward rounding to ends numerically. Parsed the prepared SRT and VTT and compared every interval and text against those independent values.

All 3,286 measured word tokens were consumed in order and accounted for all 531 cues. The three sampled original SRTs still match their original hashes, and the measured JSONs and prepared tracks match their manifest hashes.

| Lesson | Prepared cues | Independent interval/text mismatches | SRT/VTT differences | Text changes from original | Nonpositive/overlapping cues | Cues entering holds or exceeding lesson |
| --- | ---: | ---: | ---: | ---: | --- | ---: |
| chem-m6-c15 | 173 | 0 | 0 | 0 | 0 / 0 | 0 |
| bio-m6-b13 | 162 | 0 | 0 | 0 | 0 / 0 | 0 |
| chem-m6-c01 | 196 | 0 | 0 | 0 | 0 / 0 | 0 |

| Lesson / feedback scene | Prepared first cue | Independently expected first cue |
| --- | ---: | ---: |
| chem-m6-c15 / feedback-1 | 349.100 s | 349.100 s |
| chem-m6-c15 / feedback-2 | 411.367 s | 411.367 s |
| bio-m6-b13 / feedback-one | 316.334 s | 316.334 s |
| bio-m6-b13 / feedback-two | 382.034 s | 382.034 s |
| chem-m6-c01 / feedback-1 | 434.200 s | 434.200 s |
| chem-m6-c01 / feedback-2 | 486.867 s | 486.867 s |

### Script inspection and resolved guard finding

The new library correctly uses cumulative scene duration and rejects incompatible fps, a separate intro, nonzero local audio starts, invalid scene durations, missing timed words, duplicate scene IDs, caption groups beyond their scene, and groups inside a response hold. Its SRT/VTT serializers are the existing serializers, rather than a second formatting implementation.

The exporter refuses an existing output directory and uses exclusive file writes. The repair preparer reads and validates all published inputs before creating its output directory, verifies the recorded original-caption hash, reproduces the diagnosed legacy track, and checks unchanged caption text. It writes additive tracks and provenance without modifying original captions or upload records.

**Guard gap found and resolved:** at first inspection, the new library accepted overlapping grouped cues and nonpositive output intervals. An in-memory scene with `One.` at 0 to 2,000 ms and `Two.` at 1,000 to 3,000 ms emitted overlapping cues. A cue at 0 to 0 ms also emitted a zero-duration interval. Reported these to the integration owner before finalization. The owner added a final pass that checks the rounded output endpoints using the serializer's rounding rules.

Independently repeated the checks against the revised library: the overlapping case now throws `Caption output overlaps`; both the zero-duration case and a 0.1 to 0.9 ms interval that collapses under output rounding throw `Caption has no output duration`. The revised library regenerates all three sampled prepared SRTs byte for byte. No fixture files or exports were written by this reviewer.

This prepared-track verification covers the three named lessons only. The integration owner's separate 41-record audit is not repeated or claimed as independent evidence here. No media playback, listening, live caption replacement or release approval is claimed. This reviewer changed only this report.

### Prepared repair provenance

Manifest SHA256 at review: `829a8f916d54fe830128d3fd1c18852948d717c3d125962bf35dd7cecaff0440`.

| Prepared file | SHA256 |
| --- | --- |
| `chem-m6-c15.srt` | `f1bbae7704ee7626a1f773d386551a57ebe5cc882a2eff0f489be5afc2137b26` |
| `chem-m6-c15.vtt` | `cdc0c9bc40cfc986a2b55b524d1bd250bd8e4489b65dccf1f96744ce5204c3dd` |
| `bio-m6-b13.srt` | `7a2c9a92363a805b7f3bb06654a5aad7c0d157acb95158ce232f6a6671ad0ed0` |
| `bio-m6-b13.vtt` | `23b473e3424fbca0f13a5548800d4e0891fb59dc9682633119db862edd10335a` |
| `chem-m6-c01.srt` | `e601731e900880701f3eff071e29f3ed2ac0050ffbf0418688e72121a2ec4ebe` |
| `chem-m6-c01.vtt` | `0da6c2a61a968136a1759313005f28ac8da5e125c8b33287d53a5732efbcbcb3` |

Prepared filenames above are relative to `out/caption-repairs/wave5-2026-10-25/`.

| Final reviewed source | SHA256 |
| --- | --- |
| `scripts/lib/explainer-captions.mjs` | `d58e8b687e54699023c9c64646ee20acdf6cf0a60a50c0fa8e5c2dbd9da3e1a9` |
| `scripts/export-explainer-captions.mjs` | `70ad215c04f9e79fd31b37ac01789d15b23c9fb704a00319f823bc3a0381c2a3` |
| `scripts/prepare-explainer-caption-repair.mjs` | `4e845a5d846614b77d3d4d256318316c548b66f2f0e257da5734f1085ef346ec` |

The pre-fix library inspected during the guard finding had SHA256 `b41b13db0de5081e8a0dff7cf446cd6d3d9675dd91e19fcc8185238d2caf0aa9`.
