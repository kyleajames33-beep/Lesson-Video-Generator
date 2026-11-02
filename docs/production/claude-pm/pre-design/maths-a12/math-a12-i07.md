# math-a12-i07: How does a signed sum become a definite integral?

Brief 151 research pack, 2 November 2026. Preparation for Claude, not a design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci04161a44`: Consider the definite integral as ∫ a b f ( x ) d x = lim Δ x → 0 ⁡ ∑ a b f x Δ x , noting that this implies that the result of a definite integral will be negative when f x ≤ 0 throughout the interval a ≤ x ≤ b [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci723d0f0b`: Evaluate the definite integral ∫ a b f x dx by calculating areas using geometrical formulas, where the shape of f ( x ) allows such calculations, in cases where f x ≥ 0 throughout a ≤ x ≤ b , f x ≤ 0 throughout a ≤ x ≤ b or where f ( x ) changes sign in the interval a ≤ x ≤ b [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in the route fragment. Flattened text can lose fractions, absolute-value bars and bounds; typeset from source HTML. The fresh 2024 official actions were checked in `work/brief151/math-official-validation.json`.

**Stage 5 and Year 11 entry:** Triangle/trapezium areas, coordinate graphs, signed number addition, and interval notation; Year 11 rate and derivative language. i06 supplies continuity, rate sums and strip refinement.

- Year 11 `ci1d192d62`: Use the formula d dx ( x n ) = n x n - 1 for all real values of n [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- Year 11 `cif6a6cb7d`: Apply the fact that the derivative of a sum is the sum of the derivatives: d dx f x + g x = f ' x + g ' ( x ) , and the derivative of a multiple of a function is the multiple of its derivative: d dx ( k ⋅ f x ) = k ⋅ f ' ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).

**Prior videos:** math-a12-i06.

**Start:** Open on i06’s refining partition. Keep width Δx and the running sum visible, then extend the same signed height × width convention to graphs below the axis.

**Stop:** Define the definite integral as the limit of signed sums for a continuous function; evaluate suitable positive, negative and sign-changing cases by geometry alone. Do not introduce the F(b)−F(a) algorithm before i08.

**Next:** math-a12-i08 keeps the growing signed accumulation and asks why its slope recovers the rate.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson02.sa.html), SHA256 `f2ec0e82cfb5d3d50952cf1840954f843cfba325192e2d44576deda0cd9a9380`.
Actual page title: Areas | HSC Maths Advanced Year 11 Module 3 | HSCScience.

Data-step IDs: `orient-to-definite-area`, `build-area-language`, `connect-integrals-and-area`, `evaluate-area-examples`, `avoid-signed-area-traps`, `practise-and-reflect`, `complete-mixed-practice`, `review-and-complete`.

### Source lesson02, `we-1`

PROBLEM 1 · EVALUATE A DEFINITE INTEGRAL Evaluate $\displaystyle\int_1^3 (2x + 1)\,dx$. Apply Band 3 1 $\displaystyle\int (2x + 1)\,dx = x^2 + x$ Find the antiderivative. (No $+C$ needed for definite integrals.) 2 $\Big[x^2 + x\Big]_1^3 = (9 + 3) - (1 + 1) = 12 - 2 = 10$ Evaluate at the upper limit, then subtract the value at the lower limit. 3 The signed area is $10$ square units. Since $2x + 1 > 0$ throughout $[1, 3]$, the signed area equals the total area. 1 of 3 Reveal next step →

Exact extracted-text SHA256: `135c81c6de07c46d0b5561647ed992336e71ff81382b8b70e4dfbcd864e9012d`.

Only the examples and parts selected by the stop boundary belong to this proposed video. Deferred context is labelled below. Site numbers above are unchanged; new teaching activities and question cards are explicitly original.

## 3. Recalculation, domain and units

The IC02 we-1 numbers are unchanged: ∫₁³(2x+1) dx. Endpoint heights are 3 and 7, width is 2, so the trapezium has area (3+7)×2/2=10. The source uses F=x²+x and computes F(3)−F(1)=12−2=10; this pack proposes a new geometric reworking of the source question, not attribution of that geometry method to the site. The primitive calculation is verification only and is deferred on screen until FTC.

For the limit, keep a<b, Δx=(b−a)/n and sample points xᵢ in the strips. For continuous f on [a,b], ∫ₐᵇ f(x)dx=limₙ→∞ Σ f(xᵢ)Δx. Below-axis heights contribute negative signed rectangles. Use actual rectangles until the limit transition is understandable; do not erase the sign by calling each term a positive area. For a=b the integral is zero. For f≤0 the result is non-positive; it is strictly negative if f is negative somewhere on a nondegenerate interval and continuous. The official action text uses “negative when f≤0”; retain its exact quote but teach the zero edge case accurately.

The original questions supply the missing geometry-only negative/sign-changing examples. A wholly below-axis triangle, for example the segment y=−x on [0,2], gives −2 by geometry; this short original teaching bridge is not a third practice card. All piecewise-line graphs are continuous, so no singularity caveat is concealed.

Every result was independently recalculated in `work/brief151/integral-a-sympy.py`; evidence in `work/brief151/integral-a-numeric.json` passes 55 symbolic/reference checks. Keep exact values until the stated final decimal.

## 4. Misconceptions and HSC-style traps

Signed integral can be negative or zero. Total geometric area remains non-negative but is not the task in this video. A sign-changing graph requires separate signed geometric pieces; cancellation is meaningful. Do not claim f≤0 guarantees a strictly negative value when f≡0. Do not use FTC to answer an instruction to use geometry. Preserve the dummy variable and fixed bounds.

These follow from the stated functions and syllabus content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Signed region fills with explicit +/− labels and patterned distinction that does not rely on colour alone; refining signed rectangles; geometric piece labels and one running signed sum. Reuse calibrated FunctionGraph, ExpressionSlot and AlignedAlgebra.

All graphs, algebra and diagrams must be coded in the shared paper style, calibrated to actual coordinates. Keep labels attached to the relevant feature, preserve all givens during response holds, and separate question and feedback states. No painted mathematics, people or hands. This pack requests research inputs only; kit implementation is a later task.

## 6. Two original candidate practice questions

### Question 1

Use geometry to evaluate $\int_0^3(x-1)\,dx$.

**Worked answer:** The line crosses the axis at x=1. The signed pieces are −(1×1)/2=−1/2 and (2×2)/2=2. Their sum is 3/2.

### Question 2

A continuous graph consists of straight segments through (−2,0), (0,2), (2,0), (4,−2). Use geometry to evaluate $\int_{-2}^{4} f(x)\,dx$.

**Worked answer:** The triangle on [−2,2] contributes (4×2)/2=4. The triangle on [2,4] contributes −(2×2)/2=−2. Integral=2. Plot all supplied vertices on the card; do not print the piece areas or the result.

Only the question and supplied givens belong on the card. Hide the answer, its sign, solved roots, subtotal labels and classifications until feedback. A ten-second hold invites pausing; domain, graph coordinates, bounds and units remain available.

## 7. Site corrections and decisions for Claude

The source page mostly evaluates with primitives and later total-area examples. The formal limit and geometry-only negative/sign-changing teaching must be original preparation, labelled as such; preserve source question numbers when reworking its linear case.

Confirmed findings are recorded in the route fragment’s `siteFindings` for the parent to deduplicate into `site-corrections-maths-a12.md`. The site stays read only. Stale module/year titles are navigation metadata, not evidence of the 2024 action mapping. Claude chooses final length and any further split; no existing design has been edited. Human listening and exact playback remain later gates.
