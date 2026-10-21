# m6g03c science check (chem-m6-g03, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-g03.md` (Revision 1), proposal text only; `lessons/chem-m6-c12.md` and `lessons/chem-m6-p06.md` (recalled values and data sets); the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; the route entry in `docs/production/module6-video-route-draft.json`. Every number was recomputed with a Python script (21 Oct), using HSC data sheet atomic masses (H 1.008, C 12.01, O 16.00, Na 22.99, Cl 35.45). The script covered:

- the molar masses of oxalic acid dihydrate, anhydrous oxalic acid, HCl and NaHCO₃;
- Q1: the standard, every titre from its readings, the concordant mean, c(NaOH) (rounded and unrounded chains) and the crossed value;
- Q2: the mean, aliquot moles, scale-up, concentration, percentage by mass and the crossed value;
- Q3: the mean, moles, scale-up, mass, percentage (also with P06's unrounded acid) and the crossed value.

No audio, stills, site files or design files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `C6-IQ3-01` (page 53): "conduct practical investigations to analyse the concentration of an unknown acid or base by titration". The design text and the YouTube description match the ledger exactly; the inquiry question "How are solutions of acids and bases analysed?" also matches. The route entry (chem-m6-g03, prerequisites chem-m6-c12 and chem-m6-p06, next chem-m6-c13, start and stop) matches. Practice rows only: correct.

## Em dashes

None found (U+2014 count 0; U+2013 count 0).

## Numbers

| Item | Design | Recomputed | Verdict |
| --- | --- | --- | --- |
| M(H₂C₂O₄·2H₂O) | 126.07 g/mol | 126.068 | Correct |
| M(H₂C₂O₄) (crossed) | 90.04 | 90.036; ratio 1.4002 ("forty per cent more") | Correct |
| Q1(a) n | 0.012550 mol | 1.5822 ÷ 126.07 = 0.0125502 | Correct |
| Q1(a) c | 0.05020 mol/L | 0.0502007 → 0.05020 (4 s.f.) | Correct |
| Q1 titres | 24.6, 24.05, 24.40, 24.00, 23.95 | 24.6 − 0.00; 24.55 − 0.50; 24.50 − 0.10; 25.20 − 1.20; 24.30 − 0.35: same | Correct; rough row mixes precisions (M1) |
| Q1 concordance | 24.05, 24.00, 23.95 (spread 0.10, inclusive) | correct; outlier 0.35 above | Correct under C12's inclusive convention (C12 author note g) |
| Q1 mean | 24.00 mL | 72.00 ÷ 3 = 24.00 | Correct |
| Q1(b) | n 1.255 × 10⁻³; 2.510 × 10⁻³; c(NaOH) 0.1046 mol/L | 0.104583 → 0.1046; unrounded chain 0.104585 | Correct |
| Q1 crossed | 0.07029; 0.1464 | 0.070289; 0.14644 | Correct |
| Q2 mean | 24.40 mL | 73.20 ÷ 3 = 24.40 | Correct |
| Q2 n(NaOH) = n(HCl) aliquot | 2.552 × 10⁻³ mol | 2.55224 × 10⁻³ | Correct |
| Q2 factor | 12.5 | 250.0 ÷ 20.00 = 12.50 | Correct |
| Q2 n(flask) | 0.03190 mol | 0.031903 | Correct |
| Q2(a) | 3.190 mol/L | 3.1903 → 3.190; with Q1's unrounded NaOH 3.1898 → 3.190 | Correct |
| Q2 crossed | 0.1276 mol/L | 0.127612; × 25 = 3.190 | Correct |
| Q2(b) | 116.3 g; 11.1% | 3.190 × 36.46 = 116.30 g; 116.30 ÷ 1050 = 11.08% → 11.1% (3 s.f. from 1.05 g/mL) | Correct |
| Q2 density check | 11% HCl about 1.05 g/mL | CRC density table for HCl(aq) at 20 °C: 10% 1.047, 12% 1.057 g/mL; 11.08% gives about 1.052 | Self-consistent |
| Q3 mean | 23.10 mL | 69.30 ÷ 3 = 23.10 | Correct |
| Q3 n | 2.446 × 10⁻³ mol | 0.1059 × 0.02310 = 2.44629 × 10⁻³ | Correct |
| Q3 tablet moles | 1.2230 × 10⁻² mol | × 5.000 | Correct |
| M(NaHCO₃) | 84.01 | 84.008 | Correct |
| Q3 mass | 1.0274 g | 1.02744 | Correct |
| Q3 % | 77.84% | 77.837 → 77.84; unrounded chain 77.844 → 77.84; with P06's unrounded acid 77.84 | Correct |
| Q3 crossed | 38.92% | 38.918 → 38.92 | Correct |
| Equations | H₂C₂O₄ + 2NaOH; HCl + NaOH; NaHCO₃ + HCl → NaCl + H₂O + CO₂ | balanced in atoms and charge | Correct |

## Chemistry claims

- Oxalic acid dihydrate as a primary standard for NaOH: accepted practice (RSC and site lesson 14); both protons are titrated to a phenolphthalein endpoint. Author note: Ka1 about 5.6 × 10⁻² (pKa1 1.25); Ka2 1.5 × 10⁻⁴ (CRC, pKa2 3.81) to 5.4 × 10⁻⁵ (pKa2 4.27, other tables). The design's range is right.
- "she weighed them too, so the molar mass includes them": correct.
- "track moles, not concentrations" after a dilution; "the flask, and the ten millilitre sample poured into it, held twelve point five times as much acid": correct, given a well-mixed volumetric flask.
- Percentage by mass from density for a liquid, from the weighed mass for a solid: correct.
- "Hydrogen carbonate accepts just one proton, making water and carbon dioxide, so the ratio is one to one": correct. Methyl orange suits NaHCO₃ with HCl (equivalence near pH 4); not justified on screen, correctly (C13).
- "much stronger than the aliquot" (3c): wrong term (S1).
- Decision board "CO₃²⁻ takes 2" and key note 3 "Na₂CO₃ : HCl = 1 : 2": true only to the second (methyl orange) endpoint (S2).
- Q2 assumes HCl is the only substance in the cleaner that reacts with NaOH; the card does not say so (M2).
- Brick cleaner strength: brick and masonry cleaners sold in Australia and the UK are hydrochloric acid solutions from about 8 to 10% (diluted ready-to-use products) up to 25 to 32% (concentrates). 11.1% is realistic. No product is named: correct.
- Antacid tablet of 1.32 g with about 78% NaHCO₃: plausible.

## Precision

Burette readings end in 0 or 5 in the second decimal (0.05 mL) except the rough final reading 24.6 (M1). Volumetric volumes 250.0, 100.0, 25.00, 20.00 and 10.00 mL; masses to 0.0001 g. Results to four significant figures except Q2(b) (three, from 1.05 g/mL), which the narration explains. The guard-digit convention ("keep the digits; round at the end") is applied, and the rounded and unrounded chains give the same reported answers in all three questions.

## Exam style and originality

All three questions follow HSC Section II calculation style: a stem with data, a reading table or titre list, and lettered demands with "Calculate". Each card carries "HSC-style question, written for HSCScience". A web search found no NESA HSC question using these data sets or wording (oxalic acid standardisation and antacid analysis are common textbook exercises, so the Codex check of recent papers is still worthwhile). Learner copy never mentions marks: confirmed.

## Absolute claims

- Hook "Lose one link, and every number after it is wrong": rhetorical but true for a chained calculation; keep.
- 3c "much stronger" (S1).
- Decision board and key note 3 ratio rows without the endpoint condition (S2).
- 2d tag "near 0.1 mol/L, as a lab NaOH is usually made": hedged; keep.
- "The mean titre is exactly ..." (2c, 3b, 4b): arithmetically exact; keep.

## Findings

No blockers.

### S1. Should fix: "stronger" used for "more concentrated" (scene 3c narration and tag)

- Exact text: "so it should be much stronger than the aliquot"; tag "the cleaner is 25 times the diluted solution".
- Problem: in acid-base chemistry "strong" means fully ionised; hydrochloric acid is strong at every concentration. The series teaches this distinction (C05, P04, C12 attempt 2).
- Replacement narration: "That's sensible: it was diluted twenty five times, so the cleaner should be about twenty five times as concentrated as the diluted solution."
- Replacement tag: "250.0 ÷ 10.00 = 25: the cleaner is 25 times as concentrated (0.1276 × 25 = 3.190)".

### S2. Should fix: the carbonate ratio row needs its endpoint condition (decision board, key note 3)

- Exact text: decision board "Ratio → from the equation you write: CO₃²⁻ takes 2, HCO₃⁻ takes 1 (Q1, Q3)"; key note 3 "Na₂CO₃ : HCl = 1 : 2".
- Problem: Na₂CO₃ with HCl is 1 : 2 only to the methyl orange endpoint; to a phenolphthalein endpoint it is 1 : 1 (CO₃²⁻ to HCO₃⁻). The next video (C13) teaches indicator choice, and an unconditional rule in the book notes would teach a wrong idea for a phenolphthalein question. C12 author note (e) and P06's validity card already carry the condition.
- Replacement, decision board: "Ratio → from the equation you write: CO₃²⁻ takes 2 (to the methyl orange endpoint), HCO₃⁻ takes 1 (Q1, Q3)".
- Replacement, key note 3: "... NaHCO₃ : HCl = 1 : 1; Na₂CO₃ : HCl = 1 : 2 (to the methyl orange endpoint)."
- Narration (4d, 5) can stay: Q3's card names methyl orange.

### M1. Minor: Q1's rough reading mixes precisions

- Card "Final reading (mL) | 24.6 | ..." beside "Initial reading | 0.00 | ...", in a video whose rule is readings to 0.05 mL. Use "24.60" (titre "24.60"), or keep 24.6 and note in the author section that rough runs are often read to 0.1 mL. Recommended: 24.60, so the card models the rule it tests.

### M2. Minor: Q2's card needs the "only acid" condition

- Add after the first sentence: "Assume hydrochloric acid is the only substance in the cleaner that reacts with sodium hydroxide." (Parallel to Q3's "do not react with acid", which the author kept as a necessary condition.)

### M3. Minor: "percent" in narration

- 2e, 3d, 4c, 4d: "per cent", matching C12 and the Australian Government Style Manual.

### M4. Minor: key note 2's exclusion rule

- Replace "any titre more than 0.10 mL from the rest" with "any titre that does not agree with the others within 0.10 mL" (the rule is a spread among the accepted titres, not a distance from "the rest").

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ3-01 (page 53)
- CRC Handbook of Chemistry and Physics: dissociation constants of organic acids (oxalic acid pKa 1.25, 3.81) and concentrative properties of aqueous solutions (hydrochloric acid densities)
- Royal Society of Chemistry, standardising sodium hydroxide with oxalic acid (primary standard; NaOH absorbs water and CO₂): https://edu.rsc.org/download?ac=509654
- Palace Chemicals, brick cleaner SDS (8.0 to 9.8% w/w HCl): https://palacechemicals.co.uk/wp-content/uploads/2012/10/coshh-msds-CLP-GHS-69-BRICK-CLEANER-05-2015.pdf
- Bunnings-hosted Australian SDSs for hydrochloric acid cleaners (including one at 25 to 30% HCl): https://media.bunnings.com.au/api/public/content/aa1c9c9441494ab49d51f8268ad085bd
- Pharmaguideline, sodium carbonate assay to the methyl orange (second) equivalence point: https://www.pharmaguideline.com/2008/06/method-of-analysis-for-sodium-carbonate-anhydrous.html
- Australian Government Style Manual, numbers and measurements ("per cent"): https://www.stylemanual.gov.au/grammar-punctuation-and-conventions/numbers-and-measurements

## Verdict

**Ready to voice after fixes.** Every number is correct and every reported answer survives the unrounded chain. S1 changes one narration sentence and must be applied before recording; S2 is screen text. M1 to M4 are cheap and should be applied. The Codex error check and originality search are still required.

## Resolution
