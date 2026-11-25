# phys-y12-m8-v17 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v17.md` (Revision 3; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v17/common.ts` imports `work/physics-prebuild/p-y12-m8-v17/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`, about 480 s. Every cue resolves (cue check: 0 problems); late cues capped with room for their offsets. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v17/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 5,908 characters, 19 scenes; checked scene by scene by script with the build parser rules).
- **Holds.** The design names a 2 s memory-aid hold, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s; all are in the prepared timing. No hook prediction hold. **Missing holds: none.**
- **Opening frame:** v16's `M8V16FinalFrame` at frame 0; from frame 1 an identical rebuilt board takes over (no double image) and only the "Next" chip fades, because v16's heading already carries this lesson's question.
- **Plates:** the painted polonium-beryllium source (scene 12). Rutherford's 1919 chamber is a coded schematic labelled "schematic, not to scale" (design open decision 1, root decision 11). **Plate requests: none required** (optional: `y12p-transmutation-chamber-v1` if root prefers apparatus realism, as the design's open decision 1 says).

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v17/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 7, `s2.tsx` 8 to 13, `s3.tsx` 14 to 19, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v17`, topic "Q-VALUES". Registry: after m8-v16.
- New shared kit files: `src/explainer/physics/atom/qvalue.tsx` (`StackColumn`, `Ledger`, `BreakMark`, `ArrowFlow`, `stackH`: stacked energy and binding bars with zigzag breaks for bars too tall to draw) and `src/explainer/physics/atom/fission.tsx` (`FissionSplit`, `splitSpec`, `splitAt`, `clusterR`; v18 adds its chain parts to the same file). Also uses `decay.tsx` (`Balance`, `NucleonCluster`), `nuclear.tsx` (`BindingCurve`, `NucEq`), `binding.tsx` (`CurveMark`), `neutron.tsx` (`Disc`, `PO_BE`) and v16's `CurveArrows`.
- Lesson parts: the coded `Chamber`, nuclide terms, signed formats. All masses are integer micro-u arithmetic in `common.ts`.
- Tooling: `work/tsc-scope/tsconfig.m8-v17-v19.json`, `grade-m8e.sh`, `stillsm8e.sh`, `frames-m8e.py`.

## Stages built

1 last time's curve and reaction: the alpha strikes nitrogen-14 again, the nucleus regroups as oxygen-17 and a proton leaves; "+?" and "−?" pulse in turn; a faster alpha with a long teal arrow ("more KE in → more out?"); "determines" and "energy released" underlined. 2 the coded chamber: alpha tracks fading at the dashed range line ("≈ 7 cm in air"), flashes on the zinc sulfide screen beyond it ("beyond the alpha range!", "scintillations"), a proton track, the inset of an alpha knocking a proton out, "¹₁H: protons" framed. 3 disc groups above the equation; A and Z tallies on their spoken sums; the framed equation with "top 18 = 18" and "bottom 9 = 9". 4 the energy ledger (rest bars broken, "not to scale"): equal totals, the rest bar shortening as kinetic energy grows ("mass drop → KE"), the two algebra lines, Q framed, × 931.5. 5 two small ledgers (products lighter, energy out; products heavier, energy in), the Po-210 line (+5.41 MeV), the projectile's inward arrow. 6 each nuclide as a nucleus with its electrons on a dashed ring, "9 e⁻" each side, Z tally, electrons pairing off across the arrow, the framed chip, the atomic-mass table, last time's ¹H chip. 7 and 8 the working (task strip, equation strip, grouped givens), the comparison balance tipping to the products ("tilt exaggerated"), Δm = −0.001280 u, Q = −1.19 MeV framed with a ticking number, the crossed "Q = −0.00128 MeV", the orange bar resolving to energy taken in ("said: about 1.2 MeV"). 9 the ledger with numbers (kinetic bars at 40 px per MeV): the dashed minimum line, momentum and repulsion reasons on a mini reaction, Rutherford's 7.69 MeV in and 6.50 MeV out framed. 10 the K_in slider (7.69, then 5.0, 7.7, 9.0) with K_in, Q and K_out readouts; Q never moves ("same Q"). 11 binding stacks (28.296 + 104.660 = 132.956; 131.763; ¹H: 0), the framed difference, the one-decimal tag. 12 the painted Po-Be source, the beryllium equation and tallies, the working and +5.70 MeV framed, "with 5.3 MeV alphas: K_out ≈ 11.0 MeV". 13 both results, two small balances (after heavier, before heavier) with energy in and out arrows, the memory card. 14 to 17 cards and brief feedback. 18 handoff (below). 19 key notes with the memory card.

## Deviations

- **Handoff heading carries v18's learner question** (root rule), switched on "So why can one fission event" (capped); the design's final-frame text names this lesson's question.
- Handoff board: the uranium-235 nucleus, "slow neutron", the three further uranium-235 nuclei, the equation skeleton "¹₀n + ²³⁵₉₂U → ?" and "Δm = ?", "Q = ?" are on screen from the first frame (filled on their cues; the "?" marks on the targets on "three neutrons out"), so the cleared board is not empty. Fragments fly up-right (¹⁴¹Ba, upper) and down-left (⁹²Kr, lower).
- Scene 11: ¹⁴N's binding energy shows 104.660 MeV (104.6596 rounded); the design's 104.659 is truncated, so the sum shows 132.956 (design 132.955). The difference still rounds to −1.19 MeV; spoken values unchanged.
- Scene 13: two small comparison balances carry the before and after masses (the design shows the results with arrows only).
- No definition of "Q-value" is quoted (the site's entry adds "can occur spontaneously", which the design avoids); the formula carries the meaning.
- On-screen references say "an earlier video", "last time" and "from earlier" (no video or module numbers).
- R1: every crossed chip and slip tag is slate.
- Feedback pictures keep their labels at 40 to 42 px (and the alpha's letter outside the disc) so they stay at least 26 px when shown small.

## Final frame (exported as `M8V17FinalFrame` in `s3.tsx`)

`<HandoffBoard17 f={end} final />`: heading "Why can one fission event trigger a controlled or uncontrolled chain?"; a grey neutron "n" with a short teal arrow at the left (where it entered); the fission fragments as red-and-grey disc clusters, ¹⁴¹Ba up-right and ⁹²Kr down-left, with teal speed arrows; three grey neutrons on dashed paths towards three uranium-235 clusters at the right edge ("more uranium-235"), each marked "?"; under them ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n with "236 = 236 ✓" and "92 = 92 ✓"; chips "Δm = 236.052595 − 235.866571 = 0.186024 u" and "Q = +173 MeV" with an orange arrow out; grey tag "about 200 MeV in total, once the fragments decay"; chip "Next: why can one fission event trigger a controlled or uncontrolled chain?". v18 opens on this frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

Atomic masses (AME2020, six decimals): ⁴He 4.002603, ¹⁴N 14.003074, ¹⁷O 16.999132, ¹H 1.007825, ⁹Be 9.012183, ¹²C 12.000000, n 1.008665, ²⁷Al 26.981538, ³⁰P 29.978313, ²³⁵U 235.043930, ¹⁴¹Ba 140.914403, ⁹²Kr 91.926173, ²¹⁰Po 209.982874, ²⁰⁶Pb 205.974465 u; 1 u = 931.5 MeV/c². Rutherford 18.005677 against 18.006957 u, Δm −0.001280 u, Q −1.19 MeV (slip −0.00128 "MeV"); threshold 1.53 → "≈ 1.5"; K_in 7.69, K_out 6.50; slider K_out 3.81, 6.51, 7.81. Binding 28.296, 104.660, 132.956, 131.763, −1.19. Po-210 0.005806 u, +5.41 MeV. Be 13.014786 against 13.008665 u, Δm 0.006121 u, +5.70 MeV, 11.0 MeV. A1 30.984141 against 30.986978 u, Δm −0.002837 u, −2.64 MeV (slip +2.64). Fission 236.052595 against 235.866571 u, Δm 0.186024 u, Q +173 MeV.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v17` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 9 warnings** (sparse ledger, sign, which-masses, memory-aid, feedback, handoff and notes frames; "few pictures"). Earlier runs failed on mostly empty which-masses, memory-aid and handoff frames and on picture labels below 26 px in the feedback scenes; all fixed (atom rings and a mass table, comparison balances, a handoff board filled from its first frame, 40 to 42 px picture labels). Spot stills checked every scene end. Report: `out/explainer/Explainer-phys-y12-m8-v17/grade/Explainer-phys-y12-m8-v17-grade.md`.

**Honest grade: B on provisional timing.** The range test, the ledger whose bars must match, the electrons pairing off, the balance tipping and the K_in slider with a fixed Q carry the argument; several frames are text-led.

## For root

- Open decision 1 (coded chamber) kept; open decision 2 (binding route) built in full; open decision 3 (173 against about 200 MeV) built as designed.
- The design's ¹⁴N binding energy (104.659) and sum (132.955) are truncations; the build shows 104.660 and 132.956.
- m8-v18 opens on `M8V17FinalFrame`.
