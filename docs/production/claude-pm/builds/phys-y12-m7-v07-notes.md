# phys-y12-m7-v07 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v07.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v07/common.ts` imports `work/physics-prebuild/p-y12-m7-v07/lesson.json` on one marked line and exports `PROVISIONAL = true`. 78 cue calls, all resolve (checked by `work/tsc-scope/cuecheck-m7b.py v07`); late cues capped (no change in a scene's last 2 s). Switch the import to `docs/production/claude-pm/lessons/p-y12-m7-v07/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design.** The prepared `lesson.json` and the brief 259 source audit carry the current design narration (6,157 characters, 16 scenes; checked scene by scene by script). The audit's `sourceSha256` predates later edits to the design file, but no narration line changed. The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Hook hold.** The 3 s ring sits on the provisional hold at the end of the hook (after "darkness in between"); the prediction chips arrive on "Make your prediction" and the tick lands on "No". It moves with the measured take.
- **Opening frame:** v06's exported `M7V06FinalFrame` at frame 0. From frame 1 the same board stays (v06's `HandoffBoard`, final) under this lesson's heading (the same words); v06's "Next" chip fades.
- **Plates:** optical bench, laser module (lifted on a coded block), slide holder (several sizes), screen carrier, metre rule, pocket spectroscope, light sensor (handoff). Uniform scale only. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v07/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 16, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v07`, topic "DIFFRACTION GRATINGS", accent `#8e3b78`. Registry: after m7-v06.
- Shared (new files): `physics/light/grating.tsx` (`Ray`, `rayEnd`, `arcPath`, `GratingBar`, `PhaseDial`, `pairSum`, `SpectrumArc`); `physics/light/polar.tsx` (`FilterFace`, `EArrow`, `polarGeom`, `PolarBench`, `IBar`; used in the handoff and by v08). Engine functions used directly: `gratingBrightness` (hook curve, slit-count graphs, better-ruler line), `brightAngles` (the order fan and the A1 fan), `gratingSpacing`, `highestOrder` (all in `common.ts`).
- Lesson parts: `TopView` (grating, rays and screen line from above), `Arc`, `Bracket`, `SpotScreen`.

## Stages built

1 v06's graphs; the ruled slide magnified (lines drawn in) with "each line acts as a slit"; the prediction chips; the navy connectors pulse on "No"; the 16-slit grating curve (engine) drawn solid in red over the sketch. 2 twenty slits with phase dials (all in step, then fanning as the turn grows); the total bar; a two-slit inset (still bright); slit 1 and slit 11 ("1", "N/2 + 1") opposite and ringed; the pair's zero box; pairs linked one by one; the total drops to zero ("dark"); the slit-count slider N = 2, 6, 20, 1000 under a brightness graph from the engine whose peaks narrow in place, with "peak width × 1, 0.33, 0.10, 0.002" and the chip. 3 the order fan from above; the ±1 rays swing from 4° to the engine's 15.0°; the neighbouring-lines close-up with the rose d sin θ side and d bracket; the framed d sin θ = mλ; the slate-crossed "Δx = λL/d" (small angles only). 4 the magnified 1 mm strip filling with 400 lines; a zoom box of single lines with a rose d bracket; the working to the framed d = 2.5 × 10⁻⁶ m; the site's "Grating element (d)" definition; the painted bench with the rose d bracket at the slide and the orange L bracket; the slate-crossed "d = grating-to-screen distance". 5 task, equation and grouped givens; the painted bench with the beam drawing; the face-on screen with spots over the painted metre rule; a to-scale top view (L = 1.00 m, x = 0.268 m, θ = 15.0°); tan then sin working to the framed 647 nm; the sin/tan chip; slate-crossed "λ = d tan θ = 670 nm"; the red swatch. 6 the camera pulls back to the to-scale fan; second-order rays at 31.2° and third at 50.9° (engine); framed 31.2° and m = 3; "sin θ ≤ 1"; slate-crossed "3.86 rounds up to 4"; the m = 4 ray dashed and slate-crossed; the x₃ = 1.23 m bracket off the bench screen. 7 white light into the grating; the wavelength slider (450, 532, 647 nm; θ₁ 10.4°, 12.3°, 15.0°) moving the first-order spot in its true colour; the first-order spectra spreading on an arc; second and third orders with the overlap hatched. 8 a broad two-slit band at 0.145° against a sharp engine grating line at 15°; the crosshair wanders on one and snaps on the other; the same ± 0.05° bar (about 34% against about 0.3%, illustrative); the painted pocket spectroscope with a coded cut-away grating. 9 painted bench; top view with θ_L and θ_R; the grating tilts 2° with live readouts (14.94°, 15.08°, mean 15.01°); the table for tilts 0°, 2° and 5° (means 15.00°, 15.01°, 15.06°); the second-order spots ringed; the quoted-N chip; the red safety chip and ring on the laser aperture. 10 the memory card; N to d = 1/N with the flip arrow; the grating's lines crowd and the fan widens. 11 to 14 question cards (painted slide holder with a ruled slide and a green beam, no orders; a grating, a screen and spots, not to scale) and brief feedback (the green engine fan drawing as each answer lands; the θ arc and red spots). 15 the painted bench, laser and slide holder; the grating's fan; the sound chip; the "?" with along and across arrows; the coded filter replaces the grating in the holder, a face-on filter inset turns, the painted light sensor and a coded readout "I = ?" with a moving bar (final frame).

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "Why does rotating a polariser" (capped) it changes to v08's question; the design's final frame kept v07's heading.
- **Site definition quoted exactly:** scene 4's chip uses site lesson 4's key term "Grating element (d): the distance between adjacent slits in a diffraction grating; d = 1/N where N is lines per metre." (design wording "grating spacing d"). The order symbol stays m (syllabus form) though the site writes n.
- The handoff uses the painted light sensor (`y12p-light-sensor-v1.png`) with a coded readout box rather than a fully coded sensor (owner rule: real objects painted).
- Scene 9's results table shows the design's tilt values (0°, 2°, 5°) rather than invented repeat readings. Scene 8's ± 0.05° error and percentages are illustrative and tagged so (design gives no number).
- Scene 2's slit-count slider runs from "a thousand slits" (the design puts it after "away"; the provisional timing leaves under 2 s there). The "1000" step is drawn as thin lines with a tag (the true peak is narrower than a line).
- Scene 1's bottom curve is the engine's 16-slit grating curve drawn solid in laser red, not N = 1000 (a 1000-slit curve cannot be drawn at this size).
- Red pen marks and crossed chips are slate (R1); the safety chip stays red.
- The design's author note gives atan(0.268) = 14.999°; it is 15.003°. Every displayed value (15.0°, 647 nm, 31.2°, 3.86, 50.9°, 1.23 m) is unchanged; λ uses the rounded 15.0° as the worked example does.

## Final frame (exported as `M7V07FinalFrame` in `s3.tsx`)

`<HandoffBoard7 f={end} final />`: heading "Why does rotating a polariser change transmitted intensity?"; the painted bench (x 260, y 600, w 1400, carrier scale 1.25) with the laser module on its block at x 560, one slide holder at x 1000 holding a coded filter disc (axis 70° from vertical), the painted light sensor at x 1420; the red beam to the sensor; a face-on filter inset at (1000, 235), r 66, with its navy axis at 70° and a navy rotation arrow; a coded readout box (1560, 240, 230 x 150) "I = ?" with its bar at cos²70°; the "?" with grey along and across arrows at about (700 to 790, 270); grey chip "sound: diffracts, interferes, longitudinal" at (96, 190); chip "Next: why does rotating a polariser change transmitted intensity?" at (96, 890). `HandoffBoard7` takes `rot`, `qO` and `soundO` so v08 can turn the filter and fade the question.

## Numbers (all from `common.ts`, checked against "Numbers used")

d = 1/(4.00 × 10⁵) = 2.5 × 10⁻⁶ m; θ = tan⁻¹(0.268/1.00) = 15.0°; sin 15° = 0.259, tan 15° = 0.268; λ = 2.5 × 10⁻⁶ × sin 15.0° = 6.47 × 10⁻⁷ m = 647 nm; slip d tan θ = 670 nm; sin θ₂ = 0.518, θ₂ = 31.2°, x₂ = 0.605 m; d/λ = 3.86, m = 3 (engine `highestOrder`), θ₃ = 50.9°, x₃ = 1.23 m; slider θ₁ 10.4°, 12.3°, 15.0°; peak width 1, 0.33, 0.10, 0.002; tilt 2°: 14.94°, 15.08°, mean 15.01°; tilt 5°: mean 15.06°; white light 1400 and 1200 nm. A1: d = 3.33 × 10⁻⁶ m, sin θ₂ = 0.319, θ₂ = 18.6°, d/λ = 6.27, m = 6. A2: θ = 19.3°, d = 2.00 × 10⁻⁶ m, λ = 6.61 × 10⁻⁷ m = 661 nm.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v07` (25 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 6 warnings** (sparse frames in the investigation, both feedback scenes, attempt 2, the handoff and the notes). Earlier runs failed on mostly empty frames (sharp lines, line density, white light, investigation) and text off the frame (white light); fixed by the always-on brightness graph and slider, the zoom box and bench from the first frame, the equation strip and slider staying on, and moving the benches clear of the heading. Report: `out/explainer/Explainer-phys-y12-m7-v07/grade/Explainer-phys-y12-m7-v07-grade.md`. Stills checked at the joins and the final frame (`work/tsc-scope/stillsm7b.sh`).

**Honest grade: B on provisional timing.** The phase dials cancelling in pairs, the slit-count slider, the ±1 rays swinging to 15°, the to-scale fan with the impossible m = 4, the wavelength slider and the tilt readouts carry the explanation. Soft spots: scene 1's lines zoom is static once drawn; scene 8's error bars are illustrative; the 1000-slit step is drawn as lines.

## For root

- v08 opens on `M7V07FinalFrame`.
- Provisional timing only; re-time from the measured take before any render. Scene 2's slider timing and scene 1's hold placement should be re-checked on the take.
- Design note: atan(0.268) is 15.003°, not 14.999° (no displayed value changes).
