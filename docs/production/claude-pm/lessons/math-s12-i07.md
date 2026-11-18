# Maths S12 I07: What does it really cost to buy shares once brokerage is added? Trade value, a flat fee, the fee as a share of a small trade, "the greater of" a flat fee or a percentage, and the trade value where the two rules cost the same (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; ruling 32: a named broker's published tiers cited in the design, not on screen). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,108 characters by script (see "Narration length estimate"; Revision 2), 12 scene headings, about 473 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i07-learning-review.md` (summary `../checks/m-s12-i01-i11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-standard-outline.md` (1 to 42) and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i01-i11-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scenes 1 and 3 (the small-trade cost is not fair to current fees): **accepted**, with root's decision 5 (the fair fee at the source's current tier). The dated source (CommSec, "Rates and fees", read 18 Nov 2026) charges $5 on trades up to $1,000, so scene 3 now uses that tier. "This broker charges less on small trades, five dollars up to a thousand. But spend just five hundred dollars, and even five dollars is one per cent of your **money**, three times the share." The sale receives $495; the price must rise "two per cent, ten dollars, just to cover the two **fees**"; and "Any fixed fee is a bigger share of a small trade." A grey chip gives the tiers with the date. Under each trade bar, a "fee as a share of the trade" bar on one 0% to 2% scale makes 0.32% against 1% (then 2%) easy to see. Scene 1 says "it can eat into your gains". The point is unchanged: a fixed fee is a bigger share of a small trade. Revision 1's 3.99% and 7.98% (the site's $19.95 on $500) are gone from the narration, decisions, cause chain, teaching checks and numbers.
2. Optional, scene 3 (why eight, not four): **applied in the new form**. The narration now says the two fees are "ten dollars" before the 2%.
3. Optional, feedback 2 (length): **applied**. ", the larger" is cut after "thirty-four dollars thirty-two"; the screen's "> $19.95" carries it. Feedback 2 is now about 30 s (394 characters).
4. Optional, scene 4 (a long single board): **applied**. The hand tag "work out both" gets its own cue, and the two amber bars appear on "That's more than" and slide into the row on "three".

Housekeeping (ruling 37): the description's "Next" line names i08 by its new title, "Choosing an Investment Strategy".

Length: finding 1 adds about 9 s; finding 3 saves about 1 s. No trim is needed.

Open decisions closed: 1 (ruling 37). Decision 2 is backed by the review and left for root to confirm. Joins unchanged: scene 11 still repeats i05's right panel full-frame for i08.

Narration 5,108 characters by script (Revision 1: 5,005), about 473 s with holds; speech before the notes about 428 s, under the 570 s cap. Feedback speech about 28 s and 30 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Changed values are checked in `work/brief-resolve-standard-i1/verify.py` (SymPy 1.14, `python -I`). Nothing recorded; human listening pending.

Scope: ninth video of the Year 12 Investment and loans strand, outline playlist order 20. **Standard 2 only** (root ruling 30). Pre-design pack: `../pre-design/maths-standard/math-s12-i07.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson15.sa.html` (SHA256 `8dbb9c452ae7fc68830e5346361d39507f955c0418e81037967c0a47b59faa29`; "total cost = shares × price + brokerage"; the "greater of" card, brokerage = max(F, p% × V), the switch at "V = 29.95 ÷ 0.001 = $29 950", and "A $19.95 fee on a $500 trade is 4% of what you invested, and the share has to rise 8% before a round trip breaks even"; `we-1` (500 shares at $12.40, flat $19.95: $6,219.95, 0.32%); `we-2` (1,800 shares at $23.50, the greater of $29.95 or 0.11%: $46.53, $42,346.53); Traps 01 and 02). Card 10 (the four investments) belongs to i08. Route entry: `math-s12-i07` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; reused painted plates (the full coin jar, a trade van); the order ticket, bars, graph and boards coded.

Owner rules applied: as i01 (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings (broker, brokerage, trade value, flat fee); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (savings from casual work, a tradie's investment); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; no gambling).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12, Investment and loans; Standard 2), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form):

- `ci143c3551`: "Solve problems involving calculation of brokerage costs and total costs of purchasing shares"

Standard 1: no matching point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35

**Boundary:** starts from i06b's final frame exactly (the full coin jar `ma12-coin-jar-full-v1.png` tagged "savings"; the coded, unbranded order ticket "BUY", "shares: 500", "price per share: $12.40", "trade value: ?", "brokerage: ?", "total cost: ?"; chips "+ a fee?", "Next: brokerage and total cost" and "?"). Recalls i06a (a share; Last as the price now) and Year 11 (a percentage of an amount; 0.12% = 0.0012; the price is not the whole cost) in a phrase or grey chip. Teaches: a broker and brokerage; trade value = number of shares × price per share; total cost of buying = trade value + brokerage; a flat fee; the fee as a percentage of the trade, so a fee bites hardest on a small trade, and selling costs a second fee; "the greater of" a flat fee and a percentage (work out both, pay the larger); the trade value where the two rules cost the same (flat fee ÷ the percentage as a decimal), on a graph; tiers named in one sentence. Stops at the cost of buying. Not taught: a full profit and return on a sale (one round-trip beat only, pack decision); comparing investment types (i08).

## Decisions

- **Anchor: a first parcel from savings (reused painted plate, live).** 500 shares at $12.40 with a flat $19.95 fee (the site's `we-1` numbers): trade value $6,200.00, total $6,219.95, the fee 0.32% of the trade. Bought from savings earned in casual work (the pack's gap-year earnings, said plainly as "savings"). Plate reused: `ma12-coin-jar-full-v1.png` (viewed 18 Nov 2026: the jar filled to the shoulder, true alpha). No people.
- **Second example: a tradie's bigger investment (reused painted plate).** The site's `we-2`: 1,800 shares at $23.50, the greater of $29.95 or 0.11%: $42,300.00, $46.53, $42,346.53 (pack anchor 3). Plate reused: `ma11-trade-van-v1.png` (viewed: a white trade van with a ladder on its roof rack, true alpha) as the tradie's badge.
- **The switch value: the site's hook numbers.** The greater of $29.95 or 0.10%: $29.95 ÷ 0.001 = $29,950 (site card). Below it the flat fee applies, above it the percentage.
- **Small trade and round trip (one beat each; pack decision; Revision 2, root's decision 5).** The fee is the dated source's current tier for the trade: $5 on a $500 trade is 1%, about three times the 0.32% that $19.95 is of $6,200; a sale costs a second $5, so the price must rise (500 + 10) ÷ 500 − 1 = 2% to cover the two fees. Revision 1 used the site's $19.95 on $500 (3.99%, "about 4%"; round trip 7.98%, "about 8%"), which the review found unfair to current small-trade fees (ruling 32). The point stays the same: a fixed fee is a bigger share of a small trade. `we-3`'s full round trip is not used.
- **Tiers (pack decision; ruling 32).** One sentence: many brokers charge a set fee for each band of trade values. For the design record, a major Australian online broker's published fees: $5 up to $1,000, $10 up to $3,000, $19.95 up to $10,000, $29.95 up to $25,000 and 0.12% above $25,000 (CommSec, "Rates and fees", https://static.commsec.com.au/support/rates-and-fees.html, read 18 Nov 2026 by the pack); the broker is not named on screen. The site's $19.95, $29.95 and 0.10% to 0.12% sit inside this range. Scene 3's $5 small-trade fee is this source's lowest tier (Revision 2, root's decision 5); Codex re-reads the page before voicing. Narration says once that "fees vary between brokers, and they change".
- **Join.** Scene 1 opens on i06b's final frame exactly; the ticket's "?" rows fill in scenes 2 and 4.
- **Simulations (standard item 3).**
  1. **Order ticket filling** (scenes 2, 4; new `OrderTicket`): trade value, then brokerage, then total, each row writing as spoken.
  2. **Fee as a slice** (scene 3): the same amber $19.95 block set against a $6,200 bar (a sliver, 0.32%) and against a $500 bar (a visible slice, about 4%); a second $19.95 block appears for the sale.
  3. **Greater-of bars** (scene 4): two amber bars side by side, "flat $29.95" and "0.11% × $42,300 = $46.53"; the taller lights and slides down into the ticket's brokerage row.
  4. **Switch graph** (scene 5; `StudioPlot`): brokerage against trade value ($0 to $60,000): a flat line at $29.95 and a line rising as 0.001 × V; the "greater of" path traced thick along the higher one; a rider moving along trade value with a live readout of the fee; the meeting point at $29,950 ringed.
- **Colour roles (fixed for i06a to i08).** Price per share **violet**; brokerage and fees **amber**; trade value ink; total cost framed **green** as an answer; the percentage line **teal**; the flat line amber; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As i01. Order ticket rows 44 px. Hand tags: "shares × price", "+ brokerage", "the price isn't the whole cost", "small trade: bigger share", "fixed fee: bigger share of a small trade", "selling: another fee", "work out both", "pay the larger", "0.11% = 0.0011", "flat fee here", "percentage here", "same cost here". At most two live at once.
- **Stage changes (standard item 2).** i06b's frame (1); the ticket filling with a flat fee (2); fee slices on a small and a large trade (3); g01 board, the greater of, with the trade van (4); the switch graph (5); framed card (6); question cards (7 to 10); the four investments for i08 (11); key notes (12).
- **Worked examples (g01 layout).** 2: task strip "500 shares are bought at $12.40 each. The broker charges a flat fee of $19.95. Find the total cost." (site `we-1`); the ticket as the working; framed answer "$6219.95"; crossed slip "total = $6200" (caption "the price isn't the whole cost: + brokerage"). 4: task strip "1800 shares are bought at $23.50 each. The broker charges the greater of $29.95 or 0.11% of the trade value. Find the total cost." (site `we-2`); givens card "1800 shares", "$23.50 each" (violet), "greater of $29.95 or 0.11%" (amber); rows; framed answer "$42 346.53"; crossed slip "0.11 × 42 300 = $4653" (caption "0.11% = 0.0011").
- **Memory aid.** Framed card: "Total cost = shares × price + brokerage." Key line: "'Greater of': work out both, pay the larger. 0.11% = 0.0011. A fee bites hardest on a small trade."
- **Visual surprise.** The same $19.95 block is a sliver against $6,200 and a fat slice against $500 (scene 3); on the switch graph the fee stays flat, then turns and climbs exactly at $29,950 (scene 5).
- **Site notes (pack section 8).** No numerical error in lesson15. `we-1`, `we-2` and the switch value are used exactly; the people's names in the site's examples are not used (the investors are "you" and "a tradie"). Trap 01 (brokerage added on a sale) is covered by "selling costs a second fee, taken off what you receive" in scene 3, said once; Trap 02 (the smaller figure) is A1's crossed slip.
- **Plain meanings at first use.** Broker ("a company that places your trade on the stock exchange"); brokerage ("the broker's fee for each trade"); trade value ("the number of shares times the price per share, before any fee"); flat fee ("the same fee whatever the size of the trade"); parcel ("a group of shares bought together").
- **Attempts.** A1 (pack question 1): 1,200 shares at $8.40, the greater of $29.95 or 0.12%: $10,080.00; 0.12% gives $12.10, so the brokerage is $29.95; total $10,109.95; crossed "brokerage = $12.10" (caption "take the greater: $29.95"). A2 (pack question 2): 2,000 shares at $15.60, the greater of $19.95 or 0.11%: $31,200.00; $34.32; total $31,234.32; switch value $19.95 ÷ 0.0011 = $18,136.36; crossed "19.95 ÷ 0.11 = $181.36" (caption "0.11% = 0.0011").
- **Mistake scene:** none separate. Leaving brokerage out (2 crossed); 0.11 for 0.11% (4 crossed, A2 crossed); the smaller of the two figures (A1 crossed; site Trap 02); the percentage on one share's price instead of the trade value (4, said); "a small fee doesn't matter" (3).
- **Cause chain taught, in order:** (1) the screen price is per share, so the shares cost the number of shares times that price (2); (2) the broker's fee is on top, so the total cost is the trade value plus brokerage (2); (3) a flat fee is fixed in dollars, so as a fraction of the trade it is large for a small trade and small for a large one (3); (4) selling costs another fee, so the price must rise enough to cover two fees before there is any gain (3); (5) under "the greater of", the broker takes whichever amount is larger, so both must be worked out (4); (6) the percentage fee grows with the trade while the flat fee does not, so they are equal at one trade value, flat fee ÷ the decimal rate, and the percentage takes over above it (5).
- **Entry knowledge (route):** i06a (shares; the price now); Year 11 Standard m01 (a percentage of an amount; 0.12% = 0.0012) and m02, m05 (fees and buying costs). Recalled in a phrase or grey chip.
- **Standard 1 path:** not applicable (Standard 2 only).
- **Handoff (to math-s12-i08, "Savings account, term deposit, shares or property: which investment suits which goal?").** Scene 11, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: i05's right panel, full-frame: four objects in a row, each with a 30 px label: the coin jar `ma12-coin-jar-v1.png` ("savings account"), the term deposit certificate `ms12-term-deposit-certificate-v1.png` ("term deposit"), a small coded share-table row with a grey chip "Standard 2" ("shares"), and the investment unit `ms12-investment-unit-v1.png` ("property"); chips "Next: which investment suits which goal?" and "?". No returns or costs. This is i08's opening frame (the same picture Standard 1 viewers saw in i05's right panel).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) `we-1`: 500 × 12.40 = 6200.00; + 19.95 = 6219.95; 19.95 ÷ 6200 = 0.3218% ≈ 0.32%.
  (b) Small trade (Revision 2, source tier): 19.95 ÷ 6200 = 0.32%; 5 ÷ 500 = 1%; 1 ÷ 0.32 ≈ 3 times; round trip (500 + 10) ÷ 500 − 1 = 2%; received 500 − 5 = 495.
  (c) `we-2`: 1800 × 23.50 = 42 300.00; 0.0011 × 42 300 = 46.53; total 42 346.53; slip 0.11 × 42 300 = 4653.
  (d) Switch: 29.95 ÷ 0.001 = 29 950; check 0.001 × 10 000 = 10 (< 29.95), 0.001 × 50 000 = 50 (> 29.95).
  (e) A1: 1200 × 8.40 = 10 080.00; 0.0012 × 10 080 = 12.096 ≈ 12.10; total 10 109.95.
  (f) A2: 2000 × 15.60 = 31 200.00; 0.0011 × 31 200 = 34.32; total 31 234.32; 19.95 ÷ 0.0011 = 18 136.3636 ≈ 18 136.36; slip 19.95 ÷ 0.11 = 181.36.
  (g) Pronunciations: "nineteen ninety-five"; "zero point one one per cent, which is zero point zero zero one one"; "forty-two thousand three hundred and forty-six dollars and fifty-three cents"; "twenty-nine thousand nine hundred and fifty dollars".

Main question: *500 shares at $12.40, and a broker's fee on top. What does it really cost to buy shares once brokerage is added?*
Entry knowledge (i06a; Year 11 Standard m01, m02, m05): shares and prices; percentages of amounts; buying costs.
Stops after: trade value, flat fee, fee share and round trip, the greater of, the switch value. No full return on a sale.
Handoff: math-s12-i08: "savings account, term deposit, shares or property: which suits which goal?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): price violet; fees amber; percentage teal; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the order
> Here's an order to buy shares, paid for from savings. Five hundred shares, at twelve dollars forty each. To buy them, you go through a broker, a company that places the trade on the stock exchange for you. And brokers charge a fee for every trade, called brokerage. Fees vary between brokers, and they change. It's an easy cost to forget, and on a small trade it can eat into your gains. So what does it really cost to buy shares, once brokerage is **added**?

Visual: opens on i06b's final frame exactly (the full coin jar "savings", the order ticket with "?" rows, chips). On the first sentence the "Next" chip fades and the ticket grows to 900 × 560 px at the centre-right. On "five hundred shares" the "shares: 500" row rings; on "twelve dollars forty" "price per share: $12.40" (violet). On "a broker" a grey chip "broker: places your trade on the stock exchange". On "brokerage" the "brokerage: ?" row rings amber; on "they change" a grey chip "fees vary and change". On "added" heading "Brokerage and total cost" writes on, and the question chip "What does it really cost?" moves to the top right.

### 2. trade value, and a flat fee
> Start with the trade value. That's the number of shares, times the price per share. Five hundred times twelve dollars forty is six thousand two hundred **dollars**. That's the value of the shares themselves, before any fee. This broker charges a flat fee of nineteen dollars ninety-five, the same for any trade. So the total cost is six thousand two hundred, plus nineteen ninety-five, which is six thousand two hundred and nineteen dollars and ninety-five **cents**. Leaving the brokerage out is the **slip**. The price on the screen isn't the whole cost.

Visual: stage change: the order ticket (simulation 1) at the centre (44 px rows), the jar as a 260 px badge at the left. Task strip above, 40 px: "500 shares are bought at $12.40 each. The broker charges a flat fee of $19.95. Find the total cost." (site `we-1`). On "the number of shares, times the price" hand tag "shares × price". On "dollars" the row "trade value: 500 × $12.40 = $6200.00" writes. On "flat fee" the row "brokerage (flat fee): $19.95" (amber), hand tag "+ brokerage". On "cents" "total cost: $6200.00 + $19.95 = $6219.95" (framed green). On "slip" a red slip "total = $6200" writes and is crossed (caption "the price isn't the whole cost: + brokerage").

### 3. a fee bites a small trade
> A fee matters more on a small trade. On six thousand two hundred dollars, nineteen ninety-five is about a third of one per cent, zero point three two per **cent**. This broker charges less on small trades, five dollars up to a thousand. But spend just five hundred dollars, and even five dollars is one per cent of your **money**, three times the share. And when you sell, you pay brokerage again. Sell five hundred dollars of shares, and you receive five hundred minus five, four hundred and ninety-five dollars. So on that five-hundred-dollar parcel, the price has to rise two per cent, ten dollars, just to cover the two **fees**. Any fixed fee is a bigger share of a small trade.

Visual: stage change: two horizontal trade bars (simulation 2), 1,300 px wide each, to their own scales, and under each a "fee as a share of the trade" bar (amber) on one shared scale, 0% to 2% across 1,000 px, so the shares compare directly. Top: an ink bar "$6,200 trade" with an amber sliver "$19.95"; on "cent" row "19.95 ÷ 6200 × 100% ≈ 0.32%" and its share bar fills to 161 px. On "five dollars up to a thousand" a grey chip, 30 px, "this broker: $5 up to $1,000, $19.95 up to $10,000 (example fees, read 18 Nov 2026)". Bottom: an ink bar "$500 trade" with an amber block "$5"; on "money" row "5 ÷ 500 × 100% = 1%" and its share bar fills to 500 px, hand tag "small trade: bigger share". On "when you sell" a second amber block "$5 (selling)" joins the bottom bar, hand tag "selling: another fee"; on "four hundred and ninety-five dollars" a grey row "500 − 5 = $495 received". On "fees" row "two fees: $10 ÷ $500 = 2% rise needed" (framed green), the share bar extending to 1,000 px, with a grey chip "(500 + 10) ÷ 500 = 1.02". On "Any fixed fee" hand tag "fixed fee: bigger share of a small trade" (Revision 2, review finding 1 and root's decision 5).

### 4. "the greater of"
> Some brokers charge the greater of a flat fee, or a percentage of the trade value. You work out both, then pay the larger one. Say a tradie buys eighteen hundred shares at twenty-three dollars fifty. The broker charges the greater of twenty-nine ninety-five, or zero point one one per cent of the trade value. The trade value is forty-two thousand three hundred dollars. Zero point one one per cent is zero point zero zero one one, as a **decimal**. That times forty-two thousand three hundred is forty-six dollars fifty-three. That's more than twenty-nine ninety-five, so the brokerage is forty-six fifty-**three**. The total cost is forty-two thousand three hundred and forty-six dollars and fifty-three **cents**. Using zero point one one is the **slip**.

Visual: clear change to the g01 board, the trade van `ma11-trade-van-v1.png` (500 px wide) at the top right. Task strip, 44 px: "1800 shares are bought at $23.50 each. The broker charges the greater of $29.95 or 0.11% of the trade value. Find the total cost." (site `we-2`). Givens card, 44 px: "1800 shares", "$23.50 each" (violet), "greater of $29.95 or 0.11%" (amber); on "work out both" hand tag "work out both" (Revision 2, review finding 4). Rows, 52 px: "trade value = 1800 × 23.50 = $42 300". On "decimal" an amber chip "0.11% = 0.11 ÷ 100 = 0.0011", hand tag "0.11% = 0.0011". Row "0.0011 × 42 300 = $46.53". On "That's more than" (simulation 3) the two amber bars "flat $29.95" and "0.11%: $46.53" appear side by side and the taller lights; on "three" it slides into the row "brokerage = $46.53", hand tag "pay the larger". On "cents" "total = 42 300 + 46.53 = $42 346.53" (framed green). On "slip" a red slip "0.11 × 42 300 = $4653" writes and is crossed (caption "0.11% = 0.0011").

### 5. where the two rules cost the same
> So when does the percentage take over? Take a broker charging the greater of twenty-nine ninety-five, or zero point one per cent. On a graph of the fee against the trade value, the flat fee is a flat line, and the percentage is a line rising from zero. You pay whichever is higher. They cost the same where zero point one per cent of the trade is twenty-nine ninety-five. Twenty-nine ninety-five divided by zero point zero zero one is twenty-nine thousand nine hundred and fifty **dollars**. Below that, you pay the flat fee. Above it, you pay the **percentage**. Many real brokers use bands instead, a set fee for each range of trade values, but the idea is the same.

Visual: stage change: the switch graph (simulation 4), 1,300 × 700 px (trade value $0 to $60,000 across; brokerage $0 to $60 up). On "flat line" an amber line at $29.95; on "rising from zero" a teal line "0.1% × trade value". On "whichever is higher" the thick "you pay" path traces along the amber line, then the teal line; a rider moves along the trade-value axis with a readout "fee: $29.95 … $29.95 … $50.00" (at $10,000 the readout shows $29.95 with a grey "0.1%: $10"; at $50,000 "$50.00"). On "dollars" the meeting point rings, row, 44 px: "29.95 ÷ 0.001 = $29 950" (framed green), hand tag "same cost here". On "Below that" a bracket on the left "flat fee here"; on "percentage" a bracket on the right "percentage here". On "bands" a grey chip "real brokers: often a set fee per band of trade value".

### 6. memory aid
> Here's the summary. The trade value is the number of shares times the price per share. Add the brokerage to get the total cost of buying, because the price on the screen is never the whole cost. If the rule is "the greater of", work out both, and pay the larger. And a flat fee bites hardest on a small **trade**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the order ticket's three rows (trade value, brokerage, total) and the two amber bars with the taller lit. Main line, hand font 56 px: "Total cost = shares × price + brokerage." On "trade" the key line, 40 px: "'Greater of': work out both, pay the larger. 0.11% = 0.0011. A fee bites hardest on a small trade." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Twelve hundred shares are bought at eight dollars forty each. The broker charges the greater of twenty-nine ninety-five, or zero point one two per cent of the trade value. Find the trade value, the brokerage, and the total cost. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "1200 shares are bought at $8.40 each. The broker charges the greater of $29.95 or 0.12% of the trade value. (a) Find the trade value. (b) Find the brokerage. (c) Find the total cost." Picture slot: a blank coded order ticket "BUY", "shares: 1200", "price per share: $8.40", "trade value: ?", "brokerage: ?", "total cost: ?". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> The trade value is twelve hundred times eight forty, ten thousand and eighty **dollars**. Zero point one two per cent of that is twelve dollars ten. That's less than twenty-nine ninety-five, so the brokerage is twenty-nine ninety-**five**. The total cost is ten thousand one hundred and nine dollars and ninety-five **cents**. Taking the twelve dollars ten is the **slip**. Take the greater.

Visual: the card shrinks to the top (30 px). The ticket fills, 44 px: on "dollars" "trade value: $10 080.00" (framed green). Row "0.0012 × 10 080 = $12.10 < $29.95"; on "five" "brokerage: $29.95" (framed green), the two amber bars with the flat one lit. On "cents" "total cost: $10 109.95" (framed green). On "slip" a red slip "brokerage = $12.10" writes and is crossed (caption "take the greater: $29.95"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A broker charges the greater of nineteen ninety-five, or zero point one one per cent of the trade value. Find the total cost of buying two thousand shares at fifteen dollars sixty. Then find the trade value where the two rules cost the same, to the nearest cent. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A broker charges the greater of $19.95 or 0.11% of the trade value. (a) Find the total cost of buying 2000 shares at $15.60 each. (b) Find the trade value at which the two brokerage rules cost the same, to the nearest cent." Picture slot: empty axes "brokerage ($)" against "trade value ($)". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Zero point one one per cent of thirty-one thousand two hundred is thirty-four dollars thirty-two. So the total is thirty-one thousand two hundred and thirty-four dollars and thirty-two **cents**. They cost the same at nineteen ninety-five divided by zero point zero zero one one, eighteen thousand one hundred and thirty-six dollars and thirty-six **cents**. Dividing by zero point one one is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "2000 × 15.60 = $31 200"; "0.0011 × 31 200 = $34.32 > $19.95"; on "cents" (first) "total = $31 234.32" (framed green). On "cents" (second) "19.95 ÷ 0.0011 = 18 136.3636… ≈ $18 136.36" (framed green), the flat and rising lines meeting there on the axes. On "slip" a red slip "19.95 ÷ 0.11 = $181.36" writes and is crossed (caption "0.11% = 0.0011"). Hold about 1 s.

### 11. handoff
> Shares are just one place to put your money. There are others, and each has its own costs, risks and rewards. Here are four, a savings account, a term deposit, shares, and an investment property. The right choice depends on how soon you need the money, and how much risk you can take. So which one suits which goal? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`): on "a savings account" the coin jar `ma12-coin-jar-v1.png` with "savings account"; on "a term deposit" the certificate `ms12-term-deposit-certificate-v1.png` with "term deposit"; on "shares" a small coded share-table row with the grey chip "Standard 2" and "shares"; on "an investment property" the unit `ms12-investment-unit-v1.png` with "property". On "next" chips "Next: which investment suits which goal?" and "?". Hold about 2 s. No returns or costs shown. This is i08's opening frame (the same picture as i05's right panel); scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Trade value = number of shares × price per share.
- Total cost of buying = trade value + brokerage.
- "Greater of": work out both; pay the larger.
- Percentages as decimals: 0.11% = 0.0011.
- Same cost where flat fee ÷ rate = trade value (29.95 ÷ 0.001).

Memory aid (framed card, right side, as in scene 6): *Total cost = shares × price + brokerage.* Key: *'Greater of': work out both, pay the larger. 0.11% = 0.0011. A fee bites hardest on a small trade.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and i08's opening frame.

## Teaching checks

- **Does it explain causes?** Why multiply: the price is per share (2). Why add the fee: the broker charges on top (2). Why a fee matters more on a small trade: a fixed dollar amount is a larger fraction of a smaller trade (3). Why the price must rise 2%: two $5 fees on $500 (3). Why work out both: the broker takes the larger (4). Why the switch is flat fee ÷ rate: that is where the two amounts are equal (5).
- **Misconceptions addressed:** leaving brokerage out (2 crossed); 0.11 for 0.11% (4 crossed, A2 crossed); the smaller figure (A1 crossed); the percentage on one share's price (4); "small fees don't matter" (3).
- **Visual standard, item by item:** 1 the savings jar and order ticket from the first frame, the trade van in 4; 2 a new stage every 40 to 60 s; 3 a ticket filling row by row, one fee as a sliver and as a slice, two bars racing with the taller dropping into the ticket, a rider on the switch graph with a live fee readout; 4 fixed roles (fees amber); 5 large type; 6 hand tags; 7 g01 boards with framed answers and crossed slips; 8 framed card and five bullets; 9 the fee path turning exactly at $29,950.
- **One idea at a time:** total cost (2), the fee's share (3), the greater of (4), the switch value (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 30 s.
- **Avoided double teaching:** shares and prices recalled from i06a; percentages from Year 11 in a chip.
- **Syllabus coverage:** `ci143c3551` (2 to 5, A1, A2; key notes 1 to 5).
- **Out of scope by design:** full profit and return on a sale; comparing investments (i08).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme).** "1200 shares are bought at $8.40 each. The broker charges the greater of $29.95 or 0.12% of the trade value. (a) Find the trade value. (b) Find the brokerage. (c) Find the total cost."
Model answer: (a) 1200 × 8.40 = $10 080.00. (b) 0.0012 × 10 080 = $12.10, which is less than $29.95, so the brokerage is $29.95. (c) 10 080 + 29.95 = $10 109.95. Classic mistake (crossed): "brokerage = $12.10".

**Attempt 2 (scene 9; pack question 2, 3 marks suggested).** "A broker charges the greater of $19.95 or 0.11% of the trade value. (a) Find the total cost of buying 2000 shares at $15.60 each. (b) Find the trade value at which the two brokerage rules cost the same, to the nearest cent."
Model answer: (a) V = 2000 × 15.60 = $31 200.00; 0.0011 × 31 200 = $34.32 > $19.95, so the brokerage is $34.32; total $31 234.32. (b) 0.0011 × V = 19.95, so V = 19.95 ÷ 0.0011 = $18 136.36. Classic mistake (crossed): "19.95 ÷ 0.11 = $181.36".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| `we-1` | 500 × 12.40 = 6200.00; total 6219.95; 0.32% | 1, 2, 3 |
| Small trade | 5 ÷ 500 = 1% (against 0.32% on $6,200); sale receives 500 − 5 = 495; two fees 10; 2% | 3 |
| `we-2` | 1800 × 23.50 = 42 300; 0.0011 × 42 300 = 46.53; total 42 346.53; slip 4653 | 4 |
| Switch | 29.95 ÷ 0.001 = 29 950; at 10 000: 10; at 50 000: 50 | 5 |
| A1 | 10 080.00; 12.10; 29.95; 10 109.95 | 7, 8 |
| A2 | 31 200; 34.32; 31 234.32; 18 136.36; slip 181.36 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 500 × 12.40 = 6200; 6200 + 19.95 = 6219.95; 19.95/6200 × 100 = 0.32177.
- 5/500 × 100 = 1; 19.95/6200 × 100 = 0.3218; 1/0.3218 = 3.11; 500 − 5 = 495; (500 + 10)/500 × 100 − 100 = 2.
- 1800 × 23.50 = 42 300; 0.0011 × 42 300 = 46.53; 42 346.53; 0.11 × 42 300 = 4653.
- 29.95/0.001 = 29 950; 0.001 × 10 000 = 10; 0.001 × 50 000 = 50.
- 1200 × 8.40 = 10 080; 0.0012 × 10 080 = 12.096; 10 080 + 29.95 = 10 109.95.
- 2000 × 15.60 = 31 200; 0.0011 × 31 200 = 34.32; 31 234.32; 19.95/0.0011 = 18 136.3636; 19.95/0.11 = 181.3636.

## Memory aid check

- **"Total cost = shares × price + brokerage."** with key line **"'Greater of': work out both, pay the larger. 0.11% = 0.0011. A fee bites hardest on a small trade."** Original (the site's "total cost = shares × price + brokerage" and its greater-of card). Meaning, as said in scene 6: buying costs the shares' value plus the broker's fee; under a greater-of rule the fee is the larger of the flat amount and the percentage of the trade value. Assumptions checked: "total cost" is for buying (a sale subtracts the fee, said once in scene 3); the percentage applies to the trade value, not to one share's price; percentages are written as decimals by dividing by 100; no GST or other fees are added (Standard questions give brokerage alone). It helps a new case: $3,000 of shares with the greater of $19.95 or 0.1%: 0.1% is $3, so the fee is $19.95 and the total $3,019.95. Introduced after scenes 2 to 5.
- **Considered, not used:** "Shares plus fee" alone (drops the greater-of rule).

## Narration length estimate

Revision 2, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,108 characters** (Revision 1: 5,005), 12 scene headings. Characters per scene (1 to 12): 455, 544, 671, 742, 660, 309, 261, 375, 294, 394, 328, 75.

At 13.3 characters per second the speech is about 384 s. Total with the holds and settling below **about 473 s (7 min 53 s)**, 97 s under the 570 s cap; speech and holds before the notes about 428 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the ticket (2), the fee bars (3), the greater-of bars (4) and the switch graph rider (5) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

No reserve trims are needed.

## Scene list and build ids

Lesson key `m-s12i07` (route math-s12-i07). Explainer folder `src/explainer/lessons/math-s12-i07`; build inputs in `docs/production/claude-pm/lessons/math-s12-i07/` (at voicing).

In order (12 scene headings): hook-the-order, trade-value-flat-fee, fee-bites-small-trade, greater-of, switch-value, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | i06b's frame; the order |
| 35 to 85 s | 2 | The ticket fills; flat fee |
| 85 to 125 s | 3 | Fee slices; two fees |
| 125 to 195 s | 4 | g01 board: the greater of |
| 195 to 250 s | 5 | The switch graph |
| 250 to 270 s | 6 | Framed memory card |
| 270 to 365 s | 7 to 10 | Question cards and countdowns, then feedback |
| 365 to 385 s | 11 | The four investments, for i08 |
| 385 to 430 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i06b's last frame continues into 1; 1 to 2 stage change; 2 to 3 stage change; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i07-learning-review.md`, `science_check` = `checks/m-s12-i07-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma12-coin-jar-full-v1.png` (reused, the anchor); `ma11-trade-van-v1.png` (a white trade van with a roof ladder, true alpha; reused for `we-2`); `ma12-coin-jar-v1.png` (reused in the final frame).

Need: none new. From i05's and i03's briefs: `ms12-term-deposit-certificate-v1.png`, `ms12-investment-unit-v1.png` (final frame). Reused: `ma12-coin-jar-full-v1.png`, `ma11-trade-van-v1.png`, `ma12-coin-jar-v1.png`.

Coded: the order ticket, fee bars and slices, the board, the switch graph and rider, the share-table row, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `SignedBar` (`readouts.tsx`) for the fee bars, `IntervalPicture` (`extras.tsx`) for the two brackets, `ShareTable` (static row), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i07):
1. **OrderTicket** (small, coded, sharing `ShareTable`'s style): rows shares, price, trade value, brokerage, total, filling one at a time. Check: `we-1` fills $6,200.00, $19.95, $6,219.95.
2. **Max path on `StudioPlot`** (small): a thick path along the higher of two lines, with a rider and readout. Check: the path turns at $29,950; the readout at $10,000 is $29.95 and at $50,000 is $50.00.

## Codex asset brief

No new plate. The coin jars and trade van exist and were viewed; the certificate and unit are briefed in i05 and i03. The order ticket is coded and unbranded; no broker is named.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly and that no Standard 1 code is claimed.
3. Re-verify the cited broker's published fees (ruling 32) and that no broker is named on screen; confirm "fees vary between brokers, and they change" is said once.
4. Confirm every percentage fee uses the decimal (0.0011, 0.0012, 0.001) on the trade value, and every greater-of answer takes the larger figure.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on i06b's final frame and scene 11 matches the decisions file's i07 to i08 join (i05's right panel, full-frame).
7. Confirm no gambling word or image, no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Buying Shares: Brokerage and Total Cost | Year 12 Maths Standard

(Title length: 64 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson15.sa.html

You order 500 shares at $12.40, but the price on the screen isn't the whole cost: a broker charges a fee, called brokerage, on every trade. Find the trade value (shares × price) and the total cost of buying (trade value + brokerage), see why a flat fee bites hardest on a small trade (and why selling costs another fee), and handle "the greater of" a flat fee or a percentage by working out both and paying the larger. Then find the trade value where the two rules cost the same. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Brokerage fees vary between brokers and change over time.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Solve problems involving calculation of brokerage costs and total costs of purchasing shares"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35

Builds on: A Share's Value Over Time. Next: Choosing an Investment Strategy.

#Year12Maths #MathsStandard #Shares #HSCScience

## Open decisions

- **1. The switch value in key notes (root).** Closed in Revision 2: ruling 37 (the key note stays). Revision 1 text: Key note 5 writes "flat fee ÷ rate = trade value", which is the site's method in words. For Standard 2 this is arithmetic, not a new formula; confirm it may stay as a note.
- **2. One sentence on tiers.** Revision 2: the review advised keeping it, and scene 3 now uses the source's lowest tier; still for root to confirm. Revision 1 text: Scene 5 says real brokers often use bands; the maths stays with the site's greater-of rule (pack decision). Confirm.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-i07-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A. Revision 1 note: Next: student learning review (trace from i06b; check that trade value lands before brokerage, that the small-trade slice makes the fee's weight obvious, that "work out both, pay the larger" is clear, that the switch graph's turning point is followable, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
