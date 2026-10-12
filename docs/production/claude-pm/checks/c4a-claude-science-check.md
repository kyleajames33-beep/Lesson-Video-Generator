# C4a science check (Claude, independent)

Checked `lessons/chem-m5-c04a.md` (Revision 3) on 12 October 2026: every quoted narration line, Visual line, key note, the memory aid, and the Decisions numbers, against `site-extracts/chem-m5-l06.md`, NIST thermochemical data and the sources linked below. No stills exist, so screen checks were skipped. Method: `codex-prompts/03-fact-check-template.md`, claims list from `15-c4a-b3a-check-and-assets.md` Part A.

## Findings

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | Scene 6b: "The forward reaction needs one carbon dioxide to meet the solid, so it doubles. The reverse reaction needs two carbon monoxide to meet, so it goes up four times." Visual: bars "forward x2" and "reverse x4" | Stated as fact, this is a mechanism and rate-law claim for C(s) + CO2 ⇌ 2CO that is not true. Carbon gasification by CO2 follows Langmuir-Hinshelwood kinetics: the rate is fractional order in CO2 and CO strongly inhibits it, so the forward rate is not first order in CO2 and the reverse is not second order in CO. The Decisions note calls it a teaching model, but the learner narration does not. The direction (left) is correct. [Boudouard/char-CO2 kinetics, L-H form with CO inhibition](https://link.springer.com/article/10.1007/s10973-012-2334-2) | Drop the two factors and the "needs one / needs two to meet" sentences. Use the scene 5 rule: only gases count, one on the left and two on the right, so a squeeze shifts left. Remove the x2 and x4 bars or label them "simple model" only if kept. |

Syllabus and site mismatch: None found. Content matches site key ideas 1 to 4 and the 2017 dot point quoted in the site extract (effects of temperature, concentration, volume and/or pressure on a system at equilibrium, with NO2/N2O4 as the example). The exact NESA wording was not retrievable from the web here, so I relied on the site extract's quotation (see UNVERIFIED).

Screen: not checked, no stills.

Copy: None found. No U+2014 in the file (searched). No "supplied" or "production route". "Made-up numbers" is intentional learner copy.

## Count

1 finding (1 science, 0 syllabus, 0 copy). 2 items UNVERIFIED (below).

## UNVERIFIED (not passed, not counted)

- U1, scenes 7, 10b, 11, key note 5: "Joining and splitting both stay at thirty-two" and "every rate is unchanged" when argon is added. The equilibrium conclusion (no shift, no colour change) is correct for any mechanism, because at fixed volume the concentrations, and so Q, do not change. But the real N2O4 ⇌ 2NO2 steps are pressure-dependent (falloff) reactions: an older compilation gives a low-pressure limit k0 = 2.5 x 10^17 exp(-5550/T) cm^6 mol^-2 s^-1 (M = N2), which at 298 K and 1 atm (M about 4.1 x 10^-5 mol cm^-3) gives k0[M] of roughly 10^5 s^-1, comparable to the quoted high-pressure range 1.7 x 10^5 to 1 x 10^6 s^-1. That suggests added argon would speed both directions equally in a real syringe. I could not confirm the falloff figures from an evaluated source ([compilation](https://dornshuld.chemistry.msstate.edu/notes/2022-fall-notes/n2o4-rate-data-butterworths-1973.pdf), [theory and experiment summary](https://ouci.dntb.gov.ua/works/45W2aB39)). Safe wording if you want to avoid the issue: "joining and splitting stay equal to each other", or "the concentrations are unchanged, so the model rates are unchanged". The 2NO + O2 attempt is not affected (see below).
- U2, Open decisions "syllabus": exact NESA 2017 dot point text not retrieved ([NESA syllabus page not returned by search](https://www.spic.nsw.edu.au/wp-content/uploads/2024/04/SPIC_2023-2024_Chemistry_Yr12_scope-and-Sequence.pdf) only confirms the module theme).

## Notes (checked, no error; not counted)

- N1, scene 2a numbers vs the real syringe. With NIST-JANAF data for 2NO2 ⇌ N2O4 (below), real Kp at 298 K is about 6.8 bar^-1, so at 1 bar and room temperature the gas is about 32 percent NO2 by molecules, and the lesson's 8 : 4 split (67 percent NO2) corresponds to roughly 57 C at 1 bar. The hook says "room temperature" and 2a says "made-up scale" with the "made-up numbers" chip. This is a labelled model so I did not count it, but the model Kc = 4/8^2 = 0.0625 L/mol is about 2,700 times smaller than the real Kc at 298 K (167 L/mol). Qualitative behaviour (darker, fade, settle darker than start) is unaffected.
- N2, scene 5 and Haber. "The forward reaction depends on more gas particles and gains more" is directionally correct for N2 + 3H2 ⇌ 2NH3 but not a literal rate law: the real iron-catalyst rate law is Temkin-Pyzhev with fractional exponents ([Temkin-Pyzhev abstract](https://www.fischer-tropsch.org/Bureau_of_Mines/abs_of_lit/lit-abs/3300/lit3368.htm)). With alpha = 0.5, doubling every pressure multiplies the forward term by 2 x 2^0.5 = 2.83 and the reverse term by (4/8)^0.5 = 0.71, so the forward still gains more and the direction is right. Scene 5 makes no factor claim for ammonia, which is correct. The direction rule holds for any mechanism because thermodynamics requires forward/reverse = K/Q (here 2 for the syringe, matching 128/64). So Open decision 3 can be closed as acceptable: no over-claim in scene 5, but see finding 1 for the carbon case where factors are claimed.
- N3. Scene 2c's "x2 x2" and "x2" are exact for the elementary steps (association is bimolecular, dissociation unimolecular).

## Number verification (all correct)

- Equilibrium: forward 0.5 x 8^2 = 0.5 x 64 = 32; reverse 8 x 4 = 32; gap 0. Good.
- Halved volume: concentrations 16 and 8. Forward 0.5 x 16^2 = 0.5 x 256 = 128 (also 32 x 2 x 2 = 128). Reverse 8 x 8 = 64 (also 32 x 2). Gap 64. Good.
- One step: NO2 16 - 2 = 14; N2O4 8 + 1 = 9. Forward 0.5 x 14^2 = 0.5 x 196 = 98 (also 128 x 14/16 x 14/16 = 128 x 0.765625 = 98; also 32 x (14/8)^2 = 32 x 3.0625 = 98). Reverse 8 x 9 = 72 (also 64 x 9/8 = 72; also 32 x 9/4 = 72). Gap 98 - 72 = 26. Good.
- Conservation: NO2 + 2 N2O4 = 8 + 8 = 16 before the squeeze and 16 + 16 = 32 after (volume halved, so atoms per volume double). At the step: 14 + 18 = 32. Good.
- New equilibrium: with NO2 = n, N2O4 = (32 - n)/2. Forward = reverse: 0.5 n^2 = 8 (32 - n)/2 = 128 - 4n, so n^2 + 8n - 256 = 0. n = (-8 + sqrt(64 + 1024))/2 = (-8 + 32.985)/2 = 12.492. N2O4 = (32 - 12.492)/2 = 9.754. Rates: 0.5 x 12.492^2 = 78.03 and 8 x 9.754 = 78.03. Cross-check: N2O4 = n^2/16 = 156.06/16 = 9.754, with the model Kc = 4/64 = 1/16. "About 12.5, about 9.8, about 78" is correct.
- Between start and instant: general proof in the Decisions is correct. Conservation gives n + 2Kn^2 = 2x + 4Kx^2; the left side at n = x is x + 2Kx^2, less than the right side, so n > x; at n = 2x it is 2x + 8Kx^2, greater than the right side, so n < 2x. Here x = 8, 8 < 12.49 < 16. Also verified for the general case that for compression no consumed species ends below its original concentration (a species with unit stoichiometry cannot drop below it without a contradiction with fixed K), so key note 4 ("fades part of the way back") is safe.
- Expansion (scene 5): 32 x 1/2 x 1/2 = 8; 32 x 1/2 = 16; reverse larger, shift left. Good.
- H2 + I2: all concentrations x2 gives x2 x2 = 4 for each second-order rate; no shift. Good.

## Claims in the brief

- Colours: NO2 brown, N2O4 colourless ([ILPI demo](https://www.ilpi.com/genchem/demo/n2o4pressure/index.html), [Purdue demo sheet](https://chemed.chem.purdue.edu/genchem/demosheets/16.2.html)). Compressed syringe darkens then lightens but stays darker than before is consistent with the algebra above. Iodine vapour violet, boiling point 184 C, HI colourless ([Britannica iodine](https://www.britannica.com/science/iodine?oasmId=891)). NO colourless, O2 colourless.
- Direction of equation and enthalpy: 2NO2 → N2O4: delta H = 9.08 - 2 x 33.10 = -57.12 kJ/mol, delta S = 304.38 - 2 x 240.04 = -175.70 J/mol/K, using NIST-JANAF values for [NO2](https://webbook.nist.gov/cgi/cbook.cgi?ID=C10102440&Mask=1) and [N2O4](https://webbook.nist.gov/cgi/cbook.cgi?ID=C10544726&Mask=1). Exothermic forward, so the "return to room temperature" condition is right. The site's -57 kJ/mol matches.
- H2 + I2 ⇌ 2HI equal gas count: correct, rate laws are empirically k[H2][I2] and k'[HI]^2, so each rate rises by 4 ([Colby physical chemistry text](https://personal.colby.edu/personal/t/twshattu/PhysicalChemistryText/Part1/Ch4.pdf); that text also notes the one-step collision is not proven, so "need two particles to meet" matches the observed second-order law and is acceptable). Iodine is a gas above its boiling point, so "hot gases" is valid.
- C(s) + CO2 ⇌ 2CO: only gases count, 1 against 2, squeeze shifts left. Correct (apart from finding 1).
- Argon at fixed volume: no shift, no colour change. Correct (see U1 for the rate wording).
- Attempt, 2NO + O2 ⇌ 2NO2: delta H = 2(33.10) - 2(90.29) = -114.38 kJ/mol; delta S = 2(240.04) - 2(210.76) - 205.15 = -146.59 J/mol/K ([NIST NO](https://webbook.nist.gov/cgi/cbook.cgi?ID=C10102439&Mask=1)). Using constant delta H and delta S (approximate) at 1 bar total, starting NO : O2 = 2 : 1: at 600 K K = 200 bar^-1, mole fractions NO 0.18, O2 0.09, NO2 0.74, N2O4 about 3 x 10^-5 bar; at 700 K K = 7.6 bar^-1, NO 0.37, O2 0.19, NO2 0.44, N2O4 about 2 x 10^-6 bar. So about 600 to 700 K (about 330 to 430 C) has all three gases present and N2O4 negligible, which answers the "Flag for Codex". The "hot, no value stated" wording is acceptable. The forward rate law is third order, k[NO]^2[O2] ([Michigan notes](https://public.websites.umich.edu/~elements/5e/344/notes2013/Lec14_PDF.pdf)), and the reverse is second order in NO2, so the factors 8 and 4 would match "forward gains more". Direction right, brown keeps darkening after the squeeze (NO2 rises above the instant value 2x because the shift makes it). Correct.
- Collision wording: scene 5 and key notes avoid exponents for general equations ("depends on more gas particles"), so they do not over-claim for multi-step reactions. The rule is valid for any mechanism by the K/Q argument above.
- Pressure gauge: halving volume doubles total pressure at constant T; argon at fixed volume doubles it when moles of argon equal the existing gas moles. Correct.

Findings: 1 science. UNVERIFIED: 2.

## Resolution (Claude science check)

Applied to `lessons/chem-m5-c04a.md`, now Revision 4 (Claude science check resolved; ready to voice). Recounted narration is in that file's length section.

| # | Finding | Resolution |
| --- | --- | --- |
| 1 | Scene 6b stated rate factors (forward x2, reverse x4) for C(s) + CO2 ⇌ 2CO as fact | Dropped the "needs one / needs two to meet" sentences and the x2 and x4 bars. Scene 6b now uses the scene 5 counting rule only: pure solids and liquids do not count, one gas particle on the left and two on the right, so a squeeze favours the side with fewer gas particles and shifts left. The visual is a one-line card with gas particle icons, no rate bars, no factors. Decisions and Teaching checks updated; no key note quoted the factors. Factors remain only for the syringe (exact for the elementary steps, note N3) and H2 + I2 (observed second-order laws), which the check confirmed. |
| U1 | Argon scene claimed rates stay at thirty-two and "every rate is unchanged" | Removed every numeric or "unchanged" rate claim for argon. Scene 7 now says argon does not crowd N O two any closer to N two O four, so it does not favour either direction, with no shift and no colour change. Scene 7 visual: no rate bars on the argon card; the dials stay at 8 and 4 with the tag "no change in crowding, so no direction is favoured, no shift". Scene 10b and its visual use the same wording. Key note 5 now reads "favours neither direction and nothing shifts". Attempt question two no longer asks about the rates ("What happens to the shift and to the colour, and why?"). The no-shift conclusion is unchanged. |
| U2 | Exact NESA dot point text not retrieved | Not a design change. Site extract quotation retained; left for the owner. |
| Hot cylinder | Flag for Codex in the design | Answered by this check (about 600 to 700 K, all three gases present, N2O4 negligible). The learner copy keeps "hot" with no value. Open decision updated. |
| Notes N1 to N3 | Model Kc far from real Kc; Haber not a literal rate law; x2 x2 exact for elementary steps | No change. N1 is covered by the "made-up numbers" chip; N2 by scene 5 making no factor claim; N3 by scene 2c. |
