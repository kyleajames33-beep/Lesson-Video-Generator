# chem-y11-m1-v17 build notes (built on the measured narration)

Builder: Claude build agent, 21 November 2026. Explainer id `Explainer-chem-y11-m1-v17`, export `config_y11c_m1v17` (18 scenes, 14,349 frames, about 478 s; key notes 1,350 frames = 45 s, measured). Sheet: `work/quality-audit/fixed/chem-y11-m1-v17-sheet.jpg` (the final grade sheet; no frame stamps). No MP4 built. Narration unchanged.

## Speech-rate check (before building)
Characters of script divided by audio seconds (startFrame to endFrame) for all 18 scenes: 13.3 to 17.6 characters per second (lowest: attempt-1 13.3, memory-line 13.8). None under 10, so no run-on take.

## Files
`src/explainer/lessons/chem-y11-m1-v17/`:
- `common.ts`: measured lookups, holds, plates (alpha boxes measured) and the one data table: `RAD` (alpha, beta, gamma: composition, charge, relative mass, change in protons and neutrons, colours), `ISO` (the six named radioisotopes: origin, radiation, where found or used, plate), `PEN` (chance-engine weights for where each kind of radiation stops; illustrative) and `IONS_PER_100` (ionisation-trail density; model). Every card value, counter, caption, readout and trail reads it.
- `parts.tsx`: V16 parts re-exported read-only (and through them V13 to V01). New: `Nuc` (v08 nucleon cluster with excited glow and flicker), `AlphaClu`, `BetaDot`, `RadCard` (labels from the first frame, values on cue), `Change` (change-in-the-nucleus counters), `Band` (small band-of-stability sketch), the penetration diagram (`Absorbers`, `PenRun`, `Lane`, `Trail`, `RUNS`), `IonMark`, `Detector`, `Chamber` (smoke-alarm chamber cutaway), `K40Card`.
- `opening.tsx`: V16's `SceneHandoff` frozen on its last frame (read-only import) with the push into the nucleus.
- `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 12), `s3.tsx` (13 to 18), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: import and entry added after `config_y11c_m1v16` (one scripted edit, file re-read immediately before, LF kept).
- Typecheck: scoped tsconfig in the scratchpad, clean. Config loads in node (every cue resolves).

## Plates
All design-named plates exist; uniform scale only: `y11c-smoke-alarm-v1`, `g1-tree-v1`, `y11c-uranium-ore-v1`, `phys-y11-gamma-source-v1`, `y11c-lead-shielded-vial-v1`, `y12p-absorber-paper-v1`, `y12p-absorber-aluminium-v1`, `y12p-lead-bricks-v1`. None missing.

## Simulation
`src/explainer/sims/chance.ts`, `{kind: 'weighted'}`, one run per radiation (alpha 24 trials seed 171, all "in the paper"; beta 24 trials seed 172, all "in the aluminium"; gamma 40 trials seed 173, weights 0 / 0.08 / 0.62 / 0.30 over paper, aluminium, lead, through the lead). Each trial is one particle or photon flying along its lane and stopping at its absorber; surviving gamma rays stay as thin solid tracks beyond the lead ("reduced, not zero"). The live table (sent, stopped by paper, by aluminium, by lead, through the lead; one column per run) reads the same stored runs. Labelled "model: not measured count rates".

## Opening-frame match (V16)
Frame 0 is V16's own `SceneHandoff` frozen at V16's `dur('handoff') - 1` (imported read-only from `chem-y11-m1-v16/s3.tsx`), so it equals V16's final frame by construction. On "Now we go inside it" the frozen frame scales about V16's enlarged nucleus and moves it to the centre while fading, over V17's redraw of the same nucleus panel at identical geometry, so the atom and labels shrink away and the nucleus stays. V16 was not edited.

## Final frame (scene 17 `handoff`), for the chem-y11-m1-v18 builder
Exported read-only from `src/explainer/lessons/chem-y11-m1-v17/s3.tsx`: `SceneHandoff`, `U17` ({cx 470, cy 640, R 225, model 24 protons, 30 neutrons drawn before the decay}), `HE17` ([1010, 520]) and `NEXT17`. Open V18 with `<Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze>` (V17's `dur` from its `common.ts`); V17's key notes cross-fade back to this frame.
- Heading "Which element is left?" (hand, 60 px, x 96, y 150).
- Navy chip (x 96, y 196, 84 px tall, 44 px navy text): "Next: how do we balance a nuclear reaction?".
- Left: the model heavy nucleus after the alpha leaves (22 red protons, 28 slate neutrons, nucleon radius for an outer radius of 225 px) centred (470, 640), a paper circle with a 72 px "?" above it (where the ²³⁸₉₂U label was), the label "what's left?" (38 px) under it.
- Right: two lines (38 px ink) "alpha and beta decay change the proton number," / "so the nucleus becomes a different element" at x 860, y 330 and 380; the alpha particle (2 red + 2 slate nucleons in an orange ring) at (1010, 520) with ⁴₂He beside it and the orange hand tag "alpha particle".
- Reaction lines in solid dark ink: ²³⁸₉₂U → ? + ⁴₂He at y about 766 (symbol 70 px, numbers 44 px, the top and bottom numbers glowing amber), and "⁵⁹Co + neutron → ⁶⁰Co" (48 px) at y 920. Nothing below y 935.

## Departures from the design (with reasons)
- Scene 1: the heading writes on after the push (about 5.6 s), not on "from" (the top band was empty for 25 s). V16's enlarged nucleus is sodium-23 (stable), so it carries no "unstable" label.
- Scene 1: the alarm arrives on "ionisation smoke alarm" (when it is named), with the teal "human-made" tag on "made by people".
- Scenes 3 to 5: the nuclear changes show as "change in the nucleus" counters (protons and neutrons, from 0 to −2/−2, +1/−1, 0/0), not as absolute proton numbers, so uranium's daughter (90 protons, a v18 result) is not revealed. The alpha and gamma nuclei are labelled models (far fewer nucleons drawn); carbon-14 is drawn with its true 6 protons and 8 neutrons. Card labels show from the first frame; values arrive on cue.
- Scene 7: thumbnails of the three absorber plates sit above coded absorbers; the source pot sits above the coded source. The answer is framed as "gamma gets furthest".
- Scene 8: the potassium-40 caption card shows "K-40" with "19 protons, 21 neutrons" (no plate exists; the design accepts a caption card).
- Scene 9: the neutron inset sits under the cobalt-60 column; its line "⁵⁹Co + neutron → ⁶⁰Co" stays after the inset fades. The α, β and γ bracket arrives on "In Australia".
- Scene 10: the C-14 pair arrives on "The type of radiation" (the lower right was empty for 19 s).
- Scene 11: the half-life model is 16 nuclei, 8 decaying (model), as designed.
- Scene 14: a compact penetration diagram joins the feedback rows on "Beta is stopped" (the lower right was empty).
- Scene 17: the explanatory two lines at the upper right arrive on "change the number" (the right half was empty for 10 s).
- Series pattern kept (Card, QTag, PauseHoldR, Givens, Framed, Chip) rather than `src/explainer/shared/scenes.tsx`, to match V11 to V16.

## Cue check
All cues resolve against the measured word timings (`cueFrame` throws on a missing phrase; config loaded in node). Hyphenated words are single tokens ("americium-two-forty-one", "uranium-two-thirty-eight", "carbon-fourteen"), so cues use the whole token. Repeated phrases: scene 3 "An alpha particle" is the first occurrence (the definition, not "gives out an alpha particle"); scene 5 "A gamma ray" first occurrence (not "out a gamma ray"); scene 7 "stops." is the only "stops" (not "stopped"); scene 8 "beta particles" first occurrence (carbon-14, not potassium-40); scene 9 "gives out gamma rays" (technetium; cobalt's is "then gamma"). Countdowns: 3 s ring from "Have a think"; 10 s rings full from "Pause here".

## Grade checker
See the result line at the end of this file and `out/explainer/Explainer-chem-y11-m1-v17/grade/Explainer-chem-y11-m1-v17-grade.md`.

## Dense 3 s sweep
One still every 90 frames (scale 0.5, 160 stills), montaged per 40 and read in full, plus earlier scene-sample passes (54 stills). Defects found and fixed: (1) hook label under the nucleus over the circle edge; (2) alpha: "uranium-238 (model)" over the leaving cluster and "(a helium nucleus)" over the nucleus (nucleus moved left, cluster and labels re-placed); (3) beta: "not from the shells" and the beta tag clipped by the card, the shell ring crossing the element label (ring smaller, cross moved to the top); (4) gamma: "energy, not matter" clipped by the card; (5) cards empty for up to 10 s (labels now from the first frame); (6) penetration table labels running into the number columns and the framed answer's tick off the right edge; (7) "most ionising" over the paper thumbnail; (8) human-made: the ⁵⁹Co line over the inset and captions (inset re-laid out); (9) natural and human-made boards half empty below (plates enlarged); (10) "gamma gets out; gone in hours" over the vial; (11) handoff "?" circle under the "Next" chip (nucleus lowered) and the right half empty for 10 s; (12) the attempt 2 card sparse (alarm and tree enlarged); (13) feedback 1 lower right empty (compact diagram added); (14) notes card "source" label overflowing. No faint or ghosted main visual: plates, cards, diagrams, nuclei and the table are solid in full ink; partial opacities are only fades on cue and the lane guides behind the live particles.

## Things to check at playback speed
The push into the nucleus (scene 1); each decay (cluster leaving, the neutron turning red and the electron shooting out, the photon leaving the glowing nucleus) against its words; the three runs' pace in scene 7 (alpha 4 frames apart, beta 4, gamma 3); the pour of carbon-14 beta dots in scene 10; the chamber tracks in scene 11; key notes cross-fade to the final frame.

## Builder's sheet grade
A. Every teaching frame has a painted plate (alarm, tree, ore, source pot, vial, absorbers) or the live penetration run with readouts; decays animate in the nucleus with counters; framed green answers and red crossed slips in both feedback scenes; question cards whole with neutral pictures; five notes with the framed memory card; 45 s notes scene. Softer: scene 2 has no plate (the unstable nucleus, the band sketch and the ionised atom carry it), and the notes screen is 509 characters (checker warning; the five bullets are as designed).

Final checker run on the final code (22 November 2026, 07:15 local): PASS WITH WARNINGS, 0 failures, 1 warning (dense key notes, 509 characters). Sheet copied to `work/quality-audit/fixed/chem-y11-m1-v17-sheet.jpg`.
