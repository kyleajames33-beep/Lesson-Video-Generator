# math-a11-c14: How does the sign of f'(x) show increasing, decreasing and stationary?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cie435d18f` (Graphical applications of the derivative): Interpret f(x) as increasing at x = c when f'(c) > 0 and decreasing at x = c when f'(c) < 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `cief55e727` (Graphical applications of the derivative): Describe the behaviour of a function at a point as stationary when the tangent at the point is parallel to the x-axis, and recognise that f(x) is stationary at x = c when f'(c) = 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c07: Differentiating polynomials. math-a11-c05: f'(c) as the tangent gradient at x = c. math-a11-w18: Reading where a quadratic is positive or negative from its graph.

**Prior video:** math-a11-c13.

**Start:** Recall that f'(c) is the tangent's gradient at x = c (c05) and how to find where a quadratic is positive (w18).

**Stop:** Interpret f as increasing at x = c when f'(c) > 0 and decreasing when f'(c) < 0; describe f as stationary at x = c when the tangent is parallel to the x-axis, that is f'(c) = 0; find the x-values where a polynomial is increasing or decreasing by solving f'(x) > 0 or f'(x) < 0. Classifying stationary points of cubics is c16.

**Next:** math-a11-c15.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson10.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson10.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `917bb60210e0b1e8cdff4d1082b89ebbbd32ae7c1030c4f1e66933ca569d721e`. Title: Increasing and Decreasing Functions. Lesson id maths-adv-y11-m3-l11.

Data-step ids: `orient`, `the-two-moves`, `what-you-will-master`, `increasing-and-decreasing-functions`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson10.sa.html, `we-1`

PROBLEM 1 · QUADRATIC FUNCTION Find where $f(x) = x^2 - 4x + 3$ is increasing and decreasing. Apply 1 $f'(x) = 2x - 4$ Differentiate the function. 2 $f'(x) = 0 \Rightarrow 2x - 4 = 0 \Rightarrow x = 2$ Find the stationary point. This divides the number line into $(-\infty, 2)$ and $(2, \infty)$. 3 Test $x = 1$: $f'(1) = -2 < 0$ → decreasing on $(-\infty, 2)$. Test $x = 3$: $f'(3) = 2 > 0$ → increasing on $(2, \infty)$. Test a point in each interval to determine the sign of $f'(x)$.

### Source introduction-to-differentiation/lesson10.sa.html, `we-2`

PROBLEM 2 · CUBIC FUNCTION Find the intervals of increase and decrease for $f(x) = x^3 - 3x^2$. Apply 1 $f'(x) = 3x^2 - 6x = 3x(x - 2)$ Differentiate and factorise. Factorising is essential for accurate sign analysis. 2 $f'(x) = 0$ when $x = 0$ or $x = 2$ Find stationary points. These divide the number line into three intervals: $(-\infty, 0)$, $(0, 2)$, $(2, \infty)$. 3 Test $x = -1$: $f'(-1) = 3(-1)(-3) = 9 > 0$ → increasing. Test $x = 1$: $f'(1) = 3(1)(-1) = -3 < 0$ → decreasing. Test $x = 3$: $f'(3) = 3(3)(1) = 9 > 0$ → increasing. $f$ is increasing on $(-\infty, 0)$ and $(2, \infty)$; decreasing on $(0, 2)$.

Other worked examples in this lesson (we-3 is a quartic with a repeated factor; keep it as author context) are deferred source context, not part of this video.

Read-only source: [introduction-to-differentiation/lesson08.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson08.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `121950491455e5c1c83231028697dd551c4a6121377471fb97b8858646a39cac`. Title: Stationary Points. Lesson id maths-adv-y11-m3-l08.

Data-step ids: `orient`, `the-two-moves`, `what-you-will-master`, `finding-and-classifying-stationary-points`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson08.sa.html, card "Finding and classifying stationary points"

At a stationary point, the tangent to the curve is horizontal, the gradient equals zero. To find stationary points, solve $f'(x) = 0$.

The rest of lesson08 is c16's; its second derivative test is not a Year 11 method.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson10 we-1: x^2 - 4x + 3: f'(x) = 2x - 4, f'(1) = -2, f'(3) = 2; decreasing for x < 2, increasing for x > 2.
- lesson10 we-2: x^3 - 3x^2: f'(x) = 3x(x - 2); f'(-1) = 9, f'(1) = -3, f'(3) = 9.
- Drills: x^2 - 6x + 5 increasing for x > 3; x^3 - 3x decreasing for -1 < x < 1; 2x^3 - 9x^2 + 12x increasing for x < 1 or x > 2; 1/x decreasing on each side of 0. Q1: x^3 - 6x^2 + 9x + 1 increasing for x < 1 or x > 3. Q2: f'(x) = (x - 1)(x + 2)^2 positive for x > 1, negative for x < 1 except x = -2. Q3: -3 < k < 3.
- lesson08 hook: h = 20t - 5t^2 is stationary at t = 2, h = 20.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Saying f is increasing where f is positive (height) instead of where f' is positive (slope).
- Testing one value and assuming the sign for every interval.
- Calling every stationary point a turning point.
- Writing the interval with the stationary value included as if f were increasing there.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `SignChart` or `ProgressiveSignChart` under the graph: a point rides along f with its tangent; the strip below paints + (rising) and - (falling), with a dot at each stationary x.
- `StackedDerivativePanels`: f above, f' below on the same x-axis; where f' sits above the axis, f climbs.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

For f(x) = 2x^3 + 3x^2 - 12x, decide whether f is increasing, decreasing or stationary at x = -3, x = 0 and x = 1.

**Worked answer:** f'(x) = 6x^2 + 6x - 12 = 6(x + 2)(x - 1). f'(-3) = 24 > 0: increasing. f'(0) = -12 < 0: decreasing. f'(1) = 0: stationary.

### Question 2

Find the values of x for which f(x) = x^3 - 12x + 1 is decreasing.

**Worked answer:** f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2) < 0 when -2 < x < 2.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A plane's altitude over a flight: climbing (increasing), cruising level (stationary in the limit), descending (decreasing) (travel; the plane only).
- The number of people on a beach over a summer day: rising through the morning, flat around the peak, falling in the evening (travel, leisure; counts only, no people drawn).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `introduction-to-differentiation/lesson10.sa.html` is inconsistent about stationary points inside intervals. Its key terms say "A function $f$ is decreasing on an interval if $f'(x) < 0$ for all $x$ in that interval" and step `the-two-moves` says "A function is neither increasing nor decreasing at a stationary point itself", yet `we-3` concludes "$f'(x) \le 0$ → decreasing on $(-\infty, 3)$" (which contains the stationary point $x = 0$) and the match item says "$f(x) = x^3$, interval $(-\infty, \infty)$: Always increasing ($f' = 3x^2 \ge 0$)". lesson15 (step `read-the-steepness-plot-the`) handles this correctly. Correction for lesson10: key terms "If $f'(x) > 0$ for all $x$ in an interval, then $f$ is increasing on that interval", and we-3 "decreasing for $x < 0$ and $0 < x < 3$, stationary at $x = 0$" (or adopt lesson15's wording that $f$ is still decreasing across the isolated zero).
- `introduction-to-differentiation/lesson10.sa.html`, step `the-two-moves`. Old text: "In exams, this costs marks if you include the endpoint." This is a marking claim the site cannot support. Correction: delete the sentence, or "Use open intervals so the stationary point itself is not claimed as increasing."

Decisions for Claude:

- Use the syllabus's pointwise wording ("increasing at x = c when f'(c) > 0"), which avoids the interval argument above. If intervals are stated, give them as inequalities that exclude the stationary x-values.
- The site's "Move 2" in lesson08 teaches the second derivative test before flagging it as not Year 11. c14 and c16 use the sign of f' only.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
