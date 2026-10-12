# C7 science check (Claude): industrial equilibrium, Haber (revision 3)

Format: brief 03 (`codex-prompts/03-fact-check-template.md`), errors only. Scope: the design's Numbers to verify, the narration, key notes and aid. Checked 13 October 2026 with web sources and a recomputation of the ideal-gas ceilings. No stills were available, so screen items are out of scope.

## Findings

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science (minor, UNVERIFIED) | Scene 6 "only about a fifth of the gas leaving the reactor is ammonia"; Numbers to verify "15 to 25 percent per pass" | Public sources (Chemguide, Wikipedia) quote about 15% single-pass conversion of N2 and H2, not 15 to 25. A 15% conversion of the reactants leaves about 8% ammonia in the gas, so that figure and "a fifth of the gas is ammonia" are different measures. Outlet ammonia of roughly 15 to 20 mol% is typical in engineering references, but I did not retrieve one. | Keep "about a fifth of the leaving gas" as UNVERIFIED pending an engineering source, or say "less than a quarter of the gas leaving". Do not call it "single-pass conversion" in learner copy. |
| 2 | science (minor, UNVERIFIED) | Scene 4 "Without iron the plant would need a much hotter reactor" | Directionally supported by the C4b check (uncatalysed N2 + H2 is negligibly slow where ammonia is favoured). No source found here for a needed temperature; the video gives none. | None; do not add a number. |
| 3 | science (minor, UNVERIFIED) | Numbers to verify, 450 C and 600 C ceilings | No published table found for 450 C and 600 C at 200 atm. Values follow from verified anchors (see below). | Keep "illustrative, about"; no change. |

Count: 3 findings, none blocking, all UNVERIFIED rather than shown wrong.

## Claims verified

| Claim | Result | Source |
| --- | --- | --- |
| N2 + 3H2 ⇌ 2NH3, ΔH about -92 kJ per mole of equation | Confirmed: -92.28 kJ per mole of N2 (Wikipedia); NIST CODATA formation enthalpy of NH3(g) -45.94 kJ/mol gives -91.9; textbook -92.4 | [NIST ammonia](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7664417&Units=SI&Mask=1), [Wikipedia Haber process](https://en.wikipedia.org/wiki/Haber_process) |
| Ceilings at 200 atm, 1 : 3 feed: about 60, 25, 9 percent NH3 at 300, 450, 600 C | Recomputed (ideal gas, constant ΔH -92.4, Kp 1.45 x 10^-5 atm^-2 at 500 C): 300 C 56.8 (61.9 using Kp 4.3 x 10^-3), 450 C 23.7, 500 C 17.0, 600 C 9.0. An independent exam data table gives 65 at 300 C and 18 at 500 C at 200 atm. Wikipedia Kp 434 x 10^-5 at 300 C and 0.225 x 10^-5 at 600 C match the corrected values. "About 60, 25, 9" with the "illustrative" label is fair. | [Save My Exams data](https://www.savemyexams.com/igcse/chemistry/cie/23/topic-questions/6-chemical-reactions/6-2-reversible-reactions-and-equilibrium/theory-questions/), recomputation |
| Pressure shape (450 C: 50 atm 8.5, 100 14.8, 200 23.7, 400 34.7, 1000 50.3) | Reproduced; gain per atmosphere falls, so "less extra ammonia each step" is correct | recomputation |
| Typical conditions about 400 to 450 C, about 200 atm, iron catalyst | Confirmed; Wikipedia also gives 150 to 250 bar and 60 to 180 bar loops depending on process; "about" covers it | [Chemguide](https://chemguide.co.uk/physical/equilibria/haber.html), [Wikipedia](https://en.wikipedia.org/wiki/Haber_process) |
| Single pass about 15%, recycling to over 95% overall | Confirmed (overall 97 to 98%); see finding 1 on the "fifth" | Chemguide, Wikipedia |
| Ammonia condensed by cooling under pressure, N2 and H2 stay gas and are recycled | Confirmed | Chemguide, Wikipedia |
| Pressure limited by cost and safety (strong vessels, compressor energy) | Confirmed | Wikipedia |
| Catalyst changes the rate, not the equilibrium position | Confirmed | Chemguide |
| Methanol: CO + 2H2 ⇌ CH3OH, copper-based catalyst, about 200 to 300 C (250 C), 50 to 100 bar, unreacted gas recycled | Confirmed (ICI low-pressure CuO/ZnO/Al2O3 process) | [Justia 4623668](https://patents.justia.com/patent/4623668), [USPTO 8623927](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/8623927) |
| Methanol ΔH about -91 kJ per mole | Supported: a patent gives -90.8; tabulated CH3OH(g) -201 and CO -110.5 give -90.5. NIST's averaged methanol value (-205 +/- 10) is too uncertain to use. "About 91" is acceptable. | [USPTO 8729141](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/8729141), [NIST methanol](https://webbook.nist.gov/cgi/cbook.cgi?ID=C67561&Units=SI&Mask=1) |
| Methanol: three gas moles become one; 500 atm gives "somewhat more" | Gas count correct. The learning review's 77 and 93 percent conversion estimates were not checked (UNVERIFIED); the video states no number. | not verified |
| Compromise reasoning (cooling raises the equilibrium share of an exothermic reaction but lowers both rates; catalyst makes the middle temperature workable; pressure raises yield and rate) | Standard and consistent with the sources | Chemguide, Wikipedia |
| "Nitrogen molecules are hard to split" | Standard school statement (strong N≡N triple bond) | general textbook |
| Endothermic exception (heat helps both yield and rate) | Correct | general |

## Site correction check

`site-corrections.md` records wrong Haber K values in site lessons 9 and 14 (977 at 300 C, 0.013 at 500 C and related items). Neither the narration nor on-screen copy contains a Haber K; the wrong values appear only in an author note saying they are never used. The corrected values quoted there agree with the Wikipedia Kp figures above. None repeated. The site's "600 to 700 C without a catalyst" claim is also not repeated. No U+2014 in the design.

Summary: 3 findings (all minor). UNVERIFIED: the "a fifth of the leaving gas" figure, the 450 C and 600 C ceilings against a published table, the size of the temperature rise without iron, and the methanol 500 atm conversion estimates.

## Resolution (Claude science check)

Applied to `lessons/chem-m5-c07.md`, now Revision 4 (re-review and Claude science check resolved; ready to voice). Claude decisions as given by the coordinator.

| # | Finding | Resolution |
| --- | --- | --- |
| 1 | "A fifth of the gas leaving" could be read as single-pass conversion, and public sources give about 15% conversion (about 8% ammonia in the gas) | Scene 6 now says "only part of the gas reacts on each pass: about a fifth of the gas leaving the reactor is ammonia, a little under the settled value". "Single-pass conversion" is never used in learner copy. The Numbers to verify and memory aid check now record that the site's 15 to 25 percent and the bank's 15 percent are a different measure; the "fifth" stays UNVERIFIED against an engineering source and is flagged for the voiced preview. |
| 2 | No source for the temperature needed without iron | Scene 4 gives no number and now says only "Without iron the plant would need a hotter reactor, with a lower ceiling". No change to the facts. |
| 3 | 450 C and 600 C ceilings have no published table | Kept as "illustrative, about", spoken ("These numbers are illustrative") and on the plot tag with 200 atm and the 1 : 3 feed. The plot axis now reads "ammonia in the gas (%)" and only the dashed ceilings say "settles at about". |

Also applied from the re-review: scene 2 now says pulling the ammonia out leaves the settled mixture the same while the total made rises; the honest hold count is in the length estimate; about 50 words were cut (the closing sentence of scene 2, the "Haber is a compromise" line in scene 8, "such as cost or safety" in scene 11, and shorter 3a, 3b and 4). Narration is 1083 words, roughly 9.7 minutes in total. No U+2014 in the design or this file. Unverified items that remain: the "fifth", the 450 C and 600 C ceilings against a published table, and the methanol 500 atm conversion estimates (the video states no number).
