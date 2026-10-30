# m8c11a claude science check

Independent AI reviewer, 30 October 2026. Input: `../lessons/chem-m8-c11a.md`, Revision 1. Inspected written narration and shot plans, not a built lesson, stills or continuous voiced preview. Narration recounted from `> ` lines with bold markers removed: 5,753 characters; 17 narrated headings; no U+2014. Per-scene counts: `../assets/brief120-source-audit.json`. Human listening and learner testing are pending. Motion and caption fit cannot pass from a design document.

Main learner question: How can carbon environments and shifts distinguish isomers?

## Findings

1. **should fix, scene 11.** Electronegativity alone does not explain all chemical shifts; the displayed alkene/aromatic rows already refute the absolute memory line. Use the replacement in learning finding 1.
2. **should fix, scene 2.** In an ordinary field, the spin population difference is tiny. "Most pointing with the field, some against" should be drawn nearly balanced, with only a small excess in the lower state. Do not use a conspicuous majority as a population model.
3. **blocker, numerical spectrum verification.** Actual SDBS carbon spectra and assignments have not all been inspected. Proposed one-decimal shifts must remain provisional until solvent and accession are recorded for each compound. Environment counts were independently reconstructed: ethanol 2; propan-1-ol 3; propan-2-ol 2; butanone 4; pentan-3-one 3; ethyl ethanoate 4; tert-butanol 2; butan-1-ol 4; butan-2-ol 4; isobutanol 3; methyl ethanoate 3; propanoic acid 3. Both candidate deductions work by count and the O-bound-carbon contrast. The official data-sheet ranges still require direct exam-table comparison.

## Sources and unfinished verification

[AIST ethanol SDBS 1300](https://sdbs.db.aist.go.jp/CompoundLanding.aspx?sdbsno=1300) lists several carbon spectra, including SDBS-NMR-CDS-00-245. The [original solvent-impurity study table hosted by UCSB](https://nmr.chem.ucsb.edu/docs/NMR_Impurities.pdf) supports ethanol values near 58 and 18 but also demonstrates solvent dependence. Other exact shifts remain unverified.

## Official syllabus wording check

The exact 2017 syllabus DOCX was downloaded from NESA on 30 October 2026 and its paragraph text inspected. The dotpoint text and relevant examples quoted in this design match the official wording after Markdown bullet and whitespace normalisation. Local transcripts are `../assets/brief120-chem-official-syllabus.txt` and `brief120-bio-official-syllabus.txt`. Primary downloads: [Chemistry](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx), [Biology](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx). This checks wording, not whether the finished lesson earns coverage.

## Official data-sheet check

The actual 2024 HSC Chemistry PDF, data-sheet page 2 (PDF page 42), was rendered and inspected. All nine IR ranges and ten carbon-13 ranges printed in the design match that table, including alcohol OH3230 to3550, acid OH2500 to3000 and acid/ester carbon160 to185. This resolves the pending range-table verification above. QA image: `../assets/brief120-qa/exam-page-42.png`. The 2024 question4 IR axis uses equal spacing per500cm^-1 across3500 to500, so C10 should use a linear axis, rather than the proposed mandatory scale change at2000. Question image: `../assets/brief120-qa/exam-page-3.png`. [Official exam PDF](https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2024-hsc-chemistry.pdf).

## Resolution

Resolved in `../lessons/chem-m8-c11a.md` Revision 2 (31 Oct; root resolver, Claude PM), except science blocker 3, which stays open as a build gate (data, not design). Recount by script (sum of "> " lines per scene, bold markers removed): 5,740 characters (Revision 1: 5,753), about 523 s.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (counted in the learning review) | See learning finding 1. The memory aid check records why the bank line was replaced; root to flag the bank entry. |
| 2 | Fixed (as proposed) | Scene 2's arrows settle nearly half and half, one more with the field, with a grey tag "only a tiny excess with the field". The narration ("line up either with the field or against it") makes no majority claim. |
| 3 | Open (blocker; partly fixed) | The confirmed environment counts and the data sheet match (2024 paper, page 42) are recorded under Numbers to verify. Every shift is now marked provisional, with a build gate: no spectrum is drawn and no shift voiced until each compound has an inspected database record with accession and solvent, and any value more than 1 ppm off changes. Open for the Codex error check. |

Consistency with C09, C10 and C11b: the propanols, ethanol and ethyl ethanoate carry no conflicting carbon data across the set; the sample tube plate is shared with C11b unchanged.
