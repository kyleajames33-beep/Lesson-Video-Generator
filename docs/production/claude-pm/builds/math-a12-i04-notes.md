# math-a12-i04 build notes (Revision 3, measured narration)

Builder: Claude build agent, 11 November 2026. Not committed. Sheet: `work/quality-audit/fixed/math-a12-i04-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 15,298 frames (510 s), with the notes scene at 1,350 frames.

## Files
- `src/explainer/lessons/math-a12-i04/`:
  - `common.ts`, `cuemap.ts`, `config.ts`, `assets.ts`, `scenes.tsx`;
  - `parts.tsx`: the models and load-time number checks; `FundRig` (the board plate with a coded red fill drawn behind the plate, so it shows through the plate's transparent tube, neck and bulb; coded $0 to $7000 scale); `FundGraph` and `FundBoard` (rate, total and readouts from one t); `PairPlots` (paired ln and 1/x panels on the same geometry as the kit `TwoPieceTracer`); `GapLine` (number line with grey excluded rings); `LnAbsPic`. It re-exports i03's parts and d17's `QAxes` read-only;
  - `s1.tsx` (1 to 5), `s2.tsx` (6 to 9), `s3.tsx` (10 to 16 and `I04FinalFrame`, i05's opening).
- `src/explainer/registry.ts`: one import and one array entry, after i03.

## Joins
- Frames 0 to about 190 are i03's `I03FinalFrame` (imported); it cross-fades to the fundraiser on "A fundraiser's".
- The final frame (`I04FinalFrame`, also the end of the notes after a silent fade) is the sine handoff: y = sin x on the radian window with the dashed cos x ghost, "∫ sin x dx = ?", "which curve has gradient sin x?", "cos x?", "or something else?", plus a "last video: ∫ 1/x dx = ln|x| + C, x ≠ 0" chip and the i04 memory line. i05 imports it.

## Departures from the design
- **The board never shrinks to a 240 px thumbnail** (an anchor under 380 px is a root fault). It stays at 780 px in scene 1 while the exam term writes in the right column; the graphs give way to the task on "question".
- **Scene 1**: a crossed "power rule: 4 · x⁰/0 + C" card with "n = −1: it divides by 0" carries the hook's failure (the i03 frame's own crossed attempt is not pulsed; that component is i03's).
- **Scenes 4 and 5 use the kit `TwoPieceTracer`** (sweep left piece, lift off, sweep right piece; C₁ and C₂ per piece). A faint full 1/x is overlaid in scene 4's lower panel so it is not empty before the trace, and a solid one in scene 5. Scene 4 adds a live readout (point x, gradient of ln|x|, 1/x) during the sweep.
- **Scene 5**: the "never across x = 0" tag is carried by the red dashed "gap: not crossed" ring on the graph; the final row is "in a question: ∫ 1/x dx = ln|x| + C".
- **Scene 6**: a 4 ln|x| graph (with ln|x| dashed and the tangent at 2, gradient 2) fills the left half, so the constant multiple is visible as "× 4: every slope × 4".
- **Scene 6a**: the C slide is an amber arrow on the graph (C = 0 member dashed, ring at (1, 2000)), not a slider widget. The board always shows the real fundraiser (C = 2000). The violet d/dx check row is left out for space; the red slip "C = 0" is crossed with "C is the day-one total". Ladder steps at days 8, 16 and 32 are tagged "+$693"; the first two steps carry no tag (too narrow at that scale), and "+ $693 each doubling" with "1000 ln 2 ≈ 693" is written beside them.
- **Scene 7**: kit-free transform on a StudioPlot: squash (k 1 → 2), slide (h 0 → 3/2), halve (a 1 → ½), with a live board "marked point x / gradient there" (1, 2, 1). The general (1/a) rule chip sits in the top band of the graph.
- **Scene 8**: before "But if the bottom", the lower right shows the integrand 2x/(x² + 4) ("defined for every x"); it swaps to the x² − 4 contrast on "But if".
- **Memory card (scene 10)**: three solid 540 × 400 pictures (ln|x|, ½ ln|2x − 3| with its gap, x² + 4 over a dashed x² − 4 with rings) fill the card from its first frame; the captions glow on their cues. The fundraiser badge is a text chip (a board under 380 px is not used).
- **Attempt pictures**: d17's `QAxes` (820 × 460, no curve, tags "primitive?" and "valid where?"), nothing answer-bearing. Feedback cards use the linear form "∫ 6/(3x + 1) dx" in the shrunk question card (a built-up fraction fell to 24 px and collided with the second line).
- **Key notes card**: the board at 400 px with "donations 1000/t: total 1000 ln t + C".
- **Plan cards** fill the working column until the first worked row in scenes 6, 7, 8 and 9 (root rule: fill from the first frame).

## Cue check
`cuecheck.cjs` (scratchpad build-i04) resolves every phrase, 0 missing. Repeats checked: "two thousand" (6a) uses occurrence 2 ("C is two thousand"); "For x less than two" (14) uses occurrence 2 (the "Dropping" sentence); "mod x" (6) uses the first ("four times the natural log of mod x"). `cueFrame` throws at load on any missing phrase.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i04`: **PASS WITH WARNINGS (0 failures, 1 warning)**: "Few pictures" (coded graphs are not counted). Earlier runs failed on scene 4's empty lower panel (a clip-path bug in my overlay, fixed) and warned on sparse frames 8 and 9 and a 24 px fraction in feedback 2 (all fixed). Report copy: scratchpad `build-i04/Explainer-math-a12-i04-grade.md`.

## Brief 238 findings handled
- **238-I04-TUBE-BULB-CONNECTION**: the delivered plate has a 24 px neck (x 438 to 462, y 1900 to 1923) as transparent opening, and the tube, neck and bulb are all alpha 0. The red fill is drawn behind the plate: a full bulb, plus a column from the bulb centre up to the level, so the fill passes through the neck and reads as one connected column. $0 is the tube's inner bottom (y 1900).
- **238-*-NOTES-FIT (decision 58)**: five one-line bullets at 38 px in the left 1040 px; the framed card on the right; nothing crosses the card edge.
- The maths check had no findings. Numbers are asserted at load in `parts.tsx` (fundraiser 2000, 4302.585, 5465.736, rate 31.25 at day 32, every doubling + 693.147; ln|x| gradients ±½; the linear example 2 then 1; matched and contrast; we-1, we-2, A1 and its slip, A2).

## Kit issues
- `TwoPieceTracer` draws its lower panel only along traced ranges and has no overlay or children prop, so lessons must overlay the full f and any tangents with `makePlot` on the same geometry (fine, but an `overlay` render prop would help).
- I edited no kit files.

## Check at playback speed
- Scene 1: the 3 s clock (day 1 to 32) with the red fill climbing, both graphs drawing and the readouts counting.
- Scene 3: the mirror sweep (70 frames from "axis") with blue connectors; the downhill stubs fading into the drawn curve.
- Scene 4: the tracer sweeping the left piece, lifting off, sweeping the right (about 3.7 s from "each piece"), the readout following it.
- Scene 5: C₁ and C₂ slides with the gradient readouts glowing unchanged.
- Scene 6a: the C arrow slide onto (1, 2000), then the 5 s clock with ladder steps appearing as the day passes 2, 4, 8, 16, 32.
- Scene 7: squash, slide, halve, each about 2 s, the run/rise labels switching.
- Scene 16: the fade back to the sine frame in the last second.
