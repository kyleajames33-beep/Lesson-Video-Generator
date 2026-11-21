# phys-y12-m6-v12 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `d3c19f99d6f8aa0f0722e2d5a4deb9ce114ffc53d0a284a2cb0b119bc52d5075`.

Compared: the Revision 2 source approved by `p-y12-m6-v12-rev2-error-check.md` (SHA256 `845d5a0a...`, commit `7500810a`) against the current file (Revision 3, commit `039f0bbb`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to J, simulation engines, root rules R1 to R4, question-card and notes-scene rules); two visual cue phrasings in scenes 3 and 12 changed from "on" to "at the cue(s)" (visual text only); scene 16 heading hold 60 s to 45 s; recorded kit gaps (no flux or induction engine; no self-induction in the circuits engine); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 16 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module or "the syllabus" (scene 2's "Year 11" reference is allowed).

Revision 3 visuals: no new pictures or givens strips (both cards and both feedback strips are the approved Revision 2 ones). The stage times agree with the scene lengths (for example scene 3, 623 characters, about 47 s). The circuits engine (`src/explainer/sims/circuits.ts`) supports a switch that changes mid-run, `CircuitView` and `SeriesGraph` exist, and the scene 6 slider (ε = N ΔΦ/Δt) is plain arithmetic. No numbers changed. All named plates exist under `public/`.

Mechanical: 5,705 characters, equal to the sum of the 16 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** Scene 16 (key notes) still reads "Bullets 36 px", "framed card under the notes" and "The quiet hold is about 60 s (at least 40 s)", and the "Holds" line says "key-notes (about 60 s)", while the scene heading and Revision 3 set 45 s, 34 px and the card beside the notes. Proposed fix: change "Bullets 36 px" to "Bullets 34 px", "framed card under the notes" to "framed card beside the notes", "about 60 s (at least 40 s)" to "45 s in all", and "about 60 s" in the Holds line to "45 s in all".

2. **Optional.** "Visual upgrade (Revision 3)", Simulation engines bullet and the Revision 3 kit-gap note say the circuits engine has "no alternating supply". Since 14 November `circuits.ts` has an `'ac'` source and an ideal transformer. Lesson-coded curves still work, so nothing is wrong on screen. Proposed fix: "the alternating current in scene 8 may use the engine's `ac` source; the rise and fall of the primary current stay lesson-coded (no self-induction in the engine)".

Result: 0 blockers, 0 should fix, 2 optional.
