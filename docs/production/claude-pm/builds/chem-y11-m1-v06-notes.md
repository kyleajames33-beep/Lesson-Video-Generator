# chem-y11-m1-v06 build notes (built on the measured narration)

Builder: Claude build agent, 20 November 2026. Explainer id `Explainer-chem-y11-m1-v06` (16 scenes, 13,467 frames; key notes 1,350 frames = 45 s). Sheet: `out/explainer/Explainer-chem-y11-m1-v06/grade/Explainer-chem-y11-m1-v06-grade-sheet.jpg`. No MP4 built.

## Files
`src/explainer/lessons/chem-y11-m1-v06/`: `common.ts` (scene lookups, holds, plates with measured alpha boxes, `pct`/`g2`/`p1` formatters), `parts.tsx` (V01 parts re-exported plus the balance with a coded display, `placeAt` for objects on the pan, `BasinBowl` (the basin clipped off its grey mat when it sits on the balance; a crop, not a stretch), the accounting bar `AccBar` (segments, rose hatched gap, teal hatched overhang beyond the end line, an optional "whole mixture" base fill so the bar is never an empty box), the coded chromatogram, `TaskStrip`, `GivensCard`, `PauseHoldR` (ring shown full from "Pause here"), drops, arrows), `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16), `scenes.tsx`, `assets.ts`, `config.ts` (`config_y11c_m1v06`). Registry: import and entry added after the V02 (and the other agent's V03, V04) lines. Imports read-only from V01 and V02 common/parts/s3 and from `chem-y11-m2-v06/parts` (teal) and the kit `Countdown`.

## Plates
All design-named plates exist and are used at their measured alpha boxes, uniform scale only: top-pan balance, empty basin, basin with crystals, basin on hotplate, dry sand and salt beaker, sand and salty water beaker (V02), filter funnel with sand, empty filter funnel (final frame), empty watch glass, sand and salt watch glasses (V01), glass rod, drying oven, salt jar (V02). None missing.

## Departures from the design (with reasons)
- Opening frame (kept by root; the V05 builder will match it): V05's final frame is rebuilt from V05's description with the **top-pan** balance (V06's design names it), not V05's analytical balance (`m8-balance-watch-glass-v1.png`, which V06's design rejects). The chromatogram is a coded strip (blue, pink, yellow spots). Root: V05's builder should end on a matching frame, or accept this small change at the join.
- Scene 2: all four process plates are on the board from the first frame (root rule "fill from the first frame"); the active step's frame turns amber on its cue and the labels and hand tags write on cue.
- Scene 3: the sand watch glass is weighed first (27.35 g), then the empty glass (21.35 g), so each display reading ticks before it is spoken (the narration says 27.35 first). Until "The dried sand", the two watch glasses wait at the bottom right ("weighed next"). The "boxes from scene 1" are not repeated (the framed 14.00 g and 6.00 g carry it).
- Scenes 4, 6, 12: the accounting bar starts as a filled "whole mixture: 20.00 g" (25.00 g, 15.00 g) bar that the coloured segments replace as they land, instead of an empty dashed outline.
- Scene 5: the model tokens (6 sand, 14 salt; "1 token = 1 g") sit in the beaker from the first frame and move on "They move" and "matter".
- Scene 6 (root round 1 fix): the beaker of mixture stands on the balance (display 25.00 g) at the lower left from the first frame; the other group's sand and salt (painted) sit at the right with their masses. The bar segments (labelled 8.00 g and 16.00 g) land on "They get back" and "sixteen" with the total readout; the working rows open on "They get back" and their percentages land on "thirty-two" and "sixty-four". The struck "divide by what came back" chip and its red tag sit in the right column.
- Scene 8: a magnifier on the damp sand ("water between the grains") was added so the thinking frame shows the cause; no hand tags.
- Scene 9: shortfalls and overhangs under 0.4 g are drawn at least 24 px wide (the design asks for this for the gap); the overhang shrinks to nothing as the reading falls to 6.00 g.
- Scene 15 (final frame): "can't filter / a compound apart" is two lines (one line collided with "compound: fixed ratio"); the chip is 44 px. V07's opening matches this exactly.
- Key notes trimmed to short lines (498 characters on screen); the balance (6.00 g) sits under the memory card.

## Cue check
Every change is keyed with `cues()` to measured word starts; all cue phrases resolve at load (bundled and loaded in node before registering). Display readings tick before each number is spoken (scene 3, scene 9). Countdown: 3 s ring from "think" in scene 8; 10 s ring shown full from "Pause here" in scenes 11 and 13.

## Things to check at playback speed
Scene 2 strip timing (amber step frame, drops, wisps); scene 3 display ticks against "forty-five", "fifty-nine", "twenty-seven", "twenty-one"; scene 5 token paths (sand stops on the paper, salt runs on to the basin) and the bar split/rejoin; scene 7 spitting drops; scene 9 drying run (6.40, 6.12, 6.00, 6.00 g; total 102.0% to 100.0%); scene 15 the salt jar and the struck funnel.

## Grade checker (round 2 after root review, 20 Nov 2026, about 10:35 Sydney)
`npm run grade:explainer -- Explainer-chem-y11-m1-v06`: **PASS (0 failures, 0 warnings)**. Frame 6 (loss-run) now shows the beaker on the balance (25.00 g), the bar building in 8.00 g and 16.00 g segments, the total readout and the row openings. Report: `out/explainer/Explainer-chem-y11-m1-v06/grade/Explainer-chem-y11-m1-v06-grade.md`.

## Builder's sheet grade
A.
