# Brief 143: maths kit additions

Completed 2 November 2026. No lesson designs, speech or commits changed. The silent sample is ready for Claude to judge at playback speed; no motion approval is claimed.

## APIs and examples

Parts live in `src/explainer/math/brief143-parts.tsx`, with existing graph and strand extensions in `graphs.tsx` and `strand-parts.tsx`. They are exported through `kit.tsx`.

| Part | API and limits | Example |
|---|---|---|
| Branch guard | `branchTangentSpan`, `DerivativeTracer.sweepBranch`; declare every pole and hole in graph metadata. Each sweep stays on one connected piece. | tan and sec exclusions; x = 0 |
| Exact domain labels | `DomainStrip.heading`, `markerLabels: {value,label}[]`; existing `GraphSpec.xTicks` accepts exact labels and years. | periodic exclusions and radian ticks |
| Shared second point | `FunctionGraph.pairedCurve: {fn, derivative?, color?}` uses the same moving x. | sec x and cos x |
| Normals | `normalLine`, `NormalLineLayer`, `QuarterTurnNormal`; zero tangent slope gives a vertical normal; rotation requires equal drawable axis scales within 0.5%. | cos 2x at pi/6; xe^(-x) at 1 |
| One-sided slopes | `OneSidedSecants` has separate functions and ordered nonzero h cues, actual quotient readouts, coloured legs, `limitLine`, `merge` and `commonLimit`. Declared common limits are author responsibilities. | jump quotients 4, 12, 102; cube-root limits; settled tangent |
| Join inset | `JoinZoom` resamples about the centre at the requested magnification. | smooth join straightens; corner persists |
| Concavity | `ConcavityTint` has interval tests, `reveal: {interval,at}[]`, `frame`, legacy `revealed`, and optional gradient mode. Charts accept `mode: 'concavity'`. | cubic, x^4 and repeated-root sign patterns |
| Linked panels | `StackedDerivativePanels` shares x transforms, independent y scales, 2/3 panels, progressive traces, riders, timed columns and rings. Per-panel tints use gradient or concavity colours. | x^3 - 3x and x^4 - 4x^3 |
| Optimisation | `FencePen` supports fixed fence or fixed area, labels and pulse; `BoxNetFold` validates the cut and uses a fixed oblique projection. | 40 m fence; 24 cm card; 16 by 10 card |
| Readouts | Existing `ReadoutPanel.rows` and labelled x ticks carry custom units and year labels. | growth-rate ratios and calendar years |
| Primitive family | `PrimitiveFamily` draws vertical shifts, C dial, stubs, point, gap bars, ghost and slide marker; `constantThrough` returns the required C. All plotted family marks are clipped. | x² + C through (1,4); cubic family through (1,5) |
| Notation | `IntegralNotation` accepts React content, timed labels and a nested `+ C` highlight. Labels were checked at font sizes 44 and 64. | polynomial integral with labels |
| Verification | `DerivativeCheck` checks optional paired numeric callbacks before a tick. `expectFail` requires a numeric mismatch at `readoutX`. | correct cubic; incorrect candidates give 6 versus 8 and 22.4 versus 16 |
| Target trace | `DerivativeTracer.target`, `candidateScale`, paired/overlay modes; supplied derivative must match the scaled upper curve. | half-scale cubic; one-third exponential |
| Reflection and wheel | `mirrorPoint` reverses x and slope. `DerivativeWheel` runs forward or backward. | ln x reflection; sin, cos, -sin, -cos cycle |

## Verification

Scoped TypeScript passes. Earlier calculus checks pass 12,745 numeric assertions and 2,774 plotted values; strand checks pass 772 assertions plus invalid-input regressions.

`work/brief143-check.mjs`, `brief143-regressions.mjs`, `brief143-geometry.mjs`, `brief143-sympy.py` and `brief143-crosscheck.mjs` cover the new helpers, domain errors, 101 rotation states for each test slope, both cube-root sides, independent symbolic derivatives, 67 cross-language SymPy reference values, two wrong candidates, forward/reverse trig cycle, matching plot columns, primitive constants and gap lengths, timed visibility, distinct palettes, nested highlighting and declared limiting tangents. The smooth-join geometry test measures perpendicular distance to the tangent, below one pixel at 40x with radius 100. A larger inset requires its own check.

The main pilot has 32 desktop/phone stills; the extra pilot has 36. Additional examples cover the cubic primitive, flat tangent, quartic stack with a touching derivative zero, scaled exponential, divergent jump slope, 44/64-pixel notation and timed reveals. Inspected final desktop and phone views for fit. Phone-landscape images are scaled 844 by 475 renders, not a physical-device test.

`out/explainer/maths-strand-kit-pilot/brief143-motion-sample.mp4` is a silent 16-second sample, 480 frames at 30 fps, showing PrimitiveFamily, QuarterTurnNormal, JoinZoom and StackedDerivativePanels moving. Full decode passed. Renderers use the shared lock and one heavy process at a time. Main render checks that source hashes remain unchanged. `assets/brief143-manifest.json` records final source and artifact hashes.

## Caller responsibilities and review

Callbacks, domain splits, exact strings and interval tests are author inputs. These components do not find every root or prove arbitrary callback identities. Numerical derivative checks sample a finite window. Long custom expressions, new windows and dense marker lists need their own fit checks. A plot's equal outer dimensions do not establish equal axis units. Runtime colour and geometry checks do not approve teaching or motion. Claude playback judgment remains pending, as required by brief 143.
