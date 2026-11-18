# Maths S12 b04a Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-b04a.md`, "How do we draw a line of best fit, by eye and with digital tools?" Source SHA256 `9cb42a25ab00c11dcf372b2e31b7641903a60f0017a5a899a4fa72e9c3a78c5d`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (b02 scatter plots; Year 11 d11 the mean; l01 reading a graph) as a Mathematics Standard student, Standard 1 and Standard 2 alike, then following each exit of the two-route frame. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

Most of this video teaches well. The first-and-last line fails visibly (all three middle points below), the gap sticks give "balance" a measurable meaning ("one point far above could outweigh two just below"), the mean point is worked on a g01 board with the median slip crossed, and "two fair lines" answers the worry that a different line by eye is wrong. The spreadsheet trendline gives Standard 1 the "digital tools" half of the point without any equation, and "least squares" is named once with a plain meaning. The two-route frame is clear and states which course goes where. Recalculated (`work/brief-review-standard-b/verify.py`, `python -I`): sums 125 and 385, mean point (25, 77); first-and-last line 62.857, 80, 97.143 at 22, 25, 28; y = 6x − 73 gaps +5, +1, −2, −5, +1 (7 and 7); the 5.5 line 2 above and 3 below with totals 6 and 6; least squares 325/58 and −3659/58, 77 at 25, 48.983 at 20; e-bike mean (1.75, 91), b −5.3714, a 100.4, line B residuals, line A values, line C residuals; canteen sums 148 and 270, 45.111 and 32.667 on the card line, 32.540 by least squares. All correct.

## Findings

1. **Should fix, scene 4 (turning about the mean point cannot change the gap balance).** The narration says "pin the ruler at the mean point, and just turn it until the points balance", and the visual has "the counter and gap totals updating live" as it pivots. But every line through the mean point has equal gap totals above and below: checked at gradients 0, 2, 5.5, 6 and 12, the totals are 56 and 56, 36 and 36, 6 and 6, 7 and 7, 66 and 66. On screen the two totals will stay equal at every angle, including a flat line, and a student will ask what the turning is for. The count above and below changes only slightly (2 and 3, or 3 and 2). The thing that fixes the angle is scene 2's first rule, follow the trend. Fix. Narration, replacing the last sentence: "So pin the ruler at the mean point. Here's a surprise: through the mean point, the gaps above and below always balance, even for a flat line. So turn it until it follows the trend, with points above and below all along the line, not all below at one end and all above at the **other**." Visual: the ruler pivots to flat; totals read "56" and "56" in grey; the 18, 22 and 25°C points ring "all below", the 28 and 32°C points "all above"; red tag "misses the trend"; then it turns to the blue line, totals "7" and "7", points alternating along it. About 12 s against a 92 s margin. Students should understand that the mean point decides where the line sits and the trend decides its slope, and that equal gap totals are a check, not a way to choose the angle. (Scene 3's "7 and 7" stays true and useful.)

2. **Optional, attempt 2 (the given line joins the first and last points).** The canteen card's line runs through (16, 22) and (34, 70), the first and last points, and also (19, 30), straight after scene 2 called joining the first and last points the tempting mistake. Here it is a fair line (middle residuals +0.33, −1.67, +0.67; the least-squares line is within 0.15 of it at both ends), but a student may ask why it is allowed. Add one clause to feedback 2 or to the card's picture note: "This line happens to pass through the end points, and that's fine here, because the middle points balance either side." The same card returns in b07 attempt 1.

## Joins

Opens on b03's final frame (the ruler across the cloud). The two-route frame matches decisions file item 4: the left panel (0 to 140 ice creams, no break, line meeting the edge at 17, "y = ?x + ?") is b04b's opening; the right panel (5 to 50°C, −40 to 220, dashed ends, "10°C?" and "45°C?") is b07's. The narration names Standard Two and Standard One plainly. Standard 1 path (ruling 68) is complete: nothing in b07 needs b04b to b06.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown. A1's picture shows the three lines with the mean point unmarked, which is the item's normal form; A2's picture shows the line with no reading. Feedbacks about 22 s and 27 s, each with one crossed slip ("A: it goes through two points"; "30: the point at 19°C"). E-bike range and canteen drinks are everyday and tagged invented.

## Key notes and length

Five short notes. About 478 s; finding 1 adds about 12 s.

No speech, design edits, builds or commits were made.
