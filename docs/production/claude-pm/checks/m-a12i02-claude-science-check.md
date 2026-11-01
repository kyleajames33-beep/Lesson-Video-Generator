# m-a12i02 maths check: Revision 1

Written design reviewed 2 November 2026; SHA256 `6bb0f637b7bd399c132f5df8091015a4a68013ae2afede8bb1b`. The 2024 integral calculus page gives the real-power and matched reverse-chain actions: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f.

## Finding

1. **Should fix:** For a disconnected original domain x≠0, +C with a single common constant omits primitives with independent constants on x<0 and x>0. The author note recognises this but the learner-facing general-family presentation does not. Label independent branch constants or state the result on one interval. This overlaps the learning review.

## Recalculation

SymPy verifies the primitives for x⁻³, x^(3/2), the expanded and bracket forms, the matched 2x and x factors, and both attempts. Their displayed bracket forms differ by exactly 1/6. The failed candidate (x²+1)⁴/(8x) has derivative 6 at x=1, not 8; the attempted product primitive has derivative 112/5 there, not 16. The root example differentiates to x/√(x²+4) for all real x. The real-root examples use one-sided endpoint derivatives as recorded. The site water-tank calculations 108, 10.9027 and 6.8683 agree. The retained domain cannot be widened by simplification.

Count: 0 blockers, 1 should fix, 0 optional, shared with the learning review. 5,669 characters, about 520 s.
