# math-s12-i01: How does simple interest grow, and what does its graph look like?

Maths Standard research pack (Year 12, Investment and loans), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Investment and loans):

- `cif2fdb59a` (Investment): Calculate simple interest for different rates and time periods using the formula I = Prn where I = simple interest, P = principal, r = interest rate per time period and n = number of time periods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered. The official wording contains MathML; quote it from `sourceHtml`.
- `ciddd3a836` (Investment): Solve problems involving simple interest in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered.
- `ci04f3e92c` (Investment): Compare simple interest graphs for different interest rates and time periods, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35). Site coverage: covered in the crosswalk; in fact thin (one sentence on the straight line, no comparison; logged in section 5 of the site corrections).

Standard 1 (Year 12, Investment):

- `ci9ef22098`: Calculate simple interest for different interest rates and time periods using the formula I = Prn where I = simple interest, P = principal, r = interest rate per time period and n = number of time periods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6). Site coverage: covered (Standard 2 lesson; the site has no Standard 1 pages). MathML in `sourceHtml`.
- `ci74c61185`: Solve problems involving simple interest in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6). Site coverage: covered.
- `ci32753eab`: Compare simple interest graphs for different interest rates and time periods, with and without using digital tools [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6). Site coverage: as `ci04f3e92c`.

The Standard 1 wording matches Standard 2 except "different interest rates" for "different rates". These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs.

**Course:** Standard 1 and Standard 2, identical content. Standard 1 viewers arrive from a08, Standard 2 viewers from a13; both final frames show the same coin jar and axes (a13 pack and design).

**Entry knowledge:** math-s11-m01: `cib256693a` (percentages of an amount; 6% = 0.06). math-s11-f01: `ci7f303375` (substituting into a formula). math-s11-l03: `cib2d6c0df` (a linear model: the gradient is a rate of change, the intercept a starting value). Changing the subject (math-s11-f03) for finding P, r or n.

**Prior video:** math-s12-a13 (Standard 2); math-s12-a08 (Standard 1).

**Start:** a13's final frame exactly: the coin jar `maths/ma12-coin-jar-v1.png` beside small empty axes ("balance ($)" up, "years" across), the grey chip "the same amount added each year: what shape?", chips "Next: simple interest" and "?". This video answers the chip: the same interest every year makes a straight line.

**Stop:** Simple interest is worked out on the original principal only, so the same dollar amount is earned (or charged) every period, and the interest never earns interest itself; I = Prn with r as a decimal per period and n counted in the same periods; the total A = P + I (the site's letters for the total; the syllabus names only I, P, r and n); find P, r or n from the other three; the graph of the total against time is a straight line that starts at P and rises Pr dollars each period; compare graphs: a higher rate gives a steeper line, a larger principal starts higher (and is also steeper), a longer time runs further along the same line; draw by hand from a short table and with a graphing app or spreadsheet. Compound interest is i02.

**Next:** math-s12-i02.

## 2. Site order, sections and worked examples

Read-only source: [investment-and-loans/lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson05.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `15a2692f977fe80811f2a7f0f628cac8369b7990d2f5bccfcbd22d01ac1c63aa`. Title: Simple Interest. Lesson id maths-std-y12-m7-l01. Sections (`data-step-id`): `orient-to-simple-interest`, `see-money-grow-in-a-straight-line`, `rearrange-the-interest-formula`, `work-examples-and-drill`, `avoid-the-interest-traps`, `revisit-simple-interest-thinking`. Retired `lesson01.sa.html` duplicates this lesson and is not used.

### Source lesson05, hook and card 01

"You lend $2000 to a friend at 6% per year simple interest. They repay after 3 years. How much interest do they owe? How much total do they repay?" Revisit: "$I = 2000 \times 0.06 \times 3 = \$360$. Total repayment $= 2000 + 360 = \$2360$."

### Source lesson05, card 05 (`see-money-grow-in-a-straight-line`)

"Simple interest is calculated as a fixed percentage of the principal for each time period. Unlike compound interest, the interest itself does not earn further interest, the same dollar amount is added every period." Worked example: "$5000 invested at 4% p.a. simple interest for 3 years. $I = 5000 \times 0.04 \times 3 = \$600$ $A = 5000 + 600 = \$5600$". "Graphing amount vs time gives a straight line with slope $Pr$ and y-intercept $P$."

### Source lesson05, card 06 (`rearrange-the-interest-formula`)

Table of $P = I/(rn)$, $r = I/(Pn)$, $n = I/(Pr)$. "An investment earns $720 interest at 6% p.a. over 4 years. What was the principal? ... $= \$3000$".

### Source lesson05, `we-1` and `we-2`

PROBLEM 1 · CALCULATE INTEREST AND TOTAL AMOUNT. "A loan of $8000 at 7.5% p.a. simple interest. Find the total repayment after 5 years." $I = \$3000$, $A = \$11\,000$. PROBLEM 2 · FIND THE PRINCIPAL. "Find the principal that earns $450 interest at 5% p.a. over 3 years." $P = 450/0.15 = \$3000$.

### Source lesson05, traps and drills

Trap 01 (5 for 0.05: "$I = 4000 \times 5 \times 3 = 60\,000$"); Trap 02 (interest against total); Trap 03 (months with a yearly rate). Drill 2 (c): "$10,000 at 5% for 10 years vs 10% for 5 years" (both $5000). SA 3 (b): X at 8% and Y at 6% on $5000, $1000 apart after 10 years.

Only the parts named in the stop boundary belong to this video. The buy now pay later item in drill 2 (b) belongs to the loans section (math-s12-i12, another author).

## 3. Recalculation

- Hook: 2000 × 0.06 × 3 = $360.00; total $2360.00.
- Card 05: 5000 × 0.04 × 3 = $600.00; $5600.00. Card 06: 720 ÷ 0.24 = $3000.00.
- `we-1`: 8000 × 0.075 × 5 = $3000.00; $11 000.00. `we-2`: 450 ÷ 0.15 = $3000.00.
- Drills: $630.00, $7152.00, 4.8%, 5 years, $3000.00; drill 2 (c) $5000.00 both. MC 1 $6840.00; MC 4 $5200.00; SA 1 $855.00 and $157.50 extra; SA 3 (b) 10 years.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`, output `recalc-output.txt`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Substituting 6 for 6% (site Trap 01).
- Giving the interest when the total is asked, or the reverse (Trap 02).
- A rate per year with n in months (Trap 03).
- Thinking the interest grows each year because the balance "feels" bigger (the main contrast with i02).
- Reading the steeper of two lines as "the bigger principal" when it is the higher rate, or the reverse: both raise the gradient (Pr), so read the intercept as well.
- Drawing the line from the origin instead of from P.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- a13's coin jar and empty axes, then the answer: each year one equal stack of coins (the year's interest) drops into the jar and one equal step is added to the graph; the steps line up into a straight line from P.
- A bank-balance bar that stays at the principal while the interest goes to the jar (interest paid out: the plain reason simple interest never grows).
- I = Prn with each letter tagged to the anchor (P on the account, r on a rate tag, n on a year counter), then A = P + I.
- A "find the missing one" card for P, r or n: cover the unknown and read the rearrangement (site card 06's table).
- Two or three lines on one set of axes: same principal at 4% and 6% (steeper), and a larger principal at 4% (starts higher); then the same line run for 3 years and 5 years (longer time, same line). Then the same comparison in an unbranded graphing app or a spreadsheet chart.

Advanced reuse (visual parts only): `StudioPlot` with linear lines; `GrowthBars` for equal yearly interest; `PeriodTimeline` (series-parts.tsx) for year tabs; `LoanBalanceBar` in deposit mode, if a block per year suits; `ScreenApp` for the app; `LiveReadoutBoard` and `ParameterSlider` for a rate slider that steepens the line. Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

Mia puts $4500 into an account that pays 4.2% p.a. simple interest. The interest is paid into her everyday account at the end of each year. (a) How much interest does she receive over 3 years? (b) What is the total of her principal and interest after 3 years?

**Worked answer:** (a) I = 4500 × 0.042 × 3 = $567.00. (b) 4500 + 567 = $5067.00.

### Question 2

Two investments of $2000 earn simple interest: A at 5% p.a. and B at 8% p.a. (a) Find the value of each after 4 years. (b) Their values are graphed against time. Which line is steeper, and what does its gradient mean? (c) How many years does A take to reach the value B has after 4 years?

**Worked answer:** (a) A: 2000 + 2000 × 0.05 × 4 = $2400; B: 2000 + 2000 × 0.08 × 4 = $2640. (b) B; its gradient is $160 a year, the interest it earns each year (A earns $100 a year). Both lines start at $2000. (c) 2000(1 + 0.05n) = 2640 gives n = 6.4 years.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "4500 × 4.2 × 3 = 56 700", crossed, "4.2% is 0.042"). Answers were checked with SymPy.

## 7. Everyday anchors

- **A gap-year fund** of $5000 at 4% p.a. simple interest for 3 years (site card 05's numbers), with the interest paid out each year into the coin jar from a13's frame: $200 a year, $600 in all, the account balance staying at $5000. This is a real way simple interest arises: an account or term deposit that pays its interest out rather than adding it (money; carries the opening and the graph).
- **A family loan for apprenticeship tools:** an apprentice borrows $2000 from a relative at 6% p.a. simple interest and repays after 3 years (the site's hook numbers, with "a relative" in place of "a friend"): $360 interest, $2360 back (work).
- **Music gear on a fixed-interest loan:** $8000 for a band's PA system at 7.5% p.a. simple interest over 5 years (site `we-1`): $3000 interest, $11 000 repaid (music and hobbies). The reused studio speakers plate `maths/ma11-studio-speakers-v1.png` may fit after an appearance check.

Varied everyday contexts (savings, a trade, music). None repeats an anchor in the Year 12 Advanced finance designs (math-a12-f01 to f15: cricket scoreboard, stacking chairs, tins, tree planting, paper folding, rice, tennis ball, country town, first car loan, home loan, motorbike, apartment deposit, super statement, savings app, holiday fund; grepped 18 November 2026: "gap year", "apprentice", "PA system" no hits) or in the Standard a-strand packs. Claude picks; none is required. Anchors are drawn as objects, never people.

**Money figures (root ruling 5):** simple interest products are uncommon now (most savings accounts compound), which is why the "interest paid out" framing matters. Rates in late 2026: RBA cash rate 4.85% from 3 November 2026 ([RBA, Statement on Monetary Policy, November 2026](https://www.rba.gov.au/publications/smp/2026/nov/overview.html)); top 12-month term deposits about 5.5% to 5.7% p.a. ([money.com.au, updated 5 November 2026](https://www.money.com.au/term-deposit-rates)). The site's 4%, 6% and 7.5% are realistic, if slightly low for a 2026 term deposit; keep them. Say once that rates change.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 5. No numerical error in lesson05. Gap logged: the graph comparison (`ci04f3e92c`, `ci32753eab`) is one sentence on the site; the video must teach it.

Decisions for Claude:

- **Letters.** The syllabus defines I, P, r and n; the total A = P + I is the site's (and common HSC) notation. Use both, with A introduced as "principal plus interest".
- **Join.** a13's frame asks "the same amount added each year: what shape?" without an answer. Answer it in the first minute with the coin jar filling by equal stacks, then name the line.
- **Graph comparison.** This is the point the site leaves thin and both courses need, so give it a full scene: by hand from two short tables, then an app with a rate slider. Standard 1's wording is the same.
- Pace: three points, each short; fits 8 to 9 minutes. Watch the rearranging (P, r, n); one worked rearrangement (`we-2`) is enough, with the others in the key notes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
