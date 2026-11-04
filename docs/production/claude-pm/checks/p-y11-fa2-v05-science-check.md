# p-y11-fa2-v05: physics check

Reviewed Revision 1 on 3 November 2026. Design SHA256 `c3f0f514312885d84e316e6094a0e6f8a980261fa97a8daa6601fe0f6cd54981`. Written design and site source only; no built frames or audio. Narration recount 5,852 characters in separate scenes (5,865 with joining spaces); stated duration about 541 s. Per-scene counts: 411, 612, 561, 724, 175, 624, 745, 197, 232, 350, 391, 369, 386, 75.

## Official 2025 syllabus

- `ci2298dbee`: "Solve problems using f = 1 T and v = fλ". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief156/syllabus-validation.json`.

## Recalculation and source comparison

Python `work/brief156/v05-calculations.py` confirms 3 and 2 m/s, 3 m for 100 MHz, 25 Hz and 37.5 m/s, plus the attempt values 0.20 m, 5.88e-4 s, 4 Hz, 2.4 m/s and 0.30 m. Site radio and Q2 values are unchanged. The deep-water gravity-only estimate is 0.883 m/s for 0.5 m wavelength, but surface tension, currents and conditions are unstated, so do not assert an unconditional speed limit. See the site log for a request to specify the water-wave model.

## Findings

1. **Should fix:** Phase speed need not equal energy or group speed in a dispersive medium. In scene 2 say the pattern speed and restrict the energy-speed identification to the illustrated nondispersive cord; in scene 6 restrict fixed speed to the stated cord and conditions.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.
