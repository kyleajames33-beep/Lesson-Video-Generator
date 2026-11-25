# phys-y12-m8-v16 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v16.md` (Revision 3 with the 21 November root fix; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v16/common.ts` imports `work/physics-prebuild/p-y12-m8-v16/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (cue check: 0 problems); late cues capped with room for their offsets. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v16/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 5,744 characters, 19 scenes).
- **Holds.** The design names a 2 s memory-aid hold, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s; all are in the prepared timing. No hook prediction hold. **Missing holds: none.**
- **Opening frame:** v15's `M8V15FinalFrame` at frame 0; from frame 1 the chip fades into the heading and the rest of the board fades, then the balance grows to the centre (identical to v15's balance until it moves, so there is no double image); pan readouts write on "less mass than the six protons and six neutrons".
- **Plates:** none (the design's anchor is the coded comparison balance, labelled "mass comparison (diagram)" at every use). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v16/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 7, `s2.tsx` 8 to 13, `s3.tsx` 14 to 19, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v16`, topic "BINDING ENERGY". Registry: after m8-v15.
- New shared kit file: `src/explainer/physics/atom/binding.tsx` (`neighbours`, `neighbourCount` and `NeighbourLinks`, links only between touching discs; `RepulsionWeb`, a line between every pair of proton discs; `CurveMark`, a named point on the binding-energy curve at the lesson's value). Also uses `decay.tsx` (`Balance`, `NucleonCluster`) and `nuclear.tsx` (`BindingCurve`, compressed A axis labelled "compressed scale").
- Lesson parts: `LiveBalance` (packed carbon-12 against its separate nucleons, numbered on cue), `u6` (six-decimal masses), `EnergyBar`. All masses are integer micro-u arithmetic in `common.ts`.

## Stages built

1 the balance at the centre; "bound nucleus 11.996709 u" and "separate nucleons 12.095646 u"; "lost particles" crossed; both pans numbered 1 to 12 with "12 = 12"; "0.82% lighter" with a brace on the gap; "missing mass" and "binding energy" underlined. 2 carbon-12 with strong-force links between touching nucleons; the nucleus pulled apart as an energy bar fills to 92.2 MeV ("energy in = binding energy, E_b"); "E = mc² (Module 7)"; a small balance whose right pan holds the pulled-apart system tipping as its mass rises from 11.996709 to 12.095646 u ("more energy → more mass"). 3 the motion in reverse: nucleons together, the bar and two γ packets leaving, the mass falling; "mass defect = lost matter" crossed ("same 12 nucleons"); "energy out → mass down (Module 7)"; "mass defect Δm = E_b / c²" framed; the Sun chip. 4 the method with a small balance and carbon-12's parts and whole readouts; Δm = Zm_p + Nm_n − m_nucleus; E_b = Δm c²; "1 u = 931.5 MeV/c² → E_b (MeV) = Δm (u) × 931.5" framed with the data-sheet chip. 5 and 6 the carbon-12 working (task strip, equation strip, grouped givens): the sum, Δm = 0.098937 u framed (a gap readout fills), E_b = 92.2 MeV framed with a ticking number, the nucleus separating ("92.2 MeV to separate"), E_b/A = 7.68 MeV per nucleon framed, the hydrogen comparison chip. 7 the carbon atom with six electrons; "m(¹²C atom) = 12.000000 u"; the wrong working (electrons on one side only, 89.1 MeV crossed); "same kind of mass on both sides"; the hydrogen-atom working with six electrons on each side pairing off ("6 e⁻ each side: they cancel"); 92.2 MeV framed. 8 total bars (92 and 1784 MeV) then per-nucleon bars (7.68 and 7.59) with "÷ A" and the framed tag. 9 the curve on graph paper with a cursor stopping at ⁴He, ¹²C, ⁵⁶Fe and ²³⁵U (passing ¹⁶O and ²⁰⁸Pb) and live nuclide, E_b/A and total readouts; "top: most tightly held". 10 a 12-disc and a 61-disc nucleus: one disc's six links ("short range: neighbours only"), the small nucleus's surface ringed ("most on the surface: 11 of 12"), the larger one's links and its fully surrounded discs; the curve's rising side highlighted. 11 the repulsion web in a 28-proton and a 40-proton nucleus (378 and 780 pairs); the falling side highlighted; N/Z chips and extra neutrons added; the beyond-lead chip framed. 12 the curve with an amber fusion arrow and a teal fission arrow both rising to the peak, orange bursts, the framed rule, "fusion (an earlier video)", "fission", "up and left", "fission: coming up". 13 the curve with both arrows beside a small balance (bound against apart) and the framed memory line; the arrows pulse and a burst leaves the lighter pan. 14 to 17 cards and brief feedback. 18 handoff (below). 19 key notes with the memory card.

## Deviations

- **Handoff heading carries v17's learner question** (root rule), switched on "What determines the energy released" (capped).
- R1: every crossed chip and slip tag is slate; the green tick in scene 7's "electrons cancel" stays green as a correct-result tag.
- Scene 2: the small balance compares a bound reference nucleus with the system being pulled apart (level, then tipping as energy is added), rather than showing the separated mass before it is earned.
- Scene 9: each stop also shows the spoken rounding ("said 7.1", "said 7.7", "said 8.8", "said 7.6"), and the U-235 bar in scene 8 shows "1784 MeV (about 1780)".
- Scenes 10 and 11 use a small curve at the upper right (no ticks, label "binding per nucleon") so the nuclei can fill the stage.
- Feedback 1's givens strip says "nucleus mass" and "proton and neutron masses" in words (subscripts there fell below 26 px).

## Final frame (exported as `M8V16FinalFrame` in `s3.tsx`)

`<HandoffBoard16 f={end} final />`: heading "What determines the energy released in an artificial transmutation?"; at the left the binding-energy curve (box 170, 300, 720 × 440; A on the compressed scale with ticks 4, 16, 56, 150, 238; E_b/A 0 to 9 MeV) with the amber fusion arrow and the teal fission arrow both rising to the peak, and points "⁴He" (7.07), "¹⁴N" (7.48), "¹⁷O" (7.75); "Rutherford, 1919"; at the right an amber α arrow striking a nitrogen-14 nucleus (7 red, 7 grey discs) labelled "nitrogen-14 (7 p, 7 n)"; under it ⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H; an orange bar with "−?" and "+?" ends; chip "Q = ?"; chip "Next: what determines the energy released in an artificial transmutation?". v17 opens on this frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

m_p 1.007276 u, m_n 1.008665 u, m(¹²C nucleus) 11.996709 u, ¹H 1.007825 u, ¹²C atom 12.000000 u, m(⁷Li nucleus) 7.014357 u, 1 u = 931.5 MeV/c². C-12: 12.095646 u, Δm 0.098937 u, E_b 92.2 MeV, 7.68 MeV per nucleon; 0.82% lighter; 5.65 × 10⁵ times 13.6 eV. Trap 0.095646 u → 89.1 MeV; fix 0.098940 u → 92.2 MeV. Curve: ⁴He 7.07 (28.3), ¹²C 7.68 (92.2), ¹⁶O 7.98 (128), ⁵⁶Fe 8.79 (492), ²⁰⁸Pb 7.87 (1636), ²³⁵U 7.59 (1784). N/Z 1.0 and 1.54. Li-7: 7.056488 u, Δm 0.042131 u, E_b 39.245 ≈ 39.2 MeV, 5.61 MeV per nucleon (39.245/7), slip 13.1 MeV. Handoff points (AME2020): ¹⁴N 7.476, ¹⁷O 7.751 MeV per nucleon.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v16` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 2 warnings** (sparse method and handoff frames). An earlier run failed on a mostly empty method frame and warned on 25 px subscripts and two label collisions; all fixed (carbon-12 readouts beside the method, 32 px givens, plain words in feedback 1's strip, readouts moved). Spot stills checked the numbered pans, the pull-apart, the trap's two workings and the curve arrows. Report: `out/explainer/Explainer-phys-y12-m8-v16/grade/Explainer-phys-y12-m8-v16-grade.md`.

**Honest grade: B on provisional timing.** The live balance, energy flowing in and out, the electrons cancelling, the neighbour links against the repulsion web and both arrows climbing to the peak carry the argument.

## For root

- The coded two-pan balance is kept as a labelled diagram, as the design's call asks (v15's final frame and this lesson's opening match).
- Open decision 1 (carbon-12 as the worked nucleus) and 2 (the trap scene with both workings) are built as designed.
- m8-v17 opens on `M8V16FinalFrame`.
