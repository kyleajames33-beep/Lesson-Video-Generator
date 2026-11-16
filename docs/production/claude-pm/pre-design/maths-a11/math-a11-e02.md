# math-a11-e02: What makes e the special base for exponentials?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci93d02049` (Exponential functions): Examine the gradient of the tangent to the curve y = a^x at its y-intercept for varying values of a, and verify using graphing applications that there is a unique number e ≈ 2.71828182845..., such that the gradient of the tangent to y = e^x at x = 0 is 1, and call this number e Euler’s number [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.
- `ci7e417be9` (Exponential functions): Examine the gradient function of y = a^x with graphing applications and identify that the gradient function is d/dx (a^x) = ka^x, for some constant k depending only on a [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: missing. Gap: No lesson shows that the gradient function of a^x is a constant multiple k a^x.
- `ciac4383bd` (Exponential functions): Conclude that Euler’s number, e, is a unique number such that d/dx (e^x) = e^x, that is, e^x is its own derivative [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-e01: Graphs of a^x: all pass through (0, 1). math-a11-c04: Estimating a gradient at a point with secants or a graphing application. math-a11-c05: The gradient function f'(x). math-a11-c07: The constant multiple rule.

**Prior video:** math-a11-e01.

**Start:** Recall that every y = a^x passes through (0, 1) (e01) and how a graphing application estimates a tangent's gradient (c04).

**Stop:** Examine the gradient of y = a^x at its y-intercept as a varies, and verify with a graphing application that a unique number e ≈ 2.71828 gives gradient 1 there (Euler's number); examine the gradient function of a^x and identify that it is k a^x with k depending only on a; conclude that d/dx(e^x) = e^x. Do not name k = ln a (Year 12 d02); no continuous compounding (not Year 11); no chain rule on e^(f(x)) (Year 12 d01).

**Next:** math-a11-e03.

## 2. Site order, sections and worked examples

Read-only source: [exponential-and-logarithmic-functions/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3205d5637f9643d0353d79d6efff112e7578bd304963e933fa1d81c855bd0f19`. Title: The Number $e$ and Natural Exponentials. Lesson id maths-adv-y11-m4-l03.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `what-is-e`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source exponential-and-logarithmic-functions/lesson03.sa.html, `we-1`

PROBLEM 1 · EVALUATING $e^x$ Evaluate $e^2$ and $e^{-1}$ to 3 decimal places. 1 $e^2 \approx 7.389$ Use the $e^x$ function on your calculator. 2 $e^{-1} = \dfrac{1}{e} \approx 0.368$ $e^{-1}$ is the reciprocal of $e$. Negative exponent means flip.

### Source exponential-and-logarithmic-functions/lesson03.sa.html, `we-2`

PROBLEM 2 · SKETCHING $y = e^x$ AND $y = e^{-x}$ Sketch $y = e^x$ and $y = e^{-x}$ on the same axes, identifying key features. 1 $y = e^x$: asymptote $y = 0$, passes through $(0, 1)$, increasing Standard natural exponential growth curve. 2 $y = e^{-x}$: asymptote $y = 0$, passes through $(0, 1)$, decreasing $e^{-x} = \left(\frac{1}{e}\right)^x$, so this is exponential decay. 3 Both curves are reflections of each other in the $y$-axis. Replacing $x$ with $-x$ always reflects in the $y$-axis.

### Source exponential-and-logarithmic-functions/lesson03.sa.html, card "What is e?", exploration

Exploration. Plot $y = 2^x$, then $y = 3^x$, on the same axes. Both pass through $(0, 1)$, so compare them at that point only. Draw the tangent at the $y$-intercept of each and read its gradient. For $y = 2^x$ the gradient at $(0, 1)$ is about $0.69$; for $y = 3^x$ it is about $1.10$. Neither is $1$. Now raise the base slowly from $2$ towards $3$ and watch that gradient climb through $1$. The base at which the tangent at $(0, 1)$ has gradient exactly $1$ is $e$. That is the definition worth carrying: $e$ is the base whose graph rises at exactly the rate of its own height . The limit $\left(1 + \frac{1}{n}\right)^n$ and this gradient property describe the same number.

Other worked examples in this lesson (we-3 is continuous compounding, A = Pe^(rt), which is not a 2024 Year 11 point) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- Gradients at (0, 1): 2^x 0.6931, 3^x 1.0986, 4^x 1.3863; the base with gradient exactly 1 solves to 2.718281828... (e).
- Gradient function of 2^x (original, for `ci7e417be9`): at x = 0, 1, 2 the gradients are 0.693, 1.386, 2.773, each 0.693 × 2^x.
- we-1: e^2 ≈ 7.389, e^-1 ≈ 0.368. Drills: e^3 ≈ 20.09, e^-2 ≈ 0.14. Q1: e^1.5 ≈ 4.482, e^-0.5 ≈ 0.607.
- Hook: (1 + 1/n)^n for n = 1, 12, 365 and 31 536 000 gives 2, 2.6130, 2.71457 and 2.7182818. The site prints "Daily: $2.714", which is truncated (2.715 to three places; $2.71 as money).

Every value above was recalculated with SymPy and mpmath (work in the scratchpad, sympy 1.14.0). Site values match except the truncated daily figure noted. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Thinking e is a variable or a rounded 2.7.
- Confusing e^x with x^e.
- Thinking the gradient of 2^x is x 2^(x - 1) (the power rule applies to x^n, not a^x).
- Believing every exponential has gradient 1 at (0, 1).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- `ExponentialDemo` with a base slider from 2 to 3: the tangent at (0, 1) and its gradient readout pass through 1 at a = 2.718..., where the slider locks and labels e.
- `HeightSlopeReadout` riding along y = 2^x: height, gradient and gradient ÷ height, the last staying at 0.693 everywhere (that constant is k). Then the same rider on e^x shows 1.00, so gradient = height.
- Graphing-application screen (`ScreenApp`) plotting the app's numerical derivative of 2^x over 2^x scaled by 0.693: the curves coincide.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs for the c and e strands are not yet listed in `../../checks/maths-a11-kit-needs.md`; part names above are suggestions from `src/explainer/math/studio/` (names checked against its exports, 16 November 2026).

## 6. Two original candidate practice questions

### Question 1

The gradient of y = 4^x at x = 0 is about 1.386. The gradient function of 4^x is k × 4^x for a constant k. Find k, then the gradient at x = 1 and at x = -0.5.

**Worked answer:** At x = 0, k × 4^0 = k, so k ≈ 1.386. At x = 1: 1.386 × 4 ≈ 5.545. At x = -0.5: 1.386 × 0.5 ≈ 0.693.

### Question 2

Find the gradient of y = e^x at the point where y = 5, and at x = 2 (to 2 decimal places). Then find the equation of the tangent at x = 0.

**Worked answer:** The gradient equals the height: 5 where y = 5, and e^2 ≈ 7.39 at x = 2. At x = 0: point (0, 1), gradient 1, tangent y = x + 1.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A phone game's gold mine that produces gold in proportion to the gold already stored: when the production per coin is exactly 1, the curve is e^x (games, phones).
- The site's own hook: $1 at 100% interest compounded more and more often approaches about $2.72 (money). Use only as a hook: continuous compounding is not a Year 11 point.

Varied everyday contexts (money, phones, sport, travel, food, games, home). None repeats an anchor in the Year 12 Maths designs or the w01 to w31 designs (anchor lines and full text grepped, 16 November 2026), the w01 to w31 pack suggestions, or another c or e pack. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only.

New site findings from this pack (not yet in `site-corrections-maths-a11.md`; root decides whether to log them):

- `exponential-and-logarithmic-functions/lesson03.sa.html`, hook. Old text: "Daily: $\$2.714$." $(1 + 1/365)^{365} = 2.71457$, which rounds to 2.715. Correction: "Daily: about $\$2.71$ (2.7146)."

Decisions for Claude:

- `ci7e417be9` is missing on the site (crosswalk): no lesson shows the gradient function of a^x is k a^x. The HeightSlopeReadout rider is original teaching. Stop at "k depends only on a"; Year 12 d02 measures k = ln a.
- Year 12 d01 assumes `ciac4383bd` and uses the picture "gradient always equals the height". End e02 on exactly that picture so d01's recall line lands.
- Leave out A = Pe^(rt), the e^(2x) trap and the "beyond the syllabus" growth models from lesson03.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
