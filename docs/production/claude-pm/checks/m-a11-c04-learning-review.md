# Maths A11 c04 Revision 1: independent learning review

16 November 2026. Design `lessons/math-a11-c04.md`, "How do shrinking secants find the gradient of a curve?" Source SHA256 `ec8fb292c8fcdbc33e6dc29580cd2b68d927b8a1df95f341ae3671673a962ff6`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 1 optional).

The map zoom gives a reason before a method: zoom in on a smooth bend and it straightens, so a curve has a gradient at a point; zoom in on the junction and it stays a corner, which is why both sides must be checked. h is defined as a step before it is used, the h = 0.1 row is worked by hand, and "every gradient is exactly four plus h" is observed here and proved in c06. The right-hand values above 4 and the left-hand below 4 make "both sides agree" concrete before |x| shows them disagreeing. Recalculated: 5, 4.5, 4.1, 4.01 and 3, 3.5, 3.9, 3.99; x³ at 3 gives 27.009001 and 26.991001; double-precision x² at 2 with h = 10⁻¹⁴ gives about 4.09; A1 7, 3.31, 3.0301, 2.9701 (slip −9.99); A2 34.481 and 29.679 around the true 32. All correct.

## Findings

1. **Optional, open decision 2 (spreadsheet decimals).** Keep the exact x³ values (27.027009001 and 27.009001) at 44 px. They are spoken as "about", they show the spreadsheet's honesty, and a 1,500 px panel holds them; an ellipsis would hide the very digits that show the approach to 27.

## Joins

c03 to c04 matches (phone map, bend, T-junction, magnifier "?"). c04 to c05: the water slide side-on, the dot with its short violet tangent and "steepness here: ?" are c05's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown, with nothing answer-bearing. A1's four h values and A2's "explain why" demand stay on the cards. Each feedback gives the answer, the key reason (A2: the curve steepens, so the right secant is too steep and the left too shallow), short working and one crossed classic mistake. Feedback 1 about 26 s; feedback 2 about 29.5 s, close to the limit, so measure it on the voiced take.

## Site link

`introduction-to-differentiation/lesson13.sa.html` ("Exploring Gradients with Digital Tools") carries `we-1` to `we-3`. Correct.

No speech, source edits or commits were made.
