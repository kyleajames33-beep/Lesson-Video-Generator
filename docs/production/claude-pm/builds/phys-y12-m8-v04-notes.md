# phys-y12-m8-v04 build notes (pre-build on provisional timing)

Build agent (Claude), 25 to 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v04.md` (Revision 3; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v04/common.ts` imports `work/physics-prebuild/p-y12-m8-v04/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (`cuecheck-m8a.py v04`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v04/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and design identical: 6,067 characters, 17 scenes).
- **Holds.** (1) Hook 3 s prediction: prepared hold at the scene end, after "stellar stage?"; the design wants it on "prediction" and the answer follows at once (misplaced; ring over the answer, tick after the ring). Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. The scene 8 marker runs inside its narration (no hold named).
- **Opening frame:** v03's `M8V03FinalFrame` at frame 0; from frame 1 the two tags and the crossed chip fade; the stars, strips, bars, hand tag and axes stay; the "Next" chip fades on "and stellar stage".
- **Plates:** Sun, hot-blue, white and cool-red stars, painted Earth. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v04/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 11, `s3.tsx` 12 to 17, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v04`, topic "THE HR DIAGRAM". Registry: after m8-v03.
- Shared: `physics/atom/stellar.tsx` (`HRAxes`, `hrX`, `hrY`, `radiusOf`, `radiusLineL`, `msLum`, `classOf`, swatches).
- Lesson parts: `HRDiagram` (axes, main-sequence band, region outlines, illustrative sample with named stars at catalogue values, lines of equal radius, labels), `glowR`, `plateFor`.

## Stages built

1 both strips pulsing ("same T"), "× 10⁶ power" with a bracket, ring and chips, tick on "it's bigger", "see next", the axes pulsing. 2 a night-sky strip with the Sun, Proxima and Rigel (painted plates) and live glow rings (log of L/d², tagged), log luminosity bars, L☉ = 3.8 × 10²⁶ W, the inverse square chip, "close, not powerful", "far, but huge power", the luminosity chip and slate-crossed "brighter in the sky = more luminous". 3 HR axes (powers of ten ringed in turn, temperature ticks hot on the left with a red arrow, class letters, colour band, three plates above O, A and M); Hertzsprung and Russell named. 4 the sample plotting one by one, slate-crossed "random?", the band, "core hydrogen fusion", the purple mass arrow, the corner labels, Proxima ringed, the painted Sun shrinking onto its point. 5 two painted Suns with 1 m² tiles; the larger filling with tiles; area ∝ R²; framed √100 = 10 as the discs reach a 10 : 1 size ratio (schematic); slate-crossed "R ratio = 100"; the inset point "≈ 10 R☉". 6 the diagram at the left with the giant and supergiant regions, Aldebaran and Betelgeuse; a dimmer tile on the painted red star; the orbits of Mercury to Mars with Betelgeuse's circle (3.55 AU) and Mars ringed; the two red stars marked; framed √10⁶ = 1000. 7 the white-dwarf region; a bright tile on a shrinking painted white star; Sirius A and B; the painted Earth beside the painted white star at 0.88 of its width with "smaller than Earth". 8 the full diagram with radius lines (0.01, 1, 100, 1000 R☉) and the live marker (Sun 1.0, 100 L☉ 9.9, Aldebaran 46, red star 272, Sirius B 0.0084 R☉) with readouts T, L, class, R and a plate that switches and resizes (schematic). 9 the band pulsing, "time on main sequence ≈ 90%", the conceptual path up-right to the giants and round to the white dwarfs with tags and rings, the stage chip. 10 working layout with the diagram small: three stages (4000 K → K → orange; giant; framed √1000 ≈ 32), the dashed 4000 K line to ≈ 0.1 L☉, slate-crossed "√(100/1) = 10 (against the Sun)". 11 arrows ↑ L and ← T, region pulses, the memory line written phrase by phrase. 12 to 15 cards (two equal painted Suns beside empty axes; a night sky with P and Q) and brief feedback. 16 the full diagram with five tags, the band glowing and the other regions lightened, the Sun's core inset (four ¹H, one ⁴He, "?"), rose "energy?" with a ring; heading changes to v05's question (final frame). 17 key notes with the memory card.

## Deviations

- **Handoff heading carries v05's learner question** (root rule), on "So why do main-sequence stars" (capped).
- The HR box sits at y 300 to 840 so the letters, colour band and plates fit under the heading.
- The main-sequence band follows a schematic relation through the Sun (0.10 L☉ at 4000 K, as scene 10 states); the sample is illustrative; named stars use the design's catalogue values.
- Scene 2: glow rings and luminosity bars are on log scales (tagged); Proxima shows "4.2 ly" from 4.246 ly.
- Scene 6: the Betelgeuse tag reads "about 760 R☉ (estimates vary)" without the AU value; the circle uses 3.55 AU.
- Scene 7: the size stage starts on "Sirius B is a white dwarf" (the design cues it on "Earth", the scene's last word, which would leave it on screen under 2 s); the bracket and "smaller than Earth" come on "smaller than Earth".
- Scene 9: the conceptual path runs from the giants across the top of the diagram and down to the white dwarfs.
- Scene 11: the memory line is written phrase by phrase on its four cues.

## Final frame (exported as `M8V04FinalFrame` in `s3.tsx`)

`<HandoffBoard04 f={end} final />`: heading "Why do main-sequence stars release energy by combining light nuclei?"; the HR diagram (640, 300, 1100 × 540; 40 000 K left to 2500 K right; 10⁻⁴ to 10⁶ L☉; letters and colour band) with the band, the giant, supergiant and white-dwarf regions and points lightened but labelled; five teal tags (temperature, colour, luminosity, size, stage); the Sun's point (5800 K, 1 L☉) joined by a dashed line to a core inset at (300, 600, r 150) with four rose ¹H discs, a dashed arrow, "?" and a ⁴He nucleus; rose "energy?" with a ring; chip "Next: why do main-sequence stars release energy by combining light nuclei?". Prop `marks` lets v05 fade the tag and ring.

## Numbers (all from `common.ts`, checked against "Numbers used")

L☉ 3.8 × 10²⁶ W; Proxima 4.2 ly, 0.002 L☉; Rigel about 860 ly, 10⁵ L☉; √100 = 10; Betelgeuse about 760 R☉ (3.55 AU circle); √10⁶ = 1000; Sirius B about 25 000 K, about 0.025 L☉, about 5600 km against 6371 km (0.88); marker radii 1.0, 9.9, 46, 272, 0.0084 R☉; worked 0.1 L☉, 1000, √1000 ≈ 32; A1 900, 30.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v04` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 4 warnings (sparse area rule, attempt 1 and feedback 1; 24 px ticks in worked reading)**. Earlier runs failed on the v03 axis title running off the frame, an empty feedback 1, 23 px scaled text and an off-frame label in feedback 2; all fixed. Report: `out/explainer/Explainer-phys-y12-m8-v04/grade/Explainer-phys-y12-m8-v04-grade.md`.

**Honest grade: B on provisional timing.** Motion carries each change, but several set-ups are sparse at sample frames and need a playback-speed look once voiced.

## For root

- Hook pause position (as v01).
- Open decision 2 (named stars at catalogue values) built as designed; open decision 1 (no T⁴ calculation) kept.
- m8-v05 opens on `M8V04FinalFrame`.
