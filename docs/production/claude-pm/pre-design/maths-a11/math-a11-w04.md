# math-a11-w04: Which method solves a given quadratic most efficiently?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cia7d436df` (Algebraic techniques): Solve quadratic equations ax^2 + bx + c = 0 by factorisation, completing the square and using the quadratic formula x = (-b ± √(b^2 - 4ac))/(2a) where a, b and c are real numbers and a ≠ 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w02: Factorising trinomials. math-a11-w03: Simplifying surds.

**Prior video:** math-a11-w03.

**Start:** Recall factorising a trinomial and the null factor law.

**Stop:** Solve ax^2 + bx + c = 0 by factorising, completing the square and the quadratic formula, and choose a method. Show the formula as completing the square done once. Stop before the discriminant (w05) and vertex form for graphs (w15).

**Next:** math-a11-w05.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-techniques-and-inequalities/lesson09.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson09.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `5b0c31212be6ff21324709e655a625ae5c60f5068bc724b50563966789a63eb5`. Title: Solving Quadratic Equations. Lesson id maths-adv-y11-m6-l09.

Data-step ids: `recall-your-gut-answer-first`, `three-methods-and-when-to`, `what-you-ll-master`, `solving-by-factorisation`, `the-quadratic-formula-and-choosing`, `model`, `quick-fire-practice`, `revisit-x-2-9`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source algebraic-techniques-and-inequalities/lesson09.sa.html, `we-1`

PROBLEM 1 · BY FACTORISATION Solve $x^2 - 5x + 6 = 0$. 1 One side is already $0$ The equation is in the form $ax^2+bx+c=0$. 2 $(x-2)(x-3) = 0$ Two numbers multiplying to 6 and adding to $-5$ are $-2$ and $-3$. 3 $x = 2$ or $x = 3$ Null factor law: set each bracket to zero. Check: $4 - 10 + 6 = 0$ ✓

### Source algebraic-techniques-and-inequalities/lesson09.sa.html, `we-2`

PROBLEM 2 · BY COMPLETING THE SQUARE Solve $x^2 + 6x - 3 = 0$, leaving your answer in exact form. 1 $x^2 + 6x = 3$ Move the constant to the right. 2 $(x+3)^2 - 9 = 3$, so $(x+3)^2 = 12$ Half of 6 is 3; add and subtract $3^2 = 9$. 3 $x + 3 = \pm 2\sqrt{3}$, so $x = -3 \pm 2\sqrt{3}$ Square root both sides keeping $\pm$; $\sqrt{12} = 2\sqrt{3}$.

### Source algebraic-techniques-and-inequalities/lesson09.sa.html, `we-3`

PROBLEM 3 · BY THE QUADRATIC FORMULA Solve $2x^2 - 4x - 1 = 0$, leaving your answer in exact form. 1 $a = 2$, $b = -4$, $c = -1$ Read the coefficients with their signs attached. 2 $x = \dfrac{4 \pm \sqrt{(-4)^2 - 4(2)(-1)}}{2(2)} = \dfrac{4 \pm \sqrt{24}}{4}$ Substitute; $16 + 8 = 24$. 3 $= \dfrac{4 \pm 2\sqrt{6}}{4} = \dfrac{2 \pm \sqrt{6}}{2}$ Simplify $\sqrt{24} = 2\sqrt{6}$, then cancel the common factor 2.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: x^2 - 5x + 6 = 0 gives x = 2 or 3.
- we-2: x^2 + 6x - 3 = 0 gives x = -3 +/- 2 sqrt3.
- we-3: 2x^2 - 4x - 1 = 0 gives x = (2 +/- sqrt6)/2.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14 from work/brief130-python). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using the null factor law when the right side is not 0.
- Losing the +/- when square-rooting both sides.
- Writing -b as -4 when b = -4, or squaring -4 to -16.
- Cancelling the 4 in (4 +/- 2 sqrt6)/4 against one term only.
- Dividing by x (losing the root x = 0) in equations like x^2 = 3x.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Completing the square drawn as a square: x^2 + 6x as an x-square plus two 3-by-x strips, with the missing 3 x 3 corner added and taken away.
- A three-door method chooser (factorise, complete the square, formula) that lights the door each example uses.
- WorkingRows with coefficients a, b, c in role colours carried into the formula with their signs.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit details: `../../checks/maths-a11-kit-needs.md`.

## 6. Two original candidate practice questions

### Question 1

Solve 3x^2 + 5x - 2 = 0.

**Worked answer:** (3x - 1)(x + 2) = 0, so x = 1/3 or x = -2.

### Question 2

Solve x^2 - 4x - 7 = 0 by completing the square, giving exact answers.

**Worked answer:** (x - 2)^2 = 11, so x = 2 +/- sqrt11.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A rectangular phone case 2 cm longer than it is wide with area 48 cm^2: x(x + 2) = 48.
- A photo with a border of equal width: the total framed area gives a quadratic in the border width.
- Ticket pricing: for each dollar off, more people come; revenue equal to a target gives a quadratic.

Varied everyday contexts (money, phones, sport, travel, food). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only. Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
