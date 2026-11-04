# p-y11-v22 physics check

Revision 1, 3 November 2026. Design SHA256 `19476a97003a4c1062dee000c06037cb7d6d055514a3e34b23bf2d3578dcaa2a`. Independent checks `work/brief149/v22-calculations.py` and JSON. No design edited.

Fresh official 2025 source https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 : `ci9a2bd04a`, “Resolve the weight force into perpendicular and parallel components on inclined planes using F⊥ = mg cos θ and F∥ = mg sin θ”; `cib1bb3a58`, “Derive a = g sin θ - μg cos θ to describe the acceleration on an object on an inclined plane with friction using Newton’s second law parallel to the plane” (MathML linearised).

At 30°, smooth acceleration is 4.90 m/s² and the 2 m race takes 0.90351 s from rest. The unchanged site activity gives friction term 1.69741 and acceleration 3.20259 m/s². At 10° and μk=0.30, acceleration is -1.19358 m/s² while sliding down. A1 gives parallel 16.5666 N, perpendicular 35.5273 N and a=4.14166 m/s². A2 gives -1.0 m/s². Force ratios and rounded displays agree.

1. **Should fix:** Carry the v21 correction: θ is measured between weight and the inward perpendicular direction.
2. **Should fix:** Keep the assumptions of the derived formula with its summary: downward sliding, normal contact, the stated kinetic coefficient and no additional force components.
3. **Should fix:** Explicitly scope the flat-floor stillness claim to an initially stationary box; zero acceleration can also mean constant nonzero velocity.

Existing L21 rows already cover the kinetic/static threshold and negative-acceleration error, including the repeated marking issue. The separately worded friction-direction key term is logged below. Count: 0 blockers, 3 should fix, 0 optional.
