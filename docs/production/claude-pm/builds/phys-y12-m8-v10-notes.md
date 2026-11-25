# phys-y12-m8-v10 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v10.md` (Revision 3 with the 21 November root edit; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v10/common.ts` imports `work/physics-prebuild/p-y12-m8-v10/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (cue check: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v10/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,029 characters, 21 scenes).
- **Holds.** (1) Hook 3 s prediction: the prepared hold sits at the scene end, after "line spectra?" (frames 933 to 1023); the design wants it on "prediction" with the answer following (misplaced; built as v04 to v08: the ring starts on "prediction", the tick follows the ring). Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. The scene 4 spectrum sweep runs inside its narration (no hold named).
- **Opening frame:** v09's `M8V09FinalFrame` at frame 0; from frame 1 the electron keeps moving on the same orbit (`HANDOFF09_END` continued), the rose "radiates?" tag fades, the heading is already this lesson's question and v09's right-hand labels fade just before the prediction chips arrive.
- **Plates:** hydrogen discharge tube (coded pink glow on the capillary), pocket spectroscope, high-voltage supply, vapour cell (hydrogen gas, scene 3; the plate exists, so the unlit-tube fallback was not needed). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v10/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 7, `s2.tsx` 8 to 14, `s3.tsx` 15 to 21, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v10`, topic "LIMITS OF ATOMIC MODELS". Registry: after m8-v09.
- New shared kit file: `src/explainer/physics/atom/bohr.tsx` (hydrogen numbers `hE`, `invLambda`, `rydbergNm`, `eVofNm`; `HLevels` drawn to scale in energy with optional labels; `DropArrow`; `OrbitWave` and `orbitWavePath`, a wave wrapped round an orbit, whole or not joining; `spiralRun` and `spiralPath`, the classical spiral on the field motion engine with a `custom` field: a 1/r² pull plus a small drag for the energy radiated).
- Lesson parts: `GlowTube`, `LineStrip` (true-colour lines), `SmearStrip` (the predicted smear with grey UV and IR bands), `Nucleus`, `Elec`, rose `Wavelets`, the shared `SPIRAL` run (8 a₀ to a₀).

## Stages built

1 v09's orbiting electron; the rose "a" arrow pulsed; wavelets on "accelerating charges"; 3 s ring with "stays as it is", "drifts away", "spirals into the nucleus"; "classical physics" on the third; "observed: atoms are stable" ringing the first; the glowing tube and a sharp-line strip, the red line ringed. 2 a circular orbit shedding rose wavelets once per orbit ("f (wave) = f (orbit)"), the electron's energy bar draining, the orbit tightening. 3 the spiral from the field motion engine with the speed arrow lengthening and wavelets quickening; a slowed clock reading up to 1.6 × 10⁻¹¹ s; the hydrogen cell "stable for years"; framed "failure 1: stability"; slate-crossed "Rutherford's atom lasts 10⁻¹¹ s". 4 the live sweep: radius, orbit frequency and emitted wavelength read from the run (1031 nm IR down to 46 nm UV) with a colour swatch; the predicted strip filling with a smear into the UV band; the supply, glowing tube and spectroscope; hydrogen's sharp lines (four bright, the faint 397 nm line); three identical strips (lab, star, another lab); the smear crossed; framed "failure 2: line spectra". 5 both failures framed beside Rutherford's atom; nucleus ticked, orbit crossed; "new rules needed for electrons". 6 Bohr's allowed orbits n = 1 to 4 with hatched forbidden spaces, E₁ to E₄, the electron circling n = 1 without wavelets, framed "stationary state: no radiation", "classical radiation: switched off (assumed)". 7 the circles shrink to the side as the ladder draws to scale; ground and excited states; the energy axis with 0 at the top; a free electron above zero; E₁ = −13.6 eV; the ionisation arrow and framed +13.6 eV; slate-crossed "−13.6 eV". 8 a 3 → 2 drop sending out a red 656 nm photon; the ΔE bracket; framed emission and absorption forms; "E = hf (from earlier)"; slate-crossed "hf = E₃". 9 a floor under n = 1 (and the same idea on a small orbit picture); drops to n = 2 becoming lines on a strip; both failure chips ticked "(fixed)"; "bigger ΔE → higher f → shorter λ" with 656 and 486 nm. 10 the orbit picker: L = mvr on the electron; framed mvr = nh/2π; circles n = 1, 2, 3 light as a live n counter steps; n = 1.5 crossed; Bohr's ladder and the four-line strip linked; "why? (not explained)". 11 the assessment board. 12 He⁺ (one electron, ticked) and helium (two electrons) with a repulsion pair; a one-electron sketch strip against measured helium lines. 13 brightness sketched on the four lines; a zoom on 656 nm splitting into a close pair (fine structure), then further in a field. 14 the classical (navy) and quantum (amber) halves joined by a jagged seam; the switched-off wavelets; the assumed rule. 15 the memory aid (ladder kept, circles replaced). 16 to 19 cards and brief feedback. 20 handoff (below). 21 key notes with the memory card.

## Deviations

- **Handoff heading carries v11's learner question** (root rule), on "So how do hydrogen energy gaps" (capped).
- Scene 3: the spiral uses the field motion engine (Revision 3); the drag (γ = 0.02 in model units, start 8 a₀, stop at a₀) is chosen to show the inward path, and the clock is scaled so the run spans the design's 1.55 × 10⁻¹¹ s (Revision 3 call 1): it is not a time read from the run. Tagged "classical prediction (time slowed)".
- Scene 4: the readouts are the classical circular-orbit values at the run's current radius (author note g), so they pass the design's 1031, 670, 509, 365 and 46 nm; the tube is 300 px tall (design about 380) so the supply and spectroscope fit beside it.
- Scene 7: levels 4 and 5 share one label ("4, 5") because the levels crowd to within 13 px; the same in scenes 8, 9 and 15.
- Scene 10: Bohr's ladder and the four-line strip sit on screen from the first frame (sparse-frame fix); the chip "postulate 2: which orbits are allowed?" keeps the site's numbering (open decision 1).
- Scene 12: both atoms and the measured helium strip are on screen from the first frame and ring on their cues (sparse-frame fix); the one-electron "prediction" strip is a sketch, tagged "sketch", positions not calculated.
- Scene 13: relative brightness is sketched (tagged); the zoom is not to scale (tagged).
- Scene 15: "replaced (later)" (no module number on screen).
- R1: the design's red crosses, tags and the "new rules" tag are slate or ink.
- Hook: no heading underline.

## Final frame (exported as `M8V10FinalFrame` in `s3.tsx`)

`<HandoffBoard10 f={end} final />`: heading "How do hydrogen energy gaps predict Balmer wavelengths?"; the ladder to scale (x 300 to 820, n = 1 at y 840, E = 0 at y 230), n = 2 highlighted, labels "E₁ = −13.6 eV", "n = 2", "n = 3", "4, 5, 6", "n = ∞, E = 0", "n = 1"; four drops to n = 2 from 3 (red), 4 (cyan), 5 (blue-violet), 6 (violet), each with a "?" below n = 2; a black strip (x 1000 to 1820, y 400) with the four lines labelled 656, 486, 434, 410 and "nm (measured)"; "hydrogen's four bright visible lines"; hand tag "ΔE → λ?"; chip "Next: how do hydrogen energy gaps predict Balmer wavelengths?". Exported with `LADH`, `STH` and `dropX` for v11.

## Numbers (all from `common.ts`, checked against "Numbers used")

t = a₀³/(4r_e²c) = 1.55 × 10⁻¹¹ s ("1.6"); sweep (k = 8.99 × 10⁹, mₑ = 9.109 × 10⁻³¹): 8 a₀ 2.91 × 10¹⁴ Hz, 1031 nm; 6 a₀ 670 nm; 5 a₀ 509 nm; 4 a₀ 365 nm; a₀ 6.58 × 10¹⁵ Hz, 45.6 nm; lines from 1/λ = R(1/4 − 1/n²): 656.3, 486.2, 434.1, 410.2 and 397.0 nm; E₁ = −13.6 eV; ionisation 13.6 eV; helium lines 447, 471, 492, 502, 588, 668 nm (measured, for the sketch).

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v10` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 7 warnings** (sparse hook, energy-levels, angular-momentum, limit-one-electron and feedback-1 frames; a small "+" on the shrinking circles; "few pictures"). Earlier runs failed on an off-edge collapse-time line and sparse energy-levels, angular-momentum and limit-one-electron frames, with crowded level labels; all fixed. Report: `out/explainer/Explainer-phys-y12-m8-v10/grade/Explainer-phys-y12-m8-v10-grade.md`.

**Honest grade: B on provisional timing.** The spiral with its clock, the live sweep smearing across the strip against hydrogen's lines and the ladder fixing both failures carry the argument; motion needs judging at playback speed.

## For root

- Hook pause position (as v04 to v08).
- Scene 3 drag constant and the scaled clock (design Revision 3 call 1).
- m8-v11 opens on `M8V10FinalFrame`.
