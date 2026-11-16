# math-a11-c07: Why does x^n differentiate to nx^(n-1), and how do sums and multiples follow?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cicccefba1` (The derivative): Infer that nx^(n - 1) is the gradient of f(x) = x^n and verify the result using graphing applications [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: partial. Gap: ID13 builds the secant table for x squared only. The pattern nx^(n-1) is stated as a rule in ID04 rather than inferred from several powers and verified with a graphing application.
- `ci1d192d62` (Calculations with the derivative): Use the formula d/dx (x^n) = nx^(n - 1) for all real values of n [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.
- `cif6a6cb7d` (Calculations with the derivative): Apply the fact that the derivative of a sum is the sum of the derivatives: d/dx (f(x) + g(x)) = f'(x) + g'(x), and the derivative of a multiple of a function is the multiple of its derivative: d/dx (k ⋅ f(x)) = k ⋅ f'(x) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-c06: First principles: x^2 gives 2x, a line gives its gradient, a constant gives 0. math-a11-c04: Numerical secant tables and a graphing application. math-a11-w01: Index laws for negative and fractional indices (sqrt x = x^(1/2), 1/x^2 = x^(-2)).

**Prior video:** math-a11-c06.

**Start:** Recall x^2 -> 2x and the secant tables (c04, c06), then tabulate gradients of x^3 and x^4 to find the pattern.

**Stop:** Infer that nx^(n - 1) is the gradient of x^n from x^1 to x^4 and verify it with a graphing application; use d/dx(x^n) = nx^(n - 1) for all real n after rewriting roots and reciprocals as powers; apply the sum rule and the constant multiple rule; evaluate a derivative at a point. Tangent equations are c08; the chain rule is c10.

**Next:** math-a11-c08.

## 2. Site order, sections and worked examples

Read-only source: [introduction-to-differentiation/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c2c154f93574bd458ae02e34e419fe3471d614eb213dd7189c256ed6e7f2906a`. Title: Differentiation Rules. Lesson id maths-adv-y11-m3-l04.

Data-step ids: `orient`, `the-three-differentiation-rules`, `what-you-will-master`, `how-differentiation-rules-work`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source introduction-to-differentiation/lesson04.sa.html, `we-1`

PROBLEM 1 · DIFFERENTIATE A POLYNOMIAL Differentiate $f(x) = 3x^4 - 2x^3 + 5x - 7$. 1 Apply the power rule to each term: $\frac{d}{dx}(3x^4) = 3 \cdot 4x^3 = 12x^3$ Multiply the coefficient by the exponent, then subtract 1 from the exponent. 2 $\frac{d}{dx}(-2x^3) = -2 \cdot 3x^2 = -6x^2$, $\quad \frac{d}{dx}(5x) = 5$, $\quad \frac{d}{dx}(-7) = 0$ Apply the power rule to each remaining term. Constants differentiate to zero. 3 $f'(x) = 12x^3 - 6x^2 + 5$ Combine all the results. The constant term $-7$ vanishes.

### Source introduction-to-differentiation/lesson04.sa.html, `we-2`

PROBLEM 2 · REWRITE AS POWERS FIRST Differentiate $f(x) = \sqrt{x} + \frac{1}{x^2}$. 1 Rewrite using index notation: $f(x) = x^{1/2} + x^{-2}$ Always convert radicals and reciprocals to powers before differentiating. 2 $\frac{d}{dx}(x^{1/2}) = \frac{1}{2}x^{-1/2}$, $\quad \frac{d}{dx}(x^{-2}) = -2x^{-3}$ Apply the power rule to each term using the index form. 3 $f'(x) = \frac{1}{2\sqrt{x}} - \frac{2}{x^3}$ Rewrite in the original form if desired (optional but often neater).

### Source introduction-to-differentiation/lesson04.sa.html, `we-3`

PROBLEM 3 · FIND A DERIVATIVE AT A POINT Find $f'(2)$ for $f(x) = x^3 - 4x + 1$. 1 $f'(x) = 3x^2 - 4$ Differentiate the function using the power rule and constant multiple rule. 2 $f'(2) = 3(2)^2 - 4 = 12 - 4 = 8$ Substitute $x = 2$ into the derivative to find the instantaneous rate of change at that point.

### Source introduction-to-differentiation/lesson04.sa.html, card "How differentiation rules work"

Many functions need rewriting before the power rule applies: $$\sqrt{x} = x^{1/2}, \quad \frac{1}{x^2} = x^{-2}, \quad \frac{3}{\sqrt{x}} = 3x^{-1/2}$$ Always rewrite in index form first, then apply the power rule to each term.

Read-only source: [introduction-to-differentiation/lesson13.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson13.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `bfaae610853e1e55504c28dc9f7f62020ae926bded4dddd275e953f25c9e5e33`. Title: Exploring Gradients with Digital Tools. Lesson id maths-adv-y11-m3-l17. Used for the gradient tables only.

Data-step ids: `recall-your-gut-answer-first`, `watch-the-secant-become-the`, `what-you-ll-master`, `building-the-table`, `model`, `quick-fire-practice`, `revisit-your-three-chord-gradients`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: 3x^4 - 2x^3 + 5x - 7 -> 12x^3 - 6x^2 + 5.
- we-2: sqrt x + 1/x^2 -> 1/(2 sqrt x) - 2/x^3.
- we-3: x^3 - 4x + 1 -> 3x^2 - 4; f'(2) = 8.
- Drills: x^5 -> 5x^4; 4x^3 - 3x^2 + 2x - 1 -> 12x^2 - 6x + 2; 1/x^3 -> -3/x^4; 3 sqrt x - 2/x -> 3/(2 sqrt x) + 2/x^2; 2x^4 - 3x + 5 at x = 1 gives 5. Revisit: x^3 + 2x -> 3x^2 + 2.
- Short answers: x^4 - 3x^2 + 2/x - sqrt x -> 4x^3 - 6x - 2/x^2 - 1/(2 sqrt x); x^3 - 2x^2 + 4 at x = -1 gives 7.
- Pattern data (original): gradients of x^3 at x = 1, 2, 3 are 3, 12, 27 (3x^2); of x^4 at x = 1, 2 are 4, 32 (4x^3).

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Multiplying by the power but forgetting to subtract one (x^5 -> 5x^5).
- Differentiating sqrt x or 1/x^2 without first writing them as powers.
- Thinking the derivative of a constant is the constant.
- Applying the rules to a product of brackets term by term without expanding first (for example x^2(x - 3)).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `RefinementTable` columns for x^2, x^3 and x^4 filled from secant estimates, with a pattern row writing 2x, 3x^2, 4x^3 and the general nx^(n - 1).
- A graphing-application screen (`ScreenApp`) overlaying the app's gradient graph of x^3 on the plotted 3x^2: the curves coincide.
- `WorkingBoard` rewriting each term in index form first (a tinted "rewrite" row), then differentiating term by term.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

Differentiate y = 4x^3 - 6 sqrt x + 5/x.

**Worked answer:** Write y = 4x^3 - 6x^(1/2) + 5x^(-1). Then dy/dx = 12x^2 - 3x^(-1/2) - 5x^(-2) = 12x^2 - 3/sqrt x - 5/x^2.

### Question 2

Find the gradient of the curve y = x^2(x - 3) at x = -1.

**Worked answer:** Expand: y = x^3 - 3x^2, so dy/dx = 3x^2 - 6x. At x = -1: 3 + 6 = 9.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A phone game where reaching level n takes 50n^2 + 100n experience points: the extra points needed per level near level n is about 100n + 100, by the sum and multiple rules (games, phones).
- How far you can see to the horizon from a height of h metres: about 3.57 sqrt h km, so its rate of change uses n = 1/2 (travel; a coastal lookout, no person drawn).

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `introduction-to-differentiation/lesson04.sa.html`, step `practice-short-answer`, "Prove the power rule". The model answer uses the binomial theorem with $\binom{n}{2}$, which is not in the 2024 Mathematics Advanced syllabus (it is Extension 1). Correction: replace with "Use first principles to show that $\frac{d}{dx}(x^3) = 3x^2$", whose expansion $(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$ needs no binomial theorem.

Decisions for Claude:

- `cicccefba1` is partial: the site states the power rule rather than inferring it. The gradient table across several powers and the app check are original teaching.
- Ownership note for root: c07 carries three points (inference, all real n, sum and multiple). If the draft runs long, split "all real n" (roots and reciprocals) into its own short video; `cif6a6cb7d` must stay in Year 11 before d01.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
