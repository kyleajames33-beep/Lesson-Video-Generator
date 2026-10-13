# C9 science check (Claude): temperature and the equilibrium constant (Revision 2)

Format follows `c8-claude-science-check.md`. Checked 13 October 2026 by an independent reviewer. Input: `../lessons/chem-m5-c09.md` (Revision 2), `../site-corrections.md`, and the C8 check. Method: web sources for every fact and number, arithmetic done by hand (no scripts, no renders). No em dash (U+2014) in the design or here. Syllabus: NSW Chemistry Stage 6 (2017), Module 5, "qualitatively analyse the effect of temperature on the value of Keq".

## Summary

- The K values 0.0061 (25 C) and 0.49 (100 C) are physically correct. They are not a typo or an error. Three independent checks agree (Kp tables, NIST-JANAF thermodynamic data, and a measured Kc at 134 C).
- The "common textbook" values are not a better pair. 4.6 x 10^-3 at 25 C is real but about 24 percent low (older Kp = 0.113 atm). 0.211 at 100 C is about 2.3 times too low. 0.36 at 100 C was not found in any source. Recommendation: keep 0.0061 and 0.49, and change only the on-screen source tag (finding 1).
- The H2 + I2 attempt is sound (sign, direction, K = 49 near 450 C). The author-note figure "K about 44 at 500 C" should be about 41 to 43 (finding 3).
- No error in learner-facing science found. One source-label change, two author-note number changes, and four low-severity wording or realism notes.

## Findings

Severity: M = change before recording; L = author-note or wording fix, no learner-facing science error.

| # | sev | where | problem | correct statement | source | Recommended resolution |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | M | Scene 4a chip "textbook values"; "Numbers used"; Open decision on Kc source | 0.0061 and 0.49 are not printed in a textbook as Kc. They are converted from textbook Kp values, and a student who looks up N2O4 / NO2 will meet 4.64 x 10^-3 (25 C), 6.53 x 10^-3 (25 C, lab data) and 0.211 (100 C). The chip invites the learner to check against a source that disagrees. | Kc = 0.0061 (25 C) and 0.49 (100 C) follow from Kp (2NO2 to N2O4) = 6.7 atm^-1 at 298 K (Tro) and 0.066 at 100 C (Purdue), and agree with NIST-JANAF (0.0060 and 0.485, see table below). Textbooks differ by method and age. | Tro Ch 15 Problem 5: https://www.pearson.com/channels/general-chemistry/textbook-solutions/tro-4th-edition-978-0134112831/ch15-chemical-equilibrium ; Purdue 21.1: https://chemed.chem.purdue.edu/demos/demosheets/21.1.html ; JANAF dissociation data (57.12 kJ/mol, 175.68 J/(mol K)): https://media.springernature.com/original/springer-static/esm/art%3A10.1007%2Fs10765-025-03565-x/MediaObjects/10765_2025_3565_MOESM1_ESM.docx | Keep 0.0061 and 0.49. Change the chip to "measured values (converted from pressure data)" or "tabulated data". Add an author note: other books print 0.0046 and 0.211; both are explained in the table below and neither is used. No arithmetic changes. |
| 2 | L | Codex request (1); Open decision "Kc = 0.211" | The conflict with a homework answer of Kc = 0.211 at 100 C is open. | 0.211 is not the 100 C value. Kc = 0.211 implies Kp about 6.5 atm, against 15.2 atm from Purdue (0.066) and about 15 bar from JANAF. On the same curve, Kc = 0.211 corresponds to about 80 to 85 C. A measured Kc = 2.00 mol/L at 134 C (ChemPRIME) fits 0.49 at 100 C (0.49 x 4.35 = 2.1) and does not fit 0.211 (0.92). | Purdue 21.1 (above); ChemPRIME 13.03: https://chem.libretexts.org/Bookshelves/General_Chemistry/ChemPRIME_(Moore_et_al.)/13%3A_Chemical_Equilibrium/13.03%3A_The_Equilibrium_Constant ; homework 0.211: https://www.pearson.com/channels/general-chemistry/textbook-solutions/mcmurry-8th-edition-9781292336145/ch-14-chemical-equilibrium/calculate-the-equilibrium-concentrations-of-n | Close the open decision as "0.211 not used; inconsistent with tabulated Kp". Record in the owner file that 0.211 and 4.64 x 10^-3 circulate in textbooks and problem sets. |
| 3 | M (author notes only) | "Numbers to verify" (Attempt), Memory aid check ("49 to about 44", "about 10 percent"), Decisions "about 44" | K for H2 + I2 at 500 C is quoted as about 44, a fall of about 10 percent. | Measured data (Bodenstein) give K about 49 at 450 C and about 41 at 500 C. Van 't Hoff with the 25 C enthalpy (-9.4 kJ) gives 44, but the heat of reaction at 450 to 500 C is nearer -12 to -13 kJ (heat-capacity correction, my estimate), giving about 43. So "about 41 to 43", a fall of about 15 percent. Direction (below 49) is unchanged. The learner is only told "below 49", so no learner copy changes. | Bodenstein HI decomposition data (fractions decomposed 0.2198 at 443 C, 0.2340 at 487.2 C, 0.2408 at 508 C): https://web.lemoyne.edu/GIUNTA/classicalcs/bodeneq.html ; K = (2(1 - x)/x)^2 for formation, my arithmetic below | Replace "about 44" with "about 42 (measured data 41 to 43)" and "about 10 percent" with "about 15 percent" in the Memory aid check (b) and the Attempt notes. The aid statement "holds for H2 + I2" is unaffected. |
| 4 | L | Scene 9 givens card; author record "-9.6 kJ" | ΔH is stated as -9.6 kJ per mole of equation. | NIST gives ΔfH(gas) HI = 26.50 and I2 = 62.42 kJ/mol (CODATA), so ΔH = 2(26.50) - 62.42 = -9.42 kJ. Chase (1998) HI = 26.36 gives -9.70. "About 10" is correct. -9.6 is within the range but is not a CODATA figure. | https://webbook.nist.gov/cgi/cbook.cgi?ID=C10034852&Units=SI&Mask=1 ; https://webbook.nist.gov/cgi/cbook.cgi?ID=C7553562&Units=SI&Mask=1 | Record "-9.4 kJ per mole of equation (NIST CODATA), at 25 C, I2 as gas". Learner copy "about 10 kilojoules" stays. Optional: "about 10 kilojoules at room temperature", because the heat given out at 450 C is nearer 12 to 13 (estimate). |
| 5 | L | Scene 9 narration "At 450 degrees Celsius, K is 49" | C8 was changed to "about 450 C" (C8 check, UNVERIFIED item 1). C9 states 450 exactly. | Interpolating Bodenstein's data gives K = 49.2 at 450 C (443 C: 50.4; 487.2 C: 42.9), so 49 at 450 C is supported. Still, the literature scatter is 50.0 to 50.5 at 448 C. | Bodenstein data (finding 3); C8 check | Say "about 450 degrees Celsius" in scene 9 and the givens card, for consistency with C8. Value 49 unchanged. |
| 6 | L | Scenes 4a, 7a (0.10 mol/L N2O4, settled 0.0884 + 0.0232 mol/L at 25 C) | Physical realism. A sealed tube at 25 C with 0.0884 mol/L N2O4 and 0.0232 mol/L NO2 has total pressure about 2.7 atm (0.1116 mol/L x 24.47 L atm/mol). N2O4 boils near 21 C (vapour pressure about 96 kPa at 20 C), so a real tube at that loading would contain liquid. | The numbers are a standard textbook idealisation (gas phase only). Not wrong as a calculation, but not a real 25 C tube. At 100 C the loading is fine (total pressure about 5 atm, above the boiling point). | https://kiwix.lema.org/wikipedia_en_all_mini_2024-02/A/N2O4 (boiling point and 96 kPa at 20 C); my arithmetic for pressure | No learner change needed. Add to author notes: "idealised: a real 25 C tube at this loading would condense N2O4". Optional: lower the start to 0.02 mol/L (percentages then 24 percent and 87.5 percent, amounts change throughout), not recommended. |
| 7 | L | Scene 4b ("Both rise"), author note (a) | "Both numbers rise" is a general model statement. For NO2 recombination the activation energy is near zero (calculated barrier negligible), so the real reverse number barely changes; the dissociation barrier is about 50 to 57 kJ/mol. The made-up pair (x 200, x 2.5) is labelled made-up, so no false claim is made. | In real N2O4 / NO2 the forward number rises by about the whole K ratio (about 80) and the reverse number by about 1 to 2. The relation K = forward / reverse and the sign rule are exact; only the sizes are invented. | https://arxiv.org/pdf/2605.14974 (barrier about 50 to 57 kJ/mol, negligible reverse barrier; preprint, treat as indicative) | Keep. Add to author note (a): "real reverse number for NO2 joining changes little; the made-up pair is a general pattern, labelled as such". |
| 8 | L | Scene 1 "K is the ratio of the settled amounts" | K is a ratio of concentrations raised to powers, not of amounts. "Amounts" is acceptable colloquially but sits against C5/C8 wording. | K = [NO2]^2 / [N2O4]. | Any text, e.g. https://chem.libretexts.org/Bookshelves/General_Chemistry/ChemPRIME_(Moore_et_al.)/13%3A_Chemical_Equilibrium/13.03%3A_The_Equilibrium_Constant | Optional: "K is set by the settled concentrations". |

**Count: 0 science errors in learner copy. 1 source-label change (finding 1), 1 author-note number change (finding 3), 6 low items.**

## Recommended K pair and knock-on values

Recommendation: **use Kc = 0.0061 at 25 C and Kc = 0.49 at 100 C (unchanged).** Rationale, with three independent confirmations:

| Check | 25 C | 100 C | Source |
| --- | --- | --- | --- |
| Kp (2NO2 to N2O4), textbook | 6.7 atm^-1 (Tro, 298 K) | 0.066 (Purdue; 0.067 in the problem set) | Tro; Purdue 21.1 |
| Kc from Kp: Kp(N2O4 to 2NO2) / RT | (1/6.7) / 24.47 = 0.00610 | (1/0.066) / 30.62 = 0.495 (0.487 with 0.067) | arithmetic, R = 0.08206, T = 298.15 and 373.15 |
| NIST-JANAF: ΔH 57.12 kJ/mol, ΔS 175.68 J/(mol K), ΔCp about -2.9 J/(mol K) | ΔG = 57120 - 298.15 x 175.68 = 4740 J; Kp = exp(-4740 / 2479) = 0.148 bar; Kc = 0.148 / 24.79 = 0.0060 | ΔG about -8.4 kJ; ln Kp = 2.71; Kp about 15.1 bar; Kc = 15.1 / 31.03 = 0.485 | JANAF supplement above; heat-capacity values are my estimate |
| Independent measured Kc at 134 C | n/a | ChemPRIME gives Kc = 2.00 mol/L at 407.2 K; the same thermodynamic curve gives 2.05; 0.49 scaled to 134 C gives 2.1 | ChemPRIME 13.03 |
| Van 't Hoff self-consistency of the pair | ratio 80.3 gives effective ΔU about 54.1 kJ; expected ΔU = ΔH - RT = 57.1 - 2.6 = 54.5 | n/a | arithmetic |

Textbook values a student may meet, and why they are not recommended:

| Value | Where | Assessment |
| --- | --- | --- |
| Kc = 4.64 x 10^-3 (25 C) | McMurry-type solutions; equals Kp 0.113 atm (Chang-type) divided by 24.47 | Real and widely printed, but about 24 percent below JANAF (0.0060) and below the 6.5 x 10^-3 lab data in LibreTexts Miramar (https://chem.libretexts.org/Courses/San_Diego_Miramar_College/Chemistry_201%3A_General_Chemistry_II_(Garces)/04%3A_Chemical_Equilibrium/4.03%3A_The_Equilibrium_Constant_(K)). |
| Kc = 0.211 (100 C) | homework / Chem 30 style problems | About 2.3 times low, inconsistent with Kp tables (finding 2). Paired with 4.64 x 10^-3 it implies ΔU about 47 kJ instead of 54. |
| Kc = 0.36 (100 C) | not found in any source searched | Behaves like a classroom number: with a 0.10 mol/L start it gives exactly x = 0.06 (sqrt(0.7056) = 0.84). Paired with 4.64 x 10^-3 it is internally consistent (ratio 78, ΔU about 54) but both values sit about 25 percent below the thermodynamic data. Do not cite as "textbook" without a page reference. |

All knock-on values for the recommended pair (recomputed by hand; all match the design):

| Item | Value | Check |
| --- | --- | --- |
| Ratio | 0.49 / 0.0061 = 80.3, spoken "about eighty" | Correct |
| Made-up multipliers (4b) | 200 / 2.5 = 80 | No change needed |
| Flipped K (2NO2 to N2O4) | 1 / 0.0061 = 163.9 ("about 160"); 1 / 0.49 = 2.041 ("about 2.0") | Correct. log10: -2.215 and +2.215; -0.310 and +0.310 (mirror images) |
| Split from 0.10 mol/L, 25 C | 4x^2 + 0.0061x - 0.00061 = 0; discriminant 3.72 x 10^-5 + 9.76 x 10^-3 = 9.797 x 10^-3; sqrt 0.09898; x = 0.01161. N2O4 = 0.0884, NO2 = 0.0232, 11.6 percent ("about twelve") | Correct. Q = 0.0232^2 / 0.0884 = 5.382 x 10^-4 / 0.0884 = 0.00609 = 0.0061 |
| Split from 0.10 mol/L, 100 C | 4x^2 + 0.49x - 0.049 = 0; discriminant 0.2401 + 0.784 = 1.0241; sqrt 1.01197; x = 0.06525. N2O4 = 0.0348 (0.035), NO2 = 0.1305 (0.13), 65.2 percent ("about sixty-five") | Correct. 0.1305^2 / 0.0348 = 0.4893 |
| Mass balance | 0.0884 + 0.0232 / 2 = 0.1000; 0.0348 + 0.1305 / 2 = 0.1000 | Correct |
| Scene 7a Q | 0.0061 before heating, K jumps to 0.49, Q below K | Correct |
| Scene 7b | forward / reverse = K / Q = 0.49 / 0.0061 = 80 (model, elementary step) | Correct |

**If root instead adopts the textbook-style pair 0.0046 and 0.36**, apply this table in one pass (other items unchanged):

| Item | Value with 0.0046 and 0.36 |
| --- | --- |
| Ratio | 0.36 / 0.0046 = 78.3, still "about eighty"; made-up 200 and 2.5 can stay (200 / 2.5 = 80) |
| Flipped K | 1 / 0.0046 = 217 ("about 220", cf. McMurry 216 for 4.64 x 10^-3); 1 / 0.36 = 2.78 ("about 2.8") |
| Cold split | 4x^2 + 0.0046x - 0.00046 = 0; discriminant 2.116 x 10^-5 + 7.36 x 10^-3 = 7.381 x 10^-3; sqrt 0.08591; x = 0.01016. N2O4 = 0.0898, NO2 = 0.0203, 10.2 percent ("about ten") |
| Cold Q check | 0.0203^2 / 0.0898 = 4.121 x 10^-4 / 0.0898 = 0.00459, rounds to 0.0046 |
| Hot split | 4x^2 + 0.36x - 0.036 = 0; discriminant 0.1296 + 0.576 = 0.7056; sqrt 0.84; x = 0.06. N2O4 = 0.040, NO2 = 0.120, 60 percent ("sixty") |
| Hot check | 0.120^2 / 0.040 = 0.360 |
| Scene 7b | K / Q = 0.36 / 0.0046 = 78 ("about eighty"); readouts tick to 0.040 and 0.12 |
| C6 note (f) | K = 0.0257 would sit at about 45 C on the curve for either pair |

I do not recommend this alternate because 0.36 has no retrievable source and both numbers are physically low.

## Arithmetic check (design "Numbers to verify")

| Item | Result |
| --- | --- |
| Kp 1 / 6.7 = 0.149; / 24.47 | 0.00610. Correct |
| Kp 1 / 0.066 = 15.15; / 30.62 | 0.495 (design 0.496 using 15.2). Correct |
| Van 't Hoff Kp check: (57200 / 8.314) x (1/298.15 - 1/373.15) = 6880 x 0.0006741 | 4.638; e^4.638 = 103.3; 0.149 x 103.3 = 15.4 vs 15.2 tabulated. Correct |
| Kc/Kp temperature factor | Kc ratio = Kp ratio x 298.15 / 373.15 = 103.3 x 0.799 = 82.5, against 80.3 for the pair. Within 3 percent. Correct |
| Reversed values, splits, Q | As in the table above. Correct |
| Attempt van 't Hoff (design): 9600 / 8.314 x (1/773.15 - 1/723.15) = -0.103; 49 x 0.902 = 44.2 | Arithmetic correct for ΔH = -9.6 constant; the physical K is lower (finding 3) |
| C6 K = 0.0257 at "about 45 C" | ln(0.0257 / 0.00597) = 1.46; 1/T = 0.003354 - 1.46 / 6880 (ΔU about 57 kJ) = 0.003142; T = 318 K = 45 C. Correct |
| Bodenstein-based K (formation) = (2(1 - x)/x)^2 | 443 C (x = 0.2198): (1.5604 / 0.2198)^2 = 50.4. 487.2 C (0.2340): (1.532 / 0.234)^2 = 42.9. 508 C (0.2408): (1.5184 / 0.2408)^2 = 39.8. Interpolated: 49.2 at 450 C, 41 at 500 C |
| Narration length | Not a science item; not rechecked |

## Claims

| Claim | Verdict | Source |
| --- | --- | --- |
| ΔH for N2O4 to 2NO2 is about +57 kJ per mole of N2O4 (endothermic) | Correct. JANAF 57.12, Chao 57.20, Purdue 57.2 (for the reverse, with sign -57.2) | Springer supplement above; https://chemed.chem.purdue.edu/demos/demosheets/21.1.html |
| NO2 brown, N2O4 colourless; hot tube darker, cold tube fades | Correct | https://chem.libretexts.org/Courses/University_of_California_Davis/UCDemos/Equilibrium_of_NO2_N2O4 |
| H2 + I2 to 2HI is exothermic, about -9.4 kJ per mole of equation (I2 gas) | Correct in sign and size ("about 10"); see finding 4 | NIST WebBook links above |
| H2 + I2 K = 49 near 450 C; K below 49 at 500 C | Correct; K about 49 at 450 C and about 41 to 43 at 500 C (findings 3, 5). K falls with temperature in measured data, e.g. 54.3 at 430 C, 50 at 448 C, 45.7 at 490 C (search summary) | Bodenstein data link above; https://savemyexams.com/a-level/chemistry/edexcel/17/revision-notes/5-advanced-physical-chemistry-a-level-only/5-1-equilibrium-ii/5-1-3-reaction-conditions--the-equilibrium-constant |
| Concentration, pressure and a catalyst do not change K; temperature does | Correct for a given equation (ideal behaviour; the syllabus treatment). Chemguide: Kc is unaffected by pressure or a catalyst; it holds provided the temperature is unchanged | https://www.chemguide.co.uk/physical/equilibria/kc.html ; https://chem-textbook.ucalgary.ca/?p=8433 |
| A catalyst raises both rate constants by the same factor | Correct (lowers the barrier equally in both directions; K = kf / kr unchanged) | C4b; standard kinetics |
| K = kf / kr from equal rates at equilibrium | Correct for an elementary step (the C5 teaching model). The learner copy says "in this model"; author note (a) is accurate. The sign rule holds for any mechanism because it follows from ΔH | https://chem-textbook.ucalgary.ca/?p=8433 ; https://www.wisc.pb.unizin.org/chem109fall2024/?p=532 |
| Both rate constants rise with temperature; the endothermic direction's rises more; Ea,f - Ea,r = ΔH | Correct (Arrhenius). For ΔH > 0, Ea,f > Ea,r so kf rises more and K rises; for ΔH < 0 the reverse. Exact van 't Hoff relation uses ΔU or ΔH with small corrections; fine at this level. Note that the real NO2 reverse barrier is near zero (finding 7) | Search summary of textbook statements (endothermic: kf rises more, Kc increases; exothermic: kr rises more); https://chem-textbook.ucalgary.ca/?p=8433 |
| Endothermic forward: K rises on heating; exothermic forward: K falls; reverse for cooling | Correct. Syllabus dotpoint and ChemTeam examples (N2O4 endothermic, K larger; H2 + Cl2 exothermic, K smaller) | https://web.chemteam.info/Equilibrium/Keq-Effect-of-temperature.html ; https://artofsmart.com.au/hsctogether/effect-of-temperature-on-keq/ |
| Writing the equation backwards flips K and the heat sign | Correct (K_reverse = 1 / K; ΔH reverses). 1/0.0061 about 164 matches OpenStax 2e Exercise 73 (Kc = 160 for 2NO2 to N2O4, no temperature given) | https://openstax.org/books/chemistry-2e/pages/13-exercises |
| Memory aid "Change T, change K. Change anything else, K stays." and "heat on a side, for direction only" | Correct, with the stated limits. Add limit: if ΔH is near zero, K barely moves, so "K up" can be a tiny change (already covered by limit (b)). The statement that heat changes the numbers is the correct distinction from a reactant | Findings above; limits (a) to (g) in the design are adequate |
| Syllabus point "qualitatively analyse the effect of temperature on the value of Keq" is covered | Correct scope; no van 't Hoff, no calculation of K at a new temperature | https://scienceready.com.au/pages/calculating-reaction-quotient (dotpoint listed) |
| Units: K written without a unit (C5 policy) | Consistent with C5/C8. Strictly Kc has units mol/L for this reaction; see UNVERIFIED 1 | `../site-corrections.md` (lesson 10, NOT AN ERROR) |
| Q after heating a sealed tube is unchanged, and K jumps | Correct (constant volume keeps concentrations; K depends on T only) | Same sources as the K-and-Q check in C8 |
| Adding H2 at fixed temperature: K unchanged, Q falls below K, shift right | Correct | C8 sources |

## Site corrections listed in the asset brief

The design lists three items to record in the owner file. They are consistent with `../site-corrections.md`: C2 (Haber 977 and 0.013, wrong), C4 (extended response contradicts its own sign), C10 (Fe3+ + SCN- 895, 580, 360 against 208). None of these systems appears in C9. No new site corrections arise, except that the owner file could add "N2O4 / NO2 Kc: textbooks print 0.0046 and 0.211; thermodynamic data give 0.0060 and 0.49" if lesson 10 or 13 of the site uses either figure. Not checked in the site HTML.

## UNVERIFIED

1. UNVERIFIED: whether NESA's 2017 syllabus or HSC marking guidelines state that Keq is written without units. I found no NESA document stating it. The C5 policy and the site-corrections note agree with the convention; it is not an error. No learner copy depends on it.
2. UNVERIFIED: the N2O4 vapour pressure at 25 C (finding 6). Only the boiling point (about 21 C) and about 96 kPa at 20 C were found. The conclusion (total pressure about 2.7 atm exceeds it) rests on extrapolation.
3. UNVERIFIED: any textbook that prints Kc = 0.36 for N2O4 at 100 C. Searched, not found.
4. UNVERIFIED: heat-capacity corrections (ΔCp about -2.9 J/(mol K) for N2O4 to 2NO2; the heat of H2 + I2 at 450 C of about -12 to -13 kJ) are my estimates from standard Cp values; they affect only author-note numbers.

**Count: 0 errors in learner copy, 4 UNVERIFIED items (none affects learner copy).**

## Resolution (Claude science check)

Applied in Revision 3 of `../lessons/chem-m5-c09.md` (13 Oct). Root kept K = 0.0061 and 0.49 and also lowered the start concentration (see finding 6).

1. Finding 1 (source label): resolved. K values kept; the scene 4a chip is now "measured values (from pressure data)"; author note (l) records the source chain (Kp 6.7 and 0.066, NIST-JANAF, Kc 2.00 at 134 C) and that 0.0046 and 0.211 are not used.
2. Finding 2 (0.211 conflict): resolved. Closed as "0.211 not used; inconsistent with tabulated Kp" in author note (l) and in the Codex request; the owner-file note is left to Codex.
3. Finding 3 (H2 + I2 K at 500 C): resolved. "About 44" and "about 10 percent" replaced by "about 42 (measured data 41 to 43)" and "about 15 percent" in the attempt notes, "Numbers to verify" and the Memory aid check (a)(b); learner copy still says only "below 49".
4. Finding 4 (heat value): resolved in author notes. Recorded as -9.4 kJ per mole of equation at 25 C with I2 as gas (NIST CODATA); spoken "about 10 kilojoules" unchanged; the 12 to 13 kJ at 450 C is in the attempt notes and author note (p).
5. Finding 5 (450 C): resolved. Scene 9 narration says "At about 450 degrees Celsius, K is 49" and the givens card reads "K = 49 (about 450 C)"; 10b also says "about 450 degrees".
6. Finding 6 (physical realism of the 25 C tube): resolved by Root decision, a stronger fix than the author note alone. Start [N2O4] is now 0.040 mol/L, giving cold N2O4 about 0.80 atm partial pressure, below the vapour pressure. All knock-on values were recomputed: 25 C: 0.0329 and 0.0142 mol/L, about 18 percent split; 100 C: 0.0082 and 0.0635 mol/L, about 79 percent split; Q 0.0061; 7b readouts 0.0082 and 0.0635 (0.0635^2 / 0.0082 = 0.49). Author note (m) records the idealisation and that the 25 C vapour pressure is still unverified (UNVERIFIED 2).
7. Finding 7 (both numbers rise, real reverse barrier near zero): resolved in author note (a). Learner copy unchanged; the 4b pair stays labelled "made-up".
8. Finding 8 ("settled amounts" in scene 1): resolved. Scene 1 now reads "K is built from the settled concentrations, so if the hot tube settles with very different concentrations, can K really stay fixed?".
9. UNVERIFIED 1 to 4: no learner copy depends on any; units of K stay omitted (C5 policy); the 25 C N2O4 vapour pressure, a source for Kc = 0.36 and the heat-capacity estimates remain open for the Codex fact check.
