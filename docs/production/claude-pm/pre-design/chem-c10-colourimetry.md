# Chemistry C10: colourimetry pre-design pack

Sources: [site lesson 13](C:/Users/kygs/hscscience/subjects/chemistry/year12/module5/lesson13.sa.html), [extract](../site-extracts/chem-m5-l13.md), [official NSW Chemistry Stage 6 Syllabus (2017) page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017), [2017 syllabus pp. 50-51](https://kiama-h.schools.nsw.gov.au/content/dam/doe/sws/schools/k/kiama-h/content/learning-at-our-school/chemistry-stage6-syllabus-pdf.pdf). Route name is p02 in the current [coverage ledger](../coverage-ledger.md); confirm the C10 filename with Claude.

## Exact syllabus words

> conduct an investigation to determine Keq of a chemical equilibrium system, for example:
> - Keq of the iron(III) thiocyanate equilibrium (ACSCH096)

The preceding temperature point, already assigned to C9, reads: “qualitatively analyse the effect of temperature on the value of Keq (ACSCH093)”.

## Site order and material

Get oriented and Think First (red FeSCN²⁺ fades on warming); Know/Understand/Can Do and formula/misconception cards; why only temperature changes Keq; reading K across temperatures; measuring K by colourimetry; calculating K from colourimetry; extension on Gibbs energy; worked examples and activities; position-versus-K activity; equilibrium-constant calculations; practice; retrieve and reflect. The colourimetry portion explains A = εlc, fixed path length and absorptivity, known FeSCN²⁺ standards, absorbance-versus-concentration calibration, unknown equilibrium mixture, ICE table and K. It explicitly distinguishes standards with Fe³⁺ in large excess from equilibrium mixtures, then requires dilution before the ICE table.

Practical: blank at 447 nm, prepare five standards from 0.00200 mol L⁻¹ KSCN and excess 0.200 mol L⁻¹ Fe(NO₃)₃, measure absorbance, make five equilibrium mixtures from 0.00200 mol L⁻¹ Fe(NO₃)₃ and KSCN, read product concentration, calculate five K values, then mean/range at the recorded temperature. The student analyses spread, calibration assumption and uncertainty. The page supplies no actual absorbance dataset or molar absorptivity. A line through the origin is assumed; measured blanks and fit should decide the intercept. [University laboratory method](https://staff.buffalostate.edu/nazareay/che112/ex6.htm) uses a fitted slope and intercept.

Numbers: first card has Fe³⁺ + SCN⁻ ⇌ FeSCN²⁺ at K 895 (25 °C), 580 (35 °C), 360 (45 °C). Gas comparison A + B ⇌ 2C has K 0.25 (300 °C), 1.10 (400 °C), 4.80 (500 °C); forward is endothermic and K at 200 °C is below 0.25. Colourimetry card uses each reactant at 1.00 × 10⁻³ mol L⁻¹ and product at 1.50 × 10⁻⁴, yielding each reactant at 8.50 × 10⁻⁴ and K 207.6. The later worked example uses each reactant at 2.00 × 10⁻³ and product at 4.80 × 10⁻⁴, yielding each reactant at 1.52 × 10⁻³ and K 207.7. Dilution example: 5.00 mL of 0.00200 mol L⁻¹ Fe³⁺ in 10.00 mL total gives 0.00100 mol L⁻¹. Quick check: product 2.00 × 10⁻⁴ from 1.00 × 10⁻³ of each reactant leaves 8.00 × 10⁻⁴ of each.

Practice: explain the full calibration/ICE method (4 marks); infer exothermic forward from K 120 at 25 °C and 35 at 50 °C, predict K below 35 at 75 °C and explain pressure cannot restore 120 (3 marks). Activity questions distinguish adding Fe³⁺, warming 25 to 45 °C and reversing cause/effect. Other activity: write K for CO + 3H₂ ⇌ CH₄ + H₂O; compare K 3.90 × 10⁶ at 300 °C and 1.85 × 10⁻² at 800 °C; compare Q 7.54 with K 3.96. Retrieve question asks about higher absorbance at 35 than 25 °C, calibration temperature and why a curve is needed. The memory aid is the five-step chain: standards → calibration → equilibrium reading → ICE → K; the method box expands it to eight laboratory steps.

## Number and science check

- Recomputed K: 0.000150/(0.000850²) = 207.612; 0.000480/(0.001520²) = 207.756. Both round to 208. Dilution gives 0.00200 × 5.00/10.00 = 0.00100. Q 7.54 > K 3.96 implies shift left. The gas K drops by about 2.11 × 10⁸ between the two stated temperatures, consistent with an exothermic forward process. No ε is stated to verify.
- Site correction: the worked-example conclusion says K 208 and deep red mean products are “significantly favoured”, but its own ICE table shows only 4.80 × 10⁻⁴ of the initial 2.00 × 10⁻³, or 24%, becomes product. Colour intensity also depends on absorptivity. Keep the valid K calculation and remove that composition inference.
- Site question concern: higher absorbance at 35 °C by itself cannot establish reaction enthalpy unless the two samples have identical starting composition, optical conditions and temperature-specific calibration. The question also invokes ΔG° = −RT ln K, which the page marks extension.

## Exam traps, objects and overlap

[NESA 2023 Q31 feedback](https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/chemistry/2023): students lost marks on graph scale, reading concentration from the fitted line, K expression, ICE table and stoichiometric ratios. Show the axes and reading, then the current ICE row. The site also names bottle concentration in place of diluted initial concentration, and confusing calibration standards with equilibrium mixtures.

Objects: colourimeter or spectrophotometer, matched cuvettes, iron thiocyanate colour range, pipette/syringe, volumetric flask, solution bottles and graph. Brief 38 requests `m5x-colourimeter` and six cuvette plates; **none are present** in `public/assets/chemistry` at this check. Existing NO₂ colour vessels serve C9, not this apparatus. C5 teaches K expressions; C6 teaches ICE; C9 teaches temperature dependence. Recall these. Do not turn the investigation into a claim that watching a video constitutes conducting it.

**Claude questions:** Confirm p02 versus C10 ID; choose real or illustrative absorbance readings and verify the fit; decide whether the video teaches a practical method or analyses a dataset; keep the extension Gibbs material out of the core investigation?
