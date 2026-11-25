# phys-y12-m7-v12 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v12.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v12/common.ts` imports `work/physics-prebuild/p-y12-m7-v12/lesson.json` on one marked line and exports `PROVISIONAL = true`. Every cue resolves (`work/tsc-scope/cuecheck-m7c.py v12`: 0 problems); late cues capped. Switch the import to `docs/production/claude-pm/lessons/p-y12-m7-v12/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design.** The prepared `lesson.json` and the brief 259 source audit carry the current design narration (6,351 characters, 18 scenes; checked scene by scene by script). The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Holds (open).** (1) The hook's 3 s prediction is designed after "Make your prediction.", but the prepared countdown hold sits at the end of the hook; the build runs the ring from "prediction" over "Careful measurements always give c" and lands the tick and slate cross after it. (2) The design's 2 s slider-sweep hold in scene 10 is missing (moving-source-test hold 0); the sweep (0, 0.5c, 0.9c, 0.99975c) runs inside the narration, about 24 frames per stop. Root to add both in the voicing input if wanted. Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present.
- **Opening frame:** v11's exported `M7V11FinalFrame` at frame 0. From frame 1 the ship, pulse, "v = 0.8c" and both pulse tags are redrawn in place while the parallel-line plot and the 1905 tag fade with v11's board.
- **Plates:** spacecraft (large, small and as the probe and the turning ship), spacecraft exhaust layer, Earth, Sun (scene 5, tagged "not to scale"), steel ball, car seen from above, lift car. Uniform scale only. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v12/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v12`, topic "EINSTEIN'S POSTULATES", accent `#8e3b78`. Registry: after m7-v11.
- Shared (new file): `physics/light/frames.tsx` (`SHIP`, `EXHAUST` (registered on the ship's box), `STEEL_BALL`, `CAR_TOP`, `LIFT_CAR`, `SHIP_ANCHOR`, `shipGeom`; `Ship` with the exhaust layer; `FrameBadge` (ruler and clock, hand turning with time); `Starfield`; `Interferometer` (rotating schematic, beams out and back, shrinking arm) and `ifoParts`; `LightClock`; `FringeStrip` (from the waves engine's `sumAt`)). Engines used: `sims/waves.ts` (the fringe strips), `sims/relativity.ts` (`lightClockAt`, `lightClockTicks`: the handoff's vertical and slanted paths). This closes the design's kit gaps 1 to 3.
- Lesson parts: `Ball`, `Spring`, `CabinBox`, `VArrow`, `Ledger`.

## Stages built

1 v11's frame; the painted Earth with an ink badge; a fresh pulse leaves the nose; the teal ship badge and "c (on board)"; 0.8c and c arrows and the grey dashed "1.8c?" ("common sense?"); the 3 s ring with "1.8c", "c", "0.2c"; tick on "c", slate cross on "1.8c", "c (from Earth)", amber ring and "measured: c, within uncertainty"; "agree" underlined. 2 badges pulse; frame chip; "observer = frame"; "ship: 20 km/s"; the probe (a small spacecraft plate) leaves at 10 km/s (teal arrow); the ink 30 km/s arrow; framed 20 + 10 = 30 km/s; brace; "Galilean: fine at low speed". 3 the large ship over a starfield; the cabin cut-away with the steel ball; the site's inertial-frame definition; coasting: stars speed up and hold, the ball stays put (teal ring); engines on: exhaust, stars accelerate, the ball drifts to the back wall with a dashed "no force?" arrow and "first law fails here"; non-inertial chip; a small ship turning on a dashed arc. 4 the ship shrinks; a large cabin panel with two colliding balls and a spring beside a teal clock; then two panels "ship at rest" and "ship at 0.8c" running identically; Earth and the orange relative-velocity arrow; slate-crossed "absolute rest". 5 the Maxwell strip and chip; "relative to what?"; the dotted aether with the site's wording; sound tag; the painted Earth moves past the painted Sun with "≈ 30 km s⁻¹ through the aether?"; grey wind streaks. 6 the schematic on its slab; beams out and back; the fringe strip; the schematic rotates 90 degrees, then 180; the dashed expected 0.4 marker, the 0.01 tick, "40 times too big to miss"; "observed: ≈ 0"; July 1887 and later-tests chips; "null result" with a ring. 7 the schematic with the shrinking arm ("shrink exaggerated", "made to fit"); the ledger rows; a fringe strip with no shift; the "no independent evidence" chip. 8 the postulate card (rows on cue, syllabus brackets, amber underline) over the ship and Earth frames. 9 the three-box chain with arrows; badges point to box 2; the closed cabin with a pulse and a slate-crossed "c − v?" ("would reveal your speed"); box 2 flashes; "null result" under box 3, green "consistent" and tick. 10 the beam pipe, two gates (30 m, illustrative), pions, the speed slider sweep with Galilean and measured readouts; gamma rays; slate-crossed "0.999c + c ≈ 2c?"; framed result, amber ring on "100 ns", ledger chip. 11 ship and Earth, a pulse between, c = distance / time under each, "?" rings, clocks ticking at different rates, "next: time". 12 the memory card, the postulate rows pulse, arrows from both frames to one c. 13 to 16 question cards (ship, car on a roundabout, lift; the small schematic) and brief feedback (acceleration arrows on the car's path and the lift; the fringe strip with expected and observed). 17 the light clock on the ship: one bounce at rest, the teal vertical path, the ship moves right and the ink zigzag draws from the relativity engine, "c" on both, "time per tick?" (final frame). 18 key notes with the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "So how can two observers" (capped) the heading changes to v13's question.
- **Site definition quoted exactly** (lesson 11 vocabulary): "Inertial frame: A reference frame in which Newton's first law holds; a frame moving at constant velocity (no acceleration)." (design chip "inertial frame: not accelerating; Newton's first law holds"). The aether tag uses the site's phrase "a hypothetical light-carrying medium".
- **Scene 6 tag corrected:** the design's "40 times too small to miss" reads the wrong way round; the expected 0.4 fringe is 40 times the detectable 0.01, so the tag reads "40 times too big to miss". Root to confirm.
- **Coded real objects replaced by plates:** the probe (scene 2) is a small copy of the spacecraft plate; the turning ship (scene 3) likewise. The interferometer, slab, cabin window, spring, beam pipe and light clock stay schematic.
- **Scene 4:** "readouts equal" is shown as identical motion and clocks with "same results, same rates" (no invented numbers). **Scene 5:** the painted Sun is added beside the Earth, tagged "not to scale".
- The "null result" stamp is ink, not red; crossed predictions are slate (R1); the postulate-1 flash is grey.
- The handoff light clock uses an illustrative β = 0.6 (no numbers on screen); the clock is drawn above the hull (the hull is too thin at this size for a readable clock).
- Historical claims kept as designed and checked: Michelson and Morley, 1887, noon and evening runs over several days in July; later seasonal tests separate; Lorentz and FitzGerald named for the contraction rescue, limited to this result; Einstein 1905; CERN 1964 pion test within about 1 part in 10⁴. Names in text only.

## Final frame (exported as `M7V12FinalFrame` in `s3.tsx`)

`<HandoffBoard12 f={end} final />`: heading "How can two observers measure different elapsed times?"; the painted spacecraft at (720, 520, w 800), exhaust off, with a teal "ship frame" badge at (1190, 810) and "time per tick?" under it; the painted Earth at (150, 760, d 140) with an ink "Earth frame" badge and "time per tick?"; a light clock (mirrors 110 px wide, 200 px apart, lower mirror at y 560) centred at x 1143 on teal posts to the hull, pulse at the lower mirror; a teal vertical path tagged "ship: up and down"; an ink zigzag of two diagonals from x 843 to 1143 tagged "Earth: slanted, longer"; "c" on both paths; chip "Next: how can two observers measure different elapsed times?" at (96, 890).

## Numbers (all from `common.ts`, checked against "Numbers used")

0.8c + c = 1.8c (Galilean, crossed); 20 + 10 = 30 km/s; c = 1/√(μ₀ε₀) = 2.998 × 10⁸ ≈ 3.00 × 10⁸ m s⁻¹; Earth's orbital speed 2.98 × 10⁴ m/s ≈ 30 km/s; expected 0.4 fringe, detectable 0.01 (ratio 40); pions 0.99975c; Galilean c + v = 1.00c, 1.50c, 1.90c, 2.00c and Δt over 30 m = 100, 66.7, 52.6, 50.0 ns; measured 100 ns.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v12` (25 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 6 warnings** (sparse frames in the hook, frames, Michelson-Morley, null-result limits, attempt 1 and feedback 1). The first run failed on badge labels under 26 px, mostly empty frames (Maxwell and the aether before the Earth arrived; the null-result scene) and a thin notes board; fixed by larger badge labels, the Earth and Sun from the scene start, a fringe strip on the null-result scene and a fuller memory card. Report: `out/explainer/Explainer-phys-y12-m7-v12/grade/Explainer-phys-y12-m7-v12-grade.md`.

**Honest grade: B on provisional timing.** The floating ball that drifts under thrust, the twin cabins, the rotating schematic with fixed fringes, the crossed "c − v?" cabin readout, the pion slider with a steady 100 ns and the light clock's two paths carry the explanation. Soft spots: the hook ring runs over narration; the postulate card is text-led.

## For root

- v13 opens on `M7V12FinalFrame`.
- Decide the hook's 3 s pause position and the scene 10 2 s sweep hold before voicing (see Status).
- Confirm the corrected scene 6 tag ("40 times too big to miss").
