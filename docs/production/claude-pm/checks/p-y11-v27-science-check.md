# p-y11-v27 science check

Revision 1, source review 2 November 2026. Design SHA256 `888094f3800cdf48b68a20db3ce6869c650419d73dbd104cc2d9e57a05951df2`. The current site lesson 25, route, root decisions, v26 handoff and written script were checked. No motion, rendered still or audio has been reviewed.

## Fresh 2025 syllabus

Local P25-FA1-G5-04, official codename `ci455ddf17`: “Solve problems involving changes in gravitational potential energy in a uniform gravitational field using Δ U = mg Δ h”.

Local P25-FA1-G5-05, official codename `cief8ea610`: “Solve problems involving kinetic energy using KE = 1 2 m v 2”.

The linear text reflects the official mathematics HTML; see `work/brief153/physics-official-actions.json` for the original formula markup. Source: [NSW Physics 2025 FA1](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975), freshly fetched 2 November 2026. Both points match the ledger.

## Findings

1. **Should fix:** The floor/table comparison asks which lift “stores more energy”, although both boxes finish at the same shelf. State that the comparison is the change or added energy; the floor lift adds 39.2 J and the table lift 19.6 J, even though their final energies relative to a common zero are the same. Shared with learning finding 1.

2. **Should fix:** The worked rock is depicted at rest at the edge, but the later speed calculation omits u = 0 from its givens and spoken setup. The 784 J is a gain in KE; it equals the final KE only when the rock starts from rest. State that initial condition and retain the no-air-resistance condition. Shared with learning finding 2.

## Checks

Fresh numeric work is in `work/brief153/v27-calculations.py`: the 4.0 kg rock loses 784 J across 20 m and, released from rest with no air resistance, reaches 19.799 m/s. The 58 g ball at 50 m/s has 72.5 J; the 1500 kg car at 0.25 m/s has 46.875 J. The 1200 kg car's ΔKE from 8.0 to 20 m/s is 201,600 J. The lift's 12.0 m net rise gives 141,120 J; a 1500 kg car with 120 kJ has speed 12.649 m/s, rising to 17.889 m/s when KE doubles. The stated rounding is consistent. The site rock exercise uses the same 4.0 kg and 20 m values; site lesson 24 Q1 uses the same 1200 kg and 8.0/20 m/s values. The site's separate 0.50 kg, 1.8 m example is not narrated.

The main question and proposed boundaries cover both owned points; v28 retains the conservation law. The ΔU calculation assumes the same g across the example, and the speed-squared explanation uses the trolley from rest under a constant net force. A2's mass and KE givens remain visible during the response. The joined narration count is 6,235, about 569 s. The L25 activity's missing initial-speed condition is logged; the existing 118 J precision row is extended with the answer-choice issue instead of duplicated.

Count: 0 blockers, 2 should fix, 0 optional; about 569 s.
