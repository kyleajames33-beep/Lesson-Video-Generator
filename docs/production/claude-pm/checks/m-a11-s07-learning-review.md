# Maths A11 s07 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s07.md`, "How does knowing B happened change the probability of A?" Source SHA256 `7c38f1f368d1fae274887b1dc3244ab2be3509e6dde4d2eb1a33ed4969f2a249`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (s05: Venn diagrams of events, the addition rule; s06: arrays and trees) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

The dice opening is a real question (root ruling 41): a double was a sixth, the total is 8, and only five cells survive, one of them a double. "Knowing something changed the probability" is shown before it is named, and the narration then explains why conditional probability narrows the sample space ("Once we know B happened, B becomes the whole sample space, and we only ask what share of B is also A"). The counting form comes first, and "divide the top and the bottom by thirty-six ... That doesn't change the fraction" is a genuine derivation of P(A ∩ B)/P(B), with P(B) ≠ 0 said plainly. The denominator swap (the same 30 over 120 and over 38) is the right moment for P(A|B) against P(B|A), and "Whatever comes after the bar decides the denominator" is a reconstructable aid. All four representations appear. Recalculated: total 8 has 5 cells, 1 double, 1/5, (1/36)/(5/36) = 1/5; 0.2/0.5 = 0.4; table 38/200 = 0.19, 30/120 = 0.25, 30/38 = 15/19 ≈ 0.79, 8/80 = 0.1, 120/200 = 0.6; tree 0.15 + 0.04 = 0.19, 0.15/0.19 = 15/19; A1 0.3, 2/3, table 70, 135, 205; A2 0.25, 0.625, 0.5. All correct.

## Findings

1. **Should fix, scene 3 (the Venn restriction is squeezed in last, after the given-decimals example).** Scene 3 (719 characters, about 54 s, the longest in the video) runs: the ÷ 36 step, the formula, the given-decimals example, the P(B) ≠ 0 condition, then "On a Venn diagram, B becomes the new rectangle" as its final sentence, with the Venn diagram appearing at the right of a full-width board. The Venn restriction is the picture of the formula just derived (and a syllabus representation), so it belongs straight after the formula, not after an unrelated example. This answers open decision 2. Fix: reorder to (a) the ÷ 36 step and the formula, (b) "On a Venn diagram, B becomes the new rectangle, and A intersect B is the part of it that's A." with the restrict animation, (c) "That works with probabilities we're given, too ..." and the 0.2/0.5 row, (d) the P(B) ≠ 0 sentence. Move the cues with their sentences. Keep the `we-1` sentence spoken: A2 needs the formula used on given decimals. Students should see the formula and its picture as one idea before applying it.

2. **Should fix, scene 6 ("zero point six and zero point four" come from nowhere).** The tree's first branches are "peak and off-peak, zero point six and zero point four", but these were never said; the table gave 120 and 80 out of 200. A student will ask where 0.6 came from, just when the point is that the tree holds "the same numbers". Fix: "The first branches are peak and off-peak, a hundred and twenty and eighty out of two hundred, so zero point six and zero point four." Visual: on "out of two hundred" the table's 120 and 80 ring and slide to the branches. Students should see every branch probability traced to the table.

3. **Optional, scene 4 (role colours swap between scenes 4 and 5).** "late" is blue as A in scene 4 and the roles swap in scene 5. This is reasonable, because the box colour shows the given, but the builder should check on the sheet that the "30" stays violet and only the boxed total changes colour, so the swap reads as "new given", not "new numbers".

## Open decisions answered

- (1) The anchor at about 135 s: accepted by root ruling 41; the dice opening is a real question with a visible answer, so the pace before the app is fine.
- (2) Scene 3's density: see finding 1. Reorder rather than silence `we-1`.

## Joins

s06 to s07 matches: the 6 × 6 array, the covered dice and the chips open s07; "Here's the covered roll" picks up s06's last question. s07 to s08: the red die, the strip 1 to 6, the braces "A = even = {2, 4, 6}" and "B = bigger than 4 = {5, 6}", and chips "P(A) = 1/2", "told: B happened", "P(A | B) = ?", "Next: independent events", "?" are s08's opening frame, and s08's first line restates the question.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown; A1's picture is an empty two-way table, A2's an empty Venn diagram. A1 is the same method as scenes 4 and 5 in a new context; A2 needs s05's addition rule run backwards, then the formula on given decimals (scene 3), both modelled. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 26 s, feedback 2 about 25 s.

## Pace

About 386 s of speech before the notes, about 475 s in all. The six teaching scenes run 36 to 54 s each, and scene 3 is the only dense one (finding 1 reorders it without adding words). Not rushed; no split needed (root ruling 11). Finding 2 adds about 50 characters.

## Year 12 handoff check

No Year 12 design in s01 to s06 assumes conditional probability from s07; s08 uses P(A|B) = P(A ∩ B)/P(B) and the restriction picture, both delivered.

## Site link

`probability-and-data/lesson03.sa.html` matches the outline; card 05 (S11-P01) is not used. Correct.

No speech, source edits or commits were made.
