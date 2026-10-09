# Module 5 opening drafts: exact-layout review

Final bounded update, 10 October 2026: Chemistry's equal-rate cue and grouped worked/quiz layouts improve the sampled native frames; its final clearance edit is verified. Biology's final grouped quiz also improves the sampled native frames. **Phone readability remains unresolved, and Biology's lineage cue needs correction.** This is silent, sampled layout evidence, not recording, motion, listening, device or release approval. Revision-specific addenda below supersede the relevant initial findings without discarding their evidence.

## Initial Chemistry review, source 1bbd79a6

Reviewed 10 October 2026 by the delegated visual-design reviewer. **Changes required before treating the layout as ready.** The hook is clean and the sampled quick-check boundary hides feedback correctly. The equal-rate teaching bullet arrives too late beside the exchange, and the worked-example evidence and quick-check prompt are too small in the phone-size representation.

## Exact scope and method

Source at initial review: `docs/production/drafts/module5-chemistry-l1-2026-10-10/lesson.json`, SHA-256 `1bbd79a6b9f8ca574df39967855784aa9b63044ba69911c3c21ab73fdddf7972`, subsequently preserved under that draft's `initial-review/lesson.json`. The hash was verified before and after the main rendering run. This initial section does not cover Biology or subsequent Chemistry sources; see the separately bound addenda below.

Rendered through **the actual `src/dev/release-entry.tsx` and `src/LessonVideo.tsx`**, supplying the exact lesson as props. This is not a direct-component approximation. The lesson's intro duration is zero and scene offsets come from `src/lesson/timeline.mjs`, including transition overlap. All selected frames are within their scenes rather than inside transitions. The draft has text-only narration, so there is no selected audio to hear or align.

Scratch directory: `out/prototypes/module5-draft-visual-review-2026-10-10/`. It contains `render.mjs`, `render-extra.mjs`, exact `remotion-props.json`, the review bundle and `evidence.json`. The evidence manifest lists source hash, inspected runtime dependency hashes and every PNG's scene-local/composition frame, scale, path and SHA-256. Its checked-in copy is `docs/production/module5-draft-visual-review-2026-10-10.json`. The listed dependencies identify relevant code; this is not a complete frozen release-input snapshot.

Actually viewed **11 native PNGs at 1920 by 1080 and six separately rendered PNGs at 384 by 216**. The latter approximate a narrow phone player and expose scaling problems. They are not an actual-device test and contain no player controls or external captions. No continuous playback, normal-speed motion, listening, caption-on review or full lesson review was performed. Findings remain source/still evidence only.

## Sampled frames and observations

Paths below are relative to the scratch directory. All were opened and visually inspected.

| Scene | Local frame / composition frame | PNG | Observation |
| --- | --- | --- | --- |
| Hook | 300 / 351 | `hook-300.png` | Now/Later cards, sealed-drink context and Same look are clear. No fallback atom, placeholder, unrelated artwork or collision. |
| Static/dynamic contrast | 699 / 1599 | `concept-two-states-699.png` | Only static-book text is visible. The large visual stage is empty immediately before the programmed diagram entrance. |
| Exchange in progress | 910 / 1810 | `concept-two-states-910.png` | Two tokens are airborne, with six remaining on the plinths in total. This sampled state preserves eight visible tokens. Both group labels and one-mixture disclaimer fit. The equal-rate bullet is absent. |
| Exchange between transfers | 930 / 1830 | `concept-two-states-930.png` | Six A tokens and two B tokens are shown. A ⇌ B and larger/smaller amount labels fit cleanly. Still only the static-book bullet is visible. |
| Exchange, late hold | 1800 / 2700 | `concept-two-states-1800.png` | Equal-rate bullet remains absent at 60 seconds into the scene. |
| Exchange, final teaching beat | 1950 / 2850 | `concept-two-states-1950.png` | The dynamic equal-rate bullet finally appears. Both bullets and the diagram fit without collision. |
| Worked example | 1500 / 7155 | `worked-example-1500.png` | Native text is unclipped, but equation, conditions and concentrations share one long heading. Conversion-rate evidence is in a smaller italic coach note. Three reasoning rows are already visible. |
| Quick check, last protected frame | 1367 / 11757 | `quick-check-1367.png` | Prompt, pause instructions and countdown only. No feedback visible. |
| Quick check, boundary | 1368 / 11758 | `quick-check-1368.png` | Feedback is still transparent at the first fade frame. Countdown has ended. No answer appears before the supplied boundary in these samples. |
| Quick check, first feedback | 1420 / 11810 | `quick-check-1420.png` | First answer row visible. Later rows still hidden; prompt remains visible. |
| Quick check, complete feedback | 2000 / 12390 | `quick-check-2000.png` | All three feedback rows fit, with no native overlap. Final row approaches the lower teaching region, so external-caption review is still required. |

Phone-size files viewed: `hook-300-phone-384.png`, `concept-two-states-930-phone-384.png`, `concept-two-states-1800-phone-384.png`, `worked-example-1500-phone-384.png`, `quick-check-1367-phone-384.png` and `quick-check-2000-phone-384.png`.

The hook's main question and Same look comparison survive the reduction best. Supporting lines are small. In the exchange scene, the main heading and A ⇌ B remain recognisable, but explanatory bullets, group labels and especially the model disclaimer require enlargement for comfortable reading. The worked problem and quick-check prompt compress into dense miniature text. Reasoning rows are more distinct than the prompt but still small. These files do not support a phone-readability pass.

## Findings for root to resolve

### V1. Equal-rate explanation appears after most of its diagram beat

**Required correction.** `ConceptSlide` passes a default bullet range from frame 60 to `durationInFrames - 90`. `src/animations/BulletReveal.tsx` distributes two unspecified bullet cues to the endpoints. The selected scene lasts 2015 frames, so the dynamic bullet begins at frame 1925 (64.17 seconds). It is fully revealed around frame 1939, leaving only about 2.5 seconds before the scene's end. The exchange starts at frame 700. The sampled frames at 910, 930 and 1800 therefore place continuing chemical exchange beside only the static-book statement. With the diagram meter disabled, there is no visible equal-rate condition during most of that comparison.

**Smallest implementation:** set explicit per-bullet `at` values in seconds, using the existing supported field. Reveal the dynamic bullet at the chemical-transition cue and retain it through the exchange. The script owner can choose a provisional cue now; root must replace it with measured alignment after recording. Keep the meter disabled if its tiny labels would add clutter. The large corrected teaching phrase can carry the rate relationship.

Recheck the static beat, transition to chemical exchange, active transfer and final hold after this change. A reading hold is useful; an unrelated statement remaining alone during its successor's demonstration is not.

### V2. Essential evidence is too small in the worked and retrieval tasks

**Required correction for narrow-player use.** The worked question is rendered at 36 source pixels, about 7.2 pixels in the 384-wide representation. Its coach note contains the decisive conversion-rate evidence at approximately 28 source pixels, about 5.6 pixels after reduction. The quick-check prompt exceeds 200 characters and selects 32 source pixels, about 6.4 pixels after reduction. The superscripts and units become particularly difficult. These are source-size calculations supporting the actually viewed miniature renders, not universal accessibility thresholds.

The native layouts do not collide, but native fit is insufficient. Both tasks leave considerable blank vertical space while essential evidence is packed near the top. Organise the prompt as a short question plus stable grouped evidence: reaction, fixed conditions, concentrations and opposing conversion rates. Preserve each value with its unit. Let the three learner decisions sit separately from those givens. Use shorter feedback lines while retaining all required reasoning. Do not remove scientific conditions merely to make the font larger.

`calculationPresentation` in the existing worked/quick-check slides is one opt-in candidate for grouped evidence and focused reasoning, even though this task is explanatory. It is a layout mechanism rather than a requirement to introduce arithmetic. Inspect the actual output before selecting it: its smaller givens/notes are not automatically phone-readable. A minimal evidence-board adjustment is another bounded option. Root should choose the simplest layout that makes the supplied evidence usable, then render the same phone-size samples again.

### V3. The model-scope statement needs more visual weight

**Review priority associated with V2.** The two plinths, labels and generic A/B equation fit at native size, and the visible caption explicitly says one mixture, two species. The narration also explains that the groups are schematic and do not represent separate containers or exact trajectories. That is a useful model limitation to retain. At phone size, this caption becomes a tiny line while the separated platforms dominate.

Shorten the label to a large `One mixture` or equivalent and keep the fuller limitation in narration. A subtle enclosing boundary can be considered if the enlarged wording is still insufficient, but a new illustration is not required. Do not replace the existing plinth artwork merely for visual uniformity. The stills show selected token positions only; they do not verify every trajectory or establish that a learner understands equal average rates.

### V4. Early empty stage and default worked-step cues need deliberate treatment

**Bounded improvement, not a wholesale redesign.** The exchange panel is empty until frame 700, more than 23 seconds into a 67-second scene. The static-book explanation has no book visual. This is not a scientific error and may be an intentional listening/reading hold, but the large empty panel attracts space without supporting the current reference. Either present the static idea as a compact intentional board before the exchange, or defer the empty panel's appearance to the exchange cue. A small schematic book/support icon is justified only if it helps the static comparison; no new painted asset is needed.

The worked scene has no authored step cues. Its rows therefore use default starts of 116, 202 and 288 frames, so the full reasoning appears roughly ten seconds into a 56-second allowance. No actual speech exists to establish a measured mismatch, but this default should not be mistaken for purposeful narration alignment. Add provisional causal cues and replace them after recording, retaining useful completed reasoning.

### V5. Preserve the quick-check boundary behaviour

**Sampled behaviour satisfactory, recorded hold still pending.** The selected `answerVisibleStart` is 1368; `responseHoldStart` is 1128, an estimated eight-second interval. The inspected pre-boundary and boundary frames contain no feedback, and the first/final feedback samples show the intended staged rows while keeping the prompt visible. `src/lesson/answer-timing.mjs` and the quick-check renderer support the authored first-exposure boundary.

This does not verify every frame, an assembled silent interval, matching captions or any actual recording. Split prompt/answer narration, assemble the protected silence and check the exact voiced result later. Keep the current answer-neutral scene caption. Retain first-visible timing semantics; do not substitute the older midpoint-based `answerStart` field.

## Evidence and next review

Key file hashes, also available with all remaining outputs in the evidence manifest:

| File in scratch directory | SHA-256 |
| --- | --- |
| `hook-300.png` | `f6a76e4a8af890ca2ebfb58239faf5ceacc46fd5e69cc634a7eb38d3fe9ce3b4` |
| `concept-two-states-910.png` | `4e49e82abfbec664674a69dd722fcc52977f04e2b9e48361e95716b4c84a8973` |
| `concept-two-states-1950.png` | `503a9930396e7c7a2883569d4bf1f48f3360611aa97840603d00a25ab7b146f3` |
| `quick-check-1368.png` | `68646c5e92c83596cf9b5326eee5f456702bcf6633ce6c792a9d207c1698768d` |
| `quick-check-2000-phone-384.png` | `380e9a86d4993c639e7595a635c00dd2c6cecb9a1a9c110ec18c92bad03bd53f` |

Root owns resolution and source integration. Recheck V1 and V2 against a new exact source hash before calling this selected layout ready. Preserve this original evidence. Follow with actual voiced pilot, caption-on/device checks and human listening under the existing production gates. No source, shared component, narration, approval or release file was changed by this audit.

## Chemistry revision addendum

The grouped-board source was SHA-256 `bb97d2349e3088da83b2581662dc2237876a1ed41fec27b51af86898660ea3aa`, now preserved at `docs/production/drafts/module5-chemistry-l1-2026-10-10/grouped-board-review/lesson.json`. The final clearance source at the active lesson path is `14e05ef9c9f6808bb07565d1d9d3030515f157cfc161c24e58ddd9e5f43b497a`. Each was hash-checked before and after its rendering. The existing actual-release-entry bundle was reused after verifying the initial manifest's relevant runtime dependency hashes. Exact props and per-image hashes are in `chem-revised-evidence.json` and `chem-final-clearance-evidence.json` in scratch, with a combined checked-in revision manifest alongside this report.

All seven native and four 384-wide grouped-board images were opened, plus the final clearance native/384 pair. Filenames use `chem-revised-` unless stated otherwise. Local frames below have the same composition offsets as the initial review.

| Scene and local frames | Observed change | Remaining limit |
| --- | --- | --- |
| `concept-two-states`, 690 and 910 | Explicit bullet cues at 2 and 22 seconds put the equal-rate explanation beside active exchange at both sampled frames. V1 is resolved for these provisional silent cues. | Narration alignment is unmeasured. Small group labels and one-mixture caption remain difficult at 384 width. |
| `worked-example`, 1000 and 1500 | Short task and equation are separate from two opposing-rate cards. Concentrations retain units and fixed-condition reference. At 1000 a single reasoning stage is prominent; at 1500 the later stage retains useful established results. Native layout fits. | The 26-pixel references become about 5.2 pixels at 384 width. Grouping alone does not resolve V2's phone requirement. |
| `quick-check`, 1367, 1420 and 2000 | Neutral grouped evidence remains visible. Frame 1367 contains no feedback; 1420 has the first stage; 2000 has final reasoning with established results. | The duplicated left pause instruction approached the footer in bb97. That clearance issue led to the final narrow edit below. |
| `chem-final-clearance-quick-check-1367.png` and phone pair | At final source 14e05, the duplicate left pause instruction is removed. The shorter neutral note finishes around y900 with clear footer separation. Right countdown/pause instruction remains; no feedback is visible. | This final sample verifies clearance only. It does not repeat all prior scene samples or establish interval-wide answer protection. |

Source inspection confirms deliberate worked reasoning stages at 780, 1050 and 1290, and quiz stages at 1368, 1608 and 1848. The quiz's planned hold remains 1128 to 1368. These are estimated author cues, not measured voiced alignment. The static opening received a neutral reference board, but this bounded revision pass did not render an additional pre-exchange frame, so V4's early-stage appearance is not independently cleared here.

V2 is partly resolved as an evidence-organisation defect at native size. Its phone-size component remains open. Direction labels, conditions and reference quantities are essential task evidence, so their small size cannot be dismissed as decorative metadata. V3's one-mixture caption remains open at narrow-player scale. Preserve the useful diagram and increase the teaching weight of its scope statement during the next bounded layout adjustment.

## Biology corrected-source observations

Source inspected and rendered: `docs/production/drafts/module5-biology-l1-2026-10-10/lesson.json`, SHA-256 `712a505e6c41fb5acb0d670c25614c88162dd5895013174c7b0d9988a872fb26`, subsequently preserved at `source-reviewed/lesson.json` in that draft directory. This revision includes the conditional feedback wording, "seedlings may not inherit them". It is distinct from the earlier cc5775 source, which was not used for these samples.

Seven native and five 384-wide images were rendered through the same actual `LessonVideo` entry and opened. Exact props, frames and image hashes are in scratch `bio-corrected-evidence.json`. Prefix below is `bio-corrected-`.

| Scene, local / composition frame | Native still observation | Limit or action |
| --- | --- | --- |
| `hook`, 300 / 656 | Explicit same-parent clone comparison cards and the risk question fit. No fallback atom or missing-art placeholder. | Secondary copy is small at 384 width. |
| `concept-continuity`, 520 / 1752 and 1300 / 2532 | Successive generations and the information ribbon fit. Earlier generations are dimmed in the later sample. The viable/fertile pill is absent as intended; surrounding copy distinguishes the terms and states the compressed, selected-lineage model. | The essential second bullet is still absent at 1300. Small generation labels and model caveat are weak at phone scale. |
| `concept-tradeoff`, 1340 / 7996 | All four table rows fit. "Survival certain?" says No for both methods. Conditional teaching text avoids guaranteed survivors or infections. | Table text is small at phone scale. A minor row-wise column-width variation is visible, without overlap. |
| `quick-check`, 959 / 10753 | Countdown and full nursery question only, with no feedback. | The long question occupies a dense heading while leaving a large blank area. This was raised as a required organisation correction. |
| `quick-check`, 1012 / 10806 and 1300 / 11094 | First feedback then all four rows fit without native glyph collision. The conditional inheritance wording is present. | Dense prompt remains difficult at 384 width; superseded by the grouped-quiz revision below. |

**B1, remaining cue correction:** the second continuity bullet has no explicit `at`. The same default `BulletReveal` mechanism places it at frame 1470 of a 1560-frame scene, so it is absent in the inspected frame 1300. Its content, enough descendants surviving and reproducing across generations, is central. Assign a deliberate provisional cue to the population-continuity explanation and later replace it with measured speech alignment.

Source inspection of `src/slides/diagrams/kinds/bio-y12-m5/LineageDiagram.tsx` also places the early birth sequence before the authored offspring and transfer labels. With delay 62, births occur at scene frames 492, 562 and 632; the offspring label arrives at 762 and transfer label at 822. Bring a large transfer/inherited-information label into the first relevant transfer cue. This timing inference is from source, not a continuous-motion observation. Keep the selected-lineage caveat and do not imply that every offspring reproduces. The table and lineage can remain in the existing style mix.

## Biology final grouped-quiz addendum

Final source SHA-256 `17591531e1050b33a758f5a43a470b217330c7e969240a991d08bf5d1d3c826e` at the active Biology draft path was checked before and after rendering. The final pass was limited to quick-check frames 959, 1012 and 1700, with native and 384-wide representations for 959 and 1700. All five images were opened. Evidence is `bio-grouped-final-evidence.json`; filenames use `bio-grouped-final-quick-check-` followed by the local frame.

The before/after comparison at frame 959 is now concrete: the earlier dense nursery heading becomes a short decision question, a Cuttings/One parent card, and a Seedlings/Crosses card with the genetically-different-parents reference. A separate condition note preserves the supplied susceptibility information and asks why survival remains uncertain. The native frame has clear separation and no clipping, overlap or premature feedback. The unchanged first-answer boundary is 960.

Frame 1012 shows only the first reasoning stage, explaining the crosses. At frame 1700 (composition frame 11494), the fourth stage limits the survival claim, with three established summaries beneath it. The conditional inheritance statement remains visible in that trail. This use of the existing presentation component supports non-arithmetic reasoning without introducing irrelevant calculations. Native organisation is materially improved; the genetic-difference reference and condition note remain too small in the 384-wide representation for a phone-readability pass. Earlier stages between these samples were not continuously played.

## Final bounded disposition and evidence

The combined revision manifest is `docs/production/module5-draft-visual-review-2026-10-10-revisions.json`. It retains each source hash, exact frame mapping and PNG hash separately. The initial JSON evidence remains unchanged. Render scripts and exact props are retained in the owned scratch directory for reproduction. Selected code hashes identify inspected runtime components, not a complete frozen export package.

The sampled native organisation problems are corrected for both final quizzes, Chemistry's worked example, and Chemistry's equal-rate cue. Remaining concrete work is to enlarge essential reference/condition/model-limit text for a narrow player and correct Biology's lineage teaching cues. Render only the affected samples after those changes. Do not infer a phone pass from native fit or from these miniature images being legible when enlarged.

Actual-device viewing, external-caption clearance, continuous motion, all-frame answer protection, measured speech alignment, assembled thinking holds and human listening remain pending. No final voiced revision was available or played. This review supplies source and sampled silent-layout observations only and grants no recording, export or publication approval.
