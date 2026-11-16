# Maths A11 c05 Revision 1: independent learning review

16 November 2026. Design `lessons/math-a11-c05.md`, "What is the derivative, and how do we write it?" Source SHA256 `28d78ef72fce54a9f3da0792201b0bec228b31b660dbfeb7ca7f3a23baebaf98`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass with should-fix** (0 blockers, 1 should fix, 1 optional).

The paired tracer makes "a new function" visible: one tangent drops one dot, and the dots land on a straight line although the curve bends. Heights stay teal and gradients violet in every row, so "f says how high, f′ says how steep" is backed by the colours, and the four notations evaluate to the same 4 together. The definition's condition is taught with both failures, and the readings "d y by d x" and "f prime" are the ones Year 12 d01 uses. Recalculated: gradients −4, −2, 0, 2, 4, 6 at −2 to 3; f(−3) = 9, f′(−3) = −6; f(2) = 8, f′(2) = 12; |x − 2| has one-sided gradients −1 and 1 at 2; ∛x has unbounded gradient at 0. All correct.

## Findings

1. **Should fix, scene 4 (the slide sentence implies the slide has a kink and a vertical drop, and a "sheer vertical drop" is not the same failure as ∛x).** Narration: "On the slide, that's a sharp kink, or a sheer vertical drop. Everywhere else, the slide is smooth and slanted, so its derivative exists." Two problems:
   - "Everywhere else" tells students the slide has a kink and a drop somewhere. The plate (c04's brief) has neither; they appear only in coded insets beside it, so students will search the slide for them.
   - A sheer vertical drop drawn as a vertical segment is not the graph of a function at all: one x has many heights, which fails w07's vertical line test. ∛x is a function whose graph is vertical at one point only. Showing the segment as the "cliff" teaches the wrong picture of a vertical tangent.

   Fix. Narration: "On a slide, that would be a sharp kink, or a spot where the chute turns straight down for an instant. This slide has neither, so its derivative exists all the way down." Visual: draw the "vertical drop" inset as a chute that steepens to vertical at one point and then eases out (the ∛x shape, turned to fall), not as a vertical segment. Also make sure the slide's sidecar profile rounds the join between the flat start platform and the steep drop; the c04 plate brief asks for both, and a sharp join would put a real kink on the plate. Root ruling 3 keeps "No corner, no cliff"; this fix keeps the word and makes the cliff a vertical tangent, as ruled.

2. **Optional, open decision 2 (∛x).** Add the grey chip "∛8 = 2, ∛(−8) = −2" on the right panel. Students met cube roots in w01, but this graph is new to them, and the chip costs no narration.

## Joins

c04 to c05 matches (the slide, the riding dot, "steepness here: ?"). c05 to c06: the balcony and balloon plate, the dashed path, f(t) = 3 + 4t − 5t² with an amber secant, "(f(t + h) − f(t))/h" and "f′(t) = ?" are c06's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown, with nothing answer-bearing (A2's three small graphs have no tangents). Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 28 s; feedback 2 about 29.5 s, close to the limit, so measure it on the voiced take.

## Site link

`introduction-to-differentiation/lesson03.sa.html` ("The Derivative as the Gradient of a Tangent") carries the definition and notation. Correct.

No speech, source edits or commits were made.
