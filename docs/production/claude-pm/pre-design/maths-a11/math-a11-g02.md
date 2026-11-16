# math-a11-g02: How do -x and -y reflect a graph?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cifbd84c1c` (Graph transformations): Establish using graphing applications that replacing x by -x in the equation of a graph corresponds to the reflection of the graph in the y-axis, and that replacing y by -y corresponds to a reflection in the x-axis [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: covered (crosswalk). Pack note: the site writes the x-axis reflection only as y = -f(x); the syllabus form "replace y by -y" is not shown.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-g01: replacing x or y in an equation, and images of points. math-a11-w26: even and odd functions (unchanged by reflection in the y-axis, or by a half-turn about the origin). math-a11-e01: y = k a^(-x) as the reflection of y = k a^x.

**Prior video:** math-a11-g01.

**Start:** g01's final frame (a point and its translated image); now replace x by -x instead of x - a.

**Stop:** Establish with a graphing application that replacing x by -x reflects a graph in the y-axis and replacing y by -y reflects it in the x-axis; find images of points ((x, y) to (-x, y) and to (x, -y)) and the equation of a reflected graph (every x replaced, in brackets); both together give (x, y) to (-x, -y). Even and odd tests stay in w26 (referenced, not re-taught).

**Next:** math-a11-g03.

**Year 12 dependency:** Year 12 t01 treats "k < 0 also reflects" in the x-axis and needs "a number outside acts on every height as written". Deliver: replacing y by -y gives y = -f(x), every height negated, x-intercepts fixed.

## 2. Site order, sections and worked examples

Read-only source: [graph-transformations/lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/graph-transformations/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `fe58da094ef25c7cd8256209ed8052422ee5eb92a3f2c5c300c6fd3ac721ff6e`. Title: Reflections of Functions. Lesson id maths-adv-y11-m1-l10.

Data-step ids: `orient`, `establish-it-yourself-with-a`, `apply`, `model`, `apply-apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source graph-transformations/lesson02.sa.html, `establish-it-yourself-with-a` (graphing task)

Task. Graph $y = x^3 - 2x$, then $y = -(x^3 - 2x)$, then $y = (-x)^3 - 2(-x)$. Predict before you plot. Before you look: predict which axis each version is reflected in. Then check. One of these two reflections leaves the graph looking unchanged for this particular function. Which, and why?

### Source graph-transformations/lesson02.sa.html, `we-refl-2`

Worked example 2 · finding reflected coordinates. The graph of $y = f(x)$ passes through the points $(1, 3)$, $(2, -1)$, and $(0, 4)$. Find the corresponding points on the graph of $y = f(-x)$. 1 Identify the transformation: $f(-x)$ reflects the graph in the $y$-axis. This negates the $x$-coordinate of every point. 2 $(1, 3) \to (-1, 3)$ 3 $(2, -1) \to (-2, -1)$ 4 $(0, 4) \to (0, 4)$ ✓ The $y$-axis ($x = 0$) maps to itself, points on the axis don't move.

### Source graph-transformations/lesson02.sa.html, `we-refl-3`

Worked example 3 · equation of a reflected graph. Let $f(x) = x^3 - 2x$. Write the equation of the graph after reflection in the $x$-axis, and then after reflection in the $y$-axis. 2 $$y = -f(x) = -(x^3 - 2x) = -x^3 + 2x$$ 4 $$y = f(-x) = (-x)^3 - 2(-x) = -x^3 + 2x$$ ✓ Both reflections give the same result because $f$ is an odd function: $-f(-x) = f(x)$.

### Source graph-transformations/lesson02.sa.html, short answers

Q8. The graph of $y = f(x)$ passes through the points $(-2, 1)$, $(0, 3)$, and $(4, -2)$. Write the coordinates of the corresponding points on: (a) $y = -f(x)$ (b) $y = f(-x)$ (c) $y = -f(-x)$. Model answers: (a) $(-2, -1)$, $(0, -3)$, $(4, 2)$; (b) $(2, 1)$, $(0, 3)$, $(-4, -2)$; (c) $(2, -1)$, $(0, -3)$, $(-4, 2)$. Q9. Let $f(x) = x^2 - 4x + 3$ ... (a) $y = f(-x) = (-x)^2 - 4(-x) + 3 = x^2 + 4x + 3$ ... the original has its vertex at $(2, -1)$, while the reflected graph has its vertex at $(-2, -1)$.

we-refl-1 (describe y = -f(x)) is a one-line identification; the drill (points (3, -2), the even function x^4 - 3x^2, the claim about -f(-x)) is deferred context.

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-refl-2: (1, 3), (2, -1), (0, 4) to (-1, 3), (-2, -1), (0, 4).
- we-refl-3: -(x^3 - 2x) = -x^3 + 2x = (-x)^3 - 2(-x).
- Drill: (3, -2) to (3, 2) under -f(x) and to (-3, -2) under f(-x); x^4 - 3x^2 is unchanged by x to -x.
- Q8 (a), (b), (c) as quoted. Q9: x^2 + 4x + 3, vertices (2, -1) and (-2, -1). Q10: for f(x) = x + 1, -f(-x) = x - 1.
- Syllabus form: -y = f(x) rearranges to y = -f(x).
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_g.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Swapping the axes: "-x reflects in the x-axis" because the x is the one changed.
- Negating only the first term: (-x)^2 + 3(-x) written as -x^2 + 3x (the site's trap 3).
- Thinking the two reflections always give different graphs (for an odd function they agree, as we-refl-3 shows).
- Thinking reflecting in both axes is "back to the start" (it is a half-turn; only odd functions are unchanged).
- Moving points that lie on the mirror line.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A graphing-application screen (`ScreenApp`) with the site's cubic and its two reflections, for the "establish using graphing applications" wording.
- A fold animation: the graph flips over the y-axis (x to -x) and over the x-axis (y to -y), each point carried along a perpendicular to the mirror with its coordinates readout changing sign. `FunctionSimulator` supports folds (xScale or yScale passing through 0); one fold per scene.
- The cause of "-x reflects in the y-axis": the new graph at x does what the old graph did at -x, so every height is copied to the mirror-image x.
- A point table (x, y), (-x, y), (x, -y) filling for the three Q8 points, with points on an axis staying put.
- A one-frame link to w26: an even graph folding onto itself, an odd graph needing both folds. Reference only.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

The graph of y = f(x) passes through A(-3, 2), B(0, -1) and C(4, 0). Find the images of A, B and C when y is replaced by -y in the equation, and when x is replaced by -x.

**Worked answer:** Replacing y by -y negates every y-coordinate: (-3, -2), (0, 1), (4, 0). Replacing x by -x negates every x-coordinate: (3, 2), (0, -1), (-4, 0). C stays fixed under the first (it is on the x-axis) and B under the second (on the y-axis). Crossed mistake: (3, 2) for A under the first.

### Question 2

For f(x) = 2^x, write the equations of the graphs obtained by (a) replacing x by -x and (b) replacing y by -y. State the y-intercept and the horizontal asymptote of each.

**Worked answer:** (a) y = 2^(-x) (the same as (1/2)^x): y-intercept (0, 1), asymptote y = 0. (b) -y = 2^x, so y = -2^x: y-intercept (0, -1), asymptote y = 0. Crossed mistake: y = (-2)^x for (a).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Mirror lettering on the bonnet of an ambulance: written reversed so it reads correctly in a driver's rear-view mirror, a left-right reflection in a vertical line (travel).
- Reversing a sound clip in an audio app: the loudness graph is mirrored left to right, so the fade-out becomes a fade-in (music).
- A street sign reflected upside down in a puddle: a reflection in a horizontal line, every height negated (home, travel).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs, the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped, 17 November 2026; w26's sunglasses, playing cards and dominoes are symmetry anchors and are not reused). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only. No new copy error was found in this lesson; every model answer checks.

Decisions for Claude:

- Teach the syllabus form "replace y by -y" first (it matches g01's "replace y by y - b"), then rearrange to y = -f(x).
- w26 already owns even and odd. Use the site's cubic (an odd function) only as the surprise "two different moves, one result" and refer to w26 for the tests, without re-teaching them.
- Reflecting in both axes is shown once as a half-turn; it is not a separate syllabus point.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
