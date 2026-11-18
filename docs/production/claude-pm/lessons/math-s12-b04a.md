# Maths S12 B04a: How do we draw a line of best fit, by eye and with digital tools? Following the trend, balancing the points, the mean point, two fair lines, a spreadsheet trendline (the least-squares line, named once), and reading a value off the line (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `a04b.md`, Revision 2 each, and the t-strand resolution logs) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 69; ruling 65 splits the outline's b04 into b04a (both courses) and b04b (Standard 2 only), sharing playlist number 65; ruling 68 puts b04a on the Standard 1 path). Designer's decisions for b01 to b07: `../checks/root-decisions-maths-s12-b01-b07.md` (section 4 records how ruling 65's wording is read). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,292 characters by script (see "Narration length estimate"; Revision 2), 15 scene headings, about 499 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s12-b04a-learning-review.md` (summary `../checks/m-s12-b01-b07-learning-review-summary.md`), with root's rulings 1 to 77 and root's resolution brief of 19 Nov (decisions 1 and 3). Resolution log: `../checks/m-s12-b01-b07-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 4 (turning about the mean point cannot change the gap balance): **accepted** (root's decision 1, reviewer's wording with one colon made a full stop). The scene's last sentence is replaced: "So pin the ruler at the mean point. Here's a surprise. Through the mean point, the gaps above and below always balance, even for a flat line. So turn it until it follows the trend, with points above and below all along the line, not all below at one end and all above at the other." On screen the ruler swings about the ring with the two totals changing together but always equal, stops flat ("56" and "56", "above 2, below 3", the three cooler days ringed "all below" and the two hotter days "all above", a red tag "misses the trend"), then turns up to the blue line ("7" and "7", "above 3, below 2"). New cues "flat" and "other" replace "balance". Students now see that the mean point decides where the line sits and the trend decides its angle, and that equal totals are a check, not a way to choose the angle. Scene 3's "seven and seven" stays true. Every value is rechecked (`work/brief-resolve-standard-b/verify.py`, `python -I`: gradients 0, 2, 5.5, 6 and 12 give 56, 36, 6, 7 and 66 on each side; residuals about the mean point sum to zero at any gradient). The cause chain, teaching checks, visual surprise, memory aid check and the kit check line are updated, and the changed ScatterBoard pivot behaviour is recorded in `../checks/maths-standard-kit-needs-b-p.md`.
2. Optional, attempt 2 (the canteen card line joins the first and last points): **applied** (root's decision 3: the line stays). Feedback 2 adds "This line joins the first and last points, but it's still fair here, because it follows the trend." A grey tag "first to last, but it follows the trend: fair here" rings the two end points. To keep feedback 2 at about 30 s, its other sentences are shortened ("a mean of about twenty-four point seven"; "Up from twenty to the line and across gives about thirty-three drinks"; "Reading the point at nineteen degrees is the slip"). The model answer and author note (g) record why the line is fair (middle residuals +1/3, −5/3, +2/3; the least-squares line within 0.15 at both ends). b07 attempt 1 uses the same card unchanged.

Joins unchanged: scene 1 opens on b03's final frame, and the two-route frame (scene 14; b04b's and b07's openings) is unchanged.

Narration 5,292 characters by script (Revision 1: 5,045), about 499 s with holds; feedback speech about 22 s and 30 s (feedback 2 is 397 characters). Scene 4 is now the longest scene (838 characters, about 63 s): one g01 board with the mean point worked, then the pivot on the same plot. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: fourth video of the Bivariate data analysis strand, playlist order 65 (first half). Shared by Standard 1 and Standard 2. Two-route final frame: Standard 2 to b04b, Standard 1 to b07 (ruling 68). No equation is read or written in this video (Standard 1 has no equation point; b04b teaches it). Pre-design pack: `../pre-design/maths-standard/math-s12-b04.md` (the "b04a" half of its suggested split). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/bivariate-data-analysis/lesson08.sa.html` (SHA256 `7707be28d68f12da65dbf15206e29b9058bb91662bd8ca6d626f53f7e51c30a1`; card 05, "Calculate the mean point ... Balance the points: Roughly half the points should be above the line and half below"; the quick check "7 points are above the line and 3 are below"; card 08, "add a Trendline, choose Linear" and "Your by-eye line was one reasonable line among many; the digital line is the same line every time"; the activity's kiosk data and its line through (18, 35) and (32, 119)). Card 02's "It minimises the total vertical distances" is not taught (MS-65). Route entry: `math-s12-b04` in `../../programme/maths-standard-route-inputs-6.json` (b04a part). Visual system: maths studio kit; the beach kiosk plate; the scatter, ruler, mean point and spreadsheet coded.

Owner rules applied: plates for real objects, code for diagrams and data; no people, hands or faces (the "ruler" is a coded drawing tool, moved by the camera, not a hand); one main question; one stage at a time; words before symbols ("the average temperature and the average number of ice creams" before "mean point" and its symbols); a coded, unbranded spreadsheet; conversational narration; two attempts with "Pause here to answer." and 10 s countdowns, the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a beach kiosk, an e-bike's battery range, a school canteen); Australian spelling; no em dashes; all text above y = 950.

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12, Bivariate data analysis), quoted from `../../programme/maths-standard-route-inputs-6.json`:

Standard 2:
- `cid27cc8e6`: "Create a line of best fit on a scatter plot for a bivariate dataset, by eye and with digital tools"

Standard 1:
- `ci1a3b6d30`: "Create a line of best fit on a scatter plot for a bivariate dataset, by eye and with digital tools"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852 (Standard 1)

**Boundary:** starts from b03's final frame exactly (b03 scene 14): the kiosk plate at the left; the kiosk scatter at the right (15 to 35°C, 30 to 130 ice creams, break marks, five points); a translucent ruler lying across the cloud from about (17, 45) to (33, 115); chip "one line through the middle?"; label "Next: the line of best fit"; chips "Next" and "?". Recalls b02 (the scatter plot; strong, positive, linear), Year 11 d11 (the mean) and l01 (reading a value from a graph) in a phrase or grey chip. Teaches: what a line of best fit is (one straight line following the trend, points scattered evenly either side, touching none necessarily); why joining the first and last points fails; balancing the points and the gaps; the mean point and why the line goes through or near it; two fair lines by eye; a spreadsheet's linear trendline (and a graphing app or calculator) giving one line every time, named once as the least-squares line; comparing the two; reading one value off the line. Stops before the equation (b04b, Standard 2) and before judging predictions (b07).

## Decisions

- **Anchor: the kiosk's five points (ruling 65)** and the site's own line through (18, 35) and (32, 119) (y = 6x − 73, not written here): it passes through the mean point (25, 77) and leaves three points above (gaps 5, 1, 1) and two below (gaps 2, 5), so the gaps balance at 7 and 7. The first-and-last line through (18, 40) and (32, 120) leaves all three middle points below it (60 against 62.9, 75 against 80, 90 against 97.1).
- **Ruling 65 read as follows (decisions file section 4):** b04a covers both courses' point in full: by eye, then with digital tools (a spreadsheet trendline, with a graphing app or calculator named as doing the same), and uses the line once to read a value. The digital line is named once as "the least-squares line" with its plain meaning ("placed by a fixed rule, so everyone gets the same line"); its equation and the calculator steps are b06 (Standard 2). No equation is shown, so Standard 1 has nothing to skip.
- **Mean point as a guide, not a law (pack decision).** "A line of best fit should pass through or very near it." The computer's line passes through it exactly (shown, not proved; b06 uses it as a check).
- **Two fair lines:** a second line through the mean point with gradient 5.5 (two above, three below). Said as "a judgement, so small differences are expected", answering the site's true-or-false item.
- **Reading a value:** 20°C (not 27°C, which b07 uses, and not 30°C, which b07's final frame uses): the drawn line reads 47, the computer's line about 49. "How far we can trust readings like this" is handed to b07 (Standard 1) and b04b (Standard 2) by the two-route frame.
- **Digital tool (unbranded):** a coded spreadsheet (SpreadsheetGrid with a chart): two columns typed, "insert scatter chart", "add trendline: linear". The trendline's equation label is left off ("display equation" is b06). A graphing app and a calculator are named in one sentence with a small coded app screen, no brands.
- **Simulations (standard item 3).**
  1. **Ruler by eye** (scenes 2 to 4; ScatterBoard draggable ruler line): the ruler moves and turns live; a counter "above 3, below 2" updates as points change sides; vertical gap sticks hang between each point and the ruler (ink above, grey below) with running totals "gaps above 7, gaps below 7"; in scene 4 the ruler pins at the mean point and pivots: the two gap totals change together but stay equal at every angle (56 and 56 when flat, 7 and 7 on the line by eye), while the above-and-below counter and the "all below" and "all above" tags change, so the trend, not the totals, sets the angle (Revision 2; recorded in `../checks/maths-standard-kit-needs-b-p.md`).
  2. **Spreadsheet to trendline** (scene 6; SpreadsheetGrid): cells A1 to B6 fill row by row ("temp (°C)", "ice creams"); a scatter chart grows beside the grid; the trendline menu opens on "Linear" and the line draws across the chart.
- **Colour roles (the strand's).** Temperature and x amber; ice creams and y teal; points ink; the line of best fit by eye blue (hand-drawn stroke); a second fair line blue dashed; the computer's trendline ink (thin, ruler-straight); the mean point as an amber vertical and a teal horizontal cross-hair with an ink ring; gap sticks ink above and grey below; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px, counters 44 px, spreadsheet cells 40 px; nothing below 26 px; all text above y = 950. Hand tags: "follows the trend", "needn't touch any point", "first to last: too high", "3 above, 2 below", "gaps balance", "average temp, average ice creams", "pin it here", "balanced, but flat", "the trend sets the angle" (both Revision 2), "both fair", "same line every time", "almost on top", "up, then across". At most two live at once.
- **Stage changes (standard item 2).** b03's frame (1); the first-and-last line (2); balancing with gap sticks (3); the mean point (4); two fair lines (5); the spreadsheet (6); by eye against digital (7); reading at 20°C (8); framed card (9); question cards (10 to 13); the two-route frame (14); key notes (15).
- **Worked example (g01 layout):** scene 4 is the worked step, with task strip "Find the mean point of the kiosk data, and use it to place a line of best fit.", givens card (the five pairs), rows "temperatures: 18 + 22 + 25 + 28 + 32 = 125", "125 ÷ 5 = 25", "ice creams: 40 + 60 + 75 + 90 + 120 = 385", "385 ÷ 5 = 77", framed "mean point (25, 77)" (green), crossed slip "(25, 75)" (caption "75 is the median; the mean is 77").
- **Memory aid.** Framed card: "Follow the trend. Balance the points. Near the mean point." Key line: "By eye: a fair judgement. Digital: the same line every time."
- **Visual surprise.** The gaps above and below the line add to exactly the same total (scene 3); turning about the mean point, the totals stay equal even when the ruler is flat (scene 4, Revision 2); the computer's line lands almost on top of the line by eye (scene 7).
- **Plain meanings at first use.** Line of best fit ("one straight line that follows the trend, with the points scattered fairly evenly either side"); trend ("the general direction of the points"); mean point ("the average x and the average y, plotted as one point"); trendline ("a spreadsheet's line of best fit"); least squares ("a fixed rule a computer uses to place the line, so everyone gets the same line"); by eye ("drawn with a ruler, by judgement").
- **Attempts (original, HSC style).** A1 (original, from the pack's quick-check idea; a picture on the card): three lines A, B, C on an e-bike's age against its range on a full charge (invented, labelled); B is best (through the mean point; 3 above, 3 below); crossed "A: it goes through two points" (caption "it needn't touch any point; balance them"). A2 (pack question 2, part (c) moved to 20°C): the canteen's mean point (24.7, 45) and a reading at 20°C (about 33, accept 31 to 35); crossed "30: the point at 19°C" (caption "read from the line, not a point").
- **Mistake scene:** none separate. Joining first and last points (2 said, A1 crossed); counting points but ignoring the gaps (3, said); the median for the mean (4 crossed); thinking a different line by eye is wrong (5); reading from a data point instead of the line (A2 crossed).
- **Cause chain taught, in order:** (1) a line can only summarise the trend if it sits in the middle of the cloud, so the first-and-last line, too high in the middle, fails (2); (2) "in the middle" means the points, and their gaps, balance above and below (3); (3) the mean point is the cloud's centre, so a balanced line passes through or near it; every line through it balances the gaps, even a flat one, so pinning there fixes where the line sits and the trend fixes its angle (4); (4) judgement differs a little between people, so small differences are expected (5); (5) a computer follows one fixed rule, so its line is the same for everyone, and it also passes through the mean point (6); (6) a fair line by eye is close to it inside the data (7); (7) the line gives a value for any temperature by going up and across (8).
- **Entry knowledge (route):** math-s12-b02 (scatter plots; strong, positive, linear); math-s11-d11 (the mean); math-s11-l01 (reading a graph). Recalled in a phrase or grey chip ("Year 11: the mean = total ÷ how many").
- **Handoff (two routes; to math-s12-b04b, "Line of Best Fit: Gradient, Intercept and Equation", and to math-s12-b07, "Interpolation and Extrapolation: Trusting Predictions").** Scene 14's frame, split by a thin grey rule at about x = 960, exactly as decisions file section 2, item 4 (repeated here). Left panel, "Standard 2" (x 0 to 950): the kiosk scatter (about 860 × 560 px; 15 to 35°C across with a break mark; 0 to 140 ice creams up, no break, so the line meets the left edge at 17; five ink points); the line of best fit by eye (blue) drawn across the whole plot, from (15, 17) to (35, 137), through (18, 35) and (32, 119), with no points marked on it; under the plot an equation strip, 48 px: "y = ?x + ?" with the first "?" blue and the second violet; chip "what's its equation?"; label "Standard 2 next: the line's equation". Right panel, "Standard 1" (x 970 to 1920): the kiosk plate (about 260 px wide) at the panel's left; the kiosk scatter on wider axes (about 600 × 520 px; 5 to 50°C across, amber; −40 to 220 ice creams up, teal; a solid grey zero line; break mark at the origin); the same line, blue, solid from 18 to 32°C and dashed from 10 to 18°C and from 32 to 45°C; tags "10°C?" at the lower dashed end and "45°C?" at the upper (amber, 32 px); chip "can we trust these?"; label "Standard 1 next: can we trust a prediction?". Chips "Next" and "?" at the bottom right of the frame. No equation value and no prediction is shown. b04b opens on the left panel; b07 opens on the right panel; b06's final frame repeats the right panel at full width (the b06 design).
- **Invented data (ruling 69):** every dataset, study or price in this video other than the kiosk's five days and the site's own work-hours and explorer data carries a small grey "invented data" (or "example price") tag on screen, question cards and feedback included (28 px, top right of the plot or card).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Kiosk sums: 125 and 385; mean point (25, 77); median of ice creams 75 (the crossed slip).
  (b) First-and-last line through (18, 40) and (32, 120): gradient 80/14 = 40/7; at 22, 62.857; at 25, 80; at 28, 97.143 (all three middle points below).
  (c) Line by eye through (18, 35) and (32, 119): y = 6x − 73 (not shown); gaps +5, +1, −2, −5, +1; above 5 + 1 + 1 = 7; below 2 + 5 = 7; through (25, 77).
  (d) Second fair line: through (25, 77), gradient 5.5: at 18, 38.5; 22, 60.5; 28, 93.5; 32, 115.5; gaps +1.5, −0.5, −2, −3.5, +4.5; two above (6), three below (6).
  (e) Computer's line (least squares): y = 5.6034x − 63.086 (not shown; exact 325/58 and −3659/58); through (25, 77) exactly; at 20, 48.98; the line by eye at 20, 47. Within 18 to 32°C the two lines differ by at most 3.5 ice creams (at 18: 35 against 37.78; at 32: 119 against 116.22).
  (f) A1 e-bike (invented): ages 0.5, 1, 1.5, 2, 2.5, 3 years; range 99, 94, 92, 89, 87, 85 km; mean point (1.75, 91). Line A through (0.5, 99) and (3, 85) (gradient −5.6): the four middle points (94, 92, 89, 87) sit below its values (96.2, 93.4, 90.6, 87.8). Line B: the least-squares line y = −5.3714x + 100.4 (through (1.75, 91)); gaps +1.29, −1.03, −0.34, −0.66, +0.03, +0.71: three above, three below. Line C: line B lowered by 0.9 (y = −5.3714x + 99.5): five above, one below (the 1-year point, −0.13).
  (g) A2 canteen (invented): (16, 22), (19, 30), (23, 41), (26, 47), (30, 60), (34, 70); sums 148 and 270; mean point (24.67, 45). Card line through (16, 22) and (34, 70), gradient 8/3: at 24.67, 45.11 (passes near the mean point); at 20, 32.67 (about 33); least squares at 20, 32.54. It also passes (19, 30); the middle points sit +1/3, −5/3 and +2/3 from it, and the least-squares line is within 0.15 of it at 16 and 34, so it is a fair line that follows the trend (Revision 2, root's decision 3; rechecked in `work/brief-resolve-standard-b/verify.py`).
  (h) Pronunciations: "twenty-five comma seventy-seven"; "twenty-four point seven comma forty-five".

Main question: *No single line goes through all five of the kiosk's points. How do we draw a line of best fit, by eye and with digital tools?*
Entry knowledge (b02; Year 11 d11, l01): the scatter plot; the mean; reading a graph.
Stops after: the line by eye (trend, balance, mean point), two fair lines, a spreadsheet trendline, comparing them, one reading. No equation, no judging predictions.
Handoff: two routes: Standard 2 to b04b ("what's its equation?"); Standard 1 to b07 ("can we trust these?").

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): temperature and x amber; ice creams and y teal; points ink; line by eye blue; computer's line ink; mean point amber and teal cross-hairs; gap sticks ink and grey; answer green; mistake red. Header strip "MATHEMATICS STANDARD · BIVARIATE DATA ANALYSIS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: one line through the middle
> Here's the kiosk's scatter plot, with a ruler lying across it. The points sit close to a straight line, but no single line goes through all five. One line that sums them up would help the kiosk plan, and predict its sales. So which line sums them up best, and how do we draw it, by eye and with a computer? That's called a line of best **fit**.

Visual: opens on b03's final frame exactly. On the first sentence the label and the chips "Next" and "?" fade, and the plot grows to about 1,250 × 760 px with the plate small at the left (about 320 px). On "no single line" the ruler slides to touch two points, then three, missing the others each time (short grey gap sticks flash). On "by eye" the ruler settles back; on "computer" a small grey spreadsheet icon blinks at the top right. On "fit" heading "The line of best fit" writes on, and the chip "one line through the middle?" moves to the top right as the question chip.

### 2. what the line should do
> A line of best fit is one straight line that follows the trend of the points, with them scattered fairly evenly on either side. It doesn't have to pass through any of the points. Here's a tempting mistake. Join the first point to the last one. Now look where the other three points end up. They're all below the line. It's too high in the middle, so it doesn't sum up the **trend**.

Visual: camera continue. A label writes, 40 px: "line of best fit: follows the trend, points evenly either side" (hand tag "follows the trend"); hand tag "needn't touch any point". On "first point to the last" simulation 1: the ruler snaps to (18, 40) and (32, 120) and its stroke turns grey; on "three points" gap sticks drop from the line to the 22, 25 and 28°C points (all grey, below); the counter reads "above 0, below 3". On "trend" a red "too high" bracket marks the middle of the line (hand tag "first to last: too high"); the grey line fades.

### 3. balance the points, and the gaps
> A good line balances the points. Roughly as many should sit above it as below, and the gaps should balance too. Let's move the ruler down a little, and turn it. Now three points are above and two are below. But counting isn't everything, because one point far above could outweigh two just below. So look at the gaps. The ones above add to seven ice creams, and the ones below add to seven too. That's a fair **balance**.

Visual: camera continue: simulation 1. The ruler slides down and turns live to the line through (18, 35) and (32, 119), drawn blue as it settles; the counter updates as points change sides and settles on "above 3, below 2" (hand tag "3 above, 2 below"). Gap sticks hang from each point to the line, ink above ("5", "1", "1" at 18, 22 and 32°C) and grey below ("2", "5" at 25 and 28°C), 32 px; running totals, 44 px: "gaps above: 7", "gaps below: 7". On "balance" both totals ring (hand tag "gaps balance").

### 4. a guide: the mean point
> There's a helpful guide, called the mean point. It's the average temperature and the average number of ice creams, plotted as one point. The temperatures add to a hundred and twenty-five, and over five days that's an average of twenty-five degrees. The ice creams add to three hundred and eighty-five, so the average is seventy-seven. So the mean point is twenty-five comma seventy-**seven**, right in the middle of the cloud. A line of best fit should pass through it, or very near it. Using the median, seventy-five, by mistake is the slip. We need the **mean**. So pin the ruler at the mean point. Here's a surprise. Through the mean point, the gaps above and below always balance, even for a **flat** line. So turn it until it follows the trend, with points above and below all along the line, not all below at one end and all above at the **other**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the mean point of the kiosk data, and use it to place a line of best fit." Givens card, 40 px: the five pairs (amber and teal). The plot at the left (about 900 × 600 px). Rows, 52 px: "temperatures: 18 + 22 + 25 + 28 + 32 = 125", "125 ÷ 5 = 25" (amber; grey chip "Year 11: the mean = total ÷ how many"; hand tag "average temp, average ice creams"); "ice creams: 40 + 60 + 75 + 90 + 120 = 385", "385 ÷ 5 = 77" (teal). On "seven" an amber vertical at 25 and a teal horizontal at 77 cross on the plot with an ink ring, framed "mean point (25, 77)" (green); a small grey "(x̄, ȳ)" sits under it. On "slip" a red slip "(25, 75)" writes; on "mean" it is crossed (caption "75 is the median; the mean is 77"). On "pin" the ruler's centre clips to the ring (hand tag "pin it here"). On "always balance" it swings slowly about the ring through a few angles while the gap totals change together and stay equal (passing, for example, "36" and "36", then "66" and "66"); the gap totals ring as a pair each time. On "flat" it stops flat at 77: the totals read "56" and "56" in grey, the counter "above 2, below 3"; the 18, 22 and 25°C points ring with the tag "all below" and the 28 and 32°C points with "all above"; a red tag "misses the trend" sits on the flat ruler (hand tag "balanced, but flat"). On "follows the trend" the ruler turns up to the blue line through (18, 35) and (32, 119): the totals read "7" and "7", the counter "above 3, below 2", and the gap sticks alternate along the line (hand tag "the trend sets the angle"). On "other" the red tag and the flat ruler fade and the blue line gets a green tick. (Revision 2: in Revision 1 the ruler turned "until the points balance", which every line through the mean point already does.)

### 5. two fair lines
> If two people draw a line of best fit by eye, they'll usually get slightly different lines. Here's a second line, a little less steep, also through the mean point. It has two points above and three below. Both lines are fair, and neither one is wrong. A line drawn by eye is a judgement, so small differences are **expected**.

Visual: stage change. The plot full size; the blue line stays; a second line, blue dashed, pivots in through the ring with gradient 5.5; its own counter "above 2, below 3" and gap totals "6" and "6" appear in a smaller box beside the first line's "above 3, below 2". On "expected" both lines get a green tick (hand tag "both fair").

### 6. digital tools: the same line every time
> Digital tools can draw the line for us, and they give everyone the same line. In a spreadsheet, type the temperatures in one column and the ice creams in the next, then insert a scatter chart. Add a trendline, and choose linear. The spreadsheet places the line with a fixed rule, called least squares, so anyone with the same data gets exactly the same line. A graphing app, or a calculator, can do the same from a table of the pairs. And notice, the computer's line also passes through the mean **point**.

Visual: stage change: simulation 2. A coded spreadsheet (about 760 × 480 px; column letters and row numbers 32 px, cells 40 px) at the left: A1 "temp (°C)", B1 "ice creams", rows 2 to 6 typing the five pairs. On "insert a scatter chart" a chart grows at the right (about 900 × 560 px) with the five points; on "trendline" a menu "Trendline: Linear" (cursor highlight, no brand) and the line draws in ink across the chart (hand tag "same line every time"). On "least squares" a grey caption, 36 px: "least squares: a fixed rule, so everyone gets the same line". On "graphing app" a small coded app screen (a table and a plot, unbranded) slides in beside the grid. On "point" the amber and teal cross-hairs at (25, 77) draw on the chart and the ink line passes through the ring.

### 7. by eye against digital
> Let's lay our line by eye over the computer's line. Inside the data, from eighteen to thirty-two degrees, they're almost on top of each other. That's what a well drawn line by eye looks like. The computer's version is the same idea, done exactly the same way every **time**.

Visual: camera continue. The chart enlarges to about 1,250 × 760 px; the blue line by eye slides over the ink trendline; the band from 18 to 32°C tints pale grey; small grey markers show the largest gap between the two lines inside it (under 4 ice creams, no number shown) (hand tag "almost on top"). On "time" the ink line pulses once.

### 8. using the line: one reading
> Now the line is useful. Say the forecast is twenty degrees. Go up from twenty to the line, then across to the ice creams axis. Our line by eye reads about forty-seven, and the computer's line reads about forty-nine. Either way, the line suggests a little under fifty ice creams. How far we can trust a reading like this is a question we'll come back **to**.

Visual: camera continue. An amber guide rises from 20 to the blue line, a teal guide runs across to the axis (`LinkedRiders`), readout, 48 px: "line by eye: about 47"; a second, thinner pair of guides on the ink line: "computer's line: about 49" (hand tag "up, then across"; grey chip "Year 11: reading a graph"). On "to" both readouts gather into "a little under 50" (green).

### 9. memory aid
> Here's the summary. Follow the trend, balance the points, and go through or near the mean **point**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the kiosk plot small, the blue line, the gap sticks and the mean point ring. Main line, hand font 56 px: "Follow the trend. Balance the points. Near the mean point." On "point" the key line, 40 px: "By eye: a fair judgement. Digital: the same line every time." Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Three lines are drawn on a scatter plot of an e-bike's age and its range on a full charge. Line A joins the first and last points, and the four points in between sit below it. Line B passes through the mean point, with three points above and three below. Line C has five points above it and one below. Which is the best line of best fit? Give two reasons. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Three lines are drawn on a scatter plot of an e-bike's age (years) and its range on a full charge (km). Line A joins the first and last points; the four points between them lie below it. Line B passes through the mean point, with three points above it and three below. Line C has five points above it and one below. Which is the best line of best fit? Give two reasons." Picture slot (about 760 × 460 px): the scatter (age 0 to 3.5 years, amber; range 80 to 102 km, teal, break mark; six ink points; grey tag "invented data") with the three lines labelled "A", "B", "C" in ink; the mean point is not marked. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 1 (brief)
> Line B is the best. It passes through the mean point, and it balances the points, three above and three **below**. Line A is too high in the middle, and line C is too low. Choosing line A because it goes through two of the points is the slip. A line of best fit doesn't need to touch any of the **points**.

Visual: the card shrinks to the top (30 px). On the card's plot the mean point's cross-hairs draw at (1.75, 91); line B turns blue; on "below" its counter "above 3, below 3" and framed "Line B: through the mean point; 3 above, 3 below" (green). Lines A and C dim with tags "too high" and "too low". On "slip" a red slip "A: it goes through two points" writes; on "points" it is crossed (caption "it needn't touch any point; balance them"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A school canteen records the top temperature and the cold drinks sold on six days. Here's the table, and a scatter plot with a line of best fit drawn by eye. Find the mean point. Then use the line to estimate the number of cold drinks sold on a twenty degree day. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A school canteen records the top temperature (°C) and the number of cold drinks sold on six days." Table, 40 px: "Top temperature (°C): 16, 19, 23, 26, 30, 34" and "Cold drinks sold: 22, 30, 41, 47, 60, 70". "A scatter plot with a line of best fit drawn by eye is shown. (a) Find the mean point. (b) Use the line to estimate the number of cold drinks sold on a 20°C day." Picture slot (about 700 × 440 px): the scatter (10 to 40°C, gridlines every 2; 10 to 80 drinks, gridlines every 5; six ink points) with the line through (16, 22) and (34, 70) in ink. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 13. feedback 2 (brief)
> The temperatures add to a hundred and forty-eight, a mean of about twenty-four point seven. The drinks add to two hundred and seventy, a mean of **forty-five**. This line joins the first and last points, but it's still fair here, because it follows the trend. Up from twenty to the line and across gives about thirty-three **drinks**. Reading the point at nineteen degrees is the slip. Read from the **line**.

Visual: the card shrinks to the top. Rows, 44 px: "148 ÷ 6 ≈ 24.7", "270 ÷ 6 = 45"; on "forty-five" framed "(a) mean point ≈ (24.7, 45)" (green) and its cross-hairs draw on the card's plot, the line passing just by them. On "first and last points" the line's two end points ring grey and a grey tag writes: "first to last, but it follows the trend: fair here" (Revision 2, root's decision 3; the middle points sit either side of it). Guides up from 20 to the line and across; on "drinks" framed "(b) about 33 drinks (31 to 35 is fair by eye)" (green). On "slip" a red slip "30: the point at 19°C" writes; on "line" it is crossed (caption "read from the line, not a point"). Hold about 1 s.

### 14. handoff: two paths
> That's the line of best fit. From here, there are two paths. If you're doing Standard Two, next we read the line's equation, its gradient and its intercept, straight from the **graph**. If you're doing Standard One, next is the big question about predictions. If the line keeps going, can we trust what it **says**? Pick your **path**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the two-route frame, split by a thin grey rule at about x = 960 (exactly as under Decisions, "Handoff"). On "Standard Two" the left panel builds: the kiosk scatter, the blue line by eye; on "graph" the strip "y = ?x + ?" with a blue and a violet "?", chip "what's its equation?" and label "Standard 2 next: the line's equation". On "Standard One" the right panel builds: the kiosk plate, the scatter on wider axes with the grey zero line, the blue line solid from 18 to 32°C; on "keeps going" it runs on dashed to 10°C and to 45°C; on "says" the tags "10°C?" and "45°C?", chip "can we trust these?" and label "Standard 1 next: can we trust a prediction?". On "path" chips "Next" and "?". Hold about 2 s. No value is worked out. This is b04b's opening frame (left panel) and b07's (right panel); scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Line of best fit: one straight line that follows the trend.
- Balance it: about as many points (and gaps) above as below.
- Mean point (x̄, ȳ): average x, average y. Line goes through or near it.
- By eye: lines differ a little; both can be fair.
- Digital: scatter chart, linear trendline: the same line every time.

Memory aid (framed card, right side, as in scene 9): *Follow the trend. Balance the points. Near the mean point.* Key: *By eye: a fair judgement. Digital: the same line every time.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 14's frame exactly. This is the final frame: b04b opens on its left panel and b07 on its right panel.

## Teaching checks

- **Does it explain causes?** Why the first-and-last line fails: it leaves the middle points on one side (2). Why balance: a summary line sits in the middle of the cloud (3). Why the gaps, not just the count: one far point counts as much as its distance (3). Why the mean point: it is the centre of the cloud, so a balanced line passes near it. Why the trend still decides the angle: through the mean point the gaps always balance, even for a flat line (4). Why lines differ: judgement (5). Why the computer's line is the same for everyone: a fixed rule (6).
- **Misconceptions addressed:** equal gap totals taken as proof of a good line (4, the flat ruler); first-and-last points (2, A1); a line through as many points as possible (2, A1 crossed); median for mean (4 crossed); a different fair line as wrong (5); reading off a data point (A2 crossed).
- **Visual standard, item by item:** 1 the painted kiosk from the first frame; 2 a new stage every 25 to 60 s; 3 the ruler moving with live counts and gap totals, pivoting about the mean point, the spreadsheet drawing its trendline; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 the gap totals matching, the two lines on top of each other.
- **One idea at a time:** the idea of the line (2), balance (3), the mean point (4), fair differences (5), digital (6), comparison (7), a reading (8).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible; 10 s each; feedback about 22 s and 30 s.
- **Avoided double teaching:** the mean is a grey chip and two rows; reading a graph is a grey chip; the equation is left to b04b.
- **Standard 1 path:** the whole video; the right panel of the final frame is Standard 1's exit to b07.
- **Syllabus coverage:** `cid27cc8e6` and `ci1a3b6d30`: "by eye" (2 to 5, A1, A2), "with digital tools" (6, 7); key notes 1 to 5.
- **Out of scope by design:** the equation, gradient and intercept (b04b, Standard 2); the least-squares equation from a calculator (b06); the reliability of predictions (b07).

## Practice questions and model answers

**Attempt 1 (scene 10; original, from the site's quick-check idea, HSC style, 2 marks suggested, not an official marking scheme).** "Three lines are drawn on a scatter plot of an e-bike's age (years) and its range on a full charge (km). Line A joins the first and last points; the four points between them lie below it. Line B passes through the mean point, with three points above it and three below. Line C has five points above it and one below. Which is the best line of best fit? Give two reasons."
Model answer: Line B: it passes through the mean point, and it balances the points (three above, three below). Line A is too high in the middle and line C too low. Classic mistake (crossed): "A: it goes through two points".

**Attempt 2 (scene 12; pack question 2 with part (c) at 20°C and the line given, original, HSC style, 3 marks suggested).** "A school canteen records the top temperature (°C) and the number of cold drinks sold on six days. Top temperature (°C): 16, 19, 23, 26, 30, 34. Cold drinks sold: 22, 30, 41, 47, 60, 70. A scatter plot with a line of best fit drawn by eye is shown. (a) Find the mean point. (b) Use the line to estimate the number of cold drinks sold on a 20°C day."
Model answer: (a) (148 ÷ 6, 270 ÷ 6) ≈ (24.7, 45). (b) Reading up from 20°C to the line and across: about 33 drinks (31 to 35 is reasonable for a line drawn by eye). The given line joins the first and last points, which is still fair here because it follows the trend (the middle points sit either side of it). Classic mistake (crossed): "30: the point at 19°C".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Kiosk | five pairs; sums 125 and 385; mean point (25, 77); median 75 (slip) | 1 to 8 |
| First-and-last line | through (18, 40) and (32, 120); 0 above, 3 below | 2 |
| Line by eye | through (18, 35) and (32, 119); 3 above, 2 below; gaps 5, 1, 1 and 2, 5; totals 7 and 7 | 3, 4, 7, 8, 14 |
| Second fair line | gradient 5.5 through (25, 77); 2 above, 3 below; totals 6 and 6 | 5 |
| Readings at 20°C | by eye 47; computer about 49 | 8 |
| A1 (invented) | e-bike, 6 points; mean point (1.75, 91); B 3 above, 3 below | 10, 11 |
| A2 (invented) | sums 148 and 270; (24.7, 45); about 33 at 20°C | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python `statistics` and exact fractions (19 Nov 2026, scratchpad `b/verify.py`, run with `python -I`); Codex to re-check.

- 18 + 22 + 25 + 28 + 32 = 125; ÷ 5 = 25. 40 + 60 + 75 + 90 + 120 = 385; ÷ 5 = 77. Median 75.
- First-and-last line at 22, 25, 28: 62.857, 80, 97.143 (each above the data values 60, 75, 90).
- y = 6x − 73 at 18, 22, 25, 28, 32: 35, 59, 77, 95, 119; gaps +5, +1, −2, −5, +1; above 7, below 7.
- y = 77 + 5.5(x − 25) at 18, 22, 25, 28, 32: 38.5, 60.5, 77, 93.5, 115.5; gaps +1.5, −0.5, −2, −3.5, +4.5; above 6, below 6.
- Least squares y = (325/58)x − 3659/58: at 25, 77 exactly; at 20, 48.983; at 18, 37.776; at 32, 116.224. y = 6x − 73 at 20 = 47.
- E-bike: mean (1.75, 91); least squares b = −5.3714, a = 100.4; residuals +1.286, −1.029, −0.343, −0.657, +0.029, +0.714; line A at 1, 1.5, 2, 2.5: 96.2, 93.4, 90.6, 87.8; line C (a = 99.5) residuals +2.186, −0.129, +0.557, +0.243, +0.929, +1.614 (five above, one below).
- Canteen: 148 ÷ 6 = 24.667; 270 ÷ 6 = 45; card line at 24.667, 45.111; at 20, 32.667; least squares at 20, 32.540.

## Memory aid check

- **"Follow the trend. Balance the points. Near the mean point."** with key line **"By eye: a fair judgement. Digital: the same line every time."** From the site's card 05 (mean point, balance, extend across the data) and card 08 ("the digital line is the same line every time"). Meaning, as said in scenes 2 to 7. Assumptions checked: "balance" includes the gaps, not only the count (scene 3), so one far point is not outvoted; balance alone does not fix the angle, because every line through the mean point balances the gaps (scene 4, Revision 2), so "follow the trend" comes first on the card; "near the mean point" is a guide, not an exact rule for a line by eye (scene 4: "through it, or very near it"); the computer's line passes through the mean point exactly (scene 6), which b06 uses as a check. It helps a new case: a cloud that falls is balanced the same way (A1's e-bike).
- **Considered, not used:** "Half above, half below" alone (ignores the gaps and the mean point).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,292 characters** (Revision 2; Revision 1: 5,045), 15 scene headings. Characters per scene (1 to 15): 340, 378, 417, 838, 322, 502, 270, 353, 96, 388, 298, 295, 397, 323, 75.

At 13.3 characters per second the speech is about 398 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, two-route frame 2 s) 6 s; settling for the ruler (2, 3), the pivot through flat to the line by eye (4, about 2 s more in Revision 2), the second line (5), the spreadsheet (6), the overlay (7) and the guides (8) about 34 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 499 s** (Revision 2; Revision 1 about 478 s), under the 570 s cap. Feedback speech: about 22 s and 30 s.

Reserve trims if the voiced take runs long: scene 6's "A graphing app, or a calculator, can do the same from a table of the pairs." (about 6 s; the app screen stays silent); scene 7's "That's what a well drawn line by eye looks like." (about 3 s).

## Scene list and build ids

Lesson key `m-s12b04a` (route math-s12-b04, part a). Explainer folder `src/explainer/lessons/math-s12-b04a`; build inputs in `docs/production/claude-pm/lessons/math-s12-b04a/` (at voicing).

In order (15 scene headings): hook-one-line, what-the-line-does, balance-gaps, mean-point, two-fair-lines, spreadsheet-trendline, eye-against-digital, one-reading, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-two-routes, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | b03's frame; the ruler |
| 25 to 60 s | 2 | First to last: too high |
| 60 to 90 s | 3 | Balancing, gap sticks |
| 90 to 150 s | 4 | g01 board: the mean point |
| 150 to 175 s | 5 | Two fair lines |
| 175 to 225 s | 6 | The spreadsheet's trendline |
| 225 to 245 s | 7 | By eye against digital |
| 245 to 275 s | 8 | One reading at 20°C |
| 275 to 290 s | 9 | Framed memory card |
| 290 to 395 s | 10 to 13 | Question cards and countdowns, then feedback |
| 395 to 425 s | 14 | The two-route frame |
| 425 to 471 s | 15 | Key notes, then a silent return to scene 14's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: b03's last frame continues into 1; 1 to 2 camera continue; 2 to 3 camera continue; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera continue; 7 to 8 camera continue; 8 to 9 stage change; attempts and feedback: the card shrinks to the top; 13 to 14 board clear; 14 to 15 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-b04a-learning-review.md`, `science_check` = `checks/m-s12-b04a-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): `ms12-beach-kiosk-v1.png` is t05's brief with b01's addendum (not yet painted). No other plate: the e-bike and canteen attempts are coded scatter plots with "invented data" tags (a plot is the task's picture; no object carries the explanation), and the spreadsheet and app screens are coded and unbranded.

Coded: scatter plots, the ruler, counters, gap sticks, cross-hairs, lines, the spreadsheet, chart and menu, the app screen, guides and readouts, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, `StudioPlot`, `LinkedRiders`, ScatterBoard (b01, b02), SpreadsheetGrid (the a-strand and i-strand kit need), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row b04): ScatterBoard **draggable ruler line** with a live "above n, below m" counter, vertical **gap sticks** (ink above, grey below) with running totals, a **mean-point pin** (amber vertical and teal horizontal cross-hairs with an ink ring) the ruler can clip to and pivot about, and a second line; SpreadsheetGrid **scatter chart with a linear trendline** (no equation label in b04a). Check: the line through (18, 35) and (32, 119) shows "above 3, below 2" and totals 7 and 7; pivoting about (25, 77) the two totals stay equal at every angle (flat: 56 and 56, "above 2, below 3"; gradient 2: 36 and 36; gradient 5.5: 6 and 6, "above 2, below 3"; gradient 12: 66 and 66); the trendline passes through (25, 77).

## Codex asset brief (Maths S12 B04a)

No new plate. The kiosk is t05's brief with b01's addendum (it appears in the final frame's right panel at about 260 px wide; Codex reports its look at that size). Append the check to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm no equation, gradient or intercept value appears anywhere in this video (the final frame's "y = ?x + ?" only), and the spreadsheet is unbranded with no equation label.
4. Confirm both attempts carry every demand and given, A1's picture does not mark the mean point, and neither card shows an answer.
5. Confirm scene 1 opens on b03's final frame exactly; confirm scene 14's left panel matches b04b scene 1's opening and its right panel matches b07 scene 1's opening (decisions file section 2, item 4).
6. Confirm no em dash (U+2014), Australian spelling, the narration count, no digits in narration, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Drawing a Line of Best Fit | Year 12 Maths Standard

(Title length: 51 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson08.sa.html

No single line goes through all of a beach kiosk's points, so which line sums them up best? Learn to draw a line of best fit by eye: follow the trend, balance the points and their gaps above and below, and use the mean point as a guide. See why two fair lines can differ a little, then let a spreadsheet draw the line with a linear trendline, the same line for everyone, and read a value off it. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Bivariate data analysis. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Create a line of best fit on a scatter plot for a bivariate dataset, by eye and with digital tools"
Syllabus content, Standard 1:
"Create a line of best fit on a scatter plot for a bivariate dataset, by eye and with digital tools"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852 (Standard 1)

Builds on: Correlation vs Causation and Scatter Plots: Form, Direction and Strength. Next: Standard 2, Line of Best Fit: Gradient, Intercept and Equation; Standard 1, Interpolation and Extrapolation: Trusting Predictions.

#Year12Maths #MathsStandard #LineOfBestFit #HSCScience

## Open decisions

- **1. Ruling 65's wording (root). Closed: ruling 77 accepts this reading.** Read as: b04a is the full "by eye and with digital tools" point for both courses, the digital line named once as least squares and used once for a reading; the least-squares equation from a calculator stays in b06 (Standard 2). Decisions file section 4.
- **2. Reading at 20°C (root).** Chosen so b07's 27°C and 30°C are fresh; the by-eye line (47) and the computer's line (49) differ by 2, said as "a little under fifty".

## Review notes

- Revision 2 (19 Nov 2026): learning review resolved (1 should fix applied by root's decision 1, 1 optional applied by root's decision 3; see "Revision 2"). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.
- Revision 1. Next: student learning review (trace from b03 for both courses; check that the first-and-last line's failure is visible, that the gaps balance, that the mean point is computed and used as a pivot, that "least squares" lands with its plain meaning only, that the two-route frame is self-explanatory, that both cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
