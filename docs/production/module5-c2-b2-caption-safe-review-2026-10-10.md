# Independent C2/B2 v3 caption-layout source review

Date: 10 October 2026. Reviewer: `/root/bio_b2_independent_review_sol`, Sol 6.1 independent review role.

Recommendation: proceed with root's exact v3 short pilots and targeted native-frame/browser-caption inspection. The change is bounded, and no word, media, timing or default-layout drift was found. **Caption clearance is not established by this source review.** Geometry estimates depend on wrapping and native font bounds. Do not generalise a successful B2 worked-example pilot to B2's quick check or C2's final comparison without inspecting those states.

This reviewer wrote only this report. No source, candidate, media, config, gate or approval record was edited. No paid narration or render was performed. No listening, actual native-frame, browser-caption, continuous playback, device or full-export pass is supplied.

## Exact reviewed revisions

All hashes are SHA-256 byte hashes.

| Input | Exact path | SHA-256 |
| --- | --- | --- |
| C2 v2 parent | `out/prototypes/module5-c2-voiced-2026-10-10/narrated-v2.lesson.json` | `2fe120341673c6173c3070272d3fad7ddc2a60a2ac19ba630487a8da0bf3eefa` |
| C2 v3 candidate | `out/prototypes/module5-c2-voiced-2026-10-10/narrated-v3.lesson.json` | `f4e473e210efdb0a53f10b6dd636e261ef112a7fca0f146a92da2557ce75a3ba` |
| C2 v3 props | `out/prototypes/module5-c2-voiced-2026-10-10/remotion-props-v3.json` | `819a9ef4a7d852f66cecba28ab2ceeb54a48e117278bc5bf8620f9d1e1217277` |
| B2 v2 parent | `out/prototypes/module5-b2-voiced-2026-10-10/narrated-v2.lesson.json` | `f4f0bf6ac5fd414d00e8e53aa19b0859b9d97d18752455a3ffaf03eb11917b49` |
| B2 v3 candidate | `out/prototypes/module5-b2-voiced-2026-10-10/narrated-v3.lesson.json` | `ff680f50cf74fb6821a3244752599c718624158e42d93ed9db7b0dc19ce47496` |
| B2 v3 props | `out/prototypes/module5-b2-voiced-2026-10-10/remotion-props-v3.json` | `b5303c370df71896090e515d86f187048d1132e1e562db04989e66d4c6a6ac44` |
| Shared type | `src/lesson/types.ts` | `75c820485134597e0ed672efc2bac92562d7d4360b6c683fe480679b789dd627` |
| Evidence board | `src/slides/shared/Module5EvidenceBoard.tsx` | `b49db7dea55ef52c2f48469e007383ab5624e92198c7d5f091471dbfe9837720` |
| Quick-check consumer | `src/slides/QuickCheckSlide.tsx` | `072845ea3d934186a40725f7c3dbf2c79027d9a56a8b7db6385e698aadf7a5e2` |
| Author correction record | `docs/production/module5-c2-b2-caption-safe-2026-10-10/correction-record.json` | `94e3c2f6efaac85a8f53868f8e74f251adbf185ae2d4f311c35def831344f325` |
| Final author check | `docs/production/module5-c2-b2-caption-safe-2026-10-10/final-author-check.json` | `b4612e6f3399f3c8bc16f32de4204f55fe8ce00e917632d12fbc238cdf1db651` |

## Bounded source and timing checks

Independently compared parsed v2/v3 lesson objects. C2 adds only `calculationPresentation.captionSafeWorking: true` to `c2-transfer`. B2 adds the same flag only to `worked-example` and `quick-check`. Removing those flags recovers the exact v2 object in each case. This establishes unchanged lesson words, voiceover objects, captions, diagram props, response holds, stage/line cues, display order, summaries, scene durations and lesson timing. Each v3 props file contains the exact corresponding v3 lesson object.

Independently hashed the correction record's three current source files and all 22 preserved files. All match. All files listed by the final author check, including its current correction-record binding, match actual bytes. The two current briefs' `captionLayoutEvidence` hashes identify the current correction record. Prior lessons, props, assembly records and captions are preserved.

Independently checked every assembled WAV/alignment hash against the assembly records and all 9 C2 plus 11 B2 source audio/alignment/generation dependency hashes. Actual zero-valued WAV response intervals remain C2 `[1172, 1472)` (10 seconds) and B2 `[980, 1340)` (12 seconds). No new narration or audio rebuilding is required for this flag-only revision. The earlier exact v2 cue and caption review remains applicable to those unchanged lesson values; this follow-up does not supply new listening evidence.

Compared the three current shared source files with checkpoint `40fa283`. The type adds one optional flag. Evidence-board changes are conditional given-card padding, working top, working padding and stage-label gap. Quick-check changes conditionally reposition the focused countdown and pause instruction. The strict true check enables the board adjustment; quick-check pause changes additionally require `layout === 'module5Evidence'`. Absent or false flags retain the prior numeric style values. Legacy non-calculation and ordinary calculation paths keep their old behavior by source inspection. Answer timing, stage selection, clamping, line fades and established-result selection are unchanged. No new clipping rule, hidden-overflow workaround, fixed card height or reduced font size was introduced. SlideFrame's existing outer overflow rule is unchanged.

The author's 42 synthetic React-markup cases and TypeScript result were inspected as author evidence, not relabelled as independently rerun tests or native pixel observations. The conditional source diff provides the independent default-behavior check here.

## Concrete geometry findings for root's pilot review

1. **P1, caption reserve remains conditional on no wrapping.** At 1920 by 1080, working top changes from 680 to 600, vertical padding 18 to 14 and stage-label gap 16 to 12. Independently recomputed the nominal two-single-line-result active-card bottom: `600 + 5 + 1 + 28 + 48(1.12) + 12 + 2[58(1.16)] + 8 = 842.32`. The declared reserve starts at 850, leaving only 7.68 source pixels under that model. One additional wrapped result line raises the bottom to 909.60; one additional stage-label line raises it to 896.08. Neither is evidence that wrapping actually occurs, but either invalidates the nominal clearance. Inspect actual line boxes and glyph bounds, especially B2 `Equal numbers do not give equal encounters.`, `Development and predation still matter.` and the two B2 worked-example explanatory lines. A clipped or obscured row is not an acceptable clearance fix.
2. **P1, coverage of the proposed pilots is narrower than all opted scenes.** The correction record's C2 range `[8631, 9289]` corresponds to local transfer frames 1322 through 1980, covering late hold and the first two stages. It does not include the final stage at 2185 or its line cues 2339/2413. The B2 range `[8464, 8937]` corresponds to worked-example frames 880 through 1353, covering the bird stage, but not the separate B2 quick-check scene. Inspect late C2 and B2 quick-check states separately before claiming clearance for the full opt-in.
3. **P2, higher working position creates a separate givens/working fit dependency.** C2's nominal single-line givens, references and note end at 587.3, only 12.7 pixels above working top 600. A second C2 note line adds about 59.8 pixels and would overlap the working region. The B2 no-reference equivalent ends at 511.5; a second note line gives about 571.3. Check C2's complete fixed-temperature/volume note and the B2 group-condition note with actual fonts. Givens' earlier entrance motion occurs before feedback starts, so a transient entrance offset alone does not demonstrate simultaneous collision.
4. **P2, retained trail and pause regions need their own native check.** The trail remains 560 pixels wide, with 44-pixel text and no vertical height bound. Wrapped prior summaries can extend it independently of the active card. Inspect both prior summaries in final C2 and final B2 quick-check stages. The selected countdown occupies nominal y600 to y768 in the right column; the pause instruction's unrotated bottom is y840 and it retains a minus-one-degree rotation. Rotation, glyph overhang, font line height and caption/control placement are not measured by the author's unrotated estimate. Check prompt/hold and the 36-frame pause fade during first feedback as well as settled answers.

No unsupported word or cue changes were found. The changes preserve large teaching text and target the reported collision rather than applying a catalogue restyle. The source design is suitable for exact pilot verification, with the findings above still dependent on observed geometry.

## Observation boundary and handoff

The correction record attributes a B2 v2 worked-pilot overlap near native y898 to root's browser playback with captions and controls visible. This reviewer did not independently observe that event and does not convert it into a new v3 observation. This report contains source-derived dimensions and risk estimates only. It does not establish the browser's final caption location, caption-line count, control behavior, native text wrapping or small-player clearance.

Root plans seven additional native samples: C2 transfer local 1400, 1909 and 2500; B2 quick-check local 1000, 1339, 1390 and 2240. They are targeted static checks. Even successful samples would not establish browser-caption/motion clearance throughout unplayed late task states. Root's decoded pilot frames and controls-visible browser playback must be recorded as separate observations.

Root should inspect the exact output-02 pilots and useful native frames with browser captions enabled, including controls visible and hidden, the later states excluded by the initial pilot ranges, and the longest active/trail text. Preserve the result of those observations separately from this report. Any component or layout revision must receive new exact hashes and a bounded follow-up. Only after observed clearance and the other existing brief/review requirements are resolved should root consider a full export. Human listening, whole-lesson playback, device checks, release checks and publication remain pending.
