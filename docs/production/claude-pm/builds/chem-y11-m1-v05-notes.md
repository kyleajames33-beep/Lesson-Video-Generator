# Build notes: chem-y11-m1-v05 (paper chromatography and Rf)

Builder: Claude build agent, 20 November 2026. Not committed. Explainer id `Explainer-chem-y11-m1-v05`.

## Files created

- `src/explainer/lessons/chem-y11-m1-v05/common.ts` (lookups, holds, plates with measured alpha boxes, dye colours, hook and worked-example spot data)
- `src/explainer/lessons/chem-y11-m1-v05/parts.tsx` (developing strip, dimension line, crosshair, two-layer jar with the strip and solvent between the layers)
- `src/explainer/lessons/chem-y11-m1-v05/s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16)
- `src/explainer/lessons/chem-y11-m1-v05/scenes.tsx`, `assets.ts`, `config.ts`
- `src/explainer/registry.ts`: one import and one list entry after v04.

## Plates used (real files, uniform scale)

`y11c-chromatography-jar-back-v1` and `-front-v1` (drawn with one box so they register; the coded strip and solvent sit between them), `m5x-pencil-v1` (draws the baseline and the front mark by itself), `y11c-top-pan-balance-v1` (V06's choice), `y11c-watch-glass-sand-v1`, `y11c-watch-glass-salt-v1`. No plate missing.

## Departures from the design (with reasons)

- **"Rf" without a subscript.** The house text parser only lowers digits (`_2`), not letters, so "R_f" printed with a literal underscore. All screen text writes "Rf". If root wants a true subscript, it needs a parser change in the shared text part (not done: not this agent's file).
- **The lid.** The lid is painted on the jar's back layer, so it cannot slide on. On "lid" (scenes 1 and 9) the lid takes a pen ring and the tag "lid on".
- **Scene 1.** V04's final board fades; the strip slides to the right as a close-up while the jar closes round a smaller copy of the same strip; both develop on one clock (spot height = Rf x front distance, author note d: 0.20, 0.50, 0.80). The tag "water below the pencil line" is 44 px (the checker needs one working-size line).
- **Scene 3.** The switching model: eight dye particles on a 60-frame cycle (blue moves 15 frames of 60, yellow 45); a particle that is stuck sits against a fibre. The two "time moving" readouts are computed from the same schedule on the shared timer (they settle at 25% and 75%).
- **Scenes 5 and 6.** The painted jar with a developed strip sits at the lower right (real apparatus on screen while the definition and worked example run).
- **Scene 5.** A small recap of the scene 3 time-moving bars sits in the right zone until the ratio is written (so the frame is not mostly empty while the answer is given). The front dimension line is on the strip's left, the spot line on its right.
- **Scene 7.** The worked strip replays from 0.3 cm; the front pauses at 4.0 cm through the halfway discussion, then completes to 8.0 cm on "change". All five readouts are computed from the replay (P = 0.30 x front, Q = 0.80 x front; the ratios are read back from those distances). The "different solvent" case is a dashed inset with a small strip (no values).
- **Scene 8.** The three-lane sheet develops on "same time". The "another dye, Z" and "different solvent" cases are dashed insets.
- **Scene 9.** The painted pencil (rotation-free, uniform scale) moves along the baseline as the coded line is drawn, and later ticks the front. The two wrong set-ups are dashed insets, each struck in red.
- **Scene 10.** Wrong dimension lines are red dashed lines struck in red. The number line places the hook spots at 0.20, 0.50, 0.80 (screen only).
- **Scene 15 (final frame), root change 20 Nov.** Rebuilt to match V06's opening frame exactly: the top-pan balance (`y11c-top-pan-balance-v1`, V06's `Balance` at balGeo(560, 380, 420), display "---.-- g"), V01's watch glasses of sand and salt at (1330, 330) and (1330, 560) with hand labels, the chip "how much of each?", V06's coded black-ink chromatogram at (120, 300) with "which components?", and the "Next" chip at y 70. Pieces are imported read-only from `../chem-y11-m1-v06/parts`. The analytical balance is no longer used.
- **Key notes.** Five two-line bullets (design wording, lightly trimmed), the framed "Spot over front, stickier stays lower." card and the method line at 30 px.

## Cue check

All cue phrases checked against the measured captions (0 missing) after three occurrence fixes ("zero" #5 at 498, "the solvent and" at 764, "pencil doesn't" at 163). Holds use `voiceover.endFrame`; attempt rings show full from "Pause here".

## Checker result

Final: **PASS WITH WARNINGS (0 failures, 1 warning)**: dense key notes (551 characters including the card and the method line). Round 1: FAIL (no 44 px line in the hook sample frame; scene 5 sample frame 67% empty), both fixed in round 2; round 3 added the painted jar (with a developed strip) to the Rf and worked-example scenes, clearing the "few pictures" and sparse-frame warnings. Report: `out/explainer/Explainer-chem-y11-m1-v05/grade/Explainer-chem-y11-m1-v05-grade.md`; sheet alongside.

## Builder's sheet grade

A. Weakest frames: the hook's early frame (strip still mostly white before the run) and the feedback 2 frame (right side light); both pass the fill rules.

## Check at playback speed

- Scene 1: the strip slide into the jar; the front rising and the dot splitting into three spots on "apart".
- Scene 3: the stuck/carried rhythm reads as switching, not jitter; the blue and yellow groups separate.
- Scene 7: the replay pause at 4.0 cm and the readouts holding 0.30 and 0.80.
- Scene 9: the pencil drawing the baseline on "Draw the baseline" and the front tick on "as soon as".
