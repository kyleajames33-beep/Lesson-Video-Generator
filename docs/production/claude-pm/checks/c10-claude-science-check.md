# C10 science check (Claude): Ka and Kb as equilibrium constants

Checked 16 October 2026 by an independent reviewer. Input: `../lessons/chem-m5-c10.md` (Revision 1), the pack `../pre-design/chem-c11-ka-kb.md` and `../site-extracts/chem-m5-l14.md`. Method: all arithmetic by Python script; reference values checked on the web. No renders. No em dash in the design or here. Syllabus: NSW Chemistry Stage 6 (2017), Module 5, "explore the use of Keq for different types of chemical reactions, including but not limited to: dissociation of ionic solutions; dissociation of acids and bases (ACSCH098, ACSCH099)".

## Summary

- Ka values for acetic acid (1.8 x 10^-5), HF (6.8 x 10^-4) and methanoic acid (1.8 x 10^-4), and Kb for ammonia (1.8 x 10^-5; table 1.77 x 10^-5), match a university reference table at 25 C. HCN varies between tables; the attempt supplies its own value, so nothing depends on the table.
- Percentages at 0.10 mol/L recomputed: acetic 1.33 percent ("about one in a hundred"), HF 7.91 percent ("about eight in a hundred"). Ratios 37.8 ("nearly forty") and 2.90 x 10^5 ("about three hundred thousand") correct.
- Strong-acid statements are correct: HCl ionises completely, essentially no HCl molecules remain, and no Ka value is used (levelling). NaOH and HNO2 correctly kept out.
- One necessary condition missing from learner copy ("at the same concentration" for "bigger Ka, more split"). No other science error.

## Findings

Severity: M = change before recording; L = wording or author-note fix.

| # | sev | where | problem | correct statement | source | resolution |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | L | Scenes 3, 5, 7, 10; author note (a) | Confirm reference values at 25 C. | Acetic 1.8 x 10^-5; HF 6.8 x 10^-4; formic 1.8 x 10^-4; NH3 Kb 1.77 x 10^-5 (1.8 x 10^-5 to 2 s.f.); HNO2 7.41 x 10^-4 (so the site's 4.5 x 10^-4 would wrongly rank HF above HNO2; the design is right to drop it). AgCl Ksp 1.77 x 10^-10 (pack's LibreTexts Ksp table; not re-fetched here). | LibreTexts (Moore, Zhou and Garand) appendix 6.12: https://chem.libretexts.org/Bookshelves/General_Chemistry/Interactive_Chemistry_%28Moore_Zhou_and_Garand%29/06%3A_Appendix/6.12%3A_Acid-Base_Ionization_Constant ; Ksp appendix 6.11 (pack) | Keep all values. |
| 2 | L | Scenes 10, 11b; author note (a) | HCN 6.2 x 10^-10 | Tables differ: the same LibreTexts appendix lists 3.3 x 10^-10; other tables give 4.9 x 10^-10 or 6.2 x 10^-10 (pKa 9.21). The site practice question uses 6.2 x 10^-10. The attempt gives the value on screen, so the answer (methanoic acid stronger) and the arithmetic are self-consistent. | As above | Keep 6.2 x 10^-10 (site value). Author note (a) records the spread. |
| 3 | M | 11b, 12, key note 4 | "Bigger Ka, so more of its molecules are split" stated without the concentration condition. | The fraction ionised depends on concentration (acetic: 1.33 percent at 0.10 mol/L, 4.15 percent at 0.010 mol/L). Ka ranks strength; "more split" holds when acids are compared at the same concentration and temperature. | Script (below) | Added "at the same concentration" (11b, 12) and "at the same concentration and temperature" (key note 4). |
| 4 | L | Scene 6, key note 1 | HCl: "ionises completely ... no Ka value used" | Correct. In water HCl is fully ionised (levelling); an aqueous Ka cannot be measured and is not used at HSC level. | LibreTexts (University of Missouri) strong acids and levelling: https://chem.libretexts.org/Courses/University_of_Missouri/MU%3A__1330H_%28Keller%29/16%3A_AcidBase_Equilibria/16.05%3A_Strong_Acids_and_Bases | Keep. |
| 5 | L | Scene 7 | "Ammonia, the gas in some household cleaners" | Household ammonia is aqueous ammonia (ammonia gas dissolved in water), usually a few percent. | General | Reworded: "a gas that is dissolved in some household cleaners, reacts with water: it takes a hydrogen ion from a water molecule". |
| 6 | L | Scene 4, author note (f) | Water left out because its concentration "does not change" | Fair for dilute solutions (water about 55.5 mol/L, barely changed); strictly the solvent's activity is about 1. Learner copy uses the C5 reason. | Standard | Keep. |
| 7 | L | Scene 1, author note (b) | Fizz rate | The rate of hydrogen production depends on [H+] at that moment; at 0.10 mol/L, HCl gives 0.10 mol/L H+ and acetic acid 1.33 x 10^-3 (ratio 75). With excess magnesium the total hydrogen is the same, which the design does not claim otherwise. | Script | Keep. |

## Script results (Python, 16 Oct)

x = (-Ka + sqrt(Ka^2 + 4 Ka C)) / 2, checked by x^2 / (C - x) = Ka.

| Case | x (mol/L) | percent |
| --- | --- | --- |
| acetic, Ka 1.8 x 10^-5, 0.10 | 1.333 x 10^-3 | 1.33 |
| acetic, 0.010 | 4.15 x 10^-4 | 4.15 |
| HF, 6.8 x 10^-4, 0.10 | 7.91 x 10^-3 | 7.91 |
| HF, 6.3 x 10^-4, 0.10 | 7.63 x 10^-3 | 7.63 (author note corrected from 7.5) |
| HCOOH, 1.8 x 10^-4, 0.10 | 4.15 x 10^-3 | 4.15 |
| HCN, 6.2 x 10^-10, 0.10 | 7.87 x 10^-6 | 0.0079 |
| NH3, Kb 1.8 x 10^-5, 0.10 | 1.333 x 10^-3 | 1.33 |

Ratios: 6.8 x 10^-4 / 1.8 x 10^-5 = 37.8; 1.8 x 10^-4 / 6.2 x 10^-10 = 2.90 x 10^5; log10 values -3.74 and -9.21, 5.46 decades apart; [H+] ratio in the hook 75.0.

## Owner-rule checks

Keq without units: yes (author note j). No rate algebra, no mark-allocation talk, no pH calculation, no Kw, no Gibbs: yes. ICE and algebra rules do not apply (no ICE table in this video).

## Resolution

Applied in Revision 2 of `../lessons/chem-m5-c10.md` (16 Oct).

1. Finding 1: resolved; values kept.
2. Finding 2: resolved; HCN table spread recorded in author note (a).
3. Finding 3: resolved; condition added in 11b, 12 and key note 4.
4. Finding 4: no change.
5. Finding 5: resolved; scene 7 reworded.
6. Findings 6 and 7: no change.
7. Author note (a) HF percentage corrected to 7.6 percent.

No open science question blocks recording.
