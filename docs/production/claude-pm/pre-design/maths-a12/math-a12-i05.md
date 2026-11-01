# math-a12-i05: Which trig primitives reverse the derivative rules?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cid02231a7`: Establish and use the formulas ∫ sin ⁡ x d x = - cos ⁡ x + C , ∫ cos ⁡ x d x = sin ⁡ x + C and ∫ sec 2 ⁡ x d x = tan ⁡ x + C [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci568edaf6`: Establish and use indefinite integrals of the form ∫ f ( ax + b ) dx , where a and b are constants and a ≠ 0 , and f x = sin ⁡ x , f x = cos ⁡ x and f x = sec 2 ⁡ x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci1f442d1a`: Determine indefinite integrals of the form ∫ f ' ( x ) sin ⁡ f x dx , ∫ f ' ( x ) cos ⁡ f ( x ) dx and ∫ f ' ( x ) sec 2 ⁡ f ( x ) d x [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci1d192d62`, `cif6a6cb7d`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-i04.

**Start:** Recall d05/d11 trig derivatives and reverse-chain factors.

**Stop:** Establish sin,cos,sec squared primitives,linear inners and matched trig composites. Keep radians/poles;site lacks a full indefinite-trig worked set.

**Next:** math-a12-i06: accumulation rectangles.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\differential-calculus\lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson05.sa.html), SHA256 `db0b045dcd7d18b9fe84ed1e03d77f93564a690c792680aa9e139ad5bda4be68`.

Data-step IDs: `orient-trig-derivatives`, `read-and-prove-trig-derivatives`, `apply-chain-rule-to-trig`, `apply-trig-derivatives`, `work-trig-examples`, `consolidate-trig-derivatives`, `practise-trig-derivatives`, `finish-trig-derivatives`.

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson02.sa.html), SHA256 `f2ec0e82cfb5d3d50952cf1840954f843cfba325192e2d44576deda0cd9a9380`.

Data-step IDs: `orient-to-definite-area`, `build-area-language`, `connect-integrals-and-area`, `evaluate-area-examples`, `avoid-signed-area-traps`, `practise-and-reflect`, `complete-mixed-practice`, `review-and-complete`.

### Source differential-calculus/lesson05.sa.html, `we-1`

PROBLEM 1 · BASIC CHAIN RULE Differentiate: (a) $y = 3\sin(5x)$, (b) $y = \cos(x^2 + 1)$, (c) $y = \tan\!\left(2x - \dfrac{\pi}{3}\right)$. 1 Part (a): $y = 3\sin(5x)$ Inner: $u = 5x$, inner derivative $= 5$ Outer: $\sin \to \cos$ $y' = 3 \times 5\cos(5x) = 15\cos(5x)$ Chain rule: the 5 from the inner derivative multiplies, then the 3 coefficient stays. Total multiplier = $3 \times 5 = 15$. 2 Part (b): $y = \cos(x^2 + 1)$ Inner: $u = x^2 + 1$, inner derivative $= 2x$ Outer: $\cos \to -\sin$ $y' = -2x\sin(x^2 + 1)$ The inner derivative is $2x$ (not a constant), so it stays as a factor. The negative sign comes from the outer derivative of cosine. 3 Part (c): $y = \tan\!\left(2x - \dfrac{\pi}{3}\right)$ Inner: $u = 2x - \dfrac{\pi}{3}$, inner derivative $= 2$ Outer: $\tan \to \sec^2$ $y' = 2\sec^2\!\left(2x - \dfrac{\pi}{3}\right)$ The $-\frac{\pi}{3}$ is a constant, its derivative is 0, so only the $2x$ contributes the inner derivative of 2. 1 of 3 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

Reverse unchanged DC05we-1(a):integral15cos5x=3sin5x+C;reverse(c):integral2sec squared(2x-pi/3)=tan(2x-pi/3)+C on pole-free intervals. sinx→-cosx+C,cosx→sinx+C,sec squaredx→tanx+C. Source tasks are derivatives being reversed,not invented existing integral examples.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

A sine primitive has a minus;retain radians and inner factors.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: FunctionGraph, ExpressionSlot, AlignedAlgebra. Signed trig primitive overlay and exact radian ticks. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Find integral6cos3x dx.

**Worked answer:** 2sin3x+C.

### Question 2

Find integral2x sin(x squared+1) dx.

**Worked answer:** -cos(x squared+1)+C;differentiate to verify.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
