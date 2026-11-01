# y11b-v02 science check

Revision 1, reviewed 1 November 2026. Design SHA256 `4790f703d9f1e445dc511e85884096390fe7cb6377d369504b7d6e50daa702ed`. Written narration, visuals, questions, route, root decisions and current site source inspected. No stills, continuous build or audio reviewed. Human listening remains pending.

## Exact 2025 syllabus

- Local route ID `B25-FA1-G1-05`, official CMS codename `ci7043d3b2`: Describe the structure and function of the cell wall, cell membrane, cytoplasm, nucleus, mitochondria, chloroplast, endoplasmic reticulum, Golgi body, ribosomes, lysosomes and vacuoles in eukaryotic cells
  Fresh official source (1 November 2026): https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c

Exact source HTML is retained in `work/brief138/bio-official.json`. Local B25 IDs are project aliases, not NESA published content codes.

## Findings

1. **Should fix:** Scene 8 shows a glucose token entering the mitochondrion. Glycolysis processes glucose in the cytosol; pyruvate-derived material enters mitochondrial oxidation. The narration’s broad energy-transfer summary can stay, but replace the entering glucose molecule with an energy-from-glucose flow from the cytoplasm, or a clearly named breakdown-product token. Do not add a glycolysis lecture. This is a visual replacement and adds no time.

2. **Should fix:** Scene 11 and its callout say chloroplasts have “two outer membranes”. The envelope consists of an outer and an inner membrane, not two outer membranes. Replace speech and label with “a double-membrane envelope”. Keep the internal thylakoid membranes separate. Length-neutral replacement.

## Confirmed checks and sources

All eleven syllabus structures have a structure and function in the plan. Ribosomes synthesise the exported protein, rough ER supports folding and processing, Golgi modifies/sorts it, and vesicles deliver it to the membrane. Nuclear pores and the nuclear-envelope/ER connection are correct. The blocked-Golgi answer is valid for the initial response with other steps continuing; do not imply it describes unlimited steady synthesis after long-term feedback. The protein is explicitly exported, so the secretory pathway is appropriate rather than a universal path for all proteins. Smooth ER lipid synthesis/detoxification, lysosomal digestion, vacuolar storage/turgor and chlorophyll-containing thylakoids are sound. The membrane isolates lysosomal enzymes; adding acidic-pH detail is not necessary to answer the current structure/function question. Preserve the accepted membrane glimpse and the split-at-scene-8 decision only if the revised voiced duration exceeds about 590 seconds.

Sources: [NCBI ER and protein secretion](https://www.ncbi.nlm.nih.gov/books/NBK9889/), [NCBI protein sorting](https://www.ncbi.nlm.nih.gov/books/NBK9897/), [NCBI lysosomes](https://www.ncbi.nlm.nih.gov/books/NBK9953/). The site’s shorthand that rough ER synthesises proteins is not, by itself, a false organelle-level statement: attached ribosomes perform translation. Log a precision clarification where needed, not a blanket rejection of “rough ER protein synthesis”. The stolen-chloroplast sea-slug exception does not need a learner detour in this typical plant/animal comparison; “plant cells and algae” is suitable wording.

Count: 0 blockers, 2 should fix, 0 optional. Narration recount 5,963 characters; design estimate about 565 seconds. No design edits, speech, renders or commits.
