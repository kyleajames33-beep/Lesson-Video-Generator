# math-a12-f10 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 14 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f10-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 13,154 frames, 14 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS".

## Files
- `src/explainer/lessons/math-a12-f10/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load), `config.ts`, `assets.ts` (reused house and laptop; f11's motorbike and swing tag), `scenes.tsx` (re-exports `F10FinalFrame`);
  - `parts.tsx`: re-exports f09's parts (and, through them, f01 to f07's; read-only). Load-time checks of every value against the kit's money engine (`loanSchedule`, `loanPayoff`, `loanTerm`): $2,147.29 for 30 years; month 1 and 2 splits ($1,666.67, $480.62, $833.33; $1,664.66, $482.63, $1,663.19, $836.81); 265 repayments with the last $540.57 and rows $399,166.67, $398,329.86, $397,489.57, $3,025.72, $538.32; terms 30.0, 22.0, 16.3, 13.0 years; $400,166.67; 79 and 36 years; rates 4%, 5%, 6%, 7% as "19 years 2 months", "22 years 1 month", "26 years 11 months", "38 years 10 months" and +4.87 / −2.93 years; 6% at $2,147.29 "44 years 10 months"; 6.5% interest $2,166.67 and $400,019.38, "never"; A1 $1,000 = M and 200; A2 15.0 years at $3,163.17 and 9.8 years at $4,294.58; the motorbike loan's 60 repayments. Lesson rigs: `Calc` (the kit `ScreenApp` on the laptop's screen rectangle, a "Paid off in" readout from whole repayments), `Split` (a repayment as amber interest and teal debt paid off, with a hatched overrun), `TermCurve` (term against repayment, with the dashed amber interest-only line and an optional $100 / 1-year grid);
  - `s1.tsx` (scenes 1 to 4; `LaptopThumb`), `s2.tsx` (5 to 8; `AidCard`, `AidBar`), `s3.tsx` (9 to 14; `F10FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry after f09.

## Joins
- **Frame 0 is f09's exported `F09FinalFrame`** (imported from `../math-a12-f09/s3`). It fades over frames 14 to 28 above scene 1, which redraws f09's graph (f09's `LoanGraph` with the same two curves and the "?") and house at f09's positions; on "A mortgage calculator" the graph slides right and shrinks, the house fades and the laptop slides in.
- **Final frame `F10FinalFrame`** is f11's own opening: f11's `BikeBoard` (imported read-only from `../math-a12-f11/parts`) with its chips. f11's scene 1 currently opens on its own `F10FinalStandIn`, which is the same `BikeBoard` with the same chips, so the join is exact; **root: f11 may import `F10FinalFrame` from `../math-a12-f10/scenes`** (identical picture).

## Plate fit
- **Laptop** (reused `y11-laptop-blank-v1.png`, box [258, 108, 1541, 1092], screen [372, 160, 1422, 708] from the kit anchors) at 900 to 1,110 px wide, the coded calculator on its screen; 300 to 330 px as an icon.
- **House** (reused) at 480 px in scene 1, as in f09's final frame.
- **Motorbike and swing tag** (f11's, through f11's `BikeBoard`).

## Departures from the design
- **Calculator text size:** the kit `ScreenApp` sets its own type (34 px controls, about 46 px readout on a 900 px laptop); the design asks for 40 px and a 52 px readout on the screen. The scene's other readouts and the table carry the large numbers.
- **Scene 1:** the three-way guess chip and the "+$352.71 a month" chip sit in a row above the graph; a small ring timer runs from "Less than a year" (the "guess" cue is 0.7 s before the scene ends). The calculator shows no mini curve (the screen is full; f09's graph beside it carries the curve).
- **Scene 2:** month 2's bars are on screen from the start, their amounts arriving on "The lower balance"; "nearly twice as much" is a hand note at the left.
- **Scene 3:** the rule is the calculator's title line ("next = balance × (1 + 0.05 ÷ 12) − repayment"); the table is live: its rows 1 to 3 and its last three rows are worked from the slider's current repayment, so they change as the slider moves and settle on 263 to 265 at $2,500; the screen shows "repayments" and "final repayment" as well as "Paid off in". No mini curve on the screen (no room); the ghost curve is passed to the app but the app hides graphs here.
- **Scene 4:** the four curves are drawn from the first frame; a "repayment → term" card lists the four repayments with their terms arriving on the spoken numbers; the "+$500" links are two chips.
- **Scene 5:** before the term curve is drawn, a repayment split ($2,500: $1,666.67 interest, $833.33 to the debt) and the line "only the part above the interest pays the debt down" fill the empty plot; the inset balance graph is on screen from the start; the riding marker's readout is a board (repayment, term).
- **Scene 6:** "left for the debt" is a fourth calculator readout (the bracket label crowded the axis); the term-against-rate inset takes points as each rate is spoken.
- **Scene 7:** a live balance graph for the current rate is on screen from the start (5%: to $0 at 30 years; 6%: 44.8 years; 6.5%: rising, with "after 1 month: $400,019.38"); the repayment and interest bars start at $2,000 (stated) so the $19.38 overrun shows; the green rule sits at the top right.
- **Scene 8:** the memory card's keyed bar lengthens on "bigger repayment", its amber part grows on "higher rate" and fills it on "nothing's left".
- **Attempt 1:** the picture is an empty balance graph with "?" (the statement strip is the given card).
- **Feedback 1:** a plan card holds the space until the first row; the balance graph's flat line draws on "is still two hundred thousand".
- **Scene 13:** opens on the memory card; from "Calculators and graphs" the heading "Finding a term exactly, by hand" and f11's `BikeBoard` (its tag lines on the spoken givens, its graph and chips) build up. The heading stays to the end of the scene (f11's frame alone has no 44 px line); the notes' end cross-fades to `F10FinalFrame` without it.

## Cue check
Every phrase resolves (load-time `cueFrame`). Repeated phrase named: scene 2 "to the debt" 2 of 2.

## Live readouts
- Scenes 1, 3, 6, 7: the calculator's "Paid off in" is the whole number of repayments from the kit's `loanPayoff` for the slider's current repayment and rate, shown as years and months; "repayments" and "final repayment" (scene 3) and "left for the debt" (scene 6) come from the same values.
- Scene 3: the table's rows are the kit's `loanSchedule` for the current repayment (cents only on display).
- Scene 5: the marker's repayment is rounded to $10 per frame; its term is `loanTerm` ÷ 12 for that repayment.
- Scene 7: the balance graph is `loanBalance` for the current rate at $2,147.29.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f10` (through the stills-lock wrapper): **PASS (0 failures, 0 warnings)**. Report: `out/explainer/Explainer-math-a12-f10/grade/Explainer-math-a12-f10-grade.md`. Earlier runs: a 32-frame run failed scene 2's opening (60% bare), scene 5's opening (65%) and scene 13 (63% bare; no 44 px line); fixed as listed above.

## 1 fps sweep
One full sweep (440 frames; contact sheets of every second frame) and one 4 s sweep (120 frames) after the fixes. Found and fixed: the three-way guess chip running off the right edge and over the "$2,147.29: 30 years" label (scene 1); "term: 30 years" on the "?" box (scene 1); scene 4's empty opening (curves now drawn from the start) and its faint card rows; the "+$500" chips at the edge; scene 5's empty opening (split bar and line), "$1,700" and "$2,000" labels on each other, the interest-only label on the "$1,700" arrow, the split's label over the inset; scene 6's "M = $2,500", "interest" and "left" labels on each other, "term (years)" on the "38.8" point, the axis labels against the laptop; scene 7's empty right side (live balance graph from the start); scene 10's empty opening (plan card); scene 12's wrapped "term 15 years" on the answer; scene 13's frames without a 44 px line (heading kept). The 120-frame sweep left only sparse warnings (scene 4 at 52%, feedback 1 at 52 to 56%) and the sampling-artefact "unchanged set-up" lines. The last edits (scene 5's labels, scene 6's inset size) were checked in the 16-frame sheet only.

## Kit notes for root (described, not edited)
- `ScreenApp` caps its type at 34 px (readout about 46 px) and lays content in a column with `overflow: hidden`: with three controls, a readout and a graph, a 900 px laptop's screen clips the graph. A lesson cannot ask for a larger size or hide the slider bars.
- The grade checker counts only HTML images as pictures, so plates drawn in SVG (`SvgPlate`) report 0 pictures.

## Check at playback speed
- Scene 1: the graph sliding right as the laptop slides in.
- Scene 3: the repayment slider moving from $2,147.29 to $2,500 while "Paid off in" counts down and the table's rows change.
- Scene 4: the readouts arriving on the spoken terms and the two brackets.
- Scene 5: the term curve drawing leftwards and the marker riding to $1,700, $2,000 and $3,500.
- Scene 6: the rate stepping 5%, 4%, 6%, 7% with the amber interest mark sliding up the axis.
- Scene 7: the balance graph sagging at 6% and turning upwards at 6.5%.
- Scene 8: the keyed bar's teal part shrinking to nothing.
- Scene 13: the cross-fade from the memory card to f11's motorbike frame.

## Honest grade
A on the checker (0 failures, 0 warnings). I grade the sheet A−: every frame has its picture (laptop, house, graph or card) and a 44 px line, but frame 13 (feedback 2 at 1 s: the strip, the givens and the given graph, with the left column empty until the answer) is light, frame 7 has a plain plot plus the inset before the curve draws, and the memory card appears twice (scene 8, and scene 13 before the handoff). Root may call frame 13 B+.

## Root ink-check fixes (14 November, after grading)
- Scene 5: the riding marker is drawn at no more than 36.5 years, so it never reaches the axis title "term (years, smooth estimate)" (the arrow at the top still shows that $1,700 runs off the plot).
- Scene 7: "never repaid" moved to x 800, y 152 (clear paper right of the heading, above the laptop), so its descenders no longer touch the laptop's edge.
- Scenes 5 and 7 re-swept at 1 fps (71 stills): no contacts. Grade checker re-run: PASS, 0 failures, 0 warnings; the 16-frame sheet is byte-identical (no sheet frame falls in the changed moments), so it was not replaced.
