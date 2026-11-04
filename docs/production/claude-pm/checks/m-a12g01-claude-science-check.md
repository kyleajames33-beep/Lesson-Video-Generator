# m-a12g01 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `92d75b2036895ac0ea6d5346a1868400ff94477885e67284ab4eaf7e6980ea52`. Source-only check.

The practised 2024 actions match the fresh official [Differential calculus](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480) and [Applications of calculus](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104) pages, with notation linearised and IDs checked against the programme crosswalk:

- `ci4f1f8ece`: “Apply the product, quotient and chain rules to differentiate functions of the form f(x)g(x), (f(x))/(g(x)) or f(g(x)), where f(x) and g(x) are any of the functions within the scope of the Mathematics Advanced course”.
- `ci004fc1ed`: “Use the chain rule to differentiate functions of the form ln f(x)”.
- `ci2d33185c`: “Solve problems involving equations of tangents and normals to curves involving any of the functions within the scope of the Mathematics Advanced course”.
- `ci5a635ade`: “Analyse the stationary points of a function by testing values for f′(x), then classify the stationary points as local minima or local maxima where gradients change around the point, or horizontal points of inflection where gradients have the same sign on both sides of the point”.

Independent SymPy evidence is in `work/brief161/g01.py` and `.json`. The gradient equation gives −1 and 3, with only 3 in x > 0; the tangent intercept is −3 − 6 ln 3. The cubic conditions give a = 0 and b = −3, and the point at x = −1 has height 2. The first attempt's roots are 1 ± √5, only the positive-domain root survives, and the second contact point has a = e². The three walkthroughs justify their chosen methods from the question givens.

1. **Should fix:** State the division by 2 following multiplication by x in scene 5.
2. **Should fix:** Restrict the one-equation/two-unknowns claim to the given linear equation.

These are the learning-review findings. Root decision 63's named feedback trim remains required. No new site error was established. Count: 0 blockers, 2 should fix, 0 optional.
