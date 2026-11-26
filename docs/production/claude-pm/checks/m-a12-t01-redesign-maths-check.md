# t01 redesign: maths check (11 November 2026)

**Changes required before plates or voice.** Independent symbolic calculations are in `work/brief240/t01-calculations.json` and `check-t01.py`. The hook has y(0)=2, peak 3 at π/3 and trough −1 at 4π/3; sin(2x+π)=−sin(2x). The worked graph's five points give −4, −1, 2, −1, −4 and the first attempt gives 2, 6, 2 at its named trough/peak/trough. The daylight handoff evaluates to 11, 13, 14, 13, 10, 11 at the named points.

At x=1.5, 2cos(1.5−π/3)+1=2.798449..., so the author note's 2.799 is incorrect to three decimal places; use 2.798 or calculate the live readout from the formula. The buoy narration uses x both as time in seconds and as an angle in radians. State the model's angular frequency of one radian per second, or distinguish time t from the dimensionless angle, so the period and phase delay have clear units. The general formula 2π/a is scoped in the narration to positive a; keep that condition or use |a| for nonzero negative a. The finite horizontal display of tan does not mean all of its infinitely many asymptotes are shown.

Live https://hscscience.com.au/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson01.sa.html card 06 confirms the hook 2cos(x−π/3)+1 and its parameters, Problem 1 confirms −3cos(2x−π/2)−1, and SA1 confirms the −2cos(3x−π/2)+4 attempt and its amplitude, period, shift and range.


### Repaired source recheck,12November2026

Current source SHA256 `13db7859876998906da4b3c8c3cfdd96646ccf4beac74a8a9bb78cb45d0e1d52`. Result:0 blockers,0 remaining source should-fix findings in the repaired scope. Buoytime/radian conversion nowexplicit angularrate1radianpersecond;phase delay thereforepi/3seconds inthismodel. Cursorat1.5independentlyrecomputed2.798449. Repeatingtanasymptotes everypi acknowledged;onlywindowedonesdrawn. Current6289charactersestimatednearcap;measurebefore anyreserve trim. Nativebuoyedge differences remain reported forbuilderfitting,not pixel-identicalcertification.

Independent recount:6289characters/15scene strings,noem dashes. Changed narration andauthor repairnotes comparedwith priorfullreview;unchanged calculations/live-sourcechecksretained. Current stringsinwork/brief240/root68-source-audit/t01.json. Nativeartmeasurements/guide deviationsretainedforbuilderfitting underdecision30;root68readytovoice. No paid speechorfinishedtake repeatedbythisreview. Measuredtiming,actualmotionandhumanlisteningremainseparategates.
