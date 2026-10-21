# m6p05 science check (chem-m6-p05, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-p05.md` (Revision 1), proposal text only, the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`, `lessons/chem-m6-c11.md` (the ratio method and its worked example), `lessons/chem-m6-p04.md` and `lessons/chem-m6-p03.md` (recalled values), and `checks/m6c10-claude-science-check.md` (the series' Ka value). Every number was recomputed with a Python script (21 Oct). The script covered:

- pKa, preparation moles, portion moles and the dose;
- the ratio predictions after acid and base, and an exact charge-balance solution for each buffer state;
- the water control after acid and base;
- the Davies activity correction at both buffer ionic strengths, with the series Ka and the thermodynamic pKa;
- the hook's dilute HCl, alone and with the dose;
- the capacity test, including ±5 % dose errors;
- A1 and A2.

No audio, stills, site files or design files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `C6-IQ3-07` (page 53, practical): "conduct a practical investigation to prepare a buffer and demonstrate its properties (ACSCH080)". The design text and the YouTube description match the ledger exactly. The ledger ID is right; the route draft's own ID for P05 is out of date, as the design and C11 already record. The boundary says watching is not conducting, which is right.

## Em dashes

None found (U+2014 count 0; U+2013 count 0).

## Reference values

| Claim in design | Recomputed or looked up | Verdict | Source |
| --- | --- | --- | --- |
| Ethanoic acid Ka 1.8 × 10⁻⁵, pKa 4.74 | −log(1.8 × 10⁻⁵) = 4.7447 → 4.74. CRC 1.75 × 10⁻⁵ (pKa 4.756) | Correct as the series convention (C10 check) | CRC; m6c10 check |
| Equimolar 0.05 mol/L acetate buffer measures about 4.6 to 4.7 | Davies γ(ethanoate) 0.82 at I = 0.050: 4.745 − 0.085 = 4.66 with the series Ka; 4.756 − 0.085 = 4.67 with the thermodynamic pKa | Correct; 4.68 is realistic | Davies equation; CRC |
| Sodium ethanoate not classified | Sigma-Aldrich S2889 (v6.9, Aug 2024): "not a hazardous substance or mixture" | Correct | Sigma-Aldrich SDS |

## Preparation and start

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Moles of each partner | 0.100 × 0.0500 = 5.00 × 10⁻³ mol | correct, 3 s.f. | Correct |
| Concentration after mixing | 0.0500 mol/L each in about 100 mL | correct (volumes of dilute solutions nearly additive) | Correct; see M2 for "100.0 mL" |
| Portion | 0.0500 × 0.0200 = 1.00 × 10⁻³ mol each | correct | Correct |
| Volume tally | 20.0 + 20.0 + 10.00 = 50.0 mL from the batch; about 70 mL with rinses and a spare | correct | Correct as a planning allowance |
| Predicted start | 4.74 | ratio 1: 4.74; exact charge balance 4.745 | Correct |
| Measured start | 4.67, 4.69, 4.68; mean 4.68 | 14.04 ÷ 3 = 4.68 | Correct and realistic (activity 4.66 to 4.67) |

## Acid and base tests (scenes 6 and 7)

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Dose | 0.100 × 0.00100 = 1.00 × 10⁻⁴ mol | correct | Correct |
| Buffer + HCl, moles | HA 1.10 × 10⁻³, A⁻ 9.00 × 10⁻⁴ mol | correct | Correct |
| Ratio | 1.22 | 1.222 | Correct |
| [H₃O⁺] | 1.8 × 10⁻⁵ × 1.22 = 2.2 × 10⁻⁵ mol/L | 2.2 × 10⁻⁵ (2 s.f.) | Correct |
| Predicted pH | 4.66 | 4.658 (exact charge balance 4.658) | Correct (2 decimal places) |
| Buffer + NaOH (author note) | 4.83 | 4.832 | Correct |
| Measured buffer | 4.68 → 4.59 (−0.09); 4.68 → 4.77 (+0.09) | activity-shifted predictions 4.57 to 4.58 and 4.75 to 4.76; changes −0.09 and +0.09 | Realistic |
| "less than a tenth of a unit" | | 0.087 predicted; 0.09 measured | Correct |
| Water + HCl | 5.93 → 2.35 (−3.58) | 1.00 × 10⁻⁴ mol ÷ 0.0210 L = 4.76 × 10⁻³ mol/L, ideal 2.32, activity about 2.35 | Realistic |
| Water + NaOH | 5.93 → 11.63 (+5.70) | ideal 11.68; activity and CO₂ uptake lower it slightly | Realistic |
| Water start 5.93 | dissolved CO₂ | open water about 5.6 to 6.0 (P03 had 5.82 and 5.96) | Realistic |
| Readings outside 4 to 10 calibration (2.35, 11.63) | author note (a) | changes of several units dwarf the uncertainty | Correct |
| Equation | CH₃COO⁻(aq) + H₃O⁺(aq) → CH₃COOH(aq) + H₂O(l) | balanced (C, H, O, charge) | Correct |

## Dilution and capacity (scenes 8 and 9)

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Diluted buffer | 5.00 × 10⁻³ mol/L each, ratio 1, ideal 4.74 | exact charge balance 4.748 | Correct |
| Measured diluted | 4.68 → 4.72 (+0.04) | Davies γ 0.93 at I = 0.0050: 4.756 − 0.033 = 4.72 | Realistic; the direction (a small rise) is right |
| Capacity portion | 1.00 × 10⁻⁴ mol each in 20.0 mL | correct | Correct |
| After the dose | 2.00 × 10⁻⁴ mol HA in 21.0 mL = 9.52 × 10⁻³ mol/L; [H₃O⁺] 4.05 × 10⁻⁴; pH 3.39; class 3.41 | 4.05 × 10⁻⁴; 3.392; activity about 3.42 | Correct and realistic |
| Sensitivity (author note f) | "a few hundredths" for a small volume error | dose 0.95 × 10⁻⁴ mol: 3.52; 1.05 × 10⁻⁴ mol: 3.26 | The dose sits exactly at the ethanoate amount, so ±5 % moves the reading by about ±0.13, more than "a few hundredths"; "more than a whole unit" still holds across that range (M3) |
| "uses up all its ethanoate" | | exactly the equivalence amount | Correct |

## Hook: the dilute HCl beaker at pH 4.68

- Concentration: 10^−4.68 = 2.09 × 10⁻⁵ mol/L, "about 0.00002 mol/L": correct. With the same dose it would fall to 2.32: correct.
- Realism: it can be made by serial dilution (for example 0.100 mol/L HCl diluted 1 : 100 to 1.00 × 10⁻³ mol/L, then 2.00 mL of that made up to 100.0 mL: 2.00 × 10⁻⁵ mol/L, pH 4.70). Dissolved CO₂ hardly affects it (carbonic acid's ionisation is suppressed at pH 4.7; a shift of about 0.01). But at an ionic strength of about 2 × 10⁻⁵ mol/L it behaves like P03's distilled water: the probe settles slowly and drifts, and carry-over of a single drop of the 0.05 mol/L buffer on an unrinsed probe would add more ethanoate than the beaker holds HCl. So the reading is real but fragile, and "both readouts settle on 4.68 with the stable dot" shows the HCl beaker as steadier than it would be (M4). As a hook it is valid.

## Attempts

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| A1 | 4.68 → 4.59, then back to 4.68 after equal NaOH in the same beaker | after both doses HA and A⁻ return to 1.00 × 10⁻³ mol each in 22.0 mL, ratio 1 | Correct; the two method flaws (no control; base into the acid beaker) are the right answer |
| A2 moles | 3.00 × 10⁻³ and 1.00 × 10⁻³ mol | correct, 3 s.f. | Correct |
| A2 [H₃O⁺] | 1.8 × 10⁻⁵ × 3.00 = 5.4 × 10⁻⁵ mol/L | correct (2 s.f.) | Correct |
| A2 pH | 4.27 | 4.268 (exact charge balance 4.269) | Correct (2 decimal places) |
| A2 crossed | "pH = pKa = 4.74" | true only for equal moles | Correct to cross |

## Chemistry claims

- "a buffer isn't defined by its pH. It's defined by what it does": correct.
- "a buffer needs a weak acid and its conjugate base, both in large amounts": correct.
- "Pipettes matter, because the ratio sets the pH": correct.
- Scene 4: "The simple ratio calculation treats the ions as if they don't affect each other, and real ions do, a little. Stock concentrations aren't perfect either.": correct plain-language account of activity and stock error.
- Scene 5: "base added after acid would just undo it": correct.
- Scene 6: "The buffer resists the change. It doesn't prevent it.": correct.
- Scene 8: "Now a property water can't copy.": incorrect. Diluting water with water leaves its pH unchanged (S1).
- Scene 8: "Both partners are diluted equally, so the ratio stays at one": correct.
- Scene 9: "Same pH as before, much less capacity": correct.
- Scene 11: "a small offset in every reading cancels out": true only for a constant offset (M1).

## Hazard classifications

| Reagent | Strength (mass %) | Lowest cut-off (EU CLP Annex VI specific limits, used by most SDSs sold in Australia) | Verdict |
| --- | --- | --- | --- |
| 0.100 mol/L CH₃COOH | 0.60 % | Skin Irrit. 2, Eye Irrit. 2 at 10 % to < 25 % | Not classified. Correct |
| 0.100 mol/L sodium ethanoate | 0.82 % | not classified at any strength (Sigma-Aldrich S2889) | Correct |
| 0.100 mol/L HCl | 0.36 % | Skin Irrit. 2, Eye Irrit. 2, STOT SE 3 at 10 % to < 25 % | Not classified. Correct |
| 0.100 mol/L NaOH | 0.40 % | Skin Irrit. 2 (H315) and Eye Irrit. 2 (H319) at 0.5 % to < 2 % | "just under the irritant limit" is right. The screen's "some supplier sheets label it H315, H319" was not confirmed: sheets found range from not classified (ALS) through H290 only (Agilent Australia) to H314 (American Elements) (S2) |
| Glacial ethanoic acid | about 100 % | H226, H314 (Flam. Liq. 3, Skin Corr. 1A) | Correct; "flammable and corrosive" is right |
| Waste | dilute, near neutral | | "sink with water if school rules allow" is right |

Australian workplaces apply GHS Revision 7 under the model WHS Regulations (from 1 January 2023). Pipette filler and no mouth pipetting: correct. "Follow your school's risk assessment and each bottle's safety data sheet" should stay.

## Exam style

A1 ("Evaluate her method") and A2 ("Calculate the expected pH of the mixture", with Ka given) use HSC Section II verbs and structure, keep every condition on the card, and are original. No NESA paper wording was found for either; buffer-preparation calculations are a common textbook pattern, but the volumes, readings and wording are new.

## Absolute claims

- Scene 8 "a property water can't copy" (S1).
- Scene 11 "a small offset in every reading cancels out" (M1).
- Scene 3 "so fifty would run out" (learning review M3).
- Scene 3 label "buffer, 100.0 mL" (M2).
- Scene 12 "always use a pipette filler": a correct rule; keep.

## Findings

No blockers.

### S1. Should fix: scene 8, "Now a property water can't copy."

- Problem: diluting water tenfold with water does not change its pH, so water does copy this property. The scene's real comparison is P04's diluted HCl (+1.00), which is right.
- Replacement: "Now a property an unbuffered acid can't copy."

### S2. Should fix: the NaOH risk row cites supplier labels that were not confirmed (scene 12 screen; Safety facts check)

- Exact text: "0.100 mol/L NaOH: just below the irritant limit (some supplier sheets label it H315, H319)".
- Replacement: "0.100 mol/L NaOH: just below the EU irritant limit (0.5 %); supplier sheets vary, so check yours". Narration can stay.
- Safety facts check bullet: replace "though some supplier SDSs for 0.1 M NaOH carry H315 and H319 (same note as P04)" with "supplier SDSs for 0.1 M NaOH vary: ALS not classified; Agilent Australia (0.1 N) H290 only; American Elements H314; none found with H315 and H319 alone (science check, 21 Oct)".

### M1. Minor: scene 11, "a small offset in every reading cancels out"

- Replacement narration: "And because you compare **changes**, a constant offset in every reading cancels out."
- Chip: "the same offset in both readings: the change is unaffected".

### M2. Minor: "100.0 mL" for a beaker mix (scene 3 label)

- Two pipetted 50.0 mL volumes give about 100 mL in a beaker (volumes are nearly, not exactly, additive, and a beaker is not volumetric). The moles are what the pipettes fix, and the ratio uses moles. Replacement label: "buffer, about 100 mL (0.00500 mol of each)". The narration's "That's one hundred millilitres" is fine.

### M3. Minor: author note (f), capacity-test sensitivity

- Replace "a small volume error changes the reading by a few hundredths but not the conclusion (author check: with 0.95 × 10⁻⁴ mol ... about 3.4 to 3.5)" with: "the dose equals the ethanoate amount, so the reading is sensitive: a ±5 % dose error gives about 3.26 to 3.52 (science check script, 21 Oct). The conclusion (a fall of more than a whole unit, against −0.09 for the undiluted buffer) holds across that range."

### M4. Minor: the hook's dilute HCl reading is fragile (scene 1 visual; author note d)

- Add to author note (d): "The 2.1 × 10⁻⁵ mol/L HCl has very low ionic strength, so (like P03's distilled water) the probe settles slowly and drifts, and buffer carried over on an unrinsed probe would swamp it. CO₂ hardly affects it at pH 4.7. Prepare it by serial dilution with volumetric glassware (for example 2.00 mL of 1.00 × 10⁻³ mol/L HCl made up to 100.0 mL, pH 4.70)."
- Visual: let the HCl readout settle about a second later than the buffer's, ending on 4.68. Not spoken.

### M5. Minor: Ka convention (author note only; no change)

- The thermodynamic pKa is 4.756 (Ka 1.75 × 10⁻⁵). With it, the activity-corrected start is 4.67 and the diluted value 4.72, which match the class values even better than the series' 4.74. Record in author note (b): "Series Ka 1.8 × 10⁻⁵ (HSC value, C10 check); CRC 1.75 × 10⁻⁵ gives measured-style 4.67 and 4.72."

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ3-07 (page 53)
- CRC Handbook of Chemistry and Physics: dissociation constants of organic acids (ethanoic acid 1.75 × 10⁻⁵), via LibreTexts tables
- aqion, pH and activity corrections: https://www.aqion.de/sd/69?page=3
- Sigma-Aldrich SDS, sodium acetate S2889, version 6.9 (2024), not classified: https://sigmaaldrich.com/FR/en/sds/SIAL/S2889
- Regulation (EC) No 1272/2008 (CLP), Annex VI, sodium hydroxide 011-002-00-6, acetic acid 607-002-00-6 and hydrochloric acid, via the ECHA C&L Inventory: https://echa.europa.eu/information-on-chemicals/cl-inventory-database (NaOH specific limits as reproduced in a Hach SDS: https://shop.fleischhacker.biz/media/pdf/dc/78/36/SDS_19153_Hach_EN.pdf)
- Agilent Technologies Australia, SDS for 0.1 N sodium hydroxide (H290 only): https://www.agilent.com/cs/library/msds/5062-8575_Australia.pdf
- ALS, SDS 25, sodium hydroxide 0.1 M (not classified): https://www.alsglobal.com/-/media/ALSGlobal/Resources-Grid/UK-Enviro/Client-Services/Waters-Sampling-Resources/Safety-Data-Sheets/SDS-25.pdf
- American Elements, sodium hydroxide solution SDS (H314): https://americanelements.com/sodium-hydroxide-solution-1310-73-2/sds2
- Safe Work Australia, GHS Revision 7 transition: https://www.safeworkaustralia.gov.au/safety-topic/hazards/chemicals/classifying-chemicals/ghs-7

## Verdict

**Ready to voice after fixes.** S1 changes narration and must be applied before recording; S2 is screen and author-note text. M1 to M5 are cheap and should be applied. The Codex error check is still required.

## Resolution
