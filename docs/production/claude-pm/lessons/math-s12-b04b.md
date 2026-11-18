# Maths S12 B04b: How do we read a line of best fit's equation from its graph? The gradient from two far-apart points on the line, its meaning with units, the intercept trap on a broken axis, finding c from a point, and when the intercept means something (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `a04b.md`, Revision 2 each, and the t-strand resolution logs) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 69; ruling 65 (the split; Standard 2 only) and ruling 66 (y = mx + c throughout, never b for the intercept)). Designer's decisions for b01 to b07: `../checks/root-decisions-maths-s12-b01-b07.md`. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,096 characters by script (see "Narration length estimate"), 15 scene headings, about 480 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: Bivariate data analysis, playlist order 65 (second half, shared with b04a; ruling 65). **Standard 2 only.** Standard 1 viewers go from b04a to b07. Pre-design pack: `../pre-design/maths-standard/math-s12-b04.md` (the "b04b" half). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/bivariate-data-analysis/lesson08.sa.html` (SHA256 `7707be28d68f12da65dbf15206e29b9058bb91662bd8ca6d626f53f7e51c30a1`; card 06, "Choose two clearly readable points on the line (not necessarily data points)" and "choose two points on the line that are far apart"; the activity's "(18, 35) and (32, 119)", "m = 84/14 = 6", "y = 6x − 73" and "for each 1°C increase in temperature, ice-cream sales increase by about 6 units"; card 08's work-hours data, used in attempt 2). The site's "y = mx + b" and "b = 35 − 108" are rewritten with c (MS-63, ruling 66). Route entry: `math-s12-b04` in `../../programme/maths-standard-route-inputs-6.json` (b04b part). Visual system: maths studio kit; the beach kiosk plate; plots, triangles and the extended axis coded.

Owner rules applied: plates for real objects, code for diagrams and data; no people, hands or faces; one main question; one stage at a time; words before symbols ("how steep: the rise divided by the run" before m; "where the line crosses the vertical axis, the value of y when x is zero" before c); conversational narration; one worked example on the g01 board; two attempts with "Pause here to answer." and 10 s countdowns, the full worded question and its graph on screen; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a beach kiosk, van hire, a rideshare fare, part-time work); Australian spelling; no em dashes; all text above y = 950.

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12, Bivariate data analysis), quoted from `../../programme/maths-standard-route-inputs-6.json`:

Standard 2:
- `ci880296d0`: "Determine and interpret the intercept and gradient of the line of best fit from a given graph to form an equation of the line"

Standard 1: no matching content point (Standard 1 draws and reads the line; b04a and b07).

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c (Standard 2)

**Boundary:** starts from b04a's final frame, left panel (b04a scene 14; decisions file section 2, item 4): split rule; left panel "Standard 2", the kiosk scatter (15 to 35°C with a break mark across; 0 to 140 ice creams up, no break), the blue line by eye drawn across the plot (through (18, 35) and (32, 119), no points marked on it), the strip "y = ?x + ?" (blue and violet "?"), chip "what's its equation?", label "Standard 2 next: the line's equation"; right panel "Standard 1" (the shared b07 frame); chips "Next" and "?". On the first sentence the right panel, rule, tags, label and chips fade, and the left panel grows by a uniform 1.4. Recalls Year 11 l01 and l02 (gradient as rise over run; y = mx + c; the y-intercept) and b04a (the line by eye, the mean point) in a phrase or grey chip. Teaches: m and c on a graph in words; the gradient from two well-separated points read on the line (not data points); the gradient's meaning with units; the intercept trap when the x axis does not start at zero; c from a point and the gradient; the equation in symbols and in words; the mean-point check; when the intercept means something (x = 0 inside or near the data) and when it does not. Stops before r (b05) and predictions (b07).

## Decisions

- **Anchor: the site's own line, kiosk data (ruling 65).** Through (18, 35) and (32, 119): m = 84 ÷ 14 = 6; c = 35 − 108 = −73; y = 6x − 73; through the mean point (25, 77). The gradient means about 6 more ice creams for each extra degree; the intercept means −73 ice creams at 0°C, which is impossible because 0°C is far outside 18 to 32°C.
- **Axes chosen to set the trap honestly.** The x axis starts at 15°C (break mark); the y axis starts at 0 (no break), so the line meets the left edge at y = 17 (6 × 15 − 73), which a student could misread as c. The narration names it as the slip. b04a's left panel uses the same axes, so the join is exact.
- **c found two ways.** Substituting a point into y = 6x + c (the method that always works), then a live check that stretches the x axis back to 0 and the line to −73.
- **Notation (ruling 66).** y = mx + c everywhere; m blue, c violet; "b" never appears. The calculator's A + Bx is b06's business.
- **When c means something.** One short scene with an invented van-hire line through (0, 90) and (200, 150) (example prices, tagged): c = $90 is the cost before driving at all, and 0 km is a real possibility. Attempts 1 and 2 then practise both cases (a booking fee; a mark with no paid work).
- **Simulations (standard item 3).**
  1. **Sliding rise-over-run triangle** (scene 3; `StudioTangentTriangle` chord style on a straight line): a right-angled triangle with its hypotenuse on the line slides along it and grows and shrinks; its run (amber) and rise (teal) readouts change while "rise ÷ run = 6" stays fixed; it settles on the far-apart points (18, 35) and (32, 119), run 14, rise 84.
  2. **Stretch to zero** (scene 6): the x axis's break mark opens and the axis stretches back to 0 (the plot rescaling live, the y axis extending below 0 to −80); the line extends as a dashed blue line down to cross the vertical axis at −73 (violet ring).
- **Colour roles (the strand's).** Temperature and run amber; ice creams and rise teal; points ink; the line and the gradient m blue; the intercept c violet; the mean point amber and teal cross-hairs; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px; nothing below 26 px; all text above y = 950. Hand tags: "start at c, up m each step", "on the line, far apart", "not data points", "rise ÷ run", "same ratio anywhere", "per degree", "this axis starts at 15", "x = 0 is way over here", "put a point in", "no meaning here", "zero makes sense here", "units!". At most two live at once.
- **Stage changes (standard item 2).** b04a's left panel (1); m and c in words on a plain line (2); g01 board: the gradient (3); its meaning (4); the trap and c (5); stretch to zero and the equation (6); the mean-point check (7); van hire (8); framed card (9); question cards (10 to 13); b05's frame (14); key notes (15).
- **Worked example (g01 layout):** scenes 3 to 6 on one board. Task strip "Find the equation of the kiosk's line of best fit. Interpret its gradient and its intercept in context." Givens card "two points on the line: (18, 35), (32, 119)". Rows "m = rise ÷ run = (119 − 35) ÷ (32 − 18) = 84 ÷ 14 = 6"; "35 = 6 × 18 + c"; "c = 35 − 108 = −73"; framed "y = 6x − 73"; framed meanings "gradient: about 6 more ice creams per °C" and "intercept: −73 at 0°C: no meaning (0°C is outside the data)"; crossed slip "c = 17" (caption "this axis starts at 15°C, not 0").
- **Memory aid.** Framed card: "m: rise ÷ run, with units. c: y when x is zero." Key line: "Read two far-apart points on the line. Check the axis starts at zero before reading c, or put a point in."
- **Visual surprise.** The triangle slides and changes size, and its ratio never moves from 6 (scene 3); the line plunges through zero to −73 when the axis stretches back (scene 6).
- **Plain meanings at first use (Year 11 recall).** Gradient ("how steep: the rise divided by the run"); rise ("how far the line goes up"); run ("how far it goes across"); intercept ("where the line crosses the vertical axis: the value of y when x is zero"); in context ("what the number means for the kiosk, with units").
- **Attempts (original, HSC style).** A1 (pack question 1): a rideshare line through (5, 14) and (25, 44): m = 1.5 ($1.50 per km), c = 6.5, y = 1.5x + 6.5; c read as a booking fee; crossed "gradient = 30" (caption "rise ÷ run: 30 ÷ 20"). A2 (original, on the site's card 08 data): the work-hours graph with its line through (0, 89) and (20, 55): m = −1.7, c = 89 (read from an axis that does start at 0), y = −1.7x + 89; 0 hours is inside the data (0 to 19), so c means a predicted mark of about 89 with no paid work; crossed "m = 1.7" (caption "the line falls: negative").
- **Mistake scene:** none separate. Gradient from data points off the line (3, said); gradient without units (4, said); c read off a broken axis (5 crossed); a meaningless intercept interpreted (6); rise and run swapped or not divided (A1 crossed); a dropped minus sign (A2 crossed).
- **Cause chain taught, in order:** (1) the equation says "start at c, then go up m for every step across", so m and c are all that is needed (2); (2) a straight line rises the same amount for every step, so any two points on the line give the same rise ÷ run, and far-apart points reduce reading error (3); (3) m is a rate, so it carries units: ice creams per degree (4); (4) c is the value at x = 0, so if the axis does not start at 0 the edge is not c, and substituting a point finds c instead (5); (5) the line carried back to 0 lands on c, and c only means something if 0 is inside or near the data (6, 8); (6) a line of best fit passes near the mean point, so the equation should give about ȳ at x̄ (7).
- **Entry knowledge (route):** math-s11-l01 (gradient and y-intercept from a graph), math-s11-l02 (y = mx + c), math-s12-b04a (the line by eye; the mean point). Recalled in a phrase or grey chip ("Year 11: y = mx + c", "b04a: the mean point (25, 77)").
- **Handoff (to math-s12-b05, "Pearson's Correlation Coefficient r").** Scene 14's frame: the kiosk plate at the left (about 420 px wide); the kiosk scatter (about 1,000 × 640 px; 15 to 35°C with a break mark, 0 to 140 ice creams) with the blue line and the small grey strip "y = 6x − 73" under it; at the right, an olive semicircular dial (`TargetDial`, radius about 220 px) with ticks "−1", "0" and "1" (40 px), no needle; chip "how strong, as one number?"; label "Next: Pearson's correlation coefficient"; chips "Next" and "?". No r value is shown. This is b05's opening frame.
- **Invented data (ruling 69):** every dataset, study or price in this video other than the kiosk's five days and the site's own work-hours and explorer data carries a small grey "invented data" (or "example price") tag on screen, question cards and feedback included (28 px, top right of the plot or card).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Kiosk line: m = (119 − 35)/(32 − 18) = 84/14 = 6; c = 35 − 6 × 18 = −73; at 15, 17 (the left edge); at 25, 77 (the mean point); zero at 73/6 ≈ 12.2°C. Mean point (25, 77). Least squares for comparison (b06): y = 5.6034x − 63.086.
  (b) Sliding triangle positions for the build: runs 2, 5 and 14 give rises 12, 30 and 84.
  (c) Van hire (invented, example prices): line through (0, 90) and (200, 150): m = 60/200 = 0.3 ($0.30 per km), c = 90. No data values are worked.
  (d) A1: m = (44 − 14)/(25 − 5) = 30/20 = 1.5; c = 14 − 1.5 × 5 = 6.5; y = 1.5x + 6.5.
  (e) A2: site card 08 data (0, 89), (3, 76), (5, 83), (8, 82), (10, 74), (12, 69), (15, 69), (19, 50); card line through (0, 89) and (20, 55): m = −34/20 = −1.7; c = 89. (The least-squares line, b06, is y = −1.7x + 89.3.)
  (f) Pronunciations: "y equals six x minus seventy-three"; "one point five"; "minus one point seven".

Main question: *The kiosk's line of best fit is drawn. What is its equation, and what do its gradient and intercept mean for the kiosk?*
Entry knowledge (Year 11 l01, l02; b04a): gradient and intercept; y = mx + c; the line by eye and the mean point.
Stops after: the gradient from the graph with its meaning, the intercept (trap, substitution, meaning or none), the equation, the mean-point check. No r, no reliability.
Handoff: math-s12-b05: "how strong, as one number?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): temperature and run amber; ice creams and rise teal; points ink; line and m blue; c violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · BIVARIATE DATA ANALYSIS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the line's equation
> Here's the kiosk's line of best fit. It's a straight line, so it has an equation, y equals m x plus c, like the lines from Year Eleven. Once we know m and c, each number tells us something real about the kiosk. So how do we find the gradient and the intercept from the graph, and what do they **mean**?

Visual: opens on b04a's final frame, left panel (Standard 2). On the first sentence the right panel, the split rule, the panel tags, the label and the chips "Next" and "?" fade, and the left panel grows by a uniform 1.4 to the centre (plot about 1,200 × 780 px; the kiosk plate fades in small at the left, about 300 px). On "equation" the strip "y = ?x + ?" grows to 52 px (grey chip "Year 11: y = mx + c"). On "gradient" the blue "?" pulses; on "intercept" the violet "?". On "mean" heading "The line's equation" writes on, and the chip "what's its equation?" moves to the top right as the question chip.

### 2. what m and c mean on a graph
> A quick reminder of the two numbers. The gradient, m, is how steep the line is. It's the rise, how far the line goes up, divided by the run, how far it goes across. The intercept, c, is where the line crosses the vertical axis. It's the value of y when x is zero. So the equation says, start at c, then for every one step across, go up by **m**.

Visual: stage change. A plain coded line on a small grid (about 900 × 600 px, both axes from 0, no data): on "rise" a teal upright and on "run" an amber flat draw under the line, labelled "rise" and "run"; row, 52 px: "m = rise ÷ run" (blue). On "crosses the vertical axis" a violet ring at the crossing, row "c = y when x = 0" (violet). On "m" a stepper draws: a dot starts at c and climbs one step across and m up, three times along the line (hand tag "start at c, up m each step").

### 3. the gradient, from two points on the line
> To find the gradient, pick two points that sit right on the line, and are far apart, so they're easy to read accurately. Don't use data points, because they usually aren't on the line. This line passes through eighteen comma thirty-five, and thirty-two comma a hundred and nineteen. The rise is a hundred and nineteen minus thirty-five, which is eighty-four. The run is thirty-two minus eighteen, which is fourteen. Eighty-four divided by fourteen is **six**. Any two points on the line would give the same answer, because a straight line is equally steep **everywhere**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the equation of the kiosk's line of best fit. Interpret its gradient and its intercept in context." Givens card, 40 px: "two points on the line: (18, 35), (32, 119)". The kiosk plot at the left (about 1,000 × 640 px). On "right on the line" two hollow blue rings at (18, 35) and (32, 119) (hand tag "on the line, far apart"); on "data points" a grey cross on the nearby data point (18, 40) (hand tag "not data points"). Simulation 1: a triangle settles on the two rings: run (amber) "32 − 18 = 14", rise (teal) "119 − 35 = 84". Rows, 52 px: "m = rise ÷ run = (119 − 35) ÷ (32 − 18)", "= 84 ÷ 14"; on "six" "= 6" (blue, hand tag "rise ÷ run"). On "everywhere" the triangle slides along the line, shrinking to run 2 (rise 12) and growing to run 5 (rise 30), its readout "rise ÷ run = 6" never changing (hand tag "same ratio anywhere"), then returns to the far-apart points.

### 4. what the gradient means
> In context, the gradient says the line goes up six ice creams for every one degree across. So for each extra degree of temperature, the kiosk tends to sell about six more ice creams. Always give the gradient with its units, ice creams per degree. A six on its own doesn't say **anything**.

Visual: camera continue. A one-degree step (amber, "+1°C") and its six-ice-cream rise (teal, "+6") draw at three places along the line. Framed, 44 px: "gradient: about 6 more ice creams per °C" (green; hand tag "per degree"). On "anything" a grey "m = 6" alone gets a small red "units?" tag (hand tag "units!").

### 5. the intercept, and a trap
> Now the intercept. It's tempting to read where the line meets the left edge of the graph, at about seventeen. But this axis doesn't start at zero degrees. It starts at fifteen, after a break. So seventeen isn't the intercept, and reading it off is the **slip**. The intercept is where x is zero, way off to the left. So we work it out. Put one point into y equals six x plus c. Thirty-five equals six times eighteen, plus c. Six times eighteen is a hundred and eight, so c is thirty-five minus a hundred and eight, which is minus seventy-**three**.

Visual: camera continue. On "left edge" the line's crossing with the left edge at (15, 17) rings; a red slip "c = 17" writes beside it. On "fifteen" the break mark and the "15" tick glow (hand tag "this axis starts at 15"); on "slip" the red slip is crossed (caption "this axis starts at 15°C, not 0"). On "way off to the left" a grey arrow points off the plot's left edge (hand tag "x = 0 is way over here"). Rows, 52 px: "35 = 6 × 18 + c" (hand tag "put a point in"); "35 = 108 + c"; on "three" "c = 35 − 108 = −73" (violet).

### 6. stretch back to zero
> Let's check by stretching the graph back to zero degrees. The line keeps falling, and it crosses the vertical axis at minus seventy-three. So the equation is y equals six x minus seventy-**three**. In words, ice creams equals six times temperature, minus seventy-three. But what would minus seventy-three mean? On a zero degree day, the kiosk would sell minus seventy-three ice creams. That's impossible, and zero degrees is far outside the data, which ran from eighteen to thirty-two. So here the intercept just places the line. It has no meaning in **context**.

Visual: camera continue: simulation 2. The break mark opens and the x axis stretches live back to 0; the y axis extends down to −80; the line extends as a dashed blue line and crosses the vertical axis at a violet ring "−73". On "three" framed "y = 6x − 73" (green, m blue, c violet); a word line beneath, 40 px: "ice creams = 6 × temperature − 73". On "impossible" a red ring pulses on the ring at −73; the data's range 18 to 32 tints pale grey far to the right. On "context" framed "intercept: −73 at 0°C: no meaning (0°C is far outside the data)" (green; hand tag "no meaning here").

### 7. a quick check: the mean point
> Here's a quick check. A line of best fit should pass close to the mean point, twenty-five comma seventy-seven. Put twenty-five into the equation. Six times twenty-five is a hundred and fifty, minus seventy-three is seventy-seven. It lands right on the mean point, so the equation **fits**.

Visual: camera continue (the axes ease back to 15 to 35 with the break). The mean point's amber and teal cross-hairs draw at (25, 77) (grey chip "b04a: the mean point"). Row, 52 px: "6 × 25 − 73 = 150 − 73 = 77"; on "fits" the ring at (25, 77) gets a green tick.

### 8. when the intercept does mean something
> Sometimes the intercept does mean something. Here's a line of best fit for hiring a van, the cost against the kilometres driven. It crosses the vertical axis at ninety dollars, and zero kilometres is a real possibility here. So the intercept is the cost before you've driven at all, like a hire fee. The question is always whether x equals zero makes sense in the **data**.

Visual: stage change. A coded plot (about 1,000 × 620 px): "distance driven (km)" amber across 0 to 300, "hire cost ($)" teal up 0 to 200 (both from 0, no break), a few ink points from 20 to 280 km, a blue line through (0, 90) and (200, 150); grey tags "invented data" and "example prices". On "ninety dollars" a violet ring at (0, 90), row "c = 90" (violet). On "hire fee" framed "intercept: $90 before driving: a hire fee" (green; hand tag "zero makes sense here"). On "data" a two-column comparison writes under both plots small: "kiosk: x = 0 far outside: no meaning" and "van: x = 0 makes sense: a hire fee".

### 9. memory aid
> Here's the summary. The gradient is rise over run, said with its units. The intercept is y when x is zero, and it only means something when zero makes sense for the **data**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the kiosk line small with its triangle, and the stretched line's violet ring at −73. Main line, hand font 56 px: "m: rise ÷ run, with units. c: y when x is zero." On "data" the key line, 40 px: "Read two far-apart points on the line. Check the axis starts at zero before reading c, or put a point in." Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A line of best fit on a scatter plot of rideshare trip distance, in kilometres, and fare, in dollars, passes through the points five comma fourteen, and twenty-five comma forty-four. Find the gradient, and explain what it means in this context. Find the equation of the line. Then interpret the y-intercept in this context. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A line of best fit on a scatter plot of rideshare trip distance (km, horizontal) against fare ($, vertical) passes through the points (5, 14) and (25, 44). (a) Find the gradient of the line and explain what it means in this context. (b) Find the equation of the line. (c) Interpret the y-intercept in this context." No picture (a worded task; the two points are given). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 1 (brief)
> The rise is thirty and the run is twenty, so the gradient is one point **five**. The fare goes up about a dollar fifty for each extra kilometre. Fourteen equals one point five times five, plus c, so c is six point five, and y equals one point five x plus six point **five**. The intercept, six dollars fifty, is like a booking **fee**. A gradient of thirty is the slip. Divide the rise by the **run**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "m = (44 − 14) ÷ (25 − 5) = 30 ÷ 20"; on "five" (first bold) framed "(a) m = 1.5: about $1.50 more per km" (green). "14 = 1.5 × 5 + c, c = 6.5"; on "five" (second bold) framed "(b) y = 1.5x + 6.5" (green, m blue, c violet). On "fee" framed "(c) about $6.50 at 0 km: like a booking fee" (green). On "slip" a red slip "gradient = 30" writes; on "run" it is crossed (caption "rise ÷ run: 30 ÷ 20"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Here's a scatter plot of eight students' paid work hours each week, from zero to nineteen, and their exam marks. The line of best fit passes through zero comma eighty-nine, and twenty comma fifty-five. Find the equation of the line. Then interpret its intercept in this context. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The scatter plot shows eight students' paid work hours per week (0 to 19 hours) and their exam marks, with a line of best fit through (0, 89) and (20, 55). (a) Find the equation of the line of best fit. (b) Interpret the y-intercept in this context." Graph slot (about 700 × 460 px): "work hours per week" amber across 0 to 20 (starting at 0, no break), "exam mark" teal up 40 to 100 (break mark on the vertical axis only), eight ink points, the line in ink with the points (0, 89) and (20, 55) marked as small hollow rings. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 13. feedback 2 (brief)
> The gradient is fifty-five minus eighty-nine, over twenty, so minus one point **seven**. The line crosses the vertical axis at eighty-nine, so y equals minus one point seven x plus eighty-**nine**. Zero hours is inside the data, so this intercept means something. A student with no paid work is predicted about eighty-nine. Dropping the minus sign is the slip. The line falls, so the gradient is **negative**.

Visual: the card shrinks to the top. Rows, 44 px: "m = (55 − 89) ÷ (20 − 0) = −34 ÷ 20"; on "seven" "m = −1.7" (blue). On "nine" framed "(a) y = −1.7x + 89" (green, m blue, c violet); the card's "0" tick on the horizontal axis glows (this axis does start at 0). Framed "(b) about 89 marks with no paid work (0 hours is in the data)" (green). On "slip" a red slip "m = 1.7" writes; on "negative" it is crossed (caption "the line falls: negative"). Hold about 1 s.

### 14. handoff: one number for strength
> We've described the kiosk's line with two numbers. But how closely do the points actually follow it? Can we measure the strength of the relationship as one number **too**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as under Decisions, "Handoff"): the kiosk plate at the left; the kiosk scatter with the blue line and the grey strip "y = 6x − 73"; on "how closely" the five points pulse against the line; on "one number" the olive dial draws at the right with its ticks "−1", "0", "1" and no needle. On "too" chip "how strong, as one number?", label "Next: Pearson's correlation coefficient" and chips "Next" and "?". Hold about 2 s. No r value is shown. This is b05's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y = mx + c: m is the gradient, c is the y-intercept.
- m = rise ÷ run, from two far-apart points on the line.
- Say m in context, with units: about 6 ice creams per °C.
- c: y when x = 0. Axis not from 0? Put a point in.
- c only means something if x = 0 makes sense for the data.

Memory aid (framed card, right side, as in scene 9): *m: rise ÷ run, with units. c: y when x is zero.* Key: *Read two far-apart points on the line. Check the axis starts at zero before reading c, or put a point in.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 14's frame exactly. This is the final frame and b05's opening frame.

## Teaching checks

- **Does it explain causes?** Why points on the line: data points usually are not on it (3). Why far apart: reading errors matter less (3). Why any two points work: a straight line is equally steep everywhere, shown by the sliding triangle (3). Why units: m is a rate (4). Why 17 is not c: the axis starts at 15 (5). Why substitution works: the point satisfies the equation (5). Why −73 means nothing: 0°C is far outside the data (6). Why the van's c means something: 0 km makes sense (8).
- **Misconceptions addressed:** gradient from data points (3, said); no units (4); c from a broken axis (5 crossed); a meaningless intercept interpreted (6); rise and run not divided (A1 crossed); a lost minus sign (A2 crossed); "b" for the intercept (never used, ruling 66).
- **Visual standard, item by item:** 1 the painted kiosk from the first frame; 2 a new stage every 25 to 60 s; 3 the triangle sliding with a fixed ratio, the axis stretching back to 0; 4 fixed roles (m blue, c violet); 5 large type; 6 hand tags; 7 g01 board in 3 to 6; 8 framed card and five bullets; 9 the line plunging to −73.
- **One idea at a time:** m and c (2), the gradient (3), its meaning (4), c (5), the equation and c's meaning (6), the check (7), a meaningful c (8).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible; 10 s each; feedback about 29 s and 30 s.
- **Avoided double teaching:** Year 11's gradient and y = mx + c are recalled in one scene (2); b04a's mean point is a grey chip.
- **Standard 1 path:** not applicable (Standard 2 only); b04a's two-route frame sends Standard 1 to b07.
- **Syllabus coverage:** `ci880296d0`: "Determine ... the intercept and gradient ... from a given graph" (3, 5, 6, A1, A2), "interpret" (4, 6, 8, A1, A2), "to form an equation of the line" (6, A1, A2); key notes 1 to 5.
- **Out of scope by design:** r (b05); the calculator's least-squares equation (b06); predictions and their reliability (b07).

## Practice questions and model answers

**Attempt 1 (scene 10; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A line of best fit on a scatter plot of rideshare trip distance (km, horizontal) against fare ($, vertical) passes through the points (5, 14) and (25, 44). (a) Find the gradient of the line and explain what it means in this context. (b) Find the equation of the line. (c) Interpret the y-intercept in this context."
Model answer: (a) m = (44 − 14) ÷ (25 − 5) = 30 ÷ 20 = 1.5: the fare rises by about $1.50 for each extra kilometre. (b) 14 = 1.5 × 5 + c, so c = 6.5: y = 1.5x + 6.5. (c) About $6.50 for a 0 km trip, which can be read as a booking fee. Classic mistake (crossed): "gradient = 30".

**Attempt 2 (scene 12; original, on the site's card 08 data, HSC style, 3 marks suggested).** "The scatter plot shows eight students' paid work hours per week (0 to 19 hours) and their exam marks, with a line of best fit through (0, 89) and (20, 55). (a) Find the equation of the line of best fit. (b) Interpret the y-intercept in this context."
Model answer: (a) m = (55 − 89) ÷ (20 − 0) = −1.7; the line crosses the vertical axis (which starts at 0) at 89, so y = −1.7x + 89. (b) A student who does no paid work is predicted to score about 89; 0 hours is inside the data, so this makes sense. Classic mistake (crossed): "m = 1.7".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Kiosk line | (18, 35), (32, 119); rise 84; run 14; m = 6; left edge at (15, 17); c = 35 − 108 = −73; y = 6x − 73 | 1, 3 to 7, 14 |
| Sliding triangle | runs 2, 5, 14; rises 12, 30, 84 | 3 |
| Mean point check | 6 × 25 − 73 = 77 | 7 |
| Van hire (invented) | (0, 90), (200, 150); c = $90 | 8 |
| A1 | (5, 14), (25, 44); 30 ÷ 20 = 1.5; c = 6.5; y = 1.5x + 6.5 | 10, 11 |
| A2 | (0, 89), (20, 55); −34 ÷ 20 = −1.7; c = 89; y = −1.7x + 89 | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact fractions (19 Nov 2026, scratchpad `b/verify.py`, run with `python -I`); Codex to re-check.

- (119 − 35) ÷ (32 − 18) = 84 ÷ 14 = 6; 35 − 6 × 18 = −73; 6 × 15 − 73 = 17; 6 × 25 − 73 = 77; 6 × 2 = 12, 6 × 5 = 30.
- (150 − 90) ÷ (200 − 0) = 0.3.
- (44 − 14) ÷ (25 − 5) = 1.5; 14 − 1.5 × 5 = 6.5.
- (55 − 89) ÷ (20 − 0) = −1.7; site card 08 least squares y = −1.7x + 89.3 (author note only).

## Memory aid check

- **"m: rise ÷ run, with units. c: y when x is zero."** with key line **"Read two far-apart points on the line. Check the axis starts at zero before reading c, or put a point in."** From the site's card 06 ("Choose two clearly readable points on the line", "far apart") and Year 11's y = mx + c. Meaning, as said in scenes 2 to 8. Assumptions checked: "y when x is zero" is the definition of c, whether or not it is meaningful (scene 6 and 8 say when it is); "put a point in" needs m first (scene 5's order); "with units" means y units per x unit (scene 4). It helps a new case: a line through (10, 50) and (40, 20) on an axis from 10: m = −1, c = 60 from 50 = −10 + c.
- **Considered, not used:** "Rise over run, then plug in" (drops the units and the axis check).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `b/count.py`, which reproduces e08's 5,632): **5,096 characters**, 15 scene headings. Characters per scene (1 to 15): 298, 341, 563, 285, 540, 555, 285, 369, 170, 356, 385, 310, 397, 167, 75.

At 13.3 characters per second the speech is about 383 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the stepper (2), the sliding triangle (3), the steps (4), the stretch to zero (6) and the van plot (8) about 32 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 480 s**, under the 570 s cap. Feedback speech: about 29 s and 30 s.

Reserve trims if the voiced take runs long: scene 7 (the mean-point check, about 15 s; the cross-hairs and row stay silent in scene 6); scene 2's last sentence (about 6 s; the stepper stays).

## Scene list and build ids

Lesson key `m-s12b04b` (route math-s12-b04, part b). Explainer folder `src/explainer/lessons/math-s12-b04b`; build inputs in `docs/production/claude-pm/lessons/math-s12-b04b/` (at voicing).

In order (15 scene headings): hook-equation, m-and-c, gradient-two-points, gradient-meaning, intercept-trap, stretch-to-zero, mean-point-check, intercept-means-something, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-b05, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | b04a's left panel |
| 25 to 55 s | 2 | m and c in words |
| 55 to 105 s | 3 | g01 board: the gradient, sliding triangle |
| 105 to 125 s | 4 | The gradient's meaning |
| 125 to 170 s | 5 | The trap and c |
| 170 to 215 s | 6 | Stretch to zero |
| 215 to 230 s | 7 | Mean-point check |
| 230 to 255 s | 8 | Van hire |
| 255 to 270 s | 9 | Framed memory card |
| 270 to 380 s | 10 to 13 | Question cards and countdowns, then feedback |
| 380 to 395 s | 14 | b05's frame |
| 395 to 441 s | 15 | Key notes, then a silent return to scene 14's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: b04a's last frame continues into 1 (left panel grows); 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4, 4 to 5, 5 to 6 and 6 to 7 camera continue; 7 to 8 stage change; 8 to 9 stage change; attempts and feedback: the card shrinks to the top; 13 to 14 board clear; 14 to 15 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-b04b-learning-review.md`, `science_check` = `checks/m-s12-b04b-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): `ms12-beach-kiosk-v1.png` is t05's brief with b01's addendum (not yet painted). No other plate: the van-hire, rideshare and work-hours graphs are coded plots (the graph is what the syllabus point reads); a van plate was considered and left out because the graph, not the vehicle, carries the idea.

Coded: plots, lines, triangles, rings, the stepper, the stretching axis, cross-hairs, the dial, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, `StudioPlot`, `StudioTangentTriangle` (chord style on a straight line), `TargetDial` (final frame), ScatterBoard (b01 to b04a), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row b04): ScatterBoard **extended line to x = 0 across an opening break mark** (the axis stretching live and the line continuing dashed to a violet intercept ring); the **sliding rise-over-run triangle** on a straight line with a fixed-ratio readout (`StudioTangentTriangle` chord option). Check: the line through (18, 35) and (32, 119) meets x = 0 at −73 and x = 15 at 17; the triangle reads 6 at runs 2, 5 and 14.

## Codex asset brief (Maths S12 B04b)

No new plate. Append "b04b: no plate needed; kiosk per t05 and b01" to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly and is labelled Standard 2 only.
3. Confirm y = mx + c with m blue and c violet everywhere, and that "b" never names the intercept or the gradient (ruling 66).
4. Confirm both attempts carry every demand and given, A2's horizontal axis starts at 0 and its vertical axis has the only break, and neither card shows an answer.
5. Confirm scene 1 opens on b04a's left panel exactly (axes 15 to 35°C with a break mark and 0 to 140 ice creams), and scene 14's frame matches b05 scene 1's opening.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, no digits in narration, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Line of Best Fit: Gradient, Intercept and Equation | Year 12 Maths Standard

(Title length: 75 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson08.sa.html

A beach kiosk's line of best fit is drawn. What's its equation, and what do its numbers mean? Read the gradient from two far-apart points on the line and say what it means with units (about 6 more ice creams for each extra degree). Avoid the intercept trap on an axis that doesn't start at zero, find the intercept by putting a point into y = mx + c, and decide whether the intercept means anything in context. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Bivariate data analysis. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Determine and interpret the intercept and gradient of the line of best fit from a given graph to form an equation of the line"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c

Builds on: Drawing a Line of Best Fit. Next: Pearson's Correlation Coefficient r.

#Year12Maths #MathsStandard #LineOfBestFit #HSCScience

## Open decisions

- **1. Axes for the trap (root).** The kiosk plot here and in b04a's left panel runs 0 to 140 ice creams with no vertical break, so the line meets the left edge at 17 (a believable wrong c). b02, b03 and b04a's teaching plots keep 30 to 130 with a break; only the final-frame left panel changes axes. Accept, or keep 30 to 130 and teach the trap with the work-hours graph alone.
- **2. Van hire (root).** An invented example (tags "invented data", "example prices") to show a meaningful intercept before the attempts; scene 8 is short and can be cut (about 25 s) if the voiced take runs long, with A1 and A2 still covering it.

## Review notes

- Revision 1. Next: student learning review (trace from b04a as a Standard 2 student; check that m and c are recalled in words first, that the far-apart points and the fixed ratio are followable, that the 17 trap is clear, that substitution is explained, that "no meaning" and "means something" are both earned, that both cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
