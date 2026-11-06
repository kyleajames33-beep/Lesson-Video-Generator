# chem-y11-m1-v07: How does a chemical formula determine percentage composition by mass?

Brief 167 research pack, 5 November 2026. Source preparation for Claude, not a design, narration, build or approval. Uses Chemistry Stage 6 (2017), Year 11. Candidate questions are original HSC-style questions for this Year 11 content; marks are not an official scheme.

## 1. Exact syllabus and entry knowledge

- `C1-IQ1-01`: explore homogeneous mixtures and heterogeneous mixtures through practical investigations:
  - using separation techniques based on physical properties (ACSCH026)
  - calculating percentage composition by weight of component elements and/or compounds (ACSCH007)

These are local ledger IDs, not official codenames. Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx

Entry: Stage 5 particle model, physical versus chemical change, simple formulae, proportions and safe practical work. Recall only the earlier videos named in prerequisites.

Start: Begin with the concrete case named in the question and recall the needed earlier idea.

Stop: Count all atoms or hydrate waters, add the given relative masses, and divide the selected contribution by total formula mass. Use CO2, NH4NO3 and CuSO4.5H2O site values exactly. Stop before empirical formulae.

Next: How does nuclide notation tell us the particles in an atom or ion?

## 2. Read-only site sources and worked examples

- `module1/lesson05.sa.html`, SHA256 `c8b8b3adf2bc76e424505bb6e88bafecc0cd7fa9784e57dd9400175521a4222d`. Section IDs: `l05-percentage-composition-by-mass-title`.

### Site percentage walkthroughs

4 Percentage Composition by Mass 07 Percentage Composition by Mass core concept We just saw how to choose between separation techniques. That raises a question: once you already know a compound's formula, how do you work out what fraction of its mass comes from a single element, without doing any separation at all? This card answers it → percentage composition by mass, a formula-based calculation required by the syllabus dot point on calculating percentage composition by weight of component elements and/or compounds (CH11/12-2). Percentage composition by mass tells you what proportion of a compound's total mass is contributed by one element. Unlike gravimetric analysis, no experiment is required, only the compound's formula and the atomic masses of its elements. Formula: % composition of element X = (mass of X in the formula ÷ molar mass of the whole compound) × 100 Worked walkthroughs 1. Oxygen in carbon dioxide (CO₂): M(CO₂) = 12.0 + (2 × 16.0) = 44.0 g mol⁻¹. Mass from oxygen = 2 × 16.0 = 32.0 g mol⁻¹. % O = (32.0 ÷ 44.0) × 100 = 72.7%. 2. Nitrogen in ammonium nitrate (NH₄NO₃): M(NH₄NO₃) = 14.0 + (4 × 1.0) + 14.0 + (3 × 16.0) = 80.0 g mol⁻¹. There are two nitrogen atoms in the formula (one in NH₄⁺, one in NO₃⁻), so mass from N = 2 × 14.0 = 28.0 g mol⁻¹. % N = (28.0 ÷ 80.0) × 100 = 35.0%. 3. Water of crystallisation in a hydrate, copper(II) sulfate pentahydrate (CuSO₄·5H₂O): M(CuSO₄·5H₂O) = 63.5 + 32.1 + (4 × 16.0) + 5 × (2 × 1.0 + 16.0) = 63.5 + 32.1 + 64.0 + 90.0 = 249.6 g mol⁻¹. Mass from water = 90.0 g mol⁻¹. % H₂O = (90.0 ÷ 249.6) × 100 = 36.1%. This is why heating a hydrate to drive off its water of crystallisation causes a measurable mass loss, exactly this percentage. Common trap: Always count every atom of the element in the formula, not just one. In NH₄NO₃ it is easy to only count the N in the nitrate ion and miss the N in the ammonium ion, this is the single most common error in percentage composition questions. Percentage composition by mass = (mass of element in formula ÷ molar mass of compound) × 100. Count every atom of the element in the formula (e.g. NH₄NO₃ has 2 N atoms, not 1). For hydrates, "% water of crystallisation" uses the same formula with the water's total mass as the numerator (e.g. CuSO₄·5H₂O is 36.1% water by mass). Pause, copy the highlighted percentage composition formula and the three worked examples into your book. Quick check: what percentage of the mass of magnesium oxide (MgO, M = 40.3 g mol⁻¹) comes from oxygen? [M(O) = 16.0 g mol⁻¹] 16.0% 39.7% 60.3% 2.52%

## 3. Independent recalculation and source limits

- CO2: 12.0+2(16.0)=44.0; oxygen fraction=32.0/44.0=72.727...%, 72.7%.
- NH4NO3: 14.0+4(1.0)+14.0+3(16.0)=80.0; nitrogen contribution=28.0, so 35.0%.
- CuSO4.5H2O: 63.5+32.1+64.0+90.0=249.6; water percentage=90.0/249.6 times 100=36.0577...%, 36.1%. MgO check: 16.0/40.3 times 100=39.702...%, 39.7%.
- Use given relative masses and atom/formula counts. Do not require the mole concept to understand the fraction; the later molar-mass lesson explains g/mol.

All listed arithmetic and the two original questions were checked in `work/brief167/first-ten-calculations.json`. Non-numerical classifications were checked against particle identity, phase and conservation; a numeric recalculation cannot validate a claimed empirical observation.

## 4. Misconceptions and traps

Count both nitrogen atoms in NH4NO3 and all five water units in the hydrate. Formula subscripts are not mass percentages.

Sources: the exact site sections above; NESA action wording. Relevant primary checks: [NIST isotope data](https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses), [University of Wisconsin chromatography interpretation](https://www2.chem.wisc.edu/deptfiles/genchem/lab/labdocs/modules/tlc/tlcinterp.htm), [RSC flame-test teacher notes](https://edu.rsc.org/download?ac=511946). These are checks of the relevant mechanisms, not claims about how often students make an error.

## 5. Visual and memory needs

Code a formula with grouped atom counts, the relative-mass contributions and one current ratio. Keep formula, selected element and supplied reference masses visible. The hydrate water group must remain a separate group in the denominator.

Existing apparatus contact sheet inspected: `work/brief167/asset-contact.png`. Candidate filenames are reuse proposals, not final practical or playback approval. Particle diagrams, formulae, graphs, measurement lines and calculation rows stay coded.

Memory-bank check: Module 5 to 8 banks are drafts for later Chemistry content. No equilibrium or acid-base aid is needed here. For v10, Module 8's explanation that heat raises electron energy and a fall emits a photon is directly relevant; keep the exact atomic/ionic mechanism checked for the chosen flame. No mnemonic quota.

## 6. Two original candidate questions

### Question 1

Using Ca=40.0, C=12.0 and O=16.0, calculate the percentage by mass of carbon in CaCO3.

**Worked answer:** Total relative formula mass=40.0+12.0+48.0=100.0. Carbon percentage=12.0/100.0 times 100=12.0%.

### Question 2

Using Mg=24.3, S=32.1, O=16.0 and H=1.0, calculate the water mass percentage in MgSO4.7H2O.

**Worked answer:** Anhydrous contribution=24.3+32.1+64.0=120.4; seven waters=7(18.0)=126.0; total=246.4. Water percentage=126.0/246.4 times 100=51.136...%, 51.1%.

## 7. Site corrections and decisions

See `../../site-corrections-chem-y11.md`. Preserve the original givens when correcting a method or explanation. The website was read only. The route boundary excludes the later examples explicitly deferred above. Resolve the logged source errors, school method and cultural decisions before designing or recording. Listening and playback remain later gates.
