# Brief 135: maths strand kit additions

Completed 1 November 2026, after briefs 133 and 134 were handed in. No sub-agents used. No lesson designs, speech or commits changed.

## Parts and APIs

All new parts are in `src/explainer/math/strand-parts.tsx`, exported through `kit.tsx`. Earlier graph, algebra, reflection and fold APIs remain usable.

| Part | API and contract | Pilot example |
|---|---|---|
| Unit-circle inset | `UnitCircleInset {angle}`; `unitCircleState(angle)`. Acute positive radians, radius one, equal x/y units. Arc equals angle; height is sin(angle). | d05 angle .3 to .1, heights .2955 to .0998. |
| Shared-shift paired tracer | `SharedShiftTracer {graph,derivative,shift,baseX,progress?,comparison?}`. One xShift carries function, exact tangent and lower derivative curve; lower dashed comparison remains in target coordinates. | d05 sin to cos, lower cos to -sin, shift -pi/2. |
| Axis tick swap | `stretchAxis(degrees)` returns xTicks/xLabel. Pass alongside FunctionGraph's xScale. Intermediate pilot frames are explicitly labelled as a stretch in progress. | d05 scale1 to180/pi and back; radians to numeric degree ticks and back. |
| Rate-chain strips | `RateChainStrips {x,step,reveal}` and checked pure `rateChainState`. Three strips have a common visual step-length scale; reveal one link at a time. Finite steps approximate tangent rates. | d06 x1 to1.01; u1 to1.0201; y .84147 to .85216. |
| Positive-input domain shading | `DomainShading {graph,zeros}` and `positiveBands`. Author provides every zero splitting the shown window; shaded intervals have positive midpoint input. No direction arrows. | d06 cos x>0 on the radian window; ln(cos x) domain. |
| Product rectangle | `ProductRectangle {u0,v0,u1,v1,scale?}` and `rectangleState`. Positive initial sides and nonnegative growth required; side, top and corner retain distinct colours. | d07 exp x and sin x at1, nudge .3 down to .02. |
| Movable domain strip | `DomainStrip {range,excluded,offsetY?,width?}`. Original excluded values remain open red markers while the whole strip translates. Place by offsetY under the answer layout. | d08 separate exp x/(x+2), excluded -2; movement shown below the table layout. |
| Progressive signs | `ProgressiveSignChart {graph,derivative,boundaries,tests,revealed}` and checked `revealedSigns`. Every interval begins as ?, reveals its sign/direction and test row together. One finite test strictly inside each connected interval required. | d08/d09 quotient split at excluded-1 and zero0; tests-2,-.5,1 give -,-,+. |
| Symbolic candidate table | `SymbolicCandidateTable {rows,domain}`. Rows carry id,x,kind,exact,optional decimal,rejected/reason/highlight. Types include flat,end,corner,nondifferentiable. Rejected rows are grey and struck; exact expressions are retained beside grey decimals. Earlier CandidateValueTable remains unchanged. | d10 polynomial rejected-2; exponential2-2ln2 and exp2-4; separate abs(x-3) corner table. |
| Coded motifs | `StrandMotifs` draws ten function graphs in a two-row grid. No lesson images or built-lesson dependency. | d01 exponential through d10 objective, with quotient gap. |

## Pilot and evidence

New focused pilot uses the existing `ExplainerVideo` engine, paper, fonts and scene shell: `src/explainer/math/strand-pilot.tsx` and `strand-pilot-entry.tsx`. Composition `Maths-Strand-Parts-Pilot`, 1080 frames at30fps (36-second source composition, nine scenes). All parts have a design-number example. Earlier calculus pilot and its media are preserved.

Run `node scripts/render-maths-strand-pilot.mjs`. `--check-only`, `--stills-only`, `--video-only` are available. Rendering takes `out/explainer/.stills-lock`, uses a slim public folder and concurrency1, and closes its browser/removes its own bundle and lock in finally.

Output directory: `out/explainer/maths-strand-kit-pilot/`. Forty stills: desktop1920x1080 and phone-landscape844x475 at frames25,95,135,170,215,265,335,365,405,455,505,575,615,695,745,815,865,935,985,1055. Inspected phone views covering every part and desktop rate/domain view. Shared panels, degree ticks, shrinking strips, hidden/revealed signs, circle arc/height, positive-input shading, exact/rejected tables, corner and all ten motifs fit. Reserved extra card space after the domain strip's translated endpoint initially extended below the card background; final stills verified. Phone views are scaled landscape renders, not a physical device test.

`brief135-motion-sample.mp4` is one silent16-second sample of parts2,3,6,8: four serial four-second chunks joined without audio. `media-check.json` confirms480 frames,1920x1080,16 seconds,no audio and full decode passed. The first verification command needed an explicit raw-video decoder output for this bundled FFmpeg; corrected and final decode passed. This was a checker-format issue, not a render error. `brief135-manifest.json` pins six current source files,40 stills and the clip with SHA256, and verifies source hashes stayed fixed during rendering.

## Mathematical checks

Scoped TypeScript passes with `tsconfig.calculus.json`, including the new entry. The new runner passes772 numerical assertions plus invalid-input regressions. Existing calculus runner `--check-only` still passes12,745 assertions and2,774 plotted values.

New checks cover101 circle angles,101 product-area partitions and shared shifts, independent central differences for shifted/degree-scaled curves and chain rates, positive-input band samples, interval-test rejection at an exclusion, candidate values and invalid sides/angles. Side+top+corner equals the total area change. At h=.3, strips .8002513933/.3318674189 and corner .1161067395; at h=.02, .0462076419/.0289144648 and .0005841109. The common-step rate strips use delta u=.0201 and delta y=.0106893695, not an exact finite-change equality to derivative products. Degree endpoint slope pi/180=.01745329252; shifted endpoint lower curve is -sin x. No module-load text measurement or U+2014 introduced.

## Remaining review

All ten requested parts built. General authors must provide correct derivatives, all domain/zero boundaries, finite values and exact-symbol/decimal pairs. Domain shading is not a root finder; sign sampling assumes no omitted zero or break inside a cell. ProductRectangle models positive growing sides; signed product contributions stay in readouts. Custom long text/many candidate rows still need layout review.

The silent sample is ready for Claude to judge continuous motion at playback speed. Still inspection and decoding are not motion approval. Exact voiced lesson review and human listening remain pending. No server or owned render process remains.
