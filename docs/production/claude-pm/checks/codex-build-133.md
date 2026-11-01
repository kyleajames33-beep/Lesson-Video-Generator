# Brief 133: excluded dial value and fold annotations

Completed 1 November 2026. No lesson designs, speech or commits changed.

## API

`NumericDial.excluded` accepts `{value, label?}`. A red crossed tick marks that value on the dial arc, with the label above it. Passing the excluded value as the current value throws before it can display a false reading.

`limitedParameter(value, min, max, excludedValues)` clamps the animated input to its allowed limits before an author evaluates a function. Finite inputs and limits are required. The allowed interval must not contain any exclusion, so it cannot silently sweep through a singularity. The d04 pilot clamps the base to [1.1, 10] with 1 excluded, then evaluates ln(x)/ln(a). The dial scale itself extends to 0.5 so the excluded tick at 1 is visible. Callers must use the helper before all function evaluations, including any ghost-parameter callback; a dial cannot guard an unrelated callback.

`FunctionGraph.labelsVisible` defaults to true. `foldThreshold` defaults to 0.08. The automatic annotation gate hides the moving point, endpoint/feature markers and their labels, tangent, slope readout, and custom children when |transform.yScale| is at most the threshold. Setting labelsVisible false hides them over a wider chosen part of a fold. The curve and axes remain. `foldAnnotationsVisible` exposes the same finite-scale check for external lesson labels. Authors must apply it or the explicit visibility choice to labels placed outside FunctionGraph.

## d04 pilot

The new `dialfold` scene follows frame 2430 and runs for 330 frames (11 seconds). The full source composition is now 2760 frames (92 seconds), but earlier pilot MP4s are preserved.

First the base moves from 10 to 1.1, never reaching 1. The graph is ln(x)/ln(a) on x > 0, with a tangent at x = 1. At the limit its gradient is 1/ln(1.1) = 10.492058687257. Then the vertical factor runs from 1/ln(2) to -1/ln(2). The same plotted curve passes through its flat state, becoming log base one-half. Point, tangent and readout are hidden throughout the moving fold, then restored at the endpoint. The automatic near-zero gate also protects the flat state independently.

Run `node scripts/render-maths-calculus-pilot.mjs --dial-fold-only --stills-only`. It takes the shared stills lock and renders serially. Twelve stills are desktop and phone-landscape views at frames 2460, 2555, 2605, 2650, 2695 and 2735, covering the dial movement/limit, pre-fold, exact flat midpoint, and negative endpoint. The separate silent sample is `out/explainer/maths-calculus-kit-pilot/brief133-dial-fold-pilot.mp4`.

Inspected the phone dial limit, exact flat midpoint and negative endpoint. The exclusion mark and finite 10.492 readout fit; the flat state has no point marker, tangent or readout; the final negative tangent and -1.443 readout return. No logarithm sample is placed at x <= 0. Stills do not approve continuous motion; Claude must review the exact silent sample at playback speed.

## Checks

Scoped TypeScript passes with `src/explainer/math/tsconfig.calculus.json`. Model checks pass 12,745 numerical assertions plus domain regressions across 2,774 existing plotted values. Added checks sweep 331 parameter states, confirm the base stays in [1.1, 10], reject excluded intervals and nonfinite input, check the 1.1 endpoint, and verify fold visibility and transformed finite slopes through positive, zero and negative factors. Existing calculus and reflection checks remain.

`brief133-media-check.json` records the clip probe and full decode. `brief133-manifest.json` pins current source, stills and sample hashes separately from earlier evidence. Owned browser, temporary bundle and render lock are cleaned up after completion. No full catalogue render or server was started.
