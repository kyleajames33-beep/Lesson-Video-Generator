# chem-y11-m1-v06: What fraction of a separated mixture came from each component?

Brief 167 research pack, 5 November 2026. Source preparation for Claude, not a design, narration, build or approval. Uses Chemistry Stage 6 (2017), Year 11. Candidate questions are original HSC-style questions for this Year 11 content; marks are not an official scheme.

## 1. Exact syllabus and entry knowledge

- `C1-IQ1-01`: explore homogeneous mixtures and heterogeneous mixtures through practical investigations:
  - using separation techniques based on physical properties (ACSCH026)
  - calculating percentage composition by weight of component elements and/or compounds (ACSCH007)

These are local ledger IDs, not official codenames. Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx

Entry: Stage 5 particle model, physical versus chemical change, simple formulae, proportions and safe practical work. Recall only the earlier videos named in prerequisites.

Start: Begin with the concrete case named in the question and recall the needed earlier idea.

Stop: Calculate recovered component mass percentages and account for recovery/loss. Stop before inferring an ion mass from a precipitate or using mole ratios. Site formula-percentage examples belong to the next video.

Next: How does a chemical formula determine percentage composition by mass?

## 2. Read-only site sources and worked examples

- `module1/lesson03.sa.html`, SHA256 `b9de2bcc1ecf2856b4635cbad03877b4dd6218dd51d5b0b5d7bb38a1e55e423f`. Section IDs: `l03-filtration-title`, `l03-crystallisation-title`, `l03-comparing-separation-techniques-physical-met-title`.
- `module1/lesson05.sa.html`, SHA256 `c8b8b3adf2bc76e424505bb6e88bafecc0cd7fa9784e57dd9400175521a4222d`. Section IDs: `l05-choosing-the-right-separation-technique-title`, `l05-percentage-composition-by-mass-title`.

### Site example `we-chem-y11-m1-l05-2`

Source transcription below, including any error flagged in section 3 or the corrections log. Numbers are unchanged.

A sample of ocean water contains: dissolved NaCl, dissolved MgCl₂, fine sand particles, and traces of oil (which floats on the surface and is immiscible with water). A researcher wants to obtain: (a) clean dry sand, (b) pure NaCl crystals, (c) separate the oil from the water. Recommend and justify a technique for each.

1 (a) Clean dry sand Technique: Filtration Sand is insoluble in water. The key property is particle size. Filtration works because sand particles are large enough to be retained by filter paper, while dissolved NaCl and MgCl₂ pass through in the filtrate.
2 (b) Pure NaCl crystals Technique: Crystallisation First filter to remove sand, then crystallise from the filtrate. NaCl is dissolved, filtration won't work. NaCl's solubility decreases on cooling, so heat the filtrate to concentrate it, cool slowly to crystallise NaCl, then filter crystals and dry. The step to remove sand first is critical, you must have a clean solution before crystallising, or sand will be embedded in the crystals.
3 (c) Separate oil from water Technique: Separating funnel Oil and water form two distinct liquid layers (immiscible and different density). Oil is immiscible with water and less dense (floats). The oil and water form two distinct liquid layers. Use a separating funnel: drain the denser layer (water) out the bottom tap while retaining the less dense layer (oil), or collect the oil from the top. The key property is immiscibility and density difference.

## 3. Independent recalculation and source limits

- The site source example chooses techniques but does not supply a numerical recovered-mixture dataset. Do not invent one and label it as a site example. Use the original questions below as new data.
- The site percentage-composition section calculates from formulas; it does not itself complete the practical component-mass requirement. Keep that source gap explicit.
- The BaSO4 gravimetry example uses 0.466 g, Ba 137.3, S 32.1, O 16.0; M(BaSO4)=233.4 and M(SO4)=96.1, sulfate mass=0.191867... g, 0.192 g. It is deferred until moles/ratios, not silently simplified into this lesson.

All listed arithmetic and the two original questions were checked in `work/brief167/first-ten-calculations.json`. Non-numerical classifications were checked against particle identity, phase and conservation; a numeric recalculation cannot validate a claimed empirical observation.

## 4. Misconceptions and traps

A recovered mass percentage uses the original mixture mass as denominator. Missing mass is not automatically a new component. Selective crystallisation does not guarantee pure NaCl from an arbitrary NaCl/MgCl2 mixture.

Sources: the exact site sections above; NESA action wording. Relevant primary checks: [NIST isotope data](https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses), [University of Wisconsin chromatography interpretation](https://www2.chem.wisc.edu/deptfiles/genchem/lab/labdocs/modules/tlc/tlcinterp.htm), [RSC flame-test teacher notes](https://edu.rsc.org/download?ac=511946). These are checks of the relevant mechanisms, not claims about how often students make an error.

## 5. Visual and memory needs

Use the inspected analytical balance with coded blank-display readings, separate labelled collection vessels and a coded mass accounting bar. Keep original, recovered and unrecovered amounts identifiable.

Existing apparatus contact sheet inspected: `work/brief167/asset-contact.png`. Candidate filenames are reuse proposals, not final practical or playback approval. Particle diagrams, formulae, graphs, measurement lines and calculation rows stay coded.

Memory-bank check: Module 5 to 8 banks are drafts for later Chemistry content. No equilibrium or acid-base aid is needed here. For v10, Module 8's explanation that heat raises electron energy and a fall emits a photon is directly relevant; keep the exact atomic/ionic mechanism checked for the chosen flame. No mnemonic quota.

## 6. Two original candidate questions

### Question 1

A 20.0 g mixture yields 6.0 g dry sand and 14.0 g dry salt under a stated complete-separation model. Calculate each component mass percentage.

**Worked answer:** Sand=6.0/20.0 times 100=30%; salt=14.0/20.0 times 100=70%. They add to 100%, consistent with complete recovery under the stated model.

### Question 2

A 25.0 g sample gives 8.0 g dry insoluble residue and 16.0 g recovered dissolved solid. Calculate each recovered mass as a percentage of the original and the percentage not recovered. Can the missing mass identify a third substance?

**Worked answer:** Residue=32%; recovered dissolved solid=64%; total recovery=96%; missing=4%. Loss alone does not identify a third substance; transfer loss, incomplete crystallisation or residual solution must be investigated.

## 7. Site corrections and decisions

See `../../site-corrections-chem-y11.md`. Preserve the original givens when correcting a method or explanation. The website was read only. The route boundary excludes the later examples explicitly deferred above. Resolve the logged source errors, school method and cultural decisions before designing or recording. Listening and playback remain later gates.
