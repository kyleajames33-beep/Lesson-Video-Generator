# phys-y12-m8-v11 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v11.md` (Revision 3 with the 21 November root edit; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v11/common.ts` imports `work/physics-prebuild/p-y12-m8-v11/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (cue check: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v11/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,034 characters, 18 scenes).
- **Holds.** The design names no hook prediction, and the prepared timing has none. Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. The scene 9 n_i slider runs inside its narration (no hold named).
- **Opening frame:** v10's `M8V10FinalFrame` at frame 0; from frame 1 the board stays (its chip already reads this lesson's question), the glowing tube stands beside the strip, the lines pulse, the red line is ringed.
- **Plates:** hydrogen discharge tube (coded glow), pocket spectroscope, high-voltage supply. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v11/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v11`, topic "HYDROGEN SPECTRUM". Registry: after m8-v10.
- Shared kit used: `src/explainer/physics/atom/bohr.tsx` (new in this wave: `HLevels`, `DropArrow`, `OrbitWave` for the handoff's standing wave and the wave that does not join).
- Lesson parts: `LevelTags` (right-hand level labels on leader lines, since levels 4 to 6 crowd), `UvStrip` (a wavelength strip with a grey UV band below 380 nm), `lineColor`; the working stage's `SmallLadder`; the slider stage and the `SeriesFan` on a log wavelength axis.

## Stages built

1 the v10 board with the glowing tube; lines pulse, 656 ringed; "Balmer, 1885", "a formula that fits, no reason", "it works, but why?"; "Bohr, 1913: levels"; the 3 → 2 drop flashes and a red photon flies to the 656 nm line; "gap = photon energy" with an orange bracket. 2 the bench (supply, glowing tube, spectroscope; "glow colour is not data"); "or a grating (earlier video)"; the eyepiece view with a pointer reading 656, 486, 434, 410 nm; safety chips. 3 the ladder to scale with leader labels (−3.40, −1.51, −0.85, −0.54, −0.38 eV), orange brackets shrinking up the ladder, a frame round it ("usually given"). 4 the working layout (task, equation and grouped givens) beside a full-height ladder: 1.89 eV, then framed 3.03 × 10⁻¹⁹ J; the measured strip and the glowing tube on screen as the target. 5 λ = hc/E to 6.56 × 10⁻⁷ m and framed 656 nm; slate-crossed "hc / 1.89"; the red photon lands on its line, ticked. 6 the derivation (gap in terms of n, 1/λ = E/hc, 13.6 eV/hc = 1.096 × 10⁷ m⁻¹) to the framed formula-sheet line; the two-step chips until the shortcut; R from the data sheet; "13.6 is rounded". 7 Rydberg for 3 → 2 (5/36, 1.524 × 10⁶ m⁻¹, framed 656 nm), "flip it", "gap method: 656 nm ✓". 8 4 → 2 (3/16, 2.057 × 10⁶ m⁻¹, framed 486 nm, a cyan photon landing); "nf = lower (final) level"; slate-crossed negative line. 9 the live n_i slider (5 to 10) with ΔE, 1/λ and λ readouts; drops coloured by their line; lines landing on a 340 to 700 nm strip with the grey UV band; "all four predicted" framed; "faint, still visible" at 397 nm; 380 nm in the UV band; drop-size bars almost equal. 10 n = ∞ highlighted, a dashed drop to n = 2; 1/λ = R/4, framed 365 nm; the dashed slate limit edge with lines piling against it. 11 the series fan (Lyman to 1, Balmer to 2 coloured, Paschen to 3) with each family's lines on one log wavelength axis (UV, visible, IR); the visible band 1.65 to 3.27 eV ringed; 2 → 1 at 10.2 eV, 122 nm; ∞ → 3 at 1.51 eV, 820 nm and 4 → 3 at 0.66 eV, 1875 nm. 12 the memory aid on the fan. 13 to 16 cards and brief feedback (A2 adds a UV and visible bar with 103 nm marked). 17 handoff (below). 18 key notes with the memory card.

## Deviations

- **Handoff heading carries v12's learner question** (root rule), on "So what evidence shows" (capped).
- Scenes 4 to 8: the painted tube and the measured strip stay on screen as the target (sparse-frame fix and a picture for the working stage); the working ladder is full height.
- Scene 3 and the slider stage: level labels sit on leader lines (levels 4 to 6 are within 15 px of each other to scale).
- Scene 9: the drop sizes are shown as bars (lengths ∝ ΔE) rather than brackets on a zoomed ladder; same meaning ("upper levels crowd → lines crowd").
- Scene 11: the family arrows are on screen from the first frame; each family's lines land on the axis on its cue.
- Handoff: a recap of v10's ladder and lines (ticked) fills the right side until "Louis de Broglie"; Bohr's orbit is drawn on "one unexplained rule" (with "the rule picks the orbits, but gives no reason"), and the standing wave wraps it on "only orbits that fit a whole number" (sparse-frame fixes).
- Attempt cards carry the data-sheet values in the card text rather than separate chips.
- R1: crossed chips and slip tags slate.

## Final frame (exported as `M8V11FinalFrame` in `s3.tsx`)

`<HandoffBoard11 f={end} final />`: heading "What evidence shows that particles have wave behaviour?"; boxed "mvr = nh / 2π" at the upper left with a grey chip "why?"; a dashed orbit (centre (700, 570), r 230) round a small red nucleus with a navy standing wave of exactly three wavelengths, "n = 3: three whole wavelengths fit"; a smaller crossed orbit (centre (1180, 400), r 110) with 2.5 wavelengths that do not join, "doesn't fit: not allowed"; "de Broglie, 1924" and hand tag "electron = wave?"; a dashed empty panel (x 1440 to 1820, y 200 to 820) headed "evidence?"; chip "Next: what evidence shows that particles have wave behaviour?". `ORB11`, `BAD11` and `PANEL11` are exported for v12, and the board takes `panel={false}` so v12 can move the panel.

## Numbers (all from `common.ts`, checked against "Numbers used")

Levels −13.6, −3.40, −1.51, −0.85, −0.54, −0.38 eV; gap 1.89 eV, 3.03 × 10⁻¹⁹ J, λ = 6.56 × 10⁻⁷ m = 656 nm; slip hc/1.89 = 1.05 × 10⁻²⁵ m; 13.6 eV/hc = 1.096 × 10⁷ m⁻¹; 5/36 = 0.1389, 1.524 × 10⁶ m⁻¹, 656 nm; 3/16 = 0.1875, 2.057 × 10⁶ m⁻¹, 486 nm; slider 2.858 eV 434.1 nm, 3.025 eV 410.2 nm, 3.125 eV 397.0 nm, 388.9, 383.6, 3.267 eV 379.8 nm; limit 2.743 × 10⁶ m⁻¹, 364.6 nm ("365"), 3.403 eV; visible 1.65 to 3.27 eV; Lyman 10.2 eV, 122 nm; Paschen 1.51 eV, 820 nm; 0.66 eV, 1875 nm; A1 2.304 × 10⁶ m⁻¹, 434 nm, 4.58 × 10⁻¹⁹ J, 2.86 eV; A2 9.751 × 10⁶ m⁻¹, 103 nm, 12.1 eV.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v11` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 6 warnings** (sparse gap-wavelength, rydberg-derived, rydberg-red, rydberg-blue-trap and other-series frames; a 25 px label in the A2 picture). Earlier runs failed on sparse working stages, the series fan and the handoff, and small picture text in both feedback scenes; all fixed. Report: `out/explainer/Explainer-phys-y12-m8-v11/grade/Explainer-phys-y12-m8-v11-grade.md`.

**Honest grade: B on provisional timing.** The red photon landing on its measured line, the live n_i slider bunching lines into the UV band and the dashed limit edge carry the argument; motion needs judging at playback speed.

## For root

- m8-v12 opens on `M8V11FinalFrame`.
- The handoff's interim labels ("Bohr's allowed orbit (rule assumed)", "the rule picks the orbits, but gives no reason") are not drawn in the final frame.
- v10's handoff board lost a duplicated "n = ∞, E = 0" label during this build (one label kept); v10 was regraded after it.
