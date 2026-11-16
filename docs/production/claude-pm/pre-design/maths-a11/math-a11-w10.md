# math-a11-w10: How do two points, or a point and a gradient, fix a straight line?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci7f902bc1` (Linear functions): Determine the equations of straight lines in gradient–intercept form y = mx + c with gradient m and y-intercept c [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered. Gap: Site writes gradient-intercept form as y = mx + b; the syllabus uses y = mx + c.
- `ci2edbbb14` (Linear functions): Determine the equations of straight lines in general form ax + by + c = 0, where a, b and c are constants [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `cibddcc59d` (Linear functions): Determine the equation of a straight line passing through a point (x_1, y_1) with gradient m using the point–gradient formula y - y_1 = m(x - x_1) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci3ed3083c` (Linear functions): Determine the equation of a straight line passing through two points (x_1, y_1) and (x_2, y_2) by calculating its gradient m using the formula m = (y_2 - y_1)/(x_2 - x_1) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** Stage 5 (Year 10): Gradient as rise over run; plotting lines.

**Prior video:** math-a11-w09.

**Start:** Recall gradient as rise over run.

**Stop:** Gradient from two points; gradient-intercept and general form; point-gradient formula; the line through two points; collinearity as a check. Intercepts, graphing and parallel or perpendicular lines are w11.

**Next:** math-a11-w11.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson09.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson09.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `bd2064a6323b63df8d1a2511dec234a3322d61fa51a3e3bb7cee29336301e2ad`. Title: Gradient and the Equation of a Line. Lesson id maths-adv-y11-m1-l17.

Data-step ids: `recall-your-gut-answer-first`, `gradient-is-rise-over-run`, `what-you-ll-master`, `calculating-a-gradient`, `model`, `quick-fire-practice`, `revisit-the-two-ramps`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson09.sa.html, `we-1`

PROBLEM 1 · GRADIENT FROM TWO POINTS Find the gradient of the line through $(-2, 7)$ and $(4, -5)$. 1 $m = \dfrac{y_2 - y_1}{x_2 - x_1} = \dfrac{-5 - 7}{4 - (-2)}$ Subtract in the same order top and bottom. 2 $= \dfrac{-12}{6}$ Careful with the double negative in the denominator: $4 - (-2) = 6$. 3 $m = -2$ Negative, so the line falls as $x$ increases.

### Source working-with-functions/lesson09.sa.html, `we-2`

PROBLEM 2 · READING A REARRANGED EQUATION Find the gradient and $y$-intercept of $4y - 12x = 20$. 1 $4y = 12x + 20$ Move the $x$ term to the right. 2 $y = 3x + 5$ Divide every term by 4 so $y$ is alone. 3 Gradient 3, $y$-intercept 5 Now the form is $y = mx + b$ and both read straight off.

### Source working-with-functions/lesson09.sa.html, `we-3`

PROBLEM 3 · CONVERTING TO GENERAL FORM Write $y = -\tfrac{3}{4}x + 2$ in general form with integer coefficients. 1 Multiply through by 4: $4y = -3x + 8$ Clear the fraction first, or the coefficients will not be integers. 2 $3x + 4y - 8 = 0$ Move everything to the left so the right-hand side is zero. 3 Check $a > 0$: yes, $a = 3$ Convention is a positive leading coefficient.

Read-only source: [working-with-functions/lesson10.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson10.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `a7a783ecd97b1ffa393d96207b177eb80d4acd338ce57f32c8620376da4284fb`. Title: Finding the Equation of a Line. Lesson id maths-adv-y11-m1-l18.

Data-step ids: `recall-your-gut-answer-first`, `one-point-and-a-gradient`, `what-you-ll-master`, `from-a-point-and-a`, `model`, `quick-fire-practice`, `revisit-your-reasoning`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson10.sa.html, `we-1`

PROBLEM 1 · POINT AND GRADIENT Find the equation of the line with gradient $-3$ passing through $(-2, 5)$. Give your answer in gradient-intercept form. 1 $y - 5 = -3(x - (-2))$ Substitute $m = -3$, $x_1 = -2$, $y_1 = 5$. 2 $y - 5 = -3(x + 2) = -3x - 6$ $x - (-2)$ becomes $x + 2$; expand carefully. 3 $y = -3x - 1$ Add 5 to both sides. Check $(-2,5)$: $-3(-2) - 1 = 5$ ✓

### Source working-with-functions/lesson10.sa.html, `we-2`

PROBLEM 2 · TWO POINTS Find the equation of the line through $(1, 3)$ and $(5, 11)$, in general form. 1 $m = \dfrac{11 - 3}{5 - 1} = \dfrac{8}{4} = 2$ Gradient first. 2 $y - 3 = 2(x - 1)$, so $y = 2x + 1$ Substitute the easier point. 3 $2x - y + 1 = 0$ Move to general form. Check $(5,11)$: $10 - 11 + 1 = 0$ ✓

### Source working-with-functions/lesson10.sa.html, `we-3`

PROBLEM 3 · PROVING COLLINEARITY Show that $A(0, 1)$, $B(2, 5)$ and $C(4, 9)$ are collinear. 1 $m_{AB} = \dfrac{5 - 1}{2 - 0} = 2$ Gradient of the first pair. 2 $m_{BC} = \dfrac{9 - 5}{4 - 2} = 2$ Gradient of the second pair. 3 $m_{AB} = m_{BC}$ and they share point $B$, so $A$, $B$ and $C$ are collinear Equal gradients through a common point means one straight line.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- WF09 we-1: (-2, 7), (4, -5): m = -12/6 = -2.
- WF09 we-2: 4y - 12x = 20 gives y = 3x + 5.
- WF09 we-3: y = -3x/4 + 2 gives 3x + 4y - 8 = 0.
- WF10 we-1: m = -3 through (-2, 5): y = -3x - 1.
- WF10 we-2: (1, 3), (5, 11): m = 2, y = 2x + 1, 2x - y + 1 = 0.
- WF10 we-3: A(0, 1), B(2, 5), C(4, 9): both gradients 2, collinear.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14 from work/brief130-python). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Subtracting coordinates in a different order top and bottom.
- x - (-2) written as x - 2.
- Leaving fractions in general form.
- Reading the gradient from ax + by + c = 0 as a.
- Site writes y = mx + b; the syllabus writes y = mx + c (see site corrections).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Rise-over-run triangle between the two points, with the run and rise labels updating as one point slides (FunctionSimulator secant mode is enough for a line).
- Point-gradient formula built as "the gradient from (x1, y1) to any point (x, y) is m".
- WorkingRows converting between the three forms with the same line on a StudioPlot.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit details: `../../checks/maths-a11-kit-needs.md`.

## 6. Two original candidate practice questions

### Question 1

Find the equation of the line through (-3, 4) and (1, -4) in gradient-intercept form.

**Worked answer:** m = (-4 - 4)/(1 + 3) = -2. y - 4 = -2(x + 3), so y = -2x - 2.

### Question 2

Find the equation of the line with gradient 2/3 through (6, -1), in general form.

**Worked answer:** y + 1 = (2/3)(x - 6). Multiply by 3: 3y + 3 = 2x - 12, so 2x - 3y - 15 = 0.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Wheelchair ramp rules (a gradient no steeper than 1 in 14).
- A road sign warning of a 10% grade.
- Two taxi trips of different lengths and fares fix the fare line.

Varied everyday contexts (money, phones, sport, travel, food). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only. Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
