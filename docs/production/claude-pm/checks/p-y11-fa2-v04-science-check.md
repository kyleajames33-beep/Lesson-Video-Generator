# p-y11-fa2-v04: physics check

Reviewed Revision 1 on 3 November 2026. Design SHA256 `e5ca2d210f500ec5278289308f4924de7e3d16798257e8090c18476c234dc833`. Written design and site source only; no built frames or audio. Narration recount 5,867 characters in separate scenes (5,882 with joining spaces); stated duration about 542 s. Per-scene counts: 250, 433, 578, 529, 399, 100, 632, 392, 622, 77, 387, 344, 323, 400, 326, 75.

## Official 2025 syllabus

- `cia7399b4b`: "Describe the wavelength, frequency, period, compression, rarefaction and amplitude of longitudinal waves". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief156/syllabus-validation.json`.

## Recalculation and source comparison

Python `work/brief156/v04-calculations.py` verifies 1.00 m, 0.50 s, 0.0020 s, 340 m/s, 68 m/s and the two displacement-amplitude estimates 2.22e-8 and 1.11e-8 m. Original attempts give 0.80 m, 0.40 m, 250 Hz and 0.0040 s. The source tube example gives 68 m/s, but no gas or temperature is specified: it cannot be declared a factual error without additional assumptions. Record this as a realism clarification, not a proven impossibility. The compression-to-pressure graph link and fixed-frequency energy comparison are correct for the illustrated small sinusoidal waves.

## Findings

1. **Should fix:** The conversation displacement estimate depends on intensity, frequency, medium and distance. Scope the numerical claim to the stated illustrative conditions; individual molecular thermal motion is not the same as the small sound-wave displacement.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.
