# m6c12 science check (chem-m6-c12, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 20 Oct 2026.
Inspected: `lessons/chem-m6-c12.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (20 Oct; `math.log10`, `math.sqrt`). This included the equivalence-point pH values for the indicator check and the concentration range implied by the hook's meter reading.

Site lesson 14 quotes in the new corrections list were spot-checked against `C:/Users/kygs/hscscience/subjects/chemistry/year12/module6/lesson14.sa.html`. All were present as quoted:

- "the cause is almost always a poorly standardised NaOH solution or averaged non-concordant titres";
- "her shiraz";
- "61.7 g/L";
- "non-hygroscopic" in the primary standard criteria;
- "19.85 mL, 19.80 mL, 20.15 mL";
- "Experimental 5.55% vs label 5.0%";
- "Titres within ±0.10 mL of each other";
- "before substituting into the Ka expression";
- "average 14.43 mL, a 0.20 mL systematic error".

Worked example data were also confirmed: 18.60, 18.55, 18.55, 18.90 mL, mean 18.57 mL, 0.9285 mol/L; 22.45 mL mean, 0.1114 mol/L. The sources consulted are listed at the end. No audio, stills or site files were changed.

## Syllabus dotpoint (checked word for word)

Ledger entry `C6-IQ3-01` (Module 6, "How are solutions of acids and bases analysed?", Quantitative Analysis, page 53, practical): "conduct practical investigations to analyse the concentration of an unknown acid or base by titration".

The design text (line 9 and the YouTube description) matches word for word. `C6-IQ3-01` is unaffected by the ledger audit's renumbering, which starts at `C6-IQ3-04`, and the route draft uses the same ID. The design correctly says neither C12 nor P06 alone is full coverage.

Note: vinegar is a household substance, so this video touches ledger `C6-IQ3-06` ("conduct a chemical analysis of a common household substance for its acidity or basicity (ACSCH080)"). The route assigns that point to chem-m6-c16 and chem-m6-p07 (under its pre-audit ID `C6-IQ3-05`), so it should not be quoted or claimed here.

## Em dashes

None found (U+2014 count 0).

## Reference values

| Claim in design | Recomputed or looked up | Verdict | Source |
| --- | --- | --- | --- |
| Ka(CH₃COOH) 1.8 × 10⁻⁵ | tabulated 1.75 × 10⁻⁵ | Consistent with C10 | CRC dissociation constants |
| M(CH₃COOH) 60.05, M(Na₂CO₃) 105.99 (site 106.0) | 60.052; 105.988 | Correct | IUPAC standard atomic weights |
| HSO₄⁻ Ka about 1.2 × 10⁻² | 1.0 × 10⁻² to 1.2 × 10⁻² (pKa about 1.99) | Correct as "about"; both protons react with hydroxide | CRC |
| NaOH hygroscopic and absorbs CO₂ (2NaOH + CO₂ → Na₂CO₃ + H₂O) | as stated | Correct | Vogel's Textbook of Quantitative Chemical Analysis (primary standards; standardisation of NaOH) |
| Anhydrous Na₂CO₃ as a primary standard, dried before use (new correction 4) | slightly hygroscopic; usually dried at about 270 to 300 °C and cooled in a desiccator | The author's correction appears correct; the narration contradicts it (S1) | Vogel's (sodium carbonate as primary standard) |
| Wine titratable acidity about 5 to 9 g/L as tartaric acid; red wines titrated to pH 8.2 with a meter (new corrections 2, 3) | typical range and method as stated | Appears correct; author notes only, not in learner copy | Australian Wine Research Institute, titratable acidity method |
| Vinegar label "5% acidity" read as g per 100 mL (new correction 6) | label basis is mass of acetic acid per volume | Appears correct; the scene 7 comparison should say so (learning M2) | FSANZ Food Standards Code, vinegar; site worked example 2 |

## Indicator choices

| Titration | Equivalence pH (recomputed) | Indicator in design | Verdict |
| --- | --- | --- | --- |
| Vinegar (CH₃COOH) with NaOH, scenes 2 and 3 | 0.3250 mol/L ethanoate in 28.57 mL: pH 9.13 | phenolphthalein (colourless to faint pink, about 8.2 to 10.0) | Suitable; colourless to pink is the right direction with base added to acid |
| Na₂CO₃ (flask) with HCl (burette), scene 8 | second equivalence, 0.0263 mol/L H₂CO₃: pH 3.97; first equivalence (HCO₃⁻) about 8.3 | methyl orange (about 3.1 to 4.4), screen tag only | Suitable for the 1 : 2 ratio. Phenolphthalein would mark the first equivalence and a 1 : 1 ratio, so the tag is load-bearing; keep it (author note e says so) |
| H₂SO₄ with NaOH (A1) | strong with strong, pH 7 | none stated | Acceptable: the question does not need one, and any common indicator would serve |
| A2 (HCl and CH₃COOH with NaOH) | 7.0 and 8.72 | none stated | Acceptable: the question asks for volume only |

Indicator choice is taught in chem-m6-c13; this video names the indicators without justifying them. That is consistent with the boundary.

## Primary standard properties

The site lists pure, stable, non-hygroscopic, soluble and of high molar mass, and these are the usual Stage 6 criteria. The design's narration names three (very pure, stable in air, "doesn't absorb water") and gives "anhydrous sodium carbonate, dried before weighing" as the example. Read literally, this says sodium carbonate does not absorb water and then says it must be dried. That contradicts the author's own new correction 4 (S1). The underlying requirement is that the weighed mass gives the moles exactly. Na₂CO₃ meets it only after drying. Omitting high molar mass and solubility is acceptable at this level.

## Concordance conventions

"Within 0.10 mL" (inclusive, total spread ≤ 0.10 mL) is the site's and the bank's figure and a common NSW school convention. It is not universal: some texts and schools use 0.05 mL or 0.20 mL. A statement presented as a definition ("Only titres that agree within 0.10 mL are concordant") is therefore stronger than the evidence supports (M1).

- WE1 (18.55 to 18.60, spread 0.05) passes under any of these conventions.
- WE2 (22.40 to 22.50, spread 0.10) and A1 (23.40 to 23.50, spread 0.10) pass under the inclusive 0.10 mL rule taught here.
- In every case the excluded titre is excluded under all three conventions.

The site's "±0.10 mL" wording (new correction 7) does imply a spread of up to 0.20 mL, as the author says.

## Chemistry claims and equations

All equations balance in atoms and charge (checked independently).

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq) (3) | C 2/2, H 6/6, O 3/3; 0 = 0 | correct | OK |
| CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l) (6) | C 2/2, H 5/5, O 3/3, Na 1/1 | correct | OK |
| Na₂CO₃(aq) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g) (8) | Na 2/2, C 1/1, O 3/3, H 2/2, Cl 2/2 | correct | OK |
| H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l) (feedback 1) | H 4/4, S 1/1, O 6/6, Na 2/2 | correct | OK |
| 2NaOH + CO₂ → Na₂CO₃ + H₂O (author note j only) | balanced | not on screen | OK |

Other claims:

- "A pH meter won't do it ... the meter only senses the few that have ionised": the second half is correct (0.44% ionised). The first half is absolute. pH and Ka do give the concentration (c = [H₃O⁺]² ÷ Ka + [H₃O⁺]), only imprecisely: a reading of 2.4 good to ±0.05 spans 0.70 to 1.11 mol/L. Ka also varies with temperature and ionic strength. C10 taught the forward method (S2).
- "The point where the amounts match the equation exactly is the equivalence point. You see it as the endpoint": correct definitions. But the endpoint approximates the equivalence point and does not equal it (M2).
- "Hydroxide removes hydronium, and takes protons from whole molecules too ... until every molecule has reacted": correct (K for CH₃COOH + OH⁻ is about 1.8 × 10⁹; author note b).
- "So the titre depends on how much acid there is, not how strong it is": correct for a monoprotic acid at the same volume and concentration (A2).
- "Sodium hydroxide ... soaks up water and reacts with carbon dioxide from the air": correct.
- "Sodium carbonate takes two hydrochloric acid for every one of itself, because carbonate accepts two protons": correct to the second (methyl orange) endpoint.
- "It doesn't matter which solution is where": correct for the calculation.
- "Sulfuric acid gives two protons, so the ratio is one to two": correct (HSO₄⁻ reacts fully with hydroxide).
- Feedback 2, "Ethanoic acid starts mostly un-ionised, but as hydroxide removes hydronium, more molecules ionise, until all of it has reacted": correct.

## Arithmetic and significant figures

Every calculation was re-done by script.

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Hook meter | "2.4" for 0.9285 mol/L | [H₃O⁺] 4.088 × 10⁻³; pH 2.389; 0.44% ionised | Correct |
| Hook working back (not in Revision 1) | | pH 2.35 → 1.11; 2.40 → 0.88; 2.45 → 0.70 mol/L | Supports S2 |
| WE1 mean | 18.57 mL | (18.60 + 18.55 + 18.55) ÷ 3 = 18.5667 → 18.57; all four would give 18.65 | Correct |
| WE1 outlier | 18.90 out | 18.90 − 18.60 = 0.30 mL | Correct |
| WE1 n(NaOH) | 9.285 × 10⁻³ mol | 0.5000 × 0.01857 | Correct |
| WE1 c(CH₃COOH) | 0.9285 mol/L (4 s.f.) | 9.285 × 10⁻³ ÷ 0.01000 = 0.9285; from the unrounded mean 0.9283 | Correct as calculated from the reported mean (see below) |
| WE1 mass per 100 mL | about 5.6 g | 0.9285 × 60.05 = 55.76 g/L = 5.58 g per 100 mL | Correct |
| WE2 standard | 0.05000 mol/L | 1.325 ÷ 105.99 ÷ 0.2500 = 0.05000 (106.0 gives 0.05000 exactly) | Correct |
| WE2 | n(Na₂CO₃) 1.250 × 10⁻³; n(HCl) 2.500 × 10⁻³; mean 22.45; c 0.1114 | 1.250 × 10⁻³; 2.500 × 10⁻³; 22.450; 0.11136 → 0.1114 | Correct |
| A1 | mean 23.45; n(NaOH) 2.345 × 10⁻³; n(H₂SO₄) 1.1725 × 10⁻³; c 0.04690; crossed 0.09380 | 23.450; 2.345 × 10⁻³; 1.1725 × 10⁻³; 0.04690; 0.09380 (all four titres would give 0.04703) | Correct |
| A1 outlier | 23.70 out | 23.70 − 23.50 = 0.20 mL | Correct |
| A2 | 2.50 × 10⁻³ mol; 25.0 mL each | 0.100 × 0.02500 = 2.50 × 10⁻³; ÷ 0.100 = 0.0250 L | Correct (3 s.f. from 0.100 mol/L) |
| A2 pH (author only) | HCl 1.00; ethanoic acid 2.87 | 1.00; 2.872 | Correct |

**The 18.57 mL mean and 0.9285 mol/L (project manager decision).** The mean of the three concordant titres is 18.5667 mL. Reported to the burette's two decimal places, it is 18.57 mL. Using the reported mean gives 0.9285 mol/L; carrying the unrounded mean gives 0.9283 mol/L. The two differ by 0.02%, well inside the ±0.3% from a ±0.05 mL titre reading. Using the reported mean is common in Stage 6 worked solutions and matches the site. So 0.9285 appears correct as stated, and both values are reported to the right four significant figures. Author note c records the alternative. Keep as decided.

## Findings

### S1. Should fix: the primary standard criterion contradicts the example (scene 4, key note 2)

- Exact text: "a solid that's very pure, stable in air, and doesn't absorb water, like anhydrous sodium carbonate, dried before weighing"; card row "doesn't absorb water ✓"; key note 2 "does not absorb water (for example, dried anhydrous Na₂CO₃)".
- Problem: anhydrous sodium carbonate takes up some moisture from air, which is why it is dried (new correction 4). The line teaches that it does not absorb water and also that it must be dried. It also omits the reason the criteria matter.
- Replacement: "a solid that's very pure, stable in air, and doesn't take up water as you weigh it, so its mass gives its moles exactly. Anhydrous sodium carbonate works if it's dried in an oven first." Card row "no water taken up while weighing ✓"; tag "Na₂CO₃: dried in an oven first"; key note 2 to match. Author note j records the drying temperature and the omitted criteria.

### S2. Should fix: "a pH meter won't do it" is too absolute (scene 1, main question, description)

- See the learning review S1 for the replacement. The scientific point is that working back through Ka is possible but imprecise (0.70 to 1.1 mol/L for 2.4 ± 0.05), not impossible.

### M1. Minor: present 0.10 mL as the usual convention, not the definition (scene 5, key note 3)

- Exact text: "Only titres that agree within **zero point one zero** millilitres are concordant".
- Replacement: "Titres are usually called concordant when they agree within **zero point one zero** millilitres"; key note 3 "usually agreeing within 0.10 mL"; author note g records the other conventions and A1's exact-0.10 spread.

### M2. Minor: endpoint approximates the equivalence point (scene 3, key note 1)

- See the learning review M1 ("very close to it").

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C6-IQ3-01 and C6-IQ3-06; route draft `docs/production/module6-video-route-draft.json`
- Vogel's Textbook of Quantitative Chemical Analysis (5th or 6th edition), primary standards, sodium carbonate and sodium hydroxide standardisation
- CRC Handbook of Chemistry and Physics, dissociation constants (ethanoic acid, hydrogensulfate ion) and indicator transition ranges (phenolphthalein, methyl orange)
- IUPAC standard atomic weights (molar masses)
- Australian Wine Research Institute, titratable acidity (pH 8.2 endpoint, typical ranges)
- Food Standards Australia New Zealand, Food Standards Code (vinegar labelling basis)
- Site lesson 14 (read-only), spot-checked as listed above

## Verdict

**Ready to voice after fixes** (S1 and S2 before recording; M1 and M2 are cheap and should be applied).

## Resolution (20 Oct)

Applied in `lessons/chem-m6-c12.md` Revision 2 (20 Oct).

- **S1, applied:** scene 4 narration, card rows and tag as written (the NaOH card now has two crossed rows); key note 2 and author note j updated; teaching checks updated.
- **S2, applied:** with the learning review S1 (hook narration and tag, main question, boundary, stop line, cause chain, author note a, YouTube description).
- **M1, applied:** "usually" in scene 5 and key note 3; author note g records the conventions.
- **M2, applied:** "very close to it" in scene 3's narration and tag, and in key note 1.
- **Mean titre:** 18.57 mL and 0.9285 mol/L kept, as decided; Open decisions records the confirmation.

No em dashes (U+2014 count 0).
