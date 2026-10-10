# Independent scientific-content review of two complete calculation packages

Date: 10 October 2026. Reviewer: Sol 6.1 independent science reviewer, `/root/bio_b2_independent_review_sol`. This reviewer did not author the selected lessons or perform their source integration.

Outcome: **science pass for the two exact export packages below**. No material scientific error was found in the complete frozen lesson copy, narration/alignment text, exported caption content, calculations or selected diagram logic. This outcome is confined to scientific content reviewed through source, caption and diagram-code evidence. It is not a human-listening, continuous-video-motion, device, accessibility, curriculum-coverage or publication approval. No existing source, media, config, gate or approval flag was edited.

## Exact package binding

Package hashes below are the canonical dependency-package hashes carried by `release.snapshot.json`, not byte hashes of the snapshot files. Video and lesson hashes are SHA-256 byte hashes.

| Binding | Empirical formulas | Mole ratios |
| --- | --- | --- |
| Package directory | `out/prototypes/calculation-full-2026-10-10/empirical-formulas/full-render-02` | `out/prototypes/calculation-full-2026-10-10/mole-ratios/full-render-01` |
| Export package SHA | `9e24d92728501e8ce219d3cf99d425109dca2827be6a883e0e04cab5bea04257` | `579576d9dee80c19a464b7c6dd36b4b7f5f517c3ce72eb3ca921451c8577b503` |
| Input package SHA | `1dcefad4640d40f1dc5bdb51b30e4e66f6e115633871e2f1ec208a15c6d46f63` | `792b61476dfffba6a8d5ebf1ead27a6ef0029a0cbae75c9ce107624f6bc796a1` |
| `video.mp4` SHA | `4f3d83e9dc66e8180b363d9fbe3cf9d604efa78297316eb0565f54cda5954436` | `48cf82105ae64fa97edafd81519f1f98896ddc873923d18d6c103954f1eb64d7` |
| Selected lesson | `out/prototypes/empirical-formulas-paced-2026-10-10/narrated.lesson.json` | `out/prototypes/mole-ratios-paced-2026-10-10/narrated.lesson.json` |
| Lesson SHA | `92611f178fba8dce8f4c37e86354a266583862ad0c4ff8c19bafc98503af0776` | `6914afbed82d18dc16b575c2ad7475e605306fc5cd602c54b0263332b2d60764` |
| `release.snapshot.json` byte SHA | `faa65efe058d08d8873261ac1cbdf9454bdcd121b58acb35fa4dfef254558d81` | `b2b83c92932d6e825622f5d9f3e5472339a05096db4701bd635dac1c93fe4e0a` |
| `captions.srt` SHA | `2019199a939bcb86cd8a80b7e8a5a2077add2b84d602ae4c31222f8547731b89` | `3bd1937ef282488135c0e54a97fd4d9dc85ce4d3304ed3c667f12db416c2f555` |
| `captions.vtt` SHA | `9fbc7d5beb3efd2ec1a97fe0ab5588c7fe3aca4c953c8f07e77ac914a5089449` | `a5b45bbe15922e7292aefa8d594951c0fcce6e2db9d8b332b339d68502b88a77` |
| `render-record.json` SHA | `67a47d515b79c0b97b0384b5d2bbb375e045c850f25f5890375310dce3cb1cba` | `826c9793309289f24185b1a2fc1d85fb66b3ada7b762671f1e5f60adbf399535` |

Verification used workspace root `out/checks/review-batch-byte-preserved-2026-10-09` and the main `scripts/lib/release-snapshot.mjs` adapter, with no pinned runtime edits. Both complete input and export snapshots returned `valid: true`, no dependency changes and no missing required files. Independently hashed all pinned snapshot entries and found no mismatches. All actual exported artifacts in the main package directories also match the frozen export entries. These checks establish version binding, not how an unseen frame or sound was perceived.

## Complete reviewed evidence and science decisions

Read all ten scenes in each selected lesson, including hook, concepts, definitions, task/givens, all stage and line copy, worked examples, misconception, response prompt/feedback and summary. Reviewed the supplied constants and question assumptions before calculating their answers. No science decision was inherited from user acceptance of earlier pilots.

For empirical formulas, the mass basis, elemental mass-to-mole conversions and approximate integer inference are sound. Independently recalculated 40.00/12.01 = 3.330557868 mol, 6.71/1.008 = 6.656746032 mol and 53.29/16.00 = 3.330625 mol. Normalising unrounded values gives approximately `1 : 1.998687996 : 1.000020156`, supporting CH₂O rather than pretending the measurements give exact integers. The displayed rounded values and approximation signs agree. CH₂O's supplied molar mass is 30.026 g mol⁻¹; carbon contributes 39.998667821% by mass, correctly about 40.00%. The molecular multiplier 180.16/30.026 = 6.000133218 supports six and C₆H₁₂O₆. The molecular extension explicitly assumes a single molecular substance and does not identify glucose from formula alone.

The new nitrogen/oxygen task gives 30.45/14.01 = 2.173447537 mol and 69.55/16.00 = 4.346875 mol, ratio approximately `1 : 1.999990764`, supporting NO₂. It asks for an empirical formula, so it does not assert a unique molecular identity. Multiplying all terms of `1 : 1.5` by two preserves `2 : 3`; rounding to `1 : 2` would not. Approximate ratios, retaining calculation digits and checking unexpected results are taught consistently. The reviewed method agrees with [OpenStax's empirical and molecular formula treatment](https://openstax.org/books/chemistry-2e/pages/3-2-determining-empirical-and-molecular-formulas).

For mole ratios, all three displayed reactions balance: `2H₂ + O₂ → 2H₂O`, `4Fe + 3O₂ → 2Fe₂O₃`, and `2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O`. Coefficients compare intact chemical entities and mole amounts; subscripts retain each substance's formula. The Fe comparison is correctly `4 : 2 = 2 : 1`, with four Fe and six O atoms on each side. The lesson explicitly describes solid Fe₂O₃ by formula units, not separate molecules. The acid/base examples give 0.300 × 2/1 = 0.600 mol HCl, and the reverse comparison uses 1/2. Complete reaction and sufficient other reactants are explicit where needed. The task's 4.00 mol H₂ yields 4.00 mol H₂O and requires 2.00 mol O₂. These are theoretical reacting amounts, not a claim about recovered laboratory yield. The scientific comparison is consistent with [OpenStax's stoichiometric amount relationships](https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry).

Read the selected pinned diagram consumers and their registry mapping. Reviewed scientific invariants in their formulas and atom/count construction, rather than relying only on comments or arithmetic tests:

| Pinned consumer | Exact SHA-256 | Scientific evidence checked |
| --- | --- | --- |
| `EmpiricalBlocksDiagram.tsx` | `346519485a6d66c97628dbf4aa123e6c92a772f2fcde0f925a7f7a4418835497` | Unit C:H:O = 1:2:1, six groups conserve 6:12:6, one group gives CH₂O; known compound labels are illustrative, not inferred identities |
| `MassBreakdownDiagram.tsx` | `bbeea521a13fd35fd09c2be1a9be53b7b473699f2922e24b8a9f25f823d2f8f2` | Selected percentages 40.00, 6.71 and 53.29 total 100; block widths and mass labels use supplied segments |
| `CoefSubscriptDiagram.tsx` | `502475c3c45e5106eecd20126423eb872ed441782fa42597843e888a35a133a4` | Species arrays preserve two H₂, one O₂ and two H₂O; atom totals agree; ratio indices compare H₂/H₂O coefficients and reduce correctly |
| `RatioConvertDiagram.tsx` | `1302ee69bc9e9c03f13d307b54aab5feb5b64e6c6a909c0d9ce350c7ff94bf9b` | Wanted/known coefficient computation gives 0.600 mol acid from 0.300 mol base; three/six crates at 0.100 mol agree with those amounts |
| `OrganisedCalculation.tsx` | `06d66db58373e6d818792791ba73e0719943e7d719ca62c02c6ca07d97d10822` | Displayed calculation stages and retained prior summaries use the selected lesson strings; no alternate calculation or units substituted |

Full paths for the first, third and fourth consumers are `src/slides/diagrams/kinds/chem-y11-m2/`; MassBreakdown is under `src/slides/diagrams/`, and OrganisedCalculation under `src/slides/shared/`, all relative to the pinned runtime. Their hashes agree with frozen input entries. Empirical block movement is bounded in speech and supporting copy as composition grouping, without bonds or separate glucose fragments. The mass-block scene explicitly describes schematic mass accounting, not physical element separation. Mole drawings are a counting model, and acid crates are schematic mole amounts, not literal molecular containers or a complete solution-ion model. Those scientific limitations are appropriate. This was a code/content assessment; actual animation perception and frame/device legibility belong to separate reviews.

For all scenes, the complete caption token text matches the voiceover text, and assembled alignment characters match that text after whitespace normalization: 776 tokens for empirical formulas and 717 for mole ratios. Regenerated exported caption content through the pinned caption consumer and compared exact bytes: all 122 empirical SRT/VTT cues and 115 mole-ratio cues agree with the full lesson timeline. Numerical names, formulas, units and explanation content therefore remain consistent in the reviewed caption representation. This does not verify pronunciation or how a listener parses spoken formulas.

## Findings, schema records and limits

Material science findings: **none** for either exact package. No narration, value, formula, diagram-label or scientific assumption change is requested. No scientific uncertainty analysis, completed investigation or full syllabus-action coverage is inferred from these explanations. Learner thinking time and response-hold adequacy are outside this science-only decision.

The full-package review schema in `scripts/lib/release-review.mjs` requires an unchanged complete export snapshot containing an MP4, a named reviewer, supported scope/outcome and nonempty hashed evidence. It does not require a science reviewer to claim listening, motion or device review. Those are distinct required gate scopes. The present review can honestly supply `scope: science`, `outcome: pass` for these unchanged packages using the evidence above. It cannot supply any other scope or an overall release-ready result.

Main evidence path: `docs/production/calculation-full-science-review-2026-10-10.md`. Root authorised an additive byte-identical mirror at the same relative path under the pinned runtime after this report freezes. The two additive JSON records under `docs/production/calculation-full-reviews-2026-10-10/` bind that evidence path and its actual byte hash to the exact corresponding export package. Their evidence hashes identify both identical report copies without placing a circular self-hash inside this report. Existing tracked pinned runtime, frozen package inputs and all historical sources remain unchanged.

Record verification checks hashes and schema; it does not authenticate a human reviewer or prove scientific judgement. Complete-voiced listening, whole-video motion, device and accessibility reviews, current teaching-brief/full-package gate checks and root's publication decision remain independent. Science pass here does not fill those scopes or authorise publication.
