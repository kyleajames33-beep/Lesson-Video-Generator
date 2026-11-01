# math-a12-d15: When is a continuous join differentiable?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci6a1c872e`: Define a function f x to be differentiable at x = a if lim h → 0 f a + h - f a h exists, that is if there is a non-vertical tangent to the curve at the point P a , f a and recognise that if f x is differentiable at x = a then it is continuous at x = a [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci420dbcac`: Identify any values of x where a function is continuous, but not differentiable, given either the equation of the function or its graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci00fa8fac`, `cie3d91a6e`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-d14.

**Start:** Recall one-sided graph behaviour and tangent gradients.

**Stop:** Compare values/limits and one-sided difference quotients; continuity alone is insufficient.

**Next:** math-a12-d16.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\applications-of-calculus\lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson05.sa.html), SHA256 `88de3d41f0771d164994bb79b5ddc53a696252cac426a1fd0470f8ef45f97be9`.

Data-step IDs: `orient-differentiability`, `define-continuity`, `define-differentiability`, `three-failure-shapes`, `work-differentiability-examples`, `practise-and-reflect-differentiability`, `complete-short-answer-practice`, `review-and-complete`.

### Source applications-of-calculus/lesson05.sa.html, `we-l16-1`

PROBLEM 1 · A SMOOTH JOIN $f(x) = x^2$ for $x \leq 1$ and $f(x) = 2x - 1$ for $x > 1$. Is $f$ continuous at $x = 1$? Is it differentiable there? 1 $f(1) = 1^2 = 1$ Use the piece that owns $x = 1$. Here the first piece does, because of the $\leq$. 2 $\lim_{x \to 1^+} (2x - 1) = 1 = f(1)$ The right-hand limit matches the value, and the left piece is continuous, so $f$ is continuous at 1 ✓ 3 $\text{left: } \tfrac{d}{dx}x^2 = 2x \to 2, \qquad \text{right: } \tfrac{d}{dx}(2x-1) = 2$ Differentiate each piece and evaluate at the join. Both give 2. 4 $f'(1) = 2, \text{ so } f \text{ IS differentiable at } 1$ Continuity and matching one-sided gradients together give differentiability. The line $2x - 1$ is in fact the tangent to $y = x^2$ at $x = 1$, which is why the join is invisible. 1 of 4 Reveal next step →

### Source applications-of-calculus/lesson05.sa.html, `we-l16-2`

PROBLEM 2 · A CORNER $g(x) = x^2$ for $x \leq 1$ and $g(x) = x$ for $x > 1$. Determine continuity and differentiability at $x = 1$. 1 $g(1) = 1, \qquad \lim_{x \to 1^+} x = 1$ Value and right-hand limit agree, so $g$ is continuous at 1 ✓ 2 $\text{left gradient} = 2(1) = 2, \qquad \text{right gradient} = 1$ Differentiate each piece: $2x$ on the left gives 2 at the join, and the constant slope 1 on the right. 3 $2 \neq 1 \implies g'(1) \text{ does not exist}$ Continuous but not differentiable: a corner at $(1, 1)$. Both one-sided gradients are finite, they simply disagree. 1 of 3 Reveal next step →

### Source applications-of-calculus/lesson05.sa.html, `we-l16-3`

PROBLEM 3 · CHOOSING THE CONSTANTS $h(x) = x^2$ for $x \leq 2$ and $h(x) = ax + b$ for $x > 2$. Find $a$ and $b$ so that $h$ is differentiable at $x = 2$. 1 $\text{gradients: } 2(2) = 4 = a$ Differentiability needs the one-sided gradients to match, and the right piece has constant gradient $a$. So $a = 4$. 2 $\text{continuity: } 2^2 = a(2) + b$ Differentiability also requires continuity, so the values must agree at the join too. Both conditions are needed. 3 $4 = 8 + b \implies b = -4$ Substituting $a = 4$. So $h(x) = 4x - 4$ for $x > 2$. 4 $a = 4, \ b = -4$ Check: $4(2) - 4 = 4 = 2^2$ ✓ and the gradient is 4 on both sides ✓. Solving only the gradient condition is the standard half-answer. 1 of 4 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

we-l16-1:x squared/2x-1 at1,value1,slopes2/2:continuous,differentiable. we-l16-2:x squared/x at1,value1,slopes2/1:continuous corner. we-l16-3:x squared/ax+b at2 givesa4,b-4;values4,slopes4. Same joins and coefficients.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

Matching gradients without matching function values does not make a smooth join.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: FunctionGraph, SecantToTangent. Piecewise one-sided limit markers and separate approaches. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Choose a,b for x squared(x<=1),ax+b(x>1) to be differentiable at1.

**Worked answer:** Slope a=2;continuity1=2+b givesb=-1.

### Question 2

Is |x-2| continuous and differentiable at2? Justify.

**Worked answer:** Continuous,value0;slopes-1,+1 disagree,so not differentiable.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
