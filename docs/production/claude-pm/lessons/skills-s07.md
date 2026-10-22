# S07: Practical questions: validity, reliability, accuracy and fixes that fix (design)

Status: Revision 2 (22 Oct): learning review and Claude science check resolved; needs Codex error check before voicing.

Revision 2 changes (from `../checks/skills07-learning-review.md` and `../checks/skills07-claude-science-check.md`):
- Worked data replaced so the card agrees with chem-m7-p03 (learning S1, science F1): ethanol −592, −585, −598 (mean −592, 43% of its data value); propan-1-ol −693, −705, −687 (mean −695, 34%). Spreads stay 13 and 18 and the gap stays about 100 kJ mol⁻¹. Every dependent line updated: card table, scenes 5, 6, 7 and 14 (narration and screen), model answers, Decisions, PercentBars, Numbers to verify. Scene 6 now says "well under half" and "an uncovered, unshielded can".
- Card stem tightened to four sentences and says "with no draught shield" (learning S1, M1); scene 4 narration and plate tag say the same. Part (a) kept (the fallback is not used); in scenes 5 to 7 the two demands not in use dim to grey and stay legible. Open decisions 2 and 3 closed.
- "shield" removed from scene 7's controlled-variable strip (learning S2, science F4).
- Fix margin mark is now the rail's spanner glyph; the letter "X" and the tag "X = fix" are gone, so nothing collides with Student X (learning S3).
- "Repeats fix reliability, and nothing else" softened (learning S4, science F3): scene 14 now says "Repeats help reliability, but they can't fix an error that pushes every trial the same way." Scene 14 chip, scene 8 sign, key note 3 (adds "and average out random scatter"), Decisions, memory aid check and YouTube description updated.
- Scene 5 adds the gap reason: "so the difference isn't just scatter" (learning S5).
- Hook no longer attributes "interchangeable" to NESA (learning S6, science F2): "NESA asked for a clearer understanding of these three words and the difference between them." The blur cue moves to "difference"; the four report comments are quoted in Decisions; the YouTube description is reworded.
- Minors applied: Biology viewers get explicit permission in scene 4 (learning M2); scenes 6 and 7 dim earlier items and the scene 6 shot list is in time order (learning M3); the route ID chip in scene 6 is replaced by "under half: no shield, no lid (the combustion practical)" (learning M4); "consistently low" becomes "consistently less negative" in feedback 1, its row and the model answer, and "5 to 6 below it" becomes "5 to 6 less negative" for the same reason (learning M5, science M4); ethanol's largest deviation corrected in Numbers to verify (science M1); the 2019 Q23(b) sample-answer overlap recorded in the near-match check (science M2); a grey drift tag added beside PercentBars (science M3, optional, accepted because it answers a p03 viewer's question without narration); syllabus section headings and the Biology comma recorded (science M5).
- Declined: none. Scene 6's "a better mean of the same low values" is kept as written (the learning review lists it as a strength; "low" there means low in size, and the answer row now says "less negative").

Narration 5,882 characters, 15 scenes, about 9.3 minutes (555 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Working title: "Practical questions: validity, reliability, accuracy and fixes that fix | HSC exam skills". Series: HSC exam skills (`docs/production/programme/exam-skills-series-plan.md`, entry 7), shared by Chemistry and Biology. **Id:** `skills-s07`. Lesson key `skills07`. Placement (author recommendation, root to confirm; reasoning in Decisions): in the "HSC exam skills" playlist (order 7); in Chemistry after chem-m7-p03 and before chem-m7-g02 (as `module7-route-review-claude.md` item 11 places it, and as the route JSON's `chem-m7-p03.next` already records); in Biology after bio-m7-p02 and before bio-m7-b04. Every question is written for HSCScience in the HSC style and is never presented, said or implied to be an official NESA question. Every question card carries the tag "HSC-style question, written for HSCScience".

Scope: follows the series format of `skills-s01.md` to `skills-s05.md` (the shared skills kit, a reading of the question with the annotation layer, one worked question, two drills, one in each subject, a weak against strong contrast, a decision board, the key notes hold) and the voice of s05 (Revision 3). It teaches the answer skill for practical and investigation questions and draws its examples from `chem-m7-p03.md` (Revision 2: the spirit-burner comparison, "about half", the shield and lid, "repeats improve reliability, not accuracy", "trace each error to q or n", the risk rows), `chem-m7-c07.md` (Revision 2: the data values and "a simple can catches about half") and `chem-m6-p02.md` (Revision 3: the neutralisation calorimeter, the accepted value of about −57 kJ mol⁻¹, heat loss lowering every run, validity, reliability and accuracy as three plain questions). It recalls each of those in one clause and does not re-teach a method, an error chain or a calculation. Biology examples draw on `bio-m7-p02.md` (Revision 3: the agar-plate comparison of water samples, the controlled variables, 25 to 30 °C incubation, three plates per dilution).

Syllabus content (NSW Chemistry and Biology Stage 6, 2017, Working Scientifically skills content, quoted from the official 2017 syllabus DOCX files linked in `../research/exam-skills/vra-definitions.md`, extracted 22 Oct; the Chemistry codes are shown, and the Biology syllabus has the same wording with ACSBL codes. Sections, checked by the Claude science check: the risk and variables dotpoints sit under Planning Investigations (CH11/12-2), the relevance, accuracy, validity and reliability dotpoint under Analysing Data and Information (CH11/12-5), and CH11/12-3 under Conducting Investigations. The Biology Year 12 listing of the risk dotpoint has a comma before "and select"; the description quotes the Chemistry form):

"justify and evaluate the use of variables and experimental controls to ensure that a valid procedure is developed that allows for the reliable collection of data (ACSCH002)"

"assess risks, consider ethical issues and select appropriate materials and technologies when designing and planning an investigation (ACSCH031, ACSCH097)"

"assess the relevance, accuracy, validity and reliability of primary and secondary data and suggest improvements to investigations (ACSCH005)"

Outcomes in play: CH11/12-2 and BIO11/12-2 (plans: variables, controls, risk), CH11/12-3 and BIO11/12-3 ("conducts investigations to collect valid and reliable primary and secondary data and information", quoted from both syllabuses), CH11/12-5 and BIO11/12-5 (analyses: judging data against the three qualities). No content dotpoint is covered for the first time.

**Boundary:** starts at "practical questions ask about validity, reliability or accuracy, then ask for an improvement". It teaches: the three words as three different questions about a method (validity: measures what was intended; reliability: repeats under the same conditions agree; accuracy: close to the true value), with NESA's wording shown and the 2017 against 2025 wording distinction kept in a tag; a target picture and a memory aid; a three-part answer move (word, feature, fix), in which the feature names a specific part of this method and its effect on the result, and the fix removes that cause; reading a results table for reliability (spread against gap); why repeats cannot fix a systematic error; validity of a comparison through the variables (only the independent variable changes); why generic improvements earn less, with one NESA guideline's bands shown as a pattern; when "repeat it" does earn marks (a reliability question, explained); risk answers as hazard, harm and a control for this substance. **Recalled, not re-taught:** the spirit-burner method, heat loss, the shield and lid and "about half" (chem-m7-p03, chem-m7-c07); the neutralisation calorimeter and about −57 kJ mol⁻¹ (chem-m6-c03, chem-m6-p02); agar plates, incubation and controlled variables (bio-m7-p02); compare as a verb (s03); assess and evaluate as verbs (s04). **Not here:** graphs and data questions (s06, not assumed); uncertainty and percentage error arithmetic; designing a full investigation (s08 covers extended responses); ethics; errors as a calculation (chem-m7-g02 handles anomalous results).

## Decisions

- **Main question:** *When a practical question asks about validity, reliability or accuracy, or asks you to improve a method, how do you name the right quality, point to the feature of this method that affects it, and propose a fix that actually fixes that cause?* Heading on screen: "Practical questions: fixes that fix".
- **Owner brief served:** "Students know the content but don't know how to write the answer." In practical questions students who understand the experiment still lose marks by using the three words interchangeably, by naming a change without saying what it fixes, by writing a generic improvement ("repeat it", "be more careful") that does not touch the stated problem, and by writing a safety control that is not linked to a hazard. The video teaches one answer move (word, feature, fix), the three words through one picture, and the "repeat it" rule (it earns marks only for reliability, and only when explained).
- **Fault used (`../research/exam-skills/common-faults.md`):** "Treat reliability, validity and accuracy as interchangeable. Students need to name the specific feature of the study and explain how it affects the quality being asked about. A generic improvement can miss the flaw in the given method.": **4/12** reports (Biology 3/6: B21 Q31, B24 Q22(b), B25 Q32; Chemistry 1/6: C25 Q23). Related advice to make the procedure or safety response specific to the given investigation: B20 Q27(a), B23 Q26(a), B25 Q29(b), C21 Q21 and C22 Q33. The four report comments, as NESA wrote them: "demonstrating a clear understanding of the terms reliability, accuracy and validity" (B21 Q31); "understanding the difference between reliability, validity and accuracy" (B24 Q22(b)); "understanding how reliability and validity affect the quality of epidemiological studies" (B25 Q32); "recognising the difference between accuracy and reliability in experiments" (C25 Q23). "Interchangeable" is the research pack's paraphrase, not NESA's wording, so the narration does not attribute it to NESA. Spoken in the hook as "In four of the last twelve Chemistry and Biology marking feedback reports, NESA asked for a clearer understanding of these three words and the difference between them." On screen: 12 report tiles, 4 flagged (`GreyTag`: "NESA marking feedback, Chemistry and Biology 2020 to 2025: 4 of 12 reports"). The count is reports with at least one comment, not a share of students (pack counting rule), and the narration says "reports".
- **Definitions (`../research/exam-skills/vra-definitions.md`):** the 2017 syllabuses set the current HSC courses (first HSC on the 2025 syllabuses: Biology 2028, Chemistry 2029). On screen, each word gets a plain question in large text and the NESA wording in a small grey tag:
  - Validity, 2017 Chemistry syllabus: "An extent to which tests measure what was intended or to which data, inferences and actions produced from tests and other processes are accurate." (Biology 2017 uses a semicolon and repeats "an extent to which"; tag "2017 syllabus glossary (Chemistry wording)"). Plain question: "Does the method measure what it was meant to?"
  - Reliability, 2017 Biology and Chemistry syllabuses: "An extent to which repeated observations and/or measurements taken under identical circumstances will yield similar results." Plain question: "Repeat it the same way: do the results agree?"
  - Accuracy, 2025 syllabus glossary (the 2017 syllabuses have no standalone entry): "The extent to which measurements are considered to be close to the true value." Tag "2025 syllabus glossary; the 2017 syllabus has no glossary entry". Plain question: "How close is it to the true value?"
  - These match the wording used in chem-m6-p02 scene 10, chem-m7-p03 author note (j) and bio-m7-p02 scene 11, so viewers meet the same three questions again.
- **What markers reward (pack, `what-markers-reward.md`, "Practical and investigation questions"; guideline text checked 22 Oct against the NESA PDFs the pack links, extracted with a script):**
  - **Chemistry 2025 Q23 (3 marks):** "Justifies TWO appropriate changes with justifications of both related to accuracy" (3); "Justifies ONE appropriate change OR Identifies TWO appropriate changes" (2); "Provides some relevant information" (1). Shown in scene 8 as a three-rung `BandLadder`, paraphrased ("two changes, each justified by its effect on accuracy"; "one justified change, or two changes named without reasons"; "some relevant information"), tag "a NESA Chemistry marking guideline, 2025 (3 marks)". The question's topic is not named (it is a gravimetric procedure, unrelated to the worked question).
  - **Biology 2024 Q22(b) (2 marks):** "Explains how to ensure the investigation is reliable" (2); "Provides some relevant information" (1). Its sample answer repeats the culture on five plates of the same sample and checks that the results are similar. Spoken in scene 8 as "in one Biology guideline, explaining how repeats show whether results agree earned the marks". This is the evidence that "repeat it" can earn marks when the question is about reliability and the answer explains it. The topic (microbes in food or water) is not named on screen, because drill 2 is also an agar-plate question and must not look like a variant of it (see the near-match check).
  - **Biology 2024 Q22(a) (2 marks):** "Justifies a safety precaution used to prevent infection" (2). The pack: "Naming a safety precaution alone was insufficient for the two marks; its protection against infection had to be explained." Spoken in scene 9 as "In one Biology guideline, the marks needed the precaution and how it prevents infection."
  - **Chemistry 2021 Q21(a) (2 marks, checked 22 Oct):** "Identifies a safety concern associated with organic liquids" and "States how the safety concern could be addressed" (2); sample answer: organic solvents are generally flammable, so no sources of ignition should be present. Recorded as support for scene 9's hazard and control pairing; not spoken (scene 9 cites one guideline only).
  - **Chemistry 2019 Q23(b) (2 marks, checked 22 Oct):** "Provides a change that would improve accuracy" and "Gives a reason for the low molar enthalpy of combustion related to the change" (2). Recorded as support for the word, feature, fix move (the change must be tied to the cause of the low value). Not shown on screen, because it is a spirit-burner accuracy question and the worked question must not sit beside it (near-match check).
  - **Chemistry 2020 Q28 (3 marks, checked 22 Oct):** "Explains why the results produced by the method are not accurate and not reliable" (3); "Shows some understanding of why the results produced by the method are not accurate and/or not reliable" (2). Its sample answer gives a separate cause for each quality (a deliquescent "primary standard" for accuracy; an indicator changing colour in the flat region for reliability). Recorded as support for "three words, three different questions": one guideline asked for accuracy and reliability separately, with a separate cause for each. Not spoken.
  - **Biology 2023 Q27 (evaluate a method):** the pack notes that the highest band needs a comprehensive analysis of validity and an informed judgement, while identifying study features sits at two marks. Recorded as support; not spoken.
  - **Not claimed:** no universal mark allocation for practical questions; no rule that "repeat" always earns or never earns marks. The narration says "in one recent Chemistry guideline" and "in one Biology guideline", and the decision board says "repeats help reliability, but they can't fix an error that pushes every trial the same way", which is a science statement, not a marking rule.
- **The answer move and memory aids (new; not in the Module 5 or 7 banks, which hold content aids):**
  - **Word, feature, fix.** Word: which quality is the question about (validity, reliability, accuracy, or safety)? Feature: which specific part of this method affects it, and what does it do to the result? Fix: a change that removes that cause. Test line, spoken: "If your fix would work for any experiment, it probably isn't fixing this one." Built as the `FixRail` (three rows), the s07 counterpart of s05's `StepRail`.
  - **Right target, repeats agree, close to true.** A three-part picture aid for the three words (validity, reliability, accuracy, in that order). Assumptions checked in "Memory aid check".
  - **Repeats help reliability, not a systematic error.** A short rule, spoken twice (scene 6: "repeats improve reliability, not accuracy", said of this systematic heat loss; scene 14: "Repeats help reliability, but they can't fix an error that pushes every trial the same way"), with its condition: repeats show whether results agree and average out random scatter in the mean; they do not remove an error that pushes every trial the same way, and they do not repair an uncontrolled variable.
- **Target picture (coded abstract diagram, `TargetTrio`):** three coded targets in a row, each with five dots. (1) A tight cluster off centre: "reliable, not accurate". (2) Dots scattered around the centre: "not reliable". (3) A tight cluster on the centre: "reliable and accurate". Then a fourth, separate target labelled "wrong target" with a tight cluster on its centre: "not valid: measures the wrong thing, however neat". The picture is a common teaching analogy, not NESA's; the screen labels it "a picture, not a definition". Author note: strictly, a scatter centred on the bull's-eye has an accurate mean but individual results far from it; scene 2 says only "aren't reliable" for that target, and drill 1 handles mean against spread with numbers.
- **The worked question (Chemistry, combustion enthalpy, 7 marks in three parts):**
  - **Card:** "A student compared the molar enthalpies of combustion of ethanol and propan-1-ol. For each trial, she burned the alcohol in a spirit burner beneath an uncovered copper can containing 100.0 g of water, with no draught shield, and stopped when the water had warmed by about 15 °C. The can was 2 cm above the wick for ethanol, but because the propan-1-ol flame was taller, she raised it to 6 cm for propan-1-ol. She did three trials of each alcohol." Table: "Alcohol | Trial 1 | Trial 2 | Trial 3 | Mean | Data value" (all kJ mol⁻¹); "Ethanol | −592 | −585 | −598 | −592 | −1367"; "Propan-1-ol | −693 | −705 | −687 | −695 | −2021". Demands: "(a) Assess the reliability of the student's results. (2 marks)" "(b) The student claims that doing ten trials of each alcohol would make her values closer to the data values. Evaluate this claim. (2 marks)" "(c) Explain how ONE feature of the method affects the validity of her comparison, and propose a change that fixes it. (3 marks)"
  - **Why this case:** combustion enthalpy is the classic HSC practical context (route review item 11), and chem-m7-p03, the video before this one in Chemistry, has just taught the method, so only the answer writing is new. One stimulus carries all three words, each with a different feature: (a) reliability from the table (spread against gap, which p03 scene 7 taught as an idea; here it is used as evidence); (b) accuracy against a repeats claim (p03 scene 10's rule, applied to a claim); (c) validity from an uncontrolled variable (the can-to-wick distance, which p03 scene 4 lists as controlled). Every number is on the card, so the walkthrough underlines each value as it is used.
  - **Why the distance is a validity feature, not only an accuracy one:** with the can raised, a larger share of propan-1-ol's heat spreads into the air before it reaches the can, so its value is lowered more than ethanol's. The card's own numbers show it: ethanol's mean is 43.3% of its data value and propan-1-ol's 34.4%. Ethanol's 43% matches chem-m7-p03's unshielded, uncovered level (42.7%), and the 9-point drop is far larger than the 1.6-point drift p03 measured between ethanol and propan-1-ol at a fixed distance (50.3% to 48.7%). The comparison then mixes the alcohol's effect with the distance's effect, so it no longer measures only what was intended. Scene 7 uses the two percentages as evidence (README takeaway 6: use the stimulus).
  - **The fix that fixes (c):** keep the can 2 cm above the wick for both alcohols, and trim the taller propan-1-ol wick so its flame does not touch the can. Trimming is p03's soot fix ("trim the wick for a smaller flame"), recalled. "Raise both cans to 6 cm" would also make the distance equal but would lose more heat for both; the model answer names it as acceptable for validity but worse for accuracy (author note, not spoken).
  - **The fix in (b):** a draught shield and a lid (p03 scene 10). (b) asks for an evaluation, so the judgement (the claim is wrong) and the reason (heat is lost in every trial, a systematic error, so more trials give a better mean of the same low values) carry the marks; the improvement is a supporting line.
  - **Illustrative marks (HSCScience guide, labelled on screen):** (a) 2: a judgement (reliable) with evidence from the table (trials within about 1.5% of each mean, or spreads of 13 and 18 kJ mol⁻¹ against a gap of about 100 kJ mol⁻¹). (b) 2: the judgement (the claim is incorrect) and the reason (heat lost in every trial is a systematic error; repeats improve reliability, not accuracy). (c) 3: the feature (the can was raised for propan-1-ol only, so the distance was not controlled), its effect (more heat lost for propan-1-ol, so the difference is not caused by the alcohol alone; 43% against 34%), the fix (same distance for both, with a trimmed wick).
- **Weak against strong (scene 8):** both answer part (c)'s improvement. Answer A: "Repeat the experiment more times and be more careful when measuring." Answer B: "Keep the can 2 cm above the wick for both alcohols, trimming the propan-1-ol wick, so both lose a similar share of heat and the difference is caused by the alcohol." Illustrative: A earns nothing for the fix (neither part changes the distance); B earns the fix mark. Then the 2025 ladder shows the pattern "named only" against "justified", and the Biology 2024 Q22(b) chip shows when repeats do earn marks. Neither answer is placed on the NESA ladder.
- **Drills (two; feedback about 25 to 30 s each):** the narration says "Do the one in your subject, or both".
  - **Drill 1, Chemistry, compare, 3 marks:** "Two students each measured the molar enthalpy of neutralisation of hydrochloric acid with sodium hydroxide three times, using a lidded polystyrene cup. The accepted value is about −57 kJ mol⁻¹. Student X: −51, −52, −51 kJ mol⁻¹. Student Y: −60, −53, −58 kJ mol⁻¹. Compare the reliability and accuracy of the two students' results." Content: chem-m6-c03 and chem-m6-p02 (the accepted value, heat loss lowering every run). Answer: X is more reliable (spread 1 kJ mol⁻¹ against 7); Y is more accurate (each of Y's values is within 4 kJ mol⁻¹ of −57, X's are 5 to 6 less negative; Y's mean is −57, X's about −51); X's results are consistently less negative, a sign of a systematic error such as heat loss. Crossed habit: "X is more accurate because its results agree" (reliability mistaken for accuracy).
  - **Drill 2, Biology, explain and propose, 3 marks:** "A student compared the microbes that grow from tap water and from rainwater tank water. She spread 0.1 mL of each sample onto its own nutrient agar plate, taped the lids and incubated both plates upside down at 28 °C. She counted the tap water plate after 24 hours and the tank water plate after 72 hours. The tap water plate had 31 colonies and the tank water plate had 118 colonies. She concluded that more microbes grew from the tank water than from the tap water. Explain why this conclusion is not valid, and propose a change that fixes the problem." Content: bio-m7-p02 (controlled variables include incubation time and temperature; colonies grow from single cells over time; 25 to 30 °C, taped, upside down). Answer: the incubation time differed (24 h against 72 h) as well as the water source; given longer, more colonies grow large enough to see and count, so the difference may come from the time, not the water; fix: incubate both plates at 28 °C for the same time (for example 48 hours) and count them at the same time. Crossed habit: "Repeat with more plates of each sample" (better reliability, but every repeat still has unequal times).
  - **Why these two:** each tests a different word with the answer move, in a case students already understand: drill 1 separates reliability from accuracy with numbers (the confusion the hook names); drill 2 is validity through a controlled variable, with the "repeat it" habit crossed where it earns nothing. The worked question covers all three words; the drills isolate the two confusions most likely to cost marks.
  - **Precision:** drill 1's values are integers in kJ mol⁻¹, as reported in the stem; Y's mean is −171 ÷ 3 = −57 exactly; X's mean is −51.3, said "about minus fifty one". Drill 2's counts are within bio-m7-p02's 30 to 300 counting range, so plate counting is not a second flaw.
- **Risk (scene 9):** answers name a hazard, the harm, and a control that stops that harm, for the substance in the question. Example from chem-m7-p03 scene 12: the alcohols are flammable (methanol, ethanol and propan-1-ol highly flammable, butan-1-ol flammable), so refill a burner only when it is cold and away from flames. The narration says "These alcohols are flammable" (true for all four; "highly" is not claimed for butan-1-ol). Crossed: "wear a lab coat" written alone (not linked to a hazard in this practical). Author note: safety glasses are a correct control for propan-1-ol and butan-1-ol (serious eye damage, H318, p03); the crossed chip is a lab coat to avoid suggesting glasses are wrong.
- **Placement (author recommendation, root to confirm):**
  - **Chemistry: after chem-m7-p03, before chem-m7-g02.** Route review item 11 sets this, and `module7-video-route-draft.json` already gives chem-m7-p03 `next: ["skills-s07"]`. Every content item here (p03, c07, m6-c03, m6-p02) is taught by then. Consequence: in the Chemistry playlist s07 comes before s06 (whose Chemistry placement is left to the Module 8 review), so s07 never refers to s06.
  - **Biology: after bio-m7-p02, before bio-m7-b04.** Reasons: (1) it mirrors the Chemistry logic: it sits straight after a practical whose design, controls and validity, reliability and accuracy card the video can draw on (p02 scenes 3, 7 and 11), and drill 2 needs exactly p02's content; (2) bio-m7-p02 is the first Module 7 Biology practical that the syllabus asks students to "design and conduct" (route review item 6), so the answer skill arrives with the first design question; (3) it keeps spacing: s05 sits after bio-m5-b13 and s04 after bio-m6-b03, so s07 does not crowd them; (4) Biology viewers get the skill before bio-m7-p05 (antimicrobial discs), which will ask the same questions again. Alternative considered: after bio-m7-p05 (zone-of-inhibition practical, a classic HSC validity context). Rejected because p05 is not designed yet, sits twelve videos later, and drill 2 would then need p05's content. Consequence: in Biology too, s07 comes before s06 (placed before bio-m7-g01); the video does not depend on s06.
  - Root to record the placement in the route files and the parallel production board.
- **Cross-subject viewers:** scene 4 says "If you take Biology, watch the layout of each answer: your question is coming." Biology-only viewers have not met a spirit burner, but every value they need is on the card, and the `FixRail` labels each answer line by word, feature or fix. YouTube chapters let them jump to the Biology drill.
- **Entry knowledge:**
  - Series: s01 (reading routine: verb, marks, content words and givens, constraint, tick each part), s02 (explain shows the link), s03 (compare in pairs, used in drill 1), s04 (assess and evaluate need a judgement with evidence, used in parts a and b), s05 (calculation layout; not needed here). s06 is not assumed.
  - Chemistry: chem-m7-p03 (the spirit-burner set-up, method and comparison; the variables, with flame distance controlled; "about half"; shield, lid, close, cap; repeats improve reliability, not accuracy; the risk rows); chem-m7-c07 (data values −1367 and −2021 kJ mol⁻¹); chem-m6-c03 and chem-m6-p02 (the neutralisation calorimeter, about −57 kJ mol⁻¹, heat loss lowering every run); chem-m5-p01 (validity, reliability, accuracy and variables in plain words).
  - Biology: bio-m7-p02 (agar plates, serial dilution, taped plates upside down at 25 to 30 °C, controlled variables including incubation time and temperature, three plates per dilution, colonies counted in the 30 to 300 range); earlier Biology practicals for variables (bio-m5-p03, bio-m6-p01).
- **Start and stop:** starts at "practical questions ask about validity, reliability or accuracy". Stops after the three words and their picture, the word, feature, fix move, a worked three-part question (reliability from a table, a repeats claim judged against accuracy, validity from an uncontrolled variable with its fix), weak against strong improvements with one guideline's bands, when "repeat it" earns marks, risk answers, and two drills.
- **Handoff:** s08, "Extended responses (6 to 9 marks)".
- **Visual system:** the shared skills kit (`src/explainer/lessons/skills-shared/`): `QuestionCard` with its annotation layer (`Ann` kinds verb, marks, given, constraint, ring, tag, pulse; `CardDim`), `MarksBadge`, `AnswerBox` (rows, margin ticks, counter, slots, `AAnn` under, ring), `MarkCounter`, `LostMarksTag`, `WeakStrongPanel`, `RoutineStrip` (mini at the far left), `DrillCountdown`, `Chip`, `GreyTag`, `CrossedHabit`, `PenArrow`, `Plate` and `mkPlate`, `Heading`, `HandLine`, `Flag`, `KeyNotes`, `Fade`; `BandLadder` from s04 and s05 (root may promote it to the shared kit).
  - Imported (not copied): the error-chain row from chem-m6-p02's parts file (used once, small, in scene 6: "heat lost → q ↓ → ΔH less negative"); the gap-against-spread brace from chem-m7-p03 (scene 5).
  - New lesson-local components (suggested folder `src/explainer/lessons/skills-s07`):
    - `TargetTrio`: four coded targets (concentric rings, five dots each), built in turn; labels as Decisions. Abstract diagram, coded. A small grey tag "a picture, not a definition".
    - `FixRail`: a three-row card, "Word: which quality?", "Feature: which part of this method, and what it does", "Fix: removes that cause", with small coded icons (a speech-bubble-free word chip "V R A", a pen ring around a step, a spanner glyph); mini and full states, rows lighting on cue, built like s05's `StepRail`. Each answer line in the walkthrough carries a margin mark: "W", "F", or the rail's small spanner glyph for fix (no letter "X", which would collide with drill 1's Student X).
    - `TableSpread`: an overlay for the card's results table that draws a small bracket over each row's three trials with its spread ("13", "18") and a tall bracket between the two means ("gap about 100"). Reuses p03's brace style.
    - `PercentBars`: two short horizontal bars "ethanol 43% of its data value" and "propan-1-ol 34%", each with a faint full-length outline for 100%.
    - `ClockChip`: a small coded clock face with an hour label ("24 h", "72 h", then "48 h" on both), for drill 2's feedback.
  - Plates: listed under Assets (no new plates; two are commissioned by chem-m7-p03).
- **Mistake scene:** none as a template. Scene 8's weak and strong pair is the one contrast. Each drill crosses one habit; the worked question crosses one claim (part b).
- **Legacy logic ported:** none.

Main question: *When a practical question asks about validity, reliability or accuracy, or asks you to improve a method, how do you name the right quality, point to the feature of this method that affects it, and propose a fix that actually fixes that cause?*
Entry knowledge: as above. Students start Year 12; Chemistry viewers have watched Module 7 up to chem-m7-p03; Biology viewers have watched Module 7 up to bio-m7-p02.
Stops after: the three words with a picture and NESA's wording; word, feature, fix; a worked three-part spirit-burner question; improvements that fix the stated problem, with one guideline's bands; when "repeat it" earns marks; risk as hazard, harm and control; one Chemistry drill (reliability against accuracy) and one Biology drill (validity through a controlled variable).
Handoff: s08, extended responses.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames come from the recording's word timings. Layout as s01 to s05: the question card on top (`ZONE.card`), the answer box below (`ZONE.box`), the side column at the right (`ZONE.side`) for the fix rail, the target picture and the plates, and the routine strip small at the far left (`ZONE.strip`). At most three bright text items are live at once (usually the card's current underline, the current answer line and its chip); earlier items dim. Pronunciations as in Review notes.

### 1. hook
> Practical questions often ask about validity, reliability or accuracy, and then ask you to improve the method. In four of the last twelve Chemistry and Biology marking feedback reports, NESA asked for a clearer understanding of these three words and the **difference** between them. And in one recent Chemistry guideline, full marks needed each change to be **justified** by what it does for accuracy. So let's get the three words straight, and write fixes that actually **fix** the problem.

Visual:
- Three word chips write in a row, ink: "validity", "reliability", "accuracy". On "difference" they slide over each other and blur into one grey smudge; 12 small report tiles (Chemistry and Biology, 2020 to 2025) write beneath, and 4 take a red `Flag` in turn. `GreyTag`: "NESA marking feedback, Chemistry and Biology 2020 to 2025: 4 of 12 reports".
- On "justified" the tiles dim and two small answer chips write: "change: add a lid" (grey) and "change: add a lid, so less heat escapes and q is closer to the true value" (ink, with an amber underline under "so ..."). `GreyTag`: "a NESA Chemistry marking guideline, 2025".
- On "fix" the three word chips separate again into three clean columns, and the heading writes on: "Practical questions: fixes that fix".
- Hold about 1 second.

### 2. three-words
> Three words, three different questions. **Validity**: does the method measure what it was meant to? **Reliability**: if you repeat it the same way, do the results agree? **Accuracy**: how close is the result to the true value? Picture a target. Results clustered tightly but off centre are reliable, not **accurate**. Results scattered around the centre aren't **reliable**. And a tight cluster on the **wrong target** isn't valid, however neat it looks. Right target, repeats agree, close to true.

Visual:
- Three columns, each lighting on its cue with the plain question large and the NESA wording small and grey beneath: "Validity: does it measure what it was meant to?" (tag "2017 syllabus glossary (Chemistry wording): 'An extent to which tests measure what was intended ...'"); "Reliability: repeat it the same way: do results agree?" (tag "2017 syllabus glossary: 'An extent to which repeated observations and/or measurements taken under identical circumstances will yield similar results.'"); "Accuracy: how close to the true value?" (tag "2025 syllabus glossary: 'The extent to which measurements are considered to be close to the true value.' The 2017 syllabus has no entry."). Each column dims to its header as the next lights.
- On "Picture a target" the columns shrink to headers and `TargetTrio` builds in the centre. On "accurate": target 1, a tight cluster off centre, label "reliable, not accurate". On "reliable": target 2, five dots scattered around the centre, label "not reliable". Target 3 (tight on the centre, "reliable and accurate") writes silently.
- On "wrong target" a fourth target slides in apart from the others, a tight cluster on its centre, labelled in grey "wrong target"; a terracotta label: "not valid: measures the wrong thing". Grey tag under the row: "a picture, not a definition".
- On "Right target, repeats agree, close to true" the aid writes large and handwritten, each phrase linked by a pen arrow to its column header: validity, reliability, accuracy.
- Bright at the end: the aid and the wrong-target label. Hold about 1 second.

### 3. word-feature-fix
> So every answer needs three things. The **word**: which quality is the question about? The **feature**: which part of this method affects it, and what does it do to the result? Then the **fix**: a change that removes that cause. Word, feature, fix. If your fix would work for **any** experiment, it probably isn't fixing this one.

Visual:
- `FixRail` builds full size in the side column, each row on its cue: "Word: which quality?"; "Feature: which part of this method, and what it does to the result"; "Fix: a change that removes that cause".
- On "Word, feature, fix" the initials W, F, F light amber down the rail's edge. In the answer box each line carries a margin mark: "W", "F", or the rail's small spanner glyph for fix.
- On "any" a generic chip "repeat it and be more careful" writes beside the rail, a ghost copy of it stamps onto three different small grey apparatus thumbnails in turn (the spirit-burner set-up, the foam cup, an agar plate), and the chip takes a grey tag "fits everything, fixes nothing in particular". It fades.
- The rail shrinks to a tab in the side column; its rows light on cue in scenes 5 to 7.

### 4. question-card (countdown, 10 seconds)
> Here's an HSC-style Chemistry question. A student compares ethanol and propan-one-ol in a spirit burner under an uncovered copper can, with no draught shield. Because the propan-one-ol flame was **taller**, she raised the can for those trials. Her three trials and the means are in the table. There are three parts: reliability, a claim about more trials, and validity. If you take Biology, you don't need the chemistry here: watch how each answer names the word, the feature and the fix. Your question is coming. Pause here to answer.

Visual:
- `QuestionCard` writes on. Badge "Chemistry". Tag "HSC-style question, written for HSCScience".
- Card text and table exactly as Decisions (the worked question), with the three demands and their mark values.
- `m7-spirit-burner-calorimeter-v1.png` small at the card's right (tag "spirit burner, uncovered copper can, no shield"). On "taller" a coded bracket between the flame tip and the can base stretches from a label "2 cm" to "6 cm" and holds there (it shows only what the card says).
- Empty `AnswerBox` below with three labelled slots "(a)", "(b)", "(c)"; counter "0 / 7".
- `RoutineStrip` mini at the far left dims. `DrillCountdown` 10 seconds with "Pause here to answer." The full card stays on screen.

### 5. part-a (reliability)
> Part a: reliability. That's about **repeats**. Ethanol's three trials sit within about **one percent** of their mean, and propan-one-ol's within about one and a half. So her results are reliable. Better still, use the table: the gap between the two alcohols, about a **hundred** kilojoules per mole, is far bigger than the spread within either set, so the difference isn't just scatter. A judgement, and evidence from the stimulus.

Visual:
- The card shrinks to about 0.72 and keeps its table readable; demands (b) and (c) dim to grey and stay legible. Highlighter on "Assess" (grey chip "assess: a judgement, with evidence (s04)") and on "reliability". Rail row "Word" lights; a margin chip "W: reliability = do repeats agree?".
- On "repeats" the table's trial cells underline amber. On "one percent" `TableSpread` draws a small bracket over the ethanol row "spread 13" and over the propan-1-ol row "spread 18"; a grey tag "largest difference from the mean: about 1.1% (ethanol), 1.4% (propan-1-ol)".
- Answer row (a) writes: "Reliable: each alcohol's trials agree within about 1.5% of the mean" (margin "F"). Tick, "1 / 7".
- On "hundred" a tall bracket between the two means: "gap about 100 kJ mol⁻¹". Row (a) adds: "the gap between alcohols (about 100 kJ mol⁻¹) is much bigger than the spread (13, 18)". Tick, "2 / 7". Grey label "HSCScience marking guide (illustrative)".
- Bright at the end: row (a), the gap bracket, the counter.

### 6. part-b (accuracy and the repeats claim)
> Part b: she says ten trials would bring her values closer to the data values. That's a claim about **accuracy**. Her values are well under half the data values, because heat escapes from an uncovered, unshielded can in **every** trial. More trials just give a better mean of the same low values. So the claim is wrong: repeats improve reliability, not accuracy. What would help? A **draught shield** and a lid, because they cut the heat that escapes.

Visual:
- Demands (a) and (c) dim to grey and stay legible; row (a) dims. Underline on "ten trials" and on "closer to the data values". Rail row "Word" relights; margin chip "W: closer to the data value = accuracy".
- On "accuracy" the means and data values in the table pair up with a small grey link each: "−592 vs −1367", "−695 vs −2021"; a grey chip "under half: no shield, no lid (the combustion practical)".
- On "every" the links and the "under half" chip dim. The spirit-burner plate shows orange heat arrows leaving the can's sides and open top; three small trial icons under it each get the same arrows; the chem-m6-p02 error-chain row writes small: "heat lost → q ↓ → ΔH less negative", with a grey tag "same push in every trial: systematic".
- Answer row (b) writes: "Incorrect: heat is lost in every trial, so every value is less negative than the data value; ten trials give a better mean of the same low values" (margin "F"). Tick, "3 / 7". Then "Repeats improve reliability, not accuracy." Tick, "4 / 7".
- On "repeats improve reliability" a `CrossedHabit` chip "ten trials → closer to the data values" takes a red scribble cross. Caption "repeats: reliability, not accuracy".
- On "draught shield" the error-chain row dims; the plate cross-fades to `m7-spirit-burner-calorimeter-shield-v1.png` and the side arrows turn back at the shield; a supporting row writes in grey: "To improve accuracy: draught shield and lid, which cut the heat that escapes" (spanner margin mark).
- Bright at the end: the cross, the "repeats improve reliability" line and the shielded plate.

### 7. part-c (validity and the fix)
> Part c: validity. To compare the alcohols fairly, only the **alcohol** should change. But she raised the can from two to six centimetres for propan-one-ol, so more of its heat spread into the air before it reached the can. Look at the numbers: ethanol caught about **forty three** percent of its data value, propan-one-ol only about thirty four. So part of the difference comes from the distance, not the alcohol. The fix: keep the can **two centimetres** above the wick for both, and trim the taller wick so the flame doesn't touch the can.

Visual:
- Demands (a) and (b) dim to grey and stay legible; row (b) dims. Highlighter on "validity" and "comparison". Rail row "Word" lights; margin chip "W: validity = measures only the alcohol's effect?".
- On "alcohol" a small variables strip writes under the card: "independent: the alcohol | controlled: water, can, rise, distance". Rail row "Feature" lights. On "raised the can" pen underlines "2 cm" and "raised it to 6 cm" in the card, and the "distance" item in the strip turns terracotta: "distance: not controlled".
- The plate thumbnail shows the coded bracket at 6 cm with more orange arrows curling into the air than at 2 cm (a side-by-side pair of small thumbnails, 2 cm and 6 cm).
- On "forty three" the two thumbnails dim and `PercentBars` draws: "ethanol: 592 ÷ 1367 = 43%" and "propan-1-ol: 695 ÷ 2021 = 34%"; underlines on the two means and two data values in the table. A small grey tag beside the bars: "normal drift between these two alcohols at the same distance: about 2 points (the combustion practical)".
- Answer row (c) writes: "The can was raised to 6 cm for propan-1-ol only, so it lost more heat (34% against 43% caught): the difference is not caused by the alcohol alone" (margin "F"). Ticks, "5 / 7" (feature) and "6 / 7" (effect).
- Rail row "Fix" lights. On "two centimetres" `PercentBars` and its tag dim, and row (c) adds: "Fix: keep the can 2 cm above the wick for both alcohols; trim the propan-1-ol wick so its flame does not touch the can" (spanner margin mark). Tick, "7 / 7". The 6 cm bracket on the thumbnail drops to 2 cm and the terracotta "distance" item turns green.
- Bright at the end: the fix line, the green strip item and the counter.

### 8. fixes-that-fix
> Now compare two improvements for part c. Answer A says: repeat the experiment and **be more careful**. That could go on any practical, and neither part changes the distance. Answer B names the change and says what it fixes. In one recent Chemistry guideline, two changes each **justified** by their effect on accuracy got three marks, while two changes named without reasons got **two**. So when does repeat it earn marks? When the question is about **reliability**: in one Biology guideline, explaining how repeats show whether results agree earned the marks.

Visual:
- `WeakStrongPanel`: left "Answer A": "Repeat the experiment more times and be more careful when measuring." Right "Answer B": "Keep the can 2 cm above the wick for both alcohols, trimming the propan-1-ol wick, so both lose a similar share of heat and the difference is caused by the alcohol."
- On "be more careful" Answer A's two phrases each take a grey tag: "repeat → reliability, not the distance"; "be more careful → which step?". `LostMarksTag` on A: "fix mark: 0". Answer B's "so both lose a similar share of heat" takes an amber underline; tick "fix mark: 1". Grey label "HSCScience marking guide (illustrative)".
- On "justified" the panel dims and a three-rung `BandLadder` draws on its own: "3: two changes, each justified by its effect on accuracy"; "2: one justified change, OR two changes named without reasons"; "1: some relevant information". On "two" the phrase "named without reasons" takes an amber underline. `GreyTag`: "a NESA Chemistry marking guideline, 2025 (3 marks), paraphrased". Neither answer is placed on the ladder.
- On "reliability" the ladder dims and a single chip writes: "reliability question: 'repeat it' + how it shows whether results agree → marks". `GreyTag`: "a NESA Biology marking guideline, 2024 (2 marks)". Beside it a small two-way sign: "systematic error or validity problem → repeats don't fix it" / "reliability question → explain the repeats".
- Bright at the end: the chip and the two-way sign. Hold about 1 second.

### 9. risk-answers
> Risk questions work the same way: the **hazard**, the harm it causes, and a control that stops it, for this substance. These alcohols are **flammable**, so refill a burner only when it's cold and away from any flame. Writing just wear a **lab coat** doesn't say what it protects against. In one Biology guideline, the marks needed the precaution and how it **prevents** infection.

Visual:
- A three-column strip writes in the centre: "Hazard | Harm | Control". On "hazard" the strip's headers light in turn.
- On "flammable" one row fills from chem-m7-p03's risk table: "alcohols: flammable (methanol, ethanol, propan-1-ol highly flammable) | fire; vapour reaches a flame | refill cold, away from flames; cap to put it out". `m7-ethanol-fuel-bottle-v1.png` small in the hazard cell with a coded label "alcohol". Grey tag "from the combustion practical's risk table".
- On "lab coat" a `CrossedHabit` chip "wear a lab coat" (alone, no hazard named) takes a red scribble cross. Caption "which hazard? which harm?".
- On "prevents" a grey chip: "a safety answer that earned the marks: the precaution, and how it prevents infection". `GreyTag`: "a NESA Biology marking guideline, 2024 (2 marks)".
- Bright at the end: the filled row, the cross, the chip. Hold about 1 second.

### 10. drill-1 (Chemistry; countdown, 10 seconds)
> Your turn. Do the one in your subject, or both. Chemistry first. Two students each measure the molar enthalpy of neutralisation three times. The accepted value is about minus fifty seven. Their results are on screen. **Compare** the reliability and accuracy of their results. Three marks. Pause here to answer.

Visual:
- Board clears. `QuestionCard`: badge "Chemistry", tag "HSC-style question, written for HSCScience".
- Card text: "Two students each measured the molar enthalpy of neutralisation of hydrochloric acid with sodium hydroxide three times, using a lidded polystyrene cup. The accepted value is about −57 kJ mol⁻¹." Table: "Student | Trial 1 | Trial 2 | Trial 3 (kJ mol⁻¹)"; "X | −51 | −52 | −51"; "Y | −60 | −53 | −58". "Compare the reliability and accuracy of the two students' results." "(3 marks)"
- `m6-foam-cup-calorimeter-v1.png` small at the right (tag "lidded polystyrene cup"). Nothing answer-bearing: no means, no spread brackets, no number line.
- Empty answer box, counter "0 / 3". `FixRail` mini at the side (all rows unlit). `DrillCountdown` 10 seconds with "Pause here to answer." `RoutineStrip` dims.

### 11. feedback-1
> X's results agree within **one** kilojoule per mole, and Y's spread over seven, so X is more **reliable**. But Y's values are closer to minus fifty seven, and its mean is minus fifty seven, so Y is more **accurate**. X is consistently less negative, a sign of a systematic error like heat loss. The mix-up to drop: X is more accurate because its results agree. Agreeing is reliability.

Visual:
- Annotations land fast: highlighter on "Compare", ring on "(3 marks)", underlines on X's and Y's rows and on "−57 kJ mol⁻¹" as each is used.
- On "one" a coded number line from −62 to −50 draws under the card with a fixed reference tick "−57 (accepted)"; X's three dots land as a tight cluster at −51 and −52 (bracket "spread 1"), Y's three dots land spread at −60, −58 and −53 (bracket "spread 7").
- Rows write with margin letters and ticks, paired as s03 taught ("X | Y" on the same feature):
  - "Reliability: X's trials agree within 1 kJ mol⁻¹, Y's spread over 7, so X is more reliable." Tick, "1 / 3".
  - On "accurate": "Accuracy: Y's values are within 4 of −57 (mean −57); X's are 5 to 6 less negative (mean about −51), so Y is more accurate." Tick, "2 / 3".
  - "X is consistently less negative: a systematic error, such as heat loss." Tick, "3 / 3". Grey label "HSCScience marking guide (illustrative)".
- The number line echoes `TargetTrio`: a small grey thumbnail of target 1 beside X's cluster and target 2 beside Y's dots.
- On "Agreeing is reliability" a `CrossedHabit` chip "X is more accurate because its results agree" takes a red scribble cross. Caption "agree = reliable; close to −57 = accurate".
- Hold about 1 second.

### 12. drill-2 (Biology; countdown, 10 seconds)
> Now Biology. A student compares the microbes that grow from tap water and from tank water. She counts the tap water plate after twenty four hours, and the tank water plate after seventy two. Everything else is on screen. Explain why her conclusion is not **valid**, and propose a change that fixes the problem. Three marks. Pause here to answer.

Visual:
- Board clears. `QuestionCard`: badge "Biology", tag "HSC-style question, written for HSCScience".
- Card text exactly as Decisions (drill 2), ending "Explain why this conclusion is not valid, and propose a change that fixes the problem." "(3 marks)"
- `m7-sample-bottles-three-v1.png` used twice, each instance cropped by position to one clear bottle (the left bottle tagged "tap", the right bottle tagged "tank"; the cloudy middle bottle is never shown). Never stretched. Nothing answer-bearing: no clocks, no plates.
- Empty answer box, counter "0 / 3". `DrillCountdown` 10 seconds with "Pause here to answer." Strip dims.

### 13. feedback-2
> The incubation time **changed** as well as the water. Given longer, more colonies grow big enough to count, so the difference could come from the time, not the water. The fix: incubate **both** plates for the same time, say forty eight hours, and count them together. The habit to drop: repeat with more plates. That improves reliability, but every repeat still has **unequal** times.

Visual:
- Annotations land fast: highlighter on "not valid", ring on "(3 marks)", underlines on "after 24 hours" and "after 72 hours" as they are used.
- On "changed" two plates stand side by side: `m7-plate-sparse-v1.png` tagged "tap: 31" with `ClockChip` "24 h", and `m7-plate-countable-v1.png` tagged "tank: 118" with `ClockChip` "72 h" (counts from the card; the plates illustrate fewer and more colonies, not the exact counts). A small variables strip: "independent: water source | controlled: agar, 0.1 mL, 28 °C, time"; "time" turns terracotta.
- Rows write with margin letters and ticks:
  - "Feature: incubation time differed (24 h against 72 h) as well as the water source." Tick, "1 / 3".
  - "Effect: longer incubation lets more colonies grow large enough to count, so the difference may be caused by time, not the water." Tick, "2 / 3".
  - On "both": "Fix: incubate both plates at 28 °C for the same time (for example 48 h) and count them at the same time." Tick, "3 / 3". Both clocks turn to "48 h" and "time" turns green. Grey label "HSCScience marking guide (illustrative)".
- On "unequal" a `CrossedHabit` chip "repeat with more plates of each sample" takes a red scribble cross. Caption "repeats: reliability; the times are still unequal".
- Hold about 1 second.

### 14. decision-rule
> So, in every practical question. Name the **word**: right target, repeats agree, close to true. Point to the **feature** of this method, and say what it does to the result. Then give a **fix** that removes that cause. Repeats help reliability, but they can't fix an error that pushes every trial the same way. **Next**: extended responses.

Visual:
- `FixRail` returns full size as the decision board, each row lighting on its cue with a one-line example from this video: "Word: validity / reliability / accuracy (right target, repeats agree, close to true)"; "Feature: can raised to 6 cm for propan-1-ol: more heat lost, 34% against 43%"; "Fix: same 2 cm for both, trimmed wick".
- On "Repeats help reliability" a small chip under the rail: "repeats → reliability, not a systematic error".
- On "Next" a chip slides in: "Next: extended responses (6 to 9 marks)".
- Hold about 2 seconds.

### 15. key-notes (reuse take: key-notes; quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Validity: does the method measure what it was meant to (only the independent variable changes)? Reliability: repeated the same way, do results agree? Accuracy: how close to the true value?
2. Answer move: word (which quality), feature (which part of this method, and what it does to the result), fix (a change that removes that cause).
3. Repeats improve reliability (and average out random scatter). They don't fix an error that pushes every trial the same way, or a variable that wasn't controlled.
4. Use the stimulus: quote values (spread against gap; percentage of the data value).
5. Risk: hazard, harm, and a control that stops that harm, for this substance.

Memory aid (large, on the notes screen): *Right target, repeats agree, close to true.* Second line: *Word, feature, fix.*

## Questions used and model answers

All questions are written for HSCScience. None is copied from or adapted from a specific NESA question; the near-match checks are below. Mark tallies follow the HSCScience illustrative guide.

**Worked question (Chemistry, 7 marks).** Card as Decisions.
- Annotated reading: verbs "Assess" (a), "Evaluate" (b), "Explain ... propose" (c) highlighted; mark values ringed; "ten trials", "closer to the data values", "raised it to 6 cm", "2 cm" and the table cells underlined only as used (scenes 5 to 7).
- Model answer:
  - (a) The results are reliable. Each alcohol's three trials agree within about 1.5% of their mean (ethanol −585 to −598, mean −592; propan-1-ol −687 to −705, mean −695), and the gap between the alcohols' means (about 100 kJ mol⁻¹) is much larger than the spread within either set (13 and 18 kJ mol⁻¹).
  - (b) The claim is incorrect. Her values are well under half the data values (43% and 34%) because heat escapes from the uncovered, unshielded can in every trial, a systematic error that makes every value less negative. More trials would give a more reliable mean of the same low values, not a more accurate one. Accuracy would improve by reducing heat loss, for example with a draught shield and a lid.
  - (c) The can-to-wick distance was not controlled: it was 6 cm for propan-1-ol and 2 cm for ethanol. At 6 cm more of the flame's heat spreads into the air before it reaches the can, so propan-1-ol's value is lowered more (it caught about 34% of its data value against 43% for ethanol). The difference between the results is therefore partly caused by the distance, not only by the alcohol, so the comparison is less valid. Fix: keep the can 2 cm above the wick for both alcohols, trimming the propan-1-ol wick so its flame does not touch the can.
- Mark ticks (illustrative, 7): (a) judgement; evidence from the table. (b) judgement; reason (systematic heat loss; repeats improve reliability, not accuracy). (c) feature; effect on the comparison; a fix that removes it.
- Author note: "raise both cans to 6 cm" equalises the distance and is acceptable for validity, but loses more heat in both, so it is worse for accuracy; it is not offered as the model fix.
- Crossed claim: "ten trials → closer to the data values".

**Drill 1 (Chemistry, compare, 3 marks).** Card as scene 10.
- Model answer: X's trials agree within 1 kJ mol⁻¹ (−51 to −52) and Y's spread over 7 kJ mol⁻¹ (−53 to −60), so X's results are more reliable. Y's values are each within 4 kJ mol⁻¹ of −57 and its mean is −57 kJ mol⁻¹, while X's are 5 to 6 kJ mol⁻¹ less negative (mean about −51 kJ mol⁻¹), so Y's results are more accurate. X's consistently less negative values suggest a systematic error such as heat loss; Y's scatter suggests random error.
- Crossed habit: "X is more accurate because its results agree".

**Drill 2 (Biology, explain and propose, 3 marks).** Card as Decisions.
- Model answer: The incubation time differed (24 hours for tap water, 72 hours for tank water) as well as the water source. With longer incubation, more colonies grow large enough to be seen and counted, so the higher tank count may be caused by the extra time rather than by the water. The comparison therefore does not test only the water source, so the conclusion is not valid. Fix: incubate both plates under the same conditions (28 °C) for the same time, for example 48 hours, and count them at the same time.
- Crossed habit: "repeat with more plates of each sample" (improves reliability; the times stay unequal).

## Near-match checks (22 Oct)

The 2019 to 2025 NESA Chemistry papers and marking guidelines (2023 paper text unavailable from the download; its guideline was searched) and the 2019, 2021, 2022 and 2023 Biology papers with the 2019 to 2025 Biology guidelines were downloaded from the links in the research pack and searched by script for "spirit", "burner", "valid", "reliab", "accura", "improve", "agar", "colon", "incubat" and "repeat".
- **Worked question against Chemistry 2019 Q23** (an ethanol spirit burner under an aluminium beaker with 105 g of water; (a) calculate ΔHc from 0.370 g and 18.5 to 30.0 °C; (b) values "consistently much lower than the accepted value", explain one change to improve accuracy): the nearest item. It shares the apparatus type and an accuracy idea. The new item compares two alcohols with a table of trials, asks for reliability, the evaluation of a claim about more trials and validity from an uncontrolled distance; it has no calculation and no "explain one change to improve accuracy" demand; no wording or numbers are shared. Kept off screen in scene 8 for that reason. The 2019 Q23(b) sample answer improves accuracy by "moving the spirit burner closer to the beaker". s07 part (c) uses the same physical idea (distance affects heat loss) for a different demand (validity of a comparison with an uncontrolled distance), with no shared wording. It also supports the claim that the 6 cm can loses more heat.
- **Against Chemistry 2022 Q29** (school-laboratory ΔHc values for four alcohols, plot with a curved line of best fit, estimate butan-1-ol): a graphing task on a different demand; not a near match.
- **Against Chemistry 2020 Q28** (titration method, explain why results are inaccurate and unreliable): different practical and demand; drill 1 shares only the idea that the two qualities differ.
- **Drill 1:** no audited item gives two students' repeated neutralisation results and asks for a comparison of reliability and accuracy. Not a near match.
- **Drill 2 against Biology 2024 Q22** (microbes in a food or water sample; (a) justify a safety precaution, (b) explain how to ensure the investigation is reliable): the nearest item, sharing agar plates and water. The new item gives a specific two-sample comparison with unequal incubation times and asks about validity; its crossed habit is the reliability answer that Q22(b) rewards, used to show it does not answer a validity question. No wording or numbers are shared, and Q22's topic is not named on screen. Also checked: Biology 2022 Q (design a safe procedure to test Jelly Bush honey with agar plates) and Biology 2021 (UV dose and agar colonies, multiple choice): different demands. Codex to confirm against the 2020, 2024 and 2025 Biology question papers, which could not be downloaded.

## Research findings used

| Finding (research pack file, or guideline checked 22 Oct) | Where |
| --- | --- |
| "Treat reliability, validity and accuracy as interchangeable": 4/12 (Biology 3/6, Chemistry 1/6) (`common-faults.md`) | 1 |
| Related advice: make the procedure or safety response specific to the given investigation (B20 Q27(a), B23 Q26(a), B25 Q29(b), C21 Q21, C22 Q33) (`common-faults.md`) | 3, 9 |
| NESA definitions, 2017 against 2025 wording (`vra-definitions.md`) | 2, key note 1 |
| README takeaway 10: diagnose the practical problem before proposing a fix | 3, 5 to 7 |
| README takeaway 6: use the stimulus to do work | 5, 7 |
| Chemistry 2025 Q23 bands (two justified changes; one justified or two identified) (`what-markers-reward.md`, guideline checked 22 Oct) | 1, 8 |
| Biology 2024 Q22(b): explains how to ensure reliability (`what-markers-reward.md`, guideline checked 22 Oct) | 8 |
| Biology 2024 Q22(a): the precaution must be justified by how it prevents infection (`what-markers-reward.md`) | 9 |
| Chemistry 2021 Q21(a), 2019 Q23(b), 2020 Q28; Biology 2023 Q27 (guidelines checked 22 Oct; pack for 2023 Q27) | Decisions (support, not spoken) |
| 2017 Working Scientifically content and outcome CH11/12-3, BIO11/12-3 (syllabus DOCX files linked in `vra-definitions.md`) | header, YouTube description |

## Teaching checks

- **Does it explain causes?** In the skill: why reliability is judged from the spread, and why the gap matters too (a difference bigger than the scatter is not chance) (5); why more trials cannot fix accuracy (the same heat loss pushes every trial the same way, so the mean stays low) (6); why a moved can breaks validity (more heat spreads into the air, so the comparison measures the distance as well as the alcohol) (7); why a generic fix earns less (it does not touch the stated cause) (3, 8); why "repeat" earns marks for reliability (repeats show whether results agree) (8); why a control must be tied to a hazard (otherwise it does not stop a named harm) (9); why X is reliable but not accurate (consistent, but a systematic error lowers every value) (11); why unequal incubation times break validity (colonies keep growing) (13). In the content (recalled): heat loss in a spirit burner and its fix; about −57 kJ mol⁻¹; colony growth over time.
- **Response opportunities:** three, each 10 s, with the full card on screen (every demand, value, unit, condition and mark value). Nothing answer-bearing appears during the holds (the worked question's distance bracket shows only the card's 2 cm and 6 cm; the cup and bottles show only the objects).
- **Reading load:** the worked card is the densest item in the series so far (four sentences, a two-row table, three demands); it is the task itself, and the walkthrough shrinks it but keeps the table readable, with the two demands not in use dimmed to grey. Each walkthrough shows one part at a time, with the earlier part's answer row dimmed. Scene 8 shows the panel, then the ladder alone, then one chip, never all three bright.
- **Term load:** no new scientific terms. "Systematic error" appears on screen as "same push in every trial: systematic" (p03's gloss) and is said once in feedback 1 with "like heat loss".
- **Avoided double teaching:** the spirit-burner method, heat path and shield are p03 recall; −57 kJ mol⁻¹ and heat loss are m6-p02 recall; incubation and controlled variables are bio-m7-p02 recall; compare, assess and evaluate are s03 and s04 recall (one grey chip each).
- **Out of scope by design:** graphs (s06); percentage uncertainty; designing a whole investigation; ethics; anomalous results in a calculation (chem-m7-g02).

## Numbers to verify

Computed by script (22 Oct); Claude science check and Codex to re-check.

- **Worked question, ethanol (Revision 2 data):** trials −592, −585, −598; sum −1775; mean −591.67 → −592 kJ mol⁻¹ (3 s.f.); spread 598 − 585 = 13; largest deviation from the mean 591.67 − 585 = 6.67, 6.67 ÷ 591.67 = 1.13% → "about 1%" (narration) and "about 1.1%" (tag); 591.67 ÷ 1367 = 43.28% → 43%.
- **Worked question, propan-1-ol (Revision 2 data):** trials −693, −705, −687; sum −2085; mean −695.0 kJ mol⁻¹ exactly; spread 705 − 687 = 18; largest deviation 705 − 695 = 10, 10 ÷ 695 = 1.44% → "about one and a half" (narration) and "about 1.4%" (tag); 695 ÷ 2021 = 34.39% → 34%. Row (a)'s "within about 1.5% of the mean" covers both (1.13% and 1.44%).
- **Gap:** 695.0 − 591.67 = 103.3 → "about 100 kJ mol⁻¹"; 103.3 ÷ 18 = 5.7 and ÷ 13 = 7.9 (about 6 to 8 times the spreads).
- **Plausibility:** 43% for ethanol with no shield and no lid matches chem-m7-p03's unshielded, uncovered A2 level (42.7%) and sits below p03's shielded, lidded ethanol (50.3%), as the part (b) fix predicts. 34% at 6 cm is below that, as the extra distance predicts; the 9-point drop is far larger than p03's 1.6-point drift between ethanol and propan-1-ol at a fixed distance (50.3% to 48.7%), shown as "about 2 points" in scene 7's tag. Revision 1's data (−702, −805; 51%, 40%) are withdrawn.
- **Drill 1:** X: −51, −52, −51; sum −154; mean −51.33 → "about −51"; spread 1; distances from −57: 6, 5, 6 (mean 5.67). Y: −60, −53, −58; sum −171; mean −57.0 exactly; spread 7; distances from −57: 3, 4, 1 (mean 2.67), so "each within 4 of −57".
- **Drill 2:** 31 and 118 colonies, both inside 30 to 300 (bio-m7-p02's counting range); 0.1 mL plated, undiluted, so no CFU calculation is needed or asked.
- **Number line (feedback 1):** range −62 to −50 covers all six values and the −57 tick.
- **Syllabus wording:** the three dotpoints and the CH11/12-3 outcome were extracted from the official 2017 DOCX files on 22 Oct; Codex to confirm word for word and the section headings.

## Memory aid check

- **"Right target, repeats agree, close to true."** Author-written. Assumptions, checked after scene 2 explains the idea: "right target" means the method measures the intended quantity (validity in the 2017 wording's first clause, "tests measure what was intended"); "repeats agree" means repeats under identical circumstances (NESA's reliability wording); "close to true" means the measured value is near the accepted or true value (the 2025 accuracy wording). The target picture is an analogy: it does not show the second clause of the 2017 validity definition (inferences and actions), which the narration does not need. It holds for the worked question and both drills.
- **"Word, feature, fix."** Author-written. Its condition: the fix must remove the named cause; a reliability question's fix may be "repeat", explained (scene 8). Holds for every item.
- **"Repeats help reliability, not a systematic error."** A rule, not a mnemonic; spoken in 6 and 14 with its reason (Revision 2: the Revision 1 line "and nothing else" was an overclaim and is withdrawn). Condition: under identical circumstances; it does not claim repeats are useless for accuracy questions in every case (a mean of repeats reduces random error), which is why scene 6 says "a better mean of the same low values" and drill 1 shows random scatter (Y) separately.
- **Bank check:** `module5-memory-aids-2026-10-11.md` has no validity, reliability or accuracy aid; the Module 7 bank's "Your spirit-burner result will be too small" (*Trap*) supports scene 6's "well under half" and is not repeated as a line. p03's "Shield, lid, close, cap" is recalled only through the fix lines.

## Narration length estimate

Count method: build parser rules (scene headings `### N.`, narration lines starting `> `, bold markers stripped), at 13.3 characters per second, counted by script on 22 Oct; recounted for Revision 2 on 23 Oct (lines starting `> ` only).

**5,882 characters, 1,014 words, 15 scenes** (key-notes line included; inside 5,500 to 6,800). Revision 1 counted 5,667; Revision 2 adds 215 characters (hook +8, scene 4 +89, scene 5 +39, scene 6 +12, scene 7 +8, feedback 1 +10, scene 14 +49). The first draft counted 5,710; feedback 2 was trimmed to stay inside the 15 to 30 s feedback band.

| Scene | Characters |
| --- | --- |
| 1 hook | 479 |
| 2 three-words | 474 |
| 3 word-feature-fix | 314 |
| 4 question-card | 531 |
| 5 part-a | 419 |
| 6 part-b | 438 |
| 7 part-c | 529 |
| 8 fixes-that-fix | 544 |
| 9 risk-answers | 364 |
| 10 drill-1 | 306 |
| 11 feedback-1 | 373 |
| 12 drill-2 | 341 |
| 13 feedback-2 | 372 |
| 14 decision-rule | 323 |
| 15 key-notes | 75 |

Runtime:
- Speech: about 442 s.
- Padding: about 30 s (15 scenes at 2 s each).
- Stated holds: about 8 s.
- Countdowns: 30 s (three).
- The quiet notes hold beyond its speech: about 45 s.
- Total: **about 9.3 minutes** (555 s), under the 9.5-minute ceiling.
- Feedback speech: scene 11 about 28 s, scene 13 about 28 s, inside the owner's 15 to 30 s band. The worked walkthrough (scenes 5 to 7, about 104 s) is the lesson's teaching, not end-of-video feedback.
- Room: about 15 s remain under the ceiling if the voiced preview shows part (c) needs a slower pace.

Reserve cuts if the voiced preview runs long:
1. Scene 2: drop "however neat it looks" (the label carries it) (about 2 s).
2. Scene 4: drop "There are three parts: reliability, a claim about more trials, and validity." (the card shows the parts) (about 5 s).
3. Scene 8: "Answer B names the change and says what it fixes." can merge into the ladder sentence (about 3 s).
Do not cut below 5,500 characters without root's call.

## Build ids

In order (kebab-case, 15 scene headings): hook, three-words, word-feature-fix, question-card, part-a, part-b, part-c, fixes-that-fix, risk-answers, drill-1, feedback-1, drill-2, feedback-2, decision-rule, key-notes.

- Holds: question-card, drill-1 and drill-2 (10 s countdown after the speech, "Pause here to answer." on screen, full card kept). key-notes is the quiet notes hold (about 50 s, reuse take).
- Lesson key `skills07`; explainer folder `src/explainer/lessons/skills-s07`; build folder `docs/production/claude-pm/lessons/skills07` (root to confirm).
- Shared kit and new lesson-local components: see Decisions, Visual system.
- Review evidence paths (to be written): `checks/skills07-learning-review.md`, `checks/skills07-claude-science-check.md`.

## Assets

Have (inspected 22 Oct; never stretched, uniform scale only):
- `public/assets/chemistry/m6-foam-cup-calorimeter-v1.png` (drill 1; as s05).
- `public/assets/chemistry/m7-ethanol-fuel-bottle-v1.png` (scene 9; 2000 square; coded label "alcohol").
- `public/assets/biology/m7-sample-bottles-three-v1.png` (drill 2; 2000 square, alpha box 322,575 to 1679,1407 measured with PIL, alpha > 20; three capped sample bottles with blank labels, left and right clear, middle cloudy with specks; used twice, each instance cropped by position to one clear bottle, the cloudy bottle never shown).
- `public/assets/biology/m7-plate-sparse-v1.png` and `m7-plate-countable-v1.png` (feedback 2; as bio-m7-p02; countable plate alpha box 295,290 to 1706,1690).

Dependent on chem-m7-p03's commission (not new for s07; not yet in `public/assets/chemistry/` on 22 Oct):
- `m7-spirit-burner-calorimeter-v1.png` (scenes 4, 6, 7).
- `m7-spirit-burner-calorimeter-shield-v1.png` (scene 6).
If they are not delivered before build, s07 waits for them; a coded set-up is not an option (owner rule).

Coded: question cards and the annotation layer, answer boxes, mark counter, report tiles, the target picture, the fix rail, the table spread brackets, the percentage bars, the distance bracket and heat arrows, the variables strips, the error-chain row, the band ladder, the number line, the clock chips, chips, crosses and countdown. No people or hands.

Need: **no new plates.**

## Codex asset brief

No new plates. Start only after the learning review and science check pass and the owner gives the go-ahead. Requested (not art, error-only):
1. Confirm that the worked question, drill 1 and drill 2 do not reproduce or closely paraphrase any 2019 to 2025 NESA Chemistry or Biology question. The author's script check (above) found Chemistry 2019 Q23 and Biology 2024 Q22 as the nearest items; please search the 2020, 2024 and 2025 Biology question papers and the 2023 Chemistry question paper, which could not be extracted.
2. Re-check every figure against the research pack: 4/12 (Biology 3/6, Chemistry 1/6); the Chemistry 2025 Q23 and Biology 2024 Q22(a) and (b) criteria; the 2019 Q23(b), 2020 Q28 and 2021 Q21(a) criteria quoted in Decisions.
3. Confirm the three Working Scientifically dotpoints and CH11/12-3 word for word against the 2017 syllabuses, and name the section heading each sits under.
4. Re-check "Numbers to verify".
5. Confirm that no em dash appears in this file.

## YouTube metadata (draft)

- **Title:** Validity, Reliability, Accuracy and Improvements: Practical Questions | HSC Exam Skills (87 characters)
- **Description:** Practical questions ask whether a method is valid, reliable or accurate, then ask you to improve it, and NESA's marking feedback keeps asking for a clearer understanding of the three words. Learn what each word asks (right target, repeats agree, close to true), a three-step move for every answer (word, feature, fix), and why "repeat it" fixes reliability but not an error that pushes every trial the same way. See a worked spirit-burner question, then try two training questions, one in Chemistry (reliability against accuracy) and one in Biology (a validity flaw in an agar-plate test). All questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Based on the NESA syllabus glossary definitions and patterns in NESA's published HSC marking feedback and marking guidelines for Chemistry and Biology.
  Working Scientifically skills content (NSW Chemistry and Biology Stage 6 syllabuses, 2017):
  "justify and evaluate the use of variables and experimental controls to ensure that a valid procedure is developed that allows for the reliable collection of data"
  "assess risks, consider ethical issues and select appropriate materials and technologies when designing and planning an investigation"
  "assess the relevance, accuracy, validity and reliability of primary and secondary data and suggest improvements to investigations"

  Chapters (timestamps set from the recording; the first must be 0:00):
  0:00 Why practical answers lose marks
  Validity, reliability, accuracy
  Word, feature, fix
  Worked example: spirit burner
  Fixes that fix, and when "repeat" earns marks
  Risk answers
  Chemistry drill
  Biology drill
  Summary and key notes

  Previous: Calculation answers that get full marks. Next: Extended responses.

  #HSCChemistry #HSCBiology #HSCScience
- **syllabusDotpoints:** the three Working Scientifically lines above (skills content, not module dotpoints); `verifyWording`: true after Codex item 3.
- **Playlists:** HSC exam skills (order 7); Year 12 Chemistry (after chem-m7-p03, before chem-m7-g02) and Year 12 Biology (after bio-m7-p02, before bio-m7-b04), root to confirm.

## Open decisions

1. **Biology placement (root):** recommended after bio-m7-p02; alternative after bio-m7-p05. Both put s07 before s06 in Biology.
2. **Worked question length: closed (Revision 2).** Part (a) is kept, as the learning review recommends (it makes "reliable, yet not valid" visible in one stimulus and carries the spread-against-gap skill). The stem is tightened to four sentences and the demands not in use dim to grey in scenes 5 to 7.
3. **Ethanol plausibility: closed (Revision 2).** Trials lowered to 43% (ethanol) and 34% (propan-1-ol), matching p03's unshielded level; the card says "with no draught shield".
4. **Glossary quotation:** quoted word for word from `vra-definitions.md`, with the version labelled (unlike s01 to s05, which paraphrased the key-words glossary; these are syllabus glossary terms with exact wording on file).
5. **Spirit-burner plates:** s07 cannot build until chem-m7-p03's commissioned plates arrive.

## Review notes (author, not learner copy)

- **Pronunciation:** "propan-one-ol"; "kilojoules per mole"; "minus fifty seven"; "seventy two" hours; "draught" as "draft"; "X" and "Y" as letters.
- **Illustrative marks:** every tally is HSCScience's, labelled on screen. NESA bands appear as one guideline's pattern, with year and mark value, never as a rule.
- **No universal rule:** "repeat" is said to earn marks in one Biology guideline's reliability question, not always; the generic-fix point is shown with one Chemistry guideline.
- **Drill 2 data:** constructed counts; the card's grey tag says "example data".
- **No people or hands;** no em dashes in this file (searched by script).
