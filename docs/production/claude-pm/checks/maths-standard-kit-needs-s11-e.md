# Maths kit needs: Year 11 Standard, Earning money (math-s11-e01 to e12)

Maths Standard Year 11 research, 19 November 2026, methods of brief 243 section 5. Existing parts are named from `src/explainer/math/studio/` (export names checked against the files on 19 November 2026: `board.tsx`, `cards.tsx`, `readouts.tsx`, `extras.tsx`, `finance-parts.tsx`, `money.ts`, `plot-core.tsx`, `primitives.tsx`, `a11-data-parts.tsx`, `series-parts.tsx`). These are requirements for later build work, not implemented capability or a pilot pass. No source file was changed.

Root ruling 7 applies: visual parts, sims and plates may be reused from Advanced and Year 12 Standard; scripts are new and gentler. Every video uses the shared frame: `WorkingBoard` (`TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`), `QuestionCard` with `GivensStrip` and its countdown, `KeyNotesScreen` and `MemoryAidCard`, role colours from `roles.tsx`, and `HandTag`, `DrawnMark` and `PlateImg` from `primitives.tsx`. Money values come from exact arithmetic (or `money.ts` helpers such as `toCents`), rounded only for display.

| Video | Existing parts it can use | New part it needs |
| --- | --- | --- |
| e01 wages, salaries, pay periods | `StudioPlot` (l07's line through the origin, provisional join); `PeriodTimeline` and `YearStrip` for 52 weeks, 26 fortnights, 12 months; `CalendarDeposits` or `CalendarFlip` for paydays; `StackedTotalBar` for a year bar cut into equal pay pieces; `PlateImg` on `maths/ma12-wall-calendar-v1.png` | **PayPeriodHub** (small): one yearly bar in the centre with three arrows out (÷ 52, ÷ 26, ÷ 12) and back (× 52, × 26, × 12); each target shows the bar re-cut into that many equal pieces, and a "× 4" ghost leaves a visible gap against one month piece. Could be a mode of `StackedTotalBar`. |
| e02 overtime and penalty rates | `WorkingRows` for the blocks; `SignedBar`; `LiveReadoutBoard` for running pay; `StudioCandidateTable` for the roster | **RateBlocks**: rectangles with width = hours and height = rate (area = pay) laid side by side for ordinary, Saturday, Sunday and overtime blocks, each labelled with its multiplier; a "one rate for all hours" ghost rectangle for the trap. Reused by e05 (eligible pay) and e06 (row check). **PaySlipCard**: a coded, unbranded pay slip (period, ordinary, overtime lines, allowances, gross, PAYG, other deductions, net, employer super outside the slip) that fills line by line and accepts a red-pen correction on one line. Used by e02, e05, e09, e10, e11. |
| e03 commission and sliding scale | `IntervalPicture`, `SignedBar`, `LiveReadoutBoard`, `TargetDial` (target sales); `PlateFields` on a car-yard board plate | **SlicedBar** (shared with e08 and e12): a horizontal bar cut at stated boundaries, each slice tinted with its rate, its amount dropping beneath and adding to a total; a "top rate on everything" ghost bar for the trap; boundary labels editable (commission tiers or tax brackets). Course-neutral; it is the strand's key repeated picture. |
| e04 piecework, royalties, government payments, sole trader (or e04a and e04b) | `SpriteStack` or `SpriteField` for crates; `StepCounter` and `TargetDial` for the break-even count; `CalendarDeposits` for fortnightly payments; `SignedBar` for a sole trader's money in and out | Small: a **RoyaltySlice** (a price tag with a thin percentage slice lifted out, then × copies sold) as a `PlateFields` overlay. No other new part. |
| e05 leave loading | `StackedTotalBar` (four week blocks + loading sliver); RateBlocks (eligible pay filter); PaySlipCard (greyed overtime line); `PlateImg` on the calendar plate | None beyond the shared parts. |
| e06 spreadsheet pay model | **SpreadsheetGrid** (new, from `maths-standard-kit-needs-a.md`: column letters, row numbers, formula bar, fill-down, typed values, row highlight) | SpreadsheetGrid needs an **absolute-reference** display ($H$1 pulsing when changed, dependent cells rippling) and a **broken fill-down** demo (a relative reference sliding to an empty cell, zeros appearing, then fixed). Both are props on the a-strand part. |
| e07 taxable income | `OutcomeSort` (receipt sorting into two trays) or `StudioCandidateTable`; `StackedTotalBar` for the income stack; `HandTag` reasons | **ReceiptCard** (small): a coded receipt with item, price and a reason tag, which can slide into a tray. Could be `PlateFields` on one painted receipt plate. |
| e08 tax tables | SlicedBar (brackets); `WorkingRows`; `StudioCandidateTable` | **TaxTableReader**: a coded resident tax table (taxable income ranges, "tax on this income") with the year in its heading; a taxable-income card slides down to its row; the row lights; the base amount and the "over" figure lift into a working line. Shared with e11 and e12 (formula reader). |
| e09 PAYG withholding | PaySlipCard; TaxTableReader in **withholding mode** (columns: weekly earnings, with tax-free threshold, no tax-free threshold; an excerpt of five to six rows); `CalendarDeposits` for 52 withholdings into a jar | Withholding mode on TaxTableReader (two value columns, column switch from a tick box). No other new part. |
| e10 Medicare levy and net pay | SlicedBar (levy as 2% of taxable income, ghost "2% of tax" crossed); PaySlipCard; `StackedTotalBar` for gross to net; `PlateImg` for a health card and a super jar | None beyond the shared parts. |
| e11 refund or debt | `StudioBalanceBeam` (withheld against owed); TaxTableReader; PaySlipCard (two slips for the two-jobs scene); `WorkingRows` for the full chain | Small: a **ReturnSummary** card (unbranded tax-return summary: income, deductions, taxable income, tax, levy, withheld, result) that fills left to right. |
| e12 tax spreadsheet | SpreadsheetGrid; TaxTableReader (formula reader lights the matching table row); `StudioPlot` for net against income | SpreadsheetGrid needs a **long-formula reader** (a formula split into labelled pieces, each linked to a table row) and a **scenario-row** style (a short label in the first column, rows that appear one at a time). |

## Plates (painted, Codex)

Prefix `ms11-` for Year 11 Standard (no `ms11-` plates exist yet). Ruling 17 pattern: each new plate is painted one video early, because final frames show the next video's anchor. Reuse first: `maths/ma12-wall-calendar-v1.png` (e01, e05), `maths/ma12-calculator-v1.png`, `maths/ma11-travel-card-v1.png` (e07 bus card, after an appearance check), `maths/ma12-coin-jar-v1.png` (e09 withholding jar, e10 super jar).

New, all transparent PNG with an alpha channel, no people, no brands or logos:

1. `ms11-fish-chip-shop-front-v1.png` (e01 final frame, e02 opening): a shop window with a blank sign area for a coded "Open public holiday" label.
2. `ms11-car-yard-board-v1.png` (e02 final frame, e03): a price board with blank card areas.
3. `ms11-strawberry-crate-scale-v1.png` (e03 final frame, e04): a crate of strawberries on a farm scale.
4. `ms11-suitcase-v1.png` (e04 final frame, e05): a packed suitcase (the calendar is the existing plate).
5. `ms11-steel-cap-boots-v1.png` (e06 final frame, e07): steel-capped boots, plus an optional `ms11-tool-belt-v1.png` (e01 and e07 callback).
6. Optional: `ms11-health-card-clinic-v1.png` (e10), an unbranded health card and clinic sign; a coded card is acceptable if a plate looks cluttered.

## Order of build

1. **SlicedBar** (e03, e08, e10, e12): the strand's repeated picture.
2. **PaySlipCard** (e02, e05, e09, e10, e11).
3. **TaxTableReader** with withholding mode (e08, e09, e11, e12).
4. SpreadsheetGrid props (absolute reference, broken fill-down, long-formula reader, scenario rows), after the a-strand SpreadsheetGrid exists.
5. RateBlocks, PayPeriodHub, ReceiptCard, ReturnSummary, RoyaltySlice (small).

Course-neutral notes: SlicedBar, PaySlipCard and TaxTableReader suit Year 12 Standard money videos and any later Australian finance content; build them without HSC-specific labels baked in. Table values (tax rates, PAYG rows) must come from data props with the year, never hard-coded.
