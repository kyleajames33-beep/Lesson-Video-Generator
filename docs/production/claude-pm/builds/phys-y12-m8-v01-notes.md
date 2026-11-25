# phys-y12-m8-v01 build notes (pre-build on provisional timing)

Build agent (Claude), 25 to 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v01.md` (Revision 3, the coherence audit fix of 24 November and the root opening-frame note of 25 November; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v01/common.ts` imports `work/physics-prebuild/p-y12-m8-v01/lesson.json` (made with the unchanged `python -I work/physics-prebuild/make-provisional.py phys-y12-m8-v01`; marked line), `PROVISIONAL = true`. Every cue resolves (`work/tsc-scope/cuecheck-m8a.py v01`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v01/measured/lesson.json` when voiced and repeat the checks.
- **Narration check: no mismatch.** The prepared `lesson.json`, the brief 259 source audit and the current design carry identical narration (6,504 characters, 18 scenes).
- **Holds.** (1) Hook 3 s prediction: the prepared hold sits at the scene end, after "early Universe?"; the design wants it on "prediction", and the answer ("Fewer, and that's the key") follows at once. The ring runs from "prediction" over the answer and the tick lands after the ring (misplaced hold, as in m7-v16). (2) Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. No other hold is named.
- **Opening frame:** m7-v16's exported `M7V16FinalFrame` at frame 0 (its heading already carries this lesson's question). From frame 1 the three system boxes and the grey "head-on, equal energies" tag fade; the field, the pair event and the temperature bar stay; the positron is redrawn hollow; the "Next" chip fades on "early Universe" and the heading is underlined.
- **Plates:** the painted galaxy (scenes 1, 12, 17; never above native size) plus m7-v16's plates for the opening frame. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v01/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v01`, topic "FROM RADIATION TO MATTER". Registry: after m7-v16.
- Shared (new file): `physics/atom/universe.tsx` (plate specs `GALAXY`, `HORN`, `CLOUD`; `Anti` hollow antiparticle; `WaveLine`; `DotGrid` with atoms and lattice links; `logPos`; `ThresholdGauge`; `LogTimeline`; `ZigZag`; `MassPie`; `BoxParticles`, a lesson renderer for particle-box runs; `Readout`). This closes the design's kit gaps 1 to 5 (cooling photon field reused from `massenergy.tsx`).
- Lesson parts: colour roles (`RED`, `COOL`, `GLOW`), `eFmt`/`tFmt` readout formats, `PairEvent`; `Thermo`/`ThermoTick` (in `s1.tsx`).
- Scoped typecheck: `work/tsc-scope/tsconfig.m8-v01-v04.json` (clean).

## Stages built

1 the pair event replayed with amber pen arrows; the painted galaxy "today: matter" with p, n, e⁻; "then: light"; ring and chips; the "fewer pairs" tick, the temperature bar dropping, two redder, longer photons passing through each other, slate cross "not enough energy". 2 the dot grid stretching (spacing doubling over the scene) with amber packets; the crossed explosion inset; three dots highlighted in turn with neighbour arrows; crossed "centre?" ring, "no edge, no centre"; a wave stretching between two dots (λ doubled, bracket, "stretched: less energy", grey "colour here = energy" tag); chips E = hc/λ and λmax = b/T; "size × 2 → λ × 2 → T ÷ 2" with T ÷ 2 ringed; temperature bar halves. 3 a box of e⁻ e⁺ pairs (model count) cycling while hot, then not replaced; twenty photon-energy bars on a log MeV gauge against the dashed mc² line; live T readout 10¹¹ to 10⁹ K; "making ⇄ annihilating" with the making arrow thinning; the energetic-tail bar ringed. 4 task, equation and grouped givens; three stages (8.2 × 10⁻¹⁴ J, 2.4 × 10⁻¹² m, framed 1.2 × 10⁹ K); slate-crossed "c not squared"; "estimate of the scale"; the temperature bar tick "~10⁹ K: electron pairs mostly gone"; "first few minutes". 5 the two-threshold log gauge (mₑc², mₚc² × 1837, 940 MeV); the bar's "~2 × 10¹² K" tick; quark field binding into rose p (uud) and grey n (udd) discs; "~10⁻⁶ s". 6 a particle-box run of protons, neutrons and hollow antiparticles annihilating into photons with live model counters; the illustrative 1 000 000 001 : 1 000 000 000 tally; "more than 10⁹ (≈ 1.6 × 10⁹)" photons per nucleon; electrons and positrons injected and annihilating. 7 two mass bars (gap drawn larger, tagged 0.14%); n ⇄ p with the "→ p" arrow thickening; a decaying neutron; four live model counters and the n : p readout ticking 1 : 6 to 1 : 7 (framed). 8 a particle-box run (p + n → ²H, ²H broken while hot, survival after the temperature falls, ²H + ²H → ⁴He after "helium") beside a scripted builder (snap, a γ splitting it, "binding: 2.2 MeV", slate cross, "~10⁹ K", "~3 min", ⁴He). 9 sixteen discs, ringed counts, regroup into one ⁴He and twelve ¹H, the mass pie, framed 25% and 75%, slate-crossed "1 nucleus in 13, so 8%?", traces chip, "~20 min: fusion ends". 10 and 11 particle-box plasma runs (electrons captured and knocked off while hot; atoms forming and staying as the temperature falls), the knock-off inset, binding bars (13.6 eV too small to see beside 2.2 MeV, "× about 160 000"), plasma chip, the zig-zag path straightening, the orange haze clearing, recombination chip, "transparent". 12 the log timeline with the live cooling dial (T, peak photon energy, peak λ, time) and a state panel; markers ringed in turn; the first-stars marker and the painted galaxy after "years"; the memory line. 13 to 16 question cards with answer-free pictures (head-on γγ making μ⁻ μ⁺ beside "T = ?"; a not-to-scale timeline) and brief feedback. 17 the dot grid with atoms; five timeline chips; a packet crossing and stretching; five stretched waves arriving at "us"; two receding painted galaxies; heading changes to v02's question (final frame). 18 key notes with the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule), on "So what evidence supports" (capped); the design's final-frame text kept this lesson's heading.
- Scene 3: the live T readout and the bars use values the design did not list: 10¹¹ K (Wien-peak photon 43 MeV) cooling to 10⁹ K (0.43 MeV, below the 0.51 MeV line), consistent with scene 4. The pair counters are a model box of e⁻ e⁺ pairs with a count.
- Scene 5: the proton line reads "× 1837" (data-sheet masses, 1.673 × 10⁻²⁷ / 9.109 × 10⁻³¹ = 1836.6); the design wrote "× 1836".
- Scenes 6, 8, 10, 11: the particle-box runs are drawn with `BoxParticles` (lesson renderers, so antiparticles are hollow and nuclei labelled) rather than `ParticleBoxView`; scene 6 removes any antiparticle left on "to one" so the survivors are matter only; every run is tagged "model".
- Scene 7: model tally of 56 nucleons (8 → 7 neutrons) so the readout reads 1 : 6 → 1 : 7.
- Scene 9: an empty helium target, the empty pie and "16 particles from the first minutes" show from the first frame (grade fill).
- Scene 12: the dial's temperature is log-interpolated between the site's marker values (approximate, shown with "≈"); the memory line writes in two parts (first on "too cool to make pairs", the rest on "break atoms").
- Scene 17: five incoming waves (from the left, right and above) rather than "every edge"; the final frame is drawn solid (R2).

## Final frame (exported as `M8V01FinalFrame` in `s3.tsx`)

`<HandoffBoard01 f={end} final />`: heading "What evidence supports an expanding hot early Universe?"; the dot grid (spacing 100, centred on "us" at 960, 540) with atom rings in the box 96 to 1824 by 250 to 830; five timeline chips across the top (y 176); five red-brown and grey stretched waves arriving at the "us" dot with an ink ring, "still here?" and "light from recombination, stretched" under it; red-brown hand tag "stretched ever since" at (1350, 470); two painted galaxies (150 px) on grid dots at (360, 740) and (560, 740) with outward arrows and "still receding?"; chip "Next: what evidence supports an expanding hot early Universe?" at (96, 870). Props `timeline`, `galaxies`, `waves`, `marks` let v02's first beat fade parts.

## Numbers (all from `common.ts`, checked against "Numbers used")

mₑc² = 8.198 × 10⁻¹⁴ J (0.51 MeV), λ = 2.4 × 10⁻¹² m, T ≈ 1.2 × 10⁹ K; slip 2.7 × 10⁻²² J; mₚc² = 940 MeV, × 1837, T ≈ 2.2 × 10¹² K; 1/η = 1.6 × 10⁹; neutron +0.14%, half-life ≈ 10 min; 2.2 MeV against 13.6 eV, × 160 000; 25% and 75%, slip 8%; 3000 K: 966 nm, 1.3 eV; A1 1.69 × 10⁻¹¹ J, 1.18 × 10⁻¹⁴ m, 2.5 × 10¹¹ K, slip 3.4 × 10⁻¹⁷ K.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v01` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 5 warnings (sparse frames in the electron-scale working, heavier particles, helium count and feedback 2; attempt 2 mostly empty, question scene)**. Earlier runs failed on a near-empty helium count; fixed with the target box, empty pie and a lead label. Small 16 px "H" labels and 24 px timeline subtitles raised. Report: `out/explainer/Explainer-phys-y12-m8-v01/grade/Explainer-phys-y12-m8-v01-grade.md`.

**Honest grade: B on provisional timing.** Motion carries each change, but several set-ups are sparse at sample frames and need a playback-speed look once voiced.

## For root

- Decide the hook pause position (all four Module 8 openers have the prepared 3 s hold after the question).
- Confirm "× 1837" (data-sheet masses) against the design's "× 1836", and the scene 3 temperature values.
- m8-v02 opens on `M8V01FinalFrame` (heading already v02's question).
