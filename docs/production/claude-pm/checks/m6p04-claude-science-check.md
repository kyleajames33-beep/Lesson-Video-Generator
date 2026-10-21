# m6p04 science check (chem-m6-p04, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-p04.md` (Revision 1), proposal text only, the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`, `lessons/chem-m6-c05.md` and `lessons/chem-m6-p03.md` (for the recalled values), and the earlier checks `checks/m6c05-claude-science-check.md`, `checks/m6c10-claude-science-check.md` and `checks/m6p03-claude-science-check.md` (for the series' reference values and hazard conventions). Every number was recomputed with a Python script (21 Oct). The script covered:

- ideal pH of 0.100 and 0.0100 mol/L HCl, ethanoic acid, ammonia and NaOH (exact quadratic for the weak species);
- the Davies activity correction at both ionic strengths;
- the class means, ranges, changes and the P03 comparison;
- the strong-weak ratio from the readings, from ideal values and at 0.0100 mol/L;
- how the weak-acid change grows as the acid becomes very dilute;
- A1 and A2 data, answers and crossed answers;
- the percentage by mass of each 0.100 mol/L solution, for the GHS cut-offs.

No audio, stills, site files or design files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `C6-IQ2-03` (page 53, practical): "conduct an investigation to demonstrate the use of pH to indicate the differences between the strength of acids and bases (ACSCH102)". The design text and the YouTube description match the ledger exactly. The boundary says watching is not conducting, which is right.

## Em dashes

None found (U+2014 count 0; U+2013 count 0).

## Reference values

| Claim in design | Recomputed or looked up | Verdict | Source |
| --- | --- | --- | --- |
| Ethanoic acid Ka 1.8 × 10⁻⁵ | CRC 1.75 × 10⁻⁵ (pKa 4.76); 1.8 × 10⁻⁵ is the series' HSC value (C10 check) | Correct as the series convention | CRC; m6c10 check |
| Ammonia Kb 1.8 × 10⁻⁵ | CRC 1.8 × 10⁻⁵ (pKb 4.75) | Correct | CRC |
| Methanoic acid Ka about 1.8 × 10⁻⁴ | CRC 1.77 × 10⁻⁴ (pKa 3.75) | Correct | CRC |
| pH 1.68 and 12.45 standard buffers exist | NIST SRM potassium tetroxalate 1.679 and saturated calcium hydroxide 12.454 at 25 °C | Correct | NIST SRM certificates; IUPAC 2002 pH recommendations |
| Mean ionic activity coefficient of 0.1 mol/L HCl | about 0.80 (tabulated 0.796); Davies 0.78; extended Debye-Hückel log γ = −0.083 gives pH 1.08 | Author note (b) is right that a meter reads above 1.00 | aqion pH and activity corrections; Robinson and Stokes tables |

## Ideal and measured-style values

| Solution | Ideal pH (25 °C) | Activity-corrected (Davies) | Design class mean | Verdict |
| --- | --- | --- | --- | --- |
| 0.100 mol/L HCl | 1.00 | 1.11 | 1.04 | Plausible but at the low edge (S1) |
| 0.100 mol/L CH₃COOH | 2.875 → 2.88 (1.33 % ionised) | 2.89 | 2.90 | Realistic |
| 0.100 mol/L NH₃ | 11.125 → 11.12 | 11.11 | 11.10 | Realistic |
| 0.100 mol/L NaOH | 13.00 | 12.89 | 12.95 | Plausible but high; sodium (alkaline) error and absorbed CO₂ both push real readings lower (S1) |
| 0.0100 mol/L HCl | 2.00 | 2.04 | 2.04 | Realistic (matches the activity value) |
| 0.0100 mol/L CH₃COOH | 3.382 → 3.38 (4.15 % ionised) | 3.39 | 3.39 | Realistic |
| 0.0100 mol/L NH₃ | 10.618 → 10.62 | 10.61 | 10.60 | Realistic |
| 0.0100 mol/L NaOH | 12.00 | 11.96 | 11.95 | Realistic |

Means and ranges: (1.03 + 1.05 + 1.04) ÷ 3 = 1.04; 2.90; 12.95; 11.10; diluted 2.04, 3.39, 11.95, 10.60. Ranges 0.02, 0.02, 0.03, 0.02. All correct. P03 matches within 0.01 for all four: correct.

## Changes on tenfold dilution

| Item | Design | Recomputed | Verdict |
| --- | --- | --- | --- |
| Dilution factor | 10.00 mL to 100.0 mL; 0.100 × 10.00 ÷ 100.0 = 0.0100 mol/L | Correct, 3 s.f. | Correct |
| Strong acid change (ideal) | +1.00 | +1.00 | Correct |
| Strong acid change (activity, what a meter sees) | design shows +1.00 | 1.107 → 2.045: **+0.94** | The design's pair mixes an almost-ideal 1.04 with an activity-realistic 2.04 (S1) |
| Strong base change | −1.00 | ideal −1.00; activity 12.893 → 11.955: **−0.94** | as above (S1) |
| Weak acid change | +0.49 | ideal 2.875 → 3.382: +0.51; activity +0.50 | Correct |
| Ammonia change | −0.50 | ideal −0.51 | Correct |
| "About half" from √10 | log 3.16 = 0.50 | correct while the acid is mostly un-ionised | Correct |
| Very dilute weak acid | condition tag "weak acid mostly un-ionised" | 0.0010 → 0.00010 mol/L: +0.56; 0.00010 → 0.000010 mol/L: +0.68; tends to 1 | The tag is needed and right (M3) |

### Dilution reasoning

- Strong acid (scene 8): "already completely ionised ... the same hydronium ions through ten times the volume, so a tenth as much hydronium in each litre. A tenth is one pH unit." Correct, while the acid is far more concentrated than water's own 10⁻⁷ mol/L (true here). The bank aid "Dilution can't cross pH 7" covers the limit.
- Weak acid (scene 9): "a bigger fraction of its molecules ionise ... partly make up for the dilution ... falls by much less than ten times". Correct (Ostwald dilution: the reverse step needs two ions to meet, and dilution slows it more than the forward step). The learning review's S2 gives the cause in Module 5 terms; that wording is also scientifically correct.
- Bases (scene 10): "Ammonia only partly reacts with water, so diluting it lets more molecules react". Correct. The design gives no hydroxide factor, rightly (that needs Kw, C07).

## The ratio "about 70" against C05's "about 80"

| Basis | Ratio |
| --- | --- |
| These readings, 1.04 and 2.90 (1.86 units) | 10^1.86 = 72 |
| Ideal values at 0.100 mol/L (0.100 ÷ 1.333 × 10⁻³) | 75 |
| C05 readings, 1.0 and 2.9 (1.9 units) | 79 |
| With the S1 data, 1.08 and 2.90 (1.82 units) | 66 |
| At 0.0100 mol/L (P03; 0.0100 ÷ 4.15 × 10⁻⁴) | 24 |

Both "about seventy" and C05's "about eighty" are honest roundings of a true value near 75, and scene 5 says "from these readings". No change needed. "About seventy" still holds with the S1 data (66). The real risk of confusion is P03's "twenty three times" for the same pair at 0.010 mol/L, which the learning review (S1) resolves: the gap depends on concentration.

## Attempts

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| A1: 0.50 mol/L HCOOH (Ka 1.8 × 10⁻⁴) | pH 2.03 | [H₃O⁺] 9.40 × 10⁻³ mol/L, pH 2.027 → 2.03 (1.9 % ionised) | Correct |
| A1: 0.0020 mol/L HNO₃ | pH 2.70 | 2.699 → 2.70 | Correct |
| A1: concentration ratio | 250 | 0.50 ÷ 0.0020 = 250 (2 s.f.) | Correct |
| A1: both at 0.100 mol/L | HNO₃ 1.00, HCOOH 2.38 | 1.00; 2.382 → 2.38 | Correct; "nitric acid would then read lower" holds |
| A2: weak acid reading pH 2.40 | c about 0.88 mol/L (Ka 1.8 × 10⁻⁵) | 0.884 mol/L | Correct |
| A2: diluted | pH 2.90 | 2.902 → 2.90 | Correct |
| A2: strong comparison | 3.40 | 3.98 × 10⁻⁴ mol/L, pH 3.40 | Correct |
| A2: change | 0.50 | 2.90 − 2.40 | Correct (2 decimal places) |
| A2: "monoprotic" | included | needed so a diprotic acid's second step cannot confuse the test | Correct |

## Chemistry claims

- "every hydrochloric acid molecule gives its proton to water, but only a small fraction of ethanoic acid molecules do": correct (1.3 % at 0.100 mol/L).
- "That's exactly tenfold dilution, whatever the starting concentration was": correct (the factor depends only on the volumes).
- "the second one doesn't trust the label at all" (hook): true of the dilution factor, but the half-unit result needs the weak acid to be mostly un-ionised (M3).
- Scene 3: readings near 1 and 13 lie outside a 4 to 10 calibration: correct.
- Scene 10 "Two sessions, same results": the values match within 0.01, not exactly (M2).
- Scene 12 "the conclusions rest on big gaps ... so they still hold": correct; the gaps (about 1.8 units, and about 1.0 against 0.5) are far larger than the calibration uncertainty (a few hundredths to about 0.1).
- Equations: HCl(aq) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq) and CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq): balanced in atoms and charge.
- Feedback 2 "that only happens when an acid is partly ionised": correct (a strong acid has nothing left to ionise).

## Hazard classifications

| Reagent | Strength (mass %) | Lowest cut-off (EU CLP Annex VI specific limits, used by most SDSs sold in Australia) | Verdict |
| --- | --- | --- | --- |
| 0.100 mol/L NaOH | 0.40 % | Skin Irrit. 2 (H315) and Eye Irrit. 2 (H319) at 0.5 % to < 2 %; Skin Corr. 1B 2 % to < 5 %; 1A ≥ 5 % | Not classified by the specific limits; "just below the irritant limit" is right. But the screen claim "some supplier sheets label it H315, H319" was not confirmed: supplier sheets found range from not classified (ALS, 0.1 M) through H290 only (Agilent Australia, 0.1 N) to H314 (American Elements). See S2 |
| 0.100 mol/L HCl | 0.36 % | Skin Irrit. 2, Eye Irrit. 2 and STOT SE 3 at 10 % to < 25 % | Not classified. Correct |
| 0.100 mol/L CH₃COOH | 0.60 % | Skin Irrit. 2 and Eye Irrit. 2 at 10 % to < 25 % | Not classified. Correct |
| 0.100 mol/L NH₃ | 0.17 % | STOT SE 3 (H335) at ≥ 5 %; skin corrosion and irritation well above | Not classified. Correct |
| Diluted 0.0100 mol/L solutions | ten times lower | | Not classified. Correct |
| Concentrated HCl | about 32 to 37 % | H290, H314, H335 | Correct |
| Glacial ethanoic acid | | H226, H314 | Correct |
| Concentrated ammonia (25 to 35 %) | | H314, H335, H400 | Correct |
| Solid NaOH | | H290, H314 | Correct; "corrosive" true of all four stocks |

Australian workplaces apply GHS Revision 7 under the model WHS Regulations (from 1 January 2023). The EU specific concentration limits are what most SDSs here reproduce; under the GHS extreme-pH criterion (pH ≤ 2 or ≥ 11.5) some suppliers classify dilute acids and bases more strictly, which is why sheets vary. "Follow your school's risk assessment and each bottle's safety data sheet" covers this and should stay. Pipette filler and no mouth pipetting: correct.

## Exam style

A1 ("Evaluate her conclusion and describe how she should change her method") and A2 ("Determine whether the acid is strong or weak. Justify your answer.") use HSC Section II verbs and structure, keep every condition on the card, and are original. No NESA paper wording was found for either; the matched-concentration evaluation is a common textbook theme, but the acids, numbers and wording are new.

## Absolute claims

- Hook "doesn't trust the label at all" (M3; acceptable as rhetoric if the condition tag stays).
- Scene 7 and 8 "a whole unit"; memory aid "strong moves one" (S1).
- Scene 10 "Two sessions, same results" (M2).
- Scene 19 line 3 "Never judge strength from one pH at an unknown concentration": a correct rule; keep.
- Scene 13 "never by mouth": a correct rule; keep.

## Findings

No blockers.

### S1. Should fix: the strong-acid and strong-base readings make the strong change exactly 1.00, which a real class will not see

- Problem: 0.100 mol/L HCl reads 1.04 but its tenfold dilution reads 2.04. A glass electrode follows activity, so 2.04 is the realistic value at 0.0100 mol/L, but the realistic value at 0.100 mol/L is about 1.08 to 1.11. Mixing the two gives an idealised +1.00 that classes will not reproduce (they will typically see about 0.94 to 0.97). The same applies to NaOH (12.95 against a realistic 12.89 to 12.92). The open decision asked for this judgement.
- Replacement data (recommended): HCl readings 1.07, 1.09, 1.08, mean 1.08; NaOH readings 12.92, 12.89, 12.92, mean 12.91 (38.73 ÷ 3; range 0.03). Diluted values unchanged (2.04, 11.95). Changes: HCl +0.96, NaOH −0.96. Gap 2.90 − 1.08 = 1.82 units, 10^1.82 = 66, still "about seventy times". Bases 12.91 − 11.10 = 1.81.
- Replacement narration, scene 4: "Hydrochloric acid, **one point zero eight**. Ethanoic acid, **two point nine zero**. Sodium hydroxide, twelve point nine one, and ammonia, **eleven point one zero**."
- Scene 7: "Hydrochloric acid went from one point zero eight to two point zero four, up almost exactly **one** unit. Ethanoic acid went from two point nine zero to three point three nine, up only about **half** a unit. And the bases? Sodium hydroxide dropped about one unit, ammonia about **half**."
- Scene 8: "Why about a whole unit?"
- Screen: scene 5 bracket "1.82 units"; scene 7 rows "HCl 1.08 → 2.04, +0.96" and "NaOH 12.91 → 11.95, −0.96", bracket "0.96"; scene 12 chip "1.82 units; 0.96 vs 0.49: far bigger than the uncertainty"; key notes 1 and 3; memory aid "strong moves about one, weak moves about half"; decision rule line 2 "strong moves about 1 unit".
- Author note (b) and (c) to record: "Strong changes about 0.94 ideal-activity; class value 0.96. Sodium error and CO₂ uptake both lower real NaOH readings."
- If the author keeps 1.04 and 12.95, the minimum fix is the wording: "up almost exactly one unit", "Why about a whole unit?", and "strong moves about one".

### S2. Should fix: the NaOH risk row cites supplier labels that were not confirmed (scene 13 screen)

- Exact text: "0.100 mol/L NaOH: just below the GHS irritant limit (some supplier sheets label it H315, H319)".
- Problem: the sheets found for 0.1 M NaOH range from not classified to H290 only to H314; none found carried H315 and H319. The parenthesis states a fact that may be wrong for the school's bottle.
- Replacement: "0.100 mol/L NaOH: just below the EU irritant limit (0.5 %); supplier sheets vary, so check yours". Narration can stay as written ("sits just under the level where it's classified as an irritant, so treat a splash as harmful").
- Author "Safety facts check" bullet: replace "some Australian supplier SDSs for 0.1 M NaOH still carry H315 and H319 (and some H290)" with "supplier SDSs for 0.1 M NaOH vary: ALS not classified; Agilent Australia (0.1 N) H290 only; American Elements H314. None found with H315 and H319 alone. Codex to record the school supplier's current sheet."

### M1. Minor: author note (b), why the strong readings sit off ideal

- The note says readings fall "between ideal and activity values because the meter is calibrated only from 4 to 10 and extrapolated". Extrapolation error can go either way. Replace with: "A glass electrode follows activity (HCl about 1.08 to 1.11 at 0.100 mol/L). At pH near 13, the sodium (alkaline) error of general-purpose electrodes and CO₂ absorbed by the NaOH both make readings lower. Extrapolation beyond the 4 to 10 calibration adds a few hundredths of uncertainty either way."

### M2. Minor: scene 10, "Two sessions, same results"

- If the learning review's S1 replacement is used, this sentence goes. Otherwise replace with "Two sessions, matching results."

### M3. Minor: the dilution test's limit (author note d)

- Add to author note (d): "Script check, 21 Oct: the weak-acid change grows as the acid becomes very dilute: +0.51 from 0.100 mol/L, +0.56 from 0.0010, +0.68 from 0.00010 mol/L, tending to 1. So the test separates strong from weak cleanly only while the weak acid is mostly un-ionised; keep the condition tag on the memory aid and the key notes."

### M4. Minor: "GHS irritant limit" wording (scene 13 screen, author notes)

- The 0.5 % limit is an EU CLP specific concentration limit, not a GHS limit as such. Use "EU irritant limit" or "classification limit" on screen (S2's replacement does this).

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ2-03 (page 53)
- CRC Handbook of Chemistry and Physics: dissociation constants of organic acids and bases (ethanoic acid, methanoic acid, ammonia), via LibreTexts tables
- aqion, pH and activity corrections (0.1 M HCl worked case): https://www.aqion.de/sd/69?page=3
- LibreTexts, Hydrogen ion activities from pH measurements: https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Exercises%3A_Physical_and_Theoretical_Chemistry/Data-Driven_Exercises/Hydrogen_Ion_Activities_from_pH_Measurements
- Buck et al., Measurement of pH: definition, standards and procedures (IUPAC Recommendations 2002), Pure Appl. Chem. 74, 2169 (primary standards including tetroxalate 1.679 and calcium hydroxide 12.454)
- Regulation (EC) No 1272/2008 (CLP), Annex VI, sodium hydroxide 011-002-00-6 (specific limits reproduced in Merck- and Hach-based SDSs, for example https://shop.fleischhacker.biz/media/pdf/dc/78/36/SDS_19153_Hach_EN.pdf), hydrochloric acid, acetic acid and ammonia solution, via the ECHA C&L Inventory: https://echa.europa.eu/information-on-chemicals/cl-inventory-database
- Agilent Technologies Australia, SDS for 0.1 N sodium hydroxide (H290 only): https://www.agilent.com/cs/library/msds/5062-8575_Australia.pdf
- ALS, SDS 25, sodium hydroxide 0.1 M (not classified): https://www.alsglobal.com/-/media/ALSGlobal/Resources-Grid/UK-Enviro/Client-Services/Waters-Sampling-Resources/Safety-Data-Sheets/SDS-25.pdf
- American Elements, sodium hydroxide solution SDS (H314): https://americanelements.com/sodium-hydroxide-solution-1310-73-2/sds2
- Safe Work Australia, GHS Revision 7 transition: https://www.safeworkaustralia.gov.au/safety-topic/hazards/chemicals/classifying-chemicals/ghs-7

## Verdict

**Ready to voice after fixes.** S1 changes narration (at minimum its wording) and must be applied before recording; S2 is screen and author-note text. M1 to M4 are cheap and should be applied. The Codex error check is still required.

## Resolution
