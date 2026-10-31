# math-a12-d07: How do both factors contribute to a product derivative?

Brief 128 research pack, 1 November 2026. This is source preparation for Claude, not a design, narration, build or approval. Original questions below are written for HSCScience in an HSC-style format; their suggested marks are not an official NESA marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci4f1f8ece`: Apply the product, quotient and chain rules to differentiate functions of the form f x g x , f x g x or f ( g ( x ) ) , where f ( x ) and g ( x ) are any of the functions within the scope of the Mathematics Advanced course [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

The `ci...` identifiers are NESA content-system codenames, not invented outcome numbers. The official `code` field is empty for these points. Exact source HTML with MathML is retained in the crosswalk and route inputs; the text above is a search aid whose spacing flattens mathematical layout. Use MathML when quoting an equation.

**Year 11 entry:** `ci72e90f3a` (Introduction to differentiation); `cie3d91a6e` (Introduction to differentiation); `ci00fa8fac` (Introduction to differentiation). Exact wording, HTML and official links are in the route inputs.

**Start:** Recall the Year11 product rule and use it with newly known exponential and trig derivatives.

**Stop:** Apply and factor one new-family product, then transfer to a product whose second factor needs chain rule. Leave quotients and stationary classification.

**Next:** math-a12-d08: quotients and denominator restrictions.

**Route recommendation:** Retain d07 after d06. Avoid re-teaching elementary product rule at length; the Year12 addition is the range of functions and combinations.

## 2. Site order, sections and worked examples

Read-only source: [differential-calculus/lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson06.sa). Source SHA256: `78e7c736197b665f805e37d29f18f38a3c68f577c38731f9e139ff16f0277bf9`.

- `orient-combining-rules`: Get oriented.
- `apply-product-and-quotient-rules`: Use the product and quotient rules.
- `apply-chain-rule-and-tangents`: Use the chain rule and find tangents.
- `combine-all-rules`: Combine all three rules.
- `work-combining-examples`: Work through examples.
- `consolidate-combining-rules`: Revisit and consolidate.
- `practise-combining-rules`: Practise the combining rules.
- `finish-combining-rules`: Finish the lesson.

The page includes later material. Only the examples named as primary below belong to this pack's proposed boundary; all original worked examples are retained here for Claude to assign without changing their numbers.

**Primary examples:** `we-1`

### Original site example `we-1`

PROBLEM 1 · PRODUCT + CHAIN RULES Differentiate $y = x^3\sin(2x)$. Show full working. 1 Identify structure: $y = u \cdot v$ where $u = x^3$ and $v = \sin(2x)$. The outermost operation is multiplication, use the product rule. Check whether each component needs chain rule. 2 Find $u'$ and $v'$: $u = x^3 \Rightarrow u' = 3x^2$ $v = \sin(2x) \Rightarrow v' = 2\cos(2x)$  (chain rule: outer $\sin$, inner $2x$, inner derivative $= 2$) $\sin(2x)$ is a composite: outer function $\sin(\square)$ differentiates to $\cos(\square)$, multiplied by inner derivative $2$. 3 Apply product rule $u'v + uv'$: $y' = 3x^2\sin(2x) + x^3 \cdot 2\cos(2x)$ $y' = 3x^2\sin(2x) + 2x^3\cos(2x)$ $y' = x^2[3\sin(2x) + 2x\cos(2x)]$ Factor $x^2$ from both terms to present the answer in a clean, factored form. 1 of 3 Reveal next step →

### Original site example `we-2`

PROBLEM 2 · QUOTIENT RULE + TANGENT LINE Find the equation of the tangent to $y = \dfrac{\ln x}{\cos x}$ at $x = 1$. 1 Find the $y$-value at $x = 1$: $y(1) = \dfrac{\ln 1}{\cos 1} = \dfrac{0}{\cos 1} = 0$. Point: $(1,\ 0)$. Always find the $y$-coordinate first by substituting $x_0$ into the original equation. 2 Differentiate using the quotient rule. $f = \ln x$, $f' = \dfrac{1}{x}$; $g = \cos x$, $g' = -\sin x$. $$y' = \frac{\dfrac{1}{x}\cos x - \ln x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos x / x + \ln x \sin x}{\cos^2 x}$$ Quotient rule: $\dfrac{f'g - fg'}{g^2}$. Note $g' = -\sin x$, so the subtraction becomes addition. 3 Evaluate $y'$ at $x = 1$. $\ln 1 = 0$, so the $\ln x\sin x$ term vanishes: $y'(1) = \dfrac{\cos 1 / 1 + 0}{\cos^2 1} = \dfrac{\cos 1}{\cos^2 1} = \dfrac{1}{\cos 1} = \sec 1$. Tangent: $y - 0 = \sec 1 \cdot (x - 1)$, i.e. $y = (x-1)\sec 1$. Substituting $x=1$ simplifies greatly because $\ln 1 = 0$. The tangent passes through $(1, 0)$ with slope $\sec 1 \approx 1.851$. 1 of 3 Reveal next step →

### Original site example `we-3`

PROBLEM 3 · FULL EXAM-STYLE, TANGENT, NORMAL, INTERSECTION For $y = xe^{-x}$: (a) find the equation of the tangent at $x = 1$, (b) find the equation of the normal at $x = 1$, (c) find where the tangent meets the $x$-axis. 1 Find the point. At $x = 1$: $y = 1 \cdot e^{-1} = e^{-1}$. Point: $\left(1,\ \dfrac{1}{e}\right)$. Substitute $x = 1$ into the original equation to get the $y$-coordinate. 2 Differentiate. Product rule: $u = x$, $v = e^{-x}$; $u' = 1$, $v' = -e^{-x}$. $y' = e^{-x} + x(-e^{-x}) = e^{-x}(1-x)$. At $x = 1$: $m_T = e^{-1}(1-1) = 0$. Horizontal tangent at $x = 1$, the slope is zero. The function has a stationary point here. 3 Part (a) Tangent: $m_T = 0$, so $y = \dfrac{1}{e}$ (horizontal line). Part (b) Normal: $m_T = 0$ means vertical normal: $x = 1$. Part (c) Where does $y = \dfrac{1}{e}$ meet the $x$-axis? The $x$-axis is $y = 0$. But $y = \dfrac{1}{e} \neq 0$, the tangent is horizontal and never meets the $x$-axis. It is parallel to it. A horizontal tangent is a special case: its normal is vertical, and if the tangent is not the $x$-axis itself, it never meets it. Award full marks for recognising this clearly. 1 of 3 Reveal next step →

### Core source excerpt `apply-product-and-quotient-rules`

2 Use the product and quotient rules Differentiate products and fractions of functions. 05 The Product Rule: $f \cdot g$ Pairs core concept The product of two functions does not differentiate to the product of their derivatives. Each function takes a turn being differentiated while the other holds still. $$\frac{d}{dx}[f(x) \cdot g(x)] = f'(x)\,g(x) + f(x)\,g'(x)$$ Memory aid: "derivative of first times second, plus first times derivative of second", "the other one stays." Always start by identifying $u = f(x)$ and $v = g(x)$, writing their derivatives, then substituting into $u'v + uv'$. Mix-and-match examples: $y = x^2\sin x$: let $u = x^2$, $v = \sin x$. Then $u' = 2x$, $v' = \cos x$. $y' = 2x\sin x + x^2\cos x$. $y = e^x\ln x$: $u' = e^x$, $v' = \dfrac{1}{x}$. $y' = e^x\ln x + e^x \cdot \dfrac{1}{x} = e^x\!\left(\ln x + \dfrac{1}{x}\right)$. $y = x\cos(3x)$: $u = x$, $v = \cos(3x)$. Note: $v' = -3\sin(3x)$ (chain rule on the trig). $y' = \cos(3x) + x \cdot (-3\sin(3x)) = \cos(3x) - 3x\sin(3x)$. Common error to avoid: The chain rule inside the product. In $y = x\cos(3x)$, differentiating $\cos(3x)$ requires the chain rule: the inner function $3x$ contributes a factor of $3$. Always check whether each component is itself a composite function before writing its derivative. Product rule: $(fg)' = f'g + fg'$, "derivative of first times second, plus first times derivative of second."; Step: label $u$ and $v$, find $u'$ and $v'$, substitute. Don't skip the labelling step. Pause, copy the product rule $(fg)' = f'g + fg'$, "derivative of first times second, plus first times derivative of second", and the labelling method (always name $u$ and $v$ first) into your book. Quick check: What is $\dfrac{d}{dx}[x\sin x]$? A, $\cos x$ B, $\sin x + x\cos x$ C, $x\cos x$ D, $\sin x - x\cos x$ 06 The Quotient Rule: $f/g$ Fractions core concept We just saw the product rule $(fg)' = f'g + fg'$ for multiplied functions. That raises a question: when one function divides another, is there an analogous rule, and does the order of $f$ and $g$ matter? This card answers it → the quotient rule $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$, where order matters because of the subtraction in the numerator. When one function divides another, the quotient rule handles the differentiation, with a crucial subtraction in the numerator and the denominator squared on the bottom. $$\frac{d}{dx}\!\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)\,g(x) - f(x)\,g'(x)}{[g(x)]^2}$$ Memory aid: "lo d(hi) minus hi d(lo), over lo squared", or "derivative of top times bottom minus top times derivative of bottom, all over bottom squared." Example 1: $y = \dfrac{\sin x}{x^2}$. Let $f = \sin x$, $g = x^2$. Then $f' = \cos x$, $g' = 2x$. $$y' = \frac{\cos x \cdot x^2 - \sin x \cdot 2x}{x^4} = \frac{x(x\cos x - 2\sin x)}{x^4} = \frac{x\cos x - 2\sin x}{x^3}$$ Example 2: $y = \dfrac{e^x}{x+1}$. Then $f' = e^x$, $g' = 1$. $$y' = \frac{e^x(x+1) - e^x \cdot 1}{(x+1)^2} = \frac{e^x(x+1-1)}{(x+1)^2} = \frac{xe^x}{(x+1)^2}$$
        Factor $e^x$ from the numerator before simplifying, it almost always cancels or cleans up the expression. Quotient vs product rule: $\dfrac{f}{g} = f \cdot g^{-1}$, so both rules work. The quotient rule is usually cleaner when $g$ is a simple expression. Using the product rule with $g^{-1}$ can avoid the "over bottom squared" step for messy denominators. Quotient rule: $\left(\dfrac{f}{g}\right)' = \dfrac{f'g - fg'}{g^2}$, the order matters: it's subtraction, not addition.; Mnemonic: "lo d(hi) minus hi d(lo), over lo squared." Pause, copy the quotient rule $\left(\dfrac{f}{g}\right)' = \dfrac{f'g - fg'}{g^2}$ and the mnemonic "lo d(hi) minus hi d(lo), over lo squared" into your book. True or false: $\dfrac{d}{dx}\!\left[\dfrac{e^x}{x}\right] = \dfrac{e^x(x-1)}{x^2}$. ✓ True ✗ False True. Quotient rule: $f = e^x$, $f' = e^x$, $g = x$, $g' = 1$. So $y' = \dfrac{e^x \cdot x - e^x \cdot 1}{x^2} = \dfrac{e^x(x-1)}{x^2}$.

## 3. Recalculation and domain check

- we-1: (x³sin2x)′=3x²sin2x+2x³cos2x=x²(3sin2x+2xcos2x).

- Site core: (x²sinx)′=2xsinx+x²cosx.

- Site core: (e^xlnx)′=e^x(lnx+1/x), x>0.

- Site core: (xcos3x)′=cos3x-3xsin3x.

- Cross-source DC01 we-2: (x²e^x)′=xe^x(x+2).

Every calculation listed here was independently recomputed. Deferred examples are source material for later videos, not permission to lengthen this one.

## 4. Misconceptions and exam-style traps

Multiplying the derivatives misses both product terms. Retain the undifferentiated factor in each term. Check for chain rule within either factor. Simplification is useful but equivalent correct derivatives are not automatically wrong or mark-losing. Sources: site product examples and Year11 ci72e90f3a; Year12 ci4f1f8ece. No claim is made about the frequency of these errors in marking of the first 2027 examination.

## 5. Visual needs against programme decision 4

Extended aligned algebra: two contribution rows with stable equals columns, then factor. General graph/tangent can confirm a transfer value. Needed extension: a two-term product contribution cue or small changing-area rectangle if used to recall why both terms appear; no people or painted algebra. All graphs, algebra and sign charts are coded in the shared paper-style maths kit. No painted graph or algebra plate is requested. Keep question givens visible throughout the 10-second response opportunity; use brief worked feedback and a key-notes hold.

## 6. Two original candidate practice questions

### Question 1

Differentiate f(x)=x²e^x and give a fully factorised answer.

**Worked answer:** u=x², v=e^x; u′=2x, v′=e^x. f′=2xe^x+x²e^x=xe^x(x+2).

### Question 2

Find the gradient of y=xsin(2x) at x=π/2.

**Worked answer:** y′=sin2x+2xcos2x. Atπ/2, sinπ=0 and cosπ=-1, so gradient=-π.

## 7. Site corrections and decisions for Claude

See [the site corrections log](../../site-corrections-maths-a12.md). The site was read only. Retain d07 after d06. Avoid re-teaching elementary product rule at length; the Year12 addition is the range of functions and combinations. Select exact examples and final lesson length during design. Resolve any logged source error before reusing it. Human listening and playback review remain later gates.
