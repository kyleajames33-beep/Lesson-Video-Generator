# phys-y12-m6-v07 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `7146206ec457cffd85a3c0ae7febde238b5355b0ad8b0020a5f04357aec95d10`.

Compared: the current design against the version approved by `p-y12-m6-v07-rev2-error-check.md` (SHA256 `21bb13e9...07fa`, found at commit `7500810a`, 7 November 2026). Two commits touch the file since then: `039f0bbb` (13 November, Revision 3 visual top-up) and `0d345c3a` (21 November, root's course-label edit). Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, the scene 1 bench circuit on the circuits engine with the switch closing mid-run, the scene 5 dial as lesson-coded arithmetic, the support as painted plates, R1, R2, no video codes on screen, question-card rules, notes scene); a scene 1 "Upgrade (Revision 3)" paragraph (rod hung from the painted boss, crossbar and stand; a supply current chip reading "0 A" until the switch closes); scene 8's Visual "red crossing on" became "through the chip" (wording only); the key-notes hold from about 60 s to about 45 s; Revision 3 notes; and root's scene 5 narration edit.

Narration: 13 of 14 scene strings are identical to the approved version. Scene 5: "which the syllabus writes as F equals l I perpendicular B" became "which you'll also see written as F equals l I perpendicular B". The edit is accurate, has no course label or em dash, reads naturally, and the bold cues (field, all, B, newtons, current) are unchanged and in order. No narration in the file names a module number or "the syllabus".

Revision 3 visuals: the circuits-engine run makes the current (and so the kick) start when the switch closes, matching "Close the switch, and a current flows". Direction check, with x right, y up and z towards the viewer: B down and I to the right give F = Il × B along −z, away from us, and reversing I gives towards us, as narrated. Scene 5 values: BIl = 0.050 × 4.0 × 0.30 = 0.060 N, 0.030 N at 30°, 0.052 N at 60°. Both plates named in the scene 1 upgrade exist (`phys-y11-boss-crossbar-v1.png`, `phys-y11-retort-stand-v1.png`). Both attempt cards already carried answer-free diagrams and both feedback scenes givens strips. No Revision 3 paragraph adds a cue word.

Mechanical: the 14 scene strings sum to 5,996 characters (under 7,000). Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 42 to 51 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Should fix.** Headline (line 5), "Narration length estimate" ("**5,992 characters**" and the Revision 3 note "narration unchanged (5,992 characters)") and the change log "Counts" line state 5,992, and no section records the 21 November scene 5 edit. The scene strings now sum to 5,996 (the new clause is four characters longer), so the stated total no longer equals the sum. Proposed fix: set line 5 to "Narration 5,996 characters, 14 scenes"; add under "Narration length estimate": "Root label edit (21 Nov 2026): scene 5 'which the syllabus writes as' became 'which you'll also see written as' so one take serves both syllabuses. Narration now 5,996 characters (+4); cues unchanged."

2. **Optional.** Scene 5 Visual, on "B": "under it the syllabus form 'F = lI⊥B = lIB sin θ' (framed) with a grey tag 'Physics Stage 6 (2017)'". The narration no longer names the syllabus, and a dated course tag on screen works against one take for both courses (it does not contradict the spoken words). Proposed fix: "under it the second form 'F = lI⊥B = lIB sin θ' (framed) with a grey tag 'same formula, written with I⊥'".

This is a source check at recording stage only. Finding 1 is a count and record correction with no effect on the spoken text; once made, the source SHA changes and needs a fresh passing check. No motion-at-playback-speed, voiced preview, caption fit, human listening or release pass is supplied.

Result: 0 blockers, 1 should fix, 1 optional.
