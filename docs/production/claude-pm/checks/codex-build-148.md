# Brief 148: Year 11 Physics kit parts

Completed 2 November 2026. New 2025 parts are in `src/explainer/physics/y11-kit.tsx`; existing 2017 parts remain untouched. The pilot entry is `y11-kit-pilot-entry.tsx` and the serial renderer is `scripts/render-physics-y11-kit-pilot.mjs`.

## Parts and contracts

- `MotionTrack` accepts time-ordered legs or a position/velocity model, with a uniform scale, optional plate and mirroring. It draws a route and displacement and calculates time, position, distance, speed and velocity together. `circlePath` samples arcs; `functionMotionState` integrates speed by midpoint quadrature, so authors must select enough resolution and breakpoints for their model.
- `DialOverlay` locates a needle and two coded readouts in caller-provided coordinates. `ArrowSlideFlip` translates and rotates a vector about its midpoint. `VectorTriangle` scales all vectors uniformly, can flip the second vector and reports the angle from the first leg to the resultant. `TimeStepPath` constructs successive components from the same velocity inputs.
- `ProjectionShadows` computes parallel and perpendicular components in a rotating basis. `SignedNumberLine` and `AxisTally` use route-derived position, absolute distance and signed legs. `MotionGraphStack` accepts shared position, velocity and acceleration functions, a common cursor, phase bands, breaks and cue-driven moving points. `DataTable` supplies table rows.
- `SignedAreaFill` integrates piecewise-linear velocity exactly, splitting zero crossings, and provides positive, negative, net and absolute totals, optional strips and outline. It does not infer arbitrary continuous functions between points. `RepeatResults` marks observations, accepted value, range and mean. `FrameLock` subtracts the chosen position from its children. `FreeBodyDiagram` supports named forces, wrong arrows, components and a net vector.

## Verification

Scoped TypeScript passed. The serial runner passed 841 numerical assertions and invalid-input checks, including v01 to v12 examples: route and vector magnitudes, the 100 N resolution, 400 m distance, the 120/160 m trip, v07 position, v08 signed area, v09 75 m stop, v10 repeat means and ranges, v11 relative velocity and v12 force components. `out/explainer/physics-y11-kit-pilot/numeric-check.json` records the count.

Eight desktop and eight phone-landscape stills cover all parts; phone views are scaled 844 by 475 renders, not a physical-device test. After a first pass, the motion readouts and number-line placement were moved inside the frame and a force label and projection readout were separated. The 16-second silent sample `out/explainer/physics-y11-kit-pilot/brief148-motion-sample.mp4` shows MotionTrack, VectorTriangle, MotionGraphStack and FreeBodyDiagram moving. The full video decode passed, with 480 frames at 30 fps and no audio. `assets/brief148-manifest.json` records source and proof hashes.

Callers remain responsible for physically correct motion functions, data, force labels, axis limits, suitable quadrature resolution and scene-specific layout. The sample is for Claude to judge at playback speed; stills and a decode are not motion approval. No designs, speech or commits changed.
