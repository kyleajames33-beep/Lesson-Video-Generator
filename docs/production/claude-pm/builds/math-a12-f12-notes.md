# math-a12-f12 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 14 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f12-sheet.jpg` (the 16 grade-checker frames, no stamps). 15 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS".

## Files
- `src/explainer/lessons/math-a12-f12/`: `common.ts`, `cuemap.ts` (every cue resolved at load), `config.ts`, `assets.ts` (the wall calendar and the apartment building; f13's super statement), `scenes.tsx` (re-exports `F12FinalFrame`);
  - `parts.tsx`: re-exports f09's parts (read-only). Load-time checks: the savings rows ($200.00; $1.00 and $401.00; $2.005 and $603.005) from the kit's `savingsSchedule`; the fund ($400.00, $99,349.09, $98,695.58; month 60 $227.13 and $823.78; 120 withdrawals, last $1,050.33; exact M 1,050.906); r = 0.005 and n = 24; A2's 400, 802, 1,206.01; 60 × $200 = $12,000. Rigs: `Calendar` (the plate with a month label, day numbers, a ringed month-end cell and amber/blue stamps), `CashStrip` (period bars with blue "in" and teal "out" arrows and amber "×(1 + r)" arcs), `FundBar` (the fund on a broken $97,000 to $101,000 scale, so the $400 cap and the $1,050.91 withdrawal show);
  - `s1.tsx` (scenes 1 to 5: `Twin`, `MiniFlow`, `F11OpeningBoard`), `s2.tsx` (6 to 9: `AidCard`), `s3.tsx` (10 to 15: `F12FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry after f11.

## Joins
- **Frame 0 is f11's exported `F11FinalFrame`**, fading over frames 14 to 28 above the same layout drawn with this lesson's parts (calendar, apartment and savings strip at f11's positions).
- **Final frame `F12FinalFrame`** is drawn with f13's own `SuperSheet` and `SaveStrip` (imported read-only from `../math-a12-f13/parts`) with the same four sheet lines, the three choice chips and the "Next" chip at f13's positions, as f13's `F12FinalStandIn`. **Root: f13 may import `F12FinalFrame` from `../math-a12-f12/scenes`** (identical picture). The heading "A super account" stays to the end of scene 14 (f13's frame alone has no 44 px line); the notes' end cross-fades to `F12FinalFrame` without it.

## Plate fit
- Wall calendar (`ma12-wall-calendar-v1.png`, box [183, 214, 940, 1193], grid [196, 713, 928, 1180], month strip [200, 645, 924, 702]) at 260 to 720 px tall; stamps sit on the month-end cell (day 31).
- Apartment building (`ma12-apartment-building-v1.png`, box [236, 285, 947, 1063]) at 250 to 480 px tall, with a dashed "goal" tag.
- Super statement (f13's, through `SuperSheet`).

## Departures from the design
- Scene 1: the second account arrives as a card ("$100,000 in a fund; $1,050.91 out at the end of every month") above a fund strip on a broken scale; arrow amounts are one hand line per strip ("+$200 at each month end", "−$1,050.91 at each month end") rather than a label on every arrow (they collided with the bar values).
- Scene 2: the compounding inset is a single $401.00 bar gaining a "+$2.01" cap, then a second cap; the checklist card arrives on "Same size".
- Scene 3: the four cards are small cash-flow strips that slide into two bins; card 2 shows three growing arrows (amounts in its title); the first card is on screen from the start.
- Scene 4: the bar beside the calendar is the kit's `LoanBalanceBar` in deposit mode; a five-column table fills under the givens.
- Scene 5: a card "the apartment savings on a time line" holds the space until the first arrow; the future-value note sits at the lower right.
- Scene 6: the fund's bar is on a broken scale; month 2 runs silently; a small cash-flow strip shows "lender pays out one sum" and the equal arrows back.
- Scene 7: the live split under the readout is drawn as two bars (interest, from the balance) for the current withdrawal.
- Scene 8: a plan card holds the right column until the first row; 24 small blue arrows under the calendar.
- Scene 9: the memory card has the calendar icon and two keyed mini strips (in and out).
- Attempt 2 and feedback 2: three small calendar pages ("Month 1" to "Month 3") carry the deposits (and, in feedback, the interest stamps $0.00, $2.00, $4.01); a plan card holds feedback 2's left column until the recurrence.
- Scene 14: the memory card, then f13's statement and strip build up on the spoken givens; the side note fades before the end.

## Cue check
Every phrase resolves (load-time `cueFrame`). Repeated phrases named: scene 2 "interest compounding" 1 of 2; scene 5 "two", "three" 1 of 2; scene 8 "In this course" 1 and 2 of 2.

## Live readouts
- Scene 4: the bar and the table come from the kit's `savingsSchedule` (A₀ = 0, r = 0.005, M = 200); stamps show its interest and deposit.
- Scenes 6 and 7: the fund's balances and the split come from the same row-by-row run (interest first, then $1,050.91).

## 1 fps sweep
One full sweep (410 frames) and one 4 s sweep (120 frames) after the fixes; contact sheets of every second frame. Found and fixed: "−$1,050.91" running off the right edge and arrow labels on the bar values (scenes 1 and 2); the fund tags on the "$100,000" label; scene 3's small cards (text below 26 px when scaled into the bins; now drawn at full size) and the card titles under their arcs; scene 4's table header ("MONTH" on "START"); scene 5's empty opening and the future-value note on the "$200" labels; scene 8's empty opening and the "course model" chip off the edge; scene 13's empty opening; scene 14's frames without a 44 px line and its sparse first seconds; the checklist card over the "kind 2" tag; the "set like a loan repayment" chip on the curve; the first frame without a 44 px line (heading now from frame 4). The 120-frame sweep left only sparse warnings (52 to 56%) and the sampling-artefact "unchanged set-up" lines.

## Kit notes for root
- `LoanBalanceBar` draws the balance as a solid ink block; at 600 px tall it reads as a large black slab.

## Check at playback speed
- Scene 1: the cross-fade from f11's frame and the fund strip arriving month by month.
- Scene 3: the four cards sliding into their bins.
- Scene 4: the calendar's stamps landing (amber interest, then blue deposit) and the page turning, with the bar growing.
- Scene 6: the fund's amber cap lifting, then the teal withdrawal lifting out.
- Scene 7: the marker riding the fund's curve to $0 at 120 withdrawals.

## Root revision (14 November 2026, after root grading)
No narration or cue changes. 1 fps re-sweep of scenes 3, 5, 6 and 13 after the edits.
- Scene 3 (sort): the first card enters large (1.55x) at the centre, then shrinks into its slot as the next card arrives. Each bin carries a handwritten label of what goes in it ("annuity: same size, same gap, interest every period" / "not an annuity: one of the three fails") and faint dashed outlines where the cards land.
- Scene 5 (cash-flow diagram): all five $200 arrows arrive from the first deposit cue (staggered 6 frames) and pulse as each number is spoken. Arrows are taller, "$200" tags sit above them, "no deposit at 0" appears with the arrows, and scene 4's savings bars (A1 to A3) stay small at the left. The time line moved down 80 px so the "$200" tags clear the savings card; the two lower notes moved down to match.
- Scene 6 (fund): "the fund: one sum in, equal withdrawals out" time line (the $100,000 lump, four withdrawal arrows, interest arcs) appears large beside the givens, then settles under them; the lender's view of a loan joins it on its cue.
- Scene 7: the fund time line stays at bottom right until the "end of the fund" card replaces it (fixes the last sparse frame).
- Feedback 2 (scene 13): the three calendar pages are present from the start with "A1 = ?", "A2 = ?", "A3 = ?" labels, which fill in as each row is worked.
- Shared `MiniFlow` (this lesson only): the lump label ("$100,000", "$2,000", "$8,000", "sum") now sits under the line at the lump, so the first withdrawal arrow and the interest arcs no longer cross it.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f12` (through the stills-lock wrapper), after the root revision: **PASS (0 failures, 0 warnings)**. The earlier three sparse warnings (scenes 5, 6, 7) are cleared. Report: `out/explainer/Explainer-math-a12-f12/grade/Explainer-math-a12-f12-grade.md`. Sheet replaced.

## Honest grade
A. Each of root's four points is on screen at its cue, the checker is clean, and every sheet frame shows the current reasoning with its picture. Remaining softness, not defects: the scene 4 kit balance bar is still a solid ink block, and scene 3's sorted cards are small in their bins (text kept at 26 px or more). Motion still needs a playback-speed look (scene 3 card slides, scene 5 arrow pulses, scene 6 strip settling).
