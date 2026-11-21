# chem-y11-m1-v21 build notes (built on the measured narration)

Builder: Claude build agent, 21 November 2026. Explainer id `Explainer-chem-y11-m1-v21`, export `config_y11c_m1v21` (19 scenes, 15,047 frames, about 502 s; key notes 1,350 frames = 45 s, measured). Sheet: `work/quality-audit/fixed/chem-y11-m1-v21-sheet.jpg` (the final grade sheet; no frame stamps). No MP4 built. Narration unchanged.

## Speech-rate check (before building)
Characters of script divided by audio seconds for all 19 scenes: 13.1 to 17.6 characters per second (lowest: attempt-1 13.1, attempt-2 13.4, magnesium-chloride 13.4). None under 10, so no run-on take.

## Files
`src/explainer/lessons/chem-y11-m1-v21/`:
- `common.ts`: measured lookups, holds, plates (alpha boxes measured) and the one data table `EL` (Pauling electronegativities at one decimal and outer electrons), with `dX` (larger minus smaller, one decimal), `working` (the "3.2 − 2.2 = 1.0" line), `typeOf` (bond type by the guide values 0.4 and 1.7; above 1.7 reads "ionic (by the guide)"), `MARKS` (spectrum markers) and `EVIDENCE` (HF boils at about 20 °C, NaCl melts at 801 °C). Every value, difference, type readout, pin and count reads it.
- `parts.tsx`: V14 parts re-exported read-only (shaded periodic table, and through V13 to V01 the text, chips, framed answers, pen marks, plates). New: `Dial` (the tug-of-war bond: the shared pair placed by the difference, centred at 0, pulled toward the stronger atom, handed over at 2.0 and above with the rope going and teal ion charges), `SpecBar` and `Pin` (the spectrum 0 to 3.3 with dashed guide lines at 0.4 and 1.7 and a hatched band when it widens), `Lewis`, `LBrackets`, `MoveDot` (Lewis symbols with dots in pairs on four sides; moving or shared electrons amber), `Outline` (plain periodic outline with cells lit by symbol), `DialRead`.
- `opening.tsx`: v20's final frame drawn here (`V20Final`), because v20 is not built.
- `s1.tsx` (scenes 1 to 7), `s2.tsx` (8 to 13), `s3.tsx` (14 to 19), `scenes.tsx`, `assets.ts`, `config.ts`.
- `src/explainer/registry.ts`: import and entry added after `config_y11c_m1v17` (one scripted edit, re-read immediately before, LF kept).
- Typecheck: scoped tsconfig in the scratchpad, clean. Config loads in node (every cue resolves).

## Plates
All design-named plates exist; uniform scale only: `c1-salt-jar-crystals-v1`, `y11c-dry-ice-v1`, `y11c-gas-jar-chlorine-v1`, `m8-water-glass-v1` (biology folder), `m5x-ammonia-bottle-v1`. None missing.

## Simulation: the difference dial
The pair's position, the difference readout and the bond type are all computed from the two values in `EL` (no posed positions). Scenes 3 to 5 step the left atom (Cl, H, Na: differences 0, 1.0, 2.3). Scene 6 sweeps Cl–Cl 0, C–H 0.4, O–H 1.2, MgO 2.1 (handed over), KF 3.2, then returns to Cl–Cl, H–Cl and NaCl as the three guide bands are named; a pin drops on the bar for each example and an amber marker tracks the dial.

## Opening frame (v20 not built: re-match required)
v20 is not built, so V21 opens on `V20Final` (in `opening.tsx`), drawn from `chem-y11-m1-v20.md` ("Final frame" and scene 17): heading "Naming compounds: from formula to name"; the navy chip "Next: how does electron attraction connect ionic and covalent bonding?" (x 96, y 190); the NaCl card (x 96, y 330, 500 by 230) with teal Na⁺ and Cl⁻ and a teal ringed "ions" tag; the CO₂ card (x 1324, y 330) with a small C and O sharing a blue pair, "shared electrons" and an amber "shared pair" tag with a pen arrow; between them a "?" (960, 400) and the rope (x 700 to 1220, y 470) with a blue pair and the tag "pull on electrons: electronegativity". The heading is drawn at full strength (v20's "dimmed" wording is join text only), and the rope tag has no video number. **When v20 is built, re-match this opening to v20's exported final scene (ideally replace `V20Final` with v20's frozen `SceneHandoff`, as V16 and V17 do), and keep the v21 cues that fade its parts.**

## Final frame (scene 18 `handoff`), for the chem-y11-m1-v22 builder
Exported read-only from `src/explainer/lessons/chem-y11-m1-v21/s3.tsx`: `SceneHandoff`, `GRID` ({x0 640, y0 380, sp 118, cols 6, rows 4}) and `NEXT18` (two chip lines). Open V22 with `<Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze>`; V21's key notes cross-fade back to this frame.
- Heading "Electronegativity: one pull, from sharing to transfer" (hand, 60 px).
- Navy chip (x 96, y 190, 120 px tall) with two 38 px navy lines: "Next: why are ionic solids hard and brittle, and why do" / "they conduct only when their ions can move?".
- Centre: a 6 by 4 layer of alternating ions from (640, 380), spacing 118: Na⁺ as small circles (r 30, pale red fill, red edge, "+") and Cl⁻ as larger circles (r 46, pale blue fill, blue edge, "−"); four solid ink attraction lines from the Na⁺ at column 3, row 2 to its four nearest Cl⁻.
- Left: the salt jar (300 px tall, centred x 330, bottom 820) with "salt: a crystal of ions" (34 px).
- Right: "hard?" (44 px, x 1420, y 460), "conducts only when" / "melted or dissolved?" (40 px, y 560 and 612).

## Departures from the design (with reasons)
- Scene 1: the V21 heading writes on with "Remember our tug of war" (v20's chip and heading fade then), not on "bonding" (the top band would have been empty for 22 s). The dial atoms are unlabelled (the narration is generic).
- Scenes 3 to 5: one tug-of-war stage with three live readouts (values, difference, bond type), each "?" until its cue. A chlorine-gas jar (scenes 3, 4) and salt (5) stand at the left. Scene 5's ionic case moves a single amber electron (sodium's one outer electron), not a pair.
- Scene 6: the guide numbers sit under the bar (above it they collided with the pins). The small periodic outline sits under the readouts with its two tags at its left.
- Scene 7: a plain periodic outline with H and F lit fills the right (the middle of the frame was empty); the dial is not shown, so nothing answers the prediction.
- Scene 9: chlorine's 2, 8, 7 shell atom fades its inner rings on "Inner electrons".
- Scene 10: the MgCl₂ formula card is on the board from the first frame (its ratio tag arrives on "the formula"); "Cl: 7 outer" labels show until "each chlorine can take only one".
- Scene 13: the dashed links from the three dials to the bar were dropped (they crossed the memory card); the amber arrow and its tag arrive on "The bigger", the memory card with "Small gap, share."
- Scene 15: a small H–N dial with δ+ and δ− and a plain periodic outline with the five elements fill the lower right (it was empty).
- Scene 17: the ammonia symbols, (b) label and the ammonia bottle show from the first frame (bonding pairs form on cue).
- Scene 18: the salt jar is on the board from the first frame (the pair alone left the frame mostly empty for 7 s); its tag arrives on "pattern".
- Series pattern kept (Card, QTag, PauseHoldR, Givens, Framed, Chip) rather than `src/explainer/shared/scenes.tsx`.

## Cue check
All cues resolve against the measured word timings. Repeated phrases checked: scene 1 "of electrons." is the first "of electrons" (the tug of war, not "sharing electrons"); scene 2 "hydrogen two point two" (first); scene 4 "one point zero"; scene 6 cues use unique phrases ("zero point four is", "is ionic", "far apart", "share electrons"). Countdowns: 3 s ring from "Have a think"; 10 s rings full from "Pause here".

## Grade checker
See the result line at the end of this file and `out/explainer/Explainer-chem-y11-m1-v21/grade/Explainer-chem-y11-m1-v21-grade.md`.

## Dense 3 s sweep
One still every 90 frames (scale 0.5, 168 stills), montaged per 42 and read in full, plus an earlier scene-sample pass (57 stills). Defects found and fixed: (1) "covalent bond" line touching the readout labels (readouts lowered); (2) "δ = a little" over the givens strip; (3) Cl⁻ label over the "bond type" readout; (4) scene 6 outline colliding with the pins and the 0.4 and 1.7 labels colliding with the C–H pin; (5) scene 8 chip and "mixed character" over the H–F pin label, "still shared" over the bar labels; (6) scene 11 lone-pair rings over the Cl symbols; (7) scene 12 symbols too small for the frame; (8) scene 13 links crossing the memory card and the card empty for 16 s; (9) scene 7, 10, 11, 15, 17 and 18 frames over half empty (checker failures on 10, 11, 15); (10) attempt 1 outline too small. No faint or ghosted main visual: plates, dials, bars, tables and diagrams are solid in full ink; partial opacities are only fades on cue.

## Things to check at playback speed
The rope growing out of v20's frame (scene 1); the pair sliding and the hand-over in scenes 1, 5 and 6 (the sweep runs fast between 112 and 290); the amber dots moving in the Lewis scenes; the CO₂ dots gathering and becoming double lines; the ion layer building outward in scene 18; key notes cross-fade to the final frame.

## Builder's sheet grade
A−. Plates in most teaching frames (salt, dry ice, chlorine jar, water glass, ammonia bottle), the computed dial with live readouts through scenes 1 to 8, framed green answers and red crossed slips, whole question cards, five notes with the framed memory card, 45 s notes scene. Softer: the water and attempt 1 sheet frames are 54% bare paper (checker warnings; Lewis diagrams and the question text are light on the page), and the notes screen is 487 characters.

Final checker run on the final code (22 November 2026, 00:34 local): PASS WITH WARNINGS, 0 failures, 3 warnings (lewis-water 54% bare, attempt-1 54% bare, dense key notes 487 characters). Sheet copied to `work/quality-audit/fixed/chem-y11-m1-v21-sheet.jpg`. (After that run only the playback-sweep fixes listed above were made, none in v21.)
