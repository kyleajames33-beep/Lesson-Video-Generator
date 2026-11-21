# phys-y12-m8-v10 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `17e647c9ce4e3392ecfb50ba0d3ded8974a165ed1b8d6644e6455b7096c8e0ee`.

Compared: the current design against the version approved by `p-y12-m8-v10-rev2-error-check.md` (its source hash `78a1c54e...5e74` is recorded in `work/brief234/v10-calculations.json`; found at commit `a7e4babc`, 7 November 2026). Two commits touch the file since then: `a31af64d` (13 November, Revision 3 visual top-up) and `0d345c3a` (21 November, root's course-label edit). Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, the classical spiral as a `custom` field motion run with an attractive 1/r² pull plus a small drag standing for radiated energy, so the path winds inward and the scene 4 radius, orbit frequency and emitted wavelength readouts come from the run, tagged "classical prediction" and slowed; the energy ladder and orbit picker exact from E_n = −13.6/n² eV; R1, R2, plates, no video codes on screen, question-card rules, notes scene); a scene 3 "Upgrade (Revision 3)" paragraph (the hydrogen in `y12p-vapour-cell-v1.png`, fallback the unlit discharge tube); Revision 3 notes (root call: the drag is chosen to show the path, and the on-screen 10⁻¹¹ s is the design's value, not read from the run); and root's scene 1 narration edit.

Narration: 20 of 21 scene strings are identical to the approved version. Scene 1: "and in Module 7 we saw that accelerating charges give out electromagnetic waves" became "and we've seen that accelerating charges give out electromagnetic waves". The edit is accurate, has no course label or em dash, reads naturally, and the bold cues (prediction, spectra) are unchanged and in order. No narration names a module number, "the syllabus" or an earlier video by number. The scene 1 chip is described in the design as "a Module 7 chip" but its screen text is "accelerating charges radiate EM waves", so no course label appears on screen.

Revision 3 visuals: an inward spiral whose orbit frequency rises as the radius shrinks makes the predicted light sweep continuously, which is exactly the narrated classical failure (a smear, not sharp lines). The root call keeps the 10⁻¹¹ s collapse time as the design's value rather than a run reading, which is honest because the drag is a display choice. The vapour cell plate exists. The ladder values follow E_n = −13.6/n² eV. Both attempt cards already carried pictures and both feedback scenes givens strips. No Revision 3 paragraph adds a cue word.

Mechanical: the 21 scene strings sum to 6,029 characters (under 7,000). Bold cues match as whole words, verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 46 to 57 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Should fix.** Headline (line 5), the Revision 3 note in "Narration length estimate" ("narration unchanged (6,037 characters)") and the change log "Counts" line state 6,037, and no section records root's 21 November scene 1 edit (commit `0d345c3a`). The scene strings now sum to 6,029 ("in Module 7 we saw" became "we've seen", −8), so the stated total no longer equals the sum. Proposed fix: set line 5 to "Narration 6,029 characters, 21 scenes"; add a dated note: "Root label edit (21 Nov 2026): scene 1 'and in Module 7 we saw that' became 'and we've seen that' so one take serves both syllabuses. Narration now 6,029 characters (−8); cues unchanged."

This is a source check at recording stage only. Finding 1 is a count and record correction with no effect on the spoken text; once made, the source SHA changes and needs a fresh passing check. No motion-at-playback-speed, voiced preview, caption fit, human listening or release pass is supplied.

Result: 0 blockers, 1 should fix, 0 optional.
