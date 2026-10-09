# Mass-to-mass voiced timing and encoded pilot review

Reviewed 9 October 2026. Independent, read-only review of the selected voiced package. No production source, narration, audio, config, approval flag or brief was changed by this reviewer. The coordinator corrected obsolete planned-gap prose during the review.

No material science, cue-binding or answer-protection failure was found. This is a source, PCM and sampled encoded-frame review. Continuous playback, actual listening, pronunciation, pacing, phone fit and user approval remain pending. No full export is approved by this report.

## Exact bindings

Selected package: `out/prototypes/mass-to-mass-voiced-2026-10-09`.

| Input | SHA256 |
| --- | --- |
| `narrated.lesson.json` | `c235f8ce6ce0637ea5bacb1c565178ab596906a216da1763d2e930f67bf21c0c` |
| Reviewed spoken prototype | `5fdae5ebe2b79515908ee25d4d29955061dd53b991380e19303bbbb0a5a47f9b` |
| `voice-manifest.json` | `ede50004567b73c7b39f5e038dda91280c85e5021f2fa70fe714ae7919f074cd` |
| `voice-playback-plan.json` | `90f0afc94f55252a1d88be6f45324a587bd2c04f18f0ad9ba7f500129743f6a9` |
| Measured cue file | `9876e4d4886af304581f2def65bc673ef035cc9a557200f4924e7803045f513b` |
| Current `production-brief.json` | `be701194d9a89f2264c6293c21c2cd5ae7f1fd07301779549d2a64b7957bf88c` |
| Full SRT | `246246ad089366b93ee0f2c91e32f83c98e37d578a53f5b59fac0e29f55d9b91` |
| Full VTT | `7437e9a9c59b6f4edc4431cf48751dbdf01f6d2cc9322ead9517df312c15f944` |

The lesson is 11,816 frames at 30 fps, 393.866667 seconds, with zero intro frames. All ten scene transcripts equal the reviewed prototype exactly. Concatenated manifest segments and assembled caption words equal each scene script after whitespace normalization. The eleven manifest segments include separate quiz prompt and feedback. Selected lesson copy contains no U+2014.

Evidence files:

- `out/prototypes/feedback-independent-reviews/mass-to-mass-voiced-timing-evidence.json`: hashes, every checked phrase cue, stage hold measurements, caption and PCM checks.
- `out/prototypes/feedback-independent-reviews/mass-to-mass-encoded-pilot-evidence.json`: verified pilot bindings, media probes and hashes of twelve decoded PNGs.

## Science and organisation

Each conversion uses the molar mass of the species at that end. Carbon to carbon dioxide is 1:1 in amount; Fe₂O₃ to iron is 1:2; magnesium to MgO is 2:2. The displayed equations are balanced. The source conditions specify complete reaction and enough other reactant, distinguish pure oxide from unspecified ore, and label the predicted masses as theoretical.

Independently recalculated results from the supplied constants:

| Task | Calculation | Unrounded mass | Reported answer |
| --- | --- | --- | --- |
| Carbon to CO₂ | `(12.0 / 12.011) × 44.009` | 43.9686953625843 g | 44.0 g |
| Fe₂O₃ to Fe | `(80.0 / 159.687) × 2 × 55.845` | 55.95446091416333 g | 56.0 g |
| MgO target to required Mg | `(20.0 / 40.304) × 24.305` | 12.060837633981738 g | 12.1 g |

M(CO₂) = 44.009, M(Fe₂O₃) = 159.687 and M(MgO) = 40.304 g mol⁻¹ agree with the supplied values. Intermediate amounts display approximation symbols and guard digits; the final expressions retain the original values rather than reusing rounded intermediates. Narration describes approximate mole amounts and reports final masses to three significant figures.

Stable givens, separate supplied atomic values, equation above the board, one active stage and an established-result trail reduce the amount a learner must retain. The pathway uses explicit `[3,3]` piles for its 1:1 relationship, with both speech and on-screen copy identifying it as a calculation model. It does not present the packet as a physical carbon particle becoming carbon dioxide.

## Measured timing and protected attempt

Every configured reveal, bullet, diagram beat, stage start and individual result-line cue matches its named caption phrase. Diagram delay is 30 frames; local beats `[582,698,834,1046]` become scene cues `[612,728,864,1076]`. The component subtracts the delay once. Bridges and operation chips begin their preparation 20 frames before packet movement, while the packet starts on the phrase. Completed labels remain readable rather than moving with the packet.

All nine calculation stages last at least 6.633333 seconds. Individual final lines are withheld until their own measured cues, not merely the enclosing stage start. Every line finishes fading before the next stage. Voice ends leave 15 frames before the 24-frame transition in all ten scenes; no relevant selected cue falls beyond the useful scene hold.

The quiz begins at global frame 8849. Its response interval is scene-local `[737,797)`, global `[9586,9646)`, exactly two seconds. The scene WAV and full listen WAV each contain 96,000 mono 48 kHz 16-bit sample values in the corresponding interval, all exactly zero. Scene WAV SHA256: `62811c39d9adacd05af4e56383d6c91777748174db050d9b584f4ceb53dd672b`. Full listen WAV SHA256: `6f40d57b5ca8291b2a6ed788d96d12d001bc0df368ca65b38c5318b51c2c2293`.

No caption token or grouped cue occupies that half-open interval. Floating-point equality at the ending boundary was checked with a 0.001 ms tolerance; the exported first feedback caption starts at 321,534 ms, after the exact ending boundary at 321,533.333333 ms. Full SRT and VTT exactly match regeneration from the 156 grouped cues, with no coverage warnings.

QuickCheck floors all selected stage starts at the answer boundary. FocusedWorking returns no working before that boundary. Its first stage starts at 797, first molar-mass line at 926, first amount result at 1112, ratio stage at 1299, mass stage at 1506 and final 12.1 g line at 1671. The visible supplied equation, atomic values and target mass are legitimate problem data. This answer-protection finding is from source and captions, not an encoded quiz pilot.

## Encoded pilot observations

Both release snapshots verify against current captured source, tools, audio and artifacts with no changed or missing required files. Both actual videos are H.264, 1920×1080, 30 fps, with AAC audio.

| Pilot | Frames | Video SHA256 | Verified package SHA256 |
| --- | --- | --- | --- |
| Diagram, global 887 to 2202 | 1316 | `fe09444d45331dfef5573cff3b143c3dd9ccb83d98d04563f8a3b9e6f22323a4` | `7f808844ee07138bfa6f38731fb99bddf267f1ef90c4164bde2abc8e7dad5232` |
| Iron worked example, global 6046 to 7731 | 1686 | `546515cf28a47c297380c36b499159bcc376b10f131b0b5b61c88eef4d36dcae` | `9d9e1fa9b8d0b29678ceb0c31abdadc44bb61df8108e956ff66581c2883f9ba7` |

Decoded diagram frames 120, 650, 780, 900 and 1150 show the initial bank, input conversion, equal three-ball piles, output conversion and final interpretation respectively. Native labels and callout are legible, with no sampled collision, clipping or arbitrary atom imagery. The two-line heading fits above the bullet list. Faint output labels at frame 900 are expected entrance opacity; they are complete at frame 1150.

Decoded worked frames 460, 700, 980, 1250, 1310, 1390 and 1580 show separate molar-mass and amount lines, the 2:1 step, retained oxide amount, original-value mass expression and delayed final answer. The final answer is absent at 1310, preceding its 1328 cue, and visible at 1390. Givens, equation and trail do not collide in these samples. The longest molar-mass line fits within the active board. Sampled native geometry supports the planned layout, not approval of continuous motion or external caption overlays.

## Playback focus and remaining scope

- Carbon stage 1 lasts 6.633333 seconds, but its second operation finishes fading at frame 835 and changes stage at 886: only 1.70 seconds fully visible. Its equal-amount relationship remains in the trail; inspect whether the transition feels rushed during actual playback. No cue mismatch was found.
- Quiz stage 1 lasts 6.9 seconds, but its second operation has 2.633333 seconds fully visible after fading. The same-amount trail preserves its conclusion. Inspect reading pace during the combined review.
- Final answer lines have fully visible holds of 10.133333 seconds for carbon, 10.6 seconds for iron and 9.5 seconds for the quiz. Summary handoff has 5.433333 seconds after its entrance before transition.
- The original brief's planned-gap wording was stale. Both holdPurpose and understandingCheck now describe the measured 60-frame gap; this metadata finding is resolved at the current brief hash above. Selected narration and media inputs remained unchanged.
- Continuous exact-props Remotion playback, human listening for natural delivery and scientific pronunciation, caption-overlay fit, the carbon example and quiz encoded sequence, landscape viewing and 390 px portrait fit remain pending. These native frames establish neither phone readability nor a listening pass.
