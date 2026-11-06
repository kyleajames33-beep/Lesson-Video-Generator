# phys-y12-m8-v15 science check

Independent Codex source review,7 November2026. Revision1 SHA256 `5154cb6354fe9e6be009dc200868388cba03f39b51e39d955c9e4c2b238d0d0f`. No source edits.

P8-IQ4-02 (Physics Stage6,2017):
> examine the model of half-life in radioactive decay and make quantitative predictions about the activity or amount of a radioactive sample using the following relationships:

1. **Should fix (scenes2,3,7 and lambda labels):** Lambda is a decay rate/probability per unit time, not the exact probability of decay in a whole second. The exact interval probability is1-exp(-lambda*dt); lambda*dt is its short-interval approximation. A decay constant can exceed1 per second, as the lesson's short-half-life examples imply. Use the existing short wording for a fixed rate per nucleus and distinguish the counter's50% per throw from lambda. [The Bureau of Standards treatment](https://nvlpubs.nist.gov/nistpubs/Legacy/circ/nbscircular476.pdf) makes the small-interval proportionality explicit. This repairs the meaning of the parameter that the derivation uses.

2. **Should fix (scene7, with v14 scene1):** A detector's count rate is not generally the source's activity in Bq. Only a fraction of radiation is detected, and the background must be removed. The count-rate curve can have the same half-life with fixed geometry and detection efficiency. State that distinction in place of the current "what we actually measure is activity" wording. Keep the counts/s data labelled counts/s, as it already is. Do not relabel it Bq.

3. **Should fix (scene17):** "Every one of these decays" releases "millions of electron volts" is false for the C14 beta example carried from v14 (endpoint about156keV). Remove the universal energy magnitude from this existing handoff sentence; retain the missing-mass question. Carry the matched opening into v16.

The data subtraction gives40.0,22.4,11.9,6.9,3.5counts/s. The70s model gives40.0,22.0818,12.1901,6.7295,3.7150 before the stated scatter. I131 lambda=0.0866434day^-1,24days=80Bq;10days gives269.087Bq unrounded, consistent with269Bq. P32 lambda=0.0484718day^-1=5.61016e-7s^-1;30days gives1.86878e10 nuclei, or1.86746e10 using the displayed rounded exponent. The crossed mixed-unit result is7.99987e10. Binomial20 probability for7 to13 survivors is0.884682. At10^12 the relative one-sigma fluctuation about half is10^-6; this is a typical scale, not a guarantee on every run. The conditional survival question is50% regardless of the earlier30minutes. Numbers: `work/brief193/calculations-v14-v15.json`.

5634 scene-sum characters, 5651 with inter-scene spaces, matching the headline convention. No U+2014 or U+2061. All stated syllabus quotations match the retained official2017 DOCX. Current live-site verification remains pending because the checkout is absent. Built fit, actual motion, exact voiced student review, human listening and practical conduct remain unverified.

Result:0 blockers,3 should fix,0 optional. Resolve findings before recording.
