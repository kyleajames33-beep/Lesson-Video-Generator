# phys-y12-m5-v13 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `57b4feb14ddb9ffbaca127c090a878f5f9f3ff3dfa41f34cdbfbc0da2df0b507`.

Compared: the Revision 2 source approved by `p-y12-m5-v13-rev2-error-check.md` (SHA256 `990dc110...0fde`, commit `8d79c0dd`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to J with times, simulation engines, root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scenes 12 to 15 (attempt pictures with the steel ball plate, navy givens strips on both feedback scenes); scene 17 heading hold 50 s to 45 s; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 17 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration re-check is needed beyond that.

Revision 3 visuals: both givens strips repeat their card values exactly ("m = 0.50 kg | string 0.80 m | 35° to the vertical | constant speed, horizontal circle"; "string 0.40 m | 25° to the vertical | constant speed, horizontal circle"). Both attempt pictures show only supplied values (0.80 m and 35°; 0.40 m and 25°) and explicitly omit force arrows, the radius, the height bracket and the lap clock, so they give nothing away. The stage times agree with the scene lengths at 13.3 characters per second plus holds (for example scene 7, 524 characters, about 39 s; scenes 4 and 5, about 56 s). The `central` run in `src/explainer/sims/field-motion.ts` exists; a uniform circle needs gm = v²r, which is buildable. Feedback numbers re-checked with g = 9.8: r = 0.80 sin 35° = 0.459 m; F_T = 4.90 / 0.819 = 5.98 N; v = √(0.459 × 9.8 × tan 35°) = 1.77 m s⁻¹; h = 0.40 cos 25° = 0.363 m; T = 2π√(0.363/9.8) = 1.21 s; the slip 2π√(0.40/9.8) = 1.27 s. All plates named (`phys-y11-steel-ball-v1.png`, `y12p-car-rear-v1.png` and the rest) exist under `public/`.

Mechanical: 5,654 characters, equal to the sum of the 17 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD in the file. No course labels in narration.

Findings:

1. **Optional.** Scene 17 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", while "Visual upgrade (Revision 3)" sets "34 px" and "the framed memory card beside them"; the "Holds" line in "Per-scene motion" still says "key-notes (about 50 s)". The Revision 3 notes after each line make the intent clear, but a builder reading the scene alone gets the old values. Proposed fix: in scene 17 change "32 px" to "34 px" and "framed card under the notes" to "framed card beside the notes", and in the Holds line change "about 50 s" to "45 s in all".

Result: 0 blockers, 0 should fix, 1 optional.
