# Maths A11 t11 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t11.md`, "What are sec, cosec and cot in a right-angled triangle?" Source SHA256 `44a712bd9f41d188aaa7766d688ec778cb23cd72d2b53a05ba8b22c35dd33836`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t01, t02, w21) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 and a numerical scan (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 2 optional).

This is a good design. The flip is caused before it is named: t10's three cards turn over in the frame students have just seen, so "hypotenuse over opposite" is a move, not a new fact. The names arrive after the flip, each as "one over" an old ratio, and "each pair has exactly one co" is heard before the slip. The flying fox is a real length (cable = 3 cosec θ, landing = 3 cot θ) with worked numbers, 6 m and 3√3 ≈ 5.2 m. The nine exact values are t01's triangles flipped cell by cell beside the old rows. Fixing the hypotenuse at 1 makes "secant is one over the adjacent side" literally true, so the limit readouts mean what the narration says; "a zero on top gives zero, a zero on the bottom is the problem" lands, and the cot 90° = 0 against tan 90° contrast is shown, not just stated. The sec² notation in A2 was taught in t01 ("sin² 30° means (sin 30°)²"), so it is fair. Recalculated: sec, cosec, cot at 30°: 2√3/3, 2, √3; at 45°: √2, √2, 1; at 60°: 2, 2√3/3, √3/3; 3 cot 30° = 5.196; limits at 1°: 1.00015, 57.299, 57.290; at 0.1°: 572.96 (cot 572.957); at 89°: 57.299, 1.00015, 0.017455; at 89.9°: sec 572.96, cot 0.0017453; A1 opposite 24; A2 4; 4 sec 60° = 8. All correct.

## Findings

1. **Optional, scene 1 ("three times hypotenuse over opposite").** The cable formula is stated without the one-line reason. Add "because multiplying the opposite side by hypotenuse over opposite gives the hypotenuse". Most students will infer it; low priority.

2. **Optional, scene 4 (cot 60° is written but not said).** The visual fills "cot 60° = √3/3" with the 30° column, but the narration never says it, and it is the one value in the table with a rationalised form not modelled aloud for cot. Say "and cotangent sixty degrees is one over root three, which is root three over three", or give the cell its own cue. Not needed for either attempt.

## Joins

t10 to t11 matches: t10's final frame (the tan graph near its asymptote, the shrinking triangle with "adjacent → 0", the three cards, "flip them?", "Next: secant, cosecant and cotangent", "?") is t11's opening, and its first line picks up "tangent racing up near ninety degrees". t11 to t12 matches: the floodlight 4 m up, the beam at 60°, "beam = 4 sec θ", "θ = 60°: 4 × 2 = 8 m", the dial to 120°, "no right-angled triangle", "sec 120° = ?", "Next: any angle" and "?" are t12's opening. Moving t03's point (−3, 4) to t12's scene 2 (open decision 2) is right: the handoff holds one object and one question.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture labels the adjacent side and hypotenuse and leaves the opposite blank; A2's shows t01's triangles with sides only (a method reminder, no ratios). Nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 29 s (named for measuring), feedback 2 about 22 s.

## Year 12 handoff check

t12 extends these to any angle and recalls "flip the side ratio" and the 90° results; t13 and t14a use the side-ratio forms. Year 12 d05 notes sec, cosec and cot as not taught there. Delivered. Spoken names (open decision 1) are settled by root ruling 26.

## Site link

`trigonometric-identities-and-equations/lesson01.sa.html` matches the design's source. Correct.

No speech, design edits or commits were made.
