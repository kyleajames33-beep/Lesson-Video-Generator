# Maths S11 E05: What is leave loading, and how much extra does it pay? Annual leave, leave loading as a percentage of eligible normal pay for the weeks taken, why overtime is left out, the thirteen-times trap, and casual loading as the contrast (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the i-strand resolution logs) and root's Standard rulings 1 to 87 (`../checks/root-rulings-maths-standard-outline.md`; rulings 5, 32 and 85 apply). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,857 characters by script (see "Narration length estimate"), 12 scene headings, about 450 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: sixth video of the Year 11 Earning money strand, outline playlist order 20. One video for Standard 1 and Standard 2. Viewers arrive from e04b's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-e05.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year11/earning-money/lesson03.sa.html` (SHA256 `4bff2698118bd1e4657f6f5cf02f51557282e4959a29a1249fd1b481a6392aa4`; card 02, "leave loading (17.5% of 4 weeks' ordinary pay)"; `we-3`, Wei, "$1,240 per week in ordinary time", $4,960.00 and $868.00, "paid in addition to the $4,960 leave pay"; Trap 03, "Using annual salary ... inflates the answer by a factor of 13") and `lesson05.sa.html` (SHA256 `b254ea601d328e73a60f6b12e60e4218df2bcfb2fbe7afdf5df4cb7577de32c2`; SAQ 3, the total for the leave including loading). Route entry: `math-s11-e05` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the suitcase and calendar plates reused, the wheelbarrow reused for the final frame; the leave bars, pay-slip filter and contrast card coded.

Owner rules applied: as e01 (2024 syllabus; plates for real objects, code for diagrams and documents; no people; one question; one stage at a time; words before symbols; plain meanings (annual leave, leave loading, eligible normal pay, permanent, casual, casual loading); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a road trip, a mechanic, a retail job, a kitchen hand); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; award rates said once to change every 1 July).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Ways of earning", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json`:

- `ci9724bbbe`: "Calculate leave loading by finding a percentage of eligible normal pay"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from e04b's final frame exactly (the suitcase `ma12-travel-suitcase-v1.png` with its tag "4 weeks"; the wall calendar with four week rows circled; chips "4 weeks off: paid?", "Next: leave loading", "?"). Recalls e01 (weekly pay = rate × hours), e02 (ordinary pay is separate from overtime and penalty pay) and Stage 5 (a percentage of an amount) in a phrase or grey chip. Teaches: annual leave (most full-time and part-time permanent employees get 4 weeks of paid leave a year); leave loading as an extra percentage of normal pay for the leave taken (commonly 17.5% in awards, always given in a question); eligible normal pay as ordinary-hours pay (no overtime, penalty rates or allowances); loading = rate × (weeks of leave × weekly normal pay), with the weeks actually taken; the total for the leave = leave pay + loading; the thirteen-times trap (a year's pay); casual employees get no paid leave and a 25% casual loading on every hour instead. Stops at leave loading. Not taught: shift workers' fifth week and the "loading or weekend penalties, whichever is higher" rule (beyond the point, pack); the spreadsheet model (e06).

## Decisions

- **Anchor: the four-week road trip (reused plates, from e04b's final frame).** The suitcase and the calendar with four weeks circled; Wei's `we-3` pays for it ($4,960 leave pay + $868 loading = $5,828). No people.
- **Worked examples.** `we-3` (Wei, $1,240 a week, 4 weeks: $868.00; total $5,828.00) as the main g01 board, with Trap 03 as its own short scene ($64,480 a year, $11,284.00, 13 times too big). For eligible pay and "not always 4 weeks" (lesson03 hard-codes 4 weeks, pack decision): an original mechanic on $30.00 an hour for 38 hours with 4 hours of overtime at $45.00, taking 3 weeks: $1,140 a week, $3,420, loading $598.50, total $4,018.50, with the overtime greyed on her pay slip.
- **Casual contrast (pack decision: the one addition worth its time).** 2026-27 General Retail Award Level 1: permanent $27.81 an hour (paid leave and loading: four weeks on 38 hours, $4,227.12, loading $739.75) against casual $34.76 (25% casual loading, no paid leave). A two-column card.
- **Notation.** "loading = rate × leave pay" and "total = leave pay + loading" in words; 17.5% = 0.175.
- **Join.** Scene 1 opens on e04b's final frame exactly; on "paid annual leave" the four circled weeks fill teal.
- **Simulations (standard item 3).**
  1. **Leave bar with its loading** (scenes 1, 2; `StackedTotalBar`): four teal week blocks of $1,240 drop from the calendar into a "leave pay" bar ($4,960); a thin amber sliver (17.5% of the bar's height) grows on top, labelled "$868"; the total writes beside it.
  2. **Thirteen times** (scene 3): a 52-week year bar beside the 4-week leave bar; the year bar splits into 13 equal four-week pieces, each the size of the leave bar; the year's loading ($11,284) towers over the real $868.
  3. **Eligible-pay filter** (scene 4; `PaySlipCard` with a filter): the mechanic's weekly slip passes through a coded filter labelled "normal pay only"; the ordinary line passes in teal, the overtime line greys out with "not counted".
  4. **Permanent against casual** (scene 5): two hourly rate bars, $27.81 (with a "paid leave + loading" stack beside it) and $34.76 (its top 25% slice tinted "casual loading", no leave stack).
- **Colour roles (fixed for e01 to e06).** Rates (17.5%, 25%) **amber**; weeks and hours **blue**; pay (leave pay, weekly pay) **teal**; the loading sliver **amber** (it is a rate's result; labelled); overtime and other not-eligible pay **grey**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Current working 52 px, rows 44 px, chips 30 to 40 px; nothing below 26 px; all text above y = 950. Hand tags: "paid time off", "17.5% = 0.175", "extra, on top", "leave pay + loading", "only the weeks taken", "13 times too big", "normal pay only", "overtime: not counted", "3 weeks, not 4", "casual: +25%, no paid leave". At most two live at once.
- **Stage changes (standard item 2).** The suitcase and calendar (1); g01 board, Wei, with the leave bar (2); thirteen times (3); g01 board, the mechanic's slip filter (4); permanent against casual (5); framed card (6); question cards (7 to 10); the spreadsheet for e06 (11); key notes (12).
- **Worked examples (g01 layout).** 2: task strip "Wei earns $1240 per week in ordinary time. He takes 4 weeks of annual leave with 17.5% leave loading. Find the loading and the total paid for his leave." (site `we-3`, with SAQ 3's "total"); formula strip "loading = 17.5% × leave pay"; givens card "weekly normal pay = $1240" (teal), "weeks of leave = 4" (blue), "loading rate = 17.5%" (amber); framed answers "loading $868.00", "total $5828.00". 4: task strip "A mechanic earns $30.00 an hour for 38 ordinary hours and usually works 4 hours of overtime at $45.00 an hour. She takes 3 weeks of leave with 17.5% loading. Find the total paid for her leave."; the slip filter; framed answer "$4018.50"; crossed slip "(1140 + 180) × 3 × 0.175 = $693.00" (caption "loading is on normal pay only").
- **Memory aid.** Framed card: "Loading: on normal pay, for the weeks you take." Key line: "Leave pay = weeks × weekly normal pay. Loading = rate × leave pay. Total = leave pay + loading."
- **Visual surprise.** The year bar splits into exactly thirteen copies of the leave bar, and the wrong loading towers over the right one (scene 3).
- **Site notes (pack section 8).** No arithmetic error in lesson03's leave loading content. Teaching gaps (leave other than 4 weeks, overtime as not eligible) are filled in scene 4 (logged, section 11).
- **Plain meanings at first use.** Annual leave ("paid time off each year"); leave loading ("an extra percentage of normal pay for the leave you take"); eligible normal pay ("pay for your ordinary hours, with no overtime, penalty rates or allowances"); permanent employee ("full-time or part-time, with set hours"); casual employee ("paid only for the hours worked, with no paid leave"); casual loading ("25% extra on every hour, instead of paid leave").
- **Attempts.** A1 (pack question 1): $1,118.40 a week, 3 weeks, 17.5%: loading $587.16, total $3,942.36; crossed "1118.40 × 4 × 0.175 = $782.88" (caption "she takes 3 weeks, not 4"). A2 (pack question 2): Leo, $31.60 × 38 with 6 hours of overtime at time and a half, 4 weeks: $5,643.76; crossed "loading with overtime = $1039.64" (caption "loading is on normal pay only").
- **Mistake scene:** scene 3 is the misconception scene (the loading on a year's pay), kept because the factor of 13 is easy to show and the site names it. Others: always 4 weeks (4, said; A1 crossed); overtime included (4, crossed; A2 crossed); only the loading when the total is asked, or the reverse (2, said by the two framed answers).
- **Cause chain taught, in order:** (1) employees with paid leave keep being paid while away, and many awards add a loading on top (1, 2); (2) the loading is a percentage of the pay for the leave, so it multiplies the leave pay, not a year (2, 3); (3) a year is 13 lots of 4 weeks, so using a year makes the loading 13 times too big (3); (4) "eligible normal pay" means ordinary hours, so overtime is left out (4); (5) the loading covers the weeks actually taken, which need not be 4 (4); (6) casuals have no paid leave, so they get a 25% loading on every hour instead (5).
- **Entry knowledge (route):** Stage 5 (17.5% = 0.175); math-s11-e01 (weekly pay), e02 (ordinary pay separate from overtime). Recalled in a phrase or grey chip.
- **Money sources (rulings 5, 32 and 85).** Four weeks' paid annual leave for full-time employees (part-time pro rata) under the National Employment Standards, and 17.5% leave loading in many awards, including the General Retail Industry Award (Fair Work Ombudsman, "Annual leave loading", https://www.fairwork.gov.au/leave/annual-leave/annual-leave-loading; Codex confirms the wording and date). Casual loading 25% and the 2026-27 Level 1 retail rates ($27.81 permanent, $34.76 casual) from the FWO pay guide MA000004 from 1 July 2026 (e02's source; Codex confirms). Said once (scene 5): "Award rates change every first of July." The 17.5% rate is said to be "common in awards, but a question always gives you the rate" (scene 2).
- **Handoff (to math-s11-e06, "How does a spreadsheet model a pay packet with overtime, bonuses and commission?").** Scene 11, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: the wheelbarrow `ma11-garden-barrow-v1.png` (about 500 px wide) at the left with a coded tag "garden centre: weekly pay"; at the right a blank, unbranded `SpreadsheetGrid` (1,000 × 420 px) with column headings "A: role", "B: rate", "C: hours", "D: overtime hours", "E: pay" and five empty rows; chips "one formula, every worker", "Next: a pay spreadsheet" and "?". No values in the grid. This is e06's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Wei: 1240 × 4 = 4960; × 0.175 = 868.00; × 1.175 = 5828.00; year 1240 × 52 = 64 480; × 0.175 = 11 284.00; 11 284 ÷ 868 = 13.
  (b) Mechanic: 30 × 38 = 1140; × 3 = 3420; × 0.175 = 598.50; total 4018.50; overtime 4 × 45 = 180; slip (1140 + 180) × 3 × 0.175 = 693.00.
  (c) Retail: 27.81 × 38 = 1056.78; × 4 = 4227.12; × 0.175 = 739.746 → 739.75; casual 27.81 × 1.25 = 34.7625 → 34.76; gap 6.95 an hour.
  (d) A1: 1118.40 × 3 = 3355.20; × 0.175 = 587.16; total 3942.36; slip 1118.40 × 4 × 0.175 = 782.88.
  (e) A2: 31.60 × 38 = 1200.80; × 4 = 4803.20; × 0.175 = 840.56; total 5643.76; slip with overtime: (1200.80 + 6 × 47.40) × 4 × 0.175 = 1485.20 × 4 × 0.175 = 1039.64.
  (f) Pronunciations: "seventeen and a half per cent"; "zero point one seven five"; "eight hundred and sixty-eight dollars"; "seven hundred and thirty-nine dollars seventy-five".

Main question: *Four weeks of paid leave for a road trip. What is leave loading, and how much extra does it pay?*
Entry knowledge (Stage 5; math-s11-e01, e02): a percentage of an amount; ordinary pay.
Stops after: leave loading on eligible normal pay, the total for the leave, the casual contrast. No spreadsheets.
Handoff: math-s11-e06: "one formula, every worker".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): rates amber; weeks and hours blue; pay teal; not-eligible pay grey; answer green; mistake red. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: four weeks off
> Last time ended with a suitcase packed for a four-week trip. If you're a permanent employee, those four weeks can be paid. Most full-time and part-time employees get four weeks of paid annual leave each year. Many also get leave loading, an extra percentage of their normal pay for the leave they take. So what is leave loading, and how much extra does it **pay**?

Visual: opens on e04b's final frame exactly (the suitcase with its "4 weeks" tag, the calendar with four weeks circled, chips). On the first sentence the "Next" chip fades. On "paid annual leave" the four circled weeks fill teal, chip "annual leave: paid time off (4 weeks a year)", hand tag "paid time off". On "leave loading" a thin amber sliver appears above the four teal weeks with "?", chip "leave loading: extra % of normal pay". On "pay" heading "Leave loading" writes on; the question chip "How much extra?" moves to the top right.

### 2. Wei's leave and its loading
> Wei earns one thousand two hundred and forty dollars a week in ordinary time. He takes four weeks of annual leave, with seventeen and a half per cent leave loading. First, the leave pay itself. Four weeks of normal pay is four times one thousand two hundred and forty, four thousand nine hundred and sixty **dollars**. The loading is seventeen and a half per cent of that. Seventeen point five per cent is zero point one seven **five**. Zero point one seven five times four thousand nine hundred and sixty is eight hundred and sixty-eight **dollars**. That's extra, on top of the leave pay. So for his four weeks off, Wei is paid five thousand eight hundred and twenty-eight dollars in **total**. Seventeen and a half per cent is common in awards, but a question always gives you the rate.

Visual: clear change to the g01 board, the suitcase (360 px) at the top right. Task strip, 44 px: "Wei earns $1240 per week in ordinary time. He takes 4 weeks of annual leave with 17.5% leave loading. Find the loading and the total paid for his leave." (site `we-3`). Formula strip, 52 px: "loading = 17.5% × leave pay". Givens card, 44 px: "weekly normal pay = $1240" (teal), "weeks of leave = 4" (blue), "loading rate = 17.5%" (amber). Simulation 1, at the right: on "Four weeks of normal pay" four teal week blocks "$1240" drop into a "leave pay" bar; on "dollars" (first) row, 52 px: "leave pay = 4 × 1240 = $4960" (teal). On "five" (bold) the givens line reads "17.5% = 0.175", hand tag "17.5% = 0.175". On "dollars" (second) the amber sliver grows on top of the bar, labelled "$868"; row "loading = 0.175 × 4960 = $868.00" (framed green), hand tag "extra, on top". On "total" row "total = 4960 + 868 = $5828.00" (framed green), hand tag "leave pay + loading". On "a question always gives you the rate" grey chip "17.5%: common in awards; use the rate given".

### 3. the thirteen-times trap
> Here's the slip. The loading is on the pay for the leave, not on a whole year's pay. Wei's year is fifty-two weeks of pay, sixty-four thousand four hundred and eighty dollars. Seventeen and a half per cent of that is eleven thousand two hundred and eighty-four **dollars**. Fifty-two weeks is thirteen lots of four weeks, so that answer is thirteen times too **big**. The loading only covers the weeks you actually take **off**.

Visual: stage change (simulation 2): the 4-week leave bar (teal, with its $868 sliver) at the left; on "fifty-two weeks of pay" a long year bar "52 × 1240 = $64 480" (teal) draws beside it. On "dollars" an amber block "0.175 × 64 480 = $11 284" towers on the year bar, beside the small "$868". On "thirteen lots" the year bar splits into 13 equal four-week pieces, each the size of the leave bar, counted 1 to 13; on "big" hand tag "13 times too big", and a red slip "0.175 × 64 480 = $11 284" writes over the tower and is crossed (caption "loading is on the leave, not the year"). On "off" hand tag "only the weeks taken".

### 4. eligible normal pay: no overtime
> The syllabus says eligible normal pay. That means pay for your ordinary hours only. Overtime, penalty rates and allowances don't count. A mechanic earns thirty dollars an hour for thirty-eight ordinary hours, and usually does four hours of overtime a week, at forty-five dollars an hour. She takes three weeks of leave, with seventeen and a half per cent loading. Her normal weekly pay is thirty-eight times thirty, one thousand one hundred and forty **dollars**. The overtime is left out. Three weeks is three thousand four hundred and **twenty**. The loading is zero point one seven five times that, five hundred and ninety-eight dollars **fifty**. So she's paid four thousand and eighteen dollars fifty for the three **weeks**. Notice it's three weeks, not four. Use the weeks of leave actually taken.

Visual: clear change to the g01 board. Task strip, 44 px: "A mechanic earns $30.00 an hour for 38 ordinary hours and usually works 4 hours of overtime at $45.00 an hour. She takes 3 weeks of leave with 17.5% loading. Find the total paid for her leave." Simulation 3 at the left: her weekly `PaySlipCard` ("Ordinary 38 h × $30.00 = $1140.00", "Overtime 4 h × $45.00 = $180.00") slides through a coded filter "normal pay only"; on "don't count" the overtime line greys with "not counted", hand tag "overtime: not counted". Rows, 52 px: on "dollars" "normal weekly pay = 38 × 30 = $1140" (teal); on "twenty" "3 × 1140 = $3420" (hand tag "3 weeks, not 4"); on "fifty" "0.175 × 3420 = $598.50" (amber sliver on a three-block bar); on "weeks" framed answer (green) "3420 + 598.50 = $4018.50". On "Notice it's three weeks" a red slip "(1140 + 180) × 3 × 0.175 = $693.00" writes and is crossed (caption "loading is on normal pay only").

### 5. permanent or casual
> Not everyone gets paid leave. A casual employee is paid only for the hours worked, with no paid leave. Instead, casuals get a casual loading, twenty-five per cent extra on every hour. In retail from July twenty twenty-six, a permanent Level 1 worker earns twenty-seven dollars eighty-one an hour, with paid leave and leave loading. A casual at the same level earns thirty-four dollars seventy-six an hour, but no paid **leave**. On thirty-eight hours, the permanent worker's four weeks of leave come with a loading of seven hundred and thirty-nine dollars seventy-five, on top of the leave **pay**. Award rates change every first of July.

Visual: stage change (simulation 4): a two-column contrast card (1,400 × 560 px). Left column "permanent": an amber rate bar "$27.81 an hour" with, beside it, a small teal stack "paid leave: 4 weeks" and an amber sliver "+ leave loading". Right column "casual": a longer bar "$34.76 an hour" whose top 25% slice is tinted "casual loading: + 25%", and an empty dashed box "paid leave: none". On "casual loading" hand tag "casual: +25%, no paid leave". On "leave" (bold) a grey chip, 32 px: "General Retail Award, Level 1, from 1 July 2026: permanent $27.81, casual $34.76 (Fair Work Ombudsman pay guide)". On "pay" row under the left column, 40 px: "4 × 38 × 27.81 = $4227.12; 0.175 × 4227.12 ≈ $739.75" (framed green). On "Award rates change" grey chip "award rates change every 1 July".

### 6. memory aid
> Here's the summary. Leave loading is a percentage of normal pay, for the weeks of leave you take. Normal pay means ordinary hours, with no overtime. And the total for the leave is the leave pay plus the **loading**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the four teal week blocks with the thin amber sliver on top, and a grey overtime block left outside. Main line, hand font 56 px: "Loading: on normal pay, for the weeks you take." On "loading" the key line, 40 px: "Leave pay = weeks × weekly normal pay. Loading = rate × leave pay. Total = leave pay + loading." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A kitchen hand earns one thousand one hundred and eighteen dollars forty a week in ordinary time. She takes three weeks of annual leave, and receives seventeen and a half per cent leave loading. Calculate the leave loading, and the total she's paid for the three weeks of leave. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A kitchen hand earns $1118.40 per week in ordinary time. She takes 3 weeks of annual leave and receives 17.5% leave loading. (a) Calculate the leave loading. (b) Calculate the total she is paid for the 3 weeks of leave." Picture slot: the calendar plate (300 px) with three weeks circled. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Three weeks of normal pay is three thousand three hundred and fifty-five dollars **twenty**. Seventeen and a half per cent of that is five hundred and eighty-seven dollars **sixteen**, the loading. The total is three thousand nine hundred and forty-two dollars thirty-six, for the **leave**. Using four weeks is the **slip**. She only takes three.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "twenty" "3 × 1118.40 = $3355.20"; on "sixteen" "0.175 × 3355.20 = $587.16" (framed green); on "leave" "3355.20 + 587.16 = $3942.36" (framed green). On "slip" a red slip "1118.40 × 4 × 0.175 = $782.88" writes and is crossed (caption "she takes 3 weeks, not 4"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Leo is paid thirty-one dollars sixty an hour for a thirty-eight-hour ordinary week. He usually works six hours of overtime at time and a half each week too. He takes four weeks of annual leave, with seventeen and a half per cent loading on his normal pay. Calculate the total Leo receives for his leave. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Leo is paid $31.60 per hour for a 38-hour ordinary week. He usually also works 6 hours of overtime at time-and-a-half each week. He takes 4 weeks of annual leave with 17.5% leave loading on his normal pay. Calculate the total Leo receives for his leave." Picture slot: a blank weekly `PaySlipCard` (lines unlabelled). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Normal pay is ordinary hours only, thirty-one sixty times thirty-eight, one thousand two hundred dollars **eighty** a week. Four weeks is four thousand eight hundred and three dollars twenty. The loading is eight hundred and forty dollars fifty-six, so the **total** is five thousand six hundred and forty-three dollars seventy-six. Including the overtime is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "eighty" "31.60 × 38 = $1200.80 (no overtime)"; on "Four weeks" "4 × 1200.80 = $4803.20"; on "The loading" "0.175 × 4803.20 = $840.56"; on "total" framed answer (green) "4803.20 + 840.56 = $5643.76". On "slip" a red slip "loading with overtime = $1039.64" writes and is crossed (caption "loading is on normal pay only"). Hold about 1 s.

### 11. handoff
> So far, every pay has been worked out by hand, one person at a time. A garden centre has casual staff, permanent staff with overtime, a salaried manager, and people paid commission or by the piece. Could one formula in a spreadsheet do every row at **once**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "garden centre" the wheelbarrow `ma11-garden-barrow-v1.png` (about 500 px wide) at the left with the coded tag "garden centre: weekly pay". On "casual staff" the blank `SpreadsheetGrid` at the right with headings "A: role", "B: rate", "C: hours", "D: overtime hours", "E: pay" and five empty rows. On "once" chip "one formula, every worker". On "next" chips "Next: a pay spreadsheet" and "?". Hold about 2 s. No values in the grid. This is e06's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Leave pay = weeks of leave × weekly normal pay.
- Normal pay: ordinary hours only (no overtime or allowances).
- Loading = rate × leave pay (17.5% = 0.175).
- Total for the leave = leave pay + loading.
- Casuals: no paid leave; 25% casual loading on every hour.

Memory aid (framed card, right side, as in scene 6): *Loading: on normal pay, for the weeks you take.* Key: *Leave pay = weeks × weekly normal pay. Loading = rate × leave pay. Total = leave pay + loading.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and e06's opening frame.

## Teaching checks

- **Does it explain causes?** Why a loading exists: awards add it to pay for leave (1, 2). Why multiply the leave pay, not the year: the loading is for the leave taken (2, 3). Why 13 times: 52 ÷ 4 = 13 (3). Why no overtime: "eligible normal pay" means ordinary hours (4). Why casuals differ: no paid leave, so a loading on every hour instead (5).
- **Misconceptions addressed:** the loading on a year's pay (3, crossed); always 4 weeks (4; A1 crossed); overtime included (4, crossed; A2 crossed); loading against total (2, two framed answers); casuals getting leave loading (5).
- **Visual standard, item by item:** 1 the suitcase and calendar from the first frame; 2 a new stage every 40 to 60 s; 3 week blocks dropping into a leave bar with a growing sliver, the year bar splitting into 13, the pay-slip filter greying overtime, the permanent and casual bars; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 2 and 4 with framed answers and crossed slips; 8 framed card and five bullets; 9 thirteen copies of the leave bar.
- **One idea at a time:** the loading (2), the year trap (3), eligible pay (4), casual contrast (5).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 23 s and 24 s.
- **Avoided double teaching:** e02's ordinary against overtime pay recalled; spreadsheets left to e06.
- **Syllabus coverage:** `ci9724bbbe` (2, 3, 4, 5, A1, A2; key notes 1 to 5).
- **Out of scope by design:** shift workers' fifth week; "loading or weekend penalties, whichever is higher".

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** "A kitchen hand earns $1118.40 per week in ordinary time. She takes 3 weeks of annual leave and receives 17.5% leave loading. (a) Calculate the leave loading. (b) Calculate the total she is paid for the 3 weeks of leave."
Model answer: (a) 1118.40 × 3 = $3355.20; 3355.20 × 0.175 = $587.16. (b) 3355.20 + 587.16 = $3942.36. Classic mistake (crossed): "1118.40 × 4 × 0.175 = $782.88".

**Attempt 2 (scene 9; pack question 2, 3 marks suggested).** "Leo is paid $31.60 per hour for a 38-hour ordinary week. He usually also works 6 hours of overtime at time-and-a-half each week. He takes 4 weeks of annual leave with 17.5% leave loading on his normal pay. Calculate the total Leo receives for his leave."
Model answer: ordinary weekly pay 31.60 × 38 = $1200.80 (overtime is not normal pay); 4 weeks $4803.20; loading 4803.20 × 0.175 = $840.56; total $5643.76. Classic mistake (crossed): overtime included, loading "$1039.64".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Wei | 4 × 1240 = 4960; × 0.175 = 868.00; total 5828.00 | 1, 2 |
| Year trap | 52 × 1240 = 64 480; × 0.175 = 11 284.00; 52 ÷ 4 = 13 | 3 |
| Mechanic | 38 × 30 = 1140; × 3 = 3420; × 0.175 = 598.50; total 4018.50; overtime 180; slip 693.00 | 4 |
| Retail | 27.81 (permanent), 34.76 (casual); 4 × 38 × 27.81 = 4227.12; loading 739.75 | 5 |
| A1 | 3355.20; 587.16; 3942.36; slip 782.88 | 7, 8 |
| A2 | 1200.80; 4803.20; 840.56; 5643.76; slip 1039.64 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, `python -I`; 0 failures); Codex to re-check.

- 1240 × 4 = 4960; 4960 × 0.175 = 868.00; 4960 × 1.175 = 5828.00; 1240 × 52 = 64 480; 64 480 × 0.175 = 11 284.00; 11 284 ÷ 868 = 13.
- 30 × 38 = 1140; 1140 × 3 = 3420; 3420 × 0.175 = 598.50; 3420 + 598.50 = 4018.50; 4 × 45 = 180; (1140 + 180) × 3 × 0.175 = 693.00.
- 27.81 × 38 × 4 = 4227.12; 4227.12 × 0.175 = 739.746 → 739.75; 27.81 × 1.25 = 34.7625 → 34.76.
- 1118.40 × 3 = 3355.20; × 0.175 = 587.16; 3355.20 + 587.16 = 3942.36; 1118.40 × 4 × 0.175 = 782.88.
- 31.60 × 38 = 1200.80; × 4 = 4803.20; × 0.175 = 840.56; total 5643.76; 31.60 × 1.5 = 47.40; (1200.80 + 6 × 47.40) × 4 × 0.175 = 1039.64.
- Sources: NES four weeks; 17.5% loading in the General Retail Award; casual loading 25%; Level 1 rates from 1 July 2026 (Codex confirms each on the FWO pages).

## Memory aid check

- **"Loading: on normal pay, for the weeks you take."** with key line **"Leave pay = weeks × weekly normal pay. Loading = rate × leave pay. Total = leave pay + loading."** Original (the site's card 02 says "17.5% of 4 weeks' ordinary pay"; the card drops the hard-coded 4 weeks, pack decision). Meaning, as said in scene 6: the loading is a percentage of the pay you get while on leave, and that pay is ordinary-hours pay for the weeks taken. Assumptions checked: "normal pay" means ordinary hours (4); the rate is given (2); the weeks are the weeks taken (4); the loading is extra, on top (2). It helps a new case: $900 a week, 2 weeks, 17.5% gives $1,800 leave pay, $315 loading, $2,115 in total. Introduced after scenes 2 to 5.
- **Considered, not used:** "17.5% of 4 weeks" (the site's form; wrong when the leave is not 4 weeks or the rate differs).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, which reproduces e08's 5,632).

**4,857 characters**, 12 scene headings. Characters per scene (1 to 12): 360, 773, 416, 788, 630, 211, 311, 331, 335, 360, 267, 75.

At 13.3 characters per second the speech is about 365 s. Total with the holds and settling below **about 450 s**, 120 s under the 570 s cap; speech and holds before the notes about 405 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the leave bar (2), the thirteen split (3), the slip filter (4) and the contrast card (5), about 20 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: none needed (the pack expects a short video, and no padding was added). If one is wanted, scene 4's "Notice it's three weeks, not four." (the tag carries it).

## Scene list and build ids

Lesson key `m-s11e05` (route math-s11-e05). Explainer folder `src/explainer/lessons/math-s11-e05`; build inputs in `docs/production/claude-pm/lessons/math-s11-e05/` (at voicing).

In order (12 scene headings): hook-four-weeks-off, wei-leave-loading, thirteen-times-trap, eligible-normal-pay, permanent-or-casual, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | e04b's frame: the suitcase and calendar |
| 30 to 100 s | 2 | g01 board: Wei's leave bar |
| 100 to 135 s | 3 | Thirteen times |
| 135 to 200 s | 4 | g01 board: the slip filter |
| 200 to 250 s | 5 | Permanent against casual |
| 250 to 265 s | 6 | Framed memory card |
| 265 to 370 s | 7 to 10 | Question cards and countdowns, then feedback |
| 370 to 390 s | 11 | The garden centre spreadsheet, for e06 |
| 390 to 435 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e04b's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3 stage change; 3 to 4 clear change; 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e05-learning-review.md`, `science_check` = `checks/m-s11-e05-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-travel-suitcase-v1.png` (teal hard-shell suitcase, straw hat, blank luggage tag, true alpha; reused); `ma12-wall-calendar-v1.png` (as e01; reused); `ma11-garden-barrow-v1.png` (a green wheelbarrow with two paper sacks, a coiled garden hose and a potted lavender, on a gravel patch, true alpha; reused as the garden centre for e06).

Need: none new. Reused: `ma12-travel-suitcase-v1.png`, `ma12-wall-calendar-v1.png`, `ma11-garden-barrow-v1.png`.

Coded: the week blocks, leave bars and slivers, the year bar and its split, the pay-slip filter, the contrast card, the spreadsheet frame, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `PlateFields`, `HandTag`, `StackedTotalBar`, `PaySlipCard` (from e02) with a filter mode, `RateBlocks` (rate bars), `SpreadsheetGrid` (blank, final frame), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions: **eligible-pay filter** on `PaySlipCard` (small prop): named lines pass in colour, the rest grey out with a "not counted" tag. Check: the mechanic's ordinary line passes ($1,140.00) and overtime greys ($180.00).

## Codex asset brief

No new plate. The suitcase, calendar and wheelbarrow exist and were viewed. Bars, slips, the contrast card and the spreadsheet frame are coded.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the NES four weeks, the 17.5% loading in the retail award, the 25% casual loading and the Level 1 rates from 1 July 2026 on the FWO pages, and that "Award rates change every first of July" is said once.
4. Confirm overtime is never included in the loading except in the crossed slips.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on e04b's final frame and scene 11 matches the decisions file's e05 to e06 join (no values in the grid).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Leave Loading | Year 11 Maths Standard

(Title length: 38 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson03.sa.html

Four weeks off for a road trip: is the time paid, and what is the extra called leave loading? Learn what annual leave and leave loading are, how to find the loading as a percentage of normal pay for the weeks you take, why overtime is left out, why using a whole year's pay makes the answer 13 times too big, and how casual employees get a casual loading instead of paid leave. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Award rates change every 1 July; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Calculate leave loading by finding a percentage of eligible normal pay"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: Government Payments and Sole Trader Income. Next: Modelling Pay in a Spreadsheet.

#Year11Maths #MathsStandard #LeaveLoading #HSCScience

## Open decisions

- **1. The mechanic (original).** lesson03 hard-codes 4 weeks and never shows overtime as not eligible; an original 3-week case with overtime fills both gaps. Confirm.
- **2. Length.** The pack expects a short video; at about 450 s with no padding this is among the shortest in the strand. Confirm no further content is wanted.

## Review notes

- Revision 1. Next: student learning review (trace from e04b; check that the sliver on the leave bar makes "extra, on top" obvious, that the thirteen-way split explains the trap's size, that "eligible normal pay" is clear before it is used, that the casual card does not distract, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
