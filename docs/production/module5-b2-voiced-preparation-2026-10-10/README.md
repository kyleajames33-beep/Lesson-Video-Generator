# B2 authored voiced timing reconciliation

Date: 2026-10-10. Timing author: `/root/review_page_access_sol`.

Root authorised candidate writes after completing assembly, then authorised removal of inherited long silent tails. This is authored timing work and requires separate independent review. The earlier independent source and still reports are unchanged. No listening, continuous playback, caption-clearance, export or publication approval is supplied here.

## Exact inputs and outputs

The independently reviewed silent source remains `docs/production/drafts/module5-b2-selected-2026-10-10/lesson.json`, SHA `a9caaa09366537f56d1ea60cee0184313a62a421b9b64e76b023ae5c112ca8af`. Root's initial `assembled.lesson.json`, `assembled.remotion-props.json` and `assembly-record.json` in `out/prototypes/module5-b2-voiced-2026-10-10/` are preserved. The assembly-record SHA is `72d5f9b3c2e205b1c78bf147f0aab197f0880d92e8c39268cf373651b66bb6c6`.

Additive candidate: `out/prototypes/module5-b2-voiced-2026-10-10/narrated.lesson.json`, SHA `3217ae473f9929986e853804766ab4d1a6f20067f360052e979b1b1e2e4d0dc0`. Its `remotion-props.json` embeds the same lesson. `measured-cue-reconciliation.json` records every measured phrase, consumer unit, rounding and any stage clamp, plus before/after source bindings and duration decisions. `assembly-verification.json` records ten passing voiced-scene checks and the resulting global timeline. The candidate runs for 13,963 frames at 30 fps, or 465.4333 seconds including scene overlaps.

All reviewed voiceover text is byte-for-byte equal as JSON string content to the selected silent source. Audio files, voiceover start/end windows, captions, measured responseHold, task text, stage text, diagram/component source and lesson boundaries are retained. Only cue fields and scene durations change. No raw take or assembled audio is rewritten.

## Consumer units and cue plan

Each phrase is matched uniquely in the actual root-assembled caption sequence. Its aligned start is rounded up to the next scene-local frame, so the authored cue does not anticipate that timestamp. Diagram `props.at`, `revealDelays` and stage `lineAts` consume scene-local frames. Bullet `at` consumes seconds, stored as measured frame divided by 30; BulletReveal converts it back to frames.

All selected concept scenes set `revealDelays.diagram` to zero. ConceptSlide otherwise delays the whole board by 62 frames, which would mask the measured frame-zero external/internal cues and the internal fusion cue at frame 60. Its existing 18-frame entrance remains. No component or shared runtime changes are needed.

| Scene | Measured local frame cues |
| --- | --- |
| Fertilisation | Gamete sets 141; fusion 322; diploid result 504; haploid bullet 257; diploid bullet 504; model qualification 1013. |
| Hydra | Parent 106; attached growing bud 141; detachment 308; no-fusion classification 392. Growth bullet 228 and mechanism-classification bullet 1076. |
| External | Outside-body setting 0; fusion relation 171; proximity/timing 574. Moisture bullet 351, encounter bullet 574, separate-survival bullet 1004. |
| Internal | Inside-body setting 0; fusion relation 60; drying condition 243. Moist-tract bullet 164, transfer-cost bullet 792, variable outcomes bullet 959. |
| Three-question comparison | Question bullets 72, 132, 192. Bird internal fusion 286, laid egg 371, outside development 410, separate parental investment 576. |
| Worked cases | Frog, kangaroo and bird stages 233, 653, 946. Result lines respectively `[233,370]`, `[653,730]`, `[946,1127]`. |
| Misconception | Mechanism/conditions body 766; no guaranteed survival callout 898. |
| Quick check | Measured response gap 980 to 1340. Feedback stages 1340, 1810, 2034; result lines `[1385,1427]`, `[1810,1919]`, `[2166,2034]`. |
| Summary | Four takeaways 101, 224, 377, 644; next-lesson handoff 910. |

The kangaroo stage enters at the spoken classification, frame 653. Its first supplied-evidence line was spoken at frame 574 and is explicitly clamped to 653, avoiding an early classification label while retaining that established evidence. The quick-check final stage shows the survival distinction first, at 2034; its development/predation line follows at 2166 despite occupying the upper text row. The order is causal, not inferred from top-to-bottom row position. These authored choices need independent playback review.

## Prompt and response boundaries

Root's assembly contains prompt audio from local frame 0 to 980, inserted digital silence from 980 to 1340, and feedback audio from 1340 to 2617. The inserted interval is exactly 360 frames, or 12 seconds. The last prompt caption ends at 32,640 ms; its assembled prompt window ends at 32,666.6667 ms. The 26.6667 ms difference is retained frame quantisation, not an independently detected speech-silence boundary. The first feedback caption starts at 44,666.6667 ms, corresponding to frame 1340. No caption overlaps the inserted gap. All visual answer stages and result lines begin at or after its end.

The generated alignments include root's bounded terminal-punctuation adjustment to decoded media duration. These checks validate the assembly's recorded timestamps and dependencies; they do not establish that a listener hears every boundary as intended. No audio was trimmed to alter prompt trailing quiet.

## Short reading tails

The candidate uses `max(audio end +45 reading frames +24 transition frames, last essential cue +90 reading frames +24 transition frames)`. Actual speech is sufficient to preserve every final cue and explain each worked stage, so all ten voiced scenes resolve to a 69-frame tail after their audio window. This provides 45 frames (1.5 seconds) before the final 24-frame transition region. The last scene also retains that region as part of its ending. No arbitrary 12-second hold is imposed on the worked cases.

| Scene | Initial assembled frames | Candidate frames | Audio end |
| --- | ---: | ---: | ---: |
| Hook | 1005 | 801 | 732 |
| Fertilisation | 1519 | 1344 | 1275 |
| Hydra | 1505 | 1303 | 1234 |
| External | 1633 | 1471 | 1402 |
| Internal | 1590 | 1356 | 1287 |
| Comparison | 1476 | 1387 | 1318 |
| Worked | 1662 | 1423 | 1354 |
| Misconception | 1176 | 1085 | 1016 |
| Quick check | 3302 | 2686 | 2617 |
| Summary | 1290 | 1257 | 1188 |

The unvoiced title remains 90 frames. Quick-check silence remains within its audio window and is not shortened by this tail calculation. Worked stages remain strictly ordered; each result line settles before its stage switches. The final bird result enters at 1127, settles by 1143 and remains until the transition region begins at 1399, alongside the remaining explanation. Planning language that describes silent estimated cues must be superseded by these measured candidate cues when root prepares the additive voiced brief. The teaching purpose and words remain unchanged.

## Validation and next review

`reconcile-cues.py` dry-run resolves 56 unique phrases. Its application writes only the new candidate/props and this preparation evidence. It preserves the root assembly files and refuses to replace an existing voiced candidate. All ten scenes pass `verifyAssembly`, which checks audio, alignment and generation dependencies, exact assembled captions, playback windows and the response gap. These checks are evidence of technical consistency, not a perceptual review.

Next: independent exact-candidate source/timing inspection, targeted native/narrow caption-bearing states, then continuous voiced playback or a measured recorded pilot covering difficult mechanisms, worked cases and the response boundary. Check useful reading time, transitions, small supporting text, cue order and caption clearance. Human listening and brief export approval remain separate gates. No global runtime, paid generation, full export or frozen evidence was changed by this assignment.
