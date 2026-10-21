# m6p06 science check (chem-m6-p06, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-p06.md` (Revision 1), proposal text only; `lessons/chem-m6-c12.md` (Revision 3) for the recalled values and corrections; the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; the route entry in `docs/production/module6-video-route-draft.json`; the plate `m6-indicator-methyl-orange-set-v1.png` (viewed). Every number was recomputed with a Python script (21 Oct), using HSC data sheet atomic masses (H 1.008, C 12.01, O 16.00, Na 22.99, Cl 35.45). The script covered:

- M(Na₂CO₃), the standard's moles and concentration (with 105.99 and with 106.0);
- the aliquot moles, n(HCl), every titre from its readings, both means and both concentrations (rounded and unrounded chains);
- bench B's titre excess, its error size and the water-film dilution needed to produce it;
- the bubble run's concentration;
- the solution strengths used for the GHS cut-offs.

No audio, stills, site files or design files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `C6-IQ3-01` (page 53, practical): "conduct practical investigations to analyse the concentration of an unknown acid or base by titration". The design text and the YouTube description match the ledger exactly. The route entry (chem-m6-p06, prerequisite chem-m6-c12, next chem-m6-g03, start and stop) matches the design. The Boundary says watching is not conducting, which is right.

## Em dashes

None found (U+2014 count 0; U+2013 count 0).

## Numbers

| Item | Design | Recomputed | Verdict |
| --- | --- | --- | --- |
| M(Na₂CO₃) | 105.99 g/mol | 45.98 + 12.01 + 48.00 = 105.99 | Correct |
| n(Na₂CO₃) | 0.012884 mol | 1.3656 ÷ 105.99 = 0.0128842 | Correct (guard digit kept) |
| c(Na₂CO₃), 250.0 mL | 0.05154 mol/L | 0.0515369 → 0.05154 (4 s.f., limited by 250.0 mL) | Correct |
| With M = 106.0 (C12, site) | "gives the same four-figure results here" | 1.3656 ÷ 106.0 ÷ 0.2500 = 0.051532 → **0.05153**; c(HCl) still 0.1059 | Author claim half wrong (M1) |
| Aliquot n(Na₂CO₃) | 1.2885 × 10⁻³ mol | 0.05154 × 0.02500 = 1.2885 × 10⁻³ (unrounded 1.28842 × 10⁻³) | Correct |
| n(HCl) | 2.577 × 10⁻³ mol | 2.5770 × 10⁻³ | Correct |
| Titres | 24.35, 24.65, 24.30, 24.35 | 24.75 − 0.40; 24.80 − 0.15; 24.50 − 0.20; 25.40 − 1.05: same | Correct; every reading ends in 0 or 5 (0.05 mL) |
| Concordance | spread 0.05 mL, within 0.10 | 24.35 − 24.30 = 0.05 | Correct |
| Bench A mean | 24.33 mL | 73.00 ÷ 3 = 24.333 → 24.33 | Correct (burette precision) |
| c(HCl), bench A | 0.1059 mol/L | 2.577 × 10⁻³ ÷ 0.02433 = 0.10592; unrounded chain 0.10590 | Correct, 4 s.f. |
| Bench B mean | 24.82 mL | 74.45 ÷ 3 = 24.817 → 24.82 | Correct |
| "0.49 mL apart" | 0.49 | 24.82 − 24.33 = 0.49 (unrounded 0.483) | Correct from the rounded means; "about half a millilitre" fine |
| c(HCl), bench B | 0.1038 mol/L, 2% low | 0.10383 → 0.1038; (0.1059 − 0.1038) ÷ 0.1059 = 1.98% | Correct |
| Titres 2.0% bigger | 2.0% | 24.817 ÷ 24.333 = 1.0199 | Correct |
| Water-rinse size | "about 1 mL film in a 50 mL burette, about 2%" | 1 ÷ 51 = 1.96% | Arithmetic correct; the film volume is at the upper end of plausible (M2) |
| Bubble run (not shown) | 0.1045 mol/L, 1.3% low | 0.10454 | Correct |
| Rough run | 24.9 | 24.9 − 0.00 | Correct; mixed precision in one row (M3) |
| Solution strengths | 5.46 g/L Na₂CO₃ (0.55%); 3.86 g/L HCl (0.39%) | 5.463; 3.861 | Correct |
| Equation | Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂ | Balanced in atoms and charge | Correct |

## Error-direction reasoning

| Case | Design chain | Check | Verdict |
| --- | --- | --- | --- |
| Water-rinsed burette (scene 11) | acid diluted → more mL for the same carbonate → titre bigger → c(HCl) too low | c = n(calculated, correct) ÷ larger V; the result is the diluted acid's concentration, below the stock's | Correct |
| Bubble leaving the tip (scene 9) | bubble volume counted as acid → titre too big | the level falls by the bubble's volume with no acid delivered | Correct; excluded because the cause is known and repeated |
| Wet pipette (A1) | aliquot diluted → fewer moles of Na₂CO₃ → titre smaller → c(HCl) too high | the calculation still uses 1.2885 × 10⁻³ mol, divided by a smaller titre | Correct; the crossed "diluted, so too low" is the classic error |
| Damp Na₂CO₃ (A2) | weighed mass includes water → fewer moles → standard really weaker → titre smaller → c(HCl) too high | the calculation uses 0.05154 mol/L, which is too high, with a smaller titre | Correct; the crossed "no effect: dissolved in water anyway" is the classic error |
| Flask rinsed with carbonate (scene 5 chip) | "extra carbonate: more moles" | correct first link (would give a bigger titre and c(HCl) too low) | Correct |
| Parallax, eye above (scene 7) | reading too low | burette numbers increase downwards; from above, the sight line crosses the scale above the meniscus, at a smaller number | Correct; the learning review's S1 adds the cause |

## Methyl orange and the 1 : 2 ratio

- Colours: yellow above about pH 4.4, red below about pH 3.1, orange in between. Starting in the carbonate solution (pH about 11) the flask is yellow; the endpoint is the first permanent orange; red means past it. The design's colours, the swap order and the existing plate are all correct.
- Suitability: the second equivalence point of Na₂CO₃ with HCl (all carbonate converted to H₂CO₃/CO₂) is at about pH 3.7 to 4, inside methyl orange's range, so the 1 : 2 ratio applies at this endpoint. Phenolphthalein would mark the first equivalence (1 : 1, to HCO₃⁻). Author note (e) is right, and leaving the justification to C13 is right.
- Dissolved CO₂ can make the orange fade back to yellow near the endpoint; "first permanent orange, after swirling" handles this at school precision. Boiling out is correctly left out of learner copy.

## Practice and technique claims

- Drying anhydrous Na₂CO₃ at 270 to 300 °C to constant mass and cooling in a desiccator: correct (pharmacopoeial and analytical methods use 270 to 300 °C). Drying removes water, not other impurities; "so its mass is all carbonate" assumes an analytical-grade reagent (M5).
- Rinse the pipette with the solution it measures and the burette with the titrant; flasks with distilled water only: correct.
- Volumetric pipettes (ISO 648 and AS 2166 class A, "to deliver") are calibrated with the tip touched to the wall and the residual drop left in the tip: correct.
- Top of the burette below eye level when filling; remove the funnel; fill the tip; no bubble: correct practice.
- Read the bottom of the meniscus at eye level, graduations 0.1 mL, estimate to 0.05 mL: correct.
- Rough run excluded: correct; it is done fast to locate the endpoint and is expected to overshoot.
- Bubble run excluded for its known cause and then repeated: correct practice, and it fixes the site's Q8(d) ("resolved" by exclusion alone). A recorded, identified fault is grounds to reject a run whatever its value, and a replacement run is needed to keep three concordant titres. Here the run is also non-concordant (0.30 mL above the highest concordant titre), so both reasons agree.
- Rinsing the flask walls with distilled water during the titration adds no moles: correct.

## Variables framing (scene 12)

Defensible. A titration is a quantitative analysis: it measures one quantity (the titre) under controlled conditions and does not vary one factor to test its effect on another, so naming an independent variable would be artificial. The NESA definition of validity ("the extent to which an experiment addresses the question under investigation") is met by controlling conditions, which scene 12 lists. Some school reports still ask for variables; the learning review's M3 adds the author's fallback line as a grey screen line so students have the words.

## Hazard classifications

| Reagent | Design | Check | Verdict |
| --- | --- | --- | --- |
| Sodium carbonate, anhydrous solid | Eye Irrit. 2, H319 | CLP Annex VI harmonised entry 011-005-00-2: Eye Irrit. 2, H319, only | Correct |
| 0.05154 mol/L Na₂CO₃ (0.55%) | not classified | generic cut-off for Eye Irrit. 2 mixtures 10%; pH about 11.3, below the 11.5 extreme-pH flag | Correct |
| 0.1 mol/L HCl (0.39%) | not classified | HCl specific limits: Skin Irrit. 2, Eye Irrit. 2 and STOT SE 3 from 10%; Skin Corr. 1B from 25% | Correct |
| Methyl orange, solid | Acute Tox. 3 (oral), H301, oral LD50 rat about 60 mg/kg | Sigma-Aldrich, AquaPhoenix, Flinn and Fisher SDSs: Acute Tox. 3, H301, LD50 60 mg/kg. ProSciTech (Australia) lists "Category 2" with H301, an internal inconsistency (H301 is Category 3) | Correct |
| Methyl orange indicator solution, about 0.1% aqueous | not classified | additivity: ATE(mix) = 100 ÷ (0.1 ÷ 60) = 60 000 mg/kg, far above 2 000 | Correct; ethanolic solutions may carry H225 or H226, which the footer chip ("each bottle's safety data sheet") covers |
| Drying oven, pipetting, waste | teacher only; filler; sink if allowed | | Correct |

Australian workplaces apply GHS Revision 7 under the model WHS Regulations; supplier sheets vary, so the footer chip should stay.

## Exam style

A1 and A2 ("Explain the effect of this on the calculated concentration of the hydrochloric acid") use the HSC Section II verb and structure, state "all other steps are carried out correctly" or "exactly as described", and are original. Error-direction items of this kind are a common HSC theme, but no NESA paper wording or data was found for either stem.

## Absolute claims

- Scene 3 "so its mass is all carbonate" (M5).
- Scene 13 "Correct rinsing, eye-level readings and no bubble keep them close to the true value": these remove the errors shown, but do not by themselves guarantee accuracy (the standard and the endpoint also matter) (M4).
- Scene 13 footer: attributes a definition to "NESA glossary (2025)" (S1).
- Scene 12 "nothing is changed to test its effect": correct for a titration; keep.
- Scene 14 "never by mouth": a correct rule; keep.
- Scene 5 "water adds no carbonate": correct.

## Findings

No blockers.

### S1. Should fix: the scene 13 footer cites a NESA glossary entry that could not be verified

- Exact text: "NESA glossary (2025): accuracy, the extent to which measurements are close to the true value."
- Problem: no 2025 NESA glossary entry with that wording was found. The NESA working definition in use (Science Years 7 to 10 Syllabus, 2018, reproduced by the NSW Department of Education's "Evaluating scientific investigations" resource) reads: "The extent to which a measured value agrees with its true value". A misattributed quotation on a learner screen should not ship.
- Replacement (screen): "NESA definition (Science 7 to 10 syllabus): accuracy is the extent to which a measured value agrees with its true value."

### M1. Minor: author note (a), the 106.0 claim

- Replace "C12 and the site used 106.0, which gives the same four-figure results here" with "C12 and the site used 106.0, which gives c(Na₂CO₃) = 0.05153 mol/L (one in the last digit) but the same c(HCl), 0.1059 mol/L."

### M2. Minor: author note (d), the size of the water film

- A drained burette usually holds a few tenths of a millilitre as film and drops; about 1 mL is the upper end. 2% is still realistic for a burette rinsed and only briefly drained. Replace the sentence with: "A rinse leaves water as a film and drops; if about 0.5 to 1 mL remains when about 50 mL of acid is added, the acid is diluted by about 1 to 2%, so 2% is a realistic upper-end size."

### M3. Minor: the rough row mixes precisions

- Scene 9 table row "rough | 0.00 | 24.9 | 24.9" next to a scene that teaches reading to 0.05 mL. Either record "24.90" in both cells, or keep 24.9 and change the grey label to "rough: read to 0.1 mL, not used". The narration's "about twenty four point nine" can stay.

### M4. Minor: validity card and the accuracy sentence (scene 13)

- Narration replacement: "**Validity**: does the method answer the question? Yes, if everything but the titre is controlled, and the one to two ratio holds at this endpoint." Screen: "Validity: answers the question? One measured quantity, the titre, everything else controlled; 1 : 2 at the methyl orange endpoint." Move "dried, exactly weighed standard" to the accuracy card.
- If the scene's last sentence is not cut (learning review S1 offset), change "keep them close" to "help keep them close".

### M5. Minor: scene 3 "so its mass is all carbonate"

- Replace with "so none of its mass is water" (the same length; the cause drying actually supplies).

### M6. Minor: "percent" in narration

- Scene 11: "two per cent", matching C12 and the Australian Government Style Manual.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ3-01 (page 53)
- NSW Department of Education, Evaluating scientific investigations (definitions from the NESA Science Years 7 to 10 Syllabus, 2018): https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-curriculum-resources-k-12/science-11-12-curriculum-resources/evaluating-scientific-investigations-abridged
- Sigma-Aldrich methyl orange SDS (Acute Tox. 3, H301; LD50 oral rat 60 mg/kg), via the AquaPhoenix ACS-grade SDS: https://sds.aquaphoenixsci.com/SDS/Methyl%20Orange%20ACS%20Grade%20(MO3300)_GHSUnitedStatesSDS_en_2021-04-14.pdf
- Flinn Scientific, methyl orange SDS 516: https://www.flinnsci.com/sds_516-methyl-orange/sds_516
- ProSciTech (Australia), methyl orange SDS: https://tools.proscitech.com.au/sds/methyl-orange-c-i-13025
- Regulation (EC) No 1272/2008 (CLP), Annex VI, sodium carbonate 011-005-00-2 and hydrochloric acid 017-002-01-X specific concentration limits, via the ECHA C&L Inventory: https://echa.europa.eu/information-on-chemicals/cl-inventory-database
- Pharmaguideline, method of analysis for sodium carbonate anhydrous (dry at 270 to 300 °C to constant mass; methyl orange to the second equivalence, pH about 3.7): https://www.pharmaguideline.com/2008/06/method-of-analysis-for-sodium-carbonate-anhydrous.html
- ISO 648, Laboratory glassware: single-volume pipettes (delivery with the tip touched and the residual drop retained)
- Australian Government Style Manual, numbers and measurements ("per cent"): https://www.stylemanual.gov.au/grammar-punctuation-and-conventions/numbers-and-measurements
- Safe Work Australia, GHS Revision 7 transition: https://www.safeworkaustralia.gov.au/safety-topic/hazards/chemicals/classifying-chemicals/ghs-7

## Verdict

**Ready to voice after fixes.** All numbers, the error directions, the methyl orange colours and the hazard classes are correct. S1 is screen text and must be fixed before export; M4 to M6 touch narration and should be applied before recording. The Codex error check is still required.

## Resolution
