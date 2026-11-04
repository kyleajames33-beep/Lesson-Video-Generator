# m-a12f06 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `44550c882d866040522eacb4136daf34984512d5a8605482a98af719d9c86c09`. Source-only check.

The 2024 actions match the fresh official [Sequences and series page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617), with notation linearised; the IDs match the programme crosswalk:

- `ci2edbe060`: “Prove by expansion (x − 1)(xⁿ⁻¹ + xⁿ⁻² + … + x² + x + 1) = xⁿ − 1 for whole numbers n ≥ 1”.
- `ci3f619798`: “Develop the formula Sₙ = a(1 − rⁿ)/(1 − r) for the sum of the first n terms of a GP where r ≠ 1, and use this formula to solve problems”.

SymPy evidence is in `work/brief161/f06.py` and `.json`: the telescoping identity was checked for n = 1 to 6; the general cancellation argument is given in the design. The totals 1023, 189, −182, 255/2, 242 and 765 agree. The stated r = 1 case is handled without division. The source examples and handoff values agree.

1. **Should fix:** Scene 5 calls the whole numerator positive based on r, though its factor a may be negative. Limit the positive claim to the bracketed numerator factor and denominator. This is the learning review's finding.

The site's sign-range and purported syllabus quotation issues are logged separately. Count: 0 blockers, 1 should fix, 0 optional.
