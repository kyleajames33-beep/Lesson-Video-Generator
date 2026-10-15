# Brief 38: painted plates for the remaining Module 5 Chemistry videos (colourimetry, acids, solubility, Ksp)

Read `00-standing-rules.md` first. Follow the style rules of brief 27 (`27-painted-icon-pack.md`):
- transparent PNG with a real alpha channel;
- ink and watercolour textbook plate matching `public/assets/chemistry/c9-no2-tube-brown-v1.png` and `c8-pressure-vessel-v1.png`;
- no text, labels, arrows, numbers or logos;
- at least 1600 px on the long side, 8% margin, reads clearly at 200 px.

These videos are not designed yet. The plates cover the real objects they will almost certainly need, so Claude can design around real art and avoid basic coded icons (owner rule). Read the site extracts first so the objects match what the site lessons use:
- `docs/production/claude-pm/site-extracts/chem-m5-l13.md` (colourimetry)
- `chem-m5-l14.md` (Ka and Kb)
- `chem-m5-l15.md` (dissolution and Aboriginal and Torres Strait Islander knowledge)
- `chem-m5-l16.md` (solubility rules and precipitation)
- `chem-m5-l17.md` (Ksp)
- `chem-m5-l18.md` (Qsp and the common ion effect)

Save everything to `public/assets/chemistry/`, named `m5x-<name>-v1.png`. Where items are a set, keep the same glassware, angle and canvas so they can sit side by side.

1. **Colourimetry**
   - A simple school colourimeter or spectrophotometer with its lid open: `m5x-colourimeter`.
   - A set of 5 matching cuvettes from pale to deep red-orange, the same colour family as iron thiocyanate: `m5x-cuvette-1` to `m5x-cuvette-5`, one PNG each, same canvas.
   - One unknown cuvette at a middle shade: `m5x-cuvette-unknown`.
2. **Acids**
   - Two matching beakers of clear solution, one labelled by colour only: a strong acid with a vigorous stream of bubbles on a magnesium ribbon, and a weak acid of the same concentration with only a few slow bubbles: `m5x-strong-acid-mg`, `m5x-weak-acid-mg`.
   - Vinegar in a plain glass bottle (no brand, no label text): `m5x-vinegar-bottle`.
3. **Dissolution and solubility**
   - Salt crystals dissolving in a beaker of water, some crystals still on the bottom (a saturated solution with undissolved solid): `m5x-saturated-beaker`.
   - A matching beaker where everything has dissolved: `m5x-unsaturated-beaker`.
   - A limestone cave with stalactites and stalagmites, a small, calm scene: `m5x-limestone-cave`.
   - A kidney stone cut-away beside a coin for scale (no text on the coin, a plain disc): `m5x-kidney-stone`.
   - A hospital barium meal: a glass of thick white barium sulfate suspension: `m5x-barium-meal-glass`.
4. **Precipitation set**
   Matching test tubes in a rack, each with a precipitate settling at the bottom under clear liquid:
   - white silver chloride: `m5x-ppt-agcl-white`
   - bright yellow lead(II) iodide: `m5x-ppt-pbi2-yellow`
   - pale blue copper(II) hydroxide: `m5x-ppt-cuoh2-blue`
   - rusty brown iron(III) hydroxide: `m5x-ppt-feoh3-brown`

   Also a matching tube with two clear colourless solutions just poured together and no precipitate: `m5x-no-ppt-clear`.
5. **Aboriginal and Torres Strait Islander knowledge of solubility** (site lesson 15)
   - Use only what the site extract describes. Before painting, read it and check reputable, preferably Indigenous-led or museum sources.
   - Paint respectful object and landscape plates only: no people, no faces, no sacred or ceremonial items, no dot-painting imitation.
   - Likely items, if the extract supports them:
     - cycad (Macrozamia) seeds or kernels soaking in a woven dilly bag or container in running fresh water, to remove a water-soluble toxin;
     - the cycad plant itself.
   - Write a short note in the provenance file: what each plate depicts, the sources, and anything the video must say or avoid (for example naming the specific Nations or region the practice belongs to, and not presenting it as historical only).
   - If the extract does not support a specific practice, paint nothing for this item and say why.

Write provenance to `docs/production/claude-pm/assets/brief38-provenance.json`. Put QA views in `docs/production/claude-pm/assets/brief38-qa/`: a checkerboard and a 200 px view of each, plus a side-by-side of each set. Append a hand-in to `status.md` with one line per plate.
