# m6p02 science check (chem-m6-p02, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-p02.md` (Revision 1), proposal text only, the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`, `lessons/chem-m6-c03.md` (for the q rounding convention and the reference-value note) and `research/exam-skills/vra-definitions.md` (NESA glossary wording). Every number was recomputed with a Python script (21 Oct). The script covered:

- the logged run, the cooling line and its extrapolation;
- the worked example, the highest-reading comparison and the three repeats;
- the A1 graph, its line, its answer and its crossed answer, and the A2 implied rise;
- the heat capacity of the final mixture against the pure-water assumption;
- the percentage by mass of 1.00 mol/L NaOH and HCl, for the GHS cut-offs.

No audio, stills, site files or design files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `C6-IQ1-05` (page 52, practical): "conduct a practical investigation to measure the enthalpy of neutralisation (ACSCH093)". The design text and the YouTube description match the ledger exactly. The boundary says watching is not conducting, which is right.

## Em dashes

None found (U+2014 count 0).

## Reference values

| Claim in design | Recomputed or looked up | Verdict | Source |
| --- | --- | --- | --- |
| About −57 kJ/mol for a strong acid with a strong base | Textbook values are −57.1 to −57.3 kJ/mol at room temperature and finite dilution. The standard value at infinite dilution and 25 °C is −55.8 kJ/mol (ΔfH H₂O(l) −285.83, OH⁻(aq) −229.99 kJ/mol) | Correct as the HSC convention (C03 author note a already records the −55.8 value) | NIST/NBS tables; C03 note a |
| Final mixture about 0.50 mol/L NaCl, density about 1.02 g/mL | 0.050 mol in about 100 mL; density about 1.018 g/mL at 25 °C | Correct | CRC Handbook, concentrative properties of aqueous solutions |
| Its specific heat capacity "about 4.0 J g⁻¹ °C⁻¹" (author note d) | About 4.03 J g⁻¹ °C⁻¹ (0.5 mol/kg, 25 °C, from the apparent molar heat capacity of NaCl, about −58 J K⁻¹ mol⁻¹) | Slightly low; direction right (see M1) | Pitzer, Peiper and Busey (1984); Archer (1992) |
| "m × c a few per cent below 100.0 g × 4.18" (author note d) | Real mass: 50.0 × 1.016 (1 mol/L HCl) + 50.0 × 1.041 (1 mol/L NaOH) = 102.9 g. Real heat capacity 102.9 × 4.03 = 414.5 J/°C against 418.0 J/°C assumed: 0.8 % lower | Direction right, size smaller (M1) | CRC densities |
| Effect of the pure-water assumption on ΔH | The assumed mass is too small (pushes ΔH less negative) and the assumed c is too large (pushes more negative). Net: q is overestimated by about 0.8 %, so ΔH comes out about 0.4 kJ/mol **more negative** (−55.18 → about −54.7 kJ/mol corrected) | The author's direction is confirmed. The error is real but very small, and it has a definite direction for this mixture | as above |

## Logged run and extrapolation (scenes 4 to 6)

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Average starting temperature | 21.5 °C | (21.4 + 21.6) ÷ 2 = 21.5; equal volumes and nearly equal heat capacities, so the simple mean is right | Correct |
| Cooling line | T = 28.1 − 0.20t | Passes exactly through all ten points from 1.5 to 7.0 min | Correct |
| 1.0 min point | 27.8, 0.1 below the line | Line gives 27.9 | Correct |
| Extrapolated value at t = 0 | 28.1 °C | 28.1 | Correct |
| Physical plausibility | linear cooling | Newton cooling from an excess of 6.3 °C at k ≈ 0.032 min⁻¹ gives 26.8 °C at 7.0 min against 26.7 on the line: within one reading's resolution | Plausible |
| Extrapolation logic (scene 6) | extend the cooling line to the moment of mixing; assumes the same cooling rate during the rise | This is the standard method. In practice the mixture is cooler during the rise than at the peak, so it loses heat a little more slowly then, and the extrapolation can over-correct slightly | Correct as taught; M3 records the over-correction for the author notes |

## Worked example (scene 7) and repeats (scene 10)

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| ΔT (extrapolated) | 6.6 °C | 28.1 − 21.5 | Correct (2 s.f.) |
| q | 2758.8 J, said "about two thousand seven hundred and fifty nine" | 100.0 × 4.18 × 6.6 = 2758.8 J | Correct as an unrounded intermediate; the C03 "keep the digits; round at the end" tag is missing here (M2) |
| n(H₂O) | 0.0500 mol | 1.00 × 0.0500; 1 : 1, equal amounts | Correct (3 s.f.) |
| ΔH | −55.18 → −55 kJ/mol | −2.7588 ÷ 0.0500 = −55.176 | Correct (2 s.f. from ΔT) |
| Highest reading | ΔT 6.3 °C, −53 kJ/mol | 2633.4 J; −52.668 → −53 | Correct |
| Ideal rise at −57 | 6.82 °C | 2850 ÷ 418 = 6.818 | Correct (author note) |
| Repeats | −55, −54, −56; mean −55; each within 0.84 of the mean | ΔT 6.6, 6.5, 6.7: −55.176, −54.340, −56.012; mean −55.176 | Correct |
| "Closer" to −57 (number line) | −55 closer than −53 | yes | Correct |

## Attempt 1 and attempt 2

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| A1 cooling line | T = 27.4 − 0.20t through 1.5 to 5.0 min | 27.1, 27.0, 26.8, 26.6, 26.4: all on the line | Correct |
| A1 extrapolated value | 27.4 °C (on a 0.2 °C grid line) | 27.4 | Correct and readable |
| A1 answer | ΔT 6.5 °C; q 2717 J; −54 kJ/mol | −54.34 → −54 | Correct |
| A1 crossed | 27.1 °C; ΔT 6.2 °C; −52 kJ/mol | 2591.6 J; −51.83 → −52 | Correct, and correctly crossed |
| A1 reading tolerance | not stated | A line read at 27.3 to 27.5 °C gives −53.5 to −55.2 kJ/mol | M4 |
| A1 equation (author) | HNO₃(aq) + KOH(aq) → KNO₃(aq) + H₂O(l) | balanced | Correct |
| A2 implied rise | about 5.5 °C, about 81 % of ideal | 2300 ÷ 418 = 5.50 °C | Plausible for an uncovered glass beaker |

## Which errors push which way

| Error | Effect on ΔT | Effect on ΔH | In design |
| --- | --- | --- | --- |
| Heat lost through the walls and open top | too small | less negative | Scene 9, A2 (correct) |
| Heat absorbed by the cup, lid and probe (calorimeter heat capacity ignored) | too small | less negative | Scene 9 (correct) |
| Slow pour or incomplete mixing (peak reached later, more loss) | too small | less negative | not named (fine) |
| NaOH weakened by absorbed CO₂ (fewer moles react than 0.0500) | too small | less negative | not named (fine) |
| Starting temperature recorded too low (for example the cooler acid's 21.4 °C used alone) | too large | **more negative** | Scene 3 sets this up ("a warm base would raise the temperature even with no reaction") but scene 9 does not use it (S1) |
| Starting temperature recorded too high | too small | less negative | not named (fine) |
| Mixture treated as pure water (100.0 g, 4.18) | none | about 0.8 % **more negative** here | Scene 9 says "can go either way" (S1) |
| Linear extrapolation to t = 0 over-corrects slightly | slightly too large | slightly more negative | Not named (M3, author note only) |

So the site's "every error makes ΔHn less negative" is wrong, as site correction 1 says. Two errors here push the other way with a definite direction: a starting temperature recorded too low, and (very slightly) the pure-water assumption.

## Chemistry claims

- "Heat starts escaping the moment it's made, so by the time the reading peaks, some is already gone": correct.
- "That's partly why the last video's answer fell short of minus fifty seven": correct; C03 worked example 1 gave −54 kJ/mol and named heat loss.
- "Foam is full of trapped air, so it lets very little heat through": correct.
- "A lid stops warm air and vapour carrying heat away": a lid reduces this loss but does not stop it (M5).
- Measuring cylinders "because the moles and the mass both come from those volumes": correct.
- "use the average ... because you're mixing equal volumes": correct.
- "So that peak is lower than the temperature the mixture would have reached if no heat had escaped": correct.
- "That's our best estimate of the temperature with no heat lost": correct, and the assumption is stated.
- Scene 8, a repeated measurement with nothing deliberately changed: correct.
- Scene 10 validity: "equal starting temperatures" contradicts scene 3, where the two starting temperatures differ (21.4 and 21.6 °C) and are averaged (S3).
- Scene 10 reliability and accuracy: correct. "Repeats can't fix that. Cutting heat loss can": correct for a systematic error.
- Feedback 2: "Glass conducts heat well" is an absolute claim. Glass is a poor conductor in absolute terms (about 1 W m⁻¹ K⁻¹), but it conducts about 30 times better than expanded polystyrene (about 0.03 W m⁻¹ K⁻¹). The beaker also absorbs a large share of the heat: a 100 mL beaker holds about 50 g of glass at 0.84 J g⁻¹ °C⁻¹, about 42 J/°C, which is 10 % of the solution's 418 J/°C (S2).
- Scene 11 and the key notes: hazards and controls are correct (see the next section).

## Hazard classifications

| Reagent | Strength | Cut-off (EU CLP Annex VI, matching the GHS classifications used in Australian SDSs) | Verdict |
| --- | --- | --- | --- |
| 1.00 mol/L NaOH | 40.0 g/L ÷ about 1041 g/L = 3.8 % | Skin Corr. 1A ≥ 5 %; Skin Corr. 1B 2 % to < 5 %; Skin Irrit. 2 and Eye Irrit. 2 0.5 % to < 2 % | Skin Corr. 1B, H314; suppliers add H290 (Met. Corr. 1). Design correct |
| 1.00 mol/L HCl | 36.5 g/L ÷ about 1016 g/L = 3.6 % | Skin Corr. 1B ≥ 25 %; Skin Irrit. 2, Eye Irrit. 2 and STOT SE 3 at 10 % to < 25 % | Not classified for skin or eyes; suppliers give H290 only. "Low hazard at this strength, but keep it out of your eyes" is right. Design correct |
| Final mixture (about 0.5 mol/L NaCl) | about 2.9 % NaCl | not classified | Design correct |

The mixture reaches about 28 °C, so no thermal hazard; correct. Australian workplaces apply GHS Revision 7 under the model WHS Regulations (from 1 January 2023); the cut-offs above agree with that.

## Exam style

A1 ("Use the graph to determine the temperature change, then calculate ...") and A2 ("Identify ..., explain its effect ..., and suggest one improvement") use HSC Section II verbs and structure, give every condition, and are original (no NESA paper wording found). A2 with an uncovered glass beaker is a common textbook scenario but not copied wording.

## Absolute claims

- Scene 2 "A lid stops warm air ..." (M5).
- Feedback 2 "Glass conducts heat well" (S2).
- YouTube description "never shows the full temperature rise" (M6). "A temperature you never actually see" in the hook is rhetorical and true in practice; keep.

## Findings

No blockers.

### S1. Should fix: scene 9's counter-example has no direction (narration, screen row, key note 4)

- Exact text (scene 9): "Most errors here push the same way, but **not every one**: treating the mixture as pure water is a small error that can go either way."
- Problem: the only error offered against the site's "always less negative" claim is one the video will not give a direction for. A learner leaves without seeing any error that makes ΔH more negative. Scene 3 already taught a clear one (a warmer base raises the temperature without reacting). For this mixture the pure-water assumption does have a direction: about 0.8 % more negative (table above).
- Replacement narration: "Most errors here push the same way, but **not every one**: if you used only the cooler acid's starting temperature, delta T would come out too big, and delta H too negative."
- Replacement third screen row: "starting temperature recorded too low: ΔT ↑, q ↑, ΔH more negative" (with up arrows, not grey "↕").
- Optional fourth grey row, small: "pure-water assumption: about 1 %, here slightly more negative".
- Key note 4 replacement: "4. Errors: source → ΔT → q → ΔH. Heat loss and heat absorbed by the cup and probe make ΔH less negative. Not every error does: a starting temperature recorded too low makes ΔH more negative. Never "human error"."
- Similar length (the narration replacement is about 15 characters longer).

### S2. Should fix: feedback 2, "Glass conducts heat well"

- Exact text: "Glass conducts heat well and the top is open, so heat escapes to the air."
- Replacement: "Glass lets heat through far more easily than foam, the beaker soaks up heat itself, and the top is open, so heat escapes."
- The answer chip can stay "heat loss; lidded foam cup + extrapolation".

### S3. Should fix: scene 10, "equal starting temperatures"

- Exact text: "equal starting temperatures, an insulated lidded cup, and extrapolation."
- Problem: scene 3 measures two different starting temperatures and averages them, so the solutions need not be equal.
- Replacement narration: "both starting temperatures measured, an insulated lidded cup, and extrapolation."
- Replacement on the validity card: "(both start temperatures measured, lid, foam, extrapolation)". Scene 17's "a measured, matching temperature" can stay.

### M1. Minor: author note (d), size of the heat capacity effect

- Replace "specific heat capacity a little below water's, about 4.0 J g⁻¹ °C⁻¹ ... The product m × c is then a few per cent below 100.0 g × 4.18" with: "specific heat capacity about 4.03 J g⁻¹ °C⁻¹ (0.5 mol/kg, 25 °C; Pitzer et al. 1984). The real mass is about 102.9 g (1 mol/L HCl 1.016 g/mL, 1 mol/L NaOH 1.041 g/mL), so m × c is about 414.5 J/°C against 418.0 J/°C assumed: 0.8 % lower. The assumed mass is too small and the assumed c too large; the c effect wins, so q is slightly overestimated and ΔH comes out about 0.4 kJ/mol more negative (confirmed by the science check, 21 Oct)."
- Open decision "Heat capacity direction" can then close: direction confirmed, but S1 uses the starting-temperature example instead.

### M2. Minor: q shown to five significant figures without the C03 tag (scene 7, key note 3)

- C03 scene 7 shows "q = ... = 2717 J = 2.717 kJ" with a grey tag "keep the digits; round at the end". Scene 7 here has no tag, and key note 3 tells students to copy "q = 2758.8 J".
- Replacement: add the same grey tag "keep the digits; round at the end" to scene 7's q line. Key note 3: "q = 2758.8 J (kept unrounded)".

### M3. Minor: author note, extrapolation can over-correct

- Add to author note (c): "Linear extrapolation to t = 0 can over-correct slightly, because the mixture is cooler during the rise and loses heat more slowly then; this pushes ΔH slightly more negative. Not learner copy."

### M4. Minor: A1 feedback tolerance

- Add a small grey tag beside the answer chip in scene 14: "a line read at 27.3 to 27.5 °C gives about −53 to −55 kJ/mol". Not spoken.

### M5. Minor: scene 2, "A lid stops"

- Replacement: "A **lid** cuts the heat carried away by warm air and vapour, with holes for the temperature probe and a stirrer."

### M6. Minor: YouTube description, "never shows"

- Replacement first sentence: "The thermometer in a foam cup doesn't show the full temperature rise, because heat escapes from the moment it is made."

### M7. Minor: scene 10 footer quotes the glossary loosely

- The footer reads as a NESA quotation but paraphrases it. Replacement: "NESA glossary, reliability: 'An extent to which repeated observations and/or measurements taken under identical circumstances will yield similar results.'" (wording from `research/exam-skills/vra-definitions.md`, 2017 syllabus glossary). Or keep the paraphrase and drop "NESA glossary:" for "Reliability means:".

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ1-05 (page 52)
- Wagman et al., The NBS Tables of Chemical Thermodynamic Properties (1982): ΔfH of H₂O(l) and OH⁻(aq)
- Pitzer, Peiper and Busey, Thermodynamic properties of aqueous sodium chloride solutions, J. Phys. Chem. Ref. Data 13, 1 (1984): https://srd.nist.gov/jpcrdreprint/1.555709.pdf
- Archer, Thermodynamic properties of the NaCl + H₂O system, J. Phys. Chem. Ref. Data 21, 793 (1992)
- Rossini, heat capacities of aqueous chlorides, NBS J. Res. 7, 47 (1931): https://nvlpubs.nist.gov/nistpubs/jres/7/jresv7n1p47_A2b.pdf
- CRC Handbook of Chemistry and Physics: concentrative properties of aqueous solutions (densities of HCl, NaOH and NaCl solutions); thermal conductivities of glass and polystyrene foam
- Regulation (EC) No 1272/2008 (CLP), Annex VI, entries for sodium hydroxide (011-002-00-6) and hydrochloric acid (017-002-01-X), via the ECHA C&L Inventory: https://echa.europa.eu/information-on-chemicals/cl-inventory-database
- Sigma-Aldrich SDS, sodium hydroxide solution 1 mol/L (H290, H314); hydrochloric acid 1 mol/L (H290)
- Safe Work Australia, GHS Revision 7 transition: https://www.safeworkaustralia.gov.au/safety-topic/hazards/chemicals/classifying-chemicals/ghs-7

## Verdict

**Ready to voice after fixes.** S1 to S3 change narration and must be applied before recording. M1 to M7 are cheap and should be applied. The Codex error check is still required.

## Resolution

Resolved by the author in Revision 2 (21 Oct), `lessons/chem-m6-p02.md`. No blockers were raised. Narration 6,279 characters by script count (method in the design), about 9.5 minutes.

- **S1 (the counter-example has no direction): fixed, with the learning review's S2 as one fix.** Scene 9 narration uses the check's replacement: "if you used only the cooler acid's starting temperature, delta T would come out too big, and delta H too negative". Screen row "starting temperature too low (only the acid's 21.4 °C used)" with up arrows "ΔT ↑, q ↑, ΔH more negative". Key note 4 uses the check's wording. **Optional fourth grey row ("pure-water assumption: about 1 %") declined.** It would make a fourth text row during new reasoning, and an effect of about 0.4 kJ/mol does not change what a student should write. Its size and direction stay in author note (d) and site correction 1, with no "a few per cent" claim anywhere.
- **S2 ("Glass conducts heat well"): fixed, merged with the learning review's M3.** "Glass lets heat through far more easily than foam, the beaker soaks up some heat itself, and the open top lets warm air escape." The answer chip is unchanged.
- **S3 ("equal starting temperatures"): fixed, with the learning review's S4 as one fix.** Scene 10: "both starting temperatures averaged"; validity card "(both start temperatures measured and averaged, lid, foam, extrapolation)". Scene 17's "measured, matching temperature" is also replaced ("measure and average both starting temperatures"), which the check allowed to stay, so scenes 3, 10 and 17 give one instruction.
- **M1 (author note d): applied.** Your figures are now in author note (d): 4.03 J g⁻¹ °C⁻¹, real mass about 102.9 g, m × c 414.5 against 418.0 J/°C (0.8 % lower), ΔH about 0.4 kJ/mol more negative (about −54.7 kJ/mol corrected). Open decision "Heat capacity direction" is closed. Arithmetic repeated under "Numbers to verify (R2)" (102.85 g; 1.0084; −54.71).
- **M2 (q tag): applied.** Scene 7's q line carries the grey C03 tag "keep the digits; round at the end"; key note 3 reads "q = 2758.8 J (kept unrounded)".
- **M3 (extrapolation over-corrects): applied** to author note (c) as not learner copy.
- **M4 (A1 tolerance): applied, with corrected rounding.** Grey unspoken tag in scene 14: "line read at 27.3 to 27.5 °C: −54 to −55 kJ/mol". At 2 s.f., 27.3 °C gives −53.504 → −54 (not "about −53") and 27.5 °C gives −55.176 → −55. Arithmetic added to "Numbers to verify".
- **M5 ("A lid stops"): applied.** "A lid cuts the heat carried away by warm air and vapour". The probe and stirrer holes clause is cut for length (learning review M4); the plate shows the holes. The screen tag and key note 1 now read "lid: less heat lost to the air" and "lid cuts heat loss to the air". The scene 12 aid line "A lid keeps the heat in" also became "A lid keeps more heat in".
- **M6 (YouTube "never shows"): applied.** "The thermometer in a foam cup doesn't show the full temperature rise".
- **M7 (glossary footer): applied (second option).** "Reliability means: repeated measurements under identical circumstances give similar results." The paraphrase is no longer presented as a NESA quotation, and the shorter text keeps the reading load down. P03 uses the same footer.

Gates still open: the Codex error-only check (including the "(R2)" items and the reference facts now marked confirmed for the owner record). Human listening pending.
