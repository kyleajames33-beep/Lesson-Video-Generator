# chem-y11-m1-v07 build notes (built on the measured narration)

Builder: Claude build agent, 20 November 2026. Explainer id `Explainer-chem-y11-m1-v07` (16 scenes, 13,785 frames; key notes 1,350 frames = 45 s). Sheet: `out/explainer/Explainer-chem-y11-m1-v07/grade/Explainer-chem-y11-m1-v07-grade-sheet.jpg`. No MP4 built.

## Files
`src/explainer/lessons/chem-y11-m1-v07/`: `common.ts` (lookups, holds, plates with measured alpha boxes, formula data `F_CO2`, `F_NH4NO3`, `F_CUSO4`, `F_NACL`, `F_MGSO4` with the lesson's relative atomic masses), `parts.tsx` (V06 parts re-exported; `MassBar` (one tile per atom, width = relative atomic mass, selected element amber, water groups outlined pale blue, `lift` for the heating run), `CountBar`, abstract `Beam` balance, `PCell` periodic cell, `RLab`), `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16), `scenes.tsx`, `assets.ts`, `config.ts` (`config_y11c_m1v07`). Registry entry added after V06. Read-only imports from V01 (watch glass of salt, `Givens`, `QTag`, `Lines`), V06 (common, parts, the 20.00 g bar segments).

## Plates
All used at measured alpha boxes, uniform scale: salt jar, empty filter funnel (opening frame), fizzy drink bottle, snack-pack carton (delivered; the plain-tile fallback is not needed), crucible of blue crystals (unlit and lit), open crucible of white powder (the same picture at 1.25 times the blue pair's canvas, so it uses the blue box times 1.25 and the three cross-fade in place; measured box (154, 192, 1125, 1728)), watch glass of salt. None missing.

## Departures from the design (with reasons)
- Scene 1 opens on V06's final frame exactly (V06 builds it); the heading writes on at about 1 s to fill the frame; tags are 46 px.
- Scene 3: the CO2 molecule sits above a small painted bottle (the gas in a soft drink) so the board carries a real object.
- Scenes 5 and 7 (root round 1 fix): the mass bar now builds early, keyed to "and here's why" (scene 5) and "a formula with a trap" (scene 7), with the Mr readout; the share and % readouts still appear when their values are spoken. Scene 7's ammonium and nitrate ball groups sit in the lower half until "The relative formula mass". Before that, the mass bar and readouts appear when their first value lands (no empty dashed bar or "?" boxes). Before that, scene 5 shows one large CO2 molecule ("one molecule: weigh its atoms") and scene 7 shows the ammonium and nitrate groups as coded ball clusters (each N ringed) instead of an empty bar.
- Scene 8 (root round 1 fix): the lattice magnifier moved left (centre x 470, radius 140) and the pen ring on the dot became a pen arrow from below, so nothing covers the dot or the 4 in CuSO4·5H2O. The formula stays one line (the CuSO4 part greys while "Treat the five waters as one group" is spoken); kept results "5 H2O = 90.0" and "Mr = 249.6" are small chips under the working; the hydrate bar appears with its first tile.
- Scene 8 also shows, from "The dot means" until the working starts, one coded CuSO4 unit + five tinted water molecules ("five H2O in the crystal"), the design's "5H2O lifts into five water tiles" moment.
- Scene 9: the readouts (2.50 g to 1.60 g; 100% to 63.9%) run on one clock from "driven off as steam" to "thirty-six point one percent", so the numbers land before they are spoken.
- Scene 15 (final frame): the NaCl bar's sodium tile stays at the top and the chlorine tile lifts into a large "Cl" with 35 and 17 and amber "?"s; the salt jar stays at the left.
- Key notes: five short bullets (two lines each at most), memory card and the blue crystals.

## Cue check
All cues keyed to measured word starts with `cues()`; every phrase resolves at load (bundled and loaded in node). Countdown: 3 s from "think" (scene 4), 10 s ring shown full from "Pause here" (scenes 11, 13).

## Things to check at playback speed
Scene 1 park move and "CO2" write-on (last 30 frames); scene 2 molecule field multiplying then the carton; scene 3 beam tip; scene 5 tiles landing on "twelve", "sixteen" and the amber turn on "The oxygen's share"; scene 7 group-by-group bar build; scene 9 cross-fades (unlit, lit, white) against the steam and the water tiles lifting; scene 15 the chlorine tile lift.

## Grade checker (round 2 after root review, 20 Nov 2026, about 10:36 Sydney)
`npm run grade:explainer -- Explainer-chem-y11-m1-v07`: **PASS WITH WARNINGS (0 failures, 2 warnings)**: frame 1 (`hook`, 54%, V06's final frame kept as root asked) and frame 4 (`carbon-dioxide` at about 1.5 s, 58%: the mass bar is landing its first tile, with the Mr readout at 12.0). Ammonium nitrate is no longer flagged. Report: `out/explainer/Explainer-chem-y11-m1-v07/grade/Explainer-chem-y11-m1-v07-grade.md`.

## Builder's sheet grade
A. The hydrate formula is now clear of the magnifier (the dot and the 4 are visible).

## Round 3 (root playback review, 20 Nov 2026, afternoon)
All ten playback sheets in `work/root-playback-sample/chem-y11-m1-v07-v1/` were read; fixes:
- Final handoff: v08 v1 is accepted and frozen, so V07's last frame now matches V08's current first frame exactly (salt jar, Na stub bar, Cl tile with 35, 17 and amber "?"s, chip at y 760; confirmed by stills of V07 frame 12430 and V08 frame 0). Before that the scene fills the frame: the NaCl bar with "Na 23.0" and "Cl 35.5" ("relative atomic masses: numbers handed to us"), then the Cl tile lifts while a chlorine atom model ("what's inside?", "protons? neutrons? electrons?") fills the right half; the model clears before the question chip and the final hold. "what's inside?" no longer touches the Na tile. No V08 file is changed (a ClBoard attempt was reverted).
- Hook: opens on V06's new final frame (shared `SaltBoard`); its tags moved so nothing overlaps; the 1 Na : 1 Cl underline clears with the tag.
- Hydrates: "water built into / the crystal" is two lines clear of the burner and the working; the CuSO4 unit and five waters show from the first frame until the working starts.
- The method: larger CO2 and sand-and-salt bars and a CO2 molecule ("count, weigh, add, divide") from the first frame.
- Why the formula is enough: larger molecule and a "1 carbon atom + 2 oxygen atoms" line.
- Relative atomic mass: beam lowered so the lower frame is used; the "no units" underlines are level under each readout.
- Carbon dioxide: a CO2 molecule labelled 12.0, 16.0, 16.0 fills the lower right.
- Ammonium nitrate: the two ion groups now sit at the lower right and stay until "Count only one".
- Heating: the painted balance (display 2.50 g to 1.60 g) replaces the coded readout; the crucible is larger.
- Feedback 1 and 2, attempt 2: bars, rows and pictures enlarged and spread; feedback 2's bar builds at once.

Grade checker after round 3 (20 Nov, about 13:40 Sydney): **PASS (0 failures, 0 warnings)**. Verification stills were rendered and viewed (frames 0, 700, 962, 2270, 3030, 4064, 5303, 6018, 7258, 7496, 9457, 10505, 11152, 11892, 12200, 12430). V07 frame 12430 was compared with V08 frame 0, and they match apart from the topic label. The painted balance is now in V07's asset list (the first heating still showed it missing).
