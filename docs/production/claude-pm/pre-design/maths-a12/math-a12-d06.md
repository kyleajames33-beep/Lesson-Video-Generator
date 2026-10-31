# math-a12-d06: How do we apply the chain rule to exponential, log and trig functions?

Brief 128 research pack, 1 November 2026. This is source preparation for Claude, not a design, narration, build or approval. Original questions below are written for HSCScience in an HSC-style format; their suggested marks are not an official NESA marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci3eebb8d2`: Use the chain rule to differentiate functions of the form e f x [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).
- `ci004fc1ed`: Use the chain rule to differentiate functions of the form ln ⁡ f x [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).
- `ci04cbaf6f`: Use the chain rule to differentiate functions of the form sin ⁡ f x , cos ⁡ f x and tan ⁡ f x [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).
- `ci4f1f8ece`: Apply the product, quotient and chain rules to differentiate functions of the form f x g x , f x g x or f ( g ( x ) ) , where f ( x ) and g ( x ) are any of the functions within the scope of the Mathematics Advanced course [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

The `ci...` identifiers are NESA content-system codenames, not invented outcome numbers. The official `code` field is empty for these points. Exact source HTML with MathML is retained in the crosswalk and route inputs; the text above is a search aid whose spacing flattens mathematical layout. Use MathML when quoting an equation.

**Year 11 entry:** `ci00fa8fac` (Introduction to differentiation); `cie3d91a6e` (Introduction to differentiation). Exact wording, HTML and official links are in the route inputs.

**Start:** Recall the Year11 inner/outer rule, then substitute the new exponential, logarithmic and sine/cosine derivatives.

**Stop:** Differentiate focused mixed composites with domains stated. Leave products and quotients to d07/d08 and extended triple nesting to later practice.

**Next:** math-a12-d07: products of the new function families.

**Route recommendation:** d06 is an extension/refresher, not the first teaching of chain rule. A short chain recall belongs in d01-d04 proofs. Keep tan composites pending the separate tan-derivative home.

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

**Primary examples:** Use the named core-concept/interactive section; the page’s formal worked examples exceed this focused boundary.

### Original site example `we-1`

PROBLEM 1 · PRODUCT + CHAIN RULES Differentiate $y = x^3\sin(2x)$. Show full working. 1 Identify structure: $y = u \cdot v$ where $u = x^3$ and $v = \sin(2x)$. The outermost operation is multiplication, use the product rule. Check whether each component needs chain rule. 2 Find $u'$ and $v'$: $u = x^3 \Rightarrow u' = 3x^2$ $v = \sin(2x) \Rightarrow v' = 2\cos(2x)$  (chain rule: outer $\sin$, inner $2x$, inner derivative $= 2$) $\sin(2x)$ is a composite: outer function $\sin(\square)$ differentiates to $\cos(\square)$, multiplied by inner derivative $2$. 3 Apply product rule $u'v + uv'$: $y' = 3x^2\sin(2x) + x^3 \cdot 2\cos(2x)$ $y' = 3x^2\sin(2x) + 2x^3\cos(2x)$ $y' = x^2[3\sin(2x) + 2x\cos(2x)]$ Factor $x^2$ from both terms to present the answer in a clean, factored form. 1 of 3 Reveal next step →

### Original site example `we-2`

PROBLEM 2 · QUOTIENT RULE + TANGENT LINE Find the equation of the tangent to $y = \dfrac{\ln x}{\cos x}$ at $x = 1$. 1 Find the $y$-value at $x = 1$: $y(1) = \dfrac{\ln 1}{\cos 1} = \dfrac{0}{\cos 1} = 0$. Point: $(1,\ 0)$. Always find the $y$-coordinate first by substituting $x_0$ into the original equation. 2 Differentiate using the quotient rule. $f = \ln x$, $f' = \dfrac{1}{x}$; $g = \cos x$, $g' = -\sin x$. $$y' = \frac{\dfrac{1}{x}\cos x - \ln x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos x / x + \ln x \sin x}{\cos^2 x}$$ Quotient rule: $\dfrac{f'g - fg'}{g^2}$. Note $g' = -\sin x$, so the subtraction becomes addition. 3 Evaluate $y'$ at $x = 1$. $\ln 1 = 0$, so the $\ln x\sin x$ term vanishes: $y'(1) = \dfrac{\cos 1 / 1 + 0}{\cos^2 1} = \dfrac{\cos 1}{\cos^2 1} = \dfrac{1}{\cos 1} = \sec 1$. Tangent: $y - 0 = \sec 1 \cdot (x - 1)$, i.e. $y = (x-1)\sec 1$. Substituting $x=1$ simplifies greatly because $\ln 1 = 0$. The tangent passes through $(1, 0)$ with slope $\sec 1 \approx 1.851$. 1 of 3 Reveal next step →

### Original site example `we-3`

PROBLEM 3 · FULL EXAM-STYLE, TANGENT, NORMAL, INTERSECTION For $y = xe^{-x}$: (a) find the equation of the tangent at $x = 1$, (b) find the equation of the normal at $x = 1$, (c) find where the tangent meets the $x$-axis. 1 Find the point. At $x = 1$: $y = 1 \cdot e^{-1} = e^{-1}$. Point: $\left(1,\ \dfrac{1}{e}\right)$. Substitute $x = 1$ into the original equation to get the $y$-coordinate. 2 Differentiate. Product rule: $u = x$, $v = e^{-x}$; $u' = 1$, $v' = -e^{-x}$. $y' = e^{-x} + x(-e^{-x}) = e^{-x}(1-x)$. At $x = 1$: $m_T = e^{-1}(1-1) = 0$. Horizontal tangent at $x = 1$, the slope is zero. The function has a stationary point here. 3 Part (a) Tangent: $m_T = 0$, so $y = \dfrac{1}{e}$ (horizontal line). Part (b) Normal: $m_T = 0$ means vertical normal: $x = 1$. Part (c) Where does $y = \dfrac{1}{e}$ meet the $x$-axis? The $x$-axis is $y = 0$. But $y = \dfrac{1}{e} \neq 0$, the tangent is horizontal and never meets the $x$-axis. It is parallel to it. A horizontal tangent is a special case: its normal is vertical, and if the tangent is not the $x$-axis itself, it never meets it. Award full marks for recognising this clearly. 1 of 3 Reveal next step →

### Core source excerpt `apply-chain-rule-and-tangents`

3 Use the chain rule and find tangents Differentiate composites, then find tangents and normals. 07 The Chain Rule: Composites with Mixed Functions core concept We just saw the product and quotient rules, both handle two functions side-by-side. That raises a question: what rule applies when one function is plugged inside another, such as $\ln(\cos x)$ or $e^{\sin x}$? This card answers it → the chain rule $[f(g(x))]' = f'(g(x)) \cdot g'(x)$: differentiate outside (leaving inside untouched), then multiply by the inside's derivative. The chain rule applies whenever one function is plugged inside another, a composite. The key step is identifying what is "outside" and what is "inside," then multiplying the two derivatives. $$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$ Rule of thumb: differentiate the outer function (leaving the inside unchanged), then multiply by the derivative of the inside. Mixing trig, exp and log via chain rule: $y = \sin(e^x)$: outer $\sin(\square)$, inner $e^x$. $y' = \cos(e^x) \cdot e^x$. $y = e^{\sin x}$: outer $e^{\square}$, inner $\sin x$. $y' = e^{\sin x} \cdot \cos x$. $y = \ln(\cos x)$: outer $\ln(\square)$, inner $\cos x$. $y' = \dfrac{1}{\cos x} \cdot (-\sin x) = -\tan x$. $y = \sqrt{\sin(2x)}$: outer $\sqrt{\square} = (\square)^{1/2}$, inner $\sin(2x)$. Note: $\sin(2x)$ is itself a composite, apply chain rule to it: inner derivative $= 2\cos(2x)$. $y' = \dfrac{1}{2}[\sin(2x)]^{-1/2} \cdot 2\cos(2x) = \dfrac{\cos(2x)}{\sqrt{\sin(2x)}}$. Triple chain rule, $y = \sin^2(3x)$: Rewrite as $[\sin(3x)]^2$. Three layers: $[\square]^2$, then $\sin(\square)$, then $3x$. $y' = 2\sin(3x) \cdot \cos(3x) \cdot 3 = 6\sin(3x)\cos(3x) = 3\sin(6x)$. (Used $2\sin A\cos A = \sin(2A)$ to simplify.) Chain rule: $[f(g(x))]' = f'(g(x)) \cdot g'(x)$, differentiate outside (leave inside alone), multiply by inside derivative.; $\ln(\cos x) \Rightarrow y' = -\tan x$, worth memorising as a result. Pause, copy the chain rule $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ and the key result $\dfrac{d}{dx}\ln(\cos x) = -\tan x$ into your book. Quick check: $\dfrac{d}{dx}[\ln(\cos x)] = ?$ A, $\tan x$ B, $-\tan x$ C, $\sec x$ D, $-\sec x$ Interactive · Chain rule stepper Try this: build a composite from an outside and an inside, reveal the five steps, then move $x$ and press Compare to see which of the three candidate derivatives matches the gradient measured from the curve. Finish with the Challenge . Use the stepper. Choose outside $(\square)^3$ and inside $x^2 + 1$, set $x = 1$ and press Compare . The gradient measured from the curve is and the forgot the inside candidate gives . (Whole numbers.) Check answers Use the stepper. Reset to $y = \sin(3x)$, set $x = 0.5$ and press Compare . True or false: the candidate $\cos(3x)$ on its own matches the measured gradient, so $\dfrac{d}{dx}\sin(3x) = \cos(3x)$. True False 08 Tangents and Normals: The Full Toolkit core concept We just saw the three differentiation rules, product, quotient, and chain, for computing $f'(x)$. That raises a question: once you have the derivative at a specific point, how do you write the equation of the tangent or normal line to the curve? This card answers it → evaluate $m_T = f'(x_0)$, then apply point-slope form $y - y_0 = m_T(x - x_0)$; for the normal use $m_N = -1/m_T$, which needs $m_T \ne 0$. The derivative gives the exact slope of the curve at any point. Once you have the slope, writing the equation of the tangent or normal is just point-slope form. At a point $(x_0, y_0)$ on a curve $y = f(x)$: Tangent slope: $m_T = f'(x_0)$. Normal slope: $m_N = -\dfrac{1}{m_T}$ (perpendicular, slopes multiply to $-1$). Special cases: if $m_T = 0$, the tangent is horizontal ($y = y_0$) and the normal is vertical ($x = x_0$). If $m_T$ is undefined (rare in this course), tangent is vertical and normal is horizontal. $$\text{Tangent: } y - y_0 = m_T(x - x_0)$$
          $$\text{Normal: } y - y_0 = m_N(x - x_0) \quad m_N = -\frac{1}{m_T}$$ Worked: $y = xe^x$ at $x = 0$. $y' = e^x + xe^x = e^x(1+x)$. At $x = 0$: $y = 0$, $y' = e^0(1+0) = 1$. Tangent: $y - 0 = 1(x - 0)$ → $y = x$. Normal: $m_N = -1$. Normal: $y = -x$. Worked: $y = \ln(\sin x)$ at $x = \pi/2$. $y' = \dfrac{\cos x}{\sin x} = \cot x$. At $x = \pi/2$: $y = \ln(1) = 0$, $y' = \cot(\pi/2) = 0$. Horizontal tangent at $\left(\dfrac{\pi}{2}, 0\right)$: equation $y = 0$. Normal (vertical): $x = \dfrac{\pi}{2}$. Tangent at $(x_0, y_0)$: find $m_T = f'(x_0)$, then use $y - y_0 = m_T(x-x_0)$.; Normal at $(x_0, y_0)$: $m_N = -1/m_T$, same point-slope form. Pause, copy the tangent formula $y - y_0 = m_T(x-x_0)$ where $m_T = f'(x_0)$ and the normal slope $m_N = -1/m_T$, valid when $m_T \ne 0$ (if $m_T = 0$ the normal is $x = x_0$), into your book. Fill the blanks: For $y = x^2\cos x$, differentiating gives $y' = 2x\cos x - x^2\sin x$. At $x = \pi$: $y' = 2\pi(-1) - \pi^2(0) =$ . The gradient of the tangent at $x = \pi$ is . The normal slope is . Check

## 3. Recalculation and domain check

- Site core: (sin(e^x))′=e^xcos(e^x), all real x. (e^(sinx))′=e^(sinx)cosx, all real x.

- Site core: (ln(cosx))′=-tanx on cosx>0, not merely cosx≠0.

- Site core: (sqrt(sin2x))′=cos2x/sqrt(sin2x) on sin2x>0. The original real function exists at boundary zeros but this derivative formula does not give a finite derivative there.

- Site stepper: y=(x²+1)³ has y′=6x(x²+1)². At x=1 the true gradient24 differs from the omitted-inner-factor answer12.

- Site triple chain (defer): (sin²3x)′=6sin3xcos3x=3sin6x.

Every calculation listed here was independently recomputed. Deferred examples are source material for later videos, not permission to lengthen this one.

## 4. Misconceptions and exam-style traps

Differentiate the outer function at the inner expression, not at x. Keep the original domain after simplifying. For ln(cosx), require cosx>0. Sources: site core examples and NESA ci3eebb8d2/ci004fc1ed/ci04cbaf6f. No claim is made about the frequency of these errors in marking of the first 2027 examination.

## 5. Visual needs against programme decision 4

Extended aligned algebra with separate inner and outer slots and a retained inner derivative. General graph and moving tangent compare measured gradient24 against wrong12 for the site stepper at x=1. Keep only the current nested expression bright. Sign chart only to show composite-log domain intervals. All graphs, algebra and sign charts are coded in the shared paper-style maths kit. No painted graph or algebra plate is requested. Keep question givens visible throughout the 10-second response opportunity; use brief worked feedback and a key-notes hold.

## 6. Two original candidate practice questions

### Question 1

Differentiate y=ln(x²+4) and state its real domain.

**Worked answer:** Let u=x²+4, u′=2x. Then y′=2x/(x²+4). Since x²+4>0, domain is all real x.

### Question 2

Differentiate y=e^(sin x), then find the gradient at x=π.

**Worked answer:** Outer exponential stays e^(sinx); multiply by cosx. Thus y′=e^(sinx)cosx and y′(π)=-1.

## 7. Site corrections and decisions for Claude

See [the site corrections log](../../site-corrections-maths-a12.md). The site was read only. d06 is an extension/refresher, not the first teaching of chain rule. A short chain recall belongs in d01-d04 proofs. Keep tan composites pending the separate tan-derivative home. Select exact examples and final lesson length during design. Resolve any logged source error before reusing it. Human listening and playback review remain later gates.
