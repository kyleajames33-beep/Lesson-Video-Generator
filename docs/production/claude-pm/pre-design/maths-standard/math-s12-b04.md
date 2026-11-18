# math-s12-b04: How do we draw a line of best fit and read its equation from the graph?

Maths Standard research pack (Year 12, Bivariate data analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Bivariate data analysis, Scatter plots and lines of best fit):

- `cid27cc8e6`: Create a line of best fit on a scatter plot for a bivariate dataset, by eye and with digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered.
- `ci880296d0`: Determine and interpret the intercept and gradient of the line of best fit from a given graph to form an equation of the line [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered; notation mixed (MS-63).

Standard 1 (Year 12, Bivariate data analysis, Scatter plots and lines of best fit):

- `ci1a3b6d30`: Create a line of best fit on a scatter plot for a bivariate dataset, by eye and with digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852). Covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes. **Standard 1 has no equation point**: Standard 1 students draw the line (by eye and digitally) and use it in b07 by reading the graph.

**Course:** Standard 1 and Standard 2. Playlist order 65. Two-route final frame: Standard 2 to b05, Standard 1 to b07.

**Entry knowledge (outline dependency list):** math-s11-l01: `ci94641a48` (y-intercept and gradient from a graph), `cic0a28004` (from an equation); also math-s11-l02 `ciafd3b572` (y = mx + c), math-s11-d11 `ciaf232c38` (the mean, for the mean point) and math-s12-b02 (the scatter plot). The outline also lists `ci4777471a` (interpolation and extrapolation, math-s11-l04) here; it belongs mostly to b07.

**Prior video:** math-s12-b03.

**Start:** b03's final frame (proposed): the kiosk scatter (18°C 40, 22°C 60, 25°C 75, 28°C 90, 32°C 120) with a clear ruler lying across the cloud: "one line through the middle?".

**Stop:** A line of best fit drawn by eye: it follows the trend, has roughly as many points above as below, passes through or near the mean point (x̄, ȳ), and spans the data; different people draw slightly different lines; the same idea with digital tools (a spreadsheet scatter chart, a linear trendline and "display equation"; a graphing app from a table), which gives one line every time. Standard 2: the y-intercept and gradient read from two well-separated points on the drawn line, the equation y = mx + c, and what each means in context, including an intercept that means nothing (0°C is far outside the data). Reading one prediction off the line is shown and handed to b07. Two-route final frame.

**Next:** math-s12-b05 (Standard 2); math-s12-b07 (Standard 1).

## 2. Site order, sections and worked examples

Read-only source: [bivariate-data-analysis/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson08.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `7707be28d68f12da65dbf15206e29b9058bb91662bd8ca6d626f53f7e51c30a1`. Sections used: `orient-best-fit-lines` (card 02), `draw-best-fit-line` (card 05, quick check), `read-line-equation` (card 06), `predict-from-line` (card 07), `use-digital-fit-tools` (card 08), `apply-best-fit-lines` (`we-1` to `we-3`, activity), `answer-best-fit-questions` (Q1).

### Source lesson08, cards 05 to 07

Card 05: "Calculate the mean point $(\bar{x}, \bar{y})$ ... Draw a straight line through the mean point that follows the general trend of the data. Balance the points: Roughly half the points should be above the line and half below. ... Extend the line to cover the full range of x values ... Ignore outliers when drawing". Quick check: "7 points are above the line and 3 are below" → "B, Rotate the line so that roughly equal numbers of points are above and below." Card 06: "Choose two clearly readable points on the line (not necessarily data points)." "A line of best fit passes through (0, 30) and (5, 55). ... $m = \dfrac{55-30}{5-0} = 5$. Equation: $y = 5x + 30$." Tip: "choose two points on the line that are far apart". Card 07: "$y = 5(6) + 30 = 60$".

### Source lesson08, card 08 (digital tools)

"Take the paid work hours ($x$) and exam mark ($y$) of eight students: Work hours 0, 3, 5, 8, 10, 12, 15, 19; Exam mark 89, 76, 83, 82, 74, 69, 69, 50. In a spreadsheet. ... add a Trendline, choose Linear, and tick Display equation on chart. The equation appears as $y = -1.7x + 89.3$." "Your by-eye line was one reasonable line among many; the digital line is the same line every time". "Here $\bar{x} = 9$ and $\bar{y} = 74$, and substituting gives $-1.7 \times 9 + 89.3 = 74$." True or false: "Two students draw a line of best fit by eye on the same scatterplot and get slightly different equations. At least one of them must have made an error." (False.)

### Source lesson08, worked examples and the activity (the kiosk data)

`we-1`: study hours 1 to 5, scores 45, 55, 62, 74, 80: mean point (3, 63.2). `we-2`: "crosses the y-axis at 20 and passes through the point (8, 60)" → $y = 5x + 20$. `we-3`: $y = 5(7) + 20 = 55$. Activity: "Data: daily temperature °C (x): 18, 22, 25, 28, 32 and ice-cream sales (y): 40, 60, 75, 90, 120. Calculate the mean point ... A line of best fit passes through (18, 35) and (32, 119). Find the equation ... predict ice-cream sales on a 27°C day. Explain what the gradient means in this context." Answers: "(25, 77)", "$m = \frac{84}{14} = 6$ ... $b = 35 - 108 = -73$. Equation: $y = 6x - 73$ ... at $x = 25$, $y = 77$", "$y = 6(27) - 73 = 89$ sales", "for each $1$°C increase in temperature, ice-cream sales increase by about $6$ units." Q1: through (2, 35) and (6, 55) → $y = 5x + 25$.

## 3. Recalculation

- Kiosk mean point: (125 ÷ 5, 385 ÷ 5) = (25, 77). Line through (18, 35) and (32, 119): m = 84 ÷ 14 = 6, c = −73, y = 6x − 73; at 25, 77 (through the mean point); at 27, 89. Points above or below the line: +5, +1, −2, −5, +1 (three above, two below; the gaps sum to 0).
- Kiosk least-squares line (for comparison only, b06): y = −63.09 + 5.603x; the by-eye line is close inside the data.
- Intercept −73: the line would predict −73 ice creams at 0°C; it reaches 0 at 73 ÷ 6 ≈ 12.2°C. Not meaningful (outside 18 to 32°C).
- Work hours: least squares a = 89.3, b = −1.7 exactly; at x̄ = 9, 74 = ȳ.
- Site: (0, 30) and (5, 55): m = 5, 60 at 6; (0, 20) and (8, 60): m = 5, 55 at 7; (2, 35) and (6, 55): m = 5, c = 25; `we-1` mean point (3, 63.2).
- Question 1: through (5, 14) and (25, 44): m = 30 ÷ 20 = 1.5, c = 14 − 7.5 = 6.5; y = 1.5x + 6.5.
- Question 2 (invented): mean point (148 ÷ 6, 270 ÷ 6) = (24.67, 45); least-squares prediction at 28°C 53.9, so a fair by-eye line gives about 54 (accept 52 to 56).

Every value above was recalculated with SymPy 1.14.0 and Python `statistics` (`work/brief-standard-bp/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Joining the first and last points, or drawing through as many points as possible, instead of balancing the cloud.
- Reading the gradient from two data points that are not on the line.
- Using the "intercept" from where the line crosses an axis that does not start at zero (the axis break trap).
- Reading the y-intercept as meaningful when x = 0 is far outside the data (−73 ice creams).
- Thinking a by-eye line that differs from a friend's is wrong (both can be fair); the digital line is the reproducible one.
- Gradient said without units or context ("6") instead of "about 6 more ice creams for each extra degree".

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A ruler laid on the kiosk cloud, then rotated and slid; a live counter "above 3, below 2" and small vertical gap sticks (amber above, teal below) that balance.
- The mean point (25, 77) as a cross-hair pin, and the ruler pivoting about it.
- Two students' lines (two colours, no people) both fair, then the spreadsheet trendline arriving as one line with its equation label (the work-hours data, y = −1.7x + 89.3), mean-point check ticking.
- Standard 2: two points picked far apart on the line (18, 35) and (32, 119), the rise 84 and run 14 drawn as a triangle, 6 written; the line extended back to x = 0 with a broken axis showing −73 and a "no meaning here" tag; the gradient said as "6 ice creams per degree".
- One reading off the line (27°C → about 89) with dashed guides, as a preview for b07.
- Two-route final frame (ruling 38 pattern): left "Standard 2 next: how strong, as one number?" (the kiosk scatter and line with a dial from −1 to 1, needle hidden; b05's opening); right "Standard 1 next: can we trust a prediction?" (the kiosk line running on dashed past both ends, tags "10°C?" and "45°C?"; b07's opening, which b06's final frame repeats).

Advanced reuse (visual parts only): `StudioPlot`, `fnPath` (plot-core.tsx); `StudioTangentTriangle` style rise-over-run (fn-sim.tsx; a chord option on a straight line, as r12's pack noted); `LinkedRiders` (extras.tsx) for reading a value off the line. Plates: `ms12-beach-kiosk-v1.png`. Kit needs: ScatterBoard (ruler, balance counter, gap sticks, mean-point pin, trendline); SpreadsheetGrid with a chart trendline (already listed for a04 and i05).

## 6. Two original candidate practice questions

### Question 1

A line of best fit on a scatter plot of rideshare trip distance (km, horizontal) against fare ($, vertical) passes through the points (5, 14) and (25, 44). (a) Find the gradient of the line and explain what it means in this context. (b) Find the equation of the line. (c) Interpret the y-intercept in this context.

**Worked answer:** (a) m = (44 − 14) ÷ (25 − 5) = 1.5: the fare rises by about $1.50 for each extra kilometre. (b) c = 14 − 1.5 × 5 = 6.5, so y = 1.5x + 6.5 (fare = 1.5 × distance + 6.5). (c) About $6.50 for a 0 km trip, which can be read as a booking fee (a 0 km trip is outside the data, so treat it with care).

### Question 2 (both courses)

A school canteen records the top temperature (°C) and the number of cold drinks sold on six days.

| Top temperature (°C) | 16 | 19 | 23 | 26 | 30 | 34 |
|---|---|---|---|---|---|---|
| Cold drinks sold | 22 | 30 | 41 | 47 | 60 | 70 |

(a) Find the mean point. (b) Draw a scatter plot and a line of best fit by eye through the mean point. (c) Use your line to estimate the number of cold drinks sold on a 28°C day.

**Worked answer:** (a) (148 ÷ 6, 270 ÷ 6) ≈ (24.7, 45). (b) A line through about (24.7, 45) following the rising points, with points balanced above and below. (c) Reading up from 28°C to the line and across: about 54 drinks (between 52 and 56 is reasonable for a line drawn by eye).

Only the question (and the table) goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "gradient 30", crossed, "rise ÷ run: 30 ÷ 20"; for Question 2 (b): "a line joining the first and last points", crossed, "balance the points; go through the mean point").

## 7. Everyday anchors

- **The beach kiosk line:** the site's own y = 6x − 73, gradient "about 6 more ice creams per degree" and a meaningless −73 intercept (the strand's dataset).
- **Part-time work hours and an exam mark:** the site's eight students and the spreadsheet trendline y = −1.7x + 89.3 (school and work; site data, coded table only).
- **A rideshare fare line:** a gradient of $1.50 per km and a $6.50 intercept that does mean something (travel; Question 1, invented).

Varied everyday contexts. Repeat check (grepped 19 November 2026): no Advanced design draws a line of best fit; "rideshare" appears only in these packs. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 10: MS-63 (y = mx + b, y = a + bx and b meaning two things) and MS-65 (card 02's "minimises the total vertical distances").

Decisions for Claude:

- **Notation:** y = mx + c throughout (Year 11's form, `ciafd3b572`); never "b" for the intercept. b06 maps the calculator's A + Bx onto it.
- **Mean point:** say it is a guide that helps the line sit in the middle (the least-squares line always passes through it, b06), not a rule a by-eye line must meet exactly.
- **Two-route final frame** as section 5. Standard 1 students leave with "draw it, by eye or digitally, and read off it".
- **Pace: at risk.** Drawing by eye, digital tools, reading an equation and interpreting both numbers is more than one gentle video. Suggested split if a design runs past 570 s: **b04a** (draw the line by eye and with digital tools; both courses; ends on the two-route frame, Standard 2 to b04b) and **b04b** (equation and meaning from the graph; Standard 2 only; ends on b05's opening). Both share number 65.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
