# p-y11-fa2-v02: physics check

Reviewed Revision 1 on 3 November 2026. Design SHA256 `59bb840e3cad452515e80a95f4a91cbdae03fd1308bbca320953d3b86b9e5895`. Written design and site source only; no built frames or audio. Narration recount 6,222 characters in separate scenes (6,239 with joining spaces); stated duration about 569 s. Per-scene counts: 291, 392, 435, 432, 425, 435, 93, 487, 476, 324, 470, 388, 281, 347, 244, 356, 271, 75.

## Official 2025 syllabus

- `cib47003d0`: "Conduct a practical investigation to model the oscillation of particles in transverse waves and longitudinal waves and relate to the direction of energy transfer". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief156/syllabus-validation.json`.

## Recalculation and source comparison

Python `work/brief156/v02-calculations.py` verifies the means 15, 12, 2/3 and 1/3 cm, 2 cm ranges, 1 cm half-ranges, 1/120 s = 8.33 ms, and 30 frames = 0.25 s. Arithmetic ratios are 22.5 and 18 but the denominator is unresolved at the stated precision. The scene labels generated values illustrative. The site activity asks learners to use the spring in both directions; the added numerical series is original. A stretched spring stores energy, the floor assembly presents a trip hazard, and an oscillating rope can strike; controls are reasonable. The official NSW Department of Education science-safety page requires a local risk assessment, but does not specifically validate this apparatus setup: https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance. No physical trial or full safety approval is implied.

## Findings

1. **Should fix:** The camera field of view does not contain the far marker or both outer measurement sites. Use a second camera or separately reposition it and repeat the run before claiming those data were observed.

2. **Should fix:** A ratio using a near-zero denominator is not established by measurements at ±1 cm. Remove the quantitative >15:1 inference and describe the transverse component as dominant within reading uncertainty.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.

### Working scientifically actions, fresh official source

Fresh official [Working scientifically page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2), full action text in `work/brief156/fa0.json`:

- `cicf26d204`: “Use observations and scientific knowledge and understanding to propose questions and hypotheses for scientific investigations involving primary and secondary data”.
- `ci752a2a2f`: “Use equipment appropriately and systematically to collect and record data, information, evidence and findings”.
- `ci0fca96de`: “Select and use a range of representations to organise data and information, including graphs, keys, models, diagrams, tables and spreadsheets”.
- `cibc9c30ac`: “Use modelling and cause-and-effect relationships, including mathematical examples, to make predictions, explain phenomena, and solve problems”.
- `cif90164e3`: “Assess potential hazards and their associated risks to develop a risk assessment”.
