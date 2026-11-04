# p-y11-v16 physics check

Revision 1, 3 November 2026. Design SHA256 `094f0e4eba26dc9da01ebdb96866e5ee455ae177fdacffdb238b8f7b529531ab`. Independent calculations: `work/brief149/v16-calculations.py` and JSON. No design edited.

Fresh 2025 Year 11 official source https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 :

- `ci014d8672`: “Analyse the forces acting on an accelerating object”.
- `cidf22083b`: “Solve problems involving Newton’s second law of motion using F⃗_net = m a⃗” (MathML linearised).

The v15 frame and v17 handoff match. The lesson addresses one-dimensional acceleration, lift support, falling with resistance and a stated inward acceleration. In the unchanged site example (20 - 8)/4 = 3 m/s². From rest for 2 s the crate reaches 6 m/s and moves 6 m; at -2 m/s² it stops after 3 s and a further 9 m. A 70 kg lift load has weight 686 N and readings 826 and 546 N for ±2 m/s². The falling crate weighs 49 N and at 19 N drag accelerates down at 6 m/s². Bend force 3600 N, braking force 4800 N west and A2 reading 565 N are correct; the crossed 415 N corresponds to the wrong acceleration sign.

1. **Should fix:** Replace “nothing's pushing it” with “the applied push has stopped”; normal contact and friction still act.
2. **Should fix:** The finite 30° Δv points radially inward at the midpoint of the two sampled positions. Distinguish that average direction from the instantaneous acceleration at the current car position, and place the arrows accordingly.

The lesson 15 site source currently contains the complete downward-lift sentence, so do not log a truncation based on the designer's stale note. The 2025 examination page confirms a reference sheet exists but the sheet's contents could not be verified from the available loading resource; do not assert the site formula-sheet claim true or false. Household scales may display mass-equivalent units, so a force-reading scale is a clearer lesson choice; this alone is not a categorical site error. Count: 0 blockers, 2 should fix, 0 optional.
