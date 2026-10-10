# Independent scientific-content review of the complete mass-to-mass package

Date: 10 October 2026. Reviewer: Sol 6.1 independent science reviewer, `/root/bio_b2_independent_review_sol`. This reviewer did not author the selected lesson or perform its source integration.

Outcome: **science pass for the exact complete export package below**. No material scientific error was found in the complete frozen lesson copy, narration/alignment text, exported caption content, calculations or selected diagram logic. The decision uses source, caption and diagram-code evidence. It does not establish human listening, whole-video motion, device, accessibility, curriculum coverage or publication approval. Limiting reactants and its still-rendering package are outside this assignment. Existing lessons, media, configuration, gates and earlier review records were not edited.

## Exact package and source binding

Package hashes are canonical dependency-package hashes carried by the snapshots. The other hashes below identify exact file bytes using SHA-256.

| Binding | Exact value |
| --- | --- |
| Complete package directory | `out/prototypes/calculation-full-2026-10-10/mass-to-mass/full-render-01` |
| Export package SHA | `39f9766ab92dbda5266da021e9b6e20fb19b51b92fe8c6147fedb11430bd4161` |
| Input package SHA | `5b341f3cf0a70d7d2710f9cc066a36ac32257493397f5023271b22006266f01d` |
| `release.snapshot.json` byte SHA | `4d16b55761338489ae423187caf3d1f258e513464f754c933d38a2088719ca99` |
| `inputs.snapshot.json` byte SHA | `4fabd222ae9a87fa1164faff1277dd95f65fd64b12f19dcf915483b72ea34b20` |
| `video.mp4` SHA | `b17845f385942f167a50a398f0200836bad95815e72d4fde3ef819cab2408d8f` |
| Selected lesson | `out/prototypes/mass-to-mass-paced-2026-10-10/narrated.lesson.json` |
| Lesson SHA | `b90681774be533bdedca5bebca550f18530e1110ad85b28bc2a1d02b282da33e` |
| `captions.srt` SHA | `17f94f03304902f0d4bb7cf2d355d3a296c62b9e58f1c81b32866faa5f1b5488` |
| `captions.vtt` SHA | `fd274abb6f12a748280adda6263abf72da9bab3c521cd533f49ee55080c6b9d7` |
| `render-record.json` SHA | `cf7520e76a2655ca5b91c5501ccbc65080ab6dc68995558eb1dd19205cf3d801` |

Verification used the preserved runtime root `out/checks/review-batch-byte-preserved-2026-10-09` and the corrected main `scripts/lib/release-snapshot.mjs` adapter. Both complete input and export snapshots returned `valid: true`, with no changes and no missing required files. Independently hashed all 851 present entries in the 861-entry export snapshot: no byte mismatches. The remaining ten entries are optional assembled `.generation.json` paths already captured as absent with `sha256: null`; they are not changed files or missing required evidence. Selected audio and alignment files are present and bound. All nine actual exported artifacts in the main package directory match their frozen export entries. Main and preserved selected lesson bytes also agree.

The complete timeline is 12,092 frames at 30 fps, with zero intro frames, and the render record covers frames 0 through 12,091. This binds the scientific-content review to a completed full package, rather than an earlier pilot. Hash and range checks do not establish that its sound or moving images were perceived correctly.

## Complete reviewed content and scientific decisions

Read all ten scenes: hook, title, concept, definition, formula, both worked examples, misconception, reverse quick check and summary. Reviewed every narration string, concise caption, heading, bullet, task, given, reference constant, assumption note, calculation stage, retained summary and answer line. Independently recalculated the selected examples using the supplied constants and unrounded internal values.

The method correctly connects known mass to known mole amount with that species' molar mass, uses the wanted/known balanced coefficient ratio, and converts the wanted mole amount to mass with the wanted species' molar mass. The identities at the two ends remain necessary even when numerical molar masses happen to match. A combined expression is correctly accepted when it includes all three relationships. Coefficients alone cannot convert one species' grams into another species' grams. The method agrees with the mass-to-mass treatment in [OpenStax's reaction stoichiometry section](https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry).

All displayed equations balance. `C + O₂ → CO₂` conserves one C and two O atoms. `Fe₂O₃ + 3CO → 2Fe + 3CO₂` conserves two Fe, three C and six O atoms. `2Mg + O₂ → 2MgO` conserves two Mg and two O atoms. The lesson distinguishes these mole ratios from mass ratios, including the reverse product-to-reactant calculation.

| Selected calculation | Independent check | Scientific result |
| --- | --- | --- |
| 12.0 g pure C, complete combustion with enough O₂ | `M(CO₂) = 44.009 g mol⁻¹`; `n(C) = 12.0/12.011 = 0.999084172842 mol`; `m(CO₂) = 43.968695362584 g` | Displayed approximate intermediates agree; final `44.0 g` has three significant figures. About 32 g of oxygen contributes to the product mass. Counting both reactants preserves mass. |
| 80.0 g pure Fe₂O₃, enough CO and complete reaction by the supplied equation | `M(Fe₂O₃) = 159.687 g mol⁻¹`; `n(Fe₂O₃) = 0.500980042208 mol`; `n(Fe) = 1.001960084415 mol`; `m(Fe) = 55.954460914163 g` | The 2:1 amount ratio is correctly oriented. Final `56.0 g` has three significant figures. Doubling mole amount does not double the oxide's mass; oxygen leaves the oxide and is accounted for in CO₂. |
| Pure Mg needed for 20.0 g MgO, enough O₂ and complete reaction to MgO | `M(MgO) = 40.304 g mol⁻¹`; `n(MgO) = 0.496228662168 mol`; `Mg:MgO = 2:2 = 1:1`; `m(Mg) = 12.060837633982 g` | The known product and wanted reactant are correctly identified. Final `12.1 g` has three significant figures. The smaller magnesium mass is consistent with oxygen supplying the rest. |

The reaction conditions prevent overclaiming. The carbon example specifies complete combustion to CO₂, the iron example specifies pure iron(III) oxide rather than unspecified ore, and the magnesium task specifies complete reaction to MgO. These are predictions under the supplied equations, not a general description of all laboratory combustion or reduction conditions. Theoretical mass is distinguished from recovered product; limiting supplies and measured yield are deferred explicitly. The rounding explanation retains calculation digits and reports final precision supported by the supplied data. It does not claim an uncertainty analysis.

## Diagram and caption evidence

Read the exact selected diagram consumer and registry mapping in the preserved runtime, plus the calculation display and mathematical text consumer. The reviewed source invariants are as follows.

| Preserved source path | SHA-256 | Scientific invariant checked |
| --- | --- | --- |
| `src/slides/diagrams/dioramaKinds/lane-chem-y11-m2.ts` | `b7c39acf38921b56969bfd6a5119917206630c1d4864d688cec7e4524ba146bc` | `chem11m2Pathway` selects `MolePathwayDiagram`. |
| `src/slides/diagrams/kinds/chem-y11-m2/MolePathwayDiagram.tsx` | `7054362e5a47e1acb0d7237e5c057bacdc66cabfd6d7f4cade0ef4246842150f` | Selected labels are `m(C)`, `n(C)`, `n(CO₂)` and `m(CO₂)`. Operators are `÷ M(C)`, `× 1 ÷ 1` and `× M(CO₂)`. Selected piles are `[3,3]`, correctly overriding the default unequal piles. The trap states that equal moles can have different masses. |
| `src/slides/shared/OrganisedCalculation.tsx` | `06d66db58373e6d818792791ba73e0719943e7d719ca62c02c6ca07d97d10822` | Givens, constants, stage lines and retained summaries use the selected lesson strings. The component does not replace their formulas, values or units with a separate calculation. |
| `src/slides/shared/MathText.tsx` | `5afbf68b16558b32108ab30429e9334f3af9aa199343c41af9be03d2f48bfebc` | Text splitting and styling preserve the supplied formula characters and numerical content. |

These consumer hashes agree with the frozen input entries. The moving packet is explicitly described in narration as a calculation step, and the equal piles as an amount relationship rather than literal particles travelling across a bridge. Thus the selected diagram's scientific representation is appropriately bounded. This is a source assessment, not an observation of actual native pixels, motion perception, clipping or device legibility.

For every scene, complete caption-token text matches the selected voiceover text, and assembled alignment characters match after whitespace normalization. There are 966 caption tokens across all ten scenes. Regenerated the full external captions through the preserved `scripts/lib/caption-timeline.mjs` consumer: all 156 SRT/VTT cues match the actual export bytes, with no caption-coverage warnings. The reviewed formula names, quantities, units and explanations therefore remain consistent in the exported textual representation. This does not verify pronunciation, listening comprehension or subtitle readability during playback.

## Findings, additive record and limits

Material science findings: **none**. No narration, calculation, formula, label or scientific-assumption correction is requested for this exact package. Response-hold adequacy, pacing, motion clearance and device presentation are outside this science-only decision.

The full-package review schema in main `scripts/lib/release-review.mjs` requires an unchanged complete export snapshot containing an MP4, a supported scope and outcome, a named reviewer and nonempty hashed evidence. A separate `science` record can honestly use `outcome: pass` on the evidence above. Schema validity does not authenticate a human reviewer or independently confirm scientific judgement, and it does not supply other required scopes.

Main evidence path: `docs/production/calculation-full-mass-science-review-2026-10-10.md`. Root authorised an additive byte-identical mirror at that same relative path under the preserved runtime after this report freezes. The additive record is `docs/production/calculation-full-reviews-2026-10-10/mass-to-mass-science.json`, also mirrored byte-identically. It binds the actual evidence byte hash to this exact export package. Its evidence hash identifies both report copies without a circular self-hash inside the report. No existing tracked preserved source or configuration was changed; earlier empirical-formulas and mole-ratios reports and records remain separate.

Continuous voiced listening, whole-video motion, device and accessibility review, the current teaching brief and full-package gate, and root's publication decision remain independent and pending unless separately documented. This science pass does not authorise publication.
