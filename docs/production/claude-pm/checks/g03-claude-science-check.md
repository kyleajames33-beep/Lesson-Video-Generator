# G03 science check (Claude): every type of HSC equilibrium question, part 2: calculations (revision 2)

Format follows `c8-claude-science-check.md`. Checked 14 October 2026 by an independent reviewer. Input: `../lessons/chem-m5-g03.md` (Revision 2, all 248 lines), with `chem-m5-c05.md` and `chem-m5-c06.md` consulted for the units policy and for K values already used. All arithmetic was recomputed in Python from the givens, not copied from the "Numbers to verify" section. No stills or audio supplied. No em dash (U+2014) in this report.

## Findings

| # | location | problem | correct statement | source |
| --- | --- | --- | --- | --- |
| 1 | Key note 2 (scene 13) "Solids and liquids stay out." Also decision line "solids and pure liquids" in scene 2 card is fine | "Liquids" on its own is wrong. Dissolved species in an aqueous equilibrium stay in K and Q. Only pure liquids and the solvent (water in dilute solution) stay out. Scene 2 card says "pure liquids", so the notes contradict the card | "Pure solids and pure liquids (and water as the solvent) stay out of K and Q" | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Chemical_Equilibria/The_Equilibrium_Constant |
| 2 | Scene 5a to 6b (PCl5, K = 0.0450) and scene 7b (N2O4, K = 4.0 x 10^-4) | Same equations as earlier videos with a different K and no "different temperature" tag. C6 uses PCl5 with illustrative K = 0.053 and N2O4 with K = 0.0257. A student who watched C6 sees two K values for N2O4 at (apparently) one temperature. Real Kc for N2O4 at 298 K is about 0.005, so neither is a real value; both are only illustrative. The design tags only the SO2/O2/SO3 and C/CO2 repeats | Add the tag "a different temperature from the earlier video, so a different K" (or the existing "illustrative values" chip) in 5a and 7b | C5 and C6 design rule "K is fixed at one temperature" |
| 3 | Scene 8b spoken sentence, "if you started with just the reactants and K was huge, nearly all of it would turn to products first" | True only when the reactants start in the stoichiometric ratio. With any other ratio the limiting reagent is nearly used up and the excess reactant remains, so "take a small x back" applies to the limiting species and the excess is not small. As worded, a learner may think every species ends tiny | Add a condition to the on-screen tag and, if it fits, the speech: "in the ratio of the equation. If one reactant is in excess, the other is almost used up and the excess is left" (or state the stoichiometric start in the tag "huge K from reactants in the equation's ratio") | https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_%28Lower%29/11%3A_Chemical_Equilibrium/11.03%3A_Reaction_Quotient (path independence of equilibrium; limiting reagent logic) |
| 4 | Scene 7a on-screen tag "the shortcut was about 27% high" and the Numbers section "(26.5 per cent)" | 0.094868 / 0.0750 = 1.2649, which is 26.5 per cent (26.49 using the unrounded root). Rounded to a whole number it is 26, or 27 only if 26.5 is rounded up. Using the rounded 0.0949 / 0.0750 gives 26.5 as well | Say "about 26 per cent high" or "about a quarter high" | Arithmetic below |
| 5 | Scene 9d, spoken "0.100 plus y is 0.250 over 4.00 times 0.100" | Ambiguous when voiced: it can be heard as (0.250 / 4.00) x 0.100 = 0.00625, not 0.250 / (4.00 x 0.100) = 0.625 | Speak "0.250 divided by the product of 4.00 and 0.100", or "0.250 over 0.400" with 0.400 shown as 4.00 x 0.100 on screen | Arithmetic below |
| 6 | Scenes 3, 7b, 8a visuals | The authored-question tag is stated for scenes 2, 4a, 5a, 9a and 10 but not for 3, 7b and 8a, which are also authored questions. Also the tag wording is "authored practice question" everywhere; the term "HSC-style" does not appear anywhere in the file (0 matches) | Label every question card "authored HSC-style question, not an official NESA question" (or keep "authored practice question" if the owner prefers, but state it on 3, 7b and 8a too). Do not say or imply NESA wrote them | Project rule in the Decisions section |
| 7 | Key note 4 "or gives more of a reactant than you started with" | Correct for the PCl5 case (only reactant at the start) but not general: when a species starts with some product present, a root can raise the reactant above its start while still being a valid direction, if the reaction runs in reverse. As a general rule it can wrongly reject a valid root | Reword: "reject any root that makes a concentration negative, or that takes more off a starting species than there was" | Standard ICE method |
| 8 | Scene 7a "the amount taken off the start must be under about 5 per cent" | Stated as a rule, with "about", and the author notes call it a convention. Correct. Minor: neither learner copy nor notes says it is a convention; a student may take it as exact | Add to the rule card or notes: "a school rule of thumb". Optional | https://dornshuld.chemistry.msstate.edu/books/chemistry/solving-equilibrium-problems.html (5% rule is a convention; test x against the starting value) |

No other science errors found. Findings 1, 2, 3 are the ones I would fix before recording; 4 to 8 are wording.

**Count: 3 should-fix (1, 2, 3), 5 wording (4 to 8).**

## Arithmetic (recomputed in Python)

| Item | Recomputation | Result |
| --- | --- | --- |
| Scene 2 concentrations | 0.300 / 2.00 = 0.150; 0.150 / 2.00 = 0.0750; 0.600 / 2.00 = 0.300 | Correct |
| Scene 2 K | 0.300^2 = 0.0900; 0.150^2 x 0.0750 = 0.0225 x 0.0750 = 0.0016875; 0.0900 / 0.0016875 = 53.333 | 53.3. Correct |
| Scene 2 moles in K | 0.600^2 / (0.300^2 x 0.150) = 0.360 / 0.0135 = 26.667 | 26.7. Correct |
| Scene 3 start | 0.400 / 2.00 = 0.200; 0.300 / 2.00 = 0.150 | Correct |
| Scene 3 E row | SO2 0.200 - 0.160 = 0.0400; O2 0.150 - 0.0800 = 0.0700 | Correct (ratio 2 SO3 : 2 SO2 : 1 O2) |
| Scene 3 K | 0.160^2 = 0.0256; 0.0400^2 x 0.0700 = 0.00160 x 0.0700 = 0.000112; 0.0256 / 0.000112 = 228.57 | 229. Correct |
| Scene 3 O atom check | 2(0.0700) + 2(0.0400) + 3(0.160) = 0.700 = 2(0.200) + 2(0.150) | Correct |
| Scene 3 slip, start values in K | 0.0256 / (0.200^2 x 0.150) = 0.0256 / 0.00600 = 4.27 | Correct |
| Scene 4 Q | 0.800^2 / 0.500 = 0.640 / 0.500 = 1.28 < 1.90, forward | Correct |
| Scene 4b Q variant | 1.50^2 / 0.500 = 2.25 / 0.500 = 4.50 > 1.90, reverse | Correct |
| Scene 5 discriminant | b^2 = 0.0450^2 = 0.002025; -4ac = -4(1)(-0.00900) = +0.036; sum 0.038025; sqrt 0.195 (0.195^2 = 0.038025 exactly) | Correct |
| Scene 5 roots | (-0.0450 + 0.195) / 2 = 0.0750; (-0.0450 - 0.195) / 2 = -0.120 | Correct |
| Scene 5 rearrangement | 0.0450 x 0.200 = 0.00900; x^2 + 0.0450x - 0.00900 = 0 | Correct |
| Scene 6 concentrations | PCl5 0.200 - 0.0750 = 0.125; PCl3 = Cl2 = 0.0750. Rejected root: PCl5 = 0.200 + 0.120 = 0.320 > 0.200 | Correct |
| Scene 6 substitution check | 0.0750^2 / 0.125 = 0.005625 / 0.125 = 0.0450 | Correct |
| Scene 7a shortcut | x^2 = 0.0450 x 0.200 = 0.00900; x = 0.094868 (0.095); 0.094868 / 0.200 = 47.4 per cent | 47 per cent, far over 5. Correct |
| Scene 7a "high" tag | 0.094868 / 0.0750 = 1.2649 | 26.5 per cent, not 27 (finding 4) |
| Scene 7c shortcut | 4x^2 / 0.500 = 8x^2 = 4.0e-4; x^2 = 5.0e-5; x = 0.0070711 (0.0071); 2x = 0.014142 (0.014) | Correct |
| Scene 7c test | 0.0070711 / 0.500 = 1.41 per cent | 1.4 per cent. Correct |
| Scene 7c exact | x^2 + 1.0e-4 x - 5.0e-5 = 0; x = 0.0070212; 2x = 0.014042 | 0.0140. Shortcut / exact = 0.014142 / 0.014042 = 1.0071, so 0.7 per cent high. Correct |
| Scene 8a | 0.400^2 / (4x^3) = 0.160 / 4x^3 = 0.040 / x^3 = 4.0e10; x^3 = 0.040 / 4.0e10 = 1.0e-12; x = 1.0e-4 | Correct |
| Scene 8a products | O2 = 1.0e-4; SO2 = 2x = 2.0e-4; SO3 = 0.400 - 2.0e-4 = 0.3998 | Correct |
| Scene 8b test | 2.0e-4 / 0.400 = 5.0e-4 = 0.05 per cent | Correct |
| Scene 9a conversion | 0.400/2.00 = 0.200; 0.800/2.00 = 0.400; new CO 0.200/2.00 = 0.100 | Correct |
| Scene 9 old K | 0.400 x 0.400 / (0.200 x 0.200) = 0.160 / 0.0400 = 4.00 | Matches given. Correct |
| Scene 9 E row | CO 0.100; H2O 0.200 + y - 0.100 = 0.100 + y; CO2 0.400 + 0.100 = 0.500; H2 0.500 | Correct |
| Scene 9 solution | 0.500 x 0.500 = 0.250; 0.250 / 4.00 = 0.0625; / 0.100 = 0.625; y = 0.625 - 0.100 = 0.525 mol/L; x 2.00 L = 1.05 mol | Correct |
| Scene 9 check | 0.250 / (0.100 x 0.625) = 0.250 / 0.0625 = 4.00 | Correct |
| Scene 9 wrong answers | 0.525 (volume forgotten); 0.200 + y = 0.625 gives y = 0.425 mol/L (0.850 mol) | Correct |
| Scene 9 Q after adding | H2O = 0.200 + 0.525 = 0.725; Q = 0.400 x 0.400 / (0.200 x 0.725) = 0.160 / 0.145 = 1.103 < 4.00, forward | Correct |
| Attempt old K | 0.400^2 / 0.400 = 0.400 | Matches given. Correct |
| Attempt CO2 used | CO rises 0.500 - 0.400 = 0.100; CO2 used 0.100 / 2 = 0.050 | Correct |
| Attempt new CO2 | 0.500^2 / 0.400 = 0.250 / 0.400 = 0.625 | Correct |
| Attempt y | 0.625 = 0.400 + y - 0.050; y = 0.275 mol/L; x 1.00 L = 0.275 mol | Correct |
| Attempt check | 0.500^2 / 0.625 = 0.250 / 0.625 = 0.400 | Correct |
| Attempt wrong answers | no used-up: 0.625 = 0.400 + y, y = 0.225. Not halved: 0.625 = 0.400 + y - 0.100, y = 0.325. 0.625 is the new [CO2] | All three correct |
| Attempt Q after adding | 0.400^2 / (0.400 + 0.275) = 0.160 / 0.675 = 0.237 < 0.400, forward | Correct |
| Answers vs givens | 0.275 is not 0.400, 0.500 or 1.00; 0.225, 0.325, 0.625 equal no given | Correct |

Every number in the file is arithmetically correct. The only numeric slip is the rounding of 26.5 to 27 (finding 4).

## Claims

| Claim | Verdict | Note or source |
| --- | --- | --- |
| K values plausible or clearly labelled illustrative | Acceptable, with finding 2 | PCl5 splitting, K = 0.0450: real Kc is about 0.04 at about 250 C, so plausible. CO + H2O, K = 4.00: water-gas shift, K of order 1 to 10 at a few hundred to 800 K, plausible. C + CO2, 1.90 and 0.400: Boudouard, plausible near 1100 to 1200 K. 2SO2 + O2, 53.3 and 229: plausible at high temperature. 4.0e10 is plausible at about 500 K. N2O4 at 4.0e-4 is lower than the real 0.005 at 298 K and is only illustrative. The file's own note says values are authored and not temperature-matched; the K values are never claimed to be real |
| "Different temperature" tags wherever the same equation has a different K | Mostly met | Present in 3, 8a, attempt. Missing for PCl5 (5a) and N2O4 (7b) against C6 (finding 2). Repeats within this video are covered |
| Solids and water excluded correctly | Correct in all worked uses | 4b, 10, 11 omit carbon; CaCO3 card shows K = [CO2]; steam in 9 is gas and correctly included. Key note wording needs "pure" (finding 1) |
| 5 per cent rule stated as a convention | Mostly met | Author note (b) and the memory-aid check call it a convention and note K's own uncertainty. Learner copy uses "about 5 per cent". Test applied to the amount taken off the start, which is the standard form; 2x is used correctly for the SO3 case (8b). See finding 8 |
| The small-x method needs K small relative to the start | Correct | Test, not K alone, decides; the video does this. Source: https://dornshuld.chemistry.msstate.edu/books/chemistry/solving-equilibrium-problems.html |
| Quadratic formula wording and sign explanation | Correct | "x equals minus b, plus or minus the square root of b squared minus four a c, all over two a" is right. "Because c is negative, minus four a c adds" is right for a = 1. Root rejection reasons (negative PCl3; PCl5 above the start) are valid |
| Huge K gives a small x; a reactant start goes to products first | Correct with the condition in finding 3 | Equilibrium is path independent, so the route is a valid calculation device; see finding 3 for the ratio condition |
| Adding a substance changes Q, not K; the added substance goes in the initial row and is also used up | Correct | Source as C8: https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Chemical_Equilibria/Difference_Between_K_And_Q |
| Volume cancels in K for CO + H2O (equal moles of gas on each side) but not in the final amount | Correct | Memory-aid check, 217 |
| Units of K policy | Consistent with C5 | C5 and C6 write K without a unit and tag it; G03 does the same ("K: no unit written") and records the true units (mol/L for PCl5 and N2O4 and C + CO2; L/mol for the SO2 reaction; none for CO + H2O) in author notes only. These unit statements are correct |
| Questions labelled as authored "HSC-style" | Not met as worded | Finding 6 |
| Wording "different temperature" for 2SO2 + O2 K values 53.3, 229, 4.0e10 | Fine | Illustrative values; each repeat tagged |

## UNVERIFIED

1. UNVERIFIED: that every K value matches a real source at a stated temperature. None is claimed to; they are illustrative. No source gave K = 53.3, 229, 4.0e10 for the SO2 reaction at specific temperatures in a form I could fetch. Not an error.
2. UNVERIFIED: the NSW syllabus wording for the C-calculate actions (the route JSON). Not needed for science.

## Recommended resolution

1. Key note 2: replace "Solids and liquids stay out" with "Pure solids, pure liquids and water as the solvent stay out."
2. Add the "a different temperature, so a different K" tag (or "illustrative values") to 5a and 7b, noting they differ from C6.
3. Scene 8b: add the condition "reactants in the ratio of the equation; an excess reactant stays" to the tag and, if length allows, the speech.
4. Change "27%" to "26%" (or "about a quarter") in the 7a tag and Numbers section.
5. Scene 9d: rephrase the division so it cannot be heard as (0.250 / 4.00) x 0.100.
6. Label every question card (including 3, 7b, 8a) with the same authored-question tag, and decide whether the wording is "authored HSC-style question".
7. Key note 4: replace "more of a reactant than you started with" with "takes more off a starting species than there was".
8. Optional: call the 5 per cent test a school rule of thumb in the notes.

## Resolution

Resolved in Revision 3 of `../lessons/chem-m5-g03.md` (14 Oct).

1. Finding 1: key note 2 now reads "Pure solids, pure liquids and water as the solvent stay out of K and Q; dissolved species stay in." Resolved.
2. Finding 2: tag "a different temperature from the earlier video, so a different K" added to 5a (PCl5) and 7b (N2O4). Resolved.
3. Finding 3: scene 8c speaks "in the ratio of the equation" and "An excess of one reactant would stay"; the tag and key note 5 carry the same condition. Resolved.
4. Finding 4: "27%" becomes "about a quarter high" (26.5 per cent) on the 7a tag and in Numbers. Resolved.
5. Finding 5: 9d now speaks "0.250 divided by the product of 4.00 and 0.100" (and the same form in the check); 9c and scene 2 fractions made unambiguous too. Resolved.
6. Finding 6: root decision, the label is "HSC-style question, written for HSCScience" everywhere (matching g02), tagged on scenes 3, 7b and 8a as well; the file never implies NESA wrote a question. Resolved.
7. Finding 7: key note 4 reworded to "takes more off a starting species than there was"; the memory aid check follows. Resolved.
8. Finding 8: the 5 per cent test is called "a school rule of thumb" on the 7a rule card and in key note 5. Resolved.

## Codex check resolution (14 Oct)

Source: `g03-check.md` (2 findings, both science). Both applied as recommended in `../lessons/chem-m5-g03.md` (now Revision 4).

1. Finding 1 (science, scene 8b Visual): applied. Old: `x^3 = 0.040 / 4.0 x 10^10 = 1.0 x 10^-12`. New: `x^3 = 0.040 / (4.0 x 10^10) = 1.0 x 10^-12`. The same bracketed form is used in "Numbers to verify". Spoken line unchanged (it already says x cubed is one times ten to the minus twelve).
2. Finding 2 (science, scene 8a Visual tag): applied. Old: "K much larger than the start, so almost nothing splits". New: "K is very large; test how little SO3 splits". The numerical test stays in 8c (2x = 0.00020 is 0.05 per cent of 0.400). Author note (c), which quoted the older tag, now carries the new wording.

Length: no narration change, still 1494 words and about 10.1 minutes. Status line updated. Owner steers unchanged. Nothing recorded.
