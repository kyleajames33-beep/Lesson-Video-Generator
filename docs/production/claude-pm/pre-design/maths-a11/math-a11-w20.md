# math-a11-w20: How do the factors of a cubic shape its graph?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci5c1f54ca` (Quadratic and cubic functions): Recognise and graph cubic functions of the form f(x) = kx^3 and f(x) = k(x - a)(x - b)(x - c), where a, b, c and k are constants and k ≠ 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w14: x-intercepts from factored form by the null factor law. math-a11-w16: Sketching from labelled features.

**Prior video:** math-a11-w19.

**Start:** Recall that factored form gives the x-intercepts straight away (w14).

**Stop:** Recognise and graph cubics y = kx^3 and y = k(x - a)(x - b)(x - c): x-intercepts, y-intercept, end behaviour from the sign of k, and a repeated factor that touches the axis instead of crossing. Translated cubics y = k(x - b)^3 + c belong to graph transformations (g01); exact turning points wait for calculus (c16).

**Next:** math-a11-w21.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson15.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson15.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `ecd404fe733ac55c409703f59eb475638370c1967bd8462ed514411bcadf9253`. Title: Graphing Parabolas and Cubics. Lesson id maths-adv-y11-m1-l23.

Data-step ids: `recall-your-gut-answer-first`, `find-the-features-then-draw`, `what-you-ll-master`, `sketching-a-parabola-from-its`, `model`, `quick-fire-practice`, `revisit-the-cubic-you-predicted`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson15.sa.html, `we-3`

PROBLEM 3 · SKETCHING A CUBIC Sketch $y = (x - 1)(x - 2)(x - 3)$, showing its intercepts. 1 $x$-intercepts at $x = 1$, $x = 2$ and $x = 3$ One from each bracket. 2 $y$-intercept: $(0-1)(0-2)(0-3) = -6$ Substitute $x = 0$. 3 $a > 0$, so the curve rises from bottom left to top right, turning twice between the crossings Three crossings force two turning points.

### Source working-with-functions/lesson15.sa.html, card 07 (repeated factor)

A repeated factor flattens the curve. $y = x(x-2)^2$ crosses at $x = 0$ but only touches at $x = 2$, flattening against the axis, because the repeated factor behaves like the squared bracket in a parabola.

Other worked examples in this lesson (we-1, we-2) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-3: y = (x - 1)(x - 2)(x - 3): x-intercepts 1, 2, 3; y-intercept -6; k > 0 so it rises from bottom left to top right with two turns (turning points at x = 2 +/- sqrt3/3, for the author only; not taught here).
- Card 07: y = x(x - 2)^2 meets the axis at 0 (crosses) and 2 (touches); y(1) = 1, y(3) = 3, y(-1) = -9.
- Original kx^3 points for teaching: y = x^3 passes (-2, -8), (-1, -1), (0, 0), (1, 1), (2, 8); k < 0 reflects it in the x-axis.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading x-intercepts with the wrong sign from the brackets.
- Drawing a cubic with k < 0 rising to the right.
- Crossing the axis at a repeated root instead of touching.
- Thinking every cubic has two turning points (y = kx^3 has none).
- Treating the y-intercept as k instead of k(-a)(-b)(-c).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A sign walk: a point slides along the x-axis while each bracket's sign flips at its root, and the product's sign (above or below the axis) is painted on the curve as it is drawn.
- A k slider on y = kx^3 from positive to negative, showing the reflection and that there is no turning point.
- A repeated-root comparison: (x - 1)(x - 2)(x - 3) morphing into x(x - 2)^2 as two roots merge, so touching is seen as two crossings joining.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

Sketch y = -(x + 2)(x - 1)(x - 3), showing all intercepts and the direction the curve takes at each end.

**Worked answer:** x-intercepts -2, 1 and 3. y-intercept -(2)(-1)(-3) = -6. k = -1 < 0, so the curve comes down from the top left and leaves to the bottom right, crossing at each root.

### Question 2

A cubic of the form y = k(x - a)(x - b)(x - c) has x-intercepts -1, 2 and 4 and passes through (0, 16). Find k and the equation.

**Worked answer:** y = k(x + 1)(x - 2)(x - 4). At x = 0: 16 = k(1)(-2)(-4) = 8k, so k = 2. y = 2(x + 1)(x - 2)(x - 4) = 2x^3 - 10x^2 + 4x + 16.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- An open takeaway tray folded from a 30 cm by 20 cm card after cutting squares of side x from the corners: V = x(30 - 2x)(20 - 2x), with zeros 0, 10 and 15 and a practical domain 0 < x < 10 (food).
- A cube-shaped storage crate: its volume is x^3, so doubling the side gives eight times the space (y = kx^3, home).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `working-with-functions/lesson15.sa.html`, step `find-the-features-then-draw`, key facts and card 07. Old text: "The other syllabus form is $y = a(x-r)^3 + k$, which does not turn at all. It has a single point of inflection at $(r, k)$". The 2024 point `ci5c1f54ca` names $f(x) = kx^3$ and $f(x) = k(x - a)(x - b)(x - c)$; the translated form is from the 2017 syllabus, and point of inflection is Year 12 language. Correction: "The other syllabus form is $y = kx^3$, which passes through the origin and flattens there without turning. Translated cubics come with graph transformations."

Decisions for Claude:

- The site page teaches "y = a(x - r)^3 + k" as "the other syllabus form" and uses "point of inflection". The 2024 syllabus forms are kx^3 and k(x - a)(x - b)(x - c); the translated form is 2017 content and inflection is Year 12 language (section 8). Teach kx^3 and leave translations to g01.
- Only two anchors are offered; both carry the zeros or the kx^3 scaling. Claude may decline both and keep the coded graphs.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
