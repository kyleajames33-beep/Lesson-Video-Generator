# math-a12-i06: How do refining rectangles and trapezia estimate accumulated change?

Brief 151 research pack, 2 November 2026. Preparation for Claude, not a design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci7716ae08`: Examine for a function f ( x ) , which indicates the rate of change of a quantity, the meaning of ∑ a b f x Δ x , where the interval a ≤ x ≤ b is divided into subintervals of length Δ x , and describe ∑ a b f x Δ x as an estimate of the total change in that quantity over the interval a ≤ x ≤ b [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cid91e54c8`: Define informally that a function is continuous on the interval a ≤ x ≤ b if it can be drawn between the two endpoints of the interval without taking the pen off the paper [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cief49e59c`: Graph the region between the continuous function y = f x and the x -axis, where f x ≥ 0 on the interval a ≤ x ≤ b [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci9a3ea6c6`: Use a graphing application to compare different methods of approximating the area, A , of the region between the continuous function y = f ( x ) and the x -axis, where f x ≥ 0 on the interval a ≤ x ≤ b , by summing the areas of trapezia or rectangles each of width Δ x = b - a n and approximate height f x for any x lying in its base, and observe the effect on the precision of the approximation of A as the number n of subintervals of a ≤ x ≤ b increases, that is as Δ x → 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in the route fragment. Flattened text can lose fractions, absolute-value bars and bounds; typeset from source HTML. The fresh 2024 official actions were checked in `work/brief151/math-official-validation.json`.

**Stage 5 and Year 11 entry:** Coordinate plotting; triangle, rectangle and trapezium areas; equally spaced tables; fractions and interval endpoints. Year 11 derivative language supplies rate meaning; no prior integral evaluation is assumed.

- Year 11 `ci1d192d62`: Use the formula d dx ( x n ) = n x n - 1 for all real values of n [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- Year 11 `cif6a6cb7d`: Apply the fact that the derivative of a sum is the sum of the derivatives: d dx f x + g x = f ' x + g ' ( x ) , and the derivative of a multiple of a function is the multiple of its derivative: d dx ( k ⋅ f x ) = k ⋅ f ' ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).

**Prior videos:** math-a12-i05, math-a12-d15, math-a12-d16.

**Start:** Retain i05’s handoff frame: rectangles standing against cos x on [0, pi/2]. For left endpoint heights these lie above a decreasing cosine graph, so the estimate is an overestimate. Ask what improves as strip widths shrink.

**Stop:** Connect rate times width to total change, define continuity informally, graph a non-negative continuous region, and compare refining rectangles and trapezia using a graphing application. Stop before the formal signed limit definition and FTC.

**Next:** math-a12-i07 opens on the same refining partition and asks how a signed sum becomes a definite integral.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson03.sa.html), SHA256 `f07c49ba7ba3bd8a835e89022cb5fee7513a1ff3613ddb486d7d1838d2263a38`.
Actual page title: Trapezoidal Rule for Definite Integrals | HSCScience.

Data-step IDs: `orient-to-trapezoidal-rule`, `build-approximation-language`, `construct-the-rule`, `apply-the-rule`, `avoid-approximation-traps`, `practise-and-reflect`, `complete-mixed-practice`, `review-and-complete`.

### Source lesson03, `we-1`

PROBLEM 1 · BASIC APPLICATION Use the trapezoidal rule with 4 strips to approximate $\int_0^2 x^2 \, dx$. 1 $a = 0$, $b = 2$, $n = 4$, so $h = \dfrac{2-0}{4} = 0.5$ Calculate the width of each subinterval. 2 $x$: 0, 0.5, 1, 1.5, 2. Values of $y = x^2$: 0, 0.25, 1, 2.25, 4 Calculate all 5 function values (4 strips + 1) at equally spaced points. 3 $\approx \dfrac{0.5}{2}[0 + 2(0.25 + 1 + 2.25) + 4] = 0.25[0 + 2(3.5) + 4] = 0.25 \times 11 = 2.75$ Apply the trapezoidal rule formula with endpoint coefficients 1 and interior coefficients 2. 4 Exact value $= \dfrac{8}{3} \approx 2.667$. The approximation $2.75$ is an overestimate because $y = x^2$ is concave up. Compare with exact value and explain the error using concavity ($f''(x) = 2 > 0$). 1 of 4 Reveal next step →

Exact extracted-text SHA256: `9a15fc3230aebfdc5c123c437188a4ffaf01566ddf27fedd282d2faca0e1c779`.

### Source lesson03, `we-2`

PROBLEM 2 · GIVEN NUMBER OF VALUES Use the trapezoidal rule with 5 function values to approximate $\int_1^3 \frac{1}{x} \, dx$. 1 5 function values means 4 strips, so $n = 4$. $h = \dfrac{3-1}{4} = 0.5$ Number of strips = number of function values $- 1$. 2 $x$: 1, 1.5, 2, 2.5, 3. Values of $y = \frac{1}{x}$: 1, $\frac{2}{3}$, $\frac{1}{2}$, $\frac{2}{5}$, $\frac{1}{3}$ Calculate function values at each equally spaced point. 3 $\approx \dfrac{0.5}{2}\!\left[1 + 2\!\left(\tfrac{2}{3} + \tfrac{1}{2} + \tfrac{2}{5}\right) + \tfrac{1}{3}\right] = 0.25\!\left[1 + \tfrac{47}{15} + \tfrac{1}{3}\right] = \dfrac{67}{60} \approx 1.117$ Apply formula; interior three values have coefficient 2. 1 of 3 Reveal next step →

Exact extracted-text SHA256: `dbd64da3176221e892050d16cb05dc1b96a54658200016fe872d67521e4983c0`.

### Source lesson03, `we-3`

PROBLEM 3 · FROM A TABLE A curve has the following values. Approximate $\int_0^{1.2} y \, dx$ using the trapezoidal rule. $x$ 0 0.3 0.6 0.9 1.2 $y$ 1.00 1.09 1.36 1.81 2.44 1 $h = 0.3$, $n = 4$ strips (5 values) The subinterval width is constant at 0.3 from the table. 2 $\approx \dfrac{0.3}{2}[1.00 + 2(1.09 + 1.36 + 1.81) + 2.44]$ Set up the formula: endpoints with coefficient 1, interior points with coefficient 2. 3 $= 0.15[1.00 + 2(4.26) + 2.44] = 0.15 \times 11.96 = 1.794$ Evaluate: $1.00 + 8.52 + 2.44 = 11.96$, then multiply by $0.15$. 1 of 3 Reveal next step →

Exact extracted-text SHA256: `bf6cbd4cbbc809d79a4cb218500aae0f0a1ec3dbf9d5d9a9cce25b56daa073cf`.

Only the examples and parts selected by the stop boundary belong to this proposed video. Deferred context is labelled below. Site numbers above are unchanged; new teaching activities and question cards are explicitly original.

## 3. Recalculation, domain and units

IC03 we-1 retains f(x)=x² on [0,2], four strips. h=(2−0)/4=1/2; heights are 0,1/4,1,9/4,4. T₄=(1/4)[0+2(1/4+1+9/4)+4]=11/4=2.75. The exact integral is 8/3, so T₄ is 1/12 above it. x² is convex on this interval. Do not generalise this sign to every function.

IC03 we-2 retains 1/x on [1,3] and five ordinates, hence four strips. h=1/2; heights 1,2/3,1/2,2/5,1/3 give T₄=67/60=1.116666… (1.117 to three decimals), versus exact ln 3. x>0 throughout; no zero or singularity is crossed.

IC03 we-3 retains x=0,0.3,0.6,0.9,1.2 and y=1.00,1.09,1.36,1.81,2.44. h=0.3 and T=(0.3/2)[1+2(1.09+1.36+1.81)+2.44]=1.794. No function is specified, so this is a table estimate, not an asserted exact area.

Original comparison activity uses the unchanged site x²/[0,2] case. For n=1,2,4,8,16, left sums are 0,1,7/4,35/16,155/64; right sums are 8,5,15/4,51/16,187/64; trapezia are 4,3,11/4,43/16,171/64. Each tends to 8/3 as widths shrink. A working graphing application should let the learner vary n, retain the scale and compare rectangle and trapezium estimates. This activity is new preparation, not an existing source worked solution. The formal rate-sum link is also new preparation: a rate in units per x-unit times Δx gives quantity units; Σ f(xᵢ)Δx estimates accumulated change. For continuous f≥0 use a≤x≤b, Δx=(b−a)/n; the curve can be traced without lifting the pen. No discontinuity or pole may be hidden by the picture.

Every result was independently recalculated in `work/brief151/integral-a-sympy.py`; evidence in `work/brief151/integral-a-numeric.json` passes 55 symbolic/reference checks. Keep exact values until the stated final decimal.

## 4. Misconceptions and HSC-style traps

Five ordinates define four strips. Endpoints have weight one, interior ordinates weight two. Use one common strip width only for equally spaced data. A left sum for decreasing cos x overestimates; the opposite applies to an increasing function. Continuity is an informal graph condition here, not differentiability. State quantity units from rate × interval units. Refinement supports convergence for the chosen continuous case, not an automatic monotone-error claim for arbitrary graphs.

These follow from the stated functions and syllabus content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Refining rectangle/trapezium graph with explicit left/right sampling, interval endpoints and n/Δx controls; linked live estimate table; rate × width unit labels. Reuse FunctionGraph, ExpressionSlot and AlignedAlgebra. Need a genuine graphing-application interaction or companion activity, not a claim that passive playback alone meets “use a graphing application”.

All graphs, algebra and diagrams must be coded in the shared paper style, calibrated to actual coordinates. Keep labels attached to the relevant feature, preserve all givens during response holds, and separate question and feedback states. No painted mathematics, people or hands. This pack requests research inputs only; kit implementation is a later task.

## 6. Two original candidate practice questions

### Question 1

Use the trapezoidal rule with three equal strips to estimate $\int_0^3(x^2+2)\,dx$.

**Worked answer:** h=1; ordinates are 2,3,6,11. T=(1/2)[2+2(3+6)+11]=31/2=15.5. For author checking only, the exact integral is 15; do not expose that comparison on the question card.

### Question 2

A flow rate is measured at times 0,2,4,6 minutes as 3,5,4,6 litres per minute. Use trapezia to estimate the volume delivered.

**Worked answer:** h=2 minutes. V≈(2/2)[3+2(5+4)+6]=27 litres. All four time/rate pairs and units remain on the card.

Only the question and supplied givens belong on the card. Hide the answer, its sign, solved roots, subtotal labels and classifications until feedback. A ten-second hold invites pausing; domain, graph coordinates, bounds and units remain available.

## 7. Site corrections and decisions for Claude

The site teaches trapezia but does not itself supply the complete formal rate-sum link or rectangle-versus-trapezium graphing activity. Supply these explicitly, with the unchanged x² source case as comparison.

Confirmed findings are recorded in the route fragment’s `siteFindings` for the parent to deduplicate into `site-corrections-maths-a12.md`. The site stays read only. Stale module/year titles are navigation metadata, not evidence of the 2024 action mapping. Claude chooses final length and any further split; no existing design has been edited. Human listening and exact playback remain later gates.
