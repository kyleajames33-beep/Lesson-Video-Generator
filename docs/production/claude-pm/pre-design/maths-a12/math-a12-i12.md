# math-a12-i12: How can symmetry, sampled values and an online application help us evaluate integrals?

Brief 151 research pack, 2 November 2026. Preparation for Claude, not design, narration, build or approval. Practice questions are original HSCScience questions, not official examination items.

## 1. Exact 2024 syllabus content and entry knowledge

- `cie17b0a6d`: Recognise and use symmetry, particularly odd and even functions , to simplify and solve integration problems [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cicd64da60`: Use the Trapezoidal rule to approximate integrals [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci90db469d`: Use an online computational application to evaluate definite and indefinite integrals involving functions within and beyond the scope of the Mathematics Advanced course [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact official HTML and MathML are retained in the route fragment; read formula layout there rather than reconstructing it from flattened text.

Year 11 entry:
- `cid79268a8` (Trigonometry and measure of angles): Graph y = s i n x , y = c o s x and y = t a n x over domains given in degrees or radians, showing intercepts with the x -axis and y -axis and any asymptotes , determine their domains and ranges , and period and amplitude where appropriate, and whether each is even or odd or neither [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5).
- `ci1d192d62` (Introduction to differentiation): Use the formula d dx ( x n ) = n x n - 1 for all real values of n [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- `cif6a6cb7d` (Introduction to differentiation): Apply the fact that the derivative of a sum is the sum of the derivatives: d dx f x + g x = f ' x + g ' ( x ) , and the derivative of a multiple of a function is the multiple of its derivative: d dx ( k ⋅ f x ) = k ⋅ f ' ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).

Stage 5 entry: labelled Cartesian coordinates, substitution, simple rearrangement and area units. These are prerequisite assumptions, not newly quoted Year 11 points.
Prior videos: math-a12-i06, math-a12-i07, math-a12-i11.

Start: Recall equal-area reflection from i11, then distinguish reflection in the y-axis from reflection in the origin before simplifying a symmetric integral.

Stop: Use odd/even symmetry on symmetric intervals, calculate composite trapezia from a graph or table, and specify online-application investigations within and beyond the course. Do not teach special-function integration methods.

Next: math-a12-i13: carry an integral and its units into a practical geometric or rate problem.

## 2. Site order, sections and worked examples

Read-only source: `C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson03.sa.html` ([site](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson03.sa.html)), SHA256 `f07c49ba7ba3bd8a835e89022cb5fee7513a1ff3613ddb486d7d1838d2263a38`.

Actual `data-step-id` values: `orient-to-trapezoidal-rule`, `build-approximation-language`, `construct-the-rule`, `apply-the-rule`, `avoid-approximation-traps`, `practise-and-reflect`, `complete-mixed-practice`, `review-and-complete`.

### integral-calculus/lesson03.sa.html, `we-1`
PROBLEM 1 · BASIC APPLICATION Use the trapezoidal rule with 4 strips to approximate $\int_0^2 x^2 \, dx$. 1 $a = 0$, $b = 2$, $n = 4$, so $h = \dfrac{2-0}{4} = 0.5$ Calculate the width of each subinterval. 2 $x$: 0, 0.5, 1, 1.5, 2. Values of $y = x^2$: 0, 0.25, 1, 2.25, 4 Calculate all 5 function values (4 strips + 1) at equally spaced points. 3 $\approx \dfrac{0.5}{2}[0 + 2(0.25 + 1 + 2.25) + 4] = 0.25[0 + 2(3.5) + 4] = 0.25 \times 11 = 2.75$ Apply the trapezoidal rule formula with endpoint coefficients 1 and interior coefficients 2. 4 Exact value $= \dfrac{8}{3} \approx 2.667$. The approximation $2.75$ is an overestimate because $y = x^2$ is concave up. Compare with exact value and explain the error using concavity ($f''(x) = 2 > 0$). 1 of 4 Reveal next step →

### integral-calculus/lesson03.sa.html, `we-2`
PROBLEM 2 · GIVEN NUMBER OF VALUES Use the trapezoidal rule with 5 function values to approximate $\int_1^3 \frac{1}{x} \, dx$. 1 5 function values means 4 strips, so $n = 4$. $h = \dfrac{3-1}{4} = 0.5$ Number of strips = number of function values $- 1$. 2 $x$: 1, 1.5, 2, 2.5, 3. Values of $y = \frac{1}{x}$: 1, $\frac{2}{3}$, $\frac{1}{2}$, $\frac{2}{5}$, $\frac{1}{3}$ Calculate function values at each equally spaced point. 3 $\approx \dfrac{0.5}{2}\!\left[1 + 2\!\left(\tfrac{2}{3} + \tfrac{1}{2} + \tfrac{2}{5}\right) + \tfrac{1}{3}\right] = 0.25\!\left[1 + \tfrac{47}{15} + \tfrac{1}{3}\right] = \dfrac{67}{60} \approx 1.117$ Apply formula; interior three values have coefficient 2. 1 of 3 Reveal next step →

### integral-calculus/lesson03.sa.html, `we-3`
PROBLEM 3 · FROM A TABLE A curve has the following values. Approximate $\int_0^{1.2} y \, dx$ using the trapezoidal rule. $x$ 0 0.3 0.6 0.9 1.2 $y$ 1.00 1.09 1.36 1.81 2.44 1 $h = 0.3$, $n = 4$ strips (5 values) The subinterval width is constant at 0.3 from the table. 2 $\approx \dfrac{0.3}{2}[1.00 + 2(1.09 + 1.36 + 1.81) + 2.44]$ Set up the formula: endpoints with coefficient 1, interior points with coefficient 2. 3 $= 0.15[1.00 + 2(4.26) + 2.44] = 0.15 \times 11.96 = 1.794$ Evaluate: $1.00 + 8.52 + 2.44 = 11.96$, then multiply by $0.15$. 1 of 3 Reveal next step →

The full source examples above retain the exact site numbers. Tasks beyond the start and stop remain source context; Claude should choose a readable sequence rather than fit every task into the video.

## 3. Recalculation, units and domain check

IC03 we-1: f=x², [0,2], four strips, h=0.5, values 0,0.25,1,2.25,4. T₄=11/4=2.75; exact 8/3, excess 1/12. Its concave-up graph explains this overestimate. IC03 we-2: f=1/x on [1,3], five values 1,2/3,1/2,2/5,1/3, h=0.5. T₄=67/60≈1.116667; exact ln3. All x-values are positive and away from the pole. IC03 we-3: x=0,0.3,0.6,0.9,1.2 and values 1,1.09,1.36,1.81,2.44 give T=897/500=1.794. They match 1+x², whose integral is 222/125=1.776, but a table alone does not prove that function.

Original symmetry preparation: ∫₋₂²(x³+x²)dx=16/3. The odd contribution cancels and the even contribution doubles. Require the function to be defined and integrable throughout the symmetric interval; symmetry does not cure a pole. Year 11 trig parity is entry experience, not a claim that general integral symmetry was taught then.

Original application activity: enter an indefinite integral of 3x²+4x−1, then a definite integral of x² from 0 to 2, compare graph, limits and output with x³+2x²−x+C and 8/3. Next enter exp(−x²), both indefinite and from 0 to 1. Expected output is √π erf(x)/2+C and approximately 0.746824132812. This is a beyond-course investigation: students interpret the application output without deriving erf. These expected results were independently checked with SymPy; no claim is made that a live application session was run. Official WolframAlpha instructions support these input types: https://www.wolframalpha.com/examples/mathematics/calculus-and-analysis/integrals . Retain a screenshot/output record when the designer executes the activity.

All numerical results were independently recalculated in `work/brief151/integral-b-check.py`; `integral-b-calculations.json` records 65 passing checks. Keep exact values until the final decimal.

## 4. Misconceptions and HSC-style traps

Four strips require five function values. Only interior values receive factor 2 in T=h[f₀+2(f₁+…+fₙ₋₁)+fₙ]/2. Odd cancellation requires symmetric limits and an integrable function. A calculator output needs correct function, bounds and units; an indefinite output still needs the family constant.

These are mathematical consequences of the functions and conditions above, not claims about examination marking frequency.

## 5. Visual needs against programme decision 4

Existing FunctionGraph, IntegralNotation, AlignedAlgebra, ReadoutPanel and DomainStrip. Extend shared area overlay with equal-width trapezia, endpoint/interior weight highlighting and an odd/even reflection comparison; reuse i06 refining strips. Online input/output panel needs a clear distinction between typed expression, bounds, exact result and numeric result. No new special-function graph engine is required.

Use the existing mathematical visual language and shared kit. No implementation is authorised by this research pack.

## 6. Two original candidate question cards and worked answers

### Candidate 1: card
Evaluate ∫ from −2 to 2 of (x⁵+2x²−3) dx.

### Candidate 1: worked answer
The x⁵ contribution is 0. The remaining even part gives 2∫₀²(2x²−3)dx=−4/3.

### Candidate 2: card
For f(x)=x²+1, use the values at x=0,0.5,1,1.5,2 (1,1.25,2,3.25,5) and four trapezia to approximate ∫₀²f(x)dx. Use an online application to check the exact value and compare the results.

### Candidate 2: worked answer
h=0.5; T=19/4=4.75. Exact integral=14/3. The approximation exceeds it by 1/12, consistent with concavity up.

Keep the worked answer and all solved roots, signs, shaded results and evaluated limits out of the question card. Retain the question conditions during the thinking opportunity.

## 7. Site corrections and preparation decisions

The site supports trapezia but lacks a general odd/even integral worked set and the required within/beyond-course online application activity. Original preparation above fills research inputs without claiming existing source coverage.
