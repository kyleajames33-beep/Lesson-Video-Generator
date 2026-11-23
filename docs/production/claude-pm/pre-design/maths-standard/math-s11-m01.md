# math-s11-m01: How do percentage increases and decreases set prices, profit and loss?

Maths Standard pre-design pack (Year 11, Managing money), 23 November 2026, written by Claude (designer of record) in the form of the e and f packs, from route inputs 10 (`../../../programme/maths-standard-route-inputs-10.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Managing money, group "Purchasing goods", outcome MST-11-04:

- `cib256693a`: Apply percentage increase and decrease to determine the cost of goods, and profit and loss [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431). Site coverage: covered (managing-money/lesson03).

**Entry knowledge:** Stage 5 percentages (a percentage of an amount; a percentage as a decimal); math-s11-e03 (commission, a percentage of sales) and e10 (the 2% levy as × 0.02), recalled in grey chips, never retaught (audit N4).

**Prior video:** math-s11-e12. **Start:** e12's final frame exactly (swing tag `ma12-swing-tag-v1.png` with a coded "+3%", grey chip "Earning money: done", chips "Next: prices go up too", "?"). The join is confirmed by this pack.

**Stop:** the multiplier for an increase (1 + r%) and a decrease (1 − r%); two changes in a row multiply, so up 10% then down 10% is not back to the start; percentage change = change ÷ starting amount × 100%; cost price, selling price, profit or loss, and percentage profit or loss measured on the cost price.

**Next:** math-s11-m02 (GST): final frame is the supermarket basket with a receipt reading "includes GST ?".

## 2. Site order, sections and worked examples

`year11/managing-money/lesson03.sa.html` (site L11): Think First (a $200 jacket up 10% then down 10%); card 1 multipliers ($80 jacket: × 1.15 = $92, × 0.85 = $68); card 2 profit, loss and percentage profit (bike $250 to $310, 24%; pen $2 to $3, 50%); card 3 reverse (÷ the multiplier: $92 ÷ 1.15; $308 ÷ 0.88); WE1 headphones $64 marked up 45% ($92.80, $28.80); WE2 phone case loss ($18 to $13.50, 25%); WE3 washing machine $682 after 22% off ($874.36); WE4 bicycle $540 up 8% then down 8% ($536.54, 0.64% down); SAQ 1 strawberries (40.9% profit); SAQ 2 laptop reverse; SAQ 3 cost rise.

All values recalculated (`scratchpad s11m/verify.py`): no arithmetic error. Reverse percentages (card 3, WE3, SAQ 2) move to m02, where ÷ 1.1 needs them (route inputs 10). The site's "this catches out more students in the exam than any other percentage idea" is a claim about exams; not repeated.

## 3. Recalculation (values for the design)

| Case | Working | Result |
| --- | --- | --- |
| Sneakers $120 up 3% | 120 × 1.03 | $123.60 |
| 20% off $120 | 120 × 0.80 | $96.00 (slip 120 × 0.20 = $24, the discount) |
| Up 10% then down 10% | 120 × 1.10 = 132; 132 × 0.90 | $118.80; 1.10 × 0.90 = 0.99 |
| Phone plan $40 to $46 | 6 ÷ 40 × 100% | 15% increase |
| Shop pays $75, sells $120 | 120 − 75 = 45; 45 ÷ 75 | $45 profit, 60% |
| Sale price $96 | 96 − 75 = 21; 21 ÷ 75 | $21 profit, 28% |
| Clearance $60 | 75 − 60 = 15; 15 ÷ 75 | $15 loss, 20% |

## 4. Misconceptions and HSC-style traps

- Multiplying by 0.20 for "20% off" (gives the discount, not the price); by 0.03 for "up 3%".
- Believing two equal percentage changes cancel.
- Dividing a change by the new amount instead of the starting amount (percentage profit on the selling price).
- Reporting a loss as a negative percentage next to a profit wording.

## 5. Visual needs

The swing tag on the sneakers (the plate has a twine loop on the left shoe); a percentage bar (100% block plus a 3% sliver, then a 20% block cut off); a price ladder for two changes in a row; a coded phone-plan card; a cost-price and selling-price bar pair with the profit gap tinted violet. Kit: `PlateImg`, `HandTag`, `WorkingBoard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; new: `PercentBar` (see the design).

## 6. Two original candidate practice questions

**Question 1.** A surf shop buys a wetsuit for $64 and marks it up by 45%. (a) Find the selling price. (b) Find the profit on each wetsuit.
Worked answer: (a) 64 × 1.45 = $92.80. (b) 92.80 − 64 = $28.80. Classic slip: "selling price = 64 × 0.45 = $28.80" (that is the mark-up only).

**Question 2.** A phone's price drops from $1250 to $1000 in a sale. The shop paid $900 for it. (a) Find the percentage decrease in price. (b) Find the profit at the sale price as a percentage of the cost price, to one decimal place.
Worked answer: (a) 250 ÷ 1250 × 100% = 20%. (b) 1000 − 900 = $100; 100 ÷ 900 × 100% = 11.1%. Classic slip: "250 ÷ 1000 = 25%" (divided by the new price).

Only the question goes on the card; "Pause here to answer." then a 10-second countdown; brief feedback.

## 7. Everyday anchors

Sneakers with the e12 tag (shopping); a phone plan rising from $40 to $46 a month (phones); a surf shop wetsuit (sport) and a phone sale in the attempts. No people.

## 8. Site corrections and decisions for Claude

- Reverse percentages move to m02 (design decision, route inputs 10).
- Successive changes are the hook's surprise, answered on screen with the multiplier (site Think First, repriced to the sneakers).
- Pace: about 8.5 to 9 minutes. Site issues: none arithmetic (see `../../site-corrections-maths-standard-y11-additions.md`, section 1).
