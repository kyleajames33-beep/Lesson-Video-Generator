# p-y11-fa2-v06: physics check

Reviewed Revision 1 on 3 November 2026. Design SHA256 `5036fd4bd50a3c66a589589518ff6cbc5052375b636400f8e0f51fb2cf65bfb7`. Written design and site source only; no built frames or audio. Narration recount 5,767 characters in separate scenes (5,781 with joining spaces); stated duration about 535 s. Per-scene counts: 304, 462, 536, 511, 129, 464, 527, 586, 127, 455, 473, 367, 363, 388, 75.

## Official 2025 syllabus

- `ci4027ee6d`: "Analyse displacement–time graphs for longitudinal and transverse waves". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief156/syllabus-validation.json`.

## Recalculation and source comparison

Python `work/brief156/v06-calculations.py` verifies periods 0.50, 0.20 and 0.40 s, frequencies 2, 5 and 2.5 Hz, λ=0.75 m at 3 m/s and the 3 m/s attempt. Maximum particle speed for the sine example is 37.7 cm/s. Source we-1 values are unchanged. The separate site question requires successive peaks to determine its period; recorded in the site log. Actual animation, timing and trace synchronisation remain untested.

## Findings

1. **Should fix:** The “fastest through zero” and half-period peak-to-trough claims apply to the illustrated sinusoidal oscillation, not every periodic waveform. Add “for this sine wave” in scene 6 and use its existing example instead of a general rule. Also use “no position along the medium on the horizontal axis” instead of saying there is no distance on either axis.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.
