# phys-y12-m8-v20 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v20.md` (Revision 3 with the 21 November root fix; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v20/common.ts` imports `work/physics-prebuild/p-y12-m8-v20/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`, about 509 s. Every cue resolves (cue check: 0 problems); late cues capped with room for their offsets; a new offset check (`work/tsc-scope/latecheck-m8f.py`) finds no change starting in a scene's last 2 s.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,190 characters, 20 scenes; checked scene by scene by script).
- **Holds.** The design names the hook's 3 s prediction, a 2 s memory-aid hold, attempts 10 s, feedback about 1 s, handoff 2 s and notes 45 s; all are in the prepared timing. **Missing holds: none.** The hook's ring starts at the prepared response hold, after the spoken answer and the learner question (convention).
- **Opening frame:** v19's `M8V19FinalFrame` at frame 0; from frame 1 v19's board fades (its helium cluster and springs go) while identical copies of the gold-foil thumbnail, the enlarged proton with "?", the probe electron and their labels stay solid, so nothing jumps.
- **Plates:** the painted linac tunnel (scenes 1, 3, 17, 18), the painted cloud chamber (10, 11) and a small copy of the painted reactor pool (12). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v20/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 7, `s2.tsx` 8 to 14, `s3.tsx` 15 to 20, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v20`, topic "QUARKS". Registry: after m8-v19.
- New shared kit file: `src/explainer/physics/atom/particles.tsx` (`QDot` quark or particle dot, dashed when anti; `QBag` dashed hadron boundary with a "model" tag; `Diamond` carrier; `CrossGrid` field into the page; `SchemCard` pale grey observation card with a permanent "schematic" note; `Bars` schematic bars; `TreeNode` and `TreeLink` for a classification tree that fills branch by branch; `GridTable` cell grid that fills, tints, lights, dims (text stays solid) and badges by state). Engines: `sims/field-motion.ts` (scene 5's electron paths: a `custom` run past a smooth charge, gentle bend, and a `custom` run past three hard centres, about 120° bounce; scene 10's positron track: two joined `magnetic` runs, the second at 0.46 of the speed, so its radius drops from about 900 to 414 px above the lead plate) and `sims/waves.ts` (`displacement` for the probe wave across the proton, wavelength to scale from λ = hc/E).
- Lesson parts: the linac, cloud-chamber and reactor plate specs and anchors (measured from the native pixels), `fr3` charge fractions, the evidence `TestCard` (centre and compact), v19's carried parts (`FoilThumb`, `BigProton`, `ProbeAim`). Handoff exports `OrgBoard`, `ORG`, `orgSlot`, `MirrorIcon` for v21.

## Stages built

1 the board fades round the proton; its outline thickens on "solid little balls"; three chips; the tick and the painted tunnel sliding in, navy "fire electrons at it" with a pen arrow to the proton; "smaller constituents" underlined; the 3 s ring at the hold. 2 the centre test card "Fundamental? → no parts, no size" with two boxes that turn to "?"; "the test" with a brace; the card shrinks to the top right (stays to scene 8). 3 the painted tunnel (caption "SLAC linear accelerator, California (3 km): illustration") with a navy electron racing down it; the probe-energy slider stepping 1, 5, 20 GeV with live readouts (E, λ, proton ÷ λ: 1.24 × 10⁻¹⁵, 2.48 × 10⁻¹⁶, 6.20 × 10⁻¹⁷ m; 1.4, 6.9, 27.4); the wave across the proton shortening to scale; framed λ ≈ 6.2 × 10⁻¹⁷ m, "27 times smaller (about 30)", "at this energy p ≈ E/c"; the clean-probe chip. 4 the observation card "what they saw" (schematic, not data): navy measured bars, grey outline "smooth proton" bars falling away, a brace and "many more large-angle scatters"; the earlier gold-foil thumbnail; the empty "what it means?" panel. 5 the model panel draws only now: a smooth spread-out charge with a gentle path, then three hard centres with a large-angle bounce; "model: small hard parts (not a photograph)"; the test card ticks "scattering". 6 hadron dots appearing by year (1950 to 1965, positions schematic) then sliding into hexagonal families; "hadron: feels the strong force"; a periodic-table outline; teal "few parts, many combinations"; the card ticks "patterns". 7 a neutron decays (equation, e⁻ and ν̄ leave, the disc turns p); the crossed "decay proves parts"; the muon tag with a slate arrow; the dashed model bag opens to u d d and one d flips to u; "model's account, not evidence"; no new tick. 8 the measured charges (+1, 0) and "charge from parts = ?" from the first frame; u and d chips; framed +⅔ + ⅔ − ⅓ = +1 and +⅔ − ⅓ − ⅓ = 0 with "✓ matches"; "a constraint, not a fit"; two quarks pulled apart and a new pair appearing (confinement). 9 the two-column card: proton ticked (scattering, patterns; ≈ 1.7 fm across), electron empty with "point-like below 10⁻¹⁸ m"; framed "composite" and "fundamental (as far as we know)". 10 the painted cloud chamber beside the coded track chamber (B into page, lead plate); the dotted track tightening above the plate; the rose direction arrow, the amber force arrow, "bends like a positive charge"; the proton-like and electron-like inset; framed "e⁺ (positron), 1932" with a hollow rose ring. 11 discovery cards (e⁺ 1932, μ 1936 ≈ 207 mₑ and "decays in about 2 μs, yet no known parts", π 1947 mountain-top plates) filling dashed placeholders; hadron dots below. 12 the schematic beta spectrum with the dashed total-energy line and a crossed single bar; one electron's missing energy shaded; a decay with e⁻ and ν̄; the small reactor pool plate streaming ν̄ to a detector tank; framed "ν̄ detected 1956 (Cowan and Reines)". 13 the classification tree filling branch by branch; the lepton branch ringed; the crossed "pion = lepton, because it's light". 14 hadron and lepton boxes pulsing; the memory card. 15 to 18 cards and brief feedback. 19 handoff (below). 20 key notes with the memory card.

## Deviations

- **Handoff heading carries v21's learner question** (root rule), switched on "So how does the Standard Model" (capped). The design's final frame keeps this lesson's heading; the root rule wins, as in v19.
- Scene 9: the proton's "size and shape?" box shows "≈ 1.7 fm across" (scene 3's proton diameter) with a tick, so an empty box does not imply the proton has no size; the design lists only the two "parts" ticks.
- Scene 8: the measured charges and "charge from parts = ?" are on screen from the first frame (grader: the opening was mostly empty); the sums still arrive on their cues.
- Scene 11: the cards that are not yet named show as dashed "?" placeholders (same reason).
- Scene 12: the reactor plate is labelled "a nuclear reactor (illustration)", since the painted pool is not the 1956 Savannah River reactor.
- Scene 9's "the card shrinks away" is left out (it would fall in the last 2 s). Scene 4's legend reads "grey: smooth proton / navy: measured".
- No module or video numbers on screen ("an earlier video", "earlier", "next time").
- R1: crossed chips, crosses and slip tags slate; repulsion and proton colours keep their subject meaning; evidence ticks green on the test card, answers in dark-ink frames.

## Final frame (exported as `M8V20FinalFrame` in `s3.tsx`)

`<HandoffBoard20 f={end} final />`: heading "How does the Standard Model organise particles and interactions?"; organising board: "quarks" column with "u (+⅔)" and "d (−⅓)" and four dashed "?" slots; "leptons" column with "e⁻", "μ⁻", "ν" and three dashed slots; a row "antimatter partners" with a mirror icon under both; an empty "forces?" column with four dashed slots holding outline diamonds; chip "Next: how does the Standard Model organise particles and interactions?". v21 opens on this frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

h 6.626 × 10⁻³⁴, c 3.00 × 10⁸, e 1.602 × 10⁻¹⁹. λ = hc/E: 1, 5, 20 GeV → 1.241 × 10⁻¹⁵, 2.482 × 10⁻¹⁶, 6.204 × 10⁻¹⁷ m; 1.7 fm ÷ λ = 1.37, 6.85, 27.4 (said "about thirty"). Charges u +⅔, d −⅓; uud +1, udd 0, uuu +2. Muon 105.7 / 0.511 = 206.8 (≈ 207); mean life 2.2 μs ("about 2 μs"). Electron point-like below 10⁻¹⁸ m. Dates 1932, 1936, 1947, 1930, 1956, 1964, late 1960s.

## Grade

`out/explainer/Explainer-phys-y12-m8-v20/grade/` (16-frame sheet): **PASS WITH WARNINGS, 0 failures, 3 warnings** (sparse frames in `quark-charges`, `muon-pion` and the key notes, each about 56% bare paper). The first grade failed on two mostly empty frames (scenes 8 and 11) and warned on small text ("→ no parts, no size" at 24 px); fixed by showing the measured charges and "?" placeholders from the first frame, dashed placeholder cards, a larger cloud-chamber plate and a 26 px minimum on the test card. Scene-end stills were also checked by eye: a hand tag that sat on the scattering-angle label, a lead-plate label and the beta-spectrum caption were moved.

## For root

- Hook countdown placement as in v18 and v19 (ring at the prepared hold, after the answer).
- Scene 9's added proton size tick (≈ 1.7 fm across): confirm or drop.
- Open decisions 1 and 2 built as designed (schematic panels labelled "schematic, not data"; baryon and meson named here).
- Disk: the C: drive was full when grading began; derived `public-slim` copies under `out/explainer/Explainer-phys-y12-m8-v01` to `v19` (rebuilt on every grade) were removed to free about 1.9 GB.
