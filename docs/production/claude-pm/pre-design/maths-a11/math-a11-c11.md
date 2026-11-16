# math-a11-c11: How do both factors contribute to the derivative of a product?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci72e90f3a` (Calculations with the derivative): Apply the product rule: if y = uv, where u and v are both differentiable functions of x, then dy/dx = u dv/dx + v du/dx or if h(x) = f(x)g(x) for differentiable functions f(x) and g(x) then h'(x) = f(x)g'(x) + f'(x)g(x) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c07: Sum, constant multiple and power rules. math-a11-c10: The chain rule for a power of a bracket.

**Prior video:** math-a11-c10.

**Start:** Ask whether the derivative of a product is the product of the derivatives, and test it on (x + 1)(x^2 - 2) by expanding.

**Stop:** Apply the product rule in both forms, dy/dx = u dv/dx + v du/dx and h'(x) = f(x)g'(x) + f'(x)g(x), with polynomial and power factors (one factor may need the chain rule); explain why both factors contribute. No e^x yet (e02 follows this strand). Quotients are c12; mixed rule choice is c13.

**Next:** math-a11-c12.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `cdd52dc796a9cfffc84e93d38c644c314106ba437b9c01ad4a59e7ae009112b1`. Title: Product & Quotient Rules. Lesson id maths-adv-y11-m3-l06.

Data-step ids: `orient`, `the-two-moves`, `what-you-will-master`, `the-product-and-quotient-rules`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson06.sa.html, card "The product and quotient rules", rectangle analogy

Imagine a rectangle with side lengths $u$ and $v$. As both change, the new area is approximately $(u + \Delta u)(v + \Delta v) = uv + u\,\Delta v + v\,\Delta u + \Delta u\,\Delta v$. The last term is negligibly small, leaving area change $\approx u\,\Delta v + v\,\Delta u$. Dividing by $\Delta x$ and taking the limit gives $\frac{dA}{dx} = uv' + vu'$, the product rule.

### Source introduction-to-differentiation/lesson06.sa.html, step `drill`

Differentiate $y = (x + 1)(x^2 - 2)$. Could you simplify first?

### Source introduction-to-differentiation/lesson06.sa.html, step `practice-short-answer`, Q3

Differentiate $y = x^2 (3x+1)^4$. Identify which rules you used at each step.

Other worked examples in this lesson (we-1 differentiates x^2 e^x, which needs d/dx(e^x) from e02, so it cannot be used before the e strand; we-2 and we-3 are c12's) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Drill: (x + 1)(x^2 - 2) -> 3x^2 + 2x - 2, by the product rule and by expanding.
- Q3: x^2(3x + 1)^4 -> 2x(3x + 1)^4 + 12x^2(3x + 1)^3 = 2x(3x + 1)^3(9x + 1) (site form checked equal).
- we-1 for reference only: x^2 e^x -> 2xe^x + x^2 e^x = x(x + 2)e^x.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Writing (uv)' = u'v'.
- Dropping one of the two terms.
- Missing the chain-rule factor inside one factor (the 3 in (3x + 1)^4).
- Not factorising the answer when the question asks for the x-values where it is zero.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `ProductRectangle` with `ProductContributions`: a rectangle of sides u and v grows; two strips (u Δv and v Δu) light up and the corner square shrinks away as Δx -> 0.
- A check panel: (x + 1)(x^2 - 2) differentiated by the product rule and by expanding, both landing on 3x^2 + 2x - 2.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Differentiate y = (2x - 1)(x^2 + 3) using the product rule, then check by expanding first.

**Worked answer:** u = 2x - 1, v = x^2 + 3, u' = 2, v' = 2x. dy/dx = 2(x^2 + 3) + (2x - 1)(2x) = 6x^2 - 2x + 6. Expanding: y = 2x^3 - x^2 + 6x - 3, dy/dx = 6x^2 - 2x + 6.

### Question 2

Differentiate y = x^3(1 - x)^4 and write the answer in fully factorised form.

**Worked answer:** u = x^3, v = (1 - x)^4, u' = 3x^2, v' = -4(1 - x)^3. dy/dx = 3x^2(1 - x)^4 - 4x^3(1 - x)^3 = x^2(1 - x)^3(3 - 7x).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A part-time job where the hourly rate rises each month and the weekly hours rise too: pay = rate × hours, and both changes add to the pay rise (money).
- A sausage sizzle stall where the organisers raise the price through the day while sales slow: takings = price × sausages sold per hour (food, money).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- Order clash: the site's product-rule worked example (we-1), quick check, practice Q1 and match items all use e^x, which the outline teaches in e02 after this strand. Use the polynomial drill and Q3 instead, or root moves e02 before c11.
- Avoid a growing rectangle as the anchor: Year 12 d07 uses a timber deck whose length and width both grow. The rectangle stays an abstract diagram here.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
