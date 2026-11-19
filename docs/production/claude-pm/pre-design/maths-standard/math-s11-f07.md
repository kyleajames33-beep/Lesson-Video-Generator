# math-s11-f07: How do Fried's, Young's and Clark's formulas scale a medicine dose for a child?

Maths Standard research pack (Year 11, Formulas and equations), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

**Root ruling 4 binds this video:** every medicine and dose is invented and clearly labelled, with "your doctor or pharmacist sets real doses" on screen and in narration. Root ruling 3: no site lesson.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Formulas and equations:

- `ci700a4fe8`: Calculate the required medication dosages for children and adults given age or weight, using Fried’s, Young’s and Clark’s formula as appropriate [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: missing (lesson05 names the formulas in a notice only).

The syllabus names the formulas but does not print them. The forms used below are the ones on the NESA Mathematics Standard reference sheet: Fried's formula, dosage = (age of child in months × adult dosage) ÷ 150; Young's formula, dosage = (age of child in years × adult dosage) ÷ (age of child in years + 12); Clark's formula, dosage = (weight in kg × adult dosage) ÷ 70. **Codex confirms these forms, and any stated age range for each, against the current 2024 Standard reference sheet before narration.**

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-f01: substitution into a fraction formula, rounding at the end. math-s11-f04: months and years (12 months in a year). Stage 5: milligrams and kilograms.

**Prior video:** math-s11-f06.

**Start:** f06 showed that a formula can only estimate what a body does. Medicine doses are another case: a formula gives a starting estimate, and a doctor or pharmacist decides.

**Stop:** Why a child's dose is scaled down from an adult dose (a smaller body); Fried's (age in months, for babies), Young's (age in years, for children), Clark's (weight in kg); choosing the formula from what is given; comparing two formulas for one child and saying why they differ (age and weight are different stand-ins for body size); an adult dose from a per-kilogram rate (mg per kg × mass); stating each dose with units and sensible rounding. Optional: turning a dose in mg into a liquid volume in mL. Every example is labelled "invented example: not real medical advice".

**Next:** math-s11-f08.

## 2. Site order, sections and worked examples

No site lesson teaches this point. The only mention is [formulas-and-equations/lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson05.sa.html) (SHA256 `548a35b67aa1760a54719d8f8996c3c1b8b06f1b84aeae185178f34b0642ba18`), card 03's notice ("the Fried's, Young's and Clark's medication rules"). Already logged as a gap (site corrections section 2).

## 3. Recalculation

Invented "Medicine A", adult dose 500 mg:

- Young's, 8-year-old: 8 × 500 ÷ (8 + 12) = 4000 ÷ 20 = 200 mg.
- Clark's, 25 kg child: 25 × 500 ÷ 70 = 178.571... ≈ 178.6 mg.
- Fried's, 9-month-old: 9 × 500 ÷ 150 = 30 mg.
- Adult by weight (invented rate 15 mg per kg), 68 kg: 1020 mg.
- Optional liquid: 200 mg of a liquid holding 40 mg in every 5 mL: 200 ÷ 40 × 5 = 25 mL.
- Practice: Young's at 6 years, 250 mg adult dose: 83.33 mg; Clark's at 18 kg: 64.29 mg; Fried's at 10 months, 120 mg: 8 mg; Young's at 10 months (10/12 year): 7.79 mg.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`).

## 4. Misconceptions and HSC-style traps

- Using age in years in Fried's formula (9 instead of 9 months), or months in Young's.
- Young's: adding 12 to the top, or forgetting the brackets around (age + 12) on the calculator.
- Clark's: dividing by 150 or using pounds (older versions); the reference sheet uses kg and 70.
- Expecting the formulas to agree for the same child.
- Dropping units (mg) or rounding too early.
- Treating a formula's answer as a prescription.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A three-column "which formula?" card: what is given (months / years / kg) points to the formula; the given quantity lights, and that column comes forward.
- Each formula as a fraction with slots: "adult dose" (one colour, the same in all three), the child's quantity (a second colour) and the constant (150, age + 12, 70).
- A "fraction of the adult dose" bar: the adult dose as a full bar and the child's dose as the part (200 of 500 = 40%), so scaling down is seen.
- Two bars side by side for one child (Young's 200 mg, Clark's 178.6 mg) with the reason chip "age and weight are different stand-ins".
- A persistent footer "Invented example. Your doctor or pharmacist sets real doses."

Kit: `Frac`, `ModelCard` slots, `StackedTotalBar` or `GrowthBars` for the part-of-adult bar, `DecisionTree` for "which formula?", `WorkingBoard`. Plates (objects only): a medicine bottle with a measuring syringe and a plain unbranded label "Medicine A", a first-aid kit. No people, no babies or children drawn, no real brand names.

## 6. Two original candidate practice questions

### Question 1

The adult dose of an invented medicine is 250 mg. (a) Use Young's formula to find the dose for a 6-year-old. (b) Use Clark's formula to find the dose for a child who weighs 18 kg. Give each answer to the nearest milligram.

**Worked answer:** (a) 6 × 250 ÷ (6 + 12) = 1500 ÷ 18 ≈ 83 mg. (b) 18 × 250 ÷ 70 ≈ 64 mg.

### Question 2

The adult dose of an invented medicine is 120 mg. (a) Use Fried's formula to find the dose for a 10-month-old baby. (b) Explain why Fried's formula, not Young's, is used for this child.

**Worked answer:** (a) 10 × 120 ÷ 150 = 8 mg. (b) Fried's formula uses age in months and is meant for babies under about one year; Young's formula uses age in whole years, which is too coarse for a baby. (Young's would give about 7.8 mg here.)

Only the question goes on the card, with the footer "Invented example. Your doctor or pharmacist sets real doses." Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 1: crossed "6 × 250 ÷ 6 + 12 = 262", "brackets around age + 12"). Codex confirms the age-range wording in Question 2 (b) against the reference sheet. Answers were checked with SymPy.

## 7. Everyday anchors

- Packing a first-aid kit for a family holiday, reading the label's adult and child sections (travel).
- A dog's worming tablet chosen by the dog's weight: a weight-based dose like Clark's, set by the vet (pets; a non-human weight case).
- A measuring syringe for a liquid medicine: the dose in mg becomes a volume in mL (home; the optional liquid step).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "first-aid kit", "worming" and "syringe" no hits). Objects only, never people. No real medicine names or doses.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. No site lesson; the gap is already in section 2.

Decisions for Claude:

- **Ruling 4 wording** on screen for the whole video (footer) and in narration at the start and end: "These are invented examples. Your doctor or pharmacist sets real doses."
- **"For children and adults ... given age or weight":** the three named formulas are for children; the adult part is a per-kilogram dose (mg per kg × mass). Keep that case short.
- **Formula forms:** use the reference-sheet forms exactly as Codex confirms them; say "the formula sheet gives you these" (they are supplied in the HSC).
- **Comparing formulas** answers "as appropriate": choose by what is given and by age, and accept that two formulas give different estimates.
- **Pace flag: watch.** Three formulas, a choice and a per-kg case fit 7 to 9 minutes; drop the optional liquid step if long.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
