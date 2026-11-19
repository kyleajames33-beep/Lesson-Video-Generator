# Maths S11 e06 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-e06.md`, "How does a spreadsheet model a pay packet with overtime, bonuses and commission?" Source SHA256 `4980123a369921fc3cb2fcffa85d97d4591be077dabb46a5825ec34555ae3d8f`.

Written design reviewed from its stated entry knowledge (f08: cells, =, fill-down; e01 to e04a: each pay type) as a Year 11 Standard student. No built preview, spreadsheet run, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

"A formula is the working with cell names" is said and shown with the "formula = working" strip, which is the right bridge from hand working. The broken fill-down is the best beat: the rate cell's outline visibly slides to the empty H2 and a 0.00 appears, so the student sees why $ is needed before being told; then H1 changes to 3% and every row ripples. The SUM-versus-displayed-cents point is true and shown with a magnifier. Ruling 94 keeps the $ reference as an optional tip. Recalculated with SymPy: 34.76 × 24 = 834.24; 1098.20 + 130.05 = 1228.25; 72 800 ÷ 52 = 1400, bonus 3640, ghost 364 000; 461.25, 557.50, at 3% 553.50, 669.00; 820 × 0.55 = 451; 143.856 + 113.886 + 251.748 = 509.490 (SUM 509.49), displayed cells 509.50; A1 1117.20 + 176.40 = 1293.60; A2 1325.00, 2756.00, slip 5741.67. All correct (Codex still types each formula into a sheet).

## Findings

1. **Should fix, e05 scene 11 and e06 scene 1 ("one formula, every worker").** The chip and the hook ("Type one formula, and it works for every row") promise one formula for the whole sheet, but the video then needs different formulas for hourly staff, the salaried manager, commission and piecework. A student will ask "so is it one formula or not?", and may think one formula covers every kind of pay. Fix: e05 scene 11 chip "a formula, filled down"; e05 narration "Could a spreadsheet do every row at **once**?" (drop "one formula in"); e06 scene 1 "Type a formula once, fill it down, and it works for every worker paid the same way." with the hand tag "one formula per kind of pay". Students should expect one formula per pay type, reused down its rows.

2. **Should fix, scene 3 (column C changes meaning in the same sheet).** Rows 2 and 3 use C for "hours" and D for "overtime hours"; scene 3 puts the manager in row 5 of the same grid with headings "C: weekly pay", "D: bonus (once a year)" over "this block". One sheet with two meanings for column C contradicts scene 2's "each row is one worker, in the same columns", and the memory aid's assumption ("each row's inputs are in the same columns"). Fix: give the manager a second tab, "Salaried", with headings "A: role", "B: salary", "C: weekly pay", "D: bonus", row 2 "manager | 72800", formulas "=B2/52" and "=B2*5%"; narration "The manager is on a salary, seventy-two thousand eight hundred dollars a year, in B two of a second tab ... equals B two divided by fifty-**two** ... equals B two times five per **cent**". This also matches A2's B2, C2, D2 layout.

3. **Optional, scene 5 (H1 and H2 mean different things in two tabs).** In scene 4 H1 is the 2.5% commission rate; in scene 5 the "Per item" tab has "H2: $0.55" and the "E-book" tab has "H1: 12%" and "H2: $9.99". Each tab is its own sheet, but at viewing speed a student reading "$H$2" twice with two values may lose track. Put the e-book's rate and price in "H3: 12%" and "H4: $9.99" (formula "=B2*$H$4*$H$3") so every locked cell in the video is unique.

## Joins

e05 to e06: the barrow, tag and blank grid match (chip per finding 1). e06 to e07: scene 11's frame (boots on the receipt "Steel-capped work boots $189.00", "Ways of earning: done", "does this cut my tax?", "Next: taxable income", "?") is e07's opening.

## Practice and feedback

Both cards keep the full question on screen, with a small grid showing the inputs and blank answer cells. Feedback about 30 s and 19 s, each with one crossed slip ("=F2*H1", "=B2/12"). A garden centre is an everyday anchor; staff are rows by role, no people drawn.

## Key notes and length

Five notes, with formulas exactly as typed. 0 em dashes. 5,086 characters, about 473 s, 97 s under 570 s; finding 2 adds about 2 s.

No speech, design edits, builds or commits were made.
