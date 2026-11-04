# m-a12f13 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `1670e8dd44cab2cbae27556933bb65c2da36d5c999536508747492eca29db473`. Source-only check.

The 2024 actions are supported by the fresh official [Financial mathematics page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048), with the glossary placeholder resolved against the programme codename crosswalk:

- `ciaa055daf`: “Define and model the future value of an annuity as the sum of all the payments, together with the interest they have earned”.
- `ci21651d90`: “Solve problems involving annuities in which payments are made at the end of each time period and the future value of an annuity is calculated at the end of one of these periods using the formula for the sum of the first n terms of a geometric sequence”.

Independent exact-rational SymPy evidence is `work/brief161/f13.py` and `.json`. The five-year and 30-year examples round to $20,298.05 and $240,644.24, and the 315th and 316th balances confirm the first crossing. The two attempt answers round to $4,973.07 and $6,211.63. The first-deposit value rounds to $268.43, and the three-deposit value is exactly $603.005.

1. **Should fix:** Add the r ≠ 0 condition to the quotient formula and the r = 0 result nM.
2. **Should fix:** Describe $603.01 as the rounded display of $603.005 rather than an exact unrounded value.
3. **Should fix:** The oldest deposit earns the most in the positive-rate example; scope the memory aid to that case.
4. **Should fix:** Author note for attempt 2 says the unrounded value is 6211.6325..., but exact evaluation gives 6211.626594.... Both round to the stated $6211.63. Correct the author note without changing the learner answer.

The first three findings match the learning review. No new site finding was confirmed. Count: 0 blockers, 4 should fix, 0 optional.
