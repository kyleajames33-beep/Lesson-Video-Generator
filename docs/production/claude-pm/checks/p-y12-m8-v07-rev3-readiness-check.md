# phys-y12-m8-v07 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `0c3700796736b967f6fd3028bdbaf846e5664c43802d8883edfb1053bcb323cc`.

Compared: the Revision 2 source approved by `p-y12-m8-v07-rev2-error-check.md` (Codex, 9 November, brief 234; result 0 blockers, 0 should fix; evidence `work/brief234/v07-calculations.json`, SHA256 `e1c5138f...`, commit `a7e4babc`) against the current file (Revision 3, commit `a31af64d`, plus root's 21 November label edit, commit `0d345c3a`), by git diff. The working copy has CRLF line endings (74,586 bytes against the committed LF blob's 74,199; content identical), so the SHA256 above is of the bytes on disk, which is what the preparation script hashes. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to J, simulation engines, "The CRT is still held", root rules R1 to R4, question-card and notes-scene rules); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections; and root's label edit to two narration lines. Scene 5: "That's Module 6's velocity selector." became "That's the velocity selector you met earlier." Scene 6: "as charged particles did between plates in Module 6." became "as charged particles did between charged plates earlier."

Narration: 16 of 18 scene strings are byte-identical to the approved Revision 2 source. Both edits remove the module label, read naturally and change no physics. The quoted visual cues "velocity selector" and "curves like a projectile" still occur in the narration. Recount by the build parser rules: scene 5 is 482 characters and scene 6 is 475, and the 18 scene strings now sum to 6,088. Bold cues in scenes 5 ("B", "second") and 6 ("sideways", "squared", "kilogram") are unchanged and in spoken order. No narration now names a module, "the syllabus" or an earlier video by number. On-screen course tags only, covered by the build rule: scene 5's chip "Module 6" and scene 6's chip "Module 6: projectile-like path".

Revision 3 visuals: the field motion runs are physically right. In stage 1, a `custom` field adding qE/m and the magnetic acceleration runs straight only when v = E/B. In stage 2, a `uniform` field gives the parabolic deflection y read at the plate end. For Millikan, net acceleration qE/m − g makes the drop rise, fall or hang where qE = mg. The coded-outline tube for the held plate `y12p-crt-tube-v1.png` (not delivered) is root's existing allowance. Numbers unchanged (v = 2.5 × 10⁷ m s⁻¹; q/m = 1.76 × 10¹¹ C kg⁻¹). Other named plates exist under `public/`.

Mechanical: both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD. The total is under 7,000.

Findings:

1. **Should fix.** The headline still reads "Narration 6,075 characters", and the length-estimate and revision-log lines still say 6,075, but after root's label edit the 18 scene strings sum to 6,088 (scene 5 +7 and scene 6 +6 characters). The edit has no dated root note recording the change. Proposed fix: change the headline to "Narration 6,088 characters" and add a dated root note: "Root label edit (21 Nov 2026): scene 5 "That's Module 6's velocity selector." became "That's the velocity selector you met earlier."; scene 6 "between plates in Module 6." became "between charged plates earlier."; narration now 6,088 characters (was 6,075); bold cues unchanged." The duration estimate rises by about 1 s (still about 524 s).

2. **Optional.** Scene 18 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 1 should fix, 1 optional.
