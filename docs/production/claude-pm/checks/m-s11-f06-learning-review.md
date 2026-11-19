# Maths S11 f06 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-f06.md`, "How long until BAC returns to zero, and why is any BAC estimate only rough?" Source SHA256 `1d5b8fb6945fa355ccc80e34c410d52778f45b1ec54c36511a0f1017fe1ec3fb`.

Written design reviewed by tracing it from its stated entry knowledge (f05's BAC estimate and the zero rule; f04a's decimal hours into minutes) as a Year 11 Mathematics Standard student. Checked against rulings 3, 4, 89 and 95 and the pack `pre-design/maths-standard/math-s11-f06.md`. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 4 should fix, 1 optional).

Finishing f05's falling line makes "0.015 off each hour" visible before the division, and the rounding-up rule comes with its reason ("waiting a little less than the model's time isn't enough"). The two-part limitation cards (what the model assumes, why that fails) and the weak-against-strong answer in scene 6 teach the exam skill the syllabus names, and the NSW quotation is used plainly with its source. "Only time does" is accepted by ruling 95. Recalculated with SymPy 1.14 (17 checks for f06): 0.032 − 0.015 = 0.017, then 0.002; 0.0321691 ÷ 0.015 ≈ 2.1446 h, 8.7 min, rounded up to 9; the rounded 0.032 gives exactly 2 h 8 min; 0.09 ÷ 0.015 = 6 h, 0.0075 at 5:30 am; A1 3.8 h = 3 h 48 min; A2 30/510 ≈ 0.059, 3.92 h, 55.3 min rounded up to 56 (also 56 from the rounded 0.059); the memory-aid case 2 h 40 min. All correct.

## Findings

1. **Should fix, footer placement (ruling 95).** The footer runs through scenes 2 to 11 and the key notes; root ruled first formula frame and answer frames only. Fix: footer on scene 1 (f05's frame, unchanged for the join), scene 2 (the first formula frame), scene 3's framed answer, scene 4's "about 6 am" result, and feedback 1 and feedback 2 (from their framed answers). Not on scenes 5 to 7, the attempt cards or the key notes (note 5 and the memory card cover it; scene 5 carries the NSW quotation). Update the header lines that say "scenes 2 to 11".

2. **Should fix, title (ruling 95).** Use "BAC: Time to Zero and Limitations | Year 11 Maths Standard" (58 characters) and update "(Title length: ...)". f05's "Next:" line and f07's "Builds on:" line quote the new title (see those reviews).

3. **Should fix, scene 4 (who must be at zero).** "If that driver starts an early shift at five thirty, the model still has them above zero." The scene never says the driver is on L or P plates; 0.0075 is legal for a full licence, so a student could leave thinking every driver must be at zero, or that the morning case does not matter to full-licence drivers. Replacement: "If that driver is on P plates and starts an early shift at five thirty, the model still has them above **zero**, so they can't drive." Visual: the alarm-clock chip reads "P-plater's early shift: 5:30 am"; the green line keeps its label "L and P plates: 0". About 3 s. Students should connect the morning case to the zero rule they learned in f05.

4. **Should fix, scene 5 (too much text at once).** Three two-part cards stacked at 40 px, then a fourth, then a quotation card with its source line, all while the narration moves on: about 70 words on screen. Fix: as each new card lands, the earlier cards shrink to their amber halves only (30 px); on "says it plainly" the stack clears to a one-line strip "4 assumptions, each fails for real people" and the quotation card takes the centre. Students read one limitation at a time and then the quotation, without competing paragraphs.

5. **Optional, scene 3 (spoken 2.14, then 0.1446).** The narration says "about two point one four hours" and then "Point one four four six times sixty", a number the student has not heard. Replacement: "...and that's about two point one four four six **hours**." About 1 s.

## Joins

f05 to f06: scene 1 opens on f05's final frame exactly, footer included. f06 to f07: scene 12's frame (the first-aid kit about 760 px, the "Medicine A / invented" bottle, "Adult dose: 500 mg (invented)", "A child's dose?", the footer "Invented example. Your doctor or pharmacist sets real doses.", the chips, no formula) matches f07's Boundary, and the narration says the doctor or pharmacist line (ruling 4).

## Practice and feedback

Both cards keep the full question (A2's three parts and the male formula) and the "invented example" tag on screen through the countdown. Feedback 1 (about 19 s) and feedback 2 (about 27 s) each give the answer, the reason and one crossed slip; A2 (c) needs only one limitation, which keeps the feedback brief. The NSW quotations and "only time lowers BAC" wait for Codex's source check before narration.

## Key notes and length

The notes include the rounding rule, the two-part limitation pattern and "Only a breath or blood test measures BAC". Narration 4,636 characters by this reviewer's count, about 439 s with holds, 131 s under the cap; finding 3 adds about 3 s. No em dash.

No speech, design edits, builds or commits were made.
