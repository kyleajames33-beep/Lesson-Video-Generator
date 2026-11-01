# Brief 135: maths kit additions for d05 to d10

Read `00-standing-rules.md` and briefs 129, 131, 132 and 133 (section 3) first, and use the same rules and evidence format. Run this after brief 133, because both edit `src/explainer/math/kit.tsx` and the pilot. Renders and stills go one at a time under the shared lock (8 GB machine). Do not spawn sub-agents.

Each design names its kit needs under "Assets"; read those paragraphs for the exact specification. Plain SVG is fine where a design says so. Build each part, add an example to the pilot with the design's numbers, and check the maths.

| # | Part | Used in |
|---|---|---|
| 1 | **Unit-circle inset:** an arc of length x on a unit circle beside the graph, with the radian angle and the arc length shown equal | d05 |
| 2 | **Paired tracer with a shared shift:** one horizontal shift (for example π/2) applied to both the curve panel and its gradient panel together, with a dashed comparison layer | d05 |
| 3 | **Axis tick swap during a horizontal stretch:** radian ticks change to degree ticks (and back) as the x-axis stretches by 180/π | d05 |
| 4 | **Rate-chain number strips:** three linked number lines (x, then u, then y) whose marked steps multiply visibly | d06 |
| 5 | **Domain shading without a sign chart:** shade where an inner function is positive (for example cos x > 0), with no increasing/decreasing arrows | d06 |
| 6 | **Product rectangle:** sides f and g grow; the side strip, top strip and vanishing corner are drawn separately | d07 |
| 7 | **Domain strip:** a number line with excluded values that can move to sit under the final answer | d08 |
| 8 | **Sign chart with hidden signs and a progressive reveal:** intervals show "?" and reveal one at a time, with a test-value row (x value and the sign of f′ there) | d08, d09 |
| 9 | **Candidate table:** rows of candidate x (flats, ends, corners) with f(x) as exact values (for example e² − 4, 2 − 2 ln 2) plus grey decimals, and a rejected-candidate style (for example x = −2 outside the interval) | d10 |
| 10 | **Strand-close motifs:** one small coded graph motif per lesson d01 to d10 (drawn by the kit, not stills of built lessons) for d10's closing scene | d10 |

Record everything in `checks/codex-build-135.md` with stills (desktop and phone landscape), and make one short silent MP4 sample of parts 2, 3, 6 and 8 in motion, for root to judge at playback speed.

Hand in to `status.md`. No design edits, speech or commits.
