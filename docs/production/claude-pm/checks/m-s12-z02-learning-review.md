# Maths S12 z02 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-z02.md`, "What does a z-score tell us, and how do we calculate it?" Source SHA256 `162e3d1cedaa15183f75178a1aa228b4a31ef9416b2a6e8cee9145b79b9ff37b`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (z01: the bell, μ places the centre, σ sets the width; Year 11 σ by calculator; substitution) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

A good video. The order is right: the σ-ruler counts steps (1.6) before the word "z-score", the sign comes from walking down (−1.8), and the formula arrives as "distance from the mean, divided by one standard deviation" with arrows to x − μ and σ. "Negative doesn't mean bad. It just means below." is said where it is needed. Scene 6 shows mean 0 and standard deviation 1 happen (the middle loaf lands on 0, the 4 g bracket shrinks to 1, "σx = 1" on the calculator) rather than asserting it, and gives the reason ("each step of four grams has become a step of one"). Recalculated (`work/brief-review-standard-z/verify.py`, `python -I`, 0 failures): 8/5 = 1.6, −9/5 = −1.8, 0; (88 − 80)/4 = 2; −7/6 = −1.1667 so −1.17; five loaves mean 710, population σ 4, z −1.5, −0.5, 0, 0.5, 1.5, mean 0, population variance 1; 65 + (−1.5)(10) = 50; A1 1.5 and −1.25; A2 706; handoff only 1 and 1.4. All correct.

## Findings

1. **Should fix, scenes 1 and 2 (why the standard deviation is the right ruler).** Scene 1 says "Eight grams more than usual could be a lot, or hardly anything" and scene 2 answers with "The standard deviation is a ruler we can measure with", but no sentence says why the spread decides whether 8 g is a lot. That is the whole reason a z-score exists, and z03 depends on it. Fix. Narration, after "or hardly anything": "It depends how much the loaves usually vary. If they usually varied by twenty grams, eight would be nothing special. If they varied by one gram, eight would be huge. So we measure the gap with the loaves' own spread." Visual: on "twenty grams" a faint, flat teal ghost bell (σ = 20) under the 8 g bracket; on "one gram" a faint narrow spike (σ = 1) with 718 far outside it; both fade on "own spread", leaving the σ = 5 bell. Students should be able to say that a z-score measures a gap in units of the usual variation. About 11 s.

2. **Should fix, attempt 2 (b) and feedback 2 (the condition scene 6 sets).** Scene 6 rightly says mean 0 and standard deviation 1 happen "when you use a set's own mean and standard deviation". A2 (b) then asks about "every loaf baked today", with z-scores worked from the bakery's 710 g and 5 g, which are not today's own values. A careful student who listened will hesitate. Fix the card: "(b) Every loaf's mass is turned into a z-score using this mean and standard deviation. State the mean and the standard deviation of these z-scores." Say it the same way in the narration, and in feedback: "And because the z-scores use the loaves' own mean and standard deviation, they have a mean of zero and a standard deviation of one." Students should connect the answer to the condition, not to a memorised pair.

3. **Optional, scene 6 (one z-score worked aloud).** The five z-scores are read out as a list. Say one first: "Seven hundred and four is six grams below, and six over four is minus one point five." About 4 s; it keeps the formula in use at the moment the list appears.

4. **Optional, scene 2 ("zero point six of a step").** By ear, "three is zero point six of a step" is a jump. Say "three grams out of a five-gram step is three fifths, zero point six of a step".

## Joins

z01 to z02 matches section 2 of the decisions file exactly (the 718 g loaf on the scale, μ at 710, marks at 705 and 715, the blue dot at 718, both chips, no z-score), and scene 1's first line picks up z01's question. z02 to z03 matches: Ava's two plain report cards with marks, means and standard deviations, "which result is better?", no z-score. Names appear only on the cards; no people are drawn.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, and neither picture carries an answer (a pizza box and clock outline; the loaf plate with no reading). Feedbacks give the answer, the reason and one crossed slip in about 27 s and 24 s; both slips are classic ("(32 − 27) ÷ 4 = 1.25", "mean 710, standard deviation 5"). Pizza delivery and a bakery are everyday anchors.

## Key notes and length

The five notes are short and complete, and note 3 keeps "negative only means below". About 488 s with holds; finding 1 adds about 11 s and finding 3 about 4 s, so about 503 s, under 570 s.

No speech, design edits, builds or commits were made.
