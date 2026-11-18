# Maths S12 t10 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t10.md`, "How does a compass radial survey map a block of land?" Source SHA256 `4698bf874052d997c310e1dcd996c3391d8c7583223953ac1e078c1c900aa37f`.

I reviewed the written design (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t04 true bearings; t08 cosine rule; t09 ½ab sin C; r07 radial survey named; r08 V = Ah; r05 scale drawings) as a Mathematics Standard 2 student. I checked the callbacks against `lessons/math-s12-r07.md` and `r08.md`. No built preview, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

This is a very good design, and it does the brief's job of showing how a radial survey splits land into triangles from one point. Scene 2 builds the paddock from the field book on screen (a protractor turning clockwise from north, a ruler marking the scaled lengths), and the outline appears only when the last corner joins. Scene 3 gives the reason for each angle at O: both bearings are measured from the same north, so the angle is their difference. It gives the across-north angle as two parts (55° + 41°), crosses the long-way-round 264°, and says plainly what the 360° check cannot catch. The g01 board keeps one triangle lit at a time with a running total, rounded only at the end. The rain is a true callback to r08's flat box, not a re-teach. Moving from five corners to four (ruling 61) is handled well: the five-sided sketch returns on the memory card as "any number of corners". I recalculated every value with SymPy 1.14 (`work/brief-review-standard-t2/verify.py`): angles 87°, 86°, 91°, 96° (360°), slip 264°; areas 2970.92, 3351.82, 2879.56, 2536.03, total 11 738.33 m², 1.17 ha; 622.80, AB 107.25, BC 114.80, CD 114.09, DA 109.05, perimeter 445.18; rain 293.46 m³; park 85°, 95°, 90°, 90°, areas 694.35, 776.04, 570, 510, total 2550.38; XYZ 125°, 115°, 120°, areas 4669.17, 4735.46, 5715.77, total 15 120.39, 272.17 m³, slip 272 160 (on the rounded area); memory case 3248. All correct.

## Findings

1. **Should fix, scene 1 ("A radial survey, from the land and rainfall videos").** r08 never mentions radial surveys; its design says "radial surveys are named nowhere here" (MS-37). Only r07 scene 7 names one. A student who rewatches the rainfall video will not find it. Fix: "Remember this? A radial survey, from the land area video." The rainfall link stays in scene 6 ("And the storm from the rainfall video?"), where it is accurate: the same 25 mm.

2. **Should fix, the description and Syllabus section (ruling 61).** Ruling 61 says t10's description quotes only t10's own syllabus point, and that r07 and r08 are named only in narration. The draft description still has "Also the radial survey parts of: ..." with both points quoted. Remove that line from the description. In the Syllabus section, change line 16 to say the ruling 43 points are callbacks, not quoted. Change Codex error-check item 2 to "confirm only `cibe642c8e` is quoted", and close open decision 3. The "Builds on" line can keep "the land area and rainfall videos". Also replace "Next: the choosing-the-rule video (title set by its design)" with t11's title once root settles it (see t11 finding 4).

3. **Optional, scene 1 (the word "compass" is never explained).** The design lists a plain meaning for "compass radial survey", but the narration only asks "how does a compass radial survey map this paddock". Add, after "and its distance": "Because the directions come from a compass as true bearings, it's called a compass radial survey."

## Joins

- **t09 to t10 (ruling 43):** scene 1 opens on t09's final frame exactly (r07's five-sided sketch, the green chip, "from Ratios and rates", the three icons).
- **t10 to t11:** scene 12 matches the decisions file's t10 final frame and t11's Boundary (four cards: roof, river, paddock, survey; the heading "which rule?"; the chips).
- **r08 callback:** "V equals A h, where h is the depth of rain, in metres", the 25 mm storm, "÷ 1000" and "1 m³ = 1000 L" are r08's own words and numbers. The grey chip "r08: rain is a very flat box" uses r08's memory aid.

## Practice and feedback

Both cards show the full worded question and the field book as a table, with a not-to-scale sketch whose rays are unlabelled. Nothing is answer-bearing. A1 asks for four angles, a closure check and four areas, more than 10 s allows, but "Pause here to answer." covers that. Feedbacks give the answers, the across-north reason or the mm-to-m reason, and one crossed slip each (270°; × 18), at about 26 s and 29 s. A farm paddock and a council park surveyed from a sprinkler head are fair, everyday anchors.

## Key notes and length

The five notes are the method in order, each on one line. About 519 s; the fixes add about 4 s.

No speech, design edits, builds or commits were made.
