# p-y11-v05: physics check

Reviewed Revision 1 on 2 November 2026. Design SHA256 `58fcb5b577ce789cae0748868a612cdf46d654eb4d5d21ebc9ee2fe25115a909`. Written design and site source only; no built frames or audio. Narration recount 6,259 characters in separate scenes (6,273 with joining spaces); stated duration about 562 s. Per-scene counts: 525, 613, 340, 591, 650, 571, 623, 557, 275, 236, 391, 249, 360, 203, 75.

## Official 2025 syllabus

- `cie947d78e`: "Explain how instantaneous speed, average speed, instantaneous velocity and average velocity are measured and calculated". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

- `ci9c29b3c7`: "Solve problems using v ⃗ av = Δ s ⃗ Δ t". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief145/syllabus-validation.json`.

## Recalculation and source comparison

The site 300 m east, 100 m west, 40 s data are unchanged and yield 10 m/s and 5.0 m/s east. The constructed speed profile integrates to 300 m east in 28 s and 100 m west in 12 s, so it supports the same trip. For x=t² at t=3, forward averages are 8, 7, 6.1 and 6.01 m/s. The gate examples give 2.00 and 2.5 m/s. The van gives 48 km/h speed and 24 km/h north velocity over 0.50 h; 45 is the wrong unweighted mean. All table values are in `work/brief145/v05-calculations.json`. The site uses v_av without an arrow for both scalar notation and its motion relationship; report this as a notation-consistency note, not a new arithmetic error. Preserve the explicitly taught distance/displacement distinction.

## Findings

1. **Should fix:** Scene 8 says here, and only here the speedometer matches the average, and the tag says equal only because speed is steady. Variable speed can equal its trip average at particular instants: scene 5 itself has a westward 10 m/s segment equal to the whole-trip 10 m/s average. Replace with with steady speed, the reading matches the average throughout; shorten the adjacent sentence to keep length neutral.

2. **Should fix:** A2 feedback and its boxed answer conclude that a 0.020 s interval alone makes the value close to instantaneous speed. State the needed condition: the measured value is an average and approximates instantaneous speed if the speed changes little during it. Replace the existing explanation; no added scene or hold.

3. **Should fix:** The narration headline 6,223 matches neither the scene sum 6,259 nor the stated joined convention 6,273. Update the count and timing table. Use the existing reserve cut if needed; no new content.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.

MathML transcription for readability: v⃗_av = Δs⃗ / Δt. The formula structure is retained in the route sourceHtml; the quoted freshText above is its plain-text extraction.
