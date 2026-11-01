# math-a12-d14: How do a point and derivative determine tangent and normal lines?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci2d33185c`: Solve problems involving equations of tangents and normals to curves involving any of the functions within the scope of the Mathematics Advanced course [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci00fa8fac`, `cie3d91a6e`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-d13.

**Start:** Recall point-slope lines and perpendicular finite gradients.

**Stop:** Find point from f,slope from derivative; distinguish horizontal tangent/vertical normal.

**Next:** math-a12-d15.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\differential-calculus\lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson05.sa.html), SHA256 `db0b045dcd7d18b9fe84ed1e03d77f93564a690c792680aa9e139ad5bda4be68`.

Data-step IDs: `orient-trig-derivatives`, `read-and-prove-trig-derivatives`, `apply-chain-rule-to-trig`, `apply-trig-derivatives`, `work-trig-examples`, `consolidate-trig-derivatives`, `practise-trig-derivatives`, `finish-trig-derivatives`.

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\differential-calculus\lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson06.sa.html), SHA256 `78e7c736197b665f805e37d29f18f38a3c68f577c38731f9e139ff16f0277bf9`.

Data-step IDs: `orient-combining-rules`, `apply-product-and-quotient-rules`, `apply-chain-rule-and-tangents`, `combine-all-rules`, `work-combining-examples`, `consolidate-combining-rules`, `practise-combining-rules`, `finish-combining-rules`.

### Source differential-calculus/lesson05.sa.html, `we-3`

PROBLEM 3 · TANGENT AND NORMAL Find the equation of the tangent to $y = \cos(2x)$ at the point where $x = \dfrac{\pi}{6}$. Then find the equation of the normal at the same point. 1 Find the point on the curve: $y = \cos\!\left(2 \times \dfrac{\pi}{6}\right) = \cos\!\left(\dfrac{\pi}{3}\right) = \dfrac{1}{2}$ Point: $\left(\dfrac{\pi}{6},\, \dfrac{1}{2}\right)$ Substitute $x = \frac{\pi}{6}$ to find the $y$-coordinate. $\cos\frac{\pi}{3} = \frac{1}{2}$ from the exact value triangle. 2 Find the gradient: $\dfrac{dy}{dx} = -2\sin(2x)$ At $x = \dfrac{\pi}{6}$: $m_T = -2\sin\!\left(\dfrac{\pi}{3}\right) = -2 \times \dfrac{\sqrt{3}}{2} = -\sqrt{3}$ Differentiate using chain rule. Substitute $x = \frac{\pi}{6}$. $\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$ from the exact value table. 3 Tangent equation: $y - \dfrac{1}{2} = -\sqrt{3}\!\left(x - \dfrac{\pi}{6}\right)$ $y = -\sqrt{3}x + \dfrac{\pi\sqrt{3}}{6} + \dfrac{1}{2}$ Use point-slope form $y - y_1 = m(x - x_1)$ with $m = -\sqrt{3}$ and the point $\left(\frac{\pi}{6}, \frac{1}{2}\right)$. 4 Normal gradient: $m_N = -\dfrac{1}{m_T} = -\dfrac{1}{-\sqrt{3}} = \dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$ Normal equation: $y - \dfrac{1}{2} = \dfrac{1}{\sqrt{3}}\!\left(x - \dfrac{\pi}{6}\right)$ The normal is perpendicular to the tangent, so $m_N = -\frac{1}{m_T}$, which needs $m_T$ to be non-zero (a horizontal tangent has a vertical normal $x = x_0$ instead). Rationalise $\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$ for the cleanest form. 1 of 4 Reveal next step →

### Source differential-calculus/lesson06.sa.html, `we-2`

PROBLEM 2 · QUOTIENT RULE + TANGENT LINE Find the equation of the tangent to $y = \dfrac{\ln x}{\cos x}$ at $x = 1$. 1 Find the $y$-value at $x = 1$: $y(1) = \dfrac{\ln 1}{\cos 1} = \dfrac{0}{\cos 1} = 0$. Point: $(1,\ 0)$. Always find the $y$-coordinate first by substituting $x_0$ into the original equation. 2 Differentiate using the quotient rule. $f = \ln x$, $f' = \dfrac{1}{x}$; $g = \cos x$, $g' = -\sin x$. $$y' = \frac{\dfrac{1}{x}\cos x - \ln x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos x / x + \ln x \sin x}{\cos^2 x}$$ Quotient rule: $\dfrac{f'g - fg'}{g^2}$. Note $g' = -\sin x$, so the subtraction becomes addition. 3 Evaluate $y'$ at $x = 1$. $\ln 1 = 0$, so the $\ln x\sin x$ term vanishes: $y'(1) = \dfrac{\cos 1 / 1 + 0}{\cos^2 1} = \dfrac{\cos 1}{\cos^2 1} = \dfrac{1}{\cos 1} = \sec 1$. Tangent: $y - 0 = \sec 1 \cdot (x - 1)$, i.e. $y = (x-1)\sec 1$. Substituting $x=1$ simplifies greatly because $\ln 1 = 0$. The tangent passes through $(1, 0)$ with slope $\sec 1 \approx 1.851$. 1 of 3 Reveal next step →

### Source differential-calculus/lesson06.sa.html, `we-3`

PROBLEM 3 · FULL EXAM-STYLE, TANGENT, NORMAL, INTERSECTION For $y = xe^{-x}$: (a) find the equation of the tangent at $x = 1$, (b) find the equation of the normal at $x = 1$, (c) find where the tangent meets the $x$-axis. 1 Find the point. At $x = 1$: $y = 1 \cdot e^{-1} = e^{-1}$. Point: $\left(1,\ \dfrac{1}{e}\right)$. Substitute $x = 1$ into the original equation to get the $y$-coordinate. 2 Differentiate. Product rule: $u = x$, $v = e^{-x}$; $u' = 1$, $v' = -e^{-x}$. $y' = e^{-x} + x(-e^{-x}) = e^{-x}(1-x)$. At $x = 1$: $m_T = e^{-1}(1-1) = 0$. Horizontal tangent at $x = 1$, the slope is zero. The function has a stationary point here. 3 Part (a) Tangent: $m_T = 0$, so $y = \dfrac{1}{e}$ (horizontal line). Part (b) Normal: $m_T = 0$ means vertical normal: $x = 1$. Part (c) Where does $y = \dfrac{1}{e}$ meet the $x$-axis? The $x$-axis is $y = 0$. But $y = \dfrac{1}{e} \neq 0$, the tangent is horizontal and never meets the $x$-axis. It is parallel to it. A horizontal tangent is a special case: its normal is vertical, and if the tangent is not the $x$-axis itself, it never meets it. Award full marks for recognising this clearly. 1 of 3 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

cos2x at pi/6:point(pi/6,1/2),mT=-sqrt3,mN=1/sqrt3; lines y-1/2=m(x-pi/6). ln x/cos x at1:point(1,0),tangent y=(x-1)/cos1,normal y=-cos1(x-1). x exp(-x) at1:point(1,1/e),tangent y=1/e,normal x=1,no x-axis intersection.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

Negative reciprocal requires nonzero finite tangent slope; use f for point.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: FunctionGraph, ReadoutPanel, AlignedAlgebra. NormalLine helper with vertical x=c handling. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Find tangent and normal to exp x at0.

**Worked answer:** Point(0,1); tangent y=x+1,normal y=1-x.

### Question 2

Find tangent and normal to ln x at2.

**Worked answer:** Point(2,ln2); y-ln2=(x-2)/2 and y-ln2=-2(x-2).

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
