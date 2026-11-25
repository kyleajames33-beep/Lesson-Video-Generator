# phys-y12-m8-v05 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v05.md` (Revision 3 with the 21 November root label edit and the 24 November coherence fix; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v05/common.ts` imports `work/physics-prebuild/p-y12-m8-v05/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (`work/tsc-scope/cuecheck-m8b.py v05`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v05/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,309 characters, 17 scenes).
- **Holds.** (1) Hook 3 s prediction: the prepared hold sits at the scene end, after "light nuclei?"; the design wants it on "prediction" with the answer following at once (misplaced; built as v04: ring over the answer, tick after the ring). Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. The scene 5 curve marker runs inside its narration (no hold named).
- **Opening frame:** v04's `M8V04FinalFrame` at frame 0; from frame 1 the tags, the "energy?" hand tag and the HR board fade while the core inset (same geometry) grows to the centre in front of the painted Sun; the HR diagram returns as a corner thumbnail; the heading is already this lesson's question (v04's handoff); the "Next" chip fades on "release energy by combining light nuclei" (capped).
- **Plates:** Sun, molecular cloud, hot-blue star. **Plate requests: none.** The underground detector in scene 10 is the design's coded outline (a sphere in a tank, tagged "schematic", no people).

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v05/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 11, `s3.tsx` 12 to 17, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v05`, topic "FUSION IN STARS". Registry: after m8-v04.
- New shared kit file: `src/explainer/physics/atom/nuclear.tsx` (binding-energy curve on a compressed square-root A axis with AME2020 values `BE_POINTS`, `bcX`, `bcY`, `bindingAt`, `BindingCurve`; `NucEq`/`NucSym` nuclear equations with mass number over atomic number; `Tally` conservation line with a green tick; `NeutrinoDot`). Reused by v06.
- Lesson parts: pp and CNO equation terms, `CoreInset`, `MassBars` (drawn gap, tagged), CNO ring geometry (`RingTrack`, `ringAt`, `NucDisc`).
- Scoped typecheck: `work/tsc-scope/tsconfig.m8-v05-v08.json` (clean apart from the known `kit.tsx` and `math/studio` unused-import errors outside scope). Cue check: `work/tsc-scope/cuecheck-m8b.py`. Grade wrapper with the stills lock: `work/tsc-scope/grade-m8b.sh`.

## Stages built

1 core inset grows before the painted Sun; "4 in", "1 out"; 3 s ring with three chips; tick on "less mass"; teal bars 4 × ¹H against ⁴He with the gap drawn × 10 and "0.7% less"; "missing mass → energy". 2 the painted cloud shrinks into a glowing ball under navy arrows; live red core-temperature readout from about 10 K through 10⁴ and 10⁶ K to 10⁷ K; amber flash on "ignites"; amber pressure arrows grow to equal the navy arrows; the ball becomes the painted Sun; a thermostat loop (core swells, readout dips, arrows shorten and recover). 3 a repelled pair on the field motion engine (1/r² repulsion, red arrows growing as they near); a particle-box run (activation energy for the repulsion) where failed collisions flash grey and the "pairs that fused (model)" count rises only after the box is heated on "hot, dense core"; a touching pair with "≈ 10⁻¹⁵ m" joins; the Sun's 1.5 × 10⁷ K; a 10-billion-year bar. 4 springs pull two protons and two neutrons together; ball-in-a-hole inset with amber packets leaving; mass bars (gap × 10, mass defect Δm); "binding energy = Δm c²" chip; Δm = 0.030377 u, framed 28.3 MeV, 7.1 MeV per nucleon. 5 the binding curve (compressed scale, labelled) draws as the live marker rides it with nuclide, A and B.E. per nucleon readouts; peak ring; falling-side tag; climb chip; ¹H at 0; the big ¹H → ⁴He climb with the climb bar. 6 three step lanes (dashed slots from the first frame) with discs joining, p → n, e⁺ and ν leaving, γ leaving, "× 2" bracket, two protons set free; the painted Sun. 7 A and Z tallies under step 1's two sides tick; silent ticks for steps 2 and 3; framed net equation; positrons meeting electrons and becoming γ packets. 8 working layout (task, equation and givens strips), atomic-mass chip, rows to framed 26.7 MeV, 4.28 × 10⁻¹² J, slate-crossed u-as-kg slip, 0.71% (≈ 0.7%), Sun's rate. 9 the CNO ring with a carbon disc travelling round and back, numbered stations and a numbered equation list, decay rows pulsing on "neutrino", catalyst chip, framed net equation, 26.7 MeV. 10 one shared separation d, arrows 1 and 6 long, threshold readout, the Sun's core readout, share bar (pp ≈ 99%, CNO ≈ 1%), detector outline with neutrinos, Borexino chip, massive star share bar (illustrative). 11 discs merging, sliver bars, carbon rolling round the ring, hand lines. 12 to 15 cards and brief feedback (feedback 1 adds mass bars with the gap × 100). 16 binding curve with the solid main-sequence arrow, a helium-filled core, dashed "?" steps to ¹²C, ¹⁶O and the iron peak, the Sun and the hot-blue star with "how far up?"; heading changes to v06's question. 17 key notes with the memory card.

## Deviations

- **Handoff heading carries v06's learner question** (root rule), on "So how does stellar mass change" (capped).
- Binding curve: a compressed (square-root) mass-number axis, labelled "compressed scale", so the light nuclei have room; values AME2020 with the helium-4 bump (lithium to boron points added between helium-4 and carbon-12).
- Mass bars: the real gaps (0.7%, 0.75%, 0.23%) are invisible at bar size, so each gap is drawn × 10 (× 100 in feedback 1) and tagged.
- Scene 2 readout starts at about 10 K (a cold cloud) rather than at 10⁴ K, then climbs as the design states.
- Scene 9: the six equations are a numbered list beside the ring (numbers at the ring's arcs) instead of slots round the ring, which did not fit at a readable size; the hot-blue star is at the upper right.
- Scene 10: the Sun and the massive star are on screen from the first frame (sparse-frame fix); the HR thumbnail highlight on "dominates" was left out (space).
- Hook: no heading underline; the heading was already this lesson's question.
- Spoken roundings shown beside exact values: "(≈ 0.0287 u)", "(≈ 4.0026 u)", "(≈ 0.7%)".

## Final frame (exported as `M8V05FinalFrame` in `s3.tsx`)

`<HandoffBoard05 f={end} final />`: heading "How does stellar mass change the elements a star can make?"; the binding curve (box 160, 230, 1260 × 530; compressed A axis 0 to 240; 0 to 9 MeV; labels ¹H, ⁴He, ¹²C, ¹⁶O, "peak near iron (⁵⁶Fe: 8.8 MeV)", ²³⁸U); solid amber arrow ¹H → ⁴He tagged "main sequence"; three dashed grey arrows with "?" from ⁴He to ¹²C, ¹⁶O and ⁵⁶Fe; a core inset (1660, 330, r 110) of ⁴He nuclei, "core: mostly ⁴He", "core hydrogen used up"; painted Sun (620, 640, d 140) and hot-blue star (1240, 620, d 230), each with an ink hand tag "how far up?"; chip "Next: how does stellar mass change the elements a star can make?". Props `marks` and `core` let v06 fade the tags and the inset.

## Numbers (all from `common.ts`, checked against "Numbers used")

4 × 1.007825 = 4.031300 u; Δm 0.028697 u; 26.7 MeV; 4.28 × 10⁻¹² J; 0.71%; Sun about 9 × 10³⁷ s⁻¹; ⁴He binding 0.030377 u, 28.3 MeV, 7.1 per nucleon; slip 2.58 × 10¹⁵; marker 0, 1.11, 7.07, 7.68, 7.98, 8.79, 7.57; cores 10⁷, 1.5 × 10⁷, 1.7 × 10⁷ K; 1.3 M☉; CNO 1%; A1 6.032058, 6.018253, 0.013805 u, 12.9 MeV, slip 2.029 u → 1890 MeV.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v05` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 7 warnings** (sparse frames in ignition, pp chain, conservation, memory aid, feedback 1 and attempt 2; "few pictures" for the lesson). Earlier runs failed on prescripts and particle labels under 18 px, on sparse pp-chain, CNO-temperature and feedback-1 frames and on CNO labels; all fixed (prescripts 0.55 em with equations at 34 px or more, a numbered CNO list, plates on screen from the first frame, mass bars in feedback 1). Report: `out/explainer/Explainer-phys-y12-m8-v05/grade/Explainer-phys-y12-m8-v05-grade.md`.

**Honest grade: B on provisional timing.** The live curve marker, the collapse loop, the particle box and the CNO carbon disc carry the ideas; several set-ups are sparse at sample frames and need a playback-speed look once voiced.

## For root

- Hook pause position (as v01 and v04).
- Open decisions 1 (atomic masses) and 2 (ignition first) built as designed.
- m8-v06 opens on `M8V05FinalFrame`.
