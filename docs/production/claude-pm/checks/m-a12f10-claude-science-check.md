# m-a12f10 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `db12b073c5a6b82cba7ded4780088e5d58d603a8823f503199c9ed32713de4f5`. Source-only check.

The 2024 action is shown on the fresh official [Financial mathematics page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048), with the glossary placeholder resolved against the programme crosswalk:

- `ci9cb798c5`: “Examine the effect of varying the interest rate and repayment amount on the time taken to repay a loan, with or without digital tools or by using a given graph”.

Independent Decimal recurrence and SymPy checks are in `work/brief161/f10.py` and `.json`. The four illustrated repayment counts are 360, 265, 196 and 156; the final $2,500-case payment is about $540.57. The continuous term estimates for the rate comparisons and the 15-year repayment of about $3163.17 agree. At a monthly payment equal to the initial monthly interest, the balance remains unchanged; below it, the balance rises under the stated fixed-rate model.

1. **Should fix:** The first plotted repayment step is $352.71, not $500; specify that the $500 steps begin at $2500.
2. **Should fix:** Scope the “each extra dollar” claim to the smooth estimated curve rather than the count of whole repayments.

These are the learning review's two findings. Site issues are logged separately. Count: 0 blockers, 2 should fix, 0 optional.
