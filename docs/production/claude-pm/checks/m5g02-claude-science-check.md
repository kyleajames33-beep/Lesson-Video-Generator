# m5g02 science check: Revision 5

Reviewer: independent AI reviewer, 1 November 2026. Did not author the design.

Read every narration line, question stem, Visual paragraph, attempt and answer, key note, number, memory-aid assumption and YouTube metadata in `../lessons/chem-m5-g02.md`, Revision 5 (SHA256 `14d2542dbaa87198fa7dad510c4fdf57c8579aeba0708daefd98fd1078bdd3fe`). Compared the retained narration with Revision 4 at `ef0ef77` and both resolved checks (`g02-check.md`, `g02-claude-science-check.md`). No design changes, speech or renders. This is source and arithmetic review, not playback or human listening approval.

## Findings

| # | Severity | Where and exact text | Error | Concrete repair and source |
| --- | --- | --- | --- | --- |
| 1 | should fix | q3-mistake, new narration: "with no reaction there's no heat change". New green chip: "no reaction, no heat change". | At dynamic equilibrium the forward and reverse reactions continue. No shift means no net reaction, not no reaction. This is a new scientific change in the linking correction, despite the Revision 5 summary saying no new science fact. | Final spoken sentence: "Pressure alone is not a disturbance here: no net reaction, no net heat change." Green chip: "no net reaction, no net heat change". Shorter than the current sentence. [OpenStax Chemistry 2e, 13.1](https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria) explains that reactions continue at equal rates. |

**Count: 0 blockers, 1 should fix, 0 optional.** Learning finding 1 is the same defect. The unexplained equal-gas-count tag is reported in the learning review, not counted again here.

## Revision comparison

The retained q1-chain, q1-mistake, q2-squeeze, q2-response, try1-question, try1-answer, try2-question, try2-answer and key-notes narration match Revision 4 after bold formatting is removed. q2-amount and q2-mistake split the old amount scene, with the new axis-first link. The hook, type labels, q1 underlining instruction, q2 question wording and shortened decision board change as described. q3-question moves its family sentence to q3-test and removes equal gas count. q3-mistake speaks the old crossed slips and adds the corrections; finding 1 concerns the new correction. The six removed scene IDs are all accounted for: 4a, 4b, 6a, 6b, 6c, 6d. Their destination is the settled G02b route decision in brief 127; no G02b review was attempted.

The old resolved corrections remain: one-species jumps are distinguished from volume jumps; the NO2 end level is separately named; argon wording does not invent NO2/N2O4 collisions; try1 line 5 distinguishes N2 falling from its jump and H2 falling from its original value; q2's K values are tagged made-up. Parked industrial and open-system material is outside this revision's learner script.

## Arithmetic, recomputed from unrounded values

| Quantity | Independent result |
| --- | --- |
| Initial K | 0.300/(0.200^2) = 7.50 |
| Half-volume immediate concentrations and Q | 0.400, 0.600 mol/L; 0.600/(0.400^2) = 3.75 < K |
| Quadratic | 30x^2 - 13x + 0.600 = 0; physical x = (13 - sqrt(97))/60 = 0.0525190366 mol/L. Other root makes [NO2] negative. |
| New concentrations | 0.294961927 and 0.652519037 mol/L; Q = 7.500000000 |
| Changes | NO2 falls 0.105038073 mol/L; N2O4 rises 0.052519037 mol/L, exactly 2:1 |
| New amounts in 0.500 L | 0.147480963 and 0.326259518 mol; changes 0.052519037 and 0.026259518 mol, exactly 2:1. The displayed 0.147 and 0.326 are correct to three decimals. |
| Nitrogen atoms | 0.200 + 2(0.300) = 0.800 mol initially; 0.147480963 + 2(0.326259518) = 0.800 mol finally |
| Argon made-up rate dials | 0.5(8^2) = 32; 8(4) = 32 |
| Ammonia compression | Q scales by 2^2/(2 x 2^3) = 1/4. N2 and H2 fall 1:3 and NH3 rises 2. |
| Timing estimate | 5950/13.3 + 36 + 9 + 20 + 55 = 567.368 s, not a measured duration |

All retained calculations pass. For completeness the parked arithmetic also remains correct: 120 - 63 = +57 kJ/mol; the equal-gas-count factor 4/(2 x 2) = 1; SO2/O2/SO3 gas count 3:2; CaCO3/CaO/CO2 expression K = [CO2] while both solids are present. This does not approve the unbuilt G02b lesson.

## Sentence and question checks

q1's product removal decreases the reverse rate first; forward then exceeds reverse, making CO rise relative to the first equilibrium. try1's reactant injection raises the forward rate first and consumes H2. q2's squeeze changes concentrations instantaneously without changing amounts, followed by the stoichiometric response. q3's inert gas at fixed volume leaves reacting partial pressures and concentrations unchanged in the school ideal-gas treatment; the same-temperature, insulated setup prevents attributing a temperature increase simply to a higher total pressure. Catalyst and added pure solid are valid no-shift recalls from C4b and C5. The Q = K criterion is valid at steady temperature. These checks agree with [OpenStax Chemistry 2e, 13.3](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle) and the pure-phase rule in [OpenStax, chapter 13 summary](https://openstax.org/books/chemistry-atoms-first/pages/13-summary).

All five full question cards carry the equation, relevant amounts and conditions and their complete demands. q2 includes 0.200 mol, 0.300 mol, 1.00 L, volume halving and constant temperature. q3 includes rigid, insulated and argon at the mixture's temperature. try1 includes rigid and unchanged temperature. try2 includes temperature kept constant throughout. All cards inherit the explicit HSCScience-authored label. No question added since the earlier near-match check is claimed as a NESA question. The proposed title is 96 characters. Australian spellings are retained. No U+2014 occurs anywhere in the design.

## Syllabus quotation check

Downloaded the official [NESA Chemistry 2017 syllabus Word file](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx) read-only on 1 November 2026. Compared the extracted Word paragraphs directly with the UTF-8 local JSON and both appearances of each quote in the design (opening and metadata). All three are exact:

| Local ID | Check |
| --- | --- |
| C5-IQ1-04 | Collision theory and reaction-rate quotation, including ACSCH070 and ACSCH094: exact. |
| C5-IQ2-02 | Overall observations in terms of collision theory, including ACSCH094: exact. |
| C5-IQ2-01 | Temperature, concentration, volume and/or pressure stem ending "for example:": exact, including U+2019 in Le Chatelier’s. The listed examples remain outside the quoted stem. |

The official [course page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017) identifies the 2017 syllabus. The design correctly treats these as practice of earlier teaching, not first coverage. The source does not claim industrial or open-system coverage in this revision. No G02 site correction was found.

## Resolution

## Resolution (root, 1 November 2026)

| Finding | Action | Where |
|---|---|---|
| 1 | Fixed with learning item 1 | q3-mistake |
