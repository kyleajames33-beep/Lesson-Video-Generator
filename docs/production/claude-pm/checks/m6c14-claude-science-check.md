# m6c14 science check (chem-m6-c14, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-c14.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (21 Oct; `math.log10`, `math.sqrt`, bisection on the full charge balance with Kw 1.0 × 10⁻¹⁴, Ka(CH₃COOH) 1.8 × 10⁻⁵, Kb(NH₃) 1.8 × 10⁻⁵). Conductivities were recomputed as Σcλ with dilution, using both the design's rounded molar conductivities and the tabulated values. This covered every curve point, the jump spans, the ammonia curve, both conductivity graphs, both attempts and the site-correction arithmetic.

Site quotes in the new corrections list were spot-checked against `C:/Users/kygs/hscscience/subjects/chemistry/year12/module6/lesson16.sa.html`, `lesson17.sa.html` and `lesson18.sa.html` (read-only). All were found:

- L16: "24.5–26.5" and "(24.5 + 26.5)", "y-axis", "determined entirely", "Band 6", worked example 1's 2.87, 4.74 and 8.72;
- L17: "7.5 + 11.5", "38%", "6.25 mL", "2.61", "reservation";
- L18: "κ = 350", "determined entirely by the relative".

The sources consulted are listed at the end. No audio, stills or site files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `C6-IQ3-02` (page 53, practical): "investigate titration curves and conductivity graphs to analyse data to indicate characteristic reaction profiles, for example:" with "strong acid/strong base", "strong acid/weak base", "weak acid/strong base (ACSCH080, ACSCH102)". The design text and the YouTube description match. The video shows all three example profiles (scenes 2 to 7) and conductivity graphs for two of them. The design does not claim full coverage alone, which is right: the ledger marks the dotpoint as a practical investigation.

## Em dashes

None found (U+2014 count 0).

## Reference values

| Claim in design | Recomputed or looked up | Verdict | Source |
| --- | --- | --- | --- |
| Ka(CH₃COOH) 1.8 × 10⁻⁵; pKa 4.74 (ratio) | tabulated about 1.75 × 10⁻⁵, pKa about 4.76; −log(1.8 × 10⁻⁵) = 4.745 | Consistent with C10, C11 and C13; 4.74 shown as decided | CRC Handbook |
| Kb(NH₃) 1.8 × 10⁻⁵; pKa(NH₄⁺) 9.25 | 9.255 | Correct | CRC Handbook |
| Limiting molar conductivities at 25 °C, S cm² mol⁻¹: H⁺ 349.8, OH⁻ 198.6, Cl⁻ 76.3, Na⁺ 50.1, CH₃COO⁻ 40.9 | as listed (tables vary in the last figure) | Correct; the design's rounded 350, 198, 76, 50, 41 are fine for relative graphs | CRC Handbook, ionic conductivity at infinite dilution; Atkins, Physical Chemistry |
| H₃O⁺ and OH⁻ conduct by proton transfer along hydrogen-bonded water (Grotthuss) | as stated | Correct at this level | Atkins, Physical Chemistry (ion mobility) |
| No 2003 AstraZeneca rosuvastatin titration record | not searched beyond the author's note | Not verified here; not used in learner copy, so no risk | (left to Codex, as requested) |

## Curve points

| Item | Design value | Recomputed (full charge balance) | Verdict |
| --- | --- | --- | --- |
| HCl start | 1.00 | −log(0.100) = 1.000 | Value correct; precision should be 1.000 by the C07 rule (learning S3) |
| CH₃COOH start | 2.87 (full 2.88) | shortcut 2.872; full 2.875; 1.34% ionised | Correct as decided ("about one in a hundred") |
| HCl 5, 10, 15, 20, 24, 24.5, 24.95 mL | 1.18, 1.37, 1.60, 1.95, 2.69, 3.00, 4.00 | 1.176, 1.368, 1.602, 1.954, 2.690, 2.996, 4.000 | Correct |
| HCl 25.00, 25.05, 26, 30, 35, 40, 50 mL | 7.00, 10.00, 11.29, 11.96, 12.22, 12.36, 12.52 | 7.000, 10.000, 11.292, 11.959, 12.222, 12.363, 12.523 | Correct |
| CH₃COOH 2, 5, 8, 10, 15, 20, 24, 24.5 mL | 3.70, 4.14, 4.42, 4.57, 4.92, 5.35, 6.13, 6.44 | 3.697, 4.145, 4.418, 4.569, 4.921, 5.347, 6.125, 6.435 | Correct |
| Half-equivalence 12.50 mL | 4.74 shown (full 4.75) | ratio 4.7447 (→ 4.74); full 4.7452 (→ 4.75) | Correct as decided; the two methods straddle the rounding boundary, so both "4.74" and "4.75" are defensible, and 4.74 matches the site and the bank aid |
| Ka from 4.74 | 1.8 × 10⁻⁵ | 10⁻⁴·⁷⁴ = 1.820 × 10⁻⁵ | Correct (2 s.f. from 2 d.p.) |
| Equivalence 25.00 mL | 7.00 and 8.72 | 7.000; 8.722 | Correct |
| Jumps, one drop (0.05 mL) each side | HCl 4.00 → 10.00; CH₃COOH 7.44 → 10.00 | 4.000 → 10.000; 7.442 → 10.001 | Correct |
| HCl flask, NH₃ from the burette: 24.95, 25.00, 25.05 mL | 4.00, 5.28, 6.56 | 3.998, 5.278, 6.557 | Correct |
| Ammonia curve 26, 30, 35, 40, 50 mL | 7.86, 8.56, 8.86, 9.03, 9.25 | 7.857, 8.556, 8.857, 9.033, 9.255 | Correct: "levels off near nine, not above twelve" |
| Concentration from 25.00 mL | 0.100 mol/L | 0.100 × 0.02500 ÷ 0.02500 = 0.100 | Correct |
| 0.0010 mol/L HCl, one drop each side (new correction 3) | about 6.0 and 8.0 | 5.995, 8.004 | Correct |

## Attempts

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| A1 Ka | 10⁻⁴·⁵⁷ | 2.692 × 10⁻⁵ | Correct; answer 2.7 × 10⁻⁵ (2 s.f.) |
| A1 curve 0, 5, 10, 15 mL | 2.79, 4.10, 4.57, 5.05 | 2.789, 4.095, 4.571, 5.047 | Correct |
| A1 19, 19.95, 20.00, 20.05 mL | 5.85, 7.17, 8.63, 10.10 | 5.849, 7.171, 8.635, 10.097 | Correct (8.635 rounds to 8.63 or 8.64; 8.63 matches the register) |
| A1 21, 25, 30 mL | 11.39, 12.05, 12.30 | 11.387, 12.046, 12.301 | Correct |
| A1 c | 0.100 mol/L | 0.1000 × 0.0200 ÷ 0.02000 = 0.1000, reported 0.100 (3 s.f., graph reading) | Correct |
| A1 crossed | 2.3 × 10⁻⁹ | 10⁻⁸·⁶³ = 2.344 × 10⁻⁹ | Correct |
| A2 c | 0.0800 mol/L | 0.100 × 0.0160 ÷ 0.02000 = 0.08000, reported 0.0800 (3 s.f. from 16.0 mL) | Correct |
| A2 graph (0.0800 mol/L HCl, 20.00 mL), relative | 34.1, 23.4, 15.8, 10.1, 5.6 (16 mL), 7.5, 9.1, 10.4, 11.5 | 34.1, 23.4, 15.8, 10.1, 5.6; 15 mL 6.6 and 17 mL 6.1 either side | Correct: the minimum sits on the 16.0 mL gridline |

## Conductivity shapes

| Item | Design value (relative) | Recomputed | Verdict |
| --- | --- | --- | --- |
| HCl with NaOH, 0 to 50 mL | 42.6, 30.5, 21.9, 15.4, 10.3, 6.3 (25 mL min), 8.0, 9.4, 10.6, 12.5 | 42.6, 30.5, 21.9, 15.4, 10.4 (10.3 with the rounded λ), 6.3, 8.0, 9.4, 10.6, 12.5 | Correct |
| CH₃COOH with NaOH, 0 to 50 mL | 0.5, 1.5, 2.6, 3.4, 4.0, 4.6 (bend), 6.4, 7.9, 9.2, 11.3 | 0.52, 1.54, 2.61, 3.42, 4.05, 4.55, 6.40, 7.94, 9.24, 11.32 | Correct |
| Early weak-acid dip | "can dip slightly in the first millilitre or two" | 0.52 at 0 mL, 0.43 at 0.5 mL, 0.50 at 1 mL, then rising | Correct; the idealised gentle rise shown is acceptable with the author note |

Explanations of the shapes:

- HCl: "each fast hydronium is replaced by a slower sodium ion, so the conductivity falls": correct; H₃O⁺ (about 350) replaced one for one by Na⁺ (about 50), Cl⁻ (about 76) unchanged in amount. Dilution by the titrant also lowers every concentration a little, and site correction 10 itself says so; the narration names the main cause only (M2).
- "After equivalence, extra hydroxide piles up, and it rises": correct; OH⁻ (about 198) and Na⁺ both add.
- Ethanoic acid: "starts with few ions ... sodium and ethanoate ions build up, so it rises gently ... After equivalence, fast hydroxide ions add on, and it rises more steeply": correct; before equivalence each portion adds Na⁺ + CH₃COO⁻ (about 91 together per formula unit); after it Na⁺ + OH⁻ (about 249). The bend at 25.00 mL is the change of slope.
- Feedback 2, "the number of ions stays about the same": correct before equivalence (one Na⁺ for each H₃O⁺ removed).
- "Hydronium and hydroxide conduct far better than other ions, because they can pass a proton from one water molecule to the next": correct at this level.

## Chemistry claims and equations

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| H₃O⁺(aq) + OH⁻(aq) → 2H₂O(l) (14) | H 4/4, O 2/2; 0 = 0 | correct | OK |

Other claims:

- "At the same concentration, a higher starting pH points to a weaker acid": correct with its condition.
- "Each portion of base turns some ethanoic acid into ethanoate, and a weak acid with its conjugate base is a buffer": correct.
- "half the ethanoic acid has become ethanoate. Equal amounts ... the pH equals the p K a": correct (the acid's own ionisation shifts the full value by under 0.01 here).
- "The equivalence point sits in the middle of the steepest part, not where the curve crosses seven, and not at the top": the first and last parts are correct. "Not where the curve crosses seven" is false for the strong acid/strong base curve on screen, whose equivalence point is at pH 7.00 (S1).
- "both flasks held the same moles of acid, and a titre counts moles, not strength": correct for monoprotic acids.
- "its buffer held the pH up until the last few drops. So a bigger jump doesn't mean a faster reaction, just less buffering": correct with the "at these concentrations" tag (jump size also depends on concentration, new correction 3).
- Ammonia: "the jump is lower and shorter ... equivalence pH of five point two eight ... levels off near nine ... extra ammonia is weak, and with ammonium it forms a buffer": correct.
- Key note 3, "its pH is 7 for strong acid + strong base": correct at 25 °C only (M1).

## Findings

### S1. Should fix: "not where the curve crosses seven" (scene 5)

- Exact text: "The equivalence point sits in the middle of the steepest part, not where the curve crosses seven, and not at the top."; crossed chip "where it crosses pH 7? at the top?".
- Problem: for HCl with NaOH the middle of the jump is at pH 7.00, so the statement is false for one of the two curves on screen. The real misconception is "the equivalence point is always at pH 7".
- Replacement: "On the curve, the equivalence point sits in the middle of the steepest part. That's at pH seven only for a strong acid with a strong base, and it's never just the top." Crossed chip "always at pH 7? at the top?", caption "middle of the jump; pH 7 only for strong + strong".

### M1. Minor: "7" needs its temperature (key note 3)

- Replacement: "its pH is 7.00 (25 °C) for strong acid + strong base".

### M2. Minor: record dilution in author note g

- The narration may keep the replacement as the cause. Add to author note g that the moles of ions stay constant before equivalence and that dilution lowers every concentration a little more (site correction 10), so C15 inherits the full account.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ3-02 (page 53); route draft `docs/production/module6-video-route-draft.json`
- CRC Handbook of Chemistry and Physics: dissociation constants; ionic conductivity at infinite dilution
- Atkins, Physical Chemistry: ion mobility and the proton-hopping (Grotthuss) mechanism
- Harris, Quantitative Chemical Analysis: titration curves of weak acids and bases; conductometric titration shapes
- Site lessons 16, 17 and 18 (read-only), spot-checked as listed above

## Verdict

**Ready to voice after fixes** (S1 before recording; M1 and M2 are cheap and should be applied). The Codex error check is still required.

## Resolution (21 Oct)

Applied in `lessons/chem-m6-c14.md` Revision 2 (21 Oct).

- **S1, applied:** scene 5 narration and crossed chip as written; the site-framing line, the mistake list and the misconception check record the rewording.
- **M1, applied:** key note 3 reads "7.00 (25 °C)".
- **M2, applied:** author note g records the constant moles and the dilution.
- **Learning S3 (precision), applied with this check:** the HCl start is 1.000 in narration, label, author note b and the tables.

No em dashes (U+2014 count 0). Narration 5,874 characters, about 9.0 minutes.
