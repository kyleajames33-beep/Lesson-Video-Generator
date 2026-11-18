# Maths S12 I06b: How do we graph and interpret a share's value over time? Month-end prices drawn by hand, trend, highest, lowest and falls, percentage change from the first price, a spreadsheet chart, and swings as risk (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; the split from i06 is recorded in `math-s12-i06a.md` under ruling 29's test; rulings 6 and 32: shares framed as investments with risk named). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,004 characters by script (see "Narration length estimate"), 13 scene headings, about 465 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: eighth video of the Year 12 Investment and loans strand, outline playlist order 19 (second half). **Standard 2 only** (root ruling 30). Pre-design pack: `../pre-design/maths-standard/math-s12-i06.md` (its suggested "i06b" half). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson14.sa.html` (SHA256 `83d9524b6a12192ae23697c958efe92e39456423e8ef6b35a4288b20e5aeab9a`; `we-3`, "A share's closing price is recorded at the end of each month for six months: $3.20, $3.55, $3.40, $3.90, $4.15, $3.95", its peak, its two falls, 23.44% and "Saying "it went up" describes the endpoints and misses the two falls"). The site graphs by hand only (a logged gap); the spreadsheet chart is original. Route entry: `math-s12-i06` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; reused painted plates (the phone tower as the company's badge; the full coin jar in the final frame); graphs, the spreadsheet and the order ticket coded.

Owner rules applied: as i06a (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings (closing price, trend, percentage change); the spreadsheet as a coded, unbranded grid with a formula bar; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; invented companies; money spoken naturally; Australian spelling; no em dashes; conversational narration; risk named, no gambling words or images).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Investment and loans; Standard 2), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form):

- `cie1731909`: "Graph and interpret the value of a share over time, with and without using digital tools"
- `cieba53790`: "Interpret and analyse tables and graphs about the value of share" (this video: graphs and price tables; i06a: share tables)

Standard 1: no matching point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35

**Boundary:** starts from i06a's final frame exactly (the phone tower `ma11-phone-tower-v1.png` with "Ridgeline Mobile Ltd (a phone network)"; the coded table "month | 1 … 6" / "closing price ($) | 3.20 | 3.55 | 3.40 | 3.90 | 4.15 | 3.95"; empty axes; chips "up every month?", "Next: a share's value over time" and "?"). Recalls i06a (a share; price changes collected only when sold; risk) and Year 11 (percentage change from a starting value; line graphs; spreadsheet charts from i05) in a phrase or grey chip. Teaches: a line graph of month-end prices drawn by hand (an even scale, a break if the price axis does not start at zero, points joined with straight segments that say nothing about the days between); describing a graph by its trend, highest and lowest prices and the falls inside a rise; percentage change = (last − first) ÷ first × 100%; the value of a holding (shares × price), a gain only if sold; the same graph and the percentage change in a spreadsheet; two shares with the same percentage change and different swings, so swings as risk. Stops at graphing and interpreting a share's value. Not taught: brokerage (i07); forecasting a price.

## Decisions

- **Anchor: an invented phone network, Ridgeline Mobile Ltd (reused painted plate, live).** The site's `we-3` prices, unchanged: $3.20, $3.55, $3.40, $3.90, $4.15, $3.95; peak $4.15 (month 5); falls in months 3 (−$0.15) and 6 (−$0.20); 23.44%; 500 shares $1,600 → $1,975, a $375 gain if sold. A phone network is a business every student pays. Plate reused: `ma11-phone-tower-v1.png` (viewed 18 Nov 2026: a lattice mobile tower on a fenced pad, true alpha) as the company's badge. No people.
- **Two shares, same change, different swings (original).** Kestrel Energy Ltd (invented): $3.20, $2.70, $3.60, $2.90, $4.30, $3.95: the same 23.44% and very different swings (−0.50, +0.90, −0.70, +1.40, −0.35). It shows a graph telling what a table's two ends cannot: risk. Bought in month 1 and sold in month 4, it would lose 30 cents a share.
- **Join.** Scene 1 opens on i06a's final frame exactly; the table's numbers become the first plotted points.
- **Simulations (standard item 3).**
  1. **Plot and join** (scene 2; `StudioPlot`): each table cell flies to its point as spoken; straight segments join them; a dotted grey ghost wiggle between months 2 and 3 appears and fades ("we don't know the days between").
  2. **Read the graph** (scene 3): a teal trend arrow from the first point to the last; the peak ringed green, the low ringed; the two falling segments thicken in **blue** with labels "−$0.15", "−$0.20".
  3. **Spreadsheet chart** (scene 5; `SpreadsheetGrid` chart option): months and prices typed, a line chart inserted from the two columns, a holding column filled down, and the percentage-change formula in one cell.
  4. **Two shares overlaid** (scene 6): Kestrel's line draws over Ridgeline's on the same axes; both end at $3.95; a shaded band shows each share's range (Ridgeline $3.20 to $4.15; Kestrel $2.70 to $4.30); a reader at month 4 shows Kestrel below its starting price.
- **Colour roles (fixed for i06a to i08).** Price **violet** (Ridgeline's line); Kestrel's line **olive**; the change and percentage change **teal**; falls **blue**; the holding value in ink; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Graph labels 32 px; the table 40 px; cells 40 px, formula bar 44 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "month-end prices", "break: axis starts at $3", "we don't know the days between", "trend: up", "highest", "lowest", "fall", "not every month", "divide by the first price", "a gain only if you sell", "same start, same end", "bigger swings: more risk". At most two live at once.
- **Stage changes (standard item 2).** i06a's frame (1); the graph drawn by hand (2); the graph read (3); g01 board, percentage change and the holding (4); the spreadsheet and chart (5); two shares overlaid (6); framed card (7); question cards (8 to 11); the order ticket for i07 (12); key notes (13).
- **Worked example (g01 layout).** 4: task strip "Ridgeline's price went from $3.20 to $3.95 over six months. Find the percentage change."; formula strip "% change = (last − first) ÷ first × 100%"; givens card "first = $3.20" (violet), "last = $3.95"; rows "3.95 − 3.20 = $0.75", "0.75 ÷ 3.20 × 100% = 23.4375%", framed "≈ 23.44%"; crossed slip "0.75 ÷ 3.95 × 100% = 18.99%" (caption "measure from where you started").
- **Memory aid.** Framed card: "Describe it: trend, high, low, falls." Key line: "% change = (last − first) ÷ first × 100%. Bigger swings mean more risk."
- **Visual surprise.** Two shares with identical first and last prices draw completely different paths, one dipping below its start in month 4 (scene 6).
- **Site notes (pack section 8).** No numerical error in lesson14. `we-3` is used exactly. The digital tool is the logged gap; scene 5 fills it in the same `SpreadsheetGrid` as i05 (pack decision). The percentage-change convention (from the first price) is the site's.
- **Plain meanings at first use.** Closing price ("the last price a share traded at that day; here, at the end of each month"); trend ("the overall direction"); percentage change ("the change as a percentage of where you started"); holding ("the shares you own").
- **Attempts.** A1 (pack question 2 without the drawing part, which cannot be done in 10 s; its price list): falls in months 2 (−$0.30) and 5 (−$0.25); 16.67%; one risk; crossed "0.90 ÷ 6.30 = 14.29%" (caption "divide by the first price"). A2 (original, a given graph): shares P and Q both $2.00 → $2.50: 25% each; Q riskier (bigger swings, below $2.00 in months 2 and 4); 1,000 shares $2,500; crossed "Q is riskier because it ends higher" (caption "they end at the same price; the swings show risk").
- **Mistake scene:** none separate. Dividing by the last price (4 crossed, A1 crossed); "it went up" as a full description (3, said; site's sentence); the segments read as what happened between months (2, said); a gain counted before selling (4, said); risk judged from the ends (6, A2 crossed).
- **Cause chain taught, in order:** (1) a line graph puts time across and price up, so a rising segment is a month the price rose (2); (2) joining month-end points shows the direction between them, not the days in between (2); (3) the ends give the trend, but the falls are only seen in the segments, so a description needs both (3); (4) a percentage change compares the change with the starting price, so it divides by the first price (4); (5) a holding's value is shares × price, and the gain becomes cash only when sold (4); (6) the same ends can hide different paths, and the size of the swings is the risk of needing to sell at a bad time (6).
- **Entry knowledge (route):** i06a (shares, two returns, risk); Year 11 Standard m01 (percentage change) and data graphs; i05 (a chart from spreadsheet columns). Recalled in a phrase or grey chip.
- **Standard 1 path:** not applicable (Standard 2 only).
- **Money sources (root ruling 32).** All prices are invented; narration says once "real prices change every day and can fall".
- **Handoff (to math-s12-i07, "What does it really cost to buy shares once brokerage is added?").** Scene 12, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: the full coin jar `ma12-coin-jar-full-v1.png` (400 px tall) at the left with a coded tag "savings"; a coded, unbranded order ticket (800 × 520 px) at the right, 40 px rows: "BUY", "shares: 500", "price per share: $12.40", "trade value: ?", "brokerage: ?", "total cost: ?"; chips "+ a fee?", "Next: brokerage and total cost" and "?". No dollar total is shown. This is i07's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Ridgeline: changes +0.35, −0.15, +0.50, +0.25, −0.20; (3.95 − 3.20) ÷ 3.20 = 0.234375 → 23.44%; slip 0.75 ÷ 3.95 = 0.189873 → 18.99%. Holding of 500: 1600, 1775, 1700, 1950, 2075, 1975; gain 375.
  (b) Kestrel: 3.20, 2.70, 3.60, 2.90, 4.30, 3.95; changes −0.50, +0.90, −0.70, +1.40, −0.35; the same 23.44%; month 4 $2.90 < $3.20.
  (c) Spreadsheet: A2:A7 months 1 to 6; B2:B7 prices; C2 "=500*B2" filled down; E2 "=(B7-B2)/B2*100" gives 23.4375.
  (d) A1: 5.40, 5.10, 5.65, 6.05, 5.80, 6.30; changes −0.30, +0.55, +0.40, −0.25, +0.50; (6.30 − 5.40) ÷ 5.40 = 0.166667 → 16.67%; slip 0.90 ÷ 6.30 = 14.29%.
  (e) A2: P 2.00, 2.10, 2.15, 2.30, 2.40, 2.50; Q 2.00, 1.60, 2.20, 1.70, 2.60, 2.50; 0.50 ÷ 2.00 = 25%; 1000 × 2.50 = 2500.
  (f) Windows: Ridgeline and Kestrel price $2.50 to $4.50 with a break mark at the bottom of the axis; A1's graph none; A2's graph $1.50 to $2.80 with a break.
  (g) Pronunciations: "three twenty"; "three ninety-five"; "twenty-three point four four per cent"; "equals B seven minus B two, divided by B two, times a hundred".

Main question: *A phone network's share went from $3.20 to $3.95 in six months. How do we graph a share's value over time, and say what the graph shows?*
Entry knowledge (i06a; Year 11 Standard m01; i05): shares and risk; percentage change; a spreadsheet chart.
Stops after: a hand-drawn graph, trend, high, low and falls, percentage change and holding value, a spreadsheet chart, swings as risk. No brokerage.
Handoff: math-s12-i07: "500 shares at $12.40: total cost = ?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): Ridgeline violet; Kestrel olive; change teal; falls blue; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: up overall, but every month?
> Here are Ridgeline Mobile's share prices, at the end of each month for six months. It's a made-up phone company, but real share prices move just like this, every day, and they can fall. It started at three dollars twenty, and finished at three ninety-five, so overall, it went up. But did it go up every month? A table is hard to read at a glance. A graph shows the whole story. So how do we graph a share's value over time, and say what it **shows**?

Visual: opens on i06a's final frame exactly (the phone tower, the table, the empty axes, chips). On the first sentence the "Next" chip fades. On "made-up" a grey chip "invented company"; on "they can fall" a grey chip "real prices change every day and can fall". On "three dollars twenty" the first cell rings violet; on "three ninety-five" the last cell rings. On "every month" the chip "up every month?" pulses. On "shows" heading "A share's value over time" writes on, and the question chip "What does the graph show?" moves to the top right.

### 2. draw it by hand
> Draw it by hand first. A line graph suits this, because the price is measured at equal steps in time. Months go across, and the price goes up the side, on an even scale. Here the price axis starts at three dollars, so mark a break near the bottom, and nobody misreads it as starting at zero. Plot each month's closing price, three twenty, three fifty-five, three forty, and so on. Then join the points with straight lines. Each line just connects two month-end prices. We don't know what the price did in **between**.

Visual: stage change: the axes grow to 1,300 × 700 px (month 1 to 6 across; price $2.50 to $4.50 up, gridlines every $0.25), the phone tower as a 260 px badge; the table as a strip at the top (32 px). On "even scale" the tick labels write on; on "mark a break" a "≈" break mark on the price axis near the origin, hand tag "break: axis starts at $3" (the axis label reads from $2.50; the tag is the idea). On "three twenty, three fifty-five, three forty" (simulation 1) each table cell flies down to its point (violet); the rest follow quietly ($3.90, $4.15, $3.95), hand tag "month-end prices". On "join the points" violet segments draw. On "between" a dotted grey wiggle appears between months 2 and 3, then fades, hand tag "we don't know the days between".

### 3. read the graph
> Now read it. The overall trend is upwards, from three twenty to three ninety-five. The highest price was four fifteen, at the end of month five. The lowest was three twenty, in month one. But it didn't rise every month. It fell in month three, by fifteen cents, and again in month six, by twenty **cents**. Saying "it went up" only describes the two ends. A good description gives the trend, the highest and lowest prices, and any **falls**. Give those four things, and you've answered most exam questions about a share's graph.

Visual: camera continue (simulation 2). On "trend is upwards" a teal arrow from (1, 3.20) to (6, 3.95), hand tag "trend: up". On "four fifteen" the point (5, 4.15) rings green, hand tag "highest"; on "three twenty, in month one" (1, 3.20) rings, hand tag "lowest". On "fell in month three" the segment from month 2 to 3 thickens blue with "−$0.15"; on "cents" the segment from month 5 to 6 thickens blue with "−$0.20", hand tag "not every month". On "only describes the two ends" a grey speech-free card "it went up" with a grey cross. On "falls" a description card, 40 px, writes at the right: "Trend: up ($3.20 → $3.95). Highest $4.15 (month 5). Lowest $3.20 (month 1). Falls: months 3 and 6." (framed green).

### 4. percentage change, and your holding
> How much did it rise overall? The percentage change is the change, divided by the first price, times a hundred per cent. The change is three ninety-five minus three twenty, seventy-five cents. Seventy-five cents divided by three twenty is twenty-three point four four per **cent**. Dividing by the last price instead is the **slip**. Percentage change is measured from where you started. And if you owned five hundred shares, they went from one thousand six hundred dollars to one thousand nine hundred and seventy-five, a gain of three hundred and seventy-five dollars, but only if you **sold**.

Visual: clear change to the g01 board, the graph as a 600 px thumbnail at the top right. Task strip, 44 px: "Ridgeline's price went from $3.20 to $3.95 over six months. Find the percentage change." Formula strip, 52 px: "% change = (last − first) ÷ first × 100%" (first violet, change teal). Givens card, 44 px: "first = $3.20" (violet), "last = $3.95". Rows, 52 px: "3.95 − 3.20 = $0.75" (teal); "0.75 ÷ 3.20 × 100%"; on "cent" "= 23.4375% ≈ 23.44%" (framed green), hand tag "divide by the first price". On "slip" a red slip "0.75 ÷ 3.95 × 100% = 18.99%" writes and is crossed (caption "measure from where you started"). On "five hundred shares" a side row, 44 px: "500 × $3.20 = $1600 → 500 × $3.95 = $1975"; on "sold" "gain $375" with hand tag "a gain only if you sell".

### 5. the same graph in a spreadsheet
> A spreadsheet does all of this quickly. Type the months in column A and the closing prices in column B. Select both columns, and insert a line **chart**. In column C, the value of five hundred shares is equals five hundred times B **two**, filled down. And one cell can hold the percentage change. Equals B seven minus B two, divided by B two, times a hundred. That gives twenty-three point four three seven five, which rounds to twenty-three point four four per **cent**, as before. Change any price in column B, and the chart and the percentage change update by themselves.

Visual: stage change: `SpreadsheetGrid` (simulation 3), 1,400 × 620 px. Headers, 40 px: A1 "month", B1 "closing price ($)" (violet), C1 "500 shares ($)". A2:A7 type 1 to 6; B2:B7 type the six prices. On "chart" columns A and B select and a line chart draws in at the right (the same shape as scene 2), grey chip "i05: a chart from columns". On "two" (bold) the cursor at C2, the formula bar (44 px) "=500*B2"; the fill runs: 1600, 1775, 1700, 1950, 2075, 1975. On "one cell" the cursor at E2 with label D2 "% change"; the bar "=(B7-B2)/B2*100"; on "cent" E2 "23.4375" then a hand tag "≈ 23.44%", with B7 and B2 ringing violet in turn.

### 6. same ends, different risk
> Graphs also show something the two ends can't. Here's a second share, Kestrel Energy, another made-up company, over the same six months. It also starts at three twenty, and ends at three ninety-five, so it's the same twenty-three point four four per cent. But its graph jumps around. Down fifty cents, up ninety, down seventy, up a dollar forty. If you'd needed to sell in month four, you'd have **lost** money. Bigger swings mean more risk, even when the start and the end look the **same**. That's why the graph is worth drawing, even when you already know the two ends.

Visual: stage change: the chart grows to the full board (axes as scene 2); Ridgeline's violet line stays. On "Kestrel Energy" (simulation 4) an olive line draws over it, segments labelled "−0.50", "+0.90", "−0.70", "+1.40", "−0.35" as spoken; both end points at (6, 3.95) ring, hand tag "same start, same end". On "lost" a reader at month 4: Kestrel's point (4, 2.90) below a dashed line at $3.20, label "below what you paid (−$0.30 a share)". On "same" shaded range bands at the right edge: violet "$3.20 to $4.15", olive "$2.70 to $4.30" (taller), hand tag "bigger swings: more risk".

### 7. memory aid
> Here's the summary. Graph the price month by month. Then describe the trend, the highest and lowest prices, and any falls. Percentage change is the change, divided by the first price, times a hundred per cent. And bigger swings mean more **risk**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: Ridgeline's violet line with the trend arrow, the green peak and the two blue falls, and a faint olive line swinging around it. Main line, hand font 56 px: "Describe it: trend, high, low, falls." On "risk" the key line, 40 px: "% change = (last − first) ÷ first × 100%. Bigger swings mean more risk." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A share's closing price at the end of each month, for six months, was five forty, five ten, five sixty-five, six oh five, five eighty, and six thirty. In which months did the price fall? Find the percentage change over the six months, to two decimal places. And name one risk of owning this share. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The closing price of a share at the end of each month for six months was $5.40, $5.10, $5.65, $6.05, $5.80, $6.30. (a) In which months did the price fall? (b) Find the percentage change over the six months, correct to two decimal places. (c) Name one risk of owning this share." Picture slot: the prices as a coded table "month 1 to 6", no graph. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> It fell in month two, by thirty cents, and in month five, by twenty-five **cents**. The change is six thirty minus five forty, ninety cents. Ninety cents divided by five forty is sixteen point six seven per **cent**. One risk is that the price can fall below what you paid, as it did twice here. Dividing by six thirty is the **slip**.

Visual: the card shrinks to the top (30 px). A quick violet line graph of the six prices draws beside the table; on "cents" (first) the segments into months 2 and 5 thicken blue, "−$0.30", "−$0.25" (framed green "months 2 and 5"). Rows, 44 px: "6.30 − 5.40 = $0.90"; on "cent" "0.90 ÷ 5.40 × 100% ≈ 16.67%" (framed green). Row "risk: the price can fall (it fell twice)" (framed green). On "slip" a red slip "0.90 ÷ 6.30 = 14.29%" writes and is crossed (caption "divide by the first price"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. The graph shows two shares over six months. Both start at two dollars and end at two fifty. Find the percentage change for each. Which share was riskier to hold, and why? Then find the value of one thousand shares at the end. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The graph shows the month-end prices of shares P and Q over six months. (a) Find the percentage change for each share. (b) Which share was riskier to hold? Give a reason. (c) Find the value of 1000 shares at the end of month 6." Picture slot: a coded graph (month 1 to 6; price $1.50 to $2.80 with a break mark; gridlines every $0.10): P through 2.00, 2.10, 2.15, 2.30, 2.40, 2.50 and Q through 2.00, 1.60, 2.20, 1.70, 2.60, 2.50, both in ink and labelled "P" and "Q". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Both rise fifty cents on two dollars, so both rise twenty-five per **cent**. Share Q is riskier, because its price swings much more, and twice it fell below the two dollars it started **at**. A thousand shares at two fifty are worth two thousand five hundred **dollars**. Calling Q riskier because it ends higher is the **slip**. They end at the same price.

Visual: the card shrinks to the top. Rows, 44 px: on "cent" "0.50 ÷ 2.00 × 100% = 25% (both)" (framed green). On "at" Q's points at months 2 and 4 ring below a dashed line at $2.00, framed "Q: bigger swings, below $2.00 twice". On "dollars" "1000 × $2.50 = $2500" (framed green). On "slip" a red slip "Q is riskier because it ends higher" writes and is crossed (caption "they end at the same price; the swings show risk"). Hold about 1 s.

### 12. handoff
> To own a share, you have to buy it, and buying isn't free. Here's an order to buy five hundred shares, at twelve dollars forty each, paid for from savings. But a broker charges a fee to place the order. So what does it really cost? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`): on "order to buy" the coded order ticket at the right with rows "BUY", "shares: 500", "price per share: $12.40", "trade value: ?", "brokerage: ?", "total cost: ?"; on "from savings" the full coin jar `ma12-coin-jar-full-v1.png` (400 px tall) at the left with the tag "savings". On "a fee" the chip "+ a fee?" beside the brokerage row. On "next" chips "Next: brokerage and total cost" and "?". Hold about 2 s. No dollar total is shown. This is i07's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Graph: time across, price up; even scale; mark any axis break.
- Describe: trend, highest, lowest, and any falls.
- % change = (last − first) ÷ first × 100%.
- Holding value = shares × price; a gain is only banked if sold.
- Same start and end can hide big swings: more risk.

Memory aid (framed card, right side, as in scene 7): *Describe it: trend, high, low, falls.* Key: *% change = (last − first) ÷ first × 100%. Bigger swings mean more risk.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i07's opening frame.

## Teaching checks

- **Does it explain causes?** Why join with straight segments, and why not to read between them: only month-end prices are known (2). Why a description needs the falls: the ends hide them (3). Why divide by the first price: a change is measured from the start (4). Why a gain is not cash yet: it is banked only by selling (4). Why swings are risk: you might need to sell at a low point (6).
- **Misconceptions addressed:** dividing by the last price (4, A1 crossed); "it went up" as a full description (3); reading segments as daily behaviour (2); an unsold gain as money in hand (4); judging risk from the ends (6, A2 crossed).
- **Visual standard, item by item:** 1 the phone tower from the first frame; 2 a new stage every 40 to 60 s; 3 table cells flying to their points, falls thickening on the graph, a chart drawn from spreadsheet columns, a second share swinging over the first with range bands; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board with a framed answer and a crossed slip; 8 framed card and five bullets; 9 two different paths between the same two ends.
- **One idea at a time:** drawing (2), reading (3), percentage change (4), the spreadsheet (5), risk (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible (A1's prices and A2's graph supplied); 10 s each; feedback about 24 s and 26 s.
- **Avoided double teaching:** shares and risk recalled from i06a; spreadsheet charts from i05.
- **Syllabus coverage:** `cie1731909` (2, 3, 5, 6, A1; key notes 1, 2, 5; "with digital tools" in 5, "without" in 2 to 4); `cieba53790` (graphs and price tables: 1, 3, 4, 6, A1, A2; key notes 3, 4).
- **Out of scope by design:** brokerage (i07); forecasting.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 2 (b) to (d), original HSC style, 3 marks suggested, not an official marking scheme).** "The closing price of a share at the end of each month for six months was $5.40, $5.10, $5.65, $6.05, $5.80, $6.30. (a) In which months did the price fall? (b) Find the percentage change over the six months, correct to two decimal places. (c) Name one risk of owning this share."
Model answer: (a) Months 2 and 5 (falls of $0.30 and $0.25). (b) (6.30 − 5.40) ÷ 5.40 × 100% = 16.67%. (c) The price can fall below what was paid (it fell twice in six months), or the company can cut its dividend. Classic mistake (crossed): "0.90 ÷ 6.30 = 14.29%".

**Attempt 2 (scene 10; original, a given graph, 3 marks suggested).** "The graph shows the month-end prices of shares P and Q over six months. (a) Find the percentage change for each share. (b) Which share was riskier to hold? Give a reason. (c) Find the value of 1000 shares at the end of month 6." (P: 2.00, 2.10, 2.15, 2.30, 2.40, 2.50; Q: 2.00, 1.60, 2.20, 1.70, 2.60, 2.50.)
Model answer: (a) Both: 0.50 ÷ 2.00 × 100% = 25%. (b) Q: its price swings much more and twice fell below its starting $2.00, so a holder who had to sell then would lose money. (c) 1000 × $2.50 = $2500. Classic mistake (crossed): "Q is riskier because it ends higher".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Ridgeline | 3.20, 3.55, 3.40, 3.90, 4.15, 3.95; falls −0.15 (month 3), −0.20 (month 6); 0.75; 23.44%; slip 18.99% | 1 to 5 |
| Holding | 500 shares: 1600, 1775, 1700, 1950, 2075, 1975; gain 375 | 4, 5 |
| Kestrel | 3.20, 2.70, 3.60, 2.90, 4.30, 3.95; −0.50, +0.90, −0.70, +1.40, −0.35; 23.44%; month 4 −0.30 a share | 6 |
| A1 | falls −0.30 (month 2), −0.25 (month 5); 16.67%; slip 14.29% | 8, 9 |
| A2 | 25% both; 2500 | 10, 11 |
| Handoff | 500 shares at $12.40 (no total) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- Ridgeline differences: 0.35, −0.15, 0.50, 0.25, −0.20; (3.95 − 3.20)/3.20 × 100 = 23.4375; 0.75/3.95 × 100 = 18.9873.
- 500 × each price: 1600, 1775, 1700, 1950, 2075, 1975; 1975 − 1600 = 375.
- Kestrel differences: −0.50, 0.90, −0.70, 1.40, −0.35; (3.95 − 3.20)/3.20 × 100 = 23.4375; 2.90 − 3.20 = −0.30.
- A1 differences: −0.30, 0.55, 0.40, −0.25, 0.50; 0.90/5.40 × 100 = 16.6667; 0.90/6.30 × 100 = 14.2857.
- A2: 0.50/2.00 × 100 = 25; 1000 × 2.50 = 2500.

## Memory aid check

- **"Describe it: trend, high, low, falls."** with key line **"% change = (last − first) ÷ first × 100%. Bigger swings mean more risk."** Original (the site's `we-3` names the trend, the peak and the two falls). Meaning, as said in scene 7: a description of a share's graph states its overall direction, its extremes and the periods it fell; the percentage change compares the overall change with the starting price. Assumptions checked: the graph joins month-end (closing) prices, so "falls" means month-to-month falls; "first" is the earliest price in the period asked (the purchase price if the question says so); "risk" here means the size of the swings, which is what a Standard question can read from a graph (no statistics). It helps a new case: $8.00 to $7.20 is −10%, a fall, so the trend is down. Introduced after scenes 2 to 6.
- **Considered, not used:** "Up, down, how much" (drops the highest and lowest).

## Narration length estimate

Revision 1, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,004 characters**, 13 scene headings. Characters per scene (1 to 13): 447, 513, 520, 584, 563, 564, 243, 330, 323, 257, 341, 244, 75.

At 13.3 characters per second the speech is about 376 s. Total with the holds and settling below **about 465 s (7 min 45 s)**, 105 s under the 570 s cap; speech and holds before the notes about 420 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the plotting (2), the reading marks (3), the spreadsheet chart (5) and the overlay (6) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

No reserve trims are needed.

## Scene list and build ids

Lesson key `m-s12i06b` (route math-s12-i06, second half). Explainer folder `src/explainer/lessons/math-s12-i06b`; build inputs in `docs/production/claude-pm/lessons/math-s12-i06b/` (at voicing).

In order (13 scene headings): hook-every-month, draw-by-hand, read-the-graph, percentage-change, spreadsheet-chart, same-ends-different-risk, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | i06a's frame; the price table |
| 35 to 80 s | 2 | The graph drawn by hand |
| 80 to 125 s | 3 | The graph read |
| 125 to 180 s | 4 | g01 board: percentage change and holding |
| 180 to 225 s | 5 | The spreadsheet and chart |
| 225 to 270 s | 6 | Two shares overlaid |
| 270 to 290 s | 7 | Framed memory card |
| 290 to 385 s | 8 to 11 | Question cards and countdowns, then feedback |
| 385 to 405 s | 12 | The order ticket, for i07 |
| 405 to 450 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i06a's last frame continues into 1; 1 to 2 stage change (the axes grow); 2 to 3 camera continue; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i06b-learning-review.md`, `science_check` = `checks/m-s12-i06b-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma11-phone-tower-v1.png` (reused as the company's badge); `ma12-coin-jar-full-v1.png` (the coin jar filled to the shoulder, true alpha; reused in the final frame as savings).

Need: none new. Reused: `ma11-phone-tower-v1.png`, `ma12-coin-jar-full-v1.png`.

Coded: the price tables, every graph, trend arrow, range bands and reader, the board, the spreadsheet and chart, the order ticket, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `SpreadsheetGrid` (chart option), `ShareTable` (price-history layout), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i06; none beyond i06a's list):
1. **Cells to points** (small): a table cell's value flies to its plotted point. Check: six cells land at (1, 3.20) to (6, 3.95).
2. **Range bands** (small, a `StudioPlot` layer): a shaded vertical band from a series' minimum to maximum at the right edge. Check: Ridgeline $3.20 to $4.15; Kestrel $2.70 to $4.30.
3. **OrderTicket** (shared with i07; first shown here as a static card). Check: no total in the final frame.

## Codex asset brief

No new plate. Both plates exist and were viewed. Tables, graphs and the order ticket are coded and unbranded.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, spreadsheet cells, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly and that no Standard 1 code is claimed.
3. Confirm `we-3`'s prices and 23.44% are used unchanged, and every percentage change divides by the first price.
4. Confirm the risk line is said once ("real prices change every day and can fall") and no gambling word or image appears.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer (A2's graph labels P and Q only).
6. Confirm scene 1 opens on i06a's final frame and scene 12 matches the decisions file's i06b to i07 join with no total shown.
7. Confirm all company names are invented, no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: A Share's Value Over Time: Graphs and Percentage Change | Year 12 Maths Standard

(Title length: 80 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson14.sa.html

A phone company's share went from $3.20 to $3.95 in six months. Did it rise every month? Graph the month-end prices by hand, then describe the graph properly: the trend, the highest and lowest prices, and the falls inside the rise. Find the percentage change from the first price, the value of a holding (and why a gain is only banked when you sell), and build the same graph and calculation in a spreadsheet. Then compare two shares with the same start and end but very different swings, and see why bigger swings mean more risk. Two exam-style questions at the end. All companies are invented, and all questions are written for HSCScience in the HSC style; they are not official NESA questions. Real share prices change every day and can fall.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Graph and interpret the value of a share over time, with and without using digital tools"
"Interpret and analyse tables and graphs about the value of share"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35

Builds on: Shares: Dividends and Dividend Yield from a Share Table. Next: Buying Shares: Brokerage and Total Cost.

#Year12Maths #MathsStandard #Shares #HSCScience

## Open decisions

- **1. "Risk" as swings (root).** The video treats the size of a share's swings as its risk, said in plain words, without volatility or statistics. Confirm this level is right for Standard 2.
- **2. A1 without the drawing part.** The pack's question 2 (a) asked students to draw the graph; a 10 s countdown cannot hold a drawing, so (a) is left out, and the feedback draws it. Confirm, or let A1 say "Pause the video for as long as you need" (the owner rule fixes 10 s).

## Review notes

- Revision 1. Next: student learning review (trace from i06a; check that the axis break is clear, that "we don't know the days between" is not confusing, that dividing by the first price is anchored by "measure from where you started", that the holding's gain is clearly unbanked, that the two-share overlay reads as risk, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
