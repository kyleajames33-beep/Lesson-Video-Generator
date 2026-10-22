# m7g02 science check (chem-m7-g02, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 22 Oct 2026.
Inspected: `lessons/chem-m7-g02.md` (Revision 1), proposal text only; `pre-design/chem-m7-l11-methanol-dataset.md`; `lessons/chem-m7-p03.md` and `chem-m7-c07.md` for consistency; the 2017 Chemistry syllabus DOCX (Module 7 and Module 4 dotpoints); the NESA 2019 HSC Chemistry paper and marking guidelines (Q23); web sources listed below. Every value was recomputed by script (Python, unrounded until the end). Root decision applied: Q1 uses the design's alternative final mass (150.54 g), giving −365 kJ mol⁻¹. No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word against the 2017 DOCX)

| Claim | Source | Verdict |
| --- | --- | --- |
| Module 7: "conduct a practical investigation to measure and reliably compare the enthalpy of combustion for a range of alcohols" | 2017 Chemistry DOCX: identical | Match |
| Module 4 (Codex item 3): "investigate enthalpy changes in reactions using calorimetry and q = mcΔT (heat capacity formula) to calculate, analyse and compare experimental results with reliable secondary-sourced data, and to explain any differences" | 2017 Chemistry DOCX: identical | **Match** (Codex item 3 answered) |

## Em dashes and spelling

U+2014: 0; U+2013: 0. Australian spelling ("draught"). "meter" only in "thermometer".

## Molar masses (HSC data sheet: H 1.008, C 12.01, O 16.00)

CH₃OH 32.042 → 32.04; C₂H₅OH 46.068 → 46.07; C₃H₇OH 60.094 → 60.09 g mol⁻¹. Correct.

## Q1 (root decision: final mass 150.54 g)

| Step | Recomputed | Verdict |
| --- | --- | --- |
| ΔT = 42.4 − 22.4 | 20.0 °C (one decimal place, 3 s.f.) | Correct |
| q = 150.0 × 4.18 × 20.0 | 12 540 J = 12.540 kJ | Correct |
| Δm = 151.64 − 150.54 | **1.10 g** (two decimal places, 3 s.f.) | Correct |
| n = 1.10 ÷ 32.04 | 0.0343321 mol (0.034332 shown) | Correct |
| ΔHc = −12.540 ÷ 0.0343321 | −365.256 → **−365 kJ mol⁻¹** (3 s.f., from 1.10 g and 20.0 °C); rounded chain (0.034332) gives −365.257, same | **Correct** |
| Heat released if n burned completely = 0.0343321 × 726 | 24.9251 kJ (24.925 shown, "24.93" on the bar) | Correct |
| Percentage = 12.540 ÷ 24.9251 × 100 | 50.311 → **50.3%** (3 s.f.); check 365.256 ÷ 726 = 50.311%; screen check "365 ÷ 726" = 50.28%, also 50.3% | **Correct** |
| Crossed: 12.540 ÷ 1.10 | 11.400 → "−11.4" (kJ per gram) | Correct |
| Hook "out by a factor of a hundred or more" | fuel mass in q: 1.10 × 4.18 × 20.0 = 91.96 J against 12 540 J (factor 136); water mass in n: 150.0 ÷ 32.04 = 4.68 mol against 0.0343 mol (factor 136) | Correct |
| Plausibility | 50.3% sits beside the Codex dataset's 52.7% and the Open University reference (about 380 kJ mol⁻¹, 52%); "about half" holds | Plausible |
| Repeat check | p03's methanol −383 is no longer repeated. c07's hook dataset gave −3.6 × 10² kJ mol⁻¹ (2 s.f., per gram context); −365 is a different dataset and question, not a repeat | Pass |

## Q2

| Step | Recomputed | Verdict |
| --- | --- | --- |
| ΔT = 35.0 − 20.0 | 15.0 °C (3 s.f.) | Correct |
| q(water) = 250.0 × 4.18 × 15.0 | 15 675 J = 15.675 kJ | Correct |
| Heat released = 15.675 ÷ 0.450 | 34.8333 kJ | Correct |
| n = 34.8333 ÷ 1367 | 0.0254816 mol | Correct |
| m = 0.0254816 × 46.07 | 1.17394 → **1.17 g** (3 s.f., from 15.0 °C, 4.18 and 45.0%); rounded chain 1.1739, same | **Correct** |
| Crossed × 0.450 | 7.0538 kJ → 0.23772 → 0.238 g | Correct |
| No-loss mass | 15.675 ÷ 1367 × 46.07 = 0.52827 → 0.528 g; 1.17 ÷ 0.528 = 2.22 = 1 ÷ 0.450 | Correct |
| "use the size, 1367" | n = heat released ÷ \|ΔHc\| | Correct |
| Condition kept | "with the same apparatus" on the card, so 45.0% applies | Correct and necessary |
| Plausibility | 45.0% is stated data, between p03's shielded ethanol (50.3%) and unshielded A2 (39 to 43%) | Plausible |

## Q3

| Trial | q (J) | n (mol) | ΔHc (kJ mol⁻¹) | Verdict |
| --- | --- | --- | --- | --- |
| 1: 18.0 °C, 1.16 g | 18 810 | 0.0193044 | −974.39 → −974 | Correct |
| 2: 17.9 °C, 1.15 g | 18 705.5 | 0.0191380 | −977.40 → −977 | Correct |
| 3: 18.2 °C, 1.62 g | 19 019 | 0.0269596 | **−705.46 → −705** | Correct |
| 4: 18.1 °C, 1.17 g | 18 914.5 | 0.0194708 | −971.43 → −971 | Correct |

- Mean of trials 1, 2 and 4: unrounded 974.41, rounded inputs 974.0 → **−974 kJ mol⁻¹** (3 s.f.). Correct.
- Mean of all four: 907.17 (rounded inputs 906.75) → −907. Correct as the crossed value; no good trial lies near it.
- 974.41 ÷ 2021 = 48.2%; trial 3 705.46 ÷ 2021 = 34.9%. Correct. 48.2% matches p03's shielded propan-1-ol (48.7%): consistent.
- Expected mass for trial 3 at the mean: 19.019 ÷ 974.41 × 60.09 = 1.173 g; extra 1.62 − 1.17 = 0.45 g ("nearly half a gram"). Correct.
- Significant figures: 1.62 g and 18.2 °C (3 each) → 3. Correct.
- The three kept trials agree within 0.3% of their mean; trial 3 is 28% less negative. Statistically it is an outlier whatever its cause.

## The anomaly logic (Q3)

- **Direction:** fuel lost without burning makes n too big, so ΔHc is less negative. Correct, and consistent with p03 ("evaporation makes n too big").
- **Uniqueness of the cause:** not established by the data. Same rise with more fuel means the extra fuel delivered no heat to the water. That fits (i) fuel lost without burning (evaporation from an uncapped wick, a spill), (ii) more heat lost in that trial (a draught, a displaced shield or lid: the student keeps burning until the water reaches a similar rise), or (iii) a sootier, more incomplete flame (less energy per gram). (i) is the most likely for a 0.45 g excess, but the narration states it as a deduction (F2).
- **Plausibility of 0.45 g by evaporation:** propan-1-ol is volatile (flash point about 15 to 22 °C, p03 safety check). Losing 0.45 g from an uncapped wick over the minutes of a trial and its set-up, or from a spill, is plausible; the design says "perhaps". Acceptable.
- **Exclusion rule:** "Only drop a result when you can explain it", with "repeat that trial if you can", is a sound, conservative teaching rule. It is not a NESA marking rule, and the design does not claim one.

## Absolute claims

- 2d: "about half, which is normal for an open can": generalises, and conflicts with Q3 and p03 (F3).
- 4c: "Extra mass with no extra heat means fuel left without burning": stated as certain (F2).
- 3d: "if heat is lost, you need more fuel, not less": correct as stated.
- 2c: "it's negative, because burning releases heat": correct.
- No other absolute claims found.

## Near-match check

| Item | Nearest NESA item | Verdict |
| --- | --- | --- |
| Q1 (methanol, raw burner masses, ΔHc then % of heat absorbed) | Chemistry 2019 Q23(a): "Calculate the experimental molar enthalpy of combustion ΔcH of ethanol when 0.370 g ethanol was used to raise the water temperature from 18.5 °C to 30.0 °C" (105 g water, aluminium beaker); sample answer −628 kJ mol⁻¹ (3 s.f.) | **Not a near match.** The core calculation is the syllabus's; alcohol, data, raw masses, part (b) and wording all differ. Verified against the paper text. |
| Q3 (repeated trials with an anomaly) and Q2 (reverse calculation with a fraction) | None found in the 2019 paper; the design's audit of 2019 to 2025 found none | Not near matches. 2022 Q29 (series graph) was not re-checked by me; Codex to confirm with the 2023 paper. |

## Findings

### F1. Should fix (root decision): Q1 alternative masses, verified

- The alternative (151.64 g to 150.54 g) is arithmetically correct throughout: Δm 1.10 g; n 0.034332 mol; ΔHc −365.26 → **−365 kJ mol⁻¹**; heat released 24.925 kJ; **50.3%**; crossed −11.4 (kJ per gram). All 3 s.f.
- Apply every replacement in the learning review S1 (card, hook chip, 2b to 2e narration and screen, 4d "fifty", key note 2, Decisions table, precision and data bullets, model answer 1, Open decision closed).
- Replace the "Numbers to verify" Q1 bullet with: "**Q1 (Codex dataset, final mass changed to 150.54 g by root decision, 22 Oct).** ΔT = 42.4 − 22.4 = 20.0 °C; q = 150.0 × 4.18 × 20.0 = 12 540 J = 12.540 kJ; Δm = 151.64 − 150.54 = 1.10 g; n = 1.10 ÷ 32.04 = 0.0343321 mol (0.034332 shown); ΔHc = −12.540 ÷ 0.0343321 = −365.256 → −365 kJ mol⁻¹. Heat released = 0.0343321 × 726 = 24.9251 kJ; 12.540 ÷ 24.9251 × 100 = 50.311 → 50.3%; check 365.256 ÷ 726 = 50.31%. Crossed: 12.540 ÷ 1.10 = 11.400 → "−11.4 kJ mol⁻¹"." Plausibility bullet: "Q1 50.3% and Q3 48.2% sit in p03's 45 to 53% range."
- Model answer 1: "(a) ΔT = 20.0 °C; q = 150.0 × 4.18 × 20.0 = 12 540 J = 12.540 kJ; Δm = 1.10 g; n = 1.10 ÷ 32.04 = 0.034332 mol; ΔHc = −12.540 ÷ 0.034332 = −365.26 → −365 kJ mol⁻¹ (3 s.f.). (b) Heat released by 0.034332 mol = 0.034332 × 726 = 24.925 kJ; 12.540 ÷ 24.925 × 100% = 50.3%. Crossed mistake: "ΔHc = −12.540 ÷ 1.10 = −11.4 kJ mol⁻¹" (divided by grams)."

### F2. Should fix: Q3's cause is stated as deduced

- Exact text (4c): "Extra mass with no extra heat means fuel left without burning".
- Problem: the same data fit extra heat lost in that trial or a sootier flame (see "The anomaly logic"). The conclusion (exclude and repeat) stands; the certainty does not.
- Replacement: as learning review S2 ("Extra mass with no extra heat means that fuel never heated the water. Most likely it left without burning: ..."), with the grey tag "other possible causes: a draught or a sooty flame in that trial". Model answer (b): "Trial 3 is anomalous: its temperature rise matches the others, but the burner lost about 0.45 g more than that heat implies (about 1.17 g expected), so that fuel gave the water no heat, most likely because it was lost without burning (evaporation from an uncapped burner, or a spill). That makes n too large and ΔHc less negative. Because the trial has a likely cause, exclude it (and repeat it if possible)." Author doubt (a): add "(a draught or a sootier flame would give the same signature; the narration names the likeliest cause)".

### F3. Should fix: "normal for an open can"

- Exact text (2d): "about half, which is normal for an open can."
- Problem: Q1's card states no shield or lid; Q3, with a shield and lid, gives a lower 48.2%; p03's unshielded A2 gives 39 to 43%. Calling 50% normal for an open can contradicts p03's shield lesson.
- Replacement: "about half, which is typical for a spirit burner and can." (learning review S3). Close Review notes doubt (b).

### M1. Minor: entry-knowledge line about skills-s07

- s07 does not teach anomalies (its boundary leaves them to G02). Replacement as learning review M1.

### M2. Minor: 4e caption

- Exact visual: "an unexplained low trial pulls the mean down". Trial 3 has been explained, and "low" is ambiguous for negative values. Replacement: "one faulty trial drags the mean away from every good trial".

### M3. Minor: near-match note wording after F1

- Near-match Q1 bullet: replace "different data (Codex's constructed dataset)" with "different data (Codex's constructed dataset, final mass changed)".

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- NESA 2019 HSC Chemistry paper and marking guidelines (Q23): https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2019-hsc-chemistry.pdf ; https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2019-hsc-chemistry-mg.pdf
- Open University OpenSTEM Africa teacher notes (school methanol combustion about 380 kJ mol⁻¹ for a 20 °C rise), cited in the Codex dataset: https://www.open.edu/openlearncreate/mod/page/view.php?id=191528
- RSC Education, Heat energy from alcohols (heat losses vary considerably; incomplete combustion as an error): https://edu.rsc.org/resources/heat-energy-from-alcohols/1733.article
- Edexcel IAL energetics structured question (ethanol spirit burner, about half the data value by calculation): https://www.savemyexams.com/international-a-level/chemistry/edexcel/17/topic-questions/2-energetics-group-chemistry-halogenoalkanes-and-alcohols/2-1-energetics/structured-questions/
- Reviewer knowledge, not re-fetched: data values −726, −1367, −2021 kJ mol⁻¹ (as checked in m7c07); propan-1-ol volatility and flash point (as p03's safety check).

## Verdict

**Ready to voice after F1 to F3** (F1 is root's decision, verified). No science blocker. Q2's 1.17 g at 45.0%, Q3's −705, the outlier exclusion and the −974 mean are all correct to strict significant figures. M1 to M3 are small. The Codex error check is still required (including the 2023 question paper).

## Resolution

Resolved by the author in `lessons/chem-m7-g02.md` Revision 2 (23 Oct). Q1 recomputed by script: Δm 1.10 g; n 0.0343321 mol; ΔHc −365.256 → −365 kJ mol⁻¹; heat released 24.9251 kJ; 50.311 → 50.3%; crossed 11.400 → −11.4; hook factor 136.

- **F1 (applied).** Every replacement in learning review S1; the Numbers to verify Q1 bullet, plausibility bullet ("Q1 50.3% and Q3 48.2% sit in p03's 45 to 53% range") and model answer 1 replaced as given.
- **F2 (applied).** 4c narration and grey tag as learning review S2; model answer (b) as given; author doubt (a) extended as given.
- **F3 (applied).** 2d "typical for a spirit burner and can"; Review notes doubt (b) closed.
- **M1 (applied)** as learning review M1.
- **M2 (applied).** 4e caption replaced.
- **M3 (applied).** Near-match Q1 bullet now reads "different data (Codex's constructed dataset, final mass changed)".
- Narration 5,599 characters, about 543 s. U+2014: 0. Codex error check still required (including the 2023 question paper).
