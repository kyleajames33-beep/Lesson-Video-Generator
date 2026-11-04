# p-y11-fa2-v12: physics check

Reviewed Revision 1 on 3 November 2026. Design SHA256 `a2f8882abbd94583fab67cdf44dea6512afad7080b3bed259172e8b94e995411`. Written design and site source only; no built frames or audio. Narration recount 5,957 characters in separate scenes (5,974 with joining spaces); stated duration about 549 s. Per-scene counts: 232, 410, 368, 366, 384, 350, 323, 356, 533, 307, 376, 284, 354, 291, 354, 361, 233, 75.

## Official 2025 syllabus

- `cie7db48b6`: "Conduct a practical investigation to demonstrate how frequency and amplitude relate to the energy of a sound wave". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief156/syllabus-validation.json`.

## Recalculation and source comparison

Python `work/brief156/v12-calculations.py` verifies level differences 6.02, 9.54 and 12.04 dB, ratios 1, 3.981, 8.913 and 15.849, origin gradient 0.991, background addition 0.0069 dB and three inferred displacement amplitudes about 5.6e-8 m. Results are illustrative and the fixed-pressure versus fixed-displacement predictions are correct for the stated ideal progressive sound wave. Source energy caveat already logged. The official school guidance calls for an activity-specific risk assessment; occupational 85 dB(A) over 8 h is not a classroom safety guarantee: https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance and https://www.safeworkaustralia.gov.au/safety-topic/hazards/noise. No actual listening or measurement was conducted.

## Findings

1. **Should fix:** A sound-level meter measures sound pressure level; converting it to local intensity requires a progressive-wave impedance assumption and weak reflections. Scene 3 should state that the level tracks the modelled intensity under those conditions, rather than measuring energy directly. Same-swing control inferred from pressure using p=ρvu makes the frequency comparison model-dependent, not an independent verification. Keep that limitation explicit and use a pressure/velocity probe or independent displacement measurement as an improvement.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.

### Working scientifically actions, fresh official source

The fresh [official Working scientifically page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2) supplies the following (`work/brief156/fa0-v12.json`):

- `cibc9c30ac`: “Use modelling and cause-and-effect relationships, including mathematical examples, to make predictions, explain phenomena, and solve problems”.
- `ci1ba1d4e1`: “Select appropriate materials and technologies to design a scientific investigation”.
- `ci15366d75`: “Assess the validity, reliability, accuracy and precision of data and information”.
- `ci7f1f6fbd`: “Describe qualitative and quantitative relationships between variables”.
- `cif90164e3`: “Assess potential hazards and their associated risks to develop a risk assessment”.
