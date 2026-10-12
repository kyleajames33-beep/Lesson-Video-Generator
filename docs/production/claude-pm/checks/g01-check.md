# G01 fact check, brief 12 Part A

Checked 12 October 2026 against revision 2 of `lessons/chem-m5-g01.md`, `site-extracts/chem-m5-l02.md` and the actual site file `C:/Users/kygs/hscscience/subjects/chemistry/year12/module5/lesson02.sa.html`. Narration, visual instructions, key notes and memory aid checked. No stills exist, so screen checks were skipped.

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | Scenes 4 to 6: "T delta S is plus sixty-seven", "minus two thousand eight hundred and seventy" and reversed values | The +67 term was derived by subtracting two chosen numbers and does not match standard entropy data for solid glucose and liquid water. | Use one consistent data set; the NIST calculation below gives about +78 and -2883 kJ/mol, with opposite signs for the reverse. |
| 2 | science | Scenes 4 and 6 visual: "12 small CO2/H2O particles that scatter", "solid-to-gas particle spreading", equations without phases | The stated numbers require liquid water, but the instructions portray all twelve product molecules as dispersed gas particles. | Write glucose (s), oxygen (g), carbon dioxide (g), water (l), and keep the water particles together as liquid in both directions. |
| 3 | science | Scene 4: "the heat spreads into the surroundings, so entropy goes up and T delta S is positive" | The delta S in delta G = delta H - T delta S is the reacting system's entropy change, not the surrounding air's entropy increase from released heat. | Explain the positive system entropy change separately from the heat entering the surroundings. |
| 4 | science | Scene 6: "because heat has to go in"; visual "heat in" | Photosynthesis receives light energy, so positive reaction enthalpy does not mean the leaf must absorb that energy as heat. | Describe the energy required and label the photosynthesis input as light energy. |
| 5 | science | Scene 6: "Cut off the light and the reverse reaction takes over"; visual "reverse takes over" | Respiration is a separate pathway that already occurs in illuminated leaves, rather than the photosynthetic pathway reversing when light stops. | State that photosynthesis stops without light while respiration continues; show those separate changes. |

Syllabus: None found. Copy: None found in the learner narration, labels, key notes or memory aid. Screen: not checked, no stills provided.

## Thermodynamic arithmetic

All standard data below are at 298.15 K. Formation enthalpies are in kJ/mol; standard molar entropies are in J/(mol K). Elemental H2(g) and O2(g) have standard formation enthalpy zero.

| Substance | Formation enthalpy | Entropy | Primary table |
| --- | ---: | ---: | --- |
| alpha-D-glucose(s) | NIST directly lists combustion enthalpy -2805.0 ± 1.3 | 209.19 | [NIST glucose](https://webbook.nist.gov/cgi/cbook.cgi?ID=C492626&Mask=2) |
| CO2(g) | -393.51 | 213.785 | [NIST carbon dioxide](https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389&Mask=1) |
| O2(g) | 0 | 205.152 | [NIST oxygen](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782447&Mask=1) |
| H2(g) | 0 | 130.680 | [NIST hydrogen](https://webbook.nist.gov/cgi/cbook.cgi?ID=C1333740&Mask=1) |
| H2O(l) | -285.830 | 69.95 | [NIST liquid water](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=2#Thermo-Condensed) |
| H2O(g) | -241.826 | 188.835 | [NIST water vapour](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=1#Thermo-Gas) |
| CH4(g) | -74.87 | 186.25 | [NIST methane](https://webbook.nist.gov/cgi/cbook.cgi?ID=C74828&Mask=1) |

Glucose combustion: C6H12O6(s) + 6O2(g) → 6CO2(g) + 6H2O(l).

- delta S° = 6(213.785) + 6(69.95) - 209.19 - 6(205.152) = +262.308 J/(mol K).
- T delta S° = 298.15(262.308)/1000 = +78.207 kJ/mol.
- With NIST combustion enthalpy: delta G° = -2805.0 - 78.207 = -2883.207 kJ/mol.
- Keeping the site's -2803 value instead: delta G° = -2803 - 78.207 = -2881.207 kJ/mol.
- The design's -2803 - (+67) = -2870 is algebraically correct, but +67 is not independently supported by the table. It implies delta S° = 224.719 J/(mol K).

Photosynthesis as the reverse net equation flips every thermodynamic sign: using the same NIST data, delta H° = +2805.0, T delta S° = -78.207, and delta G° = +2805.0 - (-78.207) = +2883.207 kJ/mol. Using the site's enthalpy consistently gives +2881.207. The positive enthalpy and negative entropy signs support the memory aid's sign argument for positive kelvin temperature. This sign argument does not establish a physical reaction with unchanged phases at arbitrarily high temperatures.

Hydrogen combustion: 2H2(g) + O2(g) → 2H2O(l).

- delta H° = 2(-285.830) = -571.660 kJ for the equation as written.
- delta S° = 2(69.95) - 2(130.680) - 205.152 = -326.612 J/K.
- T delta S° = 298.15(-326.612)/1000 = -97.379 kJ.
- delta G° = -571.660 - (-97.379) = -474.281 kJ.
- The design's approximate -572 and -98 produce -572 - (-98) = -474 kJ. These approximate values and the result agree with the standard calculation. They refer to two moles of water, not one.

## Both requested site corrections

1. **Methane correction confirmed.** Actual site lines 540, 551 and 558 give H2O(g), delta H -890, delta G -818, and a favourable entropy claim. For CH4(g) + 2O2(g) → CO2(g) + 2H2O(l): delta H° = -393.51 + 2(-285.830) - (-74.87) = -890.300 kJ/mol; delta S° = 213.785 + 2(69.95) - 186.25 - 2(205.152) = -242.869 J/(mol K); T delta S° = -72.411 kJ/mol; delta G° = -890.300 - (-72.411) = -817.889 kJ/mol. Thus -890 and -818 belong to liquid water, and entropy opposes the reaction. With gaseous water: delta H° = -802.292; delta S° = -5.099 J/(mol K); T delta S° = -1.520; delta G° = -800.772 kJ/mol. The design's description "about -802 and -800" identifies the correct gas case. Correct the site phase and entropy explanation together.

2. **Glucose correction confirmed, replacement number also needs correction.** Actual site lines 705 and 709 call +2803 the reverse delta G, although line 700 states that 2803 is the magnitude of delta H. The site's photosynthesis +2870 explains where the design's proposed replacement came from, but does not independently validate it. Use +2881 with the site's enthalpy and NIST entropy data, or +2883 with the NIST combustion enthalpy and entropy data. Do not obtain entropy by forcing the calculation to the site's +2870.

## Syllabus and picture effects

[NESA Chemistry Stage 6 Syllabus (2017), pages 44 and 50](https://kiama-h.schools.nsw.gov.au/content/dam/doe/sws/schools/k/kiama-h/content/learning-at-our-school/chemistry-stage6-syllabus-pdf.pdf) places the Gibbs equation and spontaneity in Year 11 Module 4 and combustion/photosynthesis analysis through enthalpy and entropy in Year 12 Module 5. The design's recall and main examples match those requirements.

The respiration finding is supported by the primary leaf-respiration measurements in [Villar, Held and Merino, 1994](https://pubmed.ncbi.nlm.nih.gov/12228368/) and [respiratory metabolism of illuminated leaves](https://pmc.ncbi.nlm.nih.gov/articles/PMC2206616/).

Picture effects: revise the coded glucose/water particle scenes, thermodynamic number tags and the leaf's light-off behaviour. The optional sugar-bowl and unannotated leaf plates need no subject change. No artwork or source was edited.

Findings: 5 science, 0 syllabus, 0 copy; screen checks skipped.

## Resolution (12 Oct)

Applied to `lessons/chem-m5-g01.md`, now Revision 5 (Codex fact check resolved).

| # | Finding | Resolution |
| --- | --- | --- |
| 1 | Glucose values not supported by data | Kept the site's delta H of -2803 and adopted Codex's T delta S of +78 and delta G of -2881 kJ/mol (NIST entropy, site enthalpy). Photosynthesis is +2803, -78, +2881. Updated every spoken number ("plus seventy-eight", "minus two thousand eight hundred and eighty-one", "minus negative seventy-eight", "plus two thousand eight hundred and eighty-one"), board tags, the substitution lines, the scene 5a result tag, the Decisions notes and the Site corrections note (the site's reverse delta G should be about +2881, and the methane values belong to liquid water). Hydrogen stays at -572, -98 and -474 and is now stated as the equation as written (2 mol of water), in speech and on the givens panel. Key notes carry no glucose numbers, so they needed no change. |
| 2 | Particles portrayed as all gas though water is liquid | Already resolved in revision 4 (confirmed): equations carry phases, the six water particles drift loosely together as a liquid in both directions, and the chips read "7 particles to 12" and "12 particles to 7". |
| 3 | Heat in the surroundings counted as the entropy term | Already resolved in revision 4 (confirmed): scene 3a keeps "heat leaving is the delta H term" apart from "the particles spreading out in the reacting mixture is the entropy term", and scene 4 explains the positive system entropy change from the states with no heat arrows in that stage. |
| 4 | Photosynthesis takes in light, not heat | Scene 6a now says "energy has to go in, and in a leaf that energy is light"; the energy-level arrow is labelled "energy in (light)" with a light-ray icon. The memory aid's "heat in" refers to the sign of delta H and is unchanged. |
| 5 | Respiration is separate, not the reverse taking over | Scene 6b now says photosynthesis stops without light, the leaf's sugar can still be broken down by respiration, and that is a separate process running in light and dark. The visual greys out the photosynthesis arrows and adds a separate respiration arrow pair; the "head back towards carbon dioxide and water" and reverse-takes-over wording and visuals are removed. |

Still open: the scene 5 band "within about ten kilojoules of zero" is not covered by this check.

## Independent follow-up on revision 5 (12 October)

Read the full design again after the resolution above. The current scene 5a actually says "within a few tens of kilojoules", not "within about ten kilojoules". This follow-up checks that exact wording.

Original finding 1 is resolved: -2803 - (+78) = -2881, and +2803 - (-78) = +2881. Original finding 2 is resolved for water phases and grouping. Original finding 3 is resolved: heat arrows and surrounding heat are kept separate from the reacting mixture's entropy. Original findings 4 and 5 are resolved: the input is light, and scene 6b describes respiration separately in light and dark. Those corrections do not resolve the new issues below.

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 6 | science | Scene 5a: "within a few tens of kilojoules, leaves a real mixture of reactants and products" and "hundreds of kilojoules below zero leaves essentially all products"; bar reused in scenes 8 and 9 | A few tens of negative kJ/mol can already give essentially all products, and a numerical band cannot apply to an unspecified total delta G independent of temperature and equation scale. | Remove the numerical band and use the exact example's very large negative standard molar reaction value to explain its product preference. |
| 7 | science | Scene 4: "A solid sugar crystal and six oxygen molecules" and "seven particles become twelve"; scene 6a and both count chips reverse this | A sugar crystal contains many glucose molecules, so counting the entire crystal as one particle alongside individual gas and water molecules is incorrect. | Represent one glucose molecule within a crystal when counting equation molecules; explain the entropy sign from the stated entropy data, not a count of whole crystals against molecules. |
| 8 | science | Scene 6a: "the sugar settles into a crystal" and the crystal-forming visual | Photosynthesis in a leaf does not produce a solid glucose crystal, although solid glucose is the reference substance used in the numerical reverse equation. | Keep solid glucose in the reference thermodynamic equation and remove the claim and picture that a leaf makes sugar crystals. |

### Calibration arithmetic

[IUPAC's standard equilibrium constant definition](https://goldbook.iupac.org/terms/view/S05915) gives K = exp(-delta r G° / RT), using standard **molar** reaction Gibbs energy. At 298.15 K, RT = 2.478957 kJ/mol:

| Standard molar reaction delta G° | K | Product fraction for the simple ideal A ⇌ B case |
| --- | ---: | ---: |
| -10 kJ/mol | 56.484 | 98.260% |
| -20 kJ/mol | 3190.424 | 99.9687% |
| -30 kJ/mol | 180207.395 | 99.99945% |

The product fractions use K/(1 + K) for that simple one-to-one case, solely to test the claimed general band. Other stoichiometries require their own equilibrium expressions. Thus "within a few tens" is not a reliable mixture band. The older ten-kilojoule boundary also cannot be a universal cutoff. Multiplying a reaction equation multiplies its reaction Gibbs energy, so a threshold in unqualified kilojoules changes without changing the chemical system. A nonstandard reaction delta G is zero at equilibrium even for an overwhelmingly product-favoured reaction; the calibration relation specifically uses delta G°. These calculations are reviewer checks, not a request to add K teaching to this video.

The crystal finding concerns the new literal narration and picture, not the use of a net photosynthesis equation. Primary experiments on spinach leaves show photosynthetic carbon partitioning into sucrose and starch, rather than glucose crystals: [Control of Photosynthetic Sucrose Synthesis, II](https://pubmed.ncbi.nlm.nih.gov/16663665/).

Picture effects: remove the numerical calibration bar, correct the crystal-versus-molecule count, and remove leaf sugar crystallisation. The optional unannotated leaf and sugar-bowl artwork still needs no change.

Copy: None found, including no em dashes. Syllabus: None found. Screen: skipped, no stills exist.

Follow-up findings: 3 new science findings; all 5 original corrections are present, with the original phase correction subject to the new crystal-count finding.

