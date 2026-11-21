# phys-y12-m5-v18 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `cd1f717a40e9b93b56c8dc12d3751bbae4880e2d8d2e2a6abb4557372ba133fb`.

Compared: the Revision 2 source approved by `p-y12-m5-v18-rev2-error-check.md` (SHA256 `1ac67223...33fb`, commit `bc52594c`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to K, simulation engines, "The module is a schematic", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scenes 12 and 14 (satellite and Earth plates as the attempt pictures) and 13 and 15 (navy givens strips); scene 17 heading hold 50 s to 45 s; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 17 scene strings (build parser rules) are byte-identical to the approved Revision 2 source.

Revision 3 visuals: the scene 13 givens strip repeats the card exactly (altitude 547 km, circular orbit, G, M_E = 6.0 × 10²⁴ kg, R_E = 6.371 × 10⁶ m); the scene 15 strip repeats the card's conditions (circular orbits, radius of Y = 4 × radius of X). The attempt 1 picture shows only the supplied altitude; the attempt 2 picture shows only the supplied 1 : 4 radii, with both satellites still and no arrows or clocks. Feedback numbers re-checked with GM = 4.002 × 10¹⁴: r = 6.918 × 10⁶ m, v = 7.61 × 10³ m s⁻¹, T = 5.71 × 10³ s = 95.2 min; v_Y = v_X / 2, T_Y = 8 T_X. Tying Newton's mountain to `central` runs is consistent with the Revision 2 landing arcs (launch at r₀ = 7.371 × 10⁶ m; 1,595, 3,336 and 7,038 km; circle at 7.37 km s⁻¹), which a central inverse-square run reproduces. The 400 km lap clock reads T = 2π(6.771 × 10⁶) / 7,688 = about 5,530 s, consistent with scene 9. All named plates exist under `public/`.

Mechanical: 5,727 characters, equal to the sum of the 17 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD. No course labels in narration.

Findings:

1. **Optional.** "Visual upgrade (Revision 3)", Simulation engines bullet: "The scene 7 radius slider is a set of circular runs; "v" and "T" are read from each run." Scene 7's readouts are r, v and g (g = GM/r²); T is not shown there. Proposed fix: "...; "v" is read from each run and "g = GM/r²" is computed from its radius."

2. **Optional.** Scene 17 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", and the "Holds" line still says "key-notes (about 50 s)", while Revision 3 sets "34 px", "the framed memory card beside them" and 45 s. Proposed fix: change "32 px" to "34 px", "framed card under the notes" to "framed card beside the notes" and "about 50 s" to "45 s in all".

Result: 0 blockers, 0 should fix, 2 optional.
