# phys-y12-m8-v21 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v21.md` (Revision 3; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v21/common.ts` imports `work/physics-prebuild/p-y12-m8-v21/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`, about 510 s. Every cue resolves (cue check: 0 problems); late cues capped; the offset check (`work/tsc-scope/latecheck-m8f.py`) finds no change starting in a scene's last 2 s.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 6,213 characters, 19 scenes; checked scene by scene by script).
- **Holds.** The design names the hook's 3 s prediction, a 2 s memory-aid hold, attempts 10 s, feedback about 1 s, handoff 2 s and notes 45 s; all are in the prepared timing. **Missing holds: none.** The hook's ring starts at the prepared response hold (convention).
- **Opening frame:** v20's `M8V20FinalFrame` at frame 0; from frame 1 the same organising board stays and pulses part by part (quarks, leptons, antimatter row, forces column).
- **Plates:** the painted top-view boats (scene 8), the painted Sun (7 small, 10) and the painted CMS-style detector (11, small). **Plate requests: none** (the design's root call on a painted bag stands: a plain disc tagged "heavy bag").

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v21/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 13, `s3.tsx` 14 to 19, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v21`, topic "STANDARD MODEL". Registry: after m8-v20.
- Shared kit used: `physics/atom/particles.tsx` (new with v20: `GridTable`, `QDot`, `QBag`, `Diamond`), `Readout`, `MarkedHeading`, `Disc`.
- Lesson parts: the Standard Model table (`SM_DEFS`, `CARRIER_DEFS`, three geometries, `smCells`, `cellC`, `SMBoard` drawing heads, cells by state, the carriers block, the gold Higgs ring and the grey gravity box; `BadgeLegend` for the gold "made in collisions" badge), plate specs (CMS, boats), carrier tones. The handoff exports `HandoffBoard21`, `RingBehind`, `HD21` for v22.
- No simulation engine (the design records none is needed: counts, sums and a labelled estimate).

## Stages built

1 the board pulses on "two quarks", "a few leptons", "their antimatter partners", "some forces"; three chips; the tick; the kinds readout "17" with the counting convention and "we'll count them in" ringed; the heading underlined; the 3 s ring at the hold. 2 the board splits: the antimatter row goes, "matter particles (quarks, leptons)" and "force carriers" (four outline diamonds) each boxed; the Standard Model chip; "stuff", "pushes and pulls". 3 the empty table, quark cells filling pair by pair, tinted amber (+⅔) and teal (−⅓), masses on "a heavier copy", generation 1 glowing ("everyday matter"), "made in collisions; decay quickly"; top quark against gold atom bars (173 against 183 GeV/c²), "heavy, yet no parts"; kinds so far 0 → 6. 4 the lepton row; masses on the charged leptons only with a navy arrow "heavier each time"; "neutrinos: tiny masses, order not settled"; τ 1.78 GeV/c² (proton 0.94), "1.89 times a proton: nearly twice"; the lepton chip; kinds 12. 5 generation-1 cells reflected across a dashed mirror line, anti cells with bars and dashed outlines, masses copied; the antiparticle chip and "energy is never reversed"; n (B = +1, Q = 0) against n̄ (B = −1, Q = 0) ringed, "same charge, still different"; ū −⅔ and d̄ +⅓ large; "the photon is its own antiparticle". 6 four bags (π⁺, π⁻, antiproton, K⁺) with tallies (π⁺ framed), "anti-down: +⅓", the framed whole-number chip with a brace. 7 four force rows: strength bars on a log scale, range bars on a log axis (10⁻¹⁵ m "leftover pull between nucleons", 10⁻¹⁸ m, two "unlimited" arrows), acts-on pictures (quark bag, charge pair, quark and leptons, the small painted Sun); "two settings" and "weakest, but always attracts"; the guide-values line. 8 the painted boats on a lake, the heavy bag arcing across, the boats drifting apart with recoil arrows; "analogy: shows repulsion only"; electrons exchanging a γ diamond, a g between quarks, W⁺, W⁻, Z⁰; the carriers block fills; kinds 16. 9 the carrier-mass slider: 10 GeV/c², W 80.4, Z 91.2 with the diamond's travel shrinking on a log distance axis and a live reach readout (2.0 × 10⁻¹⁷, 2.5 × 10⁻¹⁸, 2.2 × 10⁻¹⁸ m, "extension estimate, R ≈ ħc/(mc²)"); "heavier carrier → shorter reach"; the photon (0, unlimited) travelling off the frame; a gluon held inside a proton, "massless but confined". 10 a d turning to u inside the neutron (ringed), the W⁻ leaving and splitting into e⁻ and ν̄; framed d → u + W⁻ → u + e⁻ + ν̄; the painted Sun with p + p → ²H + e⁺ + ν; the flavour chip. 11 the full table with the Higgs ring (125 GeV/c², 2012); gold lines to W, Z, the six quarks and the charged leptons only; "ν mass: origin unknown"; "γ and g: massless"; the painted detector (illustration); the proton bar with its 1% sliver; the framed Higgs chip. 12 three grey boxes outside the table (gravity, dark matter, neutrino mass), the inquiry question with a tick, "three gaps". 13 the compact table pulsing row by row; the memory card. 14 to 17 cards and brief feedback. 18 handoff (below). 19 key notes with the memory card.

## Deviations

- **Handoff heading carries v22's learner question** (root rule), switched on "So how do accelerators" (capped).
- Scene 5: the mirror shows the generation-1 cells (u, d, e⁻) and their partners rather than the whole table, so the reflected labels stay readable (36 to 44 px).
- Scene 7: the "neutral planet pair" inset is left out (no room at readable size); the gravity row carries the small painted Sun and the hand tag.
- Scene 3: generations 2 and 3 are not dimmed (R2, text never faint); a grey hand tag with an underline marks them instead.
- Scene 18: the gold badges are small round marks on the cells with one legend "made in collisions" (a 26 px label on every cell would not fit); νμ, ντ and g relight without a badge (they were not named).
- No module or video numbers on screen ("last time", "earlier video").

## Final frame (exported as `M8V21FinalFrame` in `s3.tsx`)

`<HandoffBoard21 f={end} final />`: heading "How do accelerators create and test evidence about particles?"; the full table (quarks and leptons in three generation columns, carriers block, gold Higgs ring, grey "gravity: not in the Standard Model" box); generation 1 and the photon lit, every other cell relit, with gold badges on c, s, t, b, μ, τ, W, Z and H and the legend "made in collisions"; behind the table a thin ring with two rose dots meeting at the bottom in a gold flash, "?"; chip "Next: how do accelerators create and test evidence about particles?". v22 opens on this frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

17 = 6 + 6 + 4 + 1. Charges u, c, t +⅔; d, s, b −⅓; ū −⅔, d̄ +⅓, s̄ +⅓. Sums π⁺ +1, π⁻ −1, p̄ −1, K⁺ +1, K⁻ −1; slip +⅓. Masses u 2.2, d 4.7, s 93 MeV; c 1.27, b 4.18, t 173 GeV; e 0.511, μ 106 MeV, τ 1.78 GeV; gold 196.966569 × 0.9315 = 183.5 GeV/c²; τ / p = 1.89; W, Z / p = 85.7, 97.2. Reach ħc/(mc²): 1.97 × 10⁻¹⁷, 2.45 × 10⁻¹⁸, 2.16 × 10⁻¹⁸ m. Strength guide 1 : 10⁻² : 10⁻¹³ : 10⁻³⁸. Higgs 125 GeV/c², 2012; proton 938 MeV/c², quark masses about 1%.

## Grade

`out/explainer/Explainer-phys-y12-m8-v21/grade/` (16-frame sheet): **PASS WITH WARNINGS, 0 failures, 5 warnings** (sparse frames in `hadron-charges`, `feedback-1`, `attempt-2` and the key notes; "few pictures": 3 of 14 teaching frames hold a plate or large diagram, since this lesson is mostly coded tables and tallies by design). Earlier grades failed on the photon's "γ" running off the frame in scene 9 (its travel now stops inside the frame with an arrow onward) and a mostly empty first frame in scene 15 (now a "K⁻ = s ū: add the quark charges" row, a larger K⁻ picture and an (a) (b) (c) checklist that ticks on the cues); the positron cell's name ("anti-electron") collided with its mass and now reads "positron".

## For root

- Open decision 1 (seventeen with the counting convention on screen) and 2 (boat analogy with the repulsion-only chip) built as designed.
- The mirror reduced to generation 1 (scene 5): confirm.
