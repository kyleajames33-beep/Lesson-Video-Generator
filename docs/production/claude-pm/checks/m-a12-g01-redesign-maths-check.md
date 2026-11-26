# g01 redesign: maths and error check (11 November 2026)

**Changes required before plates or voice.** Independent symbolic calculations are in `work/brief240/g01-calculations.json` and `check-g01.py`. For x²−6 ln x, the gradient equation yields −1 and 3; only 3 is in the domain, with tangent y=4x−3−6 ln 3. The tangent from the origin to eˣ touches at (1,e) and is y=ex; eˣ−x≥1 confirms the crossed line y=x misses the curve. The stationary-point conditions give a=0, b=−3 and the other point (−1,2) is a local maximum. Attempt 1 retains 1+√5 and rejects 1−√5; attempt 2 touches ln x at e² and gives y=x/e²+1. The rate-graph handoff ends at 2e.

Scene 7 says 'one equation can't find two unknowns' as a general statement. One equation in two unknowns can have a unique real solution in special cases; say this particular linear equation leaves a family of possibilities. The 'last step picks the rule' heuristic is useful for the displayed expression but does not force a unique technique, since an equivalent expression can be differentiated another way. The spoken attempt 'natural log of x squared minus four' should name parentheses explicitly to distinguish ln(x²−4) from (ln x)²−4. The skateboard's screen rotation must use the unequal x/y scales, not the 75.96° mathematical angle directly.

Live https://hscscience.com.au/subjects/maths-advanced/year12/applications-of-calculus/lesson06.sa.html Problem 3 confirms the original cubic, point (1,−2), a=0, b=−3 and other maximum (−1,2). The s12/g01 opening and g01/g02 rate-graph handoff require exact build-frame inspection.


### Repaired source recheck,12November2026

Current source SHA256 `a1082575df4176ef891f2154b90bb9fa0de8184d800f28b1a2199e9d130eb6b6`. Result:0 blockers,0 remaining source should-fix findings in the repaired scope. Lastoperation nowbestfirst-rule heuristic,not absolutemandate;memoryline sayssuggests. Oneequation/twounknownsclaim scopedtothisfamily. Stationarydip givesa0,b-3;localmaxclassification nowearnsignchange. Spokenln(x2-4)grouping explicit. Drawnskateboardangle mustuseactualunequalwindowunits;75.96degreesreservedforequalunits. Fullmath/errorreviewretained.

Independent recount:5889characters/14scene strings,noem dashes. Changed narration andauthor repairnotes comparedwith priorfullreview;unchanged calculations/live-sourcechecksretained. Current stringsinwork/brief240/root68-source-audit/g01.json. Nativeartmeasurements/guide deviationsretainedforbuilderfitting underdecision30;root68readytovoice. No paid speechorfinishedtake repeatedbythisreview. Measuredtiming,actualmotionandhumanlisteningremainseparategates.
