# math-a12-d10: Which valid candidate gives the global maximum or minimum?

Brief 128 research pack, 1 November 2026. This is source preparation for Claude, not a design, narration, build or approval. Original questions below are written for HSCScience in an HSC-style format; their suggested marks are not an official NESA marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cif819815e`: Define a global maximum of a function f ( x ) to be a point P a , f a on the graph where f x ≤ f ( a ) , for all x in the domain, and define a global minimum similarly [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci7e542996`: Examine whether any discontinuities or endpoints of the domain on which f ( x ) is being considered are points of maxima or minima [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci4a528415`: Solve optimisation problems by using calculus to find local and global maxima and minima of differentiable functions, checking discontinuities of f ' ( x ) and endpoints of the domain if applicable [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci5668f984`: Formulate conclusions to optimisation problems by evaluating solutions given the constraints of the domain [NESA focus area](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).

The `ci...` identifiers are NESA content-system codenames, not invented outcome numbers. The official `code` field is empty for these points. Exact source HTML with MathML is retained in the crosswalk and route inputs; the text above is a search aid whose spacing flattens mathematical layout. Use MathML when quoting an equation.

**Year 11 entry:** `ci6341be75` (Introduction to differentiation); `cief55e727` (Introduction to differentiation); `ci1d192d62` (Introduction to differentiation). Exact wording, HTML and official links are in the route inputs.

**Start:** Separate a nearby local extremum from the largest/smallest value over the full stated domain.

**Stop:** On one closed interval, list all valid stationary/nondifferentiable candidates and endpoints, evaluate f and compare. Briefly transfer to an exponential interval. Leave building physical objectives and open-domain limit cases to the next video.

**Next:** Applied optimisation: define variables/units, establish the constraint and objective, state the physical domain, then optimise.

**Route recommendation:** Replace the primary source applications L01 with L09, especially we-l20-3. Use L01 exponential examples as later application, not the sole basis for global comparisons. Keep endpoint inclusion explicit and defer noncompact-domain reasoning to the next lesson.

## 2. Site order, sections and worked examples

Read-only source: [applications-of-calculus/lesson09.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson09.sa). Source SHA256: `369b2272d143657b8c4ef9f53c2f25ddaccc3c110f0d7fbac806964abaaf0d3a`.

- `orient-optimisation`: Orient to optimisation.
- `local-versus-global`: Local versus global.
- `modelling-optimisation`: Model the problem.
- `work-optimisation-examples`: Work the examples.
- `practise-and-reflect-optimisation`: Practise and reflect.
- `complete-short-answer-practice`: Complete the short-answer practice.
- `review-and-complete`: Review and complete.

The page includes later material. Only the examples named as primary below belong to this pack's proposed boundary; all original worked examples are retained here for Claude to assign without changing their numbers.

**Primary examples:** `we-l20-3`

### Original site example `we-l20-1`

PROBLEM 1 · FENCING AGAINST A WALL A farmer has 40 m of fencing to enclose a rectangular pen, using an existing straight wall as one full side. Find the dimensions giving the greatest area, and state that area. 1 $2x + y = 40, \quad A = xy$ Let $x$ metres be each side perpendicular to the wall and $y$ metres the side parallel to it. Only three sides are fenced, so the constraint has a $2x$, not a $2x + 2y$. 2 $A(x) = x(40 - 2x) = 40x - 2x^2, \quad 0 < x < 20$ Eliminate $y = 40 - 2x$. The domain: $x$ must be positive, and $y > 0$ forces $x < 20$. 3 $A'(x) = 40 - 4x = 0 \implies x = 10$ One stationary point, and it lies inside the domain. 4 $A''(x) = -4 < 0, \quad A \to 0 \text{ at both ends}$ A maximum, and the open endpoints both drive the area to zero, so this really is the global maximum. 5 $x = 10 \text{ m}, \ y = 20 \text{ m}, \ A = 200 \text{ m}^2$ Answer the question: dimensions AND area, with units. Note the fence splits half along the wall and half across it, which is the general pattern for this problem. 1 of 5 Reveal next step →

### Original site example `we-l20-2`

PROBLEM 2 · AN OPEN BOX An open box is made from a 24 cm square of card by cutting equal squares of side $x$ cm from each corner and folding up the sides. Find $x$ giving the greatest volume. 1 $V = x(24 - 2x)^2, \quad 0 < x < 12$ The base is $(24 - 2x)$ square and the height is $x$. The domain: $x > 0$ to cut anything, and $x < 12$ or there is no base left. 2 $V = 4x^3 - 96x^2 + 576x$ Expanding $(24-2x)^2 = 576 - 96x + 4x^2$ and multiplying by $x$. Expanding first is easier than the product rule here. 3 $V' = 12x^2 - 192x + 576 = 12(x - 4)(x - 12)$ Take out 12, then factorise $x^2 - 16x + 48$. Stationary at $x = 4$ and $x = 12$. 4 $x = 12 \text{ rejected: not in } 0 < x < 12$ This is why step 1 stated the domain. Rejecting the root explicitly is a marked step, not something to do silently. 5 $V''(4) = 24(4) - 192 = -96 < 0; \ V(4) = 4(16)^2 = 1024$ A maximum, and $V \to 0$ at both ends of the domain, so it is global. The greatest volume is $1024$ cm³, with $x = 4$ cm. 1 of 5 Reveal next step →

### Original site example `we-l20-3`

PROBLEM 3 · WHEN THE ENDPOINT WINS Find the global maximum and minimum of $f(x) = x + \dfrac{4}{x}$ on the interval $\left[\tfrac{1}{2},\, 4\right]$. 1 $f'(x) = 1 - \dfrac{4}{x^2} = 0 \implies x^2 = 4 \implies x = 2$ Only $x = 2$ is in the interval; $x = -2$ is rejected. Note $f$ is continuous on this interval because 0 is not in it. 2 $\text{candidates: } x = \tfrac{1}{2}, \ 2, \ 4$ One interior stationary point and two endpoints. No discontinuities inside the interval. 3 $f\!\left(\tfrac12\right) = 8.5, \quad f(2) = 4, \quad f(4) = 5$ $\tfrac12 + 8 = 8.5$; $2 + 2 = 4$; $4 + 1 = 5$. Evaluate all three before deciding anything. 4 $\text{global min } 4 \text{ at } x = 2; \ \text{global max } 8.5 \text{ at } x = \tfrac12$ The maximum is at an endpoint and the other endpoint is not even second. Classifying the stationary point was never needed: comparing the three values settled it. 1 of 4 Reveal next step →

## 3. Recalculation and domain check

- we-l20-3: f=x+4/x on[1/2,4], f′=1-4/x²=0 gives±2; only2 valid. f(1/2)=17/2=8.5, f(2)=4, f(4)=5. Globalmin4 at2; globalmax8.5 at1/2.

- Site core: f=x³-3x on[0,3], valid candidates0,1,3 with values0,-2,18. Globalmin-2 at1; globalmax18 at3.

- we-l20-1 (defer modelling):40m fencing,2x+y=40; A=40x-2x²,0<x<20. A′=40-4x=0 gives10; y=20, A=200m². A″=-4, endpoint limits0 confirm globalmax.

- we-l20-2 (defer modelling):24cm square gives V=x(24-2x)²,0<x<12. V′=12(x-4)(x-12); only4 inside. V(4)=1024cm³, V″(4)=-96. Endpoint limits0.

- Original L01 examples (defer): xe^-x onx≥0 max1/e at1; P=100xe^(-0.1x) onx≥0 max1000/e≈367.879 atx=10; e^x+e^-x has globalmin2 at0 since e^x+e^-x≥2.

Every calculation listed here was independently recomputed. Deferred examples are source material for later videos, not permission to lengthen this one.

## 4. Misconceptions and exam-style traps

Compare values of f, not derivative values. Reject stationary roots outside the domain. A local maximum need not be global. Closed-interval candidate comparison requires checking that f is continuous and differentiable except at the explicitly considered candidates; open or unbounded domains may have unattained bounds. Sources: NESA cif819815e/ci7e542996/ci4a528415. No claim is made about the frequency of these errors in marking of the first 2027 examination.

## 5. Visual needs against programme decision 4

General graph with shaded domain and included endpoint markers. Derivative sign-chart supports finding candidates. Extended algebra: retain the candidate list and current f-value comparison. Moving tangent only to locate stationary points. Needed extension: endpoint/corner/discontinuity markers and attainable-versus-limit visual distinction. All graphs, algebra and sign charts are coded in the shared paper-style maths kit. No painted graph or algebra plate is requested. Keep question givens visible throughout the 10-second response opportunity; use brief worked feedback and a key-notes hold.

## 6. Two original candidate practice questions

### Question 1

Find the global maximum and minimum of f(x)=x³-3x on[-2,3].

**Worked answer:** f′=3(x²-1), so interior candidates-1,1 and endpoints-2,3. Values f(-2)=-2,f(-1)=2,f(1)=-2,f(3)=18. Globalmaximum18 at3; globalminimum-2 at both-2 and1.

### Question 2

Find the greatest and least values of g(x)=xe^-x on[0,3].

**Worked answer:** g′=e^-x(1-x), interior candidate1. g(0)=0,g(1)=1/e≈0.367879,g(3)=3/e³≈0.149361. Greatest1/e at1; least0 at0.

## 7. Site corrections and decisions for Claude

See [the site corrections log](../../site-corrections-maths-a12.md). The site was read only. Replace the primary source applications L01 with L09, especially we-l20-3. Use L01 exponential examples as later application, not the sole basis for global comparisons. Keep endpoint inclusion explicit and defer noncompact-domain reasoning to the next lesson. Select exact examples and final lesson length during design. Resolve any logged source error before reusing it. Human listening and playback review remain later gates.
