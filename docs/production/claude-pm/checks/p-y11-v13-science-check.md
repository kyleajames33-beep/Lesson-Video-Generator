# p-y11-v13 physics check

Revision 1, 2 November 2026. Design SHA256 `892f3a6ae3f3f9673bbc3f8112d1e91def8bb7d174cfe7d312e90fe8d2957041`. Independent calculations: `work/brief149/v13-calculations.py` and JSON. No design edited.

Fresh official 2025 source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 .

- `cif576e4f9`: “Apply Newton’s first law of motion to stationary objects and objects moving with a constant velocity”.
- `ci38b8f81e`: “Analyse the forces acting on an object moving with constant velocity”.

The lesson applies both to rest, a cruising car and an angled constant-velocity sledge. v12's actual final crate and chip are identified in scene 1 and v14's question is the handoff. Root decisions on frames, given weight and force colour remain appropriate.

The unchanged site worked car has driving force 600 N against 600 N resistance; 100 km/h = 27.7778 m/s. The sledge pull gives components 140.9539 N and 51.3030 N, friction 140.9539 N and normal 348.697 N, rounding to 141 N and 349 N. A1 gives 5.5 N east. A2 gives sqrt(153)=12.3693 N and atan2(12,3)=75.9638° above east. Site lamp 2 kg at 9.8 gives 19.6 N. The cards carry force directions, and the second specifies only one other force.

1. **Should fix:** “the rope lifts the sledge a little” suggests upward displacement, inconsistent with the balanced vertical motion; say its upward component supports part of the weight.
2. **Should fix:** The car display cannot fall from near 100 and then hold 100 without an indicated reset. State the final steady speed consistently or show a labelled reset, with no extra scene.
3. **Should fix:** Replace the unsupported claim “Most people pick” with a possible misconception, such as “You might pick”.

Ideal no-friction lane assumes no remaining horizontal force and balanced vertical forces. Scene 5's road force on powered wheels, zero-net equilibrium and force equality are otherwise sound. Site hero claims are logged separately. Count: 0 blockers, 3 should fix, 0 optional.
