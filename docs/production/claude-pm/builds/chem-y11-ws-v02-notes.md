# chem-y11-ws-v02 build notes (built on the measured narration)

Builder: Claude build agent, 20 to 21 November 2026. Explainer id `Explainer-chem-y11-ws-v02` (16 scenes, 14,371 frames; key notes 1,350 frames = 45 s). Sheet: `work/quality-audit/fixed/chem-y11-ws-v02-sheet.jpg` (copy of the grade sheet; no frame stamps). No MP4 built. Narration unchanged.

## Files
`src/explainer/lessons/chem-y11-ws-v02/`:
- `common.ts`: lesson lookups, holds, plates with measured alpha boxes (all six 1024 x 1536 crucible plates share one registration), the rushed-test and run data (illustrative), the prediction curve, and the trial-run mass model (`trialGain`, `trialReading`, `pcLost`: one clock for the balance reading, the % lost readout, the water molecules, the blue tinge and the bench trace).
- `parts.tsx`: V08 parts re-exported; new: colour key, `cruGeo`, coded `Flame` and `Steam`, `Bowl` (a crucible bowl clipped off its tripod to sit on a balance pan), `BalanceW` (balance with a large display), `Tag`, `Inset`, `CrossBox`, `PlanBoard` (four sections; prompts in dark ink until a section fills; collapsed summaries; slate strikes; 1 or 2 columns), `RiskMatrix` and `RiskMarker` (example 3 by 3 matrix), `Axes` and `PredCurve`.
- `plan.ts`: the plan board wording in one place.
- `opening.tsx`: read-only import of ws-v01's `SceneHandoff`, `FF` and assets.
- `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16), `scenes.tsx`, `assets.ts`, `config.ts` (`config_y11c_wsv02`).
- Registry: import and entry added after `config_y11c_wsv01` (one edit). The file had CRLF endings in the working copy when I edited it; I saved it with LF endings (HEAD is LF), so `git diff` shows only the two added lines.

## Plates
All design-named plates exist and are used at uniform scale: the six crucible plates (`y11c-cuso4-crucible-blue`, `-blue-lit`, `-black`, `-lid`, `-lid-white`, `y11c-crucible-empty-lid`), `m5-g02b-open-crucible`, `y11c-top-pan-balance`, `y11c-crucible-tongs`, `y11c-heatproof-mat`, `m8-desiccator`, `m5x-safety-glasses`, `m5x-waste-bottle`, `m5x-clipboard-sheet`, `y11c-sand-saltwater-beaker`. None missing, none stretched.

## Simulation
Scene 9 runs one mass model on one clock: the balance display steps 1.60, 1.61 ... 1.64 g, the "% mass lost" readout falls 36.0, 35.6, 35.2, 34.8, 34.4% (computed from the reading), 12 water molecules land on the powder as each 0.01 g arrives, the blue tinge grows with the same gain, and a small live trace "mass on the open bench (g)" draws the same readings. The step rulers (scene 6) count live to 9 and to 90; the three runs (scene 4) plot point by point on the prediction curve (labelled "illustrative").

## Departures from the design (with reasons)
- **Opening (scene 1).** ws-v01's final frame is shown whole (frozen) until "rushed test"; its "Next" chip is not faded separately (it is this lesson's question, and fading part of a frozen frame would need a paper patch). The question box is marked by a navy pen bracket on "Our question" instead of a glow. ws-v01's clipboard shrinks to the top right on "rushed test", waits there, and grows into the plan board on "at all".
- **Rushed test.** The crucibles stay on their tripods with readouts beneath ("? % lost" from each timer cue, the value on its spoken number); there is no balance plate per crucible. The zigzag axes are on screen from the start of the test.
- **Scene 2.** While the left column is empty, "valid: measures what it claims to measure" sits large there (44 px) and fades before the control tags write. The DV tag points at the balance plate's display (26.81 g). The gold bracket gathers the three control tags in the left column; the cooling tag sits under the balance.
- **Scene 3.** The empty lidded crucible plate has an unlit burner, so a small coded blue flame lights on "we heat". The three weighings are listed beside the balance.
- **Scene 5.** Two undivided "whole loss: 0.90 g" bars sit under the balances (scene 6 divides them); the "total loss" chip is at the top. No hand tags.
- **Scene 6.** After "We choose", the chosen 0.01 g balance shrinks to the top right; the heatproof mat arrives on "We choose" (labelled until the tongs land on it). The pipeclay triangle is in the plan line only (not narrated).
- **Scene 7.** The three plain meanings are written large in the empty table body (with the lit crucible as the hazard) and park in a strip as row 1 starts. Row 1 stays full until row 3 needs the room, then collapses to a one-line chip. Row 2's marker moves from medium to low on "that hazard"; rows 3 and 4 have no marker (risk cell "low").
- **Scene 8.** The residue is the lidded white-powder crucible; the coded lab record is labelled "lab record (illustrative)".
- **Scene 9.** The white powder bowl is clipped from the open-crucible plate onto the balance pan. The lidded crucible is not composited inside the desiccator (it would sit in front of the painted glass); the plan line says "cool, lid on, in a desiccator". The plan board strikes "same cooling" in slate and writes the gold rewrite plus "weigh as soon as it is cool".
- **Scene 10.** The memory card writes clause by clause as each clause is spoken (from "Change one"), and pulses on "use"; each plan section glows with its clause.
- **Plan board wording at the end.** Because scene 9 replaces "same cooling", the final board reads "small blue flame; cool in a desiccator" (design final frame: "same cooling"), and the control line reads "control: empty crucible to constant mass".
- **Final frame plates.** Crucible 480 px, desiccator 400 px, balance 340 px wide (the design's "about 360 px each" would not fit three in a row beside the board without shrinking the board text below 30 px).
- **Key notes.** Trimmed to short lines (checker density warning): Valid / Reliable; change one, measure one, control the rest; experimental control; equipment fine enough, a control lowers a risk; waste, records, new evidence.

## Opening-frame match (ws-v01)
Scene 1 imports `SceneHandoff` from `src/explainer/lessons/chem-y11-ws-v01/s3.tsx` read-only and shows it with `<Freeze frame={dur('conclusion-handoff') - 1}>`, so the cut is exact by construction; ws-v01's plates are in this lesson's asset list via its `ASSETS`. The clipboard continuity uses ws-v01's exported `FF.clip`; the bracket uses `FF.q`. If ws-v01 changes `FF`, nothing else needs editing here. ws-v01 hand-in status at my hand-in: see "Unresolved".

## Final frame (chem-y11-ws-v03 opens on it)
Export: `SceneHandoff` and `HANDOFF_LAYOUT` from `src/explainer/lessons/chem-y11-ws-v02/s3.tsx`; freeze at `dur('conclusion-handoff') - 1` = frame 754 (import `dur` from `./common`). Layout (1920 x 1080):
- top: the memory line in hand lettering, 46 px at (96, 150): navy "Change one," ink "measure one," gold "control the rest," violet "and repeat the whole thing.";
- left, standing on a bench line at y 808 (x 96 to 1140): lidded blue-crystal crucible on its unlit tripod (`y11c-cuso4-crucible-lid-v1.png`, box top (96, 326), 480 px), desiccator (`m8-desiccator-v1.png`, (420, 406), 400 px), top-pan balance 340 px wide at x 800 with the blank display "– . – – g";
- right: the completed plan board, card (1170, 178, 654 x 674), title "Our plan", sections valid (IV: heating time, DV: % mass lost; controls: 2.50 g, same crucible, / small blue flame; cool in a desiccator; control: empty crucible to constant mass), reliable (repeats give consistent results; 3 full runs; 0 to 12 min in 2 min steps), equipment (0.01 g balance; porcelain crucible, lid ajar; / pipeclay triangle; tongs; desiccator), safe and ethical (glasses; tongs and mat; gentle flame; / waste container, not the sink; / small quantities; record every reading); lines 30 px, titles 32 px;
- bottom: navy chip "Next: How do we collect and source chemistry data safely and accurately?" at (96, 866), 38 px.
The key notes cross-fade back to this exact frame over their last 40 frames, so the video's last frame equals it.

## Cue check
All cues resolve against the measured word timings (config loaded in node; `cueFrame` throws on a missing cue) and were listed with context by a script. Repeated words take stated occurrences: hook "two," and "four" (first, 384 and 398), "test" (second occurrence, 781; the first is "rushed test." at 258, caught and fixed), scene 2 "water," (first, 197). Countdowns: 3 s ring full from "Which one should we use" (scene 5); 10 s rings full from "Pause here" (scenes 11, 13).

## Grade checker
`npm run grade:explainer -- Explainer-chem-y11-ws-v02`, final run 21 Nov 2026 (after the ws-v01 hand-in and the opening fix): **PASS: 0 failures, 0 warnings**. Report: `out/explainer/Explainer-chem-y11-ws-v02/grade/Explainer-chem-y11-ws-v02-grade.md`. Earlier run passed with two warnings (hook frame 449 sparse at 52%, key notes 543 characters); both fixed (readouts on screen from each timer cue, notes trimmed). Typecheck clean with a scoped tsconfig.

## Dense 3 s sweep
One still every 90 frames over the whole video (160 stills, scale 0.5), montaged and read, then the changed scenes again. Defects found and fixed:
- scene 1: right half empty before the plot (axes now from the start of the test); "illustrative data" collided with the doubt chips; readouts row empty until the numbers ("? % lost" from each timer cue); crucibles enlarged; the "less? that makes no sense" tag sat on the axis title;
- scene 2: left column empty for 23 s (large plain meaning added); cooling tag ran into the plan board;
- scene 3: readouts overlapped each other (spacing); the closing tag ran into the board;
- scene 4: "seven points show the bend" ran under the plan board;
- scene 5: lower half empty (bigger balances, whole-loss bars), countdown label below the safe area;
- scene 6: lid ring crossed the heading; green frame line crossed "reads to 0.01 g"; lower right empty until the tongs (mat arrives earlier);
- scene 7: gloss strip texts overlapped; "medium" ran into the control column; table text 30 px and body empty (plain meanings large first, wider columns, 34 px cells, bigger plates, row 1 kept full longer);
- scene 8: "kept" sat under the "delete" chip; chip moved;
- scene 9: ring crossed the "% mass lost" label; empty middle (live bench trace added); plan board gaps moved below the filled lines;
- scene 10: board half empty (40 px lines);
- scenes 11 to 14: pictures enlarged; answer rows 46 px and spaced; an empty framed box before "mass of mixture" removed;
- scene 15: plan board overflowed its card into the chip (tighter spacing, taller card).
Faint or ghosted main visuals (root's 21 November check): none; only the 15-frame scene cross-fades are partly transparent.

## Builder's sheet grade
A. A painted plate or the live plan board, matrix, rulers or run on screen in every teaching frame; a new visual idea every 30 to 60 s (rushed test, variables on the apparatus, control run, run plot, balance pair and rulers, materials, risk board, waste and record, trial-run model, plan board); framed green answers with one red crossed slip in each feedback; five short notes with the framed memory card, 45 s hold; nothing under 28 px. Weakest frames for root to look at: frame 1 (hook at 449, 44% bare by the checker's cells, the readouts still "? % lost" for a second before the numbers) and frame 7 (risk board while row 1 is the case: the lower table is empty until rows 2 to 4 write). Frame 10 (plan in one line) has no plate by design: the board is the picture.

## Things to check at playback speed
Scene 1 cut from ws-v01's frozen frame and the clipboard shrink (frames 237 to 270); the flames growing on "Three people"; scene 6 step rulers counting (127 to 202, 311 to 355) and the balance shrink at "We choose"; scene 7 meanings parking into the strip (361 to 381) and row 1 collapsing (930 to 948); scene 9 the readings stepping with the molecules landing (309 to 406); scene 16 cross-fade back to the final frame.

## Unresolved
- ws-v01 handed in (its notes exist) while I was finishing; I re-checked its `FF` and final scene after its last edit and re-rendered the cut (frames 0 to 330): the frozen frame matches its scene 14 final frame, and a double clipboard during the cross-fade was fixed. If ws-v01's `SceneHandoff` changes again, the opening follows automatically, but re-check frames 226 to 260 here.
- Root calls: the final plan board says "cool in a desiccator" where the design's final frame says "same cooling" (follows scene 9's modification); the desiccator is shown without the lidded crucible composited inside it.
- Registry line endings normalised to LF (see Files).
