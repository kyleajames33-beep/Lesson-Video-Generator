# Maths S12 p03 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-p03.md`, "How do arrays and tree diagrams list the outcomes of a two-stage event?" Source SHA256 `1e7f5958dbc54c4716f71ef522e84743ea55cfa93639a34715a052fa6fae3bdb`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (p01: counting by multiplying; p02: favourable over total for equally likely outcomes) as a Mathematics Standard student starting Year 12, once on each route. For Standard 1 this is the only video on arrays, trees and replacement. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A good video. The array is caused ("every cell is where a row meets a column, so every cell is one lunch"), the tree rider lighting its matching array cell one to one is exactly the kind of beat video does best, and "count the lit cells once" is shown on the die and coin board rather than told. The added without-replacement scene (ruling 76) is worth keeping: it serves Standard 1's "involving replacement where applicable" with no branch probabilities, the diagonal crossing out gives the reason (the same marble can't come out twice), and it hands Standard 2 a check for p04. A2's picture deliberately shows unnumbered counters, so lettering them is the student's own step. Recalculated with Python `fractions` and full listings (`work/brief-review-standard-p/verify.py`, `python -I`): 3 × 4 = 12, pie 4/12 = 1/3; die and coin 12 cells, head and even 3/12 = 1/4, tail or less than 3 8/12 = 2/3 (6 + 4 − 2), slip 10/12; lettered marbles with replacement 25 pairs, BB 9, BR 6, RB 6, RR 4; without replacement 20 pairs, BB 6, 3/10 (RR 2/20 = 1/10, not shown); spinners 12, sum 5 in (1, 4), (2, 3), (3, 2), 1/4; counters 25, different colours 12/25; memory-aid case 4/16 = 1/4. All correct.

## Findings

1. **Should fix, scene 5 ("To keep the outcomes equally likely, give every marble its own name").** This reverses the cause: naming a marble does not make anything equally likely. The marbles already are; the names only let us see and count them, while the colour pairs are not. A student may come away thinking labels change the probabilities. Fix. Narration: "The four colour pairs aren't equally likely, but the five marbles are. So give every marble its own name, B one, B two, B three, R one and R two, and count pairs of marbles." Keep the rest of the scene. Feedback 2's "so letter the counters" can then stand. Students should understand that equal likelihood comes from the objects, and lettering is how we count them. Time: about 3 s.

2. **Optional, scenes 1 and 2 (who picks a lunch at random?).** "Today both are picked at random" is the condition every lunch probability depends on, but students choose their own lunch. Say "Say the canteen runs a mystery deal, and picks both at random", and keep the board's tag "picked at random". Then "Because both picks are random, each lunch is equally likely" has a believable cause. About 2 s.

3. **Optional, scene 4 (the meaning of "or").** Before "Light the whole tail row", add: "Or means either one, or both." The lighting already shows it; saying it once prepares p07's "at least one" (Standard 2) and the HSC wording. About 2 s.

## Joins

p02 to p03: scene 1 opens on p02's lunch-deal board exactly. p03's two-route frame (scene 12) matches section 4 of the decisions file item for item: left panel (the bag, "3 B, 2 R", the colour tree with six blue "?", "a probability on each branch?", "Standard 2 next: probability trees") is p04's opening; right panel (the coin, "10 flips: 7 heads, 3 tails", "is this coin unfair?", "Arrays and trees: done", "Standard 1 next: relative frequency") is p05's picture. The spoken lead-in names both paths plainly and works nothing out. Standard 1 viewers lose nothing by skipping p04.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; A1's coded spinners (a school maths fair, no stake or prize) and A2's bag with plain lettered counters give nothing away. Feedback gives the answer, the reason, short working and one crossed slip ("3 + 4 = 7 outcomes"; "2/4"), about 23 s and 28 s.

## Key notes and length

Five useful notes; "Put back: 5 × 5. Not put back: no diagonal, 5 × 4" is a good compact anchor tied to the picture. About 479 s with holds; the findings add about 3 to 7 s, well under 570 s. Answer to root's question 1 in the decisions file: keep the without-replacement scene.

No speech, design edits, builds or commits were made.
