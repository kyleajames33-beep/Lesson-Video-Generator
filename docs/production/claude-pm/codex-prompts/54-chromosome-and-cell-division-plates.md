# Brief 54: chromosome and cell-division plates (B5a mitosis, B5b meiosis)

Read `00-standing-rules.md` first. Style as in brief 27:
- transparent PNG with a real alpha channel;
- ink and watercolour biology textbook plate matching `public/assets/biology/b6a-animal-cell-v1.png`;
- no text, labels or numbers;
- at least 1600 px, 8% margin, reads at 200 px.

The owner said the coded chromosome drawings in B5a (`src/explainer/lessons/bio-m5-b05a`) are not good enough: a zigzag inside a capsule, and plain X shapes in a bare ellipse cell. Paint textbook-quality replacements. Keep each item on its own canvas, with matched items on the same canvas size and scale, so code can place, count, colour-label and move them. Save to `public/assets/biology/`.

1. `b5x-chromosome-single-v1.png`: one unreplicated chromosome. A single condensed rod with a visible centromere constriction, fine coiled texture, soft purple.
2. `b5x-chromosome-duplicated-v1.png`: the same chromosome after copying. Two identical sister chromatids joined at the centromere (the classic X shape), same colour and scale as item 1.
3. `b5x-chromosome-pair-v1.png`: a homologous pair side by side. Each is duplicated; one is pink-magenta (from one parent) and one is teal-blue (from the other). Same size and centromere position, slightly different banding.
4. Matching colour variants of items 1 and 2: `b5x-chromosome-single-pink-v1.png`, `b5x-chromosome-single-teal-v1.png`, `b5x-chromosome-duplicated-pink-v1.png` and `b5x-chromosome-duplicated-teal-v1.png`. They must be identical in shape to the purple versions, so code can swap colours.
5. `b5x-cell-dividing-v1.png`: an empty animal cell for division scenes. Round membrane, pale cytoplasm, a centrosome at each pole, and faint spindle fibres from pole to pole, with no chromosomes drawn (code places them). Also `b5x-cell-dividing-nospindle-v1.png`, the same cell without spindle fibres, on the same canvas.
6. `b5x-cell-pinching-v1.png`: the same cell pinching in at the middle (cytokinesis), same canvas, also with no chromosomes.
7. Zoom-out strip for a recall (molecules to chromosome), five separate plates on matching canvases:
   - `b5x-zoom-bases-v1.png`: a few base pairs as rungs with sugar-phosphate rails, stylised, no letters;
   - `b5x-zoom-helix-v1.png`: a short double helix;
   - `b5x-zoom-nucleosomes-v1.png`: DNA wound on histone beads, like beads on a string;
   - `b5x-zoom-fibre-v1.png`: a coiled chromatin fibre;
   - `b5x-zoom-chromosome-v1.png`: matching item 2.

   Each plate should read as the next magnification of the one before.

Write provenance to `docs/production/claude-pm/assets/brief54-provenance.json` and QA views to `docs/production/claude-pm/assets/brief54-qa/`: a checkerboard view, a 200 px view, the colour variants side by side, and the five zoom plates in a row. Hand in to `status.md`.
