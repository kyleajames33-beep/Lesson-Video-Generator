# Maths Advanced explainer kit

The calculus set from brief 129 extends the original square-graph pilot with
function graphs, explicit domains and asymptotes, secants with a local zoom,
a derivative tracer, sign charts and structured algebra.

Import components from `./kit`. The API, example sources, checks and review
limits are documented in
[the brief 129 hand-in](../../../docs/production/claude-pm/checks/codex-build-129.md).

Run `node scripts/render-maths-calculus-pilot.mjs` for the 72-second silent
kit demonstration, or add `--check-only` / `--stills-only` / `--video-only`.
The script takes the shared render lock, renders with one worker, and closes
its browser. Output: `out/explainer/maths-calculus-kit-pilot/`.

Run `node node_modules/typescript/bin/tsc --project src/explainer/math/tsconfig.calculus.json`
for the scoped strict typecheck of both pilot entries.

The general graph needs every discontinuity declared explicitly. Give the
sign chart every derivative zero and undefined point. Derivative callbacks
and comparison highlights remain the lesson author's responsibility.
Claude's playback review of the new pilot is still pending.

## Original tangent pilot (25 October 2026)


Small reusable explainer pieces: `CoordinateAxes`, `SquareGraph` (exact square
function, moving point and tangent), and `AlignedAlgebra` (stable equals column
with timed rows). This kit deliberately fixes the graph window to x = 0 to 4,
y = 0 to 10. It reuses the explainer paper, fonts, colours and scene shell.

Run `node scripts/render-maths-pilot.mjs` from the repository root. Add
`--stills-only` to skip the video. The separate Remotion entry is
`src/explainer/math/pilot-entry.tsx`, composition `MathsAdvanced-Tangent-Pilot`.

Outputs: `out/explainer/maths-tangent-pilot/` contains the 15-second silent MP4,
desktop stills (1920 x 1080), phone landscape stills (844 x 475), review HTML,
and the geometry check. Stills sample frames 80, 260 and 420.

## Mathematical check and text alternative

The curve is y = x squared. A point moves along it from (1, 1) to (2, 4), while
its tangent turns. The exact tangent at x = a is y = a squared + 2a(x minus a).
At (2, 4), its equation is y = 4x minus 4. A second point on this tangent is
(3, 8), so its rise is 4 for a run of 1. This second point is on the tangent,
not on the curve.

`SquareGraph` supports its fixed rise/run triangle only at `a = 2`. Requesting
`showRise` at another point throws a clear error instead of drawing incorrect
working. The existing pilot reveals the triangle after the point settles at 2.

The aligned working reveals one new row at a time:

1. f prime of x is the limit as h approaches zero of [(x + h) squared minus x squared] divided by h.
2. Expanding gives the limit of (2xh + h squared) divided by h.
3. Cancelling h, which is nonzero while taking the limit, gives the limit of 2x + h.
4. The limit is 2x.
5. At x = 2, f prime of 2 is 2 times 2, which is 4.

The parabola uses an exact quadratic Bezier rather than sampled line segments.
The render script checks the actual exported model and inverts the SVG axis
scales to verify that the displayed triangle has slope 4. It also checks
point contact and tangent slope at a = 1, 1.25, 1.5, 1.75 and 2. The axes have
different screen scales; the line's screen angle is not the mathematical slope.

## Accessibility and label size

At native desktop size, algebra is 44 px; essential graph labels are 32 to
37 px. At the supplied 844 px landscape phone width, these become about
19 px and 14 to 16 px. Small subject headings and limit subscripts are smaller.
Use full-screen landscape for phone playback. Portrait thumbnail viewing is
not a readable maths presentation.

Ink text and the dark amber and blue accents have at least 5.2:1 contrast on
the card background. Written labels and the dashed rise/run triangle carry
the meaning alongside colour. There are no flashes. The supplied stills allow
motion-free inspection, and the video controls allow pausing. The 15-second
timing demonstrates the kit for learners already familiar with limits and
algebra; it needs longer holds to introduce differentiation for the first time.

SVG has an accessible description in the source, but an MP4 does not preserve
it. The text alternative above supplies the visual and mathematical content.
There is no narration or audio description.

## Verification on 25 October 2026

- Focused strict TypeScript check passed for the entry and its dependencies.
- Geometry checks passed. Independent source review agreed with the maths.
- Desktop and phone still review passed with no clipped or wrapped working.
- Export decoded as 450 frames at 30 fps, 1920 x 1080, duration 15 seconds,
  with no audio stream.
- Played the exact MP4 in connected Chrome at normal speed, including a replay
  from the start. Observed the point/tangent movement, rise/run triangle,
  successive algebra reveals and final agreement. No material reveal-order or
  layout issue was observed. These were screenshot observations during
  continuous playback, not a dropped-frame or frame-by-frame smoothness test.
- Phone playback used an actual 844 x 475 CSS browser viewport and reached
  15 seconds at normal speed. Later phone screenshots timed out; detailed
  phone algebra evidence remains the independently reviewed rendered stills.
  This was viewport emulation, not a physical phone test. The exact scope is
  recorded in `out/explainer/maths-tangent-pilot/playback-review.json`.
- A repository-wide type check was stopped during memory pressure; this pilot
  claims the focused check only.
