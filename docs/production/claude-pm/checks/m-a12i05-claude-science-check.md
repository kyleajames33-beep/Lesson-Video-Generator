# m-a12i05 maths check: Revision 1

Written design reviewed 2 November 2026; SHA256 `088aece458d2b7a5acd492fa5f2bf49760f486cd1e1f7081b6356b020e183f81`. The official 2024 integral calculus actions for trig and composite primitives are at https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f.

## Finding

1. **Should fix:** The left-endpoint rectangles in the final scene exceed the decreasing cos x curve within each subinterval. Do not call them entirely under the curve; use neutral approximation wording or right-endpoint heights. Same finding as learning review.

## Recalculation

SymPy differentiation verifies −cos x, sin x, tan x, 3 sin 5x, tan(2x−π/3), cos(x²+1), sin(x³), tan(sin x), and both attempts. For sec²(2x−π/3), the poles are 5π/12+kπ/2; the named three poles are correct. tan(sin x) is defined for every real x since |sin x|≤1<π/2. The separate constants on tan branches are retained. Test slopes, wheel, crossed derivatives and the 4/8 rectangle widths all agree. The derivative check supports the harder matched example; its reading load needs voiced playback.

Count: 0 blockers, 1 should fix, 0 optional, shared with learning review. 5,765 characters, about 529 s. No new site arithmetic error was identified in the cited differential examples.
