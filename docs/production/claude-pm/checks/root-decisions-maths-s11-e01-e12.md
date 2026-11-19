# Root decisions needed: Maths Standard Year 11, e01 to e12 (first-revision designs)

19 November 2026. Design author's handover to root for `lessons/math-s11-e01.md`, `e02.md`, `e03.md`, `e04a.md`, `e04b.md`, `e05.md` to `e12.md` (Revision 1 each; 13 designs, e04 split by ruling 84). Documents only: no speech, build, render, plate or commit, and no sub-agent. Inputs: the packs `pre-design/maths-standard/math-s11-e01.md` to `e12.md`, `programme/maths-standard-route-inputs-9.json`, `checks/maths-standard-kit-needs-s11-e.md`, `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 91, plus root's note of ruling 93: the l07 to e01 join is confirmed; mass, if ever used, is w), `site-corrections-maths-standard.md` (section 11, MS-70 to MS-76), the format of `lessons/math-s12-i01.md`, `i08.md` and `i17a.md` (Revision 2) and the i-strand resolution logs, `maths-visual-standard.md`, `AGENTS.md`, and the l07 and f08 packs for the joins.

## 1. Summary

| Design | Characters | About (s, with holds) | Scenes | Anchor | New plate briefed here |
| --- | --- | --- | --- | --- | --- |
| e01 wages, salaries, pay periods | 5,472 | 500 | 13 | paydays on the wall calendar ($80,000 a year) | `ms11-tool-belt-v1.png`, `ms11-fish-chip-shop-front-v1.png` |
| e02 overtime and penalty rates | 5,119 | 472 | 12 | a takeaway shop open on a public holiday | none |
| e03 commission, sliding scale | 5,143 | 474 | 12 | a car yard's slow week ($620 + 2.8%) | `ms11-strawberry-crate-scale-v1.png` |
| e04a piecework, royalties | 4,901 | 453 | 12 | strawberry crates at $2.35 | none |
| e04b government payments, sole traders | 4,971 | 459 | 12 | a fortnightly payment calendar and a window cleaner's van | none |
| e05 leave loading | 4,857 | 450 | 12 | a four-week road trip (suitcase) | none |
| e06 pay spreadsheet | 5,075 | 473 | 12 | a garden centre's pay sheet | `ms11-steel-cap-boots-v1.png` |
| e07 taxable income | 5,020 | 464 | 12 | $189 steel-capped boots | none |
| e08 tax tables | 5,522 | 504 | 13 | the teacher's $88,990 meets the 2026-27 table | none |
| e09 PAYG withholding | 4,845 | 451 | 13 | a retail weekly pay slip with a blank tax line | `ms11-stethoscope-v1.png` |
| e10 Medicare levy, net pay | 4,881 | 454 | 12 | "2% of what?" with the stethoscope | none |
| e11 refund or debt | 4,876 | 454 | 12 | the tax-return summary as a balance | none |
| e12 tax spreadsheet | 4,749 | 448 | 12 | "Will a pay rise leave me worse off?" | none |

Characters are the sum of the scene strings (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed), counted with scratchpad `s11e/count.py` (the parser of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632; checked in this session). Times use 13.3 characters per second plus two 10 s countdowns, about 6 s of short holds, 20 to 26 s of settling (stated per design) and the 45 s notes scene. All thirteen are under 570 s (longest e08, about 504 s; shortest e12, about 448 s). Seven designs are between 4,749 and 4,971 characters (e04a, e04b, e05, e09, e10, e11, e12): each is a single-point video at the gentler Standard pace, and no padding was added (the same call as rulings 52 and 55 for r08, r09 and r12b); the brief's "generally 5,000 to 7,000" is otherwise met. Every design has 0 em dashes and 0 en dashes, every bold cue is quoted in its scene's Visual in spoken order (checked by script), every attempt narration ends "Pause here to answer.", every syllabus quote matches the route-inputs JSON (with the typographic apostrophe in "individual’s", "employee’s", "worker’s"), every title is under 100 characters (38 to 67), and every description quotes the wording exactly, contains no codenames and ends #HSCScience. Feedback scenes are at most 406 characters (about 30 s). All numbers were recalculated with exact decimal arithmetic (scratchpad `s11e/verify2.py`, `python -I`, 246 checks, 0 failures); Codex's maths check remains the authority.

Characters per scene (1 to last):
- e01: 475, 689, 730, 530, 654, 627, 270, 252, 323, 256, 366, 225, 75
- e02: 445, 680, 687, 678, 739, 182, 315, 330, 370, 373, 245, 75
- e03: 490, 563, 600, 917, 752, 191, 355, 366, 275, 333, 226, 75
- e04a: 450, 698, 827, 503, 550, 172, 248, 332, 378, 362, 306, 75
- e04b: 472, 882, 670, 535, 590, 227, 205, 301, 401, 405, 208, 75
- e05: 360, 773, 416, 788, 630, 211, 311, 331, 335, 360, 267, 75
- e06: 442, 711, 551, 732, 665, 209, 526, 395, 279, 256, 234, 75
- e07: 466, 466, 888, 800, 475, 226, 503, 326, 255, 277, 263, 75
- e08: 385, 685, 869, 736, 506, 643, 176, 192, 363, 275, 381, 236, 75
- e09: 383, 421, 750, 681, 416, 451, 210, 346, 349, 245, 272, 246, 75
- e10: 436, 616, 596, 871, 484, 184, 227, 385, 453, 319, 235, 75
- e11: 454, 583, 921, 763, 322, 190, 234, 406, 344, 400, 184, 75
- e12: 448, 389, 744, 540, 678, 204, 372, 359, 278, 396, 266, 75

The longest single teaching scenes are e11 scene 3 (921, the four-step chain), e03 scene 4 (917, the sliced bar) and e07 scene 3 (888, the receipt sort); each has several stage beats and a named reserve trim.

## 2. Joins (every opening and final frame)

1. **l07 to e01 (confirmed, ruling 93).** Coded axes, "pay ($)" up (teal) and "hours worked" across (blue), a line through the origin, the amber tag "k dollars per hour", chip "pay = k × hours", chips "Next: earning money" and "?". The l07 pack proposes the same bridge (its section 8). The l07 designer builds l07's final frame to this. k is l07's direct-variation constant (y = kx), not a gradient letter clash; no mass variable appears anywhere in e01 to e12 (ruling 93).
2. **e01 to e02.** `ms11-fish-chip-shop-front-v1.png` with the coded sign "Open public holiday"; a roster card (hours only) "Weekdays 16 h", "Sat 6 h", "Public holiday 5 h", Sat and public holiday ringed amber (ruling 96; Revision 2 of e01 and e02); chips "same hours, bigger pay?", "Next: overtime and penalty rates", "?".
3. **e02 to e03.** `ma12-used-hatchback-v1.png` with a coded windscreen card "$14 990" and a staff notice "Salesperson pay: $620 a week + 2.8% of sales"; chips "paid for sales, not hours", "Next: commission", "?".
4. **e03 to e04a.** `ms11-strawberry-crate-scale-v1.png` with the tag "$2.35 a crate" and a counter "crates: 0"; chips "paid per item", "Next: piecework and royalties", "?".
5. **e04a to e04b.** The wall calendar with "$677.20" in every second week (no total); the van `ma11-trade-van-v1.png` with "window cleaning: $85 a house"; chips "paid by the government, or by yourself?", "Next: government payments and sole traders", "?".
6. **e04b to e05.** `ma12-travel-suitcase-v1.png` with its tag coded "4 weeks" beside the calendar with four week rows circled; chips "4 weeks off: paid?", "Next: leave loading", "?".
7. **e05 to e06.** `ma11-garden-barrow-v1.png` tagged "garden centre: weekly pay"; a blank `SpreadsheetGrid`, headings "A: role", "B: rate", "C: hours", "D: overtime hours", "E: pay", five empty rows; chips "a formula, filled down" (ruling 96; Revision 2 of e05 and e06), "Next: a pay spreadsheet", "?".
8. **e06 to e07.** `ms11-steel-cap-boots-v1.png` on a coded receipt "Steel-capped work boots $189.00"; grey chip "Ways of earning: done"; chips "does this cut my tax?", "Next: taxable income", "?".
9. **e07 to e08.** The card "taxable income: $88 990"; a blank table "Resident tax rates 2026-27" (five outlined rows, no values); chips "which row?", "Next: tax tables", "?".
10. **e08 to e09.** A weekly `PaySlipCard` "Weekly pay slip: retail, Level 1", "Ordinary 38 h × $27.81 = $1056.78", "Gross pay $1056.78", a blank "Tax withheld: ?"; the e08 table small; chips "taken out every week?", "Next: PAYG withholding", "?".
11. **e09 to e10.** The same slip with "Tax withheld $156" and "Net pay $900.78" (both follow the copied ATO row); `ms11-stethoscope-v1.png`; olive tag "Medicare levy: 2% of ?"; chips "2% of what?", "Next: the Medicare levy and net pay", "?".
12. **e10 to e11.** A `ReturnSummary` "Tax return summary 2026-27" with blank lines "Tax withheld during the year" and "Tax and Medicare levy owed" and a level balance; chips "refund or bill?", "Next: tax returns", "?".
13. **e11 to e12.** One `SpreadsheetGrid` row: "A: taxable income", "B: tax", "C: Medicare levy", "D: net"; row 2 "80950 | 14805 | 1619 | 64526" (Priya); row 3 empty; chips "what if I earn more?", "Next: tax in a spreadsheet", "?".
14. **e12 to m01 (provisional, ruling 87).** Grey chip "Earning money: done"; the pay-rise row's "+3%" tag lands on `ma12-swing-tag-v1.png` with a coded "+3%"; chips "Next: prices go up too", "?". No price. The m01 designer confirms or replaces it; only e12 scene 11 and its "Next" line change.

Every design's final notes scene returns silently to its handoff frame, so each final frame is the next video's opening frame. Playlist: e01 to e12 at 16 to 27, e04a and e04b sharing 19 (route inputs 9).

## 3. Departures from the packs

- **Rates below the 2026-27 minimum (ruling 85, MS-76).** Not used anywhere. **Two pack errors found:** the e01 pack says lesson01 `we-1` ($26.40) is above the $26.44 minimum, and the e02 pack says lesson04 SAQ 3 ($26.00) is above it; both are below. Neither is used. The MS-76 list in `site-corrections-maths-standard.md` should add both (not edited here: outside this brief's files).
- **e01.** Drill 1 ($29.40 × 32) replaces `we-1` as the opening wage; drill 2 replaces `we-3`; the $80,000 hub keeps the site's hook; MS-70's "twice a month" and the 48-week reason are taught, with "more than five hundred dollars" a month on $80,000.
- **e02.** The shop's roster ($28.60; 16 weekday h, 6 Saturday h at 1.25, 5 public holiday h at 2.5: $1,029.60) is original, because lesson02's only weekend case is below the minimum; an $18.00 meal allowance is added to drill 3 ($1,522.00) so "add, never multiply" has a worked case. A2 moves to a supermarket night fill. The hatchback replaces the kit-needs file's proposed car-yard board plate.
- **e03.** Target sales by equation (lesson05 card 03; pack question 2 (b)) is left out for pace. A1 moves to a sports store (the phone shop carries the teaching).
- **e04a / e04b (ruling 84).** lesson05 `we-3` repriced to $27.81 × 38 (385 parts). A1's per-hour part becomes a round-up target. The pack's car-detailing round becomes a window-cleaning round (same numbers; the van plate has a ladder). e04b's A1 is an original government-payment conversion ($612.40 a fortnight). The existing `ma12-travel-suitcase-v1.png` replaces the proposed `ms11-suitcase-v1.png`.
- **e05.** An original mechanic (3 weeks, overtime greyed) fills the site's gaps (leave other than 4 weeks; overtime not eligible).
- **e06.** One garden-centre sheet covers all six income types; the $ fixed reference is taught here (the f08 pack and Year 12 a04b leave it out). A2 uses $68,900 and 4% so the teaching values are not repeated.
- **e07.** The site's hook becomes $189 steel-capped boots (MS-75); the course is "for her teaching". A1's card says "one financial year".
- **e08.** Site answers recalculated for 2026-27 (Zara $10,770; Ella $4,020); the pay-rise scene uses original $44,000 → $46,000 so A2 (the pack's $44,800 → $45,600) stays unseen; A2 drops part (a).
- **e09.** The "no tax-free threshold" values were not in the pack; the design author estimated them by the pack's yearly-tax method and marks them placeholders with the rest. A2 drops part (c) (e11's content). A stethoscope plate replaces the optional health card (no text or real card design).
- **e10.** Rhys's site PAYG ($398) is replaced by a realistic stated $276 (open question 3); A2's tax withheld is $229 (pack $214) and "all for ordinary hours" is added so 12% of gross is the SG.
- **e11.** The pack's "same income, different year" side-by-side (Ella's 2024-25 debt) is dropped (ruling 85: 2026-27 figures only).
- **e12.** The supplied nested IF is read piece by piece (the by-eye per-row option cannot fill down across a boundary); the pack's Saturday-shifts scenario is dropped (two scenarios).

## 4. Open questions for root

1. **PAYG placeholders (ruling 85).** Ruled (rulings 94 and 96): still waiting for Codex brief 256, step 1; e09 scene 6 now says "tax from the table plus the levy" and compares like with like when the rows are copied. Revision 1 text: e09 (weekly $1,056 → $156; $520 → $24 and $89; $900 → $106 and $211; $1,200 → $202; fortnightly $1,800 → $212; monthly $5,200 → $875) and e11 ($450 → $13, $520 → $24) are placeholders, listed with their dependent values in each design's "Numbers to verify". e09 and e11 cannot be voiced until Codex copies NAT 1005, 1006 and 1007 (payments from 1 July 2026). e09 scene 6 says "a few dollars too much"; if the copied $1,056 row reverses the direction, that sentence changes.
2. **Medicare levy low-income threshold (ruling 85).** Ruled (ruling 94): waits for Codex brief 256, step 1; no placeholder is voiced. Revision 1 text: e10 states no number in narration; its chip shows the legislated threshold in force, with its year, which Codex fills. The pack's $28,011 (2026-27, marked provisional on the ATO page) is not used unless Codex confirms it is law.
3. **Realistic stated withholding (e10, e11).** Closed by ruling 96: Priya's withheld $16,950 (refund $526, crossed slip $2,145), Ella's $4,800 (a debt of $120), Rhys's $276 tied to NAT 1005's $1,338 row (Revision 2 of e10 and e11). Revision 1 text: e10 replaces the site's $398 (Rhys) with $276; e11 keeps the site's withheld amounts for Priya ($19,400) and Ella ($5,100), which are higher than 2026-27 tables would withhold and make the refunds large. Root decides: keep both as designed, keep the site's $398 too ("as given"), or reprice e11's withheld amounts.
4. **The $ fixed reference (e06).** Closed by ruling 94: kept, marked as an optional tip. Revision 1 text: Taught in one e06 scene and reused in e12, though f08 and a04b leave it out. Confirm, or ask for e06 to type the rate into each formula.
5. **Nested IF in e12.** Closed by rulings 94 and 96: a single IF, `=IF(A2<=45000,0.15*(A2-18200),4020+0.3*(A2-45000))`, with the chip "for incomes from $18 201 to $135 000" (Revision 2 of e12). Revision 1 text: Supplied and read, never built. Confirm the reading load suits Standard 1.
6. **Lengths under 5,000 characters.** Seven designs (4,749 to 4,971); no padding. Confirm as for rulings 52 and 55.
7. **Description links for gap videos.** e04b, e06, e09 and e12 have no matching site lesson; each links the closest Earning money lesson (lesson03, lesson02, lesson04, lesson08) with "Related lesson notes" or similar. Root may prefer a topic index page.
8. **New plates and paint order (ruling 17).** Closed by ruling 94: the five new ms11- plates are accepted. Revision 1 text: Five new `ms11-` plates, each needed by the build of the video whose final frame shows it: `ms11-fish-chip-shop-front-v1.png` (e01 build; e02 anchor), `ms11-tool-belt-v1.png` (e01; reused in e07's A1), `ms11-strawberry-crate-scale-v1.png` (e03 build; e04a anchor), `ms11-steel-cap-boots-v1.png` (e06 build; e07 anchor), `ms11-stethoscope-v1.png` (e09 build; e10 anchor). Briefs are in e01, e03, e06 and e09. Root may commission all five together. The kit-needs file's `ms11-car-yard-board-v1.png`, `ms11-suitcase-v1.png` and optional health card are not needed (existing plates reused, each opened and viewed on 19 Nov 2026).
9. **The travel card plate (e07).** `ma11-travel-card-v1.png` has a soft teal halo painted round its edge; the builder checks it on the dark board at 260 px, or Codex cleans it.
10. **Site-correction additions (for the website AI, not done here).** Closed by ruling 94: both pack errors join MS-76. Revision 1 text: MS-76: add lesson01 `we-1` ($26.40) and lesson04 SAQ 3 ($26.00). MS-71 and MS-72 are respected in e09 and e10.

## 5. Shared colour roles (for the builder)

- e01 to e06 (ways of earning): rates (per hour, per item, percentages) amber; hours, items, sales and other counts blue; pay earned teal; salaries, retainers, allowances and other fixed amounts violet; answer green; mistake red, crossed slips only; recalls and caveats grey.
- e07 to e12 (taxation): gross income and pay teal; allowable deductions and slip deductions violet; taxable income blue; tax amber (shaded by rate in the sliced bar: nil grey, 15c light, 30c mid, 37c and 45c deep); Medicare levy olive; PAYG withheld brown; employer super slate, always outside the pay slip; a refund green, a debt amber outlined "you pay"; answer green; mistake red.
- Everywhere: header strip "MATHEMATICS STANDARD · EARNING MONEY"; text above y = 950; current working lines 52 px; nothing a student must read below 26 px; thin slivers (the 2% levy, loading slices) drawn at least 40 px with a zoom tag.

## 6. Kit needs (as used; all listed in `maths-standard-kit-needs-s11-e.md`)

Build order as the kit-needs file: `SlicedBar` (e03, e08, e10, e12), `PaySlipCard` (e02, e05, e08 to e11; employer super lane outside the slip, crossed ghost lines, an eligible-pay filter), `TaxTableReader` (e08; withholding mode with a declaration tick box in e09; excerpt rows from data props), the `SpreadsheetGrid` props (reference outlines, broken fill-down, absolute references with what-if ripple, a cell magnifier in e06; long-formula reader, scenario rows and a gap bar in e12; ruling 90 builds the base part before f08), then the small parts: `RateBlocks` (e02, e05), `PayPeriodHub` (e01), `ReceiptCard` (e07), `ReturnSummary` (e10 final frame, e11), `RoyaltySlice` (e04a). No rate or table value is hard-coded; each comes from data props with its year.

## 7. Sources cited (rulings 5 and 32; read by the packs 19 November 2026; Codex re-verifies each before narration)

- Fair Work Commission, Annual Wage Review 2026 (decision 2 June 2026): national minimum wage $26.44 an hour, $1,004.90 a week, from 1 July 2026; award rates up 4.75% (Fair Work Ombudsman news page) (e01).
- FWO pay guide, General Retail Industry Award (MA000004), from 1 July 2026: Level 1 permanent $27.81, casual $34.76; permanent Saturday 125%, Sunday 150%, public holiday 225%; 17.5% annual leave loading; casual loading 25% (e02, e04a, e05, e06, e09, e12).
- FWO media release, 28 April 2022: Horticulture Award piece-rate floor (e04a).
- Services Australia: Youth Allowance (student, single, away from home) $677.20 a fortnight from 1 January 2026 (e04b).
- FWO: National Employment Standards, four weeks' paid annual leave (e05).
- ATO: deductions you can claim; clothing; gifts and donations (e07, URLs found by the pack's search and not yet opened).
- ATO: resident tax rates 2026-27 (nil to $18,200; 15% to $45,000, cut from 16% on 1 July 2026; 30% to $135,000; 37% to $190,000; 45% above) (e08, e10 to e12).
- ATO: tax tables NAT 1005, 1006, 1007 for payments from 1 July 2026 (e09, e11; placeholders until copied); the tax-free threshold rule (e09, e11).
- ATO: Medicare levy 2%; the low-income threshold in force (e10); superannuation guarantee 12% of ordinary-time earnings from 1 July 2025 (e10).

Each video says once that rates (or tables, or thresholds) change every year. No gambling context appears. No people are drawn; every real object is a painted plate, and pay slips, receipts, tables, spreadsheets and returns are coded, unbranded documents.

Nothing recorded; human listening pending.
