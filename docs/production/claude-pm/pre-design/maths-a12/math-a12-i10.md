# math-a12-i10: How do signed integrals differ from total area?

Brief 151 research pack, 2 November 2026. Preparation for Claude, not a design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ciea1a6452`: Describe, in the case where f x ≥ 0 for all values of x in the interval a ≤ x ≤ b , the area bounded by the graph of the continuous function y = f ( x ) , the x -axis and the lines x = a and x = b , as ∫ a b f ( x ) dx [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cib0134047`: Recognise, in the case where f x ≤ 0 for all values of x in the interval a ≤ x ≤ b , the area bounded by the graph of the continuous function y = f ( x ) , the x -axis and the lines x = a and x = b , as ∫ a b f ( x ) dx or - ∫ a b f ( x ) d x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci09a73813`: Conclude, for a continuous function y = f ( x ) on the interval a ≤ x ≤ b , that ∫ a b f ( x ) dx = (area of regions between curve and x -axis lying above the x -axis) - (area of regions between curve and the x -axis lying below the x -axis) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cicfcd020a`: Use definite integrals to solve problems involving the areas of regions bounded by the graph of the continuous function y = f ( x ) , the x -axis and the lines x = a and x = b , in cases where f x ≥ 0 throughout a ≤ x ≤ b , f x ≤ 0 throughout a ≤ x ≤ b or where f ( x ) changes sign in the interval a ≤ x ≤ b , with or without the graph provided [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in the route fragment. Flattened text can lose fractions, absolute-value bars and bounds; typeset from source HTML. The fresh 2024 official actions were checked in `work/brief151/math-official-validation.json`.

**Stage 5 and Year 11 entry:** Solve quadratic roots, read sign intervals, geometric area and absolute value; Year 11 graph/derivative vocabulary. i07 establishes signed sums; i09 evaluates definite integrals; d09 supports sign charts.

- Year 11 `ci1d192d62`: Use the formula d dx ( x n ) = n x n - 1 for all real values of n [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- Year 11 `cif6a6cb7d`: Apply the fact that the derivative of a sum is the sum of the derivatives: d dx f x + g x = f ' x + g ' ( x ) , and the derivative of a multiple of a function is the multiple of its derivative: d dx ( k ⋅ f x ) = k ⋅ f ' ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).

**Prior videos:** math-a12-i07, math-a12-i09, math-a12-d09.

**Start:** Keep i09’s signed integral answer next to its graph, then ask whether cancellation measures the amount of region between the graph and axis.

**Stop:** Distinguish signed integral and total area, handle wholly above/below-axis cases and split at every sign change. Use ∫|f| as compact notation after the pieces are understood. Stop before horizontal strips, reflected exponential/log areas and areas between two curves.

**Next:** math-a12-i11 opens on the retained split x-axis region y=x²−4 on [0,3], root 2, signed pieces −16/3 and 7/3, signed total −3 versus area 23/3, and a thin vertical strip. Prompt: “What changes if the boundary is the y-axis and the thin strips run horizontally?” Next chip names i11. Then i11 may change to its suitable horizontal-strip case.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson02.sa.html), SHA256 `f2ec0e82cfb5d3d50952cf1840954f843cfba325192e2d44576deda0cd9a9380`.
Actual page title: Areas | HSC Maths Advanced Year 11 Module 3 | HSCScience.

Data-step IDs: `orient-to-definite-area`, `build-area-language`, `connect-integrals-and-area`, `evaluate-area-examples`, `avoid-signed-area-traps`, `practise-and-reflect`, `complete-mixed-practice`, `review-and-complete`.

### Source lesson02, `we-2`

PROBLEM 2 · AREA WITH CURVE BELOW AXIS Find the total area bounded by $y = x^2 - 4$, the $x$-axis, $x = 0$ and $x = 3$. Apply Band 4 1 $y = x^2 - 4 = 0$ when $x = 2$ (in the interval $[0,3]$). Find where the curve crosses the $x$-axis within the bounds. This divides $[0,3]$ into $[0,2]$ (below axis) and $[2,3]$ (above axis). 2 $\displaystyle\int_0^2 (x^2 - 4)\,dx = \left[\frac{x^3}{3} - 4x\right]_0^2 = \left(\frac{8}{3} - 8\right) - 0 = -\frac{16}{3}$ Negative because the curve is below the axis on $[0, 2]$. 3 $\displaystyle\int_2^3 (x^2 - 4)\,dx = \left[\frac{x^3}{3} - 4x\right]_2^3 = (9 - 12) - \left(\frac{8}{3} - 8\right) = -3 + \frac{16}{3} = \frac{7}{3}$ Positive because the curve is above the axis on $[2, 3]$. 4 Total area $= \left|-\frac{16}{3}\right| + \frac{7}{3} = \frac{16}{3} + \frac{7}{3} = \frac{23}{3}$ square units. Take the absolute value of the negative piece, then add both pieces together. 1 of 4 Reveal next step →

Exact extracted-text SHA256: `80f2498468d477345028487072721fa629fb11ba0225ed5acc5cc321c43a2194`.

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson09.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson09.sa.html), SHA256 `5db0c1e271735f3528a0da20880d3cad57362f4a2429d2799d7d9b9f0acf10c8`.
Actual page title: Areas Between Curves | HSC Maths Advanced Year 12 Module 6 | HSCScience.

Data-step IDs: `orient-to-areas-between-curves`, `build-area-between-curves-language`, `set-up-area-integrals`, `solve-area-examples`, `avoid-area-between-curves-traps`, `practise-and-reflect`, `complete-short-answer-practice`, `review-and-complete`.

### Source lesson09, `we-2`

PROBLEM 2 · AREA WITH CROSSING CURVES Find the area between $y = x^3 - x$ and $y = 0$ from $x = -1$ to $x = 1$. 1 Crossings: $x = -1, 0, 1$. Split into $[-1,0]$ and $[0,1]$. Whenever curves cross inside the interval, you must split there. 2 $A = \displaystyle\int_{-1}^{0}(x^3 - x)\,dx + \int_{0}^{1}(x - x^3)\,dx$ On $[-1,0]$: $x^3 - x \geq 0$ (test $-0.5$: positive). On $[0,1]$: $x^3 - x \leq 0$ (test $0.5$: negative), so flip. 3 $= \left[\dfrac{x^4}{4} - \dfrac{x^2}{2}\right]_{-1}^{0} + \left[\dfrac{x^2}{2} - \dfrac{x^4}{4}\right]_{0}^{1} = \dfrac{1}{4} + \dfrac{1}{4} = \dfrac{1}{2}$ Each piece evaluates to $\frac{1}{4}$. Total area $= \frac{1}{2}$ square units. 1 of 3 Reveal next step →

Exact extracted-text SHA256: `8fc30df4b3ebb11a278064046806abedfcde78e621b78d509629b18b8fe8db86`.

Only the examples and parts selected by the stop boundary belong to this proposed video. Deferred context is labelled below. Site numbers above are unchanged; new teaching activities and question cards are explicitly original.

## 3. Recalculation, domain and units

IC02 we-2 keeps y=x²−4, [0,3]. Roots ±2, with only x=2 inside this interval. F=x³/3−4x. ∫₀²f=8/3−8=−16/3; ∫₂³f=(9−12)−(8/3−8)=7/3. Signed whole=−3. Total geometric area=|−16/3|+|7/3|=23/3. Taking |∫₀³f| would give 3 and lose the second lobe. A curve meeting the axis without changing sign need not force a magnitude change, though splitting there is harmless.

IC09 we-2 keeps f=x³−x on [−1,1]. Roots −1,0,1. F=x⁴/4−x²/2; ∫₋₁⁰f=1/4 and ∫₀¹f=−1/4. Signed integral=0, but total area=1/2. This is not an area-between-two-nonzero-curves example; the other boundary is the x-axis. The area-between x and x² example on IC02/IC09 is deferred to its later home.

For continuous f≥0 on [a,b], A=∫ₐᵇf. For f≤0, A=−∫ₐᵇf=|∫ₐᵇf|. If sign changes, identify every interior root and determine sign on each interval, then add magnitudes: A=Σ|∫piece f|=∫ₐᵇ|f|. Bounds ordered a≤b. Do not apply the single absolute-value shortcut across sign changes.

IC09 we-3 is excluded as a main teaching example: its R(x)=100x revenue and C(x)=x²+20x+400 cost are total-money functions, so ∫(R−C)dx does not itself have money units for total profit when x is quantity. Its roots are exactly 40±20√3≈5.358983849,74.64101615; rounded 5.4/74.6 should not replace exact limits mid-calculation. The purely geometric integral is 32000√3≈55425.62584 money×quantity units. A corrected context would have to say marginal rates explicitly and be attributed as a correction, not silently change the given quantities.

Every result was independently recalculated in `work/brief151/integral-a-sympy.py`; evidence in `work/brief151/integral-a-numeric.json` passes 55 symbolic/reference checks. Keep exact values until the stated final decimal.

## 4. Misconceptions and HSC-style traps

Area cannot be negative, but a definite integral can be. |∫f| and ∫|f| agree for constant sign, not generally. Find all interior axis crossings before choosing limits. Symmetry can make net integral zero while area is nonzero. Label subinterval signs and magnitudes separately; use exact roots until the final approximation. The units of an integral are integrand units times horizontal-axis units.

These follow from the stated functions and syllabus content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Signed versus magnitude area mode with labelled sign intervals, root ticks, split integrals and a paired net/total ledger. Retain axes, bounds, function and strip orientation during the i10→i11 handoff. Reuse FunctionGraph, ExpressionSlot and AlignedAlgebra; patterned fills supplement colour.

All graphs, algebra and diagrams must be coded in the shared paper style, calibrated to actual coordinates. Keep labels attached to the relevant feature, preserve all givens during response holds, and separate question and feedback states. No painted mathematics, people or hands. This pack requests research inputs only; kit implementation is a later task.

## 6. Two original candidate practice questions

### Question 1

For $y=x^2-1$ on [−2,2], find $\int_{-2}^{2}(x^2-1)\,dx$ and the total area between the graph and the x-axis.

**Worked answer:** Roots −1,1. With F=x³/3−x, the signed pieces on [−2,−1],[−1,1],[1,2] are 4/3,−4/3,4/3. Signed whole=4/3; total area=4. No unit is specified, so report area in square coordinate units.

### Question 2

For $y=\sin x$ on [0,2π], find $\int_0^{2\pi}\sin x\,dx$ and the total area between the graph and the x-axis.

**Worked answer:** Radian interval, root π inside. $\int_0^\pi\sin x\,dx=2$ and $\int_\pi^{2\pi}\sin x\,dx=-2$. Signed whole=0, total area=4 square coordinate units. Both tasks share the same graph; no answer sign or filled lobe magnitudes appear on the question card.

Only the question and supplied givens belong on the card. Hide the answer, its sign, solved roots, subtotal labels and classifications until feedback. A ten-second hold invites pausing; domain, graph coordinates, bounds and units remain available.

## 7. Site corrections and decisions for Claude

The core signed-versus-total area source examples are sufficient after recalculation. Defer areas between two curves and all economic interpretation of the flawed total-profit example.

Confirmed findings are recorded in the route fragment’s `siteFindings` for the parent to deduplicate into `site-corrections-maths-a12.md`. The site stays read only. Stale module/year titles are navigation metadata, not evidence of the 2024 action mapping. Claude chooses final length and any further split; no existing design has been edited. Human listening and exact playback remain later gates.
