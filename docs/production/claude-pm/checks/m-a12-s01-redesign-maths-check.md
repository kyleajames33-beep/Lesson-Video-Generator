# s01 redesign: maths check (11 November 2026)

**Changes required before plates or voice.** Independent calculations in `work/brief240/s01-calculations.json` and `check-s01.py` confirm the 200 counts and frequencies, the three 200-roll comparison runs and their maximum deviations, the coin multiplicities 1:3:3:1 and counter-pair multiplicities 1:4:1. The deterministic shuffle with Python seed 5 reproduces the stated first 12 rolls and all six checkpoints, including 31/150 ≈ 0.207. SciPy gives P(N≥38)=0.2123 for Bin(200,1/6), assuming independent fair rolls and this preselected face.

Three illustrative fair simulations cannot alone establish a calibrated conclusion about fairness; the comparison selects the largest deviation among six faces in each simulation but compares it with the preselected four in the observed sample. Frame the runs as illustrations that a deviation of this size can occur under fairness, not as a formal test. A larger simulation or a prespecified comparable statistic would support a stronger statement. The binomial probability is for fours specifically and is not a general six-face goodness-of-fit test.

Scene 4's exact sum requires unrounded relative frequencies and complete single-valued outcomes; rounding displayed probabilities can make their visible sum differ from one. Scene 13 says a model gives a distribution by reasoning about equally likely outcomes: models need not have equally likely underlying outcomes. Scope to the examples used. Direct browser inspection of https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson05.sa.html confirms the 200-roll hook and all six frequencies 28, 35, 31, 38, 34, 34; site Problem 3 remains unconfirmed.


Source follow-up,11November: Current lesson05 Problem3 all four steps revealed and checked:0.19versus1/6, about0.023difference, insufficient evidence conclusion. Previous unconfirmed-Problem3 reservation is superseded. See work/brief240/source-followups-nov11.md. Existing findings retained.


### Repaired source recheck,12November2026

Current source SHA256 `0cc46cf0672dc50810e72d47af7e7da939fd849a5102c693b39d154ca0fd4e75`. Result:0 blockers,0 remaining source should-fix findings in the repaired scope. Unrounded frequencies sum exactly1 by exhaustive mutuallyexclusive counts;roundedsums may differ. Maximum-face discrepancy comparison nowexplicit illustration,not formal preselected-face test. General models no longer require equallylikely outcomes. Original200rolls/38fours sourcechecks retained;predesigned seededruns remain illustrative.

Independent recount:5964characters/14scene strings,noem dashes. Changed narration andauthor repairnotes comparedwith priorfullreview;unchanged calculations/live-sourcechecksretained. Current stringsinwork/brief240/root68-source-audit/s01.json. Nativeartmeasurements/guide deviationsretainedforbuilderfitting underdecision30;root68readytovoice. No paid speechorfinishedtake repeatedbythisreview. Measuredtiming,actualmotionandhumanlisteningremainseparategates.
