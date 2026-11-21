# phys-y12-m6-v18 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `f6de7cfed715674e2e46923b0f64395be6442a0e42adbcfdecf6178c51ebf29e`.

Compared: the Revision 2 source approved by `p-y12-m6-v18-rev2-error-check.md` (SHA256 `0f844e9a...`, commit `2df27a06`) against the current file (Revision 3, commit `039f0bbb`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to J, simulation engines, "Schematics stay coded; apparatus is painted", root rules R1 to R4, question-card and notes-scene rules); a recorded kit gap (no flux or induction engine); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections. No scene Visual line changed.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module, "the syllabus" or a video number.

Revision 3 visuals: the simulation note is physically right: Φ = BA cos θ for a uniformly turning coil, so the emf (its rate of change, NBAω sin θ) peaks where the flux graph is steepest and is zero where flux is greatest, matching scene 3's narration. `SeriesGraph` exists in `src/explainer/sims/series-views.tsx`. Stage times agree with the scene lengths (scene 1, 637 characters plus a 3 s countdown, about 51 s; stated about 48 s, within rounding). No new pictures, strips or numbers. All named plates exist under `public/`.

Mechanical: 6,300 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD (one U+2013 sits in a quoted site excerpt in the author notes, unchanged since Revision 2).

Findings:

1. **Optional.** "Visual upgrade (Revision 3)" says "there is no induction engine and no alternating source". Since 14 November `circuits.ts` has an `'ac'` source (it still has no induction), so the second half is out of date. The lesson-coded traces remain correct. Proposed fix: "there is no induction engine; the coil's emf is lesson-coded".

2. **Optional.** Scene 16 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 0 should fix, 2 optional.
