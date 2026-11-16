# Maths A11 c07 Revision 1: independent learning review

16 November 2026. Design `lessons/math-a11-c07.md`, "Why does x^n differentiate to nx^(n − 1), and how do sums and multiples follow?" Source SHA256 `9a847694de68146b8f1bd04946a4f3a3e4c806b06a498ccfd553d42e8cdb4bf9`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass with should-fix** (0 blockers, 2 should fix, 1 optional).

The rule is inferred, not announced: the factorised second lines ("3 × 1², 3 × 2², 3 × 3²") make the pattern readable, and the app's own gradient graph landing on 3x² is a fair check. The stretch keeps the run and triples the rise, so "the three comes along for the ride" has a picture, and the stacked rises make the sum rule obvious. The lookout's falling "extra view per metre" is a real surprise. Recalculated: app gradients 2, 4, 6; 3, 12, 27; 4, 32, 108; `we-1` gives 12x³ − 6x² + 5; `we-2` gives 1/(2√x) − 2/x³; distances 15.97 km and 27.65 km at 20 m and 60 m; 1.785/√h gives 0.1785 km per metre (178.5 m, "about 179") at 100 m and about 1,262 m per metre at 2 m; A1 12x² − 3/√x − 5/x²; A2 gradient 9 at x = −1. All correct.

## Findings

1. **Should fix, scenes 1 and 7 (h now means a height).** Scene 1: "From a height of h metres above the sea, you can see about three point five seven times the square root of h kilometres". Scene 7: "Its derivative is three point five seven, times a half, times h to the minus a half. That's one point seven eight five over root h." In c04 and c06, h was the step that shrinks to zero, always blue, and c06 kept the letter away from any height on purpose. One video later, h is the variable being differentiated. Students may read √h as "the step" and wonder whether h goes to zero; the same symbol now means two different things in consecutive videos. Fix: use x for the height in metres throughout.
   - Scene 1: "From a height of x metres above the sea, you can see about three point five seven times the square root of x kilometres to the horizon."
   - Chip: "d ≈ 3.57√x km (x = height in m)".
   - Scene 7: "The distance is three point five seven, times x to the half. Its derivative is three point five seven, times a half, times x to the minus a half. That's one point seven eight five over root x. At a height of one hundred metres, root x is ten, so the rate is zero point one seven eight five kilometres per metre."
   - Rows and slider labels change to match.

   Using x also puts the lookout directly inside the x-to-the-n rule just taught. c06's handoff chip changes to match (c06 finding 2).

2. **Should fix, attempt 2 (it tests a move the video never teaches before the countdown).** Card: "Find the gradient of the curve y = x²(x − 3) at x = −1." "Expand first" appears only in feedback 2 and key note 5; scenes 2 to 7 never show a product of brackets. The only method taught is term by term, so the crossed slip (differentiate each factor and multiply) is what an attentive student will do. The attempt tests a step they were not given, and the feedback then teaches it after the fact. Fix: add one sentence to scene 5 after "Do each term on its own.": "And if you're given brackets multiplied together, expand them first, so you have separate terms to work with." Add a grey row "x²(x − 3) → x³ − 3x² first" (about 6 s; scene 2's reserve trim pays for it). The attempt then applies a taught step, and feedback 2 stays as written.

3. **Optional, scene 2 ("The app's numbers are exact gradients, not estimates.").** An app's tangent tool computes numerically and rounds, and c04 has just stressed estimates, so this claim invites "how does it know?" Say "The app reads each gradient off its tangent tool, and they come out as whole numbers." or cut the sentence (it is already scene 2's reserve trim).

## Joins

c06 to c07 matches (lookout, sight line, the power table), with the letter change in finding 1. c07 to c08: the marble run with its lip in mid-air, the coded marble and the dashed violet line with "?" are c08's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown, with nothing answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 26 s, feedback 2 about 23.5 s.

## Site link

`introduction-to-differentiation/lesson04.sa.html` ("Differentiation Rules") carries `we-1` and `we-2`. Correct. Year 12 d01's "rides along" tag matches this video's "comes along for the ride" and "ride along" card.

No speech, source edits or commits were made.
