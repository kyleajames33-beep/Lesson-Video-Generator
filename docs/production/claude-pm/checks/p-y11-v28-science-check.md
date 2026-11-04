# p-y11-v28 science check

Revision 1, source review 2 November 2026. Design SHA256 `cbe511da843e69e80a1396076108a9af3eebab3576da7aee906d96f1648645e3`. Current site lesson 26, route, root decisions, v27 handoff and written script checked. No built motion, stills or audio reviewed.

## Fresh 2025 syllabus

`ci778e4712`: “State the conditions under which total mechanical energy is conserved”.

`ci7fd8d698`: “Apply the law of conservation of mechanical energy and use W = Δ KE = 1 2 m v 2 and W = Δ U to solve problems”.

`cie3b5703f`: “Analyse energy transformations and calculate the work done when an object moves within a uniform gravitational field, including changes in gravitational potential energy due to height and identifying the forces responsible for doing work”.

Fresh [NSW Physics FA1](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975); original maths markup and ledger comparisons are in `work/brief153/physics-official-actions.json`. The W = ½mv² special form needs zero initial speed; the design correctly uses the general work-energy relation for changes.

## Findings

1. **Should fix:** Scene 4 makes any non-conservative force doing work sufficient to change the total, even if another non-conservative force does equal opposite work. Use nonzero net non-conservative work as the condition for a change; zero work by every such force remains a sufficient conservation condition. Shared with learning finding 1. The energy balance is stated in [University Physics](https://openstax.org/books/university-physics-volume-1/pages/8-3-conservation-of-energy).

2. **Should fix:** In scene 9 the spoken 58.8 − 23 = 36 conflates an intermediate rounded 23 J with the unrounded 22.8 J loss. Show 58.8 − 22.8 = 36 J and label 23 J as the separately rounded estimate, or state the final subtraction is approximate. Shared with learning finding 2.

## Checks

Calculations in `work/brief153/v28-calculations.py`: 30×9.8×2.5 = 735 J and √49 = 7.0 m/s; the two 60°/10° slopes take approximately 0.825/4.113 s. For the 2.0 kg rough-ramp example, gravitational work is 58.8 J, final KE 36 J, and the magnitude of frictional work is 22.8 J. A1 gives √29.4 = 5.422 m/s; A2 gives 176.4 J gravity work, 91.875 J KE and 84.525 J energy transfer, consistent with the displayed rounding. The site's we-1 uses the same height and mass, with an empty sledge replacing the child; the site's rough-ramp question is corrected by specifying from rest, already logged under brief 151.

The three owned actions fit the proposed boundaries; the v27 rock frame is the opening and v29 owns momentum. Gravity's work is −ΔU, while the work done by a steady lifting force against gravity is +ΔU. Tension and a smooth stationary surface's normal do no work in these ideal examples. Source site findings are added or cross-referenced in the shared log, with no site edits. Count: 0 blockers, 2 should fix, 0 optional; about 525 s.
