# Maths S12 I09: How does straight-line depreciation work? The same dollars off every year, S = V₀ − Dn, total depreciation, a falling straight line that stops at zero, "first falls below" rounded up, and finding D (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; ruling 12: a06 only previewed depreciation, so this video teaches it from the start; ruling 30: on both paths). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,228 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 482 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i09-learning-review.md` (summary `../checks/m-s12-i01-i11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-standard-outline.md` (1 to 42) and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i01-i11-learning-review-resolution.md`. Findings by the review's numbers:

The review passed this design (0 blockers, 0 should fix). Its two optional findings:

1. Optional, scene 5 ("So seven years isn't enough"): **applied**, reviewer's wording. "Seven drops only take off fifty-one thousand eight hundred, so seven years isn't enough." A grey row "7 × 7400 = 51 800 < 55 000" comes before the round-up strip.
2. Optional, key note 4 (an exact division): **applied** on screen only. Key note 4 now reads "divide the drop by D, round up, check both sides (exactly a whole number: one more year)". The key-notes line spoken in scene 13 is unchanged.

Length: finding 1 adds about 4 s. No trim is needed.

Open decisions closed: 1 (ruling 36). Still open: 2 (the title's Unicode subscript). Joins unchanged: the description's "Builds on" line names i08 by its Revision 2 title.

Narration 5,228 characters by script (Revision 1: 5,168), about 482 s with holds; speech before the notes about 437 s, under the 570 s cap. Feedback speech about 30 s and 24 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Changed values are checked in `work/brief-resolve-standard-i1/verify.py` (SymPy 1.14, `python -I`). Nothing recorded; human listening pending.

Scope: eleventh video of the Year 12 Investment and loans strand, outline playlist order 22. Shared by Standard 1 and Standard 2 (identical content; Standard 2 Investment and loans, Standard 1 Depreciation and loans). Pre-design pack: `../pre-design/maths-standard/math-s12-i09.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson03.sa.html` (SHA256 `ec39ed540dbf06830d2fc9f00f56459edd17426cb88ac8acb5f849bb23ca9131`; the recall question "Does it lose another $6,000 in year two, or something different?"; "Straight-line: S = V₀ − Dn loses the same dollar amount D each year, linear, like simple interest in reverse"; "Total depreciation = V₀ − S"; the salvage value note ("need not equal market price"); "D = (V₀ − Sₙ) ÷ n"; `we-1`, the $85,000 equipment at $7,400 a year, $40,600 after 6 years and "first fall below $30,000" after 8 complete years with its two-sided check; drill 1, $6,200 at $540 a year, $3,500 after 5 years; drill 3, $50,000 to $18,000 in 8 years, D = $4,000). Route entry: `math-s12-i09` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; the tool box (painted for i08's final frame) as the anchor, one new plate for `we-1` (a mini excavator) and one for i10's anchor in the final frame (a ute); value bars, graphs and boards coded.

Owner rules applied: as i01 (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings (depreciation, asset, salvage value, straight-line); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (an apprentice's tools, a landscaper's excavator, small-business machines); money spoken naturally; Australian spelling; no em dashes; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form; MathML in `sourceHtml`, V with subscript 0):

Standard 2 (Investment and loans; group Depreciation and loans):
- `cid762df37`: "Apply the straight-line depreciation method to calculate the depreciation of an asset using the formula S = V_0 - Dn where S = salvage value, V_0 = initial value of the asset, D = depreciation amount per time period and n = number of time periods"

Standard 1 (Depreciation and loans):
- `ci34b68cb8`: "Apply the straight-line depreciation method to calculate the depreciation of an asset using the formula S = V_0 - Dn where S = salvage value, V_0 = initial value of the asset, D = depreciation amount per time period and n = number of time periods"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

**Boundary:** starts from i08's final frame exactly (the tool box `ms12-tool-box-v1.png` with the coded tag "new tools: $6,200"; empty axes "value ($)" and "years"; the grey chip "worth less each year?"; chips "Next: depreciation" and "?"). Recalls i01 (simple interest: the same dollars each period, a straight line from P) and Year 11 (a linear model with a negative gradient) in a phrase or grey chip. Teaches: depreciation as the fall in an asset's value over time (wear, age, newer models); straight-line depreciation takes the same dollar amount D off every period; S = V₀ − Dn with the syllabus letters; total depreciation = Dn = V₀ − S; the graph of S against n, a straight line falling from V₀ by D a year, simple interest in reverse; the model stops at $0, and S is a modelled value, not a sale price; "when does it first fall below" a level, found by dividing the drop by D and rounding up, checked on both sides; finding D from the start and end values. Stops at straight-line depreciation. Not taught: declining balance (i10); comparing methods and the spreadsheet (i11).

## Decisions

- **Anchor: an apprentice's tool kit (painted plate from i08, live).** $6,200 of tools losing $540 a year (the site's drill 1 numbers): 6,200, 5,660, 5,120, 4,580, 4,040, 3,500 at years 0 to 5; total depreciation $2,700 after 5 years; worth $0 after about 11.5 years in the model. Tools are a real asset an apprentice buys. Plate: `ms12-tool-box-v1.png` (briefed in i08). No people.
- **Worked example: the site's `we-1` on a mini excavator (new plate).** A landscaping business's $85,000 mini excavator losing $7,400 a year: $40,600 after 6 years; first below $30,000 after 8 complete years (drop $55,000 ÷ $7,400 = 7.43; 7 years: $33,200, above; 8 years: $25,800, below). The site says "industrial equipment"; the pack names a landscaper's excavator. Plate: `ms12-mini-excavator-v1.png` (new).
- **Finding D: the site's drill 3.** $50,000 to $18,000 in 8 years: D = $32,000 ÷ 8 = $4,000 a year (said with an equal-steps bracket, no rearranging).
- **Notation.** S = V₀ − Dn on screen as the syllabus writes it, read "S equals V nought minus D n" once, then "the starting value". Plain words come first: "the value now is the starting value, minus D for each year".
- **The callback to i01.** A grey ghost of i01's rising simple-interest line, mirrored, sits behind the falling line for one sentence (pack decision).
- **Join.** Scene 1 opens on i08's final frame exactly.
- **Simulations (standard item 3).**
  1. **Value bar losing equal chunks** (scenes 2, 3; `InterestStack` negative mode): a violet bar "$6,200"; each year a blue chunk "$540" breaks off and falls into a pile labelled "depreciation"; a year counter; the bar's label updates; at year 5 the pile reads "$2,700" beside a bracket "V₀ − S".
  2. **Chunks to a line** (scene 4): the bar's height each year becomes a point; a blue line falls through them and on to $0 at 11.5 years, where it stops; the mirrored i01 ghost appears and fades.
  3. **Level line and round-up strip** (scene 5; `StudioLevelLine` and `IntervalPicture`): a dashed amber line at $30,000 across the excavator's falling line; the crossing at n ≈ 7.43 between gridlines; a strip from 7 to 8 with the check values on each side.
- **Colour roles (fixed for i09 to i11).** Starting value V₀ **violet**; D and each year's loss **blue** (the straight-line colour, kept in i11); the salvage value S in ink (framed green as an answer); a level to beat **amber**; total depreciation **blue** pile; mistake **red**, crossed slips only; Standard 2 rows grey.
- **Large type, handwritten voice.** As i01. Hand tags: "the same $540 every year", "S: what it's worth now", "V₀: the starting value", "D: dollars off each year", "total depreciation = D × n", "falls by D a year", "simple interest in reverse", "stops at $0", "a model, not a sale price", "how many $7,400 drops?", "round up", "check both sides", "equal steps". At most two live at once.
- **Stage changes (standard item 2).** i08's frame (1); the bar losing chunks and the table (2); the formula strip and total depreciation (3); the falling line and its stop (4); g01 board, the excavator (5); finding D (6); framed card (7); question cards (8 to 11); the ute for i10 (12); key notes (13).
- **Worked examples (g01 layout).** 5: task strip "A mini excavator was bought for $85 000. It depreciates by $7400 per year using the straight-line method. (a) Find its value after 6 years. (b) After how many complete years does its value first fall below $30 000?" (site `we-1`); givens card "V₀ = $85 000" (violet), "D = $7400" (blue); rows for (a) and (b); grey "Standard 2" row "85 000 − 7400n < 30 000, n > 7.43"; framed answers "$40 600" and "8 years"; crossed slip "7 years" (caption "after 7 years it's still $33 200: round up"). 6: task strip "An asset bought for $50 000 has a salvage value of $18 000 after 8 years. Find D." (site drill 3); framed answer "$4000 per year".
- **Memory aid.** Framed card: "Straight-line: the same dollars off every year." Key line: "S = V₀ − Dn. Total depreciation = V₀ − S = Dn. A straight line down from V₀, stopping at $0."
- **Visual surprise.** The value bar's falling chunks line up into a straight line that is i01's rising line flipped (scene 4).
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` MS-17, MS-18).** The "Common error" box that states a correct fact (MS-17) is not reproduced; the video names the mistake first ("taking a percentage of the current value is the other method, next video"). MS-18's orphan sentence is not used here (it belongs to i11). The site's "10–15%" hook claim is not used (unsourced). The recall question ("another $6,000, or something different?") is asked and only its straight-line half answered (pack decision); its percentage half is i10's opening.
- **Plain meanings at first use.** Depreciation ("an asset losing value over time"); asset ("something owned that has value, like tools or a vehicle"); straight-line ("the same dollar amount lost each period"); salvage value ("the value the model gives after n periods; it need not be what it would sell for"); fully depreciated ("modelled down to $0").
- **Attempts.** A1 (pack question 1): a carpet-cleaning machine, $14,500 at $1,850 a year: $7,100 after 4 years; first below $5,000 after 6 complete years (5 years: $5,250; 6 years: $3,400); crossed "5 years" (caption "after 5 years it's still $5250: round up"). A2 (pack question 2 (a), (b)): a commercial sewing machine, $2,400 with salvage value $600 after 3 years: D = $600; $1,200 after 2 years; crossed "2400 + 600 × 2 = $3600" (caption "depreciation subtracts: S = V₀ − Dn").
- **Mistake scene:** none separate. Adding Dn (3 said, A2 crossed); rounding 7.43 down (5 crossed, A1 crossed); a percentage of the current value (1, 4, said: that's i10); the line below zero (4); depreciation confused with salvage value (3).
- **Cause chain taught, in order:** (1) wear, age and newer models make an asset worth less each year (1); (2) straight-line assumes the same dollar loss D each year, so after n years Dn has gone and S = V₀ − Dn (2, 3); (3) the total lost is what it started at minus what is left, V₀ − S, which is also Dn (3); (4) equal drops make a straight line falling from V₀ with gradient −D, the mirror of simple interest's equal rises (4); (5) a value cannot go below nothing, so the model stops at $0 (4); (6) "first below" asks how many whole years of D-sized drops it takes to fall more than V₀ − level, so the division is rounded up and checked on both sides (5); (7) equal drops between two known values split the total drop into n equal parts, so D = (V₀ − S) ÷ n (6).
- **Entry knowledge (route):** i01 (equal steps, a straight line); Year 11 Standard l03 (a negative gradient), f02 (solving a linear equation, Standard 2 grey row only). Recalled in a phrase or grey chip.
- **Standard 1 path.** "First below" is found by dividing the needed drop by D and rounding up, then checking both sides: arithmetic, not an inequality. Finding D is a division with an equal-steps bracket. The inequality is a grey "Standard 2" row, unspoken.
- **Money and rule sources (root ruling 32).** Prices are examples (realistic NSW 2026 estimates, not quotes). One sentence says businesses really use straight-line at tax time: the ATO calls it "prime cost" (ATO, "Prime cost (straight line) and diminishing value methods", https://ato.gov.au/Business/Depreciation-and-capital-expenses-and-allowances/General-depreciation-rules---capital-allowances/Prime-cost-(straight-line)-and-diminishing-value-methods, cited in the pack of 18 Nov 2026; Codex to re-verify). Narration says once that "rules and prices change".
- **Handoff (to math-s12-i10, "How does declining-balance depreciation work, and why does it look like compound interest?").** Scene 12, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: the new ute plate `ms12-ute-v1.png` (1,000 px wide) at the centre-left with a coded tag "new: $38,500"; at the right empty coded axes ("value ($)", "years"); the grey chip "the same dollars every year, or a percentage of what it's worth now?"; chips "Next: declining-balance depreciation" and "?". No rate is shown. This is i10's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Tools: 6200 − 540n: 6200, 5660, 5120, 4580, 4040, 3500 (n = 0 to 5), 2960 (n = 6); total 2700 at n = 5; zero at 6200 ÷ 540 = 11.48 years. Slip 6200 + 540 × 5 = 8900.
  (b) Excavator: 85 000 − 7400n: 85 000, 77 600, 70 200, 62 800, 55 400, 48 000, 40 600, 33 200, 25 800 (n = 0 to 8); drop 55 000; 55 000 ÷ 7400 = 7.4324.
  (c) Drill 3: (50 000 − 18 000) ÷ 8 = 4000.
  (d) A1: 14 500 − 1850 × 4 = 7100; (14 500 − 5000) ÷ 1850 = 5.135; n = 5: 5250; n = 6: 3400.
  (e) A2: (2400 − 600) ÷ 3 = 600; 2400 − 600 × 2 = 1200; slip 3600.
  (f) Pronunciations: "S equals V nought minus D n"; "eighty-five thousand dollars"; "seven point four three"; "forty thousand six hundred".
  (g) Windows: tools n 0 to 12 years, $0 to $7,000; excavator n 0 to 10, $0 to $90,000 (gridlines every $10,000).

Main question: *$6,200 of new tools lose value every year. How does straight-line depreciation work out what they're worth?*
Entry knowledge (i01; Year 11 Standard l03): equal steps make a straight line; a negative gradient.
Stops after: S = V₀ − Dn, total depreciation, the falling line and its stop, "first below" rounded up, finding D. No declining balance.
Handoff: math-s12-i10: "a $38,500 ute: the same dollars every year, or a percentage of what it's worth now?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): V₀ violet; D and losses blue; level amber; answer green; mistake red. Header strip "MATHEMATICS STANDARD · INVESTMENT AND LOANS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: worth less every year
> So far, money has grown. But most things you buy to use do the opposite. Here's an apprentice's new set of tools, six thousand two hundred dollars. As they wear out, and newer models come along, they're worth less each year. That loss of value is called depreciation, and something you own that has value is called an asset. Does an asset lose the same dollars every year, or something different? Businesses use both answers at tax time, and the rules and prices change. Today, the same dollars. So how does straight-line depreciation **work**?

Visual: opens on i08's final frame exactly (the tool box with "new tools: $6,200", the empty axes, the grey chip, chips). On the first sentence the "Next" chip fades. On "worth less each year" the grey chip "worth less each year?" pulses. On "depreciation" a chip "depreciation: losing value over time"; on "asset" a chip "asset: something owned that has value". On "same dollars every year, or something different" two grey chips "same $ each year?" and "same % each year?"; on "rules and prices change" a grey chip "rules and prices change". On "the same dollars" the "same $" chip turns blue and the "%" chip dims with a tag "next video". On "work" heading "Straight-line depreciation" writes on, and the question chip "What's it worth after n years?" moves to the top right.

### 2. the same dollars off every year
> Say the tools lose five hundred and forty dollars of value every year. That's straight-line depreciation, the same dollar amount lost each **year**. After one year, they're worth six thousand two hundred minus five forty, five thousand six hundred and sixty. After two years, five thousand one hundred and twenty. Then four thousand five hundred and eighty, then four thousand and forty. After five years, they're worth three thousand five hundred **dollars**. Each year, the same five hundred and forty comes **off**.

Visual: stage change: the tool box (400 px) at the top left; a violet value bar "$6,200" (600 px tall) at the centre (simulation 1); a table at the right, 44 px: "year | value". On "year" (bold) hand tag "the same $540 every year". On "five thousand six hundred and sixty" a blue chunk "$540" breaks off the bar and falls into a pile; the bar's label "$5,660"; the table row "1 | 5660". Rows 2 to 4 follow as spoken (5120, 4580, 4040), a chunk each. On "dollars" row "5 | 3500" (framed green), the bar "$3,500". On "off" the five equal chunks in the pile ring, each "$540".

### 3. the formula and total depreciation
> That pattern is the straight-line formula. The salvage value, S, is what the model says it's worth now. It's the starting value, V nought, minus D for each of the n years. So S equals V nought minus D **n**. For the tools, after five years, S is six thousand two hundred minus five hundred and forty times five, three thousand five hundred. The total depreciation is how much value has gone, D times n, two thousand seven hundred dollars. That's also the starting value minus the salvage value, V nought minus **S**. Adding D n instead is the slip. Depreciation always **subtracts**.

Visual: stage change: the formula strip, 64 px: "S = V₀ − Dn" (V₀ violet, D blue), each letter dropping a tag as spoken: "S: what it's worth now (salvage value)", "V₀: the starting value", "D: dollars off each period", "n: number of periods". On "n" (bold) a grey chip "salvage value: the model's value, not a sale price". Rows, 52 px: "S = 6200 − 540 × 5 = $3500" (framed green). The pile from scene 2 sits beside the rows: "total depreciation = 540 × 5 = $2700" (blue), hand tag "total depreciation = D × n". On "S" (bold) a bracket on the bar from $6,200 down to $3,500: "V₀ − S = 6200 − 3500 = $2700". On "subtracts" a red slip "6200 + 540 × 5 = $8900" writes and is crossed (caption "depreciation subtracts: S = V₀ − Dn").

### 4. a straight line down, to zero
> Plot the values against the years, and you get a straight line, falling from six thousand two hundred by five hundred and forty a **year**. It's simple interest in reverse. Simple interest added the same dollars each year, and this takes the same dollars away. Keep going, and the line reaches zero after about eleven and a half years. A value can't go below nothing, so the model stops **there**. And remember, the salvage value is what the model says. The tools might sell for more, or less.

Visual: stage change: axes (n 0 to 12 years, value $0 to $7,000) at the right 65 per cent (simulation 2); the bar at the left. Each year's bar height becomes a point; on "year" (bold) a blue line falls through them, hand tag "falls by D a year", a step triangle "−$540". On "simple interest in reverse" a grey ghost of a rising line from i01 appears, mirrored about the start, with a chip "i01: simple interest"; hand tag "simple interest in reverse"; the ghost fades. On "reaches zero" the line runs to (11.48, 0); on "there" it stops at the axis, hand tag "stops at $0", grey row "6200 ÷ 540 ≈ 11.5 years". On "the model says" hand tag "a model, not a sale price".

### 5. worked example: when does it first fall below?
> Here's a bigger example. A landscaping business buys a mini excavator for eighty-five thousand dollars. It depreciates by seven thousand four hundred a year, straight-line. Find its value after six years, and after how many complete years it first falls below thirty thousand. After six years, it's eighty-five thousand minus seven thousand four hundred times six, forty thousand six hundred **dollars**. To fall below thirty thousand, it has to lose more than fifty-five thousand. Fifty-five thousand divided by seven thousand four hundred is seven point four **three**. Seven drops only take off fifty-one thousand eight hundred, so seven years isn't enough. Check. After seven years, it's thirty-three thousand two hundred, still **above**. After eight, it's twenty-five thousand eight hundred, **below**. So the answer is eight complete years. Answering seven is the **slip**.

Visual: clear change to the g01 board, the excavator `ms12-mini-excavator-v1.png` (600 px wide) at the top right with "$85,000". Task strip, 44 px: "A mini excavator was bought for $85 000. It depreciates by $7400 per year using the straight-line method. (a) Find its value after 6 years. (b) After how many complete years does its value first fall below $30 000?" (site `we-1`). Givens card, 44 px: "V₀ = $85 000" (violet), "D = $7400" (blue). Rows, 52 px: "(a) S = 85 000 − 7400 × 6"; on "dollars" "= $40 600" (framed green). On "more than fifty-five thousand" "(b) drop needed: 85 000 − 30 000 = $55 000", hand tag "how many $7,400 drops?". On "three" "55 000 ÷ 7400 ≈ 7.43"; a small graph (n 0 to 10, $0 to $90,000) with a dashed amber level at $30,000 and the crossing ringed at n ≈ 7.43 (simulation 3). A grey row tagged "Standard 2", 32 px, not spoken: "85 000 − 7400n < 30 000, n > 7.43". On "Seven drops" a grey row, 36 px, "7 × 7400 = 51 800 < 55 000" (Revision 2, review finding 1). On "above" a round-up strip from 7 to 8: "n = 7: 85 000 − 7400 × 7 = $33 200 (above)"; on "below" (bold) "n = 8: $25 800 (below)", hand tags "check both sides" and "round up"; framed answer "8 complete years". On "slip" a red slip "7 years" writes and is crossed (caption "after 7 years it's still $33 200: round up").

### 6. finding D
> Sometimes you know the start and the end, and need D. An asset is bought for fifty thousand dollars, and after eight years, its salvage value is eighteen thousand. It lost thirty-two thousand dollars, in eight equal **steps**. So each step is thirty-two thousand divided by eight, four thousand dollars a **year**. Check it. Fifty thousand minus four thousand times eight is eighteen **thousand**.

Visual: stage change: a falling line from (0, 50 000) (violet) to (8, 18 000) on axes (n 0 to 8, $0 to $55,000). Task strip, 44 px: "An asset bought for $50 000 has a salvage value of $18 000 after 8 years. Find D." (site drill 3). On "thirty-two thousand dollars" a bracket on the value axis "50 000 − 18 000 = $32 000" (blue); on "steps" the line splits into eight equal blue steps, hand tag "equal steps". On "year" row, 52 px: "D = 32 000 ÷ 8 = $4000 per year" (framed green). On "thousand" check row "50 000 − 4000 × 8 = 18 000 ✓".

### 7. memory aid
> Here's the summary. Straight-line depreciation takes the same dollars off every year. So S equals V nought minus D n, and the total depreciation is V nought minus S. The graph is a straight line down from V nought, and it stops at **zero**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the bar losing equal blue chunks beside the falling line stopping at the axis. Main line, hand font 56 px: "Straight-line: the same dollars off every year." On "zero" the key line, 40 px: "S = V₀ − Dn. Total depreciation = V₀ − S = Dn. A straight line down from V₀, stopping at $0." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A carpet-cleaning business buys a machine for fourteen thousand five hundred dollars. It depreciates by one thousand eight hundred and fifty dollars a year, straight-line. Find its value after four years. Then find after how many complete years its value first falls below five thousand dollars. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A carpet-cleaning business buys a cleaning machine for $14 500. It depreciates by $1850 per year using the straight-line method. (a) Find its value after 4 years. (b) After how many complete years does its value first fall below $5000?" Picture slot: empty axes, n 0 to 8 years, $0 to $15,000, with a dashed level at $5,000. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> After four years, it's fourteen thousand five hundred minus eighteen fifty times four, seven thousand one **hundred**. To fall below five thousand, it must lose more than nine thousand five hundred. Divided by eighteen fifty, that's about five point one **four**. After five years, it's still five thousand two hundred and fifty. After six, three thousand four hundred. So six **years**. Five is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "14 500 − 1850 × 4"; on "hundred" "= $7100" (framed green). "drop needed: 14 500 − 5000 = 9500"; on "four" "9500 ÷ 1850 ≈ 5.14". The round-up strip: "n = 5: $5250 (above)", "n = 6: $3400 (below)"; on "years" framed "6 complete years". On "slip" a red slip "5 years" writes and is crossed (caption "after 5 years it's still $5250: round up"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A commercial sewing machine costs two thousand four hundred dollars. Using straight-line depreciation, its salvage value after three years will be six hundred dollars. Find the depreciation per year. Then find its value after two years. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A commercial sewing machine costs $2400. Using straight-line depreciation, it will have a salvage value of $600 after 3 years. (a) Find the depreciation per year. (b) Find its value after 2 years." Picture slot: empty axes, n 0 to 3 years, $0 to $2,500. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> It loses eighteen hundred dollars in three equal steps, so D is six hundred dollars a **year**. After two years, it's twenty-four hundred minus six hundred times two, twelve hundred **dollars**. The graph is a straight line from twenty-four hundred down to six hundred. Adding the depreciation is the **slip**. Depreciation subtracts.

Visual: the card shrinks to the top. Rows, 44 px: "2400 − 600 = 1800; 1800 ÷ 3"; on "year" "D = $600 per year" (framed green). On "dollars" "2400 − 600 × 2 = $1200" (framed green). The line draws from (0, 2400) (violet) to (3, 600) in three blue steps. On "slip" a red slip "2400 + 600 × 2 = $3600" writes and is crossed (caption "depreciation subtracts: S = V₀ − Dn"). Hold about 1 s.

### 12. handoff
> Straight-line takes the same dollars every year. But think about a new car, or a ute. Does a forty-thousand-dollar ute really lose the same amount in its tenth year as in its first? Or does it lose a percentage of whatever it's worth at the time? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`): on "a ute" the ute `ms12-ute-v1.png` (1,000 px wide) at the centre-left with the coded tag "new: $38,500"; on "tenth year" empty axes at the right ("value ($)", "years"); on "a percentage" the grey chip "the same dollars every year, or a percentage of what it's worth now?". On "next" chips "Next: declining-balance depreciation" and "?". Hold about 2 s. No rate shown. This is i10's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Straight-line: the same $D lost every period.
- S = V₀ − Dn (S salvage value, V₀ starting value).
- Total depreciation = V₀ − S = Dn. D = (V₀ − S) ÷ n.
- "First below": divide the drop by D, round up, check both sides (exactly a whole number: one more year).
- Graph: a straight line down from V₀; stops at $0.

Memory aid (framed card, right side, as in scene 7): *Straight-line: the same dollars off every year.* Key: *S = V₀ − Dn. Total depreciation = V₀ − S = Dn. A straight line down from V₀, stopping at $0.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i10's opening frame.

## Teaching checks

- **Does it explain causes?** Why S = V₀ − Dn: n equal losses of D (2, 3). Why total depreciation is both Dn and V₀ − S: what has gone (3). Why a straight line: equal drops (4). Why it stops: no negative value (4). Why round up: a whole number of years must be enough to pass the level (5). Why D = drop ÷ n: equal steps (6).
- **Misconceptions addressed:** adding Dn (3, A2 crossed); rounding down (5 crossed, A1 crossed); a percentage of the current value (1, 12: next video); the line below zero (4); depreciation against salvage value (3).
- **Visual standard, item by item:** 1 the tool box from the first frame, the excavator in 5; 2 a new stage every 40 to 60 s; 3 a value bar losing equal chunks into a pile, chunks becoming a falling line with i01's ghost mirrored, a level line crossed between gridlines with a two-sided strip, a drop split into equal steps; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards with framed answers and a crossed slip; 8 framed card and five bullets; 9 i01's line flipped.
- **One idea at a time:** equal losses (2), formula and total (3), the graph (4), first below (5), finding D (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s and 24 s.
- **Avoided double teaching:** i01's straight line recalled as a ghost; no re-teaching of linear graphs.
- **Standard 1 path:** division and checking only; the inequality is a grey "Standard 2" row.
- **Syllabus coverage:** `cid762df37` and `ci34b68cb8` (2 to 6, A1, A2; key notes 1 to 5).
- **Out of scope by design:** declining balance (i10); comparison and spreadsheet (i11).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme).** "A carpet-cleaning business buys a cleaning machine for $14 500. It depreciates by $1850 per year using the straight-line method. (a) Find its value after 4 years. (b) After how many complete years does its value first fall below $5000?"
Model answer: (a) S = 14 500 − 1850 × 4 = $7100. (b) It must lose more than 14 500 − 5000 = $9500; 9500 ÷ 1850 ≈ 5.14 (Standard 2: 14 500 − 1850n < 5000, n > 5.14). After 5 years: $5250 (not yet below); after 6 years: $3400. So 6 complete years. Classic mistake (crossed): "5 years".

**Attempt 2 (scene 10; pack question 2 (a), (b), 2 marks suggested).** "A commercial sewing machine costs $2400. Using straight-line depreciation, it will have a salvage value of $600 after 3 years. (a) Find the depreciation per year. (b) Find its value after 2 years."
Model answer: (a) D = (2400 − 600) ÷ 3 = $600 per year. (b) 2400 − 600 × 2 = $1200. Classic mistake (crossed): "2400 + 600 × 2 = $3600".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Tools | 6200, 5660, 5120, 4580, 4040, 3500; total 2700; zero at ≈ 11.5 years; slip 8900 | 1 to 4 |
| Excavator | 40 600 after 6 years; drop 55 000; 7.43; 33 200 (7 years); 25 800 (8 years) | 5 |
| Drill 3 | 32 000 ÷ 8 = 4000; check 18 000 | 6 |
| A1 | 7100; 9500; 5.14; 5250; 3400; 6 years | 8, 9 |
| A2 | 1800 ÷ 3 = 600; 1200; slip 3600 | 10, 11 |
| Handoff | $38,500 (no rate) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 6200 − 540n at n = 0 to 6: 6200, 5660, 5120, 4580, 4040, 3500, 2960; 540 × 5 = 2700; 6200/540 = 11.4815; 6200 + 2700 = 8900.
- 85 000 − 7400 × 6 = 40 600; 55 000/7400 = 7.4324; 85 000 − 7400 × 7 = 33 200; × 8: 25 800.
- (50 000 − 18 000)/8 = 4000; 50 000 − 32 000 = 18 000.
- 14 500 − 1850 × 4 = 7100; 9500/1850 = 5.1351; 14 500 − 1850 × 5 = 5250; × 6: 3400.
- (2400 − 600)/3 = 600; 2400 − 1200 = 1200; 2400 + 1200 = 3600.

## Memory aid check

- **"Straight-line: the same dollars off every year."** with key line **"S = V₀ − Dn. Total depreciation = V₀ − S = Dn. A straight line down from V₀, stopping at $0."** Original (the site's "loses the same dollar amount D each year ... like simple interest in reverse"). Meaning, as said in scene 7: each period removes D dollars, so after n periods the modelled value is V₀ − Dn, and the graph is linear with gradient −D. Assumptions checked: D is constant and per period, with n in the same periods; the model applies only while S ≥ 0 (the stop at $0); S is a modelled value, not a market price (scene 4); a percentage-of-current-value rule is a different method (i10), named in scene 1. It helps a new case: a $3,000 laptop at $600 a year is worth $1,200 after 3 years and $0 after 5. Introduced after scenes 2 to 6.
- **Considered, not used:** "Minus D, n times" (drops the graph and the stop).

## Narration length estimate

Revision 2, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,228 characters** (Revision 1: 5,168), 13 scene headings. Characters per scene (1 to 13): 540, 506, 571, 485, 860, 385, 236, 328, 393, 268, 322, 259, 75.

At 13.3 characters per second the speech is about 393 s. Total with the holds and settling below **about 482 s (8 min 2 s)**, 88 s under the 570 s cap; speech and holds before the notes about 437 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the chunks (2), the line (4), the round-up strip (5) and the steps (6) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 4's "And remember, the salvage value is what the model says. The tools might sell for more, or less." (the chip carries it); scene 1's "and something you own that has value is called an asset".

## Scene list and build ids

Lesson key `m-s12i09` (route math-s12-i09). Explainer folder `src/explainer/lessons/math-s12-i09`; build inputs in `docs/production/claude-pm/lessons/math-s12-i09/` (at voicing).

In order (13 scene headings): hook-worth-less, same-dollars, formula-total, straight-line-to-zero, worked-excavator, finding-d, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds): 0 to 45 s i08's frame (1); 45 to 90 s the bar losing chunks (2); 90 to 145 s the formula and total (3); 145 to 185 s the line to zero (4); 185 to 265 s g01 board, the excavator (5); 265 to 295 s finding D (6); 295 to 315 s memory card (7); 315 to 405 s attempts and feedback (8 to 11); 405 to 425 s the ute for i10 (12); 425 to 470 s key notes (13).

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i08's last frame continues into 1; 1 to 2 stage change; 2 to 3 stage change; 3 to 4 stage change (axes); 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i09-learning-review.md`, `science_check` = `checks/m-s12-i09-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma11-studio-speakers-v1.png` (music gear; not used: i01 used it for a loan, and the pack's PA example is avoided here); `ma11-trade-van-v1.png` (used in i07; not reused, to keep i09's objects distinct); no excavator, tool box or ute plate exists.

Need (painted, new; see the Codex asset brief): `ms12-mini-excavator-v1.png` (scene 5); `ms12-ute-v1.png` (final frame; i10's anchor; painted one video early). From i08's brief: `ms12-tool-box-v1.png` (the anchor).

Coded: the value bar, chunks and pile, the table, the formula strip, every graph, level line and round-up strip, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `InterestStack` (negative mode), `StudioPlot`, `StudioLevelLine` (`trig-parts.tsx`), `IntervalPicture` (`extras.tsx`), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i09): **InterestStack negative mode** (small): equal blocks leave the bar and fall into a "depreciation" pile. Check: five $540 chunks leave $3,500 and a $2,700 pile. **Floor at zero on `StudioPlot`** (shared with i11). Check: the tools line ends at (11.48, 0).

## Codex asset brief (Maths S12 I09, a mini excavator and a ute; the ute is also i10's anchor)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-i09.md`, route entry math-s12-i09. Paint after the learning review and maths check pass and root gives the go-ahead, and before the i09 build (scene 5 and the final frame use them). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-delivery-van-v1.png` and `maths/ma11-trade-van-v1.png`; no text, brand names, logos, number plates, people (no operator in the cab), hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-mini-excavator-v1.png` (about 1500 × 1100 px): a compact mini excavator in side three-quarter view, rubber tracks, a small enclosed cab with an empty seat, the boom and arm raised with a digging bucket, in a muted yellow, a little dust on the tracks.
2. `ms12-ute-v1.png` (about 1800 × 900 px): a new dual-cab ute in plain side view (facing right), a tray-style or tub back, a white or silver body, black wheels and bull-bar-free front, clean and new; no decals or plates.

Report inspection on the paper background (`#f6f1e7`) at 600 px and 1,000 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-i09-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly ("S = V_0 - Dn" in the text form), with the Standard 1 and Standard 2 labels and pages correct.
3. Confirm the site's `we-1`, drill 1 and drill 3 numbers are used unchanged, and MS-17's box is not reproduced.
4. Confirm every "first below" answer is rounded up and checked on both sides, and the inequality appears only as a grey Standard 2 row.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on i08's final frame and scene 12 matches the decisions file's i09 to i10 join with no rate shown.
7. Confirm the ATO sentence and "rules and prices change" each appear once, no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Straight-Line Depreciation: S = V₀ − Dn | Year 12 Maths Standard

(Title length: 64 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson03.sa.html

An apprentice's $6,200 tool kit loses $540 of value every year. Straight-line depreciation takes the same dollars off each year, so S = V₀ − Dn, and the total depreciation is V₀ − S. See why the graph is a straight line falling from V₀ (simple interest in reverse) and why the model stops at zero. Then work out when a $85,000 mini excavator first falls below $30,000 by dividing and rounding up, checking both sides, and find the yearly depreciation from a start and end value. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Depreciation rules and prices change; the values here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans (Standard 2) and Depreciation and loans (Standard 1). For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Apply the straight-line depreciation method to calculate the depreciation of an asset using the formula S = V_0 - Dn where S = salvage value, V_0 = initial value of the asset, D = depreciation amount per time period and n = number of time periods"
Syllabus content, Standard 1:
"Apply the straight-line depreciation method to calculate the depreciation of an asset using the formula S = V_0 - Dn where S = salvage value, V_0 = initial value of the asset, D = depreciation amount per time period and n = number of time periods"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

Builds on: Choosing an Investment Strategy. Next: Declining Balance Depreciation and Compound Interest.

#Year12Maths #MathsStandard #Depreciation #HSCScience

## Open decisions

- **1. "V nought" (root).** Closed in Revision 2: ruling 36 ("V nought, the starting value" at first use, as scene 3 already says). Revision 1 text: The narration reads V₀ once as "V nought", then says "the starting value". Some teachers say "V zero" or "V sub zero"; confirm the reading.
- **2. Title subscript.** The title uses "V₀" (a Unicode subscript); if YouTube or search tools mangle it, use "S = V0 − Dn".

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-i09-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A. Revision 1 note: Next: student learning review (trace from i08; check that the equal chunks make S = V₀ − Dn obvious before the letters, that V₀ − S and Dn read as the same total, that the stop at zero and "not a sale price" are clear, that the round-up check is followable without an inequality, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
