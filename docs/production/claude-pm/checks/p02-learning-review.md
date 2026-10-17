# P02 learning review: colourimetry, a real K from a colour reading

**Verdict: pass after the should-fix items (all applied in Revision 2).** No blocker. Strengths to keep: the hook turns every earlier "given" K into a real question (where do those numbers come from?); every step of the method has its cause before its name (the red ion absorbs blue light, so more ions absorb more; excess Fe3+ pushes the equilibrium right, so the standards are known; neither reactant is in excess, so the mixture is the unknown); one board with three fixed zones and one right-hand panel at a time; the dilution is its own scene before the ICE table; the ICE table follows the owner's rule exactly (I for initial, C for change, E for equilibrium, with the measured value going into the E row before the change is worked out, as in C6a); the line's equation is solved by general moves only (subtract the intercept from both sides, then divide both sides by the gradient); K is written with no unit; scene 8 deliberately corrects the site's "K in the hundreds means mostly products" with the 15 percent grid; and the attempt gives the same K from a different mixture, which proves the idea of a constant.

Scope: AI source review of `../lessons/chem-m5-p02.md` (Revision 1, 16 Oct; filename then said C10): script, visuals, Numbers used, memory aids, attempt, feedback, key notes and length. Read as a student starting Year 12 who has watched C1 to C9 and knows c = n / V and dilution from Year 11, using `docs/production/student-learning-review.md`, `AGENTS.md`, the pre-design pack `../pre-design/chem-c10-colourimetry.md`, `../site-extracts/chem-m5-l13.md`, the audit (`../research/old-engine-ideas-audit.md`, items 6 and 7 and "Do not copy") and the neighbour `chem-m5-c09.md`. Plates inspected by name and listing only (`public/assets/chemistry/m5x-colourimeter-v1.png`, `m5x-cuvette-1-v1.png` to `-5`, `m5x-cuvette-unknown-v1.png`, the C3 tubes). Not learner evidence. No stills, voiced preview or audio; motion not judged. Human listening pending. U+2014 searched in the design and here: none.

Main question traced: *how can measuring the colour of a solution give you a real value of K?* Useful outcome: the student can explain why a calibration with excess Fe3+ is needed, read a concentration from the line, correct for dilution, use the E-row-first ICE table and judge repeat K values with their temperature.

## Material findings

| # | Scene | Exact words or element | Likely student question or problem | Concrete repair (applied) | What the repair enables | Severity |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 4 | "That means the red ion's concentration is simply the thiocyanate we put in." | "We put in 0.00200 mol/L, so the standard is 0.00200?" Scene 7a later calls the bottle value a trap, but scene 4 has just taught the student to use the amount "put in". The labels on the cuvettes (0.40 to 2.00 x 10^-4) then look unexplained. | "That means the red ion's concentration equals the thiocyanate concentration in that standard, which we know from how it was made." Visual equality now reads "[FeSCN2+] = [SCN-] in the standard". | The student links the standard's label to its made-up concentration, and the dilution rule in 7a is consistent with it. | should fix |
| 2 | 5 | "Epsilon depends on this instrument, its filter and these cuvettes" | Scene 3 has just defined epsilon as "how strongly this ion absorbs this light". Now it belongs to the machine. Which is it? | "The slope you measure depends on this instrument, its filter and these cuvettes, so a book value of epsilon won't quite match yours. Measuring your own standards on the same machine is the calibration..." | The student keeps one meaning of epsilon and learns the real reason for a calibration line. | should fix |
| 3 | 2, 4, 7a, 9, hook | Coded beaker (hook), coded water cuvette (blank), "two coded bottles", "two coded 5.00 mL measures" into "one 10.00 mL tube", a pipette icon | Owner rule: real objects get painted plates. These are the apparatus the student will meet in the practical, so a flat coded icon also loses the recognisable object. | Hook: the painted magnifier (`b6a-magnifier-v1.png`) over the painted C3 tube. New required plates in the Codex brief (items 3 to 7): blank cuvette, two reagent bottles, a 5 mL pipette, a 10 mL volumetric flask, with liquid drawn in code inside the glass. Recorded under Assets "Need" and as an owner decision. | The practical objects are identifiable and match the lab. | should fix |
| 4 | 2 | Colour wheel chip "red opposite blue-green" with the tag "absorbs blue, so it looks red" | The arrow points from red to blue-green while the narration says blue light. The referent of "absorbs" is unclear. | The wheel marks the absorbed arc (blue to blue-green) opposite the seen arc (red-orange), with the same tag. | Narration, tag and picture name the same colour. | should fix |

## Notes (no change needed, or applied as small tags)

1. **Scene 3, absorbance versus light.** Scene 2 says more red ions let less light through; scene 3 says doubling the ions doubles the absorbance. A student may infer that half the light gets through. Applied: a small grey tag "absorbance doubles; the light let through does not simply halve". The logarithm stays out (author note a).
2. **Scene 5 and 9, range.** Mixture 1 in the class table reads 3.43 x 10^-5, below the lowest coloured standard (4.0 x 10^-5) but above the blank, which is a calibration point. Applied: the range tag reads "use the line only inside the standards (blank to 2.00 x 10^-4)", so no student sees a contradiction.
3. **Scene 7b order.** Narration names I, C, E, fills the initial row from the dilution, puts the measured value in the E row, then works out the change. This is the C6a order and meets the owner's "E row first" rule. Keep.
4. **Scene 8.** The correction of the site claim is a strong contrast (K = 208, yet only 15 squares in 100). Keep the crossed chip.
5. **Scene 9.** The spread is judged by eye (range 205 to 214, mean 208) with the temperature recorded. This meets the route stop ("evaluate uncertainty") without percentage-uncertainty arithmetic. Keep.
6. **Scene 12a** is long (133 words) but replays the method on the same board in the same order, with each value on its word. It is feedback, not new reasoning. Keep; scene 6's equation sentence is the first reserve cut if the preview runs long.
7. **Re-teaching.** C3 (adding Fe3+ shifts right), C5 (expression, bands), C6a (ICE) and C9 (temperature) are each recalled in a clause. Year 11 dilution is shown once, with a picture of the same particles in twice the volume. No double teaching.
8. **No rate algebra, no mark-allocation talk, no Gibbs.** Checked.

## Learner trace

1. **Hook.** The student has used many given K values; the question "where do they come from?" is genuine. Sees the red tube deepen. Can say: if colour became a number, we could measure a concentration.
2. **Scene 2.** Sees light pass through a cuvette, the beam thin as red dots increase, and the blank set zero. Can say what absorbance and the blank are. After finding 4, the colour wheel agrees with "blue".
3. **Scene 3.** Sees twice the dots give twice the reading. Can say A rises in step with c for a fixed cuvette and light.
4. **Scene 4.** Sees excess yellow Fe3+ swamp the SCN- and almost every grey dot turn red. After finding 1 can say why each standard's concentration is known. Asks "why not find K from a standard?"; the tag answers.
5. **Scene 5.** Sees points fly to a graph and a line of best fit. After finding 2 can say why a measured line beats a book value.
6. **Scene 6.** Reads 0.705 across and down to 1.50 x 10^-4; sees the same value from the equation by two general moves.
7. **Scenes 7a, 7b.** Sees the volume double and the concentration halve; fills the ICE table in the rule order. Can explain each row.
8. **Scene 8.** Gets K = 208 with no unit and learns why it does not mean mostly products.
9. **Scene 9.** Sees five K values agree within a small spread and the temperature recorded.
10. **Attempt.** An unseen mixture with unequal volumes and added water, the same graph on screen, all values with units, one demand ("Find K."), 10 s countdown after "Pause here to answer.", nothing answer-bearing on screen. This is HSC application (the NESA 2023 Q31 skill set), not recall. Feedback replays the method and crosses one classic mistake (bottle values, 28); the initial-values slip (159) is spoken, not crossed.

The student leaves able to plan the standards, process supplied calibration and equilibrium data to K, and judge a set of repeats, which matches the route stop.

## Memory aids

- "Measure the colour it absorbs, not the colour you see." Given after scene 2 explained it; helps the new case of choosing a filter. Assumption (one absorbing species; set to its absorption band) holds here.
- "Standards, graph, reading, ICE table, K (dilute before the ICE table)." Site aid with the dilution step added. Gives order only; reasons are taught first. Helps the attempt directly.

## Length

Revision 2 recount: 1308 words, 7268 characters. About 7.1 minutes of speech plus 10 s attempt, 75 s notes and about 24 s of holds: about 8.9 minutes. Inside 6 to 10 minutes; no split.

## Checks against the review questions

| Question | Result |
| --- | --- |
| Cause before name? | Yes, after findings 1 and 2. |
| One main question, one stage at a time? | Yes; one right-hand panel at a time. |
| Visual medium used? | Apparatus, beam, particles and a graph carry the explanation; after finding 3 every real object is painted. Playback not judged. |
| Owner ICE rule, general algebra, K without units? | Yes. |
| Attempt HSC-level, conditions visible, countdown, one crossed mistake? | Yes. |
| Key notes copyable? | Yes: five items, about 75 s hold. |
| Em dashes? | None. |

## Resolution

All four should-fix findings and notes 1 and 2 are applied in Revision 2 of `../lessons/chem-m5-p02.md` (scenes 2, 3, 4, 5, 7a, 9 and the hook visual; Assets; Codex brief items 3 to 7; Open decisions). Owner decision left open: approve the five new apparatus plates. Repeat this review on the exact voiced preview before full export.
