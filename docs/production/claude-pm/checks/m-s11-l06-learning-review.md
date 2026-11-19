# Maths S11 l06 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-l06.md`, "What makes direct variation special, and how does one pair of values give k?" Source SHA256 `18ef2739503c567c0eb48c3503c57abf426c72ec67872f0a01204c3f32e44b59`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (l03: a model is a start plus a rate; l01: gradient from a graph) as a Year 11 Mathematics Standard student with a Stage 5 background who has just watched l01 to l05. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: blocker** (1 blocker, 1 should fix, 3 optional).

The teaching is good. "Put nothing on the scale, and you pay nothing" gives the origin its cause before the word, "varies directly" has its plain meaning ("always the same number times another") before y = kx, and the orchard with the same $4 a kilogram plus a $12 entry fee isolates the one thing that matters. The two ratio badges (one fixed at 4, one sliding 10, 7, 6, 5.5) and the doubling arrows make "not every straight line is direct variation" visible. The table scene answers the site's trap that equal differences are not enough. The blocker is a binding notation ruling that has not been applied. Recalculated with SymPy 1.14 (`work/brief-review-s11-l/verify.py`): 4 × 3.5 = 14, 4 × 7 = 28, 4 × 2 = 8, 4 × 4 = 16, 4 × 6 = 24; 12 + 4m at 2, 4, 6, 8 gives 20, 28, 36, 44 with ratios 10, 7, 6, 5.5; 9/2 = 18/4 = 27/6 = 4.5; 13/4 = 3.25; 180 ÷ 3 = 60, 60 × 5 = 300, 240 ÷ 60 = 4; 3 ÷ 180 = 1/60; 30 ÷ 2.5 = 12, 12 × 4.2 = 50.4, 45 ÷ 12 = 3.75; 6/1 = 12/2 = 24/4 = 6. All correct.

## Findings

1. **Blocker, throughout (ruling 92 not applied: w for mass).** Root ruling 92 says "l06 uses w for mass with the chip 'w = mass in kg' (m is the gradient in y = mx + c)". The design still uses m: "C equals four m" (scene 2), "C equals twelve plus four m" (scene 3), the variable key and grey chip "here m = mass (kg)", the model cards, the ratio badge "C ÷ m = 4", A1's card ("mass m (kg)", "C = 12m"), feedback 1 ("C equals twelve m"), and the pronunciations note. This is also a learning problem, not only a ruling: in scene 2 the narration says "k is ... also the gradient of the line" while the letter m, which the student has used for the gradient in five videos, now means mass on the same screen. Fix before voicing: replace m with w for mass everywhere (narration, screen text, A1 card and model answer, "Numbers used", pronunciations: "C equals four w", "C equals twelve w"), with the chip "w = mass in kg" at its first use in scene 2; the badge reads "C ÷ w = 4". Ruling 91 (never k for kilograms) is unaffected. About 0 s.

2. **Should fix, scene 4 (A2's Table B is shown and judged before the attempt).** The small teal table in scene 4, "x: 0, 2, 4 / y: 5, 9, 13", with "13 ÷ 4 = 3.25" turning red, is exactly Table B in attempt 2. The student sees it ruled out about two minutes before being asked about it, so A2 tests memory, not the ratio check. Fix: change scene 4's teal table to "x: 0, 2, 4 / y: 3, 12, 21" (y = 4.5x + 3). It has the same "+9" differences as the blue direct-variation table beside it, which makes "equal differences alone aren't enough" sharper, and its ratios are 12 ÷ 2 = 6 and 21 ÷ 4 = 5.25 (the second turns red), checked in `suggested.py`. Keep A2 as written. No narration change (the narration gives no teal numbers).

3. **Optional, scene 3 and key note 3 ("at every point").** "cost divided by mass is always four, at every point" and "k = y ÷ x at any point" are not true at the origin (0 ÷ 0). The memory-aid check knows this; the learner copy does not. Say "at every point except the origin", and write the note "k = y ÷ x at any point (not (0, 0))". About 1 s.

4. **Optional, scene 2 (link to y = mx + c).** One phrase would connect the new form to the strand: after "it's also the gradient of the line", add "It's y equals m x plus c, with m equal to k and no c at all." This explains in the student's existing language why the line goes through the origin. About 4 s.

5. **Optional, scenes 3 and 4 (example tags).** The orchard sign ("$12 entry + $4 per kg") and the gym card ("$50 joining fee + $15 a week") are invented prices without the grey "example" tag the strand uses elsewhere (ruling 5 pattern). Add it to both.

Open decision 1 is settled by ruling 92 (w). Open decision 2: keep the "hours and pay at a flat rate" card; it drops silently, is true, and sets up the e01 handoff without teaching wages.

## Joins

l05 to l06: scene 1 opens on l05's final frame exactly, and the apples lifting off the tray to show "0.00 kg $0.00" answers the frame's chip "0 kg → $0?" with a picture. l06 to l07: scene 11's frame (the suitcase, "A$1 → NZ$1.10" with "example rate", empty A$ and NZ$ axes with only the origin ringed, "one more point?") is l07's opening frame and shows no second point.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown. A1 asks three parts, covered by "Pause here to answer.", and carries "example price"; A2's picture is the two tables, which are the question's data. Each feedback gives the answer, the reason, short working and one crossed slip ("k = 2.5 ÷ 30"; "B: goes up evenly, so direct"), about 27 s and 21 s.

## Key notes and length

The five notes and the memory card ("Direct variation: double one, the other doubles.", worded to match Year 12 a12's recall strip) are useful. About 465 s with holds, 105 s under the 570 s cap; the fixes add about 5 s.

No speech, design edits, builds or commits were made.
