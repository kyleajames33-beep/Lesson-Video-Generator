# Maths S12 r12b Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r12b.md`, "What is the average speed for a whole trip, and what does it mean when two journeys cross?" Source SHA256 `7df043c3a170510d471c9398a472b75b59863cf864a27ad6e7cd53aa1a540b5a`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r12a: reading a journey, gradient as speed; r10: minutes to hours; a01: two lines crossing) as a Mathematics Standard student starting Year 12, and a second time as a Standard 1 student, who has no algebraic method for the catch-up. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

This is a good design. Average speed gets a meaning before its formula ("the steady speed that would cover the same distance in the same time"), and the ghost car arriving with the real car makes that meaning visible; the 95 km/h ghost arriving about 50 minutes early lands the trap without a lecture. The catch-up is explained for both courses by the head start shrinking 20 km every hour (ruling 52), the crossing is said as "same place, same time, not same speed", and the graph answer is checked with distance = speed × time. Recalculated with SymPy 1.14 (`work/brief-review-standard-r2/verify.py`, `python -I`): 880 ÷ 121/12 = 87.27 (87.3) and 10.083 h; driving only 880 ÷ 28/3 = 94.29 (94.3); 95 km/h reaches 880 km at 9.26 h (9 h 16 min), about 49 min early; the two cars at 11:30 and 200 km, 40 km head start, 20 km/h gain, 2 h, and the gaps 30 km at 10:00 and 10 km at 11:00; A1 at 60, 60 and 50 km/h; A2 at 9:00 and 60 km (20 km head start, 30 km/h gain, ⅔ h); the memory-aid cyclist, 18 km/h. All correct.

## Findings

1. **Should fix, scene 3 (the driving-only figure and "pulls the average towards ninety").** Two links are missing here. First, "every extra hour at ninety pulls the average towards ninety" is said while the student is looking at the whole-trip answer, 87.3, which is below ninety, so the sentence seems to contradict the screen; it is really about the driving-only average. Second, "leave the stop out, and you get about ninety-four point three" never says the driving time, 9 h 20 min, so the number arrives unexplained. Fix: move the "pulls towards ninety" idea to the driving-only sentence and say the time. Narration: "So why isn't it ninety-five? First, that ignores the stop. Second, the car didn't spend equal time at each speed. It drove four hours at a hundred, but five hours and twenty minutes at ninety. Watch a car at ninety-five. It would arrive about fifty minutes early. Averaging the speeds is the classic slip. Read the question, too. For the whole trip, the stop counts. For the average driving speed, leave the stop out. That's nine hours and twenty minutes of driving, and you get about ninety-four point three, closer to ninety, because more of the driving was at ninety. Either way, it's total distance over total time." Screen as designed. Students should understand both why the mean is wrong and where each of the two averages comes from. Time: about the same (the moved clause replaces the old one).

2. **Optional, scene 2 ("ten point zero eight three hours" by ear).** A Standard student cannot check 5/60 = 0.083 in their head. Say "five minutes is five sixtieths of an hour, so on a calculator that's ten plus five divided by sixty, about ten point zero eight three hours", and show "10 + 5 ÷ 60" in the row. Using the calculator keystrokes avoids early rounding (880 ÷ 10.08 gives 87.30 too, but 880 ÷ 10.1 gives 87.1).

3. **Optional, scenes 4 and 5 (a van called "car A").** The trade van plate is labelled and narrated as "Car A". A student sees a van and hears "car". Either say "a van" ("Van A leaves a town at nine o'clock") throughout scenes 4 and 5 and the task strip, or keep "car" and accept the mismatch. Plate reuse itself is fine (ruling 27 already reuses this van).

## Joins

r12a to r12b matches (the finished graph, the hatchback at the end point, the dashed line with "?"; scene 2 answers it). r12b to r13: the hatchback, the small trip graph, "880 km driven" and a fuel gauge near E; no litres or dollars are shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; both graphs are supplied, A2's crossing is unmarked and lands on grid lines (9:00, 60 km). Each feedback gives the answer, the reason, short working and one crossed slip (about 25 s and 29 s). A2's feedback reads the graph and checks it; it does not repeat the head-start reason, which is right for a brief feedback.

## Standard 1 path

Complete without algebra: the catch-up is read from the graph and explained by "head start ÷ how fast the gap closes", and the equation is a grey, unspoken "Standard 2" row (ruling 52), as in a04a.

## Key notes and length

Five useful notes; note 2 separates whole-trip and driving-only averages, which finding 1 makes clearer in the narration. About 470 s with holds; the fixes change it by a few seconds at most.

No speech, design edits, builds or commits were made.
