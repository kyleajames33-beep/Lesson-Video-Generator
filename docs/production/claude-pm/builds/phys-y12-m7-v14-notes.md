# phys-y12-m7-v14 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v14.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v14/common.ts` imports `work/physics-prebuild/p-y12-m7-v14/lesson.json` on one marked line and exports `PROVISIONAL = true`. Every cue resolves (`work/tsc-scope/cuecheck-m7d.py v14`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m7-v14/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design** (6,423 characters, 17 scenes; checked scene by scene by script against the prepared lesson.json and the brief 259 source audit). Provisional file from the unchanged `make-provisional.py`. No narration mismatch.
- **Holds (open).** (1) Hook 3 s prediction: prepared hold sits at the scene end; the ring runs from "prediction" over "Nothing is pushed or squashed at all" and the tick lands after it. (2) Scene 7 (worked-ship) 2 s slider hold missing: the sweep (0, 0.5, 0.8, 0.95, 0.99c) runs 14 frames per stop between "unchanged" and "still one hundred metres long" (about 2.7 s). (3) Scene 8 (worked-docking) 3 s screen check missing: the check chip "l₀ = 300 m, l = 180 m: γ = 1.67, v = 0.80c" arrives with the capped answer and is on screen for only about 2 s. Root to add these holds if wanted. Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present.
- **Opening frame:** v13's exported `M7V13FinalFrame` at frame 0; from frame 1 the same board is redrawn (`TripBoard`, same geometry from `HANDOFF13`) so its parts can pulse and slide; the "Next" chip fades.
- **Plates:** spacecraft (never stretched; contraction is an ink outline and ruler over a faded, unscaled plate, tagged "faded plate: rest shape"), space station, Earth, white star; the atmosphere columns are coded. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v14/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 11, `s3.tsx` 12 to 17, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v14`, topic "LENGTH CONTRACTION". Registry: after m7-v13.
- Shared: uses `physics/light/relativity.tsx` (new in this wave: `ShipOutline`, `outlineExtent`, `AtmosColumn` with the rising ground, `CurvePlot`, `ClockDial`, `SPACE_STATION`). This closes the design's kit gaps 1 to 3.
- Lesson parts: `deckOf` (station deck line from the manifest anchor), `Ruler`, `Beacon`, `Ring`.

## Stages built

1 last time's board; 12 ly bracket, Earth and ship clocks pulse; Earth and the star slide further; "(ship frame?)" loses its "?"; violet "12 / 1.67 = 7.2"; ring and chips; slate cross on "squashed by a force", tick on "measured differently"; "shorter, not squashed"; heading words underlined. 2 data-sheet strip "l = l₀√(1 − v²/c²) = l₀ / γ", the site definition, "l₀ = 12 ly (proper)", "l = 7.2 ly", "γ ≥ 1 → l ≤ l₀", "proper = longest". 3 painted station with a coded beacon and clock; in the station frame the ship (ink outline, illustrative 0.6c) passes, nose then tail at the beacon (flashes, "events 1 and 2: same place", t₀); rows "station frame: l = vt₀", "ship frame: l₀ = vγt₀", framed "l = l₀ / γ"; in the ship frame the plate holds still and the beacon slides nose to tail at the same speed for γ times longer between teal clocks. 4 the deck as a track: simultaneous marks and ruler "l"; late tail mark and a slate-crossed "wrong length"; ship-frame replay with the nose mark first and the tail mark later on teal clocks; two rulers "station frame: l" and "ship frame: l₀", both ticked, "both correct". 5 the large ship over the station: crossed "F?", unstrained lattice zoom ("no strain"), on-board ruler l₀ = 100 m, the reciprocal frame swap with the station's ruler shortening, two short rulers and "?", the ink outline "measured in this frame", slate-crossed "aether rescue: a physical squeeze" and "no squeeze, no force, still real". 6 two ships head-on with edge-on rings on a dashed axis; two plain view boxes (rings and paint marks), slate crosses, "same size: no sideways contraction", the light-clock inset "d unchanged". 7 working layout; framed 60 m with the outline shortening; slate-crossed 167 m; height bracket; slider sweep with live v, γ and l; on-board ruler. 8 docking bay 80 m (proper); γ = 1.25; rearranged γ; v = c√0.36; framed 0.60c; the outline fits the bay ("just fits"); screen check chip. 9 Earth-frame column (15 km, dilated clock riding a muon, 22 μs, 50 μs trip) and the muon-frame column whose ground rises to 1.5 km; 5.0 μs = 2.3 × 2.2 μs; 50/22 = 2.3; "same detector count ≈ 1 in 10" with the ideal-model label. 10 labels per frame, recap strips, slate-crossed "1.5 km (muon frame) with 22 μs (Earth frame)", paired strips, γ = 10.0 on both. 11 memory card; ruler 100 m beside the 60 m outline; ship and Earth clocks. 12 to 15 question cards (ship above the station deck; atmosphere column) and feedback (outline at 65 m with width 20 m; column contracting to ≈ 630 m). 16 thrusting spacecraft, growing amber p arrow, "v = ?", small γ graph whose marker creeps to the asymptote; heading changes to v15's question (final frame). 17 key notes with the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule), on "So why does ever more momentum" (capped).
- **Site definition quoted exactly** (lesson 13 vocabulary): "Proper length (L₀): The length of an object measured in the frame where the object is at rest, always the maximum measured length." (the data sheet and this lesson write l₀).
- The derivation uses an illustrative 0.6c (no number on screen) so the station-frame outline and the ship-frame beacon timing are both correct (γ times longer at the same speed).
- Scene 5: the reciprocal tag reads "the ship measures the station's ruler shorter"; the crossed aether chip's caption is "relativity: no squeeze" (slate, R1).
- Scene 6: view boxes explain the paint marks in words ("paint marks the ink ring").
- Feedback 2: (a) shows ≈ 630 m (10 000 / 15.8, two figures) and (b) uses 632 m (from γ = 15.82), as the design does.
- Feedback-1 picture moves the 0.90c arrow under the station so the "65 m (station)" label stays clear.

## Final frame (exported as `M7V14FinalFrame` in `s3.tsx`)

`<HandoffBoard14 f={end} final />`: heading "Why does ever more momentum fail to push mass to light speed?"; the spacecraft at (96, 430, w 820) with the exhaust layer on; amber momentum arrow "p" from the nose (270 px) and "v = ?"; γ against v/c graph (box 1290, 300, 460 × 380, yMax 12) with the red dashed asymptote labelled "c" and a marker at 0.97c; chip "Next: why does ever more momentum fail to push mass to light speed?" at (96, 860). Geometry exported as `HANDOFF14`.

## Numbers (all from `common.ts`, checked against "Numbers used")

12 / 1.67 = 7.2 ly; 100 m at 0.80c: γ 1.67, l = 60 m, slip 167 m; slider γ 1.00, 1.15, 1.67, 3.20, 7.09 and l 100, 86.6, 60.0, 31.2, 14.1 m; bay γ = 1.25, 1/γ² = 0.64, v = 0.60c; check γ 1.67, 0.80c; muons γ 10.0, 1.5 km, 5.0 μs, 2.3 lifetimes, 50 μs, 22 μs, ≈ 1 in 10; A1 γ 2.29, 65 m, 20 m, slip 344 m; A2 ≈ 630 m (632 m), 2.1 μs, slip 35 μs.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v14` (25 November 2026, provisional timing, regraded after the last kit change): **PASS WITH WARNINGS: 0 failures, 9 warnings** (sparse frames early in several scenes; attempt 2 card picture not recognised). Earlier runs failed on near-empty early frames in the perpendicular and one-effect scenes and on text off the frame in feedback 2; fixed with a task strip, the dashed axis and ring labels, recap strips, and a shorter column label. Report: `out/explainer/Explainer-phys-y12-m7-v14/grade/Explainer-phys-y12-m7-v14-grade.md`.

**Honest grade: B on provisional timing.** The beacon timing in two frames, the late-mark wrong length, the outline over an unscaled plate with the slider, and the rising ground in the muon frame carry the explanation. Soft spots: three missing holds; scene 10 is label-led.

## For root

- v15 opens on `M7V14FinalFrame`.
- Decide the hook pause position, the scene 7 slider hold and the scene 8 screen-check hold before voicing.
