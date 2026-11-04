# m-a12i11 maths check

Revision 1, checked 3 November 2026. Source SHA-256 `78ace6eb40822610eba26cdb7a4d8a8fa65f755dd25beeb3c3e5977fd313b874`. Written proposal only.

The fresh official [Integral calculus page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f) supplies these 2024 actions; notation is linearised and CMS identifiers checked against `work/brief151/math-official-validation.json`.

- `cic69e48c4`: “Use definite integrals to solve problems involving the areas of regions bounded by the graph of the continuous function y = f(x), the y-axis and the lines y = a and y = b, in cases where x ≥ 0 throughout a ≤ y ≤ b, x ≤ 0 throughout a ≤ y ≤ b or where x changes sign in the interval a ≤ y ≤ b with or without the graph provided”.
- `cide2cd24b`: “Use the fact that the graphs of y = a^{x} and y = log_{a} x are reflections of each other in the line y = x to solve problems involving areas between the x-axis or y-axis and a curve involving either an exponential or logarithmic function”.

SymPy evidence `work/brief130-python/i11.py` and `.json` verifies the sums 1.5522, 1.6338, 1.6969, the reflections and rectangle values, signed pieces, both attempts and zero handoff. Areas from magnitudes are 23/3 and 19/3. The x²−4 source-derived numbers remain unchanged; the other examples are original. Logarithm domains, ordered y-limits and the base condition are retained; reflection preserves area, and the reflection window uses equal units. No new confirmed site error. Count: 0 blockers, 0 should fix, 0 optional; approximately 480 seconds.
