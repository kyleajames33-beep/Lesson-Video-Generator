# Brief 59: plates for B7, B8, C11 and C13

Read `00-standing-rules.md` first. Style as in brief 39:
- transparent PNG with a real alpha channel;
- ink and watercolour, matching `public/assets/biology/m5x-pea-round-v1.png` and the B2b plates;
- no text or labels;
- at least 1600 px, 8% margin, reads at 200 px.

The designs are `docs/production/claude-pm/lessons/bio-m5-b07.md` and `bio-m5-b08.md` (see their Codex asset brief sections).

1. `public/assets/biology/m5x-rabbit-himalayan-v1.png`: a Himalayan rabbit, side view, sitting. White body with dark (near black) ears, nose, feet and tail.
2. `public/assets/biology/m5x-rabbit-himalayan-patch-v1.png`: the same rabbit on the same canvas and in the same pose, with a small patch on its white back where the fur has regrown dark. This is the classic ice-pack experiment: the regrown patch matches the dark points.
3. **Pea pod check:** `b2b-pod-seeds-v1.png` (or the pod plate B8 uses) may have a dark, non-transparent background. Check its alpha channel. If it isn't truly transparent, make `b2b-pod-seeds-v2.png` on the same canvas and framing, with real transparency.

4. **C11 (`docs/production/claude-pm/lessons/chem-m5-c11.md`), in `public/assets/chemistry/`:**
   - `m5x-thermometer-cold-v1.png`: a thermometer in a beaker showing a low reading (the liquid column is short and blue-tinted, with no scale numbers). It should match the style of `c8-thermometer-hot`.
   - `m5x-hot-pack-v1.png` and `m5x-cold-pack-v1.png`: plain instant hot and cold packs (soft pouches, no text or brand). The hot one has a faint warm glow; the cold one has frost.
5. **C13 (`chem-m5-c13.md`):** `m5x-ppt-baso4-white-v1.png`, a test tube in the same rack, framing and canvas as `m5x-ppt-agcl-white-v1.png`. It holds a fine, milky white barium sulfate precipitate settling slowly (smoother and milkier than curdy silver chloride).

Write provenance to `docs/production/claude-pm/assets/brief59-provenance.json`, put QA views (checkerboard and 200 px, plus an overlay of items 1 and 2) in `docs/production/claude-pm/assets/brief59-qa/`, and hand in to `status.md`.
