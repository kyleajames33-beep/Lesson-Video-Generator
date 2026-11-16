# math-a11-w15: How does completing the square reveal the vertex and axis of a parabola?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci9c3bd164` (Quadratic and cubic functions): Show by completing the square on the general quadratic y = ax^2 + bx + c that the axis of symmetry is x = -b/(2a) where a, b and c are constants [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci9f2c04cb` (Quadratic and cubic functions): Identify the axis of symmetry and vertex of a parabola by completing the square on its quadratic function [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w14: Zeros, intercepts and the sign of a; the light hammock h = 1/4 x^2 - x + 1.5 left with "?" at its lowest point. math-a11-w04: Completing the square to solve a monic quadratic.

**Prior video:** math-a11-w14.

**Start:** Open on w14's final frame: the light hammock with its curve h = 1/4 x^2 - x + 1.5, a "?" at the lowest point and a dashed "axis?" line. Recall completing the square from w04.

**Stop:** Read the vertex (h, k) and axis x = h from y = a(x - h)^2 + k, with a minimum when a > 0 and a maximum when a < 0; complete the square when a is not 1; show by completing the square on y = ax^2 + bx + c that the axis is x = -b/(2a), and use the formula to find a vertex. Full sketches and equations from features are w16.

**Next:** math-a11-w16.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson14.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson14.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `86dacf75a1e2c039579d30958d110c06b57eda07f674347933ffcc0d51ae4d0d`. Title: Completing the Square, Axis and Vertex. Lesson id maths-adv-y11-m1-l22.

Data-step ids: `recall-your-gut-answer-first`, `a-square-is-never-negative`, `what-you-ll-master`, `reading-the-vertex-from-completed`, `deriving-the-axis-of-symmetry`, `model`, `quick-fire-practice`, `revisit-the-lowest-point`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson14.sa.html, `we-1`

PROBLEM 1 · COMPLETING THE SQUARE, a = 1 Write $y = x^2 - 6x + 11$ in completed-square form and state its vertex. 1 Half of $-6$ is $-3$, and $(-3)^2 = 9$ Halve and square the coefficient of $x$. 2 $y = (x - 3)^2 - 9 + 11 = (x-3)^2 + 2$ Add and subtract 9, then collect the constants. 3 Vertex $(3, 2)$, axis $x = 3$, a minimum since $a = 1 > 0$ Read straight from the form.

### Source working-with-functions/lesson14.sa.html, `we-2`

PROBLEM 2 · COMPLETING THE SQUARE, a NOT 1 Write $y = 2x^2 + 8x + 3$ in completed-square form and state its vertex. 1 $y = 2(x^2 + 4x) + 3$ Factor 2 from the $x$ terms only; the constant stays outside. 2 $x^2 + 4x = (x+2)^2 - 4$, so $y = 2[(x+2)^2 - 4] + 3$ Complete the square inside the bracket. 3 $y = 2(x+2)^2 - 8 + 3 = 2(x+2)^2 - 5$, vertex $(-2, -5)$ Distribute the 2, including through the $-4$.

### Source working-with-functions/lesson14.sa.html, `we-3`

PROBLEM 3 · USING THE FORMULA Find the vertex of $y = 3x^2 - 12x + 7$ using the axis-of-symmetry formula. 1 $a = 3$, $b = -12$, so $x = -\dfrac{-12}{2(3)} = 2$ The axis of symmetry, and the vertex $x$-coordinate. 2 $y = 3(2)^2 - 12(2) + 7 = 12 - 24 + 7 = -5$ Substitute back to get the $y$-coordinate. 3 Vertex $(2, -5)$, a minimum since $a = 3 > 0$ Faster than completing the square when only the vertex is wanted.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Hammock opening (from w14): h = 1/4 x^2 - x + 1.5 = 1/4 (x - 2)^2 + 1/2, so the lowest point is (2, 0.5) and the axis is x = 2. The formula agrees: -b/(2a) = 1/(2 x 1/4) = 2.
- we-1: x^2 - 6x + 11 = (x - 3)^2 + 2, vertex (3, 2), axis x = 3, minimum.
- we-2: 2x^2 + 8x + 3 = 2(x + 2)^2 - 5, vertex (-2, -5).
- we-3: 3x^2 - 12x + 7: axis x = 2, vertex (2, -5), minimum.
- Derivation (card 07): a(x + b/(2a))^2 - b^2/(4a) + c expands back to ax^2 + bx + c for all a not 0 (SymPy difference 0).
- Site quick-fire and short answers also check: x^2 + 4x + 1 = (x + 2)^2 - 3; axis of 2x^2 - 8x + 1 is x = 2; x^2 - 10x + 21 = (x - 5)^2 - 4; 3x^2 + 12x + 5 = 3(x + 2)^2 - 7.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading the vertex of (x + 4)^2 + 1 as (4, 1): the sign inside the bracket reverses.
- Factoring a out of the constant as well as the x terms, or forgetting that a multiplies the subtracted square (the -4 inside becomes -8 in we-2).
- Treating x = -b/(2a) as a rule to memorise only; the syllabus asks students to show it by completing the square.
- Calling the vertex a minimum without checking the sign of a.
- Stopping at the axis value and not substituting back for the vertex's y-coordinate (we-3).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Open on w14's final frame exactly: the light hammock, its coded curve, the "?" ring and the dashed "axis?" line. The completed square answers the "?": (x - 2)^2 is never negative, so the lowest height is 0.5 m at x = 2.
- A squared-bracket readout: as a slider moves x, a bar shows (x - h)^2 shrinking to 0 exactly at x = h while the curve's height bottoms out at k. One timeline drives both.
- Completing the square as tiles (the proposed CompleteSquareTiles mode of AlgebraTileGrid, from w04), then the same three lines on the general quadratic, with -b/(2a) landing on the axis.
- Mirror pairs of points across the axis on StudioPlot, so symmetry is seen, not stated.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

Write y = x^2 + 6x + 4 in completed-square form, and state its vertex and axis of symmetry.

**Worked answer:** Half of 6 is 3 and 3^2 = 9, so y = (x + 3)^2 - 9 + 4 = (x + 3)^2 - 5. Vertex (-3, -5), axis x = -3.

### Question 2

Write y = -2x^2 + 12x - 7 in completed-square form. State its vertex, whether the vertex is a maximum or a minimum, and the range.

**Worked answer:** y = -2(x^2 - 6x) - 7 = -2[(x - 3)^2 - 9] - 7 = -2(x - 3)^2 + 11. Vertex (3, 11). a = -2 < 0, so it is a maximum, and the range is y <= 11.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- The light hammock from w14 (fixed opening): its lowest point (2, 0.5) and axis x = 2 answer w14's "?" directly. Reuse the existing plates; no new anchor is needed for the opening.
- A park drinking fountain's water arc: the top of the arc is a maximum vertex and the arc is symmetric about it (an a < 0 example).
- A wok's cross-section: oil pools at the lowest point, on the axis of symmetry (an a > 0 example, cooking).

Varied everyday contexts (money, phones, sport, travel, food, games, home). Apart from the inherited hammock, none repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- The opening is fixed by w14's handoff (scene 13 and its final frame). The pack does not choose a new opening anchor; any second anchor is optional.
- Site copy says the sign reversal is the "same reversal as circles and translations". Circles (w24) and translations (g01) come later in this route, so do not lean on that link.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
