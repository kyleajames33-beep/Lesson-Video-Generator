# math-a11-c05: What is the derivative, and how do we write it?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cie4815a8e` (The derivative): Define f'(x), for any function f(x) and any value x, to be the gradient of the tangent to the curve y = f(x) at the point P(x, f(x)) if the tangent exists and is not vertical [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: partial. Gap: The tangent-gradient definition is given, but the condition that the tangent must exist and not be vertical is not stated.
- `cicb34a73b` (The derivative): Refer to f'(x) as the derivative of f(x) or the gradient, or derived, function of f(x) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci68ad7095` (The derivative): Define differentiation as the process of finding the derivative of a function [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci0ea72300` (Calculations with the derivative): Use the notation dy/dx and y' for the derivative of y when y is a function of x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci2f16a100` (Calculations with the derivative): Use the notation d/dx (f(x)) and f'(x) for the derivative of a function f(x) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c04: Secant gradients settle on the gradient of the curve at a point as h shrinks; a corner gives two different one-sided values. math-a11-w08: Function notation f(x). math-a11-w10: Vertical lines have no gradient.

**Prior video:** math-a11-c04.

**Start:** Recall that at each x the secants settle on one number (c04), then collect those numbers into a new function.

**Stop:** Define f'(x) as the gradient of the tangent to y = f(x) at P(x, f(x)), if the tangent exists and is not vertical; call f'(x) the derivative, gradient function or derived function; define differentiation as finding it; use the notations f'(x), d/dx(f(x)), dy/dx and y'. First principles algebra is c06; rules are c07.

**Next:** math-a11-c06.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `0bd149c84e6fad8fd772dd1496c32d958b33d0ed116f7133834cb3e7043744e5`. Title: The Derivative as the Gradient of a Tangent. Lesson id maths-adv-y11-m3-l03.

Data-step ids: `orient`, `the-two-moves`, `key-terms`, `the-derivative-as-the-gradient`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson03.sa.html, step `key-terms`

Derivative The rate of change of a function at a point; the gradient of the tangent line. Differentiation The process of finding the derivative of a function.

### Source introduction-to-differentiation/lesson03.sa.html, step `the-two-moves`, notation

Notation $f'(x)$ is Lagrange notation. $\frac{dy}{dx}$ is Leibniz notation. Both mean the same thing: the derivative of $f$ with respect to $x$.

Other worked examples in this lesson (we-1, we-2 and we-3 belong to c06 and c08) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- From lesson03 and lesson15: f(x) = x^2 has f'(x) = 2x, so f'(2) = 4, f'(-1) = -2 and f'(0) = 0 (a gradient function read point by point).
- Original checks: y = x^(1/3) has derivative 1/(3x^(2/3)), which grows without bound as x approaches 0 (vertical tangent, no f'(0)); y = |x - 2| has one-sided gradients -1 and 1 at x = 2 (no tangent).

Every value above was checked with SymPy (work in the scratchpad, sympy 1.14.0). This lesson has no site worked example for the definition itself.

## 4. Misconceptions and HSC-style traps

- Thinking f'(x) is one number rather than a function of x.
- Reading dy/dx as a fraction to cancel.
- Assuming every point of every graph has a derivative (corners and vertical tangents do not).
- Confusing f(2), the height, with f'(2), the gradient.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `DerivativeTracer` or `PairedDerivativePanel`: a point rides along y = x^2 with its tangent, and below it a second graph plots the tangent's gradient point by point, building the line y = 2x.
- Four notation chips that land on the same value at x = 2: f'(2), dy/dx at x = 2, y', d/dx(x^2) at x = 2.
- Two no-derivative cases side by side: |x - 2| with two one-sided tangents that disagree, and y = x^(1/3) whose tangent at the origin stands vertical.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

For f(x) = x^2 the gradient function is f'(x) = 2x. Find f'(3) and f'(-2), and say what each tells you about the tangent at that point.

**Worked answer:** f'(3) = 6: the tangent at (3, 9) rises 6 for every 1 across. f'(-2) = -4: the tangent at (-2, 4) falls 4 for every 1 across.

### Question 2

For each graph, decide whether the derivative exists at the given point, with a reason: (a) y = |x - 2| at x = 2; (b) y = x^(1/3) at x = 0; (c) y = x^2 at x = 0.

**Worked answer:** (a) No: the gradients from the left and right are -1 and 1, so there is no single tangent. (b) No: the tangent is vertical, and a vertical line has no gradient. (c) Yes: the tangent is horizontal and f'(0) = 0.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A water slide's side profile: at every point it has a steepness, and the gradient function is a list of those steepnesses along the slide (games, leisure).
- A share price line on a phone app: the app's "rising or falling right now" arrow is the sign of the gradient function at that moment (money, phones).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `introduction-to-differentiation/lesson03.sa.html`, step `key-terms`. Old text: "Gradient of Tangent The slope of the line that touches a curve at exactly one point, equal to $f'(a)$." A tangent can meet the curve again elsewhere (the tangent to $y = x^3$ at $x = 1$ meets it again at $x = -2$), and the definition needs the tangent to exist and not be vertical. Correction: "Gradient of Tangent The slope of the line that touches the curve at a point and matches its steepness there, equal to $f'(a)$ when that tangent exists and is not vertical."
- `introduction-to-differentiation/lesson03.sa.html`, step `the-derivative-as-the-gradient`. Old text: "The limit captures the exact moment when the two points become one, and the secant becomes the tangent." The two points never become one (h is never 0; the lesson itself asks "Why the limit $h \to 0$ is needed instead of setting $h = 0$"). Correction: "The limit is the value the secant gradients approach as the second point slides towards the first, and that value is the gradient of the tangent."

Decisions for Claude:

- `cie4815a8e` is partial: the site never states "if the tangent exists and is not vertical". The two no-derivative cases are original teaching.
- Leibniz notation is needed by Year 12 d01 ("dy/du × du/dx"); show dy/dx as one symbol here and let c10 earn the fraction-like behaviour.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
