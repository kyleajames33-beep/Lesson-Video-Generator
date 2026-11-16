# math-a11-w02: Why must we factorise before we cancel an algebraic fraction?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci3ccce138` (Algebraic techniques): Expand, factorise and simplify algebraic expressions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci9c1a8604` (Algebraic techniques): Simplify expressions involving algebraic fractions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w01: Index laws, including x^2 / x = x. Stage 5 (Year 10): Expanding binomial products and simple factorising.

**Prior video:** math-a11-w01.

**Start:** Recall expanding a binomial product and that a fraction cancels only by a common factor.

**Stop:** Expand and factorise (common factor, difference of two squares, trinomials with a leading coefficient), then simplify, divide and add algebraic fractions with restrictions stated. Stop before completing the square (w04, w15).

**Next:** math-a11-w03.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-techniques-and-inequalities/lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `0e683fa60184d6f6798f49a29d16bae2c41f828370a8b37d693697712b75a986`. Title: Expanding, Factorising and Simplifying. Lesson id maths-adv-y11-m6-l05.

Data-step ids: `recall-your-gut-answer-first`, `expanding-and-factorising-are-inverse`, `what-you-ll-master`, `expanding-and-the-three-special`, `model`, `quick-fire-practice`, `revisit-the-squared-bracket`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source algebraic-techniques-and-inequalities/lesson05.sa.html, `we-1`

PROBLEM 1 · EXPANDING AND SIMPLIFYING Expand and simplify $(2x - 3)(x + 5) - (x - 1)^2$. 1 $(2x-3)(x+5) = 2x^2 + 10x - 3x - 15 = 2x^2 + 7x - 15$ Multiply every term by every term, then collect. 2 $(x-1)^2 = x^2 - 2x + 1$ Use $(a-b)^2 = a^2 - 2ab + b^2$; do not forget the middle term. 3 $2x^2 + 7x - 15 - (x^2 - 2x + 1) = x^2 + 9x - 16$ Subtract the whole bracket, so every sign inside changes.

### Source algebraic-techniques-and-inequalities/lesson05.sa.html, `we-2`

PROBLEM 2 · FACTORISING FULLY Factorise $3x^2 - 27$ completely. 1 HCF is 3: $3(x^2 - 9)$ Always take the common factor out first. 2 $x^2 - 9$ is a difference of two squares It is $x^2 - 3^2$, so it factorises. 3 $= 3(x - 3)(x + 3)$ Check by expanding: $3(x^2 - 9) = 3x^2 - 27$ ✓

### Source algebraic-techniques-and-inequalities/lesson05.sa.html, `we-3`

PROBLEM 3 · TRINOMIAL WITH A LEADING COEFFICIENT Factorise $2x^2 + 7x + 3$. 1 Need two numbers with product $2 \times 3 = 6$ and sum 7 The numbers are 6 and 1. 2 Split the middle term: $2x^2 + 6x + x + 3$ Rewrite $7x$ as $6x + x$. 3 $= 2x(x+3) + 1(x+3) = (2x+1)(x+3)$ Group, then take out the common bracket. Check: $(2x+1)(x+3) = 2x^2+7x+3$ ✓

Read-only source: [algebraic-techniques-and-inequalities/lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `62919ffae4062b12aa329fd254b5558518d4760c9971bf482f57b740daf1ed2d`. Title: Algebraic Fractions. Lesson id maths-adv-y11-m6-l06.

Data-step ids: `recall-your-gut-answer-first`, `factorise-first-then-cancel-factors`, `what-you-ll-master`, `simplifying-by-factorising`, `model`, `quick-fire-practice`, `revisit-the-illegal-cancellation`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source algebraic-techniques-and-inequalities/lesson06.sa.html, `we-1`

PROBLEM 1 · SIMPLIFYING Simplify $\dfrac{x^2 - 9}{x^2 + x - 12}$ and state any restrictions. 1 Numerator: $x^2 - 9 = (x-3)(x+3)$ Difference of two squares. 2 Denominator: $x^2 + x - 12 = (x-3)(x+4)$ Two numbers multiplying to $-12$ and adding to 1 are $-3$ and 4. 3 $\dfrac{(x-3)(x+3)}{(x-3)(x+4)} = \dfrac{x+3}{x+4}$, with $x \neq 3$ and $x \neq -4$ Cancel the common factor; exclude values making the original denominator zero.

### Source algebraic-techniques-and-inequalities/lesson06.sa.html, `we-2`

PROBLEM 2 · DIVIDING Simplify $\dfrac{x}{x+2} \div \dfrac{x^2}{x^2 - 4}$. 1 $= \dfrac{x}{x+2} \times \dfrac{x^2 - 4}{x^2}$ Division becomes multiplication by the reciprocal. Flip first. 2 $= \dfrac{x}{x+2} \times \dfrac{(x-2)(x+2)}{x^2}$ Factorise the difference of two squares. 3 $= \dfrac{x - 2}{x}$, with $x \neq -2, 0, 2$ Cancel $(x+2)$ and cancel $x$ against $x^2$, leaving one $x$ underneath.

### Source algebraic-techniques-and-inequalities/lesson06.sa.html, `we-3`

PROBLEM 3 · ADDING WITH DIFFERENT DENOMINATORS Simplify $\dfrac{3}{x+1} + \dfrac{2}{x-1}$. 1 Common denominator is $(x+1)(x-1)$ The denominators share no factor, so multiply them. 2 $= \dfrac{3(x-1) + 2(x+1)}{(x+1)(x-1)}$ Rewrite each fraction over the common denominator. 3 $= \dfrac{3x - 3 + 2x + 2}{(x+1)(x-1)} = \dfrac{5x - 1}{(x+1)(x-1)}$ Expand and collect the numerator; leave the denominator factorised.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- AT05 we-1: (2x - 3)(x + 5) - (x - 1)^2 = x^2 + 9x - 16.
- AT05 we-2: 3x^2 - 27 = 3(x - 3)(x + 3).
- AT05 we-3: 2x^2 + 7x + 3 = (2x + 1)(x + 3).
- AT06 we-1: (x^2 - 9)/(x^2 + x - 12) = (x + 3)/(x + 4), x != 3, x != -4.
- AT06 we-2: x/(x + 2) divided by x^2/(x^2 - 4) = (x - 2)/x, x != -2, 0, 2.
- AT06 we-3: 3/(x + 1) + 2/(x - 1) = (5x - 1)/((x + 1)(x - 1)).

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14 from work/brief130-python). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Cancelling terms instead of factors: (x + 3)/(x + 4) is not 3/4. The site's "illegal cancellation" revisit is the hook.
- Dropping the middle term of (x - 1)^2.
- Subtracting only the first term of a bracket: every sign inside -(x^2 - 2x + 1) changes.
- Losing restrictions after cancelling: x = 3 still makes the original undefined.
- Not flipping the divisor before cancelling.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Area model: a rectangle of sides (2x - 3) and (x + 5) split into four tiles, which reads backwards as factorising. AreaStrips can host the tiles; the tiles need integer-labelled sub-rectangles (see kit note).
- StudioCancellation / Cancellation strikes only whole matching factors; a red MistakeCard shows a struck term with a cross.
- DomainExclusions chips (x != 3, x != -4) that stay on screen after cancelling.
- AlgebraFraction for the common-denominator addition, numerator expanded in place.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit details: `../../checks/maths-a11-kit-needs.md`.

## 6. Two original candidate practice questions

### Question 1

Simplify (x^2 - 4x)/(x^2 - 16) and state any restrictions on x.

**Worked answer:** x(x - 4)/((x - 4)(x + 4)) = x/(x + 4), with x != 4 and x != -4.

### Question 2

Write 2/(x - 3) - 1/(x + 2) as a single fraction.

**Worked answer:** (2(x + 2) - (x - 3))/((x - 3)(x + 2)) = (x + 7)/((x - 3)(x + 2)).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Tiling a rectangular backyard: length times width expands to a total area, and factorising recovers the side lengths.
- A road trip in two legs at different speeds: total time 3/(x + 1) + 2/(x - 1) hours is an algebraic fraction sum.
- Splitting a group booking: per-person cost (x^2 - 9)/(x^2 + x - 12) simplifies once you see the shared factor.

Varied everyday contexts (money, phones, sport, travel, food). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only. Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
