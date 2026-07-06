# Coded diagrams & Lottie animations

Two ways to add motion graphics to a lesson without relying on fragile,
abstract AI image prompts. Both render deterministically inside Remotion.

## When to use what

| Need | Use |
|---|---|
| A specific chemistry scene that teaches one idea (balance, flasks, mass bar) | **Coded SVG diagram** (`src/slides/diagrams/`) |
| A polished pre-made vector animation (motion you don't want to hand-code) | **Lottie** (drop in a `.json` from lottiefiles.com) |
| A photoreal-ish illustration (molecular models, lab benches) | **ChatGPT/Codex still image** (transparent PNG) |

Rule of thumb: if a student should *learn* from it, code it or prompt it
didactically. Never ship an abstract decorative shape.

## Coded SVG diagrams

Live in `src/slides/diagrams/`, registered in `DiagramRenderer.tsx`, typed
in `DiagramConfig` (`src/lesson/types.ts`). They render on `concept`,
`definition`, and `misconception` scenes (NOT `hook` or `workedExample`).

Use TOK tokens (`src/styles/tokens.ts`) for colour — NOT the legacy
`.diagram-*` CSS classes (those are the old indigo light-theme palette).

Current chemistry-quant diagrams:
- `gasVolumeComparison` — two equal-volume flasks, He vs CO₂, same count
  different mass. Teaches Avogadro's law. (L4 concept)
- `massBreakdown` — a 100 g sample bar split into coloured % segments.
  Teaches the "assume 100 g" step. Config: `{type:'massBreakdown', segments?}`.
  (L3 four-step concept)

To add one: copy the pattern in `GasVolumeComparisonDiagram.tsx`
(useCurrentFrame + interpolate/spring, SVG viewBox, TOK colours), add a
case to `DiagramRenderer.tsx`, add the type to `DiagramConfig`.

### 3D diagrams (engine3d)

Two diagram types render true 3D-in-SVG via `src/slides/diagrams/engine3d.ts`
(rotate → project → depth cues → painter's sort). Subject-themed via
`useAccent()`, fully deterministic:

- `molecule3d` — turntabling VSEPR ball-and-stick geometry (linear,
  trigonalPlanar, bent, trigonalPyramidal, tetrahedral,
  trigonalBipyramidal, octahedral) with lone-pair lobes and an optional
  bond-angle marker. Use for shapes-of-molecules content instead of an
  AI image. `{ "type": "molecule3d", "geometry": "tetrahedral",
  "centralLabel": "C", "terminalLabel": "H", "angleLabel": "109.5°" }`
- `circuit3d` — a tilted 3D series-circuit loop (battery, resistor, lamp,
  switch, ammeter, voltmeter) with wire draw-on; `showCurrent: true`
  closes the switch, flows current dots, and lights any lamp. For
  Physics lessons. See the addendum in
  `diagram-and-scene-extension-contract.md` for the full porting notes.

Wire into a scene:
```json
"diagram": { "type": "gasVolumeComparison" }
```

## Lottie animations

Component: `src/slides/diagrams/LottieDiagram.tsx`. Package:
`@remotion/lottie` (+ `lottie-web`), pinned to the remotion version.

### How to add a Lottie animation
1. Find/make a Lottie JSON:
   - lottiefiles.com (filter "free", download "Lottie JSON")
   - or export from After Effects via the Bodymovin plugin
2. Save it to `public/assets/lottie/<name>.json`
3. Reference it from a scene diagram:
   ```json
   "diagram": { "type": "lottie", "src": "assets/lottie/<name>.json", "loop": true, "speed": 1 }
   ```
   Renders on concept / definition / misconception scenes.

### Keep it on-brand
- Prefer animations in the chem palette (green #0d6b52/#148a6f, amber
  #f0a830, charcoal ink) so they sit on the light slide background.
- Many LottieFiles let you recolour before download — do that to match.
- Avoid busy/cartoonish ones; the lesson aesthetic is restrained editorial.

### Notes
- Playback is tied to Remotion's frame clock → deterministic renders, no
  drift between re-renders (unlike generative video).
- `delayRender`/`continueRender` handle the async JSON load so the renderer
  waits for the file before capturing frames.
