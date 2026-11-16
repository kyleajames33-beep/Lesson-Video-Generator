# math-a11-g03: How does replacing x by x/k or y by y/l stretch a graph?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cic990ec79` (Graph transformations): Describe a horizontal dilation as a stretch from the y-axis and a vertical dilation as a stretch from the x-axis [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: covered.
- `cide27d1f1` (Graph transformations): Establish using graphing applications that replacing x by x/k in the equation of a graph corresponds to a horizontal dilation of a graph by a factor of k, that replacing y by y/l corresponds to a vertical dilation by a factor of l, and determine the effects on the graph when the magnitude of the dilation factor lies between 0 and 1 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: partial. Gap: Dilations are taught as y = af(x) and y = f(bx). The syllabus framing (replace x by x/k, y by y/l, factor k or l) is not used, so the factor-versus-coefficient link needs teaching.
- `ci950cc744` (Graph transformations): Establish, using graphing applications, replacing x by x/k and replacing y by y/k in the equation of a graph corresponds to a dilation by a factor of k, that is, an enlargement of the graph when k > 1 and a reduction of the graph when 0 < k < 1 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3). Site coverage: missing. Gap: No lesson treats replacing both x by x/k and y by y/k as an enlargement or reduction by factor k.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-g01: replacing x or y in an equation moves every point the same way. math-a11-g02: images of points under a reflection. math-a11-w24: x^2 + y^2 = r^2 is the circle of radius r centred at the origin. math-a11-w15: y = ax^2 is narrower or wider than y = x^2.

**Prior video:** math-a11-g02.

**Start:** g02's final frame; a graph with the y-axis held fixed while every point moves away from it.

**Stop:** Describe a horizontal dilation as a stretch from the y-axis and a vertical dilation as a stretch from the x-axis; establish with a graphing application that replacing x by x/k is a horizontal dilation by factor k and replacing y by y/l a vertical dilation by factor l, including factors between 0 and 1 (compressions) and y = f(bx) as factor 1/b; establish that replacing x by x/k and y by y/k together is a dilation by factor k, an enlargement for k > 1 and a reduction for 0 < k < 1 (the unit circle becomes the circle of radius k). Combining with translations is g04.

**Next:** math-a11-g04.

**Year 12 dependency:** Year 12 d02 says "y = 2^x is y = e^x scaled horizontally by the factor 1/ln 2" and d13 says "3^(2x) is 3^x squashed sideways by 1/2"; t01 says "2x squashes by a half" and lists "a horizontal dilation by factor 1/2 doubles the width" as a misconception. All three need the factor language and the reciprocal link (inside x/k means factor k; inside bx means factor 1/b) from this video.

## 2. Site order, sections and worked examples

Read-only source: [graph-transformations/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/graph-transformations/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `fe6e40320e4db37743ff21d89b66c887a0fac386447e86e77b7c2b1c6b864bfb`. Title: Dilations of Functions. Lesson id maths-adv-y11-m1-l11.

Data-step ids: `orient`, `establish-it-yourself-with-a`, `apply`, `model`, `apply-apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source graph-transformations/lesson03.sa.html, `establish-it-yourself-with-a` (graphing task)

Task. Graph $y = \sqrt{x}$, then $y = 3\sqrt{x}$, then $y = \sqrt{3x}$, then $y = \sqrt{\tfrac{1}{3}x}$. Predict before you plot. Before you look: predict which of these stretches away from an axis and which squashes towards one. Then check, and note which axis each dilation acts from.

### Source graph-transformations/lesson03.sa.html, `we-dil-2`

Worked example 2 · horizontal dilation. Describe the transformation that maps $y = f(x)$ to $y = f(2x)$. 1 The 2 is inside the function, multiplying the input $x$. 2 $$\text{Dilation factor} = \frac{1}{2}$$ Inside = horizontal dilation, and the factor is the reciprocal of the coefficient. 3 Horizontal dilation by factor $\frac{1}{2}$ from the $y$-axis ✓ Since $\frac{1}{2} < 1$, the graph is compressed toward the $y$-axis.

### Source graph-transformations/lesson03.sa.html, `we-dil-3`

Worked example 3 · finding dilated coordinates. The graph of $y = f(x)$ passes through $(2, 3)$ and $(6, -1)$. Find the corresponding points on $y = 2f\!\left(\frac{x}{3}\right)$. 1 $2$ outside = vertical dilation by factor 2. $\frac{x}{3}$ inside = horizontal dilation by factor 3. 2 Apply the horizontal dilation: multiply $x$-coordinates by 3. $(2, 3) \to (6, 3)$ and $(6, -1) \to (18, -1)$ 3 Apply the vertical dilation: multiply $y$-coordinates by 2. $(6, 3) \to (6, 6)$ and $(18, -1) \to (18, -2)$ 4 $(6, 6)$ and $(18, -2)$ ✓

### Source graph-transformations/lesson03.sa.html, step `drill` and short answers

Drill 2: "If $(6, 4)$ lies on $y = f(x)$, find the corresponding point on $y = f(3x)$." $(2, 4)$. Drill 4: $x$-intercept $(4, 0)$ of $f$ becomes $(8, 0)$ on $y = f\!\left(\frac{x}{2}\right)$. Q9: $(1, 2)$, $(3, 5)$, $(6, -1)$ on (a) $2f(x)$: $(1, 4)$, $(3, 10)$, $(6, -2)$; (b) $f(3x)$: $(\frac{1}{3}, 2)$, $(1, 5)$, $(2, -1)$; (c) $2f(3x)$: $(\frac{1}{3}, 4)$, $(1, 10)$, $(2, -2)$. Q10 compares $2x^2$ with $(2x)^2 = 4x^2$.

we-dil-1 (3f(x), vertical factor 3) is a one-line identification. Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- we-dil-3: x times 3, y times 2: (6, 6) and (18, -2).
- Quick check: (4, 2) on 2f(x) is (4, 4). Drill: (6, 4) to (2, 4); (0, -2) to (0, -10); (4, 0) to (8, 0).
- Q9 (a), (b), (c) as quoted. Q10: 2x^2 is not 4x^2.
- Syllabus form: y/2 = sqrt(x/3) gives y = 2 sqrt(x/3); the point (9, 3) on sqrt(x) goes to (27, 6).
- Enlargement (original): replacing x by x/k and y by y/k in y = x^2 gives y = x^2/k (every parabola y = ax^2 with a > 0 is an enlargement or reduction of y = x^2, k = 1/a). The unit circle x^2 + y^2 = 1 becomes x^2 + y^2 = 9 for k = 3.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_g.py`, run with `python -I`, sympy 1.14.0). All site worked-example answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- f(2x) read as "dilation by factor 2" (it is factor 1/2; the site's trap 1). Seeing x/k first makes the factor visible.
- y/l read as "divide the heights by l" (it multiplies them: y/l = f(x) gives y = l f(x)).
- Describing a dilation without its axis ("narrower") or with the wrong axis ("from the x-axis" for a horizontal stretch).
- Thinking a factor between 0 and 1 is "negative" or a reflection.
- Thinking a dilation in one direction keeps the shape (it changes the proportions; only the same factor both ways keeps the shape; see S11-G02).
- Expecting a horizontal dilation to move the y-intercept, or a vertical one to move the x-intercepts.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A graphing-application screen (`ScreenApp`) with the site's sqrt(x) family, for the "establish using graphing applications" wording.
- A stretch from an axis: the y-axis drawn as a fixed amber line, every point of the graph sliding horizontally away from it in proportion to its distance (arrows lengthen with distance), and the matching vertical version from the x-axis. `FunctionSimulator` (xScale, yScale) carries the curve and points.
- The cause of "x/3 means stretch by 3": the new graph at x does what the old one did at x/3, so the old point at 2 now happens at 6. One input-matching strip, as g01's.
- The coefficient-to-factor link: x/3 is (1/3)x, so f(bx) is a dilation by factor 1/b. A two-column card "replace x by x/k: factor k" and "inside bx: factor 1/b".
- Enlargement: the unit circle with both replacements becoming the circle of radius 3 (w24's circle, g06's start), then y = x^2 enlarged to y = x^2/3 (a "wider" parabola is the same shape, larger).
- A factor slider passing below 1 (stretch turns to compression), never through 0.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Equal axis units for the enlargement scene. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

The point P(4, -3) lies on the graph of y = f(x). In the equation, x is replaced by x/2 and y is replaced by y/3. Find the image of P and describe each dilation.

**Worked answer:** x/2 is a horizontal dilation by factor 2 from the y-axis (x-coordinate times 2); y/3 is a vertical dilation by factor 3 from the x-axis (y-coordinate times 3). Image (8, -9). Crossed mistake: (2, -1) (dividing instead of multiplying).

### Question 2

The circle x^2 + y^2 = 16 is transformed by replacing x by 2x and y by 2y. Find the new equation and its radius, and describe the transformation.

**Worked answer:** (2x)^2 + (2y)^2 = 16 gives 4x^2 + 4y^2 = 16, so x^2 + y^2 = 4, radius 2. 2x is x/(1/2), so this is a dilation by factor 1/2 in both directions: a reduction. Crossed mistake: "enlargement by factor 2, radius 8".

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A photocopier set to 200% and to 50%: the same factor in both directions keeps the shape, an enlargement or a reduction (home, office).
- A podcast played at double speed in an app: the sound wave's time axis is squashed by factor 1/2, and turning the volume up stretches it vertically (music, phones).
- A photo stretched sideways to fill a wide banner in a design app: a dilation in one direction only, so round things look oval (shopping, design).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs, the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped, 17 November 2026; c04's map zoom and w03's TV diagonal were avoided). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only.

- **S11-G02** (logged): card 05 says dilations "preserve the overall proportions of the graph". A dilation in one direction changes proportions; only the same factor in both directions (`ci950cc744`) keeps the shape.

Decisions for Claude:

- Teach the syllabus form first (replace x by x/k, y by y/l, factor k or l), then the coefficient forms y = l f(x) and y = f(bx) with factor 1/b. The site teaches only the coefficient forms (logged in section 2 of the corrections file).
- `ci950cc744` is original teaching. The unit circle to radius k is the clearest case and sets up g06; the parabola y = x^2/k is the surprise.
- Year 12 assumes the reciprocal link (d02, d13, t01). Make "inside acts the opposite way" the memorable line, consistent with g01's "happens later".
- Negative factors are reflections combined with dilations; leave them to g04 (the site's "if a < 0" bullets).

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
