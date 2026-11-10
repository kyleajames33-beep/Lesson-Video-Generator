# math-a12-d05 (sin and cos derivatives; Ferris wheel): build notes, 10 Nov 2026

Status: typechecked (scoped tsconfig with d04, clean); sheet `math-a12-d05-sheet.jpg` (16 stills at (i − 0.5)/16 of 15,241 frames: 476 1429 2381 3334 4287 5239 6192 7144 8097 9049 10002 10954 11907 12860 13812 14765; key notes 1,350), rendered in batches of 4 under the stills lock. Builder's grade after root's round: **A** (frames 2, 7 and 14 are the lightest; see below). Not yet watched at playback speed.

## Root round (10 Nov), applied
1. Wheel enlarged: scenes 1 and 3 use R = 300 px (rim about 630 px across with cabins and stand), graph 1070 wide with the window y from −1.3 to 1.3 so one graph unit still equals the radius and the seat-to-point leader stays horizontal (scene 1 eases from d04's window). Later scenes (2, 4, 6, 7) show it at R = 150 (about 430 px tall with the stand), solid.
2. Attempts use a d05-local wide layout (AttemptWide): question card, 44 px Given card (three lines in attempt 2, question at 54 px), a 900 × 380 answer-free radian picture filling the lower right, ring full from "Pause here" and drawn above the picture.
3. Working rows use WholeRows (local copy of the kit WorkingRows that fades each line in whole), so no frame shows clipped glyphs (worked example and both feedback scenes).

## Files
`src/explainer/lessons/math-a12-d05/`: `common.ts`, `assets.ts`, `config.ts` (key notes `Math.max(1350, d)`), `parts.tsx` (FerrisWheel rig on the kit's RotatingPlate: stand static with its axle on the hub, rim rotating, 8 upright cabins at 45°, marked cabin at angle 0; ReadStrip; SIN/COS; QRad radian question picture; GreenRule; Legend; generic helpers and AttemptStage re-exported read-only from math-a12-d04/parts), `s1.tsx` (1 to 4, PairedLower), `s2.tsx` (5 to 8), `s3.tsx` (9 to 12, CycleNodes), `s4.tsx` (13 to 16), `scenes.tsx`. Registry: one import and one entry.

## Cue check
All 88 `cue()` phrases resolve (script `build-d05/cuecheck.mjs`); scene 6 "at pi" uses occurrence 2.

## Plates and anchors (brief235-manifest.json)
Rim hub [750, 750]; cabin bracket radius 500 px is "radius 1" (manifest outer rim 515); stand axle [439, 757]; gondola pivot [543, 302]; cabin width 0.3 R. On the stills the hub sits on the stand's bushing and the cabins hang upright from the brackets. Plates never stretched.

## Joins
Frame 0 = d04's final frame (same graph geometry, memory line, "gradient ?" and Next chips). Final frame (decision 55): sin x ink, sin 2x navy, both tangents at (0, 0), "gradient ?", the Next chip, no wheel.

## Departures from the design
- Scenes 1 and 3: graph unit = wheel radius and the x-axis is level with the hub, so the seat-to-point leader is horizontal; readouts on a strip above the graph (no room under the stand).
- Scene 2: the zoom inset sits in the right column; before the chords, the column shows "gradient at 0 = ?" and the Year 11 chord chip.
- Scene 3: no peak zoom; the quick full turn shows the graph point wrapping back to 0 after 2π.
- Scene 4: the trace runs 0 to 2π on "draws a curve", then the point returns to π/3 (trace kept).
- Scene 5: unit-circle values on a strip under the wheel (kit labels would run off the right edge); no stand.
- Scene 6: landmark dots in the lower plot carry their gradient values ("0", "−1", "0", "1").
- Scene 9 task strip "Find every x in [0, 2π] with this gradient"; the value 3√2/2 is in the givens card; silent crossed slip (decision 5).
- Scene 10: the cycle nodes are visible from the start (arrows draw on cue); the wave slides four quarter-periods on "Each derivative".
- Attempts: d02/d03 layout (question card, 44 px Given card, 720 × 380 radian picture, full ring from "Pause here"). Feedback cards have no picture (30 px text when shrunk).

## Grade per frame
1 wheel and sin x A; 2 chords opening A− (right column light until "With the point"); 3 landmarks A; 4 quick turn A; 5 paired trace at π/3 A; 6 unit circle A; 7 cosine landmarks A− (lower plot sparse mid-scene); 8 slide A; 9 graphing check A; 10 worked example A (row written whole); 11 memory aid A; 12 attempt 1 A; 13 attempt 2 A (wide picture); 14 feedback 2 A− (mistake card arrives after this frame); 15 handoff final A; 16 key notes A.

## Kit issues
Same as d04: kit Countdown appears only 10 frames before the hold (lesson-local full ring); QuestionAxes cannot mark a point without a curve; FunctionSimulator `curves` have no draw-on. RotatingPlate's unitCircle labels overflow when the circle is near the right edge (labels done on a strip instead). FunctionSimulator fades in over its first 14 frames when `at` is 0, so join frames pass `at={-30}`.

## Check at playback speed
The rim rotation with upright cabins; the horizontal leader tracking the point; the quick full turn; the trace landing on dashed cos x; the shrinking arc; the degree stretch and its reversal; the π/2 slide carrying three tangents; the 25 dots; the four quarter-period slides in the memory card.
