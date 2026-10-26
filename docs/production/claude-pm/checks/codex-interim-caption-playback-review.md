# Caption playback observations

25 October 2026. Root played local, hash-verified MP4s in Chrome through `http://127.0.0.1:8784/`. The tool loaded the three manifests in `out/caption-repairs/review-catalog-2026-10-25-v2/`. It verifies lesson, caption and frozen metadata inputs, then verifies the MP4 before playback. Source manifests and track hashes are recorded in the combined repair checkpoint.

Scope: targeted native-video playback at 1x and sampled screenshots/UI timestamps. This is not complete continuous inspection of all 91 videos, a listening review or release approval. No subjective audio or pronunciation assessment was made. Screenshots were inspected in the browser tool output; standalone screenshot files were not saved.

## Sampled observations

| Case | Video time | Observation |
| --- | --- | --- |
| Chemistry M6 C15 | 355.815 s | Corrected answer caption ending `eight moles.` appears with the first worked answer. No clipping at desktop player width in this sample. |
| Chemistry M6 C15, 390 px player | 349.985 s | `The tablet used the acid added minus the` appears at the start of the answer. The native caption fits. This width check does not establish that the full problem text is readable on a phone. |
| Chemistry M6 C15, replay | 348.372 s | Question remains visible and no external answer caption is displayed immediately after the countdown, before feedback begins at 349.10 s. |
| Chemistry M5 C4b | 376.362 s | Last question caption is displayed before the hold. |
| Chemistry M5 C4b | 380.727 s | Countdown shows 9. The question and conditions remain visible; no external caption appears during the hold. |
| Chemistry M5 C4b | 392.501 s | `Vessel B settles first.` appears with the feedback, after the hold and scene transition. |
| Biology M5 B03a | 363.049 s | Prompt caption `Pause the video if you'd like more time.` appears before the response hold. |
| Biology M5 B03a | 369.553 s | Question remains visible and no external answer caption appears during the hold. |
| Biology M5 B03a | 390.294 s | Corrected external caption appears during feedback, but overlaps a caption already present in the MP4. Presentation finding below. |

## Presentation finding: B03a has baked-in captions

At the sampled feedback, two caption layers overlap when the corrected external track is enabled. I switched the caption selector to Off and verified both external text tracks were disabled. A lower caption, `Three, the two blood supplies don't mix.`, remained visible in the video. This establishes that this MP4 contains its own caption layer; the overlap is not simply two external tracks being enabled.

Keep B03a's external-caption presentation pending. Its source-based timing and PCM evidence support the repaired timestamps, but timing correctness does not resolve this visual collision. Do not alter the approved MP4 or choose a new caption placement from this limited review. Check the intended YouTube caption display and decide how this case should be presented. Other videos were not exhaustively checked for baked-in captions.

B03a's separate 0.3-second source/container tail difference remains recorded. The sampled PCM checks establish feedback and key-note audio starts; they do not approve the whole video or explain every frame at the end.

## Handoff

The comparison tab is left paused on C15 with corrected captions selected. Controls allow original/corrected/off tracks, desktop/narrow widths, and playback from six seconds before each thinking pause. No public caption track, description or video was changed. Remaining: complete affected playback/listening review, resolve B03a's presentation, recover the four missing videos, establish the five unrecorded upload-caption identities, then replace and verify the intended public tracks.

## Independent addendum: caption pixels in nine decoded frames

25 October 2026. Independently opened all nine PNG frames referenced by [caption-layer-audit.json](codex-interim-caption-layer-audit.json), and recomputed each PNG and source MP4 SHA-256. All eighteen hashes match the recorded values. These are existing decoded MP4 frames, viewed directly without a browser or an external caption track. No new decode, video render, track change or public playback was performed by this reviewer.

I agree with the six positive classifications. Each positive frame visibly contains the dark lower caption band and white running caption text in the MP4 pixels. The three other frames contain no such band at the sampled instant. This absence is not a whole-video finding.

| Lesson | Sample second | Direct still observation |
| --- | ---: | --- |
| bio-m5-b02a | 48.38 | Lower caption band visible in decoded pixels. |
| bio-m5-b02b | 41.3465 | Lower caption band visible in decoded pixels. |
| bio-m5-b02c | 42.74 | Lower caption band visible in decoded pixels. |
| bio-m5-b03a | 48.9265 | Lower caption band visible in decoded pixels. |
| bio-m5-b03a2 | 50.5065 | No lower band in this frame only; whole-video state unknown. |
| bio-m5-b03b | 54.3135 | No lower band in this frame only; whole-video state unknown. |
| chem-m5-c03 | 48.5 | Lower caption band visible in decoded pixels. |
| chem-m5-c04a | 51.0335 | Lower caption band visible in decoded pixels. |
| chem-m5-c04b | 44.3465 | No lower band in this frame only; whole-video state unknown. |

The earlier B03a browser observation is therefore supported by independent pixel evidence, and the same presentation issue is now established at one sample each for B2a, B2b, B2c, C3 and C4a. This review does not assess whether the baked words are accurate or aligned, whether another caption band appears elsewhere, or how a public player combines them with an external track. Four early local MP4s remain missing and were not classified by this audit.

### Renderer history

Inspected Git commit `46f7b6d8b9ab66457084c5eaa9ac486a430889f7`, committed 14 October 2026 at 20:07:35 Sydney time. Its actual diff replaces unconditional `<Captions groups={groups} starts={starts} />` with the `config.burnCaptions` conditional in `src/explainer/ExplainerVideo.tsx`, and adds optional `burnCaptions?: boolean` with an off-by-default comment in `src/explainer/types.ts`. The current conditional is at renderer line 133; the flag is at types line 14. This establishes a source-behaviour change. It is consistent with the sampled media difference, but does not identify the renderer revision used by every historical export or prove caption absence in any unsampled MP4.

### Selected v4 presentation notes

Independently checked the three manifests selected by `out/caption-repairs/review-catalog-2026-10-25-v4/catalog.json`: all 91 lesson/reference/corrected-SRT/corrected-VTT paths and hashes equal the corresponding v3 records, and their current file bytes match those hashes. Direct manifest inputs and frozen source-input hashes also pass. Exactly six entries have the baked-caption flag; their evidence JSON and decoded-image references hash-match the six positive records above. No false whole-video absence flag is needed for the other entries.

Read the local server's `/api/lessons` response at port 8784: it lists 91 v4 entries, zero source-validation issue lists and six baked-caption presentation notes. This is a local catalog/notes check, not media playback or proof of live YouTube state.

Keep external-caption presentation pending for the six confirmed positives. A timing repair does not remove baked text. No instruction to disable accessible captions, move tracks, alter approved MP4s or re-render follows from these stills. Root still needs the intended presentation decision and relevant playback checks. Listening, full-video review and public replacement approval remain separate.

Pinned evidence:

| File | SHA-256 |
| --- | --- |
| `docs/production/claude-pm/checks/codex-interim-caption-layer-audit.json` | `8c26d81e7755be6dcefe280bfd6409c9f8488da2d7fb1bbdbe0f205fde4dc9e9` |
| `out/caption-repairs/review-catalog-2026-10-25-v4/catalog.json` | `1a1d99f136f4fa833c5ab8792e0c236ea714bde32094444d0d0c780243a11499` |
| `src/explainer/ExplainerVideo.tsx` | `2477fcb1235e76eb6c233738db083950bc978bf30ab6adec85fd1a4cbcc322b9` |
| `src/explainer/types.ts` | `5fd16ded17bb08aa70b1af9877b8f57d1befef78ef87cb110480da10dfeb79af` |
