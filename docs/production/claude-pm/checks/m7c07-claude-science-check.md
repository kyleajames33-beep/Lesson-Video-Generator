# m7c07 science check (chem-m7-c07, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 22 Oct 2026.
Inspected: `lessons/chem-m7-c07.md` (Revision 1), proposal text only; the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; `pre-design/chem-m7-l11-methanol-dataset.md`; site lesson 11 (`hscscience/subjects/chemistry/year12/module7/lesson11.sa.html`), read as stripped text at every passage the design quotes; `research/question-types-chem-m7.md`; web sources listed below. Every equation, atom count, molar mass, enthalpy, ratio and site-correction value was recomputed by script (Python, unrounded until the end). No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

| Ledger | Ledger text | Design and YouTube description | Verdict |
| --- | --- | --- | --- |
| `C7-IQ4-04` (p56) | "write equations, state conditions and predict products to represent the reactions of alcohols, including but not limited to (ACSCH128, ACSCH136):" with "combustion", "dehydration", "substitution with HX", "oxidation" | identical | Match |
| `C7-IQ4-07` (p56) | "compare and contrast fuels from organic sources to biofuels, including ethanol" | identical | Match |
| `C7-IQ2-06` (p55) | "examine the environmental, economic and sociocultural implications of obtaining and using hydrocarbons from the Earth" | identical | Match |

"pp55 and 56" is right. Only the combustion example of C7-IQ4-04 is claimed, and the description says so.

## Em dashes and spelling

U+2014 count 0. Australian spelling throughout ("vapour", "vaporisation", "colour", "litre"). En dashes appear only as bond lines and minus signs.

## Equations (atom balance)

| Equation | C | H | O | Verdict |
| --- | --- | --- | --- | --- |
| C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O | 2 / 2 | 6 / 6 | 1 + 6 = 7 / 4 + 3 = 7 | Correct |
| CH₃OH + 3/2 O₂ → CO₂ + 2H₂O | 1 / 1 | 4 / 4 | 1 + 3 = 4 / 2 + 2 = 4 | Correct |
| C₂H₅OH + 2O₂ → 2CO + 3H₂O | 2 / 2 | 6 / 6 | 5 / 5 | Correct |
| C₂H₅OH + O₂ → 2C + 3H₂O | 2 / 2 | 6 / 6 | 3 / 3 | Correct |
| C₄H₉OH + 6O₂ → 4CO₂ + 5H₂O | 4 / 4 | 10 / 10 | 13 / 13 | Correct |
| crossed C₄H₉OH + 13/2 O₂ → 4CO₂ + 5H₂O | | | 14 / 13 | Correctly wrong |
| 2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O | 16 / 16 | 36 / 36 | 50 / 50 | Correct |

State symbols "(l) + (g) → (g) + (l)" for the standard enthalpy of combustion: correct. "Real flames give a mixture of CO₂, CO and C" (author note g): correct.

## Standard enthalpies and molar masses

| Value used | Recomputed or reference | Verdict |
| --- | --- | --- |
| M: 32.04, 46.07, 60.09, 74.12, octane 114.2 | 32.042, 46.068, 60.094, 74.120, 114.224 (C 12.01, H 1.008, O 16.00) | Correct |
| ΔHc methanol −726, ethanol −1367, propan-1-ol −2021 kJ/mol | NIST condensed-phase values about −726, −1367, −2021 | Correct |
| ΔHc butan-1-ol −2676 kJ/mol | NIST average of 10 values −2670 ± 20 kJ/mol; −2676 is the common data-book value | Acceptable; author note M5 |
| ΔHc octane −5471 kJ/mol | NIST about −5470 | Correct |
| water vapour basis: methanol about −638 kJ/mol | −726 + 2 × 44.0 = −638 | Correct |
| increments 641, 654, 655; mean 650.0; pentan-1-ol predicted −3326 (site −3329) | recomputed | Correct |
| kJ/g: 22.7, 29.7, 33.6, 36.1, octane 47.9 | 22.66, 29.67, 33.63, 36.10, 47.91 (47.90 with 114.224) | Correct to 3 s.f. (A2 feedback: M2) |
| per-mole ratio octane/ethanol 4.00 | 5471 ÷ 1367 = 4.002 | Correct |
| per litre: ethanol 23.4, octane 33.7 MJ/L; 30% less; commercial petrol 34.2 MJ/L, 32% less | 29.67 × 0.789 = 23.41; 47.91 × 0.703 = 33.68; 1 − 23.41/33.68 = 30.5%; 1 − 23.41/34.2 = 31.5% | Correct ("about thirty percent") |
| carbon fraction methanol 37.5%, butan-1-ol 64.8% | 37.48%, 64.81% | Correct |
| octan-1-ol about 40.6 kJ/g (site) | 5294 ÷ 130.23 = 40.65 | Consistent |

## Methanol hook dataset (scene 5)

ΔT = 41.5 − 21.5 = 20.0 °C; burnt 143.82 − 143.08 = 0.74 g; q = 100.0 × 4.18 × 20.0 = 8360 J = 8.360 kJ; 8.360 ÷ 0.74 = 11.297 → 11 kJ g⁻¹ (2 s.f., set by 0.74 g); careful 726 ÷ 32.04 = 22.66 → 22.7 kJ g⁻¹; ratio 0.4986 (49.9%, "about half"). Molar cross-check: n = 0.0230961 mol, ΔH = −361.97 → −3.6 × 10² kJ/mol; 8.360 ÷ 16.768 = 49.9%. All match Codex's dataset and the design. "Careful measurements give about twenty three": 22.7 rounds to 23, correct.

## Bond-energy explanation (scene 6)

Per extra CH₂: CH₂ + 1.5 O₂ → CO₂ + H₂O. Broken: 2 C–H, 1 C–C, 1.5 O=O = 2 × 414 + 346 + 1.5 × 498 = 1921 kJ/mol. Formed: 2 C=O (in CO₂, 805) + 2 O–H (463) = 2536 kJ/mol. Net −615 kJ/mol against the measured about −650. Correct, and the design correctly adds the O=O bonds the site omits ("and some oxygen bonds"). The average-bond-enthalpy and gas-phase caveat in author note c is right. "Forming those bonds releases more energy than the breaking takes": correct.

## Energy per gram and the oxygen

"Its oxygen adds mass but no energy, and one carbon is already bonded to oxygen, so it's partly oxidised": correct HSC account. Oxidation states in author note d (methanol C −2; ethanol C–OH carbon −1; alkane carbons −3 and −2) are correct. The memory aid "Per gram: oxygen costs energy" is correctly limited in the design (it does not deny the rising kJ/g trend within the alcohols).

## E10, carbon and extraction claims

- **E10 "up to 10%" (hook, scene 11):** confirmed. The Fuel Quality Standards (Petrol) Determination 2019 sets the upper limit of ethanol in petrol at 10%, and the Fuel Quality Standards (Ethanol) Information Standard 2019 covers labelling of blends "containing up to and including 10% ethanol, commonly known as E10". Not stated as a national mandate: correct. The Open decision can close as "keep".
- **Sugarcane ethanol not automatically carbon neutral (scenes 8, 9):** supported. Life-cycle studies identify land-use change, nitrogen fertiliser (nitrous oxide), residue burning, industrial fossil energy and co-product allocation as the main variables; net savings depend on how and where the crop is grown. "Doesn't make bioethanol carbon neutral" and "often from fossil fuels" are correct. But "a renewable source with less net carbon dioxide" is unhedged (S1).
- **Extraction costs (scene 10):** economic (jobs, export income, energy security), environmental (spills, habitat loss, "possible water contamination" for fracking, contested), sociocultural (community health, opposition, land and sea Country) all match the site's card 04B and are appropriately hedged. Wording of the First Nations clause: learning S1.
- **CO toxic:** correct (binds haemoglobin; not said, correctly).

## Absolute claims

- "So ethanol's case is a renewable source with less net carbon dioxide" (scene 9): unhedged. S1.
- "Same extra group, same extra energy." (scene 6): the data show 641 to 655. M1.
- "Its oxygen adds mass but no energy" (scene 7): standard shorthand for "contributes no combustion energy"; acceptable.
- "black soot coats whatever is above it" (scene 4): acceptable observation.
- Carbon neutrality, soot and E10 are hedged as the design says. No other absolute claims found.

## Site errors logged by the author

| Logged correction | Site text found (22 Oct) | Verdict |
| --- | --- | --- |
| 1. Hook and Activity A: 200 g, 13.4 °C, 0.48 g, "−383 kJ/mol, barely 53%" | Present | Real: q = 11 202.4 J, n = 0.014981 mol, ΔH = −747.76 kJ/mol, 103.0% of −726. Agreed |
| 2. Ethanol worked example −1235.5, 90.4% | Present | Real: unrounded −1235.67; 2 s.f. from 0.48 g gives −1.2 × 10³; 90% is far above the site's own 40 to 70%. Agreed |
| 3. MC Q1 "−898.6 ≈ −898" | Present | Real: −898.67 rounds to −899; 2 s.f. gives −9.0 × 10². Agreed |
| 4. Example 1 −932 (3 s.f.) from 0.55 g; Q6 −1397 from 0.47 g | Present | Real (−931.64 and −1397.49; both 2 s.f.). Agreed |
| 5. Example 3 propan-1-ol −748, butan-1-ol −983; unhedged "harder to fully oxidise" | Present | Real: −753.5 and −985.1 from the rows' data (methanol −306.7, ethanol −558.8 match); 37.3% and 36.8% correct. Agreed |
| 6. "ALWAYS lower in magnitude"; "All five sources produce the same direction" | Present | Real. The site repeats it in more places than listed (M3) |
| 7. Vocabulary "CO₂(g) and H₂O(g)" | Present | Real (data values are for liquid water). Agreed |
| 8. "Oxygen is already partially 'oxidised'" | Present | Real. Agreed |
| 9. Bond analysis omits O=O | Present (card 4 and Worked Example 2) | Real. Agreed |
| 10. "fully reduced (oxidation state ≈ −2 to −3)" | Present | Real (fully reduced is −4). Agreed |
| 11. Revisit 70 to 80%, 99%, $50,000; bomb calorimeter vocabulary | Present | Unsourced figures: real. But the vocabulary entry does say "A closed, constant-volume vessel", so "omits that ... measures at constant volume" is not an error (M4) |
| 12. Accuracy fixes listed as reliability; extrapolation "true maximum ΔT" | Present | Real. Agreed |
| 13. Brazil "45% of its transport fuel" in 2021 | Present | Unsourced and basis unstated; not verified by this reviewer. Agreed to remove or source; not used |
| 14. "approximately 50% more fuel by volume" | Present (Q8 and the review answer) | Rough: 34.2 ÷ 23.4 = 1.46, so about 46%. Agreed as minor |
| Note: "Near-carbon-neutral" | Present | Agreed: hedged elsewhere on the page; not used as a claim |

## Exam style

A1 (butan-1-ol equation and soot) and A2 (energy per gram from given ΔHc and M, then compare) are original HSC Section II style items using syllabus verbs (write, explain, calculate, compare). A1(b) targets the 2020 Q24 marker-reported mistake (confirmed in `research/question-types-chem-m7.md`). Neither copies a NESA item known to this reviewer (no exhaustive past-paper search was made). No mark-allocation talk.

## YouTube metadata

Title 97 characters (limit 100): pass. Description quotes all three dotpoints verbatim and states the combustion-only scope: good.

## Findings

### S1. Should fix: the net-carbon benefit is stated as certain

- Exact text (scene 9): "So ethanol's case is a renewable source with less net carbon dioxide, against less energy per litre and the resources to grow it."
- Problem: life-cycle emissions depend on land-use change, fertiliser and processing energy; some cases show small or no savings. The scene itself has just shown production CO₂.
- Replacement: "So ethanol's case is a renewable source that can add less net carbon dioxide, against less energy per litre and the resources to grow it." Key note 5 already hedges ("not automatically carbon neutral"): no change there.

### M1. Minor: "same extra energy"

- Exact text (scene 6): "Same extra group, **same** extra energy."
- Replacement: "Same extra group, about the **same** extra energy." (Learning M5.)

### M2. Minor: A2 feedback rounds 4 s.f. data to 3 s.f.

- Exact text (scene 16 screen): "1367 ÷ 46.07 = 29.67 → 29.7 kJ g⁻¹"; "5471 ÷ 114.2 = 47.91 → 47.9 kJ g⁻¹".
- Problem: every given in A2 has four significant figures, so under the design's own strict rule the answers are 29.67 and 47.91 kJ g⁻¹. Rounding to 3 s.f. loses precision (markers usually accept it, but the video models the rule).
- Replacement (screen): "1367 ÷ 46.07 = 29.67 kJ g⁻¹ (4 s.f.)"; "5471 ÷ 114.2 = 47.91 kJ g⁻¹ (4 s.f.)". Narration: "Ethanol: **twenty nine point six seven** kilojoules per gram. Octane: **forty seven point nine one**." (+about 10 characters; feedback about 28.5 s.) Scene 7, scene 11 and the key notes may keep the rounded data-book figures (29.7, 47.9), which are not answers to a stated-data question.

### M3. Minor: correction 6 misses three site locations

- Add to correction 6: "The same claim appears in the Learning Intentions ('Why spirit burner experiments always underestimate ΔHc'), Short Answer Q7's stem ('is always lower in magnitude than the theoretical value') and the Revisit box ('All five push the experimental |ΔHc| below the theoretical value')."

### M4. Minor: correction 11 misreads the bomb calorimeter vocabulary entry

- Exact text (correction 11): "and the vocabulary entry 'Bomb calorimeter ... q = mcΔT' omits that a bomb calorimeter is calibrated with its own heat capacity and measures at constant volume."
- Site text: "Bomb calorimeter: A closed, constant-volume vessel used to measure heat of combustion precisely; q = mcΔT."
- Replacement: "and the vocabulary entry 'Bomb calorimeter ... q = mcΔT' implies the water-only formula, but a bomb calorimeter is calibrated, so q = C(calorimeter) × ΔT."

### M5. Minor: author note (a) butan-1-ol reference

- Add to author note (a): "NIST gives butan-1-ol −2670 ± 20 kJ/mol (average of 10 values); the data-book −2676 lies within it."

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C7-IQ2-06 (p55), C7-IQ4-04 and C7-IQ4-07 (p56)
- Fuel Quality Standards (Petrol) Determination 2019 and (Ethanol) Information Standard 2019, explanatory statements: https://legislation.gov.au/F2019L01280/asmade/2019-09-27/es/original/pdf and https://legislation.gov.au/F2019L01281/asmade/2019-09-27/es/original/pdf
- NSW Government, E10 facts: https://www.nsw.gov.au/topics/e10-fuel/facts
- NIST Chemistry WebBook, 1-butanol condensed-phase thermochemistry (ΔcH°liquid −2670 ± 20 kJ/mol): https://webbook.nist.gov/cgi/cbook.cgi?ID=C71363&Mask=2
- NIST Chemistry WebBook, methanol (−725.7, −726.34 kJ/mol, via the Codex dataset): https://webbook.nist.gov/cgi/cbook.cgi?ID=C67561&Mask=E
- Sugarcane ethanol life-cycle variables (land-use change, fertiliser N₂O, burning, allocation): KIT press release on Brazil and Australia N₂O study, https://www.kit.edu/kit/english/pi_2011_5912.php; Mexico life-cycle study, https://inis.iaea.org/records/srep8-8pv28; pasture conversion, https://www.dicyt.com/news/sugarcane-expansion-over-pastures-increases-brazilian-ethanol-carbon-footprint
- Reviewer knowledge, not re-fetched: NIST values for ethanol, propan-1-ol and octane; average bond enthalpies; water's enthalpy of vaporisation (44.0 kJ/mol at 25 °C); densities of ethanol (0.789 g/mL) and octane (0.703 g/mL); petrol about 34.2 MJ/L; oxidation states.

## Verdict

**Ready to voice after S1** (the same change as learning S2). M1 to M5 are small. No science blocker. The Codex error check is still required (the Brazil figure in correction 13 remains unverified).

## Resolution

Resolved by the design author in `lessons/chem-m7-c07.md` Revision 2 (22 Oct). Narration 6,237 characters, about 563 s (9.4 min); U+2014 count 0.

- **S1 (applied, reviewer's text):** scene 9: "So ethanol's case is a renewable source that can add less net carbon dioxide, against less energy per litre and the resources to grow it." Key note 5 unchanged (already hedged).
- **M1 (applied):** scene 6: "Same extra group, about the **same** extra energy."
- **M2 (applied):** scene 16 screen "1367 ÷ 46.07 = 29.67 kJ g⁻¹ (4 s.f.)" and "5471 ÷ 114.2 = 47.91 kJ g⁻¹ (4 s.f.)"; narration "twenty nine point six seven" and "forty seven point nine one" (cue words updated); the "Numbers used" A2 row updated. Scenes 7 and 11 and the key notes keep 29.7 and 47.9 as rounded data-book figures, as the check allows.
- **M3 (applied):** correction 6 now lists the Learning Intentions, Short Answer Q7's stem and the Revisit box.
- **M4 (applied):** correction 11 now says the vocabulary entry implies the water-only formula, whereas a calibrated bomb calorimeter uses q = C(calorimeter) × ΔT, and notes that the entry does say "constant-volume".
- **M5 (applied):** author note (a) adds NIST butan-1-ol −2670 ± 20 kJ/mol, with −2676 inside it.
- E10 "up to 10%": the Open decision is closed as "keep", citing this check; Codex re-checks in its error pass.

Declined: none. Pending: Codex error check (including the unverified Brazil figure in correction 13, which the video does not use).
