# math-a11-c06: How does first principles turn a secant into a derivative?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci528c1909` (The derivative): Define the derivative of the function f(x) from first principles, as the limiting value of the gradient of the secant (f(x + h) - f(x))/h as h approaches zero, when this limiting value exists, and use the notation f'(x) = lim_(h → 0) (f(x + h) - f(x))/h [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `ci608a8811` (The derivative): Use first principles to find the derivative of quadratic functions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `cie02570a8` (The derivative): Find derivatives of constant and linear functions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c05: f'(x) as the gradient of the tangent; the notations f'(x) and dy/dx. math-a11-c04: The secant gradient (f(c + h) - f(c))/h and its settling value. math-a11-w02: Expanding brackets and factorising out a common factor before cancelling.

**Prior video:** math-a11-c05.

**Start:** Recall the secant gradient (f(x + h) - f(x))/h (c04) and the meaning of f'(x) (c05).

**Stop:** Define f'(x) = lim_(h -> 0) (f(x + h) - f(x))/h when the limit exists; use first principles to differentiate quadratics; find derivatives of constant and linear functions. The rules, including x^n for other powers, are c07.

**Next:** math-a11-c07.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `0bd149c84e6fad8fd772dd1496c32d958b33d0ed116f7133834cb3e7043744e5`. Title: The Derivative as the Gradient of a Tangent. Lesson id maths-adv-y11-m3-l03.

Data-step ids: `orient`, `the-two-moves`, `key-terms`, `the-derivative-as-the-gradient`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson03.sa.html, `we-1`

PROBLEM 1 · FIRST PRINCIPLES Find $f'(x)$ for $f(x) = x^2$ using first principles. 1 $f(x+h) = (x+h)^2 = x^2 + 2xh + h^2$ Replace every $x$ with $(x+h)$ and expand carefully. 2 $\frac{f(x+h) - f(x)}{h} = \frac{x^2 + 2xh + h^2 - x^2}{h} = \frac{2xh + h^2}{h}$ Form the difference quotient and simplify the numerator. 3 $\frac{h(2x + h)}{h} = 2x + h \quad (h \neq 0)$ Factor out $h$ from the numerator, then cancel with the denominator. 4 $f'(x) = \lim_{h \to 0} (2x + h) = 2x$ Take the limit as $h \to 0$. The $h$ term vanishes, leaving $2x$.

### Source introduction-to-differentiation/lesson03.sa.html, `we-2`

PROBLEM 2 · LINEAR FUNCTION Find $f'(x)$ for $f(x) = 3x + 1$ from first principles. 1 $f(x+h) = 3(x+h) + 1 = 3x + 3h + 1$ Replace $x$ with $(x+h)$ and distribute the 3. 2 $\frac{f(x+h) - f(x)}{h} = \frac{3x + 3h + 1 - (3x + 1)}{h} = \frac{3h}{h} = 3$ The constant terms cancel, leaving just $3h/h = 3$. 3 $f'(x) = \lim_{h \to 0} 3 = 3$ The limit of a constant is the constant itself. The derivative of a linear function is its slope.

Other worked examples in this lesson (we-3, the tangent equation, is c08's) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: f(x) = x^2: quotient (2xh + h^2)/h = 2x + h for h ≠ 0; limit 2x.
- we-2: f(x) = 3x + 1: quotient 3h/h = 3; limit 3.
- Drill 2: 2x + 3 gives 2. Q1: x^2 + 3x: quotient 2x + 3 + h, limit 2x + 3. Q3: mx + c gives m.
- lesson13 Q2: ((a + h)^2 - a^2)/h = 2a + h.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Expanding (x + h)^2 as x^2 + h^2.
- Cancelling h before the whole numerator has been factorised.
- Substituting h = 0 before simplifying (0/0).
- Forgetting to subtract the whole of f(x), including the constant term.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `WorkingBoard` with one row per step (substitute, expand, subtract, factor h, cancel, limit), the h terms tinted so they visibly drop out at the last row.
- A small graph beside the board where the secant shrinks as the board's "+ h" fades, linking the algebra to c04's picture.
- A line y = 3x + 1 with its tangent lying on top of it: the derivative of a line is its own gradient.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Find the derivative of f(x) = 3x^2 - 5x from first principles.

**Worked answer:** f(x + h) = 3x^2 + 6xh + 3h^2 - 5x - 5h. f(x + h) - f(x) = 6xh + 3h^2 - 5h. Dividing by h (h ≠ 0): 6x + 3h - 5. As h -> 0, f'(x) = 6x - 5.

### Question 2

Use first principles to show that f(x) = 7 has f'(x) = 0 and that g(x) = 4 - 2x has g'(x) = -2.

**Worked answer:** f(x + h) - f(x) = 7 - 7 = 0, so the quotient is 0 and the limit is 0. g(x + h) - g(x) = (4 - 2x - 2h) - (4 - 2x) = -2h, so the quotient is -2 and the limit is -2.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A water balloon thrown up from a balcony, h(t) = 3 + 4t - 5t^2 metres: first principles gives its vertical speed 4 - 10t at any moment (games; balloon only).
- A parking meter: $4 an hour is a line with derivative 4 at every moment, and a flat $10 event fee is a constant with derivative 0 (money).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- The site's first-principles card also expands (x + h)^3 for x^3. Keep cubics out of this video (the syllabus says quadratics) or as a one-line preview for c07.
- `cie02570a8` (constant and linear derivatives) sits here because first principles shows it most clearly; c07 restates it as the n = 0 and n = 1 cases.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
