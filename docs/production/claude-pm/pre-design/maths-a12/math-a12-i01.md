# math-a12-i01: How does a family of primitives become one curve?

Brief 136 research pack, 1 November 2026. Preparation for Claude, not design, narration, build or approval. Original HSC-style practice below is written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci15cf596e`: Define a primitive of a function f ( x ) as a function F ( x ) whose derivative F ' x = f ( x ) and recognise the process of finding the primitive as the reverse of differentiation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cif4a78ace`: Recognise that a function whose derivative is everywhere zero is a constant function [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci7c3989e3`: Prove by differentiation that a primitive of f x = x n is F x = x n + 1 n + 1 , for all real n ≠ - 1 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci9df4b9bb`: Prove by differentiation that if F ( x ) and G ( x ) are primitives of f ( x ) and g ( x ) , and k is a constant , then F x + G ( x ) is a primitive of f x + g ( x ) , and kF ( x ) is a primitive of kf ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cib907133a`: Recognise that primitives of a function f ( x ) are not unique, and that any two primitives of f ( x ) differ by a constant, so that if F ( x ) is a primitive of f ( x ) , the general primitive of f ( x ) is F x + C , for some constant C [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci4625ca7d`: Determine the primitive of a given function f ( x ) , where f ( x ) is a sum of functions of the form k x n for all real n ≠ - 1 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci6f5c83b7`: Determine f ( x ) , given f ' ( x ) and an initial condition f ( a ) = b where a and b are constants [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci14a283a1`: Use the notation ∫ f x d x for the general primitive of f x , called the indefinite integral of f x , so that ∫ f x d x = F x + C , for some constant C , where F ( x ) is any primitive of f ( x ) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `ci60f312b1`: Recognise integration as the process of finding the indefinite integral of a function [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cicecbca21`: Use the formula ∫ x n dx = 1 n + 1 x n + 1 + C for real n ≠ - 1 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).
- `cibfe89394`: Use the identities ∫ f x + g x d x = ∫ f ( x ) d x + ∫ g ( x ) d x and ∫ k f ( x ) d x = k ∫ f ( x ) d x for primitives [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f).

These are CMS codenames, not published outcome numbers. Exact expanded HTML/MathML is retained in route inputs; flattened text loses some mathematical layout. Quote equations from the source HTML.

**Year 11 entry:** `ci1d192d62`, `cif6a6cb7d`. Exact wording, official URLs and HTML are in route inputs.

**Prior video:** math-a12-d19.

**Start:** Recall power,sum and scalar derivatives.

**Stop:** Explain primitives,constant families and notation;verify rules by differentiating and fix one initial value. Merge duplicate introductions.

**Next:** math-a12-i02.

## 2. Site order, sections and worked examples

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson01.sa.html), SHA256 `749617ef52cb4c9f7cbb038ad5115cf0f532d7a2bf79682a58c11bda21450b08`.

Data-step IDs: `orient-to-integration`, `build-integration-language`, `reverse-differentiation`, `apply-the-power-rule`, `avoid-integration-traps`, `practise-and-reflect`, `complete-mixed-practice`, `review-and-complete`.

Read-only source: [C:\Users\kygs\hscscience\subjects\maths-advanced\year12\integral-calculus\lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson04.sa.html), SHA256 `f0f8a4310f94b25af06d90da044dca26c42b12f19ae9c02acb14e534a289a2e1`.

Data-step IDs: `orient-to-antiderivatives`, `build-integration-language`, `use-the-power-rule`, `work-through-antiderivatives`, `avoid-core-integration-traps`, `apply-and-reflect`, `complete-mixed-practice`, `review-and-complete`.

### Source integral-calculus/lesson01.sa.html, `we-1`

PROBLEM 1 · BASIC POWER RULE Find $\int 3x^2 \, dx$. 1 $\displaystyle\int 3x^2 \, dx = 3 \cdot \frac{x^3}{3} + C$ Apply the power rule: raise the power from 2 to 3, divide by the new power 3. The coefficient 3 stays out front. 2 $= x^3 + C$ Simplify: $3 \div 3 = 1$. 3 Verify: $\dfrac{d}{dx}(x^3 + C) = 3x^2$ ✓ Differentiate the answer to confirm we recover the original integrand. 1 of 3 Reveal next step →

### Source integral-calculus/lesson01.sa.html, `we-2`

PROBLEM 2 · POLYNOMIAL INTEGRATION Find $\int (4x^3 - 2x + 5) \, dx$. 1 $\displaystyle\int 4x^3 \, dx = \frac{4x^4}{4} = x^4$ Integrate the first term using the power rule. 2 $\displaystyle\int -2x \, dx = -\frac{2x^2}{2} = -x^2$ Integrate the second term. 3 $\displaystyle\int 5 \, dx = 5x$ A constant $5 = 5x^0$ integrates to $\frac{5x^1}{1} = 5x$. 4 Answer: $x^4 - x^2 + 5x + C$ Combine all terms and add the constant of integration once at the end. 1 of 4 Reveal next step →

### Source integral-calculus/lesson01.sa.html, `we-3`

PROBLEM 3 · SIMPLIFY FIRST Find $\displaystyle\int \frac{x^4 + 3x^2}{x} \, dx$. 1 $\dfrac{x^4 + 3x^2}{x} = x^3 + 3x$ Simplify by dividing each term in the numerator by $x$ before integrating. You cannot integrate a fraction like this directly. 2 $\displaystyle\int (x^3 + 3x) \, dx = \frac{x^4}{4} + \frac{3x^2}{2} + C$ Integrate term by term using the power rule. 3 Verify: $\dfrac{d}{dx}\!\left(\frac{x^4}{4} + \frac{3x^2}{2} + C\right) = x^3 + 3x$ ✓ Differentiate to check: the result matches the simplified integrand. 1 of 3 Reveal next step →

### Source integral-calculus/lesson04.sa.html, `we-1`

PROBLEM 1 · BASIC POWER RULE Find $\int (3x^2 + 4x - 5) \, dx$. 1 $\int 3x^2 \, dx = 3 \cdot \dfrac{x^3}{3} = x^3$ Apply power rule to first term: add 1 to power, divide by new power. 2 $\int 4x \, dx = 4 \cdot \dfrac{x^2}{2} = 2x^2$ Second term: $x = x^1$, so power becomes 2. 3 $\int (-5) \, dx = -5x$ Constant rule: $\int k \, dx = kx + C$. 4 $= x^3 + 2x^2 - 5x + C$ Combine terms. One $+C$ covers the whole expression. 1 of 4 Reveal next step →

### Source integral-calculus/lesson04.sa.html, `we-2`

PROBLEM 2 · FINDING A CONSTANT If $\frac{dy}{dx} = 3x^2 - 4x + 2$ and the curve passes through $(1, 5)$, find the equation of the curve. 1 $y = \int (3x^2 - 4x + 2) \, dx = x^3 - 2x^2 + 2x + C$ Integrate term by term to find the general equation. 2 $5 = (1)^3 - 2(1)^2 + 2(1) + C = 1 - 2 + 2 + C = 1 + C$ Substitute the point $(1, 5)$ to find $C$. 3 $C = 4$, so $y = x^3 - 2x^2 + 2x + 4$ The boundary condition pins down the exact curve. 1 of 3 Reveal next step →

### Source integral-calculus/lesson04.sa.html, `we-3`

PROBLEM 3 · CHECKING YOUR ANSWER Is $\int 5x^4 \, dx = x^5 + C$ correct? Verify your answer. 1 Apply the power rule: $\int 5x^4 \, dx = 5 \cdot \dfrac{x^5}{5} + C = x^5 + C$ Raise the power by 1 (4 → 5), divide by 5, multiply by coefficient 5. 2 $\dfrac{d}{dx}(x^5 + C) = 5x^4$ ✓ Differentiate to verify. The derivative equals the original integrand, confirmed correct. 1 of 2 Reveal next step →

Only the part named in the stop/recalculation belongs to this proposed video. Other tasks reproduced above are deferred source context, not permission to crowd the design.

## 3. Recalculation and domain check

L01:3x squared→x cubed+C;4x cubed-2x+5→x^4-x squared+5x+C;(x^4+3x squared)/x→x^4/4+3x squared/2+C,x!=0. L04:3x squared+4x-5→x cubed+2x squared-5x+C;y′=3x squared-4x+2 through(1,5) givesC4,y=x cubed-2x squared+2x+4;5x^4→x^5+C.

Every selected expression was recalculated symbolically or by substitution. Keep exact constants until final decimals; do not silently change the site's numbers.

## 4. Misconceptions and HSC-style traps

Retain original domain after simplification;constants may differ on disconnected components.

These follow from the stated functions and official content, not claims about marking frequency.

## 5. Visual needs against programme decision 4

Existing parts: FunctionGraph, AlignedAlgebra, NumericDial. Primitive-family slides and derivative verification overlay. All graphs, algebra and diagrams are coded in the shared paper style, with calibrated coordinates and labels tied to the current point. Keep all givens in the response hold. No painted maths, people or hands.

## 6. Two original candidate practice questions

### Question 1

Find a primitive of6x squared-4x+3 withF(0)=2.

**Worked answer:** F=2x cubed-2x squared+3x+C;C2.

### Question 2

Find all primitives of2x+1,and decide whetherx squared+x+7 is one.

**Worked answer:** F=x squared+x+C;the proposed function corresponds toC7 and differentiates correctly.

Only the question belongs on its card. Hide the answer, sign and classification until feedback. A ten-second hold invites pausing; domains and units remain with the task.

## 7. Site corrections and decisions for Claude

See `../../site-corrections-maths-a12.md`. Resolve logged errors before reusing copy; the site remains read only. Source gaps above need original teaching rather than invented attribution. Claude selects exact examples, final length and any further split. Human listening and exact playback remain later gates.
