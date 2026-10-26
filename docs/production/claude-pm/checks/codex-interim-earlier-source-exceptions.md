# Earlier-wave exact-source exceptions

25 October 2026. Read-only investigation of the five named items from the [wave 4 local audit](codex-interim-wave4-metadata.json). No media, caption, lesson, upload, board or status file was changed. No audio was listened to. Local file hashes establish which media was inspected; the upload record is not a fresh read-back from YouTube.

## Source selection and media duration

Each actual explainer `config.ts:1` imports `docs/production/claude-pm/lessons/<key>/measured/lesson.json`, with keys below. Each source uses 30 fps and zero intro frames. The unmeasured `<key>/lesson.json` is a short build input, not the rendered timeline. Use the measured source, not that input or a neighbouring lesson.

All five local MP4 SHA-256 hashes exactly match [wave4-uploads.json](../youtube/wave4-uploads.json). Duration and frame counts were read with bundled `node_modules/@remotion/compositor-win32-x64-msvc/ffprobe.exe`; no re-encoding was performed.

| Lesson | Source key | Sequential source duration | Local MP4 duration | Last caption in recorded track | Timeline history |
| --- | --- | --- | --- | --- | --- |
| bio-m5-b03a | b3a | 510.400 s, 15,312 frames | 510.100 s, 15,303 video frames | 541.000 s | Current source equals `cb9d0e0` (13 Oct), before upload 14 Oct. Nine-frame media/source discrepancy remains unexplained. |
| chem-m5-c04b | c4b | 516.666667 s, 15,500 frames | 516.666667 s | 548.046 s | Current source equals `cb9d0e0` (13 Oct), before upload 15 Oct. |
| chem-m5-g03d | g03d | 499.166667 s, 14,975 frames | 499.166667 s | 469.546 s | Current source equals `6c946e3` (16 Oct), upload 16 Oct. |
| chem-m5-c15 | c15 | 546.033333 s, 16,381 frames | 546.033 s | 511.613 s | Current source equals `6ea59f5` (18 Oct), upload 20 Oct. |
| chem-m5-p01 | p01 | 516.733333 s, 15,502 frames | 516.733 s | 482.313 s | Current source equals `125bad3` (18 Oct), upload 19 Oct, v2 MP4. |

No post-upload measured-duration change was found in Git or working-copy hashes for these sources. Duration agreement supports source selection but does not alone verify each internal cut or spoken cue. B3a's 0.300 s difference must not be spread across all captions, attributed to a particular cut, or used to infer speech speed. The uploaded MP4 is nine video frames shorter than the current source; the location of that difference was not established here.

## B3a and C4b: stale source plus the generic scheduler

This is not just a caption tail that can be clipped. Both recorded `captions.srt` files exactly equal the current generic `lessonCaptionCues` plus `toSrt` output when given the older source from commit `e05a3dc` (13 Oct). They do not equal the generic output from their current source.

The only change between that older measured source and `cb9d0e0` in each lesson is the attempt hold: 2,250 frames (75 s) became 300 frames (10 s). B3a's attempt duration changed from 3,851 to 1,901 frames; C4b's from 3,861 to 1,911. Local narration, audio references and word captions were unchanged. This 65 s reduction was committed before upload, not after it.

The stale files also use the old engine's overlapping timeline. `src/lesson/timeline.mjs:20` subtracts 24 frames per scene boundary. Explainer playback and audio instead use consecutive full scene durations (`src/explainer/ExplainerVideo.tsx`, `scripts/render-explainer.mjs:53` to 65). The explainer caption helper uses that same sequential schedule (`scripts/lib/explainer-captions.mjs:26`).

| Lesson | Recorded notes first cue | Sequential current notes first cue | Corrected final cue end from current timed words |
| --- | --- | --- | --- |
| B3a | 536.600 s | 485.200 s | 489.600 s |
| C4b | 543.567 s | 491.367 s | 495.847 s |

Root can prepare new caption copies from the imported current measured sources and their existing timed words. Do not trim off the late captions, shift the whole file by 65 s, or choose `captions-fixed.srt` merely by its filename. B3a's new copy still needs comparison with the exact uploaded MP4 because of the nine-frame discrepancy; the arithmetic does not locate it.

## G03d: chapter starts

The two audit candidates are genuine differences from the imported sequential timeline, rather than evidence of a later source revision:

| Chapter | Recorded time | Current scene start | Integer timestamp at/before that start |
| --- | --- | --- | --- |
| Question 4b: reuse K | 5:13 | `q4b-question`, frame 9,422, 314.066667 s | 5:14 |
| Choose the first move | 7:20 | `decision-board`, frame 13,236, 441.200000 s | 7:21 |

These are the exact source-based replacements if root retains its existing whole-second floor policy. The stored caption file exactly matches the generic export from current measured JSON, so captions also need the sequential explainer schedule. Do not use those SRT timestamps to choose chapters.

## C15: short chapter belongs to the preceding interval

The recorded chapter `4:02 Dilute, calculate, compare` runs only nine seconds before `4:11 The common ion effect`. The audit's `short-chapter` label was attached to the next heading, but the short interval is 4:02 to 4:11. The actual `memory-aid` scene lasts 9.466667 s, from 241.733333 to 251.200000 s. This is not a changed duration or a need to lengthen the video.

Minimal correction: remove the standalone `4:02 Dilute, calculate, compare` chapter and keep `4:11 The common ion effect`. The memory aid remains in the video inside the previous chapter. The resulting previous interval is 2:48 to 4:11, and no other recorded interval is under ten seconds. Root should make the chapter-array and description changes together. The stored SRT exactly matches the current generic export and also needs the sequential explainer schedule.

## P01: fixed means reflowed, not retimed

The recorded uploaded track is `p01/measured/captions-fixed.srt`, SHA-256 `294a13ed0ceaff6cc08baf40e6ef70c0ebfba62cb170b9f392fbffe1860480da`. It has the same 186 cue timestamps and exactly the same word sequence as `captions.srt`. Only line breaks changed: the longest text line decreased from 60 to 42 characters. [status.md](../status.md), lines 973 and 985, describes it as the reflowed 186-cue track prepared after the first upload attempt. Nothing in that repair corrected scheduling.

The original `captions.srt` exactly matches the current generic exporter. Its 24-frame boundary overlaps accumulate, so the fixed track still displays answers during response holds:

| Cue | Recorded fixed-track start | Sequential current start from the same timed words |
| --- | --- | --- |
| First feedback, `Add the same ten drops...` | 377.867 s | 388.266667 s |
| Second feedback, `It isn't supported yet.` | 426.367 s | 438.366667 s |
| Notes opening | 477.834 s | 491.433333 s |

Prepare a new sequential-timeline copy from `p01/measured/lesson.json`; preserve the reflow where practical. Do not upload the original generic track in place of the fixed track and call that a repair. The MP4 must be v2: `Explainer-chem-m5-p01-v2.mp4`, as required by [brief 28q](../codex-prompts/28q-youtube-upload-chem-p01.md).

## Recorded paths and exact fingerprints

The caption paths below are the actual recorded upload paths. Every current caption hash matches the recorded `captionSha256`. Every current MP4 hash matches recorded `sha256`. SHA-256 values pin current bytes, not an assertion that a live upload has been replaced.

### bio-m5-b03a

- MP4: `out/explainer/Explainer-bio-m5-b03a/Explainer-bio-m5-b03a-v1.mp4`
- MP4 SHA-256: `69f7f57120e758ba87d08c8adfcccf935f91ea77ffe250601f6ab86ea481bcd1`
- Recorded caption: `docs/production/claude-pm/lessons/b3a/measured/captions.srt`
- SHA-256: `bf5ceea5bff480b0f56854b99ee57bce19aebab0639e349d1772c0b5bdbe5e99`
- Imported source: `docs/production/claude-pm/lessons/b3a/measured/lesson.json`
- SHA-256: `68130604814d25b8b3fc14e38fcf6965c33866b82b0a29daff2a867b44a543f7`
- Actual config: `src/explainer/lessons/bio-m5-b03a/config.ts`
- SHA-256: `5096c79084a170e426366e0b9d85b9a3d0f99012594d4c47b3b869d6f7f6268b`

### chem-m5-c04b

- MP4: `out/explainer/Explainer-chem-m5-c04b/Explainer-chem-m5-c04b-v1.mp4`
- MP4 SHA-256: `c80e15b9768afb39455b76b04b644285af9a6e4902b984d816353188184cb600`
- Recorded caption: `docs/production/claude-pm/lessons/c4b/measured/captions.srt`
- SHA-256: `5d8ad171af3f1102d0a1c18a2c2325ccbbbe949a05d19f5a71782b5aadb970d4`
- Imported source: `docs/production/claude-pm/lessons/c4b/measured/lesson.json`
- SHA-256: `c7849f41ebe2495641e532f83ef74b5bdd3165119ef4d4006dc9fd8d25da6f21`
- Actual config: `src/explainer/lessons/chem-m5-c04b/config.ts`
- SHA-256: `37608f76a38a1d06777dd1f0dcbbb68e6b4228ff1e864520c5a61b0b58c8efa8`

### chem-m5-g03d

- MP4: `out/explainer/Explainer-chem-m5-g03d/Explainer-chem-m5-g03d-v1.mp4`
- MP4 SHA-256: `54c976604e33a64941a34f779dd12de85b09b5683e86cef3a4f6299eecaaffbe`
- Recorded caption: `docs/production/claude-pm/lessons/g03d/measured/captions.srt`
- SHA-256: `3166c5b81dd1e0b881fcacf29b063d86cc0b5a8f4d115f8d793993fba9cee8f9`
- Imported source: `docs/production/claude-pm/lessons/g03d/measured/lesson.json`
- SHA-256: `dc6230a21258810edf04170d8e5d63fb9053e76323cbb10599af4affcb3d717d`
- Actual config: `src/explainer/lessons/chem-m5-g03d/config.ts`
- SHA-256: `77e02e2d80b79aec6f6f689cb8ac3fbbe1b4bcd2e267a06b810cd35d6b8e0963`

### chem-m5-c15

- MP4: `out/explainer/Explainer-chem-m5-c15/Explainer-chem-m5-c15-v2.mp4`
- MP4 SHA-256: `00483dbc000a20d36bf7e22053058ff75e04d17e12f7f22516da8d9202c2a96f`
- Recorded caption: `docs/production/claude-pm/lessons/c15/measured/captions.srt`
- SHA-256: `3206fd13a7fe19ab8ba0e40d74784b884843040f667835af0fb7dd361d27e44f`
- Imported source: `docs/production/claude-pm/lessons/c15/measured/lesson.json`
- SHA-256: `1f141c50674de29db330b87300966534ddb87849612c257fe8fdecc618dc1504`
- Actual config: `src/explainer/lessons/chem-m5-c15/config.ts`
- SHA-256: `73e95a175366c7dbbdac083e43abb6d4ca52de82bffc3c4c9657605b6b44a277`

### chem-m5-p01

- MP4: `out/explainer/Explainer-chem-m5-p01/Explainer-chem-m5-p01-v2.mp4`
- MP4 SHA-256: `f52d475a9bd4f26a1022014e70c7cbf7e2de71d859b77db44195f6b48d5c6f70`
- Recorded caption: `docs/production/claude-pm/lessons/p01/measured/captions-fixed.srt`
- SHA-256: `294a13ed0ceaff6cc08baf40e6ef70c0ebfba62cb170b9f392fbffe1860480da`
- Imported source: `docs/production/claude-pm/lessons/p01/measured/lesson.json`
- SHA-256: `5b71bd32457660a473d631806e932a937fca98b2d3d09aba6bd85222f6686599`
- Actual config: `src/explainer/lessons/chem-m5-p01/config.ts`
- SHA-256: `eebc3f2dda2d895d4209299169f2ba4bd0c20c48ddfa2817d7268e261e8fb256`

Upload record SHA-256: `fb2fadb562ad7988b121c126e740c02a52984e2c22a04d0de7ea1f57313f764a`.

## Independent review of prepared C4b and P01 tracks

25 October 2026. Reviewed the two candidates in `out/caption-repairs/earlier-waves-2026-10-25-v2/manifest.json`. This checks local candidate files only. B3a remains outside this review; no 0.300 s correction was applied.

Timing was recalculated independently in Python, without importing the new caption library or using its cue times as expected results. For each original cue, its words were matched in order to the source's timed caption words. Expected absolute times were calculated as the sum of all preceding scene durations divided by 30, plus the first/last word's local time. Starts were rounded up to milliseconds and ends down.

| Candidate | Cues checked | Scenes | Response holds checked | Maximum timestamp difference | Final cue end |
| --- | --- | --- | --- | --- | --- |
| chem-m5-c04b | 194 | 17 | 1 | 0 ms | 495.846 s |
| chem-m5-p01 | 186 | 18 | 2 | 0 ms | 495.913 s |

Both candidates pass this source comparison. Every source caption word is covered once, in order. Corrected SRT and VTT cues have identical text and timing. Every original cue's text and internal line breaks are preserved exactly, including P01's reflowed lines. No cue crosses a scene boundary, overlaps another cue, enters a response hold or extends past the source duration. Current source, original caption and corrected SRT/VTT hashes match their manifest entries.

The preparation script's cue-level comparison accepts P01's reflow without treating it as a timing repair. Its historical C4b branch checks identical scene IDs, narration/audio fields and local caption arrays, then reproduces the old source's generic export. This independently confirms the two reviewed outputs; it does not approve unreviewed candidates. The script checks local media duration rather than rehashing the MP4, so media identity for these two continues to rely on the exact MP4 hash checks recorded above. Playback and human listening remain pending.

Reviewed output fingerprints:

| File | SHA-256 |
| --- | --- |
| `out/caption-repairs/earlier-waves-2026-10-25-v2/chem-m5-c04b.srt` | `8467513f225784d802de313d007b6a7fa11336326c90b768499f4b17ade707d9` |
| `out/caption-repairs/earlier-waves-2026-10-25-v2/chem-m5-c04b.vtt` | `e7b2d723c98cc2a217a3125058bd8ea427cb7c4a01c9a11266e8b120935e515c` |
| `out/caption-repairs/earlier-waves-2026-10-25-v2/chem-m5-p01.srt` | `282dea5922ea9a13bf218ee0a06e2ad03ca3add1984af338e2edef0f73bff6cf` |
| `out/caption-repairs/earlier-waves-2026-10-25-v2/chem-m5-p01.vtt` | `ea9c6178c63dd9598be7ae9534ce5366ac45a8ef9430d8c7547515b52eacee15` |

Reviewed manifest SHA-256: `82f925c927ca676b53b2e796462021e426f92fbf32bfba9f8c039778478c7643`.

## Independent review of prepared B3a track

25 October 2026. Reviewed `out/caption-repairs/earlier-b03a-2026-10-25/manifest.json`. All 191 corrected SRT/VTT cues match timing independently calculated in Python from the measured source's timed words plus cumulative scene durations at 30 fps. Starts were rounded up and ends down to milliseconds: maximum difference 0 ms. Every source word is covered once in order. Original cue wording and internal line breaks are preserved exactly, and SRT/VTT agree. No cue overlaps another, crosses a scene boundary or enters the response hold. The last cue ends at 489.600 s, before the actual 510.100 s container end. No 0.300 s shift or scaling was applied.

Recomputed hashes match the manifest for the measured JSON, original recorded caption, corrected SRT/VTT and exact uploaded MP4. The recorded PCM evidence contains feedback-one correlations 0.960661, 0.996506 and 0.894657 in three non-silent windows, with a refined start about 0.333 ms before the exact 376.033333 s schedule. Key-notes records a one-second correlation of 0.968524 at its 485.200 s schedule. These results support those tested starts rather than moving them 0.300 s earlier. This review inspected recorded numerical evidence; it did not repeat PCM correlation or perform human listening.

Provenance mismatch: the manifest pins timing-evidence SHA-256 `ddbacaac240de2b36d226677b13690ee5f11cf0638327d603f84fcdb82543720`, but the current evidence JSON hashes to `7c56e21ab04468a4a98b3722db0b769b721068ec8819c79acb7139621d9dc3cd`. Root must refresh that reference or restore the frozen evidence before treating the package as fully pinned. Caption timing checks above pass independently of this hash mismatch.

The unexplained nine-frame media/source tail difference remains separate. Its cause and location are not established by this review. These are local caption timing results, not general playback, narration quality or release approval.

| Reviewed file | SHA-256 |
| --- | --- |
| `out/caption-repairs/earlier-b03a-2026-10-25/manifest.json` | `ccb71273dc778815c233e6f37d495883209a958caf67ee6f4e8612c460cc29d5` |
| `out/caption-repairs/earlier-b03a-2026-10-25/bio-m5-b03a.srt` | `bc1f30ff9315db06aceb6aab5924a2eaaa390d79723adb116d92c50dbff7ac58` |
| `out/caption-repairs/earlier-b03a-2026-10-25/bio-m5-b03a.vtt` | `e46fcaca88c937d56bf44a80c0f29850ca0ad6232cd3bcea8a00c2e783c06f86` |
| `docs/production/claude-pm/checks/codex-interim-b03a-audio-evidence.json` | `7c56e21ab04468a4a98b3722db0b769b721068ec8819c79acb7139621d9dc3cd` |

### B3a evidence reference refreshed in v2

The subsequent `out/caption-repairs/earlier-b03a-2026-10-25-v2/manifest.json` resolves the provenance mismatch recorded above. Its timing-evidence reference matches the current evidence JSON. Both corrected caption files are byte-for-byte identical to the 191-cue files independently checked above, so all those arithmetic, text and line-break results also apply to v2. Rechecked measured-source, original-caption and MP4 hashes match the v2 manifest. The corrected stale limitation wording does not change the recorded PCM results. No additional timing shift was made.

V2 manifest SHA-256: `b3446ac75ffc13c07353fdf9547f784c9559e10a796ef5f82cc0e77eb3feab4f`. Timing-evidence SHA-256: `7c56e21ab04468a4a98b3722db0b769b721068ec8819c79acb7139621d9dc3cd`.
