# math-s11-m05: What does it really cost to buy a car and get it on the road?

Maths Standard pre-design pack (Year 11, Managing money), 23 November 2026, written by Claude (designer of record) in the form of the e and f packs, from route inputs 10 (`../../../programme/maths-standard-route-inputs-10.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Managing money, group "Purchasing goods", outcome MST-11-04:

- `ci5b329382`: Calculate the cost of purchasing a vehicle by considering the purchase price or loan repayments, registration, compulsory and non-compulsory third-party insurance, comprehensive insurance and stamp duty at current rates [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431). Site coverage: covered (lesson05).

**Entry knowledge:** math-s11-m04 (add every dollar; extra over the price; total of repayments); math-s11-m01 (extra as a percentage of the starting amount); math-s11-e02 and e03 (the red hatchback at the car yard, $14,990).

**Prior video:** math-s11-m04. **Start:** m04's final frame (the red hatchback `ma12-used-hatchback-v1.png` with the windscreen card "$14 990", grey chip "e02: the car yard", chips "drive-away price?", "Next: buying a car", "?").

**Stop:** stamp duty from the current NSW table ($3 per $100 or part of $100 up to $45,000; $1,350 plus $5 per $100 or part above $45,000), with "or part" rounding up; registration; CTP green slip (compulsory, injury to people); third-party property insurance (optional, damage to other people's property); comprehensive insurance (optional, also your own car); the excess; on-road (drive-away) cost and the extra as a percentage; buying with a loan (repayment from the lender's calculator; total paid). Not: yearly running costs (m06); how loan repayments are calculated (Year 12).

**Next:** math-s11-m06: final frame is the hatchback stamped "drive-away $16 645" with "every year after?".

## 2. Site order, sections and worked examples

`year11/managing-money/lesson05.sa.html` (site L13): card 1 on-road cost ($24,000 car: $720 duty, $380 rego, $620 CTP, $40 transfer = $25,760; 7.3%); the stamp duty table ($3 per $100 to $45,000; $1,350 + $5 per $100 above); card 2 insurance (CTP compulsory, covers injury to people; third-party property and comprehensive optional; the excess: $3,000 claim, $700 excess, insurer pays $2,300); WE1 ($52,000 → $1,700); WE2 ($31,000 → $32,995, 6.4%); SAQ 1 ($48,000 → $1,500; $50,630; 5.5%). Cards 3 and 4 go to m06.

All values recalculated: no arithmetic error. Site issues (MSY-05): every site price is a whole number of hundreds, so "or part" never matters, although the table says "(or part)"; the key-terms card uses $620 for both the CTP and the comprehensive premium, which invites confusion; and loan repayments ("purchase price or loan repayments") are not taught.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Stamp duty, $14,990 | 149.9 → 150 lots of $100 (or part); 150 × 3 | $450 (slip 149.9 × 3 = $449.70) |
| Stamp duty, $48,000 ute | 1350 + 5 × 30 | $1,500 |
| On-road | 14,990 + 450 + 385 + 780 + 40 | $16,645; extra $1,655 = 11.0% |
| Crash: your car $3,000, other car $2,500 | green slip only; third-party property; comprehensive (excess $850) | you pay $5,500; $3,000 plus the excess; $850 |
| Loan $14,990, 4 years | lender's calculator $387.42 a month × 48 | $18,596.16; $3,606.16 more |

Example prices (labelled): registration $385, green slip $780, transfer $40, comprehensive $1,640 a year with an $850 excess, loan repayment from a lender's calculator (11% p.a. assumed, not stated on screen).

## 4. Misconceptions and HSC-style traps

- Ignoring "or part" (multiplying by 149.9).
- Charging the whole price at the higher rate above $45,000.
- Thinking the green slip covers your own car.
- Leaving compulsory costs out of the on-road cost.
- Comparing the loan's repayment, not its total.

## 5. Visual needs

The hatchback; a per-$100 block counter (149 full blocks plus a part block that fills); a threshold bar for $45,000; a coverage table (who pays for what) with the three insurance types; an on-road stack; a loan repayment strip (48 teal blocks) against the price.

## 6. Two original candidate practice questions

**Question 1.** Stamp duty in NSW is $3 for every $100 or part of $100 of a vehicle's value up to $45,000, and $1,350 plus $5 for every $100 or part of $100 above $45,000. Find the stamp duty on a ute valued at $52,040.
Worked answer: excess 52,040 − 45,000 = 7,040; 70.4 → 71 lots; 71 × 5 = 355; duty 1350 + 355 = $1,705. Slip: "52,040 ÷ 100 × 5 = $2,602".

**Question 2.** Jo buys a used car for $9,800. Stamp duty is $3 per $100 or part, registration is $370, the CTP green slip is $720 and the transfer fee is $40. (a) Find the on-road cost. (b) Jo's friend says the green slip will pay to fix her car if she crashes. Explain why this is wrong.
Worked answer: (a) 98 × 3 = $294; 9,800 + 294 + 370 + 720 + 40 = $11,224. (b) CTP covers injury to people, not damage to cars; to cover her own car she needs comprehensive insurance (optional).

## 7. Everyday anchors

e02's red hatchback (the strand's car, reused in Year 12 a06, i10 and others); a ute (ms12-ute-v1.png) for the threshold. No people.

## 8. Site corrections and decisions for Claude

- Teach "or part" on a price that needs it (MSY-05).
- Teach a loan as "repayments from the lender's calculator" (no interest method; Year 12 teaches loans).
- Rates: NSW stamp duty table (Revenue NSW, 2026-27); registration, CTP and transfer fees as labelled examples near current NSW figures (Codex finds dated sources: Transport for NSW, SIRA green slip price check).
- Pace: about 9 minutes (the fullest video in the strand).
