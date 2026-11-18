# math-s12-b06: How does a calculator or spreadsheet find the least-squares regression line?

Maths Standard research pack (Year 12, Bivariate data analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Bivariate data analysis, Scatter plots and lines of best fit):

- `ci9bd861ac`: Determine the equation of the least-squares regression line for a bivariate dataset using a scientific calculator [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered; notation mixed (MS-63).
- `ci3f69b9d4`: Use a spreadsheet to construct a scatter plot and the least-squares regression line for a bivariate dataset [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered.

Standard 1: no matching point.

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 67.

**Entry knowledge:** math-s12-b05 (`ci5401622a`): two-variable STAT mode and r. math-s12-b04 (`cid27cc8e6`, `ci880296d0`): a line of best fit by eye, its gradient and intercept in context, y = mx + c. math-s11-d07: `cia127389f` (spreadsheet graphs; a Year 11 site gap, section 2 of the corrections file, so recall it gently). math-s11-d11: the mean.

**Prior video:** math-s12-b05.

**Start:** b05's final frame (proposed): the calculator's results screen for the kiosk data with r = 0.99 lit and two more lines, A and B, still dim: "what are A and B?".

**Stop:** The least-squares regression line is the one line a calculator or spreadsheet produces from the data: in words, it makes the squared vertical gaps from the points to the line as small as possible, so everyone gets the same line (no formula); scientific calculator: the A + Bx setting, A is the intercept and B the gradient, written y = A + Bx and as y = mx + c; spreadsheet: scatter chart, linear trendline, display equation, and the functions SLOPE, INTERCEPT and CORREL, with the y range first in SLOPE and INTERCEPT; the mean-point check (the least-squares line passes exactly through (x̄, ȳ)); gradient and intercept read in context; comparison with b04's line by eye (close inside the data). Predictions and reliability are b07.

**Next:** math-s12-b07.

## 2. Site order, sections and worked examples

Read-only sources: [bivariate-data-analysis/lesson09.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson09.sa.html), SHA256 `948f42051ae738969aa5746047525daed596ba5906c1195b0b44a629736b6bb6` (sections `orient-least-squares`, `read-regression-equation`, `interpret-regression-gradient`, `interpret-regression-intercept`, `calculate-regression-line` (cards 08 and 09), `apply-least-squares` (`we-1` to `we-3`, activity), `answer-regression-questions`); [bivariate-data-analysis/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson08.sa.html), SHA256 `7707be28d68f12da65dbf15206e29b9058bb91662bd8ca6d626f53f7e51c30a1` (section `use-digital-fit-tools`). Both at kyleajames33-beep/Teaching-APP 5d74a627.

### Source lesson09, cards 02, 03 and 06

Card 02: "The least squares regression line is the unique line that minimises the sum of the squared vertical distances from each data point to the line. It is given as $y = a + bx$." Card 03 notice: "Beyond the syllabus. Finding the least-squares line with your calculator or a spreadsheet, interpreting a and b, and making contextual predictions are core. The formulas b = r × (s_y / s_x) and a = ȳ − b x̄, and the optimisation theory behind them, are optional" (but card 05's pause prompt asks students to copy them: MS-65). Card 06: "for each 1°C increase in temperature, predicted coffee sales decrease by 2.4 units"; "Units: The gradient has units of units of y ÷ units of x."

### Source lesson09, card 08 (calculator) and card 09 (spreadsheet)

Card 08: "The eight students from Lesson 3, their paid work hours ($x$) and their exam mark ($y$)" (0, 3, 5, 8, 10, 12, 15, 19; 89, 76, 83, 82, 74, 69, 69, 50). "1 gives $A = 89.3$. ... 2 gives $B = -1.7$. Written out, the least-squares regression line is $y = 89.3 - 1.7x$." "$A$ is the intercept and $B$ is the gradient, in that order. Students lose marks by reading the first number on the screen as the gradient". "The least-squares line always passes through the mean point ... $89.3 - 1.7 \times 9 = 74$." Card 09: "=CORREL(A2:A9,B2:B9) $-0.8996$; =SLOPE(B2:B9,A2:A9) $-1.7$; =INTERCEPT(B2:B9,A2:A9) $89.3$". "SLOPE and INTERCEPT want the $y$ range first and the $x$ range second ... Writing =SLOPE(A2:A9,B2:B9) returns $-0.476$." "With the arguments reversed the same cell returns $39.94$ against a mean of $74$". Quick check: "$A = 12.4$ and $B = 0.8$" → "$y = 12.4 + 0.8x$".

### Source lesson09, worked examples and activity

`we-1`: "$y = 42 + 3.5x$ ... $a = 42$ ... $b = 3.5$". `we-2`: $42 + 3.5(8) = 70$. `we-3`: "$y = 38 + 2.8x$ ... for each additional year of experience, the predicted annual salary increases by $\$2800$". Activity: $y = 420 - 8.5x$ (electricity demand; MS-67), $207.5$ at 25°C. Q1: $y = 12 + 0.8x$, 36 tonnes at 30 mm. Q2: babies' weight and height, $y = -12 + 8.5x$ (MS-65).

## 3. Recalculation

- Work hours: exact least squares a = 893/10 = 89.3, b = −17/10 = −1.7; y = 89.3 − 1.7x; at x̄ = 9, y = 74 = ȳ; CORREL −0.8996.
- Reversed spreadsheet arguments: =SLOPE(A2:A9,B2:B9) = −0.476 (hours regressed on marks); =INTERCEPT(A2:A9,B2:B9) = 44.224; the reversed check cell INTERCEPT + SLOPE × AVERAGE(A2:A9) = 44.224 − 0.476 × 9 = 39.94 (site value matches).
- Kiosk least squares: y = −63.086 + 5.6034x (exact a = −3659/58, b = 325/58), r = 0.9949; by eye (b04) y = 6x − 73. At 25°C both give 77; at 27°C, 88.2 against 89; at 30°C, 105.0 against 107.
- Site: 42 + 3.5 × 8 = 70; 420 − 8.5 × 25 = 207.5; 12 + 0.8 × 30 = 36.
- Question 1 (invented): y = 6.835 + 1.6983x (exact a = 2809/411, b = 698/411), r = 0.9995; at 10 km, $23.82.

Every value above was recalculated with SymPy 1.14.0 (exact least squares) and Python `statistics.linear_regression` (`work/brief-standard-bp/recalc.py`). All site values match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading A as the gradient because "gradient comes first" in y = mx + c.
- Reversed SLOPE or INTERCEPT arguments (no warning; the mean-point check catches it).
- Thinking the least-squares line is "the true line" rather than the best straight-line summary of these data.
- Giving the gradient without units or context.
- Interpreting an intercept far outside the data (−63 ice creams at 0°C).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The b05 results screen lights A and B; A slides to the y-axis crossing, B to a rise-over-run triangle on the kiosk line ("A is where it starts, B is how steep").
- An optional "why this line" picture: squared gaps as small squares hanging between points and a line; the line wobbles and the total square area shrinks to its smallest; one sentence only, no formula.
- y = A + Bx rewritten as y = Bx + A, then as y = mx + c, with the letters colour-matched.
- A coded, unbranded spreadsheet: columns A and B fill with the eight students, a scatter chart appears, a linear trendline with its equation; then cells with =SLOPE(B2:B9,A2:A9), =INTERCEPT(B2:B9,A2:A9) and =CORREL; the arguments swap and the check cell turns red (39.94 against 74).
- The mean-point check as a cross-hair the line must pass through.
- The kiosk's least-squares line laid over b04's by-eye line: almost the same inside the data.
- Final frame (shared with b04's Standard 1 panel, so b07 has one opening): the kiosk scatter and its line of best fit, no equation shown, the line running on dashed past both ends with tags "10°C?" and "45°C?": "can we trust these?".

Advanced reuse (visual parts only): `StudioToolPanel` (integration-parts.tsx) for the calculator; `StudioPlot`; `StudioTangentTriangle` style rise-over-run. Plates: `ma12-calculator-v1.png` (check for a brand mark). Kit needs: SpreadsheetGrid (formula bar, chart with trendline; listed for a04 and i05) with an **argument-order swap** animation; ScatterBoard squared-gap option (optional).

## 6. Two original candidate practice questions

### Question 1

A rideshare driver records the distance and fare of six trips.

| Distance (km) | 3 | 5 | 8 | 12 | 15 | 20 |
|---|---|---|---|---|---|---|
| Fare ($) | 12 | 15 | 21 | 27 | 32 | 41 |

(a) Use your calculator to find the equation of the least-squares regression line, with values correct to two decimal places. (b) Interpret the gradient in context. (c) Use the line to estimate the fare for a 10 km trip.

**Worked answer:** (a) fare = 6.83 + 1.70 × distance (A = 6.8345..., B = 1.6982...). (b) Each extra kilometre adds about $1.70 to the predicted fare. (c) 6.83 + 1.70 × 10 ≈ $23.82 (using unrounded values; $23.83 with the rounded ones).

### Question 2

A spreadsheet has the kiosk's temperatures in A2:A6 and ice creams sold in B2:B6. A student types =SLOPE(A2:A6,B2:B6) and =INTERCEPT(A2:A6,B2:B6). (a) Explain the student's mistake. (b) Write the correct formulas. (c) Describe a quick check that the final line is correct.

**Worked answer:** (a) SLOPE and INTERCEPT need the y range (ice creams, column B) first and the x range second; the student's order gives a different line. (b) =SLOPE(B2:B6,A2:A6) and =INTERCEPT(B2:B6,A2:A6). (c) Put the mean temperature (25) into the line: it must give the mean number of ice creams (77).

Only the question (and the table) goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "fare = 1.70 + 6.83 × distance", crossed, "A is the intercept, B the gradient"; for Question 2 (b): "swap only SLOPE", crossed, "both need y first").

## 7. Everyday anchors

- **Part-time work and an exam mark:** the site's eight students on calculator and spreadsheet (school and work; site data).
- **The beach kiosk:** least squares against b04's by-eye line (the strand's dataset).
- **Rideshare fares:** a gradient in dollars per kilometre and an intercept that reads as a booking fee (travel; Question 1, invented).

Repeat check (grepped 19 November 2026): no Advanced design computes a regression line; the Standard a-strand and i-strand use SpreadsheetGrid for money, not for regression. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 10: MS-63 (notation) and MS-65 (the optional formulas in a pause prompt; the baby-height model).

Decisions for Claude:

- **No formulas** for a and b (the site itself calls them beyond the syllabus); the squared-gap picture is optional and one sentence long.
- **Notation:** the calculator's A + Bx shown as it appears, then written as y = mx + c with m = B and c = A.
- **Unbranded tools:** a generic spreadsheet and calculator; the function names SLOPE, INTERCEPT and CORREL are common to spreadsheet programs and may be shown.
- **Final frame shared with b04's Standard 1 panel** so b07 opens once for both courses.
- **Pace: watch.** Calculator and spreadsheet in one video is full; keep the squared-gap picture only if time allows.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
