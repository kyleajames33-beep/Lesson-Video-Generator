# math-a12-i11 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 13 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-i11-sheet.jpg` (the 16 grade-checker frames). Length as measured: 13,722 frames (457 s); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · INTEGRAL CALCULUS".

## Files
- `src/explainer/lessons/math-a12-i11/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing), `config.ts` (key notes `Math.max(1350, durationInFrames)`), `assets.ts` (the beach-entry pool and its cutaway), `scenes.tsx` (re-exports `I11FinalFrame`);
  - `parts.tsx`: load-time checks of every value (e − 1, e − (e − 1) = 1, the strip sums 1.55, 1.63, 1.70, −16/3, 7/3, 23/3, 7/ln 2, 24 − 7/ln 2, 9/2, −11/6, 19/3); the rigs `PoolCut` (water inside the measured inner surface, in flat layers, with optional concrete, rectangle and tags), `Sideways` (horizontal strips x = g(y), signed), `SquareGraph` (equal units, with the reflection (x, y) → (y, x) animated along each point's perpendicular to y = x);
  - `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 13).
- `src/explainer/registry.ts`: one import and one array entry.

## Joins
- Frame 0 is `I10FinalFrame` (imported from i10). It holds under "Last video ended here: the region between y = ln x, the y-axis..." and cross-fades to the pool on "beach entry".
- The final frame is i12's own opening frame: scene 12 ends on `I11FinalFrameStandIn` (imported from `../math-a12-i12/s1`), and its second half uses i12's parts (`Row`, `Hand`, `Int`, `Chip`) so the cut is exact. The notes cross-fade back to the same stand-in over their last 40 frames. i12 needs no change.

## Plate fit (root decision 30)
- **Beach-entry pool (`ma12-beach-entry-pool-v1.png`, 1585 × 992):** placed by its alpha box [107, 111, 1474, 876], shown only at the hook as the real object, then cross-faded to the cutaway.
- **Pool cutaway (`ma12-pool-cutaway-v1.png`, 1774 × 887):** alpha box [77, 170, 1697, 761]. The coded water is clipped to Codex's measured inner surface: origin (210, 632), flat floor to x 610, ramp points (710, 584) to (1297, 282), surface y 232, right wall 1445.
- **Fit finding:** the painted ramp is not an exact y = ln x (about 40 px off along the ramp at the cutaway's own scale). The cutaway is therefore always a picture beside the coded graph, never overlaid on it; the coded graph carries every number. Areas on the cutaway are labels only ("1.72 m²", "1.00 m²").
- Anchor size: the cutaway 1,090 px wide in scenes 1, 3 and 4, 760 in scene 2, 760 in the memory card, 1,100 in the handoff recap, 630 in the notes card.

## Departures from the design
- **Scene 1:** a "the water's cross-section" card names the region under the cutaway (the lower right was empty for most of the scene). The chip and the hand tags moved down to make room.
- **Scene 2:** a "one layer" card (thickness Δy, length x, area ≈ x × Δy) fills the right column until the integral row; the live readout starts with that row. The strip-sum label and the amber limit labels moved clear of the hand note and the y-axis ticks.
- **Scene 3:** the cutaway is on screen from the start (it arrived only on "So the pool's"), with a note "y = eˣ and y = ln x: mirror images in y = x" before the reflection rule. Graph labels are 40 px (were 32 to 34).
- **Scene 4:** a "the region we couldn't do" card states the target until "concrete under the sloping". The "concrete = rectangle − water" tag leaves before the "not needed" chip lands on its spot.
- **Scene 5:** opens with a rule card ("a sideways strip's sign"), two sample strips on the empty axes (x > 0 adds, x < 0 subtracts) and two worked strip rows (x = 3: +0.75; x = −3: −0.75), then the worked example. The graph is 1,100 × 730 (was 568 tall), and "last video's curve, reflected in y = x" moved under the small graph.
- **Scene 7:** a card "log₂ x: the power of 2 that gives x" (log₂ 8 = 3, because 2³ = 8) fills the column before the rows; the reflected 2ˣ picture arrives on "so x is" instead of at the end; the "earlier video" note wraps onto two lines (it ran off the frame).
- **Attempts:** answer-free axes are 820 × 540 with a "sketch first" prompt placed clear of the dashed lines; the x label sits under the axis (it collided with "y = 0").
- **Feedbacks:** feedback 1's integral rows are 52 px; feedback 2 has a plan card that slides under the rows on "The rectangle" and leaves before the crossed slip.
- **Handoff recap:** two summary cards (sideways strips; the log₂ x pair) fill the lower third.
- **Key notes:** five bullets at 38 px in the left column (decision 58); the framed card carries both aid lines, the two aid icons and the cutaway.

## Check at playback speed
- Scene 1: the cross-fade from i10's frame to the pool, then the pool to the cutaway (both plates briefly overlap); the "?" strips crossing out.
- Scene 2: the strips refining 5 → 10 → 40 with the sum label; the readout height sweeping 0 → 1 with "water so far" reaching 1.72.
- Scene 3: the reflection of the region and the point (2, ln 2) → (ln 2, 2), then the vertical strips.
- Scene 4: the rectangle drawing on the graph and the cutaway together; the concrete tinting.
- Scene 5: the left strips flipping to positive on "piece positive".
- Attempts: the full ring from "Pause here to answer.", then the 10 s count.
- Scene 12: the recap fading to i12's opening frame.
- Notes: the silent cross-fade back to i12's frame.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i11`: **PASS WITH WARNINGS (0 failures, 2 warnings)**.
- Frame 7 (scene 5, the sign demonstration before the worked example): 56% bare paper. The first run failed it at 60%; the worked strip rows now fill the right column.
- Frame 11 (feedback 1 before its rows): 52% bare paper.

## 1 fps sweep
Two full sweeps at every 30th frame, every tile inspected; scenes 2, 5 and 7 were adjusted after the second sweep (card timing, rows moved down 30 px) and checked on the grade frames. Found and fixed:
- **Collisions:** the strip-sum label on the hand note (scene 2); the amber limit labels on the y-axis ticks (scene 2); "y = eˣ" on the curve (scene 3); the pool tag on the cutaway's bottom edge (scene 3); "concrete = rectangle − water" under the "not needed" chip (scene 4); the "earlier video" note running off the frame and touching the integral row (scene 7); "y = 0" on the x label (attempt 1); "last video: y = x² − 4" on its curve (scene 5).
- **Empty stretches:** scene 1's lower right; scene 2's right column; scene 3's right column; scene 4's opening; scene 5's first 11 s (empty axes and two small tags); scene 7's right column; feedback 2's left column; the handoff recap's lower third; the notes card's middle.
- **An empty working box:** scene 2's "one layer" card now arrives with its first line.
- **Small text:** the cutaway tags (30 → 34 px), the hand labels (32 → 40 px), feedback 1's integral rows (44 → 52 px), the icon signs (28 → 34 px).

## Honest grade
A on the checker. Root may call these frames B+:
- frame 7 (scene 5 opening): the lower right is thin until the worked example starts;
- frame 11 (feedback 1 opening): the left middle is empty for about 5 s above the plan card;
- the memory aid's icons are small (170 px) beside the 64 px aid lines.

## Probe check 13 Nov
- Line-through-text probe (`out/explainer/.repair-sweep/ink-check.sh`, 1 fps, three renders) before the render: 13 runs, 5 after fixes. Plot labels now use a local PLabel with a 16 px paper stroke (was i06's, 8 px); inline SVG labels 14 px (parts.tsx, s1.tsx). Accepted: red strike-outs, "(2, ln 2)" for one frame while it moves with the reflection.
- Sheet re-made because the fixes changed sheet frames: `docs/production/claude-pm/builds/math-a12-i11-sheet-repair2-2026-11-13.jpg`. `npm run grade:explainer`: PASS WITH WARNINGS: 0 failures, 2 warnings.
