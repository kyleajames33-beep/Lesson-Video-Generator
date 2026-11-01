# math-a12-d13: How do we keep inner factors and domains in the remaining composites?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci04cbaf6f`: Use the chain rule to differentiate functions of the form sin ⁡ f x , cos ⁡ f x and tan ⁡ f x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).
- `ci4f1f8ece`: Apply the product, quotient and chain rules to differentiate functions of the form f x g x , f x g x or f ( g ( x ) ) , where f ( x ) and g ( x ) are any of the functions within the scope of the Mathematics Advanced course [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci00fa8fac`, `cie3d91a6e`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-d12.

**Start:** Recall d06 structure choices and d11 tan derivative.

**Stop:** Transfer to deferred general-base/log-base/tan composites; no triple-nesting quota.

**Next:** math-a12-d14.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\differential-calculus\lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson02.sa.html), SHA256 `d82bf5eca440e61298bc65c1b702bd1365a5c4e3de70d510c9b67d77ca28edfa`.

Data-step IDs: `orient-differentiating-general-exponential`, `derive-differentiating-general-exponential-rule`, `work-differentiating-general-exponential-examples`, `avoid-differentiating-general-exponential-traps`, `drill-differentiating-general-exponential-derivatives`, `consolidate-differentiating-general-exponential`, `practise-differentiating-general-exponential`, `finish-differentiating-general-exponential`.

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\differential-calculus\lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson04.sa.html), SHA256 `96a99daeb562b1b8d49f9322c70def702a177fbb5142c306a0250952958a27d0`.

Data-step IDs: `orient-differentiating-general-log`, `derive-differentiating-general-log-rule`, `work-differentiating-general-log-examples`, `avoid-differentiating-general-log-traps`, `drill-differentiating-general-log-derivatives`, `consolidate-differentiating-general-log`, `practise-differentiating-general-log`, `finish-differentiating-general-log`.

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\differential-calculus\lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson05.sa.html), SHA256 `db0b045dcd7d18b9fe84ed1e03d77f93564a690c792680aa9e139ad5bda4be68`.

Data-step IDs: `orient-trig-derivatives`, `read-and-prove-trig-derivatives`, `apply-chain-rule-to-trig`, `apply-trig-derivatives`, `work-trig-examples`, `consolidate-trig-derivatives`, `practise-trig-derivatives`, `finish-trig-derivatives`.

### Source differential-calculus/lesson02.sa.html, `we-2`

PROBLEM 2 · CHAIN RULE WITH $a^{kx}$ Differentiate $y = 3^{2x}$. Band 4 Apply 1 Let $u = 2x \Rightarrow u' = 2$ The exponent is $2x$, not just $x$, chain rule needed. 2 $\dfrac{dy}{dx} = 3^{2x} \cdot \ln 3 \cdot 2 = 2\ln 3 \cdot 3^{2x}$ Chain rule: $a^u \cdot \ln a \cdot u'$. Both the $\ln 3$ factor and the derivative of the exponent ($2$) must appear. 1 of 2 Reveal next step →

### Source differential-calculus/lesson04.sa.html, `we-2`

PROBLEM 2 · CHAIN RULE Differentiate $y = \log_3(x^2 + 1)$. 1 $g(x) = x^2 + 1$, $g'(x) = 2x$, base $a = 3$. Identify inside function and its derivative; note the base. 2 $\dfrac{dy}{dx} = \dfrac{g'(x)}{g(x)\ln a} = \dfrac{2x}{(x^2+1)\ln 3}$ Chain rule: $g'(x)$ on top, $g(x) \cdot \ln 3$ on the bottom. 1 of 2 Reveal next step →

### Source differential-calculus/lesson05.sa.html, `we-1`

PROBLEM 1 · BASIC CHAIN RULE Differentiate: (a) $y = 3\sin(5x)$, (b) $y = \cos(x^2 + 1)$, (c) $y = \tan\!\left(2x - \dfrac{\pi}{3}\right)$. 1 Part (a): $y = 3\sin(5x)$ Inner: $u = 5x$, inner derivative $= 5$ Outer: $\sin \to \cos$ $y' = 3 \times 5\cos(5x) = 15\cos(5x)$ Chain rule: the 5 from the inner derivative multiplies, then the 3 coefficient stays. Total multiplier = $3 \times 5 = 15$. 2 Part (b): $y = \cos(x^2 + 1)$ Inner: $u = x^2 + 1$, inner derivative $= 2x$ Outer: $\cos \to -\sin$ $y' = -2x\sin(x^2 + 1)$ The inner derivative is $2x$ (not a constant), so it stays as a factor. The negative sign comes from the outer derivative of cosine. 3 Part (c): $y = \tan\!\left(2x - \dfrac{\pi}{3}\right)$ Inner: $u = 2x - \dfrac{\pi}{3}$, inner derivative $= 2$ Outer: $\tan \to \sec^2$ $y' = 2\sec^2\!\left(2x - \dfrac{\pi}{3}\right)$ The $-\frac{\pi}{3}$ is a constant, its derivative is 0, so only the $2x$ contributes the inner derivative of 2. 1 of 3 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

3^(2x) derivative2ln3·3^(2x); log_3(x squared+1) derivative2x/((x squared+1)ln3),all real x. Site tan(2x-pi/3) derivative2sec squared(2x-pi/3),poles excluded. tan(exp x) derivative exp x sec squared(exp x),cos(exp x)!=0. Coefficients unchanged.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

Keep positive log inputs and inner rates; do not confuse base with inner expression.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: ExpressionSlot, DerivativeFactor, DomainShading. Suppress literal slope ratios at0/0; no new part. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Differentiate5^(x squared),then find gradient at1.

**Worked answer:** 2x ln5·5^(x squared); at1,10ln5.

### Question 2

Differentiate log_2(4-x),stating its domain.

**Worked answer:** -1/((4-x)ln2),x<4.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
