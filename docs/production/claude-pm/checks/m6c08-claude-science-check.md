# m6c08 science check (chem-m6-c08, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 19 Oct 2026.
Inspected: `lessons/chem-m6-c08.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (19 Oct): the square-root shortcut x = √(Kc), the full equation x = (−K + √(K² + 4Kc)) / 2, the percentage x ÷ c, and each pH and pOH. Reference sources consulted 19 Oct 2026 and listed at the end. No audio, stills or site files were changed.

## Syllabus dotpoint (checked word for word)

Ledger entry `C6-IQ2-02` (Module 6, "What is the role of water in solutions of acids and bases?", Using Brønsted–Lowry Theory, page 53): "calculate pH, pOH, hydrogen ion concentration ([H+]) and hydroxide ion concentration ([OH–]) for a range of solutions (ACSCH102)".

Design text (line 9 and the YouTube description) matches word for word, including "[OH–]" and the code. Page 53 matches. The design correctly calls the ID a local catalogue ID. C10's dotpoint "calculate and apply the dissociation constant (Ka) and pKa" is quoted correctly in the boundary as the reason Ka from a measured pH moves there.

## Em dashes

None found (U+2014 count 0).

## Reference values (all at 25 °C)

| Claim in design | Verdict | Source |
| --- | --- | --- |
| Propanoic acid Ka 1.3 × 10⁻⁵ (tables 1.3 to 1.4 × 10⁻⁵; pKa 4.87 to 4.89) | Correct. CRC gives pKa 4.87 (Ka 1.35 × 10⁻⁵); the site's 1.3 × 10⁻⁵ is within rounding. With 1.35 × 10⁻⁵ the pH of 0.150 mol/L is 2.847 (shortcut) and 2.849 (full), so the hook's meter reading 2.85 is realistic (M1). | CRC Handbook, Dissociation constants of organic acids and bases |
| Methanoic acid Ka 1.8 × 10⁻⁴ | Correct (pKa 3.75). Same value as Module 5 C10. | CRC; LibreTexts Ka table |
| HF Ka 6.8 × 10⁻⁴ (tables 6.3 to 7.2 × 10⁻⁴) | Correct as a common textbook value (CRC pKa 3.20, 6.3 × 10⁻⁴). The learner copy says only "about eight percent": 8.2% with 6.8 × 10⁻⁴ and 7.9% with 6.3 × 10⁻⁴ (shortcut), so the claim holds for either value. | CRC; LibreTexts |
| Ammonia Kb 1.8 × 10⁻⁵ | Correct (pKb 4.75). | CRC; LibreTexts Kb table |
| Methylamine Kb 4.4 × 10⁻⁴ (pKb 3.36) | Correct as a common textbook value (CRC pKa of CH₃NH₃⁺ 10.66 gives pKb 3.34, Kb 4.6 × 10⁻⁴; the answer pH 12.12 is unchanged to two decimal places with either: 12.12 and 12.13 shortcut, 12.12 full). | CRC; LibreTexts |
| Formic acid in the venom of formicine ants; "some ant stings" | Correct and suitably limited (as Module 5 C10 author note i). | standard entomology references |
| Ignoring water's 1.0 × 10⁻⁷ mol/L in the ICE table | Correct: every x here is at least 1.4 × 10⁻³ mol/L, more than 10⁴ times larger. | (calculation) |

## Chemistry claims and equations

| Equation as on screen | Atoms and charge | States | Verdict |
| --- | --- | --- | --- |
| CH₃CH₂COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃CH₂COO⁻(aq) (scenes 2, 3) | C 3/3, H 8/8, O 3/3; charge 0 = 0 | correct | OK |
| Ka = [H₃O⁺][CH₃CH₂COO⁻] / [CH₃CH₂COOH] | correct, water left out | n/a | OK |
| NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq) (scene 7) | N 1/1, H 5/5, O 1/1; charge 0 = 0 | correct | OK |
| CH₃NH₂(aq) + H₂O(l) ⇌ CH₃NH₃⁺(aq) + OH⁻(aq) (feedback 2) | C 1/1, H 7/7, N 1/1, O 1/1; charge 0 = 0 | correct | OK |
| HCOOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + HCOO⁻(aq) (answer key) | balanced | correct | OK |
| Key notes 1 and 4 (HA + H₂O ⇌ H₃O⁺ + A⁻; B + H₂O ⇌ BH⁺ + OH⁻) | balanced | **missing** | add states (learning review M2) |

Other claims:

- "At any moment only a small fraction of its molecules have given a proton to water": correct (0.93%).
- ICE rows c, 0, 0 / −x, +x, +x / c − x, x, x and Ka = x²/(c − x): correct for a monoprotic weak acid with water's own ions ignored.
- "Ka is tiny next to zero point one five zero, so x is tiny too": correct as a heuristic (x/c ≈ √(Ka/c)); the design's check of x ÷ c, never Ka/c as a percentage, is right and resolves the site errors.
- "the acid is still about zero point one four nine": 0.150 − 0.0014 = 0.1486 → 0.149 mol/L. Correct.
- Scene 6, "a failed check means solving the full equation, with the quadratic formula or your calculator's solver": correct; consistent with Module 5 C6b's approved wording. "Most HSC questions are written so the check passes" is the softer form already approved.
- Scene 5, "Fewer than one molecule in a hundred has ionised, which is why the strong acid method was so far off": correct (107-fold overestimate of [H₃O⁺]).
- New site corrections 1 to 5: checked. (1) x/c = √(Ka/c) = 0.93% for propanoic acid, correct. (2) the reversed direction of the overestimate, correct. (3) CO₃²⁻ at 0.050 mol/L with Kb 2.1 × 10⁻⁴: shortcut x = 3.24 × 10⁻³ (6.5%), full x = 3.14 × 10⁻³, pOH 2.50, pH 11.50: correct. (4) 0.0400 mol/L HCN (Ka 6.2 × 10⁻¹⁰): x = 4.98 × 10⁻⁶, factor about 8,000, correct. (5) the garbled clause, correct as a reading point.

## Arithmetic and decimal places

Rule (C07, Revision 2 wording): pH or pOH decimal places = significant figures in [H₃O⁺] or [OH⁻]. For the weak cases x is limited to two figures by Ka or Kb.

| Item | Design value | Recomputed | Correct to the rule |
| --- | --- | --- | --- |
| Hook strong method | **0.82** | −log 0.150 = 0.82391 | **0.824** (0.150 has 3 s.f.) |
| Hook ratio | about 100 × | 0.150 ÷ 1.3964 × 10⁻³ = 107 | "about a hundred" fine |
| WE1 x² | 1.95 × 10⁻⁶ | 1.95 × 10⁻⁶ | same |
| WE1 x | 1.396 × 10⁻³ → 1.4 × 10⁻³ mol/L | 1.39642 × 10⁻³ | 1.4 × 10⁻³ |
| WE1 check | 0.93% | 0.931% | 0.93% |
| WE1 pH | 2.85 | 2.85498 (from 1.4 × 10⁻³: 2.85387) | 2.85 |
| WE1 full equation | 1.3899 × 10⁻³, pH 2.857 | 1.38994 × 10⁻³, 2.85700 | 2.86 (author note only) |
| WE1 acid at equilibrium | 0.149 mol/L | 0.14860 | 0.149 |
| HF | 8.2%; full 7.9 × 10⁻³ | 8.246%; full x 7.913 × 10⁻³ (7.9%, still over 5%) | "about eight percent" |
| NH₃ x | 1.897 × 10⁻³ → 1.9 × 10⁻³ | 1.89737 × 10⁻³ | 1.9 × 10⁻³ |
| NH₃ check | 0.95% | 0.949% | 0.95% |
| NH₃ pOH, pH | 2.72; 11.28 | 2.72185; 11.27815 (full 11.27609) | 2.72; 11.28 |
| A1 x², x | 3.6 × 10⁻⁵; 6.0 × 10⁻³ | 3.6 × 10⁻⁵; 6.000 × 10⁻³ | same |
| A1 check | 3.0% | 3.000% | 3.0% |
| A1 pH | 2.22 | 2.22185 | 2.22 |
| A1 full equation | 5.91 × 10⁻³, pH 2.228 → 2.23 | 5.9107 × 10⁻³, 2.22836 | 2.23 (see S2) |
| A1 crossed | **0.70** | −log 0.200 = 0.69897 | **0.699** |
| A2 x | 1.33 × 10⁻² → 1.3 × 10⁻² | 1.32665 × 10⁻² | 1.3 × 10⁻² |
| A2 check | 3.3% | 3.317% | 3.3% |
| A2 pOH, pH | 1.88; 12.12 | 1.87724; 12.12276 (full x 1.3048 × 10⁻², pH 12.11555) | 1.88; 12.12 |
| A2 crossed | **13.60** | 14.00 + log 0.400 = 13.60206 | **13.602** |

## Findings

### S1. Should fix: strong-method values break the strict decimal-places rule (project manager decision 2)

- Exact text: hook "so the pH is **zero point eight two**", screen "0.82", main question "predicts 0.82", scene 5 crossed "0.82"; feedback 1 "gives zero point seven zero", chip "pH 0.70"; feedback 2 chip "pH 13.60"; "Numbers used", "Numbers to verify", Decisions and the YouTube description.
- Corrected values: 0.824, 0.699, 13.602 (table above). Every weak-acid and weak-base answer already follows the rule applied to x.

### S2. Should fix: author note (d) and the A1 open decision claim 0.400 mol/L would give exact agreement; it does not

- Exact text (author note d): "If the science check prefers exact agreement, change A1 to 0.400 mol/L (x 8.5 × 10⁻³, 2.1%, pH 2.07 shortcut and 2.08 exact)"; Open decisions: "alternative 0.400 mol/L if the science check wants exact agreement".
- Problem: at 0.400 mol/L the shortcut gives 2.0713 (2.07) and the full equation 2.0759 (2.08), so the two still differ by 0.01, as the note's own numbers show. A scan of 0.050 to 0.500 mol/L found the pair agreeing only by rounding luck; the gap is the expected shortcut error (about 0.005 to 0.007 pH at 2 to 3% ionised), which is inside the precision of a two-figure Ka (a change of 0.05 × 10⁻⁴ in Ka shifts the pH by about 0.006).
- Decision (project manager decision 6, reviewer's call): keep 0.200 mol/L (clean x 6.0 × 10⁻³, 3.0%) and state the tolerance in feedback 1: "The full equation gives two point two three, only point zero one away", with the tag "full equation: 2.23 (shortcut within 0.01)". No marking claim. Rewrite author note (d) and the open decision accordingly.

### M1. Minor: record the CRC propanoic acid value in author note (a)

- Add: with pKa 4.87 (Ka 1.35 × 10⁻⁵) the equilibrium pH of 0.150 mol/L is 2.85 by both methods (2.847, 2.849), so the hook's meter reading is realistic. Author note only.

### M2. Minor: state symbols in key notes 1 and 4

- As learning review M2.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger: `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ2-02 (and the C10 dotpoint quoted in the boundary)
- CRC Handbook of Chemistry and Physics, Dissociation constants of organic acids and bases; Dissociation constants of inorganic acids and bases (propanoic pKa 4.87, formic 3.75, HF 3.20, NH₄⁺ 9.25, CH₃NH₃⁺ 10.66)
- LibreTexts Reference Tables, Equilibrium Constants: E1 Acid Dissociation Constants at 25 °C and E2 Base Dissociation Constants at 25 °C (chem.libretexts.org, Ancillary Materials, Reference Tables)
- Local designs: `lessons/chem-m5-c10.md` (Ka and Kb values, author note i on formic acid), `lessons/chem-m5-c06b.md` (5% rule of thumb, quadratic wording)

## Verdict

**Ready to voice after fixes** (S1 and S2 before recording; M1 and M2 are cheap).

## Resolution (19 Oct)

Applied in `lessons/chem-m6-c08.md` Revision 2 (19 Oct).

- **S1, applied:** 0.824 in the hook narration ("zero point eight two four") and screen, main question, cause chain, Decisions, scene 5 crossed chip, numbers tables and YouTube description; feedback 1 says "zero point six nine nine" with chip "pH 0.699"; feedback 2 chip "pH 13.602".
- **S2, applied:** A1 stays at 0.200 mol/L; feedback 1 states the full-equation value 2.23 in one clause and a tag; author note (d) and Open decisions record that 0.400 mol/L gives 2.07 against 2.08.
- **M1, applied:** author note (a) records the CRC value and the 2.847 and 2.849 results.
- **M2, applied:** key notes 1 and 4 carry state symbols.

No em dashes (U+2014 count 0).
