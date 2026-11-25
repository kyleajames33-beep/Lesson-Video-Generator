# phys-y12-m7-v06 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v06.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v06/common.ts` imports `work/physics-prebuild/p-y12-m7-v06/lesson.json` on one marked line and exports `PROVISIONAL = true`. 77 cue calls, all resolve; late cues capped (no change in a scene's last 2 s). Switch the import to `docs/production/claude-pm/lessons/p-y12-m7-v06/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design.** The prepared `lesson.json` and the brief 259 source audit carry the current design narration (6,253 characters, 16 scenes; checked scene by scene by script). The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Hook hold.** The 3 s ring sits on the provisional hold at the end of the hook (after "Let's see why"); it moves with the measured take. The answer tick lands on "It's bright" before the provisional hold.
- **Opening frame:** v05's exported `M7V05FinalFrame` at frame 0. From frame 1 its two-slit view keeps moving from v05's end phase; on "If light were a stream of particles" it shrinks to the lower left under the painted bench strip (laser, slide holder with a coded double slit, screen carrier) and a face-on screen view.
- **Plates:** optical bench, laser module (lifted on a coded block as in v05), slide holder, screen carrier, metre rule, filament lamp (two copies), laser module alone (coherence panel). Uniform scale only. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v06/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 16, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v06`, topic "INTERFERENCE", accent `#8e3b78`. Registry: after m7-v05.
- Shared (new files from v04 and v05): `physics/light/bench.tsx` (`OpticsBench` with a coded double slit or ruled slide, `ScreenView`, `PatternGraph`, `METRE_RULE`), `physics/light/wavefronts.tsx` (`TwoSlitWaves` with crests solid and troughs dashed, per-slit colours and a phase jitter for incoherent sources; `ApertureWaves`; `Barrier`). Engine functions used directly: `sumAt` and `displacement` (superposition), `doubleSlitBrightness`, `gratingBrightness`, `fieldAt` (through `ApertureWaves`).
- Lesson parts: `LineWave` (a wave along a line from the engine), `pdAt` and `yForPd` (probe point P placed where the path difference is 0, 1λ or ½λ), `PdMeter` (the rose path-difference bar), `CycleAt` (two waves at P and their sum), `VBands` (a vertical band screen), `WhiteBands` (five wavelengths overlapping, schematic), `twoSlit`.

## Stages built

1 v05's view shrinks under the bench; the face-on screen with a grey particle prediction (two strips) crossed in slate, the observed bands brightening, one dark band ringed, prediction chips, the central band ringed, "light + light = dark?". 2 two waves (teal, plum) and their sum from the engine: in phase (sum doubles, bright patch, "crest + crest"), wave 2 sliding half a cycle (flat sum ringed, dark patch, "crest + trough"), the site's interference definition. 3 the two-source stage (crests solid, troughs dashed, "not to scale"); P with orange path lines; the path-difference bar and readout 0, 1λ, ½λ as P moves; the in-step or cancelling waves at P; the screen's bands revealed outwards; "half a wave behind"; the mλ and (m + ½)λ chips; slate-crossed "dark = no light arrives" with orange arrows "both arrive". 4 the painted laser feeding two slits (steady bands), Young's single slit added (grey), two waves at the slits in step; then two painted lamps whose pattern jumps and washes out to an even glow, slate cross; the site's coherent-sources definition. 5 the slit close-up: near-parallel orange rays, the navy straight-ahead line and θ, the dashed perpendicular, the rose extra-path side labelled d sin θ (ringed, "the extra bit"), a far-screen thumbnail, the strips and the framed d sin θ = mλ. 6 pull back to slits, screen and the big triangle (L, x, θ; "not to scale: real angles are tiny"); "so far: d sin θ = mλ", tan θ = x / L, small θ chip, d (x / L) = mλ, x = mλL / d, framed Δx = λL / d; the 0.145° row ticked and the 30° row slate-crossed; equal Δx brackets at m = 1, 2, 3 ("same step every time"); the conditions chip. 7 the live band pattern in the light's true colour with its Δx bracket and λ, L, d sliders (0.90, 1.30, 2.60, 5.20, 2.60 mm); slate-crossed "slits closer → bands closer"; "d on the bottom", "Δx ∝ 1/d", d ringed. 8 task, equation and grouped givens; the red bands with a 6.1 mm bracket; stage 1 and the framed 6.1 mm; slate-crossed 6.1 × 10⁻⁶ m; the small-angle check chip; the task changes, stage 1 shrinks (solid), the measured 3.8 mm given, stage 2 and the framed 396 nm with a violet swatch. 9 the bench with the double slit; the face-on screen over the painted metre rule; one spacing with a large ± 0.5 mm, then ten spacings with the error shrinking ("error ÷ 10", ringed); Δx = (10Δx) / 10; the L bracket; the quoted-d chip; white light bands (schematic); the safety chip. 10 the memory card, the path-difference bar sweeping over its bands, λ and L growing and d shrinking in the formula. 11 to 14 question cards (green bench thumbnail with "L = 1.8 m (not to scale)"; two slits and a screen with P on the second dark band) and brief feedback (the green bands' Δx bracket closing from 3.2 to 1.6 mm; ½λ and 1½λ marked). 15 the two-slit screen and brightness (engine), "centre?" bracket and "soft edges" (both fade before the hold), the painted slide holder with a ruled slide, the dashed sketch of sharp grating peaks (engine `gratingBrightness`, 16 slits) at the same angles with connectors, "same d: same places", "?" (final frame). 16 five notes and the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "How does a grating" (capped) it changes to v07's question.
- **Site definitions quoted exactly:** the interference chip (scene 2) uses site lesson 3's key term ("the superposition of waves from different sources producing regions of reinforcement and cancellation"; design "waves adding or cancelling") and the coherence chip (scene 4) uses "Coherent sources: sources with the same frequency and a constant phase relationship" (design "same f, constant phase difference").
- Scene 1's top view keeps v05's teal for both slits; slit 2 turns plum from scene 3 (the design's colour key applies from the two-source stage).
- Scene 4 shows two in-step waves at the slits on the right before the lamps arrive; scene 5 adds a far-screen thumbnail and a "path difference = ?" strip; scene 6 carries "so far: d sin θ = mλ" until the tan strip. All fill set-ups before their cue without adding narration.
- Red pen marks and crossed chips are slate (R1); the safety chip stays red; violet only for the 396 nm swatch.
- White light is drawn as five overlapping wavelengths (schematic), not a measured spectrum.

## Final frame (exported as `M7V06FinalFrame` in `s3.tsx`)

`<HandoffBoard f={end} final />`: heading "How does a grating let us measure wavelength?"; a red two-slit screen strip at (560, 230, 1240 x 70) and its brightness curve (cos² bands) at y 340 to 530 on an angle axis; the painted slide holder at (110, 380, 330 wide) with a coded ruled slide; a dashed sketch of sharp peaks at y 640 to 830 at exactly the same angles, dashed connectors between the graphs; "same d: same places", "?" and "many slits, same d (sketch)"; chip "Next: how does a grating let us measure wavelength?" at (96, 890). The "centre?" bracket and "soft edges" tag fade before the hold, so they are not in the final frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

Worked example: (632.8 × 10⁻⁹ × 2.4) / (0.25 × 10⁻³) = 6.075 × 10⁻³ ≈ 6.1 mm; slip 6.075 × 10⁻⁶ ≈ 6.1 × 10⁻⁶ m; sin θ₁ = 2.5312 × 10⁻³, θ₁ = 0.14503° (0.145° in the table, 0.15° in the chip), sin θ = tan θ = 0.002531; 30°: 0.500 and 0.577; reverse 3.958 × 10⁻⁷ ≈ 396 nm. Sliders: 0.90, 1.30, 2.60, 5.20, 2.60 mm. A1: 3.192 ≈ 3.2 mm; doubled d 1.596 ≈ 1.6 mm; wrong 6.384 ≈ 6.4 mm. A2: 1.5 × 600 = 900 nm = 9.0 × 10⁻⁷ m. Reading error ± 0.5 mm (illustrative).

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v06` (25 November 2026, provisional timing): **PASS WITH WARNINGS: 0 failures, 3 warnings** (sparse frames in the worked example, feedback 2 and the early handoff). Earlier runs failed on mostly empty frames in the coherence, derivation, screen-relation and memory-aid scenes before their cues; fixed by the in-step waves at the slits, the far-screen thumbnail, the carried "so far" strip with a face-on band view, and the memory card from the first sentence. Report: `out/explainer/Explainer-phys-y12-m7-v06/grade/Explainer-phys-y12-m7-v06-grade.md`.

**Honest grade: B on provisional timing.** P sliding along the screen with the path-difference bar and the in-step readout, the lamp pattern washing out, the d sin θ triangle and the live λ, L, d sliders carry the explanation. Soft spots: the derivation triangle uses an exaggerated 24° angle (tagged not to scale); white light is schematic.

## For root

- v07 opens on `M7V06FinalFrame`.
- Δx is kept (site symbol), as the design's open decision 2 proposes.
- Provisional timing only; re-time from the measured take before any render.
