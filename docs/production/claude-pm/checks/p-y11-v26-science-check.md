# p-y11-v26 science check

Revision 1, source review 2 November 2026. Design SHA256 `284dbc1e3f8affe53c24500838b3abcd3ed695bbe3c34734695215405803f976`. The route, root decisions, current site lesson 24 and v24 handoff were checked. No built motion, audio or listening was reviewed.

## Fresh 2025 syllabus

Local P25-FA1-G5-01, official content-system codename `ci56b6c521`: “Compare conservative forces and non-conservative forces”.

Local P25-FA1-G5-03, official content-system codename `ci2e0b478b`: “Relate the work done on an object to the change in its kinetic energy during accelerated rectilinear motion using W = F ∥ s = Fs cos θ”.

[NSW Physics 2025 FA1](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975), freshly retrieved 2 November 2026; exact source HTML and codenames in `work/brief153/physics-official-actions.json`. Both match the local ledger. These codenames are content-system identifiers, not published outcome numbers.

## Findings

1. **Should fix:** Scene 11 calls a push from an engine or rope non-conservative without specifying the force. Work by a constant vector force is F·(r₂−r₁), independent of path. A motor force that follows the motion around a closed loop can instead add work on every leg and is a valid non-conservative example. Name that concrete case and update the note and chip. This is learning finding 1. The path-independence criterion is described by [University Physics](https://openstax.org/books/university-physics-volume-1/pages/8-2-conservative-and-non-conservative-forces).

2. **Should fix:** Scene 11's count is 520, not 502; the complete script is 6,273 characters with joins rather than 6,255. Update count/timing and use the named shelf cut if needed. This is learning finding 2; the estimates are not measured speech.

## Checks

Recalculation in `work/brief153/v26-calculations.py`: 40×10 = 400 J; speeds √160 = 12.649 and √80 = 8.944 m/s; braking distances at 50 and 100 km/h are 24.113 m and 96.451 m with a 6000 N braking force, ratio four. The site worked values 40 N, 5.0 kg and 10 m give 400 J and 12.6 m/s; its car example 1500 kg, 20 m/s, 6000 N gives 300 kJ and 50 m. The exact site page and worked examples were checked, not only the extract. A1 tension work is 815.677 J and speed 11.660 m/s; its vertical tension 25.36 N is less than weight 117.6 N, so contact is maintained. A2 gravity work is −39.2 J on either route; ramp friction is −24.0 J. Round-trip length is 1.29595 m, gravity work about ±127 J and friction work about −33 J per leg. The source holds g = 9.80 m/s² and other stated assumptions.

The question and proposed start/stop boundaries match the two owned syllabus actions; v27 owns gravitational potential energy and v28 conservation. v25 remains on its cultural hold, so the actual v24 handoff is correct. The derivation uses constant net force and straight-line motion; work by a force and total net work remain distinct. The sign mnemonic specifies the angle between force and displacement. No design edit or playback approval.

Site findings are appended to `site-corrections-phys-y11.md`; the prior closed-loop sign correction is cross-referenced rather than duplicated. Count: 0 blockers, 2 should fix, 0 optional; about 571 s before reserve cut.
