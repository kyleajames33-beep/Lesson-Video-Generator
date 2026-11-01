# Brief 131 maths kit additions

Completed 1 November 2026. No design, speech or commit changes.

## APIs

- `SecantToTangent.stops`: ordered `{frame, x, holdUntil?}` cues in the component's local composition frames. The point holds exactly through holdUntil and interpolates linearly to the next cue. A final cue with x equal to the anchor a switches safely to the analytic tangent. No zero denominator is evaluated. Omit stops to retain the original at/duration animation. The last cue persists. Cue x values must remain in the anchor's connected domain; the existing secant domain guard rejects a gap.
- `secantCueX` and `secantCueState`: pure cue interpolation and validated secant/tangent state. Finite frame/x/hold values and ordered, nonoverlapping holds are required.
- `ReadoutPanel`: SVG part with graph window, x/y point, gradient, optional ratio, panelX/panelY. Automatic placement stays inside the graph SVG and joins the panel to its exact point with a leader. Explicit panel coordinates allow fixed placement while retaining the leader. Ratio is undefined when height is zero. Ratio panels are 300 pixels wide; ordinary panels are 248.
- `TangentTriangle`: now uses ReadoutPanel rather than fixed top-left readouts. Added ratio, panelX and panelY props. Transformed coordinates and gradients feed the same panel.
- `NumericDial`: controlled value, min, max, label, optional digits and width. Animate value from the lesson frame. Values outside the scale clamp the pointer, while the number remains the actual value. Finite increasing bounds are required. Pilot demonstrates a from 2 to 3.

## Root review 129 fixes

1. Tangent showSlope readouts now use a point-linked panel. Frame440 shows the ln x point at x4 joined to height1.386 and gradient0.25, instead of a lower-left readout.
2. Small gradient panel uses only -1,0,1 x ticks and 0,2,4 y ticks. Caption is below the axes, clear of the x tick and axis labels. Frames1940 and2130 confirm this on phone landscape.
3. Frame900 was the start frame of the second algebra row: right side had zero entrance opacity while its equals sign appeared immediately. The relation now fades with the right side. At that exact frame both are hidden; later frames display the complete line. This also prevents the same artifact in other AlignedAlgebra uses.

## Verification and stills

Scoped TypeScript: `node node_modules/typescript/bin/tsc --project src/explainer/math/tsconfig.calculus.json` passes.

`node scripts/render-maths-calculus-pilot.mjs --stills-only` passes 11,447 numeric assertions across 2,774 plotted values, plus domain and regression checks. New tests cover exact cue holds at x0.5,0.1,0.01, interpolation, final tangent at x0, persistence, NaN/Infinity holds, overlapping cues, dial endpoints/midpoint, invalid bounds and panel placement. Prior derivative/transform checks remain.

All32 stills refreshed serially under `out/explainer/.stills-lock`, in `out/explainer/maths-calculus-kit-pilot/`: desktop and phone-landscape at frames100,260,440,600,765,900,1075,1210,1285,1400,1660,1770,1860,1940,2030,2130. Inspected phone440,1940,2130 and desktop900. Point leaders, the negative mirror ratio, dial, ticks and caption are visible without panel overflow. The ratio panel was widened from248 to300 after independent review to allow longer signed decimal ratios. Author-defined placement may still need adjustment where a panel covers important lesson geometry.

`brief131-stills-manifest.json` pins current source and all32 still hashes. The existing `input-manifest.json`, MP4 and media-check.json are earlier brief129 video evidence, not evidence of this new source. No MP4 refresh was requested or performed. These stills do not establish playback-speed approval. The render browser, temporary bundle and shared lock were cleaned up; no server left running.
