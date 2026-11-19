# math-s11-e05: What is leave loading, and how much extra does it pay?

Maths Standard research pack (Year 11, Earning money), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (one course for Standard 1 and Standard 2), Earning money, group "Ways of earning", outcome MST-11-03:

- `ci9724bbbe`: Calculate leave loading by finding a percentage of eligible normal pay [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d). Site coverage: covered. The crosswalk's site match points at lesson03's `tiered-commission-split-by` section, which only contains a true-or-false item on leave loading; the teaching is in lesson03 card 02, `we-3` and Trap 03.

CMS codename, not a published code.

**Course:** one video for Standard 1 and Standard 2.

**Entry knowledge (Stage 5):** a percentage of an amount (17.5% = 0.175). Year 11: math-s11-e01 (weekly pay from a rate and hours), math-s11-e02 (ordinary pay is separate from overtime and penalty pay).

**Prior video:** math-s11-e04 (or e04b if e04 is split).

**Start:** e04's final frame: a packed suitcase beside a wall calendar with four weeks circled, chip "4 weeks off: paid?".

**Stop:** Annual leave: permanent (full-time and part-time) employees get paid time off, 4 weeks a year for most employees under the National Employment Standards; leave loading is an extra percentage of the normal pay for the leave taken (commonly 17.5% in awards; always given in a question); "eligible normal pay" is ordinary-hours pay, so overtime, penalty and one-off amounts are left out; loading = rate × (weeks of leave × weekly ordinary pay); total paid for the leave = leave pay + loading = 1.175 × leave pay at 17.5%; casual employees get no paid leave and receive a 25% casual loading on every hour instead (one contrast). The spreadsheet model is e06.

**Next:** math-s11-e06.

## 2. Site order, sections and worked examples

Read-only sources (5d74a627): [earning-money/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson03.sa.html), SHA256 `4bff2698118bd1e4657f6f5cf02f51557282e4959a29a1249fd1b481a6392aa4`, sections `worked-examples-4-in`, `common-errors-the-3`, `practice-set`; [lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson05.sa.html), SHA256 `b254ea601d328e73a60f6b12e60e4218df2bcfb2fbe7afdf5df4cb7577de32c2`, section `practice-set` (SAQ 3).

### lesson03 card 02

"leave loading (17.5% of 4 weeks' ordinary pay)". "Leave loading is 17.5% of 4 weeks' ordinary pay. Using annual salary gives an answer 13× too large."

### lesson03 `we-3`

PROBLEM 3 · LEAVE LOADING: "Wei earns $1,240 per week in ordinary time. Calculate his annual leave loading." "$4,960.00"; "$\$4{,}960 \times 0.175 = \$868.00$"; "This is the loading amount, paid in addition to the $4,960 leave pay".

### Trap 03, drills and lesson05 SAQ 3

Trap 03: "Using annual salary ($980 × 52 = $50,960) instead of 4 weeks' pay ($980 × 4 = $3,920) inflates the answer by a factor of 13." Fill-the-gap: $980 a week. Drill 3: "An employee earns $1,120 per week in ordinary time." $784.00. lesson05 SAQ 3: "A worker earns $1,050 per week. Calculate the total amount they receive over a 4-week leave period including leave loading." $4,200 + $735 = $4,935.00.

## 3. Recalculation

- `we-3` 1240 × 4 = $4960.00; × 0.175 = $868.00.
- Fill-the-gap 980 × 4 × 0.175 = $686.00; Trap 03 $50 960.00 and $3920.00 (52 ÷ 4 = 13).
- Drill 3 1120 × 4 × 0.175 = $784.00; lesson05 SAQ 3 1050 × 4 × 1.175 = $4935.00.
- 2026-27 retail anchor: 27.81 × 38 = $1056.78 a week; 4 weeks $4227.12; loading $739.75 (739.746); casual rate $34.76 against $27.81 (a $6.95 an hour difference).

Recalculated with exact decimal arithmetic (`work/brief-standard-s11-e/recalc.py`, `practice.py`). All site answers match.

## 4. Misconceptions and HSC-style traps

- Loading on a year's pay instead of the leave period (site Trap 03, 13 times too big).
- Giving only the loading when the question asks for the total paid for the leave, or the reverse.
- Including overtime or penalty pay in "normal pay".
- Always using 4 weeks when the question says 2 or 3 weeks of leave.
- Thinking casual workers get leave loading (they get the casual loading instead, on every hour worked).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The suitcase and calendar: four week blocks of ordinary pay drop into a "leave pay" bar; a thin 17.5% sliver grows on top (the loading); the total is written beside it.
- An "eligible pay" filter: a weekly pay slip whose ordinary line passes through and whose overtime and allowance lines are greyed ("not counted").
- The 13-times trap as a picture: a year bar (52 weeks) beside the 4-week bar, and the two loadings compared.
- A two-column contrast card: permanent (paid leave + leave loading) against casual (25% casual loading on each hour, no paid leave), with 2026-27 retail rates as the dated example.

Kit needs: `../../checks/maths-standard-kit-needs-s11-e.md`.

## 6. Two original candidate practice questions

### Question 1

A kitchen hand earns $1118.40 per week in ordinary time. She takes 3 weeks of annual leave and receives 17.5% leave loading. (a) Calculate the leave loading. (b) Calculate the total she is paid for the 3 weeks of leave.

**Worked answer:** (a) 1118.40 × 3 = $3355.20; 3355.20 × 0.175 = $587.16. (b) 3355.20 + 587.16 = $3942.36.

### Question 2

Leo is paid $31.60 per hour for a 38-hour ordinary week. He usually also works 6 hours of overtime at time-and-a-half each week. He takes 4 weeks of annual leave with 17.5% leave loading on his normal pay. Calculate the total Leo receives for his leave.

**Worked answer:** ordinary weekly pay 31.60 × 38 = $1200.80 (overtime is not normal pay); 4 weeks $4803.20; loading 4803.20 × 0.175 = $840.56; total $5643.76.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 2: overtime included, loading "$1039.64", crossed, "loading is on normal pay only"). Answers checked in `work/brief-standard-s11-e/practice.py`.

## 7. Everyday anchors

- **A four-week road trip:** the suitcase and calendar; the site's `we-3` ($1240 a week: $4960 leave pay + $868 loading) pays for it (travel; carries the opening and the main example).
- **A clothing store, permanent against casual:** 2026-27 retail Level 1 at $27.81 an hour (permanent, with paid leave and loading: $739.75 on four weeks) against $34.76 (casual, no paid leave) (a first job; carries the casual contrast). Use the clothing store from e02 as a callback.
- **A restaurant chef's regular overtime:** loading on ordinary pay only (Question 2's idea; overtime is greyed) (hospitality).

Grepped 19 November 2026 across `claude-pm/pre-design` and `claude-pm/lessons` (math-s12, math-a11, math-a12): "suitcase", "road trip", "leave loading", "kitchen hand", "chef" no hits; "holiday fund" (math-a12-f15) and "holiday house" (math-s12-a12) are savings and cost-split contexts, a different picture from paid leave. Claude picks; none is required. Objects, never people.

**Money figures (root rulings 5 and 32):** 4 weeks' paid annual leave for full-time employees under the National Employment Standards, and 17.5% leave loading in many awards (for example the General Retail Industry Award): cite the [Fair Work Ombudsman, Annual leave loading](https://www.fairwork.gov.au/leave/annual-leave/annual-leave-loading) page (Codex confirms the wording and date). Casual loading 25% and 2026-27 Level 1 retail rates as in e02 (FWO pay guide MA000004, from 1 July 2026). Say once that pay rates change every 1 July; the 17.5% rate is set by each award or agreement, and questions give it.

## 8. Site corrections and decisions for Claude

No arithmetic error in lesson03's leave loading content. See `../../site-corrections-maths-standard.md`, section 11 (teaching gaps: leave other than 4 weeks, and overtime as not eligible). The crosswalk's site match for this point (lesson03 `tiered-commission-split-by`) is a repo note, not a site error; it is recorded in the route inputs.

Decisions for Claude:

- **Wording.** The syllabus says "a percentage of eligible normal pay". Say "normal pay for the leave you take" in plain words, then show what is not eligible (overtime, penalty rates, allowances).
- **Not always 4 weeks.** lesson03 hard-codes "4 weeks' ordinary pay". Teach "weeks of leave taken × weekly normal pay", with 4 weeks as the common full year.
- **Shift workers** (5 weeks of leave; awards where the loading and weekend penalties compare) stay out: beyond the point.
- Pace: short (one point, about 5 to 6 minutes). Do not pad; the casual contrast is the one addition worth its time.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
