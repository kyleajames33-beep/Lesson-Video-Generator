# math-a12-i14: How do displacement, velocity and acceleration connect in both directions?

Brief 151 research pack, 2 November 2026. Preparation for Claude, not design, narration, build or approval. Practice questions are original HSCScience questions, not official examination items.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci80c103cc`: Use differentiation to find and interpret the first and second derivatives, dQ dt and d 2 Q d t 2 , in practical problems where a quantity Q is a function of time t [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci33a217e6`: Use integration to solve practical problems on the rate of change of a quantity Q , where dQ dt or d 2 Q d t 2 is given as a function of time t , together with sufficient initial conditions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci63604628`: Determine the velocity and acceleration of a particle moving in a straight line given its displacement from a point as a function of time, and use the notation d 2 x d t 2 or x ¨ to represent acceleration [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci0c66d890`: Solve problems relating to the motion of a particle moving in a straight line, using both differentiation and integration to connect the concepts of displacement, velocity and acceleration [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).

These are CMS codenames, not published outcome numbers. Exact official HTML and MathML are retained in the route fragment; read formula layout there rather than reconstructing it from flattened text.

Year 11 entry:
- `ci05229304` (Introduction to differentiation): Define and distinguish between displacement and distance and between velocity and speed [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- `ci8a1ba332` (Introduction to differentiation): Use the notation dx dt or x ̇ to represent the velocity of a particle with displacement x from a point as a function of time t [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- `ci1be28612` (Introduction to differentiation): Solve problems by determining the velocity of a particle moving in a straight line, given its displacement from a point as a function of time [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- `ci1d192d62` (Introduction to differentiation): Use the formula d dx ( x n ) = n x n - 1 for all real values of n [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).
- `cif6a6cb7d` (Introduction to differentiation): Apply the fact that the derivative of a sum is the sum of the derivatives: d dx f x + g x = f ' x + g ' ( x ) , and the derivative of a multiple of a function is the multiple of its derivative: d dx ( k ⋅ f x ) = k ⋅ f ' ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678).

Stage 5 entry: labelled Cartesian coordinates, substitution, simple rearrangement and area units. These are prerequisite assumptions, not newly quoted Year 11 points.
Prior videos: math-a12-i01, math-a12-i05, math-a12-i13, math-a12-d11.

Start: Retain i13 velocity function and its displacement interpretation; introduce its derivative as acceleration, then reverse the chain using initial conditions.

Stop: Interpret Q, first rate and second rate; connect x,v,a by differentiation and integration, use each needed initial condition and calculate motion quantities. Do not introduce differential-equation solution methods beyond direct integration.

Next: math-a12-f01: end the calculus strand with the complete Q→Q′→Q″ and reverse chain; the course outline next opens finance and its cash-flow models.

## 2. Site order, sections and worked examples

Read-only source: `C:\Users\kygs\hscscience\subjects\maths-advanced\year12\applications-of-calculus\lesson03.sa.html` ([site](https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson03.sa.html)), SHA256 `7808d84c67aadc6f33fbe7844f4cf12a47f1ed63a2574d6a3d35c2901e02f40c`.

Actual `data-step-id` values: `orient-motion-applications`, `relate-position-velocity-acceleration`, `work-motion-examples`, `avoid-motion-traps`, `drill-motion-problems`, `consolidate-motion-applications`, `practise-motion-applications`, `finish-motion-applications`.

### applications-of-calculus/lesson03.sa.html, `we-1`
PROBLEM 1 · FIND POSITION FROM ACCELERATION A particle has $a(t) = 6t - 4$ m/s². Initially at rest at the origin. Find its position at $t = 2$. 1 $v(t) = \int (6t-4)\,dt = 3t^2 - 4t + C_1$. $v(0)=0 \implies C_1 = 0$ Integrate $a$ to get $v$; use $v(0) = 0$ (at rest). 2 $x(t) = \int (3t^2-4t)\,dt = t^3 - 2t^2 + C_2$. $x(0)=0 \implies C_2=0$ Integrate $v$ to get $x$; use $x(0) = 0$ (at origin). 3 $x(2) = 8 - 8 = 0$ metres Substitute $t = 2$. The particle returned to its starting point! 1 of 3 Reveal next step →

### applications-of-calculus/lesson03.sa.html, `we-2`
PROBLEM 2 · TOTAL DISTANCE TRAVELLED A particle has velocity $v(t) = t^2 - 4t + 3$ m/s. Find the total distance from $t = 0$ to $t = 3$. 1 $v(t) = (t-1)(t-3)$. Zeroes at $t = 1$ and $t = 3$ Factor to find when particle reverses. On $[0,1]$: $v \geq 0$. On $[1,3]$: $v \leq 0$. 2 Distance $= \int_0^1 v\,dt + \int_1^3 (-v)\,dt$ Use $|v|$: positive on first interval, negate on second. 3 $= \left[\tfrac{t^3}{3}-2t^2+3t\right]_0^1 + \left[-\tfrac{t^3}{3}+2t^2-3t\right]_1^3 = \tfrac{4}{3} + \tfrac{4}{3} = \dfrac{8}{3}$ metres Evaluate each piece. Total distance $= \frac{8}{3}$ m, even though displacement $= x(3) - x(0) = 0$. 1 of 3 Reveal next step →

### applications-of-calculus/lesson03.sa.html, `we-3`
PROBLEM 3 · WITH INITIAL CONDITIONS A particle has $a(t) = 2$ m/s². At $t = 0$: $v = 5$ m/s, $x = 10$ m. Find $x(t)$. 1 $v(t) = \int 2\,dt = 2t + C_1$. $v(0) = 5 \implies C_1 = 5$ Integrate $a = 2$; apply $v(0) = 5$. 2 $x(t) = \int (2t+5)\,dt = t^2 + 5t + C_2$. $x(0) = 10 \implies C_2 = 10$ Integrate $v$; apply $x(0) = 10$. 3 $x(t) = t^2 + 5t + 10$ metres This is the complete position function, both constants determined by initial conditions. 1 of 3 Reveal next step →

Read-only source: `C:\Users\kygs\hscscience\subjects\maths-advanced\year12\differential-calculus\lesson05.sa.html` ([site](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson05.sa.html)), SHA256 `db0b045dcd7d18b9fe84ed1e03d77f93564a690c792680aa9e139ad5bda4be68`.

Actual `data-step-id` values: `orient-trig-derivatives`, `read-and-prove-trig-derivatives`, `apply-chain-rule-to-trig`, `apply-trig-derivatives`, `work-trig-examples`, `consolidate-trig-derivatives`, `practise-trig-derivatives`, `finish-trig-derivatives`.

### differential-calculus/lesson05.sa.html, `we-1`
PROBLEM 1 · BASIC CHAIN RULE Differentiate: (a) $y = 3\sin(5x)$, (b) $y = \cos(x^2 + 1)$, (c) $y = \tan\!\left(2x - \dfrac{\pi}{3}\right)$. 1 Part (a): $y = 3\sin(5x)$ Inner: $u = 5x$, inner derivative $= 5$ Outer: $\sin \to \cos$ $y' = 3 \times 5\cos(5x) = 15\cos(5x)$ Chain rule: the 5 from the inner derivative multiplies, then the 3 coefficient stays. Total multiplier = $3 \times 5 = 15$. 2 Part (b): $y = \cos(x^2 + 1)$ Inner: $u = x^2 + 1$, inner derivative $= 2x$ Outer: $\cos \to -\sin$ $y' = -2x\sin(x^2 + 1)$ The inner derivative is $2x$ (not a constant), so it stays as a factor. The negative sign comes from the outer derivative of cosine. 3 Part (c): $y = \tan\!\left(2x - \dfrac{\pi}{3}\right)$ Inner: $u = 2x - \dfrac{\pi}{3}$, inner derivative $= 2$ Outer: $\tan \to \sec^2$ $y' = 2\sec^2\!\left(2x - \dfrac{\pi}{3}\right)$ The $-\frac{\pi}{3}$ is a constant, its derivative is 0, so only the $2x$ contributes the inner derivative of 2. 1 of 3 Reveal next step →

### differential-calculus/lesson05.sa.html, `we-2`
PROBLEM 2 · PARTICLE MOTION A particle moves with displacement $x(t) = 4\sin(3t) - 2\cos(t)$ metres at time $t$ seconds. Find the velocity $v(t)$ and acceleration $a(t)$. Find all times in $[0, 2\pi]$ when the particle is momentarily at rest. 1 Velocity: $v(t) = x'(t)$ $\dfrac{d}{dt}[4\sin(3t)] = 4 \times 3\cos(3t) = 12\cos(3t)$ $\dfrac{d}{dt}[-2\cos(t)] = -2 \times (-\sin t) = 2\sin t$ $v(t) = 12\cos(3t) + 2\sin t$ Differentiate term by term. Chain rule on $\sin(3t)$: multiply by 3. The $-\cos t$ term: outer derivative is $-(-\sin t) = \sin t$, multiplied by the coefficient $-2$ gives $+2\sin t$. 2 Acceleration: $a(t) = v'(t)$ $\dfrac{d}{dt}[12\cos(3t)] = 12 \times (-3\sin(3t)) = -36\sin(3t)$ $\dfrac{d}{dt}[2\sin t] = 2\cos t$ $a(t) = -36\sin(3t) + 2\cos t$ Differentiate $v(t)$ term by term again. Chain rule on $\cos(3t)$: multiply by $-3$. 3 At rest: $v(t) = 0$ $12\cos(3t) + 2\sin t = 0$ This is a transcendental equation, in the HSC context, check specific values or use a graphing application. For the simplified version $v(t) = 12\cos(3t)$: at rest when $\cos(3t) = 0$, i.e. $3t = \dfrac{\pi}{2} + k\pi$, so $t = \dfrac{\pi}{6}, \dfrac{\pi}{2}, \dfrac{5\pi}{6}, \ldots$ Setting velocity to zero finds when the particle momentarily stops. The general solution uses the periodicity of cosine. Full solutions in $[0, 2\pi]$ require checking all valid $k$ values. 1 of 3 Reveal next step →

### differential-calculus/lesson05.sa.html, `we-3`
PROBLEM 3 · TANGENT AND NORMAL Find the equation of the tangent to $y = \cos(2x)$ at the point where $x = \dfrac{\pi}{6}$. Then find the equation of the normal at the same point. 1 Find the point on the curve: $y = \cos\!\left(2 \times \dfrac{\pi}{6}\right) = \cos\!\left(\dfrac{\pi}{3}\right) = \dfrac{1}{2}$ Point: $\left(\dfrac{\pi}{6},\, \dfrac{1}{2}\right)$ Substitute $x = \frac{\pi}{6}$ to find the $y$-coordinate. $\cos\frac{\pi}{3} = \frac{1}{2}$ from the exact value triangle. 2 Find the gradient: $\dfrac{dy}{dx} = -2\sin(2x)$ At $x = \dfrac{\pi}{6}$: $m_T = -2\sin\!\left(\dfrac{\pi}{3}\right) = -2 \times \dfrac{\sqrt{3}}{2} = -\sqrt{3}$ Differentiate using chain rule. Substitute $x = \frac{\pi}{6}$. $\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$ from the exact value table. 3 Tangent equation: $y - \dfrac{1}{2} = -\sqrt{3}\!\left(x - \dfrac{\pi}{6}\right)$ $y = -\sqrt{3}x + \dfrac{\pi\sqrt{3}}{6} + \dfrac{1}{2}$ Use point-slope form $y - y_1 = m(x - x_1)$ with $m = -\sqrt{3}$ and the point $\left(\frac{\pi}{6}, \frac{1}{2}\right)$. 4 Normal gradient: $m_N = -\dfrac{1}{m_T} = -\dfrac{1}{-\sqrt{3}} = \dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$ Normal equation: $y - \dfrac{1}{2} = \dfrac{1}{\sqrt{3}}\!\left(x - \dfrac{\pi}{6}\right)$ The normal is perpendicular to the tangent, so $m_N = -\frac{1}{m_T}$, which needs $m_T$ to be non-zero (a horizontal tangent has a vertical normal $x = x_0$ instead). Rationalise $\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$ for the cleanest form. 1 of 4 Reveal next step →

The full source examples above retain the exact site numbers. Tasks beyond the start and stop remain source context; Claude should choose a readable sequence rather than fit every task into the video.

## 3. Recalculation, units and domain check

AC03 we-1: a(t)=6t−4, initially at rest at the origin, gives v=3t²−4t and x=t³−2t². At t=2, x=0 but v=4, so return to origin does not mean rest. Interior turn is t=4/3, x=−32/27; distance from 0 to 2 is 64/27. AC03 we-2: v=t²−4t+3 on [0,3], roots 1 and 3, displacement 0, distance 8/3. AC03 we-3: a=2, v(0)=5, x(0)=10 gives v=2t+5 and x=t²+5t+10. Integrating twice requires two constants determined by two independent initial conditions.

DC05 we-2: x(t)=4sin(3t)−2cos t for 0≤t≤2π gives v=12cos(3t)+2sin t and a=−36sin(3t)+2cos t. Keep radians. The site drops the 2sin t term when finding rest times. Actual roots of the full velocity are approximately 0.552807,1.515068,2.644514,3.694400,4.656660,5.786107 seconds; at π/6, actual velocity is 1, not zero. This already has corrections-log item 15. Use the full function, not a silent simpler replacement.

General quantity chain: if Q is measured in units U and t in seconds, Q′ has U/s and Q″ has U/s². An integral of Q′ gives a change or Q plus a constant; Q(t₀) fixes it. Repeated integration of Q″ needs both a quantity and first-rate condition. Speed is |v|, rest means v=0, and total distance splits at actual velocity sign changes.

All numerical results were independently recalculated in `work/brief151/integral-b-check.py`; `integral-b-calculations.json` records 65 passing checks. Keep exact values until the final decimal.

## 4. Misconceptions and HSC-style traps

Initial rest does not mean zero initial displacement. Each independent integration introduces its own constant. A stationary time is found from velocity, not displacement. Returning to the starting point may involve substantial distance. Positive acceleration alone does not mean increasing speed; check the signs of velocity and acceleration if that extension is used.

These are mathematical consequences of the functions and conditions above, not claims about examination marking frequency.

## 5. Visual needs against programme decision 4

Existing FunctionGraph, AlignedAlgebra, IntegralNotation, ReadoutPanel, ExpressionSlot and DomainStrip. Reuse signed-area overlay from i10 and an aligned x↔v↔a chain with independent initial-condition slots. Link a moving position marker to velocity signs and area; retain only current state rather than three dense simultaneous derivations.

Use the existing mathematical visual language and shared kit. No implementation is authorised by this research pack.

## 6. Two original candidate question cards and worked answers

### Candidate 1: card
A particle has acceleration a(t)=4t−6 m/s² for 0≤t≤3. Its initial velocity is 2 m/s and its initial position is 5 m. Find v(t), x(t), its position at t=3 and the total distance travelled from t=0 to t=3.

### Candidate 1: worked answer
v=2t²−6t+2; x=(2/3)t³−3t²+2t+5; x(3)=2 m. Velocity zeros are (3±√5)/2. Split the displacement function at both roots; total distance=−3+10√5/3≈4.453560 m.

### Candidate 2: card
A particle has displacement x(t)=t³−6t²+9t metres for 0≤t≤4. Find its velocity, acceleration, times at rest, total distance and displacement over this interval.

### Candidate 2: worked answer
v=3(t−1)(t−3) m/s; a=6t−12 m/s². Rest at t=1,3 s; x at t=0,1,3,4 is 0,4,0,4 m. Total distance=12 m; displacement=4 m.

Keep the worked answer and all solved roots, signs, shaded results and evaluated limits out of the question card. Retain the question conditions during the thinking opportunity.

## 7. Site corrections and preparation decisions

Source motion examples are usable with the confirmed DC05 rest-time correction. The general Q(t) language and units need explicit preparation, not merely an assumption that every rate means velocity.

Existing corrections-log item 15: DC05 we-2 rest times must solve 12cos(3t)+2sin(t)=0. reuse existing correction. Parent integrates this reference without duplicating the issue.
