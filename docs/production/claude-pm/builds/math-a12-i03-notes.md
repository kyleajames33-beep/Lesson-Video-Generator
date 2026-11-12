# math-a12-i03 build notes (Revision 3, measured narration)

Builder: Claude build agent, 11 November 2026. Not committed. Sheet: `work/quality-audit/fixed/math-a12-i03-sheet.jpg` (16 grade-checker frames, no stamps). Length as measured: 16,108 frames (537 s), with the notes scene at 1,350 frames.

## Files
- `src/explainer/lessons/math-a12-i03/`:
  - `common.ts`, `cuemap.ts`, `config.ts`, `assets.ts`, `scenes.tsx`;
  - `parts.tsx`: PhoneRig (the painted dock with a coded display in the measured screen [330, 330, 870, 1390]), ChargeGraph, ChargeBoard, CurvePic and the numeric self-checks; it re-exports i02's parts read-only;
  - `s1.tsx` (1 to 4a), `s2.tsx` (5 to 9), `s3.tsx` (10 to 16 and `I03FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry, next to i02.

## Joins
- Frame 0 to 11 is `I02FinalFrame`, imported from i02. It cross-fades to the phone on "A phone on".
- The final frame (`I03FinalFrame`) has everything i04's design names: ∫(1/x) dx, the crossed "= x⁰/0 + C" with "n = −1: can't divide by 0", the two-branch y = 1/x with x = 0 excluded, and the chips. Two differences from i04's wording: the 1/x graph is large (880 × 790), not "small", and the memory line sits at the top. i04 should import this component.

## Departures from the design
- **The phone stays at full size in scene 1.** It does not shrink to the 260 px thumbnail: an anchor under 380 px is a root fault. Two hand tags carry "x is in the exponent" and "3 times too big", and the crossed power-rule card is left out.
- **Scene 2**: a "so ∫eˣ dx = ?" card fills the column until "plus C". The family eˣ + C (C = −1, 1, 2) is faint dashed, and the slide to eˣ + 3 is shown with parallel violet stubs at x = 0. There is no amber C slider.
- **Scene 3** is two stages. First, the triangle on e^(3x) with the readout gradient ÷ height = 3. From "A third of", a FunctionSimulator on ⅓e^(3x) drops gradient dots onto the dashed e^(3x) target, which turns solid on "It lands".
- **Scene 4**: a plot of e⁻ˣ (violet) and −e⁻ˣ (ink, rising) supports the sign check. An "examples" card fills the column until "So two e".
- **Scene 4a**: the minus term −60e^(−0.5t) draws on its own plot, from "A minus sign" to "Yes". The battery graph is beside it, and the clock runs to 8 h after "rises". The "+ C" double arrow between the two plots is replaced by the hand tag "battery = that term + C: rising", because they are separate plots.
- **Scene 6**: 2ˣ rides with a readout of height, gradient, and gradient ÷ height fixed at 0.693 (ln 2). This makes the inner rate visible. The design had centred algebra only.
- **Scene 7**: the blue slider is the kit ParameterSlider. Its 0.5 to 2.5 ticks have no special excluded mark; the "a = 1: ln 1 = 0" card carries the exclusion.
- **Scene 8**: a plan card and a dA/dt plot fill the column until "Integrate by". The family is the kit's StudioPrimitiveFamily, with C eased from 0 to 1 between "Now use the condition" and "C is one". There is no slider widget.
- **Scene 8a**: the battery member slides from C = 0 to C = 100 onto the ringed (0, 40). The slip "C = 40" is crossed from "It heads for", while the clock runs. The ratio row glows with "half of what's left".
- **Scene 9**: the left graph is 880 × 820, not 600 × 420. A plan card fills the column until "Now each term".
- **Memory card (scene 10)**: two solid 470 px pictures, the triangle on e^(3x) and 2ˣ with its ln 2 × height gradient, fill the card from its first frame. The phone badge is a text chip.
- **Exponents in small type**: the memory line, key notes, question cards and givens strips use Unicode superscripts (eᵃˣ⁺ᵇ, e²ˣ⁻¹, e⁻²ˣ, eᶠ⁽ˣ⁾). Built-up superscripts there fell below 24 px once the cards shrank.
- **Attempt pictures** are 1060 × 460 (integrand only, nothing answer-bearing).

## Cue check
`cuecheck.cjs` (scratchpad build-i03) resolves every phrase, with 0 missing. "At t equals zero" and "plus C" occur twice in scene 8; the first occurrence is used. `cueFrame` throws at load on any missing phrase.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-i03`: **PASS WITH WARNINGS (0 failures, 7 warnings)**. The warnings:
- six sparse frames at 52 to 56% (frames 2, 7, 11, 13, 14 and 15);
- "few pictures": coded graphs are not counted.

Report copy: scratchpad `build-i03/Explainer-math-a12-i03-grade.md`. An earlier run failed on 19 to 23 px superscripts and on an empty scene 8 opening; both are fixed.

## Brief 238 findings
- The learning review and maths check have no findings for i03.
- Notes fit, per decision 58: five one-line bullets at 38 px in the left 1040 px, with the framed card on the right.
- Numbers are asserted at load in `parts.tsx`:
  - phone: rate 30, then 0.549 at 8 h; battery 40, then 98.901; rate ÷ left = 0.5;
  - drug: 2, then 1.0498 at 6 h;
  - the e^(3x) and 2ˣ derivatives;
  - A1, A2 and the algebra example.

## Kit issues
- `FunctionSimulator` readouts and `LiveReadoutBoard` labels are fixed at 30 px; the multi-row boards read small on the sheet.
- `PairedDerivativePanel` was not needed here.
- I edited no kit files.

## Check at playback speed
- Scene 1: the clock (0 to 8 h over about 3 s from "percent per hour") with the phone display counting.
- Scene 3: the triangle sliding on "Everywhere", then the ⅓e^(3x) trace landing on e^(3x).
- Scene 4a: the minus term rising, then the 2 s clock on "rises" (short: the scene ends at 702).
- Scene 7: the base slide from 2 to 1.1 (100 frames), and the flat line and y = x arriving.
- Scene 8a: the C slide, then the clock running under 100% to the scene end.
- Scene 16: the fade back to the 1/x frame.

## Root review round (11 Nov)
1. Scene 6: the "y = 2ˣ" label was returned by the FunctionSimulator overlay without an SVG layer, so it rendered as HTML at the top left of the frame. It is now wrapped in `FrameSvg`, so it sits on the curve inside the plot at (−1.9, 6.4). Every other overlay and plot label in i03 was checked: all are inside `FrameSvg` or a plot's own SVG.
2. Extra stills at the start and end of scenes 6 and 7 (frames 6160, 7300, 7312 and 8260) showed no escaped labels. Two small overlaps are fixed:
   - scene 6: "aˣ = e^(x ln a)" moved down clear of the readout board;
   - scene 7: the "straightens onto y = x" tag moved up clear of the slider badge.
3. Grade checker re-run: PASS WITH WARNINGS (0 failures, the same 7 warnings). Sheet re-made.

## Repair 12 Nov (Codex hold)
Hold moment: scene 3, about 1:21.5 (frame 2445).
- Hold: the answer box and the "everywhere: gradient = 3 × height" tag shared y = 640. Fix: the tag now leaves 10 frames before the answer box arrives ("divide by three"), so they never share the frame (s1.tsx:112).
- Sweep also found: scene 1 the "and 2ˣ?" chip covered the graph's y label (moved right, s1.tsx:37); scene 3 heading: the hand font has no superscript x, so "e³ˣ" drew the 3 and the x on top of each other; the heading is now "e to the 3x: the gradient is three times the height" (s1.tsx:93); scene 4 "−e⁻ˣ: rising, gradient e⁻ˣ" ran off the right edge (two lines below the curve, s1.tsx:142); scene 4a "battery = that term + C: rising" sat on the x ticks (moved inside the graph under the curve, s1.tsx:168).
- Sheet re-made: `docs/production/claude-pm/builds/math-a12-i03-sheet.jpg` (the grade checker's 16 sheet stills, no stamps). `npm run grade:explainer`: PASS WITH WARNINGS (0 failures, 7 warnings).
- Verification: a 1 frame per second sweep of the whole composition (every frame rendered with a text and card probe that flags text on text, cards over text, text within 30 px of the frame edge and text under 30 px; every flag inspected visually, plus overview sheets), fixes applied, then the affected lessons swept again until no real collision remained. Before and after full-resolution stills of the hold moment: `work/brief239/i03/repair-12nov/` (before = Codex evidence frame, after = rebuilt still). Scoped typecheck clean. Not re-voiced; narration, measured lesson.json and design files unchanged.
- Codex recheck: play the hold moment and the scenes named above at 1x. Not committed (root commits).
