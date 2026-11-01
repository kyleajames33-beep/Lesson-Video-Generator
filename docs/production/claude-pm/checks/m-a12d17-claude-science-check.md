# m-a12d17 maths check: Revision 1

Written design reviewed 2 November 2026; SHA256 `daecfc55f1bd9ed79e3f567ce001de34abd64803b26d4f74052b749b2d46ce7f`. The 2024 Applications of calculus points and their original mathematical notation are on https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104.

## Findings

1. **Should fix:** For the deliberately wiggly comparison, numerical roots of its derivative are ±0.150892, ±0.786544, ±1.324252, ±1.576538. The stated ±0.150 and ±1.325 are inconsistent with ordinary three-decimal rounding. Use the computed roots for the interval tint and round to ±0.151 and ±1.324 in author data. Silent correction.
2. **Should fix:** The author description "always increasing" for x−4/x requires separate-domain scope. Its derivative is positive on each of (−∞,0) and (0,∞), but the function is not increasing on the union. Same issue as the learning review.

## Recalculation

SymPy confirms derivatives of x³−3x, x+1/x, x⁴−4x³, x−4/x and x⁴/4−x³+4x. The cubic extrema are (−1,2),(1,−2), inflection (0,0), roots 0 and ±√3. x+1/x has local maximum (−1,−2), local minimum (1,2), no real roots or inflection, and approaches y=x at both ends. The graph-only cases have the reported zeros and derivative turns; the nonzero real root of the second graph is −1.678574, and endpoints are 7.7044 and 6.911025. The wiggly curve has eight derivative sign changes in the stated interval. The two attempts' exact derivatives and domains are correct.

Count: 0 blockers, 2 should fix, 0 optional; one overlaps the learning review. 6,280 characters, about 567 s; preserve the reserve-cut order.
