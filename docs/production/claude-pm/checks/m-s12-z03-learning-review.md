# Maths S12 z03 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-z03.md`, "How do z-scores compare results from different tests?" Source SHA256 `0a1597bbc33ade4ea83a94f1574683695c3f0ae8b04b4db657c9576259051283`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (z02: the z-score, its sign and formula, the σ-ruler; Year 11 σ as spread) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

This is a very good design. Scene 2 makes "different scales" visible before any formula: "seven looks smaller, but each English step is only five marks, so seven marks there is more steps." The two dots then slide onto one z-line, which is exactly why z-scores let us compare different tests. The sentence frame teaches what "justify in context" asks for; the lower mark that wins (72 against 85) is a real surprise; the swim teaches "lower is better" before attempt 2 relies on it ("negative is good news"); and Emma's spread-out class explains the ranking rather than just stating it. Recalculated (`work/brief-review-standard-z/verify.py`, `python -I`, 0 failures): Ava 1 and 1.4; test A 1.5, test B 1; swim −1.5; Sarah 1.00, Tom 1.17, Emma 0.42, so Tom, Sarah, Emma; A1 1.6 and 1.5; A2 −1.6 and 1.4; number lines 40 to 88 by 8, 55 to 85 by 5, 33 to 39 by 1. All correct.

## Findings

1. **Should fix, scenes 4 and 6 (the sentence frame leads straight into attempt 2's slip).** Scene 4's frame ends "because the z-score ______ is higher than ______". A student who copies it for A2 writes "long jump, because 1.4 is higher than −1.6", which is the crossed slip. Scene 6 says the rule flips for times but never shows the sentence that replaces the frame, and feedback 2's framed answer ("1.6 standard deviations faster than the mean, against 1.4 above") appears only after the attempt. Fix: on "the better result" in scene 6, the scene 4 frame returns small and its last clause rewrites, in violet, to "because it is ___ standard deviations better than the mean (faster), against ___"; filled for the swim in one line, and repeated in key note 5 as "Conclude with both z-scores, saying which way is better." Narration (scene 6, after "better result"): "So in your sentence, say how many standard deviations better, faster here, not just which number is bigger." Students should be able to write a correct conclusion when the two measures point different ways. About 5 s.

2. **Optional, scene 3 ("relative to her class").** The decisions give it a plain meaning ("compared with the others who sat the same test"), but the narration never says it, and it is the phrase every conclusion uses. Say once in scene 3: "Relative to her class, which means compared with the others who sat the same test, Ava did better in English."

3. **Optional, feedback 2 (the long jump's 0.35 arrives unexplained).** "The long jump is zero point three five over zero point two five" skips the subtraction the sprint line said aloud. Say "four point eight five minus four point five is zero point three five, over zero point two five, one point four".

## Joins

z02 to z03 matches section 2 of the decisions file (Ava's two cards, both classes' means and standard deviations, "which result is better?", no z-score), and scene 1 states all four givens aloud. z03 to z04 matches: the loaf on the scale with a blank display, the bell with marks at 695 to 725, the 705 to 715 band outlined but not filled, the three chips, no percentage. The switch back to the bakery is announced ("Next, back to the bakery"), so the change of context is not a surprise.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, and neither picture shows an answer (blank score cards with marks only; a stopwatch with a blank face and a tape measure). Feedbacks give both z-scores, the conclusion and one crossed classic slip in about 27 s and 29 s. School reports, a swimming carnival and an athletics carnival are everyday contexts; names appear on plain cards only and no people are drawn.

## Key notes and length

The five notes are short and useful; finding 1 changes note 5's wording only. About 488 s with holds; the fixes add about 10 s, so about 498 s, under 570 s.

No speech, design edits, builds or commits were made.
