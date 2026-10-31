# math-a12-d04: How does changing the log base change its derivative?

Brief 128 research pack, 1 November 2026. This is source preparation for Claude, not a design, narration, build or approval. Original questions below are written for HSCScience in an HSC-style format; their suggested marks are not an official NESA marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ciba8514ff`: Prove and use the formula d dx log a x = 1 x ln ⁡ a , where a is a constant and a > 0 [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

The `ci...` identifiers are NESA content-system codenames, not invented outcome numbers. The official `code` field is empty for these points. Exact source HTML with MathML is retained in the crosswalk and route inputs; the text above is a search aid whose spacing flattens mathematical layout. Use MathML when quoting an equation.

**Year 11 entry:** `ciae7673fb` (Exponential and logarithmic functions); `ci7cd97f8c` (Exponential and logarithmic functions); `cif6a6cb7d` (Introduction to differentiation). Exact wording, HTML and official links are in the route inputs.

**Start:** Rewrite log_a x=(ln x)/(ln a), with x>0, a>0 and a≠1.

**Stop:** Differentiate simple base-a logarithms and compare their slopes. Leave composite and product examples to d06/d07.

**Next:** math-a12-d05: read sine/cosine derivatives from their graphs.

**Route recommendation:** Retain d04. Although the official point says a>0, logarithms also require a≠1; retain that necessary condition. Include a base between0 and1 so the explanation does not imply every log increases.

## 2. Site order, sections and worked examples

Read-only source: [differential-calculus/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson04.sa). Source SHA256: `96a99daeb562b1b8d49f9322c70def702a177fbb5142c306a0250952958a27d0`.

- `orient-differentiating-general-log`: Get oriented.
- `derive-differentiating-general-log-rule`: See where the rule comes from.
- `work-differentiating-general-log-examples`: Work through examples.
- `avoid-differentiating-general-log-traps`: Avoid the common traps.
- `drill-differentiating-general-log-derivatives`: Drill the derivatives.
- `consolidate-differentiating-general-log`: Revisit and consolidate.
- `practise-differentiating-general-log`: Practise the general log rule.
- `finish-differentiating-general-log`: Finish the lesson.

The page includes later material. Only the examples named as primary below belong to this pack's proposed boundary; all original worked examples are retained here for Claude to assign without changing their numbers.

**Primary examples:** `we-1`

### Original site example `we-1`

PROBLEM 1 · BASIC FORMULA Differentiate $y = \log_2 x$. 1 Apply $\dfrac{d}{dx}(\log_a x) = \dfrac{1}{x\ln a}$ with $a = 2$. Identify the base: $a = 2$. The formula applies directly. 2 $\dfrac{dy}{dx} = \dfrac{1}{x\ln 2}$ $\ln 2 \approx 0.693$ is a constant, the denominator scales the result relative to $\frac{1}{x}$. 1 of 2 Reveal next step →

### Original site example `we-2`

PROBLEM 2 · CHAIN RULE Differentiate $y = \log_3(x^2 + 1)$. 1 $g(x) = x^2 + 1$, $g'(x) = 2x$, base $a = 3$. Identify inside function and its derivative; note the base. 2 $\dfrac{dy}{dx} = \dfrac{g'(x)}{g(x)\ln a} = \dfrac{2x}{(x^2+1)\ln 3}$ Chain rule: $g'(x)$ on top, $g(x) \cdot \ln 3$ on the bottom. 1 of 2 Reveal next step →

### Original site example `we-3`

PROBLEM 3 · PRODUCT OF TWO DIFFERENT BASES Differentiate $y = \log_2 x \cdot \log_3 x$. 1 Rewrite: $y = \dfrac{\ln x}{\ln 2} \cdot \dfrac{\ln x}{\ln 3} = \dfrac{(\ln x)^2}{\ln 2 \cdot \ln 3}$ Change of base both logs, now it's a single function with a constant denominator. 2 $\dfrac{dy}{dx} = \dfrac{1}{\ln 2 \cdot \ln 3} \cdot 2\ln x \cdot \dfrac{1}{x} = \dfrac{2\ln x}{x\ln 2 \cdot \ln 3}$ Chain rule on $(\ln x)^2$: bring the 2 down, multiply by derivative of $\ln x$. 3 $= \dfrac{2\log_2 x}{x\ln 3}$ (alternative form using $\log_2 x = \dfrac{\ln x}{\ln 2}$) Either form is acceptable, choose whichever the question asks for. 1 of 3 Reveal next step →

## 3. Recalculation and domain check

- we-1: (log_2 x)′=1/(xln2), x>0; ln2≈0.693147.

- we-2 (defer to d06): (log_3(x²+1))′=2x/((x²+1)ln3), all real x.

- we-3 (defer to d06/d07): log_2x·log_3x=(lnx)²/(ln2ln3); derivative2lnx/(xln2ln3), x>0.

Every calculation listed here was independently recomputed. Deferred examples are source material for later videos, not permission to lengthen this one.

## 4. Misconceptions and exam-style traps

The factor ln a belongs in the denominator. ln a is negative when0<a<1. Do not call ln a a distance from e. State the base rather than relying on ambiguous log notation. Sources: change-of-base identity in Year11 ciae7673fb; site traps. No claim is made about the frequency of these errors in marking of the first 2027 examination.

## 5. Visual needs against programme decision 4

General graphs: ln x, log_2 x and log_(1/2)x with domains/asymptotes. Tangent comparison at x=1. Extended aligned algebra retains the constant divisor ln a. No secant proof or sign-chart kit is required. All graphs, algebra and sign charts are coded in the shared paper-style maths kit. No painted graph or algebra plate is requested. Keep question givens visible throughout the 10-second response opportunity; use brief worked feedback and a key-notes hold.

## 6. Two original candidate practice questions

### Question 1

Differentiate y=log_5 x and find the gradient at x=1.

**Worked answer:** y=(lnx)/(ln5), hence y′=1/(xln5) and y′(1)=1/ln5.

### Question 2

Differentiate h(x)=log_(1/2)x and show that its gradient is negative throughout its domain.

**Worked answer:** h′=1/(xln(1/2))=-1/(xln2). Its domain is x>0, so the denominator xln2 is positive and h′<0.

## 7. Site corrections and decisions for Claude

See [the site corrections log](../../site-corrections-maths-a12.md). The site was read only. Retain d04. Although the official point says a>0, logarithms also require a≠1; retain that necessary condition. Include a base between0 and1 so the explanation does not imply every log increases. Select exact examples and final lesson length during design. Resolve any logged source error before reusing it. Human listening and playback review remain later gates.
