# Diorama diagram system

The look approved on Chem Y11 M2 L13 (PR #3): diagrams that read as painted
dioramas. Objects stand on round stone display plinths (grass was dropped after review: it read as cartoony), atoms are glossy CPK
balls, and graphs draw themselves in sync with the action. **Every label,
number and moving part is coded SVG**, so it is always correct and can animate.
Painted images, if used at all, never carry text.

Reference implementations: `src/slides/diagrams/ReactionRunDiagram.tsx` (live
simulation + self-drawing graph) and `CoefficientDivideDiagram.tsx` (columns
that change, with a crown on the answer). Shared primitives are in
`src/slides/diagrams/diorama.tsx`: `DioramaDefs`, `DioramaPlinth`, `Molecule`,
`plinthSlots`, `idleBob`, `idlePulse`, `DIO`, `ELEMENT_COLORS`.

## Where diagrams render

Only **`concept`** scenes render `scene.diagram` (`ConceptSlide`). Definition,
misconception, hook and the other slides ignore it. Put diagrams on concept
scenes. The diagram sits in the right-hand visual card, which is about 840 px
wide at 1080p. Author at a `viewBox` about **760 wide and at most 530 high**.

## How a lane adds a diagram

1. Write the component at `src/slides/diagrams/kinds/<lane>/<Name>.tsx`.
2. Register it in **your own** `src/slides/diagrams/dioramaKinds/lane-<lane>.ts`,
   one line: `  myKindName: MyComponent,` (the validator parses exactly this
   shape). Kind names are global; prefix them with your topic (`chem11m1…`,
   `bio12m6…`). The validator rejects a kind registered by two lanes.
3. In the lesson JSON:
   ```json
   "diagram": {"type": "diorama", "kind": "myKindName", "props": {"…": "…"}}
   ```
   `props` go straight to the component. Optional `delay` (frames; default 62,
   the moment ConceptSlide fades the card in).
4. Prefer **config-driven, reusable** kinds (like `reactionRun`, which takes
   any equation). Before writing one, read every `lane-*.ts` file: reusing
   another lane's kind is encouraged (read-only).

**Files a lane must never edit** (they are shared; editing them makes parallel
PRs conflict): `DiagramRenderer.tsx`, `src/lesson/types.ts`, `ConceptSlide.tsx`,
`scripts/validate-lesson.mjs`, `dioramaKinds/index.ts`, `dioramaKinds/types.ts`,
`diorama.tsx`, other lanes' `lane-*.ts` files and component folders, and any
existing diagram component outside `kinds/`. Need a new primitive? Put it in
your own `kinds/<lane>/` folder and say in the PR that it could be promoted.

## Rules

1. **Accuracy before looks.** Every number on screen is computed from props or
   copied from the scene's own text, never invented. Check it against the
   scene's `body`, `bullets`, `callout` and `voiceover.text`: the diagram must
   teach the same idea, with the same numbers, as the narration. Chemistry:
   correct formulas, coefficients, charges, states, units and significant
   figures; CPK colours (`ELEMENT_COLORS`); subscripts as Unicode (H₂O).
   Biology: correct structure names, correct process order, and no invented
   mechanisms. If you are unsure about a fact, leave that scene without a
   diagram and say so in the PR.
2. **One idea per diagram.** It should make the scene's key point visible (a
   change, a comparison, a cause, an order), not decorate it.
3. **Time the beats to the narration.** Voiceover runs at about 2.5 words per
   second. Find where the voiceover says the thing and put that beat there
   (frames after `delay`). Keep the whole build inside the scene's
   `durationInFrames`.
4. **Layout.** Nothing is clipped by the viewBox, and nothing overlaps. Text is
   at least 15 viewBox units (about 16 px on the card). Use at most 3 series or
   colours of meaning per diagram.
5. **Colour.** Use `TOK` / `useAccent()`. **Amber is reserved for the single most
   important thing on screen** (the answer, the limiting reagent, the trap).
   Element colours come from `ELEMENT_COLORS`. For the plinth, use `DioramaPlinth` (stone); don't hand-draw grass, soil or tufts.
6. **Never frozen.** Once the main animation ends the scene often has 20+ s of
   narration left. Keep gentle life going with `idleBob` (particles jostle) and
   `idlePulse` (the key highlight breathes). Don't add new information during
   the hold.
7. **Deterministic.** No `Math.random()`, no network, no external images: the same
   frame must always render the same way. Namespace SVG `<defs>` ids with a
   per-component prefix.

## Verifying a module (required before every PR)

```bash
npm ci
npm run check:all                                   # registry + tsc + every lesson JSON
npm run render:previews -- <CompositionId> src/data/<lesson>.json [sceneId ...]
```

`render:previews` writes a muted, half-size MP4 of each scene plus stills at
20 / 50 / 85 % to `out/previews/<CompositionId>/`. **Look at every still
yourself** (layout, clipping, numbers) before showing anyone. The composition id
is in `src/data/lessonRegistry.ts` (for example `Chemistry-Y11-M2-L13`).

Then send the MP4s and stills to Kyle with `SendUserFile` (he reviews on his
phone) and open a **draft PR per module** against `main`, listing each scene you
changed, what the diagram shows, and the facts or numbers you checked.

## Restyle lanes

The existing coded diagrams (`table`, `flow`, `barChart`, `lineGraph`, `venn`,
`beforeAfter` and the chemistry and biology specials) are restyled **in place**
by the restyle lanes. They get the diorama look but keep the **same props and
the same JSON**, so no lesson file changes. Module lanes edit lesson JSON and
their own `kinds/`; restyle lanes edit the existing components. The two never
touch the same file.

## Syllabus

Chemistry Y11 stays live until 2028, so it's the best investment and goes first.
Biology Y11 (old syllabus) is **frozen** ahead of the 2027 change, so don't
touch `biology-y11-*`. Order: Chem Y11 → Chem Y12 → Bio Y12.
