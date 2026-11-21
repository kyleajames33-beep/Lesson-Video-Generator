# phys-y12-m8-v16 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `a85631da1cf26139fe9c5e5e9c5bc41b5f1734126f63a643496670a7b082938d`.

Compared: the Revision 2 source reviewed by `p-y12-m8-v16-rev2-error-check.md` (Codex, 9 November, brief 234; evidence `work/brief234/v16-calculations.json`, SHA256 `8cd24416...`, commit `770e3c57`) against the current file (Revision 3, commit `a31af64d`), by git diff. That Revision 2 check ended "0 blockers, 2 should fix", so this check also tests whether those findings were resolved. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to H, simulation engines, "The balance is flagged", root rules R1 to R4, question-card and notes-scene rules); an "Upgrade (Revision 3)" paragraph on scene 17 (navy givens strip); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections. Nothing addressing the two Revision 2 findings changed.

Narration: all 19 scene strings (build parser rules) are byte-identical to the reviewed Revision 2 source. No narration names a module, "the syllabus" or an earlier video by number.

Revision 3 visuals: the scene 17 givens strip repeats the card's quoted statement exactly. Driving the live balance, Δm and the energy bar from one value is exact arithmetic and consistent with the Revision 2 numbers (carbon-12 defect 0.098937 u, 92.16 MeV, 7.68 MeV per nucleon). The flagged coded balance is labelled "mass comparison (diagram)" and matches across the v15 to v16 join; it is root's open call, not a finding here. All named plates exist under `public/`.

Mechanical: 5,744 characters, equal to the sum of the 19 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD (two U+2013 sit in quoted source text, unchanged since Revision 2).

Findings (1 and 2 are the Revision 2 findings, still open):

1. **Should fix (carried from Revision 2, author assumption).** Memory aid section: "Assumptions checked: in a nuclear reaction the total Z and N are conserved". Beta processes change Z and N, as v14 teaches, so the justification is too broad. Proposed fix: "Assumptions checked: in the fusion, fission and formation comparisons used here (no beta processes), the total Z and N are the same on both sides". No speech change.

2. **Should fix (carried from Revision 2, stale build list).** Assets, "Coded:" list: "the binding curve and its ghost". The Revision 2 repair removed the rejected ghost curve from scene 13, so this request could bring it back. Proposed fix: change to "the binding curve". No speech change.

3. **Optional.** Scene 19 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 2 should fix, 1 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `6c7c18cfeea92704f005ba8cc220066baf80dd1de936911c533df44f68f107b5`.

Compared the current file (commit `3575b452`) against the version checked above (`a85631da...`) by git diff. Narration is byte-identical (19 scene strings, 5,744 characters, equal to the headline); bold cues are unchanged.

- Finding 1 is resolved. The assumption now applies only to "the fusion, fission and formation comparisons used here (no beta processes)", where Z and N are the same on both sides, so Δm = −ΔE_b/c² holds as stated.
- Finding 2 is resolved: the "Coded:" list asks only for "the binding curve".
- Finding 3 (optional) is applied: the memory card is "beside the notes".

No U+2014.

Result: 0 blockers, 0 should fix, 0 optional.
