# Maths S11 M02: How do we add or remove GST, and how does VAT work overseas? GST as a 10% increase, adding it (× 1.1), removing it (÷ 1.1), the GST inside a price as one part in eleven, a receipt with GST-free food, and VAT abroad by the same parts (design)

Status: Revision 3 (25 Nov 2026): preflight and fact repairs (see the final section, "Revision 3 (root, 25 November 2026)"). Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2: learning review resolved (24 Nov 2026)"). Revision 1 (23 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 11 Standard designs (`math-s11-e01.md`, `e12.md`, `f01.md`, each at Revision 2), `math-s11-m01.md` (Revision 1, this batch), the coherence audit (`../checks/maths-standard-coherence-audit-2026-11-23.md`) and root's Standard rulings 1 to 99 (`../checks/root-rulings-maths-standard-outline.md`; rulings 3, 5 and 32 apply). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,487 characters by script at Revision 2 (Revision 1: 5,487; see "Narration length estimate"), 13 scene headings, about 498 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: Year 11 Managing money, outline playlist order 29. One video for Standard 1 and Standard 2. Viewers arrive from m01's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-m02.md`. Route entry: `math-s11-m02` in `../../programme/maths-standard-route-inputs-10.json`. Site lesson: `year11/managing-money/lesson01.sa.html` (site L9), card 1, WE1 and SAQ 1 used; VAT and overseas purchases are taught from the syllabus (ruling 3; site gap logged as MSY-02 in `../site-corrections-maths-standard-y11-additions.md`). Visual system: maths studio kit; the grocery basket and the travel suitcase (both existing); the receipt, quote card, parts bar and boards coded.

Owner rules applied: as m01 (2024 syllabus; plates for real objects, code for documents and diagrams; no people; header strip "MANAGING MONEY" only; one question; one stage at a time; words before symbols; plain meanings (GST, GST-free, GST-inclusive, VAT); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a supermarket receipt, a plumber's quote, a laptop, travel); money spoken naturally; Australian spelling; no em dashes; tax rates said once to differ by country and to change).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Managing money, "Purchasing goods", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-10.json`:

- `cib3251328`: "Calculate the goods and service tax (GST) or value-added tax (VAT) when purchasing goods and services in Australia and internationally"
- `cib09c3969`: "Solve problems involving GST or VAT"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431

**Boundary:** starts from m01's final frame exactly (the grocery basket `ms12-grocery-basket-v1.png`, about 640 px wide, at the left; a coded receipt card at the right: "Bread 4.50", "Milk 3.20", "Bananas 3.80", "Chips 5.50", "Soft drink 3.30", "TOTAL $20.30", "includes GST ?" with "?" ringed amber; chips "Next: GST" and "?"). Recalls m01 (the multiplier; divide by where you started) in a grey chip. Teaches: GST as a 10% tax on most goods and services, with GST-free basics; adding GST (× 1.1) and the GST on a pre-GST price (× 0.1); removing GST (÷ 1.1) as the reverse of a percentage increase (new here); the GST inside a GST-inclusive price as one part in eleven (÷ 11); a receipt with GST-free and taxable lines; VAT overseas by the same parts idea (UK 20%, one part in six; New Zealand GST 15%, ÷ 1.15). Stops at GST and VAT on single prices and receipts. Not taught: currency conversion; business tax credits; the Tourist Refund Scheme.

## Decisions

- **Anchor: the supermarket receipt (m01's final frame).** It answers its own question at the end of scene 5: only the chips and soft drink carry GST, $0.80 of the $20.30. The receipt marks GST-free lines with a small "#" as many receipts do (a coded mark, no brand).
- **Reverse percentages taught here, once (route inputs 10).** Scene 3 is the only place in the course where "divide by the multiplier" is taught; m03 onwards and Year 12 recall it. The forward and backward arrows "× 1.1" and "÷ 1.1" make it a pair of opposite moves.
- **The parts picture carries ÷ 11 (standard item 3).** A `PartsBar` of 10 blue parts (the price before GST) and 1 violet part (the GST) shows why the GST is one part in eleven of the total; the same bar with a rate slider becomes 5 + 1 for 20% VAT and 100 + 15 for 15%. This replaces the site's "÷ 11 because 10/110" sentence with a picture first.
- **VAT (pack decision).** Plain meaning: "value-added tax, the name many countries use for the same kind of tax". UK standard rate 20% (one part in six of a VAT-inclusive price); New Zealand calls its tax GST, at 15%. Prices stay in pounds and New Zealand dollars; no exchange rate (route inputs 10). Codex confirms both rates.
- **Simulations (standard item 3).**
  1. **Forward and back** (scenes 2 and 3; `PercentBar` from m01): the $340 block grows an amber 10% sliver to $374; then a $1628 block loses its sliver when the arrow runs backwards "÷ 1.1", leaving $1480; a crossed attempt cuts 10% of the whole $1628 and lands at $1465.20, short of the true base.
  2. **Parts bar with rate slider** (scenes 4 and 6; new `PartsBar`): 11 equal parts (10 blue, 1 violet) under the $1628; each part labelled "$148"; the slider moves the rate to 20%: the bar redraws as 6 parts (5 blue, 1 violet) under "£36", each "£6"; then 15%: a 100-to-15 split under "NZ$69", with the readout "tax share = 15 ÷ 115".
  3. **Receipt filter** (scene 5): the GST-free lines (bread, milk, bananas) slide left and grey out; the two taxable lines slide right into an amber box, sum $8.80, which drops onto an 11-part bar: one violet part "$0.80".
- **Colour roles (fixed m01 to m06).** Price before tax **blue**; rate and multiplier **amber**; price including tax **teal**; the tax part (GST or VAT) **violet**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** Current working 52 px; receipt 36 px; parts labels 40 px; nothing below 26 px; all text above y = 950. Hand tags: "10% on top", "back the same way", "the 10% was of $1480", "1 part in 11", "only taxed lines", "1 part in 6", "same idea, new rate", "check forwards". At most two live at once.
- **Stage changes (standard item 2).** The receipt (1); the plumber's quote and the forward arrow (2); the laptop and the backward arrow (3); the parts bar (4); the receipt filter (5); the suitcase and the rate slider (6); framed card (7); question cards (8 to 11); the headphones (12); key notes (13).
- **Worked examples (g01 order).** Task strip, givens card (price blue, rate amber), multiplier row, working, framed green answer, crossed slip: scene 3 "1628 × 0.9 = $1465.20" crossed, caption "the 10% was of $1480"; scene 5 "20.30 ÷ 11 = $1.85" crossed, caption "bread, milk and bananas have no GST".
- **Memory aid.** Framed card: "GST is 1 part in 11." Key line: "Add: × 1.1. Remove: ÷ 1.1. GST inside a price: ÷ 11. Other rates: count the parts."
- **Visual surprise.** The crossed "× 0.9" block lands short of the true $1480 line, so the missing $14.80 shows as a red-outlined gap (scene 3); and in scene 6 the same bar redraws itself into six parts.
- **Plain meanings at first use.** GST ("goods and services tax, a ten per cent tax on most things sold in Australia"); GST-free ("no GST is charged, as for most basic food"); GST-inclusive ("the GST is already in the price"); VAT ("value-added tax, the name many countries use for the same kind of tax").
- **Attempts.** A1 (pack question 1): mechanic's bill $462 including GST: GST $42, price before GST $420; crossed "GST = 462 × 0.1 = $46.20" (caption "the 10% was of $420"). A2 (pack question 2; Revision 2 item): a London hotel room, £54 a night including 20% VAT (standard-rated; Revision 1's train ticket was dropped because UK rail fares are zero-rated): £45, £9, and the friend's error; crossed "VAT = 54 × 0.2 = £10.80" (caption "the 20% was added to £45").
- **Mistake scene:** none separate. 10% of an inclusive price (A1 crossed, said in 4); × 0.9 to remove GST (3, crossed); GST on GST-free items (5, crossed); ÷ 11 at another rate (6, said: "the parts change with the rate").
- **Cause chain taught, in order:** (1) GST is a 10% increase on the price before GST, so adding it is × 1.1 (2); (2) removing it undoes that multiplication, so divide by 1.1; taking 10% off the total fails because the 10% was of the smaller price (3); (3) the price before GST is 10 parts and the GST is 1 more part, so the GST is 1 part in 11 of the total (4); (4) GST-free lines carry no tax, so only the taxable lines are split into 11 parts (5); (5) another rate makes different parts, 100 + 20 = 120, so VAT at 20% is 1 part in 6 (6).
- **Entry knowledge (route):** math-s11-m01 (the multiplier; divide by where you started). Recalled in a grey chip.
- **Money sources (rulings 5 and 32).** GST rate 10% and the GST-free categories: ATO, "GST-free sales" (Codex confirms with the dated page). UK VAT 20% standard rate (GOV.UK, "VAT rates"); New Zealand GST 15% (Inland Revenue). All prices are examples. Said once (scene 6): "Each country sets its own rate, and rates can change."
- **Site notes.** lesson01 values recalculated: no arithmetic error. VAT and overseas purchases are a site gap (MSY-02).
- **Handoff (to math-s11-m03, buy now, pay later).** Scene 12: board clear; the headphones `ma12-headphones-v1.png` (about 700 px wide) at the centre-left; the swing tag `ma12-swing-tag-v1.png` (about 300 px tall) hangs from the headband with "$480" (blue, 48 px); a coded card at the right "or 4 payments of $120" with "$120" in teal; chips "Next: buy now, pay later" and "?". No fees shown.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 340 × 1.1 = 374; 340 × 0.1 = 34.
  (b) 1628 ÷ 1.1 = 1480; 1628 ÷ 11 = 148; 1480 + 148 = 1628; 1480 × 1.1 = 1628; slip 1628 × 0.9 = 1465.20 (14.80 short); 1628 × 0.1 = 162.80.
  (c) Receipt: 4.50 + 3.20 + 3.80 + 5.50 + 3.30 = 20.30; taxable 8.80; 8.80 ÷ 11 = 0.80; slip 20.30 ÷ 11 = 1.845 → $1.85.
  (d) UK: 36 ÷ 1.2 = 30; 36 ÷ 6 = 6; slip 36 × 0.2 = 7.20. NZ: 69 ÷ 1.15 = 60; 69 − 60 = 9; 69 × 15 ÷ 115 = 9.
  (e) A1: 462 ÷ 11 = 42; 462 ÷ 1.1 = 420; 420 × 1.1 = 462; slip 46.20. A2: 54 ÷ 1.2 = 45; 54 − 45 = 9; 54 ÷ 6 = 9; slip 10.80.
  (f) Pronunciations: "G S T" spelt out; "V A T" spelt out; "thirty-six pounds"; "sixty-nine New Zealand dollars".

Main question: *How much of a price is tax? How do we add or remove GST, and how does VAT work overseas?*
Entry knowledge (math-s11-m01): the multiplier; divide by where you started.
Stops after: adding, removing and finding GST; a receipt; VAT at 20% and 15%. No currency conversion.
Handoff: math-s11-m03: "or 4 payments of $120".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): price before tax blue; rate and multiplier amber; price including tax teal; the tax part violet; answer green; mistake red. Header strip "MANAGING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: how much of this is tax?
> Twenty dollars thirty at the supermarket, and the receipt says it includes GST. GST is the goods and services tax, a ten per cent tax on most things sold in Australia. The shop adds it to the price and passes it on to the government. But look closely. Bread, milk and bananas have a little mark beside them. They're GST-free, because most basic food has no GST at all. So how much of this twenty dollars thirty is really **tax**? And when you travel overseas, the tax has another name and another **rate**. How do we add or remove GST, and how does VAT **work**?

Visual: opens on m01's final frame exactly. On "goods and services tax" a grey chip "GST = goods and services tax: 10%". On "passes it on" a small coded arrow from the receipt to a grey box "government". On "a little mark" a "#" appears beside "Bread", "Milk" and "Bananas" (amber), and a footnote line writes under the receipt "# GST-free". On "tax" the "?" in "includes GST ?" pulses. On "rate" the travel suitcase `ma12-travel-suitcase-v1.png` (about 260 px) slides in small at the top right with a grey chip "overseas: VAT?". On "work" heading "GST and VAT" writes on.

### 2. adding GST
> Start with a plumber's quote. Three hundred and forty dollars plus GST. Plus GST means the GST hasn't been added yet. GST is a ten per cent increase, and last time a ten per cent increase was one **multiplication**. Times one point one. Three hundred and forty times one point one is three hundred and seventy-four **dollars**. That's the price including GST, what you actually pay. If you only want the tax itself, take ten per cent of the price before GST. Three hundred and forty times nought point one is thirty-four dollars. And three forty plus thirty-four is three seventy-**four**.

Visual: stage change: a coded quote card at the left (unbranded, 40 px): "Plumbing: $340 + GST". Centre: the `PercentBar` (m01) as a blue block "before GST $340". On "multiplication" grey chip "m01: up 10% = × 1.1", hand tag "10% on top". On "dollars" an amber sliver joins and the readout writes "340 × 1.1 = $374" (teal, 52 px), framed green, label "including GST". On "nought point one" the sliver alone is labelled "GST = 340 × 0.1 = $34" (violet). On "four" a check row "340 + 34 = 374 ✓".

### 3. removing GST: back the same way
> Now the other direction. A laptop costs one thousand six hundred and twenty-eight dollars, including GST. What was it before the GST went on? Going forwards, you multiplied by one point one. So going backwards, you **divide** by one point one. Sixteen twenty-eight divided by one point one is fourteen hundred and eighty **dollars**. Check it forwards. Fourteen eighty times one point one is sixteen twenty-eight. A tempting slip is to take ten per cent off sixteen twenty-eight, times nought point nine. That gives fourteen sixty-five twenty, and it's **wrong**. The ten per cent was ten per cent of fourteen eighty, not of sixteen twenty-**eight**.

Visual: stage change (simulation 1): a coded price card "Laptop $1628 incl. GST" at the left. The bar as a teal block "$1628" with its amber sliver inside the right end. On "divide" an arrow runs backwards over the bar, labelled "÷ 1.1" (amber); hand tag "back the same way". On "dollars" the sliver peels away and the block becomes "before GST $1480" (blue, framed green), row "1628 ÷ 1.1 = $1480" (52 px). On "Check it forwards" a small arrow "× 1.1" runs forwards, row "1480 × 1.1 = 1628 ✓", hand tag "check forwards". On "times nought point nine" a red-outlined block cuts 10% of the whole $1628 and stops at "$1465.20", short of the blue $1480 line, the $14.80 gap outlined red. On "wrong" the slip "1628 × 0.9 = $1465.20" is crossed (caption "the 10% was of $1480"). On "eight" the amber sliver relabels "10% of $1480".

### 4. the GST inside a price: one part in eleven
> So how much of the sixteen twenty-eight was GST? Here's a picture that makes it quick. The price before GST is ten equal parts. The GST is ten per cent, so it's one more part, the same size. That makes eleven parts **altogether**. So the GST is one part in eleven of the price including GST. Sixteen twenty-eight divided by eleven is a hundred and forty-eight **dollars**. And fourteen eighty plus a hundred and forty-eight is sixteen twenty-eight. Notice that ten per cent of sixteen twenty-eight would be a hundred and sixty-two eighty, too much, because sixteen twenty-eight is eleven parts, not **ten**. Try a quick one. A fifty-five dollar haircut, including GST, is eleven parts of five dollars. So five dollars is GST, and fifty dollars is the price before **GST**.

Visual: stage change (simulation 2): the `PartsBar` (1,300 × 130 px) under the label "$1628": ten blue parts write on one by one, counter "10 parts: price before GST"; on "one more part" a violet part joins at the right, "1 part: GST"; on "altogether" the counter reads "11 parts = $1628", hand tag "1 part in 11". On "dollars" every part labels "$148" and the violet one rings, row "GST = 1628 ÷ 11 = $148" (52 px, violet), framed green. Row "1480 + 148 = 1628 ✓". On "ten" a red slip "GST = 1628 × 0.1 = $162.80" writes and is crossed (caption "$1628 is 11 parts, not 10"). On "haircut" a small 11-part bar (900 px) writes under the first, labelled "$55", each part "$5"; on "GST" (last) its violet part rings "$5 GST" and its blue parts "$50 before GST" (framed green).

### 5. the receipt: only the taxed lines
> Back to the supermarket. Twenty dollars thirty altogether, but the bread, milk and bananas are GST-free. Only the chips and the soft drink carry GST. They add to eight dollars **eighty**. That's eleven parts, so the GST is eight eighty divided by eleven, eighty **cents**. So of the twenty dollars thirty, just eighty cents is tax. Dividing the whole twenty thirty by eleven gives a dollar eighty-five, which taxes the bread and milk as **well**. And notice that the GST was never added at the register. In Australia, shops show prices with the GST already in, so the price you see is the price you **pay**.

Visual: stage change (simulation 3): the receipt card (40 px) centre. On "GST-free" the three "#" lines slide left and grey out under a grey label "GST-free: no tax". On "eighty" (first) the two taxable lines slide right into an amber box, sum "5.50 + 3.30 = $8.80" (teal). The $8.80 drops onto an 11-part bar; on "cents" one violet part rings, row "GST = 8.80 ÷ 11 = $0.80" (framed green), and the receipt's "includes GST ?" fills "includes GST $0.80"; hand tag "only taxed lines". On "well" a red slip "20.30 ÷ 11 = $1.85" writes and is crossed (caption "bread, milk and bananas have no GST"). On "pay" grey chip "shelf price = price including GST".

### 6. VAT overseas: same idea, new rate
> Overseas, it's the same kind of tax with a different name and rate. Many countries call it VAT, value-added tax. In the United Kingdom, VAT is twenty per cent. Say a hoodie in London costs thirty-six pounds, including VAT. The price before VAT is a hundred per cent, and VAT adds twenty, so a hundred and twenty altogether. That's five parts plus one **part**. So the VAT is one part in six. Thirty-six divided by six is six pounds of VAT, and the price before VAT is thirty **pounds**. New Zealand calls its tax GST, but it's fifteen per **cent**. A jacket at sixty-nine New Zealand dollars, including GST, was sixty-nine divided by one point one five, sixty dollars before tax, so the tax is **nine**. Each country sets its own rate, and rates can change, so count the parts for the rate you're **given**.

Visual: stage change: the travel suitcase (about 420 px) at the top left with a grey chip "London: VAT 20%". The `PartsBar` returns with its rate slider (amber) at 10%; on "twenty per cent" the slider moves to 20% and the bar redraws: on "part" it shows 5 blue parts and 1 violet part under "£36", hand tag "1 part in 6". On "pounds" rows "VAT = 36 ÷ 6 = £6" (violet) and "before VAT = 36 ÷ 1.2 = £30" (blue), framed green. On "fifteen per cent" the chip changes to "Auckland: GST 15%" and the slider moves to 15%: the bar splits "100 | 15" under "NZ$69", readout "tax share = 15 ÷ 115". On "nine" rows "69 ÷ 1.15 = NZ$60" and "tax = 69 − 60 = NZ$9" (framed green), hand tag "same idea, new rate". On "given" the slider readout lists "10%: 1 in 11 · 20%: 1 in 6 · 15%: 15 in 115".

### 7. memory aid
> Here's the summary. In Australia, GST is one part in eleven of a price that includes it. To add GST, multiply by one point one. To remove it, divide by one point one. And for any other rate, count the **parts**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the 11-part bar with its violet part, and the forward and backward arrows "× 1.1", "÷ 1.1". Main line, hand font 56 px: "GST is 1 part in 11." On "parts" the key line, 40 px: "Add: × 1.1. Remove: ÷ 1.1. GST inside a price: ÷ 11. Other rates: count the parts." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A mechanic's bill is four hundred and sixty-two dollars, including GST. Find the GST included in the bill, and the price before GST. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A mechanic's bill is $462, including GST. Find (a) the GST included in the bill (b) the price before GST." Picture slot: a coded invoice card "Service and repairs: $462 incl. GST". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The GST is one part in eleven. Four sixty-two divided by eleven is forty-two **dollars**. The price before GST is four sixty-two divided by one point one, four hundred and twenty **dollars**. Taking ten per cent of four sixty-two, forty-six twenty, is the **slip**. The ten per cent was of four twenty.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "dollars" (first) "GST = 462 ÷ 11 = $42" (violet), framed green; on "dollars" (second) "462 ÷ 1.1 = $420" (blue), framed green, check "420 × 1.1 = 462 ✓". On "slip" a red slip "GST = 462 × 0.1 = $46.20" writes and is crossed (caption "the 10% was of $420"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. In the United Kingdom, VAT is twenty per cent. A hotel room in London costs fifty-four pounds a night, including VAT. Find the price before VAT, and the VAT included. A friend says the VAT is twenty per cent of fifty-four pounds, ten pounds eighty. Explain the error. Pause here to answer.

Visual: `QuestionCard`, 40 px: "In the United Kingdom, VAT is 20%. A hotel room in London costs £54 a night, including VAT. (a) Find the price before VAT. (b) Find the VAT included. (c) A friend says the VAT is 20% of £54, which is £10.80. Explain the error." Picture slot: the suitcase (260 px) and a coded hotel booking card "1 night, £54 incl. VAT". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Fifty-four divided by one point two is forty-five **pounds** before VAT. So the VAT is nine pounds, one part in **six**. The friend took twenty per cent of the wrong amount. The twenty per cent was added to forty-five pounds, not to fifty-**four**.

Visual: the card shrinks to the top. Rows, 44 px: on "pounds" "54 ÷ 1.2 = £45" (blue, framed green); on "six" "VAT = 54 − 45 = £9 = 54 ÷ 6" (violet, framed green), a small 6-part bar beside it. On "four" a red slip "VAT = 54 × 0.2 = £10.80" writes and is crossed (caption "the 20% was added to £45"). Hold about 1 s.

### 12. handoff
> So GST and VAT are percentage increases, and you can always run them backwards. Next, a different kind of price. These headphones are four hundred and eighty dollars. But at the checkout, there's another button. Four payments of a hundred and twenty, and take them home today. Is that really the same price? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "headphones" the headphones `ma12-headphones-v1.png` (about 700 px wide) at the centre-left with the swing tag "$480" (blue); on "Four payments" the coded card at the right "or 4 payments of $120" ("$120" teal). On "next" chips "Next: buy now, pay later" and "?". Hold about 2 s. This is m03's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- GST: 10% on most things; most basic food is GST-free.
- Add GST: × 1.1. GST on a pre-GST price: × 0.1.
- Remove GST: ÷ 1.1 (never × 0.9). Check forwards.
- GST inside a price: ÷ 11 (1 part in 11).
- VAT at 20%: ÷ 1.2; the VAT is 1 part in 6.

Memory aid (framed card, right side, as in scene 7): *GST is 1 part in 11.* Key: *Add: × 1.1. Remove: ÷ 1.1. GST inside a price: ÷ 11. Other rates: count the parts.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and m03's opening frame.

## Teaching checks

- **Does it explain causes?** Why × 1.1: GST is a 10% increase (2). Why ÷ 1.1: it undoes the multiplication; why not × 0.9: the 10% was of the smaller price (3). Why ÷ 11: 10 parts plus 1 part (4). Why only some lines: GST-free items carry no tax (5). Why ÷ 6 for 20%: 100 + 20 makes 5 parts plus 1 (6).
- **Misconceptions addressed:** × 0.9 (3, crossed); 10% of an inclusive price (4 and A1, crossed); GST on GST-free items (5, crossed); the same ÷ 11 at another rate (6, said); VAT as 20% of the inclusive price (A2, crossed).
- **Visual standard, item by item:** 1 the receipt and basket from the first frame; 2 a new stage every 40 to 60 s; 3 the bar running backwards, the parts bar with a rate slider, the receipt filter; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 order with framed answers and crossed slips; 8 framed card and five bullets; 9 the × 0.9 block landing short of $1480, and the bar redrawing into six parts.
- **One idea at a time:** add (2), remove (3), the GST inside (4), the receipt (5), VAT (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 21 s and 17 s.
- **Avoided double teaching:** the multiplier from m01 in a chip.
- **Syllabus coverage:** `cib3251328` (2 to 4, 6; key notes 1 to 5), `cib09c3969` (5, 6, A1, A2).
- **Out of scope by design:** currency conversion; tax credits; tourist refunds.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** "A mechanic's bill is $462, including GST. Find (a) the GST included in the bill (b) the price before GST."
Model answer: (a) 462 ÷ 11 = $42. (b) 462 ÷ 1.1 = $420 (check 420 × 1.1 = 462). Classic mistake (crossed): "GST = 462 × 0.1 = $46.20".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** "In the United Kingdom, VAT is 20%. A hotel room in London costs £54 a night, including VAT. (a) Find the price before VAT. (b) Find the VAT included. (c) A friend says the VAT is 20% of £54, which is £10.80. Explain the error."
Model answer: (a) 54 ÷ 1.2 = £45. (b) 54 − 45 = £9. (c) The 20% was added to the price before VAT (£45), not to £54; the VAT is one part in six of the inclusive price. Classic mistake (crossed): "VAT = 54 × 0.2 = £10.80".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Receipt | 20.30; taxable 8.80; GST 0.80; slip 1.85 | 1, 5 |
| Plumber | 374; 34 | 2 |
| Laptop | 1480; 148; slips 1465.20 (14.80 short) and 162.80 | 3, 4 |
| Haircut | $55 incl. GST: $5 GST, $50 before | 4 |
| UK hoodie | £30; £6 | 6 |
| NZ jacket | NZ$60; NZ$9 | 6 |
| A1 | 42; 420; slip 46.20 | 8, 9 |
| A2 | £45; £9; slip £10.80 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (23 Nov 2026, scratchpad `s11m/verify.py`, `python -I`; 0 failures); Codex to re-check.

- 340 × 1.1 = 374; 340 × 0.1 = 34; 340 + 34 = 374; 55 ÷ 11 = 5; 55 − 5 = 50.
- 1628 ÷ 1.1 = 1480; 1480 × 1.1 = 1628; 1628 ÷ 11 = 148; 1480 + 148 = 1628; 1628 × 0.9 = 1465.20; 1480 − 1465.20 = 14.80; 1628 × 0.1 = 162.80.
- 4.50 + 3.20 + 3.80 + 5.50 + 3.30 = 20.30; 5.50 + 3.30 = 8.80; 8.80 ÷ 11 = 0.80; 20.30 ÷ 11 = 1.845 → 1.85.
- 36 ÷ 1.2 = 30; 36 ÷ 6 = 6; 69 ÷ 1.15 = 60; 69 − 60 = 9; 15 ÷ 115 × 69 = 9.
- 462 ÷ 11 = 42; 462 ÷ 1.1 = 420; 462 × 0.1 = 46.20.
- 54 ÷ 1.2 = 45; 54 − 45 = 9; 54 ÷ 6 = 9; 54 × 0.2 = 10.80.

## Memory aid check

- **"GST is 1 part in 11."** with key line **"Add: × 1.1. Remove: ÷ 1.1. GST inside a price: ÷ 11. Other rates: count the parts."** Original (the site's "÷ 11" shortcut, given a picture and a reason). Meaning, as said in scene 7: the price before GST is ten equal parts and the GST is one more. Assumptions checked: the item is fully taxable (scene 5 shows GST-free lines carry no parts); the rate is 10% (scene 6 changes the parts for 20% and 15%). It helps a new case: a $55 haircut including GST has $5 GST and $50 before GST; Japan's 10% consumption tax would also be 1 part in 11 (not stated in the video).
- **Considered, not used:** "Divide by 11, not times 0.1" (a rule without a reason).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,487 characters**, 13 scene headings. Characters per scene (1 to 13): 550, 577, 634, 756, 595, 787, 207, 165, 290, 283, 236, 320, 75. Feedback speech about 21.8 s and 17.7 s.

At 13.3 characters per second the speech is about 413 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the backward arrow (3), the parts bar (4), the receipt filter (5) and the rate slider (6), about 20 s; the key-notes scene adds about 39 s beyond its line. Total **about 498 s**, 72 s under the 570 s cap. At 5,487 characters it sits at the bottom of the 5,500 to 6,800 target, like e12 (4,745) and r09 (ruling 55): no padding was added.

Revision 2 (24 Nov 2026, same script): **5,499 characters**, 13 scene headings (per scene: 550, 577, 634, 756, 591, 787, 207, 165, 290, 299, 236, 320, 75); speech about 413 s; total **about 499 s**, 71 s under the 570 s cap. Feedback speech about 21.8 s and 17.7 s.

Reserve trims if the voiced take runs long: scene 2's last sentence ("And three forty plus thirty-four ...", the check row shows it); scene 6's New Zealand example can lose its working sentence (the rows show it).

## Scene list and build ids

Lesson key `m-s11m02` (route math-s11-m02). Explainer folder `src/explainer/lessons/math-s11-m02`; build inputs in `docs/production/claude-pm/lessons/math-s11-m02/` (at voicing).

In order (13 scene headings): hook-how-much-tax, adding-gst, removing-gst, one-part-in-eleven, receipt, vat-overseas, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | The receipt and basket |
| 45 to 90 s | 2 | The quote and the forward arrow |
| 90 to 145 s | 3 | The laptop and the backward arrow |
| 145 to 195 s | 4 | The parts bar |
| 195 to 230 s | 5 | The receipt filter |
| 230 to 300 s | 6 | The suitcase and the rate slider |
| 300 to 320 s | 7 | Framed memory card |
| 320 to 420 s | 8 to 11 | Question cards and countdowns, then feedback |
| 420 to 445 s | 12 | The headphones |
| 445 to 490 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: m01's last frame continues into 1; 1 to 2 stage change; 2 to 3 continue (the bar stays, the arrow reverses); 3 to 4 continue (the block splits into parts); 4 to 5 stage change; 5 to 6 stage change (the parts bar returns); 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-m02-learning-review.md`, `science_check` = `checks/m-s11-m02-maths-check.md`.

## Assets

Inspected before choosing (23 Nov 2026, `public/assets/maths`, opened and viewed): `ms12-grocery-basket-v1.png` (red basket with bread, milk, bananas, apples, pasta, a tin, eggs, cheese); `ma12-headphones-v1.png` (grey over-ear headphones with teal pads, true alpha); `ma12-swing-tag-v1.png`. Not reopened: `ma12-travel-suitcase-v1.png` (used in 12 designs; the builder confirms it reads at 260 px).

Need: none new. Reused: the four plates above.

Coded: the receipt, quote, price and invoice cards, the percent bar with arrows, the parts bar and slider, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `PlateFields`, `HandTag`, `PercentBar` (m01), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row m02):
1. **`PartsBar`**: n equal parts in two colours with a part label and a counter; a rate slider redraws it as 100 : r (simplified to whole parts when possible: 10 → 10 + 1, 20 → 5 + 1; otherwise shown as 100 | r). Check: 10% gives 11 parts of $148 under $1628; 20% gives 6 parts of £6 under £36.
2. **`PercentBar` reverse arrow**: an arrow labelled with the operation that runs right to left and peels the sliver. Check: $1628 → $1480.
3. **Receipt filter**: a coded receipt whose lines can be marked, greyed and slid into a summing box. Check: 8.80 from two lines.

## Codex asset brief

No new plate. All plates exist.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic.
2. Confirm both syllabus quotes match the route-inputs JSON exactly.
3. Confirm with dated sources: Australian GST 10% and that plain bread, milk and fresh fruit are GST-free while potato chips and soft drinks are taxable (ATO); UK standard VAT 20% (GOV.UK), and that UK hotel accommodation is standard-rated (A2; Revision 1's train fare was zero-rated); New Zealand GST 15% (Inland Revenue); that Australian displayed prices must include GST (ACCC, component pricing). Confirm the "rates can change" sentence is said once.
4. Confirm the spoken forms match the screen.
5. Confirm both attempts carry every demand and show no answer.
6. Confirm scene 1 opens on m01's final frame and scene 12 matches m03's boundary.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: GST and VAT: Adding and Removing the Tax | Year 11 Maths Standard

(Title length: 65 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/managing-money/lesson01.sa.html

How much of a supermarket receipt is tax? Add GST with one multiplication, remove it by dividing by 1.1, and see with a picture why the GST inside a price is one part in eleven. Then find the GST on a receipt with GST-free food, and use the same idea for VAT at 20% in the UK and GST at 15% in New Zealand. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Prices are examples; tax rates can change.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Managing money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Calculate the goods and service tax (GST) or value-added tax (VAT) when purchasing goods and services in Australia and internationally"
"Solve problems involving GST or VAT"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa8d2fb431

Builds on: Percentage Change, Profit and Loss. Next: Buy Now, Pay Later: What It Really Costs.

#Year11Maths #MathsStandard #GST #HSCScience

## Open decisions

- **1. The "#" GST-free mark.** Receipts use different marks; "#" with a footnote is a generic choice. Root may prefer "GST-free" spelt out beside each line (wider receipt).
- **2. Two overseas examples.** UK VAT carries the teaching; New Zealand shows the same idea at a rate that does not make whole small parts. Root may drop New Zealand to a chip if the voiced take runs long.

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-m02-learning-review.md` (0 blockers, 1 should fix, 3 notes). Resolution record: `../checks/m-s11-m-a-learning-review-resolution.md`.

- **SF1 (UK train fares are zero-rated): applied (root ruling 6).** A2 is now "A hotel room in London costs £54 a night, including VAT", a standard-rated item, in the narration, the card, the picture slot (a coded hotel booking card "1 night, £54 incl. VAT") and the model answer. The numbers (£45, £9, £10.80) are unchanged. Codex's brief item 3 now asks for the dated GOV.UK page confirming hotel accommodation is standard-rated.
- **N1 (shelf-price rule as a legal fact): applied.** Scene 5 now says "shops show prices with the GST already in". The ACCC component-pricing check stays in Codex's brief item 3.
- **N2 (two money-speaking styles): preview check.** In voiced preview, if "sixteen twenty-eight" is unclear, say "sixteen hundred and twenty-eight" on first use in the scene.
- **N3 (rate chips undated): left to Codex**, who records the dated ATO, GOV.UK and Inland Revenue pages in the check file (brief item 3).
- Feedback rows already show one result per cue; no change.
- Narration 5,499 characters (was 5,487), about 499 s with holds.

## Review notes

- Revision 1. Next: student learning review (trace from m01; check that "plus GST" and "including GST" are told apart before any working, that the backward arrow makes ÷ 1.1 feel like undoing, that the parts picture comes before ÷ 11, that the receipt question is answered, and that VAT reuses the parts picture rather than a new rule), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `PartsBar` and the reverse arrow before this video.

## Revision 3 (root, 25 November 2026): preflight and fact repairs

This section overrides earlier text. Sources: `../checks/m-s11-m02-maths-check.md`, `../checks/maths-standard-y11-official-facts.md` and `../checks/brief264-fact-checks-2026-11-24.md`. Repair log: `../checks/m-s11-preflight-repair-2026-11-25.md`.

- **Count (count-mismatch): fixed.** The declared 5,499 included the spaces between scenes; the sum of the 13 scene strings at Revision 2 was 5,487 (Codex's value). Narration is **5,487 characters**. Counted in Python the same way as Codex (`> ` lines inside each `### N.` scene joined with a space, `**` removed, scenes summed with no separator; Revision 2 sum matches `work/brief271/source-inventory.json`). At 13.3 characters per second the speech is about 413 s; total about 498 s with holds, under the 570 s cap. The header line is updated; earlier totals under "Narration length estimate" and in Revision 2 are superseded.
- **Official facts: applied.** UK standard VAT 20% and short-stay hotel accommodation standard-rated (HMRC Notice 709/3; GOV.UK): confirmed; £54 including VAT gives £45 before VAT and £9 VAT (rechecked). No change.
- **Narration changed: no.**
- No em or en dashes added. Ready for the Codex re-check; human listening still pending.
