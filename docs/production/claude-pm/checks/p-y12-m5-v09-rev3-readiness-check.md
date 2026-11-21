# phys-y12-m5-v09 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `26305febea754f311c8dce7fa7131ad5a1d316fc3bda09b370992bc6e32e213d`.

Compared: the current design against the version approved by `p-y12-m5-v09-rev2-error-check.md` (SHA256 `19a592cd...d3c6`, found byte-identical at commit `f6d0e9e4`, 6 November 2026). Two commits touch the file since then: `fe99a3b7` (13 November, Revision 3 visual top-up) and `0d345c3a` (21 November, root's course-label edit, one line). Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, no engine fits torque so both sliders stay lesson-coded arithmetic, R1, R2, plates, no video codes on screen, question-card rules, notes scene); "Upgrade (Revision 3)" paragraphs in scenes 10 to 13 (exam diagrams as card pictures, givens strips); the key-notes hold from about 50 s to about 45 s; Revision 3 notes in the length estimate, joins, asset brief, check list and change log; and root's scene 5 narration edit.

Narration: 14 of 15 scene strings are identical to the approved version. Scene 5 changed only in its last sentence: "which the syllabus also writes as r perpendicular times F" became "which you'll also see written as r perpendicular times F". The edit is scientifically unchanged (τ = r⊥F = rF sin θ), has no course label, no em dash, reads naturally aloud, and keeps the bold cue **F** as the final word, so the cue order (arm, again, F) is unchanged.

Revision 3 visuals, recomputed: r⊥ = 0.25 sin 30° = 0.125 m, τ = 10 N m; attempt 1 gives 12 N m and 6.0 N m, slip 0.30 × 40 × cos 30° = 10.4 N m; attempt 2 gives r⊥ = 0, τ = 0, θ = 180°. The attempt 1 lever diagram (neutral slant, arc tagged "θ" only) and the attempt 2 handle diagram (handle, pivot, force towards the pivot, no line of action or moment arm) show only what the cards state. Both givens strips repeat their cards. No Revision 3 paragraph adds a cue word. The "no engine fits" note is consistent with the statics scenes (the spanner never moves).

Mechanical: the 15 scene strings sum to 5,705 characters (under 7,000), which also matches Codex's `source-audit.json`. Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts (10, 12) keep the full printed question on screen. Notes bullets are 47 to 77 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Should fix.** Headline (line 5), "Narration length estimate" Revision 3 note and the Revision 3 change log "Counts" line all state "5,706 characters", and no section records the 21 November scene 5 edit. The scene strings now sum to 5,705 (the new clause is one character shorter). The stated total no longer equals the sum of the scene strings, and the design gives no trace of a narration change after Revision 3. Proposed fix: change line 5 to "Narration 5,705 characters, 15 scenes, about 504 s"; and add one line under "Narration length estimate": "21 Nov 2026 (root): scene 5 label edit, 'which the syllabus also writes as' became 'which you'll also see written as' (course label removed; one take serves both syllabuses). 5,705 characters (−1); cues unchanged." Leave the Revision 2 and Revision 3 historical counts as they are.

2. **Optional.** Scene 5 Visual, on "F": "the syllabus strip writes 'τ = r⊥F = rF sin θ' (boxed, 60 px) with a grey tag 'Physics Stage 6 (2017)'". The narration no longer names the syllabus, and the edit's purpose is one take for both syllabuses, so a dated course tag on screen works against that reuse (it does not contradict the spoken words). Proposed fix: "the formula strip writes 'τ = r⊥F = rF sin θ' (boxed, 60 px) with a grey tag 'two forms of one formula'".

Result: 0 blockers, 1 should fix, 1 optional.

This is a source check at recording stage only. Finding 1 is a count and record correction with no effect on the spoken text; once it is made, the source SHA changes and needs a fresh passing check. No motion-at-playback-speed, voiced preview, caption fit, human listening or release pass is supplied.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `f45e5694dca14f0e8c0c007533b365b703daf6efd1965c2cf4c9d2720186175c`.

Compared against the version checked above (`26305feb...213d`, the committed `0d345c3a` file). Content changes: line 5 now reads "Narration 5,705 characters, 15 scenes"; a new note after the Revision 3 "Counts" line reads "Root label edit (21 Nov 2026): scene 5's course label became 'which you'll also see written as r perpendicular times **F**.' so one take serves both syllabuses. Narration now 5,705 characters (one fewer); bold cues and their order are unchanged." Both statements are correct. The file's line endings also changed from CRLF to LF, which accounts for part of the new SHA but changes no text. This resolves finding 1.

Narration: all 15 scene strings are unchanged from the version checked above and sum to 5,705 characters, now matching the headline; bold cues unchanged and in order; no U+2014 in the file.

Open: finding 2 (optional) was not taken. For the record, the tag is in a scene Visual, not only the syllabus line: scene 5's Visual, on "F", reads "the syllabus strip writes 'τ = r⊥F = rF sin θ' (boxed, 60 px) with a grey tag 'Physics Stage 6 (2017)'". It remains optional because it is a visual (it can differ per build) and does not contradict the narration.

Result: 0 blockers, 0 should fix, 1 optional.
