# Maths A11 s10 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s10.md`, "How do frequency tables turn data into probability estimates?" Source SHA256 `ab8880af3f64c472dbcaa05ec1b7124cc07e9d037eeb97ab41f9f9ab914c7db6`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (s04: P(A) for equally likely outcomes; s09: discrete random variables) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

The spinner nobody measured is exactly why relative frequency estimates probability: "the only evidence is this list". Each column has its reason: the frequencies add to 40 because every result is in exactly one row, the relative frequencies add to 1 for the same reason ("That's not luck"), and the running total needs increasing order because it counts "that value, or below". The estimate is handled honestly: "≈" is written and explained, the fair die's 13 sixes in 60 rolls are "ordinary variation", and the long-run simulation "tends to sit closer" and "never guarantees an exact answer", as Year 12 s01 requires. The supposition about sector 2 comes after the estimate (root ruling 44). A board game, no stake (root ruling 8). Recalculated: 10, 18, 12 (40); 0.25, 0.45, 0.30; 10, 28, 40; 0.25, 0.70, 1.00; 2 or less 0.7 = 28 spins; 13/60 ≈ 0.217, 1/6 ≈ 0.167; A1 0.55, 0.275, 0.125, 0.05, cumulative 22, 33, 38, 40 and 0.55, 0.825, 0.95, 1, at least one cracked 0.45; A2 0.65, 130. All correct.

## Findings

1. **Should fix, scene 3 (the spoken cell does not match the cell on screen).** The narration says "each of those cells holds a formula, the frequency over the total, like B two divided by B five", but the visual selects C3 and shows "=B3/B$5" in the formula bar. A student checking the screen against the voice sees B3, not B2, and a "$" nobody mentions. Fix: select C2 on that sentence so the formula bar shows "=B2/B$5", and add a grey tag "$: keeps B5 fixed when the formula is copied down" (or show "=B2/B5" for this first cell and leave absolute references out). Students should be able to read the formula bar exactly as it is spoken.

2. **Optional, scene 6 (link the simulated curve to the real 40 spins).** The green dot "40 spins: 0.45" sits on a simulated curve. If the first 40 points of the plotted run are the real list (10, 18, 12), say so: "Here are our forty spins, and then a simulation that keeps on spinning." Otherwise the dot suggests the simulation reproduced the real data. Either way the label "simulated" stays.

3. **Optional, feedback 1 (the cumulative columns are shown but not mentioned).** The question asked for all four columns; the feedback reads only the first relative frequency and the two end checks. That is right for a 27 s feedback (root's brief-answer rule), but add the tag "full table on screen: pause to check" so students know the columns are there to compare.

## Open decisions answered

- (1) "Suppose sector two really is half": does not suggest the 40 spins "should" have given 0.5, because "So our forty spins weren't wrong. They were a small sample, still settling" follows. Keep (root ruling 44).
- (2) Unlabelled sector angles: right; labelling them would give away what the data estimate.

## Joins

s09 to s10 matches: the spinner, the raw list and the four chips open s10, and the first line picks up "what can that messy list tell us". s10 to s11: the finished five-column spreadsheet with three blue bars at 10, 18 and 12 rising into an empty axis, and chips "most common value?", "middle result?", "Next: histograms and polygons", "?" are s11's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown; A1's picture is an empty table, A2's a tally strip of the givens. A1 practises scenes 2 to 4 and the complement for "at least one"; A2 practises scenes 5 and 6. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 27 s, feedback 2 about 19 s.

## Pace

About 374 s of speech before the notes, about 467 s in all. Not rushed.

## Year 12 handoff check

Year 12 s01 lists "relative frequency as an estimate" and opens with estimates that steady "without being forced to the theory"; Year 12 s04 builds on "each trial lands in one place". Scene 3 gives the one-row reason for adding to 1, scene 5 writes "≈" and "estimate, not exact", and scene 6 says "tends to sit closer" and "never guarantee". Delivered.

## Site link

`probability-and-data/lesson15.sa.html` matches the outline. Correct.

No speech, source edits or commits were made.
