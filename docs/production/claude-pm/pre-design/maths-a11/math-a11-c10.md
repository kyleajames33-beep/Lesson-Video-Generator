# math-a11-c10: How does the chain rule handle a function inside a function?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci00fa8fac` (Calculations with the derivative): Apply the chain rule: if y is a differentiable function of u, and u is a differentiable function of x, then dy/dx = dy/du × du/dx or if h(x) = f(g(x)) for differentiable functions f(x) and g(x) then h'(x) = f'(g(x))g'(x) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c07: The power rule for all real n and the constant multiple rule. math-a11-w27: Composite functions f(g(x)): the inner output becomes the outer input. math-a11-c05: The notations dy/dx and f'(x).

**Prior video:** math-a11-c09.

**Start:** Recall composite functions f(g(x)) (w27), then try (3x + 2)^5: expanding works but is slow, and the power rule alone gives the wrong answer.

**Stop:** Apply the chain rule in both forms: dy/dx = dy/du × du/dx with u the inner function, and h'(x) = f'(g(x))g'(x); back-substitute so the answer is in x; evaluate a gradient at a point; include roots and reciprocals of an inner function. Products and quotients are c11 and c12; the chain rule on e^(ax + b) is Year 12 d01.

**Next:** math-a11-c11.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `b751ff6afb1735ea7237a5c070ee090b011f6f0088ba8b2c990d6ee2480baf66`. Title: The Chain Rule. Lesson id maths-adv-y11-m3-l05.

Data-step ids: `orient`, `two-moves-decompose-then-multiply`, `what-you-ll-master`, `the-chain-rule-the-idea`, `model`, `apply`, `drill`, `concept`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson05.sa.html, `we-chain-1`

Worked example 1 · polynomial composite Differentiate $y = (3x + 2)^5$. 1 Let $u = 3x + 2$, so $y = u^5$ Identify the inner function $u = 3x + 2$ and the outer function $y = u^5$. 2 $\dfrac{dy}{du} = 5u^4$ and $\dfrac{du}{dx} = 3$ Differentiate the outer function with respect to $u$, and the inner function with respect to $x$. 3 $\dfrac{dy}{dx} = 5u^4 \cdot 3 = 15(3x + 2)^4$ Apply the chain rule: multiply the derivatives, then back-substitute $u = 3x + 2$.

### Source introduction-to-differentiation/lesson05.sa.html, `we-chain-2`

Worked example 2 · power composite Differentiate $y = (2x^3 + 5)^4$. 1 Let $u = 2x^3 + 5$, so $y = u^4$ The inner function is $u = 2x^3 + 5$ and the outer function is $y = u^4$. 2 $\dfrac{dy}{du} = 4u^3$ and $\dfrac{du}{dx} = 6x^2$ Differentiate: derivative of $u^4$ is $4u^3$; derivative of $2x^3 + 5$ is $6x^2$. 3 $\dfrac{dy}{dx} = 4u^3 \cdot 6x^2 = 24x^2(2x^3 + 5)^3$ Multiply and back-substitute $u = 2x^3 + 5$ to get the final answer in terms of $x$.

### Source introduction-to-differentiation/lesson05.sa.html, `we-chain-3`

Worked example 3 · gradient at a point Find the gradient of $y = (x^2 + 1)^4$ at $x = 1$. 1 Let $u = x^2 + 1$, so $y = u^4$ Decompose: inner function $u = x^2 + 1$, outer function $y = u^4$. 2 $\dfrac{dy}{du} = 4u^3$, $\dfrac{du}{dx} = 2x$, so $\dfrac{dy}{dx} = 4u^3 \cdot 2x = 8x(x^2 + 1)^3$ Apply the chain rule and back-substitute $u = x^2 + 1$. 3 At $x = 1$: $\dfrac{dy}{dx} = 8(1)(1^2 + 1)^3 = 8 \cdot 8 = 64$ Substitute $x = 1$ to find the gradient at that specific point.

### Source introduction-to-differentiation/lesson05.sa.html, card "The chain rule, the idea"

Think of it like a gear system. The overall gear ratio is the product of the ratios of each pair of connected gears. If the first gear multiplies speed by 3, and the second multiplies by 2, the total multiplication is $3 \times 2 = 6$. The chain rule works the same way: multiply the derivative through each layer.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-chain-1: (3x + 2)^5 -> 15(3x + 2)^4. we-chain-2: (2x^3 + 5)^4 -> 24x^2(2x^3 + 5)^3. we-chain-3: (x^2 + 1)^4 -> 8x(x^2 + 1)^3, 64 at x = 1.
- Drills: (2x + 1)^3 -> 6(2x + 1)^2; (4x - 7)^3 -> 12(4x - 7)^2; (x^2 - 3)^6 -> 12x(x^2 - 3)^5; (3x - 1)^4 at x = 1 gives 96; sqrt(x^2 + 1) -> x/sqrt(x^2 + 1).
- Short answers: (5x - 2)^7 -> 35(5x - 2)^6; sqrt(3x^2 + 1) -> 3x/sqrt(3x^2 + 1); (x^3 - 2)^2 at x = 1 gives -6.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Forgetting to multiply by du/dx (writing 5(3x + 2)^4).
- Differentiating the inner bracket inside the power as well (writing 5(3)^4).
- Leaving the answer in u.
- Using the chain rule on a plain power of x, or missing it on sqrt(x^2 + 1).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `RateChainStrips` (or `StudioRateChainStrips`): x drives u, u drives y; a nudge in x is multiplied by du/dx on the first strip and by dy/du on the second, so the rates multiply on screen.
- A layered bracket with the inner function tinted: the outer power differentiates with the inside kept whole, then the tinted inside sends its own derivative out as a factor.
- `WorkingBoard` rows with the three labelled lines "u =", "dy/du =", "du/dx =" and the product row, matching the form Year 12 d01 quotes.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Differentiate y = (1 - 4x)^3 and y = 2/(3x + 1)^2.

**Worked answer:** First: 3(1 - 4x)^2 × (-4) = -12(1 - 4x)^2. Second: write y = 2(3x + 1)^(-2); dy/dx = -4(3x + 1)^(-3) × 3 = -12/(3x + 1)^3.

### Question 2

Find the gradient of y = sqrt(2x^2 + 1) at x = 2.

**Worked answer:** Let u = 2x^2 + 1, y = u^(1/2). dy/du = 1/(2 sqrt u), du/dx = 4x, so dy/dx = 2x/sqrt(2x^2 + 1). At x = 2: 4/sqrt 9 = 4/3.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A stone dropped in a pond: the ripple's area depends on its radius and the radius grows with time, so area per second = (area per cm) × (cm per second) (home, outdoors).
- A treadmill: energy per kilometre × kilometres per minute gives energy per minute; speeding up changes the second rate (sport; the machine only).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `introduction-to-differentiation/lesson05.sa.html`, step `drill`, odd one out. Old text: "Which of these does NOT require the chain rule? A, $y = (x^3 + 2)^4$ B, $y = \sqrt{3x}$ C, $y = x^5$ D, $y = (5x - 1)^2$". B also needs no chain rule ($\sqrt{3x} = \sqrt{3}\,x^{1/2}$) and D can be expanded, so the item has more than one defensible answer. Correction: replace B with "$y = \sqrt{3x + 1}$" and D with "$y = (5x^2 - 1)^7$".
- `introduction-to-differentiation/lesson05.sa.html`, step `apply`, trap "Leaving the answer in terms of u". Old text: "Answers written in terms of $u$ are not accepted in HSC exams, the marker cannot award the method mark unless the answer is in terms of $x$." This states a marking rule the site cannot support (method marks are commonly given for correct working). Correction: "An answer left in terms of $u$ is not finished: substitute $u = g(x)$ back so the derivative is in terms of $x$."

Decisions for Claude:

- Year 12 d01 quotes "dy/dx = dy/du × du/dx" and "call the inside part u". Teach that form first, then h'(x) = f'(g(x))g'(x) as the same idea in function notation (the content point lists both).
- A car's fuel use (litres per km × km per hour), the site's hook, was considered and rejected as a Year 12 chain-rule anchor; it is not used there, but the pond and treadmill avoid any overlap.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
