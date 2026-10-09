# Independent calculation pace and ratio source review

Reviewed 10 October 2026. This is an independent read-only check of the four new paced candidates against their preserved 9 October sources and raw takes. No selected source, helper, brief, narration, audio, config or previous evidence was changed by this reviewer. New evidence files and this report were written.

The material limiting-diagram cue finding was corrected by the coordinating agent during this review. No remaining material transcript, formula, assembly, protected-gap or source timing failure was found. The encoded pilot addendum below contains scoped native static observations. Exact listening, continuous playback, complete encoded layout, external captions and device readability remain pending. This report grants no listening, full-export or publication approval.

## Exact selected inputs

Driver: `scripts/prepare-paced-feedback.py`, SHA256 `c3779717c1dfdc59125dd65790f7e9c65f97bb59047f1dcf1de872ea142a3218`. Batch specification: `docs/production/calculation-feedback-2026-10-10.json`.

Each selected lesson below is `out/prototypes/<key>-paced-2026-10-10/narrated.lesson.json`.

| Key | Selected source SHA256 | Frames at 30 fps | Seconds |
| --- | --- | --- | --- |
| empirical-formulas | `92611f178fba8dce8f4c37e86354a266583862ad0c4ff8c19bafc98503af0776` | 9807 | 326.900000 |
| mole-ratios | `6914afbed82d18dc16b575c2ad7475e605306fc5cd602c54b0263332b2d60764` | 9007 | 300.233333 |
| mass-to-mass | `b90681774be533bdedca5bebca550f18530e1110ad85b28bc2a1d02b282da33e` | 12092 | 403.066667 |
| limiting | `96fedf688aef15f7e3785ff7c78b1f3a04675a8eb93d8edd9c832e45f807d91a` | 8670 | 289.000000 |

Original source hashes match the batch specification: empirical `4bf73425ed45ae9e8fe25cedf370c41faaad69452b7a4e049654571364be22b0`, mole ratios `68a5590d2f076aff1a9b1178332b5038774bc975040d9e555ce9190062fb7f2c`, mass-to-mass `c235f8ce6ce0637ea5bacb1c565178ab596906a216da1763d2e930f67bf21c0c`, limiting `22a844720d33ee16fad5da5d8cf4e0120237615b4906ad2e4fd269cab6326323`.

Evidence:

- `out/prototypes/feedback-independent-reviews/calculation-paced-source-evidence-2026-10-10.json`: exact selected hashes, derivation checks, assembly checks, stage bounds and actual PCM gap checks.
- `out/prototypes/feedback-independent-reviews/calculation-paced-phrase-evidence-2026-10-10.json`: independent phrase comparisons, acid lines and corrected limiting diagram beats.

## Narration and derived provenance

All 38 scene transcripts exactly equal their respective preserved source transcripts. Every unselected normal-pace scene is structurally identical to its prior scene, including audio, captions and local cues. Hooks, titles, summaries and unselected explanations retain their pace. The quiz prompts retain their original takes; only their feedback takes are slowed.

Independently decoded all twelve transformed takes and their raw source audio. Every derived PCM has exactly `ceil(sourceSamples / 0.94)` mono 48 kHz samples. Raw audio, alignment and generation hashes match the recorded derivations. Every transformed character sequence is unchanged; start and end times exactly equal the original times bounded to raw decoded duration and divided by 0.94. All final timestamps fit the derived media duration. The filter records `atempo=0.94,apad,atrim=end_sample=<exact count>` and the raw dependencies are included in the render config inputs.

Generation sidecars preserve original take metadata and add the transform provenance, rate, filter, source samples and derived samples. They explicitly identify this as a derivation with no fresh provider request. All scene assembly verifications return no errors, binding audio, caption alignment, selected dependencies, voice windows and response holds.

This is deterministic transformed timing, not a new measured provider alignment or waveform-level forced alignment. `apad` and `atrim` enforce the intended total length but do not prove local audible word boundaries. Actual caption synchronisation and time-stretch quality need listening and playback checks, especially at the beginning, middle and end of longer takes. A technical transform check does not establish natural delivery or pronunciation.

## Ratio display and scientific meaning

Mole-ratios acid working now has four matching stages and step entries at frames `[292,427,588,736]`. The forward relation displays `n(HCl) = n(Ca(OH)₂) × (2 / 1)`. Its substitution remains `n(HCl) = 0.300 × (2 / 1)` at 588; `0.600 mol` is independently withheld until frame 644. The fourth stage starts at frame 736, exactly the derived caption cue for “Going the other way”, and displays `n(Ca(OH)₂) = n(HCl) × (1 / 2)`. The established trail retains the forward acid result after this reversal. This is a distinct reversed comparison, not a second multiplier applied to the forward answer.

The source correctly compares acid:base as 2:1 for the balanced equation and retains three significant figures. The quiz explicitly displays 2/2 for water and 1/2 for oxygen. Other selected calculation content and supplied values remain unchanged: mass-to-mass uses species-specific molar masses and unrounded final expressions; empirical calculations retain the 100 g basis and approximate normalised ratios; limiting working distinguishes coefficient-normalised capacities, product and excess calculations. No new unit, stoichiometric direction, formula or precision inconsistency was found. Optional earlier suggestions to expand other boards were outside the implemented focused display change and are not treated as failures.

## Timing and the resolved diagram finding

Independently checked 74 named reveal and line-cue phrases in mole ratios and mass-to-mass against current caption starts, with no discrepancy exceeding one frame. The empirical worked, molecular-extension and quiz stage phrases exactly match their rebuilt stage starts. Every calculation stage has matching step count, ordered starts and lines that finish fading before the next stage or outgoing transition. All scene voice windows finish 15 frames before the 24-frame transition.

The first driver version retimed `diagram.props.beats` but omitted direct `coefficientDivide` `diagram.steps`. Slowing the limiting formula would therefore have moved its divide and limiting conclusion ahead of speech. This was reported before freeze. The coordinating agent corrected the helper and selected unfrozen limiting source. Current diagram delay is 32 and local steps are `[24,692,998]`, producing absolute frames `[56,724,1030]`. Corresponding phrase frames are `[57,723,1029]`, within one frame. The original 9 October source and media were preserved. The worked-example pilot does not cover this formula scene, so its continuous animation remains a playback check.

## Protected quiz intervals and captions

All four prompt segments retain normal pace. Their scene-local silence intervals therefore remain at the original boundaries. Global positions change because earlier selected scenes are longer.

| Lesson | Scene-local half-open interval | Global half-open interval | Caption cues |
| --- | --- | --- | --- |
| Empirical formulas | `[524,584)` | `[7832,7892)` | 122 |
| Mole ratios | `[596,656)` | `[7333,7393)` | 115 |
| Mass-to-mass | `[737,797)` | `[9788,9848)` | 156 |
| Limiting | `[560,620)` | `[7078,7138)` | 116 |

Independently inspected each interval in both the actual assembled scene WAV and full narration WAV. All eight intervals contain 96,000 mono 48 kHz sample values, all zero. No word token or grouped caption occupies any protected interval. Full SRT and VTT for all four candidates exactly equal regeneration from the selected current captions; coverage warnings are empty. Selected lesson files contain no U+2014.

Quick-check working remains gated by the answer boundary. All selected stage starts satisfy that boundary, and the separate later line cues protect final values. This is verified from current source, assembly, PCM and caption evidence. It is not an encoded quiz-playback observation.

## Exact playback focus

The 0.94 setting increases selected speech duration by about 6.38 percent. It is a modest pace change. The carbon example's final ratio operation has only 1.866667 seconds fully visible after its fade before the mass stage, compared with 1.70 seconds previously. Its equal-amount conclusion remains in the trail; assess whether the switch still feels quick.

The new reverse acid stage has 8.733333 seconds fully visible, but its addition shortens the active forward answer hold to 2.533333 seconds after the result fade. The forward 0.600 mol result then persists in the established trail. Check whether that progression feels clear rather than premature. Other shorter active-line holds include the iron coefficient comparison at 2.266667 seconds, empirical quiz oxygen amount and mole quiz water result at 2.866667 seconds, and the mass quiz ratio at 2.833333 seconds. These are bounded playback concerns with retained results, not source-boundary failures.

The four current worked pilots were rendering during this source review. No encoded-frame observation, continuous playback or human listening is claimed here. All current briefs retain pending voicedPreview and humanListening status. Exact revised listening, difficult explanation pace, caption overlays, preserved diagram readability and device viewing must be checked before the existing export and public-release gates can pass.

## Encoded mole-ratios pilot addendum

Subsequently inspected the completed `out/prototypes/mole-ratios-paced-2026-10-10/worked-pilot-02`. This addendum is limited to its dependency verification, metadata, exported captions and six decoded native static frames. It does not establish continuous playback or listening.

Actual MP4 SHA256 is `63ca39223b1b7a715cd6c651c5bc40a96dd44fd8b99e645efedc63e5dcbb37bf`, matching the render record and snapshot. The release snapshot verifies valid with no changed or missing required files; its package SHA256 is `04ad52f3c494c63f8847cf7c2118b7fa6cad2e8cfa6273c6c47ad829d6744df2`. The snapshot file's own SHA256 is `9f59b85dec9233a0cf53b1ca3776eb3ff843d2fce3638676f11b7f56dc399508`. The selected lesson remains bound to the exact mole-ratios hash in the table above.

FFprobe reports H.264 at 1920×1080, 30 fps, 1038 frames and 34.600000 seconds, with stereo 48 kHz AAC. Its selected global frame range is `[4702,5739]`. All sixteen SRT and VTT cues exactly match current selected captions after the export's range clipping and local offset. The final cue begins the next scene during the normal 24-frame scene overlap; it is expected range coverage, not quiz-answer leakage.

Independently decoded pilot-local frames 630, 650, 720, 735, 736 and 810. Root's `acid-650.png` and `acid-810.png` are byte-identical to the independent decodes. Evidence, file hashes and metadata are saved in `out/prototypes/feedback-independent-reviews/mole-ratios-paced-encoded-pilot02-evidence-2026-10-10.json`.

At 630 the explicit forward substitution `0.300 × (2 / 1)` is visible and the final value is absent. At 650 the result is partway through its expected fade after cue 644. At 720 and 735 the forward answer is complete. At 736 the newly selected reverse panel is at zero entrance opacity, while the completed forward `0.600 mol` appears in the established trail. At 810 the reverse `n(Ca(OH)₂) = n(HCl) × (1 / 2)` is visible with the forward result still retained below. Task, balanced equation, supplied reacting amount, condition note, active working and trail occupy separate native regions, with no sampled collision or clipping.

These samples confirm the encoded forward/reverse content and delayed value exposure. Native sampling does not establish small-player readability, 390 px portrait fit, caption-overlay clearance or a perceptually smooth stage switch. The previously identified 2.533333-second active forward-answer hold remains a listening/playback focus even though its result persists in the trail.

## Encoded mass-to-mass pilot addendum

Inspected the completed `out/prototypes/mass-to-mass-paced-2026-10-10/worked-pilot-02`. Actual video SHA256 is `3d51fbd79d89dab43b3b38c9b87a724f4c3aab7c487c2294c0b99c193605127b`, matching its render record. Current release snapshot verification is valid without changed or missing required files; package SHA256 is `792ccf5b42ad980d51107da33a6ecc477c329ae3dad2a1a91820781fa7a301f8`. Snapshot file SHA256 is `d25e5d87440d1dd53f2a2ea54370900116496fcdc84af9dc22e16ce1a60b447d`.

Actual media is H.264, 1920×1080 at 30 fps, 1791 frames and 59.700000 seconds, with stereo 48 kHz AAC. The range is global `[6143,7933]`. All twenty-three exported SRT/VTT cues exactly reproduce the current lesson captions after clipping and local offset.

Independently decoded local frames 490, 720, 1030, 1330, 1400, 1480 and 1670. The first sample shows the oxide molar mass without the later amount result; the second adds the aligned amount. The comparison sample shows Fe:Fe₂O₃ = 2:1 and its explicit amount multiplier, with the completed oxide result retained. Later samples show the original-value mass expression. The final 56.0 g line is absent at 1400, before its 1412 cue, and complete at 1480 and 1670. Stable task, equation, given sample, reference values, condition note, active stage and retained results do not collide or clip in these native samples.

Evidence and exact image hashes: `out/prototypes/feedback-independent-reviews/mass-to-mass-paced-encoded-pilot02-evidence-2026-10-10.json`. This pilot covers the iron example, not the short carbon operation hold or quiz. No continuous playback, listening, perceived pace, external-caption clearance or device pass is claimed.

## Brief metadata reconciliation

The coordinating agent subsequently ran `scripts/reconcile-paced-feedback-briefs.py` to normalise the acid visualDecision enum and retain only current gap descriptions. Independently checked all four current recording-stage brief gates: ready with no blockers, while exact voicedPreview and humanListening remain pending. This is evidence/metadata validation, not a teaching or listening approval. Selected lesson hashes remain the same as the table above.

Current reconciled brief SHA256 values are empirical `da14c1bc0c0b73ca016ecaf899ea89215ae3da9b78417421ea73c26373825582`, mole ratios `dd64061096e98319e6faf13b730d4880c656c1d4c0faba14544f2d36ee670a6a`, mass-to-mass `c8272d29c8ba6b15f646afefee321018d2b79bd8f7bc668971faa809c9e79b5d` and limiting `a19f0bf7c6aee9e89c9358780f901a01aa3a929173c692ec2131d9da253c07e6`. The source evidence file's earlier brief hashes represent the pre-reconciliation observation.

## Encoded empirical pilot addendum

Inspected completed `out/prototypes/empirical-formulas-paced-2026-10-10/worked-pilot-02`. Video SHA256 is `f8365e43526a7870874be7743802796ba00f7811edc834eebe5ffbce036d1248`, matching the render record. Release snapshot verification is valid with no changed or missing required inputs. Package SHA256 is `8aefd33fcbfc70b395ee92f9e2f15b7822a2c7b084d6586ae69496faac6da206`; snapshot file SHA256 is `a133debf58812ce4e73656fedba53d636a3ca23e405324fc50a5642e71a5bfbe`.

Actual media is H.264, 1920×1080 at 30 fps, 997 frames and 33.233333 seconds, with stereo 48 kHz AAC. Selected global range is `[4369,5365]`. All thirteen exported SRT/VTT cues exactly match the current selected captions with range clipping and local offset.

Decoded local frames 130, 220 and 310 show carbon, then hydrogen, then oxygen conversion lines without exposing later normalisation or formula content. Frames 535, 730 and 915 show the approximate normalised ratio, whole-number ratio and empirical formula in separate stages, retaining completed facts in the trail. Supplied percentages and associated molar masses remain grouped; the 100 g calculation basis stays visible. No sampled native task, given-card, working, note or trail collision/clipping was found. The final three-item trail fits within the native frame.

Saved evidence: `out/prototypes/feedback-independent-reviews/empirical-paced-encoded-pilot02-evidence-2026-10-10.json`. This pilot covers the first worked example only. Molecular extension, quiz, continuous motion, listening, caption overlays and device readability are not established by these six static samples.

## Encoded limiting pilot addendum

Inspected completed `out/prototypes/limiting-paced-2026-10-10/worked-pilot-02`. Actual video SHA256 is `9cc7f6565df55adb4097177cad698f36399d08639848e67093ab6b3fee706eb5`, matching its render record. Release snapshot verification is valid with no changed or missing required inputs. Package SHA256 is `539da33aee3c9328f8725146e92ae465b4d6aa5d4c1a09cda00898b588f342d1`; snapshot file SHA256 is `0cd21c7197e1c3fff51a5ad2800fad64a2039f43f473ac70d93ef822767d3a44`.

Actual media is H.264, 1920×1080 at 30 fps, 2189 frames and 72.966667 seconds, with stereo 48 kHz AAC. Selected global range is `[3524,5712]`. All twenty-eight exported SRT/VTT cues exactly match the selected current captions after range clipping and local offset.

Independently decoded local frames 720, 930, 1120, 1240, 1340, 1690, 1850 and 2000. The first two samples show mass-to-mole conversion and coefficient-adjusted capacity comparison in separate stages. At 1120 and 1240 the product amount relationship is visible without the later 25.4 g result; that result is visible at 1340 after its 1292 cue. At 1690 the active stage calculates chlorine used, with completed product yield retained. At 1850 and 2000 the final stage shows chlorine left as 0.06460 mol and 4.58 g. Stable task, balanced equation, grouped given quantities and molar masses, working, reference note and retained results have no sampled native collision or clipping. The final four-item trail fits within the native frame.

Saved evidence and exact decoded-image hashes: `out/prototypes/feedback-independent-reviews/limiting-paced-encoded-pilot02-evidence-2026-10-10.json`. This pilot covers the worked sodium/chlorine example. It does not encode the earlier coefficientDivide diagram whose retiming correction is verified from source above, or the quiz or summary.

All four current worked pilots now have independently verified snapshot/media binding, exact exported captions and bounded native static observations. No continuous playback, human listening, perceived pace, external-caption clearance, small landscape-player readability or 390 px portrait approval is claimed. Existing pending playback and listening gates remain necessary.
