# skills05 science check (skills-s05, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/skills-s05.md` (Revision 1), proposal text only, against:
- the research pack (`research/exam-skills/`);
- the C03, C07, B11, B13 and G03 designs, for consistency;
- these NESA documents, downloaded 21 Oct from the pack's links and read as text (pdftotext):
  - Chemistry 2021 to 2025 papers and marking guidelines;
  - Biology 2021, 2022, 2023, 2024 (`-cc`) and 2025 papers and marking guidelines.

Scratch copies are kept only in the session scratchpad. No files other than this check and the learning review were written.

Web sources used for the precision rules:
- LibreTexts, [Significant Figures in Addition and Subtraction](https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/03:_Measurements/3.17:_Significant_Figures_in_Addition_and_Subtraction): round to the fewest decimal places.
- LibreTexts, [pH Calculations](https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Book%3A_Introductory_Chemistry_Online_(Young)/08%3A_Acids_Bases_and_pH/8.6%3A_pH_Calculations): the characteristic shows only the power of ten; decimal places in a log equal significant figures in the number.
- Ohio State, [Chem 1210 lab manual, Appendix D](https://www.asc.ohio-state.edu/zellmer.1/chem1210/lab/App_D_1210_lab_manual.pdf): carry all digits and round at the end; pH example 0.056 M gives 1.25.

## Em dashes

U+2014: 0; U+2013: 0 in Revision 1.

## Numbers recomputed (strict significant figures)

| Claim | Recomputed | Verdict |
| --- | --- | --- |
| n(HCl) = 0.0600 L × 0.800 = 0.0480 mol; n(NaOH) = 0.0400 L × 1.00 = 0.0400 mol; NaOH limits; n(H2O) = 0.0400 mol | Same (3 s.f. each; 1 : 1) | Correct. HCl excess 0.0080 mol. |
| m = 100.0 g, "four significant figures" | 60.0 + 40.0 = 100.0 mL (one decimal place). × 1.00 g mL-1 (3 s.f.) gives 100. g, **3 s.f.** | Overstated (F2). It does not limit the answer either way. |
| ΔT = 25.8 - 20.6 = 5.2 °C, 2 s.f. | Each reading has one decimal place, so the difference has one decimal place: 5.2, two figures (LibreTexts addition and subtraction rule) | **Correct.** NESA's own 2022 Q26(a) sample answer does the same: ΔT = 24.4 - 21.1 = 3.3 K, q reported as 2.8 kJ, and 2022 Q26(b) as -52 kJ mol-1, both 2 s.f. (F6). |
| q = 100.0 × 4.18 × 5.2 = 2173.6 J = 2.1736 kJ | 2173.6 | Correct (unrounded intermediate). |
| ΔH = -2.1736 ÷ 0.0400 = -54.34 → **-54 kJ mol-1** | -54.34; limited by ΔT (2 s.f.) | **Correct.** |
| Early rounding: q → 2.2 kJ gives -55 | 2.2 ÷ 0.0400 = 55.0 → -55 | **Correct, and it does come from early rounding.** Only rounding q to 2 s.f. flips the result. Rounding to 3 s.f. (2.17 kJ) gives -54.25, still -54. The example is fair, because 2 s.f. is exactly what a student who has "found the precision" would round q to. |
| Slip: ÷ 0.0480 gives -45 | 2.1736 ÷ 0.0480 = 45.28 → -45 | **Correct.** |
| Sense check: -54 a little less negative than about -57 (C03 convention; standard about -55.8) | Consistent with C03 author note (a) | Correct, and framed as "fits", not proof. -45 "far from -57: recheck" is framed as a hint. Pass. |
| Drill 1: M(NaOH) = 22.99 + 16.00 + 1.008 = 39.998 ≈ 40.00; n = 5.00 × 10^-3 mol | 0.200 ÷ 39.998 = 5.0003 × 10^-3 | Correct. |
| [OH-] = 5.00 × 10^-3 ÷ 0.2500 = 0.0200 mol L-1 | 0.020001 | Correct (3 s.f., limited by 0.200 g). |
| pOH = 1.699; pH = 14.00 - 1.699 = **12.301** | -log(0.0200) = 1.69897; 14 - 1.69897 = 12.30103 | Arithmetic correct. The 3 decimal places depend on treating 14.00 as exact. By the subtraction rule the video teaches (14.00 has 2 decimal places), or from Kw = 1.0 × 10^-14 (2 s.f.: [H3O+] = 5.0 × 10^-13), the strict result is **12.30**. This conflicts with scene 8 (F1). |
| Drill 2: T = 110 + 2 × 50 = 210; total = 2 × 250 = 500; f(T) = 0.42; f(C) = (180 + 110) ÷ 500 = 0.58 | 90 + 110 + 50 = 250 checks; 210 ÷ 500 = 0.42 exactly | **Correct.** "Two alleles" is on the card, so p + q = 1 is a valid check. |
| Crossed 50 ÷ 250 = 0.20 | 0.20 | Correct as a wrong habit (TT dragons, not T alleles). |
| Chemistry 2024 Q32 sample answer: s = 1.19 × 10^-7, [Cd2+] = 3.56 × 10^-7 from the unrounded s | (2.53 × 10^-33 ÷ 108)^(1/5) = 1.1856 × 10^-7; 3s = 3.557 × 10^-7 → 3.56; 3 × 1.19 = 3.57 | **Correct** (author note only). |
| Chemistry 2022 Q28(b): 0.026362 → 0.052724 → 2.9446 g → 68.163% = 68.2% | Matches the guideline text | Correct. |
| Mark values for calculate: 2 (2), 3 (6), 4 (11), 5 (3), 6 (1), 7 (1) = 24 | Sum 24; 4 marks is the mode | Match (`verb-frequency.md`). |

## NESA claims against the guideline wording

| Claim in the design | Guideline text (read 21 Oct) | Verdict |
| --- | --- | --- |
| Chemistry 2021 Q31 (4 marks): 4 "Correctly calculates the moles of nitrogen"; 3 "Provides the main steps of the calculation"; 2 "Provides some relevant steps of the calculation"; 1 "Provides some relevant information" ([2021 MG](https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2021-hsc-chemistry-mg.pdf)) | Verbatim | **Match.** The question's stem is "How many moles ...", not "Calculate", but the guideline calls it a calculation, so "a four-mark calculation" is accurate. "Recent" for 2021 is acceptable with the year on the tag. |
| Chemistry 2025 Q25 (3 marks): 3 "Provides the correct calculations, with correct significant figures"; 2 "Provides substantially correct calculations OR Provides the correct calculations with incorrect significant figures"; 1 "Provides some relevant information" ([2025 MG](https://www.nsw.gov.au/sites/default/files/noindex/2025-11/2025-hsc-chemistry-mg.pdf)) | Verbatim; the sample answer ends "30.6% (3 significant figures)" | **Match.** Scene 8's "correct working with the wrong significant figures got two" is accurate. |
| Chemistry 2022 Q28(b): top criterion "Correctly calculates the percentage of iron including significant figures" ([2022 MG](https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2022-hsc-chemistry-mg.pdf)) | Verbatim | Match. |
| Chemistry 2023 Q32 (5 marks): "to four significant figures" ([2023 MG](https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2023-hsc-chemistry-mg.pdf)) | "Calculates the mass of ammonium ions in the sample to four significant figures" | Match. |
| Chemistry 2024 Q32 (4 marks): "to 3 significant figures", "most relevant steps", "some relevant steps" ([2024 MG](https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2024-hsc-chemistry-mg.pdf)) | Verbatim | Match. |
| Scene 8 tag: "also named in top criteria: 2022, 2023, 2024 (one question each)" | 2021 Q27(a) also has "Correctly calculates the range with the correct significant figures" (2 to 3 marks) | Incomplete (F9). |
| Chemistry 2021 Q33(a) (2 marks): "Acceptable range of ΔH and TΔS to be determined at Marking Centre." | Verbatim, under "Answers could include:" after the sample answer (ΔH = -93, TΔS = -78, ΔG = -15 kJ/mol, read "From graph") | **Match.** Scene 9 states it as one guideline's example. "Sometimes a range is accepted" is immediately limited to that case and to readings, not rounding. Pass. |
| Chemistry 2022 Q29(a): "including units and negative sign" | Verbatim | Match (author support only). |
| No universal rule stated from one example | Scene 8 says "Several ... named" and "Not every guideline mentions them". Scene 9 says "one guideline". Scene 10 says "In one recent four-mark calculation" and "bands are set question by question". Key note 4 says "no automatic carried-forward mark". | **Pass.** I found no carried-forward or consequential wording in any 2021 to 2025 Chemistry or Biology guideline (searched "carried", "consequential"), which matches the pack. |
| Chemistry 2022 Q26 "Not used" note: the sample answer "rounds q to 2.8 kJ in part (a) and uses 2.6 kJ in part (b)", an "internal inconsistency" | The paper's part (b) states: "A second student using the same procedure obtained 2.6 × 10^3 J for the heat energy released". 2.6 kJ is given data, not a re-rounding. | **Wrong reason** (F6). |
| Biology 2024 Q28(a) a probability; Q29(b) "a population size" | Q28: "Using a Punnett square, determine the probability ..." Q29(b): "Predict the number of people that will be affected by diabetes in 2040. Show working ... and your calculations." | Q28 matches. Q29(b) is a number of people affected, not a population size (F8). |
| Hook: "In the last five HSC Chemistry papers, calculate was the second most common command ... after explain" | Chemistry only: explain 28, calculate 24, justify 12. Combined: 57, 24, 23. | The spoken claim is true. The on-screen bars use the combined counts under a Chemistry sentence (F4). |
| Calculation fault 7/12, Chemistry 6/6, Biology 1/6 (B24 Q29(b)) | `common-faults.md` row | Match. "Hidden steps, lost units, or rounding too early" fits the row's wording ("or", not "all three each year"). |
| "Calculate" in Biology: 0 | No "calculate" in the 2021 to 2025 Biology paper texts (case-insensitive) | Match. |

## Near-match check (no copying or close paraphrase)

| Item | Nearest NESA items found | Verdict |
| --- | --- | --- |
| Worked question (HCl + NaOH, volumes and concentrations with HCl in excess, polystyrene cup, 4 marks, molar enthalpy) | Chemistry 2022 Q26 (4 marks as 2 + 2): "Students conducted an experiment to determine ΔH for the reaction between sodium hydroxide and hydrochloric acid." It is a table of solution masses (100.7 g, 102.0 g), two initial temperatures and a final temperature, with part (b) using a second student's 2.6 × 10^3 J. Chemistry 2021 Q32: explain why three given neutralisation enthalpies differ (not a calculation). | **Not a near match.** The same reaction and total marks are inevitable for this standard calculation, but there is no shared wording, data form, structure or excess reactant. Optional, to add distance: HNO3 + KOH. Not required, and C03 attempt 1 already uses that pair. |
| Drill 1 (0.200 g NaOH to 250.0 mL, pH, 3 marks) | Chemistry 2024 Q29 (4 marks): "150 mL of a 0.20 mol L-1 sodium hydroxide solution is added to 100 mL of a 0.10 mol L-1 sulfuric acid solution. Calculate the pH ..." (sample answer: p(OH) = 1.40, pH = 14.00 - 1.40 = 12.60). Chemistry 2021 Q15 (MC: mixing HCl and NaOH). Chemistry 2025 Q6 (MC: pH of 0.25 mol L-1 HCl). Chemistry 2024 Q6 (MC: [OH-] from pH 11). Chemistry 2023 uses "250.0 mL volumetric flask and made up to the mark" in a different (ammonium) context. | **Not a near match.** No item dissolves a weighed strong base and asks for pH. The design's note that "pOH" appears only in 2022 Q34 is wrong: 2024 Q29 writes "p(OH)" (F7). |
| Drill 2 (genotype counts, T allele frequency, 2 marks) | Biology 2021 to 2025: no allele-frequency calculation from genotype counts. 2021 (MC) gives CFTR allele frequencies and asks for the most common patient genotype. 2025 Q4 (MC, drift) and the 2025 allele-frequency graphs (explain fluctuations). No "SNP" or "single nucleotide" in any paper text. | **Not a near match.** It is closest to HSCScience's own B11 (scene 7 and attempt 12c), which is intended recall. |
| Ksp (Chemistry 2024 Q32) | Not used in any drill | Pass. |

## Memory aid

"One E and three S's: Equation, Substitute, Solve, Sense check."
- The aid maps exactly onto the rail. Its assumptions hold in both drills:
  - Drill 1 has an equation (n = m/M) and a sense check (a base, so above 7).
  - Drill 2 has an equation (copies over total copies) and a sense check (two alleles, so p + q = 1).
- It does not encode the order of the three S's. The rail and the logic do, so this is acceptable.
- The aid is not in the Module 5 or 6 banks. It is new, presentation-only, and makes no scientific claim, so no science limit applies.
- The SenseGauge reference (about -57) is valid only for strong acids with strong bases. HCl and NaOH qualify, and C03 taught the condition. **Pass.**

## Findings

**F1 (blocker). Drill 1: 12.301 contradicts the subtraction rule taught in scene 8.**
Quoted: "pH = 14.00 - 1.699 = 12.301" with "three decimal places". Scene 8 chip: "+ or -: fewest decimal places".
Problem: by the video's own rule, 14.00 (2 decimal places) - 1.699 gives 12.30. Kw = 1.0 × 10^-14 (2 s.f., C07 author note b) also gives 12.30. The 3-decimal-place answer relies on C07 author note (c), "14 is treated as exact at 25 °C", which is a series convention not shown to learners. NESA's 2024 Q29 sample answer (12.60 from 0.040) does not resolve it, because there both routes give 2 decimal places.
Replacement (no narration change):
- Feedback 1 pH line gets a grey tag on "14.00": "14.00 at 25 °C: treated as exact here (C07)".
- Model answer line 3 becomes: "pOH = -log(0.0200) = 1.699; pH = 14.00 - 1.699 = 12.301 (14.00 treated as exact at 25 °C, as in C07; three decimal places from three significant figures in [OH-])."
- Add an author note: "Strictly, Kw = 1.0 × 10^-14 supports 12.30; 12.30 is not crossed. The crossed habit is 12.3."

**F2 (should fix). Mass precision overstated.**
Quoted: "100.0 g has four significant figures (60.0 + 40.0, one decimal place), so mass does not limit" (teaching checks). Scene 8 lens: ""100.0" (4)".
Problem: the volume sum is 100.0 mL (4 s.f.), but the mass comes from × 1.00 g mL-1 (3 s.f.), so m has 3 s.f. It still does not limit.
Replacement:
- Scene 8 lens row: "60.0" (3), "0.800" (3), "1.00" (3), "4.18" (3). Drop "100.0".
- Teaching check: "m = 100.0 mL × 1.00 g mL-1 = 100.0 g (written with its carried digit; three significant figures from the density), so mass does not limit; ΔT (2) does."

**F3 (should fix). Answer B's 2 of 4 does not follow the design's own mark ticks.**
Quoted: the ticks are "q with units; n(H2O) from the reactant that runs out ...; ΔH value with sign and unit; the answer to appropriate significant figures". Answer B is credited "heat step correct with units; correct method for ΔH".
Problem: "Correct method" is not one of the four ticks, so B earns 1 under the stated guide. This also leaves the 2 looking like a follow-through mark.
Replacement ticks: "q with units; n(H2O) from the reactant that runs out, with the choice stated; ΔH = -q ÷ n applied, with the negative sign and kJ mol-1; the correct value to two significant figures." The learning review's S2 gives the narration line and the ladder changes.

**F4 (should fix). Hook bars use combined counts under a Chemistry sentence.**
Replacement: "explain 28", "calculate 24", "justify 12". Tag: "question parts with their own marks, NESA Chemistry papers, Section II, 2021 to 2025 (HSCScience count)".

**F5 (should fix). "Counts are exact, so no rounding is needed."**
Problem: exactness means counts do not limit the figures. It does not mean a count ratio never needs rounding. 0.42 needs none only because 210 ÷ 500 terminates.
Replacement: "Counts are exact, and this divides exactly, so nothing to round." Chip: "counts are exact: they don't limit the figures; 210 ÷ 500 = 0.42 exactly".

**F6 (minor). Chemistry 2022 Q26 "Not used" reason is wrong.**
Quoted: "it also rounds q to 2.8 kJ in part (a) and uses 2.6 kJ in part (b). Because of that internal inconsistency it is not cited to learners."
Correction: "Part (b) supplies a second student's q of 2.6 × 10^3 J, so the sample answer is consistent. It reports q (2.8 kJ) and ΔH (-52 kJ mol-1) to two significant figures from ΔT = 3.3 K, which supports the ΔT rule. Not cited to learners because it is the nearest NESA item to the worked question." The decision not to cite it can stand.

**F7 (minor). Drill 1 near-match note.**
Quoted: ""pOH" appears only in Chemistry 2022 Q34".
Correction: "Chemistry 2024 Q29 (4 marks) calculates the pH after mixing NaOH with H2SO4 and writes "p(OH) = -log10(0.040) = 1.40; pH = 14.00 - 1.40 = 12.60"; a mixing question, not a dissolved mass. Not a near match."

**F8 (minor). Biology 2024 Q29(b) description.**
Replacement: narration "like a probability or a number of people from a graph"; chip "number of people affected, from a graph (Biology 2024)". Also update the Decisions bullet and the research table row.

**F9 (minor). Scene 8 second tag.**
Replacement: "also named in other criteria: 2021, 2022, 2023, 2024 (one question each)". 2021 Q27(a)'s criterion is a 2 to 3 mark band, not a top band, so the word is "other", not "top".

**F10 (minor). Teaching check wording on early rounding.**
Quoted: "the rounding error is carried and enlarged by later steps".
Problem: here the relative error (about 1.2%) is carried, not enlarged. The harm is that it pushes the final value across a rounding boundary.
Replacement: "the rounding error is carried into later steps and can push the final value to a different rounded answer".

## Subtraction rule for ΔT

The rule is correct and well taught: addition and subtraction keep the fewest decimal places (LibreTexts, above), so a difference of two 3-figure readings can have 2 figures. It is consistent with C03 Revision 2, which rounds to 2 s.f. from ΔT, and with NESA's 2022 Q26 sample answer (ΔT 3.3 K, results to 2 s.f.). The only conflict is the video's own later subtraction 14.00 - 1.699 (F1).

## Verdict

**Not ready for recording until F1 is fixed.** After F1 to F5, it is ready for the Codex error check. F6 to F10 are recommended. Codex brief item 1 (question-paper near-match) is largely answered above for 2021 to 2025. The 2019 and 2020 papers were not searched.

## Resolution

Resolved by the author in `lessons/skills-s05.md` Revision 2 (21 Oct). Narration recounted by script: 6,109 characters, about 9.4 minutes. No em dashes (U+2014: 0; U+2013: 0).

| Finding | Resolution |
| --- | --- |
| F1 (blocker) | Fixed as proposed: grey tag on "14.00" in feedback 1 ("14.00 at 25 °C: treated as exact here (C07)"); model answer line 3 states the convention; author note "Strictly, Kw = 1.0 × 10^-14 supports 12.30; 12.30 is defensible and is not crossed. The crossed habit is 12.3." No narration change. |
| F2 | Fixed: mass now 3 significant figures, m = 100.0 mL × 1.00 g mL-1 = 100 g (tag "3 sig figs"), in every working line, the decision board and the model answer; "100.0" dropped from the scene 8 lens; teaching check reworded ("so mass does not limit; ΔT (2) does"). q = 2173.6 J and all later values unchanged. |
| F3 | Fixed: replacement ticks adopted; B's 2 of 4 now comes from ticks 1 and 3; scene 7 counter timing and scene 10 narration and ladder changed as in learning review S2. |
| F4 | Fixed: hook bars "explain 28", "calculate 24", "justify 12"; Chemistry-only tag. |
| F5 | Fixed: "Counts are exact, and this divides exactly, so nothing to round."; chip "counts are exact: they don't limit the figures; 210 ÷ 500 = 0.42 exactly"; Decisions corrected. |
| F6 | Accepted: the "Not used" reason now says part (b) supplies 2.6 × 10^3 J as data, the sample answer is consistent and supports the ΔT rule, and it is not cited because it is the nearest NESA item. |
| F7 | Accepted: drill 1 near-match note now cites Chemistry 2024 Q29's "p(OH)" line as a mixing question, not a near match. |
| F8 | Accepted: narration, chip, Decisions bullet and research table row now describe Biology 2024 Q29(b) as a number of people affected, predicted from a graph. |
| F9 | Accepted: scene 8 tag "also named in other criteria: 2021, 2022, 2023, 2024 (one question each)"; research table row and Codex item 3 add 2021 Q27(a). |
| F10 | Accepted: "the rounding error is carried into later steps and can push the final value to a different rounded answer". |
| Optional HNO3 + KOH swap (near-match table) | Declined: not required (no near match), and C03 attempt 1 already uses that pair. |
| 2019 and 2020 papers not searched | Kept open: Codex brief item 1 now asks Codex to confirm the 2021 to 2025 result and search 2019 and 2020. |

Ready for the Codex error check. Not yet approved for voicing.
