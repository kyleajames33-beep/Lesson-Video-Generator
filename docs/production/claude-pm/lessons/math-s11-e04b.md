# Maths S11 E04b: How are government payments and sole-trader income worked out? A fixed payment per period converted through the year, a sole trader's earnings as money from customers minus business costs, no employer leave or super, and how many jobs reach a target (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the i-strand resolution logs) and root's Standard rulings 1 to 87 (`../checks/root-rulings-maths-standard-outline.md`; ruling 84 splits the outline's e04; rulings 3, 5, 32 and 86 apply). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,948 characters by script (see "Narration length estimate"; Revision 2), 12 scene headings, about 456 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s11-e04b-learning-review.md` (summary `../checks/m-s11-e01-e12-learning-review-summary.md`), with root's rulings 84 to 96 in `../checks/root-rulings-maths-standard-outline.md` (ruling 96 accepts every finding as the review wrote it, including the optional ones, and fixes the repriced values). Numbers rechecked with SymPy: `work/brief-review-s11-e/resolve-check.py`. Findings by the review's numbers:

1. Optional, scene 3 ("on their own"): **accepted**: "A sole trader is someone who owns and runs a business as one person, with no company behind it." "There's no employer and no wage." is kept. The plain-meanings line matches.
2. Optional, feedback 2 (about 30.5 s): **accepted**: "They only earn one thousand one hundred and sixty-three fifty." is cut; the crossed slip's caption "30.8 rounds up: 30 earn $1163.50" carries it. Feedback 2 is now about 25.7 s.

Joins unchanged: scene 1 opens on e04a's final frame; scene 11 is e05's opening. Practice cards and key notes unchanged.

Narration 4,948 characters by `work/brief-review-s11-e/count.py` (Revision 1: 4,982 by the same parser; 4,971 by the author's), about 456 s with holds, 114 s under the 570 s cap; feedback speech about 22.6 s and 25.7 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: fifth video of the Year 11 Earning money strand, outline playlist order 19 (shared with e04a, ruling 84). One video for Standard 1 and Standard 2. The syllabus point is shared with e03 and e04a and is quoted in full. Viewers arrive from e04a's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-e04.md` (the "e04b" half). Site lessons: none teach government payments or sole-trader earnings (crosswalk: "not taught as earnings"; `../site-corrections-maths-standard.md` sections 2 and 11), so this video teaches from the syllabus (ruling 3). Route entry: `math-s11-e04` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the wall calendar, the van and the suitcase plates reused; the payment strip, ledger and boards coded.

Owner rules applied: as e01 (2024 syllabus; plates for real objects, code for diagrams and documents; no people; one question; one stage at a time; words before symbols; plain meanings (government payment, Youth Allowance, sole trader, business costs, super); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a student payment, a window-cleaning round, a dog wash); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; rates said once to change every year).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Ways of earning", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json` (typographic apostrophe as in the source):

- `ci85c34acf`: "Calculate an individual’s earnings from commission, sliding scale commission, piecework, royalties, government payments and as a sole trader"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from e04a's final frame exactly (left, the wall calendar `ma12-wall-calendar-v1.png` with "$677.20" in every second week's box; right, the van `ma11-trade-van-v1.png` with the tag "window cleaning: $85 a house"; chips "paid by the government, or by yourself?", "Next: government payments and sole traders", "?"). Recalls e01 (52 weeks, 26 fortnights, 12 months; never "twice"/"times four" for a month) and e04a (divide, then round up for a target) in a grey chip each. Teaches: a government payment as a fixed amount each period, converted through the year (× 26, then ÷ 12 for an average month; ÷ 2 for a week); Youth Allowance as the dated example, with "the amount depends on your situation"; a sole trader as someone running a business alone, with no employer and no wage; a sole trader's earnings = money from customers − business costs; no employer means no paid leave and no employer super, and they pay their own tax through a tax return, so they set money aside; a yearly figure only if every week is the same; the jobs needed for a target earnings (costs first, then divide and round up). Stops at earnings. Not taught: the income test and rent assistance (pack: leave out), ABNs and GST, tax on business income (e07 onwards treats income tax).

## Decisions

- **Anchor: the payment calendar and the window cleaner's van (reused plates, from e04a's final frame).** Two kinds of income that are not a wage. The calendar carries the fortnightly payment; the van (white, with an extension ladder on the roof rack) carries a window-cleaning round, which fits the ladder better than the pack's car-detailing round (same numbers: 14 jobs at $85, $230 costs, $960 a week). No people.
- **Government payment: Youth Allowance (student, single, living away from home), $677.20 a fortnight basic rate from 1 January 2026** (pack; Services Australia, Codex confirms). Converted: $17,607.20 a year, $338.60 a week, $1,467.27 an average month. The income test and rent assistance are left out; one on-screen chip says "the amount depends on your situation (income test)", because leaving it out entirely would teach that every student gets this amount.
- **Sole trader: an original, labelled window-cleaning round.** $85 a house, 14 houses, $230 costs: $1,190 in, $960 earnings; × 52 = $49,920 only if every week were the same. Target $1,200 of earnings: (1,200 + 230) ÷ 85 = 16.8…, so 17 houses (16 earn $1,130; 17 earn $1,215).
- **Super (ruling 86).** Named only as "no employer paying super into a retirement fund"; it is never a deduction here, and e10 teaches it.
- **Notation.** "earnings = money from customers − business costs" in words.
- **Join.** Scene 1 opens on e04a's final frame exactly.
- **Simulations (standard item 3).**
  1. **Payment strip** (scene 2; `CalendarDeposits` on a 52-week `YearStrip`): "$677.20" drops into every second week, 26 drops, the running total climbing to $17,607.20; then the strip folds into 12 month boxes of equal height ($1,467.27 each), and a "2 × $677.20" ghost month box sits lower, crossed.
  2. **Ledger** (scene 3; `SignedBar`): money in (teal, up) as 14 house blocks of $85; money out (amber, down) as fuel, products and ladder repairs; the bar that is left is the earnings (green).
  3. **Year with gaps** (scene 4): 52 equal week blocks of $960; one block greys out as "week off: $0", and three labelled jars ("holidays", "super", "tax") take a slice from the others.
  4. **Target** (scene 5; `StepCounter` with a target line at $1,430 of money in): houses tick 15, 16 (short), 17 (over).
- **Colour roles (fixed for e01 to e06).** Rates (per house, per dog) **amber**; counts (houses, fortnights) **blue**; money from customers and payments **teal**; fixed amounts (the payment, business costs) **violet**; answer **green**; mistake **red**, crossed slips only; caveats grey.
- **Large type, handwritten voice.** Current working 52 px, rows 44 px, chips 30 to 40 px; nothing below 26 px; all text above y = 950. Hand tags: "fixed amount each fortnight", "26 a year", "average month = year ÷ 12", "not 2 fortnights", "money in − costs", "no employer", "only if every week is the same", "set money aside", "costs first", "round up". At most two live at once.
- **Stage changes (standard item 2).** The calendar and the van (1); the payment strip folding into months (2); the ledger (3); the year with gaps and jars (4); g01 board, the target (5); framed card (6); question cards (7 to 10); the suitcase for e05 (11); key notes (12).
- **Worked examples (g01 layout).** 2: task strip "A student receives Youth Allowance of $677.20 a fortnight. Find the yearly, weekly and average monthly amounts."; formula strip "year = fortnightly × 26"; givens card "payment = $677.20 a fortnight" (violet), "1 year = 26 fortnights = 52 weeks = 12 months"; framed answers "$17 607.20 a year", "$338.60 a week", "$1467.27 a month (average)". 5: task strip "A window cleaner charges $85 a house and has $230 of costs a week. How many houses give earnings of at least $1200 in a week?"; formula strip "earnings = 85 × houses − 230"; givens card; rows; check rows; framed answer "17 houses".
- **Memory aid.** Framed card: "Payments: through the year. Sole traders: money in minus costs." Key line: "Fortnightly × 26 = year; year ÷ 12 = average month. Sole trader: no employer, so no paid leave or employer super."
- **Visual surprise.** The fortnightly payments fold into twelve equal months, and the "two fortnights" ghost month sits visibly lower than every real month (scene 2).
- **Site notes.** No site teaching (logged gap, sections 2 and 11); every example is original and labelled.
- **Plain meanings at first use.** Government payment ("money the government pays regularly to support people, like students, carers or job seekers"); Youth Allowance ("a payment that helps students"); sole trader ("someone who owns and runs a business as one person, with no company behind it"; Revision 2); business costs ("what the business spends to do the work"); super ("money saved for retirement", recalled in e10); tax return ("the form that works out your tax for the year"; e11).
- **Attempts.** A1 (original, after the pack's government-payment anchor; an example amount): $612.40 a fortnight: $15,922.40 a year, $306.20 a week, $1,326.87 an average month; crossed "612.40 × 2 = $1224.80 a month" (caption "a month = year ÷ 12"). A2 (pack question 2): Ellie's dog wash, 32 dogs at $45 with $186.50 costs: $1,253.50; dogs for at least $1,200: (1,200 + 186.50) ÷ 45 = 30.8…, so 31; crossed "30 dogs" (caption "30.8 rounds up: 30 earn $1163.50").
- **Mistake scene:** none separate. Two fortnights as a month (2, ghost; A1 crossed); takings as earnings (3, crossed); a yearly figure assumed from one week (4, said); rounding down a target (5; A2 crossed).
- **Cause chain taught, in order:** (1) a government payment is a fixed amount per period, so it converts through the year like a salary (2); (2) a month is not two fortnights, because 26 fortnights do not split into 12 pairs (2); (3) a sole trader is paid by customers but pays the business's costs, so earnings are money in minus costs (3); (4) with no employer there is no paid leave or employer super, so a week off earns nothing and the sole trader saves for these (4); (5) to reach target earnings, the money in must cover the costs first, then the jobs needed round up (5).
- **Entry knowledge (route):** math-s11-e01 (pay periods), e04a (round up for a target). Recalled in a grey chip each.
- **Money sources (rulings 5 and 32).** Youth Allowance (students and apprentices), single, no children, living away from home: $677.20 a fortnight basic rate from 1 January 2026, indexed each 1 January (Services Australia, "How much you can get", https://www.servicesaustralia.gov.au/how-much-youth-allowance-for-students-and-apprentices-you-can-get, read via search 19 Nov 2026 by the pack; Codex confirms on the page). Said once (scene 2): "the amount depends on your situation, and the rates change every year." The window cleaner and the dog wash are original examples.
- **Handoff (to math-s11-e05, "What is leave loading, and how much extra does it pay?").** Scene 11, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: the suitcase `ma12-travel-suitcase-v1.png` (about 500 px tall) beside the wall calendar `ma12-wall-calendar-v1.png` (420 px) with four week rows circled in teal (coded), the suitcase's blank luggage tag coded "4 weeks"; chips "4 weeks off: paid?", "Next: leave loading" and "?". No pay shown. This is e05's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Youth Allowance: 677.20 × 26 = 17 607.20; ÷ 2 = 338.60; 17 607.20 ÷ 12 = 1467.2666… → 1467.27; ghost 677.20 × 2 = 1354.40.
  (b) Window cleaner: 14 × 85 = 1190; − 230 = 960; × 52 = 49 920; slip 1190 as earnings.
  (c) Target: 1200 + 230 = 1430; 1430 ÷ 85 = 16.82…; 16 × 85 − 230 = 1130; 17 × 85 − 230 = 1215.
  (d) A1: 612.40 × 26 = 15 922.40; ÷ 2 = 306.20; 15 922.40 ÷ 12 = 1326.866… → 1326.87; slip 1224.80.
  (e) A2: 32 × 45 = 1440; − 186.50 = 1253.50; (1200 + 186.50) ÷ 45 = 30.811…; 30 → 1163.50; 31 → 1208.50.
  (f) Pronunciations: "six hundred and seventy-seven dollars twenty"; "seventeen thousand six hundred and seven dollars twenty"; "one thousand four hundred and sixty-seven dollars twenty-seven".

Main question: *A student gets $677.20 a fortnight from the government; a window cleaner charges $85 a house. How are government payments and sole-trader income worked out?*
Entry knowledge (math-s11-e01, e04a): pay periods; round up for a target.
Stops after: government payments and sole-trader earnings. No income test, no business tax.
Handoff: math-s11-e05: "4 weeks off: paid?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): rates amber; counts blue; money in teal; fixed amounts and costs violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: paid by the government, or by yourself
> Last time ended with two very different kinds of income. On the left, a payment from the government, six hundred and seventy-seven dollars twenty every fortnight. On the right, a window cleaner who works for themselves, at eighty-five dollars a house. Neither one is a wage from an employer. Lots of students get a payment like this, and plenty of people start a small business of their own. So how do you work out government payments, and what a sole trader really **earns**?

Visual: opens on e04a's final frame exactly (the calendar with its fortnightly marks, the van with its tag, chips). On the first sentence the "Next" chip fades. On "payment from the government" the calendar's marks pulse violet, chip "government payment". On "works for themselves" the van's tag rings, chip "sole trader". On "Neither one is a wage" a grey crossed chip "employer's wage". On "earns" heading "Government payments and sole traders" writes on; the question chip "Not a wage: how much?" moves to the top right.

### 2. a fixed payment, converted through the year
> A government payment is money the government pays regularly to support people, like students, carers or job seekers. It's a fixed amount for each period. Youth Allowance helps students. For a single student living away from home, the basic rate from January twenty twenty-six is six hundred and seventy-seven dollars twenty a fortnight. The amount depends on your situation, and the rates change every year. A year has twenty-six fortnights, so six hundred and seventy-seven twenty, times twenty-six, is seventeen thousand six hundred and seven dollars twenty a **year**. A week is half a fortnight, three hundred and thirty-eight dollars **sixty**. And an average month is the year divided by twelve, one thousand four hundred and sixty-seven dollars twenty-seven, on **average**. Two fortnightly payments would only make twenty-four of the twenty-six, so a month is never just two **fortnights**.

Visual: clear change to the g01 board, the calendar (360 px) at the top right. Task strip, 44 px: "A student receives Youth Allowance of $677.20 a fortnight. Find the yearly, weekly and average monthly amounts." Formula strip, 52 px: "year = fortnightly amount × 26". Givens card, 44 px: "payment = $677.20 a fortnight" (violet), "1 year = 26 fortnights = 52 weeks = 12 months" (blue). On "Youth Allowance" a grey chip, 32 px: "Youth Allowance (student, single, away from home): $677.20 a fortnight from 1 Jan 2026 (Services Australia)". On "depends on your situation" a grey chip "amount depends on your situation (income test)". Simulation 1: under the board a 52-week strip; on "twenty-six fortnights" "$677.20" drops into every second week, 26 drops, hand tag "26 a year". On "year" row, 52 px: "677.20 × 26 = $17 607.20 a year" (framed green). On "sixty" row "677.20 ÷ 2 = $338.60 a week" (framed green). On "average" the strip folds into 12 equal month boxes; row "17 607.20 ÷ 12 = $1467.27 a month" (framed green), hand tag "average month = year ÷ 12". On "fortnights" a grey ghost month box "2 × 677.20 = $1354.40" sits lower than the twelve and is crossed in grey, hand tag "not 2 fortnights".

### 3. a sole trader: money in minus costs
> Now the window cleaner. A sole trader is someone who owns and runs a business as one person, with no company behind it. There's no employer and no wage. They're paid by customers, but they also pay the business's costs. So a sole trader's earnings are the money from customers, minus the business **costs**. This week the window cleaner does fourteen houses at eighty-five dollars each, one thousand one hundred and ninety dollars from **customers**. Fuel, cleaning products and ladder repairs cost two hundred and thirty dollars. So the week's earnings are nine hundred and sixty **dollars**. Counting the whole one thousand one hundred and ninety as earnings is the slip. That ignores what the business **spent**.

Visual: stage change: the van (700 px) at the top left. On "costs" row, 52 px: "earnings = money from customers − business costs" (teal, violet), hand tag "money in − costs". Simulation 2: a ledger bar on a baseline (1,200 × 520 px). On "customers" fourteen teal house blocks ($85 each, labelled "$85") stack upward to "14 × 85 = $1190". On "two hundred and thirty dollars" violet cost blocks hang downward: "fuel", "cleaning products", "ladder repairs", total "$230". On "dollars" the cost blocks cancel the top of the teal stack, leaving a green bar "1190 − 230 = $960 earnings" (framed green). On "spent" a red slip "earnings = $1190" writes and is crossed (caption "take off the business costs").

### 4. no employer: no paid leave, no employer super
> Working for yourself has another catch. There's no employer, so there's no paid annual leave, and nobody paying super, money saved for retirement, into a fund for you. Sole traders also pay their own tax through a tax return. If every week were like this one, fifty-two weeks would earn forty-nine thousand nine hundred and twenty **dollars**. But a week off earns nothing, so sole traders set money aside for holidays, super and **tax**. An employee on the same nine hundred and sixty a week would also get paid leave, with super paid on top.

Visual: stage change (simulation 3): a year strip of 52 equal green week blocks "$960" (1,500 × 120 px). Chips at the top, 36 px: "no employer", "no paid leave", "no employer super", "own tax return", hand tag "no employer". On "dollars" the row "960 × 52 = $49 920" appears with a grey tag "only if every week is the same". On "a week off" one block greys to "$0", hand tag "week off: $0". On "tax" three small coded jars "holidays", "super", "tax" each take a thin slice from every block, hand tag "set money aside". On "An employee" a grey comparison card, 32 px: "employee, $960 a week: + paid leave, + employer super on top (e05, e10)".

### 5. worked example: how many houses?
> How many houses would the window cleaner need for one thousand two hundred dollars of earnings in a week, with the same two hundred and thirty dollars of costs? The customers have to cover the costs first. So the money from customers must reach one thousand two hundred plus two hundred and thirty, one thousand four hundred and thirty **dollars**. Divide by eighty-five a house, sixteen point eight **two**. Round up, just like last time. Sixteen houses earn one thousand one hundred and thirty, short. Seventeen houses earn one thousand two hundred and fifteen. So the answer is seventeen **houses**.

Visual: clear change to the g01 board, the van (400 px) at the top right. Task strip, 44 px: "A window cleaner charges $85 a house and has $230 of costs a week. How many houses give earnings of at least $1200 in a week?" Formula strip, 52 px: "earnings = 85 × houses − 230". Givens card, 44 px: "$85 a house" (amber), "costs = $230" (violet), "target earnings = $1200". On "cover the costs first" hand tag "costs first". On "dollars" row "money in needed = 1200 + 230 = $1430" (teal). On "two" row "1430 ÷ 85 = 16.82…", hand tag "round up", grey chip "round up for a target". Simulation 4: a houses counter at the right with a target line "$1430 in"; on "Sixteen houses" it reads 16, "$1360 in, earnings $1130" under the line; on "Seventeen houses" 17, "$1445 in, earnings $1215" over it. On "houses" framed answer (green) "17 houses". Check rows, 40 px: "16: 16 × 85 − 230 = $1130 ✗", "17: 17 × 85 − 230 = $1215 ✓".

### 6. memory aid
> Here's the summary. A government payment is a fixed amount each period, so convert it through the year. A sole trader's earnings are money in, minus business costs. And with no employer, there's no paid leave or employer **super**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the payment strip folded into twelve equal months beside the ledger's green earnings bar. Main line, hand font 56 px: "Payments: through the year. Sole traders: money in minus costs." On "super" the key line, 40 px: "Fortnightly × 26 = year; year ÷ 12 = average month. Sole trader: no employer, so no paid leave or employer super." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A student receives a government payment of six hundred and twelve dollars forty a fortnight. Calculate the yearly amount, the weekly amount, and the average monthly amount. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A student receives a government payment of $612.40 a fortnight. Calculate (a) the yearly amount, (b) the weekly amount and (c) the average monthly amount." Picture slot: the calendar plate (300 px), grid blank. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Times twenty-six is fifteen thousand nine hundred and twenty-two dollars forty a **year**. Half a fortnight is three hundred and six dollars twenty a **week**. The year divided by twelve is one thousand three hundred and twenty-six dollars eighty-seven a **month**. Doubling the fortnight for a month is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "year" "612.40 × 26 = $15 922.40" (framed green); on "week" "612.40 ÷ 2 = $306.20" (framed green); on "month" "15 922.40 ÷ 12 = $1326.87" (framed green). On "slip" a red slip "612.40 × 2 = $1224.80 a month" writes and is crossed (caption "a month = year ÷ 12"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Ellie runs a mobile dog-washing business as a sole trader. She charges forty-five dollars per dog. In one week she washes thirty-two dogs, and spends a hundred and eighty-six dollars fifty on shampoo, water and fuel. Calculate her earnings for the week. Then, with the same costs, how many dogs must she wash to earn at least one thousand two hundred dollars in a week? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Ellie runs a mobile dog-washing business as a sole trader. She charges $45 per dog. In one week she washes 32 dogs and spends $186.50 on shampoo, water and fuel. (a) Calculate her earnings for the week. (b) With the same costs, how many dogs must she wash to earn at least $1200 in a week?" Picture slot: an empty coded ledger (money in, costs). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Thirty-two dogs bring in one thousand four hundred and forty dollars. Minus the costs, she earns one thousand two hundred and fifty-three dollars **fifty**. For one thousand two hundred, the money in must reach one thousand three hundred and eighty-six fifty. Divide by forty-five, thirty point eight, so thirty-one **dogs**. Thirty dogs is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "32 × 45 = $1440"; on "fifty" "1440 − 186.50 = $1253.50" (framed green). On "the money in must reach" "1200 + 186.50 = $1386.50"; on "dogs" "1386.50 ÷ 45 = 30.8… → 31 dogs" (framed green), grey check "31: 31 × 45 − 186.50 = $1208.50 ✓". On "slip" a red slip "30 dogs" writes and is crossed (caption "30.8 rounds up: 30 earn $1163.50"). Hold about 1 s.

### 11. handoff
> Sole traders get no paid holidays. But most employees do, four weeks a year, often with a bit extra on top. This suitcase is packed for a four-week trip. Is the time off paid, and how much **extra**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "most employees do" the wall calendar (420 px) at the right with four week rows circled in teal. On "This suitcase" the suitcase `ma12-travel-suitcase-v1.png` (about 500 px tall) at the left, its blank luggage tag coded "4 weeks". On "extra" chip "4 weeks off: paid?". On "next" chips "Next: leave loading" and "?". Hold about 2 s. No pay shown. This is e05's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Government payment: a fixed amount each period.
- Fortnightly × 26 = year; ÷ 2 = week; year ÷ 12 = average month.
- Sole trader earnings = money from customers − business costs.
- No employer: no paid leave, no employer super; own tax return.
- Target earnings: costs first, then divide and round up.

Memory aid (framed card, right side, as in scene 6): *Payments: through the year. Sole traders: money in minus costs.* Key: *Fortnightly × 26 = year; year ÷ 12 = average month. Sole trader: no employer, so no paid leave or employer super.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and e05's opening frame.

## Teaching checks

- **Does it explain causes?** Why convert through the year: the payment is fixed per period (2). Why not two fortnights a month: 26 fortnights do not make 12 pairs (2). Why subtract costs: the business pays them out of the money in (3). Why sole traders save: no employer leave or super, and a week off earns nothing (4). Why add the costs before dividing: the money in must cover them first (5).
- **Misconceptions addressed:** two fortnights as a month (2; A1 crossed); takings as earnings (3, crossed); one week × 52 as certain (4); rounding down a target (5; A2 crossed).
- **Visual standard, item by item:** 1 the calendar and the van from the first frame; 2 a new stage every 40 to 60 s; 3 payments dropping and folding into months, the ledger cancelling, a year strip with a greyed week, the houses counter crossing its line; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 2 and 5 with framed answers and crossed slips; 8 framed card and five bullets; 9 the lower "two fortnights" ghost month.
- **One idea at a time:** a payment converted (2), a sole trader's earnings (3), no employer (4), a target (5).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 21 s and 29 s.
- **Avoided double teaching:** e01's pay periods and e04a's round-up recalled in grey chips; super left to e10, tax returns to e11.
- **Syllabus coverage:** `ci85c34acf`: government payments (2, A1) and as a sole trader (3, 4, 5, A2); key notes 1 to 5. Commission: e03. Piecework and royalties: e04a.
- **Out of scope by design:** the income test, rent assistance, ABNs, GST, business tax.

## Practice questions and model answers

**Attempt 1 (scene 7; original, example amount, 3 marks suggested, not an official marking scheme).** "A student receives a government payment of $612.40 a fortnight. Calculate (a) the yearly amount, (b) the weekly amount and (c) the average monthly amount."
Model answer: (a) 612.40 × 26 = $15 922.40. (b) 612.40 ÷ 2 = $306.20. (c) 15 922.40 ÷ 12 = $1326.87. Classic mistake (crossed): "612.40 × 2 = $1224.80 a month".

**Attempt 2 (scene 9; pack question 2, 3 marks suggested).** "Ellie runs a mobile dog-washing business as a sole trader. She charges $45 per dog. In one week she washes 32 dogs and spends $186.50 on shampoo, water and fuel. (a) Calculate her earnings for the week. (b) With the same costs, how many dogs must she wash to earn at least $1200 in a week?"
Model answer: (a) 32 × 45 = $1440; 1440 − 186.50 = $1253.50. (b) 45n − 186.50 ≥ 1200, so n ≥ 1386.50 ÷ 45 = 30.8…; 31 dogs (30 dogs earn $1163.50; 31 earn $1208.50). Classic mistake (crossed): "30 dogs".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Youth Allowance | 677.20 × 26 = 17 607.20; ÷ 2 = 338.60; ÷ 12 (year) = 1467.27; ghost 1354.40 | 1, 2 |
| Window cleaner | 14 × 85 = 1190; − 230 = 960; × 52 = 49 920 | 1, 3, 4 |
| Target | 1430; 16.82…; 16 → 1130 (1360 in); 17 → 1215 (1445 in) | 5 |
| A1 | 15 922.40; 306.20; 1326.87; slip 1224.80 | 7, 8 |
| A2 | 1440; 1253.50; 1386.50; 30.8…; 31 → 1208.50; 30 → 1163.50 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, `python -I`; 0 failures); Codex to re-check.

Revision 2: every changed or newly shown value rechecked with SymPy in `work/brief-review-s11-e/resolve-check.py` (`python -I`; 117 checks, 0 failures); placeholder values are checked only as the arithmetic built on them.

- 677.20 × 26 = 17 607.20; 677.20 ÷ 2 = 338.60; 17 607.20 ÷ 12 = 1467.266… → 1467.27; 677.20 × 2 = 1354.40.
- 14 × 85 = 1190; 1190 − 230 = 960; 960 × 52 = 49 920.
- 1200 + 230 = 1430; 1430 ÷ 85 = 16.82…; 16 × 85 = 1360, − 230 = 1130; 17 × 85 = 1445, − 230 = 1215.
- 612.40 × 26 = 15 922.40; 612.40 ÷ 2 = 306.20; 15 922.40 ÷ 12 = 1326.866… → 1326.87; 612.40 × 2 = 1224.80.
- 32 × 45 = 1440; 1440 − 186.50 = 1253.50; 1386.50 ÷ 45 = 30.811…; 30 × 45 − 186.50 = 1163.50; 31 × 45 − 186.50 = 1208.50.
- Source: Youth Allowance $677.20 a fortnight from 1 January 2026 (Codex confirms on the Services Australia page; if it differs, scenes 1, 2 and 11's coded mark change, and the conversions are recalculated).

## Memory aid check

- **"Payments: through the year. Sole traders: money in minus costs."** with key line **"Fortnightly × 26 = year; year ÷ 12 = average month. Sole trader: no employer, so no paid leave or employer super."** Original. Meaning, as said in scene 6: a fixed payment behaves like a salary, and a business's earnings are what is left after its costs. Assumptions checked: the payment amount is fixed for the year (2; in reality it is indexed each January and depends on the income test, said once); costs are business costs, not personal spending (3); "earnings" means before tax (4 says tax is paid separately). It helps a new case: $500 a fortnight is $13,000 a year and $1,083.33 a month; a stall taking $900 with $250 costs earns $650. Introduced after scenes 2 to 5.
- **Considered, not used:** "In minus out" alone (drops the payment conversion).

## Narration length estimate

Revision 2, counted by `work/brief-review-s11-e/count.py` (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; it counts the joining spaces the author's parser left out): **4,948 characters** (Revision 1: 4,982 by the same parser, 4,971 by the author's), 12 scene headings. Characters per scene (1 to 12): 472, 882, 699, 535, 590, 227, 205, 301, 401, 342, 208, 75. Speech about 372 s; holds and settling unchanged from Revision 1 (below); total **about 456 s**, 114 s under the 570 s cap. Feedback speech: about 22.6 s and 25.7 s. The Revision 1 paragraphs below are kept for the record.

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, which reproduces e08's 5,632).

**4,971 characters**, 12 scene headings. Characters per scene (1 to 12): 472, 882, 670, 535, 590, 227, 205, 301, 401, 405, 208, 75.

At 13.3 characters per second the speech is about 374 s. Total with the holds and settling below **about 459 s**, 111 s under the 570 s cap; speech and holds before the notes about 414 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the payment strip folding (2), the ledger (3), the year strip (4) and the houses counter (5), about 20 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 2's last sentence (the ghost month and tag carry it); scene 5's "Round up, just like last time." (the tag carries it).

## Scene list and build ids

Lesson key `m-s11e04b` (route math-s11-e04, second half). Explainer folder `src/explainer/lessons/math-s11-e04b`; build inputs in `docs/production/claude-pm/lessons/math-s11-e04b/` (at voicing).

In order (12 scene headings): hook-government-or-yourself, payment-through-the-year, sole-trader-ledger, no-employer, worked-houses-target, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | e04a's frame: the calendar and the van |
| 30 to 100 s | 2 | g01 board: the payment strip folding into months |
| 100 to 155 s | 3 | The ledger |
| 155 to 185 s | 4 | The year strip and jars |
| 185 to 235 s | 5 | g01 board: the houses counter |
| 235 to 250 s | 6 | Framed memory card |
| 250 to 355 s | 7 to 10 | Question cards and countdowns, then feedback |
| 355 to 375 s | 11 | The suitcase, for e05 |
| 375 to 420 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e04a's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3 stage change; 3 to 4 stage change; 4 to 5 clear change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e04b-learning-review.md`, `science_check` = `checks/m-s11-e04b-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-wall-calendar-v1.png` (as e01); `ma11-trade-van-v1.png` (a white van with an extension ladder on the roof rack, blank sides, true alpha; reused for the window cleaner); `ma12-travel-suitcase-v1.png` (a teal hard-shell carry-on suitcase with its handle up, a straw hat on top and a blank cream luggage tag, true alpha; reused for e05's opening, so the kit-needs file's proposed `ms11-suitcase-v1.png` is not needed).

Need: none new. Reused: `ma12-wall-calendar-v1.png`, `ma11-trade-van-v1.png`, `ma12-travel-suitcase-v1.png`.

Coded: the payment marks and strip, the month boxes, the ledger, the year strip and jars, the houses counter, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `PlateFields`, `HandTag`, `CalendarDeposits`, `YearStrip`, `SignedBar`, `StepCounter`, `LiveReadoutBoard`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions: none new. The strip-to-months fold is a mode of `YearStrip` (26 fortnightly drops regrouped into 12 equal boxes). Check: 12 boxes of $1,467.27 against a ghost of $1,354.40.

## Codex asset brief

No new plate. The calendar, van and suitcase exist and were viewed. The payment marks, ledger, jars and boards are coded.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly (typographic apostrophe).
3. Confirm Youth Allowance's $677.20 a fortnight from 1 January 2026 on the Services Australia page, the "depends on your situation" chip, and that "the rates change every year" is said once.
4. Confirm super is never shown as a deduction (ruling 86) and no income test, ABN or GST detail appears.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on e04a's final frame and scene 11 matches the decisions file's e04b to e05 join.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Government Payments and Sole Trader Income | Year 11 Maths Standard

(Title length: 67 characters.)

Description: Notes and practice for the Earning money topic: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson03.sa.html

A student gets a government payment every fortnight, and a window cleaner works for themselves at $85 a house. Learn how to convert a fixed government payment into yearly, weekly and average monthly amounts (and why a month is not two fortnights), how a sole trader's earnings are the money from customers minus the business's costs, why sole traders have no paid leave or employer super, and how many jobs it takes to reach a target. This video covers the government payments and sole trader parts of the syllabus point. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Payment rates change every year and depend on your situation; the amounts here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Calculate an individual’s earnings from commission, sliding scale commission, piecework, royalties, government payments and as a sole trader"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: Piecework and Royalties. Next: Leave Loading.

#Year11Maths #MathsStandard #SoleTrader #HSCScience

## Open decisions

- **1. The income-test chip.** One grey chip ("amount depends on your situation (income test)") keeps the payment from looking universal; the test itself is not taught. Confirm.
- **2. Window cleaning in place of car detailing.** Same numbers as the pack; the van's ladder fits window cleaning. Confirm.
- **3. Description link.** No site lesson teaches this video's content; the link points to lesson03 (the closest Earning money lesson). Root may prefer the topic index page if one exists.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s11-e04b-learning-review.md`; ruling 96). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.
- Revision 1. Next: student learning review (trace from e04a for a student who has never had a government payment or run a business; check that folding the fortnights into months makes "not two fortnights" visible, that the ledger makes "money in minus costs" obvious, that the no-employer scene is short and clear, that "costs first" is explained before dividing, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
