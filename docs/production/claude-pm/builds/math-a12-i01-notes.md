# math-a12-i01 build notes (Revision 4 build on the measured narration)

Builder: Claude build agent, 12 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-i01-sheet.jpg` (the 16 grade-checker frames). Length as measured: 15,883 frames (529 s); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · PRIMITIVES".

## Files
- `src/explainer/lessons/math-a12-i01/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; repeats named: "f plus g" #2 and "times f" #2 in scene 6), `config.ts` (key notes `Math.max(1350, durationInFrames)`), `assets.ts`, `scenes.tsx` (re-exports `I01Board` and `I01FinalFrame`);
  - `parts.tsx`: load-time checks of every value (shelves 66, 20, 105, 82, gap 30 at every t; hook 4 and 9.25; gap 4; tracer x³/3 to x²; we-1; we-2 with 1, 4, 5, 14.125, −7; A1; A2 with 6, 3, 15, 14.1056; (2x + 1)² = 4x² + 4x + 1); the rigs `ShelfStand`, `ShelfGraph`, `ShelfBoard`; `SegRow` (working rows whose segments fade in whole on their cues); `LabelArrow`, `MiniPlot`, `PLabel`, `FramedCard`, `Note`;
  - `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (8a to 15, `I01Board`, `I01FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry, before i02.
- `src/explainer/lessons/math-a12-i02/s1.tsx`: the stand-in board is removed; i02 imports `AID01`, `I01Board` and `I01FinalFrame` from i01. `I01Board` is i02's stand-in code unchanged, plus three optional props (`intAt`, `aidAt`, `markAt`) whose defaults reproduce i02's frame exactly. A still of i02 frame 0 matches i01's last frame in layout.

## Joins
- Frame 0 is `D19FinalFrame` (imported from d19). The d19 board holds through the first sentence ("Last video ended on this question..."), then cross-fades on "plant stand" as the stand slides in and the i01 heading writes on.
- The final frame is `I01FinalFrame` (scene 14's board; the notes cross-fade back over the last 40 frames). Scene 14 adds two recaps that are not in the final frame: a large family graph (C sliding 0 to 3 onto (1, 4)) before the integral writes, then a small family graph and a "so far: powers of x" card, both gone by "shortcut" + 8 frames.

## Plate fit (root decision 30)
- **Plant stand (Nov 12 plate, 1197 × 1315):** placed by Codex's measured soil centres (276, 865), (596, 612), (910, 346) and the alpha box [91, 330, 1092, 1225]. Never scaled non-uniformly.
- **Scale finding:** the painted soil lines are 253 px (bottom to middle) and 266 px (middle to top) apart, and the floor is 315 px below the bottom soil. No single scale gives 30, 30 and 20 cm. The build sets the plate scale from the bottom-to-middle gap (253 px = 30 cm, 8.43 file px per cm), because that is the gap scene 4 measures with its amber bar. Each tip rises t² cm above its own soil at that scale, so all three shoots grow identically. On the plate the middle-to-top gap reads about 31.5 cm and the floor about 37 cm below the bottom soil. The build therefore draws no ruler or floor line on the plate: heights are read on the t–h graph (soil lines at 20, 50, 80) and the board, which come from the same t.
- **Bean shoot:** stem base (300, 760), tip y 60, 14 px per cm on its own canvas; drawn at 8.43/14 of the stand's scale through the kit `MaskedPlateRise`, masked at each soil centre line. At t = 5 (25 cm, 211 file px) the leaves stay clear of the planks above-right (checked: bottom shoot right edge x 369 against the middle plank at x 405; middle shoot right edge x 689 against the top plank at x 715). The shoots are small early in the run (open decision 6). The clock now starts on "Three bean" so they visibly grow through the whole growth sentence.
- Anchor size: stand 640 px wide in scene 1, 560 (about 500 px tall) in scene 2 after root's frame 2 note, 720 then 460 in scene 4, 540 in scene 8a.

## Departures from the design
- **Scene 1:** the clock runs 0 to 5 weeks from "Three bean" to "slid up" (design: from "week"), so the 9 s after the stand arrives are not a still. The "+ 30 cm" arrows and "same shape" leave before the "66 cm at 4 weeks" tag lands on that spot (a 1 to 3 s collision in the first build). The replay to t = 4 fades the shoots out and in, so they never shrink on screen.
- **Scene 2:** the box row first shows F(x) → f(x) with the violet "differentiate" arrow on "has derivative", then becomes x² → 2x on "So x squared". The design's 420 px stand column is 560 px wide (about 500 px tall, root's frame 2 note) with a narrower 385 × 540 t–h graph beside it; scene 2 was re-swept after the change.
- **Scene 3:** no 300 px stand thumbnail (anchors under about 380 px are a root fault). A grey chip "the shelves: one shape, three heights" and a small t–h graph stand in for it.
- **Scene 4:** two stages. A: the stand at 720 px, shoots grown, then replayed with the gap bar and a "gap 30.0 cm" board on "For two of". B (from "Their gradients"): the gap panel slides in under the graph, and the two shoots stay as a 460 px stand at the lower right until "constant".
- **Scene 5:** before the guess, the panel shows an empty "the guess" plot with "?" and the dashed target x²; an x⁴ → 4x³ example with forward and reverse arrows fills the column until "Try x squared". The dashed target and its label are drawn in the panel overlay (the kit target is clipped to the traced range). The readout board is the kit `LiveReadoutBoard` driven from the same x and scale (the panel's own readout cannot fade out, and it collided with the general proof). Its gradient label reads "gradient of the guess x³" while the guess is x³.
- **Scene 6:** the integral notation is drawn with MarkSpans (circle on ∫, underlines on the integrand and dx at their cues). The kit labels were too small and overlapped. Plain 38 px notes explain each part. The integral identities appear just after the notation, unspoken (design: "as each is said"; they are not said).
- **Scene 7:** the plan card slides down under the rows instead of leaving, and goes on "Add one C".
- **Scene 8:** a faint violet slope field of 3x² − 4x + 2 fills the graph before the family appears ("the gradient at every point"), with a plan card until the substitution. The family members are drawn lesson-side so they can fade on "The curve is".
- **Scene 8a:** soil labels off on this graph so the red "C = 66: 82 cm at 4 weeks" label has room. The slip card arrives on "C isn't sixty-six" (design: "started", 26 frames before the end).
- **Scenes 11 and 13:** a short plan card fills the working column until the rows need it. In feedback 2 the family and the point are drawn from the start of the scene.
- **Key notes:** five bullets at 40 px in the left 1,050 px (decision 58), and a framed card on the right with the main line, the shelf key, a small t–h graph and the procedure line.

## Cue check
`cuemap.ts` resolves every phrase at load (scratch `cuecheck.cjs`: 0 missing). Late cues moved earlier so their visuals are not cut off at the scene end:
- scene 3: "F(x) + C is also a primitive" moved from "also" to "F plus any";
- scene 4: "covers every primitive" moved to "That means" + 2 s;
- scene 5: the n ≠ −1 chip moved to "except minus one";
- scene 8: the initial-condition chip moved to "A fact like".

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i01`: **PASS WITH WARNINGS (0 failures, 2 warnings)**.
- Frame 15 (scene 14, the handoff) is sparse at 52%. Earlier runs failed it at 65% and 60% before the recap card and the larger family graph went in.
- "Few pictures": the checker does not count coded graphs.

## 1 fps sweep
I ran three full sweeps at every 30th frame (scale 0.33) and re-swept scenes 5 and 14 after the last fixes. I tiled and inspected every frame. Found and fixed:
- **Collisions:**
  - scene 1: "+ 30 cm" arrows under the "66 cm at 4 weeks" tag;
  - scene 5: "3 vs 1" bars beside the dropped point; the "want: x²" label under "3 vs 1"; the readout board over the general proof;
  - scene 6: integral-notation labels on top of each other;
  - scene 7: a green ring over empty space beside the equation strip; the d/dx arrow on the graph edge;
  - scene 8: a hand tag about to overlap the first row;
  - scene 8a: the heading over the graph's axis label, "C = 0" over the bottom-shelf label, and the red ghost label over the soil and reading tags;
  - feedback 1: the family label running off the plot;
  - key notes: the card graph's axis label touching the procedure line.
- **A state contradicted on screen:** scene 5's "3 vs 1" and the readout label while the guess was x³.
- **Empty openers or long thin stretches:**
  - scene 1: the empty pots for 9 s;
  - scenes 2, 4, 5, 6, 7 and 8 (see Departures);
  - scenes 11 and 13: plan cards;
  - scene 14: about 9 s with nothing but the memory line.
- **Wrapping:** the board label "growth rate 2t".

Left as is: the d19 frame holds still for 8 s at the start (it is the join, under narration about d19's question); scene 3's right column is thin below the slider until "is zero" (about 13 s).

## Kit issues (no kit files edited)
- `PairedDerivativePanel`: `target` is clipped to the traced range by `clipToPoint`, so it is invisible before a trace. The readout cannot take `out` or `inline`, and it stays through later working.
- `StudioIntegralNotation`: the bracket labels are about 20 px at 100 px type and stack on each other when two are long.
- `StudioDerivativeCheck`: the tick is drawn at x − 150, which is off-frame when the rows start at x = 96.

## Check at playback speed
- Scene 1: three shoots growing from "Three bean" to "slid up", with the riding points, parallel violet stubs and the board in step. The fade-out and regrow to t = 4 should read as a replay, not as shrinking.
- Scene 3: the C slider 0 to 3 with the curve sliding and the stubs keeping their angle; the stub flashes on "anywhere"; the down-and-up sweep with members appearing.
- Scene 4: the replay with the gap bar staying 30 cm and the board's gap row fixed at 30.0; the flat line drawing, then the sliding flat stub crossing on "never rises".
- Scene 5: the ×3 scale drop (x³ to x³/3) landing the lower point on the target, then the tangent sweep tracing x².
- Scene 6: the three stubs riding F, G and F + G with the readout adding.
- Scene 8: the slide from C = 0 to C = 4, reaching (1, 5) on "four"; the curve turning green.
- Scene 8a: the slider reaching 50 on "fifty"; the middle-shelf soil ring; the other shoots dimming.
- Scene 9: the right picture sliding onto (1, 4).
- Feedback 2: C 0 to 3 reaching (2, 9) on "three"; the red dashed C = 9 member.
- Scene 14: the recap slide, the swap from the large recap to the small one as the integral writes, then the recaps leaving on "shortcut".
- Scene 15: the silent fade back to the handoff frame.

## Honest grade
A on the checker. Root may call these frames B+:
- frame 15 (the handoff at "You could expand it first"): 52% sparse;
- frame 2 (scene 2): the right column is half empty below the box row at that moment;
- frame 12 (attempt 1 hold): the Given card is small beside an 800 px picture, so the lower left is empty.

The shoots are small in the first two weeks of every run (t² growth), as open decision 6 foresaw.
