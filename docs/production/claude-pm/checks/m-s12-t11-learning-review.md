# Maths S12 t11 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t11.md`, "Which rule fits a practical problem with a non-right-angled triangle?" Source SHA256 `8f38f11c5a93bc5182554a3ca6a4c036b12d5f0bb48bcf4adc5c79a6fe29c092`.

I reviewed the written design (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t03 elevation; t04 and t05 bearings, the bearing back, north lines at every point; t06 to t09 the sine, cosine and area rules) as a Mathematics Standard 2 student. I checked the final frame against t05's right panel (`lessons/math-s12-t05.md` scene 12; `checks/root-decisions-maths-s12-t01-t05.md` section 3). No built preview, plate inspection, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 4 should fix, 1 optional).

This is a good closing video. The three questions are said in words and in order before any rule. "You can't see a matched pair in a sentence" gives a real reason to draw first. The ferry carries one result into the next: the cosine-rule side makes a pair for the sine rule. "A triangle can only hold one obtuse angle" settles the acute answer without the ambiguous case. The fold from top view to side view makes the right angle visible at the moment it becomes useful ("First question, yes"). A2 deliberately mirrors worked example 2, which suits a mixed-problem video. I recalculated every value with SymPy 1.14 (`work/brief-review-standard-t2/verify.py`): 222°, 94°, 1640.7976, 40.5068 km, 49.7684°, 091.77° (092°T), the wrong-angle side 37.86; 50°, 55°, 75°, 424.0243 m, 59.5927 m, slip 396.5338; 240°, 70°, 13.3864, 3.6587 km, slip 5.1763; 65°, 40°, 75°, 532.3702 m, 37.2269 m, slip 750.6231; memory case 3.94 km. All correct.

## Findings

1. **Should fix, scenes 2, 5 and 7, and key note 3 (the three questions miss the step the tower needs).** In worked example 2, the givens are 500 m with angles of 50° and 55° beside it. That is no right angle, no matched pair, and not two sides or three sides. A student following the three gates strictly fails all three, yet the narration simply says "The third angle is seventy-five degrees. Now there's a matched pair." A2 has the same structure. t06 taught "third angle first", but the chooser never names it. Fix:
   - Gate 2 becomes "matched pair? (two angles known: the third angle makes one) → sine rule".
   - In scene 2, say: "Is there a matched pair, a side and the angle opposite it, both known? If two angles are known, the third angle often makes one. Then use the sine rule."
   - In scene 5, before "The third angle", say: "No pair yet, but two angles are known, so find the third."
   - Key note 3 becomes "Matched pair (or two angles: find the third): sine rule. Two sides and angle between, or SSS: cosine."

   About 6 s. Students should be able to run the three questions on any exam triangle without getting stuck.

2. **Should fix, scenes 4 and 5, and key note 5 (two bearing steps are given without their reason).** (a) Scene 4: "The angle at P is turned from the first leg, so add it to zero four two degrees." Key note 5 then says "first bearing ± angle", but nothing tells a student when to add and when to subtract. Say: "Seen from P, R is further round clockwise than Q, so add the angle to zero four two degrees." On "clockwise", show the sweep from PQ to PR. Key note 5 becomes "new bearing = first bearing + angle (turned clockwise) or − angle (anticlockwise)". (b) Scene 5: "From Q, due west is two seventy" does not say why due west matters. Say: "From Q, P is due west, the bearing back, two hundred and seventy degrees." This links it to scene 3's "way back" and to the hand tag "use the bearing back". About 6 s.

3. **Should fix, scene 12 (the final frame differs from t05's right panel).** t05's decisions section 3 says that t11's final frame repeats t05's right panel at full width, so b01 opens on one picture for both courses. Ruling 59 says the same. Differences:
   - (a) t05's board has no title; t11 titles it "This week".
   - (b) t05 has five empty ruled rows; t11 has seven rows.
   - (c) t05's board shows **no values**; t11 "pairs each day's top temperature with ice creams sold", which implies data that b01 has not agreed.
   - (d) t05's chip reads "hotter day, more ice creams?"; t11's reads "do hotter days sell more?".
   - (e) t05 briefs the kiosk plate `ms12-beach-kiosk-v1.png`, so t11's "kiosk plate if t05 briefs one (otherwise the board alone)" should name the plate and place it as t05 does (about 640 px wide at the left, the board beside it).
   - (f) t05's grey chip reads "Right-angled triangles: done" and its label "Standard 1 next: bivariate data"; t11 has "Trigonometry: done" and "Next: bivariate data".

   Fix: copy (a) to (e) from t05 exactly, with headings only and no values. Keep t11's own grey chip and label (f), because "Standard 1 next" and "Right-angled triangles" would be wrong for a Standard 2 viewer. Record (f) as the only intended difference, so the b01 designer can confirm both frames (ruling 59). The narration ("Each day, it records the top temperature and the number of ice creams sold") fits a board with headings only.

4. **Should fix, title (ruling 37).** "Which Trig Rule? Bearings, Elevation and Non-Right Triangles | Year 12 Maths Standard" is 85 characters, over the 80 limit, and the design gives no shorter alternative. Suggested: "Choosing the Trig Rule: Bearings and Elevation | Year 12 Maths Standard" (71 characters). t10's "Next:" line then quotes it.

5. **Optional, open decision 2 (ferry plate).** No t01 to t05 design briefs a ferry plate. t05's attempt 2 ferry is worded only, and `checks/root-decisions-maths-s12-t01-t05.md` has no ferry. t11's brief for `ms12-harbour-ferry-v1.png` stands; close the decision. The plate is a 200 px badge, so a coded marker would also do if root prefers no new plate.

## Joins

- **t10 to t11:** scene 1 opens on t10's final frame exactly (the four cards, "which rule?", the chips).
- **t11 to b01:** see finding 3 (provisional, ruling 59). With the fix, the frame is t05's right panel at full width, with only the course-specific chip and label changed.

## Practice and feedback

Both cards are worded without a diagram, as the design intends (drawing it is the skill), and the full question with its parts stays on screen through the 10 s countdown. Nothing is answer-bearing. A1 asks students to "show that" angle BPQ is 70°, which gives a checkpoint without giving away the method. Feedbacks draw the chart, give the answer, the reason and one crossed slip (110°; the wrong pairing), at about 29 s and 30 s. A harbour ferry, a phone tower, a survey drone and a mast are fair everyday anchors.

## Key notes and length

The notes are the decision path plus the bearing habits; findings 1 and 2 revise notes 3 and 5. About 530 s; findings 1 and 2 add about 12 s, so about 542 s, under 570 s. If the take runs long, use the named reserve trims.

No speech, design edits, builds or commits were made.
