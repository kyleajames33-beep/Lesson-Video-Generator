# Brief 64: plates for P01, P03, B11 and B12

Read `00-standing-rules.md` first. Style as in brief 38:
- transparent PNG with a real alpha channel;
- ink and watercolour, matching the existing m5x and m6 apparatus plates;
- no text, labels, scale numbers or logos;
- at least 1600 px, 8% margin, reads at 200 px.

**No people, hands or faces;** apparatus only. The designs are `docs/production/claude-pm/lessons/chem-m5-p01.md`, `chem-m5-p03.md`, `bio-m5-b11.md` and `bio-m5-b12.md`: read each one's "Codex asset brief" section for exact framing.

**Chemistry practicals, `public/assets/chemistry/`:**
1. A cobalt chloride crystal tube, pink then blue (aligned pair: `m5x-cobalt-crystals-pink-v1`, `-blue-v1`).
2. A Bunsen burner, unlit and lit (aligned pair).
3. Magnesium ribbon and magnesium oxide ash (white powder) in an evaporating dish.
4. A clear, empty dropper.
5. Overlays matching the C3 iron thiocyanate tube exactly: a faded iron tube with a brown precipitate, and a slightly diluted iron tube.
6. A rubber stopper.
7. Safety set, one plate each: safety glasses, a pair of gloves (lying flat, no hands), a labelled-shape waste bottle with a blank label, a test tube holder.
8. For P03: a top-down 48-well plate on a black card, plus the same plate on a white tile. Record the well-centre pixel grid in the provenance file. Also a blank-label dropper bottle.

Also confirm the NSW school chemical category for cobalt chloride, lead nitrate and barium nitrate from an official source (NSW Department of Education chemical safety guidance). Record it in the provenance file; do not change the designs.

**Biology, `public/assets/biology/`:**
9. `m5x-cheek-swab-v2`: as v1, but remove the stray specks between the swab and the tube.
10. `m5x-gel-tank-v2`: the v1 plate is physically wrong, because the row of wells runs along the line between the electrodes. Repaint it with the wells as a row across one end, near the negative (black) electrode, so DNA runs away from the wells towards the positive (red) end. Show an empty gel with no bands; code draws the bands.

Write provenance to `docs/production/claude-pm/assets/brief64-provenance.json` and QA views to `docs/production/claude-pm/assets/brief64-qa/` (checkerboard, 200 px and pair overlays). Hand in to `status.md`.
