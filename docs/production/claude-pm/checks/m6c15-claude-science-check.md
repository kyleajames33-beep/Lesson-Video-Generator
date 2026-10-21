# m6c15 science check (chem-m6-c15, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-c15.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (21 Oct). The script covered:

- the worked example, A1 and A2 arithmetic;
- the vinegar conductivity curve, solved by bisection on the full charge balance with Ka 1.8 × 10⁻⁵ and Kw 1.0 × 10⁻¹⁴, as Σcλ with the design's limiting molar conductivities, corrected and uncorrected for dilution;
- least-squares best-fit lines over several point ranges, and their crossings;
- the barium hydroxide with sulfuric acid curve and its crossing;
- the Al³⁺ precipitation onset in the A1 flask.

No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

Ledger `C6-IQ3-01` (page 53, practical): "conduct practical investigations to analyse the concentration of an unknown acid or base by titration". Ledger `C6-IQ3-02` (page 53, practical): "investigate titration curves and conductivity graphs to analyse data to indicate characteristic reaction profiles, for example:" with "strong acid/strong base", "strong acid/weak base", "weak acid/strong base (ACSCH080, ACSCH102)". The design text and the YouTube description match the ledger exactly (checked by script). The design does not claim full coverage of either practical dotpoint, which is right.

## Em dashes

None found (U+2014 count 0).

## Reference values

| Claim in design | Recomputed or looked up | Verdict | Source |
| --- | --- | --- | --- |
| M(CaCO₃) 100.1 g/mol | 40.08 + 12.01 + 3 × 16.00 = 100.09 | Correct | IUPAC atomic weights |
| M(Al(OH)₃) 78.00 g/mol | 26.98 + 3 × 17.008 = 78.00 | Correct | IUPAC atomic weights |
| Limiting molar conductivities at 25 °C (S cm² mol⁻¹): H⁺ 349.8, OH⁻ 198.6, Na⁺ 50.1, CH₃COO⁻ 40.9, Ba²⁺ 127.2 (per ion, 2 × 63.6), SO₄²⁻ 160.0 (per ion, 2 × 80.0) | as listed | Correct | CRC Handbook, ionic conductivity at infinite dilution |
| Ksp(BaSO₄) about 1.1 × 10⁻¹⁰ | about 1.1 × 10⁻¹⁰ at 25 °C | Correct | CRC Handbook |
| Dissolved CO₂ reacts with NaOH only to HCO₃⁻ by a phenolphthalein endpoint (new correction 3) | pKa₂(H₂CO₃) 10.3; at pH 8.3, HCO₃⁻ dominates | Correct | Harris, Quantitative Chemical Analysis |
| NaHCO₃ is titrated directly with methyl orange, boiling near the endpoint (new correction 11) | standard method | Correct | Vogel's Textbook of Quantitative Chemical Analysis |

## Worked example (scenes 5 and 6)

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| n(HCl added) | 1.250 × 10⁻² mol | 0.5000 × 0.02500 = 0.012500 | Correct (4 s.f.) |
| n(HCl left) = n(NaOH) | 4.60 × 10⁻³ mol | 0.250 × 0.01840 = 0.004600 | Correct (3 s.f. from 0.250) |
| n(HCl used) | 7.90 × 10⁻³ mol | 0.012500 − 0.004600 = 0.007900; both terms known to 10⁻⁵ mol, so 3 s.f. | Correct |
| n(CaCO₃) | 3.95 × 10⁻³ mol | ÷ 2 | Correct (1 : 2 from the strip) |
| m(CaCO₃) | 0.3954 g → 0.395 g | 3.95 × 10⁻³ × 100.1 = 0.39540 | Correct |
| % CaCO₃ | 63.8% | 0.3954 ÷ 0.620 × 100 = 63.77 → 63.8 (0.395 ÷ 0.620 gives 63.71 → 63.7; the guard-digit tag handles this) | Correct |
| Crossed volume subtraction | 6.60 mL | 25.00 − 18.40 | Correct, and correctly crossed |

## Attempt 1 (aluminium hydroxide)

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| added | 1.600 × 10⁻² mol | 0.4000 × 0.04000 = 0.016000 | Correct |
| left | 4.320 × 10⁻³ mol | 0.2000 × 0.02160 = 0.004320 | Correct |
| used | 1.168 × 10⁻² mol | 0.011680 | Correct |
| n(Al(OH)₃) | 3.893 × 10⁻³ mol | ÷ 3 = 0.0038933 | Correct |
| m | 0.3037 g → 0.304 g | × 78.00 = 0.30368 | Correct |
| % | 60.7% | 0.30368 ÷ 0.500 × 100 = 60.74 → 60.7 (3 s.f. from 0.500 g; from the rounded 0.304 g it would be 60.8, so the guard digit is kept) | Correct |
| Crossed (no ÷ 3) | 182% | 0.01168 × 78.00 ÷ 0.500 × 100 = 182.2 | Correct |
| Real-chemistry caveat | not stated | Al³⁺ in the flask is about 0.063 mol/L; with Ksp(Al(OH)₃) about 3 × 10⁻³⁴, precipitation begins near pH 3.2, so real back titrations of aluminium antacids stop at a low pH endpoint (about 3.5, on a meter) | Idealised HSC-style task, as on the site; the titre is given, so the student's working is unaffected (M3: author note only) |

## Vinegar conductometric titration (author note c, scenes 8 to 10)

Model: 10.00 mL of 0.820 mol/L CH₃COOH (8.20 × 10⁻³ mol) made up to 100.0 mL, 1.00 mol/L NaOH in 1.00 mL portions.

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Corrected conductivity, 0 to 16 mL (relative) | 0.47, 0.96, 1.84, 2.74, 3.65, 4.55, 5.46, 6.37, 7.28, 9.45, 11.94, 14.43, 16.91, 19.40, 21.89, 24.37, 26.86 | identical to 0.01 | Correct |
| Fits 2 to 6 and 11 to 16 mL (author note c) | slopes 0.905, 2.487; crossing 8.19 mL | 0.905, 2.487; 8.194 mL | Correct |
| Fits 2 to 7 and 10 to 16 mL (scene 8's ruler) | not stated | 0.906, 2.487; 8.196 mL | Read as 8.20 mL; author note and scene now agree (M2) |
| Uncorrected crossing | 7.90 mL | 7.90 (2 to 6, 11 to 16); 7.97 (2 to 7, 10 to 16) | Correct for the stated ranges |
| "The first two points sit below the first line" | below | 0 mL: 0.47 against 0.03 on the extrapolated line; 1 mL: 0.96 against 0.93. Both sit **above** the line | Wrong direction (M1). The cause given (hydronium removed first, ethanoate suppressing ionisation) is right and explains why they sit above |
| Curvature near equivalence (scene 8: "near equivalence the points curve a little") | curved | 7 mL residual 0.005, 8 mL 0.009 (first line); 9 and 10 mL on the second line; [OH⁻] from ethanoate hydrolysis about 10⁻⁵ mol/L, too small to show; pH at 8.20 mL 8.81 | Not shown by the data (S1) |
| n and c | 8.20 × 10⁻³ mol; 0.820 mol/L | 1.00 × 0.00820 = 0.00820; ÷ 0.01000 L = 0.820 | Correct. The divisor is the vinegar's own 10.00 mL, which is right because the added water carries no acid (learning S3 makes this explicit) |
| About 4.9 g per 100 mL | 49.2 g/L | 0.820 × 60.05 = 49.24 g/L | Correct (author note only) |
| Dilution correction factor | (V₀ + v) ÷ V₀ | applied as stated | Correct; the corrected graph makes both segments straight, and the axis tag "(corrected for volume added)" must be visible whenever the graph is used for the reading (M2) |

## Attempt 2 (barium hydroxide with sulfuric acid)

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Corrected graph 0 to 20 mL | 13.11, 12.06, ... 0.52 (12 mL), 0.86 (13 mL), ... 12.89 | identical to 0.01 | Correct |
| Fits 0 to 10 and 14 to 20 mL | crossing 12.50 mL | slopes −1.049, 1.719; 12.50 mL | Correct |
| c(Ba(OH)₂) | 0.0250 mol/L | 0.100 × 0.0125 ÷ 0.05000 = 0.02500 (3 s.f.) | Correct |
| Crossed | 12.0 mL → 0.0240 mol/L | 0.100 × 0.0120 ÷ 0.05000 = 0.0240 | Correct; 12 mL is the lowest measured point |
| "almost zero" | yes | BaSO₄ solubility about 1 × 10⁻⁵ mol/L and water's ions leave a trace | Correct |
| H₂SO₄ as 2H⁺ + SO₄²⁻ | HSC treatment | Ka₂ about 1.2 × 10⁻² lowers the after-equivalence slope a little; the crossing is set by moles | Acceptable, as author note d says |

## Chemistry claims and equations

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g) | Ca 1/1, C 1/1, O 3/3, H 2/2, Cl 2/2; 0 = 0 | correct | OK |
| HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l) | balanced | correct | OK |
| Al(OH)₃(s) + 3HCl(aq) → AlCl₃(aq) + 3H₂O(l) | Al 1/1, O 3/3, H 6/6, Cl 3/3 | correct | OK |
| Ba(OH)₂(aq) + H₂SO₄(aq) → BaSO₄(s) + 2H₂O(l) | Ba 1/1, S 1/1, O 6/6, H 4/4 | correct | OK |
| CH₃COOH + NaOH → CH₃COONa + H₂O (strip, small) | balanced | omitted on the small strip | Acceptable (C03 style allows it on a reminder strip) |

Other claims:

- "Calcium carbonate barely dissolves in water, so the acid can only attack the surface of the solid": correct. The indicator changing early and drifting back is the right mechanism.
- "dissolved carbon dioxide ... blurs the endpoint": correct.
- "Sodium hydroxide would react with it too, so the leftover acid would look bigger ... the calcium carbonate would come out too small": correct direction. Gentle boiling of about 0.2 mol/L leftover HCl loses negligible HCl (M4: author note).
- "Its ethanoic acid dissolves and reacts quickly, so a direct titration would work, if you could see the endpoint": correct.
- "a conductivity meter, which doesn't care about colour, or cloudiness": correct.
- "Before equivalence, each portion makes the same change ... After equivalence, each portion adds the same extra hydroxide: a steeper straight line": correct for the dilution-corrected data. Per portion, Na⁺ + CH₃COO⁻ (about 91) before and Na⁺ + OH⁻ (about 249) after.
- "Each portion also adds volume, which dilutes every ion and bends the lines": correct; uncorrected data move the crossing by 0.3 mL here.
- Feedback 2: "Hydroxide is removed as water, and barium is removed as solid barium sulfate, so at equivalence almost no ions are left": correct.
- Key note 3, "the bottom of the V for a strong acid, the bend for a weak acid": correct.
- The 2020 TGA audit, the "labelled 500 mg" claim and exam-frequency talk are absent: correct.

## Findings

### S1. Should fix: "near equivalence the points curve a little" (scene 8)

- Exact text: "Near the start and near equivalence the points curve a little, so don't hunt for one point."
- Problem: the design's own corrected data have no visible rounding at the corner (table above). For the weak acid, only the start is curved.
- Replacement (with learning S1): "The first points curve a little, and equivalence usually falls between two readings, so don't hunt for one point."

### M1. Minor: author note c, the start points sit above the line

- Replacement: "The 0 mL point sits above the first line (0.47 against 0.03 on the extrapolated line) and the 1 mL point slightly above it (0.96 against 0.93) ..." Keep the cause, and add the no-curvature-at-the-corner finding so later revisions do not restore it.

### M2. Minor: author note c, fit ranges and axis tag timing

- The ruler in scene 8 uses 2 to 7 and 10 to 16 mL; the note uses 2 to 6 and 11 to 16. Record the scene's ranges (crossing 8.196 mL) with the alternatives.
- The note says the axis label carries "(corrected for volume added)" from the start; scene 9 says it gains the tag on "corrected". Record the scene 9 timing, and keep the tag through scene 10.

### M3. Minor: A1 is idealised; record it

- Add an author note: Al³⁺ starts to precipitate near pH 3.2 in the A1 flask, so real acid-neutralising-capacity tests titrate to about pH 3.5. The titre is a given, so no learner caveat is needed.

### M4. Minor: boiling and HCl loss

- Add an author note: gentle boiling of dilute leftover HCl (about 0.2 mol/L) drives off CO₂ and loses negligible HCl.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C6-IQ3-01 and C6-IQ3-02 (page 53); route draft `docs/production/module6-video-route-draft.json`
- CRC Handbook of Chemistry and Physics: ionic conductivity at infinite dilution; solubility products; dissociation constants
- Harris, Quantitative Chemical Analysis: carbonate titrations and CO₂ error; conductometric titrations
- Vogel's Textbook of Quantitative Chemical Analysis: back titrations; hydrogencarbonate with methyl orange
- IUPAC standard atomic weights

## Verdict

**Ready to voice after fixes** (S1 before recording; M1 to M4 are cheap and should be applied). The Codex error check is still required.

## Resolution (21 Oct)

Applied in `lessons/chem-m6-c15.md` Revision 2 (21 Oct).

- **S1, applied** with learning S1: scene 8 narration and cues.
- **M1, applied:** author note c gives the start points as above the line, with the values, and records that the corner shows no curvature.
- **M2, applied:** author note c uses scene 8's ranges (2 to 7 and 10 to 16 mL, 8.196 mL) with the alternatives, and the axis tag appears on scene 9's cue and stays in scene 10. "Numbers to verify" and the memory aid check (8.20 mL) are updated.
- **M3, applied:** new author note j.
- **M4, applied:** new author note k.

No em dashes (U+2014 count 0). Narration 6,171 characters, about 9.4 minutes.
