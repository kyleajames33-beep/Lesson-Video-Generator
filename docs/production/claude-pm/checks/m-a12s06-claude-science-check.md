# m-a12s06 maths check

Revision 1 source-only check, 4 November 2026. Calculations independently repeated in `work/brief162/s04-s06.py` using SymPy.

For `f(x)=3x(2-x)/4` on `[0,2]`, the mode is 1 with density 3/4 and the median is 1. The areas of width-0.2 windows `[0.1,0.3]` and `[0.9,1.1]` are 0.0535 and 0.1495. For `f(x)=x/8` on `[0,4]`, `F=x²/16`; the mode is endpoint 4, the median is `2√2`, the quartiles are 2 and `2√3`, and the IQR is `2√3-2≈1.4641`. For `3x²/8` on `[0,2]`, `F=x³/8`, the mode is 2, the median is cube root of 4 and the lower quartile cube root of 2. For the lifetime density `3(4-l)²/64`, the mode is zero and median `4-cuberoot(32)≈0.8252` hours, or approximately 49.5 minutes. Attempt 1's density normalises to 1 and has mode `2/3` with value `16/9`. Attempt 2 gives `Q1=√3-1≈0.7321`; the other quadratic root lies outside the support. These results agree with the source.

The 2024 syllabus point quotations and codenames require fresh official-source confirmation; no direct quotation check is claimed. A positive density peak is not a positive point probability. Flat stretches of `F` can make a quantile equation non-unique, so the site's blanket implication of uniqueness should be qualified.

1. **Should fix:** Keep the density-versus-point-probability distinction explicit on the moving-window scene.
2. **Should fix:** Reject out-of-domain roots explicitly in attempt 2's worked solution.

Count: 0 blockers, 2 should fix, 0 optional.
