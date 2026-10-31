# math-a12-d03: Why is the derivative of ln x equal to 1/x?

Brief 128 research pack, 1 November 2026. This is source preparation for Claude, not a design, narration, build or approval. Original questions below are written for HSCScience in an HSC-style format; their suggested marks are not an official NESA marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cib961593d`: Use chain rule on the identity e ln ⁡ x = x to prove the formula d dx ln ⁡ x = 1 x for the derivative of the natural logarithm function where x > 0 [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

The `ci...` identifiers are NESA content-system codenames, not invented outcome numbers. The official `code` field is empty for these points. Exact source HTML with MathML is retained in the crosswalk and route inputs; the text above is a search aid whose spacing flattens mathematical layout. Use MathML when quoting an equation.

**Year 11 entry:** `ci00fa8fac` (Introduction to differentiation); `cic84a1659` (Exponential and logarithmic functions); `ci7cd97f8c` (Exponential and logarithmic functions); `ciac4383bd` (Exponential and logarithmic functions). Exact wording, HTML and official links are in the route inputs.

**Start:** Use e^(ln x)=x on x>0 and differentiate both sides with the known chain rule.

**Stop:** Obtain (ln x)′=1/x, preserve x>0, and apply constant-multiple/log-law cases. Leave general composite logarithms to d06.

**Next:** math-a12-d04: change the logarithm base.

**Route recommendation:** Retain d03, but make the official chain-rule proof through e^(ln x)=x explicit. The site implicit proof through x=e^y is equivalent mathematics; the official content explicitly asks for the identity proof.

## 2. Site order, sections and worked examples

Read-only source: [differential-calculus/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson03.sa). Source SHA256: `67acb31aa3cef7b424bbd7021a490f9fd09f47f30521fb92f3f90c9a67b1ef01`.

- `orient-differentiating-natural-log`: Get oriented.
- `derive-differentiating-natural-log-rule`: See where the rule comes from.
- `work-differentiating-natural-log-examples`: Work through examples.
- `avoid-differentiating-natural-log-traps`: Avoid the common traps.
- `drill-differentiating-natural-log-derivatives`: Drill the derivatives.
- `consolidate-differentiating-natural-log`: Revisit and consolidate.
- `practise-differentiating-natural-log`: Practise the natural log rule.
- `finish-differentiating-natural-log`: Finish the lesson.

The page includes later material. Only the examples named as primary below belong to this pack's proposed boundary; all original worked examples are retained here for Claude to assign without changing their numbers.

**Primary examples:** `we-1`

### Original site example `we-1`

PROBLEM 1 · BASIC CHAIN RULE Differentiate $y = \ln(3x)$. 1 $\dfrac{dy}{dx} = \dfrac{3}{3x} = \dfrac{1}{x}$ Chain rule: derivative of $3x$ is $3$, divided by $3x$. Simplifies to $\frac{1}{x}$. 2 Alternatively: $\ln(3x) = \ln 3 + \ln x$, so $\dfrac{dy}{dx} = 0 + \dfrac{1}{x} = \dfrac{1}{x}$. Using log laws first gives the same result more directly, no chain rule required. 1 of 2 Reveal next step →

### Original site example `we-2`

PROBLEM 2 · COMPOSITE FUNCTION Differentiate $y = \ln(x^2 + 1)$. 1 $g(x) = x^2 + 1$, so $g'(x) = 2x$. Identify the inside function and differentiate it. 2 $\dfrac{dy}{dx} = \dfrac{g'(x)}{g(x)} = \dfrac{2x}{x^2 + 1}$ Chain rule: numerator is $g'(x) = 2x$, denominator is $g(x) = x^2 + 1$. 1 of 2 Reveal next step →

### Original site example `we-3`

PROBLEM 3 · PRODUCT RULE + STATIONARY POINT Differentiate $y = x\ln x$ and find its stationary point. 1 Product rule: $u = x$, $v = \ln x$, so $u' = 1$, $v' = \dfrac{1}{x}$. Product of a linear and a logarithmic function, apply product rule. 2 $\dfrac{dy}{dx} = 1 \cdot \ln x + x \cdot \dfrac{1}{x} = \ln x + 1$ $uv' + vu'$, the $x$ and $\frac{1}{x}$ cancel neatly. 3 Set $\dfrac{dy}{dx} = 0$: $\ln x + 1 = 0 \Rightarrow \ln x = -1 \Rightarrow x = e^{-1} = \dfrac{1}{e}$ Stationary point where derivative equals zero. 4 $y = \dfrac{1}{e} \cdot \ln\!\left(\dfrac{1}{e}\right) = \dfrac{1}{e} \cdot (-1) = -\dfrac{1}{e}$. Stationary point: $\left(\dfrac{1}{e},\, -\dfrac{1}{e}\right)$. Substitute $x = \frac{1}{e}$ back into the original function to find the $y$-coordinate. 1 of 4 Reveal next step →

## 3. Recalculation and domain check

- we-1: (ln(3x))′=3/(3x)=1/x on x>0. Log-law alternative ln3+lnx has the same domain.

- we-2 (defer to d06): (ln(x²+1))′=2x/(x²+1), all real x.

- we-3 (defer to d07/d09): (xlnx)′=lnx+1, zero at x=e^-1; y=-e^-1. Second derivative1/x>0 establishes a minimum.

Every calculation listed here was independently recomputed. Deferred examples are source material for later videos, not permission to lengthen this one.

## 4. Misconceptions and exam-style traps

1/x is the derivative, not1/lnx. The real function ln x has x>0 even though the algebraic expression1/x also exists for x<0. Do not extend the original domain by differentiating. Source: site traps; NESA cib961593d. No claim is made about the frequency of these errors in marking of the first 2027 examination.

## 5. Visual needs against programme decision 4

General graph: ln x and1/x with positive domain and asymptote x=0. Moving tangent: compare slopes at x=1 and e without claiming equal graph scales imply equal angles. Extended algebra: e^(ln x)·(ln x)′=1, then x·(ln x)′=1. Keep x>0 visible. All graphs, algebra and sign charts are coded in the shared paper-style maths kit. No painted graph or algebra plate is requested. Keep question givens visible throughout the 10-second response opportunity; use brief worked feedback and a key-notes hold.

## 6. Two original candidate practice questions

### Question 1

Use e^(ln x)=x to show that d(ln x)/dx=1/x, stating the domain.

**Worked answer:** For x>0, chain rule gives e^(ln x)·d(ln x)/dx=1. As e^(ln x)=x, divide by positive x to obtain1/x.

### Question 2

Find the gradient of y=2ln x-3x at x=2.

**Worked answer:** y′=2/x-3 for x>0. At2, y′=1-3=-2.

## 7. Site corrections and decisions for Claude

See [the site corrections log](../../site-corrections-maths-a12.md). The site was read only. Retain d03, but make the official chain-rule proof through e^(ln x)=x explicit. The site implicit proof through x=e^y is equivalent mathematics; the official content explicitly asks for the identity proof. Select exact examples and final lesson length during design. Resolve any logged source error before reusing it. Human listening and playback review remain later gates.
