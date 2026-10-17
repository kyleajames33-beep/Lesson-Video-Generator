# Brief 52: Physics and Maths video feasibility (research only)

Read `00-standing-rules.md` first. The owner may later extend the videos to Physics and Maths. This brief gathers facts only. Claude and the owner decide later.

1. **Site inventory** (read-only) of `C:/Users/kygs/hscscience/subjects/physics/`, `maths/`, `maths-advanced/` (including `extension1`) and `maths-standard/`, plus `maths-question-lesson-map.js`. Record:
   - how many lessons exist per year and module or topic;
   - which are complete and which are placeholders;
   - what each typically contains: worked examples, graphs, derivations, interactive items.
2. **Video needs.** For a sample of 3 Physics lessons and 3 Maths Advanced lessons (pick varied ones), list what a good explainer video would need to show:
   - Physics: vectors and motion diagrams, circuits, fields, waves, graphs, derivations.
   - Maths: step-by-step algebra, graphs of functions, calculus visuals, geometry, statistics charts.

   Note which of these the current engine already has. Look in `src/explainer/kit.tsx`, the lessons in `src/explainer/lessons/` (number lines, fraction builders, ICE tables, graphs), and the legacy engine's `engine3d.ts` (molecule3d and circuit3d) and lineGraph, which can be ported under `docs/production/claude-pm/legacy-engine-policy.md`. State what would need new components.
3. **Market check (brief):** what popular HSC Physics and Maths YouTube channels exist, the length and format of their videos, and any gap HSCScience could fill. Use public information only.

Write `docs/production/programme/physics-maths-feasibility.md` with tables and a short "what it would take" section. Hand in to `status.md`.
