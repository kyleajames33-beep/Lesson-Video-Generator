# Brief 73: error-only check of the on-screen numbers in 11 new videos

Read `00-standing-rules.md` first. Report errors only; do not edit code. These videos are voiced and built, with previews on http://127.0.0.1:8778/ (`Explainer-<id>-preview-v<latest>`). Some on-screen figures were written by the scene builders, not taken from the reviewed designs, so check every number, label and data value drawn in each lesson's `src/explainer/lessons/<folder>/*.tsx` against reliable sources and against its design in `docs/production/claude-pm/lessons/`.

**Check these first:**
- `bio-m5-b13`:
  - The 1000 Genomes bars: SNP sites per genome of 4.31 million (African) and 3.53, 3.55, 3.60 and 3.64 million (other groups). Check them against the phase 3 paper (Nature 2015, Table 1) and correct the labels if needed.
  - The sickle-allele bands and the historical-malaria hatching on the coded world map, against Piel et al. 2010 (Nature Communications). Say which regions are wrong.
  - The 26 sampling-site positions.
  - The UK Biobank figures.
- `bio-m5-g03`: the Kuchenbaecker 2017 figures, the "about 2 in 100" share, the Hardy-Weinberg working, and the drift-simulation labels.
- `bio-m5-g01` and `bio-m5-g02`: every answer on screen (these are computed in code; confirm them).
- `bio-m5-p01`, `bio-m5-p02` and `bio-m5-p03`: the sequences, probabilities and example data.
- `chem-m5-p01` and `chem-m5-p03`: every formula, colour, equation and hazard statement. Check the hazards against public safety data sheets.
- `bio-m5-b11` and `bio-m5-b12`: if their folders exist when you start, check them too.

Write `docs/production/claude-pm/checks/codex-check-73.md`, with one section per lesson. For each error give the file, the line, the wrong value, the correct value and the source. Hand in to `status.md`.
