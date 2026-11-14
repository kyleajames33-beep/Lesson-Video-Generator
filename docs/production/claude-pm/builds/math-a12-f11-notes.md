# math-a12-f11 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 14 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f11-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 13,451 frames (448 s), 14 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS".

## Files
- `src/explainer/lessons/math-a12-f11/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing in a script check), `config.ts`, `assets.ts` (the motorbike, the swing tag; f12's wall calendar and apartment building for the handoff), `scenes.tsx` (re-exports `F11FinalFrame`);
  - `parts.tsx`: re-exports f09's parts (and through them f01 to f07's), read-only. Load-time checks from the kit's money engine: the term (ln(10/7)/ln 1.006 = 59.624; 60 repayments), A₅₉ = 248.38, the 60th repayment 249.87 with interest 1.49, total 23,849.87 and interest 3,849.87, A₅₀ = 3,729.70 (the race), the 4-year M = 480.78 (1.006⁴⁸ ≈ 1.3326; 48 × 480.78 = 23,077.44; 772.43; +80.78), A₂₄ = 12,795.26 (23,087.75 and 10,292.49; 36%), A1 (1,791.08; 429,859.20; 1.005²⁴⁰ ≈ 3.3102; 1,041.67), A2 (39.79; A₃₉ = 392.91). Rigs: `Tag` (coded text sitting on the plate's four measured rules), `Bike`, `MonthGraph`, `BikeBoard` (the bike, the tag and the dashed curve to "?"; f10 draws its final frame with it);
  - `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (9 to 14; `NumLine`, `F11FinalFrame`, `CAL`, `APT`).
- `src/explainer/registry.ts`: one import and one array entry, after f10 (f13 and f15 follow in the same edit series; f12 and f14 belong to the other agent).

## Joins
- **Frame 0 is `F10FinalFrame`** (imported from `../math-a12-f10/s3`; f10 draws it with this lesson's `BikeBoard`, so the bike, the tag and the curve stay in place). It fades over frames 14 to 28 with f10's chips; "n = ?" stays until the race.
- **Final frame: `F11FinalFrame`** (f12's opening, already imported by f12): heading "Saving instead of borrowing", the wall calendar (520 px tall) at the left, the apartment building (480 px) with a dashed "goal" tag at the right, the deposit strip between them ("t = 0", "$0 saved", blue bars with "+$200" arrows for months 1 to 4, amber "×(1 + r)" arcs, "…", a dashed "?" at "after 5 years"), chips "Next: saving with regular deposits" and "?". No rate value. The bars use r = 0.005 for their heights only (unlabelled).

## Plate fit
- **Motorbike (`ma12-motorbike-v1.png`, 1586 × 992, alpha > 32 box [215, 138, 1361, 876])** at 660 px (opening), 540 px (scene 2), 420 px (scene 4), 500 to 680 px (memory aid, handoff recap, notes).
- **Swing tag (`ma12-swing-tag-v1.png`, 1003 × 1568, box [192, 183, 807, 1355]; rules at y 690, 838, 984, 1132 from x 256 to 744)** at 440 to 600 px tall; lines at 26 to 36 px.
- **Wall calendar (box [183, 214, 940, 1193]) and apartment building (box [236, 285, 947, 1063])** at their own aspect in the handoff.

## Departures from the design
- **Scene 1:** the race bars are the kit's `LoanBalanceBar` with its interest-free ghost, stepping one repayment at a time (the per-month cap is too thin to see at full scale); the readout board shows repayments, the balance with interest and the interest so far.
- **Scenes 2, 3 and 10:** a two-line plan card holds the working area until the first row.
- **Scene 3:** the general row "(1 + r)ⁿ = M ÷ (M − Pr), needs M > Pr" sits in a card with the two grey cases; no f10 rule chip.
- **Scene 4:** a number line 57 to 61 with 59.62 marked; 59 crossed, 60 ringed; the total bar splits borrowed and interest.
- **Scenes 5 and 6:** the dial is a teal `ParameterSlider` under the tag (the tag's third line shows M); the curve for the current M and the dashed $400 curve share one graph with a dashed "$0 at 48 months" line. The totals use the true sum for $480.78 ($23,077.60, last repayment $480.94) with a grey line for 48 × $480.78 = $23,077.44; "≈ $772 less in total" is a chip, not a bracket.
- **Scene 7:** the time and paid-off comparison is two thin bars at the left; no month-1 split bar.
- **Scene 8:** the four slots are hand lines (two amber, one teal) beside the bike; they pulse in turn on "missing".
- **Handoff:** the opening recap shows the memory card and the bike before the board clears.

## Cue check
Every phrase resolves (0 missing). Repeated phrases named: "fifty repayments" 1 of 2 and "guess" 2 of 2 and "sixty" 2 of 2 (scene 1); "zero" 1 of 5 (scene 2); "ten sevenths" 1 of 2 (scene 3).

## Live readouts
- Scene 1: the repayment count is whole; balance and interest so far come from the schedule.
- Scenes 5 and 6: M drives the curve, the slider, the tag line and the board (paid off after = whole repayments from the term formula; total paid from the schedule).
- Scene 7: the marker month drives the board (closed form at that month).

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f11` (final run 00:47 UTC): **PASS (0 failures, 0 warnings)**. Earlier runs failed scene 3 as mostly empty (fixed with a plan card and a givens strip) and scene 6 for "$3,849.87" running off the frame (bar scale reduced); scenes 2 and 10 warned sparse (plan cards added). Report: `out/explainer/Explainer-math-a12-f11/grade/Explainer-math-a12-f11-grade.md`.

## 1 fps sweep
Full sweep with the grade script (`--frames 448`, 450 frames, one a second), every third frame inspected on 5 × 5 contact sheets, plus its automatic findings. Found and fixed: the "120 = Pr" tag over "− 400" (moved right); scene 3 empty between the plan card and the rows (plan card kept to "Take logs"); scene 5's empty right column before the first row (the goal tag now stays at the foot); scene 7's empty lower half before the rows (plan card, the row now arrives on "use the same formula"); scene 10's empty lower half (the month-1 split bar of $1,250.00 interest and $541.08 debt until "total paid"); feedback 2 mostly empty for its first 11 s (the tag plate added under the number line); the memory card blank for 4 s (main line now on "Here's the idea"); "paid off after 49 repayments" at $480.78 (the term is 48.0003; now rounded within 0.01 so the board says 48); the "≈ $772 less" bracket and labels off the right edge; the handoff's "after 5 years" tab under the apartment (strip narrowed, apartment moved right). Changed scenes after the sweep (1, 3, 5, 6, 7, 8, 10, 12, 13) were checked only through the final 16-frame run and the check stills, not frame by frame.

## Root ink-check repairs (14 November)
Root's ink check found three overlaps; each is fixed within the design (no narration or cue changes):
- Scene 4: the hand "round up" note moved right (x 480 to 560), clear of the green "60 repayments" box.
- Scenes 9 and 10 (the $250,000 sketch): the "$0" end label now sits right of the end dot, level with it, so the curve no longer runs through it.
- Scene 7: "early repayments carried the most interest" moved up and left (x 760, y 450, 300 px wide) into clear paper between the curve and the x axis, left of the 24-month line.

Re-swept at 1 fps (one still a second) over scenes 4, 7, 9 and 10, inspected on 5 × 5 contact sheets: no new overlaps. Grade checker rerun: **PASS (0 failures, 0 warnings)**; the sheet was remade (`math-a12-f11-sheet.jpg`).

## Kit notes for root (described, not edited)
- `LoanBalanceBar`'s ghost label and the main label sit at the base; the race needed the hand tags placed below them.
- `ParameterSlider` badge rounds money to whole dollars with `format`; a cents format would suit repayments.

## Check at playback speed
- Scene 1: the race (50 repayments in about 3 s, then 10 more) and the guess chip crossing.
- Scene 5: the dial sweeping from $400 to $472 with the curve's end moving in from 60.
- Scene 6: the dial settling on $480.78 and the totals bars arriving.
- Scene 7: the marker riding to 24 months.
- Handoff: the plates and strip arriving after the recap.

## Honest grade
A on the checker (0 failures, 0 warnings) and A on my reading of the sheet, with soft spots root may call B+: the tag's coded lines are small (26 to 30 px) because the plate's rules are short; the race's bars sit low and end empty (the board carries the answer); the attempt pictures are small (a sketch, a tag) beside large question cards; feedback 2's tag plate is a 300 px thumbnail.
