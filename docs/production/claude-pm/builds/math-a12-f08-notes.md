# math-a12-f08 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 14 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f08-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,089 frames (470 s), 14 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · SEQUENCES AND SERIES".

## Files
- `src/explainer/lessons/math-a12-f08/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load), `config.ts`, `assets.ts` (the country town, the camper trailer and the concert ticket from brief 240; reused: the house sprite and the phone), `scenes.tsx` (re-exports `F08FinalFrame`);
  - `parts.tsx`: re-exports f07's parts (and, through them, f01 to f06's; read-only). Load-time checks of every value (the town 20 000 × 1.05ᵗ: 21 000 … 26 802, 25 526, one house per 1 000 extra people; r = 1 ± p/100; the chain message 121 500, 364 500, 1 093 500 and log 2000 ÷ log 3 ≈ 6.92; the trailer $13,311, $11,314, $9,617, 6.76, $4,267 at 12 years; the straight line 20/3, losses 4500, 3825, 3251.25; the oil well 0.9¹⁰, S₁₀ = 325 660.78, S∞ = 500 000, S₂ to S₄; the ticket 145.998 → $146.00 and $140.38; the mine 1 600 000 and 84 211; the loan 30 180). Lesson rigs: `TabStrip` (period tabs, bars, "?" slots, numbered "×r" arcs), `PctBar` (a 100% bar gaining or losing a block), `TotalsColumns` (running totals under a dashed limit);
  - `s1.tsx` (scenes 1 to 4; `Town`), `s2.tsx` (5 to 8; `AidBoard`), `s3.tsx` (9 to 14; `F08FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry after f07.

## Joins
- **Frame 0 is `F07FinalFrame`** (f07's stand-in for this lesson's opening: the town, the 20 000 / 21 000 bars with "×1.05", "?" tabs to 6 years, the chips). It fades over frames 14 to 28 above scene 1 drawn on the same geometry (town at x 315, y 610, 1,290 px; tabs at the same centres). Small differences under the fade: this lesson's bars use 0.0055 px per person (f07's stand-in 0.0075) so the arc labels clear the guess chip, and its arcs are numbered. No change to f07 is needed; if root wants an exact match, f07's stand-in could import this lesson's `Town` and `TabStrip` at these values.
- **Final frame `F08FinalFrame`** is f09's own opening: it renders f09's `LoanStrip` (imported read-only from `../math-a12-f09/parts`) with every part shown, and f09's two chips at f09's positions ("Next: reducing-balance loans" at x 1000, "?" at x 1740). f09's scene 1 currently draws its own `F08FinalStandIn` with the same `LoanStrip` and chips, so the join is exact; **root: f09 may import `F08FinalFrame` from `../math-a12-f08/scenes` in place of its stand-in** (identical picture). If f09 changes `LoanStrip`, this final frame follows it.

## Plate fit
- **Country town** (`ma12-country-town-v1.png`, 1920 × 819, box [213, 175, 1723, 678]) at 1,290 px (scene 1), 760 px (scene 2), 540 px (scene 3), 720 px (scene 13) and small in the memory aid and notes; native aspect.
- **House** (reused `phys-y11-house-v1.png`) as 96 px sprites (scaled with the town) on six slots on the measured empty land [1270, 551, 1705, 652]: one per 1 000 extra people, so six by year 6.
- **Camper trailer** (`ma12-camper-trailer-v1.png`, box [299, 226, 1346, 735]) at 560 px (scene 5) and as 120 px riders (scene 6).
- **Concert ticket** (`ma12-concert-ticket-v1.png`, box [376, 208, 1413, 690]) at 330 px (attempt 1) and 360 px (feedback 1).
- **Phone** (reused `ma12-phone-v1.png`, screen [175, 239, 795, 1429]) at 230 px in scene 4, its screen showing the live count.

## Departures from the design
- **Scene 1:** the house plate added on the town's land is 96 px wide (the design says about 70 px; 70 px read as grey specks at sheet size). The guess chip, its red cross and "only 5 steps" sit at the top left; on "How do we" the crossed chip gives way to "How do we count it right?" in the same place (the top right is the arcs' space). The readout board sits to the right of the town.
- **Scene 2:** both percentage bars are on screen from the first frame (the second at 100% until "Falling"). The "+d" and "×r" strips are two cards (arithmetic, geometric); the geometric card arrives on "Geometric models" because "factor" falls 0.9 s before the scene ends.
- **Scene 3:** the town and its givens ("A = 20 000 at t = 0, r = 1.05") hold the lower left until "r to the t"; the inset plot shows the town's population points on the 1.05ˣ guide; the town plate sits at the lower right. The chip "First term: at what time?" arrives on "So always ask" ("is" is 0.6 s from the end).
- **Scene 4:** a phone plate (reused, not named in the design) carries the live count "hour h: N have it", so the hour slider has a real object; the plot is in millions.
- **Scene 5:** a two-line plan card holds the right column until the first row. The "<" that turns to ">" is written as "n ? log ⅓ ÷ log 0.85" on "dividing" and becomes an amber ">" on "inequality" (so no wrong statement is shown). Checks are hand lines under the readout ("n = 6: about $11,314, still above", "n = 7: about $9,617, now below").
- **Scene 6:** the riders are drawn at the plot's points; a "two models" card sits at the top right; the readout board sits inside the plot's empty upper right.
- **Scene 7:** a plan card holds the right column until "That's fifty thousand"; "year 1 = a₁" is written on the first bar ("a₁ = 50 000") rather than as a separate tag; the running total shows as a card "total after n years" (it fades on the last word, when the dashed line's label becomes "500 000: approached, never passed").
- **Scene 8:** the memory card's three icons are a small town with a "t = 0" flag, a 100% bar with a 5% block and "→ ×1.05", and three numbered arcs.
- **Scene 12:** a plan card holds the left column until the first row; the mine strip's bars shrink with "×0.95" arcs and the teal total column fills towards the dashed 1 600 000 line.
- **Scene 13:** opens on the memory card, then f09's strip builds on its cues; while it builds, a heading "Multiplied, then something taken away", two cards ("so far: a geometric model ×r, ×r, ×r", "a loan ×1.006, then −$600, then …") and the town (×1.05, nothing taken away) fill the empty half, and all fade on "month by month" so the scene ends on f09's opening frame exactly.
- **Key notes:** the five design bullets; the framed card has the town, "Start, ratio, count." and the design's fuller line.

## Cue check
Every phrase resolves (load-time `cueFrame`). Repeated phrases named: scene 1 "After six years" 2 of 2; scene 2 "one point zero five" 1 of 2, "same factor" 2 of 2; scene 7 "zero point one" 1 of 2, "barrels" 2 and 3 of 3, "five hundred thousand" 1 of 2.

## Live readouts
- Scene 1: years t and the number of multiplications are the same whole number; the population is 20 000 × 1.05ᵗ for that t, rounded to a person; the bars, arcs and houses come from the same t.
- Scene 4: the hour is a whole number; the phone's count and the plotted points are 500 × 3ʰ.
- Scene 5: years n is a whole number; the value bar and readout use 30 000 × 0.85ⁿ (n eased between whole years on the slider moves).
- Scene 6: year n is a whole number; both values come from the two models; the riders use the same functions continuously.
- Scene 7: "total after n years" is S_n for the whole n shown; the columns use the same S_n.
- Scene 12: the teal column fills along S_n for n up to 60 (it never reaches the line).

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f08` (run through the stills-lock wrapper after a memory check): **PASS (0 failures, 0 warnings)**. Report: `out/explainer/Explainer-math-a12-f08/grade/Explainer-math-a12-f08-grade.md`. Empty paper per sheet frame 21% to 50%; largest line 48 to 92 px in every frame; the smallest sizes (20 to 25 px) are one- or two-character subscripts (a₆, S₁₀). Earlier runs: a 28-frame run failed scene 3's opening (69% bare), scene 7 (no 44 px line) and scene 13 (73% bare); a 32-frame run then passed with sparse warnings on scenes 3, 6 and 13; all fixed as listed below.

## 1 fps sweep
One full sweep (470 frames, grade checker with `--frames 470`, every second frame inspected on contact sheets) and one 4 s sweep (120 frames) after the fixes. Found and fixed: scene 6 mostly empty at its start (readout board moved into the plot, "two models" card added); scene 12 and scene 13 near-empty openings (plan card; scene 13's heading, cards and town); scene 2 sparse (town and bars enlarged, second bar shown from the start); scene 3 empty middle (the town's givens card); scene 4 "1 093 500" on the "1 000 000" label; scene 5 empty right column (plan card); scene 7 total card over the columns (stack scaled down, card above the line) and its separate hand tag over the givens (moved into the line's label); scene 10 strip too small and "years" on the "4" label; scene 12 "?" slots vanishing before the bars grew; scene 3 side notes too near the edge; the a₇ ring touching its tab label. Overlap check on the 120-frame sweep: none. The checker's "unchanged set-up" lines at 1 fps are an artefact of sampling every second (frames 1 s apart are always similar).

## Kit notes for root (described, not edited)
- `ScreenApp` and `PlateFields` were not needed here. `TermPlot` labels for a whole series appear above each point at 44 px, too big for dense series; this lesson draws its own labels.
- The grade checker's "Unchanged set-up" rule fires on every run longer than 16 frames; a minimum spacing would help sweeps.

## Check at playback speed
- Scene 1: the year slider (one year every 0.6 s from "After six years"), bars rising, arcs and numbers, and houses appearing on the land.
- Scene 2: the 5% block joining and the 20% block sliding off.
- Scene 4: the phone's count and the points climbing to 7 hours.
- Scene 5: the "?" becoming an amber ">" on "inequality".
- Scene 6: the two trailers riding down; the straight-line trailer stopping at 6⅔ years while the other keeps going.
- Scene 7: the totals columns building towards the 500 000 line.
- Scene 12: the teal column filling towards 1 600 000.
- Scene 13: the cross-fade from the memory card to f09's strip, and the cards fading out on "month by month".

## Honest grade
A on the checker (0 failures, 0 warnings). I grade the sheet A−: every frame has its main picture and a 44 px or larger line, but three frames are lighter than f07's best: frame 3 (scene 3 at 2 s: the symbol strip has only "A" yet, with the plot, the town and the givens card), frame 11 (feedback 1 at 1 s: the first row, a plan card and the ticket strip) and frame 13 (feedback 2 at 4 s: plan card and the mine strip). Frames 10 and 14 both show the memory card (scene 8, and scene 13 before the handoff); that repeat is the design's ("the memory-aid icons show small at the top"), drawn full size here. Root may call those B+.

## Root ink-check fix (14 November, after grading)
- Scene 5: the hand label "loses value" moved off the trailer's roof rail to clear paper between the trailer's wheels and the value bar (x 500, y 603, 32 px); the dashed $10,000 marker now stops 6 px below the bar instead of touching the readout card. Scene 5 re-swept at 1 fps (52 stills, frames 4440 to 5970): no contacts. Grade checker re-run: PASS, 0 failures, 0 warnings; the sheet changed (frames 6 and 7 are in scene 5) and was replaced.
