# Brief 39: painted plates for the remaining Module 5 Biology videos (protein synthesis, phenotype, inheritance, populations)

Read `00-standing-rules.md` first. Style as in brief 27:
- transparent PNG with a real alpha channel;
- ink and watercolour textbook plate matching `public/assets/biology/b6a-animal-cell-v1.png` and `b6a-bacterium-v1.png`;
- no text, labels, arrows or numbers;
- at least 1600 px, 8% margin, reads at 200 px.

These videos are not designed yet. The plates are the real organisms and objects they will almost certainly need (owner rule: no basic coded icons for real things). Molecules such as DNA, mRNA, tRNA and amino acid chains will be drawn in code, so do not paint those.

Read the matching site extracts in `docs/production/claude-pm/site-extracts/` (`bio-m5-l13.md` onwards: transcription, translation, protein importance, phenotype, inheritance, populations) so the examples match the site lessons. Where the site uses a specific example, paint that one. Save to `public/assets/biology/`, named `m5x-<name>-v1.png`. Keep matched sets on the same canvas, framing and angle.

1. **Protein synthesis setting**
   - A eukaryotic cell cut-away emphasising the nucleus with its pores, rough endoplasmic reticulum with ribosomes, and free ribosomes in the cytoplasm: `m5x-cell-protein-synthesis`.
   - A single ribosome close-up as a two-subunit body, simple and textbook-like, with no RNA drawn: `m5x-ribosome`.
2. **Proteins at work** (only those the site uses)
   - Red blood cells (haemoglobin): `m5x-red-blood-cells`
   - A strand of hair (keratin): `m5x-hair-strand`
   - A muscle fibre bundle (actin and myosin): `m5x-muscle-fibre`
   - An enzyme acting on a substrate, as a stylised shape, only if the site uses it: `m5x-enzyme-substrate`
3. **Phenotype and inheritance examples** (matched pairs or sets, same canvas)
   - Pea plants, tall and short: `m5x-pea-tall`, `m5x-pea-short`. Pea seeds, round and wrinkled: `m5x-pea-round`, `m5x-pea-wrinkled`.
   - Codominance, shorthorn cattle: red, white and roan: `m5x-cattle-red`, `m5x-cattle-white`, `m5x-cattle-roan`.
   - Incomplete dominance, snapdragon flowers: red, white and pink: `m5x-snapdragon-red`, `m5x-snapdragon-white`, `m5x-snapdragon-pink`.
   - Sex linkage, fruit flies (Drosophila) with red and white eyes, top view, same pose: `m5x-fly-red-eye`, `m5x-fly-white-eye`.
   - Multiple alleles, blood typing: a simple blood-typing tile with four wells showing clumped and smooth samples, with no letters (code adds the labels): `m5x-blood-typing-tile`.
   - Environment and phenotype, hydrangea flowers blue and pink: `m5x-hydrangea-blue`, `m5x-hydrangea-pink`. Only if the site uses this; otherwise pick the site's own environment example.
4. **Populations and technologies** (only those the site uses)
   - A field quadrat on grass with a few plants: `m5x-quadrat`.
   - A cheek swab tube: `m5x-cheek-swab`.
   - A gel electrophoresis tank with a gel, with no band pattern (code draws the bands): `m5x-gel-tank`.

If the site uses a different example for an item, paint the site's example and note the swap. Write provenance to `docs/production/claude-pm/assets/brief39-provenance.json` and QA views to `docs/production/claude-pm/assets/brief39-qa/` (checkerboard, 200 px and set side-by-sides). Append a hand-in to `status.md` with one line per plate.
