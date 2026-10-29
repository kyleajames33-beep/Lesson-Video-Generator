# m8c02 science check: gravimetric sulfate

Independent Codex review, 28 October 2026. Input: `../lessons/chem-m8-c02.md`, Revision 1. Checked all narration, Visual text, equations, numbers, attempts, feedback, notes and metadata. Source only; no human listening or voiced playback.

## Dotpoint check

C8-IQ1-03, p58, `docs/production/programme/syllabus/chem-2017-y12.json`:
> conduct investigations and/or process data involving:
> - gravimetric analysis
> - precipitation titrations

Opening quotation matches word for word. Metadata has the same words with bullets flattened to a semicolon. [Official source](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx). Fresh official DOCX text downloaded for brief 110 was compared with the local JSON and this design. The wording and listed examples match. See assets/brief111-official-syllabus-check.json for file hashes and results.

## Findings

| # | Severity | Where | Error and concrete repair | Source |
| --- | --- | --- | --- | --- |
| 1 | blocker | Scene 6 watch-glass weighing; scenes 7 to 8 paper mass subtraction | Plate shows watch glass, paper and solid, but 1.255 g is treated as paper plus solid, with only 0.905 g paper subtracted. Show the empty watch glass tared and label all readings "watch glass tared: paper + solid". Otherwise include the watch glass in both initial and final masses. Same as learning finding 1. | Mass conservation and the depicted balance method |
| 2 | should fix | Scene 3: "Barium sulfate leaves less than a milligram behind" | Dissolved mass depends on volume and conditions. The author's 0.485 mg is for 200 mL water at 25 °C; neither condition appears on screen. Add those conditions to the numerical tag, or replace the phrase by "Barium sulfate leaves much less dissolved". | Ksp calculation below |
| 3 | should fix | Scene 6: "Constant mass is your evidence that you're weighing only the solid." | Dry impurities also give constant mass. Replace by "Constant mass shows that further drying is not removing measurable water." Washing remains a separate control. Same as learning finding 3. | [USGS D:38a-3](https://pubs.usgs.gov/wsp/1454/report.pdf) and [EPA 375.3](https://www.nemi.gov/methods/method_summary/4703/) |
| 4 | should fix | Scene 10 "It makes the results agree"; scene 15 "The results agree, so they're more reliable" | Repeating a biased method does not guarantee agreement; the question gives no repeated readings. Replace by "Averaging may reduce random variation, but it cannot remove the bias from unwashed salts." Same as learning finding 4. | Measurement reasoning, distinction between spread and bias |

## Calculations

[CIAAW](https://www.ciaaw.org/abridged-atomic-weights.htm) supports the rounded classroom atomic weights. M(BaSO₄) = 137.33 + 32.06 + 4 × 16.00 = 233.39 g/mol; M(SO₄²⁻) = 96.06; M(AgCl) = 107.87 + 35.45 = 143.32. These use the question's rounded masses, not extra precision from another table.

Ba²⁺ + SO₄²⁻ → BaSO₄ and Ag⁺ + Cl⁻ → AgCl balance and have 1 : 1 ratios. Both sulfate solids have MX formula type, so comparing Ksp is valid. The [College of Alameda table](https://alameda.edu/wp-content/uploads/2023/07/Solubility_Product_Constants.pdf) supports BaSO₄ 1.08 × 10⁻¹⁰ and CaSO₄ 4.93 × 10⁻⁵. Solubilities: 1.03923 × 10⁻⁵ and 0.00702140 mol/L; ratio 675.64. Ksp ratio 456,481.5. BaSO₄ dissolved in 0.200 L: 0.000485101 g = 0.485101 mg. With 0.01 mol/L free Ba²⁺, sulfate ≈ 1.08 × 10⁻⁸ mol/L by the common-ion approximation.

Constant-mass teaching readings 1.268, 1.257, 1.255, 1.255 g are internally consistent. Worked mass: 1.255 − 0.905 = 0.350 g; ÷233.39 = 0.0014996358 mol; sulfate mass = 0.144055 g; percentage = 28.8110% → 28.8%. Alternative 250.0 mL water case: 0.00599854 mol/L; 0.576220 g/L or 576 mg/L.

Attempt 1: 0.955 − 0.812 = 0.143 g AgCl; 0.0009977672 mol; 0.035370846 g chloride; ÷0.0500 = 0.7074169 g/L → 0.707. Wrong whole mass gives 4.7240064 g/L, 6.678 times the correct result. Author-only damp trial: 0.392 g gives 32.27%; 0.3495 g gives 28.77%.

## Method and hazards

[USGS D:38a-3](https://pubs.usgs.gov/wsp/1454/report.pdf) acidifies before barium addition to prevent carbonate, hydroxide and phosphate interference. [EPA 375.3](https://www.nemi.gov/methods/method_summary/4703/) uses HCl, BaCl₂, digestion, filtration, washing and weighing. The quiet acid chip is factually correct; the learning review asks for its causal explanation. HCl is suitable for sulfate, but not an AgCl chloride analysis, where the design's author note correctly gives HNO₃.

Digestion makes larger crystals and reduces surface contamination; rinsing transfers the solid quantitatively; washing removes soluble salts; a desiccator limits moisture uptake on cooling. Oven-dried filter paper is a school method distinct from the ignited-crucible standard. Precondition the paper and use one tare basis. AgCl is light-sensitive. "Agree" means within balance precision, not equality at unlimited precision.

[Barium chloride SDS](https://www.sigmaaldrich.com/US/en/sds/Aldrich/449644) confirms oral toxicity and inhalation hazard. [Silver nitrate SDS](https://www.fishersci.co.uk/store/msds?countryCode=GB&language=en&partNumber=S%2F1240) includes corrosive and oxidising hazards beyond staining. Heavy-metal waste is appropriate; the practical's full risk table is outside this data lesson.

The site's unqualified specificity claim was confirmed. CaCl₂ is not intrinsically selective for carbonate because calcium also forms other poorly soluble salts. Logged in `../site-corrections-m8.md`. Acid and light-protection omissions are method notes, not fabricated site quotations.

Narration sum 5,775; no U+2014. Questions differ from the site's examples; exhaustive originality against all exam papers is not claimed. Plate and playback gates remain separate.

**Count: 1 blocker, 3 should fix, 0 optional.**

## Resolution

Resolved in `../lessons/chem-m8-c02.md` Revision 2 (30 Oct; root resolver, Claude PM). Overlapping fixes with `m8c02-learning-review.md` were merged into one edit each. Recount by script: 5,918 characters, about 538 s.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (merged with learning 1) | The empty, dry watch glass is tared before the loop (spoken in scene 6, coded "0.000 g" readout), and every reading is captioned "watch glass tared: paper + solid". The 0.905 g paper is weighed on the same tare. All numbers unchanged. |
| 2 | Fixed | Scene 3 says "Barium sulfate leaves much less dissolved"; the numerical tag reads "about 0.5 mg in 200 mL of pure water at 25 °C". Boundary and Numbers used match. |
| 3 | Fixed (merged with learning 3) | Constant mass is now a dryness check: "Then further drying is no longer removing measurable water: that's constant mass. Washing still matters, though, because dry impurities would stay on the balance too." Small grey tag "agree: within the balance's precision". |
| 4 | Fixed (merged with learning 4) | Scene 10 and feedback 2 now say averaging may reduce random scatter but cannot remove an error that is the same every time; "It makes the results agree" and "The results agree, so they're more reliable" are cut. |

Method note acted on: the acid step is now spoken in scene 4 with its reason (learning 2); HNO₃ for chloride stays an author note, so A1 is unchanged.
