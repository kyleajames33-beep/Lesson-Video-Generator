# phys-y12-m8-v19 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v19.md` (Revision 3 with the 21 November root label edit and root fix; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v19/common.ts` imports `work/physics-prebuild/p-y12-m8-v19/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`, about 478 s. Every cue resolves (cue check: 0 problems); late cues capped with room for their offsets.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 5,770 characters after the 21 November label edit, 18 scenes; checked scene by scene by script).
- **Holds.** The design names the hook's 3 s prediction, a 2 s memory-aid hold, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s; all are in the prepared timing. **Missing holds: none.** As in v18, the hook's ring starts at the prepared response hold, which sits after the spoken answer and the learner question.
- **Opening frame:** v18's `M8V18FinalFrame` at frame 0; from frame 1 v18's board fades (its inset left out) while the same inset of ²H and ³H grows to the centre and a small text-free copy of the curve sits at the top right (a scaled copy of the full board would put its labels below 26 px).
- **Plates:** the painted Sun (scenes 1, 10), the painted tokamak (11, 15, 16) and the steel ball (8). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v19/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v19`, topic "FUSION". Registry: after m8-v18.
- New shared kit file: `src/explainer/physics/atom/fusion.tsx` (`SepBox`, `SepAxes`, `sepX`, `sepY`, `fnPath` for force against separation; `Hill`, `hillY`, `hillX`, `hillXin`, `hillPath` for the hill and valley, with a falloff power so a compressed schematic can be labelled as such; `torusPt` and `HelixLines` for helical field lines round a torus). Engines: `sims/field-motion.ts` (the approach under 1/r² repulsion, scene 1), `sims/particle-box.ts` with `ParticleBoxView` (scene 4: two species, a reaction with a high activation energy, the temperature rising on "a hundred and fifty million kelvin" and the volume shrinking on "a dense fuel"; "fusions (model)" readout from the run). Also `qvalue.tsx`'s `Ledger` and `StackColumn`.
- Lesson parts: the tokamak plate spec and plasma-ring anchors (measured from the native pixels), cluster layouts, a filled-head `Arrow`.

## Stages built

1 the inset grows to the centre; the nuclei edge together on the field motion run as the red arrows lengthen; labels "²H (deuterium): 1p + 1n" and "³H (tritium): 1p + 2n"; three prediction chips; the tick and the painted Sun ("the Sun runs on fusion"); "despite repulsion" underlined; the 3 s ring at the hold. 2 the separation slider (10, 5, 3, then 2.4 fm) with live separation, force and repulsion-energy readouts (2.3, 9.2, 25.6 N; 0.14, 0.29, 0.48 MeV); the red repulsion curve, the navy short-range attraction (schematic) and navy arrows outgrowing the red ones; then the energy curve (true 1/r outside 3 fm, schematic well): the Coulomb barrier chip and both regions shaded. 3 the working (task strip, F = kq₁q₂/r², grouped givens), 25.6 N ≈ 26 N framed, the crossed "r = 3.0 → F = 2.6 × 10⁻²⁹ N", the 2.6 kg weight (about two and a half) on a 3.3 × 10⁻²⁷ kg nucleus, the atom-scale line (1.1 × 10⁹ times smaller), the hilltop 0.48 MeV. 4 the particle box beside a compressed hill: 1.5 × 10⁷ K (1.9 keV, 0.4%) then 1.5 × 10⁸ K (19.4 keV, 4.0%); a typical nucleus climbs a little and rolls back; the grey classical path over the top; a faster one tunnels through at an eighth of the height; the "needs" chip; fusions (model) against collisions. 5 hill against no hill: the neutron drifts in on the flat approach and drops into the well; fusion's long speed bar; the framed difficulty chip. 6 binding bars ²H 2.22 (about 2.2), ³H 8.48 (about 8.5), ²H + ³H stacked, ⁴He 28.30; per-nucleon values; 7.07 (about seven); 28.30 − (2.22 + 8.48) = 17.6 MeV framed with a brace; the curve with the arrow from the light side. 7 the D-T working with A and Z tallies ticking, 17.6 MeV framed, "two routes, one Q". 8 the ledger beside the hill: kinetic energy in kept, + Q, rest mass down, equal totals; classical and tunnelling paths; the painted steel ball past a hump into a valley; K_out = K_in + 17.6 MeV framed. 9 equal and opposite momentum, the neutron about four times faster, 14.0 and 3.5 MeV readouts, the wall heating, both per-nucleon chips. 10 the painted Sun with inward gravity arrows and a coded core inset that packs, 1.5 × 10⁷ against 1.5 × 10⁸ K bars (ten times). 11 the painted tokamak with coded helical field lines (seven turns), a charge spiralling along one, the crossed "fuel touching a wall", the plasma chip, the B-into-page circle inset, ITER and ANSTO tags. 12 the hill with the tunnelling marker dropping into the valley, "+ 17.6 MeV", the memory card. 13 to 16 cards and brief feedback. 17 handoff (below). 18 key notes with the memory card.

## Deviations

- **Handoff heading carries v20's learner question** (root rule), switched on "So what evidence shows" (capped).
- Scene 9: the neutron's share shows "≈ 14.0 MeV": by momentum with AME2020 masses it is 14.05 MeV, which rounds to 14.0 at three figures; the design's "≈ 14.1" comes from the mass-number estimate (14.07). Spoken "about fourteen" unchanged.
- Scene 4's hill is a compressed schematic (labelled) so the 4% and one-eighth heights are visible; scene 2's hill keeps the true 1/r shape outside 3 fm. The slider's third readout is labelled "repulsion energy at this r", since at 2.4 fm the strong force has taken over.
- Scene 10: the Sun's core inset is coded here (v05's inset was not reused). Scene 17: the gold-foil thumbnail is a simple coded view (the `m8-rutherford` family's labels would be unreadable at thumbnail size), tagged "an earlier video: probing an atom found the nucleus"; helium-4's nucleons are drawn spread with zigzag springs, labelled "(springs: a picture)".
- No module or video numbers on screen (root label edit); "an earlier video" and "last video" instead.
- R1: crossed chips and slip tags slate; repulsion arrows keep their subject red.

## Final frame (exported as `M8V19FinalFrame` in `s3.tsx`)

`<HandoffBoard19 f={end} final />`: heading "What evidence shows that protons and neutrons have smaller constituents?"; a coded gold-foil thumbnail at the far left with one large-angle path highlighted and "an earlier video: probing an atom found the nucleus"; a helium-4 nucleus (two red, two grey discs) with navy springs, one proton lifted out and enlarged at the right (radius 230 px, plain red with "?"), "one proton, enlarged: solid, or made of parts?"; a navy electron dot with a dashed arrow aimed at the proton, "probe a proton?"; chip "Next: what evidence shows that protons and neutrons have smaller constituents?". v20 opens on this frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

k 8.99 × 10⁹, e 1.602 × 10⁻¹⁹, 1 u = 931.5 MeV/c² = 1.661 × 10⁻²⁷ kg. F at 10, 5, 3 fm 2.31, 9.23, 25.6 N; U 0.144, 0.288, 0.480 MeV; 2.62 kg; deuteron 3.34 × 10⁻²⁷ kg; 2.3 × 10⁻⁸ N at 10⁻¹⁰ m, ratio 1.1 × 10⁹; slip 2.6 × 10⁻²⁹ N. (3/2)kT 1.94 keV (0.40%), 19.4 keV (4.0%). Binding ²H 2.224 (1.112), ³H 8.482 (2.827), ⁴He 28.296 (7.074), gain 17.59. D-T 5.030151 against 5.011268 u, Δm 0.018883 u, 17.6 MeV. Shares 14.05 and 3.54 MeV; speed ratio 3.97; per nucleon 3.52 and 0.85. A1 4.028204 against 4.024694 u, Δm 0.003510 u, 3.27 MeV; slip 1.012 u → 943 MeV. ITER 150 million °C.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v19` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 5 warnings** (hook frame mostly empty mid-prediction (question scene, warning only); sparse energy-share, feedback-1 and notes frames; "few pictures"). Earlier runs failed on an over-wide binding-energy line and on mostly empty energy-share and feedback-1 frames; all fixed (the line split, a reaction strip and larger nuclei, placeholders). Spot stills checked every scene end. Report: `out/explainer/Explainer-phys-y12-m8-v19/grade/Explainer-phys-y12-m8-v19-grade.md`.

**Honest grade: B on provisional timing.** The slider with live readouts, the particle box heating up, the nucleus rolling back against the one tunnelling through, the bars where helium outgrows the reactants, the ledger and the spiralling charge carry the argument.

## For root

- Hook countdown placement as in v18 (ring at the prepared hold, after the answer).
- The neutron's share: 14.0 MeV on screen (design 14.1); confirm.
- Open decision 1 (barrier value without its formula) built as designed: the value is stated with "(about half)", and the force calculation carries the scene.
