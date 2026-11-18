# Maths S12 b02 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-b02.md`, "How do we draw a scatter plot and describe its form, direction and strength?" Source SHA256 `1511cedd78f3d00c63fe566f46b79a86d272bfd0d3f9f4b24d93a33f7cc85137`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (b01 pairs and points; Year 11 d18 outliers; l02 a straight line) as a Mathematics Standard student, Standard 1 and Standard 2 alike. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

A good video. Each describing word gets its plain meaning before use, "don't join the dots" gets a reason (the days are separate cases), and the order is argued: form first, because strength only makes sense against a straight line. The band that widens while the line's angle never moves, then the steep-but-weak plot beside the gentle-but-strong one, show "strength is closeness, not steepness" better than any sentence could, and attempt 2's "fall steeply" trap tests it. The outlier is named in context and set aside. Standard 1 students never need a number for strength. Recalculated with Python (`work/brief-review-standard-b/verify.py`, `python -I`): kiosk r 0.994857; coffee cart 0.917700; screen time −0.944815, with (2, 5.4) −0.384590; steep plot gradient 9.35 and r 0.35; gentle plot gradient 1.981 and r 0.9922; free throws 0.984732; ice creams against sunscreen 0.999477. All correct, and each confirms its on-screen description.

## Findings

1. **Should fix, scene 2 (the zero-based plot will not look squashed).** The narration says that from zero "the points get squashed into one corner, and the pattern is hard to see". On axes 0 to 35 and 0 to 130 the kiosk's points still span about 40 per cent of the width and 60 per cent of the height, and the rising pattern stays easy to see, so the picture will contradict the sentence. Fix: "If both axes start at zero, the points bunch up in one part of the graph, and the rest is empty space." and at the end "Now the points spread across the graph, so any pattern is easier to see." No visual change. Students should understand the reason for a break mark (use the space for the data) without being told something the screen does not show.

2. **Optional, scene 5 (which line, and "holds all the points").** The band sits around "the line", but the line of best fit is b04a's topic; and a band that "just holds all the points" is widened by one outlier, the very thing scene 8 says not to let decide the description. Say "Picture a straight line through the middle of the points, and a band around it that holds the points."

## Joins

Opens on b01's final frame (the 18°C row completes its landing). Final frame matches b03's stated opening: the sunscreen column (12, 18, 22, 27, 35, tagged invented), the sunscreen plate, "strong, positive, linear", and no link drawn between the columns.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown. A1 asks the student to draw a plot, more than 10 s allows; "Pause here to answer." covers it. A2 has no picture, rightly (drawing the plots would answer it). Feedbacks about 27 s and 22 s, each with one crossed slip. The slip "positive correlation" is crossed with the caption "add strength and form, and name both variables", which keeps students from thinking the word itself is wrong before b03 introduces it. Free-throw practice, a coffee cart and screen time are everyday anchors, all tagged invented.

## Key notes and length

Five useful notes; note 5 states the sentence order (strength, direction, form) that the memory card's checking order (form, direction, strength) differs from, and scene 7 says why. About 478 s; finding 1 adds about 2 s.

No speech, design edits, builds or commits were made.
