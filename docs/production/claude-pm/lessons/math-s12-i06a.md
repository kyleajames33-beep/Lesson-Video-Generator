# Maths S12 I06a: How do we read a share table and calculate dividends and dividend yield? What a share is, the two ways it can pay, its risk, a share-table row, dividend paid, dividend yield, and why a rising price lowers the yield (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; ruling 29 allows i06 to split only if it cannot be taught well under 570 s; this design records that test and splits; rulings 6 and 32: shares framed as investments with risk named, no gambling). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,135 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 475 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i06a-learning-review.md` (summary `../checks/m-s12-i01-i11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-standard-outline.md` (1 to 42) and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i01-i11-learning-review-resolution.md`. Findings by the review's numbers:

The review passed this design (0 blockers, 0 should fix). Its three optional findings:

1. Optional, scene 1 (the yield before its meaning): **applied**, reviewer's gloss. "The yield, the dividend as a percentage of the price, falls from five per cent to four." The Yield heading rings with a grey tag "yield: dividend as a % of price". The full meaning still comes in scene 4.
2. Optional, scene 4 (why cents to dollars): **applied**. "Then both are in dollars. Mixing them would give three hundred and sixty-three per cent." A grey crossed row "162 ÷ 44.60 × 100% = 363%" (162 ÷ 44.60 × 100 = 363.23). It is grey, so the scene keeps one red slip.
3. Optional, scene 3 (six column names in one breath): **kept as written, with a named trim**, as the review advised. If the voiced take feels rushed, cut "The change is plus thirty-five cents, so the day before, it closed at forty-four dollars twenty-five." and its grey row.

Length: findings 1 and 2 add about 8 s. No trim is needed for length.

Open decisions closed: 1 (ruling 34) and 2 (ruling 37). Joins unchanged.

Narration 5,135 characters by script (Revision 1: 5,030), about 475 s with holds; speech before the notes about 430 s, under the 570 s cap. Feedback speech about 27 s and 21 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Changed values are checked in `work/brief-resolve-standard-i1/verify.py` (SymPy 1.14, `python -I`). Nothing recorded; human listening pending.

Scope: seventh video of the Year 12 Investment and loans strand, outline playlist order 19 (first half, split recorded below). **Standard 2 only** (root ruling 30). Pre-design pack: `../pre-design/maths-standard/math-s12-i06.md` (its suggested "i06a" half). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson14.sa.html` (SHA256 `83d9524b6a12192ae23697c958efe92e39456423e8ef6b35a4288b20e5aeab9a`; the hook (the same dividend, a price up by a quarter, the yield falling); the "Two returns" card ("Capital growth is the price going up, and you only receive it if you sell. Dividends are cash the company pays you"); the yield formula; `we-1` (Brindle Ltd, $44.60, 162c, 3.63%; "The High and Low columns ... take no part"); `we-2` (850 shares, 24c, $6.40: $204.00 and 3.75%); Traps 01 to 03). Route entry: `math-s12-i06` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; reused painted plates (a kettlebell for the gym chain; the phone tower for i06b's company in the final frame); the share table, statement and boards coded.

Owner rules applied: as i01 (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings before terms (share, dividend, capital growth, dividend yield); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a gym chain, a phone network, both invented); money spoken naturally; Australian spelling; no em dashes; conversational narration; no gambling words or images, risk named plainly).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Investment and loans; Standard 2), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form):

- `cieba53790`: "Interpret and analyse tables and graphs about the value of share" (this video: tables; i06b: graphs)
- `ci8a691aa3`: "Calculate the dividend paid and the dividend yield on shares (excluding franked dividends)"

Standard 1: no matching point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35

**Boundary:** starts from i05's two-route final frame (left panel: the kettlebell `ma11-kettlebell-v1.png` beside the coded share-table row "Company | Last | Div | Yield" / "Larkspur Fitness Ltd (a gym chain) | $6.00 | 30c | ?", chip "Standard 2 next: shares, dividends and yield"; right panel: the four investment objects for Standard 1; chips "Next" and "?"); the right panel, the rule and the "Next" chip fade on the first sentence. Recalls i05 (bank accounts grow at a known rate) and Year 11 (a percentage of an amount; cents to dollars) in a phrase or grey chip. Teaches: a share as a small part-ownership of a listed company; two separate returns, the price changing (capital growth, banked only when sold) and dividends (cash per share, when the company declares one); risk said and shown once (prices can fall, dividends can be cut, money can be lost); reading a share-table row (Last, Change, High, Low, Div, Yield; Last is the price now); dividend yield = dividend per share ÷ current price × 100%, with cents changed to dollars first and the number of shares never in it; dividend paid = number of shares × dividend per share; why the same dividend gives a lower yield when the price rises. Stops at tables, dividends and yield. Not taught: graphing a share's value over time (i06b); brokerage (i07); franked dividends (excluded by the syllabus).

## Decisions

- **Split (root ruling 29's test, recorded).** The outline's i06 holds three syllabus ideas, each new to every Standard student: what a share is with its risk and the share table, dividends and the yield, and graphing a share's value over time by hand and with a digital tool. A single design needs about nine teaching scenes (share and risk, the table row, the yield, dividend paid, the price-up-yield-down paradox, a hand-drawn graph, a spreadsheet chart, percentage change, a two-share comparison) and runs to about 7,000 characters, about 616 s with holds, over the 570 s cap; fitting it would drop the paradox (the site's hook) or the digital tool (a syllabus demand). So: **i06a** (this video: `cieba53790` tables and `ci8a691aa3`) and **i06b** (`cie1731909` and `cieba53790` graphs). Both share outline number 19, as a04a and a04b do.
- **Anchor: an invented gym chain, Larkspur Fitness Ltd (reused painted plate, live).** $6.00 a share, a 30c dividend, a 5.00% yield; two years later the same 30c and a price of $7.50, a 4.00% yield (the site's hook and revisit numbers, with an invented company). A gym chain is a business students use. Plate reused: `ma11-kettlebell-v1.png` (viewed 18 Nov 2026: a black cast-iron kettlebell, true alpha) as the company's badge. No people, no real company or exchange branding.
- **Worked examples: the site's `we-1` and `we-2`.** `we-1` (Brindle Ltd: Last $44.60, Change +0.35, High $48.20, Low $37.15, Div 162c, Yield 3.63%) carries the table and the yield; `we-2` (850 shares, 24c, $6.40: $204.00 and 3.75%) carries dividend paid and "the number of shares is not in the yield". `we-2`'s holder is not named (said as "an investor").
- **Risk wording (rulings 6 and 32).** Said once and shown once on a plain risk card (scene 2): "The price can fall below what you paid, a dividend can be cut, and you can lose money." Shares are "an investment in a real business, with real risk". No "win", "bet", "jackpot", casino or race imagery anywhere.
- **Join.** Scene 1 opens on i05's final frame; the left panel grows to fill the frame.
- **Simulations (standard item 3).**
  1. **Two returns** (scene 2): a coded price tag on the share that slides up or down on a vertical rail (capital growth or loss, "only when you sell"), and a coded coin labelled "30c" that drops from the company to the holder each year (dividend).
  2. **Share-table row** (scenes 3, 4; new `ShareTable`): columns light in turn as named; High and Low grey with "not used here"; the Yield cell empties and rebuilds itself from Div and Last as the narration explains.
  3. **Dividend stack** (scene 5): 850 small share tiles each drop a 24c coin into a pile that totals $204.00; then one tile alone shows "24c ÷ $6.40", the 850 crossed out of the yield line.
  4. **Yield slider** (scene 6; `ParameterSlider` and `LiveReadoutBoard`): the price slides $6.00 → $7.50 with the dividend locked at 30c; the yield readout falls 5.00% → 4.00%, while a "value of 100 shares" readout rises $600 → $750.
- **Colour roles (fixed for i06a to i08).** Price (Last, price now) **violet**; dividend per share **amber**; dividend yield **teal**; number of shares in ink; capital growth (price change) **blue**; answer **green**; mistake **red**, crossed slips only; unused columns grey.
- **Large type, handwritten voice.** Table cells 40 px (the active row 44 px), column headers 34 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "part-owner", "only when you sell", "cash per share", "can fall", "Last = price now", "not used here", "cents to dollars first", "per dollar of price", "shares × dividend", "no number of shares in the yield", "same 30c, bigger price", "holders still better off". At most two live at once.
- **Stage changes (standard item 2).** i05's frame and the gym chain (1); two returns and the risk card (2); the share table (3); the yield rebuilt on the board (4); the dividend stack (5); the yield slider (6); framed card (7); question cards (8 to 11); the phone tower and its six prices for i06b (12); key notes (13).
- **Worked examples (g01 layout).** 4: task strip "Brindle Ltd: Last $44.60, Div 162c. Calculate the dividend yield." (site `we-1`); formula strip "dividend yield = dividend per share ÷ price now × 100%"; givens card "dividend = 162c = $1.62" (amber), "price now (Last) = $44.60" (violet); rows; framed answer "3.63%"; crossed slip "44.60 ÷ 1.62 = 27.53" (caption "upside down: dividend ÷ price"). 5: task strip "An investor holds 850 shares. The dividend is 24c a share and the price is $6.40. Find the dividend paid and the dividend yield." (site `we-2`); framed answers "$204.00" and "3.75%"; crossed "850 × 0.24 ÷ 6.40 × 100%" in the yield row (caption "no number of shares in the yield").
- **Memory aid.** Framed card: "Paid: shares × dividend. Yield: dividend ÷ price now × 100%." Key line: "Cents to dollars first. Last = price now. The number of shares never goes in the yield."
- **Visual surprise.** As the price slider climbs, the value of the holding rises while the yield readout falls (scene 6): the site's paradox, seen.
- **Site notes (pack section 8).** No numerical error in lesson14. The site's capital growth calculation (SA 2's $3,360) is not used; capital growth is named in one plain phrase (pack decision). Trap 01 (cents divided by dollars) is not used as a crossed slip, because 162 ÷ 44.60 = 3.63 happens to give the right digits (the slip only shows if a student then multiplies by 100); the inverted fraction (MC 1's 27.53) is crossed instead. The share price graph (`we-3`) moves to i06b.
- **Plain meanings at first use.** Share ("a small piece of ownership in a company"); listed ("its shares are bought and sold on a stock exchange"); dividend ("cash a company pays for each share, usually from its profits"); capital growth ("the share price rising; you only collect it when you sell"); dividend yield ("the dividend as a percentage of today's price"); Last ("the latest price, the price now").
- **Attempts.** A1 (pack question 1, the Tallowood Ltd row: Last $12.50, Change −0.20, High $14.10, Low $10.85, Div 45c): yield 3.60%; 600 shares: $270.00; a rising price lowers the yield; crossed "0.45 ÷ 14.10 = 3.19%" (caption "High is not the price now: use Last"). A2 (original, site Trap 03): 1,200 shares bought at $4.00, now $5.00, dividend 20c: $240.00; yield 4.00%; crossed "0.20 ÷ 4.00 = 5%" (caption "use the price now, not the price paid").
- **Mistake scene:** none separate. The inverted fraction (4 crossed); the number of shares in the yield (5 crossed; site Trap 02); High as the current price (A1 crossed); the price paid in the yield (A2 crossed; site Trap 03); cents not changed to dollars (4, said); "a falling yield means it did badly" (6).
- **Cause chain taught, in order:** (1) owning a share is owning part of a business, so its value follows the business and can rise or fall (2); (2) the two returns are separate: the price change is collected only by selling, the dividend is paid while you hold (2); (3) the yield compares one year's dividend with what one share costs now, so it uses the price now and one share's dividend, in the same units (3, 4); (4) the dividend paid scales with the number of shares, but the yield is a ratio for one share, so the number of shares cancels and never appears (5); (5) a bigger price under the same dividend makes the fraction smaller, so a rising price lowers the yield even as the holding is worth more (6).
- **Entry knowledge (route):** i05 (comparing investments by growth); Year 11 Standard m01 (a percentage of an amount; percentage from a fraction); cents to dollars. Recalled in a phrase or grey chip.
- **Standard 1 path:** not applicable (Standard 2 only). Standard 1 viewers go from i05 to i08.
- **Money sources (root ruling 32).** All companies, prices and dividends are invented. Real dividend yields on large Australian companies are commonly a few per cent, so 3% to 5% is realistic (pack; no single source quoted on screen). Narration says once that "prices and dividends change".
- **Handoff (to math-s12-i06b, "How do we graph and interpret a share's value over time?").** Scene 12, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: the phone tower `ma11-phone-tower-v1.png` (600 px tall) at the left with the label "Ridgeline Mobile Ltd (a phone network)" (36 px); a coded table at the centre, 40 px: "month | 1 | 2 | 3 | 4 | 5 | 6" / "closing price ($) | 3.20 | 3.55 | 3.40 | 3.90 | 4.15 | 3.95"; empty coded axes at the right ("price ($)" up, "month" across); chips "up every month?", "Next: a share's value over time" and "?". No points are plotted and no percentage is shown. This is i06b's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Hook: 0.30 ÷ 6.00 = 5.00%; 0.30 ÷ 7.50 = 4.00%; 7.50 ÷ 6.00 = 1.25 (up a quarter); 100 shares $600 → $750.
  (b) `we-1`: 1.62 ÷ 44.60 = 0.0363229 → 3.63%; inverted 44.60 ÷ 1.62 = 27.53.
  (c) `we-2`: 850 × 0.24 = 204.00; 0.24 ÷ 6.40 = 3.75%; slip 850 × 0.24 ÷ 6.40 × 100 = 3187.5 (%).
  (d) A1: 0.45 ÷ 12.50 = 3.60%; 600 × 0.45 = 270.00; slip 0.45 ÷ 14.10 = 3.19%.
  (e) A2: 1200 × 0.20 = 240.00; 0.20 ÷ 5.00 = 4.00%; slip 0.20 ÷ 4.00 = 5.00%.
  (f) Pronunciations: "forty-four dollars sixty"; "a hundred and sixty-two cents"; "three point six three per cent"; "six dollars forty".

Main question: *A gym chain pays the same 30c dividend while its share price climbs from $6.00 to $7.50. How do we read a share table, and calculate the dividend paid and the dividend yield?*
Entry knowledge (i05; Year 11 Standard m01): comparing investments; percentages.
Stops after: shares, two returns and risk, the table row, dividend paid, dividend yield, price up and yield down. No graphs over time, no brokerage, no franking.
Handoff: math-s12-i06b: "a phone network's six month-end prices: up every month?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): price violet; dividend amber; yield teal; capital growth blue; answer green; mistake red. Header strip "INVESTMENT AND LOANS" (topic only; root ruling 23 Nov 2026: no course name on screen). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: same dividend, lower yield
> Here's a gym chain, Larkspur Fitness. It's made up, but it works like real companies on the stock exchange. Its shares cost six dollars each, and it pays a dividend of thirty cents for each share. Two years later, it pays exactly the same thirty cents, but the share price has climbed to seven dollars fifty. The yield, the dividend as a percentage of the price, falls from five per cent to four. And nothing has gone wrong. So how do we read a share table, and work out dividends and the dividend **yield**?

Visual: opens on i05's final frame; on the first sentence the right panel, the rule and the "Next" chip fade, and the left panel grows: the kettlebell `ma11-kettlebell-v1.png` (400 px) as the company's badge, the coded share-table row (44 px) across the centre. On "made up" a grey chip "invented company". On "six dollars each" the Last cell "$6.00" rings violet; on "thirty cents" the Div cell "30c" rings amber. On "Two years later" a second row slides in below: "Larkspur Fitness Ltd | $7.50 | 30c | ?". On "the dividend as a percentage" the Yield column heading rings teal with a 30 px grey tag "yield: dividend as a % of price" (Revision 2, review finding 1). On "five per cent to four" the Yield cells fill "5.00%" and "4.00%" (teal), the second with a small down arrow. On "nothing has gone wrong" a grey chip "same dividend, higher price". On "yield" heading "Shares: dividends and yield" writes on, and the question chip "Why does the yield fall?" moves to the top right.

### 2. what a share is
> First, what is a share? A share is a small piece of ownership in a company. Own one Larkspur share, and you own a tiny part of the gym chain. A share can pay you in two separate ways. The price can rise, and you only collect that if you sell. That's called capital **growth**. And the company may pay a dividend, cash for each share you hold, usually out of its profits. But nothing is guaranteed. The price can fall below what you paid, a dividend can be cut, and you can lose **money**. Prices and dividends change all the time. Shares are an investment in a real business, with real **risk**.

Visual: stage change: the kettlebell badge (300 px) at the centre top with a coded slice of a pie "1 share = a tiny part of the company", hand tag "part-owner". At the left (simulation 1) a vertical rail with a violet price tag "$6.00" that slides up to "$7.50"; on "growth" the label "capital growth (only when you sell)" (blue), hand tag "only when you sell". At the right an amber coin "30c" drops from the badge to a small coded wallet card each year, label "dividend: cash per share", hand tag "cash per share". On "nothing is guaranteed" the price tag slides down below "$6.00" in grey, hand tag "can fall". On "money" a plain risk card (44 px, ink on a pale grey card): "Prices can fall. Dividends can be cut. You can lose money." On "change all the time" a grey chip "prices and dividends change". On "risk" the card's border thickens.

### 3. reading a share table
> Share prices are shown in tables like this one. Each row is a company. Last is the latest price, the price now. Change is how much it moved since the day before. High and Low are the highest and lowest prices over the past year. Div is the dividend per share for the year, in cents. And Yield is the dividend yield. For Brindle, the last price is forty-four dollars sixty. The change is plus thirty-five cents, so the day before, it closed at forty-four dollars twenty-five. And the dividend is a hundred and sixty-two **cents**. Let's rebuild that yield, three point six three per cent, **ourselves**.

Visual: clear change: the `ShareTable` (simulation 2), 1,600 × 400 px, three invented rows (Brindle Ltd, Coralpoint Ltd, Larkspur Fitness Ltd), headers "Company | Last | Change | High | Low | Div | Yield" (34 px), cells 40 px. As each column is named it lights: "Last" (violet), hand tag "Last = price now"; "Change" (+0.35, grey-blue); "High" and "Low" (then dim grey); "Div" (amber); "Yield" (teal). The Brindle row brightens to 44 px: "$44.60 | +0.35 | $48.20 | $37.15 | 162c | 3.63%". On "plus thirty-five cents" a grey row under it, 36 px: "day before: 44.60 − 0.35 = $44.25". On "cents" the Last and Div cells ring. On "ourselves" the Yield cell "3.63%" empties to "?", and High and Low grey with the tag "not used here".

### 4. the dividend yield
> The dividend yield compares the dividend with the price. It's the dividend per share, divided by the price now, times a hundred per cent. It tells you how much cash you get back each year, for each dollar a share costs today. First, change cents to dollars, so a hundred and sixty-two cents is one dollar sixty-**two**. Then both are in dollars. Mixing them would give three hundred and sixty-three per cent. Then one dollar sixty-two, divided by forty-four dollars sixty, times a hundred per cent, is three point six three per **cent**. Dividing forty-four sixty by one sixty-two is the **slip**. That's the fraction upside down.

Visual: clear change to the g01 board, the Brindle row as a strip at the top (32 px). Task strip, 44 px: "Brindle Ltd: Last $44.60, Div 162c. Calculate the dividend yield." (site `we-1`). Formula strip, 52 px: "dividend yield = dividend per share ÷ price now × 100%" (dividend amber, price violet, yield teal), hand tag "per dollar of price". Givens card, 44 px: "price now (Last) = $44.60" (violet); on "two" "dividend = 162c = $1.62" (amber), hand tag "cents to dollars first"; on "Mixing them" a grey row, 36 px, "162 ÷ 44.60 × 100% = 363%", crossed in grey (Revision 2, review finding 2). Rows, 52 px: "1.62 ÷ 44.60 × 100%"; on "cent" "= 3.632…% ≈ 3.63%" (framed green), and the strip's Yield cell refills "3.63%" (simulation 2). On "slip" a red slip "44.60 ÷ 1.62 = 27.53" writes and is crossed (caption "upside down: dividend ÷ price").

### 5. dividend paid
> The dividend you actually receive depends on how many shares you hold. An investor holds eight hundred and fifty shares, and the company declares a dividend of twenty-four cents a share. The dividend paid is eight hundred and fifty times twenty-four cents, which is two hundred and four **dollars**. The shares trade at six dollars forty. So the yield is twenty-four cents divided by six forty, three point seven five per **cent**. Notice the number of shares isn't in the yield. It's the same for one share, or a **thousand**.

Visual: clear change to the g01 board. Task strip, 44 px: "An investor holds 850 shares. The dividend is 24c a share and the price is $6.40. Find the dividend paid and the dividend yield." (site `we-2`). Givens card, 44 px: "850 shares", "dividend = 24c = $0.24" (amber), "price now = $6.40" (violet). On "eight hundred and fifty times" (simulation 3) a grid of small share tiles (17 × 50) each drops an amber coin into a pile; row, 52 px: "850 × $0.24"; on "dollars" "= $204.00" (framed green), hand tag "shares × dividend", with a coded statement card (300 × 180 px) "dividend statement: 850 shares × 24c = $204.00". On "cent" row "0.24 ÷ 6.40 × 100% = 3.75%" (framed green). On "thousand" a red slip "850 × 0.24 ÷ 6.40 × 100%" writes in the yield row and is crossed (caption "no number of shares in the yield"), hand tag "no number of shares in the yield".

### 6. why the yield fell
> Now back to the gym chain. Thirty cents on a six-dollar share is a yield of five per cent. When the price climbs to seven dollars fifty, the dividend is still thirty cents, but now it's divided by a bigger **price**. Thirty cents over seven fifty is four per **cent**. So a rising price lowers the yield. Holders are still better off, because their shares are worth more. So when the dividend stays the same, the price and the yield move in opposite directions. The yield just measures the dividend against today's **price**.

Visual: stage change: the kettlebell badge (300 px) at the left; the yield slider (simulation 4) at the centre: a violet price slider from $6.00 to $7.50, the dividend chip "30c" with a lock (amber); readouts, 44 px: "yield = 0.30 ÷ price × 100%" (teal) and "value of 100 shares" (blue). On "Thirty cents on a six-dollar share" the readouts show "5.00%" and "$600". On "price" (first bold) the slider runs to $7.50; the yield readout falls through 4.8%, 4.4% … and the holding readout rises, hand tag "same 30c, bigger price". On "cent" the yield readout lands "4.00%" (framed green), the holding "$750". On "worth more" hand tag "holders still better off"; on "opposite directions" two small arrows, price up (violet) and yield down (teal). On "price" (last bold) the hook's two rows return small with "5.00%" and "4.00%" filled.

### 7. memory aid
> Here's the summary. The dividend paid is the number of shares, times the dividend per share. The dividend yield is the dividend per share, in dollars, divided by today's price, times a hundred per cent. And remember, prices can fall, and dividends can be **cut**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a single share tile with its amber coin over a violet price tag, and the share grid's pile beside it. Main line, hand font 56 px: "Paid: shares × dividend. Yield: dividend ÷ price now × 100%." On "cut" the key line, 40 px: "Cents to dollars first. Last = price now. The number of shares never goes in the yield." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Here's a row from a share table, for Tallowood. Calculate the dividend yield. Someone owns six hundred Tallowood shares. Find the dividend they receive. And if the price rises while the dividend stays at forty-five cents, what happens to the yield? Explain why. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A row of a share table reads: Tallowood Ltd | Last $12.50 | Change −0.20 | High $14.10 | Low $10.85 | Div 45c | Yield ?. (a) Calculate the dividend yield. (b) An investor owns 600 Tallowood shares. Find the dividend received. (c) If the price rises and the dividend stays at 45c, what happens to the yield? Explain." Picture slot: the coded `ShareTable` row with the Yield cell "?". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Forty-five cents is zero point four five dollars. Divided by the last price, twelve fifty, that's three point six per **cent**. Six hundred shares times forty-five cents is two hundred and seventy **dollars**. If the price rises, the yield falls, because the same dividend is divided by a bigger **price**. Using the High, fourteen ten, is the slip. Last is the price **now**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "0.45 ÷ 12.50 × 100%"; on "cent" "= 3.60%" (framed green), the Yield cell filling. On "dollars" "600 × $0.45 = $270.00" (framed green). On "price" "same 45c ÷ bigger price → smaller yield" (framed green). On "now" a red slip "0.45 ÷ 14.10 = 3.19%" writes and is crossed (caption "High is not the price now: use Last"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. An investor bought twelve hundred shares at four dollars each. The shares now trade at five dollars, and the company pays a dividend of twenty cents a share. Find the total dividend. Then find the dividend yield at today's price. Pause here to answer.

Visual: `QuestionCard`, 40 px: "An investor bought 1200 shares at $4.00 each. The shares now trade at $5.00, and the company pays a dividend of 20c a share. (a) Find the total dividend received. (b) Find the dividend yield at today's price." Picture slot: a coded share tile with "bought: $4.00" (grey) and "now: $5.00" (violet). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Twelve hundred times twenty cents is two hundred and forty **dollars**. The yield uses today's price, so it's twenty cents divided by five dollars, four per **cent**. Using the four dollars you paid, and getting five per cent, is the **slip**. The yield is always measured against the price **now**.

Visual: the card shrinks to the top. Rows, 44 px: on "dollars" "1200 × $0.20 = $240.00" (framed green). On "cent" "0.20 ÷ 5.00 × 100% = 4.00%" (framed green). On "slip" a red slip "0.20 ÷ 4.00 = 5%" writes and is crossed (caption "use the price now, not the price paid"). On "now" the "now: $5.00" tag rings violet. Hold about 1 s.

### 12. handoff
> A share table shows just one moment. But the price keeps moving, day after day. Here's a phone network company's share price at the end of each month, for six months. It went up overall. But did it go up every month? And how do we graph it, and say what it shows? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`): on "phone network company" the phone tower `ma11-phone-tower-v1.png` (600 px tall) at the left with "Ridgeline Mobile Ltd (a phone network)" (36 px). On "end of each month" the coded table at the centre, 40 px: "month | 1 | 2 | 3 | 4 | 5 | 6" / "closing price ($) | 3.20 | 3.55 | 3.40 | 3.90 | 4.15 | 3.95". On "graph it" empty axes at the right ("price ($)" up, "month" across). On "next" chips "up every month?", "Next: a share's value over time" and "?". Hold about 2 s. No points plotted, no percentage shown. This is i06b's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- A share: part-ownership of a company. Prices can fall.
- Two returns: price change (when sold) and dividends (cash).
- Dividend paid = number of shares × dividend per share.
- Dividend yield = dividend ÷ price now × 100% (cents → $).
- Same dividend, higher price: lower yield.

Memory aid (framed card, right side, as in scene 7): *Paid: shares × dividend. Yield: dividend ÷ price now × 100%.* Key: *Cents to dollars first. Last = price now. The number of shares never goes in the yield.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i06b's opening frame.

## Teaching checks

- **Does it explain causes?** Why a share can fall: it is part of a business (2). Why two returns are separate: one needs a sale, one is paid while held (2). Why the yield uses the price now and one share: it compares this year's cash with what a share costs today (3, 4). Why the number of shares is not in the yield: it is a ratio for one share (5). Why a rising price lowers the yield: the same numerator over a bigger denominator (6).
- **Misconceptions addressed:** the inverted fraction (4 crossed); the number of shares in the yield (5 crossed); High as the price now (A1 crossed); the price paid in the yield (A2 crossed); cents not converted (4); a falling yield read as a bad result (6); shares as a guaranteed return or as a bet (2).
- **Visual standard, item by item:** 1 the gym chain's badge from the first frame; 2 a new stage every 40 to 60 s; 3 a price tag sliding on a rail beside a dividend coin, a share-table row whose Yield cell rebuilds itself, 850 tiles dropping coins, a price slider with the yield falling as the holding rises; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards with framed answers and crossed slips; 8 framed card and five bullets; 9 the yield falling while the holding's value rises.
- **One idea at a time:** what a share is (2), the table (3), the yield (4), dividend paid (5), the paradox (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 27 s and 21 s.
- **Avoided double teaching:** percentages from Year 11 in a chip; graphs over time left to i06b.
- **Syllabus coverage:** `cieba53790` (tables: 1, 3, 4, A1; key notes 1, 4); `ci8a691aa3` (4, 5, 6, A1, A2; key notes 3 to 5).
- **Out of scope by design:** graphs over time (i06b); brokerage (i07); franked dividends (syllabus).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme).** "A row of a share table reads: Tallowood Ltd | Last $12.50 | Change −0.20 | High $14.10 | Low $10.85 | Div 45c | Yield ?. (a) Calculate the dividend yield. (b) An investor owns 600 Tallowood shares. Find the dividend received. (c) If the price rises and the dividend stays at 45c, what happens to the yield? Explain."
Model answer: (a) 0.45 ÷ 12.50 × 100% = 3.60%. (b) 600 × $0.45 = $270.00. (c) It falls: the same dividend is divided by a larger price. Classic mistake (crossed): "0.45 ÷ 14.10 = 3.19%".

**Attempt 2 (scene 10; original, site Trap 03, 2 marks suggested).** "An investor bought 1200 shares at $4.00 each. The shares now trade at $5.00, and the company pays a dividend of 20c a share. (a) Find the total dividend received. (b) Find the dividend yield at today's price."
Model answer: (a) 1200 × $0.20 = $240.00. (b) 0.20 ÷ 5.00 × 100% = 4.00%. Classic mistake (crossed): "0.20 ÷ 4.00 = 5%".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Gym chain | 30c ÷ $6.00 = 5.00%; 30c ÷ $7.50 = 4.00%; 100 shares $600 → $750 | 1, 6 |
| `we-1` | 44.60 − 0.35 = 44.25 (the day before); 1.62 ÷ 44.60 = 3.63%; slip 27.53 | 3, 4 |
| `we-2` | 850 × 0.24 = 204.00; 0.24 ÷ 6.40 = 3.75% | 5 |
| A1 | 3.60%; 270.00; slip 3.19% | 8, 9 |
| A2 | 240.00; 4.00%; slip 5% | 10, 11 |
| Handoff | prices 3.20, 3.55, 3.40, 3.90, 4.15, 3.95 (no analysis) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 0.30/6.00 = 0.05; 0.30/7.50 = 0.04; 7.50/6.00 = 1.25; 100 × 6.00 = 600; 100 × 7.50 = 750.
- 44.60 − 0.35 = 44.25; 1.62/44.60 = 0.0363229; 44.60/1.62 = 27.5309.
- 850 × 0.24 = 204; 0.24/6.40 = 0.0375.
- 0.45/12.50 = 0.036; 600 × 0.45 = 270; 0.45/14.10 = 0.0319149.
- 1200 × 0.20 = 240; 0.20/5.00 = 0.04; 0.20/4.00 = 0.05.

## Memory aid check

- **"Paid: shares × dividend. Yield: dividend ÷ price now × 100%."** with key line **"Cents to dollars first. Last = price now. The number of shares never goes in the yield."** Original (the site's formula and Traps 01 to 03). Meaning, as said in scene 7: the dividend received is the dividend per share for each share held; the dividend yield is one share's dividend as a percentage of one share's current market price. Assumptions checked: the dividend is the annual dividend per share as shown in the table's Div column; the "price now" is the table's Last (or the stated current price); unfranked (the syllabus excludes franking); the units match after cents become dollars (or both stay in cents). It helps a new case: 50c on a $10.00 share is a 5.00% yield, whether you hold 1 share or 2,000. Introduced after scenes 3 to 6.
- **Considered, not used:** "Yield = what it pays ÷ what it costs" (true, but "what it costs" invites the price paid, Trap 03).

## Narration length estimate

Revision 2, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,135 characters** (Revision 1: 5,030), 13 scene headings. Characters per scene (1 to 13): 504, 583, 594, 618, 515, 513, 259, 294, 360, 261, 283, 276, 75.

At 13.3 characters per second the speech is about 386 s. Total with the holds and settling below **about 475 s (7 min 55 s)**, 95 s under the 570 s cap; speech and holds before the notes about 430 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the two returns (2), the table (3), the coin pile (5) and the slider (6) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

No reserve trims are needed for length. Revision 2 names one for pace (review finding 3): if scene 3 feels rushed on the voiced take, cut "The change is plus thirty-five cents, so the day before, it closed at forty-four dollars twenty-five." and its grey row; Change keeps its meaning.

## Scene list and build ids

Lesson key `m-s12i06a` (route math-s12-i06, first half). Explainer folder `src/explainer/lessons/math-s12-i06a`; build inputs in `docs/production/claude-pm/lessons/math-s12-i06a/` (at voicing).

In order (13 scene headings): hook-same-dividend, what-a-share-is, share-table, dividend-yield, dividend-paid, why-yield-fell, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | i05's frame; the gym chain's two rows |
| 40 to 95 s | 2 | Two returns and the risk card |
| 95 to 140 s | 3 | The share table |
| 140 to 190 s | 4 | g01 board: the yield |
| 190 to 240 s | 5 | g01 board: dividend paid |
| 240 to 280 s | 6 | The yield slider |
| 280 to 300 s | 7 | Framed memory card |
| 300 to 390 s | 8 to 11 | Question cards and countdowns, then feedback |
| 390 to 415 s | 12 | The phone tower and its prices, for i06b |
| 415 to 460 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i05's last frame continues into 1 (the right panel fades); 1 to 2 stage change; 2 to 3 clear change; 3 to 4 clear change to the board; 4 to 5 clear change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i06a-learning-review.md`, `science_check` = `checks/m-s12-i06a-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma11-kettlebell-v1.png` (a black cast-iron kettlebell, true alpha; reused as the gym chain's badge); `ma11-phone-tower-v1.png` (a lattice mobile phone tower with antenna panels on a fenced concrete pad, true alpha; reused for i06b's company in the final frame); `ma11-gym-membership-card-v1.png` (listed; not used: a membership card suggests a customer, not an owner).

Need: none new. Reused: `ma11-kettlebell-v1.png`, `ma11-phone-tower-v1.png`.

Coded: the share table, price rail, dividend coins and wallet card, the risk card, the share-tile grid, the dividend statement card, the slider and readouts, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `ParameterSlider`, `LiveReadoutBoard`, `PlateFields`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i06; the main new part of i06a to i08):
1. **ShareTable** (new, course-neutral): a coded, unbranded share-table row set (Company, Last, Change, High, Low, Div, Yield) with column highlighting, a greyed "not used here" state, and a cell that empties and rebuilds from a formula (Div ÷ Last). Check: Brindle's Yield rebuilds as 3.63%; Tallowood's as 3.60%. Reused by i06b (a price-history table), i07 and i08.
2. **Share-tile grid** (small, lesson folder): n tiles each dropping a coin into a pile with a running total. Check: 850 tiles at 24c total $204.00.

## Codex asset brief

No new plate. Both plates exist and were viewed. The share table, statement card and risk card are coded and unbranded; no real company, exchange or broker name appears.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly ("the value of share" as written) and that no Standard 1 code is claimed.
3. Confirm the risk sentence is said once and shown once, "prices and dividends change" is said once, and no gambling word or image appears (rulings 6, 32).
4. Confirm every yield uses the price now, converts cents to dollars, and excludes the number of shares; no franking.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on i05's final frame and scene 12 matches the decisions file's i06a to i06b join (no plotted points, no percentage).
7. Confirm all company names are invented and unbranded, no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Shares: Dividends and Dividend Yield from a Share Table | Year 12 Maths Standard

(Title length: 80 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson14.sa.html

A gym chain pays the same 30c dividend two years running, but its share price climbs from $6.00 to $7.50, and its dividend yield falls from 5% to 4%. Nothing has gone wrong. Learn what a share is, the two separate ways it can pay (a rising price, collected only when you sell, and dividends), and the risks: prices can fall, dividends can be cut, and you can lose money. Read a share-table row, calculate the dividend paid (shares × dividend per share) and the dividend yield (dividend ÷ price now × 100%), and see why a higher price lowers the yield. Two exam-style questions at the end. All companies are invented, and all questions are written for HSCScience in the HSC style; they are not official NESA questions. Share prices and dividends change.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Interpret and analyse tables and graphs about the value of share"
"Calculate the dividend paid and the dividend yield on shares (excluding franked dividends)"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35

Builds on: Simple vs Compound Interest in a Spreadsheet. Next: A Share's Value Over Time.

#Year12Maths #MathsStandard #Shares #HSCScience

## Open decisions

- **1. The split (root; ruling 29).** Closed in Revision 2: ruling 34 accepts the split. Revision 1 text: Recorded under Decisions: a single i06 runs about 616 s. If root prefers one video, the cut would be scene 6's slider and the two-share comparison in i06b, at the cost of the site's own hook and a clear "with digital tools" scene.
- **2. Invented company names (root).** Closed in Revision 2: ruling 37 (Codex confirms none is an ASX listing in the maths check). Revision 1 text: Larkspur Fitness, Brindle (the site's), Coralpoint, Tallowood (the pack's) and Ridgeline Mobile. Codex to confirm none is an ASX-listed name; any match is renamed.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-i06a-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A. Revision 1 note: Next: student learning review (trace from i05; check that "part-ownership" and the two returns land before the table, that the risk card is plain and not alarming, that cents to dollars is clear, that the paradox feels resolved, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `ShareTable`.
