# Maths S11 E10: How are the Medicare levy and net pay calculated? The levy as 2% of taxable income (never of the tax), net earnings for a year, net pay on a pay slip as gross minus every deduction, no second levy line, and employer super paid on top, never taken out (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced; waits for Codex brief 256, step 1 (the Medicare levy low-income threshold in force, and the NAT 1005 row at $1,338 that replaces the $276 placeholder) before voicing. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the i-strand resolution logs) and root's Standard rulings 1 to 87 (`../checks/root-rulings-maths-standard-outline.md`; ruling 85: the Medicare levy low-income threshold in force, not a proposed one, and "thresholds change" said once; ruling 86: super is the employer's contribution on top of pay, never a deduction, 12% from 1 July 2025; rulings 5 and 32). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,878 characters by script (see "Narration length estimate"; Revision 2), 12 scene headings, about 453 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s11-e10-learning-review.md` (summary `../checks/m-s11-e01-e12-learning-review-summary.md`), with root's rulings 84 to 96 in `../checks/root-rulings-maths-standard-outline.md` (ruling 96 accepts every finding as the review wrote it, including the optional ones, and fixes the repriced values). Numbers rechecked with SymPy: `work/brief-review-s11-e/resolve-check.py`. Findings by the review's numbers:

1. Should fix, scene 3 and key note 2 ("any other deductions"): **accepted**, reviewer's wording: "Net earnings are what's left of your income after tax and the Medicare levy. The chef has no allowable deductions, so her income and taxable income are the same." Key note 2: "Net earnings (year) = income − tax − levy." The same change is carried to the scene 3 task strip, the plain meaning of net earnings and A1 (Nadia "has no allowable deductions" in narration, card and model answer), so "deductions" is used only for pay-slip lines in scene 4, where the slip names each one.
2. Optional, scene 4 (how realistic is $276?): **accepted** as ruling 96 sets it: Rhys's withholding is tied to NAT 1005's row at $1,338 (salary sacrifice comes off before tax: 1433.25 − 95 = 1338.25). The $276 stays a placeholder until Codex reads that row in brief 256, step 1; total deductions and net pay follow it. The learner copy is unchanged (the amount is stated on the slip); the caveat stays in the author notes. Open decision 1 is closed.

Placeholders: the Medicare levy low-income threshold and Rhys's row wait for brief 256, step 1; no placeholder is voiced. Joins unchanged: scene 1 opens on e09's final frame; scene 11 is e11's opening.

Narration 4,878 characters by `work/brief-review-s11-e/count.py` (Revision 1: 4,892 by the same parser; 4,881 by the author's), about 453 s with holds, 117 s under the 570 s cap; feedback speech about 28.9 s and 24 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: eleventh video of the Year 11 Earning money strand, outline playlist order 25. One video for Standard 1 and Standard 2. Viewers arrive from e09's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-e10.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year11/earning-money/lesson08.sa.html` (SHA256 `2d5c712075eeee98f4fa6a78089dbe912fb78f0c8b11ca706e2188b435bf1ef5`; card 02, "Medicare levy = 2% of taxable income (not of income tax)"; `we-1`, Zara, $67,500 × 0.02 = $1,350.00) and `lesson06.sa.html` (SHA256 `210387123f041f906bf684f5ff2cea3e23085f3febc6da2120726f784279ff17`; card 02, "Net pay = Gross pay − Total deductions", "Employer super is paid IN ADDITION to gross pay"; `we-3`, Rhys, 38 hours at $31.50 + 5 hours at time-and-a-half, $1,433.25, deductions PAYG $398.00, salary sacrifice super $95.00, health insurance $42.80). Route entry: `math-s11-e10` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the stethoscope plate (briefed in e09) and the full coin jar (as the super fund) reused; the sliced bar, year bar, pay slip and return summary coded.

Owner rules applied: as e01 (2024 syllabus; plates for real objects, code for diagrams and documents; no people; one question; one stage at a time; words before symbols; plain meanings (Medicare, Medicare levy, net earnings, net pay, salary sacrifice, superannuation); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns (A1's card shows the 2026-27 table); brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a GP visit, the chef's year, a pay slip, a super fund); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; thresholds said once to change every year).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Taxation", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json`:

- `cieb8d7d73`: "Calculate the Medicare levy from taxable income"
- `ci87c8a7d9`: "Calculate net earnings after deductions, taxation and the Medicare levy"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from e09's final frame exactly (the weekly slip with "Tax withheld $156" and "Net pay $900.78" (both e09 placeholder-dependent); the stethoscope `ms11-stethoscope-v1.png`; the olive tag "Medicare levy: 2% of ?"; chips "2% of what?", "Next: the Medicare levy and net pay", "?"). Recalls e07 (taxable income), e08 (tax from the table; the chef's $10,770) and e09 (tax withheld allows for the levy) in a grey chip each. Teaches: Medicare and the levy in one sentence each; the levy as 2% of taxable income, not of the tax; low incomes pay a reduced levy or none (named once, threshold on screen only, no formula); net earnings for a year = income − tax − levy (and any other stated deductions); net pay on a pay slip = gross pay − total deductions (tax withheld, salary sacrifice, health insurance, union fees); the levy is not subtracted again on a slip, because the tax withheld already allows for it; employer super (12% of ordinary-time earnings) is paid on top into a super fund and never reduces net pay, while salary-sacrifice super is a voluntary deduction. Stops at net pay. Not taught: the refund or debt (e11); the Medicare levy surcharge (pack: out); the low-income shade-in formula (pack: out).

## Decisions

- **Anchor: the stethoscope and the pay slip (from e09's final frame).** The levy's "2% of what?" is answered on the chef's year first, then the pay slip. No people.
- **Levy and net earnings: the site's Zara, as e08's chef ($67,500).** Levy 0.02 × 67,500 = $1,350.00 (site value; no table dependence); the "2% of the tax" slip on the 2026-27 tax ($10,770 × 0.02 = $215.40; the site's own crossed example used 2024-25 figures, MS-73). Net earnings for the year: 67,500 − 10,770 − 1,350 = $55,380 (no deductions, so income and taxable income are the same, said).
- **Pay slip: the site's Rhys (`we-3`), with a realistic tax withheld (ruling 5).** Gross $1,197.00 + $236.25 = $1,433.25 (site). The site's PAYG of $398.00 is far above what the 2026-27 weekly table would withhold on $1,433 (about $276 by e09's method), so the slip shows $276.00 as a stated amount, labelled on screen "tax withheld (from the weekly table)", with salary sacrifice $95.00 and health insurance $42.80 (site): deductions $413.80; net $1,019.45. Revision 2 (ruling 96): salary sacrifice is taken before tax, so the withholding is worked on $1,338.25 (1,433.25 − 95). $276 is tied to NAT 1005's $1,338 row: Codex reads that row (brief 256, step 1) and $276 is replaced by it, with the total deductions and net pay following. Until then $276 is a placeholder and is not voiced. Learner copy is unchanged (the amount is stated on the slip); this caveat stays in author notes. Employer super 12% of ordinary-time earnings: 0.12 × 1,197 = $143.64 (overtime is not ordinary-time earnings), paid on top.
- **Low-income levy (ruling 85).** One sentence and one chip: "People on low incomes pay a reduced levy, or none, and those thresholds change each year." The chip shows the single low-income threshold **in force** (legislated), with its year, which Codex fills from the ATO page; the pack's $28,011 for 2026-27 was marked provisional (a Budget announcement) and is not used unless Codex confirms it is law. No shade-in formula.
- **Notation.** "levy = 2% × taxable income", "net earnings = income − tax − levy", "net pay = gross pay − total deductions", all in words.
- **Join.** Scene 1 opens on e09's final frame exactly; the olive tag answers itself in scene 2.
- **Simulations (standard item 3).**
  1. **The levy slice** (scene 2; `SlicedBar`): the chef's blue taxable income bar with its amber tax slices from e08; a thin olive slice, 2% of the whole bar, lifts from the bar (not from the tax); a ghost olive sliver taken from the tax slice ($215.40) is crossed.
  2. **Gross to net for a year** (scene 3; `StackedTotalBar`): the income bar; the tax block and levy block are removed from its top; the teal remainder is labelled "net earnings".
  3. **Pay slip, gross to net** (scene 4; `PaySlipCard`): deduction lines fill one at a time and each pulls a block off the gross bar beside the slip; a ghost "Medicare levy" line tries to appear and is crossed ("already in the tax withheld").
  4. **Super on top** (scene 5): an arrow from the employer's side, outside the slip, carries a teal block "$143.64" into the full coin jar labelled "super fund"; the net pay line does not move; a ghost subtraction from net pay is crossed.
- **Colour roles (fixed for e07 to e12).** Taxable income **blue**; tax **amber**; Medicare levy **olive**; deductions on a slip **violet** (tax withheld **brown**); gross pay **teal**; net pay **teal** framed when it is the answer; employer super **slate**, always drawn outside the slip; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Current working 52 px, rows 44 px, chips 30 to 40 px; nothing below 26 px; all text above y = 950. Hand tags: "Medicare: public health", "2% of taxable income", "not 2% of the tax", "income − tax − levy", "gross − every deduction", "no second levy line", "on top, not taken out", "ordinary hours only", "salary sacrifice: you choose". At most two live at once.
- **Stage changes (standard item 2).** The slip and stethoscope (1); the levy slice (2); the year bar to net (3); g01 board, Rhys's slip (4); super on top (5); framed card (6); question cards (7 to 10); the return summary for e11 (11); key notes (12).
- **Worked examples (g01 layout).** 3: task strip "The chef's taxable income for 2026-27 is $67 500 (no allowable deductions). Find the Medicare levy and her net earnings for the year."; formula strip "net earnings = income − tax − levy"; givens "income = $67 500" (blue), "tax from the table = $10 770" (amber); framed answers "levy $1350", "net earnings $55 380". 4: task strip "Rhys works 38 ordinary hours at $31.50 and 5 hours of overtime at time-and-a-half. Deductions: tax withheld $276, salary sacrifice super $95, health insurance $42.80. Find his net pay."; formula strip "net pay = gross pay − total deductions"; framed answer "$1019.45"; crossed slip "1019.45 − 143.64 = $875.81" (caption "employer super is paid on top").
- **Memory aid.** Framed card: "Levy: 2% of taxable income. Super: on top, not out." Key line: "Net earnings = income − tax − levy. Net pay = gross pay − total deductions."
- **Visual surprise.** The super block goes into the fund while the net pay line stays still (scene 5).
- **Site notes (pack section 8; section 11).** MS-71 and MS-72: super never appears as a deduction, and only 12% is used. MS-73: the 2024-25 tax in the site's crossed example is replaced by the 2026-27 tax. Rhys's PAYG ($398) is replaced by a realistic stated amount (open decision 1).
- **Plain meanings at first use.** Medicare ("Australia's public health system: bulk-billed doctor visits and public hospitals"); Medicare levy ("an extra 2% of taxable income that helps pay for it"); net earnings ("what's left of a year's income after tax and the levy"; Revision 2: "deductions" is kept for pay-slip lines, which the slip names one by one); net pay (recalled from e09); salary sacrifice ("extra super you choose to have taken from your pay"); superannuation ("money saved for your retirement; your employer must pay into it").
- **Attempts.** A1 (pack question 1): Nadia, $62,500 taxable, no deductions: levy $1,250; tax 4,020 + 0.30 × 17,500 = $9,270; net $51,980; crossed "2% × $9270 = $185.40" (caption "2% of taxable income"). A2 (pack question 2, with a realistic stated tax withheld of $229 in place of the pack's $214, and "all for ordinary hours" so 12% of gross is the SG): gross $1,284.50; deductions $229 + $9.80 + $50 = $288.80; net $995.70; super 0.12 × 1,284.50 = $154.14, paid on top; crossed "995.70 − 154.14 = $841.56" (caption "super is paid on top, not taken out").
- **Mistake scene:** none separate. 2% of the tax (2, crossed; A1 crossed); the levy on gross instead of taxable income (2, said by the label); employer super subtracted (5, crossed; A2 crossed); the levy subtracted twice on a slip (4, crossed ghost); a deduction missed (4, the slip's line-by-line fill).
- **Cause chain taught, in order:** (1) the levy pays for Medicare and is charged on income, so it is 2% of taxable income, not of the tax (2); (2) the year's net earnings are what is left after both are taken from the income (3); (3) a pay slip does the same each week, taking every deduction from gross pay (4); (4) the tax withheld already allows for the levy, so the slip has no second levy line (4); (5) employer super is the employer's own money paid into a fund, so it never comes out of pay; salary sacrifice is the worker's choice, so it does (5).
- **Entry knowledge (route):** math-s11-e07 (taxable income), e08 (tax from the table), e09 (tax withheld, net pay). Recalled in a grey chip each.
- **Money sources (rulings 5, 32, 85 and 86).** Medicare levy 2% of taxable income (ATO, "Medicare levy"; Codex confirms). Single low-income threshold: the legislated figure in force for 2026-27, or the latest legislated figure with its year (ATO, "Medicare levy reduction for low-income earners", https://www.ato.gov.au/individuals-and-families/medicare-and-private-health-insurance/medicare-levy/medicare-levy-reduction/medicare-levy-reduction-for-low-income-earners; the pack read $28,011 there marked provisional; Codex fills the chip). Superannuation guarantee 12% of ordinary-time earnings from 1 July 2025 (ATO, "How much super to pay", https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/how-much-super-to-pay; Codex confirms). 2026-27 tax table as e08. Said once (scene 2): "those thresholds change each year."
- **Handoff (to math-s11-e11, "After a tax return, do we get a refund or owe more tax?").** Scene 11, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: a coded, unbranded `ReturnSummary` (1,000 × 420 px) headed "Tax return summary 2026-27" with two lines, "Tax withheld during the year" (brown) and "Tax and Medicare levy owed" (amber and olive), both values blank; a small coded balance under them, level; chips "refund or bill?", "Next: tax returns" and "?". No values. This is e11's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Chef: 0.02 × 67 500 = 1350; ghost 0.02 × 10 770 = 215.40; 10 770 + 1350 = 12 120; 67 500 − 12 120 = 55 380.
  (b) Rhys: 31.50 × 38 = 1197.00; 31.50 × 1.5 × 5 = 236.25; gross 1433.25; 276 + 95 + 42.80 = 413.80; net 1019.45; super 0.12 × 1197 = 143.64; slip 1019.45 − 143.64 = 875.81. Revision 2: the $276 is a placeholder for NAT 1005's $1,338 row (gross after salary sacrifice, 1433.25 − 95 = 1338.25); total deductions = row + 95 + 42.80 and net = 1433.25 − total follow it.
  (c) A1: 0.02 × 62 500 = 1250; 4020 + 0.30 × 17 500 = 9270; 62 500 − 9270 − 1250 = 51 980; slip 185.40.
  (d) A2: 229 + 9.80 + 50 = 288.80; 1284.50 − 288.80 = 995.70; 0.12 × 1284.50 = 154.14; slip 841.56. The $229 is e09's method at $1,284 (228.57), a stated value.
  (e) Pronunciations: "one thousand three hundred and fifty dollars"; "fifty-five thousand three hundred and eighty dollars"; "one thousand and nineteen dollars forty-five"; "a hundred and forty-three dollars sixty-four".

Main question: *The tax tables allow for a Medicare levy of 2%. Two per cent of what, and what's left? How are the Medicare levy and net pay calculated?*
Entry knowledge (math-s11-e07, e08, e09): taxable income; tax from the table; tax withheld.
Stops after: the levy, net earnings for a year, net pay on a slip, super on top. No refund.
Handoff: math-s11-e11: "refund or bill?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): taxable income blue; tax amber; levy olive; deductions violet; tax withheld brown; gross and net pay teal; employer super slate; answer green; mistake red. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: two per cent of what?
> Last time ended with this pay slip, and a stethoscope. The tax tables quietly allow for the Medicare levy. Medicare is Australia's public health system. It pays for things like bulk-billed doctor visits and public hospitals. The Medicare levy is an extra charge that helps pay for it. It's two per cent, but two per cent of **what**? And once tax and the levy are taken out, what's left? So how are the Medicare levy and net pay **calculated**?

Visual: opens on e09's final frame exactly (the slip, the stethoscope, the olive tag "Medicare levy: 2% of ?", chips). On the first sentence the "Next" chip fades. On "public health system" chip "Medicare: public health (doctor visits, public hospitals)", hand tag "Medicare: public health". On "Medicare levy is an extra charge" the olive tag pulses. On "what" two grey candidate chips "2% of the tax?" and "2% of the income?" appear under the tag. On "what's left" the slip's net pay line rings. On "calculated" heading "The Medicare levy and net pay" writes on; the question chip "2% of what? What's left?" moves to the top right.

### 2. the levy: 2% of taxable income
> The Medicare levy is two per cent of your taxable income, not two per cent of your tax. Take the chef from before, with a taxable income of sixty-seven thousand five hundred dollars. Two per cent is zero point zero two, so the levy is zero point zero two times sixty-seven thousand five hundred, one thousand three hundred and fifty **dollars**. Two per cent of her tax, ten thousand seven hundred and seventy, would be only two hundred and fifteen dollars forty. That's the **slip**. The levy comes from the income, not from the tax. People on low incomes pay a reduced levy, or none, and those thresholds change each **year**.

Visual: stage change (simulation 1): e08's sliced bar for $67,500 (blue, 1,500 × 110 px) with its tax slices (grey, light amber, mid amber) and "tax from the table: $10 770" beneath, grey chip "e08: the chef's tax". On "two per cent of your taxable income" the "2% of the income?" chip turns olive, the other greys, hand tag "2% of taxable income". On "zero point zero two times" a thin olive slice the full length of the bar lifts from its top (2% of its height, drawn at least 40 px with a "×10 zoom" tag); on "dollars" row, 52 px: "levy = 0.02 × 67 500 = $1350" (framed green). On "two hundred and fifteen dollars forty" a tiny olive sliver lifts from the tax slices only, "0.02 × 10 770 = $215.40"; on "slip" it is crossed in red (caption "2% of taxable income, not of the tax"), hand tag "not 2% of the tax". On "low incomes" a grey chip, 32 px: "low incomes: reduced levy or none (single threshold in force: [Codex fills from the ATO, with its year])". On "year" hand tag "thresholds change each year".

### 3. net earnings for a year
> Now the whole year. Net earnings are what's left of your income after tax and the Medicare levy. The chef has no allowable deductions, so her income and taxable income are the same. Her tax from the table is ten thousand seven hundred and seventy dollars, and the levy is one thousand three hundred and fifty. Together that's twelve thousand one hundred and twenty **dollars**. Take it off the income. Sixty-seven thousand five hundred minus twelve thousand one hundred and twenty leaves fifty-five thousand three hundred and eighty **dollars**. That's what the chef keeps for the **year**.

Visual: clear change to the g01 board. Task strip, 40 px: "The chef's taxable income for 2026-27 is $67 500 (no allowable deductions). Find the Medicare levy and her net earnings for the year." Formula strip, 52 px: "net earnings = income − tax − levy". Givens card, 44 px: "income = $67 500" (blue), "tax from the table = $10 770" (amber), "levy = $1350" (olive). Simulation 2 at the right: a tall income bar; on "dollars" (first) an amber block "$10 770" and an olive block "$1350" join on its top, row "10 770 + 1350 = $12 120", hand tag "income − tax − levy". On "Take it off the income" the two blocks lift away. On "dollars" (second) the teal remainder is labelled "net earnings"; row "67 500 − 12 120 = $55 380" (framed green). On "year" the teal remainder rings.

### 4. net pay on a pay slip
> On a pay slip, it's the same idea, week by week. Net pay is gross pay minus all the deductions. Rhys works thirty-eight ordinary hours at thirty-one dollars fifty, plus five hours of overtime at time and a half. Gross pay comes to one thousand four hundred and thirty-three dollars twenty-five, this **week**. The deductions are tax withheld, two hundred and seventy-six dollars, salary sacrifice super, ninety-five dollars, and health insurance, forty-two eighty. Salary sacrifice is extra super Rhys chooses to have taken from his pay. Add the deductions, four hundred and thirteen dollars **eighty**. Net pay is one thousand four hundred and thirty-three twenty-five minus four hundred and thirteen eighty, one thousand and nineteen dollars forty-five, into his **account**. Notice there's no separate levy line. The tax withheld already allows for it, so don't take it off **twice**.

Visual: clear change to the g01 board with a `PaySlipCard` (800 × 640 px) at the left (simulation 3) and a teal gross bar at the right. Task strip, 40 px: "Rhys works 38 ordinary hours at $31.50 and 5 hours of overtime at time-and-a-half. Deductions: tax withheld $276, salary sacrifice super $95, health insurance $42.80. Find his net pay." (site `we-3`, tax withheld updated). Slip lines fill: "Ordinary 38 h × $31.50 = $1197.00", "Overtime 5 h × $47.25 = $236.25"; on "week" "Gross pay $1433.25" (teal). On "tax withheld" "Tax withheld (weekly table) $276.00" (brown), a brown block leaves the gross bar. On "salary sacrifice super" "Salary sacrifice super $95.00" (violet), block leaves; chip "salary sacrifice: you choose". On "health insurance" "Health insurance $42.80" (violet), block leaves. On "eighty" "Total deductions $413.80". On "account" "Net pay = 1433.25 − 413.80 = $1019.45" (framed green), hand tag "gross − every deduction". On "no separate levy line" a grey ghost line "Medicare levy 2% …" tries to write and is crossed in red; on "twice" hand tag "no second levy line", chip "e09: the tax withheld allows for the levy".

### 5. super: on top, not taken out
> Here's one thing that's not a deduction. Superannuation, or super, is money saved for your retirement. By law, Rhys's employer pays twelve per cent of his ordinary-time earnings into his super fund. That's twelve per cent of one thousand one hundred and ninety-seven, a hundred and forty-three dollars sixty-four, each **week**. But it's paid on top of his pay, straight into the fund. It never comes out of his net pay. Only extra super he chooses, like salary sacrifice, is a **deduction**.

Visual: stage change (simulation 4): the slip (600 px) at the left with its net line "Net pay $1019.45" held; at the right the full coin jar `ma12-coin-jar-full-v1.png` (420 px) with a coded label "super fund". On "ordinary-time earnings" the slip's ordinary line (only) rings, hand tag "ordinary hours only"; the overtime line greys. On "week" a slate block "0.12 × 1197 = $143.64" appears outside the slip, labelled "employer super (12%)". On "on top of his pay" the block travels along an arrow from outside the slip into the jar, hand tag "on top, not taken out"; the net pay line does not move. On "never comes out of his net pay" a red slip "1019.45 − 143.64 = $875.81" writes beside the net line and is crossed (caption "employer super is paid on top"). On "deduction" the salary sacrifice line on the slip rings violet, chip "salary sacrifice: a deduction (your choice)". Grey chip, 32 px: "super guarantee 12% from 1 July 2025 (ATO)".

### 6. memory aid
> Here's the summary. The Medicare levy is two per cent of taxable income, never of the tax. Net pay is gross pay minus every deduction. And employer super is paid on top, not taken **out**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the income bar with its olive 2% slice lifting from the whole bar, and the slate super block going into the jar beside an untouched net line. Main line, hand font 56 px: "Levy: 2% of taxable income. Super: on top, not out." On "out" the key line, 40 px: "Net earnings = income − tax − levy. Net pay = gross pay − total deductions." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Nadia's taxable income is sixty-two thousand five hundred dollars, and she has no allowable deductions. Calculate her Medicare levy, her income tax from the table, and her net earnings for the year. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "In 2026-27 Nadia's taxable income is $62 500 and she has no allowable deductions. (a) Calculate her Medicare levy. (b) Calculate her income tax from the table. (c) Calculate her net earnings for the year." Beside it the 2026-27 resident tax table (34 px, as in e08). The full question and table stay on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> The levy is two per cent of sixty-two thousand five hundred, one thousand two hundred and fifty **dollars**. The tax is four thousand and twenty, plus thirty cents on seventeen thousand five hundred, nine thousand two hundred and **seventy**. Net earnings are sixty-two thousand five hundred, minus both, fifty-one thousand nine hundred and eighty **dollars**. Two per cent of the tax is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "dollars" (first) "0.02 × 62 500 = $1250" (framed green); on "seventy" "4020 + 0.30 × 17 500 = $9270" (framed green); on "dollars" (second) "62 500 − 9270 − 1250 = $51 980" (framed green). On "slip" a red slip "2% × $9270 = $185.40" writes and is crossed (caption "2% of taxable income"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A pay slip shows weekly gross pay of one thousand two hundred and eighty-four dollars fifty, all for ordinary hours. The deductions are tax withheld, two hundred and twenty-nine dollars, union fees, nine dollars eighty, and salary sacrifice super, fifty dollars. The employer also pays super of twelve per cent of gross pay. Calculate the net pay, and the employer's super contribution. Does the super change the net pay? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A pay slip shows weekly gross pay of $1284.50, all for ordinary hours. Deductions are tax withheld $229.00, union fees $9.80 and salary-sacrifice super $50.00. The employer also pays superannuation guarantee of 12% of gross pay. (a) Calculate the net pay. (b) Calculate the employer's super contribution. Does it change the net pay?" Picture slot: a blank `PaySlipCard` beside the full coin jar (220 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> The deductions add to two hundred and eighty-eight dollars **eighty**. Net pay is nine hundred and ninety-five dollars **seventy**. The employer's super is twelve per cent of the gross, a hundred and fifty-four dollars fourteen, and it doesn't change the net pay. It's paid on **top**. Taking the super off the net pay is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "eighty" "229 + 9.80 + 50 = $288.80"; on "seventy" "1284.50 − 288.80 = $995.70" (framed green). On "a hundred and fifty-four dollars fourteen" "0.12 × 1284.50 = $154.14" (slate), the block travelling into the jar; on "top" framed (green) "no: paid on top". On "slip" a red slip "995.70 − 154.14 = $841.56" writes and is crossed (caption "super is paid on top, not taken out"). Hold about 1 s.

### 11. handoff
> So now you can find a year's tax and levy, and you know how much is withheld from every pay. They're rarely exactly the same. After the thirtieth of June, a tax return compares them. Will you get money back, or get a **bill**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "a year's tax and levy" the line "Tax and Medicare levy owed" (amber and olive) of the `ReturnSummary` "Tax return summary 2026-27"; on "withheld from every pay" its line "Tax withheld during the year" (brown); both values blank. On "compares them" a small level balance under the two lines. On "bill" chip "refund or bill?". On "next" chips "Next: tax returns" and "?". Hold about 2 s. No values. This is e11's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Medicare levy = 2% × taxable income (not 2% of the tax).
- Net earnings (year) = income − tax − levy.
- Net pay (slip) = gross pay − total deductions.
- The tax withheld already allows for the levy: no second levy line.
- Employer super (12%) is paid on top; only salary sacrifice comes out.

Memory aid (framed card, right side, as in scene 6): *Levy: 2% of taxable income. Super: on top, not out.* Key: *Net earnings = income − tax − levy. Net pay = gross pay − total deductions.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and e11's opening frame.

## Teaching checks

- **Does it explain causes?** Why 2% of taxable income: the levy is charged on income, like tax (2). Why net earnings subtract both: both are paid out of the income (3). Why no levy line on a slip: the tax withheld already allows for it (4). Why employer super does not reduce net pay: it is the employer's money, paid on top (5). Why salary sacrifice does: the worker chooses to have it taken from pay (4, 5).
- **Misconceptions addressed:** 2% of the tax (2, crossed; A1 crossed); the levy on gross income (2); employer super subtracted (5, crossed; A2 crossed); the levy subtracted twice (4, crossed ghost); a deduction missed (4).
- **Visual standard, item by item:** 1 the stethoscope and the slip from the first frame, the super jar in 5; 2 a new stage every 40 to 60 s; 3 the olive slice lifting from the whole bar, blocks lifting off the year bar, deductions pulling blocks off the gross bar, the super block travelling into the jar; 4 fixed roles (levy olive, tax amber, deductions violet, super slate outside the slip); 5 large type; 6 hand tags; 7 g01 boards in 3 and 4 with framed answers and crossed slips; 8 framed card and five bullets; 9 the net line staying still as super goes into the fund.
- **One idea at a time:** the levy (2), net earnings (3), net pay (4), super (5).
- **Response opportunity:** two unseen tasks with every demand visible (A1 with the table); 10 s each; feedback about 27 s and 22 s.
- **Avoided double teaching:** e07's taxable income, e08's table and e09's slip recalled; the return left to e11.
- **Syllabus coverage:** `cieb8d7d73` (2, 3, A1; key note 1); `ci87c8a7d9` (3, 4, 5, A1, A2; key notes 2 to 5).
- **Out of scope by design:** the Medicare levy surcharge; the low-income shade-in formula; refunds (e11).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme; the card shows the 2026-27 table).** "In 2026-27 Nadia's taxable income is $62 500 and she has no allowable deductions. (a) Calculate her Medicare levy. (b) Calculate her income tax from the table. (c) Calculate her net earnings for the year."
Model answer: (a) 0.02 × 62 500 = $1250. (b) 4020 + 0.30 × 17 500 = $9270. (c) 62 500 − 9270 − 1250 = $51 980. Classic mistake (crossed): "2% × $9270 = $185.40".

**Attempt 2 (scene 9; pack question 2 with tax withheld $229.00, 3 marks suggested).** "A pay slip shows weekly gross pay of $1284.50, all for ordinary hours. Deductions are tax withheld $229.00, union fees $9.80 and salary-sacrifice super $50.00. The employer also pays superannuation guarantee of 12% of gross pay. (a) Calculate the net pay. (b) Calculate the employer's super contribution. Does it change the net pay?"
Model answer: (a) 229.00 + 9.80 + 50.00 = $288.80; 1284.50 − 288.80 = $995.70. (b) 0.12 × 1284.50 = $154.14; no, it is paid on top into the super fund. Classic mistake (crossed): "995.70 − 154.14 = $841.56".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Chef | levy 0.02 × 67 500 = 1350; ghost 215.40; 10 770 + 1350 = 12 120; net 55 380 | 2, 3 |
| Low-income threshold | in force, from the ATO (Codex fills; no calculation) | 2 |
| Rhys | 1197.00 + 236.25 = 1433.25; 276 + 95 + 42.80 = 413.80; net 1019.45; super 143.64; slip 875.81 | 4, 5 |
| A1 | 1250; 9270; 51 980; slip 185.40 | 7, 8 |
| A2 | 288.80; 995.70; 154.14; slip 841.56 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, `python -I`; 0 failures); Codex to re-check.

Revision 2: every changed or newly shown value rechecked with SymPy in `work/brief-review-s11-e/resolve-check.py` (`python -I`; 117 checks, 0 failures); placeholder values are checked only as the arithmetic built on them.

- 0.02 × 67 500 = 1350.00; 0.02 × 10 770 = 215.40; 10 770 + 1350 = 12 120; 67 500 − 12 120 = 55 380.
- 31.50 × 38 = 1197.00; 31.50 × 1.5 = 47.25; × 5 = 236.25; 1197.00 + 236.25 = 1433.25; 276 + 95 + 42.80 = 413.80; 1433.25 − 413.80 = 1019.45; 0.12 × 1197 = 143.64; 1019.45 − 143.64 = 875.81.
- 0.02 × 62 500 = 1250; 4020 + 0.30 × 17 500 = 9270; 62 500 − 9270 − 1250 = 51 980; 0.02 × 9270 = 185.40.
- 229 + 9.80 + 50 = 288.80; 1284.50 − 288.80 = 995.70; 0.12 × 1284.50 = 154.14; 995.70 − 154.14 = 841.56.
- Stated amounts to check for realism against NAT 1005 (not placeholders: a question may state any withheld amount, but these should be within a few dollars of the 2026-27 rows): $276 for Rhys, read at the $1,338 row (gross $1,433.25 after $95 salary sacrifice, ruling 96; placeholder until brief 256, step 1); $229 for $1,284 a week. If either differs by more than a few dollars, use the ATO row and recompute the net pay.
- To fill: the single Medicare levy low-income threshold in force (legislated), with its year.
- Sources: levy 2%; super guarantee 12% of ordinary-time earnings from 1 July 2025.

## Memory aid check

- **"Levy: 2% of taxable income. Super: on top, not out."** with key line **"Net earnings = income − tax − levy. Net pay = gross pay − total deductions."** Original (the site's card 02 has "2% of taxable income (not of income tax)" and "Employer super is paid IN ADDITION to gross pay"). Meaning, as said in scene 6: the levy comes from the income, and the employer's super never comes from the pay. Assumptions checked: the person pays the full levy (low incomes pay less or none, said once, 2); "net earnings" for a year uses the year's tax and levy (3); on a slip the tax withheld already allows for the levy (4); "super" on the card means the employer's guarantee, while salary sacrifice is a deduction (5). It helps a new case: $50,000 taxable gives a $1,000 levy, and a $1,000 weekly gross with $150 withheld and 12% employer super gives net $850, with $120 going to the fund on top. Introduced after scenes 2 to 5.
- **Considered, not used:** "Two per cent of income" alone (drops super).

## Narration length estimate

Revision 2, counted by `work/brief-review-s11-e/count.py` (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; it counts the joining spaces the author's parser left out): **4,878 characters** (Revision 1: 4,892 by the same parser, 4,881 by the author's), 12 scene headings. Characters per scene (1 to 12): 436, 616, 578, 871, 484, 184, 231, 385, 453, 319, 235, 75. Speech about 367 s; holds and settling unchanged from Revision 1 (below); total **about 453 s**, 117 s under the 570 s cap. Feedback speech: about 28.9 s and 24 s. The Revision 1 paragraphs below are kept for the record.

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, which reproduces e08's 5,632).

**4,881 characters**, 12 scene headings. Characters per scene (1 to 12): 436, 616, 596, 871, 484, 184, 227, 385, 453, 319, 235, 75.

At 13.3 characters per second the speech is about 367 s. Total with the holds and settling below **about 454 s**, 116 s under the 570 s cap; speech and holds before the notes about 409 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the levy slice (2), the year bar (3), the slip and gross bar (4) and the super block (5), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 1's "It pays for things like bulk-billed doctor visits and public hospitals." (the chip carries it); scene 3's "That's what the chef keeps for the year." (move the cue to the second "dollars").

## Scene list and build ids

Lesson key `m-s11e10` (route math-s11-e10). Explainer folder `src/explainer/lessons/math-s11-e10`; build inputs in `docs/production/claude-pm/lessons/math-s11-e10/` (at voicing).

In order (12 scene headings): hook-two-per-cent-of-what, levy-taxable-income, net-earnings-year, net-pay-slip, super-on-top, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | e09's frame: the slip and the stethoscope |
| 35 to 90 s | 2 | The levy slice |
| 90 to 140 s | 3 | g01 board: the year to net |
| 140 to 215 s | 4 | g01 board: Rhys's slip |
| 215 to 255 s | 5 | Super on top |
| 255 to 270 s | 6 | Framed memory card |
| 270 to 380 s | 7 to 10 | Question cards and countdowns, then feedback |
| 380 to 400 s | 11 | The return summary, for e11 |
| 400 to 445 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e09's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 clear change; 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e10-learning-review.md`, `science_check` = `checks/m-s11-e10-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-coin-jar-full-v1.png` (the same glass jar as `ma12-coin-jar-v1.png`, filled to the shoulder with gold and silver coins, true alpha; reused as the super fund, kept distinct from e09's half-empty "paid to the ATO" jar); `ma12-super-statement-v1.png` (an envelope and a blank statement with a blue band; not used, so e10's super stays a small side element and does not repeat Year 12 i23's statement, as the pack advises). The stethoscope is briefed in e09.

Need: none new. Reused: `ms11-stethoscope-v1.png` (e09's brief), `ma12-coin-jar-full-v1.png`.

Coded: the sliced bar and levy slice, the year bar, the pay slip, the super block and arrow, the return summary, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `PlateFields`, `HandTag`, `SlicedBar` (e03), `StackedTotalBar`, `PaySlipCard` (e02), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions: none new (the kit-needs file lists none for e10). `PaySlipCard` needs its "employer super outside the slip" lane (already in its e02 spec) and a ghost line that can be crossed. `ReturnSummary` (e11's part) appears blank on the final frame. Check: the levy slice is drawn at least 40 px tall with a zoom tag (2% of a 110 px bar is 2 px).

## Codex asset brief

No new plate. The stethoscope is briefed in e09; the full coin jar exists and was viewed. Bars, slips and the return summary are coded.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly.
3. Confirm the levy (2%), the single low-income threshold **in force** (fill the chip; do not use a proposed figure) and the super guarantee (12% of ordinary-time earnings from 1 July 2025), and that "those thresholds change each year" is said once.
4. Confirm super is never subtracted from pay except in the crossed slips, and salary sacrifice is the only super deduction (rulings 86, MS-71, MS-72).
5. Read NAT 1005 at $1,338 for Rhys (gross after salary sacrifice; it replaces the $276 placeholder, ruling 96) and check $229 at $1,284 for realism, and that both attempts carry every demand and show no answer.
6. Confirm scene 1 opens on e09's final frame and scene 11 matches the decisions file's e10 to e11 join (no values).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: The Medicare Levy and Net Pay | Year 11 Maths Standard

(Title length: 54 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson06.sa.html

The Medicare levy is 2%, but 2% of what? Learn why the levy is 2% of taxable income and never 2% of the tax, how to find net earnings for a year after tax and the levy, and how a pay slip turns gross pay into net pay by taking off every deduction. See why there is no separate levy line on a pay slip, and why the employer's 12% super is paid on top of your pay and never taken out of it. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Tax rates and levy thresholds change every year; this video uses 2026-27 figures.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Calculate the Medicare levy from taxable income"
"Calculate net earnings after deductions, taxation and the Medicare levy"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: PAYG Withholding and Tax Tables. Next: Tax Returns: Refund or Tax Debt?

#Year11Maths #MathsStandard #MedicareLevy #HSCScience

## Open decisions

- **1. Rhys's tax withheld.** Closed by ruling 96 (Revision 2): $276 is tied to NAT 1005's $1,338 row (salary sacrifice comes off before tax), read by Codex in brief 256, step 1; the net pay follows the copied row. Revision 1 text: the site's $398 is replaced by $276 (realistic for $1,433 a week in 2026-27, by e09's method), stated on the slip; Codex checks it against NAT 1005. Root may prefer to keep the site's $398 labelled "as given" (net pay $897.45, the site's answer); the design does not, because a student comparing a real slip would be misled (ruling 5).
- **2. The low-income threshold chip** shows only the figure in force with its year (ruling 85); the narration states no number.
- **3. A2's "all for ordinary hours".** Added so that "12% of gross pay" is the superannuation guarantee on ordinary-time earnings. Confirm.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s11-e10-learning-review.md`; ruling 96). Next: Codex maths check and error check, after brief 256, step 1 fills the placeholders, then voicing on the Google voice and a build to grade A.
- Revision 1. Next: student learning review (trace from e09; check that the olive slice lifting from the whole bar makes "2% of taxable income" obvious, that net earnings and net pay are kept apart, that "no second levy line" is clear, that super going into the fund while net pay stays still lands, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
