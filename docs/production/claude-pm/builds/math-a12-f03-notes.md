# math-a12-f03 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 13 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f03-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,247 frames (475 s); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · SEQUENCES AND SERIES".

## Files
- `src/explainer/lessons/math-a12-f03/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing in a script check against the measured captions), `config.ts`, `assets.ts` (tin, display base, hillside strip, tube seedling), `scenes.tsx` (re-exports `F03FinalFrame` and `F04OpeningStandIn`);
  - `parts.tsx`: re-exports f02's and f01's parts (read-only imports); load-time checks of every value (1 + … + 15 = 120, 15 × 16 = 240, 7.5 × 16 = 120, 1 + … + 50 = 1275; tally 1 to 45 and 55; S₂₀ = 820, a₂₀ = 79, the slip 860; 151 terms and 18 875; S₁₃ = 442, S₁₄ = 511, root ≈ 13.85; Sₙ = 11, 20, 27, 32, 35, 36, 35, 32, 27; 7 and 7.5; A1 92, 1455 and the slip 1500; A2 2n², 200 and 242; the crew 50, 80, 110). Lesson rigs: `TinFlip` (the pyramid by base point and uniform scale, row glows, labels and pair arcs, the hue-shifted violet copy that lifts, turns 180° about the pyramid's centre and slides 8 tins right, row readouts and a ringed row), `PlantingStrip` (f04's opening, see Joins);
  - `s1.tsx` (scenes 1 to 4, `Framed`, `FORM1`, `FORM2`, `MiniShape`), `s2.tsx` (5 to 9, `AID3`), `s3.tsx` (10 to 15, `F04OpeningStandIn`, `F03FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry, after f02.

## Joins
- Frame 0 is `F02FinalFrame` (imported from `../math-a12-f02/s3`), drawn over a replica at the same geometry (pyramid base point (960, 880), tins 96 px). It fades over frames 22 to 38; the new heading writes from frame 40.
- The final frame is `F04OpeningStandIn` (f04 is not built; as i13 does for i14): the heading "A planting crew", the painted hillside strip with day tabs 1 to 12, tube seedlings (one per 10 planted: 5, 8, 11) and blue bars 50, 80, 110 over days 1 to 3 with "+30" arcs, "?" over days 4 to 12, a dashed "1,200 in total?" line beside an empty dashed total column, "Next: more or less than 1,200?" and "?". The notes cross-fade back to it. **When f04 is built, its opening must match this frame, or f03's export should be replaced by f04's own frame.**

## Plate fit
- **Food tin and display base:** as in f02 (96 px tins, rows 38.1 px; the visible tin is 2.52 : 1, not the design's 2 : 1, so the pyramid is 1,440 × 572 px and the parallelogram 2,208 × 572 px unscaled). For the flip-and-fit the camera scales the whole picture to 0.74 about a computed point (uniform; the parallelogram then spans 1,634 px); the base plate fades while zoomed. The violet copy is the same plate with a CSS hue shift (a multiply tint made it brown); never redrawn or stretched.
- **Hillside strip (`ma12-hillside-strip-v1.png`, alpha32 box [0, 450, 2172, 724], measured top profile):** one tile at 1,800 px wide; seedlings stand on the measured profile (linear between Codex's profile points).
- **Tube seedling (`ma12-tube-seedling-v1.png`, alpha32 box [207, 221, 817, 1320]):** 66 px tall, two staggered rows per day.

## Departures from the design
- **Scene 1:** the tally lights rows top-down from "Adding fifteen numbers", slowing as rows lengthen, with the board "rows added", "tins so far"; the mis-add slip reads "… 45, 54?" (struck, "easy to slip"); "a trick?" and "Why does it work? Every AP?" chips sit at the left.
- **Scene 2:** the copy lifts, turns and drops into place; the "16" readouts are 26 px (the zoomed rows are 28 px apart; three-character labels may sit at 18 px or more); the callout reads "row 4: 4 blue + 12 violet = 16"; "15 rows" sits under its bracket.
- **Scene 3:** a "the pyramid" card and a plan card fill the frame until "two lots of S sub n"; the small parallelogram is the actual tin picture (0.27 scale).
- **Scene 4:** the pyramid (0.5 scale) stands at the lower left from the first frame; its bottom row glows green on "again".
- **Scenes 5, 6, 7 and feedback 1:** a short plan card holds the empty column until the first working row (the frames were 60 to 71% bare).
- **Scene 7:** the columns build from "How many terms" (the design had them after the formula), so the stack is never empty; "442" and "511" sit beside their columns; the 500 label sits at the line's left end.
- **Scene 8:** points arrive in step with the narration (1 to 4 as the formula is set up, 5 to 8 on "three, one, minus one, minus three", 9 after "again"); readouts n, aₙ, Sₙ follow the newest point.
- **Memory aid:** the parallelogram (0.34 scale) with "pairs fill equal rows: n rows of a + aₙ, halved"; the slip's caption is "not an arithmetic sequence".
- **Attempt 2 picture:** an outlined column "Sₙ = ?" beside the dashed 200 line (with "?" inside).

## Cue check
Every phrase resolves; repeated words named: scene 2 "sixteen" #1 and #2, "twenty" #1; scene 3 "a sub n" #2 and #4 (the column total and the halved form); scene 4 "lots of d" #3; scene 5 "eight hundred and twenty" #1; scene 6 "fifty-one" #1; scene 7 "five" #5 ("thirteen point eight five", not "five hundred"); scene 9 "seven" #2; scene 11 "ninety-two" #1, "twenty-nine" #2; scene 14 "seedlings" #2.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f03`: **PASS WITH WARNINGS (0 failures, 5 warnings)**: sparse frames 3, 6, 7 and 12 (54 to 58%) and "few pictures" (5 of 16 teaching frames hold a plate or drawn diagram; scenes 5, 6, 8, 11 and 13 are board work). Earlier runs failed five frames as mostly empty and one with no line at working size (scene 7's opener); fixed with plan cards, an earlier stack build and a 46 px plan card. Report: `out/explainer/Explainer-math-a12-f03/grade/Explainer-math-a12-f03-grade.md`.

## 1 fps sweep
Three sweeps with the probe, every frame inspected. Found and fixed: the copy never dropping after its lift (it sat one row high, leaving a gap in the parallelogram); the multiply tint reading brown; the "16" readouts flying off frame as the camera returned; the "Why does it work?" chip on row 9's label; "15 rows" on the hook line; the crew chips on the "+30" arcs; overlapping lines in the notes card's aid; the 511 label on the task card and on the 500 label; the plan card fading under the slip in scene 5; the bars and seedlings too small to read.

## Check at playback speed
- Scene 1: the tally slowing row by row, and the mis-add.
- Scene 2: lift, 180° turn and slide of the violet copy (about 3 s) with the camera pulling back; the "16" readouts running down the rows; the copy sliding back and the camera returning.
- Scene 3: the "+d" and "−d" arcs one column at a time and the teal "a + aₙ" labels.
- Scene 7: the columns climbing to the 500 line, the pause at 13 and the 14th column passing the line.
- Scene 8: the Sₙ points rising to 36 and falling back to 32.
- Handoff: seedlings and bars arriving day by day.

## Honest grade
A on the checker (0 failures). Root may call frames 3 (scene 3: ladders and two cards, 56% bare), 6 and 7 (scenes 5 and 6 at their second rows: one working line and the plan card) and 12 (feedback 1 opener: plan card and slot row) B+; and the lesson is board-heavy in its middle (worked examples 5 to 8 carry no plate, as the design intends).

## Probe check 13 Nov
- Line-through-text probe (`out/explainer/.repair-sweep/ink-check.sh`, 1 fps, three renders) before the render: 16 runs, 10 after fixes. The pair sums "1 + 15 = 16" to "3 + 13 = 16", "forwards" and "backwards" on paper pads (s1.tsx); "442" and "511" given a paper stroke (s2.tsx). s3.tsx (final-frame wiring, other session) untouched. Accepted: red strike-outs, 4 to 8 px touches on the tin stack numbers.
- Sheet re-made because the fixes changed sheet frames: `docs/production/claude-pm/builds/math-a12-f03-sheet-repair2-2026-11-13.jpg`. `npm run grade:explainer`: PASS WITH WARNINGS: 0 failures, 5 warnings.
