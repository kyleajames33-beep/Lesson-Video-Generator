# phys-y12-m6-v05 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `679efdc26286d059c0d1540b1356f111ef857ccfb16677d1af4d9785d431041a`.

Compared: the current design against the version approved by `p-y12-m6-v05-rev2-error-check.md` (SHA256 `da3ed88a...e4de`, found at commit `7500810a`, 7 November 2026). Two commits touch the file since then: `039f0bbb` (13 November, Revision 3 visual top-up) and `0d345c3a` (21 November, root's course-label edits). Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, `magnetic` field motion runs for every circle, scene 7 slider settings as separate runs with r and T read from each, scene 8's string as a `custom` pull and satellite as a `central` field, scene 9 pairing a `uniform` path with a `magnetic` circle, R1, R2, plates, no video codes on screen, question-card rules, notes scene); scene 10's Visual "red crossings on" became "through the chips" (wording only); a scene 12 "Upgrade (Revision 3)" paragraph (cross grid with "B = 0.25 T, into the page" and the proton's "3.0 × 10⁶ m s⁻¹" arrow); the key-notes hold from about 60 s to about 45 s; Revision 3 notes; and root's two narration edits.

Narration: 15 of 17 scene strings are identical to the approved version. Scene 6: "The syllabus calls this an acceleration perpendicular to the field." became "Physicists call this an acceleration perpendicular to the field." Scene 8: "The syllabus asks us to compare this with other circular motion." became "Let's compare this with other circular motion." Both edits are accurate, have no course label or em dash, read naturally, and leave the bold cues (squared, speed; radius, squared, circle) unchanged and in order. One unedited module label remains (finding 1).

Revision 3 visuals, recomputed (m_p = 1.673 × 10⁻²⁷ kg, e = 1.602 × 10⁻¹⁹ C): attempt 1 r = mv/(qB) = 0.125 m, T = 2πm/(qB) = 2.62 × 10⁻⁷ s (electron-mass slip 6.8 × 10⁻⁵ m); doubling v gives 0.25 m and the same T. A `magnetic` run's period is independent of speed, so "the lap timer shows the same period at every speed" agrees with scene 7 and the T = 2πm/(qB) narration. The attempt 1 panel (field, proton, velocity, no circle, force or timer) gives nothing away. No Revision 3 paragraph adds a cue word.

Mechanical: the 17 scene strings sum to 5,603 characters (under 7,000). Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts (12, 14) keep the full printed question on screen. Notes bullets are 33 to 49 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Should fix.** Scene 3 narration: "That's uniform circular **motion**, which we met in Module five." This names a module number, which root's 21 November pass removes so one take serves the 2017 and 2025 courses; this sentence was missed. Proposed fix: "That's uniform circular **motion**, which we've met before." (−5 characters; cue unchanged). The scene 3 Visual tag "m5-v11: net inward force mv²/r" is already covered by the "no video numbers on screen" rule (builder writes "an earlier video").

2. **Should fix.** Headline (line 5), "Narration length estimate" ("**5,624 characters**" and the Revision 3 note "narration unchanged (5,624 characters)") and the change log "Counts" line all state 5,624, and no section records the 21 November edits. The scene strings now sum to 5,603 (−3 in scene 6, −18 in scene 8), so the stated total no longer equals the sum. Proposed fix: after applying finding 1, set line 5 to the new sum (5,598 if finding 1 is taken as proposed) and add a dated note under "Narration length estimate": "Root label edits (21 Nov 2026): scene 3 'which we met in Module five' became 'which we've met before'; scene 6 'The syllabus calls this' became 'Physicists call this'; scene 8 'The syllabus asks us to compare this' became 'Let's compare this'. Narration now 5,598 characters (was 5,624); cues unchanged."

This is a source check at recording stage only. Finding 1 changes narration, so both findings must be resolved and rechecked against the new source SHA before recording. No motion-at-playback-speed, voiced preview, caption fit, human listening or release pass is supplied.

Result: 0 blockers, 2 should fix, 0 optional.
