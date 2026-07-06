# Interactive Diagram Pattern — Architecture

Reference implementation: `VSEPRDiagram.tsx` (VSEPR molecular geometry).
This doc is written for a less capable model (Claude Code / Sonnet)
replicating the pattern for new topics. Follow it literally.

## The pattern in one sentence

One self-contained `.tsx` file per diagram: **plain-data topic content**
(Section 2) rendered by a **frozen 3D-in-SVG engine and UI shell**
(Sections 1, 3, 4, 5a), with one topic-specific `renderScene()`
function (Section 5b).

## Hard contract (never violate)

1. **Only import is `react`.** No Three.js, no CSS files, no styled-components,
   no `className`, no `<style>` tags. All styling is inline `style` objects
   or SVG attributes. This is what makes the file droppable into the static
   site and Remotion with zero dependency setup.
2. **One default-exported component per file**, with all props optional.
3. **SVG `<defs>` ids must be namespaced** with `useId()` (see `uid` in the
   reference). Multiple diagrams share one HTML page; bare ids collide.
4. **Deterministic mode must work.** When the `rotation` prop is supplied
   (`controlled === true`): no `requestAnimationFrame`, no
   `performance.now()`, no SMIL `<animate>` elements rendered, no pointer/
   click/hover handlers attached, `settleScale` stays exactly 1, and no
   `Math.random()` anywhere ever. Output must be a pure function of props.
   This is the Remotion contract. Every animated or interactive feature
   must be individually gated on `!controlled`.
5. **3D is fake-3D in SVG**: rotate unit vectors, project to 2D, painter's
   algorithm (sort by depth, draw far→near). Never introduce WebGL.
6. **Ambient animation is SMIL only** (`<animate>` inside SVG), never CSS
   keyframes (which would need a `<style>` tag). UI transitions on HTML
   elements (button glow) use the inline `transition` style property.
   Stateful motion (rotation easing, fling inertia, settle bounce) lives
   in the single unified rAF loop in Section 5a.

## File anatomy — what changes vs what's frozen

| Section | Contents | Per new topic |
|---|---|---|
| 1. TYPES | `Vec3`, `Rotation`, `Projected` | Copy verbatim |
| 2. TOPIC DATA | Content as typed plain data | **Rewrite entirely** |
| 3. 3D ENGINE | `rotate`, `project`, `depthLerp` | Copy verbatim |
| 4. THEME | Design tokens + style objects | Copy verbatim (tokens are the site palette) |
| 5a. SHELL | State, drag, auto-rotate, controls, info panel | Copy verbatim; edit labels/title strings only |
| 5b. renderScene() | Turns Section-2 data into sorted SVG renderables | **Rewrite per topic *family*** (see below) |

"Topic family" = diagrams sharing a scene grammar. Two families now
exist, sharing byte-identical Sections 1/3/4 and identical 5a
mechanisms (verify with a diff when replicating):

- **Family 1 — radial scenes** (`VSEPRDiagram.tsx`): objects radiate
  from one central point; positions are unit vectors from the origin.
  Fits: molecular shapes, polarity, orbital diagrams, force diagrams
  around a point.
- **Family 2 — path-based scenes** (`CircuitDiagram.tsx`): discrete
  parts placed at explicit anchor points along paths. Fits: circuits,
  process/flow diagrams, apparatus setups, timelines, food chains.

## Family 2: path-based placement (the anchor+along convention)

This is the part a replicating model most needs for non-radial
diagrams. Family 2's Section 2 schema replaces radial unit vectors
with explicit layout:

- **Coordinates are literal model-space positions**, not directions.
  z = 0 for a flat scene that tilts in 3D. Budget: |x| ≲ 2.2,
  |y| ≲ 0.95 fits the default 720×400 viewBox at standard scale —
  recompute this budget if width/height differ (visible half-range is
  `(width/2)/scale` by `(height/2)/scale`).
- **Paths are polylines** (`pts: Vec3[]`), projected vertex-by-vertex
  into one SVG `<path>`. Vertex order is meaningful (here: conventional
  current direction, so the flow animation runs the right way).
- **Each discrete part carries `at` (anchor) and `along` (unit wire
  direction).** The renderer projects `at` and `at + 0.12·along`,
  takes `atan2` of the difference for the screen angle, and draws the
  symbol as a **billboard**: flat glyph in local coords (path runs
  along local x through the origin), rotated to the screen angle.
  Symbols are never truly 3D.
- **Opaque plate masking**: each symbol sits on a rounded rect filled
  with the stage colour (`#f2f9fa`) that hides the path behind it —
  paths are drawn continuous, never with gaps. This survives any
  rotation and avoids fragile gap bookkeeping in the data.
- **Depth biases**: paths at `avgDepth − 0.05`, junction dots `+0.01`,
  symbols `+0.02`, labels `+0.03`, overlays still 98/99.
- **Upright text inside rotated symbols** gets a counter-rotation
  (`transform={rotate(−angle)}`), e.g. the A/V meter letters. External
  labels are separate renderables (never inside the rotated group),
  offset perpendicular to the path and flipped toward the scene centre
  so they stay in-frame.
- **Info panel is data-driven** in family 2 (`readouts` array) — adopt
  this for all future diagrams; family 1's hardcoded Info items are
  legacy.
- **Ambient SMIL adapts per family**: family 1 = bond pulse + sparkle;
  family 2 = current-flow dashes (`stroke-dasharray` + animated
  `stroke-dashoffset`), applied only to paths flagged `flow: true`
  (the voltmeter branch is `flow: false` — an ideal voltmeter draws
  no current; keep physics in the ambient layer honest). Same rules:
  `!controlled` only, `pointerEvents="none"`, subtle.

A new family (e.g. layered cross-sections) keeps Sections 1/3/4/5a and
writes a new renderScene() + Section 2 schema, reusing whichever of
the two placement models fits — most non-radial topics fit family 2's
anchor+along model directly.

## Section 2 data rules

- All student-visible text (shape names, angles, notes, formulas) lives
  in the data, never hardcoded in JSX. Use **exact NSW syllabus
  terminology** — copy wording from the source lesson page, don't invent.
- Every entry needs both a one-line `note` (always visible) and a longer
  `detail` (behind the "Why this shape?" toggle) — 2–4 sentences of
  syllabus-accurate reasoning, not a restatement of the note.
- Clickable-part callout text lives in a `PART_LABELS` map (functions
  keyed by part kind), and hover names in a lookup like `ELEMENT_NAMES`.
  Never inline callout strings in renderScene.
- 3D positions in family 1 are **unit vectors** (length 1); in family 2
  they are **explicit model-space coordinates** within the layout
  budget. Either way, the engine owns pixel scale.
- Order conventions matter and must be documented in the data comment
  (in VSEPR: bonding directions first, lone-pair directions last,
  split by `bondingPairs`).
- Colours follow the domain's real convention when one exists
  (CPK colours for elements). Otherwise use `THEME` tokens.

## renderScene() rules (Section 5b)

1. Build `items: { depth, el }[]` — never render directly.
2. `depth` comes from `project(...).depth`. Elements that must draw
   behind a sibling at the same location get `depth - 0.02` (see bonds).
3. `items.sort((a,b) => a.depth - b.depth)` then return the elements.
4. Use `depthLerp(depth, min, max)` for size/stroke/opacity depth cues.
   Convention: far elements fade to ~0.55–0.7 opacity, near = 1. Opacity
   falloff is the depth cue — do NOT add per-element blur filters (they
   tank drag performance).
5. Every visual element sizes off `scale` (derived from width/height),
   never absolute pixels, so the diagram survives resizing.
6. Overlays that must always render on top use reserved depths:
   **98 = hover chip, 99 = selection callout.** Real scene depth never
   exceeds ~1.3, so these always sort last.

## Polish layer (v2) — copy these exactly

These live in the FROZEN sections; a replicating model reuses them, it
does not reinvent them.

- **Sphere gradient recipe** (in `<defs>`): 4 stops — `lighten(c,0.85)`
  at 0% (specular hot-spot at cx 33% / cy 27%), `lighten(c,0.45)` at
  18%, base colour at 62%, `darken(c,0.3)` at 100%.
- **Two shared filters**, ids `${uid}-shadow` (soft drop shadow, applied
  to every atom sphere and callout) and `${uid}-glow` (aqua selection
  glow, applied only to the selected part). Never define per-element
  filters.
- **Unified animation loop**: ONE rAF effect (interactive mode only)
  drives (a) auto-rotate speed eased toward its target, (b) fling
  inertia after drag release with exponential decay `pow(0.08, dt)`,
  (c) the settle bounce. It skips `setState` when idle. Never add a
  second rAF loop or setInterval.
- **Settle bounce**: on content change (not initial mount), damped
  spring `1 + 0.05·e^(−5.5t)·sin(16t)` for 0.85 s, applied as a scale
  transform about the scene centre. Always 1 in controlled mode.
- **Ambient SMIL**: bond pulse (overlay line, opacity 0→0.35→0, 3 s,
  staggered `begin` per bond) and central-atom sparkle (two white dots
  twinkling). Rendered only when `!controlled`, always
  `pointerEvents="none"`, always subtle (peak opacity ≤ 0.4 for pulses).
- **Active button glow**: gradient fill + `boxShadow` ring + 1 px lift,
  eased by an inline `transition` on the base button style.

## Interaction convention (v2) — "click-to-inspect"

How to implement clickable scene parts in any new diagram:

1. Selection state is `Selection = { kind: string; i: number } | null`.
   `kind` names the part type for this topic (here `"bond"` / `"lone"`),
   `i` indexes the data array. One selection at a time.
2. Each clickable part gets `onClick={toggleSelect(kind, i)}` (which
   `stopPropagation()`s and toggles) plus `cursor: "pointer"`. Thin
   targets (lines) also get an invisible fat hit line
   (`stroke="transparent" strokeWidth={18}`) inside the same `<g>`.
3. The SVG background `onClick` clears selection, but only when the
   pointer moved < 4 px since pointer-down (`movedPx` ref) — so ending
   a drag never clears it.
4. Selected part: brighter stroke/fill + `${uid}-glow` filter + a
   `callout()` renderable at depth 99. Callout text comes from
   `PART_LABELS`, is clamped inside the viewBox, and is
   `pointerEvents="none"`.
5. Hover: `onMouseEnter/Leave` sets `hovered` (atom index; −1 =
   central); render a `callout()` at depth 98 with the element name.
   Hover is enhancement only — all information must also be reachable
   by click/expand (touch devices have no hover).
6. Selection resets on content change (the `activeId` effect).
7. In controlled mode: none of these handlers are attached and no
   callouts can appear.

## Props API (keep identical across all diagrams)

```
initialGeometry?: string   // rename per topic, e.g. initialState
autoRotate?: boolean       // default true
rotation?: Rotation        // Remotion: supply to control the camera
fixedGeometry?: string     // Remotion/embed: lock content, hide controls
width?, height?: number    // viewBox size; component is fluid via CSS width 100%
```

## Integration

**Static site (Cloudflare Pages).** Bundle each diagram to a
self-contained IIFE and mount into a div:

```bash
npx esbuild entry.tsx --bundle --minify --format=iife --outfile=vsepr.min.js
```

```tsx
// entry.tsx
import { createRoot } from "react-dom/client";
import VSEPRDiagram from "./VSEPRDiagram";
document.querySelectorAll("[data-diagram='vsepr']").forEach((el) =>
  createRoot(el).render(<VSEPRDiagram />)
);
```

```html
<div data-diagram="vsepr"></div>
<script src="/js/vsepr.min.js" defer></script>
```

React + ReactDOM get bundled in (~45 kB gz per diagram). If several
diagrams appear on one page, mark react/react-dom `--external` and load
them once from a shared script instead.

**Remotion.** Deterministic by construction:

```tsx
const frame = useCurrentFrame();
<VSEPRDiagram
  fixedGeometry="tetrahedral"
  rotation={{ yaw: interpolate(frame, [0, 120], [-0.6, 2.5]), pitch: 0.35 }}
/>
```

## Checklist for the replicating model

Before delivering a new diagram, verify every line:

- [ ] Only `react` imported; zero `className`/`<style>`/CSS files
- [ ] All content strings in Section 2 data (incl. `detail`,
      `PART_LABELS`), matching syllabus wording
- [ ] Positions: unit vectors (family 1) or in-budget model coords
      (family 2); ordering/direction convention commented
- [ ] Family 2 only: every part has `at` + `along`; symbols billboard
      via projected angle; plates mask paths; labels outside rotated
      groups; SMIL only on `flow: true` paths
- [ ] renderScene builds `{depth, el}` items and sorts before render;
      overlays at depth 98/99 only
- [ ] `<defs>` ids prefixed with `uid`; only the two shared filters
- [ ] Exactly one rAF loop; SMIL for ambient motion; no CSS keyframes
- [ ] `rotation` prop path: no rAF, no SMIL rendered, no handlers
      attached, `settleScale === 1`, renders identically for identical
      props (grep the file: every `performance.now`, `<animate`,
      `onClick`, `onMouseEnter` must be behind `!controlled` or inside
      the `if (controlled) return` effect / drag-gated handlers)
- [ ] Every clickable part has a fat invisible hit area
- [ ] Compiles: `npx tsc --noEmit --strict --jsx react-jsx --lib es2020,dom File.tsx`
- [ ] Sanity-render at 3 rotations; confirm nearer objects draw on top
      and callouts stay inside the viewBox

## Known gotchas

- **Depth-sort flicker**: if two items swap order at the same depth, add
  a small bias (`±0.02`) rather than restructuring.
- **SVG y-axis points down**: `project()` already negates model y. Don't
  negate again in renderScene.
- **Perspective**: `FOCAL = 4` is tuned; below ~2.5 spheres distort.
- **Text inside gradients**: always use `contrastText()` for labels on
  coloured circles — light elements (H, S) need dark text.
- **Do not "improve" the engine.** Section 3 is 25 lines on purpose;
  matrices/quaternions add nothing for single-object scenes and are
  where cheaper models introduce bugs.
- **SMIL restarts on remount**: fine — ambient animation is decorative
  and carries no state. Never encode meaning in SMIL timing.
- **`pointerEvents="none"` on all decorative overlays** (sparkles,
  pulses, callouts) or they will swallow clicks meant for the parts
  beneath them.
- **Filters on text look blurry**: apply `${uid}-shadow` to shapes
  (circles, rects), never to `<text>`.
- **Click vs drag**: the 4 px `movedPx` threshold is what stops a drag
  release from clearing the selection. Don't remove it.
