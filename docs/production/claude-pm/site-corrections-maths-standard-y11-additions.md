# Site corrections: Mathematics Standard Year 11 additions (Managing money onward)

Written by Claude (designer of record) on 23 November 2026 while planning the Year 11 strands that had no packs (coherence audit B1 and S9: `checks/maths-standard-coherence-audit-2026-11-23.md`). A new file, kept separate from `site-corrections-maths-standard.md` (MS-01 to MS-83), which was not edited. Ids here are MSY-01 onward so they cannot clash with the MS series. Source: read-only clone `C:/Users/kygs/teaching-app-fix` of `kyleajames33-beep/Teaching-APP`, HEAD `5d74a627` (16 November 2026), folder `subjects/maths-standard/year11/`. No site file was changed and nothing was run there. Every site value used in the Managing money packs was recalculated (scratchpad `s11m/verify.py`); no arithmetic error was found, so the items below are teaching, data-currency and alignment findings, in the same format as the MS series (lesson, old text, correction, reason).

## 1. Managing money (packs and designs m01 to m09)

### MSY-01. An unsupported claim about exam performance

- Lesson: `year11/managing-money/lesson03.sa.html`, Think First and card 3.
- Old text: "this single question catches out more students in the exam than any other percentage idea" and "This is the single most-tested idea in the whole percentage strand".
- Correction: "This is a common mistake, so check it carefully." (or remove both sentences).
- Reason: neither claim has a source. The videos do not repeat them.

### MSY-02. VAT and overseas purchases are not taught (syllabus gap)

- Lesson: `year11/managing-money/lesson01.sa.html` (GST only); `lesson02.sa.html` is tax exam practice.
- Points: `cib3251328` ("... GST or value-added tax (VAT) when purchasing goods and services in Australia and internationally") and `cib09c3969` ("Solve problems involving GST or VAT"), both partial in the crosswalk.
- Correction (owner decision): add a card on VAT using the same "parts" idea as GST: at 20% the price before VAT is 5 parts and the VAT 1 part, so VAT = price ÷ 6 and the price before VAT = price ÷ 1.2 (UK standard rate 20%); New Zealand's GST is 15% (÷ 1.15). Prices stay in the local currency. Video m02 teaches this.
- Reason: both points name VAT and international purchases explicitly.

### MSY-03. "Four fortnights is two months", and the monthly account fee presented as standard

- Lesson: `year11/managing-money/lesson04.sa.html`, key terms ("Account fee ... over the 2 months the plan runs"), card 2 ("Four fortnightly payments run for 2 months, not 4"; "Must do: Convert the instalment schedule into months before applying a monthly account fee"), WE2, SAQ 2.
- Old text: as quoted; the account fee appears in every BNPL example as if all plans charge one.
- Correction: state the months on each plan's card ("the plan is open for 2 months") rather than deriving months from fortnights; describe a typical pay-in-4 plan as "first payment today, then every two weeks, finished in six weeks"; add "Some plans charge a monthly account fee; most charge late fees" (Moneysmart, "Buy now pay later services").
- Reason: a pay-in-4 plan with the first payment at purchase finishes in six weeks; "4 fortnights = 2 months" is a modelling choice, not a rule, and students will apply it to plans with other schedules. Many common plans have no account fee. Video m03 follows the correction.

### MSY-04. Lay-by is missing from the methods of purchase

- Lesson: `year11/managing-money/lesson04.sa.html`, cards 4 and 5.
- Correction: add lay-by (the shop holds the item while you pay it off, then you take it home; usually a small fee) beside cash, terms and buy now, pay later in the comparison and the justification questions.
- Reason: `ci039eaed1` asks students to compare "different methods of purchasing goods" and justify one for a context; lay-by is the common low-cost option when an item is not urgent, which makes the "how urgent?" question meaningful. Video m04 includes it with an example fee.

### MSY-05. "Or part" is never exercised; the same $620 for two premiums; no loan

- Lesson: `year11/managing-money/lesson05.sa.html`, the stamp duty table, key terms, card 2, WE1, WE2, SAQ 1.
- Old text: every price is a whole number of hundreds ($24 000, $31 000, $52 000, $48 000), although the table says "for every $100 (or part)"; key terms give "a $620 green slip" and "a $620 annual premium" (comprehensive).
- Correction: add one example with a part ($14 990 → 150 lots of $100 → $450 at $3); give the two premiums different values (for example green slip $780, comprehensive $1640); add one line on buying with a loan: "loan repayments from the lender's calculator × number of repayments" (the point says "purchase price or loan repayments").
- Reason: "or part" is the only non-routine step in NSW stamp duty; identical premiums invite students to think CTP and comprehensive are the same cover; the loan option is in the point. Video m05 follows all three.

### MSY-06. Running costs omit the green slip renewal; petrol at $2.00

- Lesson: `year11/managing-money/lesson05.sa.html`, card 3, card 4's sheet, WE3, SAQ 2.
- Old text: "the ongoing list is short enough to memorise: fuel, servicing, tyres, registration renewal, insurance"; "petrol at $2.00 a litre".
- Correction: "fuel, servicing, tyres, registration and green slip renewal, insurance"; reprice petrol near the current NSW average (about $2.25 a litre in November 2026, ruling 47) or label it "example price".
- Reason: the CTP green slip is renewed every year with registration (the lesson's own card 1 says registration needs it); the lesson's "insurance" line is the optional policy. Video m06 follows the correction.

### MSY-07. GST added to household bills as a separate step

- Lesson: `year11/managing-money/lesson01.sa.html`, card 3 summary ("GST-inclusive total = pre-GST total × 1.10"), WE3 steps 5 and 6, SAQ 3.
- Correction: present bill rates as GST-inclusive, as Australian retail electricity and gas offers quote them, and note that residential water usage is GST-free; keep any "add GST" practice to items priced "plus GST" (such as a tradesperson's quote).
- Reason: students reading a real bill would add GST twice. Video m07 removes the step and adds meter readings and a gas block calculation, which the lesson names but never works.

### MSY-08. Groceries classed as discretionary

- Lesson: `year11/managing-money/lesson06.sa.html`, key terms ("Discretionary spending ... groceries $620 ..."), card 1 sheet, card 2 ("groceries $620, which is discretionary but essential"), WE1 to WE3; compare `lesson01.sa.html` key terms, which class groceries as a variable expense.
- Correction: use three groups: fixed (the same every time), variable essentials (needs whose amount changes: groceries, bills, fuel) and discretionary (wants you choose). Then living expenses = fixed + variable essentials, with no exception.
- Reason: the two lessons disagree, and "discretionary but essential" contradicts the term's own definition ("costs you choose, which can be reduced at short notice"). Videos m08 and m09 use the three groups and state the syllabus's two words.

### MSY-09. "Saving" is only the surplus

- Lesson: `year11/managing-money/lesson06.sa.html`, card 4.
- Correction: add saving first (an automatic transfer to a separate savings account on payday) as the saving strategy, beside budgeting, the emergency fund and monitoring.
- Reason: `ci3d78450e` lists "budgeting, saving, establishing an emergency fund ... and monitoring spending" as four strategies; the lesson treats saving as whatever is left. Video m09 teaches it and Year 12 i18 recalls it ("save first, or an emergency fund (Year 11)").

## 2. Applications of measurement, Time and location, Networks, Data analysis

Not yet written: the packs for these strands are not drafted in this batch (see `maths-standard-y11-design-status-2026-11-23.md`). The crosswalk's partial and missing points to start from (audit S9): megalitres (`ci529c4c4e`, `ci880a544f`); metric prefixes nano to tera (`ci7526e53a`, no lesson); irregular blocks of land by dissection (`ci05a36ac3`); the shortest path that is not the best path (`ci53383df4`, no lesson); survey design, privacy, ethics and faults (`ci22ad0284`, `cie24b93fc`, `ci63195120`, `ci4c7cc505`); uniform distributions (`cie2345a02`); spreadsheet graphs and statistics (`cia127389f`, `ci6446263f`, no lesson); infographics and misleading graphs (`ci2c2bc777`, `ci9c22fcc3`, `ciebdc8d60`); clusters and gaps (`ci72ffda24`). The audit's N7 items (a Year 11 speed page; formulas-and-equations lesson02 as a revision page) belong to the earlier strands and are left for root.
