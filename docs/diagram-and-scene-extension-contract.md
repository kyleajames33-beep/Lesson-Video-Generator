# HSCScience Video — Diagram & Scene Extension Contract

**Golden rule:** every change here is **purely additive**. 233 lessons depend on the existing `DiagramConfig` / `SceneBase` unions. Never rename, remove, or change the props of an existing `type`. Only add new union members and new `case`s.

---

## 1. Register a new diagram type

A diagram is a pure SVG component selected by a `diagram.type` string. Four edits, always in this order:

**(a) Add a union member** to `DiagramConfig` in `src/lesson/types.ts` (lines 91-217). Discriminant is `type`; everything else is your props:

```ts
| {
    type: 'reactionArrow';      // unique, camelCase, never reuse an existing string
    reactants: string;
    products: string;
    reversible?: boolean;
    delay?: number;             // convention: entrance offset in FRAMES (see §4)
  }
```

**(b) Create the component** at `src/slides/diagrams/ReactionArrowDiagram.tsx`. It **must**:

- take a local `type Props = {…}` matching the config fields (minus `type`),
- read `useCurrentFrame()` + `useVideoConfig()` — never accept a frame prop,
- return exactly one `<svg viewBox="0 0 720 440" className="diagram">`. The `.diagram` class (`src/styles.css:815`) sets `width:100%; height:auto; overflow:visible` + drop-shadow — so **do not set pixel width/height on the svg**; author to the viewBox. New "hero" diagrams use a ~720×440 viewBox (`ConceptSlide.tsx:310-314`).

**(c) Import + add a `case`** in `src/slides/diagrams/DiagramRenderer.tsx`. Prefer the spread form so props stay in sync automatically:

```ts
import {ReactionArrowDiagram} from './ReactionArrowDiagram';
// …in the switch:
case 'reactionArrow': return <ReactionArrowDiagram {...diagram} />;
```

(`{...diagram}` also passes `type`; your `Props` simply ignores it — fine. Only pass explicit props if you need to rename, like the `barChart`/`punnettSquare` cases.) The switch has `default: return null` (line 77), so a mistyped/unregistered `type` renders **silently blank** — there is no error. Registration is mandatory.

**(d) Authoring in JSON:** a diagram only appears on scenes that carry a `diagram` field. Today that is the **`TextScene` types** — `hook | concept | definition | formula | misconception` (`types.ts:268-280`). The slide renders it via `<DiagramRenderer diagram={scene.diagram} />` (`ConceptSlide.tsx:298-307`). Example scene:

```json
{ "id": "c1", "type": "concept", "durationInFrames": 300, "caption": "…",
  "heading": "…", "body": "…",
  "diagram": { "type": "reactionArrow", "reactants": "N₂ + 3H₂", "products": "2NH₃", "reversible": true } }
```

**Props a diagram receives:** exactly the config object fields. Nothing else is injected — no theme prop, no timing prop. Subject accent and frame come from hooks (`useAccent()`, `useCurrentFrame()`), not props.

---

## 2. Register a new scene type

Only add a scene type if a new *slide layout* is needed — a new visual inside an existing layout should be a diagram (§1).

Five edits:

1. **Add the discriminant** to the `SceneBase.type` union, `types.ts:11-24`: `| 'timeline'`.
2. **Define the scene type** (extends `SceneBase`), near the other scene types:

   ```ts
   export type TimelineScene = SceneBase & {
     type: 'timeline';
     heading: string;
     events: {year: string; label: string}[];
     diagram?: DiagramConfig;   // include ONLY if this layout hosts diagrams
   };
   ```

3. **Add it to the `SceneData` union**, `types.ts:337-346`.
4. **Create `src/slides/TimelineSlide.tsx`** with this exact prop contract (mirror `ConceptSlide.tsx:25-34`):

   ```ts
   type Props = { scene: TimelineScene; lesson: LessonData; sceneIndex?: number; totalScenes?: number };
   ```

   The slide **must**: wrap content in `<SlideFrame>` + `<SlideChrome …/>` (the persistent metadata frame every slide shares), pull accent via `useAccent()`, drive all reveals off `useCurrentFrame()`, and stay within `scene.durationInFrames`. Honor `scene.revealDelays` overrides if you expose per-element timing (`ConceptSlide.tsx:36-38`). Do **not** render voiceover/captions/progress bar — `LessonVideo` owns those.

5. **Wire the switch** in `LessonVideo.tsx:41-72` — import + `case 'timeline': return <TimelineSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;`. Same `default: return null` blank-on-miss behavior applies.

---

## 3. Consume the design system (do NOT invent colours/fonts)

**Colour sources, in priority order:**

- **Subject accent** → `const theme = useAccent()` → `theme.accent` (deep), `theme.accent2` (lighter), `theme.soft` (tint), `theme.cardTint` (`"r,g,b"` for `rgba(${theme.cardTint}, .1)`). Defined in `theme.ts:15-48`. This is what makes one diagram work in blue for Biology, teal for Chemistry, etc.
- **Neutrals / ink** → `TOK` from `tokens.ts:5-44`: `TOK.ink`, `TOK.inkDim`, `TOK.inkMute`, `TOK.rule`, `TOK.bg`.
- **Amber** → `TOK.amber`, reserved (see §4).
- **Concept colours** (N/n/Avogadro/mole/particles) → `CONCEPT_PALETTE` from `conceptColors.ts`, e.g. `CONCEPT_PALETTE.mole.color`.

**Fonts:** `FONT_DISPLAY`, `FONT_MONO` from tokens; sizes/weights from the `TYPE` scale. Never hardcode a font-family or a raw px scale that isn't in `TYPE`.

**⚠️ Critical SVG gotcha (not obvious):** `ConceptText` and `MathText` render **`<span>` (HTML)**, so they **cannot be children of `<svg>`**. Inside a diagram's SVG:

- for a coloured equation, import **`colorForPiece`** from `MathText.tsx:31` (or `CONCEPT_PALETTE`) and apply the returned colour as the `fill` on an SVG `<text>`;
- use `ConceptText`/`MathText` directly **only** in HTML contexts (slide bodies, or inside an SVG `<foreignObject>`).

**Concrete wiring** (the accent-correct pattern):

```tsx
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

export const ReactionArrowDiagram = ({reactants, products, delay = 0}: Props) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const theme = useAccent();                                   // subject-aware
  const draw = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 120}});
  const w = interpolate(draw, [0, 1], [0, 300]);

  return (
    <svg viewBox="0 0 720 440" className="diagram">
      <text x={140} y={220} textAnchor="middle" fontFamily={FONT_DISPLAY}
            fontSize={34} fontWeight={800} fill={TOK.ink}>{reactants}</text>
      <line x1={230} y1={214} x2={230 + w} y2={214} stroke={theme.accent} strokeWidth={4} />
      <text x={580} y={220} textAnchor="middle" fontFamily={FONT_DISPLAY}
            fontSize={34} fontWeight={800} fill={TOK.ink}>{products}</text>
    </svg>
  );
};
```

---

## 4. Repo-specific constraints a new diagram/slide MUST respect

- **Deterministic render (hard requirement).** Output must be a pure function of `useCurrentFrame()` + props. **No `Math.random()`, no `Date.now()`, no `new Date()`, no `useState`/`useEffect`/timers/network.** Continuous motion is fine via `frame / fps` as the time source (see `OrbitDiagram.tsx:17,40`). Any "randomness" must be seeded/deterministic. A non-deterministic frame breaks Remotion's frame-cache and desyncs re-renders.
- **One amber per beat.** `TOK.amber` marks the single most important element on the whole slide at a given moment. A diagram shares the frame with slide text that may already own the amber — so **default to not using amber in a diagram**. Use it only if the diagram *is* the focal answer, and never for two elements at once.
- **Get `fps` from `useVideoConfig()` — never hardcode 30.** Convert seconds→frames as `Math.round(sec * fps)`.
- **Timing conventions:** diagram `delay` is in **frames**; bullet/scene `at` fields are in **seconds**. Don't mix them. Stay within `scene.durationInFrames` — do not animate past the scene's end.
- **"Diagrams draw, they don't cut."** Give elements an entrance (spring/interpolate, stroke-dashoffset draw-on). No hard pop-ins of the whole figure.
- **viewBox, not pixels.** One `<svg className="diagram">` with a `viewBox`; let the class size it. `overflow: visible` is already set, so slight overhangs are OK.
- **Additive only.** Don't touch existing union members, cases, or props. New file + new union member + new case. This guarantees the other 233 lessons are byte-for-byte unaffected.
- **Legacy caution:** older diagrams (`VennDiagram`, `OrbitDiagram`) and the `.diagram-*` CSS classes hardcode indigo `#4f46e5`/amber — that is exactly what this contract forbids for new work. Copy their *structure*, not their colours.

---

## 5. Fully worked reference — `venn`, end to end

This is the real registration in the repo, shown as the copy template. (Its hardcoded indigo/amber is the **anti-pattern** — the compliant rewrite follows.)

**Union member** — `types.ts:109-115`:

```ts
| { type: 'venn'; leftLabel: string; rightLabel: string; overlapLabel: string; delay?: number }
```

**Renderer case** — `DiagramRenderer.tsx:46`:

```ts
import {VennDiagram} from './VennDiagram';
case 'venn': return <VennDiagram {...diagram} />;
```

**Component** — real `VennDiagram.tsx` (note it takes exactly the config fields, uses `frame - delay` for the spring, and fades labels after the circles settle):

```tsx
type Props = {leftLabel: string; rightLabel: string; overlapLabel: string; delay?: number};

export const VennDiagram = ({leftLabel, rightLabel, overlapLabel, delay = 0}: Props) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const leftP  = spring({frame: frame - delay,     fps, config: {damping: 18, stiffness: 120, mass: 1.1}});
  const rightP = spring({frame: frame - delay - 7, fps, config: {damping: 18, stiffness: 120, mass: 1.1}});
  const labelOpacity = interpolate(frame, [delay + 34, delay + 54], [0, 1], clamp);
  const leftX  = interpolate(leftP,  [0, 1], [-90, 255]);
  const rightX = interpolate(rightP, [0, 1], [790, 445]);
  return (
    <svg viewBox="0 0 700 390" className="diagram">
      <circle cx={leftX}  cy={195} r={148} fill="rgba(79,70,229,0.10)" stroke="rgba(79,70,229,0.55)" strokeWidth="2.5" />
      <circle cx={rightX} cy={195} r={148} fill="rgba(245,158,11,0.10)" stroke="rgba(245,158,11,0.55)" strokeWidth="2.5" />
      <g opacity={labelOpacity}>
        <text x="168" y="200" textAnchor="middle" fontSize="26" fontWeight="800" fill="#3730a3">{leftLabel}</text>
        <text x="350" y="200" textAnchor="middle" fontSize="21" fontWeight="700" fill="#44403c">{overlapLabel}</text>
        <text x="532" y="200" textAnchor="middle" fontSize="26" fontWeight="800" fill="#92400e">{rightLabel}</text>
      </g>
    </svg>
  );
};
```

**JSON usage** (inside any `TextScene`):

```json
"diagram": { "type": "venn", "leftLabel": "Ionic", "rightLabel": "Covalent", "overlapLabel": "Polar covalent" }
```

**Compliant rewrite** (what a *new* diagram must look like — same structure, design-system colours). Left = subject accent, right = accent2, ink for labels, no raw hex, no amber:

```tsx
import {TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

export const VennDiagram = ({leftLabel, rightLabel, overlapLabel, delay = 0}: Props) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const theme = useAccent();                                   // ← subject-aware, not indigo
  const leftP  = spring({frame: frame - delay,     fps, config: {damping: 18, stiffness: 120, mass: 1.1}});
  const rightP = spring({frame: frame - delay - 7, fps, config: {damping: 18, stiffness: 120, mass: 1.1}});
  const labelOpacity = interpolate(frame, [delay + 34, delay + 54], [0, 1], clamp);
  const leftX  = interpolate(leftP,  [0, 1], [-90, 255]);
  const rightX = interpolate(rightP, [0, 1], [790, 445]);
  return (
    <svg viewBox="0 0 700 390" className="diagram">
      <circle cx={leftX}  cy={195} r={148} fill={`rgba(${theme.cardTint},0.10)`} stroke={theme.accent}  strokeWidth="2.5" />
      <circle cx={rightX} cy={195} r={148} fill={`rgba(${theme.cardTint},0.10)`} stroke={theme.accent2} strokeWidth="2.5" />
      <g opacity={labelOpacity}>
        <text x="168" y="200" textAnchor="middle" fontSize="26" fontWeight="800" fill={theme.accent}>{leftLabel}</text>
        <text x="350" y="200" textAnchor="middle" fontSize="21" fontWeight="700" fill={TOK.inkDim}>{overlapLabel}</text>
        <text x="532" y="200" textAnchor="middle" fontSize="26" fontWeight="800" fill={theme.accent2}>{rightLabel}</text>
      </g>
    </svg>
  );
};
```

---

## Checklist for the receiving tool (per new diagram)

1. Add union member to `DiagramConfig` (types.ts) — additive only.
2. New file `src/slides/diagrams/<Name>Diagram.tsx`, single `<svg className="diagram" viewBox>`, props = config fields.
3. Import + `case` in `DiagramRenderer.tsx` (`{...diagram}` spread).
4. Colours via `useAccent()` + `TOK`; equations via `colorForPiece`/`CONCEPT_PALETTE` on `<text fill>`; fonts via `TYPE`/`FONT_*`.
5. Deterministic (frame+props only); `fps` from `useVideoConfig()`; `delay` in frames; entrance-animate; stay within `durationInFrames`; ≤1 amber.
6. Add the type string to `supportedDiagramTypes` in `scripts/validate-lesson.mjs` — otherwise `validate-lesson` rejects any lesson JSON that uses it.

---

## Addendum — porting 3D-in-SVG rotation patterns (learned from `molecule3d` / `circuit3d`)

The 3D pipeline lives in **`src/slides/diagrams/engine3d.ts`** — `rotate` (yaw→pitch turntable), `project` (weak perspective, SVG-y flipped), `depthLerp` (depth → opacity/stroke cues), `paintersSort` ({depth, el} items, far-first), `slerp` (arcs on the model sphere). Conventions: y up, +z toward camera, geometry within |p| ≲ 1.4 model units, camera distance 4.2. **Reuse this module for any future 3D diagram — do not fork the math per component.**

Registered proof-of-port types (both take the standard `delay` frames):

```json
{ "type": "molecule3d", "geometry": "tetrahedral", "centralLabel": "C", "terminalLabel": "H", "angleLabel": "109.5°" }
{ "type": "circuit3d", "showCurrent": true,
  "components": [ {"kind": "battery", "label": "6 V"}, {"kind": "switch"}, {"kind": "lamp", "label": "Lamp"}, {"kind": "resistor", "label": "R = 10 Ω"} ] }
```

`Molecule3DDiagram.tsx` is the **Family-1 (radial)** template — points on unit vectors around an origin. `Circuit3DDiagram.tsx` is the **Family-2 (path-based)** template — an arc-length-parameterised 3D path with items placed/billboarded along it. Dev preview harness: `npx remotion still src/dev/diagram3d-preview-entry.ts <Molecule3D-CH4|Circuit3D-Series> out.png --frame=N`.

What a future port must know:

- **Interactive → deterministic motion mapping.** Pointer-drag yaw becomes a frame-derived rotation: full turntable `yaw = 2π·(frame/fps)/period` for radial diagrams (labels are billboarded circles, safe at any angle); a bounded sway `yaw = base + amp·sin(2π·t/period)` for path diagrams whose component symbols/labels must never flip upside-down. Delete drag/hover/click/inertia handlers entirely; "settle bounce" becomes a `spring()` entrance.
- **Depth-sort geometry, overlay annotations.** Everything physical (bonds, atoms, wire chunks, components, current dots) goes in the `DepthItem[]` painter list. Annotations (angle values, component labels) must NOT — at some yaw every depth-sorted annotation ends up behind the central sphere / far wire and silently vanishes. Render them after `paintersSort(...)`, and give text a halo (`stroke={TOK.bg} strokeWidth={6} paintOrder="stroke"`) so it survives crossing dark geometry. (An arc can stay depth-sorted for honest occlusion — but its number must not.)
- **Depth cues:** multiply radii/font sizes by `Projected.scale` (perspective), and pass rotated z to `depthLerp` for stroke/text opacity. Don't put whole-group `opacity` on filled shapes that occlude others — a translucent atom shows the bond through itself; dim strokes/text instead and keep fills solid.
- **Varying stroke width along a 3D path:** SVG can't do it in one `<path>` — split the path into chunks (4 per span works), each its own polyline with width/opacity from its average z, each painter-sorted.
- **Billboard component symbols** at the projected point with `translate → rotate(projected tangent) → scale(Projected.scale × spring)`; keep their labels screen-horizontal, offset outward from the loop's screen centre so they clear the wire at any sway angle.
- **Bounds check under rotation:** worst-case screen extent ≈ (max corner distance from origin) × unit × perspective-at-that-corner. Corners at max screen-x always have small |z| (perspective ≈ 1), so size `unit` to `maxRadius × unit ≤ viewBox half-width` and you're safe.
- **Discard the source project's standalone `THEME` object** — colours come from `useAccent()` (subject-aware) + `TOK`, exactly like every 2D diagram (§3).
- **Registration is 4 edits, not 3:** types.ts union + component file + DiagramRenderer case + `scripts/validate-lesson.mjs` whitelist (checklist item 6 — the original §1 omitted it).
