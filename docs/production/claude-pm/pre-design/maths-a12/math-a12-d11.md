# math-a12-d11: Why does differentiating tan x give sec squared x?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cid8c675e3`: Use the rules of differentiation to show that d dx ( tan ⁡ x ) = sec 2 ⁡ x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci00fa8fac`, `cie3d91a6e`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-d10.

**Start:** Recall sin/cos derivatives and tan=sin/cos.

**Stop:** Prove tan derivative by quotient rule, then one chain transfer; radians and branch exclusions stay. Use part(c), defer motion.

**Next:** math-a12-d12.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\differential-calculus\lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson05.sa.html), SHA256 `db0b045dcd7d18b9fe84ed1e03d77f93564a690c792680aa9e139ad5bda4be68`.

Data-step IDs: `orient-trig-derivatives`, `read-and-prove-trig-derivatives`, `apply-chain-rule-to-trig`, `apply-trig-derivatives`, `work-trig-examples`, `consolidate-trig-derivatives`, `practise-trig-derivatives`, `finish-trig-derivatives`.

### Source differential-calculus/lesson05.sa.html, `we-1`

PROBLEM 1 · BASIC CHAIN RULE Differentiate: (a) $y = 3\sin(5x)$, (b) $y = \cos(x^2 + 1)$, (c) $y = \tan\!\left(2x - \dfrac{\pi}{3}\right)$. 1 Part (a): $y = 3\sin(5x)$ Inner: $u = 5x$, inner derivative $= 5$ Outer: $\sin \to \cos$ $y' = 3 \times 5\cos(5x) = 15\cos(5x)$ Chain rule: the 5 from the inner derivative multiplies, then the 3 coefficient stays. Total multiplier = $3 \times 5 = 15$. 2 Part (b): $y = \cos(x^2 + 1)$ Inner: $u = x^2 + 1$, inner derivative $= 2x$ Outer: $\cos \to -\sin$ $y' = -2x\sin(x^2 + 1)$ The inner derivative is $2x$ (not a constant), so it stays as a factor. The negative sign comes from the outer derivative of cosine. 3 Part (c): $y = \tan\!\left(2x - \dfrac{\pi}{3}\right)$ Inner: $u = 2x - \dfrac{\pi}{3}$, inner derivative $= 2$ Outer: $\tan \to \sec^2$ $y' = 2\sec^2\!\left(2x - \dfrac{\pi}{3}\right)$ The $-\frac{\pi}{3}$ is a constant, its derivative is 0, so only the $2x$ contributes the inner derivative of 2. 1 of 3 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

Quotient numerator cos squared+sin squared=1, so tan′=sec squared. we-1(a)15cos5x and(b)-2x sin(x squared+1) are already d06. Part(c)tan(2x-pi/3) gives2sec squared(2x-pi/3), exclude2x-pi/3=pi/2+kpi; at0 gradient8.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

Increasing means each connected branch, not across poles.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: FunctionGraph, AlgebraFraction, DomainStrip. Branch-aware tangent readouts; existing geometry serves. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Differentiate tan x and find its gradient at pi/4.

**Worked answer:** sec squared x,cos x!=0; gradient2.

### Question 2

Differentiate tan3x and state its domain.

**Worked answer:** 3sec squared3x; exclude x=pi/6+kpi/3,integer k.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
