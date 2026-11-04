# m-a12f05 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `4e877aca4f1145913bfe1d660adf9279a22efb1e2729afbca0c00142fc6fb301`. Source-only check.

The 2024 actions below match the fresh official [Sequences and series page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617), with mathematical notation linearised; IDs are checked against the programme crosswalk:

- `cicedf7ec4`: “Define a sequence aₙ to be a geometric sequence, or geometric progression (GP), if every ratio aₙ/aₙ₋₁ of successive terms is the same where n ≥ 2, that is aₙ = raₙ₋₁ for some non-zero real number r called the common ratio”.
- `cif4672044`: “Develop the formula aₙ = arⁿ⁻¹ for the nth term of a GP, where a is the first term and n ≥ 1, and use it to solve problems”.
- `cic01c1893`: “Recognise that aₙ is an exponential function of n in a GP”.

Independent SymPy work is in `work/brief161/f05.py` and `.json`. The 42-fold paper thickness is about 439805 km; the eighth term is 384; 768 and 1536 bracket 1000; and the attempts give −972 and the two pairs (2, 3), (−2, −3). The n = 10 threshold uses the exact fraction 1000/3. The worked values and stated checks agree.

1. **Should fix:** For 0 < r < 1, a negative first term makes the sequence increase towards zero, rather than fall; scope the scene 5 wording to the positive example.
2. **Should fix:** Even powers need a positive result for two nonzero real ratios. A negative result gives no real ratio; scope scene 8's two-sequence statement.
3. **Should fix:** The ratio definition needs a nonzero first term as well as r ≠ 0, so the divisors exist. Make the nonzero condition explicit when the division test is introduced.

These are the learning review's three findings. The site's early rounding of 1000/3 is logged separately. Count: 0 blockers, 3 should fix, 0 optional.
