# m8c10 claude science check

Independent AI reviewer, 30 October 2026. Input: `../lessons/chem-m8-c10.md`, Revision 1. Inspected written narration and shot plans, not a built lesson, stills or continuous voiced preview. Narration recounted from `> ` lines with bold markers removed: 6,293 characters; 20 narrated headings; no U+2014. Per-scene counts: `../assets/brief120-source-audit.json`. Human listening and learner testing are pending. Motion and caption fit cannot pass from a design document.

Main learner question: How can IR distinguish the remaining functional-group candidates?

## Findings

1. **should fix, scene 10.** Tertiary amines have no N-H bond. Replace "Amines" with "Primary and secondary amines". The two stretching bands are characteristic of the primary amine here, not all amines.
2. **should fix, scene 12 and notes.** The universal carbonyl exclusion is false outside the candidate set. Restrict the claim as in learning finding 1.
3. **blocker, spectrum data package.** The required ten measured liquid-phase traces and per-band centre/depth/width comparison are incomplete: three are delivered and seven remain uncertified, as detailed below. The memory-based depths cannot be passed as measurements. NIST ethanol Index 3, Coblentz 10139, was retrieved and explicitly identifies a 10% solution in CCl4/CS2, not a neat liquid film. It cannot silently validate the proposed hydrogen-bonded film O-H band. Ethanol SDBS 1300 identifies liquid-film record SDBS-IR2011-88120TK, but its curve has not been digitised. Complete the partial `assets/m8c10-ir-bands.json` after checking actual phase and path length; do not fabricate %T values or treat ATR and transmission depths as interchangeable.
4. **should fix, visual in scene 5.** The official data-sheet ranges were checked and match. The actual 2024 exam IR axis uses equal spacing per 500 cm^-1. Replace the proposed mandatory scale change at 2000 with a linear axis; evidence is linked below.

5. **should fix, compound inventory.** The design repeatedly says eleven traces but lists ten compounds. Correct every repeated count to ten. This is separate from the unfinished measurement gate.
6. **should fix, measured trace depths.** Replace the memory-based depths for the three measured neat-liquid spectra with the supplied actual curves. Several differences exceed 15 percentage points, including cyclohexane 1455, tert-butanol 1361.7, and butan-1-ol 1460.6, 1373.8 and 944.5 cm^-1. Retain the measured missing deep features rather than choosing only the proposed troughs. Exact values and source records are below and in the partial JSON.

## Sources and unfinished verification

[AIST ethanol record](https://sdbs.db.aist.go.jp/CompoundLanding.aspx?sdbsno=1300), accessed 30 October 2026. [NIST ethanol solution record](https://webbook.nist.gov/cgi/cbook.cgi?JCAMP=C64175&Index=3&Type=IR). The initial ethanol records did not establish a neat-film curve. The later three measured neat-liquid records are explicitly identified below.

## Official syllabus wording check

The exact 2017 syllabus DOCX was downloaded from NESA on 30 October 2026 and its paragraph text inspected. The dotpoint text and relevant examples quoted in this design match the official wording after Markdown bullet and whitespace normalisation. Local transcripts are `../assets/brief120-chem-official-syllabus.txt` and `brief120-bio-official-syllabus.txt`. Primary downloads: [Chemistry](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx), [Biology](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx). This checks wording, not whether the finished lesson earns coverage.

## Official data-sheet check

The actual 2024 HSC Chemistry PDF, data-sheet page 2 (PDF page 42), was rendered and inspected. All nine IR ranges and ten carbon-13 ranges printed in the design match that table, including alcohol OH3230 to3550, acid OH2500 to3000 and acid/ester carbon160 to185. This resolves the pending range-table verification above. QA image: `../assets/brief120-qa/exam-page-42.png`. The 2024 question4 IR axis uses equal spacing per500cm^-1 across3500 to500, so C10 should use a linear axis, rather than the proposed mandatory scale change at2000. Question image: `../assets/brief120-qa/exam-page-3.png`. [Official exam PDF](https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2024-hsc-chemistry.pdf).

## Further measured IR check

Three actual neat-liquid NIST transmission curves are now downloaded and traced: cyclohexane Coblentz6045, tert-butanol6880 and butan-1-ol6915. The partial package is `../assets/m8c10-ir-bands.json`; exact point CSVs and source JCAMP files are in `../assets/brief120-nist/`. Several draft depths differ by more than15 percentage points: cyclohexane1455 measured46.88%T; tert-butanol1361.7 measured16.25%T; butan-1-ol1460.6 measured26.83%T,1373.8 measured32.5%T and944.5 measured33.8%T. Missing deep features are also listed. All three main narrated OH/CO band centres remain within15cm^-1 of the proposed values. Correct the repeated eleven-trace count to ten compounds. Seven compounds remain uncertified; some liquid indexes are dispersion-index data and later requests returned429. This partially resolves finding3, not a full package pass.

## Resolution

Resolved in `../lessons/chem-m8-c10.md` Revision 2 (31 Oct; root resolver, Claude PM), except science blocker 3, which stays open as a build gate (data, not design). Recount by script (sum of "> " lines per scene, bold markers removed): 6,312 characters (Revision 1: 6,293), about 568 s, under the 570 s cap; the scene 4 reserve trim is the named cut if the voiced take runs long.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (counted in the learning review) | See learning finding 2. Author note (f) now gives the tertiary amine exception. |
| 2 | Fixed (counted in the learning review) | See learning finding 1. |
| 3 | Open (blocker; partly fixed) | Three measured neat-liquid records (cyclohexane, 2-methylpropan-2-ol, butan-1-ol) replace the remembered values. The other seven compounds are marked "provisional" in Numbers to verify and must not be drawn until a measured liquid-phase record of the same phase and method is supplied; the ethanol CCl₄/CS₂ solution record is not used. Codex asset brief item 3 is rewritten to name the seven missing records (**asset brief changed**). Open for the Codex error check. |
| 4 | Fixed (as proposed) | The IR trace part now specifies a linear axis (equal spacing per 500 cm⁻¹), as on the 2024 paper; author note (b) and error-check item 4 updated. |
| 5 | Fixed | "eleven" corrected to ten in Assets, the asset brief and Open decisions. |
| 6 | Fixed (as supplied) | Numbers to verify now gives the measured centres and actual %T for cyclohexane (Coblentz 6045), 2-methylpropan-2-ol (6880) and butan-1-ol (6915), including the missing deep features (for example 1235 and 909 for 2-methylpropan-2-ol; 1427, 1106 and 1004 for butan-1-ol). The draw rule is the point CSVs. Narrated values (3370, 1200, card 3330 and 1070) stay within 15 cm⁻¹. |

Open for the Codex error check: measured traces for ethanol, ethanoic acid, propanone, propan-1-amine, propan-1-ol, propan-2-ol and ethyl ethanoate. Consistency with C09, C11a and C11b: compounds shared across the set (ethanol, the propanols, ethyl ethanoate, butan-1-ol) carry no conflicting values.
