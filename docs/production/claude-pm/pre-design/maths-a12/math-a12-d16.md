# math-a12-d16: How does the changing gradient reveal concavity and inflection?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci11df959b`: Use repeated differentiation to find second derivatives of a function y = f ( x ) , denoting them by f ' ' ( x ) or d 2 y d x 2 or y ' ' [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `cie880425a`: Interpret the second derivative y ' ' as the gradient function of the first derivative y ' , and deduce that if y ' ' > 0 the curve is concave up and if y ' ' < 0 the curve is concave down [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci1fdde799`: Define a point of inflection on a curve as a point where the concavity changes [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci26282587`: Analyse the value of f ' ' ( x ) either side of the roots of f ' ' x = 0 , and use the resulting concavities to identify which zeroes of f ' ' x are points of inflection [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `cid11e4a03`: Use the second derivative to classify a stationary point as a local maximum , local minimum or a horizontal point of inflection [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci00fa8fac`, `cie3d91a6e`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-d15.

**Start:** Recall d09 signs; calculate a second derivative.

**Stop:** Connect changing gradient to concavity,require a sign change for inflection,and use second-test fallback.

**Next:** math-a12-d17.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\applications-of-calculus\lesson07.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson07.sa.html), SHA256 `97121a69ba85a95bd139aab6b13e0ca6323d83153e68476703f6e75922fe713c`.

Data-step IDs: `orient-concavity`, `second-derivative-and-concavity`, `points-of-inflection`, `second-derivative-test`, `work-concavity-examples`, `practise-and-reflect-concavity`, `complete-short-answer-practice`, `review-and-complete`.

### Source applications-of-calculus/lesson07.sa.html, `we-l18-1`

PROBLEM 1 · THE FULL ANALYSIS For $f(x) = x^3 - 6x^2 + 9x$, find and classify the stationary points using the second derivative, and find the point of inflection. 1 $f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$ Stationary points at $x = 1$ and $x = 3$. 2 $f''(x) = 6x - 12 = 6(x - 2)$ Differentiate again. A linear $f''$ means exactly one candidate inflection. 3 $f''(1) = -6 < 0, \qquad f''(3) = 6 > 0$ So $x = 1$ is a local maximum and $x = 3$ is a local minimum. $f(1) = 1 - 6 + 9 = 4$ and $f(3) = 27 - 54 + 27 = 0$. 4 $f''(x) = 0 \implies x = 2; \ f''(1) < 0, \ f''(3) > 0$ The sign of $f''$ genuinely changes across $x = 2$, so it IS an inflection. $f(2) = 8 - 24 + 18 = 2$, giving $(2, 2)$. 5 $\text{max } (1,4), \ \text{min } (3,0), \ \text{inflection } (2,2)$ Sanity check: the inflection sits between the two turning points, at the mean of their $x$-values, which is always true for a cubic. 1 of 5 Reveal next step →

### Source applications-of-calculus/lesson07.sa.html, `we-l18-2`

PROBLEM 2 · WHEN THE TEST FAILS Classify the stationary point of $f(x) = x^4$ at $x = 0$, and state whether the curve has a point of inflection there. 1 $f'(x) = 4x^3, \quad f'(0) = 0$ Stationary at the origin. 2 $f''(x) = 12x^2, \quad f''(0) = 0$ The second-derivative test is inconclusive . Write that down; do not guess "inflection". 3 $f'(-1) = -4 < 0, \qquad f'(1) = 4 > 0$ Falling back to the first-derivative sign test: $-$ then $+$, so the origin is a local minimum . 4 $f''(x) = 12x^2 \geq 0 \text{ for all } x$ The concavity is up everywhere and never changes, so there is no inflection at the origin, despite $f''(0) = 0$. 1 of 4 Reveal next step →

### Source applications-of-calculus/lesson07.sa.html, `we-l18-3`

PROBLEM 3 · AN OBLIQUE INFLECTION Find the points of inflection of $f(x) = x^4 - 6x^2 + 5$, and state the concavity on each interval. 1 $f'(x) = 4x^3 - 12x, \quad f''(x) = 12x^2 - 12$ Differentiate twice. Factorise: $f''(x) = 12(x-1)(x+1)$. 2 $f''(x) = 0 \implies x = \pm 1$ Two candidates. Both must be tested, not assumed. 3 $f''(-2) = 36 > 0, \quad f''(0) = -12 < 0, \quad f''(2) = 36 > 0$ The sign changes at both candidates, so both are genuine inflections. 4 $(-1, 0) \text{ and } (1, 0)$ $f(\pm 1) = 1 - 6 + 5 = 0$. Note $f'(\pm 1) = \mp 8 \neq 0$, so these are OBLIQUE inflections: the curve is still moving as it changes its bend. 5 $\text{up on } x < -1, \ \text{down on } -1 < x < 1, \ \text{up on } x > 1$ Read straight from the signs in step 3. A "state the concavity" instruction wants intervals, not points. 1 of 5 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

x cubed-6x squared+9x:f′=3(x-1)(x-3),f″=6(x-2);max(1,4),min(3,0),inflection(2,2). x^4:f″(0)=0 inconclusive;origin minimum by f′signs,no inflection. x^4-6x squared+5:f″=12(x squared-1);inflections(-1,0),(1,0),up/down/up;slopes8,-8.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

f″=0 is only a candidate,not an inflection verdict.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: DerivativeTracer, SignChart. Concavity tint and separate f′/f″ scales. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Classify stationary points of x cubed-3x using f″.

**Worked answer:** f′=3(x squared-1),f″=6x;max(-1,2),min(1,-2).

### Question 2

Find inflections and concavity of x^4-2x squared.

**Worked answer:** f″=12x squared-4;points(+/-1/sqrt3,-5/9);up outside,down inside.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
