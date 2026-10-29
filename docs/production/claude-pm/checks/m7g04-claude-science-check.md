# m7g04 science check: polymer practice

Independent Codex review, 28 October 2026, Revision 1. Checked narration, planned visuals, attempts, feedback, notes, number list and metadata. Formulas recalculated independently. No audio or playback approval.

## Dotpoint check

The addition stem, PE/PVC/PS/PTFE examples and ACSCH136, and the condensation stem with nylon/polyesters, match official Chemistry 2017 DOCX and programme JSON. Extracted official text is in `../assets/brief109-qa/chem-syllabus-source.txt`.

## Findings

| # | Severity | Claim | Error and repair |
| --- | --- | --- | --- |
| 1 | should fix | 5b: "their chains are the same length, with similar dispersion forces" | Equal repeat-unit carbon skeleton does not fix whole-chain length or degree of polymerisation. Say "Their repeat units have the same carbon skeleton, so this is a useful comparison of their links." Do not assert exact equality of dispersion contributions. |
| 2 | should fix | 4c: "That's an ester link in the chain, so Y is a condensation polymer"; 4d: "Only links in the backbone make a condensation polymer." | Structure identifies a polyester, not necessarily the route. Commercial PLA commonly uses lactide ring opening. Supply direct hydroxy-acid condensation as a Q3 given, then classify that stated route. |
| 3 | should fix | 6/notes: "If it's all carbon, it's addition"; "Condensation: water lost" | Restrict to the alkene and acid routes practised. General condensation loses a small molecule, not necessarily water. |
| 4 | optional | Q4 polyester melting "about 60 C" | Primary Stepan product with matching CAS reports 54 C. This supports the contrast, but not a universal 60 C value. Keep 60 C as a given illustrative specimen value or name its grade/source. |

Zero blockers, three should-fix findings, one optional.

## Structures and numbers checked

| Item | Independent result |
| --- | --- |
| Q1 PB-1 | [CH2-CH(CH2CH3)] is C4H8. Three units: six backbone carbons, three ethyl groups, C12H24 continuing segment. All carbon valences four. Hot/cold water pipe use confirmed by manufacturer. |
| Q2 PTT | C3H8O2 + C8H6O4 minus 2H2O = C11H10O4. Propane-1,3-diol and terephthalic acid correct. Two ester links per repeat; three complete internal ester links in the drawn two-unit segment with its boundaries. Carpet use confirmed by Sorona. |
| Q3 PMMA | Monomer CH2=C(CH3)COOCH3 and repeat both C5H8O2. Ester is pendant. Substituted alkene carbon has total bond order 2+1+1=4. Restore C=C without adding H. |
| Q3 PLA | Lactic acid C3H6O3 minus H2O gives C3H4O2. HO-CH(CH3)-COOH is a valid direct-condensation precursor, not proof of actual commercial synthesis. |
| Q4 nylon 6,6 | C12H22N2O2; NH donor to carbonyl acceptor hydrogen bonds. BASF lists grades at 260 and 265 C. |
| Q4 polyester P | C6H14O2 + C6H10O4 minus 2H2O = C12H20O4. Same carbon skeleton per repeat; O replaces NH. No repeat-unit OH/NH donor. Stepan CAS 25212-06-0 DSC melting point 54 C. |

Melting separates/slides chains, not breaking backbone ester or amide links. Both polymers have dispersion and dipolar interactions. Hydrogen bonding gives an important qualitative reason for the contrast; crystallinity and packing also matter, so the answer is not a quantitative prediction of 205 C difference.

## Site findings and limits

L22's "Identifying Linkage Type at a Glance" should distinguish backbone links from pendant groups such as PMMA's ester. This is a clarification, not evidence that the page explicitly calls every ester-bearing polymer a polyester. Other C15/C14 errors should not be duplicated.

Narration recount: 5,620 characters; zero U+2014. Local L21 to L23 examples differ in compounds/demands from these questions. Cached 2019 to 2025 Chemistry/Biology exam text was searched, hits retained in `../assets/brief109-qa/exam-text-hits.txt`. Closest Chemistry 2024 Q22 asks for a six-carbon section of vinyl-fluoride polymer, while this Q1 uses but-1-ene, three repeat units and circling. Chemistry 2025 Q28 compares Kevlar/polystyrene mechanical properties, while this Q4 compares nylon/polyester melting with matching carbon skeletons. These share standard syllabus skills, not the same wording, structures or demands. Full diagram-only-page comparison was not completed, so originality is not certified.

## Sources checked

- [Official Chemistry 2017 syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx), [IUPAC classification](https://iupac.org/recommendation/basic-classification-and-definitions-of-polymerization-reactions/).
- [PB-1 pipe manufacturer](https://www.lyondellbasell.com/globalassets/lyb/our-solutions/products/documents/polymers-technical-literature/pb-1-pipe-brochure.pdf), [PTT carpet manufacturer](https://d3faarr9c46ps7.cloudfront.net/carpet).
- [NatureWorks PLA route](https://natureworksllc.com/technologies-and-products/ingeo-technology), [BASF PA66](https://chemicals.basf.com/north-america/en/Monomers/polyamides-and-precursors/products/ultramid-polyamides/ultramid-a-pa66), [Stepan CAS 25212-06-0 product](https://www.stepan.com/content/dam/stepan-dot-com/webdam/website-product-documents/product-bulletins/polymers/STEPANPOLPC205P20.pdf).

## Resolution

Resolved in `../lessons/chem-m7-g04.md` Revision 2 (30 Oct; root resolver, Claude PM). Merged with the learning review where they overlap.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (merged with learning 1) | "Same carbon skeleton, a fair comparison of their links"; no exact-equality or dispersion claim. |
| 2 | Fixed (merged with learning 2) | The direct hydroxy-acid route is supplied as a Q3 given and the classification uses the stated route. Q3's numbers entry already records lactic acid as a valid direct precursor. |
| 3 | Fixed (merged with learning 3) | Rule restricted to the alkene and acid examples practised; "a small molecule lost (water, for these acid routes)". |
| 4 | Fixed | The card keeps 60 degrees as "a given value for this question"; the author note and Codex brief record reported values of about 54 to 60 degrees. No change to the narrated number. |
