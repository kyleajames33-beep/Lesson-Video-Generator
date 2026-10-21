# Draft for Claude's review: chem-m6-g02 practice plan

Main question: Which weak-acid method fits the data, and how do we check the answer?

Route: after C08 and C10, before C11. Entry knowledge: C06's amphiprotic species, C07's logarithms and Kw, C08's weak-acid ICE table, and C10's Ka, pKa and conjugate Ka × Kb = Kw. Source site lessons: Chemistry Module 6 L09, L11 and L12. All questions are original HSC-style tasks at 25 °C; Kw = 1.0 × 10⁻¹⁴. Show a full question card during each countdown. Then reveal the current equation, grouped givens, decision and calculation in sequence. Give brief feedback with one crossed error per question.

## Q1. An approximation that works (4 marks)

**Question.** A 0.100 mol L⁻¹ solution of monoprotic weak acid HA has Ka = 1.80 × 10⁻⁵. Estimate its pH and test the approximation that [HA] stays close to 0.100 mol L⁻¹.

**Working.** HA + H₂O ⇌ H₃O⁺ + A⁻. With x = [H₃O⁺] = [A⁻], Ka ≈ x²/0.100; x = √(1.80 × 10⁻⁶) = 1.34 × 10⁻³ mol L⁻¹. pH = 2.87. Fraction ionised = 0.00134/0.100 × 100 = **1.34%**, below 5%, so the approximation is justified. Exact x from x²/(0.100 − x) = Ka is 1.33 × 10⁻³ and gives the same pH to two decimal places. Cross out “weak means [H₃O⁺] equals 0.100”.

**Source videos:** chem-m6-c08, chem-m6-c10.

## Q2. When the 5% check fails (5 marks)

**Question.** A monoprotic weak acid HX has initial concentration 0.00200 mol L⁻¹ and Ka = 6.80 × 10⁻⁴. Calculate its pH. Show why the small-x approximation is unsuitable.

**Working.** Approximate x = √(Ka c) = √(1.36 × 10⁻⁶) = 0.00117 mol L⁻¹, which is 58.3% of c. Thus use x²/(0.00200 − x) = 6.80 × 10⁻⁴. The positive root of x² + 0.000680x − 0.00000136 = 0 is x = 8.747 × 10⁻⁴ mol L⁻¹. pH = −log₁₀ x = **3.06**. The actual ionised fraction is 43.7%. Cross out “keep the square-root answer after its check fails”.

**Source videos:** chem-m6-c08, chem-m6-c10.

## Q3. Work backwards from measured pH (4 marks)

**Question.** A 0.0800 mol L⁻¹ monoprotic weak acid HY has measured pH 3.00 at 25 °C. Calculate Ka and pKa. Assume HY is the only material producing H₃O⁺ in a significant amount.

**Working.** x = [H₃O⁺] = 10⁻³·⁰⁰ = 0.00100 mol L⁻¹. The acid ionises by the same amount, so [Y⁻] = 0.00100 and [HY] = 0.0800 − 0.00100 = 0.0790 mol L⁻¹. Ka = (0.00100)²/0.0790 = **1.27 × 10⁻⁵**. pKa = −log₁₀(1.2658 × 10⁻⁵) = **4.90**. Cross out “Ka = 0.00100”.

**Source videos:** chem-m6-c08, chem-m6-c10; chem-m6-c07 for pH inversion.

## Q4. Which way does an amphiprotic ion react? (5 marks)

**Question.** HCO₃⁻ and H₂PO₄⁻ can each donate or accept a proton in water. At 25 °C, Ka(H₂CO₃) = 4.30 × 10⁻⁷, Ka(HCO₃⁻) = 4.70 × 10⁻¹¹, Ka(H₃PO₄) = 7.10 × 10⁻³ and Ka(H₂PO₄⁻) = 6.30 × 10⁻⁸. For each ion, decide which reaction is favoured: donation to water or acceptance from water. Justify using Ka against Kb. Do not calculate solution pH.

**Working.** For HCO₃⁻ donating, Ka = 4.70 × 10⁻¹¹. For HCO₃⁻ accepting, Kb = Kw/Ka(H₂CO₃) = 1.00 × 10⁻¹⁴/(4.30 × 10⁻⁷) = 2.33 × 10⁻⁸. **Acceptance is favoured** because its Kb is about 495 times its Ka. For H₂PO₄⁻ donating, Ka = 6.30 × 10⁻⁸. For H₂PO₄⁻ accepting, Kb = Kw/Ka(H₃PO₄) = 1.41 × 10⁻¹². **Donation is favoured** because its Ka is about 4.47 × 10⁴ times its Kb. These compare competing reactions of each ion, not two Ka values for unrelated pairs. Cross out “an amphiprotic ion always reacts equally both ways”.

**Source videos:** chem-m6-c06, chem-m6-c08, chem-m6-c10. This is the amphiprotic Ka-against-Kb item assigned to G02 by the Module 6 route review.

## Design handoff

Q1 to Q3 share an ICE table that first appears empty, then gains only the row needed. Q2 must visibly replace the approximation with the exact equation after the failed check. Q4 needs two competing reaction arrows and a paired Ka/Kb comparison for each ion; show only one ion at a time. This is a teaching plan, not approved narration or a scene design.
