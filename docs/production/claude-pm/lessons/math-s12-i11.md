# Maths S12 I11: Which depreciation method loses value faster, and how does a spreadsheet compare them? One van under both methods, the table's change of order, the yearly losses that cause it, a line chart and its crossing, and a given graph (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; ruling 31 fixes this video's final frame for i12). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,566 characters by script (see "Narration length estimate"), 13 scene headings, about 507 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: twelfth video of the Year 12 Investment and loans strand, outline playlist order 24. Shared by Standard 1 and Standard 2 (root ruling 30: on both paths). Standard 2 compares "numerically and graphically, with and without using digital tools"; Standard 1 compares "either numerically or from a given graph". Both build the spreadsheet. Pre-design pack: `../pre-design/maths-standard/math-s12-i11.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson03.sa.html` (SHA256 `ec39ed540dbf06830d2fc9f00f56459edd17426cb88ac8acb5f849bb23ca9131`; the spreadsheet card "Modelling both methods in a spreadsheet" with its $40,000 asset, $6,000 a year against 20%, its A2, B2 and C2 formulas and its sentence "Declining balance is below the straight line for the first three years and above it from year 4 on"; `we-3` and drill 5 for "the comparison depends on the rates chosen"). Route entry: `math-s12-i11` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; one reused painted plate as the anchor (a delivery van), one new plate for the final frame (an e-bike, i12's anchor); the spreadsheet, chart and boards coded.

Owner rules applied: 2024 syllabus; plates for real objects and code for diagrams; no people, hands or faces; one main question; one reasoning stage at a time; every step said in words before its symbols; a short "why this matters"; the spreadsheet as a coded, unbranded grid with a formula bar; two attempts with "Pause here to answer." and 10 s countdowns with the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a small business's van, a café's espresso machine, a minibus); money spoken naturally and to the cent where it matters; Australian spelling; no em dashes; conversational narration.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form):

Standard 2 (Investment and loans; group Depreciation and loans):
- `ci776a0f04`: "Compare straight-line depreciation and declining balance depreciation both numerically and graphically, with and without using digital tools"
- `ci4311f343`: "Use a spreadsheet to numerically and graphically model depreciation using the straight-line and declining balance methods"

Standard 1 (Depreciation and loans):
- `ci7395c156`: "Compare straight-line depreciation and declining balance depreciation either numerically or from a given graph"
- `ci4d802367`: "Use a spreadsheet to model depreciation using the straight-line and declining balance methods"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

**Boundary:** starts from i10's final frame exactly (the delivery van `ma12-delivery-van-v1.png` with the coded tag "$40,000"; two chips under it, "straight-line: $6,000 a year" (blue) and "declining balance: 20% a year" (olive); the grey chip "which loses value faster?"; chips "Next: comparing the two methods" and "?"). Recalls i09 (S = V₀ − Dn, a straight line, stops at $0), i10 (S = V₀(1 − r)ⁿ, the part kept, a curve that never reaches zero), i05 (a spreadsheet with two model columns, the year-0 check and a chart from columns) and a04b (cells, "=", "*", fill down) in a phrase or grey chip each. Teaches: one asset modelled both ways in a spreadsheet (the site's card exactly); reading the table row by row (declining balance lower in years 1 to 3, higher from year 4); the cause, from the yearly losses (the same $6,000 against 20% of a shrinking value); the line chart and its crossing (where both methods give the same value, not the same loss); straight-line stopping at zero; the comparison depending on the chosen D and r (one number changed in the formula moves the crossing); reading a given graph (attempt 2). Stops at comparing the two methods. Not taught: tax rules beyond one sentence; finding r (i10 left it out); loans (math-s12-i12, another author).

## Decisions

- **Anchor: a small business's delivery van (reused painted plate, live).** $40,000 with straight-line at $6,000 a year against declining balance at 20% a year (the site's spreadsheet card numbers, set on a van; the site says only "an asset"). Values at years 0 to 5: straight-line 40,000, 34,000, 28,000, 22,000, 16,000, 10,000; declining balance 40,000, 32,000, 25,600, 20,480, 16,384, 13,107.20. A van is the most common thing a small business depreciates, and the pack names it. Plate reused (root ruling 7): `ma12-delivery-van-v1.png` (viewed 18 Nov 2026: a white box truck in side view with a roller door and a blank side panel, true alpha); the price tag is coded. No people.
- **Join.** Scene 1 opens on i10's final frame exactly; on the first sentence the "Next" chip fades and the van grows to 1,000 px wide.
- **Spreadsheet (owner rule; root ruling 32's "one visual system").** The same coded, unbranded `SpreadsheetGrid` as a04b and i05 (column letters, row numbers, a formula bar for the active cell, fill handle). Formulas exactly as the site's card: A2 "0", A3 "=A2+1"; B2 "=40000-6000*A2"; C2 "=40000*0.8^A2". The "^" is named once ("the little hat means to the power of"), as in i05.
- **Simulations (standard item 3).**
  1. **Build and fill** (scene 2; `SpreadsheetGrid`): headers type, formulas type in the formula bar as spoken, the fill handle drags B2:C2 down to row 7 and the rows compute one after another.
  2. **Lower cell shading** (scene 3; `SpreadsheetGrid` conditional shading): in each row the lower of B and C shades soft grey ("written off more"); the shading jumps from column C to column B between rows 5 and 6 (years 3 and 4), and that change rings amber.
  3. **Yearly-loss bars** (scene 4; `GrowthBars` downward): two rows of bars under the grid, blue "$6,000" five times, olive 8,000, 6,400, 5,120, 4,096, 3,276.80 shrinking; a dashed amber line at $6,000 across both rows, and the olive bars dipping under it from year 3.
  4. **Chart from columns** (scene 5; `SpreadsheetGrid` chart option into `StudioPlot`): the two columns are selected and a line chart draws in; the crossing between t = 3 and t = 4 ringed amber (`crossingX`); `RegionLabels` brackets before and after; the grid extends to year 7 and the straight line is stopped at $0 at t = 6.67 (hand tag "stops at $0").
  5. **Change one number** (scene 6): "6000" in B2's formula is edited to "4000" and filled down (as a04b's price edit); every B cell recomputes in a ripple, the shading moves, the chart's straight line flattens, and the crossing slides to between t = 8 and t = 9.
- **Colour roles (fixed for i09 to i11).** Starting value V₀ **violet**; straight-line (column B, its line and its $6,000 bars) **blue**; declining balance (column C, its curve and bars) **olive**; the rate and the multiplier 0.8, and the crossing ring, **amber**; answer **green**; mistake **red**, crossed slips only; "written off more" shading soft grey. Year column in ink.
- **Large type, handwritten voice.** Cells 40 px (current row 44 px), column letters and row numbers 32 px, formula bar 44 px; chart labels 32 px; hand tags at least 34 px; nothing below 26 px; all text above y = 950. Hand tags: "year 0: both $40,000", "^ means to the power of", "keep 80%", "lower = written off more", "order changes here", "same $6,000 every year", "20% of a smaller value", "below $6,000 from year 3", "same value here", "not the same loss", "stops at $0", "never reaches $0 (model)", "one change, every row", "check the values". At most two live at once.
- **Stage changes (standard item 2).** i10's frame and the van (1); the grid built and filled (2); the table read row by row with shading (3); the yearly-loss bars (4); the chart and its crossing (5); the edited formula and the moved crossing (6); framed card (7); question cards (8 to 11); the e-bike for i12 (12); key notes (13).
- **Worked example (g01 layout).** The van (scenes 2 to 5) is the worked example: task strip "A $40,000 van: $6,000 a year, or 20% a year? Compare the values for 5 years."; givens card "V₀ = $40,000" (violet), "D = $6,000" (blue), "r = 20%, keep 80%" (amber); framed answer "Declining balance is lower in years 1 to 3, higher from year 4"; crossed slip (5) "they lose the same amount at the crossing" (caption "same value, not same loss").
- **Memory aid.** Framed card: "Same dollars: a straight line. Same percentage: fast, then slow." Key line: "Before the crossing, declining balance is lower. After it, straight-line is. Check the values, not a rule."
- **Visual surprise.** The shading in the table jumps columns between years 3 and 4, and the yearly-loss bars show why as the olive bars sink under the $6,000 line (scenes 3 and 4); one edited number slides the crossing five years along (scene 6).
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` MS-18).** The site's card numbers and formulas are used exactly; its sentence "Different chosen rates can produce different comparisons" becomes scene 6. MS-18's orphan sentence ("In this example declining balance falls faster initially") belongs on this card, and the video says it here (scene 3), where the example exists. `we-3` and drill 5 are not used as examples (scene 6's edited formula carries their point with the van), so no new numbers enter.
- **Plain meanings at first use.** Crossing point ("where the two graphs meet: both methods give the same value"); "written off" ("taken off the value"); given graph ("a graph printed in the question, to read rather than draw").
- **Attempts.** A1 (pack question 1, original context, a café's espresso machine; the spreadsheet table on the card): the missing value $7,372.80; C2 "=18000*0.8^A2"; year 4; reason from the yearly losses; crossed "=18000*0.2^A2" (caption "keep 80%: 100% − 20%"). A2 (pack question 2 numbers, a minibus; a given graph for Standard 1): the curve is declining balance; $5,000 a year; the crossing means the same value; declining balance higher after 8 years (about $14,400 read from the graph; $14,362.46 by calculation); crossed "they lose the same amount there" (caption "same value, not same loss").
- **Mistake scene:** none separate. "Declining balance always loses faster" (3, said; 6, shown false); the crossing as equal losses (5 crossed, A2 crossed); "=…*0.2^A2" for 20% (A1 crossed); the straight-line column going negative (5, said and tagged).
- **Cause chain taught, in order:** (1) each column applies one method's rule to the same van, so each row compares the two values in the same year (2, 3); (2) straight-line removes the same dollars every year, but declining balance removes a percentage of the current value, so its losses start larger and shrink (4); (3) once declining balance's yearly loss falls below $6,000, straight-line loses more each year, so straight-line's value catches up and then falls below (4); (4) where the two values are equal the graphs cross, so before the crossing declining balance has written off more and after it straight-line has (5); (5) straight-line's value reaches $0 and stops, while 80% of a positive value is never zero (5); (6) the crossing comes from the chosen D and r, so changing either moves it (6).
- **Entry knowledge (route):** i09 (S = V₀ − Dn; stops at $0), i10 (S = V₀(1 − r)ⁿ; 1 − r is the part kept), i05 (two model columns in a spreadsheet, the first-row check, a chart from two columns) and a04b (cells, "=", "*", fill down). Recalled in a phrase or grey chip.
- **Standard 1 path.** Nothing needs algebra. The comparison is numerical (the table) and from a graph (the chart in scene 5 and the given graph in A2); the spreadsheet is built from empty cells, which meets "use a spreadsheet to model". The cause (the yearly losses) is arithmetic on screen. Standard 2's "graphically, with and without using digital tools" is met by the chart (with), and by the hand-read graph in A2 (without).
- **Money and rule sources (root ruling 32).** Prices are examples, not quotes. One sentence (scene 1) says businesses choose between the methods: the ATO lets a business use prime cost (straight-line) or diminishing value for many assets (ATO, "Prime cost (straight line) and diminishing value methods", https://ato.gov.au/Business/Depreciation-and-capital-expenses-and-allowances/General-depreciation-rules---capital-allowances/Prime-cost-(straight-line)-and-diminishing-value-methods, cited in the pack of 18 Nov 2026; Codex to re-verify). The narration says once that "rules and prices change". The 20% and $6,000 are the site's example values, not ATO rates.
- **Handoff (to math-s12-i12, "What do buy now pay later, short-term and long-term loans really cost?"; written by another author; root ruling 31).** Scene 12, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md` (join "i11 to i12"): board clear; the new e-bike plate `ms12-ebike-v1.png` (about 1,100 px wide) at the centre-left; the reused swing tag `ma12-swing-tag-v1.png` (about 300 px tall) hanging by its string from the handlebar, with coded text "$3,000" (48 px, ink) on its first ruled line and "buy now, pay later?" (hand font, 36 px, amber) across the next two lines; top left, a small grey thumbnail (360 px wide) of scene 5's chart with the chip "What things are worth: done" (30 px, grey); right of the bike, chips "Next: the real cost of borrowing" (36 px) and "?" (44 px). No payment options, instalment amounts, rates, fees or loan terms appear. This is i12's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Van: B = 40000 − 6000n: 40000, 34000, 28000, 22000, 16000, 10000, 4000 (n = 0 to 6); n = 7 gives −2000 in a raw spreadsheet, so the chart stops the line at 0 (40000 ÷ 6000 = 6.67 years). C = 40000 × 0.8ⁿ: 40000, 32000, 25600, 20480, 16384, 13107.20, 10485.76, 8388.608.
  (b) Declining-balance yearly losses: 8000, 6400, 5120, 4096, 3276.80. The values change order between n = 3 (22000 > 20480) and n = 4 (16000 < 16384).
  (c) Scene 6, D = 4000: 40000 − 4000n: 36000, 32000, 28000, 24000, 20000, 16000, 12000, 8000, 4000, 0 (n = 1 to 10); C at n = 8: 6710.89; n = 9: 5368.71; the order changes between n = 8 (8000 > 6710.89) and n = 9 (4000 < 5368.71).
  (d) A1: 18000 − 2700n: 15300, 12600, 9900, 7200; 18000 × 0.8ⁿ: 14400, 11520, 9216, 7372.80; losses 3600, 2880, 2304, 1843.20.
  (e) A2: 48000 − 5000n and 48000 × 0.86ⁿ: n = 5: 23000 and 22580.50; n = 6: 18000 and 19419.23; n = 8: 8000 and 14362.46.
  (f) Pronunciations: "equals forty thousand minus six thousand times A two"; "equals forty thousand times zero point eight hat A two" (said as "to the power of A two" in scene 2, "hat" thereafter); "thirteen thousand, one hundred and seven dollars and twenty cents".
  (g) Windows: van chart t 0 to 7 years, value $0 to $40,000 (gridlines every $10,000); scene 6 chart t 0 to 10; A2 graph t 0 to 8, $0 to $50,000.

Main question: *A $40,000 van can lose $6,000 a year or 20% a year. Which method loses value faster, and how does a spreadsheet compare them?*
Entry knowledge (i09, i10, i05, a04b): both depreciation formulas; a two-column spreadsheet with a chart.
Stops after: the table, the cause, the chart and crossing, the stop at zero, one changed number, a given graph. No loans.
Handoff: math-s12-i12: "a $3,000 e-bike: buy now, pay later? What does paying later really cost?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): V₀ violet; straight-line blue; declining balance olive; rate, multiplier and crossing amber; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: one van, two methods
> Here's a delivery van, bought by a small business for forty thousand dollars. Businesses really do choose between two ways to model its value, though the rules and prices change over time. Straight-line takes six thousand dollars off every year. Declining balance takes twenty per cent of whatever it's worth **now**. So which one loses value faster? You might say declining balance, because twenty per cent of forty thousand is eight thousand, more than **six**. But that's only the first year. So which method loses value faster, and how can a spreadsheet show the whole **story**?

Visual: opens on i10's final frame exactly (the van `ma12-delivery-van-v1.png` with "$40,000"; the chips "straight-line: $6,000 a year" (blue) and "declining balance: 20% a year" (olive); the grey chip "which loses value faster?"; chips). On the first sentence the "Next" chip fades and the van grows to 1,000 px wide at the top. On "rules and prices change" a grey chip "rules and prices change". On "Straight-line" the blue chip pulses; on "now" the olive chip pulses with an amber tag "keep 80%". On "six" two small rows under the chips, 44 px: "year 1: −$6,000" (blue) and "year 1: 20% × 40 000 = −$8,000" (olive), hand tag "only year 1". On "story" the heading "Comparing depreciation methods" writes on, and the question chip "Which loses value faster?" moves to the top right.

### 2. build both in a spreadsheet
> Let's build it. Column A is the year. Cell A two is zero, and each cell below adds one. Column B is straight-line. The formula is equals forty thousand minus six thousand times A **two**. Column C is declining balance. Each year keeps eighty per cent, a hundred per cent minus twenty, so the formula is equals forty thousand times zero point eight, to the power of A **two**. That little hat symbol means "to the power of". Now fill both formulas down to year five. And check the first row before you trust the rest. At year zero, both columns must say forty thousand, because nothing has been lost **yet**.

Visual: stage change: the van shrinks to a 300 px badge at the top left with its tag; the grid (`SpreadsheetGrid`, 1,500 × 720 px) fills the frame. Headers type into row 1, 40 px: A1 "year", B1 "straight-line ($)" (blue), C1 "declining balance ($)" (olive). On "Cell A two is zero" A2 shows "0" and A3 "=A2+1" in the formula bar, then A4 to A7 fill 2 to 5. On "two" (first bold) the cursor at B2, the formula bar (44 px) "=40000-6000*A2" typed as spoken (40000 violet, 6000 blue). On "a hundred per cent minus twenty" a grey chip "i10: keep 100% − 20% = 80%". On "two" (second bold) the cursor at C2, the bar "=40000*0.8^A2" (0.8 amber); on "hat" the "^" circles, hand tag "^ means to the power of". On "fill both formulas down" the fill handle drags B2:C2 to row 7 (simulation 1) and the rows compute top to bottom (about 2 s): B 40000, 34000, 28000, 22000, 16000, 10000; C 40000, 32000, 25600, 20480, 16384, 13107.2. On "yet" row 2 rings green, hand tag "year 0: both $40,000".

### 3. read across each row
> Now read across each row. After one year, straight-line says thirty-four thousand, and declining balance says thirty-two **thousand**. Declining balance is lower, so it has written off more, which means it's taken more off the van's value. The same happens at years two and three. But at year four, straight-line says sixteen thousand, and declining balance says sixteen thousand, three hundred and eighty-**four**. Now declining balance is higher. At year five, it's ten thousand against thirteen thousand, one hundred and seven dollars and twenty **cents**. So, which loses value faster? It depends when you look. In this example, declining balance falls faster early, and slower **later**.

Visual: camera continue. Row 3 (year 1) brightens to 44 px; on "thousand" C3 shades soft grey (simulation 2), hand tag "lower = written off more". On "years two and three" C4 and C5 shade in turn. On "four" (bold) row 6 brightens and B6 shades instead of C6; an amber ring joins the C5 and B6 shading, hand tag "order changes here". On "cents" B7 shades; framed answer (green) at the right, 40 px: "Declining balance lower in years 1 to 3; higher from year 4". On "later" a two-word strip under the grid, 40 px: "early: faster (olive) · later: slower (olive)".

### 4. why the order changes
> Here's why it flips. Look at how much each method takes off each year. Straight-line takes six thousand dollars, every single **year**. Declining balance takes twenty per cent of the current value. That's eight thousand in year one, then six thousand four hundred, then five thousand one hundred and twenty, then four thousand and **ninety-six**. Its losses shrink, because each one is twenty per cent of a smaller value. From year three, it loses less than six thousand a **year**. So straight-line is losing more each year, catching up, and from year four its value is the lower **one**.

Visual: stage change: the grid slides to the top 45 per cent (rows 2 to 7, 32 px); below it the yearly-loss bars (simulation 3, `GrowthBars` downward, 1,400 px wide), two rows with year labels 1 to 5. On "year" (first bold) the blue row draws five equal bars labelled "$6,000", hand tag "same $6,000 every year". On "twenty per cent of the current value" the olive row starts: "8,000"; on "six thousand four hundred" "6,400"; "5,120"; on "ninety-six" "4,096", then "3,276.80" draws quietly; each olive bar is labelled "20% × " and the value it came from (40 000, 32 000, 25 600, 20 480, 16 384) in grey, 30 px, hand tag "20% of a smaller value". On "less than six thousand a" (before "year") a dashed amber line at $6,000 runs across both rows; on "year" (second bold) the olive bars from year 3 on ring where they dip under it, hand tag "below $6,000 from year 3". On "one" the shading change in the grid above pulses again.

### 5. the chart and the crossing
> Now select the two columns and insert a line chart. Straight-line draws as a straight line. Declining balance draws as a curve that falls steeply, then **flattens**. They cross between year three and year four. The crossing point is where both methods give the van the same value. It's not where they lose the same **amount**. Before the crossing, declining balance has written off more. After it, straight-line **has**. Keep going, and straight-line reaches zero before year seven. A value can't go below zero, so the line stops there. But eighty per cent of something is never zero, so the curve never reaches **zero**.

Visual: stage change: the grid at the left 40 per cent (rows 1 to 9, years 0 to 7, 32 px); columns B and C select (blue and olive outlines) and the chart (simulation 4, `StudioPlot`, t 0 to 7 years, value $0 to $40,000, gridlines every $10,000) draws in at the right 60 per cent: the blue straight line from (0, 40 000) (ringed violet), the olive curve from the same point. On "flattens" the olive curve's last section traces, hand tag "fast, then slow". On "same value" the crossing between t = 3 and t = 4 rings amber, hand tag "same value here". On "amount" a red slip "they lose the same amount at the crossing" writes and is crossed (caption "same value, not same loss"). On "has" `RegionLabels`: left bracket "declining balance written off more" (olive), right bracket "straight-line written off more" (blue). On "reaches zero" the grid shows B8 "4000" and B9 "−2000" in grey, then B9 changes to "0" with hand tag "stops at $0"; the blue line stops at (6.67, 0). On "zero" (last bold) the olive curve continues flat above the axis, hand tag "never reaches $0 (model)".

### 6. change one number
> The comparison depends on the numbers you choose. Suppose straight-line takes four thousand dollars a year instead of six. Change the six thousand in the formula to four thousand, and fill down again. Every row **recalculates**. Now the two lines don't cross until between year eight and year **nine**. Different amounts and rates move the crossing, sometimes past the years that matter to the business. So don't assume one method is always faster. Check the actual **values**.

Visual: camera continue: the grid extends to year 10 (rows 2 to 12, 30 px; the chart's t-axis to 10). The cursor goes to B2, the bar "=40000-6000*A2"; on "four thousand" (second time) the "6000" is selected and retyped "4000" (simulation 5). On "recalculates" the fill runs and every B cell ripples to 36000, 32000, …, 0; the shading moves; the blue line flattens on the chart, hand tag "one change, every row". On "nine" the new crossing between t = 8 and t = 9 rings amber, and rows 10 and 11 (years 8 and 9: 8000 against 6710.89; 4000 against 5368.71) brighten. On "values" hand tag "check the values".

### 7. memory aid
> Here's the summary. Straight-line takes the same dollars every year, so its graph is a straight line. Declining balance takes the same percentage of a shrinking value, so it falls fast, then slowly. Before the crossing, declining balance is lower. After it, straight-line is, until it stops at **zero**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the blue line and olive curve from one violet start, crossing at an amber ring. Main line, hand font 56 px: "Same dollars: a straight line. Same percentage: fast, then slow." On "zero" the key line, 40 px: "Before the crossing, declining balance is lower. After it, straight-line is. Check the values, not a rule." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A café's spreadsheet compares two ways to depreciate an eighteen-thousand-dollar espresso machine, two thousand seven hundred dollars a year, or twenty per cent a year. Find the missing value. Write the formula for cell C two. Then say in which year declining balance first gives the higher value, and why. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A café buys an espresso machine for $18 000. A spreadsheet compares straight-line depreciation of $2700 per year with declining-balance depreciation at 20% p.a. The year is in column A. (a) Find the missing value. (b) Write the formula for the declining-balance value in cell C2. (c) In which year does the declining-balance value first become higher than the straight-line value? (d) Explain why." Picture slot: a coded spreadsheet (40 px): A "year" 0 to 4; B "straight-line ($)" 18000, 15300, 12600, 9900, 7200; C "declining balance ($)" 18000, 14400, 11520, 9216, "?". No shading. The full question and table stay on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Eighteen thousand times zero point eight to the four is seven thousand three hundred and seventy-two dollars and eighty **cents**. The formula is equals eighteen thousand times zero point eight hat A **two**. That beats seven thousand two hundred, so year **four**. Declining balance's losses shrink below two thousand seven hundred, so its value **overtakes**. Zero point two is the slip. Keep eighty per **cent**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "18 000 × 0.8⁴ = 7372.80"; on "cents" the "?" cell fills "7372.8" (framed green). On "two" the formula bar "=18000*0.8^A2" (framed green). On "four" row 6 (year 4) rings, "7372.80 > 7200" with B6 shading, framed answer "year 4". On "overtakes" a small loss strip, 32 px: "olive: 3600, 2880, 2304, 1843.20 · blue: 2700 each", the olive losses under 2700 from year 3 ringed amber. On "cent" a red slip "=18000*0.2^A2" writes and is crossed (caption "keep 80%: 100% − 20%"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one, from a given graph. It shows a forty-eight-thousand-dollar minibus over eight years, depreciated two ways. Which graph shows declining balance? Find the straight-line depreciation per year. What does the crossing point mean? And which method gives the higher value after eight years? Pause here to answer.

Visual: `QuestionCard`, 40 px: "The graph shows the value of a $48 000 minibus over 8 years under straight-line and declining-balance depreciation. (a) Which graph shows declining-balance depreciation? Give a reason. (b) Find the straight-line depreciation per year. (c) What does the crossing point mean? (d) Which method gives the higher value after 8 years?" Picture slot: a coded graph (t 0 to 8 years, value $0 to $50,000, gridlines every $10,000 and every year): a straight line from (0, 48 000) to (8, 8 000) and a curve from (0, 48 000) through the points of 48 000 × 0.86ⁿ, both in ink, unlabelled, crossing between t = 5 and t = 6. The full question and graph stay on screen. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The curve is declining balance, because its drops get **smaller**. The straight line falls forty thousand dollars in eight years, five thousand a **year**. Where they cross, both methods give the minibus the same **value**. After eight years, declining balance is higher, about fourteen thousand four hundred, against eight **thousand**. Saying they lose the same amount there is the **slip**.

Visual: the card shrinks to the top. On "smaller" the curve turns olive, label "declining balance: drops shrink"; the straight line turns blue. On "year" rows, 44 px: "48 000 − 8 000 = 40 000", "40 000 ÷ 8 = $5,000 a year" (framed green). On "value" the crossing rings amber, label "same value". On "thousand" the points at t = 8 ring: olive "≈ $14,400 (calc: $14,362.46)" (framed green) and blue "$8,000". On "slip" a red slip "they lose the same amount at the crossing" writes and is crossed (caption "same value, not same loss"). Hold about 1 s.

### 12. handoff
> So far, this money strand has been about what things are worth, savings that grow, and gear that loses value. Next, we turn to borrowing. Here's an e-bike for three thousand dollars. The tag says you could buy it now, and pay later. But what does paying later really cost? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`): on "what things are worth" a small grey thumbnail of scene 5's chart (360 px wide) at the top left with the chip "What things are worth: done" (30 px, grey). On "e-bike" the e-bike plate `ms12-ebike-v1.png` (about 1,100 px wide) at the centre-left; on "three thousand dollars" the swing tag `ma12-swing-tag-v1.png` (about 300 px tall) swings in on its string from the handlebar with "$3,000" (48 px, ink) on its first ruled line; on "buy it now, and pay later" "buy now, pay later?" (hand font, 36 px, amber) writes across the tag's next two lines. On "next" chips "Next: the real cost of borrowing" (36 px) and "?" (44 px) at the right. Hold about 2 s. No payment options, instalments, rates, fees or terms appear. This is i12's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Straight-line: same $ each year; a straight line; stops at $0.
- Declining balance: same % of the current value; fast, then slow.
- Crossing point: both methods give the same value (not the same loss).
- Spreadsheet: =40000-6000*A2 and =40000*0.8^A2, fill down, chart.
- Which is lower depends on D, r and the year: check the values.

Memory aid (framed card, right side, as in scene 7): *Same dollars: a straight line. Same percentage: fast, then slow.* Key: *Before the crossing, declining balance is lower. After it, straight-line is. Check the values, not a rule.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i12's opening frame.

## Teaching checks

- **Does it explain causes?** Why compare row by row: each row is the same year under both rules (2, 3). Why the order changes: declining balance's losses shrink below the fixed $6,000 (4). Why the crossing means equal value: it is where the two value columns are equal (5). Why straight-line stops and the curve does not: a value cannot be negative; 80% of a positive amount stays positive (5). Why "it depends": the crossing comes from D and r (6).
- **Misconceptions addressed:** "declining balance always loses faster" (3, 6); the crossing as equal losses (5 crossed, A2 crossed); 0.2 for 20% (A1 crossed); a negative straight-line value (5).
- **Visual standard, item by item:** 1 the van from the first frame, as a badge through the spreadsheet; 2 a new stage every 40 to 60 s; 3 the grid built and filled live, shading that jumps columns, loss bars sinking under the $6,000 line, a chart drawn from the columns, one edit moving the crossing; 4 fixed roles (straight-line blue, declining olive); 5 large type; 6 hand tags; 7 a task strip, givens card, framed answer and crossed slip; 8 framed card and five bullets; 9 the shading jump and the moving crossing.
- **One idea at a time:** build (2), read (3), cause (4), chart and crossing (5), dependence (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible (A1's table and A2's graph supplied); 10 s each; feedback about 30 s and 28 s.
- **Avoided double teaching:** both formulas (i09, i10) and spreadsheet basics (a04b, i05) are recalled in a chip; the video teaches only the comparison.
- **Standard 1 path:** numerical (the table), from a given graph (A2), and a spreadsheet built from empty cells; no algebra.
- **Syllabus coverage:** `ci776a0f04` and `ci7395c156` (3 to 6, A1, A2; key notes 1 to 3, 5); `ci4311f343` and `ci4d802367` (2, 5, 6, A1; key note 4).
- **Out of scope by design:** finding r; tax rules; loans (i12).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 4 marks suggested, not an official marking scheme).** "A café buys an espresso machine for $18 000. A spreadsheet compares straight-line depreciation of $2700 per year with declining-balance depreciation at 20% p.a. The year is in column A. (a) Find the missing value. (b) Write the formula for the declining-balance value in cell C2. (c) In which year does the declining-balance value first become higher than the straight-line value? (d) Explain why." (Table: year 0 to 4; straight-line 18 000, 15 300, 12 600, 9900, 7200; declining balance 18 000, 14 400, 11 520, 9216, ?)
Model answer: (a) 18 000 × 0.8⁴ = $7372.80. (b) =18000*0.8^A2. (c) Year 4 ($7372.80 > $7200). (d) Straight-line loses $2700 every year; declining balance loses 20% of a shrinking value ($3600, $2880, $2304, $1843.20), so from year 3 its yearly losses are below $2700 and its value catches up and overtakes. Classic mistake (crossed): "=18000*0.2^A2".

**Attempt 2 (scene 10; pack question 2 numbers, a given graph, 4 marks suggested).** "The graph shows the value of a $48 000 minibus over 8 years under straight-line and declining-balance depreciation. (a) Which graph shows declining-balance depreciation? Give a reason. (b) Find the straight-line depreciation per year. (c) What does the crossing point mean? (d) Which method gives the higher value after 8 years?"
Model answer: (a) The curve: each year's drop is a percentage of the current value, so the drops get smaller. (b) (48 000 − 8000) ÷ 8 = $5000 per year. (c) At that time both methods give the minibus the same value; before it, declining balance gives the lower value, after it the higher. (d) Declining balance: about $14 400 from the graph (48 000 × 0.86⁸ = $14 362.46), against $8000. Classic mistake (crossed): "they lose the same amount at the crossing".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Van, straight-line | 40000 − 6000n: 40000, 34000, 28000, 22000, 16000, 10000, 4000; −2000 at n = 7 shown as 0; zero at 6.67 years | 2, 3, 5 |
| Van, declining balance | 40000 × 0.8ⁿ: 40000, 32000, 25600, 20480, 16384, 13107.20, 10485.76, 8388.61 | 2, 3, 5 |
| Yearly losses | straight-line 6000 each; declining 8000, 6400, 5120, 4096, 3276.80 | 1, 4 |
| Order change | n = 3: 22000 > 20480; n = 4: 16000 < 16384 | 3, 5 |
| D = 4000 edit | 40000 − 4000n to 0 at n = 10; n = 8: 8000 > 6710.89; n = 9: 4000 < 5368.71 | 6 |
| A1 | 7372.80; =18000*0.8^A2; year 4; losses 3600, 2880, 2304, 1843.20 | 8, 9 |
| A2 | $5000 a year; crossing between 5 and 6 (23000 > 22580.50; 18000 < 19419.23); n = 8: 14362.46 against 8000 | 10, 11 |
| Handoff | e-bike $3,000 (i12's price; no other number) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 40000 − 6000n at n = 0 to 7: 40000, 34000, 28000, 22000, 16000, 10000, 4000, −2000; 40000/6000 = 6.667.
- 40000 × 0.8ⁿ at n = 0 to 7: 40000, 32000, 25600, 20480, 16384, 13107.2, 10485.76, 8388.608.
- Differences of 40000 × 0.8ⁿ: 8000, 6400, 5120, 4096, 3276.8.
- 40000 − 4000n at n = 8, 9: 8000, 4000; 40000 × 0.8⁸ = 6710.8864; 40000 × 0.8⁹ = 5368.70912.
- 18000 × 0.8ⁿ at n = 1 to 4: 14400, 11520, 9216, 7372.8; 18000 − 2700n: 15300, 12600, 9900, 7200; differences 3600, 2880, 2304, 1843.2.
- 48000 × 0.86ⁿ at n = 5, 6, 8: 22580.4968, 19419.2273, 14362.4605; 48000 − 5000n at 5, 6, 8: 23000, 18000, 8000; (48000 − 8000)/8 = 5000.

## Memory aid check

- **"Same dollars: a straight line. Same percentage: fast, then slow."** with key line **"Before the crossing, declining balance is lower. After it, straight-line is. Check the values, not a rule."** Original. Meaning, as said in scene 7: straight-line removes a fixed amount D each period, so value against time is linear; declining balance removes a fixed fraction r of the current value, so the removed amount shrinks and the graph falls steeply then flattens. Assumptions checked: both methods start from the same V₀; 0 < r < 1; the key line's order (declining balance lower first) holds when declining balance's first loss r × V₀ is larger than D, as in every example here (8000 > 6000, 3600 > 2700, 6720 > 5000); if D were larger than r × V₀, straight-line would be lower from the start and might never cross, which is why the key line ends "check the values, not a rule" and scene 6 shows the crossing moving. Straight-line stopping at $0 is in key note 1. It helps a new case: a $10 000 laptop at $2000 a year or 30% a year: 30% of $10 000 is $3000 > $2000, so declining balance is lower first. Introduced after scenes 2 to 6.
- **Considered, not used:** "Fast start, slow finish" alone (drops the crossing).

## Narration length estimate

Revision 1, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): **5,566 characters**, 13 scene headings. Characters per scene (1 to 13): 571, 595, 676, 573, 605, 465, 299, 339, 395, 315, 373, 285, 75.

At 13.3 characters per second the speech is about 418 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the grid build and fill (2), the shading (3), the loss bars (4), the chart drawing (5) and the edit ripple (6) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 507 s (8 min 27 s)**, 63 s under the 570 s cap; speech and holds before the notes about 462 s. Feedback speech: about 30 s and 28 s.

Reserve trims if the voiced take runs long: scene 1's "though the rules and prices change over time" must stay (ruling 5); scene 3's "which means it's taken more off the van's value" (the hand tag carries it); scene 6's "sometimes past the years that matter to the business".

## Scene list and build ids

Lesson key `m-s12i11` (route math-s12-i11). Explainer folder `src/explainer/lessons/math-s12-i11`; build inputs in `docs/production/claude-pm/lessons/math-s12-i11/` (at voicing).

In order (13 scene headings): hook-one-van, build-spreadsheet, read-each-row, why-it-flips, chart-and-crossing, change-one-number, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | i10's frame; the van and two methods |
| 40 to 100 s | 2 | The grid built and filled |
| 100 to 160 s | 3 | Rows read; the shading changes column |
| 160 to 215 s | 4 | Yearly-loss bars and the $6,000 line |
| 215 to 280 s | 5 | Chart, crossing, stop at zero |
| 280 to 320 s | 6 | One edit; the crossing moves |
| 320 to 340 s | 7 | Framed memory card |
| 340 to 435 s | 8 to 11 | Question cards and countdowns, then feedback |
| 435 to 460 s | 12 | The e-bike and its tag, for i12 |
| 460 to 505 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i10's last frame continues into 1; 1 to 2 stage change (the grid fills the frame); 2 to 3 camera continue; 3 to 4 stage change (bars under the grid); 4 to 5 stage change (grid and chart); 5 to 6 camera continue; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i11-learning-review.md`, `science_check` = `checks/m-s12-i11-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma12-delivery-van-v1.png` (a white box truck, side view, roller door, blank side panel; true alpha; reused as the anchor); `ma12-swing-tag-v1.png` (a blank cream card tag on a string loop with a double border and four ruled lines; true alpha; reused for the final frame's coded price and words); `ma11-coffee-cart-v1.png` (has an espresso machine on its counter; not used, because A1's picture is a table); `ma11-share-ebike-v1.png` (listed, not used: a share-scheme bike carries a docking and app look that suits w28's hire tariff, not a bike for sale).

Need (painted, new; see the Codex asset brief): `ms12-ebike-v1.png` (final frame; i12's anchor). Reused: `ma12-delivery-van-v1.png`, `ma12-swing-tag-v1.png`.

Coded: the van's tag, the spreadsheet, shading, loss bars, chart, crossing, region brackets, the swing tag's text, question cards, the A2 graph, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `SpreadsheetGrid` (a04b's part; chart option and conditional shading from the i-strand list), `StudioPlot`, `crossingX` and `RegionLabels` (`a11-graph-parts.tsx`), `GrowthBars`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i11; none beyond the shared list):
1. **SpreadsheetGrid: shade the lower of two columns** per row (soft grey), with a ring when the shaded column changes. Check: rows 3 to 5 shade C; rows 6 and 7 shade B.
2. **SpreadsheetGrid: chart from columns**, with a floor at zero for a chosen series (the straight line stops at its zero crossing; the cell shows 0). Check: the blue line ends at (6.67, 0); no point below the axis.

## Codex asset brief (Maths S12 I11, an e-bike; also i12's anchor)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i11.md`, route entry math-s12-i11. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i11 build (its final frame uses it; root ruling 17). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-delivery-van-v1.png` and `maths/ma11-coffee-cart-v1.png`; no text, logos, brand marks, number plates, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-ebike-v1.png` (about 1800 × 1100 px): a new commuter e-bike in plain side view (facing right), step-through frame in a muted teal-grey, a battery pack on the down tube, a rear hub motor, mudguards, a rear rack, a small front basket and a front light; tyres and spokes clear; straight handlebars with a clear gap above the stem where a swing tag can hang (the tag is a separate reused plate). Unbranded: no decals, no dock or share-scheme hardware.

Report inspection on the paper background (`#f6f1e7`) at 1,100 px and 300 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i11-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every spreadsheet cell, narration value, attempt and key note against "Numbers used".
2. Confirm the four syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm the formulas are exactly the site's ("=40000-6000*A2", "=40000*0.8^A2"), start with "=", use "*" and "^", and use relative references only.
4. Confirm the crossing is always described as equal value, never equal loss, except in the crossed slips.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer (A1's "?" cell and A2's unlabelled graphs).
6. Confirm scene 1 opens on i10's final frame and scene 12 matches the decisions file's i11 to i12 join, with no payment option, rate or fee shown.
7. Confirm the ATO sentence is the only tax claim, "rules and prices change" is said once, no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Straight-Line vs Declining Balance Depreciation | Year 12 Maths Standard

(Title length: 72 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson03.sa.html

A $40,000 delivery van can lose $6,000 a year or 20% a year. Which method loses value faster? Build both in a spreadsheet, read the table row by row, and see why the order changes between years 3 and 4: straight-line takes the same dollars every year, while declining balance takes a percentage of a shrinking value. Chart both columns, find the crossing point (the same value, not the same loss), see why straight-line stops at zero, and watch one changed number move the crossing. Two exam-style questions at the end, one from a given graph. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Depreciation rules and prices change; the values here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans (Standard 2) and Depreciation and loans (Standard 1). For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Compare straight-line depreciation and declining balance depreciation both numerically and graphically, with and without using digital tools"
"Use a spreadsheet to numerically and graphically model depreciation using the straight-line and declining balance methods"
Syllabus content, Standard 1:
"Compare straight-line depreciation and declining balance depreciation either numerically or from a given graph"
"Use a spreadsheet to model depreciation using the straight-line and declining balance methods"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

Builds on: Declining Balance Depreciation and Compound Interest. Next: Buy Now Pay Later, Short-Term and Long-Term Loans.

#Year12Maths #MathsStandard #Depreciation #HSCScience

## Open decisions

- **1. The i12 join (root and the i12 designer; ruling 31).** The final frame is fixed as ruling 31 states (the e-bike with a "buy now, pay later?" tag). Details for the i12 designer to confirm in their decisions file: the price "$3,000" on the tag (the i12 pack's e-bike price), the grey "What things are worth: done" thumbnail (i12 may fade it on its first sentence), and the chip wording "Next: the real cost of borrowing". If i12 wants another price or wording, only scene 12's tag text changes. The "Next" line in the description uses a provisional i12 title.
- **2. Olive for declining balance (learning review).** Olive is the kit's `MATH_CURVE_OLIVE`; blue is kept for straight-line from i09, and teal stays with compound growth (i02a to i05). Check that olive reads clearly against the paper at phone size.

## Review notes

- Revision 1. Next: student learning review (trace from i10 for a student who has built one spreadsheet before (a04b, i05); check that the row-by-row reading lands before the cause, that the loss bars make the flip feel inevitable, that "same value, not same loss" is clear, that the stop at zero is not confused with the curve's limit, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A. The builder needs `SpreadsheetGrid` (a04b) with the chart option and lower-column shading, and the e-bike plate painted before this build.
