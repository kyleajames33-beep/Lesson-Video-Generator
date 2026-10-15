# Legacy slide engine policy (owner decision, 16 October 2026)

**Scope:** the old slide engine.
- `src/LessonVideo.tsx`
- `src/slides/` (including `diagrams/kinds/` and `diagrams/dioramaKinds/`)
- `src/animations/`
- the older `src/prototypes/`

All new Module 5 and later videos are built on the explainer engine in `src/explainer/`, which imports nothing from these folders. The only shared file is `src/styles/tokens.ts`.

## The rule

1. **Frozen, read-only legacy.**
   - Do not edit, restyle or delete the legacy engine.
   - Do not build new videos on it.
   - Files in it with someone else's uncommitted edits stay untouched.
2. **Port useful pieces when a lesson needs them.**
   - Copy the logic: the pure calculation or model functions, such as the codon table, Punnett cross, Q gauge, dilution and Ksp ratios, pH and drift.
   - Put the logic in the lesson folder or in the shared `src/explainer/` code, then redraw it in the explainer style: paper look, painted plates, kit motion.
   - Do not import legacy components into explainer lessons.
   - Check any ported logic against the science before use.
   - The ranked list of what is worth porting, and what must not be copied, is `docs/production/claude-pm/research/old-engine-ideas-audit.md`.
3. **Archive later, only with the owner's OK.**
   - Archiving means a tagged git snapshot, then removal from the working tree.
   - It can happen only after these three are switched over to the explainer engine or retired:
     - the six older Year 11 videos built on `LessonVideo`;
     - Remotion Studio (`src/Root.tsx`) and the `test:source` suite;
     - the release gate `scripts/render-release.mjs`.
   - Ask the owner before archiving, even once all three are done.

## How to apply

- When designing a new video, check the audit's ranked list for an idea that fits the topic.
- Port only the logic, and note in the design what was ported and from which file.
