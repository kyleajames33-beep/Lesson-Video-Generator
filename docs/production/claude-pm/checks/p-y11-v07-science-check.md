# p-y11-v07: physics check

Reviewed Revision 1 on 2 November 2026. Design SHA256 `5b3f8a77d13145bb1d1536b5a261ad31110ccf8c49d8738e4b952e95e4414c19`. Written design and site source only; no built frames or audio. Narration recount 5,393 characters in separate scenes (5,406 with joining spaces); stated duration about 505 s. Per-scene counts: 412, 563, 442, 590, 629, 594, 443, 299, 229, 335, 158, 393, 231, 75.

## Official 2025 syllabus

- `ci1753e3ea`: "Use data to construct displacement–time graphs, velocity–time graphs and acceleration–time graphs". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

- `ci432e72b1`: "Use data to analyse motion graphs to describe the displacement, velocity and acceleration of an object". Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Retrieved fresh through the official page data; all route action HTML matches. Validation: `work/brief145/syllabus-validation.json`.

## Recalculation and source comparison

The piecewise motion was independently sampled and differenced in `work/brief145/v07-calculations.json`; every position, velocity, gap and interval acceleration matches the table, including continuity at each phase boundary. The first site worked velocity sequence 0,4,8,12 at 0,2,4,6 s is retained. A1 gives 1.5 then 0 m/s²; A2 interval velocities are +3,0,-2 m/s. Treat the straight and smooth joins as the stated illustrative model, not a unique inference from sparse measured samples. Site falling-velocity means deceleration is wrong when v<0; the design correctly shows speeding up in reverse.

## Findings

1. **Should fix:** Author note (e) gives 1.5 m s^-2 per second. Acceleration is already a velocity change per second; delete the extra per second. The learner-facing 1.5 m s^-2 is correct. No narration change.

No em dash found. Site text is a comparison source, not evidence of syllabus coverage. No design edits, speech, renders or commits.
