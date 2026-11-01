# Brief 143 build and verification checkpoint

2 November 2026. The kit additions and the requested silent sample are present, but this is not a complete acceptance of every detailed asset contract. Do not treat the sample as motion approved: Claude must judge it at playback speed.

## APIs and examples

Exports from `src/explainer/math/kit.tsx` include `NormalLineLayer`, `QuarterTurnNormal`, `PrimitiveFamily`, `IntegralNotation`, `DerivativeCheck`, `OneSidedSecants`, `JoinZoom`, `ConcavityTint`, `StackedDerivativePanels`, `FencePen`, `BoxNetFold`, `DerivativeWheel`, and the associated numerical helpers. `FunctionGraph` supports `pairedCurve`; `DerivativeTracer` supports branch selection, `candidateScale`, `target`, and `overlay`; `DomainStrip` accepts a heading and exact marker labels. Sign charts accept concavity mode. Existing `ReadoutPanel.rows` and `GraphSpec.xTicks` supply custom readout and year labels.

Examples are in `src/explainer/math/brief143-pilot-entry.tsx` and `brief143-extra-entry.tsx`. They cover vertical shifts, a rotated normal, smooth and corner zooms, two and three derivative panels, paired curves, one-sided and vertical limiting slopes, concavity, fencing, box folding, notation, a passing and failing derivative check, candidate scaling, reflection and overlay. The tangent span is confined to its connected domain and a tracer sweep is restricted to a selected branch. Declare poles and holes explicitly in graph breaks or asymptotes; they cannot be inferred from an arbitrary callback. `requireEqualUnits` checks the drawable axis scales, not just the outer SVG dimensions. Numeric derivative checks require both callbacks, an appropriate finite domain and, for a failing state, a readout x.

## Evidence

- Scoped TypeScript check passed. Earlier strand suite passed 772 assertions and invalid-input regressions; calculus suite passed 12,745 numeric assertions, 2,774 plotted values and domain/regression checks.
- `work/brief143-check.mjs` verifies normal gradients and 101 rotation positions, branch tangent bounds, derivative agreement and two mismatch references, one-sided secants, box and fence dimensions, concavity signs, reflection and equal units. This is a targeted set, not a complete independent SymPy comparison of every asset brief example.
- Thirty-two serial desktop and phone-landscape stills plus eight additional edge-case stills were rendered. Phone views were inspected, including the labels and the volume readout; the extra stills exercise a rejected derivative, vertical slope, corner, reflection, vertical normal, two panels and overlay. Visual checks do not constitute playback approval.
- `out/explainer/maths-strand-kit-pilot/brief143-motion-sample.mp4` is 16 seconds, 480 frames, 30 fps, with one video stream and no audio. A complete FFmpeg decode passed. The sample covers the four required moving parts. Its source and artifact hashes are in `assets/brief143-manifest.json`.

## Remaining contract gaps

The detailed asset briefs contain requirements not fully implemented or verified. Concavity tint reveals by a count rather than the specified timed cue list, and stacked-panel tints do not distinguish gradient colours from concavity colours. One-sided merge requires the current secant slopes to agree within 1e-6, rather than merging on an explicitly declared common limiting slope. Integral constant highlighting recognises `+ C` in a string right-hand expression, not arbitrary nested React content. The requested per-design example pilots, full independent symbolic comparison and typography checks at both specified sizes are not complete. The motion sample has not been judged at playback speed. These gaps mean brief 143 must remain open until corrected and rechecked. No lesson designs, speech or commits were made in this pass.
