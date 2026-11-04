# p-y11-v19 physics check

Revision 1, 3 November 2026. Design SHA256 `f3a955b27ce4e3a5ef5a82f488778358b68e26cb2ec36be20eb7b52a28653587`. Independent calculations `work/brief149/v19-calculations.py` and JSON; no design changed.

Fresh 2025 official source https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975 : `ci927ecf47`, “Compare static and kinetic friction”; `ci6eb6311a`, “Solve problems using f_friction = μ F_N” (MathML linearised). The route and v18/v20 handoffs fit those points.

For the 2 kg block, N=19.6 N, maximum static friction 7.84 N and kinetic friction 5.88 N; two blocks give 11.76 N. Unchanged site case N=98 N, f=29.4 N and a=2.06 m/s². A1 gives N=117.6 N, static maximum 52.92 N, kinetic value 35.28 N and actual static force 50 N. A2 gives 22/147 = 0.14966. All stated rounded results agree.

1. **Should fix:** Scope speed independence and apparent-area independence to the adopted approximate dry-friction model; surface properties and friction can vary with conditions.
2. **Should fix:** Synchronise lurch acceleration with the sensor's 0.1 s pull drop. A linear decline in net force from 1.96 N to zero over 0.1 s gives Δv=0.049 m/s for 2 kg, not a constant 0.98 m/s² for 0.3 s.
3. **Should fix:** In the ideal model a pull exceeding the maximum, rather than exactly equalling it, produces acceleration from rest; qualify the threshold language.

The site friction-direction and normal-force scope issues are already logged; no additional confirmed site correction. Count: 0 blockers, 3 should fix, 0 optional.
