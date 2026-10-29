# m7c15 science check: condensation polymers

Independent Codex review, 28 October 2026, of Revision 1. Checked narration, planned screen text, attempts, feedback, notes, numbers and metadata. Formula checks below are independent derivations. No design edits, audio or playback. This source review is not recording or release approval.

## Dotpoint check

The condensation-polymer stem and nylon/polyesters examples match the programme JSON and official Chemistry 2017 DOCX, downloaded and extracted to `../assets/brief109-qa/chem-syllabus-source.txt`. The local C7 code is correctly described as a project code. Metadata repeats the correct content.

## Findings

| # | Severity | Claim | Error and repair |
| --- | --- | --- | --- |
| 1 | should fix | Scene 7: "Condensation releases water at every link, so the repeat unit is the monomers minus two waters." Mnemonic: "Condensation: water lost." | Valid for the displayed paired acid routes, not all condensations or a single hydroxy acid. Say "For these acid and diol or diamine pairs, one of each monomer minus two waters gives the repeat-unit formula." Use "a small molecule lost" generally. The author note correctly identifies HCl and methanol alternatives. |
| 2 | should fix | Scene 2: "neither end has anything left to react" | Esters remain reactive to hydrolysis/transesterification. Say "it has no spare alcohol or carboxyl group to keep building this chain". |
| 3 | should fix | Scene 9: "PET has no N H, so its chains can't hydrogen bond to each other." | Absence of NH alone is insufficient because OH also donates. Say "PET's repeat unit has no O H or N H donor, so these chains don't hydrogen bond to each other." Terminal groups need no learner aside. |
| 4 | should fix | Numbers/equations table: two monomers → bracketed n repeat units, without n reactants or small-molecule products | Structure summaries are not balanced equations. Label the column "monomers and repeat unit" and remove its reaction arrow, or write an exact balanced equation with explicit end groups. The separate formula tallies are correct. |

Zero blockers, four should-fix findings.

## Formulas, counts and properties checked

| Item | Independent result |
| --- | --- |
| PET | C2H6O2 + C8H6O4 minus 2H2O = C10H8O4. Ethane-1,2-diol and para-benzene-1,4-dicarboxylic acid give the correct repeat. |
| Nylon 6,6 | C6H16N2 + C6H10O4 minus 2H2O = C12H22N2O2. Six carbons in each monomer. |
| Recovery example | C8H12O4 repeat gives ethane-1,2-diol and hexanedioic acid. Four CH2 plus two carbonyl carbons = six. |
| PBS attempt | C4H10O2 + C4H6O4 minus 2H2O = C8H12O4. Ester link/water answer and continuation bonds correct. |
| Nylon 6,10 attempt | C6H16N2 + C10H18O4 minus 2H2O = C16H30N2O2. Acid has 8+2=10 carbons; octanedioic is correctly crossed out. |
| Finite chain | Joining 2n initially separate molecules into one non-cyclic chain makes 2n-1 intermolecular joins. One hydroxy acid instead makes n-1 joins. The ideal-repeat convention uses 2n or n waters while omitting end-group corrections. Do not mix conventions in an exact equation. |
| Melting values | BASF lists PA66 grades at 260 and 265 C and PA610 at 222 C. PET 250 to 260 C and HDPE 125 to 135 C are plausible ranges, but exact grade-specific primary thermal data were not retrieved here. These are not certified handbook values. |

All listed monomer formulas recompute correctly: diol C2H6O2; terephthalic acid C8H6O4; diamine C6H16N2; adipic acid C6H10O4; butane diol C4H10O2; succinic acid C4H6O4; sebacic acid C10H18O4; octanedioic acid C8H14O4. Nylon's interchain bond is N-H to carbonyl oxygen. Melting does not cleave the amide backbone. Ring rigidity and polar ester groups are valid PET property explanations, but do not alone quantitatively determine melting point. Hydrolysis is generally slow at ordinary conditions without suitable catalysis.

## Logged site findings

Read-only L21 to L23 HTML passages inspected.

| Author item | Verdict |
| --- | --- |
| L22 "H₂O is always released" | Confirm error: HCl is an alternative by-product. |
| Hydroxy-acid equation nH2O | Conditional: valid ideal-repeat convention, inconsistent if intended as exact finite-chain count. Correct end groups/count convention instead of declaring n universally wrong. |
| Shirt "absorb it" | Confirm clarity correction: liquid can wick along fibre channels while PET absorbs little. Not every polyester fabric necessarily wicks well. |
| Intrachain amide bond as melting reason | Confirm; already logged, no duplicate. |
| Nylon "amide (peptide) bonds" | Confirm terminology repair: use amide; peptide refers to links between amino-acid residues. |
| Thermosets primarily relevant to condensation | Confirm misleading scope claim: crosslinking determines thermoset behaviour; vulcanised addition-polymer rubber is a counterexample. |
| L23 key 5-B | Rendered Chrome check confirms embedded resin-code correct answer A. Practice now shows five random bank questions while Show All Answers still prints a fixed positional key. In this run fifth question was UHMWPE, correct C. Remove the stale static key, rather than only changing 5-B to 5-A. |

Narration independently recounted: 5,842 characters; zero U+2014. No title-length objection. Cached 2019 to 2025 Chemistry/Biology exam text was keyword-searched, with hits saved in `../assets/brief109-qa/exam-text-hits.txt`. No close copied wording found in inspected matches. A full visual comparison of every diagram-only page was not completed, so originality is not certified.

## Sources checked

- [Official Chemistry 2017 syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx).
- [ACS PET structure, monomers and uses](https://www.acs.org/molecule-of-the-week/archive/p/poly-ethylene-terephthalate.html), [RSC nylon chemistry](https://books.rsc.org/books/monograph/662/chapter/356886/Polymer-Chemistry), [RSC alternative by-product](https://edu.rsc.org/download?ac=509326).
- [BASF PA66 grades](https://chemicals.basf.com/north-america/en/Monomers/polyamides-and-precursors/products/ultramid-polyamides/ultramid-a-pa66), [BASF PA610](https://assets.ctfassets.net/irfkf2jox8z4/30uRvEcViVxD2KcW1YdgZ5/c264274b726a915364502168f3e4fe10/BASF_Ultramid_Sell_Sheet__6.25.25_.pdf).
- [Manufacturer wicking explanation](https://www.coolmax.com/en/frequently-asked-questions-coolmax/about-coolmax-technology), [IUPAC classification](https://iupac.org/recommendation/basic-classification-and-definitions-of-polymerization-reactions/).

## Resolution

Resolved in `../lessons/chem-m7-c15.md` Revision 2 (30 Oct; root resolver, Claude PM). Merged with the learning review where they overlap.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (merged with learning 1) | Scene 7 scoped to "these pairs" (one of each monomer minus two waters); general statement is "a small molecule at every link, here water"; memory line reworded to "a small molecule lost". |
| 2 | Fixed (merged with learning 2) | "no spare alcohol or carboxyl group to keep building this chain". |
| 3 | Fixed (merged with learning 3) | "PET's repeat unit has no O H or N H to donate hydrogen bonds". Terminal groups need no learner aside. |
| 4 | Fixed | Numbers table column renamed "Monomers and repeat unit" and all monomer-to-polymer and recovery arrows removed; key note 2 reworded without an arrow or "+ water"; the water-count tag and verify list state the two conventions and say not to mix them. |
