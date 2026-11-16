# Maths A11 e04 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-e04.md`, "How do logarithms solve aˣ = b?" Source SHA256 `7b2c6a78d7fbda91eca5bb0d2ed287f8b653650401e6a3bd2219d6fe8637c66e`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (e03, e01) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

The ribbon cut piece by piece makes 6 < n < 7 visible, and testing the tempting n = 50 as 2⁵⁰ (about a thousand trillion) refutes division better than a warning. The level line makes "exactly one solution" and "none for b ≤ 0" caused by the graph. Scene 5's two ladders explain why log_½ 0.01 equals log₂ 100. Root ruling 5 (lesson05 link, engineers named but not drawn) is applied. Recalculated: 100/2ⁿ for n = 0 to 7; log₂ 100 = 6.6439; 2^6.644 = 100.01; 2⁵⁰ = 1.13 × 10¹⁵; log₂ 7 = 2.807; ln 5 = 1.609; log_0.5 0.01 = 6.644; A1 log₃ 20 = 2.727 (3^2.727 = 20.004); A2 x = 3 and log₂ 40 = 5.322. All correct.

## Findings

1. **Should fix, scene 6 and feedback 2 (the irrationality reason does not cover fraction powers).** Narration: "No power of two, even a fraction power, can make a hundred, because a hundred has a factor of five, and powers of two never do." A fraction power such as 2^(1/2) is not a whole number, so "has no factor of five" means nothing for it; the reason only works after raising to a whole power. A careful student will ask exactly that. Feedback 2 repeats the gap ("Forty has a factor of five, so no power of two makes it"). This answers open decision 2: keep the reason, but make it correct. Fix, scene 6 narration: "Here's why it can't be a fraction. If two to the power p over q made a hundred, then two to the p would equal a hundred to the q. But a hundred to the q has fives in it, and two to the p never does. So it's irrational." Reason card: "if 2^(p/q) = 100, then 2ᵖ = 100^q", "100^q has a factor 5; 2ᵖ never does". Feedback 2: "Forty has a factor of five, so no fraction power of two can make it, by the same reason. That answer is irrational." Students should be able to give the reason, not just the tag.

2. **Should fix, attempt 1 picture (answer-bearing).** Visual: "y = 3ˣ (x 0 to 3.5) with a level line at 20 and no readout." The question asks "Between which two whole numbers must it lie?" With x ticks on the axis, the meeting point visibly sits between 2 and 3, so part of the answer is on screen during the countdown. Fix: show y = 3ˣ without the level line (or without x tick labels), and let feedback 1 draw the level line and drop as planned.

3. **Optional, scene 6 ("The same goes for e to the one point seven, and the natural log of twelve").** These are irrational, but not by the factor-of-five reason just given, and "the same goes" implies it. Say: "e to the one point seven and the natural log of twelve are irrational too, though proving that is beyond this course." The "irrational, rounded" tags stay.

## Joins

e03 to e04 matches (ribbon whole, scissors, "1 m = 100 cm", "each cut: half is left", "cuts to reach 1 cm? 2ⁿ = 100", "100 teams: also 2ˣ = 100", "Next: solving aˣ = b"). e04 to e05: the slide rule with the slide's 1 over the body's 2, the cursor at the slide's 3 meeting the body's 6, "2 × 3 = 6, by adding lengths?", "length to 2 + length to 3 = length to 6" and "Next: the log laws" are e05's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown; A1's picture needs finding 2's change. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 26 s, feedback 2 about 22 s (about 26 s with finding 1's longer reason).

## Year 12 handoff check

d03 and d19 solve eᵏᵗ = b with ln; scene 4 shows eˣ = 5 ⇒ x = ln 5. Delivered.

## Site link

`exponential-and-logarithmic-functions/lesson05.sa.html`, accepted by root ruling 5. Correct.

No speech, source edits or commits were made.
