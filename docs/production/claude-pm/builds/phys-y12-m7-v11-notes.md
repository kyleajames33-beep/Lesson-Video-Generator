# phys-y12-m7-v11 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v11.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v11/common.ts` imports `work/physics-prebuild/p-y12-m7-v11/lesson.json` on one marked line and exports `PROVISIONAL = true`. Every cue resolves (`work/tsc-scope/cuecheck-m7c.py v11`: 0 problems); late cues capped. Switch the import to `docs/production/claude-pm/lessons/p-y12-m7-v11/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design.** The prepared `lesson.json` and the brief 259 source audit carry the current design narration (6,158 characters, 17 scenes; checked scene by scene by script). The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Holds:** none missing. The design has no prediction countdown (author note a); memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are in the prepared timing; the scene 3 and 5 controls run under their narration, as designed.
- **Opening frame:** v10's exported `M7V10FinalFrame` at frame 0. From frame 1 its chip fades into the (identical) heading; the slate and orange parts of the bar are ringed on cue; on "Here's data like his" the board fades while a small split bar ("hf = ϕ + K_max"), the painted photocell and mirrored lamp, the sodium table and small empty axes arrive.
- **Plates:** photocell (three uses), bench lamp, low-voltage supply, two multimeters (ammeter with a coded bar, voltmeter with a coded reading), bar heater (with v09's coded glow) and the spacecraft with its exhaust layer. Uniform scale only. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v11/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 11, `s3.tsx` 12 to 17, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v11`, topic "PHOTOELECTRIC GRAPHS", accent `#8e3b78`. Registry: after m7-v10.
- Shared: uses `physics/light/photo.tsx` (new with v10) and `physics/light/frames.tsx` (new, see v12 notes: `SHIP`, `EXHAUST`, `Ship`, `shipGeom`). Engines used: `sims/field-motion.ts` (`runMotion`, `stateAt`: each electron's flight against the reverse voltage in the gap inset), `sims/photoelectric.ts` (`photocurrent`: the ammeter bar and every current-voltage trace), `sims/blackbody.ts` (`planck`, the heater panel's curve).
- Lesson parts: `DataTable` (the site's sodium data), `GapInset` (the magnified gap), `ivPts`, `KPlot` (the K_max against f lines in `s1.tsx`).

## Stages built

1 v10's frame; slate and orange rings; "Millikan, 1916" (text) and "expected: Einstein wrong"; the painted photocell and lamp slide in with the beam stepping through five colours as each table column lights; navy arrow to the table; "h = ?", "ϕ = ?" and "hidden in here"; small empty axes. 2 a model metal surface: one photon on a surface electron, one on a deeper electron; the amber hf bar fills slate (ϕ) then orange; long and short orange speed arrows ("surface: K_max", "deeper: loses extra energy getting out"); hf = ϕ + K_max; framed K_max = hf − ϕ. 3 the painted circuit (supply with coded + and −, ammeter, voltmeter, photocell, lamp); the reverse-voltage slider; the magnified gap with the E arrow (cathode to the negative anode) and the amber "F on electron" arrow; electrons slow and turn back (field motion engine); the ammeter bar falls and a point traces the current-voltage curve; at 1.03 V the current is zero (ring on the voltmeter, "V_stop"); W = qV chip; framed eV_stop = K_max. 4 the large I-V graph: dim, bright (same −V_stop), higher f (same photon rate, schematic) with a bigger V_stop; brace and underline tags. 5 K_max against f with the y = mx + c mapping; the line draws; the live marker at 6.0, 8.0, 10.0 × 10¹⁴ Hz with f, hf and K_max readouts and a live bar; gradient triangle; the marker slides to f₀ (slate ring, "hf₀ = ϕ"); dashed extension to −ϕ; "no emission" shading. 6 the violet metal 2 line; the triangle copied; intercepts pulse; "h: universal", "ϕ: belongs to the metal". 7 task, equation, table and e chip; the five points plot one by one, then the line; V_stop = (h/e) f − ϕ/e; "gradient = h/e" with the slate-crossed "gradient = h"; rise and run brackets and rows; the framed 4.125 × 10⁻¹⁵ V s ("keep 4.125"). 8 h = gradient × e; framed 6.608 × 10⁻³⁴ ≈ 6.6 × 10⁻³⁴ J s; "h = 6.6 × 10⁻³⁴ J s" box; data-sheet chip; then two panels (the glowing painted heater with a 1500 K black-body curve on its own scale; the painted photocell with the sodium line), "h" in each, an amber "=" and "same h, two unrelated effects". 9 the zoomed-out plot; dashed extensions to both axes; framed f₀; intercept −2.275 V; framed ϕ = 2.275 eV ≈ 2.28 eV and 3.645 × 10⁻¹⁹ J with the hf₀ check; slate-crossed "ϕ = −2.28 eV"; site-value chip. 10 the three-row trap card with small graphs. 11 the two parallel lines (triangles and intercepts pulse) and the memory card. 12 to 15 question cards (the K_max against f graph with gridlines and two marked points; the lamp and photocell with a single and a double-width beam) and brief feedback (the graph with rise, run and the dashed check to −4.7 × 10⁻¹⁹ J; the I-V sketch with the doubled plateau). 16 the parallel-line plot ("gradient = h"), "1905: photons, and relativity", the spacecraft slides in with a brief exhaust glow, the pulse runs ahead, "v = 0.8c", the two "c measured ...?" tags (final frame). 17 key notes.

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "So why must observers agree" (capped) the heading changes to v12's question.
- **Scene 3:** the 40 px electrode gap is shown magnified in an inset ("the gap, magnified"); the ammeter shows a falling bar (no invented values) and the voltmeter shows the reverse voltage. The light is 8.0 × 10¹⁴ Hz so V_stop = 1.03 V matches the sodium table.
- **Scene 1:** the energy bar does not shrink; v10's board fades and a small coded split bar with "hf = ϕ + K_max" takes its place.
- **Scene 6:** metal 2's work function is illustrative (3.3 eV, no number on screen).
- **Scene 7:** the rise and run values are working rows on the right; the plot carries short "rise" and "run" labels (the long run label collided with the axis labels).
- **Scene 8:** the heater panel's curve is a 1500 K Planck curve on its own linear scale, tagged "own scale".
- Stopping voltage is written V_stop throughout (root decision 3); no definition chip is quoted, so no site wording is altered. Mistakes are slate (R1).
- Historical claims as designed: Millikan 1916 (expected Einstein to be wrong); Einstein 1905 (photons and relativity). Names in text only.

## Final frame (exported as `M7V11FinalFrame` in `s3.tsx`)

`<HandoffBoard11 f={end} final />`: heading "Why must observers agree on light speed?"; a small coded plot at (130, 200, 300 × 160) with an ink and a violet parallel line and "gradient = h"; "1905: photons, and relativity" at (130, 460); the painted spacecraft at `SHIP11` = (190, 540, w 900), exhaust off; "v = 0.8c" (orange) at (550, 520); an amber pulse at x `PULSE11_X` = 1520 on the nose line (y about 710); "c measured on board?" above and "c measured from Earth?" below the pulse; chip "Next: why must observers agree on light speed?" at (96, 890).

## Numbers (all from `common.ts`, checked against "Numbers used")

Sodium data (site): f = 6.0 to 10.0 × 10¹⁴ Hz; V_stop = 0.20, 0.61, 1.03, 1.44, 1.85 V. Gradient 1.65 / (4.0 × 10¹⁴) = 4.125 × 10⁻¹⁵ V s (≈ 4.13); h = 6.608 × 10⁻³⁴ ≈ 6.6 × 10⁻³⁴ J s; intercept −2.275 V ≈ −2.28 V; f₀ = 5.515 × 10¹⁴ ≈ 5.5 × 10¹⁴ Hz; ϕ = 2.275 eV ≈ 2.28 eV = 3.645 × 10⁻¹⁹ ≈ 3.64 × 10⁻¹⁹ J; check hf₀ = 3.645 × 10⁻¹⁹ J. Marker model (ϕ = 2.28 eV): f₀ = 5.51 × 10¹⁴ Hz; 6.0: 2.48, 0.20 eV; 8.0: 3.31, 1.03; 10.0: 4.14, 1.86. A1: h = 6.67 × 10⁻³⁴ ≈ 6.7 × 10⁻³⁴ J s; ϕ = 4.67 × 10⁻¹⁹ ≈ 4.7 × 10⁻¹⁹ J = 2.9 eV. A2: h/e = 4.136 × 10⁻¹⁵ V s.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v11` (25 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 9 warnings** (eight sparse frames; "few pictures" for the lesson, as the coded plots are not counted as plates). Earlier fixes: text under 26 px on the zoomed-out plot's ticks, a run label colliding with the axis labels, and the heater panel's curve too low on a shared scale. Report: `out/explainer/Explainer-phys-y12-m7-v11/grade/Explainer-phys-y12-m7-v11-grade.md`.

**Honest grade: B on provisional timing.** Electrons turning back in the magnified gap, the point tracing the I-V curve, the shared cut-off, the live marker on the K_max line, the copied gradient triangle and the two-panel "same h" carry the explanation. Soft spots: several frames are sparse (warnings), and the trap card is text-led.

## For root

- v12 opens on `M7V11FinalFrame`.
- Open decision 2 in the design (the 1905 bridge to relativity) is built as designed.
