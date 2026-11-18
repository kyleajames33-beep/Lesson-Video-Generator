# Maths S12 R11: Which pack is the best buy? Unit price as a rate, price ÷ quantity in a common unit, a handy unit such as per 100 g, the same unit first, reading shelf labels, and when the best value is not the best buy (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a06.md`, `i09.md`, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 47). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,028 characters by script (see "Narration length estimate"), 13 scene headings, about 469 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: eleventh video of the Year 12 Ratios and rates strand, playlist order 58 (route inputs 4). Shared by Standard 1 and Standard 2 (identical wording). Pre-design pack: `../pre-design/maths-standard/math-s12-r11.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/ratios-and-rates/lesson01.sa.html` (SHA256 `05ae0325c7136abaf31da18d8639832e80554887247876ba02712b10dfa64381`; the hook, "Supermarket A sells 2 kg of flour for $3.80. Supermarket B sells 5 kg for $8.75. Which is better value?", and its revisit, "$1.90/kg ... $1.75/kg ... cheaper per kilogram despite having the higher total price"; card 05, "find the cost per gram or per unit, then the cheapest rate wins"; `we-1`, orange juice, 1.25 L for $2.80 and 2 L for $4.20, $2.24 and $2.10 per litre; Trap 03, "A larger pack is not automatically cheaper per unit"; quick-fire 3, coffee, 400 g for $7.60 and 600 g for $11.10; SA 5, 375 mL for $6.45, 750 mL for $11.40 and 1.5 L for $24.00, per 100 mL $1.72, $1.52, $1.60). Route entry: `math-s12-r11` in `../../programme/maths-standard-route-inputs-4.json`. Visual system: maths studio kit; the flour bags plate (painted under r10's brief) as the anchor; the phone and hatchback plates reused; shelf labels, blocks and boards coded.

Owner rules applied: as a04a (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings (unit price, best value, best buy); g01 worked example; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (flour, coffee, olive oil, juice, rice, a phone recharge); money spoken naturally; Australian spelling; no em dashes; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Ratios and rates, Rates), quoted from `../../programme/maths-standard-route-inputs-4.json`:

Standard 2:
- `cibecf9f22`: "Compare unit prices to determine best buys"

Standard 1:
- `cie8590152`: "Compare unit prices to determine best buys"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf13dc7b0 (Standard 1)

**Boundary:** starts from r10's final frame exactly (the flour plate `ms12-flour-bags-v1.png`, about 1,000 px wide, on a coded shelf edge; coded shelf tags "2 kg: $3.80" and "5 kg: $8.75"; chips "which is better value?", "Next: best buys" and "?"). Recalls r09 (a unit rate; compare per one of the same unit) and r10 (converting units, L to mL) in a phrase or grey chip. Teaches: unit price, the price for one unit of the quantity, is a rate (price ÷ quantity); the lowest unit price is the best value; a handy unit (per 100 g, per 100 mL) avoids tiny decimals; every size in the same unit first; shelf labels usually print the unit price, and both labels must use the same unit; the best buy is the best value for an amount you will use. Stops at unit prices and best buys. Not taught: fuel cost (r13), electricity cost (r14).

## Decisions

- **Anchor: the site's flour (painted plate, live).** 2 kg for $3.80 against 5 kg for $8.75: $1.90 against $1.75 per kg; the bag with the higher price tag is the cheaper flour; at the small bag's rate 5 kg would cost $9.50, so the big bag saves 75 cents. Shopping. Plate: `ms12-flour-bags-v1.png` (briefed in r10). No supermarket name (the site's "Supermarket A" and "B" become two bags on one shelf).
- **Handy unit: the site's coffee (quick-fire 3).** 1.9 cents a gram against 1.85, read as $1.90 and $1.85 per 100 g.
- **Worked example: the site's SA 5 (olive oil, per 100 mL).** 375 mL, 750 mL and 1.5 L: $1.72, $1.52 and $1.60 per 100 mL; the middle bottle wins; crossed "1.5 L, the biggest" (caption "$1.60 is more than $1.52"). The route names the product as olive oil.
- **Shelf labels: the site's `we-1` (juice).** $2.24 and $2.10 per litre, read off two coded, unbranded shelf labels (ShelfLabel). Narration says labels "usually" print the unit price; it does not cite the Unit Pricing Code (pack section 7; Codex re-verifies the Code before any stronger claim).
- **Best value against best buy (pack decision).** One short scene with the same flour: stale flour, money today, and paying for what you use.
- **Site notes (pack section 8).** No error in the parts used. The site's numbers are kept throughout.
- **Join.** Scene 1 opens on r10's final frame exactly.
- **Standard 1 path.** Identical content.
- **Simulations (standard item 3).**
  1. **Price blocks** (scene 2; `GrowthBars`): each flour bag's price bar cuts into 1 kg blocks, each block labelled with its price ($1.90 and $1.75); the two single blocks slide side by side.
  2. **Buying race** (scene 2; `ParameterSlider`, `LiveReadoutBoard`): a "kilograms of flour" slider from 0 to 10; two cost readouts at $1.90 and $1.75 a kilogram and "saved $"; at 5 kg: $9.50, $8.75, saved $0.75.
  3. **ShelfLabel flips** (scenes 4, 5; new kit part): each label flips from its price to its unit-price line; the lowest rings green.
  4. **100 mL blocks** (scene 4): each bottle's quantity bar cuts into 100 mL blocks (3.75, 7.5 and 15 blocks), the price spreading across them.
- **Colour roles (fixed for r09 to r11).** Price **teal**; quantity **violet**; unit price **amber**; best value **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As a04a. Hand tags: "lower tag", "more flour", "price ÷ quantity", "per 1 kg", "cheaper flour", "saves 75c", "tiny numbers", "handy unit: per 100 g", "same unit first", "count the 100 mLs", "bigger isn't always cheaper", "printed for you", "same unit on both?", "stale before it's used", "money today", "for what you'll use". At most two live at once.
- **Stage changes (standard item 2).** r10's frame and the flour (1); price blocks and the buying race (2); the coffee per 100 g (3); g01 board, the olive oil (4); the juice labels (5); best value against best buy (6); framed card (7); question cards (8 to 11); the road trip for r12a (12); key notes (13).
- **Worked example (g01 layout).** Scene 4: task strip "Olive oil is sold in three sizes: 375 mL for $6.45, 750 mL for $11.40 and 1.5 L for $24.00. (a) Find the cost per 100 mL for each size. (b) State which size offers the best value." (site SA 5); givens card "375 mL: $6.45", "750 mL: $11.40", "1.5 L: $24.00" (quantities violet, prices teal); rows "1.5 L = 1500 mL"; "100 mL lots: 3.75, 7.5, 15"; "6.45 ÷ 3.75 = $1.72", "11.40 ÷ 7.5 = $1.52", "24.00 ÷ 15 = $1.60"; framed answer "750 mL, $1.52 per 100 mL"; crossed slip "1.5 L, the biggest" (caption "$1.60 is more than $1.52").
- **Memory aid.** Framed card: "Unit price = price ÷ quantity. Lowest wins." Key line: "Same unit first. Best value is the best buy only if you'll use it."
- **Visual surprise.** The bag with the higher tag has the shorter price block (scene 2); the largest olive oil bottle's label does not ring green (scene 4).
- **Plain meanings at first use.** Unit price ("the price for one unit of the quantity, like one kilogram"); best value ("the lowest unit price"); best buy ("the best value for an amount you'll actually use").
- **Attempts (original, HSC style).** A1 (pack question 1 (a), (b)): rice, 1 kg $2.60, 5 kg $11.50, 10 kg $24.00: $2.60, $2.30, $2.40 per kg; the 5 kg bag; crossed "10 kg, the biggest bag" (caption "$2.40 a kg is more than $2.30"). A2 (pack question 2, the person unnamed): a recharge, $30 for 35 GB or $45 for 60 GB, each 28 days: about 86c and 75c per GB; $45 is better value; someone using 20 GB should buy the $30 one (it covers 20 GB and costs $15 less); crossed "$45, because it's cheaper per GB" (caption "pays for data they won't use").
- **Mistake scene:** none separate. The lower price tag (1, 2); the biggest pack (4 crossed, A1 crossed); per litre against per 100 mL (5); tiny per-gram decimals rounded too early (3); best value called the best buy (6, A2 crossed).
- **Cause chain taught, in order:** (1) packs hold different amounts, so price tags alone aren't fair (1); (2) dividing the price by the quantity gives the price of one unit, a rate, so every pack is compared per one of the same unit (2); (3) when per-unit prices are tiny decimals, a bigger unit (100 g) gives readable numbers with the same order (3); (4) sizes in different units must be converted first, or the division compares different units (4); (5) shelf labels already divide, but only compare labels in the same unit (5); (6) a lower unit price saves money only on what is used, so need and storage decide the best buy (6).
- **Entry knowledge (route):** r09 (a unit rate); r10 (converting units, L to mL). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-r12a, "What does a distance-time graph tell us about a journey?").** Scene 12: the hatchback plate `ma12-used-hatchback-v1.png` (about 800 px wide) at the left; a coded trip card, 40 px: "Sydney to Melbourne: 880 km", "100 km/h for the first 400 km", "a 45-minute stop", "90 km/h for the rest"; at the right empty coded axes "distance from Sydney (km)" 0 to 900 and "time (h)" 0 to 11; chips "can one line show the whole trip?", "Next: distance-time graphs" and "?". No line is drawn. This is r12a's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Flour: 3.80 ÷ 2 = 1.90; 8.75 ÷ 5 = 1.75; 1.90 × 5 = 9.50; 9.50 − 8.75 = 0.75; difference 0.15 per kg.
  (b) Coffee: 7.60 ÷ 400 = 0.019 $/g; 11.10 ÷ 600 = 0.0185 $/g; per 100 g: 7.60 ÷ 4 = 1.90, 11.10 ÷ 6 = 1.85.
  (c) Olive oil: 6.45 ÷ 3.75 = 1.72; 11.40 ÷ 7.5 = 1.52; 24.00 ÷ 15 = 1.60; 1.60 − 1.52 = 0.08.
  (d) Juice: 2.80 ÷ 1.25 = 2.24; 4.20 ÷ 2 = 2.10.
  (e) A1: 2.60; 11.50 ÷ 5 = 2.30; 24.00 ÷ 10 = 2.40. A2: 30 ÷ 35 = 0.857 (86c); 45 ÷ 60 = 0.75; 45 − 30 = 15.
  (f) Pronunciations: "a dollar ninety per kilogram"; "one point nine cents"; "three hundred and seventy-five millilitres"; "eighty-six cents".
  (g) Prices are realistic NSW 2026 examples, labelled as examples on screen ("example prices"); the site's numbers are kept.

Main question: *Flour costs $3.80 for 2 kg or $8.75 for 5 kg. Which pack is the best buy?*
Entry knowledge (r09, r10): a unit rate; converting units.
Stops after: unit price, a handy unit, the same unit first, shelf labels, best value against best buy. No fuel or electricity costs.
Handoff: math-s12-r12a: "Sydney to Melbourne, 880 km, with a stop: can one line show the whole trip?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): price teal; quantity violet; unit price amber; best value green; mistake red. Header strip "MATHEMATICS STANDARD · RATIOS AND RATES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame. A small grey tag "example prices" sits at the bottom right of every scene with a price (above y = 950).

### 1. hook: which bag?
> Here's the flour shelf. The two kilogram bag costs three dollars eighty, and the five kilogram bag costs eight dollars seventy-five. The small bag has the lower price tag, so it's tempting to grab it. But the big bag has much more flour in **it**. A few cents on every kilogram adds up over a year of shopping, so it's worth knowing how to check. Which pack is the best **buy**?

Visual: opens on r10's final frame exactly (the flour plate on its coded shelf, the two tags, chips). On the first sentence the "Next" chip fades and the plate grows to about 1,200 px. On "three dollars eighty" the small tag pulses teal; on "eight dollars seventy-five" the large tag. On "lower price tag" the small tag rings, hand tag "lower tag". On "it" a violet bracket over each bag, "2 kg" and "5 kg", hand tag "more flour". On "buy" heading "Unit prices and best buys" writes on, and the question chip "Which is the best buy?" moves to the top right.

### 2. unit price
> To compare fairly, find the price of one kilogram from each bag. That's called the unit price, the price for one unit of the quantity, and it's a rate in dollars per kilogram. Three dollars eighty for two kilograms is a dollar ninety per **kilogram**. Eight dollars seventy-five for five kilograms is a dollar seventy-five per **kilogram**. So the big bag is cheaper flour, by fifteen cents a kilogram. Buy five kilograms at the small bag's rate, and you'd pay nine dollars fifty, so the big bag saves seventy-five **cents**. The lowest unit price is the best **value**.

Visual: stage change: the plate shrinks to a 300 px badge at the top left. Two teal price bars fill the centre, "$3.80" and "$8.75", with violet quantity strips under them, "2 kg" and "5 kg". Chip, 44 px: "unit price: the price for 1 unit", hand tag "price ÷ quantity"; grey chip "r09: a unit rate". On "two kilograms" the small bar cuts into 2 blocks; on "kilogram" (first bold) one block lifts out, "$1.90 per kg" (amber, 52 px), row "3.80 ÷ 2 = 1.90". The big bar cuts into 5 blocks; on "kilogram" (second bold) one lifts out, "$1.75 per kg", row "8.75 ÷ 5 = 1.75". On "cheaper flour" the two lifted blocks sit side by side, the $1.75 block shorter, hand tag "cheaper flour". On "Buy five kilograms" the buying race (simulation 2) runs at the right: a "kg" slider 0 to 5 (about 4 s), readouts "at $1.90 a kg", "at $1.75 a kg", "saved $"; on "cents" it stops at 5 kg: "$9.50", "$8.75", "saved $0.75", hand tag "saves 75c". On "value" the $1.75 block rings green, chip "lowest unit price = best value".

### 3. pick a handy unit
> Sometimes the unit price per gram is a tiny number. A four hundred gram pack of coffee costs seven dollars sixty, and a six hundred gram pack costs eleven dollars ten. Per gram, that's one point nine cents against one point eight five cents, which is hard to read and easy to round badly. So pick a handier unit. A hundred grams is a quarter of the small pack, so it costs a dollar ninety per hundred **grams**. It's a sixth of the big pack, so a dollar eighty-five per hundred **grams**. The bigger pack wins, by five cents per hundred **grams**.

Visual: stage change: two coded coffee packs as quantity strips (violet), "400 g" and "600 g", with teal tags "$7.60" and "$11.10". Rows, 44 px: "7.60 ÷ 400 = $0.019 per g", "11.10 ÷ 600 = $0.0185 per g", greyed, hand tag "tiny numbers". On "handier unit" chip "per 100 g", hand tag "handy unit: per 100 g". The 400 g strip cuts into 4 blocks of 100 g; on "grams" (first bold) row, 52 px: "7.60 ÷ 4 = $1.90 per 100 g" (amber). The 600 g strip cuts into 6; on "grams" (second bold) "11.10 ÷ 6 = $1.85 per 100 g". On "grams" (last bold) the $1.85 row rings green, "5c less per 100 g".

### 4. worked example: three bottles of olive oil
> Here's one with three sizes. Olive oil comes in three bottles, three hundred and seventy-five millilitres for six dollars forty-five, seven hundred and fifty millilitres for eleven dollars forty, and one point five litres for twenty-four dollars. Find the cost per hundred millilitres of each, and say which is the best value. First, put every size in the same unit. One point five litres is fifteen hundred **millilitres**. Now count the hundreds of millilitres in each bottle, three point seven five, seven point five and fifteen. Divide each price by that count. That gives a dollar seventy-two, a dollar fifty-two, and a dollar **sixty**. So the seven hundred and fifty millilitre bottle is the best **value**. Picking the biggest bottle is the slip. It costs eight cents more per hundred millilitres than the middle one, so bigger isn't always **cheaper**.

Visual: clear change to the g01 board. Task strip, 44 px: "Olive oil is sold in three sizes: 375 mL for $6.45, 750 mL for $11.40 and 1.5 L for $24.00. (a) Find the cost per 100 mL for each size. (b) State which size offers the best value." (site SA 5). Givens card, 44 px: "375 mL: $6.45", "750 mL: $11.40", "1.5 L: $24.00" (quantities violet, prices teal). On "millilitres" row, 52 px: "1.5 L = 1500 mL" (grey chip "r10: × 1000"), hand tag "same unit first". On "count the hundreds" the three quantity strips cut into 100 mL blocks (simulation 4): "3.75", "7.5", "15" (hand tag "count the 100 mLs"). On "sixty" rows, 52 px: "6.45 ÷ 3.75 = $1.72", "11.40 ÷ 7.5 = $1.52", "24.00 ÷ 15 = $1.60" (amber). On "value" framed answer (green) "750 mL: $1.52 per 100 mL". On "biggest bottle" a red slip "1.5 L, the biggest" writes; on "cheaper" it is crossed (caption "$1.60 is more than $1.52"), hand tag "bigger isn't always cheaper".

### 5. read the shelf label
> You don't always have to divide. Supermarket shelf labels usually print the unit price for you, in small type under the main price. Here's orange juice. One point two five litres for two dollars eighty shows two dollars twenty-four per **litre**. Two litres for four dollars twenty shows two dollars ten per **litre**. Just check that both labels use the same unit. If one says per litre and the other says per hundred millilitres, convert one before you **compare**.

Visual: stage change: two coded, unbranded shelf labels (ShelfLabel, simulation 3), each about 700 × 300 px: "Orange juice 1.25 L, $2.80" and "Orange juice 2 L, $4.20" (teal price, violet size), with a small amber unit-price line. On "small type" the first label's unit-price line enlarges, hand tag "printed for you". On "litre" (first bold) the first label flips to "$2.24 per 1 L" (amber, 52 px); on "litre" (second bold) the second flips to "$2.10 per 1 L", ringed green. On "same unit" a third label slides in, "$0.22 per 100 mL", greyed, beside a "$2.10 per 1 L" label; on "compare" a "× 10" arrow turns it into "$2.20 per 1 L", hand tag "same unit on both?". Site `we-1` numbers.

### 6. best value or best buy?
> The best value isn't always the best buy. If you only bake once a month, five kilograms of flour could go stale, or get weevils, before you finish it. The bigger bag also costs more money today, even if it saves later. A lower unit price only saves money on what you actually use. So the best buy is the best value, for an amount you'll really **use**.

Visual: stage change: the flour plate returns at about 900 px. On "once a month" a coded calendar strip of months under the big bag, with the bag's level falling 1 kg a month (an amber line), and a grey "use-by" mark before the bag is empty, hand tag "stale before it's used". On "money today" the two tags pulse, "$8.75 now" against "$3.80 now", hand tag "money today". On "use" chip, 44 px: "best buy = best value for what you'll use" (green), hand tag "for what you'll use".

### 7. memory aid
> Here's the summary. Unit price is price divided by quantity, and the lowest unit price wins. Put every size in the same unit first. And the best value is only the best buy if you'll use **it**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the two flour blocks small, "$1.90 per kg" and "$1.75 per kg" (green ring). Main line, hand font 56 px: "Unit price = price ÷ quantity. Lowest wins." On "it" the key line, 40 px: "Same unit first. Best value is the best buy only if you'll use it." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Rice is sold in three sizes. One kilogram costs two dollars sixty, five kilograms costs eleven dollars fifty, and ten kilograms costs twenty-four dollars. Find the unit price of each size in dollars per kilogram. Which size is the best value? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Rice is sold in three sizes: 1 kg for $2.60, 5 kg for $11.50 and 10 kg for $24.00. (a) Find the unit price of each size in dollars per kilogram. (b) Which size is the best value?" The full question stays on screen. Picture slot: three coded shelf tags showing the sizes and prices only (no unit-price line). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Divide each price by its kilograms. That's two dollars sixty, two dollars thirty, and two dollars forty per **kilogram**. So the five kilogram bag is the best **value**. Choosing the ten kilogram bag because it's the biggest is the slip. Two dollars forty a kilogram is more than two dollars **thirty**.

Visual: the card shrinks to the top (30 px). On "kilogram" rows, 44 px: "2.60 ÷ 1 = $2.60", "11.50 ÷ 5 = $2.30", "24.00 ÷ 10 = $2.40" (amber). On "value" framed answer (green) "5 kg bag: $2.30 per kg". On "slip" a red slip "10 kg, the biggest bag" writes; on "thirty" it is crossed (caption "$2.40 a kg is more than $2.30"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A prepaid phone recharge costs thirty dollars for thirty-five gigabytes, or forty-five dollars for sixty gigabytes. Each lasts twenty-eight days. Find the cost per gigabyte of each. Which is better value per gigabyte? Someone uses about twenty gigabytes every twenty-eight days. Which recharge should they buy? Explain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A prepaid phone provider offers $30 for 35 GB of data or $45 for 60 GB, each lasting 28 days. (a) Find the cost per GB of each recharge. (b) Which recharge is better value per GB? (c) Someone uses about 20 GB every 28 days. Which recharge should they buy? Explain." Picture slot: the phone plate `ma12-phone-v1.png` (about 360 px tall) beside two coded recharge tags "$30: 35 GB" and "$45: 60 GB". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Thirty dollars over thirty-five gigabytes is about eighty-six cents per gigabyte. Forty-five over sixty is seventy-five **cents**. So the forty-five dollar recharge is better value. But someone using twenty gigabytes should buy the thirty dollar one. It covers their data and costs fifteen dollars **less**. Picking the forty-five dollar one for its lower price per gigabyte is the slip. They'd pay for data they never **use**.

Visual: the card shrinks to the top. Rows, 44 px: "30 ÷ 35 ≈ $0.86 per GB"; on "cents" "45 ÷ 60 = $0.75 per GB" (amber), "(b) $45 recharge". On "less" framed answer (green) "(c) $30: covers 20 GB, $15 less". On "slip" a red slip "$45, because it's cheaper per GB" writes; on "use" it is crossed (caption "pays for data they won't use"). Hold about 1 s.

### 12. handoff
> Rates can describe a whole journey too. Here's a road trip, Sydney to Melbourne, eight hundred and eighty kilometres. The car drives at a hundred kilometres per hour for the first four hundred kilometres, stops for forty-five minutes, then drives the rest at ninety. Can one line on a graph show that whole **trip**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: on "road trip" the hatchback plate `ma12-used-hatchback-v1.png` (about 800 px wide) at the left. A coded trip card, 40 px, writing as spoken: "Sydney to Melbourne: 880 km", "100 km/h for the first 400 km", "a 45-minute stop", "90 km/h for the rest". On "graph" empty coded axes at the right: "distance from Sydney (km)" 0 to 900 and "time (h)" 0 to 11. On "trip" chip "can one line show the whole trip?". On "next" chips "Next: distance-time graphs" and "?". Hold about 2 s. No line is drawn. This is r12a's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Unit price = price ÷ quantity ($ per kg, per L, per 100 g).
- The lowest unit price is the best value.
- Same unit first: 1.5 L = 1500 mL.
- Tiny numbers? Use a handy unit, like per 100 g.
- Best buy: best value for an amount you'll use.

Memory aid (framed card, right side, as in scene 7): *Unit price = price ÷ quantity. Lowest wins.* Key: *Same unit first. Best value is the best buy only if you'll use it.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and r12a's opening frame.

## Teaching checks

- **Does it explain causes?** Why tags mislead: different amounts (1). Why divide: the price of one unit compares every pack the same way (2). Why per 100 g: the same order with readable numbers (3). Why convert first: otherwise the division mixes units (4, 5). Why best value is not always the best buy: savings only count on what is used, and the money goes now (6).
- **Misconceptions addressed:** the lower tag (1, 2); the biggest pack (4 crossed, A1 crossed); per litre against per 100 mL (5); rounding tiny unit prices (3); best value called the best buy (6, A2 crossed).
- **Visual standard, item by item:** 1 the flour bags from the first frame and again in 6; 2 a new stage every 30 to 70 s; 3 the price blocks, the buying race with live readouts, the flipping shelf labels, the 100 mL blocks; 4 fixed roles (price teal, quantity violet, unit price amber, best green); 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 the bag with the higher tag showing the shorter block.
- **One idea at a time:** unit price (2), a handy unit (3), the same unit first (4), labels (5), best buy (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 22 s and 31 s.
- **Avoided double teaching:** r09's unit rate is the method; r10's L to mL is a grey chip.
- **Standard 1 path:** identical.
- **Syllabus coverage:** "Compare unit prices to determine best buys" (2 to 6, A1, A2; all five key notes).
- **Out of scope by design:** fuel (r13) and electricity (r14) costs.

## Practice questions and model answers

**Attempt 1 (scene 8; original, HSC style, 2 marks suggested, not an official marking scheme).** "Rice is sold in three sizes: 1 kg for $2.60, 5 kg for $11.50 and 10 kg for $24.00. (a) Find the unit price of each size in dollars per kilogram. (b) Which size is the best value?"
Model answer: (a) $2.60, $11.50 ÷ 5 = $2.30 and $24.00 ÷ 10 = $2.40 per kg. (b) The 5 kg bag. Classic mistake (crossed): "10 kg, the biggest bag".

**Attempt 2 (scene 10; original, HSC style, 3 marks suggested).** "A prepaid phone provider offers $30 for 35 GB of data or $45 for 60 GB, each lasting 28 days. (a) Find the cost per GB of each recharge. (b) Which recharge is better value per GB? (c) Someone uses about 20 GB every 28 days. Which recharge should they buy? Explain."
Model answer: (a) $30 ÷ 35 ≈ $0.86 per GB; $45 ÷ 60 = $0.75 per GB. (b) The $45 recharge. (c) The $30 recharge: it covers their 20 GB and costs $15 less; the extra data in the $45 recharge would go unused. Classic mistake (crossed): "$45, because it's cheaper per GB".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Flour (site hook) | 3.80 ÷ 2 = 1.90; 8.75 ÷ 5 = 1.75; 15c a kg; 1.90 × 5 = 9.50; saves 0.75 | 1, 2, 6 |
| Coffee (site quick-fire 3) | 0.019 and 0.0185 $/g; 7.60 ÷ 4 = 1.90; 11.10 ÷ 6 = 1.85 per 100 g; 5c | 3 |
| Olive oil (site SA 5) | 1.5 L = 1500 mL; 3.75, 7.5, 15 lots; 1.72, 1.52, 1.60; 8c | 4 |
| Juice (site `we-1`) | 2.80 ÷ 1.25 = 2.24; 4.20 ÷ 2 = 2.10; $0.22 per 100 mL × 10 = $2.20 per L (label-unit illustration) | 5 |
| A1 | 2.60; 2.30; 2.40 | 8, 9 |
| A2 | 30 ÷ 35 ≈ 0.86; 45 ÷ 60 = 0.75; $15 | 10, 11 |
| Handoff | 880 km; 100 km/h for 400 km; 45-minute stop; 90 km/h (no line drawn) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12r/verify.py`, run with `python -I`; 153 checks across r08 to r14, 0 failures); Codex to re-check.

- 3.80/2 = 1.90; 8.75/5 = 1.75; 1.90 × 5 = 9.50; 9.50 − 8.75 = 0.75.
- 7.60/400 = 0.019; 11.10/600 = 0.0185; 7.60/4 = 1.90; 11.10/6 = 1.85.
- 6.45/3.75 = 1.72; 11.40/7.5 = 1.52; 24.00/15 = 1.60.
- 2.80/1.25 = 2.24; 4.20/2 = 2.10.
- 11.50/5 = 2.30; 24.00/10 = 2.40; 30/35 = 0.857; 45/60 = 0.75; 45 − 30 = 15.

## Memory aid check

- **"Unit price = price ÷ quantity. Lowest wins."** with key line **"Same unit first. Best value is the best buy only if you'll use it."** Original. Meaning, as said in scene 7: the unit price is the cost of one unit of the quantity, so the lowest one is the cheapest way to buy that product; sizes must be in the same unit before dividing; a lower unit price is only a saving on the amount actually used. Assumptions checked: "lowest wins" compares the same product at the same quality (scenes compare flour with flour, oil with oil); "quantity" is the amount in the pack, not the number of packs; "the best buy" is a judgement the syllabus asks for, so it is said as a condition, not a rule. It helps a new case: 3 L of milk for $4.65 ($1.55 per L) against 2 L for $3.30 ($1.65 per L): the 3 L wins on value, but not if a litre goes off.
- **Considered, not used:** "Bigger is cheaper" (false: SA 5 and A1 show it).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12r/check.py`, which reproduces e08's 5,632): **5,028 characters**, 13 scene headings. Characters per scene (1 to 13): 370, 554, 535, 845, 455, 348, 189, 275, 291, 351, 415, 325, 75.

At 13.3 characters per second the speech is about 378 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the price blocks and race (2), the 100 mL blocks (4), the flipping labels (5) and the calendar (6) about 26 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 469 s**, under the 570 s cap. Feedback speech: about 22 s and 31 s.

Reserve trims if the voiced take runs long: scene 1's "A few cents on every kilogram adds up over a year of shopping, so it's worth knowing how to check." (keep it if possible: it is the why-it-matters line); scene 3's "which is hard to read and easy to round badly".

## Scene list and build ids

Lesson key `m-s12r11` (route math-s12-r11). Explainer folder `src/explainer/lessons/math-s12-r11`; build inputs in `docs/production/claude-pm/lessons/math-s12-r11/` (at voicing).

In order (13 scene headings): hook-flour-shelf, unit-price, handy-unit, worked-olive-oil, shelf-labels, best-value-best-buy, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | r10's frame; the flour |
| 30 to 85 s | 2 | Price blocks and the buying race |
| 85 to 125 s | 3 | Coffee per 100 g |
| 125 to 190 s | 4 | g01 board: the olive oil |
| 190 to 225 s | 5 | Shelf labels |
| 225 to 255 s | 6 | Best value or best buy |
| 255 to 270 s | 7 | Framed memory card |
| 270 to 370 s | 8 to 11 | Question cards and countdowns, then feedback |
| 370 to 395 s | 12 | The road trip for r12a |
| 395 to 440 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: r10's last frame continues into 1; 1 to 2 stage change; 2 to 3 stage change; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change (the flour returns); 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-r11-learning-review.md`, `science_check` = `checks/m-s12-r11-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, opened on a contact sheet): `ma12-cereal-box-v1.png` is a plain yellow and orange box (not flour; not used); `ma12-phone-v1.png` is a plain black smartphone, blank screen (A2's picture slot); `ma12-used-hatchback-v1.png` is the red hatchback in side view (final frame). No coffee, oil, juice or rice plate exists; those appear as quantity strips and coded labels, which is what the comparison needs.

Need (painted): none new. `ms12-flour-bags-v1.png` is briefed in `math-s12-r10.md` (painted before the r10 build).

Coded: price bars and blocks, the slider and readouts, the coffee strips, the shelf labels, the calendar strip, the board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `GrowthBars`, `ParameterSlider`, `LiveReadoutBoard`, `PlateFields` (finance-parts.tsx) for tags, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row r11):
1. **ShelfLabel** (course-neutral; Year 11 money videos can reuse it): a coded, unbranded shelf label with product, size, price and a small unit-price line; it flips to enlarge the unit-price line and can ring green. Check: no retailer name, logo or colour scheme; the unit-price line is at least 30 px at its small size.
2. **Quantity blocks** (RatioBar unit-rate mode, from r09, with fractional counts): a quantity strip cut into 100 mL blocks, including a final part block (3.75, 7.5). Check: 3.75 blocks show three whole and a three-quarter block.

## Codex asset brief (Maths S12 R11)

No new plate. Before the r11 build, confirm `ms12-flour-bags-v1.png` (r10's brief) is painted and reads at 1,200 px, 900 px and 300 px wide on the paper background (`#f6f1e7`). Report the check in `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm the site's flour, coffee, olive oil (SA 5) and juice (`we-1`) numbers and answers are kept.
4. Check the claim "shelf labels usually print the unit price" against the current Grocery Unit Pricing Code (ACCC) and report whether stronger wording is supported; no retailer is named.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer (A1's tags show no unit price).
6. Confirm scene 1 opens on r10's final frame and scene 12's axes are empty.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Best Buys: Comparing Unit Prices | Year 12 Maths Standard

(Title length: 57 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson01.sa.html

Flour costs $3.80 for 2 kg or $8.75 for 5 kg. Which is better value? Learn the unit price, the price for one unit of the quantity, found by dividing the price by the quantity. Pick a handy unit such as per 100 g, convert sizes to the same unit first, read the unit price on a shelf label, and see why the biggest pack is not always the cheapest. Then decide when the best value is the best buy. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Prices are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Ratios and rates. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Compare unit prices to determine best buys"
Syllabus content, Standard 1:
"Compare unit prices to determine best buys"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf13dc7b0 (Standard 1)

Builds on: Converting Rates and Using Them to Solve Problems. Next: Distance-Time Graphs: Speed, Stops and Return Trips.

#Year12Maths #MathsStandard #BestBuys #HSCScience

## Open decisions

- **1. Shelf-label wording (Codex).** "usually print the unit price" stays unless the maths check confirms the Unit Pricing Code's current coverage; then root may allow "big supermarkets must show the unit price".
- **2. A1 without part (c) (root).** The pack's rice question (c) (a reason the best value isn't the best buy) is left out of A1 to keep its feedback under 30 s; A2 (c) asks the same idea with the recharge.

## Review notes

- Revision 1. Next: student learning review (trace from r10; check that "unit price" is understood as a rate before the coffee and oil, that the per-100 g step reads as choice and not a new rule, that the 100 mL counts (3.75, 7.5, 15) are explained by the blocks, that the best-buy scene is short and not preachy, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
