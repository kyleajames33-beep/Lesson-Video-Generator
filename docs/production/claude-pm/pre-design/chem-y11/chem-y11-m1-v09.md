# chem-y11-m1-v09: Why is relative atomic mass a weighted average?

Brief 167 research pack, 5 November 2026. Source preparation for Claude, not a design, narration, build or approval. Uses Chemistry Stage 6 (2017), Year 11. Candidate questions are original HSC-style questions for this Year 11 content; marks are not an official scheme.

## 1. Exact syllabus and entry knowledge

- `C1-IQ2-03`: calculate the relative atomic mass from isotopic composition (ACSCH024)

These are local ledger IDs, not official codenames. Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx

Entry: Stage 5 particle model, physical versus chemical change, simple formulae, proportions and safe practical work. Recall only the earlier videos named in prerequisites.

Start: Begin with the concrete case named in the question and recall the needed earlier idea.

Stop: Calculate a weighted mass and an unknown two-isotope abundance. Preserve the fictional two-isotope silicon assumption. Stop before mass spectrometer operation.

Next: How do line spectra reveal discrete atomic energy levels?

## 2. Read-only site sources and worked examples

- `module1/lesson14.sa.html`, SHA256 `ba2cf87ee8ad7f4ea07c89e48b2928a7f0c907507573bee7c25e307678b8c5cf`. Section IDs: `l14-calculating-relative-atomic-mass-title`, `l14-worked-examples-title`.

### Site example `we-chem-y11-m1-l14-1`

Source transcription below, including any error flagged in section 3 or the corrections log. Numbers are unchanged.

A mass spectrum of boron shows two peaks: mass 10 with relative abundance 19.9% and mass 11 with relative abundance 80.1%. Calculate the relative atomic mass of boron.

1 Convert percentages to fractional abundances: 19.9% ÷ 100 = 0.199 and 80.1% ÷ 100 = 0.801 All percentage values must be divided by 100 to get fractions. Always check: 0.199 + 0.801 = 1.000 ✓
2 Apply the Ar formula: Ar = (mass₁ × fraction₁) + (mass₂ × fraction₂) This is the weighted average formula. Each isotope's mass is "weighted" by how common it is in nature.
3 Ar(B) = (10 × 0.199) + (11 × 0.801) Substitute the values. Keep careful track of significant figures during multiplication.
4 Ar(B) = 1.99 + 8.811 = 10.801 Add the two weighted contributions together to get the final result.
5 Ar(B) ≈ 10.8 (to 3 significant figures) Round your answer. Note: 10.8 is between 10 and 11, pulled toward 11 because the heavier isotope (¹¹B) is more abundant.

### Site example `we-chem-y11-m1-l14-2`

Source transcription below, including any error flagged in section 3 or the corrections log. Numbers are unchanged.

Silicon has two main isotopes: ²⁸Si (mass 28) and ²⁹Si (mass 29). If the Ar of silicon is 28.22, calculate the percentage abundance of each isotope. (Assume only these two isotopes for this calculation.)

1 Let x = fractional abundance of ²⁸Si. Then (1 − x) = fractional abundance of ²⁹Si Since only two isotopes exist, their abundances must sum to 1. Using one variable makes the algebra cleaner.
2 Set up the equation: 28x + 29(1 − x) = 28.22 The Ar formula gives us one equation with one unknown (x). This is solvable.
3 Expand: 28x + 29 − 29x = 28.22. Combine: −x + 29 = 28.22 Collect like terms (all x terms on one side, constants on the other).
4 Solve for x: −x = 28.22 − 29 = −0.78, so x = 0.78 Therefore ²⁸Si = 78% and ²⁹Si = 22%
5 Verify: (28 × 0.78) + (29 × 0.22) = 21.84 + 6.38 = 28.22 ✓ Always check your answer matches the given Ar. If it doesn't, you've made an error in algebra.

## 3. Independent recalculation and source limits

- Boron: 10(0.199)+11(0.801)=10.801, about 10.8. Fractions add to 1.000. These are the site integer isotope-mass approximations, not precise isotope masses.
- Fictional two-isotope silicon model: 28x+29(1-x)=28.22 gives x=0.78; 78% and 22%. Keep the explicit only-two-isotopes assumption: real silicon also has silicon-30.
- Relative atomic mass is dimensionless; it is not the neutron/proton count of one atom.

All listed arithmetic and the two original questions were checked in `work/brief167/first-ten-calculations.json`. Non-numerical classifications were checked against particle identity, phase and conservation; a numeric recalculation cannot validate a claimed empirical observation.

## 4. Misconceptions and traps

Do not average isotope masses equally unless abundances are equal. Check that the mean lies between the isotope masses and near the more abundant one. Do not present fictional abundance models as natural measurements.

Sources: the exact site sections above; NESA action wording. Relevant primary checks: [NIST isotope data](https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses), [University of Wisconsin chromatography interpretation](https://www2.chem.wisc.edu/deptfiles/genchem/lab/labdocs/modules/tlc/tlcinterp.htm), [RSC flame-test teacher notes](https://edu.rsc.org/download?ac=511946). These are checks of the relevant mechanisms, not claims about how often students make an error.

## 5. Visual and memory needs

Code isotope groups at stated proportions and a mass-balance/weighted bar. Show sample composition and the weighted contributions, not a pretend atom with a fractional mass number.

Existing apparatus contact sheet inspected: `work/brief167/asset-contact.png`. Candidate filenames are reuse proposals, not final practical or playback approval. Particle diagrams, formulae, graphs, measurement lines and calculation rows stay coded.

Memory-bank check: Module 5 to 8 banks are drafts for later Chemistry content. No equilibrium or acid-base aid is needed here. For v10, Module 8's explanation that heat raises electron energy and a fall emits a photon is directly relevant; keep the exact atomic/ionic mechanism checked for the chosen flame. No mnemonic quota.

## 6. Two original candidate questions

### Question 1

A model element has isotopes of masses 22 and 24 in abundances 70.0% and 30.0%. Calculate its relative atomic mass.

**Worked answer:** 22(0.700)+24(0.300)=15.4+7.2=22.6, dimensionless.

### Question 2

Assume an element has only isotope masses 63 and 65 and relative atomic mass 63.60. Find their percentage abundances.

**Worked answer:** 63x+65(1-x)=63.60, so 65-2x=63.60 and x=0.70. The mass-63 isotope is 70%, mass-65 is 30%. Check 44.1+19.5=63.6.

## 7. Site corrections and decisions

See `../../site-corrections-chem-y11.md`. Preserve the original givens when correcting a method or explanation. The website was read only. The route boundary excludes the later examples explicitly deferred above. Resolve the logged source errors, school method and cultural decisions before designing or recording. Listening and playback remain later gates.
