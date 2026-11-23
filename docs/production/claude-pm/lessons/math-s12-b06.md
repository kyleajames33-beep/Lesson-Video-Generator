# Maths S12 B06: How does a calculator or spreadsheet find the least-squares regression line? Least squares in one picture, A and B as intercept and gradient, the mean-point check, comparing with the line by eye, a spreadsheet trendline, and SLOPE, INTERCEPT and CORREL with the y range first (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `a04b.md`, Revision 2 each, and the t-strand resolution logs) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 69; ruling 66: y = mx + c, the calculator's A + Bx read as "A is the intercept, B is the gradient"; ruling 68: the final frame repeats b04a's Standard 1 panel so b07 has one opening). Designer's decisions for b01 to b07: `../checks/root-decisions-maths-s12-b01-b07.md`. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,763 characters by script (see "Narration length estimate"; Revision 2), 15 scene headings, about 537 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s12-b06-learning-review.md` (summary `../checks/m-s12-b01-b07-learning-review-summary.md`), with root's rulings 1 to 77 and root's resolution brief of 19 Nov (decision 2). Resolution log: `../checks/m-s12-b01-b07-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 2 (why squares, not just the gaps): **accepted** (root's decision 2), reviewer's sentence. "Squaring makes every gap count as positive, so gaps above and below can't cancel out, and it makes a big gap count much more than a small one." On screen the 25°C gap (−2) becomes a square of 4 beside the 22°C square of 1, a grey chip recalls b04a ("through the mean point, plain gaps always balance", the Revision 2 surprise in b04a scene 4), and the 28°C square (gap 5, area 25) pulses beside the 1. This says why plain gaps cannot pick the line and squares can.
2. Should fix, scene 4 ("so the line is right"): **accepted** (root's decision 2), reviewer's wording. "It passes right through, so the check is passed. A misread or swapped number would miss the mean point." The cue moves from "right" to "passed". A grey ghost line with B misread as 5.06 gives about 63.4 at 25 and misses the ring by about 14 (author note (h)). The cause chain and memory aid check say the check catches mistakes but does not certify a line, since the line by eye also passes (25, 77). Key note 5, the memory card and attempt 2's "quick check" wording are kept, as the review advised.
3. Should fix, scenes 7, 8 and 12 (two different A and B): **accepted**, root's decision 2 (the review's recommended option). The data stay in columns A and B. Scene 7 adds "These are just column letters, not the calculator's A and B." with the hand tag "column letters, not A and B", and the grid's column letters stay grey in scenes 7, 8, 12 and 13, never violet or blue. A Decisions line records it. Columns C and D were not used.

Joins unchanged: scene 1 opens on b05's final frame, and scene 14's frame (b04a's right panel at full width; b07's opening) is unchanged.

Narration 5,763 characters by script (Revision 1: 5,502), about 537 s with holds, 33 s under the cap; feedback unchanged (about 27 s each). Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: Bivariate data analysis, playlist order 67. **Standard 2 only.** Rejoins the Standard 1 path at b07: the final frame is b04a's right panel at full width. Pre-design pack: `../pre-design/maths-standard/math-s12-b06.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/bivariate-data-analysis/lesson09.sa.html` (SHA256 `948f42051ae738969aa5746047525daed596ba5906c1195b0b44a629736b6bb6`; card 02's "unique line that minimises the sum of the squared vertical distances"; card 08, "A = 89.3 ... B = −1.7", "A is the intercept and B is the gradient, in that order. Students lose marks by reading the first number on the screen as the gradient", "89.3 − 1.7 × 9 = 74"; card 09, "=SLOPE(B2:B9,A2:A9)", "SLOPE and INTERCEPT want the y range first", "the same cell returns 39.94 against a mean of 74") and `lesson08.sa.html` (SHA256 `7707be28d68f12da65dbf15206e29b9058bb91662bd8ca6d626f53f7e51c30a1`; card 08, "tick Display equation on chart. The equation appears as y = −1.7x + 89.3"). Not used: the formulas for a and b (the site calls them beyond the syllabus; MS-65), "the HSC uses y = a + bx" (MS-63), the electricity model (MS-67) and the baby-height model (MS-65). Route entry: `math-s12-b06` in `../../programme/maths-standard-route-inputs-6.json`. Visual system: maths studio kit; the kiosk and calculator plates; scatter plots, squares, the calculator screens and the spreadsheet coded and unbranded.

Owner rules applied: plates for real objects, code for diagrams, data and screens; no people, hands or faces; one main question; one stage at a time; words before symbols ("the line where the squares' total area is as small as possible" before "least squares"; "A stands alone, B goes with x" before y = A + Bx); calculator and spreadsheet as coded, unbranded screens; conversational narration; one worked example on the g01 board; two attempts with "Pause here to answer." and 10 s countdowns, the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a beach kiosk, part-time work and marks, a rideshare fare); Australian spelling; no em dashes; all text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Bivariate data analysis), quoted from `../../programme/maths-standard-route-inputs-6.json`:

Standard 2:
- `ci9bd861ac`: "Determine the equation of the least-squares regression line for a bivariate dataset using a scientific calculator"
- `ci3f69b9d4`: "Use a spreadsheet to construct a scatter plot and the least-squares regression line for a bivariate dataset"

Standard 1: no matching content point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c (Standard 2)

**Boundary:** starts from b05's final frame exactly (b05 scene 15): the calculator plate with its results screen ("A = −63.0862069", "B = 5.603448276", "r = 0.994856525"; r lit, A and B dim); the kiosk scatter small at the right with its line; the dial at 0.99; chip "what are A and B?"; label "Next: the least-squares line"; chips "Next" and "?". Recalls b05 (two-variable statistics mode, r), b04a (the line by eye, the mean point, a spreadsheet trendline), b04b (y = mx + c, m and c in context, the intercept that means nothing) and Year 11 d07 (spreadsheet graphs) in a phrase or grey chip. Teaches: the least-squares regression line as the one line that makes the squared vertical gaps as small as possible (a picture, no formula), the same for everyone; the calculator's y = A + Bx with A the intercept and B the gradient, rewritten as y = mx + c; the mean-point check; comparing with b04a's line by eye; a spreadsheet scatter chart with a linear trendline and its equation; SLOPE, INTERCEPT and CORREL, with the y range first in SLOPE and INTERCEPT; gradient and intercept read in context. Predictions and their reliability are b07.

## Decisions

- **Anchor: the kiosk's results screen (ruling 65).** A = −63.086, B = 5.6034: y = 5.60x − 63.09; passes exactly through (25, 77); close to b04a and b04b's y = 6x − 73 inside the data (27°C: 88.2 against 89).
- **"Why this line" in one picture (pack: optional, kept):** squared gaps drawn as squares hanging between the points and a line; the line wobbles and the total area readout falls to its smallest. One plain sentence, no formula (MS-65). It is what makes "the same for everyone" true, and it answers "least" and "squares" in the name.
- **A and B (ruling 66).** Shown as the calculator shows them (y = A + Bx), then rewritten: "B goes with x, so B is m; A stands alone, so A is c", with B blue and A violet in every row. "b" is never used for the intercept.
- **Worked example (g01): the site's eight students on the calculator (card 08):** A = 89.3, B = −1.7: y = −1.7x + 89.3; the gradient (about 1.7 fewer marks for each extra hour) and the intercept (89.3 with no paid work; 0 hours is inside the data, so it makes sense, the opposite of the kiosk's −63). Crossed slip "y = 89.3x − 1.7" (caption "A is the intercept; B goes with x").
- **Column letters (Revision 2, root's decision 2).** The data stay in columns A and B (as card 09 and attempt 2 have them). Scene 7 says "These are just column letters, not the calculator's A and B.", with the hand tag "column letters, not A and B", and the grid's column letters and row numbers are always grey (scenes 7, 8, 12, 13), never the calculator's violet A or blue B. In scene 8 and feedback 2 the ranges keep their variable colours (y range teal, x range amber), not the letters' colours.
- **Spreadsheet (unbranded; card 09):** columns A and B, a scatter chart, "Trendline: Linear", "Display equation" giving "y = -1.7x + 89.3"; then =SLOPE(B2:B9,A2:A9), =INTERCEPT(B2:B9,A2:A9), =CORREL(A2:A9,B2:B9); the order trap with a check cell (=INTERCEPT(…)+SLOPE(…)*AVERAGE(A2:A9)) showing 74 when right and 39.94 when swapped. The function names are common to spreadsheet programs (pack decision); no program is named.
- **Final frame (ruling 68):** b04a's right panel repeated exactly at full width (uniform scale 1.3, centred), with only the label changed to "Next: can we trust a prediction?" (the panel's "Standard 1 next: …" would be wrong for a Standard 2 viewer); the split rule and panel tags are not drawn. The frame's line is the line of best fit drawn in b04a (y = 6x − 73, no equation shown); the narration says the line by eye and the least-squares line tell nearly the same story, which is what b07 relies on.
- **Simulations (standard item 3).**
  1. **Squares shrink** (scene 2; ScatterBoard squared-gap option): five squares hang between the kiosk's points and a trial line (side = vertical gap, drawn to the plot's scale in ice creams); the line rocks and slides; the total area readout ("total of squares: …") rises and falls live and settles at its smallest when the line reaches y = 5.60x − 63.09 (readout 37.8).
  2. **Order swap** (scene 8; SpreadsheetGrid argument-order swap): the ranges inside =SLOPE( ) trade places; the check cell recomputes from 74 to 39.94 and turns red, then the ranges swap back and it returns to 74 and turns green.
  3. **Spreadsheet to trendline** (scene 7; SpreadsheetGrid): the columns fill, the chart grows, the trendline draws and its equation label appears.
- **Colour roles (the strand's).** x amber; y teal; points ink; the least-squares line, the gradient m and B blue; the intercept c and A violet; r and CORREL olive; the line by eye blue dashed when shown beside the least-squares line; squared gaps pale grey with ink outlines; the mean point amber and teal cross-hairs; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px, calculator screen 44 px, spreadsheet cells 40 px and formula bar 44 px; nothing below 26 px; all text above y = 950. Hand tags: "smallest total area", "the same for everyone", "A alone: intercept", "B with x: gradient", "A = c, B = m", "below or above: always +", "big gaps count much more" (Revision 2), "full values", "through the mean point", "catches mistakes" (Revision 2), "almost on top", "makes sense here", "column letters, not A and B" (Revision 2), "display equation", "y range first", "no error message", "the check catches it". At most two live at once.
- **Stage changes (standard item 2).** b05's frame (1); squares shrinking (2); A and B rewritten (3); the mean-point check (4); by eye against least squares (5); g01 board: work hours (6); the spreadsheet chart (7); functions and the swap (8); framed card (9); question cards (10 to 13); b07's frame (14); key notes (15).
- **Memory aid.** Framed card: "A alone, B with x." Key line: "Spreadsheet: y range first. Check: the line gives the mean of y at the mean of x."
- **Visual surprise.** The squares' total area bottoms out and climbs again as the line passes the best position (scene 2); a correct-looking formula turns the check cell red (scene 8).
- **Plain meanings at first use.** Least-squares regression line ("the one line where the squares of the vertical gaps add to the smallest total"; "regression line": "a line used to predict y from x"); vertical gap ("how far a point is above or below the line, straight up or down"); trendline ("a spreadsheet's line of best fit"); SLOPE ("the gradient"); INTERCEPT ("the intercept"); CORREL ("r"); range ("a block of cells, like B2 to B9").
- **Attempts (original, HSC style; pack questions).** A1 (pack question 1, part (c) to the nearest dollar so rounding does not split answers): rideshare fare = 1.70 × distance + 6.83; about $1.70 more per km; about $24 for 10 km; crossed "fare = 1.70 + 6.83 × distance" (caption "A is the intercept; B goes with x"). A2 (pack question 2): the kiosk in A2:A6 and B2:B6; y range first; =SLOPE(B2:B6,A2:A6) and =INTERCEPT(B2:B6,A2:A6); the check 25 → 77; crossed "swap only SLOPE" (caption "both need y first").
- **Mistake scene:** none separate. A read as the gradient (3, 6 crossed, A1 crossed); reversed ranges (8, A2); the least-squares line as "the true line" (2, said: "the best straight-line summary of these data"); gradient without units (6); an intercept far outside the data interpreted (5, said).
- **Cause chain taught, in order:** (1) any line leaves vertical gaps; squaring them makes every gap count positively and big gaps count a lot; the line with the smallest total is unique, so a calculator or spreadsheet that follows this rule gives everyone the same line (2); (2) the calculator writes the line as y = A + Bx, and since B multiplies x it is the gradient and A, alone, is the intercept (3); (3) the least-squares line always passes through the mean point, so substituting x̄ must give ȳ; a misread or swapped value misses it, so this is a check that catches mistakes, not a proof (the line by eye passes (25, 77) too) (4); (4) a fair line by eye is close to it inside the data (5); (5) a spreadsheet draws the same line and can compute its numbers, but its functions read the y range first, so a swapped order silently fits a different line, which the mean-point check exposes (7, 8).
- **Entry knowledge (route):** math-s12-b05 (two-variable statistics mode, r); math-s12-b04a and b04b (the line by eye, the mean point, y = mx + c, m and c in context); math-s11-d07 (spreadsheet graphs; a Year 11 site gap, recalled gently). Recalled in a phrase or grey chip ("b05: the two-variable statistics mode", "b04b: y = mx + c", "Year 11: spreadsheet charts").
- **Handoff (to math-s12-b07, "Interpolation and Extrapolation: Trusting Predictions").** Scene 14's frame: b04a's right panel (decisions file section 2, item 4) repeated exactly at full width, scaled uniformly by 1.3 and centred: the kiosk plate (about 340 px wide) at the left; the kiosk scatter (about 780 × 676 px; 5 to 50°C across, amber, break mark at the origin; −40 to 220 ice creams up, teal; a solid grey zero line; five ink points); the line of best fit (blue) solid from 18 to 32°C and dashed from 10 to 18°C and from 32 to 45°C; tags "10°C?" and "45°C?" (amber); chip "can we trust these?"; label "Next: can we trust a prediction?"; chips "Next" and "?". No equation and no r. This is b07's opening frame (decisions file section 2, item 4).
- **Invented data (ruling 69):** every dataset, study or price in this video other than the kiosk's five days and the site's own work-hours and explorer data carries a small grey "invented data" (or "example price") tag on screen, question cards and feedback included (28 px, top right of the plot or card).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Kiosk exact least squares: B = 325/58 = 5.603448276, A = −3659/58 = −63.0862069; through (25, 77) exactly (325 × 25 − 3659 = 4466; 4466 ÷ 58 = 77). Rounded: y = 5.60x − 63.09; 5.60 × 25 − 63.09 = 76.91. Minimum sum of squared gaps: 1095/29 ≈ 37.759. At 27: 88.207; y = 6x − 73 at 27: 89.
  (b) Squares sim: the trial line starts as the line by eye y = 6x − 73 (gaps 5, 1, −2, −5, 1; total of squares 25 + 1 + 4 + 25 + 1 = 56) and settles on the least-squares line, whose total is the smallest possible, 1095/29 ≈ 37.76 (readout "37.8").
  (c) The readout during the rocking motion is computed live from the trial line; no value other than 56 and 37.8 is held on screen.
  (d) Work hours: A = 893/10 = 89.3, B = −17/10 = −1.7; at x̄ = 9, 89.3 − 15.3 = 74 = ȳ; CORREL −0.8996. Swapped: SLOPE(A2:A9,B2:B9) = −0.476; INTERCEPT(A2:A9,B2:B9) = 44.224; check 44.224 − 0.476 × 9 = 39.94.
  (e) A1 rideshare (invented): distance 3, 5, 8, 12, 15, 20 km; fare 12, 15, 21, 27, 32, 41 $; A = 2809/411 = 6.8345, B = 698/411 = 1.6983, r = 0.9995; at 10, 23.8175 (unrounded) or 6.83 + 17.0 = 23.83 (rounded); either way $24.
  (f) A2 kiosk check: 5.6034 × 25 − 63.086 = 77.
  (g) Pronunciations: "y equals A plus B x"; "equals SLOPE of B two to B nine, A two to A nine"; "minus sixty-three point zero nine"; "five point six zero".
  (h) Revision 2 ghost line (scene 4): B misread as 5.06: 5.06 × 25 − 63.09 = 63.41, about 14 below 77.

Main question: *The calculator's results screen shows A and B as well as r. What line do they describe, and how do a calculator and a spreadsheet find the least-squares regression line?*
Entry knowledge (b05; b04a, b04b; Year 11 d07): the statistics mode and r; the line by eye, y = mx + c in context; spreadsheet charts.
Stops after: least squares in one picture, A and B, the mean-point check, comparison with the line by eye, the spreadsheet chart and functions with the order trap. No predictions or reliability.
Handoff: math-s12-b07: "can we trust these?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): x amber; y teal; points ink; least-squares line, m and B blue; c and A violet; r olive; squares pale grey; answer green; mistake red. Header strip "BIVARIATE DATA ANALYSIS" (topic only; root ruling 23 Nov 2026: no course name on screen). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: what are A and B?
> Here's the kiosk's results screen again. We've used r. But the calculator also gives two more numbers. A is minus sixty-three point zero eight six, and B is five point six zero three. They describe a line, the one the calculator works out from the data. So how do a calculator and a spreadsheet find this line, called the least-squares regression line, and how do we read **it**?

Visual: opens on b05's final frame exactly. On the first sentence the label and the chips "Next" and "?" fade; the r line dims and the A and B lines light, A violet and B blue (grey chip "b05: the two-variable statistics mode"). On "describe a line" a blue line draws over the kiosk scatter at the right, which grows to about 900 × 560 px. On "it" heading "The least-squares regression line" writes on, and the chip "what are A and B?" moves to the top right as the question chip.

### 2. why this line: the smallest squares
> First, which line is it? Picture the vertical gap from each point up or down to a line, and draw each gap as a square. Squaring makes every gap count as positive, so gaps above and below can't cancel out, and it makes a big gap count much more than a small one. As the line moves, the squares grow and shrink. The calculator finds the one line where the total area of all those squares is as small as it can be. That's why it's called the least-squares line. Regression line just means a line used to predict y from x. Because it follows one fixed rule, everyone with the same data gets exactly the same **line**.

Visual: stage change: simulation 1. The kiosk scatter large (about 1,150 × 720 px). A trial line starts as b04a's line by eye (blue dashed); five pale grey squares hang between each point and the line, each square's side equal to its vertical gap; a readout, 44 px: "total of squares: 56". On "Squaring" the 25°C point's gap stick ("−2", below the line) turns into its square, labelled "4", beside the 22°C point's square "1" from a gap above (hand tag "below or above: always +"); on "can't cancel out" a grey chip "b04a: through the mean point, plain gaps always balance" (Revision 2). On "much more" the 28°C square "25" (gap 5) pulses beside the 22°C square "1" (gap 1), 44 px labels "gap 5 → 25", "gap 1 → 1" (hand tag "big gaps count much more"). On "As the line moves" the line rocks and slides, the squares growing and shrinking and the readout rising and falling live. On "as small as it can be" the line settles solid blue at y = 5.60x − 63.09 and the readout stops at its lowest, "37.8" (hand tag "smallest total area"). On "line" (bold) a caption writes, 40 px: "least squares: one fixed rule" (hand tag "the same for everyone").

### 3. A and B: the intercept and the gradient
> The calculator writes this line as y equals A plus B x. A is the intercept, where the line crosses the vertical axis. B is the gradient, how steep it is. It's the same as y equals m x plus c, just in a different order. B goes with x, so B is m. A stands on its own, so A is c. For the kiosk, the line is y equals five point six zero x, minus sixty-three point zero nine, rounding to two decimal **places**.

Visual: stage change. A row, 52 px: "y = A + Bx" with A violet and B blue (hand tags "A alone: intercept", "B with x: gradient"). It rearranges live: "y = Bx + A", then beneath it "y = mx + c" with B over m (blue) and A over c (violet) joined by thin arrows (hand tag "A = c, B = m"; grey chip "b04b: y = mx + c"). On "places" framed "y = 5.60x − 63.09" (green, 5.60 blue, −63.09 violet).

### 4. a check that always works: the mean point
> Here's a check that always works. The least-squares line always passes exactly through the mean point. The kiosk's mean point is twenty-five comma seventy-seven. Put twenty-five into the line, using the calculator's full values. Five point six zero three four times twenty-five, minus sixty-three point zero eight six, gives seventy-**seven**. It passes right through, so the check is **passed**. A misread or swapped number would miss the mean point.

Visual: camera continue to the scatter. The mean point's amber and teal cross-hairs draw at (25, 77) (grey chip "b04a: the mean point (25, 77)"). Row, 52 px: "5.6034… × 25 − 63.086… = 77" (hand tag "full values"); on "seven" the blue line glows where it crosses the ring (hand tag "through the mean point"). On "passed" a green tick (Revision 2 cue; Revision 1's was "right"). On "misread" a grey ghost line with B misread as 5.06 flashes, a grey row "5.06 × 25 − 63.09 ≈ 63.4, not 77", and the ghost passes about 14 below the ring, then fades (hand tag "catches mistakes").

### 5. against the line by eye
> How does it compare with our line by eye, y equals six x minus seventy-three? Lay them together. Inside the data, they're almost on top of each other. At twenty-seven degrees, the line by eye says eighty-nine, and the least-squares line says about eighty-eight. Both gradients say roughly six more ice creams per degree. And both intercepts are meaningless, because zero degrees is far outside the **data**.

Visual: camera continue. The line by eye (blue dashed) lays over the least-squares line (blue solid); the band 18 to 32°C tints pale grey (hand tag "almost on top"). Guides at 27°C: "line by eye: 89", "least squares: about 88" (44 px). A grey row: "gradients: 6 and 5.60 ice creams per °C". On "data" two grey chips "−73" and "−63.09" with the caption "intercepts: 0°C is far outside the data: no meaning".

### 6. worked example: the calculator, work and marks
> Here's a worked example. For the eight students from last time, use a calculator to find the least-squares regression line for exam mark against work hours, and interpret its gradient and intercept. Enter the pairs in the two variable statistics mode. The results screen gives A as eighty-nine point three, and B as minus one point seven. So the line is y equals minus one point seven x plus eighty-nine point **three**. For each extra hour of paid work, the predicted mark drops by about one point seven. A student with no paid work is predicted about eighty-nine point three, and zero hours is inside the data, so here that makes **sense**. Writing y equals eighty-nine point three x minus one point seven is the slip. A is the intercept, and B goes with **x**.

Visual: clear change to the g01 board. Task strip, 44 px: "Eight students' paid work hours (x) and exam marks (y) are shown. Use a calculator to find the equation of the least-squares regression line, and interpret its gradient and intercept." Givens card, 36 px: "Work hours: 0, 3, 5, 8, 10, 12, 15, 19" and "Exam mark: 89, 76, 83, 82, 74, 69, 69, 50". The calculator plate small at the left (about 420 px tall): its table fills, then the results screen "A = 89.3", "B = −1.7", "r = −0.8995…" (r dim). Rows, 52 px: "y = A + Bx", "A = 89.3 (c)", "B = −1.7 (m)"; on "three" framed "y = −1.7x + 89.3" (green, −1.7 blue, 89.3 violet). On "drops" framed "gradient: about 1.7 fewer marks for each extra hour" (green). On "sense" framed "intercept: about 89.3 with no paid work; 0 hours is in the data" (green; hand tag "makes sense here"). On "slip" a red slip "y = 89.3x − 1.7" writes; on "x" it is crossed (caption "A is the intercept; B goes with x").

### 7. the same line in a spreadsheet
> Now the same line in a spreadsheet. Put the hours in column A, and the marks in column B. These are just column letters, not the calculator's A and B. Insert a scatter chart, add a linear trendline, and tick display equation. The chart shows y equals minus one point seven x, plus eighty-nine point three. It's the same line as the **calculator's**.

Visual: stage change: simulation 3. A coded, unbranded spreadsheet (about 760 × 520 px) at the left: A1 "hours", B1 "mark", rows 2 to 9 filling. The grid's column letters (A, B, C, D) and row numbers stay grey here and in scenes 8, 12 and 13, never blue or violet, so they never look like the calculator's A (violet) and B (blue). On "column letters" the letters A and B at the top of the grid ring grey and a hand tag writes: "column letters, not A and B" (Revision 2); the results screen's "A =" and "B =" do not appear in this scene. On "scatter chart" a chart grows at the right (about 900 × 560 px) with the eight points (grey chip "Year 11: spreadsheet charts"); on "linear trendline" a menu "Trendline: Linear" and the line draws; on "display equation" a tick box and the label "y = -1.7x + 89.3" (44 px) appear on the chart (hand tag "display equation"). On "calculator's" the calculator's framed equation from scene 6 slides in small beside the label, matching.

### 8. functions, and the order trap
> You can also get the numbers in cells. SLOPE gives the gradient, INTERCEPT gives the intercept, and CORREL gives r. Here's the trap. SLOPE and INTERCEPT want the y values first, then the x values. So it's SLOPE of B two to B nine, then A two to A nine. If you swap them, there's no error message. You just get a different line. The mean-point check catches it. In the right order, the line gives seventy-four at the mean of nine hours, the mean mark. Swapped, it gives thirty-nine point nine four, not seventy-**four**.

Visual: camera continue to the grid with a formula bar (44 px). Cells D2 to D4 fill one by one as their formulas show in the bar: "=SLOPE(B2:B9,A2:A9)" → −1.7 (blue); "=INTERCEPT(B2:B9,A2:A9)" → 89.3 (violet); "=CORREL(A2:A9,B2:B9)" → −0.8996 (olive). On "y values first" the "B2:B9" inside SLOPE and INTERCEPT rings teal and "A2:A9" amber (hand tag "y range first"). A check cell D5, "=INTERCEPT(…)+SLOPE(…)*AVERAGE(A2:A9)", shows 74 (green). Simulation 2 on "swap": the two ranges inside SLOPE and INTERCEPT trade places; D2 and D3 recompute (−0.476 and 44.224, grey) with no warning (hand tag "no error message"); on "four" the check cell recomputes to 39.94 and turns red (hand tag "the check catches it"), then the ranges swap back and it returns to 74, green.

### 9. memory aid
> Here's the summary. A stands alone, and B goes with x. In a spreadsheet, the y range comes first. And the line always passes through the mean **point**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the results screen small (A violet, B blue) beside "y = mx + c". Main line, hand font 56 px: "A alone, B with x." On "point" the key line, 40 px: "Spreadsheet: y range first. Check: the line gives the mean of y at the mean of x." Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A rideshare driver records the distance and fare of six trips. Here's the table. Use your calculator to find the equation of the least-squares regression line, with values correct to two decimal places. Interpret the gradient in context. Then use the line to estimate the fare for a ten kilometre trip, to the nearest dollar. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A rideshare driver records the distance and fare of six trips." Table, 40 px: "Distance (km): 3, 5, 8, 12, 15, 20" and "Fare ($): 12, 15, 21, 27, 32, 41". "(a) Use your calculator to find the equation of the least-squares regression line, with values correct to 2 decimal places. (b) Interpret the gradient in context. (c) Use the line to estimate the fare for a 10 km trip, to the nearest dollar." Picture slot: the phone plate `maths/ma12-phone-v1.png` (about 240 px tall) with a coded trip-map screen (no numbers). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 1 (brief)
> A is six point eight three and B is one point seven zero, so the fare equals one point seven zero times the distance, plus six point eight **three**. Each extra kilometre adds about a dollar seventy to the predicted fare. For ten kilometres, that's about twenty-four **dollars**. Swapping A and B in the equation is the slip. A is the intercept, and B goes with **x**.

Visual: the card shrinks to the top (30 px). The calculator screen small: "A = 6.8345…", "B = 1.6982…". On "three" framed "(a) fare = 1.70 × distance + 6.83" (green, 1.70 blue, 6.83 violet). Framed "(b) about $1.70 more per extra km" (green). Row "1.70 × 10 + 6.83 ≈ 23.83"; on "dollars" framed "(c) about $24" (green). On "slip" a red slip "fare = 1.70 + 6.83 × distance" writes; on "x" it is crossed (caption "A is the intercept; B goes with x"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A spreadsheet has the kiosk's temperatures in cells A two to A six, and the ice creams sold in B two to B six. A student types equals SLOPE of A two to A six, B two to B six, and puts the ranges in the same order for INTERCEPT. Explain the student's mistake. Write the correct formulas. Then describe a quick check that the final line is right. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A spreadsheet has the kiosk's temperatures (°C) in A2:A6 and ice creams sold in B2:B6. A student types =SLOPE(A2:A6,B2:B6) and =INTERCEPT(A2:A6,B2:B6). (a) Explain the student's mistake. (b) Write the correct formulas. (c) Describe a quick check that the final line is correct." Picture slot: a small coded grid showing the two columns' headings and values (no formulas filled). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 13. feedback 2 (brief)
> SLOPE and INTERCEPT need the y range first, the ice creams in column B, and then the x range. So it's equals SLOPE of B two to B six, A two to A six, and the same order for **INTERCEPT**. For the check, put the mean temperature, twenty-five, into the line. It must give the mean number of ice creams, seventy-**seven**. Swapping only SLOPE is the slip. Both need y **first**.

Visual: the card shrinks to the top. Rows, 44 px: "(a) y range (B) must come first"; on "INTERCEPT" framed "(b) =SLOPE(B2:B6,A2:A6) and =INTERCEPT(B2:B6,A2:A6)" (green, B ranges teal, A ranges amber). Row "5.6034… × 25 − 63.086… = 77"; on "seven" framed "(c) the line gives 77 at 25°C: the mean point" (green). On "slip" a red slip "=SLOPE(B2:B6,A2:A6) and =INTERCEPT(A2:A6,B2:B6)" writes; on "first" it is crossed (caption "both need y first"). Hold about 1 s.

### 14. handoff: past the data
> So the kiosk's line, by eye or by least squares, tells nearly the same story inside the data. But the line keeps going, in both directions. What would it predict on a ten degree day, or a forty-five degree day, and can we trust it? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as under Decisions, "Handoff": b04a's right panel at full width): the kiosk plate and the scatter on the wider axes with the grey zero line; the blue line solid from 18 to 32°C; on "keeps going" it runs on dashed to 10°C and to 45°C; on "forty-five degree" the tags "10°C?" and "45°C?". On "next" chip "can we trust these?", label "Next: can we trust a prediction?" and chips "Next" and "?". Hold about 2 s. No equation and no r. This is b07's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Least-squares line: the squared vertical gaps add to the smallest total.
- Calculator: y = A + Bx. A = intercept (c); B = gradient (m).
- Spreadsheet: scatter chart, linear trendline, display equation.
- =SLOPE(y range, x range), =INTERCEPT(y range, x range); CORREL gives r.
- Check: the line passes through the mean point (x̄, ȳ).

Memory aid (framed card, right side, as in scene 9): *A alone, B with x.* Key: *Spreadsheet: y range first. Check: the line gives the mean of y at the mean of x.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 14's frame exactly. This is the final frame and b07's opening frame.

## Teaching checks

- **Does it explain causes?** Why everyone gets the same line: one fixed rule, the smallest total of squares (2). Why A is the intercept: B multiplies x, A stands alone (3). Why the mean-point check works: the least-squares line always passes through it (4). Why the work-hours intercept means something and the kiosk's does not: 0 is inside one dataset and far outside the other (5, 6). Why the swap is dangerous: no error message, a different line (8).
- **Misconceptions addressed:** A as the gradient (6 crossed, A1 crossed); reversed ranges (8, A2 crossed); the least-squares line as the "true" line (2, "a line used to predict"); intercepts out of the data interpreted (5); units for the gradient (6, A1).
- **Visual standard, item by item:** 1 the calculator plate from the first frame, the kiosk, the phone; 2 a new stage every 25 to 60 s; 3 the squares shrinking to a minimum, the check cell turning red on the swap; 4 fixed roles (B blue, A violet); 5 large type; 6 hand tags; 7 g01 board in 6; 8 framed card and five bullets; 9 the squares' total bottoming out.
- **One idea at a time:** least squares (2), A and B (3), the check (4), comparison (5), the calculator (6), the chart (7), the functions (8).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible; 10 s each; feedback about 27 s and 27 s.
- **Avoided double teaching:** b05's statistics mode, b04a's mean point and b04b's y = mx + c are grey chips; Year 11 spreadsheet charts are a grey chip.
- **Standard 1 path:** not applicable (Standard 2 only); the final frame rejoins b07's shared opening.
- **Syllabus coverage:** `ci9bd861ac` (3, 4, 6, A1); `ci3f69b9d4` (7, 8, A2); key notes 1 to 5.
- **Out of scope by design:** formulas for A and B (MS-65); predictions and reliability (b07).

## Practice questions and model answers

**Attempt 1 (scene 10; pack question 1 with (c) to the nearest dollar, original, HSC style, 4 marks suggested, not an official marking scheme).** "A rideshare driver records the distance and fare of six trips. Distance (km): 3, 5, 8, 12, 15, 20. Fare ($): 12, 15, 21, 27, 32, 41. (a) Use your calculator to find the equation of the least-squares regression line, with values correct to 2 decimal places. (b) Interpret the gradient in context. (c) Use the line to estimate the fare for a 10 km trip, to the nearest dollar."
Model answer: (a) fare = 1.70 × distance + 6.83 (A = 6.8345…, B = 1.6982…). (b) Each extra kilometre adds about $1.70 to the predicted fare. (c) 1.70 × 10 + 6.83 ≈ $24. Classic mistake (crossed): "fare = 1.70 + 6.83 × distance".

**Attempt 2 (scene 12; pack question 2, original, HSC style, 3 marks suggested).** "A spreadsheet has the kiosk's temperatures (°C) in A2:A6 and ice creams sold in B2:B6. A student types =SLOPE(A2:A6,B2:B6) and =INTERCEPT(A2:A6,B2:B6). (a) Explain the student's mistake. (b) Write the correct formulas. (c) Describe a quick check that the final line is correct."
Model answer: (a) SLOPE and INTERCEPT need the y range (ice creams, column B) first and the x range second; the student's order fits a different line. (b) =SLOPE(B2:B6,A2:A6) and =INTERCEPT(B2:B6,A2:A6). (c) Put the mean temperature (25) into the line: it must give the mean number of ice creams (77). Classic mistake (crossed): swapping only SLOPE.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Kiosk | A = −63.0862069; B = 5.603448276; y = 5.60x − 63.09; (25, 77); squares 56 (line by eye) and 37.8 (least squares) | 1 to 5, A2 |
| Comparison | 27°C: 89 and about 88; gradients 6 and 5.60; intercepts −73 and −63.09 | 5 |
| Work hours | A = 89.3; B = −1.7; y = −1.7x + 89.3; CORREL −0.8996; check 74; swapped −0.476, 44.224, 39.94 | 6 to 8 |
| A1 | A = 6.8345…; B = 1.6982…; 1.70 and 6.83; 23.83 → $24 | 10, 11 |
| A2 | ranges A2:A6, B2:B6; 25 → 77 | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact fractions and Python `statistics.linear_regression` (19 Nov 2026, scratchpad `b/verify.py`, run with `python -I`); Codex to re-check.

- Kiosk: B = 325/58 = 5.6034483; A = −3659/58 = −63.0862069; 5.6034483 × 25 − 63.0862069 = 77; at 27: 88.2069.
- Kiosk sums of squared vertical gaps: line by eye y = 6x − 73: 25 + 1 + 4 + 25 + 1 = 56; least squares: 1095/29 = 37.759.
- Work hours: A = 89.3; B = −1.7; 89.3 − 1.7 × 9 = 74; CORREL −0.8995554; =SLOPE(A2:A9,B2:B9) = −0.476; =INTERCEPT(A2:A9,B2:B9) = 44.224; 44.224 − 0.476 × 9 = 39.94.
- Rideshare: A = 2809/411 = 6.8345499; B = 698/411 = 1.6982968; at 10: 23.8175; rounded 1.70 × 10 + 6.83 = 23.83.

## Memory aid check

- **"A alone, B with x."** with key line **"Spreadsheet: y range first. Check: the line gives the mean of y at the mean of x."** From the site's card 08 ("A is the intercept and B is the gradient, in that order") and card 09 ("SLOPE and INTERCEPT want the y range first"; the mean-point check). Meaning, as said in scenes 3, 4, 8 and 9. Assumptions checked: the calculator's form is y = A + Bx (some calculators write a + bx; the aid holds for either letter pair because it names position, not letters, and scene 3 shows the form on screen); the mean-point check holds exactly only for the least-squares line (scene 4 says "always" for this line; b04a said "near" for a line by eye); passing it catches mistakes but does not prove a line is the least-squares line, because the kiosk's line by eye also passes (25, 77), so scene 4 says "the check is passed", not "the line is right" (Revision 2). It helps a new case: a screen showing "A = 12.4, B = 0.8" gives y = 0.8x + 12.4.
- **Considered, not used:** "A is first, so A is the start" (true for the intercept, but "first" is the very confusion with y = mx + c).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,763 characters** (Revision 2; Revision 1: 5,502), 15 scene headings. Characters per scene (1 to 15): 375, 609, 402, 443, 403, 751, 345, 515, 148, 358, 356, 376, 363, 244, 75.

At 13.3 characters per second the speech is about 433 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the squares (2, about 2 s more in Revision 2 for the squaring demonstration), the rearranging row (3), the overlay (5), the calculator table (6), the spreadsheet chart (7) and the swap (8) about 36 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 537 s** (Revision 2; Revision 1 about 515 s), under the 570 s cap. Feedback speech: about 27 s and 27 s.

Reserve trims if the voiced take runs long: scene 5's last sentence (about 6 s; the chips stay); scene 2's "Regression line just means a line used to predict y from x." (about 4 s; it can move to a grey chip).

## Scene list and build ids

Lesson key `m-s12b06` (route math-s12-b06). Explainer folder `src/explainer/lessons/math-s12-b06`; build inputs in `docs/production/claude-pm/lessons/math-s12-b06/` (at voicing).

In order (15 scene headings): hook-a-and-b, smallest-squares, a-and-b-roles, mean-point-check, against-line-by-eye, worked-calculator, spreadsheet-trendline, functions-order-trap, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-b07, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | b05's frame; A and B light |
| 30 to 70 s | 2 | Squares shrinking |
| 70 to 100 s | 3 | A and B rewritten |
| 100 to 125 s | 4 | Mean-point check |
| 125 to 155 s | 5 | Against the line by eye |
| 155 to 225 s | 6 | g01 board: the calculator |
| 225 to 245 s | 7 | The spreadsheet chart |
| 245 to 290 s | 8 | Functions and the swap |
| 290 to 305 s | 9 | Framed memory card |
| 305 to 415 s | 10 to 13 | Question cards and countdowns, then feedback |
| 415 to 435 s | 14 | b07's frame |
| 435 to 481 s | 15 | Key notes, then a silent return to scene 14's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: b05's last frame continues into 1; 1 to 2 stage change; 2 to 3 stage change; 3 to 4 camera continue; 4 to 5 camera continue; 5 to 6 clear change to the board; 6 to 7 stage change; 7 to 8 camera continue; 8 to 9 stage change; attempts and feedback: the card shrinks to the top; 13 to 14 board clear; 14 to 15 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-b06-learning-review.md`, `science_check` = `checks/m-s12-b06-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, opened at full size): `maths/ma12-calculator-v1.png` (plain, unbranded; the screen area takes the coded results screen, as b05). `maths/ma12-phone-v1.png` (a plain phone; A1's picture). `ms12-beach-kiosk-v1.png` (t05's brief with b01's addendum).

Coded: plots, squares, lines, rows, the calculator's table and results screens, the spreadsheet, chart, menus, formula bar and check cell, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, `StudioPlot`, `StudioToolPanel` STAT mode (b05), SpreadsheetGrid (b04a's chart and trendline), ScatterBoard (b01 to b05), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row b06): ScatterBoard **squared-gap squares** with a live total that follows a moving trial line and settles at the least-squares minimum; SpreadsheetGrid **trendline equation label**, **formula bar** showing SLOPE, INTERCEPT and CORREL, a **check cell**, and the **argument-order swap** (ranges trade places, values recompute, the check cell turns red, then back). Check: kiosk totals 56 (line by eye) and 37.76 (least squares); the work-hours check cell reads 74, then 39.94 swapped.

## Codex asset brief (Maths S12 B06)

No new plate. Append "b06: no plate needed; calculator and phone reused" to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used"; in particular confirm the squares readout values (56 and 37.8).
2. Confirm the two syllabus quotes match the route-inputs JSON exactly and are labelled Standard 2 only.
3. Confirm y = mx + c with m and B blue and c and A violet everywhere, "b" never names the intercept (ruling 66), no formula for A or B appears (MS-65), and the calculator and spreadsheet are unbranded.
4. Confirm both attempts carry every demand and given, and neither card shows an answer.
5. Confirm scene 1 opens on b05's final frame exactly, and scene 14's frame is b04a's right panel at full width (uniform 1.3) with only the label changed, matching b07 scene 1's opening.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, no digits in narration, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Least-Squares Regression: Calculator and Spreadsheet | Year 12 Maths Standard

(Title length: 77 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson09.sa.html

Your calculator's statistics screen shows A and B as well as r. What line do they describe? See what "least squares" means in one picture, then read the calculator's y = A + Bx correctly (A is the intercept, B is the gradient) and rewrite it as y = mx + c. Check any least-squares line with the mean point, compare it with a line drawn by eye, and build the same line in a spreadsheet with a linear trendline and the SLOPE, INTERCEPT and CORREL functions, without falling into the order trap. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Bivariate data analysis. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Determine the equation of the least-squares regression line for a bivariate dataset using a scientific calculator"
"Use a spreadsheet to construct a scatter plot and the least-squares regression line for a bivariate dataset"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c

Builds on: Pearson's Correlation Coefficient r and Line of Best Fit: Gradient, Intercept and Equation. Next: Interpolation and Extrapolation: Trusting Predictions.

#Year12Maths #MathsStandard #Regression #HSCScience

## Open decisions

- **1. The squares picture (root). Closed: ruling 77 keeps it; Revision 2 adds the reason for squaring.** Kept (pack: optional) because it is the only way the name "least squares" and "the same for everyone" get a reason; it is about 30 s. If cut, scene 2 becomes one sentence and the reason is lost.
- **2. Final frame's line (root).** The shared frame shows the line by eye (y = 6x − 73, no equation), as b04a's panel does, so Standard 1 and Standard 2 open b07 on one picture; the narration says both lines tell nearly the same story inside the data.

## Review notes

- Revision 2 (19 Nov 2026): learning review resolved (3 should fix applied, all under root's decision 2; see "Revision 2"). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.
- Revision 1. Next: student learning review (trace from b05; check that least squares is followable from the picture, that "A alone, B with x" lands, that the mean-point check is computed with full values, that the order trap is shown and caught, that the final frame matches b04a's right panel, that both cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
