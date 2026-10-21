# m6p03 science check (chem-m6-p03, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-p03.md` (Revision 1), proposal text only, the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json` and `research/exam-skills/vra-definitions.md` (NESA glossary wording). Every number was recomputed with a Python script (21 Oct). The script covered:

- the means, ranges and the HCl to acetic acid comparison;
- the ideal values for 0.010 mol/L solutions, with the Davies activity correction;
- the CO₂-saturated water pH;
- the A1 carry-over estimate and the A2 factor;
- the percentage by mass of each 0.010 mol/L solution, for the GHS cut-offs.

No audio, stills, site files or design files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `C6-IQ2-01` (page 53, practical): "conduct a practical investigation to measure the pH of a range of acids and bases". The design text and the YouTube description match the ledger exactly. The boundary says watching is not conducting, which is right, and the strength investigation is correctly left to C6-IQ2-03 (chem-m6-p04).

## Em dashes

None found (U+2014 count 0).

## Reference values

| Claim in design | Recomputed or looked up | Verdict | Source |
| --- | --- | --- | --- |
| Glass electrode slope about 59 mV per pH unit at 25 °C (author note a) | 2.303RT/F = 59.16 mV at 25 °C | Correct | Harris, Quantitative Chemical Analysis |
| Slope and offset drift with age, hydration and temperature; two- or three-point calibration fixes both | yes | Correct | Mettler Toledo and Hach pH theory guides |
| Calibrate at pH 7 first (offset), then 4 and 10 (slope) | common meter instruction | Correct; "follow your meter's manual" tag is right | as above |
| ATC corrects the electrode slope, not the sample's real pH change | yes | Correct | as above |
| Buffer values depend on temperature | not stated | pH 10.01 buffer reads about 10.06 at 20 °C; pH 7.00 about 7.02; pH 4.00 changes little. Supports "calibrate at the same temperature as your samples" | M5 (author note) |
| Ideal pH, 0.010 mol/L: HCl 2.00, CH₃COOH 3.38, NH₃ 10.62, NaOH 12.00 | 2.00; x = 4.154 × 10⁻⁴, pH 3.382; 10.62; 12.00 | Correct | Ka, Kb 1.8 × 10⁻⁵ |
| Davies γ at I = 0.010 about 0.90; measured HCl about 2.04, NaOH about 11.96 | log γ = −0.0447, γ = 0.902 | Correct | Davies equation |
| CO₂ water pH 5.6 (K_H 3.3 × 10⁻², 420 ppm, Ka1 4.5 × 10⁻⁷) | 5.60 | Correct. Indoor lab air (often 600 to 1500 ppm) gives about 5.5 to 5.4 at equilibrium, so readings of 5.8 to 6.1 mean the sample has not fully equilibrated, as author note c says | Harris; Sander, Henry's law compilation |
| Low ionic strength makes readings slow and drifting | yes (high membrane and junction resistance, unstable junction potential) | Correct | Mettler Toledo, low-ionic-strength samples guide |
| Blot, do not rub (static charge) | manufacturer guidance | Correct | Hach, Mettler Toledo electrode care |

## Results and readings (scenes 6, 7, 9)

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Means | 2.03, 3.40, 5.96, 10.59, 11.96 | 2.030, 3.400, 5.957, 10.590, 11.960 | Correct |
| Ranges (acids, bases) | 0.02 each | 0.02 each; water 0.28 | Correct |
| HCl against acetic acid | 1.37 units, about 23 times | 10^1.37 = 23.4; two decimal places give 2 s.f. | Correct |
| Ammonia against NaOH | "sodium hydroxide far more" hydroxide | 1.37 units, about 23 times | Correct |
| Indicator strip at pH 2.03 | "about pH 2 to 3" | full-range paper resolves about 1 unit | Correct |
| Hook 5.80 against table reading 1, 5.82 | different numbers | not an error | M3 |
| Factor of 10 per pH unit | yes (hydronium concentration) | yes | Correct |
| "Below seven ... more hydronium; above seven, more hydroxide" | no temperature stated | true at 25 °C, where neutral is 7.00 | M2 (screen tag only) |

## Attempts

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| A1 carry-over (author note d) | 0.05 mL film → 2.5 × 10⁻⁵ mol/L OH⁻ → pH about 9.4 | 5 × 10⁻⁷ mol ÷ 0.020 L = 2.5 × 10⁻⁵; pOH 4.60; pH 9.40. Dissolved CO₂ (up to about 1.4 × 10⁻⁵ mol/L) uses up some OH⁻, giving about 9.0 to 9.4 | 9.2 plausible; correct |
| A1 reasoning | water has almost no ions, so a trace shifts its pH a lot | yes; the same film in 0.010 mol/L acetic acid shifts it by hundredths | Correct |
| A1 crossed mistake reason | "they'd repeat the same contamination" | Repeats in fresh portions without rinsing carry less NaOH each time, so they would not repeat the same contamination; the average would still be too high | S1 |
| A2 | 3.4 against 5.4, 2.0 units, about 100 times | 10^2.0 = 1 × 10² | Correct. Author note e writes "1.0 × 10²"; one decimal place in the difference gives 1 s.f. (M6) |
| A2 verdict | "wrong" | yes | Correct |
| A1 meter display "9.2" | meter shows two decimals (author note e) | screen shows one | M7 |

## Calibration range (scene 4 and later)

The buffers are pH 4.00, 7.00 and 10.00, so the calibrated band is pH 4 to 10. The video's own readings put HCl at 2.03 and NaOH at 11.96, both outside the band. Scene 4 says "That way your readings fall **within** the range you calibrated", and scenes 11 and 18 and key notes 2 and 5 say "buffers that cover your readings". This is false for two of the five samples, and the video's results show it (B1). The design notices HCl only (Open decisions). A Nernstian electrode extends its calibration line beyond the outer buffers with a small error, which is why school practice with 4, 7 and 10 is acceptable; the honest teaching is "bracket as much of the range as you can".

## Chemistry claims

- Scene 2: "so any difference comes from the substance, not the amount dissolved": correct for the four acids and bases.
- Scene 3: "Hydronium ions in the solution produce a tiny voltage across that glass": acceptable at Year 12 (the potential depends on the hydronium difference across the glass, measured against a reference electrode).
- Scene 3: "the link between voltage and pH drifts as the probe ages, and it changes with temperature": correct.
- Scene 4: buffers "hold a known, steady pH": correct as a plain meaning.
- Scene 5: rinse with distilled water, blot gently, bulb fully in, swirl, wait for steady, three readings in fresh portions: correct.
- Scene 8: "Carbon dioxide from the air dissolves in water and forms a little carbonic acid, so water left open to the air really is slightly acidic": correct, but the step from carbonic acid to hydronium is only on screen (M1). The equation CO₂(g) + H₂O(l) ⇌ H₂CO₃(aq) is the HSC convention (most dissolved CO₂ stays as CO₂(aq)); fine.
- Scene 8: "Freshly boiled and cooled water reads closer to seven": correct, softened.
- Scene 9: "those decimals only mean something if the meter is calibrated": correct as a necessary condition.
- Scene 11 accuracy "calibrating with buffers that cover your readings": see B1.
- Scene 12: "Your teacher makes them from concentrated stocks, which are corrosive": many schools dilute from bench stocks of about 1 to 2 mol/L, and 1 to 2 mol/L HCl is not corrosive to skin (S2).
- Scene 12: "never stir with it, and don't let it hit the bottom of the beaker": correct electrode care.

## Hazard classifications

| Reagent | Strength (mass %) | Lowest cut-off (EU CLP Annex VI, matching GHS SDSs used in Australia) | Verdict |
| --- | --- | --- | --- |
| 0.010 mol/L NaOH | 0.040 % | Skin Irrit. 2 and Eye Irrit. 2 at 0.5 % | Not classified. Correct |
| 0.010 mol/L HCl | 0.036 % | Skin Irrit. 2, Eye Irrit. 2, STOT SE 3 at 10 %; suppliers' H290 applies to stock-strength acid | Not classified. Correct |
| 0.010 mol/L CH₃COOH | 0.060 % | Skin Irrit. 2 and Eye Irrit. 2 at 10 % | Not classified. Correct |
| 0.010 mol/L NH₃ | 0.017 % | STOT SE 3 (H335) at 5 %; skin corrosion at the generic 5 % (irritation 1 %); aquatic acute far above | Not classified. Correct |
| Concentrated HCl (about 32 to 37 %) | | H290, H314, H335 | Correct |
| Glacial acetic acid | | H226, H314 | Correct |
| Concentrated ammonia solution (25 to 35 %) | | H314, H335, H400 (some suppliers add H290, H302 or H411) | Correct as listed |
| Solid NaOH | | H290, H314 | Correct |
| pH 4, 7, 10 buffers | | usually not classified; some contain preservatives | "check the bottle's safety data sheet" is right |

"Too dilute to be classified as hazardous" is correct for all four. Australian workplaces apply GHS Revision 7 under the model WHS Regulations; the cut-offs agree.

## Exam style

A1 ("Explain the difference ... and describe how she should change her method") and A2 ("Evaluate this statement") use HSC verbs correctly, keep every condition visible and are original (no NESA paper wording found). A2 needs a judgement plus a reason, which matches "evaluate".

## Absolute claims

- Scene 4 "your readings fall within the range you calibrated" (B1; also false).
- Feedback 1 "they'd repeat the same contamination" (S1).
- Scene 12 "concentrated stocks, which are corrosive" (S2).
- YouTube description "find out why distilled water reads below 7" (M4).
- Scene 8 "The meter wasn't faulty" is true within the scenario; keep.

## Findings

### B1. Blocker: the calibrated range does not cover the video's own readings (scenes 4, 11, 18; key notes 2 and 5; memory aid check)

- Exact text (scene 4): "Start with the pH seven buffer, then pH four, and add pH ten because you'll measure bases too. That way your readings fall **within** the range you calibrated."
- Problem: HCl reads 2.03 and NaOH 11.96, both outside pH 4 to 10, and scene 7 puts them on the scale beside the band. A viewer who believes the narration will be confused by the screen, and an exam answer saying "buffers covering all readings" would be wrong for this method.
- Replacement narration (scene 4): "Start with the pH seven buffer, then pH four, and add pH ten because you'll measure bases too. That checks the meter on **both sides** of seven, across most of the readings you'll take."
- Scene 4 visual: change the cue word to "both sides"; both the HCl and NaOH ticks sit just outside the green band, with one grey tag: "just outside: the meter extends its line; pH 2 and 12 buffers would cover them".
- Scene 11: "That depends on calibrating with buffers either side of seven, as close to your readings as you can, at the right temperature."
- Scene 11 accuracy card: "Calibrate with buffers either side of 7, close to the readings; same temperature."
- Scene 18: "calibrate with buffers on both sides of seven, rinse and blot between samples, ..."
- Key note 2: "Calibrate the meter with buffers (pH 7.00, then 4.00 and 10.00), close to the readings, at the samples' temperature. ..."
- Key note 5: "Accuracy: calibration either side of 7, close to the readings, same temperature."
- Teaching checks and the memory aid check ("buffers covering the readings"): use the same wording.
- Open decision "HCl and calibration range": option (a) stands, extended to NaOH.

### S1. Should fix: feedback 1, the crossed mistake's reason

- Exact text: "Taking more readings wouldn't help: they'd repeat the same contamination."
- Problem: each unrinsed repeat in a fresh portion carries less NaOH, so the contamination is not "the same"; the point is that averaging cannot remove it.
- Replacement: "Averaging more readings wouldn't fix it: without rinsing, the carried-over hydroxide still pushes the average up."
- Crossed chip caption: "averaging keeps the contamination".

### S2. Should fix: scene 12, the stock solutions

- Exact text: "Your teacher makes them from concentrated stocks, which are corrosive."
- Replacement: "Your teacher or lab technician makes them up from stronger stocks, and the concentrated ones are **corrosive**."
- The risk row can stay ("concentrated stocks ...: corrosive, H314"; "prepared by the teacher").

### M1. Minor: scene 8, the step to hydronium

- The narration jumps from "forms a little carbonic acid" to "slightly acidic". Replacement: "**Carbon dioxide** from the air dissolves in water and forms a little **carbonic acid**, which gives a few hydronium ions to the water. So water left open to the air really is slightly acidic." (about 40 characters longer; the scene 8 boiled-water sentence is the listed reserve cut). Optionally add the screen line "H₂CO₃(aq) + H₂O(l) ⇌ HCO₃⁻(aq) + H₃O⁺(aq)", small and grey.

### M2. Minor: scene 7, the neutral point

- Add "(at 25 °C)" to the scale's "7" mark or to the bar-pair tags. Not spoken; the samples were measured at 25 °C.

### M3. Minor: hook reading against the table

- The hook shows "5.80"; the table's first water reading is 5.82. Show "5.82" in the hook (the narration "five point eight" still fits), so the opening reading is one of the class's results.

### M4. Minor: YouTube description

- Replacement: "... find out why distilled water left open to the air reads below 7, ..."

### M5. Minor: author note, buffer temperature

- Add to author note (a): "Buffer values also change with temperature (the pH 10.01 buffer is about 10.06 at 20 °C; the pH 7.00 buffer about 7.02), so meters use the buffer's temperature table; another reason to calibrate at the samples' temperature."

### M6. Minor: author note (e), significant figures in A2

- Replace "10^2.0 = 1.0 × 10²" with "10^2.0 = 1 × 10² (one decimal place in the difference gives 1 s.f.)". The narration "about a hundred" is right.

### M7. Minor: A1 meter readout

- The meter shows two decimal places elsewhere. Show "9.21" on the meter plate in scene 14, with the question text keeping "9.2", or show "9.2" on a hand-recorded results chip instead of the meter.

### M8. Minor: scene 11 footer quotes the glossary loosely

- Replacement: "NESA glossary, reliability: 'An extent to which repeated observations and/or measurements taken under identical circumstances will yield similar results.'" (2017 syllabus glossary wording, `research/exam-skills/vra-definitions.md`). Or keep the paraphrase and drop "NESA glossary:" for "Reliability means:".

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ2-01 (page 53)
- Harris, Quantitative Chemical Analysis: glass electrode response, Nernst slope, calibration, CO₂ in water
- Mettler Toledo, A Guide to pH Measurement (calibration, temperature, low-ionic-strength samples, electrode care): https://www.mt.com/au/en/home/library/guides/lab-analytical-instruments/pH-guide.html
- Hach, pH electrode care and calibration guidance: https://www.hach.com/
- Sander, Compilation of Henry's law constants (CO₂ at 25 °C, about 3.4 × 10⁻² mol L⁻¹ atm⁻¹), Atmos. Chem. Phys. 15, 4399 (2015)
- NOAA Global Monitoring Laboratory, atmospheric CO₂ (about 420 to 425 ppm): https://gml.noaa.gov/ccgg/trends/
- Regulation (EC) No 1272/2008 (CLP), Annex VI, entries for sodium hydroxide, hydrochloric acid, acetic acid and ammonia solution, via the ECHA C&L Inventory: https://echa.europa.eu/information-on-chemicals/cl-inventory-database
- Sigma-Aldrich and Merck SDSs: hydrochloric acid 37 %, acetic acid glacial, ammonia solution 25 %, sodium hydroxide pellets
- Safe Work Australia, GHS Revision 7 transition: https://www.safeworkaustralia.gov.au/safety-topic/hazards/chemicals/classifying-chemicals/ghs-7

## Verdict

**Not ready to voice until B1 is fixed.** B1, S1 and S2 change narration and must be applied before recording. M1 to M8 are cheap and should be applied. The Codex error check is still required.

## Resolution

Resolved by the author in Revision 2 (21 Oct), `lessons/chem-m6-p03.md`. Narration 6,268 characters by script count (method in the design), about 9.5 minutes.

- **B1 (calibrated range does not cover the readings): fixed, with the learning review's B1 as one fix.** I combined the two repairs. From the learning review: the calibration line ("The meter draws a straight line through those known points ... Buffers on both sides of seven check the line for acids and for bases"), with a coded calibration graph and the cue on "both sides". From this check: the honest limit. The HCl and NaOH positions sit on the dashed extensions, grey tag "readings near 2 and 12 use the same line, extended". Author note (a) says pH 2 and 12 buffers would cover them. Scene 11: "calibration: buffers on both sides of seven, as close to your readings as you can, at your samples' temperature". Accuracy card: "Calibrate with buffers either side of 7, close to the readings; same temperature". Scene 18: "calibrate with buffers on both sides of seven". Key note 2: "buffers on both sides of 7, as close to the readings as possible (pH 7.00, then 4.00 and 10.00), at the samples' temperature". Key note 5: "calibration with buffers either side of 7, close to the readings, same temperature". The teaching checks and memory aid check use the same wording. Open decision "Calibration range" is closed with option (a), extended to NaOH.
- **S1 (feedback 1 crossed reason): fixed.** "Averaging more readings wouldn't fix it: without rinsing, the carried-over hydroxide still pushes the average up." Chip caption "averaging keeps the contamination". The A1 answer in Decisions is updated to match.
- **S2 (stocks): fixed, shortened for length.** "They're made up from stronger stocks, and the concentrated ones are corrosive." Your "teacher or lab technician" is moved to the risk row ("prepared by the teacher or technician"), which saves spoken characters. The Safety facts check records why.
- **M1 (step to hydronium): applied.** "which gives a few hydronium ions to the water. So water left open to the air really is slightly acidic." The optional grey line "H₂CO₃(aq) + H₂O(l) ⇌ HCO₃⁻(aq) + H₃O⁺(aq)" is added small under the first equation. The boiled-water sentence is cut (learning review S3) to pay for it.
- **M2 (neutral at 25 °C): applied.** The scale mark reads "7 (neutral at 25 °C)"; not spoken.
- **M3 (hook 5.82): applied, with the learning review's M1 as one fix.** Readout "5.82"; narration "five point eight two".
- **M4 (YouTube): applied.** "why distilled water left open to the air reads below 7".
- **M5 (buffer temperature): applied** to author note (a), with the calibration-line note.
- **M6 (A2 significant figures): moot.** The learning review's S4 replaced that attempt (3.4 against 5.4), so the "1.0 × 10²" sentence is removed from author note (e). The retirement is recorded under "Numbers to verify". The new A2's figures are in author notes (e) and (i). Please confirm on re-check: one-point calibration at pH 7.00 with a probe at about 94 percent slope reads 2.30 to 2.32 for a solution that reads 2.03 after a two-point calibration. Check: displayed = 7.00 − s × 4.97, so 2.31 gives s = 0.944.
- **M7 (A1 readout): applied.** The meter shows "9.21"; the question text keeps "9.2".
- **M8 (glossary footer): applied (second option).** "Reliability means: repeated measurements under identical circumstances give similar results." This is the same wording as P02.

Gates still open: the Codex error-only check, including the "(R2)" items and the reference facts now marked confirmed for the owner record. Human listening pending.
