# s03 redesign: maths check (11 November 2026)

**Changes required before plates or voice.** Independent exact-fraction calculations and regenerated seeded simulation are in `work/brief240/s03-calculations.json` and `check-s03.py`. For the cat distribution, mean 1.7, E(X²)=3.7, variance 0.81, standard deviation 0.9, and probability within one standard deviation 0.7 check. The 10, 100, 1,000 and 2,000 run sums are 21, 161, 1,706 and 3,415. The claim model gives expected payout $210, expected difference from the $300 premium $90, payout variance $1,285,900 and standard deviation $1,133.98.

Scene 4 calls −1.7 and −0.7 'distances'; they are signed deviations, not distances. It says squaring makes all values positive; in general it makes them nonnegative, since a deviation can be zero. Scene 5 says standard deviation is a 'typical distance', an informal description, not the mean absolute distance: call it a measure of spread and avoid implying an exact average distance. The $90 insurer figure is the modelled premium minus expected claims before expenses and other costs; scope the profit statement accordingly. A running average illustrates convergence, but a fixed 1,000-observation run is not guaranteed to be close.

Live https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson07.sa.html card 03 confirms the probabilities 0.1, 0.3, 0.4 and 0.2, mean 1.7 and variance 0.81. Short-answer Q2 confirms the $300 premium, $8,000 and $1,000 claims with probabilities 0.02 and 0.05, and the modelled $210 payout and $90 difference.


### Repaired source recheck,12November2026

Current source SHA256 `5f95209090686d1ca1f1df464a073f652f61a53d7fb764579f60f8a6b4ee76a5`. Result:0 blockers,0 remaining source should-fix findings in the repaired scope. Signeddeviations replace distances;zero deviations allowed after squaring. SD correctly described as spread,withsqrtvariance formula retained. Runningmean isone illustrative run,not deterministic convergence path. Insurer90dollars ispremium minus expected claims before othercosts,not assertedprofit. Originalmu1.7,variance0.81 andpayout210/sigma1134 calculations retained.

Independent recount:5981characters/14scene strings,noem dashes. Changed narration andauthor repairnotes comparedwith priorfullreview;unchanged calculations/live-sourcechecksretained. Current stringsinwork/brief240/root68-source-audit/s03.json. Nativeartmeasurements/guide deviationsretainedforbuilderfitting underdecision30;root68readytovoice. No paid speechorfinishedtake repeatedbythisreview. Measuredtiming,actualmotionandhumanlisteningremainseparategates.
