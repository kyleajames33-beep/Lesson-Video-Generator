# Independent C2 and B2 voiced source and timing review

Date: 10 October 2026. Reviewer: `/root/bio_b2_independent_review_sol`.

Recommendation: use the frozen v2 candidates below for root's exact voiced preview or short pilots. The bounded source and timing findings are resolved in v2. This is not export approval, continuous playback evidence, human listening approval or public-release approval. No candidate, media, caption, component or production brief was edited by this reviewer.

## Exact reviewed inputs

SHA-256 hashes are byte hashes, not normalized JSON hashes.

| Candidate | Exact path | SHA-256 |
| --- | --- | --- |
| C2 v1, findings retained | `out/prototypes/module5-c2-voiced-2026-10-10/narrated.lesson.json` | `68a69277f041d60281369572e4f670d37e22ece12ab000706d638324bd103a90` |
| C2 v2, current recommendation | `out/prototypes/module5-c2-voiced-2026-10-10/narrated-v2.lesson.json` | `2fe120341673c6173c3070272d3fad7ddc2a60a2ac19ba630487a8da0bf3eefa` |
| C2 v2 props | `out/prototypes/module5-c2-voiced-2026-10-10/remotion-props-v2.json` | `7019df979071b2f87ab4e492d4619190dff5db7a48be5e8708c68c895cb91a40` |
| C2 measured v1 cues | `docs/production/module5-c2-voiced-preparation-2026-10-10/measured-cue-report.json` | `d029e75ca9fcdd5099be5d9ef8c1ee674a952ee2fe39e0513fa3efa6adca4ec0` |
| C2 bounded correction | `docs/production/module5-c2-voiced-preparation-2026-10-10/v2-order-correction.json` | `e90a9c70dbde5715fe6716b26b9610ff5b6660b17e128666f55d69845b743f56` |
| B2 v1, findings retained | `out/prototypes/module5-b2-voiced-2026-10-10/narrated.lesson.json` | `3217ae473f9929986e853804766ab4d1a6f20067f360052e979b1b1e2e4d0dc0` |
| B2 v2, current recommendation | `out/prototypes/module5-b2-voiced-2026-10-10/narrated-v2.lesson.json` | `f4f0bf6ac5fd414d00e8e53aa19b0859b9d97d18752455a3ffaf03eb11917b49` |
| B2 v2 props | `out/prototypes/module5-b2-voiced-2026-10-10/remotion-props-v2.json` | `08aba4de4505b46eed58cf18b58891d7a1f319935d4b74c3b0d0328f39122f37` |
| B2 measured v1 cues | `docs/production/module5-b2-voiced-preparation-2026-10-10/measured-cue-reconciliation.json` | `1434b4025d18b10f16dcf21a37a57c684e1f0dbb4bba2c5e25294cc2b7db321e` |
| B2 bounded correction | `out/prototypes/module5-b2-voiced-2026-10-10/v2-order-correction.json` | `73a38bbe4efa2056f5baf7af8eeb125efb254f574af7957a25c02e0ce563dfe5` |

The B2 correction report is under `out/prototypes`, not the preparation docs directory. Each v2 props file contains the exact corresponding v2 lesson object. The measured v1 reports retain their original row indices; use the correction reports to interpret the v2 display order. Do not bind a current brief to v1 merely because its measured report was reviewed.

## Concrete findings on v1

1. **P1, B2 quick-check spatial order. Resolved in v2.** The final stage placed `Development and predation still matter.` above `Survival to reproduction is separate.`, with `lineAts: [2166, 2034]`. Speech intentionally introduces survival first. The fixed two-row layout therefore revealed the lower row while the upper row remained blank, then redirected attention upward 132 frames (4.4 seconds) later. Preserve the speech and cues but put the survival row first. V2 changes only those paired `lines` and `lineAts` arrays, now `[2034, 2166]`.
2. **P1, C2 transfer spatial order. Resolved in v2.** Stage 0 revealed the lower initial-increase result at 1472 before the upper reverse-process explanation at 1544. The final stage revealed the lower sooner result at 2339 before the upper unchanged-final-D result at 2413. Both cues follow the actual words; the display order imposed two upward attention changes. V2 reverses each paired text/cue array, giving `[1472, 1544]` and `[2339, 2413]`. Stage sequence, labels and established-result summaries remain unchanged.
3. **P2, C2 model bullet order. Resolved in v2.** Fixed rows had cue order `[113, 588, 376]`, causing the third bullet to precede the second. V2 reorders the complete bullet objects to one-to-one conversion, model restriction, then A-only start, with frames `[113, 376, 588]`. Each original text remains paired with its original seconds value.

These were display-order findings, not requests to delay or rewrite the recorded reasoning. Recursive v1/v2 JSON comparisons independently confirm exactly the three requested C2 display groups (one bullet array and two text/cue pairs) and two paired arrays in one B2 stage changed. All voiceover objects, word captions, scene durations, response holds, diagram props, other reveal values, stage order and summary trails are unchanged. V1 and initial assembled inputs remain preserved. Correction reports' protected-file and output hashes were checked against actual files.

## Independently checked words, audio and alignment

- Checked the selected source hashes against recording manifests and assembly records. C2 selected source is `ce66abda591b0dbf8bff7371cb87d43fb0f6fce5bd0c819e80d21796248dac90`; B2 selected source is `a9caaa09366537f56d1ea60cee0184313a62a421b9b64e76b023ae5c112ca8af`.
- All 9 C2 and 11 B2 generation requests exactly match their manifest segment text and raw alignment characters. Segment UTF-8 text hashes match. Assembled scene narration is the exact space-joined sequence of its manifest segments. Each request and generation sidecar identifies `eleven_v4`, Simon voice ID `cOEV2DrZBBGNLpE74kQu`, stability 0.35 and similarity 0.75. This checks recorded provenance, not the sound of the voice.
- Independently hashed all 20 source MP3 files, alignment sidecars and generation sidecars against assembly dependencies, plus every assembled WAV and alignment against assembly provenance. Checked actual WAV headers and sample counts: 48 kHz, mono, signed 16-bit PCM, exact recorded frame lengths at 30 fps.
- Checked monotonic character timing and reconstructed all 871 C2 and 1030 B2 word captions from assembled alignment characters and times. Caption text, start and end times match the lesson objects; none exceeds its audio end. Initial assembly, v1 and v2 use identical voiceover objects and word-caption objects.
- Terminal alignment adjustments occur in all 9 C2 segments and 10 B2 segments. Each recorded adjustment is at most 0.1 seconds and bounds only terminal punctuation or whitespace to decoded media. No alphanumeric speech character is in an adjusted terminal suffix. Raw generation alignments remain separate from the assembled bounded alignments.

## Response interval and answer separation

| Scene | Scene-local hold, half-open frames | Actual zero-valued PCM | First feedback boundary | Global interval |
| --- | --- | --- | --- | --- |
| C2 `c2-transfer` | `[1172, 1472)` | 300 frames, 10 seconds | 1472 | 282.700 to 292.700 seconds |
| B2 `quick-check` | `[980, 1340)` | 360 frames, 12 seconds | 1340 | 367.467 to 379.467 seconds |

Read the actual WAV samples for both intervals and verified every byte is zero. These are inserted audio gaps, not only pause metadata. No word caption crosses or occupies either interval. Feedback segment alignment and first display boundary start at the hold end. `answerTiming` and `FocusedWorking` enforce the boundary for answer fade, steps and line cues; the latter clamps every stage to `answerVisibleStart`. The countdown uses the hold end. Prompt task, equation, givens and the pause invitation are separate from answer-stage content. The rhetorical hooks have no protected response hold and must not be represented as equivalent independent response opportunities.

## Measured visual cues and lengths

Independently recomputed all 44 C2 reported phrase cues from exact character alignment, including phrase-end timing for the A-only model. Independently matched all 56 B2 cue phrases to their unique normalized word sequences and recomputed their aligned starts, ceiling frames, explicit stage clamps and actual destination fields. Bullet `at` values are seconds, consumed as `round(at * fps)`; diagram props, reveal delays and stage `lineAts` are frames. These unit conversions agree with the intended cue frames. The v2 permutations preserve the same cue values and text pairings.

C2's first positive reverse model state follows the completed no-B explanation at 880, with the first positive state at 881. Rate traces precede the explicit limiting-state card. The catalyst comparison marker is at 886 after both coded curves reach its comparison coordinate by 799; the complete trace draw ends at 909, and the marker is removed at 1085 for the final-equilibrium statement. Full trace completion and comparison-coordinate readiness are different checks. These are component timing observations, not observations from a played video.

B2's `diagram: 0` is a wrapper entrance, not evidence that every concept is visible at frame 0. The animal diagram separately gates its groups with absolute scene-local frames and an 18-frame opacity entrance. In fertilisation, gamete/set content starts at 141 with the first aligned one-set phrase, fusion at 322 and diploid zygote at 504. Bird fusion begins at 286, egg laying at 371, outside development at 410 and care at 576. External and internal location groups begin at 0 alongside the opening explanation; their later location and condition content has separate cues. The deliberately disabled result/condition groups at 1000000 are not missing narration cues. Check the actual first visible content and settled labels in the voiced preview, including the short entrance fade.

Both lessons use 24-frame scene overlaps. Independently summed the complete timeline: C2 11308 frames (376.933 seconds), B2 13963 frames (465.433 seconds). Every voiced scene ends 69 frames after its audio end, retaining 45 frames of quiet reading time before the 24-frame transition. Final voiced scenes also retain the 69-frame allowance. Silent titles remain silent. No candidate duration or tail changed in v2.

## Captions and remaining gates

C2's scene offsets and default caption grouping were independently reconstructed in Python. All 142 grouped cues produce exactly the existing `captions.srt` and `captions.vtt`, including ceiling starts, floor ends and the protected response interval. V2 leaves the caption inputs and timeline identical, so those existing caption files remain applicable to that exact timeline. B2's scene-local captions and global offset calculation are validated; this review does not claim an exported B2 SRT/VTT package exists or has been checked.

Before full export, root must bind the current teaching briefs to the exact v2 lesson/props and unchanged selected media, play those exact inputs or record the authorised short pilots, resolve any observations, complete export-stage brief checks and freeze inputs. Human listening remains pending for pronunciation, naturalness, audio joins, pacing, the adequacy of the 10-second and 12-second thinking intervals, and the alignment between heard phrases and visual entrances. Phone/readability review remains pending for row swaps, labels, graph comparison and established-result trails. These source checks do not establish continuous playback, comprehension or the adequacy of a thinking interval for an actual learner.

The earlier B2 preparation finding about an independent internal-fertilisation classification/advantage response remains an evidence gap. The present protected task checks external-fertilisation encounter reasoning and limits. It does not close that separate syllabus-action evidence merely because internal fertilisation is explained elsewhere. Retain that gap in the route/coverage ledger without expanding this bounded timing revision. Public release still needs the existing full-package review gate; no release or listening approval is supplied here.
