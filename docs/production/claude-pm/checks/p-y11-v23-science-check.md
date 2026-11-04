# p-y11-v23 physics check

Revision 1, 3 November 2026. Design SHA256 `3b80905847885df1ea6f73791f38fac1fc8d670fc5425da5a5499c936423a5c3`. Independent calculation `work/brief149/v23-calculations.py` and JSON. No design changed.

Fresh 2025 official source https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 : `ci07a3247e`, “Solve problems involving objects with constant velocity and objects accelerating on inclined planes”. The examples and v22/v24 handoffs cover this action.

Steady 20 kg crate: friction 50.7285 N, normal 189.3215 N, μk=0.267949. The unchanged site 4 m case, with static-hold condition added, gives acceleration 3.62694 m/s² and bottom speed 5.38661 m/s; frictionless speed 6.26099. Launch upward gives deceleration magnitude 6.17306 m/s², travel 1.29595 m and return speed 3.06606 m/s; tan30° > 0.40 so it restarts. A1 gives 100.554 + 69.067 = 169.621 N; A2 gives 1.55824 m/s² and 12.48296 m/s. Rounded results agree.

1. **Blocker:** v24 explicitly uses simulated data, so the handoff cannot promise “real data” as if already observed. Use an illustrative-data or real-measurement-method promise.
2. **Should fix:** Replace “Only speeding up or slowing down” with “Only a change in velocity” to include turning.
3. **Should fix:** Attach the continuing-contact condition to the across-slope balance in the method as well as its memory aid.

The site derivation explicitly adds kinetic friction in its following line, so a more precise formula label is an editorial clarification. The existing L22 row covers the separate release-from-rest issue. Q1's early rounded intermediate is separately noted in the site log. Count: 1 blocker, 2 should fix, 0 optional.
