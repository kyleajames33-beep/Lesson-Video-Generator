# math-a12-i14 build notes (Revision 2 build on the measured narration; Revision 3 screen fixes applied)

Builder: Claude build agent, 11 November 2026. Not committed. Sheet: `work/quality-audit/fixed/math-a12-i14-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 14,372 frames (479 s); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · INTEGRAL CALCULUS".

## Files
- `src/explainer/lessons/math-a12-i14/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load), `config.ts` (key notes `Math.max(1350, durationInFrames)`), `assets.ts`, `scenes.tsx` (also re-exports both join frames);
  - `parts.tsx`: load-time checks of every value (robot 0, 16, 20, 18, 16, 20, 36; 155/8, −9/4, −3, 9, −12, −6; 36 and 44; Problem 1 with −32/27 and 64/27; −1, 0, 9, 32; snow 100, 175, 200, 100, rate 10 and 0; A1 −6; A2 5 and 4); the lesson-local rigs `Hallway`, `Stack` (with `Dot`, `Stub`, `Column`), `SnowPost`; small board parts;
  - `s1.tsx` (scenes 1 to 5 and `I13FinalFrameStandIn`), `s2.tsx` (6 to 8), `s3.tsx` (9 to 15, the `Chain` memory aid and `I14FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry, after i12.

## Joins
- Frame 0 is `I13FinalFrameStandIn` (i13 is not built), built from the i13 design's scene 13 final frame: the hallway floor and number line "x (cm)" from −5 to 40 with the robot at 0, the faint x = t³ − 9t² + 24t graph with "displacement x (cm)" and "t (s)", chips "Next: where, how fast, speeding up?" and "?". Scene 1 is that frame until its heading writes on; the graph darkens on "Its displacement".
- The final frame is `I14FinalFrame` (scene 14's board; the notes cross-fade back to it over the last 40 frames): the faint x = t³ − 2t² panel with dots at t = 1 to 4, the row "−1, 0, 9, 32, ..." with "t = 1 ... 4" labels and "x at t = 1, 2, 3, 4 (the second particle)", chips "Next: sequences" and "?", and the hand line "a list of numbers in order is a sequence". This matches f01's stated opening (row, faint panel, both chips); the hand line is extra.

## Plate fit (root decision 30)
- Robot: placed by Codex's measured body centre (379, 404) and radius 249 file px, so the arrow starts at the body's edge; the side brush sits outside the body. Never scaled non-uniformly; 172 px alpha-box width (about 157 px body).
- Floor: tiled at native aspect (160 px tall, 1,136 px per tile) and clipped to the strip; the plate's two halves join seamlessly as measured.
- Snow post: ticks used as measured (y = 1686 − 4.68 D file px). The coded drift's surface meets the post exactly at depth D; coded labels 50 to "250 cm" sit beside the painted ticks.

## Departures from the design
- **Kit `StudioParticleTrack` and `StudioStackedDerivativePanels` are not used.** The track centres the sprite on its alpha box (26 px off the body because of the brush) and draws grey rest rings and a blue trail; the panels label the shared axis "x" (here x is displacement) and draw the tangent violet (here the tangent is v, teal). Lesson-local `Hallway` and `Stack` keep the colour roles. `ConstantFamilySlider` is used in scene 6. `PlateLevelFill` is not used: a flat rectangle on the narrow ground patch read as a white box, so `SnowPost` draws a drift whose surface sits at D where it meets the post.
- **Robot state changes** (back to t = 2.5 in scene 1, to t = 2 in scenes 2 and 3, to t = 1 in scene 4, to t = 0 for the scene 5 replay) fade the robot out and in, so it never appears to move backwards in time.
- **Scene 2:** the v curve traces as a teal tangent sweeps the x panel on "so it's the gradient" (before "Differentiate"), so the v panel is never empty. The definition cards carry the Revision 3 chip wording "x: measured from a fixed origin O (here, the robot's start)"; an amber "O" marks 0 on the floor.
- **Scene 3:** the a line traces from frame 24 (a violet tangent sweeping the v panel), before the row "ẍ = 6t − 18" on its cue, for the same reason.
- **Scene 5:** the leg lane (20 cm, 4 cm, 20 cm arrows) sits between the number line and the panels; the right column starts below it.
- **Scene 6:** own g01 layout (task strip, equation card, amber initial-conditions card, rows with grey derivative checks, the family plot on the left switching ẍ → v family → x family). No answer frame in scene 6: the framed answer "0 m" is in scene 7 as designed. The shared `WorkedExample` was not used: one row and a picture would have left its left column half empty at the sheet frame.
- **Scene 7:** a quick preview run on "But it didn't sit still", then the replay with legs from "So first it moves"; a card "the particle from the last step" holds the right column until "Its velocity".
- **Scene 8:** the rate line is drawn from the scene's start (it is given in the task); a teal tangent at t = 0 ("starts rising at 20 cm per day") and a "the plan" card fill the opener until the rows arrive. The day appears as the column label.
- **Scene 9:** no small robot icon in the memory card (anchor plates under about 380 px are left out); the chain and the main line fill the card.
- **Feedback 2:** the Revision 3 grey row "x(2) = 5 m from O; the change since t = 0 is x(2) − x(0) = 4 m" is the mistake card's compare line, and the picture shows the x–t curve plus a number line with brackets "from O: 5 m" and "from the start: 4 m".
- **Key notes:** five one-line bullets at 40 px on the left 58 % (decision 58), framed card on the right with a solid chain and the main line. The heading is shown whole from the first frame so the sheet frame at local 30 is not caught mid-write.

## Cue check
`cuemap.ts` resolves every phrase at load (a missing phrase throws); the grade bundle loaded, so all resolve. Repeats named: "minus four" #1 (scene 2), "double dot" #1 (scene 3), "thirty-six centimetres" #1 (scene 5), "velocity" #1 and "acceleration" #1 (scene 9), "acceleration is zero" #1 (scene 11). **The measured scene 2 take is still the old wording** ("measured from the starting point"). If root re-voices scene 2 (Revision 3), re-check K2: "Displacement is position", "Velocity is how fast", "so it's the gradient", "v equals d x", "is flat", "In between", "moves left", "Speed is the size" all exist in the new sentence.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i14`: **PASS (0 failures, 0 warnings)** on the final run. Earlier runs: run 1 failed scene 8 twice ("depth (cm)" off the left edge); run 2 warned on faint text in frame 1 (a card mid-fade). Both fixed. Report copy: scratchpad `build-i14/Explainer-math-a12-i14-grade.md`.

## Brief 238 findings handled
- **238-I14-REFERENCE-POINT:** screen fixes as in design Revision 3 (scene 2 chip wording and the "O" mark; feedback 2 row "x(2) = 5 m from O; the change since t = 0 is x(2) − x(0) = 4 m" with the "from O: 5 m" and "from the start: 4 m" brackets). The speech fix (re-voicing scene 2) is root's; not done here.
- **238-I14-STALE-UNITS:** the robot is in cm and cm/s throughout (readouts, panels, number line, chips 36 cm and 44 cm); the worked particle and both attempts are in metres; scene 8 is snow depth D in cm, with no tank anywhere.

## Kit issues (no kit files edited)
- `StudioParticleTrack`: sprite centred on the alpha box rather than a measured body centre; rest rings are grey and the trail blue, which clash with a "rest = teal" role.
- `StudioStackedDerivativePanels`: the shared axis label is hard-coded "x"; the tangent colour is fixed violet; panel margins (StudioPlot's 48 px top and 72 px bottom) do not let three panels fit under an anchor strip.
- `PlateLevelFill`: rectangle only; a surface-shape option (drift or mound) would suit snow and sand.

## Check at playback speed
- Scene 1: the robot's run against the marker on the x graph (stop at 20, back to 16, stop, off to 36), the arrow shrinking to nothing at each stop.
- Scene 2: the teal tangent sweep drawing the v curve; the flat stubs and rest circles on "flat"; the replay left on "moves left".
- Scene 4: the arrow growing while the robot backs up from t = 2.5 to 3 (speed 2.25 → 3) and shrinking from t = 1 to 2; the column and both markers following.
- Scene 5: the three legs drawing in step with the replay; the signed fill sweep.
- Scene 6: the constant family sliding and settling on the member through the start (v, then x).
- Scene 8: the drift rising to 200 cm and falling back as the day column runs; the drift's shape at playback size.
- The state jumps (fade out/in) should read as cuts, not as motion.

## Honest grade
A on the checker; root's eye may call frames 7 (scene 6, lower right quarter empty), 8 (scene 7 opener, particle still at 0, lower right empty) and 14 (feedback 2 at the moment the mistake caption is writing, so the mistake card is mostly blank) B+ rather than A. The robot sprite is about 160 px across (the floor plate is 1,640 px), below the "about 380 px" anchor guideline; it is kept because a larger robot would cover most of the 45 cm number line.
