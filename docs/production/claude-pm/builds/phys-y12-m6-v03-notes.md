# phys-y12-m6-v03 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m6-v03.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m6-v03/common.ts` imports `work/physics-prebuild/p-y12-m6-v03/lesson.json` (made with `python -I work/physics-prebuild/make-provisional.py phys-y12-m6-v03`) on one marked line (`// PROVISIONAL TIMING: switch to measured/lesson.json when voiced`) and exports `PROVISIONAL = true`. Every change is keyed to a cue phrase with `cueFrame` (89 cue phrases, all resolve); keyframe lists pass through `mono`, late offsets through `cap`. When the measured take lands at `docs/production/claude-pm/lessons/p-y12-m6-v03/measured/lesson.json`, change that import, set `PROVISIONAL = false`, then re-run the cue check, the grade and a still sweep.
- **Hook hold missing (as v01, v02).** The three chips arrive after "Does the electron come out"; the 3 s countdown draws only if a `responseHold` appears. The only cue in the last 2 s of a scene is that countdown's "Make a prediction" ring start.
- **Opening frame:** v02's exported `M6V02FinalFrame` at frame 0 (heading already this lesson's question). From frame 1 the frame stays while the K bars are ringed ("energy in"), then fades on "An electron gun uses" to the gun.
- **Plates:** the supply is present (the gun's supply and the scene 6 dial). **Plate request (held): `y12p-crt-tube-v1.png`**, as in v02's notes, for scenes 1 and 5. Fallback built: the design's own exam-style gun (a cathode block and an anode block with a hole, coded, as the design uses in scene 15 and the attempts) wired to the painted supply. No coded tube outline was drawn.

## Files

- Lesson: `src/explainer/lessons/phys-y12-m6-v03/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 16, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m6-v03`, export `config_phys_y12_m6_v03`, PHYSICS, topic "WORK AND ENERGY IN FIELDS", accent `#9c5a00`, key notes at least 1350 frames. Registry: after v02.
- Shared: uses `src/explainer/physics/electromagnetism/plates.tsx` (`Gun`, `gunPts`, `Equipotentials`, `CrossRegion`, `Supply`, `crossRun`). One later edit to that file: the supply display now fits long readings ("10 000 V") inside its window. Lesson parts: `GunRig` (the gun wired from the painted supply's terminals), `Beam`, `nV` (plain digits below 10 000, a space separator from 10 000), and v01/v02's parts.
- **Simulation:** scene 2's proton crossing the gap (twice, for d and 2d) is a `uniform` run from rest; scenes 8 and 9 reuse v02's main-case run (equipotentials and strobe images); scene 9's retarding region is two `custom` runs (constant deceleration inside the region, scaled so v² falls by 60 eV across it): the 100 eV electron leaves with 40 eV, the 50 eV electron stops and turns back; the handoff's arc is a `magnetic` run (field into the page, a negative charge, quarter turn) at constant speed. Scene 6's dial is exact arithmetic (v = √(2|q|V/m)); scene 7's proton crawls at 1/42.9 of the electron's on-screen speed.
- All values from `common.ts` with the data sheet constants, checked against "Numbers used": 5000 V: 8.01 × 10⁻¹⁶ J, 4.19 × 10⁷ m s⁻¹, 0.14c; slip (5 V) 1.33 × 10⁶; 10 000 V: 5.93 × 10⁷, straight line 8.4 × 10⁷; proton 9.79 × 10⁵, ratio 42.9 ("43"), √1837 ≈ 43; last time's electron: W 1.57 × 10⁻¹⁷ J ≈ 98 eV, K₀ 2559 eV, K 2656 eV, v 3.06 × 10⁷, wrong path 1000 eV; A1 3.20 × 10⁻¹⁶ J, 2.65 × 10⁷ m s⁻¹, slip 7.0 × 10¹⁴; A2 0.71, 1.41.

## Stages built

1 v02's frame with its K bars ringed ("energy in"), then the exam-style gun wired to the painted supply ("0 V", "+5000 V", "start ≈ rest"), the beam forming with a speed readout, the dial turning to 10 000 V with "v = ?", three chips; 2 a proton crossing the gap on the engine with its amber qE push and the navy "d (along E)" bracket, the W counter filling, rows to the framed W = qV (the d's struck, "sizes: |q|V"), the gap stretching to 2d (lines thin, push halves, "half the push", "twice as far") and the second counter filling to the same qV (ringed), the crossed "wider gap → more work"; 3 the potential ladder (5000 V to 0 V), the definition strip, a proton down and an electron up with ΔU and ΔK change bars from one zero line ("U falls", "K rises", "changes, not amounts"), the two signed blocks, the rule strip and the signed W_field line; 4 the framed 1 eV line, one charge crossing a 1 V step ("1 e through 1 V"), the orange ΔK bar counting to 5000 eV, the framed 8.01 × 10⁻¹⁶ J, "eV answer: no conversion", the ledger thumbnail; 5 the calculation layout beside the gun at 5000 V: the framed v = √(2|q|V/m) (√ ringed, "square root last"), the framed 4.19 × 10⁷ m s⁻¹, the 0.14c chip, the crossed kV slip; 6 the dial sweeping 0 to 10 kV with a point riding the √ curve, live V, K and v readouts, K and v bars ("× 2", "× √2"), the × 1.41 bracket, the crossed straight line to 8.4 × 10⁷ ("speed isn't ∝ V"), the framed "K ∝ V, v ∝ √V"; 7 two lanes with guns at 5000 V, equal K bars ("same |q|, same K"), the electron racing and the proton crawling ("heavier: slower"), "÷ 43", the framed √1837 ≈ 43, the crossed "heavier gains more energy"; 8 last time's path with equipotentials, the teal "5.0 cm along the plates (no work)" and navy "4.9 mm along the force" brackets, the amber F, a charge sliding along an equipotential ("W = 0", ringed), the framed 98 eV, the crossed 1000 eV; 9 the stacked bar K₀ 2559 eV plus 98 eV, the framed 2656 eV and 3.06 × 10⁷ m s⁻¹ beside last time's component answer ("same answer, two ways"), the retarding region with one electron through (framed 40 eV out) and one turned back; 10 the framed memory card with two paths between the same equipotentials; 11 to 14 question cards (the supply at 2.0 kV wired to a plain gun; two plain guns with +e and +2e) and brief feedback; 15 the handoff (final frame); 16 five notes and the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): "When does a magnetic field exert a force on a moving charge?".
- Every mistake and crossed chip is slate (root rule R1), not red.
- The gun is exam style throughout (CRT plate held; see Status).
- Scene 4's ledger thumbnail is a small coded copy of scene 3's change bars.
- Scene 7's lanes carry their own small supply plates, with "0 V" and "+5000 V" labelled at each gun instead of on the displays (too small to read at that size).
- Scene 9's retarding region is drawn as two dashed grids (0 V and −60 V) with the field arrows between, a strip across the lower frame rather than a 40% plate stage.
- Cue moves: the hook chips on "Does the electron come out" plus 50 frames (not on "fast"); scene 3's signed line 70 frames after "Positive charges fall" (the "up" cue is in the last 2 s).

## Final frame (exported as `M6V03FinalFrame` in `s3.tsx`)

`<HandoffBoard />`: heading "When does a magnetic field exert a force on a moving charge?"; the exam-style gun at (200, 400) (cathode "0 V", anode "+5000 V"); a teal beam to x 760, then a quarter-circle arc (radius 380 px, 90% of a quarter turn) down inside the dashed region (760, 300, 620 × 580) of slate crosses, "B into page" above it, an electron at the arc's end; readouts "entering 4.19 × 10⁷ m s⁻¹" and "inside 4.19 × 10⁷ m s⁻¹" at (1420, 300); the orange K bar under the beam with "K: unchanged"; chip "Next: when does a magnetic field exert a force on a moving charge?" at (96, 890).

## Sweep fixes (stills pass 1)

33 stills at half scale. Fixed: the supply display clipping "10 000 V" (the display now fits its reading); a 4-digit space separator ("4 914 V"); the gun too small on the hook (enlarged); scene 2's crossed chip on the bottom plate; scene 3's ledger labels on its heading and a percentage readout; scene 5's tag inside the framed formula; scene 6's framed line on the curve.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m6-v03` (25 November 2026, src build, provisional timing): PASS WITH WARNINGS: 0 failures, 6 warnings (sparse frames 56%: electronvolt, qed-limits, key-notes; attempt 1 at 63% bare (question-scene warning); the 16 and 17 px subscript and sign characters in the shrunk question cards). Report: `out/explainer/Explainer-phys-y12-m6-v03/grade/Explainer-phys-y12-m6-v03-grade.md`; sheet `.../Explainer-phys-y12-m6-v03-grade-sheet.jpg`. Scoped typecheck clean; cue check: all 89 cue phrases resolve.

The first grade failed on four frames: the hook, the electronvolt and speed-from-rest frames 60 to 65% bare, and scene 7's lane supplies showing "5000 V" at 18 px. Fixed with a larger gun and supply, a wider one-volt step with field arrows and the ΔK track from the start of scene 4, a larger gun rig and an early speed readout in scene 5, and "0 V" and "+5000 V" labels beside each lane's gun in place of the tiny displays.

**Honest grade: B on provisional timing.** The W counters for d and 2d, the signed change bars on the ladder, the dial driving the √ curve against the crossed straight line, the racing and crawling lanes, and the electron turned back in the retarding region each carry their idea. Soft spots: three frames at 56% bare, the exam-style gun stands in for the held CRT plate, and motion needs judging at playback speed.
