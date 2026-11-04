# m-a12f03 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `7164ffec564d2eaf6f6735c067dcbefadc0d1ab0f4fbb74320a0cba01ec0c1af`. Source-only check; no voice or animation checked.

The quoted 2024 actions match the fresh official [Sequences and series page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617), with notation linearised, and the programme codename crosswalk:

- `ci69b15786`: “Develop the formula S_n = (n/2)(a + a_n) for the nth partial sum of an AP, and use the formula to solve problems”.
- `ci3a79ab36`: “Develop the formula S_n = (n/2)[2a + (n − 1)d] for the nth partial sum of an AP, and use the formula to solve problems”.

SymPy results and assertions are in `work/brief161/f03.py` and `.json`: 1 through 50 totals 1275, the 20-term AP total is 820, the 50-to-200 total is 18,875, and S₁₃ = 442 and S₁₄ = 511 bracket the threshold. For 11, 9, 7, ... the two roots are 4 and 8 and both give 32; the attempt results 1455 and 11 terms are correct. The example 1, 2, 4 correctly shows that the average-of-ends formula need not hold for an arbitrary sequence.

1. **Should fix:** Scene 9 states that only arithmetic sequences pair evenly. The non-arithmetic sequence 1, 3, 2, 4 has equal end-pairs and satisfies the same average-of-ends result. Say arithmetic sequences always have this pairing, rather than claiming that no other sequence does. This matches the learning review's finding.

Site lesson 3 errors listed in the design are already logged under items 79 to 82. Count: 0 blockers, 1 should fix, 0 optional.
