# y11b-v03 science check

Revision 1, reviewed 1 November 2026. Design SHA256 `19e2af11a23bfc04a2eac79f69e272209bcd770ca10e07131354bcfe1a623c9c`. Written narration, visuals, questions, route, root decisions and current site source inspected. No stills, continuous build or audio reviewed. Human listening remains pending.

## Exact 2025 syllabus

- Local route ID `B25-FA1-G1-04`, official CMS codename `ci220db32e`: Contrast the cell structure and organelles of plant and animal cells based on the function of the cell
  Fresh official source (1 November 2026): https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c

Exact source HTML is retained in `work/brief138/bio-official.json`. Local B25 IDs are project aliases, not NESA published content codes.

## Findings

1. **Should fix:** Scene 3 says plant cells add chloroplasts, and notes/stops say chloroplasts occur “only in cells that get light”. Light exposure alone does not specify chloroplast presence: many illuminated epidermal cells lack them, and the intended contrast is a photosynthetic leaf cell versus a non-photosynthetic root cell. Replace the introductory list with “the leaf cell adds ...” and the notes qualifier with “photosynthetic cells, such as leaf mesophyll”. Keep the root example scoped to the underground cell shown. Length-neutral replacements.

2. **Should fix:** Scene 10 sends a glucose chip into a mitochondrion, and 12b says the root respires “glucose sent from the leaves”. The main transported sugar is usually sucrose; glucose is processed first in the cytosol. Replace the answer phrase with “sugars from the leaves” and show energy from glucose breakdown reaching the mitochondrion, as in the v02 repair. Keep the day/night energy contrast. No extra time.

## Confirmed checks and sources

The cellulose wall, central vacuole and turgor explanation is sound for the living leaf/root examples. Turgor loss can cause reversible wilting in non-woody tissue; “often within a few hours” is an illustrative recovery statement, not a guaranteed rate. Cellulose is built from glucose units. Macrophage engulfment is a valid example of a flexible animal-cell boundary; it does not imply every animal cell engulfs. Plant mitochondria operate in light and dark; the kitchen/furnace aid must remain about the photosynthetic cell shown rather than every plant cell. Underground root cells generally lack chloroplasts, supporting the stated prediction. The attempt asks plant versus animal, so a cellulose wall and large central vacuole support the plant answer without claiming they identify every taxon in biology.

Sources: [NCBI plant cell walls](https://www.ncbi.nlm.nih.gov/books/NBK26928/), [OpenStax water and solute transport](https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants), [OpenStax eukaryotic cells](https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells). Site claims about universally present chloroplasts, the vacuole digestion distractor and the asserted evolutionary skeleton cause are retained for the site log; the normal animal-cell lysosome/centriole comparison is not itself an error that requires an added exception lecture.

Count: 0 blockers, 2 should fix, 0 optional. Narration recount 5,799 characters; design estimate about 563 seconds. No design edits, speech, renders or commits.
