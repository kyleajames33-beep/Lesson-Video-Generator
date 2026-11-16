# math-a11-c12: How do we differentiate a quotient?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cifb023b4e` (Calculations with the derivative): Apply the quotient rule: if y = u/v, where u and v are both differentiable functions of x, then dy/dx = (v du/dx - u dv/dx)/(v^2) or if h(x) = (f(x))/(g(x)) then h'(x) = (g(x)f'(x) - f(x)g'(x))/([g(x)]^2) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c11: The product rule. math-a11-c10: The chain rule, including (g(x))^(-1).

**Prior video:** math-a11-c11.

**Start:** Recall the product rule (c11); a quotient u/v is the product u × v^(-1).

**Stop:** Apply the quotient rule in both forms, dy/dx = (v du/dx - u dv/dx)/v^2 and h'(x) = (g(x)f'(x) - f(x)g'(x))/[g(x)]^2, with polynomial numerators and denominators; simplify the numerator; find where the gradient is zero. No e^x yet. Choosing among rules is c13.

**Next:** math-a11-c13.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `cdd52dc796a9cfffc84e93d38c644c314106ba437b9c01ad4a59e7ae009112b1`. Title: Product & Quotient Rules. Lesson id maths-adv-y11-m3-l06.

Data-step ids: `orient`, `the-two-moves`, `what-you-will-master`, `the-product-and-quotient-rules`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson06.sa.html, `we-2`

PROBLEM 2 · QUOTIENT RULE WITH POLYNOMIAL Differentiate $y = \dfrac{x^3}{x + 1}$ using the quotient rule. Apply 1 Let $u = x^3$ and $v = x + 1$ Identify numerator $u$ and denominator $v$. 2 $u' = 3x^2$ and $v' = 1$ Differentiate numerator and denominator. 3 $y' = \dfrac{u'v - uv'}{v^2} = \dfrac{3x^2(x+1) - x^3(1)}{(x+1)^2} = \dfrac{2x^3 + 3x^2}{(x+1)^2}$ Apply quotient rule, expand numerator, and simplify.

### Source introduction-to-differentiation/lesson06.sa.html, step `practice-short-answer`, Q2

Differentiate $y = \dfrac{2x + 1}{x - 3}$. Show all working.

Other worked examples in this lesson (we-3 differentiates e^x/(x^2 + 1), which needs e02; we-1 is c11's) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-2: x^3/(x + 1) -> (3x^2(x + 1) - x^3)/(x + 1)^2 = (2x^3 + 3x^2)/(x + 1)^2 = x^2(2x + 3)/(x + 1)^2.
- Q2: (2x + 1)/(x - 3) -> -7/(x - 3)^2. Drill: x^2/(x + 3) -> x(x + 6)/(x + 3)^2. Match: x/(x + 1) -> 1/(x + 1)^2.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Swapping the order in the numerator (u'v - uv' reversed), which flips the sign.
- Forgetting to square the denominator.
- Expanding the denominator, which hides the factors needed later.
- Using the quotient rule when dividing by a single power is quicker ((x^3 + 1)/x = x^2 + 1/x).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `QuotientDemo`: numerator and denominator each change; the numerator's change pushes the quotient up, the denominator's change pulls it down, so their effects subtract.
- A derivation strip from the product rule: u × v^(-1), product rule plus chain rule, then the common denominator v^2 (optional; one line in narration).

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Differentiate y = (3x - 2)/(x^2 + 1).

**Worked answer:** u = 3x - 2, v = x^2 + 1, u' = 3, v' = 2x. dy/dx = (3(x^2 + 1) - (3x - 2)(2x))/(x^2 + 1)^2 = (-3x^2 + 4x + 3)/(x^2 + 1)^2.

### Question 2

For y = x^2/(2x - 1), find the gradient at x = 2 and the values of x where the gradient is zero.

**Worked answer:** dy/dx = (2x(2x - 1) - 2x^2)/(2x - 1)^2 = 2x(x - 1)/(2x - 1)^2. At x = 2: 4/9. Gradient zero when x = 0 or x = 1 (both allowed, as 2x - 1 ≠ 0).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Cost per cupcake for a bake-sale batch: total cost divided by the number baked, where both change as the batch grows (food, money).
- A basketball team's shooting percentage: shots made divided by shots taken, both rising through a game (sport; shown as a scoreboard).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Use only we-2 and the polynomial practice items from lesson06; we-3, the e^x/x drill and the e^x match items wait until after e02.
- The site's card says the v^2 is "weighted by $v^2$ to account for the shrinking or stretching effect of division"; that is not an explanation. Use the product-rule derivation or the QuotientDemo picture instead.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
