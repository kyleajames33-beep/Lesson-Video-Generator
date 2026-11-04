# m-a12s05 maths check

Revision 1 source-only check, 4 November 2026. Exact arithmetic in `work/brief162/s04-s06.py` and its JSON result.

The CDF strip changes for `[0.5,0.6]` and `[2.5,2.6]` are `11/900` and `51/900`, respectively. Difference quotients at 1.5 for `h=0.1` and `h=0.01` are about 0.34444 and 0.33444 and approach `F′(1.5)=1/3`. The density `2x/9` on `[0,3]` integrates to 1 and gives probability `1/3` on `[1,2]`. The width-0.1 histogram densities are 1, 2.5, 3.5, 2 and 1 per second. `k(4-x)` integrates to `8k`, giving `k=1/8`, `F(x)=(8x-x²)/16` on `[0,4]` and `F(1)=7/16`. Differentiating `x²(3-x)/4` gives `3x(2-x)/4`, valid on `[0,2]`. The attempts give `k=1/4`, upper probability `5/8`, and `f(x)=(2-x)/2` on `[0,2]`. No arithmetic discrepancy found.

The quoted 2024 action text still needs an independent official-live-source check. The site's confusion between relative frequency and density height is recorded separately.

1. **Should fix:** Preserve the piecewise `0` branch outside the support in each displayed density.
2. **Should fix:** Verify in a still that density heights and interval areas are visually distinct.

Count: 0 blockers, 2 should fix, 0 optional.
