# phys-y12-m7-v02 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v02.md` (Revision 3 visuals win; root edit of 21 November included). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v02/common.ts` imports `work/physics-prebuild/p-y12-m7-v02/lesson.json` on one marked line and exports `PROVISIONAL = true`. 62 cue calls, all resolve (a missing phrase throws at bundle time); late cues capped (no change in a scene's last 2 s). Switch the import to `docs/production/claude-pm/lessons/p-y12-m7-v02/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design.** The prepared `lesson.json` and the brief 259 source audit carry the current design narration (6,123 characters, 14 scenes; checked scene by scene by script). The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Hook hold.** The 3 s ring sits on the provisional hold at the end of the hook, after "It was the planets"; it moves with the measured take.
- **Opening frame:** v01's exported `M7V01FinalFrame` at frame 0. From frame 1 the same board is redrawn from v01's exported layout `HB` (the wave's phase continues): "speed = d / t" gives way to the strip "v = d / t", the bracket and timer pulse on "ten nanoseconds", the bar stretches off the edge on "enormous", the timer zooms on "something tiny", then the board fades for the two painted prediction cards (Jupiter, toothed wheel).
- **Plates:** Sun, Earth, Jupiter, Moon, toothed wheel, plane mirror (turned to face the beam), ray box, laser module, light sensor (`y12p-light-sensor-v1.png`, now delivered: one copy turned to face up, one mirrored), oscilloscope (kit `Scope`), satellite, filament lamp, discharge tube. All uniform scale. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v02/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 14, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v02`, topic "SPEED OF LIGHT", accent `#9c5a00`. Registry: after m7-v01.
- Shared: the Module 7 light kit `src/explainer/physics/light/` (see v01 notes); `motor.tsx`'s `Scope`.
- Lesson parts: `MirrorAt` (the mirror plate placed by its glass centre and turned to a reflecting direction), `reflect`, `WheelAt` and `rimR`, `OrbitIcon`, `DataGraph`.

## Stages built

1 last time's wave board; "v = d / t"; crossed "stopwatch (about 0.1 s at best)" and "far too fast to time by hand"; stretching bar and zooming timer; two painted prediction cards; tick and ring on "planets", "1676 versus 1849". 2 the orbit stage (Sun, dashed Earth orbit, Jupiter with Io circling and vanishing in the shadow); the eclipse timetable, "late" and "early"; Earth swinging to the far side and back and out again while a live readout "eclipse runs late by ≈ N s" is computed from the Earth to Jupiter distance in the picture (0 to 1000 s); near and far light paths; the orange orbit-diameter bracket; delay chip; framed working; crossed radius slip; Rømer's 22 minutes chip; "speed finite". 3 the painted wheel turning, a pulse out to the turned mirror and back through the same gap; the live slider (6.3 to 12.6 turns per second) with gap-to-tooth time (110 to 55 μs) against the fixed round trip (55 μs); the returning pulse stopped at the wheel, "blocked"; a magnified inset of the plate's rim with the navy gap-to-tooth arc; task, equation, givens, two stages, crossed whole-period slip. 4 ray box, the spinning mirror on a coded spindle turning 3° (exaggerated) while a pulse goes out to the fixed mirror and back, the returned beam deflected, angle arc, grey Foucault chip, "water tube: a later video". 5 laser, coded beam splitter feeding sensor 1, sensor 2 on the return path, leads to the oscilloscope, a looping pulse, two pulses on the trace with Δt, illustrative 101 ns, framed working, crossed ns slip, the illustrative graph "gradient = speed". 6 a pulse crossing a 1 m bar in 1/299 792 458 s, the two navy boxes, the double arrow, the measured estimates on a number line with ± ranges against the exact navy line. 7 Earth and Moon plates, reflector, a pulse out and back in real time (77 frames) with a live round-trip timer, framed d = ct/2, crossed d = ct, the painted satellite and GPS chips. 8 two painted rows and the memory card. 9 to 12 question cards (wheel with distant mirror; Earth and Moon) and brief feedback with live pictures. 13 the handoff (enlarged recap of the four methods with labels that shrinks into the top row; "light: a signal with a speed"; a beam fanning through a slit; the three painted sources feeding slits and blank strips; final frame). 14 five notes and the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "How do different sources" (capped) it changes to v03's question.
- **Orbit simulation.** Design Revision 3 ties the orbit to the field motion engine. Built with analytic circular positions on one clock instead (the same picture for circular orbits); the "runs late" readout is still read from the picture's Earth to Jupiter distance, scaled so the far position equals the orbit diameter (1000 s). Earth goes 170 degrees round, not 180, so the far light path misses the painted Sun.
- Oscilloscope traces use the kit `Scope`, not `SeriesGraph`.
- Scene 5: the design does not say how sensor 1 sees the pulse leave; a coded beam splitter sends part of the beam down to it.
- Scene 6: the measured estimates sit on a number line from the scene start (tag "± ranges drawn schematically"); the "±" marks arrive on "measured estimates".
- "Not to scale" tags on the orbit, the 8633 m and 15.0 m paths and Earth to Moon (painted plates must not contradict labelled quantities).
- Scene 4's chip reads "water tube: a later video" (no video numbers on screen).
- The handoff's hand tag, recap labels and beam fade before the final hold, so the final frame matches the design.
- Every mistake is slate (R1).

## Final frame (exported as `M7V02FinalFrame` in `s3.tsx`)

`<HandoffBoard f={end} final />` (layout exported as `HB2`, rows also as `SourceRow`): heading "How do different sources produce different spectral patterns?"; top row (y 180): orbit diagram, small toothed wheel, small oscilloscope, navy box "c exact"; three rows at y 430, 625, 815: painted filament lamp, discharge tube, Sun, each with an amber beam to a coded slit at x 370 and a blank strip (x 430, width 1080, 72 high) with "?" at x 1570 and its name above; chip "Next: how do different sources produce different spectral patterns?" at (96, 890).

## Numbers (all from `common.ts`, checked against "Numbers used")

Rømer 3.0 × 10¹¹ / 1000 = 3.0 × 10⁸; radius slip 1.5 × 10⁸; 1320 s → 2.3 × 10⁸; Fizeau t = 5.51 × 10⁻⁵ s, c = 3.13 × 10⁸, slider 110 μs to 55 μs, round trip 55 μs, whole-period slip 1.57 × 10⁸; Foucault 2.98 × 10⁸; time of flight 30.0 m, 101 ns, 2.97 × 10⁸, slip 0.297; c = 299 792 458; lunar 2.56 s, 3.84 × 10⁸ m, slip 7.67 × 10⁸; GPS 300 m; A1 5.00 × 10⁻⁵ s, 3.00 × 10⁸, slip 1.50 × 10⁸; A2 3.76 × 10⁸ m, slip 7.52 × 10⁸ m.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v02` (25 November 2026, provisional timing): **PASS WITH WARNINGS: 0 failures, 5 warnings** (sparse frames early in scenes 2, 6, 7, the handoff and the notes). Earlier runs failed on near-empty openings (scenes 2, 6, 7, 13) and a heading collision in scene 3; fixed by enlarging the stages, showing scaffolds from the start, moving the wheel stage down and the enlarged handoff recap. Report: `out/explainer/Explainer-phys-y12-m7-v02/grade/Explainer-phys-y12-m7-v02-grade.md`.

**Honest grade: B on provisional timing.** The drifting eclipse readout tied to Earth's position, the slider bringing the gap-to-tooth time down to the round trip as the pulse is blocked, the two pulses on the trace and the ± ranges against the exact line carry the explanation. Soft spots: sensor 1 turned on its side under a coded splitter; the mirror plates are painted lying flat and are turned to stand upright.

## For root

- v03 opens on `M7V02FinalFrame`.
- Decide whether the orbit must run on `field-motion.ts` (analytic circles used).
- Provisional timing only; re-time from the measured take before any render.
