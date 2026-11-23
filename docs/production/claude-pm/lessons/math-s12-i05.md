# Maths S12 I05: Why does compound interest pull ahead of simple interest, and how does a spreadsheet show it? Two accounts year by year, equal after one year, a straight line against a curve, the site's spreadsheet with a two-row check and a chart, twenty years on, and a given graph (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; ruling 30: on both paths; Standard 1 arrives from i03 and leaves for i08). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,495 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 504 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i05-learning-review.md` (summary `../checks/m-s12-i01-i11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-standard-outline.md` (1 to 42) and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i01-i11-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 4 (the cell formulas are not tied to the formulas the student knows): **accepted**, reviewer's wording. After the B formula: "That's the principal, plus P r n, with the year in A two as n." After "The hat means": "That's PV times one plus r, to the power n." Visual: 32 px tags under B's parts ("5000: P", "0.06: r", "A2: n (the year)") with a grey chip "i01: P + Prn", and under C's ("5000: PV", "1.06: 1 + r", "^A2: to the power n") with "i02a: PV(1 + r)ⁿ".
2. Optional, scene 5 (select the year column too): **applied**. "Now select the year column and the two money columns"; columns A, B and C outline, so the chart's x-axis shows years 0 to 5.
3. Optional, scene 6 ("which looks steeper at the start"): **applied**, reviewer's wording. "Near the start they're almost on top of each other, so look further along. The one that bends upwards is compound." The first two years ring grey ("too close to tell"), then the curve's right-hand end rings teal ("bends up = compound"). The reserve trim list names the new first sentence.
4. Optional, key note 4: **applied**. "=5000+5000*0.06*A2 and =5000*1.06^A2 (your P and r), fill down."
5. Root's decision 2 (scene 2's $18 olive sliver on a $5,000 bar, listed in the summary, not this design's review): **applied**, using the shared zoom column (root's decision 2: one `InterestStack` part, a labelled "zoomed in" side column beside the stack, described in the same words in i01, i02a, i03 and i05; see "Studio kit use and additions"). Beside the teal bar, band $280 to $330 at 8 px a dollar, dashed line at "$300: 6% of $5,000"; "simple, year 2: $300" (blue) and "compound, year 2: $318" (teal) side by side, the olive "+$18" 144 px above the line, ringing on "ahead".

Housekeeping (ruling 37): the 85-character title becomes the design's shorter alternative, "Simple vs Compound Interest in a Spreadsheet | Year 12 Maths Standard" (68 characters). The description's "Next" line for Standard 1 names i08 by its new title, "Choosing an Investment Strategy".

Length: finding 1 adds about 8 s, finding 3 about 3 s and finding 2 about 2 s; the zoom column adds about 2 s of settling. No trim is needed.

Open decisions closed: 1 (ruling 34) and 3 (ruling 37). Still open: 2 (the two-route final frame; the review found the join works from both routes, but root has not ruled). Joins unchanged.

Narration 5,495 characters by script (Revision 1: 5,326), about 504 s with holds; speech before the notes about 459 s, under the 570 s cap. Feedback speech about 29 s and 28 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Changed values are checked in `work/brief-resolve-standard-i1/verify.py` (SymPy 1.14, `python -I`). Nothing recorded; human listening pending.

Scope: sixth video of the Year 12 Investment and loans strand, outline playlist order 18. Shared by Standard 1 and Standard 2. Standard 2 compares "numerically and graphically, with and without using digital tools", names the shapes linear and exponential, and models "numerically and graphically" in a spreadsheet; Standard 1 compares "numerically or from a given graph" and uses a spreadsheet "to model investments". The opening does not depend on i04 (Standard 1 skips it). Pre-design pack: `../pre-design/maths-standard/math-s12-i05.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson06.sa.html` (SHA256 `1940cca09f6a14b6bf7159efdce0cf1be5dc27545bd72bf6dcef668cb7635c6e`; card 08, "Modelling both kinds of interest in a spreadsheet": $5000 at 6% p.a. for 5 years, its A2, B2 and C2 formulas, its table, "They are equal at year 1 and $191.13 apart by year 5" and "Year 1 must be identical in both columns"; card 10's 20-year values, corrected to $16,035.68 (MS-13); MC 4's "an upward-curving exponential"). Route entry: `math-s12-i05` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; the reused coffee cart as the anchor, plates in the final frame (the kettlebell reused; the term deposit certificate new; the investment unit from i03); the spreadsheet, chart and boards coded.

Owner rules applied: as i01 (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols, shapes in plain words before their names; the spreadsheet as a coded, unbranded grid with a formula bar; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchor (a coffee cart business's savings); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Investment and loans (Standard 2) and Investment (Standard 1)), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form):

Standard 2:
- `ci75558132`: "Compare the growth of simple interest and compound interest investments numerically and graphically, with and without using digital tools"
- `cie4f17f46`: "Recognise that simple interest graphs are linear and compound interest graphs are exponential"
- `ci5c8c3f23`: "Use a spreadsheet to numerically and graphically model investments using both simple and compound interest"

Standard 1:
- `ci617494ea`: "Compare the growth of simple interest and compound interest investments either numerically or from a given graph"
- `ciebe69650`: "Use a spreadsheet to model investments using both simple and compound interest"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6 (Standard 1)

**Boundary:** starts from i04's final frame (Standard 2) or i03's right panel (Standard 1), which are the same picture: the coffee cart `ma11-coffee-cart-v1.png` with two coded account cards, "paid out" (blue bar) and "left in" (teal bar), each "$5,000 at 6% p.a."; the grey chip "side by side: how far apart?"; chips "Next: simple against compound" (or "Standard 1 next: simple against compound") and "?". Recalls i01 (simple interest, paid out, a straight line from P), i02a (compound interest, × 1.06 each year, FV = PV(1 + r)ⁿ), a05 (adding the same amount against multiplying by the same number, for both courses) and a04b (cells, "=", "*", fill down) in a phrase or grey chip each. Teaches: a year-by-year table of both; equal after one year with yearly compounding, and why; compound pulling ahead by a growing amount; the simple column adds the same amount (a straight line, linear) while the compound column multiplies by the same number (a curve bending upwards, exponential); the site's spreadsheet built from empty cells; checking the first two rows; a line chart from the two columns; the twenty-year gap; reading a given graph. Stops at the comparison. Not taught: depreciation (i09 to i11); shares (i06a).

## Decisions

- **Anchor: a coffee cart business's savings (reused painted plate, live).** $5,000 set aside for 5 years at 6% p.a.: one account pays the interest out, one leaves it in (site card 08's numbers, set on the pack's coffee cart). Simple 5,300, 5,600, 5,900, 6,200, 6,500; compound 5,300, 5,618, 5,955.08, 6,312.38, 6,691.13; gaps 0, 18, 55.08, 112.38, 191.13; 20 years $11,000 against $16,035.68 (MS-13). It joins i01's "paid out" and i02a's "left in" in one picture. Plate reused: `ma11-coffee-cart-v1.png` (viewed 18 Nov 2026: a teal cart with a striped awning, an espresso machine and cups, true alpha). No people.
- **The first-rows check (changed from the site, recorded).** The site says "Year 1 must be identical in both columns". The classic slip =5000*1.06*A2 also gives $5,300 at year 1 (5000 × 1.06 × 1), so a year-1 check alone misses it; it fails at year 0 (it gives $0). The design checks the first two rows: year 0 must be $5,000 in both, and year 1 $5,300 in both. The site's year-1 point is kept and taught with its reason (scene 2).
- **Names of the shapes.** Plain words first ("a straight line", "a curve that bends upwards"), then the names "linear" and "exponential" (pack decision; both courses met the names in a05; only Standard 2 must use them).
- **Join.** Scene 1 opens on the shared picture; the "Next" chip fades on the first sentence.
- **Simulations (standard item 3).**
  1. **Two stacks side by side** (scene 2; `InterestStack` in both modes): left, the paid-out account, equal blue $300 blocks into a jar each year while the bar stays at $5,000; right, the left-in account, teal blocks that grow ($300, $318, $337.08, $357.30, $378.74), olive slivers marking interest on interest; a gap readout climbs 0, 18, 55.08, 112.38, 191.13.
  2. **Differences row** (scene 3): under the table, "+300, +300, +300 …" (blue) and "+300, +318, +337.08 …" (teal), with "× 1.06" arrows on the compound column.
  3. **Spreadsheet build and chart** (scenes 4, 5; `SpreadsheetGrid` with the chart option): formulas typed in the formula bar, fill down, the first two rows ringed; the two columns selected and a line chart drawing in; then the fill extended to year 20 and the chart rescaling.
  4. **Given graph** (scene 6): two unlabelled ink graphs on a printed-style grid; labels "simple" and "compound" drop onto them; a vertical reader at t = 10 reads both values.
- **Colour roles (fixed for i01 to i05).** P **violet**; rate and multiplier **amber**; simple interest (column B, the line, its blocks) **blue**; compound interest (column C, the curve, its blocks) **teal**; interest on interest **olive**; the gap readout ink; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As i01 and a04b. Cells 40 px (current row 44 px), formula bar 44 px. Hand tags: "equal after 1 year", "no earlier interest yet", "gap grows", "+300 every year: straight line", "× 1.06 every year: curve", "linear", "exponential", "check years 0 and 1", "^ means to the power of", "20 years: $5,035.68 apart", "line = simple", "curve = compound", "too close to tell", "bends up = compound" (Revision 2). At most two live at once.
- **Stage changes (standard item 2).** The shared picture (1); two stacks and the table (2); the differences and the two shapes (3); the spreadsheet build and check (4); the chart and 20 years (5); the given graph (6); framed card (7); question cards (8 to 11); the two-route frame for i06a and i08 (12); key notes (13).
- **Worked example (g01-style, as a04b).** The coffee cart (scenes 2 to 5) is the worked example: task strip "$5000 for 5 years at 6% p.a.: simple or compound? Compare year by year."; givens card "P = $5000" (violet), "r = 6% = 0.06" (amber), "n = 0 to 5 years"; framed answer "Compound is ahead by $191.13 after 5 years"; crossed slip (4) "=5000*1.06*A2" (caption "× A2 is not to the power A2: year 0 gives 0").
- **Memory aid.** Framed card: "Simple adds: a straight line. Compound multiplies: a curve that bends up." Key line: "Equal after 1 year (yearly compounding), then compound pulls ahead by more each year."
- **Visual surprise.** The two stacks match exactly for one year, then the teal stack's blocks start growing and the gap readout accelerates (scene 2); at twenty years the curve towers $5,035.68 above the line (scene 5).
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` MS-13).** Card 08 is used exactly, with the first-rows check widened (above). Card 10's 20-year values use $16,035.68 and $5,035.68 (MS-13). Drill 2 (a) (5.5% compound beating 6% simple over 10 years) is not used, to keep one comparison per scene.
- **Plain meanings at first use.** Linear ("adding the same amount each step; its graph is a straight line"); exponential ("multiplying by the same number each step; its graph curves"); given graph ("a graph printed in the question, to read rather than draw").
- **Attempts.** A1 (pack question 1): a spreadsheet table, $5,000 at 4%: column C is compound (increases 200, 208, 216.32); the missing value $5,849.29; C2 "=5000*1.04^A2"; crossed "=5000*1.04*A2" (caption "that adds the same each year; compound needs the power"). A2 (pack question 2, with "sketch" replaced by "explain", so Standard 1 can answer): $10,000 at 7% for 15 years: simple $20,500; compound $27,590.32; the reason; crossed "10 000 + 15 × 700 for compound" (caption "that's simple: compound multiplies by 1.07").
- **Mistake scene:** none separate. Expecting compound ahead from year 1 (2, said); =5000*1.06*A2 (4 crossed, A1 crossed); simple working used for compound (A2 crossed); the straight line read as compound because it "starts steeper" (6, said: both start together).
- **Cause chain taught, in order:** (1) in the first year neither account has earlier interest, so both earn 6% of $5,000 and are equal at year 1 (2); (2) from year 2, the left-in account earns interest on the first year's interest too, so it pulls ahead, and the gap grows because each year's extra is earned on a bigger balance (2); (3) adding $300 every year gives equal steps, a straight line; multiplying by 1.06 every year gives steps that grow, a curve that bends upwards (3); (4) a spreadsheet builds both columns with one formula each, filled down, so the first rows test the formulas (4); (5) over long times the growing steps add up to a large gap (5); (6) in a given graph, the straight one is simple and the curved one compound (6).
- **Entry knowledge (route):** i01, i02a (and i02b, i03); a05 (add against multiply; both courses); a04b (spreadsheet basics; both courses). i04 is not assumed.
- **Standard 1 path.** Standard 1 needs the table (numerically), a given graph (scene 6, A1) and a spreadsheet (scene 4, A1); every scene is spoken for both. The names linear and exponential are said after the plain words. Standard 2's "graphically, with digital tools" is scene 5's chart.
- **Money sources (root ruling 32).** 6%, 4% and 7% are examples; 6% p.a. is in reach for a bonus savings account in November 2026 (Canstar, read 18 Nov 2026 by the pack; i02a's sources). Narration says once that "rates change".
- **Handoff (two routes; to math-s12-i06a for Standard 2 and math-s12-i08 for Standard 1).** Scene 12, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: a thin grey rule splits the frame. Left panel, "Standard 2": the kettlebell `ma11-kettlebell-v1.png` (280 px) beside a coded, unbranded share-table row, 40 px, headers "Company | Last | Div | Yield" and the row "Larkspur Fitness Ltd (a gym chain) | $6.00 | 30c | ?"; chip "Standard 2 next: shares, dividends and yield". Right panel, "Standard 1": four objects in a row, each with a 30 px label: the coin jar `ma12-coin-jar-v1.png` ("savings account"), the term deposit certificate `ms12-term-deposit-certificate-v1.png` ("term deposit"), a small coded share-table row with a grey chip "Standard 2" ("shares"), and the investment unit `ms12-investment-unit-v1.png` ("property"); chip "Standard 1 next: which investment suits which goal?". Chips "Next" and "?". No yield or return values. i06a opens on this frame and fades the right panel; i07's final frame repeats the right panel full-frame, so i08 opens on the same picture from either route.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Simple: 5000 + 300n: 5000, 5300, 5600, 5900, 6200, 6500. Compound: 5000 × 1.06ⁿ: 5000, 5300, 5618, 5955.08, 6312.3848, 6691.1279. Gaps: 0, 0, 18, 55.08, 112.3848, 191.1279. Compound yearly interest: 300, 318, 337.08, 357.3048, 378.7431.
  (b) Slip =5000*1.06*A2: 0, 5300, 10 600, 15 900, 21 200, 26 500.
  (c) 20 years: 5000 + 300 × 20 = 11 000; 5000 × 1.06²⁰ = 16 035.6774; gap 5035.6774.
  (d) Given graph at 10 years: 8000 and 5000 × 1.06¹⁰ = 8954.2385; gap 954.2385 (read "about $950").
  (e) A1: 5000 × 1.04ⁿ: 5200, 5408, 5624.32, 5849.2928; increases 200, 208, 216.32.
  (f) A2: 10 000 + 10 000 × 0.07 × 15 = 20 500; 10 000 × 1.07¹⁵ = 27 590.3154.
  (g) Pronunciations: "equals five thousand plus five thousand times zero point zero six times A two"; "equals five thousand times one point zero six, hat A two"; "sixteen thousand and thirty-five dollars and sixty-eight cents".

Main question: *$5,000 at 6%: one account pays the interest out, one leaves it in. Why does compound interest pull ahead of simple interest, and how does a spreadsheet show it?*
Entry knowledge (i01, i02a, a05, a04b): both kinds of interest; add against multiply; spreadsheet basics.
Stops after: the table, the shapes, the spreadsheet and chart, 20 years, a given graph. No shares or depreciation.
Handoff: Standard 2, math-s12-i06a: "a gym chain's share: $6.00, a 30c dividend, yield = ?"; Standard 1, math-s12-i08: "four places for your money: which suits which goal?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): P violet; rate amber; simple blue; compound teal; interest on interest olive; answer green; mistake red. Header strip "INVESTMENT AND LOANS" (topic only; root ruling 23 Nov 2026: no course name on screen). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: two accounts
> Here's a coffee cart business with five thousand dollars to put away for five years, at six per cent a year. Rates change, so six per cent is just an example. One account pays the interest out each year. That's simple interest. The other leaves it in, adding it once a year. That's compound interest. After five years, which one is ahead, and by how much? So why does compound interest pull ahead of simple interest, and how does a spreadsheet show **it**?

Visual: opens on the shared picture exactly (the coffee cart, the "paid out" and "left in" cards, the grey chip, chips). On the first sentence the "Next" chip fades and the cart moves to a 500 px badge at the top left. On "just an example" a grey chip "rates change". On "pays the interest out" the blue card pulses with a grey chip "i01: simple interest"; on "leaves it in" the teal card pulses with "i02a: compound interest". On "which one is ahead" the grey chip "side by side: how far apart?" moves to the centre. On "it" heading "Simple against compound" writes on, and the question chip "How far apart?" moves to the top right.

### 2. side by side, year by year
> Put them side by side. Simple interest adds six per cent of five thousand, three hundred dollars, every year. So it goes five thousand three hundred, five thousand six hundred, five thousand nine hundred, and so on. Compound multiplies by one point zero six each year. After one year, it's also five thousand three **hundred**. They're equal, because in the first year there's no earlier interest to earn interest on. In year two, compound earns six per cent of five thousand three hundred, three hundred and eighteen dollars, so it's eighteen dollars **ahead**. By year five, it's six thousand six hundred and ninety-one dollars and thirteen cents, against six thousand five hundred. That's a hundred and ninety-one dollars and thirteen cents ahead, and the gap grows every **year**.

Visual: stage change: two account bars side by side (simulation 1), each "$5,000" (violet base); a table at the right, 44 px: "year | simple | compound | gap", rows filling as spoken. On "three hundred dollars, every year" a blue $300 block drops into a small jar beside the blue bar each year (the bar stays). On "hundred" (bold) the teal bar gains a $300 block; row "1 | 5300 | 5300 | 0" rings, hand tag "equal after 1 year"; on "no earlier interest" hand tag "no earlier interest yet". On "three hundred and eighteen" the teal bar gains a $318 block with an $18 olive sliver. Zoom column (Revision 2, root's decision 2; the shared part in "Studio kit use and additions"): it opens to the right of the teal bar, band $280 to $330 at 8 px a dollar (400 px), grey dashed line at $300 labelled "$300: 6% of $5,000"; two columns side by side, "simple, year 2: $300" (blue, reaching the dashed line) and "compound, year 2: $318" (teal), whose olive top "+$18" (144 px) stands above the line, labelled at 36 px. On "ahead" the olive "+$18" rings and row "2 | 5600 | 5618 | 18". Rows 3 and 4 fill quietly (5900, 5955.08, 55.08; 6200, 6312.38, 112.38). On "year" (bold) row "5 | 6500 | 6691.13 | 191.13" (gap framed green), hand tag "gap grows".

### 3. a line and a curve
> Now look at how each one grows. Simple goes up by the same three hundred dollars every year. Adding the same amount each time makes a straight line, called a linear **graph**. Compound goes up by more each year, three hundred, then three hundred and eighteen, then three hundred and thirty-seven dollars and eight cents, because it multiplies by the same number each year. That makes a curve that bends upwards, called an exponential **graph**. Both start at five thousand, and they're still together after one year. After that, the curve pulls away from the **line**.

Visual: stage change: axes (t 0 to 5 years, $4,500 to $7,000) at the right 60 per cent; the table shrinks to the left (32 px). Under the simple column the differences row (simulation 2) "+300, +300, +300, +300, +300" (blue); on "graph" (first) the blue points plot and a straight blue line draws, hand tag "+300 every year: straight line", label "linear". On "three hundred and thirty-seven dollars and eight cents" under the compound column "+300, +318, +337.08, +357.30, +378.74" (teal) with "× 1.06" arrows; on "graph" (second) the teal points and curve draw, hand tag "× 1.06 every year: curve", label "exponential"; grey chip "a05: add the same, or multiply by the same". On "line" (last bold) the two meet at (0, 5 000) and (1, 5 300), then the gap shades olive between them.

### 4. build it in a spreadsheet
> A spreadsheet builds the whole table at once. Column A is the year. Cell A two is zero, and A three is equals A two plus one, filled down. Column B is simple interest. Equals five thousand, plus five thousand times zero point zero six times A **two**. That's the principal, plus P r n, with the year in A two as n. Column C is compound. Equals five thousand times one point zero six, hat A **two**. The hat means "to the power of". That's PV times one plus r, to the power n. Fill both down to year five. Then check the first two rows. At year zero, both must say five thousand, and at year one, both must say five thousand three hundred. Typing times A two instead of hat A two is the **slip**. It gives zero at year zero, so the check catches it.

Visual: stage change: `SpreadsheetGrid` (simulation 3), 1,500 × 700 px; the cart as a 260 px badge. Headers type, 40 px: A1 "year", B1 "simple ($)" (blue), C1 "compound ($)" (teal). On "A two is zero" A2 "0"; the bar shows A3 "=A2+1", then A4 to A7 fill 2 to 5; grey chip "a04b: = means calculate; * means times". On "two" (first bold) the cursor at B2, the formula bar (44 px) "=5000+5000*0.06*A2" (5000 violet, 0.06 amber). On "principal, plus P r n" 32 px tags drop under its parts, "5000: P", "0.06: r", "A2: n (the year)", with a grey chip "i01: P + Prn" (Revision 2, review finding 1). On "two" (second bold) the cursor at C2, the bar "=5000*1.06^A2" (1.06 amber); on "hat" the "^" circles, hand tag "^ means to the power of". On "PV times one plus r" tags under C's formula, "5000: PV", "1.06: 1 + r", "^A2: to the power n", with a grey chip "i02a: PV(1 + r)ⁿ". On "Fill both down" the rows compute: B 5000 … 6500, C 5000 … 6691.13. On "first two rows" rows 2 and 3 ring green, hand tag "check years 0 and 1". On "slip" a red slip "=5000*1.06*A2" writes and is crossed (caption "× A2 is not to the power A2: year 0 gives 0"), with a grey ghost cell showing "0" at year 0.

### 5. a chart, and twenty years
> Now select the year column and the two money columns, and insert a line chart. There's the straight line, and the curve pulling away. Now fill down to year twenty, and the chart grows with it. Simple interest reaches eleven thousand dollars. Compound reaches sixteen thousand and thirty-five dollars and sixty-eight **cents**. That's five thousand and thirty-five dollars and sixty-eight cents ahead. The longer the money is left, the more interest on interest **matters**.

Visual: camera continue: columns A, B and C select (grey, blue and teal outlines; Revision 2, review finding 2, so the chart's x-axis shows years 0 to 5) and a line chart (`StudioPlot`, t 0 to 5) draws in beside the grid. On "fill down to year twenty" the fill handle drags to row 22; the chart's t-axis rescales to 0 to 20 and $0 to $18,000, the line and curve redrawing. On "eleven thousand dollars" B22 "11000" rings blue; on "cents" C22 "16035.68" rings teal, and a bracket at t = 20 "$5,035.68" (framed green), hand tag "20 years: $5,035.68 apart". On "matters" the olive gap between the graphs shades.

### 6. reading a given graph
> Exam questions often give you the graph instead. Here, two investments of five thousand dollars at six per cent are graphed over ten years, without labels. Which is which? The straight line is simple interest, and the curve is compound. Near the start they're almost on top of each other, so look further along. The one that bends upwards is compound. At ten years, read across. The curve is at about eight thousand nine hundred and fifty, and the line at eight thousand, so compound is about nine hundred and fifty dollars **ahead**.

Visual: clear change: a printed-style grid (simulation 4), 1,300 × 700 px (t 0 to 10 years, $4,000 to $10,000, gridlines every $500 and every year), two ink graphs, unlabelled; task strip, 40 px: "Two $5000 investments at 6% p.a. are graphed. Which is which? How far ahead is compound after 10 years?" On "straight line" the line turns blue with the label "simple" dropping on, hand tag "line = simple"; on "the curve is compound" the curve turns teal, label "compound", hand tag "curve = compound". On "almost on top" the shared point (0, 5 000) rings violet and the first two years ring grey, hand tag "too close to tell"; on "bends upwards" the curve's right-hand end rings teal, hand tag "bends up = compound" (Revision 2, review finding 3). On "read across" a vertical reader at t = 10 with horizontal dashes to the axis: "≈ 8950" (teal), "8000" (blue). On "ahead" "≈ $950 ahead" (framed green), with a grey chip "calculated: $954.24".

### 7. memory aid
> Here's the summary. Simple interest adds the same amount every year, so its graph is a straight line. Compound multiplies by the same number every year, so its graph is a curve that bends upwards. They're equal after one year, then compound pulls ahead, by more every **year**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the blue line and the teal curve from one violet start, touching at year 1, then parting. Main line, hand font 56 px: "Simple adds: a straight line. Compound multiplies: a curve that bends up." On "year" the key line, 40 px: "Equal after 1 year (yearly compounding), then compound pulls ahead by more each year." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A spreadsheet models five thousand dollars invested at four per cent a year for four years. Which column models compound interest, and why? Find the missing value. And write a formula for cell C two, if the year is in cell A two. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A spreadsheet models $5000 invested at 4% p.a. for 4 years. (a) Which column models compound interest? Give a reason. (b) Find the missing value. (c) Write a spreadsheet formula for cell C2, given that the year is in cell A2." Picture slot: a coded spreadsheet (40 px): A "year" 0 to 4; B 5000.00, 5200.00, 5400.00, 5600.00, 5800.00; C 5000.00, 5200.00, 5408.00, 5624.32, "?". The full question and table stay on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Column C is compound, because its increases grow, two hundred, then two hundred and eight, then two hundred and sixteen dollars thirty-two. Column B adds the same two hundred every **year**. The missing value is five thousand eight hundred and forty-nine dollars and twenty-nine **cents**. The formula is equals five thousand times one point zero four, hat A **two**. Times A two is the **slip**.

Visual: the card shrinks to the top (30 px). Under the table, 40 px: "C: +200, +208, +216.32 (growing)" (teal), "B: +200 each year" (blue); on "year" framed answer "C: compound (increases grow)". On "cents" the "?" fills "5849.29" (framed green), row "5000 × 1.04⁴ = 5849.29". On "two" the formula bar "=5000*1.04^A2" (framed green). On "slip" a red slip "=5000*1.04*A2" writes and is crossed (caption "that adds the same each year; compound needs the power"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Ten thousand dollars is invested for fifteen years at seven per cent a year. Find its value with simple interest, and with compound interest, compounded annually. Then explain why the compound graph curves upwards. Pause here to answer.

Visual: `QuestionCard`, 40 px: "$10 000 is invested for 15 years at 7% p.a. (a) Find the value with simple interest and with compound interest (compounded annually). (b) Explain why the graph of the compound value curves upward." Picture slot: empty axes, t 0 to 15 years, $0 to $30,000. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Simple interest adds seven hundred a year for fifteen years, so it's twenty thousand five hundred **dollars**. Compound is twenty-seven thousand five hundred and ninety dollars and thirty-two **cents**. The curve bends up because each year's interest is seven per cent of a bigger balance, so the yearly increase keeps **growing**. Adding seven hundred a year for compound too is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "simple: 10 000 + 700 × 15"; on "dollars" "= $20 500" (framed green); "compound: 10 000 × 1.07¹⁵"; on "cents" "≈ $27 590.32" (framed green). The blue line and teal curve draw on the axes; on "growing" the teal steps label "+700, +749, +801.43 …", framed reason "7% of a bigger balance each year". On "slip" a red slip "compound = 10 000 + 15 × 700" writes and is crossed (caption "that's simple: compound multiplies by 1.07"). Hold about 1 s.

### 12. handoff
> Bank accounts grow at a rate you know in advance. Where you go next depends on your course. If you're doing Standard 2, next comes a different kind of investment. Shares, where the price can move every day, and some pay out a dividend. If you're doing Standard 1, next we'll compare savings accounts, term deposits and property, and match each one to a goal. That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the two-route frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`), split by a thin grey rule. On "Standard 2" the left panel: the kettlebell `ma11-kettlebell-v1.png` (280 px) beside the coded share-table row "Company | Last | Div | Yield" / "Larkspur Fitness Ltd (a gym chain) | $6.00 | 30c | ?"; chip "Standard 2 next: shares, dividends and yield". On "Standard 1" the right panel: the coin jar ("savings account"), the certificate `ms12-term-deposit-certificate-v1.png` ("term deposit"), a small share row with a grey "Standard 2" chip ("shares"), and the unit `ms12-investment-unit-v1.png` ("property"); chip "Standard 1 next: which investment suits which goal?". On "next" chips "Next" and "?". Hold about 2 s. This is i06a's opening frame (i06a fades the right panel); its right panel is i08's opening picture; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Simple: + the same amount each year; a straight line (linear).
- Compound: × (1 + r) each year; a curve bending up (exponential).
- Equal after 1 year (yearly), then compound pulls further ahead.
- Spreadsheet: =5000+5000*0.06*A2 and =5000*1.06^A2 (your P and r), fill down.
- Check years 0 and 1; in a given graph, the curve is compound.

Memory aid (framed card, right side, as in scene 7): *Simple adds: a straight line. Compound multiplies: a curve that bends up.* Key: *Equal after 1 year (yearly compounding), then compound pulls ahead by more each year.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i06a's opening frame (its right panel is i08's).

## Teaching checks

- **Does it explain causes?** Why equal at year 1: no earlier interest yet (2). Why compound pulls ahead by more each year: each year's extra is earned on a bigger balance (2, 3). Why a line and a curve: equal steps against growing steps (3). Why check two rows: the "× A2" slip passes year 1 but fails year 0 (4). Why the 20-year gap is large: the growing steps add up (5).
- **Misconceptions addressed:** compound ahead from year 1 (2); "× A2" for "^A2" (4 crossed, A1 crossed); simple working used for compound (A2 crossed); the line read as compound because it "starts steeper" (6).
- **Visual standard, item by item:** 1 the coffee cart from the first frame, as a badge through the spreadsheet; 2 a new stage every 40 to 60 s; 3 two stacks growing apart with a live gap readout, differences rows under the table, a spreadsheet built and charted live, the chart rescaling to 20 years, labels dropping onto a given graph; 4 fixed roles (simple blue, compound teal); 5 large type; 6 hand tags; 7 a task strip, givens, a framed answer and a crossed slip; 8 framed card and five bullets; 9 the stacks matching for a year, then parting.
- **One idea at a time:** the table (2), the shapes (3), the spreadsheet (4), the chart and 20 years (5), a given graph (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible (A1's table supplied); 10 s each; feedback about 29 s and 28 s.
- **Avoided double teaching:** simple and compound formulas recalled from i01 and i02a; spreadsheet basics from a04b in a chip.
- **Standard 1 path:** the table, the given graph and the spreadsheet are all spoken for both; the names follow the plain words.
- **Syllabus coverage:** `ci75558132` and `ci617494ea` (2, 3, 5, 6, A2; key notes 1 to 3, 5); `cie4f17f46` (3, A2; key notes 1, 2); `ci5c8c3f23` and `ciebe69650` (4, 5, A1; key notes 4, 5).
- **Out of scope by design:** shares (i06a); investment strategies (i08); depreciation (i09 to i11).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme).** "A spreadsheet models $5000 invested at 4% p.a. for 4 years. (a) Which column models compound interest? Give a reason. (b) Find the missing value. (c) Write a spreadsheet formula for cell C2, given that the year is in cell A2." (Column B: 5000.00, 5200.00, 5400.00, 5600.00, 5800.00; column C: 5000.00, 5200.00, 5408.00, 5624.32, ?)
Model answer: (a) Column C: its increases grow (200, 208, 216.32), because each value is 1.04 times the one before; B adds $200 every year (simple). (b) 5000 × 1.04⁴ = $5849.29. (c) =5000*1.04^A2. Classic mistake (crossed): "=5000*1.04*A2".

**Attempt 2 (scene 10; pack question 2 with part (b) as an explanation, 3 marks suggested).** "$10 000 is invested for 15 years at 7% p.a. (a) Find the value with simple interest and with compound interest (compounded annually). (b) Explain why the graph of the compound value curves upward."
Model answer: (a) Simple: 10 000 + 10 000 × 0.07 × 15 = $20 500; compound: 10 000 × 1.07¹⁵ = $27 590.32. (b) Each year's interest is 7% of a larger balance, so the yearly increase keeps growing, and the graph gets steeper. Classic mistake (crossed): "compound = 10 000 + 15 × 700".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Table | simple 5000 to 6500 by 300; compound 5000, 5300, 5618, 5955.08, 6312.38, 6691.13; gaps 0, 0, 18, 55.08, 112.38, 191.13 | 2, 4 |
| Steps | simple +300; compound +300, +318, +337.08, +357.30, +378.74 | 3 |
| Slip | =5000*1.06*A2: 0 at year 0, 5300 at year 1 | 4 |
| 20 years | 11 000 and 16 035.68; gap 5035.68 | 5 |
| Given graph | 8000 and ≈ 8950 (8954.24); ≈ 950 (954.24) | 6 |
| A1 | increases 200, 208, 216.32; 5849.29; =5000*1.04^A2 | 8, 9 |
| A2 | 20 500; 27 590.32; steps 700, 749, 801.43 | 10, 11 |
| Handoff | share row $6.00, 30c (no yield) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 5000 + 300n and 5000 × 1.06ⁿ at n = 0 to 5 (author note (a)); differences of 5000 × 1.06ⁿ: 300, 318, 337.08, 357.3048, 378.7431.
- 5000 × 1.06 × n at n = 0, 1: 0, 5300.
- 5000 × 1.06²⁰ = 16 035.6774; 16 035.6774 − 11 000 = 5035.6774.
- 5000 × 1.06¹⁰ = 8954.2385; 8954.2385 − 8000 = 954.2385.
- 5000 × 1.04ⁿ at n = 1 to 4: 5200, 5408, 5624.32, 5849.2928.
- 10 000 + 10 000 × 0.07 × 15 = 20 500; 10 000 × 1.07¹⁵ = 27 590.3154; 10 000 × 0.07 × 1.07 = 749; 10 000 × 0.07 × 1.07² = 801.43.

## Memory aid check

- **"Simple adds: a straight line. Compound multiplies: a curve that bends up."** with key line **"Equal after 1 year (yearly compounding), then compound pulls ahead by more each year."** Original (the site's card 08 states the shapes and "equal at year 1"). Meaning, as said in scene 7: simple interest adds Pr each period, so its graph against time is linear; compound interest multiplies by 1 + r each period, so its graph is exponential, bending upward. Assumptions checked: the same principal and rate; the key line's "equal after 1 year" needs yearly compounding and the same rate (with monthly compounding compound is already slightly ahead at year 1, which the key line's bracket names); r > 0. It helps a new case: $2,000 at 5% for 3 years: simple $2,300, compound $2,315.25, equal at year 1 ($2,100). Introduced after scenes 2 to 6.
- **Considered, not used:** "Line for simple, curve for compound" alone (gives the shapes without the reason).

## Narration length estimate

Revision 2, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,495 characters** (Revision 1: 5,326), 13 scene headings. Characters per scene (1 to 13): 452, 772, 556, 736, 465, 530, 273, 262, 380, 246, 377, 371, 75.

At 13.3 characters per second the speech is about 413 s. Total with the holds and settling below **about 504 s (8 min 24 s)**, 66 s under the 570 s cap; speech and holds before the notes about 459 s (Revision 2 adds about 2 s of settling for the zoom columns).

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the two stacks (2), the graphs (3), the spreadsheet fill (4), the chart rescale (5) and the given graph labels (6) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 6's "Near the start they're almost on top of each other, so look further along." (Revision 2 wording; the grey ring carries it); scene 3's "then three hundred and thirty-seven dollars and eight cents".

## Scene list and build ids

Lesson key `m-s12i05` (route math-s12-i05). Explainer folder `src/explainer/lessons/math-s12-i05`; build inputs in `docs/production/claude-pm/lessons/math-s12-i05/` (at voicing).

In order (13 scene headings): hook-two-accounts, side-by-side, line-and-curve, build-spreadsheet, chart-twenty-years, given-graph, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The shared picture; two accounts |
| 35 to 100 s | 2 | Two stacks and the table |
| 100 to 150 s | 3 | Differences; line and curve |
| 150 to 210 s | 4 | Spreadsheet build and check |
| 210 to 250 s | 5 | Chart; twenty years |
| 250 to 295 s | 6 | A given graph |
| 295 to 315 s | 7 | Framed memory card |
| 315 to 410 s | 8 to 11 | Question cards and countdowns, then feedback |
| 410 to 435 s | 12 | Two-route frame for i06a and i08 |
| 435 to 480 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: the shared picture continues into 1; 1 to 2 stage change; 2 to 3 stage change (axes); 3 to 4 stage change (the grid); 4 to 5 camera continue; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i05-learning-review.md`, `science_check` = `checks/m-s12-i05-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma11-coffee-cart-v1.png` (reused, the anchor); `ma12-coin-jar-v1.png` (reused in scene 2's paid-out jar and the final frame); `ma11-kettlebell-v1.png` (a black cast-iron kettlebell, true alpha; reused in the final frame for i06a's gym chain).

Need (painted, new; see the Codex asset brief): `ms12-term-deposit-certificate-v1.png` (final frame; i08's term deposit; painted one video early). From i03's brief: `ms12-investment-unit-v1.png`. Reused: `ma11-coffee-cart-v1.png`, `ma12-coin-jar-v1.png`, `ma11-kettlebell-v1.png`.

Coded: the account cards, stacks, the table, differences rows, graphs, the spreadsheet and chart, the given graph, the share-table row, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `InterestStack` (both modes, side by side), `StudioPlot`, `SpreadsheetGrid` (chart option), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `ShareTable` (new in i06a) as a static row in the final frame.

Additions (kit-needs row i05): the **Zoom column** (new `InterestStack` part, Revision 2, root's decision 2; one shared part, described in the same words in i01, i02a, i03 and i05): a coded side column standing immediately to the right of the stack, bar or graph it magnifies, headed "zoomed in" in the hand font at 36 px, with a thin grey bracket joining it to the band it shows. It is about 340 px wide for up to three blocks and widens to at most 760 px for more. Inside, the band from a stated lower value to a stated upper value is redrawn on its own scale, at most 520 px tall; when the band does not start at $0, each block's base carries the usual zigzag break. Blocks stand side by side in their colour roles, each labelled beside or above it at 30 to 36 px, and a grey dashed reference line marks a stated level, its value labelled at 30 px. Every interest block or sliver in the column is at least 40 px tall. The full stack keeps its honest $0 base beside the column, so the column adds detail without changing the true picture. Check: in i02a scene 2, the band $90 to $112 at 16 px a dollar shows the $5 and $10.25 olive parts at 80 px and 164 px above the dashed $100 line. Uses here: scene 2 (band $280 to $330, two columns).

Also: **SpreadsheetGrid chart from columns**, with the chart rescaling when the fill extends (shared with i11). Check: at 20 years the chart's last points are (20, 11 000) and (20, 16 035.68).

## Codex asset brief (Maths S12 I05, a term deposit certificate; also i08)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i05.md`, route entry math-s12-i05. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i05 build (its final frame uses it). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-swing-tag-v1.png` and `maths/ma12-coin-jar-v1.png`; no readable text, bank names, logos, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-term-deposit-certificate-v1.png` (about 1300 × 950 px): a formal deposit certificate on cream paper with a decorative border, a few lines of illegible fine print shown as grey strokes, two blank boxes where a coded amount and maturity date can sit, a round embossed seal and a small padlock motif in one corner (money locked in for a term); lying flat with a slight angle.

Report inspection on the paper background (`#f6f1e7`) at 400 px and 220 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i05-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every spreadsheet cell, narration value, attempt and key note against "Numbers used".
2. Confirm the five syllabus quotes match the route-inputs JSON exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm card 08's formulas are used exactly, the first-rows check covers years 0 and 1, and the 20-year value is $16,035.68 (MS-13).
4. Confirm the plain words "straight line" and "curve that bends upwards" come before "linear" and "exponential".
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on the shared picture (i04's final frame, i03's right panel) and scene 12 matches the decisions file's i05 two-route join with no yield shown.
7. Confirm "rates change" is said once, no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Simple vs Compound Interest in a Spreadsheet | Year 12 Maths Standard

(Title length: 68 characters; Revision 2, ruling 37. Revision 1: "Simple vs Compound Interest: Tables, Graphs and Spreadsheets | Year 12 Maths Standard", 85.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson06.sa.html

A coffee cart business puts $5,000 away at 6% a year. One account pays the interest out (simple interest), the other leaves it in (compound interest). Compare them year by year: they are equal after one year, then compound pulls ahead by more every year. See why simple interest adds the same amount and draws a straight line (linear), while compound interest multiplies by the same number and draws a curve that bends upward (exponential). Build both in a spreadsheet, check the first two rows, chart the columns, look twenty years ahead, and read a given graph. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Interest rates change; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans (Standard 2) and Investment (Standard 1). For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Compare the growth of simple interest and compound interest investments numerically and graphically, with and without using digital tools"
"Recognise that simple interest graphs are linear and compound interest graphs are exponential"
"Use a spreadsheet to numerically and graphically model investments using both simple and compound interest"
Syllabus content, Standard 1:
"Compare the growth of simple interest and compound interest investments either numerically or from a given graph"
"Use a spreadsheet to model investments using both simple and compound interest"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf818a3d6 (Standard 1)

Builds on: Inflation and Appreciation (Standard 1) or Rate, Term and Compounding Period (Standard 2). Next: Standard 2, Shares: Dividends and Dividend Yield; Standard 1, Choosing an Investment Strategy.

#Year12Maths #MathsStandard #CompoundInterest #HSCScience

## Open decisions

- **1. The first-rows check (root).** Closed in Revision 2: ruling 34 accepts the check at years 0 and 1 (still log it for the website AI as a teaching note). Revision 1 text: The site checks year 1 only; the design checks years 0 and 1 because the "× A2" slip passes year 1. Confirm, and log for the website AI as a teaching note (not an error: the site's statement is true, just not sufficient).
- **2. Two-route final frame (root).** As i03's: i06a fades the right panel; i07's final frame repeats the right panel full-frame for i08. The alternative is a Standard 1-only ending with i06a opening on its own frame.
- **3. Title length.** Closed in Revision 2: ruling 37 (the shorter alternative is now the title). Revision 1 text: 85 characters; a shorter alternative is "Simple vs Compound Interest in a Spreadsheet | Year 12 Maths Standard" (68).

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-i05-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A. Revision 1 note: Next: student learning review (trace from i03 for Standard 1 and from i04 for Standard 2; check that "equal after one year" lands with its reason, that the plain words come before the names, that the two-row check is followable, that the given-graph scene works for a Standard 1 student, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
