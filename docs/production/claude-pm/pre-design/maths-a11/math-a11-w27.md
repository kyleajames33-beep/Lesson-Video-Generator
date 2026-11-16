# math-a11-w27: What happens when one function's output becomes another's input?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci51d03f31` (Properties of functions, relations and graphs): Use the composite function f(g(x)), where the output of g(x) becomes the input of f(x) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci82a0c261` (Properties of functions, relations and graphs): Determine the equations of composite functions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w08: Evaluating f at a number or an expression, with brackets. math-a11-w09: Domain and natural domain. math-a11-w18: Quadratic inequalities, for a domain such as 4 - x^2 >= 0.

**Prior video:** math-a11-w26.

**Start:** Recall evaluating f at an expression, using brackets (w08).

**Stop:** Use f(g(x)) as the output of g becoming the input of f; evaluate composites numerically from the inside out; determine the equation of a composite; show that the order usually matters; find the domain of a composite. Inverse functions are not part of Year 11 Advanced and are not used.

**Next:** math-a11-w28.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `d7e4743ab43926b4b4e9d08b557f3902ace9edcce0230192788e2468d87481db`. Title: Composite Functions. Lesson id maths-adv-y11-m1-l07.

Data-step ids: `orient`, `what-is-a-composite-function`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson06.sa.html, `we-comp-1`

Worked example 1 · evaluating a composite function If $f(x) = 2x + 1$ and $g(x) = x^2 - 3$, find $(f \circ g)(2)$ and $(g \circ f)(2)$. 1 $g(2) = (2)^2 - 3 = 4 - 3 = 1$ Find $(f \circ g)(2)$: evaluate the inner function first 2 $f(1) = 2(1) + 1 = 3$ Use $g(2) = 1$ as the input for $f$: $(f \circ g)(2) = \mathbf{3}$ 3 $f(2) = 2(2) + 1 = 5$ Find $(g \circ f)(2)$: evaluate the inner function $f$ first 4 $g(5) = (5)^2 - 3 = 25 - 3 = 22$ ✓ $(g \circ f)(2) = \mathbf{22}$, notice how the order gave a different result

### Source working-with-functions/lesson06.sa.html, `we-comp-2`

Worked example 2 · finding the algebraic expression If $f(x) = 3x - 2$ and $g(x) = x + 4$, find $(f \circ g)(x)$ and $(g \circ f)(x)$. 1 $f(g(x)) = f(x + 4) = 3(x + 4) - 2$ Substitute $g(x) = x + 4$ into $f$, use brackets! 2 $= 3x + 12 - 2 = 3x + 10$ Expand and simplify: $(f \circ g)(x) = \mathbf{3x + 10}$ 3 $g(f(x)) = g(3x - 2) = (3x - 2) + 4$ Substitute $f(x) = 3x - 2$ into $g$ 4 $= 3x + 2$ ✓ $(g \circ f)(x) = \mathbf{3x + 2}$, different from $(f \circ g)(x)$

### Source working-with-functions/lesson06.sa.html, `we-comp-3`

Worked example 3 · domain of a composite function Find the domain of $(f \circ g)(x)$ where $f(x) = \sqrt{x}$ and $g(x) = x - 5$. 1 $(f \circ g)(x) = f(g(x)) = f(x - 5) = \sqrt{x - 5}$ Write the composite expression 2 $g(x) = x - 5$ is defined for all real $x$ Check domain of the inner function $g$ 3 $f$ requires input $\geq 0$, so we need $x - 5 \geq 0 \Rightarrow x \geq 5$ Check domain of the outer function $f$ applied to $g(x)$ 4 Domain: $[5, \infty)$ ✓ Combine both conditions: $x \geq 5$

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-comp-1: f(x) = 2x + 1, g(x) = x^2 - 3: (f o g)(2) = 3 and (g o f)(2) = 22.
- we-comp-2: f(x) = 3x - 2, g(x) = x + 4: f(g(x)) = 3x + 10, g(f(x)) = 3x + 2.
- we-comp-3: sqrt(x - 5) has domain [5, inf).
- Site activity answers also check: with f(x) = 2x + 3, g(x) = x^2 - 1: 3, 24, 2x^2 + 1 and 4x^2 + 12x + 8.
- Site tax claim (section 8): doubling then adding 10% gives 2.2p, and adding 10% then doubling gives 2.2p, so that example shows no order effect.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All worked-example answers match. One real-world claim in card 06 is false (section 8). Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Applying f first in f(g(x)).
- Dropping brackets when substituting g(x) into f.
- Assuming f(g(x)) = g(f(x)) always, or that the order always matters.
- Checking only the outer function's domain.
- Writing f(g(x)) as a product f(x) x g(x).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Two function machines in a chain (FunctionMachine, proposed for w08, and MappingDiagram, proposed for w07): a number travels through g, its output slides along a conveyor into f.
- The same chain swapped, with both outputs side by side so the difference is seen.
- A domain gate: inputs that make g(x) negative are stopped at the square-root machine's entrance and the allowed interval shades.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for w15 to w31 are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` and the new parts that file proposes.

## 6. Two original candidate practice questions

### Question 1

Let f(x) = x^2 + 1 and g(x) = 3x - 2. Find f(g(x)) and g(f(x)) in expanded form, and evaluate f(g(1)).

**Worked answer:** f(g(x)) = (3x - 2)^2 + 1 = 9x^2 - 12x + 5. g(f(x)) = 3(x^2 + 1) - 2 = 3x^2 + 1. f(g(1)) = f(1) = 2.

### Question 2

Let f(x) = sqrt x and g(x) = 4 - x^2. Find f(g(x)) and its domain.

**Worked answer:** f(g(x)) = sqrt(4 - x^2). Need 4 - x^2 >= 0, so -2 <= x <= 2: domain [-2, 2].

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A $10-off voucher and 10% GST: take $10 off then add GST, or add GST then take $10 off; the first costs $1 more (money).
- Travel money: converting dollars to yen then paying a flat exchange fee, against paying the fee first (travel).
- A phone game's power-ups: double points then add a 50-point bonus (2x + 50), or the bonus then double (2x + 100) (games).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs, the w01 to w14 designs or the w01 to w14 pack suggestions. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `working-with-functions/lesson06.sa.html`, card 06. Old text: "In real-world terms, it matters whether you double a price and then add tax, or add tax and then double the price." With a percentage tax both orders give 2.2 times the price, so the example shows no order effect. Correction: "In real-world terms, it matters whether you take $\$10$ off a price and then add 10% GST, or add GST and then take $\$10$ off: the first way costs $\$1$ more."
- Same card, summary line. Old text: "Composition is not commutative, order always matters". The lesson's own drill (f(x) = x + 2, g(x) = x - 2) gives equal composites. Correction: "Composition is not commutative: order usually matters".

Decisions for Claude:

- Site card 06's tax example and its summary "order always matters" are wrong (section 8). The GST voucher anchor is the corrected version.
- Site copy explains equal composites through inverse functions. Inverses are Extension 1, so say "the second machine undoes the first" if this case is shown at all.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
