# phys-y12-m6-v09 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `1b6c2bd3e83e6a977c0dae102ca56e4c9d33cbee081c3074e8b88b30b283e64a`.

Compared: the current design against the version approved by `p-y12-m6-v09-rev2-error-check.md` (SHA256 `f20464d8...41b2`, found at commit `7500810a`, 7 November 2026). Two commits touch the file since then: `039f0bbb` (13 November, Revision 3 visual top-up) and `0d345c3a` (21 November, root's course-label edit). Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, no engine fits flux so the turning loop, counter and readouts stay lesson-coded arithmetic Φ = BA cos θ, R1, R2, plates, no video codes on screen, question-card rules, notes scene); scene 1's Visual "the inset fades on 'zero'" became "fades at the same cue" (wording only, same timing); the key-notes hold from about 60 s to about 45 s; Revision 3 notes (kit gap: no flux and induction engine); and root's scene 4 narration edit. No scene gained an "Upgrade (Revision 3)" paragraph.

Narration: 14 of 15 scene strings are identical to the approved version. Scene 4: "The syllabus also writes it as B parallel times A" became "You'll also see it written as B parallel times A". The edit is accurate (Φ = B∥A = BA cos θ), has no course label or em dash, reads naturally, and the bold cues (surface, normal, through, theta, normal) are unchanged and in order. No narration in the file names a module number or "the syllabus".

Revision 3 visuals: the lesson-coded loop with counter and cosine dot computed from one angle agrees with scenes 1 and 5 (6 through face on, 3 at 60°, 0 edge on; cos 60° = 0.5). The scene 1 cue rewording keeps the inset fade at the word "zero". Both attempt cards already carried answer-free diagrams and both feedback scenes givens strips. No Revision 3 change adds a cue word.

Mechanical: the 15 scene strings sum to 5,594 characters (under 7,000). Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 31 to 45 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Should fix.** Headline (line 5), "Narration length estimate" ("**5,595 characters**" and the Revision 3 note "narration unchanged (5,595 characters)") and the change log "Counts" line state 5,595, and no section records the 21 November scene 4 edit. The scene strings now sum to 5,594 (the new clause is one character shorter), so the stated total no longer equals the sum. Proposed fix: set line 5 to "Narration 5,594 characters, 15 scenes"; add under "Narration length estimate": "Root label edit (21 Nov 2026): scene 4 'The syllabus also writes it as' became 'You'll also see it written as' so one take serves both syllabuses. Narration now 5,594 characters (−1); cues unchanged."

2. **Optional.** Scene 4 Visual, on the last "normal": "the syllabus form writes and frames 'Φ = B∥A = BA cos θ' (60 px), grey-ink tag 'Physics Stage 6 (2017)'". The narration no longer names the syllabus, and a dated course tag on screen works against one take for both courses (it does not contradict the spoken words). Proposed fix: "the second form writes and frames 'Φ = B∥A = BA cos θ' (60 px), grey-ink tag 'same flux, written with B∥'".

This is a source check at recording stage only. Finding 1 is a count and record correction with no effect on the spoken text; once made, the source SHA changes and needs a fresh passing check. No motion-at-playback-speed, voiced preview, caption fit, human listening or release pass is supplied.

Result: 0 blockers, 1 should fix, 1 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `710b4976eb7eae1500f7b550187699af0cc1405ac2ce28cc874949b03194c97c`.

Compared against the version checked above (`1b6c2bd3...e64a`, the `0d345c3a` file) after root's commit `09b3e84e`. Changes: line 5 now reads 5,594 characters, and a dated root note after it records the 21 November scene 4 edit and the corrected count. No narration changed. Finding 1 is resolved.

Recount: the 15 scene strings sum to 5,594 characters, equal to the headline and under 7,000. All bold cues are unchanged, verbatim and in order. No U+2014 in the file.

Open: finding 2 (optional, the scene 4 on-screen tag "Physics Stage 6 (2017)") remains open; root is covering it with a build rule that no course or module tag appears on screen.

Result: 0 blockers, 0 should fix, 1 optional.
