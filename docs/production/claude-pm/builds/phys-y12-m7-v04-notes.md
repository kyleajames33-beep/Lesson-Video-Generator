# phys-y12-m7-v04 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v04.md` (Revision 3 visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v04/common.ts` imports `work/physics-prebuild/p-y12-m7-v04/lesson.json` on one marked line and exports `PROVISIONAL = true`. 86 cue calls, all resolve; late cues capped (no change in a scene's last 2 s). Switch the import to `docs/production/claude-pm/lessons/p-y12-m7-v04/measured/lesson.json` when voiced, set `PROVISIONAL = false`, re-run the cue check, grade and still sweep.
- **Prepared input matches the design.** The prepared `lesson.json` and the brief 259 source audit carry the current design narration (6,261 characters, 15 scenes; checked scene by scene by script). The provisional file was made with the unchanged `make-provisional.py` from the audit. No narration mismatch.
- **Hook hold.** The 3 s ring sits on the provisional hold at the end of the hook (after "That's called a redshift"); it moves with the measured take. As in v03, the answer tick lands on "Longer" before the provisional hold.
- **Opening frame:** v03's exported `M7V03FinalFrame` at frame 0. From frame 1 the three strips are redrawn (same geometry); the "Next" chip fades, the Sun and white star plates slide in beside star A and star B, and on "how hot" the strips narrow and the feature board and the four property chips arrive at the right.
- **Plates:** Sun, white star, cool red star, hot blue star (all delivered and inspected in briefs 191 and 192), pocket spectroscope. Uniform scale only. **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v04/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 15, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v04`, topic "STELLAR SPECTRA", accent `#9c5a00`. Registry: after m7-v03.
- New shared parts (new files, nothing existing edited): `src/explainer/physics/light/stars.tsx` (star plate specs, `LineProfile`, `gaussDip`, `rotDip` (rotation dish), `lorentzDip` (pressure: core and long wings), `dopplerShift`); `src/explainer/physics/light/wavefronts.tsx` (`MovingSourceFronts` on the waves engine's `wavefronts`, `ApertureWaves`, `Barrier`, `HuygensRow`, `ShadowHatch`, `TwoSlitWaves`); `src/explainer/physics/light/bench.tsx` (v05 and v06). Reused: `SpectrumStrip`, `EnergyLadder`, `Disc`, `LPlate`, `ParticleBoxView`, `collisionRateAt`, `planck`.
- Lesson parts: `FeatureBoard` (three columns filling from their cue frames), `PropChips`, `Slider`, `ClassStrip` (O to M, schematic strengths), `hStrength` (hydrogen hump at 10 000 K, schematic), `denseGas` and `thinGas` (particle-box runs with every collision recorded as an event, so the view flashes collisions).

## Stages built

1 v03's strips with the Sun and white star beside star A and B; connectors pulse rose ("slid along"), B's lines boxed ("fatter lines"); feature board and chips; prediction chips; tick, rose arrow towards 750 nm, ring and "redshift: moving away". 2 the Sun plate beside a large absorption strip (H, Na, Ca II at NIST positions, schematic strengths); "where", "how wide", "how strong" and background marks; hydrogen, sodium and calcium strips slide in and tick; board gains "composition". 3 three painted stars with Planck-shaped continuum curves; "redder = cooler", "bluer = hotter", "exact peak law: a later video"; molecular-band strip and ionised-helium strip; the hydrogen-strength hump with its 10 000 K peak; slate-crossed "weak hydrogen lines = little hydrogen"; the class strip under a navy hotter/cooler arrow; board gains "temperature". 4 the waves engine's moving source (a small white star plate) with an observer marker: evenly spaced crests while at rest, then the star moves; the crest leaving on "sends out one crest" and the next are drawn in ink; the old position, the rose "vT" bracket and "one period T"; "λ + vT" bracket and "stretched"; working strips Δλ = vT, T = λ / c, Δλ = vλ / c, framed Δλ / λ = v / c; crests behind turn red; the H-alpha strip and slider step +300, +600, then -300 km/s with live v, Δλ and λ_obs; crests towards the observer turn blue on "blueshift"; "v ≪ c; radial (line-of-sight) motion only" ringed. 5 task, equation and grouped givens; zoomed rest and observed Ca II lines with the +0.9 nm arrow; stage 1, stage 2 and the framed 6.9 × 10⁵ m s⁻¹ (away); slate-crossed "+0.9 nm → moving towards us"; rest and star strips with connectors leaning one way, "same fraction for every line"; board gains "radial velocity". 6 the Sun plate turning, equator ellipse with a front arrow, blue and red edge tints; three sub-profiles appearing on their cues and sliding into one broad rotation profile; spin slider 0, 50, 100, 150 km/s with half-width 0, 0.11, 0.22, 0.33 nm; working and framed 0.22 nm each side ("illustrative"); slate-crossed "0.22 nm is the whole spread" (caption 0.44 nm in all); pole-on: the ellipse opens to a circle, tints fade, the profile narrows, pole ringed, "spin across our view: no shift"; board gains "rotation (along our line of sight)". 7 dense and thin particle-box gases with collision flashes and live collision rates; a jostled energy ladder; a broad pressure profile under the dense gas and a sharp one under the thin gas; the dwarf (small Sun plate, broad lines) and the giant (large disc outline, narrow lines, "not to scale"); navy "same temperature, same lines, different widths"; board gains "density". 8 rotation dish and pressure profile (wings highlighted, ringed); the board moves to the centre at full size and its columns pulse on "Position", "Width", "Strength and colour". 9 framed memory card and three large columns pulsing. 10 to 13 question cards (white star with only the rest mark; two same-colour Suns with narrow and broad strips) and brief feedback (observed line and "−0.7 nm" arrow; star B's edges tinted, then a crowded-gas inset). 14 recap (four chips ticking, three columns with sample strips), the painted pocket spectroscope with its slit ringed, and a close-up slit with straight amber fronts arriving and spreading beyond (`ApertureWaves`), "?" either side (final frame). 15 five notes and the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): on "Why does light spread" (capped) it changes to v05's question; the design kept v04's heading.
- Feature board columns are 26 to 30 px at 0.98 scale in the teaching scenes (design 30 to 36 px for entries); the handoff uses large chips and columns instead of a scaled board (a scaled board fell below 26 px).
- Scene 1 star plates are 140 px (design about 220 px): the strips are 170 px apart.
- Scene 2 adds the Sun plate beside the strip (the star whose spectrum is read); scene 3's curves stay (fainter) until the hydrogen graph rather than clearing on "Second".
- Scene 4 shows evenly spaced crests while the star is still (before "sends out one crest") and the H-alpha strip and slider at v = 0 from the scene start; both fill the stage before the explanation reaches them.
- Scene 6: the star's pole-on view keeps the disc plate unchanged (a sphere looks round from any angle); the tilt is shown by the equator ellipse opening to a circle, never by squashing the plate.
- Scene 14 opens with a recap (chips and columns) before the spectroscope; the final frame has the four ticked chips at the upper left instead of a small board.
- Hand tags the design colours red are slate (mistakes, R1) or ink; "redder = cooler" is orange and "bluer = hotter" blue as designed.
- No quoted site definitions on screen.

## Final frame (exported as `M7V04FinalFrame` in `s3.tsx`)

`<HandoffBoard f={end} final />`: heading "Why does light spread after passing an edge or narrow opening?"; four ticked chips (temperature, velocity, spin, density) at (96, 170); the painted pocket spectroscope with its slit at (230, 615), ringed, with dashed zoom lines to a close-up box at (620, 380, 1200 x 470); a barrier at x 900 with a gap from 597 to 633, straight amber fronts (λ 46 px) arriving from the left and spreading beyond at the end phase `V04_END_PHASE`; "?" at (1180, 470) and (1180, 780); chip "Next: why does light spread after passing an edge or narrow opening?" at (96, 890). Exports `SLIT_BOX`, `SLIT_BX`, `SLIT_GAP`, `SLIT_LAMBDA`, `V04_END`, `V04_END_PHASE`.

## Numbers (all from `common.ts`, checked against "Numbers used")

Ca II 393.3 → 394.2 nm: Δλ = +0.9 nm, v = 6.865 × 10⁵ ≈ 6.9 × 10⁵ m s⁻¹; slider +300, +600, -300 km/s: Δλ +0.66, +1.31, -0.66 nm, λ_obs 656.96, 657.61, 655.64 nm; spin 0, 50, 100, 150 km/s: 0, 0.11, 0.22, 0.33 nm; rotation 0.2188 ≈ 0.22 nm each side, 0.44 nm in all; A1 Δλ = -0.7 nm, v = 3.1998 × 10⁵ ≈ 3.2 × 10⁵ m s⁻¹ towards, wrong form 2.997 × 10⁸ ≈ 3.0 × 10⁸; hydrogen strongest near 10 000 K. Line positions NIST air (Ca II K 393.4, H 396.8 in the strips; the site's 393.3 in the example).

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v04` (25 November 2026, provisional timing): **PASS WITH WARNINGS: 0 failures, 6 warnings** (faint v03 labels fading in the hook sample; sparse frames in scenes 2, 5, 7, 8 and attempt 2). Earlier runs failed on mostly empty early-scene frames (scenes 2, 3, 4, 8, 9 and the handoff) and on the scaled board's small text in the handoff; all fixed. Report: `out/explainer/Explainer-phys-y12-m7-v04/grade/Explainer-phys-y12-m7-v04-grade.md`.

**Honest grade: B on provisional timing.** The moving-source crests with the vT bracket, the velocity slider sliding the H-alpha line, the three sub-profiles merging under the turning star and the pole-on narrowing carry the explanation. Soft spots: the feature board is small beside each stage; scene 7's particle boxes are diagram-led.

## For root

- v05 opens on `M7V04FinalFrame`.
- Provisional timing only; re-time from the measured take before any render.
