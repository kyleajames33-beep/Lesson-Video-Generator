# Brief 40: coded-icon audit and replacement plates for the newest lessons

Read `00-standing-rules.md` first. Owner rule: real objects and organisms get painted plates. Code draws only abstract diagrams (graphs, particles, molecules, ICE tables, arrows, number lines). The earlier audit is `docs/production/claude-pm/assets/coded-icon-audit.md`; continue it.

Audit these lessons, which were built on 15 October:
- `src/explainer/lessons/chem-m5-c06a`
- `chem-m5-c06b`
- `chem-m5-c09`
- `chem-m5-g03a`
- `chem-m5-g03b`
- `bio-m5-b06a`

Read each lesson's `parts.tsx`, `shared.tsx`, `common.tsx`, `types.tsx`, `board.tsx` and scene files. If they exist, look at the rendered stills in `out/explainer/<id>/stills/`. Do not render anything yourself.

1. List every coded drawing of a real object, apparatus or organism. Examples to look for:
   - in C9: the ice cubes, the hot-water and ice baths, the beaker, the thermometer, the flame;
   - in C6a: the flask or tube outlines;
   - in G03a and G03b: the vessels;
   - in B6a: the tennis ball, a magnifying glass, any coded cell.

   For each, record: lesson, file and line, what it is, how basic it looks, and whether an existing painted plate in `public/assets` could replace it. Search the folder and `docs/production/claude-pm/assets/*provenance*.json`.
2. Paint replacements for the items with no existing plate, up to about 12. Use the style rules of brief 27: transparent PNG, ink and watercolour, no text, at least 1600 px, 8% margin. Name them `<lesson>-<item>-v1.png` in `public/assets/chemistry/` or `public/assets/biology/`. Where a coded item sits over a plate (for example ice cubes in a beaker of water), paint it to fit that plate: same angle and scale, and a separate layer where useful.
3. Do not edit any code. Add a "## 15 Oct audit (brief 40)" section to `coded-icon-audit.md` with a table:

   | lesson | file:line | coded item | replacement file (existing or new) | how to place it |

   Claude wires the plates in.

Write provenance to `docs/production/claude-pm/assets/brief40-provenance.json` and QA views to `docs/production/claude-pm/assets/brief40-qa/`. Append a hand-in to `status.md`.
