# phys-y12-m8-v01 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `750aef2045d81b764e3529710d5ff8fb24c9a91cbbb13d329a2d77524b612814`.

Compared: the Revision 2 source reviewed by `p-y12-m8-v01-rev2-error-check.md` (Codex, 9 November, brief 234; evidence `work/brief234/v01-calculations.json`, SHA256 `4015b980...`, commit `a7e4babc`) against the current file (Revision 3, commit `a31af64d`), by git diff. That Revision 2 check ended "0 blockers, 1 should fix", so this check also tests whether that finding was resolved. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to K, simulation engines, root rules R1 to R4, question-card and notes-scene rules); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections. No scene Visual line changed, and nothing addressing the Revision 2 finding changed.

Narration: all 18 scene strings (build parser rules) are byte-identical to the reviewed Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number.

Revision 3 visuals: the particle-box models fit the narration. In scene 6, pair annihilation from model counts (31 against 30) leaves a few protons, and the tag "model: the real excess was about one in a billion" keeps the narrated figure. In scene 8, a break-up reaction with an activation energy lets deuterium survive only once the falling temperature is low enough ("the wait for nuclei"). In scenes 10 and 11, the free electron count falls as the temperature reaches about 3000 K. The cooling dial and threshold gauges stay exact arithmetic (Wien's law, E = mc²). No numbers, card pictures or givens strips changed. All named plates exist under `public/`.

Mechanical: 6,504 characters, equal to the sum of the 18 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Should fix (carried from Revision 2, description and author shorthand).** The draft YouTube description says "photons stopped making particle pairs", and "Teaching checks" says "pairs need E ≥ mc², cooling stops making". Both keep the categorical switch-off claim rejected in brief 192; the repaired scene 3 keeps the energetic tail, so production becomes rare while annihilation continues. Proposed fix: description "photons became too cool to make particle pairs often"; Teaching checks "pairs need E ≥ mc², so as it cools production becomes rare while annihilation continues". No narration change.

2. **Optional.** Scene 18 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 1 should fix, 1 optional.
