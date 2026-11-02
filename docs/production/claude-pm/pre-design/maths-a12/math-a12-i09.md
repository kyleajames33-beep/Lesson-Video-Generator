# math-a12-i09: How do we evaluate definite integrals without losing signs?

Brief 151 research pack, 2 November 2026. Preparation for Claude, not a design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci6dc07a10`: Apply ∫ a b f x d x = F b - F a , where F ( x ) is a primitive of f ( x ) , to calculate definite integrals and solve related theoretical problems involving functions within the scope of the Mathematics Advanced course [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci1bdb853f`: Recognise and use the result, where f ( x ) is continuous on the interval a ≤ x ≤ c , ∫ a b f x dx + ∫ b c f x dx = ∫ a c f x dx for all c such that a ≤ b ≤ c [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci585dfd5a`: Define and use the result ∫ a b f x dx = - ∫ b a f x dx , where f ( x ) is continuous on the interval a ≤ x ≤ b [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in the route fragment. Flattened text can lose fractions, absolute-value bars and bounds; typeset from source HTML. The fresh 2024 official actions were checked in `work/brief151/math-official-validation.json`.

**Stage 5 and Year 11 entry:** Substitution into expressions, exact arithmetic, roots and interval direction. Year 11 differentiation verifies chosen primitives. i01–i05 supply Advanced-scope primitive families; i08 supplies FTC.

- Year 11 `ci1d192d62`: Use the formula d dx ( x n ) = n x n - 1 for all real values of n [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- Year 11 `cif6a6cb7d`: Apply the fact that the derivative of a sum is the sum of the derivatives: d dx f x + g x = f ' x + g ' ( x ) , and the derivative of a multiple of a function is the multiple of its derivative: d dx ( k ⋅ f x ) = k ⋅ f ' ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- Year 11 `ci00fa8fac`: Apply the chain rule : if y is a differentiable function of u , and u is a differentiable function of x , then dy dx = dy du × du dx or if h x = f g x for differentiable functions f ( x ) and g ( x ) then h ' x = f ' g x g ' x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).

**Prior videos:** math-a12-i08, math-a12-i01, math-a12-i02, math-a12-i03, math-a12-i04, math-a12-i05.

**Start:** Retain i08’s continuous-interval FTC statement and endpoint bracket. Ask which signs can change when substituting bounds or reversing the interval.

**Stop:** Evaluate Advanced-scope definite integrals, split intervals additively and reverse bounds accurately. Include a compact trig/reverse-chain transfer because the named source worked set is polynomial/exponential. Do not teach total distance or area-between-curves here.

**Next:** math-a12-i10 keeps the signed answer and asks why it can differ from total geometric area.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson07.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson07.sa.html), SHA256 `b41c698b744a5ebc753ba24dac3a212c0c0e94dd795d24305072a9c40736d944`.
Actual page title: The Definite Integral | HSC Maths Advanced Year 12 | HSCScience.

Data-step IDs: `orient-to-definite-integrals`, `build-definite-integral-language`, `evaluate-definite-integrals`, `interpret-signed-area`, `avoid-definite-integral-traps`, `practise-and-reflect`, `complete-short-answer-practice`, `review-and-complete`.

### Source lesson07, `we-1`

PROBLEM 1 · POLYNOMIAL DEFINITE INTEGRAL Evaluate $\displaystyle\int_0^2 (3x^2 + 4x - 1)\,dx$. 1 $F(x) = x^3 + 2x^2 - x$ Find the antiderivative using the power rule. No $+C$ needed for definite integrals. 2 $[x^3 + 2x^2 - x]_0^2$ Write in bracket notation with limits 0 and 2. 3 $= (8 + 8 - 2) - (0 + 0 - 0) = 14$ Substitute $x=2$ then subtract $x=0$. Answer: $\mathbf{14}$. 1 of 3 Reveal next step →

Exact extracted-text SHA256: `ef8a32a81590eac997bccf44f14bbdd8179c7c4df2b4c72d8858a00e9a6abd6f`.

### Source lesson07, `we-2`

PROBLEM 2 · EXPONENTIAL + LOG Evaluate $\displaystyle\int_0^2 (e^x + x)\,dx$. 1 $F(x) = e^x + \dfrac{x^2}{2}$ Antiderivative: $\int e^x = e^x$; $\int x = \frac{x^2}{2}$. 2 $\left[e^x + \dfrac{x^2}{2}\right]_0^2 = \left(e^2 + 2\right) - \left(e^0 + 0\right)$ Substitute limits: upper limit minus lower limit. $e^0 = 1$. 3 $= e^2 + 2 - 1 = e^2 + 1 \approx 8.39$ Exact answer: $e^2 + 1$. Always give exact form unless asked for a decimal. 1 of 3 Reveal next step →

Exact extracted-text SHA256: `50f954613f3ddcbeec46a51b3b9a27be8d8936b13aed3006dff44465f312f4a6`.

### Source lesson07, `we-3`

PROBLEM 3 · VELOCITY AND DISPLACEMENT VS DISTANCE A car's velocity is $v(t) = 12 - 2t$ m/s for $0 \le t \le 8$. Find the displacement and the total distance travelled. 1 $v(t) = 0 \Rightarrow 12 - 2t = 0 \Rightarrow t = 6$ Find where velocity changes sign: car moves forward for $0 \le t \le 6$, backward for $6 \le t \le 8$. 2 $\text{Displacement} = \int_0^8(12-2t)\,dt = [12t - t^2]_0^8 = (96-64) - 0 = 32$ m Displacement = net change in position. The backward motion subtracts from the forward motion. 3 $\text{Distance} = \int_0^6(12-2t)\,dt + \left|\int_6^8(12-2t)\,dt\right| = 36 + |-4| = 40$ m Split at $t=6$: $[12t-t^2]_0^6 = 36$; $[12t-t^2]_6^8 = 32-36 = -4$. Total distance = 36 + 4 = 40 m . 1 of 3 Reveal next step →

Exact extracted-text SHA256: `adaa10347b1cafdc919ecbf5f67f035cda71d5312d903f103e451f2e86772d09`.

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson08.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson08.sa.html), SHA256 `2aea0b928a296fdd3b3a13be1a650300df800b8a626c8ca861976bb5bf2dcdb8`.
Actual page title: Fundamental Theorem of Calculus | HSC Maths Advanced Year 12 Module 6 | HSCScience.

Data-step IDs: `orient-to-the-ftc`, `build-ftc-language`, `connect-both-ftc-parts`, `apply-the-ftc`, `avoid-ftc-traps`, `practise-and-reflect`, `complete-short-answer-practice`, `review-and-complete`.

### Source lesson08, `we-1`

PROBLEM 1 · FTC PART 2 Evaluate $\displaystyle\int_0^2 (x^3 + 3x^2 - 2x + 1)\,dx$ using FTC Part 2. 1 $F(x) = \dfrac{x^4}{4} + x^3 - x^2 + x$ Find the antiderivative term by term. The constant $C$ is not needed, it cancels on subtraction. 2 $[F(x)]_0^2 = F(2) - F(0) = \left(\dfrac{16}{4} + 8 - 4 + 2\right) - 0 = 4 + 8 - 4 + 2 = 10$ Evaluate $F$ at both limits and subtract. Check: all terms are correct. 1 of 2 Reveal next step →

Exact extracted-text SHA256: `151fa5063cf35022d2d52b53aff1dd28338529e9f8585ae8946d82fd5ec3ee3a`.

Only the examples and parts selected by the stop boundary belong to this proposed video. Deferred context is labelled below. Site numbers above are unchanged; new teaching activities and question cards are explicitly original.

## 3. Recalculation, domain and units

IC07 we-1: ∫₀²(3x²+4x−1)dx=[x³+2x²−x]₀²=8+8−2=14. IC07 we-2: ∫₀²(eˣ+x)dx=[eˣ+x²/2]₀²=(e²+2)−1=e²+1≈8.389, not e²+2. Its worked heading says “EXPONENTIAL + LOG”, but the actual question has x, not 1/x or ln x. Keep the exact source integrand unchanged.

IC08 we-1 provides the additional unchanged polynomial ∫₀²(x³+3x²−2x+1)dx=10, checked in i08. Do not use it to imply the full family of Advanced definite-integral functions has appeared onsite. New transfer using already taught primitives: ∫₀^(π/3)3cos(3x)dx=[sin(3x)]₀^(π/3)=0; and ∫₁ᵉ(1/x)dx=[ln x]₁ᵉ=1 on x>0. The first is the candidate card below; the second is a brief author bridge, not another question card.

For continuous f on a≤b≤c, ∫ₐᶜf=∫ₐᵇf+∫ᵇᶜf. Reversed bounds give ∫ᵇₐf=−∫ₐᵇf. Same endpoints give zero. Use linearity of the integral when a task includes a constant multiplier or additive constant. Bounds must remain in their supplied order until a declared reversal; no absolute value belongs around an arbitrary definite integral.

IC07 we-3 is retained as checked source context only: v(t)=12−2t, 0≤t≤8 gives signed displacement [12t−t²]₀⁸=32 m. v=0 at t=6; signed pieces are 36 m and −4 m, so distance is 40 m. Detailed distance teaching is deferred to i13. Polynomials/exponentials and cos are continuous on the shown intervals; log/reciprocal examples require a pole-free interval. Do not cross x=0 in 1/x without a separate improper-integral discussion.

Every result was independently recalculated in `work/brief151/integral-a-sympy.py`; evidence in `work/brief151/integral-a-numeric.json` passes 55 symbolic/reference checks. Keep exact values until the stated final decimal.

## 4. Misconceptions and HSC-style traps

Compute upper minus lower with full brackets, especially a nonzero exponential lower value. Reversing bounds changes the whole sign once. Splitting an interval does not replace signed pieces with magnitudes. Definite answers have no arbitrary +C. Validate the primitive by differentiation; do not apply a memorised power rule to 1/x. Keep radians in trig examples and use exact endpoints before decimal rounding.

These follow from the stated functions and syllabus content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Endpoint bracket with persistent bounds, interval split/reversal overlay and linked signed subtotal ledger. Reuse ExpressionSlot, AlignedAlgebra and FunctionGraph. Sign changes must be labelled algebraically, not encoded only by colour.

All graphs, algebra and diagrams must be coded in the shared paper style, calibrated to actual coordinates. Keep labels attached to the relevant feature, preserve all givens during response holds, and separate question and feedback states. No painted mathematics, people or hands. This pack requests research inputs only; kit implementation is a later task.

## 6. Two original candidate practice questions

### Question 1

Evaluate $\int_0^{\pi/3}3\cos(3x)\,dx$.

**Worked answer:** A primitive is sin(3x). Endpoint subtraction gives sin π−sin 0=0. The factor 3 cancels the reverse-chain divisor; radians.

### Question 2

A continuous function on [−1,4] satisfies $\int_{-1}^{2}f(x)\,dx=5$ and $\int_2^4f(x)\,dx=-3$. Find $\int_4^{-1}(2f(x)+1)\,dx$.

**Worked answer:** ∫₋₁⁴f=5−3=2. Hence ∫₋₁⁴(2f+1)=2×2+(4−(−1))=9. Reverse bounds to obtain −9. The supplied −3 is a given, not a leaked answer sign.

Only the question and supplied givens belong on the card. Hide the answer, its sign, solved roots, subtotal labels and classifications until feedback. A ten-second hold invites pausing; domain, graph coordinates, bounds and units remain available.

## 7. Site corrections and decisions for Claude

The source has no complete course-scope trig/general reverse-chain definite worked set. Transfer already taught i01–i05 primitives into definite evaluation using original preparation; do not invent source provenance.

Confirmed findings are recorded in the route fragment’s `siteFindings` for the parent to deduplicate into `site-corrections-maths-a12.md`. The site stays read only. Stale module/year titles are navigation metadata, not evidence of the 2024 action mapping. Claude chooses final length and any further split; no existing design has been edited. Human listening and exact playback remain later gates.
