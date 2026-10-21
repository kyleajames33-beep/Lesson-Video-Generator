# S05: Calculation answers that get full marks (design)

Status: Revision 2 (21 Oct): learning review and Claude science check resolved; needs Codex error check before voicing.

## Revision 2 changes

Resolves `checks/skills05-learning-review.md` (B1, S1 to S5, M1 to M7) and `checks/skills05-claude-science-check.md` (F1 to F10).
- **B1 / F1 (blocker), drill 1 pH:** feedback 1 adds a grey tag on "14.00": "14.00 at 25 °C: treated as exact here (C07)". The model answer states the convention, and an author note records that 12.30 is defensible (Kw = 1.0 × 10^-14, or the subtraction rule) and is not crossed. The crossed habit stays "pH = 12.3". Narration unchanged. Scene 8's exact-numbers chip is unchanged (14.00 is a convention, not a count).
- **S2 / F3, Answer B's marks:** the mark ticks are replaced ("q with units; n(H2O) from the reactant that runs out, with the choice stated; ΔH = -q ÷ n applied, with the negative sign and kJ mol-1; the correct value to two significant figures"). Answer B now earns ticks 1 and 3 under the listed guide. Scene 7's "3 / 4" lands on the ΔH = -q / n line and "4 / 4" on the boxed -54. Scene 10 narration: "B is still wrong, but its right steps are visible, so B earns two for them." The A "1?" and B "rungs 2 to 3" ladder placements are deleted; the ladder stands alone with its tag. Open decision 3 closed.
- **S3 / F4, hook bars:** Chemistry-only counts, "explain 28", "calculate 24", "justify 12", with a Chemistry-only tag. Narration unchanged (it says Chemistry papers).
- **S1, feedback length:** scenes 12 and 14 take the reviewers' rewrites (about 30 s and 29 s). The "five hundred" cue is retimed from the recording.
- **S5 / F5, "counts are exact":** scene 14 now says "Counts are exact, and this divides exactly, so nothing to round." The chip reads "counts are exact: they don't limit the figures; 210 ÷ 500 = 0.42 exactly". Decisions corrected.
- **S4, Biology viewers:** the scene 2 signpost becomes "If you take Biology, you don't need the chemistry here. Watch how each line is laid out: your question is coming." YouTube chapters added (timestamps set from the recording, including "Biology drill").
- **F2 / M7, mass precision:** the mass is now 3 significant figures: m = 100.0 mL × 1.00 g mL-1 = 100 g (3 sig figs, from the density), written "100 g" in every working line and said "one hundred grams". "100.0" is dropped from the scene 8 lens. q (2173.6 J) and every later value are unchanged.
- **M1 / F8:** Biology 2024 Q29(b) is now "a number of people from a graph" (narration, chip, Decisions, research table).
- **M2:** scene 8 dims the lens row and rule chip before the exact-numbers chip; the pH decimal-places chip moves to feedback 1.
- **M3:** the scene 9 sample-answer strip is relabelled as a different question, with only the last line amber.
- **M4:** feedback 2's sense check shows the C count independently: "C: (2 × 90 + 110) ÷ 500 = 0.58".
- **M5:** key note 2 is split into two notes (five notes in all).
- **M6:** superscripts rendered on screen; scene 3 adds a grey chip "kJ mol⁻¹ = kJ/mol (both fine)".
- **F6:** the Chemistry 2022 Q26 "Not used" reason is corrected (2.6 × 10^3 J is given data in part (b)); the decision not to cite it stands.
- **F7:** drill 1 near-match note corrected (Chemistry 2024 Q29 writes "p(OH)"; a mixing question, not a near match).
- **F9:** scene 8's second tag reads "also named in other criteria: 2021, 2022, 2023, 2024 (one question each)".
- **F10:** teaching-check wording on early rounding corrected.
- **Declined (with reasons):** the learning review's optional hook tease of the 0 against 2 contrast (narration is at the runtime ceiling; the contrast lands in scene 10 as planned). The science check's optional HNO3 + KOH swap (not required; C03 attempt 1 already uses that pair).
- **Narration:** 6,109 characters (was 6,121), 1,082 words, recounted by script on 21 Oct (lines starting `> ` only, bold markers stripped). Runtime about 9.4 minutes (566 s).

Working title: "Calculation answers that get full marks | HSC exam skills". Series: HSC exam skills (`docs/production/programme/exam-skills-series-plan.md`), shared by Chemistry and Biology. **Id:** `skills-s05`. Lesson key `skills05`. Placement (author recommendation, root to confirm; reasoning in Decisions): in the "HSC exam skills" playlist (order 5); in Chemistry after M6 C07 and before chem-m6-g01 (as `module7-route-review-claude.md` item 11 places it); in Biology after bio-m5-b13 and before bio-m5-g03. Every question is written for HSCScience in the HSC style and is never presented, said or implied to be an official NESA question. Every question card carries the tag "HSC-style question, written for HSCScience".

## Decisions

- **Main question:** *When a question says calculate, what does a full-mark answer show, and how does showing it protect you when something goes wrong?* Heading on screen: "Calculation answers that get full marks".
- **Owner brief served:** "Students know the content but don't know how to write the answer." In calculations, students who can do the chemistry still lose marks to a bare final number, a lost unit, a wrong sign, early rounding or careless significant figures. The video teaches one four-step layout (equation, substitute, solve, sense check), strict significant figures, carrying unrounded values, and why visible working matters when an earlier step is wrong.
- **Frequency data used (`research/exam-skills/verb-frequency.md`, Section II written responses in the 10 NESA Chemistry and Biology papers, 2021 to 2025):**
  - **Calculate:** 24 units, all Chemistry (Biology 0). Second overall after explain (57); justify is third (23). Marks: 2 (2 units), 3 (6), 4 (11), 5 (3), 6 (1), 7 (1). Four marks is the commonest value (11 of 24), which is why the worked question is a 4-mark item.
  - **Chemistry only (the hook's frame, Revision 2):** explain 28, calculate 24, justify 12 (identify 10 next). Calculate is second in Chemistry as well as combined.
  - **Spoken:** "second most common command", "after explain", "the commonest value was four marks". **On screen:** Chemistry-only bars "explain 28", "calculate 24", "justify 12" and a mark-value bar with the 4-mark bar tallest (11), with the Chemistry counting tag; a tag "the word calculate: Chemistry 24, Biology 0".
  - **Biology:** the word calculate did not appear as a glossary command in the counted Biology units, but Biology still asks for numbers: the pack cites Biology 2024 Q28(a) (a genetic setup and probability) and Biology 2024 Q29(b) (from a graph and a global population, predict the number of people affected by diabetes in 2040, with working) (`what-markers-reward.md`, Calculations and Graphs; paper wording checked by the science check). Spoken in the hook as "Recent Biology papers didn't use the word calculate, but still asked for numbers, like a probability or a number of people from a graph." ("Recent" is the same 2021 to 2025 range; the on-screen tag names it.) The pack notes that commands outside the glossary, such as determine, were not counted (`verb-frequency.md`, note), so the narration says "the word calculate", not "calculations".
- **Fault used (`common-faults.md`):** "Hide calculation steps or lose track of quantities and units. Unlabelled numbers, missing working, wrong mole ratios, early rounding and inconsistent units": **7/12** reports, **Chemistry 6/6**, Biology 1/6 (B24 Q29(b)). Spoken in the hook as "In every one of the last six Chemistry marking feedback reports, NESA flagged the same kinds of problem: hidden steps, lost units, or rounding too early". The three named slips (hidden steps, units, early rounding) are scenes 5 to 7, 9 and 10.
- **Glossary wording:** the pack (`glossary.md`) paraphrases calculate as "Work out an answer from given information." The screen labels it "NESA glossary, paraphrased" with no quotation marks (as s01 to s04).
- **What markers reward (pack, `what-markers-reward.md`, Calculations; guideline text checked 21 Oct against the NESA marking guideline PDFs the pack links):**
  - **Working can earn marks when the final answer is wrong or missing.** Chemistry 2021 Q31 (4 marks): 4 "Correctly calculates the moles of nitrogen"; 3 "Provides the main steps of the calculation"; 2 "Provides some relevant steps of the calculation"; 1 "Provides some relevant information". Chemistry 2022 Q28(b) (4 marks) has the same shape, with "including significant figures" in the top criterion. Chemistry 2024 Q32 (4 marks): the top criterion is the concentration "to 3 significant figures", then "most relevant steps" and "some relevant steps". Scene 10 shows the 2021 Q31 ladder (topic not named; tag "a NESA Chemistry marking guideline, 2021 (4 marks)") and says "NESA's bands paid for the main steps, and for some relevant steps".
  - **Consequential marks are not a published general rule.** The pack's takeaway 8 and Calculations note: "Do not promise an automatic carried-forward mark." Scene 10 says "Bands like these are set question by question, so don't count on carried-forward marks. Just make every step visible." No narration line or screen chip promises a consequential mark. The weak and strong pair uses HSCScience's illustrative guide, labelled on screen.
  - **Units and sign:** Chemistry 2022 Q29(a) includes the estimate's units and negative sign in its 3-mark criterion (pack). Recorded as support for scene 7's "units and sign"; not spoken as a rule.
  - **Significant figures where the criteria state them:** Chemistry 2025 Q25 (3 marks): 3 "Provides the correct calculations, with correct significant figures"; 2 "Provides substantially correct calculations OR Provides the correct calculations with incorrect significant figures"; 1 "Provides some relevant information" (checked 21 Oct). Chemistry 2022 Q28(b), 2023 Q32 ("to four significant figures") and 2024 Q32 ("to 3 significant figures") name significant figures in their top criterion. Spoken in scene 8 as "Several recent marking guidelines named significant figures in the top band. In one three-mark question, correct working with the wrong significant figures dropped to two." Then "Not every guideline mentions them, so get them right every time." This is a pattern in named guidelines, not a universal marking rule, and the narration says so.
  - **Carrying unrounded values (NESA sample answers, checked 21 Oct):** Chemistry 2022 Q28(b)'s sample answer carries 0.026362 mol, 0.052724 mol and 2.9446 g through every line and rounds only the final percentage (68.163% = 68.2%). Chemistry 2024 Q32's sample answer shows s = 1.19 x 10^-7 but reports [Cd2+] = 3.56 x 10^-7 mol L-1, which comes from the unrounded s (3 x 1.1856 x 10^-7); 3 x 1.19 would give 3.57. Spoken in scene 9 only as "NESA's own sample answers keep the extra digits until the last line." The 3.56 detail stays here (it is a Ksp question; the topic is not named in the video). NESA says sample answers are not complete or exemplary answers (pack opening note), so the claim is only about what the sample answers show.
  - **When a range is accepted (checked 21 Oct):** Chemistry 2021 Q33(a) (2 marks, ΔG from values read off a graph) says under its sample answer: "Acceptable range of ΔH and TΔS to be determined at Marking Centre." Spoken in scene 9 as "When values are read off a graph, one guideline left the acceptable range of readings to the marking centre. That allows for reading, not for rounding." It is one example, stated as one example. The video does not claim a general tolerance for significant figures, because no audited guideline states one.
  - **Not used:** Chemistry 2022 Q26's sample answer (enthalpy of neutralisation, 2 + 2 marks). Part (b) supplies a second student's q of 2.6 × 10^3 J, so the sample answer is consistent. It reports q (2.8 kJ) and ΔH (-52 kJ mol-1) to two significant figures from ΔT = 3.3 K, which supports the ΔT rule. It is not cited to learners because it is the nearest NESA item to the worked question (Revision 2 correction, science check F6).
- **Strict significant figures, taught properly (owner rule):**
  - Multiplying or dividing: the answer keeps the fewest significant figures of the measured values used.
  - Adding or subtracting: keep the fewest decimal places. So ΔT = 25.8 - 20.6 = 5.2 °C has two significant figures although each reading has three. This is the worked example's teaching point and the reason the answer is -54, not -54.3.
  - Exact numbers (counts of individuals, mole ratios from an equation, the 2 in "two copies per individual", unit conversions such as 1000 mL = 1 L) never limit precision.
  - Logarithms (Chemistry, C07 rule recalled): pH has as many decimal places as [H3O+] (or [OH-]) has significant figures; 14.00 is treated as exact at 25 °C (C07 author note c). Because scene 8 teaches "+ or -: fewest decimal places", feedback 1 shows this convention on screen with a grey tag on "14.00" (Revision 2). Author note: strictly, Kw = 1.0 × 10^-14 (2 s.f.), or the subtraction rule applied to 14.00, supports 12.30. 12.30 is defensible and is not crossed; the crossed habit stays 12.3.
  - Round once, at the end; carry every digit (or at least two guard digits) through intermediate lines.
  - When the HSC tolerates a range: shown with the one audited example (graph readings, 2021 Q33(a)), framed as "sometimes", never as a rule. Author note: some teachers accept one extra figure in a final answer; no audited guideline states that, so the video teaches the least-precise-measurement rule without exception.
- **The four-step layout and memory aid (new; not in the Module 5 or 6 banks, which hold content aids):**
  - Equation: write it in symbols first.
  - Substitute: put the values in, each with its unit, and say which value you chose and why (for example, which reactant ran out).
  - Solve: one stage per line; carry the digits; give the answer with its unit, its sign where it has one, and sensible significant figures.
  - Sense check: is the size believable, is the sign right, and is the unit the one the question asked for?
  - Memory aid: *One E and three S's: Equation, Substitute, Solve, Sense check.* The `StepRail` (see Visual system) shows the four rows; it is the s05 counterpart of s01's routine strip and s04's verdict strip.
- **The worked question (Chemistry, calculate, 4 marks):**
  - **Stimulus and demand:** "A student mixed 60.0 mL of 0.800 mol L-1 hydrochloric acid with 40.0 mL of 1.00 mol L-1 sodium hydroxide solution in a polystyrene cup. The temperature of the mixture rose from 20.6 °C to 25.8 °C. Assume the density of the mixture is 1.00 g mL-1 and its specific heat capacity is 4.18 J g-1 °C-1. Calculate the molar enthalpy of neutralisation for this reaction." (4 marks)
  - **Why this case:** the chemistry is known (M6 C03 taught q = mcΔT with the total mass, moles of water from the reactant that runs out, ΔH = -q / n in kJ/mol, the sign, about -57 kJ/mol and heat loss), so only the answer writing is new. It carries every skill in one item: a unit conversion (mL to L, J to kJ), a choice to state (which reactant runs out), a subtraction that limits significant figures (ΔT), a sign, a unit the question implies (kJ mol-1), an early-rounding trap and a reference value for the sense check.
  - **Why not a C07 pH question:** chem-m6-g01 (the next video in Chemistry) is four strong acid and base pH walkthroughs. A pH worked example here would pre-empt it. Drill 1 uses pH from a mass, a case g01 does not set.
  - **Numbers (author check, 21 Oct):** n(HCl) = 0.0600 L x 0.800 mol L-1 = 0.0480 mol; n(NaOH) = 0.0400 L x 1.00 mol L-1 = 0.0400 mol; NaOH runs out, so n(H2O) = 0.0400 mol. V = 60.0 mL + 40.0 mL = 100.0 mL; m = 100.0 mL × 1.00 g mL-1 = 100 g (3 significant figures, from the density; written "100 g" with the tag "3 sig figs"). ΔT = 5.2 °C (two significant figures). q = 100 g x 4.18 J g-1 °C-1 x 5.2 °C = 2173.6 J = 2.1736 kJ. ΔH = -2.1736 kJ / 0.0400 mol = -54.34 kJ mol-1, reported as -54 kJ mol-1. Early-rounding trap: q rounded to 2.2 kJ gives -55 kJ mol-1. Wrong-moles slip: 2.1736 / 0.0480 = 45.28, so -45 kJ mol-1. The numbers differ from every C03 worked example and attempt (C03: 50.0 + 50.0 mL of 1.00 mol L-1, ΔT 6.5 °C, -54; worked example 2, -55; attempt 1, 40.0 mL of 1.50 mol L-1 HNO3 with 50.0 mL of 1.00 mol L-1 KOH, -56). The -54 result matches C03 worked example 1 by coincidence of rounding; the data, the excess reactant and the trap are different.
  - **Near-match check (21 Oct):** the 2021 to 2025 Chemistry marking guidelines (text extracted from the PDFs the pack links) were searched for "4.18", "mcΔT", "q =", "neutralis" and "pOH". Compared: Chemistry 2022 Q26(a) and (b) (enthalpy of neutralisation of HCl from separate solution masses and an averaged initial temperature; heat in (a), molar enthalpy in (b), 2 + 2 marks): the nearest. It shares the reaction type and q = mcΔT, a standard HSC calculation form. The new item gives volumes and concentrations with one reactant in excess, a single 4-mark demand and a polystyrene cup with stated assumptions; no wording, numbers or structure are shared. Chemistry 2023 (q = 205 g x 4.18 x 36.7, a heating calculation) and Chemistry 2024 (q with c = 3.80 J K-1 g-1 and a temperature fall) are not neutralisation. Codex is asked to confirm against the question papers (brief item 1).
- **Weak against strong (scene 10):** both answers make the same slip (dividing by the acid's 0.0480 mol). Answer A writes only "ΔH = -45 kJ mol-1". Answer B shows the equation, the substituted q with units (correct), the mole lines and ΔH = -q / n with the wrong n. Illustrative tally (HSCScience marking guide, Revision 2 ticks): A 0 of 4; B 2 of 4, from tick 1 (q with units) and tick 3 (ΔH = -q ÷ n applied, with the negative sign and kJ mol-1). B misses tick 2 (wrong reactant) and tick 4 (wrong value). So B's marks follow its correct, visible steps, not its wrong answer. The narration says "In our marking guide" and "B is still wrong", and then shows the NESA ladder only as a pattern from one guideline, with no placement of A or B on it. The sense check (-45 against about -57) is shown as the habit that could have caught the slip, phrased as "a hint to recheck", not as proof (real heat loss can also give a low result).
- **Drills (two; feedback about 25 to 30 s each):** the narration says "Do the one in your subject, or both".
  - Drill 1, Chemistry, calculate, 3 marks: "0.200 g of sodium hydroxide is dissolved in water and the solution is made up to 250.0 mL in a volumetric flask at 25 °C. Calculate the pH of this solution." Content: Year 11 n = m/M and c = n/V; C07 (pOH, pH + pOH = 14.00 at 25 °C, the decimal-places rule). Answer: n = 0.200 g / 40.00 g mol-1 = 5.00 x 10^-3 mol; [OH-] = 5.00 x 10^-3 mol / 0.2500 L = 0.0200 mol L-1; pOH = 1.699; pH = 14.00 - 1.699 = 12.301. Crossed habit: "pH = 12.3" (three significant figures in [OH-] give three decimal places in the pH).
  - Drill 2, Biology, calculate, 2 marks: "A sample of 250 central bearded dragons was genotyped at one SNP with two alleles, C and T. The results were: CC 90, CT 110, TT 50. Calculate the frequency of the T allele in this sample." Content: B11 (allele frequency = copies over total copies, two per individual; reading both copies shows every genotype). Answer: T copies = 110 + 2 x 50 = 210; total copies = 2 x 250 = 500; 210 / 500 = 0.42 (42%). Sense check (an independent count): f(C) = (2 x 90 + 110) / 500 = 290 / 500 = 0.58, and 0.42 + 0.58 = 1. Precision: counts are exact, so they do not limit the figures; 0.42 needs no rounding only because 210 / 500 divides exactly (a ratio such as 175 / 460 would still be rounded to a sensible length). Crossed habit: "50 / 250 = 0.20" (counts dragons, not alleles; B11's bank trap "Count alleles, not people").
  - **Why these two:** each tests the video's main presentation habits on a calculation students already know how to do, and each carries a different precision lesson (logs: decimal places; counts: exact numbers). Neither re-teaches content: C07 and B11 taught the methods.
  - **Magnification (plan example) not used:** magnification is Year 11 Biology (Module 1), so it is not HSC examination content; allele frequency is the Year 12 Biology calculation in the plan's list. The plan's other examples are covered: pH (drill 1), moles (worked question and drill 1), frequencies (drill 2). Ksp (plan example) is not used, because the nearest audited guideline item (Chemistry 2024 Q32) is a Ksp-to-concentration calculation, and a Ksp drill would sit close to it.
- **Near-match check for the drills (21 Oct):**
  - Drill 1 against: C07 attempt 2 (KOH at pH 12.30, find [OH-]), C07 worked example (0.0040 mol L-1 Ca(OH)2), chem-m6-g01 Q1 to Q4 (dilute strong acid, made-up dilution, mixing two pH values, Ba(OH)2 mixing); the 2021 to 2025 guideline text: "pOH" appears in Chemistry 2022 Q34 (pool chlorine at pH 7.5), and Chemistry 2024 Q29 (4 marks) calculates the pH after mixing NaOH with H2SO4 and writes "p(OH) = -log10(0.040) = 1.40; pH = 14.00 - 1.40 = 12.60"; a mixing question, not a dissolved mass, so not a near match (Revision 2 correction, science check F7). No audited item dissolves a weighed mass of a strong base and asks for pH (science check, 2021 to 2025 papers). Codex to confirm, including 2019 and 2020.
  - Drill 2 against: B11 attempt 12c (SNP genotype counts; different organism and numbers), bio-m6-b08 attempt 9a (skinks, 4 / 20 after a bottleneck); the Biology 2021 to 2025 papers (science check: no allele-frequency calculation from genotype counts; no "SNP" or "single nucleotide" in any paper text; Biology 2024 Q28(a) is a probability, Q29(b) a number of people affected). Not a near match. Codex to confirm, including 2019 and 2020.
- **Placement (author recommendation, root to confirm):**
  - **Chemistry: after M6 C07, before chem-m6-g01**, as item 11 of `module7-route-review-claude.md` places it. Reasons: C03 and C07 are the first two Module 6 calculation lessons, g01 is the first Module 6 practice video built entirely of calculations, and every content item here (C03, C07, Year 11 moles) is taught by then. Consequence recorded: in the Chemistry playlist s05 comes before s04 (after C11) and s03 (after C12). The Chemistry module playlist is already not in series order (s04 before s03), so this follows the root's prerequisite-led pattern. s05 therefore relies only on s01 (the reading routine) and s02, and never refers back to s03 or s04.
  - **Biology: after bio-m5-b13, before bio-m5-g03.** Reasons: (1) it mirrors the Chemistry logic: it sits just before the companion video where Biology's calculations pile up (G03 calculates a carrier frequency from incidence with Hardy-Weinberg and works probabilities from population data); (2) B11 has taught allele frequency, which drill 2 needs; (3) it keeps spacing: s03 sits after B10, so four videos separate s03 and s05; (4) Biology students get the layout before they need it, not after. Alternative considered: after bio-m6-b08 (allele frequency changes in a gene pool), which would keep s04 before s05 in Biology. Rejected because B08's frequency work is lighter than G03's and it delays the skill by a module. In Biology too, s05 then comes before s04 (after M6 B03); the video does not depend on s04.
  - Root to record the placement in the route files and the parallel production board.
- **Cross-subject viewers:** scene 2 says "If you take Biology, you don't need the chemistry here. Watch how each line is laid out: your question is coming." (Revision 2: Biology-only viewers have not met n = cV or a limiting reagent, so the line gives them permission to let the chemistry pass.) YouTube chapters let them jump to the Biology drill. The Chemistry worked example is fully on screen; the step rail labels each line by step, so a Biology viewer can follow the layout without the chemistry.
- **Entry knowledge:**
  - Series: s01 (reading routine: verb, marks, content words and givens, constraint, tick each part) and s02. s03 and s04 are not assumed.
  - Chemistry: Year 11 significant figures, n = m/M, n = cV with V in litres; M6 C03 (q = mcΔT with the total mass, the reactant that runs out sets the moles of water, ΔH = -q / n in kJ mol-1, negative for a temperature rise, about -57 kJ mol-1, heat loss gives a less negative result; C03 already rounded to two significant figures from ΔT); M6 C07 (pH, pOH, pH + pOH = 14.00 at 25 °C, decimal places in pH = significant figures in the concentration).
  - Biology: Year 11 significant figures (as for Chemistry, Year 10 percentages at least); B11 (allele frequency as copies over total copies; SNP genotypes read directly; "Count alleles, not people").
- **Start and stop:** starts at "calculate is the second most common command". It stops after the four-step layout, a worked 4-mark calculation, significant figures (least precise measurement, subtraction and decimal places, exact numbers, the pH rule), round once, one accepted-range example, visible working when a step is wrong (with the no-automatic-carried-forward caveat), the sense check, and two drills. It does not cover graph reading and drawing (s06), practical uncertainty and accuracy (s07) or extended responses (s08).
- **Handoff:** s06, "Graphs and data questions".
- **Visual system:** the shared skills kit (`src/explainer/lessons/skills-shared/`): `QuestionCard` with its annotation layer (`Ann` kinds verb, marks, given, constraint, ring, tag, pulse; `CardDim`), `MarksBadge`, `AnswerBox` (rows, margin ticks, counter, slots, `AAnn` under, ring), `MarkCounter`, `LostMarksTag`, `WeakStrongPanel`, `RoutineStrip` (mini at the far left), `DrillCountdown`, `Chip`, `GreyTag`, `CrossedHabit`, `PenArrow`, `Plate` and `mkPlate`, `Heading`, `HandLine`, `Flag`, `KeyNotes`, `Fade`.
  - New lesson-local components (suggested folder `src/explainer/lessons/skills-s05`):
    - `StepRail`: a four-row card (icons: an equation strip "q = mcΔT" glyph for Equation, a down arrow dropping a number into a slot for Substitute, an equals sign with a boxed result for Solve, a small gauge needle for Sense check; no hands or people), built like `RoutineStrip` and s04's `VerdictStrip` (mini and full states, rows lighting on cue). Each working row in the answer box carries a small step letter in the margin (E, S, S, S, with the word on first use).
    - `UnitChip`: a small ink chip that rides with each number from the card into the working ("60.0 mL", "0.0600 L"), so units visibly travel and convert. Built from `Chip` at size 20.
    - `SigFigLens`: a coded magnifier frame over a number that lights its significant digits (amber) and greys the placeholders; used on 0.0400, 100.0, 25.8, 20.6 and 5.2 (scene 8) and on 0.0200 and 12.301 (feedback 1).
    - `SenseGauge`: a coded horizontal scale of ΔH from -40 to -60 kJ mol-1 with a fixed reference tick "about -57 (C03)" and a needle that settles on the answer; a green zone "a little less negative: heat loss" from about -50 to -57. Coded abstract diagram only.
    - `BandLadder`: s04's band ladder (root may promote it to the shared kit; otherwise a lesson-local copy).
  - Plates: `m6-foam-cup-calorimeter-v1.png` (worked question), `m6-volumetric-flask-v1.png` (drill 1), `b2-desert-lizard-v2.png` (drill 2). New `mkPlate` entries are needed (alpha boxes measured 21 Oct; see Assets).
- **Mistake scene:** none as a template. Scene 10's same-slip pair is the one contrast. Each drill crosses one habit.

Main question: *When a question says calculate, what does a full-mark answer show, and how does showing it protect you when something goes wrong?*
Entry knowledge: as above. Students start Year 12; Chemistry viewers have watched Module 5 and Module 6 up to C07; Biology viewers have watched Module 5 up to B13.
Stops after: the four steps; a worked 4-mark molar enthalpy calculation; significant figures done strictly, with one accepted-range example; round once; visible working when a step is wrong; the sense check; one Chemistry pH drill and one Biology allele-frequency drill.
Handoff: s06, graphs and data questions.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames come from the recording's word timings. Layout as s01 to s04: the question card on top (`ZONE.card`), the answer box below (`ZONE.box`), the side column at the right (`ZONE.side`) for the step rail, the gauge and plates, and the routine strip small at the far left (`ZONE.strip`). Calculation staging as C03: one stage per line, earlier lines dim, a kept result moves as a small chip into the next line. At most three bright text items are live at once (usually the card's current underline, the current working line and its chip); earlier items dim.

### 1. hook
> In the last five HSC Chemistry papers, calculate was the second most common command in the written section, after explain, and the commonest value was **four marks**. In every one of the last six Chemistry marking feedback reports, NESA flagged the same kinds of problem: hidden steps, lost **units**, or rounding too early. Recent Biology papers didn't use the word calculate, but still asked for **numbers**, like a probability or a number of people from a graph. So let's set out a calculation a marker can follow.

Visual:
- A column of command chips builds, tallest first: "explain 28", "calculate 24", "justify 12" (bars, ink; Chemistry-only counts, matching the spoken "Chemistry papers"). "calculate" lights amber. `GreyTag`: "question parts with their own marks, NESA Chemistry papers, Section II, 2021 to 2025 (HSCScience count)".
- On "four marks" the calculate bar opens into a small mark-value bar chart: 2 (2), 3 (6), 4 (11), 5 (3), 6 (1), 7 (1); the 4 bar lights amber.
- On "units" six Chemistry report tiles (2020 to 2025) each take a red `Flag` in turn, and three short chips write beside them: "hidden steps", "lost units", "rounded too early". `GreyTag`: "NESA marking feedback, Chemistry 2020 to 2025: 6 of 6 reports".
- On "numbers" two small Biology chips: "probability (Biology 2024)" and "number of people affected, from a graph (Biology 2024)"; a tag "the word calculate: Chemistry 24, Biology 0".
- On "full marks" the chips clear and a working column draws as four empty ruled lines with a final boxed line. Heading writes on: "Calculation answers that get full marks".
- Hold about 1 second.

### 2. question-card
> Here's an HSC-style Chemistry question. Sixty millilitres of hydrochloric acid is mixed with forty millilitres of sodium hydroxide solution in a polystyrene cup, and the temperature rises from twenty point six to twenty five point eight degrees. The question asks you to **calculate** the molar enthalpy of neutralisation. Four marks. If you take Biology, you don't need the chemistry here. Watch how each line is laid out: your question is coming.

Visual:
- `QuestionCard` writes on. Badge "Chemistry". Tag "HSC-style question, written for HSCScience".
- Card text:
  - "A student mixed 60.0 mL of 0.800 mol L-1 hydrochloric acid with 40.0 mL of 1.00 mol L-1 sodium hydroxide solution in a polystyrene cup. The temperature of the mixture rose from 20.6 °C to 25.8 °C."
  - "Assume the density of the mixture is 1.00 g mL-1 and its specific heat capacity is 4.18 J g-1 °C-1."
  - "Calculate the molar enthalpy of neutralisation for this reaction."
  - "(4 marks)"
- `m6-foam-cup-calorimeter-v1.png` small at the card's right (tag "polystyrene cup"); a coded amber readout chip on its thermometer stem counts from "20.6 °C" to "25.8 °C" on "twenty five point eight".
- Empty `AnswerBox` below (eight lines), counter "0 / 4".
- Hold about 1 second.

### 3. read-it
> Run the routine. The verb is **calculate**: work out an answer from the information given. Four marks for one number is a hint: there are steps to show. The thing asked for is a molar enthalpy, so the answer needs **kilojoules per mole**, and a sign. Now the givens. Don't copy them into a list. You'll underline each one as you **use** it.

Visual:
- `RoutineStrip` mini at the far left; rows light on their cues.
- Annotations (`Ann`): highlighter on "Calculate"; a chip under it: "calculate → work out an answer from given information" with `GreyTag` "NESA glossary, paraphrased". Ring on "(4 marks)" lifting to a `MarksBadge` "4".
- On "kilojoules per mole" a teal bracket on "molar enthalpy of neutralisation" and a target chip in the answer box's last line: "ΔH = ? kJ mol-1" with a small "±?" sign slot. Under it a grey chip: "kJ mol⁻¹ = kJ/mol (both fine)" (C03 and C07 wrote kJ/mol and mol/L; this video uses the HSC paper form). On screen every "mol-1", "L-1", "g-1", "°C-1" and "10^-3" in this file renders with true superscripts.
- On "use" a ghost list ("60.0 mL, 0.800, 40.0 mL, 1.00, 20.6, 25.8 ...") writes in grey, takes a grey tag "copied, not used", and fades.
- The card shrinks to about 0.72 and keeps its annotations.

### 4. four-steps
> Every calculation answer can follow the same four steps. Write the **equation**. **Substitute** the values, with their units. **Solve**, and give the answer with units and sensible significant figures. Then **sense check**: are the size and the sign believable? Here's the memory aid: one E and three S's. Equation, substitute, solve, sense check.

Visual:
- `StepRail` builds full size in the side column, each row on its cue: "Equation: symbols first"; "Substitute: values with units"; "Solve: answer, units, sign, sig figs"; "Sense check: size, sign, unit".
- On "one E and three S's" the initials E, S, S, S light amber down the left edge of the rail. Memory aid writes large and handwritten under the rail: "One E and three S's".
- The rail then shrinks to a tab in the side column; its rows light on cue in scenes 5 to 7.

### 5. step-1 (heat)
> Step one, the heat: q equals m c delta T. The mass is both solutions together, a hundred millilitres, so **one hundred grams**. Delta T is twenty five point eight minus twenty point six: five point two degrees. Substitute, with units: one hundred, times four point one eight, times five point two. That's two thousand, one hundred and seventy three point six joules, or two point one seven three six **kilojoules**. Keep every digit.

Visual:
- Rail row "Equation" lights; answer row 1 writes: "q = mcΔT" (margin "E").
- On "one hundred grams" pen underlines on "60.0 mL" and "40.0 mL" and on "1.00 g mL-1"; `UnitChip`s ride down: "60.0 mL + 40.0 mL = 100.0 mL; × 1.00 g mL-1 → 100 g". Row 2: "m = 100 g" with a small grey tag "3 sig figs (from 1.00 g mL-1)".
- On "five point two" underlines on "20.6 °C" and "25.8 °C". Row 3: "ΔT = 25.8 - 20.6 = 5.2 °C".
- Rail row "Substitute" lights. Row 4: "q = 100 g × 4.18 J g-1 °C-1 × 5.2 °C" (margin "S"), the three unit chips cancelling to "J" with a small strike on each matched unit. Underline on "4.18 J g-1 °C-1".
- On "kilojoules" row 5: "= 2173.6 J = 2.1736 kJ" (margin "S"); tick, "1 / 4"; a kept chip "q = 2.1736 kJ" lifts to the side.
- On "Keep every digit" a small grey tag "not rounded yet".
- Bright: the current row, its underline on the card, the kept chip. Earlier rows dim.

### 6. step-2 (moles)
> Step two, the moles of water. Acid: zero point zero six zero zero litres, times zero point eight zero zero, gives zero point zero four eight zero moles. Base: zero point zero four zero zero litres, times one point zero zero, gives zero point zero four zero zero moles. The base **runs out first**, so it sets the water: zero point zero four zero zero moles. Write that sentence. It tells the marker which value you chose, and **why**.

Visual:
- Rows 1 to 5 collapse to the kept chip "q = 2.1736 kJ". New rows:
  - "n(HCl) = cV = 0.800 mol L-1 × 0.0600 L = 0.0480 mol" (underlines on "60.0 mL" and "0.800 mol L-1"; a `UnitChip` converts "60.0 mL → 0.0600 L").
  - "n(NaOH) = 1.00 mol L-1 × 0.0400 L = 0.0400 mol" (underlines on "40.0 mL" and "1.00 mol L-1").
- On "runs out first" C03's two-bar comparison draws small at the side (teal H+ bar 0.0480, violet OH- bar 0.0400; the violet bar ends first). Row: "NaOH runs out first, so n(H2O) = 0.0400 mol". Tick, "2 / 4"; kept chip "n = 0.0400 mol".
- On "why" the stated reason ("NaOH runs out first") takes an amber underline and a margin tag "choice stated".

### 7. step-3 (answer and check)
> Step three: divide, then add the sign. Two point one seven three six kilojoules over zero point zero four zero zero moles is fifty four point three four. The temperature **rose**, so heat was released, and delta H is negative. Round once, at the end: minus **fifty four** kilojoules per mole. Now the sense check. The usual value is about minus fifty seven. Ours is a little less negative, which fits some **heat loss** from the cup.

Visual:
- Rail row "Solve" lights. The two kept chips slide into the row "ΔH = -q / n = -2.1736 kJ ÷ 0.0400 mol = -54.34 kJ mol-1" (margin "S").
- On "rose" the cup's readout arrow pulses up, and the minus sign writes in teal. Tick on the ΔH = -q / n line (applied, with sign and unit), "3 / 4".
- On "fifty four" the final line boxes: "ΔH = -54 kJ mol-1". Tick, "4 / 4" (correct value to two significant figures). Grey label "HSCScience marking guide (illustrative)".
- Rail row "Sense check" lights. `SenseGauge` draws in the side column: reference tick "about -57 (C03)"; the needle settles at -54 inside the green zone "a little less negative".
- On "heat loss" small orange arrows leave through the cup plate's wall and lid gap; tag "heat lost, so ΔT a little low".
- Hold about 2 seconds.

### 8. sig-figs
> Why fifty four, and not fifty four point three? An answer is only as precise as its least precise measurement. Most values here have three significant figures. But delta T came from a **subtraction**, which keeps decimal places, not figures: five point two has only **two**. Exact numbers, like a count or a mole ratio, never limit you. Several recent marking guidelines named significant figures in the top band, and in one three-mark question, correct working with the wrong significant figures got **two**. Not every guideline mentions them, so get them right every time.

Visual:
- The working column dims except the boxed answer. `SigFigLens` moves along a row of the data values: "60.0" (3), "0.800" (3), "1.00" (3), "4.18" (3); the leading zero in "0.800" greys with a tag "leading zeros don't count".
- On "subtraction" "25.8 - 20.6" writes with the decimal places aligned; on "two" the lens shows "5.2" with two amber digits. Chip: "÷ or ×: fewest significant figures; + or -: fewest decimal places".
- "-54.34" rounds to "-54" with a pen ring on the "5.2" chip and a link arrow.
- Before "Exact numbers" the lens row and the rule chip dim. On "Exact numbers" a grey chip "exact: counts, mole ratios, 1000 mL = 1 L (never limit)". (The pH decimal-places chip moves to feedback 1, where it is used.)
- On "two" (second cue) the exact-numbers chip dims and a three-rung `BandLadder` draws: "3: correct calculations, with correct significant figures"; "2: substantially correct, OR correct with incorrect significant figures"; "1: some relevant information". The "incorrect significant figures" phrase takes an amber underline. `GreyTag`: "a NESA Chemistry marking guideline, 2025 (3 marks)". A second grey tag: "also named in other criteria: 2021, 2022, 2023, 2024 (one question each)".
- At most three bright items at any moment: the lens value, the rule chip, then (after both dim) the exact-numbers chip, then the ladder rung.

### 9. round-once
> And round only once. If you'd rounded the heat to two point two kilojoules halfway through, you'd get minus **fifty five**, not minus fifty four. NESA's own sample answers keep the extra digits until the **last line**. Sometimes a **range** is accepted: when values are read off a graph, one guideline left the acceptable range of readings to the marking centre. That allows for **reading**, not for rounding.

Visual:
- Two short columns side by side: left "q = 2.1736 kJ → -54.34 → -54 kJ mol-1" (tick); right "q ≈ 2.2 kJ → -55.0 → -55 kJ mol-1" with the "2.2" ringed red and a tag "rounded too early". On "fifty five" the right column's answer flashes and a red scribble cross lands on "2.2".
- On "last line" a small grey sample-answer strip writes (coded, not a scan): "a 2022 sample answer: 0.026362 → 0.052724 → 2.9446 → 68.163% → 68.2%". Only the digit tails light, and amber lands on the last line only. Tag: "a different question: watch the digits, not the chemistry". `GreyTag`: "a NESA sample answer, Chemistry 2022 (sample answers guide, they are not model answers)".
- On "range" a coded graph sketch draws (two axes, a line, a reading dropped to the axis) with a short bracket on the axis: "accepted range of readings". `GreyTag`: "a NESA Chemistry marking guideline, 2021 (2 marks)".
- On "reading" the bracket stays and a small chip writes under it: "the range covers reading the graph; your arithmetic still rounds once, to the right figures".
- Hold about 1 second.

### 10. working-when-wrong
> Now suppose you slip. Two students divide by the acid's moles, and both get minus forty five. Answer A writes just that. Answer B shows every step. In our marking guide, A earns **nothing**. B is still wrong, but its right steps are visible, so B earns **two** for them. In one recent four-mark calculation, NESA's bands paid for the **main steps**, and for some relevant steps. But bands are set **question by question**, so don't count on carried-forward marks. Make every step **visible**. And a **sense check** helps: minus forty five is far from minus fifty seven, so recheck which reactant ran out.

Visual:
- `WeakStrongPanel`: left "Answer A": one line, "ΔH = -45 kJ mol-1". Right "Answer B": the full column with the slip: "q = mcΔT"; "q = 100 g × 4.18 J g-1 °C-1 × 5.2 °C = 2.1736 kJ"; "n(HCl) = 0.0480 mol" (ringed red, tag "used the excess reactant"); "ΔH = -q ÷ n = -2.1736 kJ ÷ 0.0480 mol = -45 kJ mol-1".
- On "nothing" Answer A's counter "0 / 4". On "two" Answer B's margin ticks land beside the q lines ("q, with units") and the ΔH = -q ÷ n line ("ΔH = -q ÷ n, sign and unit"); counter "2 / 4". Grey label "HSCScience marking guide (illustrative)". `LostMarksTag` on B: "-2: wrong moles of water, so wrong value".
- On "main steps" the panel dims and a four-rung `BandLadder` draws on its own: "4: correct answer"; "3: the main steps of the calculation"; "2: some relevant steps of the calculation"; "1: some relevant information". `GreyTag`: "a NESA Chemistry marking guideline, 2021 (4 marks)". Neither answer is placed on the ladder.
- On "question by question" a grey chip: "no general carried-forward rule in the published guidelines".
- On "visible" Answer B's lines brighten again.
- On "sense check" the `SenseGauge` returns small: the needle at -45 lands outside the green zone; tag "recheck: which reactant ran out?". Answer B's ringed line pulses.
- Hold about 1 second.

### 11. drill-1 (Chemistry; countdown, 10 seconds)
> Your turn. Do the one in your subject, or both. Chemistry first. Zero point two zero zero grams of sodium hydroxide is dissolved and made up to two hundred and fifty point zero millilitres at twenty five degrees. **Calculate** the pH of the solution. Three marks. Pause here to answer.

Visual:
- Board clears. `QuestionCard`: badge "Chemistry", tag "HSC-style question, written for HSCScience".
- Card text:
  - "0.200 g of sodium hydroxide is dissolved in water and the solution is made up to 250.0 mL in a volumetric flask at 25 °C."
  - "Calculate the pH of this solution."
  - "(3 marks)"
- `m6-volumetric-flask-v1.png` small at the right with a coded label "250.0 mL". Nothing answer-bearing.
- Empty answer box, counter "0 / 3". `StepRail` mini at the side (all rows unlit). `DrillCountdown` 10 seconds with "Pause here to answer." `RoutineStrip` dims.

### 12. feedback-1
> Moles: zero point two zero zero over forty point zero zero, five point zero zero times ten to the minus three. Divide by the litres: zero point zero two zero zero moles per litre. pOH is **one point six nine nine**, so pH is **twelve point three zero one**. Three significant figures in the hydroxide give **three decimal places**. It's a base, so **above seven**. The habit to drop: rounding to **twelve point three**.

Visual:
- Annotations land fast: highlighter on "Calculate", ring on "(3 marks)", underlines on "0.200 g", "250.0 mL" and "25 °C" as each is used.
- Rows write with step letters and ticks:
  - "n(NaOH) = m / M = 0.200 g ÷ 40.00 g mol-1 = 5.00 × 10^-3 mol" (E then S). Tick, "1 / 3".
  - "[OH-] = n / V = 5.00 × 10^-3 mol ÷ 0.2500 L = 0.0200 mol L-1" (`UnitChip` "250.0 mL → 0.2500 L"). Tick, "2 / 3".
  - "pOH = -log(0.0200) = 1.699; pH = 14.00 - 1.699 = 12.301". Tick, "3 / 3". A grey tag hangs from "14.00": "14.00 at 25 °C: treated as exact here (C07)" (Revision 2, blocker fix: it stops the scene 8 subtraction rule from reading as 12.30).
- On "three decimal places" `SigFigLens` lights the three figures of "0.0200" and the three decimals of "12.301", joined by an amber link. A small grey chip (moved from scene 8): "pH: decimal places = sig figs in [OH-] or [H3O+] (C07)". Earlier rows dim, so the bright items are the pH line, the lens link and the chip.
- On "above seven" a short pH track 0 to 14 draws with a dot at 12.301 on the basic side.
- On "twelve point three" a `CrossedHabit` chip "pH = 12.3" takes a red scribble cross. Caption "three sig figs in [OH-] → three decimal places".
- Hold about 1 second.

### 13. drill-2 (Biology; countdown, 10 seconds)
> Now Biology. Two hundred and fifty bearded dragons were genotyped at one snip, with alleles C and T. Ninety were C C, a hundred and ten were C T, and fifty were T T. **Calculate** the frequency of the T allele in this sample. Two marks. Pause here to answer.

Visual:
- Board clears. `QuestionCard`: badge "Biology", tag "HSC-style question, written for HSCScience".
- Card text:
  - "A sample of 250 central bearded dragons was genotyped at one single nucleotide polymorphism (SNP) with two alleles, C and T."
  - Table: "Genotype | Number of dragons"; "CC | 90"; "CT | 110"; "TT | 50".
  - "Calculate the frequency of the T allele in this sample."
  - "(2 marks)"
- `b2-desert-lizard-v2.png` small at the right, cropped to the dragon (the egg cut-away below the sand line is masked off), tag "central bearded dragon". Nothing answer-bearing.
- Empty answer box, counter "0 / 2". `DrillCountdown` 10 seconds with "Pause here to answer." Strip dims.

### 14. feedback-2
> Count alleles, not dragons: **five hundred** copies. T alleles: a hundred and ten from C T, plus a hundred from T T, makes two hundred and ten. Over five hundred, that's **zero point four two**. Counts are **exact**, and this divides exactly, so nothing to round. Check: C is zero point five eight, and together they make **one**. The habit to drop: fifty over two hundred and fifty, which **counts dragons**.

Visual:
- Annotations land fast: highlighter on "Calculate", ring on "(2 marks)", underlines on "250", "CT | 110" and "TT | 50" as each is used.
- Rows write with step letters and ticks:
  - "frequency of T = T alleles ÷ all alleles" (E).
  - "all alleles = 2 × 250 = 500; T alleles = 110 + (2 × 50) = 210" (S). Tick, "1 / 2".
  - "f(T) = 210 ÷ 500 = 0.42 (42%)" (S). Tick, "2 / 2".
- On "exact" a grey chip "counts are exact: they don't limit the figures; 210 ÷ 500 = 0.42 exactly".
- On "one" the C count writes first as an independent check, "C: (2 × 90 + 110) ÷ 500 = 0.58", then a short two-part bar draws: "C 0.58" and "T 0.42", summing to "1.00" (sense check). The "five hundred" cue is retimed from the recording (it now falls in the first sentence).
- On "counts dragons" a `CrossedHabit` chip "50 ÷ 250 = 0.20" takes a red scribble cross. Caption "count alleles, not individuals (B11)".
- Hold about 1 second.

### 15. decision-rule
> So, every time you see calculate. Write the **equation**. **Substitute** with units, and say which value you chose and why. **Solve**, carrying every digit, then round once, to the least precise measurement, with the unit and the sign. Then **sense check** the size and the sign. **Next**: graphs and data questions.

Visual:
- `StepRail` returns full size as the decision board, each row lighting on its cue with a one-line example from the worked question: "q = mcΔT"; "100 g × 4.18 J g-1 °C-1 × 5.2 °C; NaOH runs out first"; "-54.34 → -54 kJ mol-1 (ΔT: 2 sig figs)"; "about -57: a little less negative, heat loss".
- Memory aid small under the rail: "One E and three S's".
- On "Next" a chip slides in: "Next: graphs and data questions". A small axes doodle sits beside it.
- Hold about 2 seconds.

### 16. key-notes (reuse take: key-notes; quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Calculate: work out an answer from given information (NESA glossary, paraphrased). Lay it out as equation, substitute (values with units), solve (answer with unit and sign), sense check.
2. Significant figures: × or ÷ keeps the fewest significant figures; + or - keeps the fewest decimal places (so ΔT can have fewer figures than the readings). Exact numbers never limit.
3. pH: decimal places = significant figures in the concentration.
4. Carry every digit and round once, at the end.
5. Show every step and say which value you chose and why. Working can earn marks when the answer is wrong, but there is no automatic carried-forward mark.

Memory aid (large, on the notes screen): *One E and three S's: Equation, Substitute, Solve, Sense check.*

## Questions used and model answers

All questions are written for HSCScience. None is copied from or adapted from a specific NESA question; the comparison lists are in Decisions. Mark tallies follow the HSCScience illustrative guide.

**Worked question (Chemistry, calculate, 4 marks).** "A student mixed 60.0 mL of 0.800 mol L-1 hydrochloric acid with 40.0 mL of 1.00 mol L-1 sodium hydroxide solution in a polystyrene cup. The temperature of the mixture rose from 20.6 °C to 25.8 °C. Assume the density of the mixture is 1.00 g mL-1 and its specific heat capacity is 4.18 J g-1 °C-1. Calculate the molar enthalpy of neutralisation for this reaction. (4 marks)"
- Annotated reading (scene 3): verb "Calculate" (highlighter); "(4 marks)" (badge); "molar enthalpy of neutralisation" (teal bracket: kJ mol-1 and a sign); givens underlined only as used (scenes 5 and 6).
- Model answer:
  1. q = mcΔT; m = (60.0 mL + 40.0 mL) × 1.00 g mL-1 = 100 g (3 significant figures); ΔT = 25.8 - 20.6 = 5.2 °C.
  2. q = 100 g × 4.18 J g-1 °C-1 × 5.2 °C = 2173.6 J = 2.1736 kJ.
  3. n(HCl) = 0.800 mol L-1 × 0.0600 L = 0.0480 mol; n(NaOH) = 1.00 mol L-1 × 0.0400 L = 0.0400 mol. NaOH runs out first, so n(H2O) = 0.0400 mol (H+ + OH- → H2O, 1 : 1).
  4. ΔH = -q / n = -2.1736 kJ ÷ 0.0400 mol = -54.34 kJ mol-1 = -54 kJ mol-1 (two significant figures, limited by ΔT). Negative because the temperature rose (heat released).
  5. Sense check: close to, and a little less negative than, about -57 kJ mol-1, consistent with some heat loss.
- Mark ticks (illustrative, 4; Revision 2): q with units; n(H2O) from the reactant that runs out, with the choice stated; ΔH = -q ÷ n applied, with the negative sign and kJ mol-1; the correct value to two significant figures.
- Same-slip pair (scene 10): Answer A "ΔH = -45 kJ mol-1" only (illustrative 0 of 4). Answer B: full working with n = 0.0480 mol (the excess acid), ΔH = -45 kJ mol-1 (illustrative 2 of 4: tick 1, q with units; tick 3, ΔH = -q ÷ n applied with sign and unit; ticks 2 and 4 missed).

**Drill 1 (Chemistry, calculate, 3 marks).** "0.200 g of sodium hydroxide is dissolved in water and the solution is made up to 250.0 mL in a volumetric flask at 25 °C. Calculate the pH of this solution. (3 marks)"
- Model answer:
  1. n(NaOH) = 0.200 g ÷ 40.00 g mol-1 = 5.00 × 10^-3 mol.
  2. [OH-] = 5.00 × 10^-3 mol ÷ 0.2500 L = 0.0200 mol L-1 (NaOH releases one OH- per formula unit).
  3. pOH = -log(0.0200) = 1.699; pH = 14.00 - 1.699 = 12.301 (14.00 treated as exact at 25 °C, as in C07; three decimal places from three significant figures in [OH-]).
- Crossed habit: "pH = 12.3".
- Author note (not learner copy): strictly, Kw = 1.0 × 10^-14 (2 s.f.) supports 12.30, as does the subtraction rule applied to 14.00. 12.30 is defensible and is not crossed. The crossed habit stays 12.3.

**Drill 2 (Biology, calculate, 2 marks).** "A sample of 250 central bearded dragons was genotyped at one single nucleotide polymorphism (SNP) with two alleles, C and T. [Table] CC 90; CT 110; TT 50. Calculate the frequency of the T allele in this sample. (2 marks)"
- Model answer:
  1. Each dragon has two copies of the gene: total alleles = 2 × 250 = 500. T alleles = 110 (from CT) + 2 × 50 (from TT) = 210.
  2. f(T) = 210 ÷ 500 = 0.42 (42%); the counts are exact and 210 ÷ 500 divides exactly, so no rounding. Check: f(C) = (2 × 90 + 110) ÷ 500 = 290 ÷ 500 = 0.58; 0.42 + 0.58 = 1.
- Crossed habit: "50 ÷ 250 = 0.20" (counts dragons, not alleles).

## Research findings used

| Finding (research pack file, or guideline checked 21 Oct) | Where |
| --- | --- |
| Calculate 24 units (Chemistry 24, Biology 0), second after explain; Chemistry only: explain 28, calculate 24, justify 12 (shown); combined: 57, 24, 23; marks 2 (2), 3 (6), 4 (11), 5 (3), 6 (1), 7 (1) (`verb-frequency.md`) | 1 |
| "Hide calculation steps or lose track of quantities and units ... early rounding": 7/12, Chemistry 6/6, Biology 1/6 (`common-faults.md`) | 1, 5 to 7, 9, 10 |
| Biology 2024 Q28(a) probability and Q29(b) number of people affected, predicted from a graph (`what-markers-reward.md`; paper wording per the science check) | 1 |
| Glossary paraphrase of calculate (`glossary.md`) | 3, key note 1 |
| README takeaway 7: equation, substitution, intermediate result and final answer in order; retain units and precision | 4 to 7, 15 |
| README takeaway 8 and Calculations: no automatic carried-forward mark; guidelines reward relevant steps | 10 |
| Chemistry 2021 Q31 four-band ladder (main steps, some relevant steps), guideline checked 21 Oct | 10 |
| Chemistry 2025 Q25: correct calculations with incorrect significant figures in the 2-mark band; 2022 Q28(b), 2023 Q32, 2024 Q32 name significant figures in the top criterion, and 2021 Q27(a) in a 2 to 3 mark band (pack and guidelines checked 21 Oct; 2021 added from the science check) | 8 |
| Chemistry 2022 Q28(b) sample answer carries unrounded intermediates; 2024 Q32 sample answer uses the unrounded s (checked 21 Oct) | 9 (first only spoken) |
| Chemistry 2021 Q33(a): "Acceptable range of ΔH and TΔS to be determined at Marking Centre" (checked 21 Oct) | 9 |
| Chemistry 2022 Q29(a): units and negative sign in the criterion (pack) | Decisions (supports 7) |

## Teaching checks

- **Does it explain causes?** In the skill: why the answer has two significant figures (ΔT came from a subtraction, which keeps decimal places); why early rounding moves an answer (the rounding error is carried into later steps and can push the final value to a different rounded answer); why visible working matters when a step is wrong (the marker can see which steps were right); why a sense check catches slips (a known reference value and the sign give an independent test); why pH keeps decimal places (the digits before the point come from the power of ten, C07); why counts do not limit (they are exact). In the content (recalled, not re-taught): why the reactant that runs out sets the moles of water; why ΔH is negative; why heat loss makes the result less negative; why allele copies are twice the individuals.
- **Science (to check):**
  - Worked numbers: see Decisions. ΔH = -54.34 kJ mol-1 → -54 kJ mol-1. Reference about -57 kJ mol-1 (C03 author note a: HSC convention; standard value at infinite dilution about -55.8). HCl is in excess (0.0080 mol left), so it does not affect the moles of water; the excess acid's dilution heat is negligible and not mentioned.
  - Early-rounding value: 2.2 kJ ÷ 0.0400 mol = 55.0 → -55 kJ mol-1.
  - Slip value: 2.1736 ÷ 0.0480 = 45.28 → -45 kJ mol-1.
  - Drill 1: M(NaOH) = 22.99 + 16.00 + 1.008 = 39.998, about 40.00 g mol-1 (data-sheet values). n = 5.000 × 10^-3 mol (5.00 × 10^-3 to three significant figures); [OH-] = 0.02000 → 0.0200 mol L-1; pOH = 1.69897 → 1.699; pH = 12.30103 → 12.301, with 14.00 treated as exact at 25 °C (C07 author note c), shown on screen by the grey tag. 12.30 (from Kw = 1.0 × 10^-14, 2 s.f.) is defensible and is not crossed. Ideal-solution value at 25 °C; activity effects are not taught (C07 author note a).
  - Drill 2: 210 / 500 = 0.42 exactly; f(C) = 0.58. The SNP genotype counts are a constructed sample, not real bearded dragon data (author note); no claim is made about a real bearded dragon gene. The grey tag on the card reads "example data".
  - Significant figures rules: standard Year 11 practice; the subtraction rule is the decimal-places rule for addition and subtraction. m = 100.0 mL × 1.00 g mL-1 = 100 g, three significant figures from the density (written "100 g" with a "3 sig figs" tag), so mass does not limit; ΔT (2) does.
- **Response opportunities:** two, each 10 s, with the full card on screen (every demand, every value, the units, the temperature condition, the mark values). Nothing answer-bearing appears (the flask label shows only the volume given in the card; the dragon plate shows only the animal).
- **Reading load:** the worked card has four short sentences and no table; the drill 2 card has a three-row table. Working lines appear one at a time; earlier lines collapse into kept chips (C03 staging). Scene 8 is the heaviest: the lens moves value by value and the band ladder appears only after the rule chip dims.
- **Out of scope by design:** graph reading and drawing (s06; scene 9 shows one graph reading only to frame the range example); uncertainty, accuracy and error analysis (s07); the HSC data sheet as a topic (used, not taught); Hardy-Weinberg (G03, after this video in Biology).

## Narration length estimate

Count method: build parser rules (scene headings `### N.`, narration lines starting `> `, bold markers stripped), at 13.3 characters per second, counted by script on 21 Oct (Revision 2): see the table.

**6,109 characters, 1,082 words, 16 scenes** (key-notes line included; inside 5,500 to 6,800). Revision 1 was 6,121.

| Scene | Characters (Revision 2) |
| --- | --- |
| 1 hook | 505 |
| 2 question-card | 444 |
| 3 read-it | 328 |
| 4 four-steps | 331 |
| 5 step-1 | 425 |
| 6 step-2 | 426 |
| 7 step-3 | 421 |
| 8 sig-figs | 562 |
| 9 round-once | 393 |
| 10 working-when-wrong | 580 |
| 11 drill-1 | 281 |
| 12 feedback-1 | 399 |
| 13 drill-2 | 254 |
| 14 feedback-2 | 389 |
| 15 decision-rule | 296 |
| 16 key-notes | 75 |

Runtime:
- Speech: about 459 s.
- Padding: about 32 s (16 scenes at 2 s each).
- Stated holds: about 10 s.
- Countdowns: 20 s.
- The quiet notes hold beyond its speech: about 45 s.
- Total: **about 9.4 minutes** (566 s), under the 9.5-minute ceiling.
- Feedback speech: scene 12 about 30 s, scene 14 about 29 s (reviewers' rewrites), inside the owner's 15 to 30 s band.

The first draft counted 6,519 characters (about 10 minutes). Trims made before Revision 1: the hook's closing clause and "in that time"; the Biology signpost's second clause; scene 5's "The equation is"; scene 8's two sentences merged; scene 9's worked early-rounding arithmetic and "Early rounding moved the answer" (kept on screen); scene 10's phrasing; both feedbacks tightened. Revision 2: the feedback rewrites (-72), the Biology signpost (+50), the scene 10 marks line (+18), "a number of people from a graph" (+14) and "one hundred grams" (-22).

Reserve cuts if the voiced preview runs long:
1. Scene 1: drop "like a probability or a number of people from a graph" (chips stay on screen) (about 4 s).
2. Scene 8: drop "Most values here have three significant figures." (the lens shows it) (about 4 s).
3. Feedback 2: "T alleles: a hundred and ten from C T, plus a hundred from T T, makes two hundred and ten" to "That's two hundred and ten T alleles" (the row stays on screen) (about 3 s).
Do not cut below 5,500 characters without root's call.

## Build ids

In order (kebab-case, 16 scene headings): hook, question-card, read-it, four-steps, step-1, step-2, step-3, sig-figs, round-once, working-when-wrong, drill-1, feedback-1, drill-2, feedback-2, decision-rule, key-notes.

- Holds: drill-1 and drill-2 (10 s countdown after the speech, "Pause here to answer." on screen, full card kept). key-notes is the quiet notes hold (about 50 s, reuse take).
- Lesson key `skills05`; explainer folder `src/explainer/lessons/skills-s05`; build folder `docs/production/claude-pm/lessons/skills05` (root to confirm).
- Shared kit: `src/explainer/lessons/skills-shared/` (components listed in Decisions, Visual system). New lesson-local components: `StepRail`, `UnitChip`, `SigFigLens`, `SenseGauge`; `BandLadder` reused from s04 (root may promote it to the shared kit).
- Review evidence paths (to be written): `checks/skills05-learning-review.md`, `checks/skills05-claude-science-check.md`.

## Assets

Have (inspected 21 Oct; alpha boxes measured with PIL, alpha > 20, for new `mkPlate` entries):
- `public/assets/chemistry/m6-foam-cup-calorimeter-v1.png`: a painted white polystyrene cup with a lid, a thermometer through a bung, and a cut-away window showing clear liquid around the bulb; 2000 square, box 569,160 to 1430,1840 (worked question; coded amber readout on the stem).
- `public/assets/chemistry/m6-volumetric-flask-v1.png`: a stoppered volumetric flask with a calibration ring; 2048 square, box 683,164 to 1365,1884 (drill 1, coded label "250.0 mL").
- `public/assets/biology/b2-desert-lizard-v2.png`: a painted central bearded dragon standing on red desert sand above a cut-away burrow holding a clutch of eggs; 1856 x 1344, box 223,299 to 1654,1050. Drill 2 masks off the cut-away below the sand surface (about y > 760) so only the dragon and the sand top show; the eggs are irrelevant to the question. Never stretched.

Coded: question cards and the annotation layer, answer boxes, mark counter, the command and mark-value bars, report tiles, the step rail, unit chips, the significant-figure lens, the sense gauge, the band ladders, the two-bar runs-out comparison, the sample-answer strip, the graph sketch with its range bracket, the pH track, the allele bar, chips, crosses and countdown. No people or hands.

Need: none.

## Codex asset brief

No new plates. Requested (not art, error-only):
1. Confirm that the worked question (HCl and NaOH in a polystyrene cup, molar enthalpy of neutralisation, 4 marks), drill 1 (pH of 0.200 g NaOH made up to 250.0 mL) and drill 2 (SNP allele frequency in a sample of 250 bearded dragons) do not reproduce or closely paraphrase any 2019 to 2025 NESA Chemistry or Biology question. The Claude science check searched the 2021 to 2025 papers and found no near match (nearest: Chemistry 2022 Q26 and 2024 Q29); please confirm and search the 2019 and 2020 papers, which were not searched. Report any near match.
2. Re-check every figure against the research pack: calculate 24 (Chemistry 24, Biology 0); the Chemistry-only hook bars explain 28, calculate 24, justify 12; the mark-value split (2, 6, 11, 3, 1, 1); the calculation fault at 7/12 (Chemistry 6/6, Biology 1/6).
3. Check the guideline wording used in scenes 8 to 10 against the PDFs: Chemistry 2021 Q31 (four bands), Chemistry 2025 Q25 (significant figures in the 2-mark band), Chemistry 2022 Q28(b), 2023 Q32 and 2024 Q32 (significant figures named in the top criterion), Chemistry 2021 Q27(a) (significant figures in a 2 to 3 mark band), the Chemistry 2022 Q28(b) sample answer's unrounded intermediates, and Chemistry 2021 Q33(a) ("Acceptable range ... to be determined at Marking Centre").
4. Confirm that no em dash appears in this file.

## YouTube metadata (draft)

- **Title:** Calculation Answers That Get Full Marks | HSC Exam Skills
- **Description:** Calculate is one of the most common commands in recent HSC Chemistry papers, and NESA's marking feedback keeps flagging hidden steps, lost units and early rounding. Learn a four-step layout for any calculation (equation, substitute, solve, sense check), how to give significant figures properly, why you round only once, and why visible working matters when an earlier step goes wrong. See a worked molar enthalpy question, then try two training questions, one in Chemistry (pH) and one in Biology (allele frequency). All questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Based on the NESA glossary of key words (https://www.nsw.gov.au/education-and-training/nesa/hsc/student-guide/glossary) and patterns in NESA's published HSC marking feedback and marking guidelines for Chemistry and Biology. Frequency counts are HSCScience's own, from the NESA HSC Chemistry and Biology papers, 2021 to 2025, Section II.
  Working Scientifically skills: Analysing data and information; Communicating (NSW Chemistry and Biology Stage 6 syllabuses, 2017).

  Chapters (timestamps set from the recording; the first must be 0:00):
  0:00 Why calculations lose marks
  Reading the question
  The four steps
  Worked example: molar enthalpy
  Significant figures
  Round once
  When a step goes wrong
  Chemistry drill (pH)
  Biology drill (allele frequency)
  Summary and key notes

  Previous: Analyse, assess, evaluate, justify. Next: Graphs and data questions.

  #HSCChemistry #HSCBiology #HSCScience
- **syllabusDotpoints:** none (skills video). See s01 open decision 2 for the outcome wording.
- **Playlists:** HSC exam skills (order 5); Year 12 Chemistry (after M6 C07, before chem-m6-g01) and Year 12 Biology (after bio-m5-b13, before bio-m5-g03), root to confirm.

## Open decisions

1. **Placement (root):** recommended Chemistry after C07 (before g01) and Biology after B13 (before G03). Both put s05 before s04 in the module playlists; s05 does not depend on s03 or s04. Alternative for Biology: after bio-m6-b08.
2. **Two significant figures from ΔT (root):** the series already rounds C03's answers to two significant figures from ΔT (C03 Revision 2). s05 makes that rule the teaching point. If root prefers to avoid a two-figure ΔT in a skills video, change the readings to 20.6 °C and 30.8 °C with larger volumes (author can re-derive).
3. **Illustrative tallies (closed in Revision 2):** Answer B keeps 2 of 4, now earned from ticks 1 and 3 of the replacement guide, with the narration "B is still wrong, but its right steps are visible, so B earns two for them" and no ladder placement. Both reviewers accepted the number with that fix.
4. **Glossary quotation:** as s01 open decision 1. Recommended: keep paraphrases.
5. **Working Scientifically outcome:** as s01 open decision 2; this video adds "Analysing data and information".

## Review notes (author, not learner copy)

- **Pronunciation:** "q equals m c delta T" as letters; "delta H"; "pOH" as "P O H"; "pH" as letters; "SNP" written "snip" in narration (B11 convention), "SNP" on screen; "C C", "C T", "T T" as letters; "kilojoules per mole"; "two thousand, one hundred and seventy three point six"; "zero point zero four zero zero" as written; the mass as "one hundred grams" (shown "100 g", 3 sig figs).
- **Drill 1 precision (Revision 2):** 12.301 uses C07's convention that 14.00 is exact at 25 °C, shown by the grey tag. 12.30 is defensible (Kw = 1.0 × 10^-14) and is not crossed; the crossed habit stays 12.3.
- **Illustrative marks:** every tally is HSCScience's, labelled on screen and said as "our marking guide". NESA bands are shown as one guideline's pattern, with its year and mark value.
- **Carried-forward marks:** never promised. The pack's audit found no published general rule; the narration says so in plain words.
- **Bearded dragon data:** constructed example counts; the card's grey tag says "example data".
- **Frequency numbers** are counts of question parts with their own mark allocation in Section II, not weighted by marks or by candidates.
- **No em dashes** in this file (searched).
