# math-a12-i02: How do algebra and a reverse chain rule reveal power primitives?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci9a426b74`: Determine the primitive function for functions of the form f x = ax + b n , for all real n ≠ - 1 , where a and b are constants [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci81986498`: Use algebraic manipulation to express given functions in forms suitable for determining primitive functions [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci380c68a8`: Prove by differentiation, and apply ∫ u n du dx dx = 1 n + 1 u n + 1 + C , where u is a function of x , or ∫ f ' x f ( x ) n dx = 1 n + 1 f ( x ) n + 1 + C , for real n ≠ - 1 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci1d192d62`, `cif6a6cb7d`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-i01.

**Start:** Recall i01 primitives and d06 chain rule.

**Stop:** Reverse linear-inner powers and matched f′f^n;state n!=-1 and real-power domains.

**Next:** math-a12-i03.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson05.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson05.sa.html), SHA256 `1cdf61d8bdebf5e993e03ce87ca0a07edc7e6fbe9ab48bfd4d6fd7dd8a1479b7`.

Data-step IDs: `orient-to-power-functions`, `build-rewriting-language`, `rewrite-before-integrating`, `work-through-power-integrals`, `avoid-rewriting-traps`, `apply-and-reflect`, `complete-mixed-practice`, `review-and-complete`.

### Source integral-calculus/lesson05.sa.html, `we-1`

PROBLEM 1 · NEGATIVE AND FRACTIONAL POWERS Find $\int x^{-3} \, dx$ and $\int x^{3/2} \, dx$. 1 $\int x^{-3} \, dx = \dfrac{x^{-3+1}}{-3+1} = \dfrac{x^{-2}}{-2} = -\dfrac{1}{2x^2} + C$ Add 1 to power ($-3 \to -2$), divide by new power ($-2$). Rewrite with positive denominator. 2 $\int x^{3/2} \, dx = \dfrac{x^{3/2+1}}{3/2+1} = \dfrac{x^{5/2}}{5/2} = \dfrac{2}{5}x^{5/2} + C$ Add 1 to power ($3/2 \to 5/2$). Dividing by $5/2$ is the same as multiplying by $2/5$. 1 of 2 Reveal next step →

### Source integral-calculus/lesson05.sa.html, `we-2`

PROBLEM 2 · EXPANDING BEFORE INTEGRATING Find $\int (x + 1)^2 \, dx$. 1 $(x + 1)^2 = x^2 + 2x + 1$ Expanding is one safe route and here it is the quickest. It is NOT the only one: $\dfrac{(x+1)^3}{3} + C$ is also correct, because differentiating it gives $(x+1)^2$ , the inner derivative is 1, so no extra factor appears. The factor only bites when the inner coefficient is not 1, as in $\int (2x+1)^2\,dx = \dfrac{(2x+1)^3}{6} + C$, where dividing by that 2 is what the reverse chain rule is for. 2 $\int (x^2 + 2x + 1) \, dx = \dfrac{x^3}{3} + x^2 + x + C$ Apply the power rule to each term separately. 1 of 2 Reveal next step →

### Source integral-calculus/lesson05.sa.html, `we-3`

PROBLEM 3 · DIVIDE BY x FIRST Find $\int \dfrac{x^3 + 2x}{x} \, dx$. 1 $\dfrac{x^3 + 2x}{x} = x^2 + 2$ Divide each term in the numerator by $x$. Now both terms are plain powers. 2 $\int (x^2 + 2) \, dx = \dfrac{x^3}{3} + 2x + C$ Apply power rule term by term. Constant 2 integrates to $2x$. 1 of 2 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

x^-3→-1/(2x squared)+C,x!=0;x^(3/2)→2x^(5/2)/5+C forpositive x. (x+1) squared→x cubed/3+x squared+x+C or(x+1) cubed/3+C,differing by a constant1/3. Site inline(2x+1) squared→(2x+1) cubed/6+C. (x cubed+2x)/x→x cubed/3+2x+C,x!=0.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

A reverse-chain shortcut needs the inner derivative;do not integrate an arbitrary composite by dividing its visible coefficient.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: ExpressionSlot, DerivativeFactor, AlignedAlgebra. Reverse-chain factor-matching highlight. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Find integral(3x+2) squared dx and verify.

**Worked answer:** (3x+2) cubed/9+C;differentiates to the integrand.

### Question 2

Find integral2x(x squared+1) cubed dx.

**Worked answer:** (x squared+1)^4/4+C;derivative2x(x squared+1) cubed.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
