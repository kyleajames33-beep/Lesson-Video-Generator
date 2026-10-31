# math-a12-d09: How do derivative signs identify increasing, decreasing and turning?

Brief 128 research pack, 1 November 2026. This is source preparation for Claude, not a design, narration, build or approval. Original questions below are written for HSCScience in an HSC-style format; their suggested marks are not an official NESA marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci5a635ade`: Analyse the stationary points of a function by testing values for f ' ( x ) , then classify the stationary points as local minima or local maxima where gradients change around the point, or horizontal points of inflection where gradients have the same sign on both sides of the point [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).

The `ci...` identifiers are NESA content-system codenames, not invented outcome numbers. The official `code` field is empty for these points. Exact source HTML with MathML is retained in the crosswalk and route inputs; the text above is a search aid whose spacing flattens mathematical layout. Use MathML when quoting an equation.

**Year 11 entry:** `cie435d18f` (Introduction to differentiation); `cief55e727` (Introduction to differentiation); `ci6341be75` (Introduction to differentiation); `ci1d192d62` (Introduction to differentiation). Exact wording, HTML and official links are in the route inputs.

**Start:** Recall the Year11 sign-to-direction connection, then organise intervals and distinguish stationary from turning.

**Stop:** Classify local maxima/minima by sign changes and recognize a stationary point that does not turn. Keep concavity proof and general inflection tests for the later concavity lesson.

**Next:** math-a12-d10: compare candidates over the whole domain.

**Route recommendation:** Replace the draft primary source applications L01 with L06. L01 is an exponential-optimisation application, not a complete first sign-chart lesson. Recall the Year11 increasing/decreasing rule, then teach the Year12 stationary classification.

## 2. Site order, sections and worked examples

Read-only source: [applications-of-calculus/lesson06.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson06.sa). Source SHA256: `657d500145cd430aa6e261213b25bd24ea6112f85af490a0f9bce6bae8e7b4e7`.

- `orient-stationary-points`: Orient to stationary points.
- `define-stationary-points`: Define and classify.
- `build-the-sign-table`: Build the sign table.
- `work-sign-test-examples`: Work the examples.
- `practise-and-reflect-stationary`: Practise and reflect.
- `complete-short-answer-practice`: Complete the short-answer practice.
- `review-and-complete`: Review and complete.

The page includes later material. Only the examples named as primary below belong to this pack's proposed boundary; all original worked examples are retained here for Claude to assign without changing their numbers.

**Primary examples:** `we-l17-1`, `we-l17-2`, `we-l17-3`

### Original site example `we-l17-1`

PROBLEM 1 · A STANDARD CUBIC Find and classify the stationary points of $f(x) = 2x^3 - 9x^2 + 12x - 3$. 1 $f'(x) = 6x^2 - 18x + 12 = 6(x - 1)(x - 2)$ Differentiate, then take out the common factor 6 and factorise the quadratic. 2 $f'(x) = 0 \implies x = 1 \text{ or } x = 2$ Two stationary points, so three intervals to test. 3 $f'(0) = 12 > 0, \quad f'(1.5) = -1.5 < 0, \quad f'(3) = 12 > 0$ One easy test value per interval. Only the signs matter, not the values. 4 $(1, 2) \text{ local max}, \qquad (2, 1) \text{ local min}$ $+$ to $-$ at $x = 1$, $-$ to $+$ at $x = 2$. Then $f(1) = 2 - 9 + 12 - 3 = 2$ and $f(2) = 16 - 36 + 24 - 3 = 1$. 1 of 4 Reveal next step →

### Original site example `we-l17-2`

PROBLEM 2 · A STATIONARY POINT THAT DOES NOT TURN Find and classify the stationary points of $f(x) = x^4 - 4x^3$. 1 $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$ Factorise fully. The repeated factor $x^2$ is the signal that something unusual happens at $x = 0$. 2 $f'(x) = 0 \implies x = 0 \text{ or } x = 3$ Two stationary points, from the double root at 0 and the simple root at 3. 3 $f'(-1) = -16 < 0, \quad f'(1) = -8 < 0, \quad f'(4) = 64 > 0$ Note the first two signs. $4x^2$ is positive either side of 0, so the sign of $f'$ is decided entirely by $(x-3)$, which is negative on both. 4 $(0, 0) \text{ horizontal inflection}, \qquad (3, -27) \text{ local min}$ Same sign either side of 0, so no turn. At 3 the sign changes $-$ to $+$: a minimum, with $f(3) = 81 - 108 = -27$. 1 of 4 Reveal next step →

### Original site example `we-l17-3`

PROBLEM 3 · WORKING BACKWARDS $f(x) = x^3 + ax^2 + bx$ has a stationary point at $(1, -2)$. Find $a$ and $b$, then classify the other stationary point. 1 $f(1) = 1 + a + b = -2 \implies a + b = -3$ The point lies ON the curve, so its coordinates satisfy $f$. This is the equation students forget. 2 $f'(x) = 3x^2 + 2ax + b, \quad f'(1) = 3 + 2a + b = 0$ Stationary means $f'(1) = 0$, giving $2a + b = -3$. 3 $a = 0, \quad b = -3$ Subtracting the first equation from the second gives $a = 0$, then $b = -3$. So $f(x) = x^3 - 3x$. 4 $(-1, 2) \text{ is a local maximum}$ $f'(x) = 3x^2 - 3$ is also zero at $x = -1$, where the sign runs $+$ to $-$. Check: $(1, -2)$ is then the local minimum, matching the given point. 1 of 4 Reveal next step →

## 3. Recalculation and domain check

- we-l17-1: f=2x³-9x²+12x-3; f′=6(x-1)(x-2). At0,1.5,3 derivative12,-1.5,12. Increasing(-∞,1),(2,∞); decreasing(1,2). f(1)=2 localmax; f(2)=1 localmin.

- we-l17-2: f=x^4-4x³; f′=4x²(x-3). At-1,1,4 derivative-16,-8,64. f decreases through0 and turns to increasing at3. f(0)=0; f(3)=-27. For this polynomial f″=12x(x-2) changes sign at0, confirming horizontal inflection; same derivative sign alone is not a general proof of concavity change.

- we-l17-3: f(1)=-2 gives a+b=-3; f′(1)=0 gives2a+b=-3, so a=0,b=-3. Then f=x³-3x, other stationary point(-1,2), localmax.

- Retain the original draft source as later application: xe^-x has derivativee^-x(1-x), increases forx<1, decreases forx>1, and has localmax(1,1/e).

Every calculation listed here was independently recomputed. Deferred examples are source material for later videos, not permission to lengthen this one.

## 4. Misconceptions and exam-style traps

f′(c)=0 says horizontal tangent, not automatically a maximum/minimum. Read y-coordinates from f, not f′. Split intervals at domain breaks and undefined derivatives as well as zeros. A one-point sample per interval needs derivative sign continuity/no intervening zero or break. Sources: official ci5a635ade and the site examples. No claim is made about the frequency of these errors in marking of the first 2027 examination.

## 5. Visual needs against programme decision 4

Derivative sign-chart kit is essential: align valid intervals, zeros, excluded points and up/down shading with the same x-axis on the function graph. Moving tangent changes sign on cue. Extended algebra factors f′ and retains stationary x-values while f supplies y-values. Add an explicit domain-break symbol. All graphs, algebra and sign charts are coded in the shared paper-style maths kit. No painted graph or algebra plate is requested. Keep question givens visible throughout the 10-second response opportunity; use brief worked feedback and a key-notes hold.

## 6. Two original candidate practice questions

### Question 1

For f(x)=x³-3x, find the intervals on which f increases or decreases and classify its stationary points.

**Worked answer:** f′=3(x-1)(x+1). Signs +,-,+ on(-∞,-1),(-1,1),(1,∞). Thus f increases outside[-1,1] and decreases on(-1,1). f(-1)=2 localmax; f(1)=-2 localmin.

### Question 2

A function has derivative f′(x)=x²(x-2). State the signs of f′ around0 and2. Which stationary point is a turning point?

**Worked answer:** Forx<0 and0<x<2, f′<0; forx>2, f′>0. At0 there is no sign change, so it is not a turning point. At2 the sign changes- to+, giving a local minimum. A possible primitive isx^4/4-2x³/3+C.

## 7. Site corrections and decisions for Claude

See [the site corrections log](../../site-corrections-maths-a12.md). The site was read only. Replace the draft primary source applications L01 with L06. L01 is an exponential-optimisation application, not a complete first sign-chart lesson. Recall the Year11 increasing/decreasing rule, then teach the Year12 stationary classification. Select exact examples and final lesson length during design. Resolve any logged source error before reusing it. Human listening and playback review remain later gates.
