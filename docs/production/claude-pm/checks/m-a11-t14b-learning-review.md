# Maths A11 t14b Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t14b.md`, "How do we prove further trig identities?" Source SHA256 `7b20f2328513dc98e1554890a1330780519b3b1d19e97412e25f958b6fe3402f`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t12, t14a, w02) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 and a numerical scan (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 3 optional).

The hook is honest and visual: y = sin x and y = x agree to the pixel near 0 and split as the window widens, while the true pair stays together. No small-angle result is named, so it does not distract (this answers open decision 2). The proofs are paced one line at a time with each step's reason, as the brief requires: scene 3 writes five rows, each on its own cue with a grey reason ("tan = sin/cos, cot = cos/sin", "common denominator", "Pythagorean identity", "split", "sec = 1/cos, cosec = 1/sin"); scene 4 writes five rows the same way ("squares of squares", "difference of two squares", "Pythagorean identity", "cos² θ = 1 − sin² θ", "collect"); feedback 1 writes four rows with reasons. The target lights green only when the last row matches, which shows what "reaching the other side" means. The restriction in scene 5 is caused by the cancel ("We can only cancel it where it isn't zero"), and scene 6 makes "prove: every angle, disprove: one angle" concrete. Recalculated: sin 1 = 0.84147; the gap x − sin x at 0.15 is 0.00056; all five identities reduce to 0 (SymPy leaves the first as tan + cot − 2/sin 2t; numerical difference below 5 × 10⁻¹⁶ at five angles); sin 45° + cos 45° = √2 = 1.4142; cos⁻¹ 0.5 = 60°. All correct.

## Findings

1. **Should fix, scenes 1 and 6 (root ruling 25).** Ruling 25 keeps the graphing-app surprise but shows it on the existing phone plate `ma12-phone-v1.png`, so a painted object is on screen from the first frame. The design still uses a free-standing coded `ScreenApp` (its open decision 1 offered the mixing-desk badge instead; the ruling supersedes that). Fix: put the app on the phone in scene 1 (and the counterexample app in scene 6), matching t14a's changed final frame (t14a finding 1). Root's layout question is in the summary: the zoom-out needs a wide graph, and the phone plate is portrait.

2. **Should fix, scene 2 (why "one side only" is a rule a student should believe).** "Writing the identity down first and changing both sides at once assumes what you're trying to prove" names the rule but gives no reason a student can feel; many will think "but both sides end up equal, so it worked". Fix: add a short number example, shown as a small board that is then crossed. "Here's why that's risky. Start from minus two equals two, which is false. Square both sides, and you get four equals four, which is true. Reaching a true line doesn't prove the line you started from." About 170 characters. Students should be able to explain why a both-sides chain is not a proof.

3. **Should fix, scene 12 (the clock's cosine is unexplained, and it reverses two earlier conventions).** "the tip's height above the centre is the hand's length times cosine of six m degrees". In t10 a point's height was sine, and t04 measured angles on this same clock plate from the three o'clock line. A student who remembers either will ask "why cosine?". Fix: "On this clock, measure the hand's angle from twelve, clockwise, the way it turns. Measured from the upright line, the height is the side next to the angle, so it's the hand's length times cosine of six m degrees." Show the right-angled triangle (hand, upright line, level line) with "adjacent = height". This frame opens t15a, so t15a's scene 1 keeps the same sentence (t15a finding 1).

4. **Optional, scene 1 ("Sine of one").** Say "Sine of one radian is about zero point eight four"; the strand's rule is that every angle carries its unit.

5. **Optional, the decisions bullet's window.** "Anchor" says −0.25 ≤ x ≤ 0.25; scene 1 and author note (a) say ±0.15. At ±0.25 the gap is 0.0026, about 3.6 px at the stated scale, over the 2 px limit. Correct the decisions line to ±0.15.

6. **Optional, scene 6's readout units.** The graph runs 0 to 2π while the readout says "sin 45° + cos 45°". Label the ringed point "x = π/4 (45°)".

## Joins

t14a to t14b matches in content, subject to finding 1 in both designs. t14b to t15a matches: the clock with the hand at ten past, the arc "6m°", "height = L cos(6m°)", the level line at half the hand's length, "cos(6m°) = 0.5", the calculator strip "cos⁻¹(0.5) = 60° → m = 10", the ghost hand at fifty past with "?", "Next: solving trig equations" and "?" are t15a's opening frame. Root ruling 24 accepts the clock as a deliberate callback.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is an empty proof ladder ("LHS =" and a greyed "RHS"); A2's slot is empty. Nothing is answer-bearing. Each feedback gives the answer (A1 the full chain), the key reason, short working and one crossed classic mistake. Feedback 1 about 30 s (at the limit; the named trim "Combined" is ready), feedback 2 about 18 s.

## Year 12 handoff check

Year 12 calculus proofs (for example the derivative of tan x) recall "write it in sin and cos"; scene 3 teaches it in that form. t16 uses t14a's rearrangements, not the proof layout. Delivered.

## Site link

`trigonometric-identities-and-equations/lesson02.sa.html` matches the design's source (with lesson10 for `we-1` and drill 2). Correct.

No speech, design edits or commits were made.
