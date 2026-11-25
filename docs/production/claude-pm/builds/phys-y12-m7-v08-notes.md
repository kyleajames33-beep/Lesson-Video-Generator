# phys-y12-m7-v08 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v08.md` (Revision 3 visuals win, plus the coherence audit fix of 24 November: the "Cos is close" recall chip). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v08/common.ts` imports `work/physics-prebuild/p-y12-m7-v08/lesson.json` on one marked line and exports `PROVISIONAL = true`. 85 cue calls, all resolve (`work/tsc-scope/cuecheck-m7b.py v08`); late cues capped (no change in a scene's last 2 s). Switch the import to `docs/production/claude-pm/lessons/p-y12-m7-v08/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design.** The prepared `lesson.json` and the brief 259 source audit carry the current design narration (6,283 characters, 16 scenes; checked scene by scene by script). The 24 November coherence fix changed screen text only. The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Hook hold.** The 3 s ring sits on the provisional hold at the end of the hook (after "Let's see why"); the chips arrive on "Make your prediction" and the tick lands on the third "Half".
- **Opening frame:** v07's exported `M7V07FinalFrame` at frame 0. From frame 1 v07's board (`HandoffBoard7`, final) stays under the same heading; on "brighter and dimmer" its filter turns and the readout swings; on "ordinary lamp light" it crossfades to the lamp stage.
- **Plates:** optical bench, filament lamp, laser module (opening only), slide holders (up to three), light sensor, protractor, data logger. Uniform scale only. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v08/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 16, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v08`, topic "POLARISATION", accent `#8e3b78`. Registry: after m7-v07.
- Shared (new file, from v07): `physics/light/polar.tsx` (`FilterFace`, `EArrow`, `polarGeom` and `PolarBench`: bench, lamp or lifted laser, holders with coded discs in their windows, painted sensor with feet on the rail; `IBar`). Engine functions used directly: `malus` (every cos² value, the chain and the A1 working, in `common.ts`), `displacement` (the sound inset and the transverse and longitudinal particle strips).
- Lesson parts: `Stage` (bench, bars standing on the rail between components, face-on filter insets above the holders), `BarLabels`, `EndOn` (the end-on E-arrow view with components along and across an axis), `randDeg` (random E directions), `Readout`.

## Stages built

1 v07's laser bench; the filter turns and the readout swings ("laser: already polarised"); crossfade to the painted lamp with one filter (bars I₀ and ½I₀, "ideal filters"); the filter turns 90° with the bar unchanged ("any angle: ½I₀"); a second filter turns to 90° (bar to zero, "crossed", orange ring), on to 180° (back), then to 45° (half of ½I₀); chips and tick; hand tags. 2 the end-on view (beam towards you) with E jumping at random, then locked and oscillating; a side view of light with E across the travel; the site's plane-polarised and polarisation definitions; the sound inset (engine particles moving along the travel) with a filter disc and the slate-crossed "filter selects a direction" ("nothing to select"); the across arrow ticked, the along arrow slate-crossed; the chip. 3 a big filter disc behind the E arrow; the E arrow split into a solid component along the axis and a dashed component across it that fades; the light leaving the filter polarised along the axis; random E with a running-average meter settling near ½; the I₀ → ½I₀ bars ("ideal filter"); the disc turns and the output stays ½I₀. 4 the analyser stage: a small painted bench (polariser and analyser with bars), the large component view with the navy θ arc and "passed: E cos θ", the "Cos is close" recall chip (coherence audit U-S2), "intensity ∝ amplitude²", the framed I = I_max cos²θ, the slider 35° → 0°, 45°, 60°, 90° with readouts (cos²θ 1, 0.50, 0.25, 0; I 40, 20, 10, 0 W m⁻²) and the cos² graph drawing with dots. 5 two filters crossed (bar zero, "cos 90° = 0", "ideal filters: exactly zero"); the analyser to 180°; the graph extended to 360° with two peaks and two zeros pulsing. 6 the two-filter stage with end-on views (random E before the first filter, one direction after it); "θ = ?" slate-crossed; ½I₀; the framed I = ½ I₀ cos²θ; slate-crossed "first filter: I₀ cos²θ". 7 the site's chain on the painted bench: rail bars 80, 40, 30, 22.5; face-on discs at 0°, 30°, 60°; task, givens and three stages to the framed 22.5 W m⁻²; slate-crossed "40 cos 30° = 34.6 W m⁻²"; the middle holder fades out, the last bar drops to 10 (framed I₃′ = 10 W m⁻²) and rises again when it returns; E arrows turning to 0°, 30°, 60°. 8 painted bench, lamp, two holders, the analyser over the painted protractor, painted light sensor and painted data logger; the analyser clicks round in 15° steps while the table fills (illustrative lux readings); the background chip; the sensor reading against cos²θ, the line through the origin and the framed gradient ≈ 480 lux. 9 the judgement board (establishes, rules out, does not settle) with engine particle strips (light across, sound along), Maxwell's E-across wave, tick and slate cross, and the framed verdict. 10 the memory card; E = E_max cos θ, I = I_max cos²θ and unpolarised → ½I₀ pulse in turn beside the end-on components. 11 to 14 question cards (lamp and two filters 35° apart, no bars; lamp and one filter) and brief feedback (bars 120, 60, 40; end-on transverse and longitudinal pictures). 15 the polariser chain (final frame).

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "How did thermal spectra" (capped) it changes to v09's question; the design's final frame kept v08's heading.
- **Site definitions quoted exactly:** "Plane-polarised light: light in which the electric field oscillates in only one direction perpendicular to propagation." and "Polarisation: the restriction of the oscillations of a transverse wave to a single plane." (scene 2), "Polarising filter: a material that transmits only one plane of polarisation and absorbs the perpendicular component." (scene 3), all from site lesson 5's key terms.
- Intensity bars stand on the bench rail between the components (not on a separate strip), so each bar sits where its light is.
- Feedback 2's pictures are end-on: E across the beam with a filter for the transverse wave; a pulsing ring (oscillation towards and away) for the longitudinal wave, which has nothing across the beam.
- Scene 9's particle strips use the engine's `displacement` drawn as coded dots, not `WaveStringView`.
- Scene 3's average meter is a running mean of cos² over the shown random directions (it settles near 0.5, not exactly).
- The laser beam is red and lamp light warm white; red pen marks and crossed chips are slate (R1).

## Final frame (exported as `M7V08FinalFrame` in `s3.tsx`)

`<HandoffBoard8 f={end} final />`: heading "How did thermal spectra challenge classical predictions?"; the painted bench (x 160, y 600, w 1600, carrier scale 1.2) with the filament lamp (filament at x 400) labelled "unpolarised", a polariser holder at x 820 ("polariser: axis 0°") and an analyser holder at x 1200 ("analyser: axis θ", axis 55°), each with a face-on filter inset (r 56) at y 230; a navy θ arc on the analyser inset; orange rail bars "I₀", "½I₀", "½I₀ cos²θ" at x 610, 1010, 1390; the painted light sensor at x 1580 with a coded readout box "I" at (1590, 170); chip "Next: how did thermal spectra challenge classical predictions?". The hand tag and the grey wave chip fade before the hold.

## Numbers (all from `common.ts`, checked against "Numbers used")

cos² 0°, 45°, 60°, 90° = 1, 0.50, 0.25, 0; I for I_max = 40 W m⁻²: 40, 20, 10, 0. Chain: 80/2 = 40; 40 × 0.75 = 30; 30 × 0.75 = 22.5; without the middle filter 40 × 0.25 = 10; slip 40 cos 30° = 34.6. Investigation: cos² 1, 0.93, 0.75, 0.50, 0.25, 0.07, 0.00; readings 482, 446, 362, 238, 121, 34, 3 lux; best fit through the origin 480.4 → "≈ 480 lux". A1: ½ × 120 = 60; cos²35° = 0.671; 60 × 0.671 = 40.3 → 40 W m⁻²; slip 120 cos²35° = 80.5 → 81 W m⁻².

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v08` (25 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 5 warnings** (sparse frames in the investigation, significance, feedback 2 and the notes; attempt 2's picture is small). Earlier runs failed on mostly empty frames (polarisation, filter action, significance); fixed by the tinted beam cross-section, the side view of light, the output panel and meter from the first frame, and the judgement board's row frames. A float display bug (30.000000000000004) in the chain was fixed by formatting every value with `fx`. Report: `out/explainer/Explainer-phys-y12-m7-v08/grade/Explainer-phys-y12-m7-v08-grade.md`.

**Honest grade: B on provisional timing.** The lamp stage with rail bars and face-on insets, the E arrow splitting with the absorbed part fading, the analyser slider drawing the cos² graph and the chain with the middle filter taken out carry the explanation. Soft spots: the investigation is a table and a plot; the significance board is text with small strips.

## For root

- v09 opens on `M7V08FinalFrame`; v09's scene 1 shrinks this chain into its "wave model" badge.
- Provisional timing only; re-time from the measured take before any render.
