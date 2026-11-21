# phys-y12-m8-v15 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `0c5b47fef830d794ed83a9b66d08785d6edddbbc8ce34229bac09a0ba630ec6d`.

Compared: the Revision 2 source reviewed by `p-y12-m8-v15-rev2-error-check.md` (Codex, 9 November, brief 234; evidence `work/brief234/v15-calculations.json`, SHA256 `2ba5517d...`, commit `770e3c57`) against the current file (Revision 3, commit `a31af64d`), by git diff. That Revision 2 check ended "0 blockers, 3 should fix", so this check also tests whether those findings were resolved. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to J, simulation engines, "No clock picture", "The balance in the handoff is flagged", root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scene 15 (painted digital timer reading "30:00") and scene 16 (navy givens strip); a "Calls for root" note on the coded two-pan balance in the handoff and final frame; Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections. Nothing addressing the three Revision 2 findings changed.

Narration: all 18 scene strings (build parser rules) are byte-identical to the reviewed Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number.

Revision 3 visuals: the engines fit the physics. A one-particle reaction at a fixed `rate` in `particle-box.ts` gives every nucleus the same chance per moment whatever its age, and runs of 20, 200 and 2000 wobble less and less about the curve. A `coins` draw per throw with p = 0.5 in `chance.ts` (seeded; `ChanceConfig` takes a seed) models the tray, though the builder must search for a seed that gives 200, 103, 49, 27. The scene 16 givens strip repeats the card (t½ = 10 minutes; lasted 30 minutes without decaying; probability in the next 10 minutes). The timer reading "30:00" is a supplied value, not the answer. `phys-y11-digital-timer-v1.png` and the other named plates exist under `public/`.

Mechanical: 5,636 characters, equal to the sum of the 18 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings (1 to 3 are the Revision 2 findings, still open):

1. **Should fix (carried from Revision 2, learner copy).** Scene 3 Visual: navy hand tag "about half, never exactly". Exactly half can remain by chance (for 200 fair counters, 100 survivors has probability 0.056), and scene 11 itself shows 10 of 20. Proposed fix: change the tag to "about half, not always exactly half". No speech change.

2. **Should fix (carried from Revision 2, author instruction).** Decisions, "The law from the cause": "(because each of N nuclei has chance λ per second)". This is the rejected reading that the repaired scenes avoid; λ is a fixed rate, and only over a short time Δt is the chance about λΔt. Proposed fix: "(because each of N nuclei decays at the same fixed rate λ: in a short time Δt each has a chance of about λΔt)".

3. **Should fix (carried from Revision 2, author instruction).** Decisions, "Handoff": "Every decay gives out energy (millions of electron volts)". Scene 17 and the final frame were repaired to drop the universal MeV claim (carbon-14's beta decay releases only about 0.156 MeV), but this instruction can reintroduce it. Proposed fix: "Every decay gives out energy; weigh a carbon-12 nucleus against its separate nucleons and they don't balance."

4. **Optional.** Scene 18 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes". (Root's open call on the coded two-pan balance in the handoff is noted, not a finding here: it is labelled "mass comparison (diagram)" and is consistent on both sides of the v15 to v16 join.)

Result: 0 blockers, 3 should fix, 1 optional.
