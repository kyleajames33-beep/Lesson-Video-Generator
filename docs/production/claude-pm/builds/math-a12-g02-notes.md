# math-a12-g02 build notes (built on the measured narration)

Builder: Claude build agent, 19 November 2026. No stills, grade run, bundle or MP4 by the builder (machine limit while the Google voicing worker runs); root runs the sheet and `npm run grade:explainer -- Explainer-math-a12-g02`. 14 scenes, 13,998 frames (466.6 s, key notes held at 1,350 frames).

## Files
`src/explainer/lessons/math-a12-g02/` (common, cuemap, config, assets, scenes, parts, s0 to s3). `parts.tsx` holds the rainwater tank with a coded water band inside its measured body (file band x 585 to 1432, floor row 1282, brim row 488), the rate graph, the large decision rows (`ModelRows`), the lit-branch chip (`TreeChip`) and the investment stage with d02's coin jars (`InvestStage`, also used by g03). Board parts come read-only from t01 (which re-exports f01 and f04). Final frame (two investment strips beside two coin jars, "Which model?", "Next: finance and probability practice") exported as `G02FinalFrame` from `s3.tsx` (re-exported by `scenes.tsx`). No registry edit (root registers).

## Plates
None missing; none stretched. Biology rainwater tank (alpha box 487, 253, 1512, 1746), exam desk and calculator (g01's brief, sidecar boxes), Physics motor boat top view (bow up; turned 90° by an SVG rotation to sail along the canal), f07's country town, d02's coin jar, full twin and coin. All inspected by eye before use.

## Joins
- Opens on g01's exported `G01FinalFrame` (`../math-a12-g01/s3`, present at build time; frame 0 of scene 1 renders it). Scene 1 then continues g01's TankBoard layout (tank 90, 250, w 300; graph 470, 150, 1380 × 650; g01's window t −0.08 to 1.12, rate −0.4 to 6.4; chips row at 470, 840; "Which integral?" at 700, 190) and eases into this scene's layout on "rainwater tank". If g01 moves its board, update `lay(0)` and `G01_WIN` in `s0.tsx`.
- Ends on `G02FinalFrame`; scene 14 cross-fades back to it over its last 40 frames.

## Departures (with reasons)
- The decision tree in the worked scenes is a lit-branch chip at the top right (`TreeChip`), not the full tree: the full tree is scene 2 (large) and scene 8 (in the card); the board has no room for both. Scene 7 uses a row of four demand pills that light in turn.
- Scene 1: the small tree under "Which integral?" is omitted (the right column holds the four question strips); the tree opens large 33 s later in scene 2.
- Scene 3: the tank starts at a dashed "start" line (2 L on a 0 to 8 L scale) because W1 gives no starting volume; the gauge reads "added +x L". Scene 6's tank B uses a 0 to 50 L scale with a 5 L start line.
- Scene 5: the boat is drawn on a coded canal (not the kit's `ParticleTrack`, whose sprite cannot turn); the amber piece flips on "Count both" (design: "metre"), and the answer frames on "eight thirds". Slip caption "0 m is the displacement" (design gives no caption).
- Scene 5's design "chip displacement 0" is a plot label "signed total 0: displacement".
- Scene 6's coefficient row is a third "counts" row inside the data table (1, 2, 2, 2, 1, amber for 2), not a separate ledger.
- Scene 7: the calculator is not drawn on the desk (the right side of the desk carries the town and the two insets).
- Scene 13 before "Next": the memory card at 0.92 scale under a heading (design: "small at the top").

## Cue check
Every cue phrase (141 across 14 scenes) resolves against `measured/lesson.json` (esbuild bundle of `cuemap.ts`, run in node; a missing phrase throws at load). Possessives are cued on the word before them ("First, a" for "town's").

## Checks run
- Type check: `npx tsc --noEmit -p work/brief245/root/tsconfig.g02g03.json` clean.
- Server-render smoke test (remotion stubbed, no bundle): every scene at 16 evenly spaced frames, no exceptions, no NaN in the markup.
- No em dashes in the lesson folder.

## Look first on the sheet
Scene 1 frames 0 to 160 (the g01 join and the layout ease), scene 3 around frame 600 (tank level, sweep and right column density), scene 5 frames 700 to 1100 (boat run, flip, column of rows against the readout), scene 6 frames 830 to 1100 (right column: rows, reference-sheet note and the slip, bottom at about y 900), scene 7 (desk with three cards, rings at x 1160, two insets), scene 13 (InvestStage spacing; the final frame).

## Playback checks for root
Scene 1 layout ease; scene 3 area sweep with the tank rising; scene 4 family sliding to C = 4 then the cursor running the tank 5 to 6.72 L; scene 5 boat back to −4/3 m and forward to 0 while the readouts end at position 0.00 and distance 2.67; scene 6 trapezia one at a time with the running total.

## Round 2 (20 Nov 2026): grade fixes
Round 1 (root, 19 Nov): FAIL, scene 2 mostly empty; collisions in scenes 4 and 7; sparse scenes 1, 9, 10.
- Scene 1: the four demand chips move into the question column as solid "amount?", "function?", "area?", "estimate?" cards, each replaced by its question strip on cue.
- Scene 2: every branch of the decision tree (icon and trigger words) is on the board from the first frame, at 40 px; the model each leads to writes on at its cue. The left column (question card, chip, tank and ring) is larger.
- Scene 4: the C dial moved under the tank and the readout strip moved right (no overlap with "volume V").
- Scene 6: working rows at 40 and 42 px. Scene 7: the e^(−x²) inset moved down; "area = 2 + 2 = 4" sits beside "∫₀²π sin x dx = 0" under the sine inset.
- Scenes 9 and 11: question cards at 50 and 52 px, with the tank at 360 px wide and the calculator at 290 px.
- Scene 10: a coded graph of V = 20 + 6t − t² on [0, 5] shows V(0) = 20, the answer point (5, 25) and an amber "change: 5" bar on "Five litres", the crossed slip's cause. Scene 12: the first working row at 44 px.

Grade checker (20 Nov 08:05): **PASS WITH WARNINGS, 0 failures, 1 warning.** Justified warning: scene 9's question frame is 58% bare. It holds the full question at 50 px, the tank picture, "Pause here to answer." and the countdown ring. Anything more would give away part of the answer. Root's grade-A frames to check: scene 2 at f1312 (branches before their models), scene 4 at f3937, scene 7 at f8311, scene 10 at f10061.
