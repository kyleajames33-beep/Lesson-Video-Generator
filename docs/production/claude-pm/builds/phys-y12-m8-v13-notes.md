# phys-y12-m8-v13 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v13.md` (Revision 3; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v13/common.ts` imports `work/physics-prebuild/p-y12-m8-v13/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (cue check `work/tsc-scope/cuecheck-m8d.py v13`: 0 problems). Late cues are capped with room for their later offsets, so no change starts in a scene's last 2 s. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v13/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 5,632 characters, 18 scenes; checked scene by scene by script with the build parser rules).
- **Holds.** The design names a 2 s memory-aid hold, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s; the prepared timing has all of them. No hook prediction hold is named. **Missing holds: none.**
- **Opening frame:** v12's `M8V12FinalFrame` at frame 0; from frame 1 the chip fades into the heading, the ring screen moves up and a new spot lands on "a single spot", the painted electron diffraction tube slides in under it with "one electron, one spot", the view pans to the nucleus, the tube slides away and Bohr's dashed circle redraws with its dot and one definite radius.
- **Plates:** phys-y11-guitar-v1 (scenes 3 and 4, standing waves on the top string between the brief 193 nut and saddle anchors), y12p-electron-diffraction-tube-v1 (scene 1). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v13/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v13`, topic "QUANTUM ATOM". Registry: after m8-v12.
- New shared kit files: `src/explainer/physics/atom/quantum.tsx` (hydrogen 1s `psi1s`, `prob1s`; `Cloud1s`, a slice whose opacity is the probability per volume; `cloudRun` and `cloudDots`, detections from the chance engine `sims/chance.ts` as a weighted experiment over thin rings of the slice weighted by ring area times e^(−2r/a₀); `OrbitalSet`, 1s and 2s spheres and three 2p dumbbells on turning axes; `stringAtomPath`, a waves-engine standing wave (`standingMode`, fixed ends) bending into a closed wave round a nucleus; `EnergyWell`, not used here), `src/explainer/physics/atom/headline.tsx` (`MarkedHeading`, the scene heading with hand underlines on chosen words), and `src/explainer/physics/atom/decay.tsx` (shared with v14 to v16; this lesson uses `NucleonCluster` and `clusterLayout`).

## Stages built

1 v12's screen and orbit; a new spot; the painted tube; the pan to the nucleus; Bohr's circle with "Bohr (1913): a definite path" and "one definite radius"; two empty problem chips; "probabilities" and "paths" underlined. 2 the orbit with its dot; chip 1 "works for one electron only" with a helium atom and a schematic prediction strip against helium's measured lines; chip 2 "a wave is spread out" with the orbit's wave running round; dot and wave flickering ("dot or wave?"); "path: particle idea" and "whole wavelengths: wave idea", "a mixed model". 3 a nucleus with Bohr's dashed circle and the painted guitar dimmed; "Schrödinger, 1926"; "λ = h/mv (last time)"; the circle fades with a slate cross; "wave equation (not on the syllabus to solve)"; a 3D wave pattern turning round the nucleus; the guitar brightens; three pattern icons with E₁, E₂, E₃ and "pattern → energy". 4 one, two and three loops on the top string (waves engine) with "only waves that fit: set notes" and the two fixed ends ringed; the string wave bends round the nucleus ("held in by attraction (no fixed ends)"); the icons join a three-level ladder; Eₙ = −13.6/n² eV, framed on "them" with "Bohr: assumed. Schrödinger: comes out of the equation". 5 a slice through hydrogen with the 1s wave; "likely" and "rarely" boxes; the squared curve |ψ|² with "square it"; the probe cube sliding to 37, 53 and 106 pm with live readouts (r, wave size, probability per volume) and "half the wave, a quarter of the chance" at 37 pm; ×2 and ×4 markers; "wave ×2 → chance ×4" framed. 6 a slice with axes and a 100 pm scale bar; identical hydrogen atoms each with one measured point; detections one at a time, then thousands (chance engine) with a live count to 5,000; the 1s density slice under the dots; "motion blur of one electron" crossed; the framed orbital line and a teal ring. 7 two measurements with a dashed line that dissolves and a slate cross ("no path between"); Bohr's circle (radius a₀) laid over the cloud and fading; "better instruments?" crossed ("not a measuring problem"); "orbital = a fuzzy track" crossed beside the framed "orbital = a region of likelihood". 8 1s, 2s and three 2p lobes (x, y, z in turn) on turning axes, "shapes, not to scale", "from the equation, not drawn by hand", the chemistry chip. 9 the comparison table writing row by row, "definite position and path" struck in slate, "Bohr: assumed" and "Schrödinger: derived", the framed spectrum row. 10 the table shrinks; "orbit" and "orbit**al**" large with a dashed circle and a cloud; "all the places it might be"; the framed card. 11 and 12 the assessment board: three strengths with the line-brightness strip and the periodic table's s and p blocks, a brace "three strengths"; three limits with "the price"; "foundational, not a small fix" framed. 13 to 16 cards and brief feedback. 17 handoff (below). 18 key notes with the memory card.

## Deviations

- **Handoff heading carries v14's learner question** (root rule), switched on "So what changes in a nucleus" (capped), so the final frame's heading is v14's question rather than the design's v13 heading.
- R1 throughout: crosses, crossed chips and slip tags slate; the design's red pen marks became slate; the green tick in scene 4 became the dark-ink frame's tick and an amber energy tag.
- Scene 1: the camera pans right (110 px) instead of zooming, so the ring screen and its label stay on the frame; a grey chip "Bohr: a dot on a sharp circle" fills the board before the problem chips (sparse-frame fix).
- Scene 2: helium has no real "Bohr prediction"; the upper strip is labelled "Bohr-style prediction (schematic)" against helium's measured lines (447.1, 471.3, 492.2, 501.6, 587.6, 667.8 nm).
- Scene 4: scene 3's icons, labels and 3D wave stay on from the first frame, and the icons join the ladder with dashed lines (sparse-frame fix).
- Scene 4: the dashed energy well under the nucleus is left out (it crossed the pattern icons and their E labels); the tag "held in by attraction (no fixed ends)" carries the point. The kit's `EnergyWell` stays available.
- Scene 6: the slice is a tinted disc with axes and a 100 pm bar, and a row of five identical atoms (one measured point each) carries "many identical atoms" (sparse-frame fix and the review's "many atoms, not one electron" point). The cloud uses a₀ = 70 px; dots stay at 45% after the cloud is framed.
- Scene 8: 1s, 2s and 2p are three panels (1s and 2s left, the 2p set on turning axes right) instead of one crowded axis set.
- Scene 11: the "before" column is filled from the first frame (quantisation assumed, one electron only, no reason for line brightness), with a Bohr orbit and an orbital icon at the foot; "strengths? limits? verdict?" sits in the judgement column until the strip arrives.
- Scene 17: a Bohr "little planet on a path?" orbit occupies the inset's place until the zoom (crossed on "clouds of probability"); the 1s cloud uses a₀ = 190 px so it reads as a large cloud.
- Feedback rows wrap (two lines) instead of shrinking below 38 px.

## Final frame (exported as `M8V13FinalFrame` in `s3.tsx`)

`<HandoffBoard13 f={end} final />`: heading "What changes in a nucleus during alpha, beta and gamma decay?"; a large teal 1s cloud (a₀ = 190 px, opacity proportional to probability per volume) at (470, 560) zoomed 1.2 with a red nucleus dot; two grey guide lines to an inset circle at (1360, 520), R 230, holding 10 red "p" and 12 grey "n" discs (trembling slightly), label "nucleus: protons and neutrons (not to scale)"; three dashed arrows "α?" (amber), "β?" (navy) and "γ?" (amber); scale tag "atom ≈ 10⁻¹⁰ m, nucleus ≈ 10⁻¹⁵ m: about 10⁵ times smaller"; label "the atom: a cloud of probability"; chip "Next: what changes in a nucleus during alpha, beta and gamma decay?". v14 opens on this frame.

## Numbers (all from `common.ts` or the kit, checked against "Numbers used")

Probe (hydrogen 1s, a₀ = 52.9 pm): r = 0, 36.7, 52.9, 105.8 pm (shown 0, 37, 53, 106) give wave size 1.00, 0.50, 0.37, 0.14 and probability per volume 1.00, 0.25, 0.14, 0.02; ×2 and ×4 markers at 36.7 and 73.3 pm. Levels −13.6, −3.40, −1.51 eV. Sizes 10⁻¹⁰ and 10⁻¹⁵ m, ratio 10⁵. Measurements 5,000. Dates Bohr 1913, Schrödinger 1926, Born 1926.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v13` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 7 warnings** (sparse hook, orbital-from-dots, no-path, orbit-vs-orbital, feedback-2 and handoff frames; "few pictures"). Earlier runs failed on mostly empty hook, allowed-energies, orbital-from-dots, no-path, contribution-strengths and handoff frames and on the hook's off-frame label; all fixed (see Deviations). Spot stills checked the guitar overlay (the standing wave runs from the nut to the saddle), the bent string wave and the orbital shapes. Report: `out/explainer/Explainer-phys-y12-m8-v13/grade/Explainer-phys-y12-m8-v13-grade.md`.

**Honest grade: B on provisional timing.** The string bending into the atom, the probe readouts, the detections building the cloud and the orbit dissolving carry the argument; motion needs judging at playback speed.

## For root

- Open decision 1 (uncertainty principle) is left out, as the route says; open decision 2 (the "al" memory aid) is built as designed ("is for", not "comes from").
- The 2p lobes and 1s/2s spheres are illustrative shapes (tagged "shapes, not to scale"); the 1s slice and the detections are plotted from the 1s formula.
- m8-v14 opens on `M8V13FinalFrame`.
