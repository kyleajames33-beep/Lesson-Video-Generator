# Content corrections and Chemistry audit

Completed 29 September 2026 UTC. The earlier 30 September filename convention is retained for continuity. Main baseline: `b3796f22c311e30df3778732a9cd254cc5029a22`.

The 28 earlier findings have lesson-content corrections. Chemistry now has a principal-scene audit across all 149 lesson JSON files and 71 additional findings/qualifications. This is a script-level review, not permission to render final videos. Across the consolidated change, 323 narration scenes in 105 lessons differ from main and require new audio/alignment. No ElevenLabs generation or paid media work was performed.

## Scope and interpretation

Reviewed Chemistry's principal displayed concepts, worked examples and quick checks, with targeted narration and diagram follow-through. Calculations and definitions were checked independently where errors were identified. Lessons without a finding are provisional within that scope, not certified scientifically complete. The earlier Biology audit reviewed all 75 new Year 11 principal teaching/example/check scenes; other Year 12 Biology is sampled, not fully audited. The JSON ledgers retain the exact scope per lesson and source hashes.

Corrections include narration, displayed answers, captions/summaries and targeted diagram logic. Text-derived audio links and word captions are cleared for changed narration; old timing cannot be reused. Narration was rewritten to follow corrected displayed content in affected scenes where the two disagreed. Some rewritten narration contains formulas/notation and should receive a final pronunciation/editorial pass before ElevenLabs. Reading-time durations are provisional estimates. Diagram-specific frame beats still need review and alignment.

## Correct syllabus and cohort

| Course | Relevant syllabus | Implementation |
|---|---|---|
| Biology Year 11 new sequence | Biology 11–12 (2025) | Year 11 Term 1 2027; Year 12 Term 4 2027; first HSC 2028 |
| Existing Chemistry modules 1–8 | Chemistry Stage 6 (2017) | Applicable before the new cohort; continue for Year 12 through the 2028 HSC |
| New Chemistry cohort | Chemistry 11–12 (2025) | Year 11 Term 1 2028; Year 12 Term 4 2028; first HSC 2029 |

Verified against live NESA implementation pages on 29 September 2026: [Biology](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content), [Chemistry](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/content). Chemistry should not be relabelled as new-syllabus content merely because Biology is new.

## Important Chemistry corrections

| Area | Correction |
|---|---|
| Water calculations | WHO nitrate example: 50 mg/L, not 500 mg/L; arsenic ADWG: 0.01 mg/L, not 0.10; 0.125 mg/L is 12.5 times the arsenic guideline |
| Definitions and phase changes | Current SI mole fixes exactly 6.02214076 × 10²³ entities; CO₂ sublimes at 1 atm; a boiling plateau alone does not prove purity |
| Equilibrium/thermodynamics | Distinguish ΔG° from actual ΔG; large K does not establish simple relative concentrations or fundamental irreversibility; small-x acceptance checks x/initial concentration |
| Titrations | Read pH at the stoichiometric equivalence volume; do not average jump pH limits. Shared curve diagram now computes its actual equilibrium pH |
| Organic identification | Retain ambiguity between primary C4 alcohol/aldehyde isomers; state candidate sets and test conditions; remove extra-H reverse-polymer step |
| Medicine enrichment | Remove unsupported aspirin safety/pharmacophore guarantees, good-R/bad-S thalidomide simplification and codeine wholly-inactive claim; correct Lipinski boundaries |
| Environmental analysis | Restrict E. coli versus total-coliform interpretation; remove universal BOD bands and invented blooms/fish deaths; distinguish primary disinfection from distribution residual |

Precise affected lessons, original problems and source links are in [Chemistry findings](chemistry-content-findings-2026-09-30.json). The records are issue groupings, not 71 separate failing videos; several findings affect more than one lesson.

## Course coverage still outstanding

These are curriculum-completion work, not errors that can be fixed by relabelling an existing script.

| Requirement | Existing evidence and remaining work |
|---|---|
| 2017 M8 organic structural analysis | No dedicated proton/¹³C NMR, IR or mass-spectrometry teaching or interpretation practice identified. A passing mention of a mass spectrometer is not coverage. Author these lessons before describing the course as complete. |
| 2017 M8 precipitation titrations | Acid–base titrations and gravimetric precipitation exist, but do not teach the required precipitation-titration method. Add dedicated method/data practice. |
| 2017 M8 inorganic ion set | Flame/precipitation lessons sample the required ions. Audit a complete ion-by-method matrix, including confirmatory controls; current sampled examples do not prove full coverage. |
| Medicine and water contexts | M8 L11–14 are explicitly labelled enrichment. Other M8 mappings now use honest audit paraphrases. They must not displace mandated organic-analysis content. M8 L16 is polymer revision from M7. |
| New 2025 Chemistry Year 11 | Existing files remain 2017 modules. Live new content explicitly includes VSEPR, radioisotope/radiation/half-life and balanced nuclear-equation applications, and PV=nRT. Existing gas-law ratios and isotope mentions are insufficient evidence of these requirements. A new focus-area mapping and missing lessons are required for the 2028 cohort. |
| Working scientifically / practical work | A video library does not itself prove practical hours, depth studies or complete skills coverage. The earlier Biology Working scientifically mapping remains a course-programme follow-up. |

Sources: [official 2017 syllabus and downloadable DOCX](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017); live new Chemistry focus areas [matter](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/content/year-11/fa3318146f), [quantitative](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/content/year-11/faf0876f2f), [reactions](https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/content/year-11/fa4c5f59fc). The local 2017 DOCX paragraphs were inspected directly. Embedded MathML in the live new syllabus was inspected as well; the repository's text extraction alone loses some equations.

## Validation and render handoff

- `npm run check:all`: registry generation, TypeScript and lesson validation pass for all 308 files, with existing/provisional timing and presentation warnings. This check does not validate scientific accuracy or actual layout.
- Independent arithmetic spot checks: arsenic ratio 12.5; nitrate 8.064 × 10⁻⁴ mol/L at 50 mg/L; titration 0.08933 mol/L; supplied Ca(H₂PO₄)₂ masses 234.044 g/mol; exact PCl₅ x 0.12414 mol/L; acetate equivalence pH 8.7195; bicarbonate back-titration 0.68552 g.
- No complete rendered/audio QA: ignored media assets are absent from this checkout and a browser could not be provisioned for Remotion. Final layout, diagram beats, pronunciation, audio tail room and word-caption alignment remain unverified.
- Run the included read-only `scripts/check-render-readiness.mjs` on the production machine containing the real audio/assets. Use [audio handoff](content-corrections-audio-handoff-2026-09-30.json) to regenerate only changed scenes after final script review, then sync captions/reveals, fit durations and inspect rendered samples from each changed lesson.

## Consolidated review change

This change includes the earlier pre-audio fixes and independent-audit documents from draft PRs #36/#37 plus the current content corrections and Chemistry audit. Review this consolidated change against main; do not merge overlapping PRs independently. Nothing is merged, deployed, rendered or published as final video.

The historical audit files remain as the original evidence. [Correction manifest](content-corrections-manifest-2026-09-30.json) records the implementation of those 28 findings; [Chemistry ledger](chemistry-content-audit-ledger-2026-09-30.json) records every reviewed Chemistry file and exact reviewed hash.
