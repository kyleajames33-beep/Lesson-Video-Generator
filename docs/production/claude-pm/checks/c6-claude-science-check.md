# C6 science check (Claude, errors only): chem-m5-c06 revision 2

Format: `codex-prompts/03-fact-check-template.md`. Scope: every number and claim in the narration, on-screen text, notes and aid of `../lessons/chem-m5-c06.md`; the real-world framing against sources; site problems from `../site-corrections.md` where relevant. Source check only (no stills or audio). U+2014 search: none.

## Arithmetic (all verified, none wrong)

- Worked example 1: 0.40 / 2.0 = 0.20 mol/L. Cl2 and PCl3 +0.080, PCl5 -0.080. PCl5 = 0.20 - 0.080 = 0.12. K = 0.080 x 0.080 / 0.12 = 0.0064 / 0.12 = 0.05333, so 0.053 (2 s.f.). Check 0.12 + 0.080 = 0.20 (phosphorus). Dots at 0.01: 20 start, 12 / 8 / 8.
- Worked example 2: 9 dots x 0.05 = 0.45. (2x)^2 / (0.45 - x)^2 = 49 so 2x / (0.45 - x) = 7 (49 = 7^2). 2x = 7 x 0.45 - 7x = 3.15 - 7x, so 9x = 3.15, x = 0.35. H2 = I2 = 0.45 - 0.35 = 0.10, HI = 2 x 0.35 = 0.70. Check 0.70^2 = 0.49; 0.10 x 0.10 = 0.010; 0.49 / 0.010 = 49. Dots 0.10 / 0.05 = 2, 0.70 / 0.05 = 14. Rejected root: ratio -7 gives 2x = -3.15 + 7x, -5x = -3.15, x = 0.63 > 0.45 and H2 = 0.45 - 0.63 = -0.18, so the rejection is valid. Change row -0.35 : -0.35 : +0.70 = 1 : 1 : 2. Equilibrium 0.10 : 0.10 : 0.70 is not 1 : 1 : 2.
- Reversal: 0.10 x 0.10 / 0.70^2 = 0.010 / 0.49 = 0.020408 = 1/49 exactly. Doubling: 0.70^4 / (0.10^2 x 0.10^2) = 0.2401 / 0.0001 = 2401 = 49^2. Halving: 0.70 / sqrt(0.10 x 0.10) = 0.70 / 0.10 = 7 = sqrt(49).
- Attempt: 0.100 / 2.00 = 0.0500 mol/L. NO2 +0.0300, N2O4 -0.0150. Equilibrium N2O4 = 0.0500 - 0.0150 = 0.0350. K = 0.0300^2 / 0.0350 = 0.000900 / 0.0350 = 0.025714, so 0.0257. Check 0.0350 + 0.0300 / 2 = 0.0500. Reverse: 1 / 0.025714 = 38.89, so 38.9 (1 / 0.0257 = 38.91, same to 3 s.f.).
- Wrong answers: 0.000900 / 0.0500 = 0.018 (initial used). Whole change taken: N2O4 = 0.0200, 0.000900 / 0.0200 = 0.045. Power left off: 0.0300 / 0.0350 = 0.857, about 0.86. Each matches the error described.
- Hook consistency: with K = 0.0533, x^2 / (0.20 - x) = 0.0533 gives x = 0.080 (0.0064 / 0.12 = 0.0533), so the three hook numbers agree.

## Findings (errors only)

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | all scenes | None found: no false statement or arithmetic error. | none |
| 2 | syllabus | all scenes | None found. | none |
| 3 | screen | no stills supplied | None found (not checked). | none |
| 4 | copy | all scenes | None found; no U+2014. | none |

## Claims checked against sources (no error; uncertainty marked)

1. **PCl5 at about 250 C (hook, worked example 1).** Textbook Kp for PCl5 = PCl3 + Cl2 at 250 C is about 1.6 to 1.8 (atm). Converting, Kc = Kp / (RT) = 1.78 / (0.08206 x 523.15) = 0.0415 mol/L; a University of Rhode Island worked answer gives Kp = 1.6 and Kc = 0.037 ([chm.uri.edu](https://www.chm.uri.edu/weuler/chm112/homework/Homework8answers.html)). Several problem sets quote "1.80 at 250 C" and label it Kc; that is a pressure-based value, not a concentration value, so the lesson's 0.053 (illustrative chip kept) is the right size and the C2 fact check's "about 0.04" stands. Pressure in the flask: 0.20 mol/L x 0.08314 x 523 K = 8.7 bar, so the flask is all gas at 250 C. UNVERIFIED: no primary table retrieved; the 1.78 figure comes from secondary problem sets ([McMurry solutions](https://www.pearson.com/channels/ko-kr/general-chemistry/textbook-solutions/mcmurry-8th-edition-9781292336145/ch-14-chemical-equilibrium/phosphorus-pentachloride-decomposes-to-phosph), [gr.inc](https://gr.inc/question/calculate-the-partial-pressures-of-pcl5-pcl3-and-cl2-at-equilibrium-given-that)). The "illustrative values" chip covers 0.053 against about 0.04.
2. **Chlorine is yellow-green (hook).** True. Reading a concentration from colour is a teaching device; the hook claims only that the colour tells us how much, which holds in principle for the gas. Acceptable.
3. **K = 49 for H2 + I2 near 450 C (5a).** Literature Kc is 50.2 to 50.5 at 448 C ([problem set](https://bbb-old.lwn.net/abcd/12753735), [Bodenstein data](https://web.lemoyne.edu/GIUNTA/classicalcs/bodeneq.html); the reciprocal of his decomposition fraction gives about 50.4 at 443 C, my calculation). 49 sits slightly below, consistent with K falling as temperature rises (54.3 near 430 C on the site). Acceptable as "near 450 C" and matches C5 policy. UNVERIFIED: no source for exactly 49 at a stated temperature; the range is about 49 to 51.
4. **N2O4 = 2NO2, K about 0.0257 (attempt).** Literature Kc is about 4.6 x 10^-3 to 5.9 x 10^-3 mol/L at 25 C and rises with temperature ([Chem102 slides](https://faculty.kfupm.edu.sa/Chem/asaadi/Chem102/Chem102-15-1.pdf), [Loyola notes](https://mail.afitch.sites.luc.edu/Gen%20Chem%20pdf%20lectures/16%20Chemical%20EquilibriaB.pdf)); one source gives 0.211 at 100 C. With delta H about +57 kJ/mol (from memory, UNVERIFIED), K = 0.0257 corresponds to about 49 C (own van 't Hoff calculation), so it is plausible. The attempt states "constant temperature" and gives no temperature, so no table contradicts it. Acceptable as illustrative.
5. **Units policy (K written without a unit).** Strictly K has units set by the powers: PCl5 splitting and N2O4 = 2NO2 give mol/L, the reverse of N2O4 gives L/mol, H2 + I2 none ([StudyPulse VCE](https://vce.studypulse.au/learn/CHEM/equilibrium_expressions)). The lesson omits the unit with the tag "K: no unit written", following C5 and the site (lesson 10 line 173, rated NOT AN ERROR in `site-corrections.md`). No statement in the video says K is dimensionless, so no false claim is made. UNVERIFIED: the NESA syllabus wording on units was not retrieved (search returned no NESA document); the site and earlier videos treat omission as the HSC convention.
6. **Reversing and scaling K.** Reversing the equation gives 1/K; multiplying all coefficients by n gives K^n; dividing takes the root ([LibreTexts 15.3](https://chem.libretexts.org/Courses/University_of_California_Davis/UCD_Chem_002B/UCD_Chem_2B/Text/Unit_III%3A_Chemical_Equilibria/14%3A_Principles_of_Chemical_Equilibria/15.3%3A_Relationships_Involving_Equilibrium_Constants), [Farmer video text](https://chem.libretexts.org/Bookshelves/General_Chemistry/The_Video_Textbook_of_General_Chemistry_(Farmer)/Chapter_17%3A_Dynamic_Equilibrium/17.12_Relationships_Involving_Equilibrium_Constants_(Video))). The lesson's numbers (1/49, 49^2 = 2401, square root 7) agree.
7. **"K uses concentrations, so divide moles by litres"; the change row follows the coefficients.** Standard school statements ([ChemTalk](https://chemistrytalk.org/ice-table-chemistry/), [Saylor](https://saylordotorg.github.io/text_introductory-chemistry/s17-04-calculating-equilibrium-consta.html)). Correct for a sealed fixed-volume vessel, which the hook and attempt both state.
8. **Perfect square and the positive root.** Valid only when [H2] = [I2] at the start, which the lesson says in scene 11 and key note 4. Rejecting the negative root is valid (x = 0.63 gives H2 = -0.18).

## Site problems relevant to this lesson (from `../site-corrections.md`)

- **C12 (lesson 10 Extended Response c, line 824):** the data give [H2] = 0.360 and Keq = 0.480^2 / 0.360^2 = 1.78, not the literature 54.3. Confirmed; the video does not use this item.
- **C8 (lesson 9, "H2 + I2 = 2HI, Keq = 54" at 25 C):** 54 belongs near 430 C. The video uses 49 near 450 C, so no conflict.
- **Not on the list, to add:** lesson 10 worked example 1, PCl3 + Cl2 = PCl5 at 250 C with K = 65.0, does not match the textbook. The formation Kc is 1 / 0.0415 = 24 L/mol and the video's own 0.053 gives 1 / 0.053 = 19 L/mol; the site's 65.0 agrees with neither (1 / 65.0 = 0.0154 against about 0.04 for splitting). Status UNCLEAR (it may be a hypothetical mixture). The video does not use it.
- **Units (site line 173, "dimensionless"):** rated NOT AN ERROR as a stated convention. Not repeated in the video.

## Count

0 errors found. 3 UNVERIFIED items: the primary source for PCl5 Kc near 250 C, exactly 49 for H2 + I2 near 450 C (and the delta H used to date the N2O4 value), and the NESA wording on units of K. 1 site item to add to the corrections list (lesson 10 K = 65.0).

## Resolution (Claude science check)

Nothing to fix: the check found 0 errors, so `../lessons/chem-m5-c06.md` needed no science edits (Revision 3 changes are learning re-review edits only: S1 to S3, notes N1 to N6, and 40 words of cuts). The three UNVERIFIED items are covered as follows. (1) The PCl5 Kc near 250 C and (2) the exact K = 49 for H2 + I2 near 450 C and the temperature implied by K = 0.0257 for N2O4: every concentration and K in the lesson is presented as illustrative, with the chip "illustrative values" beside the PCl5 flask in scene 1, the K chip in scene 5a and the givens in scene 9, and the attempt states no temperature, so no value can be contradicted by a table; the lesson claims the method, not a measured constant. (3) NESA wording on units of K: the video follows the C5 and site convention, writes no unit, carries the on-screen tag "K: no unit written" for the whole first substitution, and never says K is dimensionless. The extra site item (lesson 10 worked example 1, K = 65.0 for PCl3 + Cl2 at 250 C) is recorded in the C6 author notes and asset brief and is not used in the video.
