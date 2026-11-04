# m-a12f15 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `589eb10810fc8fc2497c7cba3ccf63e69d3ec09941e602b9b0cbbe6b65523367`. Source-only check.

The 2024 action is supported by the fresh official [Financial mathematics page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048), with its glossary placeholder resolved against the programme codename crosswalk:

- `ci21651d90`: “Solve problems involving annuities in which payments are made at the end of each time period and the future value of an annuity is calculated at the end of one of these periods using the formula for the sum of the first n terms of a geometric sequence”.

Independent exact-rational SymPy calculations are in `work/brief161/f15.py` and `.json`. The deposit needed is $597.30315..., so $597.30 is nearest cent and $597.31 is the least cent amount reaching the target. The fortnightly result rounds to $720885.32, and early rounding of r produces about $721020.61. The 81- and 82-deposit balances, $23435.17 stopped-payment example, $1099.08 target deposit and $29214.53 two-stage answer agree. Root decision 50's rounding direction is correct.

1. **Should fix:** Scope the “every annuity problem” summary to the contribution model being used.
2. **Should fix:** Include r ≠ 0 for the quotient and the zero-rate special case.

These are the learning review findings. Confirmed site rounding and commentary errors are logged separately. Count: 0 blockers, 2 should fix, 0 optional.
