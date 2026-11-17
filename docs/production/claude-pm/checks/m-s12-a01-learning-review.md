# Maths S12 a01 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a01.md`, "How do two lines on a graph solve a pair of simultaneous equations?" Source SHA256 `23afae2c5a162d661c570abf92cce8e0289f009164afa010ddf374acb5107de2`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 Standard l01, l02, f01: y = mx + c, a straight line from a table, substituting to check a point) as a Mathematics Standard student starting Year 12, including a Standard 1 student who never sees an algebraic method. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

This is a good opening video. The shared table row (n = 6, $420 in both tables) makes "intersection" feel natural before the word arrives, "simultaneous" gets its plain meaning ("true at the same time"), and scene 4 gives the actual reason the crossing solves both (every point on a line fits its equation; only the crossing is on both lines). The Standard 1 route is complete without algebra (root rulings 2, 9 and 13): tables, a ruled graph, an app, and a substitution check that is Year 11 skill, not a solving method. The worked example's stray point (1, 1), on one line only, shows why "check both" matters. Recalculated with SymPy 1.14 (`work/brief-review-standard-a1/verify.py`, `python -I`): 90 + 55n = 70n at n = 6, C = 420; both tables at n = 0 to 10; n = 4 gives 310 and 280; n = 10 gives 640 and 700 (A saves $60); `we-1` (2, 3) with tables −1, 1, 3 and 5, 3, 1; y = 2 − x and y = 3 − x have no solution; A1 tables 2, 3, 4, 5 and 8, 6, 4, 2, crossing (2, 4); A2 150 + 90h = 120h at h = 5, $600, and at 3 hours $420 against $360; the handoff pair meets at (5/4, 7/2), not shown. All correct.

## Findings

1. **Should fix, scene 3 (why six lessons, and the unread readout).** The narration says B "climbs faster" and "catches up", but never says by how much, so a Standard student cannot see why the lines meet at six rather than anywhere else. Meanwhile the visual surprise rests on a readout, "difference A − B: $", that no sentence mentions and that goes negative after n = 6 ("−30", "−60"), which a less confident student reads as a minus price. Fix. Narration, after "So B's line catches up": "Each lesson, B's price catches up by fifteen dollars, the gap between seventy and fifty-five. A started ninety dollars ahead, and six fifteens make ninety, so the lines meet at six lessons." Visual: relabel the readout "A dearer by $…" (90, 60, 30, 0), switching to "B dearer by $…" after the crossing, so it never shows a negative number; on "fifteen dollars" a tag "+$15 a lesson for B" on the rider. Students should understand that the crossing sits where B's faster climb has used up A's head start. Time: about 8 s against a 13 s margin; take the named reserve trims ("To the right, A's line is lower." and "No pair can make both true.") if the voiced take runs long.

2. **Should fix, scene 13 (the Standard 1 chip names a video that will not be found).** The chip says "Standard 1: your next video is 'Equations from words'", but a03's YouTube title is "Simultaneous Equations from Worded Problems". A Standard 1 viewer searching the playlist for the chip's words will not find it. Fix: make the chip quote a03's published title exactly ("Standard 1: next, 'Simultaneous Equations from Worded Problems'"), at the existing 30 px. Keep the chip itself (root ruling 13).

3. **Optional, scene 1 (open decision 3, and ruling 5).** "You've got your learner licence" assumes; "Say you've got your learner licence" invites, with no other change. Also, $55 a lesson is low for NSW driving schools in 2026 (single lessons are commonly $70 to $95; packages run cheaper). Either label both quote cards "example prices", or use A: $90 fee + $65 a lesson, B: $80 a lesson. The alternative keeps the crossing at 6 lessons (now $480) and the $60 saving at 10 lessons (A $740, B $800); tables 90, 220, 350, 480, 610, 740 and 0, 160, 320, 480, 640, 800; n = 4 gives $350 and $320; the cost axis would run to $850. Checked in `work/brief-review-standard-a1/suggested.py`.

4. **Optional, scene 6 ("Standard calculators don't draw graphs").** By ear "Standard calculators" can mean "ordinary calculators". Say: "But in the HSC exam, you can't use a graphing calculator."

## Joins

Cold open is correct (first Year 12 Standard video). a01 to a02a matches: a01's final frame (y = 2x + 1 and y = 6 − 2x crossing at (1.25, 3.5) between grid lines, zoom inset, "x ≈ 1.2? 1.3?", "exact answer, no drawing?") is a02a's opening frame, and a02a's first line picks up the same pair. a01 to a03 (Standard 1): a03 opens on a02b's frame, which is a self-contained worded problem, so a Standard 1 viewer loses nothing.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown. A1's picture is empty tables and axes; A2's graph shows both lines with the crossing unmarked, which is the item's normal "graph given" form. A1 asks for four actions (table, draw, read, check), more than can be done in 10 s, but "Pause here to answer." covers that. Each feedback gives the answer, the reason, short working and one crossed slip (feedbacks about 22 s and 29 s). Driving lessons and removalists are real, fair everyday anchors.

## Key notes and length

The five notes are useful and short, and note 4 keeps the memory aid's condition (lines that cross once). About 557 s with holds, 13 s under the 570 s cap; finding 1 uses most of that margin, so measure on the voiced take.

No speech, design edits, builds or commits were made.
