# m-a12i07 maths check

Revision 1, checked 3 November 2026. Source SHA-256 `a7472413f6d93c45f2d6a5f4198ecddb75f04bb746acb5c65b7cd6df06c61f04`. No design, audio or playback inspected.

The following 2024 actions match the fresh official [Integral calculus page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f), with notation linearised; CMS identifiers are checked against `work/brief151/math-official-validation.json`.

- `ci04161a44`: “Consider the definite integral as ∫_{a}^{b} f(x) dx = lim_{Δx→0} ∑_{a,b} f(x)Δx, noting that this implies that the result of a definite integral will be negative when f(x) ≤ 0 throughout the interval a ≤ x ≤ b”.
- `ci723d0f0b`: “Evaluate the definite integral ∫_{a}^{b} f(x) dx by calculating areas using geometrical formulas, where the shape of f(x) allows such calculations, in cases where f(x) ≥ 0 throughout a ≤ x ≤ b, f(x) ≤ 0 throughout a ≤ x ≤ b or where f(x) changes sign in the interval a ≤ x ≤ b”.

1. **Blocker:** Scene 1 presents the last left rectangle as the car's actual −2 m displacement over 7 to 8 s. SymPy gives ∫₇⁸(12 − 2t)dt = −3 m. The rectangle gives an estimate, −2 m. Label and animate it accordingly. Shared with learning.
2. **Should fix:** The learner-facing general statement f ≤ 0 implies a strictly negative integral is false for f ≡ 0. For a continuous function on a nondegenerate interval it implies a non-positive integral, strictly negative if f is negative somewhere. The official point is quoted accurately and should remain verbatim; correct the teaching and notes. Shared with learning.

`work/brief130-python/i07.py` and `.json` check 36, −4 and 32 m; the left/right sums at n = 16, 64 and 256; the 10-unit trapezium, zero balance, −2π semicircle and attempts −21/2 and 6. The site examples and late pack's intended scope agree; the site explicitly explains that its hook uses the speed at t = 1, so that hook is not logged as a mathematical error merely because the initial question omits this explanation. Count: 1 blocker, 1 should fix, 0 optional; 5,711 separate characters, about 531 seconds.
