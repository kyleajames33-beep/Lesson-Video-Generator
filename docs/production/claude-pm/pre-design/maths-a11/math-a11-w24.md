# math-a11-w24: How does Pythagoras give the equation of a circle centred at the origin?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci6022d0ef` (Circles and semicircles): Derive the equation of a circle of radius r with centre at the origin by considering Pythagoras’ theorem [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `cib62f4915` (Circles and semicircles): Graph circles of the form x^2 + y^2 = r^2 from their equations [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci7cdb9b15` (Circles and semicircles): Determine the equation of a circle of the form x^2 + y^2 = r^2 given its graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci4d0e93cc` (Properties of functions, relations and graphs): Extend the definitions of domain and range to relations [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered. Gap: Taught through the circle as a relation; WF03 itself defines domain and range for functions only.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w07: Relations, functions and the vertical line test. math-a11-w09: Domain and range in interval notation. Stage 5 (Year 10): Pythagoras' theorem.

**Prior video:** math-a11-w23.

**Start:** Recall Pythagoras' theorem and that a relation can fail the vertical line test (w07).

**Stop:** Derive x^2 + y^2 = r^2 from Pythagoras; graph it from its equation; test whether a point lies on it; determine the equation from a graph or a point; extend domain and range to relations and state them for the circle. Semicircles are w25; circles with other centres are g06.

**Next:** math-a11-w25.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson22.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson22.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `ba95b53d15b73b86d4e851c8504f79877263eef426f3f05d82dfdbb0803dcfc6`. Title: Circles Centred at the Origin. Lesson id maths-adv-y11-m1-l30.

Data-step ids: `recall-your-gut-answer-first`, `pythagoras-applied-to-every-point`, `what-you-ll-master`, `deriving-the-equation-from-pythagoras`, `model`, `quick-fire-practice`, `revisit-your-triangle`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson22.sa.html, `we-1`

PROBLEM 1 · DERIVING THE EQUATION Derive the equation of a circle of radius $r$ centred at the origin. 1 Let $(x, y)$ be any point on the circle, and drop a perpendicular to the $x$-axis This creates a right-angled triangle. 2 The legs have lengths $x$ and $y$, and the hypotenuse is the radius $r$ The radius joins the origin to the point. 3 By Pythagoras, $x^2 + y^2 = r^2$, and since $(x,y)$ was arbitrary this holds for every point That is the equation of the circle.

### Source working-with-functions/lesson22.sa.html, `we-2`

PROBLEM 2 · GRAPHING Graph $x^2 + y^2 = 49$, stating the radius, domain and range. 1 Radius $= \sqrt{49} = 7$ The right-hand side is $r^2$. 2 Axis points $(7,0)$, $(-7,0)$, $(0,7)$, $(0,-7)$ Set $y = 0$, then $x = 0$. 3 Domain $[-7, 7]$, range $[-7, 7]$ One radius either side of the centre in each direction.

### Source working-with-functions/lesson22.sa.html, `we-3`

PROBLEM 3 · TESTING A POINT Does the point $(3, -4)$ lie on the circle $x^2 + y^2 = 25$? 1 Substitute: $3^2 + (-4)^2$ Test whether the coordinates satisfy the equation. 2 $= 9 + 16 = 25$ Squaring removes the negative sign. 3 It equals 25, so yes, $(3,-4)$ lies on the circle A point is on the curve exactly when it satisfies the equation.

Read-only source: [working-with-functions/lesson23.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson23.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `b7dc15292366027dfd91478ac966025c56a70a50311628c75ef66d2d70395bfa`. Title: Semicircles and Circles from a Graph. Lesson id maths-adv-y11-m1-l31.

Data-step ids: `recall-your-gut-answer-first`, `the-plus-or-minus-splits`, `what-you-ll-master`, `splitting-the-circle-by-solving`, `model`, `quick-fire-practice`, `revisit-your-rearrangement`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson23.sa.html, `we-3`

PROBLEM 3 · EQUATION FROM A GRAPH A circle centred at the origin passes through the point $(3, 4)$. Find its equation and radius. 1 $r^2 = x^2 + y^2 = 3^2 + 4^2$ Any point on the circle gives $r^2$ directly. 2 $= 9 + 16 = 25$ So the right-hand side is 25. 3 $x^2 + y^2 = 25$, radius $\sqrt{25} = 5$ Check: the point is 5 units from the origin ✓

Other worked examples in this lesson (we-1, we-2) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- WF22 we-1: the derivation is algebra only; checked by substitution (3, -4) and (5, 0) on x^2 + y^2 = 25.
- WF22 we-2: x^2 + y^2 = 49 has radius 7, axis points (+/-7, 0), (0, +/-7), domain and range [-7, 7].
- WF22 we-3: 3^2 + (-4)^2 = 25, so (3, -4) lies on x^2 + y^2 = 25.
- WF23 we-3: through (3, 4): r^2 = 25, x^2 + y^2 = 25, radius 5.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading x^2 + y^2 = 25 as radius 25.
- Calling the triangle's legs x and y when x or y is negative (the lengths are |x| and |y|; their squares are the same).
- Thinking domain and range belong only to functions.
- Calling a circle a function.
- Forgetting that x^2 + y^2 = 0 is a single point and x^2 + y^2 = -4 has no points.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A point running round the circle, dragging its right-angled triangle with live legs, hypotenuse and the readout x^2 + y^2 = 25 that never changes.
- A vertical line sweeping across the circle with a hit count of 2 inside (VerticalLineSweep, proposed for w07), and the circle's shadows on both axes for domain and range (AxisShadow, proposed for w09).
- Inside, on or outside: a test point's distance squared compared with r^2 as a coloured gauge.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

A circle centred at the origin passes through (-8, 6). Find its equation and radius, and state its domain and range.

**Worked answer:** r^2 = (-8)^2 + 6^2 = 100, so x^2 + y^2 = 100 and r = 10. Domain [-10, 10], range [-10, 10].

### Question 2

Does the point (5, -5) lie inside, on or outside the circle x^2 + y^2 = 49? Explain.

**Worked answer:** 5^2 + (-5)^2 = 50 > 49, so its distance from the origin is sqrt50 > 7 and the point is outside the circle (just).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A garden sprinkler that wets a circle of radius 5 m: is the bench at (3, -4) going to get wet? (garden).
- A Bluetooth speaker with a 10 m range: which spots in the yard still connect? (phones).
- A dartboard: a dart's coordinates decide whether it landed inside a scoring ring (games).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Ownership: ci7cdb9b15 (equation from a graph) is owned here, but the site teaches it in lesson23 (w25's source). This pack and the route inputs add lesson23 `we-3` as a second source.
- The site's derivation calls the legs "length x" and "length y". Say |x| and |y|, or derive in the first quadrant and note that squaring removes the sign.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
