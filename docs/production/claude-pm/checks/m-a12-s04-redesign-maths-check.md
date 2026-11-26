# s04 redesign: maths check (11 November 2026)

**Changes required before plates or voice.** Independent fraction and symbolic calculations are in `work/brief240/s04-calculations.json` and `check-s04.py`. The frequencies 20, 50, 70, 40, 20 total 200; cumulative relative frequencies are 0.1, 0.35, 0.7, 0.9, 1. The class-cut estimate is 0.225 under the stated uniform-within-class assumption. For F(x)=x²/9, the derivative on [0,3] is 2x/9, the specified interval probability is 1/3 and the upper tail 5/9. The second attempt gives 1/2.

The histogram gives estimates of the population CDF, not exact probabilities. Scene 8 calls the cumulative sample figures F and states exact equalities; label them as estimates or explicitly define an empirical CDF and distinguish it from the population model. The narrowing-window argument assumes a uniform distribution within that class and illustrates a particular density, rather than proving every continuous random variable's interval probabilities are proportional to width. A continuous distribution need not have support equal to one interval, so 'continuous means it can take any value in an interval' should be framed as this example. Likewise probability can be assigned to sets other than intervals; say intervals are the useful events studied here. CDF limits are 0 and 1 as x tends to negative and positive infinity, not necessarily attained at finite x.

Live https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson08.sa.html card 02 confirms the five class counts and estimates, and Problems 1–3 confirm x²/9 on [0,3], the derivative, 1/3 and 5/9.


### Repaired source recheck,12November2026

Current source SHA256 `d669499c8a28d7f3dc4e6b1a907fd521ee92ec831d486127ba5718120beb4f0f`. Result:0 blockers,0 remaining source should-fix findings in the repaired scope. Empirical histogram/CDF nowexplicit estimates,within-class proportionality expressly assumes even spread. Singletons zero probability remainsvalidforcontinuous models. Intervals arethe chosen events,not the onlypossible positiveprobabilityevents. CDF endpoints nowlimits;bounded-example statements scoped. Reactiontime counts20/50/70/40/20 sum200 andestimatedintervalprobability0.6 unchanged.

Independent recount:6288characters/18scene strings,noem dashes. Changed narration andauthor repairnotes comparedwith priorfullreview;unchanged calculations/live-sourcechecksretained. Current stringsinwork/brief240/root68-source-audit/s04.json. Nativeartmeasurements/guide deviationsretainedforbuilderfitting underdecision30;root68readytovoice. No paid speechorfinishedtake repeatedbythisreview. Measuredtiming,actualmotionandhumanlisteningremainseparategates.
