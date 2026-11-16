# math-a11-w21: Why does y = k/x never meet its asymptotes?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cie579a8c2` (Reciprocal functions): Graph functions of the form f(x) = k/x, where k is a constant and k ≠ 0, and identify their hyperbolic shape and their asymptotes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `cibf45b7e8` (Reciprocal functions): Describe the behaviour of f(x) = k/x as x → ∞ and x → -∞ [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w09: Domain and range; an excluded value where a denominator is zero. math-a11-w08: Substitution into f(x).

**Prior video:** math-a11-w20.

**Start:** Recall that division by zero is undefined, so x = 0 is excluded from 6/x (w09).

**Stop:** Graph y = k/x for k > 0 and k < 0, name its hyperbolic shape and its asymptotes x = 0 and y = 0, state domain and range, and describe the behaviour as x -> inf, x -> -inf and on each side of 0. Variation models are w22 and w23; transformed hyperbolas start in g01.

**Next:** math-a11-w22.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson17.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson17.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `775d7599ee2da387a6d7223aa8d3d15b8ae7a5836a56608980936ff8853eedea`. Title: Reciprocal Functions. Lesson id maths-adv-y11-m1-l25.

Data-step ids: `recall-your-gut-answer-first`, `small-divisor-huge-answer`, `what-you-ll-master`, `why-the-curve-never-meets`, `model`, `quick-fire-practice`, `revisit-your-table-of-values`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson17.sa.html, `we-1`

PROBLEM 1 · SKETCHING WITH POSITIVE k Sketch $y = \dfrac{6}{x}$, showing its asymptotes, and state its domain and range. 1 Asymptotes: $x = 0$ and $y = 0$; draw both dashed Always mark them before the curve. 2 Points: $(1,6)$, $(2,3)$, $(3,2)$, $(6,1)$ and the negatives $(-1,-6)$, $(-2,-3)$ $k > 0$, so branches in the first and third quadrants. 3 Domain all real $x \neq 0$; range all real $y \neq 0$ Each excludes the value its asymptote sits at.

### Source working-with-functions/lesson17.sa.html, `we-2`

PROBLEM 2 · NEGATIVE k Describe how the graph of $y = \dfrac{-4}{x}$ differs from $y = \dfrac{4}{x}$. 1 Both have the same asymptotes, $x = 0$ and $y = 0$ The value of $k$ does not move the asymptotes. 2 $y = \frac{4}{x}$ has branches in quadrants 1 and 3; $y = \frac{-4}{x}$ has them in 2 and 4 A negative $k$ makes $y$ take the opposite sign to $x$. 3 Reflecting $y=\dfrac{4}{x}$ in the $x$-axis gives $y=-\dfrac{4}{x}$ The reflection changes each output's sign, so the branches move from quadrants I and III to quadrants II and IV. Since $4/(-x)=-4/x$, reflection in the $y$-axis gives the same graph.

### Source working-with-functions/lesson17.sa.html, `we-3`

PROBLEM 3 · DESCRIBING BEHAVIOUR Describe the behaviour of $y = \dfrac{3}{x}$ as $x \to 0$ and as $x \to \pm\infty$. 1 As $x \to 0^+$: the divisor shrinks while staying positive, so $y \to +\infty$ Approaching from the right. 2 As $x \to 0^-$: the divisor shrinks while staying negative, so $y \to -\infty$ Approaching from the left gives the opposite direction. 3 As $x \to +\infty$ and as $x \to -\infty$: $y \to 0$ The curve flattens towards the horizontal asymptote from above and from below.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Card 05 sequences: 6/3 = 2, 6/0.1 = 60, 6/0.001 = 6000; 6/100 = 0.06, 6/1000 = 0.006.
- we-1: y = 6/x through (1, 6), (2, 3), (3, 2), (6, 1), (-1, -6), (-2, -3); domain x not 0, range y not 0.
- we-2: y = -4/x has the same asymptotes as y = 4/x, branches in quadrants II and IV; -4/x = 4/(-x), so it is also the reflection in the y-axis.
- we-3: y = 3/x: as x -> 0+, y -> +inf; as x -> 0-, y -> -inf; as x -> +inf or -inf, y -> 0.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Sketching only one branch.
- Drawing the curve touching or crossing an axis.
- Giving one reason for both asymptotes; the vertical one comes from the excluded x, the horizontal one because k/x is never 0.
- Describing x -> 0 without separating the two sides.
- Placing the branches of a negative-k hyperbola in quadrants I and III.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A tracking point riding each branch with a live table (x, 6/x): small x sends the readout up without limit, large x sends it towards 0 (LiveReadoutBoard on StudioPlot).
- A k slider passing through positive values to negative ones, with the branches swinging from quadrants I and III to II and IV; k = 0 shown as excluded.
- Both asymptotes drawn dashed first, labelled with their separate reasons.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

For y = -12/x, state the asymptotes, the quadrants the branches lie in, two points on each branch, and the domain and range.

**Worked answer:** Asymptotes x = 0 and y = 0. k = -12 < 0, so the branches are in quadrants II and IV, for example (1, -12), (3, -4), (-1, 12), (-3, 4). Domain all real x except 0; range all real y except 0.

### Question 2

The point (2, -3) lies on y = k/x. Find k, then find y when x = -0.01 and when x = 600. What does each value show about the graph?

**Worked answer:** k = 2 x (-3) = -6. At x = -0.01, y = 600: just left of 0 the curve shoots up near the y-axis. At x = 600, y = -0.01: far to the right it flattens just below the x-axis.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Download time for a 600 MB file at s MB per second: t = 600/s, so faster speeds give shorter times, and the time never reaches 0 (phones).
- A 24 square metre vegetable patch: its length is 24 divided by its width (garden).
- Laps needed to swim 1500 m in a pool of length L: n = 1500/L, so a 50 m pool needs 30 laps and a 25 m pool needs 60 (sport).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- All three anchors use only the k > 0, x > 0 branch. The negative branch and k < 0 need the coded graph, not the anchor.
- "An asymptote is approached, never reached" is true for y = k/x but not for every function. Keep the scope to this function.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
