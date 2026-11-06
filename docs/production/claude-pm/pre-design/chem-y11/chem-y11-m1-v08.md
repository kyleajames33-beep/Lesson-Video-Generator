# chem-y11-m1-v08: How does nuclide notation tell us the particles in an atom or ion?

Brief 167 research pack, 5 November 2026. Source preparation for Claude, not a design, narration, build or approval. Uses Chemistry Stage 6 (2017), Year 11. Candidate questions are original HSC-style questions for this Year 11 content; marks are not an official scheme.

## 1. Exact syllabus and entry knowledge

- `C1-IQ2-01`: investigate the basic structure of stable and unstable isotopes by examining:
  - their position in the periodic table
  - the distribution of electrons, protons and neutrons in the atom
  - representation of the symbol, atomic number and mass number (nucleon number)

These are local ledger IDs, not official codenames. Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx

Entry: Stage 5 particle model, physical versus chemical change, simple formulae, proportions and safe practical work. Recall only the earlier videos named in prerequisites.

Start: Begin with the concrete case named in the question and recall the needed earlier idea.

Stop: Read Z, A and charge; count protons, neutrons and electrons; distinguish isotopes from ions. Introduce stability without teaching decay equations.

Next: Why is relative atomic mass a weighted average?

## 2. Read-only site sources and worked examples

- `module1/lesson13.sa.html`, SHA256 `a9c61816c6508eedc88f5fc90ab38adcb03462dfb255883bbd817f098c0dd3aa`. Section IDs: `l13-subatomic-particles-reference-table-title`, `l13-worked-examples-title`.
- `module1/lesson14.sa.html`, SHA256 `ba2cf87ee8ad7f4ea07c89e48b2928a7f0c907507573bee7c25e307678b8c5cf`. Section IDs: `l14-isotopes-same-element-different-mass-title`, `l14-structural-basis-of-isotope-instability-title`, `l14-worked-examples-title`.

### Site example `we-chem-y11-m1-l13-2`

Source transcription below, including any error flagged in section 3 or the corrections log. Numbers are unchanged.

For the nuclide ⁵⁶₂₆Fe²⁺, determine: (a) atomic number, (b) mass number, (c) number of protons, neutrons, and electrons.

1 Read the nuclide notation Mass number A = 56 (top number = protons + neutrons). Atomic number Z = 26 (bottom number = protons). Charge = 2+ (ion that has lost 2 electrons).
2 Calculate subatomic particles Protons = Z = 26. Neutrons = A − Z = 56 − 26 = 30. Electrons: neutral Fe would have 26 electrons. Fe²⁺ has lost 2 electrons: electrons = 26 − 2 = 24.
3 Check charge Protons (26) − Electrons (24) = +2 ✓ (confirms the 2+ charge)

## 3. Independent recalculation and source limits

- For 56Fe2+ with Z=26: protons=26, neutrons=56-26=30, electrons=26-2=24; charge=26-24=+2.
- An isotope changes neutron count, whereas ionisation changes electrons; the atomic number identifies the element. Stability does not determine whether the sample has an ionic charge.

All listed arithmetic and the two original questions were checked in `work/brief167/first-ten-calculations.json`. Non-numerical classifications were checked against particle identity, phase and conservation; a numeric recalculation cannot validate a claimed empirical observation.

## 4. Misconceptions and traps

Do not subtract charge from neutron number or change Z when an atom loses electrons. A mass number is an integer for a specified nuclide; relative atomic mass is an average.

Sources: the exact site sections above; NESA action wording. Relevant primary checks: [NIST isotope data](https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses), [University of Wisconsin chromatography interpretation](https://www2.chem.wisc.edu/deptfiles/genchem/lab/labdocs/modules/tlc/tlcinterp.htm), [RSC flame-test teacher notes](https://edu.rsc.org/download?ac=511946). These are checks of the relevant mechanisms, not claims about how often students make an error.

## 5. Visual and memory needs

Code a stable nucleus and electrons with separate counters and the nuclide labels anchored to A, Z and charge. This is a model, not a to-scale orbit drawing. Keep proton count fixed as electron count changes.

Existing apparatus contact sheet inspected: `work/brief167/asset-contact.png`. Candidate filenames are reuse proposals, not final practical or playback approval. Particle diagrams, formulae, graphs, measurement lines and calculation rows stay coded.

Memory-bank check: Module 5 to 8 banks are drafts for later Chemistry content. No equilibrium or acid-base aid is needed here. For v10, Module 8's explanation that heat raises electron energy and a fall emits a photon is directly relevant; keep the exact atomic/ionic mechanism checked for the chosen flame. No mnemonic quota.

## 6. Two original candidate questions

### Question 1

For 35Cl- with Z=17, state protons, neutrons and electrons and check its charge.

**Worked answer:** Protons=17; neutrons=35-17=18; electrons=17+1=18. Charge=17-18=-1.

### Question 2

Compare 24Mg2+ and 25Mg2+, both with Z=12. State all particle counts and identify the relationship.

**Worked answer:** Both have 12 protons and 10 electrons. They have 12 and 13 neutrons respectively. They are isotopes of the same element with the same ionic charge.

## 7. Site corrections and decisions

See `../../site-corrections-chem-y11.md`. Preserve the original givens when correcting a method or explanation. The website was read only. The route boundary excludes the later examples explicitly deferred above. Resolve the logged source errors, school method and cultural decisions before designing or recording. Listening and playback remain later gates.
