# m-a12f11 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `d4688f00a8418b4ff46951e1acac05519a83527fc196b78c33b83962121bdd8d`. Source-only check.

The 2024 action is supported by the fresh official [Financial mathematics page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048), with the glossary placeholders resolved against the programme codename crosswalk:

- `ci1c82cea2`: “Solve problems that involve reducing balance loans by calculating the total amount paid, equal periodic repayments, the amount still owing and the time taken to repay the loan”.

Independent exact-rational SymPy calculations are in `work/brief161/f11.py` and `.json`. The calculated repayment is $1791.077646..., the balance after 120 rounded repayments is $161328.16, the separate loan's term is about 59.62398 with $249.87 final payment, and the attempts give $463.99 and 40 repayments. The stated $392.91 remaining after 39 also agrees.

1. **Blocker:** Multiplying 240 by the rounded $1791.08 produces $429859.20, but if the debt is cleared with a smaller last payment, the unrounded model gives a final $1789.992446... and total $429858.112446..., or $429858.11 at cents. Declare the full-payment product approximate or calculate the smaller final payment and actual total consistently.
2. **Blocker:** The statement that all four tasks require Aₙ = 0 is false for the intervening amount-owing calculation: A₁₂₀ is the positive unknown there.
3. **Should fix:** When M = Pr, M/(M − Pr) is undefined, rather than negative. At M < Pr it is negative under the stated positive-rate assumptions. Distinguish the cases.

These correspond to the learning review. Site logarithm and rounding findings are logged separately. Count: 2 blockers, 1 should fix, 0 optional.
