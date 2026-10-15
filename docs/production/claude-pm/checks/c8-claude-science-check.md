# C8 science check (Claude): reaction quotient, Q (revision 3)

Format: `codex-prompts/03-fact-check-template.md` (errors only). Checked 12 October 2026 by an independent reviewer. Inputs: `../lessons/chem-m5-c08.md` (narration, on-screen plan, key notes) and `../site-corrections.md`. No stills or audio supplied. No em dash (U+2014) in the design or here.

## Findings

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| - | science | all scenes and key notes | None found | None |
| - | syllabus | all scenes | None found | None |
| - | screen | no stills supplied | None found | None |
| - | copy | all scenes | None found | None |

**Count: 0 errors, 1 UNVERIFIED item (below).**

## Arithmetic (recomputed in Python)

| Item | Result |
| --- | --- |
| A: 0.50^2 / (0.20 x 0.20) = 0.25 / 0.040 | Q = 6.25. K/Q = 49 / 6.25 = 7.84 (spoken "about eight"). Correct |
| B: 0.80^2 / (0.05 x 0.05) = 0.64 / 0.0025 | Q = 256. K/Q = 49 / 256 = 0.1914 ("about 0.19"); 256 / 49 = 5.22 ("about five times"). Correct |
| Settled tube 0.10, 0.10, 0.70 | 0.49 / 0.010 = 49 = K. Correct |
| A settles (x = 0.10), B settles (y = 0.05) | A: 0.20 - 0.10 = 0.10, HI 0.50 + 0.20 = 0.70. B: 0.05 + 0.05 = 0.10, HI 0.80 - 0.10 = 0.70. Totals 0.20 + 0.25 = 0.05 + 0.40 = 0.10 + 0.35 = 0.45. Correct |
| Disturbed 0.30, 0.10, 0.70 | Q = 0.49 / 0.030 = 16.33 ("about sixteen"); K/Q = 3.0 exactly. Correct |
| Ghost markers | HI 0.35: 0.1225 / 0.010 = 12.25 (below 49, forward). HI 1.00: 1.00 / 0.010 = 100 (above 49, reverse). Correct |
| Attempt | 0.20^2 = 0.040; 0.50^3 = 0.125; 0.40 x 0.125 = 0.050; Q = 0.040 / 0.050 = 0.80, above K = 0.50, so reverse and NH3 falls. Cube dropped: 0.040 / (0.40 x 0.50) = 0.20, below 0.50 (wrong direction, as the feedback says). Correct |
| Kc from Kp | Kc = Kp (RT)^2 = 1.6e-4 x (0.08206 x 673.15)^2 = 1.6e-4 x 3051 = 0.488, about 0.49. Correct. Pressure 1.10 x 0.08206 x 673.15 = 60.8 atm |
| Dots at 0.05 mol/L | 0.20 = 4, 0.50 = 10, 0.05 = 1, 0.80 = 16, 0.70 = 14, 0.10 = 2, 0.30 = 6. Correct |

## Claims

| Claim | Verdict | Source |
| --- | --- | --- |
| Q is the K expression with the concentrations at any moment, same rules (powers, solids and solvent omitted); Q = K at equilibrium | Correct | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Chemical_Equilibria/The_Reaction_Quotient |
| Q below K runs forward, Q above K runs reverse, Q = K no net change (constant T, same equation) | Correct | https://chem.libretexts.org/Courses/Brevard_College/CHE_104%3A_Principles_of_Chemistry_II/06%3A_Chemical_Equilibrium/6.07%3A_Predicting_the_Direction_of_a_Reaction-_the_reaction_quotient ; https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_%28Lower%29/11%3A_Chemical_Equilibrium/11.03%3A_Reaction_Quotient |
| Forward/reverse = K/Q in the simple rate model: (k_f[H2][I2]) / (k_r[HI]^2) = (k_f/k_r) x 1/Q, with K = k_f/k_r | Correct as algebra for the C5 teaching model. Learner copy says "in this model" and key note 3 says "simple model ... real reactions can have more steps, but the direction rule still holds", which is accurate: the direction follows Q against K for any mechanism, but the ratio equals K/Q only for one-step rate laws. | Standard kinetics (K = k_f/k_r for an elementary step); direction rule as above |
| Adding or removing a substance at constant temperature changes Q, not K; only temperature changes K | Correct | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Chemical_Equilibria/Difference_Between_K_And_Q |
| Log scale: each tick is ten times the last; 0.1 to 1000 holds every plotted value (0.50, 0.80, 6.25, 12.25, 16.3, 49, 100, 256); pure reactants (Q = 0) and pure products (zero denominator) on broken-axis marks | Correct | Arithmetic above |
| Q approaches K without overshoot for one reaction in a closed vessel at constant T | Correct (net rate has the sign of K - Q throughout) | Direction-rule sources |
| Ammonia Kc about 0.5 at 400 C (673 K), Kp about 1.6e-4 atm^-2 | Confirmed. Lecture notes treat N2 + 3H2 ⇌ 2NH3 at 673 K with Kc = 0.500 and Kp = (RT)^-2 Kc = 1.6e-4. Cross-check: the Haber constants in site-corrections (Kc about 9.5 at 300 C, about 0.06 at 500 C) interpolated in ln K against 1/T give about 0.5 at 400 C. | https://www.chem.tamu.edu/rgroup/hughbanks/courses/102H/lecturenotes/class4-3 |
| Iron catalyst present: speeds both directions, does not change K or direction | Correct (learner copy only says "iron catalyst present") | Standard |
| H2 + I2 ⇌ 2HI, K = 49 near 450 C | Acceptable; see UNVERIFIED item 1 | Search results for the 448 C problems (50.0, 50.2, 50.5) |

## Site corrections (lesson 12) not repeated

`../site-corrections.md` lists C1 (CO + 3H2 ⇌ CH4 + H2O, K = 5.67e6, real about 8e24) and C11 (2SO2 + O2 ⇌ 2SO3, K = 270 against 280 at 700 C) for lesson 12. Neither system nor value appears in the C8 design. Related items not repeated: C8 in that file (K = 54 for H2 + I2 at 25 C, lesson 9; the video uses 49 near 450 C with the temperature shown) and the Haber constants C2 and C3 (977 and 0.013). B14 (lesson 12 biology) is unrelated.

## UNVERIFIED

1. UNVERIFIED: the exact figure K = 49 for H2 + I2 at exactly 450 C. Sources found give 50.0 to 50.5 at 448 C and 54.3 at 430 C; no single authoritative table at 450 C was fetched. It is within source scatter, consistent with C5 and C6, and not an error, but "about 450 C" would be the safer wording if a subject teacher asks.

**Count: 0 errors, 1 UNVERIFIED.**

## Resolution (Claude science check)

Applied 13 October 2026 to `../lessons/chem-m5-c08.md`, Revision 4. The check found 0 errors and 1 UNVERIFIED item, so no science edit was needed.

| Item | Resolution |
| --- | --- |
| UNVERIFIED 1: exact K = 49 for H2 + I2 at exactly 450 C | Resolved by wording, as the check suggested: every place the design states the temperature for K = 49 now says "about 450 C" (scene 1 narration "about four hundred and fifty degrees", the K chip and both givens cards "K = 49 (about 450 C)", and the Decisions note "at about 450 C"). The value 49 is unchanged and consistent with C5 and C6. |
| Ammonia Kc about 0.5 at 400 C | Confirmed by the check; no change. The Codex fact check may still repeat the source search. |
| Rate-ratio claim (K/Q) | The check agreed that the learner copy is accurate ("in this model" and key note 3 "simple model"). No change. |

The learning re-review edits (scene 6 "because K over Q is then one", four cuts, stale Status and length text) were applied in the same revision; no science claim changed. Nothing UNVERIFIED remains in learner copy.

## Revision 6 check (14 Oct, owner request: rate algebra removed)

Scenes rate-link, q-chases-k, other-side-answer and disturbance now give the direction from a comparison with the settled tube instead of forward / reverse = K / Q. Checked against the elementary-step picture used in C2: for tube A, [H2][I2] = 0.040 is above the settled 0.010 and [HI]^2 = 0.25 is below the settled 0.49, so forward outpaces reverse ("joining happens faster than splitting") is correct. Tube B: [H2][I2] = 0.0025 below 0.010 and [HI]^2 = 0.64 above 0.49, so splitting outpaces joining is correct. Disturbance: added H2 raises [H2][I2] from 0.010 to 0.030 at the same [HI], so the forward reaction wins. "Q compares products with reactants, just like K does" is a fair school statement. No new numbers. No em dashes. Resolution: pass.
