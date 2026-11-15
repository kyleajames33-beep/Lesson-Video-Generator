# math-a12-s03 build notes (Revision 4 build on the measured narration)

Builder: Claude build agent, 16 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-s03-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,234 frames (474 s), 14 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s03/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S03FinalFrame`);
  - `parts.tsx`: re-exports s02's parts (read-only; they carry s01's and the f-strand board parts). Load-time checks: die 3.5 and 35/12; visits μ = 1.7, weighted deviations sum 0, Var 0.81, E(X²) 3.7, σ 0.9, unweighted −0.8; the stored cats (Python `random.Random(33).choices`, 2,000 values stored as a string): first ten 2, 2, 3, 1, 2, 3, 3, 1, 2, 2 and sums 21, 161, 1,706, 3,415; insurer 210, 1,285,900, σ 1,134; A1 1.6, 3.2, 0.64; A2 a = 0.3, b = 0.5 and the slip's 2.2. Rigs: `Cat`, `Carrier`, `DotPiles` (1,000 imagined cats, each dot 10), `BeamQuestion` (A2's picture), `ThinBars` (the handoff);
  - `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (9 to 14; `S03FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry after math-a12-s02.

## Plates used (all exist; never stretched; alpha > 32 boxes measured)
- `biology/m5x-cat-orange-v1.png` (anchor, box [224, 339, 1776, 1599]), `maths/ma12-pet-carrier-v1.png` (box [269, 171, 1172, 949]), `maths/ma12-die-red-v1.png` (scene 1, from s02's handoff).

## Joins
- **Frame 0 is `S02FinalFrame`** (imported from `../math-a12-s02/s3`); scene 1's own layer cross-fades in over frames 12 to 30. Its beam is drawn on exactly the s02 bar geometry (x 550 to 1600, base y 720), so the bars become weights on a beam that slides its fulcrum from 2.5 to 3.5 and levels.
- **Final frame `S03FinalFrame`** (scene 13's end; scene 14 cross-fades back to it): chip "Next: what if X can take any value in an interval?", 64 thin teal bars of a smooth hump across a continuous axis 0 to 4 (no y labels, no values), hand "any value in an interval", a large "?". s04 should open on it.

## Departures from the design
- **Beam:** the kit `StudioBalanceBeam` (violet beam and fulcrum, tilt from the moment, level only at the mean) carries scenes 1, 3, 5, 6, 7, 10, 13; the "balance point" readout is the fulcrum label.
- **Scene 2:** the 2,000-cat run reaches 10 cats by "After ten", 1,000 by "seven" and 2,000 two seconds later; ten coded badges show the first ten visit counts (no cat drawings).
- **Scene 3:** 1,000 cats are four dot piles (each dot 10 cats) rather than a tray sorting; the beam's fulcrum slides from 1.2 to 1.7 on "the beam balances", and the 1 and 2 bars turn amber on "heavier bars".
- **Scene 4:** kit `DeviationArms` (arms, weighting, two equal stacks 0.38 = 0.38, squares); its μ label is replaced by a hand tag placed clear of the squares.
- **Scene 5:** the table rows are x, P(x), (x − μ)², (x − μ)²P(x) (no sum cell; Var is a framed answer); `SpreadBrackets` above the beam (μ ± σ, 0.8 to 2.6).
- **Scene 6:** a "so far" chip (Var = 0.81 from scene 5) and the small beam stay on screen; two crossed slips side by side.
- **Scene 7:** no slider control; the big claim's weight slides out along the money line ($0 to $8,000) while the fulcrum and its readout move $50 → $210. Weights are bars whose heights follow the probabilities (0.02 is a sliver with its label), not discs.
- **Scene 11's picture** is coded (`BeamQuestion`: dashed slots 0.2, a, b; fulcrum at 2.3); scene 12 fills the slots to 0.3 and 0.5.

## Cue check
Every phrase resolves (0 missing). Repeated phrases named: "from mu" 2 (scene 4), "minus mu squared" 2 (6), "Three point two minus" 2 (10), "b is zero" 2 (12), "thinner" 1 and 2 (13).

## Live readouts and simulations
- Scene 1, 3, 7: the beam's tilt and fulcrum; scene 7's balance-point readout reads the same `pivot` as the beam.
- Scene 2: kit `RunningMeanTrace` on the stored run with a "cats so far / average visits" board.
- Scene 4: `DeviationArms`. Scene 13: bars splitting 4 → 16 → 64.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s03` (final): **PASS WITH WARNINGS (0 failures, 6 warnings)**, all sparse frames (54 to 58% bare: scene 1 as the cat arrives, scene 4 while the weighted arms are short, scene 6 early, scene 10, scene 13's recap) and scene 9 (a question scene; empty axes by design). Earlier runs: 5 failures (scene 1 empty before the cat, scene 5 with no 44 px line, scene 6 empty at its start, scenes 12 and 13 near-empty at their starts) and collisions (scene 3 hand over a pile count; scene 7 "0.93" and "0.02" over the working rows and readout); all fixed (stage-B anchor from "Now", a 46 px working line, the "so far" chip and small beam, a hand tag and cat in scene 12, the recap beam from the first frame, the money line moved right and lowered).

## Ink check (line through text)
`bash out/explainer/.repair-sweep/ink-check.sh s03` (final): 9 runs. Six deliberate red strikes ("(0 + 1 + 2 + 3) ÷ 4 = 1.5", "Σx²P(x)²", "E(X²) = μ²", "expected profit $90, so no risk", "3.2 − 1.6 = 1.6", "a = b = 0.4"). Left, judged trivial: the kit `DeviationArms` squares overlap the small "(0.3)²" label by 12 px for a few seconds (scene 4; the kit draws the squares on rows that overlap); near-paper ink (242, 237, 228) beside "$0" and "0.02" for under a second in scene 7. Fixed after the first run: the μ tag under the Var answer box (scene 4) and the amber circles in scene 6 touching their neighbours (spaces added).

## Check at playback speed
- Frames 0 to 30: s02's frame exactly, then the beam levelling at 3.5.
- Scene 1: the visit bars rising on each spoken probability.
- Scene 2: the running average's wobble and settle (about 3 s for 10 to 1,000 cats).
- Scene 4: arms shrinking, stacking and squaring.
- Scene 7: the far weight sliding out and the fulcrum following ($50 → $210).
- Scene 13: bars splitting 4 → 16 → 64 on "thinner and thinner".

## Honest grade
**A** on the 16 frames by the A rules (no failure; every teaching frame has the cat, the beam or a live simulation; current lines 44 to 52 px; framed answers and crossed slips; five short notes with the framed card; 45 s hold). Soft spots root may weigh: six sparse-frame warnings (54 to 58% bare), especially scene 4 between the weighting and the squares where the weighted arms are short; scene 7's dense right column.

## Root review round (16 November): fixes and final checks
1. **A quicker formula (scene 6):** scene 5's variance table (x, P(x), (x − μ)², × P(x)) and the visit beam open large at the left beside the cat and "a faster way to the same 0.81". They slide to the right on "Weight each part" so the derivation rows have room.
2. **Centre and spread (scene 13 recap):** the three framed results (E, Var, σ) show from the start. The beam carries the violet μ ± σ bracket. Callbacks on the right: the cat with "visits: μ = 1.7, σ = 0.9", and the carrier with "insurer: E(C) = $210, σ ≈ $1,134".
3. **Measuring spread (scene 4):** the visit bars stand on a level beam above the deviation arms on the same scale. The squares are now drawn by the lesson as a row of four at the right (sides ∝ |x − μ|, labelled 2.89, 0.49, 0.09, 1.69 underneath), not by the kit.
4. **Hook (scene 1):** the cat is larger (470 px wide) and the visits table (x, P(x)) fills cell by cell on the spoken values. **Your turn (scene 9):** a givens card and the cat plate sit beside the table and the empty axes.
5. **"(0.3)²" collision:** gone. The kit squares are no longer used (lesson-drawn squares at the right, labels clear of every line). The kit `DeviationArms` and shared kit were not edited.
- **Final grade:** `npm run grade:explainer -- Explainer-math-a12-s03`: **PASS WITH WARNINGS (0 failures, 2 warnings)**, sparse frames at 54% in scenes 9 (a question scene) and 10. Down from 6 warnings. Sheet remade.
- **Final ink check:** 8 runs: the 6 deliberate red strikes listed above, plus two sub-second near-paper traces in scene 7 by "$0" and "0.02" (trivial). Fixed during this round: the beam's "level" tag under a deviation arm (beam raised) and the μ tag under the Var answer box.
