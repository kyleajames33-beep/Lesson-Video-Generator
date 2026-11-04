# p-y11-fa2-v10: physics check

Reviewed Revision 1 on 3 November 2026. Design SHA256 `4461e852b503cd03a90a044f474b703049e8d18ed323f0292de1914f3851ff8a`. Written design and site source only; no built frames or audio. Narration recount 5,838 characters in separate scenes (5,853 with joining spaces); stated duration about 538 s. Per-scene counts: 264, 454, 530, 506, 88, 401, 484, 541, 612, 233, 452, 314, 322, 326, 236, 75.

## Official 2025 syllabus

- `ci6ed20170`: "Conduct a practical investigation, to relate wavelength to frequency, frequency to pitch, and amplitude to loudness". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

- `cie7db48b6`: "Conduct a practical investigation to demonstrate how frequency and amplitude relate to the energy of a sound wave". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief156/syllabus-validation.json`.

## Recalculation and source comparison

Python `work/brief156/v10-calculations.py` confirms wavelengths 1.36 m and 0.68 m, periods 4 and 2 ms yield 250 and 500 Hz, the 20–20000 Hz wavelength range, and the 300 Hz example. Average speed 4Af and maximum speed 2πfA are correct for sinusoidal oscillation. Site trace heights and periods are reproduced; the pitch comparison is valid but perceived loudness cannot be settled solely by signal height for unlike frequencies. The existing concept-three entry already records the amplitude convention for sound energy.

## Findings

1. **Should fix:** The oscilloscope displays microphone voltage, not pressure itself unless calibrated. Label the axis “microphone voltage (pressure-related)” and state height is a relative signal at unchanged settings. A taller trace at a different frequency does not by itself establish equal or greater perceived loudness.

2. **Should fix:** The frequency-versus-energy comparison must retain fixed particle-displacement amplitude, same medium and comparable receiving conditions. Keep the same-swing condition visible in scene 9 and scope the general notes to that comparison.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.
