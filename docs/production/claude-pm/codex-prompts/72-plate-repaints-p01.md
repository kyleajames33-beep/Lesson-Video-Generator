# Brief 72: two plate repaints for Chemistry P01

Read `00-standing-rules.md` first. Use the same style and rules as brief 64.

1. **`public/assets/chemistry/p01-iron-tube-diluted-v1.png` is wrong.** Its liquid reads deeper and more salmon than the stock iron thiocyanate tube. It should be *very slightly paler*. Paint `p01-iron-tube-diluted-v2.png`:
   - the same tube, canvas and alignment as the C3 stock tube `c3-iron-tube-start-v1.png`;
   - the same red hue, a little lighter;
   - a slightly higher liquid level, because water was added.
   Include a 50% overlay against the stock tube in the QA views.
2. **The Bunsen pair is painted at different scales,** so the unlit and lit burners can't crossfade. Repaint them as an aligned pair, `p01-bunsen-unlit-v2.png` and `p01-bunsen-lit-v2.png`:
   - identical burner geometry on one canvas;
   - only the flame differs: a blue cone with the air hole open.
   Include an overlay view in the QA views.

Write the provenance to `docs/production/claude-pm/assets/brief72-provenance.json` and the QA views to `docs/production/claude-pm/assets/brief72-qa/`. Hand in to `status.md`.
