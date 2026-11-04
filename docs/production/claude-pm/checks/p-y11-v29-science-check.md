# p-y11-v29 science check

Revision 1, source review 2 November 2026. Design SHA256 `30456de81ac0461d3407f5cad3d6c76e84ec595c709e7d4014f756a9f7a4ccec`. Written design, route, current L27 page, v28 handoff and series decisions reviewed. No built motion or audio reviewed.

## Fresh 2025 syllabus

Local P25-FA1-G5-11, official codename `ci7e7f090d`: “Solve problems involving momentum using p ⃗ = m v ⃗ and Δ p ⃗ = F ⃗ net Δ t”. [NSW Physics FA1](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975), retrieved 2 November 2026. The exact formula HTML is saved in `work/brief153/physics-official-actions.json`; its wording matches the ledger.

## Findings

1. **Should fix:** In scene 7, equal impulse over a longer interval fixes the mean net force, not the peak of an arbitrary force-time curve. Say “smaller average force” and compare the average rectangles; also specify the car comparison concerns the same change in vehicle momentum and average net force. This is learning finding 2.

2. **Should fix:** The scene 6 force-time areas are labelled +4.5 N s despite Δp = −4.5 N s with incoming direction positive. Label them explicitly as magnitudes or draw signed negative force below zero. This is learning finding 3.

3. **Should fix:** Attempt 2 equates Δp/Δt to the force from the wall, although it gives average net force. Specify that other force impulses are negligible during the short contact, or ask for net force. This is learning finding 4. The same distinction is used by the syllabus point and by [Newton's second-law impulse treatment](https://openstax.org/books/university-physics-volume-1/pages/9-3-impulse-and-collisions).

## Checks

Recalculation: `work/brief153/v29-calculations.py`. The car has momentum 18,000 kg m/s; either trolley receives 0.80 N s and reaches 1.0 m/s from rest. The 0.15 kg ball has Δp = −4.5 kg m/s; average signed stopping forces are −225 N and −45 N, a factor of five. The −20 m/s rebound gives −7.5 kg m/s. A1's triangular pulse gives 0.60 N s and 1.5 m/s. A2 gives −2.7 kg m/s and −540 N under the stated added assumption. A 0.020 s half-sine with 4.5 N s area peaks at 353.43 N. The site worked example retains its original numerical values while replacing a catch with a board and net.

The proposed main question and route boundary cover the owned point and leave collisions to v30. Momentum is a vector; the Δp arrows are final minus initial. The ordinary one-dimensional simplification excludes oblique collisions. The site formula-sheet attribution could not be verified from the currently accessible 2025-syllabus assessment page; do not claim the sheet either includes or excludes it until the actual new-syllabus sheet is inspected. Confirmed site findings are logged without repeating the prior signed-Δp row. Count: 0 blockers, 3 should fix, 0 optional. Cross-report total including the opening-frame finding is 4; about 559 s.
