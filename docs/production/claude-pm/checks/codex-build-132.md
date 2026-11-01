# Brief 132: reflection layer and custom readout rows

Completed 1 November 2026. No designs, speech or commits changed.

## API

`ReflectionLayer` in `src/explainer/math/reflection.tsx` takes `fn`, `derivative`, the source parameter `domain`, anchor `point`, `run` (default 1), `progress` in [0,1], optional square plot `size` and outer `width`, and a shared x/y `range`. `sourceLabel`, `reflectedLabel` and `finalRows(point,slope)` let the author name the curves and add mathematically appropriate final readouts. The generic layer does not assume every reflected curve is a logarithm or has gradient times x equal to one. The current implementation requires a positive finite tangent slope. Author callbacks must return finite values over the declared domain.

The pure helpers `reflectPoint` and `reflectDirection` implement author note d exactly: ((1-s)x+sy,(1-s)y+sx). Curve samples, point, tangent endpoints and both triangle legs share this map. The graph box is size by size with identical x/y limits, so its actual units are equal. At s=1/2 the curve and legs fold flat onto y=x deliberately. The direction is ((1-s)+sm,(1-s)m+s); both coordinates are positive for m>0, so its numerical slope is well-defined even at the midpoint. There is no cross-fade.

Leg colours persist: the amber across leg becomes the vertical rise, and the teal up leg becomes the horizontal run. Labels switch only at s=1. The same run/rise segment endpoints carry through the entire animation. Source and reflected label defaults are generic. The exponential pilot supplies its own log label and final product identity.

`ReadoutPanel.rows` accepts additional string rows below its existing height/gradient rows and optional gradient/height ratio chip. Each extra row adds 30 SVG pixels to the panel height; its top position adjusts to retain the bottom margin. The author computes the value from the same geometry. The d03 example supplies `gradient × x = 1.00`. Long prose and arbitrarily many rows still require author layout judgement.

## Pilot

The calculus pilot source appends a nine-second `reflection` scene after frame2160. First it folds e^x at (ln2,2), with tangent slope2 and triangle run1/rise2, onto ln x at (2,ln2), slope0.5 and rise1/run2. The second panel shows ln(kx), k sweeping1 to3, at x2: the curve and tangent slide upward while gradient0.5 and gradient times x1 remain unchanged. Its domain is x>0.

Run `node scripts/render-maths-calculus-pilot.mjs --reflection-only --stills-only`. This takes the shared stills lock, bundles once, renders desktop and phone-landscape frames2195,2220,2245,2270,2295,2385 serially, then a separate silent nine-second clip `out/explainer/maths-calculus-kit-pilot/brief132-reflection-pilot.mp4`. The original brief129 MP4 is preserved. The entire source composition now has2430 frames (81 seconds), but its old72-second MP4 has not been replaced. The targeted clip is the current new-scene evidence.

Desktop and phone images at the six frames show start, quarter fold, exact midpoint, three-quarter fold, final swapped legs, and the ln(3x) endpoint. Inspected phone midpoint and final reflection and the final dial example. The diagonal fold, attached tangent/point, coloured turning legs, final labels, leader panel and custom row are visible. No log curve or log point appears at x<=0 in the final state or second panel. Interim folding geometry is not labelled as ln x and may occupy negative x legitimately.

## Checks and limits

Scoped TypeScript passes: `node node_modules/typescript/bin/tsc --project src/explainer/math/tsconfig.calculus.json`.

The model checker passes12081 numerical assertions and2774 existing sampled plotted values. New checks sample101 progress states for each of heights0.5,2,4, verify the linear map and midpoint diagonal, nonzero tangent directions and final reciprocal slopes2,0.5,0.25. Triangle endpoint checks verify run/rise swaps. Actual plot scales are equal. Independent central differences confirm d/dx ln(kx)=1/x for positive x and k1,2,3. Prior kit regressions remain.

Still inspection is not playback approval. The short silent clip is ready for Claude to judge continuous motion at playback speed. Exact voiced lesson review and human listening remain pending. `brief132-manifest.json` pins current source,12 stills and the clip separately from previous pilot evidence. Render resources and the shared lock are cleaned up after completion.

`brief132-media-check.json` confirms the new clip has270 frames at30fps,9 seconds,1920x1080,no audio and a successful full decode. The final phone ln(3x) still was also inspected: its point remains x2, gradient0.5, product1, while its height rises to ln6.
