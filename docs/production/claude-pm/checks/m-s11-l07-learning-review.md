# Maths S11 l07 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-l07.md`, "How do we graph y = kx and use the graph to solve problems?" Source SHA256 `eeafbd5df6c522d13fc73053e1b508c0b8a0a30d1f31af16a83d12e7b10952d6`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (l06: y = kx through the origin, k from one pair; l02: drawing a line by hand with at least three points and a ruler) as a Year 11 Mathematics Standard student with a Stage 5 background. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A good closing video for the strand. "One of them is free" is followed at once by its reason (zero Australian dollars is zero New Zealand dollars), the advice to pick a point "well away from the origin" comes with a reason, and the check point lands on the line while a deliberately wrong one sits off it in red. "Which axis does my number belong to?" is asked before the reverse reading's trap, and the reverse reading is checked with the equation. "Steeper means dearer" is caused, not asserted: the steeper line is the one with more dollars for every gram, shown by step triangles on both lines and a vertical rider reading both prices for the same cup. Readings are set on grid lines where it matters (210 km and 3.5 h in the worked example). Recalculated with SymPy 1.14 (`work/brief-review-s11-l/verify.py`): 1.1 × 300 = 330, 1.1 × 100 = 110, 1.1 × 250 = 275, 220 ÷ 1.1 = 200 and 1.1 × 100 ≠ 130; 3.2 × 3.5 = 11.2, 2.4 × 3.5 = 8.4, difference 2.8, 3.2 × 5 = 16, 2.4 × 5 = 12; 300 ÷ 5 = 60 and 210 ÷ 60 = 3.5; 2.5 × 8 = 20, 2.5 × 6 = 15, 12.5 ÷ 2.5 = 5 and 12.5 × 2.5 = 31.25; 2.8 × 5 = 14, 3.5 × 5 = 17.5, difference 3.5; 29.40 × 40 = 1176. All correct.

## Findings

1. **Should fix, attempt 1 and feedback 1 (m for mass, one video after w).** A1's card and narration use "its mass m in kilograms, with C equals two point five m". Ruling 92 moves l06 to w for mass because m is the gradient; a student who has just learned "w = mass in kg" in l06 meets m again in l07's first practice question, on a graph where the gradient is the thing being read. Fix (root to confirm, since ruling 92 names l06 only): use w here too. Card: "The cost C ($) of a bag of potatoes varies directly with its mass w (kg), with C = 2.5w. (a) Draw the graph for 0 ≤ w ≤ 8. ..."; narration "its mass w in kilograms, with C equals two point five w"; axis label "w (kg)"; model answer, "Numbers used", the site note and the pronunciation note to match. About 0 s.

2. **Optional, scene 5 (the worked example is l06's worked example).** The graph through (5, 300) is the site's d = 60t, which l06 scene 5 solved one video earlier, ending on "three hundred kilometres" in five hours. A student will "find" k = 60 from memory rather than from the rise and run. Either name the callback ("Remember last video's car? Here's its graph. Find k from the graph alone."), or use a new line through (4, 280): k = 280 ÷ 4 = 70, d = 70t, 210 km takes 210 ÷ 70 = 3 hours, both readings on grid lines of the existing window (t every 0.5 h, d every 30 km; the line leaves the top of the window at t ≈ 5.14), with the slip "k = 280" (checked in `suggested.py`).

3. **Optional, description "Next" line.** It names e01 by topic ("Earning money, wages and salaries"). e01's draft title is "Wages, Salaries and Pay Periods | Year 11 Maths Standard"; quote that (without the suffix) so a viewer can find it, as the Year 12 reviews asked of chips and descriptions. Open decision 2 asks for exactly this.

## Joins

l06 to l07: scene 1 opens on l06's final frame exactly, and "one more point?" is answered in scene 2. l07 to e01: scene 11's frame matches e01's scene 1 as written (coded axes 1,100 × 640 px, "hours worked" across in blue, "pay ($)" up in teal, the line through the origin unlabelled, the amber "k dollars per hour" tag, "pay = k × hours", "Next: earning money" and "?"), l07 never says "wage", and e01's first sentences name it. Ruling 92 confirms the join; e01's Boundary and its open decision 1 still say "provisional" and can now drop it (the e01 author's file, not this design).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown and carry "example price" or "example prices". A1 asks the student to draw and read, more than 10 s allows, covered by "Pause here to answer."; its picture is empty axes. A2's lines are supplied (so the task is reading and comparing), labelled only "A" and "B", with no values marked. Each feedback gives the answer, the reason, short working and one crossed slip ("12.50 × 2.5 = 31.25 kg"; "A is steeper because it is cheaper"), about 30 s and 24 s.

## Key notes and length

Five useful notes; the memory card ("Origin + one point = the whole line.") is checked against the start-plus-rate case it does not cover. The "Linear relationships: done" thumbnail strip in scene 11 is a good close. About 468 s with holds, 102 s under the 570 s cap.

No speech, design edits, builds or commits were made.
