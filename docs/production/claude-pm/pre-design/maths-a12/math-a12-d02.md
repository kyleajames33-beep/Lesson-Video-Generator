# math-a12-d02: Why does differentiating a^x introduce ln a?

Brief 128 research pack, 1 November 2026. This is source preparation for Claude, not a design, narration, build or approval. Original questions below are written for HSCScience in an HSC-style format; their suggested marks are not an official NESA marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci31a76d4a`: Prove and use the formula d dx a x = ( ln ⁡ a ) a x , where a is a constant and a > 0 [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

The `ci...` identifiers are NESA content-system codenames, not invented outcome numbers. The official `code` field is empty for these points. Exact source HTML with MathML is retained in the crosswalk and route inputs; the text above is a search aid whose spacing flattens mathematical layout. Use MathML when quoting an equation.

**Year 11 entry:** `ciac4383bd` (Exponential and logarithmic functions); `ci00fa8fac` (Introduction to differentiation); `cic84a1659` (Exponential and logarithmic functions); `ciae7673fb` (Exponential and logarithmic functions). Exact wording, HTML and official links are in the route inputs.

**Start:** Rewrite a^x=e^(x ln a), using fixed a>0.

**Stop:** Prove and apply (a^x)′=a^x ln a. Include the constant a=1 case; stop before products and extended composites.

**Next:** math-a12-d03: derive the natural-log slope.

**Route recommendation:** Retain d02 after scaled exponentials in d01. Keep the proof, not only the memorised rule. Positive a below1 gives ln a<0; a=1 gives derivative0.

## 2. Site order, sections and worked examples

Read-only source: [differential-calculus/lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson02.sa). Source SHA256: `d82bf5eca440e61298bc65c1b702bd1365a5c4e3de70d510c9b67d77ca28edfa`.

- `orient-differentiating-general-exponential`: Get oriented.
- `derive-differentiating-general-exponential-rule`: See where the rule comes from.
- `work-differentiating-general-exponential-examples`: Work through examples.
- `avoid-differentiating-general-exponential-traps`: Avoid the common traps.
- `drill-differentiating-general-exponential-derivatives`: Drill the derivatives.
- `consolidate-differentiating-general-exponential`: Revisit and consolidate.
- `practise-differentiating-general-exponential`: Practise the general rule.
- `finish-differentiating-general-exponential`: Finish the lesson.

The page includes later material. Only the examples named as primary below belong to this pack's proposed boundary; all original worked examples are retained here for Claude to assign without changing their numbers.

**Primary examples:** `we-1`

### Original site example `we-1`

PROBLEM 1 · BASIC $a^x$ Differentiate $y = 2^x$. Band 3 Apply 1 $\dfrac{dy}{dx} = 2^x \ln 2$ Apply $\dfrac{d}{dx}(a^x) = a^x \ln a$ with $a = 2$. No chain rule needed, exponent is simply $x$. 1 of 1 Reveal next step →

### Original site example `we-2`

PROBLEM 2 · CHAIN RULE WITH $a^{kx}$ Differentiate $y = 3^{2x}$. Band 4 Apply 1 Let $u = 2x \Rightarrow u' = 2$ The exponent is $2x$, not just $x$, chain rule needed. 2 $\dfrac{dy}{dx} = 3^{2x} \cdot \ln 3 \cdot 2 = 2\ln 3 \cdot 3^{2x}$ Chain rule: $a^u \cdot \ln a \cdot u'$. Both the $\ln 3$ factor and the derivative of the exponent ($2$) must appear. 1 of 2 Reveal next step →

### Original site example `we-3`

PROBLEM 3 · PRODUCT RULE WITH $a^x$ Differentiate $y = x \cdot 5^x$. Band 4 Apply 1 $u = x,\; v = 5^x \Rightarrow u' = 1,\; v' = 5^x \ln 5$ Product of linear function and general exponential. Differentiate each factor. 2 $\dfrac{dy}{dx} = 1 \cdot 5^x + x \cdot 5^x \ln 5$ Apply $(uv)' = u'v + uv'$. 3 $= 5^x(1 + x\ln 5)$ Factorise $5^x$ from both terms. Leave in this form, fully factorised. 1 of 3 Reveal next step →

## 3. Recalculation and domain check

- we-1: (2^x)′=2^x ln2; at0 gradient ln2≈0.693147.

- we-2 (recall/optional extension): (3^(2x))′=2ln3·3^(2x).

- we-3 (defer to d07): (x5^x)′=5^x(1+xln5).

Every calculation listed here was independently recomputed. Deferred examples are source material for later videos, not permission to lengthen this one.

## 4. Misconceptions and exam-style traps

ln a is a constant factor, not ln x. Distinguish x^a from a^x. Preserve a>0 and distinguish the valid constant exponential 1^x from the invalid logarithm base1. Sources: site traps; NESA ci31a76d4a. No claim is made about the frequency of these errors in marking of the first 2027 examination.

## 5. Visual needs against programme decision 4

General graph: compare bases2,e and1/2, retaining the same coordinate transform. Moving tangent: show m/y=ln a at a point. Extended algebra: rewrite a^x=e^(x ln a) and retain ln a as a constant. Sign chart only for the sign of ln a. All graphs, algebra and sign charts are coded in the shared paper-style maths kit. No painted graph or algebra plate is requested. Keep question givens visible throughout the 10-second response opportunity; use brief worked feedback and a key-notes hold.

## 6. Two original candidate practice questions

### Question 1

Find f′(x) if f(x)=5^x and find f′(0) exactly.

**Worked answer:** Write 5^x=e^(xln5). Then f′(x)=5^xln5 and f′(0)=ln5.

### Question 2

For g(x)=(1/2)^x, find g′(2) and explain its sign.

**Worked answer:** g′(x)=(1/2)^xln(1/2)=-(1/2)^xln2. Thus g′(2)=-ln2/4<0. The function decreases.

## 7. Site corrections and decisions for Claude

See [the site corrections log](../../site-corrections-maths-a12.md). The site was read only. Retain d02 after scaled exponentials in d01. Keep the proof, not only the memorised rule. Positive a below1 gives ln a<0; a=1 gives derivative0. Select exact examples and final lesson length during design. Resolve any logged source error before reusing it. Human listening and playback review remain later gates.
