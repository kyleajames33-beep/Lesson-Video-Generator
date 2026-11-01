# math-a12-d17: How do the function and its two derivative graphs constrain a sketch?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci86279dc0`: Graph a function by determining local maxima and minima and points of inflection, horizontal and non-horizontal, considering any even or odd symmetry, the domain , any vertical asymptotes or other discontinuities , and where applicable, the behaviour of a function as x → ± ∞ [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).
- `ci6c81310b`: Graph y = f ' ( x ) and y = f ' ' ( x ) for a function y = f ( x ) , given only a graph of y = f ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci00fa8fac`, `cie3d91a6e`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-d16.

**Start:** Recall stationary/inflection tests,symmetry,domain and asymptotes.

**Stop:** Assemble a graph from constraints; infer derivative graphs from a supplied graph.

**Next:** math-a12-d18.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\applications-of-calculus\lesson08.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson08.sa.html), SHA256 `1e1ef1898b8801bbe358934c50b4e9ca7e3e63c6f5665617e96ce7db60a63a28`.

Data-step IDs: `orient-sketching`, `sketching-checklist`, `work-a-full-sketch`, `read-derivative-graphs`, `practise-and-reflect-sketching`, `complete-short-answer-practice`, `review-and-complete`.

### Source applications-of-calculus/lesson08.sa.html, `we-l19-1`

PROBLEM 1 · A CUBIC, ALL SEVEN CHECKS Sketch $f(x) = x^3 - 3x$, showing all significant features. 1 $\text{domain: all real } x$ A polynomial is defined everywhere, so there are no exclusions, no asymptotes and no holes. Checks 1 and 6 are done in one line. 2 $f(-x) = -x^3 + 3x = -f(x)$ Odd, so the curve has rotational symmetry about the origin. Whatever happens for $x > 0$ is mirrored through the origin. 3 $x(x^2 - 3) = 0 \implies x = 0, \pm\sqrt{3}$ Three $x$-intercepts, and the $y$-intercept is $f(0) = 0$, the same point. 4 $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$ Stationary at $x = \pm 1$. Using $f''(x) = 6x$: $f''(-1) = -6 < 0$ so $(-1, 2)$ is a maximum; $f''(1) = 6 > 0$ so $(1, -2)$ is a minimum. 5 $f''(x) = 6x = 0 \implies x = 0$ $f''$ is negative for $x < 0$ and positive for $x > 0$, a genuine change, so $(0, 0)$ is a point of inflection. Concave down on the left, up on the right. 6 $x \to \infty: f \to \infty; \quad x \to -\infty: f \to -\infty$ The $x^3$ term dominates. Now plot: rise to $(-1, 2)$, fall through the origin to $(1, -2)$, rise again, crossing the axis at $0$ and $\pm\sqrt{3} \approx \pm 1.73$. 1 of 6 Reveal next step →

### Source applications-of-calculus/lesson08.sa.html, `we-l19-2`

PROBLEM 2 · WITH A VERTICAL ASYMPTOTE Sketch $f(x) = x + \dfrac{1}{x}$, showing all significant features. 1 $\text{domain: } x \neq 0; \quad f(-x) = -f(x)$ Zero must be excluded, and the function is odd. There is no $y$-intercept, and no $x$-intercept either, since $x + \tfrac1x = 0$ gives $x^2 = -1$. 2 $f'(x) = 1 - \dfrac{1}{x^2} = \dfrac{x^2 - 1}{x^2}$ Stationary where $x^2 = 1$, so at $x = \pm 1$. Note $f'$ is undefined at $x = 0$, which is outside the domain anyway. 3 $f''(x) = \dfrac{2}{x^3}; \quad f''(1) = 2 > 0, \ f''(-1) = -2 < 0$ So $(1, 2)$ is a local minimum and $(-1, -2)$ is a local maximum. The minimum sits ABOVE the maximum, which only a discontinuous curve can do. 4 $f'' = \dfrac{2}{x^3} \neq 0 \text{ for any } x$ No points of inflection. $f''$ does change sign across $x = 0$, but $0$ is not in the domain, so there is no point there to be an inflection. This is the check people skip. 5 $x \to 0^+: f \to +\infty; \quad x \to 0^-: f \to -\infty$ A vertical asymptote at $x = 0$. Draw it as a dashed line; it is a feature the marker looks for. 6 $x \to \pm\infty: \ \tfrac{1}{x} \to 0, \text{ so } f(x) \to x$ The curve approaches the line $y = x$ far from the origin. Two branches: one in the first quadrant with a minimum at $(1,2)$, one in the third with a maximum at $(-1,-2)$. 1 of 6 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

x cubed-3x:odd,intercepts0,+/-sqrt3,max(-1,2),min(1,-2),inflection(0,0). x+1/x:exclude0,odd,no intercepts;max(-1,-2),min(1,2),f″=2/x cubed,no inflection across0;asymptotesx0,y=x.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

The site claim only a discontinuous curve can have a local minimum above a local maximum is false in general.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: FunctionGraph, DerivativeTracer, SignChart. Three linked panels f,f′,f″ and graph-only qualitative traces. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Sketch key features of x cubed-12x.

**Worked answer:** Odd;intercepts0,+/-2sqrt3;max(-2,16),min(2,-16),inflection(0,0).

### Question 2

Find stationary points and asymptotes of x+4/x.

**Worked answer:** Exclude0;max(-2,-4),min(2,4);asymptotesx0,y=x;no inflection at excluded0.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
