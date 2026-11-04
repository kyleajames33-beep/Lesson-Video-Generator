# p-y11-fa2-v03: physics check

Reviewed Revision 1 on 3 November 2026. Design SHA256 `6f7bdc45f68a0dc0b7be3c10be77a7a5b7a9b969fee8926dcc475dd2634f5cfa`. Written design and site source only; no built frames or audio. Narration recount 5,438 characters in separate scenes (5,453 with joining spaces); stated duration about 510 s. Per-scene counts: 360, 339, 478, 95, 603, 464, 482, 430, 529, 104, 378, 297, 187, 313, 304, 75.

## Official 2025 syllabus

- `ci19ed9f77`: "Describe the wavelength, frequency, period, crest, trough and amplitude of transverse waves". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief156/syllabus-validation.json`.

## Recalculation and source comparison

Python `work/brief156/v03-calculations.py` verifies crest gaps 0.75 m, periods 0.25, 0.50 and 0.20 s, the 3 m/s illustrated wavelengths 0.75 and 1.50 m, and the original attempts 0.90 m, 0.45 m, 0.40 s and 2.5 Hz. Source crest positions are preserved numerically; 1.2 versus 1.20 differs in stated precision, recorded in the site log. The 0.8 m amplitude and 5 Hz example agree with the source. Same cord and tension are needed for the fixed-speed comparison; animations require future playback inspection.

## Findings

1. **Should fix:** The half-wavelength crest-to-trough distance follows for the pictured sinusoidal wave but not every periodic waveform. Scope the statement and its memory aid to this wave.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.
