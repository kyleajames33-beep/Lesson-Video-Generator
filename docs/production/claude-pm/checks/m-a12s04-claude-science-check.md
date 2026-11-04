# m-a12s04 maths check

Revision 1 source-only check, 4 November 2026. Independently recalculated in `work/brief162/s04-s06.py` with exact SymPy arithmetic.

The reaction-time counts total 200 and give probabilities 0.10, 0.25, 0.35, 0.20, 0.10. The 0.2–0.4 probability is 0.6, and the even-spread estimate below 0.25 is 0.225. The class density estimate of 3.5 per second gives about 0.07 over 0.34–0.36. The cumulative values at successive class boundaries are 0, 0.1, 0.35, 0.7, 0.9 and 1. The function `F(x)=x²/9` on `[0,3]` gives `F(1)=1/9`, `F(2)=4/9`, interval probability `1/3`, upper tail `5/9`, and derivative `2x/9≥0`. Attempt 1 gives `120/400=0.3`; attempt 2 gives `(21-5)/32=1/2`. The discrete die endpoint comparison is `4/6` versus `2/6`. No arithmetic contradiction found.

The syllabus action codenames `cibf81b169`, `ci04530a48`, `ci9dad7e9e`, `cicb65fc88` are present in the design. Official-live-page word-for-word verification remains open. The site histogram density confusion is logged in the site correction file.

1. **Should fix:** State the uniform-within-class assumption when computing the fractional class count; the estimate is not exact.
2. **Should fix:** Check the CDF formula's flat branches and endpoint conventions in the eventual rendered UI.

Count: 0 blockers, 2 should fix, 0 optional.
