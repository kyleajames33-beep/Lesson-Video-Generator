# math-a12-f09 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 14 November 2026. Not committed. The scene 6 plan card, the scene 7 recalled A₃ row and term cards, and the scene 12 working rows were added after the sweep to fill frames that sat half empty. Sheet: `docs/production/claude-pm/builds/math-a12-f09-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,420 frames (481 s), 16 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS".

## Files
- `src/explainer/lessons/math-a12-f09/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing in a script check against the measured captions), `config.ts`, `assets.ts` (the used hatchback, the loan statement, the reused house), `scenes.tsx` (re-exports `F09FinalFrame`);
  - `parts.tsx`: re-exports f07's parts and, through them, f01 to f06's (read-only imports). Load-time checks of every value from the kit's money engine (`loanSchedule`, `loanBalance`): the three table rows to the cent (180, 177.48, 174.94488; 29,580, 29,157.48, 28,732.42488), the closed form (1.006³, 30,543.24648, 1,810.8216), the whole car loan (60 repayments; month 12, 24, 36, 48, 59 interest 151.43, 118.05, 82.18, 43.64, 5.80; A₅₉ = 372.58; 60th repayment 374.81 with interest 2.24; total 35,774.81; A₁₂ … A₅₈), the home loan (360 repayments; 1,666.67 and 480.62; 15 years 271,534.70; below 200,000 after repayment 242; 25 years 113,784.14; last repayment 2,144.37; 0.7762), A1 (11,810; 11,619.05; 11,500) and A2 (225,000; A₁₂ = 41,412.71 both forms), and the $2,500 handoff curve (265 repayments, not shown). Lesson rigs, also used by f11, f13 and f15 (and by f08 and f10, which import `LoanStrip` and the parts read-only): `Statement` (coded text in the plate's four measured field rows), `Car`, `ZoomBar`, `SplitBar`, `MoneyTable`, `LoanStrip`, `LoanGraph`;
  - `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16; `AidBar`, `F09FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry, after f08.

## Joins
- **Frame 0 is `F08FinalFrame`** (imported from `../math-a12-f08/s3`: the loan strip "$30,000 owed", amber "×1.006" to "$30,180", red "−$600" to "?", faint "month 2: ?", chips "Next: reducing-balance loans" and "?"). f08 draws the strip with this lesson's `LoanStrip`, so scene 1 draws the same strip in the same place; the f08 frame fades over frames 14 to 28 (taking its chips with it), the heading writes from frame 30, and the red arc turns teal on "repayment comes off".
- **Final frame: `F09FinalFrame`** (f10's opening): heading "Pay more each month?", the home-loan graph ($2,147.29 a month, label "$2,147.29 a month: about 30 years"), the dashed grey "$2,500 a month?" ghost stopping at 12 years with a dashed "?" box at its end, the reused house with "home loan: $400,000" and "5% p.a., compounded monthly", chips "Next: pay more, or pay a higher rate?" and "?". The notes cross-fade back to it. f10 already imports it.

## Plate fit
- **Loan statement (`ma12-loan-statement-v1.png`, 1070 × 1470, alpha > 32 box [144, 223, 924, 1258])** at its own aspect: 830 px tall in scene 1 (field values 34 to 36 px, labels 28 px), 700 px tall in scenes 2 to 4 (values 30 px, labels 26 px), 640 px in attempt 1. Coded text sits in the provenance's measured field rows (label cell to x 305, value cell 305 to 560); the header band carries "Car loan statement".
- **Used hatchback (`ma12-used-hatchback-v1.png`, 1774 × 887, box [264, 184, 1491, 750])** at 620 px (scene 1), 440 px (scene 5) and 520 px (memory aid).
- **House (reused `phys-y11-house-v1.png`, f05's box)** at 480 px in the handoff.

## Departures from the design
- **Scenes 1 to 4 (the statement):** the plate's field rows are about 33 file px tall, so 44 px text cannot sit inside them at any size that fits the frame. The fields use short labels ("Loan", "Rate", "Repay", "Owing") at 26 to 28 px and values at 30 to 36 px, and the full wording is carried by hand tags and the givens card. The rate field shows "7.2% p.a." until "zero point six", then "0.6%/month".
- **Scenes 2 and 3 (the balance bar):** a full-height bar would show the $180 interest cap 4 px tall, so `ZoomBar` shows only the top of the bar (a zigzag marks the broken axis, from $28,700), where the cap is 72 px and the bite 240 px. Scene 2 drops the design's thumbnail strip (the statement's "Owing" field and the readout carry the answer).
- **Scene 4 (the table):** the plate's own table cells are about 100 px wide on screen, too narrow for 32 px money values, so the coded table sits on a card beside the statement, with dashed leaders from the statement's table area; the bar is replaced by the month 1 to 3 split bars, which arrive here (not in scene 5) as each row's debt part is spoken.
- **Scene 5 (60 months):** the full-scale balance bar steps month by month (the per-month cap is too small to see at full scale; the shrinking amber part is shown by the split bars at months 12, 24, 36, 48, 59 and 60). The run takes the measured gap between "run all five years" and "few dollars" (about 3.5 s) rather than 8 s.
- **Scene 6:** a two-line plan card holds the rows' place until "A one is"; the month timeline is drawn from the first frame.
- **Scene 8:** the two bars run over n (3 to 57 and back to 3) during "two pieces … the difference", with a live board (n, the loan grown, the repayments grown, owed); the design asked for the bars at n = 3 only.
- **Scene 9:** the marker runs from month 0 to repayment 242 and stops on the half line; the 25-year reversed split is not shown (the marker would pass the half line first).
- **Scene 10:** the car plate and the grow-then-pay icon (an ink bar with an amber cap and a teal bite) in place of the design's small car icon.
- **Scene 12:** the bar is a `ZoomBar` from $11,400, with ticks "A₁ = $11,810.00" and "A₂ = $11,619.05".
- **Handoff:** the "?" sits at the end of the ghost stub (not on the time axis), so the frame gives no term for $2,500.

## Cue check
Every phrase resolves (script check against the measured captions: 0 missing). Repeated phrases named: "balance" (scene 2) 1 of 3; "compound interest" (scene 3) 1 of 2; "the debt" (scene 4) 2 of 2.

## Live readouts
- Scenes 2, 3 and 12: the `ZoomBar` readout and labels come from the kit's `loanBarState` (the money engine), stepping with the cap and the bite.
- Scene 5: month, interest and balance come from the schedule row of the month shown; the bar uses the same month.
- Scene 8: n is a whole number; both bars and the board use the closed forms 30 000(1.006)ⁿ and 100 000(1.006ⁿ − 1).
- Scene 9: the marker month drives the board (the schedule row of that month) and the split bar.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f09` (final run 00:15 UTC): **PASS WITH WARNINGS (0 failures, 1 warning)**: "few pictures" (7 of 16 teaching frames hold a plate of 250 px or more or a drawn diagram; the timeline, bars and graphs of scenes 6 to 9 are not counted). Earlier runs failed scene 6 as mostly empty (fixed with the plan card) and scene 12 for "−$250.00" running off the frame (bar moved left). Smallest text: 21 to 25 px only in superscripts (Pow at 0.66 of 32 to 38 px chips) and one-character labels. Report: `out/explainer/Explainer-math-a12-f09/grade/Explainer-math-a12-f09-grade.md`.

## 1 fps sweep
The machine was heavily loaded (Codex renders; CPU near 90%), so the full 1 fps sweep (grade script, `--frames 481`) ran at about 2 to 10 frames a minute. It covered frames 0 to about 10,900 (scenes 1 to 13, 365 frames) before I stopped it; I inspected every second frame on 5 × 5 contact sheets. Changed scenes (2, 4 to 7, 9, 12) and scenes 13 to 16 were then rechecked with 50 targeted stills (about one every 3 to 5 s; three in the notes hold). The overlap and line-through checks of the sweep run were lost when it was stopped; the final 16-frame run reports no collisions.

Found and fixed: the faint "repayment M" and "$2,147.29 a month" givens lines (now hidden until their cue); scene 4's bare table and empty lower half before "month one" (month numbers, the $600 cells and a hand line now arrive on "Here are three months"); scene 5's empty right side before "stays the same" (a tag on "each month a little more"); scene 6's lower half (plan card, a mini "owed at end" table); the A₃ row running into that table (table moved up); scene 7's empty lower half (the recalled A₃ row, then the five term cards with amber "×1.006" arcs); scene 9's hand tag on the "$100,000" axis label; scene 12's empty lower left (A₁ and A₂ working rows); the handoff's memory card over the graph's axis labels (card narrowed); "$2,500 a month?" crossing the ghost line; the paid-off box over a split-bar label; scene 8's chip under the loan bar; the "(1.006)⁰ = 1" label off the right edge.

Not looked at frame by frame after the last changes: scenes 1 and 3 (unchanged since the sweep), and frames between the targeted stills in scenes 13 to 16.

## Root ink-check repairs (14 November)
- Scene 2 (from frame 1500): the amber "interest is charged on what is still owed" link now curves under the "+$180.00" cap label and meets the bar just below its top; it no longer crosses the label.
- Statement fields (scenes 1 to 4 and 11): the coded values overran the painted cells, across and up and down (the painted rows are 20 to 27 px tall). `Statement` now fits each value to its cell, shrinking it towards 26 px at the least. When any value on a statement still overruns, that statement's four field rows are redrawn as coded cells (the same paper, label grey and rule colour as the plate), tall enough for the text and wide enough for the longest value, so every row on one statement matches. Empty rows show the coded cell before their value arrives. Only f09 draws `Statement`, so no other lesson changes.

Re-swept at 1 fps over scenes 1 to 4 and 11 (contact sheets), with 2× crops of every statement state: the values sit inside their cells and the "+$180.00" label is clear. Grade checker rerun: **PASS WITH WARNINGS (0 failures, 1 warning: few pictures, unchanged)**; the sheet was remade (`math-a12-f09-sheet.jpg`).

## Kit notes for root (described, not edited)
- `LoanBalanceBar` at full scale cannot show one month's interest for a long loan; a zoomed variant (the top of the bar from a chosen base, with a broken-axis mark) would serve f09 to f11. `ZoomBar` in this lesson's parts is one.
- `PlateFields` assumes the text fits inside the measured rectangle; the f09 statement and f13 super statement rows are too short for the standard's 40 to 44 px field text at any on-screen plate size.

## Check at playback speed
- Scene 1: the red "−$600" arc turning teal, and the statement's fields arriving with the spoken givens.
- Scene 2: the amber cap growing and the teal bite dropping off the zoomed bar while the readout steps $30,000.00 → $30,180.00 → $29,580.00.
- Scene 4: the cells writing on with the spoken values, and the split bars arriving.
- Scene 5: the 60-month run (about 3.5 s) with the split bars at 12, 24, 36, 48 and 59 landing as the counter passes them, then the short 60th bar and "paid off".
- Scene 8: the two bars sweeping n up to 57 and back to 3.
- Scene 9: the curve drawing in, then the marker running to repayment 242.
- Handoff: the ghost drawing and the "?" arriving.

## Honest grade
A on the checker (0 failures, 1 warning) and, by my reading of the sheet, A, with these soft spots root may call B+: scene 2's right column is half filled until "first the interest" (the definitions and the givens card carry it); scene 3's bar stands still for 35 s while the rows change; scenes 6 and 7 rely on coded diagrams (timeline, term cards), not plates; the first 9 s of scene 7 show only the row, the timeline and a dimmed recalled row; and the full 1 fps sweep is incomplete (see above).
