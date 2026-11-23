# Maths S11 M01: How do percentage increases and decreases set prices, profit and loss? The multiplier for a rise and a fall, why two changes in a row do not cancel, percentage change measured from the start, and profit or loss on the cost price (design)

Status: Revision 1 (23 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 11 Standard designs (`math-s11-e01.md`, `e12.md`, `f01.md`, each at Revision 2), the coherence audit (`../checks/maths-standard-coherence-audit-2026-11-23.md`, findings B1, B2, N4, N5) and root's Standard rulings 1 to 99 (`../checks/root-rulings-maths-standard-outline.md`; rulings 5, 32, 85 and 87 apply). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,651 characters by script (see "Narration length estimate"), 13 scene headings, about 514 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: first video of the Year 11 Managing money strand, outline playlist order 28. One video for Standard 1 and Standard 2. Viewers arrive from e12's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-m01.md`. Route entry: `math-s11-m01` in `../../programme/maths-standard-route-inputs-10.json`. Site lesson: `year11/managing-money/lesson03.sa.html` (site L11), its multiplier card, profit card and Think First used; its reverse card moves to m02 (route inputs 10). Visual system: maths studio kit; the swing tag and sneakers plates (both existing), the phone plate for the plan and attempt 2, the grocery basket for the final frame; the percentage bar, slider, price ladder and boards coded.

Owner rules applied: 2024 syllabus; plates for real objects, code for diagrams and documents; no people, hands or faces; no course labels or module numbers on screen (header strip shows the focus area only, "MANAGING MONEY"); one question; one stage at a time; words before symbols; plain meanings (multiplier, percentage change, cost price, selling price, profit, loss); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (shopping, a phone plan, a surf shop, a phone sale); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; prices said once to change (scene 1).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Managing money, "Purchasing goods", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-10.json`:

- `cib256693a`: "Apply percentage increase and decrease to determine the cost of goods, and profit and loss"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431

**Boundary:** starts from e12's final frame exactly (the swing tag `ma12-swing-tag-v1.png`, about 360 px tall, its blank lines showing a coded "+3%"; grey strand chip "Earning money: done"; chips "Next: prices go up too" and "?"). This confirms the e12 to m01 join that ruling 87 left provisional; e12's scene 11 and "Next" line need no change except the title (see Open decisions). Recalls e10 (the 2% levy as × 0.02) and e03 (commission as a percentage of sales) in one grey chip; Stage 5 "a percentage of an amount" is assumed, not retaught (audit N4). Teaches: the multiplier for an increase (1 + r%) and a decrease (1 − r%), with a live slider; two changes in a row multiply, so up 10% then down 10% ends 1% lower; percentage change = change ÷ starting amount × 100%; cost price and selling price; profit or loss = selling price − cost price (named once as revenue and cost, for Year 12 a04a); percentage profit or loss on the cost price. Stops at forward percentage changes. Not taught: reverse percentages (m02, with GST), GST (m02), repeated growth over many years (Year 12).

## Decisions

- **Anchor: the e12 tag lands on a pair of sneakers (pack anchor).** `ma11-sneakers-v1.png` has a twine loop on the left shoe; the swing tag hangs from it with "$120". The hook asks the site's Think First question on this price (up 10% in spring, 10% off in the winter sale: back to $120?). The answer comes in scene 4. No people.
- **Callback, not reteach (audit N4).** Scene 2 opens with "You already know how to find a percentage of an amount" and a grey chip "e10: levy = 2% of income = × 0.02". The new idea is adding the percentage on top in one multiplication.
- **Reverse percentages move to m02 (route inputs 10).** m01 stays forward only; m02 meets ÷ 1.1 for GST and teaches "divide by the multiplier" there, once.
- **Percentage change before profit.** Scene 5 teaches "divide by where you started" on a phone plan ($40 to $46, 15%); scene 6 applies the same rule to profit on the cost price. Year 12 i06b's "% change = (last − first) ÷ first × 100%" recalls this wording.
- **Profit names for Year 12 (route inputs 10, year12DependsOn).** "Businesses often call these revenue and cost" is said once in scene 6, so a04a's P = R − C lands as a recall.
- **Year 12 chips set up.** The multiplier line "Up 5%: × 1.05" appears in scene 2 (i02a's grey chip "Year 11: a 5% increase is × 1.05"); the chip "% ÷ 100 = decimal" appears in scene 2 (p01, p06, i01).
- **Simulations (standard item 3).**
  1. **Percent bar with slider** (scene 2 and 3; new `PercentBar`): a 100% block (blue) labelled "$120"; a slider r from −30% to +30% sweeps; the block grows by an amber sliver or loses a violet slice, with live readouts "multiplier 1.03" and "new price $123.60". It sweeps to +3%, +5%, +15%, then down through 0 to −20% ("× 0.80, $96.00").
  2. **Price ladder** (scene 4; new prop on `PercentBar`): three bars side by side, $120 → $132 → $118.80, a dashed line at $120 across all three; the last bar stops short of the line, and the 1% gap is ringed violet "$1.20 short".
  3. **Profit gap** (scene 6): two bars, cost price (blue, $75) and selling price (teal); the gap between their tops is shaded violet and labelled; the selling bar slides from $120 to $96 to $60, and the gap turns into a dip below the cost line, relabelled "loss".
- **Colour roles (fixed m01 to m06, route inputs 10).** Starting amount and cost price **blue**; percentage and multiplier **amber**; new price and selling price **teal**; the change (discount, rise, profit, loss) **violet**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Current working 52 px; bar labels 40 px; readouts 52 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "100% + 3%", "one step", "what's left", "that's the discount", "a % of a different amount", "1% less", "divide by where you started", "what the shop paid", "measured on cost", "loss". At most two live at once.
- **Stage changes (standard item 2).** e12's tag (1); the tag on the sneakers and the percent bar (2); the slider sweeping down (3); the price ladder (4); the phone plan card (5); the profit gap bars (6); framed card (7); question cards (8 to 11); the basket and receipt (12); key notes (13).
- **Worked examples (g01 order).** Each example has a task strip, a givens card (starting amount blue, percentage amber), the multiplier row, the working, a framed green answer, and a crossed slip where one belongs: scene 3 "120 × 0.20 = $24 (price)" crossed, caption "that's the discount"; scene 5 "6 ÷ 46 = 13%" crossed, caption "divide by where you started".
- **Memory aid.** Framed card: "Up r%: × (1 + r%). Down r%: × (1 − r%). Divide by where you started." Key line: "Profit or loss = selling price − cost price, as a % of the cost price."
- **Visual surprise.** The third bar of the price ladder stops below the dashed $120 line (scene 4): equal percentages up and down do not cancel.
- **Plain meanings at first use.** Multiplier ("the one number you multiply by to make the whole change in one step"); percentage change ("the change as a percentage of where you started"); cost price ("what the shop paid for the item"); selling price ("what the customer pays"); profit ("selling price minus cost price, when it's positive"); loss ("when that difference is negative").
- **Attempts.** A1 (pack question 1): wetsuit $64 marked up 45%: $92.80, profit $28.80; crossed "selling price = 64 × 0.45 = $28.80" (caption "that's only the mark-up"). A2 (pack question 2): phone $1250 to $1000, cost price $900: 20% decrease; profit $100 = 11.1% of cost; crossed "250 ÷ 1000 = 25%" (caption "divide by the old price").
- **Mistake scene:** none separate. × 0.20 for 20% off (3, crossed); equal changes cancel (4, the surprise); dividing by the new amount (5, crossed; A2 crossed); the mark-up as the price (A1 crossed); a loss as a negative percentage beside profit wording (6, said: "a loss of fifteen dollars, a twenty per cent loss").
- **Cause chain taught, in order:** (1) a rise keeps the whole price and adds the percentage, so the new price is (100 + r)% of it, one multiplication (2); (2) a fall leaves (100 − r)%, so multiply by what's left (3); (3) a second percentage is taken from the new amount, so equal rises and falls do not cancel and the multipliers multiply (4); (4) a percentage compares a change with a base, and the base is where you started (5); (5) profit is the gap between selling and cost price, and the base for its percentage is what the shop put in, the cost price (6).
- **Entry knowledge (route):** Stage 5 percentages; math-s11-e10 (the levy, × 0.02); math-s11-e03 (commission as a percentage). Recalled in a grey chip.
- **Money sources (rulings 5 and 32).** All prices are invented examples (sneakers, a phone plan, a wetsuit, a phone); none claims a real price. The sentence "Prices change all the time" is said once (scene 1).
- **Site notes.** lesson03 values recalculated: no arithmetic error. The site's "catches out more students in the exam than any other percentage idea" is not repeated (`../site-corrections-maths-standard-y11-additions.md`, MSY-01).
- **Handoff (to math-s11-m02, GST).** Scene 12: the sneakers slide out; the grocery basket `ms12-grocery-basket-v1.png` (about 640 px wide) slides in at the left; a coded receipt card at the right (unbranded, 36 px): "Bread 4.50", "Milk 3.20", "Bananas 3.80", "Chips 5.50", "Soft drink 3.30", "TOTAL $20.30", "includes GST ?" with "?" ringed amber; chips "Next: GST" and "?". m02 opens here.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 120 × 1.03 = 123.60; × 1.05 = 126; × 1.15 = 138; × 0.80 = 96; × 0.20 = 24.
  (b) 120 × 1.10 = 132; 132 × 0.90 = 118.80; 13.20 = 10% of 132; 1.10 × 0.90 = 0.99; 120 − 118.80 = 1.20 = 1% of 120.
  (c) (46 − 40) ÷ 40 = 0.15; 6 ÷ 46 = 0.1304 (about 13%, the slip).
  (d) 120 − 75 = 45, 45 ÷ 75 = 0.60; 96 − 75 = 21, 21 ÷ 75 = 0.28; 60 − 75 = −15, 15 ÷ 75 = 0.20.
  (e) A1: 64 × 1.45 = 92.80; 92.80 − 64 = 28.80; 64 × 0.45 = 28.80. A2: 250 ÷ 1250 = 0.20; 1000 − 900 = 100; 100 ÷ 900 = 0.1111 → 11.1%; 250 ÷ 1000 = 0.25.
  (f) Pronunciations: "one point nought three"; "nought point eight"; "a hundred and twenty-three dollars sixty".

Main question: *Prices go up and down by percentages. How do percentage increases and decreases set prices, profit and loss?*
Entry knowledge (Stage 5; math-s11-e10, e03): a percentage of an amount; a percentage as a decimal.
Stops after: multipliers, two changes in a row, percentage change, profit and loss on the cost price. No reverse percentages.
Handoff: math-s11-m02: "includes GST ?".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): starting amount and cost price blue; percentage and multiplier amber; new price and selling price teal; the change violet; answer green; mistake red. Header strip "MANAGING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: prices go up too
> Last time ended with a three per cent pay rise. But prices go up by percentages too, and they come down in sales, and they change all the time. Here's a pair of sneakers, a hundred and twenty dollars. Suppose the shop puts the price up ten per cent in spring, then takes ten per cent off in the winter sale. Is the price back to a hundred and twenty dollars? Most people say yes. Hold that thought. How do percentage increases and decreases set **prices**, and how does a shop work out its profit, or its **loss**?

Visual: opens on e12's final frame exactly (the swing tag with "+3%", the grey chip "Earning money: done", chips "Next: prices go up too", "?"). On "prices go up" the chips fade and the sneakers `ma11-sneakers-v1.png` (about 900 px wide) slide in from the right; the tag swings onto the twine loop of the left shoe and its "+3%" wipes to "$120" (blue, 48 px). On "up ten per cent" a small amber tag "+10%" appears above; on "ten per cent off" a violet tag "−10%". On "back to a hundred and twenty" a grey chip "back to $120?" with "?" ringed amber; it moves to the top right and stays until scene 4. On "prices" heading "Percentage change, profit and loss" writes on; on "loss" two empty grey chips "profit?" and "loss?" sit under the shoes.

### 2. a percentage increase in one step
> You already know how to find a percentage of an amount. The Medicare levy was two per cent of income, so you multiplied by nought point nought two. A price rise adds a percentage on top. Three per cent more than a hundred and twenty dollars is a hundred per cent of the price, plus three per cent. That's a hundred and three per cent, or one point nought **three**. So the new price is a hundred and twenty times one point nought three, a hundred and twenty-three dollars **sixty**. That one number, one point nought three, is called the multiplier. It's the number you multiply by to make the whole change in one step. Up five per cent is times one point nought five. Up fifteen per cent is times one point one **five**.

Visual: stage change (simulation 1): the sneakers shrink to the top left (420 px). Centre: the `PercentBar`, a 100% block (blue, 1,100 × 120 px) labelled "100% = $120". On "You already know" a grey chip "e10: levy = 2% of income = × 0.02" and a second grey chip "% ÷ 100 = decimal". On "adds a percentage on top" an amber sliver (3%, drawn at least 40 px with a zoom tag "3%") joins the right end; hand tag "100% + 3%". On "three" the label reads "103% = × 1.03" (amber, 52 px). On "sixty" the readout "new price = 120 × 1.03 = $123.60" (teal, 52 px), framed green. On "the multiplier" hand tag "one step". On "five" the slider r appears under the bar and slides to +5%: readouts "× 1.05" and "$126.00"; on "five" (last) it slides to +15%: "× 1.15", "$138.00". Grey chip stays: "Up 5%: × 1.05".

### 3. a percentage decrease
> A decrease works the same way, but you take the percentage away. Twenty per cent off leaves eighty per cent of the price, so the multiplier is nought point **eight**. A hundred and twenty times nought point eight is ninety-six **dollars**. A common slip is to multiply by nought point two. That gives twenty-four dollars, which is the discount, the amount you **save**, not the price you **pay**. If the question wants the price, use what's left, eighty per **cent**.

Visual: the slider sweeps down from +15% through 0 (the bar back to "100% = $120") to −20%: a violet slice (20%) lifts off the right end of the blue block and drifts aside, labelled "20% off = $24". On "eight" the label on what stays reads "80% left = × 0.80" (amber), hand tag "what's left". On "dollars" readout "120 × 0.80 = $96.00" (teal), framed green. On "save" a red slip "price = 120 × 0.20 = $24" writes beside the violet slice; on "pay" it is crossed, caption "that's the discount". On "cent" the 80% block pulses.

### 4. two changes in a row
> Now the sneakers question. Up ten per cent is times one point one, so a hundred and twenty becomes a hundred and thirty-**two**. Then ten per cent off is times nought point nine. But the ten per cent is now taken from a hundred and thirty-two, so it's thirteen dollars twenty, not twelve. The price ends at a hundred and eighteen dollars **eighty**. It's not back where it started. Two changes in a row multiply. One point one times nought point nine is nought point nine nine, which is one per cent **less**. The second change is a percentage of a different **amount**. And the order doesn't matter. Ten per cent off first, then ten per cent up, also ends at a hundred and eighteen dollars **eighty**.

Visual: stage change (simulation 2): the price ladder, three bars (each 220 px wide) on a baseline, a dashed grey line at $120 across all three. Bar 1 "$120" (blue). On "two" bar 2 rises to "$132" (teal) with an amber "× 1.1" arrow between. On "thirteen dollars twenty" a violet chip "10% of $132 = $13.20" beside bar 2. On "eighty" bar 3 drops to "$118.80" (teal) with an amber "× 0.9" arrow; it stops below the dashed line; the gap is ringed violet "$1.20 short". The hook chip "back to $120?" gets an amber cross and "no". On "less" a row "1.1 × 0.9 = 0.99" (amber, 52 px) and hand tag "1% less". On "amount" hand tag "a % of a different amount". On "the order doesn't matter" a second, smaller ladder (bars 160 px) writes under the first: "$120 → × 0.9 → $108 → × 1.1 → $118.80"; on "eighty" (second) both final bars ring together, grey chip "0.9 × 1.1 = 1.1 × 0.9".

### 5. percentage change: divide by where you started
> Sometimes you know the two prices and need the percentage. A phone plan goes from forty dollars a month to forty-six. The change is six dollars. As a percentage, compare it with where you started. Six divided by forty, times a hundred, is fifteen per **cent**. Always divide by the starting amount, the old price. Dividing by forty-six, the new price, gives about thirteen per cent, and that's **wrong**. It works for a fall too. If the plan dropped from forty dollars to thirty-four, that's six dollars on forty, a fifteen per cent **decrease**. Percentage change equals the change, divided by the starting amount, times a hundred per **cent**.

Visual: stage change: the phone plate `ma11-phone-budget-v1.png` (about 380 px tall) at the left, its blank screen showing a coded plan card "Plan: $40 a month → $46 a month" (36 px). Centre board (g01 layout): task strip "A phone plan goes from $40 to $46 a month. Find the percentage increase."; givens card "start = $40" (blue), "new = $46" (teal); row "change = 46 − 40 = $6" (violet). On "cent" row "6 ÷ 40 × 100% = 15%" (52 px), framed green; hand tag "divide by where you started". On "wrong" a red slip "6 ÷ 46 = 13%" writes and is crossed, caption "divide by where you started". On "a fall too" the plan card changes to "$40 → $34"; on "decrease" row "6 ÷ 40 × 100% = 15% decrease" (framed green). On "per cent" (last) formula strip, 44 px: "% change = change ÷ starting amount × 100%".

### 6. profit and loss on the cost price
> Shops use the same idea for profit. The cost price is what the shop paid for an item, and the selling price is what you pay. Say the shop paid seventy-five dollars for these sneakers, and sells them for a hundred and twenty. The profit is selling price minus cost price, forty-five **dollars**. Businesses often call these revenue and cost. As a percentage, profit is measured on the cost price, what the shop put in. Forty-five divided by seventy-five is sixty per **cent**. Why bother with a percentage? Forty-five dollars profit on a seventy-five dollar pair of sneakers is a much better deal than forty-five dollars on a three hundred dollar **bike**. The percentage lets you compare deals of different sizes fairly. In the sale at ninety-six dollars, the profit is only twenty-one dollars, twenty-eight per **cent**. Clear them out at sixty dollars, and selling price minus cost price is negative fifteen. That's a loss of fifteen dollars, a twenty per cent **loss**, still measured on the seventy-five dollars the shop **paid**.

Visual: stage change (simulation 3): the sneakers (500 px) at the top left with the tag "$120". Two bars on a shared baseline: "cost price $75" (blue, hand tag "what the shop paid") and "selling price $120" (teal). On "dollars" the gap above the blue bar's top shades violet "profit = 120 − 75 = $45". On "revenue and cost" a small grey chip "selling price = revenue; cost price = cost". On "cent" row "45 ÷ 75 × 100% = 60%" (52 px), framed green, hand tag "measured on cost". On "bike" a small grey comparison strip writes at the right: "$45 on $75 = 60%" beside "$45 on $300 = 15%", hand tag "fair to compare". On "twenty-eight" the selling bar slides down to "$96": the gap shrinks, "96 − 75 = $21; 21 ÷ 75 = 28%". On "loss" the selling bar slides to "$60", below the cost line; the violet now sits as a dip under the blue bar's top, relabelled "loss = 75 − 60 = $15; 15 ÷ 75 = 20% loss" (framed green). On "paid" the blue bar pulses.

### 7. memory aid
> Here's the summary. Up r per cent, multiply by one plus r per cent. Down r per cent, multiply by one minus r per cent. And for any percentage change, or a profit or loss, divide by where you **started**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the percent bar with its sliver and its cut slice, and the profit gap bars. Main line, hand font 56 px: "Up r%: × (1 + r%). Down r%: × (1 − r%). Divide by where you started." On "started" the key line, 40 px: "Profit or loss = selling price − cost price, as a % of the cost price." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A surf shop buys a wetsuit for sixty-four dollars and marks it up by forty-five per cent. Find the selling price, and the profit on each wetsuit. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A surf shop buys a wetsuit for $64 and marks it up by 45%. (a) Find the selling price. (b) Find the profit on each wetsuit." Picture slot: a coded price tag "cost $64, mark-up 45%". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The multiplier is one point four five. Sixty-four times one point four five is ninety-two dollars **eighty**. The profit is ninety-two eighty minus sixty-four, twenty-eight dollars **eighty**. Writing sixty-four times nought point four five as the selling price is the **slip**. That's only the mark-up.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "eighty" (first) "64 × 1.45 = $92.80" (teal), framed green; on "eighty" (second) "92.80 − 64 = $28.80" (violet), framed green. On "slip" a red slip "selling price = 64 × 0.45 = $28.80" writes and is crossed (caption "that's only the mark-up"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A phone's price drops from twelve hundred and fifty dollars to a thousand dollars in a sale. The shop paid nine hundred dollars for it. Find the percentage decrease in price. Then find the profit at the sale price, as a percentage of the cost price, to one decimal place. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A phone's price drops from $1250 to $1000 in a sale. The shop paid $900 for it. (a) Find the percentage decrease in price. (b) Find the profit at the sale price as a percentage of the cost price, correct to one decimal place." Picture slot: the phone plate (300 px) with a coded "$1250 → $1000". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The drop is two hundred and fifty dollars, and two-fifty divided by twelve-fifty is twenty per **cent**. The profit is a thousand minus nine hundred, a hundred dollars, and a hundred divided by nine hundred is eleven point one per **cent**. Dividing two-fifty by the new price, a thousand, to get twenty-five per cent, is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "cent" (first) "250 ÷ 1250 × 100% = 20%" (framed green); on "cent" (second) "1000 − 900 = $100; 100 ÷ 900 × 100% = 11.1%" (framed green, hand tag "measured on cost"). On "slip" a red slip "250 ÷ 1000 = 25%" writes and is crossed (caption "divide by the old price"). Hold about 1 s.

### 12. handoff
> So a percentage change is one multiplication, and a percentage is always measured from where you started. Now, at the supermarket, some prices already have a tax inside them. The receipt says it includes GST. How much of that total is tax, and why don't some items have any? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): the grocery basket `ms12-grocery-basket-v1.png` (about 640 px wide) at the left; on "supermarket" the coded receipt card writes on line by line at the right ("Bread 4.50", "Milk 3.20", "Bananas 3.80", "Chips 5.50", "Soft drink 3.30", "TOTAL $20.30"); on "includes GST" the line "includes GST ?" with "?" ringed amber. On "next" chips "Next: GST" and "?". Hold about 2 s. This is m02's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Up r%: × (1 + r%). 3% up: × 1.03. 5% up: × 1.05.
- Down r%: × (1 − r%). 20% off: × 0.80 (not × 0.20).
- Two changes multiply: × 1.1 then × 0.9 = × 0.99.
- % change = change ÷ starting amount × 100%.
- Profit = selling price − cost price; % profit or loss on the cost price.

Memory aid (framed card, right side, as in scene 7): *Up r%: × (1 + r%). Down r%: × (1 − r%). Divide by where you started.* Key: *Profit or loss = selling price − cost price, as a % of the cost price.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and m02's opening frame.

## Teaching checks

- **Does it explain causes?** Why × 1.03: the whole price stays and 3% is added (2). Why × 0.80: 80% is left (3). Why up 10% then down 10% falls short: the second 10% is of $132 (4). Why divide by the start: a percentage compares a change with its base (5). Why percentage profit uses the cost price: it measures the return on what the shop put in (6).
- **Misconceptions addressed:** × 0.20 for 20% off (3, crossed); equal changes cancel (4); dividing by the new amount (5 and A2, crossed); the mark-up as the price (A1, crossed); loss wording (6).
- **Visual standard, item by item:** 1 the tag on the sneakers in the first 20 s; 2 a new stage every 40 to 60 s; 3 the slider sweeping the percent bar with live readouts, the price ladder, the sliding profit bar; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 order with framed answers and crossed slips; 8 framed card and five bullets; 9 the third bar stopping under the $120 line.
- **One idea at a time:** rise (2), fall (3), two in a row (4), percentage change (5), profit and loss (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 22 s and 24 s.
- **Avoided double teaching:** a percentage of an amount (Stage 5, e03, e10) recalled in a chip; reverse percentages left to m02.
- **Syllabus coverage:** `cib256693a` (2 to 6, A1, A2; key notes 1 to 5).
- **Out of scope by design:** reverse percentages; GST; repeated growth.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** "A surf shop buys a wetsuit for $64 and marks it up by 45%. (a) Find the selling price. (b) Find the profit on each wetsuit."
Model answer: (a) 64 × 1.45 = $92.80. (b) 92.80 − 64 = $28.80. Classic mistake (crossed): "selling price = 64 × 0.45 = $28.80".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** "A phone's price drops from $1250 to $1000 in a sale. The shop paid $900 for it. (a) Find the percentage decrease in price. (b) Find the profit at the sale price as a percentage of the cost price, correct to one decimal place."
Model answer: (a) 250 ÷ 1250 × 100% = 20%. (b) 1000 − 900 = $100; 100 ÷ 900 × 100% = 11.1%. Classic mistake (crossed): "250 ÷ 1000 = 25%".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Rise | 120 × 1.03 = 123.60; × 1.05 = 126; × 1.15 = 138 | 2 |
| Fall | 120 × 0.80 = 96; slip 120 × 0.20 = 24 | 3 |
| Two changes | 132; 13.20; 118.80; 0.99; 1.20 short; other order 108, 118.80 | 4 |
| Phone plan | 6; 15%; slip about 13%; $40 to $34: 15% decrease | 5 |
| Profit | 45, 60%; $45 on $300 = 15%; 21, 28%; loss 15, 20% | 6 |
| A1 | 92.80; 28.80; slip 28.80 | 8, 9 |
| A2 | 250, 20%; 100, 11.1%; slip 25% | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (23 Nov 2026, scratchpad `s11m/verify.py`, `python -I`; 0 failures); Codex to re-check.

- 120 × 1.03 = 123.60; 120 × 1.05 = 126.00; 120 × 1.15 = 138.00; 120 × 0.80 = 96.00; 120 × 0.20 = 24.00.
- 120 × 1.10 = 132.00; 0.10 × 132 = 13.20; 132 × 0.90 = 118.80; 1.10 × 0.90 = 0.99; 120 − 118.80 = 1.20; 120 × 0.90 = 108; 108 × 1.10 = 118.80.
- (46 − 40) ÷ 40 × 100 = 15; 6 ÷ 46 × 100 = 13.04; (40 − 34) ÷ 40 × 100 = 15.
- 120 − 75 = 45; 45 ÷ 75 = 0.60; 45 ÷ 300 = 0.15; 96 − 75 = 21; 21 ÷ 75 = 0.28; 75 − 60 = 15; 15 ÷ 75 = 0.20.
- 64 × 1.45 = 92.80; 92.80 − 64 = 28.80; 64 × 0.45 = 28.80.
- 1250 − 1000 = 250; 250 ÷ 1250 = 0.20; 1000 − 900 = 100; 100 ÷ 900 = 0.1111 → 11.1%; 250 ÷ 1000 = 0.25.

## Memory aid check

- **"Up r%: × (1 + r%). Down r%: × (1 − r%). Divide by where you started."** with key line **"Profit or loss = selling price − cost price, as a % of the cost price."** Original (the site's multiplier rules, joined to its "divide by the cost price" warning). Meaning, as said in scene 7: a change is one multiplication, and a percentage is measured against its starting amount. Assumptions checked: r is a percentage of the current amount (scene 4 shows that a second change uses the new amount); "where you started" is the cost price for profit (6). It helps a new case: a $50 game up 8% is 50 × 1.08 = $54, and from $54 back to $50 is a 7.4% fall, because the start is now $54. Introduced after scenes 2 to 6. Year 12 i02a's chip "a 5% increase is × 1.05" and i06b's percentage change recall this card.
- **Considered, not used:** "Percent means per hundred" (true, but Stage 5 and not the new idea).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,651 characters**, 13 scene headings. Characters per scene (1 to 13): 506, 709, 447, 682, 629, 1010, 199, 178, 291, 303, 323, 287, 75.

At 13.3 characters per second the speech is about 425 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the slider sweeps (2, 3), the ladder (4) and the profit bars (6), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 514 s**, 56 s under the 570 s cap. Feedback speech: about 21.9 s and 24.3 s.

Reserve trims if the voiced take runs long: scene 2's "Up fifteen per cent is times one point one five." (the slider shows it); scene 6's "Businesses often call these revenue and cost." moves to an on-screen chip only (it must stay on screen for Year 12 a04a).

## Scene list and build ids

Lesson key `m-s11m01` (route math-s11-m01). Explainer folder `src/explainer/lessons/math-s11-m01`; build inputs in `docs/production/claude-pm/lessons/math-s11-m01/` (at voicing).

In order (13 scene headings): hook-prices-go-up, increase-one-step, decrease, two-changes, percentage-change, profit-and-loss, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | e12's tag lands on the sneakers |
| 40 to 105 s | 2 | Percent bar and slider: a rise |
| 105 to 145 s | 3 | Slider down: a fall |
| 145 to 190 s | 4 | Price ladder |
| 190 to 230 s | 5 | Phone plan board |
| 230 to 295 s | 6 | Profit gap bars |
| 295 to 315 s | 7 | Framed memory card |
| 315 to 425 s | 8 to 11 | Question cards and countdowns, then feedback |
| 425 to 450 s | 12 | The basket and receipt |
| 450 to 495 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e12's last frame continues into 1; 1 to 2 camera continue (the sneakers shrink, the bar grows); 2 to 3 continue (the slider keeps moving); 3 to 4 stage change; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-m01-learning-review.md`, `science_check` = `checks/m-s11-m01-maths-check.md`.

## Assets

Inspected before choosing (23 Nov 2026, `public/assets/maths`, opened and viewed): `ma12-swing-tag-v1.png` (blank cream tag on a twine loop, four ruled lines, true alpha); `ma11-sneakers-v1.png` (a pair of white sneakers with green laces and a twine loop on the left shoe, true alpha); `ma11-phone-budget-v1.png` (a navy phone with a blank dark screen, front view); `ms12-grocery-basket-v1.png` (a red basket with bread, milk, bananas, apples, pasta, a tin, eggs and cheese).

Need: none new. Reused: the four plates above.

Coded: the percent bar and slider, the price ladder, the plan card, the profit bars, the receipt, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `PlateFields`, `HandTag`, `StudioPlot`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row m01):
1. **`PercentBar`**: a 100% block with a value label; a slider r (−30% to +30%) adds an amber sliver or removes a violet slice, with live readouts (multiplier, new value); slivers under 40 px drawn at 40 px with a zoom tag. Check: r = +3% gives "× 1.03" and "$123.60"; r = −20% gives "× 0.80" and "$96.00".
2. **Price ladder** (a `PercentBar` mode): successive bars with multiplier arrows and a dashed reference line. Check: $120, $132, $118.80, with the last bar under the line.
3. **Gap bars**: two bars on one baseline with the gap shaded and labelled; the second bar can slide, and the gap flips to a dip labelled "loss". Shared with m03 and m04 (fee and extra-cost gaps).

## Codex asset brief

No new plate. All four plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic.
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm every price is presented as an example and the "change all the time" sentence is said once.
4. Confirm the spoken forms match the screen.
5. Confirm both attempts carry every demand and show no answer.
6. Confirm scene 1 opens on e12's final frame exactly as e12 specifies, and scene 12 matches m02's boundary.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Percentage Change, Profit and Loss | Year 11 Maths Standard

(Title length: 60 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/managing-money/lesson03.sa.html

A price goes up 10%, then comes down 10% in a sale. Is it back where it started? Learn the multiplier that makes any percentage increase or decrease one step, see why two changes in a row don't cancel, find a percentage change by dividing by where you started, and work out a shop's profit or loss as a percentage of the cost price. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. All prices are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Managing money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Apply percentage increase and decrease to determine the cost of goods, and profit and loss"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431

Builds on: Tax Scenarios in a Spreadsheet. Next: GST and VAT: Adding and Removing the Tax.

#Year11Maths #MathsStandard #Percentages #HSCScience

## Open decisions

- **1. e12's "Next" line.** e12's description says "Next: percentage increase and decrease." Root may replace it with this title ("Percentage Change, Profit and Loss"); its scene 11 frame is used exactly, so no picture or narration change is needed, and its "(provisional)" marks can be lifted (ruling 87).
- **2. Header strip.** "MANAGING MONEY" only (owner rule of 23 Nov). The e, f and l designs show "MATHEMATICS STANDARD · ..."; root decides whether to align them.
- **3. Reverse percentages in m02.** Confirm the move (route inputs 10).

## Review notes

- Revision 1. Next: student learning review (trace from e12 for a student who knows a percentage of an amount; check that the multiplier comes from "100% + 3%" before any symbol, that the slider makes the fall obvious, that the ladder settles the hook, that "divide by where you started" carries both scene 5 and scene 6, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `PercentBar` before this video.
