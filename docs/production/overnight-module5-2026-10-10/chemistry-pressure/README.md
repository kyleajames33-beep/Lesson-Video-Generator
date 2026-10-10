# Chemistry C4A overnight candidate

Focused question: does a rise in gas pressure always shift equilibrium?

The exact accepted eight narration paragraphs are preserved from `docs/production/drafts/module5-next-preparation-2026-10-10/chemistry-c4a/lesson.json`. The candidate changes only the estimated response allowance in lesson JSON: local 360-720, duration 744, so the 24-frame outgoing overlap begins at the declared hold end. This is a 12-second drafting estimate, not a measured speech gap.

The canonical route is `chem-m5-c04`, delivery part C4A. C1/C2/C3 availability precedes release. C4B catalyst behaviour is the next handoff. No catalyst mechanism, constant-pressure inert gas, Q/K calculation or industrial compromise is added. No syllabus investigation or practical completion is claimed.

`Candidate.tsx` is a docs-owned full lesson consumer. `Player.tsx` builds the full silent Remotion Player. `Render.tsx` is its native still entry. These files do not change shared `src` or scripts. The JSON alone does not activate the docs-owned visuals in the normal LessonVideo consumer. Root must deliberately integrate the selected consumer after review.

Inspected library: registered `chem12m5Pressure` in `PressureDiagram.tsx`, CPK `lcMolecules.tsx`, `shared.tsx` AtomDefs, diorama primitives, and existing Module5 clear/rich prototypes. Reuse the useful CPK molecules and piston vocabulary. Do not import the original multi-panel prescribed compression/reaction/count/trace timeline, its V=0.384 example or simultaneous four-molecule gather as an elementary ammonia mechanism. Here all shown reacting molecules stay identical while the piston moves. The schematic particle count and piston displacement are illustrative, not a measured equilibrium trace. Reaction-direction reasoning stays on the accepted separate equation board.

Argon is added at fixed volume and temperature. The reacting amounts remain unchanged. Purple argon circles are labelled; the narration defines inert and partial pressure. No claim says argon never collides. Under the school ideal-gas model, reacting partial pressures and equilibrium position stay unchanged while total pressure rises. Equal gas totals and fixed-temperature K claims retain their model limits.

The inherited equation boards are preserved. Native small-size inspection found the shared summary's explanatory conditions too small and the prompt flattened into a paragraph. Selected stable boards now retain full-size notes, separate task/equation/conditions, and every response demand. Notes are still, without ambient decoration or new reasoning. The invitation and quiet tail still require measured narration review.

Build from repository root:

```powershell
node docs/production/overnight-module5-2026-10-10/chemistry-pressure/build.mjs
node docs/production/overnight-module5-2026-10-10/chemistry-pressure/build.mjs --stills --targeted
node scripts/check-production-brief.mjs docs/production/overnight-module5-2026-10-10/chemistry-pressure/production-brief.json --stage=draft
```

Player: http://127.0.0.1:8778/overnight-chemistry-pressure-2026-10-10/

Evidence is under `out/prototypes/overnight-chemistry-pressure-2026-10-10/`. Final targeted still record binds the exact component and lesson hashes. Earlier same-folder samples prompted correction and are diagnostic unless named in that record. Native stills support sampled layout only. The Player has no narration audio or production captions. Full continuous motion, exact voiced cue alignment, measured silence, caption/device review, human listening, recording-stage approval, export and publication remain pending. No paid narration, video export or public action was performed.
