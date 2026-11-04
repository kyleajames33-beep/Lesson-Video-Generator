# m-a12f02 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `05651132b98ae6a73f8f7e01cc5238c78f7d9a984f562ba035ffb9362b98e7eb`. Source-only check; no recorded or animated preview.

The quoted 2024 actions match the fresh official [Sequences and series page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617) with mathematical notation linearised; codenames are checked against the programme crosswalk.

- `cif2d358d2`: “Define a sequence a_n to be an arithmetic sequence, or arithmetic progression (AP), if every difference a_n − a_{n−1} of successive terms is the same where n ≥ 2, that is a_n − a_{n−1} = d for some constant d called the common difference”.
- `cie8f37eac`: “Develop the formula a_n = a + (n − 1)d for the nth term of an AP, where a is the first term and n ≥ 1, and use it to solve problems”.
- `cic396780a`: “Recognise that a_n is a linear function of n in an AP”.

Independent SymPy evidence is `work/brief161/f02.py` and `.json`. The 403 guess and 399 correction, positions 25 and 26, fractional candidate 101/4, the two simultaneous-equation solutions, the first negative term −1, and attempts −83 and a = 2, d = 4 all agree. The discrete points and open position-zero guide are appropriate. Site examples are retained and the supplied attempts are distinct.

1. **Should fix:** Scene 2's instruction to find every difference needs the distinction between checking a finite list and proving the rule for an infinite sequence. This is the learning review's finding, not a second error.

Confirmed site issues are recorded in `site-corrections-maths-a12.md`. Count: 0 blockers, 1 should fix, 0 optional.
