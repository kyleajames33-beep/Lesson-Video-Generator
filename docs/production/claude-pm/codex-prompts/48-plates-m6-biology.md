# Brief 48: painted plate library for Year 12 Biology Module 6 (genetic change)

Read `00-standing-rules.md` first. Style as in brief 27:
- transparent PNG with a real alpha channel;
- ink and watercolour textbook plate matching `public/assets/biology/b6a-animal-cell-v1.png`;
- no text, labels or numbers;
- at least 1600 px, 8% margin, reads at 200 px.

Molecules (DNA, chromosomes as diagrams, base sequences) are drawn in code, so paint only real organisms, objects and settings. Check the Module 6 site extracts (`docs/production/claude-pm/site-extracts/bio-m6-*.md`) and paint the site's examples first. Save to `public/assets/biology/`, named `m6-<name>-v1.png`, with matched sets on one canvas.

1. **Mutagens.** Sun with UV rays shown as soft light, not text; an X-ray machine and film; a radioactive source in a lead container (plain, no warning text); cigarette smoke as a plain stylised object, only if the site uses it; a virus particle in textbook style.
2. **Mutation effects,** only examples the site uses: for example a white and normal-coloured animal pair (albinism), red blood cells normal and sickled (matched), a clover or flower colour variant.
3. **Reproductive technologies:** a petri dish with an egg and sperm under a microscope view; a microscope; a pipette injecting a cell (ICSI) as a simple textbook view; an artificial insemination straw and tank (plain).
4. **Cloning:** Dolly-style sheep (any white sheep, no likeness of a specific photo); a plant cutting in a pot (matched pair: cutting, then rooted plant); tissue culture jars with plantlets.
5. **Genetic engineering:**
   - bacterium with a plasmid as a textbook organism view;
   - Bt cotton plant;
   - Golden rice grains next to white rice (matched);
   - a GM salmon next to a normal salmon (matched, same pose), only if the site uses it;
   - an insulin vial (plain, no label text).
6. **Biodiversity:** a field of a single crop (monoculture) and a mixed native field (matched pair); a seed bank vault interior (simple).
7. **Process-clip pairs** (aligned start and end, see `35-process-clip-plate-pairs.md`): a plant cutting growing roots in water; a bacterium taking up a plasmid (plasmid outside the cell, then inside).

Write provenance to `docs/production/claude-pm/assets/brief48-provenance.json` and QA views to `docs/production/claude-pm/assets/brief48-qa/`. Hand in to `status.md` with one line per plate. If the site uses a different example, paint the site's and note the swap.
