# p-y11-v21 physics check

Revision 1, 3 November 2026. Design SHA256 `6d4ff7bd05c7a5b5362d8a7bebb82bd8d7913420a4c2537be56c925b0ae41535`. Independent calculations `work/brief149/v21-calculations.py` and JSON. No design edited.

Fresh official 2025 source https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 : `ci85e17ad3`, “Determine the normal force on objects on inclined planes”; `ci90862bda`, “Construct free-body diagrams to show the gravitational, normal, frictional and net force acting on an object on an inclined plane”. v20's actual 25° frame is used and the parallel component hands off to v22.

For 12.0 kg, weight is 117.6 N and N at 10°, 15°, 20°, 30°, 45°, 60°, 90° is 115.81, 113.59, 110.51, 101.84, 83.16, 58.8 and zero N. At 30°, the static uphill component is 58.8 N; μs ≥ tan30° = 0.57735 is needed to hold. The 20 N outward pull leaves N=81.845 N. A1 gives 37.536 N and A2 gives 22.055 N. The unchanged site we-1 is correctly recalculated.

1. **Blocker:** A chain's resultant runs from its starting tail to its final tip; its closure vector runs the other way. Fix scene 4's wording and geometry so the net force points downhill.
2. **Blocker:** The angle θ is between weight and the inward perpendicular direction, not the outward positive normal arrow. Explicitly mark the inward axis and use it for the angle and cosine projection.
3. **Should fix:** State the continuing-contact and no-other-perpendicular-force conditions, especially when reaching a vertical surface. The given normal-force expression is conditional, as scene 9 already shows.

Site Q3's “never vertically” and the unqualified normal-force formula are logged separately. Count: 2 blockers, 1 should fix, 0 optional.
