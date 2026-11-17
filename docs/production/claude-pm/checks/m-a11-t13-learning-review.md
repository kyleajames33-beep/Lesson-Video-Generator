# Maths A11 t13 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t13.md`, "Why does a ratio of an angle equal the co-ratio of its complement?" Source SHA256 `0571c598d0c033d76c146187ea56aeec4c5010bd155fbecab28a6083808fc3cd`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t03, t04, t11, t12, e08) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 and a numerical scan (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

The brace makes the site's "coincidence" an object: the one-metre side is opposite 30° and adjacent to 60°, "same side, same hypotenuse", and the label sliding round to face the other angle shows it. The triangle proof is a genuine proof (the angle sum gives 90° − θ; side a changes role), and "co means complement" arrives after it. The design says why the circle is needed ("That proof needs a triangle, so it only covers acute angles"), and the 150° and −60° coordinates make the swap checkable. Scene 5 earns its place ("None of these is a special angle"), and scene 6's crossed slip (the supplement for the complement) is exactly the slip students make. Recalculated: sin 30° = cos 60° = ½; (cos 150°, sin 150°) = (−√3/2, ½), (cos(−60°), sin(−60°)) = (½, −√3/2); all six identities simplify to 0; sin 20° sec 70° + tan 35° tan 55° = 2; sin 130° = cos 40° = sin 50° = 0.76604; A1 product 1; A2 sin 65° = sin 115° = cos 25°. All correct.

## Findings

1. **Should fix, scene 3 ("The other four follow by dividing and flipping").** The syllabus asks to prove all six with their exclusions. For angles of any size, four of them are asserted in one sentence and a grey row, and scene 4's exclusions then rest on that division ("Cotangent theta needs sine theta to be non-zero") without the student having seen sin θ land on the bottom. Fix: voice one of the four. "For example, tangent of ninety degrees minus theta is sine of it over cosine of it, which is cosine theta over sine theta. That's cotangent theta, wherever sine theta isn't zero. The other three follow the same way." Row "tan(90° − θ) = sin(90° − θ)/cos(90° − θ) = cos θ/sin θ = cot θ", with "sin θ ≠ 0" in grey. About 170 characters; scene 3 is already 883, so take the design's reserve trim (the spoken coordinates for 150° and −60°, kept on screen) if the take runs long. Students should see where each exclusion in scene 4 comes from.

2. **Optional, open decision 2 (the equal-angle sentence).** "The ray at ninety degrees minus theta makes the same angle with the y-axis as theta's ray makes with the x-axis, just measured the other way" is followable only with the picture. Make the reserve standard: hold both equal arcs, each labelled with its size, for about 2 s before the flight, rather than only if the take runs long.

3. **Optional, "degrees" on both numbers.** Scene 3 "Ninety minus a hundred and fifty" and scene 6 "ninety minus a hundred and thirty" become "ninety degrees minus a hundred and fifty degrees", as the strand's rule asks.

4. **Optional, scene 5 ("a tangent times its own cotangent is one").** Add "because cotangent is one over tangent", so the step recalls t12 rather than a new fact.

## Joins

t12 to t13 matches (see the t12 review). t13 to t14a matches: t03's circle with (x, y) and sides x, y and r, "x² + y² = r²" with "Pythagoras", "x/r = cos θ", "y/r = sin θ", "divide every term by r²?", "Next: the Pythagorean identities" and "?" are t14a's opening frame, and t14a returns to that division in its scene 2.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown, with empty picture slots. Nothing is answer-bearing. A2's sin 115° = cos(−25°) uses the evenness step modelled in scene 6. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 25 s, feedback 2 about 23 s. Magenta for 90° − θ (open decision 1) is root ruling 27's builder check against mistake red.

## Year 12 handoff check

t14a opens on scene 12's circle and x² + y² = r². No Year 12 design assumes the complementary identities directly. Delivered.

## Site link

`trigonometric-identities-and-equations/lesson03.sa.html` matches the design's source. Correct.

No speech, design edits or commits were made.
