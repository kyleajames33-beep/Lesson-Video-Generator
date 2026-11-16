# Maths A11 c06 Revision 1: independent learning review

16 November 2026. Design `lessons/math-a11-c06.md`, "How does first principles turn a secant into a derivative?" Source SHA256 `f75759f87dcc42ced8da2e535f1b0fe315c8751deac2e6da8d432d55c98937e9`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass with should-fix** (0 blockers, 2 should fix, 1 optional).

"Limit" is given in plain words before its notation, and "we're allowed to cancel because h isn't zero" is heard at the moment it matters. Linking 2x + h to c04's "4 + h" makes the algebra feel like the table they already trust. The balloon's zero rate at the top, with a flat tangent and the sprite hanging still, ties f′ = 0 to something physical. The line's derivative is explained (its tangent is itself), and A2's "the whole of four minus two x" catches the subtraction slip. Recalculated: (x + h)² gives 2x + h; the balloon's difference 4h − 10th − 5h², quotient 4 − 10t − 5h, f′(t) = 4 − 10t with 4, 0 and −6 at t = 0, 0.4 and 1, top 3.8 m; 3x + 1 gives 3; 3x² − 5x gives 6x − 5; 7 gives 0; 4 − 2x gives −2. All correct.

## Findings

1. **Should fix, scene 4 (the balloon's expansion is skipped).** Narration: "Swap t for t plus h, and subtract f of t. The threes cancel, and so do the four t and the minus five t squared. What's left is four h, minus ten t h, minus five h squared." The board also jumps from the bracketed difference straight to "= 4h − 10th − 5h²". Expanding −5(t + h)² with a negative coefficient is the hardest step in the video, and it is the step A1 tests (3(x + h)²). A student who has just seen (x + h)² expanded will ask where −10th came from and what happened to the minus sign. Fix: add a board row after the bracketed difference, "= 3 + 4t + 4h − 5t² − 10th − 5h² − 3 − 4t + 5t²", with the hand tag "−5(t + h)² = −5t² − 10th − 5h²". Add narration after "subtract f of t.": "Minus five, times t plus h all squared, expands to minus five t squared, minus ten t h, minus five h squared." (about 7 s; scene 2's reserve trim pays for it).

2. **Should fix, scene 11 (the handoff chip uses h for a height).** The chip reads "distance ≈ 3.57√h km", with h in blue. This video defines h as the step and colours it blue, and its own author note keeps the balloon's height away from the letter h. Ending on h as a height, in the step's colour, starts c07's letter clash (see `m-a11-c07-learning-review.md`, finding 1). Fix: write the chip with the letter c07 adopts (recommended: "distance ≈ 3.57√x km, x = height in m"), with x in blue as an input, and match the scene 11 narration ("depends on the square root of your height" can stay as is).

3. **Optional, open decision 1.** Keep "rising at" and "falling at" with the sign; "velocity" waits for c18.

## Joins

c05 to c06 matches (balcony, balloon, the secant chip and "f′(t) = ?"). c06 to c07: the lookout, the dashed sight line, "farther per metre climbed? ?" and the table "x² → 2x ✓, x³ → ?, x⁴ → ?, √x → ?" are c07's opening frame, with finding 2's letter change carried into c07.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown, with nothing answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 29.7 s, close to the limit, so measure it on the voiced take; feedback 2 about 27 s.

## Site link

`introduction-to-differentiation/lesson03.sa.html` carries `we-1` (x²) and `we-2` (3x + 1). Correct.

No speech, source edits or commits were made.
