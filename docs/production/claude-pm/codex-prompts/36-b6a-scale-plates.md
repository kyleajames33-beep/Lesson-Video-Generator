# Brief 36: B6a scale plates (tennis ball and the long walk)

Read `00-standing-rules.md` first. Follow the style rules of brief 27 (`27-painted-icon-pack.md`):
- transparent PNG with a real alpha channel;
- ink and watercolour textbook plate matching `public/assets/biology/b6a-bacterium-v1.png` and `b6a-animal-cell-v1.png`;
- no text, labels, arrows or numbers;
- reads clearly at 200 px.

B6a opens with a scale comparison (design: `docs/production/claude-pm/lessons/bio-m5-b06a.md`, the hook and author note on scale). If a cell's nucleus were blown up to the size of a tennis ball, its unwound DNA thread would be more than ten kilometres long. The video currently draws both with basic coded shapes. Paint:

1. **`public/assets/biology/b6a-tennis-ball-v1.png`**
   - One tennis ball: yellow-green felt texture and its white curved seam.
   - Seen slightly from above, with a soft contact shadow.
   - At least 1600 px, 8% margin.
2. **`public/assets/biology/b6a-long-walk-strip-v1.png`**
   - A very wide horizontal strip, about 4000 x 800 px, showing a long walk of about ten kilometres seen from slightly above, like an illustrated map.
   - A winding road or footpath runs from the far left edge to the far right edge.
   - Small, recognisable landmarks along it, in order from left to right: a house at the start, a park with trees, a few shops, a sports oval, a river with a small bridge, a hill, a town in the distance near the right end.
   - Keep the far left end clear and quiet, because the coded tennis ball and a plum DNA thread will be drawn over the start of the path.
   - Calm and uncluttered, with no people, cars or signs.
   - Make the left 1920 px also work as a crop on its own; the video pans along it.

Write provenance to `docs/production/claude-pm/assets/brief36-provenance.json`. Put QA views in `docs/production/claude-pm/assets/brief36-qa/`: a checkerboard view of each, a 200 px view of each, and the strip shown at 1920 px wide in three crops (left, middle, right). Append a hand-in to `status.md`.
