# skills07 science check (skills-s07, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 22 Oct 2026.
Inspected: `lessons/skills-s07.md` (Revision 1), proposal text only, against:
- the research pack (`research/exam-skills/vra-definitions.md`, `common-faults.md`, `what-markers-reward.md`);
- `chem-m7-p03.md`, `chem-m7-c07.md`, `chem-m6-p02.md` and `bio-m7-p02.md`, for consistency;
- these NESA documents, downloaded 22 Oct and read as text (pdftotext; DOCX XML stripped):
  - Chemistry 2025 marking guideline and paper (Q23); Chemistry 2019 marking guideline and paper (Q23); Chemistry 2020 marking guideline (Q28); Chemistry 2021 marking guideline (Q21(a));
  - Biology 2024 marking guideline (Q22(a), (b)); Biology 2023 marking guideline (Q27);
  - the HSC marking feedback pages for Biology 2021, 2024, 2025 and Chemistry 2025;
  - the 2017 Chemistry and Biology syllabus DOCX files (glossary and Working Scientifically content);
  - the 2025 Biology syllabus glossary page (accuracy entry).

Every number was recomputed by script (Python, unrounded until the end). Scratch copies are kept only in the session scratchpad. No files other than this check and the learning review were written. The 2024 Biology question paper could not be downloaded (the URL pattern returned 404), so the drill 2 near-match uses the guideline's description of Q22.

## Em dashes and spelling

U+2014: 0; U+2013: 0. Australian spelling ("draught", "colour", "neutralisation"). "meter" occurs only in "thermometer"; "draft" only in "(draft)" headings and the pronunciation note.

## NESA definitions (word for word against `vra-definitions.md` and the source files)

| Design text | Source text | Verdict |
| --- | --- | --- |
| Validity, 2017 Chemistry: "An extent to which tests measure what was intended or to which data, inferences and actions produced from tests and other processes are accurate." | 2017 Chemistry DOCX glossary: identical; `vra-definitions.md`: identical | **Match** |
| Biology 2017 validity "uses a semicolon and repeats 'an extent to which'" | 2017 Biology DOCX: "An extent to which tests measure what was intended; an extent to which data, inferences and actions produced from tests and other processes are accurate." | **Match** |
| Reliability, "2017 Biology and Chemistry syllabuses": "An extent to which repeated observations and/or measurements taken under identical circumstances will yield similar results." | Both 2017 DOCX glossaries: identical. (`vra-definitions.md` cites the Biology file; the Chemistry file has the same entry.) | **Match** |
| Accuracy, 2025 glossary: "The extent to which measurements are considered to be close to the true value."; no 2017 entry | 2025 Biology glossary page: identical. No standalone "accuracy" entry in either 2017 DOCX glossary. | **Match** |
| Scene 2 validity tag truncated with "..." | Marked as truncated | Acceptable |
| First HSC on 2025 syllabuses: Biology 2028, Chemistry 2029 | `vra-definitions.md` (NESA course pages) | Match |

## Syllabus content and outcome (Codex item 3, answered)

All three dotpoints are word for word in the 2017 Chemistry DOCX with the codes given. Section headings:
- "assess risks, consider ethical issues and select appropriate materials and technologies when designing and planning an investigation (ACSCH031, ACSCH097)": **Planning Investigations** (outcome CH11/12-2).
- "justify and evaluate the use of variables and experimental controls to ensure that a valid procedure is developed that allows for the reliable collection of data (ACSCH002)": **Planning Investigations** (CH11/12-2).
- "assess the relevance, accuracy, validity and reliability of primary and secondary data and suggest improvements to investigations (ACSCH005)": **Analysing Data and Information** (CH11/12-5).
- CH11/12-3 and BIO11/12-3: "conducts investigations to collect valid and reliable primary and secondary data and information": **Conducting Investigations**. Match.

Biology has the same wording with ACSBL codes, except that its second (Year 12) listing of the risk dotpoint reads "assess risks, consider ethical issues, and select appropriate ..." (with a comma). The description quotes the Chemistry form; acceptable (M5).

## NESA figures and guideline claims

| Claim in the design | Source text (read 22 Oct) | Verdict |
| --- | --- | --- |
| 4/12 reports: B21 Q31, B24 Q22(b), B25 Q32, C25 Q23 | B21 Q31: "demonstrating a clear understanding of the terms reliability, accuracy and validity". B24 Q22: "understanding the difference between reliability, validity and accuracy (b)". B25 Q32: "understanding how reliability and validity affect the quality of epidemiological studies". C25 Q23: "recognising the difference between accuracy and reliability in experiments". | **Count matches** (`common-faults.md`, reports not students). The spoken "flagged answers that treated those three words as if they were interchangeable" is stronger than the wording (F2). |
| Chemistry 2025 Q23 (3 marks): "Justifies TWO appropriate changes with justifications of both related to accuracy" (3); "Justifies ONE appropriate change OR Identifies TWO appropriate changes" (2); "Provides some relevant information" (1) | Verbatim. The question: "Justify TWO changes that can be made to the procedure to ensure more accurate results." (% w/w sulfate in fertiliser, BaSO₄ precipitate): gravimetric, as the design says. | **Match.** Ladder paraphrase ("two changes, each justified by its effect on accuracy"; "one justified change, or two changes named without reasons"; "some relevant information") is fair. Hook "full marks needed each change to be justified by what it does for accuracy": fair. |
| Biology 2024 Q22(b) (2 marks): "Explains how to ensure the investigation is reliable"; sample answer repeats on five plates and checks results are similar | Verbatim: "The student could repeat the experiment by using five plates to culture the same sample of food or water. This would mean the student could check that the results are similar in each test." Feedback: "make the link between repetition and consistency of results or removal of outliers (b)". | **Match.** Scene 8's "explaining how repeats show whether results agree earned the marks" is fair and framed as one guideline. |
| Biology 2024 Q22(a) (2 marks): "Justifies a safety precaution used to prevent infection" | Verbatim; sample answer gloves to prevent contact with skin and entry of pathogens. Feedback: justify "using language additional to the question stem". | **Match.** Scene 9's "the marks needed the precaution and how it prevents infection" is fair. |
| Chemistry 2021 Q21(a): "Identifies a safety concern associated with organic liquids" and "States how the safety concern could be addressed" (2); sample "Organic solvents are generally flammable so no sources of ignition should be present." | Verbatim | Match (not spoken). |
| Chemistry 2019 Q23(b) (2 marks): "Provides a change that would improve accuracy" and "Gives a reason for the low molar enthalpy of combustion related to the change" | Verbatim. Sample answer: heat loss to the environment; "moving the spirit burner closer to the beaker". | Match (not spoken). The sample answer's fix overlaps s07 part (c)'s fix (M2). |
| Chemistry 2020 Q28 (3 marks): "Explains why the results produced by the method are not accurate and not reliable"; separate causes (deliquescent NaOH; indicator in the flat region) | Verbatim | Match (not spoken). |
| Biology 2023 Q27: highest band needs comprehensive analysis and an informed judgement; identifying features at two marks | Top band (7): "thorough understanding of the characteristics and features of a valid epidemiological study", "comprehensive analysis of the air pollution study", "informed judgement"; "Identifies features of an epidemiological study" sits in the 2-mark band | Match in substance (not spoken). |
| No universal rule from one example | Scenes 1, 8 and 9 say "one recent Chemistry guideline" or "one Biology guideline"; tallies are labelled HSCScience illustrative; neither answer is placed on the NESA ladder | **Pass**, except the science-rule absolute in scene 14 (F3). |

## Numbers recomputed

| Claim | Recomputed | Verdict |
| --- | --- | --- |
| Ethanol trials −702, −695, −708; mean −702 | Sum −2105; mean −701.67 → −702 (integers in, 3 s.f.) | Correct |
| Ethanol spread 13; largest deviation "708 − 701.67 = 6.33, 0.90%" | Spread 13. Largest deviation is 701.67 − 695 = **6.67** (0.95%), not 6.33 | Slip in author note (M1); "about 1%" still holds |
| Propan-1-ol −803, −815, −797; mean −805.0; spread 18; largest deviation 10 (1.24%) | Same | Correct |
| Gap 103.3 → "about 100"; about 6 to 8 times the spreads | 103.33; 103.33 ÷ 18 = 5.7, ÷ 13 = 7.9 | Correct ("about 6 to 8") |
| 51.33% and 39.83% of the data values | 701.67 ÷ 1367 = 51.33%; 805 ÷ 2021 = 39.83% | Arithmetic correct; plausibility F1 |
| Drill 1 X: −51, −52, −51; mean −51.33 ("about −51"); spread 1; distances 6, 5, 6 | Same | Correct |
| Drill 1 Y: −60, −53, −58; mean −57.0; spread 7; distances 3, 4, 1 ("each within 4") | Same | Correct |
| "Y's values are closer to −57": each of Y's (1, 3, 4) is closer than each of X's (5, 6, 6) | Same | Correct |
| Drill 1 precision: integer kJ mol⁻¹ in, means to integers | −51 and −57 (2 s.f.) | Correct |
| Drill 2: 31 and 118 colonies, both inside 30 to 300; 0.1 mL undiluted, no CFU asked | Same (bio-m7-p02 window) | Correct |
| Number line −62 to −50 covers all six values and the −57 tick | −60 to −51 inside | Correct |
| Accepted value "about −57 kJ mol⁻¹" | Series convention from chem-m6-c03 and m6-p02 (strong acid with strong base, about −57) | Consistent |

## Plausibility

- **51% for an uncovered can (Open decision 3).** In isolation, about half is a common textbook result: the 2019 NESA sample answer (aluminium beaker, 105 g water) gives −628 kJ mol⁻¹, 46% of −1367; an Edexcel-style exam item (1.19 g ethanol, 100 g water, 21.6 to 63.9 °C) gives about −680 kJ mol⁻¹, about 50%; the Open University teacher notes give 380 kJ mol⁻¹ (52%) for methanol. But in this series the comparison that matters is chem-m7-p03, watched one video earlier: shielded and lidded ethanol −688 kJ mol⁻¹ (50.3%); unshielded, uncovered A2 42.7% (methanol) and 39.2% (butan-1-ol). An uncovered can at 51% beats p03's shielded, lidded ethanol (F1). Lower it.
- **40% at 6 cm.** Plausible. The direction (more distance, more heat lost) is supported by p03 author note (d) (most heat leaves as hot combustion gas passing the can, controlled by flame distance) and by NESA's own 2019 Q23(b) sample answer ("moving the spirit burner closer to the beaker" reduces heat loss).
- **Is the percentage gap evidence of the distance?** Yes, with a hedge: p03 shows the percentage drifting down only slightly with chain length at fixed distance (ethanol 50.3% to propan-1-ol 48.7%, 1.6 points). A 9 to 11 point drop is far larger than that drift. The narration says "part of the difference comes from the distance", which is appropriately hedged (M3 offers an optional screen tag).
- **Drill 2 science.** Longer incubation lets more colonies grow large enough to see and count: correct. 28 °C sits inside bio-m7-p02's 25 to 30 °C (never 37 °C). Taped and inverted: as p02.
- **Risk row.** Methanol, ethanol and propan-1-ol are classified highly flammable liquids (GHS H225); butan-1-ol is flammable (H226) and causes serious eye damage (H318), as is propan-1-ol (H318). "These alcohols are flammable" is true of all four. "Refill only when cold and away from flames; cap to put it out": correct controls.

## Do the improvements fix the stated problem?

| Problem | Fix in design | Verdict |
| --- | --- | --- |
| (b) heat lost from an uncovered can in every trial (systematic) | draught shield and lid | **Fixes it** (reduces the loss; consistent with p03). The method must say there was no shield (F4). |
| (c) can-to-wick distance not controlled (2 cm against 6 cm) | same 2 cm for both, trim the propan-1-ol wick so its flame does not touch the can | **Fixes it**: it removes the uncontrolled variable and, by trimming, avoids the flame touching the can (soot, incomplete combustion). "Raise both to 6 cm" kept as an author note (valid but worse for accuracy): correct. |
| Answer A "repeat ... be more careful" | judged as not fixing the distance | Correct |
| Drill 2 unequal incubation times | both plates at 28 °C for the same time (48 h), counted together | **Fixes it** |
| Drill 2 crossed "more plates" | improves reliability, times still unequal | Correct |
| Risk: flammable alcohols | refill cold, away from flames; cap to extinguish | Correct |

## Near-match check (no copying or close paraphrase)

| Item | Nearest NESA item | Verdict |
| --- | --- | --- |
| Worked question (two alcohols, table of trials, (a) reliability, (b) evaluate a repeats claim, (c) validity of a distance change) | Chemistry 2019 Q23: "The following apparatus was used in an experiment to determine the molar enthalpy of combustion of ethanol." (a) calculate from 0.370 g and 18.5 to 30.0 °C with 105 g water in an aluminium beaker; (b) "Upon replication, the molar enthalpy of combustion obtained in the experiment was consistently much lower than the accepted value. Explain ONE change that could be made to the experiment that would improve the accuracy of the obtained value." | **Not a near match.** Shared apparatus type only; no shared wording, numbers, structure or demand. One overlap the design does not record: 2019's sample fix ("moving the spirit burner closer to the beaker") is s07 part (c)'s fix, used here for a validity reason (M2). Acceptable. |
| Worked part (b) wording | 2019 Q23(b) "consistently much lower than the accepted value" | No shared phrase in s07 (it says "closer to the data values"). Pass. |
| Drill 1 (two students' neutralisation trials, compare reliability and accuracy) | Chemistry 2020 Q28 (titration, explain not accurate and not reliable) | Not a near match. |
| Drill 2 (tap against tank water, unequal incubation times, validity) | Biology 2024 Q22 (microbes in a food or water sample; (a) safety precaution, (b) ensure reliability), from the guideline | **Not a near match.** Different demand (validity) and a specific two-sample comparison; no shared wording. Codex to confirm against the 2024 question paper, which I could not download. |
| Risk scene | Biology 2024 Q22(a), Chemistry 2021 Q21(a) | Cited as guidelines, not reproduced as questions. Pass. |

## Memory aids

- "Right target, repeats agree, close to true": maps onto the 2017 validity first clause, the 2017 reliability wording and the 2025 accuracy wording. Holds for all three items. Correctly labelled "a picture, not a definition". The design's own note on the scattered target (accurate mean, inaccurate individuals) is right.
- "Word, feature, fix": no scientific claim; holds.
- "Repeats fix reliability": true as a rule about systematic error and uncontrolled variables, but the spoken "and nothing else" is too strong (F3).

## Findings

### F1. Should fix: ethanol's 51% for an uncovered can contradicts chem-m7-p03

- Exact text (card table): "Ethanol | −702 | −695 | −708 | −702 | −1367"; "Propan-1-ol | −803 | −815 | −797 | −805 | −2021".
- Problem: p03's shielded, lidded ethanol gives 50.3% and its unshielded A2 39 to 43%. An uncovered can giving 51% makes the scene 6 fix look unnecessary to a viewer who has just watched p03. "About half" also stretches to cover 40%.
- Replacement data (recomputed):
  - Ethanol −592, −585, −598: sum −1775; mean −591.67 → **−592**; spread 13; largest deviation 6.67 (1.13%, "about 1%"); 591.67 ÷ 1367 = **43.28% → 43%**.
  - Propan-1-ol −693, −705, −687: sum −2085; mean **−695.0**; spread 18; largest deviation 10 (1.44%, "about one and a half"); 695 ÷ 2021 = **34.39% → 34%**.
  - Gap 695.0 − 591.67 = 103.3 → "about 100" (unchanged); 5.7 to 7.9 times the spreads (unchanged).
  - 43% sits at p03's unshielded A2 level (42.7%); 34% at 6 cm is below it, as the extra distance predicts.
- Narration and screen replacements: as learning review S1 (scenes 5, 6, 7 and 14, model answers, Decisions and "Numbers to verify"). Scene 6: "Her values are well under half the data values, because heat escapes from an uncovered, unshielded can in **every** trial."

### F2. Should fix: the hook's "interchangeable" is not NESA's wording

- Exact text (scene 1): "NESA flagged answers that treated those three words as if they were **interchangeable**."
- Problem: the four reports ask for "a clear understanding of the terms", "the difference between reliability, validity and accuracy", "how reliability and validity affect the quality" and "the difference between accuracy and reliability". B25's comment in particular is not about using the words interchangeably. Presenting the pack's paraphrase as what NESA flagged overstates the source.
- Replacement: "In four of the last twelve Chemistry and Biology marking feedback reports, NESA asked for a clearer understanding of these three words and the **difference** between them." YouTube description: "and NESA's marking feedback keeps asking for a clearer understanding of the three words." Decisions "Fault used" bullet: record the four quoted comments.

### F3. Should fix: "Repeats fix reliability, and nothing else" is an absolute claim

- Exact text (scene 14): "Repeats fix reliability, and nothing else."; key note 3 "Repeats improve reliability only."
- Problem: the mean of repeats reduces random error, so it can move closer to the true value; drill 1's Y shows exactly that (scattered, mean −57.0). The design's memory aid check concedes this; the narration does not. NESA's own 2024 Q22 feedback links repetition with "removal of outliers".
- Replacement: as learning review S4 ("Repeats help reliability, but they can't fix an error that pushes every trial the same way."; chips, sign, key note 3 and description as listed there).

### F4. Should fix: the controlled list includes a shield the method does not have

- Exact visual (scene 7): "controlled: water, can, shield, rise, distance".
- Problem: part (b)'s fix is to add a draught shield, so the method had none. The list is copied from p03's shielded set-up.
- Replacement: "independent: the alcohol | controlled: water, can, rise, distance"; card stem adds "with no draught shield" (learning review S1, M1).

### M1. Minor: ethanol's largest deviation in "Numbers to verify"

- Exact text: "largest deviation from the mean 708 − 701.67 = 6.33, 6.33 ÷ 701.67 = 0.90%".
- Correction: "largest deviation from the mean 701.67 − 695 = 6.67, 6.67 ÷ 701.67 = 0.95%". With F1's data: "591.67 − 585 = 6.67, 1.13%; propan-1-ol 705 − 695 = 10, 1.44%".

### M2. Minor: record the 2019 Q23(b) sample-answer overlap

- Add to the near-match note for the worked question: "The 2019 Q23(b) sample answer improves accuracy by 'moving the spirit burner closer to the beaker'. s07 part (c) uses the same physical idea (distance affects heat loss) for a different demand (validity of a comparison with an uncontrolled distance), with no shared wording. It also supports the claim that the 6 cm can loses more heat."

### M3. Minor (optional): show that the percentage drop is bigger than the normal drift

- Scene 7, small grey tag beside PercentBars: "normal drift between these two alcohols at the same distance: about 2 points (the combustion practical)". No narration change. This answers a p03 viewer who remembers the percentages fall slightly with chain length.

### M4. Minor: "consistently low" for negative values

- Feedback 1: "X is consistently low" → "X is consistently less negative" (learning review M5). The model answer's "X's consistently low values" → "X's consistently less negative values".

### M5. Minor: Biology risk-dotpoint comma and section headings

- Add to the syllabus note: "Sections: the risk and variables dotpoints sit under Planning Investigations (CH11/12-2), the relevance, accuracy, validity and reliability dotpoint under Analysing Data and Information (CH11/12-5), and CH11/12-3 under Conducting Investigations. The Biology Year 12 listing of the risk dotpoint has a comma before 'and select'; the description quotes the Chemistry form." This answers Codex item 3's heading question.

## Sources

- NESA 2025 HSC Chemistry marking guidelines (Q23): https://www.nsw.gov.au/sites/default/files/noindex/2025-11/2025-hsc-chemistry-mg.pdf ; 2025 paper: https://www.nsw.gov.au/sites/default/files/noindex/2025-11/2025-hsc-chemistry.pdf
- NESA 2024 HSC Biology marking guidelines (Q22): https://www.nsw.gov.au/sites/default/files/noindex/2025-02/2024-hsc-biology-mg.pdf
- NESA 2023 HSC Biology marking guidelines (Q27): https://www.nsw.gov.au/sites/default/files/noindex/2025-02/2023-hsc-biology-mg.pdf
- NESA 2019 HSC Chemistry paper and marking guidelines (Q23): https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2019-hsc-chemistry.pdf ; https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2019-hsc-chemistry-mg.pdf
- NESA 2020 HSC Chemistry marking guidelines (Q28): https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2020-hsc-chemistry-mg.pdf
- NESA 2021 HSC Chemistry marking guidelines (Q21(a)): https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2021-hsc-chemistry-mg.pdf
- NESA HSC marking feedback: https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/biology/2021 ; .../biology/2024 ; .../biology/2025 ; https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/chemistry/2025
- 2017 syllabuses (DOCX): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx ; https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx
- 2025 Biology syllabus glossary (accuracy): https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/glossary
- Open University teacher notes (methanol about 380 kJ mol⁻¹ for a 20 °C rise), via `pre-design/chem-m7-l11-methanol-dataset.md`: https://www.open.edu/openlearncreate/mod/page/view.php?id=191528
- Edexcel IAL energetics structured question (1.19 g ethanol heating 100 g water by 42.3 °C): https://www.savemyexams.com/international-a-level/chemistry/edexcel/17/topic-questions/2-energetics-group-chemistry-halogenoalkanes-and-alcohols/2-1-energetics/structured-questions/
- RSC Education, Heat energy from alcohols (heat losses vary considerably): https://edu.rsc.org/resources/heat-energy-from-alcohols/1733.article
- Reviewer knowledge, not re-fetched: GHS classifications of the four alcohols (H225, H226, H318); averaging repeats reduces random but not systematic error.

## Verdict

**Ready to voice after F1 to F4.** No science blocker. Every NESA quotation and count checked matches its source; the definitions are word for word; no universal marking rule is stated from one example; the worked question and drills do not copy or closely paraphrase Chemistry 2019 Q23 or Biology 2024 Q22. M1 to M5 are small. The Codex error check is still required (including the 2024 Biology question paper).

## Resolution

Resolved by the author in `lessons/skills-s07.md` Revision 2 (23 Oct). All figures recomputed by script.

- **F1 (applied).** Replacement data used everywhere listed in learning review S1. Recomputed: ethanol mean −591.67 → −592, spread 13, largest deviation 6.67 (1.13%), 43.28% → 43%; propan-1-ol mean −695.0, spread 18, largest deviation 10 (1.44%), 34.39% → 34%; gap 103.3 → "about 100" (5.7 to 7.9 times the spreads). Scene 6: "well under half ... uncovered, unshielded can".
- **F2 (applied).** Hook now says "NESA asked for a clearer understanding of these three words and the difference between them"; YouTube description "and NESA's marking feedback keeps asking for a clearer understanding of the three words"; the four quoted comments recorded in the Decisions "Fault used" bullet.
- **F3 (applied)** as learning review S4 (scene 14 narration and chip, scene 8 sign, key note 3, description).
- **F4 (applied).** "shield" removed from the controlled strip; card says "with no draught shield".
- **M1 (applied).** Numbers to verify rewritten with the new data: "591.67 − 585 = 6.67, 1.13%; propan-1-ol 705 − 695 = 10, 1.44%".
- **M2 (applied).** 2019 Q23(b) sample-answer overlap added to the worked-question near-match note, as given.
- **M3 (applied, optional).** Grey tag beside PercentBars: "normal drift between these two alcohols at the same distance: about 2 points (the combustion practical)". No narration change; it dims with PercentBars when the fix line writes.
- **M4 (applied)** with learning review M5.
- **M5 (applied).** Section headings and the Biology comma recorded in the syllabus note.
- Narration 5,882 characters, about 555 s. U+2014: 0. Codex error check still required (including the 2024 Biology question paper).
