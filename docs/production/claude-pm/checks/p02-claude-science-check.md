# P02 science check (Claude): colourimetry, a real K from a colour reading

Checked 16 October 2026 by an independent reviewer. Input: `../lessons/chem-m5-p02.md` (Revision 1), the pack `../pre-design/chem-c10-colourimetry.md` and `../site-extracts/chem-m5-l13.md`. Method: every number recomputed by a Python script (scratch script, results quoted below); facts checked against web sources. No renders. No em dash (U+2014) in the design or here. Syllabus: NSW Chemistry Stage 6 (2017), Module 5, "conduct an investigation to determine Keq of a chemical equilibrium system, for example: Keq of the iron(III) thiocyanate equilibrium (ACSCH096)".

## Summary

- Every number in the design reproduces exactly from the stated data. The fit, the readings, the dilution, the ICE rows, K = 207.6 (about 208), the 15 percent, the five class repeats (214.4, 205.1, 208.7, 204.9, 207.6; mean 208.1) and the attempt (208.3; slips 27.7 and 158.7) all agree.
- The 447 nm absorption maximum and an ε of about 4.7 x 10^3 L mol^-1 cm^-1 are supported by laboratory manuals; the dataset slope (4690.7) matches. The dataset is labelled "illustrative class data" on every data board, and K is labelled "about 208 for this experiment". Both correct.
- One learner-facing wording error (scene 5: epsilon described as depending on the instrument) and one ambiguity (scene 4: "the thiocyanate we put in"). No other science error.

## Findings

Severity: M = change before recording; L = wording or author-note fix.

| # | sev | where | problem | correct statement | source | resolution |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | L | Scenes 2, 10, author note (e) | Check the wavelength and colour claims. | FeSCN2+ absorbs most strongly at about 447 nm (blue), so the solution looks red-orange to red. Setting the colourimeter to blue light is correct. The absorption band is broad and extends into blue-green, which is why a colour wheel shows red opposite blue-green. | Lumen Learning lab: https://courses.lumenlearning.com/chemistry2labs/?p=225 ; Alameda College Kc lab: https://alameda.edu/hubfs/2025-website-alameda/Chem%201B/Laboratory/Exp7Rev_Kc_determination.pdf ; Missouri S&T datasheet: https://sites.mst.edu/tbone/files/2023/08/Datasheet.pdf | Keep "blue light, about 447 nanometres". Colour wheel visual changed to mark blue to blue-green as the absorbed arc (learning review finding 4). |
| 2 | L | Author note (d), Decisions (4), scene 8 | K "about 208 for this experiment"; site Think First 895, 580, 360 not used. | K for Fe3+ + SCN- depends strongly on ionic strength (and temperature). The zero-ionic-strength value is log K1 = 2.85 (K about 710); values measured in acidified school mixtures at higher ionic strength are lower (the site's own worked examples give 208; not independently sourced here). "About 208 for this experiment" is correctly scoped. | de Berg, Maeder and Clifford (2017), Inorg. Chim. Acta 466, 249: https://research.avondale.edu.au/items/d2ccd1cc-c10e-481e-8513-5bc2a400bd6b/full | Keep. Author note (d) now cites the 2017 value. |
| 3 | M | Scene 5 narration | "Epsilon depends on this instrument, its filter and these cuvettes" | ε is a property of the absorbing species at a given wavelength. What depends on the instrument is the measured slope (ε times path length, as seen through a filter that passes a band of wavelengths), plus cuvette path length. | Buffalo State lab (fitted slope and intercept): https://staff.buffalostate.edu/nazareay/che112/ex6.htm ; LibreTexts formation-constant lab (slope = εb): https://chem.libretexts.org/Courses/Los_Medanos_College/General_College_Chemistry_Lab_Manual_(Semester_2)/01%3A_Experiments/2610_Determination_of_a_Formation_Constant | Narration now: "The slope you measure depends on this instrument, its filter and these cuvettes, so a book value of epsilon won't quite match yours." |
| 4 | L | Scene 4 narration | "the red ion's concentration is simply the thiocyanate we put in" can be heard as the bottle concentration. | [FeSCN2+] in each standard equals [SCN-] in that standard after making up to volume (4.0 to 20.0 x 10^-5 mol/L). | Script (below) | Narration now: "equals the thiocyanate concentration in that standard, which we know from how it was made." |
| 5 | L | References, author note (b) | ε "4.5 to 4.7 x 10^3, not confirmed by a primary source". | Frank and Oswalt (1947) report ε = 4.7 x 10^3 L mol^-1 cm^-1 at 447 nm, as quoted in university handouts. Class calibrations often give lower values (one published class study 2.84 x 10^3), which is the point of calibrating. | Cerritos College Chem 112 handout: https://www.cerritos.edu/chemistry/_includes/docs/Chem_112/Lab/Spectrophotometric%20Determination.pdf ; class study: https://www.researchgate.net/publication/391521217 | References line rewritten; the dataset needs no rescaling. Codex asked only to confirm the original paper if a copy is available. |
| 6 | L | Scene 4, author note (c) | Excess Fe3+ assumption | Standard method: a large excess of Fe3+ drives almost all SCN- to FeSCN2+. With [Fe3+] = 0.160 mol/L and K = 207.6, fraction complexed = K[Fe] / (1 + K[Fe]) = 0.971. "Almost every" is correct; the error direction (slope too low, K too high) in author note (c) is correct. | Lumen Learning lab (above); script | Keep. |
| 7 | L | Scene 3, author note (a) | A = εlc taught without the log | Correct at this level; A = log10(I0/I) is held in the author note. Proportionality holds for dilute solutions in a narrow band of light; the line's range is stated on screen. | LibreTexts lab (above) | Keep; small screen tag added so "absorbance doubles" is not read as "half the light gets through". |
| 8 | L | Scene 8 | "Only fifteen percent of the iron became the red ion, so K in the hundreds does not mean almost all products" | Correct: 1.50 x 10^-4 / 1.00 x 10^-3 = 15.0 percent. Because this K has units of L/mol strictly, its size alone does not fix the extent; at about 10^-3 mol/L, K x c is about 0.2, so conversion is small. The C5 middle band statement is a fair HSC form. | Script | Keep. |

## Script results (Python, 16 Oct)

- Standards: 0.00200 x V / 25.00 for V = 0.50 to 2.50 mL gives 4.00, 8.00, 12.0, 16.0, 20.0 x 10^-5 mol/L. [Fe3+] = 0.200 x 20.00 / 25.00 = 0.160 mol/L (800 times the largest [SCN-]). Fraction complexed 0.9708.
- Least-squares fit through (0, 0.000), (0.40, 0.191), (0.80, 0.374), (1.20, 0.566), (1.60, 0.751), (2.00, 0.939) x 10^-4: slope 4690.7 L/mol, intercept 0.00110, R^2 = 0.99997. Through the origin: 4698.2.
- Worked reading: (0.705 - 0.0011) / 4690.7 = 1.5006 x 10^-4. Card: 0.704 / 4690 = 1.5011 x 10^-4. Both report 1.50 x 10^-4.
- Dilution 0.00200 x 5.00 / 10.00 = 0.00100. Equilibrium reactants 8.50 x 10^-4. (8.50 x 10^-4)^2 = 7.225 x 10^-7. K = 207.61. Percent 15.0. Bottle-value route 43.8.
- Class repeats (true x from K = 207.6, absorbance from the fit plus the stated noise, read back to 3 significant figures): A = 0.162, 0.303, 0.448, 0.575, 0.705; read 3.43, 6.44, 9.53, 12.2, 15.0 x 10^-5; K = 214.4, 205.1, 208.7, 204.9, 207.6; mean 208.1; range 204.9 to 214.4; half-range 2.3 percent.
- Attempt: starts 9.00 and 7.00 x 10^-4; reading (0.470 - 0.0011) / 4690.7 = 0.9996 x 10^-4 (fit at 1.00 x 10^-4 is 0.4702); E 8.00 and 6.00 x 10^-4; product 4.80 x 10^-7; K = 208.3. True x for K = 207.6 is 0.9973 x 10^-4 (reads as 1.00). Slips: bottle values 27.7; initial values 158.7; water forgotten 125.9.

## Owner-rule checks

ICE: I for initial, C for change, E for equilibrium, with the measured value in the E row first: yes (7b, 12a). General algebra moves only: yes (scene 6 card). K without units: yes. No rate algebra, no Gibbs, no van 't Hoff, no mark-allocation talk: yes. Illustrative data labelled: yes.

## Resolution

Applied in Revision 2 of `../lessons/chem-m5-p02.md` (16 Oct).

1. Finding 1 (wavelength and colour): resolved; wording kept, colour wheel visual corrected.
2. Finding 2 (K value): resolved; "about 208 for this experiment" kept, author note (d) cites the 2017 zero-ionic-strength value.
3. Finding 3 (epsilon and instrument): resolved; scene 5 narration rewritten (+11 words).
4. Finding 4 (standard concentration): resolved; scene 4 narration rewritten (+8 words).
5. Finding 5 (ε source): resolved; References line rewritten; no data change.
6. Findings 6 to 8: no change needed; scene 3 tag added for finding 7.

No open science question blocks recording. Human listening and the voiced-preview check remain pending.
