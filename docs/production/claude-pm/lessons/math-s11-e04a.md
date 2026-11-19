# Maths S11 E04a: How are piecework and royalties worked out? Pay per item, the items needed to match a wage (divide, then round up), the farm minimum for pieceworkers, and a royalty as rate × price × copies sold (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the i-strand resolution logs) and root's Standard rulings 1 to 87 (`../checks/root-rulings-maths-standard-outline.md`; ruling 84 splits the outline's e04 into e04a, piecework and royalties, and e04b, government payments and sole-trader income; rulings 5, 32 and 85 apply). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,912 characters by script (see "Narration length estimate"; Revision 2), 12 scene headings, about 453 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s11-e04a-learning-review.md` (summary `../checks/m-s11-e01-e12-learning-review-summary.md`), with root's rulings 84 to 96 in `../checks/root-rulings-maths-standard-outline.md` (ruling 96 accepts every finding as the review wrote it, including the optional ones, and fixes the repriced values). Numbers rechecked with SymPy: `work/brief-review-s11-e/resolve-check.py`. Findings by the review's numbers:

1. Optional, scene 4 (the "≈ $3.00 a copy" label invited the shortcut scene 5 forbids): **accepted**: the label reads "0.1 × 29.99 = $2.999 a copy (just under $3)"; simulation 3 and kit addition 1 match. The narration's "just under three dollars" is unchanged.

Joins unchanged: scene 1 opens on e03's final frame; scene 11 is e04b's opening. Practice cards, feedback and key notes unchanged.

Narration 4,912 characters by `work/brief-review-s11-e/count.py` (Revision 1: 4,912 by the same parser; 4,901 by the author's), about 453 s with holds, 117 s under the 570 s cap; feedback speech about 25 s and 27.2 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: fourth video of the Year 11 Earning money strand, outline playlist order 19 (shared with e04b, ruling 84). One video for Standard 1 and Standard 2. The syllabus point is shared with e03 (commission) and e04b (government payments, sole traders) and is quoted in full. Viewers arrive from e03's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-e04.md` (the "e04a" half of its suggested split). Site lessons (read through the pack's quotations, read only): `maths-standard/year11/earning-money/lesson03.sa.html` (SHA256 `4bff2698118bd1e4657f6f5cf02f51557282e4959a29a1249fd1b481a6392aa4`; `we-4`, "$2.35 per crate of strawberries ... 186 crates", $437.10; the revisit's "Piecework rewards speed but can disadvantage workers during machinery breakdowns or poor harvests"; the key term "royalty: Payment to the owner of intellectual property based on sales or usage") and `lesson05.sa.html` (SHA256 `b254ea601d328e73a60f6b12e60e4218df2bcfb2fbe7afdf5df4cb7577de32c2`; `we-3`'s piecework break-even, $2.75 per component, "274 components" at the site's $19.80, repriced here). Route entry: `math-s11-e04` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the strawberry crate plate (briefed in e03), the book stack and swing tag reused; the counter, target line, price slice and boards coded.

Owner rules applied: as e01 (2024 syllabus; plates for real objects, code for diagrams and documents; no people; one question; one stage at a time; words before symbols; plain meanings (piecework, royalty, award); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (strawberry picking, a workshop, a first novel, blueberries); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; rates said once to change every year).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Ways of earning", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json` (typographic apostrophe as in the source):

- `ci85c34acf`: "Calculate an individual’s earnings from commission, sliding scale commission, piecework, royalties, government payments and as a sole trader"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from e03's final frame exactly (the crate plate `ms11-strawberry-crate-scale-v1.png` with the tag "$2.35 a crate" and the counter "crates: 0"; chips "paid per item", "Next: piecework and royalties", "?"). Recalls e01 (weekly pay = rate × hours) and Stage 5 (a percentage as a decimal; rounding) in a phrase or grey chip. Teaches: piecework as pay per item, pay = items × rate per item; an average hourly figure from a shift; the farm floor (the Horticulture Award guarantees pieceworkers at least the minimum hourly rate for hours worked, from 28 April 2022); the items needed to match a wage or reach a target (divide, then round up, checking one less); a royalty as a percentage of the price of each copy sold, so royalty = rate × price × copies sold, worked in one go; copies sold, not printed. Stops at piecework and royalties. Not taught: government payments and sole-trader earnings (e04b); leave loading (e05).

## Decisions

- **Anchor: strawberry picking (painted plate, briefed in e03).** The site's `we-4` (186 crates at $2.35, $437.10) on the crate plate, with a crate counter. A common holiday and gap-year job. No people.
- **Matching a wage: the site's lesson05 `we-3`, repriced (ruling 85).** The site's Option A ($19.80 an hour) is below the 2026-27 minimum; it becomes $27.81 an hour for 38 hours ($1,056.78; the 2026-27 retail Level 1 rate, used as a given number), with the site's $2.75 per component kept: 384.28…, so 385 parts (384 pay $1,056.00, 78 cents short; 385 pay $1,058.75). The method (divide, round up, check one less) is the site's.
- **Royalties: original, labelled example (no site teaching; ruling 3).** A first novel at $29.99 with a 10% royalty (just under $3 a copy); 3,000 printed and 2,400 sold: 0.1 × 29.99 × 2,400 = $7,197.60. Plates reused: `ma11-book-stack-v1.png` (the novel) and `ma12-swing-tag-v1.png` (the price tag the slice is lifted from).
- **Notation.** "pay = items × rate per item" and "royalty = rate × price × copies sold" in words; no letters.
- **Join.** Scene 1 opens on e03's final frame exactly; the counter starts on scene 2's "Watch the counter".
- **Simulations (standard item 3).**
  1. **Crate counter** (scene 2; `StepCounter` with `LiveReadoutBoard`): crates stack beside the plate as the counter runs 0 → 186, the pay readout rising $2.35 a crate to $437.10.
  2. **Target line** (scene 3; `TargetDial` or a readout with a target line): the parts counter runs up to 383, 384 (readout $1,056.00, just under the green target line $1,056.78, gap "78c short"), then 385 tips over ($1,058.75).
  3. **Royalty slice** (scene 4; new `RoyaltySlice`, a `PlateFields` overlay on the swing tag): the tag "$29.99" splits into a thin teal 10% slice ("$2.999, just under $3") and a grey rest labelled "printing, shop, publisher"; the slice lifts out.
  4. **Copies sold** (scene 5): a printed stack "3000 printed" with 2,400 lit as "sold" and 600 grey "unsold"; slices multiply out of the lit part only.
- **Colour roles (fixed for e01 to e06).** Rate per item and royalty percentage **amber**; items, crates and copies **blue**; pay and royalties **teal**; the wage to match **violet**; answer **green**; mistake **red**, crossed slips only; recalls grey.
- **Large type, handwritten voice.** Current working 52 px, rows 44 px, chips 30 to 40 px; nothing below 26 px; all text above y = 950. Hand tags: "items × rate per item", "$2.35 a crate", "speed pays", "farm floor", "divide, then round up", "check one less", "78c short", "a slice of every price", "copies sold, not printed", "one go: no early rounding". At most two live at once.
- **Stage changes (standard item 2).** The crate and counter (1, 2); the target line (3); the price tag and royalty slice (4); g01 board, the novel's year (5); framed card (6); question cards (7 to 10); the calendar and the van for e04b (11); key notes (12).
- **Worked examples (g01 layout).** 3: task strip "Option A: $27.81 an hour for 38 hours a week. Option B: $2.75 for each part assembled. How many parts a week must Option B make to earn at least as much as Option A?"; formula strip "parts = pay to match ÷ rate per part"; givens card "wage: 27.81 × 38" (violet), "rate = $2.75 a part" (amber); rows; check rows "384 × 2.75 = $1056.00 (short)", "385 × 2.75 = $1058.75 ✓"; framed answer "385 parts". 5: task strip "A novel sells for $29.99. The author's royalty is 10% of the price of each copy sold. 3000 copies are printed and 2400 are sold. Find the royalties."; formula strip "royalty = rate × price × copies sold"; givens card "rate = 10% = 0.1" (amber), "price = $29.99", "copies sold = 2400" (blue), "printed = 3000" (grey); framed answer "$7197.60"; crossed slip "0.1 × 29.99 × 3000 = $8997.00" (caption "copies sold, not printed").
- **Memory aid.** Framed card: "Pay per item: count, multiply; to reach a target, round up." Key line: "Piecework = items × rate per item. Royalty = rate × price × copies sold."
- **Visual surprise.** At 384 parts the readout sits 78 cents under the target line; one more part tips it over (scene 3).
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` sections 2 and 11).** lesson05 `we-3`'s $19.80 is below the minimum (MS-76) and is repriced. Royalties are only defined on the site (a teaching gap, logged); the novel is original and labelled.
- **Plain meanings at first use.** Piecework ("pay for each item you make or pick, not for the hours"); royalty ("a payment to the creator of a book, song or game for each copy sold, a percentage of the price"); award ("the legal minimum pay and conditions for a type of work"; recalled from e02).
- **Attempts.** A1 (pack question 1 (a), with a target part replacing the per-hour part so the round-up is practised): blueberries $3.40 a tray, 96 trays: $326.40; trays for at least $300: 300 ÷ 3.40 = 88.2…, so 89 (88 pay $299.20; 89 pay $302.60); crossed "88 trays" (caption "88.2 rounds up: 88 falls short"). A2 (pack question 1 (b)): 8% of $34.95 on 1,850 printed copies sold and 12% of $14.99 on 640 e-books: $5,172.60 + $1,151.23 = $6,323.83; crossed "0.08 × 34.95 ≈ $2.80; 2.80 × 1850 = $5180" (caption "round once, at the end").
- **Mistake scene:** none separate. Rounding down a target (3, the counter; A1 crossed); royalties on copies printed (5, crossed); rounding each copy's royalty early (5, said; A2 crossed).
- **Cause chain taught, in order:** (1) piecework pays each item, so pay grows with output, not hours (2); (2) a slow day pays less, which is why the farm award sets a minimum hourly floor (2); (3) to match a wage, the number of items is the wage ÷ the rate per item, and because part of an item earns nothing, any decimal means one more item (3); (4) a royalty is a slice of each copy's price, so it multiplies by the copies sold (4, 5); (5) unsold copies earn nothing, so printed copies do not count (5); (6) multiplying in one go keeps every cent (5).
- **Entry knowledge (route):** Stage 5 (percentages as decimals, rounding up to reach a target); math-s11-e01 (weekly pay), e03 (a rate applied to an amount). Recalled in a phrase or grey chip.
- **Money sources (rulings 5, 32 and 85).** Horticulture Award pieceworkers are guaranteed at least the minimum hourly rate for hours worked, from the first full pay period on or after 28 April 2022 (Fair Work Ombudsman media release, 28 April 2022, https://www.fairwork.gov.au/newsroom/media-releases/2022-media-releases/april-2022/20220428-horticulture-award-changes-media-release; Codex confirms). $27.81 is the 2026-27 General Retail Award Level 1 permanent rate (FWO pay guide; e02's source), used here only as a given wage. The site's $437.10 shift is $54.64 an hour over 8 hours, comfortably above any 2026-27 hourly minimum. Royalty rates are contract terms (labelled example). Said once (scene 2): "These rates change every year, so always use the ones you're given."
- **Handoff (to math-s11-e04b, "How are government payments and sole-trader income worked out?").** Scene 11, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: left, the wall calendar `ma12-wall-calendar-v1.png` (420 px) with a coded mark "$677.20" in every second week's box (no total); right, the van `ma11-trade-van-v1.png` (about 800 px wide) with a coded tag "window cleaning: $85 a house"; chips "paid by the government, or by yourself?", "Next: government payments and sole traders" and "?". No yearly or weekly figure shown. This is e04b's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Crates: 186 × 2.35 = 437.10; ÷ 8 = 54.6375 → 54.64.
  (b) Parts: 27.81 × 38 = 1056.78; ÷ 2.75 = 384.2836…; 384 × 2.75 = 1056.00 (short by 0.78); 385 × 2.75 = 1058.75.
  (c) Royalty per copy: 0.1 × 29.99 = 2.999 (said "just under three dollars"); 0.1 × 29.99 × 2400 = 7197.60; slip 0.1 × 29.99 × 3000 = 8997.00.
  (d) A1: 96 × 3.40 = 326.40; 300 ÷ 3.40 = 88.235…; 88 × 3.40 = 299.20; 89 × 3.40 = 302.60.
  (e) A2: 0.08 × 34.95 × 1850 = 5172.60; 0.12 × 14.99 × 640 = 1151.232 → 1151.23; total 6323.832 → 6323.83; slip 2.80 × 1850 = 5180.00 (0.08 × 34.95 = 2.796).
  (f) Pronunciations: "four hundred and thirty-seven dollars ten"; "three hundred and eighty-four point two eight"; "seven thousand one hundred and ninety-seven dollars sixty".

Main question: *Pickers can be paid $2.35 for every crate they fill, and authors a little from every copy sold. How are piecework and royalties worked out?*
Entry knowledge (Stage 5; math-s11-e01, e03): percentages as decimals; rate × amount.
Stops after: piecework, matching a wage, royalties. No government payments.
Handoff: math-s11-e04b: "paid by the government, or by yourself?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): rate per item and royalty rate amber; items and copies blue; pay and royalties teal; the wage to match violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: paid per item
> Last time ended on a strawberry farm. Pickers here can be paid two dollars thirty-five for every crate they fill. That's piecework, pay for each item you make or pick, not for the hours. Writers and musicians are paid per item too, a little from every copy sold. That's called a royalty. Plenty of first jobs pay per item, from fruit picking to packing boxes, so it's worth knowing how the numbers work. So how are piecework and royalties worked **out**?

Visual: opens on e03's final frame exactly (the crate plate, the tag "$2.35 a crate", the counter "crates: 0", chips). On the first sentence the "Next" chip fades and the crate moves left (700 px). On "piecework" a chip "piecework: pay per item, not per hour". On "every copy sold" the book stack `ma11-book-stack-v1.png` (360 px) slides in at the right with the swing tag `ma12-swing-tag-v1.png` (200 px) hanging from it, coded "$29.99". On "royalty" a chip "royalty: a share of each copy's price". On "out" heading "Piecework and royalties" writes on; the question chip "Paid per item?" moves to the top right.

### 2. piecework: items times the rate
> Piecework pay is the number of items times the rate per item. In one shift, a picker fills a hundred and eighty-six crates at two dollars thirty-five each. Watch the counter climb two thirty-five at a **time**. A hundred and eighty-six times two thirty-five is four hundred and thirty-seven dollars **ten**. Over an eight-hour shift, that's about fifty-four dollars sixty-four an **hour**. Piecework rewards speed, but a slow day or a poor crop pays less. So the Horticulture Award, the award for farm work, sets a floor. Since April twenty twenty-two, pieceworkers on farms must earn at least the minimum hourly rate for the hours they work. These rates change every year, so always use the ones you're **given**.

Visual: stage change: the crate plate (700 px) at the left; a coded crate stack and counter at the right. Row at the top, 52 px: "pay = items × rate per item" (items blue, rate amber). On "time" (simulation 1) the counter runs 0 → 186 over about 3 s, small crate icons stacking, the readout rising "$2.35, $4.70, $7.05 …", hand tag "$2.35 a crate". On "ten" row "186 × 2.35 = $437.10" (framed green). On "hour" row "437.10 ÷ 8 h ≈ $54.64 an hour" (teal), hand tag "speed pays". On "slow day" the counter rewinds to a short grey stack "slow day: fewer crates". On "Horticulture Award" a grey chip, 32 px: "Horticulture Award: pieceworkers get at least the minimum hourly rate for hours worked (from 28 April 2022, Fair Work Ombudsman)", hand tag "farm floor". On "given" hand tag "use the rates you're given".

### 3. matching a wage: round up
> Here's a common question. How many items do you need to match a wage? A workshop offers two choices. Option A is twenty-seven dollars eighty-one an hour, for thirty-eight hours. Option B is two dollars seventy-five for each part assembled. Option A pays one thousand and fifty-six dollars seventy-eight a **week**. To match it, divide by the rate per part. One thousand and fifty-six seventy-eight, divided by two seventy-five, is three hundred and eighty-four point two **eight**. You can't be paid for part of a part, so round up. Three hundred and eighty-four parts pay one thousand and fifty-six dollars, seventy-eight cents short. Three hundred and eighty-five pay one thousand and fifty-eight seventy-five, enough. So the answer is three hundred and eighty-five **parts**. To reach a target, round up, even when the decimal is small.

Visual: clear change to the g01 board. Task strip, 44 px: "Option A: $27.81 an hour for 38 hours a week. Option B: $2.75 for each part assembled. How many parts a week must Option B make to earn at least as much as Option A?" (site lesson05 `we-3`, repriced). Formula strip, 52 px: "parts = pay to match ÷ rate per part". Givens card, 44 px: "A: $27.81 × 38 hours" (violet), "B: $2.75 a part" (amber). On "week" row "27.81 × 38 = $1056.78" (violet); a green target line "$1056.78" appears on a readout at the right. On "eight" row "1056.78 ÷ 2.75 = 384.28…". On "round up" hand tag "divide, then round up". Simulation 2: the parts counter runs to 384; on "seventy-eight cents short" the readout "$1056.00" stops just under the target line, the gap ringed "78c short", hand tag "check one less"; on "enough" the counter ticks to 385 and the readout "$1058.75" crosses the line. On "parts" framed answer (green) "385 parts". Check rows beside it, 40 px: "384 × 2.75 = $1056.00 ✗", "385 × 2.75 = $1058.75 ✓".

### 4. a royalty: a slice of every price
> Now royalties. A royalty is a payment to the creator of a book, song or game, for each copy sold. It's a percentage of the price. Say a first novel sells for twenty-nine dollars ninety-nine, and the author's royalty is ten per cent. Ten per cent of the price is just under three dollars a **copy**. The rest of the price pays for printing, the shop and the publisher. So most of each sale never reaches the **author**. Because it's a percentage, the royalty grows with the price, and with every extra copy sold.

Visual: stage change: the book stack (500 px) at the left, the swing tag (420 px) at the centre with "$29.99" (simulation 3). Row, 44 px: "royalty: 10% of the price, for each copy sold" (10% amber). On "ten per cent" the tag's lower edge splits: a thin teal slice (10% of the tag's height) and a grey rest. On "copy" the slice lifts out to the right, labelled "0.1 × 29.99 = $2.999 a copy (just under $3)" (teal; Revision 2, review finding 1), hand tag "a slice of every price". On "printing, the shop and the publisher" the grey rest is labelled "$26.99: printing, shop, publisher" (grey, 32 px). On "author" the slice rings, chip "royalty rates: set by each contract (example)". On "grows with the price" hand tag "more copies, more royalty".

### 5. worked example: a year of royalties
> Now a whole year. The publisher prints three thousand copies, and two thousand four hundred are sold. Find the author's royalties. A royalty is paid on copies sold, not copies printed. So it's ten per cent, times the price, times two thousand four **hundred**. Do it in one go, zero point one, times twenty-nine ninety-nine, times two thousand four hundred, so no cents are lost to early rounding. That's seven thousand one hundred and ninety-seven dollars **sixty**. Using all three thousand printed copies is the slip. It would pay for books nobody **bought**.

Visual: clear change to the g01 board, the book stack (400 px) at the top right. Task strip, 44 px: "A novel sells for $29.99. The author's royalty is 10% of the price of each copy sold. 3000 copies are printed and 2400 are sold. Find the royalties." Formula strip, 52 px: "royalty = rate × price × copies sold". Givens card, 44 px: "rate = 10% = 0.1" (amber), "price = $29.99", "copies sold = 2400" (blue), "printed = 3000" (grey). Simulation 4: a coded stack "3000 printed"; on "copies sold, not copies printed" 2,400 light blue as "sold", 600 grey "unsold", hand tag "copies sold, not printed". On "hundred" row "0.1 × 29.99 × 2400". On "one go" hand tag "one go: no early rounding". On "sixty" framed answer (green) "$7197.60". On "bought" a red slip "0.1 × 29.99 × 3000 = $8997.00" writes and is crossed (caption "copies sold, not printed").

### 6. memory aid
> Here's the summary. Piecework is items times the rate per item. To reach a target, divide, then round up. And a royalty is the rate, times the price, times the copies **sold**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the crate counter at 385 just over its target line, and the tag's teal slice. Main line, hand font 56 px: "Pay per item: count, multiply; to reach a target, round up." On "sold" the key line, 40 px: "Piecework = items × rate per item. Royalty = rate × price × copies sold." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A picker is paid three dollars forty for each tray of blueberries. In one shift she fills ninety-six trays. Calculate her pay for the shift. Then, how many trays must she fill to earn at least three hundred dollars? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A picker is paid $3.40 for each tray of blueberries. (a) In one shift she fills 96 trays. Calculate her pay for the shift. (b) How many trays must she fill in a shift to earn at least $300?" Picture slot: an empty coded tray counter "trays: 0" beside a target line "$300". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Ninety-six times three forty is three hundred and twenty-six dollars **forty**. For three hundred dollars, divide by three forty, which is about eighty-eight point **two**. Round up to eighty-nine trays, which pay three hundred and two dollars sixty. Eighty-eight trays is the **slip**. They only pay two hundred and ninety-nine dollars **twenty**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "forty" "96 × 3.40 = $326.40" (framed green); on "two" "300 ÷ 3.40 = 88.2…"; on "Round up" "89 trays: 89 × 3.40 = $302.60 ✓" (framed green), the counter crossing its line. On "slip" a red slip "88 trays" writes; on "twenty" "88 × 3.40 = $299.20" beside it and the slip is crossed (caption "88.2 rounds up: 88 falls short"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. An author gets royalties of eight per cent of the thirty-four dollar ninety-five price for each printed copy sold, and twelve per cent of the fourteen dollar ninety-nine price for each e-book sold. In one year, one thousand eight hundred and fifty printed copies and six hundred and forty e-books are sold. Calculate the author's total royalties. Pause here to answer.

Visual: `QuestionCard`, 40 px: "An author receives royalties of 8% of the $34.95 recommended retail price for each printed copy sold, and 12% of the $14.99 price for each e-book sold. In one year 1850 printed copies and 640 e-books are sold. Calculate the author's total royalties." Picture slot: the book stack (240 px) and a blank swing tag. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Work each format in one go, rate times price times copies sold. The printed copies earn five thousand one hundred and seventy-two dollars **sixty**. The e-books earn one thousand one hundred and fifty-one dollars twenty-three, to the **cent**. The **total** is six thousand three hundred and twenty-three dollars eighty-three. Rounding each copy's royalty first is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "sixty" "0.08 × 34.95 × 1850 = $5172.60"; on "cent" "0.12 × 14.99 × 640 = 1151.232 ≈ $1151.23"; on "total" framed answer (green) "$6323.83". On "slip" a red slip "0.08 × 34.95 ≈ $2.80; 2.80 × 1850 = $5180" writes and is crossed (caption "round once, at the end"). Hold about 1 s.

### 11. handoff
> Piecework and royalties come from work you do. But some income comes from the government, paid every fortnight to support students. And some people work for themselves, like a window cleaner with a van and a ladder. How do you work out government payments, and what a sole trader really **earns**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "from the government" the wall calendar (420 px) at the left, a coded "$677.20" mark dropping into every second week's box. On "window cleaner" the van `ma11-trade-van-v1.png` (about 800 px wide) at the right with the coded tag "window cleaning: $85 a house". On "earns" chip "paid by the government, or by yourself?". On "next" chips "Next: government payments and sole traders" and "?". Hold about 2 s. No yearly or weekly figure shown. This is e04b's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Piecework: pay = number of items × rate per item.
- Items to reach a target: divide, then round up (check one less).
- Farm pieceworkers: at least the minimum hourly rate (Horticulture Award).
- Royalty = rate × price × copies sold (not printed).
- Multiply in one go; round once, at the end.

Memory aid (framed card, right side, as in scene 6): *Pay per item: count, multiply; to reach a target, round up.* Key: *Piecework = items × rate per item. Royalty = rate × price × copies sold.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and e04b's opening frame.

## Teaching checks

- **Does it explain causes?** Why piecework pay grows with output: each item pays (2). Why a farm floor exists: a slow day pays less (2). Why round up: part of an item earns nothing, and the target must be reached (3). Why royalties multiply by copies sold: each sold copy pays a slice (4, 5). Why not printed copies: unsold copies earn nothing (5). Why one go: early rounding loses cents (5).
- **Misconceptions addressed:** rounding down a target (3; A1 crossed); royalties on copies printed (5, crossed); rounding each copy's royalty early (5; A2 crossed).
- **Visual standard, item by item:** 1 the strawberry crate from the first frame, the novel in 4 and 5; 2 a new stage every 40 to 60 s; 3 the crate counter, the target line with a 78-cent gap, the price tag splitting into a royalty slice, printed copies lighting as sold; 4 fixed roles (rate amber, items blue, pay teal); 5 large type; 6 hand tags; 7 g01 boards in 3 and 5 with framed answers and a crossed slip; 8 framed card and five bullets; 9 384 parts stopping 78 cents short.
- **One idea at a time:** piecework (2), matching a wage (3), the royalty slice (4), a year of royalties (5).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 25 s and 27 s.
- **Avoided double teaching:** e01's weekly wage and Stage 5 percentages recalled; government payments left to e04b.
- **Syllabus coverage:** `ci85c34acf`: piecework (2, 3, A1) and royalties (4, 5, A2); key notes 1 to 5. Commission: e03. Government payments and sole traders: e04b.
- **Out of scope by design:** government payments and sole-trader earnings (e04b); real royalty contract terms (advances, net receipts).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1 (a), part (b) changed to a target, original HSC style, 3 marks suggested, not an official marking scheme).** "A picker is paid $3.40 for each tray of blueberries. (a) In one shift she fills 96 trays. Calculate her pay for the shift. (b) How many trays must she fill in a shift to earn at least $300?"
Model answer: (a) 96 × 3.40 = $326.40. (b) 300 ÷ 3.40 = 88.2…, so 89 trays (88 trays pay $299.20; 89 pay $302.60). Classic mistake (crossed): "88 trays".

**Attempt 2 (scene 9; pack question 1 (b), 3 marks suggested).** "An author receives royalties of 8% of the $34.95 recommended retail price for each printed copy sold, and 12% of the $14.99 price for each e-book sold. In one year 1850 printed copies and 640 e-books are sold. Calculate the author's total royalties."
Model answer: 0.08 × 34.95 × 1850 = $5172.60; 0.12 × 14.99 × 640 = $1151.23 (1151.232); total $6323.83. Classic mistake (crossed): "0.08 × 34.95 ≈ $2.80; 2.80 × 1850 = $5180".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Crates | 186 × 2.35 = 437.10; ÷ 8 ≈ 54.64 | 2 |
| Parts | 27.81 × 38 = 1056.78; ÷ 2.75 = 384.28…; 384 → 1056.00 (78c short); 385 → 1058.75 | 3 |
| Royalty slice | 0.1 × 29.99 = 2.999 ≈ 3.00; rest 26.99 | 4 |
| Royalties | 0.1 × 29.99 × 2400 = 7197.60; slip × 3000 = 8997.00 | 5 |
| A1 | 326.40; 88.2…; 89 → 302.60; 88 → 299.20 | 7, 8 |
| A2 | 5172.60; 1151.232 → 1151.23; 6323.83; slip 5180 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, `python -I`; 0 failures); Codex to re-check.

Revision 2: every changed or newly shown value rechecked with SymPy in `work/brief-review-s11-e/resolve-check.py` (`python -I`; 117 checks, 0 failures); placeholder values are checked only as the arithmetic built on them.

- 186 × 2.35 = 437.10; 437.10 ÷ 8 = 54.6375 → 54.64.
- 27.81 × 38 = 1056.78; 1056.78 ÷ 2.75 = 384.2836…; 384 × 2.75 = 1056.00; 1056.78 − 1056.00 = 0.78; 385 × 2.75 = 1058.75.
- 0.1 × 29.99 = 2.999; 29.99 − 3.00 = 26.99 (the slice label shows $26.99 for the rest, from 29.99 − 2.999 = 26.991 displayed to the cent); 0.1 × 29.99 × 2400 = 7197.60; 0.1 × 29.99 × 3000 = 8997.00.
- 96 × 3.40 = 326.40; 300 ÷ 3.40 = 88.235…; 88 × 3.40 = 299.20; 89 × 3.40 = 302.60.
- 0.08 × 34.95 × 1850 = 5172.60; 0.12 × 14.99 × 640 = 1151.232; total 6323.832 → 6323.83; 0.08 × 34.95 = 2.796; 2.80 × 1850 = 5180.00.
- Source: the Horticulture Award piece-rate floor from 28 April 2022 (Codex confirms on the FWO release).

## Memory aid check

- **"Pay per item: count, multiply; to reach a target, round up."** with key line **"Piecework = items × rate per item. Royalty = rate × price × copies sold."** Original. Meaning, as said in scene 6: per-item pay is a count times a rate, and a target needs a whole number of items, so any part means one more. Assumptions checked: items are paid only when whole (3); the royalty is a percentage of the stated price, per copy sold (4, 5); the rate is given (2, 5). It helps a new case: $0.60 a box with a $150 target is 250 boxes exactly (no rounding needed), and a $151 target is 251.67…, so 252 boxes. Introduced after scenes 2 to 5.
- **Considered, not used:** "round up for targets" alone (drops the royalty formula).

## Narration length estimate

Revision 2, counted by `work/brief-review-s11-e/count.py` (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; it counts the joining spaces the author's parser left out): **4,912 characters** (Revision 1: 4,912 by the same parser, 4,901 by the author's), 12 scene headings. Characters per scene (1 to 12): 450, 698, 827, 503, 550, 172, 248, 332, 378, 362, 306, 75. Speech about 369 s; holds and settling unchanged from Revision 1 (below); total **about 453 s**, 117 s under the 570 s cap. Feedback speech: about 25 s and 27.2 s. The Revision 1 paragraphs below are kept for the record.

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, which reproduces e08's 5,632).

**4,901 characters**, 12 scene headings. Characters per scene (1 to 12): 450, 698, 827, 503, 550, 172, 248, 332, 378, 362, 306, 75.

At 13.3 characters per second the speech is about 368 s. Total with the holds and settling below **about 453 s**, 117 s under the 570 s cap; speech and holds before the notes about 408 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the crate counter (2), the target line (3), the royalty slice (4) and the copies lighting (5), about 20 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 3's last sentence (the tag carries it); scene 2's "Over an eight-hour shift, that's about fifty-four dollars sixty-four an hour." (move the cue "hour" to "speed").

## Scene list and build ids

Lesson key `m-s11e04a` (route math-s11-e04, first half). Explainer folder `src/explainer/lessons/math-s11-e04a`; build inputs in `docs/production/claude-pm/lessons/math-s11-e04a/` (at voicing).

In order (12 scene headings): hook-paid-per-item, piecework-crates, match-a-wage-round-up, royalty-slice, worked-royalties-year, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | e03's frame: the crate |
| 30 to 95 s | 2 | The crate counter |
| 95 to 165 s | 3 | g01 board: the target line |
| 165 to 200 s | 4 | The price tag and royalty slice |
| 200 to 250 s | 5 | g01 board: a year of royalties |
| 250 to 265 s | 6 | Framed memory card |
| 265 to 370 s | 7 to 10 | Question cards and countdowns, then feedback |
| 370 to 390 s | 11 | The calendar and the van, for e04b |
| 390 to 435 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e03's last frame continues into 1; 1 to 2 camera continue; 2 to 3 clear change to the board; 3 to 4 stage change; 4 to 5 clear change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e04a-learning-review.md`, `science_check` = `checks/m-s11-e04a-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma11-book-stack-v1.png` (four cloth-bound books, green, red, blue and yellow, stacked, no titles, true alpha; reused as the novel); `ma12-swing-tag-v1.png` (a blank cream card swing tag on a twine loop with four ruled lines, true alpha; reused as the price tag that splits); `ma11-trade-van-v1.png` (a white van, side view, an extension ladder on its roof rack, no signage, true alpha; reused as the window cleaner's van); `ma12-wall-calendar-v1.png` (as e01).

Need: none new (the crate plate is briefed in e03). Reused: `ms11-strawberry-crate-scale-v1.png`, `ma11-book-stack-v1.png`, `ma12-swing-tag-v1.png`, `ma11-trade-van-v1.png`, `ma12-wall-calendar-v1.png`.

Coded: the crate counter and stack, the target line and readout, the royalty slice, the printed and sold stack, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `PlateFields`, `HandTag`, `StepCounter`, `TargetDial`, `LiveReadoutBoard`, `SpriteStack`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row e04):
1. **RoyaltySlice** (small, a `PlateFields` overlay): a price tag whose lower edge splits into a thin percentage slice and a grey rest; the slice lifts out and can be multiplied by a count. Check: 10% of $29.99 shows $2.999 (just under $3, never rounded on the label) and a rest of $26.99.
2. **Target line on a counter** (small): a readout with a horizontal target, showing the gap below it. Check: 384 parts read $1,056.00 with "78c short".

## Codex asset brief

No new plate. The strawberry crate is briefed in e03 (`ms11-strawberry-crate-scale-v1.png`, needed before e03's build). The book stack, swing tag, van and calendar exist and were viewed. Counters, tags and boards are coded.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly (typographic apostrophe).
3. Confirm the Horticulture Award piece-rate floor and its date on the FWO release, and that "These rates change every year" is said once.
4. Confirm the site's $19.80 does not appear and the repriced wage gives 385 parts.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on e03's final frame and scene 11 matches the decisions file's e04a to e04b join (no yearly or weekly figure).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Piecework and Royalties | Year 11 Maths Standard

(Title length: 49 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson03.sa.html

Strawberry pickers can be paid for every crate, and authors earn a little from every copy sold. Learn how piecework pay is the number of items times the rate per item, how many items it takes to match a wage (divide, then round up), and the farm rule that pieceworkers earn at least the minimum hourly rate. Then see a royalty as a slice of each copy's price, and work out a year of royalties on the copies sold. This video covers the piecework and royalties parts of the syllabus point; commission comes before it, and government payments and sole-trader earnings after it. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Pay rates change every year; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Calculate an individual’s earnings from commission, sliding scale commission, piecework, royalties, government payments and as a sole trader"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: Commission and Sliding Scale Commission. Next: Government Payments and Sole Trader Income.

#Year11Maths #MathsStandard #Piecework #HSCScience

## Open decisions

- **1. The repriced wage.** lesson05 `we-3`'s Option A becomes $27.81 an hour (the retail Level 1 rate used as a given number), keeping the site's $2.75 a part. Confirm, or root picks another round wage.
- **2. A1's part (b).** The pack's per-hour part is replaced by a target so the round-up is practised. Confirm.
- **3. The novel (original).** 10% of $29.99 on 2,400 of 3,000 copies; labelled an example. Confirm.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s11-e04a-learning-review.md`; ruling 96). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.
- Revision 1. Next: student learning review (trace from e03; check that the counter makes "items × rate" obvious, that the 78-cent gap makes rounding up feel necessary, that the price-tag slice makes a royalty concrete, that "copies sold, not printed" lands, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `RoyaltySlice` and the target line before this video.
