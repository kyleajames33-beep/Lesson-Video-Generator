# Maths A11 e02 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-e02.md`, "What makes e the special base for exponentials?" Source SHA256 `8669067c892da221f3972dff11802f3c9ef2f5ef69041b9bc9fb6b33bfd9994e`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (e01, c04, c05, c07) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 1 optional).

The cart's hook works: one whole kilogram gained in the hour, yet the "right now" readout starts at 0.69, so the tangent is needed and the average is visibly not the start rate. The slider closing in on 2.718 makes e feel found. The "gradient ÷ height" readout holding at 0.693 is the same ratio d02 measures, and the memory aid uses d01's exact sentence ("the gradient always equals the height"). Recalculated: ln 2 = 0.693, ln 2.5 = 0.916, ln 2.7 = 0.993, ln 2.72 = 1.0006, ln 2.8 = 1.030, ln 3 = 1.099, ln 4 = 1.386; 2ˣ gradients 0.693, 1.386, 2.773 at x = 0, 1, 2; e² = 7.389, e⁻¹ = 0.368; A1 1.386, 5.545, 0.693; A2 5, 7.39, y = x + 1. All correct.

## Findings

1. **Should fix, scene 3 (a false general statement).** Narration: "Like every exponential, e to the x passes through zero, one, stays above the x-axis, and grows to the right." Half the exponentials e01 taught fall to the right ((½)ˣ, 2⁻ˣ), and k aˣ need not pass through (0, 1). Students who have just finished e01 will either notice the contradiction or relearn a wrong rule. Fix: "Like two to the x and three to the x, e to the x passes through zero, one, stays above the x-axis, and rises to the right, because its base is bigger than one."

2. **Should fix, scene 4 (the stretch argument skips the slide).** Narration: "So from x equals one on, the curve is the start of the curve stretched up by two, and stretching up by two doubles every slope." "The start of the curve" has no clear referent, and the step that sliding a piece sideways keeps its slopes is missing, so the student hears a stretch but sees a piece moving right as well. This answers open decision 1: keep the stretch, but say both moves. Fix: "So the piece of curve from one to two is the piece from zero to one, slid one step right and stretched up by two. Sliding doesn't change a slope, and stretching up by two doubles every slope." Visual unchanged (it already copies, slides and stretches). Students should understand why the gradient is a fixed multiple of the height.

3. **Should fix, scene 5 (why k is the gradient at (0, 1)).** Narration: "And k is just the gradient at zero, one, so it depends only on the base." The reason (a⁰ = 1, so k a⁰ = k) is first said in feedback 1, after students have needed it in the countdown. Fix: "At x equals zero, k times a to the zero is just k. So k is the gradient at zero, one, and it depends only on the base." Add the grey row "x = 0: k × a⁰ = k" on "base".

4. **Optional, scene 6 (show x at height 5).** e03 scene 5 says "Remember the point on e to the x where the height was five? It was at x equals about one point six one." The rider here stops at height 5, but the design's readouts are height, gradient and ratio, so x ≈ 1.61 is never on screen or spoken. Add a small x readout "x ≈ 1.61" (blue) at that stop, or take e03 finding 3's alternative. Either one makes the e03 callback honest.

## Joins

e01 to e02 matches (cart plate, "gold: 1 kg", "G = 2ᵗ", "growing how fast right now? ?", 2ᵗ through (0, 1), "Next: the gradient at (0, 1)"). e02 to e03: the noticeboard, 8-team draw, trophy, "8 teams → 3 rounds", "64 teams → ? rounds", "2^? = 64" and "Next: running 2ˣ backwards" are e03's opening frame. The design's handoff summary line mentions 100 teams, but the narration does not; e03 raises 100 itself, so the frame is consistent.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture marks (0, 1) on 4ˣ with no tangents; A2's shows eˣ with no points; nothing is answer-bearing. A2's tangent equation relies on c08 (tangent at a point), which is in the entry route. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 25 s, feedback 2 about 25 s.

## Year 12 handoff check

d01 assumes `ciac4383bd` and says "on this graph, the gradient always equals the height"; d02 measures "gradient ÷ height" for 2ˣ as 0.693. Scenes 4 to 7 deliver both, and the forward reference "Year 12 finds a formula for k" leaves ln a to d02. Delivered. Root ruling 7 (respell "Euler" as "Oiler") matches open decision 2.

## Site link

`exponential-and-logarithmic-functions/lesson03.sa.html` matches the outline. Correct.

No speech, source edits or commits were made.
