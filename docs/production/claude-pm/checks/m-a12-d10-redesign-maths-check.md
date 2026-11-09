# Maths d10 Revision 3: independent maths check

Codex, 8 November 2026. Source SHA256 `95602f780d7bfa1efe1087fe651ee39b1a8f8e8d7e2e984c9f2de814525dffc1`. Reviewed the coaster anchor, changed scenes 1 and 4, readout numbers, rail guide, counts and joins. No source or speech edits.

Result: 0 blockers, 0 should fix, 0 optional in the reviewed changes.

Independent symbolic derivatives and numbers: `work/brief235/d10-calculations.json`. The endpoint/stationary candidates -2, -1, 1 and 3 give heights -2, 2, -2 and 18. Thus the global maximum is 18 at the final endpoint; the minimum -2 occurs at both the start and dip. f(x)-2 factors as (x-2)(x+1)², so highest so far remains 2 after the hump until x=2, then increases to 18. The start slope is 9 and the final slope 24.

All 11 requested rail-guide heights agree with the polynomial and the stated 480 horizontal and 59.08 vertical pixels per unit. Using the final point (2700,150) as the vertical origin, the largest rounding difference is 0.44 native pixels, below the plate's ±6px tolerance. This verifies the requested guide, not any future painted rail. Its unequal scales must also drive car tilt. The car's measured wheel-contact midpoint and the real painted rail still require registration QA.

The rational and exponential candidate values, cubic values, absolute-value candidate heights and stated box values agree. The source method includes endpoints, stationary points and interior nondifferentiable candidates; it does not require classifying stationary points to compare their heights.

Fourteen narration strings sum to 5966 characters. Changed scenes contain 615 and 845. No em dashes. Rounded scene estimates sum to 501s against about 500, under 570; exact re-voiced timing remains pending. Bold cues identify included endpoints, height 18 and both minimum locations in spoken order. The incoming d09 blue cubic frame matches. The outgoing ink fencing plan matches d11's opening and keeps optimisation explicitly for later d18.

Written-source check only. Painted rail fit, car contact, actual motion, voiced cues and listening remain pending.
