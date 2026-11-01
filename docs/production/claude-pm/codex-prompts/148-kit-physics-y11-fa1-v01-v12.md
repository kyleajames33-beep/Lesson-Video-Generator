# Brief 148: Year 11 Physics kit parts for phys-y11-fa1-v01 to v12

Read `00-standing-rules.md`, `checks/codex-build-135.md` and `checks/codex-build-143.md` (once 143 is complete) first. Run this after briefs 143 and 145, and apply any part change the 145 reviews request. Build in `src/explainer/physics/` (new 2025 course parts; the 2017 parts there stay untouched and may be reused) and reuse `src/explainer/math/` parts wherever they already fit. Do not spawn sub-agents. No lesson designs, speech or commits. One heavy process at a time (8 GB machine).

Root decisions: `checks/root-decisions-phys-y11-fa1-v01-v12.md` (decision 2 colours, 3 units, 4 plate names, 5 the part list). Each design's "Codex asset brief" section specifies its parts; build from those specifications.

| Part | Used by |
|---|---|
| `MotionTrack`: plan-view and side-view road with a moving plate, odometer, displacement arrow, speed and velocity readouts | v01, v04, v05, v06, v09 |
| Dial overlay (dashboard dials, no pointer direction) | v01 |
| Arrow slide-and-flip and `VectorTriangle` (tip-to-tail, uniform scale tween, reversed-arrow flip) | v02, v06, v11, v12 |
| One-second step drawing (velocity steps building a path) | v02 |
| Projection shadows with a live angle (components as shadows on axes; angle sweep; rotating reference axis) | v03, v12 |
| Signed number line with odometer, and axis tally board | v04 |
| `MotionGraphStack`: linked s-t, v-t and a-t panels, one shared time cursor, table points flying onto graphs | v07, v08 |
| `SignedAreaFill`: strips filling under a v-t line, above and below the axis, with a running signed total | v08, v09 |
| Repeat-results number line (means, ranges, accepted value, outliers) | v10 |
| Frame-lock camera (the scene re-expressed in another object's frame) | v11 |
| Free-body diagram part (object shrinks to a dot, labelled force arrows by source, crossed wrong arrows, component readout panel) | v12 onwards |

Verify numerically (assertions against each design's Numbers used) and visually (desktop and phone-landscape stills). Render one silent motion sample of at most 20 s showing at least `MotionTrack`, `VectorTriangle`, `MotionGraphStack` and the free-body part moving, to `out/explainer/physics-y11-kit-pilot/brief148-motion-sample.mp4`, with a full-decode check. Write `checks/codex-build-148.md` and `assets/brief148-manifest.json`. Claude judges the sample at playback speed; claim no motion approval. Hand in to `status.md`.
