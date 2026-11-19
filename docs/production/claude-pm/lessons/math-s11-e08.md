# Maths S11 E08: How does a tax table give the tax payable on a year of income? Progressive tax as slices of income, reading the 2026-27 resident table (find the row, the base amount, the dollars over, the rate), where base amounts come from, and why a pay rise never leaves you worse off (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard money designs (`math-s12-i01.md`, `i08.md`, `i17a.md`, each at Revision 2, and the i-strand resolution logs) and root's Standard rulings 1 to 87 (`../checks/root-rulings-maths-standard-outline.md`; rulings 5, 32 and 85 apply: 2026-27 figures only, every site answer recalculated). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,522 characters by script (see "Narration length estimate"), 13 scene headings, about 504 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: ninth video of the Year 11 Earning money strand, outline playlist order 23. One video for Standard 1 and Standard 2. Viewers arrive from e07's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-e08.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year11/earning-money/lesson08.sa.html` (SHA256 `2d5c712075eeee98f4fa6a78089dbe912fb78f0c8b11ca706e2188b435bf1ef5`; card 02, "progressive means only the income in each bracket gets taxed at that bracket's rate", "Income tax = Base amount + Marginal rate × (Taxable income − Threshold)"; card 05's table, which is the 2024-25 table (MS-73); `we-1`, Zara, $67,500; `we-4`, Ella at exactly $45,000, "This matches the base amount for the next bracket"; SA 1, $60,000). Every site answer is recalculated with the 2026-27 table: Zara $10,770 (site $11,038), Ella $4,020 (site $4,288). Route entry: `math-s11-e08` in `../../programme/maths-standard-route-inputs-9.json`. Visual system: maths studio kit; the book stack reused for the teacher; the tax table, sliced bars, cards and boards coded.

Owner rules applied: as e01 (2024 syllabus; plates for real objects, code for diagrams and documents (the tax table is coded, unbranded, with the ATO named as the source and the year in its heading); no people; one question; one stage at a time; words before symbols; plain meanings (tax payable, tax-free threshold, cents in the dollar, base amount, progressive); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns with the table on the card; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a chef's first full year, a teacher, a part-time student job, a pay rise); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration; rates said once to change every year).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Earning money, "Taxation", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-9.json`:

- `cifaf82aa0`: "Determine tax payable by interpreting and applying information in tax tables"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

**Boundary:** starts from e07's final frame exactly (the card "taxable income: $88 990"; the blank table "Resident tax rates 2026-27" with five outlined rows; chips "which row?", "Next: tax tables", "?"). Recalls e03 (a sliding scale: each rate on its own slice) and e07 (taxable income) in a grey chip each. Teaches: tax payable as the income tax on taxable income; progressive tax as slices, each taxed at its own rate (the e03 picture); the 2026-27 resident table (nil to $18,200; 15c for each $1 over $18,200; $4,020 plus 30c for each $1 over $45,000; $31,020 plus 37c over $135,000; $51,370 plus 45c over $190,000); reading it in four steps (find the row, write the base amount, subtract the row's lower limit, add the rate × the dollars over); the base amount as the tax on the slices below (Ella's $45,000 boundary); "over $45,000" starting at $45,001; a pay rise never lowers after-tax income. Stops at tax from the table. Not taught: the Medicare levy (e10, named once as "comes later"); PAYG (e09); offsets, non-resident and working-holiday tables (pack: leave out).

## Decisions

- **Anchor: the teacher's $88,990 meeting the table (from e07's final frame).** The opening question is answered in scene 4. The first teaching example is the site's Zara (a chef's first full year, $67,500; the hospitality thread from e02 and e05), so the slices are met before the table. No people.
- **Worked examples: the site's numbers, recalculated for 2026-27 (ruling 85).** Zara $67,500: 4,020 + 0.30 × 22,500 = $10,770 (slices 0 + 4,020 + 6,750). The teacher (e07's `we-1` result) $88,990: 4,020 + 0.30 × 43,990 = $17,217. The bottom rows: $15,000 → $0; $30,000 → 0.15 × 11,800 = $1,770. Ella's boundary (`we-4`): $45,000 → $4,020, the next row's base. The pay-rise myth with original numbers ($44,000 → $46,000: after tax $40,130 → $41,680, +$1,550), keeping the pack's $44,800 → $45,600 (+$590) for attempt 2.
- **"Tax from the table" (pack decision).** Offsets (such as the low income tax offset) are not in the point and change often; results are labelled "tax from the table" and the author note records that real tax on low incomes can be lower. Learner copy says only "use the table you're given".
- **Notation.** Words first: "base amount + rate × (taxable income − the row's lower limit)"; the site's "Income tax = Base amount + Marginal rate × (Taxable income − Threshold)" appears only as the key-notes line in words.
- **Join.** Scene 1 opens on e07's final frame exactly; the table fills in scene 3.
- **Simulations (standard item 3).**
  1. **Sliced income bar** (scene 2; `SlicedBar` from e03): $67,500 cut at $18,200 and $45,000; slices grey (nil), light amber (15c), mid amber (30c); each slice's tax drops beneath it and adds.
  2. **Row reader** (scenes 3, 4; new `TaxTableReader`): the taxable-income card slides down the table until it sits in its row; the row lights; the base amount and the "over" figure lift out into a working line.
  3. **Base amount = the slices below** (scenes 3, 5): the lit row's "$4,020" flies back to the 15c slice of the bar and lands on it exactly; at $45,000 the 15c row's tax and the next row's base meet.
  4. **Pay-rise bars** (scene 6): $44,000 and $46,000 side by side; only the new $1,000 above $45,000 turns the 30c colour; the after-tax readouts rise $40,130 → $41,680.
- **Colour roles (fixed for e07 to e12).** Taxable income **blue**; tax **amber** (shades by rate: nil grey, 15c light, 30c mid, 37c and 45c deep); base amount amber outlined; after-tax income **teal**; answer **green**; mistake **red**, crossed slips only; Medicare levy **olive** (named once here).
- **Large type, handwritten voice.** Table cells 36 to 40 px (the lit row 44 px); current working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "tax-free threshold", "15c in the dollar = 15%", "each rate, its own slice", "find the row", "base = the slices below", "only the dollars over", "under $18 200: nil", "where base amounts come from", "only the new $1000 pays 30c", "never worse off". At most two live at once.
- **Stage changes (standard item 2).** The card and blank table (1); the sliced bar (2); the table filling and the row reader (3); g01 board, the teacher (4); the bottom rows and the boundary (5); the pay-rise bars (6); framed card (7); question cards (8 to 11); the weekly pay slip for e09 (12); key notes (13).
- **Worked examples (g01 layout).** 4: task strip "A teacher's taxable income for 2026-27 is $88 990. Use the tax table to find the tax payable."; formula strip "tax = base amount + rate × (income − row's lower limit)"; givens card "taxable income = $88 990" (blue), the lit row "$45 001 to $135 000: $4020 + 30c for each $1 over $45 000" (amber); rows; framed answer "$17 217"; crossed slip "0.30 × 88 990 = $26 697" (caption "30c only on the dollars over $45 000").
- **Memory aid.** Framed card: "Find the row; only the dollars over pay its rate." Key line: "Tax = base amount + rate × (income − row's lower limit). The base amount is the tax on all the slices below."
- **Visual surprise.** The base amount "$4,020" lifted from the table lands exactly on the 15c slice of the bar (scene 3), and at $45,000 both rows give the same tax (scene 5).
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` section 11).** MS-73: the site's table is 2024-25 (16%, $4,288, $31,288, $51,638); the video uses 2026-27 and never shows the site's figures. MS-74 (the effective-rate check) is not used.
- **Plain meanings at first use.** Tax payable ("the income tax on your taxable income for the year"); tax-free threshold ("the first $18,200 of income, which is taxed at nothing"); cents in the dollar ("15c for each $1 is 15%"); base amount ("the tax on all the slices below this row"); progressive ("a bigger share of each extra dollar as income rises").
- **Attempts.** A1 (pack question 1): Mai $52,380 → $6,234; crossed "0.30 × 52 380 = $15 714" (caption "30c only on the dollars over $45 000"). A2 (pack question 2 (b); part (a) dropped to keep feedback brief): Kai $44,800 → $45,600, after-tax $40,810 → $41,400, +$590, so Kai is wrong; crossed "30% on all $45 600" (caption "only the $600 over $45 000 pays 30c"). Both cards show the 2026-27 table.
- **Mistake scene:** scene 6 is the misconception scene (a pay rise into a higher row lowers take-home pay), the most useful idea in the lesson for a student starting work (pack). Others: the top rate on the whole income (4, crossed; A1 crossed); the wrong lower limit or a missing base amount (3, said by the four steps); a remembered table (3, the "rates change" line).
- **Cause chain taught, in order:** (1) tax is progressive: income is cut into slices and each slice is taxed at its own rate (2); (2) the table pre-adds the lower slices as the base amount, so only the dollars over the row's start need working (3); (3) so tax = base + rate × the dollars over (3, 4); (4) the base amount of each row is the full tax of the row below at its top (5); (5) a rise only adds dollars to the top slice, so after-tax income always rises (6).
- **Entry knowledge (route):** Stage 5 (15c in the dollar = 15%); math-s11-e03 (sliding scale), e07 (taxable income). Recalled in a grey chip each.
- **Money sources (rulings 5, 32 and 85).** Resident tax rates for 2026-27: nil to $18,200; 15% from $18,201 to $45,000 (cut from 16% on 1 July 2026); 30% to $135,000; 37% to $190,000; 45% above (read 19 Nov 2026 by the pack from secondary sources citing the ATO, for example SuperGuide and austax.tools; Codex confirms on the ATO page, https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents, before narration). The base amounts ($4,020, $31,020, $51,370) are derived and checked. Said once (scene 3): "Tax rates change, and on the first of July twenty twenty-six the fifteen per cent rate dropped from sixteen, so always use the table you're given."
- **Handoff (to math-s11-e09, "How does PAYG take tax out of each weekly, fortnightly or monthly pay?").** Scene 12, specified in `../checks/root-decisions-maths-s11-e01-e12.md`: a coded, unbranded weekly `PaySlipCard` (760 × 560 px) "Weekly pay slip: retail, Level 1" with "Ordinary 38 h × $27.81 = $1056.78" and "Gross pay $1056.78" filled, and a blank brown line "Tax withheld: ?"; the e08 table small at the right (300 px wide); chips "taken out every week?", "Next: PAYG withholding" and "?". No withholding amount shown. This is e09's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Base amounts: 0.15 × 26 800 = 4020; 4020 + 0.30 × 90 000 = 31 020; 31 020 + 0.37 × 55 000 = 51 370.
  (b) Zara: slices 0, 4020, 0.30 × 22 500 = 6750; total 10 770.
  (c) Teacher: 88 990 − 45 000 = 43 990; 0.30 × 43 990 = 13 197; + 4020 = 17 217; slip 0.30 × 88 990 = 26 697.
  (d) Bottom rows: 15 000 → 0; 30 000 − 18 200 = 11 800; × 0.15 = 1770; Ella 45 000 → 0.15 × 26 800 = 4020.
  (e) Myth: 44 000 → 0.15 × 25 800 = 3870, after tax 40 130; 46 000 → 4020 + 300 = 4320, after tax 41 680; gain 1550; the extra $1 above $45 000 costs 30c.
  (f) A1: 52 380 − 45 000 = 7380; × 0.30 = 2214; + 4020 = 6234; slip 15 714. A2: 44 800 → 3990, 40 810; 45 600 → 4200, 41 400; gain 590.
  (g) Offsets: the low income tax offset (not in the point) would reduce real tax at $30,000 and below; the video labels results "tax from the table".
  (h) Pronunciations: "twenty twenty-six twenty-seven"; "fifteen cents in the dollar"; "seventeen thousand two hundred and seventeen dollars".

Main question: *The teacher's taxable income is $88,990. How does a tax table give the tax payable on a year of income?*
Entry knowledge (Stage 5; math-s11-e03, e07): cents in the dollar; slices; taxable income.
Stops after: tax from the 2026-27 table, base amounts, the pay-rise myth. No levy, no PAYG.
Handoff: math-s11-e09: "taken out every week?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): taxable income blue; tax amber by rate; after-tax income teal; answer green; mistake red. Header strip "MATHEMATICS STANDARD · EARNING MONEY". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame. The table on screen is exactly:

| Taxable income | Tax on this income |
| --- | --- |
| 0 to $18 200 | Nil |
| $18 201 to $45 000 | 15c for each $1 over $18 200 |
| $45 001 to $135 000 | $4020 plus 30c for each $1 over $45 000 |
| $135 001 to $190 000 | $31 020 plus 37c for each $1 over $135 000 |
| $190 001 and over | $51 370 plus 45c for each $1 over $190 000 |

with the heading "Resident tax rates 2026-27" and a source line "ATO" (Codex confirms every figure).

### 1. hook: which row?
> Last time ended with the teacher's taxable income, eighty-eight thousand nine hundred and ninety dollars, beside an empty tax table. Tax payable is the income tax on that taxable income. Australia's tax table takes a bigger share of each extra dollar as income gets higher. But which part of the income gets which rate? So how does a tax table give the tax payable on a year of **income**?

Visual: opens on e07's final frame exactly (the card "$88 990", the blank table, chips). On the first sentence the "Next" chip fades. On "Tax payable" a chip "tax payable: the income tax on your taxable income". On "bigger share of each extra dollar" the table's empty rows tint from grey to deep amber, top to bottom. On "which part of the income" the card "$88 990" hovers over the table with "?". On "income" (bold) heading "Tax tables" writes on; the question chip "Which row, and how much?" moves to the top right.

### 2. tax in slices
> Here's the idea first, with a chef's taxable income of sixty-seven thousand five hundred dollars. Cut the income into slices, just like the sliding scale for commission. The first eighteen thousand two hundred dollars is taxed at nothing. That's called the tax-free **threshold**. The next slice, up to forty-five thousand, is twenty-six thousand eight hundred dollars, at fifteen cents in the dollar, four thousand and twenty **dollars**. The slice above forty-five thousand is twenty-two thousand five hundred, at thirty cents in the dollar, six thousand seven hundred and **fifty**. Add the slices, ten thousand seven hundred and seventy dollars of **tax**. Each rate only applies to its own slice.

Visual: stage change (simulation 1): a blue `SlicedBar` (1,500 × 110 px) "taxable income: $67 500", grey chip "e03: a sliding scale, slice by slice". On "slices" the bar cuts at $18,200 and $45,000. On "threshold" slice 1 turns grey, labelled "$18 200 at 0c", hand tag "tax-free threshold". On "fifteen cents in the dollar" slice 2 turns light amber, its size "45 000 − 18 200 = $26 800", hand tag "15c in the dollar = 15%"; on "dollars" its tax drops beneath it: "0.15 × 26 800 = $4020". On "fifty" slice 3, mid amber, "67 500 − 45 000 = $22 500", tax "0.30 × 22 500 = $6750". On "tax" the three taxes slide together: "0 + 4020 + 6750 = $10 770" (framed green). On "its own slice" hand tag "each rate, its own slice".

### 3. reading the table
> The tax table does the lower slices for you. Here's the resident table for twenty twenty-six twenty-seven. First, find the row your income is in. Sixty-seven thousand five hundred is in the row from forty-five thousand and one, to a hundred and thirty-five **thousand**. That row says four thousand and twenty dollars, plus thirty cents for each dollar over forty-five thousand. The four thousand and twenty is the base amount, the tax on all the slices below. It's exactly the fifteen-cent slice we just **found**. So the tax is four thousand and twenty, plus zero point three times twenty-two thousand five hundred, ten thousand seven hundred and seventy dollars, the same **answer**. Tax payable here means the tax from this table. Tax rates change, and on the first of July twenty twenty-six the fifteen per cent rate dropped from sixteen, so always use the table you're given.

Visual: stage change: the table (1,300 × 560 px) fills row by row (as shown above), with the source line "ATO, resident tax rates 2026-27". Simulation 2: on "find the row" a blue card "$67 500" slides down the left edge, hand tag "find the row"; on "thousand" it stops at row 3, which lights. On "four thousand and twenty dollars, plus thirty cents" the row's two parts ring: "$4020" (amber outline) and "30c for each $1 over $45 000". On "the tax on all the slices below" (simulation 3) the "$4020" lifts and flies to a small copy of scene 2's bar at the bottom, landing exactly on the 15c slice; on "found" hand tag "base = the slices below". On "plus zero point three" the working line, 52 px: "4020 + 0.30 × (67 500 − 45 000) = 4020 + 6750"; on "answer" "= $10 770" (framed green), hand tag "same answer". On "Tax payable here" a grey chip "tax from the table (the Medicare levy comes later)". On "Tax rates change" a grey chip "1 July 2026: 16% → 15% (ATO)", hand tag "use the table you're given".

### 4. worked example: the teacher's tax
> Now the teacher. Taxable income, eighty-eight thousand nine hundred and ninety dollars. Find the tax payable. It's in the same row, forty-five thousand and one to a hundred and thirty-five thousand. The base amount is four thousand and twenty. The amount over forty-five thousand is forty-three thousand nine hundred and **ninety**. Thirty cents of each of those dollars is zero point three times forty-three thousand nine hundred and ninety, thirteen thousand one hundred and ninety-seven **dollars**. Add the base amount. The tax payable is seventeen thousand two hundred and seventeen **dollars**. Thirty per cent of the whole eighty-eight thousand nine hundred and ninety is the slip. Only the dollars over forty-five thousand pay thirty **cents**.

Visual: clear change to the g01 board, the book stack `ma11-book-stack-v1.png` (280 px) at the top right with a coded tag "teacher". Task strip, 44 px: "A teacher's taxable income for 2026-27 is $88 990. Use the tax table to find the tax payable." Formula strip, 52 px: "tax = base amount + rate × (income − row's lower limit)". Givens card: "taxable income = $88 990" (blue) and the lit row copied in, "$45 001 to $135 000: $4020 + 30c for each $1 over $45 000" (amber). On "ninety" row "88 990 − 45 000 = 43 990", hand tag "only the dollars over". On "dollars" (first) row "0.30 × 43 990 = $13 197" (mid amber). On "dollars" (second) row "4020 + 13 197 = $17 217", framed answer (green) "tax payable $17 217". On "cents" a red slip "0.30 × 88 990 = $26 697" writes and is crossed (caption "30c only on the dollars over $45 000").

### 5. the bottom rows and a boundary
> The bottom rows work the same way. A student earning fifteen thousand dollars in a part-time job pays no tax from the table, because it's under the **threshold**. Thirty thousand dollars is in the fifteen-cent row. It's eleven thousand eight hundred over eighteen thousand two hundred, so the tax is one thousand seven hundred and seventy **dollars**. And at exactly forty-five thousand, the fifteen-cent row gives four thousand and twenty, which is the next row's base **amount**. That's where base amounts come **from**.

Visual: stage change: the table at the left (900 px wide), three small blue cards at the right. On "fifteen thousand dollars" a card "$15 000" slides to row 1, which lights grey; on "threshold" "Nil" rings, hand tag "under $18 200: nil". On "Thirty thousand dollars" a card "$30 000" to row 2; on "dollars" row "0.15 × (30 000 − 18 200) = 0.15 × 11 800 = $1770" (framed green). On "exactly forty-five thousand" a card "$45 000" sits on the line between rows 2 and 3 (simulation 3); row "0.15 × (45 000 − 18 200) = $4020"; on "amount" the row 3 base "$4020" rings and an arrow joins the two equal values. On "from" hand tag "where base amounts come from".

### 6. the pay-rise myth
> Here's a myth worth busting. Some people think a pay rise into the next row can leave you worse off, because the rate jumps to thirty per cent. Try it. On forty-four thousand dollars, the tax is three thousand eight hundred and seventy, leaving forty thousand one hundred and thirty after **tax**. A rise to forty-six thousand moves into the thirty-cent row. The tax is four thousand three hundred and twenty, leaving forty-one thousand six hundred and **eighty**. That's one thousand five hundred and fifty dollars better off. Only the one thousand dollars above forty-five thousand pays thirty cents. A pay rise never leaves you with less after **tax**.

Visual: stage change (simulation 4): two sliced bars side by side (each 700 × 100 px), "$44 000" and "$46 000", cut at $18,200 and $45,000. On "the rate jumps" a grey crossed chip "30% on everything?". On "tax" (first) the left bar's tax "0.15 × 25 800 = $3870" and its teal readout "after tax: $40 130". On "forty-six thousand" the right bar: only its top $1,000 turns mid amber, hand tag "only the new $1000 pays 30c"; tax "4020 + 0.30 × 1000 = $4320". On "eighty" its teal readout "after tax: $41 680". On "better off" the readouts are joined by "+$1550" (framed green). On "tax" (second) hand tag "never worse off".

### 7. memory aid
> Here's the summary. Find the row, and write its base amount. Then only the dollars over the row's start pay that row's rate. The base amount is the tax on all the slices **below**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the sliced bar with the "$4020" base sitting on the 15c slice and the 30c slice on top. Main line, hand font 56 px: "Find the row; only the dollars over pay its rate." On "below" the key line, 40 px: "Tax = base amount + rate × (income − row's lower limit). The base amount is the tax on all the slices below." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. In twenty twenty-six twenty-seven, Mai's taxable income is fifty-two thousand three hundred and eighty dollars. Use the tax table to calculate her tax payable. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "In 2026-27 Mai's taxable income is $52 380. Use the tax table to calculate her tax payable (ignore the Medicare levy)." The 2026-27 table beside it at 34 px (all five rows). The full question and the table stay on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Fifty-two thousand three hundred and eighty is in the thirty-cent row. The amount over forty-five thousand is seven thousand three hundred and **eighty**. Thirty cents of each is two thousand two hundred and fourteen. Add the base amount, four thousand and twenty, for six thousand two hundred and thirty-four **dollars**. Thirty per cent of the whole income is the **slip**.

Visual: the card shrinks to the top (30 px); row 3 of the table lights. Rows, 44 px: on "eighty" "52 380 − 45 000 = 7380"; on "two thousand two hundred and fourteen" "0.30 × 7380 = 2214"; on "dollars" "4020 + 2214 = $6234" (framed green). On "slip" a red slip "0.30 × 52 380 = $15 714" writes and is crossed (caption "30c only on the dollars over $45 000"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Kai earns forty-four thousand eight hundred dollars, and is offered a pay rise to forty-five thousand six hundred. Kai says, the rise puts me in the thirty per cent bracket, so I'll be worse off. Use the tax table to show whether Kai is right. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Kai's taxable income is $44 800 and Kai is offered a pay rise to $45 600. Kai says, "The rise puts me in the 30% bracket, so I will be worse off." Use the 2026-27 tax table to show whether Kai is right." The table beside it at 34 px. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> On forty-four thousand eight hundred, the tax is three thousand nine hundred and ninety, leaving forty thousand eight hundred and **ten**. On forty-five thousand six hundred, the tax is four thousand two hundred, leaving forty-one thousand four **hundred**. Kai is five hundred and ninety dollars better off, so Kai is **wrong**. Thinking thirty per cent applies to all the income is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "ten" "0.15 × (44 800 − 18 200) = $3990; 44 800 − 3990 = $40 810"; on "hundred" "4020 + 0.30 × 600 = $4200; 45 600 − 4200 = $41 400"; on "wrong" framed answer (green) "+$590 after tax: Kai is better off". On "slip" a red slip "30% on all $45 600" writes and is crossed (caption "only the $600 over $45 000 pays 30c"). Hold about 1 s.

### 12. handoff
> That's the tax for a whole year. But most workers don't pay it in one go at the end. Look at this weekly pay slip. The gross pay is filled in, and there's a line for tax that's still blank. Is some tax taken out every **week**? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s11-e01-e12.md`): on "weekly pay slip" the `PaySlipCard` "Weekly pay slip: retail, Level 1" with "Ordinary 38 h × $27.81 = $1056.78" and "Gross pay $1056.78"; on "still blank" the brown line "Tax withheld: ?" rings; the table small at the right. On "week" chip "taken out every week?". On "next" chips "Next: PAYG withholding" and "?". Hold about 2 s. No withholding amount. This is e09's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Tax is in slices: each rate only on its own slice.
- 1. Find the row. 2. Write the base amount.
- 3. Dollars over = income − row's lower limit. 4. Add rate × dollars over.
- Base amount = the tax on all the slices below.
- A pay rise never leaves you worse off after tax.

Memory aid (framed card, right side, as in scene 7): *Find the row; only the dollars over pay its rate.* Key: *Tax = base amount + rate × (income − row's lower limit). The base amount is the tax on all the slices below.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and e09's opening frame.

## Teaching checks

- **Does it explain causes?** Why slices: each rate applies to its own band (2). Why the table has base amounts: they pre-add the lower slices (3). Why subtract the row's lower limit: only those dollars pay the row's rate (3, 4). Why the boundary matches: the base is the full tax of the row below at its top (5). Why a rise never lowers after-tax income: only the new dollars pay the higher rate, and less than a dollar of each (6).
- **Misconceptions addressed:** the top rate on all income (4, crossed; A1 crossed); the pay-rise myth (6; A2 crossed); the wrong lower limit or a missing base (3, the steps); a remembered table (3); gross for taxable (recalled from e07 in the chip).
- **Visual standard, item by item:** 1 the teacher's card meeting the table from the first frame; 2 a new stage every 40 to 60 s; 3 the sliced bar with dropping taxes, the card sliding to its row, the base amount landing on its slice, the pay-rise bars with readouts; 4 fixed roles (income blue, tax amber by rate, after-tax teal); 5 large type; 6 hand tags; 7 g01 board in 4 with a framed answer and a crossed slip; 8 framed card and five bullets; 9 the base amount landing exactly on the 15c slice.
- **One idea at a time:** slices (2), the table (3), the teacher (4), the bottom rows and boundary (5), the myth (6).
- **Response opportunity:** two unseen tasks with the full table on each card; 10 s each; feedback about 23 s and 25 s.
- **Avoided double teaching:** e03's slicing and e07's taxable income recalled; the levy left to e10.
- **Syllabus coverage:** `cifaf82aa0` (2 to 6, A1, A2; key notes 1 to 5).
- **Out of scope by design:** the Medicare levy (e10); PAYG (e09); offsets; non-resident and working-holiday tables.

## Practice questions and model answers

Both cards show the 2026-27 resident table exactly as above.

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** "In 2026-27 Mai's taxable income is $52 380. Use the tax table to calculate her tax payable (ignore the Medicare levy)."
Model answer: row $45 001 to $135 000: 4020 + 0.30 × (52 380 − 45 000) = 4020 + 0.30 × 7380 = 4020 + 2214 = $6234. Classic mistake (crossed): "0.30 × 52 380 = $15 714".

**Attempt 2 (scene 10; pack question 2 (b), 3 marks suggested).** "Kai's taxable income is $44 800 and Kai is offered a pay rise to $45 600. Kai says, "The rise puts me in the 30% bracket, so I will be worse off." Use the 2026-27 tax table to show whether Kai is right."
Model answer: tax on $44 800 = 0.15 × 26 600 = $3990, leaving $40 810; tax on $45 600 = 4020 + 0.30 × 600 = $4200, leaving $41 400. Kai is $590 better off: only the $600 above $45 000 is taxed at 30c. Classic mistake (crossed): "30% on all $45 600".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Table | nil; 15c over 18 200; 4020 + 30c over 45 000; 31 020 + 37c over 135 000; 51 370 + 45c over 190 000 | 3 to 11 |
| Zara | slices 18 200 (0), 26 800 (4020), 22 500 (6750); total 10 770 | 2, 3 |
| Teacher | 43 990; 13 197; 17 217; slip 26 697 | 1, 4 |
| Bottom rows | 15 000 → 0; 30 000: 11 800 × 0.15 = 1770; 45 000 → 4020 | 5 |
| Myth | 44 000: 3870, 40 130; 46 000: 4320, 41 680; +1550 | 6 |
| A1 | 7380; 2214; 6234; slip 15 714 | 8, 9 |
| A2 | 3990, 40 810; 4200, 41 400; +590 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact decimal arithmetic (19 Nov 2026, scratchpad `s11e/verify2.py`, `python -I`; 0 failures); Codex to re-check, and to confirm the 2026-27 table on the ATO page.

- 0.15 × 26 800 = 4020; 4020 + 0.30 × 90 000 = 31 020; 31 020 + 0.37 × 55 000 = 51 370.
- 67 500: 0.30 × 22 500 = 6750; 4020 + 6750 = 10 770.
- 88 990: 88 990 − 45 000 = 43 990; 0.30 × 43 990 = 13 197; 4020 + 13 197 = 17 217; 0.30 × 88 990 = 26 697.
- 15 000 → 0; 0.15 × (30 000 − 18 200) = 1770; 0.15 × (45 000 − 18 200) = 4020; tax(45 001) − tax(45 000) = 0.30.
- 44 000: 0.15 × 25 800 = 3870; 44 000 − 3870 = 40 130; 46 000: 4020 + 0.30 × 1000 = 4320; 46 000 − 4320 = 41 680; 41 680 − 40 130 = 1550.
- 52 380: 7380 × 0.30 = 2214; 4020 + 2214 = 6234; 0.30 × 52 380 = 15 714.
- 44 800: 0.15 × 26 600 = 3990; 40 810; 45 600: 4020 + 180 = 4200; 41 400; 590.

## Memory aid check

- **"Find the row; only the dollars over pay its rate."** with key line **"Tax = base amount + rate × (income − row's lower limit). The base amount is the tax on all the slices below."** Original (the site's card 02 has "Income tax = Base amount + Marginal rate × (Taxable income − Threshold)"; "lower limit" is used instead of "threshold" so it is not confused with the tax-free threshold). Meaning, as said in scene 7: the table has already added the lower slices, so only the top slice needs working. Assumptions checked: the table is the year's resident table (3); "over $45,000" means the 30c rate starts at $45,001, and at exactly $45,000 both rows agree (5); the income is taxable income (e07); the result is tax from the table, before the levy (3). It helps a new case: $140,000 is in the 37c row: 31,020 + 0.37 × 5,000 = $32,870. Introduced after scenes 2 to 6.
- **Considered, not used:** "base plus over" alone (too terse for a first meeting).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11e/count.py`, which reproduces e08's 5,632).

**5,522 characters**, 13 scene headings. Characters per scene (1 to 13): 385, 685, 869, 736, 506, 643, 176, 192, 363, 275, 381, 236, 75.

At 13.3 characters per second the speech is about 415 s. Total with the holds and settling below **about 504 s**, 66 s under the 570 s cap; speech and holds before the notes about 459 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the sliced bar (2), the table and row reader (3), the bottom-row cards (5) and the pay-rise bars (6), about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 3's "Tax payable here means the tax from this table." (the chip carries it); scene 6's "Only the one thousand dollars above forty-five thousand pays thirty cents." (the tag carries it).

## Scene list and build ids

Lesson key `m-s11e08` (route math-s11-e08). Explainer folder `src/explainer/lessons/math-s11-e08`; build inputs in `docs/production/claude-pm/lessons/math-s11-e08/` (at voicing).

In order (13 scene headings): hook-which-row, tax-in-slices, reading-the-table, worked-teacher-tax, bottom-rows-boundary, pay-rise-myth, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | e07's frame: the card and blank table |
| 30 to 85 s | 2 | The sliced bar |
| 85 to 160 s | 3 | The table and the row reader |
| 160 to 215 s | 4 | g01 board: the teacher |
| 215 to 255 s | 5 | Bottom rows and the boundary |
| 255 to 305 s | 6 | The pay-rise bars |
| 305 to 320 s | 7 | Framed memory card |
| 320 to 420 s | 8 to 11 | Question cards with the table, then feedback |
| 420 to 440 s | 12 | The weekly pay slip, for e09 |
| 440 to 485 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e07's last frame continues into 1; 1 to 2 stage change; 2 to 3 stage change (the table fills); 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-e08-learning-review.md`, `science_check` = `checks/m-s11-e08-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, opened and viewed): `ma11-book-stack-v1.png` (as e04a; reused as the teacher's tag in 4). No other plate is needed: the table, bars and pay slip are documents and diagrams.

Need: none new. Reused: `ma11-book-stack-v1.png`.

Coded: the tax table (unbranded, ATO named, year in the heading), the sliced bars, the income cards, the after-tax readouts, the pay slip, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `SlicedBar` (e03), `PaySlipCard` (e02), `StudioCandidateTable`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row e08):
1. **TaxTableReader** (new, shared with e09, e11, e12): a coded resident tax table (ranges, "tax on this income") from data props with the year in its heading; a taxable-income card slides down to its row; the row lights; the base amount and the "over" figure lift into a working line. Check: $67,500 lights row 3 and gives 4,020 + 0.30 × 22,500 = 10,770.
2. **Base-amount flight** (small): the lit row's base amount flies to a `SlicedBar` and lands on the matching slices. Check: $4,020 covers exactly the 15c slice of $26,800.

## Codex asset brief

No new plate. The book stack exists and was viewed. The table, bars and slip are coded.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with exact arithmetic, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the 2026-27 resident tax rates and thresholds on the ATO page (and the 16% to 15% change from 1 July 2026), and that the "rates change" sentence is said once.
4. Confirm no 2024-25 figure ($4288, $31 288, $51 638, 16c) appears on screen (MS-73).
5. Confirm both attempt cards show the full 2026-27 table, carry every demand and show no answer.
6. Confirm scene 1 opens on e07's final frame and scene 12 matches the decisions file's e08 to e09 join (no withholding amount).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Tax Tables and Tax Payable | Year 11 Maths Standard

(Title length: 51 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/earning-money/lesson08.sa.html

A teacher's taxable income is $88,990. How much income tax is that? See why Australian income tax works in slices, with each rate applying only to its own slice of income, then read the 2026-27 resident tax table in four steps: find the row, write the base amount, work out the dollars over the row's start, and add the rate times those dollars. Find out where base amounts come from, and why a pay rise into a higher bracket never leaves you worse off. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Tax rates change every year; this video uses the 2026-27 resident rates.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Earning money. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Determine tax payable by interpreting and applying information in tax tables"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/faacdf9b3d

Builds on: Taxable Income and Allowable Deductions. Next: PAYG Withholding.

#Year11Maths #MathsStandard #IncomeTax #HSCScience

## Open decisions

- **1. "Lower limit" against "threshold".** The site's formula says "Threshold"; the video says "the row's lower limit" so it is not confused with the tax-free threshold. Confirm.
- **2. A2 drops the pack's part (a)** ($31,640 → $2,016) to keep the feedback brief; scene 5's $30,000 covers the 15c row. Confirm.
- **3. The pay-rise numbers.** Scene 6 uses $44,000 → $46,000 (original) so A2's $44,800 → $45,600 stays unseen; e12 uses $44,000 and $46,000 again as spreadsheet rows (a deliberate callback).

## Review notes

- Revision 1. Next: student learning review (trace from e07; check that the slices make sense before the table, that the base amount landing on the 15c slice explains where it comes from, that the four steps are clear for the teacher, that the pay-rise bars bust the myth, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `TaxTableReader` before this video.
