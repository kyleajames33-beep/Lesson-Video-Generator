# Earlier-wave caption review

Date: 25 October 2026. Independent Codex source review of the seven Public videos recorded in `wave1-uploads.json`, `wave2-uploads.json` and `wave3-uploads.json`.

**All seven currently recorded local SRT files exactly reproduce the legacy overlapping timeline, rather than the cumulative timeline of their configured explainer.** All seven expose feedback captions during their response hold. These results were checked individually, including mould's separate source. They do not establish the exact captions currently served by YouTube.

## Scope and source association

The records have no `lessonId`, so each ID below was inferred from its exact `out/explainer/Explainer-<id>/` MP4 folder. Selected records by `visibility: Public`, including the five early records with no `status` field. Used each exact recorded `captionFile`, not a nearby `captions-fixed.srt` or a later lesson revision.

Read each explainer's actual `config.ts` import and followed it to the measured JSON. The imported JSON is adjacent to its recorded caption file in every case. The mould config explicitly imports `docs/production/fungi-design-reset-2026-10-11/teaching-reset-take02/measured/lesson.json`; it does not use a standard Claude lesson folder. The historical upload briefs 06, 11 and 18 name the same MP4/caption associations. The current scene starts agree with the corresponding recorded chapter anchors, and the cumulative durations agree with the rounded recorded durations.

| Wave | Inferred lesson ID | Config folder under `src/explainer/lessons/` | Exact measured source directory | Cumulative duration | MP4 identity check |
| --- | --- | --- | --- | ---: | --- |
| 1 | chem-m5-c01 | `chem-m5-c01` | `docs/production/claude-pm/lessons/c1/measured` | 426.700 s | Recorded MP4 missing locally |
| 1 | bio-m5-b01 | `bio-m5-b01` | `docs/production/claude-pm/lessons/b1/measured` | 482.333 s | Recorded MP4 missing locally |
| 1 | bio-m5-mould | `mould` | `docs/production/fungi-design-reset-2026-10-11/teaching-reset-take02/measured` | 236.200 s | Recorded MP4 missing locally |
| 2 | chem-m5-c02 | `chem-m5-c02` | `docs/production/claude-pm/lessons/c2/measured` | 529.933 s | Recorded MP4 missing locally |
| 2 | bio-m5-b02a | `bio-m5-b02a` | `docs/production/claude-pm/lessons/b2a/measured` | 618.967 s | Exact recorded SHA256 matches |
| 3 | chem-m5-c03 | `chem-m5-c03` | `docs/production/claude-pm/lessons/c3/measured` | 582.733 s | Exact recorded SHA256 matches |
| 3 | bio-m5-b02c | `bio-m5-b02c` | `docs/production/claude-pm/lessons/b2c/measured` | 584.567 s | Exact recorded SHA256 matches |

The three available files' hashes match the exact upload-record MP4s, not merely filenames. Read-only `ffprobe` checks show container durations 618.966667, 582.733000 and 584.566667 seconds respectively. C3's video stream ends at 582.700000 seconds, one frame short of its source duration; its audio/container duration agrees with 582.733 seconds. This end difference does not explain an accumulating caption advance measured in seconds.

C1, B1, mould and C2 were absent at their recorded paths and no matching MP4 filename was found elsewhere under `out`. Their configured source and record association are established, but local exported-media identity and duration cannot be reverified. None of these checks is an immutable historical binding of the current JSON hash to a rendered soundtrack, nor is it a listening check.

## Cue comparison

For each lesson, compared every current SRT cue with `toSrt(lessonCaptionCues(lesson).cues)` from the legacy exporter. Separately generated expected values in memory using per-scene word captions and cumulative scene durations. Also repeated the cumulative comparison without importing the grouping helper or serializer: matched each original cue's text consecutively to its source words, then calculated the cue start from its first word and end from its last word, adding the cumulative frame offset and applying the output rounding rules.

All 7,806 source words were consumed in order and account for all 1,255 cues. Each cue group matches the measured source text exactly, and the complete normalised caption text matches the source narration. All samples have 30 fps, an explicit zero intro and no nonzero local voiceover start. There are no adjacent cue overlaps or nonpositive intervals in these current files; their problem is the wrong scene offset.

| Lesson | Cues | Legacy byte equality | Legacy text/timing mismatches | Cumulative timing mismatches | Largest advance |
| --- | ---: | --- | --- | ---: | ---: |
| chem-m5-c01 | 158 | Exact | 0 / 0 | 148 | 8.000 s |
| bio-m5-b01 | 163 | Exact | 0 / 0 | 150 | 8.000 s |
| bio-m5-mould | 78 | Exact | 0 / 0 | 71 | 6.400 s |
| chem-m5-c02 | 192 | Exact | 0 / 0 | 172 | 8.000 s |
| bio-m5-b02a | 233 | Exact | 0 / 0 | 219 | 10.400 s |
| chem-m5-c03 | 226 | Exact | 0 / 0 | 210 | 12.000 s |
| bio-m5-b02c | 205 | Exact | 0 / 0 | 195 | 9.600 s |

The legacy timeline subtracts 24 frames per preceding scene. The explainer renderer and full-render narration mux use complete cumulative durations, as documented in `codex-interim-caption-drift-review.md`. At 30 fps, the advance is 0.8 seconds per preceding scene. The separate direct-word calculation confirmed the same result for each earlier lesson. No captions or replacement tracks were written.

## Response-hold evidence

Each lesson has one response hold. Every overlapping cue below was identified as feedback by its exact source word group, rather than assumed to be feedback because it falls inside a hold. Times are seconds; expected starts use upward millisecond rounding.

| Lesson / feedback scene | Scene index | Current first feedback cue | Cumulative expected cue | Advance | Response hold | Feedback cues overlapping hold |
| --- | ---: | ---: | ---: | ---: | --- | ---: |
| chem-m5-c01 / feedback | 8 | 321.300 | 327.700 | 6.400 s | 301.900 to 326.900 | 2 |
| bio-m5-b01 / feedback | 8 | 374.534 | 380.934 | 6.400 s | 355.133 to 380.133 | 2 |
| bio-m5-mould / mould-feedback | 6 | 154.034 | 158.834 | 4.800 s | 143.033 to 158.033 | 2 |
| chem-m5-c02 / feedback | 8 | 390.867 | 397.267 | 6.400 s | 361.467 to 396.467 | 3 |
| bio-m5-b02a / feedback | 11 | 504.500 | 513.300 | 8.800 s | 477.500 to 512.500 | 4 |
| chem-m5-c03 / feedback | 13 | 459.567 | 469.967 | 10.400 s | 459.167 to 469.167 | 5 |
| bio-m5-b02c / feedback | 10 | 431.900 | 439.900 | 8.000 s | 379.100 to 439.100 | 3 |

There are 21 feedback-cue overlaps across the seven holds. The cumulative in-memory simulation has zero hold entries, zero adjacent overlaps and zero nonpositive intervals.

## Correction boundary

The individually checked current sources support additive caption candidates using their cumulative explainer schedule. A single global time shift cannot correct the growing advance. Use the exact configured source paths above, including mould's distinct path, and preserve the originals.

Before replacing public tracks, verify the exact exported media where it is missing and check the exact prepared tracks against that media. Wave 1 and wave 2 contain **no recorded `captionSha256`** for any of their five videos. The hashes below identify the current local files only; they cannot establish that the files are unchanged from upload. Wave 3's two current SRT hashes match their recorded caption hashes. Live caption state and human listening remain pending. This review does not authorise or claim a live change.

No scripts, captions, tracks, narration, scenes, media, board or status files were changed. This reviewer created only this report.

## Provenance

| Upload record | Current SHA256 |
| --- | --- |
| `docs/production/claude-pm/youtube/wave1-uploads.json` | `ce6dbc06f6656d8f01230ec5fc05840b25e11aea4cac0d7ef37d954017b4e2e5` |
| `docs/production/claude-pm/youtube/wave2-uploads.json` | `6f92fc057ba076e83d0f613f6d1aa1320f562516fcb08f3e57a576ded97de679` |
| `docs/production/claude-pm/youtube/wave3-uploads.json` | `bbe18ab19accc90d8ec5116a04b68f1ba28b12f2c8ce3d939703363496962ac8` |

Each lesson's two hashes below identify `lesson.json` and the recorded `captions.srt` in its exact measured source directory listed above.

| Lesson | Measured JSON SHA256 | Current recorded-path SRT SHA256 | Recorded caption-hash evidence |
| --- | --- | --- | --- |
| chem-m5-c01 | `fb9618b492abb21c647273f92e0515bb6fd555a5649f5c3dbfe9acb3d9be68a7` | `97a7eb56a5dbcf5a614d474d2a256c01a88ea411a82c9ef56304244e90b09309` | Absent |
| bio-m5-b01 | `8dd6106d82a5b2fd5cfc7f0ea442c285b5b303595ce076532a652cc072f0a94f` | `44a2a50ae2425685b49c9d0a88acce1af32617222513137aa949e1419a788327` | Absent |
| bio-m5-mould | `92bcf4c4bcca756b386b753bbf676fd46b04bf46c7b7aea664a13e42410d00a9` | `be6a02cbeb5e8516568e719b35da01217e71a2a3092e97805c8e22110df1b3dd` | Absent |
| chem-m5-c02 | `f04fbd85fce939bb2ad8169bced612c53d546448981fdd1b854b32718f4381f5` | `b11aa3bffdda6b4e52cb28310a7d5fa145f1cf500dea607855bf1efad6951bbd` | Absent |
| bio-m5-b02a | `82b6778b5b2ad1388dd0fa50de827f852306a00b591f24f493971afeca7a6d43` | `4bb818f95637a72a3d47ab37968ffde752b220ae8b1815014fab3d67e1f2c439` | Absent |
| chem-m5-c03 | `469abdc9ba9cd7cf4edf979dc38a6f03a7d20e1e5db71074f92410ec4958bcf6` | `a9b6be733ef10b60094bd7fad7a4964a2104b3be1d86d8bf1ec6fc30a14c60c1` | Matches record |
| bio-m5-b02c | `35e4cc818978a2d3bb09535f04901811a295fc5659fbc0c2bb60f4ca526df9aa` | `26357c993d9922c5d290716bd4fba99684b4640fa4e1e3a3c4d0b23ec0637063` | Matches record |

| Available recorded MP4 | Current SHA256, matches upload record |
| --- | --- |
| `out/explainer/Explainer-bio-m5-b02a/Explainer-bio-m5-b02a-v1.mp4` | `63b010ca2c1396d68cd457c83f477bb7decab45dc019dd75405aefc9424b12f9` |
| `out/explainer/Explainer-chem-m5-c03/Explainer-chem-m5-c03-v1.mp4` | `1e1fe4141271d42b0d9d738e89501fc023d2f6c0e1de28ab3d681f6beeecc344` |
| `out/explainer/Explainer-bio-m5-b02c/Explainer-bio-m5-b02c-v1.mp4` | `331ce5481628be7a344301b66ce19cc218cec1c26b3f65d8f6a68951900e60b5` |
