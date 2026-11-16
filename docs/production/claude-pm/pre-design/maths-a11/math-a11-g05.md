# math-a11-g05: How do we track domain, range, intercepts and asymptotes through transformations?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cid4fd3807` (Graph transformations), shared with g04: Apply reflections, translations and dilations to functions within the scope of the Mathematics Advanced course, excluding trigonometric functions, determine the function rule and the graph of the transformed function, the domain and range of the transformed graph, any intercepts, asymptotes and discontinuities where appropriate, and describe which transformations have been applied [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: covered (crosswalk). **g05 owns** the graph of the transformed function, its domain and range, intercepts, asymptotes and discontinuities. **g04 owns** writing the rule from a described sequence and describing the sequence from a rule; g05 uses both without re-teaching them. Pack note: the site never names discontinuities.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-g04: writing and reading a sequence of transformations. math-a11-w21: asymptotes of y = k/x. math-a11-e01: asymptote y = 0 of y = a^x. math-a11-e08: asymptote x = 0 and domain x > 0 of y = log_a x (e08 deferred its transformed-log examples to this strand). math-a11-w29: discontinuities. math-a11-w09: domain and range.

**Prior video:** math-a11-g04.

**Start:** g04's final rule, for example y = 3/(x - 2) + 1, with the parent y = 1/x ghosted behind it.

**Stop:** For a transformed function within the course (parabola, cubic, |x|, hyperbola, exponential, logarithm; not trigonometric), determine the rule and graph, the domain and range, intercepts, asymptotes and discontinuities, and describe the transformations applied: carry key points and asymptotes from the parent, then find intercepts by solving (a vertical change moves x-intercepts in a way the parent's intercepts cannot predict). Circles are g06.

**Next:** math-a11-g06.

**Year 12 dependency:** Year 12 t01 extends exactly this tracking (asymptotes moving with the squash, domain and range) to tan, sin and cos. Deliver: asymptotes are carried by the same transformation as points (vertical asymptote x = c moves horizontally only; horizontal asymptote y = d moves vertically only); domain follows horizontal moves, range follows vertical moves.

## 2. Site order, sections and worked examples

Read-only source: [graph-transformations/lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/graph-transformations/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `95abaf977c1895cba560d775df2ac26d5214a16e1b8c18a1ec5889eca86f59f2`. Title: Sketching & Modelling Transformed Functions. Lesson id maths-adv-y11-m1-l13.

Data-step ids: `orient`, `the-key-feature-method`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source graph-transformations/lesson05.sa.html, `we-sk-1`

Worked example 1 · sketching a transformed parabola. Sketch the graph of $y = -2(x - 3)^2 + 4$, showing the vertex and $x$-intercepts. 1 Parent function: $y = x^2$ 2 Transformations: $a = -2$, $h = 3$, $k = 4$ Reflection in $x$-axis, vertical dilation by 2, translation 3 right and 4 up. 3 Vertex: $(0, 0) \to (3, 4)$ 4 $x$-intercepts: $-2(x - 3)^2 + 4 = 0 \Rightarrow (x-3)^2 = 2 \Rightarrow x = 3 \pm \sqrt{2}$ 5 Sketch: downward parabola, vertex $(3, 4)$, $x$-intercepts at $x = 3 \pm \sqrt{2} \approx 1.59$ and $4.41$, $y$-intercept $(0, -14)$. ✓

### Source graph-transformations/lesson05.sa.html, `we-sk-2`

Worked example 2 · sketching a transformed hyperbola. Sketch the graph of $y = \dfrac{3}{x - 2} + 1$, showing asymptotes and key points. 2 Write as $y = 3f(x - 2) + 1$: $a = 3$, $b = 1$, $h = 2$, $k = 1$ 3 Asymptotes: VA $x = 0 \to x = 2$; HA $y = 0 \to y = 1$ 4 Key points: $(1, 1) \to (3, 4)$; $(-1, -1) \to (1, -2)$ 5 Sketch: hyperbola centred at $(2, 1)$ passing through $(3, 4)$ and $(1, -2)$, approaching asymptotes $x = 2$ and $y = 1$. ✓

### Source graph-transformations/lesson05.sa.html, drill and short answers

Drill 1: asymptotes of $y = \dfrac{2}{x + 1} - 3$: $x = -1$, $y = -3$. Drill 4: $y = \sqrt{x - 3} + 2$: domain $x \geq 3$, range $y \geq 2$. Q9: $y = \dfrac{2}{x + 1} - 3$: $x$-intercept $x = -\frac{1}{3}$, $y$-intercept $(0, -1)$, other point $(1, -2)$. Activity 4: $y = -2|x + 1| + 4$, vertex $(-1, 4)$, $x$-intercepts $x = 1$ or $x = -3$.

we-sk-3 (the profit parabola P = -12.5(x - 3)^2 + 50) is a modelling example; it checks, and is optional context.

### Source exponential-and-logarithmic-functions/lesson06.sa.html (deferred by e08 to this strand)

SHA256 `0416384db2c1c0a896aea2f84b94e849ff20fcff7149a94db810ef41195ce5ca`, lesson id maths-adv-y11-m4-l06; data-step ids `orient`, `the-two-moves`, `what-you-ll-master`, `sketching-logarithmic-functions`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

`we-2`: PROBLEM 2 · TRANSFORMED GRAPH Sketch $y = \log_2(x - 1) + 1$ and state the domain. 1 Start with $y = \log_2 x$: shift right 1 unit and up 1 unit. 2 Vertical asymptote: $x = 1$ (dashed line) 3 Key point: at $x = 2$, $y = \log_2(2-1)+1 = \log_2 1 + 1 = 0 + 1 = 1$. Point $(2, 1)$. 4 Domain: $x - 1 > 0 \Rightarrow x > 1$, i.e. $(1, \infty)$.

`we-3`: PROBLEM 3 · FIND EQUATION FROM GRAPH A logarithmic curve has vertical asymptote $x = 2$, passes through $(3, 0)$ and $(5, 1)$. Find its equation. ... 4 Equation: $y = \log_3(x - 2)$

Drill 3 answer: "$\log_2(x-3)+2=0 \Rightarrow \log_2(x-3)=-2 \Rightarrow x-3=2^{-2}=\frac{1}{4} \Rightarrow x=3.25$. Intercept $(3.25,0)$."

Only the parts named in the stop boundary belong to this video. Site lesson06 of graph-transformations (|f(x)|, f(|x|), reciprocals) is retired and not Year 11 Advanced; it is not used.

## 3. Recalculation

- we-sk-1: x-intercepts 3 +/- sqrt2 (about 1.59 and 4.41), y-intercept -14, vertex (3, 4).
- we-sk-2: (1, 1) to (3, 4), (-1, -1) to (1, -2); asymptotes x = 2, y = 1.
- we-sk-3: zeros at 1 and 5; -12.5x^2 + 75x - 62.5.
- Drill 1, drill 4, Q9 (x-intercept -1/3, y-intercept -1, (1, -2)), Activity 4 (x = 1, -3), Q10 (lands at t = 4): all match.
- Q8 model answer (see section 8): with f = (1/3)(x + 1)(x - 5) (turning point (2, -3), zeros -1 and 5), y = 2f(x - 1) + 4 has turning point (3, -2) (site right) but x-intercepts 3 +/- sqrt3, not 0 and 6. Without the + 4, 2f(x - 1) does have x-intercepts 0 and 6.
- Exponentials lesson06: we-2 point (2, 1), domain x > 1, x-intercept 3/2; we-3 log_3(x - 2) through (3, 0) and (5, 1); drill 3 x = 13/4.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_g.py`, run with `python -I`, sympy 1.14.0). One site model answer is wrong (S11-G05); all worked examples match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Carrying x-intercepts through a vertical translation as if they were fixed (the site's own Q8 answer).
- Leaving asymptotes behind, or moving a vertical asymptote vertically.
- Giving the range of a translated exponential as y > 0 (it is y > d for asymptote y = d, or y < d after an x-axis reflection).
- Giving the domain of log_a(x - h) as x > 0.
- Missing the discontinuity of a hyperbola at its vertical asymptote, or calling the asymptote part of the graph.
- Labelling only the shape and not the coordinates of intercepts and asymptote equations.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A feature ledger beside the tracer: rows "vertical asymptote", "horizontal asymptote", "key point", "domain", "range", filled as the parent's feature is carried (x = 0 to x = 2; y = 0 to y = 1), then a separate "intercepts: solve" row worked on the board.
- Asymptotes carried as lines by the same transform (vertical lines slide sideways only, horizontal lines slide up or down only). `FunctionSimulator` draws fixed asymptotes; carried ones are a kit need.
- Domain and range shadows on the axes for the hyperbola, the log (open end at the asymptote) and the exponential.
- The Q8 contrast: the parent's zeros carried by "+4" visibly miss the new curve; the curve crosses at 3 +/- sqrt3 instead.
- A discontinuity marker at x = 2 for y = 3/(x - 2) + 1 (w29's language).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

Sketch y = 2^(x + 1) - 4. Label the intercepts and the asymptote, and state the domain and range.

**Worked answer:** 2^x moved 1 left and 4 down. Asymptote y = -4. y-intercept: 2^1 - 4 = -2. x-intercept: 2^(x + 1) = 4 = 2^2, so x = 1. Domain all real x; range y > -4. Crossed mistake: range y > 0.

### Question 2

For y = 4/(x + 1) - 2, describe the transformations from y = 1/x, then state the asymptotes, the intercepts, the domain and the range.

**Worked answer:** Vertical dilation by factor 4 from the x-axis, translation 1 left, translation 2 down. Asymptotes x = -1 and y = -2 (the graph is discontinuous at x = -1). y-intercept 4 - 2 = 2. x-intercept: 4/(x + 1) = 2, so x = 1. Domain x ≠ -1; range y ≠ -2. Crossed mistake: asymptote x = 1.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Custom team caps with a $90 set-up fee and $12 a cap: the average cost per cap is 90/n + 12, a translated hyperbola whose asymptote y = 12 is the price it can never go below (shopping, money).
- A phone game's energy bar refilling towards 100: E = 100 - 100(0.9)^t is an exponential reflected in the x-axis and moved up, with asymptote E = 100 and range E < 100 (games).
- A drink chilling in a fridge towards 4 °C: T = 4 + 20(0.8)^t starts at 24 °C, with asymptote T = 4 (food, home).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs, the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped, 17 November 2026; w02's print costs, c12's cupcakes and c03's hot chocolate were avoided). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only.

- **S11-G05** (logged): the Q8 model answer gives the x-intercepts of y = 2f(x - 1) + 4 as 0 and 6 and says "vertical transformations preserve x-coordinates where f(x) = 0". The vertical translation moves the curve off those points.
- **S11-G06** (logged, minor): card 06 says reflections "can change the sign of intercepts or eliminate them entirely". A reflection never removes an intercept.

Decisions for Claude:

- The feature method: carry what the transformation carries (points, asymptotes, domain and range), then solve for intercepts. Q8 is the reason for the second step, so a corrected Q8 is a strong worked example.
- Include one exponential and one logarithm (e08 deferred we-2 and we-3 here), one hyperbola and one parabola or |x|. If that is too much for one video, split polynomials and |x| from hyperbolas, exponentials and logs (route recommendation).
- Name discontinuities explicitly (the syllabus says "discontinuities where appropriate"); the site never does.
- Trigonometric functions are excluded by the syllabus wording; keep them out.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
