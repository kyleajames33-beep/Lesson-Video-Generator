# math-a11-c15: How do we sketch y = f'(x) from the graph of y = f(x)?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci63650902` (Graphical applications of the derivative): Graph y = f'(x) for a given graph of a function y = f(x) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c14: f' > 0 where f rises, f' < 0 where f falls, f' = 0 at stationary points. math-a11-c05: f' is itself a function with its own graph. math-a11-w20: Shapes of quadratic and cubic graphs.

**Prior video:** math-a11-c14.

**Start:** Recall the sign rules (c14); now draw f' as a graph instead of a sign strip.

**Stop:** Graph y = f'(x) from a given graph of y = f(x): zeros of f' under stationary points, sign from rising or falling, size from steepness (largest where f is steepest), the degree dropping by one for polynomials, and a break in f' at a corner of f. Reading physical meaning from both graphs is c17.

**Next:** math-a11-c16.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson15.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson15.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `2f6baee40eeee9ac7f227284fd382c332e6412b6ec7b7514c6e792fd8cd5c75b`. Title: Graphing the Derivative. Lesson id maths-adv-y11-m3-l19.

Data-step ids: `recall-your-gut-answer-first`, `read-the-steepness-plot-the`, `what-you-ll-master`, `from-shape-to-sign`, `model`, `quick-fire-practice`, `revisit-your-sketch-of-y`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson15.sa.html, `we-1`

PROBLEM 1 · FROM A PARABOLA The graph of $f$ is a parabola with a minimum at $x = 3$, falling to the left of it and rising to the right. Sketch $f'$. 1 Stationary at $x = 3$, so $f'$ has its only $x$-intercept at $x = 3$ The skeleton first. 2 $f$ falls for $x < 3$, so $f' < 0$ there; $f$ rises for $x > 3$, so $f' > 0$ Sign from shape. 3 $f'$ is a straight line through $(3, 0)$ with positive gradient A quadratic $f$ gives a linear $f'$, so the degree drops by one.

### Source introduction-to-differentiation/lesson15.sa.html, `we-2`

PROBLEM 2 · FROM A CUBIC A cubic $f$ has a maximum at $x = -1$ and a minimum at $x = 2$. Describe the graph of $f'$. 1 Two stationary points, so $f'$ has $x$-intercepts at $x = -1$ and $x = 2$ One zero per stationary point. 2 $f$ rises before $-1$, falls between $-1$ and $2$, rises after $2$ So $f' > 0$, then $f' < 0$, then $f' > 0$. 3 $f'$ is an upward parabola cutting the axis at $x = -1$ and $x = 2$ A cubic $f$ gives a quadratic $f'$.

### Source introduction-to-differentiation/lesson15.sa.html, `we-3`

PROBLEM 3 · A CORNER Sketch the derivative of $f(x) = |x|$. 1 For $x < 0$ the gradient is $-1$ The left branch is a line of slope $-1$. 2 For $x > 0$ the gradient is $1$ The right branch has slope $1$. 3 At $x = 0$ the two disagree, so $f'(0)$ does not exist The sketch is two horizontal rays with an open circle at $x = 0$.

### Source introduction-to-differentiation/lesson15.sa.html, card "Fixing the skeleton"

Start your sketch by marking every stationary point of $f$ and dropping a zero of $f'$ directly below or above each one. Those intercepts are the skeleton. Then fill in the sign between them, using whether $f$ rises or falls on each interval. Finally, judge the height. Where $f$ is steepest, $f'$ reaches its largest magnitude; where $f$ flattens out, $f'$ approaches the axis.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: parabola with minimum at x = 3 -> f' a rising line through (3, 0).
- we-2: cubic with maximum at x = -1, minimum at x = 2 -> f' an upward parabola with zeros -1 and 2.
- we-3: |x| -> f' = -1 for x < 0, 1 for x > 0, undefined at 0. Q3: |x - 3| similarly at x = 3. Q1: maximum at -2, minimum at 1 -> zeros -2 and 1, positive outside. Practice: a quartic gives a cubic f'.
- Original check: for f'(x) = -(x + 1)(x - 3) the steepest rise of f is at x = 1, the vertex of f'.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Copying the shape of f instead of plotting its slope.
- Putting the zeros of f' under the x-intercepts of f instead of under the stationary points.
- Drawing f' highest where f is highest instead of where f is steepest.
- Joining f' across a corner of f.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `PairedDerivativePanel` or `DerivativeTracer`: the tangent rides along f while a pen draws f' below at the same x, with dashed drop-lines from each stationary point to a zero of f'.
- A slope-gauge needle beside the rider (steep up, flat, steep down) whose reading is the f' pen's height.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

A cubic f has a minimum at x = -1 and a maximum at x = 3, and f decreases for large x. Describe the graph of y = f'(x), including where it is positive and where it is greatest.

**Worked answer:** f' is a downward parabola with x-intercepts -1 and 3, positive between them and negative outside. It is greatest midway, at x = 1, where f rises most steeply.

### Question 2

The graph of f is a parabola with vertex (2, 5) that opens downward and passes through (0, 1). Sketch y = f'(x), giving its intercepts.

**Worked answer:** f(x) = -(x - 2)^2 + 5, so f'(x) = -2x + 4: a falling line with x-intercept 2 (under the vertex) and y-intercept 4.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A garage roller door opening and closing: its height graph against time, and below it the door's speed graph, zero when it pauses at the top (home).
- A playground swing's empty seat: its height rises and falls, and its vertical speed graph crosses zero at each highest and lowest point (games).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- lesson15 already uses the careful wording about isolated zeros of f' (x^3 is strictly increasing). Keep its key-fact phrasing; it contradicts lesson10 (see the c14 pack).

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
