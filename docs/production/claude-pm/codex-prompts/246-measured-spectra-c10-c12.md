# Brief 246: measured spectra for Chemistry Module 8 c10, c11a, c11b and c12

Read `00-standing-rules.md`. Do not spawn sub-agents. Make no design, narration or source edits, no speech, no renders and no commits. This is research and checking only: it unblocks four designs that are held only because some drawn spectra values are provisional.

**Background.** The designs `docs/production/claude-pm/lessons/chem-m8-c10.md`, `chem-m8-c11a.md`, `chem-m8-c11b.md` and `chem-m8-c12.md` each have a "Numbers to verify" section. Values marked provisional came from memory and must not be drawn until a measured record of the same phase and method backs them. On 30 October NIST returned HTTP 403 and 429. Narrated or on-card values are asterisked.

**Steps.**
1. For every provisional compound, find a measured record. IR: liquid film or ATR (c10's missing ones: ethanol, ethanoic acid, propanone, propan-1-amine, propan-1-ol, propan-2-ol, ethyl ethanoate). 13C and 1H NMR: CDCl3 unless the design states otherwise. Use SDBS (AIST) first; NIST WebBook if it now responds. Record the SDBS number or NIST ID and the URL.
2. Compare every listed value. Correct a centre that is off by more than 15 cm⁻¹ (IR), 0.2 ppm (1H) or 3 ppm (13C), an IR depth that is off by more than 15 %T, and a 1H splitting or integration that differs. Add any missing IR band deeper than 50 %T and any missing NMR signal.
3. Flag every change that alters an asterisked (narrated or on-card) value, and any change that breaks a worked answer or a practice question.
4. Also check c10 card 5's ethanoic acid C–O band (design says near 1100; the science check says near 1290).

**Hand-in.** Write `docs/production/claude-pm/checks/chem-m8-c10-c12-measured-spectra.md`: one table per lesson (compound, technique, source ID, listed value, measured value, change, narrated yes or no), then a short list of narration-affecting changes. Add one line to `status.md`. Root applies the changes, then voices and builds.
