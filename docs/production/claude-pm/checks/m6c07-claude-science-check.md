# m6c07 science check (chem-m6-c07, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 19 Oct 2026.
Inspected: `lessons/chem-m6-c07.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (19 Oct; `math.log10`, `math.sqrt`, the quadratic for HSO₄⁻). Web and reference sources consulted 19 Oct 2026 and listed at the end. No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

Ledger entry `C6-IQ2-02` (Module 6, "What is the role of water in solutions of acids and bases?", Using Brønsted–Lowry Theory, page 53): "calculate pH, pOH, hydrogen ion concentration ([H+]) and hydroxide ion concentration ([OH–]) for a range of solutions (ACSCH102)".

Ledger entry `C6-IQ2-06` (same inquiry question and section, page 53): "calculate the pH of the resultant solution when solutions of acids and/or bases are diluted or mixed".

Design text (lines 9 and 11, and the YouTube description) matches both word for word, including the en dash in "[OH–]" and the content-description code. Page 53 matches the ledger. The design correctly says the IDs are local catalogue IDs, not printed codes.

## Em dashes

None found (U+2014 count 0). Minus signs are U+2212.

## Reference values

| Claim in design | Verdict | Source |
| --- | --- | --- |
| Kw = 1.0 × 10⁻¹⁴ at 25 °C (1.01 × 10⁻¹⁴ in CRC data) | Correct. pKw 13.995 gives 1.01 × 10⁻¹⁴; HSC data sheet and questions use 1.0 × 10⁻¹⁴. | CRC Handbook, "Ion product of water substance" (Marshall and Franck 1981); Bandura and Lvov 2006 |
| 10 °C: Kw 2.9 × 10⁻¹⁵, neutral pH 7.27 | Correct. pKw 14.535 gives 2.92 × 10⁻¹⁵; ½ pKw = 7.27. | Marshall and Franck 1981 (CRC); ausetute Kw table (2.93 × 10⁻¹⁵) |
| 37 °C: Kw 2.4 × 10⁻¹⁴, neutral pH 6.81 | Correct. Interpolating pKw between 35 °C (13.680) and 40 °C (13.535) gives 13.622, Kw 2.39 × 10⁻¹⁴, ½ pKw 6.81. | Marshall and Franck 1981 (CRC) |
| 50 °C: 5.5 × 10⁻¹⁴, 6.63 (author note only) | Correct. pKw 13.262, 5.47 × 10⁻¹⁴. | Marshall and Franck 1981; ausetute (5.48 × 10⁻¹⁴) |
| 60 °C: Kw 9.6 × 10⁻¹⁴, neutral pH 6.51; ions 3.1 × 10⁻⁷ mol/L | Correct. pKw 13.017 gives 9.62 × 10⁻¹⁴; ½ pKw 6.51; √(9.6 × 10⁻¹⁴) = 3.10 × 10⁻⁷. | Marshall and Franck 1981 (CRC) |
| Neutral pH = ½ pKw at each temperature | Correct (equal ions, so each is √Kw). The design's checks 7.269, 6.810, 6.630, 6.509 reproduced exactly. | (definition) |
| Self-ionisation endothermic, about +56 kJ/mol | Correct: the reverse of H⁺ + OH⁻ → H₂O (−55.8 kJ/mol at 25 °C). | NBS tables (Wagman et al. 1982) |
| HSO₄⁻ is a weak acid, Ka₂ about 1.2 × 10⁻² | Correct (pKa₂ about 1.99; values 1.0 × 10⁻² to 1.2 × 10⁻² are quoted). | Hefter and Gumiński 2024 (IUPAC); Wikipedia, Sulfuric acid |
| 0.010 mol/L H₂SO₄ gives pH about 1.84, not 1.70 (Open decisions) | Correct. Solving (0.010 + y)y/(0.010 − y) = Ka₂: Ka₂ 1.2 × 10⁻² gives [H⁺] 0.0145 mol/L, pH 1.84; Ka₂ 1.0 × 10⁻² gives 0.0141 mol/L, pH 1.85; the 2c assumption gives 1.70. | (calculation) |
| Ba(OH)₂ at 0.0800 mol/L and Ca(OH)₂ at 0.0040 mol/L fully dissolved | Plausible: both are below solubility (Ca(OH)₂ about 0.02 mol/L at 25 °C; Ba(OH)₂ roughly 0.2 mol/L at 20 °C). | CRC solubility tables |
| Car battery acid roughly 4 to 5 mol/L (new correction 4) | Correct: lead-acid electrolyte is about 30 to 37% w/w (specific gravity 1.22 to 1.28), about 4.2 to 5 mol/L. | CRC density table for aqueous H₂SO₄ (from the specific gravity range); Codex to confirm, as the design asks |

## Chemistry claims and equations

All equations balance in atoms and charge (checked independently).

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| HNO₃(aq) + H₂O(l) → H₃O⁺(aq) + NO₃⁻(aq) (scene 3) | H 3/3, N 1/1, O 4/4; charge 0 = 0 | correct | OK |
| H₂O(l) + H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq) (scenes 5, 6) | balanced; charge 0 = 0 | correct | OK |
| Kw = [H₃O⁺][OH⁻] (water left out) | correct expression | n/a | OK |
| Ca(OH)₂(aq) → Ca²⁺(aq) + 2OH⁻(aq) (scene 8) | Ca 1/1, O 2/2, H 2/2; charge 0 = +2 − 2 | (aq) fine for a dissolved solution below solubility (C05 used (s) for the dissolving step) | OK |
| H⁺(aq) + OH⁻(aq) → H₂O(l) (scene 11) | balanced; charge 0 = 0 | correct | OK |

Other claims:

- "Hydrochloric acid is strong, so every molecule gives its proton to water": correct for dilute solutions.
- Scene 3, "in a pH, the number before the decimal point only shows the power of ten": correct as a Year 12 statement. Strictly, for [H₃O⁺] = a × 10⁻ⁿ with 1 ≤ a < 10, pH = n − log a, so the whole-number part is n − 1 (or n when a = 1) and the decimal part carries the significant figures of a. The tie lines (the 1 to 10⁻², the .60 to 2.5) show this correctly. No change.
- "add hydroxide, and the equilibrium shifts back, using up hydronium, until the product is ten to the minus fourteen again": correct (Le Chatelier and constant K at fixed temperature).
- "Water splitting into ions absorbs heat, so warming pushes the equilibrium right and K w grows"; "It's still neutral, because its hydronium still equals its hydroxide": correct.
- pH + pOH = 14 at 25 °C from −log Kw: correct (pKw 14.00 with Kw = 1.0 × 10⁻¹⁴, treated as exact, as in HSC questions).
- Dilution "never past it, because water supplies its own hydronium": correct in the HSC sense; author note (e) correctly limits it (for an acid [H₃O⁺] > 1.0 × 10⁻⁷ mol/L at 25 °C).
- Mixing: volumes assumed additive; spectator ions Cl⁻ and Ba²⁺ do not affect pH; BaCl₂ is soluble, so no precipitate: correct.
- Revision 1 has **no sulfuric acid line**, so the project manager's decision 1 is not yet met, and scene 18's "count the hydrogen or hydroxide ions per formula" implies [H⁺] = 2c as a fact (S1).
- Site corrections (Decisions): checked. New correction 2 (4.0 × 10⁻⁴ and 2.5 × 10⁻¹¹ at two figures) correct; new correction 3 (1 − 10⁻⁰·¹¹ = 0.224, about 22%) correct; new correction 5 (0.200 mol/L acetic acid, Ka 1.8 × 10⁻⁵: pH 2.72) correct; new corrections 1, 6, 8 and 9 correct as stated; new correction 7 is a sourcing point, not science, and is reasonable.

## Arithmetic and decimal places

Every calculation re-done by script. Rule: pH (or pOH) decimal places = significant figures in [H₃O⁺] (or [OH⁻]); 14 treated as exact.

| Item | Design value | Recomputed | Correct to the rule |
| --- | --- | --- | --- |
| Hook acid | pH 1.00 | −log 0.10 = 1.000 | 1.00 |
| Hook base | 1.0 × 10⁻¹³ mol/L, pH 13.00 | 1.0 × 10⁻¹⁴ ÷ 0.10 = 1.0 × 10⁻¹³; 13.000 | 13.00 |
| WE1 | 1.602 → 1.60 | 1.60206 | 1.60 |
| Reverse | 3.98 × 10⁻⁴ → 4.0 × 10⁻⁴ mol/L | 3.981 × 10⁻⁴ | 4.0 × 10⁻⁴ |
| Pure water 25 °C | 1.0 × 10⁻⁷, pH 7.00 | 7.000 | 7.00 |
| WE2 | 0.0080; pOH 2.097 → 2.10; pH 11.90 | 2.09691; 11.90309 | 2.10; 11.90 |
| Dilution n, c | 0.00500 mol; 0.0100 mol/L | 0.00500; 0.0100 | same |
| Dilution pH | 2.000 | 2.0000 | 2.000 |
| Dilution "before" | **0.70** | −log 0.200 = 0.69897 | **0.699** |
| Dilution rise | **+1.3** | 2.000 − 0.699 = 1.30103 = log 20 | **+1.301** |
| WE3 n | 0.00600; 0.00960; excess OH⁻ 0.00360 mol | same | same |
| WE3 | 0.0360 mol/L; pOH 1.444; pH 12.556 | 1.44370; 12.55630 | 1.444; 12.556 |
| WE3 crossed (÷ 0.0400 L) | **12.95** | 0.0900 mol/L; 12.95424 | **12.954** |
| A1 n | 0.00300; 0.00175; excess H⁺ 0.00125 mol | same | same |
| A1 | 0.02083 mol/L; pH 1.681 | 0.0208333; 1.68124 (−log 0.0208 = 1.68194, also 1.682 if rounded first: the design correctly uses the unrounded value) | 1.681 |
| A1 crossed (÷ 0.0250 L) | 1.301 | 0.0500 mol/L; 1.30103 | 1.301 |
| A2 | pOH 1.70; [OH⁻] 0.020 mol/L | 10⁻¹·⁷⁰ = 0.019953 | 0.020 mol/L |
| A2 crossed | 5.0 × 10⁻¹³ | 5.012 × 10⁻¹³ | 5.0 × 10⁻¹³ |
| Kw ladder | 7.27, 7.00, 6.81, 6.51 | 7.2688, 7.0000, 6.8099, 6.5089 | same |

## Findings

### S1. Should fix: the sulfuric acid condition is missing, and scene 18 implies [H⁺] = 2c (project manager decision 1)

- Exact text (scene 18): "count the hydrogen or hydroxide ions per formula"; screen "1 Strong? Then count H⁺ or OH⁻ per formula unit."
- Problem: H₂SO₄ releases its first H⁺ completely; HSO₄⁻ is a weak acid (Ka₂ about 1.0 × 10⁻² to 1.2 × 10⁻²), so [H⁺] < 2c (0.010 mol/L: pH 1.84, not 1.70).
- Replacement: the conditional line and chip in learning review S1. Required wording check: the learner line must say "only its first hydrogen ion comes off completely" and that 2c is used "only" when a question says to assume both are released; it must not say or show "H₂SO₄ → 2H⁺" as a fact. Scene 18 counts OH⁻ only.

### S2. Should fix: three shown values break the strict decimal-places rule (project manager decision 2)

- Exact text: scene 9 "pH 0.70 (grey label "before")", "× 20 dilution: +1.3"; scene 12 "gives twelve point nine five", chip "÷ 0.0400 L: pH 12.95"; "Numbers used" rows and "Numbers to verify" ("→ 12.95 (site value)").
- Corrected values: 0.699; +1.301 (log 20); 12.954. Every answer chip already follows the rule (table above).

### M1. Minor: word the rule for [H₃O⁺] rather than "the concentration"

- The precision link is between the significant figures of [H₃O⁺] (or [OH⁻]) and the decimal places of pH (or pOH). For a strong monoprotic acid they equal the stated concentration's figures, so C07's examples are unaffected, but C08's weak acid (0.150 mol/L, x to two figures from Ka) needs the [H₃O⁺] wording to stay consistent. Learning review S3 gives the replacement.

### M2. Minor (no change needed): Kw at 25 °C

- 1.0 × 10⁻¹⁴ is the HSC value; the more precise 1.01 × 10⁻¹⁴ (pKw 13.995) is already in author note (b). Neutral pH at 25 °C is then 6.998, which rounds to 7.00. No learner change.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger: `docs/production/programme/syllabus/chem-2017-y12.json`, entries C6-IQ2-02 and C6-IQ2-06
- Marshall, W. L. and Franck, E. U., Ion product of water substance, 0 to 1000 °C, 1 to 10,000 bars, J. Phys. Chem. Ref. Data 10 (1981) 295 to 304 (the CRC Handbook "Ion product of water" table: pKw 14.535 at 10 °C, 13.995 at 25 °C, 13.680 at 35 °C, 13.535 at 40 °C, 13.262 at 50 °C, 13.017 at 60 °C)
- Bandura, A. V. and Lvov, S. N., The ionization constant of water over wide ranges of temperature and density, J. Phys. Chem. Ref. Data 35 (2006) 15 to 30
- AUS-e-TUTE, Kw table (2.93 × 10⁻¹⁵ at 10 °C, 1.00 × 10⁻¹⁴ at 25 °C, 5.48 × 10⁻¹⁴ at 50 °C): https://www.ausetute.com.au/kw.html
- LibreTexts, The Ionic Product for Water (temperature table): https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Acid-Base_Equilibria/3._The_Ionic_Product_for_Water
- Wagman et al., The NBS tables of chemical thermodynamic properties, J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) (H₂O(l), OH⁻(aq) formation enthalpies)
- Hefter and Gumiński, Critical evaluation of thermodynamic data for sulfate complexes in aqueous solution, Part 1: H⁺ (IUPAC Technical Report), Pure Appl. Chem. 2024, DOI 10.1515/pac-2024-0304
- Wikipedia, Sulfuric acid (pKa₂ 1.99): https://en.wikipedia.org/wiki/Sulfuric_acid
- CRC Handbook of Chemistry and Physics, Concentrative properties of aqueous solutions (sulfuric acid density and molarity)

## Verdict

**Ready to voice after fixes** (S1 and S2 before recording; M1 is a wording change shared with the learning review; M2 needs no change).

## Resolution (19 Oct)

Applied in `lessons/chem-m6-c07.md` Revision 2 (19 Oct).

- **S1, applied:** scene 8 says "Sulfuric acid is different: only its first hydrogen ion comes off completely. HSC questions usually say to assume both do, and only then is the hydrogen ion concentration twice the acid's."; the chip reads "H₂SO₄: first H⁺ complete, second only partly." then "Only if the question says assume both H⁺ are released completely: [H⁺] = 2 × c." No equation shows 2H⁺ from H₂SO₄. Scene 18 counts OH⁻ only; key note 3 carries the condition; author note (d) records the HSO₄⁻ chemistry and the 1.84 against 1.70 values.
- **S2, applied:** 0.699, "+1.301 (= log 20)" and 12.954 in the shots, author note (c), "Numbers used" and "Numbers to verify"; the spoken wrong-volume value in scene 12 is removed (chip only).
- **M1, applied:** rule card and key note 1 read "significant figures in [H₃O⁺]"; scene 3 narration says "in the hydronium concentration".
- **M2:** no change.

No em dashes (U+2014 count 0).
