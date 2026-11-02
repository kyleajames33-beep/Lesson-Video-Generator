# math-a12-i13: How do units and a physical boundary determine the integral in a practical problem?

Brief 151 research pack, 2 November 2026. Preparation for Claude, not design, narration, build or approval. Practice questions are original HSCScience questions, not official examination items.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci930354fd`: Model and solve practical problems involving integrals and areas of regions bounded by a curve and the x -axis, or by a curve and the y -axis, involving functions within the scope of the Mathematics Advanced course [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact official HTML and MathML are retained in the route fragment; read formula layout there rather than reconstructing it from flattened text.

Year 11 entry:
- `ci1d192d62` (Introduction to differentiation): Use the formula d dx ( x n ) = n x n - 1 for all real values of n [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- `cif6a6cb7d` (Introduction to differentiation): Apply the fact that the derivative of a sum is the sum of the derivatives: d dx f x + g x = f ' x + g ' ( x ) , and the derivative of a multiple of a function is the multiple of its derivative: d dx ( k ⋅ f x ) = k ⋅ f ' ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- `ci05229304` (Introduction to differentiation): Define and distinguish between displacement and distance and between velocity and speed [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).

Stage 5 entry: labelled Cartesian coordinates, substitution, simple rearrangement and area units. These are prerequisite assumptions, not newly quoted Year 11 points.
Prior videos: math-a12-i10, math-a12-i11, math-a12-i12.

Start: Carry the geometric width and variable from i11 into a physical cross-section; contrast square-metre area with rate-times-time units.

Stop: Model and interpret practical x-axis and y-axis areas. Use velocity area as a transfer example, leaving recovery from acceleration and initial conditions to i14.

Next: math-a12-i14: retain v(t)=12−2t and ask how a rate function itself could be recovered from its rate of change and an initial value.

## 2. Site order, sections and worked examples

Read-only source: `C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson07.sa.html` ([site](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson07.sa.html)), SHA256 `b41c698b744a5ebc753ba24dac3a212c0c0e94dd795d24305072a9c40736d944`.

Actual `data-step-id` values: `orient-to-definite-integrals`, `build-definite-integral-language`, `evaluate-definite-integrals`, `interpret-signed-area`, `avoid-definite-integral-traps`, `practise-and-reflect`, `complete-short-answer-practice`, `review-and-complete`.

### integral-calculus/lesson07.sa.html, `we-1`
PROBLEM 1 · POLYNOMIAL DEFINITE INTEGRAL Evaluate $\displaystyle\int_0^2 (3x^2 + 4x - 1)\,dx$. 1 $F(x) = x^3 + 2x^2 - x$ Find the antiderivative using the power rule. No $+C$ needed for definite integrals. 2 $[x^3 + 2x^2 - x]_0^2$ Write in bracket notation with limits 0 and 2. 3 $= (8 + 8 - 2) - (0 + 0 - 0) = 14$ Substitute $x=2$ then subtract $x=0$. Answer: $\mathbf{14}$. 1 of 3 Reveal next step →

### integral-calculus/lesson07.sa.html, `we-2`
PROBLEM 2 · EXPONENTIAL + LOG Evaluate $\displaystyle\int_0^2 (e^x + x)\,dx$. 1 $F(x) = e^x + \dfrac{x^2}{2}$ Antiderivative: $\int e^x = e^x$; $\int x = \frac{x^2}{2}$. 2 $\left[e^x + \dfrac{x^2}{2}\right]_0^2 = \left(e^2 + 2\right) - \left(e^0 + 0\right)$ Substitute limits: upper limit minus lower limit. $e^0 = 1$. 3 $= e^2 + 2 - 1 = e^2 + 1 \approx 8.39$ Exact answer: $e^2 + 1$. Always give exact form unless asked for a decimal. 1 of 3 Reveal next step →

### integral-calculus/lesson07.sa.html, `we-3`
PROBLEM 3 · VELOCITY AND DISPLACEMENT VS DISTANCE A car's velocity is $v(t) = 12 - 2t$ m/s for $0 \le t \le 8$. Find the displacement and the total distance travelled. 1 $v(t) = 0 \Rightarrow 12 - 2t = 0 \Rightarrow t = 6$ Find where velocity changes sign: car moves forward for $0 \le t \le 6$, backward for $6 \le t \le 8$. 2 $\text{Displacement} = \int_0^8(12-2t)\,dt = [12t - t^2]_0^8 = (96-64) - 0 = 32$ m Displacement = net change in position. The backward motion subtracts from the forward motion. 3 $\text{Distance} = \int_0^6(12-2t)\,dt + \left|\int_6^8(12-2t)\,dt\right| = 36 + |-4| = 40$ m Split at $t=6$: $[12t-t^2]_0^6 = 36$; $[12t-t^2]_6^8 = 32-36 = -4$. Total distance = 36 + 4 = 40 m . 1 of 3 Reveal next step →

Read-only source: `C:\Users\kygs\hscscience\subjects\maths-advanced\year12\applications-of-calculus\lesson03.sa.html` ([site](https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson03.sa.html)), SHA256 `7808d84c67aadc6f33fbe7844f4cf12a47f1ed63a2574d6a3d35c2901e02f40c`.

Actual `data-step-id` values: `orient-motion-applications`, `relate-position-velocity-acceleration`, `work-motion-examples`, `avoid-motion-traps`, `drill-motion-problems`, `consolidate-motion-applications`, `practise-motion-applications`, `finish-motion-applications`.

### applications-of-calculus/lesson03.sa.html, `we-1`
PROBLEM 1 · FIND POSITION FROM ACCELERATION A particle has $a(t) = 6t - 4$ m/s². Initially at rest at the origin. Find its position at $t = 2$. 1 $v(t) = \int (6t-4)\,dt = 3t^2 - 4t + C_1$. $v(0)=0 \implies C_1 = 0$ Integrate $a$ to get $v$; use $v(0) = 0$ (at rest). 2 $x(t) = \int (3t^2-4t)\,dt = t^3 - 2t^2 + C_2$. $x(0)=0 \implies C_2=0$ Integrate $v$ to get $x$; use $x(0) = 0$ (at origin). 3 $x(2) = 8 - 8 = 0$ metres Substitute $t = 2$. The particle returned to its starting point! 1 of 3 Reveal next step →

### applications-of-calculus/lesson03.sa.html, `we-2`
PROBLEM 2 · TOTAL DISTANCE TRAVELLED A particle has velocity $v(t) = t^2 - 4t + 3$ m/s. Find the total distance from $t = 0$ to $t = 3$. 1 $v(t) = (t-1)(t-3)$. Zeroes at $t = 1$ and $t = 3$ Factor to find when particle reverses. On $[0,1]$: $v \geq 0$. On $[1,3]$: $v \leq 0$. 2 Distance $= \int_0^1 v\,dt + \int_1^3 (-v)\,dt$ Use $|v|$: positive on first interval, negate on second. 3 $= \left[\tfrac{t^3}{3}-2t^2+3t\right]_0^1 + \left[-\tfrac{t^3}{3}+2t^2-3t\right]_1^3 = \tfrac{4}{3} + \tfrac{4}{3} = \dfrac{8}{3}$ metres Evaluate each piece. Total distance $= \frac{8}{3}$ m, even though displacement $= x(3) - x(0) = 0$. 1 of 3 Reveal next step →

### applications-of-calculus/lesson03.sa.html, `we-3`
PROBLEM 3 · WITH INITIAL CONDITIONS A particle has $a(t) = 2$ m/s². At $t = 0$: $v = 5$ m/s, $x = 10$ m. Find $x(t)$. 1 $v(t) = \int 2\,dt = 2t + C_1$. $v(0) = 5 \implies C_1 = 5$ Integrate $a = 2$; apply $v(0) = 5$. 2 $x(t) = \int (2t+5)\,dt = t^2 + 5t + C_2$. $x(0) = 10 \implies C_2 = 10$ Integrate $v$; apply $x(0) = 10$. 3 $x(t) = t^2 + 5t + 10$ metres This is the complete position function, both constants determined by initial conditions. 1 of 3 Reveal next step →

The full source examples above retain the exact site numbers. Tasks beyond the start and stop remain source context; Claude should choose a readable sequence rather than fit every task into the video.

## 3. Recalculation, units and domain check

IC07 we-1: ∫₀²(3x²+4x−1)dx=14. The integrand changes sign at (−2+√7)/3, so 14 is a signed integral, not its whole geometric area. IC07 we-2: ∫₀²(e^x+x)dx=e²+1≈8.389056. These unchanged site numbers are recall context; do not invent physical meanings for them. IC07 we-3: v(t)=12−2t m/s on [0,8] has zero at t=6 s. Signed displacement is 32 m; distance is 36+4=40 m. Rates multiplied by seconds produce metres, not square metres.

AC03 we-2 supplies another exact motion transfer: v=t²−4t+3, 0≤t≤3, roots 1 and 3; displacement 0 and distance 8/3, with two areas of 4/3. Its full reconstruction and motion-chain work belongs to i14.

Original missing y-axis practical preparation: a channel cross-section has wall x=0 and bank x=6−y² for 0≤y≤2, with coordinates in metres. Horizontal width is 6−y² metres, giving ∫₀²(6−y²)dy=28/3 m². The equivalent positive branch y=√(6−x) applies to this bank. A diagram must show the floor, water level and wall before the limits are chosen. Models and candidate questions here are original HSCScience preparation, not site worked examples.

All numerical results were independently recalculated in `work/brief151/integral-b-check.py`; `integral-b-calculations.json` records 65 passing checks. Keep exact values until the final decimal.

## 4. Misconceptions and HSC-style traps

A rate integral measures change, so an initial amount is needed to find an absolute final amount. A geometric area uses nonnegative strip widths and square units. Velocity may change sign, so displacement and distance differ. Revenue at one output minus cost at that output is profit; integrating that difference over output changes its units.

These are mathematical consequences of the functions and conditions above, not claims about examination marking frequency.

## 5. Visual needs against programme decision 4

Existing FunctionGraph, IntegralNotation, AlignedAlgebra and ReadoutPanel. Reuse i10 signed-area fills and i11 horizontal-strip extension. A clean cross-section outline should carry metre axes and the active width; no decorative apparatus or painted mathematics. Show the one current physical quantity and its units.

Use the existing mathematical visual language and shared kit. No implementation is authorised by this research pack.

## 6. Two original candidate question cards and worked answers

### Candidate 1: card
A stream cross-section has water surface y=3 and bed y=x², with coordinates measured in metres. Find the cross-sectional area of water.

### Candidate 1: worked answer
Intersections satisfy x²=3, so x=±√3. Area=∫₋√₃^√₃(3−x²)dx=4√3 m².

### Candidate 2: card
A channel cross-section has a straight wall x=0, a floor y=0 and a curved bank x=4−y². Coordinates are in metres. The water reaches the point where the curved bank joins the wall. Find the cross-sectional area of water.

### Candidate 2: worked answer
The upper boundary is y=2. Area=∫₀²(4−y²)dy=16/3 m². Width and dy both have metre units.

Keep the worked answer and all solved roots, signs, shaded results and evaluated limits out of the question card. Retain the question conditions during the thinking opportunity.

## 7. Site corrections and preparation decisions

Neither site lesson provides the required practical y-axis area example; the channel preparation fills this gap. Do not use IC09 economic area as total profit. AC03 Module 6 metadata is historical and does not determine the 2024 route.
