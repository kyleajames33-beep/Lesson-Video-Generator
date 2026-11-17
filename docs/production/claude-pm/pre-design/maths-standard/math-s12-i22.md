# math-s12-i22: How do the starting amount, payment, rate and term change an annuity's value?

Maths Standard research pack (Year 12, Investment, loans and annuities: Annuities), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Annuities):

- `ci025a6c75`: Examine the effect of varying the amount initially invested, the value of the periodic payment, the interest rate and the duration of the annuity on the total value of the investment, using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3). Site coverage: covered (duration only; see section 8).

Standard 1: no matching point. Standard 2 only.

This is a CMS codename, not a published content-point code (ruling 16).

**Course:** Standard 2 only. "Using digital tools" is part of the point, so the main tool is a spreadsheet (and, once, an unbranded online calculator).

**Entry knowledge:** math-s12-i19: `ci75f171a2` (an annuity spreadsheet, filled down); math-s12-i20 and i21: `ci8032ba07`, `cifb9dd435` (FV with factors); math-s12-i02: `ci64a24122` (a single sum grows by (1 + r)^n).

**Prior video:** math-s12-i21.

**Start:** i21 ends with two timelines arriving at the same $50 000: many small deposits, or one single sum. So the starting amount matters as well as the deposits. This video changes each input in turn and watches the final value.

**Stop:** With a spreadsheet that has four input cells (amount initially invested, periodic payment, interest rate per period, number of periods) and a final-value cell, change one input at a time from a base case and record the new value; explain each effect: doubling the payment doubles the annuity's value (it scales); an amount initially invested adds that amount grown by (1 + r)^n; a higher rate and, above all, a longer duration grow the value by more than in proportion, because interest is earned on interest for longer; compare the total contributed with the final value in each case; state which change has the biggest effect in a given case and why starting early matters. Superannuation, savings and loan decisions are i23.

**Next:** math-s12-i23.

## 2. Site order, sections and worked examples

Read-only source: [annuities/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at `5d74a627`), SHA256 `7507f0b0368b652290ae14ed4768d709dd55e5448c5f224999d1e195c4aa708a`. Sections used: `analyse-starting-early` (card 07), `apply-future-value` (SA 3), `orient-future-value` (the "Time is everything" key idea). Also [annuities/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson01.sa.html), SHA256 `10e58b7c910545878083156e34cbb6a9d719081a8e75cbaf7862ff18d28a83a4`, card 08's closing sentence: "raise the contribution, lengthen the term, change the rate, and watch which of the three moves the final balance most."

### Source lesson02, card 07 ("The power of starting early")

"Both investors contribute $200/month at 6% p.a. compounded monthly. Investor A starts at age 25 and contributes for 40 years (to age 65). Investor B starts at age 35 and contributes for 30 years (to age 65). Investor A: FV ≈ $398,298. Investor B: FV ≈ $200,900. Starting 10 years earlier (and contributing only $24,000 more) nearly doubles the final balance."

### Source lesson02, SA 3

"Person A contributes $500/month from age 25 to 35 (10 years), then stops. Person B contributes $500/month from age 35 to 65 (30 years). Both earn 7% p.a. compounded monthly." Answers: "(a) ≈ $86,542 (b) ≈ $702,421 (c) ≈ $609,985 (d) Person A wins despite contributing for 20 fewer years".

The site covers duration and (in passing) payment and rate; it never varies the amount initially invested and never shows a digital tool doing the varying. Original teaching is needed for both.

## 3. Recalculation

- Card 07: A $398 298.15; B $200 903.01 (site "≈ $200,900"). Correct.
- SA 3: A at 35 $86 542.40; A at 65 $702 421.17; B $609 985.50. Correct.
- Base case for the spreadsheet (original): $0 initially, $100 a month, 0.5% a month (6% p.a.), 120 months: $16 387.93 (total contributed $12 000). One change at a time: payment $200: $32 775.87 (exactly double); duration 240 months: $46 204.09 (contributions double to $24 000, value × 2.82); rate 1% a month: $23 003.87; $2 000 initially invested: $20 026.73 (the $2 000 alone grows to $3 638.79).

Recalculated with SymPy 1.14.0 (`work/brief-standard-i2/recalc.py`, `practice.py`). All site values used here match.

## 4. Misconceptions and HSC-style traps

- Expecting doubling the term to double the value (it more than doubles).
- Expecting doubling the rate to double the value, or doubling the payment to more than double it.
- Changing two inputs at once and crediting one of them with the whole effect.
- Forgetting that an amount initially invested earns interest for the whole term, so it is worth more than its face value at the end.
- Comparing final values without comparing what was put in.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The spreadsheet (SpreadsheetGrid) with an input panel of four cells and a large output cell; one input glows, its value changes, the 120-row model recalculates (a fast fill-down shimmer), and the output and a "total contributed" cell update. A results log underneath gains a row for each experiment.
- A bar chart (one bar per experiment) split into contributed (blue) and interest earned (amber), so "the payment scales, the term compounds" is visible: the $200 bar is exactly twice the base bar in both colours; the 240-month bar's amber part is much more than double.
- A two-curve balance graph for card 07's investors A and B (StudioPlot): the curves run side by side, then A's pulls away; the gap at age 65 is labelled.
- One brief look at an unbranded online savings calculator (a coded browser window, not a phone), confirming the base case: the syllabus's "digital tools".

Advanced reuse (visual parts only, ruling 7): math-a12-f14 built "a savings app with sliders" on the painted phone. Do not reuse that anchor or the phone app; the Standard version is a spreadsheet experiment log. `DepositTower` and `GoalMeter` are optional. Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

A spreadsheet models an annuity. Each row changes one input from the base case.

| Case | Initially invested | Monthly payment | Rate per month | Months | Future value |
| --- | --- | --- | --- | --- | --- |
| Base | $0 | $100 | 0.5% | 120 | $16 387.93 |
| A | $0 | $200 | 0.5% | 120 | $32 775.87 |
| B | $0 | $100 | 0.5% | 240 | $46 204.09 |
| C | $0 | $100 | 1% | 120 | $23 003.87 |
| D | $2 000 | $100 | 0.5% | 120 | $20 026.73 |

(a) For cases A and B, find the total contributed and the interest earned. (b) Both A and B double the total contributed. Explain why B's future value is much larger. (c) In case D, how much does the $2 000 grow to?

**Worked answer:** (a) A: contributed $24 000, interest $8 775.87. B: contributed $24 000, interest $22 204.09. (b) In B the money is invested for longer, so interest is earned on interest for 120 more months; in A the same 120 months are used, so the value simply doubles. (c) $20 026.73 − $16 387.93 = $3 638.80 (the $2 000 grows by (1.005)^120; $3 638.79 exactly, a cent of rounding in the table).

### Question 2

Two friends each save $150 at the end of every month at 6% p.a., compounded monthly. Alex starts at 18 and saves for 20 years. Jo starts at 28 and saves for 10 years. A savings calculator gives Alex $69 306.13 and Jo $24 581.90. (a) How much more does Alex contribute than Jo? (b) How much more does Alex have at the end? (c) Explain the difference.

**Worked answer:** (a) $36 000 − $18 000 = $18 000. (b) $69 306.13 − $24 581.90 = $44 724.23. (c) Alex's early deposits earn interest for many more months, and that interest earns interest; the extra $18 000 contributed becomes $44 724.23 more at the end.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "B doubles the time so it doubles the value", crossed). Answers were checked with SymPy (`work/brief-standard-i2/practice.py`).

## 7. Everyday anchors

- A first-job savings plan in a spreadsheet: $100 a month from a part-time wage, tested with "what if" changes (work and money; the base case).
- Two school friends who start saving at 18 and at 28 (money; carries Question 2), drawn as two account books, never people.
- A bank lifting its bonus saver rate, and the same plan re-run at the new rate (money; the rate input).

Grepped 18 November 2026: Advanced f14's anchor is "a savings app with sliders" on a phone; this video uses a spreadsheet and a desktop calculator instead. "Spreadsheet experiment", "two account books" and "bonus saver" have no hits in the Advanced finance designs or the Standard a-strand packs. Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

Partial coverage is logged as part of MS-29 in `../../site-corrections-maths-standard.md` (section 6): the site never varies the amount initially invested and shows no digital tool for this point. Decisions for Claude:

- **One change at a time.** Use the base case and four single changes; keep the site's card 07 as the "duration" story, and SA 3 as an optional surprise (stopping at 35 still beats starting at 35).
- **Amount initially invested.** Teach it as "a single sum grows by (1 + r)^n, then add the annuity", which links i02 and i21.
- **Rates.** Say once that rates change; RBA F4 (October 2026) bonus savings accounts averaged 5.05% p.a., so 6% is a slightly generous teaching rate.
- **Pace.** Four experiments, one story and a chart fit 7 to 8 minutes.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
