# chem-y11-m1-v04: Why does a fractionating column improve liquid separation?

Brief 167 research pack, 5 November 2026. Source preparation for Claude, not a design, narration, build or approval. Uses Chemistry Stage 6 (2017), Year 11. Candidate questions are original HSC-style questions for this Year 11 content; marks are not an official scheme.

## 1. Exact syllabus and entry knowledge

- `C1-IQ1-01`: explore homogeneous mixtures and heterogeneous mixtures through practical investigations:
  - using separation techniques based on physical properties (ACSCH026)
  - calculating percentage composition by weight of component elements and/or compounds (ACSCH007)

These are local ledger IDs, not official codenames. Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx

Entry: Stage 5 particle model, physical versus chemical change, simple formulae, proportions and safe practical work. Recall only the earlier videos named in prerequisites.

Start: Begin with the concrete case named in the question and recall the needed earlier idea.

Stop: Compare simple with fractional distillation; follow vaporisation, enrichment and condensation. Keep the ethanol/water azeotrope limitation; do not promise pure ethanol.

Next: Why do mixture components travel different distances in chromatography?

## 2. Read-only site sources and worked examples

- `module1/lesson04.sa.html`, SHA256 `2a97d7f9b066e10dce979bf05797b6bf600f73547e5db21cb776f8a13b479f08`. Section IDs: `l04-distillation-title`, `l04-choosing-the-right-technique-title`, `l04-worked-examples-title`.

### Site example `we-chem-y11-m1-l04-1`

Source transcription below, including any error flagged in section 3 or the corrections log. Numbers are unchanged.

Scenario A: Separating pure water from sea water. Scenario B: Separating ethanol (BP 78 °C) from an ethanol/water mixture. Determine which distillation method is appropriate for each and explain why.

1 Scenario A, Identify the components Sea water: water (BP 100 °C) + dissolved salts (non-volatile, no defined BP) Since one component is a non-volatile solid that doesn't boil, they have an enormous BP difference.
2 Scenario A, Choose technique Use: Simple distillation Large BP difference (salt effectively infinite) means only one evaporation–condensation cycle is needed. Pure water vaporises; salt remains in the flask.
3 Scenario B, Identify the components Ethanol (BP 78 °C) and water (BP 100 °C): BP difference = only 22 °C Both are volatile liquids with similar boiling points, they will partially vaporise at the same temperature range.
4 Scenario B, Choose technique Use: Fractional distillation with a fractionating column The fractionating column provides multiple successive vaporisation–condensation cycles. Vapour climbing the column gradually becomes enriched in ethanol (lower BP), so the vapour reaching the condenser is enriched in ethanol. Because ethanol and water form an azeotrope (~95.6% ethanol), ordinary fractional distillation reaches only about 95% ethanol, not pure (anhydrous) ethanol, this is partial separation by enrichment, not complete separation. A steady boiling temperature (a flat plateau) shows the distillate is boiling at a constant composition, but on its own it does not prove the distillate is a pure substance: an azeotrope such as 95.6% ethanol also boils at a single constant temperature, so a purity claim needs composition evidence, not just a stable thermometer reading.
5 Conclusion Scenario A: simple distillation (non-volatile solute, massive BP difference) Scenario B: fractional distillation (two volatile liquids, close BPs; fractionating column essential) The key difference is whether the BP difference is large enough for a single cycle (simple) or requires multiple cycles (fractional).

## 3. Independent recalculation and source limits

- 100 minus 78 = 22 degrees C for the stated ethanol/water values. These are reference boiling points, not proof that only one component vaporises in a mixture.
- A column repeats vapour-liquid equilibration and enriches the more volatile component. Ordinary ethanol/water fractional distillation cannot produce pure ethanol past the azeotrope. The site acknowledges about 95.6%; do not remove that necessary limitation.
- Salt is non-volatile under the chosen distillation conditions; it does not have an effectively infinite boiling point.

All listed arithmetic and the two original questions were checked in `work/brief167/first-ten-calculations.json`. Non-numerical classifications were checked against particle identity, phase and conservation; a numeric recalculation cannot validate a claimed empirical observation.

## 4. Misconceptions and traps

Do not use a fixed 25-degree cutoff as a universal physical law. Both liquid components can contribute vapour. A constant temperature alone does not establish a pure distillate.

Sources: the exact site sections above; NESA action wording. Relevant primary checks: [NIST isotope data](https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses), [University of Wisconsin chromatography interpretation](https://www2.chem.wisc.edu/deptfiles/genchem/lab/labdocs/modules/tlc/tlcinterp.htm), [RSC flame-test teacher notes](https://edu.rsc.org/download?ac=511946). These are checks of the relevant mechanisms, not claims about how often students make an error.

## 5. Visual and memory needs

The inspected m7-school-distillation-setup-v1.png shows a school apparatus, but confirm an open pressure path and thermometer/condenser placement before practical use; the receiver appears stoppered. The inspected m7-fractional-distillation-column-v1.png is industrial, so it does not fit a school fractionating-column explanation. Request a suitable school column or separate apparatus layers; animate coded liquid/vapour paths.

Existing apparatus contact sheet inspected: `work/brief167/asset-contact.png`. Candidate filenames are reuse proposals, not final practical or playback approval. Particle diagrams, formulae, graphs, measurement lines and calculation rows stay coded.

Memory-bank check: Module 5 to 8 banks are drafts for later Chemistry content. No equilibrium or acid-base aid is needed here. For v10, Module 8's explanation that heat raises electron energy and a fall emits a photon is directly relevant; keep the exact atomic/ionic mechanism checked for the chosen flame. No mnemonic quota.

## 6. Two original candidate questions

### Question 1

A solution contains water and a non-volatile dissolved dye. How can water be collected separately, and why will filtration not do the job?

**Worked answer:** Use simple distillation under an approved method: water vaporises and condenses in a receiver while the non-volatile dye remains. Filtration does not remove dissolved dye.

### Question 2

Two miscible volatile liquids have pure-substance boiling points 68 and 72 degrees C. Explain why a fractionating column may improve separation and whether the boiling points alone guarantee pure fractions.

**Worked answer:** The 4-degree difference suggests substantial co-vaporisation. Repeated equilibration enriches the more volatile component. Those two boiling points alone do not specify the full phase behaviour or guarantee pure fractions.

## 7. Site corrections and decisions

See `../../site-corrections-chem-y11.md`. Preserve the original givens when correcting a method or explanation. The website was read only. The route boundary excludes the later examples explicitly deferred above. Resolve the logged source errors, school method and cultural decisions before designing or recording. Listening and playback remain later gates.
