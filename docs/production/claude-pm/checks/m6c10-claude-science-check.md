# m6c10 science check (chem-m6-c10, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 20 Oct 2026.
Inspected: `lessons/chem-m6-c10.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (20 Oct; `math.log10`, `math.sqrt`, the exact quadratic for weak-acid checks). Site lesson 12 quotes in the corrections list were spot-checked against `C:/Users/kygs/hscscience/subjects/chemistry/year12/module6/lesson12.sa.html` ("~7.6%", "~0.00025%", "10⁷", "Kb ≈ 10⁻²¹", the three "Ka1/c" percentage lines): all present as quoted. The bank aids (golf; "Ka × Kb = Kw for a conjugate pair", marked Extension) were confirmed in `docs/production/module6-memory-aids-2026-10-11.md`. Sources consulted 20 Oct 2026 are listed at the end. No audio, stills or site files were changed.

## Syllabus dotpoint (checked word for word)

Ledger entry `C6-IQ3-04` (Module 6, "How are solutions of acids and bases analysed?", Quantitative Analysis, page 53): "calculate and apply the dissociation constant (Ka) and pKa (pKa = -log10 (Ka)) to determine the difference between strong and weak acids (ACSCH098)".

Design text (line 9 and the YouTube description) matches word for word, including the hyphen-minus in "-log10" as printed. Page 53 matches. The route's "subject to syllabus-source check" is satisfied. The dotpoint's "difference between strong and weak acids" is addressed in scene 8 (see S1).

## Em dashes

None found (U+2014 count 0). Minus signs are U+2212.

## Reference values

| Claim in design | Verdict | Source |
| --- | --- | --- |
| Ethanoic acid Ka 1.8 × 10⁻⁵ (pKa 4.74) at 25 °C | Correct (1.75 × 10⁻⁵, pKa 4.76 in CRC; 1.8 × 10⁻⁵ is the HSC value) | CRC dissociation constants |
| Methanoic acid Ka 1.8 × 10⁻⁴ (pKa 3.74, "some tables 3.75") | Correct (1.77 × 10⁻⁴, pKa 3.75) | CRC |
| HF Ka 6.8 × 10⁻⁴ (pKa 3.17) | Correct (pKa 3.17 to 3.20 quoted) | CRC; M5 C10 |
| HCN Ka 6.2 × 10⁻¹⁰ (pKa 9.21) | Correct | CRC; M5 C10 |
| Lactic acid Ka 1.38 × 10⁻⁴, pKa 3.86 | Correct; a 0.200 mol/L solution at Ka 1.38 × 10⁻⁴ has pH 2.285, so the question's 2.28 is realistic | CRC (lactic acid pKa 3.86) |
| Kw 1.0 × 10⁻¹⁴ at 25 °C | Correct (HSC value) | CRC; C07 check |
| Strong acids: levelled in water; tables give estimates or list as strong (note e; pKa about −6 to −10 for HCl and HI, −1.4 for HNO₃) | Correct as an author note; must not reach learner copy as numbers (S1) | Trummal et al. 2016 (HCl, HI estimates); CRC (HNO₃ −1.4) |
| HSO₄⁻ pKa about 2.0; oxalic acid pKa₁ about 1.2 ("weak acids have Ka much less than 1") | Correct (1.99; 1.25) | CRC; IUPAC sulfate review (Hefter and Gumiński 2024) |
| HX Ka 5.7 × 10⁻⁵ close to benzoic acid (6.3 × 10⁻⁵) | Correct; leaving HX unnamed is right | CRC |
| Lactic acid "forms when milk turns sour" | Correct (lactic acid bacteria ferment lactose) | standard food chemistry |
| Kb(CN⁻) 1.6 × 10⁻⁵ (site card 2 agrees) | Correct | (calculation) |

## Chemistry claims and equations

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| HX(aq) + H₂O(l) ⇌ H₃O⁺(aq) + X⁻(aq) (2, 3) | balanced; 0 = 0 | correct | OK |
| Ka = [H₃O⁺][X⁻] / [HX] (water left out) | correct expression | n/a | OK |
| CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq) (9) | C 2/2, H 6/6, O 3/3; 0 = 0 | correct | OK |
| CH₃COO⁻(aq) + H₂O(l) ⇌ CH₃COOH(aq) + OH⁻(aq) (9) | C 2/2, H 5/5, O 3/3; −1 = −1 | correct | OK |
| Kb = [CH₃COOH][OH⁻] / [CH₃COO⁻]; Ka × Kb = [H₃O⁺][OH⁻] = Kw | the two equations sum to 2H₂O ⇌ H₃O⁺ + OH⁻; the cancellation is algebraically correct | n/a | OK |

Other claims:

- Scene 1 and 5: pH depends on both Ka and c; HX (Ka 5.7 × 10⁻⁵ at 0.0500 mol/L) gives a higher pH than ethanoic acid (Ka 1.8 × 10⁻⁵ at 0.500 mol/L): correct (2.78 against 2.52).
- Scene 2: "The bigger K a is, the further the acid ionises, whatever its concentration." As worded, "whatever its concentration" attaches to how far the acid ionises, which does depend on concentration (percentage ionised rises on dilution: about 3.3% for HX at 0.0500 mol/L, but only about 1.1% at 0.500 mol/L by the square-root estimate). Ka itself does not change with concentration (S2).
- Scene 3: "A strong acid would give hydronium equal to its concentration": correct for a monoprotic strong acid.
- Scene 4: [X⁻] = [H₃O⁺] assumes water's own hydronium is negligible (1.0 × 10⁻⁷ against 1.66 × 10⁻³): correct. No 5% approximation is needed (exact c − x): correct.
- Scene 7: "each step of one in p K a is a factor of ten in K a": correct.
- Scene 8: "A weak acid ... K a ... much less than one, which gives a positive p K a": correct for every weak acid in the HSC course. "Its K a is too large to measure in water, and tables list it as strong, or with a negative p K a": the last clause and the ruler label "pKa below 0" attach estimated numbers to strong acids, contrary to project manager decision 6, and "too large to measure" next to "tables list ... a negative pKa" reads as a contradiction (S1).
- Scene 10: "a stronger acid has a weaker conjugate base", for a conjugate pair at fixed temperature: correct. "Multiplying ethanoic acid's K a by ammonia's K b means nothing": the product (1.8 × 10⁻⁵ × 1.8 × 10⁻⁵ = 3.2 × 10⁻¹⁰) is a defined number, related to K for CH₃COOH + NH₃ through Kw; it is simply not Kw (M1).
- Fixed-product bar (scene 10): on a log ruler from 10⁻¹⁴ to 10⁰, Ka's segment length is 14 − pKa and Kb's is pKa (= 14 − pKb), so the two always fill 14 units: correct. HX teal 9.76 and violet 4.24; ethanoic acid 9.26 and 4.74; "HX teal longer, violet shorter" is right.
- Site corrections (Decisions, new 1 to 6) recomputed: new 1, HF 0.1 mol/L exact 7.91% (7.63% for Ka 6.3 × 10⁻⁴): correct. New 2, H₂CO₃ 2.07 × 10⁻⁴ mol/L, 0.21%; HCN 7.87 × 10⁻⁶, 0.0079%: correct. New 3, strong-acid wording: correct. New 4, H₃PO₄ 0.0800 mol/L: √(Ka/c) = 30.6%, quadratic x = 2.10 × 10⁻² mol/L (26.3%), pH 1.677 → 1.68: correct. New 5 and 6 are wording points and are reasonable. Draft correction 5 (carbonic acid pH 4.68) was not recomputed, because the concentration is not given in the design.

## Arithmetic and significant figures

Every calculation re-done by script. Rule: concentrations from a pH carry as many significant figures as the pH has decimal places; pKa decimal places = significant figures in Ka.

| Item | Design value | Recomputed | Correct to the rule |
| --- | --- | --- | --- |
| Hook ethanoic acid 0.500 mol/L | x 3.0 × 10⁻³; pH 2.52 (exact 2.524) | √(9.0 × 10⁻⁶) = 3.00 × 10⁻³, pH 2.5229; quadratic 2.991 × 10⁻³, pH 2.5242 | 2.52 |
| Concentration ratio | 10 × | 0.500 ÷ 0.0500 = 10 | yes |
| WE [H₃O⁺] | 10⁻²·⁷⁸ = 1.66 × 10⁻³ mol/L (kept; 2 s.f. if reported) | 1.6596 × 10⁻³ | kept digits, labelled |
| WE percentage | 3.3% | 3.32% | "about three percent" |
| WE [HX] | 0.0483 mol/L | 0.048340 | yes |
| WE Ka | 5.70 × 10⁻⁵ → 5.7 × 10⁻⁵ | 5.6976 × 10⁻⁵ (5.705 × 10⁻⁵ from the shown 1.66 and 0.0483) | 5.7 × 10⁻⁵ |
| Round-first trap | 5.98 × 10⁻⁵ | 5.983 × 10⁻⁵ | (author note) |
| pKa HX | 4.24 | 4.2443 (4.2441 from 5.7 × 10⁻⁵) | 4.24 either way |
| pKa ethanoic acid | 4.74 | 4.7447 | 4.74 |
| Ka ratio and pKa gap | about 3 ×; 0.50 → 10⁰·⁵⁰ ≈ 3.2 | 3.165; 3.162 | yes |
| Strong acid at 0.0500 mol/L (author only) | pH 1.301 | 1.30103 | yes |
| Kb ethanoate | 5.6 × 10⁻¹⁰ | 5.556 × 10⁻¹⁰ | 5.6 × 10⁻¹⁰ |
| Kb X⁻ | 1.8 × 10⁻¹⁰ | 1.755 × 10⁻¹⁰ (1.754 from 5.7 × 10⁻⁵) | 1.8 × 10⁻¹⁰ |
| A1 [H₃O⁺] | 5.25 × 10⁻³ mol/L | 5.2481 × 10⁻³ | kept digits |
| A1 [HA] | 0.195 mol/L | 0.19475 | yes |
| A1 Ka | 1.41 × 10⁻⁴ → 1.4 × 10⁻⁴ | 1.4142 × 10⁻⁴ (1.4135 × 10⁻⁴ from the shown values) | 1.4 × 10⁻⁴ |
| A1 pKa | 3.85 | 3.8495 (3.8508 from 1.41 × 10⁻⁴; 3.8539 from 1.4 × 10⁻⁴) | 3.85 either way |
| A1 percentage | 2.6% | 2.62% | yes |
| A1 crossed | Ka = 5.2 × 10⁻³ | 10⁻²·²⁸ = 5.2 × 10⁻³ (2 s.f.) | correct as the slip |
| A2 Ka from pKa | 6.76 × 10⁻⁴; 1.82 × 10⁻⁴; 6.2 × 10⁻¹⁰ | 6.761 × 10⁻⁴; 1.820 × 10⁻⁴; 6.166 × 10⁻¹⁰ | 2 s.f. from 2 d.p. |
| A2 pKa from the Ka sources | 3.17; 3.74; 9.21 | 3.1675; 3.7447; 9.2076 | yes |
| A2 ranking | HF > HCOOH > HCN; strongest base CN⁻ | lowest pKa strongest | yes |
| A2 Kb(CN⁻) | 1.6 × 10⁻⁵ | 1.622 × 10⁻⁵ (1.613 × 10⁻⁵ from 6.2 × 10⁻¹⁰) | 1.6 × 10⁻⁵ |

## Findings

### S1. Should fix: no number of any kind for strong acids (project manager decision 6)

- Exact text (scene 8): "Its K a is too large to measure in water, and tables list it as **strong**, or with a negative p K a."; ruler label "pKa below 0"; tag "tables: 'strong', or estimated pKa < 0"; author note e "The video says ... or with a negative pKa".
- Problem: strong acids are levelled in water, so their aqueous Ka values are estimates by other methods, not measurements; quoting a negative pKa range next to "too large to measure" attaches a number scale the decision excludes, and invites the "what is HCl's pKa?" question the video cannot answer properly.
- Replacement: "Its K a is too large to measure in water, so tables simply list it as **strong**."; one hatched zone "strong: too large to measure in water" with no Ka or pKa numbers; remove the tag; note e records the decision. Key note 4 ("no measurable Ka in water") already complies.

### S2. Should fix: scene 2 implies how far an acid ionises does not depend on concentration

- Exact text: "The bigger K a is, the further the acid ionises, whatever its concentration."
- Problem: percentage ionisation depends on concentration (HX: 3.3% at 0.0500 mol/L, about 1.1% at 0.500 mol/L); Ka does not (at fixed temperature). The sentence states the wrong one.
- Replacement: "K a doesn't change with concentration, and the bigger it is, the further the acid ionises at the **same concentration**." Key note 1: "Ka measures an acid's tendency to ionise; its value does not depend on concentration (at a given temperature)."

### M1. Minor: "means nothing" for a non-conjugate product (scene 10)

- Replacement: "Multiplying ethanoic acid's K a by ammonia's K b doesn't give K w."

### M2. Minor (no change needed): lactic acid pKa 3.85 against the tabulated 3.86

- The question's data (0.200 mol/L, pH 2.28) give 3.85; the tabulated value gives pH 2.285. The question's own data decide the answer, as in HSC questions. No learner change.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger: `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ3-04
- CRC Handbook of Chemistry and Physics, Dissociation constants of organic acids in aqueous solution, and of inorganic acids and bases (ethanoic, methanoic, lactic, benzoic, oxalic acids; HF, HCN, HNO₃)
- Trummal, A., Lipping, L., Kaljurand, I., Koppel, I. A. and Leito, I., Acidity of strong acids in water and dimethyl sulfoxide, J. Phys. Chem. A 120 (2016) 3663 to 3669 (estimated aqueous pKa of HCl and HI)
- Hefter and Gumiński, Critical evaluation of thermodynamic data for sulfate complexes in aqueous solution, Part 1: H⁺ (IUPAC Technical Report), Pure Appl. Chem. 2024, DOI 10.1515/pac-2024-0304 (HSO₄⁻ pKa about 1.99)
- LibreTexts, Relative strengths of conjugate acid-base pairs (Ka × Kb = Kw for a conjugate pair): https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/16%3A_Acid-Base_Equilibria/16.08%3A_Relationship_Between_Ka_and_Kb

## Verdict

**Ready to voice after fixes** (S1 and S2 before recording; M1 is a cheap wording change; M2 needs no change).

## Resolution (20 Oct)

Applied in `lessons/chem-m6-c10.md` Revision 2 (20 Oct).

- **S1, applied:** scene 8 narration "so tables simply list it as **strong**"; one hatched zone with no numbers; the tag removed; author note e and Open decisions record the decision. No numeric Ka or pKa for a strong acid remains in learner copy.
- **S2, applied:** scene 2 and key note 1 reworded as above; the scene 2 cue moves to "same concentration".
- **M1, applied:** "doesn't give K w".
- **M2:** no change.

No em dashes (U+2014 count 0).
