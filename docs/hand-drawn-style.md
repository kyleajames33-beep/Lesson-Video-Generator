# Hand-drawn stop-motion style

A second look for coded diagrams. Lines wobble slightly each drawing (the
"line boil" of hand-drawn animation), motion advances in held steps at 10
drawings a second ("on threes") instead of a smooth 30 fps, and a faint
paper grain sits on top. Every label, number and moving part is still coded
SVG, so accuracy rules from `docs/diorama-system.md` apply unchanged.

Code: `src/animations/HandDrawn.tsx`. Review reel: the `HandDrawnShowcase`
composition (plus one `HandDrawn-<kind>` composition per clip for social cuts).

```bash
npx remotion render src/index.ts HandDrawnShowcase out/hand-drawn-showcase.mp4
npx remotion render src/index.ts HandDrawn-hdActionPotential out/action-potential.mp4
```

## 1. The style toggle (any existing diagram, no code changes)

| Where | Field | Effect |
| --- | --- | --- |
| Lesson JSON (top level) | `"visualStyle": "handDrawn"` | every concept-scene diagram in the lesson |
| Concept scene | `"diagramStyle": "handDrawn"` | just this scene's diagram (overrides the lesson) |
| Concept scene | `"diagramStyle": "default"` | opt one scene out of a hand-drawn lesson |

`ConceptSlide` wraps the diagram in `<HandDrawnStage>`. The stage:

1. renders its children inside Remotion's `<Freeze>` at a quantised frame, so any
   diagram that reads `useCurrentFrame()` animates in held steps untouched;
2. applies an SVG turbulence + displacement filter (as a CSS filter) whose seed
   re-rolls each step and cycles through 4 drawings; it runs off the real frame,
   so a finished diagram keeps gently boiling during long narration holds
   (satisfies the "never frozen" rule for free);
3. overlays feathered paper grain.

Stages never nest: a hand-drawn kind inside a toggled scene boils once.
`scripts/validate-lesson.mjs` rejects any value other than `default` / `handDrawn`.

Tuning (props on `HandDrawnStage`): `step` (frames per drawing, default 3),
`strength` (wobble in px, default 3; 0 = off), `grain` (default 0.25; 0 = off).

## 2. Hand-drawn diorama kinds (lane `handdrawn`)

Native hand-drawn clips: graphite pencil lines, hatching instead of gradients,
Caveat labels. They wrap themselves in a stage, so they look hand-drawn whether
or not the toggle is on. Use them like any diorama kind:

```json
"diagram": {"type": "diorama", "kind": "hdMitosis", "props": {"stageFrames": 150}}
```

| Kind | Topic | Key props |
| --- | --- | --- |
| `hdActionPotential` | Bio Y12 M8: nerve impulse along a neuron | `myelinated` (true = saltatory; false = continuous, slower), `labels`, `caption`, `cycleFrames` |
| `hdMitosis` | Bio Y12 M5: interphase → telophase + cytokinesis, 2n = 4 | `stageFrames` (frames per stage, default 60), `notes` |
| `hdDnaReplication` | Bio Y12 M5: semi-conservative replication, leading/lagging strands | `sequence` (top strand, 6–12 bases), `travelFrames`, `strandLabels` |
| `hdCollisionTheory` | Chem Y11 M3: collisions, activation energy, temperature | `compare` (low vs high T side by side), `temperature`, `particlesEach`, `hotFactor`, `caption` |
| `hdDissolvingSalt` | Chem Y11 M2: NaCl dissolving, ion–dipole, hydrated ions | `framesPerIon` |

All take `delay` (default 62, the ConceptSlide card reveal). Time the beats
to the narration with the pacing props (`stageFrames`, `travelFrames`,
`framesPerIon`): a narrated mitosis scene of ~60 s wants `stageFrames` ≈ 300.

Each file opens with its beat plan and the science it was checked against.

## Writing a new hand-drawn kind

- Put it in `src/slides/diagrams/kinds/handdrawn/`, register one line in
  `dioramaKinds/lane-handdrawn.ts`, prefix the name `hd`.
- Start from `shared.tsx`: `HandSvg` (stage + 760×530 viewBox + hatch/glow
  defs), `Hand` (Caveat label), `Glow` (amber highlight), `HandArrow`,
  `ramp`, `hash01` (deterministic noise: never `Math.random()`).
- Palette: `PENCIL.ink` for linework, `useAccent()` for the subject colour,
  amber only for the single most important thing, `ELEMENT_COLORS` for atoms.
- Read `useCurrentFrame()` normally; the stage steps it for you.
- Add it to `HAND_DRAWN_CLIPS` in `src/dev/HandDrawnShowcase.tsx` to get a
  review clip and a `HandDrawn-<kind>` composition.
