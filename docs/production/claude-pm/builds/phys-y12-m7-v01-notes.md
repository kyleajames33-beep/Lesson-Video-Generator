# phys-y12-m7-v01 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v01.md` (Revision 3 visuals win). First video of Module 7. No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v01/common.ts` imports `work/physics-prebuild/p-y12-m7-v01/lesson.json` on one marked line (`// PROVISIONAL TIMING: switch to measured/lesson.json when voiced`) and exports `PROVISIONAL = true`. Every change is keyed to a cue phrase with `cueFrame` (72 cue calls, all resolve; a missing phrase throws at bundle time). Late cues are capped (no change in a scene's last 2 s). When the measured take lands at `docs/production/claude-pm/lessons/p-y12-m7-v01/measured/lesson.json`, change that import, set `PROVISIONAL = false`, then re-run the cue check, the grade and a still sweep.
- **Prepared input matches the design.** The prepared `docs/production/claude-pm/lessons/p-y12-m7-v01/lesson.json` and the brief 259 source audit carry the current design narration (6,087 characters, 14 scenes; checked scene by scene by script with the build parser rules). The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Hook hold.** As v19 and v20: the 3 s ring sits on the provisional hold at the end of the hook, after "It matched the speed of light"; it moves with the measured take.
- **Opening frame:** Module 6's exported `M6V20FinalFrame` at frame 0. From frame 1 v20's handoff board is redrawn in its final state (its curling E arrows keep turning) until "Now flip it", when the whole board fades and the "changing E → B?" chip glides to the centre and ticks on "said yes". The heading is already this lesson's question (v20 changed it at its handoff).
- **Plates:** Sun, radio mast, spark-gap transmitter and loop receiver (anchors from `assets/brief191-manifest.json`). All uniform scale. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v01/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 14, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v01`, export `config_phys_y12_m7_v01`, PHYSICS, topic "MAXWELL AND LIGHT", accent `#9c5a00`, key notes at least 1350 frames. Registry: after m6-v20.
- **New shared kit (Module 7), `src/explainer/physics/light/`:** `plates.tsx` (the Module 7 plate specs with measured visible boxes and anchors, `LPlate`, `Disc`, `placeByAnchor`, `anchorAt`), `em.tsx` (`EMWave`: plane wave with E and B in phase, a `tilt` that turns B from end-on dots and crosses into a three-quarter view, field arrows and a phase marker; `LoopChain`/`CurlLoop`; `frontRadii`/`FrontArcs` for fronts released at given times; `Spark`; `ChargeDot`; `CapCircuit` exam-style charging capacitor with current, plate charge, gap field and B loops round the gap and a wire), `spectrum.tsx` (`wlColor`, `SpectrumStrip`, `EMRibbon`, `EnergyLadder`, `LightPath`). Course-neutral; no existing shared file edited.
- Lesson parts: `MastRig` (mast plate, coded rod on the top spike, oscillating electrons, AC symbol), coil and capacitor circuit symbols, `TimerBox`.
- Scoped typecheck: `work/tsc-scope/tsconfig.m7-v01-v03.json` (light kit and the three lessons): clean.

## Stages built

1 v20's ring and chips, pulse on "curls round it", tags "changing B", "makes E"; the chip answered "changing E → B ✓", "one set of equations: E and B"; a growing linked E and B chain drifting right with a navy "speed = ?" arrow; three prediction chips; tick on "the speed of light"; the painted Sun slides in with an amber beam along the chain. 2 grey chips "current → B", "changing B → E" and an empty third chip; the circuit diagram (cell, switch, plates) charging with orange current dots, rose + and − piling up, blue E lines thickening, "no charge crosses" bracket, slate loops round the gap filling the chip "changing E → B", the double arrow and the unification bracket. 3 the chain growing loop by loop, travel arrow, "each makes the next", crossed "air or water needed", "no medium"; the chain turns into the EM wave (side view with B as dots and crosses, then the three-quarter view), right-angle marks, "transverse", a marker running along with E and B peaking together, "in phase". 4 the painted mast with oscillating electrons, AC symbol, a v-t sine chip, fronts released once per oscillation; the frequency dial (a coded knob) stepping 50, 100, 200 MHz with live f (charges), f (wave), λ = c / f (6.0, 3.0, 1.5 m) and cycle and front counters; three contrast panels (still, constant velocity, accelerating). 5 task strip, equation strip, the data-sheet box with coil and capacitor symbols, crossed "light", a large model wave labelled "speed in a vacuum = ?" that shrinks aside at "Multiply them", three stages (earlier stages shrink, solid), the framed c, the crossed "1 / (μ₀ε₀)" slip, the measured-speed chip and the framed conclusion. 6 transmitter and receiver plates, coded sparks, rose charges in the rods, fronts crossing, receiver spark, the illustrative working, crossed "v = f / λ", reflected/refracted/polarised. 7 the EM ribbon (log frequency), a marker stepping radio, microwave, visible (orange swatch), X-ray with live f and λ and an unchanging speed, a small wave whose wavelength shortens, c = fλ and the arrows. 8 a rose charge shaking a chain that pulses then runs off; memory card. 9 to 12 question cards (Sun with beam; the mast) and brief feedback. 13 the handoff (final frame). 14 five notes and the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "How can a time-and-distance measurement" (capped) it changes to v02's question.
- **Simulation engine.** Design Revision 3 names the waves engine (`useWaveTime`, `WavefrontView`). The fronts and the plane wave are drawn by the new light kit instead, from emission times on one scene clock: the dial changes the oscillation period mid-run, which the engine's fixed `period` cannot do without restarting the fronts, and the B wave lies in a second plane. Values on screen are computed in `common.ts`; the motion is a slow model ("model wave, slowed", "slowed down").
- Scene 1: v20's crossed "battery" and "wires" chips fade with the whole board at "Now flip it", not separately at "curls round it".
- Scene 2: the capacitor is an exam-style circuit diagram (coded, as circuit symbols are allowed); B loops are drawn edge-on round the gap.
- Scene 7: the marker sits at radio from the scene start and steps at "In a vacuum" (+80, +160 frames) so the readouts are live before "c equals f lambda".
- No quoted site definitions appear on screen (the design quotes none); plain meanings stay in the narration.
- Every mistake is slate (R1). No on-screen video numbers ("last time").

## Final frame (exported as `M7V01FinalFrame` in `s3.tsx`)

`<HandoffBoard f={end} final />` (layout exported as `HB`): heading "How can a time-and-distance measurement reveal the speed of light?"; the EM wave (blue E, slate B, navy axis, "direction of travel") from x 200 to 1480 at y 520; "E ↔ B"; chip "c = 1/√(μ₀ε₀) ≈ 3.00 × 10⁸ m s⁻¹ (predicted)"; the distance bar (200 to 1700, y 760) with "distance d = ?"; orange "3 m" bracket and timer "≈ 10 ns"; timer "t = ?" with "time"; chip "speed = d / t"; chip "Next: how can a time-and-distance measurement reveal the speed of light?" at (96, 890).

## Numbers (all from `common.ts`, checked against "Numbers used")

μ₀ε₀ = 1.113 × 10⁻¹⁷; √ = 3.336 × 10⁻⁹; c = 3.00 × 10⁸ m s⁻¹; slip 1 / (μ₀ε₀) = 8.99 × 10¹⁶; dial λ 6.0, 3.0, 1.5 m; Hertz f = 5.0 × 10⁷ Hz, λ = 6.0 m, v = 3.0 × 10⁸, slip 8.3 × 10⁶; ribbon 300 m, 3.0 cm, 600 nm, 3.0 × 10⁻¹⁰ m; room 10 ns; A2 λ = 3.05 m, slip 3.05 × 10⁶ m.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v01` (25 November 2026, provisional timing): **PASS WITH WARNINGS: 0 failures, 5 warnings** (sparse frames early in the hook, the capacitor scene, both feedback scenes and the notes). Earlier runs failed on near-empty openings of scenes 2, 5, 7 and both feedback scenes; fixed by showing each stage (circuit, data box and model wave, ribbon marker, first answer row) from the scene start. Report: `out/explainer/Explainer-phys-y12-m7-v01/grade/Explainer-phys-y12-m7-v01-grade.md`.

**Honest grade: B on provisional timing.** The capacitor gap with loops and no charge crossing, the chain turning into the wave, the dial crowding the fronts with live λ and the crossed "light" beside the coil and capacitor symbols carry the explanation. Soft spots: the B loops round the gap overlap the plate charges; the hook's ring follows the answer until the measured take moves it.

## For root

- v02 opens on `M7V01FinalFrame`.
- Provisional timing only; re-time from the measured take before any render.
