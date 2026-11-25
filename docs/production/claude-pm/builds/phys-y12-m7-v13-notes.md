# phys-y12-m7-v13 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v13.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v13/common.ts` imports `work/physics-prebuild/p-y12-m7-v13/lesson.json` on one marked line and exports `PROVISIONAL = true`. Every cue resolves (`work/tsc-scope/cuecheck-m7d.py v13`: 0 problems); late cues capped. Switch the import to `docs/production/claude-pm/lessons/p-y12-m7-v13/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design.** The prepared `lesson.json` and the brief 259 source audit carry the current design narration (6,395 characters, 18 scenes; checked scene by scene by script). The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Holds (open).** (1) The hook's 3 s prediction is designed after "Make your prediction.", but the prepared countdown hold sits at the end of the hook; the build runs the ring from "prediction" over "Detectors at sea level catch plenty of them" and lands the tick after it. (2) The design's 2 s slider hold in scene 8 (gamma-size) is missing; the slider (0, 0.6, 0.8, 0.9, 0.995c) moves on its narration cues with a 20-frame stop at 0.9c. Root to add both in the voicing input if wanted. Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present.
- **Opening frame:** v12's exported `M7V12FinalFrame` at frame 0. From frame 1 v12's board fades, the spacecraft and its light clock shrink to the top right, and the heading (already this lesson's question) stays.
- **Plates:** Earth, spacecraft, cloud chamber (sea-level detector), atomic clock, space station (A2), accelerator tunnel (A1 card context), white star (trip and handoff), steel ball (spring scene). Uniform scale only. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v13/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v13`, topic "TIME DILATION", accent `#8e3b78`. Registry: after m7-v12.
- Shared (new file): `physics/light/relativity.tsx` (`ClockDial`, `LightClockPanel` driven by the relativity engine's `lightClockAt` and `lightClockTicks`, `clockTicks`, `clockX`, `CurvePlot` with `plotX`/`plotY` and an optional grid, `AtmosColumn` (deterministic exponential muon decay), `ShipOutline`/`outlineExtent`, `SpeedGauge`, `MomentumBar`, `Globe` (flight loops), `StorageRing`, `BeamPipe`; plate specs `CLOUD_CHAMBER`, `ATOMIC_CLOCK`, `SPACE_STATION`, `LINAC` with `REL_ANCHOR`). This closes the design's kit gaps 1 and 2.
- Lesson parts: `Panel`, `Counter`, `Givens` re-export.

## Stages built

1 v12's frame; the painted Earth, a coded 15 km atmosphere column and the painted cloud chamber on the ground strip; grey cosmic-ray streaks; slate muons held at the top, then dying within the 660 m bracket ("dies way up here?"); the 3 s ring with "many", "a few", "almost none"; on "Detectors at sea level" muons reach the ground, tracks flash on the chamber's glass top, "detected: N" counts, "many" ticks, ring and "observed at sea level"; "different elapsed times" underlined. 2 the large light clock on the spacecraft's hull; d bracket; one tick up and back with a tick counter; the teal "2d" path; framed "t₀ = 2d / c" and "t₀: the clock's own time". 3 ship-frame and Earth-frame panels; the moving clock's zigzag from the engine (inverted V by "down"); 2d against the slanted path laid side by side ("longer path"); "c (postulate 2)" on both; tick counters drift apart; "each tick takes longer in Earth's frame", "t > t₀". 4 the half-tick slant lifts off into a large right triangle (ct/2 amber, vt/2 orange, d ink, "sideways motion: d unchanged"); "(ct/2)² = d² + (vt/2)²". 5 the triangle's d becomes ct₀/2; algebra rows to the framed data-sheet form, violet γ and framed "t = γt₀" ("gamma ≥ 1"). 6 the two panels with event markers (one place in the ship frame, two in Earth's), the teal clock at both events, two ink clocks, "γ ≥ 1 → t ≥ t₀", "shortest", slate-crossed "proper = correct", the site definition. 7 light clock, spring and decaying muon in both panels; the hypothetical mismatch (spring unslowed) and "breaks postulate 1"; all slow by γ; the frame swap (ship still, painted Earth moving, Earth's clock slow), "both ways". 8 the γ curve with a speed slider and marker, live v and γ readouts, the half-tick triangle whose slant grows, ship and Earth clocks in the ratio 1 : γ, the value list, the jet chip, the asymptote and "γ → ∞ as v → c". 9 working layout beside the column and chamber; rows to framed 22 μs and 6.6 km; teal clock riding a muon; 660 m and 6.6 km brackets; slate-crossed "range = 0.995c × 2.2 μs = 660 m"; 2.3 dilated-lifetime marks; "≈ 1 in 10 reach sea level (classically ≈ 1 in 10¹⁰)" with the ideal-model label. 10 the coded globe from above the pole with eastward and westward loops beside the painted atomic clock (display readout −59, +273 ns); readouts with uncertainties, "opposite signs", the speed plus gravity chip and the Earth-centre note; then the CERN storage ring with two decay timers and "29 × longer, as γ predicts". 11 painted Earth, ship and white star; ink clocks at Earth and the star ("synchronised in Earth's frame"), teal ship clock pulsing at departure and arrival; framed 15 and 9.0 years; slate-crossed "15 × 1.67 = 25 years". 12 memory card over the two panels; the Earth counter lags; the teal clock pulses. 13 to 16 question cards (pion beam pipe with the tunnel plate; Earth, ship and station) and brief feedback. 17 the trip seen from the ship (Earth and star slide left), 12 ly and "0.8 × 9 = 7.2 ly (ship frame?)" brackets, heading changes to v14's question (final frame). 18 key notes with the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "Why can a moving distance" (capped) the heading changes to v14's question; the design's final-frame description keeps v13's heading.
- **Site definition quoted exactly** (lesson 12 vocabulary): "Proper time (Δt₀): The time interval between two events measured in the frame where they occur at the same position, the shortest possible time for those events." (the lesson's symbol is t₀; the site writes Δt₀).
- **Scene 8 clock roles corrected:** the design says the ink (Earth) clock lags and "barely moves" at 0.995c; timed from Earth it is the moving ship's teal clock that runs slow (1 : γ), so the teal clock lags. Root to confirm.
- Scene 4's Pythagoras line writes on from "by Pythagoras" (the bold last "squared" falls in the scene's last 2 s); the amber arrow lands on the capped cue.
- Scene 7 shows the hypothetical mismatch in the Earth-frame panel (light clock slowed, spring not), then all three slowed together; the "postulate 1" flash is a slate chip (R1).
- "not to scale" tags on the hook (Earth and the 15 km column) and on the trip and handoff boards; the light clocks use an illustrative 0.6c (no number on screen).
- The A1 card adds the painted accelerator tunnel above the coded beam pipe (context; nothing answer-bearing).
- Historical claims checked: Joseph Hafele and Richard Keating, October 1971, eastbound −59 ± 10 ns, westbound +273 ± 7 ns, speed and gravity; CERN muon storage ring 1977 (γ ≈ 29, about 64 μs against 2.2 μs). Names in text only.

## Final frame (exported as `M7V13FinalFrame` in `s3.tsx`)

`<HandoffBoard13 f={end} final />`: heading "Why can a moving distance be shorter without an object being crushed?"; painted Earth (cx 160, cy 430, d 190) and white star (cx 1590, cy 430, d 80), both slid 110 px left; the spacecraft at (800, 360, w 380); ink bracket "12 ly (Earth frame)" at y 600; teal bracket "0.8 × 9 = 7.2 ly (ship frame?)" at y 690; orange arrow "star approaching at 0.8c"; ink clock "Earth frame: 15 yr" and teal clock "ship's clock: 9 yr"; "not to scale"; chip "Next: why can a moving distance be shorter without an object being crushed?" at (96, 860). Geometry exported as `HANDOFF13`.

## Numbers (all from `common.ts`, checked against "Numbers used")

γ(0.995) = 10.0; 0.995c × 2.2 μs = 657 m (≈ 660 m); 22 μs; 6.6 km; 15 km = 2.3 dilated lifetimes; survival ≈ 1 in 10, classically e^(−22.8) = 1.2 × 10⁻¹⁰; slider γ 1.00, 1.25, 1.67, 2.29, 10.0; jet γ − 1 ≈ 3 × 10⁻¹³; HK −59 ± 10, +273 ± 7 ns; ring γ ≈ 29, 64 μs; trip 15 and 9.0 years, γ 1.67, slip 25 years; A1 γ 3.20, 83 ns, 24 m, slip 8.1 ns; A2 10 and 8.0 years, γ 1.25.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v13` (25 November 2026, provisional timing, regraded after the last kit change): **PASS WITH WARNINGS: 0 failures, 4 warnings** (sparse frames in attempt 1, feedback 1, attempt 2; few pictures). The first run failed on a near-empty early dilation-equation frame; fixed with a larger triangle, the clock-at-rest reminder, a goal strip and the algebra panel. Report: `out/explainer/Explainer-phys-y12-m7-v13/grade/Explainer-phys-y12-m7-v13-grade.md`. Scoped typecheck clean (`work/tsc-scope/tsconfig.m7-v13-v16.json`).

**Honest grade: B on provisional timing.** The engine-driven zigzag with drifting counters, the triangle lifting off the path, the event markers, the muon column with its two brackets and the clocks ticking 1 : γ carry the explanation. Soft spots: the hook ring runs over narration; the algebra scene is text-led.

## For root

- v14 opens on `M7V13FinalFrame`.
- Decide the hook's 3 s pause position and the scene 8 slider hold before voicing.
- Confirm the scene 8 clock-role correction.
