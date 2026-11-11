# Maths A12 S11: How do z-scores compare outcomes and locate tail probabilities? Counting standard deviations, the standard normal N(0, 1), comparing results across groups, reading P(Z < z) from a table, tails by symmetry and judgements (design)

Status: Revision 4 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (4 Nov 2026, brief 162 repairs). Not voiced (no `math-a12-s11/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s11.md`).

Narration 5,688 characters (Revision 4; was 5,647), 15 scene headings, about 511 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: eleventh video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 63), after s10 (the PDF's features, the empirical rule and the CDF) and before s12 (finding an unknown mean or standard deviation). Revision 3 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (two fishing catches, a snapper and a golden perch, each compared with its own kind; reused Biology plates); graphs, rulers, the table, sliders and algebra stay coded. No people (Alex, Blake and Priya appear only as names on plain score cards). Site lessons read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson02.sa.html` (The Normal Distribution), SHA256 `c80e763e63444ac1420243e1bdc7bedde0cca84edae267beb462f8635283f2b6`, and `lesson03.sa.html` (Normal Distribution Applications), SHA256 `08101d4bc1a93fb663cde4c428cd800e2f0e2c259d39a55ec9ca13506072c758`. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded; Codex confirms them against the live site. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s11` ("How do z-scores compare outcomes and locate tail probabilities?", six syllabus actions, site sources lessons 2 and 3, no coverage gaps).

Owner rules applied: new 2024 syllabus only, codenames and exact wording, no site module label; painted plates for real objects, coded graphs and algebra; no people, hands or faces; one reasoning stage at a time; worked examples in the g01 layout with framed answers and crossed slips; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; givens underlined in feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; causal conversational narration. Exact values in the algebra (z = 5/4 = 1.25 written as a fraction first), table values to 4 decimal places as printed; attempt cards give nothing away (A2 supplies a trap value as well as the right one).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, The normal distribution; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cid8ec3651`: "Distinguish between a standard normal distribution with mean 0 and standard deviation 1, and the non-standard normal distribution with mean μ and standard deviation σ"
- `ci81208003`: "Define the z -score, or standardised score, by the formula z=(x-μ)/(σ) , where μ is the mean and σ is the standard deviation, and x is an observed value of a random variable"
- `cie7b9fd82`: "Interpret the z -score as the number of standard deviations a score lies above or below the mean"
- `ci9f2473ff`: "Use z -scores to compare scores from different sets of data and justify conclusions"
- `ciaad9c7ab`: "Use z -scores to identify probabilities of events less or more extreme than a given outcome and solve problems using tables for the standard normal distribution"
- `cia23986f7`: "Use z -scores to make judgements related to probabilities of certain events or given sets of data assuming an underlying normal distribution"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s10 Revision 4's handoff frame (two bells: a snapper N(40, 4²) cm with 45 marked "5 cm above" and a golden perch N(36, 2.5²) cm with 40 marked "4 cm above", each with its painted fish, right tails tinted "?", chip "Next: which catch is more unusual?"). Measures each gap in standard deviations (1.25 and 1.6), names the count the z-score and gives the formula and its meaning, with the sign (`ci81208003`, `cie7b9fd82`); standardises both bells onto Z ∼ N(0, 1) and contrasts it with a non-standard N(μ, σ²) (`cid8ec3651`); compares two students' marks from different groups (site lesson 2 Q2's numbers) and justifies the conclusion (`ci9f2473ff`); reads P(Z < 1.25) = 0.8944 from a standard normal table and the right tails beyond the two catches (0.1056 and 0.0548), with a live z-slider (`ciaad9c7ab`); uses symmetry for a negative z on a drink-bottle filling machine (N(500, 64), below 490 mL: 0.1056, site lesson 3's revisit "about 10.6%"); finds a middle by s09's "one minus two tails" (site lesson 3 card 05's bolts, about 0.905) (`ciaad9c7ab`); makes a judgement about a 474 mL bottle assuming the model (`cia23986f7`). Stops at forward problems: value to probability. Not taught: finding a value, μ or σ from a probability (s12); the empirical rule (s10, used once as a check); calculator normal functions.

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: two fishing catches, a snapper and a golden perch (reused painted plates, live).** "Which catch is more unusual?" is the z-score question in everyday form: the snapper is 5 cm above its kind's mean and the perch only 4 cm above its own, but the perch's kind varies less, so the perch is further out in standard deviations. The fish plates exist (Biology, inspected) and read clearly; fishing is everyday in Australia and is not used in `checks/root-decisions-maths-redesign.md`. Athletes in different events were rejected (s04 is a school athletics carnival); exam marks stay as the site's worked comparison (scene 4) and A1, not the anchor.
- **Numbers (new, not site examples).** Snapper caught off one jetty: X ∼ N(40, 16) cm, σ = 4; the catch 45 cm gives z = 5/4 = 1.25. Golden perch in one river: Y ∼ N(36, 6.25) cm, σ = 2.5; the catch 40 cm gives z = 4/2.5 = 1.6. These were chosen so the table look-ups are Revision 2's (0.8944 at 1.25, 0.9452 at 1.6): beyond the snapper 1 − 0.8944 = 0.1056, beyond the perch 1 − 0.9452 = 0.0548. They are models for one place, said "the average snapper off one jetty", not species data.
- **The bottles (site lesson 3's hook and revisit card, numbers unchanged).** A drink-bottle filling machine, N(500, 64) mL, enters at scene 6 for the negative z: z(490) = −10/8 = −1.25, P(X < 490) = 1 − 0.8944 = 0.1056, "about 10.6%" (the site's revisit value, now found with the table), the mirror of the snapper's tail. Scene 8's 474 mL judgement and the handoff (unchanged) keep the bottles, which become s12's anchor. The reused bottle plate is `chemistry/m7-pet-bottle-v1` (inspected: a plain empty PET drink bottle with a white cap, no label), which fulfils the never-painted `maths-a12-bottle.png`; a coded fill level is drawn inside it.
- **Dropped site example.** Site lesson 3 card 05's exam marks (N(72, 12²), P(X > 84) = 0.1587) is no longer worked: the right tail is now taught on the two catches. Its numbers are unchanged in the site record; the strand practice video may use it.
- **Join with s10 (changed with s10 Revision 4).** Scene 1 opens on s10 Revision 4's final frame exactly.
- **Join with s12 (fixed).** Scene 14's frame and narration are unchanged (the bottles' bell, 490 marked, the left tail "1%", "σ = 8", "μ = ?" with a ghost arrow, chip "Next: finding μ or σ from a probability"), now with the reused PET bottle as the bottle plate; s12 opens on it.
- **Simulations (standard item 3).**
  1. `SigmaRuler` (scene 2): each gap fills step by step with violet σ-steps and a live readout of the count.
  2. `NormalCurve` `matchMarks` (scene 3): both bells slide and squeeze onto N(0, 1) with the catches' marks travelling and live tail readouts that never change.
  3. `ZSlider` (scene 5; a kit addition): an amber z marker slides along the standard normal from 0 to 2, shading the right tail with a live probability readout (0.5000, 0.3085 at 0.5, 0.1587 at 1, 0.1056 at 1.25, 0.0548 at 1.6, 0.0228 at 2; 52 px), pausing at 1.25 (the snapper sprite rides the marker) and 1.6 (the perch).
  4. `ZTable` highlights linked to the curve (scenes 5 to 8) and `TailMirror` (scene 6).
- **Colour roles (fixed for the whole video, continuing s04 to s10).**
  - **normal curves: teal**, the standard normal a deeper teal;
  - **μ and the σ-steps of the ruler: violet** (`MATH_GRADIENT`), as s09 and s10;
  - **the value asked about (z marker, z-dots, table highlights): amber** (`MATH_AMBER`), s01's role; **shaded probabilities: pale amber**;
  - **answer: green**; **mistake: red**; ink algebra and the table.
- **Large type, handwriting, layout.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; table entries 34 px with the highlighted entry lifting to 52 px; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. Each fish plate is at least 360 px wide when it carries the idea. `HandTag` (at most two live): "different spreads", "count the σs", "further out", "same curve, same areas", "higher mark ≠ better", "this table looks left", "1 − table", "mirror tail", "z rounded for the table", "under the model".
- **Stage changes (standard item 2):** the two catches (1); the σ rulers (2); the morph to N(0, 1) (3); the score cards (4); the z-slider and the table (5); the bottles and the mirror (6); the bolts' middle (7); the 474 mL judgement (8); the framed card (9); question cards with pictures (10 to 13); the bottles' 1% question (14); key notes (15).
- **Worked examples (g01 layout, standard item 7).** Scene 2: task strip "Which catch is further out?", givens grouped per fish with units, rows at 52 px, green framed "z = 1.25" and "z = 1.6", red slip "snapper: 5 cm > 4 cm" crossed silently, tag "different spreads" (root decision 5). Scene 4 (marks), scene 7 (bolts) and scene 8 (474 mL) each have a task strip, a model strip, grouped givens and a green framed answer; scene 6's red slip "P(Z < −1.25) = 0.8944" is crossed silently, tag "that's left of +1.25". Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "This table looks left." with two icons (the complement split and the mirrored tail) and a fish badge.
- **Visual surprise (standard item 9).** The smaller raw gap is the more unusual catch: the perch's z-dot lands right of the snapper's (2, 5); both bells collapse onto one curve with their tails unchanged (3); the bottle's left tail lifts onto the snapper's right tail and matches exactly (6).
- **Question cards (full text and a picture).** A1: the worded question with two blank score cards labelled "English" and "Mathematics" over one empty axis (no dots, no z-values). A2: the worded question with empty axes "time x (min)" (no curve, no shading).
- **Narration (not voiced).** Scenes 1, 2, 3, 5 and 6 are rewritten for the catches, the z-slider and the bottles' negative z; scene 7 drops the exam-marks right tail and keeps the bolts; scenes 4 and 8 to 14 keep their Revision 2 text (scene 9 gains a cue word).

### Kept from Revisions 1 and 2

In the bullets below, read the hook's "fills against chocolate bars" as the snapper and golden perch (z = 1.25 and 1.6, the same table entries); the exam-marks right tail is no longer worked. The comparison, the table, the bolts, the judgement and the attempts are unchanged.

- **Learner question kept (outline).** "How do z-scores compare outcomes and locate tail probabilities?" The answer, built in order: raw gaps in different units can't be compared (1); counting standard deviations can, and that count is the z-score (2); standardising turns every normal curve into the one standard normal, keeping areas (3); z-scores compare results across groups (4); one table of the standard normal then serves every normal problem (5); symmetry gives negative-z tails (6), complements give right tails and s09's rule gives middles (7); a very small tail supports a judgement (8).
- **Hook (continuity).** s10's two bells return. "Ten looks bigger than eight, but they're different units with different spreads" is the problem; "a common ruler" is the need.
- **z-score (`ci81208003`, `cie7b9fd82`).** `SigmaRuler` (new): a ruler marked in σ-steps lies along each bell's axis from μ; the gap to the value fills with 1.25 steps (fills: 10 ÷ 8) and 1.6 steps (chocolate: 8 ÷ 5, σ = √25 from the variance, s09). Then the formula z = (x − μ)/σ written, with "z-score, or standardised score" (syllabus wording), and the meaning "the number of standard deviations a score lies above or below the mean" on screen. The sign: negative below, positive above. Exact fractions first: z = (490 − 500)/8 = −10/8 = −1.25; z = (242 − 250)/5 = −8/5 = −1.6. "Further out" is |z| (said as "further from zero").
- **Standard normal (`cid8ec3651`).** `NormalCurve` `matchMarks` (s10) morphs both bells: subtract μ (slide to 0), divide by σ (squeeze to σ = 1); both land on one curve labelled Z ∼ N(0, 1), "standard normal: mean 0, standard deviation 1"; the originals are labelled "non-standard: N(μ, σ²)". The value marks travel with the curve (490 to −1.25, 242 to −1.6) and each tail's area readout stays fixed, so "the areas don't change". This is s10's "measured in sigmas, every normal curve is the same curve", now with a name.
- **Comparing (`ci9f2473ff`; site lesson 2 Q2, numbers unchanged).** Alex 72 in Mathematics (μ = 60, σ = 12): z = 1.0; Blake 68 in English (μ = 55, σ = 10): z = 1.3. The higher raw mark is not the better relative result (the surprise). "Justify": quote both z-scores (`ScoreCompare`, new: two score cards with names only, no figures; their z-dots placed on one standard normal axis). Site lesson 2's Maths/Physics example (both z = 1) and Chemistry/Biology (1.0 against 7/6) are not used.
- **Tables (`ciaad9c7ab`).** `ZTable` (new): an excerpt of a standard normal table, rows 0.0 to 3.4 by 0.1, columns 0.00 to 0.09, entries P(Z < z) to 4 dp, styled as a plain printed table and labelled "HSC-style table (as in the NESA 2024 sample examination)". Revision 2: brief 162 confirmed the NESA sample examination prints this form (positive z, rows by 0.1, columns by 0.01, 4 dp); the 2027 reference sheet has no normal table, so the video never calls it the reference sheet. Reading 1.25: row 1.2, column 0.05, entry 0.8944, with the matching area shading on a small Z curve. Negative z by symmetry (`TailMirror` lifts the left tail onto the right): P(Z < −1.25) = 1 − 0.8944 = 0.1056, which matches s10's application value (F(490) ≈ 0.1056); P(Z < −1.6) = 1 − 0.9452 = 0.0548, s09's attempt-2 given (site lesson 3 problem 1). "Further out means a smaller tail" closes the hook's question.
- **Right tail and middle.** Site lesson 3 card 05, numbers unchanged: exam marks N(72, 12²), P(X > 84): z = 1, 1 − 0.8413 = 0.1587. Bolts N(50, 0.3²) passing between 49.5 mm and 50.5 mm: z = ±0.5/0.3 = ±5/3 ≈ ±1.67 (to 2 dp for the table, grey "z rounded for the table"); one tail 1 − 0.9525 = 0.0475; middle 1 − 2(0.0475) = 0.9050 (s09's middle rule; site gives ≈ 0.905); grey readout "app: 0.9044 (z not rounded)". "About 90.5% pass."
- **Judgement (`cia23986f7`; new numbers on the site's fills).** A 474 mL bottle: z = (474 − 500)/8 = −26/8 = −3.25; table 0.9994 at 3.25, so P(X < 474) ≈ 0.0006, "about six in ten thousand"; "if the machine is still working as modelled" carries the assumption; conclusion: a reason to check the machine. The grey readout "beyond 3σ: very unusual (s10)" links to s10's judgement.
- **Attempts (original).** (A1) "Priya scored 74 in English, where the marks had mean 62 and standard deviation 8, and 81 in Mathematics, where the marks had mean 70 and standard deviation 10. In which subject did Priya perform better relative to the cohort? Justify your answer using z-scores." English z = 12/8 = 1.5; Mathematics z = 11/10 = 1.1; English. Crossed: "Mathematics, because 81 > 74". (A2) "The times, X minutes, taken to complete a puzzle are modelled by X ∼ N(42, 9). Find P(X > 46.5). You may use: P(Z < 0.50) = 0.6915 and P(Z < 1.50) = 0.9332." σ = 3, z = 4.5/3 = 1.5, P = 1 − 0.9332 = 0.0668. Crossed: "z = 4.5/9 = 0.5" (divided by the variance). A2's card supplies two table values, one of them the trap's, so it gives nothing away. Neither card shows a curve, a shading or the answer form.
- **Mistake scene:** none separate. "Bigger raw gap means more extreme" (1, 2); "the higher mark is the better result" (4; A1 crossed); "tables have negative z" or "P(Z < −a) = P(Z < a)" (6); "the table gives the right tail" (7); "divide by the variance" (A2 crossed).
- **Memory aid.** "This table looks left." See "Memory aid check".
- **Handoff (outline next: s12, "How do probabilities determine an unknown normal mean or spread?").** Scene 14: the fills' bell with 490 marked, the left tail shaded and labelled "1%", "σ = 8" chip, the μ marker as "μ = ?" with a ghost arrow pointing right, chip "Next: finding μ or σ from a probability". No z-value or answer shown. This is s12's opening frame.
- **Site sources used:** lesson 2 card 07 (z-score formula, its meaning and sign, "Why standardise?", Z ∼ N(0, 1)), trap 01 (variance against σ), trap 02 (z = 2 is not twice the mean; not used), Q2 (Alex and Blake: 72 (60, 12) and 68 (55, 10), z = 1.0 and 1.3); lesson 3 card 02 (standardising to N(0, 1)), card 04 (left-tail and right-tail terms), card 05 (the three probability types; exam marks N(72, 12²) P(X > 84) = 0.1587; bolts N(50, 0.3²), z = ±1.67, ≈ 0.905), problem 1 (chocolate bars P(X < 242) = 0.0548), revisit card (about 10.6% below 490). Not used: the inverse normal (problem 2, problem 3(b), s12), IQ contexts.
- **Site corrections (new; for the log, not yet in `../site-corrections-maths-a12.md`):** (1) Lesson 3 card 02: "Every table and calculator in existence works with the standard normal." Calculators and applications accept μ and σ directly; tables use the standard normal. Suggested: "Standard normal tables work with Z ∼ N(0, 1), so we standardise first." (2) Lesson 3 card 05's quality-control line gives "P(−1.67 < Z < 1.67) ≈ 0.905" (grey: "z rounded to 1.67; exact z = 5/3 gives ≈ 0.904") without saying z was rounded; the unrounded value is 0.9044. Suggested: add "(z rounded to 1.67; technology gives 0.904)". (3) Lesson 3 card 05's true-or-false check shows its options as "✓ True" and "✗ False" before the student answers; the tick sits on the wrong answer (the correct answer is False, 1 − 0.8413 = 0.1587). Suggested: plain "True" and "False" options. (4) Lesson 3 problem 3: "The 90th percentile commute time is about 45 minutes 16 seconds." 45.26 min is 45 min 15.4 s (with z = 1.282: 35 + 10.256 = 45.256), so "about 45 minutes 15 seconds".
- **Cause chain taught, in order:** (1) raw gaps in different units and spreads can't be compared (1); (2) counting standard deviations can: z = (x − μ)/σ, its sign gives the side (2); (3) subtracting μ and dividing by σ turns every normal into N(0, 1) without changing areas (3); (4) so z-scores compare results across groups (4) and one table serves every normal curve (5); (5) symmetry turns negative-z tails into table look-ups (6); (6) complements give right tails; one minus two tails gives the middle (7); (7) a tiny tail, under the model, is evidence that something has changed (8); (8) memory aid (9).
- **Entry knowledge (draft route `entryKnowledge`):** s09 (shape, X ∼ N(μ, σ²) with the variance second, symmetry, the middle as 1 − 2 tails); s10 (every normal curve is the same curve in σ units; the empirical rule; F(490) ≈ 0.1056 from the application); s04 to s06 (area as probability, complements, P(X = x) = 0 so < and ≤ match).
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s11`; playlistOrder 63; mainLearnerQuestion as above; syllabusActionIds `cid8ec3651`, `ci81208003`, `cie7b9fd82`, `ci9f2473ff`, `ciaad9c7ab`, `cia23986f7`; prerequisiteVideos `math-a12-s09`, `math-a12-s10`; sourceLessons `random-variables/lesson02.sa.html`, `random-variables/lesson03.sa.html` (SHAs above); startBoundary "From s10's two catches (a 45 cm snapper, a 40 cm golden perch): which is more unusual, and how much area lies beyond each?"; stopBoundary "z-score defined, interpreted and signed; standard against non-standard normal; comparing scores across groups with justification; P(Z < z) from a table; negative z by symmetry; right tails by complement; middles by one minus two tails; a judgement from a tiny tail under the model. Forward problems only."; nextHandoff "math-a12-s12: only 1% below 490 with σ = 8: where must the mean be set?".
- **Legacy logic ported:** none.
- **New explainer motion (coded):** a σ-step ruler filling each gap (`SigmaRuler`, new); the formula writing under the ruler; two bells sliding and squeezing onto one standard normal, value marks and tail areas travelling with them (`NormalCurve` `matchMarks`, s10); two score cards dropping their z-dots onto one axis (`ScoreCompare`, new); a table excerpt with row and column highlights meeting at the entry, and the matching area shading on a small Z curve (`ZTable`, new); a left tail lifted onto the right (`TailMirror`); a complement split; the middle as one minus two tails; crossed chips, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`. Painted plate: the bottle (s09), small.
- **Board layout (constant):** as s09 and s10: heading top-left; graph on the left (about 1,000 × 520 px); formula, table and rows in the right column, one reasoning stage bright at a time. The table excerpt shows only the rows needed in each scene (1.2, 1.6; then 1.0; 1.6; 3.2), the rest faint.
- **No human figures.** Alex, Blake and Priya appear only as names on plain score cards.
- **Author notes (not learner copy):**
  (a) Fills N(500, 64), σ = 8; chocolate N(250, 25), σ = 5. z(490) = −10/8 = −1.25; z(242) = −8/5 = −1.6.
  (b) Table (4 dp, Φ from erf): Φ(1.25) = 0.8944; Φ(1.60) = 0.9452; Φ(1.00) = 0.8413; Φ(1.67) = 0.9525; Φ(3.25) = 0.9994; Φ(0.50) = 0.6915; Φ(1.50) = 0.9332.
  (c) Tails: 1 − 0.8944 = 0.1056 (exact Φ(−1.25) = 0.105650); 1 − 0.9452 = 0.0548 (exact 0.054799); 1 − 0.8413 = 0.1587 (exact 0.158655).
  (d) Alex: (72 − 60)/12 = 1.0; Blake: (68 − 55)/10 = 1.3.
  (e) Bolts: N(50, 0.3²); z = ±0.5/0.3 = ±5/3 = ±1.667, to 2 dp ±1.67; tail 1 − 0.9525 = 0.0475; middle 1 − 2(0.0475) = 0.9050; exact 2Φ(5/3) − 1 = 0.904419.
  (f) 474 mL: z = −26/8 = −3.25; 1 − 0.9994 = 0.0006 (exact 0.000577), "about six in ten thousand".
  (g) A1: English (74 − 62)/8 = 12/8 = 1.5; Mathematics (81 − 70)/10 = 11/10 = 1.1.
  (h) A2: N(42, 9), σ = 3; z = (46.5 − 42)/3 = 1.5; 1 − 0.9332 = 0.0668 (exact 0.066807). Crossed z = 4.5/9 = 0.5 (would give 1 − 0.6915 = 0.3085).
  (i) Pronunciations: "z-score" as "zed score" (Australian); "capital Z is N of zero, one"; "P of Z less than z" as "the probability that Z is less than zed"; "zero point eight nine four four".
  (j) Windows: two bells side by side in 1 and 2 (fills x 470 to 530; chocolate x 230 to 270, drawn the same size on screen); standard normal x −4 to 4.

Main question: *A 45 cm snapper is 5 cm above its mean; a 40 cm golden perch is 4 cm above its own. Which catch is more unusual, how do we compare results from different groups, and how do we find the area beyond any value?*
Entry knowledge (s09, s10): the normal shape and notation, symmetry, the empirical rule, F(490) ≈ 0.1056 from the application.
Stops after: z-scores, the standard normal, comparing, table tails and middles, and one judgement. No unknown μ or σ.
Handoff: math-a12-s12: 1% below 490, σ = 8, "μ = ?".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): curves teal (the standard normal deeper teal); μ and σ-steps violet; the z marker, z-dots and table highlights amber; shaded probabilities pale amber; answer green; mistake red; ink algebra and table. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; nothing below 26 px. Screen writes "z-score"; speech says "zed score".

### 1. hook (which catch is more unusual?)
> Last video ended here. This snapper is forty-five centimetres, five above the average snapper off this jetty. This golden perch is forty centimetres, four above the average perch in its river. Five looks bigger than four. But snapper here vary by about four centimetres, and these perch by only about two and a half, so the raw gaps can't be **compared**. We need a common **ruler**. Then we'll find the area beyond each **catch**.

Visual: opens on s10 Revision 4's last frame exactly (two bells side by side: the snapper N(40, 4²) cm with its painted fish and 45 marked "5 cm above", the golden perch N(36, 2.5²) cm with its painted fish and 40 marked "4 cm above", right tails tinted with "?", chip "Next: which catch is more unusual?"). Heading writes on: "z-scores". Each fish (360 px wide) slides onto a coded measuring board above its bell, the board's scale reading 45 cm and 40 cm. On "vary" each bell shows its violet ±σ marks with tags "σ = 4 cm" and "σ = 2.5 cm". On "compared" the two gap labels "5 cm" and "4 cm" pulse, a grey "different spreads" between them, hand tag "different spreads". On "ruler" a blank ruler outline slides under each axis. On "catch" the chip moves to the top right as "Which is more unusual? How much area beyond?".

### 2. counting standard deviations: the z-score
> The ruler is the standard deviation. For the snapper, sigma is four, so five centimetres is five over four, one point two five **sigmas**. For the perch, sigma is two point five, so four centimetres is four over two point five, one point six **sigmas**. That count is the zed score, or standardised score. Subtract the mean from the value, then divide by the standard **deviation**. It tells you how many standard deviations the value lies above or below the mean. A negative zed means below, positive means **above**. Both catches are above, and the perch is further out, because one point six sigmas is more than one point two **five**.

Visual: camera continue, set as a g01 board. Task strip (44 px): "Which catch is further out?" Givens grouped per fish: "snapper: x = 45 cm, μ = 40, σ = 4" and "perch: x = 40 cm, μ = 36, σ = 2.5". `SigmaRuler` under each bell: on "sigmas" (first) the snapper's ruler, marked in violet 4 cm steps from 40, fills the gap to 45 with one full step and a quarter, live readout "5 ÷ 4 = 1.25 σ" (52 px); on "sigmas" (second) the perch's ruler (2.5 cm steps) fills 4 cm with 1.6 steps, live readout "4 ÷ 2.5 = 1.6 σ", hand tag "count the σs". A red slip "snapper: 5 cm > 4 cm" writes and is crossed silently, tag "different spreads". On "deviation" the formula writes in the right column: "z = (x − μ)/σ" (56 px), tag "z-score (standardised score)", under it "number of standard deviations above or below the mean". On "above" two rows: "z = (45 − 40)/4 = 5/4 = 1.25" and "z = (40 − 36)/2.5 = 4/2.5 = 1.6", green framed, with "+" tagged "above". On "five" (last) the perch's mark glows, hand tag "further out".

### 3. the standard normal
> Here's what a zed score does to the whole curve. Subtracting the mean slides the bell so its centre sits at **zero**. Dividing by sigma squeezes it until its standard deviation is **one**. Do that to both bells, and they land on the same curve. It's the standard normal distribution, with mean zero and standard deviation one, written capital Z is N of zero, **one**. Any other normal, with mean mu and standard deviation sigma, is a non-standard normal. The value marks move with the curve, so the areas don't **change**. The area beyond forty-five centimetres is the area beyond one point two **five**.

Visual: camera continue. On "zero" both bells slide (`NormalCurve` `matchMarks`) so their centres sit at 0, the x axes relabelling "x − μ". On "one" both squeeze sideways and stretch up until σ = 1, axes relabelling "z". On "same curve" the two land on one deeper-teal curve, x −4 to 4 (1,100 × 520 px), the two fish (200 px) parked above their marks. On "one" (second) the label "Z ∼ N(0, 1): standard normal, mean 0, standard deviation 1"; on "non-standard" a small ghost of the snapper's bell at the top right labelled "non-standard: X ∼ N(μ, σ²)". On "change" the value marks arrive at 1.25 and 1.6, each right tail shaded pale amber, with live area readouts that never change through the morph, hand tag "same curve, same areas". On "five" row "P(X > 45) = P(Z > 1.25)" (52 px).

### 4. comparing results from different groups
> Zed scores also compare results from different groups. Alex scored seventy-two in Maths, where the mean was sixty and the standard deviation twelve. Blake scored sixty-eight in English, with mean fifty-five and standard deviation **ten**. Alex has the higher mark. But Alex's zed score is twelve over twelve, which is **one**. Blake's is thirteen over ten, one point **three**. So Blake did better relative to the cohort, because Blake's mark is further above its mean, measured in standard **deviations**. To justify a comparison, quote both zed scores.

Visual: clear change to the g01 board. Task strip (44 px): "Who did better relative to their cohort?" `ScoreCompare`: two plain score cards (names only, no figures; 520 × 300 px each): "Alex: Maths 72" with grouped givens "μ = 60, σ = 12"; on "ten" "Blake: English 68" with "μ = 55, σ = 10". On "higher mark" "72 > 68" in grey, hand tag "higher mark ≠ better". On "one" row "z = (72 − 60)/12 = 12/12 = 1.0" (52 px); on "three" row "z = (68 − 55)/10 = 13/10 = 1.3". On "deviations" both cards drop an amber z-dot onto one standard normal axis (x −3 to 3): Alex at 1.0, Blake at 1.3, further right, green framed "Blake: 1.3 > 1.0". On the last sentence a grey chip "justify: quote both z-scores".

### 5. a table for the areas beyond
> Now the areas. Every normal curve becomes the same standard normal, so one table works for all of them. This table gives the probability that Z is less than zed, the area to the left, for positive **zeds**. For one point two five, go down to the row for one point two, then across to the column for zero point zero **five**. The entry is zero point eight nine four **four**. That's the area to the left, so the area beyond the snapper is one minus that, zero point one zero five **six**. At one point six, the table gives zero point nine four five two, so beyond the perch is zero point zero five four **eight**. Under these normal models, about one snapper in ten is at least that long, but only about one perch in eighteen. Further out means a smaller tail, so the perch is the more unusual **catch**.

Visual: clear change. Left: the standard normal (1,000 × 480 px) with `ZSlider`: an amber z marker starts at 0 and slides right, shading the right tail pale amber with a live readout "P(Z > z)" (52 px): 0.5000, 0.3085 at 0.5, 0.1587 at 1, then it pauses at 1.25 with the snapper sprite (160 px) riding the marker. Right column: `ZTable` excerpt slides in, heading "P(Z < z)", rows 0.0 to 3.4 (faint except the needed rows), columns 0.00 to 0.09 (34 px entries). On "zeds" a grey tag "left areas, z ≥ 0", hand tag "this table looks left". On "five" (first) the row 1.2 and then the column 0.05 highlight amber; on "four" the two meet at "0.8944", which lifts out green framed "P(Z < 1.25) = 0.8944", and the area left of 1.25 tints faintly. On "six" row "P(Z > 1.25) = 1 − 0.8944 = 0.1056", green framed, hand tag "1 − table", and the slider's readout agrees. On the next sentence the marker slides on to 1.6 with the perch sprite, the table's row 1.6, column 0.00 highlights "0.9452"; on "eight" row "P(Z > 1.6) = 1 − 0.9452 = 0.0548", green framed. On "one perch in eighteen" grey readouts "0.1056 ≈ 1 in 10" and "0.0548 ≈ 1 in 18" sit under the two tails. On "catch" the two tails sit side by side, the 1.6 tail visibly thinner, the perch plate (360 px) returns with a green tick, tag "further out, smaller tail".

### 6. negative z by symmetry
> This table has no negative zeds, and symmetry fixes that. A drink-bottle filling machine aims for five hundred millilitres, with sigma eight. A bottle with four ninety is ten below, so zed is minus one point two **five**. The area below minus one point two five matches the area above plus one point two five, the snapper's tail. So it's zero point one zero five **six**, and about ten point six percent of bottles fall below four **ninety**. Any negative zed works the same way: flip to the other side, then take one minus the table.

Visual: clear change: the bottles' bell N(500, 64) (x 460 to 540; 1,000 × 480 px) with the reused bottle plate (`chemistry/m7-pet-bottle-v1`, 300 px tall, a coded fill line inside it) at the top left; model strip "X ∼ N(500, 64): fill (mL)"; givens "x = 490 mL, μ = 500, σ = 8". On "five" (first) row "z = (490 − 500)/8 = −10/8 = −1.25" (52 px) and the bell maps onto a small standard normal beside it with the mark at −1.25. On "snapper's tail" `TailMirror` lifts the tail below −1.25 and lays it exactly on the tail above 1.25, hand tag "mirror tail", row "P(Z < −1.25) = P(Z > 1.25)"; a red slip "P(Z < −1.25) = 0.8944" writes and is crossed silently, tag "that's left of +1.25". On "six" green framed "P(X < 490) = 1 − 0.8944 = 0.1056". On "ninety" a grey row "about 10.6% underfilled" and a grey chip "s10's apples: same method with a calculator". On the last sentence a general row "P(Z < −a) = P(Z > a) = 1 − P(Z < a)" writes (44 px).

### 7. middles by symmetry
> For a middle, use symmetry again. Bolts are normal, with mean fifty millimetres and standard deviation zero point three, and pass between forty-nine point five and fifty point **five**. Zed is plus or minus one point six seven, so each tail is one minus zero point nine five two five, which is zero point zero four seven five. The middle is one minus both **tails**, about zero point nine zero five. So about ninety point five percent of bolts pass.

Visual: clear change to the g01 board. Task strip (44 px): "Bolts: find P(49.5 < X < 50.5)." Model strip "X ∼ N(50, 0.3²)", givens "μ = 50 mm, σ = 0.3 mm", "pass: 49.5 to 50.5 mm". Left: the bolts' bell (1,000 × 480 px) with violet μ at 50. On "five" (fifty point five) marks at 49.5 and 50.5; row "z = ±0.5/0.3 = ±5/3 ≈ ±1.67" (52 px), hand tag "z rounded for the table"; the table's row 1.6, column 0.07 highlights "0.9525"; row "P(Z > 1.67) = 1 − 0.9525 = 0.0475" with both tails shading (`TailMirror` match). On "tails" the middle shades pale amber, green framed "P = 1 − 2(0.0475) = 0.9050", grey readout "app: 0.9044 (z not rounded)". On the last sentence "about 90.5% pass".

### 8. a judgement under the model
> Zed scores also support judgements. A quality check finds a bottle holding four seventy-four millilitres. Its zed score is minus twenty-six over eight, which is minus three point two **five**. The table gives zero point nine nine nine four at three point two five, so the tail below is about zero point zero zero zero **six**. If the machine is still working as modelled, only about six bottles in ten thousand would be that **low**. So finding one is a good reason to check the **machine**.

Visual: clear change to the bottles' bell N(500, 64) (x 460 to 540), the bottle plate (300 px) with its coded fill line visibly low at 474, a red dot at 474 far in the left tail. Task strip: "Is a 474 mL bottle unusual?" Row "z = (474 − 500)/8 = −26/8 = −3.25" on "five" (52 px); grey tag "beyond 3σ: very unusual (s10)". On "six" the table's row 3.2, column 0.05 highlights "0.9994"; the thin tail shades (zoom inset), green framed "P(X < 474) = 1 − 0.9994 = 0.0006". On "low" a grey row "about 6 in 10,000, assuming N(500, 64)", hand tag "under the model". On "machine" a chip "evidence the machine may have changed".

### 9. memory aid
> Here's a way to remember the table. This table looks left. For a right tail, take one minus. For a negative zed, use the mirror tail on the other **side**.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main line in the hand font, 64 px: "This table looks left." Under it two icons from the scenes: the complement split (scene 5) and, on "side", the tail lifted across (scene 6). Badge at the left: the golden perch (240 px) with its z-dot at 1.6. Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Compare the two results. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Priya scored 74 in English, where the marks had mean 62 and standard deviation 8, and 81 in Mathematics, where the marks had mean 70 and standard deviation 10. In which subject did Priya perform better relative to the cohort? Justify your answer using z-scores." Picture slot: two blank score cards labelled "English" and "Mathematics" over one empty axis (no dots, no z-values). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> In English, zed is seventy-four minus sixty-two, over eight, which is one point **five**. In Maths, zed is eighty-one minus seventy, over ten, which is one point **one**. One point five is bigger, so Priya did better in English, relative to the **cohort**. Choosing Maths because eighty-one is the higher mark is wrong. The two marks come from groups with different means and **spreads**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "English 74 (μ 62, σ 8)", "Maths 81 (μ 70, σ 10)". "74", "62" and "8" underlined; on "five" row "English: z = (74 − 62)/8 = 12/8 = 1.5" (52 px). "81", "70" and "10" underlined; on "one" row "Mathematics: z = (81 − 70)/10 = 11/10 = 1.1". On "cohort" two amber z-dots land on the card's axis, green framed "English: 1.5 > 1.1". On "spreads" a red slip "Mathematics, because 81 > 74" writes and is crossed (caption "raw marks from different groups"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Use the table values on the card. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The times, X minutes, taken to complete a puzzle are modelled by X ∼ N(42, 9). Find P(X > 46.5). You may use: P(Z < 0.50) = 0.6915 and P(Z < 1.50) = 0.9332." Picture slot: empty axes "time x (min)" (no curve, no shading, no σ). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> The variance is nine, so sigma is **three**. Zed is forty-six point five minus forty-two, over three, which is one point **five**. The table gives zero point nine three three two to the left, so the right tail is one minus that, zero point zero six six **eight**. A zed of zero point five is wrong. That divides by the variance, not by **sigma**.

Visual: the card shrinks to the top. `GivensStrip`: "X ∼ N(42, 9)", "P(X > 46.5)", "P(Z < 1.50) = 0.9332". "9" underlined, row "σ = √9 = 3" on "three" (52 px). "46.5" and "42" underlined; on "five" row "z = (46.5 − 42)/3 = 4.5/3 = 1.5". On "eight" "P(Z < 1.50) = 0.9332" on the card underlined; the card's axes draw a teal bell with the right tail shaded, green framed "P(X > 46.5) = 1 − 0.9332 = 0.0668". On "sigma" a red slip "z = 4.5/9 = 0.5" writes and is crossed (caption "9 is σ²"). Hold about 1 s.

### 14. handoff
> So a zed score counts standard deviations, compares results, and turns any normal area into a table look-up. Next, the question runs backwards. The company wants only one percent of bottles below four ninety, and sigma stays at eight. Where must it set the **mean**?

Visual: the framed "z = (x − μ)/σ" and "This table looks left." show small at the top, then fade on "Next". Board clears to the bottles' bell (x 460 to 560), the bottle plate small: 490 marked, the left tail shaded and labelled "1%", a chip "σ = 8", and on "mean" the μ marker relabels "μ = ?" with a ghost arrow pointing right. Chip "Next: finding μ or σ from a probability". No z-value or answer is shown or spoken. Hold about 2 s. This is s12's opening frame (unchanged); scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- z = (x − μ)/σ: standard deviations above or below μ.
- Z ∼ N(0, 1): every normal standardises to it.
- Compare groups with z-scores; quote both.
- Table: P(Z < z). Right tail: 1 − table.
- Negative z: mirror tail. Middle: 1 − 2 tails.

Memory aid (framed card, right half of the notes screen, as in scene 9): *This table looks left.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 14's frame exactly (the bottles' bell, 490 marked, the left tail "1%", "σ = 8", "μ = ?" with the ghost arrow, the bottle plate, chip "Next: finding μ or σ from a probability"). This is the final frame and s12's opening frame.

## Teaching checks

- **Does it explain causes?** Why raw gaps fail: different units and spreads (1). Why counting σ works: it measures every gap against its own spread (2). Why one curve and one table: subtracting μ and dividing by σ turns every normal into N(0, 1), with the marks and areas moving together (3, 5). Why Blake did better: further above the mean in standard deviations (4). Why 1 − 0.8944: symmetry matches the left tail at −1.25 to the right tail at 1.25 (6). Why 1 minus the table for right tails: the table gives left areas (7). Why the 474 mL bottle is evidence: under the model it would almost never happen (8).
- **Misconceptions addressed:** "the bigger raw gap is more extreme" (1, 2); "the higher mark is better" (4; A1 crossed); "P(Z < −a) = P(Z < a)" (6); "the table gives the right tail" (7); "divide by the variance" (A2 crossed); "a rare result proves the machine is broken" (8: "a good reason to check", under the model).
- **One idea at a time:** one problem (1), one measure (2), one transformation (3), one comparison (4), one look-up (5), one symmetry use (6), one complement and one middle (7), one judgement (8). Only the needed earlier results stay bright: −1.25 and −1.6 in 3 and 6; the table excerpt shows only the rows in use.
- **Video makes it easier:** the student watches each gap fill with σ-steps (2), both bells morph into one standard curve with their tails intact (3), two z-dots land on one axis (4), a z marker slide along the curve while its tail shrinks live and the table's row and column meet at the entry (5), and a left tail lift onto the right (6).
- **Visual standard, item by item:** 1 the painted snapper and golden perch from the first frame, returning in 3, 5 and 9, and the bottle from 6; 2 a new stage every 30 to 60 s; 3 `SigmaRuler` with live counts, the morph with fixed live tails, `ZSlider` with a live tail probability; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards (2, 4, 7, 8), framed answers and crossed slips; 8 framed card and five short bullets; 9 the smaller gap being the rarer catch, the collapse onto one curve, the exact mirror.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible, 10 seconds each with the invitation to pause; nothing answer-bearing on either card (A2 supplies a trap value as well as the right one). One crossed mistake each; feedback about 29 s and 26 s (scenes 11 and 13, including the 1 s holds).
- **Avoided double teaching:** s09's variance trap, symmetry and middle rule, and s10's "same curve in σ units" and F(490) are used, not re-taught.
- **Syllabus coverage:** `cid8ec3651` (3; key note 2); `ci81208003` (2; key note 1); `cie7b9fd82` (2; key note 1); `ci9f2473ff` (4; A1; key note 3); `ciaad9c7ab` (5, 6, 7; A2; key note 4); `cia23986f7` (8).
- **Out of scope by design:** finding values, μ or σ from probabilities (s12); calculator normal functions.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Priya scored 74 in English, where the marks had mean 62 and standard deviation 8, and 81 in Mathematics, where the marks had mean 70 and standard deviation 10. In which subject did Priya perform better relative to the cohort? Justify your answer using z-scores."
Model answer: English z = (74 − 62)/8 = 1.5. Mathematics z = (81 − 70)/10 = 1.1. Since 1.5 > 1.1, Priya's English mark is further above its mean in standard deviations, so she performed better in English relative to the cohort. Classic mistake (crossed): "Mathematics, because 81 > 74".

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "The times, X minutes, taken to complete a puzzle are modelled by X ∼ N(42, 9). Find P(X > 46.5). You may use: P(Z < 0.50) = 0.6915 and P(Z < 1.50) = 0.9332."
Model answer: σ = √9 = 3. z = (46.5 − 42)/3 = 1.5. P(X > 46.5) = P(Z > 1.5) = 1 − 0.9332 = 0.0668. Classic mistake (crossed): "z = 4.5/9 = 0.5" (divided by the variance).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Snapper (anchor, new) | N(40, 16) cm, σ = 4; 45 cm: z = 5/4 = 1.25; P(X > 45) = 1 − 0.8944 = 0.1056 | 1 to 3, 5 |
| Golden perch (anchor, new) | N(36, 6.25) cm, σ = 2.5; 40 cm: z = 4/2.5 = 1.6; P(Y > 40) = 1 − 0.9452 = 0.0548; 1/0.1056 ≈ 9.5 ("about one in ten"), 1/0.0548 ≈ 18.2 ("one in eighteen") | 1 to 3, 5, 9 |
| Bottles (site lesson 3) | N(500, 64), σ = 8; 490: z = −10/8 = −1.25; P(X < 490) = 1 − 0.8944 = 0.1056 (about 10.6%) | 6, 8, 14 |
| z-slider (grey readouts) | P(Z > z): 0.5000 (0), 0.3085 (0.5), 0.1587 (1), 0.1056 (1.25), 0.0548 (1.6), 0.0228 (2) | 5 |

| Standard normal | Z ∼ N(0, 1) | 3, 5 |
| Alex, Blake (site Q2) | 72 (60, 12): z = 1.0; 68 (55, 10): z = 1.3 | 4 |
| Table entries | 0.8944 (1.25), 0.9452 (1.60), 0.8413 (1.00), 0.9525 (1.67), 0.9994 (3.25) | 5 to 8 |
| Exam marks (site card 05) | not worked in Revision 3 (right tails now on the catches) | none |
| Bolts (site card 05) | N(50, 0.3²); 49.5 to 50.5; z = ±5/3 ≈ ±1.67; tail 0.0475; middle 0.9050; app 0.9044 (grey) | 7 |
| 474 mL bottle | z = −26/8 = −3.25; P = 0.0006, about 6 in 10,000 | 8 |
| A1 | English 1.5; Mathematics 1.1; crossed "Mathematics, 81 > 74" | 10, 11 |
| A2 | N(42, 9): σ = 3; z = 1.5; P = 0.0668; card values 0.6915, 0.9332; crossed z = 0.5 | 12, 13 |
| Handoff | 490, 1%, σ = 8, μ = ? | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 (3 Nov, scratchpad script `s10s12/nums_s10s12.py`); Codex to re-check.

- (45 − 40)/4 = 1.25; (40 − 36)/2.5 = 1.6; (490 − 500)/8 = −1.25. z-slider tails (SciPy, 7 Nov, scratchpad `maths07/nums.py`): 1 − Φ(z) = 0.5000, 0.3085, 0.1587, 0.1056, 0.0548, 0.0228 at z = 0, 0.5, 1, 1.25, 1.6, 2.
- Φ to 4 dp: Φ(1.25) = 0.8944; Φ(1.6) = 0.9452; Φ(1) = 0.8413; Φ(1.67) = 0.9525; Φ(3.25) = 0.9994; Φ(0.5) = 0.6915; Φ(1.5) = 0.9332.
- 1 − 0.8944 = 0.1056; 1 − 0.9452 = 0.0548; 1 − 0.8413 = 0.1587; 1 − 0.9525 = 0.0475; 1 − 2(0.0475) = 0.9050; 2Φ(5/3) − 1 = 0.9044; 1 − 0.9994 = 0.0006 (exact 0.000577).
- (72 − 60)/12 = 1.0; (68 − 55)/10 = 1.3; (84 − 72)/12 = 1; 0.5/0.3 = 1.667; (474 − 500)/8 = −3.25.
- A1: 12/8 = 1.5; 11/10 = 1.1. A2: √9 = 3; 4.5/3 = 1.5; 1 − 0.9332 = 0.0668; 4.5/9 = 0.5.

## Memory aid check

- **"This table looks left."** Meaning, as said in scene 9: a standard normal table gives P(Z < z), the area to the left; a right tail is one minus the table value; a negative z uses the mirror tail on the other side. Assumptions checked: the table form (left areas for z ≥ 0) is the HSC form to be confirmed by the maths check (open decision 2); if a table printed right-tail areas, the aid would be wrong, so the aid is tied to the table shown on screen. The mirror step relies on the symmetry of the standard normal (s09). It helps a new case: A2's right tail is "one minus the table". Introduced after the look-up and the two uses (scenes 5 to 7).
- **Considered, not used:** "Divide by sigma, not sigma squared" (it is s09's and A2's lesson; one aid per video).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,647 characters**, 15 scene headings (Revision 2: 5,554). Characters per scene (1 to 15): 419, 618, 584, 538, 742, 519, 441, 475, 150, 57, 372, 65, 330, 262, 75.

At 13.3 characters per second the speech before the notes is about 419 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 18 s of settling for the σ-step rulers (2), the morph to N(0, 1) (3), the z-slider and table highlights (5) and the tail lift (6); the key-notes scene is 45 s (1,350 frames). Total **about 508 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 62 s spare.

Reserve trims if the voiced take runs long: scene 7's last sentence ("So about ninety point five percent of bolts pass.", keep the screen line); scene 4's last sentence (keep the grey chip). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12s11` (route math-a12-s11). Suggested explainer folder `src/explainer/lessons/math-a12-s11` and build folder `docs/production/claude-pm/lessons/m-a12s11` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, z-score, standard-normal, compare-scores, read-table, negative-z, right-tail-middle, judgement, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s10's last frame continues into scene 1 (same two bells); 1 to 2 camera continue (rulers); 2 to 3 camera continue (the morph); 3 to 4 clear change (score cards); 4 to 5 clear change (table); 5 to 6 camera continue; 6 to 7 clear change (exam marks), with a clear change to the bolts inside scene 7; 7 to 8 clear change (fills); 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s11-rev3-learning-review.md`, `science_check` = `checks/m-a12s11-rev3-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, viewed with the image reader): `biology/y11-fish-snapper-v1.png` (a pink snapper, side view, transparent, 1,691 px wide) and `biology/y11-fish-golden-perch-v1.png` (a golden perch, side view, transparent, same style and size) read clearly and match each other, so no new fish plates are needed. `chemistry/m7-pet-bottle-v1.png` (a plain empty PET drink bottle with a white screw cap, no label or text, transparent) serves as the bottle plate; a coded fill line is drawn inside it. No new painted plate.

Coded (studio kit): measuring boards, rulers, curves, the slider, the table, score cards (names only), working boards, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: the s09 and s10 parts (`NormalCurve` with `matchMarks` and `sigmaAxisLabels`, `TailMirror`, `TailLadder`, `AreaFill` open ends), decision 32's plate meter readout and level fill (the bottle's coded fill line), and the studio's `ParameterSlider`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot, `GivensStrip` and `QuestionAxes`.

Additions:
1. **`SigmaRuler`**: a ruler from μ marked in σ-steps, filling the gap to a value with a live count checked against |x − μ|/σ. Checks: 1.25 for 45 on N(40, 16); 1.6 for 40 on N(36, 6.25).
2. **`ZTable`**: a printed-style P(Z < z) table generated from Φ (rows 0.0 to 3.4, columns 0.00 to 0.09, 4 dp) with focused rows, row and column highlights meeting at the entry, and a linked curve. Checks: (1.2, 0.05) = 0.8944; (1.6, 0.00) = 0.9452; (1.6, 0.07) = 0.9525; (3.2, 0.05) = 0.9994. Labelled "HSC-style table (as in the NESA 2024 sample examination)".
3. **`ZSlider`**: an amber z marker on the standard normal shading the right (or left) tail with a live probability from Φ, optional pauses with a plate sprite riding the marker. Checks: 0.5000, 0.3085, 0.1587, 0.1056, 0.0548, 0.0228.
4. **`ScoreCompare`**: two plain score cards (names only) dropping z-dots onto one axis. Checks: Alex 1.0, Blake 1.3; Priya 1.5 and 1.1.

## Codex asset brief (Maths A12 S11)

No new painted plate. Codex confirms at build time that the three reused plates (`biology/y11-fish-snapper-v1.png`, `biology/y11-fish-golden-perch-v1.png`, `chemistry/m7-pet-bottle-v1.png`) are present, transparent and unstretched at the sizes used (fish 360 px wide; bottle 300 px tall), and reports the bottle's inner cavity (top and bottom of the liquid space, in plate pixels) in `docs/production/claude-pm/assets/ma12-s11-plate-measures.json` so the coded fill line sits inside the glass. The same measure serves s12.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm every table entry against Φ to 4 dp, and that the bolts' rounding of z (5/3 to 1.67) is labelled on screen.
3. Confirm the scope of the learner-visible claims: "one table works for all of them" (with standardising); "the areas don't change" under standardising; "a good reason to check the machine" (under the model, not proof).
4. Confirm no value is found from a probability (no inverse look-up; s12), and the empirical rule appears only as s10's grey link.
5. Confirm both attempt questions carry every demand and given (A2 includes both table values), and that neither card shows a curve, a z-value or the answer form.
6. Confirm the six syllabus quotes match the crosswalk JSON exactly (including "z -score" spacing) and no site module label appears in learner copy or metadata.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling ("millilitres", "millimetres"; "zed" in speech).
8. Confirm the narration character count and per-scene counts by script with the build parser rules.
9. Confirm the opening frame matches s10 scene 16 exactly, and the handoff (scene 14) shows no z-value or answer.
10. Confirm the score cards show names only (no people, faces or figures).

## YouTube metadata (draft)

Title: z-Scores, the Standard Normal and Normal Tables | Year 12 Maths Advanced

(Title length: 75 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson02.sa.html (z-scores) and https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson03.sa.html (tables and tail probabilities)

Ten millilitres below one mean, eight grams below another: which is further out? Count standard deviations to get the z-score, see every normal curve turn into the standard normal N(0, 1), and use z-scores to compare results from different groups. Then read a standard normal table, use symmetry for negative z-scores, find right tails and middles, and use a tiny tail probability to make a judgement. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, the normal distribution.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Distinguish between a standard normal distribution with mean 0 and standard deviation 1, and the non-standard normal distribution with mean μ and standard deviation σ"
"Define the z-score, or standardised score, by the formula z = (x − μ)/σ, where μ is the mean and σ is the standard deviation, and x is an observed value of a random variable"
"Interpret the z-score as the number of standard deviations a score lies above or below the mean"
"Use z-scores to compare scores from different sets of data and justify conclusions"
"Use z-scores to identify probabilities of events less or more extreme than a given outcome and solve problems using tables for the standard normal distribution"
"Use z-scores to make judgements related to probabilities of certain events or given sets of data assuming an underlying normal distribution"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: The empirical rule and the normal PDF and CDF (previous video). Next: Finding an unknown mean or standard deviation.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. Two description links (root).** Lesson 2 carries the z-score pages and lesson 3 the tables and tails; both are linked. Root may prefer one.
- **2. Table layout (maths check).** The design assumes a P(Z < z) table for z ≥ 0 to 4 dp in rows by 0.1 and columns by 0.01. The maths check confirms the form printed for the 2024 course (HSC reference sheet or exam paper). If the official table differs (for example, right-tail areas), `ZTable`, scenes 5 to 7 and the memory aid change together.
- **3. "Zed" (voice pilot).** Speech writes "zed" so the voice says the Australian letter name; screen text keeps "z".
- **4. Route entry (root).** The draft route entry in Decisions is a provisional input. **5. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 3 (7 Nov) has had no independent review. Next: student learning review (trace from s09 and s10; check that the two catches make "raw gaps can't be compared" felt; that the ruler gives the reason for dividing by σ; that the morph shows why one table serves every normal; that the z-slider ties the table entry to a shrinking area; that the comparison's surprise lands (the smaller gap is rarer; the lower mark wins); that the bottle's mirror step is one visible stage; that the judgement keeps its "under the model" condition; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The σ-step fills, the morph to N(0, 1), the z-dots, the table highlights and the tail lift carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s10's scene 16 (same designer); the handoff frame is s12's opening (same designer).

## Revision 2 (4 November 2026, brief 162 repairs)

The table is labelled "HSC-style table (as in the NESA 2024 sample examination)", confirmed by brief 162; never called the reference sheet. No narration change. Narration now 5,554 characters (counted by the build parser rules). No em dashes.


## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). The six syllabus points, the table entries, the comparison, the bolts, the judgement, both attempts, the memory aid and the s12 join are unchanged.

- **Anchor and why:** two fishing catches, a 45 cm snapper and a 40 cm golden perch, each compared with its own kind. "Which catch is more unusual?" is the z-score question; the smaller raw gap turns out to be the rarer catch because the perch's kind varies less. The numbers keep Revision 2's table look-ups (z = 1.25 and 1.6).
- **Simulations:** `SigmaRuler` with live counts; the morph to N(0, 1) with fixed live tails; `ZSlider` shading the right tail with a live probability and the fish riding the marker; table highlights linked to the curve; `TailMirror`.
- **Colour roles:** curves teal (standard normal deeper teal); μ and σ-steps violet; the z marker, z-dots and table highlights amber; shaded probabilities pale amber; answer green; mistake red.
- **Plates:** none new; reused Biology's snapper and golden perch and Chemistry's PET bottle (the bottle plate in the s12 and g01 frames).
- **Narration changes (not voiced):** scenes 1, 2, 3, 5, 6 and 7 (the catches; the z-slider and right tails; the bottles' negative z; the exam-marks right tail dropped); scene 9 gains a cue word. Scenes 4, 8 and 10 to 15 keep their Revision 2 text.
- **Counts:** 5,554 → 5,647 characters; about 518 s with the old 60 s notes hold → about 508 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on s10 Revision 4's two fish (changed together; the 490 mL and 242 g bells withdrawn from this join); ends on the bottles' 1% question, unchanged, which s12 opens on.
- **Kit additions:** `SigmaRuler`, `ZTable`, `ZSlider`, `ScoreCompare`.

## Revision 4 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **Table convention (scenes 5, 6, 9, card).** Every general table claim now names the table shown: "This table gives...", "This table has no negative zeds", "This table looks left." The NESA reference sheet has no z table (Codex's follow-up), so the video never implies one is supplied.
- **Fish tails (scene 5).** "Under these normal models, about one snapper in ten is at least that long" (upper tail; "at least", not "that long").
- **Rounded bolt result (scene 7).** Screen tag: z rounded to 1.67 gives ≈ 0.905; exact z = 5/3 gives ≈ 0.904. Both are labelled approximate.
- **Cohort comparison.** Scenes 4 and 11 already say "relative to the cohort ... measured in standard deviations"; no percentile claim is made. No change.
- **Narration changed:** scenes 5 (742 to 779), 6 (519 to 522), 9 (150 to 151). Total 5,647 to 5,688 characters, 15 scene strings (build parser rules).
