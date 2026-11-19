# math-s11-e01: How do salaries and wages compare across weekly, fortnightly, monthly and yearly pay?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Ways of earning", outcome MST-11-03:

- `ci80921f0a`: Solve problems involving salaries [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: covered.
- `ci7d0d168c`: Calculate weekly, fortnightly, monthly and yearly earnings assuming 1 year = 52 weeks [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: covered. The official wording contains MathML ("1 year = 52 weeks"); quote it from `sourceHtml`.

These are CMS codenames, not published content-point codes. Exact HTML is in the crosswalk and in `programme/maths-standard-route-inputs-9.json`.

**Course:** Year 11 Standard is one course for Standard 1 and Standard 2; one video serves both.

**Entry knowledge (Stage 5):** a rate in dollars per hour; multiplying and dividing decimals; rounding money to the cent; percentages as decimals (used from e03). Year 11 videos: math-s11-f01 (`ci7f303375`, substitution) and math-s11-l06 and l07 (direct variation, y = kx).

**Prior video:** math-s11-l07 (outline's recommended order: formulas, linear relationships, then earning money).

**Start (PROVISIONAL):** l07 has no pack or design yet. Proposed frame: l07's final graph, a straight line through the origin with "pay ($)" up and "hours worked" across, the gradient labelled "k dollars per hour" and the equation pay = k × hours. e01's first sentence names k: that rate is a wage. The l07 author or designer confirms or replaces this frame; if it changes, only e01's first scene changes.

**Stop:** A wage is paid per hour worked, so more hours means more pay; a salary is a fixed yearly amount paid in equal instalments, whatever the hours; weekly pay = hourly rate × hours; a year is 52 weeks (syllabus), so 26 fortnights and 12 months; convert through the yearly figure (× 52 or × 26 or × 12 up, ÷ 52, ÷ 26 or ÷ 12 down); monthly pay is the year ÷ 12, never weekly × 4 (a year is 52 weeks, not 48); an hourly rate from a salary (÷ 52, then ÷ hours a week); compare two offers in the same unit and finish with a sentence. Overtime and penalty rates are e02.

**Next:** math-s11-e02.

## 2. Site order, sections and worked examples

Read-only source: [earning-money/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `4e0770af0317b766d82086712ad73172274e01c594c5c25922ea2d05521f58fa`. Title: Wages, Salaries and Pay Periods. Lesson id maths-std-y11-m3-l01. Sections (`data-step-id`): `recall-your-gut-answer`, `wages-vs-salaries-what`, `converting-between-pay-periods`, `worked-examples-4-in`, `common-errors-the-3`, `revisit-your-thinking`, `practice-set`, `review-and-complete`.

### Hook and card 01

"If two friends both earn "$80,000 a year," but one gets paid weekly and the other monthly, do they actually take home the same amount each pay? What if one of them is paid by the hour, how would you even compare them?" Revisit: the yearly amounts are identical; "$26 × 38 × 52 = $51,376 per year".

### Cards 05 and 06 (`wages-vs-salaries-what`, `converting-between-pay-periods`)

Wage against salary table ("Per hour worked" against "Fixed annual amount"; "Retail, hospitality, trades" against "Professional, management roles"). The hub table: Hourly to Weekly "× hours per week", Weekly to Annual "× 52", Annual to Weekly "÷ 52", Annual to Fortnightly "÷ 26", Annual to Monthly "÷ 12". "Don't use 48 weeks."

### `we-1` to `we-4`

- PROBLEM 1 · HOURLY → ANNUAL: "Priya works 38 hours per week at $26.40 per hour." $1,003.20 a week; $52,166.40 a year.
- PROBLEM 2 · ANNUAL → FORTNIGHTLY: "Marcus earns an annual salary of $84,500." $3,250.00 a fortnight.
- PROBLEM 3 · COMPARING JOB OFFERS: "Job A pays $58,240 per year. Job B pays $23.20 per hour for 40 hours per week." Job B $48,256.00; Job A pays more.
- PROBLEM 4 · ANNUAL → HOURLY: "An apprentice earns a salary of $61,152 per year and works 36 hours per week." $1,176.00 a week; $32.67 an hour.

### Traps and practice

Trap 01 (weekly × 4 for monthly), Trap 02 ("bi-monthly" 24 against fortnightly 26), Trap 03 (no conclusion: "Job A pays $9,984 more"). Drills: Leah $29.40 × 32 ($940.80; $48,921.60); Job A $63,500 against $31.25 × 38 (Job B $61,750; Job A by $1,750); $74,880 for 39 hours ($36.92); $58,500 as $1,125, $2,250 and $4,875.

## 3. Recalculation

- Hook: $80 000 ÷ 52 = $1538.46 a week, ÷ 26 = $3076.92 a fortnight, ÷ 12 = $6666.67 a month; revisit $51 376.00.
- `we-1` $1003.20 and $52 166.40; `we-2` $3250.00; `we-3` $928.00, $48 256.00, difference $9984.00; `we-4` $1176.00 and $32.666... = $32.67.
- Drills $940.80, $48 921.60, $1187.50, $61 750.00, $1750.00, $1440.00, $36.923... = $36.92, $1125.00, $2250.00, $4875.00; fill-the-gap $65 000 ÷ 26 = $2500.00.
- Trap 01 shortfall (year ÷ 12 − weekly × 4): $333.33 on $52 000, $384.62 on $60 000, $512.82 on $80 000 (the site's "about $200 to $400" holds only up to about $62 000).

Every value was recalculated with exact decimal arithmetic in Python (`work/brief-standard-s11-e/recalc.py`, output `recalc-output.txt`). All site answers match.

**2026-27 check (root ruling 5):** `we-3`'s $23.20 an hour is below the adult national minimum wage of $26.44 an hour from 1 July 2026. Every other lesson01 rate is above it. Use drill 2 (Job A $63 500 against $31.25 × 38) as the job comparison.

## 4. Misconceptions and HSC-style traps

- Monthly pay as weekly × 4 (a month is about 4.33 weeks; 12 × 4 = 48 weeks loses four weeks of pay).
- 24 fortnights in a year (two a month) instead of 26.
- Assuming 40 hours a week when hours are not given; a full-time week in most awards is 38 ordinary hours, but questions state the hours.
- Comparing an hourly rate with a yearly salary without converting.
- Thinking a salaried worker is paid more for extra hours (not unless the contract says so).
- Rounding the hourly rate early, then multiplying back up (convert through the year, round at the end).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- l07's line through the origin (provisional), relabelled: the gradient tag becomes "$ per hour: a wage". A second, flat strip below it ("salary: the same each year") shows the contrast: more hours moves the wage point up the line, the salary bar does not change.
- A pay-period hub: one yearly bar in the centre, with arrows out to a week (÷ 52), a fortnight (÷ 26) and a month (÷ 12), and back (× 52, × 26, × 12). The bar is cut into 52, 26 and 12 equal pieces on cue.
- A wall calendar (`maths/ma12-wall-calendar-v1.png` after an appearance check) with paydays marked: 52 weekly marks, 26 fortnightly marks, 12 monthly marks, all adding to the same $80 000.
- The "× 4" trap: four weekly pieces laid over one month piece leave a visible gap (the extra 0.33 of a week); 12 such gaps add to four weeks.
- Two job ads side by side (unbranded cards), each converted to a year and then compared, with a sentence conclusion written under them.

Kit needs are listed in `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

### Question 1

Jordan works 22 hours a week at a swim school and is paid $31.80 per hour. (a) Calculate Jordan's weekly pay. (b) Calculate Jordan's yearly income, assuming 1 year = 52 weeks. (c) Calculate Jordan's average monthly income.

**Worked answer:** (a) 31.80 × 22 = $699.60. (b) 699.60 × 52 = $36 379.20. (c) 36 379.20 ÷ 12 = $3031.60.

### Question 2

Job A offers a salary of $64 000 per year. Job B pays $33.10 per hour for 38 hours a week. (a) Which job pays more per year, and by how much? (b) What would Job B pay each fortnight?

**Worked answer:** (a) Job B: 33.10 × 38 = $1257.80 a week; × 52 = $65 405.60 a year. Job B pays $1405.60 more per year. (b) 1257.80 × 2 = $2515.60 (the same as 65 405.60 ÷ 26).

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "699.60 × 4 = $2798.40 a month", crossed, "a month is the year ÷ 12"). Answers were checked in `work/brief-standard-s11-e/practice.py` (`practice-output.txt`).

## 7. Everyday anchors

- **Paydays on a calendar:** the site's hook, two people on $80 000 a year, one paid weekly ($1538.46) and one monthly ($6666.67), drawn as paydays on a wall calendar: different pay slips, the same year (money; carries the hub and the × 4 trap).
- **Two job ads on a noticeboard:** a salaried office role at $63 500 a year against a warehouse role at $31.25 an hour for 38 hours (site drill 2; Job A by $1750 a year) (first job; carries the comparison).
- **A carpentry apprentice's tool belt:** the site's `we-4` salary of $61 152 for a 36-hour week, worked back to $32.67 an hour (trades; carries the hourly-from-salary step). The site calls this an apprentice; at $32.67 an hour it fits a final-year adult apprentice, so the design should say "final-year adult apprentice" or "carpenter".

Varied everyday contexts (pay days, a first job, a trade). Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` for math-s12, math-a11 and math-a12: "barista", "swim school", "carpent", "noticeboard", "tool belt" no hits; "apprentic" appears in math-s12-i01 (a family loan for apprenticeship tools), i08, i09 and i21 as money contexts, not a wage, so the carpenter's tool belt is a different picture. Claude picks; none is required. Anchors are drawn as objects, never people.

**Money figures (root rulings 5 and 32):** national minimum wage $26.44 an hour, $1004.90 a week, from the first full pay period on or after 1 July 2026 (Fair Work Commission Annual Wage Review 2026, decision 2 June 2026; [Fair Work Ombudsman, Minimum wages increase from 1 July 2026](https://www.fairwork.gov.au/newsroom/news/annual-wage-review-2026), read via search 19 November 2026; Codex confirms on the page). The hourly figure is the weekly figure ÷ 38 rounded (1004.90 ÷ 38 = 26.4447...), which is why 26.44 × 38 = $1004.72, not $1004.90; do not use the two together in one calculation. Say once that minimum and award wages change every 1 July.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 11 (MS-70: "bi-monthly" and the five-week months; MS-76: wages below the 2026-27 minimum).

Decisions for Claude:

- **Join.** The l07 frame is provisional. A line through the origin is the natural bridge (pay = rate × hours is direct variation); salary is the contrast (a flat amount).
- **52 weeks.** The syllabus says "assuming 1 year = 52 weeks". Say it plainly once; leave out the 52.18-week year and leap years.
- **Hours.** Most full-time awards use a 38-hour week; the site's we-3 uses 40. Questions state the hours, so narration should say "use the hours you are given".
- **Comparison.** Use drill 2 in place of `we-3` (below the 2026-27 minimum), or reprice `we-3` and label it.
- Pace: comfortable (two points); about 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
