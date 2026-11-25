# phys-y12-m8-v12 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v12.md` (Revision 3 with the 21 November root edits; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v12/common.ts` imports `work/physics-prebuild/p-y12-m8-v12/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (cue check: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v12/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,265 characters, 18 scenes).
- **Holds.** The design names no hook prediction and no memory-aid hold, and the prepared timing has none. Attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. The scene 9 voltage slider and the scene 10 spot build-up run inside their narration (no hold named).
- **Opening frame:** v11's `M8V11FinalFrame` at frame 0; from frame 1 the name tag and the standing wave pulse on their cues, the "tiny charged ball" appears at the left, and on "needs a test" the evidence panel grows to the centre with the painted electron diffraction tube inside it while the rest of the board recedes.
- **Plates:** electron diffraction tube (on cream, rings only in a coded face-on screen view), high-voltage supply, steel ball. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v12/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v12`, topic "MATTER WAVES". Registry: after m8-v11.
- New shared kit file: `src/explainer/physics/atom/matterwave.tsx` (`DIFF_TUBE` spec and anchors: gun, graphite, screen, posts; `RingScreen`, a face-on screen with ring bands, optional shading and single spots; `ringSpotRun` and `ringSpots`, landing spots from the chance engine `sims/chance.ts` (a weighted experiment: two rings and a faint background); `ringAngle` and `ringRadius`, ring angles from the waves engine `brightAngles`; `PolarLobe` and `lobePath`; `CrystalRows`; `PaperCard`). Also uses `bohr.tsx` (`OrbitWave`).
- Lesson parts: `Tube`, `tubeAt`, `SizeLadder` (a vertical log size scale), `MatterDot` (a dot with a teal momentum arrow and a navy wave whose wavelength falls as p rises), `DGSchematic` (gun above a nickel crystal, normal incidence, detector on an arm, dashed vacuum outline).

## Stages built

1 v11's orbit and evidence panel; the wave pulses; a navy dot "mass, charge, a path", "Thomson, 1897: a particle"; the panel grows to the centre with the painted tube; "the test?" with a pen arrow. 2 light's two faces sketched (a slit with spreading waves; photons on a plate ejecting an electron) until a photon with a momentum arrow; p = E/c = hf/c = h/λ, boxed "photon: p = h/λ", "turn it around", the photon becoming a dot with its wave, framed λ = h/p. 3 λ = h/mv framed, formula-sheet chip, "p = mv: for v below about 0.1c", relativistic chip; the momentum slider (wave squeezing as the arrow grows) with relative p and λ readouts. 4 the steel ball rolling (plate) with task, equation and givens; framed 6.6 × 10⁻³³ m; slate-crossed "m = 50"; the log size ladder (atom, proton, the ball's λ, "10¹⁸ times smaller"); a slit the wave passes straight through; slate-crossed "diffraction of the ball". 5 the electron's working to a framed 3.31 × 10⁻¹⁰ m; its mark beside the atom on the ladder ("≈ atom spacing"); an electron and its wave moving; "strong diffraction when gap ≈ λ"; crystal rows ("a grating made by nature"). 6 the schematic with electrons streaming down; a dashed teal "?" marker for the wave prediction; the detector arm sweeping with a live angle readout while the lobe grows to its tip at 50°, ringed; "grating + waves → peaks at set angles", "is it h/mv's angle?". 7 the schematic in the corner; task, equation and three grouped givens; E_k = 8.65 × 10⁻¹⁸ J; framed v = 4.36 × 10⁶ m s⁻¹; "1.5% of c: p = mv is fine". 8 kept speed; framed 1.67 × 10⁻¹⁰ m (predicted); crystal rows with d and three rays at 50°; framed 1.65 × 10⁻¹⁰ m (measured); slate-crossed radians slip; both values side by side with a green bracket, "agree within about 1%". 9 G. P. Thomson's foil panel; the father and son tags ("both were right"); the painted tube labelled (gun, graphite, glowing screen) with the supply and its leads; a face-on screen view joined by a pen arrow; the live voltage slider (3.0, 4.0, 5.0 kV) with V, v, λ and inner ring radius readouts while the rings shrink (radii from the waves engine); the relativistic chip; framed "V ↑ → v ↑ → p ↑ → λ ↓ → smaller rings". 10 two waves adding and two cancelling; two particles crossing without cancelling; the matching numbers framed; the checklist framed; the screen lit, then single spots from the chance engine (slow, then fast) with a live electron count to 2000, the first spot ringed; the memory card. 11 the ground orbit with v; λ and 2πr₁ framed side by side; one wavelength wrapping and joining. 12 2πr = nλ to framed mvr = nh/2π; n = 1, 2, 3 orbits with 1, 2, 3 waves; "why? ✓"; a 2.5-wave orbit failing over three laps, crossed. 13 to 16 cards and brief feedback. 17 handoff (below). 18 key notes with the memory card.

## Deviations

- **Handoff heading carries v13's learner question** (root rule), on "Why do orbital probabilities" (capped).
- Scene 2: light's two kinds of evidence are sketched in the panel from the first frame; a second panel shows a particle with its momentum arrow whose wave appears on "anything with momentum", and de Broglie's standing-wave orbit stays at the upper right as the claim being motivated (sparse-frame fixes).
- Scene 4: the givens and the size ladder (atom and proton marks) are on screen from the first frame; the ball's mark arrives on "far smaller than a proton".
- Scene 5: an electron and its wave move along the foot of the stage from the first frame (sparse-frame fix).
- Scene 9: the tube is 780 px wide (design about 900) so the supply, the screen view, the foil panel and four readouts fit; the second ring uses graphite's 0.123 nm spacing (author note e); the screen view scale is 170 px for 30 mm.
- Handoff: the n = 1 orbit with its one-wavelength wave and the ticked rule are on screen from the first frame; the wave thins and a grey haze spreads from "what does its orbit really look like" (sparse-frame fix; in the final frame the wave is a thin solid line, R2).
- Attempt cards carry the data-sheet values in the card text rather than separate chips.
- R1: crossed chips and slip tags slate; "particles: no cancelling" grey.

## Final frame (exported as `M8V12FinalFrame` in `s3.tsx`)

`<HandoffBoard12 f={end} final />`: heading "Why do orbital probabilities replace literal electron paths?"; boxed "mvr = nh / 2π ✓" at the upper left; a lit face-on screen (centre (500, 560), R 240) with two teal ring bands built of 2000 navy spots, a teal shading on the bands ("likely") and a dashed navy marker ("next?") on a band; at the right a small red nucleus (1360, 560) with its n = 1 orbit, the wave a thin solid navy line, a grey haze around it, "n = 1 orbit: a real path?" and hand tag "a path?"; chip "Next: why do orbital probabilities replace literal electron paths?". v13 opens on this frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

Ball 6.626 × 10⁻³³ m ("6.6"); slip 6.6 × 10⁻³⁶ m; electron at 2.2 × 10⁶ m s⁻¹: 3.306 × 10⁻¹⁰ m ("3.31"); 2πr₁ = 3.324 × 10⁻¹⁰ m ("3.32"); 54 V: 8.651 × 10⁻¹⁸ J, 4.358 × 10⁶ m s⁻¹ ("4.36", 1.45% of c); h/(m × 4.36 × 10⁶) = 1.668 × 10⁻¹⁰ m ("1.67"); 2.15 × 10⁻¹⁰ × sin 50° = 1.647 × 10⁻¹⁰ m ("1.65"); radians slip −5.64 × 10⁻¹¹ ("−5.6"); A1 1.602 × 10⁻¹⁷ J, 5.93 × 10⁶ m s⁻¹, 1.227 × 10⁻¹⁰ m ("1.23"), slip 1.48 × 10¹⁶ m s⁻¹; tube 3, 4, 5 kV: 3.25, 3.75, 4.19 × 10⁷ m s⁻¹; 2.24, 1.94, 1.73 × 10⁻¹¹ m; inner ring 14.3, 12.3, 11.0 mm ("≈ 14, 12, 11").

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v12` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 8 warnings** (sparse light-turned-around, steel-ball, electron-wavelength, davisson-germer, attempt-1, feedback-1 and handoff frames; "few pictures"). Earlier runs failed on sparse light-turned-around, steel-ball, electron-wavelength and handoff frames; all fixed (light's evidence sketched, a particle panel and de Broglie's orbit in scene 2, givens and ladder from the first frame, a moving electron, the orbit in the handoff from the first frame). Report: `out/explainer/Explainer-phys-y12-m8-v12/grade/Explainer-phys-y12-m8-v12-grade.md`.

**Honest grade: B on provisional timing.** The detector lobe growing to 50°, the two numbers side by side, the rings shrinking as the voltage rises and the spots building the rings carry the argument; motion needs judging at playback speed.

## For root

- The memory card in scene 10 has no hold (none named); it writes on "build up from many spots".
- m8-v13 opens on `M8V12FinalFrame`.
