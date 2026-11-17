# math-s12-i08: Savings account, term deposit, shares or property: which investment suits which goal?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `ci14eee60d` (Investment): Compare and contrast savings accounts, term deposits, shares and buying property as investment strategies [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.

Standard 1 (Year 12, Investment):

- `ci73459ef5`: Compare and contrast savings accounts, term deposits and buying property as investment strategies [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6). Site coverage: covered. Standard 1 has no shares.

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2. The shares row and any brokerage line carry a small grey "Standard 2" chip; Standard 1 viewers (arriving from i05, without i06 and i07) need nothing from that row.

**Entry knowledge:** math-s12-i02 (FV = PV(1 + r)^n). math-s12-i03 (inflation; appreciation, including property). math-s12-i06 and i07 (Standard 2: share prices can fall; dividends; brokerage). Year 11 money (math-s11-m01 percentages; m08 budgeting).

**Prior video:** math-s12-i07 (Standard 2); math-s12-i05 (Standard 1).

**Start:** Four places to put the same money. The interest rate is only one column; the goal and the time frame decide which column matters.

**Stop:** Describe each investment in plain words: a savings account (money available any time, a variable rate, often with bonus conditions), a term deposit (a fixed rate for a fixed term, money locked in, a penalty or notice to take it early), shares (part-ownership of companies, higher possible returns, prices can fall, brokerage each way) and buying property (rent and possible appreciation, a large deposit, transfer duty and fees, months to sell, values can fall); compare them on four measures: return, risk to the money put in, access (how quickly it turns back into cash) and cost to enter; calculate where possible (FV of a savings account against a term deposit; the NSW transfer duty on a property from the 2026-27 table); match an investment to a stated goal and time frame and justify the choice in two or three sentences, naming one advantage and one disadvantage. Not taught: superannuation, ETFs, tax and cryptocurrency (lesson11's extension). Loans begin at math-s12-i12 (another author), after depreciation.

**Next:** math-s12-i09.

## 2. Site order, sections and worked examples

Read-only sources:

- [investment-and-loans/lesson11.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson11.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3b17ea73c3ff3b8f2da6488fb83be639d528b8811a78e96019617f53e56962b4`. Title: Investment Strategies. Sections: `compare-investments-beyond-the-rate`, `risk-return-and-time-horizon`, `work-the-comparison-activities` (`we-1`).
- [investment-and-loans/lesson15.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson15.sa.html), SHA256 `8dbb9c452ae7fc68830e5346361d39507f955c0418e81037967c0a47b59faa29`. Sections: `drill-and-revisit-buying-shares` (card 10, "Comparing the four investment strategies"; the match activity) and `practise-buying-shares` (MC 5, SA 3).

### Source lesson15, card 10

"| Savings account | Lowest | None | Immediate | None" / "| Term deposit | Low, guaranteed | None | Locked for the term | None" / "| Shares | Higher, not guaranteed | Real, can fall | Days | Brokerage, both ways" / "| Property | Growth plus rent | Real, and undiversified | Months | Large, stamp duty and fees" (columns: Typical return, Risk to capital, Liquidity, Cost to enter). "No column ranks them on its own. A saver with a house deposit needed in eighteen months and a saver investing for retirement in forty years should choose differently from this same table".

### Source lesson15, SA 3 and MC 5

"Mel has $\$50\,000$ and will not need it for $5$ years. She is choosing between a savings account at $4.2\%$ p.a. compounded annually, a $5$-year term deposit at $4.8\%$ p.a. compounded annually, shares, and an investment property." Answers: savings $61 419.83; term deposit $63 208.64; difference $1788.81; (c) evaluates "the term deposit wins, so shares and property are not worth considering" on return, risk, liquidity and cost to enter. MC 5: "A saver needs their money back with certainty in exactly $12$ months" (a term deposit).

### Source lesson11, cards 05 and 06, `we-1`

Card 05: "Expected return ... Risk/volatility ... Liquidity ... Time horizon ... Tax implications ... Inflation". Card 06 risk-return table (savings 2 to 4%, term deposits 4 to 5%, bonds, property 5 to 8%, shares 7 to 10%, cryptocurrency) and "Short term (0–3 years): Safety first, savings accounts, term deposits". `we-1`: $20 000, a 4.5% term deposit against shares expected to return 7.5% with a possible 20% loss in a year, over 8 years: $28 442 against $35 670, worst case $26 545. The page marks super, ETFs, tax modelling and portfolio theory as beyond the syllabus; cryptocurrency and bonds are also outside the four named strategies.

## 3. Recalculation

- lesson15 SA 3: 50 000 × 1.042^5 = $61 419.83; 50 000 × 1.048^5 = $63 208.64; $1788.81 apart.
- lesson11 `we-1`: $28 442.01; $35 669.56 (site $35 670); worst case 20 000 × 0.8 × 1.075^7 = $26 544.79 (site $26 545). MC 5 and SA 1: $33 502.39 (site $33 503), $39 671.86 and $27 549.90.
- NSW transfer duty 2026-27 (general rates, Revenue NSW): a $650 000 unit: $11 602 + $4.50 per $100 over $387 000 = $23 437.00; a $600 000 unit: $21 187.00; $800 000: $30 187.00. Bracket ends check: $11 602 at $387 000 and $52 237 at $1 290 000.
- Original Question 1: $13 230.00 and $13 356.30, $126.30 apart.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`). Site values match (lesson11's ETF and super figures, MS-15 and MS-16, are not used here).

## 4. Misconceptions and HSC-style traps

- Ranking on the return column alone ("the highest rate wins").
- Treating a term deposit as fully liquid, or a savings account as having a fixed rate.
- Forgetting the cost to enter: brokerage on shares (Standard 2), transfer duty, legal fees and a deposit on property.
- Thinking property values only rise, or that shares are "gambling" rather than a risky investment.
- Giving a one-sided answer to "compare and contrast" (only advantages, or no link to the stated goal).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A four-by-four comparison grid (rows: savings account, term deposit, shares with a grey "Standard 2" chip, property; columns: return, risk, access, cost to enter) filling one column at a time, each column lit as it is explained.
- One painted object per row (a bank card or passbook, a sealed certificate with a date, a share table row, a small unit or house), never people.
- A goal card that slides across the grid and lights the column that matters for that goal: "needed in 18 months" lights risk and access; "40 years away" lights return.
- Two short calculations on the board: Mel's FV pair, and the transfer duty from one row of the NSW table (the table shown with its source chip).
- A "compare and contrast" answer frame: goal, best match, one advantage, one disadvantage.

Advanced reuse (visual parts only): `StudioCandidateTable` or `WorkingRows` table mode for the grid; `PlateFields` for coded fields on painted objects; `GrowthBars` for the two FVs; the painted house `phys-y11-house-v1.png` is math-a12-f10's anchor, so prefer a new unit plate. Kit needs in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

Jordan has $12 000 saved for a trip in 2 years. A savings account pays 5% p.a. compounded annually; a 2-year term deposit pays 5.5% p.a. compounded annually. (a) Find the value of each after 2 years. (b) Find the difference. (c) Jordan might need some of the money early for a car repair. Which option suits him better? Give one reason for and one against your choice.

**Worked answer:** (a) Savings: 12 000 × 1.05^2 = $13 230.00; term deposit: 12 000 × 1.055^2 = $13 356.30. (b) $126.30. (c) The savings account: he can take money out at any time (for), but he earns $126.30 less (against). (A justified choice of the term deposit, noting the locked money, can also earn the mark.)

### Question 2

An investment unit is bought for $600 000 in NSW. Transfer duty for a value between $387 001 and $1 290 000 is $11 602 plus $4.50 for every $100 over $387 000. (a) Calculate the transfer duty. (b) Give two ways buying property differs from a term deposit as an investment.

**Worked answer:** (a) 600 000 − 387 000 = 213 000; 213 000 ÷ 100 × 4.50 = 9585; duty = 11 602 + 9585 = $21 187.00. (b) Any two: property has large costs to enter (duty, fees, a deposit), takes months to sell, earns rent and may appreciate, and its value can fall; a term deposit has a fixed, known return, no entry cost and its money is locked only for the term.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2 (a): "600 000 × 4.5% = $27 000", crossed, "only the part over $387 000 is charged $4.50 per $100, plus $11 602"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A gap-year or travel fund needed in 18 months to 2 years:** short time frame, so savings account or term deposit (site card 10's "eighteen months" example; carries Question 1) (travel and money).
- **An inheritance of $50 000 not needed for 5 years:** Mel's four choices (site SA 3; money; carries the calculation and the "compare and contrast" answer). Standard 1 sees the same example with shares greyed.
- **A first investment unit in a NSW regional city:** rent, possible appreciation, and the 2026-27 transfer duty as the cost to enter (renting and property; links back to i03's unit value).

Varied everyday contexts (travel, an inheritance, property). None repeats an anchor in the Year 12 Advanced finance designs (math-a12-f10 is a home loan on a house; f12 saves for an apartment deposit; this video is about owning a unit as an investment, so use a different plate and say "investment unit") or the Standard a-strand packs (a12's holiday house is a cost split, not an investment). Claude picks; none is required. Objects, never people.

**Money figures (root ruling 5):** NSW transfer duty 2026-27 general rates ([Revenue NSW, current thresholds and rates](https://www.revenue.nsw.gov.au/_resources/duties-links/current-thresholds-and-rates), read 18 November 2026: $11 602 plus $4.50 per $100 over $387 000 up to $1 290 000); first home buyer concessions exist but do not apply to an investment property, so leave them out. Term deposits about 5.5% to 5.7% p.a. for 12 months ([money.com.au, 5 November 2026](https://www.money.com.au/term-deposit-rates)); bonus savings rates about 5.5% to 6.5% p.a. with conditions ([Canstar](https://www.canstar.com.au/news/payday-for-savers-highest-ongoing-rate-hits-630/)); cash rate 4.85% ([RBA](https://www.rba.gov.au/publications/smp/2026/nov/overview.html)). The site's 4.2% and 4.8% (SA 3) are a little low for November 2026 but fine as stated values; Question 1 uses current-looking rates. Say once that rates and duty change every year.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5 (MS-15 and MS-16 are in lesson11's extension content, not used here).

Decisions for Claude:

- **Lead with lesson15's four-measure table** (it names exactly the four syllabus strategies); use lesson11 only for the time-horizon idea and one worst-case share line (`we-1` step 4), which shows shares can lose value.
- **Leave out** bonds, cryptocurrency, super, ETFs and tax (not in the four strategies; the site marks most as extension).
- **Standard 1:** one sentence and a grey chip are enough to mark shares as Standard 2; the calculation and the example (Mel) work with three options.
- **Real costs:** the NSW duty line is the most concrete "cost to enter" a student will meet; show the bracket and the source, then say that duty changes each year.
- Pace: watch (four investments, four measures, two calculations); fits 8 to 9 minutes if each row is built once and reused. No split suggested.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
