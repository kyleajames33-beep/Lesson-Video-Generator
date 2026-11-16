# math-a11-w18: How does the parabola decide a quadratic inequality?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cie9a8bd69` (Quadratic and cubic functions): Solve quadratic inequalities [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w06: Solving linear inequalities, including the flip when multiplying by a negative. math-a11-w09: Interval notation with round and square brackets. math-a11-w14: The sign of a and the discriminant place a parabola against the x-axis.

**Prior video:** math-a11-w17.

**Start:** Recall that a parabola sits above the x-axis exactly where y > 0 (w14).

**Stop:** Solve quadratic inequalities: rearrange so one side is zero, find the roots, and read where the parabola is above or below the axis; handle a < 0, strict and non-strict signs, a repeated root and no real roots; give answers in inequality and interval notation. Quadratic models in context are w19.

**Next:** math-a11-w19.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-techniques-and-inequalities/lesson11.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson11.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `a02045bf8bc95df8ff59220b67d20606dc4ccce0f7f0b5d8952361501cb6adb4`. Title: Quadratic Inequalities. Lesson id maths-adv-y11-m6-l11.

Data-step ids: `recall-your-gut-answer-first`, `find-the-roots-then-read`, `what-you-ll-master`, `why-linear-methods-fail-here`, `model`, `quick-fire-practice`, `revisit-your-test-values`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source algebraic-techniques-and-inequalities/lesson11.sa.html, `we-1`

PROBLEM 1 · STANDARD UPWARD CASE Solve $x^2 - x - 6 > 0$, giving your answer in interval notation. 1 Factorise: $(x-3)(x+2) > 0$, so the roots are $3$ and $-2$ One side is already zero. 2 Leading coefficient $1 > 0$, so the parabola opens upward Above the axis outside the roots, below between them. 3 $x < -2$ or $x > 3$, that is $(-\infty, -2) \cup (3, \infty)$ Strict inequality, so the roots are excluded and both brackets are round.

### Source algebraic-techniques-and-inequalities/lesson11.sa.html, `we-2`

PROBLEM 2 · BETWEEN THE ROOTS Solve $x^2 - 4x + 3 \leq 0$, giving your answer in interval notation. 1 Factorise: $(x-1)(x-3) \leq 0$, so the roots are 1 and 3 Rearranged already, one side zero. 2 Upward parabola, and we want where it is $\leq 0$ That is the region between the roots. 3 $1 \leq x \leq 3$, that is $[1, 3]$ Non-strict, so the roots are included and both brackets are square.

### Source algebraic-techniques-and-inequalities/lesson11.sa.html, `we-3`

PROBLEM 3 · NEGATIVE LEADING COEFFICIENT Solve $-x^2 + 2x + 8 \geq 0$. 1 Multiply through by $-1$ and flip: $x^2 - 2x - 8 \leq 0$ Multiplying an inequality by a negative reverses the sign. 2 Factorise: $(x-4)(x+2) \leq 0$, roots $4$ and $-2$ Now a standard upward case. 3 $-2 \leq x \leq 4$, that is $[-2, 4]$ At or below the axis means between the roots, endpoints included.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: x^2 - x - 6 > 0 gives x < -2 or x > 3, (-inf, -2) U (3, inf).
- we-2: x^2 - 4x + 3 <= 0 gives 1 <= x <= 3, [1, 3].
- we-3: -x^2 + 2x + 8 >= 0 gives -2 <= x <= 4, [-2, 4].
- Edge cases the site omits: (x - 2)^2 > 0 holds for every x except 2; x^2 + 4 > 0 holds for all real x.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Dividing both sides by x (x may be negative or zero).
- Writing the answer as the roots only, or as one interval when the answer is two pieces.
- Writing "-2 > x > 3" for an outside answer, which no number satisfies.
- Forgetting to flip the sign when multiplying through by -1.
- Using round brackets for a non-strict inequality (or square brackets at infinity).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- The parabola coloured above and below the axis, with the matching parts of the x-axis shading onto a number line underneath (NumberLineRay and IntervalPicture, proposed for w06 and w09).
- A sign strip (+, -, +) under the roots that is read off the curve, not memorised.
- Multiplying by -1 shown as the parabola flipping over the x-axis while the inequality sign turns, so the roots stay put and the shaded region swaps.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

Solve 6 + x - x^2 > 0. Give your answer in interval notation.

**Worked answer:** Multiply by -1 and flip: x^2 - x - 6 < 0, so (x - 3)(x + 2) < 0. The upward parabola is below the axis between the roots: -2 < x < 3, that is (-2, 3).

### Question 2

Solve 2x^2 >= 5x + 3.

**Worked answer:** 2x^2 - 5x - 3 >= 0, so (2x + 1)(x - 3) >= 0. Roots -1/2 and 3; upward parabola, at or above the axis outside them: x <= -1/2 or x >= 3, that is (-inf, -1/2] U [3, inf).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A club's hoodie fundraiser: for which numbers of hoodies is the profit at least $500? The profit is a quadratic, and the answer is an interval (money).
- A garden sprinkler's jet over a 1 m fence: where along the lawn is the water higher than the fence? (garden).
- The headroom under a parabolic road arch: for which widths is the arch at least 4 m high, so a truck can pass? (travel).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- The site says the answer with no real roots is "either all real numbers or no solution" but has no repeated-root (discriminant 0) case. Add one line if it helps; it is a necessary condition only if a question uses it.
- "Never divide by the variable" in site copy is stronger than true (it is valid when the sign of x is known). Keep it as "do not divide by x unless you know its sign" if used.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
