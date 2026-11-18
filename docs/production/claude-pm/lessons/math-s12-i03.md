# Maths S12 I03: How do inflation and appreciation use the compound interest formula? Prices that compound, a past price by working backwards, savings that lose buying power, and an asset that appreciates (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; ruling 3 allows syllabus-only teaching for missing site content, which inflation as compound growth and appreciation are; ruling 30 sends Standard 1 from here to i05). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,264 characters by script (see "Narration length estimate"), 13 scene headings, about 485 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fourth video of the Year 12 Investment and loans strand, outline playlist order 16. Shared by Standard 1 and Standard 2 (identical content). Its final frame serves both routes: Standard 2 goes to i04, Standard 1 to i05. Pre-design pack: `../pre-design/maths-standard/math-s12-i03.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson11.sa.html` (SHA256 `3b17ea73c3ff3b8f2da6488fb83be639d528b8811a78e96019617f53e56962b4`; Trap 01's "A 5% savings account with 4% inflation ... barely preserving wealth", used as the idea of scene 5, not its subtraction rule) and `lesson06.sa.html` (the formula only). The site never grows a price with the formula and never mentions appreciation (logged gaps); this teaching is original (ruling 3). Route entry: `math-s12-i03` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; the grocery basket (painted for i02b's final frame), one new plate for appreciation (an investment unit), one new plate for i04's anchor in the final frame (a salon chair), and the reused coffee cart; ladders, bars and boards coded.

Owner rules applied: as i01 (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings (inflation, CPI, appreciation, buying power); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (the weekly shop, a haircut, savings, an investment unit, a guitar); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Investment and loans (Standard 2) and Investment (Standard 1)), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form):

Standard 2:
- `ci1256741b`: "Solve problems involving compound interest in a variety of contexts, including inflation and appreciation"

Standard 1:
- `cicf066fd6`: "Solve problems involving compound interest in a variety of contexts, including inflation and appreciation"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6 (Standard 1)

**Boundary:** starts from i02b's final frame exactly (the grocery basket `ms12-grocery-basket-v1.png` with the coded tag "this week: $200"; the empty five-rung ladder "$200 → × ? → … → ? in 5 years"; the grey chip "prices go up by a percentage each year"; chips "Next: inflation and appreciation" and "?"). Recalls i02a (FV = PV(1 + r)ⁿ, × (100% + r%) each period) and i02b (back in time: ÷ (1 + r)ⁿ) in a phrase or grey chip. Teaches: inflation as the general rise in prices, measured each year by the CPI (one real figure, 4.3%, with its source); a future price as FV = PV(1 + r)ⁿ with r the inflation rate; why prices compound rather than add (the slip); a model with one steady rate is an estimate; a past price by dividing (and why × 0.97 is wrong); buying power: savings earning less than inflation buy less, even with more dollars (one comparison, no "real return" rule); appreciation as an asset's value rising by a percentage each year, with the same formula, and the risk that values can fall. Stops at inflation and appreciation. Not taught: the real-return subtraction rule (pack: an unlabelled approximation); depreciation (i09 to i11); the effect of each input (i04).

## Decisions

- **Anchor: the weekly grocery shop (painted plate from i02b, live).** $200 a week; the ABS's annual CPI rise to September 2026, 4.3%, held for 5 years as an assumption: 200 × 1.043⁵ = $246.86 (pack anchor 1). Food is the price every student notices. Plate: `ms12-grocery-basket-v1.png` (briefed in i02b, painted one video early). No people.
- **Past price: an assumed 3% a year.** 200 ÷ 1.03⁴ = $177.70; the crossed slip 200 × 0.97⁴ = $177.06 (close, but wrong: 1.03 × 0.97 = 0.9991, not 1). Original; the pack names "FV × (1 − r)ⁿ" as the trap.
- **Buying power: one comparison.** $1,000 at 4% for 5 years: $1,216.65; the $200 shop then costs $246.86; baskets: 5 now, about 4.93 then. Original (the site's Trap 01 idea, "barely preserving wealth", made visible). No subtraction rule (pack decision).
- **Appreciation: an investment unit (new plate).** $650,000 in a NSW regional city at an assumed 5% a year for 3 years: $752,456.25 (pack anchor 3). Said plainly: values can fall. Plate: `ms12-investment-unit-v1.png` (new; a small block of townhouse-style units; reused in i08). Not the apartment building (f12's signature plate, kit-needs list).
- **Notation.** FV = PV(1 + r)ⁿ, the same strip as i02a and i02b, with "price" or "value" tags written over "FV" and "PV" (pack decision: keep the formula fixed and change the words).
- **Join.** Scene 1 opens on i02b's final frame exactly; the empty ladder fills in scene 2.
- **Simulations (standard item 3).**
  1. **Price-tag ladder** (scene 2; `StudioTermLadder` relabelled): the basket's coded tag rewrites year by year ($200.00, $208.60, $217.57, $226.93, $236.68, $246.86) as each × 1.043 arrow lights.
  2. **Compound against add-on** (scene 3): two bars from $200: equal $8.60 blocks (grey, simple) against growing blocks (amber), ending at $243 and $246.86.
  3. **Baskets you can buy** (scene 5; `GrowthBars` with basket icons coded as small outlines): five basket outlines fill under "$1,000 now"; under "$1,216.65 in 5 years" four full outlines and a 93% outline, as the account bar grows and each basket's price tag rises.
  4. **Value tag climbing** (scene 6; `PlateFields` on the unit plate): $650,000 → $682,500 → $716,625 → $752,456.25, with a dashed grey "can fall" branch drawn below once.
- **Colour roles (fixed for i01 to i05, extended).** Today's price or value (PV) **violet**; the rate and multiplier **amber**; the future price or value in ink (framed green as an answer); savings balance **teal**; simple add-on blocks grey; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As i01. Hand tags: "prices rise on last year's prices", "× 1.043 each year", "same formula, new words", "estimate, not a promise", "add-on: simple", "back in time: ÷", "1.03 × 0.97 ≠ 1", "more dollars, fewer baskets", "assumption, not a forecast", "values can fall". At most two live at once.
- **Stage changes (standard item 2).** i02b's frame and the CPI source chip (1); the price-tag ladder (2); compound against add-on (3); g01 board, a past price (4); the account and the baskets (5); the unit and its value tag (6); framed card (7); question cards (8 to 11); the two-route frame for i04 and i05 (12); key notes (13).
- **Worked examples (g01 layout).** 2 and 3: task strip "A weekly shop costs $200. If inflation stays at 4.3% p.a., estimate the cost in 5 years."; givens card "price now (PV) = $200" (violet), "r = 4.3% = 0.043" (amber), "n = 5 years"; framed answer "≈ $246.86 a week"; crossed slip "200 + 200 × 0.043 × 5 = $243" (caption "prices compound, not add"). 4: task strip "Prices rose 3% a year. What did a $200 shop cost 4 years ago?"; framed answer "≈ $177.70"; crossed slip "200 × 0.97⁴ ≈ $177.06" (caption "back in time: ÷ 1.03"). 6: task strip "A $650 000 unit appreciates at an assumed 5% p.a. Find its value after 3 years."; framed answer "$752 456.25".
- **Memory aid.** Framed card: "Same formula, new words: price or value × (1 + r)ⁿ." Key line: "Inflation: prices rise. Appreciation: an asset's value rises. Back in time: ÷ (1 + r)ⁿ. One steady rate is an estimate."
- **Visual surprise.** The account bar grows, yet the row of baskets it can buy shrinks from five to under five (scene 5).
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` section 5).** The site's only inflation idea is "real return = nominal − inflation", an approximation it does not label; it is not taught (pack decision). `we-1`'s numbers are not used. The CPI figure replaces the site's older 2.5% and 3% for the hook; 3% and 3.5% stay as labelled assumptions in scene 4 and A1.
- **Plain meanings at first use.** Inflation ("prices in general rising over time"); CPI, consumer price index ("the ABS's measure of how much a typical basket of goods and services costs"); buying power ("how much your money can buy"); appreciation ("an asset's value rising over time"); asset ("something you own that has value").
- **Attempts.** A1 (pack question 1, a haircut in place of the grocery bill so the anchor is not repeated; 3.5% kept): 45 × 1.035⁴ = $51.64; increase $6.64; crossed "45 + 45 × 0.035 × 4 = $51.30" (caption "prices compound, not add"). A2 (pack question 2, the guitar): 2400 × 1.06⁵ = $3,211.74; 2400 × 1.03⁵ = $2,782.26; yes, 6% > 3%; crossed "2400 × 1.06 × 5 = 12 720" (caption "× 5 is not to the power 5").
- **Mistake scene:** none separate. Adding the rate each year (3 crossed, A1 crossed); × (1 − r) to go back (4 crossed); × n for the power (A2 crossed); "money in the bank is safe from inflation" (5, said); "values only rise" (6, said).
- **Cause chain taught, in order:** (1) each year's price rise is a percentage of the current price, which already includes last year's rises, so prices compound (2, 3); (2) so a future price is FV = PV(1 + r)ⁿ with r the inflation rate (2); (3) real inflation changes every year, so one steady rate gives an estimate (3); (4) going back a year undoes × (1 + r), which is ÷ (1 + r); × (1 − r) is not the undo, because (1 + r)(1 − r) is not 1 (4); (5) if savings multiply by less than prices do, the same balance buys less each year (5); (6) an asset's value that rises by a percentage of its current value compounds the same way, but nothing guarantees the rise (6).
- **Entry knowledge (route):** i02a and i02b (FV, PV, × and ÷ (1 + r)ⁿ); Year 11 Standard m01 (percentage increase) and m08 (budgeting, a regular cost). Recalled in a phrase or grey chip.
- **Standard 1 path.** Identical content; substitution and division only. Standard 1 viewers go next to i05, so the final frame's right panel does not rely on i04.
- **Money sources (root ruling 32).** CPI: "CPI rose 4.3% in the year to September 2026" (ABS media release, 28 October 2026, https://www.abs.gov.au/media-centre/media-releases/cpi-rose-43-year-september-2026, read 18 Nov 2026 by the pack), shown as a source chip and said once. The RBA expects inflation above 3% until late 2027 (Statement on Monetary Policy, November 2026, https://www.rba.gov.au/publications/smp/2026/nov/overview.html) (design record only). The 4% savings rate, 3% and 3.5% inflation, 5% and 6% appreciation and the $650,000 unit price are labelled assumptions or examples. Narration says once that "rates change every year".
- **Handoff (two routes; to math-s12-i04 for Standard 2 and math-s12-i05 for Standard 1).** Scene 12, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: a thin grey rule splits the frame. Left panel, "Standard 2": the new salon chair plate `ms12-salon-chair-v1.png` (600 px tall) with a coded tag "equipment fund: $10,000"; three small amber chips "higher rate?", "longer?", "added more often?"; chip "Standard 2 next: what changes the future value?". Right panel, "Standard 1": the coffee cart `ma11-coffee-cart-v1.png` (600 px wide) with two coded account cards beside it, "paid out" (blue bar) and "left in" (teal bar), each "$5,000 at 6% p.a.", and the grey chip "side by side: how far apart?"; chip "Standard 1 next: simple against compound". Chips "Next" and "?". No values beyond those shown. i04 opens on this frame and fades the right panel; i04's final frame repeats the right panel full-frame, so i05 opens on the same picture from either route.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Shop: 200 × 1.043ⁿ at n = 0 to 5: 200, 208.60, 217.5698, 226.9253, 236.6831, 246.8605 ≈ 246.86. Add-on: 200 + 8.6 × 5 = 243.
  (b) Past price: 200 ÷ 1.03⁴ = 177.6974 ≈ 177.70; slip 200 × 0.97⁴ = 177.0586 ≈ 177.06; 1.03 × 0.97 = 0.9991.
  (c) Buying power: 1000 × 1.04⁵ = 1216.6529 ≈ 1216.65; 1216.6529 ÷ 246.8605 = 4.9285 ≈ 4.93 baskets; 1000 ÷ 200 = 5.
  (d) Unit: 650 000 × 1.05ⁿ: 682 500, 716 625, 752 456.25.
  (e) A1: 45 × 1.035⁴ = 51.6385 ≈ 51.64; increase 6.6385 ≈ 6.64; slip 45 + 45 × 0.035 × 4 = 51.30.
  (f) A2: 2400 × 1.06⁵ = 3211.7414 ≈ 3211.74; 2400 × 1.03⁵ = 2782.2578 ≈ 2782.26; slip 2400 × 1.06 × 5 = 12 720.
  (g) Pronunciations: "one point zero four three"; "two hundred and forty-six dollars and eighty-six cents"; "seven hundred and fifty-two thousand, four hundred and fifty-six dollars and twenty-five cents"; "C P I".

Main question: *A $200 weekly shop, with prices rising 4.3% a year: how do inflation and appreciation use the compound interest formula?*
Entry knowledge (i02a, i02b): FV = PV(1 + r)ⁿ forwards and backwards.
Stops after: future and past prices, buying power, appreciation and its risk. No real-return rule, no depreciation.
Handoff: Standard 2, math-s12-i04: "a $10,000 fund: a higher rate, longer, or added more often?"; Standard 1, math-s12-i05: "paid out against left in, side by side: how far apart?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): today's price or value violet; rate amber; savings teal; add-on grey; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the weekly shop
> Here's the weekly shop, two hundred dollars. Inflation means prices in general going up over time. The Australian Bureau of Statistics measures it with the consumer price index, the cost of a typical basket of things people buy. In the twelve months to September twenty twenty-six, it rose four point three per **cent**. Rates like this change every year. But if prices kept rising four point three per cent a year, what would this shop cost in five years? And what about things that grow in value, like property? How do inflation and appreciation use the compound interest **formula**?

Visual: opens on i02b's final frame exactly (the basket with "this week: $200", the empty ladder, the grey chip, chips). On the first sentence the "Next" chip fades. On "consumer price index" a grey chip "CPI: the cost of a typical basket of goods and services". On "cent" a source chip, 32 px: "ABS: CPI rose 4.3% in the year to September 2026 (released 28 Oct 2026)", and an amber tag "4.3%" on the basket. On "change every year" a grey chip "rates change every year". On "like property" a small ghost of a unit outline at the right (grey). On "formula" heading "Inflation and appreciation" writes on, and the question chip "Same formula?" moves to the top right.

### 2. prices compound
> Prices rise on last year's prices, just like interest on interest. So each year, the price is multiplied by a hundred per cent plus four point three per cent, which is one point zero four **three**. Two hundred times one point zero four three is two hundred and eight dollars and sixty cents. Keep going, year after year, and after five years, the shop costs about two hundred and forty-six dollars and eighty-six **cents**. That's the formula from before, FV equals PV times one plus r to the n. The price today is PV, and r is the inflation **rate**.

Visual: stage change: the basket (500 px) at the left with its coded price tag; the ladder at the right grows to 1,300 px, 44 px. Task strip above, 40 px: "A weekly shop costs $200. If inflation stays at 4.3% p.a., estimate the cost in 5 years." Givens card, 40 px: "price now (PV) = $200" (violet), "r = 4.3% = 0.043" (amber), "n = 5 years". On "three" (bold) every ladder arrow reads "× 1.043" (amber), hand tag "prices rise on last year's prices". On "two hundred and eight dollars and sixty cents" (simulation 1) the first rung fills "$208.60" and the basket's tag rewrites; then the rungs fill quietly "$217.57", "$226.93", "$236.68". On "cents" the last rung "$246.86" and the tag "in 5 years: ≈ $246.86" (framed green). On "rate" the formula strip, 52 px: "FV = PV(1 + r)ⁿ" with tags "future price" over FV and "price now" over PV, row "200 × 1.043⁵ ≈ $246.86", hand tag "same formula, new words".

### 3. an estimate, and the add-on slip
> Two things to notice. First, this is an estimate. Real inflation changes from year to year, so a model with one steady rate is a forecast, not a **promise**. Second, adding four point three per cent of two hundred, five times over, gives two hundred and forty-three dollars. That's the slip, because it treats prices like simple **interest**. Each year's rise is a percentage of the new, higher price, not the old one, so prices **compound**.

Visual: camera continue: the ladder shrinks to the top (30 px). On "promise" hand tag "estimate, not a promise" on the framed answer. On "five times over" (simulation 2) two bars from a violet "$200" base: the left adds five equal grey blocks "$8.60" (row "200 + 200 × 0.043 × 5 = $243"); on "interest" a red slip "200 + 200 × 0.043 × 5 = $243" writes and is crossed (caption "prices compound, not add"), hand tag "add-on: simple". On "compound" the right bar adds five amber blocks that grow ($8.60, $8.97, $9.36, $9.76, $10.18), topping out at "$246.86", hand tag "% of the new price".

### 4. a past price: working backwards
> The formula runs backwards too, just like present value. Suppose prices rose three per cent a year. What did today's two hundred dollar shop cost four years ago? To go back a year, undo the times one point zero three, by dividing by one point zero three. Four years back, divide by one point zero three to the power four. That's about a hundred and seventy-seven dollars and seventy **cents**. Multiplying by zero point nine seven instead is the **slip**. It looks similar, but one point zero three times zero point nine seven isn't one, so it doesn't undo the rise.

Visual: clear change to the g01 board, the basket (300 px) at the top right. Task strip, 44 px: "Prices rose 3% a year. What did a $200 shop cost 4 years ago?" Givens card, 44 px: "price now (FV) = $200", "r = 3% = 0.03" (amber), "n = 4 years", "price then (PV) = ?" (violet); grey chip "i02b: back in time: ÷ (1 + r)ⁿ". A ladder, 44 px, with arrows pointing left "÷ 1.03", hand tag "back in time: ÷". Rows, 52 px: "PV = 200 ÷ 1.03⁴"; on "cents" "≈ $177.70" (framed green). On "slip" a red slip "200 × 0.97⁴ ≈ $177.06" writes and is crossed (caption "back in time: ÷ 1.03"). On "isn't one" a grey row "1.03 × 0.97 = 0.9991", hand tag "1.03 × 0.97 ≠ 1".

### 5. buying power
> Here's why inflation matters for your savings. Say a thousand dollars sits in an account earning four per cent a year, while prices rise four point three per cent. After five years, the account has about one thousand two hundred and sixteen dollars. But the two hundred dollar shop now costs about two hundred and forty-seven. Today, a thousand dollars buys five weekly **shops**. In five years, the bigger balance buys only about four point nine **three**. When your savings grow more slowly than prices, your money buys less, even though there's more of **it**.

Visual: stage change: left, a coded account card with a teal bar "$1,000" and the amber chip "4% p.a."; right, the basket badge (220 px) with its tag "$200", amber chip "prices: 4.3% p.a.". On "one thousand two hundred and sixteen" the teal bar grows to "$1,216.65" (row "1000 × 1.04⁵ ≈ $1216.65"); on "two hundred and forty-seven" the basket's tag rises to "$246.86". On "shops" (simulation 3) under "now": five full basket outlines, row "1000 ÷ 200 = 5". On "three" under "in 5 years": four full outlines and a 93 per cent outline, row "1216.65 ÷ 246.86 ≈ 4.93". On "it" hand tag "more dollars, fewer baskets".

### 6. appreciation
> Some things you own can grow in value too. That's called appreciation. Here's an investment unit in a regional city in New South Wales, worth six hundred and fifty thousand dollars. Suppose its value rises five per cent a year. That's an assumption, not a forecast. After three years, it's six hundred and fifty thousand times one point zero five cubed, which is seven hundred and fifty-two thousand, four hundred and fifty-six dollars and twenty-five **cents**. Same formula, different words. But values can fall as well. Property, and collectables like old guitars, aren't guaranteed to **rise**.

Visual: clear change: the unit plate `ms12-investment-unit-v1.png` (900 px wide) at the left with a coded value tag "$650,000" (violet); amber chip "assumed 5% p.a.", hand tag "assumption, not a forecast". At the right, a mini board, 44 px: task strip "A $650 000 unit appreciates at an assumed 5% p.a. Find its value after 3 years."; on "cubed" row "650 000 × 1.05³"; the value tag climbs (simulation 4) "$682,500", "$716,625"; on "cents" "= $752 456.25" (framed green). On "different words" the strip "FV = PV(1 + r)ⁿ" with "future value of the unit" over FV. On "rise" a dashed grey branch drops below the climbing tag, hand tag "values can fall".

### 7. memory aid
> Here's the summary. Inflation and appreciation are compound interest with new labels. A price, or a value, multiplies by one plus r each year. To go forwards, multiply. To go back in time, divide. And remember, one steady rate gives only an **estimate**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the basket's tag ladder and the unit's value tag, each with "× (1 + r)" arrows, and a left-pointing "÷" arrow under them. Main line, hand font 56 px: "Same formula, new words: price or value × (1 + r)ⁿ." On "estimate" the key line, 40 px: "Inflation: prices rise. Appreciation: an asset's value rises. Back in time: ÷ (1 + r)ⁿ. One steady rate is an estimate." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A haircut costs forty-five dollars. Assume inflation stays at three point five per cent a year. Use the compound interest formula to estimate the price of the haircut in four years. Then find how much the price has increased. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A haircut costs $45. Assume inflation stays at 3.5% p.a. (a) Use the compound interest formula to estimate the price in 4 years. (b) By how much has the price increased?" Picture slot: a coded price tag "$45 now" and an empty four-rung ladder. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> FV equals forty-five times one point zero three five to the four, which is fifty-one dollars and sixty-four **cents**. So the price has increased by six dollars and sixty-four **cents**. Adding three point five per cent of forty-five, four times, is the slip. It gives fifty-one dollars and thirty cents, because it doesn't **compound**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "FV = 45 × 1.035⁴"; on "cents" (first) "≈ $51.64" (framed green). On "cents" (second) "51.64 − 45 = $6.64" (framed green). On "compound" a red slip "45 + 45 × 0.035 × 4 = $51.30" writes and is crossed (caption "prices compound, not add"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A second-hand electric guitar is bought for two thousand four hundred dollars, and its value is expected to appreciate at six per cent a year. Find its expected value after five years. Over the same five years, inflation is three per cent a year. What would two thousand four hundred dollars of goods cost then? And has the guitar kept up with prices? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A second-hand electric guitar is bought for $2400. Its value is expected to appreciate at 6% p.a. (a) Find its expected value after 5 years. (b) Over the same 5 years, inflation is 3% p.a. What would $2400 of goods cost after 5 years? (c) Has the guitar kept up with prices? Give a reason." Picture slot: two empty five-rung ladders labelled "guitar" and "goods". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The guitar's value is twenty-four hundred times one point zero six to the five, about three thousand two hundred and eleven dollars and seventy-four **cents**. The goods would cost two thousand seven hundred and eighty-two dollars and twenty-six **cents**. So yes, it's kept up, because six per cent beats three. Times five instead of to the power five is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "2400 × 1.06⁵"; on "cents" (first) "≈ $3211.74" (framed green). "2400 × 1.03⁵"; on "cents" (second) "≈ $2782.26" (framed green). Row "3211.74 > 2782.26: kept up (6% > 3%)" (framed green), with a grey chip "an estimate: second-hand prices can fall". On "slip" a red slip "2400 × 1.06 × 5 = 12 720" writes and is crossed (caption "× 5 is not to the power 5"). Hold about 1 s.

### 12. handoff
> So inflation and appreciation use the formula you already know. Where you go next depends on your course. If you're doing Standard 2, we'll change one thing at a time, the rate, the term, or how often interest is added, and see what happens to the future value. If you're doing Standard 1, we'll put simple and compound interest side by side, year by **year**. That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the two-route frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`), split by a thin grey rule. On "Standard 2" the left panel: the salon chair `ms12-salon-chair-v1.png` (600 px tall) with "equipment fund: $10,000"; chips "higher rate?", "longer?", "added more often?" (amber); chip "Standard 2 next: what changes the future value?". On "year" (first bold) the right panel: the coffee cart `ma11-coffee-cart-v1.png` (600 px wide) with two account cards "paid out" (blue bar) and "left in" (teal bar), each "$5,000 at 6% p.a.", the grey chip "side by side: how far apart?" and the chip "Standard 1 next: simple against compound". On "next" chips "Next" and "?". Hold about 2 s. This is i04's opening frame (i04 fades the right panel), and its right panel is i05's opening picture; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Inflation: prices rise by a % each year (measured by the CPI).
- Future price = price now × (1 + r)ⁿ. Prices compound, not add.
- Past price = price now ÷ (1 + r)ⁿ (not × (1 − r)ⁿ).
- Savings growing slower than prices buy less.
- Appreciation: value × (1 + r)ⁿ; an estimate; values can fall.

Memory aid (framed card, right side, as in scene 7): *Same formula, new words: price or value × (1 + r)ⁿ.* Key: *Inflation: prices rise. Appreciation: an asset's value rises. Back in time: ÷ (1 + r)ⁿ. One steady rate is an estimate.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i04's opening frame (its right panel is i05's).

## Teaching checks

- **Does it explain causes?** Why prices compound: each rise is a percentage of a price that already rose (2, 3). Why it is an estimate: real rates change (3). Why divide to go back, not × 0.97: dividing undoes the multiplication; 1.03 × 0.97 ≠ 1 (4). Why savings can lose buying power: prices multiply faster than the balance (5). Why appreciation is the same formula, and why it is a risk: the same percentage-of-current-value growth, with no guarantee (6).
- **Misconceptions addressed:** adding the rate each year (3, A1 crossed); × (1 − r) to go back (4 crossed); × n for the power (A2 crossed); "money in the bank is safe" (5); "values only rise" (6, A2).
- **Visual standard, item by item:** 1 the basket from the first frame, the unit in 6; 2 a new stage every 40 to 60 s; 3 a price tag rewriting up a ladder, compound blocks against add-on blocks, baskets shrinking while the balance grows, a value tag climbing with a "can fall" branch; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards with framed answers and crossed slips; 8 framed card and five bullets; 9 more dollars buying fewer baskets.
- **One idea at a time:** prices compound (2), estimate and add-on slip (3), a past price (4), buying power (5), appreciation (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 24 s and 27 s.
- **Avoided double teaching:** the formula and PV are recalled from i02a and i02b in a chip; only the contexts are new.
- **Standard 1 path:** identical content; the final frame's right panel leads to i05 without i04.
- **Syllabus coverage:** `ci1256741b` and `cicf066fd6` (inflation 1 to 5, A1, A2 (b); appreciation 6, A2 (a), (c); key notes 1 to 5).
- **Out of scope by design:** the real-return subtraction rule; depreciation (i09 to i11); varying inputs (i04).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original context, HSC style, 2 marks suggested, not an official marking scheme).** "A haircut costs $45. Assume inflation stays at 3.5% p.a. (a) Use the compound interest formula to estimate the price in 4 years. (b) By how much has the price increased?"
Model answer: (a) FV = 45 × 1.035⁴ = $51.64. (b) 51.64 − 45 = $6.64. Classic mistake (crossed): "45 + 45 × 0.035 × 4 = $51.30".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** "A second-hand electric guitar is bought for $2400. Its value is expected to appreciate at 6% p.a. (a) Find its expected value after 5 years. (b) Over the same 5 years, inflation is 3% p.a. What would $2400 of goods cost after 5 years? (c) Has the guitar kept up with prices? Give a reason."
Model answer: (a) 2400 × 1.06⁵ = $3211.74. (b) 2400 × 1.03⁵ = $2782.26. (c) Yes: its expected value grows faster than prices because 6% > 3% ($3211.74 > $2782.26). It is an estimate; second-hand prices can fall. Classic mistake (crossed): "2400 × 1.06 × 5 = 12 720".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Shop | 200 × 1.043ⁿ: 208.60, 217.57, 226.93, 236.68, 246.86; add-on 243; compound blocks 8.60, 8.97, 9.36, 9.76, 10.18 | 1 to 3, 5 |
| Past price | 200 ÷ 1.03⁴ ≈ 177.70; slip 177.06; 1.03 × 0.97 = 0.9991 | 4 |
| Buying power | 1000 × 1.04⁵ ≈ 1216.65; 5 baskets; ≈ 4.93 baskets | 5 |
| Unit | 650 000 × 1.05ⁿ: 682 500, 716 625, 752 456.25 | 6 |
| A1 | 45 × 1.035⁴ ≈ 51.64; 6.64; slip 51.30 | 8, 9 |
| A2 | 3211.74; 2782.26; slip 12 720 | 10, 11 |
| Handoff | $10,000; $5,000 at 6% (labels only) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 200 × 1.043ⁿ at n = 1 to 5: 208.6, 217.5698, 226.925301, 236.683089, 246.860462; differences 8.6, 8.9698, 9.3555, 9.7578, 10.1774; 200 + 200 × 0.043 × 5 = 243.
- 200/1.03⁴ = 177.697410; 200 × 0.97⁴ = 177.058562; 1.03 × 0.97 = 0.9991.
- 1000 × 1.04⁵ = 1216.652902; 1216.652902/246.860462 = 4.928505.
- 650 000 × 1.05³ = 752 456.25; 682 500; 716 625.
- 45 × 1.035⁴ = 51.638535; 45 + 45 × 0.035 × 4 = 51.30.
- 2400 × 1.06⁵ = 3211.741386; 2400 × 1.03⁵ = 2782.257778; 2400 × 1.06 × 5 = 12 720.

## Memory aid check

- **"Same formula, new words: price or value × (1 + r)ⁿ."** with key line **"Inflation: prices rise. Appreciation: an asset's value rises. Back in time: ÷ (1 + r)ⁿ. One steady rate is an estimate."** Original (pack decision: "the context changes the words, not the formula"). Meaning, as said in scene 7: a quantity that rises each year by a fixed percentage of its current value multiplies by 1 + r each year, so after n years it is multiplied by (1 + r)ⁿ, and going back divides. Assumptions checked: r is a yearly percentage applied to the current price or value (not to the original); r is constant (the key line names the estimate); r is written as a decimal (1.043 for 4.3%, shown in scene 2). It helps a new case: a $15 cinema ticket with 3% inflation for 2 years: 15 × 1.03² = $15.91. Introduced after scenes 2 to 6.
- **Considered, not used:** "Prices are savings in reverse" (confuses the direction).

## Narration length estimate

Revision 1, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,264 characters**, 13 scene headings. Characters per scene (1 to 13): 578, 540, 430, 558, 551, 590, 250, 258, 325, 383, 357, 369, 75.

At 13.3 characters per second the speech is about 396 s. Total with the holds and settling below **about 485 s (8 min 5 s)**, 85 s under the 570 s cap; speech and holds before the notes about 440 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the price ladder (2), the two bars (3), the baskets (5) and the value tag (6) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 1's "the cost of a typical basket of things people buy" (the chip carries it); scene 6's "and collectables like old guitars".

## Scene list and build ids

Lesson key `m-s12i03` (route math-s12-i03). Explainer folder `src/explainer/lessons/math-s12-i03`; build inputs in `docs/production/claude-pm/lessons/math-s12-i03/` (at voicing).

In order (13 scene headings): hook-weekly-shop, prices-compound, estimate-and-add-on, past-price, buying-power, appreciation-unit, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | i02b's frame; the CPI source chip |
| 45 to 95 s | 2 | The price-tag ladder |
| 95 to 130 s | 3 | Compound against add-on |
| 130 to 180 s | 4 | g01 board: a past price |
| 180 to 230 s | 5 | Account and baskets |
| 230 to 285 s | 6 | The unit and its value tag |
| 285 to 305 s | 7 | Framed memory card |
| 305 to 405 s | 8 to 11 | Question cards and countdowns, then feedback |
| 405 to 430 s | 12 | Two-route frame for i04 and i05 |
| 430 to 475 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i02b's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i03-learning-review.md`, `science_check` = `checks/m-s12-i03-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma11-coffee-cart-v1.png` (a teal market cart with a striped awning, an espresso machine and paper cups, a blank chalkboard panel, true alpha; reused in the final frame's right panel and as i05's anchor); `ma12-apartment-building-v1.png` (listed; not used: f12's signature plate under the kit-needs list, and a06's rent anchor); `ma12-swing-tag-v1.png` (a blank tag; not used here: the price tags are coded so they can rewrite).

Need (painted, new; see the Codex asset brief): `ms12-investment-unit-v1.png` (scene 6; reused in i08); `ms12-salon-chair-v1.png` (final frame; i04's anchor; painted one video early, ruling 17). From i02b's brief: `ms12-grocery-basket-v1.png`. Reused: `ma11-coffee-cart-v1.png`.

Coded: the price and value tags, ladders, bars, basket outlines, account cards, the board, the CPI source chip, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioTermLadder` (relabelled; reverse option from i02b), `GrowthBars`, `PlateFields` (`finance-parts.tsx`), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i03; none essential): **Basket count bar** (small, lesson folder): n outline icons, the last filled to a fraction. Check: 4.93 shows four full outlines and one 93 per cent full.

## Codex asset brief (Maths S12 I03, an investment unit and a salon chair)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i03.md`, route entry math-s12-i03. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i03 build (scene 6 and the final frame use them). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-coffee-cart-v1.png` and `maths/ma12-delivery-van-v1.png`; no text, signs, brand names, logos, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-investment-unit-v1.png` (about 1800 × 1000 px): a small block of four two-storey townhouse-style units in a NSW regional city, three-quarter street view: rendered brick and light cladding, a pitched Colorbond-style roof, small front courtyards with low fences, a young street tree; no "for sale" sign, no cars, no letters on letterboxes.
2. `ms12-salon-chair-v1.png` (about 1000 × 1300 px): a hairdressing salon chair, three-quarter view: black upholstered seat on a chrome hydraulic base with a footrest, beside a small rolling trolley with combs and scissors in a cup and a folded towel; no mirror reflections, no people.

Report inspection on the paper background (`#f6f1e7`) at 900 px and 300 px wide (the unit) and 600 px and 220 px tall (the chair), and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Re-verify the ABS figure and date (4.3%, year to September 2026, released 28 October 2026) against the cited release (ruling 32); confirm every other rate is labelled an assumption or example and that "rates change every year" is said once.
4. Confirm the real-return subtraction rule does not appear, and that appreciation is followed by "values can fall".
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on i02b's final frame and scene 12 matches the decisions file's i03 two-route join.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Inflation and Appreciation with Compound Interest | Year 12 Maths Standard

(Title length: 74 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson11.sa.html

Prices rose 4.3% in the year to September 2026 (ABS consumer price index). If that rate held, what would a $200 weekly shop cost in five years? Inflation compounds, just like interest, so a future price is FV = PV(1 + r)^n, and a past price divides by (1 + r)^n. See why savings that grow more slowly than prices buy fewer shops, even with more dollars, and how appreciation grows an asset's value with the same formula, while remembering that values can fall. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Inflation and interest rates change every year; the rates here, apart from the ABS figure, are assumptions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans (Standard 2) and Investment (Standard 1). For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Solve problems involving compound interest in a variety of contexts, including inflation and appreciation"
Syllabus content, Standard 1:
"Solve problems involving compound interest in a variety of contexts, including inflation and appreciation"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6 (Standard 1)

Builds on: Compound Interest: Present Value and the Interest Rate. Next: Standard 2, Rate, Term and Compounding Period; Standard 1, Simple vs Compound Interest in a Spreadsheet.

#Year12Maths #MathsStandard #Inflation #HSCScience

## Open decisions

- **1. Two-route final frame (root).** One frame serves both routes, as in a08 (ruling 9's precedent): i04 opens on it and fades the right panel; i04's final frame repeats the right panel full-frame, so i05 opens on the same coffee cart and accounts from either route. If root prefers a single-route ending, the alternative is the right panel only, with i04 opening on its own salon frame.
- **2. ABS figure in narration (root).** "Four point three per cent" is spoken with its month. If the video publishes after the December 2026 quarter's CPI release, the chip and sentence need the newer figure (the maths is unchanged). Codex re-verifies at the maths check.

## Review notes

- Revision 1. Next: student learning review (trace from i02b; check that "prices rise on last year's prices" makes compounding feel natural, that the estimate caveat is short and not alarming, that the ÷ against × 0.97 point is followable, that the baskets make buying power concrete, that the risk sentence on appreciation is clear, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
