# Maths S11 E03: How does commission, including a sliding scale, pay for sales? Commission as a percentage of sales, a retainer, commission above a threshold, and sliding scale commission worked slice by slice (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the i-strand resolution logs) and root's Standard rulings 1 to 87 (`../checks/root-rulings-maths-standard-outline.md`; rulings 6, 84, 85 and 87 apply here). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,143 characters by script (see "Narration length estimate"), 12 scene headings, about 474 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: third video of the Year 11 Earning money strand, outline playlist order 18. One video for Standard 1 and Standard 2. The syllabus point is shared: e03 teaches commission and sliding scale commission; e04a teaches piecework and royalties, and e04b government payments and sole-trader earnings (ruling 84). The point is quoted in full in all three. Viewers arrive from e02's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-e03.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year11/earning-money/lesson03.sa.html` (SHA256 `4bff2698118bd1e4657f6f5cf02f51557282e4959a29a1249fd1b481a6392aa4`; the hook's slow month; card 05's "subtract $10,000 first, then apply 5%"; card 06's tiers on $65,000, $400 + $1,050 + $750 = $2,200, and "Applying 5% to the full $65,000 gives $3,250"; `we-1` Daniela, $620 + 2.8% of $84,000 = $2,972.00; `we-2`, 3%, 4.5%, 6% on $55,000 = $2,475.00; Trap 01, × 2.2 for 2.2%; Trap 02, the top rate on everything) and `lesson05.sa.html` (SHA256 `b254ea601d328e73a60f6b12e60e4218df2bcfb2fbe7afdf5df4cb7577de32c2`). Route entry: `math-s11-e03` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the red hatchback and the phone plate reused; a new strawberry crate plate for the final frame; the sliced bar, retainer floor and boards coded.

Owner rules applied: as e01 (2024 syllabus; plates for real objects, code for diagrams and documents; no people; one question; one stage at a time; words before symbols; plain meanings (commission, retainer, threshold, sliding scale); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a car yard, a phone shop, a furniture store, a sports store); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration). Percentages use Stage 5 skills (ruling 87): "per cent means out of a hundred" is said once.

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Ways of earning", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json` (typographic apostrophe as in the source):

- `ci85c34acf`: "Calculate an individual’s earnings from commission, sliding scale commission, piecework, royalties, government payments and as a sole trader"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from e02's final frame exactly (the red hatchback `ma12-used-hatchback-v1.png` with the windscreen card "$14 990"; the staff notice "Salesperson pay: $620 a week + 2.8% of sales"; chips "paid for sales, not hours", "Next: commission", "?"). Recalls Stage 5 (a percentage as a decimal, a percentage of an amount) and e02 (work each block separately, then add) in a phrase or grey chip. Teaches: commission as a percentage of the value of sales, the percentage written as a decimal first; a retainer, paid even with no sales; commission on sales above a threshold (subtract the threshold first); a sliding scale cut into slices at its boundaries, each rate on its own slice only, the slices added; that a bigger total never lowers the rate on the earlier slices. Stops at commission. Not taught: target sales by equation (left out: the pack calls it optional, and the Standard pace needs the time for slicing); piecework and royalties (e04a); the salary comparison (e01 covered converting).

## Decisions

- **Anchor: the car yard and its slow week (reused plate, from e02's final frame).** The site's hook (an agent's pay in a slow month) moved to the car yard of `we-1`: with no sales, only the $620 retainer is paid. No real estate commission rate is stated (unsourced, pack). Plate reused: `ma12-used-hatchback-v1.png`. No people.
- **Worked examples: the site's numbers.** `we-1` ($620 + 2.8% of $84,000 = $2,972.00) for commission and a retainer, with Trap 01 (× 2.8). Card 05's threshold rule ("5% on sales above $10,000") with an original $18,000 month ($400). Card 06's tiers on $65,000 ($2,200, against $3,250 at the top rate) for the sliding-scale picture, set in a phone shop. `we-2` (3%, 4.5%, 6% on $55,000 = $2,475.00) as the g01 board, set in a furniture store, carrying the "$15,001 to $40,000 is a $25,000 slice" trap.
- **Notation.** "commission = rate × sales" in words, the rate as a decimal; no letters.
- **Join.** Scene 1 opens on e02's final frame exactly; on "retainer" a violet floor block appears under the car.
- **Simulations (standard item 3).**
  1. **Retainer floor** (scenes 1, 2; `SignedBar` or a stacked bar): a violet block "$620" stands on the baseline with a teal commission block stacked on top that grows with a sales slider ($0 to $84,000); at $0 only the floor remains.
  2. **Decimal slide** (scene 2): the tag "2.8%" slides its decimal point two places left to "0.028".
  3. **Sliced bar** (scenes 3 to 5; new `SlicedBar`): a horizontal sales bar cut at its boundaries, each slice tinted by its rate, its amount dropping beneath it and adding to a total; a single-colour ghost bar at the top rate shows the wrong total. In scene 3 the first $10,000 is a grey "no commission" slice.
- **Colour roles (fixed for e01 to e06).** Rates (percentages) **amber**; sales and slices **blue**; commission **teal**; retainer **violet**; answer **green**; mistake **red**, crossed slips only; the zero-rate slice grey.
- **Large type, handwritten voice.** Current working 52 px, rows 44 px, chips 30 to 40 px; nothing below 26 px; all text above y = 950. Hand tags: "paid even with no sales", "per cent ÷ 100", "then add the retainer", "take off the threshold first", "doesn't count", "cut at each boundary", "each rate, its own slice", "a $25 000 slice", "same picture: income tax (e08)". At most two live at once.
- **Stage changes (standard item 2).** The car yard and the retainer floor (1); g01 board, `we-1` (2); the threshold bar (3); the sliced bar in the phone shop (4); g01 board, the furniture store (5); framed card (6); question cards (7 to 10); the strawberry crate for e04a (11); key notes (12).
- **Worked examples (g01 layout).** 2: task strip "A car salesperson is paid a retainer of $620 a week plus 2.8% commission on all sales. One week the sales are $84 000. Find the week's pay." (site `we-1`); formula strip "pay = retainer + rate × sales"; givens card "retainer = $620" (violet), "rate = 2.8% = 0.028" (amber), "sales = $84 000" (blue); framed answer "$2972.00"; crossed slip "84 000 × 2.8 = $235 200" (caption "2.8% is 0.028"). 5: task strip "A furniture store pays 3% on the first $15 000 of monthly sales, 4.5% on sales from $15 001 to $40 000 and 6% above $40 000. March sales are $55 000. Find the commission." (site `we-2`); givens card listing the three tiers; the sliced bar under the rows; framed answer "$2475.00"; a grey crossed ghost "4.5% × 40 000" (caption "the middle slice is $25 000").
- **Memory aid.** Framed card: "Slice it: each rate only on its own slice." Key line: "Commission = rate (as a decimal) × sales. Threshold: take it off first. Retainer: add it on."
- **Visual surprise.** The single-colour ghost bar at 5% overshoots the sliced total by $1,050, and the overshoot is exactly the lower slices paid at the wrong rate (scene 4).
- **Site notes (pack section 8).** No error in lesson03's commission content. The shared point is quoted in full here and in e04a and e04b; each description says which parts the video teaches.
- **Plain meanings at first use.** Commission ("pay worked out as a percentage of the value of what you sell"); retainer ("a fixed amount paid each week, even if nothing sells"); threshold ("an amount of sales that earns no commission"); sliding scale ("different rates on different slices of the sales").
- **Attempts.** A1 (pack question 1, set in a sports store, since the phone shop carries scene 4): 4%, 6%, 8% on $31,500: $400 + $900 + $520 = $1,820; crossed "8% × 31 500 = $2520" (caption "each rate only on its slice"). A2 (pack question 2 (a) only; part (b), target sales by equation, is left out because the video does not teach it): $450 + 3.5% of sales above $5,000, sales $12,800: $723.00; crossed "450 + 0.035 × 12 800 = $898.00" (caption "take off the $5000 first").
- **Mistake scene:** none separate. × 2.8 for 2.8% (2, crossed); the threshold not subtracted (3, said; A2 crossed); the top rate on everything (4, ghost; A1 crossed); the middle slice read as $40,000 (5, crossed ghost); adding the retainer to sales before the rate (2, said by the order of the rows).
- **Cause chain taught, in order:** (1) commission depends on sales, so with no sales only a retainer is paid (1); (2) per cent means out of a hundred, so 2.8% is 0.028, and commission is that share of each dollar sold (2); (3) a threshold's dollars earn nothing, so they come off before the rate (3); (4) a sliding scale gives each slice its own rate, so the total is the sum of the slices, and the lower slices always earn their own rates however big the total is (4); (5) a slice's size is its upper boundary minus its lower one (5).
- **Entry knowledge (route):** Stage 5 (a percentage as a decimal; a percentage of an amount); math-s11-e01 (pay periods), e02 (blocks, then add). Recalled in a phrase or grey chip.
- **Money sources (rulings 5 and 32).** Commission rates are set by each contract, so the video uses the questions' rates; no dated source is needed (pack). No award minimum is stated. This video says once that commission rates differ from job to job and change over time; the "rates change every year" sentence (ruling 5) is in scene 3: "Real commission rates differ from job to job and can change each year, so always use the ones you're given."
- **Handoff (to math-s11-e04a, "How are piecework and royalties worked out?").** Scene 11, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: the crate plate `ms11-strawberry-crate-scale-v1.png` (about 900 px wide) with a coded tag "$2.35 a crate" (amber); a small coded crate counter "crates: 0"; chips "paid per item", "Next: piecework and royalties" and "?". No pay worked out. This is e04a's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) `we-1`: 84 000 × 0.028 = 2352; + 620 = 2972; slip 84 000 × 2.8 = 235 200.
  (b) Threshold: 18 000 − 10 000 = 8000; 0.05 × 8000 = 400; slip 0.05 × 18 000 = 900.
  (c) Card 06: 0.02 × 20 000 = 400; 0.035 × 30 000 = 1050; 0.05 × 15 000 = 750; total 2200; ghost 0.05 × 65 000 = 3250; gap 1050.
  (d) `we-2`: 0.03 × 15 000 = 450; 0.045 × 25 000 = 1125; 0.06 × 15 000 = 900; total 2475; ghost 0.06 × 55 000 = 3300.
  (e) Sales slider (scene 1 and 2): $0 → pay $620; $84 000 → $2972.
  (f) Pronunciations: "two point eight per cent"; "zero point zero two eight"; "two thousand nine hundred and seventy-two dollars"; "three point five per cent".

Main question: *A car salesperson gets $620 a week plus 2.8% of sales. How does commission, including a sliding scale, pay for sales?*
Entry knowledge (Stage 5; math-s11-e01, e02): percentages as decimals; blocks, then add.
Stops after: commission, a retainer, a threshold and a sliding scale. No piecework.
Handoff: math-s11-e04a: "paid per item".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): rates amber; sales blue; commission teal; retainer violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a slow week at the car yard
> Last time ended at a car yard. The salesperson's pay is six hundred and twenty dollars a week, plus two point eight per cent of sales. That second part is commission, pay worked out as a percentage of the value of what you sell. The six hundred and twenty is a retainer, a fixed amount paid each week, even if nothing sells. So in a slow week with no sales, the pay is just the **retainer**. In a good week, it can be much more. So how does commission, including a sliding scale, pay for **sales**?

Visual: opens on e02's final frame exactly (the hatchback, the windscreen card, the notice card, chips). On the first sentence the "Next" chip fades and the car moves left (700 px). On "commission" the "2.8% of sales" part of the notice rings amber, chip "commission: a percentage of sales". On "retainer" (first) the "$620" part rings violet, chip "retainer: paid even with no sales". On "retainer" (bold) a baseline appears at the right with a violet floor block "$620" and a sales slider at "$0" (simulation 1), hand tag "paid even with no sales". On "much more" the slider runs to "$84 000" and a teal block grows on top of the floor, its value hidden ("?"). On "sales" heading "Commission" writes on; the question chip "Pay for sales?" moves to the top right.

### 2. commission and a retainer
> Say this week's sales are eighty-four thousand dollars of cars. First turn the percentage into a decimal. Per cent means out of a hundred, so two point eight per cent is two point eight divided by a hundred, zero point zero two **eight**. The commission is eighty-four thousand times zero point zero two eight, two thousand three hundred and fifty-two **dollars**. Then add the retainer. The week's pay is two thousand nine hundred and seventy-two **dollars**. Multiplying by two point eight instead is the slip. That would pay over two hundred thousand dollars for one **week**.

Visual: clear change to the g01 board, the hatchback (500 px) at the top right. Task strip, 44 px: "A car salesperson is paid a retainer of $620 a week plus 2.8% commission on all sales. One week the sales are $84 000. Find the week's pay." (site `we-1`). Formula strip, 52 px: "pay = retainer + rate × sales". Givens card, 44 px: "retainer = $620" (violet), "rate = 2.8%" (amber), "sales = $84 000" (blue). On "two point eight divided by a hundred" (simulation 2) the "2.8%" tag slides its point two places, hand tag "per cent ÷ 100"; on "eight" the givens line reads "rate = 2.8% = 0.028". On "dollars" (first) row, 52 px: "commission = 0.028 × 84 000 = $2352" (teal). On "add the retainer" hand tag "then add the retainer". On "dollars" (second) row "pay = 620 + 2352"; framed answer (green) "$2972.00". The floor-and-stack bar from scene 1 shows small at the right with its labels. On "week" a red slip "84 000 × 2.8 = $235 200" writes and is crossed (caption "2.8% is 0.028").

### 3. commission above a threshold
> Some jobs only pay commission on sales above a set amount, called a threshold. A phone shop pays five per cent on monthly sales above ten thousand dollars. This month's sales are eighteen thousand. The first ten thousand earns nothing, so take it off first. Eighteen thousand minus ten thousand leaves eight **thousand**. Five per cent of eight thousand is four hundred **dollars**. Five per cent of all eighteen thousand would be nine hundred, too much, because the first ten thousand doesn't **count**. Real commission rates differ from job to job and can change each year, so always use the ones you're given.

Visual: stage change: the phone plate `ma12-phone-v1.png` (300 px) at the top left with a coded tag "phone shop"; a blue sales bar (1,300 × 100 px) "sales: $18 000" (simulation 3). Row, 44 px: "5% on sales above $10 000". On "take it off first" the bar cuts at $10,000; the left part turns grey, labelled "first $10 000: no commission", hand tag "take off the threshold first". On "thousand" the right part, blue, "18 000 − 10 000 = $8000". On "dollars" a teal block drops under it: "0.05 × 8000 = $400" (framed green). On "nine hundred" a grey ghost bar "0.05 × 18 000 = $900" draws over the whole bar and is crossed in grey; on "count" hand tag "doesn't count". On "differ from job to job" a grey chip "rates: set by each job; use the ones given".

### 4. a sliding scale: slice it
> A sliding scale pays different rates on different slices of the sales. This phone shop's scale is two per cent on the first twenty thousand dollars, three point five per cent on the next thirty thousand, up to fifty thousand, and five per cent on everything above fifty thousand. One month's sales are sixty-five thousand. Cut the sales at each boundary. The first slice is twenty thousand at two per cent, four hundred **dollars**. The next slice is thirty thousand at three point five per cent, one thousand and **fifty**. The last slice is the fifteen thousand above fifty thousand, at five per cent, seven hundred and fifty. Add the slices, two thousand two hundred **dollars**. Five per cent on all of it would give three thousand two hundred and fifty, which is wrong. Each rate only applies to its own slice, so a bigger month never lowers the rate on the first **slices**. You'll see this exact picture again with income **tax**.

Visual: stage change: the phone shop's coded sales board (560 × 280 px, unbranded) at the top left: "Sliding scale (monthly): 2% on the first $20 000; 3.5% on the next $30 000 (to $50 000); 5% above $50 000". The `SlicedBar` (1,500 × 110 px) "sales: $65 000". On "Cut the sales at each boundary" the bar cuts at $20,000 and $50,000, three slices tinted light, mid and deep amber, each labelled with its size in blue ("$20 000", "$30 000", "$15 000"), hand tag "cut at each boundary". On "dollars" (first) a teal block drops under slice 1: "0.02 × 20 000 = $400". On "fifty" (bold) under slice 2: "0.035 × 30 000 = $1050". On "seven hundred and fifty" under slice 3: "0.05 × 15 000 = $750". On "dollars" (second) the three blocks slide together: "400 + 1050 + 750 = $2200" (framed green). On "three thousand two hundred and fifty" a single deep-amber ghost bar above, "0.05 × 65 000 = $3250", crossed in red with caption "top rate on everything"; the extra "$1050" is bracketed over slices 1 and 2. On "slices" hand tag "each rate, its own slice". On "tax" a grey chip "same picture: income tax (e08)".

### 5. worked example: a furniture store
> Now a worked example. A furniture store pays three per cent on the first fifteen thousand dollars of monthly sales, four point five per cent on sales from fifteen thousand and one dollars to forty thousand, and six per cent above forty thousand. March sales are fifty-five thousand. Find the commission. Cut at fifteen thousand and forty thousand. The middle slice runs from fifteen thousand to forty thousand, so it's twenty-five **thousand**, not forty. Three per cent of fifteen thousand is four hundred and **fifty**. Four point five per cent of twenty-five thousand is one thousand one hundred and twenty-five. Six per cent of the fifteen thousand above forty thousand is nine **hundred**. The commission is two thousand four hundred and seventy-five **dollars**.

Visual: clear change to the g01 board. Task strip, 44 px: "A furniture store pays 3% on the first $15 000 of monthly sales, 4.5% on sales from $15 001 to $40 000 and 6% on sales above $40 000. March sales are $55 000. Find the commission." (site `we-2`). Formula strip, 52 px: "commission = sum of (rate × slice)". Givens card, 44 px, the three tiers with rates amber. Under it, a `SlicedBar` (1,300 × 90 px) cut at $15,000 and $40,000. On "thousand" (bold) the middle slice's label writes "40 000 − 15 000 = $25 000", hand tag "a $25 000 slice", and a grey ghost "4.5% × 40 000" is crossed (caption "the middle slice is $25 000"). Rows, 52 px: on "fifty" "0.03 × 15 000 = $450"; on "one thousand one hundred and twenty-five" "0.045 × 25 000 = $1125"; on "hundred" "0.06 × 15 000 = $900"; on "dollars" framed answer (green) "$2475.00".

### 6. memory aid
> Here's the summary. Commission is a percentage of sales, written as a decimal. Take off any threshold first. And on a sliding scale, slice it, because each rate only applies to its own **slice**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the three-slice bar with its teal amounts dropping beneath. Main line, hand font 56 px: "Slice it: each rate only on its own slice." On "slice" the key line, 40 px: "Commission = rate (as a decimal) × sales. Threshold: take it off first. Retainer: add it on." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A sports store pays commission each month on a sliding scale. Four per cent on the first ten thousand dollars of sales, six per cent on the next fifteen thousand, and eight per cent on sales above twenty-five thousand. In June, Ari's sales are thirty-one thousand five hundred dollars. Calculate Ari's commission for June. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A sports store pays its sales staff commission on a sliding scale each month: 4% on the first $10 000 of sales, 6% on the next $15 000, and 8% on sales above $25 000. In June, Ari's sales are $31 500. Calculate Ari's commission for June." Picture slot: an uncut blue bar "sales: $31 500". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Four per cent of ten thousand is four **hundred**. Six per cent of fifteen thousand is nine **hundred**. The top slice is thirty-one thousand five hundred minus twenty-five thousand, six thousand five hundred, and eight per cent of that is five hundred and **twenty**. The commission is one thousand eight hundred and twenty **dollars**. Eight per cent on all the sales is the **slip**.

Visual: the card shrinks to the top (30 px). The bar cuts at $10,000 and $25,000. Rows, 44 px: on "hundred" (first) "0.04 × 10 000 = $400"; on "hundred" (second) "0.06 × 15 000 = $900"; on "twenty" "31 500 − 25 000 = 6500; 0.08 × 6500 = $520"; on "dollars" framed answer (green) "$1820". On "slip" a red slip "0.08 × 31 500 = $2520" writes and is crossed (caption "each rate only on its slice"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A salesperson is paid a retainer of four hundred and fifty dollars a week, plus three point five per cent commission on weekly sales above five thousand dollars. Calculate the pay for a week with sales of twelve thousand eight hundred dollars. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A salesperson is paid a retainer of $450 per week plus 3.5% commission on weekly sales above $5000. Calculate the pay for a week with sales of $12 800." Picture slot: a violet floor block "$450" with an empty stack above it. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Take off the threshold first. Twelve thousand eight hundred minus five thousand is seven thousand eight **hundred**. Three point five per cent of that is two hundred and seventy-three **dollars**. Add the retainer, for seven hundred and twenty-three **dollars**. Taking three point five per cent of all twelve thousand eight hundred is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "hundred" "12 800 − 5000 = 7800"; on "dollars" (first) "0.035 × 7800 = $273" (teal); on "dollars" (second) "450 + 273 = $723.00" (framed green), the floor block gaining its teal stack. On "slip" a red slip "450 + 0.035 × 12 800 = $898.00" writes and is crossed (caption "take off the $5000 first"). Hold about 1 s.

### 11. handoff
> Commission pays for each dollar of sales. Some jobs pay for each item instead. On a strawberry farm, pickers can be paid for every crate they fill, like two dollars thirty-five a crate. How does pay per item **work**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "strawberry farm" the crate plate `ms11-strawberry-crate-scale-v1.png` (about 900 px wide); on "two dollars thirty-five a crate" the amber tag "$2.35 a crate" and the coded counter "crates: 0". On "work" chip "paid per item". On "next" chips "Next: piecework and royalties" and "?". Hold about 2 s. No pay worked out. This is e04a's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Commission = rate × sales, with the rate as a decimal (2.8% = 0.028).
- Retainer: a fixed amount, paid even with no sales; add it on.
- "Above $10 000": take the $10 000 off first.
- Sliding scale: cut at each boundary; each rate on its own slice; add.
- Slice size = upper boundary − lower boundary.

Memory aid (framed card, right side, as in scene 6): *Slice it: each rate only on its own slice.* Key: *Commission = rate (as a decimal) × sales. Threshold: take it off first. Retainer: add it on.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and e04a's opening frame.

## Teaching checks

- **Does it explain causes?** Why the retainer matters: commission can be zero (1). Why the decimal: per cent means out of a hundred (2). Why subtract the threshold: those dollars earn nothing (3). Why slice: each rate belongs to its own slice (4). Why a bigger total never lowers earlier slices' rates: each slice keeps its rate (4). Why the middle slice is $25,000: upper minus lower boundary (5).
- **Misconceptions addressed:** × 2.8 (2, crossed); the threshold not subtracted (3; A2 crossed); the top rate on everything (4 ghost; A1 crossed); the middle slice as $40,000 (5, crossed ghost).
- **Visual standard, item by item:** 1 the car yard from the first frame, the phone shop in 3 and 4; 2 a new stage every 40 to 60 s; 3 the retainer floor with a growing stack, the sliding decimal point, the sliced bar with dropping amounts and a ghost bar; 4 fixed roles (rate amber, sales blue, commission teal, retainer violet); 5 large type; 6 hand tags; 7 g01 boards in 2 and 5 with framed answers and crossed slips; 8 framed card and five bullets; 9 the ghost bar overshooting by exactly the lower slices' overpayment.
- **One idea at a time:** commission and a retainer (2), a threshold (3), slicing (4), a worked scale (5).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 25 s and 22 s.
- **Avoided double teaching:** e02's "blocks, then add" recalled as slices; tax brackets previewed in a chip only (e08).
- **Syllabus coverage:** `ci85c34acf`: commission (2, 3, A2) and sliding scale commission (4, 5, A1); key notes 1 to 5. Piecework, royalties, government payments and sole traders: e04a and e04b.
- **Out of scope by design:** target sales by equation; real estate commission rates.

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, set in a sports store, original HSC style, 3 marks suggested, not an official marking scheme).** "A sports store pays its sales staff commission on a sliding scale each month: 4% on the first $10 000 of sales, 6% on the next $15 000, and 8% on sales above $25 000. In June, Ari's sales are $31 500. Calculate Ari's commission for June."
Model answer: 0.04 × 10 000 = $400; 0.06 × 15 000 = $900; 0.08 × (31 500 − 25 000) = 0.08 × 6500 = $520; total $1820. Classic mistake (crossed): "0.08 × 31 500 = $2520".

**Attempt 2 (scene 9; pack question 2 (a), 2 marks suggested).** "A salesperson is paid a retainer of $450 per week plus 3.5% commission on weekly sales above $5000. Calculate the pay for a week with sales of $12 800."
Model answer: 450 + 0.035 × (12 800 − 5000) = 450 + 273 = $723.00. Classic mistake (crossed): "450 + 0.035 × 12 800 = $898.00".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| `we-1` | 0.028 × 84 000 = 2352; 620 + 2352 = 2972.00; slip 235 200 | 1, 2 |
| Threshold | 18 000 − 10 000 = 8000; 0.05 × 8000 = 400; ghost 900 | 3 |
| Card 06 | 400, 1050, 750; 2200; ghost 3250; gap 1050 | 4 |
| `we-2` | 450, 1125 (on 25 000), 900; 2475.00; ghost 6% of all 3300 (author note) | 5 |
| A1 | 400, 900, 6500, 520; 1820; slip 2520 | 7, 8 |
| A2 | 7800; 273; 723.00; slip 898.00 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, `python -I`; 0 failures); Codex to re-check.

- 84 000 × 0.028 = 2352.00; 620 + 2352 = 2972.00; 84 000 × 2.8 = 235 200.
- 0.05 × (18 000 − 10 000) = 400.00; 0.05 × 18 000 = 900.00.
- 0.02 × 20 000 = 400; 0.035 × 30 000 = 1050; 0.05 × 15 000 = 750; sum 2200; 0.05 × 65 000 = 3250; 3250 − 2200 = 1050.
- 0.03 × 15 000 = 450; 0.045 × 25 000 = 1125; 0.06 × 15 000 = 900; sum 2475; 0.06 × 55 000 = 3300.
- 0.04 × 10 000 = 400; 0.06 × 15 000 = 900; 0.08 × 6500 = 520; sum 1820; 0.08 × 31 500 = 2520.
- 0.035 × 7800 = 273; 450 + 273 = 723.00; 450 + 0.035 × 12 800 = 898.00.

## Memory aid check

- **"Slice it: each rate only on its own slice."** with key line **"Commission = rate (as a decimal) × sales. Threshold: take it off first. Retainer: add it on."** Original (the site's card 06 says "Split by tier"). Meaning, as said in scene 6: a sliding scale is several small commission sums, one per slice, added. Assumptions checked: the tiers are "marginal" (each rate on its own slice), which is how sliding-scale questions are written (4, 5); a threshold is a zero-rate first slice (3); the rate is a decimal (2). If a question ever said "the whole amount at the rate for its tier", it would say so; the card is for sliding scales as the syllabus names them. It helps a new case: 2% on the first $5,000 and 4% above, on $8,000, is $100 + $120 = $220, not 4% of $8,000. Introduced after scenes 2 to 5. It returns in e08 for tax brackets.
- **Considered, not used:** "decimal first, threshold off, then slice" (a procedure, not the idea).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, which reproduces e08's 5,632).

**5,143 characters**, 12 scene headings. Characters per scene (1 to 12): 490, 563, 600, 917, 752, 191, 355, 366, 275, 333, 226, 75.

At 13.3 characters per second the speech is about 387 s. Total with the holds and settling below **about 474 s**, 96 s under the 570 s cap; speech and holds before the notes about 429 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the retainer floor (1), the threshold bar (3) and the sliced bars (4, 5), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 4's "You'll see this exact picture again with income tax." (the chip carries it); scene 3's last clause ", because the first ten thousand doesn't count" (the tag carries it; move the cue to "too much").

## Scene list and build ids

Lesson key `m-s11e03` (route math-s11-e03). Explainer folder `src/explainer/lessons/math-s11-e03`; build inputs in `docs/production/claude-pm/lessons/math-s11-e03/` (at voicing).

In order (12 scene headings): hook-slow-week, commission-retainer, threshold, sliding-scale-slices, worked-furniture-store, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | e02's frame; the retainer floor |
| 40 to 90 s | 2 | g01 board: the car yard |
| 90 to 130 s | 3 | The threshold bar |
| 130 to 215 s | 4 | The sliced bar, phone shop |
| 215 to 270 s | 5 | g01 board: the furniture store |
| 270 to 285 s | 6 | Framed memory card |
| 285 to 390 s | 7 to 10 | Question cards and countdowns, then feedback |
| 390 to 410 s | 11 | The strawberry crate, for e04a |
| 410 to 455 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e02's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3 stage change; 3 to 4 camera continue (the bar re-cuts); 4 to 5 clear change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e03-learning-review.md`, `science_check` = `checks/m-s11-e03-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-used-hatchback-v1.png` (red hatchback, side view, true alpha; reused); `ma12-phone-v1.png` (a plain smartphone, front view, a blank dark screen, a light frame, no logo, true alpha; reused as the phone shop's sign at 300 px); `ma12-apple-crate-v1.png` (a wooden crate of red and green apples, but with a painted dark glow around it, so not used for the crate on the farm scale); `ma11-produce-scale-v1.png` (not used: the crate and scale belong in one painting).

Need (painted, new; see the Codex asset brief): `ms11-strawberry-crate-scale-v1.png` (scene 11; e04a's anchor; needed by this build, ruling 17). Reused: `ma12-used-hatchback-v1.png`, `ma12-phone-v1.png`.

Coded: the notice card, the retainer floor and stack, the sales slider, the decimal tag, the sliced bars, the sales boards (unbranded), the counter, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `SignedBar` or `StackedTotalBar` (retainer floor), `ParameterSlider`, `LiveReadoutBoard`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row e03):
1. **SlicedBar** (new, the strand's key repeated picture; shared with e08, e10, e12): a horizontal bar cut at stated boundaries, each slice tinted by its rate, its amount dropping beneath and adding to a total; a zero-rate slice in grey; a single-colour "top rate on everything" ghost bar; boundaries and rates from data props (commission tiers here, tax brackets in e08). Course-neutral, no labels baked in. Check: $65,000 on 2%, 3.5%, 5% at $20,000 and $50,000 gives 400, 1,050, 750 and 2,200; the ghost gives 3,250.
2. **Decimal slide tag** (small): a percentage tag whose point slides two places left. Check: "2.8%" becomes "0.028".

## Codex asset brief (Maths S11 E03: a strawberry crate on a farm scale; also e04a's anchor)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s11-e03.md`, route entry math-s11-e03. Paint after the learning review and maths check pass and root gives the go-ahead, and before this build (the final frame uses it). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-produce-scale-v1.png` and `maths/ma12-coin-jar-v1.png`; no text, logos, brand names, people, hands, faces, glow or shadow beyond a faint contact shadow (do not repeat the dark glow of `ma12-apple-crate-v1.png`). Never stretch.

1. `ms11-strawberry-crate-scale-v1.png` (about 1500 × 1100 px): a shallow open picking crate (tray) of ripe strawberries in punnets, sitting on a simple farm platform scale with a blank round dial face (no numbers), three-quarter view from slightly above. A **blank** cardboard tag tied to the crate's corner (left plain for coded "$2.35 a crate"). It must read clearly at 300 px. Also e04a's anchor and picture slot.

Report inspection on the paper background (`#f6f1e7`) at 800 px, 600 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms11-e03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly (typographic apostrophe in "individual’s").
3. Confirm the site's `we-1`, card 06 and `we-2` numbers are used unchanged, and that the "rates differ and can change" sentence is said once.
4. Confirm every percentage is used as a decimal except in the crossed slips, and every slice is upper minus lower boundary.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on e02's final frame and scene 11 matches the decisions file's e03 to e04a join.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Commission and Sliding Scale Commission | Year 11 Maths Standard

(Title length: 64 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson03.sa.html

A car salesperson is paid $620 a week plus 2.8% of sales. Learn what commission and a retainer are, why the percentage goes in as a decimal, how to work commission on sales above a threshold, and how a sliding scale pays each rate only on its own slice of the sales. Then work a full sliding scale step by step. This video covers the commission parts of the syllabus point; piecework, royalties, government payments and sole-trader earnings follow in the next two videos. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Commission rates vary by job; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Calculate an individual’s earnings from commission, sliding scale commission, piecework, royalties, government payments and as a sole trader"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: Overtime and Penalty Rates. Next: Piecework and Royalties.

#Year11Maths #MathsStandard #Commission #HSCScience

## Open decisions

- **1. Target sales left out.** The pack's lesson05 target-sales equation (and its practice part (b)) is left out for pace; e04a and e04b teach "how many to reach a target" by dividing and rounding up, which covers the everyday version. Confirm, or root asks for a short scene here.
- **2. The "rates change" sentence.** Commission rates are set by contracts, not by a yearly table, so the ruling 5 sentence is phrased "differ from job to job and can change each year". Confirm.

## Review notes

- Revision 1. Next: student learning review (trace from e02; check that the decimal slide makes 0.028 feel natural, that the grey threshold slice makes "take it off first" obvious, that the sliced bar's ghost shows exactly what goes wrong, that the $25,000 middle slice is clear, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `SlicedBar` before this video.
