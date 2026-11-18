# Maths S12 z04 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-z04.md`, "How does the 68-95-99.7 rule describe normal data?" Source SHA256 `0c3808fca5cab1a6bf5cfdf3e86f7fd9fa275d1276b37b24f3101882cf309536`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (z02: z-scores, x = μ + zσ; z01: the symmetric bell and the reaction taps) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

Much of this works well. "About" comes with a reason ("the rule is rounded, and real data never fit the bell perfectly"); the shrinking gains (+27, then +4.7) are shown and explained by thin tails; the taps' 80 of 100 is a fair test of "only for bell-shaped data"; and the 27% ring lifting out and snapping in half explains "both sides together" before A2 tests it. The worked example and A1 each target a real slip (one side given for two; one σ used for 95%). Recalculated (`work/brief-review-standard-z/verify.py`, `python -I`, 0 failures): bands 705 to 715, 700 to 720, 695 to 725; gains 27 and 4.7; pieces 34, 13.5, 2.35, 0.15, inner six 99.7, all eight 100; taps population σ 80.678, band 240.32 to 401.68, 80 inside (94 inside ±2σ, not shown); exact areas 0.682 689, 0.954 500, 0.997 300 (author note only); 52 to 92, 82; A1 124 to 140 and 128 to 136; A2 ticks 22 to 34. All correct. The taps' 400 ms class is only 1.7 ms inside the band's edge, but "about eighty-one" gives 402, so a student checking it agrees.

## Findings

1. **Should fix, scenes 2 and 3 (where 68, 95 and 99.7 come from).** The percentages are asserted ("For any normal distribution, that band holds about sixty-eight percent"), and the readout "counts up" to a number fixed in advance, so the picture shows no evidence. A Standard student is left asking "says who?" and "why the same for every normal distribution?" Fix, using a count the student can watch. Reuse z01's imagined loaves (1,000 of them, z01 finding 3; seeded, unrounded masses, so no loaf sits on a boundary) as a dot strip or thin columns under the bell. As the band fills, the loaves inside light and a counter runs: "inside: 683 of 1,000", then "about 68%"; at two and three each side "954 of 1,000" and "997 of 1,000". Narration (scene 2, replacing "For any normal distribution, that band holds about sixty-eight percent of the data"): "Count the loaves inside. Six hundred and eighty-three of the thousand, about sixty-eight percent, roughly two thirds. That share of the loaves is the share of the area under the bell between the lines. And every normal curve is the same bell, just slid and stretched, so in z-scores the share is the same for any normal distribution." Scene 3 keeps "it holds about ninety-five percent" with the counter beside it. This also makes "Empirical means it comes from looking at real data" true on screen. Students should be able to say that 68% is the share of data (the area) within one standard deviation, and why it does not depend on μ or σ. About 15 s; if z01's 1,000 are not adopted, seed a fresh 1,000 here.

2. **Optional, scene 3 (label "+27" as both sides).** The first sliver label is "+27" while the sliver is drawn on both sides. Label it "+27 (both sides)" so scene 5's halving and A2's slip ("27% between 30 and 32") are already prepared.

3. **Optional, scene 5 (the thin pieces at 1,400 px).** The 2.35% and 0.15% regions are slivers; place those four labels outside the curve with short leader lines at 36 px or more, and keep the sum strip at 36 px or more, so the labelled bell is readable on a phone.

## Joins

z03 to z04 matches section 2 of the decisions file (the 705 to 715 band outlined, not filled; three chips; no percentage), and scene 1 repeats the question exactly. z04 to z05 matches: the loaf with the coded "label: 700 g" tag, the red 700 line, the tail left of 700 filled with no percentage, "what's the chance a loaf is under its 700 g label?", no mean or standard deviation chips (z05 scene 1 says both values aloud).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's picture is the cricket ball and an empty speed readout, A2's is an empty bell with blank tick and region boxes. A2 asks for a drawing and eight labels, more than 10 s allows, but "Pause here to answer." covers that. Feedbacks give the answer, the reason and one crossed classic slip in about 27 s and 30 s. A fast bowler and a café's espresso are everyday anchors; no people are drawn.

## Key notes and length

The five notes are short and correct, and note 3 keeps the condition (bell-shaped data only). About 492 s with holds; finding 1 adds about 15 s, so about 507 s, under 570 s.

No speech, design edits, builds or commits were made.
