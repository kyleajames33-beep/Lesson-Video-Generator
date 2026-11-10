# math-a12-i02 build notes (Revision 3, measured narration)

Builder: Claude build agent, 11 November 2026. Not committed. Sheet: `work/quality-audit/fixed/math-a12-i02-sheet.jpg` (16 grade-checker frames, no stamps).

## Files
- `src/explainer/lessons/math-a12-i02/`: `common.ts`, `cuemap.ts` (every cue resolved at load), `config.ts`, `assets.ts`, `scenes.tsx`, `parts.tsx` (StarterRise, StarterGraph, StarterBoard, MiniPlot, numeric self-checks), `s1.tsx` (scenes 1 to 4 and `I01FinalFrameStandIn`), `s2.tsx` (5, 5a, 6, 7, 8), `s3.tsx` (9 to 15 and `I02FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry.

## Departures from the design
- **Scene 5a has a 4 s silent tail** (config adds 120 frames). The speech ends on "centimetres", so the design's silent forgot-÷4 slip and ghost level had no time. The answer frame arrives on "six centimetres". The d/dx check follows at +14 frames, then the slip card and the red ghost level (24 cm, over the rim, clamped near the top of the frame with an up arrow) run in the tail.
- **Scene 1**: before "jar", expanding (2x + 1)² is shown on an area model (a square of side 2x + 1 split into 4x², 2x, 2x and 1) beside the expansion and term-by-term rows. This replaces a near-empty i01 text frame. i01's board fades on "Expanding works".
- **Scene 2**: the 240 px jar thumbnail is left out, because anchors under about 380 px are a root fault. Instead each case is graphed on the left with its domain: y = 1/x³ as two pieces, x^(3/2) with x < 0 shaded "not defined", and (x³ + 2x)/x with its hole at x = 0. A three-step plan card fills the column until the first row.
- **Scenes 5a and 8**: a "the plan" card fills the working column until the first row arrives.
- **Scene 4**: a gap table (x = −1, 0, ½; expanded, bracket, gap 1/6) arrives on "On the graph". The i01 recall is a hand tag on the graph.
- **Scene 6**: the matched pattern has a FunctionSimulator on the left. Its gradient dots land on the dashed integrand target, which turns solid on "integrand". The design had centred algebra only.
- **Scene 7**: there are two stages. The missing-number case fills the column first. On "But with no x" it compresses to one line, and the missing-x case takes the column. The left graph changes from "the guess's gradient lands on x(x² + 1)³" to the failed guess's gradient (dashed red) peeling away from (x² + 1)³, with 8 and 6 marked at x = 1.
- **Scene 9 (memory card)**: two solid 420 px gradient pictures, the fixed number and the missing x, fill the card from its first frame. The starter badge is a text chip. The jar is not drawn on the card.
- **Attempt 1 picture**: the integrand y = 6/(2x + 1)⁴ is drawn above the number line, with x = −½ ringed and a dashed asymptote. It carries nothing answer-bearing, and it fills a frame that was otherwise near-empty.
- **Scene 14 / final frame**: besides the design's ∫e^(3x) dx, chips and memory line, there are:
  - a recap card ("(2x + 1)²: ÷ 3 and ÷ 2; the starter: ÷ ½ and ÷ 4");
  - the jar at 6 h (about 400 px tall);
  - a comparison card ("power: inside 2x + 1, ÷ 2 / exponential: inside 3x, ÷ 3 too?").

  i03 imports this frame (`I02FinalFrame`).
- **`I01FinalFrameStandIn`** follows i01's design scene 14. The heading is "Next: brackets and the reverse chain rule", the chip text from the design, so there is no separate chip. The memory line sits under it at 36 px. When i01 is built, i01 should import this component, or i02's scene 1 should import i01's own frame.

## Cue check
`cuecheck.cjs` (scratchpad build-i02) resolves every phrase in `cuemap.ts`, with 0 missing. Repeated words carry an explicit occurrence: "plus one" #2 at 267 (the expansion, not the opening bracket), "side of zero" #1 and #2, "one sixth" #1 and #2, and the first "a half" in 5a and 8. `cueFrame` throws at load on any missing phrase.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i02`: **PASS WITH WARNINGS (0 failures, 6 warnings)**. The warnings:
- sparse frames 2, 8 and 10 (52 to 54%);
- attempt 1 at 67% (question scene);
- 24 px glyphs in the shrunk question strip of feedback 1;
- "few pictures": the checker does not count coded graphs as drawn diagrams.

Report copy: scratchpad `build-i02/Explainer-math-a12-i02-grade.md`.

## Brief 238 findings
- **238-I02-NOTES-FIT:** handled per decision 58. Five one-line bullets sit at 38 px in the left 1040 px, and the framed card (680 px) is on the right. No bullet passes the card.
- Maths check: no findings. All numbers are asserted at load in `parts.tsx`:
  - the starter's rate and rise: 3, 1, 0.6; 0, 6; the slip gives 24;
  - the gap of 1/6;
  - W′(1) = 6 and V′(1) = 22.4;
  - the A1 and A2 derivatives.

  The kit derivative checks also run on the scene 4 family.

## Kit issues
- `PairedDerivativePanel`: the `target` curve has no `solidAt`, so the target stays dashed after the halving (the trace lands on it in violet). Its readout prop cannot take `inline`.
- `ContainerFill` reveal works as specified. The rule and the level marker are lesson-local.
- I edited no kit files.

## Check at playback speed
- Scene 1: the clock (0 to 6 h over about 3 s from "hour"); the starter rising against the rule and both graphs.
- Scene 3: the tangent sweep from "Watch its gradient" to "want", then the ½ vertical scale (45 frames) landing the trace on the dashed target.
- Scene 5a: the clock from "After six hours" reaching 6 h near "centimetres", then the silent tail (check, slip, ghost level). Is 4 s enough?
- Scene 6: gradient dots landing on the target. Scene 7: the stage swap on "But with no x".
- Scene 15: the silent fade back to the handoff frame.
