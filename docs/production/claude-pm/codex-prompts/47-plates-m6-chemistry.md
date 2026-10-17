# Brief 47: painted plate library for Year 12 Chemistry Module 6 (acids and bases)

Read `00-standing-rules.md` first. Style as in brief 27:
- transparent PNG with a real alpha channel;
- ink and watercolour textbook plate matching `public/assets/chemistry/c9-no2-tube-brown-v1.png`;
- no text, labels, scale markings with numbers, or logos;
- at least 1600 px, 8% margin, reads at 200 px.

Paint the real apparatus and objects Module 6 videos will need, ahead of design. Check the Module 6 site extracts (`docs/production/claude-pm/site-extracts/chem-m6-*.md`) and paint what the site uses. Save to `public/assets/chemistry/`, named `m6-<name>-v1.png`. Keep matched sets on the same canvas, angle and scale.

1. **Titration set**, each separate but to one scale: burette in a clamp stand, volumetric pipette with a pipette filler, conical flask, volumetric flask, wash bottle, white tile, beaker, funnel.
2. **Indicator colour sets.** Matched conical flasks on one canvas:
   - phenolphthalein: colourless, then faint pink at the end point, then deep pink when overshot;
   - methyl orange: red, orange, yellow;
   - bromothymol blue: yellow, green, blue;
   - universal indicator: one flask for each of pH 1, 4, 7, 10 and 13 as plain colours (no numbers; code adds labels).
3. **pH measurement:** a pH meter with a probe in a beaker, with a blank screen (code writes the reading). A strip of universal indicator paper, plus a blank colour chart card with colour squares only.
4. **Everyday acids and bases:** lemon, vinegar bottle (no label text), baking soda box (plain, no brand), antacid tablets, household cleaner bottle (plain), soap bar, an ant (formic acid), a bee or wasp sting close-up (only if the site uses it).
5. **Conductometric titration:** a conductivity meter with a probe in a beaker on a stirrer, blank display.
6. **Process-clip pairs**, matched start and end on the same canvas (see `35-process-clip-plate-pairs.md` for the exact alignment rules):
   - a conical flask going colourless to faint pink at the end point, phenolphthalein;
   - a beaker of red cabbage indicator turning from purple to green as base is added;
   - a sherbet or baking soda and vinegar fizz, before and after the bubbles.

Write provenance to `docs/production/claude-pm/assets/brief47-provenance.json` and QA views to `docs/production/claude-pm/assets/brief47-qa/` (checkerboard, 200 px, set side-by-sides, and an overlay check for the clip pairs). Hand in to `status.md` with one line per plate.
