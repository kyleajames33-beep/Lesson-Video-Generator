# math-a11-w01: How do index laws handle negative, zero and fractional powers?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cib0d54c54` (Algebraic techniques): Use index laws to simplify expressions and solve problems involving positive, negative, zero or fractional indices [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** Stage 5 (Year 10): Positive integer indices, a^m x a^n = a^(m+n) for whole-number powers, square and cube roots.

**Prior video:** none (opens the course).

**Start:** Recall that an index counts repeated factors of the same base.

**Stop:** Derive a^0 = 1 and a^(-n) = 1/a^n from the division law, meet a^(1/n) as a root, then simplify and evaluate with mixed indices. Stop before surds (w03) and logarithms (e03).

**Next:** math-a11-w02.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-techniques-and-inequalities/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `a050fa60ed543d87c921cd89e411f475c7e0c5c9bbe3606a749e82120ec103ec`. Title: Index Laws. Lesson id maths-adv-y11-m6-l04.

Data-step ids: `recall-your-gut-answer-first`, `one-idea-behind-every-index`, `what-you-ll-master`, `multiplying-dividing-and-raising-a`, `model`, `quick-fire-practice`, `revisit-the-folded-paper`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source algebraic-techniques-and-inequalities/lesson04.sa.html, `we-1`

PROBLEM 1 · COMBINING THE LAWS Simplify $\dfrac{(3x^2y)^3 \times 2xy^4}{6x^3y^2}$. 1 $(3x^2y)^3 = 27x^6y^3$ Raise every factor inside the bracket, including the 3. 2 Numerator $= 27x^6y^3 \times 2xy^4 = 54x^7y^7$ Multiply coefficients, add indices for each base. 3 $\dfrac{54x^7y^7}{6x^3y^2} = 9x^4y^5$ Divide coefficients, subtract indices for each base.

### Source algebraic-techniques-and-inequalities/lesson04.sa.html, `we-2`

PROBLEM 2 · NEGATIVE AND ZERO INDICES Evaluate $27^{-2/3} + 5^0 - 4^{-1}$ without a calculator. 1 $27^{-2/3} = \dfrac{1}{27^{2/3}} = \dfrac{1}{\left(\sqrt[3]{27}\right)^2} = \dfrac{1}{9}$ Negative index gives the reciprocal; take the cube root first, then square. 2 $5^0 = 1$ and $4^{-1} = \dfrac{1}{4}$ Zero index gives 1; a $-1$ index gives the reciprocal. 3 $\dfrac{1}{9} + 1 - \dfrac{1}{4} = \dfrac{4}{36} + \dfrac{36}{36} - \dfrac{9}{36} = \dfrac{31}{36}$ Common denominator 36, then combine.

### Source algebraic-techniques-and-inequalities/lesson04.sa.html, `we-3`

PROBLEM 3 · FRACTIONAL INDICES WITH VARIABLES Simplify $\left(16x^8y^{-4}\right)^{3/4}$, writing your answer with positive indices. 1 $= 16^{3/4} \times x^{8 \times 3/4} \times y^{-4 \times 3/4}$ The outside index multiplies every index inside. 2 $16^{3/4} = \left(\sqrt[4]{16}\right)^3 = 2^3 = 8$ Fourth root first, then cube. 3 $= 8x^6y^{-3} = \dfrac{8x^6}{y^3}$ Move the negative index across the fraction bar to finish with positive indices.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: (3x^2 y)^3 x 2xy^4 / (6x^3 y^2) = 9x^4 y^5 (x, y non-zero).
- we-2: 27^(-2/3) + 5^0 - 4^(-1) = 1/9 + 1 - 1/4 = 31/36.
- we-3: (16x^8 y^(-4))^(3/4) = 8x^6 / y^3 for x, y > 0.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14 from work/brief130-python). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Multiplying indices when multiplying powers (x^3 x x^4 written as x^12). The fix is the counting picture: three factors then four more.
- Leaving the coefficient out of a power of a bracket: (3x^2)^3 written as 3x^6.
- Reading a negative index as a negative number: 2^(-3) is 1/8, not -8.
- -3^2 versus (-3)^2: the site's own quick check uses this contrast.
- Taking the power before the root in 27^(2/3) is valid but slower; root first keeps numbers small.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Repeated-factor stacks: a row of a-tiles that joins (multiply), cancels in pairs across a fraction bar (divide), and runs out to leave 1 or a reciprocal (zero and negative). This is the one visual that explains why, not just what.
- AlignedAlgebra / WorkingRows for each worked example, one index law per row, coefficient and each base coloured by role.
- ExactFraction for the 31/36 common-denominator step.
- A small root ladder for 27^(2/3): cube root first, then square.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit details: `../../checks/maths-a11-kit-needs.md`.

## 6. Two original candidate practice questions

### Question 1

Simplify (2a^3 b^(-2))^2 x 3a^(-1) b^5 / (6a^4 b), writing the answer with positive indices.

**Worked answer:** (4a^6 b^(-4))(3a^(-1) b^5) = 12a^5 b. Dividing by 6a^4 b gives 2a.

### Question 2

Evaluate 8^(2/3) - 16^(-1/2) + 7^0 without a calculator.

**Worked answer:** 8^(2/3) = (cube root of 8)^2 = 4; 16^(-1/2) = 1/4; 7^0 = 1. Total 4 - 1/4 + 1 = 19/4.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Phone storage tiers (64, 128, 256 GB) are powers of 2; dropping a tier halves the size, which is multiplying by 2^(-1).
- A square photo with area 16 cm^2 has side 16^(1/2) = 4 cm; a cube-shaped gift box of volume 27 L has edge 27^(1/3).
- A quiz show that doubles your prize each round: before round one the multiplier is 2^0 = 1.

Varied everyday contexts (money, phones, sport, travel, food). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only. Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
