# p-y11-v18 physics check

Revision 1, 3 November 2026. Design SHA256 `0b2a0aadea70f6f7a7ac752b2885a02fb93aa2c5daf4f76d2b8980ec021d964d`. Independent calculations `work/brief149/v18-calculations.py` and JSON. No design changed.

Fresh official 2025 Physics source https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 : `ciecc7b5bd`, “Analyse the forces acting on connected bodies in physical contact and linked by ropes using vector diagrams and Newton’s laws of motion”. The examples cover both contact and rope cases; v17 and v19 frames match the stated handoffs.

Site we-1 is preserved: 20/5 = 4.0 m/s² and 3 × 4 = 12 N; swapped back mass 2 kg gives 8 N. The contact case gives 3.0 m/s² and 6.0 N; the ideal pulley gives 1.96 m/s² and 7.84 N. Tow case gives 1.5 m/s² and 900 N; A2 gives 3.0 m/s² and 9.0 N. Within each straight taut connection the shared acceleration and individual force equations are correct.

1. **Blocker:** A light rope and freely rotating pulley do not guarantee equal tension if the pulley has significant rotational inertia. Specify a frictionless pulley of negligible rotational inertia; the displayed ideal values then follow. See https://openstax.org/books/university-physics-volume-1/pages/6-1-solving-problems-with-newtons-laws .
2. **Should fix:** Equal tension and weight means zero acceleration, not necessarily no falling motion; replace “wouldn't fall” with “wouldn't accelerate downwards”.
3. **Should fix:** Specify the only unbalanced outside force along the track, since normal and gravity also act externally and cancel vertically.
4. **Should fix:** Remove the unsupported student-prevalence assertion from author copy if used in a build or description.

Confirmed site rope-pair and driving-force wording is logged separately. Count: 1 blocker, 3 should fix, 0 optional.
