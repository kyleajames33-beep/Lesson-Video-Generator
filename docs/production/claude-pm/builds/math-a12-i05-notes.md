# math-a12-i05 build notes (Revision 3, measured narration)

Builder: Claude build agent, 11 November 2026. Not committed. Sheet: `work/quality-audit/fixed/math-a12-i05-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 16,195 frames (540 s), with the notes scene at 1,350 frames.

## Files
- `src/explainer/lessons/math-a12-i05/`:
  - `common.ts`, `cuemap.ts`, `config.ts`, `assets.ts`, `scenes.tsx`;
  - `parts.tsx`: the models and load-time checks; `SolarRig` (the panels plate under a dashed day arc with the reused physics sun at angle πt/12); `SolarGraph` and `SolarBoard` (power, energy and readouts from one t); `TrigPair` (paired radian panels); `Stub`. It re-exports i04's parts read-only;
  - `s1.tsx` (1 to 4), `s2.tsx` (5 to 8, with 5a), `s3.tsx` (9 to 15 and `I05FinalFrame`, i06's opening).
- `src/explainer/registry.ts`: one import and one array entry, after i04.

## Joins
- Frames 0 to about 200 are `I04FinalFrame` (imported from i04); it cross-fades to the panels on "A home's".
- The final frame (`I05FinalFrame`, also the end of the notes) is y = cos x on 0 ≤ x ≤ π/2 with eight left-endpoint rectangles (width π/16, each top-left corner on the curve), "add them up?" with a large "?", the stepper "rectangles 4 | 8", "thinner and thinner" and a width card. No sum, value or area label. i06 imports it.

## Departures from the design
- **The panels never shrink to a 300 px thumbnail.** In scene 1 the solar stage (panels 760 px wide, about 390 px tall, the sun on its arc, board and two graphs) gives way on "a primitive of a sine curve" to the paired test panels; the panels return in 5a.
- **Rig labels**: the "6 am / noon / 6 pm" arc labels are left out (they collided with the heading and the panels); the time readout carries the clock.
- **Scene 2**: the fold is a y-scale 1 → −1 over 30 frames with the stubs fading through flat. The silent amber C slide after "plus C" is left out (the scene ends 29 frames after "C").
- **Scene 4**: the tan window is x −2.0 to 5.1 (two full pieces plus partial ones). "One piece at a time; a constant each" is a screen-only chip (decision 34; not spoken).
- **Scene 5**: the three general rules are a 32 px card (one row each) at the end; the 1/a is written linear and blue.
- **Scene 5a**: the slip is shown as a dashed red curve "slip: only 10" on the energy graph (no MistakeCard; no room beside the rows). The C slide is shown by the C = 0 member dashed and the full curve sliding up as C runs to 60/π.
- **Scene 7**: before the rows, a "chain rule in reverse" card and a grey "from d06: d/dx cos u = −sin u × u′" chip fill the column; the contrast "∫cos(x²) dx: no 2x out the front" is a grey chip (not crossed).
- **Scene 8**: three right-hand pictures in turn: the first integrand with sin(x³), the second with tan(sin x), then sin x between ±1 with dashed ±π/2 lines and the blue band "inside stays in [−1, 1]". "all real x" is a chip.
- **Memory card (scene 9)**: the kit `StudioDerivativeWheel` at 680 px fills the left half (d/dx arrows on "cos", "minus sine", "minus cos", "back to sine"; ∫ arrows on "Integrating"; the sin → −cos and cos → sin arrows pulse on their sentences). The panels badge is a text chip.
- **Feedback 2**: a 380 px wheel inset with only the sin → −cos arrow ("one step back").
- **Attempt pictures**: the integrand in violet (CurvePic 820 × 460), nothing answer-bearing.

## Cue check
`cuecheck5.cjs` (scratchpad build-i04) resolves every phrase, 0 missing. Repeats checked: "exactly" (2) uses occurrence 2 ("It traces sine x exactly"); "Two cos of" (13) uses occurrence 2 (the slip sentence, not "minus two cos of"); "so the answer" (8) uses occurrence 2 for the second example; "plus C" (8) uses 1 and 2; "is two" (4) uses 1; "radians" (3) uses 2.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i05`: **PASS WITH WARNINGS (0 failures, 3 warnings)**:
- frame 12 (attempt 1): 63% bare (question scene; the card text is short);
- frame 14 (feedback 2, before the check and the slip arrive): 52% bare;
- "Few pictures" (coded graphs are not counted).
Earlier runs failed on an off-frame chip (scene 3) and empty frames in scenes 7 and 8, and warned on rig labels colliding with headings; all fixed. Report copy: scratchpad `build-i04/Explainer-math-a12-i05-grade.md`.

## Brief 238 findings handled
- **238-I05-NOTES-FIT**: the two long bullets are rewritten short: "Linear inside: ÷ its rate. ∫cos 5x dx = ⅕ sin 5x + C." and "tan answers: one interval between asymptotes." All five bullets are one line at 38 px inside the left 1040 px; the framed card (with a 380 px wheel) sits on the right. "Check by differentiating" moved off the bullets (it is in every worked example).
- The maths check had no findings. Numbers are asserted at load in `parts.tsx` (E(0) = 0, E′ = p, 19.0986 at noon, 38.1972 at sunset, slip 10; the trig derivatives; the linear and matched examples; A1 and A2 with their slips; the asymptote positions).

## Kit issues
- `StudioDerivativeWheel` has no way to hide an arrow other than a far-future cue (I pass 99999 for the three unused ∫ arrows in the feedback inset).
- I edited no kit files.

## Check at playback speed
- Scene 1: the 3 s day (sun on the arc, power hump, energy curve, readouts), then the 0.8 s return to noon and the steepest-at-noon tangent; the cross-fade to the paired panels.
- Scene 2: the fold through flat (1 s) and the tracer (4 s) laying dots on sin x.
- Scene 5: the squash (2 s) with the gradient readout 1 → 5.
- Scene 5a: the C slide, then the clock to noon and to sunset; the slip curve on "Half".
- Scene 9: the wheel arrows drawing on their words.
- Scene 14: the four rectangles rising, the split to eight on "thinner".
- Scene 15: the fade to the rectangles frame in the last second.
- Frames 2, 3 and 14 have a lighter right column in parts of their scenes; root may want them denser.

## Root review round (11 Nov)
1. Scene 2: a solid power graph ("power = 5 sin(πt/12)", the solar day) fills the lower right from the first frame until "climbs"; from "climbs" to "So the integral" a 44 px check card "d/dx(−cos x) = sin x" with a 230 px derivative wheel fills it; the chip moved up to y 650.
2. Scene 8: the first graph's window is tightened (x ±1.35, y −3.4 to 2.6) so the curve fills the 830 × 810 stage, and a "then: differentiate back" card fills the lower left until task 2.
Grade checker re-run: PASS WITH WARNINGS (0 failures; attempt 1 sparse, feedback 2 52%, few pictures). Sheet re-made. i04 untouched.
