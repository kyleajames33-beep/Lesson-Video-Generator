# math-a12-d03 (differentiating ln x, app users and "how long until?"): Revision 4 build on the maths studio kit, 10 Nov 2026

Sheet: `math-a12-d03-sheet.jpg` (16 evenly spaced stills over 16,636 frames at (i − 0.5)/16; key notes held at 1,350 frames). Rendered at concurrency 1 under the stills lock, three rounds.
Builder's grade: A after root's review round (10 Nov); attempt 1's bare axes picture is accepted by root. Not yet watched at playback speed.

## Files
Created in `src/explainer/lessons/math-a12-d03/`: `common.ts`, `parts.tsx` (plate specs `D03_PLATES` with the manifest screen rectangle and dial centre; `AppRig`: phone plate with coded screen text, stopwatch plate with the kit `StopwatchHand`, one turn per week; `PhoneIcon`, `WatchIcon`, `Legend`, `Chip`, `RecallChip`, `CurveLabel`, `Frac`, `LnRule`, `lnRows`, `BlankAxes`, `FullRing`, `AttemptStage`), `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (9 to 12), `s4.tsx` (13 to 17), `scenes.tsx`, `assets.ts`, `config.ts`. Registry: `config_math_a12_d03` added (one import, one list entry).

Kit imported read-only: `FunctionSimulator` on `LOG_BASE_FAMILY` and `EXP_BASE_FAMILY`, held-stop secant with zoom, `gradientDots`, the reflection channel (`reflect`, equal-unit plots: width − 126 = height − 120 and a square window), `mirror`, `regions`, `asymptotes`, `ParameterSlider`, `StopwatchHand`, `QuestionCard`, `GivensStrip`, `GivensCard`, `WorkingRows`, `MistakeCard`, `KeyNotesBullets`.

## Plates
`ma12-phone-v1` and `ma12-stopwatch-v1` (brief 235) used at native aspect, with the manifest's `screenSafeRectangle` and `dialCentreEstimate`/`dialRadius`. None missing.

## Departures from the design (with reasons)
- Scene 1: frame 0 holds d02's final frame (panel at (820, 200), 1010 × 720, "This video"/"Last video" card, "Next: differentiating ln x" chip, "gradient ?"); on "It answers" the panel's box and window animate into the square main graph (826 × 820, −3..5). Phone 420 px tall (not 520) with the stopwatch 300 px and a 600 × 380 inset of navy eˣ above them, to keep text above y 950. A small card states the model ("1,000 users; each brings 1 new user a week; after x weeks eˣ thousand"). The phone screen text is coded directly (not the kit `ScreenCounter`, which overflowed the narrow screen).
- Scene 2: the phone thumbnail shows "ln x / weeks to reach x thousand"; a chip "x = 2: gradient ½ · x = 4: gradient ¼" arrives on "Double".
- Scene 3: the full readout board (x, height, gradient, gradient × x) stays on, not just the blue row, so the scene opens filled; the heading is written before the scene starts.
- Scenes 4 and 6: later coordinate pairs sit faint as previews and turn solid on their cues (secondary items only).
- Scene 5: triangle legs are labelled "across 1 / up 2" then "rise 1 / run 2" (the label switches when the reflection lands); the anchor words go in one grey line "1 week up, 2 thousand users across" and "½ week per thousand", because longer leg labels collided with the board.
- Scene 6: the summary strip, a pairs table (eˣ height and slope against ln x x and slope) and the blue "gradient × x = 1" chip; on "The app" the graph shrinks to 646 px and the phone and stopwatch return. The stopwatch runs from 4,000 users until the count reaches 5,000 (exactly ln(5/4) = 0.22 weeks), and the readout says "next thousand: about ¼ week" with "(exactly 0.22 weeks)", so the illustration never implies an exact quarter-week endpoint (maths check note).
- Scene 7: a "What we found on the graph" card fills the working area until row 1; the thumbnail is 406 × 400 (eˣ, ln x, y = x); the crossed card is full width under the rows.
- Scene 8: a "Why x > 0" card in four lines carries the cause beside the shaded region; the phone shows "users > 0".
- Scenes 9 and 10: graph and slider on screen from the first frame (fill); plan card and the rule card in the working area until row 1. Sliders 220 px wide so the badge stays inside the margin. The crossed card in scene 9 arrives on "So three over x" (1063), not "wrong" (1110, 12 frames before the end).
- Scene 11: the main line "Flip the graph, flip the slope." writes on "Flip the graph" (when it is said), not on the last "x"; the triangle replays its reflection there.
- Scenes 12 and 14: `AttemptStage` (as d02 after root's review): question card, "Given" card, large answer-free axes picture with only a violet tag, full ring from "Pause here to answer.".
- Scene 15: a plan card fills the working area until the first row.
- Scene 16: the phone and stopwatch icons fade before "Next"; final frame: ln x and navy log₂ x, the "× ?" arrow at x = 4 and "Next: changing the log base".
- Scene 17: five bullets at 38 px in the left 58% (two of them two short lines), framed card on the right with phone and stopwatch icons.

## Cue check
All 102 `cue()` phrases resolve against `lessons/math-a12-d03/measured/lesson.json`; every resolved frame was listed and checked against the intended occurrence. Five wrong occurrences were found and fixed (scene 2 "one" = 3rd, scene 3 "x" = 2nd, scene 6 "one over x", scene 7 "to get x", scene 13 "minus two"). Countdowns use the measured holds (attempt 1: 380 to 680; attempt 2: 386 to 686).

## Kit issues found (not edited)
- `ScreenCounter` sizes labels and values together and overflows a narrow portrait phone screen (labels are counted at 0.42 width but clamped to the same 26 px floor); worked round with lesson-local screen text.
- `QuestionAxes` always draws a point dot when a tag is wanted; for "gradient = 6 where?" a lesson-local `BlankAxes` is used.
- `QuestionCard` shows its ring only from `start − 10`; the rule "ring full from Pause here" needs a lesson-local `FullRing` (same in d02).

## Typecheck
Scoped tsconfig in the scratchpad `build-d03`: clean (apart from an unused import in `src/explainer/kit.tsx`).

## Check at playback speed
- Scene 1: the panel growing into the square graph; the users counter and stopwatch with the navy dot; the dashed arrow onto (4, 1.39).
- Scene 2: secant held stops with the zoom; the rider to x = 2, 4 and ½ with gradient × x fixed at 1.00.
- Scene 3: the sweep leaving violet dots that land on 1/x.
- Scenes 4 and 5: the dashed eˣ folding over y = x; the triangle legs turning (labels switch only at the end of the fold).
- Scene 6: the stopwatch quarter-week sweep while the counter runs 4,000 → 5,000.
- Scenes 9 and 10: the k sliders (ln(kx) slides up with the gradient readout fixed at 0.500; k ln x stretches, rise 1 → 3).

## Root review round (10 Nov)
1. Proof (scene 7): the tiny thumbnail is gone. The lower band now holds the app anchor (phone "ln x weeks", stopwatch, "time to reach x thousand users = ln x weeks"), the scene 2 readout board "x 2.00, gradient 0.500, gradient × x 1.00" (its blue row boxed and glowing on "the pattern our readout showed", tag "our readout!"; it leaves when row 5 lands), and a 640 × 340 graph of eˣ, y = x and ln x with the tangent at (1, 0) on "Not". The "÷ x" tag moved beside row 5; the final frame and crossed card are unchanged.
2. No pale text: scene 4's second coordinate pair and scene 6's table rows are not rendered until their cues, then fade in to full ink.
3. Scene 3: the plot is 1000 × 840 (window x −0.5..5, y −2..4.5); a solid dot trail at x = 4.8 to 2.8 is on screen from the first frame and the rider continues the trail from x = 2.5 down to 0.25; readout board and cards sit in a 700 px right column.
4. Attempt 1 picture unchanged (accepted).
Scoped typecheck re-run: clean.
