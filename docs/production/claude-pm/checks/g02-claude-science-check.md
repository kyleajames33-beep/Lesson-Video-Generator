# G02 science check (Claude): every type of HSC equilibrium question, part 1 (Revision 2)

Format: `c8-claude-science-check.md`. Checked 14 October 2026 by an independent reviewer. Input: `../lessons/chem-m5-g02.md` (Revision 2, narration, on-screen plan, numbers, key notes). No stills or audio supplied. No em dash (U+2014) in the design (grep count 0) or here. Arithmetic recomputed in Python.

## Findings

Types: science (S), wording/condition (W), labelling (L). Severity: error = teaches or draws something wrong; fix = accurate only with a condition or clearer wording.

| # | sev | location | problem | correct statement | source |
| --- | --- | --- | --- | --- | --- |
| 1 | error | 5b narration ("only collisions between N O two and N two O four matter here") and the matching Revision 2 note | The forward reaction 2NO2 to N2O4 needs NO2 colliding with NO2. The reverse reaction is N2O4 breaking apart. There is no NO2 with N2O4 collision step. | "Only collisions between two N O two molecules matter for the forward reaction, and N two O four breaking apart for the reverse, and how crowded they are has not changed." (Simpler: "the reacting gases are no more crowded than before".) | Equation 2NO2 ⇌ N2O4; elementary steps follow the equation. Standard kinetics. |
| 2 | fix | 4, concentration row panel 2 ("Every gas jumps together") and tag "volume changed" | Correct only for the direction and size: all concentrations jump by the same factor (so heights keep their ratio), up for a decrease in volume and down for an increase. The panel shows up only. A volume increase gives a downward jump for every gas. Also if gas counts are equal the lines jump and then stay flat (no curves). | "Every gas jumps by the same factor in the same direction (up if the volume decreased, down if it increased)." Add a note that the curves that follow depend on the gas count. | https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Chemical_Equilibria/Effect_of_Pressure_on_Gas-Phase_Equilibria |
| 3 | fix | 4, panel 1 and panel 4 tags ("added or removed: only that substance jumps"; "catalyst or nothing") | A jump may be up (added) or down (removed); say so. A flat concentration line is not unique to a catalyst: argon at fixed volume, an added pure solid and an equal-gas-count change that is not a volume change also leave all lines flat. | Panel 4 tag: "no change at all: a catalyst, or a change that leaves Q equal to K (argon at fixed volume, an added pure solid)". | Q = K argument, https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Chemical_Equilibria/Effect_of_Pressure_on_Gas-Phase_Equilibria |
| 4 | fix | 7c visual ("sealed cylinder, constant temperature at first") | "At first" suggests the temperature may change later, which would make a temperature answer possible and the compression-heating issue live. | "Sealed cylinder, temperature kept constant throughout." | Needed for the "no jump means temperature" fingerprint to be exclusive. |
| 5 | fix | 7b line 5 ("[N2] and [H2] keep falling from their peak") | Only [N2] has a peak (it jumps on injection). [H2] has no jump, so it falls from its original equilibrium value. | "[N2] keeps falling from its peak and [H2] keeps falling, [NH3] rises, so ..." | Reasoning from the setup. |
| 6 | fix | 2b/7b memory aid "Change, collisions, rate, other rate, net, named species, level" against the five numbered lines | Seven aid words map onto five lines (collisions + rate = line 2, net + named species = line 4). The learner may expect seven lines. Science is fine. The aid also fails for a volume change (both rates rise, by different factors), which the condition tag does not mention. | Tag: "one concentration changed, temperature steady. Volume change or heating changes both rates (6a)." Show the mapping of aid words to lines 1 to 5 on screen. | Internal consistency. |
| 7 | fix | 6d narration ("In the sealed vessel the carbon dioxide builds up until Q equals K, and calcium carbonate is left") | True only if enough CaCO3 is present to produce the CO2 needed to reach K. With too little solid it all decomposes and Q never reaches K. Also K = [CO2] only holds while both solids are present. | Add to stem or author note: "enough calcium carbonate that some remains"; the video text "and calcium carbonate is left" should read "if enough calcium carbonate was present, some is left". | https://scienceready.com.au/pages/introduction-to-equilibria (solid must be present); Q and K rules, https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Chemical_Equilibria/The_Reaction_Quotient |
| 8 | fix | 6d slip chip ("it shifts right because gas escapes") | Removing a product does favour the forward direction, so the sentence is not false; it restates the effect without the cause, and in an open crucible the system is not at equilibrium at all. Telling students "do not write" it is stronger than the science needs. | Slip wording: "writing only that it shifts right because gas escapes (that restates the effect). Add: CO2 never builds up, so Q stays below K." Keep the Q-below-K correction. | Open-system source: decomposition runs to completion when CO2 leaves, https://ocn463.soest.hawaii.edu/study/calcium-carbonate-decomposes-to-form-calcium-oxide-and-carbo-dpyk |
| 9 | fix | 6c narration and row "430 C" | Teaching sources give 400 to 450 C (and 450 C) and 1 to 2 atm. Industrial converters actually run adiabatic beds hotter at the inlet to outlet, with cooling between beds, and a final absorption stage, to reach about 99.5 percent overall; single-pass equilibrium at about 450 C and 1 atm is lower (one source states about 96 percent). "The yield is already high" is therefore safe, but "430 degrees" must be presented as the stimulus's given condition, not a plant fact. | Keep "430 C" labelled "as given in this question". Optionally "about 400 to 450 C". Do not claim a single-pass yield figure. | https://chemguide.uk/physical/questions/a-contact.pdf (400 to 450 C, 1 to 2 atm); https://en.wikipedia.org/wiki/Contact_process ; https://savemyexams.com/igcse/chemistry/cie/23/revision-notes/6-chemical-reactions/6-2-reversible-reactions-and-equilibrium/6-2-4-the-contact-process |
| 10 | fix | 6a "Ea forward 120 kJ/mol, Ea reverse 63 kJ/mol" | The enthalpy +57 matches the accepted value for N2O4(g) to 2NO2(g) (+57.2 kJ/mol). The individual Ea values are invented (real NO2 dimerisation has a very small barrier, so the reverse Ea for N2O4 to 2NO2 forward is close to the enthalpy change, not 120). Fine for a teaching profile if labelled. | Add the label "illustrative values" on the profile, not "real". Do not say the figures come from C3 or C9 as data for NO2. Only the +57 is real. | Standard thermodynamic data (delta H about +57 kJ/mol); Ea values UNVERIFIED, see below. |
| 11 | fix | 3a/3d data: K = 7.50 (0.200, 0.300 mol/L) | The numbers are self-consistent, but a K of 7.50 for 2NO2 ⇌ N2O4 is not the room-temperature value: sources give Kc about 170 (reciprocal of about 5.85 x 10^-3) at 25 C. The syringe is at room temperature in C4a. 7.50 corresponds to a much higher temperature. A teacher or student checking a data table would see a mismatch. | Add a tag "made-up numbers" under the givens, or use a quote like "constant temperature" without implying room temperature. Do not state a temperature. | https://faculty.kfupm.edu.sa/Chem/asaadi/Chem102/Chem102-15-1.pdf ; the ratio of the quoted N2O4 to 2NO2 Kc of 5.85e-3 gives 171. |
| 12 | label | 6a, 6b, 6d, 7c, 8 | Only 2a, 3a, 5a, 6c and 7a say "HSC-style question, written for HSCScience". 6a ("Why does it darken?"), 6d, 7c and the 6b prompt are also authored question prompts but no label is specified. Scene 8 quotes wording cues, which is fine. The title phrase "Every type of HSC equilibrium question" can read as a claim about the exam. | Put the same label on every authored question card (6a, 6d, 7c, plus 7a repeat). Retitle or tag: "HSC-style questions written for HSCScience; the types are our grouping, not an official NESA list". | Design file. |
| 13 | fix | Open decision "Part 2 coverage" | The tag "exact levels come from a calculation (part 2)" depends on g03 teaching the quadratic. The design softens the dependency, which is adequate; I confirmed the numbers below. | None beyond root confirming g03. | n/a |

**Count: 1 error (finding 1), 12 fix/labelling items, 2 UNVERIFIED items (below).**

## Arithmetic (recomputed)

| Item | Result |
| --- | --- |
| K = 0.300 / 0.200^2 | 7.50. Correct |
| Q after halving: 0.600 / 0.400^2 | 3.75 (= K / 2, since Q = K x (1 / 2)); below K, forward. Correct |
| Quadratic: 0.6 + x = 7.5 (0.4 - 2x)^2 gives 30x^2 - 13x + 0.6 = 0 | discriminant 169 - 72 = 97, sqrt 9.8489; x = 0.05252 (other root 0.3808 gives [NO2] = -0.362, rejected). Correct |
| Settled concentrations | [NO2] = 0.4 - 2 x 0.05252 = 0.29496 (0.295); [N2O4] = 0.65252 (0.653). 0.65252 / 0.29496^2 = 7.500. Correct. Ordering: 0.200 < 0.295 < 0.400, and 0.653 > 0.600. Correct |
| Changes | NO2 falls 0.105 mol/L, N2O4 rises 0.0525 mol/L, 2 : 1. Correct |
| Amounts (0.500 L) | n(NO2) = 0.1475 (0.147), n(N2O4) = 0.3263 (0.326). Falls 0.0525 mol and rises 0.0263 mol (2 : 1), so the amount of NO2 ends below its starting 0.200 mol and N2O4 above 0.300. N atoms 0.1475 + 2 x 0.3263 = 0.800 = 0.200 + 2 x 0.300. Correct. Note the 3d chip "NO2 changes by 0.053 mol, N2O4 by 0.026 mol" is in moles and correct; the 3c brackets (0.105 and 0.053) are in mol/L and correct. Keep units on each bracket. |
| 3d chip "settles above the old level, below the jump" | True for [NO2] (0.295). For [N2O4] it settles above the jump (0.653 > 0.600). The chip must say it refers to NO2, or the N2O4 line mis-teaches. |
| Q = K/4 for N2/H2/NH3 squeeze | Q = [NH3]^2 / ([N2][H2]^3); doubling all gives 4 / (2 x 8) = 1/4. Q = K/4, forward (4 gas particles to 2). Correct |
| Equal gas H2/I2/HI squeeze | 4 / (2 x 2) = 1, Q = K. Correct. Both rates multiply by 4 for rate laws matching the equation. Colour: I2 is the only coloured gas, so compression darkens purple without any shift. Correct |
| Argon dials | 0.5 x 8^2 = 32; 8 x 4 = 32. Correct (made-up units) |

## Claims

| Claim | Verdict | Note and source |
| --- | --- | --- |
| 2b: removing water vapour lowers the reverse rate first (H2O + CO collisions), forward unchanged at that instant, net forward, [CO] ends above its first-equilibrium value, [H2] and [CO2] fall, [H2O] rises from its depleted value, rates meet again | Correct | CO is changed only by the reaction, so net forward means higher CO. The reverse water-gas shift is endothermic; the stimulus says the temperature does not change, so fine. Equal gas count 2:2, so rigid volume is not needed for the rate argument but is harmless. |
| 7a/7b: N2 injected in rigid vessel; forward rate rises first; [H2] ends below its original value; [N2] and [NH3] end above their originals | Correct | Single-species disturbance; H2 only consumed. |
| 3b: squeeze doubles all concentrations at once; no amount changes | Correct | concentration = amount / volume. |
| 3c: NO2 and N2O4 curves in 2 : 1 ratio, level together; squeeze favours fewer gas particles | Correct | |
| 3d: amount graph has no jump; NO2 amount falls and N2O4 rises 2 : 1 | Correct | Check: n(NO2) ends below its start. |
| Temperature change: no jump on a concentration graph; curves to a new level | Correct | At constant volume. |
| Catalyst: no change in concentrations or amounts, both rates equally raised, Q = K stays | Correct | Standard. |
| Added pure solid: no change (solid not in K; Q unchanged) | Correct | Needs the solid to be part of the equilibrium and some present. |
| Argon, rigid, insulated, at the mixture's temperature: partial pressures unchanged, total pressure rises, Q = K, no shift, no heat change, colour unchanged, temperature unchanged | Correct | https://www.tutorchase.com/answers/ib/chemistry/how-does-adding-an-inert-gas-at-constant-volume-affect-equilibrium ; https://chemistry.csueastbay.edu/~pfleming/chem/351/chap10/pressure.htm . The collision-with-argon sentence is correct apart from finding 1. Real argon can transfer energy to N2O4 (pressure-dependent rate in the low-pressure limit), but K is unchanged and any such change affects both directions, so this is author-note material only. |
| 6a: heating raises both rates; the higher-Ea direction's rate constant rises by the larger factor; the two rates start equal at equilibrium, so the forward rate rises more in absolute terms; Ea itself does not change on heating; more NO2 forms, darker brown | Correct | Fractional rise in k is proportional to Ea / (R T^2), larger for the larger Ea. The "starts equal" link is what makes the absolute rise larger. Fine as stated. |
| 6a: delta H = 120 - 63 = +57 kJ/mol | Correct arithmetic; +57 matches the real value for N2O4 to 2NO2 | Ea values illustrative (finding 10). |
| 6c: 2SO2 + O2 ⇌ 2SO3, delta H about -198 kJ/mol as written, 3 gas particles to 2, vanadium catalyst changes rate not yield, excess O2 raises SO2 conversion, higher pressure would help but is not worth the cost, low temperature too slow | Correct | Sources above; real value about -197 to -198 kJ per mole of equation. "Air is free": acceptable simplification (compression cost exists; the point is oxygen is cheap compared with SO2). |
| 6d: K = [CO2]; open crucible Q stays below K, runs until CaCO3 is used; sealed vessel Q rises to K | Correct with finding 7 | |
| Memory aid "Does Q still equal K? If yes, nothing shifts." with condition tag | Correct and sufficient: covers fixed volume, catalyst, pure solid, equal gas count, argon at fixed volume. It correctly excludes temperature (K itself changes) and argon at constant pressure (Q changes), both covered by "steady temperature" and "fixed volume" in the tag. Suggest adding "fixed volume unless the gas count is equal" to the tag so the equal-gas-count squeeze (volume changes) is not contradicted by "fixed volume" in 5b. |
| Chain aid with condition | Correct for a single concentration change; see finding 6 for the volume case. |

## Attempt answers

| Attempt | Verdict |
| --- | --- |
| 7a decision: which rate changes first, and does [H2] rise or fall | Forward rate first; [H2] falls (compared with the first equilibrium). Correct. Feedback sentence "its concentration ends lower than at the first equilibrium" is correct. Trap "hydrogen increases" correctly named. |
| 7b five lines | Correct apart from line 5 wording (finding 5). |
| 7c/7d graph fingerprint: all concentrations jump up together, amounts do not; so volume decreased | Correct. The curves toward NH3 follow the 1 : 3 : 2 steps and fewer gas particles. The option "temperature changed" is correctly ruled out by the jump. Needs finding 4 (constant temperature) for the answer to be unique. |

## Labelling check (every question is authored, not NESA)

2a, 3a, 5a, 6c, 7a carry the label "HSC-style question, written for HSCScience". 6a, 6d and 7c need it (finding 12). No question uses a NESA mark scheme, mark counts or "worth" language in the file; "marks style" tags are removed. No question is attributed to a past paper. Scene 1 and the title use "HSC"; acceptable with the label and a one-line tag that the types are the author's grouping (not verified against exam frequency, see UNVERIFIED 2).

## UNVERIFIED

1. UNVERIFIED: activation energies of 120 and 63 kJ/mol for N2O4 ⇌ 2NO2. No source was found; real values differ (dimerisation has a near-zero barrier). Treat as illustrative (finding 10). The +57 is fine.
2. UNVERIFIED: that the six types are the common HSC types or that the named slips (for example "forward reaction increases" for "forward rate") occur in marker feedback. I did not retrieve NESA marking feedback; the verbatim Module 5 dot points were also not found in search results (third-party summaries only). The research file should cite the NESA syllabus and a named year of marking feedback if the video claims frequency.

## Resolution (Claude science check)

Applied in `../lessons/chem-m5-g02.md` Revision 3 (14 Oct). Root resolution, one line per finding.

1. Error, 5b collisions: fixed. 5b now says the forward reaction needs two N O two molecules to meet and the reverse needs N two O four to split, and the reacting gases are no more crowded; author note (j) records the elementary-step reasoning.
2. Fix, scene 4 panel 2: fixed. Scene 4 is split into 4a and 4b; panel 2 says every gas jumps by the same factor, up for a decrease in volume and down for an increase, with a caption that the curves after the jump depend on the gas count.
3. Fix, panels 1 and 4: fixed. Panel 1 says jump up (added) or down (removed); panel 4 reads "no change at all: a catalyst, or a change that leaves Q equal to K (argon at fixed volume, an added pure solid)"; the spoken line says "a catalyst, or an inert gas at fixed volume".
4. Fix, 7c temperature: fixed. "Sealed cylinder, temperature kept constant throughout" on screen and "at constant temperature" spoken.
5. Fix, 7b line 5: fixed. "[N2] falls back from its jump and [H2] falls, [NH3] rises, ...".
6. Fix, chain aid mapping and volume case: fixed. Pen brackets map the seven words onto lines 1 to 5 on screen; the tag adds "a volume change or heating changes both rates (6a)".
7. Fix, 6d solid present: fixed. Spoken "if enough calcium carbonate was present, some is left"; stem starts with plenty of CaCO3; tag that K = [CO2] holds while both solids are present (author note (k)).
8. Fix, 6d slip: fixed. The slip is "stopping at: it shifts right because gas escapes" (restates the effect), spoken "Do not stop at", with the Q-below-K correction kept.
9. Fix, 6c 430 C: fixed. Tagged "as given in this question" and spoken "as given here"; real ranges (about 400 to 450 C, 1 to 2 atm, staged converters) and the heat value (198 kJ per mole of the equation as written) are in author note (h) and Numbers to verify; no single-pass yield figure is claimed.
10. Fix, 6a activation energies: fixed. Tag "illustrative values; only the +57 is a real data value"; the numbers-to-verify and author note (i) say so; narration unchanged apart from "Forward minus backward".
11. Fix, K = 7.50: fixed. The givens card carries "made-up numbers"; no temperature is stated; author note (i) records the real value (about 170 at 25 C).
12. Label: fixed. "HSC-style question, written for HSCScience" is specified on 2a, 3a, 5a, 6a, 6c, 6d, 7a, 7b and 7c; scene 1 adds a footer tag that the types are our grouping, not an official NESA list.
13. Part 2 coverage: no script change; g03 coverage of the quadratic remains an open route item for the route owner.
- Claims table, 3d chip: fixed. The chip is stated for NO2 (above its old level, below the jump) and N2O4 (above the jump), and each slip names its graph.
- Claims table, no-shift aid tag: fixed. Tag adds that the volume may change only if the gas count is equal.
- UNVERIFIED 1 (activation energies): handled as illustrative (finding 10). UNVERIFIED 2 (type frequency and marker-feedback slips): no frequency claim is made in the video; the footer tag says the types are our grouping. Codex fact check to confirm; the research file should cite the syllabus and a named year if a frequency claim is ever added.
