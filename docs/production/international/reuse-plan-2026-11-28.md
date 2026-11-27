# International reuse plan: IB, A-level and AP sciences (28 November 2026)

Status: planning only. Nothing here is approved for build, voice or render. HSC stays the priority.

Author: Claude (planning agent). Inputs read: the lesson designs in `docs/production/claude-pm/lessons/`, the built lessons in `src/explainer/lessons/`, `src/explainer/sims/README.md`, `docs/production/bunny/ledger.csv`, `docs/production/claude-pm/coverage-ledger.md` and `C:\Users\kygs\IB-Science\CLAUDE.md`.

## 0. What HSC material exists (as of today)

| HSC set | Designs | Built in `src/explainer/lessons` | Finished on Bunny (ledger) |
| --- | --- | --- | --- |
| Biology Year 12 (2017 syllabus, M5 to M8) | 89 | 84 (one is a trial folder) | 82 |
| Chemistry Year 12 (2017, M5 to M8) | 104 | 99 | 95 |
| Chemistry Year 11 (2017, M1 to M4 plus WS) | 83 | 26 (M1 V01 to V17, V21; M2 V01 to V04, V06; WS V01 to V03) | 20 |
| Biology Year 11 (2025, FA1 to FA3 plus WS) | 103 | 0 | 0 |
| Physics Year 11 (2025, FA0 to FA3) | 101 | 0 | 0 |
| Physics Year 12 (2017, M5 to M8) | 82 | 81 (all but M5 V14) | 0 (built, not yet in the Bunny ledger) |

Two points matter for reuse:

- A **built** lesson can be localised and re-voiced. A **design-only** lesson still needs the full build, plates and checks. Most reuse for Biology and Year 11 Physics is design-only today. It becomes cheap only after the HSC build happens anyway.
- The simulations in `src/explainer/sims/` carry no course wording by rule (README rule 1). Particle box, field motion, waves, induction, circuits, collisions, relativity, photoelectric, blackbody, titration, energy profile and population can serve any market unchanged.

### Grades used below

| Grade | Meaning |
| --- | --- |
| **Re-voice** | Science, order and depth already match. Needs only the global localisation pass (spelling, units, branding cards, end slate) and a new Kokoro voice track with new alignment. No scene redesign. |
| **Edits** | Reuse the scenes, but change named items: spelling and units, notation (IB data booklet symbols, AP equation sheet symbols), depth (add or cut a step), practical names, local examples. |
| **Partial** | Some scenes or plates carry over. The script and at least one main scene need new design. |
| **New** | No useful HSC source. New design needed (it can still use the shared kit and sims). |

"Videos from HSC" counts the international videos that would come mostly from existing HSC designs or builds. Several HSC sources often merge into one international video, so this is a count of output videos, not of HSC files.

Honesty note: mappings were made from lesson titles and targeted searches of the designs, not from a full read of every design. Topic placement inside the official guides (for example which IB subtopic holds endosymbiosis, or whether transformers sit in IB D.4) must be checked against the full guide before design. Counts are planning estimates, plus or minus about 15%.

---

## 1. IB Diploma (current guides, first assessment 2025)

Sources: IB subject pages and subject briefs (first assessment 2025):
- Biology: https://ibo.org/programmes/diploma-programme/curriculum/sciences/biology/ and https://www.ibo.org/globalassets/new-structure/recognition/pdfs/dp_sciences_biology_subject-brief_jan_2022_e.pdf
- Chemistry: https://ibo.org/programmes/diploma-programme/curriculum/sciences/chemistry/ and https://www.ibo.org/globalassets/new-structure/recognition/pdfs/dp_sciences_chemistry_subject-brief_jan_2022_e.pdf
- Physics: https://ibo.org/programmes/diploma-programme/curriculum/sciences/physics/ and https://ibo.org/globalassets/new-structure/recognition/pdfs/dp_sciences_physics_subject-brief_jan_2022_e.pdf

The full subject guides sit on the IB Programme Resource Centre (login). The topic codes below follow those guides; the subject briefs give only the outline. The IB PDF returned 403 to an automated fetch in this session, so verify topic wording against the guide.

### 1a. IB Biology

Abbreviations: `BY` = `bio-y11-` (2025 designs, not built), `bio-m5..m8` = Year 12 built and released.

| IB topic | HSC sources | Grade | From HSC | New |
| --- | --- | --- | --- | --- |
| A1.1 Water | none | New | 0 | 2 |
| A1.2 Nucleic acids | BY fa1-v22, fa1-v25, bio-m5-b06a | Edits (HL: Hershey-Chase, Chargaff) | 2 | 1 |
| A2.1 Origins of cells (HL) | none | New | 0 | 1 |
| A2.2 Cell structure | BY fa1-v01 to v07 (cells, organelles, microscopy, magnification) | Edits (IB atypical cells, practical naming) | 6 | 1 |
| A2.3 Viruses (HL) | bio-m7-b01 (pathogen plates only) | Partial | 0 | 1 |
| A3.1 Diversity of organisms | BY fa3-v04 (speciation idea only) | Partial | 0 | 2 |
| A3.2 Classification and cladistics (HL) | BY fa3-v17, fa3-v21 | Edits | 2 | 1 |
| A4.1 Evolution and speciation | BY fa3-v01, v04, v09, v19, v20, v21, v22 | Edits (drop Australian mammal framing of fa3-v05, v06) | 5 | 1 |
| A4.2 Conservation of biodiversity | bio-m6-b12, b13, BY fa3-v03 | Partial | 1 | 2 |
| B1.1 Carbohydrates and lipids | none | New | 0 | 2 |
| B1.2 Proteins | bio-m5-b07 | Partial | 1 | 1 |
| B2.1 Membranes and membrane transport | BY fa1-v08 to v14 | Edits | 6 | 1 |
| B2.2 Organelles and compartmentalization | BY fa1-v02 | Edits | 1 | 1 |
| B2.3 Cell specialization | BY fa2-v01 to v04 (SA:V, agar cubes, levels) | Edits (stem cells new) | 3 | 1 |
| B3.1 Gas exchange | BY fa2-v22, fa2-v15 | Edits | 2 | 1 |
| B3.2 Transport | BY fa2-v09 to v12, v19, v20 | Edits | 5 | 1 |
| B3.3 Muscle and motility (HL) | none | New | 0 | 2 |
| B4.1 Adaptation to environment | BY fa3-v10, v11, v13, v15 | Edits (replace Australian species with IB habitat and biome examples) | 2 | 1 |
| B4.2 Ecological niches | BY fa3-v25, v29 | Partial | 1 | 2 |
| C1.1 Enzymes and metabolism | BY fa1-v18 to v21 | Edits (HL inhibition new) | 4 | 1 |
| C1.2 Cell respiration | BY fa1-v16 | Partial (HL glycolysis, Krebs, chemiosmosis new) | 1 | 2 |
| C1.3 Photosynthesis | BY fa1-v17, fa2-v05 to v08 | Edits/Partial (HL light reactions, Calvin cycle new) | 4 | 2 |
| C2.1 Chemical signalling (HL) | BY fa2-v28 | Partial | 0 | 2 |
| C2.2 Neural signalling | none useful | New | 0 | 3 |
| C3.1 Integration of body systems | BY fa2-v16, v26, bio-m8-b01 | Partial (reflex arcs, tropisms new) | 2 | 2 |
| C3.2 Defence against disease | bio-m7-b03, b06 to b09, b11 | Edits (swap Australian cases; add HIV, zoonoses data) | 5 | 1 |
| C4.1 Populations and communities | BY fa3-v26 to v31 | Edits (chi-squared test new) | 6 | 1 |
| C4.2 Transfers of energy and matter | none | New | 0 | 2 |
| D1.1 DNA replication | bio-m5-b04, BY fa1-v23, v24, bio-m5-b12 (PCR, gels) | Edits | 2 | 1 |
| D1.2 Protein synthesis | bio-m5-b06b, b06c | Edits | 2 | 0 |
| D1.3 Mutation and gene editing | bio-m6-b01 to b05 | Edits (CRISPR new) | 4 | 1 |
| D2.1 Cell and nuclear division | BY fa1-v26 to v31, bio-m5-b05a, b05b, bio-m8-b09 | Edits (merge Year 11 and Year 12 duplicates) | 5 | 0 |
| D2.2 Gene expression (HL) | bio-m5-b07 | Partial | 0 | 2 |
| D2.3 Water potential | BY fa1-v11, bio-m8-b05 | Partial (IB water potential in kPa) | 1 | 1 |
| D3.1 Reproduction | bio-m5-b01, b02a, b02b, b03a, b03a2 | Edits (IVF and hormone detail) | 4 | 1 |
| D3.2 Inheritance | bio-m5-b08, b09, b10 | Edits (HL chi-squared, polygenic) | 3 | 1 |
| D3.3 Homeostasis | bio-m8-b01 to b04, BY fa2-v23, v24, v27, v29, v32 | Edits (merge duplicates) | 5 | 0 |
| D4.1 Natural selection | BY fa3-v01, v02, v03, v07, v18, bio-m5-b11 (Hardy-Weinberg) | Edits | 4 | 0 |
| D4.2 Stability and change | BY fa3-v23 to v25, v32 | Partial | 1 | 2 |
| D4.3 Climate change | none | New | 0 | 2 |
| **Total** | | | **90** | **52** |

Of the 90, about 28 come from built and released Year 12 lessons. About 62 come from Year 11 2025 designs that are not yet built.

HSC Biology content with no IB home: most of bio-m6 biotechnology evaluation (b09 to b13, b19, b20), bio-m7 Australian and Aboriginal case studies (b05, b13 to b15), bio-m8 epidemiology and assistive technology (b10 to b17).

### 1b. IB Chemistry

Abbreviations: `CY` = `chem-y11-` (M1 V01 to V17, V21, M2 V01 to V04, V06, WS V01 to V03 built; the rest design-only). `chem-m5..m8` = Year 12, built and released.

| IB topic | HSC sources | Grade | From HSC | New |
| --- | --- | --- | --- | --- |
| S1.1 Introduction to the particulate nature of matter | CY m1-v01 to v05 | Edits (units, practical names) | 5 | 0 |
| S1.2 The nuclear atom | CY m1-v08, v09, chem-m8-c09 (mass spectrum) | Edits | 3 | 0 |
| S1.3 Electron configurations | CY m1-v10, v11, v14 | Edits (HL successive ionisation energies, convergence) | 3 | 1 |
| S1.4 Counting particles by mass: the mole | CY m2-v02, v03, v05, v10 to v13 | Edits (mol dm⁻³ for mol L⁻¹) | 6 | 0 |
| S1.5 Ideal gases | CY m2-v16 to v20 | Edits (IB molar volume 22.7 dm³ mol⁻¹ at STP; HSC uses 24.79 L at 25 °C) | 5 | 0 |
| S2.1 The ionic model | CY m1-v19, v20, v22 | Edits | 3 | 0 |
| S2.2 The covalent model | CY m1-v21, v23, v25 to v27, v05 (chromatography) | Edits/Partial (HL resonance, formal charge, hybridisation, sigma and pi new) | 5 | 3 |
| S2.3 The metallic model | CY m1-v24 | Edits | 1 | 0 |
| S2.4 From models to materials | chem-m7-c14, c15 (polymers) | Partial (bonding triangle, alloys new) | 2 | 1 |
| S3.1 The periodic table: classification of elements | CY m1-v12 to v15, chem-m8-c03a | Edits (HL transition element colour new) | 4 | 1 |
| S3.2 Functional groups: classification of organic compounds | chem-m7-c01, c02, c05, c08b, c09 to c11, chem-m8-c09 to c12 (MS, IR, NMR) | Edits (HL stereoisomers new) | 9 | 2 |
| R1.1 Measuring enthalpy changes | CY m4-v01 to v03, chem-m6-c03 | Edits | 3 | 0 |
| R1.2 Energy cycles in reactions | CY m4-v06 to v09 | Edits (HL Born-Haber new) | 4 | 1 |
| R1.3 Energy from fuels | chem-m7-c07, chem-m7-p03, CY m3-v04 | Edits (fuel cells new) | 2 | 1 |
| R1.4 Entropy and spontaneity (HL) | CY m4-v11 to v14 | Edits | 4 | 0 |
| R2.1 How much? The amount of chemical change | CY m2-v01, v06 to v08, v14, v15 | Edits (atom economy, yield) | 5 | 1 |
| R2.2 How fast? The rate of chemical change | CY m3-v13 to v15, m4-v05 | Partial (HL rate equations, orders, Arrhenius, mechanisms new) | 3 | 3 |
| R2.3 How far? The extent of chemical change | chem-m5-c01 to c09 | Edits (HL ΔG and K link new) | 8 | 1 |
| R3.1 Proton transfer reactions | chem-m6-c01 to c16 (drop c04 local context) | Edits | 12 | 0 |
| R3.2 Electron transfer reactions | CY m3-v07 to v12 | Edits/Partial (electrolysis, HL electroplating new) | 5 | 2 |
| R3.3 Electron sharing reactions | chem-m7-c04b | Edits | 1 | 0 |
| R3.4 Electron-pair sharing reactions | chem-m7-c04a | Partial (curly-arrow mechanisms, SN1 and SN2 are new; HSC does not teach mechanisms) | 1 | 4 |
| Tools and inquiry (IA) | CY ws-v01 to v07 | Edits (IB IA criteria) | 3 | 1 |
| **Total** | | | **97** | **22** |

Of the 97, about 58 come from built lessons (about 37 Year 12, about 21 Year 11). About 39 are design-only.

Also needed: about 8 IB-style practice videos. The HSC g-series layouts carry over, but every question must be rewritten to IB command terms and paper styles (Partial).

HSC Chemistry content with no IB home: Ksp and precipitation (chem-m5-c13 to c15), most of chem-m8 inorganic analysis and water quality (c01 to c06), soaps (chem-m7-c12), food detoxification (chem-m5-c12, CY m3-v06). Ksp is useful for AP.

### 1c. IB Physics

Abbreviations: `PY` = `phys-y11-` (2025 designs, not built). `PZ` = `phys-y12-` (built, not yet released).

| IB topic | HSC sources | Grade | From HSC | New |
| --- | --- | --- | --- | --- |
| A.1 Kinematics | PY fa1-v01 to v11, PZ m5-v01 to v08 (projectiles) | Edits (merge; same suvat notation) | 12 | 0 |
| A.2 Forces and momentum | PY fa1-v12 to v24, v29 to v31, PZ m5-v11 to v14 (circular) | Edits (drag, buoyancy new) | 14 | 2 |
| A.3 Work, energy and power | PY fa1-v26 to v28, fa3-v16, PZ m5-v15 | Edits (efficiency, energy density) | 4 | 1 |
| A.4 Rigid body mechanics (HL) | PZ m5-v09, v10 (torque) | Partial (moment of inertia, angular momentum new) | 2 | 3 |
| A.5 Galilean and special relativity (HL) | PY fa1-v11, PZ m7-v12 to v16, relativity sim | Edits/Partial (Lorentz transformations, spacetime diagrams new) | 4 | 2 |
| B.1 Thermal energy transfers | PZ m7-v09 (black body), CY m4-v02 (q = mcΔT) | Partial | 1 | 3 |
| B.2 Greenhouse effect | none | New | 0 | 2 |
| B.3 Gas laws | CY m2-v16 to v19, particle box sim | Edits (physics framing, pV = NkT) | 2 | 1 |
| B.4 Thermodynamics (HL) | CY m4-v11 (entropy, concept only) | New | 0 | 3 |
| B.5 Current and circuits | PY fa3-v10 to v23, circuits sim | Edits (emf, internal resistance, resistivity) | 10 | 1 |
| C.1 Simple harmonic motion | none | New | 0 | 3 |
| C.2 Wave model | PY fa2-v01 to v12, waves sim | Edits | 7 | 0 |
| C.3 Wave phenomena | PY fa2-v18 to v24, v27 to v30, PZ m7-v05 to v07 | Edits (single-slit detail) | 9 | 1 |
| C.4 Standing waves and resonance | PY fa2-v31, v32 | Edits (pipes, damping new) | 2 | 1 |
| C.5 Doppler effect | PY fa2-v33, PZ m7-v04 | Edits | 2 | 0 |
| D.1 Gravitational fields | PZ m5-v17 to v23 | Re-voice (after a scan for local examples) | 7 | 0 |
| D.2 Electric and magnetic fields | PY fa3-v01 to v09, v24 to v28, PZ m6-v01 to v03 | Edits (HL potential, equipotentials) | 10 | 1 |
| D.3 Motion in electromagnetic fields | PZ m6-v01 to v08, field-motion sim | Re-voice | 6 | 0 |
| D.4 Induction (HL) | PZ m6-v09 to v13, v18, v20, induction sim | Edits (check whether transformers are in scope) | 5 | 0 |
| E.1 Structure of the atom | PZ m8-v07 to v11, m7-v03 | Re-voice | 5 | 0 |
| E.2 Quantum physics (HL) | PZ m7-v10, v11, m8-v12, photoelectric sim | Edits (Compton new) | 3 | 1 |
| E.3 Radioactive decay | PZ m8-v14 to v16, CY m1-v17, v18 | Edits (HL decay constant) | 4 | 1 |
| E.4 Fission | PZ m8-v18 | Edits | 1 | 1 |
| E.5 Fusion and stars | PZ m8-v03 to v06, v19 | Edits (parallax, luminosity equation) | 5 | 1 |
| Tools and inquiry (IA) | PY fa0-v01 to v07 | Edits (IB IA criteria) | 3 | 1 |
| **Total** | | | **118** | **29** |

Of the 118, about 56 come from built Year 12 lessons. About 62 are Year 11 2025 designs not yet built. A 118-video IB Physics course is more granular than IB needs; merging could bring it to about 90 without losing content.

HSC Physics content with no IB home: AC induction motors and DC motor detail (PZ m6-v16, v17, v19), Standard Model and accelerators beyond IB depth (PZ m8-v20 to v22), Aboriginal inclined planes (PY fa1-v25).

---

## 2. UK A-level and US AP (brief)

Sources (specification home pages; not fetched in this session, so verify current links):
- AQA Biology 7402: https://www.aqa.org.uk/subjects/biology/as-and-a-level/biology-7401-7402/specification
- AQA Chemistry 7405: https://www.aqa.org.uk/subjects/chemistry/as-and-a-level/chemistry-7404-7405/specification
- AQA Physics 7408: https://www.aqa.org.uk/subjects/physics/as-and-a-level/physics-7407-7408/specification
- OCR Biology A H420: https://www.ocr.org.uk/qualifications/as-and-a-level/biology-a-h020-h420-from-2015/
- OCR Chemistry A H432: https://www.ocr.org.uk/qualifications/as-and-a-level/chemistry-a-h032-h432-from-2015/
- OCR Physics A H556: https://www.ocr.org.uk/qualifications/as-and-a-level/physics-a-h156-h556-from-2015/
- AP (unit lists confirmed from these pages today): https://apcentral.collegeboard.org/courses/ap-biology/course , https://apcentral.collegeboard.org/courses/ap-chemistry/course , https://apcentral.collegeboard.org/courses/ap-physics-1/course , https://apcentral.collegeboard.org/courses/ap-physics-2/course , https://apcentral.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism/course and the Physics C: Mechanics page in the same pattern.

### 2a. AQA A-level

| Course | Section | Main HSC sources | Grade |
| --- | --- | --- | --- |
| Biology | 1 Biological molecules | enzymes BY fa1-v18 to v21; DNA BY fa1-v22 | Partial (water, carbohydrates, lipids, ATP new) |
| | 2 Cells | BY fa1-v01 to v14, v27, v28; immunity bio-m7-b06 to b09 | Edits |
| | 3 Exchange with the environment | BY fa2-v02, v09 to v12, v17 to v22 | Edits (fish and insect gas exchange, haemoglobin curves new) |
| | 4 Genetic information and variation | bio-m5-b04 to b06c, b05b, bio-m6-b01 to b05, BY fa3 | Edits (biodiversity index new) |
| | 5 Energy transfers | BY fa1-v16, v17, fa2-v05 to v08 | Partial (detailed respiration, photosynthesis, nutrient cycles new) |
| | 6 Responses | bio-m8-b01 to b05, BY fa2-v24, v29 | Partial (nervous system, muscle, tropisms new) |
| | 7 Genetics, populations, evolution, ecosystems | bio-m5-b09 to b11, BY fa3-v26 to v31 | Edits (epistasis, chi-squared new) |
| | 8 Control of gene expression | bio-m6-b18, bio-m5-b12 | Partial (regulation, epigenetics new) |
| Chemistry | Physical 3.1.1 to 3.1.12 | CY m1, m2, m4, chem-m5, chem-m6, CY m3-v11, v12 | Edits (Kp, Born-Haber, rate equations new) |
| | Inorganic 3.2.1 to 3.2.6 | CY m1-v12 to v15, chem-m8-c03a, c03b | Partial (Group 2, Group 7, Period 3, transition metals mostly new) |
| | Organic 3.3.1 to 3.3.16 | chem-m7 (all), chem-m8-c09 to c12 | Edits/Partial (mechanisms, optical isomerism, aromatic chemistry new) |
| Physics | 1 Measurements and errors | PY fa0-v04, v05 | Edits |
| | 2 Particles and radiation | PZ m8-v20, v21, m7-v10, v11, m8-v11 | Edits |
| | 3 Waves | PY fa2, PZ m7-v05 to v08 | Edits |
| | 4 Mechanics and materials | PY fa1, PZ m5-v01 to v10 | Edits (materials: Hooke's law, Young modulus new) |
| | 5 Electricity | PY fa3-v10 to v23 | Edits |
| | 6 Further mechanics and thermal | PZ m5-v11 to v15 | Partial (SHM, thermal physics new) |
| | 7 Fields | PZ m5-v17 to v23, m6, PY fa3 | Edits (capacitors new) |
| | 8 Nuclear | PZ m8-v08, v14 to v19 | Edits |
| | Options: Astrophysics, Turning points | PZ m8-v01 to v06, PZ m7, m8-v07 | Edits (Turning points is a strong fit) |

### 2b. OCR A A-level

| Course | Module | Grade |
| --- | --- | --- |
| Biology A | 2 Foundations | Edits/Partial (molecules new) |
| | 3 Exchange and transport | Edits |
| | 4 Biodiversity, evolution and disease | Edits (bio-m7 disease set fits well) |
| | 5 Communication, homeostasis and energy | Partial |
| | 6 Genetics, evolution and ecosystems | Edits (cloning and biotech, bio-m6-b16, b18, fit well) |
| Chemistry A | 2 Foundations | Edits |
| | 3 Periodic table and energy | Edits/Partial (Group 2, halogens new) |
| | 4 Core organic | Edits/Partial (mechanisms new) |
| | 5 Physical chemistry and transition elements | Edits/Partial |
| | 6 Organic chemistry and analysis | Edits (spectroscopy chem-m8-c09 to c12 fits) |
| Physics A | 2 Foundations, 3 Forces and motion | Edits (materials new) |
| | 4 Electrons, waves and photons | Edits |
| | 5 Newtonian world and astrophysics | Partial (thermal, SHM new) |
| | 6 Particles and medical physics | Partial (capacitors, medical imaging new) |

Required practicals (AQA RP 1 to 12, OCR PAG) need renamed practical videos. Titration, calorimetry, chromatography, colorimetry, potometer, enzyme rate and incline practicals carry over with edits.

### 2c. AP

| Course | Unit | Grade |
| --- | --- | --- |
| AP Biology | 1 Chemistry of Life | New/Partial |
| | 2 Cells | Edits |
| | 3 Cellular Energetics | Edits (enzymes) / Partial (respiration, photosynthesis) |
| | 4 Cell Communication and Cell Cycle | Partial (signal transduction new) |
| | 5 Heredity | Edits |
| | 6 Gene Expression and Regulation | Edits (biotech) / Partial (operons new) |
| | 7 Natural Selection | Edits |
| | 8 Ecology | Edits/Partial (energy flow new) |
| AP Chemistry | 1 Atomic Structure and Properties | Edits (photoelectron spectroscopy new) |
| | 2 Compound Structure and Properties | Edits |
| | 3 Properties of Substances and Mixtures | Edits (gases in atm; Beer-Lambert from chem-m8-c04) |
| | 4 Chemical Reactions | Edits |
| | 5 Kinetics | New (rate laws, mechanisms) |
| | 6 Thermochemistry | Edits |
| | 7 Equilibrium | Edits (Ksp from chem-m5-c14, c15 fits well; Kp new) |
| | 8 Acids and Bases | Edits (strong fit) |
| | 9 Thermodynamics and Electrochemistry | Edits/Partial (ΔG = -nFE, electrolysis new) |
| AP Physics 1 | 1 Kinematics, 2 Force and Translational Dynamics, 3 Work, Energy, and Power, 4 Linear Momentum | Edits |
| | 5 Torque and Rotational Dynamics | Partial |
| | 6 Energy and Momentum of Rotating Systems, 7 Oscillations, 8 Fluids | New |
| AP Physics 2 | 9 Thermodynamics | New/Partial |
| | 10 Electric Force, Field, and Potential, 11 Electric Circuits, 12 Magnetism and Electromagnetism | Edits (capacitors new; 120 V mains) |
| | 13 Geometric Optics | Partial (mirror and lens ray diagrams) |
| | 14 Waves, Sound, and Physical Optics, 15 Modern Physics | Edits |
| AP Physics C | Mechanics (units 1 to 7) and E&M (units 8 to 13) | Partial/New: calculus-based derivations, Gauss's law, capacitors and inductance are not in HSC. Concept scenes and sims carry over. |

---

## 3. Totals per course

IB counts are from the tables above. A-level and AP counts are rougher (unit-level judgement, plus or minus 20%).

| Course | Videos mostly from HSC | Of those, from built lessons | New design needed | Approx. total |
| --- | --- | --- | --- | --- |
| IB Biology | 90 | about 28 | 52 | about 142 |
| IB Chemistry | 97 | about 58 | 22 (+ about 8 practice) | about 127 |
| IB Physics | 118 (about 90 after merging) | about 56 | 29 | about 120 to 147 |
| AQA Biology | about 70 | about 25 | about 45 | about 115 |
| OCR A Biology | about 70 | about 28 | about 45 | about 115 |
| AQA Chemistry | about 75 | about 50 | about 35 | about 110 |
| OCR A Chemistry | about 75 | about 50 | about 35 | about 110 |
| AQA Physics | about 85 | about 50 | about 35 | about 120 |
| OCR A Physics | about 85 | about 50 | about 35 | about 120 |
| AP Biology | about 65 | about 25 | about 35 | about 100 |
| AP Chemistry | about 70 | about 50 | about 25 | about 95 |
| AP Physics 1 | about 45 | about 15 | about 25 | about 70 |
| AP Physics 2 | about 50 | about 30 | about 15 | about 65 |
| AP Physics C (both) | about 15 | about 10 | about 40 | about 55 |

Across courses, one localised master can serve several markets. For example, one IB acids video in British spelling and mol dm⁻³ also serves AQA and OCR with only a new end slate and a practical rename.

---

## 4. Australia-specific content to strip or replace

Counts below are from a text search of built science lessons in `src/explainer/lessons/` (about 290 folders). Design-only lessons need the same scan before build.

| Item | Where found | Action |
| --- | --- | --- |
| "HSC-style questions, written for HSCScience" cards and other HSC or HSCScience text | about 120 built lessons | Global swap to a market-neutral or market brand card. One shared component change if the text is centralised; otherwise a scripted replace. |
| NESA or NSW references | 10 lessons each | Remove or replace with the exam board. |
| "Australia" or Australian places (Sydney, Melbourne, Queensland) | 32 and 11 lessons | Replace with neutral or market examples when the example carries the explanation; keep when the organism or place is the actual case study and the board allows a free choice. |
| Australian organisms (Banksia and *Phytophthora*, kangaroo, eucalypt and similar) | 7 built lessons, plus BY fa3-v05, v06, v11, v13 designs | Keep where IB or AP lets the teacher choose the example; otherwise swap. Repaint plates only where needed. |
| Aboriginal and Torres Strait Islander content (bio-m7-b05, b15, chem-m5-c12, CY m3-v06, BY fa3-v05, v16, PY fa1-v25) | about 9 sources | Drop from international playlists. It stays in HSC unchanged. Do not reuse the content in other contexts. |
| SunSmart, Medicare, PBS | 3 and 4 lessons | Replace with neutral public-health wording. |
| 230 V mains | 4 built lessons (transformers, transmission) | Keep for IB and UK (UK is 230 V, 50 Hz). Change to 120 V, 60 Hz for AP. |
| NSW practical names and HSC exam framing (Year 11/12, "the HSC", module numbers) | throughout narration | Rewrite in the localisation script pass. IB uses Year 1/Year 2, SL/HL; UK uses AS/A2 or Year 12/13; AP uses unit numbers. |
| Syllabus dotpoint quotes | YouTube descriptions (per the description rule), not on screen | Replace with the board's topic code and a short summary. Do not quote IB guide text verbatim beyond short references; check each board's copyright terms. |
| Dollar amounts | appear in many lessons (mostly maths-style money contexts) | Check physics and chemistry hits; convert to the market currency or a unitless example. |
| Australian voices | all narration | All international videos get a new Kokoro track and a new alignment, so narration text can be localised freely without breaking the HSC audio. |

### Spelling and units policy per market

| Item | IB | UK A-level | AP (US) |
| --- | --- | --- | --- |
| Spelling | British with IB house style ("colour", but the guide spells "specialization", "compartmentalization"). Recommend British spelling with -ize where IB topic titles use it. | British -ise (AQA, OCR) | US spelling: color, center, liter, aluminum, fiber |
| Sulfur | sulfur | sulfur | sulfur |
| Concentration | mol dm⁻³ | mol dm⁻³ | M (mol/L) |
| Volume | dm³, cm³ | dm³, cm³ | L, mL |
| Gas molar volume | 22.7 dm³ mol⁻¹ at STP (273 K, 100 kPa) | 24 dm³ at room conditions as given by the board | 22.4 L at STP (273 K, 1 atm); pressure often in atm and mmHg |
| Index notation | m s⁻² style | m s⁻² style | m/s² style |
| Physics symbols | IB data booklet (s, u, v, a, t; ε for emf; Φ for flux) | Board data sheet (AQA, OCR) | AP equation sheet (Δx, v₀, ΔU) |
| g | 9.8 m s⁻² (data booklet value; check) | 9.81 m s⁻² | 9.8 m/s² (10 accepted in AP Physics 1) |
| Mains | neutral, or 230 V | 230 V, 50 Hz | 120 V, 60 Hz |
| Voice | Kokoro British (recommended; owner to confirm) | Kokoro British | Kokoro American |
| Spoken letters | "zed" | "zed" | "zee" |

Put these rules in one market profile per course (a data file, not per-lesson edits), so the localisation pass is repeatable and checkable.

---

## 5. Recommended first course and phased plan

### Recommendation: IB Chemistry (SL core first, then HL)

Why:
- **Most built reuse.** About 58 of its 97 HSC-sourced videos already exist as built lessons. Year 12 HSC Chemistry is finished and released, so IB work does not compete with an open HSC build. Each further HSC Year 11 Chemistry build (an HSC priority anyway) also feeds IB.
- **Best market fit.** IB is taught in English worldwide, students pay for help, and the owner already has an IB site project (`C:\Users\kygs\IB-Science`, one lesson so far). IB Chemistry is one of the most taken IB sciences.
- **Small new design load.** About 22 new videos, mostly HL (mechanisms, kinetics, Born-Haber, hybridisation).
- **The same masters serve UK next.** IB and A-level share mol dm⁻³ and British spelling, so AQA and OCR Chemistry can follow at low cost.

Runner-up: IB Physics. The Year 12 HSC Physics lessons are built and the sims are course-neutral, but those lessons are not yet released for HSC, and Year 11 Physics is design-only. Wait until HSC Physics ships.

### Phased plan

HSC stays first. The 8 GB PC renders one video at a time, so international renders run only in render slots that HSC does not need.

| Phase | Work | Renders |
| --- | --- | --- |
| 0. Decisions (now) | Owner answers section 6. Write the market profile files (IB, UK, AP) and a localisation checklist. Test Kokoro on CPU with one script and work out word-level alignment (forced alignment) for cue timing. | none |
| 1. Pilot (3 videos) | IB Chemistry from built lessons: R3.1 strong acid pH (chem-m6-c07), R2.3 disturbing equilibrium (chem-m5-c03), S1.4 the mole (CY m2-v02). Measure hours per localised video and render time. Student learning review on the localised scripts. | 3 |
| 2. IB Chemistry from built lessons | About 55 more localised videos, in IB topic order. Batch localisation passes; one render at a time in spare slots. | about 55 |
| 3. IB Chemistry remainder | Design-only sources as HSC Year 11 Chemistry builds land; about 22 new HL designs; about 8 IB-style practice sets. | about 69 |
| 4. UK Chemistry | AQA and OCR end slates, practical renames, about 35 new (inorganic, mechanisms). | about 110 |
| 5. IB Physics, then IB Biology | After HSC Year 12 Physics is released and HSC Year 11 Physics and Biology builds exist. | later |
| 6. AP | Needs US spelling, M and atm units and American voice: a separate master set. Start with AP Chemistry (Ksp, acids and equilibrium fit well). | later |

Timing depends on the pilot's measured render time. If one render takes several hours, about 120 IB Chemistry videos is a long run of spare slots, so phase 2 should be scheduled around HSC renders, not before them.

---

## 6. Open questions for the owner

1. **Channel and brand:** a separate YouTube channel and brand name for international videos, or a playlist on the HSCScience channel?
2. **Board names and trademarks:** IB, AP, AQA and OCR are trademarks. Use "for IB Diploma Chemistry" wording with a "not affiliated" line? (Recommend yes; confirm your preferred wording.)
3. **Pricing:** same A$5 per week membership on Bunny, a separate international tier, or a different currency?
4. **IB voice:** British or American Kokoro voice for IB?
5. **Website:** host IB videos on the IB-Science site, on hscscience.com.au, or both?
6. **Scope:** HL content from the start, or SL core first?
7. **Order:** confirm IB Chemistry first, or prefer another course for market reasons you know about.
