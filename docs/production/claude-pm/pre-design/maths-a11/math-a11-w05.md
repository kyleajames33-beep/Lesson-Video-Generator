# math-a11-w05: What does the discriminant tell us before we solve?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci887fe9c5` (Algebraic techniques): Define the discriminant as Δ = b^2 - 4ac and use it to solve problems involving the number of real roots of a quadratic equation and determine the conditions for roots to be equal, distinct, real or rational [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w04: The quadratic formula and the sqrt(b^2 - 4ac) inside it.

**Prior video:** math-a11-w04.

**Start:** Recall the quadratic formula.

**Stop:** Define the discriminant and use it for the number of real roots, equal roots, and rational versus irrational roots, including unknown-coefficient problems. Graph position stays for w14.

**Next:** math-a11-w06.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-techniques-and-inequalities/lesson10.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson10.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `29b461b91831254fd2a241c18f6008ea86660d180600c5dbfa1b956f8d96d5e7`. Title: The Discriminant. Lesson id maths-adv-y11-m6-l10.

Data-step ids: `recall-your-gut-answer-first`, `the-discriminant-is-what-sits`, `what-you-ll-master`, `what-the-discriminant-tells-you`, `model`, `quick-fire-practice`, `revisit-your-prediction`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source algebraic-techniques-and-inequalities/lesson10.sa.html, `we-1`

PROBLEM 1 · NATURE OF THE ROOTS Determine the number and nature of the roots of $2x^2 - 5x + 3 = 0$. 1 $a = 2$, $b = -5$, $c = 3$ Read coefficients with their signs. 2 $\Delta = (-5)^2 - 4(2)(3) = 25 - 24 = 1$ Square $-5$ to get $+25$. 3 $\Delta = 1 > 0$ and 1 is a perfect square, so there are two distinct rational roots Positive means two roots; perfect square means rational.

### Source algebraic-techniques-and-inequalities/lesson10.sa.html, `we-2`

PROBLEM 2 · FINDING AN UNKNOWN Find the values of $k$ for which $x^2 + kx + 9 = 0$ has equal roots. 1 Equal roots means $\Delta = 0$ Translate the condition into the discriminant. 2 $\Delta = k^2 - 4(1)(9) = k^2 - 36$ Substitute $a = 1$, $b = k$, $c = 9$. 3 $k^2 - 36 = 0 \Rightarrow k = \pm 6$ Solve, keeping both signs.

### Source algebraic-techniques-and-inequalities/lesson10.sa.html, `we-3`

PROBLEM 3 · PROVING NO REAL ROOTS Show that $3x^2 + x + 5 = 0$ has no real roots. 1 $a = 3$, $b = 1$, $c = 5$ Read the coefficients. 2 $\Delta = 1^2 - 4(3)(5) = 1 - 60 = -59$ Substitute into $b^2 - 4ac$. 3 $\Delta = -59 < 0$, so there are no real roots A negative discriminant has no real square root, so the formula produces no real values.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: 2x^2 - 5x + 3: discriminant 1, roots 1 and 3/2 (two distinct rational).
- we-2: x^2 + kx + 9 equal roots when k^2 - 36 = 0, k = +/- 6.
- we-3: 3x^2 + x + 5: discriminant -59, no real roots.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14 from work/brief130-python). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Squaring b without its sign (b = -5 gives 25, not -25).
- Treating discriminant = 0 as "no roots" or as one root without saying the two roots are equal.
- The perfect-square test for rational roots needs rational a, b, c (see site corrections).
- Solving k^2 - 36 = 0 as k = 6 only.
- "Real roots" includes equal roots, so it needs discriminant >= 0, not > 0.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- The formula with sqrt(b^2 - 4ac) highlighted, then three branches: positive (two values), zero (one repeated), negative (stop sign).
- A small parabola thumbnail beside each case as a preview only; full graph meaning is in w14.
- A number line for the k condition (k = -6 and k = 6 marked).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit details: `../../checks/maths-a11-kit-needs.md`.

## 6. Two original candidate practice questions

### Question 1

Find the values of m for which x^2 + (m - 2)x + 4 = 0 has real roots.

**Worked answer:** Discriminant (m - 2)^2 - 16 >= 0, so (m - 2)^2 >= 16, giving m <= -2 or m >= 6.

### Question 2

Without solving, describe the roots of 5x^2 - 2x - 3 = 0.

**Worked answer:** Discriminant 4 + 60 = 64, a positive perfect square, so two distinct rational roots (they are 1 and -3/5).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Can a 40 m rope fence a rectangular pen of area 120 m^2? The discriminant answers before any solving.
- A café owner asks whether a price exists that makes revenue exactly $500; the discriminant says yes or no.
- A basketball shot modelled by a quadratic: does it ever reach rim height? (Kept as height above the floor, no physics.)

Varied everyday contexts (money, phones, sport, travel, food). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only. Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
