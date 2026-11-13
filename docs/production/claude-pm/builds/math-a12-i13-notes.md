# math-a12-i13 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 13 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-i13-sheet.jpg` (the 16 grade-checker frames). Length as measured: 13,599 frames (453 s); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · INTEGRAL CALCULUS".

## Files
- `src/explainer/lessons/math-a12-i13/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing; repeated phrases named: "So the energy" #2, "zero to twelve" #2 in scene 3, "Dollars per item" #2 in scene 4, "four thirds" #2 in scene 7), `config.ts` (key notes `Math.max(1350, durationInFrames)`), `assets.ts` (the air conditioner, the drainage channel, the reused box trailer, and i14's robot vacuum and hallway floor for the handoff frame), `scenes.tsx` (re-exports `I13FinalFrame`);
  - `parts.tsx`: load-time checks of every value (96/π ≈ 30.558; strip sums 30.383, 30.514, 30.547 for 12, 24, 48 strips; $2000; dam 12 and 20; channel 2/3, 4/3, 40 m³, (8√2)/3 ≈ 3.77 and the ratio 2√2; A1 36 and 54; A2 12 and 4); the rigs `ACRig` (the plate with a coded power and energy readout centred on Codex's measured clear wall rectangle [1230, 345, 1560, 505]), `ChannelRig` (the plate with its centre line along the measured near and far centre points (721, 804) and (1370, 126), and a "30 m" length arrow), `TrailerPic` (the reused box trailer with a coded sand stream);
  - `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 14, `AID13`, `I13FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry, before i14.

## Joins
- Frame 0 is `I12FinalFrame` (imported from i12). It cross-fades to the power graph and the air conditioner on "Power is how".
- The final frame is i14's own opening frame: scene 13 ends on `I13FinalFrameStandIn` (imported from `../math-a12-i14/s1`: the hallway floor and robot at x = 0, the faint x–t graph and both chips). The notes cross-fade back to it over their last 40 frames. i14 needs no change. i14's two plates are listed in i13's assets so the frame renders them.

## Plate fit (root decision 30)
- **Air conditioner (`ma12-air-conditioner-v1.png`, 1754 × 897, alpha box [155, 176, 1597, 744]):** the readout is centred on the measured clear wall rectangle. At the 690 px width used here that rectangle is about 160 × 77 px, too small for two 30 px lines, so the coded readout card grows around the rectangle's centre (about 162 × 83 px) rather than shrinking the text below 30 px.
- **Drainage channel (`ma12-drainage-channel-v1.png`, 1619 × 971, alpha box [124, 116, 1507, 871]):** the dashed centre line follows the measured near and far centre points. The painted channel is in perspective and is not a y = x² section, so the cross-section is a separate equal-unit coded graph (250 px per metre) beside the plate; nothing numeric is overlaid on the painting. A hand tag "the cross-section" points to the channel's near end face.
- **Box trailer (`physics/phys-y11-box-trailer-v1.png`):** 720 px wide in the attempt picture, with a coded hopper and sand stream above it.
- Anchor size: the air conditioner 690 px wide in scenes 1 and 2, 540 in the memory card, 620 in the notes card; the channel 900 px in scenes 6 and 7, 460 in the memory card.

## Departures from the design
- **Scene 1:** a "power" card ("how fast the unit uses energy, in kilowatts") fills the lower right until the guess. The marker's clock label is dropped (it sat on the "8 am" and "2 pm" ticks); the readout board shows the time.
- **Scene 2:** a "less, because" card (4 kW lasts only an instant; most of the day it draws less) fills the column before the strip; the strip is labelled "P kW" and "Δt h" on the graph; a "kilowatt hour" card ("the energy from 1 kW for 1 hour: what the power bill counts") fills the lower right until the strips refine.
- **Scene 3:** a plan card (primitive, F(12) − F(0), answer in kWh and compare with 48) fills the column until the first row. The answer row waited for the wrong cue (the first "So the energy" is at frame 7), so the green "96/π kWh" box showed from the start. The cue is now the second occurrence; the domain bar likewise uses the second "zero to twelve". The second working row is 40 px so it fits the frame.
- **Scene 4:** a "a factory" card (cost of one more item, with $30 and $10 examples) and the question row "items 100 to 200: extra cost = ?" open the scene; the equation strip is shortened so it no longer runs under the givens; the "$/item × items = $" chip now lands on its own sentence (second "Dollars per item").
- **Scene 5:** a "the dam gate" card (rate, megalitre, positive means in) opens the scene; the total row reads "total flow: 16 + 4 = 20 ML" (it ran off the frame).
- **Scene 6:** three short reasoning notes (cross-section, right half, layers) fill the lower left until the rows; the "centre line" tag sits below the axis label.
- **Scene 7:** the check row leaves when the depth readout arrives; the depth readout is 560 px wide with "wider higher up" and "nearly 3 times the area" beside it (they collided with the x-axis label); the curve label moved clear of the check rectangle.
- **Scene 8:** the memory card opens with the four modelling steps as a large list, each written as it is spoken, then collapses them into one line as the aid line writes; both plates are on the card from the start (the card was empty for about 10 s).
- **Feedbacks:** each has a plan card that fills the left column until the slip; feedback 2's card slides under the rows. The integral is drawn small only in the full-size question card; the shrunk card states the question in words.
- **Handoff:** the recap shows both models (the power area and the channel's water) with a domain chip, then cross-fades to i14's frame on "Next".
- **Key notes:** five bullets in the left column (decision 58); the framed card carries the aid line, the unit rows, the air conditioner and the two results.

## Check at playback speed
- Scene 1: the time marker sweeping 8 am to 2 pm with the plate's power readout climbing to 4.0 kW; the dashed 48 kWh rectangle.
- Scene 2: one strip, then 12, 24 and 48 strips with the sum settling to 30.55; the energy meter counting to 30.6 kWh as the area fills.
- Scene 3: the dashed continuation past 8 pm and its cross.
- Scene 4: the production slider 100 → 200 with the extra cost climbing to $2000.
- Scene 5: the dam marker; the "−4" piece flipping above the axis as "4 out" while the total readout reaches 20.
- Scene 6: the layers rising, the highlighted layer, the merge into the half, then the mirror on "double it".
- Scene 7: the depth rising 1 → 2 m with the readout reaching 3.77 m², then the two widths.
- Attempts: the full ring from "Pause here to answer.", then the 10 s count; the sand stream.
- Scene 13: the recap fading to i14's frame.
- Notes: the silent cross-fade back to i14's frame.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i13`: **PASS WITH WARNINGS (0 failures, 1 warning)**.
- Frame 5 (scene 4, the cost slider at x = 196): 52% bare paper.
- Earlier runs flagged "y = x²" against "centre line" (scene 6; the tag now sits left of the axis) and, once, faint text on the memory card when the four steps were shown faint before they were spoken (reverted: each step now writes on its cue).

## 1 fps sweep
Three full sweeps at every 30th frame, every tile inspected; a final set of stills checked the last fixes. Found and fixed:
- **Wrong timing:** scene 3's answer row and domain bar, and scene 4's units chip, fired on the first occurrence of a repeated phrase (the answer box showed from the start of scene 3).
- **Missing plates:** the handoff frame's robot and hallway returned 404 until i14's two plates were added to i13's assets.
- **Collisions:** the marker clock on the tick labels (scenes 1 and 2); "4 kW: only an instant" on the curve; the strip label on the curve; scene 3's note on the givens card; scene 4's equation under the givens card; scene 5's total row off the frame and "the question decides" on its card; scene 6's "centre line" on the axis label and on "y = x²"; scene 6's notes on the givens card; scene 7's tags on the x-axis label and the check row under the depth readout; the attempt 2 prompt on the axis label; the memory card's tags beyond the card edge.
- **Empty stretches:** scenes 1 to 5's right or lower columns (cards and plan cards added); scene 6's lower left; the memory card's first 10 s; both feedbacks' left columns; the notes card's middle.

## Honest grade
A on the checker. Root may call these frames B+:
- frame 10 (memory card at its first step): the left middle is thin for about 3 s until the next steps write on;
- frame 5 (scene 4 mid-slider): the lower right is thin until the primitive rows;
- scene 5: "the question decides" sits just under the total-flow row (touching, not overlapping);
- the air conditioner's readout card is slightly larger than the plate's measured clear rectangle (kept at 30 px text).

## Root grade (13 Nov)
A. Root fixed the scene 5 item: "the question decides" is now the heading inside the decision card, so nothing sits between the total-flow row and the card (checked on a still at frame 5640). Root accepts the other B+ candidates as written: brief build-up moments, and the 30 px readout card.

## Probe check 13 Nov
- Line-through-text probe (`out/explainer/.repair-sweep/ink-check.sh`, 1 fps, three renders) before the render: 16 runs, 12 after fixes. Local PLabel with a 16 px paper stroke; inline SVG labels 14 px; "4 kW: only an instant" and "kWh: the power bill" on paper pads (parts.tsx, s1.tsx, s2.tsx). Accepted: red strike-outs, single-frame touches on "x = √y" and "4/3 m²" as they enter.
- Sheet re-made because the fixes changed sheet frames: `docs/production/claude-pm/builds/math-a12-i13-sheet-repair2-2026-11-13.jpg`. `npm run grade:explainer`: PASS WITH WARNINGS: 0 failures, 1 warnings.
