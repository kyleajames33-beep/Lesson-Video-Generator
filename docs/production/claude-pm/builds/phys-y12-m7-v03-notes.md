# phys-y12-m7-v03 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v03.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v03/common.ts` imports `work/physics-prebuild/p-y12-m7-v03/lesson.json` on one marked line and exports `PROVISIONAL = true`. 66 cue calls, all resolve; late cues capped (no change in a scene's last 2 s). Switch the import to `docs/production/claude-pm/lessons/p-y12-m7-v03/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design.** The prepared `lesson.json` and the brief 259 source audit carry the current design narration (6,291 characters, 15 scenes; checked scene by scene by script). The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Hook hold.** The 3 s ring sits on the provisional hold at the end of the hook (after "The lines are where the information is"); it moves with the measured take.
- **Opening frame:** v02's exported `M7V02FinalFrame` at frame 0. From frame 1 the three painted source rows are redrawn from v02's exported `SourceRow` and `HB2`; the method row and the "Next" chip fade over 22 frames, and each blank strip fills on its cue ("unbroken rainbow", "on black", "crossed by dark lines") as its "?" fades.
- **Plates:** filament lamp, hydrogen discharge tube, EHT supply (bench kit `Supply`), pocket spectroscope, vapour cell (`y12p-vapour-cell-v1.png`, the Revision 3 request, now delivered; the fallback is not needed), paper sheet, Sun, Moon. All uniform scale. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v03/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 15, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v03`, topic "SPECTRA", accent `#9c5a00`. Registry: after m7-v02.
- Shared: the Module 7 light kit `src/explainer/physics/light/` (`SpectrumStrip`, `wlColor`, `EnergyLadder`, `EMRibbon`, `LightPath`; see v01 notes); `sims/particle-box.ts` with `ParticleBoxView`; `sims/blackbody.ts` (`planck`) for the slider's brightness profile.
- Lesson parts: `StripRow`, `Connectors`, `NoPartner` (slate crosses), `Lattice` (the hot solid, lesson-coded), `hotProfile`, `hotGas` and `coolGas` (particle-box runs), `BoxDots` (a run's particles drawn inside the painted cell window), `EHT`, `ehtSwitch`.

## Stages built

1 the three strips fill; "four brightest lines", "line strengths schematic"; prediction chips; tick on "filament"; amber bracket and "information lives in the lines", "same rainbow, any metal". 2 lamp beam into the painted spectroscope; a labelled diagram of slit and grating fanning violet least, red most; the EM ribbon with the visible slice zoomed onto the strip; the 380 to 750 nm axis; a brightness graph traced over the strip, "a map". 3 the painted lamp, a jiggling lattice inset ("inside the hot tungsten (model)"), "tungsten ≈ 2900 K", last time's chip, coloured wavelets leaving, the continuous strip, the temperature slider (2000, 2900, 3500 K, Planck-shaped profile, tagged qualitative), crossed "tells you the element", "shaken every way". 4 discharge tube on the EHT supply with leads and a tagged pink glow, the particle-box gas inset, the energy ladder (levels 2 to 6 at hydrogen spacing), the drop selector stepping 3, 4, 5, 6 → 2 with λ and the relative drop size, a coloured arrow to each new line on the black strip, labels 656, 486, 434, 410, ring on level 2, "emission spectrum". 5 four reference strips (helium arrives later), sodium's pair pulsing with a zoomed strip, neon's lines pulsing, the unknown sliding in and matching hydrogen line by line, the 1868 strip with 587.6 nm and no match, helium sliding in to match, chip and "named after the Sun". 6 lamp, painted cell with the cool-gas run, sodium's two levels with the jump up as a yellow wave vanishes, the dark pair matched by connectors to the bright pair, rose arrows re-emitted in all directions, "dark, not empty", then the Sun replacing the lamp with "hot dense layers", "cooler gas above", the solar strip and "Fraunhofer lines". 7 Sun, Moon and painted paper sheet feeding the spectroscope, two identical solar strips with connectors, crossed "moonlight = the Moon's own emission spectrum", crossed "aim at the Sun", tick chip. 8 three rows with small plates and strips, pulses and connectors, memory card. 9 three painted sources on a bench, the spectroscope moving along, the scale view, the results table filling, the reference column, the safety chip with a red ring on the supply switch. 10 to 13 question cards (reference card with printed values; Moon and spectroscope) and brief feedback (unknown against helium then neon with slate "no partner" crosses; Sun, Moon, spectroscope and solar strip). 14 the handoff (final frame). 15 five notes and the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "What can stellar spectra tell us" (capped) it changes to v04's question.
- Scene 4: the selector steps for 434 and 410 nm are keyed to "four hundred and thirty-four" and "four hundred and ten" (the design puts both on "nanometres", which comes after all four numbers are spoken).
- Scene 5: the 1868 line is drawn as bright lines (hydrogen's red and cyan with 587.6 nm), labelled "sunlight, 1868"; the line was seen as a bright line at the Sun's edge during an eclipse (design author note b). Root may prefer a dark-line strip.
- The solar strip is a schematic selection: H (410.2, 434.0, 486.1, 656.3), Na D (589.0, 589.6), Mg b 517.3, Fe E 527.0 and G band 430.8 nm, tagged "line strengths schematic"; the design lists only "including" H and Na.
- Scene 6's cool vapour is the engine run drawn as particles inside the painted window (`BoxDots`), not `ParticleBoxView`, whose card box would hide the glass.
- Scene 14 opens with the three rule strips and small plates (a recap of its first sentences), which cross-fade into laboratory hydrogen, star A and star B before the final hold.
- "No partner" marks are slate crosses (R1 overrides the design's red); the safety ring and "switch off first" stay red (a warning, not a mistake).
- No quoted site definitions on screen (the design quotes none).

## Final frame (exported as `M7V03FinalFrame` in `s3.tsx`)

`<HandoffBoard f={end} final />`: heading "What can stellar spectra tell us beyond chemical identity?"; three strips at x 420 (width 1140, 70 high) at y 300, 470, 640 on a shared 380 to 750 nm axis: grey "laboratory hydrogen" lines at 410.2, 434.0, 486.1, 656.3 nm; "star A" continuous with the four dark lines shifted by the same factor 1.035 (exaggerated) and dashed connectors leaning right; "star B" with the four dark lines broadened; chips "✓ composition: hydrogen", "shifted?" (tag "exaggerated") and "broader?"; chip "Next: what can stellar spectra tell us beyond chemical identity?" at (96, 890).

## Numbers (all from `common.ts`, checked against "Numbers used")

H 656.3, 486.1, 434.0, 410.2 nm; drop sizes 1.00, 1.35, 1.51, 1.60; Na 589.0, 589.6; He 447.1, 471.3, 492.2, 501.6, 587.6, 667.8, 706.5 (card 447, 471, 492, 502, 588, 668, 707); Ne 585.2 to 703.2 (card 585, 588, 594, 614, 640, 651, 693, 703); filament 2900 K; slider 2000, 2900, 3500 K; 1868 and 1895.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v03` (25 November 2026, provisional timing): **PASS WITH WARNINGS: 0 failures, 3 warnings** (sparse frames in scene 7 and feedback 2; the attempt 2 card picture). Earlier runs failed on the feedback 2 opening and the handoff opening and showed the particle box drawn at the frame corner (it renders its own positioned svg, so it now sits in the HTML layer); all fixed. Report: `out/explainer/Explainer-phys-y12-m7-v03/grade/Explainer-phys-y12-m7-v03-grade.md`.

**Honest grade: B on provisional timing.** The drop selector sending each coloured line to its place, the unknown strip sliding against the references, the dark sodium pair joined to the bright pair and the re-emission arrows carry the explanation. Soft spots: the ladder's upper levels sit close together (true hydrogen spacing); scene 7 is diagram-led and sparse.

## For root

- v04 opens on `M7V03FinalFrame`.
- Decide the 1868 strip style (bright lines as built, or dark lines).
- Provisional timing only; re-time from the measured take before any render.
