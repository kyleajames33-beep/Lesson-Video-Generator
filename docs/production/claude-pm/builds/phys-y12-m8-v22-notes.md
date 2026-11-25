# phys-y12-m8-v22 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v22.md` (Revision 3 with the 21 November root fix; the last revision wins). No MP4 rendered. Narration untouched. This lesson closes Year 12 Physics.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v22/common.ts` imports `work/physics-prebuild/p-y12-m8-v22/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`, about 527 s. Every cue resolves (cue check: 0 problems); late cues capped; the offset check (`work/tsc-scope/latecheck-m8f.py`) finds no change starting in a scene's last 2 s.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,432 characters, 21 scenes; checked scene by scene by script).
- **Holds.** The design names the hook's 3 s prediction, a 2 s memory-aid hold, attempts 10 s, feedback about 1 s, notes 45 s, the course end's 3 s hold and the 3 s silent end hold; all are in the prepared timing. **Missing holds: none.** The hook's ring starts at the prepared response hold (convention).
- **Opening frame:** v21's `M8V21FinalFrame` at frame 0; from frame 1 the same table pulses its gold badges, enlarges t and H, the gravity box and legend give way to the painted detector sliding in, and the ring's two dots circle once more to meet in a flash on "You smash particles together".
- **Order:** as the design says, the key notes come before the course end; the course-end frame is the final frame and carries "Next: practise with past HSC papers" (no next video).
- **Plates:** the painted CMS-style detector (scenes 1, 10), the painted linac tunnel (4) and the painted dipole magnet (5, 9, 15, 16). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v22/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 7, `s2.tsx` 8 to 14, `s3.tsx` 15 to 21, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v22`, topic "ACCELERATORS". Registry: after m8-v21.
- New shared kit file: `src/explainer/physics/atom/accelerator.tsx` (`AccRing` top-view ring with an accelerating gap, bending-magnet segments, an optional focusing block and beam dots by angle; `ringPt`; `tubeGaps` and `DriftTubes` with gap field arrows that point forwards or backwards; `DetectorSection` layered cross-section; `BumpHist` schematic histogram). Engines: `sims/field-motion.ts` (`magnetic` runs for the tracker tracks in scenes 10 and 11: opposite signs curve opposite ways, higher momentum curves less) and `sims/waves.ts` (the short wave across the proton, scene 2). The ring and the field ramp are exact arithmetic (B = p/(qr) at fixed r), as the design records.
- Lesson parts: plate specs (dipole; the linac and CMS reused), detector layer colours, `p10` powers of ten.

## Stages built

1 the table's badges pulse, t and H enlarge; the painted detector slides in, gold "made and seen here" with an arrow from H; three chips; the tick; the ring brightens and its dots meet in a flash; the heading underlined; the 3 s ring at the hold. 2 "make it": a collision-energy bar filling to the dashed Higgs line (mc² = 125 GeV), then the top quark's 173 GeV; "see it": a short wave across a proton with the λ = h/p chip; the collision-energy slider sweeping past W 80, Z 91, H 125, t 173 with a live readout; "at least mc²: needed, not enough alone" and "other particles must usually be made too". 3 a proton crossing a 1 MV gap ("1 MeV (1.602 × 10⁻¹³ J)"); the giant 6.8 × 10¹² V bar rising off the frame and crossed; a staircase of small pushes with "energy so far: n × qV". 4 the painted linac tunnel above coded drift tubes (lengthening): arrows forwards while the particle is in a gap, dashed backwards while it is shielded in a tube; the energy bar and "gaps crossed"; "3 km → energy limit", "linac: one pass, limited by length", "always pushed forwards". 5 the ring: the gap pushes each lap (laps and energy readouts), magnets light, v and F perpendicular in a magnet segment, "F ⊥ v: no work", the painted dipole with "bending (dipole) magnet", the focusing block, the framed "electric fields push; magnetic fields steer". 6 the ring beside live E, p, B and "r = 8.0 m (fixed)": first E rises with B held and a ghost orbit widens; then the ramp repeats with B tracking (0.042, 0.21, 0.42, 0.83, 1.25 T) and the orbit stays on the ring; framed r = p/(qB) → B = p/(qr); the synchrotron chip; "in step: synchro-". 7 task strip, equation strip, grouped givens (filled on their cues), the Australian Synchrotron context line; B = 1.60 × 10⁻¹⁸ / (1.602 × 10⁻¹⁹ × 8.0), framed B ≈ 1.25 T; the crossed 2.3 × 10²⁷ T slip; at 0.1 GeV p ÷ 30 → 0.042 T; the ramp graph 0.042 → 1.25. 8 the storage ring with light cones at the bends, the electron's energy bar dropping and topped up, "storage ring: 216 m, 3.0 GeV", beamline stubs, "useful light, costly loss", the 10¹³ chip, "highest energies: protons". 9 the LHC ring (27 km), two beams circling opposite ways and meeting head on in a flash; the painted dipole (≈ 8 T); framed 6.8 + 6.8 = 13.6 TeV; the crossed "6.8 TeV"; the fixed-target extension line (about 0.11 TeV). 10 the painted detector (illustration) beside the coded section: tracker, EM calorimeter, hadron calorimeter and muon chambers labelled in turn; + and − tracks; the momentum chip; a muon track to the outer chambers ringed. 11 the enlarged section: γ (no track, green deposit), e⁻ (curved, stops in the EM layer), μ (all the way out), ν (grey dashed, undetected); visible momenta head to tail failing to close; the dashed closing arrow, "missing momentum → something unseen (for example ν)", "the gap is the clue". 12 the schematic two-photon histogram (100 to 160 GeV, invariant-mass axis with its note) with a bump rising at 125; the gold H "predicted 1964"; "2012: Higgs (two detectors)"; the framed "a real test"; W and Z cells ticked for 1983. 13 a log energy scale with "reached so far" to ≈ 13.6 TeV and "?" beyond; three numbered limit chips; a Higgs ring dissolving into two photons; the grey gravity box; the framed verdict. 14 ring and detector pulsing; the memory card. 15 to 18 cards and brief feedback. 19 key notes with the memory card. 20 and 21 the course end (below).

## Deviations

- Scene 4: the energy readout counts gaps ("gaps crossed", energy bar) rather than inventing per-gap energies.
- Scene 3: the energy readout during the staircase reads "n × qV" (no invented step size); the plates, "W = qV" chip and staircase axes are on screen from the first frame (grader).
- Scene 14: the memory card is on screen from the scene's first frame (grader), with its three lines spoken over it.
- Scene 12: the v21 table thumbnail is reduced to the gold H ring with "predicted 1964" (a thumbnail table's labels would be unreadable).
- Scene 16: the crossed slip shows "≈ 8090 T (over 8000)" so the spoken "over eight thousand" is on screen.
- Course end: the heading reads "Year 12 Physics" and becomes "Year 12 Physics: complete" on "Good luck" (capped); the four thumbnails are coded views (projectile and orbit, a charge circling in a cross grid, a wave above a spectrum strip, a text-free mini table), labelled "Module 5: Advanced Mechanics" and so on. Module names are on screen; no video numbers.
- R1: crossed chips and the giant-voltage cross slate; answers framed in dark ink.

## Final frame (exported as `M8V22FinalFrame` in `s3.tsx`)

`<CourseEnd f={end} final />`: heading "Year 12 Physics: complete"; four coded thumbnails in a row labelled "Module 5: Advanced Mechanics", "Module 6: Electromagnetism", "Module 7: The Nature of Light", "Module 8: From the Universe to the Atom", joined by a thin line with "models tested against evidence"; chip "Next: practise with past HSC papers". The silent end hold shows the same frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

e 1.602 × 10⁻¹⁹, c 3.00 × 10⁸. Rest energies W 80.4, Z 91.2, H 125, t 173 GeV. W = qV: 1 MV → 1 MeV = 1.602 × 10⁻¹³ J; 6.8 × 10¹² V. Ramp at r = 8.0 m: 0.1, 0.5, 1.0, 2.0, 3.0 GeV → p 5.34 × 10⁻²⁰, 2.67 × 10⁻¹⁹, 5.34 × 10⁻¹⁹, 1.07 × 10⁻¹⁸, 1.60 × 10⁻¹⁸ kg m s⁻¹; B 0.0417, 0.208, 0.417, 0.833, 1.25 T; ratio 30. Slip 3.0 × 10⁹ / (1.602 × 10⁻¹⁹ × 8.0) = 2.3 × 10²⁷ T. Australian Synchrotron 100 MeV linac, 130 m booster, 216 m storage ring, 3.0 GeV. Radiation ratio 1836⁴ = 1.1 × 10¹³ (shown as 10¹³). LHC 27 km, 6.8 TeV, ≈ 8 T, 13.6 TeV; fixed target √(2 × 0.938 × 6800) = 113 GeV ≈ 0.11 TeV. A1 3.63 × 10⁻¹⁵ / (1.602 × 10⁻¹⁹ × 2.80 × 10³) = 8.09 T; slip 8093 → 8090 T. Dates 1964, 2012, 1983.

## Grade

`out/explainer/Explainer-phys-y12-m8-v22/grade/` (16-frame sheet): **PASS WITH WARNINGS, 0 failures, 5 warnings** (sparse frames in `electric-push`, `worked-booster`, `synchrotron-light`, `signatures` and `attempt-2`). The first grade failed on four mostly empty opening frames (scenes 3, 8, 9 and 14); fixed by showing from the first frame the plates and field arrows, the "energy gained" readout and the empty staircase axes (scene 3), the electron's energy bar (8), the painted dipole with a caption (9), and the memory card beside a larger ring and detector (14). A label collision in scene 5 (focusing magnets against the energy readout) was moved.

## For root

- Open decision 1 (two detector scenes, no calculation) and 4 (the course-end thumbnail set) built as designed; confirm the set.
- The course end reuses no plates (coded views only), as the design's asset list says.
