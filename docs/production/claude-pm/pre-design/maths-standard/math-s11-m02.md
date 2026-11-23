# math-s11-m02: How do we add or remove GST, and how does VAT work overseas?

Maths Standard pre-design pack (Year 11, Managing money), 23 November 2026, written by Claude (designer of record) in the form of the e and f packs, from route inputs 10 (`../../../programme/maths-standard-route-inputs-10.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Managing money, group "Purchasing goods", outcome MST-11-04:

- `cib3251328`: Calculate the goods and service tax (GST) or value-added tax (VAT) when purchasing goods and services in Australia and internationally [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431). Site coverage: partial ("GST is taught in both directions (managing-money/lesson01). VAT and international purchases are not taught.").
- `cib09c3969`: Solve problems involving GST or VAT. Site coverage: partial ("GST problems are taught; VAT problems are not.").

**Entry knowledge:** math-s11-m01 (the multiplier: up 10% is × 1.1; divide by where you started).

**Prior video:** math-s11-m01. **Start:** m01's final frame (the grocery basket `ms12-grocery-basket-v1.png` and a coded receipt: Bread 4.50, Milk 3.20, Bananas 3.80, Chips 5.50, Soft drink 3.30, TOTAL $20.30, "includes GST ?"; chips "Next: GST", "?").

**Stop:** GST is a 10% tax on most goods and services; most basic food and many health and education services are GST-free; adding GST (× 1.1); the GST on a pre-GST price (× 0.1); removing GST (÷ 1.1, the reverse of a percentage increase, taught here for the first time); the GST inside a GST-inclusive price (÷ 11, one part in eleven); a receipt mixing GST-free and taxable items; VAT and overseas GST by the same parts idea (UK VAT 20%: one part in six; New Zealand GST 15%: ÷ 1.15). Not: currency conversion, business input tax credits, the Tourist Refund Scheme.

**Next:** math-s11-m03 (buy now, pay later): final frame is the headphones with "$480" and "or 4 payments of $120".

## 2. Site order, sections and worked examples

`year11/managing-money/lesson01.sa.html` (site L9), card 1 "GST, calculating in both directions": × 1.10 ($85 → $93.50), × 0.10 ($8.50), ÷ 1.10; the ÷ 11 shortcut because GST is 10/110 of the inclusive price; GST-free basic food, most medical services, childcare and some education. WE1: a plumber's $340 before GST ($374); a $1,628 laptop including GST ($1,480; GST $148; check). SAQ 1: $1,760 quote ($1,600; $160). Card 4 decision table. The budget and bill cards of lesson01 go to m07 and m08.

All values recalculated: no arithmetic error. VAT and overseas purchases: no site teaching (taught from the syllabus, ruling 3; logged MSY-02).

## 3. Recalculation (values for the design)

| Case | Working | Result |
| --- | --- | --- |
| Plumber $340 + GST | 340 × 1.1; GST 340 × 0.1 | $374; $34 |
| Laptop $1628 incl. GST | 1628 ÷ 1.1; 1628 ÷ 11 | $1480; $148 (check 1480 + 148 = 1628) |
| Slip | 1628 × 0.9; 1628 × 0.1 | $1465.20; $162.80 (both wrong) |
| Receipt | taxable 5.50 + 3.30 = 8.80; 8.80 ÷ 11 | GST $0.80 (slip 20.30 ÷ 11 = $1.85) |
| UK hoodie £36 incl. 20% VAT | 36 ÷ 1.2; 36 ÷ 6 | £30; £6 (slip 36 × 0.2 = £7.20) |
| NZ jacket NZ$69 incl. 15% GST | 69 ÷ 1.15; 69 × 15 ÷ 115 | NZ$60; NZ$9 |

## 4. Misconceptions and HSC-style traps

- Taking 10% of a GST-inclusive price as the GST (× 0.1 instead of ÷ 11).
- Removing GST by multiplying by 0.9.
- Applying GST to GST-free items on a receipt.
- Using ÷ 11 for VAT at 20% (the parts change with the rate).

## 5. Visual needs

The basket and receipt; a parts bar (10 blue parts + 1 violet part) with a rate slider that turns it into 5 + 1 (20%) and 100 + 15; a forward and backward arrow pair (× 1.1, ÷ 1.1); a coded tradesperson's quote and a laptop price card; the travel suitcase for the overseas purchase. Kit: `PlateImg`, `HandTag`, `WorkingBoard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `PercentBar` (m01); new `PartsBar`.

## 6. Two original candidate practice questions

**Question 1.** A mechanic's bill is $462, including GST. Find (a) the GST included in the bill and (b) the price before GST.
Worked answer: (a) 462 ÷ 11 = $42. (b) 462 ÷ 1.1 = $420 (or 462 − 42). Check 420 × 1.1 = 462. Slip: "GST = 462 × 0.1 = $46.20".

**Question 2.** In the United Kingdom, VAT is 20%. A train ticket costs £54, including VAT. (a) Find the price before VAT. (b) Find the VAT included. (c) A friend says the VAT is 20% of £54, which is £10.80. Explain the error.
Worked answer: (a) 54 ÷ 1.2 = £45. (b) 54 − 45 = £9. (c) The 20% was added to the price before VAT, £45, not to £54; the VAT is one part in six of £54.

## 7. Everyday anchors

A supermarket receipt (food); a plumber's quote and a laptop (services and tech); a hoodie in London and a jacket in Auckland (travel); a mechanic's bill and a train ticket (attempts). No people.

## 8. Site corrections and decisions for Claude

- Reverse percentages are taught here, once (route inputs 10).
- GST-free items on a receipt are the problem-solving case; the receipt marks them as shops do (a symbol beside each GST-free line).
- VAT rates: UK standard VAT 20%; New Zealand GST 15% (Codex confirms both with dated government pages). Prices stay in the local currency (pounds, New Zealand dollars); no exchange rate is needed.
- Pace: about 8 minutes.
