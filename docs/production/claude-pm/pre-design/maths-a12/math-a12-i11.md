# math-a12-i11: Why do horizontal strips and reflection turn y-axis areas into integrals we can evaluate?

Brief 151 research pack, 2 November 2026. Preparation for Claude, not design, narration, build or approval. Practice questions are original HSCScience questions, not official examination items.

## 1. Exact 2024 syllabus content and entry knowledge

- `cic69e48c4`: Use definite integrals to solve problems involving the areas of regions bounded by the graph of the continuous function y = f ( x ) , the y -axis and the lines y = a and y = b , in cases where x ≥ 0 throughout a ≤ y ≤ b , x ≤ 0 throughout a ≤ y ≤ b or where x changes sign in the interval a ≤ y ≤ b with or without the graph provided [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cide2cd24b`: Use the fact that the graphs of y = a x and y = log a ⁡ x are reflections of each other in the line y = x to solve problems involving areas between the x -axis or y -axis and a curve involving either an exponential or logarithmic function [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact official HTML and MathML are retained in the route fragment; read formula layout there rather than reconstructing it from flattened text.

Year 11 entry:
- `ci98f43d14` (Exponential and logarithmic functions): Graph the exponential functions y = k a x and y = k a - x for constants a and k where a > 0 , a ≠ 1 and k ≠ 0 , and identify its asymptote , y - intercept , domain and range [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce).
- `ci5d370004` (Exponential and logarithmic functions): Graph the logarithmic function y = log a ⁡ x for a > 0 and a ≠ 1 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce).
- `cic84a1659` (Exponential and logarithmic functions): Recognise and use the logarithmic properties: log a ⁡ a x = x for all real x , a log a ⁡ x = x where x > 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce).

Stage 5 entry: labelled Cartesian coordinates, substitution, simple rearrangement and area units. These are prerequisite assumptions, not newly quoted Year 11 points.
Prior videos: math-a12-i10, math-a12-i04.

Start: Retain i10 final graph y=x²−4 on [0,3], root 2, signed pieces −16/3 and 7/3, total −3 and geometric area 23/3, with its vertical strip. Ask: What changes if the boundary is the y-axis and the thin strips run horizontally? Then change to a clean y=x² branch example.

Stop: Teach horizontal width, y-limits, right/left/sign-changing regions, and reflection between exponential and logarithmic regions. Defer practical modelling to i13.

Next: math-a12-i12: retain an equal-area reflected pair and ask how symmetry or sampled values can shorten an integral calculation.

## 2. Site order, sections and worked examples

Read-only source: `C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson09.sa.html` ([site](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson09.sa.html)), SHA256 `5db0c1e271735f3528a0da20880d3cad57362f4a2429d2799d7d9b9f0acf10c8`.

Actual `data-step-id` values: `orient-to-areas-between-curves`, `build-area-between-curves-language`, `set-up-area-integrals`, `solve-area-examples`, `avoid-area-between-curves-traps`, `practise-and-reflect`, `complete-short-answer-practice`, `review-and-complete`.

### integral-calculus/lesson09.sa.html, `we-1`
PROBLEM 1 · BASIC AREA BETWEEN CURVES Find the area between $y = x^2$ and $y = x$. 1 $x^2 = x \Rightarrow x(x-1) = 0 \Rightarrow x = 0, \; x = 1$ Find intersections. These become the limits $a = 0$, $b = 1$. 2 Test $x = 0.5$: $0.5 > 0.25$, so $y = x$ is on top. Confirm which function is greater on the interval. The top function goes first in the integral. 3 $A = \displaystyle\int_0^1 (x - x^2)\,dx = \left[\dfrac{x^2}{2} - \dfrac{x^3}{3}\right]_0^1 = \dfrac{1}{2} - \dfrac{1}{3} = \dfrac{1}{6}$ Integrate top minus bottom, evaluate at both limits, subtract. 1 of 3 Reveal next step →

### integral-calculus/lesson09.sa.html, `we-2`
PROBLEM 2 · AREA WITH CROSSING CURVES Find the area between $y = x^3 - x$ and $y = 0$ from $x = -1$ to $x = 1$. 1 Crossings: $x = -1, 0, 1$. Split into $[-1,0]$ and $[0,1]$. Whenever curves cross inside the interval, you must split there. 2 $A = \displaystyle\int_{-1}^{0}(x^3 - x)\,dx + \int_{0}^{1}(x - x^3)\,dx$ On $[-1,0]$: $x^3 - x \geq 0$ (test $-0.5$: positive). On $[0,1]$: $x^3 - x \leq 0$ (test $0.5$: negative), so flip. 3 $= \left[\dfrac{x^4}{4} - \dfrac{x^2}{2}\right]_{-1}^{0} + \left[\dfrac{x^2}{2} - \dfrac{x^4}{4}\right]_{0}^{1} = \dfrac{1}{4} + \dfrac{1}{4} = \dfrac{1}{2}$ Each piece evaluates to $\frac{1}{4}$. Total area $= \frac{1}{2}$ square units. 1 of 3 Reveal next step →

### integral-calculus/lesson09.sa.html, `we-3`
PROBLEM 3 · ECONOMICS APPLICATION A revenue curve is $R(x) = 100x$ and cost is $C(x) = x^2 + 20x + 400$. Find the break-even points and the total profit between them. 1 $100x = x^2 + 20x + 400 \Rightarrow x^2 - 80x + 400 = 0$ Set $R(x) = C(x)$ to find break-even points. Rearrange to standard form. 2 $x = \dfrac{80 \pm \sqrt{6400 - 1600}}{2} = 40 \pm \sqrt{1200} \approx 5.4 \text{ or } 74.6$ Apply the quadratic formula. The two break-even quantities are approximately $x \approx 5.4$ and $x \approx 74.6$. 3 Profit $= \displaystyle\int_{5.4}^{74.6}[100x - (x^2 + 20x + 400)]\,dx = \int_{5.4}^{74.6}(-x^2 + 80x - 400)\,dx$ Integrate top minus bottom ($R - C$) over the profitable interval. The area between the curves is the total accumulated profit. 1 of 3 Reveal next step →

The full source examples above retain the exact site numbers. Tasks beyond the start and stop remain source context; Claude should choose a readable sequence rather than fit every task into the video.

## 3. Recalculation, units and domain check

IC09 we-1: x²=x gives x=0,1; vertical area ∫₀¹(x−x²)dx=1/6. Horizontal check ∫₀¹(√y−y)dy=1/6. IC09 we-2: roots −1,0,1; each geometric lobe is 1/4, total 1/2 while signed integral is 0. These are source context, not source examples of a y-axis region. IC09 we-3: R=100x, C=x²+20x+400, P=−x²+80x−400, roots 40±20√3, maximum P(40)=1200. ∫P dx between roots=32000√3 has money times output units, not total profit. Do not teach that economic interpretation.

Original preparation to fill the missing action: y=x², right branch x=√y for 0≤y≤4, gives area 16/3; its left branch x=−√y gives the same geometric area using width 0−x. For y=x+1, y from 0 to 2, x=y−1 changes side at y=1; add widths to get 1. Never integrate a signed x-value and label it total area without checking sides.

Original reflection preparation: y=e^x, y-axis and horizontal lines y=1,2 enclose ∫₁² ln(y)dy=2ln2−1. Reflection in y=x gives the region under y=ln x on [1,2] with equal area. Separately ∫₀^(ln2)e^x dx=1 reflects to ∫₀^(ln2)e^y dy against the y-axis. General bases require a>0 and a≠1, and logarithm inputs positive. For 0<a<1, log_a y<0 for y>1, so geometric width is its negative. The inverse branch of x² must be named; it is not globally one-to-one.

All numerical results were independently recalculated in `work/brief151/integral-b-check.py`; `integral-b-calculations.json` records 65 passing checks. Keep exact values until the final decimal.

## 4. Misconceptions and HSC-style traps

Changing strip orientation changes the width formula, variable and limits together. An inverse relation may need a branch. Reflection preserves geometric area, but it does not license treating a signed integral as positive. Logarithms need positive arguments.

These are mathematical consequences of the functions and conditions above, not claims about examination marking frequency.

## 5. Visual needs against programme decision 4

Existing FunctionGraph, IntegralNotation, AlignedAlgebra, DomainStrip, ReflectionLayer and ReadoutPanel. Extend area fill and strip overlay to horizontal strips, left/right widths and sign-change splits. ReflectionLayer already handles y=x folding for its positive finite-gradient case; extend it only for region/strip overlays and unsupported decreasing-base cases if used. Keep exact axis labels attached to the reflected region.

Use the existing mathematical visual language and shared kit. No implementation is authorised by this research pack.

## 6. Two original candidate question cards and worked answers

### Candidate 1: card
Find the area enclosed by the y-axis, the line y=x+2 and the lines y=−1 and y=3.

### Candidate 1: worked answer
x=y−2. Split at y=2: ∫₋₁²(2−y)dy+∫₂³(y−2)dy=9/2+1/2=5 square units.

### Candidate 2: card
Find the area enclosed by y=3^x, the y-axis and the lines y=1 and y=9. Explain how reflection in y=x gives a corresponding logarithm region.

### Candidate 2: worked answer
x=ln(y)/ln3. Area=∫₁⁹ ln(y)/ln3 dy=18−8/ln3 square units. Reflection gives the region under y=log₃x on [1,9].

Keep the worked answer and all solved roots, signs, shaded results and evaluated limits out of the question card. Retain the question conditions during the thinking opportunity.

## 7. Site corrections and preparation decisions

IC09 does not teach integration with respect to y or exponential/logarithm reflection areas. Both require original preparation above. Its legacy Module 6 title is not 2024 route authority.

Existing corrections-log item 20: Integral of profit against output has money times output units, not total profit. Correct instantaneous profit is R(x)−C(x). append IC09 we-3 as another occurrence; no duplicate issue. Parent integrates this reference without duplicating the issue.
