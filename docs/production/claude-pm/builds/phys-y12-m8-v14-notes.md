# phys-y12-m8-v14 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v14.md` (Revision 3 with the 21 November root fix and the 24 November coherence fix; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v14/common.ts` imports `work/physics-prebuild/p-y12-m8-v14/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (cue check: 0 problems); late cues capped with room for their offsets. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v14/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 5,620 characters, 18 scenes).
- **Holds.** The design names the 3 s summary-table hold, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s; all are in the prepared timing. No hook prediction hold. **Missing holds: none.**
- **Opening frame:** v13's `M8V13FinalFrame` at frame 0; from frame 1 the chip fades into the heading, the nucleon inset pulses on "some nuclei don't stay the same", and on "a school radioactive source" the board changes in one move to the painted sealed source and Geiger counter.
- **Plates:** y12p-sealed-source-v1, y12p-geiger-counter-v1 (count coded in its dark display), y12p-absorber-paper-v1, y12p-absorber-aluminium-v1, y12p-lead-bricks-v1. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v14/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v14`, topic "RADIOACTIVE DECAY". Registry: after m8-v13.
- New shared kit file: `src/explainer/physics/atom/decay.tsx` (plate specs and anchors for the sealed source window, the Geiger tube window and display, the absorber sheets and the counter tray, all measured from the alpha channel; `CountDisplay`; `NucleonCluster`, `clusterLayout` and `discAt`, packed p and n discs on a hexagonal spiral with flips, hides, glows and tremble; `NZChart` with `bandN`, `nzX`, `nzY`, a schematic N against Z chart whose band passes N/Z = 1.54 at Z = 82; `clickRun`, `clicksTo` and `ClickTrace`, random clicks from the chance engine; `decayRun`, `decayFrames`, `remainingAt` and `NucleiGrid`, decay from the particle-box engine; `Balance` and `panAt`, the coded comparison beam).
- Lesson parts: placement by anchor (`placeAt`, `srcWin`, `tubeWin`, `dispRect`), `EqBox` (framed nuclear equations), the small N against Z chart with enlarged steps (`MiniChart`, `stepTo`), particle markers (`Electron`, `Positron`, `Nu`, `Gamma`, `AlphaGroup`), `GraphPaper`.

## Stages built

1 v13's inset pulses; the painted source and Geiger counter; a click trace and a count from the chance engine (clicks at random with a steady average); an inset nucleus at the source sends one emission into the tube (with its click) while two miss it; "counts = detections, not every decay"; "alpha, beta and gamma" underlined. 2 the schematic N against Z chart with the band and N = Z; "too big (Z > 82)", "too many n", "too many p" and "excited" markers in turn; "unstable: its protons and neutrons could be arranged with less energy"; "spontaneous: on its own", "no trigger"; the four slots α?, β⁻?, β⁺?, γ?. 3 U-238 (not every nucleon drawn) losing a 2p 2n alpha group; the equation; A and Z tallies ticking with "top numbers balance" and "bottom numbers balance"; the equation framed; rose repulsion arrows; the chart marker stepping (−2, −2). 4 C-14: a neutron flashing into a proton; an electron created and thrown out (β⁻ = ⁰₋₁e); "electrons stored inside the nucleus" crossed with "electron created, not stored"; the equation with "?"; tallies; the marker stepping (+1, −1). 5 the beta spectrum sketch (C-14, endpoint 156 keV) on graph paper; the dashed "expected: one value"; the measured spread; "Pauli, 1930"; an electron and ν̄ leaving the nucleus; "the rest: carried by ν̄"; "detected 1956"; "?" becoming ν̄, framed, "A and Z untouched". 6 F-18: a proton turning into a neutron; a positron and a neutrino leaving; the equation with "PET scans"; tallies; "mirror of β⁻"; the marker stepping (−1, +1); a recall card for β⁻. 7 the atom's eV ladder beside the nucleus's MeV ladder; the excited nucleus glowing; the drop and a γ packet; "visible photon ≈ 2 eV", "γ ≈ 1.3 MeV"; the Co-60 and Ni-60* equations; the two-step cascade 2.51 → 1.33 → 0 MeV with γ₁ = 1.17 MeV and γ₂ = 1.33 MeV; tallies; the excited marker losing its energy arrow. 8 three rows of atoms; the alpha crossing slowly and ionising nearly every atom; the beta fast, about one in ten; the gamma one along the row; "ionising: α > β⁻ > γ" framed. 9 track lengths ("more ionisation → shorter range"); the absorber selector: the painted source, an empty slot, the Geiger counter at 940 counts per minute, paper (622, "α gone"), aluminium (88, "β⁻ gone"), lead (27, "reduced, not stopped") with streams stopping at the slot; the safety chip; the bench shrinks and a tissue block shows γ passing (outside) and an alpha's dense ionisation (inside). 10 a field region of crosses; tracks from the field motion engine: α curving gently up, β⁻ (moderate, then tight) down, γ straight; force arrows; "β⁺ (positron) would curve the α way; radii not to scale". 11 spontaneous against artificial: the U-238 alpha icon ("no trigger"); an alpha striking N-14 ("Rutherford, 1919: ⁴₂He + ¹⁴₇N → ?"); mass bars "parent" and "products" with "products: less mass"; the alpha and daughter moving apart with speed arrows and energy bars; "E = mc² (Module 7)" framed; the Po-210 5.41 MeV preview. 12 the summary table framed (rows on their cues) with the hand-lettered line. 13 to 16 cards and brief feedback. 17 handoff (below). 18 key notes with the table card.

## Deviations

- **Handoff heading carries v15's learner question** (root rule), switched on "Why does half-life predict" (capped).
- R1: every crossed chip and slip tag is slate.
- The N against Z markers step three units per decay unit (tag "schematic, steps enlarged"), since one unit is about 3 px on the small chart.
- Scene 5: the beta spectrum is a sketch (allowed shape p × E × (Q − T)², no Coulomb correction), labelled "(sketch)"; graph paper and "each decay: one electron, what energy?" fill the board before the curve.
- Scene 9: the bench, absorbers and streams are on one board; the tissue block is a labelled coded diagram ("tissue (diagram)"), never a body; when the bench shrinks for the tissue block, its small labels fade so nothing falls below 26 px, and "counts per minute" sits above the counter's display.
- Scene 10: model radii (α about 3750 px, β⁻ about 190 px; the real ratio is about 70), tagged "radii not to scale".
- Scene 11: the mass bars are tagged "mass comparison (diagram; difference exaggerated)".
- Attempt 1: the periodic-table strip sits inside the card's picture (two lines, 36 px).
- Key notes: the memory card is a compact table (A, Z, charge, stopper) with the hand-lettered line; the field column stays in the scene 12 table.

## Final frame (exported as `M8V14FinalFrame` in `s3.tsx`)

`<HandoffBoard14 f={end} final />`: heading "Why does half-life predict a population but not one atom?"; a 10 by 10 grid of identical nuclei at (120, 300), cell 54 px, with the decays of a seeded particle-box run (rate 0.0052 per second from "clicks at random", plus one on "changes one nucleus") shown as dashed grey rings; a click trace along y = 250 with a tick per decay; a dashed navy marker on one nucleus with "which next? when?"; at the right empty N and t axes (1180, 330, 600 × 420) with a dashed halving sketch and teal guides, "half every t½?" and "number left against time"; label "identical nuclei; dashed ring = decayed"; chip "Next: why does half-life predict a population but not one atom?". v15 opens on this frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

U-238 → Th-234 + α (238 = 234 + 4; 92 = 90 + 2); C-14 → N-14 + ⁰₋₁e + ν̄ (14 = 14 + 0; 6 = 7 + (−1)); F-18 → O-18 + ⁰₊₁e + ν (18 = 18 + 0; 9 = 8 + 1); Co-60 → Ni-60* + ⁰₋₁e + ν̄; Ni-60* cascade 2.506 → 1.333 → 0 MeV: γ₁ = 1.17 MeV, γ₂ = 1.33 MeV; visible photon ≈ 2 eV; selector 940, 622, 88, 27; A2 612, 610, 98, 31; A1 Ra-226 → Rn-222 + ⁴₂He, Sr-90 → Y-90 + ⁰₋₁e + ν̄, slip Kr-86; Po-210 5.41 MeV; dates Pauli 1930, detection 1956, Rutherford 1919. Every product nuclide is computed from the decay rules in `common.ts`.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v14` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 7 warnings** (sparse antineutrino, beta-plus, spontaneous-artificial, feedback-1 and handoff frames; the attempt 1 card; dense key notes, 499 characters with the table card). Earlier runs failed on mostly empty antineutrino, beta-plus and handoff frames and on small text (nucleon letters, the attempt 1 picture); all fixed. Spot stills checked the clicks, the absorber selector at aluminium (88) and lead (27), the tissue block and the field tracks. Report: `out/explainer/Explainer-phys-y12-m8-v14/grade/Explainer-phys-y12-m8-v14-grade.md`.

**Honest grade: B on provisional timing.** The neutron flipping and the electron leaving, the spectrum against one line, the counts dropping at each absorber and the opposite curves carry the argument.

## For root

- Open decision 1 (β⁺ depth) and 2 (hazard sentence) are built as designed.
- m8-v15 opens on `M8V14FinalFrame`.
