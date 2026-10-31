# math-a12-d05: How do the sine and cosine graphs reveal their derivatives?

Brief 128 research pack, 1 November 2026. This is source preparation for Claude, not a design, narration, build or approval. Original questions below are written for HSCScience in an HSC-style format; their suggested marks are not an official NESA marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci55bbcbd8`: Determine the formulas d dx sin ⁡ x = cos ⁡ x and d dx cos ⁡ x = - sin ⁡ x informally by using the graphs of y = sin ⁡ x and y = cos ⁡ x and verify with graphing applications [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

The `ci...` identifiers are NESA content-system codenames, not invented outcome numbers. The official `code` field is empty for these points. Exact source HTML with MathML is retained in the crosswalk and route inputs; the text above is a search aid whose spacing flattens mathematical layout. Use MathML when quoting an equation.

**Year 11 entry:** `cid79268a8` (Trigonometry and measure of angles); `ciccaa78be` (Trigonometry and measure of angles); `cie4815a8e` (Introduction to differentiation); `ci447b12b9` (Introduction to differentiation). Exact wording, HTML and official links are in the route inputs.

**Start:** Read the tangent gradient along y=sin x with x in radians and build its gradient graph.

**Stop:** Establish and verify sin′=cos and cos′=-sin. Keep tan, reciprocal derivatives, composite trig and motion for later focused videos.

**Next:** math-a12-d06: apply the chain rule to the new function families.

**Route recommendation:** Keep the focused sine/cosine opener. Add explicit later homes for tan proof, sec/cosec/cot and tangent/normal transfer. The ten-video draft does not complete Differential calculus. Do not import every topic from site L05 into d05.

## 2. Site order, sections and worked examples

Read-only source: [differential-calculus/lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson05.sa). Source SHA256: `db0b045dcd7d18b9fe84ed1e03d77f93564a690c792680aa9e139ad5bda4be68`.

- `orient-trig-derivatives`: Get oriented.
- `read-and-prove-trig-derivatives`: Read and prove the derivatives.
- `apply-chain-rule-to-trig`: Use the chain rule.
- `apply-trig-derivatives`: Apply them in context.
- `work-trig-examples`: Work through examples.
- `consolidate-trig-derivatives`: Revisit and consolidate.
- `practise-trig-derivatives`: Practise trig derivatives.
- `finish-trig-derivatives`: Finish the lesson.

The page includes later material. Only the examples named as primary below belong to this pack's proposed boundary; all original worked examples are retained here for Claude to assign without changing their numbers.

**Primary examples:** Use the named core-concept/interactive section; the page’s formal worked examples exceed this focused boundary.

### Original site example `we-1`

PROBLEM 1 · BASIC CHAIN RULE Differentiate: (a) $y = 3\sin(5x)$, (b) $y = \cos(x^2 + 1)$, (c) $y = \tan\!\left(2x - \dfrac{\pi}{3}\right)$. 1 Part (a): $y = 3\sin(5x)$ Inner: $u = 5x$, inner derivative $= 5$ Outer: $\sin \to \cos$ $y' = 3 \times 5\cos(5x) = 15\cos(5x)$ Chain rule: the 5 from the inner derivative multiplies, then the 3 coefficient stays. Total multiplier = $3 \times 5 = 15$. 2 Part (b): $y = \cos(x^2 + 1)$ Inner: $u = x^2 + 1$, inner derivative $= 2x$ Outer: $\cos \to -\sin$ $y' = -2x\sin(x^2 + 1)$ The inner derivative is $2x$ (not a constant), so it stays as a factor. The negative sign comes from the outer derivative of cosine. 3 Part (c): $y = \tan\!\left(2x - \dfrac{\pi}{3}\right)$ Inner: $u = 2x - \dfrac{\pi}{3}$, inner derivative $= 2$ Outer: $\tan \to \sec^2$ $y' = 2\sec^2\!\left(2x - \dfrac{\pi}{3}\right)$ The $-\frac{\pi}{3}$ is a constant, its derivative is 0, so only the $2x$ contributes the inner derivative of 2. 1 of 3 Reveal next step →

### Original site example `we-2`

PROBLEM 2 · PARTICLE MOTION A particle moves with displacement $x(t) = 4\sin(3t) - 2\cos(t)$ metres at time $t$ seconds. Find the velocity $v(t)$ and acceleration $a(t)$. Find all times in $[0, 2\pi]$ when the particle is momentarily at rest. 1 Velocity: $v(t) = x'(t)$ $\dfrac{d}{dt}[4\sin(3t)] = 4 \times 3\cos(3t) = 12\cos(3t)$ $\dfrac{d}{dt}[-2\cos(t)] = -2 \times (-\sin t) = 2\sin t$ $v(t) = 12\cos(3t) + 2\sin t$ Differentiate term by term. Chain rule on $\sin(3t)$: multiply by 3. The $-\cos t$ term: outer derivative is $-(-\sin t) = \sin t$, multiplied by the coefficient $-2$ gives $+2\sin t$. 2 Acceleration: $a(t) = v'(t)$ $\dfrac{d}{dt}[12\cos(3t)] = 12 \times (-3\sin(3t)) = -36\sin(3t)$ $\dfrac{d}{dt}[2\sin t] = 2\cos t$ $a(t) = -36\sin(3t) + 2\cos t$ Differentiate $v(t)$ term by term again. Chain rule on $\cos(3t)$: multiply by $-3$. 3 At rest: $v(t) = 0$ $12\cos(3t) + 2\sin t = 0$ This is a transcendental equation, in the HSC context, check specific values or use a graphing application. For the simplified version $v(t) = 12\cos(3t)$: at rest when $\cos(3t) = 0$, i.e. $3t = \dfrac{\pi}{2} + k\pi$, so $t = \dfrac{\pi}{6}, \dfrac{\pi}{2}, \dfrac{5\pi}{6}, \ldots$ Setting velocity to zero finds when the particle momentarily stops. The general solution uses the periodicity of cosine. Full solutions in $[0, 2\pi]$ require checking all valid $k$ values. 1 of 3 Reveal next step →

### Original site example `we-3`

PROBLEM 3 · TANGENT AND NORMAL Find the equation of the tangent to $y = \cos(2x)$ at the point where $x = \dfrac{\pi}{6}$. Then find the equation of the normal at the same point. 1 Find the point on the curve: $y = \cos\!\left(2 \times \dfrac{\pi}{6}\right) = \cos\!\left(\dfrac{\pi}{3}\right) = \dfrac{1}{2}$ Point: $\left(\dfrac{\pi}{6},\, \dfrac{1}{2}\right)$ Substitute $x = \frac{\pi}{6}$ to find the $y$-coordinate. $\cos\frac{\pi}{3} = \frac{1}{2}$ from the exact value triangle. 2 Find the gradient: $\dfrac{dy}{dx} = -2\sin(2x)$ At $x = \dfrac{\pi}{6}$: $m_T = -2\sin\!\left(\dfrac{\pi}{3}\right) = -2 \times \dfrac{\sqrt{3}}{2} = -\sqrt{3}$ Differentiate using chain rule. Substitute $x = \frac{\pi}{6}$. $\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$ from the exact value table. 3 Tangent equation: $y - \dfrac{1}{2} = -\sqrt{3}\!\left(x - \dfrac{\pi}{6}\right)$ $y = -\sqrt{3}x + \dfrac{\pi\sqrt{3}}{6} + \dfrac{1}{2}$ Use point-slope form $y - y_1 = m(x - x_1)$ with $m = -\sqrt{3}$ and the point $\left(\frac{\pi}{6}, \frac{1}{2}\right)$. 4 Normal gradient: $m_N = -\dfrac{1}{m_T} = -\dfrac{1}{-\sqrt{3}} = \dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$ Normal equation: $y - \dfrac{1}{2} = \dfrac{1}{\sqrt{3}}\!\left(x - \dfrac{\pi}{6}\right)$ The normal is perpendicular to the tangent, so $m_N = -\frac{1}{m_T}$, which needs $m_T$ to be non-zero (a horizontal tangent has a vertical normal $x = x_0$ instead). Rationalise $\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$ for the cleanest form. 1 of 4 Reveal next step →

## 3. Recalculation and domain check

- we-1 (defer composites to d06): (3sin5x)′=15cos5x; (cos(x²+1))′=-2xsin(x²+1); (tan(2x-π/3))′=2sec²(2x-π/3).

- we-2 (defer motion): x(t)=4sin3t-2cost, v=12cos3t+2sint, a=-36sin3t+2cost. The correct rest times in[0,2π] are approximately0.552807,1.515068,2.644514,3.694400,4.656660,5.786107 seconds. The site switches to a different velocity and does not solve the stated problem.

- we-3 (defer tangents): at x=π/6, y=cos2x=1/2, mT=-2sin(π/3)=-√3, mN=1/√3. Tangent y-1/2=-√3(x-π/6); normal y-1/2=(x-π/6)/√3.

Every calculation listed here was independently recomputed. Deferred examples are source material for later videos, not permission to lengthen this one.

## 4. Misconceptions and exam-style traps

Radians are required for these unscaled formulas. At a sine maximum the height is1 but the gradient is0. The cosine derivative carries the minus sign. A tangent is defined by local slope, not by touching a graph exactly once. Sources: site graph reading and NESA ci55bbcbd8. No claim is made about the frequency of these errors in marking of the first 2027 examination.

## 5. Visual needs against programme decision 4

General function graph: synchronized sine/cosine plots with radian ticks. Moving tangent: sample gradients at0,π/2,π,3π/2 and trace the derivative curve. Local zoom can clarify slope at a flat point. Aligned algebra only for final derivative statements. Distinguish a curve label from its derivative. All graphs, algebra and sign charts are coded in the shared paper-style maths kit. No painted graph or algebra plate is requested. Keep question givens visible throughout the 10-second response opportunity; use brief worked feedback and a key-notes hold.

## 6. Two original candidate practice questions

### Question 1

For f(x)=sin x, state f′(x), and find the gradients at x=π/2 and x=π.

**Worked answer:** f′=cosx in radians. f′(π/2)=0; f′(π)=-1.

### Question 2

Let g(x)=2cos x+sin x. Find g′(x) and the tangent gradient at x=0.

**Worked answer:** g′=-2sinx+cosx. At0, the gradient is1. The coefficient2 multiplies the cosine derivative; the minus sign is retained.

## 7. Site corrections and decisions for Claude

See [the site corrections log](../../site-corrections-maths-a12.md). The site was read only. Keep the focused sine/cosine opener. Add explicit later homes for tan proof, sec/cosec/cot and tangent/normal transfer. The ten-video draft does not complete Differential calculus. Do not import every topic from site L05 into d05. Select exact examples and final lesson length during design. Resolve any logged source error before reusing it. Human listening and playback review remain later gates.
