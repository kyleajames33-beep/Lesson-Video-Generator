# math-s11-f05: How do the BAC formulas estimate blood alcohol from drinks, hours and body weight?

Maths Standard research pack (Year 11, Formulas and equations), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

**Root ruling 4 binds this video.** BAC is framed around road safety: learner and P-plate drivers in NSW must have zero BAC, and the formula is an estimate, never a guide to how much is safe to drink. Root ruling 3: no site lesson, so the video teaches from the syllabus alone.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Formulas and equations:

- `ci9f40765a`: Apply the formulas BAC_male = (10N - 7.5H)/(6.8M) and BAC_female = (10N - 7.5H)/(5.5M) to calculate and interpret blood alcohol content (BAC) based on drink consumption and body weight, where N is the number of standard drinks consumed, H is the number of hours of drinking and M is the person’s weight in kilograms [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: missing (lesson05 names the formulas in a "Beyond the syllabus" notice only). The text above is the crosswalk's linear form; typeset the fractions from `sourceHtml` (MathML, with subscripts "male" and "female").

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-f04: `ci61d581aa` (reaction distance grows with reaction time; anything that slows reactions lengthens stopping distance). math-s11-f01: substitution into a formula with a fraction and brackets, rounding at the end. Stage 5: decimals to three places.

**Prior video:** math-s11-f04.

**Start:** f04 ended on reaction time: alcohol slows reactions. NSW measures alcohol in a driver as blood alcohol content, and learner and P-plate drivers must have zero.

**Stop:** What BAC measures (grams of alcohol in every 100 mL of blood: 0.05 means 0.05 g per 100 mL); the NSW limits in one line (zero for learner, P1 and P2; under 0.05 for full licence holders); a standard drink (10 g of pure alcohol); the two syllabus formulas with N, H and M named; substituting with the top and bottom worked separately, rounding to three decimal places at the end; interpreting a result (above zero: a P-plater must not drive; under 0.05 is an estimate, not a safe number; a negative result means the model estimates zero); why the female formula gives a higher estimate for the same N, H and M (dividing by 5.5M instead of 6.8M). Examples are invented adults. Time to zero and the limitations are f06.

**Next:** math-s11-f06.

## 2. Site order, sections and worked examples

No site lesson teaches this point. The only mention is [formulas-and-equations/lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson05.sa.html) (SHA256 `548a35b67aa1760a54719d8f8996c3c1b8b06f1b84aeae185178f34b0642ba18`), card 03's notice: "What Formulas and equations does examine is substituting into and rearranging the formulas the syllabus actually names: blood alcohol content and its limitations, the Fried's, Young's and Clark's medication rules ...". Already logged as a gap (site corrections section 2).

External facts (read 19 November 2026; Codex re-verifies before narration):

- nsw.gov.au, "Alcohol limits, drugs and medicines" (https://www.nsw.gov.au/driving-boating-and-transport/roads-safety-and-rules/safe-driving/alcohol-and-drugs): BAC limit 0 for learner (L), provisional P1 and P2 licences; "Under 0.05" for a full licence; "Under 0.02" for public passenger, heavy and dangerous goods vehicles. The page also says: "It's impossible for you to estimate your own BAC, even if you think you know how many drinks you've had" (used in f06).
- health.gov.au, "Standard drinks guide": a standard drink contains 10 g of pure alcohol; containers sold in Australia show their number of standard drinks.
- The unit (grams of alcohol per 100 mL of blood) is the standard Australian meaning of a BAC reading; Codex confirms a NSW source for the wording.

## 3. Recalculation

- Worked example A (invented): an adult man, 80 kg, 4 standard drinks over 3 hours. Top: 10(4) − 7.5(3) = 40 − 22.5 = 17.5. Bottom: 6.8 × 80 = 544. BAC = 17.5 ÷ 544 = 0.032169..., about 0.032.
- Worked example B (invented): an adult woman, 60 kg, 3 standard drinks over 2 hours. Top 15; bottom 5.5 × 60 = 330; BAC = 1/22 = 0.04545..., about 0.045.
- Same N, H and M (3 drinks, 2 hours, 70 kg): male 0.0315, female 0.0390; the ratio 6.8 ÷ 5.5 ≈ 1.236 for every case.
- Negative case: 1 drink over 2 hours, 75 kg man: (10 − 15) ÷ 510 = −0.0098; the model's estimate is 0.
- Practice: Question 1 (female, 65 kg, 4 drinks, 3 hours) 17.5 ÷ 357.5 = 0.04895, about 0.049; Question 2 (male, 90 kg, 5 drinks, 4 hours) 20 ÷ 612 = 0.03268, about 0.033.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`).

## 4. Misconceptions and HSC-style traps

- Typing the fraction without brackets on the calculator (10N − 7.5H ÷ 6.8M).
- Using total drinks instead of standard drinks (a large glass can be two or more).
- Mixing up H (hours of drinking) with the time since the last drink.
- Reading 0.032 as "3.2%" or as "under the limit, so fine" for a P-plater.
- Treating a result under 0.05 as safe; the law for P-platers is zero, and the formula is only an estimate.
- Reporting a negative BAC instead of interpreting it as zero.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Opening: f04's stopping bar with the reaction part stretching (a slower reaction), then a P plate (red P on white) and a "0.00" readout: the law for a P-plater.
- A "per 100 mL" picture: a 100 mL measure with a tiny 0.05 g mark, so 0.05 has a size.
- The formula card with N, H and M as labelled slots and the 6.8 or 5.5 as a highlighted constant; the top and the bottom worked as two separate rows before the division.
- Standard drinks as a count of numbered tokens or a tally ("4 standard drinks"), not glamorised glasses or bottles; a small note "a large glass can be more than one".
- An "estimate only" stamp on every answer frame; at most two hand tags.

Kit: `FormulaCrosswalk` or `ModelCard` slots; `Frac` and `SvgFracText` for the stacked fraction; `WorkingBoard` rows; `ThermoColumn` or `FillDial` for a BAC readout against 0 and 0.05 lines (check appearance); `AnswerFrame`. Plates: a P plate on a car's rear window and a roadside breath-test sign would need new Codex plates (objects only). No people, no drinking scenes, no bars or parties.

## 6. Two original candidate practice questions

### Question 1

Use BAC_female = (10N − 7.5H)/(5.5M) to estimate the BAC of a 65 kg woman who has 4 standard drinks over 3 hours. Give your answer to three decimal places, and explain what it means for a P-plate driver.

**Worked answer:** 10(4) − 7.5(3) = 17.5; 5.5 × 65 = 357.5; BAC ≈ 17.5 ÷ 357.5 ≈ 0.049. Any BAC above zero means a P-plate driver must not drive. (The estimate is under 0.05, but that does not make driving safe, and the formula is only an estimate.)

### Question 2

A 70 kg man and a 70 kg woman each have 3 standard drinks over 2 hours. (a) Estimate each BAC to three decimal places. (b) Explain why the estimates differ.

**Worked answer:** (a) Man: 15 ÷ 476 ≈ 0.032. Woman: 15 ÷ 385 ≈ 0.039. (b) The numerators are the same; the woman's formula divides by 5.5M instead of 6.8M, a smaller number, so the estimate is higher.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 1: crossed "0.049 is under 0.05, so OK to drive", "P-platers: zero"). Answers were checked with SymPy.

## 7. Everyday anchors

- P plates: a new driver's first car with P plates, and the zero rule that comes with them (cars; the ruling's frame).
- A roadside random breath test sign on the way home (road safety; only a test measures BAC).
- A designated driver: one person in a group plans to drive and has no alcohol (planning; the safe choice the maths supports).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "P-plate", "breath test" and "designated driver" no hits; "P plate" matched only unrelated phrases such as "pup plate"). Objects only (a P plate, a sign, car keys on a hook), never people. No anchor shows alcohol being drunk.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. No site lesson; the gap is already in section 2.

Decisions for Claude:

- **Ruling 4 wording** on screen and in narration at least once: "This formula is an estimate. It's never a guide to how much is safe to drink. If you're on your L or P plates, the limit is zero." Students are 16 or 17; every worked person is an invented adult, and the video never suggests an amount to drink.
- **Formula letters:** keep N, H and M with their meanings on screen whenever the formula is.
- **Rounding:** three decimal places at the end; keep the unrounded value for f06.
- **Male and female formulas:** the syllabus uses them; say once, plainly, that they are averages for body types and that f06 covers why any estimate is rough.
- Pace: two worked examples and a comparison fit 6 to 7 minutes. Not at risk.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
