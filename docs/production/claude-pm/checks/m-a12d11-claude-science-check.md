# m-a12d11 maths check: Revision 1

Written design reviewed 2 November 2026; SHA256 `4f4c71b19f9d97618e1e89ac54963069edcd7ee2bf4f17b893556175dc30dc94`. The official 2024 Year 12 differential calculus page confirms `cid8c675e3`, the action to show that the derivative of tan x is sec²x: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480. Radians and cos x ≠ 0 remain essential.

## Finding

1. **Should fix:** The numbers table and scene 3 readout give tan²(1.35) as about 18.23 and 18.2. Direct evaluation gives 19.84900093, or 19.85 and 19.8/19.85 as appropriate. This is the bottom contribution, not the whole derivative; the total slope is 20.84900093. Replace the readout, no extra time.

## Recalculation

SymPy confirms the quotient proof and derivative of tan(2x − π/3). tan(−2)=2.185040; tan(5)=−3.380515; sec²(1.2)=7.615964. At 0, π/4, π/3, (height,slope) is (0,1), (1,2), (√3,4). At π/4 and 3π/4 tan is 1 and −1 respectively, slopes both 2. For tan(2x − π/3), the exclusions are 5π/12+kπ/2, y(0)=−√3 and y′(0)=8; window endpoint heights are 0.539047 and 0.214408. The transformed asymptotes and carried slope are correct. At 5π/6, sec²=4/3 and tan=−1/√3; tan 3x has derivative 3sec²(3x) and exclusions π/6+kπ/3. Degree conversion factor is π/180. These are scoped to the indicated domains.

The site log item 50 has been corrected: card 07 derives the three reciprocal-trig rules. Scene 11 of this design is the second attempt, not the claimed “every function” statement in root decision 6; that decision must be checked against the actual design containing the claim. Count: 0 blockers, 1 should fix, 0 optional. Narration 5,928 characters, approximately 538 s. The numeric finding is shared with the learning review, not additional to it.
