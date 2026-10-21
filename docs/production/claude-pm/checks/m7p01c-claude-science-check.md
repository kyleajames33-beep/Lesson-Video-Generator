# m7p01c science check (chem-m7-p01, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 22 Oct 2026.
Inspected: `lessons/chem-m7-p01.md` (Revision 1), proposal text only; the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; `lessons/chem-m7-c03.md` (Revision 2) for corrections 4 and 5 and the entry facts. Every number under "Numbers used" and "Numbers to verify" was recomputed with a Python script (22 Oct): the three logged runs, nine trials, three means and spreads, the seven alkane steps, the three alkene steps and the narration count. Hazard classes were checked against the ECHA C&L Inventory, current supplier SDSs and the 22nd ATP to CLP. No audio, stills, site files or design files were changed.

## Syllabus dotpoints (checked word for word)

| Ledger id | Ledger text | Design and YouTube text | Verdict |
| --- | --- | --- | --- |
| C7-IQ2-02 (p55, practical) | "conduct an investigation to compare the properties of organic chemical compounds within a homologous series, and explain these differences in terms of bonding (ACSCH035)" | identical | Match |
| C7-IQ2-05 (p55) | "describe the procedures required to safely handle and dispose of organic substances (ACSCH075)" | identical | Match |

A1's demand ("with reference to the intramolecular and intermolecular bonding present") echoes C7-IQ2-04's wording, which is normal HSC phrasing. The boundary ("does not claim that watching it is conducting it") is right.

## Em dashes

None (U+2014 count 0). Two en dashes are bond symbols (C–C, C–H); acceptable.

## Is evaporative cooling a valid way to compare intermolecular forces?

What it measures: the lowest temperature of a wetted probe is reached when the cooling from evaporation (rate of evaporation × enthalpy of vaporisation per mole) is balanced by heat flowing in from the air and the probe. The rate of evaporation follows the vapour pressure, which within one straight-chain series is set mainly by the strength of the dispersion forces. So ΔT ranks volatility, and through it the relative strength of intermolecular forces within a series. It is a standard school and first-year method (Vernier "Evaporation and Intermolecular Attractions", Chemistry with Vernier experiment 9; the Bellevue College and LibreTexts lab manuals use the same wrapped-probe method and tie ΔT to the strength of intermolecular attraction). It is not a measure of force strength or of boiling point, which the design says (scene 12). Valid as a ranking.

Confounds (the design names air flow and liquid on the paper; the others belong in author notes):

| Confound | Effect | In design |
| --- | --- | --- |
| Air flow (fume cupboard face velocity, sash height, probe position) | more flow, bigger drop for every member | Controlled (scene 5); correct |
| Amount of liquid held by the paper | the most volatile member can run dry before reaching its steady minimum, so its ΔT is amount-limited (hexane's minimum at 60 s then rewarming); this compresses the top of the ranking, never reverses it | Scene 12 names it as scatter; add the systematic part to author notes (M2) |
| Sample temperature (stock in a cool flammables cabinet) | a cooler start gives a smaller drop | Controlled by the 30 s soak and one start temperature; correct |
| Enthalpy of vaporisation per mole rises with chain length | works against the trend, but the vapour pressure falls far faster | Author note (d); correct |
| Water condensing on the cold sleeve when it falls below the dew point (about 11 to 14 °C at 50 to 65 % humidity and 22 °C) | releases heat and limits the hexane drop | Not named; author note only (M2) |
| Probe response time | a slow probe misses the true minimum of a fast run | Logging every 2 s; fine |

Expected results: vapour pressures at 20 °C are about 16 kPa (hexane), 4.7 kPa (heptane) and 1.4 kPa (octane), ratios of about 3.4 and 3.4, so the order hexane > heptane > octane in ΔT is certain. The constructed means (11.5, 5.9, 2.2 °C) are plausible magnitudes for a wrapped probe; exact values depend on paper, air flow and humidity. The run shapes are plausible (fast fall and rewarming for hexane, a slow shallow minimum for octane).

## Numbers recomputed

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Hexane trials | 11.3, 11.7, 11.5; mean 11.5; range 0.4 | 21.8 − 10.5, −10.1, −10.3; 34.5 ÷ 3 = 11.5; 0.4 | Correct |
| Heptane trials | 5.7, 6.1, 5.9; mean 5.9; range 0.4 | 17.7 ÷ 3 = 5.9 | Correct |
| Octane trials | 2.3, 2.0, 2.4; mean 2.2; range 0.4 | 6.7 ÷ 3 = 2.233 → 2.2 (one decimal place) | Correct |
| Representative runs | 10.3, 15.9, 19.5 °C minima | ΔT 11.5, 5.9, 2.3 (trials 3, 3, 1) | Correct and consistent with the table |
| C1 to C8 normal boiling points | −161.5, −88.6, −42.1, −0.5, 36.1, 68.7, 98.4, 125.7 °C | CRC: −161.48, −88.6, −42.1, −0.5, 36.06, 68.73, 98.38, 125.62; NIST WebBook octane 398.8 K (125.65 °C) | Correct (octane 125.6 or 125.7 by source; either is fine if the source is cited) |
| Steps | +72.9, +46.5, +41.6, +36.6, +32.6, +29.7, +27.3 | same | Correct |
| A1 alkenes | −6.3, 30.0, 63.5, 93.6 °C; steps +36.3, +33.5, +30.1 | CRC −6.26, 29.96, 63.48, 93.64; steps same | Correct |
| Ranking (scene 10) | 68.7 < 98.4 < 125.7; 11.5 > 5.9 > 2.2 | same | Correct |
| Significant figures | readings to 0.1 °C; differences and means to 0.1 °C | decimal-place rule for subtraction | Correct |

## Chemistry claims

- "evaporating doesn't break any of [the covalent bonds]": correct.
- "each extra C H two adds electrons and contact, so those forces get stronger": correct (c03 callback).
- "Fewer molecules have enough energy to break free each second": correct as a Year 12 statement.
- Scene 3, "The molecules that escape take energy with them, so the liquid left behind cools": correct but incomplete. The cause is that the escaping molecules are the most energetic ones (learning review S1).
- Scene 9, "Boiling point rises at every step. But each step is smaller than the last": correct for C1 to C8.
- Scene 10, "Two independent methods pointing the same way make a much stronger conclusion": acceptable (independent measurements of two properties that depend on the same forces).
- Scene 11 accuracy: "there's no accepted value for a temperature drop, so check the ranking against the published boiling points instead". Agreement of a ranking with independent data supports validity, not accuracy (NESA glossary: accuracy is the extent to which a measured value agrees with its true value). See S2.
- Scene 12 limits: correct.
- Scene 2, "pentane ... catches fire too easily": hexane, heptane and octane also have flash points below or near room temperature (−22, −4 and 13 °C). The difference is degree (Flam. Liq. 1 against 2). See M3.

## Hazard classifications

| Substance | Design | Checked | Verdict |
| --- | --- | --- | --- |
| n-Hexane | H225, H304, H315, H336, H361f, H373, H411 | Annex VI index 601-037-00-0 had these. The 22nd ATP (Delegated Regulation (EU) 2024/2564, applying from 1 May 2026) upgrades n-hexane to STOT RE 1, H372 (causes damage to the nervous system through prolonged or repeated exposure), following the RAC opinion of 1 Dec 2022 | **Out of date: H373 should now read H372** (S1). Other codes correct |
| n-Heptane | H225, H304, H315, H336, H400, H410 | Annex VI 601-008-00-2: same | Correct |
| n-Octane | H225, H304, H315, H336, H400, H410 | Annex VI 601-009-00-8: same | Correct |
| n-Pentane | H224, H304, H336, H411, EUH066 | Annex VI 601-006-00-1: same | Correct |
| n-Nonane (alternative) | H226; boils at about 151 °C | Sigma-Aldrich and Merck SDSs: H226, H304, H315, H336, H400, H410; boiling range 150 to 151 °C; no reproductive or STOT RE classification | Correct |
| Flash points | hexane −22, heptane −4, octane 13, pentane −49 °C | consistent with supplier SDSs | Correct |

Australian SDSs are written under GHS Revision 7 (model WHS Regulations from 1 January 2023); suppliers who follow the EU harmonised entries will move to H372 for n-hexane. Learner copy "hexane can damage nerves after repeated exposure" stays true under either code.

## Should hexane be replaced? (root's question)

Recommendation: **replace hexane in the first-hand practical with heptane, octane and nonane, and keep hexane only as a data-book point in scene 9.**

- Reproductive toxicity and neurotoxicity are specific to n-hexane, through its metabolite 2,5-hexanedione; n-heptane and n-pentane did not cause the nerve damage that n-hexane caused in rat studies, and later work found only n-hexane causes neuropathy in humans (NIOSH criteria; OEM 1980; PMC review). Heptane does the same job in most school uses (chromatography solvent, layer demonstrations), and substitution is the second step of the WHS hierarchy of control.
- The EU upgrade to STOT RE 1 (H372) from May 2026 makes hexane look worse on new SDSs than the design's table says.
- School practice: n-hexane is still common in Australian school stock and is not on the Queensland Department of Education prohibited or high-risk list (which does list bromine). So keeping hexane is lawful, but a video that models a risk assessment should model the substitution.
- Heptane, octane, nonane: all straight-chain liquids, none with H361f or STOT RE; nonane is only Flam. Liq. 3 (H226), so the fire risk falls along the set. The expected drops fall to roughly 6, 2 and under 1 °C (nonane vapour pressure about 0.45 kPa at 20 °C, about one third of octane's), still separable with a 0.1 °C probe and a spread of 0.4 °C, and fume cupboard air flow increases all three. The constructed data need re-writing (author's open decision already says so).
- Pentane, hexane, heptane: not recommended. It keeps hexane and adds pentane, which the design itself excludes (H224, boils at 36 °C).
- If the owner keeps hexane: change H373 to H372 and give H361f a plain harm in the table (S1).

## Site errors logged (P01)

| Correction | Real? | Notes |
| --- | --- | --- |
| 1 (c03's 4): "pressure held at 100 kPa" | Yes, minor | Data-book normal boiling points are at 101.325 kPa; at 100 kPa they are about 0.3 to 0.4 °C lower |
| 2 (c03's 5) and the MCQ key | Yes | Polarisability is close to additive per CH₂, and the enthalpy of vaporisation at 25 °C rises by an almost constant 5 kJ/mol per CH₂ (hexane 31.6, heptane 36.6, octane 41.5 kJ/mol, NIST). So "the increase in polarisability per added carbon diminishes" is wrong, and keying it as the reason for the shrinking step is unsupported. The design's replacement question is good |
| 3: purity raises the boiling point | Yes | Only a dissolved non-volatile solute raises it; a more volatile liquid impurity lowers it, and an impure liquid boils over a range. Replacement text correct |
| 4: school thermometer ±0.5 °C for published values | Yes, minor | Argument mismatch; replacement text correct |
| Notes ("secondary-source investigation"; "van der Waals") | Correctly recorded as notes, not errors | |

## Exam style

A1 ("Describe the trend ... and explain it with reference to the intramolecular and intermolecular bonding present", with a data table) and A2 ("Evaluate the validity and safety of this plan") use HSC Section II verbs and structures, give every condition and are original; no NESA paper wording was found for either. The alkene data make A1 a fair transfer.

## Absolute claims

- Scene 2 "catches fire too easily" (M3, comparative framing).
- Scene 11 "there's no accepted value for a temperature drop" is true; its conclusion is the problem (S2).
- "never the sink" and "A smaller flame doesn't fix it" are safety instructions, correct as stated.
- No other absolute claims found.

## Findings

No blockers.

### S1. Should fix: n-hexane's repeated-exposure class has changed, and H361f has no plain harm on screen (scene 13, safety facts check)

- Exact text: "vapour (H336; hexane also H373, H361f)" / "drowsiness; nerve damage with repeated exposure (hexane)"; safety facts "STOT RE 2, H373".
- Problem: from 1 May 2026 the harmonised EU entry is STOT RE 1, H372 (22nd ATP). H361f appears with no harm.
- Preferred fix: replace hexane with heptane, octane and nonane in scenes 1 to 8, 10 to 14, 18 to 20 and the key notes (see recommendation), keeping hexane at 68.7 °C in scene 9's data. Scene 13 narration then reads: "Work in a **fume cupboard**, because breathing the vapour can make you drowsy." Risk row: "vapour (H336)" / "drowsiness, dizziness" / "fume cupboard, sash low; small volumes"; flammability row: "heptane, octane: highly flammable (H225); nonane: flammable (H226)". A2 (pentane, hexane, 2-methylpentane) can stay, because it is a plan being criticised.
- If hexane is kept: row "vapour (H336; hexane also H372, H361f)" / "drowsiness; hexane: nerve damage with repeated exposure, suspected of harming fertility"; safety facts "STOT RE 1, H372 (nervous system; 22nd ATP, from 1 May 2026; older SDSs show STOT RE 2, H373)".

### S2. Should fix: scene 11's accuracy card

- Exact text: "**Accuracy**: there's no accepted value for a temperature drop, so check the **ranking** against the published boiling points instead."
- Replacement: "**Accuracy** depends on the probe reading true temperatures, so check it against a calibrated thermometer. There's no accepted value for a drop, but the **ranking** matches the published boiling points, which supports the conclusion." Card: "Accuracy: probe checked against a calibrated thermometer. No accepted ΔT; the ranking matches the data book." (Same fix as learning review S2.) Author note (h), that a constant offset cancels in ΔT, stays as an author note.

### M1. Minor: scene 3 cause of cooling

- Use the learning review's S1 replacement ("Only the fastest molecules have enough energy to escape, so the ones left behind are slower on average"). Scientifically more complete.

### M2. Minor: author note confounds

- Add to author note (c): "The most volatile member can run dry before reaching a steady minimum, so its ΔT depends more on the liquid held by the paper; this compresses, but does not reverse, the ranking. Below the dew point (about 11 to 14 °C at 22 °C and 50 to 65 % humidity) water can condense on the sleeve and release heat, limiting the largest drop." Not learner copy.

### M3. Minor: scene 2 pentane wording

- Replacement: "pentane boils at thirty six degrees, so its vapour builds up fastest, which makes it the biggest fire risk in a class test." Chip unchanged ("extremely flammable").

### M4. Minor: octane boiling point source

- Author note (f) cites CRC but gives 125.7; CRC lists 125.62 °C (NIST gives 398.8 K, 125.65 °C). Either keep 125.7 and cite NIST, or use 125.6 with step +27.2 (spoken "about twenty seven" unchanged).

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx; local ledger entries C7-IQ2-02, C7-IQ2-04, C7-IQ2-05 (p55)
- ECHA C&L Inventory, Annex VI entries for n-hexane (601-037-00-0), n-heptane, n-octane, n-pentane: https://echa.europa.eu/information-on-chemicals/cl-inventory-database
- ECHA RAC opinion and CLH documents on n-hexane (STOT RE 1, H372 proposal; adopted 1 Dec 2022): https://poisoncentres.echa.europa.eu/documents/10162/d4304574-c674-8e9c-45a7-5e085d071d4a
- ESIG newsletter, n-hexane discussion (adopted at CARACAL, January 2024, for ATP 22): https://esig.org/newsletters/?p=3554
- Commission Delegated Regulation (EU) 2024/2564 (22nd ATP, applies from 1 May 2026): https://eur-lex.europa.eu/eli/reg_del/2024/2564/oj/eng; summary listing n-hexane "Upgraded to STOT RE 1": https://sdsmanager.com/eu/chemical-hse-news/eu-clp-regulation-2026-50-chemicals-reclassified/
- n-Nonane SDS (Sigma-Aldrich): https://employees.delta.edu/facilities/_safety-data-sheets/nonane-sigma-aldrich.pdf; Merck listing via NextSDS: https://nextsds.com/sds/en/281331501291820/n-nonane
- Hexane neurotoxicity compared with pentane and heptane: NIOSH, https://www.cdc.gov/niosh/pel88/HEXISO.html; Takeuchi et al., Br J Ind Med 37, 241 (1980), https://oem.bmj.com/content/37/3/241; review, https://pmc.ncbi.nlm.nih.gov/articles/PMC1483777
- Queensland Department of Education, Prohibited and high risk chemicals in department workplaces (V8, January 2026): https://education.qld.gov.au/initiativesstrategies/Documents/prohibited-high-risk-chemicals.pdf
- Vernier, Evaporation and Intermolecular Attractions: https://turbo.vernier.com/experiment/cwv-9_evaporation-and-intermolecular-attractions; Bellevue College lab manual: https://www.bellevuecollege.edu/wp-content/uploads/sites/140/2014/06/Exp3_Evaporation-and-IMF_20160610GFPS.pdf; LibreTexts lab 11: https://chem.libretexts.org/Courses/Triton_College/CHM_140%3A_General_Chemistry_I_Lab_Manual/11%3A_Lab_11_-_Evaporation_and_Intermolecular_Attractions
- CRC Handbook of Chemistry and Physics (normal boiling points; vapour pressures); NIST Chemistry WebBook (octane Tboil; enthalpies of vaporisation of hexane, heptane, octane)
- Safe Work Australia, GHS Revision 7: https://www.safeworkaustralia.gov.au/safety-topic/hazards/chemicals/classifying-chemicals/ghs-7

## Verdict

**Ready to voice after fixes.** S1 (with the owner's decision on hexane) and S2 change learner copy and must be applied before recording; S1's preferred route also changes the constructed data, which then need the Codex error check. M1 to M4 are cheap and should be applied.

## Resolution

Resolved by the author in `lessons/chem-m7-p01.md` Revision 2 (22 Oct). Narration 6,308 characters (recounted by script), about 570 s.

| Finding | Resolution |
| --- | --- |
| S1 (n-hexane H372; H361f with no harm) | Preferred fix adopted by root decision (22 Oct): the hands-on set is heptane, octane and nonane in scenes 1 to 8, 10 to 14, 18 to 20 and the key notes; hexane stays only at 68.7 °C in scene 9's data and as scene 13's substitution example. Decision and reason (STOT RE 1, H372, nervous system, 22nd ATP from 1 May 2026; also H361f) recorded under Decisions, "Sample set". Risk table rewritten: "heptane, octane: highly flammable (H225); nonane: flammable (H226)", "vapour (H336) / drowsiness, dizziness", H304, H315 and "waste (H400, H410)". Safety facts rewritten, including n-nonane (H226, H304, H315, H336, H400, H410; flash point about 31 °C) and n-hexane's amended entry. A2 keeps pentane, hexane and 2-methylpentane as the plan to criticise. |
| Constructed data for the new set | Rewritten with realistic drops: heptane trials 5.8, 6.2, 6.0 (mean 6.0 °C); octane 2.3, 2.0, 2.4 (mean 2.2 °C); nonane 0.7, 0.6, 0.8 (mean 0.7 °C); representative runs to minima of 15.8, 19.5 and 21.1 °C; scene 6 y axis 15 to 23 °C. Recomputed by script; plausibility against vapour pressures (4.7, 1.4, 0.45 kPa) in author note (c). Scene 9 extended to C9 (nonane 150.8 °C) so every tested member has a boiling point on the agreement strip. |
| S2 (accuracy card) | Applied as given, with the explicit line "that's agreement, not accuracy"; author note (h) keeps the cancelling offset and adds that a temperature-dependent error does not cancel. |
| M1 (scene 3 cause of cooling) | Applied ("Only the fastest molecules have enough energy to escape ..."). |
| M2 (author-note confounds) | Applied and extended as root asked: author note (c) lists seven confounds (air flow; liquid held by the paper, with the most volatile member running dry and compressing, not reversing, the ranking; start temperature; enthalpy of vaporisation; condensation below the dew point; probe response time; probe resolution against nonane's 0.7 °C drop). Learner copy keeps air flow (scene 5) and liquid on the paper (scene 12). |
| M3 (pentane wording) | Applied. |
| M4 (octane source) | Applied: octane 125.6 °C (CRC 125.62; NIST 125.65 noted), steps +27.2 and +25.2 (C8 to C9); spoken last step is now "about twenty five from octane to nonane". |

Next gate: Codex error check of the new constructed data, steps and hazard classes before voicing.
