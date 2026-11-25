# phys-y12-m8-v03 build notes (pre-build on provisional timing)

Build agent (Claude), 25 to 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v03.md` (Revision 3; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v03/common.ts` imports `work/physics-prebuild/p-y12-m8-v03/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (`cuecheck-m8a.py v03`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v03/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and design identical: 6,303 characters, 17 scenes).
- **Holds.** (1) Hook 3 s prediction: prepared hold at the scene end, after "temperature?"; the design wants it on "prediction" and the answer follows at once (misplaced; ring over the answer, tick after the ring). Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. The scene 5 temperature sweep runs inside its narration (no hold named).
- **Opening frame:** v02's `M8V02FinalFrame` at frame 0; from frame 1 the four evidence chips and "same tool, new target" fade; the Sun, strip, curve and "T = ?" stay; the "Next" chip fades on "reveal their temperature".
- **Plates:** Sun, hot-blue, white and cool-red stars, filament lamp, discharge tube, vapour cell (`y12p-vapour-cell-v1`, exists, so no fallback). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v03/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 11, `s3.tsx` 12 to 17, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v03`, topic "STELLAR SPECTRA AND CLASSES". Registry: after m8-v02.
- Shared: `physics/atom/stellar.tsx` (made for v02 to v04: `StarCurve`, classes, HR geometry). Reused: `light/spectrum.tsx` (strips, `EnergyLadder`), `light/stars.tsx`, m7-v04's `ClassStrip`.
- Lesson parts: `FeatureBars` (feature thermometers on a log temperature axis, hotter to the left) and `AtomPanel` (hydrogen levels with electrons, ionised line, escaping electrons).

## Stages built

1 the Sun's strip pulsing with Hα ringed ("dark lines: missing light"); "mostly hydrogen" chip; three painted stars over prediction chips; tick on "in between", "surprise: not the hottest". 2 the painted lamp and tube with continuous and emission strips revealing; the hydrogen ladder; an electron dropping 3 → 2 and a red photon leaving towards the 656.3 nm line; E = hf chip; framed 3.03 × 10⁻¹⁹ J = 1.89 eV. 3 the lamp, the painted vapour cell with a cool particle-box gas, the strip gaining the 589 nm dark line, the sodium ladder (2.11 eV, electron jumping from the lowest level), yellow-orange arrows scattering, the matching emission line ringed, the painted Sun replacing the lamp with layer rings, the Fraunhofer chip. 4 the intensity graph (200 to 1000 nm): the 5800 K black body, 4000 and 8000 K curves (each scaled to the same height), the stellar curve with dips and the aligned strip, peak ringed, dip labels, arrows to the strip lines. 5 the live star thermometer: curve and peak line, grey UV band, painted star switching plate, task, equation and givens, framed 5.8 × 10³ K, slate-crossed b × λ, readouts T, λmax and colour swatch, the sweep 3000 to 30 000 K, the strip's hydrogen lines following the hump. 6 three atom panels with the star plates, electrons on n = 1, a few lifted to n = 2, stripped off when hot; Hα arrow; strips under each panel; the hump graph peaking at 10 000 K; slate-crossed "weak hydrogen lines = little hydrogen". 7 O, G and M strips with plates from the first frame (He II line, Ca II H and K, TiO bands highlighted on cue); five feature bars (He II, He I, H hump, Ca II, TiO). 8 the class strip O to M with swatches, ranges ("approximate"), plates by O, A, M, G0 to G9 with G2 ringed and the Sun, the alphabet then temperature order. 9 Cecilia Payne named; A and M strips with plates and two equal composition bars (H ≈ 73%, He ≈ 25%, other ≈ 2%), "same mix", the strips flashing. 10 working layout; feature bars with He II and TiO crossed and a 7000 K marker; T = 7.0 × 10³ K; slate-crossed "strong hydrogen → class A"; framed class F with swatch. 11 the three panels and the memory line. 12 to 15 cards (an unlabelled curve and metal-line strip with the approximate class table; painted stars P and Q above unlabelled strips) and brief feedback (the hump with P hot and Q cool). 16 the curve and hump shrinking into "λmax → T" and "lines → T, class"; two painted cool-red stars (140 and 520 px) above M strips with the same continuum and TiO bands; log luminosity bars "1" and "about 10⁶" with "?"; slate-crossed "same class → same star?"; the empty axes; heading changes to v04's question (final frame). 17 key notes with the memory card.

## Deviations

- **Handoff heading carries v04's learner question** (root rule), on "So how does the HR diagram" (capped).
- Scene 4: the 4000 K and 8000 K curves are each scaled to the same height (tagged) so only the peak position moves.
- Scene 5: the "T = ?" gauge is answered by a line "last scene's T = ? is now ≈ 5800 K" rather than a separate gauge.
- Scene 7: the three example strips and their plates show from the first frame and are highlighted on their cues (grade fill).
- Scene 9 restaged (grade: the shrunk class strip fell below 26 px): the A and M strips at full size with plates, beside the composition bars, flashing on "spectra".
- Scene 16: a first beat (curve and hump) shrinks into the two tags; the strips share one 3500 K continuum shape (no separate curves above them); the axes are solid (R2).
- No O to M sentence mnemonic (open decision 1 kept).

## Final frame (exported as `M8V03FinalFrame` in `s3.tsx`)

`<HandoffBoard03 f={end} final />`: heading "How does the HR diagram distinguish brightness, temperature and stellar stage?"; chips "λmax → T" (96, 168) and "lines → T, class" (300, 168); HR axes box (240, 240, 1440 × 560), temperature ticks 30 000, 10 000, 5000, 3000 (hot left), luminosity ticks 10⁻², 1, 10², 10⁴ (log scale); painted cool-red stars at {x 330, y 330, w 140} and {x 1080, y 200, w 520}; M strips at (250, 500, 320 × 44) and (1060, 740, 560 × 50), each "class M, about 3500 K"; red hand tag "same peak, same class" at (96, 285); luminosity bars at x 760 and 900 (base 760) "1" and "about 10⁶" with "?"; slate-crossed chip "same class → same star?" at (250, 680); chip "Next: how does the HR diagram distinguish brightness, temperature and stellar stage?". Props `tags`, `crossed`, `axes`.

## Numbers (all from `common.ts`, checked against "Numbers used")

Hα 3.03 × 10⁻¹⁹ J = 1.89 eV; Na D 2.11 eV; thermometer 966, 725, 500, 414, 290, 96.6 nm; Sun 5.8 × 10³ K, slip 1.4 × 10⁻⁹ K; n = 2 at 10.2 eV, 13.6 eV, He 24.6 eV, Ca 6.11 eV; composition 73/25/2; worked 7.0 × 10³ K, F; A1 4.0 × 10³ K, K, slip 4.0 × 10⁻⁶ K; class ranges as root decision 3 (M below about 3500 K).

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v03` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 7 warnings (sparse frames in scenes 2 to 4, worked classify, attempt 1 and the handoff; 24 px axis ticks in worked classify)**. Earlier runs failed on the other-features and Payne frames (empty; 17 px shrunk class strip), a class table running off the feedback picture and an empty handoff opening; fixed by showing strips from the first frame, restaging Payne, a two-column table and the shrinking curve and hump. Report: `out/explainer/Explainer-phys-y12-m8-v03/grade/Explainer-phys-y12-m8-v03-grade.md`.

**Honest grade: B on provisional timing.** Motion carries each change, but several set-ups are sparse at sample frames and need a playback-speed look once voiced.

## For root

- Hook pause position (as v01).
- m8-v04 opens on `M8V03FinalFrame` (heading already v04's question).
