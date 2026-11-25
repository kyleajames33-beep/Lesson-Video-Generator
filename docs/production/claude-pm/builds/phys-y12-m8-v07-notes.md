# phys-y12-m8-v07 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v07.md` (Revision 3 with the 21 November root label edit; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v07/common.ts` imports `work/physics-prebuild/p-y12-m8-v07/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (`cuecheck-m8b.py v07`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v07/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,088 characters, 18 scenes).
- **Holds.** The design names no hook prediction, and the prepared timing has none. Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present. The scene 8 voltage slider runs inside its narration (no hold named).
- **Opening frame:** v06's `M8V06FinalFrame` at frame 0; from frame 1 the grey hand tag fades; the element strip pulses on "stars built the elements"; the gold atom grows to the centre, then moves aside as the painted Maltese-cross tube slides left and its glow comes on; the heading is already this lesson's question; the "Next" chip fades on "a strange glow".
- **Plates:** Maltese-cross tube, paddle-wheel tube with its wheel layer (turned about its hub), Millikan plates, atomiser, high-voltage supply, oil drop, top-pan balance (display overlaid).
- **Plate request (held since brief 189):** `y12p-crt-tube-v1.png`, a side-on cathode ray tube: transparent PNG with alpha, at least 2400 px on the long side, exactly side-on, one pair of truly horizontal deflection plates centred on the axis, no beam, with a JSON sidecar (gun exit on the axis, the four plate ends, the screen's inner-face centre, the axis line). Built fallback (as the Module 6 builds): an exam-style diagram (gun blocks, one pair of plates, a screen line, a dashed evacuated boundary) tagged "exam-style diagram", in scene 3 (cells 3 and 4), scene 4, the attempt 2 card and the notes card; scenes 5 and 6 show the plates only (enlarged).

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v07/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v07`, topic "DISCOVERING THE ELECTRON". Registry: after m8-v06.
- New shared kit file: `src/explainer/physics/atom/electron.tsx` (plate specs and anchors for the Maltese-cross tube, paddle-wheel tube and wheel, Millikan plates, atomiser and the balance display; `ExamTube`; `ChargeAxis` with `qX`; `BalanceReading`).
- Lesson parts: `MalteseTube` (coded glow and axis beam on the plate), `EndView` (the cross's shadow), `PaddleCell` (wheel rolling along the rail about its hub), `beamRun` (full Lorentz force on an electron on the field motion engine), `beamPath`, `yAtX`, `BalancePlate`.

## Stages built

1 strip pulse; the atom grows, "1800s: atom = smallest piece, nothing inside?"; tube slides left and glows, "glow!"; the painted balance with "? kg", ringed; two experiment chips that gain "cathode rays" and "oil drops". 2 the painted tube large with the painted supply and coded leads to the cathode pins and the cross's stand; "cathode (−)", "anode (+)"; a dashed axis beam with "?"; the glow; "cathode rays: what streams from the cathode"; wave and particle chips. 3 a two-by-two grid: the cross's sharp shadow in an end view; the painted paddle wheel rolling along its rail with a heat shimmer, "weak: heat can do it"; a magnet's crosses bending the beam; Hertz's plates with field lines and a straight beam; ticks on both chips. 4 exam-style tube with plates, field lines, the supply and leads; the beam (field motion engine, E only) curving towards + on "plate", an amber F = qE arrow; an inset of leftover gas ions crowding Hertz's plates; slate-crossed "wave, like light?"; gas and cathode metal cycling with the same curve each time; "same particles in all matter". 5 the enlarged plate region with E down and B into the page; a live slate B slider straightens the beam (full Lorentz force) with a beam-angle readout falling to 0.0°; F_E up and F_B down; framed qE = qvB → v = E/B; task strip, givens (illustrative) and framed 2.5 × 10⁷ m s⁻¹. 6 B off, the parabola, L and y brackets, t = L/v, a = qE/m, stage 2 strip and givens, rows to framed 1.76 × 10¹¹ C kg⁻¹, slate-crossed v-not-squared slip. 7 two q/m bars to scale, "≈ 1840 × (about 1800)", the huge-q or tiny-m fork, "tiny m?" ringed, "measure q directly" to "experiment 2". 8 painted apparatus, atomiser mist reaching the hole, supply with a red V slider stepping 0, 300, 600 V; a magnified gap where the painted drop falls, slows, hangs and (at 900 V) rises; live V, E, qE and mg readouts; qE and mg arrows; framed qE = mg. 9 working layout with the held drop: E = 6.0 × 10⁴ V m⁻¹, |q| = 3.20 × 10⁻¹⁹ C, framed q = −3.20 × 10⁻¹⁹ C with the "−" ringed. 10 drops landing in clusters on the |q| axis; dashed 1e to 6e; e chip; our drop pulsing at 2e; framed 2.00; slate-crossed "1.5e"; "electron: charge −e". 11 both experiment chips filled; m = e ÷ (e/m); framed 9.10 × 10⁻³¹ kg; the balance display changes from "? kg"; data-sheet value; proton 1836.6 × heavier bar. 12 three chips, the divide arrow, hand lines. 13 to 16 cards and brief feedback. 17 the plum-pudding model builds (wash, evenly scattered electrons, labels), an alpha particle with a dashed path ending in "?"; heading changes to v08's question. 18 key notes with the memory card.

## Deviations

- **Handoff heading carries v08's learner question** (root rule), on "So why did scattering require" (capped).
- Thomson's tube is the exam-style diagram (plate request above); no coded glass outline was drawn.
- Scene 1: the experiment chips gain "cathode rays" and "oil drops" on "electron" instead of underlining heading words.
- Scene 3: the cross's shadow is shown in an end-view inset (the side-on glass end cannot show it).
- Scene 5: the task strip, givens and working start at "With these fields" (the design's cue "second" is the scene's last word and is capped).
- Scene 6: the stage 2 task strip and givens are on screen from the first frame (sparse-frame fix); rows follow "From y equals" and "q over m equals".
- Scene 7: the screen shows the spoken rounding beside the value: "≈ 1840 × (about 1800)"; the hydrogen-ion bar is to scale and tagged "a sliver".
- Scene 8: the painted plate gap is only a few pixels at this size, so the drop moves in a magnified coded gap beside the painted apparatus (tagged); the drop moves at terminal speed (speed ∝ mg − qE), not with free acceleration.
- Scene 9: the painted apparatus returns small under the magnified gap and a chip "find the size of q, then its sign" (sparse-frame fix).
- Scene 11: the balance display reads "9.10 × 10⁻³¹" (the window is 226 px wide); a callout and the framed answer carry the unit.
- Scene 17: a recap (the painted tube, the painted Millikan plates, "the electron: charge −e, mass 9.10 × 10⁻³¹ kg") sits at the left until "something positive", then fades; the final frame is as designed.
- On-screen "Module 6" chips read "met earlier" (no video numbers on screen).

## Final frame (exported as `M8V07FinalFrame` in `s3.tsx`)

`<HandoffBoard07 f={end} final />`: heading "Why did scattering require a tiny dense nucleus?"; a uniform pale red sphere (980, 540, r 250) with twelve evenly scattered navy electrons; "spread-out positive charge" (left), "electrons" (right) and the navy hand tag "tiny, negative, light"; "Thomson's guess, 1904: the plum-pudding model" below; an amber alpha "α (+)" at (240, 540) with a dashed path ending in "?"; chip "Next: why did scattering require a tiny dense nucleus?". Props `marks`, `alpha`, `labels` let v08 fade parts. `PUD`, `ELECTRONS` and `PINK` are exported for v08.

## Numbers (all from `common.ts`, checked against "Numbers used")

E = 300/0.020 = 1.5 × 10⁴ V m⁻¹; B = 6.0 × 10⁻⁴ T; v = 2.5 × 10⁷ m s⁻¹; L = 5.0 cm; y = 5.28 mm; q/m = 1.76 × 10¹¹ C kg⁻¹; slip 7.0 × 10³; e/m_p = 9.58 × 10⁷ C kg⁻¹; m_p/m_e = 1836.6 (≈ 1840, about 1800; 1836.6 in scene 11, spoken "about eighteen hundred and thirty six"); drop 1.96 × 10⁻¹⁵ kg, 600 V, 0.010 m: E = 6.0 × 10⁴ V m⁻¹, |q| = 3.20 × 10⁻¹⁹ C = 2.00 e; mg = 1.92 × 10⁻¹⁴ N; qE = 0, 0.96, 1.92, 2.88 × 10⁻¹⁴ N; axis 1.60 to 9.61 (× 10⁻¹⁹ C); m_e = 9.10 × 10⁻³¹ kg; A1 4.80 × 10⁻¹⁹ C, 3.00, slip 4.8 × 10⁻¹⁷ C.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v07` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 4 warnings** (sparse drop-charge and combine frames, attempt 1 at 63% bare with its picture, "few pictures"). Earlier runs failed on sparse hook, stage 2, drop-charge and handoff frames; all fixed (atom kept large in the hook, stage 2 strip and givens from the first frame, the painted apparatus in scene 9, a recap column in the handoff). Report: `out/explainer/Explainer-phys-y12-m8-v07/grade/Explainer-phys-y12-m8-v07-grade.md`.

**Honest grade: B on provisional timing.** The beam straightening under the live B slider, the parabola with B off, the drop held by the live voltage slider and the drops snapping onto multiples of e carry the ideas; the exam-style tube is a fallback for the held CRT plate.

## For root

- Open decision 4: the exam-style tube stands in for the held CRT plate (request above).
- Open decision 3: the quantitative stage 2 is kept.
- m8-v08 opens on `M8V07FinalFrame`.
