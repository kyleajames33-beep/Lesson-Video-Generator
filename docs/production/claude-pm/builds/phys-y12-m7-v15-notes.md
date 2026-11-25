# phys-y12-m7-v15 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v15.md` (Revision 3 with the root label edit of 21 November; visuals win). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v15/common.ts` imports `work/physics-prebuild/p-y12-m7-v15/lesson.json` (marked line), `PROVISIONAL = true`. Every cue resolves (`work/tsc-scope/cuecheck-m7d.py v15`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m7-v15/measured/lesson.json` when voiced and repeat the checks.
- **Prepared input matches the design** (6,010 characters after the root label edit, 18 scenes; checked scene by scene by script). Provisional file from the unchanged `make-provisional.py`. No narration mismatch.
- **Holds (open).** (1) Hook 3 s prediction: prepared hold at the scene end; the ring runs from "prediction" over "Not two c. It's at about zero point nine c" and the tick lands after it. (2) The design's 2 s thrust-clock hold (scenes 5 and 6) is missing; the thrust clock runs inside the narration. Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present.
- **Opening frame:** v14's exported `M7V14FinalFrame` at frame 0; from frame 1 the γ graph and arrow fade and the thrusting spacecraft (the probe) moves to the top left.
- **Plates:** spacecraft with exhaust (the probe), steel ball (collision inset), accelerator tunnel (worked proton, accelerators, A1 card and feedback), Sun (handoff). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v15/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v15`, topic "RELATIVISTIC MOMENTUM". Registry: after m7-v14.
- Shared: `physics/light/relativity.tsx` (`CurvePlot` for the p-v plot, now with an optional light grid; `MomentumBar`, `SpeedGauge`, `StorageRing`, `LINAC`). This closes the design's kit gaps 1 and 2.
- Lesson parts: `pOfB` (p/(m₀c) = γv/c), `RED`; s1 `Probe` (spacecraft with an orange force arrow), s2 `BeamDot` (a dot along the tunnel plate's beam line).

## Stages built

1 the probe with "m₀ = 1000 kg", "idealised: ignore fuel use", F arrow, "a = F/m = 10 m s⁻²"; v against t (Earth frame) axes with the red dashed c; grey dashed classical line passing c at 3.0 × 10⁷ s ≈ 347 days; Earth-frame clock on the time axis; ring with "2.1c", "exactly c", "about 0.9c"; the teal curve bending below c, "0.90c at 2 years (Earth frame)", slate cross on 2.1c, tick on 0.9c; "never touches"; "light speed" underlined. 2 probe, seconds clock and momentum bar growing by equal blocks of 1.0 × 10⁴ kg m s⁻¹; "p = mv (Year 11)", "F = Δp/Δt", "same Δp each second", "Δp = FΔt: true at any speed". 3 two-frame collision inset with steel-ball plates; "Year 11: p = mv (fails near c)"; framed data-sheet p_v writing on as it is spoken, "= γm₀v", "a product, not a split", rest-mass and low-speed chips, the γ inset. 4 p/(m₀c) against v/c on an HSC grid: classical dashed line to 1, relativistic curve peeling up and climbing, red asymptote, "approached, never reached". 5 live stage: probe, bar, gauge and plot; readouts t (Earth frame), p, γ, v; equal Δp steps mapped across and down with shrinking teal speed brackets ("same push, less speed"); red arrow up the steep end; "p → ∞ as v → c"; framed "finite FΔt → finite p → v < c". 6 the table (t, p, γ, v) row by row; ten equal blocks; the needle just below c. 7 photon packet against the probe (racing lanes), photon momentum arrow, framed "m₀ > 0: v < c always". 8 older books against today, grey relativistic-mass chip ("avoided today"), invariant-mass chip, fast muon with "own frame: m₀ unchanged", p and energy bars ("next video"), slate-crossed "mass becomes infinite". 9 tunnel plate with a proton dot, small p-v plot marking both values, working to framed 5.83 × 10⁻¹⁹, slate-crossed classical 3.80 × 10⁻¹⁹ ("35% too small at 0.758c"). 10 0.99c against 0.999c (+0.9%), γ 7.09 and 22.4, framed momenta, bars, "× 3.2". 11 tunnel beside a coded LHC ring with field symbols; r = p/qB chip; 3 m s⁻¹ short of c; γ ≈ 6.9 × 10³; radius 2.8 km at 7.7 T; slate-crossed classical 0.40 m circle; "magnets designed for γm₀v". 12 memory card; the bar grows off the top while the needle presses on c. 13 to 16 question cards (electron in the tunnel; bar and gauge with no values) and feedback (plot points; the asymptote). 17 thrusting probe with growing p arrow and energy bar, then (at "And here's the surprise") the bar and gauge shrink, the probe stops ("p = 0"), the dashed energy store "?" with "energy at rest? E = mc²", the painted Sun "loses ≈ 4 million tonnes per second"; heading changes to v16's question (final frame). 18 key notes with the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule), on "So how does mass-energy accounting" (capped).
- **Handoff timing:** the design shrinks the bar and gauge on "pushing harder always adds momentum" (the scene's first words); the build keeps them large while the probe thrusts (p arrow and an energy bar growing: "energy grows too") and shrinks them on "And here's the surprise", so the first sentence is shown, not blank.
- **Scene 10 working row:** the 0.999c product uses γ = 22.37 (said and labelled "22.4") so it shows the design's 6.11 × 10⁻²¹; with 22.4 the product is 6.12 × 10⁻²¹. Root to confirm.
- Scene 5 shows equal momentum steps of 0.5 m₀c (p = 0.5, 1.0, 1.5, 2.0 m₀c) with live readouts; the design lists 0.5, 1, 2.
- Scene 11 chip says "earlier: r = mv/qB" (no module number on screen; the root label edit removed it from the narration); the ring carries "not to scale".
- Scene 3 adds a grey "Year 11: p = mv (fails near c)" line before the new form.
- Historical and data claims checked: LHC 6.5 TeV operating example, γ = 6.93 × 10³, dipole about 7.7 T, bending radius 2.8 km (2804 m), 3.1 m s⁻¹ short of c.

## Final frame (exported as `M7V15FinalFrame` in `s3.tsx`)

`<HandoffBoard15 f={end} final />`: heading "How does mass-energy accounting explain fusion, annihilation and combustion?"; small momentum bar and gauge (needle at the c stop) at the top left (transform translate(96, 170) scale 0.55); the spacecraft (exhaust off) at (140, 430, w 600) with "p = 0"; dashed grey energy store (x 820, base 740, 90 × 300) with "?" and "energy at rest? E = mc²"; painted Sun (cx 1460, cy 520, d 380) with "loses ≈ 4 million tonnes per second"; chip "Next: how does mass-energy accounting explain fusion, annihilation and combustion?" at (96, 870). Geometry exported as `HANDOFF15`.

## Numbers (all from `common.ts`, checked against "Numbers used")

a = 10 m s⁻²; 3.0 × 10⁷ s = 347 days; 2 years: 2.10 m₀c, 0.90c, classical 2.1c; table 0.71, 0.89, 0.95, 0.995c with γ 1.41, 2.24, 3.16, 10.0; proton γ 1.533, 5.83 × 10⁻¹⁹, classical 3.80 × 10⁻¹⁹ (35% small); electrons γ 7.09 and 22.4, 1.92 and 6.11 × 10⁻²¹, +0.9%, × 3.2; LHC γ 6.9 × 10³, 2.8 km, 0.40 m; A1 γ 3.20, 8.3 × 10⁻²², classical 2.6 × 10⁻²²; Sun ≈ 4 million tonnes per second (4.2 × 10⁹ kg).

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v15` (25 November 2026, provisional timing): **PASS WITH WARNINGS: 0 failures, 9 warnings** (sparse frames early in the hook, force, relativistic-momentum, worked-proton and feedback-1 scenes; the handoff's first seconds; few pictures). Earlier runs failed on near-empty early frames (force, relativistic momentum, p-v graph, feedback 1, handoff); fixed with a larger probe and seconds clock, a working panel line, the graph grid, the tunnel plate in feedback and the handoff timing above. Report: `out/explainer/Explainer-phys-y12-m7-v15/grade/Explainer-phys-y12-m7-v15-grade.md`.

**Honest grade: B on provisional timing.** The classical line passing c against the bending curve, the equal momentum steps mapped to shrinking speed steps, and the gauge pressing on c while the bar keeps growing carry the explanation. Soft spots: the hook ring runs over narration; scenes 8 and 10 are text-led.

## For root

- v16 opens on `M7V15FinalFrame`.
- Decide the hook pause position and the thrust-clock hold before voicing.
- Confirm the scene 10 row (γ = 22.37 to keep 6.11) and the handoff shrink timing.
