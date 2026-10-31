# Physics projectile visual kit

Bounded asset pilot, 25 October 2026. All work for this task lives in this directory. The kit is separate from the lesson registry.

[Silent preview](artifacts/projectile-kit-silent.mp4) | [Review page](review.html) | [Model checks](artifacts/model-check.json) | [Media metadata](artifacts/media-check.json)

The preview is 12 seconds, 1280 × 720, 30 fps, H.264, with no audio stream. Play at 1x. The physical flight takes 2.4 seconds and is deliberately shown over 8 seconds. There is a two-second launch hold and a two-second landing hold. The last hold freezes the instant of contact; it does not model a collision or bounce.

## Components

| Export | Purpose | Contract |
| --- | --- | --- |
| `VectorArrow` | Draw a directed SVG vector with an optional label | Screen coordinates; arrowhead shrinks for short vectors; label offsets are explicit |
| `VelocityDecomposition` | Show resultant velocity and its horizontal and vertical components | Upward-positive `vy` converts to negative SVG y; components form a head-to-tail triangle; vector scale is independent of position scale |
| `MovingProjectile` | Move a ball along a parabolic path and retain its travelled trail | Same physical time as graphs; equal x/y spatial scales of 20.5 px/m preserve direction; dashed path shows the remaining idealised flight |
| `VelocityTimeGraph` | Trace horizontal or vertical velocity against time | Both axes have units, fixed ranges and tick positions; current endpoint advances with the ball; `largeLabels` supports the stacked phone layout |
| `projectileState`, `flightTime` | Supply one shared physical model | Metres and seconds; positive finite `vx0`, `vy0`, `g`; launch and landing have the same height |

The configured example uses `vx0 = 16 m/s`, `vy0 = 12 m/s`, and `g = 10 m/s²`. The orange arrow is the resultant velocity. Blue identifies the horizontal component and rose identifies the vertical component in the arrows, readout and graphs. At the apex, the resultant and horizontal component coincide; the vertical component is explicitly labelled zero. Arrow tails sit at the ball's visible upper-right edge to keep them visible.

## Motion plan

| Preview time | Change and purpose | What stays visible |
| --- | --- | --- |
| 0 to 2 s | Hold the launch triangle so its horizontal and vertical directions can be inspected | Launch values, assumptions, graph axes and units |
| 2 to 10 s | One shared clock moves the ball and both graph endpoints. The horizontal arrow stays the same length. The vertical arrow shrinks, reaches zero at 6 s of playback, then grows downward | Fixed graph ranges, initial trace, reference ground and current numerical values |
| 10 to 12 s | Hold the arrival state for comparison with launch | Final velocity, completed traces and assumptions |

The existing explainer kit, Chemistry C2 graph source and an existing rendered explainer frame were inspected. This pilot reuses the light editorial stage, Inter Tight typography and the Physics colour tokens. It adds exact SVG geometry for the missing vector and linked-graph task. Existing subject artwork was not useful for this physical model. Design choices are recorded here to keep this task inside its requested directory.

## Stills and checks

| State | Physical time | Desktop, 1920 × 1080 | Phone, 390 × 780 |
| --- | --- | --- | --- |
| Launch | 0 s | [Desktop launch](artifacts/desktop-launch.png) | [Phone launch](artifacts/phone-launch.png) |
| Apex | 1.2 s | [Desktop apex](artifacts/desktop-apex.png) | [Phone apex](artifacts/phone-apex.png) |
| Descent | 2.1 s | [Desktop descent](artifacts/desktop-descent.png) | [Phone descent](artifacts/phone-descent.png) |

The phone version rearranges the same components into a portrait layout. It is not a crop of the landscape frame. Its graph labels are enlarged. The small arrow labels remain distinguishable, with the larger numerical readout carrying their values. Phone still inspection is not a test on a physical phone.

Author and independent Sol 6.1 source/still review passed the sampled directions, graph values, units, label clearance and visual consistency. Initial findings were repaired: unequal spatial scales, an overlapping time-axis label, oversized near-zero arrowheads and a crossing descent label. No remaining blocker was found for this bounded asset demonstration.

The scoped TypeScript check passed. Model checks passed at 239 interior times: position derivatives agree with velocity, heights are symmetric and unsupported inputs are rejected. The checked flight lasts 2.4 s, reaches 7.2 m at 1.2 s and lands 38.4 m from launch. The exported file has 360 video frames and a duration of exactly 12 s.

**Playback review remains pending.** No browser surface was available through Computer Use; opening both the in-app browser and Chrome returned unavailable. Source, media metadata and still review do not establish motion quality at playback speed. The review page provides the exported file with a 1x play button for that check. No listening or teaching approval is claimed.

## What this can support

- Show how constant horizontal velocity and changing vertical velocity describe one projectile.
- Show that the projectile still has horizontal velocity when its vertical velocity is zero.
- Link upward and downward component arrows to positive and negative graph values.
- Compare the launch, apex and descent in the same idealised model.

## What it cannot yet teach

- It does not derive the equations, resolve a launch angle with trigonometry, or teach graph slope and area.
- It has no position graph, acceleration arrows, drag, uneven landing height, collision model or worked calculation sequence.
- The drawing has fixed stage geometry and launch/landing label positions. Other valid inputs require viewport and label review; it does not automatically fit arbitrary projectile cases.
- The value of g is a convenient model value, not an assertion that gravitational acceleration is exactly 10 m/s² everywhere.
- The velocity arrows use 6.4 px per m/s. Their lengths cannot be compared directly with the spatial path lengths in metres.
- There is no narration, caption integration, student learning review of a full lesson or release approval.

## Reproduce

Run these from the repository root:

```powershell
node node_modules/typescript/bin/tsc --project src/explainer/physics/projectile/tsconfig.json
node src/explainer/physics/projectile/verify.mjs
node src/explainer/physics/projectile/render.mjs
python -m http.server 8782 --bind 127.0.0.1 --directory src/explainer/physics/projectile
```

Then open `http://127.0.0.1:8782/review.html`. The renderer copies only the required local font into its bounded generated public directory. It does not copy or restore lesson media. Generated bundle and font copies are ignored; the delivered MP4, PNGs and check records remain in `artifacts/`.
