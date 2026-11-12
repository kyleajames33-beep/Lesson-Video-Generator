# Root decisions: Year 12 Physics Module 6 (first designs)

Claude (root), 6 November 2026. Module 5 decisions still apply where relevant.

## v01 to v12

1. **Module 6 colour key:** electric field blue; magnetic field dots and crosses slate grey; current orange; force amber (magnetic force rose where both forces appear); area normal navy; induced emf, current and field rose. v07 to v12 already follow it.
2. **v06 to v07 join.** v07's designer rewrote v07's opening to v06's actual final frame (copper wire across slate crosses, orange I, drifting electrons, dashed "F = ?"). Closed; v06 open decision 4 is resolved in favour of v06's frame.
3. **Hand rules.** No hands are drawn. Rules appear as labelled coded axes; the palm rule is named in words, with a note that schools may teach an equivalent rule.
4. **v02** uses the site's hook numbers (4.9 mm deflection visible at true scale) with a 2.0 cm plate gap. **v06** paths are schematic and tagged "not to scale"; the velocity selector stays as the way into the electric versus magnetic field comparison. **v05** keeps the period derivation the route asks for. v04 hands the zero-work argument to v05.
5. **Practicals.** v07 shows the demonstration (no balance investigation). v08's investigation dataset is illustrative and labelled. Metal plates and eddy currents are left to v20. P6-IQ4-03 is split across v11, v17 and v20; the coverage check confirms.
6. **Plates.** New: `y12p-crt-tube-v1`, `y12p-horseshoe-magnet-v1`, `y12p-galvanometer-v1` with a separate needle layer. Coded fallbacks recorded.
7. **Science check items:** E = V/d sign form, B = μ₀I/2πr and μ₀ on the data sheet, data-sheet constants, the SI ampere wording, v12's AC phase point, v11's dropped-magnet effect size.
8. **Optional beats** the learning review may cut: v09's negative-flux sentences and rain analogy, v08's investigation (could move to a practical video), v12's AC phase surprise.
9. **Site corrections** (lessons 1, 2, 6, 7, 8, 12, 13, 15) are listed in each design's Decisions; Codex logs them, first lesson 15's 230 V / 240 V mismatch and its multiple-choice question with no correct option.

## v13 to v20 (6 November 2026)

10. **Mains voltage** is 230 V throughout (AS IEC 60038). Grid voltages are sourced (Transgrid 500 and 330 kV; Ausgrid 132, 66, 33 and 11 kV). v14 uses "well above ninety per cent" for large transformers unless the Australian minimum efficiency standard's values are verified; laminations "about a hundred times less" stays as a simple-model statement. v15's generator voltage "about 10 to 25 kV" needs a source or becomes "tens of kilovolts".
11. **Torque angle.** v16 uses only the syllabus convention (θ between the field and the coil's area normal, sin θ), with one warning sentence about the cos form some resources use.
12. **v16 to v17 join.** Root reconciled v17's opening to v16's actual final frame (power pack, two-needle ammeter, coded split-ring schematic). v16's motor model and v17's hobby motor are different plates by design (schematic model, then a real bench motor).
13. **Kept and optional.** v13's load-sets-the-current scene, v15's generator-voltage surprise and v16's several-coils and radial-field scene stay; the learning review may cut v14's hysteresis scene. v18 stays qualitative (ε = NBAω sin ωt is extension on the site); no peak-emf scene. v19 keeps the slip scene tagged "beyond the syllabus" (route lists it) unless the learning review cuts it.
14. **Coverage.** P6-IQ4-03 counts across v11, v17 and v20; v20 covers the metal-plates example of P6-IQ3-02. P6-IQ4-01 is an "investigate" action with no practical in the route: recorded as a coverage gap for a later practical video.
15. **Plates.** New: demonstration transformer, lamination sheets, substation, pole transformer, DC motor model, hobby motor and flywheel, squirrel-cage rotor, v20's eight braking plates (copper pendulums, magnet, tubes, roller-coaster car with empty seats, brake rail). The plastic tube is coded. The image-bank copper tubes may be used as sources once cut out cleanly to transparent PNG; otherwise paint them.
16. **Site corrections** (lessons 9, 10, 11, 15, 16, 17, 19, 20) are listed in each design's Decisions; Codex logs them, first lesson 9's sin θ / cos θ model answers and lesson 16's Q2 rotor-speed answer.

## After brief 189 and 190 repairs (7 November 2026)

- **CRT plate (v02, v03):** Codex retries the painted CRT once more at native resolution and exact geometry. If that attempt also fails, the brief 189 coded-outline CRT becomes the recorded design for v02 and v03 (it then does not count as a missing plate at the build gate).
- **v09 opening:** opens on v08's final frame, with the real bench shown as an inset ("every turn is a loop like this"). Accepted.
- **v11 live control:** relative readouts (×1, ×2, ×3; ×1, ×4, ×9) instead of invented measurements. Accepted.
- **v18/v19 join:** side-view cage plate beside a coded end-on rotor. Accepted.
- **v19 hook speeds:** keep the site's 1500 / 1425 rev/min. The hook's stator ring is drawn with 4 poles so the numbers are consistent (site is the source of truth).
- **v17 energy proof:** the corrected argument (a helping emf would drive more heat than the supply provides) is accepted.

## Visual upgrade (13 November 2026)

Calls made by the upgrade session (Claude, second session). Root reviews these; none is final until root accepts it. Numbering is local to this section (U1 to U9).

U1. **Scope and method.** 20 designs: m6-v01 to m6-v20. Every design already carried the Revision 2 visual upgrade, so each gains a section "Visual upgrade (Revision 3)" (stage list with times, simulation engines, standing rules) and an "Upgrade (Revision 3)" paragraph only where a scene needed one. Every narration line is byte-identical (checked by hash against the baseline). All 20 pass the checking script.
U2. **Stages and cuts.** Every design lists its stages with times. Revision 2 had already split the long set-ups (several of these designs were on the audit's high-risk list), so nothing now holds past about 90 s and no new cut was needed. The longest are m6-v03 (the path stage, about 85 s, with the ledger arriving at about 42 s) and m6-v07 (the top view, about 77 s).
U3. **Root rules R1 to R4.** R1 and R2 are standing rules in every design, as in Module 5. R3 (oxygen red) does not arise. R4: no narration was added.
U4. **Simulation engines named.**
- Field motion: charges between plates (v01 to v03, a `uniform` field; v02 uses a `custom` field so the straight path beyond the plates is computed), circles in a magnetic field (v04, v05, a `magnetic` field; v05's sliders, lap timer and three-system comparison are real runs) and the velocity selector (v06, a `custom` field that adds the electric and magnetic accelerations, so the undeflected path at v = E/B is computed).
- Circuits: the hook benches in v07 and v08 (switch closing mid-run), the balance circuit in v08, the sliding-rod loop in v10, the open and closed coil circuit in v11, the primary circuit in v12, the simple-model transmission line in v15 (solved for current, line drop and power wasted, with a ramped voltage slider) and the back-emf equivalent circuit in v17 (a second battery facing the supply, ramped with speed; a rheostat as the starting resistor).
- `SeriesGraph` draws the time graphs in v10, v12, v13, v18 and v19.
U5. **Kit gaps (not coded around).** (a) No engine for flux and induction: flux through a coil against time, emf from its rate of change, a meter needle tied to it. This is the largest gap in the module (v09 to v12, v18). (b) The circuits engine is direct current only: no alternating supply, no transformer part, no self-induction (v12 to v15, v18, v19). (c) Its motor has no back emf tied to speed and load; v17 sets the back emf as a lesson ramp on an explicit battery. (d) No engine draws the magnetic field of a magnet, a wire or a coil, or the force on a current in it (v07, v08). (e) No engine turns a body under a torque (v16's coil), and none models eddy currents or a damped swing (v20). (f) Field motion is two-dimensional, so v04's spiral along a field line is lesson-coded.
U6. **Question cards.** Most cards already carried a picture and most feedback scenes a givens strip. Added: pictures on m6-v01 attempt 1 (the supply wired to the plates), m6-v03 attempt 1 (the supply and an exam-style gun) and m6-v05 attempt 1 (a cross grid with the proton, no circle); the givens strip on m6-v02 feedback 2. Coded drawings on cards became plates in m6-v14 (lamination sheets and iron rod; the transformer), m6-v16 (a crop of the painted motor's commutator), m6-v17 (the bench in plates, not a silhouette) and m6-v20 (coaster car and brake rail; the two tubes and magnets).
U7. **Coded real objects removed.** Support bars, crossbars and stands (v07, v08, v11, v20) are the painted boss, crossbar and retort stand. Insulating blocks and the jam block (v08, v17) are the painted wooden block. Meters in v14 are painted multimeters, its thermometer a readout chip, its fins an inset of the painted pole transformer. Clamp jaws in v20 become a plain release ledge on a painted stand, and its copper sheet the painted metal plate. The "balance icon" in v13 and v15 becomes linked chips, not a drawing of scales. Kept as coded schematics: end-on coils, pole blocks, ring close-ups, stator rings, field lines, circuit symbols and exam-style guns.
U8. **Calls for root.**
- (a) **One new plate request:** `y12p-sailing-dinghy-v1.png` for m6-v19 scene 9 (the coded boat silhouette). Fallback: the existing top-view boat plate. If root wants no new plate for a 28 s analogy, the fallback stands.
- (b) m6-v02 and m6-v03 still depend on the held CRT plate; root's ruling after brief 189 (one more attempt, then the coded-outline fallback) is unchanged, and the designs only flag that the fallback is a coded drawing of a real object.
- (c) m6-v04's aurora stays a schematic tagged "not to scale"; say if a painted aurora panel is wanted.
- (d) m6-v08's aluminium foil strips stay coded lines, because they must bow as they move and a plate cannot be warped.
- (e) m6-v15 uses the direct-current engine as a stand-in for the alternating line; the design's "simple model" tag covers it.
- (f) m6-v14 attempt 1 uses the painted soft-iron rod as "a solid core" beside the lamination sheets; root may prefer the sheets alone.
U9. **Checker fixes, notes and plates.** Seven designs had Visual lines the checking script rejected (a cue that repeated a spoken phrase out of order, or a label written as if spoken): m6-v01 scene 4, m6-v05 scene 10, m6-v07 scene 8, m6-v09 scene 1, m6-v11 scenes 4 and 7, m6-v12 scenes 3 and 12. Each is reworded in the visual text only. Key notes were already five one-line bullets with a framed card in all 20; the hold is now 45 s everywhere (it was 60 s in v01 to v12, so those estimates fall by about 15 s). Plates newly placed in scenes or on cards were confirmed by file listing, not re-inspected; three need a look (the commutator crop in v16, the pole transformer in v14, the metal plate in v20).
