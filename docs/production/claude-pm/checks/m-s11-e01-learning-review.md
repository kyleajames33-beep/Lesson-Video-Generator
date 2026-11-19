# Maths S11 e01 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-e01.md`, "How do salaries and wages compare across weekly, fortnightly, monthly and yearly pay?" Source SHA256 `60ab9995343b64cb3a6c9591878bfeef73ac959aede78c6645e4497b9084eb28`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (l07's pay = k × hours line through the origin; Stage 5 rates, decimals and rounding to the cent) as a Year 11 Mathematics Standard student with a Stage 5 background. l07 Revision 2 scene 11 was read for the join. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

A strong strand opener. The wage is named as l07's gradient in the first lines, the hours slider moves the wage while the salary strip stays still (the wage/salary contrast is seen, not told), and the four-week gap is the right picture for MS-70's real reason (12 × 4 = 48, not 52). The carpenter's "one week first" and the job ads' "same unit first" are each paired with the crossed slip students actually make. Rates: $26.44 shown dated and never used in a calculation; every worked rate is above it. Recalculated with SymPy 1.14 (`work/brief-review-s11-e/verify.py`, `python -I`): 29.40 × 32 = 940.80, × 20 = 588.00, × 38 = 1117.20, 940.80 × 52 = 48 921.60; 80 000 ÷ 52, 26, 12 = 1538.46, 3076.92, 6666.67; four weeks 6153.85, gap 80 000 ÷ 156 = 512.82 (512.83 from the rounded weekly figure, so "more than five hundred" is right); 61 152 ÷ 52 = 1176, ÷ 36 = 32.67, slip 1698.67; 31.25 × 38 × 52 = 61 750, gap 1750; A1 699.60, 36 379.20, 3031.60, slip 2798.40; A2 1257.80, 65 405.60, 1405.60, 2515.60. All correct.

## Findings

1. **Should fix, scene 3 (52 paydays on a one-month calendar).** The calendar plate is one month, a 7 × 5 grid of day boxes. "52 coded marks drop onto the calendar's grid" cannot read as a year of weekly paydays: a student sees 52 marks crammed into about 35 days and asks "is that one month or a year?" Scene 4 then says "Look at the calendar" while the stage shows a 52-week strip, not the calendar. Fix: drop the payday marks onto a 52-week `YearStrip` under the hub (the `CalendarDeposits` part e04b scene 2 already uses), 52 marks, then every second week, then one per month block, with the counters "52 pays", "26 pays", "12 pays"; keep the calendar plate as a picture only. Scene 4, replace "Look at the calendar." with "Look at the year, laid out in weeks." Students should see that each pay period cuts the same year into 52, 26 or 12 pieces.

2. **Should fix, scene 12 (the roster card does not match e02's worked roster).** See `m-s11-e02-learning-review.md` finding 1. e01 scene 12 sets the card "Mon 5 h", "Sat 6 h", "Sun 5 h", "Public holiday 5 h" with Sun and public holiday ringed, and asks "on a public holiday, or a Sunday?", but e02 works "16 hours on weekdays, 6 on Saturday, 5 on a public holiday" with no Sunday. Fix in e01 scene 12: card rows "Weekdays 16 h", "Sat 6 h", "Public holiday 5 h"; ring "Sat" and "Public holiday"; narration "Does the same work pay more on a Saturday, or a public **holiday**?" (cue moves from "Sunday" to "holiday"). Update section 2 item 2 of the root decisions file to match.

3. **Optional, scene 5 ("thirty-two dollars sixty-six recurring").** Said aloud, "sixty-six recurring" is not the screen's 32.666… (the 6 recurs, not 66). Say "thirty-two point six six six, and so on, so thirty-two dollars sixty-seven an **hour**."

## Joins

l07 to e01: scene 1 opens on l07 Revision 2 scene 11's frame exactly as written there (axes, "hours worked" blue, "pay ($)" teal, the line rising $29.40 an hour, "k dollars per hour", "pay = k × hours", "Next: earning money", "?"), and l07's spoken question ("What's that rate called, and how does it compare with a yearly salary?") is answered by e01's third sentence. The $29.40 line carries straight into scene 2. Ruling 93 is satisfied. e01 to e02: matches e02 scene 1 apart from the roster rows (finding 2).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, with nothing answer-bearing in the picture slots. Feedback about 24 s and 28 s, each with the answer, short working and one crossed slip ("699.60 × 4", "$1257.80 < $64 000, so Job A"). Swim school, job ads and paydays are everyday anchors; no people drawn.

## Key notes and length

Five short notes and the "Go through the year." card, checked on a new case ($39,000 a year). 0 em dashes. 5,484 characters by this review's parser (the author's 5,472 plus the joining spaces), about 500 s with holds, 70 s under 570 s; the fixes are length-neutral.

No speech, design edits, builds or commits were made.
