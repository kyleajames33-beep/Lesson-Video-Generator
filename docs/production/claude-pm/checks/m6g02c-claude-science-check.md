# m6g02c science check (chem-m6-g02, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-g02.md` (Revision 1), proposal text only, and the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`. Every number was recomputed with a Python script (21 Oct). The script covered:

- the shortcut and the full quadratic for Q1 and Q2;
- an exact charge-balance solution for Q1, including water's ions, by root finding;
- Q3 at pH 3.02 and 3.03, and the pKa sensitivity to ±0.005 in pH;
- the Q4 Kb values, ratios and pK values, and ½(pKa₁ + pKa₂) for both salts.

Ka values were checked against the LibreTexts table "E1: Acid Dissociation Constants at 25 °C" (fetched 21 Oct) and CRC pKa values. Kw = 1.0 × 10⁻¹⁴ at 25 °C. No audio, stills or site files were changed.

## Syllabus dotpoints (checked word for word)

Ledger `C6-IQ2-02` (page 53): "calculate pH, pOH, hydrogen ion concentration ([H+]) and hydroxide ion concentration ([OH–]) for a range of solutions (ACSCH102)". Ledger `C6-IQ3-04` (page 53): "calculate and apply the dissociation constant (Ka) and pKa (pKa = -log10 (Ka)) to determine the difference between strong and weak acids (ACSCH098)". Ledger `C6-IQ2-04` (page 53): "write ionic equations to represent the dissociation of acids and bases in water, conjugate acid/base pairs in solution and amphiprotic nature of some salts, for example:" with examples "sodium hydrogen carbonate" and "potassium dihydrogen phosphate". The design text and the YouTube description match the ledger exactly (checked by script, including the hyphen in "-log10" and the U+2013 in "[OH–]"). Q4 applies C6-IQ2-04 only partly, because no demand asks for the equations (S1).

## Em dashes and spelling

No em dashes (U+2014 count 0). There are three en dashes, all inside "[OH–]". Australian spelling throughout ("fertiliser", "ionises", "litre").

## Reference values (Ka at 25 °C)

| Species | Design | LibreTexts E1 | CRC (pKa) | Verdict |
| --- | --- | --- | --- | --- |
| HOCl | 3.0 × 10⁻⁸ | 4.0 × 10⁻⁸ | 7.53 (2.9 × 10⁻⁸) | Correct (CRC); tables range 2.9 to 4.0 × 10⁻⁸ |
| CH₂ClCOOH | 1.4 × 10⁻³ | 1.3 × 10⁻³ | 2.87 (1.35 × 10⁻³) | Correct |
| C₆H₅COOH | 6.5 × 10⁻⁵ (from pH 3.02) | 6.25 × 10⁻⁵ | 4.20 (6.3 × 10⁻⁵) | Acceptable; 4% above the table value (M1) |
| H₂CO₃ (Ka₁, apparent) | 4.3 × 10⁻⁷ | 4.5 × 10⁻⁷ | 6.35 (4.5 × 10⁻⁷) | Acceptable: 4.3 × 10⁻⁷ (pKa 6.37) is the long-standing textbook value. The conclusion is unchanged with 4.5 × 10⁻⁷ (Kb 2.2 × 10⁻⁸) |
| HCO₃⁻ (Ka₂) | 4.7 × 10⁻¹¹ | 4.7 × 10⁻¹¹ | 10.33 | Correct |
| H₃PO₄ (Ka₁) | 7.1 × 10⁻³ | 6.9 × 10⁻³ | 2.16 (6.9 × 10⁻³) | Acceptable (older tables 7.1 to 7.5 × 10⁻³). With 6.9 × 10⁻³, Kb is 1.4 × 10⁻¹², the same |
| H₂PO₄⁻ (Ka₂) | 6.3 × 10⁻⁸ | 6.2 × 10⁻⁸ | 7.21 (6.2 × 10⁻⁸) | Correct to 2 s.f. within tables |

Context claims: HOCl forms in chlorinated pool water (Cl₂ + H₂O → HOCl + HCl): correct. Benzoic acid is a food preservative (additive 210): correct. Its solubility, about 3.4 g/L at 25 °C (0.028 mol/L), allows 0.0150 mol/L: correct. KH₂PO₄ (monopotassium phosphate) is a fertiliser: correct.

## Recomputed values

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Q1 Ka × c | 1.5 × 10⁻⁹ | 3.0 × 10⁻⁸ × 0.0500 | Correct |
| Q1 x | 3.9 × 10⁻⁵ mol/L | √ = 3.8730 × 10⁻⁵; full equation 3.8715 × 10⁻⁵; with water's ions 3.8715 × 10⁻⁵ | Correct; water negligible |
| Q1 check | 0.077% | 0.07746% | Correct |
| Q1 pH | 4.41 | 4.4120 (full 4.4121) | Correct; Ka 2 s.f. → 2 d.p. |
| Q1 crossed | 8.82 | −log(1.5 × 10⁻⁹) = 8.8239 | Correct |
| Q2 shortcut | 5.3 × 10⁻³; 26%; pH 2.28 | 5.2915 × 10⁻³; 26.46%; 2.2764 | Correct |
| Q2 full root | 4.6 × 10⁻³ mol/L; 23%; pH 2.33 | 4.6376 × 10⁻³ (other root −6.04 × 10⁻³); 23.19%; 2.3337 | Correct |
| Q2 substitution check | 1.4 × 10⁻³ | (4.6376 × 10⁻³)² ÷ 0.0153624 = 1.4000 × 10⁻³ | Correct |
| Q2 "about zero point zero five out" | | 0.057 unrounded; 0.05 at the reported precision | Correct |
| Q3 [H₃O⁺] | 9.55 × 10⁻⁴ (kept), 9.5 × 10⁻⁴ reported | 10⁻³·⁰² = 9.5499 × 10⁻⁴ | Correct |
| Q3 [HA] | 0.0140 mol/L | 0.0150 − 0.000955 = 0.014045 → 0.0140 (4 d.p.) | Correct |
| Q3 Ka | 6.5 × 10⁻⁵ | 6.4935 × 10⁻⁵ (6.514 × 10⁻⁵ with 0.0140) | Correct; pH 2 d.p. → 2 s.f. |
| Q3 pKa | 4.19 | 4.1875 (unrounded); 4.1871 from 6.5 × 10⁻⁵; pH ± 0.005 gives 4.18 to 4.20 | Correct |
| Q4 Kb(HCO₃⁻) | 2.3 × 10⁻⁸ | 1.0 × 10⁻¹⁴ ÷ 4.3 × 10⁻⁷ = 2.3256 × 10⁻⁸ | Correct |
| Q4 Kb ÷ Ka (HCO₃⁻) | about 500 | 494.8 | Correct |
| Q4 Kb(H₂PO₄⁻) | 1.4 × 10⁻¹² | 1.4085 × 10⁻¹² | Correct |
| Q4 Ka ÷ Kb (H₂PO₄⁻) | about 45 000 | 44 730 | Correct |
| Q4 crossed | 1.6 × 10⁻⁷ | Kw ÷ 6.3 × 10⁻⁸ = 1.5873 × 10⁻⁷ = Kb(HPO₄²⁻); 2.5 times Ka(H₂PO₄⁻), so it flips the answer | Correct |
| Screen pK values (5c) | 10.33, 7.63, 7.20, 11.85 | 10.328, 7.633, 7.201, 11.851 | Correct (learning S2 cuts this thumbnail) |
| Author reference pH | NaHCO₃ about 8.3, KH₂PO₄ about 4.7 | ½(6.37 + 10.33) = 8.35; ½(2.15 + 7.20) = 4.67 | Correct |

## Q4 method: Ka against Kb

- The comparison is valid. Both reactions start from the same ion at the same concentration, and each makes one H₃O⁺ or one OH⁻, so the larger constant gives the larger extent. It is also rigorous at this level: Kb > Ka₂ means Kw ÷ Ka₁ > Ka₂, that is pKa₁ + pKa₂ > 14, which is exactly the condition for the amphiprotic-salt pH, ½(pKa₁ + pKa₂), to be above 7. So the Ka-against-Kb test always gives the same verdict as the standard salt-pH estimate. This is worth recording in the author notes (M3).
- HCO₃⁻: Kb 2.3 × 10⁻⁸ > Ka 4.7 × 10⁻¹¹, so it mainly accepts, and NaHCO₃(aq) is basic. Correct. H₂PO₄⁻: Ka 6.3 × 10⁻⁸ > Kb 1.4 × 10⁻¹², so it mainly donates, and KH₂PO₄(aq) is acidic. Correct.
- Equations on the forks: HCO₃⁻ + H₂O ⇌ CO₃²⁻ + H₃O⁺; HCO₃⁻ + H₂O ⇌ H₂CO₃ + OH⁻; H₂PO₄⁻ + H₂O ⇌ HPO₄²⁻ + H₃O⁺; H₂PO₄⁻ + H₂O ⇌ H₃PO₄ + OH⁻. All are balanced in atoms and charge, with states and equilibrium arrows. Correct.

## The new aid: "For an ion's Kb, use the Ka one proton up."

- Correct. When an ion accepts a proton it becomes the species with one more H⁺. That species and the ion are a conjugate pair, so Kb(ion) = Kw ÷ Ka(the species one proton up). It is correct for every base, not just amphiprotic ions: CH₃COO⁻ uses Ka(CH₃COOH); CO₃²⁻ uses Ka(HCO₃⁻), not Ka(H₂CO₃); NH₃ uses Ka(NH₄⁺).
- Safe, with two conditions that the design already carries: 25 °C (Kw), and "up" meaning one more proton, as in C06's chain. The notes-screen tag "Ka × Kb = Kw for a conjugate pair only" keeps the reason beside the aid. The risk is a student who reads "up" as the position on a page where the chain is drawn left to right. The ringed acid "one proton up" in the chain and learning S1's spoken "conjugate acid" remove that risk. Keep the aid. Learning S1 supplies the reason that the narration currently lacks.
- Author-note correction: the claim "It holds for every amphiprotic ion in the course (H₂O, HCO₃⁻, H₂PO₄⁻, HPO₄²⁻)" should drop H₂O. Ka(H₃O⁺) is a convention-dependent quantity, and no HSC question asks for Kb(H₂O) this way (M3).

## The 5% rule

Correct as used: it is applied as x ÷ c × 100% (never Ka ÷ c, which avoids the site error), after the shortcut, as a rule of thumb (C08's wording). The threshold is sensible at this precision: a 5% error in x shifts the pH by about 0.02, near the reporting precision for a Ka with two significant figures. The Q2 value of 26% (shortcut x) against the true 23% does not change the verdict. In Q3, "no 5% check" is right, because [H₃O⁺] is measured.

## Is working the quadratic once appropriate for HSC?

Yes, once, as designed. The quadratic is not a syllabus requirement, and Module 5 C6b and C08 told students that most HSC questions are written so the check passes. But the route stop asks students to "choose an approximation or full method", C08 named the full equation and deferred working it here, and a student who meets a failed check needs one model of what to do. Q2's part (a), "Show that the simplifying assumption ... cannot be used", is the more typical HSC demand, and it is kept as a separate part. The narration makes no frequency claim and offers the formula or a solver. The substitution check line gives a route for students without Mathematics Advanced (learning M4). Do not add a second quadratic anywhere in the module.

## HSC style and originality

All four items are Section II short-answer form: "Calculate ... Justify any approximation", "Show that ... Calculate", "Calculate Ka and pKa", "Use Ka and Kb values to determine ... Predict". They are tagged "HSC-style question, written for HSCScience", with no mark claims. The Q4 ion pair is the syllabus's own example and a common textbook exercise. I did not search past NESA papers for these exact data sets or wording. That stays with Codex (asset brief item 3).

## Absolute claims

- "Nothing here is approximated" (4b, key note 3): not strictly true. [A⁻] = [H₃O⁺] ignores water's own ions, which is negligible at pH 3.02, and the pH is itself a measurement. Learning M3 trims the narration sentence; the key note is reworded in M2.
- "the larger constant wins" (key note 4, decision board): true under the shared-ion, one-H₃O⁺-or-OH⁻ condition, which holds for every amphiprotic ion in the course. Acceptable.
- "x has the significant figures of Ka" (key note 5): true for the forward method only (M2).
- "pH below 7 for an acid" (decision board): true at 25 °C, which every card states. Acceptable.

## Findings

### S1. Should fix: Q4 quotes C6-IQ2-04 ("write ionic equations") but never asks for an equation

- Exact text (5a card): "(a) Use Ka and Kb values to determine whether each ion mainly donates a proton to water or mainly accepts a proton from water." "(b) Predict whether a solution of each salt is acidic or basic."
- Problem: the walkthrough writes all four equations, but the student is never asked to, so the dotpoint's verb is not practised. HSC items on these two salts typically ask for the equations that show amphiprotic behaviour.
- Replacement card demands: "(a) For each ion, write an equation for its reaction with water as an acid, and as a base." "(b) Use Ka and Kb values to determine which reaction mainly occurs for each ion." "(c) Predict whether a solution of each salt is acidic or basic." Three answer boxes; (a) fills with the four equations as each fork arrow writes in 5b and 5c.
- Replacement narration (5a): replace "Use the K a values to decide whether each ion mainly donates a proton to water or accepts one from it." with "Write an equation for each ion donating a proton to water and accepting one from it. Then use the K a values to decide which mainly happens." (+38 characters; learning M3 trims compensate.) Update the practice question 4 and model answer to match.

### M1. Minor: Q3's benzoic acid Ka is at the top of the table range

- The data give 6.5 × 10⁻⁵ (pKa 4.19). LibreTexts and CRC give 6.25 × 10⁻⁵ (pKa 4.20), which predicts pH 3.028 at 0.0150 mol/L. The design's reference line "Ka 6.3 × 10⁻⁵ to 6.5 × 10⁻⁵" should read: "Ka 6.25 × 10⁻⁵ (CRC, LibreTexts; pKa 4.20); some school tables 6.3 to 6.5 × 10⁻⁵."
- Optional, for realism: a measured pH of 3.03 gives [H₃O⁺] 9.33 × 10⁻⁴, [HA] 0.0141 mol/L, Ka 6.19 × 10⁻⁵ → 6.2 × 10⁻⁵, and pKa 4.21 whether Ka is rounded first or not (4.2082 and 4.2076). This keeps the design's "same pKa either way" property. If adopted, change 4a, 4b, 4c, the meter readout, the model answer and "Numbers to verify". Otherwise keep 3.02; 6.5 × 10⁻⁵ is defensible.

### M2. Minor: key notes 3 and 5

- Key note 3: replace "Nothing is approximated. The pKa is not the pH." with "[H₃O⁺] is measured, so no 5% check is needed. The pKa is not the pH."
- Key note 5: replace "Precision: x has the significant figures of Ka; pH has that many decimal places." with "Precision: forwards, x has the significant figures of Ka, and pH has that many decimal places; backwards, Ka has as many significant figures as the pH has decimal places."

### M3. Minor: author notes for Q4

- In "Condition for the Q4 comparison", add: "Kb > Ka₂ is the same condition as pKa₁ + pKa₂ > 14, so the comparison always agrees with the salt-pH estimate ½(pKa₁ + pKa₂). In NaHCO₃(aq) the largest single equilibrium is 2HCO₃⁻ ⇌ H₂CO₃ + CO₃²⁻ (K = Ka₂ ÷ Ka₁ ≈ 1.1 × 10⁻⁴). The learner wording compares only the two reactions with water, and 'mainly accepts' is correct for that comparison."
- In the memory aid check, change "(H₂O, HCO₃⁻, H₂PO₄⁻, HPO₄²⁻)" to "(HCO₃⁻, H₂PO₄⁻, HPO₄²⁻)".

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entries C6-IQ2-02, C6-IQ2-04 and C6-IQ3-04 (page 53)
- LibreTexts Chemistry, Reference Tables, "E1: Acid Dissociation Constants at 25 °C": https://chem.libretexts.org/Ancillary_Materials/Reference/Reference_Tables/Equilibrium_Constants/E1%3A_Acid_Dissociation_Constants_at_25C
- CRC Handbook of Chemistry and Physics: dissociation constants of organic and inorganic acids in aqueous solution
- Harris, Quantitative Chemical Analysis: amphiprotic species and the intermediate-form pH approximation
- `lessons/chem-m6-c08.md` and `lessons/chem-m6-c10.md`, for the 5% wording, the quadratic deferral and the conjugate-pair condition

## Verdict

**Ready to voice after fixes** (S1 and learning S1 to S3 before recording; M1 to M3 are cheap and should be applied). The Codex error check and the NESA-paper search are still required.

## Resolution

Resolved by the author in `lessons/chem-m6-g02.md` Revision 2 (21 Oct).

- **S1 (fixed).** The Q4 card now has three demands: "(a) For each ion, write an equation for its reaction with water as an acid, and as a base." "(b) Use Ka and Kb values to determine which reaction mainly occurs for each ion." "(c) Predict whether a solution of each salt is acidic or basic." Three answer boxes; (a) fills with the four equations as each fork arrow writes in 5b and 5c. 5a narration: "Write an equation for each ion donating a proton to water and accepting one from it. Use the K a values to decide which mainly happens, and predict whether each salt's solution is acidic or basic." (The proposed "Then use" is merged into one sentence with the prediction, to avoid two "Then" sentences.) Practice question 4 and its model answer list all four equations with states.
- **M1 (adopted, optional realism change).** Q3's measured pH is now 3.03. Recomputed by script (21 Oct): [H₃O⁺] = 9.3325 × 10⁻⁴ (9.33 × 10⁻⁴ kept, 9.3 × 10⁻⁴ reported); [HA] = 0.014067 → 0.0141 mol/L; Ka = 6.1916 × 10⁻⁵ → 6.2 × 10⁻⁵ (screen values (9.33 × 10⁻⁴)² ÷ 0.0141 = 6.17 × 10⁻⁵ → 6.2 × 10⁻⁵, the same); pKa 4.2082, 4.2097 and 4.2076 by the three routes, all → 4.21. Changed: 4a (card, meter readout, narration), 4b, 4c, 4d, the Decisions table and changes note, Precision, practice model 3, "Numbers to verify", Doubt (d), the asset note and the reference line ("Ka 6.25 × 10⁻⁵ (CRC, LibreTexts; pKa 4.20); some school tables 6.3 to 6.5 × 10⁻⁵").
- **M2 (fixed).** Key note 3: "[H₃O⁺] is measured, so no 5% check is needed. The pKa is not the pH." Key note 5 uses the proposed forwards and backwards wording. The same absolute claim was also removed from the 4b narration (trimmed), the decision board narration ("with no five percent check"), the "Stops after" line and the entry-knowledge line.
- **M3 (fixed).** The proposed salt-pH and 2HCO₃⁻ ⇌ H₂CO₃ + CO₃²⁻ note is added to "Condition for the Q4 comparison"; H₂O is dropped from the memory aid's list of ions.
- Learning S2 also cut the 5c screen-only pK values; they are withdrawn from "Numbers to verify".

Still required: the Codex error check, the reference-value confirmation and the NESA-paper search (asset brief items 1 to 3).
