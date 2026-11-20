# chem-y11-m1-v14 build notes (built on the measured narration)

Builder: Claude build agent, 21 November 2026. Explainer id `Explainer-chem-y11-m1-v14`, export `config_y11c_m1v14` (16 scenes, 14,136 frames, about 471 s; key notes 1,350 frames = 45 s, measured). Sheet: `work/quality-audit/fixed/chem-y11-m1-v14-sheet.jpg` (copy of the final grade sheet; no frame stamps). No MP4 built. Narration unchanged.

## Blocker for root: across-period audio carries about 41 s of unscripted speech

`public/audio/chem-y11-m1-v14/across-period.wav` is 70.8 s long, but the scripted line (about 490 characters) ends at 29.3 s ("...needed for sodium's."). The audio keeps speaking to the end (peak level never drops; checked in 2 s windows). The brief 236 recognition review in `status.md` lists the extra words: "now look at electro negativity which is quite different from first ionization energy ... like a tug of war ... chlorine is so keen to react ... both are fundamentally driven by the structure of the atom". This is off-script narration (US "ionization", content from scenes 7 and 1) and must not ship. It needs a re-voice of that one scene, which shortens the scene to about 30 s. The scene code is keyed to cue words only (all before 29.3 s) and holds its final board after them, so it will work unchanged on a shorter re-voice; only the lesson JSON and audio change. Other recognition notes (fifteen hundred heard as "one thousand five...", "phillithium") are minor and for human listening.

## Files
`src/explainer/lessons/chem-y11-m1-v14/`:
- `common.ts`: measured lookups, holds, plates and the one data table (`DATA`) every on-screen number, bar, meter, ring and shared-pair position reads.
- `parts.tsx`: V13 parts re-exported (read-only chain to V01); new: `VBarV`, `HBarV` (value bars), `Meter` (energy meter), `Hatch` ("no value" slot), `Tug` (tug of war; pair at enR / (enL + enR) along the rope), `PaulingBar`, `ScaleMark`, `ShadeTable` (two-tone periodic table, noble gases hatched).
- `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 16), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: import and entry added after `config_y11c_wsv03` (one scripted edit, file re-read first, LF kept).
- Typecheck: scoped tsconfig in the scratchpad, clean. Config loads in node (all cues resolve).

## Data sources (one per quantity; source lines on screen)
- First ionisation energy: NIST Atomic Spectra Database via the PubChem periodic table (design author note a), kJ/mol: Na 496, Mg 738, Al 578, Si 787, P 1012, S 1000, Cl 1251, Ar 1521; Li 520, K 419, Rb 403, Cs 376.
- Electronegativity: Pauling values, PubChem, one decimal: Na 0.9 to Cl 3.2, F 4.0, Br 3.0, I 2.7, H 2.2 (H is the fixed partner in the tug of war).
- Radii (ring sizes and V13's "Na 166 pm", "Cl 102 pm" labels only): Cordero et al. 2008, same values as V13 (Ar 106 used only for the stepper ring, no number shown).
- Derived: core charge = protons minus inner electrons; "≈ 2.5 ×" = 1251 / 496 rounded (`RATIO_CL_NA`); "52 more protons" = 55 − 3.

## Plates
All design-named plates exist; drawn at uniform scale only: `y11c-sample-sodium-oil-v1`, `-magnesium-ribbon-`, `-aluminium-`, `-silicon-`, `-red-phosphorus-`, `-sulfur-`, `y11c-gas-jar-chlorine-v1`, `y11c-gas-jar-v1` (argon), `y11c-trough-water-v1` (alpha box measured: 85, 212, 1413, 866). None missing.

## Simulation
No engine in `src/explainer/sims/` covers ionisation energy or electronegativity. The design's "pull stepper" is coded from `DATA`: scene 3 steps Na to Ar on "From sodium" to "fifteen hundred" (bars grow as it passes), again on "charge climbs" (core charge +1 to +8 written in each bar), then Na on "one off" and Cl on "Removing" (meter rises 496 to 1251). Scene 6 steps Li, Na, K on "Lithium", "extra occupied", "so the outer", then Li to Cs on "from five" to "seventy-six" (core charge readout holds +1). Scene 8 steps the right-hand atom Na to Cl (Cl on "three point two"), then F, Cl, Br, I (I on "two point seven"); the pair slides and the rope length follows the radius.

## Opening-frame match (V13)
The hook redraws V13's final handoff board from V13's exported constants (`NA16`, `CL16`, `CL16B`, `RNA16`, `RCL16`) with every V13 animation at its end state, and shows V13's own `SceneHandoff` frozen at `dur('handoff') - 1` on top for frames 0 to 30, fading out with no visible change. Still 0 compared with V13's still 12060 (handoff, all elements complete): identical layout; differences are edge-only (the shell's settle scale) plus the shell's topic label. V13's 13443 still is mid fade-out, so it was not used. V13 was not edited.

## Final frame (scene 15 `handoff`), for the chem-y11-m1-v15 builder
Exported read-only from `src/explainer/lessons/chem-y11-m1-v14/s3.tsx`: `SceneHandoff` and `TROUGH15` ({cx 1390, bottom 830, w 700}). Open V15 with `<Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze>` (V14's `dur` from its `common.ts`); key notes cross-fade back to this frame.
- Heading "Ionisation energy and electronegativity" (hand, 60 px, x 96, y 150). Chip (top y 178, x 96, 38 px, navy): "Next: why do Group 1 metals react differently with water?".
- Label "group 1: first ionisation energy" (30 px, orange ink, x 96, y 302).
- Three orange bars (fill `#f6c891`, stroke `#e07b12`), height 70, starting x 186, length 0.85 px per kJ/mol: Li at y 330 (520), Na at y 440 (496), K at y 550 (419); symbols 44 px at x 96; values "520 kJ/mol" etc. 34 px orange ink after each bar.
- Orange pen arrow down at x 880 from y 340 to 620; orange hand text "easier to lose the outer electron" (42 px, x 96, y 720).
- Trough of water `y11c-trough-water-v1.png` 700 px wide, centred x 1390, bottom y 830 (top about 485); a hand "?" (140 px, ink) centred x 1390 at y 660, over the water.
- The three group 1 atoms shown earlier in the scene are cleared before the trough arrives. Nothing below y 850.

## Departures from the design (with reasons)
- Series pattern kept (Y11 M1 part chain: Card, QTag, PauseHoldR, Givens, Framed, Chip) rather than `src/explainer/shared/scenes.tsx`, to match V11 to V13.
- Hook: the "energy?" and "pull?" tags are replaced by "first ionisation energy" (orange) and "electronegativity" (violet) at their cues; the new heading writes on "These are" (the design's last "atom" is 20 frames before the scene ends). The meter fills to Na's 496 on a 1600 scale.
- Scene 2: the sodium sample sits bottom right at 250 px (bottom-right quarter was empty for 15 s); the meter frame and its label are on screen from the first frame and fill on "four hundred".
- Scene 3: the trend arrow and "core charge +1 → +8" tag clear on "Removing"; the Na/Cl comparison is two orange pen rings joined by a curved pen arrow with "≈ 2.5 ×" (no straight bracket: it would cross the values). Source tag shortened to "Source: NIST data via PubChem" (it ran under the sample row).
- Scene 4: dips marked by red pen rings and a red "dip" written inside each dipping bar (an "two dips" tag collided with the trend arrow); the leaving 3p electrons slide out to the right with an orange arrow (lifting up ran into the row above).
- Scene 5: the question is a framed two-line box (the 44 px chip ran off the frame).
- Scene 7: the Pauling scale draws on "Electronegativity is" (lower half was empty for 13 s); H and Cl marks with "has", F on "fluorine is", the framed "4.0" on "four point".
- Scene 8: the period 3 tug uses H as the fixed partner (H to Na is a model of the pull, not a claim that NaH is covalent). Group 17 bar outlines are on screen from the first frame.
- Scene 9: the bond-types chip sits top right; "no value" is under the argon slot; the crossed chip is struck on "zero" and its red tag writes on "It means" (the design's "measure" is 18 frames from the scene end).
- Scene 12: the crossed chip is struck on "classic slip" and its tag writes on "Distance" (the design's "win" is 47 frames from the end); chip text shortened to "K has more protons, so it holds tighter" to fit.
- Scene 14: chip appears on "Answering", struck on "trap".
- Scene 15: Li, Na and K shell atoms at the right lose their outer electrons on "from lithium", "to sodium", "to potassium" and clear before the trough (right half was empty for 17 s). Nothing else is added, so the final frame is as designed.
- Key notes trimmed to 488 characters (checker still warns; V13 was 499).

## Cue check
All cues resolve against the measured word timings (`cueFrame` throws on a missing phrase; config loaded in node). Repeated phrases: "remove" #1 and #2 in scene 4 (Al, then S); "Electronegativity is" #1 in scenes 7 and 9; "water" #1 (trough) and #2 (chip) in scene 15; "the outer electrons are held" #1 in scene 3; "shares" (hook) is the only occurrence; scene 2 uses "four hundred"/"ninety-six" not the repeated "atoms". Countdowns: 3 s ring from "think"; 10 s rings full from "Pause here".

## Grade checker
`out/explainer/Explainer-chem-y11-m1-v14/grade/Explainer-chem-y11-m1-v14-grade.md`. First run: PASS WITH WARNINGS (0 failures, 3 warnings: sparse electronegativity frame, sparse attempt-1 card, dense notes 500). Final run (after sweep fixes): **PASS WITH WARNINGS (0 failures, 1 warning: dense key notes, 488 characters)**.

## Dense 3 s sweep (scale 0.5, one still every 90 frames, 158 stills, montaged per 25) and targeted re-sweep
Defects found and fixed: (1) scene 3 source tag running under the sodium sample; (2) trend arrow touching the 738 value; (3) scene 4 "two dips" tag on the trend arrow; (4) a stray pen dot before the scene 4 chip; (5) the leaving Al electron rising into the Mg row; (6) scene 2 lower right empty for 15 s; (7) scene 7 lower half empty before the scale; (8) attempt-1 card sparse (sample enlarged to 400 px); (9) feedback-1 right half empty for 5 s (first row now on "more occupied"); (10) handoff atoms too small; (11) memory card line enlarged to 64 px. No faint or ghosted main visual: bars, atoms, orbital boxes, tables and plates are solid in full ink throughout.
Known hold: scene 3 holds its final board from about 30 s to 71 s while the off-script audio plays (see blocker).

## Builder's sheet grade
A (pending the across-period re-voice). Every teaching frame has its main board from the first frame: the live stepper with readouts and the energy meter, value bars drawn from the data, the tug of war, the shaded table, painted sample rows in scenes 1 to 4, 8, 11 to 13 and the trough at the end; framed green answers with red crossed slips in both feedback scenes; five short notes with the framed memory card; 45 s notes scene.

## Things to check at playback speed
Hook: frozen V13 frame fading out, electron dragged off, both labels landing; scene 3 stepper speed (about 25 frames per element on the first run, 22 on the second); scene 4 electrons sliding out; scene 8 pair sliding and the rope length changing; scene 15 three electrons leaving on the three names; the key notes cross-fade to the final frame.
