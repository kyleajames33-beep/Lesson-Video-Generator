# math-s12-a10: How do the x-intercepts of a parabola locate its vertex?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Algebraic relationships):

- `ci75131568` (Quadratic relationships): Identify the x-intercepts and y-intercept of a parabola from a graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered. The official wording contains MathML; quote it from `sourceHtml`.
- `ciea5db2d8` (Quadratic relationships): Determine the axis of symmetry and vertex of a parabola using the midpoint of the x-intercepts shown on a graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.

Standard 1: no matching point.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-a09 (parabola, vertex, axis of symmetry, symmetry of the table). math-s11-l01: `ci94641a48` (reading the y-intercept from a graph). math-s11-f01: `ci7f303375` (substituting the axis value into the equation to get the vertex's height).

**Prior video:** math-s12-a09.

**Start:** a09 found the axis from a symmetric table. Exam graphs often show only where the curve crosses the axes. The two x-intercepts are a matching pair, so the axis is exactly halfway between them.

**Stop:** Read the x-intercepts (where y = 0) and the y-intercept (where x = 0) from a graph; for y = ax^2 + bx + c the y-intercept is c; the axis of symmetry is x = (x1 + x2)/2, the midpoint of the x-intercepts; substitute that x into the equation (or read the graph) to find the vertex's y-value; state the vertex as a point and say whether it is a maximum or a minimum. Meaning in a practical context and valid values are a11.

**Next:** math-s12-a11.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-relationships/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `88a40a5aff6c6e61711f564af8c084016ceceaf2e53cdb659c20213eac9dff74`. Title: Quadratic Relationships, Parabolas. Lesson id maths-std-y12-algrel-l04.

Older page format: no `data-step-id` sections. Cards used here: 02 ("$y$-intercept $= c$ | axis of symmetry: $x = \dfrac{x_1 + x_2}{2}$"), 04 Key terms ($x$-intercepts, $y$-intercept), 06 Graphing Parabolas, Key Features from Graphs (reading features and the midpoint example), `we-1`, the true or false item, the fill-the-blanks item (card 07) and SA 1.

### Source lesson04, card 06

"$x$-intercepts: where the curve crosses the $x$-axis ... A parabola can have zero (no crossing), one (touches the axis, double root), or two (crosses twice) $x$-intercepts." "Finding the axis of symmetry from two $x$-intercepts: If the $x$-intercepts are $(x_1, 0)$ and $(x_2, 0)$, the axis of symmetry is the midpoint: $x = \frac{x_1 + x_2}{2}$. Substitute this $x$-value back into the equation to find the $y$-coordinate of the vertex." "Example: A parabola has $x$-intercepts at $x = 1$ and $x = 5$. Axis of symmetry: $x = \frac{1 + 5}{2} = 3$. If the equation is $y = -(x-1)(x-5)$, vertex at $x=3$: $y = -(3-1)(3-5) = -(2)(-2) = 4$. Vertex: $(3, 4)$." True or false: "A parabola with $x$-intercepts at $x = -3$ and $x = 7$ has its axis of symmetry at $x = 2$" (true).

### Source lesson04, `we-1`

PROBLEM 1 · GRAPHING AND READING KEY FEATURES. "For $y = x^2 - 4x - 5$: (a) Find the $y$-intercept. (b) Using technology, identify the two $x$-intercepts. (c) Find the axis of symmetry. (d) Find the coordinates of the vertex." (a) $(0, -5)$. (b) "Using Desmos: $x$-intercepts at $(-1, 0)$ and $(5, 0)$". (c) $x = \dfrac{-1 + 5}{2} = 2$. (d) $y = 4 - 8 - 5 = -9$; vertex $(2, -9)$, a minimum.

### Source lesson04, fill-the-blanks and SA 1

Fill: "For the parabola $y = -2x^2 + 8x$, the $y$-intercept is [0]. The $x$-intercepts are at $x = 0$ and $x = $ [4]. The axis of symmetry is $x = $ [2]." SA 1: "$y = x^2 - 6x + 8$ ... $y$-intercept $(0,8)$ ... $x$-intercepts at $(2,0)$ and $(4,0)$ ... Axis: $x=3$ ... Vertex $(3,-1)$."

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- `we-1`: y-intercept −5; x-intercepts −1 and 5; axis 2; vertex (2, −9).
- Card 06 example: axis 3; −(3 − 1)(3 − 5) = 4; vertex (3, 4); −(x − 1)(x − 5) = −x^2 + 6x − 5.
- True or false: (−3 + 7)/2 = 2 (true).
- Fill: y-intercept 0; x-intercepts 0 and 4; axis 2 (vertex (2, 8), not asked).
- SA 1: y-intercept 8; x-intercepts 2 and 4; axis 3; vertex (3, −1).

Every example above was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Adding the intercepts without halving (axis x = 4 for −1 and 5).
- Halving a difference instead of averaging: (5 − (−1))/2 = 3 is the half-width, not the axis.
- Writing the axis as a number or a point instead of the line x = 2.
- Giving the vertex's x-value only.
- Reading the y-intercept as the vertex when the vertex is not on the y-axis.
- Sign slips with a negative intercept: (−1 + 5)/2 = 2, not (1 + 5)/2 = 3.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A graph with its two x-intercepts ringed; a bracket spans them and a marker slides to the exact middle, where a dashed vertical axis drops; the curve's two halves flash as mirror images.
- A number-line strip under the x-axis showing the average of the two intercepts (−1 and 5 to 2) with the count of steps from each side equal.
- Substitution as a short `WorkingRows` block: x = 2 into y = x^2 − 4x − 5 gives −9; the point (2, −9) pins to the curve.
- The y-intercept read from the graph and confirmed as c in the equation.
- One extra frame: a parabola with no x-intercepts or one touching the axis (named only, as on the site; the midpoint method needs two).

Advanced reuse (visual parts only): `StudioPlot`, `StudioSymmetryPairs` (integration-parts.tsx), `StudioFeatureMarks` (trig-parts.tsx), `quadCrossings` and `crossingX` helpers (a11-graph-parts.tsx), `IntervalPicture` (extras.tsx) for the midpoint strip, `WorkingBoard` parts. Advanced w14 (zeros, discriminant) and w15 (completing the square) solve algebraically; Standard reads intercepts from a graph, so reuse visuals only. No simulation is needed. Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

The graph of y = x^2 − 4x − 12 is shown. It crosses the x-axis at x = −2 and x = 6 and the y-axis at (0, −12). (a) Find the equation of the axis of symmetry. (b) Find the coordinates of the vertex.

**Worked answer:** (a) x = (−2 + 6)/2 = 2, so the axis is x = 2. (b) y = 2^2 − 4(2) − 12 = −16; the vertex is (2, −16), a minimum.

### Question 2

A firework shell is launched from the ground. Its height h metres after t seconds is h = −5t^2 + 40t. The graph shows it reaching the ground again at t = 8. (a) What are the t-intercepts of the graph? (b) When does the shell reach its greatest height? (c) What is the greatest height?

**Worked answer:** (a) t = 0 and t = 8. (b) At the midpoint, t = (0 + 8)/2 = 4 seconds. (c) h = −5(16) + 40(4) = 80 metres.

The card shows the graph with intercepts on the grid but no vertex label. Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "x = 4", crossed, "average, don't just add"). Answers were checked with SymPy. Question 2 is a model; real shells burst before they land (a11 discusses limits).

## 7. Everyday anchors

- A garden archway: its two feet are the x-intercepts on the path, and its highest point is exactly halfway between them (home and garden).
- A firework shell on New Year's Eve, rising and falling back: launch and landing times are the t-intercepts (events; carries Question 2).
- A javelin throw at a school athletics carnival: where it leaves the ground line and where it lands mark the intercepts, the top of its flight halfway along (sport; the javelin only, no athlete).

Varied everyday contexts (home, events, sport). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "archway", "firework" and "javelin" have no hits; tennis lobs and a polytunnel hoop were avoided because Advanced f06, s04 and w16 use them). No other Standard pack uses them. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. No new error was found in the parts of lesson04 used here.

Decisions for Claude:

- The syllabus says "shown on a graph". Read the x-intercepts from the graph; the site's factorising asides ((x − 5)(x + 1)) are optional checks, not a Standard skill to teach.
- SA 2 on the same page asks for the equation from a table and uses x = −b/(2a); it is beyond the Standard 2 points. Keep it out of the video.
- Keep the zero and one-intercept cases to a single frame: the midpoint method needs two x-intercepts.
- Pace: two points, one method, two examples. Fits 6 to 7 minutes. Not at risk.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
