# phys-y12-m8-v09 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v09.md` (Revision 3 with the 24 November coherence audit fix; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v09/common.ts` imports `work/physics-prebuild/p-y12-m8-v09/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (cue check: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v09/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,159 characters, 18 scenes).
- **Holds.** The design names no hook prediction, and the prepared timing has none. Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. The scene 8 target-mass slider runs inside its narration (no hold named).
- **Opening frame:** v08's `M8V08FinalFrame` at frame 0; from frame 1 the v08 board stays (its chip already reads this lesson's question, so the heading is this question at the same size) and the painted gold ring sits beside it with the hand tag "gold"; the "Next" chip is not redrawn.
- **Plates:** Po-Be source vessel, lead bricks, paraffin wax, ionisation chamber with its needle layer (turned about its painted pivot), gold ring, vapour cell (nitrogen gas, scenes 5, 9 and the A2 card), steel ball (scenes 6 and 12). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v09/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v09`, topic "THE NEUTRON". Registry: after m8-v08.
- New shared kit file: `src/explainer/physics/atom/neutron.tsx` (plate specs and anchors for the source, bricks, wax and ionisation chamber; `IonChamber` with the needle turned to a reading; particle `Disc`; `headOnRun` and `headOnAt`, a head-on hit on a track run on the collisions engine `sims/collisions.ts`).
- Lesson parts: the beam line (`BL` placements, `BeamPlates`, `Stream` with unknown, gamma or neutron traffic, `AlphaDots`, needle `flicker`), `WaxChains` (coded C and H chains), `VBar` and `Level` energy bars, `FieldRegion` (blue E lines and slate × for B).
- Scratch tool: `work/tsc-scope/tsconfig.m8-v09-v12.json` (scoped typecheck), `work/tsc-scope/grade-m8c.sh` (grade with the root lock).

## Stages built

1 the v08 board with the gold ring; pulses on the charge bar and the gap; helium (2 p, two dashed gaps, charge and mass bars); p + e pairs in the gap, then gone with a slate-crossed chip; grey "n?" discs fill both gaps; an inset where a neutral disc crosses E and B fields straight. 2 the source vessel and bricks with the field region from the first frame; alpha dots from the polonium to the beryllium disc; a dashed stream through the lead and the fields, straight; framed "no deflection → no charge"; relabelled "γ? (gamma photons)" with packets. 3 the wax and the ionisation chamber join; the wax close-up (C and H chains, H turning pink: protons); protons leave the wax into the chamber, needle flicking; Chadwick's fastest proton ringed; givens and K = ½mv² to a framed 5.7 MeV; slate-crossed "K = mv² = 11 MeV"; "?" over the stream. 4 a photon packet bounces off a big proton keeping most of its bar, the proton takes a thin orange slice; ping-pong on bowling ball; bars 55 MeV against 5.7 MeV; slate line at 16 MeV with the part above hatched, "not available". 5 the gas cell on the beam line, nitrogen recoils; the beam line moves to the top corner; two horizontal photon bars (≈ 55, ≈ 90 MeV, Chadwick's estimate) with "≠" ringed; the 16 MeV line; slate-crossed "the radiation is gamma photons". 6 a neutron stream; n and p level on a balance bar; an equal-mass head-on hit on the collisions engine (n stops dead, p leaves); two steel ball plates repeat it; the 5.7 MeV bar moves wholly from n to p under the 16 MeV line, framed. 7 coded lead atoms (the bricks plate as the outside view): a proton track ionising atoms and stopping; a neutron track crossing to hit a nucleus, which recoils and ionises; the reaction with A and Z tallies, framed. 8 the live target-mass slider (1, 4, 14, 197) on the collisions engine with recoil-speed and energy-share readouts; the supplied rule framed with both checks; "nitrogen: 14". 9 wax and gas cell as the two targets; grouped givens; the two rules, the fraction, "2mₙv" struck through, the ratio, framed 7.02 line; slate-crossed inverted ratio. 10 the cross-multiplied lines to a framed mₙ = 1.16 mₚ; the site formula chip; a mass line 0.8 to 1.5 mₚ with the ± 10% range bar and today's 1.001 marker; n and p discs with a live "mₙ = ... mₚ"; data-sheet line framed. 11 the gold nucleus filling with neutrons, mass bar completed, ¹⁹⁷₇₉Au, Z, N and framed A = Z + N, the gold ring. 12 the two insets replaying and the memory line. 13 to 16 cards and brief feedback. 17 handoff (below). 18 key notes with the memory card.

## Deviations

- **Simulation engine.** The design (Revision 3) records that no two-body collision engine existed; `sims/collisions.ts` now exists, so the target-mass slider and the equal-mass insets run on it (`elasticTransfer`, `runCollision`), with the design's values (1.00/1.00, 0.40/0.64, 0.13/0.25, 0.010/0.020).
- **Handoff heading carries v10's learner question** (root rule), on "So why couldn't Rutherford's model" (capped).
- Scene 2: the field region is on screen from the first frame with the chip "what comes out of the beryllium?" (sparse-frame fix); its blue label explains the colours.
- Scene 5: the beam line shrinks to the top corner (camera move) to make room for the contradiction board; bars are horizontal.
- Scene 8: the two target plates sit in the working column until "Check it" (sparse-frame fix). On provisional timing "If the target is very heavy, it hardly moves" ends the scene within about 2 s, so the slider steps 4, 14, 197 run 20 frames apart from just before that phrase; recheck spacing on the voiced take.
- Scene 10: the mass line, the n and p discs and the live "mₙ = ... mₚ" line are on screen from the first frame (sparse-frame fix).
- Scene 11 and the A1 picture: nucleons and protons are plain discs with a legend (letters were below the size rule at that scale).
- Handoff: a recap card ("the completed atom", the gold mass bar, a row of p and n) fills the right side until "with electrons outside it" (sparse-frame fix).
- Hook: no heading underline.

## Final frame (exported as `M8V09FinalFrame` in `s3.tsx`)

`<HandoffBoard09 f={end} final />`: heading "Why couldn't Rutherford's model explain stable atoms and line spectra?"; a small nucleus of red "p" and grey "n" discs at (660, 570), "nucleus: p and n (not to scale)"; one navy electron on a dashed circular orbit (r 300) moving with the frame, a teal velocity arrow turning with it and a rose arrow to the centre; right column "one electron, far outside", "Rutherford's picture: a circular orbit", "v keeps changing direction", "a points to the centre", "changing direction = accelerating"; chip "accelerating charges radiate EM waves ?" with rose wavelets at the electron; rose hand tag "radiates?"; chip "Next: why couldn't Rutherford's model explain stable atoms and line spectra?". `HANDOFF09_END` is exported so v10 continues the electron's motion; the board takes a label opacity `lo` for v10's fade.

## Numbers (all from `common.ts`, checked against "Numbers used")

K = ½(1.673 × 10⁻²⁷)(3.3 × 10⁷)² = 9.11 × 10⁻¹³ J = 5.69 MeV ("5.7"); slip mv² = 11.4 MeV ("11"); mₚc² = 939.9 MeV, photon needed 54.6 MeV ("55"), share 0.104; available 10.65 + 5.30 = 15.95 MeV ("16"); nitrogen 90 MeV (Chadwick); slider 2/(1 + M), 4M/(1 + M)²; vₚ/v_N = 7.02; 7.02 mₙ + 7.02 mₚ = mₙ + 14 mₚ; 6.02 mₙ = 6.98 mₚ; mₙ = 1.16 mₚ (site formula 1.159); ± 10%: 0.91 to 1.42 ("0.9 to 1.4"); 1.675/1.673 = 1.001; gold 79, 118, 197; helium 2, 4; reaction A 4 + 9 = 12 + 1, Z 2 + 4 = 6 + 0.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v09` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 8 warnings** (sparse beryllium, two-targets, solve-mass, feedback-1 and handoff frames; attempt 1 at 67% bare with its picture; 24 px helium label; 10 px "N" letters in the shrunken beam line). Earlier runs failed on sparse beryllium, recoil-rule, solve-mass and handoff frames, an off-edge "(Chadwick's estimate)" and small disc letters; all fixed. Report: `out/explainer/Explainer-phys-y12-m8-v09/grade/Explainer-phys-y12-m8-v09-grade.md`.

**Honest grade: B on provisional timing.** The thin photon slice against the full neutron hand-over, the two photon bars that should match, the live slider and the cancelling speed carry the argument; motion needs judging at playback speed.

## For root

- Collisions engine used in place of the design's lesson-coded collision (engine now exists).
- Scene 8 slider spacing on the voiced take (provisional timing leaves under a second per step).
- m8-v10 opens on `M8V09FinalFrame`.
