# math-a12-d01: How does the derivative change when an exponential is scaled or shifted?

Brief 128 research pack, 1 November 2026. This is source preparation for Claude, not a design, narration, build or approval. Original questions below are written for HSCScience in an HSC-style format; their suggested marks are not an official NESA marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci8306d30a`: Apply the rules of differentiation to find the derivative of f x = k e ax , where k and a are constants [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).
- `ci4380403a`: Use the chain rule to prove d dx e ax + b = a e ax + b , where a and b are constants and a ≠ 0 [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

The `ci...` identifiers are NESA content-system codenames, not invented outcome numbers. The official `code` field is empty for these points. Exact source HTML with MathML is retained in the crosswalk and route inputs; the text above is a search aid whose spacing flattens mathematical layout. Use MathML when quoting an equation.

**Year 11 entry:** `ciac4383bd` (Exponential and logarithmic functions); `ci00fa8fac` (Introduction to differentiation); `cif6a6cb7d` (Introduction to differentiation); `ci98f43d14` (Exponential and logarithmic functions). Exact wording, HTML and official links are in the route inputs.

**Start:** Recall that e^x is its own derivative, then connect the horizontal scale in e^(ax+b) to its gradient.

**Stop:** Differentiate k e^(ax+b), retaining the inner expression and multiplying by a. Stop before general bases, products and quotients.

**Next:** math-a12-d02: rewrite a^x with base e.

**Route recommendation:** Keep d01 identity but change the draft learner question. The unscaled e^x rule is Year11 ciac4383bd, so a Year12 video must extend to k e^(ax+b). Recall chain rule before using it; it is Year11 content.

## 2. Site order, sections and worked examples

Read-only source: [differential-calculus/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson01.sa). Source SHA256: `55f33541a1b8fd90cce56ca5cdc98d3375bf42438e428637c922201cb6464430`.

- `orient-differentiating-exponential`: Get oriented.
- `derive-differentiating-exponential-rule`: See where the rule comes from.
- `work-differentiating-exponential-examples`: Work through examples.
- `avoid-differentiating-exponential-traps`: Avoid the common traps.
- `drill-differentiating-exponential-derivatives`: Drill the derivatives.
- `consolidate-differentiating-exponential`: Revisit and consolidate.
- `practise-differentiating-exponential`: Practise the exponential rule.
- `finish-differentiating-exponential`: Finish the lesson.

The page includes later material. Only the examples named as primary below belong to this pack's proposed boundary; all original worked examples are retained here for Claude to assign without changing their numbers.

**Primary examples:** `we-1`

### Original site example `we-1`

PROBLEM 1 · CHAIN RULE Differentiate $y = e^{3x}$. Band 3 Apply 1 $u = 3x \Rightarrow u' = 3$ Identify the exponent and differentiate it. 2 $\dfrac{dy}{dx} = e^{3x} \cdot 3 = 3e^{3x}$ Chain rule: $e^u \cdot u'$. The exponential is unchanged; $u'$ multiplies it. 1 of 2 Reveal next step →

### Original site example `we-2`

PROBLEM 2 · PRODUCT RULE Differentiate $y = x^2 e^x$. Band 4 Apply 1 $u = x^2,\; v = e^x \Rightarrow u' = 2x,\; v' = e^x$ Two functions multiplied, product rule required. Differentiate each factor. 2 $\dfrac{dy}{dx} = 2x \cdot e^x + x^2 \cdot e^x$ Apply $(uv)' = u'v + uv'$. 3 $= e^x(2x + x^2) = xe^x(x + 2)$ Factorise $e^x$ then $x$. Always factorise fully for maximum marks. 1 of 3 Reveal next step →

### Original site example `we-3`

PROBLEM 3 · QUOTIENT RULE + GRADIENT Differentiate $y = \dfrac{e^x}{x + 1}$ and find the gradient at $x = 0$. Band 4 Apply 1 $u = e^x,\; v = x + 1 \Rightarrow u' = e^x,\; v' = 1$ Function divided by function, quotient rule. Identify numerator and denominator. 2 $\dfrac{dy}{dx} = \dfrac{e^x(x+1) - e^x \cdot 1}{(x+1)^2} = \dfrac{e^x(x+1-1)}{(x+1)^2} = \dfrac{xe^x}{(x+1)^2}$ Apply $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ then factorise $e^x$ and simplify. 3 At $x = 0$: $\dfrac{dy}{dx} = \dfrac{0 \cdot e^0}{1^2} = 0$ Substitute $x = 0$. The numerator is zero because $x = 0$, so the gradient is zero (stationary point). 1 of 3 Reveal next step →

## 3. Recalculation and domain check

- we-1: u=3x, u'=3, so (e^(3x))'=3e^(3x). At x=0, height1 and gradient3.

- we-2 (defer to d07): (x²e^x)'=e^x(x²+2x)=xe^x(x+2).

- we-3 (defer to d08): (e^x/(x+1))'=xe^x/(x+1)² for x≠-1; at0 the gradient is0.

Every calculation listed here was independently recomputed. Deferred examples are source material for later videos, not permission to lengthen this one.

## 4. Misconceptions and exam-style traps

Do not apply the power rule to a variable exponent. A negative exponent does not make e^(ax+b) negative. The factor a multiplies the derivative; b differentiates to zero. Source: site traps and NESA ci4380403a. No claim is made about the frequency of these errors in marking of the first 2027 examination.

## 5. Visual needs against programme decision 4

General function graph: e^x and e^(3x) with separately labelled heights and gradients at x=0. Moving tangent: numerical slope-height comparison; do not infer equality from screen angle. Extended aligned algebra: retain k,a,b and highlight the inner derivative. Sign chart is unnecessary. All graphs, algebra and sign charts are coded in the shared paper-style maths kit. No painted graph or algebra plate is requested. Keep question givens visible throughout the 10-second response opportunity; use brief worked feedback and a key-notes hold.

## 6. Two original candidate practice questions

### Question 1

Differentiate f(x)=4e^(2x-1), then find f′(1/2).

**Worked answer:** f′(x)=4×2e^(2x-1)=8e^(2x-1); f′(1/2)=8.

### Question 2

A curve has equation y=3e^(-2x). Find its gradient at x=0 and explain why its graph is decreasing.

**Worked answer:** y′=-6e^(-2x), so y′(0)=-6. Since e^(-2x)>0 for every real x, y′<0 everywhere.

## 7. Site corrections and decisions for Claude

See [the site corrections log](../../site-corrections-maths-a12.md). The site was read only. Keep d01 identity but change the draft learner question. The unscaled e^x rule is Year11 ciac4383bd, so a Year12 video must extend to k e^(ax+b). Recall chain rule before using it; it is Year11 content. Select exact examples and final lesson length during design. Resolve any logged source error before reusing it. Human listening and playback review remain later gates.
