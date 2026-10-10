# Independent scientific-content review of the complete limiting-reactants package

Date: 10 October 2026. Reviewer: Sol 6.1 independent science reviewer, `/root/chem_c2_independent_review_sol`. This reviewer did not author the selected lesson or integrate its source.

Outcome: **science pass for the exact complete export package below**. No material scientific error was identified in the complete selected lesson, narration/alignment text, caption content, calculations or selected diagram source logic. This is a source, caption and diagram-code decision bound to the full exported package. No audio was heard and no moving export, native frame or actual device was inspected. Listening, motion, device, accessibility, learner timing, curriculum coverage and publication approval remain separate.

## Exact package and verification

The initially supplied `limiting-reagents-paced` path does not exist. The actual source below was derived from both complete snapshots and used throughout this review. Package hashes are canonical dependency-package hashes; other hashes identify exact file bytes.

| Binding | Exact value |
| --- | --- |
| Package directory | `out/prototypes/calculation-full-2026-10-10/limiting/full-render-01` |
| Export package SHA | `8fd0567eeaf0744961982babae7bfc506f9fc33a0d5f905753cbd8818e75289b` |
| Input package SHA | `27b412e159384648f00cf0a9222e4fe1e46f56d04c9e874789fed6b8c2261554` |
| `release.snapshot.json` byte SHA | `6d1149f8d36d2727868a1f89ff37afa59bd6f29d8f684b1cb58d3d1e6be8b921` |
| `inputs.snapshot.json` byte SHA | `d1776c5b4c7aa6f2050fbb2b963b981da5a0c5ab96f54ce91c4f974e818aa495` |
| Selected lesson | `out/prototypes/limiting-paced-2026-10-10/narrated.lesson.json` |
| Lesson SHA | `96fedf688aef15f7e3785ff7c78b1f3a04675a8eb93d8edd9c832e45f807d91a` |
| `video.mp4` SHA | `b8203f386e051811113a2c7367fe9423af07a187af49fcd89b7ec2fa6b2b1526` |
| `captions.srt` SHA | `a523b7d51a2ef60e66e5d793f8f01285f0d02b6ba311abd5b8e5edb1f523345a` |
| `captions.vtt` SHA | `2513544870aee24b70810a41965d3bb7c1a284b4003d1a9084ef41d50d57efc7` |
| `render-record.json` SHA | `ae2c0e7dd3d6802e1cc0b3c66e7c132523ab7650bd681d19486a3d5499fecd39` |

Used the corrected main `scripts/lib/release-snapshot.mjs` adapter with the preserved root `out/checks/review-batch-byte-preserved-2026-10-09`, at HEAD `5ff1e4a2851193d4bad26750145592c1ae97d4bf`. Both full input and export snapshots returned `valid: true`, zero changes and zero missing required files. Independently hashed all 842 present entries in the 850-entry export snapshot: zero mismatches. The eight absent optional assembled `.generation.json` files have `required: false` and `sha256: null` in the frozen record. They are not unexpected missing dependencies.

All nine exported artifacts match their frozen snapshot entries and their main/preserved copies byte for byte. Both snapshot copies and the selected lesson copies also agree byte for byte. Selected recordings, assembled audio, alignment and dependencies are present and bound. The timeline is 8670 frames at 30 fps, zero intro frames; the render record covers frames 0 through 8669. Thus this review binds to the complete 289-second package rather than an earlier pilot. These checks do not establish perceptual playback correctness.

## Complete content and calculations

Read all eight scenes: hook, title, concept, formula/capacity contrast, worked yield/excess example, misconception, quick-check prompt/feedback and summary. Reviewed all selected narration, captions, headings, concise teaching labels, assumptions, givens, constants, staged lines, retained summaries and answer steps. The selected lesson contains zero U+2014 characters.

The method is scientifically sound: convert each reactant's mass using its own molar mass, compare mole amount divided by that reactant's balanced coefficient, derive theoretical product from the smaller capacity, and subtract consumed excess from its original amount. Raw mass or raw mole amount alone does not determine the limiting reagent when species masses or coefficients differ. The theoretical result assumes complete consumption of the limiter in the stated reaction; it is distinguished from recovered laboratory yield. This agrees with [OpenStax's limiting-reactant and theoretical-yield treatment](https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields) and its [reaction stoichiometry explanation](https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry).

Both chemical equations balance. `2H₂ + O₂ → 2H₂O` conserves four H atoms and two O atoms. `2Na + Cl₂ → 2NaCl` conserves two Na atoms and two Cl atoms. NaCl is treated through formula/mole amounts, not called a discrete gas molecule.

| Selected example | Independent calculation | Assessment |
| --- | --- | --- |
| One bun and one patty per burger; five buns and four patties | Four complete burgers and one spare bun | Explicit recipe makes patties limiting. Adding buns cannot replace exhausted patties. This is a bounded analogy. |
| Ten H₂ and four O₂ molecules in the counting model | Capacities `10/2 = 5` and `4/1 = 4`; four equation-sized events consume eight H₂ and four O₂; produce eight H₂O; leave two H₂ | Counts, limiter and leftovers are correct. Initial and final atom inventories agree. |
| Approximate sodium/chlorine capacity contrast | `0.435/2 = 0.2175`, displayed to three decimal places as `0.218`; `0.282/1 = 0.282` | Sodium is limiting despite its larger raw mole amount. Diagram geometry uses its configured values before display rounding. |
| 10.0 g Na and 20.0 g Cl₂, supplied molar masses 22.99, 70.90 and 58.44 g mol⁻¹ | `n(Na) = 0.434971726838 mol`; `n(Cl₂) = 0.282087447109 mol`; capacities `0.217485863419` and `0.282087447109 mol`; `m(NaCl) = 25.419747716398 g`; `n(Cl₂ left) = 0.064601583690 mol`; `m(Cl₂ left) = 4.580252283602 g` | Na is limiting. Final `25.4 g NaCl` and `4.58 g Cl₂ left` correctly report three significant figures. Unrounded product plus leftover mass equals the original 30.0 g total. Supplied molar masses are mutually consistent. |
| Quick check: 4.00 g H₂ and 16.0 g O₂, supplied molar masses 2.016 and 31.998 g mol⁻¹ | `n(H₂) = 1.984126984127 mol`, capacity `0.992063492063 mol`; `n(O₂) = 0.500031251953 mol`, capacity `0.500031251953 mol` | O₂ is limiting. Its greater initial mass does not reverse the capacity comparison. Approximate speech and displayed working agree. |

The final-mass reporting convention is stated, and extra calculation digits are retained. The model and worked example distinguish an equation-sized reaction capacity from literal batches or molecular collisions. No unsupported rate inference is made from the counting graph. The misconception board labels the incorrect raw-mole claim as a misconception and supplies the correct coefficient reasoning.

## Diagram source evidence

Read the selected consumer mapping, three selected diagram implementations, organised calculation consumer, quick-check answer boundary and mathematical-text consumer in the preserved runtime. Their frozen byte hashes agree with the export dependency entries.

| Preserved runtime path | SHA-256 | Scientific invariant |
| --- | --- | --- |
| `src/slides/diagrams/DiagramRenderer.tsx` | `9875eec147bb9ce06e4d44f8ad994151ad7e6685c1fa002d3679ab737d61ad8c` | Selected `recipeCount`, `reactionRun` and `coefficientDivide` types resolve to the inspected components. |
| `src/slides/diagrams/RecipeCountDiagram.tsx` | `192159f1c1181cd7fd4fa1f3635cd7932b133d79686ab368eff808f5f7992fdf` | One bun and one patty per completed burger; maximum four burgers; spare bun and exhausted patties. |
| `src/slides/diagrams/ReactionRunDiagram.tsx` | `d452e810c8c16c488ceaac102738ac601f1d744fd022692a576d758421f249fd` | Selected defaults represent 10 H₂, 4 O₂ and the 2:1:2 equation; events, products and leftovers derive from coefficients. Graph axis is reaction progress, not time or reaction rate. |
| `src/slides/diagrams/CoefficientDivideDiagram.tsx` | `93e99ef9d30e8797ac144f0e939502545b4ee2c1302f47d6abb9dab02c1a54d0` | Configured sodium/chlorine amounts and 2:1 coefficients drive exact capacity geometry and limiting selection; display rounding is separate. The raw-reference column preserves starting amount during division. |
| `src/slides/shared/OrganisedCalculation.tsx` | `06d66db58373e6d818792791ba73e0719943e7d719ca62c02c6ca07d97d10822` | Displays selected givens, constants, stage lines and retained summaries without substituting different formulas or values; future stages do not enter the established trail. |
| `src/slides/shared/MathText.tsx` | `5afbf68b16558b32108ab30429e9334f3af9aa199343c41af9be03d2f48bfebc` | Styling preserves the selected mathematical/formula characters and numerical content. |
| `src/slides/QuickCheckSlide.tsx` | `a3688e1ff6eeacd95e9e96e5121a98aeac9a4644a0541fc7522123213f14c750` | Selected organised answer stages respect the declared first-answer boundary. |
| `src/lesson/answer-timing.mjs` | `3ddcab52b4b0a33cc404dd0c60c0d31c35c926ff0caec410a5c72605e7e54656` | Explicit answer boundary is distinguished from legacy fade-midpoint timing. |

Diagram source correctness is not an observation of actual pixels or perceived motion. Schematic grouped events are explicitly bounded in narration; they do not purport to show a molecular mechanism, physical collision trajectory or measured reaction speed.

## Caption, alignment and response evidence

All eight scenes' complete caption-token text and assembled alignment characters match selected narration after whitespace normalization. There are 695 caption tokens. Rebuilt external caption text through the preserved `scripts/lib/caption-timeline.mjs`: all 116 SRT/VTT cues reproduce the actual export bytes with zero coverage warnings. Thus formulas, values, assumptions and feedback remain consistent in the complete exported textual representation. Pronunciation and caption legibility were not assessed.

The quick-check prompt and answer are separate assembly dependencies. Its prompt ends at scene-local frame 560; the declared silent interval runs from 560 to 620, then feedback starts at 620. In the assembled mono 48 kHz PCM source, those 96,000 samples are exactly digital zero. Caption feedback begins at 20,666.667 ms locally, the declared hold end; the final prompt token ends at 18,640 ms. The selected question and givens contain no answer, and source logic returns no organised working before the answer boundary. This is source/text and PCM evidence only. It does not establish actual first perceptible exposure after rendering, motion clearance or whether two seconds is adequate learner time.

## Additive record and unresolved scopes

Material scientific findings: **none**. No formula, calculation, caption-content, narration or scientific-assumption correction is requested for this exact complete package. Outcome `science: pass` is justified by the evidence above. Main `recordReview` and `verifyReview` validate the complete package and hashed evidence; their schema checks do not authenticate judgement or supply another scope.

Evidence file: `docs/production/calculation-full-limiting-science-review-2026-10-10.md`. Review record: `docs/production/calculation-full-reviews-2026-10-10/limiting-science.json`. Root authorised only additive byte-identical copies of this new report and record at the same relative paths under the preserved runtime. Freeze both files after creation. The record carries the report's byte hash without a circular self-hash inside this report.

No source, shared runtime, configuration, gate, lesson, audio or previous review was edited. HANDOFF.md, the existing mass-to-mass full-package science report and the main review schema were read for the evidence boundaries. Whole-video listening, motion, device and accessibility review, current teaching-brief/release gates and root's publication decision remain independent. This science pass does not authorise publication.
