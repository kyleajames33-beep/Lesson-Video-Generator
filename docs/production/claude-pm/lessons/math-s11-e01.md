# Maths S11 E01: How do salaries and wages compare across weekly, fortnightly, monthly and yearly pay? A wage as rate × hours, a salary as a fixed year, converting through the year (52 weeks, 26 fortnights, 12 months), why a month is not four weeks, an hourly rate from a salary, and comparing two job offers (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the faults logged in `../checks/m-s12-i01-i11-learning-review-resolution.md` and `../checks/m-s12-i12-i23-learning-review-resolution.md`) and root's Standard rulings 1 to 87 (`../checks/root-rulings-maths-standard-outline.md`; rulings 5, 32, 85 and 87 apply here). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,502 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 501 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s11-e01-learning-review.md` (summary `../checks/m-s11-e01-e12-learning-review-summary.md`), with root's rulings 84 to 96 in `../checks/root-rulings-maths-standard-outline.md` (ruling 96 accepts every finding as the review wrote it, including the optional ones, and fixes the repriced values). Numbers rechecked with SymPy: `work/brief-review-s11-e/resolve-check.py`. Findings by the review's numbers:

1. Should fix, scene 3 (52 paydays on a one-month calendar): **accepted**, reviewer's wording. The payday marks now drop onto a 52-week `YearStrip` under the hub (`CalendarDeposits`, as e04b scene 2): 52 marks, then every second week, then one per month block, with the counters "52 pays", "26 pays", "12 pays". The calendar plate stays as a picture only, its grid blank. Scene 4: "Look at the calendar." becomes "Look at the year, laid out in weeks." Decisions (anchor, simulation 3), kit addition 3, the visual-standard check and Assets updated to match.
2. Should fix, scene 12 (the roster card did not match e02's worked roster): **accepted** (ruling 96). Card rows "Weekdays 16 h", "Sat 6 h", "Public holiday 5 h"; "Sat" and "Public holiday" ring amber; narration "Does the same work pay more on a Saturday, or a public **holiday**?" (cue moved from "Sunday" to "holiday"). The Decisions handoff and the root decisions file's join 2 match.
3. Optional, scene 5 ("sixty-six recurring"): **accepted**: "thirty-two point six six six, and so on, so thirty-two dollars sixty-seven an **hour**."

Joins: scene 1 still opens on l07 Revision 2 scene 11's frame exactly (ruling 93). Scene 12 (e02's opening) now carries the three-row roster that e02 Revision 2 scenes 1 and 4 work. Practice cards, feedback and key notes unchanged.

Narration 5,502 characters by `work/brief-review-s11-e/count.py` (Revision 1: 5,484 by the same parser; 5,472 by the author's), about 501 s with holds, 69 s under the 570 s cap; feedback speech about 24.3 s and 27.5 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: first video of the Year 11 Earning money strand, outline playlist order 16. Year 11 Standard is one course, so one video serves Standard 1 and Standard 2. Viewers arrive from math-s11-l07 (direct variation). Pre-design pack: `../pre-design/maths-standard/math-s11-e01.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year11/earning-money/lesson01.sa.html` (SHA256 `4e0770af0317b766d82086712ad73172274e01c594c5c25922ea2d05521f58fa`; card 01's two people on "$80,000 a year", one weekly and one monthly; card 05's wage against salary; card 06's hub, "× 52", "÷ 26", "÷ 12", "Don't use 48 weeks"; `we-4`'s $61,152 salary for 36 hours a week, $1,176.00 and $32.67; drill 2's Job A $63,500 against $31.25 × 38; Traps 01 to 03). Route entry: `math-s11-e01` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the wall calendar plate reused; a new tool belt plate and the shop front for the final frame; the graph, hub, ads and boards coded.

Owner rules applied: 2024 syllabus; plates for real objects and code for diagrams and documents; no people, hands or faces; one main question; one reasoning stage at a time; every step said in words before its symbols; plain meanings before terms (wage, salary, pay period, fortnight); a short "why this matters"; worked examples with a short task, the formula and grouped givens; job ads as coded, unbranded cards; two attempts with "Pause here to answer." and 10 s countdowns with the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a part-time job, paydays, a carpenter, two job ads); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; rates said once to change every year.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Ways of earning", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json` (text form; the official MathML for "1 year = 52 weeks" is in `sourceHtml`):

- `ci80921f0a`: "Solve problems involving salaries"
- `ci7d0d168c`: "Calculate weekly, fortnightly, monthly and yearly earnings assuming 1 year = 52 weeks"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from math-s11-l07's final frame (the join confirmed by ruling 93; the frame the e01 and l07 packs both propose): coded axes, "pay ($)" up in teal and "hours worked" across in blue, a straight line through the origin, its gradient tagged "k dollars per hour" in amber and the equation chip "pay = k × hours"; chips "Next: earning money" and "?". Recalls l07 (pay = k × hours, a line through the origin) and Stage 5 (rates in dollars per hour; multiplying and dividing decimals; rounding money to the cent) in a phrase or grey chip. Teaches: a wage as pay per hour worked, weekly pay = rate × hours; a salary as a fixed yearly amount paid in equal pieces whatever the hours; a year as 52 weeks (the syllabus assumption), 26 fortnights and 12 months; converting through the yearly figure (× 52, × 26, × 12 up; ÷ 52, ÷ 26, ÷ 12 down); why monthly pay is the year ÷ 12 and never weekly × 4 (12 × 4 is only 48 weeks); fortnightly is 26 pays, not "twice a month" (24); an hourly rate from a salary (÷ 52, then ÷ hours a week, rounding at the end); comparing two offers in the same unit and finishing with a sentence. Stops at ordinary pay. Not taught: overtime and penalty rates (e02), commission (e03), leap years and the 52.18-week year (left out: the syllabus fixes 52).

## Decisions

- **Anchor: paydays on a wall calendar.** The site's hook (card 01): $80,000 a year, paid weekly ($1,538.46), fortnightly ($3,076.92) or monthly ($6,666.67). The same year cut into different pieces is the main picture (the hub), and a 52-week year strip under it shows the paydays (Revision 2: the calendar plate is a picture only). The site's "two friends" become two calendars, "paid weekly" and "paid monthly"; no people. Plate reused (root ruling 7): `ma12-wall-calendar-v1.png` (opened 19 Nov 2026: a hanging wall calendar on a nail, a watercolour landscape at the top, an empty 7 × 5 grid of blank day boxes below, true alpha; shown as a picture of paydays in scene 3 and as A1's picture slot, with no marks on its grid).
- **Opening example: a part-time wage, not the site's `we-1`.** The site's `we-1` rate ($26.40) is below the 2026-27 adult national minimum ($26.44; ruling 85, MS-76; the pack lists `we-1` as above it, which is wrong, see open decision 3). The site's drill 1 numbers are used instead: $29.40 an hour for 32 hours, $940.80 a week, $48,921.60 a year.
- **Worked examples: the site's `we-4` and drill 2.** `we-4` ($61,152 for a 36-hour week: $1,176.00 a week, $32.67 an hour) is set on a carpenter's tool belt (pack anchor 3; "carpenter", not "apprentice", as the pack advises, since $32.67 is a qualified rate). Drill 2 (Job A $63,500 against Job B $31.25 × 38 = $61,750; Job A by $1,750) replaces `we-3`, whose $23.20 is below the minimum (ruling 85).
- **Notation.** Words first: "weekly pay = rate × hours"; no letters beyond the opening frame's k. "÷ 52", "× 26" and so on appear as arrow labels.
- **Join (confirmed, ruling 93).** Scene 1 opens on the l07 frame above; on "wage" the gradient tag rewrites to "$ per hour: a wage" and a flat violet strip "salary: the same all year" slides in below the axes.
- **Simulations (standard item 3).**
  1. **Hours slider on the wage line** (scene 2; `StudioPlot` with `ParameterSlider` on hours): the point rides the line from 20 to 38 hours; the readout "weekly pay = $29.40 × hours" updates ($588.00, $940.80, $1,117.20); the violet salary strip below does not move.
  2. **Pay-period hub** (scene 3; new `PayPeriodHub`): one violet year bar "$80,000" in the centre; arrows out "÷ 52", "÷ 26", "÷ 12" and back "× 52", "× 26", "× 12"; on each cue the bar re-cuts into 52, 26 or 12 equal pieces and one piece lifts out with its value.
  3. **Paydays** (scene 3; Revision 2): payday marks drop onto a 52-week `YearStrip` under the hub (the `CalendarDeposits` part e04b scene 2 uses): 52 marks, then every second week, then one per month block, with the counters "52 pays", "26 pays", "12 pays". Each pay period cuts the same year into 52, 26 or 12 pieces.
  4. **The four-week gap** (scene 4): twelve month blocks, each built from four week pieces, line up against a 52-week year strip; four grey dashed week pieces are left over, tagged "4 weeks missing"; then one month piece and four week pieces stand side by side with the gap ringed.
- **Colour roles (fixed for e01 to e06).** Rate per hour (or per item, or a percentage) **amber**; hours, items and other counts **blue**; pay earned for a period **teal**; a salary or other yearly or fixed amount **violet**; answer **green**; mistake **red**, crossed slips only; recalls and caveats grey.
- **Large type, handwritten voice.** Current working 52 px, rows 44 px, chips 30 to 40 px; nothing below 26 px; all text above y = 950. Hand tags: "$ per hour: a wage", "more hours, more pay", "same all year", "go through the year", "52 weeks", "26 fortnights", "12 months", "not twice a month", "48 ≠ 52", "4 weeks missing", "one week first", "round at the end", "same unit first", "finish with a sentence". At most two live at once.
- **Stage changes (standard item 2).** l07's line becomes a wage (1); the hours slider (2); the hub and the year strip (3); the four-week gap (4); g01 board, the tool belt (5); two job ads (6); framed card (7); question cards (8 to 11); the shop front for e02 (12); key notes (13).
- **Worked examples (g01 layout).** 5: task strip "A carpenter earns a salary of $61 152 a year and works 36 hours a week. Find the hourly rate."; formula strip "hourly rate = weekly pay ÷ hours"; givens card "salary = $61 152 a year" (violet), "hours = 36 a week" (blue), "1 year = 52 weeks"; rows "61 152 ÷ 52 = $1176.00 a week" (teal), "1176 ÷ 36 = 32.666…" ; framed answer "$32.67 an hour" (green); crossed slip "61 152 ÷ 36 = $1698.67 an hour" (caption "one week first: ÷ 52, then ÷ 36"). 6: task strip "Job A: $63 500 a year. Job B: $31.25 an hour for 38 hours a week. Which pays more per year, and by how much?"; givens card grouped by job; rows; framed answer "Job A pays $1750 more per year."; crossed slip "Job B: $1187.50 < $63 500, so Job A" (caption "same unit first: a week against a year").
- **Memory aid.** Framed card: "Go through the year." Key line: "Wage = rate × hours. Salary = fixed for the year. Up: × 52, × 26, × 12. Down: ÷ 52, ÷ 26, ÷ 12. Month = year ÷ 12, never week × 4."
- **Visual surprise.** Twelve months of four weeks line up against the year and four weeks are left hanging off the end (scene 4).
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` section 11).** MS-70: the video says "twice a month" (24 pays), not "bi-monthly", and gives the real reason monthly is not weekly × 4 (12 × 4 = 48 weeks), never "some months have 5 weeks"; the shortfall on $80,000 is about $513 a month, not "$200 to $400". MS-76: `we-1` ($26.40) and `we-3` ($23.20) are below the 2026-27 minimum and are not used.
- **Plain meanings at first use.** Wage ("pay for each hour you work"); salary ("a fixed amount for the whole year, whatever the hours"); pay period ("how often pay arrives: weekly, fortnightly or monthly"); fortnight ("every two weeks"); national minimum wage ("the lowest adult wage allowed in Australia").
- **Attempts.** A1 (pack question 1): Jordan, $31.80 × 22 at a swim school: $699.60, $36,379.20, $3,031.60; crossed "699.60 × 4 = $2798.40 a month" (caption "month = year ÷ 12"). A2 (pack question 2): Job A $64,000 against Job B $33.10 × 38: B $65,405.60, more by $1,405.60; a fortnight $2,515.60; crossed "$1257.80 < $64 000, so Job A" (caption "same unit first"). e12 calls back to A2's jobs after tax.
- **Mistake scene:** scene 4 is the misconception scene (monthly as weekly × 4), kept because it is the strand's most common money slip and the calendar makes the cause visible. Others: 24 fortnights (3, said), dividing a salary straight by the hours (5, crossed), comparing a week with a year (6 and A2, crossed), rounding early (5, said).
- **Cause chain taught, in order:** (1) a wage pays for each hour, so pay = rate × hours and more hours means more pay (2); (2) a salary is fixed for the year, so the hours do not change it (3); (3) the syllabus fixes a year at 52 weeks, so a year is 26 fortnights and 12 months, and each pay is the year cut into that many equal pieces (3); (4) 12 months of 4 weeks is only 48 weeks, so weekly × 4 leaves 4 weeks out and each month comes up short (4); (5) a salary per hour needs one week first (÷ 52), because the hours are given per week (5); (6) two offers compare only in the same unit (6).
- **Entry knowledge (route):** Stage 5 (rates in dollars per hour; multiplying and dividing decimals; rounding money to the cent); math-s11-f01 (substitution) and l06, l07 (direct variation, y = kx). Recalled in a phrase or grey chip.
- **Money sources (rulings 5, 32 and 85).** National minimum wage $26.44 an hour, $1,004.90 a week, from the first full pay period on or after 1 July 2026 (Fair Work Commission, Annual Wage Review 2026, decision 2 June 2026; Fair Work Ombudsman, "Minimum wages increase from 1 July 2026", https://www.fairwork.gov.au/newsroom/news/annual-wage-review-2026, read via search 19 Nov 2026 by the pack; Codex confirms on the page). The two figures are never used together in one calculation (26.44 × 38 = $1,004.72, not $1,004.90; the weekly figure is the official one). Said once (scene 2): "Wages change every first of July". Every other rate is a labelled example above the minimum.
- **Handoff (to math-s11-e02, "How do overtime and penalty rates change a pay packet?").** Scene 12, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: the shop front `ms11-fish-chip-shop-front-v1.png` (about 1,000 px wide) with a coded sign in its blank sign area "Open public holiday"; beside it a coded roster card (three rows, hours only; Revision 2): "Weekdays 16 h", "Sat 6 h", "Public holiday 5 h", with "Sat" and "Public holiday" ringed amber; chips "same hours, bigger pay?", "Next: overtime and penalty rates" and "?". No rates or pay shown. This is e02's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Wage line: 29.40 × 20 = 588.00; × 32 = 940.80; × 38 = 1117.20; 940.80 × 52 = 48 921.60.
  (b) Hub: 80 000 ÷ 52 = 1538.4615… → $1538.46; ÷ 26 = 3076.923… → $3076.92; ÷ 12 = 6666.666… → $6666.67.
  (c) Gap: four weeks = 80 000 × 4 ÷ 52 = 6153.846… → $6153.85 (said "about six thousand one hundred and fifty-four"); month − four weeks = 80 000 ÷ 156 = 512.82 (said "more than five hundred dollars"); from the rounded weekly figure, 4 × 1538.46 = 6153.84 and the gap is 512.83, which is why the narration says "about" and "more than".
  (d) `we-4`: 61 152 ÷ 52 = 1176.00; 1176 ÷ 36 = 32.666… → 32.67; slip 61 152 ÷ 36 = 1698.666… → 1698.67.
  (e) Drill 2: 31.25 × 38 = 1187.50; × 52 = 61 750.00; 63 500 − 61 750 = 1750.
  (f) Pronunciations: "nine hundred and forty dollars eighty"; "forty-eight thousand nine hundred and twenty-one dollars sixty"; "thirty-two dollars sixty-seven"; "twenty-six dollars forty-four".

Main question: *$80,000 a year can arrive weekly, fortnightly or monthly, and some jobs pay by the hour. How do salaries and wages compare across weekly, fortnightly, monthly and yearly pay?*
Entry knowledge (Stage 5; math-s11-l07): rates per hour; decimals; pay = k × hours.
Stops after: wages, salaries, the four pay periods, an hourly rate from a salary and comparing offers. No overtime.
Handoff: math-s11-e02: "same hours on a public holiday: bigger pay?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): rate amber; hours and counts blue; pay teal; salary and yearly amounts violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: from a line to a wage
> Last time ended on a straight line through the origin, pay against hours worked. Its gradient, k, is a number of dollars for every hour. That rate has a name. It's a **wage**, pay for each hour you work, so more hours means more pay. But plenty of jobs don't pay by the hour. A salary is a fixed amount for the whole year, whatever the **hours**. And pay arrives weekly, fortnightly or monthly. So how do salaries and wages compare across weekly, fortnightly, monthly and yearly **pay**?

Visual: opens on l07's final frame exactly (coded axes 1,100 × 640 px, "pay ($)" teal, "hours worked" blue, the line through the origin, the amber tag "k dollars per hour", chip "pay = k × hours", chips "Next: earning money" and "?"). On the first sentence the "Next" chip fades. On "wage" the amber tag rewrites to "$ per hour: a wage", hand tag "more hours, more pay". On "hours" a flat violet strip (1,100 × 90 px) slides in under the axes, labelled "salary: the same all year", hand tag "same all year". On "pay" three small grey calendar chips "weekly", "fortnightly", "monthly" appear along the top, and heading "Wages and salaries" writes on; the question chip "Same year, different pays?" moves to the top right.

### 2. a wage: rate times hours
> Here's a wage. A part-time job pays twenty-nine dollars forty an hour, for thirty-two hours a week. Weekly pay is the rate times the hours. Twenty-nine forty times thirty-two is nine hundred and forty dollars eighty **cents**. Work fewer hours, and the pay drops. Work more, and it **rises**. To get a year, the syllabus says to use fifty-two weeks. So nine hundred and forty dollars eighty, times fifty-two, is forty-eight thousand nine hundred and twenty-one dollars sixty a **year**. For comparison, the national minimum wage, the lowest adult wage allowed, is twenty-six dollars forty-four an hour from July twenty twenty-six. Wages change every first of July, so always use the rate you're **given**.

Visual: stage change: the axes grow (1,250 × 650 px; hours 0 to 40, pay $0 to $1,200, gridlines every $200), the line now "pay = $29.40 × hours". Row at the top, 52 px: "weekly pay = rate × hours" (rate amber, hours blue). On "thirty-two hours" a blue point at 32 hours. On "cents" row "29.40 × 32 = $940.80" (29.40 amber, 32 blue, 940.80 teal), the point rings teal. On "drops" (simulation 1) the hours slider runs 32 → 20, the point slides down, readout "$588.00"; on "rises" 20 → 38, readout "$1117.20", then back to 32; the violet salary strip under the axes stays still, hand tag "salary: no change". On "fifty-two weeks" a blue chip "1 year = 52 weeks (syllabus)". On "year" row "940.80 × 52 = $48 921.60 a year" (framed green). On "national minimum wage" a grey chip, 32 px: "national minimum wage from 1 July 2026: $26.44 an hour (Fair Work Commission)". On "given" hand tag "use the rate you're given".

### 3. a salary, cut into pay periods
> Now a salary. Say you earn eighty thousand dollars a year. It's the same whether you work thirty-eight hours one week or forty-five the next, and it's paid in equal pieces. Paid weekly, the year splits into fifty-two pieces, so divide by fifty-two, about one thousand five hundred and thirty-eight dollars forty-six a **week**. Fortnightly means every two weeks, so a year has twenty-six fortnights. Eighty thousand divided by twenty-six is three thousand and seventy-six dollars ninety-two. That's not twice a month, which would be twenty-four **pays**. Paid monthly, divide by twelve, six thousand six hundred and sixty-six dollars sixty-seven. Different pay slips, but the same year. To go up to a year, multiply. To come down, **divide**.

Visual: stage change to the hub (simulation 2): a violet year bar (1,000 × 110 px) "salary: $80 000 a year" in the centre; the calendar plate (300 px) at the top right as a picture only, its grid left blank; under the hub a blue 52-week `YearStrip` (1,400 × 50 px) labelled "1 year = 52 weeks" (Revision 2, review finding 1). On "fifty-two pieces" the bar re-cuts into 52 thin equal pieces; one lifts out to the left as a teal block; on "week" its label "÷ 52 → $1538.46 a week" (44 px), and 52 teal payday marks drop onto the year strip, one under every week, counter "52 pays", grey tag "52 × $1538.46 ≈ $80 000". On "twenty-six fortnights" the bar re-cuts into 26 pieces; one lifts out "÷ 26 → $3076.92 a fortnight"; the strip's marks thin to every second week, counter "26 pays". On "pays" a grey crossed chip "twice a month = 24 pays", hand tag "not twice a month". On "divide by twelve" the bar re-cuts into 12 pieces, "÷ 12 → $6666.67 a month", the strip groups into 12 month blocks and the marks thin to one per block, counter "12 pays". On "same year" the three teal blocks sit side by side under the bar, each with its count, hand tag "go through the year". On "multiply" arrows from each block back to the bar, "× 52", "× 26", "× 12"; on "divide" the arrows out "÷ 52", "÷ 26", "÷ 12" ring. Grey chip "rounded to the cent".

### 4. why a month isn't four weeks
> Here's the classic slip. A month is about four weeks, so why not times the weekly pay by four? Look at the year, laid out in weeks. Twelve months of four weeks is only forty-eight weeks, but a year has fifty-two. So four weeks of pay leaves four whole weeks out of the **year**. Four weekly pays come to about six thousand one hundred and fifty-four dollars, but a month's pay is six thousand six hundred and sixty-seven. That's more than five hundred dollars short, every **month**. So for monthly pay, always go through the year, and divide by **twelve**.

Visual: stage change (simulation 4): a blue year strip of 52 week pieces across the top (1,400 × 60 px), labelled "1 year = 52 weeks". Below it, twelve teal month blocks, each built from four week pieces, slide in and line up under the strip, labelled "12 × 4 = 48 weeks". On "year" four grey dashed week pieces are left at the right end of the strip, hand tags "48 ≠ 52" and "4 weeks missing". Then the strip clears: one teal month block "year ÷ 12 = $6666.67" stands beside four week pieces "4 × week ≈ $6153.85"; on "month" the gap between their tops rings, label "short ≈ $512.82 every month" (32 px). On "twelve" chip "monthly pay = year ÷ 12" (framed green).

### 5. worked example: the carpenter's hourly rate
> Sometimes you need to go the other way, from a salary to an hourly rate. A carpenter earns a salary of sixty-one thousand one hundred and fifty-two dollars a year, and works thirty-six hours a week. What's that per hour? The hours are per week, so first find one week. Sixty-one thousand one hundred and fifty-two, divided by fifty-two, is one thousand one hundred and seventy-six dollars a **week**. That week is thirty-six hours, so divide again. One thousand one hundred and seventy-six, divided by thirty-six, is thirty-two point six six six, and so on, so thirty-two dollars sixty-seven an **hour**. Round only at the end, so no cents get lost along the **way**.

Visual: clear change to the g01 board, the tool belt plate `ms11-tool-belt-v1.png` (700 px wide) at the top right with a coded tag "carpenter: salary". Task strip, 44 px: "A carpenter earns a salary of $61 152 a year and works 36 hours a week. Find the hourly rate." (site `we-4`). Formula strip, 52 px: "hourly rate = weekly pay ÷ hours". Givens card, 44 px: "salary = $61 152 a year" (violet), "hours = 36 a week" (blue), "1 year = 52 weeks". On "first find one week" hand tag "one week first". On "week" (bold) row, 52 px: "61 152 ÷ 52 = $1176.00 a week" (teal). On "divide again" row "1176 ÷ 36 = 32.666…"; on "hour" framed answer (green) "$32.67 an hour". On "way" hand tag "round at the end", and a red slip "61 152 ÷ 36 = $1698.67 an hour" writes and is crossed (caption "one week first: ÷ 52, then ÷ 36").

### 6. comparing two job offers
> Two job ads. Job A pays a salary of sixty-three thousand five hundred dollars a year. Job B pays thirty-one dollars twenty-five an hour, for thirty-eight hours a week. You can't compare a yearly amount with an hourly one, so put them in the same unit first. Job B's week is thirty-one twenty-five times thirty-eight, one thousand one hundred and eighty-seven dollars fifty. Times fifty-two, that's sixty-one thousand seven hundred and fifty dollars a **year**. Now they match. Job A pays more, by one thousand seven hundred and fifty dollars a year. Finish with a sentence like that, because the question asked which job pays **more**.

Visual: stage change: two coded, unbranded job-ad cards pinned side by side (each 620 × 360 px, a pin at the top, no logos): "Job A: office assistant, $63 500 a year" (violet) and "Job B: warehouse, $31.25 an hour, 38 hours a week" (amber, blue). On "same unit first" hand tag "same unit first", a "per year" label appears under each card. Rows under Job B, 44 px: "31.25 × 38 = $1187.50 a week" (teal); on "year" "1187.50 × 52 = $61 750 a year" (violet). On "Now they match" the two yearly figures slide side by side; row "63 500 − 61 750 = $1750". On "more" framed answer (green) "Job A pays $1750 more per year.", hand tag "finish with a sentence"; a red slip "Job B: $1187.50 < $63 500, so Job A" writes and is crossed (caption "same unit first: a week against a year").

### 7. memory aid
> Here's the summary. A wage is rate times hours. A salary is fixed for the year. To move between pay periods, go through the year, times fifty-two, twenty-six or twelve to go up, and divide to come down. And a month is the year divided by twelve, never a week times **four**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the hub's year bar with its three teal pieces and arrows. Main line, hand font 56 px: "Go through the year." On "four" the key line, 40 px: "Wage = rate × hours. Salary = fixed for the year. Up: × 52, × 26, × 12. Down: ÷ 52, ÷ 26, ÷ 12. Month = year ÷ 12, never week × 4." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Jordan works twenty-two hours a week at a swim school, and is paid thirty-one dollars eighty an hour. Calculate Jordan's weekly pay, the yearly income, assuming a year is fifty-two weeks, and the average monthly income. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Jordan works 22 hours a week at a swim school and is paid $31.80 per hour. (a) Calculate Jordan's weekly pay. (b) Calculate Jordan's yearly income, assuming 1 year = 52 weeks. (c) Calculate Jordan's average monthly income." Picture slot: the calendar plate (300 px), its grid blank. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Thirty-one eighty times twenty-two is six hundred and ninety-nine dollars sixty a **week**. Times fifty-two is thirty-six thousand three hundred and seventy-nine dollars twenty a **year**. Divide that by twelve for three thousand and thirty-one dollars sixty a **month**. Weekly pay times four is the slip. That leaves the month **short**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "week" "31.80 × 22 = $699.60" (framed green); on "year" "699.60 × 52 = $36 379.20" (framed green); on "month" "36 379.20 ÷ 12 = $3031.60" (framed green). On "short" a red slip "699.60 × 4 = $2798.40 a month" writes and is crossed (caption "month = year ÷ 12"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Job A offers a salary of sixty-four thousand dollars a year. Job B pays thirty-three dollars ten an hour, for thirty-eight hours a week. Which job pays more per year, and by how much? And what would Job B pay each fortnight? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Job A offers a salary of $64 000 per year. Job B pays $33.10 per hour for 38 hours a week. (a) Which job pays more per year, and by how much? (b) What would Job B pay each fortnight?" Picture slot: two blank coded job-ad cards labelled "A" and "B". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Job B's week is one thousand two hundred and fifty-seven dollars eighty. Times fifty-two, that's sixty-five thousand four hundred and five dollars sixty a **year**. So Job B pays more, by one thousand four hundred and five dollars sixty. A fortnight is two weeks, two thousand five hundred and fifteen dollars **sixty**. Comparing Job B's week with Job A's year is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "B: 33.10 × 38 = $1257.80 a week"; on "year" "1257.80 × 52 = $65 405.60" and "65 405.60 − 64 000 = $1405.60"; framed answer (green) "Job B pays $1405.60 more per year." On "sixty" (bold) "fortnight: 1257.80 × 2 = $2515.60" (framed green), grey chip "same as 65 405.60 ÷ 26". On "slip" a red slip "$1257.80 < $64 000, so Job A" writes and is crossed (caption "same unit first"). Hold about 1 s.

### 12. handoff
> So far, every hour has paid the same rate. But look at this shop. It's open on a public holiday, and the roster shows the same hours as any other day. Does the same work pay more on a Saturday, or a public **holiday**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "this shop" the shop front `ms11-fish-chip-shop-front-v1.png` (about 1,000 px wide) with the coded sign "Open public holiday" in its blank sign area. On "roster" the coded roster card (480 × 300 px, hours only; Revision 2, review finding 2): "Weekdays 16 h", "Sat 6 h", "Public holiday 5 h". On "holiday" (bold) the "Sat" and "Public holiday" rows ring amber, chip "same hours, bigger pay?". On "next" chips "Next: overtime and penalty rates" and "?". Hold about 2 s. No rates or pay shown. This is e02's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Wage: pay per hour worked. Weekly pay = rate × hours.
- Salary: a fixed amount for the year, whatever the hours.
- 1 year = 52 weeks = 26 fortnights = 12 months.
- Monthly pay = year ÷ 12 (never week × 4).
- Compare offers in the same unit; answer in a sentence.

Memory aid (framed card, right side, as in scene 7): *Go through the year.* Key: *Wage = rate × hours. Salary = fixed for the year. Up: × 52, × 26, × 12. Down: ÷ 52, ÷ 26, ÷ 12. Month = year ÷ 12, never week × 4.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and e02's opening frame.

## Teaching checks

- **Does it explain causes?** Why a wage rises with hours: it is paid per hour (2). Why a salary does not: it is fixed for the year (1, 3). Why 26 fortnights: 52 weeks in pairs (3). Why weekly × 4 is short: 12 × 4 = 48 weeks, four weeks left out (4). Why one week first for an hourly rate: the hours are given per week (5). Why convert before comparing: different units cannot be compared (6).
- **Misconceptions addressed:** weekly × 4 for monthly (4; A1 crossed); 24 fortnights (3); a salary divided straight by weekly hours (5, crossed); comparing a week with a year (6; A2 crossed); rounding early (5).
- **Visual standard, item by item:** 1 l07's line becoming a wage, then the calendar and the tool belt; 2 a new stage every 40 to 60 s; 3 the hours slider with a still salary strip, the hub re-cutting the year, paydays dropping onto a 52-week strip, the four-week gap; 4 fixed roles (rate amber, hours blue, pay teal, yearly violet); 5 large type; 6 hand tags; 7 g01 boards in 5 and 6 with framed answers and crossed slips; 8 framed card and five bullets; 9 four weeks left hanging off the year.
- **One idea at a time:** a wage (2), a salary and its pieces (3), the month trap (4), salary to hourly (5), comparing (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 25 s and 26 s.
- **Avoided double teaching:** l07's direct variation recalled in a sentence; overtime left to e02.
- **Syllabus coverage:** `ci80921f0a` (3, 5, 6, A2; key notes 2 and 5); `ci7d0d168c` (2, 3, 4, A1; key notes 1, 3, 4).
- **Out of scope by design:** overtime and penalty rates (e02); leap years and 52.18 weeks (the syllabus fixes 52).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme).** "Jordan works 22 hours a week at a swim school and is paid $31.80 per hour. (a) Calculate Jordan's weekly pay. (b) Calculate Jordan's yearly income, assuming 1 year = 52 weeks. (c) Calculate Jordan's average monthly income."
Model answer: (a) 31.80 × 22 = $699.60. (b) 699.60 × 52 = $36 379.20. (c) 36 379.20 ÷ 12 = $3031.60. Classic mistake (crossed): "699.60 × 4 = $2798.40 a month".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** "Job A offers a salary of $64 000 per year. Job B pays $33.10 per hour for 38 hours a week. (a) Which job pays more per year, and by how much? (b) What would Job B pay each fortnight?"
Model answer: (a) Job B: 33.10 × 38 = $1257.80 a week; × 52 = $65 405.60 a year. Job B pays $1405.60 more per year. (b) 1257.80 × 2 = $2515.60 (the same as 65 405.60 ÷ 26). Classic mistake (crossed): "$1257.80 < $64 000, so Job A".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Wage | 29.40 × 32 = 940.80; × 20 = 588.00; × 38 = 1117.20; 940.80 × 52 = 48 921.60 | 2 |
| Minimum wage | $26.44 an hour from 1 July 2026 (dated chip) | 2 |
| Hub | 80 000 ÷ 52 = 1538.46; ÷ 26 = 3076.92; ÷ 12 = 6666.67; 24 pays crossed | 3 |
| Gap | 12 × 4 = 48; 52 − 48 = 4; 4 weeks ≈ 6153.85; month 6666.67; short ≈ 512.82 | 4 |
| `we-4` | 61 152 ÷ 52 = 1176.00; ÷ 36 = 32.67; slip 61 152 ÷ 36 = 1698.67 | 5 |
| Drill 2 | 31.25 × 38 = 1187.50; × 52 = 61 750; 63 500 − 61 750 = 1750 | 6 |
| A1 | 699.60; 36 379.20; 3031.60; slip 2798.40 | 8, 9 |
| A2 | 1257.80; 65 405.60; 1405.60; 2515.60 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, Python `decimal`, run with `python -I`; 246 checks across the strand, 0 failures); Codex to re-check.

Revision 2: every changed or newly shown value rechecked with SymPy in `work/brief-review-s11-e/resolve-check.py` (`python -I`; 117 checks, 0 failures); placeholder values are checked only as the arithmetic built on them.

- 29.40 × 32 = 940.80; 29.40 × 20 = 588.00; 29.40 × 38 = 1117.20; 940.80 × 52 = 48 921.60.
- 80 000 ÷ 52 = 1538.4615… → 1538.46; 80 000 ÷ 26 = 3076.923… → 3076.92; 80 000 ÷ 12 = 6666.666… → 6666.67.
- 80 000 × 4 ÷ 52 = 6153.846… → 6153.85; 80 000 ÷ 12 − 80 000 × 4 ÷ 52 = 80 000 ÷ 156 = 512.82.
- 61 152 ÷ 52 = 1176.00; 1176 ÷ 36 = 32.666… → 32.67; 61 152 ÷ 36 = 1698.67.
- 31.25 × 38 = 1187.50; 1187.50 × 52 = 61 750.00; 63 500 − 61 750 = 1750.00.
- 31.80 × 22 = 699.60; × 52 = 36 379.20; ÷ 12 = 3031.60; 699.60 × 4 = 2798.40.
- 33.10 × 38 = 1257.80; × 52 = 65 405.60; − 64 000 = 1405.60; × 2 = 2515.60; 65 405.60 ÷ 26 = 2515.60.
- Source figure: national minimum wage $26.44 an hour from 1 July 2026 (Codex confirms on the Fair Work Ombudsman page).

## Memory aid check

- **"Go through the year."** with key line **"Wage = rate × hours. Salary = fixed for the year. Up: × 52, × 26, × 12. Down: ÷ 52, ÷ 26, ÷ 12. Month = year ÷ 12, never week × 4."** Original (the site's card 06 hub routes every conversion through "Annual"). Meaning, as said in scene 7: the year is the one amount every pay period is cut from, so convert to the year first, then down to the period you want. Assumptions checked: a year is 52 weeks (the syllabus's assumption, said in scene 2); pay is the same every period (a salary, or a wage with the same hours each week; scene 3); "month" means an average calendar month (year ÷ 12). It helps a new case: $39,000 a year is $750 a week, $1,500 a fortnight and $3,250 a month, and weekly × 4 would give only $3,000. Introduced after scenes 2 to 6.
- **Considered, not used:** "four weeks is not a month" alone (drops the method).

## Narration length estimate

Revision 2, counted by `work/brief-review-s11-e/count.py` (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; it counts the joining spaces the author's parser left out): **5,502 characters** (Revision 1: 5,484 by the same parser, 5,472 by the author's), 13 scene headings. Characters per scene (1 to 13): 475, 689, 730, 545, 655, 627, 270, 252, 323, 256, 366, 227, 75. Speech about 414 s; holds and settling unchanged from Revision 1 (below); total **about 501 s**, 69 s under the 570 s cap. Feedback speech: about 24.3 s and 27.5 s. The Revision 1 paragraphs below are kept for the record.

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,472 characters**, 13 scene headings. Characters per scene (1 to 13): 475, 689, 730, 530, 654, 627, 270, 252, 323, 256, 366, 225, 75.

At 13.3 characters per second the speech is about 411 s. Total with the holds and settling below **about 500 s**, 70 s under the 570 s cap; speech and holds before the notes about 455 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the hours slider (2), the hub re-cuts and paydays (3) and the four-week gap (4), about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 6's last sentence (the hand tag carries it); scene 3's "That's not twice a month, which would be twenty-four pays." (the crossed chip carries it). Scene 2's minimum-wage sentence stays (it carries the dated "rates change" line, ruling 5).

## Scene list and build ids

Lesson key `m-s11e01` (route math-s11-e01). Explainer folder `src/explainer/lessons/math-s11-e01`; build inputs in `docs/production/claude-pm/lessons/math-s11-e01/` (at voicing).

In order (13 scene headings): hook-line-to-wage, wage-rate-times-hours, salary-pay-periods, month-not-four-weeks, worked-carpenter-hourly, compare-job-offers, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | l07's line becomes a wage |
| 40 to 100 s | 2 | The hours slider |
| 100 to 165 s | 3 | The hub and the calendar |
| 165 to 210 s | 4 | The four-week gap |
| 210 to 260 s | 5 | g01 board: the tool belt |
| 260 to 310 s | 6 | Two job ads |
| 310 to 332 s | 7 | Framed memory card |
| 332 to 437 s | 8 to 11 | Question cards and countdowns, then feedback |
| 437 to 455 s | 12 | The shop front, for e02 |
| 455 to 500 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: l07's last frame continues into 1; 1 to 2 camera continue (the axes grow); 2 to 3 stage change; 3 to 4 stage change; 4 to 5 clear change to the board; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e01-learning-review.md`, `science_check` = `checks/m-s11-e01-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-wall-calendar-v1.png` (a hanging wall calendar on a nail, a watercolour landscape panel, an empty 7 × 5 grid of blank day boxes, true alpha; reused as the scene 3 picture and A1's picture slot, grid blank); `ma11-trade-van-v1.png`, `ma12-swing-tag-v1.png` (not needed here). No tool belt or shop-front plate exists (the pack's grep found none).

Need (painted, new; see the Codex asset brief): `ms11-tool-belt-v1.png` (scene 5; e07 reuses it), `ms11-fish-chip-shop-front-v1.png` (scene 12, e02's anchor; needed by this build, ruling 17). Reused: `ma12-wall-calendar-v1.png`.

Coded: the l07 axes and line, the hours slider, the salary strip, the hub, the payday marks, the year strip and gap, the job-ad cards (unbranded), the roster card and sign text, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `ParameterSlider`, `LiveReadoutBoard`, `PeriodTimeline` or `YearStrip`, `CalendarDeposits`, `StackedTotalBar`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row e01):
1. **PayPeriodHub** (new, small; may be a mode of `StackedTotalBar`): one yearly bar with arrows out (÷ 52, ÷ 26, ÷ 12) and back (× 52, × 26, × 12); on cue it re-cuts into that many equal pieces and lifts one out with its value. Values come from exact arithmetic, rounded only for display. Check: $80,000 gives $1,538.46, $3,076.92 and $6,666.67.
2. **Four-week gap** (small, lesson folder): a 52-piece year strip, twelve 4-piece month blocks lined up under it, and four dashed pieces left over. Check: 48 pieces covered, 4 left.
3. **Year-strip payday marks** (Revision 2): `CalendarDeposits` on a 52-week `YearStrip`, as in e04b scene 2 (marks at least 26 px; 52, 26 and 12 marks on cue). The calendar plate carries no marks.

## Codex asset brief (Maths S11 E01: a tool belt and a shop front)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s11-e01.md`, route entry math-s11-e01. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-wall-calendar-v1.png` and `maths/ma11-trade-van-v1.png`; no text, logos, brand names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms11-tool-belt-v1.png` (about 1400 × 1000 px): a worn brown leather carpenter's tool belt laid flat, front view, with a claw hammer in its loop, a folding ruler, a pencil and a tape measure in the pouches. No brand on the tape measure. It must read clearly at 300 px. Also used by e07 (attempt 1's picture slot).
2. `ms11-fish-chip-shop-front-v1.png` (about 1600 × 1100 px): the front of a small Australian takeaway shop, three-quarter front view: a glass shopfront, a counter and a chip fryer just visible inside, a striped awning, and a **blank rectangular sign panel** above the window and a **blank A-frame board** on the footpath (both left plain for coded text). No words, menu text, prices, brand or people. It must read at 400 px. Needed by this video's final frame and as e02's anchor (ruling 17).

Report inspection on the paper background (`#f6f1e7`) at 800 px, 600 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms11-e01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly.
3. Confirm the national minimum wage ($26.44 an hour from 1 July 2026) on the Fair Work Ombudsman page, that "Wages change every first of July" is said once, and that no example rate is below the minimum.
4. Confirm the MS-70 corrections: "twice a month" (24), the 48-week reason, and "more than five hundred dollars" on $80,000.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on l07's final frame as specified (ruling 93) and scene 12 matches the decisions file's e01 to e02 join with no rates shown.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Wages, Salaries and Pay Periods | Year 11 Maths Standard

(Title length: 56 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson01.sa.html

$80,000 a year can arrive weekly, fortnightly or monthly, and some jobs pay by the hour. Learn the difference between a wage and a salary, work out weekly pay as rate × hours, and convert between weekly, fortnightly, monthly and yearly pay by going through the year (52 weeks, 26 fortnights, 12 months). See why monthly pay is never weekly pay × 4, turn a salary into an hourly rate, and compare two job offers in the same unit. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Wages change every 1 July; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Solve problems involving salaries"
"Calculate weekly, fortnightly, monthly and yearly earnings assuming 1 year = 52 weeks"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: direct variation (y = kx). Next: Overtime and Penalty Rates.

#Year11Maths #MathsStandard #Wages #HSCScience

## Open decisions

- **1. The l07 join.** Closed by ruling 93 (confirmed): scene 1 opens on the l07 frame as specified; the l07 designer builds l07's final frame to match it.
- **2. The "Builds on" line.** It names direct variation generically; replace with l07's published title when it exists.
- **3. Pack error (for root).** The e01 pack says every lesson01 rate except `we-3` is above the 2026-27 minimum, but `we-1`'s $26.40 is below $26.44 (and the e02 pack lists lesson04 SAQ 3's $26.00 as above it, also below). This design uses drill 1 and drill 2 instead; the site-corrections MS-76 list should add lesson01 `we-1` and lesson04 SAQ 3.
- **4. The shop front plate.** One new plate carries e01's final frame and e02's anchor. If root prefers fewer plates, `ma11-food-truck-v1.png` could stand in, with "food truck" in the narration.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s11-e01-learning-review.md`; ruling 96). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.
- Revision 1. Next: student learning review (trace from l07 for a student who has never had a pay slip; check that the hub makes "go through the year" feel natural before the trap, that the four-week gap explains the cause rather than only naming it, that "one week first" is clear for the carpenter, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `PayPeriodHub` before this video.
