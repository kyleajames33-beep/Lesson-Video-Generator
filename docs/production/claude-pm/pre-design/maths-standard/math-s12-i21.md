# math-s12-i21: How much must we put in to reach a savings goal?

Maths Standard research pack (Year 12, Investment, loans and annuities: Annuities), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Annuities):

- `cifb9dd435`: Using a table of interest factors, determine the contribution amount required to achieve a given future value or the single sum contribution required to produce an equivalent future value for any given annuity [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faa14f8aa3). Site coverage: covered (by formula only; see section 8).

Standard 1: no matching point. Standard 2 only.

This is a CMS codename, not a published content-point code (ruling 16).

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-i20: `ci8032ba07` (reading FV and PV interest factors; FV = contribution × FV factor); math-s12-i02: `ci64a24122` (PV = FV ÷ (1 + r)^n for a single sum).

**Prior video:** math-s12-i20.

**Start:** i20 ends with "contribution × factor = future value" and the gap-year saver's $13 524.45. Turn it round: the goal is known, the contribution is the question mark.

**Stop:** (1) Find the regular contribution for a goal: contribution = goal ÷ FV factor, and round up to the next cent when the goal must be reached; (2) find the single sum invested now that produces the same future value as a given annuity: single sum = contribution × PV factor (or the annuity's FV ÷ (1 + r)^n), and check it by growing it forward; (3) explain why the single sum is less than the total of the contributions (it earns interest for the whole term). The effect of changing each input is i22.

**Next:** math-s12-i22.

## 2. Site order, sections and worked examples

Read-only source: [annuities/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/annuities/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at `5d74a627`), SHA256 `7507f0b0368b652290ae14ed4768d709dd55e5448c5f224999d1e195c4aa708a`. Sections used: `calculate-future-value` (card 05, "Finding the required payment"), `work-future-value-examples` (`we-2`), `apply-future-value` (MC Q4, SA 2).

### Source lesson02, card 05

"Finding the required payment: Rearrange the formula to solve for M: M = FV × r ÷ ((1 + r)^n − 1). Example: Target $50,000 in 8 years at 5.4% p.a. compounded monthly. r = 0.0045, n = 96. M = 50000 × 0.0045 ÷ ((1.0045)^96 − 1) = 225 ÷ 0.53884 = $417.56/month."

### Source lesson02, `we-2`

PROBLEM 2 · FINDING REQUIRED PAYMENT. "Sarah wants $100,000 in her superannuation in 15 years. Her fund earns 7.2% p.a. compounded monthly." "(1.006)^180 = 2.935, so M = 600 ÷ 1.935 = $310.08/month". "Total deposited = 310.08 × 180 = $55,814. Interest = 100000 − 55814 = $44,186 (44% of final value)".

### Source lesson02, SA 2

"Emma needs $60,000 in 10 years for a house deposit. Her savings account pays 4.8% p.a. compounded monthly. (a) Find her required monthly contribution. (b) If she can only afford $350/month, how much will she have after 10 years?" Answers: "$390.54/month"; "$53,771".

The single-sum half of the point does not appear on the site at all. It needs original teaching.

## 3. Recalculation

- Card 05: FV factor (0.45%, 96) = 119.7429 (to 4 decimal places); $50 000 ÷ 119.7429 = $417.5613; the site's $417.56 matches, but $417.56 a month reaches $49 999.85, 15 cents short. To be sure of the goal, round up: $417.57.
- Single sum for the same goal: $50 000 ÷ (1.0045)^96 = $32 491.94 (invested once now at the same rate, it grows to $50 000 in 8 years). The 96 contributions total 96 × $417.57 = $40 086.72; the single sum is smaller because every dollar of it earns interest for all 96 months.
- `we-2`: (1.006)^180 = 2.9351921; the required contribution is $310.0467, so **$310.05** a month (the site's $310.08 comes from rounding (1.006)^180 to 2.935 first). Total deposited $55 809.00, interest $44 191.00. $310.05 a month reaches $100 001.05. Logged as MS-27.
- SA 2: $390.54 a month ($390.5437) and $53 771.19 match.

Recalculated with SymPy 1.14.0 (`work/brief-standard-i2/recalc.py`, `practice.py`).

## 4. Misconceptions and HSC-style traps

- Multiplying the goal by the factor instead of dividing.
- Rounding the contribution down, so the goal is missed by a few cents (questions often say "to the nearest cent"; follow the question, but explain which way reaches the goal).
- Dividing the goal by the number of periods (ignoring interest), or by the total of the factor and the number of periods.
- For the single sum, using the FV factor, or thinking the single sum must equal the total of the contributions.
- Using the annual rate's column for a monthly plan.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The i20 equation card with its unknown moved: "contribution × 119.7429 = $50 000", then the contribution box lit with "?", and the division shown as undoing the multiplication.
- `GoalMeter` (finance-parts.tsx): a meter filling with 96 deposits and interest slivers towards a dashed $50 000 line, with a magnifier on the last gap at $417.56 ("15 cents short") and at $417.57 (reached).
- Two timelines one above the other (PeriodTimeline): 96 small monthly deposits above, one single deposit of $32 491.94 at month 0 below, both arriving at the same $50 000 at month 96. Totals under each ($40 086.72 against $32 491.94).
- The InterestFactorTable (from i20) used twice: FV column for the contribution, PV column for the single sum.

Advanced reuse (visual parts only, ruling 7): math-a12-f15 used `GoalMeter` for a holiday fund with a suitcase. Reuse the meter, not the holiday anchor or the suitcase plate. Kit needs are listed in `../../checks/maths-standard-kit-needs-i.md`.

## 6. Two original candidate practice questions

### Question 1

Mai wants $12 000 in 3 years for an above-ground pool and deck. She will make equal contributions at the end of each quarter into an account paying 4% p.a., compounded quarterly. The future value interest factor for 1% per period and 12 periods is 12.6825. Find the quarterly contribution she needs, to the nearest cent, so that she reaches her goal.

**Worked answer:** rate per quarter 1%, n = 12. Contribution = $12 000 ÷ 12.6825 = $946.1857..., so $946.19 (rounded up to reach the goal).

### Question 2

An employer's retention bonus pays $2 000 at the end of each year for 6 years into an account earning 5% p.a., compounded yearly. Use FV factor 6.8019 and PV factor 5.0757 (5%, 6 periods). (a) Find the future value of the annuity. (b) Find the single sum that, invested now at 5% p.a. compounded yearly, produces the same future value. (c) Explain why the single sum is less than the total of the six contributions.

**Worked answer:** (a) $2 000 × 6.8019 = $13 603.80. (b) $2 000 × 5.0757 = $10 151.40 (check: $10 151.40 × 1.05^6 = $13 603.85, the same to within table rounding). (c) The single sum earns interest for all 6 years, while each contribution earns interest only from when it is paid in; the six contributions total $12 000.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "12 000 × 12.6825", crossed). Answers were checked with SymPy (`work/brief-standard-i2/practice.py`).

## 7. Everyday anchors

- A first-home deposit fund: $50 000 in 8 years at 5.4% p.a. (the site's card 05 numbers) (home and money).
- A backyard pool and deck fund of $12 000 in 3 years, saved quarterly (home; carries Question 1).
- An employer's retention bonus: $2 000 a year for 6 years, or the single sum that matches it now (work; carries Question 2, the single-sum idea).

Drawn as objects (a house key on a key ring, a pool, a bonus letter), never people. Overlap check, 18 November 2026: Advanced f12's anchor is "saving for a first apartment deposit, on a wall calendar"; a first-home deposit is a near neighbour, so if Claude uses it, keep the site's different numbers and avoid the wall calendar and apartment plates; "pool and deck" and "retention bonus" have no hits (a first-car fund is i02's anchor and an apprentice's tool kit is i09's, so both are avoided). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

New finding MS-27 (`we-2`'s $310.08 should be $310.05) and gap MS-29 (no factor tables) in `../../site-corrections-maths-standard.md`, section 6. Decisions for Claude:

- **Tables only.** Contribution = goal ÷ FV factor; single sum = contribution × PV factor. The site's rearranged formula is not shown.
- **Round up for a goal.** State the rule once with the 15-cent example; questions that say "to the nearest cent" are answered as asked.
- **Superannuation.** Leave `we-2` (super) for i23, with the corrected $310.05.
- **Rates.** 5.4% p.a. sits just above today's bonus saver average (RBA F4, October 2026: 5.05% p.a.); 4% p.a. compounded quarterly is plausible. Say once that rates change.
- **Pace.** Two ideas (the contribution and the single sum) fit 7 to 8 minutes.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
