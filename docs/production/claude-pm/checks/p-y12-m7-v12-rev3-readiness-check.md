# phys-y12-m7-v12 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `d6bb3db461dd7afcafa74371ac735be7cede6d113c670801c5d2a668dbd30507`.

Compared: the Revision 2 source approved by `p-y12-m7-v12-rev2-error-check.md` (Codex, 9 November; its evidence file `work/brief233/v12-calculations.json` names SHA256 `0d109685...`, the version in commit `bd8ce5b5`) against the current file (Revision 3, commit `2339843a`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to H, simulation engines, "Cabin objects are plates where they can be", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 3 (a small spacecraft plate copy replaces the ship icon), scene 4 (steel ball plates replace coded discs), and scenes 14 and 16 (navy givens strips); a recorded kit gap; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 18 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number. On-screen video code only, covered by the build rule: scene 6's tag "v06: interference fringes".

Revision 3 visuals: both givens strips repeat their cards' parts and conditions (the three frames with "constant velocity, engines off", "constant speed", "slowing"; the quoted statement). Building the expected and null fringe strips from `sumAt` in `src/explainer/sims/waves.ts` (two waves with a lesson-set path difference) is physically sound and buildable; the expected shift of about 0.4 fringe and the 0.01 fringe sensitivity are unchanged. Keeping the spring coded because it must stretch is correct. All named plates exist under `public/`.

Mechanical: 6,351 characters, equal to the sum of the 18 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** Scene 18 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 0 should fix, 1 optional.
