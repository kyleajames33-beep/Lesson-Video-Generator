# math-a12-f05 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 13 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f05-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 15,306 frames (510 s); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · SEQUENCES AND SERIES".

## Files
- `src/explainer/lessons/math-a12-f05/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing in a script check against the measured captions), `config.ts`, `assets.ts` (paper sheet, folded sheet, chessboard, rice grain; reused house and Moon), `scenes.tsx` (re-exports `F05FinalFrame`);
  - `parts.tsx`: re-exports f04's parts and, through them, f01 to f03's (read-only imports); load-time checks of every value (2, 4, 8, 16; the paper 0.2, 0.4, 25.6 mm, 3.28 m, 13.4 km, 439 805 km, 2⁴² = 4 398 046 511 104; ratios 3, 3, 3 and 2, 2, 1.75; 100, 50, 25, 12.5 and 1, −2, 4, −8; 3 × 2ⁿ⁻¹ to 96; a₈ = 384 and the slip 768; log(1000/3)/log 2 ≈ 8.38, a₉ = 768, a₁₀ = 1536; r³ = 8, a = 3; A1 −972, −243 and 2916; A2 both sequences; totals 1, 3, 7, 15, 31 and 512). Lesson rigs: `FoldRig`, `ThickRuler`, `GapTexts`, `RSlider`, `MiniLadder`, `RiceBoard`, `RiceStrip`, `Framed`, `SlotRow`;
  - `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 9, `AidLadders`), `s3.tsx` (10 to 15, `RiceScene`, `F05FinalFrame`).
- `src/explainer/lessons/math-a12-f04/s3.tsx`: `DoubleBoard` is exported with a `bare` option (no heading, no chips), so f05 can keep the ladder while they change. f04's own frames are unchanged.
- `src/explainer/registry.ts`: one import and one array entry, after f04.

## Joins
- **Frame 0 is `F04FinalFrame`** (the doubling board). It fades over frames 14 to 28 above the same board drawn bare; the new heading writes from frame 34. The board stays until "A sheet of paper".
- **Final frame: `F05FinalFrame`** (f06 opens on it): the heading "What happens when we add the terms?", the painted chessboard (640 px) with 1, 2, 4, 8, 16 painted grains on the first five squares of its bottom row, those five squares enlarged at the right (the same plate, cropped) with blue counts and amber "×2" between them, five teal total columns 1, 3, 7, 15, 31 with "running totals", and the chips "1 + 2 + 4 + … + 512 = ? (10 squares)", "Next: add the terms fast" and "?". The notes cross-fade back to it.

## Plate fit
- **Paper sheet (`ma12-paper-sheet-v1.png`, alpha32 box [124, 339, 1337, 871])** at 640 px wide (scene 1) and 400 px (scene 4). **Folded sheet (`ma12-paper-folded-v1.png`, box [313, 383, 1128, 771])** at 0.56 of the sheet's width, each plate at its own aspect; the swap is a cross-fade on the first fold.
- **Chessboard (`ma12-chessboard-top-v1.png`, box [160, 159, 1095, 1120])** at 640 px. Its squares are not quite square (Codex's measured column and row lines), so grains are placed from those lines, not from a regular grid. The enlarged strip is the same file cropped to the bottom row's first five squares at one uniform scale (800 × 155 px).
- **Rice grain (`ma12-rice-grain-v1.png`)**: about 14 px on the board and 30 to 60 px in the strip.
- **House and Moon (reused)**: 150 px and 180 px wide beside the thickness ruler.

## Departures from the design
- **Scene 1:** the thickness ruler is a blue-filled tube with everyday labels at every second decade (0.1 mm, 1 cm, 1 m, 100 m, 10 km, 1 000 km) in place of powers of ten; the landmarks are "fold 8: a thick book", the house at "fold 15: 3.3 m", "fold 27: above the planes" and the Moon (the four-storey building at fold 17 would sit on the house); a live "layers" count sits under the stack; the guess chips sit left of the ruler at their heights and are crossed when the marker passes the Moon.
- **Scene 2:** the divisions ("6 ÷ 2") sit in the gaps between the cards and each arc label turns from "× r" to "×3"; the first ladder moves up when the second arrives.
- **Scene 3:** one plot with the ratio slider under it (a = 100 for r = ½, then a = 1); the term cards at the right are live; a small "2, 6, 18, 54, r = 3" ladder at the top right is the contrast for "doesn't have to be a whole number". For "r can never be zero" the knob stops at the red mark (r = −0.1 on the badge) and a grey ladder "a, 0, 0, 0" with "ratio test: 0 ÷ 0 = ?" carries the reason. The scene 2 ladders do not shrink to the top.
- **Scene 4:** a numeric example ladder (a = 3, r = 2) sits under the symbolic one from the first frame and takes its factored form card by card (3, 3 × 2, 3 × 2², …). In the second half the paper rig returns smaller with a three-row readout (folds, term n, thickness).
- **Scene 5:** jump labels on the three large jumps only (+12, +24, +48: the small ones would sit on the lines); the term cards are live while the slider moves; the plot window zooms for r = ½ and for r = −2.
- **Scene 7:** the check plot shows terms 1 to 8 from the first frame, then the 9th and 10th against the 1000 line.
- **Scene 9:** numeric ladders (3, 5, 7, 9 with "+2"; 3, 6, 12, 24 with "×2").
- **Feedback 2:** the four-slot ladder from the question stays at the right with "2 multiplications", then the two sequences.
- **Handoff:** the first five squares are also shown enlarged, because 16 grains on a 77 px square cannot be read; the counts and "×2" marks sit under the enlarged strip, not under the board.

## Cue check
Every phrase resolves; repeated phrases named: scene 1 "four" #2; scene 2 "is three" #1, #2, #3; scene 3 "zero" #2; scene 4 "n minus one" #2; scene 8 "r cubed" #1; scene 13 "r squared" #1, "fifty-four" #2; scene 14 "three" #1.

## Live readouts (root's f04 note applied here)
- Scenes 3 and 5: r is rounded to two decimal places once per frame; the slider badge, the term cards and the plot all use that value.
- Scenes 1 and 4: folds is a whole number and the thickness, the term number and the layer count are worked out from it; only the ruler's fill moves between whole folds.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f05`: **PASS WITH WARNINGS (0 failures, 10 warnings)**: eight sparse frames (52 to 58% bare: scenes 1, 2, 3, 4 twice, 6, 10 and 11), one "text too small" (the subscript "n − 1" at 25 px), and "few pictures". An earlier run failed the openers of scenes 3 and 4 as mostly empty; fixed with the recap ladder and the example ladder.

## 1 fps sweep
Four sweeps with the probe (511 frames each), every second frame inspected on contact sheets; overlap and line-through-text checks on every frame. Found and fixed: a hand tag on the plot's "3000"; the "a₉ = 768" label on the 1000 line and on a point; jump labels on the plot lines; card numbers touching their borders; brackets touching their labels; the formula's power on its frame's rule; an empty plot and empty slots at scene openers; cards that opened with blank lines.

Line-through-text check, last run: 10 runs, none a defect. Nine are red strikes on crossed chips, slips and mistake cards; one is the hand ring drawn round the power "n − 1" in scene 5.

## Check at playback speed
- Scene 1: the fold fast-forward (about 6 s): the blue fill climbing the ruler, the landmarks arriving, the readout counting.
- Scene 3: the slider from ½ to −2 (the plot cross-fades) and from −2 to the red mark.
- Scene 4: the step counter; the fold run to 42.
- Scene 5: both window zooms while the slider moves.
- Handoff: grains arriving on the board and the strip together; the columns building.

## Honest grade
A on the checker (0 failures), but with eight sparse warnings it is the weakest of the two so far. Root may call these B+: the paper phase of scene 1 before the fast-forward (the middle of the frame is bare for about 8 s); scene 2 before the second ladder arrives; the scene 6 and feedback 1 frames (board work with one ladder).
