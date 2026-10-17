# C11 Claude science check (17 Oct)

Scope: every number and science claim in `lessons/chem-m5-c11.md` (Revision 1, then re-checked against Revision 2). Arithmetic recomputed by `c11-c13-b7-b8-numbers.py` in this folder. Sources checked on the web on 17 Oct: LibreTexts, Averill "Enthalpies of Solution", Table 5.5.1 (CaCl2 -81.3, NH4NO3 +25.7, NaCl +3.9, KNO3 +34.9, NH4Cl +14.8, NaOH -44.5 kJ/mol at 25 C); Purdue enthalpy of solution reference table (NH4Cl +14.78 kJ/mol, from Parker, NBS NSRDS-2, 1965). U+2014 search: none.

## Numbers

| Claim | Check | Result |
|---|---|---|
| CaCl2 -81 kJ/mol | Averill -81.3; CRC about -82.8. Rough cycle (lattice +2258, Ca2+ hydration -1577, Cl- 2 x -378) gives about -75, the same sign and size. | correct, as "-81" |
| NH4NO3 +25.7 | Averill +25.7 | correct |
| NaCl +3.9 | Averill +3.9 | correct |
| KNO3 +35 (author note) | Averill +34.9 | correct |
| NH4Cl +14.8 (author only) | Averill +14.8; Purdue +14.78 | correct; endothermic, so the 22 C to 17 C fall in attempt 1 is the right direction |
| NaCl steps "close to 800 each" | lattice enthalpy about +787; hydration Na+ about -406, Cl- about -378, sum about -784; net about +3 against measured +3.9 | correct; the screen quotes only "about 800" and "+3.9" |
| NaCl "under 1 C cooler" (screen only in Revision 2) | 3900 / (1000 x 4.18) = 0.93 C | correct |
| NH4Cl scenario plausibility | 5 C drop in 100 g water needs 2090 J, 0.141 mol, 7.6 g | plausible; no mass is given on screen |
| KNO3 solubility about 32 and 64 g per 100 g water | CRC-type tables 31.6 and 63.9; classroom tables about 32 and 62. Ratio 2.0. | correct as "about 32" and "about 64"; not spoken in Revision 2 |

## Science claims

1. **Hydration and ion-dipole attraction:** oxygen (δ-) ends toward cations, hydrogen (δ+) ends toward anions; a corner ion in the rock-salt lattice has three nearest neighbours, an interior ion six. Correct.
2. **Two-step energy model:** a Hess bookkeeping cycle, not the physical path (author note c). The narration says "both happen together, but splitting them lets us count the energy". Correct and honest. Finding: the sign convention of "lattice energy" varies between textbooks (some give it as the negative energy of formation). The screen label now says "counted as energy in" (author note k).
3. **CaCl2 cause:** "small, doubly charged calcium ions" hydrate strongly, so hydration outweighs the lattice. Correct at this level.
4. **Hot and cold packs:** CaCl2 and MgSO4 hot packs exist; NH4NO3 is the classic cold pack, and urea packs also exist. Finding: "That's what's inside an instant cold pack" changed to "many instant cold packs". Applied.
5. **Entropy (scene 7):** for NH4NO3, ΔS of solution is positive and large enough that dissolving is favoured despite +25.7. Ion dispersal raises entropy; hydration shells lower it (author note e). Learner copy talks only about NH4NO3, so the general caveat stays in the author note. Correct.
6. **Saturation as dynamic equilibrium:** constant dissolving rate at a fixed surface, crystallising rate rising with dissolved concentration until equal. Correct; "equal rates" (NESA 2023 Q33).
7. **Radioactive tracer:** labelled solid in a saturated solution of the same salt: the label appears in the solution while the amount dissolved stays constant, which shows continuing exchange (NESA 2019 MC11 is the same idea). Finding: the Revision 1 clause "the crystal's radioactivity falls" is not, on its own, evidence of exchange, because radioactive decay lowers it anyway; and "mass of solid stays exactly the same" needed "from then on". Applied in Revision 2.
8. **"Adding solid causes no shift":** a pure solid is left out of K (activity 1), so adding solid at constant temperature changes neither Q nor the concentration; extra surface speeds both rates equally. Correct.
9. **Adding water with solid left (attempt 2):** dilution makes Q < K, more dissolves until saturated again, so the final concentration is the same at the same temperature and the mass of solid falls. Correct.
10. **Heating KNO3 (scene 10 in Revision 2):** dissolving is endothermic both at infinite dilution and near saturation, and solubility rises with temperature, so the C9 rule applies cleanly (author note f). Revision 1 feedback 2 said "the crystals shrink"; at double the solubility all may dissolve, so it was qualified before the scene was cut.
11. **Copper sulfate hook:** the blue belongs to hydrated Cu2+ ions. Correct.
12. **"Its K is the Ksp" for NaCl:** formally correct for any saturated solution with its solid; at about 6 mol/L concentrations are far from ideal, so no NaCl Ksp value is shown and the chip defers calculations. Acceptable.

## Rate finding (applies to the runtime, not the chemistry)

Revision 1 estimated speech at 185 words per minute. The measured chemistry takes give C9 take01 13.3 characters per second (152 words per minute) and C10 take01 13.4 (155). The Revision 1 draft therefore ran about 11.7 minutes, not 9.2. See `c11-learning-review.md` L1.

## Count

0 arithmetic errors. 3 wording findings (lattice energy sign label; cold-pack generalisation; tracer evidence wording), all applied. 0 UNVERIFIED claims in learner copy.

## Resolution

All findings are applied in Revision 2 of `lessons/chem-m5-c11.md` (author notes k and l record them). The runtime finding is resolved by cutting the heating attempt and trimming (now about 10.0 minutes at the measured rate). Codex error-only check welcome before voicing.
