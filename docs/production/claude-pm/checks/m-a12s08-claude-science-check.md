# m-a12s08 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `45b973ff5c096d8a74d61d46c123a4dd1e35c2df4c0560b164b20705b1a10bad`. Source proposal only; no actual motion, voiced preview or student learning evidence inspected.

Source design syllabus quotations:

- `ci0b521caf`: "Generate the expression for the expected value of a continuous random variable, E(X)=μ=∫_{a}^(b)xf(x)dx , where the probability density function f(x) is defined on the interval [a,b]"
- `ci8a12d966`: "Generate the expression for the variance of a continuous random variable, Var(X)=E(X^(2))-μ^(2)=∫_{a}^(b)x^(2)f(x)dx-μ^(2) , where the probability density function f(x) is defined on the interval [a,b]"
- `ci66c27065`: "Evaluate the expected value and the variance of a continuous random variable, where the probability density function f(x) is defined on the interval [a,b] , that involve integration of functions beyond the scope of the Mathematics Advanced course using an online computational application"

The [official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November. The embedded official CMS text and MathML have now been verified; see the fresh-quote audit below.

Independent integrals give 8/3 and 8/9 for x/8; the uniform results simplify to (a+b)/2 and (b-a)²/12. Midpoint sums are 21/8,85/32,341/128. The half-sine mean is pi/2 and variance pi²/4-2; the cosine attempt gives pi/2-1 and pi-3. Do not use a reserve cut that takes this lesson below 5,500 characters unless measured audio exceeds the limit. Independent calculations: `work/brief162/s07-s12.py` and `work/brief162/s08.json`.

1. **Should fix:** Scene 7 says "In an exam, the marks are in the set-up" without a named marking guideline, and omits that evaluation may also be demanded. Replace with "Show the limits, the weighted integrand and the result, and state the tool used". Fund this by replacing that sentence rather than adding to the lesson.

Count: 0 blockers, 1 should fix, 0 optional; 5,586 joined narration characters. Design timing is not measured audio.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`ci0b521caf`: Generate the expression for the expected value of a continuous random variable, E(X)=μ=∫_{a}^(b)xf(x)dx , where the probability density function f(x) is defined on the interval [a,b]

`ci8a12d966`: Generate the expression for the variance of a continuous random variable, Var(X)=E(X^(2))-μ^(2)=∫_{a}^(b)x^(2)f(x)dx-μ^(2) , where the probability density function f(x) is defined on the interval [a,b]

`ci66c27065`: Evaluate the expected value and the variance of a continuous random variable, where the probability density function f(x) is defined on the interval [a,b] , that involve integration of functions beyond the scope of the Mathematics Advanced course using an online computational application

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.
