# Maths S11 f04b Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-f04b.md`, "How far does a car travel before it stops, and why does speed matter so much?" Source SHA256 `d84caccb48a31e1f94070864e7d9d3651575debdc8f58cda5da9b199981450c8`.

Written design reviewed by tracing it from its stated entry knowledge (f04a's ÷ 3.6 and distance = speed × time; f01's substitution with a square) as a Year 11 Mathematics Standard student. Checked against rulings 4 and 88 to 95 and the pack `pre-design/maths-standard/math-s11-f04.md`. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 4 should fix, 0 optional).

The two-part strip is the right picture: the car keeps moving at full speed while the stopwatch runs, so "reaction distance" is seen before it is defined, and the grey ghost car shows what "braking only" (MS-78's error) would wrongly predict. Scene 4 gives a plain, correct reason for the factor of four ("twice the ground each second, for twice as long") and the slider makes the violet bar quadruple while the teal one doubles. The site model is taught as the same two parts in disguise. Road safety without fear: a red light, no crash. Recalculated with SymPy 1.14 (23 checks for f04b): 60 ÷ 3.6 × 1.5 = 25, + 36 = 61, slip 90; reaction 12.5, 25, 37.5, 50 and braking 9, 36, 81, 144 at 30 to 120 km/h, totals 21.5, 61, 118.5, 194, ratio ≈ 3.2; the model's 0.3v is a 27/25 = 1.08 s reaction; 0.01(50)² + 0.3(50) = 40; 2.5 s adds 16.7 m; A1 20 m/s, 24 m, 53 m, slip 86.4; A2 18 m and 54 m, triples. All correct as arithmetic; finding 2 is about consistency.

## Findings

1. **Should fix, scene 5 (ruling 95: one reaction time only).** Root ruled that no second reaction time is spoken, and that one chip says the model has its own built-in reaction time. The design still says "The zero point three v part is the reaction distance, for a driver who reacts in just over a second." and shows the chip "reaction (just over 1 s)". Fix: narration "The zero point three v part is the reaction distance." Chip: "reaction (the model has its own built-in reaction time)" (30 px, grey). Update the Decisions line "Values and sources" and open decision 1 to match. About 3 s shorter. Students keep 1.5 s as the only spoken figure.

2. **Should fix, attempt 1 (a braking distance that contradicts the video's own table).** Scene 4 has just shown braking 36 m at 60 km/h and taught that braking grows with the square of the speed. A1 then gives a car at 72 km/h a braking distance of 29 m, shorter than at 60 km/h. An attentive student will ask why the faster car stops in less room, which works against the scene they have just watched. Fix: use the video's own rule, 0.01 × 72² = 51.84, rounded to 52 m. Card (c): "At this speed the braking distance is 52 m. Find the stopping distance." Narration: "At this speed the braking distance is fifty-two metres, so find the stopping distance." Feedback 1: "Add the braking distance, twenty-four plus fifty-two, seventy-six **metres**." Framed answer "(c) 76 m", the amber bracket "76 m", the model answer and both number tables follow (24 + 52 = 76 checked). Label it "example value" as in scene 3. Students should be able to use the table and the attempt together without a contradiction.

3. **Should fix, scene 5 (a codename spoken aloud).** "Just substitute, the way we did in f01." Replacement: "Just substitute, the way we did with the courier's formula." The grey chip may keep its codename.

4. **Should fix, scene 4 (the P-plate car on the slider at 90 and 120 km/h).** The strip's car is the P-plate car from scene 1, and the slider runs it to 120 km/h, above any provisional licence's limit (P1 90, P2 100). Fix (visual only): in scene 4, and in f08 scene 6's capstone badge, the coded "P" is hidden, so the strip shows a car with no plate; it returns for scene 6 and the handoff at 60 km/h. Students should not see a P-plater modelled at 120 km/h in a road-safety lesson.

## Joins

f04a to f04b: scene 1 opens on f04a's final frame exactly (the stopwatch at 1.5 s already on screen, so the hook's "about one and a half seconds" is a callback, not a new number). f04b to f05: scene 12's frame (the road, the car at 60 km/h, the stretched teal part "2.5 s, slower reaction", the breath-test sign with "Random breath testing", "BAC 0.00" green, "L and P plates: zero", the chips, no formula) matches f05's Boundary.

## Practice and feedback

Both cards keep every part of the question on screen through the countdown; picture slots are an empty two-part strip and a car badge with no distances. Feedback 1 (about 23 s) and feedback 2 (about 20 s) each give the answer, the reason and one crossed slip. The 1.5 s source and the "example values (dry road)" label are for Codex's maths check (handover section 5).

## Key notes and length

The notes and the memory card ("Double the speed: reacting × 2, braking × 4") describe the parts, not the total, and scene 4 shows the total about 3.2 times, so the line does not over-claim. Narration 4,794 characters by this reviewer's count, about 451 s with holds, 119 s under the cap; under 5,000 is accepted by ruling 95. No em dash.

No speech, design edits, builds or commits were made.
