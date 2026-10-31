# Brief 129: build the maths kit's calculus set, with a silent pilot

Read `00-standing-rules.md`, `docs/production/programme/new-voice-programme-plan-2026-11-01.md` (decisions 4 to 6 and the syllabus rule) and `claude-pm/checks/maths-kit-needs-d01-d10.md` first. This is code. Claude reviews the pilot afterwards. It can run alongside any other brief.

**Goal.** Extend `src/explainer/math/kit.tsx` (keep its existing `CoordinateAxes`, `SquareGraph` and `AlignedAlgebra` working) so the ten Year 12 Advanced videos in `docs/production/maths-a12-video-route.json` can be built. Use the explainer engine, its paper style, fonts, colours, scene shell and shared countdown and card components. Don't touch the legacy engine.

## Components

Build everything in the kit-needs table and its "Missing from the named list" section:

1. **`FunctionGraph`:** genuine function plotting with any domain, plus:
   - asymptotes, holes, endpoints and corners;
   - included and excluded endpoint markers;
   - radian ticks;
   - one coordinate transform shared by the curve, points, tangents and slope markers;
   - animated drawing and a moving point.
2. **`SecantToTangent`:** two distinct points; the secant becomes the tangent as one point slides, with a local zoom inset. Never divide by zero. Keep the screen angle consistent with the numerical slope.
3. **`DerivativeTracer`:** a function graph above its derivative graph, with independently labelled scales. Measured tangent gradients are traced onto the lower graph (d05, d09).
4. **`SignChart`:** aligned to the graph's x-coordinates, with increasing and decreasing shading, splits at zeros, and excluded or undefined points. It never bridges a domain gap.
5. **`AlignedAlgebra` extensions:**
   - nested inner and outer slots with derivative-factor highlights;
   - a two-contribution product cue;
   - bracket-aware large fractions;
   - cancellation marks that keep domain exclusions;
   - retained givens;
   - a candidate and value table with exact fractions (d10).

## Pilot

A silent pilot, about 60 seconds, in the pattern of `scripts/render-maths-pilot.mjs`. Show each component on a real d01 to d10 example taken from the pre-design packs in `claude-pm/pre-design/maths-a12/`:
- k e^(ax+b) with its slope;
- ln x with its domain and asymptote;
- sin x traced to cos x;
- a quotient with an excluded point and its sign chart;
- an optimisation candidate table.

Check the maths of every plotted value, then render desktop stills and phone-landscape stills.

## Rules

- 8 GB PC: take the shared stills lock for any render (`out/explainer/.stills-lock`), run one heavy process at a time, and leave no servers running.
- Never measure text when a module loads.
- No em dashes on screen.
- Typecheck with a scoped tsconfig.

Write `checks/codex-build-129.md`, covering:
- the component API (props) for each component;
- the pilot paths, the stills and the maths checks;
- anything you couldn't build.

Hand in to `status.md`. No lesson designs, narration, voice or commits.
