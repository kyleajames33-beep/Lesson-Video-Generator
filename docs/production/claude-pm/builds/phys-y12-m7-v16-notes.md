# phys-y12-m7-v16 build notes (pre-build on provisional timing)

Build agent (Claude), 25 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m7-v16.md` (Revision 3 plus the coherence audit fix of 24 November; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m7-v16/common.ts` imports `work/physics-prebuild/p-y12-m7-v16/lesson.json` (marked line), `PROVISIONAL = true`. Every cue resolves (`work/tsc-scope/cuecheck-m7d.py v16`: 0 problems); late cues capped. Switch to `docs/production/claude-pm/lessons/p-y12-m7-v16/measured/lesson.json` when voiced and repeat the checks.
- **NARRATION MISMATCH (built to the current design).** The prepared `lesson.json` and the brief 259 source audit predate the coherence audit fix: scene 5 (fusion) lacks "In these symbols, the top number is the mass number, the protons plus neutrons, and the bottom number is the atomic number, the protons." (prepared 5,750 characters; design 5,887). The provisional file was made by running the unchanged `make-provisional.py` on a scratch copy of the audit carrying the current narration (in the session scratchpad; `work/brief259` not edited) and copying its output to `work/physics-prebuild/p-y12-m7-v16/lesson.json` (its `sourceDesignSha256` is still the old audit hash). **The prepared inputs in `docs/production/claude-pm/lessons/p-y12-m7-v16/` must be regenerated before voicing.**
- **Holds (open).** (1) Hook 3 s prediction: prepared hold at the scene end; the ring runs from "prediction" over "That four million tonnes isn't gas blowing away" and the marks land after it. (2) The design's 2 s energy-out slider hold in scene 3 is missing; the slider steps (9.0 × 10⁷ to 9.0 × 10¹⁶ J) run 26 frames apart inside the narration. Memory aid 2 s, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s are present.
- **Opening frame:** v15's exported `M7V15FinalFrame` at frame 0; from frame 1 the probe and gauges fade and the painted Sun moves to the centre left and grows.
- **Plates:** Sun, spacecraft (probe at rest), power station, fuel can, top-pan balance (coded readout in its display), painted flame (g1), lit Bunsen burner (p01). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m7-v16/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 11, `s3.tsx` 12 to 17, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m7-v16`, topic "MASS AND ENERGY". Registry: after m7-v15.
- Shared (new file): `physics/light/massenergy.tsx` (`SystemBox` with a mass bar and the slice that has left, `Particle`, `Nucleus`, `Nuclide` (A over Z notation), `LogBars`/`logX`, `TempBar`, `PhotonField`; plate specs `FUEL_CAN`, `FLAME`, `BUNSEN`). This closes the design's kit gaps 1 to 3.
- Lesson parts: colour roles (`MASS` grey-blue, `ROSE`, `NEUTRON`), `Outflow` (energy packets leaving a body), `Molecules` (oxygen red, carbon dark grey, hydrogen white, R3).

## Stages built

1 the Sun with outgoing packets, "P ≈ 3.8 × 10²⁶ W", "loses ≈ 4 million tonnes per second", the ring and three chips; tick on "energy leaves as light", slate crosses on "blown away as gas" and "destroyed"; dashed system box with the Sun's mass bar dipping; "energy out, Sun's mass down"; the three process names underlined in turn. 2 "E = mc²" (data sheet); the probe at rest with its energy bar filling ("rest energy = mc² (p = 0)"); the site definition; a mass bar and a rest-energy bar joined by "× c²"; "c² = 9.0 × 10¹⁶ J kg⁻¹"; the painted power station and framed "9.0 × 10⁷ s ≈ 2.9 years"; "one kilogram!". 3 the system boundary with packets leaving, framed "Δm = E / c²", the energy-out slider with E and Δm readouts (1.0 × 10⁻⁹ to 1.0 kg) and a log-scaled slice, packets entering for "takes in energy", the ledger "inside: mc² + outside: E = total (constant)", "energy + momentum", "system's mass falls", slate-crossed "mass is destroyed". 4 working layout with the Sun in its box; framed 4.2 × 10⁹ kg each second; slate-crossed "÷ c" slip; "≈ 4.2 million tonnes". 5 four protons ("4 × ¹₁H") through "several steps" to a helium nucleus and "⁴₂He" with A and Z rings and tags (faded before the bars); "4 × hydrogen" and "helium" bars with the 0.7% gap ("gap 10× larger"); packets and neutrino dots leaving; "energy out"; framed 6.0 × 10¹¹ kg each second, "≈ 600 million tonnes". 6 e⁻ and e⁺ with charges; "positron: antielectron"; they meet in a dashed box and vanish; two γ packets leave in opposite directions with equal and opposite momentum arrows; "p_total = 0"; before/after inset; the coded PET detector ring (no patient) with opposite blocks lit. 7 working beside the pair's box; 1.64 × 10⁻¹³ J; framed 5.1 × 10⁵ eV ≈ 0.51 MeV; "1 MeV = 10⁶ eV"; slate-crossed "each photon 1.64 × 10⁻¹³ J"; the rest-mass bar empties ("all the rest energy leaves: 100%"). 8 the fuel can and red O₂ molecules in one box ("1.0 kg petrol + 3.5 kg oxygen = 4.5 kg"); framed 4.9 × 10⁻¹⁰ kg ≈ 0.49 μg and the fraction ≈ 1 × 10⁻¹⁰; slate-crossed petrol-only fraction ("count the oxygen too"). 9 log-scale bars (combustion, fusion, annihilation) with small plates at their ends; the coded molecule with shifting electrons ("chemical: a few eV per bond") and a regrouping nucleus ("nuclear: millions of eV"); "× about 10⁶ per particle". 10 the painted balance reading 4.500 000 kg throughout with the painted flame; the ringed last digit ("change: 0.000 000 49 g, below an ordinary lab balance's resolution"); fusion bars "nuclear: measurable". 11 memory card over the system box with packets leaving; Sun and fuel can; "c² = 9.0 × 10¹⁶ J kg⁻¹". 12 to 15 question cards (the Sun as "a star"; the Bunsen flame in a "methane + oxygen" box) and feedback (star box dipping; balance). 16 three system boxes across the top (Sun, e⁻ e⁺, fuel can) each "Δm = E/c²"; "Energy out, mass down: Δm = E/c²" strip; pair production (two γ packets converge, e⁻ and e⁺ emerge); "≥ 0.51 MeV each" and "head-on, equal energies"; the hot photon field and a falling temperature bar (packets redden and lengthen); heading changes to Module 8 v01's question (final frame). 17 key notes with the memory card.

## Deviations

- **Handoff heading carries the next learner question** (root rule): Module 8 v01's "How did cooling radiation allow matter to form in the early Universe?" (from `phys-y12-m8-v01.md`), on "So how did cooling radiation" (capped).
- **Site definition quoted exactly** (lesson 14 vocabulary): "Rest energy (E₀): The energy equivalent of an object's mass at rest: E₀ = mc². Even a stationary particle carries this energy."
- Hook: "blown away as gas" is also slate-crossed (the narration rules it out); the design crosses only "destroyed".
- Scene 2 adds a mass bar and a rest-energy bar joined by "× c²" on "Mass and energy are equivalent".
- Scene 5: the 0.7% mass gap is drawn 10 times larger and tagged (at true scale it is invisible); the four hydrogen nuclei are labelled once as "4 × ¹₁H" in full notation.
- Scene 6 adds a before/after momentum inset; scene 7 adds the lead line "rest energy of the pair: E = (2mₑ)c²"; feedback 2 adds "energy leaves the system: Δm = E/c²".
- Scene 9: the optional greyed fission bar is omitted (open decision 2 left to root).
- Scene 10: the balance scene is tagged "closed system: petrol + oxygen burning (idealised)".
- Handoff: the three system boxes run the full width (larger than "small"); a memory-line strip shows during the first two sentences.
- The final frame includes the Revision 2 grey tag "head-on, equal energies" (root to add it to m8-v01's opening description, design open decision 4).

## Final frame (exported as `M7V16FinalFrame` in `s3.tsx`; the last frame of Module 7)

`<HandoffBoard16 f={end} final />`: heading "How did cooling radiation allow matter to form in the early Universe?"; three dashed system boxes (x 96, 690, 1284; y 180, 540 × 190) holding the Sun, an e⁻ e⁺ pair and the fuel can, each "Δm = E/c²"; at (860, 600) two amber γ packets converging with navy e⁻ and rose e⁺ below, "pair production", "≥ 0.51 MeV each" and grey "head-on, equal energies"; a faint photon field (x 96 to 1576, y 360 to 830, cooled 0.7); temperature bar at x 1680 (level 0.3); "hot early Universe"; chip "Next: how did cooling radiation allow matter to form in the early Universe?" at (96, 870).

## Numbers (all from `common.ts`, checked against "Numbers used")

c² = 9.0 × 10¹⁶; 1 kg: 9.0 × 10⁷ s = 2.85 years (≈ 2.9); slider Δm 1.0 × 10⁻⁹, 10⁻⁶, 10⁻³, 1.0 kg; Sun 4.2 × 10⁹ kg s⁻¹, slip 1.3 × 10¹⁸, hydrogen 6.0 × 10¹¹ kg s⁻¹ (≈ 600 million tonnes); annihilation 1.64 × 10⁻¹³ J, 8.20 × 10⁻¹⁴ J, 5.1 × 10⁵ eV ≈ 0.51 MeV; petrol 4.9 × 10⁻¹⁰ kg (0.49 μg), oxygen 3.5 kg, 4.5 kg, fraction ≈ 1 × 10⁻¹⁰; fractions 10⁻¹⁰, 7 × 10⁻³, 1; balance change 0.000 000 49 g; A1 1.7 × 10¹⁰ and 2.4 × 10¹² kg s⁻¹, slip 5.0 × 10¹⁸ kg; A2 6.1 × 10⁻¹⁰ kg (≈ 0.6 μg); pair threshold 0.51 MeV.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m7-v16` (25 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 5 warnings** (sparse frames in annihilation, worked annihilation, memory aid and feedback 2; few pictures). Earlier runs failed on near-empty frames (E = mc², annihilation, worked annihilation, feedback 2, handoff) and small particle labels; fixed with the mass-energy bar pair, the before/after inset, a larger event box, lead rows, full-width system boxes and larger particles. Report: `out/explainer/Explainer-phys-y12-m7-v16/grade/Explainer-phys-y12-m7-v16-grade.md`.

**Honest grade: B on provisional timing.** The system boundary with packets leaving and the mass slice, the helium notation and enlarged 0.7% gap, the opposite photons with cancelling momentum and the unchanging balance digits carry the explanation. Soft spots: the hook ring runs over narration; the three-scale chart is static apart from its bars.

## For root

- Regenerate the prepared inputs for v16 (scene 5 sentence) before voicing.
- Module 8 v01 opens on `M7V16FinalFrame` (add the grey "head-on, equal energies" tag to its opening description).
- Decide the hook pause position, the scene 3 slider hold and the fission bar (open decision 2).
