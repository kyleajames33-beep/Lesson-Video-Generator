# phys-y12-m8-v18 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `9bea47094bd7790a42501ff296d0d27cfdf52307b33c3d217ada37d743e2db9c`.

Compared: the Revision 2 source reviewed by `p-y12-m8-v18-rev2-error-check.md` (Codex, 9 November, brief 234; evidence `work/brief234/v18-calculations.json`, SHA256 `8063971c...`, commit `770e3c57`) against the current file (Revision 3, commit `a31af64d`), by git diff. That Revision 2 check ended "0 blockers, 1 should fix", so this check also tests whether that finding was resolved. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to L, simulation engines, "The temperature is a readout", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 5 (a temperature readout chip, not a thermometer) and scene 17 (navy givens strip); a recorded kit gap; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections. Nothing addressing the Revision 2 finding changed.

Narration: all 19 scene strings (build parser rules) are byte-identical to the reviewed Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number.

Revision 3 visuals: the scene 17 givens strip restates the card's demand and its two named parts. The k-slider bars (1000 × k^(n − 1)) and the rod readouts are exact arithmetic, as checked in Revision 2. The temperature chip contradicts nothing spoken. All named plates exist under `public/`.

Mechanical: 6,435 characters, equal to the sum of the 19 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Should fix.** "Visual upgrade (Revision 3)", Simulation engines bullet: "The generation tree (scenes 6 and 11) uses the chance engine (`chance.ts`): each generation is one `coins` draw ... so the tree branches at random while its average follows k." Scene 6 is a deliberately exact idealisation. The narration says "Say each fission triggers two more. One fission, then two, then four, then **eight**" and "After ten generations, that's over a thousand fissions at **once**", and the Visual shows the rows 2, 4, 8 and the counter "Gen 11: 2¹⁰ = 1024 fissions". A random tree cannot be relied on to give exactly 2, 4, 8, ..., 1024, and no seed search will reliably find ten exact doublings, so the counter would contradict the picture or the narration. Proposed fix: "The generation tree in scene 6 is exact (each fission triggers exactly two more, as narrated: 1, 2, 4, 8, ..., 1024 at Gen 11). In scene 11 the tree uses the chance engine (`chance.ts`): each generation is one `coins` draw ... average k = 2, seed chosen by looking, tagged "model"."

2. **Should fix (carried from Revision 2, author cause chain).** Decisions, "Cause chain taught", point (8): "with k above 1 and nothing absorbing, the chain multiplies so fast that the energy is released in a fraction of a second (11)." This drops the conditions the repaired scene 11 now states (k well above 1, a fast unmoderated lump, generations far shorter than a microsecond), and it could restore the rejected claim that every k > 1 explodes. Proposed fix: "(8) with k well above 1, nothing absorbing and fast neutrons in an unmoderated lump, generations follow in far less than a microsecond, so the energy is released in a fraction of a second; a reactor briefly above 1 only raises its power (11)." No speech change.

3. **Optional.** Scene 19 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 2 should fix, 1 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `f38b2b28188268593f802acdd7a9dd4a34934e9a33b9d0954051add302a22b9e`.

Compared the current file (commit `3575b452`) against the version checked above (`9bea4709...`) by git diff. Narration is byte-identical (19 scene strings, 6,435 characters, equal to the headline); bold cues are unchanged.

- Finding 1 is resolved, and the deviation is sound. The scene 6 tree is now exact and lesson-coded (1, 2, 4, 8, ..., 2¹⁰ = 1024 at Gen 11), matching "each fission triggers two more" and the counter. Only scene 11's tree is a seeded `coins` run with average k = 2, tagged "model". That suits scene 11's point (unchecked growth), and the narration there gives no exact counts.
- Finding 2 is resolved. Cause-chain point 8 now keeps scene 11's conditions (k well above 1, nothing absorbing, fast neutrons in an unmoderated lump, generations far shorter than a microsecond) and notes that a reactor briefly above 1 only raises its power.
- Finding 3 (optional) is applied: the memory card is "beside the notes".

No U+2014.

Result: 0 blockers, 0 should fix, 0 optional.
