# math-a11-w26: How do symmetry tests tell even, odd and neither functions apart?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cib9db148d` (Properties of functions, relations and graphs): Define a function to be even if its graph is unchanged under reflection in the y-axis, and odd if its graph is unchanged under rotation of 180° about the origin [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `cif29d187f` (Properties of functions, relations and graphs): Develop and use the tests that a function f(x) is odd if f(-x) = -f(x) and a function f(x) is even if f(-x) = f(x) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci05dfc018` (Properties of functions, relations and graphs): Solve problems involving even and odd functions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w08: Substituting an expression, including -x, into f(x). math-a11-w07: Functions and their graphs.

**Prior video:** math-a11-w25.

**Start:** Recall substituting an expression into f(x), such as f(-x) (w08).

**Stop:** Define even as unchanged by reflection in the y-axis and odd as unchanged by a 180 degree rotation about the origin; develop and use the tests f(-x) = f(x) and f(-x) = -f(x); identify functions that are neither; solve problems (find f(-a) from f(a), complete a graph from one half, f(0) = 0 for an odd function defined at 0). Piecewise symmetry tests return in w28.

**Next:** math-a11-w27.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `cb5658cadcd0155ea42f1a4adf25ed0d068bbd256e77adf7b2d2b7a448d2e943`. Title: Odd & Even Functions. Lesson id maths-adv-y11-m1-l05.

Data-step ids: `orient`, `even-and-odd-functions`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson05.sa.html, `we-sym-1`

Worked example 1 · testing for even or odd Determine whether $f(x) = x^4 - 2x^2$ is even, odd, or neither. 1 Find $f(-x)$ Substitute $-x$ for every $x$ in the rule 2 $f(-x) = (-x)^4 - 2(-x)^2 = x^4 - 2x^2$ Even powers of $-x$ are always positive, so signs don't change 3 Compare: $f(-x) = x^4 - 2x^2 = f(x)$ ✓ Since $f(-x) = f(x)$, the function is even 4 Check for oddness: $-f(x) = -(x^4 - 2x^2) = -x^4 + 2x^2 \neq f(-x)$ Answer: $f(x)$ is an even function; graph has $y$-axis symmetry.

### Source working-with-functions/lesson05.sa.html, `we-sym-2`

Worked example 2 · testing for odd Determine whether $f(x) = x^3 + x$ is even, odd, or neither. 1 Find $f(-x) = (-x)^3 + (-x) = -x^3 - x$ Odd powers of $-x$ flip the sign of each term 2 Compare with $-f(x) = -(x^3 + x) = -x^3 - x$ Check whether $f(-x) = -f(x)$ 3 $f(-x) = -f(x)$ ✓, so the function is odd Not even: $f(-x) \neq f(x)$. So the function is not even. 4 Answer: $f(x) = x^3 + x$ is an odd function ✓ Graph has $180°$ rotational symmetry about the origin

### Source working-with-functions/lesson05.sa.html, `we-sym-3`

Worked example 3 · neither even nor odd Determine whether $f(x) = x^2 - 3x + 1$ is even, odd, or neither. 1 Find $f(-x) = (-x)^2 - 3(-x) + 1 = x^2 + 3x + 1$ Substitute $-x$ carefully into every term 2 Compare with $f(x) = x^2 - 3x + 1$ The middle terms differ: $+3x$ vs $-3x$ → not equal → not even 3 Compare with $-f(x) = -(x^2 - 3x + 1) = -x^2 + 3x - 1$ $f(-x) = x^2 + 3x + 1 \neq -x^2 + 3x - 1$ → not odd 4 Answer: $f(x)$ is neither even nor odd ✓ Any polynomial mixing even and odd powers is typically neither

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-sym-1: f(x) = x^4 - 2x^2 is even (f(-x) = f(x)), not odd.
- we-sym-2: f(x) = x^3 + x is odd (f(-x) = -f(x)), not even.
- we-sym-3: f(x) = x^2 - 3x + 1 is neither.
- Site drill and activity answers also check: x^6 even, x^3 - x odd, x^2 + x + 1 neither, 1/x odd; an even f with f(3) = 7 gives f(-3) = 7.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Deciding from one term ("it has an even power, so it is even").
- Sign slips in f(-x) such as (-x)^3 - 2(-x) = -x^3 - 2x.
- Assuming every function is even or odd.
- Comparing f(-x) only with f(x) and stopping, without testing -f(x).
- Mixing up the geometry: odd means 180 degree rotation about the origin, not reflection in the x-axis.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- The graph reflected in the y-axis (even) or rotated 180 degrees about the origin (odd) as a ghost copy that lands exactly on the original, or visibly misses (neither).
- Paired points (a, f(a)) and (-a, f(-a)) joined by a mirror line or a line through the origin, with live readouts.
- Half a graph completed by symmetry for a problem question.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

Is f(x) = x^5 - 4x^3 + x even, odd or neither? Show the test.

**Worked answer:** f(-x) = -x^5 + 4x^3 - x = -(x^5 - 4x^3 + x) = -f(x), so f is odd.

### Question 2

f is an odd function with f(2) = -5. Find f(-2). If f is defined at x = 0, what must f(0) be? Explain.

**Worked answer:** f(-2) = -f(2) = 5. Odd means f(-0) = -f(0), so f(0) = -f(0), giving f(0) = 0.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Playing cards: a court card looks the same after a half-turn (180 degree rotation), like an odd function's graph (games).
- A pair of sunglasses seen from the front: mirror symmetry about a vertical line, like an even function (everyday object).
- A domino tile: a 3|3 tile looks the same after a half-turn (games).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- The site's example lists include cos x, sin x and |x|. Trig (t strand) and absolute value (w30) come later in this route; avoid relying on them here.
- Site we-sym-1 step 2 says "Even powers of -x are always positive". The point is (-x)^4 = x^4 (equality), not positivity; reword if quoted.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
