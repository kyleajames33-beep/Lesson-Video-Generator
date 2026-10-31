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

## Addendum (root, 1 November 2026): needs found while designing d01

Add these as reusable kit parts, because d02 to d05 reuse them. Show each one in the pilot on d01's examples (`../lessons/math-a12-d01.md`).

6. **Parameter animation:** `FunctionGraph` animates a parameter smoothly, for example e^x morphing to e^(2x) as s goes from 1 to 2, with an optional dashed ghost of the start curve.
7. **Rigid transforms that carry attachments:** mirror in the y-axis, horizontal slides and vertical stretches move the curve's tangent lines, points and triangles with it.
8. **Gradient dots:** `DerivativeTracer` can plot gradient dots on the **same axes** as the curve (in d01 they land on the curve itself for e^x), as well as on a separate lower graph.
9. **Tangent triangle:** a part with labelled run and rise legs whose labels can change on cue (for example "run 1" becoming "run ½"), plus number readouts for height and gradient.
10. **Question card:** `src/explainer/lessons/skills-shared/card.tsx` currently accepts only Chemistry or Biology. Add a Mathematics subject, with its own badge colour from the explainer tokens, without changing how the existing subjects look.
