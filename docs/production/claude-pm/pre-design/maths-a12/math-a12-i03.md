# math-a12-i03: Why does an exponential primitive divide by the inner rate?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cibfca8e4a`: Establish and use the formula ∫ e x dx = e x + C [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci3e845e76`: Establish and use the formula ∫ e ax + b dx = 1 a e ax + b + C , where a and b are constants and a ≠ 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cic1fe679f`: Establish and use the formula ∫ a x dx = a x ln a + C , where a is a constant and a > 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci22db0117`: Establish and use ∫ e u du dx dx = e u + C , where u is a function of x , or ∫ f ' x e f x dx = e f x + C [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cic5393984`: Find primitives of functions involving exponential functions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci1d192d62`, `cif6a6cb7d`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-i02.

**Start:** Recall primitives and d01/d02 exponential derivatives.

**Stop:** Establish exponential primitives and matched f′exp(f);handle base1 separately. Log terms in source tasks finish in i04.

**Next:** math-a12-i04.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson06.sa.html), SHA256 `a649e47a640c4f6d67aa3395373d55685a45446f60ff04fb869b1e83d85f8d25`.

Data-step IDs: `orient-to-special-integrals`, `build-special-integral-language`, `integrate-exponentials`, `integrate-logs-and-general-bases`, `avoid-special-integral-traps`, `practise-and-reflect`, `complete-mixed-practice`, `review-and-complete`.

### Source integral-calculus/lesson06.sa.html, `we-1`

PROBLEM 1 · EXPONENTIAL INTEGRAL Find $\int \left(2e^{3x} + \dfrac{4}{x}\right)\,dx$. 1 $\int 2e^{3x}\,dx = 2 \cdot \dfrac{1}{3}e^{3x} = \dfrac{2}{3}e^{3x}$ Apply $\int e^{kx}\,dx = \frac{1}{k}e^{kx}$ with $k = 3$; scalar 2 carries through. 2 $\int \dfrac{4}{x}\,dx = 4\ln|x|$ Apply $\int \frac{1}{x}\,dx = \ln|x|$; scalar 4 carries through. 3 $\dfrac{2}{3}e^{3x} + 4\ln|x| + C$ Combine both results and add a single constant of integration. 1 of 3 Reveal next step →

### Source integral-calculus/lesson06.sa.html, `we-2`

PROBLEM 2 · MIXED INTEGRAL Find $\int \left(e^{-x} + \dfrac{3}{x} + x^2\right)\,dx$. 1 $\int e^{-x}\,dx = \dfrac{1}{-1}e^{-x} = -e^{-x}$ $k = -1$, so divide by $-1$. 2 $\int \dfrac{3}{x}\,dx = 3\ln|x|$; $\quad\int x^2\,dx = \dfrac{x^3}{3}$ Reciprocal rule and power rule ($n=2$). 3 $-e^{-x} + 3\ln|x| + \dfrac{x^3}{3} + C$ Combine. Only one $+C$ needed for the whole expression. 1 of 3 Reveal next step →

### Source integral-calculus/lesson06.sa.html, `we-3`

PROBLEM 3 · APPLIED PROBLEM A drug decays in the body at rate $\frac{dA}{dt} = -0.5e^{-0.5t}$ mg/h. Find $A(t)$ given $A(0) = 2$. 1 $A(t) = \int -0.5e^{-0.5t}\,dt = -0.5 \cdot \dfrac{1}{-0.5}e^{-0.5t} + C = e^{-0.5t} + C$ Integrate: the $-0.5$ scalars cancel leaving $e^{-0.5t} + C$. 2 $A(0) = 2$: $\quad e^{0} + C = 2 \Rightarrow 1 + C = 2 \Rightarrow C = 1$ Substitute the initial condition to find the constant $C$. 3 $A(t) = e^{-0.5t} + 1$ As $t \to \infty$, $e^{-0.5t} \to 0$, so $A(t) \to 1$ mg remaining in the body long-term. 1 of 3 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

we-1 exp term2exp3x→2exp3x/3;we-2 exp(-x)→-exp(-x). Full mixed answers awaiti04:2exp3x/3+4ln|x|+C and-exp(-x)+3ln|x|+x cubed/3+C,x!=0. we-3 rate-.5exp(-.5t),A(0)=2 givesA=exp(-.5t)+1;derivative and initial condition pass. 1^x integrates tox+C; a^x/ln a requiresa>0,a!=1.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

The exponential inner derivative divides a linear-inner primitive;do not divide byln1.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: ExpressionSlot, FunctionGraph, AlignedAlgebra. Exponential primitive overlay and base-one exception. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Find integral4exp(2x-1) dx.

**Worked answer:** 2exp(2x-1)+C.

### Question 2

Find integral3^x dx and separately integral1^x dx.

**Worked answer:** 3^x/ln3+C;the constant case givesx+C.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
