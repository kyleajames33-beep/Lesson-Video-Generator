# Brief 31: painted plates for C7, C8, B5a and B5b

Read `00-standing-rules.md` first, then follow the style rules of brief 27 (`27-painted-icon-pack.md`): transparent PNG with a real alpha channel, ink and watercolour textbook plate matching the existing plates named below, no text, labels or numbers, at least 1600 px on the long side, 8% margin, must read clearly at 150 to 200 px; aligned sets (same canvas, shared object does not move) where a scene changes state; separate parts where the code must move a piece.

These lessons are built and reviewed; the plates replace basic coded drawings that the independent reviewers flagged. Each review lists the plate, the scene and its on-screen size under SHOULD FIX: read the review first and make exactly what it describes.

1. C7, industrial equilibrium (Haber), `docs/production/claude-pm/checks/c7-voiced-review.md`; match `public/assets/chemistry/c7-haber-converter-v1.png`: reactor vessel, condenser cooler, liquid ammonia tank, compressor pump, iron catalyst pellets, thick steel reactor wall (cutaway), gas flame (heating), pipe leak (if the review asks). Name files `c7-<thing>-v1.png`.
2. C8, reaction quotient, `checks/c8-voiced-review.md`; match `public/assets/chemistry/c3-iron-tube-start-v1.png`: hot sealed HI tube (with faint violet iodine), thermometer, stopwatch, round-bottom flasks. Names `c8-<thing>-v1.png`.
3. B5a, mitosis, `checks/b5a-voiced-review.md`; match `public/assets/biology/b5a-skin-graze-v1.png`: `b5a-epithelium-shedding-v1.png` (skin surface cells flaking off, new cells beneath) and `b5a-plant-cell-plate-v1.png` (a dividing plant cell with the cell plate forming between two nuclei, no chromosomes drawn). Also a higher-resolution or tighter crop of the skin graze if the review says the hook zoom is pixelated (`b5a-skin-graze-closeup-v1.png`, aligned with the original's wound).
4. B5b, meiosis, `checks/b5b-voiced-review.md`; match `public/assets/biology/b5b-brothers-v1.png`: `b5b-parents-v1.png` (the brothers' two parents, same painterly style and family resemblance, side by side).

Provenance: `docs/production/claude-pm/assets/brief31-provenance.json`; QA images in `docs/production/claude-pm/assets/brief31-qa/` (checkerboard and 200 px views, aligned-set overlays). Append a hand-in to `status.md`.
