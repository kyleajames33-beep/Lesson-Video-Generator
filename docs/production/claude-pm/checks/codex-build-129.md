# Brief 129: calculus maths kit

Built on 1 November 2026. This is a kit demonstration for Claude's review, not a lesson design or recording approval. The 2024 Advanced route and brief 128 pre-design packs supplied the examples. No lesson narration, speech, publication or commits.

## Files and existing behaviour

The public import remains `src/explainer/math/kit.tsx`. It reexports `graphs.tsx` and `algebra.tsx`. Existing `CoordinateAxes`, `SquareGraph`, `graphPoint`, square calculations and the original tangent pilot remain available. Existing string-based `AlignedAlgebra` steps still work.

The new demonstration uses `calculus-examples.ts`, `calculus-pilot.tsx` and `calculus-pilot-entry.tsx`. It uses `ExplainerVideo` for paper, fonts and scene transitions, the existing `QuestionCard`, and the existing `Countdown`. The shared question card and its colour map now accept `subject: 'Mathematics Advanced'`. Chemistry and Biology branches retain their previous output. Card text is measured during rendering, never at module load.

## Graph APIs

All ranges and slopes are mathematical values. `graphTransform(window)` is the only mathematical-to-SVG transform used by the new curves, tangent lines, points, markers and sign chart. It exposes `point`, `inverse`, `sx`, `sy` and the plot `box`. Scales need not be equal: the screen angle follows the calibrated axis scales, and the numerical gradient stays a rise divided by a run in mathematical units.

| Component | Props |
| --- | --- |
| `FunctionGraph` | `fn(x)`, `x: [min,max]`, `y: [min,max]`; optional `width`, `height`, `domain`, `breaks`, `markers`, `asymptotes`, `xTicks`, `yTicks`, `xLabel`, `yLabel`, accessible `label`, `color`, `draw` (0 to 1), `movingX`, `tangent`, SVG `children`. |
| `GraphLayer` | Same props; draws a group inside an existing SVG. `FunctionGraph` supplies the outer SVG. Each graph has unique clip IDs. |
| `SecantToTangent` | `graph: GraphSpec`, `derivative(x)`, `a`, `fromX`; optional `at`, `duration` (frames), `zoomRadius`. It animates from the second distinct point to the tangent and shows a labelled local inset. |
| `DerivativeTracer` | `graph`, `derivative(x)`, `derivativeY`; optional `derivativeTicks`, `derivativeLabel`, `derivativeDomain`, `derivativeBreaks`, `at`, `duration`. Upper and lower plots share x geometry but have independent labelled y scales. The moving tangent gradient supplies the lower point and traced curve. |
| `SignChart` | `graph`, `derivative(x)`, `boundaries: {x, kind, label?}[]`, optional `at`. Kinds are `zero`, `excluded`, `undefined`. Colours, signs and arrows distinguish increasing and decreasing intervals. The chart uses the graph's x transform. |

Supporting contracts:

- `domain` is a list of connected `{from,to,includeFrom?,includeTo?}` intervals. Infinite ends are allowed. Omitted inclusion flags mean open ends. With no domain, the visible x range is used. Finite endpoints get filled or open markers automatically when their function value is finite.
- `markers` are `{x,y,kind,label?}`, with `included`, `excluded`, `hole` and `corner`. A filled replacement point can coexist with a hole at the same x. The curve still splits at that hole.
- `asymptotes` are `{axis,value,label?}`. `axis: 'x'` means the vertical line x = value; `axis: 'y'` means the horizontal line y = value.
- `tangent` is `{x,slope,span?,showSlope?}`. Its rise/run geometry uses the same transform as the curve.
- Ticks are `{value,label}`. `radianTicks(from,to,denominator = 2)` generates exact pi labels.
- `sampleFunction`, `connectedDomains`, `inDomain`, `endpointMarkers`, `derivativeSpec`, `secantSlope`, `secantState` and `signIntervals` are exported for checks or reuse.
- Declare every discontinuity with domain intervals, a break, asymptote or hole. Supply every derivative zero and undefined point to the sign chart. It splits before sampling and never joins across those gaps. Sampling cannot discover every discontinuity of an arbitrary callback. `sampleFunction` takes an optional sample count for mathematical inspection; graph rendering uses 600 samples across its x window.
- A secant requires two points in the same connected interval. Near convergence it switches explicitly to the derivative before a forbidden division. The two-point readout uses significant digits, so it does not falsely show a zero separation.
- Derivative plots retain original hole and pole breaks and add corner/derivative breaks. Any custom derivative domain should be restricted to where the original function is differentiable.

## Algebra APIs

| Component | Props |
| --- | --- |
| `AlignedAlgebra` | `steps: {id,left,right,at,until?,relation?}[]`; optional `givens`, `domainExclusions`, `fontSize` (default 44), `style`. Left and right accept React nodes. Equals columns remain stable; future rows stay hidden. |
| `ExpressionSlot` | `children`, `role: 'inner' or 'outer'`; optional `label`, `active`. Slots nest recursively. |
| `DerivativeFactor` | `children`; optional `at`, `label`. Highlights the derivative multiplier at its cue. |
| `ProductContributions` | `first`, `second`; optional `firstLabel`, `secondLabel`, `firstAt`, `secondAt`. Each term retains the unchanged other factor. |
| `AlgebraFraction` | `numerator`, `denominator`; optional `bracketNumerator`, `bracketDenominator`. The bar groups the complete numerator and denominator. Children can contain nested fractions or expression slots. |
| `CancelledFactor` | `children`, optional `at`. Draws the cancellation slash on a specific common factor. |
| `Cancellation` | `children`, `result`, required nonempty `domainExclusions`; optional `at`, `markWhole`. Use `markWhole={false}` with `CancelledFactor` for common-factor cancellation. Original exclusions remain visible before and after the simplification. |
| `DomainExclusions` | `exclusions`. Renders the original domain restrictions. |
| `ExactFraction` | `value`: a finite number or `{numerator,denominator}` of safe integers. Fractions are reduced with a positive denominator. `exactValueNumber(value)` provides a checked numeric value. |
| `CandidateValueTable` | `rows`, `givens`, `domain`; optional `candidateHeading`, `valueHeading`, `fontSize`. Each row has `id`, `candidate`, exact `value`, `status: 'attained' or 'limit'`, optional `reason`, `at`, `highlight`. A limit is explicitly labelled as not attained. Highlight selection belongs to the author. |

## Pilot and stills

Run `node scripts/render-maths-calculus-pilot.mjs`. Flags: `--check-only`, `--stills-only`, `--video-only`. The script takes the shared directory lock `out/explainer/.stills-lock` for bundling and rendering, uses a slim public folder, renders serially with concurrency 1, closes its browser and removes its temporary bundle and lock. Video rendering uses ten serial six-second chunks with fresh browsers, then joins their H.264 streams. This avoids the shared font-loader timeout observed during the first long render. It refuses an occupied lock.

Composition: `MathsAdvanced-Calculus-Kit-Pilot`. Output directory: `out/explainer/maths-calculus-kit-pilot/`.

Silent video: `out/explainer/maths-calculus-kit-pilot/maths-calculus-kit-pilot.mp4`. `media-check.json` confirms 2,160 frames at 30 fps, 72 seconds, 1920 × 1080, no audio stream and a successful full decode. `input-manifest.json` pins the source, fonts, paper asset, MP4 and all 32 stills with SHA256 hashes. The first seven chunks were retained unchanged when the countdown entrance was corrected in the final scene.

| Time | Example and demonstrated components |
| --- | --- |
| 0 to 10 s | d01 practice 1: 4e^(2x−1), secant to tangent at x = 1/2, zoom, nested slots, inner derivative factor, height 4 and slope 8. |
| 10 to 17 s | d03: ln x: positive domain, x = 0 asymptote, moving point, tangent, retained domain and large fraction 1/x. |
| 17 to 27 s | d05: sin x to cos x, radian ticks, tangent gradient and vertically aligned derivative tracer with different y scales. |
| 27 to 37 s | d08 core quotient e^x/(x+1), x ≠ −1; sign chart split at −1 and zero at 0. The d08 sin x/x² example shows common-factor cancellation with x ≠ 0 retained. |
| 37 to 42 s | d07 source example x²e^x: two product contributions, then xe^x(x+2). |
| 42 to 60 s | d10 we-l20-3: x+4/x on [1/2,4]. Shared question card, full 10-second countdown, exact candidate table, short answer and one crossed-out mistake, followed by a key-notes hold. |

Stills: `desktop-f<frame>.png` at 1920 × 1080 and `phone-landscape-f<frame>.png` at 844 × 475, for frames 100, 260, 440, 600, 765, 900, 1075, 1210, 1285, 1400, 1660 1770, 1860, 1940, 2030 and 2130. The 32-image still set includes early/late secant states, tracing, cancellation, question/countdown and final comparison. Phone images are scaled landscape renders, not a physical phone test.

Reviewed the desktop exponential still and phone stills for every example, including the final table. No material clipping or overlapping working was found in these views. Small slot labels and secondary chart annotations are secondary reading at phone scale. This does not establish playback-speed motion approval.

## Maths and build checks

`node node_modules/typescript/bin/tsc --project src/explainer/math/tsconfig.calculus.json` checks both the original and new pilot entries with strict settings and their shared dependencies.

`math-check.json` records 2,774 sampled plotted values and 11,424 numerical assertions, plus domain and regression checks. Every sampled value is transformed to SVG and back. Central differences independently check each analytic derivative away from singularities. Tangent screen geometry is converted back to mathematical rise/run. Checks cover 300 secant states, near-zero separations, zero-division rejection, off-grid holes, derivative gaps and corners, radian slopes, exact endpoint comparisons and the old square model.

The quotient signs are negative on both sides of x = −1 until x = 0, then positive. Its chart keeps the excluded point even without a sign change. The optimisation values are exactly 17/2, 4 and 5, giving maximum 17/2 at 1/2 and minimum 4 at 2. Independent source review by the separate Sol 6.1 agent agreed with the derivatives and comparisons. Its graph findings were fixed before rendering: derivative exclusions, corner breaks, secant convergence, separation readout, inline SVG alignment and filled replacements at holes.

The shared countdown is mounted only from the exact start of its 300-frame hold, avoiding an 11-second label during the shared component's entrance. Frame 1285 confirms the initial 10; frame 1400 shows 6. Answers stay hidden until frame 1580 (local frame 320).

No U+2014 appears in new maths source or on-screen copy. There is no module-load text measurement in the new code.

## Handoff

Claude still needs to review the exact silent MP4 at playback speed. No lesson design, student-learning review, voice or public-release approval is claimed by this kit build. General graphs require declared discontinuities and correct author-provided derivatives and sign-chart boundaries. No requested component was intentionally omitted.

## D01 addendum, 1 November 2026

The first 60 seconds remain unchanged. A 12-second appendix demonstrates d01's squash, slide, vertical stretch and mirrored e^(-2x) with attached point, tangent and triangle, plus e^x gradient dots on the same axes. Total runtime is 72 seconds. The reflection is a separate endpoint, not an animation through the invalid horizontal scale zero.

- `FunctionGraph` and `GraphLayer` additionally accept `parameter`, `parameterFn(x, parameter)` and optional `ghostParameter`. Animate the numeric parameter at the caller's cue; the callback is sampled anew. The appendix morphs e^x into e^(2x), retaining a dashed e^x ghost.
- `transform: {xScale?, xShift?, yScale?}` maps base coordinates to `(xScale*x+xShift, yScale*y)`. The same mapping carries moving points, tangent positions and slopes; markers, domain endpoints, exclusions and asymptotes follow it. The window and its axes stay fixed. Negative `xScale` mirrors in the y-axis. Zero `xScale` is rejected. `carriedPoint`, `carriedSlope` and `transformedGraph` are exported model helpers.
- `DerivativeTracer` accepts `mode: 'paired' | 'overlay'` (default paired), with optional `dotXs`. Overlay mode plots `(x, f′(x))` as accumulated dots in the original graph's coordinate system and labels that shared scale. For e^x the dots coincide with the original curve.
- `TangentTriangle` accepts `graph`, base `x`, `slope`, `run`, optional `transform`, `runLabel`, `riseLabel`, `readouts`. Place it inside `FunctionGraph` and pass the same transform. Its mathematical run and rise, height and gradient readouts all follow that mapping. Text labels can change at caller cues. The squash demonstration changes run 1 to run ½ while keeping rise e.
- The existing Mathematics Advanced question badge uses the explainer's dark amber (#8a5a12). Existing Chemistry and Biology mappings are unchanged.

Additional model checks use central differences on carried exponential graphs for horizontal squash, slide, vertical stretch and mirror. They verify the plotted values and transformed tangent gradients, including slope -2 at x=0 for e^(-2x), and rejection of a zero horizontal scale. Scoped strict typechecking passed after these additions.

The pilot's source and output hashes are refreshed after rendering. Motion and teaching approval still belong to Claude's playback review.

Caller contract: when `parameterFn` changes the function, pass its matching derivative in `tangent.slope`; the kit does not symbolically differentiate callbacks. Custom `dotXs` should stay in the graph x window. Arbitrary SVG children are already in screen coordinates: use `TangentTriangle` with the same transform, or the exported carried helpers, to attach them. Root independently inspected the addendum source and found no blocker for the intended d01 cases.

Appendix render completed: media-check.json confirms 2,160 frames, 72 seconds, 1920 × 1080, one video stream, no audio and a clean full decode. All 32 desktop/phone stills were refreshed. Inspected the desktop squash still and phone slide, stretch and mirror stills: no clipping of the triangle, its labels or readouts. The existing first ten six-second chunks were reused unchanged; only the final two chunks were rendered. The render process closed its browser and removed its temporary bundle and shared lock.
