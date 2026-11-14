# math-a12-f14 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 14 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f14-sheet.jpg` (the 16 grade-checker frames, no stamps). 15 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS".

## Files
- `src/explainer/lessons/math-a12-f14/`: `common.ts`, `cuemap.ts` (every cue resolved at load), `config.ts`, `assets.ts` (the reused phone; f15's suitcase), `scenes.tsx` (re-exports `F14FinalFrame`);
  - `parts.tsx`: re-exports f09's parts (read-only). Load-time checks from the kit's `accountFV` and `annuityFV`: $20,298.05; $40,596.11 and $4,596.11; $6,353.20 and $26,651.26; $22,987.16 (× 1.13; interest × 2.17); $46,089.59, $120,502.51, $240,644.24; $622,923.97 (× 2.59); $1,836,643.03, $869,039.23, $368,000 and $128,752.35; A1 $32,775.87 and $65,551.74; A2 $184,816.36 and $131,103.48 with $96,000 each; the goal deposit between $235 and $236 (not shown). Rigs: `App` (the kit `ScreenApp` on the phone's screen, laid out exactly as f13 lays it out, with short labels on small phones), `FVGraph` (balance against years for settings, with a ghost and a "put in" line), `ValueSplit` (grown start violet, deposits blue, interest amber);
  - `s1.tsx` (scenes 1 to 8), `s2.tsx` (9 to 15: `AidCard`, `F14FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry after f13.

## Joins
- **Frame 0 is f13's exported `F13FinalFrame`** (the app at x 700 with a "?" by each control). This lesson's app is the same `ScreenApp` with the same values at the same place; it slides left over frames 8 to 32 while the graph and board fade in.
- **Final frame `F14FinalFrame`** is drawn with f15's own `GoalPhone` and `Suitcase` (imported read-only from `../math-a12-f15/parts`) and f15's chip positions, as f15's `F14FinalStandIn`. **Root: f15 may import `F14FinalFrame` from `../math-a12-f14/scenes`** (identical picture). The heading "Working back from a goal" stays to the end of scene 14; the notes' end cross-fades to `F14FinalFrame` without it.

## Plate fit
- Phone (`ma12-phone-v1.png`, kit anchors) at 780 to 820 px tall (scenes 1 to 8), 600 px in the memory card, 440 px in the notes.
- Suitcase (f15's `ma12-travel-suitcase-v1.png`, through f15's `Suitcase`).

## Departures from the design
- The app is the kit `ScreenApp` (as f13 draws it), so its type is the kit's (about 28 to 34 px); the board beside the phone mirrors the balance at 52 px.
- Scene 1: the guess chips sit in a row at the top right; a small ring timer runs from "Make a guess".
- Scene 2: no "fixed" brackets on the other controls (the kit app has none); the deposit control glows and a hand line says "one change at a time; the rest stay fixed".
- Scene 4: the tower is drawn as the $5,000 block (with its amber growth) beside 60 small deposit blocks, each with its own growth.
- Scene 5: the two split bars (4.8% and 9.6%) arrive on "The deposits are still"; the interest part is ringed on "But over five years".
- Scene 6: the graph's window widens as the years step 5, 10, 20, 30; the split bar is rescaled at each step.
- Scene 7: one guide line at 5 years ("× 1.13"); at 30 years the end label carries "× 2.59".
- Scene 8: the retirement app uses short labels ("$9,200/yr"); the model card, the "10 missed deposits" chip and the first-deposit line sit in the plot's empty upper left.
- Scene 9: the memory line is on the card from the start; the two groups light on their cues.
- Feedback 2: a plan card holds the left column and the attempt's two strips hold the right until "Plan A is larger".

## Cue check
Every phrase resolves (load-time `cueFrame`). Repeated phrases named: scene 1 "the number of years" 1 of 1; scene 3 "the total doubles" 1 of 1; scene 4 "twenty cents" 1 of 2; scene 6 "Twenty years gives", "thirty years gives" 1 of 1; scene 7 "At four point eight" 1 of 2; scene 8 "of deposits" 1 of 1.

## Live readouts
- Every balance (app, board, graph, split) is `accountFV` for the app's current settings; sliders move between the narrated values and the board shows the value for the setting on screen.

## 1 fps sweep
One full sweep (410 frames) and one 4 s sweep (120 frames) after the fixes; contact sheets of every second frame. Found and fixed: the first frames (the phone alone, no 44 px line); the "?" marks over the graph's labels; the guess chips and ring layout; "t = 0" on the "5000 × 1.004⁶⁰" row; the interest-share note on the split bar; the "30 years: × 2.59" guide label on the end label; the retirement app's clipped values; the memory card's empty first seconds; the "monthly deposit" label on its arc; feedback 2's empty opening; the handoff's sparse first seconds and its frames without a 44 px line.

## Check at playback speed
- Scene 1: the app sliding left from f13's position.
- Scenes 3, 5, 7: each slider move and the curve rising against the dashed ghost.
- Scene 6: the graph's window widening as the years step up.
- Scene 8: the 40-year curve drawing, then the 30-year curve starting at year 10.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f14` (through the stills-lock wrapper): **PASS (0 failures, 0 warnings)**. Report: `out/explainer/Explainer-math-a12-f14/grade/Explainer-math-a12-f14-grade.md`. Earlier runs failed the first frames (phone alone), feedback 2's opening and the handoff's frames without a 44 px line; all fixed. The key-notes card's phone (too small for the app's text) was replaced by the memory line and the two 30-year curves after the sweep; checked on the sheet.

## Honest grade
A−. Every frame has the phone or a graph, a 44 px line and live numbers. Lighter points: the app's own text is the kit's small `ScreenApp` type (the 52 px board beside it carries the reading); frame 4 (scene 4's opening: the tower is mostly thin deposit blocks and empty space); frame 9 (scene 8 before the curve draws: an empty plot beside the model card). Root may call those B+.

## Root ink fix (14 November 2026)
Root's ink check: the graph's y-axis money labels sat against or under the phone plate's right edge in scenes 1, 5, 6 and 7, and scene 6's "+12 deposits" and "every earlier deposit: +1 year to grow" notes started on the y-axis line.
- Every graph beside the phone (scenes 1, 2, 3, 5, 6 and 7) moved from x 560 to x 640 and narrowed from 1,320 to 1,240 px, so the right edge stays at 1,880. The widest label ("$250,000", "$600,000") now starts about 60 to 70 px right of the phone edge (measured on 1 fps stills).
- Notes that sat inside the plot (scene 1 "$300 a month, ...", scene 2 "one change at a time ..." and "exam: show the working", scene 6 "+12 deposits" and "every earlier deposit ...") now start at x 760, right of the axis at 724.
- Scene 6: once the axis stretches past about 10 years, the "$20,298.05" label at the 5-year point fades out (its dot stays). The narrower graph had pushed that label across the y axis.
- Scene 8 (phone at x 50, "$0.5m" labels) already had clear paper and is unchanged. The red strike-throughs are unchanged.
Checks: scoped typecheck clean; 1 fps re-sweep of scenes 1 to 3 and 5 to 7 (182 stills, plus a scene 6 re-sweep after the label fade); grade checker **PASS (0 failures, 0 warnings)**; sheet replaced, because the frames from scenes 1 to 3 and 5 to 7 changed.
