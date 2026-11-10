# math-a12-d04 (log base changes; guitar octaves and sound levels): build notes, 10 Nov 2026

Status: typechecked (scoped tsconfig, clean), sheet `math-a12-d04-sheet.jpg` (16 stills at (i − 0.5)/16 of 16,088 frames: 503 … 15585; key notes 1,350), rendered in batches of 4 under the stills lock. Builder's grade: **A** on all 16 frames after root's four fixes (below); a few frames are A− on fill (noted). Not yet watched at playback speed.

## Root's sheet fixes (10 Nov), all applied
1. Attempts use the d02/d03 layout (AttemptStage in parts.tsx): question card, a 44 px Given card, a 720 × 380 answer-free axes picture, full ring from "Pause here"; no "your working" box.
2. Memory aid: the card graph now shows ln x, log2 x and log10 x solid with their factors (× 1.44, × 0.43); formula rows and the guitar and meter key rows (icons about 70 px, 40 px text) are solid from the first frame; the main line writes from the first frames.
3. Feedback question cards: no picture, default 42 px shrinking to 30 px; givens strips moved clear of the card.
4. Scene 3: the heights card gains a guitar row ("x = 4: 440 Hz, 2 octaves up"); the change-of-base rows and notes move up and fill the column.
Also: key-notes bullet spacing 58 px (fills the left 58%).

## Join with d03
Frame 0 reproduces math-a12-d03 scene 16's last frame (15285): same heading, memory line, "This video" card, Next chip, hand tag, graph geometry (826 × 820 at (1000, 170), window −3 to 5), log2 x navy #2b3f73, the navy "× ?" arrow and both labels; checked side by side on stills. The graph then eases to this lesson's window as the plates enter.

## Grade per frame (final sheet)
1 hook ride A; 2 three tangents and "slope = ?" A; 3 paired readout A; 4 heights (left column filled) A−/A; 5 stretch triangle A; 6 proof A; 7 base ten A; 8 slider A; 9 fold A; 10 worked opening (plan card, proved rule, graph) A; 11 memory aid A; 12 attempt 1 (full ring 10) A; 13 feedback 1 A; 14 feedback 2 opening A−; 15 handoff sine A−; 16 key notes A.

## Files
`src/explainer/lessons/math-a12-d04/`: `common.ts`, `assets.ts` (guitar and sound level meter from MATHS_SHARED_PLATES, root decision 4), `config.ts` (key notes `Math.max(1350, d)`), `parts.tsx` (Sub, Lg, Frac, amber Slot and F = 1/ln a, Legend, gmap frame map, logCurve, TanLine, Dot, CurveLabel, RecallChip, Chip, HandNote, WorkingSpace, PreRing, QAxes question picture, guitar and meter plate wrappers), `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8, plus RuleBox), `s3.tsx` (9 to 12), `s4.tsx` (13 to 16), `scenes.tsx`. Registry: one import and one array entry. Kit files not edited.

## Cue check
All 96 `cue()` phrases resolve against the measured lesson.json (script `build-d04/cuecheck.mjs`); five wrong occurrences found and fixed (scene 2 "At the same x" #2, scene 4 "Stretch it", scene 9 "At x equals four" #2, scene 10 "negative" #2, scene 14 "The natural log of a third" #2).

## Departures from the design (with reasons)
- Scene 1: frame 0 approximates d03's final frame (ln x ink, log2 x navy, amber "× ?" arrow at x = 4, "Next: changing the log base" chip); d03 is built by another agent, so the exact layout must be matched by root. Heading reads "How does the log base change the slope?" (no Unicode subscript in the hand font). The meter's coded dB reading sits in its blank display (PlateReadout region) and is repeated at 52 px on a board under it; the guitar board shows frequency, ratio x and octaves up. Points ride back to (1, 0) on "All three" so the three tangents start at one point. No fret named (decision 4).
- Scene 2: guitar thumbnail sits inside the graph's empty upper left; the "same x" chip sits in the graph's empty lower right (two lines).
- Scene 3: the stretch starts on "So log base two is" (the cue "upward" is 21 frames before the scene ends).
- Scene 4: "every slope × c" chip on "Every rise" (the "is too" cue is 19 frames before the end).
- Scene 5: task strip "Now the proof, for any base a" with the target "Prove: d/dx(log_a x) = 1/(x ln a)" as the equation strip; the thumbnail (stretched triangle) sits under the Year 11 card at the left, not top left; the check line appears on "Check base e" (last "x" is 10 frames before the end). Row 3 is split into two rows to keep 60 px type.
- Scene 6: red card on "But log base ten" (cue "underneath" is 28 frames before the end); the too-steep line is red dashed.
- Scene 7: slider is linear 1 to 10 (ticks 2, e, 5, 10); the knob stops at 1.1 on the red "a = 1 not allowed" mark; base eased in ln a. The "1/0: undefined" chip appears on "The formula agrees".
- Scene 8: the graph is taller than in scene 7 (slider gone); the tangent is hidden through the fold and returns on "minus one point four four" #2.
- Scene 9: a Plan card fills the working area until the first row; the guitar return moves the right-column graph under the guitar and the climbing-rate board; the bracket tag is on "only a quarter". Silent crossed slip (decision 5).
- Scene 10: main line "Divide the curve, / divide the slope." written on its spoken cue (53/85) rather than on "negative"; the fold replays on "negative" #2.
- Scenes 11 and 13: a full countdown ring (PreRing) from "Pause here" until the hold starts (the kit Countdown only appears 10 frames before).
- Scene 14: the log_1/3 x curve is on screen from the first frame (fill rule); tangent and "downhill" on "is decreasing".
- Scene 15: final frame is sin x on −π to 2π with violet tangent at (0, 0), "gradient ?" and the Next chip; d05 opens on the same geometry (SINE_STAGE).
- Key notes: five one-line bullets at 40 px in the left 58% and the framed card at the right (decision 58).

## Plates
Used: `physics/phys-y11-guitar-v1.png`, `physics/phys-y11-sound-level-meter-v1.png` (inspected; native aspect via PlateImg/PlateReadout). None missing.

## Kit issues
- `Countdown` (kit) renders nothing until 10 frames before the hold, so the "ring full from Pause here" rule needs a lesson-local ring (PreRing).
- `QuestionAxes` only marks a point when a curve is given; the no-curve "x = 2 marked" picture is lesson-local (QAxes).
- `FunctionSimulator` `curves` have no draw-on; the log10 draw uses a growing domain.

## Check at playback speed
The PitchMeter ride (110 → 220 → 440 Hz) and the meter's dB rise; the stretch landing on log2 x; the triangle carried by the stretch; the slider swing near a = 1; the fold (labels hidden mid-fold); the scene 9 graph sliding under the guitar.
