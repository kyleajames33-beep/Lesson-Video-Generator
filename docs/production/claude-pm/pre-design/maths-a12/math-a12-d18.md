# math-a12-d18: How do a constraint and physical domain determine an optimum?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci443204dc`: Model optimisation problems in a variety of contexts by defining variables , noting domain restrictions if necessary, and establishing functions to represent the relationship between variables [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci4a528415`: Solve optimisation problems by using calculus to find local and global maxima and minima of differentiable functions, checking discontinuities of f ' ( x ) and endpoints of the domain if applicable [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci5668f984`: Formulate conclusions to optimisation problems by evaluating solutions given the constraints of the domain [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `cif819815e`: Define a global maximum of a function f ( x ) to be a point P a , f a on the graph where f x ≤ f ( a ) , for all x in the domain, and define a global minimum similarly [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci7e542996`: Examine whether any discontinuities or endpoints of the domain on which f ( x ) is being considered are points of maxima or minima [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci00fa8fac`, `cie3d91a6e`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-d17.

**Start:** Recall d10 valid candidates and attained/limit distinctions.

**Stop:** Build an objective from constraints and physical domain; interpret optimum with units.

**Next:** math-a12-d19.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\applications-of-calculus\lesson09.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson09.sa.html), SHA256 `369b2272d143657b8c4ef9f53c2f25ddaccc3c110f0d7fbac806964abaaf0d3a`.

Data-step IDs: `orient-optimisation`, `local-versus-global`, `modelling-optimisation`, `work-optimisation-examples`, `practise-and-reflect-optimisation`, `complete-short-answer-practice`, `review-and-complete`.

### Source applications-of-calculus/lesson09.sa.html, `we-l20-1`

PROBLEM 1 · FENCING AGAINST A WALL A farmer has 40 m of fencing to enclose a rectangular pen, using an existing straight wall as one full side. Find the dimensions giving the greatest area, and state that area. 1 $2x + y = 40, \quad A = xy$ Let $x$ metres be each side perpendicular to the wall and $y$ metres the side parallel to it. Only three sides are fenced, so the constraint has a $2x$, not a $2x + 2y$. 2 $A(x) = x(40 - 2x) = 40x - 2x^2, \quad 0 < x < 20$ Eliminate $y = 40 - 2x$. The domain: $x$ must be positive, and $y > 0$ forces $x < 20$. 3 $A'(x) = 40 - 4x = 0 \implies x = 10$ One stationary point, and it lies inside the domain. 4 $A''(x) = -4 < 0, \quad A \to 0 \text{ at both ends}$ A maximum, and the open endpoints both drive the area to zero, so this really is the global maximum. 5 $x = 10 \text{ m}, \ y = 20 \text{ m}, \ A = 200 \text{ m}^2$ Answer the question: dimensions AND area, with units. Note the fence splits half along the wall and half across it, which is the general pattern for this problem. 1 of 5 Reveal next step →

### Source applications-of-calculus/lesson09.sa.html, `we-l20-2`

PROBLEM 2 · AN OPEN BOX An open box is made from a 24 cm square of card by cutting equal squares of side $x$ cm from each corner and folding up the sides. Find $x$ giving the greatest volume. 1 $V = x(24 - 2x)^2, \quad 0 < x < 12$ The base is $(24 - 2x)$ square and the height is $x$. The domain: $x > 0$ to cut anything, and $x < 12$ or there is no base left. 2 $V = 4x^3 - 96x^2 + 576x$ Expanding $(24-2x)^2 = 576 - 96x + 4x^2$ and multiplying by $x$. Expanding first is easier than the product rule here. 3 $V' = 12x^2 - 192x + 576 = 12(x - 4)(x - 12)$ Take out 12, then factorise $x^2 - 16x + 48$. Stationary at $x = 4$ and $x = 12$. 4 $x = 12 \text{ rejected: not in } 0 < x < 12$ This is why step 1 stated the domain. Rejecting the root explicitly is a marked step, not something to do silently. 5 $V''(4) = 24(4) - 192 = -96 < 0; \ V(4) = 4(16)^2 = 1024$ A maximum, and $V \to 0$ at both ends of the domain, so it is global. The greatest volume is $1024$ cm³, with $x = 4$ cm. 1 of 5 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

40m fencing:2x+y=40,A=40x-2x squared,0<x<20;stationary10,y20,A200m squared,endpoint limits0. 24cm card:V=x(24-2x) squared,0<x<12;V′=12(x-4)(x-12),reject12;V(4)=1024cm cubed,V″(4)=-96,endpoint limits0.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

Open endpoints give limits,not attained candidates;reject nonphysical roots.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: SymbolicCandidateTable, FunctionGraph. Constraint diagrams for fencing and box folds; limits distinct from attained values. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

A rectangle against a wall uses30m fence on three sides. Find dimensions maximizing area.

**Worked answer:** 2x+y=30;A=30x-2x squared,0<x<15;maxx7.5,y15,area112.5m squared.

### Question 2

Cut equal squares from12cm square card to maximize an open-box volume. Find the cut.

**Worked answer:** V=x(12-2x) squared,0<x<6;V′=12(x-2)(x-6);valid2cm gives128cm cubed;limits0.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
