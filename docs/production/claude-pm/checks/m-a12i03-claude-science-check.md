# m-a12i03 maths check: Revision 1

Written design reviewed 2 November 2026; SHA256 `f7b2ada5cc87b5fa9e09b2d13a4c56f272922c330de55aa6bd2400a16fa5c758`. The official 2024 integral calculus content is https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f. The design explicitly treats base 1 separately, as the route requires.

## Finding

1. **Should fix:** In the spoken linear-exponent condition, make the zero case explicit: e^(ax+b) is constant when a=0, not when a≠0. This ambiguity is the same issue as the learning review.

## Recalculation

Differentiation confirms e^(3x)/3, 2e^(3x)/3, −e^(−x), e^(x²) with factor 2x, and the base-a result aˣ/ln a for a>0,a≠1. The origin-normalised base family tends to x as a→1; its values at a=2 and 1.1 match the listed 4.328, −1.082, 2.203 and −1.821. The initial condition gives A=e^(−0.5t)+1, with A(6)=1.049787. Expanding (eˣ+1)² gives the stated primitive. Attempts give 2e^(2x−1)+C and 3ˣ/ln3−e^(−2x)/2+C. All quoted values and signs agree at stated precision.

Count: 0 blockers, 1 should fix, 0 optional, shared with the learning review. 5,623 characters, about 519 s.
