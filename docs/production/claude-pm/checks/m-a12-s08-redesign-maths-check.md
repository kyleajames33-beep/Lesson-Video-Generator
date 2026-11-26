# s08 redesign: maths check (11 November 2026)

**Changes required before plates or voice.** Independent symbolic calculations and regenerated data are in `work/brief240/s08-calculations.json` and `check-s08.py`. The midpoint sums are 2.625, 2.65625, 2.6640625; the playlist density integrates to 1, has mean 4 and variance 4−32/π²≈0.7577; the second attempt gives μ=π/2−1 and variance π−3. The seed-909 handoff histogram reproduces all 14 class counts. Seed 808 reproduces the first ten displayed songs and the running means when full precision is retained; rounding each song first changes the five-song mean from 4.365 to 4.366.

The estimate 40/4=10 is a useful duration ratio but is not by itself the expected number of whole songs that finish in a fixed 40-minute window. Frame it as a rough planning estimate and specify whether a partially played song counts. The shown sample's ten songs total about 40.11 minutes, so it does not actually fit ten complete songs within 40 minutes. The balance-and-strip probabilities are approximations for a general density; label f(x)Δx as an approximation, not an exact point probability. E(X²)≥μ² in general, with equality possible; 'must be bigger' should be 'at least as large'. Standard deviation is a measure of spread, not the exact mean absolute distance.

Direct browser inspection of random-variables lesson 10 confirms cards 03, 04 and 06: for x/8 on [0,4], mean 8/3 and variance 8/9, the uniform moment formulas, and the instruction to set up out-of-course integrals before using a computational application.


### Repaired source recheck,12November2026

Current source SHA256 `8f4683d1369f831aa10d4b044fe20ec45886136ba61747dc6fdacf1a8c7aaa04`. Result:0 blockers,0 remaining source should-fix findings in the repaired scope. Stripprobability clearlyapproximate. E(X2)>=mu2 includesdegenerate equality;SD describedasspread ratherthanmeanabsolutedistance. Fortyminutes/4minutes nowrough song-equivalentguide,not exact expected renewalcount;lastsong maynotfinish. Fullprecisiontrace requirementretained. Newindependentquadrature confirmsplaylistnorm1/mean4/varianceabout0.758;midpointmeans2.625/2.65625/2.6640625 correct.

Independent recount:6218characters/14scene strings,noem dashes. Changed narration andauthor repairnotes comparedwith priorfullreview;unchanged calculations/live-sourcechecksretained. Current stringsinwork/brief240/root68-source-audit/s08.json. Nativeartmeasurements/guide deviationsretainedforbuilderfitting underdecision30;root68readytovoice. No paid speechorfinishedtake repeatedbythisreview. Measuredtiming,actualmotionandhumanlisteningremainseparategates.
