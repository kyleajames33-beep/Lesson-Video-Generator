# Maths S11 l01 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-l01.md`, "What do the gradient and y-intercept tell us, from a graph or an equation?" Source SHA256 `e175d782339d0a72023aa160d13acccaf1bdd967e0e209ef413c92a5c5e2bd05`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (f08's table made by a formula and its pancake line; Stage 5 plotting and reading scales, with gradient and y = mx + c met but not fluent) as a Year 11 Mathematics Standard student with a Stage 5 background. f08's design file does not exist yet; its final frame was checked against section 1 of `checks/root-decisions-maths-s11-f01-f08.md`. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 1 optional).

This is a strong opening video for the strand. It answers f08's chip on f08's own line in two sentences, then gives the y-intercept a meaning a student can picture ("the amount that was already there" in the tank) before the word arrives. The sliding triangle shows why a straight line has one gradient, the squares trap is real (6 squares up over 12 across) and is crossed at the moment the scales are on screen, and the car example forces subtraction at both ends because neither point is at zero. Reading m and c from C = 12 + 5h ("order doesn't matter") prepares l03 well. Recalculated with SymPy 1.14 (`work/brief-review-s11-l/verify.py`, `python -I`): 4 × 0 + 10 = 10 and 4 × 6 + 10 = 34; 5t + 20 at t = 0, 3, 6, 9, 12 gives 20, 35, 50, 65, 80; (80 − 20) ÷ 12 = 5; 6 ÷ 12 = 0.5; (160 − 40) ÷ (2 − 0.5) = 80; 1.5 ÷ 120 = 0.0125; (11 − 3) ÷ 4 = 2; 4 ÷ 8 = 0.5; y = 12 − 3x has m = −3, c = 12; y = 10 − 2x has m = −2, c = 10. All correct.

## Findings

1. **Should fix, scenes 2 and 5 (which quantity is the input?).** The key rule of the video is "gradient = output change ÷ input change", and the slip it crosses is dividing the other way. But no sentence tells the student how to tell the input from the output. Scene 2 says "minutes across the bottom, and litres up the side" without naming them, and scene 5 asserts "Distance is the output" and "Time is the input" with no reason. A Standard student will ask "how do I know which is which in the exam?" Fix. Scene 2, after "litres up the side": "Minutes are the input, so they go across, and litres are the output, so they go up." Scene 5: "Distance depends on time, so distance is the output, up the side, and time is the input." Visual: in scene 2, small grey tags "input" under the time axis label and "output" beside the volume label (30 px), kept on the scene 5 plot. Students should be able to pick the rise and run on any graph by asking which axis is which. About 6 s.

2. **Should fix, scene 4 (the tilting line rescales its axis).** The visual note says the plot "rescales its y-axis smoothly" when the line tilts to +25, and the scene ends "the steeper the line, the bigger the rate". One scene earlier the student learned that scales change what steepness looks like; a rescaled axis makes the +25 line look no steeper than it should, which undercuts both points. A rescale is not needed: on the fixed window (x 0 to 10, y −10 to 60, pivot (5, 25)) the +25 line is visible from x = 3.6 to 6.3 and simply runs off the top and bottom, plainly the steepest (checked in `work/brief-review-s11-l/suggested.py`). Fix: keep the axes fixed and clip the line at the window edges; say "And on the same axes, the steeper the line, the bigger the rate, whichever way it goes." Students should understand that steepness compares rates only on the same scales.

3. **Should fix, scene 6 ("The minus sign belongs to the two, because it's attached to the x").** The sentence is the answer to the design's own review question, and as written it reads as a riddle: the minus is not "attached to the x" in any sense a student recognises. Fix: "The minus sign in front of the two x goes with it, so the number with x is minus two, and the gradient is minus two." Keep the visual (the "−" pulsing with the 2 inside the amber box around "−2x"). Students should understand that the sign is part of m, which A2 then tests.

4. **Optional, open decision 2 (two anchors in the hook).** Keep the pancake sentences as written. They answer the question the previous video asked, in under 15 s, and give the first meaning of "where it starts" before the aquarium repeats it. No trim needed at this length.

## Joins

f08 to l01: scene 1 opens on f08's final frame as fixed in section 1 of the f01 to f08 root decisions (header without the strand name, the pancake plate, "=A2*4+10", the blue line (0, 10) to (6, 34), the amber dotted stopping curve, the three chips), and the first line picks up f08's spoken "Which two?". l01 to l02: scene 12's frame (taxi, "$6 to start", "+$3 a km", "example fare", empty axes 0 to 5 km and $0 to $24, "C = ?") is l02's opening frame, and nothing on it states the equation.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown. A1's picture shows the line with unlabelled points on grid intersections, which matches the card text and is the item's normal form; A2 has no picture. Each feedback gives the answer, the reason, short working and one crossed slip ("4 ÷ 8 = 0.5", "m = 12"), about 21 s and 22 s. The aquarium's fill rate carries an "example" tag; the car and the signs are the site's.

## Key notes and length

The five notes are short and useful, and the memory card ("c is where you start. m is how you move.") is introduced after the explanation and checked against falling and flat lines. About 492 s with holds, 78 s under the 570 s cap; the fixes add about 6 s.

No speech, design edits, builds or commits were made.
