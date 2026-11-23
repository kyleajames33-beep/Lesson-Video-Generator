# math-s11-m03: What does buy now, pay later really cost?

Maths Standard pre-design pack (Year 11, Managing money), 23 November 2026, written by Claude (designer of record) in the form of the e and f packs, from route inputs 10 (`../../../programme/maths-standard-route-inputs-10.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Managing money, group "Purchasing goods", outcome MST-11-04:

- `cif403be54`: Examine payment options involving buy now, pay later and analyse the costs associated with these schemes for purchasing goods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431). Site coverage: covered (managing-money/lesson04, cards 2 and 3).

**Entry knowledge:** math-s11-m01 (percentage change: divide by where you started); math-s11-e01 (a fortnight is two weeks; a month is not four weeks).

**Prior video:** math-s11-m02. **Start:** m02's final frame (the headphones `ma12-headphones-v1.png` with the swing tag "$480"; card "or 4 payments of $120"; chips "Next: buy now, pay later", "?").

**Stop:** how a pay-in-4 plan works (first instalment today, then every two weeks, done in six weeks; no interest); who pays for "free" (the shop pays the provider); an account fee charged for each month money is owed, and a late fee for each missed payment; total cost = price + account fees + late fees; the extra as a percentage of the price; why a flat fee bites a small purchase harder; several plans at once against a fortnight's spare money; regulation since 10 June 2025 (credit licence, checks; missed payments can show on a credit report). Not: buying on terms and comparing methods (m04); loans and interest (Year 12 i12).

**Next:** math-s11-m04: final frame is the television with "$1600" and four ways to pay.

## 2. Site order, sections and worked examples

`year11/managing-money/lesson04.sa.html` (site L12): Think First ($480 headphones, 4 × $120, "0% interest"); key terms (account fee $6 a month over 2 months; late fee $10); card 2 BNPL total = price + account fees + late fees ($492; $502; 2.5%, 4.6%); WE2 ($360 jacket, 6 × $60, $5 a month for 3 months, $12 late fee: $375, $387); SAQ 2 ($720 phone, 6 fortnightly instalments, $4 a month, $15 late fee: $120, $732, $762, 5.8%).

All values recalculated: no arithmetic error. Two site issues (MSY-03): "4 fortnightly payments run for 2 months" is presented as a rule ("Four fortnights is 2 months"), but a typical pay-in-4 plan takes its first payment at purchase and finishes in six weeks; the design states the months the plan is open on the card instead. And the site presents a monthly account fee as standard; many pay-in-4 plans charge late fees only, so the design calls the $6 fee "our example plan" and says some plans charge none.

## 3. Recalculation (values for the design)

| Case | Working | Result |
| --- | --- | --- |
| Headphones $480, 4 instalments | 480 ÷ 4 | $120 each |
| Example plan: $6 a month, open 2 months | 480 + 2 × 6 | $492; 12 ÷ 480 = 2.5% |
| One missed payment, $10 late fee | 492 + 10 | $502; 22 ÷ 480 = 4.6% |
| T-shirt $60, same plan | 60 + 12; + 10 | $72 (20%); $82 (36.7%) |
| Three plans in one fortnight | 120 + 45 + 30 | $195 against $150 spare |

## 4. Misconceptions and HSC-style traps

- "0% interest" read as "no extra cost".
- Counting a monthly fee per instalment, or counting months wrongly.
- Forgetting late fees in a total.
- Thinking a fee that is small in dollars is small for every purchase.

## 5. Visual needs

The headphones and tag; a payment timeline (kit `PeriodTimeline`) with four payment ticks over six weeks and two month blocks; the gap bars (m01) for price and fees; the t-shirt beside the headphones with equal fee blocks; a fortnight's money bar with three plan blocks overflowing it.

## 6. Two original candidate practice questions

**Question 1.** A $720 phone is bought with a buy now, pay later plan: 6 equal fortnightly instalments, a $4 account fee for each month money is owed (the plan runs for 3 months) and a $15 late fee for each missed payment. (a) Find each instalment. (b) Find the total cost if every payment is on time. (c) Two payments are missed. Find the total cost and the extra paid as a percentage of the price, to one decimal place.
Worked answer: (a) 720 ÷ 6 = $120. (b) 720 + 3 × 4 = $732. (c) 732 + 2 × 15 = $762; 42 ÷ 720 × 100% = 5.8%. Slip: "two missed: still $732".

**Question 2.** A plan charges a $10 late fee for a missed payment. Compare the effect of one late fee on a $40 purchase and on a $400 purchase, as a percentage of each price, and explain why buy now, pay later can be expensive for small purchases.
Worked answer: 10 ÷ 40 = 25%; 10 ÷ 400 = 2.5%. The fee is a fixed dollar amount, so on a small price it is a much bigger percentage. Slip: "$10 is $10, so the same cost either way".

## 7. Everyday anchors

Headphones and a t-shirt (shopping), shoes and a concert ticket (stacked plans), a phone (attempt 1). Not the e-bike, the gaming console or any loan comparison (Year 12 i12, audit N5). No people.

## 8. Site corrections and decisions for Claude

- State the months a plan is open on the card (MSY-03); never derive months from "fortnights ÷ 2".
- Fees are "example plan" figures; the narration says plans differ (Moneysmart). Regulation sentence as in Year 12 i12 (ASIC Information Sheet 285: from 10 June 2025); i12's sentence then works as a recall.
- Pace: about 8 minutes.
