# Maths S12 b06 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-b06.md`, "How does a calculator or spreadsheet find the least-squares regression line?" Source SHA256 `bf87ff23645ba2445bab48673eea2384abdff651c106f757defd41ede09439de`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (b05 statistics mode and r; b04a and b04b the line by eye, the mean point, y = mx + c in context; Year 11 d07 spreadsheet charts) as a Mathematics Standard 2 student. Standard 2 only. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 0 optional).

The structure is right: the results screen from b05 asks the question, the squares picture explains the name and why everyone gets the same line, "B goes with x, so B is m; A stands on its own, so A is c" is a reason rather than a rule to memorise, and the work-hours example gives a meaningful intercept to contrast with the kiosk's. The spreadsheet's argument-order trap, shown silently fitting a different line until the check cell turns red, is exactly the kind of mistake video can expose. Recalculated (`work/brief-review-standard-b/verify.py`, `python -I`): B = 325/58 = 5.603448276, A = −3659/58 = −63.0862069, 77 at 25, 88.2069 at 27; squares 56 for the line by eye and exactly 1095/29 = 37.76 for least squares; 76.91 with rounded values; work hours A = 89.3, B = −1.7, 74 at x̄ = 9; swapped SLOPE −0.476 and INTERCEPT 44.224, check cell 39.94; rideshare A = 2809/411, B = 698/411, 23.8175 at 10 km (23.83 rounded), r 0.9995. All correct. The kiosk's swapped formulas (A2) give 15.8 at 25, so the A2 check does catch it.

## Findings

1. **Should fix, scene 2 (why squares, not just the gaps?).** The narration draws each gap as a square and minimises the total area, but never says why the gaps are squared. b04a showed that the gaps above and below the line by eye already balance (7 and 7), so a student asks why not just add the gaps. The design's cause chain has the answer; the narration does not. Fix, after "draw each gap as a square.": "Squaring makes every gap count as positive, so gaps above and below can't cancel out, and it makes a big gap count much more than a small one." About 11 s against a 55 s margin. Students should understand what "least squares" actually minimises and why it picks one line.

2. **Should fix, scene 4 ("so the line is right").** "It passes right through, so the line is right." b04b's scene 7 showed the line by eye, y = 6x − 73, also landing exactly on (25, 77), so passing through the mean point cannot prove a line is the least-squares line. Fix: "It passes right through, so the check is passed. A misread or swapped number would miss the mean point." Keep the memory card and A2's "quick check" wording, which are accurate. Students should understand the check catches mistakes, without believing it certifies any line.

3. **Should fix, scenes 7, 8 and 12 (two different A and B in one video).** After four minutes of "A is the intercept, B is the gradient", the spreadsheet puts hours in column A and marks in column B, then the key trap is "SLOPE of B two to B nine first". By ear, "B first" collides with "B goes with x"; the memory card says "A alone, B with x" beside "y range first". Fix (recommended): in scene 7 after "the marks in column B" add "These are just column letters, not the calculator's A and B." with a hand tag "column letters, not A and B", and keep the column letters grey (never blue or violet) in scenes 7, 8, 12 and 13. Alternative for root: put the data in columns C and D in scenes 7 and 8 (=SLOPE(D2:D9,C2:C9)) and keep A2's A and B columns, which then test the idea after it is taught. About 5 s. Students should keep the calculator's letters and the spreadsheet's columns apart.

## Joins

Opens on b05's final frame (A and B dim, then lit). Final frame is b04a's right panel at full width with only the label changed, so Standard 2 and Standard 1 viewers start b07 on the same picture (ruling 68). The narration's "by eye or by least squares, tells nearly the same story" is what b07 relies on.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; A1 to the nearest dollar avoids rounding disputes ($24 either way), and A2's picture shows only the columns, no formulas. Feedbacks about 27 s each, each with one crossed slip ("fare = 1.70 + 6.83 × distance"; swapping only SLOPE).

## Key notes and length

Five notes, including both function orders and the check. About 515 s; the three fixes add about 16 s.

No speech, design edits, builds or commits were made.
