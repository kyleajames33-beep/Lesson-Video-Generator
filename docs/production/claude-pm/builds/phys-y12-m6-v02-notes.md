# phys-y12-m6-v02 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m6-v02.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m6-v02/common.ts` imports `work/physics-prebuild/p-y12-m6-v02/lesson.json` (made with `python -I work/physics-prebuild/make-provisional.py phys-y12-m6-v02`) on one marked line (`// PROVISIONAL TIMING: switch to measured/lesson.json when voiced`) and exports `PROVISIONAL = true`. Every change is keyed to a cue phrase with `cueFrame` (92 cue phrases, all resolve; none in the last 2 s of a scene); keyframe lists pass through `mono`, late offsets through `cap`. When the measured take lands at `docs/production/claude-pm/lessons/p-y12-m6-v02/measured/lesson.json`, change that import, set `PROVISIONAL = false`, then re-run the cue check, the grade and a still sweep.
- **Hook hold missing (as v01).** The three shape chips arrive on "Straight line, parabola or circle"; the 3 s countdown draws only if a `responseHold` appears.
- **Opening frame:** v01's exported `M6V01FinalFrame` at frame 0 (heading already this lesson's question). From frame 1 v01's frame fades (heading masked) under an identical plate stage and cliff inset; the supply slides in at the top left ("400 V"); the electron leaves the entrance at x 740 on the engine run.
- **Plates:** the supply is present. **Plate request (held since brief 189): `y12p-crt-tube-v1.png`**, a side-on cathode ray tube for scene 7 (and v03 scenes 1 and 5): transparent PNG with alpha, at least 2400 px on the long side, exactly side-on, one pair of truly horizontal deflection plates centred on the axis, no beam, with a JSON sidecar (gun exit point on the axis, the four plate ends, the screen's inner-face centre, the axis line). Fallback built: scene 7 is an exam-style diagram (plates, straight beam, coded screen line, brackets) with the strip "as in an old cathode ray tube: a straight beam to the screen". No coded tube outline was drawn (it would be a coded drawing of a real object); root call 1.

## Files

- Lesson: `src/explainer/lessons/phys-y12-m6-v02/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 16, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m6-v02`, export `config_phys_y12_m6_v02`, PHYSICS, topic "PATHS BETWEEN PLATES", accent `#9c5a00`, key notes at least 1350 frames. Registry: after v01.
- Shared: uses `src/explainer/physics/electromagnetism/plates.tsx` (added with v01; `plateRun`, `PlatePair`, `FieldLines`, `Slider`, `Particle`, `StrobeDot`). Lesson parts (kit gap 2, strobe trajectory mode): a true-scale map (`Map`, `toPx`, `platesFor`), the trail, the moving particle, strobe images with v_x, a and dashed v_y arrows, and a K bar.
- **Simulation:** every path is a run on the field motion engine with a `custom` field (qE/m only while 0 ≤ x ≤ L, nothing beyond), so the parabola, the exit velocity and the straight line after the plates are one computed path: the main case (to 20 cm past the plates), E doubled, L doubled (stopped at the plate, and an unconstrained ghost), v doubled, the slow electron (stopped at the plate, and its ghost), the proton. Readouts t and y are exact arithmetic; "hits" is whether the run reached d/2.
- All values from `common.ts` with the data sheet constants, checked against "Numbers used": a 3.52 × 10¹⁵ m s⁻²; a/g 3.59 × 10¹⁴; t 1.67 × 10⁻⁹ s; y 4.89 × 10⁻³ m; v_y 5.86 × 10⁶; v 3.06 × 10⁷; θ 11.1°; screen 39.1 mm after, 4.4 cm in all; E × 2 9.77 mm; L × 2 would be 19.5 mm, hits 7.15 cm along; v × 2 1.22 mm; slow electron would be 44.0 mm, t 5.0 ns, hits 2.4 cm along; A1 a 8.79 × 10¹⁴, t 2.4 × 10⁻⁹ s, y 2.53 mm, v_y 2.11 × 10⁶, θ 4.8°, slip 2.4°.

## Stages built

1 v01's frame becomes the live stage (supply at 400 V, L and d brackets), the electron fired in sideways curves up at true scale (18 px per mm), the cliff path flips upside down ("upside-down cliff?"), three shape chips; 2 the replay with strobe images at four equal time steps, a ticking clock (ringed, "one clock"), equal teal v_x arrows and equal-step ticks on the bottom plate, equal violet a arrows, dashed v_y arrows growing (drawn 5 × longer, labelled), the growing gaps marked at the plate end, the grey projectile overlay and "y ∝ x²"; 3 the stage pulls back beside a three-row comparison (size with the ringed 3.5 × 10¹⁵, mass with two balls of different sizes on one dashed cliff path, direction with the proton's dashed path bending down, drawn enlarged); 4 and 5 the calculation layout beside a 12 px per mm stage: t = 0.050 / 3.0 × 10⁷ framed, the crossed "bigger push → longer inside", the strobe ticks; then a, y framed, the y and d/2 brackets and the framed "4.9 mm < 10 mm: exits"; 6 the large velocity triangle (v_x, dashed v_y, resultant, the θ arc), the framed 3.06 × 10⁷ m s⁻¹ and 11.1°, speed in and out (ringed), the crossed "same speed in and out", "why faster? (next time)"; 7 the pull back to 4 px per mm: the straight run to the screen 20 cm on, the glowing hit, brackets 4.9 mm (inside), 39 mm (after), the framed 4.4 cm, the backward extension to L/2; 8 the live stage at 12 px per mm with E, L and v sliders, readouts t, y, room and result every state, the plates lengthening to 10 cm and the path stopping at the plate (hits 7.15 cm along) with its crossed ghost, four factor chips, the proton's dashed path; 9 the slow electron with strobe images three times closer, hitting the + plate (impact mark, framed x = 2.4 cm), its crossed 44.0 mm ghost, the framed test "hits if y ≥ d/2"; 10 the framed memory card with two parabolas and the three lines; 11 to 14 question cards (the exam-style A1 plate diagram; the proton and ball panels) and brief feedback with givens strips and one crossed slip each; 15 the handoff (final frame); 16 five notes and the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): "How does a potential difference set a particle's speed?".
- Every mistake and crossed chip is slate (root rule R1), not red; the projectile overlay is a grey highlighter band under the path.
- True scale is kept everywhere, but the scale changes by stage: 18 px per mm (scenes 1, 2, 15), 10.8 (scene 3), 12 (scenes 4, 5, 8, 9, so the doubled 10 cm plates fit), 9 (scene 6's strip), 4 (scene 7); each stage says its scale on screen where it matters.
- Scene 2's v_y arrows are drawn 5 × longer than v_x (true scale would be under 20 px), labelled on screen.
- The proton's path is drawn enlarged (0.35 and 0.3 of the electron's deflection), labelled "drawn enlarged".
- Scene 7 uses the exam-style fallback for the held CRT plate (see Status).
- Cue moves: scene 2's solid parabola on "in place of g" (the "parabola" cue is in the last 2 s); scene 6's chip "why faster?" on "Hold on to that".
- Scene 9's unconstrained ghost path is clipped at the top of the frame.

## Final frame (exported as `M6V02FinalFrame` in `s3.tsx`)

`<HandoffBoard />`: heading "How does a potential difference set a particle's speed?"; plates x 740 to 1640, y 360 and 720 (18 px per mm), blue field lines down; the main case's curved path inside and 8 mm of straight path past the exit, a teal dot at its end; readouts "in 3.00 × 10⁷ m s⁻¹" at (740, 784) and "out 3.06 × 10⁷ m s⁻¹" at (1300, 784), orange K bars under them (300 px and 311 px); chip "Next: how does a potential difference set a particle's speed?" at (96, 190).

## Sweep fixes (stills pass 1)

33 stills at half scale. Fixed: the flipped cliff path rising out of its card (shallower flip, label fades); scene 3's labels on the cliff card (stage and card moved); scene 6's rows under the stage label; scene 7's labels on the total bracket; scene 8's factor chips collapsing into narrow columns (given a width); the slider tick labels on each other; a readout running off the right edge; the handoff path running off the frame.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m6-v02` (25 November 2026, src build, provisional timing): PASS WITH WARNINGS: 0 failures, 9 warnings (sparse frames 52 to 58%: time-inside, exit-velocity, after-plates, attempt-1, feedback-1, attempt-2; the 16 and 17 px subscript and sign characters in the shrunk question cards; "few pictures": 5 of 14 teaching frames reach the probe's plate or shape count, because the stages are coded line diagrams). Report: `out/explainer/Explainer-phys-y12-m6-v02/grade/Explainer-phys-y12-m6-v02-grade.md`; sheet `.../Explainer-phys-y12-m6-v02-grade-sheet.jpg`. Scoped typecheck clean; cue check: all 92 cue phrases resolve, none in the last 2 s.

The first grade failed once: scene 7 at 77% bare before the screen appeared. Fixed by a larger true-scale stage (5 px per mm), the screen and the "20 cm past the plates" bracket from the first frame, and the path drawing from the start of the scene.

**Honest grade: B on provisional timing.** The true-scale parabola with strobe images and one clock, the velocity triangle, the straight run to the screen and the slider runs that stop at the plate carry the idea. Soft spots: several frames at 52 to 58% bare, the stage scale changes between scenes (stated on screen), the CRT plate is still missing in scene 7, and motion needs judging at playback speed.
