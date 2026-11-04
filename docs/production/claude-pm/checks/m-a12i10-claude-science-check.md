# m-a12i10 maths check

Revision 1, checked 3 November 2026. Source SHA-256 `c34245081072614b8b8ad97469a7c4c31a944f544d0ef56aa7a9ba212aacad8c`. Written plan and source only.

These 2024 actions match the fresh official [Integral calculus page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f), with notation linearised; CMS identifiers were checked against `work/brief151/math-official-validation.json`.

- `ciea1a6452`: “Describe, in the case where f(x) ≥ 0 for all values of x in the interval a ≤ x ≤ b, the area bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, as ∫_{a}^{b} f(x) dx”.
- `cib0134047`: “Recognise, in the case where f(x) ≤ 0 for all values of x in the interval a ≤ x ≤ b, the area bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, as |∫_{a}^{b} f(x) dx| or −∫_{a}^{b} f(x) dx”.
- `ci09a73813`: “Conclude, for a continuous function y = f(x) on the interval a ≤ x ≤ b, that ∫_{a}^{b} f(x) dx = (area of regions between curve and x-axis lying above the x-axis) − (area of regions between curve and the x-axis lying below the x-axis)”.
- `cicfcd020a`: “Use definite integrals to solve problems involving the areas of regions bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, in cases where f(x) ≥ 0 throughout a ≤ x ≤ b, f(x) ≤ 0 throughout a ≤ x ≤ b or where f(x) changes sign in the interval a ≤ x ≤ b, with or without the graph provided”.

SymPy evidence `work/brief130-python/i10.py` and `.json` independently verifies the signed pieces, totals, exponential, vehicle and handoff; taking magnitudes yields the stated areas 4, 23/3, 4, e−5+4 ln 2, 40 and 8. The source's x²−4, quadratic and car figures are unchanged. The geometry-only scope reasonably excludes the flawed profit example, already logged under item 20 with its additional location. Area conditions and ordered bounds are retained. See learning review for included zero markers. Count: 0 blockers, 1 should fix, 0 optional; approximately 521 seconds.
