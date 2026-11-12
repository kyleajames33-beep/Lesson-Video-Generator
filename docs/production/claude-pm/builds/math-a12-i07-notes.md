# math-a12-i07 build notes (Revision 4 build on the measured narration)

Builder: Claude build agent, 12 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-i07-sheet.jpg` (the 16 grade-checker frames). Length as measured: 14,323 frames (477 s); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · THE DEFINITE INTEGRAL".

## Files
- `src/explainer/lessons/math-a12-i07/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing), `config.ts` (key notes `Math.max(1350, durationInFrames)`), `assets.ts` (the bath plate only), `scenes.tsx` (re-exports `I07FinalFrame`);
  - `parts.tsx`: load-time checks of every value (net flow 12 − 2t; tap max(0, 16 − 2t); drain 4; water 40 + 12t − t², so 40 → 76 → 72 L; the left and right signed sums 36, 33, 32.25 and 28, 31, 31.75; 36, −4, 32; the trapezium 10; the balance 0; the semicircle −2π; A1 −21/2; A2 6); the rigs `BathRig` (water level, tap stream, drain swirl, litre scale, ghost level, tag), `BathBoard`, `FlowGraph`, `Bracket`; re-exports of the shared parts;
  - `s1.tsx` (scenes 1 to 3), `s2.tsx` (4 to 9), `s3.tsx` (10 to 16, `AID07`, `I07FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry.

## Joins
- Frame 0 is `I06FinalFrame` (imported from i06). It holds under the first words, then cross-fades to the bath and the flow graph.
- The final frame is i08's own opening frame: scene 15 ends on `I07FinalFrameStandIn` (imported from `../math-a12-i08/s1`), and scene 15's second half draws a copy of i08's `OneGraph` with the same geometry so the cut is exact. The notes scene cross-fades back to the same stand-in over its last 40 frames. `I07FinalFrame` is that stand-in. i08 needs no change.

## Plate fit (root decision 30)
- **Bath (brief 238, `ma12-bathtub-v1.png`, 1774 × 887):** placed by the alpha box [157, 115, 1589, 800] from `ma12-i07-provenance.json` and never scaled non-uniformly. The coded water fills Codex's measured interior (x 331 to 1445, top 325, floor 605) and is clipped to it. The tap stream starts at the measured spout (463, 281) and the drain swirl sits on the plug (1305, 590).
- **Scale:** the interior is 280 file px deep, set to 160 L (the litre scale 0 to 160 on the right wall), so 40 L, 72 L and 76 L sit at their true heights. The level is linear in litres (a straight-sided bath is assumed; author note, not learner copy).
- Anchor size: 770 px wide in scenes 1 to 6, 820 in the memory aid, 710 in the scene 15 recap, 420 in the notes card (inside the framed card).

## Departures from the design
- **Scene 1:** the clock runs on "graph" to "wins" so the bath fills while the narration describes the tap and the drain. The "net flow 0 at t = 6" label sits below the axis, clear of the strips.
- **Scene 2:** a "the last strip" card holds the −2 L result until "With sixteen", then the table card takes its place. From n = 256 the strips are drawn as one fill (the kit's 256 bars were unreadable at 1 fps).
- **Scene 3:** the signed sums 36, 33, 32.25 stay as a row "the signed sums settle on 32" until the units row, and a note "that settled value: the definite integral" names the limit. The "long S: sum" tag leaves before the limit row lands.
- **Scene 6:** the bath's level graph is shown from the start of the scene (no 10 s empty right column).
- **Scene 7:** the plan card starts at the top right (four short lines, 42 px) and leaves before the rows. "above the axis: positive" sits under the answer.
- **Scene 9:** a two-row reasoning step under the plan, "y = √(4 − x²) squares to x² + y² = 4" and "the top half of a circle, radius 2", on "top half" and "radius two". The narration says it; the design's right column was empty there.
- **Attempts:** the answer-free sketch axes are 820 × 540. "sketch first" moves to the bottom right when the x-axis is near the top (attempt 1), so it never sits on a tick label.
- **Feedbacks:** the shrunk question card states the integral in words ("the integral of x − 5 from 0 to 3"), because the kit's integral limits shrink to 15 px in the 30 px card. Feedback 1 draws the line only on 0 to 3, keeps y-ticks −5 and −1, and puts "(3, −2)" inside the fill, so the brackets no longer cross the line or the tick labels. Its crossed slip reads "+21/2" (a plain "21/2" with a strike looked like "−21/2"). Its graph is 880 × 730 with the line labelled "y = x − 5", and "loses the sign" sits under the slip (it was on the graph's tick labels).
- **Scene 15:** the recap adds the bath at 72 L under the "36 + (−4) = 32 L" card.
- **Key notes:** five bullets at 38 px in the left 1,050 px (decision 58), with the framed card on the right (aid line, flow graph, a small bath and "36 in, 4 out, net 32 L").

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i07`: **PASS WITH WARNINGS (0 failures, 1 warning)**.
- Frame 9 (scene 8, the balance before its rows): 52% bare paper.
- Earlier runs warned on feedback 1 (58% bare; fixed by the larger graph) and on small text: the integral limits in the shrunk feedback cards (15 px, now worded) and the notes' "Δx → 0" (22 px, now 30).

## 1 fps sweep
I ran two full sweeps at every 30th frame and inspected every tile. Found and fixed:
- **Collisions:**
  - scene 1: "negative change" tag on the strips; the height and width brackets on the strip edges;
  - scene 2: "both settle on 32" on the table;
  - scene 3: "long S: sum" under the limit row; "check it with shapes" on the last chip;
  - scenes 4 and 5: "height 12" on the curve; "depth 4" and "−4" on the fill edge;
  - scene 7: "above the axis: positive" under the answer box;
  - attempt 1: "sketch first" on the x-axis and its tick;
  - feedback 1: the "2" bracket across the line; "(3, −2)" on the bracket; the "5" label on the "−3" tick.
- **Empty stretches:** scene 6's right column; scene 7's right half (the plan now fills it); scene 9's lower right; scene 15's lower right; feedback 1's middle left.
- **Small text:** the limit subscripts are now 30 px (they were 22 and 26).

## Check at playback speed
- Scene 1: the bath filling to 76 L and draining to 72 L, in step with the board's time, tap, drain, net flow and water rows; the orange ring and "?" on the last strip.
- Scene 2: the strips refining 8 → 16 → 64 → 256, then the right-height pass; the dots landing on the number line around 32.
- Scene 3: the signed sums row, then the definition building term by term.
- Scene 4: the triangle filling with the bath rising 40 → 76 L.
- Scene 5: the strips below the axis, the depth bracket, and the bath falling 76 → 72 L with "4 out".
- Scene 6: "drained more than it gained" ghost level appearing as the "72 L" tag leaves; the net change bracket on the level graph.
- Scene 7: the trapezium fill sweeping from x = 1 to x = 3.
- Scene 8: the balance tipping, then levelling as the second triangle fills.
- Scene 9: the fold of the top half to the bottom half on "flips it below" (the r = 2 radius fades during the fold).
- Attempts: the full ring from "Pause here to answer.", then the 10 s count.
- Scene 15: the recap fading out and i08's graph and cards arriving, ending on i08's frame 0.
- Notes: the silent cross-fade back to i08's frame.

## Honest grade
A on the checker. Root may call these frames B+:
- frame 9 (scene 8 before its rows): the balance and the plan card leave the right middle thin for a few seconds;
- scene 3's graph is about 900 px wide beside a dense definition column.
