# chem-y11-m1-v11 build notes (built on the measured narration)

Builder: Claude build agent, 20 November 2026. Explainer id `Explainer-chem-y11-m1-v11` (19 scenes, 14,583 frames; key notes 1,350 frames = 45 s). Sheet: `work/quality-audit/fixed/chem-y11-m1-v11-sheet.jpg` (copy of the final grade sheet; no frame stamps). No MP4 built.

## Files
`src/explainer/lessons/chem-y11-m1-v11/`:
- `common.ts`: lookups, holds, plates with measured alpha boxes, the filling rule (`ORDER` 1s 2s 2p 3s 3p 4s 3d 4p, `slotOf`, `occ`, `unpaired`, `configSoFar`: lowest first, one per box before pairing), the short periodic table cells (periods 1 to 7, f block left out, La and Ac in column 3).
- `parts.tsx`: V10 parts re-exported; new: `EArrow` (electron arrow that drops in), `OBox`, `ORow`, `hund`/`hundC`, `Ladder` (subshell ladder at energy heights, 4s just below 3d, driven by a continuous electron count through `slotOf`, with the core fold to [Ne] or [Ar]), `coreBox`, `RowRings` (teal rings on single electrons), `RO` readout, `PTable` (short table, lit cells pop with an optional ending such as "…3p³"), `ShellAtom` (Stage 5 shells), `Letter` (s, p, d, f badges in the colour key).
- `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 13), `s3.tsx` (14 to 19), `scenes.tsx`, `assets.ts`, `config.ts` (`config_y11c_m1v11`).
- Registry: one small edit in `src/explainer/registry.ts` (import and entry after V10).

## Plates
`y11c-gas-jar-chlorine-v1.png`, `y11c-sample-red-phosphorus-v1.png`, `c5-solid-lump-v1.png` (tagged "iron"), `y11c-sample-sulfur-v1.png`. All present; alpha boxes measured with PIL; uniform scale only. None missing.

## Simulation
The filling run is lesson-coded, as the design says (kit gap 1; no engine in `src/explainer/sims/` fits). Every arrow, "electrons placed", "configuration so far" and "unpaired" readout reads the same count through the same rule. Checked values: 15 → 3 unpaired, 17 → 1, 18 → 0, 19 → 1, 20 → 0, 21 → 1, 26 → 4; S 2, V 3.

## Opening frame: chem-y11-ws-v03's final frame (root correction, 20 Nov)
Route: v10 → ws-v01 → ws-v02 → ws-v03 → v11, so V11 opens on ws-v03's final frame (design Decisions; `chem-y11-ws-v03.md` "Opening frame and final frame"). The earlier V10 handoff import is removed; V11 no longer imports any V10 scene (it still reuses V10's drawing parts).

ws-v03 is not built yet, so its final frame is built here as a standalone component, **`WsV03FinalFrame`** (no props) in `src/explainer/lessons/chem-y11-m1-v11/parts.tsx`, with its pieces `WS_PT`, `wsSym`, `FBlock`, `QCell`, `SpdfColumn` and `WS_NEXT`. It returns an SVG group, so the ws-v03 build should import it read-only and draw it inside its own `<SVG>` as the last state of its handoff scene, so ws-v03 ends on exactly V11's first frame. Contents, cream paper and dark-ink grid (house style, not the "dark board" text):
- the short periodic table at x 204, y 230, cells 84 × 72 (the same geometry as V11's hook table), symbols and atomic numbers only for H, He, periods 2 and 3 and Fe; other cells empty;
- two f-block rows of 14 empty cells below (y 750 and 802, 52 px tall);
- P (15), Cl (17) and Fe (26) highlighted amber, each with its atomic number and an amber "?";
- V10's s, p, d, f badges in a column at x 1790 (y 300 to 588);
- the chip "Next: How does spdf notation locate the electrons in an atom?" (44 px, centred at x 960, top y 872).

In V11's hook the table stays (same geometry and symbols), while the f-block rows, the P and Fe highlights, the chips and the Next chip fade out over frames 4 to 24. The Cl highlight stays until "chlorine is", when the Cl cell lights green. The jar now arrives after the table shrinks (on "element seventeen" + 24 frames), so it never covers the table. Opening re-swept (frames 0 to 300, 16 stills): clean cut, no overlaps.

## Final frame (V12 opens on it)
Scene 18's last frame: the short table (periods 1 to 7) at x 168, y 330, cells 88 × 72; P and Cl lit green with "…3p³" and "…3p⁵", K blue "…4s¹", Fe amber "…3d⁶" (lit cells scaled 1.3 about their centres); a green line through the period 3 gap with "period 3"; brackets over columns 1 to 2, 3 to 12 and 13 to 18 labelled "2?", "10?", "6?" (blue, amber, green, 38 px); the chip "Next: How do electron arrangements organise groups and periods?" (44 px, centred at y 862). The heading "Where do our atoms sit?" fades out on "Next", so the final frame has no heading, as designed. The key notes cross-fade back to this frame in their last 46 frames.

## Departures from the design (with reasons)
- Scene 1: opens on ws-v03's final frame (above); heading writes at frame 40 (design: on "electron") so the board has a working-size line through the scene; the shell atom's rings and the faint s, p, d, f letters arrive early (dots and solid letters still on cue) to fill the board; the preview line writes on "Spdf notation" and "the address" on "an address" (the last cue left under 1 s on screen).
- Scene 2: the ten letters show as faint previews and turn solid on cue; a Stage 5 shell atom of chlorine (rings labelled 1, 2, 3) stands at the right, linking levels to Stage 5 shells.
- Scene 3: V10's orbital cloud stands where the close-up box will be until "Here's the key rule".
- Scene 5: the filling path is drawn as numbered order badges (1 to 7, 6 and 7 amber) rather than a pen path, which crossed the boxes; the 4s-below-3d point is a dashed amber guide, a bracket and a pen arrow.
- Scene 7: the small table is periods 1 to 4 under the ladder's empty right half; lit cells show symbols only.
- Scenes 10 and 15: the electrons still to place wait as arrows above the boxes ("5 electrons for 3p", "4 electrons for 3p") so the boxes are never bare; the chlorine shorthand frames on "so we write" (on "three p five" it would be on screen under 1 s).
- Scene 11: a navy givens card "Fe: 26 electrons" holds the right panel until the large 3d row arrives on "The last six".
- Scene 12: the wrong line is struck on "so this atom" (the design's "total" cue is under 1 s from the end); "not the lowest energy" shortened to "not lowest energy" to fit.
- Scene 13: three short chips under the memory card mark the three parts as they are explained.
- Scene 17: no table thumbnail (the right half carries the answers and the slip).
- Key notes trimmed to five short bullets (one or two lines each) with the framed memory card and a 3p box row.
- Unicode ↑, ↓ and "·" are not used in on-screen text (electron arrows are drawn); "²" written with markup.

## Cue check
All cues resolve against the measured word timings (config loaded with tsx; `cueFrame` throws on a missing cue). Repeated words take stated occurrences (scene 2 "s" #3 and #4, "p" #2 and #3, "d" #2; scene 8 "three p three" #1; scene 15 "box comes" for the closing slip tag). Countdowns: 3 s ring from "go" (scene 6); 10 s rings full from "Pause here" (scenes 14, 16).

## Grade checker (final run after the opening change, 20 Nov 2026, about 23:47)
`npm run grade:explainer -- Explainer-chem-y11-m1-v11`: **PASS (0 failures, 0 warnings)**. Report: `out/explainer/Explainer-chem-y11-m1-v11/grade/Explainer-chem-y11-m1-v11-grade.md`. The first run warned on a sparse order-check frame (54%) and dense key notes (499 characters); both fixed.

## Dense 3 s sweep (scale 0.5, one still every 90 frames, 163 stills, montaged per scene; then re-sweeps of changed scenes at 60 to 180 frame spacing)
Defects found and fixed:
- whole video: boards were drawn too small (large bare areas); scenes 2, 3, 4, 8 to 12, 15 and 17 re-laid out at larger sizes;
- scene 1: lower board empty for the first 10 s (shell rings, faint letters and heading brought forward);
- scene 2: sprout lines ran through the letter circles; middle of the board empty until each letter's cue (faint previews, shell atom added);
- scene 3: right half empty for 14 s (orbital cloud added);
- scene 4: "Stage 5 shells" touched the "not a point" line; the note moved into the address card;
- scene 5: "a ball settles on the lowest step" clipped at the right edge; order badges collided with row labels (moved to the right of each row); "lowest first" sat under its arrow;
- scene 7: the small table was tiny and its lit cells overlapped (K, Ca, Sc); enlarged into the empty area below the ladder;
- scene 9: "not paired first" overlapped the rule line; inset moved;
- scene 10: shorthand appeared under 1 s before the cut; empty 3p boxes in the opening (waiting arrows added);
- scene 11: bracket over the 3d row touched the readouts; sum crowded the framed answer's tick; right panel empty before "The last six";
- scene 12: "not lowest energy" crossed the rose arrow; ladder enlarged to fill the middle;
- scene 13: second chip ran into the iron thumbnail;
- scene 15: red tag "one per box first" appeared at the first "one per box" (wrong cue); empty 3p boxes in the opening;
- scene 16: table enlarged.

## Builder's sheet grade
A, with caveats for root. Painted samples or the live filling run in most teaching frames; every scene changes on cue; framed green answers with red crossed slips in both feedback scenes; five short notes with the framed card, 45 s hold. The checker's coarse cells measure frames 4 (notation, mid-scene), 10 (order check) and 12 (feedback 1) at 46 to 50% bare paper; each holds its full board with no empty box, so I judge them A, but root should look at them.

## Things to check at playback speed
The fade from ws-v03's final frame (frames 0 to 30) and the Cl cell flying out (72 to 120); scene 5's run speed against "One s, two s, two p, three s, three p"; scene 6's quick sweep to 18; scene 9's push-apart and drop on "pair up"; scene 10 and 11 folds to [Ne] and [Ar]; scene 11 pen arrow lifting 3d⁶; the key notes' cross-fade back to the handoff frame (last 1.5 s).
