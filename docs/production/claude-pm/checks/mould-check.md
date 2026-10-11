# Mould fact and screen check

Checked all nine `voiceover.text` fields in `docs/production/fungi-design-reset-2026-10-11/teaching-reset/measured/lesson.json`, the on-screen strings in `src/explainer/lessons/mould/scenes.tsx`, and all 21 PNGs in `out/explainer/Explainer-bio-m5-mould/stills/`. Compared the lesson with `docs/production/claude-pm/site-extracts/bio-m5-l03.md` and the reproduction definitions in `bio-m5-l01.md`.

Excluded the known phrase in `mould-new-growth` as requested.

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | screen | `mould-new-growth`, `Explainer-bio-m5-mould-f03050.png`: "branches" | The "branches" label is outside the cropped image panel and invisible, while its blue leader line is cut off at the panel's right edge. | Move the label and its leader endpoint inside the image panel. |

Science: None found. Checked the Rhizopus life cycle against [OpenStax, classifications of fungi](https://openstax.org/books/biology-2e/pages/24-2-classifications-of-fungi).

Syllabus and site mismatch: None found.

Copy: None found after the requested exclusion.

Total: 1 finding (0 science, 0 syllabus, 1 screen, 0 copy).
