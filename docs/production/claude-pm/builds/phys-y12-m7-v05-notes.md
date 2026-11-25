# phys-y12-m7-v05 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v05.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v05/common.ts` imports `work/physics-prebuild/p-y12-m7-v05/lesson.json` on one marked line and exports `PROVISIONAL = true`. 80 cue calls, all resolve; late cues capped (no change in a scene's last 2 s). Switch the import to `docs/production/claude-pm/lessons/p-y12-m7-v05/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design.** The prepared `lesson.json` and the brief 259 source audit carry the current design narration (6,289 characters, 16 scenes; checked scene by scene by script). The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Hook hold.** The 3 s ring sits on the provisional hold at the end of the hook (after "spreads out more"); it moves with the measured take. The answer tick lands on "It gets wider" before the provisional hold.
- **Opening frame:** v04's exported `M7V04FinalFrame` at frame 0. From frame 1 the slit close-up keeps moving from v04's end phase while the chips and spectroscope fade; on "Shine a laser through a narrow slit" it cross-fades to the bench.
- **Plates:** optical bench, laser module, slide holder, screen carrier (brief 191 bench fit, one uniform carrier scale, the laser lifted whole on a coded bench block because its aperture sits low; never stretched), ripple tank, plane mirror (Foucault row), pocket spectroscope (v04's final frame). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v05/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 16, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v05`, topic "DIFFRACTION", accent `#13767a`. Registry: after m7-v04.
- New shared parts (new files): `src/explainer/physics/light/bench.tsx` (`OpticsBench`, `benchGeom`, `CodedSlide` (single, double, hair, ruled grating), `ScreenView` (face-on bands), `PatternGraph`, plate specs for the bench, slide holder, screen carrier, ripple tank and metre rule with measured anchors); `src/explainer/physics/light/wavefronts.tsx` (`HuygensRow`: wavelets and the line touching them as the edge of their union; `ApertureWaves`: crests beyond an opening drawn with the strength of the engine's summed field `fieldAt` across the opening; `Barrier`, `ShadowHatch`, `TwoSlitWaves`). The single-slit pattern uses the engine's `singleSlitBrightness` (the Revision 3 kit gap is closed in `waves.ts` already).
- Lesson parts: `BenchRig` (bench, slit close-up, face-on screen, band bracket), the duel table (`DUEL_ROWS`, `DuelSummary`, `ParticleIcon`, `WaveIcon`), `MirrorThumb`.

## Stages built

1 v04's slit close-up still moving, then the bench: red beam, coded slit in the holder, slit close-up and face-on screen; readouts slit width and central band (0.20 mm, 13 mm; 0.10, 26; 0.05, 52; tagged simulated); prediction chips; red bracket across the widened band; "narrower slit, wider band". 2 the painted ripple tank, then the water from above: a wide gap ("mostly straight", the curled ends ringed), the gap narrowing to about one wavelength ("gap ≈ λ"), semicircles into the hatched shadow, a teal pen arrow behind the barrier, the site's diffraction definition. 3 the Huygens stage: dots pulse, wavelets grow, the touching line, two neighbours shaded, the construction stepping ahead three times. 4 the barrier and hatched shadow; only gap points send wavelets; the straight middle marked; edge wavelets inked with "no neighbours here" and an arrow to the edge; a single edge; the gap narrowing 300, 180, 90, 36 px to one wavelet ringed, "narrow gap: wide spread". 5 a doorway from above: the 1 m bracket, λ chip, the framed 2 × 10⁶ wavelengths (ringed), slate-crossed "1 / 500 = 0.002 wavelengths"; a straight light beam; grey sound fronts (λ ≈ 1 m) spreading round the jambs; the painted slide holder with its coded slit, "≈ 0.1 mm = 200 wavelengths", "gap ≈ λ: big spread". 6 the face-on single-slit pattern and its brightness curve (engine), side peaks and first dark gap ringed, the cancelling inset (matching points, crest on trough, flat sum), the slit narrowing 0.10 to 0.05 mm, a green pattern under the red, a straight edge's fringes (schematic). 7 the duel built row by row (reflection, gap or edge, speed in water) with live particle and wave diagrams, finished rows shrinking into summary strips, "does not decide", "simple particle picture", "opposite predictions: testable", "1700s: Newton's model dominant". 8 the observed column filling (spreads into shadows; slower, Foucault 1850, with the mirror plate), the Poisson stage (red beam, disc on a post, a schematic shadow with a bright central spot, "Poisson: absurd!", "Poisson spot observed (Arago)"), back to the table with "the wave model accepted" framed and "Young's two slits (interference): next time". 9 the bench sweep red then green (11, 21, 43 mm), a hair, the observation table, the laser safety chip and a ring on the aperture. 10 two Huygens panels and the memory card. 11 to 14 question cards (bench thumbnail; the two model pictures) and brief feedback (a slit picture narrowing to a semicircle; the two decisive rows with ticks and crosses). 15 one slit's wavelets, then two slits whose spreading waves overlap, a screen of evenly spaced bands (engine `doubleSlitBrightness`) and "?" (final frame). 16 five notes and the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "Why do two slits produce" (capped) it changes to v06's question.
- **Site definition quoted exactly:** the diffraction chip (scene 2) uses site lesson 4's key-term definition, "Diffraction: the spreading of waves as they pass through an aperture or around an obstacle." (design wording was "waves spreading at an edge or through a gap"; key note 1 keeps the design's note wording, not presented as a quotation).
- The slit and screen readouts sit under the bench with close-up insets (the painted slit window and screen card are too small to show the slit or the bands).
- Scene 5's doorway is drawn from above (a wall with a 1 m gap) so the light beam and the sound fronts share one picture.
- Scene 7's water row shows Newton's dots speeding up and Huygens' fronts closing up inside a water region; scene 8's Poisson stage is a side view of beam and disc plus a face-on schematic of the shadow.
- Red pen marks and crossed chips are slate (R1); red stays only for red laser light and the laser-safety warning; "measured: slower" is ink (green kept for 532 nm light).
- The hook redraws v04's slit close-up rather than turning the chip into the heading (the heading already changed in v04's handoff).

## Final frame (exported as `M7V05FinalFrame` in `s3.tsx`)

`<HandoffBoard f={end} final />`: heading "Why do two slits produce regularly spaced bright and dark bands?"; a top-view box (96, 180, 1300 x 660) with teal straight fronts arriving at a barrier at x 520 with two slits at y 380 and 640 (18 px wide); semicircular teal crests (λ 36 px) spreading from both slits and overlapping; a vertical band screen at (1440, 180, 80 x 660) with evenly spaced red bands from the engine; "?" beside it; chip "Next: why do two slits produce regularly spaced bright and dark bands?". Exports `TS`, `TS_YA`, `TS_YB`, `tsPhase`, `tsBright`, `BandScreen`, `V05_END`.

## Numbers (all from `common.ts`, checked against "Numbers used")

Slit sweep (simulated, 2L λ / a, L = 2.0 m): red 650 nm 13.0, 26.0, 52.0 mm; green 532 nm 10.64, 21.28, 42.56 shown 11, 21, 43 mm; doorway 1 / (500 × 10⁻⁹) = 2 × 10⁶ wavelengths; slip 1 / 500 = 0.002; slit 0.1 mm / 500 nm = 200 wavelengths; sound 340 / 340 = 1.0 m; Foucault 1850; Huygens 1600s.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v05` (25 November 2026, provisional timing): **PASS WITH WARNINGS: 0 failures, 4 warnings** (sparse frames in the hook before the close-ups arrive, the doorway scene, the duel's first row and the notes). Earlier runs failed on the duel's reflection row and feedback 2 (mostly empty before their cues); the diagrams were enlarged and widened and feedback 2 now shows its model diagrams and first row from the start. Report: `out/explainer/Explainer-phys-y12-m7-v05/grade/Explainer-phys-y12-m7-v05-grade.md`.

**Honest grade: B on provisional timing.** The wavelets with the touching line, the edge wavelets curling into the hatched shadow, the gap narrowing to one wavelet and the slit sweep with live readouts carry the explanation. Soft spots: the reflection row's diagrams only show a mirror edge (no bounce); the hair close-up is small.

## For root

- v06 opens on `M7V05FinalFrame`.
- The "screen about 2 m away" label sits on the painted bench, which is not drawn to that scale; it carries "(not to scale)".
- Provisional timing only; re-time from the measured take before any render.
