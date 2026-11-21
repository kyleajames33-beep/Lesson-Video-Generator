# phys-y12-m5-v22 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `51c943e0345ce22e1d508a3408ed1d155c29e803e9d6fb5167d8aa9879b09479`.

Compared: the Revision 2 source approved by `p-y12-m5-v22-rev2-error-check.md` (SHA256 `e1b15c34...8579`, commit `bc52594c`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to I, simulation engines, root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 8 (steel ball plate in the inset), scenes 11 and 13 (satellite and Earth plates as the attempt pictures) and 12 and 14 (navy givens strips); scene 16 heading hold 50 s to 45 s; a recorded kit gap (no mid-run impulse, so the orbit raise is three joined runs); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source.

Revision 3 visuals: the scene 12 givens strip repeats the card exactly (m = 800 kg, 500 km above the surface, G, M_E, R_E); the scene 14 strip repeats the card's three conditions (low circular orbit, drag removes energy, moves to lower circular orbits). The attempt 1 picture shows only the supplied 500 km; the attempt 2 picture shows one still satellite on one circle with no second orbit, speed or bars, so nothing gives the explanation away. Numbers re-checked: v = 7.56 km s⁻¹ at 7.0 × 10⁶ m and 5.35 km s⁻¹ at 1.4 × 10⁷ m; r = 6.871 × 10⁶ m, GMm = 3.202 × 10¹⁷, U = −4.66 × 10¹⁰ J, K = 2.33 × 10¹⁰ J, E = −2.33 × 10¹⁰ J. The three joined runs are buildable: a coasting path from r₁ to r₂ needs about 8.73 km s⁻¹ after burn 1 and arrives at about 4.37 km s⁻¹, below the 5.35 km s⁻¹ circle speed, which matches scene 1's "slower than this circle needs". All named plates exist under `public/`.

Mechanical: 5,554 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD. No course labels in narration.

Findings:

1. **Optional.** Scene 8 "Upgrade (Revision 3)": "its launch arrow and slowing strobe images are as described". The scene 8 Visual describes "a coded ball rising from a launch arrow and slowing" but no strobe images. Proposed fix: "its launch arrow and its slowing rise are as described" (or add "with fading strobe images closer together near the top" to the Visual if strobes are wanted).

2. **Optional.** Scene 16 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", and the "Holds" line still says "key-notes (about 50 s)", while Revision 3 sets "34 px", "the framed memory card beside them" and 45 s. Proposed fix: change "32 px" to "34 px", "framed card under the notes" to "framed card beside the notes" and "about 50 s" to "45 s in all".

Result: 0 blockers, 0 should fix, 2 optional.
