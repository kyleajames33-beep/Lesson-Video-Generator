# m-a12s09 maths check

Revision 1 source-only check, 4 November 2026. Deterministic Python recreation and exact combinatorics are in `work/brief162/s07-s09.py` and `.json`.

With `random.Random(1636)` and 1,000 `gauss(500,8)` samples, the documented 13 class counts are exactly `2,17,45,94,153,192,191,152,94,41,16,3,0` and sum to 1,000. With `random.Random(4505)` and 400 paths of 12 binary deflections, the peg bins reproduce `0,1,7,22,49,74,91,80,47,22,6,1,0`. There are `2¹²=4096` equally likely routes; exactly `C(12,6)=924` go to the centre and one reaches a given extreme. `N(500,64)` has standard deviation 8. Changing σ to 12 scales horizontal distances by 1.5 and normal-density height by 2/3. `N(64,16)` has σ=4, and `N(250,25)` has σ=5. The standard normal tail above z=1.6 is approximately 0.0548, giving central probability `1-2(0.0548)=0.8904`. All figures check.

1. **Should fix:** Preserve the distinction between the seeded simulation and a recorded physical data set.
2. **Should fix:** Ensure the peg-board evidence is an explanatory analogy for a common bell shape, not a claim that every independent sum is exactly normal.

The official syllabus wording for the listed action codenames has not yet been checked against live NSW pages. Count: 0 blockers, 2 should fix, 0 optional.
