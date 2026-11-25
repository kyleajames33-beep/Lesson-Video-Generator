# phys-y12-m8-v18 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v18.md` (Revision 3 with the 21 November root fix; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v18/common.ts` imports `work/physics-prebuild/p-y12-m8-v18/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`, about 523 s. Every cue resolves (cue check: 0 problems); late cues capped with room for their offsets.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,435 characters, 19 scenes; checked scene by scene by script).
- **Holds.** The design names the hook's 3 s prediction, a 2 s memory-aid hold, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s; all are in the prepared timing. **Missing holds: none.** The prepared hook hold sits at the scene end, after the spoken answer and the learner question; as instructed, the 3 s countdown ring starts at that response hold (the only change in the last 2 s).
- **Opening frame:** v17's `M8V17FinalFrame` at frame 0; for 2 s the handoff plays backwards to the moment before the neutron arrives (the "?" marks and Q chips go), then the board clears to one neutron and one uranium-235 nucleus (same cluster, place and size).
- **Plates:** the painted OPAL pool (scenes 1, 12, 16, 17). The reused power-station plate is not used: both delivered versions show a smoking chimney, and the design allows the text contrast instead (scene 12 says "power reactor: heat → steam → turbine"). **Plate requests: none required** (optional: a power-station plate with a steam turbine hall and no smoke, about 1600 × 800, side view, transparent, if root wants the picture contrast back).

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v18/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 13, `s3.tsx` 14 to 19, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v18`, topic "FISSION". Registry: after m8-v17.
- New shared kit (added to v17's new `src/explainer/physics/atom/fission.tsx`): `genTreeExact`, `GenTree`, `GenBars` and `barY` (log-scale bars), `Core` and `rodAt` (coded core with rods to a depth), `FuelLump` and `blobPath`, `AtomLattice` (heating). Engines: `sims/chain.ts` (scene 11), `sims/collisions.ts` through `neutron.tsx`'s `headOnRun` (scene 9). `qvalue.tsx`'s `StackColumn` draws the mass bars.
- Lesson parts: the OPAL plate spec and anchors (core (718, 836), water surface y 210, floor y 960, measured from the native pixels), `Neutron` (with a fast-neutron streak), water, fuel and slate colours. `RepelInset` in `s3.tsx` (the handoff's two repelling nuclei) takes optional gap, arrow, box and label settings for v19 (defaults unchanged).

## Stages built

1 rewind; one neutron in, the nucleus splits and three neutrons leave ("1 in, 2 or 3 out"); three prediction chips; the spares head for three more uranium-235 nuclei; "controlled" underlined, the OPAL pool fades in ("controlled: OPAL, Sydney"); the 3 s ring at the hold. 2 a large uranium-235 cluster absorbs a slow neutron, relabels "²³⁶U* (excited)" and glows ("extra energy"), stretches, pinches and splits; "fission fragment" labels; three neutrons leave; the equation (skeleton from the first frame), A and Z tallies ticking, the framed equation, the site's fission definition, the "usually 2 or 3 (average ≈ 2.4)" tag. 3 the curve with ²³⁵U 7.59 (≈ 7.6), ¹⁴¹Ba 8.33 (≈ 8.3), ⁹²Kr 8.51 (≈ 8.5), the amber arrow up and to the left, "more tightly bound → less mass", broken mass bars with the Δm sliver glowing, E = Δmc² framed. 4 the working (task strip, equation strip, grouped givens, a mini split), "atomic masses: 92 electrons each side", rows on their spoken numbers, "count all 3 neutrons", 173 MeV framed, "= 2.78 × 10⁻¹¹ J", the crossed "0.186 × (3.00 × 10⁸)² = 1.67 × 10¹⁶ J", the binding check 173.3 MeV. 5 fragments crash through a lattice of atoms that jiggle faster; a temperature readout "rising"; β and γ from the fragments; the 173 + later decays ≈ 200 MeV bar; methane's 9.2 eV as a hairline; 2.2 × 10⁷ framed. 6 the exact tree (1, 2, 4, 8), generation labels, the counter to "Gen 11: 2¹⁰ = 1024" with generations 5 to 8 as dot rows. 7 the k slider and a log-scale bar graph (k 1.00, 0.80, 1.00, 1.50; generation 10: 134, 1,000, 38,443), the three regime tags, "critical = steady, not dangerous", "even k = 1.01: × 2.7". 8 a lump of fuel: escape, capture by ²³⁸U, fission; a "where a neutron can go" panel; small lump (k < 1) and larger lump (k = 1); critical mass framed. 9 fast neutron passing, slow neutron captured; the site's moderator sentence; water with protons; the equal-mass head-on hit (collisions engine); a zig-zag with a collision counter to 18 and a shrinking speed bar. 10 the coded core: rods in (k 0.98, power falling), out (1.02, rising), held (1.00, steady) with a power trace; neutrons into the rods. 11 the chance-engine chain (seed 11; 1, 2, 4, 10, 18, 37) fanning out, "each generation ≪ 10⁻⁶ s", the flash, both framed summary chips and "k > 1 alone ≠ explosion". 12 the OPAL pool with "≈ 13 m", five coded rods, k = 1, 20 MW, "OPAL makes electricity" crossed, the isotope chip, "neutrons for medicine". 13 the small core pulsing water, rods and k = 1 beside the memory card. 14 to 17 cards and brief feedback. 18 handoff (below). 19 key notes with the memory card.

## Deviations

- **Handoff heading carries v19's learner question** (root rule), switched on "So why can fusion release energy" (capped).
- Quoted definitions use the site lesson's exact wording (longer than the design's chips): fission, chain reaction, k ("go on to cause a further fission"), critical mass, moderator and control rods.
- The k graph uses a labelled log scale so 134 and 38,443 both fit.
- Scene 5: the temperature readout says "rising" (no invented number); methane's bar is a hairline tagged "too small to see here".
- Scene 8 adds a "where a neutron can go" panel; scene 10 shows power as a trace; scene 12 adds the crossed "OPAL makes electricity" (a misconception the design's teaching checks name).
- Protons stay red in every cluster (continuity with v16 and v17) rather than rose.
- On-screen references say "an earlier video" or "last time".
- R1: crossed chips and slip tags slate.

## Final frame (exported as `M8V18FinalFrame` in `s3.tsx`)

`<HandoffBoard18 f={end} final />`: heading "Why can fusion release energy despite repulsion between nuclei?"; the binding curve (box 200, 300, 1300 × 470, compressed A axis) with ²H, ³H, ⁴He, "peak near iron (⁵⁶Fe: 8.8 MeV)", ⁹²Kr, ¹⁴¹Ba, ²³⁵U; a solid amber arrow up and to the left from ²³⁵U to the fragments, "fission (this video)"; a dashed amber arrow from ²H and ³H up to ⁴He with "?" and "fusion?"; the inset of a ²H and a ³H cluster with red repulsion arrows (`INSET18` at 620, 680); chip "Next: why can fusion release energy despite repulsion between nuclei?". v19 opens on this frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

n 1.008665, ¹H 1.007825, ²³⁵U 235.043930, ¹⁴¹Ba 140.914403, ⁹²Kr 91.926173, ¹⁴⁰Xe 139.921646, ⁹⁴Sr 93.915356 u. Split 236.052595 against 235.866571 u, Δm 0.186024 u, 173 MeV, 2.78 × 10⁻¹¹ J; slip 1.67 × 10¹⁶. Binding 1783.9 (7.59), 1174.0 (8.33), 783.2 (8.51), check 173.3. Methane 9.2 eV, ratio 2.2 × 10⁷. 2¹⁰ = 1024. Generation 10: 134, 1,000, 38,443; 1.01¹⁰⁰ = 2.7. Collisions 18.2; 2 MeV → 0.03 eV (0.025). k 0.98, 1.02, 1.00. OPAL 20 MW, ≈ 13 m (12.8), 5 rods. A1 x = 2, 235.854332 u, Δm 0.198263 u, 185 MeV; slip 2.216 u → 2060 MeV.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v18` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 6 warnings** (hook frame mostly empty mid-prediction (question scene, warning only); sparse fission-event, neutron-losses, feedback-1, attempt-2 and notes frames). Earlier runs failed on mostly empty fission-event, neutron-losses and feedback-1 frames and on small picture labels; all fixed (equation skeleton and fragment labels from the start, a fates panel, placeholders, 40 px picture labels). Rods were shortened so they never reach the heading. Spot stills checked every scene end. Report: `out/explainer/Explainer-phys-y12-m8-v18/grade/Explainer-phys-y12-m8-v18-grade.md`.

**Honest grade: B on provisional timing.** The rewind, the pinching nucleus, the k bars changing with the slider, the head-on hit, the sliding rods with the power trace and the random chain carry the argument.

## For root

- Hook countdown: the ring starts at the prepared response hold (after the spoken answer and the learner question), as instructed. The design wants the pause after "Make your prediction"; v04 to v10 started their rings on "prediction". Choose one convention for the voiced take.
- Power-station plate dropped (smoke); text contrast kept.
- m8-v19 opens on `M8V18FinalFrame`.
