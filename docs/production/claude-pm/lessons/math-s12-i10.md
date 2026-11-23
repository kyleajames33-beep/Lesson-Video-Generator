# Maths S12 I10: How does declining-balance depreciation work, and why does it look like compound interest? A percentage of the current value, the part kept (1 − r), S = V₀(1 − r)ⁿ, shrinking yearly losses, a curve that never reaches zero, and the formula beside FV = PV(1 + r)ⁿ (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a04a.md`, `a04b.md`, `a06.md`, each at Revision 2, and the faults logged in `../checks/m-s12-a01-a06-learning-review-resolution.md`) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 33; ruling 33 keeps finding r with a root out of this video's demands; ruling 30: on both paths). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,093 characters by script (see "Narration length estimate"; Revision 2), 12 scene headings, about 472 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-i10-learning-review.md` (summary `../checks/m-s12-i01-i11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-standard-outline.md` (1 to 42) and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-i01-i11-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 3 ("V nought" without its meaning, ruling 36): **accepted**, reviewer's wording. "S equals V nought, the starting value, times one minus r, to the power of n." The formula strip's V₀ drops a 36 px tag "V₀: the starting value" beside "1 − r: the part kept".
2. Optional, scene 3 (the r × n × V₀ slip has no reason yet): **applied**. "... is the **slip**, because after the first year, it's twenty-two per cent of a smaller value." Hand tag "a % of a smaller value" on the crossed slip.
3. Optional, attempt 2 (a 15% investment): **applied**, reviewer's 8%. "Five thousand dollars is invested at eight per cent a year compound interest, and a five-thousand-dollar machine depreciates at eight per cent a year declining balance." Answers $5,832.00 and $4,232.00; feedback 2 says "five thousand eight hundred and thirty-two dollars" and "four thousand two hundred and thirty-two **dollars**" (the cue "dollars" replaces "fifty"); the crossed slip is "machine: 5000 × 1.08²" (caption "depreciation keeps 92%: × 0.92"). The card, model answer, decisions and numbers are updated.

Length: findings 1 and 2 add about 7 s; finding 3 is about the same length. No trim is needed.

Open decisions closed: 2. Decision 1 is backed by the review and left for root to confirm. Joins unchanged.

Narration 5,093 characters by script (Revision 1: 5,001), about 472 s with holds; speech before the notes about 427 s, under the 570 s cap. Feedback speech about 28 s and 29 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Changed values are checked in `work/brief-resolve-standard-i1/verify.py` (SymPy 1.14, `python -I`). Nothing recorded; human listening pending.

Scope: twelfth video of the Year 12 Investment and loans strand, outline playlist order 23. Shared by Standard 1 and Standard 2. The comparison with the compound interest formula is a Standard 1 point in wording (`cid65c76c0`); both courses see it, because it explains the formula. Pre-design pack: `../pre-design/maths-standard/math-s12-i10.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/investment-and-loans/lesson03.sa.html` (SHA256 `ec39ed540dbf06830d2fc9f00f56459edd17426cb88ac8acb5f849bb23ca9131`; "reduces the asset's value by a fixed percentage of its current value each period, so the dollar amount of depreciation decreases"; "The multiplier is (1 − r), e.g. 1 − 0.18 = 0.82"; the Insight box, "structurally identical to A = P(1 + r)ⁿ ... just subtraction instead of addition inside the bracket"; "Model limits ... S approaches zero but does not reach it"; `we-2`, a $38,500 vehicle at 22% p.a. declining balance, $18,270.25 after 3 years and $20,229.75 total; Traps 02 and 03). `we-4` (finding r) is left out (pack pace flag; the syllabus asks to calculate the depreciation). Route entry: `math-s12-i10` in `../../programme/maths-standard-route-inputs-2.json`. Visual system: maths studio kit; the ute (painted for i09's final frame) as the anchor; the reused delivery van in the final frame; ladders, bars, curves and the formula twin coded.

Owner rules applied: as i01 (2024 syllabus; plates for real objects, code for diagrams; no people; one question; one stage at a time; words before symbols; plain meanings (declining balance, depreciation rate, the part kept); g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a new ute, a food truck, a machine and an investment); money spoken naturally and to the cent; Australian spelling; no em dashes; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-2.json` (text form):

Standard 2 (Investment and loans; group Depreciation and loans):
- `cif830811b`: "Apply the declining balance method to calculate the depreciation of an asset using the formula S = V_0(1 - r)^n where S = salvage value, V_0 = initial value of the asset, r = depreciation rate per time period and n = number of time periods"

Standard 1 (Depreciation and loans):
- `ciffbbac75`: "Apply the declining balance method to calculate the depreciation of an asset using the formula S = V_0(1 - r)^n where S = salvage value, V_0 = initial value of the asset, r = depreciation rate per time period and n = number of time periods"
- `cid65c76c0`: "Explain the similarities and differences between the declining balance formula and the compound interest formula"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

**Boundary:** starts from i09's final frame exactly (the ute `ms12-ute-v1.png` with the coded tag "new: $38,500"; empty axes "value ($)" and "years"; the grey chip "the same dollars every year, or a percentage of what it's worth now?"; chips "Next: declining-balance depreciation" and "?"). Recalls i09 (S, V₀, n; total depreciation = V₀ − S; the straight line) and i02a (FV = PV(1 + r)ⁿ; × (100% + r%) each period) in a phrase or grey chip; a06's "the part you keep" is a Standard 2 grey chip only. Teaches: declining-balance depreciation takes the same percentage r of the current value each period; the part kept is 100% − r%, so each year multiplies by 1 − r (22% gives 0.78, not 1.22); S = V₀(1 − r)ⁿ; total depreciation = V₀ − S (never r × n × V₀); the yearly loss shrinks, because it is a percentage of a smaller value; the graph is a curve that falls steeply, then flattens, and in the model never reaches zero; similarities with compound interest (a starting value times a multiplier to the power n; the same calculator steps; r and n per period) and differences (1 − r against 1 + r; falling against growing; each change shrinking against growing). Stops at calculating declining-balance depreciation and comparing the formulas. Not taught: finding r from two values (site `we-4`); comparing the two depreciation methods and the spreadsheet (i11).

## Decisions

- **Anchor: a new ute (painted plate from i09, live).** $38,500 at 22% a year declining balance (the site's `we-2` numbers, on the ute that the pack's question 1 names): 30,030.00, 23,423.40, 18,270.25 after 1 to 3 years; yearly losses $8,470.00, $6,606.60, $5,153.15; total $20,229.75; after 10 years about $3,209.27, still above zero. Plate: `ms12-ute-v1.png` (briefed in i09). No people.
- **The formula twin (`cid65c76c0`; pack decision).** Original, round numbers so the pattern shows: $10,000 growing at 20% (12,000, 14,400, 17,280; changes +2,000, +2,400, +2,880) beside $10,000 depreciating at 20% (8,000, 6,400, 5,120; changes −2,000, −1,600, −1,280). The same parts light together, then the differences light in a second colour.
- **Real-world sentence (ruling 32).** The ATO's diminishing value method for a car with an 8-year effective life uses 200% ÷ 8 = 25% a year (ATO, "Prime cost (straight line) and diminishing value methods", https://ato.gov.au/Business/Depreciation-and-capital-expenses-and-allowances/General-depreciation-rules---capital-allowances/Prime-cost-(straight-line)-and-diminishing-value-methods, and the ATO's effective life guide, cited in the pack of 18 Nov 2026; Codex to re-verify). One sentence; no calculation. The 22% is the site's example rate. Narration says once "rules and rates change".
- **Notation.** S = V₀(1 − r)ⁿ on screen as the syllabus writes it. The multiplier is said in words first, "a hundred per cent minus twenty-two per cent, the part kept", then "zero point seven eight" (a06 Revision 2's wording, so learner copy never shows a bare "1 − r" before the formula).
- **Join.** Scene 1 opens on i09's final frame exactly and answers its chip: "a percentage of what it's worth now".
- **Simulations (standard item 3).**
  1. **Value tag ladder** (scene 2; `StudioTermLadder`): the ute's tag steps $38,500 → × 0.78 → $30,030 → × 0.78 → $23,423.40 → × 0.78 → $18,270.25; a kept-and-lost bar under each step (78% olive kept, 22% grey lost).
  2. **Shrinking losses** (scene 4; `GrowthBars` downward): three olive bars $8,470, $6,606.60, $5,153.15, beside i09's equal blue bars as a grey ghost for contrast.
  3. **Curve toward the axis** (scene 4; `StudioPlot` with `AxisShadow`): the olive curve falls steeply, then flattens, running to 10 years ($3,209.27) and on, never touching the axis; a readout of the value as a dot rides the curve.
  4. **Formula twin** (scene 5; new small `FormulaTwin`): FV = PV(1 + r)ⁿ above S = V₀(1 − r)ⁿ; matching parts light together (start, multiplier, power); then "+" and "−", "grows" and "falls", and the two change rows light in amber; beside them two curves from $10,000, one rising (teal), one falling (olive).
- **Colour roles (fixed for i09 to i11).** V₀ (and PV) **violet**; the rate and multiplier **amber**; declining balance (the curve, losses, the kept part) **olive**; straight-line ghosts **blue**; compound growth **teal** (in the twin); answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As i01. Hand tags: "a % of what it's worth now", "the part kept", "100% − 22% = 78%", "× 0.78 each year", "total = V₀ − S", "losses shrink", "a % of a smaller value", "never reaches $0 (model)", "real utes get sold or scrapped", "same shape", "+ grows, − falls", "changes grow / changes shrink". At most two live at once.
- **Stage changes (standard item 2).** i09's frame answered (1); the ladder and kept bars (2); g01 board, the formula and total (3); shrinking losses and the curve (4); the formula twin (5); framed card (6); question cards (7 to 10); the delivery van for i11 (11); key notes (12).
- **Worked example (g01 layout).** 3: task strip "A ute is bought new for $38 500 and depreciates at 22% p.a. using the declining-balance method. Find (a) its value after 3 years (b) the total depreciation." (site `we-2`); formula strip "S = V₀(1 − r)ⁿ"; givens card "V₀ = $38 500" (violet), "r = 22% = 0.22, keep 78% = 0.78" (amber), "n = 3"; rows "S = 38 500 × 0.78³ = 18 270.252 ≈ $18 270.25", "total = 38 500 − 18 270.25 = $20 229.75"; crossed slip "0.22 × 3 × 38 500 = $25 410" (caption "total depreciation = V₀ − S").
- **Memory aid.** Framed card: "Declining balance: keep the same percentage each year." Key line: "S = V₀(1 − r)ⁿ (22% off: × 0.78). Total = V₀ − S. Like compound interest, but − instead of +."
- **Visual surprise.** The same ladder as i02a, run with × 0.78, makes losses that shrink while compound interest's gains grow (scenes 4, 5); the curve rides on towards the axis and never touches it (scene 4).
- **Site notes (pack section 8).** No numerical error in the declining-balance parts of lesson03. Trap 02 (1 + r) is crossed in scene 2; Trap 03 (r × n × V₀) in scene 3. `we-4` (a fourth root for r) is left out (pack; ruling 33's spirit for Standard). The card's $32,000 at 18% is not used (a06 used 18% on a car).
- **Plain meanings at first use.** Declining balance ("the same percentage of the current value taken off each period"); depreciation rate r ("the percentage lost each period, as a decimal"); the part kept ("100% minus the rate").
- **Attempts.** A1 (pack question 1 numbers, on a food truck so the anchor is not repeated): $46,000 at 20%: $23,552 after 3 years; total $22,448; crossed "0.2 × 3 × 46 000 = $27 600" (caption "total depreciation = V₀ − S"). A2 (pack question 2): $5,000 invested at 8% p.a. compound (Revision 2; Revision 1 used 15%) and a $5,000 machine at 8% declining balance: $5,832.00 and $4,232.00; one similarity and one difference; crossed "5000 × 1.08² for the machine" (caption "depreciation keeps 92%: × 0.92").
- **Mistake scene:** none separate. 1 + r as the multiplier (2 crossed, A2 crossed); r itself as the multiplier (2, said); r × n × V₀ for the total (3 crossed, A1 crossed); expecting zero after 100 ÷ r years (4, said); "the two formulas are the same" (5).
- **Cause chain taught, in order:** (1) a ute's value falls fastest when it is newest, so a percentage of the current value fits better than a fixed dollar amount (1); (2) losing r% keeps 100% − r%, so each year multiplies by 1 − r (2); (3) n years are n multiplications, so S = V₀(1 − r)ⁿ, and the total lost is what it started at minus what is left (3); (4) each loss is r times a smaller value, so the losses shrink and the curve flattens (4); (5) multiplying a positive value by 0.78 never gives zero, so the model never reaches zero, though a real ute is eventually sold or scrapped (4); (6) the compound interest formula has the same shape, a start times a multiplier to the power n, but adds r, so its value and its yearly changes grow, while declining balance subtracts r, so its value and its yearly changes shrink (5).
- **Entry knowledge (route):** i09 (V₀, S, n, total depreciation; a straight line); i02a (FV = PV(1 + r)ⁿ); a05 (an exponential decay curve, both courses); a06 (Standard 2 only: the part kept). Recalled in a phrase or grey chip.
- **Standard 1 path.** Identical; scene 5 is Standard 1's `cid65c76c0` and is spoken for both. Substitution and the calculator only.
- **Handoff (to math-s12-i11, "Which depreciation method loses value faster, and how does a spreadsheet compare them?").** Scene 11, specified precisely in `../checks/root-decisions-maths-s12-i01-i11.md`: the delivery van `ma12-delivery-van-v1.png` (1,000 px wide) at the top with a coded tag "$40,000"; two chips under it, "straight-line: $6,000 a year" (blue) and "declining balance: 20% a year" (olive); the grey chip "which loses value faster?"; chips "Next: comparing the two methods" and "?". No values after year 0. This is i11's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Ute: 38 500 × 0.78ⁿ: 30 030, 23 423.4, 18 270.252 (n = 1 to 3); n = 10: 3209.2737; losses 8470, 6606.60, 5153.148 ≈ 5153.15; total 20 229.748 ≈ 20 229.75 (8470 + 6606.60 + 5153.15 = 20 229.75). Slips: 0.22 × 3 × 38 500 = 25 410; 38 500 × 1.22³ = 69 910.15; 38 500 × 0.22³ = 409.95.
  (b) Twin: 10 000 × 1.2ⁿ: 12 000, 14 400, 17 280; 10 000 × 0.8ⁿ: 8000, 6400, 5120.
  (c) A1: 46 000 × 0.8³ = 23 552; total 22 448; slip 27 600.
  (d) A2 (Revision 2, 8%): 5000 × 1.08² = 5832.00; 5000 × 0.92² = 4232.00.
  (e) ATO sentence: 200% ÷ 8 = 25% (no calculation shown).
  (f) Pronunciations: "S equals V nought times one minus r, to the power of n"; "zero point seven eight"; "eighteen thousand two hundred and seventy dollars and twenty-five cents".

Main question: *A new $38,500 ute loses 22% of its value each year. How does declining-balance depreciation work, and why does it look like compound interest?*
Entry knowledge (i09, i02a, a05): straight-line depreciation; FV = PV(1 + r)ⁿ; a decay curve.
Stops after: S = V₀(1 − r)ⁿ, total depreciation, the shrinking losses and curve, the formula comparison. No finding r, no comparison of methods.
Handoff: math-s12-i11: "a $40,000 van: $6,000 a year or 20% a year: which loses value faster?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): V₀ violet; rate and multiplier amber; declining balance olive; straight-line ghosts blue; compound growth teal; answer green; mistake red. Header strip "INVESTMENT AND LOANS" (topic only; root ruling 23 Nov 2026: no course name on screen). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a percentage of what it's worth now
> Here's a new ute, thirty-eight thousand five hundred dollars. A ute loses the most value when it's new, and less as it gets older. So instead of the same dollars every year, it makes more sense to take the same percentage of whatever it's worth now. Say twenty-two per cent a year. That's called declining-balance depreciation. The tax office uses a method like this for cars too, though the rules and rates **change**. So how does declining balance work, and why does it look so much like compound **interest**?

Visual: opens on i09's final frame exactly (the ute with "new: $38,500", the empty axes, the grey chip, chips). On the first sentence the "Next" chip fades. On "loses the most value when it's new" a small grey sketch of a curve falling steeply then flattening on the empty axes. On "the same percentage of whatever it's worth now" the grey chip's second half "a percentage of what it's worth now" turns olive, hand tag "a % of what it's worth now". On "twenty-two per cent" an amber tag "22% a year". On "change" a grey chip "ATO: a method like this for cars; rules and rates change". On "interest" (bold) heading "Declining-balance depreciation" writes on, with a grey chip "i02a: FV = PV(1 + r)ⁿ", and the question chip "Why does it look like compound interest?" moves to the top right.

### 2. keep seventy-eight per cent
> If the ute loses twenty-two per cent each year, it keeps a hundred per cent minus twenty-two per cent, which is seventy-eight per **cent**. Per cent means out of a hundred, so each year, its value is multiplied by zero point seven **eight**. Thirty-eight thousand five hundred, times zero point seven eight, is thirty thousand and thirty. Times zero point seven eight again is twenty-three thousand four hundred and twenty-three dollars forty. And again, eighteen thousand two hundred and seventy dollars and twenty-five **cents**. Multiplying by one point two two is the **slip**. That would make the ute grow in value.

Visual: stage change: the ute (600 px) at the top left with its tag; the ladder (simulation 1), 52 px, across the middle: "$38,500" (violet) "→ × 0.78 → $30,030 → × 0.78 → $23,423.40 → × 0.78 → $18,270.25". On "cent" (first bold) a bar under the first rung, 100% wide: 78% olive "kept", 22% grey "lost", row "100% − 22% = 78%", hand tag "the part kept"; grey chip "Standard 2, a06: the part you keep". On "eight" "= 0.78" (amber), hand tag "× 0.78 each year". On "thirty thousand and thirty" the first rung fills and the ute's tag rewrites; then "$23,423.40". On "cents" "$18,270.25" (framed green). On "slip" a red slip "38 500 × 1.22³" writes and is crossed (caption "1.22 means growth: keep 78%, × 0.78").

### 3. the formula and the total
> Three years, three multiplications, so the formula is S equals V nought, the starting value, times one minus r, to the power of n. Here, r is the rate as a decimal, and one minus r is the part kept. For the ute, S is thirty-eight thousand five hundred times zero point seven eight cubed, eighteen thousand two hundred and seventy dollars and twenty-five **cents**. The total depreciation is still what it started at, minus what's left. Thirty-eight thousand five hundred minus eighteen thousand two hundred and seventy dollars twenty-five is twenty thousand two hundred and twenty-nine dollars and seventy-five **cents**. Taking twenty-two per cent, times three, of the price is the **slip**, because after the first year, it's twenty-two per cent of a smaller value.

Visual: clear change to the g01 board, the ute (300 px) at the top right. Task strip, 44 px: "A ute is bought new for $38 500 and depreciates at 22% p.a. using the declining-balance method. Find (a) its value after 3 years (b) the total depreciation." (site `we-2`). Formula strip, 52 px: "S = V₀(1 − r)ⁿ" (V₀ violet, 1 − r amber), tags "S: value after n years", "V₀: the starting value" (36 px, on "the starting value"; Revision 2, review finding 1, ruling 36), "1 − r: the part kept". Givens card, 44 px: "V₀ = $38 500" (violet), "r = 22% = 0.22, keep 0.78" (amber), "n = 3". Rows, 52 px: "S = 38 500 × 0.78³ = 18 270.252"; on "cents" (first) "≈ $18 270.25" (framed green). On "what it started at, minus what's left" grey chip "i09: total = V₀ − S", hand tag "total = V₀ − S". On "cents" (second) "38 500 − 18 270.25 = $20 229.75" (framed green). On "slip" a red slip "0.22 × 3 × 38 500 = $25 410" writes and is crossed (caption "total depreciation = V₀ − S"); on "smaller value" hand tag "a % of a smaller value" (Revision 2, review finding 2).

### 4. shrinking losses, and a curve
> Look at what's lost each year. Eight thousand four hundred and seventy dollars in year one, then six thousand six hundred and six dollars sixty, then five thousand one hundred and fifty-three dollars fifteen. The losses **shrink**, because each one is twenty-two per cent of a smaller value. So the graph is a curve. It falls steeply at first, then flattens **out**. After ten years, the model still says about three thousand two hundred dollars. Seventy-eight per cent of something is never zero, so in the model, the value never reaches **zero**. A real ute, of course, gets sold or scrapped.

Visual: stage change: three olive bars (simulation 2) at the left: "$8,470", "$6,606.60", "$5,153.15", each labelled in grey "22% of 38 500", "22% of 30 030", "22% of 23 423.40"; behind them three equal grey-blue ghost bars "i09: the same $ each year". On "shrink" hand tag "losses shrink"; on "a smaller value" hand tag "a % of a smaller value". At the right (simulation 3) axes (n 0 to 12 years, $0 to $40,000): the olive curve draws from (0, 38 500) (violet); on "out" a dot rides it to t = 10, readout "$3,209.27". On "zero" (bold) the curve continues just above the axis, `AxisShadow` showing the gap, hand tag "never reaches $0 (model)". On "sold or scrapped" hand tag "real utes get sold or scrapped".

### 5. the same shape as compound interest
> Now put the two formulas side by side. Compound interest is FV equals PV times one plus r, to the n. Declining balance is S equals V nought times one minus r, to the n. They're alike. Each is a starting value, times a multiplier, to the power of n, and you use the same calculator steps. But they're different, **too**. Compound interest adds r, so the value grows. Declining balance subtracts r, so the value falls. Take ten thousand dollars at twenty per cent. Growing, it gains two thousand, then two thousand four hundred, then two thousand eight hundred and eighty. Depreciating, it loses two thousand, then sixteen hundred, then twelve hundred and eighty. One change grows each year, and the other **shrinks**.

Visual: stage change: the formula twin (simulation 4), 60 px: "FV = PV(1 + r)ⁿ" above "S = V₀(1 − r)ⁿ". On "They're alike" PV and V₀ light violet together, (1 + r) and (1 − r) amber, the two ⁿ ink, hand tag "same shape". On "too" the "+" and "−" light amber with a thick outline, hand tag "+ grows, − falls". On "ten thousand dollars at twenty per cent" two curves from (0, 10 000) at the right (n 0 to 3, $0 to $18,000): teal rising through 12 000, 14 400, 17 280; olive falling through 8 000, 6 400, 5 120. Change rows under them, 40 px: "+2000, +2400, +2880" (teal) and "−2000, −1600, −1280" (olive). On "shrinks" hand tag "changes grow / changes shrink".

### 6. memory aid
> Here's the summary. Declining balance keeps the same percentage of the value each year. So S equals V nought times one minus r to the n, and the total depreciation is V nought minus S. It's compound interest's formula, with a minus instead of a **plus**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the twin formulas with their "+" and "−" lit, and the olive curve flattening. Main line, hand font 56 px: "Declining balance: keep the same percentage each year." On "plus" the key line, 40 px: "S = V₀(1 − r)ⁿ (22% off: × 0.78). Total = V₀ − S. Like compound interest, but − instead of +." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A food truck is bought for forty-six thousand dollars. It depreciates at twenty per cent a year, using the declining-balance method. Find its value after three years. Then find the total depreciation over the three years. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A food truck is bought for $46 000. It depreciates at 20% p.a. using the declining-balance method. (a) Find its value after 3 years. (b) Find the total depreciation over the 3 years." Picture slot: an empty three-rung ladder "$46 000 → × ? → × ? → × ?". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> It keeps eighty per cent, so S equals forty-six thousand times zero point eight cubed, twenty-three thousand five hundred and fifty-two **dollars**. The total depreciation is forty-six thousand minus twenty-three thousand five hundred and fifty-two, twenty-two thousand four hundred and forty-eight **dollars**. Zero point two, times three, times forty-six thousand is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "keep 100% − 20% = 80% = 0.8" (amber); "S = 46 000 × 0.8³"; on "dollars" (first) "= $23 552" (framed green). On "dollars" (second) "46 000 − 23 552 = $22 448" (framed green). On "slip" a red slip "0.2 × 3 × 46 000 = $27 600" writes and is crossed (caption "total depreciation = V₀ − S"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Five thousand dollars is invested at eight per cent a year compound interest, and a five-thousand-dollar machine depreciates at eight per cent a year declining balance. Find each value after two years. Then describe one similarity and one difference between the two formulas. Pause here to answer.

Visual: `QuestionCard`, 40 px: "$5000 is invested at 8% p.a. compound interest, and a $5000 machine depreciates at 8% p.a. declining balance. (a) Find each value after 2 years. (b) Describe one similarity and one difference between the two formulas." Picture slot: empty axes, n 0 to 2 years, $0 to $7,000. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> The investment is five thousand times one point zero eight squared, five thousand eight hundred and thirty-two dollars. The machine is five thousand times zero point nine two squared, four thousand two hundred and thirty-two **dollars**. Both are a start times a multiplier to the power n. But one plus r grows, and one minus r **falls**. Using one point zero eight for the machine is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "5000 × 1.08² = $5832.00" (teal, framed green); on "dollars" "5000 × 0.92² = $4232.00" (olive, framed green). On "falls" the twin formulas with "start × multiplier to the power n" (similarity) and "+ grows, − falls" (difference) framed green. On "slip" a red slip "machine: 5000 × 1.08²" writes and is crossed (caption "depreciation keeps 92%: × 0.92"). Hold about 1 s.

### 11. handoff
> So now there are two ways to depreciate. Straight-line takes the same dollars every year, and declining balance the same percentage. Here's a delivery van, forty thousand dollars. One method takes six thousand a year, and the other twenty per cent a year. Which one loses value faster? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as specified under Decisions, "Handoff", and in `../checks/root-decisions-maths-s12-i01-i11.md`): on "a delivery van" the van `ma12-delivery-van-v1.png` (1,000 px wide) at the top with the tag "$40,000"; on "six thousand a year" the blue chip "straight-line: $6,000 a year"; on "twenty per cent a year" the olive chip "declining balance: 20% a year"; on "faster" the grey chip "which loses value faster?". On "next" chips "Next: comparing the two methods" and "?". Hold about 2 s. No values after year 0. This is i11's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Declining balance: the same % of the current value each period.
- Keep 100% − r%: 22% off is × 0.78 (not 1.22).
- S = V₀(1 − r)ⁿ; total depreciation = V₀ − S (not r × n × V₀).
- Losses shrink; the curve flattens and never reaches $0 (model).
- Like FV = PV(1 + r)ⁿ, but 1 − r: the value falls, not grows.

Memory aid (framed card, right side, as in scene 6): *Declining balance: keep the same percentage each year.* Key: *S = V₀(1 − r)ⁿ (22% off: × 0.78). Total = V₀ − S. Like compound interest, but − instead of +.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and i11's opening frame.

## Teaching checks

- **Does it explain causes?** Why a percentage suits a ute: it loses most when new (1). Why × 0.78: the part kept (2). Why the power n: one multiplication a year (3). Why total = V₀ − S, not r × n × V₀: each year's 22% is of a smaller value (3, 4). Why the curve flattens and never reaches zero: shrinking losses; 78% of a positive value is positive (4). Why the formulas look alike and behave differently: same shape, + against − (5).
- **Misconceptions addressed:** 1 + r (2 crossed, A2 crossed); r × n × V₀ (3 crossed, A1 crossed); reaching zero after 100 ÷ r years (4); "the formulas are the same" (5).
- **Visual standard, item by item:** 1 the ute from the first frame; 2 a new stage every 40 to 60 s; 3 a value tag stepping down a × 0.78 ladder with kept bars, shrinking loss bars beside equal ghost bars, a dot riding a curve that never touches the axis, twin formulas lighting part by part with two curves from one start; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board with framed answers and a crossed slip; 8 framed card and five bullets; 9 gains growing while losses shrink.
- **One idea at a time:** the multiplier (2), the formula and total (3), the curve (4), the comparison (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 29 s.
- **Avoided double teaching:** i02a's formula and i09's total depreciation recalled in chips.
- **Standard 1 path:** identical; scene 5 and A2 meet `cid65c76c0`.
- **Syllabus coverage:** `cif830811b` and `ciffbbac75` (2 to 4, A1; key notes 1 to 4); `cid65c76c0` (5, A2; key note 5).
- **Out of scope by design:** finding r (site `we-4`); comparing methods (i11).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1 numbers, original context, HSC style, 2 marks suggested, not an official marking scheme).** "A food truck is bought for $46 000. It depreciates at 20% p.a. using the declining-balance method. (a) Find its value after 3 years. (b) Find the total depreciation over the 3 years."
Model answer: (a) S = 46 000 × 0.8³ = $23 552. (b) 46 000 − 23 552 = $22 448. Classic mistake (crossed): "0.2 × 3 × 46 000 = $27 600".

**Attempt 2 (scene 9; pack question 2 with 8% in place of 15% (Revision 2, review finding 3), 3 marks suggested).** "$5000 is invested at 8% p.a. compound interest, and a $5000 machine depreciates at 8% p.a. declining balance. (a) Find each value after 2 years. (b) Describe one similarity and one difference between the two formulas."
Model answer: (a) Investment: 5000 × 1.08² = $5832.00; machine: 5000 × 0.92² = $4232.00. (b) Similarity: both are a starting value times a multiplier to the power n (the same calculator steps). Difference: compound interest multiplies by 1 + r, so the value grows by more each year; declining balance multiplies by 1 − r, so the value falls by less each year. Classic mistake (crossed): "machine: 5000 × 1.08²". (Revision 2: 8% replaces Revision 1's 15%, which is far above any savings or deposit rate in November 2026; the values still separate clearly.)

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Ute | 30 030; 23 423.40; 18 270.25; losses 8470, 6606.60, 5153.15; total 20 229.75; 10 years ≈ 3209.27; slips 25 410, 38 500 × 1.22³ | 1 to 4 |
| Twin | 12 000, 14 400, 17 280 (+2000, +2400, +2880); 8000, 6400, 5120 (−2000, −1600, −1280) | 5 |
| A1 | 23 552; 22 448; slip 27 600 | 7, 8 |
| A2 | 5832.00; 4232.00 | 9, 10 |
| Handoff | $40,000; $6,000 a year; 20% a year (labels) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12i/verify.py`, run with `python -I`); Codex to re-check.

- 38 500 × 0.78ⁿ at n = 1, 2, 3, 10: 30 030, 23 423.4, 18 270.252, 3209.2737; differences 8470, 6606.6, 5153.148; 38 500 − 18 270.252 = 20 229.748.
- 0.22 × 3 × 38 500 = 25 410; 38 500 × 1.22³ = 69 910.148.
- 10 000 × 1.2ⁿ: 12 000, 14 400, 17 280; 10 000 × 0.8ⁿ: 8000, 6400, 5120.
- 46 000 × 0.8³ = 23 552; 46 000 − 23 552 = 22 448; 0.2 × 3 × 46 000 = 27 600.
- 5000 × 1.08² = 5832; 5000 × 0.92² = 4232.

## Memory aid check

- **"Declining balance: keep the same percentage each year."** with key line **"S = V₀(1 − r)ⁿ (22% off: × 0.78). Total = V₀ − S. Like compound interest, but − instead of +."** Original (the site's Insight box: "just subtraction instead of addition inside the bracket"). Meaning, as said in scene 6: each period keeps (100 − r)% of the current value, so after n periods the value is V₀ times (1 − r)ⁿ. Assumptions checked: r is the rate per period as a decimal with 0 < r < 1; r is applied to the current value (not the original, which would be straight-line); the key line's example "22% off: × 0.78" stops "1 − r" being read as 1 − 22; "never reaches zero" is a model statement (scene 4). It helps a new case: a $1,600 phone losing 40% a year: 1600 × 0.6² = $576 after 2 years. Introduced after scenes 2 to 5.
- **Considered, not used:** "Compound interest going backwards" (wrong: PV is compound interest backwards; declining balance is a different multiplier).

## Narration length estimate

Revision 2, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12i/count.py`, a copy of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632).

**5,093 characters** (Revision 1: 5,001), 12 scene headings. Characters per scene (1 to 12): 504, 604, 755, 582, 708, 250, 254, 370, 307, 386, 298, 75.

At 13.3 characters per second the speech is about 383 s. Total with the holds and settling below **about 472 s (7 min 52 s)**, 98 s under the 570 s cap; speech and holds before the notes about 427 s.

Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the ladder (2), the bars and the riding dot (4) and the twin lighting (5) about 24 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more.

Reserve trims if the voiced take runs long: scene 4's "A real ute, of course, gets sold or scrapped." (the hand tag carries it); scene 2's "That would make the ute grow in value."

## Scene list and build ids

Lesson key `m-s12i10` (route math-s12-i10). Explainer folder `src/explainer/lessons/math-s12-i10`; build inputs in `docs/production/claude-pm/lessons/math-s12-i10/` (at voicing).

In order (12 scene headings): hook-percentage-now, keep-78-per-cent, formula-and-total, shrinking-losses-curve, same-shape-compound, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds): 0 to 40 s i09's frame answered (1); 40 to 95 s the ladder (2); 95 to 155 s g01 board (3); 155 to 205 s losses and curve (4); 205 to 265 s the formula twin (5); 265 to 285 s memory card (6); 285 to 375 s attempts and feedback (7 to 10); 375 to 395 s the van for i11 (11); 395 to 440 s key notes (12).

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: i09's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change to the board; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-i10-learning-review.md`, `science_check` = `checks/m-s12-i10-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, viewed): `ma12-delivery-van-v1.png` (reused in the final frame); `ma12-used-hatchback-v1.png` (listed; not used: a worn used car, already the anchor of a06, a07 and a13, and the site's example is a new vehicle); `ma11-food-truck-v1.png` (listed; not used, A1's picture is a ladder).

Need: none new. From i09's brief: `ms12-ute-v1.png` (the anchor). Reused: `ma12-delivery-van-v1.png`.

Coded: the tags, ladder, kept bars, loss bars, every curve, the formula twin, boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioTermLadder`, `GrowthBars`, `StudioPlot` with `AxisShadow` (`a11-graph-parts.tsx`), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row i10): **FormulaTwin** (small): two `EquationStrip`s with shared highlight ids, lighting matching parts together and then differences in a second colour. Check: PV/V₀, the multipliers and the powers light together; "+" and "−" light alone.

## Codex asset brief

No new plate for this video. The ute is briefed in i09 (`ms12-ute-v1.png`, painted before the i09 build). The delivery van exists and was viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly, with `cid65c76c0` labelled Standard 1.
3. Confirm `we-2`'s values are used unchanged ($18,270.25, $20,229.75), each yearly loss is to the cent, and the losses sum to the total.
4. Confirm no finding of r, no logarithm, and the ATO sentence is the only tax claim, with "rules and rates change" said once.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on i09's final frame and scene 11 matches the decisions file's i10 to i11 join (no values after year 0).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Declining Balance Depreciation and Compound Interest | Year 12 Maths Standard

(Title length: 77 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/investment-and-loans/lesson03.sa.html

A new $38,500 ute loses 22% of its value each year. Declining-balance depreciation takes the same percentage of whatever the asset is worth now, so each year it keeps 78% and the value is multiplied by 0.78: S = V₀(1 − r)^n. Find the value after three years and the total depreciation (V₀ − S, not 22% × 3 of the price), see why the yearly losses shrink and the curve never reaches zero in the model, and compare the formula with compound interest: the same shape, but a minus instead of a plus. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Depreciation rules and rates change; the rates here are examples.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Investment and loans (Standard 2) and Depreciation and loans (Standard 1). For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Apply the declining balance method to calculate the depreciation of an asset using the formula S = V_0(1 - r)^n where S = salvage value, V_0 = initial value of the asset, r = depreciation rate per time period and n = number of time periods"
Syllabus content, Standard 1:
"Apply the declining balance method to calculate the depreciation of an asset using the formula S = V_0(1 - r)^n where S = salvage value, V_0 = initial value of the asset, r = depreciation rate per time period and n = number of time periods"
"Explain the similarities and differences between the declining balance formula and the compound interest formula"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fac80cab35 (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa9ea10adb (Standard 1)

Builds on: Straight-Line Depreciation: S = V₀ − Dn. Next: Straight-Line vs Declining Balance Depreciation.

#Year12Maths #MathsStandard #Depreciation #HSCScience

## Open decisions

- **1. `we-4` left out (root).** Revision 2: the review agreed `we-4` stays out; still for root to confirm. Revision 1 text: Finding r from two values needs a fourth root; the syllabus asks only to calculate the depreciation, and the pack flags pace. If root wants it, it can be an optional Standard 2 practice item using i02b's root-key method.
- **2. The ute for `we-2` (learning review).** Closed in Revision 2: the review raised no concern. Revision 1 text: The site's vehicle is unspecified; the ute links to i09's final frame and the pack's question 1. A1 moved to a food truck to avoid repeating the anchor.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-i10-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A. Revision 1 note: Next: student learning review (trace from i09; check that "a percentage of what it's worth now" lands as the reason for the method, that the part kept comes before 0.78, that total = V₀ − S survives the r × n × V₀ temptation, that "never reaches zero" is clearly a model statement, that the twin scene gives a Standard 1 student words for "explain the similarities and differences", that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
