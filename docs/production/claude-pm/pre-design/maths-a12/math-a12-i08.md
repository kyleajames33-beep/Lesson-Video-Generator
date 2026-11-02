# math-a12-i08: Why does differentiating accumulation recover the rate?

Brief 151 research pack, 2 November 2026. Preparation for Claude, not a design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci9652c528`: Consider the function defined by A x = ∫ a x f t d t and use a graphing application to recognise that A ( x ) is a primitive of f ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cid76b6b1d`: Recognise the Fundamental Theorem of Calculus as ∫ a b f x dx = F ( x ) b a = F b - F a for a continuous function f on the interval a ≤ x ≤ b where F ( x ) is any primitive of f x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in the route fragment. Flattened text can lose fractions, absolute-value bars and bounds; typeset from source HTML. The fresh 2024 official actions were checked in `work/brief151/math-official-validation.json`.

**Stage 5 and Year 11 entry:** Read coordinates, slopes and intervals; signed number arithmetic. Year 11 power and sum/multiple differentiation, plus chain-rule knowledge recalled through d06. i01–i05 supply primitives; i07 supplies the signed-integral meaning.

- Year 11 `ci1d192d62`: Use the formula d dx ( x n ) = n x n - 1 for all real values of n [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- Year 11 `cif6a6cb7d`: Apply the fact that the derivative of a sum is the sum of the derivatives: d dx f x + g x = f ' x + g ' ( x ) , and the derivative of a multiple of a function is the multiple of its derivative: d dx ( k ⋅ f x ) = k ⋅ f ' ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- Year 11 `ci00fa8fac`: Apply the chain rule : if y is a differentiable function of u , and u is a differentiable function of x , then dy dx = dy du × du dx or if h x = f g x for differentiable functions f ( x ) and g ( x ) then h ' x = f ' g x g ' x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).

**Prior videos:** math-a12-i07, math-a12-i01, math-a12-i02, math-a12-i03, math-a12-i04, math-a12-i05, math-a12-d06.

**Start:** Keep i07’s signed accumulation picture. Fix lower bound a and move the upper boundary x so A(x)=∫ₐˣ f(t)dt becomes the quantity whose change can be traced.

**Stop:** Use a graphing application to compare A and f, recognise A′=f for continuous f, and connect this to ∫ₐᵇf=F(b)−F(a). Include the chain factor for a variable upper bound. Leave broad definite-integral evaluation practice to i09.

**Next:** math-a12-i09 retains the FTC statement and asks how to evaluate without losing signs or bounds.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson08.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson08.sa.html), SHA256 `2aea0b928a296fdd3b3a13be1a650300df800b8a626c8ca861976bb5bf2dcdb8`.
Actual page title: Fundamental Theorem of Calculus | HSC Maths Advanced Year 12 Module 6 | HSCScience.

Data-step IDs: `orient-to-the-ftc`, `build-ftc-language`, `connect-both-ftc-parts`, `apply-the-ftc`, `avoid-ftc-traps`, `practise-and-reflect`, `complete-short-answer-practice`, `review-and-complete`.

### Source lesson08, `we-1`

PROBLEM 1 · FTC PART 2 Evaluate $\displaystyle\int_0^2 (x^3 + 3x^2 - 2x + 1)\,dx$ using FTC Part 2. 1 $F(x) = \dfrac{x^4}{4} + x^3 - x^2 + x$ Find the antiderivative term by term. The constant $C$ is not needed, it cancels on subtraction. 2 $[F(x)]_0^2 = F(2) - F(0) = \left(\dfrac{16}{4} + 8 - 4 + 2\right) - 0 = 4 + 8 - 4 + 2 = 10$ Evaluate $F$ at both limits and subtract. Check: all terms are correct. 1 of 2 Reveal next step →

Exact extracted-text SHA256: `151fa5063cf35022d2d52b53aff1dd28338529e9f8585ae8946d82fd5ec3ee3a`.

### Source lesson08, `we-2`

PROBLEM 2 · FTC PART 1 WITH CHAIN RULE Find $\dfrac{d}{dx}\!\left(\displaystyle\int_1^{x^2} \ln t\,dt\right)$. 1 $u(x) = x^2, \quad u'(x) = 2x$ Identify the composite upper limit and its derivative. 2 $= \ln(x^2) \cdot 2x = 2\ln(x) \cdot 2x = 4x\ln x$ Apply FTC Part 1 with chain rule: $f(u(x)) \cdot u'(x) = \ln(x^2) \cdot 2x$. Simplify using $\ln(x^2) = 2\ln x$ (for $x > 0$). 1 of 2 Reveal next step →

Exact extracted-text SHA256: `004596432a1ac58ad057afade774656e592634319e6892b3c2419b59ef6b0142`.

### Source lesson08, `we-3`

PROBLEM 3 · CAPITAL ACCUMULATION If $K(t) = \displaystyle\int_0^t (3s + 2)\,ds$ represents capital accumulation, find $\dfrac{dK}{dt}$ and interpret it. 1 By FTC Part 1: $\dfrac{dK}{dt} = 3t + 2$ The upper limit is $t$ (not a composite), so differentiation simply returns the integrand with $s$ replaced by $t$. 2 At time $t$, the investment rate is $I(t) = 3t + 2$ units per period. Interpretation: $\frac{dK}{dt}$ is the instantaneous rate of capital accumulation, i.e., the investment rate at time $t$. The FTC guarantees this connection between the cumulative stock and the flow rate. 1 of 2 Reveal next step →

Exact extracted-text SHA256: `f25caaf32f7b3dde31b94c6598a4204b5db0e5d510a5de5d6dc282bc0fa448eb`.

Only the examples and parts selected by the stop boundary belong to this proposed video. Deferred context is labelled below. Site numbers above are unchanged; new teaching activities and question cards are explicitly original.

## 3. Recalculation, domain and units

IC08 we-3 is the causal lead: K(t)=∫₀ᵗ(3s+2)ds. By FTC K′(t)=3t+2 and K(t)=3t²/2+2t, with K(0)=0. In its rate context use t≥0. The accumulation graph starts at zero, and its instantaneous slope equals the height of the rate graph. Signed accumulation need not always increase: a negative f makes A decrease.

IC08 we-1 keeps ∫₀²(x³+3x²−2x+1)dx. F=x⁴/4+x³−x²+x, F(2)=4+8−4+2=10 and F(0)=0, giving 10. Differentiating F returns the integrand. This is a compact bridge from A′=f to endpoint subtraction, not a broad evaluation drill.

IC08 we-2 keeps d/dx[∫₁^(x²) ln t dt]. Since ln t requires t>0, the ordinary proper-integral domain is x≠0; for every such x the interval between 1 and x² remains positive. FTC and chain rule give 2x ln(x²)=4x ln|x|. The site’s simplification 4x ln x is only valid for x>0 (which its explanation states, but the original question does not). Do not silently impose that restriction or lose the negative branch. At x=0 the displayed ordinary integral is not defined; an improper extension is outside this scope.

For the theorem use continuous f on [a,b] and any primitive F on that interval. A(x) and F(x) differ by the constant F(a); hence A(b)=F(b)−F(a). A nonzero integration constant cancels. In the linked graphing activity vary x and display A(x), a secant becoming a tangent, and f(x) at the same x. The activity is original preparation, not supplied by a site screenshot.

Every result was independently recalculated in `work/brief151/integral-a-sympy.py`; evidence in `work/brief151/integral-a-numeric.json` passes 55 symbolic/reference checks. Keep exact values until the stated final decimal.

## 4. Misconceptions and HSC-style traps

The integration variable t is not the upper limit x. Differentiating accumulation does not mean evaluating f at the fixed lower bound. A(x) is a function, whereas ∫ₐᵇf is a number. Include g′(x) when the upper limit is g(x). Keep log-domain restrictions; ln(x²)=2ln|x| for x≠0. A primitive plus C gives the same endpoint difference.

These follow from the stated functions and syllabus content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Accumulation tracer with fixed lower and moving upper bound, synchronised A/f graphs, tangent slope versus rate-height marker and explicit dummy variable. Need graphing-application activity, not passive demonstration alone. Reuse FunctionGraph and AlignedAlgebra for the bridge.

All graphs, algebra and diagrams must be coded in the shared paper style, calibrated to actual coordinates. Keep labels attached to the relevant feature, preserve all givens during response holds, and separate question and feedback states. No painted mathematics, people or hands. This pack requests research inputs only; kit implementation is a later task.

## 6. Two original candidate practice questions

### Question 1

Let $A(x)=\int_2^x(t^2-3t+2)\,dt$. Find $A\prime(x)$ and $A(2)$.

**Worked answer:** The polynomial is continuous on R. A′(x)=x²−3x+2. Equal bounds give A(2)=0.

### Question 2

Let $H(x)=\int_0^{2x+1}\cos t\,dt$. Find $H\prime(x)$.

**Worked answer:** FTC with upper limit g(x)=2x+1 gives H′(x)=cos(2x+1)×2=2cos(2x+1), all real x; radians.

Only the question and supplied givens belong on the card. Hide the answer, its sign, solved roots, subtotal labels and classifications until feedback. A ten-second hold invites pausing; domain, graph coordinates, bounds and units remain available.

## 7. Site corrections and decisions for Claude

The source supplies FTC examples but not the complete interactive A-versus-f graphing comparison. Its log example requires the domain correction documented below.

Confirmed findings are recorded in the route fragment’s `siteFindings` for the parent to deduplicate into `site-corrections-maths-a12.md`. The site stays read only. Stale module/year titles are navigation metadata, not evidence of the 2024 action mapping. Claude chooses final length and any further split; no existing design has been edited. Human listening and exact playback remain later gates.
