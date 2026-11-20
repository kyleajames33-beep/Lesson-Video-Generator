# chem-y11-ws-v03 build notes (built on the measured narration)

Builder: Claude build agent, 21 November 2026. Explainer id `Explainer-chem-y11-ws-v03` (16 scenes, 14,688 frames; key notes 1,350 frames = 45 s). Sheet: `work/quality-audit/fixed/chem-y11-ws-v03-sheet.jpg` (copy of the final grade sheet; no frame stamps). No MP4 built.

## Files
`src/explainer/lessons/chem-y11-ws-v03/`:
- `common.ts`: lookups, holds, plates (ws-v02's measured boxes reused; check mass box (330, 166, 920, 1111) measured with PIL), the traced lid outline of the lidded crucible plate, illustrative data.
- `parts.tsx`: ws-v02 parts re-exported; new: `Lidded` (the painted lid clipped from `y11c-cuso4-crucible-lid-v1.png`, so it can be knocked off and put back, over any crucible body plate), `PlanMini`, `NumberLine`, `GoldMark`, `Dot`, `SourceCard`, `Filler` (plain bars, no fake wording), `MiniTable` (v11's `PTable`, plain), `PenCross`, `Highlight`.
- `opening.tsx`: read-only imports of ws-v02's `SceneHandoff`, `HANDOFF_LAYOUT`, `fullSecs` and v11's `WsV03FinalFrame` and its pieces.
- `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 10), `s3.tsx` (11 to 16), `scenes.tsx`, `assets.ts`, `config.ts` (`config_y11c_wsv03`, topic label "CONDUCTING INVESTIGATIONS").
- Registry: one edit in `src/explainer/registry.ts` (import and entry after ws-v02; LF kept).

## Plates
All named plates exist and are used at uniform scale: lidded crucible (blue and white), open blue crucible, black-crust crucible, open white crucible (`m5-g02b-open-crucible-v1.png`), tongs, heatproof mat, top-pan balance, check mass, desiccator, safety glasses, waste bottle, watch glass of salt. None missing.

## Simulation
Scene 7 uses the chance engine (`sims/chance.ts`, weighted outcomes 34.3, 34.4, 34.5 with weights 1, 2, 1; seed 11, 24 trials; then 36.0, 36.1, 36.2, seed 5, 9 trials). Dots, "repeats", "mean" and "gap to 36.1" all read the same run (mean includes the three original class 2 results). Mean holds at 34.4% and gap at 1.7; after the method change mean 36.1%, gap 0.0. Tagged illustrative.

## Opening and ending
- Opening: frame 0 draws ws-v02's `SceneHandoff` frozen on its last frame (754), with live copies of its plan board and lidded crucible underneath; the frozen layer fades over frames 14 to 30 (Next chip, memory line, desiccator, balance go), the board shrinks away to the top right while the small plan card fades in, and the crucible moves to class 1 and cross-fades to the white heated crucible. Root accepted the board's "cool in a desiccator" wording.
- Ending: scene 15 builds the v11 opening exactly (data-sheet card's grid grows into `WS_PT`, symbols, f-block rows, P, Cl, Fe `QCell`s, s/p/d/f `Letter`s at 1790, Next chip 44 px at y 872), and from 40 frames before the scene end it renders `WsV03FinalFrame` alone, so the handoff's last frame is v11's frame 0. The key notes cross-fade back to that frame over their last 40 frames; the video's last frame (14687) is v11's first frame (checked against v11's opening layout in stills).

## Departures from the design (with reasons)
- Scene 1: heading "Two classes, one plan" from frame 36, switching to "Collecting data safely and accurately" on "know" (board not bare for 28 s); result chips land on each spoken number rather than all on "percent"; the gold 36.1% chip sits in the right column under the plan card (no room between the stacks); a small hand tag "same crystals, three runs each".
- Scenes 2 and 3: the plan is a strip of chips across the top (ticks on cue; scene 3 adds a second row of rules on their cues) instead of a thumbnail with tiny text. The "check and fix" loop is a teal hand tag in the plan strip (the scene ends 17 frames after "go").
- Scene 3: the hot crucible is a clipped bowl of the lidded plate carried towards the balance, then into the desiccator; the hot-reading readout is in a dashed "if weighed hot" inset; the darkening is a cross-fade to the painted black-crust crucible under the lid.
- Scene 4: a logbook card logs every reading as it is taken (empty pan, check mass, then the sample on "away"); the sample bowl goes on the pan on "Each sample" so the 26.81 g row has a reading to copy.
- Scenes 5 to 7: gloss chips at 41 px (four rows); class data under two painted crucibles; the violet "small spread" bracket sits under class 1's numbers; scene 7's gap bracket is below the line.
- Scene 8: the two source uses (36.1% and the risk table hazards) show from the first frame, arrows on cue; the four lead words appear on "Ask four things", each question's text on its cue.
- Scene 10: the reference entry is on screen from the start (it is part of the report); its labelled parts underline on cue.
- Key notes trimmed to five short items (the design's five, shortened) with the framed memory card.

## Cue check
All cues resolve against the measured word timings (config loaded with tsx; `cueFrame` throws on a missing cue). A script listed every cue phrase that occurs more than once: ensure-accuracy "zero zero." takes the first (0.00 g, 247); reliable-sources "And does it agree" takes the first (the fourth question, 769, not the memory line at 902); extract "three facts" first (126); acknowledge "the author," and "the year," fixed to occurrence 2 (380 and 402, the reference-list parts; occurrence 1 was the in-text sentence). Countdowns: 3 s ring from "neither" (scene 6); 10 s rings full from "Pause here" (scenes 11, 13).

## Grade checker
`npm run grade:explainer -- Explainer-chem-y11-ws-v03`, final run 21 Nov 2026: **PASS (0 failures, 0 warnings)**. Report: `out/explainer/Explainer-chem-y11-ws-v03/grade/Explainer-chem-y11-ws-v03-grade.md`. First run failed frame 7 (scene 8 opening, 65% bare) and warned on dense key notes (508 characters); both fixed.

## Dense 3 s sweep (scale 0.5, one still every 90 frames, 171 stills, montaged per scene; then re-sweeps of changed scenes)
Defects found and fixed:
- whole video: apparatus and boards too small for the frame (scenes 2 to 8, 11, 14, 15 enlarged);
- scene 1: board nearly empty for frames 30 to 90 (class 2, labels and heading brought forward);
- scene 1 and 2: a gap in the plan chips before "hair tied back" (chip now present, ticked on cue);
- scene 3: "restart gently, after teacher review" ran into the balance; restart chip collided with the desiccator; positions moved;
- scene 4: "true readings first" ran into the inset and was crossed by the incoming crucible (moved, fades on "Each sample");
- scene 5: "agree: a small spread" overlapped the data caption and the gold label (caption moved above the crucibles);
- scene 6: the countdown ring sat on the "neither?" chip (moved right);
- scene 7: the second repeats run piled into the gold label (label raised for scene 7);
- scene 8: right half empty for 2 s (source-use chips from the first frame); checklist card empty (lead words on "Ask four things");
- scene 10: "publisher" and "where to find it" labels overlapped (start-anchored label, wider gap);
- key notes: 508 characters (trimmed).
Faint or ghosted main visuals: none; only the 15-frame scene cross-fades are partly transparent. Repeated-phrase cues: see the cue check.

## Builder's sheet grade
A, with caveats for root. Painted plates in scenes 1 to 7, 11 and 15 to 16; the live chance run in scene 7; every scene changes on cue; framed green answers with one red crossed slip in each feedback; five short notes with the framed memory card, 45 s hold. Weakest frames: sheet frame 6 (judge-accuracy at 5049, about 42% bare before the repeats run) and frame 9 (acknowledge at 7803, lower right empty until the second entry); scenes 8 to 10, 13 and 14 are document scenes with coded cards and no painted plate.

## Things to check at playback speed
The opening fade from ws-v02's frame (frames 0 to 60, board shrink and crucible move); the lid knocked off and put back (scene 3, about 1.8 to 2.0 s after the incident cue); the hot bowl's path into the desiccator; the check mass's lift onto the pan (scene 4); the repeats run speed in scene 7; the table growth in scene 15 and the final cross-fade from the key notes.
