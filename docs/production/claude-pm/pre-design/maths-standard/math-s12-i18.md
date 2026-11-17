# math-s12-i18: Credit card or personal loan: which suits a short, medium or long-term goal?

Maths Standard research pack (Year 12, Investment, loans and annuities), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans, group "Credit cards"):

- `ci3e2e1f21`: Compare credit options to best manage finances to meet short-term, medium-term and long-term goals, such as credit cards and personal loans [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: **partial**.

Standard 1 (Year 12, Depreciation and loans, group "Credit cards"):

- `ci52cad03f`: Compare credit cards and personal loans as options to meet short-term, medium-term and long-term financial goals [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb). Site coverage: **partial**.

These are CMS codenames, not published content-point codes (ruling 16). Standard 2 is broader ("credit options ... such as"), so it may include BNPL and home loans; Standard 1 names only credit cards and personal loans.

**Course:** Standard 1 and Standard 2. For Standard 1, i18 is the last video of the strand: Standard 1 has no annuities, so Standard 1 viewers go from i18 to math-s12-t01. The final frame must work for them (see section 8).

**Entry knowledge:** math-s12-i12: `ciad381478` (Standard 1 `ci9fb7eb0d`): total cost of BNPL, short and long loans; math-s12-i16: `ci3480c9ff`, `ci435086e3` (Standard 1 `ci9715d6e5`, `ci8a052732`): card rates against other loans, fees and the interest-free period; math-s12-i17: `cife5c18db`, `ci13e98315` (Standard 1 `ci42184aca`, `ci2dbee6b0`): the minimum-payment cost. Year 11 math-s11-m09 (`ci3d78450e`): budgeting, saving and an emergency fund.

**Prior video:** math-s12-i17 (or i17b if split).

**Start:** i17 ends on the minimum-repayment warning: "31 years and 9 months". A credit card is a poor tool for a debt that lasts years. This video asks which credit tool fits which goal.

**Stop:** Sort goals by time (short-term: paid off within about a year, e.g. a trip or a phone; medium-term: about one to five years, e.g. a car repair, a used car, furniture; long-term: more than five years, e.g. a home, which uses a home loan, not a card or a personal loan); compare a credit card and a personal loan on the same amount by total interest, using the same monthly repayment for both; state when each suits: a card for short purchases cleared within the interest-free period, a personal loan (fixed rate, fixed term, fixed repayment) for medium-term costs, a home loan or saving for long-term goals; weigh fees, flexibility, the risk of spending more on an open limit, and whether saving first is possible; justify a choice in one or two sentences with numbers. Annuities begin in i19 (Standard 2).

**Next:** math-s12-i19 (Standard 2); math-s12-t01 (Standard 1).

## 2. Site order, sections and worked examples

Read-only sources (kyleajames33-beep/Teaching-APP at `5d74a627`, not modified):

- [investment-and-loans/lesson10.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson10.sa.html), SHA256 `9dfbd06d389ddb8e49b8223ac80ece3589e8950fa990e7486dbf0753bf9253c5`, section `orient-to-credit-cards` (the opening: "Credit cards are one of the most expensive forms of borrowing").
- [investment-and-loans/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson07.sa.html), SHA256 `307eb5dd6a8211de8cfe476fbccd6313f2ca79328264c1da00389979b5646ce3`. Title: Comparing Interest Rates. Lesson id maths-std-y12-m7-l03. Section `work-the-rate-comparisons` (`we-1` compares savings products; `we-2` is a flat-rate car loan).
- [investment-and-loans/lesson12.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson12.sa.html), SHA256 `cb32815eed2123cd6997f15a0617b992061ed309b103cc18d7e601b008fd4acb`, section `drill-mixed-problems`, drill 1 (b): "A credit card charges 19.99% p.a. on $3,000. A personal loan offers 8% p.a. over 3 years. Compare total cost of each option for clearing the debt." (No answer on the page.) Also card 02's "the cheapest option is not always the best, consider flexibility, risk, liquidity, and personal circumstances".

The crosswalk marks both points partial: the site never sorts goals into short, medium and long term, and never compares a credit card with a personal loan in numbers. Most of this video is original teaching from the syllabus.

## 3. Recalculation

- lesson12 drill 1 (b), worked for the first time: personal loan $3 000 at 8% p.a. over 3 years, $94.01 a month, total $3 384.36, interest $384.36. The same $94.01 a month on a card at 19.99% p.a. (monthly compounding) takes 46 months, interest $1 315.72.
- Teaching comparison at today's rates: $6 000 for a car repair. Personal loan at 12% p.a. over 2 years: $282.44 a month, total $6 778.56, interest $778.56. A card at 21% p.a. paid at the same $282.44 a month: 27 months, interest $1 567.97. At $180 a month on the card: 51 months, interest $3 083.75; at $120 a month: 120 months, interest $8 383.57.
- Short-term: $1 800 of flights left on a card at 21% p.a. for 30 days of daily compounding costs $31.33; paid in full by the due date, $0.

Recalculated with SymPy 1.14.0 (`work/brief-standard-i2/recalc.py`), interest rounded to the cent each month.

## 4. Misconceptions and HSC-style traps

- Comparing the repayment sizes instead of total interest (a card's minimum looks smaller than a loan repayment).
- Thinking a personal loan is always cheaper. For a purchase paid off inside the interest-free period, the card costs nothing; a personal loan charges interest from the start and often an establishment fee.
- Using a card or a personal loan for a long-term goal like a home.
- Forgetting that a card's limit stays open after the debt is paid (easy to borrow again), while a personal loan closes when repaid.
- Writing a recommendation without a number ("the loan is cheaper" earns less than "$778.56 against $1 567.97").

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A timeline of goals across 0 to 30 years with three zones (short, medium, long) and objects dropping into them: flights, a phone, a car repair, furniture, a used car, a house. Each zone gets its usual credit tool as a tag.
- A side-by-side race: the same $6 000 debt and the same $282.44 repayment, a personal-loan balance bar and a card balance bar (`LoanBalanceBar`, finance-parts.tsx) ticking down month by month; the loan reaches zero at month 24 while the card still owes money, finishing at month 27. Totals land under each.
- A decision card with three questions (How long will it take to repay? Can it be cleared in the interest-free period? Can I save first?), each answer lighting the matching tool.
- A small feature table: card (variable balance, open limit, interest-free days on purchases, about 21% p.a.) against personal loan (fixed amount, fixed term, fixed repayment, about 10% to 14% p.a.), with sources in small text.

Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

Noah needs $4 000 for furniture for his first flat. He can (A) take a personal loan at 12% p.a. over 2 years with repayments of $188.29 per month, or (B) use a credit card at 21% p.a. and pay the same $188.29 per month, which takes 27 months with a final payment of $149.82.

(a) Find the total interest for each option. (b) Which option suits this medium-term goal? Justify your answer with numbers.

**Worked answer:** (a) A: 24 × $188.29 = $4 518.96, interest $518.96. B: 26 × $188.29 + $149.82 = $5 045.36, interest $1 045.36. (b) The personal loan: it costs $526.40 less in interest and is repaid 3 months sooner, and its fixed term suits a debt that will take about two years.

### Question 2

Classify each goal as short-term, medium-term or long-term, and name a suitable way to pay for it, with a reason: (a) $900 flights for a trip in two months, which can be paid in full when the statement arrives; (b) a $12 000 used car to be paid off over 3 years; (c) a first home in about 8 years.

**Worked answer:** (a) Short-term: credit card, paid in full by the due date, so no interest is charged. (b) Medium-term: personal (or car) loan, with a lower rate than a card and a fixed term. (c) Long-term: save a deposit and use a home loan, which has the lowest rate; a card or personal loan is not suited to a debt lasting many years.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "the card is cheaper because there are no fees", crossed). Answers were checked with SymPy (`work/brief-standard-i2/practice.py`).

## 7. Everyday anchors

- Flights for an end-of-year trip, paid on a card and cleared in full by the due date (travel; short-term).
- A $6 000 car repair after a breakdown, compared on a card and a personal loan (cars; medium-term; the teaching comparison).
- Furniture for a first flat on a $4 000 loan (renting; carries Question 1), with a first home as the long-term contrast.

Drawn as objects (a boarding pass, a car on a hoist, a couch, a house), never people. Grepped 18 November 2026: "car repair", "furniture" and "boarding pass" have no hits in the Advanced finance designs or the Standard a-strand packs. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

Partial site coverage is logged as a gap (MS-30 in `../../site-corrections-maths-standard.md`, section 6). Decisions for Claude:

- **Definitions of short, medium and long term.** The syllabus does not define them. Use "within about a year", "about one to five years" and "more than five years" as a stated convention (common in financial planning), and say goals, not products, set the term.
- **Rates (ruling 5).** Card about 21% (RBA F5, October 2026: standard 21.74%); personal loan 10% to 14% (RBA F8, September 2026: new fixed-rate personal term loans 10.39%; unsecured loans are usually higher); home loan about 7% (RBA F5, October 2026: 7.05%). Say once that rates change.
- **Responsible framing.** One plain sentence: if a purchase cannot be cleared within the interest-free period, a card is the dearest way to borrow for it; saving first or an emergency fund (Year 11) avoids interest altogether. No lecture.
- **Standard 1 ending.** Standard 1 viewers leave here for math-s12-t01, Standard 2 viewers go to i19. The final frame needs a neutral hand-off: for example, the long-term zone's house with a chip "Standard 2: next, annuities (saving for that deposit)" and a grey chip "Standard 1: next, right-angled triangles". Root decides.
- **Pace.** One comparison, one sorting task and a justification fit 7 to 8 minutes.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
