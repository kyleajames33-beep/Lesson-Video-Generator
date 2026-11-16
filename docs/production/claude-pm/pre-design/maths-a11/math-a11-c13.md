# math-a11-c13: Which differentiation rule, or combination, does a function need?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cie3d91a6e` (Calculations with the derivative): Identify and apply the product, quotient or chain rule, or a combination of the rules, as appropriate to differentiate a given function [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c10: The chain rule. math-a11-c11: The product rule. math-a11-c12: The quotient rule. math-a11-c07: Rewriting in index form and expanding before differentiating.

**Prior video:** math-a11-c12.

**Start:** Recall the three rules (c10 to c12) and ask how to tell which one a function needs.

**Stop:** Identify the outer structure of a function (sum, product, quotient, composite, or something to simplify first) and apply the product, quotient or chain rule, or a combination, to differentiate it. Exponential, log and trig derivatives are Year 12.

**Next:** math-a11-c14.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `cdd52dc796a9cfffc84e93d38c644c314106ba437b9c01ad4a59e7ae009112b1`. Title: Product & Quotient Rules. Lesson id maths-adv-y11-m3-l06.

Data-step ids: `orient`, `the-two-moves`, `what-you-will-master`, `the-product-and-quotient-rules`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson06.sa.html, step `apply`, Trap 01

Using the product rule when you should simplify first For $y = x^2 \cdot x^3$, it is faster to write $y = x^5$ and use the power rule. Always check if simplification is possible before choosing a rule.

### Source introduction-to-differentiation/lesson06.sa.html, step `practice-short-answer`, Q3

Differentiate $y = x^2 (3x+1)^4$. Identify which rules you used at each step. 4 MARKS View comprehensive answer Product rule needed because $x^2$ and $(3x+1)^4$ are multiplied [0.5]. Let $u = x^2$ ($u' = 2x$) and $v = (3x+1)^4$ [0.5]. For $v'$, use chain rule: $v' = 12(3x+1)^3$ [1.5]. $y' = 2x(3x+1)^4 + 12x^2(3x+1)^3$ [1.5].

Read-only source: [introduction-to-differentiation/lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `b751ff6afb1735ea7237a5c070ee090b011f6f0088ba8b2c990d6ee2480baf66`. Title: The Chain Rule. Lesson id maths-adv-y11-m3-l05.

Data-step ids: `orient`, `two-moves-decompose-then-multiply`, `what-you-ll-master`, `the-chain-rule-the-idea`, `model`, `apply`, `drill`, `concept`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson05.sa.html, step `apply`, trap 2

Applying the chain rule when it is not needed For $y = x^5$, there is no inner function, just a straight power. Applying the chain rule here wastes time and can introduce errors. Check whether the argument of the outer function contains more than just $x$ before choosing a rule. ✓ Fix: Ask "is there anything other than a plain $x$ inside?" If no, use the power rule directly.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- lesson06 Q3: x^2(3x + 1)^4 -> 2x(3x + 1)^3(9x + 1) (product then chain).
- Original sorting set: (x^3 + 1)/x -> simplify to x^2 + 1/x, derivative (2x^3 - 1)/x^2; x sqrt(1 - 2x) -> (1 - 3x)/sqrt(1 - 2x); (x^2 - 1)^3/(2x + 1) -> 2(x^2 - 1)^2(5x^2 + 3x + 1)/(2x + 1)^2.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). The site answer matches. The site has no worked example devoted to choosing a rule; the sorting set is original.

## 4. Misconceptions and HSC-style traps

- Choosing a rule from the first symbol seen instead of the last operation done.
- Using the quotient rule on a constant numerator, or a product rule where expanding is shorter.
- Forgetting the chain-rule factor inside a product or quotient.
- Stopping before the expression is simplified when a later step needs its zeros.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `DecisionTree` with one question per branch: "What is done last? add, multiply, divide, or apply a function to a bracket?" and a leaf for "simplify first".
- A function sorted live into its layers (outer quotient, inner chain), each layer tinted, then the `WorkingBoard` follows the tint order.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Differentiate y = x sqrt(1 - 2x) and simplify.

**Worked answer:** Product of u = x and v = (1 - 2x)^(1/2), with v' = -(1 - 2x)^(-1/2) by the chain rule. dy/dx = sqrt(1 - 2x) - x/sqrt(1 - 2x) = (1 - 3x)/sqrt(1 - 2x).

### Question 2

Differentiate y = (x^2 - 1)^3/(2x + 1).

**Worked answer:** Quotient, with the chain rule in the numerator: u' = 6x(x^2 - 1)^2, v' = 2. dy/dx = (6x(x^2 - 1)^2(2x + 1) - 2(x^2 - 1)^3)/(2x + 1)^2 = 2(x^2 - 1)^2(5x^2 + 3x + 1)/(2x + 1)^2.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Nesting dolls: a function applied to a bracket is a doll inside a doll, so the chain rule opens them from the outside in (games, home).
- Folders inside folders on a phone: the last folder you open is the outermost operation, the first rule to apply (phones).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

Decisions for Claude:

- This is a skills video with no new content beyond choosing. Claude may fold it into the ends of c11 and c12 if length allows; `cie3d91a6e` must then be named in one of them, because Year 12 d06 relies on it.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
