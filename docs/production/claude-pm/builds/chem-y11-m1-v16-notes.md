# chem-y11-m1-v16 build notes (built on the measured narration)

Builder: Claude build agent, 21 November 2026. Explainer id `Explainer-chem-y11-m1-v16`, export `config_y11c_m1v16` (18 scenes, 13,147 frames, about 438 s; key notes 1,350 frames = 45 s, measured). Sheet: `work/quality-audit/fixed/chem-y11-m1-v16-sheet.jpg` (the final grade sheet; no frame stamps). No MP4 built. Narration unchanged.

## Speech-rate check (before building)
Characters of script divided by audio seconds (startFrame to endFrame) for all 18 scenes: 12.0 to 18.0 characters per second (lowest: colours 12.0, memory-line 12.7). None under 10, so no run-on take. Last caption word ends inside each scene's audio.

## Files
`src/explainer/lessons/chem-y11-m1-v16/`:
- `common.ts`: measured lookups, holds, plates (alpha boxes measured; the flame set shares one box so cross-fades align) and the one data table `MT` (seven metals: ion, salt, colour words, flame plate, swatch and ink colours, emission lines and bands). Every flame colour, table row, swatch, strip line and photon run reads it.
- `parts.tsx`: V13 parts re-exported (read-only chain to V01, including V10's strip, photons and VArrow); `WireLoop` re-exported read-only from `chem-m8-c03a/parts`. New: `Burner` (aligned flame states cross-fading in place, with partial levels), `flamePt`, `Bottle` (formula on the cream label), `OText` (flame-colour text with a dark-ink outline), `Ladder`, `Swatch`, `WordCard` (slate cross), `Burst`.
- `opening.tsx`: V15's exported `SceneHandoff`, frozen on its last frame, imported read-only.
- `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 12), `s3.tsx` (13 to 18), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: import and entry added after `config_y11c_m1v15` (one scripted edit, file re-read first, LF kept).
- Typecheck: scoped tsconfig in the scratchpad, clean. Config loads in node (all cues resolve).

## Plates
All design-named plates exist; uniform scale only: `m8-flame-blue-v2`, `-na-yellow-v2`, `-k-lilac-v2`, `-ca-brick-red-v2`, `-sr-crimson-v2`, `-ba-pale-green-v2`, `-cu-blue-green-v2`, `y11c-flame-li-crimson-v1` (1254 px canvas, box scaled by 0.627, aligned), `m5x-bottle-scn-v1`, `m5x-safety-glasses-v1`, `y11c-hand-spectroscope-v1`. `y11c-trough-k-v1` and `m8-flame-k-lilac-v1` are in the asset list only because V15's final frame (the opening) shows them. None missing.

## Data and sources
- Flame colours: site colour table (design author note a).
- Line positions: NIST ASD strong lines (Na 589.0, 589.6, 568.8, 615.4, 498.3 nm; Li 670.8, 610.4 nm; Sr 460.7 nm); Sr orange and red bands drawn as about 602 to 610 nm and 640 to 690 nm (flame-emission references; design author note c). Source line on screen in scenes 2 and 11.
- Strips follow V10's convention (700 nm at the left, 400 nm at the right), not the design's x = (λ − 400)/300 formula, so they match the strip students saw in V10.

## Simulation
`src/explainer/sims/chance.ts`, `{kind: 'weighted'}`, one outcome per line; weights illustrative; both views carry "model: brightness not to scale".
- Scene 2: 90 trials (seed 16) from "A flame shows" to "single colour". Each trial is one photon: a drop on the model ladder (bigger drop for shorter wavelength; not to scale), a wavy photon in its own colour flies into the swatch, which blends the landed photons' colours; readouts "photons counted" and "your eye sees" (separate photons, then "yellow-orange").
- Scene 11: lithium 80 trials (seed 11) from "Then you see" and strontium 80 trials (seed 23) from "Strontium shows"; photons leave the spectroscope's eyepiece and pile up as tallies under each line or band; each line appears when its first photon lands.

## Opening-frame match (V15)
Waited for V15's hand-in notes. The hook's first 129 frames are V15's own `SceneHandoff` frozen at V15's `dur('handoff') - 1` (imported read-only from `chem-y11-m1-v15/s3.tsx`), so frame 0 is V15's final frame by construction (still 0 checked: heading "Whose colour is the flame?", the potassium trough with ringed lilac flame, the two flame plates at x 1180 and 1560, the navy "Next" chip). On "Now put" it slides left and fades over 28 frames while the burner slides in. V15 was not edited.

## Final frame (scene 17 `handoff`), for the chem-y11-m1-v17 builder
Exported read-only from `src/explainer/lessons/chem-y11-m1-v16/s3.tsx`: `SceneHandoff`, `ATOM17` ({cx 400, cy 610, R 210}), `NUC17` ({cx 1330, cy 590, r 34}) and `NEXT17` (the two chip lines). Open V17 with `<Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze>` (V16's `dur` from its `common.ts`); V16's key notes cross-fade back to this frame.
- Heading "Flame tests: what can a colour tell you?" (hand, 60 px, x 96, y 150).
- Navy box (x 96, y 180, 1100 by 124, navy outline) with two 38 px navy lines: "Next: what radiation do unstable isotopes give off," / "and does it matter if they're natural or human-made?".
- Left: a sodium shell atom centred (400, 610): rings at 0.42R, 0.7R and R (R 210) with 2 and 8 blue electrons, a packed nucleus of 11 red protons and 12 slate neutrons (r 11), a dashed outer ring at 1.32R; the outer electron sits on ring R at angle −0.28π with a short ink drop stroke from the dashed ring, and a yellow-orange wavy photon leaves up-right (about (620, 480) to (767, 347)). Tag "flame colours: electrons outside the nucleus" (34 px, ink, x 96, y 900).
- Right: a dashed zoom cone from the small nucleus to a paper circle (centre 1330, 590, r 250) holding the enlarged nucleus (11 red protons, 12 slate neutrons, r 34); a red-outlined pink burst (r 80) at (1580, 390) with a 72 px "?"; tag "radiation: changes inside the nucleus" (34 px, ink, centred x 1330, y 900).
- The "electrons: outside" hand tag and the right-hand energy ladder clear before the nucleus enlarges. Nothing below y 905.
- Chip wording uses V17's proposed question from `chem-y11-m1-v17.md` (open decision 3: root to align with V17's approved wording). It is split over two lines because one 38 px line would run off the frame.

## Departures from the design (with reasons)
- Series pattern kept (Card, QTag, PauseHoldR, Givens, Framed, Chip) rather than `src/explainer/shared/scenes.tsx`, to match V11 to V15.
- Scene 1: the new heading writes on just after "Now put" (the design's "reliably" is 30 frames from the end and the top third was empty for 14 s).
- Light flame colours (lilac, yellow-orange) in hand tags use a darker ink of the same hue rather than an outline (Write has no outline); ion labels in the table, overlap and notes use `OText` with the dark-ink outline.
- Scene 2: the right-hand top shows hydrogen's four-line strip ("same cause: drops give photons") until "So each metal", then the lilac flame with a second ladder of different gaps. Ladder drops are mapped to the sodium lines in energy order, not to scale.
- Scene 3: the loop dips into the LiCl bottle and the flame shows crimson on "hold it at", back to blue on the second "Clean the loop"; step 2 writes on "Then dip" and step 3 on "hold it at" (design: both on "away"); step 4 on the second "Clean the loop".
- Scene 4: the word card reads "air hole closed: yellow flame" and takes the slate cross; "hides the colours" writes under it (crossing the full sentence would mark a true statement as wrong). Reasons board: "1 clean loop, no sample", "2 clean between tests", "3 test each solution again" (own numbering for the three reasons).
- Scene 6: the loops appear only for their trips (resting rods crossed the "the metal" tag).
- Scene 8: a "very similar reds" line writes under the merged swatch on "very similar" (the right half was over 60% empty; checker failure).
- Scene 9: the "sodium present" readout shows "?" from the first frame and "a trace" on "tiny trace"; a "potassium: pale lilac" tag shows until "pale lilac", then "lilac hidden". The masked flame is the sodium plate at 82% over the lilac plate (reads as mostly yellow-orange with a lilac base).
- Scene 10: the faint copper flame is the copper plate at 30% over the blue-flame plate (same burner; only the flame changes). Limit 4 chip on "A faint colour" (the design's "dip" is 20 frames from the end).
- Scene 11: the pen ring round both patterns is a pen bracket at the right of the two strips with the tag "same colour, different lines" top right (a ring would cross the tallies and tags).
- Scene 12: the memory card is on the board from the first frame with the line "the rule to keep: a flame colour is a clue; the line pattern is the evidence" (written on "the rule"), then the 64 px "Colour suggests; spectrum confirms." (an empty card waiting for its cue fails A).
- Scenes 14 and 16: crossed chips appear on "Writing just" and "Concluding", are struck on "the slip" and "trap", with the red tag after (the design's "two" is 15 frames before the voice ends).
- Scene 17: a small energy ladder with one drop and photon sits at the right while the narration says "as electrons moved between energy levels" (the right half was empty for 8 s); it clears before the push to the nucleus.
- Key notes: notes as designed (each ion outlined in its flame colour), the framed memory card with small Li and Sr strips, and the green safety strip. The checker warns "dense key notes" (589 characters on screen including the card and safety strip; the five bullets are about 330).

## Cue check
All cues resolve against the measured word timings (`cueFrame` throws on a missing phrase; config loaded in node). Repeated phrases keyed to the right occurrence: scene 1 "lilac" #2 ("turns lilac", not "lilac flame on water"); scene 3 "Clean the loop" #1 and #2, "no colour" #1; scene 5 uses unique phrases ("crimson red", "bright yellow-orange", "pale lilac", "orange-red", "deep red", "pale green", "blue-green"); scene 7 "Have a think" (not "Think about"); scene 11 "one strong red" and "a blue line" (not the third "line" in "line pattern"); scene 17 "human-made". Countdowns: 3 s ring from "Have a think"; 10 s rings full from "Pause here".

## Grade checker
`out/explainer/Explainer-chem-y11-m1-v16/grade/Explainer-chem-y11-m1-v16-grade.md`. First run: FAIL (1 failure: overlap frame 63% bare; warnings: sparse contamination frame, dense notes). After fixes: **PASS WITH WARNINGS (0 failures, 1 warning: dense key notes)**. Final run on the final code: see the report (result line repeated at the end of this file).

## Dense 3 s sweep (scale 0.5, one still every 90 frames, 147 stills, montaged per 20 to 30) run twice, plus targeted re-renders
Defects found and fixed: (1) the scene 4 word card crossed a true statement; (2) scene 2 "drops: photons" tag on the swatch label, readout text running out of its box, the pen ring through the swatch label, the lilac comparison overlapping the fading hydrogen strip; (3) scene 3 tags crossed by the resting loop rod; (4) scene 6 brackets over "(aq)" and resting loop rods across "the metal" tag; (5) scene 5 bracket bump pointing into the table; (6) scene 8 lower right empty (checker failure); (7) scene 9 right half empty for 13 s; (8) scene 10 UV photon left across the copper flames and their tag; (9) scene 11 "strontium" label colliding with the spectroscope caption, "nm" label on the 671 line, strips empty for 12 s (the lithium run now starts on "Then you see"); (10) scene 12 empty card for 7 s and badly spaced memory line; (11) attempt cards sparse in the lower half (burner and bottles enlarged); (12) feedback 1 strip labels on the confirm line; (13) handoff tag clipped by the left edge; (14) hook chip underline offset; (15) key-notes card superscripts at 19 px (now 34 px labels). No faint or ghosted main visual: plates, table, strips and atoms are solid in full ink; the only partial opacities are the deliberate masking and faint-flame cross-fades and a 1 s slide-in of the burner on "Now put".

## Builder's sheet grade
A. Every teaching frame has a painted flame plate (aligned set, cross-fading only the flame), bottles, glasses or the spectroscope on screen; two chance-engine runs with live readouts; the results table writing row by row; framed green answers and red crossed slips in both feedback scenes; question cards whole with neutral pictures; five short notes with the framed memory card; 45 s notes scene. Things that are softer: the method board shows two empty step slots for about 20 s (the design asks for the four slots from the first frame); key notes text is 34 px as designed.

## Things to check at playback speed
Hook: V15's frame sliding out and the burner sliding in; the loop carrying each drop and the flame cross-fades on "turns lilac" and "yellow-orange". Scene 2: photon speed (four slow, then fast) and the swatch blending. Scene 5: loop rhythm per metal (about 2.5 s each). Scene 8: Li flame moving left as strontium arrives, swatches merging on "apart". Scene 9: the masking cross-fade reading as "mostly yellow". Scene 11: the two tally runs. Scene 17: the push into the nucleus and the burst. Key notes cross-fade to the final frame.

Final checker run on the final code (21 November 2026, 04:36 local): PASS WITH WARNINGS, 0 failures, 1 warning (dense key notes, 589 characters). Sheet copied to `work/quality-audit/fixed/chem-y11-m1-v16-sheet.jpg`.
