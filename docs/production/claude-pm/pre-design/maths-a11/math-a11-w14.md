# math-a11-w14: Where are a function's zeros, and how does the discriminant place a parabola?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci9169adaa` (Introduction to functions and relations): Refer to a value in the domain of a function at which the function is 0 as a zero of the function [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered. Gap: The zero of a function is taught through parabola intercepts, not as a general definition in the functions lessons.
- `ci40fe4286` (Introduction to functions and relations): Recognise that the x-intercepts of the graph of y = f(x) are its zeroes, the solutions of f(x) = 0, and that the y-intercept is f(0) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: partial. Gap: x-intercepts as zeros are taught for parabolas. The general statement that the y-intercept is f(0) appears only as a fixed-fee remark in WF02.
- `ci7b0b3647` (Quadratic and cubic functions): Identify the x-intercepts of a parabola whose quadratic function is expressed in factored form [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `cicd85f895` (Quadratic and cubic functions): Use the discriminant to determine the number of x-intercepts on a parabola and justify its position in relation to the x-axis [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-w05: The discriminant counts real roots. math-a11-w08: f(0) and substitution.

**Prior video:** math-a11-w13.

**Start:** Recall the null factor law and the discriminant.

**Stop:** Define a zero of a function; x-intercepts as zeros and y-intercept as f(0); intercepts of a parabola in factored form; the discriminant with the sign of a placing the parabola relative to the x-axis (crosses, touches, wholly above or below). Vertex and axis are w15.

**Next:** math-a11-w15.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson13.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson13.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3cda738ba2076762faf65accb4b5107319c4f517e494f397e45ba8cfb49e9919`. Title: Parabolas: Intercepts and the Discriminant. Lesson id maths-adv-y11-m1-l21.

Data-step ids: `recall-your-gut-answer-first`, `zero-product-zero-height`, `what-you-ll-master`, `intercepts-from-factored-form`, `model`, `quick-fire-practice`, `revisit-your-prediction`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson13.sa.html, `we-1`

PROBLEM 1 · INTERCEPTS FROM FACTORED FORM Find all intercepts of $y = 2(x - 3)(x + 1)$. 1 $x$-intercepts: set each bracket to zero, giving $x = 3$ and $x = -1$ The factor 2 cannot be zero, so it does not contribute an intercept. 2 $y$-intercept: substitute $x = 0$: $y = 2(-3)(1) = -6$ Every term evaluated at zero. 3 Intercepts $(3, 0)$, $(-1, 0)$ and $(0, -6)$ Three points, enough to sketch the parabola.

### Source working-with-functions/lesson13.sa.html, `we-2`

PROBLEM 2 · COUNTING CROSSINGS How many times does $y = 3x^2 - 4x + 2$ cross the $x$-axis? 1 $a = 3$, $b = -4$, $c = 2$ Read the coefficients with their signs. 2 $\Delta = (-4)^2 - 4(3)(2) = 16 - 24 = -8$ Square $-4$ to get $+16$. 3 $\Delta < 0$, so it never crosses the $x$-axis No real roots means no intercepts.

### Source working-with-functions/lesson13.sa.html, `we-3`

PROBLEM 3 · PROVING A QUADRATIC IS ALWAYS POSITIVE Show that $y = 2x^2 + 3x + 5$ is positive for all real values of $x$. 1 $\Delta = 3^2 - 4(2)(5) = 9 - 40 = -31$ Calculate the discriminant first. 2 $\Delta < 0$, so the parabola never meets the $x$-axis It lies entirely on one side. 3 $a = 2 > 0$, so it opens upward and lies wholly above the axis, giving $y > 0$ for all $x$ Both facts together complete the proof.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-1: y = 2(x - 3)(x + 1): x-intercepts 3 and -1, y-intercept -6.
- we-2: y = 3x^2 - 4x + 2: discriminant -8, never crosses.
- we-3: y = 2x^2 + 3x + 5: discriminant -31 and a = 2 > 0, so positive for all x (minimum 31/8).

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14 from work/brief130-python). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading intercepts from factored form without reversing the sign.
- Thinking the leading factor 2 in 2(x - 3)(x + 1) gives an intercept.
- Using the discriminant alone to say "positive for all x" without the sign of a.
- Calling a touching point two intercepts.

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- A parabola sliding up and down (vertical shift slider) while a live counter shows 2, 1, 0 crossings and the discriminant sign changes with it. One timeline drives both.
- Factored form brackets lighting the matching intercept dots.
- y-intercept as f(0): a vertical line at x = 0 meeting the curve, value read off.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit details: `../../checks/maths-a11-kit-needs.md`.

## 6. Two original candidate practice questions

### Question 1

Find all intercepts of y = -(x - 2)(x + 5).

**Worked answer:** x-intercepts x = 2 and x = -5. y-intercept: -(0 - 2)(0 + 5) = 10, so (0, 10).

### Question 2

Show that y = -x^2 + 4x - 7 lies entirely on one side of the x-axis, and state which side.

**Worked answer:** Discriminant 16 - 28 = -12 < 0, so no x-intercepts. a = -1 < 0, so it opens downward and lies wholly below the axis: y < 0 for all x (its maximum is -3).

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A skate ramp cross-section that must stay above ground level: a positive-definite quadratic.
- A bakery's profit against price: the zeros are the break-even prices.
- A netball pass's height above the court: where it would land is a zero.

Varied everyday contexts (money, phones, sport, travel, food). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only. Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
