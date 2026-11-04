# m-a12f07 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `9048a82460546c951ae0a989f3df3147e66bb25b5d7456fb7738f503236cd9ef`. Source-only check.

The 2024 actions match the fresh official [Sequences and series page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617), with notation linearised; IDs match the programme crosswalk:

- `cieabfd3e4`: “Examine the behaviour of aₙ and Sₙ as n → ∞ for a GP when |r| < 1”.
- `cifcaec9be`: “Develop the formula S∞ = a/(1 − r) for the limiting sum of a geometric series with |r| < 1, and use this formula to solve problems”.

Independent SymPy evidence is in `work/brief161/f07.py` and `.json`. The first eight halving sums, 1/1024, limits 18 and 16/3, repeating decimal 3/11, r = 3/4 and the interval −1/2 < x < 1/2 are correct. The x = 0 case has the independently valid sum 1, but its ratio is excluded by f05's division-based GP definition.

1. **Should fix:** The assertion that negative r gives a limit smaller than the first term requires a > 0; scope it to the worked example.
2. **Should fix:** Explicitly handle x = 0 as a zero-tail series in feedback 2 to reconcile the included answer with the earlier nonzero-ratio definition.

These are the two learning-review findings. No new site correction was established in the parts reviewed. Count: 0 blockers, 2 should fix, 0 optional.
