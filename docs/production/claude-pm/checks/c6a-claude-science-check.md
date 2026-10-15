# C6a science check (Claude, errors only): chem-m5-c06a Revision 1

Scope: every number and claim in the narration, on-screen text, key notes, aids and author notes of `../lessons/chem-m5-c06a.md`. Source check only (no stills or audio). Arithmetic recomputed by script. U+2014 search: none.

## Arithmetic (all verified)

- Type 1: 2, 2, 14 dots x 0.05 = 0.10, 0.10, 0.70 mol/L. 0.70^2 = 0.49; 0.10 x 0.10 = 0.010; K = 49.0.
- Reversal: 0.010 / 0.49 = 0.0204 = 1/49. Doubled: 0.70^4 / 0.10^4 = 0.2401 / 0.0001 = 2401 = 49^2.
- Type 2: 0.40 / 2.0 = 0.20. Cl2 E = 0.080, change 0.080 - 0 = +0.080; PCl3 +0.080; PCl5 -0.080. E: 0.12, 0.080, 0.080. K = 0.0064 / 0.12 = 0.05333, reported 0.053 (2 s.f.). Check 0.12 + 0.080 = 0.20.
- Attempt: 0.100 / 2.00 = 0.0500; NO2 change +0.0300; N2O4 change -0.0150; N2O4 E 0.0350. K = 0.000900 / 0.0350 = 0.025714, reported 0.0257. Reverse 1 / 0.025714 = 38.89, reported 38.9. Slips: 0.000900 / 0.0500 = 0.018; 0.000900 / 0.0200 = 0.045; 0.0300 / 0.0350 = 0.857 (about 0.86). Each matches the error named.

## Findings

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science (minor wording) | key note 2 | "Leave out pure solids and the solvent" omits pure liquids that are not the solvent (for example Br2(l), Hg(l)). Not false for any case in the lesson, but C5 and G03 say "pure solids, pure liquids and water as the solvent". | Use the C5/G03 wording. |
| 2 | science | all else | None found. | none |
| 3 | syllabus | all | None found: types, ICE, reversal and powers sit in C-calculate-K. | none |
| 4 | copy | all | None; no U+2014. | none |

## Claims checked

1. **K = 49 for H2 + I2 near 450 C.** Literature Kc is about 50 near 448 C (C6 check claim 3); 49 is inside the usual school range and is the C5 value. Acceptable, and the type 1 tube is shown as a settled mixture, not a measurement claim.
2. **PCl5 values (0.053) illustrative.** Real Kc is about 0.04 near 250 C (C6 check claim 1, [chm.uri.edu](https://www.chm.uri.edu/weuler/chm112/homework/Homework8answers.html)); the "illustrative values" chip stays.
3. **N2O4, K = 0.0257 at a steady temperature.** Real Kc is about 4.6 x 10^-3 at 25 C and rises with temperature; 0.0257 fits roughly 50 C (C6 check claim 4). No temperature is stated. Acceptable.
4. **Reversed equation gives 1/K; multiplying every coefficient by n gives K^n.** Standard ([LibreTexts 15.3](https://chem.libretexts.org/Courses/University_of_California_Davis/UCD_Chem_002B/UCD_Chem_2B/Text/Unit_III%3A_Chemical_Equilibria/14%3A_Principles_of_Chemical_Equilibria/15.3%3A_Relationships_Involving_Equilibrium_Constants)).
5. **"Change = equilibrium minus initial", and the change row follows the coefficients.** True per species in a sealed fixed-volume vessel, which every example states. The owner's E-row-first order gives the same numbers as the C6 recorded method and is safer for species that start non-zero (author note c).
6. **HSC conventions.** K written without a unit: the HSC and site convention; the video tags "K: no unit written" and never says K is dimensionless (strictly mol/L for PCl5 and N2O4, none for H2 + I2; author note b). Coefficients as powers: yes. Solids and pure liquids excluded: yes after finding 1. Equilibrium values only in K: yes.
7. **"Almost every question that asks you to calculate with K is one of three types."** Fair as a teaching frame for Module 5 calculation questions; G03 adds Q and addition problems as further types. "Almost" keeps it honest.

## Count

0 errors. 1 minor wording item (finding 1).

## Resolution

Finding 1 applied: key note 2 now reads "Leave out pure solids, pure liquids and water as the solvent." No other science change was needed. The learning edits (scene 6 cause, scene 10 complement, 12a subtraction) were rechecked: each new sentence is true and its numbers match the table (0.080 - 0 = +0.080; 0.0300 - 0 = +0.0300). Illustrative values keep their chips.
