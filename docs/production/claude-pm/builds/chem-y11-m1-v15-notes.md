# chem-y11-m1-v15 build notes (built on the measured narration)

Builder: Claude build agent, 21 November 2026. Explainer id `Explainer-chem-y11-m1-v15`, export `config_y11c_m1v15` (18 scenes, 13,132 frames, about 438 s; key notes 1,350 frames = 45 s, measured). Sheet: `work/quality-audit/fixed/chem-y11-m1-v15-sheet.jpg` (no frame stamps). No MP4 built. Narration unchanged.

## Speech-rate check (before building)
Characters of script divided by audio seconds (startFrame to endFrame), every scene: hook 14.9, safety 16.4, lithium 14.8, sodium 15.1, potassium 13.4, products 14.5, cause 15.6, prediction 15.2, rubidium-caesium 15.6, fair-comparison 15.5, surface-films 14.8, memory-line 14.1, attempt-1 14.9, feedback-1 15.0, attempt-2 13.0, feedback-2 15.0, handoff 15.2, key-notes 17.6 characters per second. None under 10, so no run-on take is suspected (lowest: attempt-2, 13.0).

## Files
`src/explainer/lessons/chem-y11-m1-v15/`:
- `common.ts`: measured lookups, holds, plates (alpha boxes measured from each plate's alpha channel), native trough points (piece, ball, flame, water surface) and the one data table (`DATA`) every on-screen number reads.
- `parts.tsx`: V14 parts re-exported (read-only chain to V01); new: `TroughStates` (the aligned trough set cross-fading through one alpha box), `Bubbles` (white, dark-ink outline, rate per metal), `PinkSpread` (indicator haze clipped to the water), `Piece` (coded falling piece, no hand or tongs), `Sparks`, `ClipFrame` ("illustrated clip" frame with a play bar), `G1Col`, `WaterSplit` and `HandOff` (two atoms, two waters, two ions, two OH⁻, one H₂), `MetalBall`, `SmallWater` (box particles).
- `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 12), `s3.tsx` (13 to 18), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: import and entry added after `config_y11c_m1v14` (one scripted edit, file re-read first, LF kept).
- Typecheck: scoped tsconfig in the scratchpad, clean. Config loads in node (all cues resolve).

## Data sources (one table in `common.ts`; source lines on screen where numbers are read)
- First ionisation energy (same as V14): NIST Atomic Spectra Database via PubChem, kJ/mol: Li 520, Na 496, K 419, Rb 403, Cs 376.
- Melting point and density: PubChem periodic table (design author note a): Li 181 °C, 0.53 g/cm³; Na 98 °C; K 63 °C.
- Radii (ring sizes only): Cordero et al. 2008, as V13 and V14.
- Electronegativity does not appear in V15.

## Plates
All design-named plates exist and are drawn at uniform scale only: `y11c-trough-water-v1`, `-li-`, `-na-`, `-k-` (one aligned set, all drawn through the water plate's alpha box 85, 212, 1413, 866 so the cross-fades stay in register), `y11c-alkali-oil-jar-v1`, `y11c-sodium-cut-fresh-v1` and `-tarnished-v1` (shared box), `m6-clip-phenolphthalein-pink-v1`, `m8-flame-k-lilac-v1`, `m8-flame-na-yellow-v2`. None missing.

## Simulation (scene 7)
Three particle-box runs (`src/explainer/sims/particle-box.ts`), identical (seed 5, 24 metal atoms, 40 waters, same box, speed and temperature) except the barrier `ea` (Li 3.6, Na 2.4, K 1.3; chosen by eye, labelled "model: relative rates, not measured"). Reaction M + H₂O → M⁺ + OH⁻. Readouts are read from each run at the same sim frame: "reacted: n" and "rate: n ÷ Li's n × Li" (shown once Li has 3 or more). Tuned in node: at the end of the scene Li 9, Na 14, K 20 (about 1.6 and 2.2 × Li), ordered at every checkpoint. The box is drawn at a uniform 1.24 scale.

## Opening-frame match (V14)
The hook redraws V14's final handoff board from V14's exported `TROUGH15` (heading, navy "Next" chip at y 178, orange bars Li 520 / Na 496 / K 419 at y 330, 440, 550, the orange pen arrow at x 880, "easier to lose the outer electron", the water trough 700 px wide centred x 1390 with bottom 830, the hand "?") with every element at its end state, and shows V14's own `SceneHandoff` frozen at `dur('handoff') - 1` on top for frames 0 to 30, fading out with no visible change. Still 0 matches V14's final frame in layout. V14 was not edited. After "Now" the chip and "?" clear and the trough grows to 900 px (centre 1350, bottom 920) for the lithium and potassium states.

## Final frame (scene 17 `handoff`), for the chem-y11-m1-v16 builder
Exported read-only from `src/explainer/lessons/chem-y11-m1-v15/s3.tsx`: `SceneHandoff`, `TROUGH17` ({x 96, y 280, w 820}: top left of the trough's alpha box and its drawn width) and `FLAMES17` ({k: {cx 1180, bottom 800, h 420}, na: {cx 1560, bottom 800, h 420}}). Open V16 with `<Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze>` (V15's `dur` from its `common.ts`); V15's key notes cross-fade back to this frame, so it is also the video's last frame.
- Heading "Whose colour is the flame?" (hand, 60 px, x 96, y 150). Navy chip (top y 178, x 96, 38 px): "Next: what do flame colours show, and what can they not identify reliably?".
- `y11c-trough-k-v1.png` 820 px wide (alpha box), top left (96, 280), bottom about 684; its lilac flame ringed by a dark-teal pen ring (centre about x 514, y 379, rx 54, ry 64) with the dark-teal hand tag "lilac" just right of the ring.
- "hydrogen alone: pale, almost invisible flame" (30 px, dark ink, x 96, y 750); hand line "the colour comes from the metal" (42 px, ink, x 96, y 830).
- `m8-flame-k-lilac-v1.png` (420 px tall, centre x 1180, bottom 800) and `m8-flame-na-yellow-v2.png` (420 px tall, centre x 1560, bottom 800), side by side; labels "potassium: lilac" (dark teal) and "sodium: yellow-orange" (teal), 34 px, centred under each at y 846.
- A dark-teal pen arrow from the ring to the lilac burner's flame (ends about x 1120, y 470). Nothing below y 850.

## Departures from the design (with reasons)
- Series pattern kept (Y11 M1 chain: Card, QTag, PauseHoldR, Givens, Framed, Chip) rather than `src/explainer/shared/scenes.tsx`, to match V11 to V14.
- Scene 1: after "Now" the trough grows (the lower left and right were empty for 10 s); lower-left lines "Li, Na, K: all Group 1 metals", "metal + water → same products" (44 px) and "Li: calm fizz" / "K: flame" replace the small "same products" tag. The new heading writes on "So why" (the design's "water" is 23 frames from the end).
- Scene 2: added two plain lines ("Students never handle alkali metals." 44 px; "They react with the moisture on skin." 38 px) so the board is not jar-only for 10 s; the clip frame draws round the trough on "short video"; the "Rb, Cs: videos only" chip lands about 1 s after "Rubidium" (the design's "all" is 22 frames from the end).
- Scenes 3 to 5: the observation card carries the metal's name readout and the Li, Na, K row labels from the first frame; each row's text writes on its cue. Sodium: the darting is shown by the painted wake and a pen arrow (a coded moving ball would duplicate the painted one). The held-still inset is a coded flame over a still ball, solid, in a dashed border.
- Scene 6: the word equation is on the board from the start (it was empty for 3 s); the phenolphthalein plate is on the board from the first frame (its tag lines write on "indicator turns"); the three trough states stand along the bottom (not the top) with a pen arrow and "same two products" instead of a bracket (no room for a bracket between the equations and the plates).
- Scene 7: the IE values sit in the column titles; "easier to pull off →" runs left to right across the columns (the panels are side by side); the melting points are readouts "melts 98 °C" and "melts 63 °C"; the potassium trough thumbnail arrives on "potassium's hydrogen" (the design's "fire" is 24 frames from the end).
- Scene 9: the "more vigorous ↓" pen arrow is right of the five bars; the chip reads "Rb, Cs: secondary sources only".
- Scene 10: the closing chip is "the metal's reactivity is the same" (44 px, underlined), with "conditions change the speed you see" (38 px) above it, since the full sentence will not fit one chip.
- Scene 11: the oil jar stands on the right until the film inset arrives (the right half was empty for 20 s); the chip is struck on "doesn't mean" and its red tag follows (the design's "metal" is 18 frames from the end).
- Scene 16: row B lands on "keeps water away" (when its reason is spoken) and row A on "straight"; the design's "away" occurrence would put them 10 frames apart.
- Scene 17: the potassium and sodium flame plates arrive on "lilac" and "yellow-orange" (the first sentence names both colours) rather than on "metal"; the pen arrow from the ring to the lilac burner and "the colour comes from the metal" land on "metal". The trough opens at 1,300 px with the line "potassium: lilac flame   sodium: yellow-orange flame" under it, and settles to its final 820 px size as that line clears just before "lilac" (the frame was over 60% bare for the first 3 s). The final frame is as designed.
- Scene 8: the potassium trough (520 px) stands at the right, tagged "potassium, last seen", so the thinking frame is not bare; it gives no rubidium value.
- Scene 11: the opening line "Alkali metals react with oxygen and water vapour in air." (38 px) and the "time in air: 0 min" readout are on the board from the first frame (the grader found the opening 63% bare); the tarnish definition moved under the plate.
- Key notes trimmed to 500 characters on screen (checker warns at 480; V14 was 488).

## Cue check
All cues resolve against the measured word timings (`cueFrame` throws on a missing phrase; config loaded in node). Repeated phrases checked: "water" #2 in the hook ("water?", not "with water."); "think" #2 in the prediction ("Have a think", not "Think about"); "surface" #2 in fair-comparison ("cut surface"); "surface" #1 in surface-films; "Further out" #2 and "easier off" #1 in memory-line; "metal" #1 in the handoff ("from the metal", before "metals'"); "lilac" #1 and "yellow-orange" #1 in the handoff (first sentence); "hydrogen" #1 and "hydroxide" #1 in products. Countdowns: 3 s ring from "Have a think"; 10 s rings full from "Pause here".

## Grade checker
`out/explainer/Explainer-chem-y11-m1-v15/grade/Explainer-chem-y11-m1-v15-grade.md`. Runs: (1) FAIL, surface-films opening 63% bare, plus small superscripts in the hand-off panels, a sparse prediction frame and dense notes (559); (2) PASS WITH WARNINGS (notes 500); after the handoff change, (3) and (4) FAIL on the handoff opening (69%, then 60% bare and a fading line); final run **PASS WITH WARNINGS (0 failures, 1 warning: dense key notes, 500 characters)**.

## Dense 3 s sweep (scale 0.5, one still every 90 frames, 146 stills, montaged per 25), run twice, plus a targeted handoff sweep
Defects found and fixed: (1) hook lower half bare for 10 s (trough now grows after "Now"; three lower-left lines); (2) lithium observation card empty for 12 s (metal readout and Li, Na, K row labels from the first frame); (3) products opening nearly empty and bottom half bare (word equation and phenolphthalein from the start, troughs along the bottom); (4) cause and prediction lower halves bare (panels 390 px tall, atoms 0.42 × radius, boxes drawn at 1.24 ×, taller group 1 rows); (5) "lower again" tag running into the 403 value and the trend arrow (moved right; arrow and right column shifted); (6) "more vigorous ↓" touching the source line; (7) "tarnish" hand tag over the sodium block (moved to the left); (8) hand-off "OH⁻" superscripts at 14 px (balls and labels enlarged); (9) feedback 1 atoms small (0.85 × radius); (10) feedback 2 plates small (420 px); (11) handoff right half bare for 12 s. No faint or ghosted main visual: troughs, jar, cut sodium, bars, panels, boxes, checklist and cards are solid in full ink throughout; the only faint frames are scene cross-fades and items writing on. Cues on repeated phrases checked (see Cue check). Opening frame matches V14's final frame; final frame described above.

## Builder's sheet grade
A. Every teaching frame has its main picture from its first frame: the painted aligned trough set (scenes 1 to 5, 6, 10, 17), the oil jar, the cut sodium pair, the phenolphthalein flask, the flame plates, the hand-off panels and three live particle-box runs with readouts (scene 7), the group 1 bars; framed green answers with red crossed slips in both feedback scenes; five two-line notes with the framed memory card and a safety strip; 45 s notes scene. Weakest sheet frames, judged acceptable: frame 10 (memory-line at its start: the chain card shows its first line; the rest writes on the next cues) and frame 5 (the framed symbol equation caught as it fades in).

## Things to check at playback speed
Hook: frozen V14 frame fading out, then the trough growing and the Li and K states with their bubbles; scenes 3 to 5: piece drop timing against "Here's lithium", "Now sodium", "And potassium", bubble rates (Li slow, Na fast, K violent), the pink spread speeds; scene 7: hand-off speeds (Li 44, Na 28, K 16 frames) and the box readouts climbing; scene 11: the 70-frame tarnish cross-fade with the minute counter; scene 17: the trough settling as the flame plates arrive; key notes cross-fade to the final frame.
