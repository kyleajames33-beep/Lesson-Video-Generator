# chem-y11-m1-v12 build notes (built on the measured narration)

Builder: Claude build agent, 20 to 21 November 2026. Explainer id `Explainer-chem-y11-m1-v12` (17 scenes, 14,730 frames, about 491 s; key notes 1,350 frames = 45 s). Sheet: `work/quality-audit/fixed/chem-y11-m1-v12-sheet.jpg` (copy of the grade sheet; no frame stamps). No MP4 built.

## Files
`src/explainer/lessons/chem-y11-m1-v12/`:
- `common.ts`: measured lesson lookups, response holds, plates with measured alpha boxes, the full table (V11's cells plus the two f-block rows, 14 wide, columns 4 to 17), block, element type (metalloids B, Si, Ge, As, Sb, Te; At and 113 to 118 left untyped), the 11 gases and 2 liquids at 25 °C, the table reader (`readerOf`: period, group, block and valence electrons read from the element's place; groups 1, 2 = group number, 13 to 18 = group − 10, helium 2) and the final-frame shell counts.
- `parts.tsx`: V11 parts re-exported; new: `PGrid` (full grid; block tints, type colours, symbols and f rows all opacity-driven so they sweep in), `LitCell`, `DrawBox` (pen outline), `PlateB` (plate by bottom centre), `Reader` (four live readouts at 52 px), `stepZ`, `ShellModel` (Stage 5 rings inside an equal dashed circle, dashed radius with "?", "radius?" label).
- `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 10), `s3.tsx` (11 to 17), `scenes.tsx`, `assets.ts`, `config.ts` (`config_y11c_m1v12`).
- `src/explainer/registry.ts`: import and entry added after V11 (one edit).

## Plates
All design-named plates exist and are used at uniform scale (never stretched): the six period 3 samples, `y11c-gas-jar-chlorine-v1.png`, `y11c-gas-jar-v1.png` (argon), the three troughs (Li, Na, K) and the new `y11c-halogen-vials-v1.png` (delivered, so the fallback was not needed; state words sit under each ampoule using the sidecar's ampoule centres). None missing.

## Simulation
The design's "table reader" is coded (`Reader` + `readerOf`); no engine in `src/explainer/sims/` fits. Every readout value is computed from the element's cell, so the readouts and the lit cell always agree. Scene 2 steps Na to Ar (26 frames apart from "Across period three"), back to Na on "Sodium ends", Ar on "Argon ends" and K on "potassium" (period readout 3 to 4). Scene 4 steps Li, Na, K, then F, Cl, Br (valence holds at 1, then 7), then He on "Helium has".

## Opening-frame match (V11)
V11's code existed when the opening was built (another agent is still working on it). Scene 1 shows V11's `SceneHandoff` itself, frozen at its last frame (`<Freeze frame={dur('handoff') - 1}>`, imported read-only from `src/explainer/lessons/chem-y11-m1-v11/s3.tsx`), so frame 0 is V11's final frame exactly. It cross-fades (frames 6 to 28) onto V12's own copy of the board at the same geometry (`G18` imported from V11: x 168, y 330, cells 88 × 72, atomic numbers 22 px, symbols 30 px, P, Cl, K and Fe lit with their endings at 1.3 pop, the "2?, 10?, 6?" brackets at y 314 with 38 px labels at y 280). Leaving with the fade: V11's "Next" chip (as designed) and V11's green "period 3" line. If V11's handoff changes, the frozen frame follows automatically; re-check that `G18` and the bracket positions still match. No mismatch at the time of build. (No spectrum strips in this lesson.)

Final frame (scene 16), for the `chem-y11-m1-v13` designer: grid `GF` x 330, y 470, cells 72 × 46 (f rows below, gap 12), block tints at 25%; period 3 row and the Li, Na, K column outlined in ink with their symbols; equal dashed circles (radius 80 px, 160 px across) round the Na (2, 8, 1) and Cl (2, 8, 7) shell models above their cells (centres y 352) and K (2, 8, 8, 1) left of the table at (200, 631); leader lines, "radius?" labels and a "?" at each circle's edge; "3 shells each" beside Na and Cl, "4 shells" under K, "shell model, not to scale" at (960, 428); the chip "Next: Why does atomic radius change across a period and down a group?" under the heading (top y 178); heading "Groups, periods and blocks". The chip sits under the heading because both cannot share one line at readable size. The key notes cross-fade back to this frame.

## Departures from the design (with reasons)
- Scene 1: the sample row arrives on "Mendeleev" (not "by grouping") so the lower half is not empty while the table shrinks; "sorted by what they do" still writes on "by grouping". The samples leave before the f rows tint on "Let's see" (the f rows need their space). No per-bracket pen arrows: the chips rise out of the bracket numbers and one "same numbers" tag sits at the right.
- Scene 2: "period: a row" sits right of the rule chip; potassium enters as a ninth large cell under sodium with the navy pen arrow from argon.
- Scene 3: the f block is marked by a slate pen outline (a bracket under it collided with the framed rule line). The endings sit as chips in the empty space above the d block with leader lines to K, Fe and P.
- Scene 4: configuration lines show at 30% from the first frame and come to full ink as the reader reaches each element. The Fe "group 8" grey tag is left out (not spoken; the group board does not show Fe). Readouts are a 2 × 2 block at the top right.
- Scenes 5 and 6: no live readouts (no room beside the configuration card; the framed answers do that job). Scene 5 adds two recall prompts at the bottom left. Scene 6 shows the period rule and the groups 1, 2 rule at the bottom until the trap chip arrives; the O and S chips have no leader lines (they crossed the grid).
- Scene 7: the slate tag reads "full outer shell: hardly react" (the design's "no reaction" contradicts the narration's "hardly react" and author note d). A caption "Each trough: a group 1 metal placed on water." holds the space until the blue tag lands. Argon is three single-atom dots.
- Scene 8: all three property cards are full from the first frame (Upgrade); the current card's frame thickens on cue.
- Scene 9: type and state tags show at 28% from the first frame and come to full ink on cue; the two jars share one "non-metals" tag. The whole-table part enlarges the grid and counts gases and liquids live in the readout.
- Scene 10: the delivered `y11c-halogen-vials-v1.png` is used (no fallback); the closing line is framed on "So a group".
- Scene 13: question prompts "(b) period? group? block?" and "(c) an element with similar chemistry?" hold the rows until the answers land; a large Se tile and the sulfur sample sit at the right.
- Scene 15: each pen arrow fades after its region gets a pen ring (the three arrows crossed); a metal / metalloid / non-metal key sits under the grid.
- Scene 16: the memory line sits large above the table until "think about size".
- Key notes trimmed (checker: 498 characters, warning only).

## Cue check
All cues resolve against the measured word timings (`cueFrame` throws on a missing phrase; config loaded in node, 17 scenes ok). Repeated phrases take stated occurrences: scene 4 "one" #4 (rings on "four s one."), scene 6 "Six valence" #2 (the first "six valence" is in "An element with six valence electrons"; the first sweep caught the O and S chips 5 s early), scene 16 "group" #2. Countdowns: 3 s ring from "it in" (scene 5); 10 s rings full from "Pause here" (scenes 12, 14).

## Grade checker (final run, 20 Nov 2026, 23:42)
`npm run grade:explainer -- Explainer-chem-y11-m1-v12`: **PASS WITH WARNINGS (0 failures, 1 warning: dense key notes, 498 characters)**. Report: `out/explainer/Explainer-chem-y11-m1-v12/grade/Explainer-chem-y11-m1-v12-grade.md`. The first run failed frame 1 (largest line 42 px; the timeline is now 44 px) and warned on faint prompt text in feedback 1 (now full ink).

## Dense 3 s sweep (scale 0.5, one still every 90 frames, montaged per scene)
Full sweep twice (164 stills, four chunks of 41 under `out/explainer/.stills-lock`, released between chunks), then a re-sweep of the hook, period 3 states, both feedback scenes and key notes. Defects found and fixed:
1. Scene 6: O and S chips and the group 16 column arrived on the wrong "six valence" (cue fixed); the group 6 amber tint never showed for the same reason.
2. Scene 1: "28 years too early to know" sat on the "10?" label (timeline raised); lower half empty before the samples (samples earlier).
3. Scene 3: the f-row bracket ran into the framed rule line (now a pen outline); width tags sat on the bracket bumps.
4. Scene 4: rings cut the prefixes; the blue bracket touched the rings; plate labels collided with the rule lines; middle of the board empty early.
5. Scene 2: "period: a row" sat on the sodium jar.
6. Scene 8: the non-metal pen ring crossed the lit B and Si cells; lit metalloid cells overlapped at 1.15 pop.
7. Scene 9: the two jar tags overlapped; lower third empty before the tags.
8. Scene 13: early frames over 40% empty; the "Se" label sat on grid cells.
9. Scene 15: the three pen arrows crossed each other and the A reason line.
10. Scene 16: the band above the table was empty before the shell models.
11. Scenes 5 to 7 and 10: sparse lower areas (prompts, caption, shifted plates).

## Builder's sheet grade
A. Every frame holds its main board from the first frame: painted samples, troughs, jars or ampoules in most teaching frames, the coded grid with live reader readouts in scenes 2 and 4, a new board about every 30 to 45 s, framed green answers with red crossed slips in both feedback scenes, five short notes with the framed memory card and a 45 s notes scene. Scenes 3, 5, 6, 11 and 16 carry no painted plate; each is a full coded grid that carries the idea. Root should look at frames 2302 (blocks) and 13349 (handoff).

## v2 fixes after root's v1 playback review (21 Nov 2026): faint tables
Root found the main periodic table drawn faint (pale lines, washed-out fills) where it is the main visual. Fixed across the whole build, not only the four reported stretches:
- Shared grid (`PGrid` in `parts.tsx`): cell lines now 2.6 to 3.5 px full ink at every size (were 2 px on small grids). Element-type fills are now solid legend colours: metal `#c9bb9c`, non-metal `#93d3c9`, metalloid `#c6aef0` (were pale washes); the scene 15 key uses the same constants.
- Block tints raised to normal strength wherever the grid is shown: prediction and reading (0.32 to 0.8), period board and group board small grids (0.3 to 0.75), group chemistry small grid (0.8), blocks board (starts 0.6, full on cue; was 0.32), period 3 whole-table view (0.25 to 0.7, gas and liquid cells now white with a thick teal or blue outline so they stand out), memory board (0.35 to 0.75), selenium feedback (0.32 to 0.8), closing board (0.9 falling to 0.65 on "the whole table"; was 0.85 to 0.25), key-notes card table (0.3 to 0.75). Lit cells on tinted grids (Ca, the group 16 column, Se, O, S) are white with a thick coloured frame.
- Selenium feedback: the table is larger (cells 36.5 × 36, x 1150 to 1807) with Se lit and its symbol shown; it now marks each answer on cue: a navy row-4 outline with "4" on "period four", a gold column-16 outline with "16" on "group sixteen", a green p-block outline on "block". The separate Se tile is gone; sulfur sits lower right. The (b) and (c) prompts sit on a question card panel at 38 px with the full question wording until their answers land.
- Final frame (for the v13 designer): block tints are now at 65% (not "low opacity"), at root's request; everything else in the final-frame description is unchanged.
Re-swept all scenes at 3 s (164 stills, four locked chunks): no faint main visual left; no new overlaps. Grade checker re-run 00:53: PASS WITH WARNINGS (0 failures, 1 warning: dense key notes, 498 characters). Sheet re-copied.

## Things to check at playback speed
Scene 1 cross-fade from V11's frozen frame and the shrink (frames 6 to 72) and the bracket resolves on "two", "ten", "six"; scene 2 reader stepping Na to Ar every 26 frames and the K arrow; scene 4 reader down groups 1 and 17; scene 9 grid enlarge on "And across the whole" and the gas count; scene 15 arrows fading to rings; key notes cross-fade to the final frame.
