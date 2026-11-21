# phys-y12-m7-v13 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `b9ed324b3a863625a97baa608f9684e12533e52709a00da1849f9a487d02d386`.

Compared: the Revision 2 source approved by `p-y12-m7-v13-rev2-error-check.md` (Codex, 9 November; its evidence file `work/brief233/v13-calculations.json` names SHA256 `d1061d23...`, the version in commit `bd8ce5b5`) against the current file (Revision 3, commit `2339843a`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to I, simulation engines, "The star is a plate", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scenes 11 and 17 (the star becomes a small copy of `y12p-star-white-v1.png`); a recorded kit gap; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 18 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number.

Revision 3 visuals: driving the light clocks, the γ slider and every readout from one speed value is physically sound and keeps the panels consistent. Stage times agree with the scene lengths (scenes 4 and 5, 818 characters, about 62 s). No numbers, card pictures or givens strips changed. `y12p-star-white-v1.png` and the other named plates exist under `public/`.

Mechanical: 6,395 characters, equal to the sum of the 18 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD (two U+2013 are inside the quoted syllabus text, unchanged since Revision 2).

Findings:

1. **Optional.** Scene 17's upgrade makes the star in the final frame the painted star plate, but this file's "Final frame" section still says "a coded star at the right", and `phys-y12-m7-v14.md` "Opening frame" also says "a coded star". The two sides of the v13 to v14 join would then differ. Proposed fix: in "Final frame" change "a coded star" to "a small copy of the white star plate (`y12p-star-white-v1.png`, about 70 px)", and make the same change in v14's "Opening frame".

2. **Optional.** Scene 18 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 0 should fix, 2 optional.
