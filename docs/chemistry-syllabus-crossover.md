# Chemistry: 2017 syllabus vs new Chemistry 11–12 (2025) syllabus, crossover audit

Prepared 2026-09-24. This audit covers all 149 Chemistry lesson JSONs in `src/data/chemistry-*.json`: Y11 M1–M4 (73 files, including M2's legacy L1 plus its L1A/L1B split, and the M3/M4 checkpoints) and Y12 M5–M8 (76 files). Each lesson is classified against the new NESA Chemistry 11–12 syllabus. The aim is to find content taught under **both** syllabuses, so that audio and image credits go on lessons that keep their value after the changeover. It mirrors `docs/biology-syllabus-crossover.md`.

**Yes, the new syllabus exists.** NESA has published *Chemistry 11–12 Syllabus (2025)* on the Digital Curriculum. Unlike Biology, it starts **one year later** (Year 11 in 2028).

## Sources (primary, verified)

All new-syllabus content below was read from the official NESA Digital Curriculum on 2026-09-24. The text was taken from the page data embedded in each focus-area page (`__NEXT_DATA__`). A plain-text copy is saved at `.agents/syllabi/chemistry-11-12-2025-syllabus-content.txt`, including NESA's "Examples" lines. As with Biology, there is no single Word or PDF of the full syllabus, only a JS "custom download".

- Overview (structure, implementation): https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/overview
- Content (landing): https://curriculum.nsw.edu.au/learning-areas/science/chemistry-11-12-2025/content
  - Y11 Properties and structure of matter: `.../content/year-11/fa3318146f`
  - Y11 Quantitative chemistry: `.../content/year-11/faf0876f2f`
  - Y11 Chemical reactions: `.../content/year-11/fa4c5f59fc`
  - Y12 Equilibrium: `.../content/year-12/fad224f44b`
  - Y12 Acid–base reactions: `.../content/year-12/fa5c257b16`
  - Y12 Organic chemistry: `.../content/year-12/fa9677511e`
  - Y12 Applying chemical ideas: `.../content/year-12/fac41998e6`
  - Working scientifically: `.../content/year-11/fa206b9d23`, `.../content/year-12/fa76868f0b`
- 2017 syllabus: `.agents/syllabi/chemistry-stage6-syllabus-word (3).docx`

### Implementation dates (verbatim from the NESA overview page, "Implementation from 2028")

| When | What |
|---|---|
| 2026 and 2027 | Plan and prepare |
| **2028 Term 1** | Year 11 starts the new syllabus. Year 12 continues on the 2017 syllabus. |
| **2028 Term 4** | Year 12 starts the new syllabus (the HSC course starts in Term 4) |
| **2029** | First HSC exam on the new syllabus |
| 2028 HSC | Last HSC exam on the 2017 syllabus (inferred: Year 12 of 2028 finishes on 2017) |

This gives Chemistry **a year more runway than Biology**. The 2017-framed Y12 lessons still serve **two full HSC cohorts (2027 and 2028)**, and the 2017-framed Y11 lessons serve Year 11 in 2027 as well. So a 2017-only lesson is not worthless yet. It is simply the lowest priority for new spend.

### New structure (indicative hours)

| Year 11 (120 h, incl. 10 h depth studies) | h | Year 12 (120 h, incl. 10 h depth studies) | h |
|---|---|---|---|
| Properties and structure of matter (CH-11-01) | 45 | Equilibrium (CH-12-01) | 30 |
| Quantitative chemistry (CH-11-02) | 35 | Acid–base reactions (CH-12-02) | 30 |
| Chemical reactions (CH-11-03) | 40 | Organic chemistry (CH-12-03) | 30 |
| | | Applying chemical ideas (CH-12-04) | 30 |

There are 235 content points in total (Y11 46 + 27 + 26; Y12 29 + 31 + 47 + 29), plus Working scientifically (CH-11WS/12WS-01..07, which are the same skills as Biology's). At least one depth study is required in each year.

Rough mapping from 2017:
- **Y11 M1 → Properties and structure of matter** (almost 1:1, plus radioactivity, flame tests and emission spectroscopy, VSEPR and polarity, carbon allotropes).
- **Y11 M2 → Quantitative chemistry**, which **loses titration** (moves to Y12 Acid–base), **gains the gas laws and PV = nRT**, and gains a full set of concentration measures and conservation of mass with open and closed systems.
- **Y11 M3 → Chemical reactions**, which **loses galvanic cells** (move to Y12 Applying chemical ideas).
- **Y11 M4 shrinks into the "Energy changes" group of Chemical reactions.** **Hess's law, ΔH°f, bond-energy calculations, entropy and Gibbs free energy are gone.**
- **Y12 M5 → Equilibrium** (≈1:1; Ksp and solubility stay here). Ka/Kb move fully into Acid–base, and the entropy framing goes.
- **Y12 M6 → Acid–base reactions** (≈1:1). Enthalpy of neutralisation goes; household digital probes and natural indicators come in.
- **Y12 M7 → Organic chemistry**, focused on hydrocarbons, alcohols, organic acids and esters. **Amines, amides, soaps and detergents, and organic acid/base comparisons are gone.** Polymers go to Applying chemical ideas, except polyester, which stays with esters.
- **Y12 M8 → Applying chemical ideas**, now "organic analysis and uses" (**MS, IR, ¹H/¹³C NMR**, petroleum refining, PE/PVC/PTFE/PP) plus "inorganic analysis and uses" (**base-metal ores**, AES/AAS, gravimetric pollutant analysis, **galvanic cells and batteries**). **Water-quality monitoring and chemical synthesis design are gone.**

## Counts

| Classification | Count (of 149 files) | M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 |
|---|---|---|---|---|---|---|---|---|---|
| **CROSSOVER** (content in both syllabuses; reusable as-is or with a relabel) | **97** | 15 | 18 | 11 | 6 | 15 | 16 | 14 | 2 |
| **PARTIAL** (mostly overlaps; needs edits or has 2017-only framing) | **30** | 5 | 4 | 4 | 1 | 3 | 2 | 6 | 5 |
| **2017-ONLY** (no home in the new syllabus) | **22** | 0 | 0 | 0 | 9 | 0 | 1 | 3 | 9 |
| *(files per module)* | 149 | 20 | 22 | 15 | 16 | 18 | 19 | 23 | 16 |

M2's 22 files include the legacy combined `m2-l1-mole-concept` (4/13 scenes voiced), which L1A/L1B supersede.

### Voicing status (a lesson counts as "voiced" if at least one scene has `voiceover.audioFile`)

| Class | Voiced | Unvoiced |
|---|---|---|
| CROSSOVER | 54 | **43** |
| PARTIAL | 10 | 20 |
| 2017-ONLY | **10** (sunk cost) | 12 |
| **Total** | **74** | **75** |

- **Voiced:** all of M3 and M4; M2 L1/L1A/L1B/L2/L3/L4; and **all of Y12 M5 and M6**. `docs/catalogue-build-status.md` doesn't mention M5/M6 as voiced, but commit `f201f23` wired their audio in. The MP3s are not in this checkout (`public/audio/Chemistry-Y12-*` is absent), so "voiced" means the JSON points at audio.
- **Unvoiced:** all of M1, M2 L5–L20, all of M7 and all of M8.
- **The voiced 2017-only lessons are sunk cost, not a problem.** They are M4 L7–L13, cp2 and cp3, and M6 L10. They still serve the 2027 and 2028 cohorts. Don't spend more on them, for example on M4 cp2's 2 missing scenes.
- **Good news:** the voiced Y12 set (M5 + M6, 37 lessons) is **31 CROSSOVER, 5 PARTIAL, 1 2017-ONLY**. Most of the money already spent on Y12 is safe.

"→Y11" / "→Y12" means the content survives but sits in a different year. That changes the lesson's title card and caption, and it needs new-syllabus metadata (`yearLevel`, `module`, `syllabusModule`, `syllabusDotPoints`, `nesaOutcomes`, `syllabusVersion`). The script content itself carries over.

## Per-lesson table

Legend: **X** = CROSSOVER, **P** = PARTIAL, **—** = 2017-ONLY. "Voiced" = scenes with `audioFile` / total scenes. The title scene is silent by design, so n−1/n is fully voiced. The group after "›" is NESA's content-group heading.

### Y11 Module 1: Properties and Structure of Matter (20)

| Lesson file | Title | Voiced | Class | New-syllabus location | Action |
|---|---|---|---|---|---|
| y11-m1-l1-properties-classification | Properties and Classification of Matter | no | **P** | Y11 Properties and structure of matter › Separation of mixtures (homogeneous vs heterogeneous only). The element/compound classification tree is Stage 5 background, not a content point | Low priority. Keep as a warm-up; don't edit |
| y11-m1-l2-properties-elements-compounds-mixtures | Properties of Elements, Compounds and Mixtures | no | **P** | Y11 Properties and structure of matter › Separation of mixtures ("physical characteristics of the components") | Low priority. Sharp vs gradual melting point is a fair use of "physical characteristics" |
| y11-m1-l3-separation-physical-methods | Separation Techniques — Physical Methods | no | **X** | Y11 Properties and structure of matter › Separation of mixtures (filtration, evaporation and crystallisation are NESA examples) | Keep |
| y11-m1-l4-separation-advanced-methods | Separation Techniques — Advanced Methods | no | **X** | Y11 Properties and structure of matter › Separation of mixtures (fractional distillation, chromatographic techniques) | Keep. Later, add the Aboriginal dye-extraction and woven-basket filtration point (new) |
| y11-m1-l5-iq1-consolidation | IQ1 Consolidation — Classification and Separation | no | **X** | Y11 Properties and structure of matter › Separation of mixtures ("determine the percentage composition of a mixture by mass") | Keep |
| y11-m1-l6-chemical-bonding-overview | Chemical Bonding Overview | no | **X** | Y11 Properties and structure of matter › Chemical bonding (electronegativity decides ionic or covalent; properties from bonding type; bonding-type practical) | Keep |
| y11-m1-l7-ionic-bonding-properties | Ionic Bonding and Properties | no | **X** | Y11 Properties and structure of matter › Chemical bonding (ionic lattices; melting-point trends in group 1 and group 2 chlorides) | Keep |
| y11-m1-l8-metallic-bonding-properties | Metallic Bonding and Properties | no | **X** | Y11 Properties and structure of matter › Chemical bonding (metallic bonding, models, mp/bp/conductivity) | Keep |
| y11-m1-l9-covalent-molecular-network | Covalent Compounds: Molecular and Network | no | **X** | Y11 Properties and structure of matter › Chemical bonding (covalent molecular vs network; carbon allotropes) | Keep. No VSEPR or electron-dot content was found; that is a gap, see below |
| y11-m1-l10-intermolecular-forces | Intermolecular Forces and Physical Properties | no | **X** | Y11 Properties and structure of matter › Chemical bonding (dispersion, dipole–dipole, hydrogen bonding; ranking bond and force strength) | Keep |
| y11-m1-l11-polymers-structure-properties | Polymers: Structure and Properties | no | **P** | **→Y12** Y12 Organic chemistry (polyester by condensation) + Y12 Applying chemical ideas (PE, PVC, PTFE, PP). There are no polymers in the new Y11 | Relabel to Y12. Overlaps M7 L21–L23 and M8 L16, so voice only one polymer set |
| y11-m1-l12-solubility-like-dissolves-like | Solubility and Like-Dissolves-Like | no | **P** | **→Y12** Y12 Equilibrium › Solution equilibria (dissolution diagrams) + Y12 Organic chemistry (solubility trends). No Y11 home | Low priority |
| y11-m1-l13-atomic-models-historical | Atomic Models: Historical Development | no | **X** | Y11 Properties and structure of matter › Atomic structure (distribution of mass and charge; contributions of selected scientists: Curie, Dalton, Goeppert Mayer, Joliot-Curie, Meitner, Rutherford) | Keep. Curie, Meitner and Rutherford appear in the lesson; Goeppert Mayer and Joliot-Curie were not found |
| y11-m1-l14-isotopes-relative-atomic-mass | Isotopes and Relative Atomic Mass | no | **X** | Y11 Properties and structure of matter › Atomic structure (isotopes; relative atomic mass from isotopic composition) | Keep. New syllabus also wants "why isotopes have similar chemical properties but different densities" (unverified in lesson) |
| y11-m1-l15-periodic-table-organisation | The Periodic Table: Organisation | no | **X** | Y11 Properties and structure of matter › Patterns and trends (periods, groups, blocks) | Keep |
| y11-m1-l16-electron-configuration-subshells | Electron Configuration: Subshell Notation | no | **X** | Y11 Properties and structure of matter › Atomic structure (energy levels, sublevels, orbitals; electron configuration ↔ position) | Keep |
| y11-m1-l17-periodic-trends-atomic-radius | Periodic Trends: Atomic Radius | no | **X** | Y11 Properties and structure of matter › Patterns and trends (atomic and ionic radii) | Keep |
| y11-m1-l18-electronegativity-reactivity | Periodic Trends: Electronegativity and Reactivity | no | **X** | Y11 Properties and structure of matter › Patterns and trends (electronegativity, first ionisation energy) | Keep |
| y11-m1-l19-electron-configuration-behaviour | Electron Configuration and Chemical Behaviour | no | **X** | Y11 Properties and structure of matter › Patterns and trends ("effective charge of an ion from the electron configuration"; predicting ions) | Keep |
| y11-m1-l20-module-synthesis-review | Module 1 Synthesis and Review | no | **P** | Y11 Properties and structure of matter (review) | Revise once the nuclear, flame-test and VSEPR gaps are built |

### Y11 Module 2: Introduction to Quantitative Chemistry (22)

| Lesson file | Title | Voiced | Class | New-syllabus location | Action |
|---|---|---|---|---|---|
| y11-m2-l1-mole-concept | The Mole Concept | 4/13 | **X** | Y11 Quantitative chemistry › Mole concept | **Superseded by L1A/L1B** (the same scenes, split). Don't voice the rest. The 4 voiced scenes are sunk cost |
| y11-m2-l1a-mole-understanding | The Mole Concept, Part A | 9/9 | **X** | Y11 Quantitative chemistry › Mole concept (Avogadro constant) | Keep |
| y11-m2-l1b-mole-applying | The Mole Concept, Part B | 7/7 | **X** | Y11 Quantitative chemistry › Mole concept | Keep |
| y11-m2-l2-molar-mass | Molar Mass | 11/11 | **X** | Y11 Quantitative chemistry › Mole concept (n = m/MM; relative atomic mass vs carbon-12) | Keep |
| y11-m2-l3-empirical-molecular-formulas | Empirical and Molecular Formulas | 8/9 | **X** | Y11 Quantitative chemistry › Mole concept (percentage composition, empirical formulas) | Keep |
| y11-m2-l4-gases-molar-volume | Gases and Molar Volume | 9/10 | **X** | Y11 Quantitative chemistry › Properties of gases (PV = nRT at STP) | Keep. The P–V, T–P and T–V relationships are not covered; that is a gap |
| y11-m2-l5-mole-consolidation | Mole Calculations Consolidation | no | **X** | Y11 Quantitative chemistry › Mole concept | Keep |
| y11-m2-l6-concentration | Concentration: Moles Per Litre | no | **X** | Y11 Quantitative chemistry › Measures of concentration (C = n/V) | Keep |
| y11-m2-l7-standard-solutions-dilutions | Standard Solutions and Dilutions | no | **X** | Y11 Quantitative chemistry › Measures of concentration (primary standard; C1V1 = C2V2) | Keep |
| y11-m2-l8-concentration-in-context | Concentration in Context | no | **P** | Y11 Quantitative chemistry › Measures of concentration (mol L-1, g L-1, mg L-1, %w/w, %w/v, %v/v, ppm, ppb) | Add the full set of 8 measures. ppm and purity are covered; %(w/v) was not found |
| y11-m2-l9-gravimetric-analysis | Gravimetric Analysis | no | **X** | Y11 Quantitative chemistry (% composition by mass) and Y12 Applying chemical ideas ("AAS and gravimetric data to analyse pollutants in water") | Keep |
| y11-m2-l10-volumetric-analysis-titration | Volumetric Analysis and Titration | no | **P** | **→Y12** Y12 Acid–base reactions › Quantitative analysis. Titration is no longer Year 11 | Relabel to Y12. It is the 3rd titration lesson (with M6 L14 and M8 L1), so it is low priority |
| y11-m2-l11-stoichiometry-mole-ratios | Stoichiometry: Mole Ratios | no | **X** | Y11 Quantitative chemistry › Mole concept ("react in simple whole-number molar ratios") | Keep |
| y11-m2-l12-mass-mass-stoichiometry | Mass–Mass Stoichiometry | no | **X** | Y11 Quantitative chemistry › Mole concept ("real-world problems … reacting masses") | Keep |
| y11-m2-l13-limiting-reagents | Limiting Reagents and Theoretical Yield | no | **X** | Y11 Quantitative chemistry › Mole concept (limiting reagents) | Keep |
| y11-m2-l14-percentage-yield-purity | Percentage Yield and Purity | no | **P** | Y11 Quantitative chemistry (percentage yield and purity are not named; "yield" appears only in Y12 Equilibrium) | Low priority |
| y11-m2-l15-gas-stoichiometry | Gas Stoichiometry | no | **X** | Y11 Quantitative chemistry › Properties of gases ("reacting masses, solutions and gases") | Keep |
| y11-m2-l16-stoichiometry-in-solution | Stoichiometry in Solution | no | **X** | Y11 Quantitative chemistry › Measures of concentration ("reacting masses and solutions") | Keep |
| y11-m2-l17-back-calculations | Back Calculations and Unknown Concentrations | no | **P** | Y11 Quantitative chemistry + **→Y12** Y12 Acid–base reactions (back titrations) | Low priority |
| y11-m2-l18-working-scientifically | Working Scientifically | no | **X** | Working scientifically (error, validity, reliability, accuracy; % error) | Keep |
| y11-m2-l19-synthesis-exam-practice | Module 2 Synthesis and Exam Practice | no | **X** | Y11 Quantitative chemistry (synthesis) | Keep |
| y11-m2-l20-module-review | Module 2 Review | no | **X** | Y11 Quantitative chemistry (review) | Keep. Titration and gas-law content will need updating |

### Y11 Module 3: Reactive Chemistry (15)

| Lesson file | Title | Voiced | Class | New-syllabus location | Action |
|---|---|---|---|---|---|
| y11-m3-l1-physical-chemical-change | Physical & Chemical Change | 8/10 | **P** | Y11 Chemical reactions / Y11 Quantitative chemistry › Conservation of mass (atoms rearranged). "Indicators of chemical change" is not a new point | Low priority. Could be recut to conservation of mass plus open and closed systems (new) |
| y11-m3-l2-synthesis-decomposition | Synthesis & Decomposition | 9/10 | **X** | Y11 Chemical reactions › Classifying chemical reactions (synthesis, decomposition) | Keep |
| y11-m3-l3-precipitation-solubility | Precipitation & Solubility Rules | 7/10 | **X** | Y11 Chemical reactions › Classifying (full and net ionic equations; solubility rules) | Keep |
| y11-m3-l4-combustion-reactions | Combustion Reactions | 9/10 | **X** | Y11 Chemical reactions › Classifying (combustion) + Y12 Organic chemistry (complete vs incomplete combustion) | Keep |
| y11-m3-l5-acid-base-acid-carbonate | Acid-Base & Acid-Carbonate Reactions | 10/10 | **X** | Y11 Chemical reactions › Classifying (neutralisation) | Keep |
| y11-m3-l6-indigenous-detoxification | Indigenous Detoxification & Balancing Equations | 8/8 | **P** | Y11 Chemical reactions › Classifying. The new Aboriginal example is **nardoo** detoxification as decomposition; the lesson uses cycads, which are not named in the new syllabus | Swap or add nardoo when revising. Balancing content is fine |
| y11-m3-l7-metal-activity-series | Metal Activity Series | 7/10 | **X** | Y11 Chemical reactions › Classifying (reactivity in O2, water, acid and metal-ion solutions; activity series compared with secondary sources) | Keep |
| y11-m3-l8-redox-oxidation-states | Redox Reactions & Oxidation States | 3/9 | **X** | Y11 Chemical reactions › Classifying (oxidation and reduction by electron transfer and oxidation state; half-equations) | Keep |
| y11-m3-l9-galvanic-cells | Galvanic Cells & Standard Reduction Potentials | 7/9 | **X** | **→Y12** Y12 Applying chemical ideas › Analysis and uses of inorganic substances (galvanic cells; standard reduction potentials; spontaneity) | Keep. Relabel to Y12 |
| y11-m3-l10-inert-electrodes | Galvanic Cells — Inert Electrodes & Predicting Reactions | 7/8 | **X** | **→Y12** Y12 Applying chemical ideas › inorganic (cell potential, spontaneity) | Keep. Relabel to Y12 |
| y11-m3-l11-collision-theory | Collision Theory & Reaction Rate | 7/8 | **X** | Y11 Chemical reactions › Rates of reactions (activation energy, orientation, successful collisions) | Keep |
| y11-m3-l12-factors-affecting-rate | Factors Affecting Reaction Rate | 7/8 | **X** | Y11 Chemical reactions › Rates of reactions (concentration, temperature, surface area, catalysts) | Keep. The Boltzmann mention is extra |
| y11-m3-cp1-predicting-products | Checkpoint 1: Predicting Products | 4/9 | **X** | Y11 Chemical reactions › Classifying chemical reactions | Keep. Its Aboriginal example is cycads, not nardoo |
| y11-m3-cp2-metal-reactivity | Checkpoint 2: Metal Reactivity & Electrochemistry | 5/9 | **P** | Y11 Chemical reactions (redox, activity) + **→Y12** Y12 Applying chemical ideas (galvanic cells) | Splits across years. Keep as a 2017 checkpoint; recut later |
| y11-m3-cp3-rates-synthesis | Checkpoint 3: Rates of Reaction & Cross-IQ Synthesis | 5/9 | **P** | Y11 Chemical reactions › Rates. The Boltzmann-distribution walkthrough is not in the new syllabus | Low priority |

### Y11 Module 4: Drivers of Reactions (16)

| Lesson file | Title | Voiced | Class | New-syllabus location | Action |
|---|---|---|---|---|---|
| y11-m4-l1-enthalpy-energy-profiles | Enthalpy & Energy Profile Diagrams | 9/9 | **X** | Y11 Chemical reactions › Energy changes (endothermic and exothermic; energy profile diagrams) | Keep |
| y11-m4-l2-calorimetry-combustion | Calorimetry, Combustion | 8/8 | **X** | Y11 Chemical reactions › Energy changes (q = mcΔT; ΔH = −q/n) + Y12 Organic chemistry (enthalpy of combustion of alcohols) | Keep |
| y11-m4-l3-calorimetry-neutralisation | Calorimetry, Neutralisation | 6/7 | **X** | Y11 Chemical reactions › Energy changes (calorimetry ΔH for an exothermic reaction; neutralisation is the example, but it is not named) | Keep |
| y11-m4-l4-calorimetry-dissolution | Calorimetry, Dissolution of Ionic Substances | 7/7 | **X** | Y11 Chemical reactions › Energy changes (calorimetry ΔH for an endothermic reaction) + Y12 Equilibrium › Solution equilibria (dissolution) | Keep |
| y11-m4-l5-activation-energy-catalysts | Activation Energy, Catalysts & Energy Diagrams | 7/7 | **X** | Y11 Chemical reactions › Energy changes (catalysts provide an alternative lower-energy pathway) | Keep |
| y11-m4-l6-bond-energy | Bond Energy & Enthalpy Change | 6/7 | **P** | Y11 Chemical reactions › Energy changes ("relate heat energy changes to total bond energy changes"). Bond-energy ΔH calculations are not required | Keep for 2017; the qualitative core survives |
| y11-m4-l7-enthalpy-of-formation | Enthalpy of Formation | 7/8 | **—** | Not in new syllabus (no ΔH°f) | Sunk cost (voiced). Serves 2017 cohorts only |
| y11-m4-l8-hesss-law | Hess's Law | 7/7 | **—** | Not in new syllabus (no Hess's law) | Sunk cost (voiced) |
| y11-m4-l9-hess-photosynthesis-respiration | Hess's Law Applied, Photosynthesis & Respiration | 7/7 | **—** | Not in new syllabus (Hess) | Sunk cost (voiced) |
| y11-m4-l10-hess-combustion-consolidation | Hess's Law Applied, Heat of Combustion & Consolidation | 7/7 | **—** | Not in new syllabus (Hess/ΔH°f) | Sunk cost (voiced) |
| y11-m4-l11-entropy | Entropy, Definition, Modelling & Predicting ΔS | 7/7 | **—** | Not in new syllabus (no entropy) | Sunk cost (voiced) |
| y11-m4-l12-calculating-entropy | Calculating ΔS° & Standard Entropy | 7/7 | **—** | Not in new syllabus (entropy) | Sunk cost (voiced) |
| y11-m4-l13-gibbs-free-energy | Gibbs Free Energy & Spontaneity | 7/7 | **—** | Not in new syllabus (no Gibbs free energy) | Sunk cost (voiced) |
| y11-m4-cp1-energy-changes | Checkpoint 1, Energy Changes in Reactions | 9/9 | **X** | Y11 Chemical reactions › Energy changes | Keep |
| y11-m4-cp2-enthalpy-hess | Checkpoint 2, Enthalpy & Hess's Law | 7/9 | **—** | Not in new syllabus (bond energy / ΔH°f / Hess) | Sunk cost. **Don't regenerate** its 2 missing scenes unless it is needed for the 2027 cohort |
| y11-m4-cp3-entropy-gibbs | Checkpoint 3, Entropy & Gibbs Free Energy | 9/9 | **—** | Not in new syllabus (entropy / Gibbs) | Sunk cost (voiced) |

### Y12 Module 5: Equilibrium and Acid Reactions (18)

| Lesson file | Title | Voiced | Class | New-syllabus location | Action |
|---|---|---|---|---|---|
| y12-m5-l1-static-dynamic-equilibrium | Static vs Dynamic Equilibrium | 9/10 | **X** | Y12 Equilibrium › Dynamic equilibrium (+ closed system). Open and closed systems also appear in Y11 Quantitative chemistry | Keep |
| y12-m5-l2-reversibility-entropy | Reversibility, Non-Equilibrium Systems and Entropy | 9/10 | **P** | Y12 Equilibrium › Dynamic equilibrium ("demonstrate the reversibility of a chemical reaction"). The entropy/enthalpy framing of non-equilibrium systems is 2017 only | Keep for 2017; trim entropy for a new-syllabus version |
| y12-m5-l3-collision-theory-equilibrium | Collision Theory Applied to Equilibrium | 9/10 | **X** | Y12 Equilibrium › Dynamic equilibrium / Factors (collision theory) | Keep |
| y12-m5-l4-equilibrium-analogies-misconceptions | Equilibrium in Context: Analogies and Misconceptions | 9/10 | **X** | Y12 Equilibrium › Dynamic equilibrium ("macroscopic properties remain constant"; modelling) | Keep |
| y12-m5-l5-lcp-concentration-temperature | Le Chatelier's Principle: Concentration and Temperature | 9/10 | **X** | Y12 Equilibrium › Factors (Le Chatelier: concentration, temperature; practical) | Keep |
| y12-m5-l6-lcp-pressure-volume-catalysts | Le Chatelier's Principle: Pressure, Volume and Catalysts | 9/10 | **X** | Y12 Equilibrium › Factors (pressure, volume) | Keep |
| y12-m5-l7-industrial-applications-equilibrium | Industrial Applications of Equilibrium | 9/10 | **X** | Y12 Equilibrium › Factors (increase yield; economical industrial production) | Keep |
| y12-m5-l8-lcp-mastery-consolidation | LCP Mastery: Multi-Variable Problems and Graphs | 9/10 | **X** | Y12 Equilibrium › Factors | Keep |
| y12-m5-l9-writing-keq-expressions | Writing Keq Expressions | 9/10 | **X** | Y12 Equilibrium › Calculating Keq (homogeneous solution and gas expressions) | Keep |
| y12-m5-l10-calculating-keq-ice-tables | Calculating Keq and ICE Tables | 8/9 | **X** | Y12 Equilibrium › Calculating Keq | Keep |
| y12-m5-l11-ice-table-mastery | ICE Table Mastery | 7/9 | **X** | Y12 Equilibrium › Calculating Keq | Keep |
| y12-m5-l12-reaction-quotient-q | The Reaction Quotient Q | 8/9 | **X** | Y12 Equilibrium › Calculating Keq (Q) | Keep |
| y12-m5-l13-temperature-keq-colourimetry | Temperature, Keq and Colourimetry | 8/9 | **X** | Y12 Equilibrium › Calculating Keq (temperature effect; FeSCN²⁺ Keq practical) | Keep |
| y12-m5-l14-ka-kb-gibbs | Ka, Kb and Gibbs Free Energy | 9/10 | **P** | Y12 Acid–base reactions (Ka, Kb, Kw). The Keq↔Gibbs link is 2017 only | Keep for 2017 |
| y12-m5-l15-dissolution-atsi | Dissolution and First Nations Knowledge | 8/9 | **P** | Y12 Equilibrium › Solution equilibria (dissolution diagrams). The cycad detox example is not in the new syllabus | Keep for 2017 |
| y12-m5-l16-solubility-rules-precipitation | Solubility Rules and Precipitation | 8/9 | **X** | Y12 Equilibrium › Solution equilibria (lab-derived solubility rules for named cations and anions; identifying unknown ions) | Keep |
| y12-m5-l17-solubility-product-ksp | The Solubility Product Ksp | 7/8 | **X** | Y12 Equilibrium › Solution equilibria (Ksp; solubility in g L-1 and mol L-1) | Keep |
| y12-m5-l18-qsp-common-ion-effect | Qsp, Precipitation and the Common Ion Effect | 8/9 | **X** | Y12 Equilibrium › Solution equilibria (predict a precipitate from Ksp). The common-ion effect is extra | Keep |

### Y12 Module 6: Acid/Base Reactions (19)

| Lesson file | Title | Voiced | Class | New-syllabus location | Action |
|---|---|---|---|---|---|
| y12-m6-l1-acid-base-models | Acid-Base Models: Arrhenius to Brønsted-Lowry | 8/9 | **X** | Y12 Acid–base reactions › Properties ("limitations in Arrhenius's theory led to Brønsted–Lowry") | Keep |
| y12-m6-l2-nomenclature-indicators-acid-reactions | Naming Acids, Indicators and Acid Reactions | 10/11 | **X** | Y12 Acid–base reactions › Properties (IUPAC names of inorganic acids and bases; properties; indicators) | Keep. The new natural-indicator vs universal-indicator lab is not explicit |
| y12-m6-l3-enthalpy-of-neutralisation | Enthalpy of Neutralisation | 9/10 | **P** | **→Y11** Y11 Chemical reactions › Energy changes (a calorimetry example). There is no enthalpy of neutralisation in new Y12 | Keep for 2017 |
| y12-m6-l4-neutralisation-everyday-industry | Neutralisation in Everyday Life and Industry | 10/11 | **P** | Y12 Acid–base reactions (salt nature) / Y11 Chemical reactions ("evaluate the impact of a chemical reaction in medicine or agriculture") | Keep for 2017 |
| y12-m6-l5-strong-vs-weak-acids-bases | Strong vs Weak Acids and Bases | 10/11 | **X** | Y12 Acid–base reactions › Brønsted–Lowry (strong vs weak; pH of acids at the same concentration) | Keep |
| y12-m6-l6-strong-weak-mastery-salt-hydrolysis | Strong/Weak Mastery and Salt Hydrolysis | 9/10 | **X** | Y12 Acid–base reactions › Brønsted–Lowry (acidic or basic nature of salts) | Keep |
| y12-m6-l7-conjugate-pairs-amphiprotic-water | Conjugate Pairs, Amphiprotic Species and Water | 10/11 | **X** | Y12 Acid–base reactions › Brønsted–Lowry (conjugate pairs; amphiprotic; ionic equations) | Keep |
| y12-m6-l8-ph-poh-strong-acids-bases | pH and pOH for Strong Acids and Bases | 9/10 | **X** | Y12 Acid–base reactions › Brønsted–Lowry (pH, pOH, [H+], [OH−]; mixing) | Keep |
| y12-m6-l9-ka-kb-ice-tables | pH of Weak Acids: Ka, Kb and ICE Tables | 10/11 | **X** | Y12 Acid–base reactions › Brønsted–Lowry (Ka, Kb) | Keep |
| y12-m6-l10-neutralisation-enthalpy-strong-vs-weak | Neutralisation Enthalpy: Strong vs Weak Compared | 10/11 | **—** | Not in new syllabus (enthalpy of neutralisation, strong vs weak) | Sunk cost (voiced) |
| y12-m6-l11-ph-calculations-mastery | pH Calculations Mastery | 9/10 | **X** | Y12 Acid–base reactions › Brønsted–Lowry (pH of a resultant solution) | Keep |
| y12-m6-l12-ka-pka-acid-strength | Ka, pKa and Acid Strength | 9/10 | **X** | Y12 Acid–base reactions › Brønsted–Lowry (Ka, pKa; polyprotic acids) | Keep |
| y12-m6-l13-buffers | Buffer Solutions | 9/10 | **X** | Y12 Acid–base reactions › Brønsted–Lowry (buffers: prepare; role in a natural system) | Keep |
| y12-m6-l14-titration-technique | Titration: Technique and Calculations | 9/10 | **X** | Y12 Acid–base reactions › Quantitative analysis (primary standard; titration) | Keep |
| y12-m6-l15-indicators | Indicators and the Equivalence Point | 8/9 | **X** | Y12 Acid–base reactions › Quantitative analysis (equivalence point vs endpoint; indicator choice) | Keep |
| y12-m6-l16-titration-curves | Titration Curves | 8/9 | **X** | Y12 Acid–base reactions › Quantitative analysis (titration curves) | Keep |
| y12-m6-l17-titration-indicator-mastery | Titration and Indicator Mastery | 8/9 | **X** | Y12 Acid–base reactions › Quantitative analysis | Keep |
| y12-m6-l18-back-conductometric-titration | Back Titration and Conductometric Titration | 8/9 | **X** | Y12 Acid–base reactions › Quantitative analysis (back titrations; conductivity graphs) | Keep |
| y12-m6-l19-industrial-digital-analysis | Industrial and Digital Acid-Base Analysis | 8/9 | **X** | Y12 Acid–base reactions › Quantitative analysis (household digital probes and instruments) | Keep |

### Y12 Module 7: Organic Chemistry (23)

| Lesson file | Title | Voiced | Class | New-syllabus location | Action |
|---|---|---|---|---|---|
| y12-m7-l1-intro-iupac-nomenclature | Intro to Organic Chemistry & IUPAC Nomenclature I | no | **X** | Y12 Organic chemistry › Hydrocarbons (IUPAC C1–C8, branched; shapes) | Keep. **Top priority** |
| y12-m7-l2-functional-groups-isomers | IUPAC Nomenclature II: Functional Groups & Isomers | no | **P** | Y12 Organic chemistry (isomers; functional groups). Naming amines, amides, aldehydes and ketones goes beyond the new syllabus | Voice (the naming core is shared) |
| y12-m7-l3-hydrocarbons-properties | Hydrocarbons: Homologous Series & Physical Properties | no | **X** | Y12 Organic chemistry › Hydrocarbons (homologous series; bp vs chain length; IMFs) | Keep |
| y12-m7-l4-structure-bonding | Hydrocarbon Structure & Bonding | no | **X** | Y12 Organic chemistry › Hydrocarbons ("reactivity differences between alkanes and alkenes") | Keep |
| y12-m7-l5-hydrocarbon-reactions | Hydrocarbon Reactions: Combustion, Substitution, Addition | no | **X** | Y12 Organic chemistry › Hydrocarbons (addition; substitution with halogens; combustion) | Keep |
| y12-m7-l6-alkene-reactions | Reactions of Alkenes: Addition & Markovnikov's Rule | no | **X** | Y12 Organic chemistry › Hydrocarbons (alkene + H2, X2, HX, H2O). Markovnikov is not named but is needed for HX/H2O | Keep |
| y12-m7-l7-alkyne-alkane-reactions | Reactions of Alkynes & Alkanes | no | **P** | Y12 Organic chemistry › Hydrocarbons (alkane substitution). Alkyne two-step addition and hydration to ketone are extra | Voice after the Tier 1 lessons |
| y12-m7-l8-reactions-mastery | Hydrocarbon Reactions Mastery: Conditions, Products & Errors | no | **P** | Y12 Organic chemistry › Hydrocarbons (conditions; multi-step). Geminal/vicinal and the propyne hub are extra | Lower |
| y12-m7-l9-alcohol-structure-properties | Structure & Properties of Alcohols | no | **X** | Y12 Organic chemistry › Alcohols (1°/2°/3°; bp and solubility trends) | Keep |
| y12-m7-l10-alcohol-production | Production of Alcohols: Hydration, Substitution, Fermentation | no | **X** | Y12 Organic chemistry › Alcohols (production by haloalkane substitution; hydration; "producing alcohol from plants and crude oil") | Keep |
| y12-m7-l11-combustion-of-alcohols | Combustion of Alcohols & Comparison with Fossil Fuels | no | **X** | Y12 Organic chemistry › Alcohols (enthalpy of combustion vs chain length; lab) | Keep |
| y12-m7-l12-alcohol-reactions | Reactions of Alcohols: Dehydration, Substitution, Oxidation | no | **X** | Y12 Organic chemistry › Alcohols (dehydration; HX substitution; oxidation to aldehyde and ketone) | Keep |
| y12-m7-l13-aldehydes-and-ketones | Aldehydes and Ketones | no | **P** | Y12 Organic chemistry › Alcohols ("account for aldehyde and ketone products" only). Tollens/Fehling-style tests are extra | Lower |
| y12-m7-l14-carboxylic-acids | Carboxylic Acids | no | **X** | Y12 Organic chemistry › Organic acids (naming, properties, oxidation route, test for a carboxylic acid) | Keep |
| y12-m7-l15-esters | Esters | no | **X** | Y12 Organic chemistry › Esters (naming; lab synthesis and purification) | Keep |
| y12-m7-l16-amines-and-amides | Amines and Amides | no | **—** | Not in new syllabus (no amines or amides) | Don't voice unless it is for the 2027/2028 cohorts |
| y12-m7-l17-soaps-and-detergents | Soaps, Detergents and Saponification | no | **—** | Not in new syllabus (no soaps or saponification) | Same |
| y12-m7-l18-organic-acids-and-bases | Organic Acids and Bases | no | **—** | Not in new syllabus (no organic acid/base comparison) | Same |
| y12-m7-l19-reaction-pathways | Organic Reaction Pathways | no | **X** | Y12 Organic chemistry › Esters ("flow charts … reaction pathways for ester synthesis, including multi-step") | Keep. **Top priority** |
| y12-m7-l20-organic-reactions-mastery | Organic Reactions Mastery | no | **X** | Y12 Organic chemistry (hydrocarbon and alcohol reactions mastery) | Keep |
| y12-m7-l21-addition-polymers | Addition Polymers | no | **X** | Y12 Applying chemical ideas › organic (PE, PVC, PTFE, PP; ethene → chloroethene) | Keep. Relabel the focus area |
| y12-m7-l22-condensation-polymers | Condensation Polymers | no | **P** | Y12 Organic chemistry › Esters (polyester by esterification). Nylon/polyamides are not in the new syllabus | Recut toward polyester |
| y12-m7-l23-polymers-properties-and-environment | Polymers: Properties and Environment | no | **P** | Y12 Applying chemical ideas (environmental and health impacts of polymers). The thermoset framing is extra | Lower |

### Y12 Module 8: Applying Chemical Ideas (16)

| Lesson file | Title | Voiced | Class | New-syllabus location | Action |
|---|---|---|---|---|---|
| y12-m8-l1-acid-base-titrations-indicators | Acid-Base Titrations and Indicators | no | **X** | Y12 Acid–base reactions › Quantitative analysis (titration, back titration, indicator) | Keep, but it duplicates M6 L14/L18, so it is low priority |
| y12-m8-l2-gravimetric-analysis | Gravimetric Analysis | no | **X** | Y12 Applying chemical ideas › inorganic ("AAS and gravimetric data to analyse pollutants in water") + Y11 Quantitative chemistry | Keep |
| y12-m8-l3-precipitation-qualitative-analysis | Precipitation Reactions and Qualitative Analysis | no | **P** | Y12 Equilibrium › Solution equilibria (identify 2 unknown ions) + **→Y11** Y11 Properties and structure of matter (flame tests). Complexation is not named | Recut later |
| y12-m8-l4-spectroscopic-analysis-uv-vis-aas | Spectroscopic Analysis, UV-Vis and AAS | no | **P** | Y12 Applying chemical ideas › inorganic (AAS as a quantitative method; AAS/AES and electron configuration). UV-Vis/Beer–Lambert is not named | Recut toward AAS/AES |
| y12-m8-l5-chromatography-tlc-column-hplc | Chromatography, TLC, Column and HPLC | no | **P** | **→Y11** Y11 Properties and structure of matter › Separation (chromatographic techniques, as an example only). Rf/HPLC depth is extra | Lower |
| y12-m8-l6-water-quality-parameters-standards | Water Quality Parameters and Standards | no | **—** | Not in new syllabus (no water-quality parameters) | Don't voice unless it is for the 2027/2028 cohorts |
| y12-m8-l7-monitoring-dissolved-oxygen-bod | Monitoring Dissolved Oxygen and BOD | no | **—** | Not in new syllabus (no DO/BOD/Winkler) | Same |
| y12-m8-l8-heavy-metal-contamination-analysis | Heavy Metal Contamination and Analysis | no | **P** | Y12 Applying chemical ideas › inorganic (AAS data on pollutants in water). The bioaccumulation framing is extra | Recut toward AAS calculations |
| y12-m8-l9-nutrient-pollution-eutrophication | Nutrient Pollution and Eutrophication | no | **—** | Not in new syllabus (no eutrophication) | Don't voice unless it is for the 2027/2028 cohorts |
| y12-m8-l10-water-treatment-processes | Water Treatment Processes | no | **—** | Not in new syllabus (no water treatment) | Same |
| y12-m8-l11-drug-classification-functional-groups | Drug Classification and Functional Groups | no | **—** | Not in new syllabus (medicines by functional group) | Same. Also thinly tied to the 2017 syllabus |
| y12-m8-l12-acid-base-properties-drug-molecules | Acid-Base Properties of Drug Molecules | no | **—** | Not in new syllabus (drug acid–base, Henderson–Hasselbalch) | Same. Not a 2017 dot point either |
| y12-m8-l13-optical-isomerism-chirality | Optical Isomerism and Chirality in Medicines | no | **—** | Not in new syllabus (no optical isomers; only geometric isomers) | Same. Not a 2017 dot point either |
| y12-m8-l14-solubility-polarity-drug-delivery | Solubility, Polarity and Drug Delivery | no | **—** | Not in new syllabus (drug delivery) | Same. Not a 2017 dot point either |
| y12-m8-l15-drug-synthesis-green-chemistry | Drug Synthesis and Green Chemistry | no | **—** | Not in new syllabus (chemical synthesis design is dropped) | Same. The 2017 "designing a chemical synthesis process" point applies |
| y12-m8-l16-polymers-structure-properties | Polymers, Structure, Properties and Applications | no | **P** | Y12 Applying chemical ideas (PE, PVC, PTFE, PP) | It duplicates M7 L21/L23; pick one |
## Gaps: new-syllabus content with no existing lesson

"XO-gap" = also in the 2017 syllabus, so a lesson built now serves the 2027/2028 cohorts **and** every later one. "NEW" = only in the 2025 syllabus. The keyword greps behind "not found" are listed under "What was not verified" at the end.

### Year 11 (starts 2028 Term 1)

**Properties and structure of matter (45 h)**
1. **Radioactivity.** Covers naturally occurring radioisotopes and background radiation; the mass and charge of α, β and γ; balanced nuclear equations for decay **and fission**; half-life and radiation type deciding the uses of radioisotopes; and a secondary-source investigation of one radioisotope in medicine, industry or environmental monitoring. **XO-gap** (2017 M1 "unstable isotopes … radioisotopes"). No lesson mentions half-life or radioisotopes.
2. **Flame tests and emission spectroscopy.** Covers flame colours, electron transitions, and uses in industry and medicine. **XO-gap** (2017 M1). Flame tests appear only as support in Y12 M8 L3 and in M3 cp1.
3. **Electron-dot diagrams, VSEPR shapes and molecular polarity** (including hydroxide, ammonium and acetate ions). **XO-gap** (2017 M1 "modelling the shapes of molecular substances"). No lesson mentions VSEPR or electron-dot diagrams.
4. **Carbon allotropes** (mp, conductivity, hardness). **XO-gap, partial**: M1 L9/L20 cover diamond vs graphite. Could extend M1 L9 instead of a new lesson.
5. Aboriginal Knowledge: separation by dye extraction and woven-basket filtration; the Jawoyn "sickness Country" (Buladjang) and radioactive deposits. **NEW**
6. IUPAC nomenclature of inorganic substances; why isotopes have similar chemistry but different densities. **Small; could fold into existing lessons**

**Quantitative chemistry (35 h)**
1. **Gas laws.** The P–V (constant T), T–P (constant V) and T–V (constant P) relationships from data, plus **PV = nRT**. **XO-gap** (2017 M2 "Gas Laws" IQ). No lesson mentions Boyle, Charles or PV = nRT. M2 L4 covers molar volume only.
2. **Conservation of mass; open vs closed systems.** Covers the gas-mass practical and Aboriginal coal cooking and enclosed pit ovens as open and closed systems. **NEW** (touched in M2 L11 and M3 L1)
3. **Full concentration measures** (g L-1, mg L-1, %w/w, %w/v, %v/v, ppm, ppb). **Partial**: extend M2 L8.
4. Aboriginal and Torres Strait Islander infusion, roasting, pounding and leaching to control chemical delivery. **NEW**

**Chemical reactions (40 h)**
1. The **nardoo** decomposition example (replacing cycads in M3 L6/cp1). **NEW example**
2. Metal reactivity vs ionisation energy, atomic radius and electronegativity. **Probably partial** in M3 L7 (unverified)
3. Secondary-source investigations: the impact of a chemical reaction in medicine or agriculture; the economic advantages of an industrial catalyst. **NEW**
4. Heat-capacity comparison practical. **Small**

### Year 12 (starts 2028 Term 4)

**Equilibrium**: well covered by M5. Small gap: the secondary-source investigation of solubility equilibria for monitoring **Pb²⁺ and phosphate** in the environment (**NEW**).

**Acid–base reactions**: well covered by M6. Small gaps: preparing a **natural indicator** vs universal indicator; digital pH probes vs indicators (M6 L19 partly covers this); **pKb** (not found in any lesson).

**Organic chemistry**: well covered by M7. Gaps:
- **Geometric (cis/trans) isomers** of alkenes and alkynes, plus chain and position isomers C1–C8, with a model-building focus. **NEW emphasis** (M7 L2 covers structural isomers only)
- **Skeletal structures** for all four families. **NEW** (only M8 L11 mentions them)
- Health and safety of handling and disposing of hydrocarbons; the uses of methane and ethene. **NEW, small**
- Functional-group isomers (carboxylic acids vs esters). **Small**; extend M7 L2/L15

**Applying chemical ideas**: **the biggest gap in the catalogue**
- **Mass spectrometry, IR spectroscopy, ¹H and ¹³C NMR, and combined structure determination.** **XO-gap** (2017 M8 named "proton and carbon-13 NMR, mass spectrometry, infrared spectroscopy"). **No lesson in the repo covers any of these**, so this is also missing for the 2027/2028 HSC cohorts. Aim for 3–4 lessons.
- **Petroleum.** Covers composition and origin; fractional distillation in refining; applications and environmental impacts; IR of petroleum samples; and the ethene → chloroethene flow chart. **NEW** (2017 M7 biofuels is adjacent)
- **Base-metal ores.** Covers features; why the metal must be quantified; extraction and processing flow charts; and environmental, social and economic evaluation. **NEW**
- AES vs flame tests; AAS/AES and electron configuration; AAS and gravimetric calculations for pollutants in water. **Partial** (M8 L2/L4/L8, which need recutting)
- Oxidant/reductant terms; **redox and battery technology** (secondary source). **NEW** (galvanic content itself is M3 L9/L10)
- Selected scientists who confirmed organic structures (Cohn, F and G Cori, Franklin, Hodgkin, Strecker); Aboriginal organic resins vs modern polymers. **NEW**

## Build/voice priority (spend credits here first)

Context: 74 lessons already have audio. They are all of M3, M4, M5 and M6, plus M2 L1–L4. The unvoiced set is M1, M2 L5–L20, M7 and M8 (75 lessons). Priority goes to lessons that are (a) crossover, so they serve the 2027/2028 cohorts and all later ones; (b) in need of little or no edit; (c) high-yield exam content; and (d) unvoiced, because voiced crossover lessons are already done.

**Tier 1: voice now as-is. These are Y12 crossover lessons, used in the 2027 HSC, the 2028 HSC and every new-syllabus HSC. 15 lessons, plus 6 partly-voiced lessons to finish.**
1. Organic core: M7 L1, L3, L4, L5, L6, L9, L10, L11, L12, L14, L15, L19, L20
2. Applying chemical ideas: M7 L21 (addition polymers; relabel the focus area), M8 L2 (gravimetric)
3. Finish the partly-voiced crossover lessons: M3 L8 (3/9), M3 cp1 (4/9), M3 L3/L7 (7/10), M3 L9 (7/9), M5 L11 (7/9). This is cheap regen, because most scenes are done.

**Tier 2: voice as-is. These are Y11 crossover lessons, used by Y11 2027 on the 2017 syllabus and by every Y11 cohort from 2028. 27 lessons.**
4. M1: L3, L4, L5, L6, L7, L8, L9, L10, L13, L14, L15, L16, L17, L18, L19
5. M2: L5, L6, L7, L9, L11, L12, L13, L15, L16, L18, L19, L20. Leave the legacy M2 L1; it is superseded by L1A/L1B.

**Tier 3: edit, then voice (PARTIAL with high reuse), roughly in this order**
- M2 L8 (add all 8 concentration measures), M3 L6 (add nardoo), M7 L2, M7 L7, M7 L22 (recut toward polyester), M8 L4 and L8 (recut toward AAS/AES), M8 L3, M7 L13, M7 L8, M7 L23
- Year moves, relabel only: M2 L10 and L17 (→Y12 Acid–base), M1 L11 (→Y12; choose **one** of M1 L11, M7 L21–L23 and M8 L16 as the polymer set), M8 L5 (→Y11)
- Lower: M1 L1, L2, L12, L20; M2 L14; M3 L1, cp2, cp3; M8 L16
- These are already voiced and only need edits if a new-syllabus version is published: M4 L6, M5 L2, L14, L15, M6 L3, L4

**Build new.** Do the XO-gaps first, because they serve both cohorts:
1. **Applying chemical ideas: spectroscopy.** Cover MS, IR, ¹H/¹³C NMR and combined structure determination in 3–4 lessons. This is the **single highest-value build**. The gap exists for the 2027/2028 HSC too, and it is a heavily examined 2017 M8 dot point.
2. **Y11 radioactivity and nuclear equations** (1–2 lessons).
3. **Y11 flame tests and emission spectroscopy** (1 lesson).
4. **Y11 VSEPR, electron-dot diagrams and polarity** (1 lesson).
5. **Y11 gas laws and PV = nRT** (1 lesson).
6. Then the NEW-only builds for 2028+: petroleum refining; base-metal ores; redox and batteries; conservation of mass and open/closed systems; geometric isomers and skeletal structures; and the Aboriginal Knowledge content points, which may be best folded into existing lessons.

**Do not voice (2017-ONLY and unvoiced, 12):** M7 L16, L17, L18; M8 L6, L7, L9, L10, L11, L12, L13, L14, L15. Unlike Biology, Chemistry still has **two** 2017 HSC cohorts (2027, 2028). Voice these last, and only if that audience matters. M8 L12–L14, and arguably L11, don't match a 2017 dot point closely either. They look like extension material, so they would be the last of the last.

**Sunk cost (2017-ONLY, already voiced, 10):** M4 L7–L13, cp2, cp3; M6 L10. Leave them in the catalogue for the 2027/2028 cohorts and don't spend more on them.

## What was not verified

- **Verified from the primary source:** that the syllabus exists; implementation dates; focus areas, outcomes and indicative hours; and every content point quoted or paraphrased above (curriculum.nsw.edu.au focus-area and overview pages, 2026-09-24). "Last 2017 HSC = 2028" is inferred from the table (Y12 continues on 2017 through 2028 Term 3), not stated in those words.
- **Judgement calls, not NESA statements:** CROSSOVER/PARTIAL/2017-ONLY labels, year-move calls, tiers and gap groupings. Lessons were read through titles, `syllabusDotPoints`, scene headings and keyword greps, not full scripts. "Not found" means the term did not appear in any `chemistry-*.json`. Terms searched: half-life, radioisotope, VSEPR, electron dot, allotrope, Boyle, Charles, PV=nRT, w/v, nardoo, NMR, infrared, petroleum, crude oil, natural indicator, pKb, skeletal, and others.
- **UNVERIFIED specifics:** whether M1 L13 names Goeppert Mayer or Joliot-Curie; whether M1 L14 covers isotope density; whether M3 L7 covers reactivity vs ionisation energy; whether M1 L18 covers first ionisation energy in depth; and whether any lesson treats cis/trans isomers (the grep for "cis" was too noisy to be conclusive).
- **Voicing** was counted from `audioFile` fields in the JSON. The MP3s themselves are not in this checkout. NESA teaching advice, the depth-study guide and the NESA sample scope-and-sequence documents were not read.
