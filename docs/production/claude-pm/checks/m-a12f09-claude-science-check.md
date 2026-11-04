# m-a12f09 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `05e2381afe98a9750580b496950263cc4cfcce82e4907ddaa2d6a457b41ab324`. Source-only check.

The 2024 action is supported by the fresh official [Financial mathematics page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048), with its glossary placeholders resolved using the programme crosswalk:

- `ci4ca53e2c`: “Recognise a reducing balance loan algebraically as a compound interest loan with periodic repayments”.

Independent exact-rational SymPy evidence is in `work/brief161/f09.py` and `.json`. The third car-loan balance is 28732.42488, or $28732.42 to the cent; the $400000 loan first falls below half at repayment 242; the two-month attempt is $11619.05 and the second repayment factor is 225000. The table carries full precision until display, as specified. The repayment timing is interest first and then payment. The displayed rounded final repayment needs the smaller last payment noted in the design.

1. **Should fix:** The closed form divides by r, so mark r ≠ 0 and state the zero-rate recurrence result Aₙ = P − nM.
2. **Should fix:** The shape claim applies to the illustrated positive-rate loan with repayments sufficient to reduce the balance, not to every recurrence with periodic payments. Scope it to the example.

These match the learning review's findings. The site's third-balance rounding error and overgeneralised interest split are logged separately. Count: 0 blockers, 2 should fix, 0 optional.
