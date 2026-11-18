# Maths S12 p04 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-p04.md`, "How do probability trees and P(A and B) = P(A) × P(B) handle multistage events?" Source SHA256 `856468c656d80c9ed89a9ddaea4e4b8f8296dc06d1c05854622f189a7524bbae`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (p03: arrays, tree diagrams, lettered pairs with and without replacement; p02: the complement) as a Mathematics Standard 2 student starting Year 12 (Standard 2 only). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A very good lesson. Multiplying along a path is explained, not just stated: "Blue comes first on three fifths of draws. And on three fifths of those times, blue comes second", with the cell bar shading 15 of 25 and then 9 of those 15, and p03's 9 cells as the check. Branches add to 1 because "one of those two must happen, and only one can"; paths add because they "can't both happen"; "at least one" is "everything except no blues". Without replacement is told as the bag changing, with the counter dropping to "4 left" and the labels rewriting, and no P(B|A) or "conditional" anywhere (ruling 66). The bus and train state the "doesn't affect" assumption aloud. Recalculated with Python `fractions` (`work/brief-review-standard-p/verify.py`, `python -I`), including the chargers by listing all 90 ordered pairs: 9/25, 6/25, 6/25, 4/25, sum 1; 13/25; 21/25; slip 6/5; cell bar 15 then 9; without replacement 3/10, 3/10, 3/10, 1/10, sum 1, one of each 3/5, matching p03's 6 of 20; commute 0.72, 0.08, 0.18, 0.02, 0.28; three coins 1/8 and 3/8; A1 0.21, 0.42, 0.91; A2 1/15, 7/15, 8/15, slip 9/100; memory-aid case 0.02. All correct.

## Findings

1. **Should fix, scenes 1 and 3 (A and B are never named).** The hook and scene 3 say "P of A and B equals P of A times P of B", but no sentence says what A and B are; the path is "blue, then blue". A Standard student copies a formula with two unexplained letters, and in scene 6 has to guess again. Fix. Scene 3, before "So the probability of A and B": "Call blue on the first draw A, and blue on the second draw B." Visual: on the equation strip "P(A and B) = P(A) × P(B)", small grey tags under A "blue 1st" and under B "blue 2nd", and the two branch labels slide up under them. Scene 6, on "We'll assume": the same tags read "A: bus on time", "B: train on time". Students should understand that A and B are the events at the two stages of one path. Time: about 3 s.

2. **Optional, scene 5 ("two quarters and two quarters").** By ear "two quarters" is easy to mishear as a single half. Say "two out of four, and two out of four" for the first pair and "three out of four, and one out of four" for the second; the labels stay 2/4, 2/4, 3/4, 1/4.

3. **Optional, scene 13 ("Next, we use real results to estimate a probability. That's next.").** Drop "Next," from the first sentence so "next" is said once.

## Joins

p03 to p04: scene 1 opens on p03's two-route frame and grows the left panel (the bag, "3 B, 2 R", the colour tree with six "?"), and "Last time, we named every marble" picks it up. p04 to p05: scene 13 is p03's right panel scaled evenly by 1.3 (decisions file, section 5), with "Probability trees: done" and "Next: relative frequency", so p05 has one opening for both courses (the t11 pattern, ruling 64). No value is worked out.

## Practice and feedback

Both cards keep the full worded question, including the "do not affect each other" assumption in A1 and "without replacement" in A2, on screen through the countdown; the pictures are a blank tree outline and a box of F and W tokens. Feedback gives the answer, the reason, short working and one crossed slip ("0.21": two orders; "3/10 × 3/10": one charger has gone), about 26 s each. Free throws and phone chargers are fair, stake-free anchors.

## Key notes and length

Five useful notes; "Not put back: change the second branches (count what's left)" says the without-replacement idea in words a student can use. About 478 s with holds; finding 1 adds about 3 s, well under 570 s. The new commuter-train plate (root's question 2) is useful but not essential; the commute teaches the same with the bus plate and a coded train label if root prefers fewer plates.

No speech, design edits, builds or commits were made.
