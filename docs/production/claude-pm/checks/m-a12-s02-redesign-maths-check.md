# s02 redesign: maths check (11 November 2026)

**Changes required before plates or voice.** Independent enumeration in `work/brief240/s02-calculations.json` and `check-s02.py` confirms the non-leap calendar has 365 days, with 12 instances of each date 1–28, 11 each of 29 and 30, and 7 of 31. The ordered-dice sum counts are 1,2,3,4,5,6,5,4,3,2,1; the spinner remainder counts are 2,3,3; and three even values from 2 to 20 exceed 15.

Scene 7 concludes 'a uniform distribution needs finitely many values'. This is false for continuous uniform distributions and conflicts with later lessons: specify a *discrete* uniform distribution assigning the same positive probability to each possible value. The finite-or-infinite argument works for a countably infinite set of discrete atoms, not a continuous uniform density. Scene 6 should likewise say that 0.3 cannot be the probability of *each individual value* in a finite discrete uniform distribution; an event combining values can have probability 0.3. The equal-count test assumes an underlying set of equally likely elementary outcomes, as the explanation correctly establishes.

Live https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson06.sa.html confirms the one-die/two-dice comparison, the ordered-sum counts and Problem 1's 0.04 giving 25 values. The calendar is a new context, not a source example.


### Repaired source recheck,12November2026

Current source SHA256 `c39c176ed6720a645aa183e30e833905e34c35833fbd0bc57cf3ddab1dcd9acf`. Result:0 blockers,0 remaining source should-fix findings in the repaired scope. Finiteuniform claim nowrestricted to discrete outcomes;countablyinfinite equal atoms cannot sum1,whereas continuousuniform works differently. Probability0.3 excluded onlyfor each atom,not a group event. Equalcount test expressly requires equallylikely underlying outcomes. Calendar nonuniform counts unchanged.

Independent recount:5797characters/14scene strings,noem dashes. Changed narration andauthor repairnotes comparedwith priorfullreview;unchanged calculations/live-sourcechecksretained. Current stringsinwork/brief240/root68-source-audit/s02.json. Nativeartmeasurements/guide deviationsretainedforbuilderfitting underdecision30;root68readytovoice. No paid speechorfinishedtake repeatedbythisreview. Measuredtiming,actualmotionandhumanlisteningremainseparategates.
