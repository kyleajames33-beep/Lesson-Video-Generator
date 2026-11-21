# phys-y12-m8-v13 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `f45fe79e937eed6047cd454095508268098bf30f2028224d25f3db54ba85e970`.

Compared: the Revision 2 source approved by `p-y12-m8-v13-rev2-error-check.md` (Codex, 9 November, brief 234; result 0 blockers, 0 should fix; evidence `work/brief234/v13-calculations.json`, SHA256 `cf106f1b...`, commit `770e3c57`) against the current file (Revision 3, commit `a31af64d`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to H, simulation engines, root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scenes 14 and 16 (navy givens strips repeating each card's demand); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 18 scene strings (build parser rules) are byte-identical to the approved Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number.

Revision 3 visuals: real standing-wave modes from `standingMode` (fixed ends) with `WaveStringView` suit scene 4. Building the scene 6 cloud one draw at a time from a `weighted` experiment, shown with `trialsShown`, matches the narration ("Each measurement finds it at one point"). Both givens strips repeat their cards' command and terms. The scene 5 probe values are unchanged and correct for ψ ∝ e^(−r/a₀), a₀ = 53 pm: 0.50 and 0.25 at 37 pm, 0.37 and 0.14 at 53 pm. All named plates exist under `public/`.

Mechanical: 5,632 characters, equal to the sum of the 18 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** "Visual upgrade (Revision 3)", Simulation engines bullet: the cloud's regions are "weighted by the hydrogen 1s probability". If a builder takes this as the radial probability (4πr²|ψ|², which peaks at 53 pm), the cloud would have a hollow centre, contradicting scene 6's "densest near the nucleus". The bullet's own "denser near the nucleus because the weights are" shows the intent. Proposed fix: "weighted by |ψ|² for 1s (probability per unit volume) times the region's area on the slice".

2. **Optional.** Scene 18 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 0 should fix, 2 optional.
