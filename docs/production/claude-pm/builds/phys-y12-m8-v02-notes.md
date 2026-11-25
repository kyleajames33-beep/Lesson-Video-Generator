# phys-y12-m8-v02 build notes (pre-build on provisional timing)

Build agent (Claude), 25 to 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v02.md` (Revision 3; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v02/common.ts` imports `work/physics-prebuild/p-y12-m8-v02/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (`work/tsc-scope/cuecheck-m8a.py v02`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v02/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and design identical: 6,518 characters, 18 scenes).
- **Holds.** (1) Hook 3 s prediction: prepared hold at the scene end, after "early Universe?"; the design wants it on "prediction" and the answer follows at once (misplaced; ring over the answer, tick after the ring). (2) Scene 2's slider sweep (z = 0.02, 0.04, 0.088) is cued on the scene's last words and the scene has no hold; the build starts the sweep on "So for small z" so it finishes before the last 2 s. Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present.
- **Opening frame:** v01's `M8V01FinalFrame` at frame 0; from frame 1 the timeline chips, waves, ring and tag fade, the grid stays, one galaxy moves near (380 px) and one far (260 px); the "Next" chip fades on "early Universe" (the heading already carries this question).
- **Plates:** painted galaxy, white star (the pulsing star in scene 3, about 40 px), horn antenna, molecular cloud, Sun. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v02/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v02`, topic "EVIDENCE FOR THE BIG BANG". Registry: after m8-v01.
- Shared (new file): `physics/atom/stellar.tsx` (`StarCurve`: exact Planck curve with gaussian dips aligned to a strip; class ranges, swatches and `classOf`; HR geometry `hrX`, `hrY`, `radiusOf`, `radiusLineL`, `msLum`; `HRAxes`). Used here for the handoff curve.
- Lesson parts: `EvidenceColumn` (four tests that tick), `PlotAxes`/`px`/`py` plot box, supernova light-curve shape, `EvidenceTable` (in `s2.tsx`).

## Stages built

1 the grid with near and far galaxies, the empty evidence column ("four tests"), ring and chips, a near wave and a longer far wave with brackets ("longer λ"). 2 the painted galaxy; lab and galaxy hydrogen strips in true colours on a 380 to 750 nm axis; teal connectors; the z slider with live z, Hα and v readouts; z = Δλ/λrest; "fractional stretch"; Doppler chip; framed v ≈ cz; the sweep to 0.088 (714.1 nm, 2.64 × 10⁴ km s⁻¹). 3 the painted galaxy with a pulsing painted white star; the Hubble graph (illustrative points one by one, line through the origin, 200 and 400 Mpc ringed "× 2, × 2", gradient triangle, framed H₀ = 70); Mpc chip; first tick. 4 a lattice of galaxies stretched by × 2 with a live spacing readout; ghost positions and +1, +2 step arrows from "us", repeated from two other dots; "no centre"; the grid shrinking back; 1/H₀ ≈ 14 billion years. 5 working layout with the galaxy and its Hα strip at 714 nm; three stages (0.0884; 2.65 × 10⁴ km s⁻¹; framed 379 ≈ 380 Mpc with "/ 70" ringed); slate-crossed "z = 714/656 = 1.09"; 1.2 × 10⁹ ly. 6 the zoomed nearby graph with scatter and Andromeda's point; the painted galaxy with blueshifting lines; two arrows (300 km s⁻¹ observed towards us; 54 km s⁻¹ predicted away) labelled as different quantities; "v ≈ cz: only for z ≲ 0.1"; slate-crossed "z = 2 means v = 2c"; "z > 10". 7 the painted horn antenna under a coded sky arc; incoming stretched wave (7.35 cm); beam sweeping with "hiss" at every pointing; the CMB chip. 8 black-body curves on a log wavelength axis (mm); framed Wien result (1.06 × 10⁻³ m ≈ 1 mm); the 3000 K curve (0.97 μm) sliding onto the 2.725 K curve as the stretch counts to × 1100; "0.97 μm × 1100 ≈ 1.06 mm ✓"; the uniformity dial (2.728/2.722 K with our motion, then all 2.725 K); slate-crossed steady state; second tick. 9 predicted and observed abundance bars, the painted cloud, a shrinking heavy-element bar, "match", "added by stars: a few %", small painted clouds "still ≈ 24% He", the crossed "made by stars?"; third tick. 10 a model wave with a crest counter, stretched × 2; the painted galaxy with a supernova point; navy (60 days) and red (z = 1, 120 days) light curves; framed "duration × 2 = 1 + z"; DES chip; fourth tick. 11 and 12 the evidence table (plates as row pictures, empty tick cells, ticks and crosses) and the memory line. 13 to 16 cards (lab and galaxy strips with the calcium K line; Milky Way and Andromeda approaching) and brief feedback (the Hubble graph thumbnail for "distant galaxies"). 17 four test tags; the painted Sun, a light path, a strip with Ca and H lines, an intensity curve with dips, "T = ?"; heading changes to v03's question (final frame). 18 key notes with the memory card.

## Deviations

- **Handoff heading carries v03's learner question** (root rule), on "So how can spectra classify" (capped).
- Scene 2: the sweep starts on "So for small z" (see Holds).
- Scene 3: the points arrive without their small slider values (simplification).
- Scene 4: a live "spacing × 1 to × 2" readout and thin lattice lines added (grade fill; the grid is a model).
- Scene 6: the nearby zoom is illustrative (0 to 10 Mpc); the grey "z ≲ 0.1" bracket on the graph's far end is omitted because the zoom does not show it (the chip states it).
- Scene 8: curve heights are not to scale (tagged); the curves use the exact Planck shape.
- Scene 9: the heavy-element chips became a shrinking bar labelled "heavy elements (C, N, O, Fe)" so no text shrinks below 26 px.
- Scene 10: the waves engine is not used; the model wave is lesson-coded with an integrated phase so crests arrive less often after the stretch.
- The evidence column shows in scenes 1, 3, 8, 9 and 10 (where it changes), not every scene.

## Final frame (exported as `M8V02FinalFrame` in `s3.tsx`)

`<HandoffBoard02 f={end} final />`: heading "How can spectra classify stars and reveal their temperature?"; four chips at y 176 ("redshift ∝ distance", "2.7 K black body", "25% helium", "supernovae × (1 + z)"); painted Sun (380 px) at (330, 560); amber light path to the strip (720, 720, 960 × 70; lines at 393.4, 396.8, 410.2, 434.0, 486.1, 656.3 nm; axis 400 to 700); 5800 K intensity curve with dips above it (720 to 1680, 400 to 690), "continuous + absorption"; temperature bar at x 1760 with "T = ?"; red hand tag "same tool, new target"; chip "Next: how can spectra classify stars and reveal their temperature?". Props `tags` and `marks` let v03 fade parts.

## Numbers (all from `common.ts`, checked against "Numbers used")

Slider 656.3, 669.4, 682.6, 714.1 nm; 6.0 × 10³, 1.2 × 10⁴, 2.64 × 10⁴ km s⁻¹; H₀ = 28 000/400 = 70; 1/H₀ = 14 billion years; worked 0.0884, 2.65 × 10⁴ km s⁻¹, 379 ≈ 380 Mpc, 1.2 × 10⁹ ly, slip 1.09; Andromeda 54 against 300 km s⁻¹; CMB 1.06 × 10⁻³ m, 0.97 μm, × 1100, 1.06 mm, dipole 2.728/2.722 K; horn 7.35 cm; helium 25% and 24 to 25%; supernova 60 and 120 days; A1 0.0803, 2.41 × 10⁴ km s⁻¹, 344 ≈ 340 Mpc, slip 3.4 × 10⁵.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v02` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 4 warnings (sparse attempt and feedback frames)**. Earlier runs failed on the expansion grid and the evidence table (mostly empty); fixed with lattice lines, larger dots, a spacing readout, larger table rows and empty tick cells. The shrinking element chips became a bar. Report: `out/explainer/Explainer-phys-y12-m8-v02/grade/Explainer-phys-y12-m8-v02-grade.md`.

**Honest grade: B on provisional timing.** Motion carries each change, but several set-ups are sparse at sample frames and need a playback-speed look once voiced.

## For root

- Hook pause position (as v01); open decisions 1 and 2 (time-dilation scene, named scientists) built as designed.
- m8-v03 opens on `M8V02FinalFrame` (heading already v03's question).
