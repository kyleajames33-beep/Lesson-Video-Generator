# m6c03 science check (chem-m6-c03, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 19 Oct 2026.
Inspected: `lessons/chem-m6-c03.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Web and reference sources consulted 19 Oct 2026 and listed at the end. No audio, stills or site files were changed.

## Syllabus dotpoint (checked word for word)

Ledger entry `C6-IQ1-05` (Module 6, "What is an acid and what is a base?", Properties of Acids and Bases, page 52, source the official NESA Word syllabus): "conduct a practical investigation to measure the enthalpy of neutralisation (ACSCH093)".

Design text (line 9 and the YouTube description) matches word for word, including the content-description code. Page 52 matches the ledger. The design correctly says `C6-IQ1-05` is a local catalogue ID, not a printed code. The dotpoint is a practical; the design's split (meaning and calculation here, the practical in chem-m6-p02) is consistent with the route.

## Em dashes

None found (U+2014 count 0). The minus signs are U+2212, as required for ΔH values.

## Reference values and sign convention

| Claim in design | Verdict | Source |
| --- | --- | --- |
| Neutralisation is exothermic; ΔH negative; "temperature up, ΔH negative" | Correct (sign convention ΔH < 0 for heat released by the system). | IUPAC Gold Book; Year 11 convention |
| ΔH = −q/n, q calculated as positive, minus sign added | Correct and matches HSC practice. | NESA marking guidelines (calorimetry items) |
| HSC reference ≈ −57 kJ/mol | Correct as the HSC and textbook convention (older values −57.1 to −57.3 kJ/mol). | Common textbook value; see next row |
| Standard value at 25 °C ≈ −55.8 kJ/mol (author note a) | Correct: ΔfH H₂O(l) −285.8, OH⁻(aq) −230.0, H⁺(aq) 0 gives −55.8 kJ/mol. | CRC data via LibreTexts T1; NBS tables |
| Why the two values differ | Not stated in the design. ΔCp for H⁺ + OH⁻ → H₂O is about +0.22 kJ K⁻¹ mol⁻¹, so ΔH is about −57.3 kJ/mol at 18 °C (the temperature of the classic measurements). See M1. | Olofsson and Hepler 1975 |
| c = 4.18 J g⁻¹ °C⁻¹, density 1.00 g/mL, cup ignored | Correct as stated assumptions ("treat as water"). The real c of the dilute NaCl mixture is slightly lower (about 4.0 to 4.1); the design keeps the effect for P02. See M3. | CRC (heat capacity of NaCl solutions) |
| Heat loss as the most likely reason a school result is less negative | Correct and suitably hedged; the register correction (not "all systematic errors") is applied. | (method convention) |

## Chemistry claims and equations

All equations balance in atoms and charge (checked independently).

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| H⁺(aq) + OH⁻(aq) → H₂O(l) (scenes 2, 4) | balanced, charge 0 = 0 | correct | OK |
| HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l) (scene 6) | balanced | correct | OK |
| H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l) (scene 10) | balanced (Na 2/2, S 1/1, O 6/6, H 4/4) | correct | OK |

Other claims:

- "hydrochloric acid is completely split into hydrogen ions and chloride ions, and sodium hydroxide into sodium ions and hydroxide ions": correct for dilute solutions.
- "The water has less chemical energy than the two ions had, so the difference is released as heat": correct as a Year 12 enthalpy statement (the hydration of the ions is part of that energy; author note c). It also corrects the site's bond-energy explanation (site correction 5): supported.
- "H₂SO₄ + NaOH" shown as one of the pairs that give about −57 kJ/mol (scene 4), and author note (f) "the measured enthalpy per mole of water is close to the HCl value": **not supported**. Sulfuric acid's second hydrogen ion comes from HSO₄⁻, which is only partly ionised (Ka2 about 1.0 × 10⁻² at 25 °C; in 1 mol/L H₂SO₄ most of the acid is present as H⁺ + HSO₄⁻). The reaction HSO₄⁻(aq) + OH⁻(aq) → SO₄²⁻(aq) + H₂O(l) has ΔH about −77.8 kJ/mol from NBS formation enthalpies (HSO₄⁻ −887.3, SO₄²⁻ −909.3, OH⁻ −230.0, H₂O −285.8), because the ionisation of HSO₄⁻ is itself exothermic (about −22 kJ/mol). So the heat per mole of water for H₂SO₄ is expected to be more negative than for HCl, not equal. See S2.
- Thermochemistry of the site's weak-acid values (design site corrections 1 to 3): supported by formation enthalpies. CH₃COOH(aq) + OH⁻ → CH₃COO⁻ + H₂O gives about −56.0 kJ/mol (ionisation enthalpy near zero), so the site's −44.3 kJ/mol is not realistic; HF(aq) + OH⁻ gives about −68.3 kJ/mol (HF ionisation exothermic), so "weak means less than 57" fails; H⁺ + NH₃(aq) → NH₄⁺ gives about −52.2 kJ/mol, so the site's −42.6 is not realistic. Project manager decision (c), no weak-acid numbers in C03, is met: scene 4 says only "can give different values".
- Thomsen (site correction 4): *Thermochemische Untersuchungen* was published in four volumes, 1882 to 1886, collecting decades of measurements; the site's single "1883" date and the "decade" claim are unsupported. The design uses no history: correct choice.
- Gaviscon raft (site correction 6): the alginate raft is a physical barrier; the site's heat claim is unsourced. Not used: correct.
- "Leftover hydroxide releases no heat" (scene 10) and "the leftover solution still gets warmed" (scene 11): correct.
- Feedback 2 (doubling volumes): ΔT ≈ unchanged and ΔH unchanged: correct; author note (g) on slightly smaller fractional heat loss is right.

## Arithmetic and significant figures

Every calculation re-done independently:

| Item | Design value | Recomputed | Correct to the data's precision |
| --- | --- | --- | --- |
| WE1 q | 2717 J | 100.0 × 4.18 × 6.5 = 2717 J | keep unrounded as an intermediate |
| WE1 n(H₂O) | 0.0500 mol | 1.00 × 0.0500 = 0.0500 mol | 0.0500 mol |
| WE1 ΔH | −54.3 kJ/mol | −2.717 ÷ 0.0500 = −54.34 kJ/mol | **−54 kJ/mol** (ΔT 6.5 °C, 2 s.f.) |
| WE2 n | 0.0250, 0.0500, 0.0750, 0.0250 mol | same | same |
| WE2 q | 2758.8 J | 100.0 × 4.18 × 6.6 = 2758.8 J | keep unrounded |
| WE2 ΔH | −55.2 kJ/mol | −55.18 kJ/mol | **−55 kJ/mol** (ΔT 6.6 °C) |
| WE2 crossed (per mol acid) | −110 kJ/mol | −110.4 kJ/mol | −110 kJ/mol (2 s.f.; fine as shown) |
| A1 n | 0.0600 mol H⁺, 0.0500 mol OH⁻ | same | same |
| A1 q | 2783.9 J | 90.0 × 4.18 × 7.4 = 2783.88 J | keep unrounded |
| A1 ΔH | −55.7 kJ/mol | −55.68 kJ/mol | **−56 kJ/mol** (ΔT 7.4 °C) |
| A1 crossed | −46.4 kJ/mol | −46.40 kJ/mol | **−46 kJ/mol** |
| A2 | ΔT ≈ 6.5 °C, ΔH ≈ −54 kJ/mol | 5434 ÷ 836 = 6.5 °C; −54.34 | −54 kJ/mol (already shown) |

Plausibility: WE1 and A1 imply about 5% and 2% heat loss against −57, which is realistic for a lidded cup. WE2's "about 3% loss" check in "Numbers to verify" assumes −57 for H₂SO₄ (see S2 and M2).

## Findings

### S1. Should fix: final answers are not rounded to the precision the data support (project manager decision b)

- Exact text: scene 9 "delta H is **minus fifty four point three kilojoules per mole**"; answer chip "ΔH = −54.3 kJ/mol"; scene 11 "**minus fifty five point two kilojoules per mole**", chip "ΔH = −55.2 kJ/mol"; scene 14 "**minus fifty five point seven kilojoules per mole**", chip "−55.7 kJ/mol" with the tag "about −56 kJ/mol to 2 s.f."; crossed "−46.4 kJ/mol"; key note 5 "ΔH = −54.3 kJ/mol"; author note (e) "the video follows the site".
- Problem: each ΔT (6.5, 6.6, 7.4 °C) has two significant figures, so the HSC convention gives two-figure answers.
- Corrected values: WE1 **−54 kJ/mol**; WE2 **−55 kJ/mol**; A1 **−56 kJ/mol**; A1 crossed **−46 kJ/mol**; WE2 crossed −110 kJ/mol (unchanged); A2 −54 kJ/mol (unchanged). Keep 2717 J, 2.759 kJ and 2783.9 J unrounded as intermediates. Narration and screen changes as in learning review S2. Revise author note (e) to record the rule and the site's −54.3 as a site note.

### S2. Should fix: H₂SO₄ is listed among the "about −57" pairs, and author note (f) is not supported

- Exact text (scene 4 visual): "three formula pairs stack on the left ...: "HCl + NaOH", "HNO₃ + KOH", "H₂SO₄ + NaOH""; author note (f): "the measured enthalpy per mole of water is close to the HCl value."
- Problem: the second hydrogen ion of H₂SO₄ comes from the partly ionised HSO₄⁻, and HSO₄⁻ + OH⁻ is about −78 kJ/mol (NBS data), so the value per mole of water for sulfuric acid is expected to be more negative than −57, not the same.
- Replacement (scene 4): "HNO₃ + NaOH" in place of "H₂SO₄ + NaOH". Replace author note (f) with a statement of the HSO₄⁻ chemistry and that no reference value is claimed for H₂SO₄. Worked example 2 can keep H₂SO₄ for counting hydrogen ions and the per-mole-of-water trap (HSC questions use it), provided the video does not compare its result with −57; it does not. Revise the WE2 plausibility line in "Numbers to verify" (M2). Open question for the project manager: keep H₂SO₄ in WE2, or switch to HCl with Ba(OH)₂ (both fully ionised, soluble BaCl₂), which moves the trap to "per mole of base".

### M1. Minor: explain −57 against −55.8 in author note (a)

- Add: the difference is mainly temperature (ΔCp about +0.22 kJ K⁻¹ mol⁻¹), giving about −57.3 kJ/mol at 18 °C. Author note only; narration unchanged.

### M2. Minor: the WE2 plausibility check assumes −57 for sulfuric acid

- Exact text: "Ideal check: 0.0500 × 57 000 = 2850 J would give ΔT = 2850 ÷ 418 = 6.8 °C, so 6.6 °C is plausible (about 3% loss)."
- Replacement: note that at the −57 convention the ideal rise is 6.8 °C, that HSO₄⁻ makes the true heat larger, so 6.6 °C implies more heat loss than WE1, and that the video makes no −57 comparison for WE2.

### M3. Minor (no change needed): c of the mixture

- "c, the specific heat capacity, is four point one eight joules per gram per degree" with "(treat as water)" is a stated assumption, as HSC questions supply it. Author note (d) covers the real value; no learner change.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger: `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ1-05
- LibreTexts, T1 Standard Thermodynamic Quantities (CRC Handbook, 84th edition data): https://chem.libretexts.org/Ancillary_Materials/Reference/Reference_Tables/Thermodynamics_Tables/T1:_Standard_Thermodynamic_Quantities
- Wagman et al., The NBS tables of chemical thermodynamic properties, J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) (HSO₄⁻(aq) −887.34, SO₄²⁻(aq) −909.27, HF(ao) −320.08, CH₃COOH(ao) −485.76, NH₃(ao) −80.29 kJ/mol): https://srd.nist.gov/JPCRD/jpcrdS2Vol11.pdf
- Hefter and Gumiński, Critical evaluation of thermodynamic data for sulfate complexes in aqueous solution, Part 1: H⁺ (IUPAC Technical Report), Pure Appl. Chem. 2024, DOI 10.1515/pac-2024-0304
- Wikipedia, Standard enthalpy of formation (H₂O(l), OH⁻(aq) values): https://en.wikipedia.org/wiki/Standard_enthalpy_of_formation
- Wikipedia, Sulfuric acid (pKa2 1.99): https://en.wikipedia.org/wiki/Sulfuric_acid
- Olofsson and Hepler, Thermodynamics of ionization of water over wide ranges of temperature and pressure, J. Solution Chem. 4 (1975) 127 to 143 (ΔCp of ionisation of water)
- Wikipedia, Julius Thomsen (Thermochemische Untersuchungen, 1882 to 1886): https://en.wikipedia.org/wiki/Julius_Thomsen
- IUPAC Gold Book, standard reaction enthalpy (sign convention): https://goldbook.iupac.org/terms/view/S05925
- NESA HSC exam papers and marking guidelines (significant-figure practice in calorimetry items): https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers

## Verdict

**Ready to voice after fixes** (S1 and S2 before recording; M1 to M3 are author-note edits).

## Resolution (19 Oct)

Applied in `lessons/chem-m6-c03.md` Revision 2 (19 Oct).

- **S1, applied:** final answers are −54 kJ/mol (WE1), −55 kJ/mol (WE2) and −56 kJ/mol (A1), crossed −46 kJ/mol, in narration, chips, key note, "Numbers used" and "Numbers to verify"; intermediates stay unrounded (scene 7 tag); scene 9 says once why it rounds; author note (e) rewritten.
- **S2, applied:** scene 4's stack is "HCl + NaOH", "HNO₃ + KOH", "HNO₃ + NaOH"; author note (f) now states the HSO₄⁻ chemistry (Ka2 about 1.0 × 10⁻², about −78 kJ/mol for HSO₄⁻ + OH⁻) and that no −57 claim is made for sulfuric acid. WE2 keeps H₂SO₄ for counting and the per-mole-of-water trap; the Ba(OH)₂ alternative is recorded under Open decisions for the project manager.
- **M1, applied:** author note (a) explains −57 against −55.8 by temperature.
- **M2, applied:** the WE2 plausibility line is rewritten.
- **M3:** no change (assumption already stated on screen and in author note d).

No em dashes (U+2014 count 0).
