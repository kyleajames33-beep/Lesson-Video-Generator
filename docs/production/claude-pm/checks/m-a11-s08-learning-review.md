# Maths A11 s08 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s08.md`, "When are two events independent, and how do we prove it?" Source SHA256 `885772a4730d29f0eae297b738a432edcaed2176a908b130523d8fe75914fb91`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (s05: mutually exclusive events; s07: P(A|B) = P(A ∩ B)/P(B)) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`, with the two proofs checked symbolically in SymPy); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional). A good design; the one should-fix is a single sentence.

The die makes independence visible before any formula: restricting to {5, 6} leaves A with the same share, so "Knowing B told us nothing new about A", and the share bars fill to the same length while s07's 1/6 against 1/5 fill differently. "Even and bigger than four sound linked, but they're independent. You have to check." directly targets the intuition. The proofs are short, each line is one move with its reason spoken ("Multiply both sides by P of B"; "the P of A on top cancels"), the condition P(A), P(B) > 0 is said once, and "That makes the product a test" explains why the converse matters. The data test refuses "close", and scene 6's "If you know A happened, you know for certain that B didn't" is the right reason mutually exclusive events are dependent. The alarms are a strong practical payoff with the assumption ("separate devices") stated. Recalculated: 1/6 = ½ × ⅓, P(A|B) = ½, P(B|A) = ⅓; survey 0.4 × 0.3 = 0.12 ≠ 0.1, P(G|F) = 0.25; alarms 0.005, 0.995, 1.85; A1 0.18 = 0.3 × 0.6; A2 0.1 ≠ 0.12, P(P|L) = 0.3, table 28, 13, 47, 75. All correct.

## Findings

1. **Should fix, scene 7 (the slip uses numbers that were never said).** The scene gives only the failure probabilities (0.05 and 0.1), then says "Adding zero point nine five and zero point nine is the slip." A student has not met 0.95 or 0.9 and will ask where they came from, at the end of the worked example. Fix: "Adding the chances that each one goes off, zero point nine five and zero point nine, is the **slip**. That's more than one, because the two alarms can both go off." Visual: on "each one goes off" grey rows "P(phone goes off) = 1 − 0.05 = 0.95" and "P(clock goes off) = 1 − 0.1 = 0.9" write above the red slip. Students should see the slip as adding two overlapping events, with its numbers traced.

2. **Optional, scene 1 (plant the alarms early).** The alarms carry the payoff but appear only at about 300 s, after two proof boards. One sentence at the end of the hook would give the proofs a destination: "By the end, we'll use this to see why a backup alarm makes sleeping in so unlikely." (chip "later: two alarms").

3. **Optional, scenes 3 and 4 (holds after each proof).** Two proofs run back to back (about 42 s and 41 s). A 1 s hold on each framed conclusion ("= P(B)" and "P(A | B) = P(A): independent") lets the result land before the next board.

## Open decisions answered

- (1) The alarms' independence: the narration ("they work independently of each other") and the tag "separate devices" are enough. Adding "model: independent" to the givens card is harmless but not needed.
- (2) The seeded illustration: accepted by root ruling 42. It is silent and labelled "simulated illustration"; no learning issue.

## Joins

s07 to s08 matches: the red die, the strip, both braces and the chips open s08, and the first line answers s07's question. s08 to s09: the mandarin bag on the produce scale reading "1.13 kg", chips "count: 9 mandarins", "mass: 1.13 kg", "one bag, two numbers", "Next: random variables", "?" are s09's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown (A2's card adds "Justify your answer"); both pictures are empty. A1 needs s05's addition rule backwards, then the product test (scene 4); A2 is scene 5's test on a new table. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 25 s, feedback 2 about 28 s.

## Pace

About 409 s of speech before the notes, about 498 s in all, with seven teaching scenes of 31 to 53 s. Two proofs back to back is the heaviest listening in the strand, but each line is one move on the board as it is said, so it is not rushed. No split is needed (root ruling 11). Finding 1 adds about 40 characters.

## Year 12 handoff check

Year 12 s02 and s03 assume the product of independent probabilities for repeated rolls; scenes 3 and 4 prove it and scene 7 uses it. Delivered.

## Site link

`probability-and-data/lesson04.sa.html` matches the outline; the lottery example and S11-P06 are not used. Correct.

No speech, source edits or commits were made.
