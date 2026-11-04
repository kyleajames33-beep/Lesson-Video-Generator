# p-y11-fa2-v07: physics check

Reviewed Revision 1 on 3 November 2026. Design SHA256 `03b8afd2bed31c33f9aa3c59fafb8a57421872e121764ddb462282b6d79e8291`. Written design and site source only; no built frames or audio. Narration recount 5,808 characters in separate scenes (5,822 with joining spaces); stated duration about 538 s. Per-scene counts: 305, 481, 445, 186, 380, 592, 512, 555, 173, 405, 326, 512, 478, 383, 75.

## Official 2025 syllabus

- `ci6a03179f`: "Analyse displacement–distance graphs for longitudinal and transverse waves". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief156/syllabus-validation.json`.

## Recalculation and source comparison

Python `work/brief156/v07-calculations.py` confirms P moves 2.01→2.74 cm and Q 2.01→0.93 cm in the shifted profile; the crest is instantaneously at rest, despite a later decrease. The source 0.60 m / 0.40 s gives 1.5 m/s; the new rope context changes the physical medium but preserves numbers. The original attempt gives 0.90 m / 0.30 s = 3.0 m/s. The source pressure-versus-displacement contradiction is logged. A 0.60 m surface wave at 1.5 m/s is not an unconditional impossibility without specified current and wave model.

## Findings

1. **Should fix:** Compression maxima occur where the spatial displacement gradient is most negative. Their coincidence with a zero crossing and quarter-wavelength offset requires the illustrated sinusoidal wave about zero; scope scene 8 and the memory aid accordingly. The shifted-snapshot method also presumes an unchanged travelling profile.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.
